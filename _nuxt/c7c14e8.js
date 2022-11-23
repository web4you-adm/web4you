(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{193:function(t,e,o){"use strict";o(58);var n=o(28),r=o.n(n),l={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,o,n){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=l.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveHomeBlog:function(t,e,o,n){r.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=l.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveCategoryBlog:function(t,e,o,n,c){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+n).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=l.updateClassName(o)),c(e,o,200)})).catch((function(t){return c(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=l.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var o="js"===e?"script":"css"===e?"link":"none",n="js"===e?"src":"css"===e?"href":"none",r=document.getElementsByTagName(o),i=r.length;i>=0;i--)r[i]&&null!=r[i].getAttribute(n)&&-1!==r[i].getAttribute(n).indexOf(t)&&r[i].parentNode.removeChild(r[i])}};e.a=l},194:function(t,e,o){"use strict";var n=o(193),r={created:function(){},data:function(){return{disable:!0,isActive:"blog"===n.a.getFirstUrlSegment(this.$route.path)}}},l=o(6),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brt-row"},[e("ul",[e("li",[e("nuxt-link",{staticClass:"btn-tab text-uppercase blog-lists",class:{"nuxt-link-exact-active":this.isActive},attrs:{to:"/blog"}},[this._v("blogs")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"btn-tab text-uppercase blog-videos",attrs:{to:"/video"}},[this._v("videos")])],1),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"disbtn"},[e("a",{staticClass:"btn-tab text-uppercase blog-ebooks disabled",attrs:{href:"javascript: void(0);"}},[this._v("ebooks")]),this._v(" "),e("div",{staticClass:"tool-popup",staticStyle:{display:"none"}},[e("div",{staticClass:"tp-arrow"}),this._v(" "),e("div",{staticClass:"tp-inn"},[this._v("\n                    Coming Soon\n                ")])])])}],!1,null,null,null);e.a=component.exports},250:function(t,e,o){"use strict";o.r(e);var n={components:{BlogNav:o(194).a},data:function(){return{title:"Improve Your Google Ranking in 2020: Tips & Tricks"}},fetch:function(){this.$store.commit("logo/changeLogo","black"),this.$store.commit("navigation/activeLink","blog"),this.$store.commit("navigation/setPrevUrl",$nuxt.$route.path)},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Want to know how to improve Google ranking? Check out our tips and tricks from Dotlogic's Google experts."},{hid:"keywords",name:"keywords",content:"how to improve google ranking"},{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null}],bodyAttrs:{class:"video-detail"},link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}},script:[]},r=o(6),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageMain-wrap blog"},[o("div",{staticClass:"pageMain-in"},[o("div",{staticClass:"triangleBgIcon"}),t._v(" "),o("div",{staticClass:"triangleBgIcon bottom-left"}),t._v(" "),o("div",{staticClass:"pg-minHeight"},[o("div",{staticClass:"top-blog-header"},[o("div",{staticClass:"cusPage-con"},[o("div",{staticClass:"tpblog-inner"},[o("div",{staticClass:"arrow-icon-02"},[o("nuxt-link",{staticClass:"prev",attrs:{to:"/video",title:"Back"}},[o("span",{staticClass:"icoCir"},[t._v("←")])])],1)])])]),t._v(" "),o("div",{staticClass:"blist-btm-wrap"},[o("div",{staticClass:"cusPage-con pos-rel blog-video-bg-text"},[o("div",{staticClass:"xlText"},[t._v("videos")]),t._v(" "),o("div",{staticClass:"videoDtlWrap"},[o("div",{staticClass:"vdInWrap"},[o("div",{staticClass:"vdInner"},[o("div",{staticClass:"vdContent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"vdCBtm clear-both"},[o("h4",[t._v("Highlights in this video:")]),t._v(" "),o("p",[t._v("\n                                             Today’s video has 3 important tips for getting higher Google rankings for your website:\n                                         ")]),t._v(" "),t._m(2),t._v(" "),o("p",[t._v("\n                                             Click here & we’ll be happy to reach out with more great tips to increase your Google rankings: "),o("strong",[o("nuxt-link",{attrs:{to:"/contact-us"}},[t._v("https://www.dotlogics.com/contact-us")])],1),t._v(" "),o("br"),o("br")]),t._v(" "),o("h4",[t._v("Connect with us on social media:")]),t._v(" "),t._m(3)])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-main-title clear-both"},[e("h1",[this._v("\n                                             Tips For Higher Google Rankings\n                                         ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"videoIframe"},[e("iframe",{attrs:{width:"100%",height:"570",src:"https://www.youtube.com/embed/4UpULrQ7_74",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[t._v("\n                                                 Discovering if the tags in your title, meta, & h1 are optimized to generate the best traffic to your site. This is really important to keep you high in the search engine rankings.\n                                             ")]),t._v(" "),o("li",[t._v("\n                                                 Generating backlinks which are still an important part of Google rankings. If you post often, you'll have some already, & the more you post, the more you can generate.\n                                             ")]),t._v(" "),o("li",[t._v("\n                                                 If your keywords are the best ones to use, & are put in the most advantageous places. This is key for Google search rankings, & can make all the difference in your traffic.\n                                             ")]),t._v(" "),o("li",[t._v("\n                                                 There are several tools you can use, like Google Analytics, Seoability & others to find out if your website is performing the way it should, & if not, what you can do to make it better & more performant.\n                                             ")]),t._v(" "),o("li",[t._v("\n                                                 Finally, is your topic popular? If the topic isn't trending, maybe you need to rethink the category or name, to make it more appealing.\n                                             ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[t._v("Facebook: "),o("strong",[o("a",{attrs:{href:"https://www.facebook.com/dotlogics",target:"_blank"}},[t._v("https://www.facebook.com/dotlogics")])])]),t._v(" "),o("li",[t._v("Twitter: "),o("strong",[o("a",{attrs:{href:"https://twitter.com/dotlogics",target:"_blank"}},[t._v("https://twitter.com/dotlogics")])])]),t._v(" "),o("li",[t._v("LinkedIn: "),o("strong",[o("a",{attrs:{href:"https://www.linkedin.com/company/dotlogics-inc-/",target:"_blank"}},[t._v("https://www.linkedin.com/company/dotlogics-inc-/")])])]),t._v(" "),o("li",[t._v("Instagram: "),o("strong",[o("a",{attrs:{href:"https://www.instagram.com/dotlogics/",target:"_blank"}},[t._v("https://www.instagram.com/dotlogics/")])])])])}],!1,null,null,null);e.default=component.exports}}]);