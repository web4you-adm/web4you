(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{193:function(t,e,n){"use strict";n(58);var o=n(28),c=n.n(o),r={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,n,o){c.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=r.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveHomeBlog:function(t,e,n,o){c.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=r.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveCategoryBlog:function(t,e,n,o,l){c.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+o).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=r.updateClassName(n)),l(e,n,200)})).catch((function(t){return l(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=r.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var n="js"===e?"script":"css"===e?"link":"none",o="js"===e?"src":"css"===e?"href":"none",c=document.getElementsByTagName(n),i=c.length;i>=0;i--)c[i]&&null!=c[i].getAttribute(o)&&-1!==c[i].getAttribute(o).indexOf(t)&&c[i].parentNode.removeChild(c[i])}};e.a=r},194:function(t,e,n){"use strict";var o=n(193),c={created:function(){},data:function(){return{disable:!0,isActive:"blog"===o.a.getFirstUrlSegment(this.$route.path)}}},r=n(6),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brt-row"},[e("ul",[e("li",[e("nuxt-link",{staticClass:"btn-tab text-uppercase blog-lists",class:{"nuxt-link-exact-active":this.isActive},attrs:{to:"/blog"}},[this._v("blogs")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"btn-tab text-uppercase blog-videos",attrs:{to:"/video"}},[this._v("videos")])],1),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"disbtn"},[e("a",{staticClass:"btn-tab text-uppercase blog-ebooks disabled",attrs:{href:"javascript: void(0);"}},[this._v("ebooks")]),this._v(" "),e("div",{staticClass:"tool-popup",staticStyle:{display:"none"}},[e("div",{staticClass:"tp-arrow"}),this._v(" "),e("div",{staticClass:"tp-inn"},[this._v("\n                    Coming Soon\n                ")])])])}],!1,null,null,null);e.a=component.exports},242:function(t,e,n){"use strict";n.r(e);var o={components:{BlogNav:n(194).a},data:function(){return{title:"Marketing During Covid-19: What Will Be Effective?"}},fetch:function(){this.$store.commit("logo/changeLogo","black"),this.$store.commit("navigation/activeLink","blog"),this.$store.commit("navigation/setPrevUrl",$nuxt.$route.path)},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Marketing during Covid-19 - what's changed? Get effective marketing campaign ideas from experts at Dotlogics."},{hid:"keywords",name:"keywords",content:"Marketing during Covid-19, marketing campaign ideas"},{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null}],bodyAttrs:{class:"video-detail"},link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}},script:[]},c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageMain-wrap blog"},[n("div",{staticClass:"pageMain-in"},[n("div",{staticClass:"triangleBgIcon"}),t._v(" "),n("div",{staticClass:"triangleBgIcon bottom-left"}),t._v(" "),n("div",{staticClass:"pg-minHeight"},[n("div",{staticClass:"top-blog-header"},[n("div",{staticClass:"cusPage-con"},[n("div",{staticClass:"tpblog-inner"},[n("div",{staticClass:"arrow-icon-02"},[n("nuxt-link",{staticClass:"prev",attrs:{to:"/video",title:"Back"}},[n("span",{staticClass:"icoCir"},[t._v("←")])])],1)])])]),t._v(" "),n("div",{staticClass:"blist-btm-wrap"},[n("div",{staticClass:"cusPage-con pos-rel blog-video-bg-text"},[n("div",{staticClass:"xlText"},[t._v("videos")]),t._v(" "),n("div",{staticClass:"videoDtlWrap"},[n("div",{staticClass:"vdInWrap"},[n("div",{staticClass:"vdInner"},[n("div",{staticClass:"vdContent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"vdCBtm clear-both"},[n("h4",[t._v("Highlights from this video:")]),t._v(" "),n("p",[t._v("\n                                             In this video, we’ll cover effective marketing campaigns you can use during the challenges we face during the COVID-19 pandemic. Ideas for pay-per-click, staying connected through social media, increasing your online visibility with SEO strategies, & ways to connect with your local community. Be engaged, not pushy. Take advantage of the time to present special online-only offers that provide something needed to your customers. Now’s the time to invest in your online presence to keep your business growing!\n                                         ")]),t._v(" "),n("p",[t._v("\n                                             Click here & we can talk about increasing your online presence to meet today’s marketing challenges: "),n("strong",[n("nuxt-link",{attrs:{to:"/contact-us"}},[t._v("https://www.dotlogics.com/contact-us")])],1),t._v(" "),n("br"),n("br")]),t._v(" "),n("h4",[t._v("Connect with us on social media:")]),t._v(" "),t._m(2)])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-main-title clear-both"},[e("h1",[this._v("\n                                             COVID-19 Marketing Tips\n                                         ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"videoIframe"},[e("iframe",{attrs:{width:"100%",height:"570",src:"https://www.youtube.com/embed/eimYmqrkVbk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Facebook: "),n("strong",[n("a",{attrs:{href:"https://www.facebook.com/dotlogics",target:"_blank"}},[t._v("https://www.facebook.com/dotlogics")])])]),t._v(" "),n("li",[t._v("Twitter: "),n("strong",[n("a",{attrs:{href:"https://twitter.com/dotlogics",target:"_blank"}},[t._v("https://twitter.com/dotlogics")])])]),t._v(" "),n("li",[t._v("LinkedIn: "),n("strong",[n("a",{attrs:{href:"https://www.linkedin.com/company/dotlogics-inc-/",target:"_blank"}},[t._v("https://www.linkedin.com/company/dotlogics-inc-/")])])]),t._v(" "),n("li",[t._v("Instagram: "),n("strong",[n("a",{attrs:{href:"https://www.instagram.com/dotlogics/",target:"_blank"}},[t._v("https://www.instagram.com/dotlogics/")])])])])}],!1,null,null,null);e.default=component.exports}}]);