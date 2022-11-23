(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{193:function(t,e,o){"use strict";o(58);var n=o(28),c=o.n(n),r={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,o,n){c.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=r.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveHomeBlog:function(t,e,o,n){c.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=r.updateClassName(o)),n(e,o,200)})).catch((function(t){return n(t,[],400)}))},resolveCategoryBlog:function(t,e,o,n,l){c.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+n).then((function(t){(e=t.data.blogs).data.length&&(o=o.length?o.concat(e.data):e.data,o=r.updateClassName(o)),l(e,o,200)})).catch((function(t){return l(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=r.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var o="js"===e?"script":"css"===e?"link":"none",n="js"===e?"src":"css"===e?"href":"none",c=document.getElementsByTagName(o),i=c.length;i>=0;i--)c[i]&&null!=c[i].getAttribute(n)&&-1!==c[i].getAttribute(n).indexOf(t)&&c[i].parentNode.removeChild(c[i])}};e.a=r},202:function(t,e){},219:function(t,e,o){"use strict";o(202)},290:function(t,e,o){"use strict";o.r(e);o(44);var n=o(193),c={data:function(){return{title:"E-Commerce Design Services in New York | Dotlogics"}},fetch:function(){this.$store.commit("logo/changeLogo","black")},beforeDestroy:function(){n.a.removeJsCssFile("/js/anim/scrollMagicCustom.min.js","js"),console.log("destroy")},created:function(){this.removeMixClrClassFromBody()},methods:{removeMixClrClassFromBody:function(){setTimeout((function(t){document.body.className=document.body.className.replace("mixclr","")}),2e3)}},head:function(){return{title:this.title,meta:[{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null},{hid:"description",name:"description",content:"Often, the design of e-commerce websites is what drives customers to check out. Get in touch with Dotlogics to design an e-commerce website that drives sales."}],bodyAttrs:{class:"sportfolio-details sevce-m2 brand2 ecommerce-design noUpperFooter mixclr"},script:[{src:"/js/anim/scrollMagicCustom.min.js",body:!0}],link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}}},r=(o(219),o(6)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"web-detail-mian"},[o("div",{staticClass:"web-detail-tp"},[o("div",{staticClass:"pd-trigicon"}),t._v(" "),o("div",{staticClass:"wdetails-main"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"faq-main faq-grey"},[o("div",{staticClass:"custum-cont"},[o("div",{staticClass:"custum-continnr"},[t._m(5),t._v(" "),o("div",{staticClass:"faq-accord"},[t._m(6),t._v(" "),o("div",{staticClass:"w-100 text-center"},[o("nuxt-link",{attrs:{to:"contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),o("div",{staticClass:"think-tm-main"},[o("div",{staticClass:"thnklyr"}),t._v(" "),o("div",{staticClass:"custum-cont"},[o("div",{staticClass:"custum-continnr"},[o("div",{staticClass:"row"},[t._m(7),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"think-tm-txt"},[o("p",[t._v("Your eCommerce site will perform better with a design that’s geared toward helping customers easily find information and make purchases. Let’s get started with making your powerful online store.")]),t._v(" "),o("nuxt-link",{attrs:{to:"contact-us"}},[t._v("SPEAK TO AN ECOMMERCE SPECIALIST")])],1)])]),t._v(" "),t._m(8)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfol-tp"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 pr-0"},[e("div",{staticClass:"pfd-tit"},[e("h1",{staticClass:"text-uppercase"},[e("span",{staticClass:"sub-head"},[this._v("ECOMMERCE DESIGN")])]),this._v(" "),e("h2",{staticClass:"heading-primary hdr-contact furtr-styl text-uppercase"},[e("span",{staticClass:"heading-detail brand"},[e("span",{staticClass:"hd-text"},[this._v("GET THE GROWTH AND SALES YOU WANT")])])])])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"wd-tp-txt"},[e("p",[this._v("Are your customers abandoning their cart? Is your inventory gathering dust? There are many e-commerce sites on the market. A poorly designed store won’t stand out from the crowd and could hurt your company’s reputation. A sleek, powerful online store helps you make sales.")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"webd-banner"},[e("div",{staticClass:"webd-trsn"},[e("span",[this._v("eCommerce ")])]),this._v(" "),e("div",{staticClass:"pd-banner-inner"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ecom-bg.jpg",alt:"branding"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grey-bg"},[o("div",{staticClass:"home-why"},[o("div",{staticClass:"why-crcle"}),t._v(" "),o("div",{staticClass:"why-txtlarg"},[t._v("Why us")]),t._v(" "),o("div",{staticClass:"why-green"}),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"why-tit"},[o("h5",{staticClass:"gren-bluetit"},[t._v("how can we help you?")])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx one"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/whyicon3.png",alt:"Growth Plan"}}),t._v(" "),o("img",{attrs:{src:"/images/whyicon3-hover.png",alt:"Growth Plan"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("Growth Plan")]),t._v(" "),o("p",[t._v("The first step to any eCommerce redesign is to evaluate your current results and make a plan of action to grow your sales. We’ll leverage our marketing and web expertise to help you develop this roadmap.")])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx pr-0 padleft90 two"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/actionW.png",alt:"Brand in Action"}}),t._v(" "),o("img",{attrs:{src:"/images/actionC.png",alt:"Brand in Action"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("Brand in Action")]),t._v(" "),o("p",[t._v("Having your brand define your site builds trust among your visitors with a consistent look, feel, and tone. Boost your brand’s authority with eCommerce design by Dotlogics.")])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx three"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/prodW.png",alt:"High-Converting Product"}}),t._v(" "),o("img",{attrs:{src:"/images/prodC.png",alt:"High-Converting Product"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("High-Converting Product Pages")]),t._v(" "),o("p",[t._v("Your product pages are your hardest-working sales reps. Don’t let them be weak and ineffective. We’ll combine content and design to get your visitors excited and ready to buy.")])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx pr-0 padleft90 four"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"images/funelW.png",alt:"Compelling Funnel Design"}}),t._v(" "),o("img",{attrs:{src:"/images/funelC.png",alt:"Compelling Funnel Design"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("Compelling Funnel Design")]),t._v(" "),o("p",[t._v("Good eCommerce sites lead visitors down the sales funnel with conversion-focused content and design. At Dotlogics, we specialize in funnel development that drives results.")])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"whychos-bx one"},[o("div",{staticClass:"bgHover-cir"}),t._v(" "),o("div",{staticClass:"whychos-icon"},[o("img",{attrs:{src:"/images/checkW.png",alt:"User-Friendly Checkout"}}),t._v(" "),o("img",{attrs:{src:"/images/checkC.png",alt:"User-Friendly Checkout"}})]),t._v(" "),o("div",{staticClass:"whychos-txt"},[o("h6",[t._v("User-Friendly Checkout")]),t._v(" "),o("p",[t._v("The number-one cause of abandoned carts is a cumbersome checkout process. We’ll help you streamline your checkout pages to ensure that your customers complete their purchases.")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",[this._v("Scary Fact:")]),this._v(" "),e("p",[this._v("You have less than 10 seconds to convince a visitor to stay on your site.")])])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ecomscary.png",alt:"Scary Fact"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main nrbrand2"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 norml-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ecomhappy.png",alt:"Happy Fact"}})])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",{staticClass:"hpy-fact"},[this._v("Happy Fact:")]),this._v(" "),e("p",[this._v("Authentic content with a good design helps boost consumers’ confidence, which leads to up to 2x more sales.")])])]),this._v(" "),e("div",{staticClass:"col-md-6 nresp-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ecomhappy.png",alt:"Happy Fact"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq-tit custum-title"},[e("div",{staticClass:"faq-crcl"}),this._v(" "),e("h5",[e("span",{staticClass:"lststsp1"},[this._v("FREQUENTLY ASKED")]),this._v(" "),e("span",{staticClass:"lststsp2"},[this._v("QUESTIONS")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"accordion"}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                                        What types of eCommerce sites do you design?\n                                        ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                        We create all sorts of eCommerce sites, from massive online retailers to SaaS providers! As long as you need help boosting your sales, Dotlogics is here for you.\n                                    ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[t._v("\n                                    How does design impact my site’s sales?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Research shows that consumers are suspicious of sites that look unprofessional or inconsistent. They don’t want to enter their payment information if they’re uncertain. Good design that leverages your brand identity helps boost consumer confidence — and therefore sales.\n                                ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v("\n                                    How do you incorporate my brand into the design?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                We’ll use your brand’s look and feel, logo, tagline, and other key elements in the design, but that’s just the start of it. We also use your brand’s core values and offering to shape your eCommerce strategy and optimize your conversions.\n                                ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingfour"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapsefour","aria-expanded":"false","aria-controls":"collapsefour"}},[t._v("\n                                    Will the e-commerce site be mobile-friendly?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapsefour","aria-labelledby":"headingfour","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Yes, we specialize in mobile-friendly design! More than half of consumers are on their mobile device, so we ensure that your eCommerce site looks good no matter how your customers visit it.\n                                ")])])]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header",attrs:{id:"headingfive"}},[o("h5",{staticClass:"mb-0"},[o("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapsefive","aria-expanded":"false","aria-controls":"collapsefive"}},[t._v("\n                                    Will you also set up the store?\n                                    ")])])]),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapsefive","aria-labelledby":"headingfive","data-parent":"#accordion"}},[o("div",{staticClass:"card-body"},[t._v("\n                                Absolutely. We’re here to help with all your web development needs, and we’ll make sure that your eCommerce site is set up properly to maximize your sales.\n                                ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"think-tm-tit"},[e("div",{staticClass:"black-circle"}),this._v(" "),e("h3",{staticClass:"hdr-contact heading-primary text-uppercase"},[e("span",{staticClass:"heading-detail redes-txt"},[e("span",{staticClass:"hd-text"},[this._v("READY TO MAKE MORE SALES?")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sushi-img"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ecomcross.png",alt:"MAKE MORE SALES"}})])}],!1,null,null,null);e.default=component.exports}}]);