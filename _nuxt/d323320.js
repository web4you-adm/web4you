(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    0: function (e, t, n) {
      "use strict";
      n.d(t, "k", (function () {
        return w
      })), n.d(t, "m", (function () {
        return x
      })), n.d(t, "l", (function () {
        return _
      })), n.d(t, "e", (function () {
        return j
      })), n.d(t, "b", (function () {
        return O
      })), n.d(t, "s", (function () {
        return C
      })), n.d(t, "g", (function () {
        return k
      })), n.d(t, "h", (function () {
        return $
      })), n.d(t, "d", (function () {
        return E
      })), n.d(t, "r", (function () {
        return A
      })), n.d(t, "j", (function () {
        return S
      })), n.d(t, "t", (function () {
        return R
      })), n.d(t, "o", (function () {
        return D
      })), n.d(t, "q", (function () {
        return N
      })), n.d(t, "f", (function () {
        return I
      })), n.d(t, "c", (function () {
        return L
      })), n.d(t, "i", (function () {
        return B
      })), n.d(t, "p", (function () {
        return U
      })), n.d(t, "a", (function () {
        return K
      })), n.d(t, "n", (function () {
        return W
      })), n.d(t, "u", (function () {
        return J
      }));
      n(53), n(30), n(18), n(22), n(45), n(59), n(58), n(158);
      var r = n(20),
        o = (n(23), n(24), n(109), n(111), n(112), n(44), n(29), n(2)),
        c = (n(25), n(40), n(17), n(19)),
        l = n(11),
        d = (n(16), n(8), n(162), n(1)),
        h = n(55);

      function f(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function m(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? f(Object(source), !0).forEach((function (t) {
            Object(c.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }

      function v(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return y(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return c = e.done, e
          },
          e: function (e) {
            l = !0, o = e
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
        }
      }

      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }

      function w(e) {
        d.a.config.errorHandler && d.a.config.errorHandler(e)
      }

      function x(e) {
        return e.then((function (e) {
          return e.default || e
        }))
      }

      function _(e) {
        return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
      }

      function j(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = e.$children || [],
          o = v(r);
        try {
          for (o.s(); !(t = o.n()).done;) {
            var c = t.value;
            c.$fetch ? n.push(c) : c.$children && j(c, n)
          }
        } catch (e) {
          o.e(e)
        } finally {
          o.f()
        }
        return n
      }

      function O(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var n = e.options._originDataFn || e.options.data || function () {
            return {}
          };
          e.options._originDataFn = n, e.options.data = function () {
            var data = n.call(this, this);
            return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), m(m({}, data), t)
          }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
        }
      }

      function C(e) {
        return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = d.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
      }

      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
        return Array.prototype.concat.apply([], e.matched.map((function (e, r) {
          return Object.keys(e[n]).map((function (o) {
            return t && t.push(r), e[n][o]
          }))
        })))
      }

      function $(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return k(e, t, "instances")
      }

      function E(e, t) {
        return Array.prototype.concat.apply([], e.matched.map((function (e, n) {
          return Object.keys(e.components).reduce((function (r, o) {
            return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
          }), [])
        })))
      }

      function A(e, t) {
        return Promise.all(E(e, function () {
          var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
            return regeneratorRuntime.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if ("function" != typeof n || n.options) {
                    e.next = 4;
                    break
                  }
                  return e.next = 3, n();
                case 3:
                  n = e.sent;
                case 4:
                  return o.components[c] = n = C(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                case 6:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function (t, n, r, o) {
            return e.apply(this, arguments)
          }
        }()))
      }

      function S(e) {
        return P.apply(this, arguments)
      }

      function P() {
        return (P = Object(o.a)(regeneratorRuntime.mark((function e(t) {
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return");
              case 2:
                return e.next = 4, A(t);
              case 4:
                return e.abrupt("return", m(m({}, t), {}, {
                  meta: k(t).map((function (e, n) {
                    return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                  }))
                }));
              case 5:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }

      function R(e, t) {
        return T.apply(this, arguments)
      }

      function T() {
        return (T = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
          var o, c, d, h;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t.context || (t.context = {
                  isStatic: !1,
                  isDev: !1,
                  isHMR: !1,
                  app: t,
                  store: t.store,
                  payload: n.payload,
                  error: n.error,
                  base: "/",
                  env: {
                    apiURL: "https://admin.dotlogics.com",
                    storageCDN: "https://admin.dotlogics.com/storage/",
                    base_url: "https://www.web4you.bg"
                  }
                }, n.req && (t.context.req = n.req), n.res && (t.context.res = n.res), n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function (e, path, n) {
                  if (e) {
                    t.context._redirected = !0;
                    var o = Object(r.a)(path);
                    if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {}, path = e, o = Object(r.a)(path), e = 302), "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = V(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                    t.context.next({
                      path: path,
                      query: n,
                      status: e
                    })
                  }
                }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([S(n.route), S(n.from)]);
              case 3:
                o = e.sent, c = Object(l.a)(o, 2), d = c[0], h = c[1], n.route && (t.context.route = d), n.from && (t.context.from = h), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
              case 15:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }

      function D(e, t) {
        return !e.length || t._redirected || t._errored ? Promise.resolve() : N(e[0], t).then((function () {
          return D(e.slice(1), t)
        }))
      }

      function N(e, t) {
        var n;
        return (n = 2 === e.length ? new Promise((function (n) {
          e(t, (function (e, data) {
            e && t.error(e), n(data = data || {})
          }))
        })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
      }

      function I(base, e) {
        if ("hash" === e) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var t = (path || "/") + window.location.search + window.location.hash;
        return Object(h.b)(t)
      }

      function L(e, t) {
        return function (e, t) {
          for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", Q(t)));
          return function (t, r) {
            for (var path = "", data = t || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < e.length; c++) {
              var l = e[c];
              if ("string" != typeof l) {
                var d = data[l.name || "pathMatch"],
                  h = void 0;
                if (null == d) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue
                  }
                  throw new TypeError('Expected "' + l.name + '" to be defined')
                }
                if (Array.isArray(d)) {
                  if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                  if (0 === d.length) {
                    if (l.optional) continue;
                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                  }
                  for (var f = 0; f < d.length; f++) {
                    if (h = o(d[f]), !n[c].test(h)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(h) + "`");
                    path += (0 === f ? l.prefix : l.delimiter) + h
                  }
                } else {
                  if (h = l.asterisk ? z(d, !0) : o(d), !n[c].test(h)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + h + '"');
                  path += l.prefix + h
                }
              } else path += l
            }
            return path
          }
        }(function (e, t) {
          var n, r = [],
            o = 0,
            c = 0,
            path = "",
            l = t && t.delimiter || "/";
          for (; null != (n = H.exec(e));) {
            var d = n[0],
              h = n[1],
              f = n.index;
            if (path += e.slice(c, f), c = f + d.length, h) path += h[1];
            else {
              var m = e[c],
                v = n[2],
                y = n[3],
                w = n[4],
                x = n[5],
                _ = n[6],
                j = n[7];
              path && (r.push(path), path = "");
              var O = null != v && null != m && m !== v,
                C = "+" === _ || "*" === _,
                k = "?" === _ || "*" === _,
                $ = n[2] || l,
                pattern = w || x;
              r.push({
                name: y || o++,
                prefix: v || "",
                delimiter: $,
                optional: k,
                repeat: C,
                partial: O,
                asterisk: Boolean(j),
                pattern: pattern ? M(pattern) : j ? ".*" : "[^" + F($) + "]+?"
              })
            }
          }
          c < e.length && (path += e.substr(c));
          path && r.push(path);
          return r
        }(e, t), t)
      }

      function B(e, t) {
        var n = {},
          r = m(m({}, e), t);
        for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
        return n
      }

      function U(e) {
        var t;
        if (e.message || "string" == typeof e) t = e.message || e;
        else try {
          t = JSON.stringify(e, null, 2)
        } catch (n) {
          t = "[".concat(e.constructor.name, "]")
        }
        return m(m({}, e), {}, {
          message: t,
          statusCode: e.statusCode || e.status || e.response && e.response.status || 500
        })
      }
      window.onNuxtReadyCbs = [], window.onNuxtReady = function (e) {
        window.onNuxtReadyCbs.push(e)
      };
      var H = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

      function z(e, t) {
        var n = t ? /[?#]/g : /[/?#]/g;
        return encodeURI(e).replace(n, (function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }))
      }

      function F(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }

      function M(e) {
        return e.replace(/([=!:$/()])/g, "\\$1")
      }

      function Q(e) {
        return e && e.sensitive ? "" : "i"
      }

      function V(e, t) {
        var n, r = e.indexOf("://"); - 1 !== r ? (n = e.substring(0, r), e = e.substring(r + 3)) : e.startsWith("//") && (e = e.substring(2));
        var o, c = e.split("/"),
          d = (n ? n + "://" : "//") + c.shift(),
          path = c.join("/");
        if ("" === path && 1 === c.length && (d += "/"), 2 === (c = path.split("#")).length) {
          var h = c,
            f = Object(l.a)(h, 2);
          path = f[0], o = f[1]
        }
        return d += path ? "/" + path : "", t && "{}" !== JSON.stringify(t) && (d += (2 === e.split("?").length ? "&" : "?") + function (e) {
          return Object.keys(e).sort().map((function (t) {
            var n = e[t];
            return null == n ? "" : Array.isArray(n) ? n.slice().map((function (e) {
              return [t, "=", e].join("")
            })).join("&") : t + "=" + n
          })).filter(Boolean).join("&")
        }(t)), d += o ? "#" + o : ""
      }

      function K(e, t, n) {
        e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
      }

      function Y(path) {
        return path.replace(/\/+$/, "") || "/"
      }

      function W(e, t) {
        return Y(e) === Y(t)
      }

      function J(e) {
        try {
          window.history.scrollRestoration = e
        } catch (e) {}
      }
    },
    125: function (e) {
      e.exports = JSON.parse('{"title":"dotlogics","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"dotlogics"},{"hid":"author","name":"author","content":"Dotlogics"},{"hid":"description","name":"description","content":"Dotlogics is an award winning web design & online marketing agency in New York, specializing in business growth. Call us for professional web design and development!"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"dotlogics"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"dotlogics"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Dotlogics is an award winning web design & online marketing agency in New York, specializing in business growth. Call us for professional web design and development!"}],"link":[{"rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.5f6a36.png"},{"rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.5f6a36.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.0af54f12.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}')
    },
    128: function (e, t, n) {
      "use strict";
      n(8), n(29);
      var r = n(2),
        o = n(1),
        c = n(0),
        l = window.__NUXT__;

      function d() {
        if (!this._hydrated) return this.$fetch()
      }

      function h() {
        if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
          var e;
          this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else
            for (var t in data) o.a.set(this.$data, t, data[t])
        }
      }

      function f() {
        var e = this;
        return this._fetchPromise || (this._fetchPromise = m.call(this).then((function () {
          delete e._fetchPromise
        }))), this._fetchPromise
      }

      function m() {
        return v.apply(this, arguments)
      }

      function v() {
        return (v = Object(r.a)(regeneratorRuntime.mark((function e() {
          var t, n, r, o = this;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, n = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
              case 9:
                e.next = 15;
                break;
              case 11:
                e.prev = 11, e.t0 = e.catch(6), t = Object(c.p)(e.t0);
              case 15:
                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                  e.next = 19;
                  break
                }
                return e.next = 19, new Promise((function (e) {
                  return setTimeout(e, r)
                }));
              case 19:
                this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                  return o.$nuxt.nbFetching--
                }));
              case 23:
              case "end":
                return e.stop()
            }
          }), e, this, [
            [6, 11]
          ])
        })))).apply(this, arguments)
      }
      t.a = {
        beforeCreate: function () {
          Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.a.util.defineReactive(this, "$fetchState", {
            pending: !1,
            error: null,
            timestamp: Date.now()
          }), this.$fetch = f.bind(this), Object(c.a)(this, "created", h), Object(c.a)(this, "beforeMount", d))
        }
      }
    },
    132: function (e, t, n) {
      e.exports = n(133)
    },
    133: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          n(30), n(18), n(22), n(23), n(24), n(25);
          var t = n(20),
            r = (n(29), n(103), n(2)),
            o = (n(45), n(59), n(16), n(8), n(40), n(17), n(104), n(146), n(154), n(156), n(1)),
            c = n(122),
            l = n(86),
            d = n(0),
            h = n(27),
            f = n(128),
            m = n(73);

          function v(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (n = function (e, t) {
                  if (!e) return;
                  if ("string" == typeof e) return y(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === n && e.constructor && (n = e.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(e);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[i++]
                    }
                  },
                  e: function (e) {
                    throw e
                  },
                  f: r
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
              l = !1;
            return {
              s: function () {
                n = e[Symbol.iterator]()
              },
              n: function () {
                var e = n.next();
                return c = e.done, e
              },
              e: function (e) {
                l = !0, o = e
              },
              f: function () {
                try {
                  c || null == n.return || n.return()
                } finally {
                  if (l) throw o
                }
              }
            }
          }

          function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
          }
          o.a.__nuxt__fetch__mixin__ || (o.a.mixin(f.a), o.a.__nuxt__fetch__mixin__ = !0), o.a.component(m.a.name, m.a), o.a.component("NLink", m.a), e.fetch || (e.fetch = c.a);
          var w, x, _ = [],
            j = window.__NUXT__ || {};
          Object.assign(o.a.config, {
            silent: !0,
            performance: !1
          });
          var O = o.a.config.errorHandler || console.error;

          function C(e, t, n) {
            for (var r = function (component) {
                var e = function (component, e) {
                  if (!component || !component.options || !component.options[e]) return {};
                  var option = component.options[e];
                  if ("function" == typeof option) {
                    for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) n[r - 2] = arguments[r];
                    return option.apply(void 0, n)
                  }
                  return option
                }(component, "transition", t, n) || {};
                return "string" == typeof e ? {
                  name: e
                } : e
              }, o = n ? Object(d.g)(n) : [], c = Math.max(e.length, o.length), l = [], h = function (i) {
                var t = Object.assign({}, r(e[i])),
                  n = Object.assign({}, r(o[i]));
                Object.keys(t).filter((function (e) {
                  return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                })).forEach((function (e) {
                  n[e] = t[e]
                })), l.push(n)
              }, i = 0; i < c; i++) h(i);
            return l
          }

          function k(e, t, n) {
            return $.apply(this, arguments)
          }

          function $() {
            return ($ = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
              var o, c, l, h, f = this;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this._routeChanged = Boolean(w.nuxt.err) || n.name !== t.name, this._paramChanged = !this._routeChanged && n.path !== t.path, this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(t.query, n.query) : [], e.prev = 4, !this._queryChanged) {
                      e.next = 10;
                      break
                    }
                    return e.next = 8, Object(d.r)(t, (function (e, t) {
                      return {
                        Component: e,
                        instance: t
                      }
                    }));
                  case 8:
                    o = e.sent, o.some((function (e) {
                      var r = e.Component,
                        o = e.instance,
                        c = r.options.watchQuery;
                      return !0 === c || (Array.isArray(c) ? c.some((function (e) {
                        return f._diffQuery[e]
                      })) : "function" == typeof c && c.apply(o, [t.query, n.query]))
                    }));
                  case 10:
                    r(), e.next = 24;
                    break;
                  case 13:
                    if (e.prev = 13, e.t0 = e.catch(4), c = e.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, h = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                      e.next = 21;
                      break
                    }
                    return window.location.reload(!0), e.abrupt("return");
                  case 21:
                    this.error({
                      statusCode: l,
                      message: h
                    }), this.$nuxt.$emit("routeChanged", t, n, c), r();
                  case 24:
                  case "end":
                    return e.stop()
                }
              }), e, this, [
                [4, 13]
              ])
            })))).apply(this, arguments)
          }

          function E(e, t) {
            return j.serverRendered && t && Object(d.b)(e, t), e._Ctor = e, e
          }

          function A(e) {
            var path = Object(d.f)(e.options.base, e.options.mode);
            return Object(d.d)(e.match(path), function () {
              var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, c) {
                var l;
                return regeneratorRuntime.wrap((function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if ("function" != typeof t || t.options) {
                        e.next = 4;
                        break
                      }
                      return e.next = 3, t();
                    case 3:
                      t = e.sent;
                    case 4:
                      return l = E(Object(d.s)(t), j.data ? j.data[c] : null), r.components[o] = l, e.abrupt("return", l);
                    case 7:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function (t, n, r, o, c) {
                return e.apply(this, arguments)
              }
            }())
          }

          function S(e, t, n) {
            var r = this,
              o = [],
              c = !1;
            if (void 0 !== n && (o = [], (n = Object(d.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((function (e) {
                e.options.middleware && (o = o.concat(e.options.middleware))
              }))), o = o.map((function (e) {
                return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0, r.error({
                  statusCode: 500,
                  message: "Unknown middleware " + e
                })), l.a[e])
              })), !c) return Object(d.o)(o, t)
          }

          function P(e, t, n) {
            return R.apply(this, arguments)
          }

          function R() {
            return (R = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
              var c, l, f, m, y, x, j, O, k, $, E, A, P, R, T, D = this;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return", o());
                  case 2:
                    return !1, t === n ? (_ = [], !0) : (c = [], _ = Object(d.g)(n, c).map((function (e, i) {
                      return Object(d.c)(n.matched[c[i]].path)(n.params)
                    }))), l = !1, f = function (path) {
                      l || (l = !0, o(path))
                    }, e.next = 8, Object(d.t)(w, {
                      route: t,
                      from: n,
                      next: f.bind(this)
                    });
                  case 8:
                    if (this._dateLastError = w.nuxt.dateErr, this._hadError = Boolean(w.nuxt.err), m = [], (y = Object(d.g)(t, m)).length) {
                      e.next = 27;
                      break
                    }
                    return e.next = 15, S.call(this, y, w.context);
                  case 15:
                    if (!l) {
                      e.next = 17;
                      break
                    }
                    return e.abrupt("return");
                  case 17:
                    return x = (h.a.options || h.a).layout, e.next = 20, this.loadLayout("function" == typeof x ? x.call(h.a, w.context) : x);
                  case 20:
                    return j = e.sent, e.next = 23, S.call(this, y, w.context, j);
                  case 23:
                    if (!l) {
                      e.next = 25;
                      break
                    }
                    return e.abrupt("return");
                  case 25:
                    return w.context.error({
                      statusCode: 404,
                      message: "This page could not be found"
                    }), e.abrupt("return", o());
                  case 27:
                    return y.forEach((function (e) {
                      e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                    })), this.setTransitions(C(y, t, n)), e.prev = 29, e.next = 32, S.call(this, y, w.context);
                  case 32:
                    if (!l) {
                      e.next = 34;
                      break
                    }
                    return e.abrupt("return");
                  case 34:
                    if (!w.context._errored) {
                      e.next = 36;
                      break
                    }
                    return e.abrupt("return", o());
                  case 36:
                    return "function" == typeof (O = y[0].options.layout) && (O = O(w.context)), e.next = 40, this.loadLayout(O);
                  case 40:
                    return O = e.sent, e.next = 43, S.call(this, y, w.context, O);
                  case 43:
                    if (!l) {
                      e.next = 45;
                      break
                    }
                    return e.abrupt("return");
                  case 45:
                    if (!w.context._errored) {
                      e.next = 47;
                      break
                    }
                    return e.abrupt("return", o());
                  case 47:
                    k = !0, e.prev = 48, $ = v(y), e.prev = 50, $.s();
                  case 52:
                    if ((E = $.n()).done) {
                      e.next = 63;
                      break
                    }
                    if ("function" == typeof (A = E.value).options.validate) {
                      e.next = 56;
                      break
                    }
                    return e.abrupt("continue", 61);
                  case 56:
                    return e.next = 58, A.options.validate(w.context);
                  case 58:
                    if (k = e.sent) {
                      e.next = 61;
                      break
                    }
                    return e.abrupt("break", 63);
                  case 61:
                    e.next = 52;
                    break;
                  case 63:
                    e.next = 68;
                    break;
                  case 65:
                    e.prev = 65, e.t0 = e.catch(50), $.e(e.t0);
                  case 68:
                    return e.prev = 68, $.f(), e.finish(68);
                  case 71:
                    e.next = 77;
                    break;
                  case 73:
                    return e.prev = 73, e.t1 = e.catch(48), this.error({
                      statusCode: e.t1.statusCode || "500",
                      message: e.t1.message
                    }), e.abrupt("return", o());
                  case 77:
                    if (k) {
                      e.next = 80;
                      break
                    }
                    return this.error({
                      statusCode: 404,
                      message: "This page could not be found"
                    }), e.abrupt("return", o());
                  case 80:
                    return e.next = 82, Promise.all(y.map(function () {
                      var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                        var o, c, l, h, f, v, y, p;
                        return regeneratorRuntime.wrap((function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              if (r._path = Object(d.c)(t.matched[m[i]].path)(t.params), r._dataRefresh = !1, o = r._path !== _[i], D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function (e) {
                                  return D._diffQuery[e]
                                })) : "function" == typeof l && (P || (P = Object(d.h)(t)), r._dataRefresh = l.apply(P[i], [t.query, n.query]))), D._hadError || !D._isMounted || r._dataRefresh) {
                                e.next = 6;
                                break
                              }
                              return e.abrupt("return");
                            case 6:
                              return h = [], f = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, f && ((y = Object(d.q)(r.options.asyncData, w.context)).then((function (e) {
                                Object(d.b)(r, e)
                              })), h.push(y)), D.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (e) {})), h.push(p)), e.abrupt("return", Promise.all(h));
                            case 13:
                            case "end":
                              return e.stop()
                          }
                        }), e)
                      })));
                      return function (t, n) {
                        return e.apply(this, arguments)
                      }
                    }()));
                  case 82:
                    l || o(), e.next = 99;
                    break;
                  case 85:
                    if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (R = e.t2 || {}).message) {
                      e.next = 90;
                      break
                    }
                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, R));
                  case 90:
                    return _ = [], Object(d.k)(R), "function" == typeof (T = (h.a.options || h.a).layout) && (T = T(w.context)), e.next = 96, this.loadLayout(T);
                  case 96:
                    this.error(R), this.$nuxt.$emit("routeChanged", t, n, R), o();
                  case 99:
                  case "end":
                    return e.stop()
                }
              }), e, this, [
                [29, 85],
                [48, 73],
                [50, 65, 68, 71]
              ])
            })))).apply(this, arguments)
          }

          function T(e, n) {
            Object(d.d)(e, (function (e, n, r, c) {
              return "object" !== Object(t.a)(e) || e.options || ((e = o.a.extend(e))._Ctor = e, r.components[c] = e), e
            }))
          }

          function D(e) {
            var t = Boolean(this.$options.nuxt.err);
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
            var n = t ? (h.a.options || h.a).layout : e.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(w.context)), this.setLayout(n)
          }

          function N(e) {
            e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
          }

          function I(e, t) {
            var n = this;
            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
              var r = Object(d.h)(e),
                c = Object(d.g)(e),
                l = !1;
              o.a.nextTick((function () {
                r.forEach((function (e, i) {
                  if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                    var t = e.constructor.options.data.call(e);
                    for (var n in t) o.a.set(e.$data, n, t[n]);
                    l = !0
                  }
                })), l && window.$nuxt.$nextTick((function () {
                  window.$nuxt.$emit("triggerScroll")
                })), N(n)
              }))
            }
          }

          function L(e) {
            window.onNuxtReadyCbs.forEach((function (t) {
              "function" == typeof t && t(e)
            })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), x.afterEach((function (t, n) {
              o.a.nextTick((function () {
                return e.$nuxt.$emit("routeChanged", t, n)
              }))
            }))
          }

          function B() {
            return (B = Object(r.a)(regeneratorRuntime.mark((function e(t) {
              var n, r, c, l, h;
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return w = t.app, x = t.router, t.store, n = new o.a(w), r = j.layout || "default", e.next = 7, n.loadLayout(r);
                  case 7:
                    return n.setLayout(r), c = function () {
                      n.$mount("#__nuxt"), x.afterEach(T), x.afterEach(D.bind(n)), x.afterEach(I.bind(n)), o.a.nextTick((function () {
                        L(n)
                      }))
                    }, e.next = 11, Promise.all(A(x));
                  case 11:
                    if (l = e.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(C(l, x.currentRoute)), _ = x.currentRoute.matched.map((function (e) {
                        return Object(d.c)(e.path)(x.currentRoute.params)
                      }))), n.$loading = {}, j.error && n.error(j.error), x.beforeEach(k.bind(n)), x.beforeEach(P.bind(n)), !j.serverRendered || !Object(d.n)(j.routePath, n.context.route.path)) {
                      e.next = 20;
                      break
                    }
                    return e.abrupt("return", c());
                  case 20:
                    return h = function () {
                      T(x.currentRoute, x.currentRoute), D.call(n, x.currentRoute), N(n), c()
                    }, e.next = 23, new Promise((function (e) {
                      return setTimeout(e, 0)
                    }));
                  case 23:
                    P.call(n, x.currentRoute, x.currentRoute, (function (path) {
                      if (path) {
                        var e = x.afterEach((function (t, n) {
                          e(), h()
                        }));
                        x.push(path, void 0, (function (e) {
                          e && O(e)
                        }))
                      } else h()
                    }));
                  case 24:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))).apply(this, arguments)
          }
          Object(h.b)(null, j.config).then((function (e) {
            return B.apply(this, arguments)
          })).catch(O)
        }.call(this, n(41))
    },
    183: function (e, t, n) {
      "use strict";
      n.r(t), n.d(t, "state", (function () {
        return r
      })), n.d(t, "getters", (function () {
        return o
      }));
      var r = function () {
          return {}
        },
        o = {}
    },
    184: function (e, t, n) {
      "use strict";
      n.r(t), n.d(t, "state", (function () {
        return r
      })), n.d(t, "mutations", (function () {
        return o
      })), n.d(t, "getters", (function () {
        return c
      }));
      var r = function () {
          return {
            logoType: "white"
          }
        },
        o = {
          changeLogo: function (e, t) {
            e.logoType = t
          }
        },
        c = {}
    },
    185: function (e, t, n) {
      "use strict";
      n.r(t), n.d(t, "state", (function () {
        return r
      })), n.d(t, "mutations", (function () {
        return o
      }));
      var r = function () {},
        o = {
          activeLink: function (e, link) {
            e.activeLink = link
          },
          setPrevUrl: function (e, link) {
            e.prevUrl = link
          },
          setPrevHostUrl: function (e, link) {
            e.prevHostUrl = link
          },
          setPrevHostUpdated: function (e, t) {
            e.setPrevHostUpdated = t
          }
        }
    },
    27: function (e, t, n) {
      "use strict";
      n.d(t, "b", (function () {
        return Me
      })), n.d(t, "a", (function () {
        return P
      }));
      n(53), n(18), n(16), n(40), n(8), n(29);
      var r = n(2),
        o = n(19),
        c = (n(17), n(1)),
        l = n(56),
        d = n(123),
        h = n(87),
        f = n.n(h),
        m = n(42),
        v = n.n(m),
        y = n(57),
        w = n(55),
        x = n(0);
      "scrollRestoration" in window.history && (Object(x.u)("manual"), window.addEventListener("beforeunload", (function () {
        Object(x.u)("auto")
      })), window.addEventListener("load", (function () {
        Object(x.u)("manual")
      })));
      var _ = function () {},
        j = y.a.prototype.push;
      y.a.prototype.push = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return j.call(this, e, t, n)
      }, c.a.use(y.a);
      var O = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (e, t, n) {
          var r = !1,
            o = Object(x.g)(e);
          (o.some((function (e) {
            return e.options.scrollToTop
          })) || o.length < 2 && o.every((function (e) {
            return !1 !== e.options.scrollToTop
          }))) && (r = {
            x: 0,
            y: 0
          }), n && (r = n);
          var c = window.$nuxt;
          return (e.path === t.path && e.hash !== t.hash || e === t) && c.$nextTick((function () {
            return c.$emit("triggerScroll")
          })), new Promise((function (t) {
            c.$once("triggerScroll", (function () {
              if (e.hash) {
                var n = e.hash;
                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                try {
                  document.querySelector(n) && (r = {
                    selector: n
                  })
                } catch (e) {
                  console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                }
              }
              t(r)
            }))
          }))
        },
        routes: [{
          path: "/01-10-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(2).then(n.bind(null, 241)))
          },
          name: "01-10-schedule-a-strategy-session"
        }, {
          path: "/01-2-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(3).then(n.bind(null, 243)))
          },
          name: "01-2-schedule-a-strategy-session"
        }, {
          path: "/01-3-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(4).then(n.bind(null, 244)))
          },
          name: "01-3-schedule-a-strategy-session"
        }, {
          path: "/01-4-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(5).then(n.bind(null, 246)))
          },
          name: "01-4-schedule-a-strategy-session"
        }, {
          path: "/01-5-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(6).then(n.bind(null, 248)))
          },
          name: "01-5-schedule-a-strategy-session"
        }, {
          path: "/01-6-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(7).then(n.bind(null, 249)))
          },
          name: "01-6-schedule-a-strategy-session"
        }, {
          path: "/01-7-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(8).then(n.bind(null, 251)))
          },
          name: "01-7-schedule-a-strategy-session"
        }, {
          path: "/01-8-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(9).then(n.bind(null, 253)))
          },
          name: "01-8-schedule-a-strategy-session"
        }, {
          path: "/01-9-schedule-a-strategy-session",
          component: function () {
            return Object(x.m)(n.e(10).then(n.bind(null, 254)))
          },
          name: "01-9-schedule-a-strategy-session"
        }, {
          path: "/404",
          component: function () {
            return Object(x.m)(n.e(11).then(n.bind(null, 256)))
          },
          name: "404"
        }, {
          path: "/about-us",
          component: function () {
            return Object(x.m)(n.e(13).then(n.bind(null, 258)))
          },
          name: "about-us"
        }, {
          path: "/about-us-new",
          component: function () {
            return Object(x.m)(n.e(14).then(n.bind(null, 259)))
          },
          name: "about-us-new"
        }, {
          path: "/best-web-design-agency",
          component: function () {
            return Object(x.m)(n.e(15).then(n.bind(null, 261)))
          },
          name: "best-web-design-agency"
        }, {
          path: "/blog",
          component: function () {
            return Object(x.m)(n.e(21).then(n.bind(null, 263)))
          },
          name: "blog"
        }, {
          path: "/brands",
          component: function () {
            return Object(x.m)(n.e(29).then(n.bind(null, 273)))
          },
          name: "brands"
        }, {
          path: "/broadway-basketeers-portfolio",
          component: function () {
            return Object(x.m)(n.e(30).then(n.bind(null, 356)))
          },
          name: "broadway-basketeers-portfolio"
        }, {
          path: "/business-process-optimization",
          component: function () {
            return Object(x.m)(n.e(31).then(n.bind(null, 275)))
          },
          name: "business-process-optimization"
        }, {
          path: "/city-listing",
          component: function () {
            return Object(x.m)(n.e(32).then(n.bind(null, 235)))
          },
          name: "city-listing"
        }, {
          path: "/contact-us",
          component: function () {
            return Object(x.m)(n.e(33).then(n.bind(null, 283)))
          },
          name: "contact-us"
        }, {
          path: "/custom-development",
          component: function () {
            return Object(x.m)(n.e(34).then(n.bind(null, 285)))
          },
          name: "custom-development"
        }, {
          path: "/custom-website-design",
          component: function () {
            return Object(x.m)(n.e(35).then(n.bind(null, 287)))
          },
          name: "custom-website-design"
        }, {
          path: "/design-content-strategy",
          component: function () {
            return Object(x.m)(n.e(36).then(n.bind(null, 288)))
          },
          name: "design-content-strategy"
        }, {
          path: "/ecommerce-design",
          component: function () {
            return Object(x.m)(n.e(38).then(n.bind(null, 290)))
          },
          name: "ecommerce-design"
        }, {
          path: "/ecommerce-development",
          component: function () {
            return Object(x.m)(n.e(39).then(n.bind(null, 292)))
          },
          name: "ecommerce-development"
        }, {
          path: "/editfeast-portfolio",
          component: function () {
            return Object(x.m)(n.e(40).then(n.bind(null, 293)))
          },
          name: "editfeast-portfolio"
        }, {
          path: "/email-marketing",
          component: function () {
            return Object(x.m)(n.e(41).then(n.bind(null, 295)))
          },
          name: "email-marketing"
        }, {
          path: "/euro-pean-outdoors-portfolio",
          component: function () {
            return Object(x.m)(n.e(42).then(n.bind(null, 358)))
          },
          name: "euro-pean-outdoors-portfolio"
        }, {
          path: "/growth-plan",
          component: function () {
            return Object(x.m)(n.e(43).then(n.bind(null, 297)))
          },
          name: "growth-plan"
        }, {
          path: "/iaw",
          component: function () {
            return Object(x.m)(n.e(44).then(n.bind(null, 299)))
          },
          name: "iaw"
        }, {
          path: "/join-our-partnership-program",
          component: function () {
            return Object(x.m)(n.e(46).then(n.bind(null, 301)))
          },
          name: "join-our-partnership-program"
        }, {
          path: "/kotore-portfolio",
          component: function () {
            return Object(x.m)(n.e(47).then(n.bind(null, 302)))
          },
          name: "kotore-portfolio"
        }, {
          path: "/magento",
          component: function () {
            return Object(x.m)(n.e(48).then(n.bind(null, 304)))
          },
          name: "magento"
        }, {
          path: "/managed-it",
          component: function () {
            return Object(x.m)(n.e(49).then(n.bind(null, 306)))
          },
          name: "managed-it"
        }, {
          path: "/marketing-strategy",
          component: function () {
            return Object(x.m)(n.e(50).then(n.bind(null, 307)))
          },
          name: "marketing-strategy"
        }, {
          path: "/mobile-design",
          component: function () {
            return Object(x.m)(n.e(51).then(n.bind(null, 309)))
          },
          name: "mobile-design"
        }, {
          path: "/new-seo",
          component: function () {
            return Object(x.m)(n.e(52).then(n.bind(null, 311)))
          },
          name: "new-seo"
        }, {
          path: "/new-webDesign",
          component: function () {
            return Object(x.m)(n.e(53).then(n.bind(null, 312)))
          },
          name: "new-webDesign"
        }, {
          path: "/portfolio-listing-page",
          component: function () {
            return Object(x.m)(n.e(74).then(n.bind(null, 314)))
          },
          name: "portfolio-listing-page"
        }, {
          path: "/ppc",
          component: function () {
            return Object(x.m)(n.e(75).then(n.bind(null, 316)))
          },
          name: "ppc"
        }, {
          path: "/privacy",
          component: function () {
            return Object(x.m)(n.e(76).then(n.bind(null, 317)))
          },
          name: "privacy"
        }, {
          path: "/responsive-website-design-service",
          component: function () {
            return Object(x.m)(n.e(77).then(n.bind(null, 319)))
          },
          name: "responsive-website-design-service"
        }, {
          path: "/schedule-a-strategy-session-main",
          component: function () {
            return Object(x.m)(n.e(78).then(n.bind(null, 321)))
          },
          name: "schedule-a-strategy-session-main"
        }, {
          path: "/seo",
          component: function () {
            return Object(x.m)(n.e(79).then(n.bind(null, 322)))
          },
          name: "seo"
        }, {
          path: "/services",
          component: function () {
            return Object(x.m)(n.e(83).then(n.bind(null, 324)))
          },
          name: "services"
        }, {
          path: "/services-old",
          component: function () {
            return Object(x.m)(n.e(80).then(n.bind(null, 326)))
          },
          name: "services-old"
        }, {
          path: "/sitemap",
          component: function () {
            return Object(x.m)(n.e(87).then(n.bind(null, 327)))
          },
          name: "sitemap"
        }, {
          path: "/social-media",
          component: function () {
            return Object(x.m)(n.e(88).then(n.bind(null, 329)))
          },
          name: "social-media"
        }, {
          path: "/talk-to-a-growth-specialist",
          component: function () {
            return Object(x.m)(n.e(89).then(n.bind(null, 331)))
          },
          name: "talk-to-a-growth-specialist"
        }, {
          path: "/thankyou",
          component: function () {
            return Object(x.m)(n.e(90).then(n.bind(null, 332)))
          },
          name: "thankyou"
        }, {
          path: "/video",
          component: function () {
            return Object(x.m)(n.e(108).then(n.bind(null, 334)))
          },
          name: "video"
        }, {
          path: "/web-design",
          component: function () {
            return Object(x.m)(n.e(122).then(n.bind(null, 336)))
          },
          name: "web-design"
        }, {
          path: "/web-design-old",
          component: function () {
            return Object(x.m)(n.e(123).then(n.bind(null, 337)))
          },
          name: "web-design-old"
        }, {
          path: "/web-design-services",
          component: function () {
            return Object(x.m)(n.e(124).then(n.bind(null, 339)))
          },
          name: "web-design-services"
        }, {
          path: "/web-development-company-new-york",
          component: function () {
            return Object(x.m)(n.e(125).then(n.bind(null, 341)))
          },
          name: "web-development-company-new-york"
        }, {
          path: "/blog/cms",
          component: function () {
            return Object(x.m)(n.e(17).then(n.bind(null, 342)))
          },
          name: "blog-cms"
        }, {
          path: "/blog/content-strategy",
          component: function () {
            return Object(x.m)(n.e(18).then(n.bind(null, 347)))
          },
          name: "blog-content-strategy"
        }, {
          path: "/blog/ebooks",
          component: function () {
            return Object(x.m)(n.e(19).then(n.bind(null, 348)))
          },
          name: "blog-ebooks"
        }, {
          path: "/blog/ecommerce",
          component: function () {
            return Object(x.m)(n.e(20).then(n.bind(null, 350)))
          },
          name: "blog-ecommerce"
        }, {
          path: "/blog/marketing",
          component: function () {
            return Object(x.m)(n.e(22).then(n.bind(null, 352)))
          },
          name: "blog-marketing"
        }, {
          path: "/blog/mobile-apps",
          component: function () {
            return Object(x.m)(n.e(23).then(n.bind(null, 353)))
          },
          name: "blog-mobile-apps"
        }, {
          path: "/blog/mobile-responsive",
          component: function () {
            return Object(x.m)(n.e(24).then(n.bind(null, 355)))
          },
          name: "blog-mobile-responsive"
        }, {
          path: "/blog/tips-and-trends",
          component: function () {
            return Object(x.m)(n.e(25).then(n.bind(null, 343)))
          },
          name: "blog-tips-and-trends"
        }, {
          path: "/blog/user-interface",
          component: function () {
            return Object(x.m)(n.e(26).then(n.bind(null, 354)))
          },
          name: "blog-user-interface"
        }, {
          path: "/blog/web-design-and-development",
          component: function () {
            return Object(x.m)(n.e(27).then(n.bind(null, 351)))
          },
          name: "blog-web-design-and-development"
        }, {
          path: "/blog/website-conversions",
          component: function () {
            return Object(x.m)(n.e(28).then(n.bind(null, 349)))
          },
          name: "blog-website-conversions"
        }, {
          path: "/portfolio-detail-page/broadway-basketeers",
          component: function () {
            return Object(x.m)(n.e(54).then(n.bind(null, 346)))
          },
          name: "portfolio-detail-page-broadway-basketeers"
        }, {
          path: "/portfolio-detail-page/brown",
          component: function () {
            return Object(x.m)(n.e(55).then(n.bind(null, 345)))
          },
          name: "portfolio-detail-page-brown"
        }, {
          path: "/portfolio-detail-page/clear",
          component: function () {
            return Object(x.m)(n.e(56).then(n.bind(null, 344)))
          },
          name: "portfolio-detail-page-clear"
        }, {
          path: "/portfolio-detail-page/ddc",
          component: function () {
            return Object(x.m)(n.e(57).then(n.bind(null, 340)))
          },
          name: "portfolio-detail-page-ddc"
        }, {
          path: "/portfolio-detail-page/editfeast",
          component: function () {
            return Object(x.m)(n.e(58).then(n.bind(null, 338)))
          },
          name: "portfolio-detail-page-editfeast"
        }, {
          path: "/portfolio-detail-page/euro-pean-outdoors",
          component: function () {
            return Object(x.m)(n.e(59).then(n.bind(null, 335)))
          },
          name: "portfolio-detail-page-euro-pean-outdoors"
        }, {
          path: "/portfolio-detail-page/gardenia",
          component: function () {
            return Object(x.m)(n.e(60).then(n.bind(null, 333)))
          },
          name: "portfolio-detail-page-gardenia"
        }, {
          path: "/portfolio-detail-page/kotore",
          component: function () {
            return Object(x.m)(n.e(61).then(n.bind(null, 330)))
          },
          name: "portfolio-detail-page-kotore"
        }, {
          path: "/portfolio-detail-page/mcdonald",
          component: function () {
            return Object(x.m)(n.e(62).then(n.bind(null, 328)))
          },
          name: "portfolio-detail-page-mcdonald"
        }, {
          path: "/portfolio-detail-page/multilingual-group-inc",
          component: function () {
            return Object(x.m)(n.e(63).then(n.bind(null, 325)))
          },
          name: "portfolio-detail-page-multilingual-group-inc"
        }, {
          path: "/portfolio-detail-page/pec-logistics",
          component: function () {
            return Object(x.m)(n.e(64).then(n.bind(null, 323)))
          },
          name: "portfolio-detail-page-pec-logistics"
        }, {
          path: "/portfolio-detail-page/reashape",
          component: function () {
            return Object(x.m)(n.e(65).then(n.bind(null, 320)))
          },
          name: "portfolio-detail-page-reashape"
        }, {
          path: "/portfolio-detail-page/reiss-hardware",
          component: function () {
            return Object(x.m)(n.e(66).then(n.bind(null, 318)))
          },
          name: "portfolio-detail-page-reiss-hardware"
        }, {
          path: "/portfolio-detail-page/saucony",
          component: function () {
            return Object(x.m)(n.e(67).then(n.bind(null, 315)))
          },
          name: "portfolio-detail-page-saucony"
        }, {
          path: "/portfolio-detail-page/shopping-bin",
          component: function () {
            return Object(x.m)(n.e(68).then(n.bind(null, 313)))
          },
          name: "portfolio-detail-page-shopping-bin"
        }, {
          path: "/portfolio-detail-page/shopworn",
          component: function () {
            return Object(x.m)(n.e(69).then(n.bind(null, 310)))
          },
          name: "portfolio-detail-page-shopworn"
        }, {
          path: "/portfolio-detail-page/slug",
          component: function () {
            return Object(x.m)(n.e(70).then(n.bind(null, 308)))
          },
          name: "portfolio-detail-page-slug"
        }, {
          path: "/portfolio-detail-page/the-maca-team",
          component: function () {
            return Object(x.m)(n.e(71).then(n.bind(null, 305)))
          },
          name: "portfolio-detail-page-the-maca-team"
        }, {
          path: "/portfolio-detail-page/truehaul",
          component: function () {
            return Object(x.m)(n.e(72).then(n.bind(null, 303)))
          },
          name: "portfolio-detail-page-truehaul"
        }, {
          path: "/portfolio-detail-page/under-the-weather",
          component: function () {
            return Object(x.m)(n.e(73).then(n.bind(null, 300)))
          },
          name: "portfolio-detail-page-under-the-weather"
        }, {
          path: "/services/branding",
          component: function () {
            return Object(x.m)(n.e(81).then(n.bind(null, 298)))
          },
          name: "services-branding"
        }, {
          path: "/services/conversion-optimization",
          component: function () {
            return Object(x.m)(n.e(82).then(n.bind(null, 296)))
          },
          name: "services-conversion-optimization"
        }, {
          path: "/services/mobile-apps",
          component: function () {
            return Object(x.m)(n.e(84).then(n.bind(null, 294)))
          },
          name: "services-mobile-apps"
        }, {
          path: "/services/shopify",
          component: function () {
            return Object(x.m)(n.e(85).then(n.bind(null, 291)))
          },
          name: "services-shopify"
        }, {
          path: "/services/wordpress",
          component: function () {
            return Object(x.m)(n.e(86).then(n.bind(null, 289)))
          },
          name: "services-wordpress"
        }, {
          path: "/video/4-ways-to-increase-conversion",
          component: function () {
            return Object(x.m)(n.e(91).then(n.bind(null, 286)))
          },
          name: "video-4-ways-to-increase-conversion"
        }, {
          path: "/video/5-easy-ways-to-boost-your-website-conversion-rate-in-2020",
          component: function () {
            return Object(x.m)(n.e(92).then(n.bind(null, 284)))
          },
          name: "video-5-easy-ways-to-boost-your-website-conversion-rate-in-2020"
        }, {
          path: "/video/5-easy-ways-to-reduce-eCommerce-returns",
          component: function () {
            return Object(x.m)(n.e(93).then(n.bind(null, 282)))
          },
          name: "video-5-easy-ways-to-reduce-eCommerce-returns"
        }, {
          path: "/video/5-proven-ways-to-boost-ecommerce-sales",
          component: function () {
            return Object(x.m)(n.e(94).then(n.bind(null, 281)))
          },
          name: "video-5-proven-ways-to-boost-ecommerce-sales"
        }, {
          path: "/video/best-email-marketing-strategies-2020",
          component: function () {
            return Object(x.m)(n.e(96).then(n.bind(null, 280)))
          },
          name: "video-best-email-marketing-strategies-2020"
        }, {
          path: "/video/boosting-your-sales-with-2-simple-tips",
          component: function () {
            return Object(x.m)(n.e(97).then(n.bind(null, 279)))
          },
          name: "video-boosting-your-sales-with-2-simple-tips"
        }, {
          path: "/video/choosing-the-best-website-platform-for-your-business",
          component: function () {
            return Object(x.m)(n.e(98).then(n.bind(null, 278)))
          },
          name: "video-choosing-the-best-website-platform-for-your-business"
        }, {
          path: "/video/debunked-three-top-myths-about-email-marketing",
          component: function () {
            return Object(x.m)(n.e(99).then(n.bind(null, 276)))
          },
          name: "video-debunked-three-top-myths-about-email-marketing"
        }, {
          path: "/video/hottest-marketing-trends-for-2020",
          component: function () {
            return Object(x.m)(n.e(100).then(n.bind(null, 274)))
          },
          name: "video-hottest-marketing-trends-for-2020"
        }, {
          path: "/video/how-is-the-COVID-19-changing-online-shopping",
          component: function () {
            return Object(x.m)(n.e(101).then(n.bind(null, 272)))
          },
          name: "video-how-is-the-COVID-19-changing-online-shopping"
        }, {
          path: "/video/how-to-convert-website-visitors-into-paying-customers",
          component: function () {
            return Object(x.m)(n.e(102).then(n.bind(null, 271)))
          },
          name: "video-how-to-convert-website-visitors-into-paying-customers"
        }, {
          path: "/video/how-to-create-a-personalized-shopping-experience-for-your-customers",
          component: function () {
            return Object(x.m)(n.e(103).then(n.bind(null, 270)))
          },
          name: "video-how-to-create-a-personalized-shopping-experience-for-your-customers"
        }, {
          path: "/video/how-to-grow-your-instagram-following-organically",
          component: function () {
            return Object(x.m)(n.e(104).then(n.bind(null, 269)))
          },
          name: "video-how-to-grow-your-instagram-following-organically"
        }, {
          path: "/video/how-to-rebound-in-the-2nd-half-of-2020",
          component: function () {
            return Object(x.m)(n.e(105).then(n.bind(null, 268)))
          },
          name: "video-how-to-rebound-in-the-2nd-half-of-2020"
        }, {
          path: "/video/how-to-work-remotely-during-COVID-19",
          component: function () {
            return Object(x.m)(n.e(106).then(n.bind(null, 267)))
          },
          name: "video-how-to-work-remotely-during-COVID-19"
        }, {
          path: "/video/improve-your-conversion-with-these-cta-tips",
          component: function () {
            return Object(x.m)(n.e(107).then(n.bind(null, 266)))
          },
          name: "video-improve-your-conversion-with-these-cta-tips"
        }, {
          path: "/video/is-blogging-dead-in-2020",
          component: function () {
            return Object(x.m)(n.e(109).then(n.bind(null, 265)))
          },
          name: "video-is-blogging-dead-in-2020"
        }, {
          path: "/video/is-it-worth-using-email-marketing-anymore",
          component: function () {
            return Object(x.m)(n.e(110).then(n.bind(null, 264)))
          },
          name: "video-is-it-worth-using-email-marketing-anymore"
        }, {
          path: "/video/landing-page-tips",
          component: function () {
            return Object(x.m)(n.e(111).then(n.bind(null, 262)))
          },
          name: "video-landing-page-tips"
        }, {
          path: "/video/online-shopping-during-COVID-19",
          component: function () {
            return Object(x.m)(n.e(112).then(n.bind(null, 260)))
          },
          name: "video-online-shopping-during-COVID-19"
        }, {
          path: "/video/succeed-online-by-using-these-3-discount-strategies-on-your-eCommerce-site",
          component: function () {
            return Object(x.m)(n.e(113).then(n.bind(null, 257)))
          },
          name: "video-succeed-online-by-using-these-3-discount-strategies-on-your-eCommerce-site"
        }, {
          path: "/video/the-5-steps-to-take-to-improve-your-customer-experience",
          component: function () {
            return Object(x.m)(n.e(114).then(n.bind(null, 255)))
          },
          name: "video-the-5-steps-to-take-to-improve-your-customer-experience"
        }, {
          path: "/video/top-5-eCommerce-trends-of-2020",
          component: function () {
            return Object(x.m)(n.e(115).then(n.bind(null, 252)))
          },
          name: "video-top-5-eCommerce-trends-of-2020"
        }, {
          path: "/video/tricks-for-higher-google-rank-2020",
          component: function () {
            return Object(x.m)(n.e(116).then(n.bind(null, 250)))
          },
          name: "video-tricks-for-higher-google-rank-2020"
        }, {
          path: "/video/what-businesses-need-to-do-during-COVID-19",
          component: function () {
            return Object(x.m)(n.e(117).then(n.bind(null, 247)))
          },
          name: "video-what-businesses-need-to-do-during-COVID-19"
        }, {
          path: "/video/what-can-you-learn-about-ecommerce-and-new-technology-trends",
          component: function () {
            return Object(x.m)(n.e(118).then(n.bind(null, 245)))
          },
          name: "video-what-can-you-learn-about-ecommerce-and-new-technology-trends"
        }, {
          path: "/video/what-marketing-campaigns-will-be-effective-during-COVID-19",
          component: function () {
            return Object(x.m)(n.e(119).then(n.bind(null, 242)))
          },
          name: "video-what-marketing-campaigns-will-be-effective-during-COVID-19"
        }, {
          path: "/video/what-your-website-conversion-game-plan-needs",
          component: function () {
            return Object(x.m)(n.e(120).then(n.bind(null, 240)))
          },
          name: "video-what-your-website-conversion-game-plan-needs"
        }, {
          path: "/video/why-you-should-consider-investing-in-seo-during-COVID-19",
          component: function () {
            return Object(x.m)(n.e(121).then(n.bind(null, 239)))
          },
          name: "video-why-you-should-consider-investing-in-seo-during-COVID-19"
        }, {
          path: "/blog/:slug",
          component: function () {
            return Object(x.m)(n.e(16).then(n.bind(null, 236)))
          },
          name: "blog-slug"
        }, {
          path: "/ebook/:slug?",
          component: function () {
            return Object(x.m)(n.e(37).then(n.bind(null, 238)))
          },
          name: "ebook-slug"
        }, {
          path: "/video/:slug",
          component: function () {
            return Object(x.m)(n.e(95).then(n.bind(null, 237)))
          },
          name: "video-slug"
        }, {
          path: "/",
          component: function () {
            return Object(x.m)(n.e(45).then(n.bind(null, 277)))
          },
          name: "index"
        }, {
          path: "/:slug",
          component: function () {
            return Object(x.m)(n.e(12).then(n.bind(null, 234)))
          },
          name: "slug"
        }],
        fallback: !1
      };

      function C() {
        var e = new y.a(O),
          t = e.resolve.bind(e);
        return e.resolve = function (e, n, r) {
          "string" == typeof e && (e = Object(w.b)(e));
          var o = t(e, n, r);
          return o && o.resolved && o.resolved.query && function (e) {
            for (var t in e) "string" == typeof e[t] && (e[t] = Object(w.a)(e[t]))
          }(o.resolved.query), o
        }, e
      }
      var k = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: {
              type: String,
              default: ""
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            }
          },
          render: function (e, t) {
            var n = t.parent,
              data = t.data,
              r = t.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
            data.nuxtChildDepth = h;
            var f = l[h] || d,
              m = {};
            $.forEach((function (e) {
              void 0 !== f[e] && (m[e] = f[e])
            }));
            var v = {};
            E.forEach((function (e) {
              "function" == typeof f[e] && (v[e] = f[e].bind(c))
            }));
            var y = v.beforeEnter;
            if (v.beforeEnter = function (e) {
                if (window.$nuxt.$nextTick((function () {
                    window.$nuxt.$emit("triggerScroll")
                  })), y) return y.call(c, e)
              }, !1 === f.css) {
              var w = v.leave;
              (!w || w.length < 2) && (v.leave = function (e, t) {
                w && w.call(c, e), c.$nextTick(t)
              })
            }
            var x = o("routerView", data);
            return r.keepAlive && (x = o("keep-alive", {
              props: r.keepAliveProps
            }, [x])), o("transition", {
              props: m,
              on: v
            }, [x])
          }
        },
        $ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
        E = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
        A = {
          data: function () {
            return {
              title: "Dotlogics - Not Found"
            }
          },
          fetch: function () {
            this.$store.commit("logo/changeLogo", "white"), this.$store.commit("navigation/activeLink", "/")
          },
          head: function () {
            return {
              title: this.title,
              meta: [{
                hid: "og:title",
                name: "og:title",
                content: null
              }, {
                hid: "og:description",
                name: "og:description",
                content: "Build your next responsive website with Dotlogics – Brooklyn’s premier web design company. Visit us for creative website design services in Brooklyn."
              }],
              bodyAttrs: {
                class: "error-404 noUpperFooter"
              },
              link: [{
                rel: "canonical",
                href: "".concat("https://www.dotlogics.com").concat(this.$route.path)
              }]
            }
          }
        },
        S = n(6),
        P = Object(S.a)(A, (function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("div", {
            staticClass: "pageMain-wrap contact black-theme"
          }, [t("div", {
            staticClass: "pageMain-in"
          }, [t("div", {
            staticClass: "triangleBgIcon"
          }), this._v(" "), t("div", {
            staticClass: "contact-minHeight"
          }, [t("div", {
            staticClass: "error-404-wrap"
          }, [t("div", {
            staticClass: "container-fluid"
          }, [t("img", {
            attrs: {
              src: "/images/image-404.png",
              alt: "404"
            }
          }), this._v(" "), t("h1", [this._v("Oops! This page no longer exists.")]), this._v(" "), t("p", [this._v("\n              Go back to the homepage to find what you’re looking for.\n            ")]), this._v(" "), t("nuxt-link", {
            staticClass: "backHome",
            attrs: {
              to: "/"
            }
          }, [this._v("Go to Homepage")])], 1)])])])])])
        }), [], !1, null, null, null).exports,
        R = (n(23), n(24), n(44), n(11)),
        T = {
          name: "Nuxt",
          components: {
            NuxtChild: k,
            NuxtError: P
          },
          props: {
            nuxtChildKey: {
              type: String,
              default: void 0
            },
            keepAlive: Boolean,
            keepAliveProps: {
              type: Object,
              default: void 0
            },
            name: {
              type: String,
              default: "default"
            }
          },
          errorCaptured: function (e) {
            this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
          },
          computed: {
            routerViewKey: function () {
              if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
              var e = Object(R.a)(this.$route.matched, 1)[0];
              if (!e) return this.$route.path;
              var t = e.components.default;
              if (t && t.options) {
                var n = t.options;
                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
            }
          },
          beforeCreate: function () {
            c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
          },
          render: function (e) {
            var t = this;
            return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
              return t.errorFromNuxtError = !1
            })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
              props: {
                to: "/"
              }
            }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
              return t.displayingNuxtError = !1
            })), e(P, {
              props: {
                error: this.nuxt.err
              }
            })) : e("NuxtChild", {
              key: this.routerViewKey,
              props: this.$props
            })
          }
        },
        D = (n(30), n(22), n(25), {
          computed: {
            logoType: function () {
              var e = this.$store.state.logo.logoType;
              return this.logo = e, e
            }
          },
          created: function () {
            window.addEventListener("scroll", (function () {
              var header = document.getElementById("headerNor"),
                e = document.getElementById("headerCover"),
                t = header.offsetTop + header.offsetHeight;
              "/" == window.location.pathname && (t = (header = document.getElementById("homepage-banner")).offsetTop + header.offsetHeight - 115), window.pageYOffset > t ? (document.getElementById("headerNor").classList.add("stickyHdr"), e.classList.add("show")) : (document.getElementById("headerNor").classList.remove("stickyHdr"), e.classList.remove("show"))
            }))
          }
        }),
        N = Object(S.a)(D, (function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("header", [n("div", {
            staticClass: "tophead",
            class: {
              head2: "black" == this.logoType, absoluteHdr: "white" == this.logoType
            },
            attrs: {
              id: "headerNor"
            }
          }, [n("div", {
            staticClass: "nav-circl"
          }), e._v(" "), n("div", {
            staticClass: "logo"
          }, [n("nuxt-link", {
            attrs: {
              to: "/"
            }
          }, ["black" == this.logoType ? n("img", {
            staticClass: "img-fluid img-logo blacklg",
            attrs: {
              src: "/images/black-logo.png",
              alt: "Logo",
              "data-not-lazy": ""
            }
          }) : e._e(), e._v(" "), "black" == this.logoType ? n("img", {
            staticClass: "img-fluid img-logo white-sticky-logo",
            attrs: {
              src: "/images/white-logo.png",
              alt: "Logo",
              "data-not-lazy": ""
            }
          }) : e._e(), e._v(" "), "white" == this.logoType ? n("img", {
            staticClass: "img-fluid img-logo whtelg",
            attrs: {
              src: "/images/white-logo.png",
              alt: "Logo",
              "data-not-lazy": ""
            }
          }) : e._e()])], 1), e._v(" "), n("div", {
            staticClass: "hed-rgt"
          }, [n("nuxt-link", {
            staticClass: "btn",
            attrs: {
              to: "/contact-us"
            }
          }, [e._v("\n                    Schedule Time to talk\n                ")]), e._v(" "), e._m(0), e._v(" "), n("span", {
            staticClass: "menu-bars",
            attrs: {
              onclick: "openNav()"
            }
          })], 1)]), e._v(" "), n("div", {
            attrs: {
              id: "headerCover"
            }
          }, [e._v(" ")]), e._v(" "), n("div", {
            staticClass: "overlay",
            attrs: {
              id: "mySidenav"
            }
          }, [n("div", {
            staticClass: "nav-outr"
          }, [n("div", {
            staticClass: "nav-wrap"
          }, [n("div", {
            staticClass: "nav-crcle1"
          }), e._v(" "), n("div", {
            staticClass: "nav-crcle2"
          }), e._v(" "), n("div", {
            staticClass: "nav-logo"
          }, [n("nuxt-link", {
            attrs: {
              to: "/",
              onclick: "closeNav()"
            }
          }, [n("img", {
            staticClass: "img-fluid",
            attrs: {
              src: "/images/white-logo.png",
              alt: "Dotlogics"
            }
          })])], 1), e._v(" "), e._m(1), e._v(" "), n("div", {
            staticClass: "overlay-content"
          }, [n("div", {
            staticClass: "nav-inner"
          }, [n("ul", [n("li", [n("nuxt-link", {
            staticClass: "abtnav about",
            class: {
              active: "about-us" == this.$store.state.navigation.activeLink
            },
            attrs: {
              to: "/about-us",
              onclick: "closeNav()"
            }
          }, [n("span", [e._v("About")])])], 1), e._v(" "), n("li", [n("nuxt-link", {
            staticClass: "abtserv services",
            class: {
              active: "services" == this.$store.state.navigation.activeLink
            },
            attrs: {
              to: "/services",
              onclick: "closeNav()"
            }
          }, [n("span", [e._v("Services")])])], 1), e._v(" "), n("li", [n("nuxt-link", {
            staticClass: "abtwk work",
            class: {
              active: "work" == this.$store.state.navigation.activeLink
            },
            attrs: {
              to: "/portfolio-listing-page",
              onclick: "closeNav()"
            }
          }, [n("span", [e._v("Portfolio")])])], 1), e._v(" "), n("li", [n("nuxt-link", {
            staticClass: "abtlab blogs",
            class: {
              active: "blog" == this.$store.state.navigation.activeLink
            },
            attrs: {
              to: "/blog",
              onclick: "closeNav()"
            }
          }, [n("span", [e._v("LOGIC LAB")])])], 1), e._v(" "), n("li", [n("nuxt-link", {
            staticClass: "abtconct contacts",
            class: {
              active: "contact-us" == this.$store.state.navigation.activeLink
            },
            attrs: {
              to: "/contact-us",
              onclick: "closeNav()"
            }
          }, [n("span", [e._v("Contact")])])], 1)])])])])])])])
        }), [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "head-fr-stragty"
          }, [t("p", [this._v("(631) 486-7589")])])
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("a", {
            staticClass: "nav-Closebtn",
            attrs: {
              href: "javascript:void(0)",
              onclick: "closeNav()"
            }
          }, [t("span", [this._v("Menu")])])
        }], !1, null, null, null).exports,
        I = Object(S.a)({}, (function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", {
            staticClass: "upper-fotr"
          }, [n("div", {
            staticClass: "ftrcr1"
          }), e._v(" "), n("div", {
            staticClass: "ftrcr2"
          }), e._v(" "), n("div", {
            staticClass: "ftrcr3"
          }), e._v(" "), n("div", {
            staticClass: "container"
          }, [n("div", {
            staticClass: "row"
          }, [n("div", {
            staticClass: "col-lg-12"
          }, [n("div", {
            staticClass: "talk-tit"
          }, [e._m(0), e._v(" "), n("p", [e._v("Have an unsolvable problem or audacious idea?")]), e._v(" "), e._m(1), e._v(" "), n("nuxt-link", {
            attrs: {
              to: "/contact-us"
            }
          }, [e._v("contact us")])], 1)])])])])
        }), [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("h4", {
            staticClass: "heading-primary text-uppercase"
          }, [t("span", {
            staticClass: "heading-detail"
          }, [t("span", {
            staticClass: "hd-text"
          }, [this._v("Let's Get to Work.")])])])
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("span", {
            staticClass: "for-bodr"
          }, [t("div", {
            staticClass: "left-brdr"
          }), this._v(" "), t("div", {
            staticClass: "brd-wtxt"
          }, [this._v("We’d love to hear about it.")]), this._v(" "), t("div", {
            staticClass: "right-brdr"
          })])
        }], !1, null, null, null).exports,
        L = n(26),
        B = n(28),
        U = n.n(B),
        H = {
          components: {
            ValidationProvider: L.b,
            ValidationObserver: L.a
          },
          data: function () {
            return {
              email: "",
              readTerms: !1,
              formSubmitted: !1,
              disabledBtn: !1,
              ip: "",
              prevUrl: "",
              subject: "Blog Subscriber",
              structuredData: {
                "@context": "http://schema.org",
                "@type": "Organization",
                legalName: "Dotlogics",
                name: "Dotlogics",
                aggregateRating: {
                  ratingValue: "4.9",
                  ratingCount: "56"
                },
                url: "https://www.dotlogics.com/",
                logo: "https://www.dotlogics.com/images/white-logo.png",
                email: "mailto:contacts@dotlogics.com",
                description: "Dotlogics is an award winning web design and online marketing agency in New York, specializing in business growth. Call us for professional web design and development! ",
                telephone: "(631) 486-7589 ",
                sameAs: [" https://www.facebook.com/dotlogics", " https://twitter.com/dotlogics", " https://www.youtube.com/user/Dotlogics", " https://www.linkedin.com/company/dotlogics-inc-", " https://www.instagram.com/dotlogics"],
                address: [{
                  "@type": "PostalAddress",
                  addressLocality: "New York",
                  addressRegion: "NY",
                  postalCode: "11731 ",
                  streetAddress: " 514 Larkfield Road, Suite 6 East Northport"
                }, {
                  "@type": "PostalAddress",
                  addressLocality: "New York",
                  addressRegion: "NY",
                  postalCode: "11590",
                  streetAddress: " Union Avenue Westbury "
                }]
              }
            }
          },
          mounted: function () {
            this.getMyIp()
          },
          fetch: function () {
            this.prevUrl || (this.prevUrl = this.$store.state.navigation.prevUrl), this.prevUrl || (this.prevUrl = document.referrer)
          },
          methods: {
            getMyIp: function () {
              var e = this;
              U.a.get("https://api.ipify.org/?format=json").then((function (t) {
                e.ip = t.data.ip
              }))
            },
            submit: function () {
              var e = this;
              this.$refs.form.validate().then((function (t) {
                if (t) {
                  e.disabledBtn = !0, e.prevUrl || (e.prevUrl = "https://www.dotlogics.com");
                  var n = {
                    email: e.email,
                    ip: e.ip,
                    prevUrl: e.prevUrl,
                    subject: e.subject
                  };
                  U.a.post("/api/subscribe", n).then((function (t) {
                    e.disabledBtn = !1, t.status && (e.formSubmitted = !0, e.email = "", e.readTerms = !1, e.$nextTick((function () {
                      e.$refs.form.reset()
                    })))
                  })).catch((function (t) {
                    e.disabledBtn = !1
                  }))
                }
              }))
            }
          },
          head: function () {
            return {
              __dangerouslyDisableSanitizers: ["script"],
              script: [{
                innerHTML: JSON.stringify(this.structuredData),
                type: "application/ld+json"
              }]
            }
          }
        },
        z = {
          scrollToTop: !0,
          components: {
            Header: N,
            UpperFooter: I,
            Footer: Object(S.a)(H, (function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", [n("footer", [n("div", {
                staticClass: "lower-ftr"
              }, [n("div", {
                staticClass: "gryftr-crc1"
              }), e._v(" "), n("div", {
                staticClass: "gryftr-crc2"
              }), e._v(" "), n("div", {
                staticClass: "container position-relative zindex-1"
              }, [n("div", {
                staticClass: "row"
              }, [n("div", {
                staticClass: "col-md-12"
              }, [n("div", {
                staticClass: "scrb-ftr-wrap"
              }, [n("div", {
                staticClass: "scrb-ftr-innr"
              }, [e._m(0), e._v(" "), n("div", {
                staticClass: "scrb-ftr-frm"
              }, [n("ValidationObserver", {
                ref: "form"
              }, [n("form", {
                attrs: {
                  action: ""
                },
                on: {
                  submit: function (t) {
                    return t.preventDefault(), e.submit(t)
                  }
                }
              }, [n("div", {
                staticClass: "inpt-fld"
              }, [n("ValidationProvider", {
                attrs: {
                  rules: {
                    required: !0,
                    email: !0
                  }
                },
                scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                    var r = t.errors;
                    return [n("div", {
                      staticClass: "inpt-innr"
                    }, [n("input", {
                      directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.email,
                        expression: "email"
                      }],
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Enter Your Email"
                      },
                      domProps: {
                        value: e.email
                      },
                      on: {
                        input: function (t) {
                          t.target.composing || (e.email = t.target.value)
                        }
                      }
                    }), e._v(" "), r[0] ? n("div", {
                      staticClass: "custm-error"
                    }, [e._v(e._s(r[0]))]) : e._e()])]
                  }
                }])
              }), e._v(" "), n("div", {
                staticClass: "inpt-btn"
              }, [n("button", {
                attrs: {
                  type: "submit",
                  disabled: e.disabledBtn
                }
              }, [e._v("\n                            " + e._s(e.disabledBtn ? "Please Wait..." : "subscribe now!") + "\n                          ")])])], 1)]), e._v(" "), n("div", {
                staticClass: "ftr-chkbx"
              }, [n("ValidationProvider", {
                attrs: {
                  rules: {
                    required: {
                      allowFalse: !1
                    }
                  },
                  mode: "lazy"
                },
                scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                    var r = t.errors;
                    return [n("div", {
                      staticClass: "prvcy-set-New"
                    }, [n("label", {
                      staticClass: "ftr-container"
                    }, [n("input", {
                      directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.readTerms,
                        expression: "readTerms"
                      }],
                      attrs: {
                        type: "checkbox"
                      },
                      domProps: {
                        checked: Array.isArray(e.readTerms) ? e._i(e.readTerms, null) > -1 : e.readTerms
                      },
                      on: {
                        change: function (t) {
                          var n = e.readTerms,
                            r = t.target,
                            o = !!r.checked;
                          if (Array.isArray(n)) {
                            var c = e._i(n, null);
                            r.checked ? c < 0 && (e.readTerms = n.concat([null])) : c > -1 && (e.readTerms = n.slice(0, c).concat(n.slice(c + 1)))
                          } else e.readTerms = o
                        }
                      }
                    }), e._v(" "), n("span", {
                      staticClass: "checkmark"
                    })]), e._v(" "), n("p", [e._v("*I have read the "), n("nuxt-link", {
                      attrs: {
                        to: "/privacy"
                      }
                    }, [e._v("Privacy Policy")]), e._v(" and agree to its terms.")], 1)]), e._v(" "), r ? n("div", {
                      staticClass: "custm-error"
                    }, [e._v(e._s(r[0]))]) : e._e()]
                  }
                }])
              }), e._v(" "), e.formSubmitted ? n("div", {
                staticClass: "alert alert-success alert-dismissible fade show mt-5"
              }, [e._v("\n                        You have successfully subscribed.\n                        "), n("button", {
                staticClass: "close",
                attrs: {
                  type: "button",
                  "data-dismiss": "alert",
                  "aria-label": "Close"
                }
              }, [n("span", {
                attrs: {
                  "aria-hidden": "true"
                }
              }, [e._v("×")])])]) : e._e()], 1)])], 1)])])])]), e._v(" "), n("div", {
                staticClass: "row position-relative zindex-1"
              }, [n("div", {
                staticClass: "col-md-4 col-lg-3"
              }, [n("div", {
                staticClass: "ftr-logo"
              }, [n("nuxt-link", {
                attrs: {
                  to: "/"
                }
              }, [n("img", {
                attrs: {
                  src: "/images/footer-logo.png",
                  alt: "Dotlogics"
                }
              })]), e._v(" "), n("a", {
                attrs: {
                  href: "mailto:hello@dotlogics.com"
                }
              }, [e._v("hello@dotlogics.com")]), e._v(" "), n("span", [e._v("(631) 486-7589")])], 1)]), e._v(" "), n("div", {
                staticClass: "col-md-4 col-lg-5"
              }, [n("div", {
                staticClass: "ftr-cont-bx"
              }, [n("div", {
                staticClass: "ftr-conttp"
              }, [n("h5", [n("nuxt-link", {
                attrs: {
                  to: "/contact-us"
                }
              }, [e._v("\n                    Contact Us\n                  ")])], 1)]), e._v(" "), e._m(1), e._v(" "), e._m(2)])]), e._v(" "), n("div", {
                staticClass: "col-md-4 col-lg-4"
              }, [n("div", {
                staticClass: "ftr-cont-bx ftr-abt"
              }, [n("div", {
                staticClass: "ftr-conttp"
              }, [n("h5", [n("nuxt-link", {
                attrs: {
                  to: "/about-us"
                }
              }, [e._v("\n                    About us\n                  ")])], 1)]), e._v(" "), e._m(3)])])]), e._v(" "), n("div", {
                staticClass: "row"
              }, [n("div", {
                staticClass: "col-md-12"
              }, [n("div", {
                staticClass: "all-rgt-txt"
              }, [n("div", {
                staticClass: "w-50 float-left"
              }, [n("p", [e._v("© 2021 Dotlogics Design. All rights reserved. | "), n("nuxt-link", {
                staticClass: "grey-link",
                attrs: {
                  to: "/sitemap"
                }
              }, [e._v("Sitemap")])], 1)]), e._v(" "), n("div", {
                staticClass: "w-50 float-right"
              }, [n("ul", [e._m(4), e._v(" "), e._m(5), e._v(" "), e._m(6), e._v(" "), e._m(7), e._v(" "), e._m(8), e._v(" "), n("li", [n("span", {
                staticClass: "clist-icon"
              }, [n("nuxt-link", {
                attrs: {
                  to: "/city-listing"
                }
              }, [n("img", {
                attrs: {
                  src: "/images/made-in-ny.png",
                  alt: "Made In NY"
                }
              })])], 1)])])])])])])]), e._v(" "), n("div", {
                staticClass: "gryftr-crc3"
              }), e._v(" "), n("div", {
                staticClass: "gryftr-crc4"
              })]), e._v(" "), e._m(9)])])
            }), [function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "scrb-ftrtp"
              }, [t("p", [this._v("\n                    Sign up to get\n                    "), t("a", {
                attrs: {
                  href: "#"
                }
              }, [this._v("our weekly article")]), this._v(" of advice\n                    and insights on\n                    "), t("a", {
                attrs: {
                  href: "#"
                }
              }, [this._v("web design and online marketing.")]), this._v(" We don’t\n                    spam. We simply share quality\n                    "), t("a", {
                attrs: {
                  href: "#"
                }
              }, [this._v("advice for free.")])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "ftr-conttxt"
              }, [t("h6", [this._v("EAST NORTHPORT OFFICE")]), this._v(" "), t("p", [this._v("514 Larkfield Road, Suite 6 East Northport, NY 11731")])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "ftr-conttxt"
              }, [t("h6", [this._v("WESTBURY OFFICE")]), this._v(" "), t("p", [this._v("\n                  Union Avenue\n                  "), t("br"), this._v("Westbury, NY 11590\n                ")])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "ftr-conttxt"
              }, [t("p", [this._v("\n                  At Dotlogics, we have revolutionized the way businesses\n                  succeed online. Discover how we can help you achieve\n                  incredible results with a growth-driven website.\n                ")])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [t("a", {
                staticClass: "social-fb",
                attrs: {
                  href: "https://www.facebook.com/dotlogics",
                  target: "_blank"
                }
              }, [t("span", {
                staticClass: "inHovCir"
              }, [t("i", {
                staticClass: "fab fa-facebook-f"
              })])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [t("a", {
                staticClass: "social-twt",
                attrs: {
                  href: "https://twitter.com/dotlogics",
                  target: "_blank"
                }
              }, [t("span", {
                staticClass: "inHovCir"
              }, [t("i", {
                staticClass: "fab fa-twitter"
              })])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [t("a", {
                staticClass: "social-lkin",
                attrs: {
                  href: "https://www.linkedin.com/company/dotlogics-inc-",
                  target: "_blank"
                }
              }, [t("span", {
                staticClass: "inHovCir"
              }, [t("i", {
                staticClass: "fab fa-linkedin-in"
              })])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [t("a", {
                staticClass: "social-insta",
                attrs: {
                  href: "https://www.instagram.com/dotlogics/",
                  target: "_blank"
                }
              }, [t("span", {
                staticClass: "inHovCir"
              }, [t("i", {
                staticClass: "fab fa-instagram"
              })])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("li", [t("a", {
                staticClass: "social-ytube",
                attrs: {
                  href: "https://www.youtube.com/user/Dotlogics",
                  target: "_blank"
                }
              }, [t("span", {
                staticClass: "inHovCir"
              }, [t("i", {
                staticClass: "fab fa-youtube"
              })])])])
            }, function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "google-ratingN"
              }, [t("a", {
                attrs: {
                  href: "https://www.google.com/search?sxsrf=ALeKk01bSx0ycQxuVNEKeC_hEet_bGzTtg%3A1600377504483&source=hp&ei=oNJjX_iZGraV0PEPjdaiwAo&q=dotlogics&oq=dotlogics&gs_lcp=CgZwc3ktYWIQAzINCC4QxwEQrwEQJxCTAjIECAAQCjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIGCAAQChAeMgYIABAKEB4yBggAEAoQHjICCCY6BAgjECc6BQgAEJECOgsILhCxAxDHARCjAjoICAAQsQMQgwE6BQgAELEDOgUILhCxAzoCCABQ7QRY4QtgqA1oAHAAeACAAeQBiAHQCpIBBTAuNS4zmAEAoAEBqgEHZ3dzLXdpergBAw&sclient=psy-ab&ved=0ahUKEwj46aHljvHrAhW2CjQIHQ2rCKgQ4dUDCAk&uact=5#lrd=0x89c2899560c9d57f:0x7b82f430392f56f3,1",
                  target: "_blank"
                }
              }, [t("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "/images/new-rating-google.jpg",
                  alt: "Google Rating"
                }
              })])])
            }], !1, null, null, null).exports
          },
          mounted: function () {
            document.referrer && "" !== document.referrer && this.$store.commit("navigation/setPrevHostUrl", document.referrer)
          },
          methods: {}
        },
        F = Object(S.a)(z, (function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("Header"), this._v(" "), t("nuxt"), this._v(" "), t("upper-footer"), this._v(" "), t("Footer")], 1)
        }), [], !1, null, null, null).exports,
        M = {
          head: function () {
            return {
              link: [{
                href: "https://fonts.gstatic.com",
                rel: "preconnect"
              }, {
                href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap",
                rel: "stylesheet"
              }, {
                href: "/css/v-styles.min.css",
                rel: "stylesheet"
              }, {
                href: "/v-images/favicon.png",
                type: "image/jpg",
                rel: "logo"
              }, {
                href: "/v-images/favicon.png",
                type: "image/jpg",
                rel: "shortcut icon",
                sizes: "16x16 32x32 64x64"
              }, {
                href: "/v-images/favicon.png",
                type: "image/jpg",
                rel: "icon",
                sizes: "16x16 32x32 64x64"
              }]
            }
          }
        },
        Q = {
          scrollToTop: !0,
          components: {
            Header: Object(S.a)({}, (function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "headerSet"
              }, [t("nuxt-link", {
                attrs: {
                  to: "/"
                }
              }, [t("img", {
                attrs: {
                  src: "/v-images/logo.jpg",
                  alt: "Dotlogics"
                }
              })])], 1)
            }), [], !1, null, null, null).exports,
            Footer: Object(S.a)(M, (function () {
              var e = this.$createElement;
              this._self._c;
              return this._m(0)
            }), [function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", {
                staticClass: "footerRp"
              }, [this._v("\n  Powered by "), t("a", {
                attrs: {
                  href: "https://www.dotlogics.com",
                  target: "_blank"
                }
              }, [this._v("Dotlogics")])])
            }], !1, null, null, null).exports
          },
          methods: {}
        },
        video = Object(S.a)(Q, (function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("Header"), this._v(" "), t("nuxt"), this._v(" "), t("Footer")], 1)
        }), [], !1, null, null, null).exports;

      function V(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return K(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return c = e.done, e
          },
          e: function (e) {
            l = !0, o = e
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
        }
      }

      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }
      var Y = {
          _default: Object(x.s)(F),
          _video: Object(x.s)(video)
        },
        W = {
          render: function (e, t) {
            var n = e(this.layout || "nuxt"),
              r = e("div", {
                domProps: {
                  id: "__layout"
                },
                key: this.layoutName
              }, [n]),
              o = e("transition", {
                props: {
                  name: "layout",
                  mode: "out-in"
                },
                on: {
                  beforeEnter: function (e) {
                    window.$nuxt.$nextTick((function () {
                      window.$nuxt.$emit("triggerScroll")
                    }))
                  }
                }
              }, [r]);
            return e("div", {
              domProps: {
                id: "__nuxt"
              }
            }, [o])
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0
            }
          },
          beforeCreate: function () {
            c.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
          },
          created: function () {
            this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
          },
          watch: {
            "nuxt.err": "errorChanged"
          },
          computed: {
            isOffline: function () {
              return !this.isOnline
            },
            isFetching: function () {
              return this.nbFetching > 0
            }
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
            },
            refresh: function () {
              var e = this;
              return Object(r.a)(regeneratorRuntime.mark((function t() {
                var n, r;
                return regeneratorRuntime.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if ((n = Object(x.h)(e.$route)).length) {
                        t.next = 3;
                        break
                      }
                      return t.abrupt("return");
                    case 3:
                      return r = n.map((function (t) {
                        var p = [];
                        if (t.$options.fetch && t.$options.fetch.length && p.push(Object(x.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                        else {
                          var n, r = V(Object(x.e)(t.$vnode.componentInstance));
                          try {
                            for (r.s(); !(n = r.n()).done;) {
                              var component = n.value;
                              p.push(component.$fetch())
                            }
                          } catch (e) {
                            r.e(e)
                          } finally {
                            r.f()
                          }
                        }
                        return t.$options.asyncData && p.push(Object(x.q)(t.$options.asyncData, e.context).then((function (e) {
                          for (var n in e) c.a.set(t.$data, n, e[n])
                        }))), Promise.all(p)
                      })), t.prev = 4, t.next = 7, Promise.all(r);
                    case 7:
                      t.next = 13;
                      break;
                    case 9:
                      t.prev = 9, t.t0 = t.catch(4), Object(x.k)(t.t0), e.error(t.t0);
                    case 13:
                    case "end":
                      return t.stop()
                  }
                }), t, null, [
                  [4, 9]
                ])
              })))()
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                var e = (P.options || P).layout;
                "function" == typeof e && (e = e(this.context)), this.setLayout(e)
              }
            },
            setLayout: function (e) {
              return e && Y["_" + e] || (e = "default"), this.layoutName = e, this.layout = Y["_" + e], this.layout
            },
            loadLayout: function (e) {
              return e && Y["_" + e] || (e = "default"), Promise.resolve(Y["_" + e])
            }
          }
        };
      n(45), n(58);

      function J(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return G(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return c = e.done, e
          },
          e: function (e) {
            l = !0, o = e
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
        }
      }

      function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }
      c.a.use(l.a);
      var X = ["state", "getters", "actions", "mutations"],
        Z = {};
      (Z = function (e, t) {
        if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
        return "function" != typeof e && (e = Object.assign({}, e)), te(e, t)
      }(n(183), "store/index.js")).modules = Z.modules || {}, ne(n(184), "logo.js"), ne(n(185), "navigation.js");
      var ee = Z instanceof Function ? Z : function () {
        return new l.a.Store(Object.assign({
          strict: !1
        }, Z))
      };

      function te(e, t) {
        if (e.state && "function" != typeof e.state) {
          console.warn("'state' should be a method that returns an object in ".concat(t));
          var n = Object.assign({}, e.state);
          e = Object.assign({}, e, {
            state: function () {
              return n
            }
          })
        }
        return e
      }

      function ne(e, t) {
        e = e.default || e;
        var n = t.replace(/\.(js|mjs|ts)$/, "").split("/"),
          r = n[n.length - 1],
          o = "store/".concat(t);
        if (e = "state" === r ? function (e, t) {
            if ("function" != typeof e) {
              console.warn("".concat(t, " should export a method that returns an object"));
              var n = Object.assign({}, e);
              return function () {
                return n
              }
            }
            return te(e, t)
          }(e, o) : te(e, o), X.includes(r)) {
          var c = r;
          oe(re(Z, n, {
            isProperty: !0
          }), e, c)
        } else {
          "index" === r && (n.pop(), r = n[n.length - 1]);
          var l, d = re(Z, n),
            h = J(X);
          try {
            for (h.s(); !(l = h.n()).done;) {
              var f = l.value;
              oe(d, e[f], f)
            }
          } catch (e) {
            h.e(e)
          } finally {
            h.f()
          }!1 === e.namespaced && delete d.namespaced
        }
      }

      function re(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!t.length || o && 1 === t.length) return e;
        var c = t.shift();
        return e.modules[c] = e.modules[c] || {}, e.modules[c].namespaced = !0, e.modules[c].modules = e.modules[c].modules || {}, re(e.modules[c], t, {
          isProperty: o
        })
      }

      function oe(e, t, n) {
        t && ("state" === n ? e.state = t || e.state : e[n] = Object.assign({}, e[n], t))
      }
      var ie = n(88),
        ae = n.n(ie),
        se = (n(130), n(20));

      function ce(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ue(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return c = e.done, e
          },
          e: function (e) {
            l = !0, o = e
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
        }
      }

      function ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }

      function le(e, t, n) {
        return e.find((function (e) {
          return n ? e[t] === n : e[t]
        }))
      }
      var meta = n(125),
        pe = function (e) {
          ! function (e, t) {
            if ("function" != typeof e)
              for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) {
                  e[n] = e[n] || [];
                  var o, c = ce(r);
                  try {
                    for (c.s(); !(o = c.n()).done;) {
                      var l = o.value;
                      l.hid && le(e[n], "hid", l.hid) || l.name && le(e[n], "name", l.name) || e[n].push(l)
                    }
                  } catch (e) {
                    c.e(e)
                  } finally {
                    c.f()
                  }
                } else if ("object" === Object(se.a)(r))
                  for (var d in e[n] = e[n] || {}, r) e[n][d] = r[d];
                else void 0 === e[n] && (e[n] = r)
              } else console.warn("Cannot merge meta. Avoid using head as a function!")
          }(e.app.head, meta)
        },
        de = function (e, t) {
          return he.apply(this, arguments)
        };

      function he() {
        return (he = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
          var r;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                r = {
                  "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
                  "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
                  "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
                  "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
                  "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
                  "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
                  "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
                  ipad_1536x2048: "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
                  ipadpro9_1536x2048: "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
                  ipadpro10_1668x2224: "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
                  ipadpro12_2048x2732: "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
                  iphonese_640x1136: "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
                  iphone6_50x1334: "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
                  iphoneplus_1080x1920: "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
                  iphonex_1125x2436: "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
                  iphonexr_828x1792: "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
                  iphonexsmax_1242x2688: "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
                }, n("icon", (function (e) {
                  return r[e + "x" + e] || ""
                }));
              case 3:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }
      var fe = n(126),
        me = n.n(fe);

      function ge(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function be(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ge(Object(source), !0).forEach((function (t) {
            Object(o.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ge(Object(source)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }

      function ve(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ye(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ye(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0,
          l = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return c = e.done, e
          },
          e: function (e) {
            l = !0, o = e
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          }
        }
      }

      function ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }
      for (var we = {
          setBaseURL: function (e) {
            this.defaults.baseURL = e
          },
          setHeader: function (e, t) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              o = ve(Array.isArray(r) ? r : [r]);
            try {
              for (o.s(); !(n = o.n()).done;) {
                var c = n.value;
                if (!t) return void delete this.defaults.headers[c][e];
                this.defaults.headers[c][e] = t
              }
            } catch (e) {
              o.e(e)
            } finally {
              o.f()
            }
          },
          setToken: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
              r = e ? (t ? t + " " : "") + e : null;
            this.setHeader("Authorization", r, n)
          },
          onRequest: function (e) {
            this.interceptors.request.use((function (t) {
              return e(t) || t
            }))
          },
          onResponse: function (e) {
            this.interceptors.response.use((function (t) {
              return e(t) || t
            }))
          },
          onRequestError: function (e) {
            this.interceptors.request.use(void 0, (function (t) {
              return e(t) || Promise.reject(t)
            }))
          },
          onResponseError: function (e) {
            this.interceptors.response.use(void 0, (function (t) {
              return e(t) || Promise.reject(t)
            }))
          },
          onError: function (e) {
            this.onRequestError(e), this.onResponseError(e)
          },
          create: function (e) {
            return Oe(me()(e, this.defaults))
          }
        }, xe = function () {
          var e = je[_e];
          we["$" + e] = function () {
            return this[e].apply(this, arguments).then((function (e) {
              return e && e.data
            }))
          }
        }, _e = 0, je = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; _e < je.length; _e++) xe();
      var Oe = function (e) {
          var t = U.a.create(e);
          return t.CancelToken = U.a.CancelToken, t.isCancel = U.a.isCancel,
            function (e) {
              for (var t in we) e[t] = we[t].bind(e)
            }(t), t.onRequest((function (e) {
              e.headers = be(be({}, t.defaults.headers.common), e.headers)
            })), Ce(t), t
        },
        Ce = function (e) {
          var t = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {}
            },
            n = function () {
              var e = "undefined" != typeof window && window.$nuxt;
              return e && e.$loading && e.$loading.set ? e.$loading : t
            },
            r = 0;
          e.onRequest((function (e) {
            e && !1 === e.progress || r++
          })), e.onResponse((function (e) {
            e && e.config && !1 === e.config.progress || --r <= 0 && (r = 0, n().finish())
          })), e.onError((function (e) {
            e && e.config && !1 === e.config.progress || (r--, U.a.isCancel(e) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
          }));
          var o = function (e) {
            if (r && e.total) {
              var progress = 100 * e.loaded / (e.total * r);
              n().set(Math.min(100, progress))
            }
          };
          e.defaults.onUploadProgress = o, e.defaults.onDownloadProgress = o
        },
        ke = function (e, t) {
          var n = e.$config && e.$config.axios || {},
            r = n.browserBaseURL || n.baseURL || "http://localhost:3000/";
          var o = Oe({
            baseURL: r,
            headers: {
              common: {
                Accept: "application/json, text/plain, */*"
              },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {}
            }
          });
          e.$axios = o, t("axios", o)
        },
        $e = (n(59), n(129)),
        Ee = n(71),
        Ae = n(72),
        Se = n(127),
        Pe = "https://www.google.com/recaptcha/api.js",
        Re = function () {
          function e(t) {
            var n = t.hideBadge,
              r = t.language,
              o = t.siteKey,
              c = t.version,
              l = t.size;
            if (Object(Ee.a)(this, e), !o) throw new Error("ReCaptcha error: No key provided");
            if (!c) throw new Error("ReCaptcha error: No version provided");
            this._elements = {}, this._eventBus = null, this._ready = !1, this.hideBadge = n, this.language = r || "en", this.siteKey = o, this.version = c, this.size = l
          }
          var t;
          return Object(Ae.a)(e, [{
            key: "destroy",
            value: function () {
              if (this._ready) {
                this._ready = !1;
                var head = document.head,
                  style = this._elements.style,
                  e = Object($e.a)(document.head.querySelectorAll("script")).filter((function (script) {
                    return script.src.includes("recaptcha")
                  }));
                e.length && e.forEach((function (script) {
                  return head.removeChild(script)
                })), head.contains(style) && head.removeChild(style)
              }
            }
          }, {
            key: "execute",
            value: (t = Object(r.a)(regeneratorRuntime.mark((function e(t) {
              return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, this.init();
                  case 3:
                    if (!("grecaptcha" in window)) {
                      e.next = 5;
                      break
                    }
                    return e.abrupt("return", window.grecaptcha.execute(this.siteKey, {
                      action: t
                    }));
                  case 5:
                    e.next = 10;
                    break;
                  case 7:
                    throw e.prev = 7, e.t0 = e.catch(0), new Error("ReCaptcha error: Failed to execute");
                  case 10:
                  case "end":
                    return e.stop()
                }
              }), e, this, [
                [0, 7]
              ])
            }))), function (e) {
              return t.apply(this, arguments)
            })
          }, {
            key: "getResponse",
            value: function () {
              var e = this;
              return new Promise((function (t, n) {
                if ("grecaptcha" in window)
                  if ("invisible" == e.size) window.grecaptcha.execute(), window.recaptchaSuccessCallback = function (n) {
                    e._eventBus.emit("recaptcha-success", n), t(n)
                  }, window.recaptchaErrorCallback = function (t) {
                    e._eventBus.emit("recaptcha-error", t), n(t)
                  };
                  else {
                    var r = window.grecaptcha.getResponse();
                    if (r) e._eventBus.emit("recaptcha-success", r), t(r);
                    else {
                      e._eventBus.emit("recaptcha-error", "Failed to execute"), n("Failed to execute")
                    }
                  }
              }))
            }
          }, {
            key: "init",
            value: function () {
              var e = this;
              if (this._ready) return Promise.resolve();
              this._eventBus = new Se.EventEmitter, this._elements = {
                script: document.createElement("script"),
                style: document.createElement("style")
              };
              var t = this._elements,
                script = t.script,
                style = t.style;
              return script.addEventListener("error", (function () {
                throw document.head.removeChild(script), new Error("ReCaptcha error: Failed to load script")
              })), script.setAttribute("async", ""), script.setAttribute("defer", ""), 2 === this.version ? script.setAttribute("src", Pe + "?hl=" + this.language) : script.setAttribute("src", Pe + "?render=" + this.siteKey), document.head.appendChild(script), window.recaptchaSuccessCallback = function (t) {
                return e._eventBus.emit("recaptcha-success", t)
              }, window.recaptchaExpiredCallback = function () {
                return e._eventBus.emit("recaptcha-expired")
              }, window.recaptchaErrorCallback = function () {
                return e._eventBus.emit("recaptcha-error", "Failed to execute")
              }, this._ready = new Promise((function (t) {
                script.addEventListener("load", (function () {
                  3 === e.version && e.hideBadge ? (style.innerHTML = ".grecaptcha-badge { display: none }", document.head.appendChild(style)) : 2 === e.version && e.hideBadge && (style.innerHTML = ".grecaptcha-badge { visibility: hidden; }", document.head.appendChild(style)), window.grecaptcha.ready(t)
                }))
              })), this._ready
            }
          }, {
            key: "on",
            value: function (e, t) {
              return this._eventBus.on(e, t)
            }
          }, {
            key: "reset",
            value: function () {
              2 === this.version && window.grecaptcha.reset()
            }
          }]), e
        }(),
        Te = function (e, t) {
          c.a.component("recaptcha", (function () {
            return n.e(128).then(n.bind(null, 357))
          })), t("recaptcha", new Re({
            hideBadge: !0,
            language: "v2",
            siteKey: "6Lcv-f4UAAAAABq3UaJF6Ihhcte8oQ3nZuJUg9Dv",
            version: 2,
            size: "invisible"
          }))
        },
        De = n(43);

      function Ne(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function Ie(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? Ne(Object(source), !0).forEach((function (t) {
            Object(o.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ne(Object(source)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }
      Object(L.c)("required", Ie(Ie({}, De.e), {}, {
        message: "This field is required"
      })), Object(L.c)("max", Ie(Ie({}, De.c), {}, {
        message: "Maximum 20 characters are allowed."
      })), Object(L.c)("email", Ie(Ie({}, De.b), {}, {
        message: "Please provide valid email address"
      })), Object(L.c)("numeric", Ie(Ie({}, De.d), {}, {
        message: "Only digits are allowed"
      })), Object(L.c)("alpha", Ie(Ie({}, De.a), {}, {
        message: "This field must only contain alphabetic characters"
      }));
      var Le = function (e) {
        var a, t, g, s, n, r = e.app;
        a = window, t = document, g = "script", a.GoogleAnalyticsObject = "ga", a.ga = a.ga || function () {
          (a.ga.q = a.ga.q || []).push(arguments)
        }, a.ga.l = 1 * new Date, s = t.createElement(g), n = t.getElementsByTagName(g)[0], s.async = 1, s.src = "https://www.google-analytics.com/analytics.js", n.parentNode.insertBefore(s, n), ga("create", "UA-23809722-2", "auto"), ga("send", "pageview"), r.router.afterEach((function (e, a) {
          ga("set", "page", e.fullPath), ga("send", "pageview")
        }))
      };

      function Be(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function Ue(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? Be(Object(source), !0).forEach((function (t) {
            Object(o.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Be(Object(source)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }
      c.a.component(f.a.name, f.a), c.a.component(v.a.name, Ue(Ue({}, v.a), {}, {
        render: function (e, t) {
          return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(e, t)
        }
      })), c.a.component(k.name, k), c.a.component("NChild", k), c.a.component(T.name, T), Object.defineProperty(c.a.prototype, "$nuxt", {
        get: function () {
          return this.$root.$options.$nuxt
        },
        configurable: !0
      }), c.a.use(d.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
      });
      var qe = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to"
        },
        He = l.a.Store.prototype.registerModule,
        ze = {
          preserveState: !0
        };

      function Fe(path, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return He.call(this, path, e, Ue(Ue({}, ze), t))
      }

      function Me(e) {
        return Qe.apply(this, arguments)
      }

      function Qe() {
        return (Qe = Object(r.a)(regeneratorRuntime.mark((function e(t) {
          var n, r, o, l, d, h, path, f, m = arguments;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return f = function (e, t) {
                  if (!e) throw new Error("inject(key, value) has no key provided");
                  if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                  l[e = "$" + e] = t, l.context[e] || (l.context[e] = t), o[e] = l[e];
                  var n = "__nuxt_" + e + "_installed__";
                  c.a[n] || (c.a[n] = !0, c.a.use((function () {
                    Object.prototype.hasOwnProperty.call(c.a.prototype, e) || Object.defineProperty(c.a.prototype, e, {
                      get: function () {
                        return this.$root.$options[e]
                      }
                    })
                  })))
                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, e.next = 4, C();
              case 4:
                return r = e.sent, (o = ee(t)).$router = r, o.registerModule = Fe, l = Ue({
                  head: {
                    title: "dotlogics",
                    meta: [{
                      charset: "utf-8"
                    }, {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1"
                    }, {
                      hid: "description",
                      name: "description",
                      content: "Dotlogics is an award winning web design & online marketing agency in New York, specializing in business growth. Call us for professional web design and development!"
                    }, {
                      name: "msapplication-TileColor",
                      content: "#000000"
                    }, {
                      name: "msapplication-TileImage",
                      content: "/images/icons/ms-icon-144x144.png"
                    }, {
                      name: "theme-color",
                      content: "#000000"
                    }],
                    link: [{
                      rel: "shortcut icon",
                      type: "image/x-icon",
                      href: "/images/icons/favicon.ico"
                    }, {
                      rel: "apple-touch-icon",
                      size: "57x57",
                      href: "/images/icons/apple-icon-57x57.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "60x60",
                      href: "/images/icons/apple-icon-60x60.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "72x72",
                      href: "/images/icons/apple-icon-72x72.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "76x76",
                      href: "/images/icons/apple-icon-76x76.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "114x114",
                      href: "/images/icons/apple-icon-114x114.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "120x120",
                      href: "/images/icons/apple-icon-120x120.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "144x144",
                      href: "/images/icons/apple-icon-144x144.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "152x152",
                      href: "/images/icons/apple-icon-152x152.png"
                    }, {
                      rel: "apple-touch-icon",
                      size: "180x180",
                      href: "/images/icons/apple-icon-180x180.png"
                    }, {
                      rel: "icon",
                      type: "image/png",
                      size: "192x192",
                      href: "/images/icons/android-icon-192x192.png"
                    }, {
                      rel: "icon",
                      type: "image/png",
                      size: "32x32",
                      href: "/images/icons/favicon-32x32.png"
                    }, {
                      rel: "icon",
                      type: "image/png",
                      size: "96x96",
                      href: "/images/icons/favicon-96x96.png"
                    }, {
                      rel: "icon",
                      type: "image/png",
                      size: "16x16",
                      href: "/images/icons/favicon-16x16.png"
                    }, {
                      rel: "icon",
                      type: "image/x-icon",
                      href: "/images/icons/favicon.ico"
                    }, {
                      rel: "manifest",
                      href: "/images/icons/manifest.json"
                    }, {
                      rel: "stylesheet",
                      href: "/css/bootstrap.min.css",
                      defer: !0
                    }, {
                      rel: "stylesheet",
                      href: "/css/style.min.css",
                      defer: !0
                    }, {
                      rel: "stylesheet",
                      href: "/css/webfonts/fonts.min.css",
                      as: "style",
                      defer: !0
                    }, {
                      rel: "stylesheet",
                      href: "/css/all.min.css",
                      as: "style",
                      defer: !0
                    }, {
                      rel: "stylesheet",
                      href: "/css/scrollMagic.min.css",
                      as: "style",
                      defer: !0
                    }, {
                      rel: "stylesheet",
                      href: "https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap",
                      as: "style"
                    }, {
                      rel: "stylesheet",
                      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap",
                      as: "style"
                    }],
                    script: [{
                      src: "/js/jquery-3.4.1.min.js",
                      body: !0
                    }, {
                      src: "/js/popper.min.js",
                      body: !0
                    }, {
                      src: "/js/bootstrap.min.js",
                      body: !0
                    }, {
                      src: "/js/all.min.js",
                      body: !0
                    }, {
                      src: "/js/script.min.js",
                      body: !0
                    }, {
                      src: "/js/anim/TweenMax.min.js",
                      body: !0
                    }, {
                      src: "/js/anim/ScrollMagic.min.js",
                      body: !0
                    }, {
                      src: "/js/anim/animation.gsap.min.js",
                      body: !0
                    }, {
                      src: "/js/drift.min.js",
                      body: !0,
                      defer: !0
                    }, {
                      src: "/js/anim/debug.addIndicators.min.js",
                      body: !0,
                      defer: !0
                    }, {
                      src: "/js/hotjar.min.js",
                      body: !0,
                      defer: !0
                    }, {
                      src: "/js/leadfeeder.min.js",
                      body: !0,
                      defer: !0
                    }, {
                      src: "https://cdns.canddi.com/p/27d026940b42840c01ca3da6a9f19957.js",
                      body: !0,
                      defer: !0
                    }],
                    style: []
                  },
                  store: o,
                  router: r,
                  nuxt: {
                    defaultTransition: qe,
                    transitions: [qe],
                    setTransitions: function (e) {
                      return Array.isArray(e) || (e = [e]), e = e.map((function (e) {
                        return e = e ? "string" == typeof e ? Object.assign({}, qe, {
                          name: e
                        }) : Object.assign({}, qe, e) : qe
                      })), this.$options.nuxt.transitions = e, e
                    },
                    err: null,
                    dateErr: null,
                    error: function (e) {
                      e = e || null, l.context._errored = Boolean(e), e = e ? Object(x.p)(e) : null;
                      var n = l.nuxt;
                      return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                    }
                  }
                }, W), o.app = l, d = t ? t.next : function (e) {
                  return l.router.push(e)
                }, t ? h = r.resolve(t.url).route : (path = Object(x.f)(r.options.base, r.options.mode), h = r.resolve(path).route), e.next = 14, Object(x.t)(l, {
                  store: o,
                  route: h,
                  next: d,
                  error: l.nuxt.error.bind(l),
                  payload: t ? t.payload : void 0,
                  req: t ? t.req : void 0,
                  res: t ? t.res : void 0,
                  beforeRenderFns: t ? t.beforeRenderFns : void 0,
                  ssrContext: t
                });
              case 14:
                if (f("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), "function" != typeof ae.a) {
                  e.next = 20;
                  break
                }
                return e.next = 20, ae()(l.context, f);
              case 20:
                return e.next = 23, pe(l.context);
              case 23:
                return e.next = 26, de(l.context, f);
              case 26:
                return e.next = 29, ke(l.context, f);
              case 29:
                return e.next = 32, Te(l.context, f);
              case 32:
                e.next = 35;
                break;
              case 35:
                return e.next = 38, Le(l.context);
              case 38:
                0, e.next = 42;
                break;
              case 42:
                return e.abrupt("return", {
                  store: o,
                  app: l,
                  router: r
                });
              case 43:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }
    },
    73: function (e, t, n) {
      "use strict";
      n(16), n(30), n(18), n(25), n(22), n(17), n(23), n(24), n(8), n(45), n(59);
      var r = n(1);

      function o(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, l = !0,
          d = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return l = e.done, e
          },
          e: function (e) {
            d = !0, o = e
          },
          f: function () {
            try {
              l || null == n.return || n.return()
            } finally {
              if (d) throw o
            }
          }
        }
      }

      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
      }
      var l = window.requestIdleCallback || function (e) {
          var t = Date.now();
          return setTimeout((function () {
            e({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }), 1)
        },
        d = window.cancelIdleCallback || function (e) {
          clearTimeout(e)
        },
        h = window.IntersectionObserver && new window.IntersectionObserver((function (e) {
          e.forEach((function (e) {
            var t = e.intersectionRatio,
              link = e.target;
            t <= 0 || link.__prefetch()
          }))
        }));
      t.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: {
            type: Boolean,
            default: !0
          },
          noPrefetch: {
            type: Boolean,
            default: !1
          }
        },
        mounted: function () {
          this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
            timeout: 2e3
          }))
        },
        beforeDestroy: function () {
          d(this.handleId), this.__observed && (h.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function () {
            h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), h.observe(this.$el), this.__observed = !0)
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function () {
            var e = navigator.connection;
            return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
          },
          getPrefetchComponents: function () {
            return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (e) {
              return e.components.default
            })).filter((function (e) {
              return "function" == typeof e && !e.options && !e.__prefetched
            }))
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              h.unobserve(this.$el);
              var e, t = o(this.getPrefetchComponents());
              try {
                for (t.s(); !(e = t.n()).done;) {
                  var n = e.value,
                    r = n();
                  r instanceof Promise && r.catch((function () {})), n.__prefetched = !0
                }
              } catch (e) {
                t.e(e)
              } finally {
                t.f()
              }
            }
          }
        }
      }
    },
    86: function (e, t, n) {
      "use strict";
      t.a = {}
    },
    88: function (e, t, n) {
      n(29);
      var r = n(186);

      function o() {
        return (o = r(regeneratorRuntime.mark((function e() {
          var t, r, o;
          return regeneratorRuntime.wrap((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(!1 in navigator)) {
                  e.next = 2;
                  break
                }
                throw new Error("serviceWorker is not supported in current browser!");
              case 2:
                return e.next = 4, n.e(129).then(n.bind(null, 192));
              case 4:
                return t = e.sent, r = t.Workbox, o = new r("/sw.js", {
                  scope: "/"
                }), e.next = 9, o.register();
              case 9:
                return e.abrupt("return", o);
              case 10:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }
      window.$workbox = function () {
        return o.apply(this, arguments)
      }().catch((function (e) {}))
    }
  },
  [
    [132, 126, 1, 127]
  ]
]);
