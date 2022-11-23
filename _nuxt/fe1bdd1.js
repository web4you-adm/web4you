(window.webpackJsonp = window.webpackJsonp || []).push([
  [22], {
    193: function (t, e, n) {
      "use strict";
      n(58);
      var o = n(28),
        r = n.n(o),
        l = {
          resolveClassName: function (t) {
            var e = "";
            return 2 === t && (e = "gra-green"), 3 === t && (e = "gra-skyblue"), 4 === t && (e = "gra-pink"), e
          },
          resolveBlog: function (t, e, n, o) {
            r.a.get("https://admin.dotlogics.com/api/blog/get?page=" + t).then((function (t) {
              (e = t.data.blogs).data.length && (n = n.length ? n.concat(e.data) : e.data, n = l.updateClassName(n)), o(e, n, 200)
            })).catch((function (t) {
              return o(t, [], 400)
            }))
          },
          resolveHomeBlog: function (t, e, n, o) {
            r.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage=" + t).then((function (t) {
              (e = t.data.blogs).data.length && (n = n.length ? n.concat(e.data) : e.data, n = l.updateClassName(n)), o(e, n, 200)
            })).catch((function (t) {
              return o(t, [], 400)
            }))
          },
          resolveCategoryBlog: function (t, e, n, o, c) {
            r.a.get("https://admin.dotlogics.com/api/blog/get?page=" + t + "&category=" + o).then((function (t) {
              (e = t.data.blogs).data.length && (n = n.length ? n.concat(e.data) : e.data, n = l.updateClassName(n)), c(e, n, 200)
            })).catch((function (t) {
              return c(t, [], 400)
            }))
          },
          updateClassName: function (t) {
            for (var e = 0, i = 0; i < t.length; ++i) ++e, t[i].className = l.resolveClassName(e), 4 === e && (e = 0);
            return t
          },
          getLastUrlSegment: function (path) {
            return path.substring(path.lastIndexOf("/") + 1)
          },
          getFirstUrlSegment: function (path) {
            return path.indexOf(1), path.toLowerCase(), path = path.split("/")[1]
          },
          resolveNotFound: function (data, t) {
            data && data.length ? t(!1) : t(!0)
          },
          isValidHttpUrl: function (t) {
            var e;
            try {
              e = new URL(t)
            } catch (t) {
              return !1
            }
            return "http:" === e.protocol || "https:" === e.protocol
          },
          removeJsCssFile: function (t, e) {
            for (var n = "js" === e ? "script" : "css" === e ? "link" : "none", o = "js" === e ? "src" : "css" === e ? "href" : "none", r = document.getElementsByTagName(n), i = r.length; i >= 0; i--) r[i] && null != r[i].getAttribute(o) && -1 !== r[i].getAttribute(o).indexOf(t) && r[i].parentNode.removeChild(r[i])
          }
        };
      e.a = l
    },
    194: function (t, e, n) {
      "use strict";
      var o = n(193),
        r = {
          created: function () {},
          data: function () {
            return {
              disable: !0,
              isActive: "blog" === o.a.getFirstUrlSegment(this.$route.path)
            }
          }
        },
        l = n(6),
        component = Object(l.a)(r, (function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "brt-row"
          }, [e("ul", [e("li", [e("nuxt-link", {
            staticClass: "btn-tab text-uppercase blog-lists",
            class: {
              "nuxt-link-exact-active": this.isActive
            },
            attrs: {
              to: "/blog"
            }
          }, [this._v("blogs")])], 1), this._v(" "), e("li", [e("nuxt-link", {
            staticClass: "btn-tab text-uppercase blog-videos",
            attrs: {
              to: "/video"
            }
          }, [this._v("videos")])], 1), this._v(" "), this._m(0)])])
        }), [function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("li", {
            staticClass: "disbtn"
          }, [e("a", {
            staticClass: "btn-tab text-uppercase blog-ebooks disabled",
            attrs: {
              href: "javascript: void(0);"
            }
          }, [this._v("ebooks")]), this._v(" "), e("div", {
            staticClass: "tool-popup",
            staticStyle: {
              display: "none"
            }
          }, [e("div", {
            staticClass: "tp-arrow"
          }), this._v(" "), e("div", {
            staticClass: "tp-inn"
          }, [this._v("\n                    Coming Soon\n                ")])])])
        }], !1, null, null, null);
      e.a = component.exports
    },
    195: function (t, e, n) {
      "use strict";
      var o = {
          name: "BlogList",
          data: function () {
            return {
              imageURL: "https://admin.dotlogics.com/storage/"
            }
          },
          props: {
            item: {
              id: {},
              title: {},
              slug: {},
              author_name: {},
              author_picture: {},
              feature_image: {},
              short_description: {},
              description: {},
              attachment_title: {},
              attachment: {},
              infographic: {},
              category_id: {},
              seo_title: {},
              meta_description: {},
              meta_keywords: {},
              status: {},
              publish_date: {},
              className: {}
            }
          }
        },
        r = n(6),
        component = Object(r.a)(o, (function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "gin-wrap"
          }, [n("div", {
            staticClass: "gin-inner"
          }, [n("div", {
            staticClass: "gin-gra",
            class: t.item.className
          }, [n("nuxt-link", {
            attrs: {
              to: "/blog/" + t.item.slug
            }
          }, [n("div", {
            staticClass: "imgBox"
          }, [n("div", {
            staticClass: "img-inner"
          }, [n("div", {
            staticClass: "trans-Circle"
          }), t._v(" "), n("div", {
            staticClass: "img-rel-container",
            style: {
              backgroundImage: "url('" + (t.imageURL + t.item.thumbnail_image) + "')"
            }
          }, [n("img", {
            staticClass: "transImage",
            attrs: {
              src: "/images/trans-image.png",
              alt: t.item.alt_text_for_thumbnail
            }
          })])])]), t._v(" "), n("div", {
            staticClass: "gbox-content-wrap"
          }, [n("div", {
            staticClass: "grid-content white-txt box-padding"
          }, [n("span", {
            staticClass: "small-text-box shaped pos-abs"
          }, [n("span", {
            staticClass: "ins-text"
          }, [t._v("\n                                " + t._s(t.item.category.name) + "\n                              ")])]), t._v(" "), n("span", {
            staticClass: "gc-para"
          }, [t._v("\n                              " + t._s(t.item.title) + "\n                            ")]), t._v(" "), n("span", {
            staticClass: "find-more"
          }, [t._v("find out more")])])])])], 1)])])
        }), [], !1, null, "998bf63e", null);
      e.a = component.exports
    },
    196: function (t, e, n) {
      "use strict";
      var o = n(194),
        r = (n(130), n(193)),
        l = {
          name: "BlogCategories",
          created: function () {
            this.resolveCategory()
          },
          methods: {
            resolveCategory: function () {
              var t = this;
              this.category = this.categories.find((function (e) {
                return e.slug === t.slug
              }))
            }
          },
          data: function () {
            return {
              category: {},
              slug: r.a.getLastUrlSegment(this.$route.path),
              categories: [{
                id: 2,
                name: "Website Conversions",
                slug: "website-conversions"
              }, {
                id: 5,
                name: "Ecommerce",
                slug: "ecommerce"
              }, {
                id: 6,
                name: "Web Design and Development",
                slug: "web-design-and-development"
              }, {
                id: 7,
                name: "User Interface",
                slug: "user-interface"
              }, {
                id: 8,
                name: "Marketing",
                slug: "marketing"
              }, {
                id: 9,
                name: "Tips and Trends",
                slug: "tips-and-trends"
              }, {
                id: 10,
                name: "Mobile Responsive",
                slug: "mobile-responsive"
              }, {
                id: 11,
                name: "Mobile Apps",
                slug: "mobile-apps"
              }, {
                id: 12,
                name: "CMS",
                slug: "cms"
              }, {
                id: 13,
                name: "Content Strategy",
                slug: "content-strategy"
              }]
            }
          }
        },
        c = n(6),
        d = {
          name: "BlogHeader",
          components: {
            BlogCategories: Object(c.a)(l, (function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", {
                staticClass: "brt-row"
              }, [n("div", {
                staticClass: "custom-blog-dropdown"
              }, [n("div", {
                staticClass: "newDropDown"
              }, [n("div", {
                staticClass: "dropText"
              }, [t.category ? t._e() : n("span", [t._v("Top Categories")]), t._v(" "), t.category ? n("span", [t._v(t._s(t.category.name))]) : t._e(), t._v(" "), n("span", {
                staticClass: "fas fa-chevron-down icon"
              })]), t._v(" "), n("button", {
                staticClass: "dropbtn",
                attrs: {
                  onclick: "myFunction()"
                }
              }, [t._v(" ")]), t._v(" "), n("div", {
                staticClass: "dropdown-content",
                attrs: {
                  id: "myDropdown"
                }
              }, t._l(t.categories, (function (e) {
                return n("nuxt-link", {
                  key: e.id,
                  staticClass: "dropdown-item",
                  attrs: {
                    to: "/blog/" + e.slug
                  }
                }, [t._v(t._s(e.name))])
              })), 1)])])])
            }), [], !1, null, "19203380", null).exports,
            BlogNav: o.a
          }
        },
        m = Object(c.a)(d, (function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "contact-talk"
          }, [e("div", {
            staticClass: "container"
          }, [e("div", {
            staticClass: "contact-talk-inner"
          }, [e("div", {
            staticClass: "row"
          }, [this._m(0), this._v(" "), e("div", {
            staticClass: "col-lg-7 ctalk-rightSec"
          }, [e("div", {
            staticClass: "blog-rTab-wrap"
          }, [e("BlogCategories")], 1)])])])])])
        }), [function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "col-lg-5 ctalk-leftSec"
          }, [e("h1", {
            staticClass: "heading-primary hdr-contact text-uppercase"
          }, [e("span", {
            staticClass: "heading-title"
          }, [this._v("insights")]), this._v(" "), e("span", {
            staticClass: "heading-detail logic-lab"
          }, [e("span", {
            staticClass: "hd-text"
          }, [this._v("logic lab")])])])])
        }], !1, null, "127a43cc", null);
      e.a = m.exports
    },
    197: function (t, e, n) {
      "use strict";
      n(131);
      var o = {
          name: "BlogLoader",
          props: {
            isLoadingPosts: {
              type: Boolean
            },
            paginatedBlog: {},
            pageNumber: {
              type: Number
            }
          },
          methods: {
            onLoadMore: function () {
              this.$emit("onLoadMore")
            }
          }
        },
        r = n(6),
        component = Object(r.a)(o, (function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "load-more-wrap"
          }, [t.isLoadingPosts ? n("img", {
            attrs: {
              src: "/images/preloader.gif",
              alt: "Load More"
            }
          }) : t._e(), t._v(" "), !t.isLoadingPosts && t.paginatedBlog && t.paginatedBlog.last_page > t.pageNumber ? n("span", {
            staticClass: "loading-text text-uppercase",
            staticStyle: {
              cursor: "pointer"
            },
            on: {
              click: function (e) {
                return t.onLoadMore()
              }
            }
          }, [t._v("Load more")]) : t._e()])
        }), [], !1, null, "7011b4e9", null);
      e.a = component.exports
    },
    198: function (t, e, n) {
      "use strict";
      var o = n(193),
        r = n(197),
        l = n(195),
        c = {
          name: "CategoryBlog",
          components: {
            BlogLoader: r.a,
            BlogList: l.a
          },
          data: function () {
            return {
              paginatedBlog: {},
              blog: [],
              isLoadingPosts: !1,
              pageNumber: 1,
              categorySlug: o.a.getLastUrlSegment(this.$route.path),
              notFound: !1
            }
          },
          created: function () {
            this.resolvePage()
          },
          methods: {
            resolvePage: function () {
              var t = this;
              o.a.resolveCategoryBlog(this.pageNumber, this.paginatedBlog, this.blog, this.categorySlug, (function (e, n, code) {
                t.isLoadingPosts = !1, 200 === code ? (t.paginatedBlog = e, t.blog = n, o.a.resolveNotFound(t.blog, (function (e) {
                  return t.notFound = e
                }))) : o.a.resolveNotFound(t.blog, (function (e) {
                  return t.notFound = e
                }))
              }))
            },
            onLoadMore: function () {
              this.isLoadingPosts = !0, ++this.pageNumber, this.resolvePage()
            }
          }
        },
        d = n(6),
        component = Object(d.a)(c, (function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "blist-btm-wrap"
          }, [n("div", {
            staticClass: "cusPage-con"
          }, [n("div", {
            staticClass: "blogNewWrap",
            attrs: {
              id: "blogLists"
            }
          }, [t.notFound ? n("div", {
            staticClass: "not-found"
          }, [t._v("No Blog Found")]) : t._e(), t._v(" "), t.notFound ? t._e() : n("div", {
            staticClass: "flex-listing"
          }, t._l(t.blog, (function (t) {
            return n("div", {
              key: t.id,
              staticClass: "gird-fifty"
            }, [n("BlogList", {
              attrs: {
                item: t
              }
            })], 1)
          })), 0)]), t._v(" "), n("BlogLoader", {
            attrs: {
              "is-loading-posts": t.isLoadingPosts,
              "page-number": t.pageNumber,
              "paginated-blog": t.paginatedBlog
            },
            on: {
              onLoadMore: function (e) {
                return t.onLoadMore()
              }
            }
          })], 1)])
        }), [], !1, null, "0d53ec43", null);
      e.a = component.exports
    },
    352: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(196),
        r = n(198),
        l = n(193),
        c = {
          components: {
            CategoryBlog: r.a,
            BlogHeader: o.a
          },
          fetch: function () {
            this.$store.commit("logo/changeLogo", "black"), this.$store.commit("navigation/activeLink", "blog"), this.$store.commit("navigation/setPrevUrl", $nuxt.$route.path)
          },
          asyncData: function (t) {
            var e = l.a.getLastUrlSegment(t.route.fullPath);
            return t.$axios.get("https://admin.dotlogics.com/api/blog/category/get?category=" + e).then((function (t) {
              return {
                response: t.data
              }
            }))
          },
          data: function () {
            return {
              title: "Blog",
              category: {}
            }
          },
          created: function () {
            this.category = this.response.category
          },
          head: function () {
            return {
              title: this.title,
              meta: [{
                hid: "name",
                name: "name",
                content: this.category && this.category.meta_title || ""
              }, {
                hid: "description",
                name: "description",
                content: this.category && this.category.meta_description || ""
              }, {
                hid: "keywords",
                name: "keywords",
                content: this.category && this.category.meta_keywords || ""
              }, {
                hid: "og:title",
                name: "og:title",
                content: null
              }, {
                hid: "og:description",
                name: "og:description",
                content: null
              }],
              bodyAttrs: {
                class: ""
              },
              link: [{
                rel: "canonical",
                href: "".concat("https://www.web4you.bg").concat(this.$route.path)
              }]
            }
          },
          script: [{
            src: "/js/blog.min.js",
            body: !0
          }]
        },
        d = n(6),
        component = Object(d.a)(c, (function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div", {
            staticClass: "pageMain-wrap blog bl-listing",
            staticStyle: {
              "background-repeat": "no-repeat"
            }
          }, [e("div", {
            staticClass: "pageMain-in"
          }, [e("div", {
            staticClass: "triangleBgIcon blog-lar"
          }), this._v(" "), e("div", {
            staticClass: "pg-minHeight"
          }, [e("BlogHeader"), this._v(" "), e("CategoryBlog")], 1)])])
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);
