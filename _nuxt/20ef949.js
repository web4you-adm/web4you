(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{193:function(t,e,o){"use strict";o(58);var n=o(28),r=o.n(n),c={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,o,n){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=c.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveHomeBlog:function(t,e,o,n){r.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=c.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveCategoryBlog:function(t,e,o,n,l){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+n).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=c.updateClassName(o)),l(e,o,200)})).catch((function(t){return l(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=c.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var o="js"===e?"script":"css"===e?"link":"none",n="js"===e?"src":"css"===e?"href":"none",r=document.getElementsByTagName(o),i=r.length;i>=0;i--)r[i]&&null!=r[i].getAttribute(n)&&-1!==r[i].getAttribute(n).indexOf(t)&&r[i].parentNode.removeChild(r[i])}};e.a=c},216:function(t,e){},233:function(t,e,o){"use strict";o(216)},289:function(t,e,o){"use strict";o.r(e);o(44);var n=o(193),r={data:function(){return{title:"WordPress Content Management | Dotlogics"}},fetch:function(){this.$store.commit("logo/changeLogo","black")},beforeDestroy:function(){n.a.removeJsCssFile("/js/anim/scrollMagicCustom.min.js","js"),console.log("destroy")},created:function(){this.removeMixClrClassFromBody()},methods:{removeMixClrClassFromBody:function(){setTimeout((function(t){document.body.className=document.body.className.replace("mixclr","")}),2e3)}},head:function(){return{title:this.title,meta:[{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null},{hid:"description",name:"description",content:"It’s not enough to have a website. You have to manage it too. Dotlogics offers WordPress management for better SEO and sales results. Get started here."}],bodyAttrs:{class:"sportfolio-details sevce-m2 brand2 wordpressdev noUpperFooter mixclr"},script:[{src:"/js/anim/scrollMagicCustom.min.js",body:!0}],link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}}},c=(o(233),o(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"web-detail-mian"},[o("div",{staticClass:"web-detail-tp"},[o("div",{staticClass:"pd-trigicon"}),t._v(" "),o("div",{staticClass:"wdetails-main"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"faq-main faq-grey"},[o("div",{staticClass:"custum-cont"},[o("div",{staticClass:"custum-continnr"},[t._m(5),t._v(" "),o("div",{staticClass:"faq-accord"},[t._m(6),t._v(" "),o("div",{staticClass:"w-100 text-center"},[o("nuxt-link",{attrs:{to:"contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),o("div",{staticClass:"think-tm-main"},[o("div",{staticClass:"thnklyr"}),t._v(" "),o("div",{staticClass:"custum-cont"},[o("div",{staticClass:"custum-continnr"},[o("div",{staticClass:"row"},[t._m(7),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"think-tm-txt"},[o("p",[t._v("WordPress holds a lot of potential to help your website achieve the results you desire. Don’t miss out on an opportunity by using generic themes and basic WordPress setups. At Dotlogics, we’ll work closely with you to determine your web strategy and put it into action through WordPress.")]),t._v(" "),o("nuxt-link",{attrs:{to:"contact-us"}},[t._v("SPEAK TO A WORDPRESS SPECIALIST")])],1)])]),t._v(" "),t._m(8)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfol-tp"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 pr-0"},[e("div",{staticClass:"pfd-tit"},[e("h1",{staticClass:"text-uppercase"},[e("span",{staticClass:"sub-head"},[this._v("WordPress")])]),this._v(" "),e("h2",{staticClass:"heading-primary hdr-contact furtr-styl text-uppercase"},[e("span",{staticClass:"heading-detail brand"},[e("span",{staticClass:"hd-text"},[this._v("POWERFUL CONTENT MANAGEMENT")])])])])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"wd-tp-txt"},[e("p",[this._v("WordPress is one of the most popular content management systems, but with recent changes to the platform, it can be hard to customize it for your purposes. A poorly managed WordPress site can hurt your SEO and sales. Avoid out-of-the-box templates and themes that hold you back. We’ll help you take full advantage of WordPress’ potential.")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"webd-banner"},[e("div",{staticClass:"webd-trsn"},[e("span",[this._v("wordpress")])]),this._v(" "),e("div",{staticClass:"pd-banner-inner"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/wordpress-bg.jpg",alt:"branding"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grey-bg"},[o("div",{staticClass:"home-why"},[o("div",{staticClass:"why-crcle"}),t._v(" "),o("div",{staticClass:"why-txtlarg"},[t._v("Why us")]),t._v(" "),o("div",{staticClass:"why-green"}),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"why-tit"},[o("h5",{staticClass:"gren-bluetit"},[t._v("how can we help you?")])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx one"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/shopthemW.png",alt:"Custom WordPress Themes"}}),t._v(" "),o("img",{attrs:{src:"/images/shopthemC.png",alt:"Custom WordPress Themes"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("Custom WordPress Themes")]),t._v(" "),o("p",[t._v("Having the same theme as thousands of other sites makes you look unoriginal and potentially less trustworthy. We will provide you with a custom theme to help you build your brand and drive conversions.")])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx pr-0 padleft90 two"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/wpseoW.png",alt:"SEO Optimized"}}),t._v(" "),o("img",{attrs:{src:"/images/wpseoC.png",alt:"SEO Optimized"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("SEO Optimized")]),t._v(" "),o("p",[t._v("In SEO, half the battle is setting your site up correctly. We’ll build and configure your Wordpress site to be SEO-friendly and able to generate traffic.")])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx three"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/woocomW.png",alt:"WooCommerce"}}),t._v(" "),o("img",{attrs:{src:"/images/woocomC.png",alt:"WooCommerce"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("WooCommerce")]),t._v(" "),o("p",[t._v("Need to host an online store on your WordPress site? WooCommerce is a popular option. We’ll help you set up and customize this to maximize your sales.")])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx pr-0 padleft90 four"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"images/shopcontnW.png",alt:"Content Management"}}),t._v(" "),o("img",{attrs:{src:"/images/shopcontnC.png",alt:"Content Management"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("Content Management")]),t._v(" "),o("p",[t._v("WordPress is for more than blogging. It’s a robust content management system that permits you to build everything from a database to a multi-user publishing platform.")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",[this._v("Scary Fact:")]),this._v(" "),e("p",[this._v("76 percent of all WordPress-based sites have fewer than 1,000 monthly visitors. ")])])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/wordscarya.png",alt:"Scary Fact"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main nrbrand2"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 norml-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/wordhappy.png",alt:"Wordpress website development"}})])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",{staticClass:"hpy-fact"},[this._v("Happy Fact:")]),this._v(" "),e("p",[this._v("WordPress-based sites, built correctly, tend to rank higher in search engines because its CMS software facilitates Google’s crawlers.")])])]),this._v(" "),e("div",{staticClass:"col-md-6 nresp-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/wordhappy.png",alt:"Wordpress website development"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq-tit custum-title"},[e("div",{staticClass:"faq-crcl"}),this._v(" "),e("h5",[e("span",{staticClass:"lststsp1"},[this._v("FREQUENTLY ASKED")]),this._v(" "),e("span",{staticClass:"lststsp2"},[this._v("QUESTIONS")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"accordion"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                                        What’s so great about WordPress?\n                                        ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                        WordPress is a powerful tool for both developers and content managers. Even better, it’s free, which reduces your website costs. Our expert developers can build virtually any sort of site with WordPress.\n                                    ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[t._v("\n                                    I set up my site in WordPress but I’m not happy with it. Can you fix it?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Absolutely! Many people start out in WordPress, then discover that out-of-the-box templates and plugins aren’t working for them. We’ll customize WordPress to your specific needs.\n                                ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v("\n                                    Can you help me with WordPress maintenance?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Yes, when we enter into a partnership with you, we can discuss options for performing the necessary, ongoing updates to your custom WordPress site.\n                                ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingfour"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapsefour","aria-expanded":"false","aria-controls":"collapsefour"}},[t._v("\n                                    Do you build custom WordPress themes?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapsefour","aria-labelledby":"headingfour","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Definitely. We can build a theme from scratch that affirms your brand and drives conversions. We’ll ensure that your custom theme suits your unique content + design approach.\n                                ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"think-tm-tit"},[e("div",{staticClass:"black-circle"}),this._v(" "),e("h3",{staticClass:"hdr-contact heading-primary text-uppercase"},[e("span",{staticClass:"heading-detail redes-txt"},[e("span",{staticClass:"hd-text"},[this._v("READY FOR A CUSTOM WEBSITE?")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sushi-img"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/shopfycross.png",alt:"CUSTOM WORDPRESS WEBSITE"}})])}],!1,null,null,null);e.default=component.exports}}]);