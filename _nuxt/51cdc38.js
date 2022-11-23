(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{193:function(t,e,n){"use strict";n(58);var o=n(28),l=n.n(o),c={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,n,o){l.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveHomeBlog:function(t,e,n,o){l.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveCategoryBlog:function(t,e,n,o,r){l.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+o).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),r(e,n,200)})).catch((function(t){return r(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=c.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var n="js"===e?"script":"css"===e?"link":"none",o="js"===e?"src":"css"===e?"href":"none",l=document.getElementsByTagName(n),i=l.length;i>=0;i--)l[i]&&null!=l[i].getAttribute(o)&&-1!==l[i].getAttribute(o).indexOf(t)&&l[i].parentNode.removeChild(l[i])}};e.a=c},338:function(t,e,n){"use strict";n.r(e);var o=n(193),l={data:function(){return{title:"Web Design Portfolio: Editfeast | Dotlogics"}},fetch:function(){this.$store.commit("logo/changeLogo","white")},beforeDestroy:function(){o.a.removeJsCssFile("/js/anim/scrollMagicCustom.min.js","js"),console.log("destroy")},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"We created a visual feast for Editfeast's audience of foodies and world travelers - it's rich and full of tech savvy. Click to see our website design portfolio."},{hid:"keywords",name:"keywords",content:"Website Design Portfolio, Web Design Portfolio"},{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null}],bodyAttrs:{class:"sportfolio-details purple-theme clored-clr"},script:[{src:"/js/anim/scrollMagicCustom.min.js",body:!0}],link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}}},c=n(6),component=Object(c.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"web-detail-mian"},[n("div",{staticClass:"web-detail-tp"},[n("div",{staticClass:"pd-trigicon"}),t._v(" "),n("div",{staticClass:"bb-portflo-main"},[n("div",{staticClass:"bb-portflo-bannr"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"bb-logo text-center"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"img-fluid",attrs:{src:"/images/ef-logo.png",alt:"Edit feast"}})])]),t._v(" "),n("div",{staticClass:"bb-bnnr-txt"},[n("h1",[t._v("This is how we designed the evocative and beautiful website Edit Feast was hungry for.")])])])])])]),t._v(" "),n("div",{staticClass:"bb-lower-main"},[n("div",{staticClass:"bb-lower-maininnr"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"bbm-wrap"},[n("div",{staticClass:"bbm-wrap-innr"},[n("div",{staticClass:"tb-mbcrcl"},[n("div",{staticClass:"tb-mbcrcl2"},[n("div",{staticClass:"tb-mbcrcl3"},[n("div",{staticClass:"tb-mbcrcl4"})])])]),t._v(" "),n("img",{staticClass:"img-fluid",attrs:{src:"/images/ef-main.png",alt:"Edit feast Preview"}})])])])])])]),t._v(" "),n("div",{staticClass:"bbaftr-txt"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"bbm-wrap-txt text-center"},[n("div",{staticClass:"bbcrcle"}),t._v(" "),n("p",[t._v("Starting from scratch, Dotlogics built out a brand new website. Edit Feast wanted a site that was content heavy with informative guides, recipes, journals, and a catalog of photos. So we took a design approach that was artistic and tech savvy. The result? A website rich with ideas and imagery made for globetrotting gourmands who love travel as much as they love food.")])])])])])]),t._v(" "),n("div",{staticClass:"bb-boxes"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"bb-bxs-mian"},[n("div",{staticClass:"bb-whtbxs"},[n("div",{staticClass:"bb-icn"},[n("table",[n("tr",[n("td",[n("img",{attrs:{src:"/images/purple-icon1.png",alt:"Design"}})])])])]),t._v(" "),n("div",{staticClass:"bb-whtbxs-txt text-center"},[n("h4",{staticClass:"colr-txt"},[t._v("Design")]),t._v(" "),n("p",[t._v("With foodies and world travelers in mind, we focused on high-end graphics and language to whet the appetite and appeal to the senses.")])])]),t._v(" "),n("div",{staticClass:"bb-whtbxs"},[n("div",{staticClass:"bb-icn"},[n("table",[n("tr",[n("td",[n("img",{attrs:{src:"/images/purple-icon2.png",alt:"Content Strategy"}})])])])]),t._v(" "),n("div",{staticClass:"bb-whtbxs-txt text-center"},[n("h4",{staticClass:"colr-txt"},[t._v("Content Strategy")]),t._v(" "),n("p",[t._v("Edit Feast isn’t bite sized. It’s a full meal that’s bursting with content. We wanted this site to be full of flavor so we developed a smart content strategy that could do just that.")])])]),t._v(" "),n("div",{staticClass:"bb-whtbxs mr-0"},[n("div",{staticClass:"bb-icn"},[n("table",[n("tr",[n("td",[n("img",{attrs:{src:"/images/purple-icon3.png",alt:"Content Management"}})])])])]),t._v(" "),n("div",{staticClass:"bb-whtbxs-txt text-center"},[n("h4",{staticClass:"colr-txt"},[t._v("Content Management")]),t._v(" "),n("p",[t._v("Content heavy websites must be dynamic and capable of quick uploads. So we built a seamless browsing experience by designing a robust content platform that could handle loads of blog posts.")])])])])])])]),t._v(" "),n("div",{staticClass:"bb-pices"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"picesimg"},[n("img",{staticClass:"img-fluid",attrs:{src:"/images/pices-img2.png",alt:"Edit feast All Views"}})])])])]),t._v(" "),n("div",{staticClass:"bb-mobileimg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"bb-lastsec"},[n("img",{staticClass:"img-fluid",attrs:{src:"/images/ef-mobileimg.png",alt:"Edit feast Mobile View"}})])])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);