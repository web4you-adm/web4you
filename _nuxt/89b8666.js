(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{193:function(t,e,n){"use strict";n(58);var o=n(28),r=n.n(o),c={resolveClassName:function(t){var e="";return 2===t&&(e="gra-green"),3===t&&(e="gra-skyblue"),4===t&&(e="gra-pink"),e},resolveBlog:function(t,e,n,o){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveHomeBlog:function(t,e,n,o){r.a.get("https://admin.dotlogics.com/api/blog/get?page=1&perPage="+t).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),o(e,n,200)})).catch((function(t){return o(t,[],400)}))},resolveCategoryBlog:function(t,e,n,o,l){r.a.get("https://admin.dotlogics.com/api/blog/get?page="+t+"&category="+o).then((function(t){(e=t.data.blogs).data.length&&(n=n.length?n.concat(e.data):e.data,n=c.updateClassName(n)),l(e,n,200)})).catch((function(t){return l(t,[],400)}))},updateClassName:function(t){for(var e=0,i=0;i<t.length;++i)++e,t[i].className=c.resolveClassName(e),4===e&&(e=0);return t},getLastUrlSegment:function(path){return path.substring(path.lastIndexOf("/")+1)},getFirstUrlSegment:function(path){return path.indexOf(1),path.toLowerCase(),path=path.split("/")[1]},resolveNotFound:function(data,t){data&&data.length?t(!1):t(!0)},isValidHttpUrl:function(t){var e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol},removeJsCssFile:function(t,e){for(var n="js"===e?"script":"css"===e?"link":"none",o="js"===e?"src":"css"===e?"href":"none",r=document.getElementsByTagName(n),i=r.length;i>=0;i--)r[i]&&null!=r[i].getAttribute(o)&&-1!==r[i].getAttribute(o).indexOf(t)&&r[i].parentNode.removeChild(r[i])}};e.a=c},209:function(t,e){},226:function(t,e,n){"use strict";n(209)},322:function(t,e,n){"use strict";n.r(e);n(44);var o=n(193),r={data:function(){return{title:"Dotlogics SEO Experts | Search Engine Optimizaton NY"}},fetch:function(){this.$store.commit("logo/changeLogo","black")},beforeDestroy:function(){o.a.removeJsCssFile("/js/anim/scrollMagicCustom.min.js","js"),console.log("destroy")},created:function(){this.removeMixClrClassFromBody()},methods:{removeMixClrClassFromBody:function(){setTimeout((function(t){document.body.className=document.body.className.replace("mixclr","")}),2e3)}},head:function(){return{title:this.title,meta:[{hid:"og:title",name:"og:title",content:null},{hid:"og:description",name:"og:description",content:null},{hid:"description",name:"description",content:"Dotlogics is the best Search Engine Optimization company with the experience and proven expertise to get your website to the #1 spot on search results"}],bodyAttrs:{class:"sportfolio-details sevce-m2 brand2 seo-serc noUpperFooter mixclr newseo"},script:[{src:"/js/anim/scrollMagicCustom.min.js",body:!0}],link:[{rel:"canonical",href:"".concat("https://www.dotlogics.com").concat(this.$route.path)}]}}},c=(n(226),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"web-detail-mian"},[n("div",{staticClass:"web-detail-tp"},[n("div",{staticClass:"pd-trigicon"}),t._v(" "),n("div",{staticClass:"wdetails-main"},[n("div",{staticClass:"portfol-tp"},[n("div",{staticClass:"custum-cont"},[n("div",{staticClass:"custum-continnr"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),n("nuxt-link",{staticClass:"hlp-btn",attrs:{to:"contact-us"}},[t._v("Help Me with SEO")])],1)])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"faq-main faq-grey"},[n("div",{staticClass:"custum-cont"},[n("div",{staticClass:"custum-continnr"},[t._m(8),t._v(" "),n("div",{staticClass:"faq-accord"},[t._m(9),t._v(" "),n("div",{staticClass:"w-100 text-center"},[n("nuxt-link",{staticClass:"fil-green-btn",attrs:{to:"contact-us"}},[t._v("Contact us")])],1)])])])]),t._v(" "),n("div",{staticClass:"think-tm-main"},[n("div",{staticClass:"thnklyr"}),t._v(" "),n("div",{staticClass:"custum-cont"},[n("div",{staticClass:"custum-continnr"},[n("div",{staticClass:"row"},[t._m(10),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"think-tm-txt"},[n("p",[t._v("Search engine optimization is essential to helping your site not only be found, but also achieve results. Because SEO is complicated and requires a balance of content, design, coding, and external factors, you need an expert hand to help you meet your search traffic goals.")]),t._v(" "),n("nuxt-link",{attrs:{to:"contact-us"}},[t._v("SPEAK TO AN SEO SPECIALIST")])],1)])]),t._v(" "),t._m(11)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 pr-0"},[e("div",{staticClass:"pfd-tit"},[e("h1",{staticClass:"text-uppercase"},[e("span",{staticClass:"sub-head"},[this._v("Seo")])]),this._v(" "),e("h2",{staticClass:"heading-primary hdr-contact furtr-styl text-uppercase"},[e("span",{staticClass:"heading-detail brand"},[e("span",{staticClass:"hd-text"},[this._v("RANK HIGHER AND REACH YOUR AUDIENCE")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wd-tp-txt"},[e("p",[this._v("There are thousands of SEO “experts.” Most give you zero accountability. If you want that top spot on search engine result pages, search engine optimization (SEO) is a must-have for your business. Is your SEO strategy up to speed?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"webd-banner"},[e("div",{staticClass:"webd-trsn"},[e("span",[this._v("seo")])]),this._v(" "),e("div",{staticClass:"pd-banner-inner"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/new-seo.jpg",alt:"SEO"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grey-bg"},[n("div",{staticClass:"home-why"},[n("div",{staticClass:"why-crcle"}),t._v(" "),n("div",{staticClass:"why-txtlarg"},[t._v("Why us")]),t._v(" "),n("div",{staticClass:"why-green"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"why-tit"},[n("h5",{staticClass:"gren-bluetit"},[t._v("how can we help you?")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"whychos-bx one"},[n("div",{staticClass:"bgHover-cir"}),t._v(" "),n("div",{staticClass:"whychos-icon"},[n("img",{attrs:{src:"/images/seoauditW.png",alt:"SEO Audit"}}),t._v(" "),n("img",{attrs:{src:"/images/seoauditC.png",alt:"SEO Audit"}})]),t._v(" "),n("div",{staticClass:"whychos-txt"},[n("h6",[t._v("SEO Audit")]),t._v(" "),n("p",[t._v("We’ll review your existing marketing strategy and evaluate how your current efforts are impacting your results. Then, we’ll begin creating a plan of action to help you redefine and reach your goals.")])])])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"whychos-bx pr-0 padleft90 two"},[n("div",{staticClass:"bgHover-cir"}),t._v(" "),n("div",{staticClass:"whychos-icon"},[n("img",{attrs:{src:"/images/keywordW.png",alt:"Keyword Research"}}),t._v(" "),n("img",{attrs:{src:"/images/keywordC.png",alt:"Keyword Research"}})]),t._v(" "),n("div",{staticClass:"whychos-txt"},[n("h6",[t._v("Keyword Research")]),t._v(" "),n("p",[t._v("One of the top SEO problems facing most businesses is that they’re not ranking for the right keywords. We’ll help you identify the keywords that present the best opportunities for targeting.")])])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"whychos-bx three"},[n("div",{staticClass:"bgHover-cir"}),t._v(" "),n("div",{staticClass:"whychos-icon"},[n("img",{attrs:{src:"/images/onpageW.png",alt:"On-Page SEO"}}),t._v(" "),n("img",{attrs:{src:"/images/onpageC.png",alt:"On-Page SEO"}})]),t._v(" "),n("div",{staticClass:"whychos-txt"},[n("h6",[t._v("On-Page SEO")]),t._v(" "),n("p",[t._v("o perform their best, your pages need to be optimized for speed, content, and search engine results pages. Whether we’re building the site or helping you refine it, we’ll leverage our expertise to help you improve your on-page SEO.")])])])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"whychos-bx pr-0 padleft90 four"},[n("div",{staticClass:"bgHover-cir"}),t._v(" "),n("div",{staticClass:"whychos-icon"},[n("img",{attrs:{src:"images/linksW.png",alt:"Link Building"}}),t._v(" "),n("img",{attrs:{src:"/images/linksC.png",alt:"Link Building"}})]),t._v(" "),n("div",{staticClass:"whychos-txt"},[n("h6",[t._v("Link Building")]),t._v(" "),n("p",[t._v("Off-page SEO refers to everything else on the web that links to your site, thereby boosting your page ranking. We’ll help you develop a strategy to achieve backlinks and promote your brand on other channels.")])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-excuse-mian"},[n("div",{staticClass:"custum-cont"},[n("div",{staticClass:"custum-continnr"},[n("div",{staticClass:"excuse-wrap"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"excuse-tit text-center"},[n("h3",{staticClass:"hdr-contact heading-primary text-uppercase"},[n("span",{staticClass:"heading-detail redes-txt"},[n("span",{staticClass:"hd-text"},[t._v("NO EXCUSES, JUST RESULTS")])])]),t._v(" "),n("h4",[t._v("An SEO Process That Generates Qualified Traffic and New Business")])]),t._v(" "),n("div",{staticClass:"excuse-txt"},[n("p",[n("span",[t._v("1. Initial SEO Site Audit:")]),t._v(" We partner you with a dedicated SEO specialist who performs an in-depth analysis of your business and market. We thoroughly review and analyze your current site to assess your site’s technical architecture (page load times, responsive design, encryption), and uncover penalties, errors, and potential issues. This information is used to make our initial recommendations and establish an SEO strategy. If we come across any penalties that are hurting your rankings, we’ll work diligently to remove them and get your website out of penalty.\n                                        ")]),t._v(" "),n("p",[n("span",[t._v("2. SEO Strategy Research:")]),t._v(" Developing your SEO strategy is based on the user activity and analytics we gather from tools like Google Analytics, Hotjar and SemRush. This allows us to compile a list of keyword targets that will bring active, qualified buyers to your site.\n                                        ")]),t._v(" "),n("p",[n("span",[t._v("3. Content Development:")]),t._v(" Our SEO team and content marketing writers will create highly targeted SEO content offers based on your target personas' data. Strategic updates are made to your website to drive the traffic you want — and generate news sales and leads. New website content includes videos, articles, onsite and offsite link development, and regular reports and findings. We’ll also optimize your metadata to play well with search engines.\n                                        ")]),t._v(" "),n("p",[n("span",[t._v("4. Backlink Building:")]),t._v(" Getting links from quality websites is one of the best ways to enhance your SEO. We leverage our deep industry connections to generate backlinks that increase the authority of your domain.\n                                        ")]),t._v(" "),n("p",[n("span",[t._v("5. Monthly Reporting:")]),t._v(" Some SEO agencies will take your cash and leave the analytics to you. We’re not one of those companies — our detailed reports will be prepared and reviewed for you every month. We perform a detailed analysis of our performance to make ongoing adjustments to website content, coding, and other elements in order to drive continuous improvement.\n                                        ")])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-excuse-pdf"},[n("div",{staticClass:"custum-cont"},[n("div",{staticClass:"custum-continnr"},[n("div",{staticClass:"excus-pdf-rgt nshwm"},[n("img",{staticClass:"img-fluid",attrs:{src:"images/increase-your-seo-traffic-in-just-30-days.png",alt:"Increase Your SEO Traffic"}})]),t._v(" "),n("div",{staticClass:"excus-pdf-lft"},[n("div",{staticClass:"faq-tit custum-title"},[n("h5",[n("span",{staticClass:"lststsp1"},[t._v("Increase Your SEO Traffic")]),t._v(" "),n("span",{staticClass:"lststsp2"},[t._v("With Our SEO Planner")])])]),t._v(" "),n("div",{staticClass:"excus-pdf-txt"},[n("p",[t._v("How To Increase Your SEO Traffic In Just 30 Days")]),t._v(" "),n("p",[t._v("Optimizing your website for search engines can be confusing. We've curated 30 SEO tips to improve your site — one tip for each day of the month to ease into your SEO strategy.")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("Download this 30 day planner to learn SEO best practices for your industrial website, like shortening URLs, identifying keywords, and monitoring your progress.")]),t._v(" "),n("a",{attrs:{href:"https://thegrowthhub.dotlogics.com/4377347",target:"_blank"}},[t._v("Download")])])]),t._v(" "),n("div",{staticClass:"excus-pdf-rgt nhidm"},[n("img",{staticClass:"img-fluid",attrs:{src:"images/increase-your-seo-traffic-in-just-30-days.png",alt:"Increase Your SEO Traffic"}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",[this._v("Scary Fact:")]),this._v(" "),e("p",[this._v("75 percent of users don’t go past the first page of search engine results. ")])])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/seoscary.png",alt:"Scary Fact"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nw-brands-main nrbrand2"},[e("div",{staticClass:"custum-cont"},[e("div",{staticClass:"custum-continnr"},[e("div",{staticClass:"clearfix"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 norml-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/seohappy.png",alt:"SEO"}})])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"nw-brandng-tit"},[e("div",{staticClass:"nwcrcl"}),this._v(" "),e("h4",{staticClass:"hpy-fact"},[this._v("Happy Fact:")]),this._v(" "),e("p",[this._v("93 percent of online experiences start with a web search.")])])]),this._v(" "),e("div",{staticClass:"col-md-6 nresp-shw"},[e("div",{staticClass:"nwbrandimg"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/seohappy.png",alt:"SEO"}})])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq-tit custum-title"},[e("div",{staticClass:"faq-crcl"}),this._v(" "),e("h5",[e("span",{staticClass:"lststsp1"},[this._v("FREQUENTLY ASKED")]),this._v(" "),e("span",{staticClass:"lststsp2"},[this._v("QUESTIONS")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"accordion"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                                        What types of SEO activities do you provide?\n                                        ")])])]),t._v(" "),n("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[t._v("\n                                        We provide assistance with on-page SEO, including meta descriptions, keyword analysis, backlink creation, and off-page SEO, such as link building strategies.\n                                    ")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[t._v("\n                                     How do my website’s content and design support SEO?\n                                    ")])])]),t._v(" "),n("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[t._v("\n                                Content must be written and formatted in such a way that web crawlers can parse it and convert it into search engine results. Good design entails quick-loading code and a clear page layout that helps your page perform better. This, in turn, further boosts your ranking.\n                                ")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v("\n                                    Can you help me rank higher on Google?\n                                    ")])])]),t._v(" "),n("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[t._v("\n                                While there are no guarantees of achieving a certain ranking, the investment you make in optimizing your content is never a waste of time. Good SEO will help your website be discovered. At Dotlogics, we can help.\n                                ")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingfour"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapsefour","aria-expanded":"false","aria-controls":"collapsefour"}},[t._v("\n                                    How can I build backlinks to my site?\n                                    ")])])]),t._v(" "),n("div",{staticClass:"collapse",attrs:{id:"collapsefour","aria-labelledby":"headingfour","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[t._v("\n                                You cannot wait for other people to decide to link to your site. The best strategy is to actively pursue backlinks by guest-posting on other sites and sharing your links in various digital channels. At Dotlogics, we can help you figure out a plan of action.\n                                ")])])]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header",attrs:{id:"headingfive"}},[n("h5",{staticClass:"mb-0"},[n("button",{staticClass:"btn btn-link collapsed",attrs:{"data-toggle":"collapse","data-target":"#collapsefive","aria-expanded":"false","aria-controls":"collapsefive"}},[t._v("\n                                    How does SEO boost my conversions?\n                                    ")])])]),t._v(" "),n("div",{staticClass:"collapse",attrs:{id:"collapsefive","aria-labelledby":"headingfive","data-parent":"#accordion"}},[n("div",{staticClass:"card-body"},[t._v("\n                                By ranking for keywords that are relevant to your target audience, you’ll have more qualified leads come to your site. That means that they are more likely to take action.\n                                ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"think-tm-tit"},[e("div",{staticClass:"black-circle"}),this._v(" "),e("h3",{staticClass:"hdr-contact heading-primary text-uppercase"},[e("span",{staticClass:"heading-detail redes-txt"},[e("span",{staticClass:"hd-text"},[this._v("READY TO OPTIMIZE YOUR SITE?")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sushi-img"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/seo-cross.png",alt:"OPTIMIZE YOUR SITE"}})])}],!1,null,null,null);e.default=component.exports}}]);