(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n("q1tI")),i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery;return n||s&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(s.default.useContext(i.AmpStateContext))}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,s=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var s=r.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(s.Component);t.default=o},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n("q1tI")),i=r(n("Xuae")),o=n("lwAK"),a=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var i=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var a=0,l=f.length;a<l;a++){var c=f[a];if(s.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=s.props[c],h=r[c]||new Set;h.has(u)?i=!1:(h.add(u),r[c]=h)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}var p=i.default();function d(e){var t=e.children;return s.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return s.default.createElement(p,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}d.rewind=p.rewind,t.default=d},"8oxB":function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],u=!1,f=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):f=-1,c.length&&p())}function p(){if(!u){var e=a(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||u||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n("q1tI"));t.HeadManagerContext=s.createContext(null)},"I/O0":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("MX0m"),s=n.n(r),i=n("q1tI"),o=n.n(i),a=n("YFqc"),l=n.n(a),c=n("8Kt/"),u=n.n(c),f=o.a.createElement,h={marginRight:15,textDecoration:"none",color:"purple"},p={textDecoration:"none",color:"purple",marginRight:"8%",marginLeft:"8%"},d={marginRight:15,textDecoration:"none",color:"purple"};var m=function(){return f("div",{className:"jsx-1532211748"},f(s.a,{id:"1532211748"},["@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}","*.jsx-1532211748{font-family:'Bai Jamjuree',sans-serif;}","header.jsx-1532211748{width:100%;background-color:#38e4dd;padding:1vh 0 1vh 0;height:3em;position:fixed;overflow:hidden;top:0;}",".name.jsx-1532211748{position:fixed;text-align:center;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:2em;top:0.5em;}",".mobileLinks.jsx-1532211748{display:none;}",".desktopLinks.jsx-1532211748{position:relative;width:100%;background-color:#38e4dd;top:1em;padding-left:1em;}","@media only screen and (max-width:768px){.mobileLinks.jsx-1532211748{background-color:#38e4dd;width:100%;display:inline;padding-bottom:5px;font-size:1.25em;position:fixed;top:3em;}.desktopLinks.jsx-1532211748{display:none;}.name.jsx-1532211748{font-size:1.5em;top:0.75em;}header.jsx-1532211748{height:5em;}}"]),f(u.a,null,f("title",{className:"jsx-1532211748"},"Naina Raisinghani"),f("script",{async:!0,key:"amp-fx-collection","custom-element":"amp-fx-collection",src:"https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js",className:"jsx-1532211748"})),f("header",{"amp-fx":"float-in-top",className:"jsx-1532211748"},f("div",{className:"jsx-1532211748 desktopLinks"},[{link:"/posts",title:"Posts"},{link:"/work",title:"Profesh"},{link:"/talks",title:"Talks"}].map((function(e){return f(l.a,{href:e.link},f("a",{style:d,className:"jsx-1532211748"},e.title))}))),f(l.a,{href:"/"},f("a",{style:h,className:"jsx-1532211748 name"},"Naina's Blog ")),f("div",{className:"jsx-1532211748 mobileLinks"},[{link:"/posts",title:"Posts"},{link:"/work",title:"Profesh"},{link:"/talks",title:"Talks"}].map((function(e){return f(l.a,{href:e.link},f("a",{style:p,className:"jsx-1532211748"},e.title))})))))},v=o.a.createElement,y={enableBackground:"new 0 0 493.497 493.497",display:"inline-block",width:"1.5em",height:"1.5em"},g={display:"inline-block",width:"1.5em",height:"1.5em",padding:"0px 0px 0px 5px"},_={fill:"#000000"},x=function(){return v("div",null,v(u.a,null,v("script",{async:!0,key:"amp-fx-collection","custom-element":"amp-fx-collection",src:"https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"})),v("footer",{role:"contentinfo","amp-fx":"float-in-bottom",className:"jsx-3557293794"},v(s.a,{id:"3557293794"},["@font-face{font-family:'Bai Jamjuree';font-style:sans-serif;src:url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');}","footer.jsx-3557293794{font-family:'Bai Jamjuree',sans-serif;position:fixed;overflow:hidden;height:3em;left:0;bottom:0;width:100%;background-color:#b691ea;opacity:1;text-align:center;padding:1vh 0 1vh 0;}"]),v("a",{href:"https://github.com/nainar",target:"_blank",rel:"noopener","aria-label":"Look at my GitHub",className:"jsx-3557293794"},v("svg",{viewBox:"0 0 18 18",style:y,className:"jsx-3557293794"},v("g",{className:"jsx-3557293794"},v("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8",className:"jsx-3557293794"})))),v("a",{href:"https://twitter.com/nainar92",target:"_blank",rel:"noopener","aria-label":"Follow me on Twitter",className:"jsx-3557293794"},v("svg",{viewBox:"0 0 18 18",style:y,className:"jsx-3557293794"},v("g",{className:"jsx-3557293794"},v("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",fillRule:"nonzero",className:"jsx-3557293794"})))),v("a",{href:"https://www.instagram.com/nainar92/",target:"_blank",rel:"noopener","aria-label":"Follow me on Instagram",className:"jsx-3557293794"},v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:y,className:"jsx-3557293794"},v("path",{style:_,d:"M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z",className:"jsx-3557293794"}),v("path",{style:_,d:"M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z",className:"jsx-3557293794"}),v("circle",{style:_,cx:"390.476",cy:"121.524",r:"30.23",className:"jsx-3557293794"}))),v("a",{href:"mailto:me@naina.app",target:"_blank",rel:"noopener","aria-label":"Email me!",className:"jsx-3557293794"},v("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 493.497 493.497",style:g,className:"jsx-3557293794"},v("path",{d:"M444.556,85.218H48.942C21.954,85.218,0,107.171,0,134.16v225.177c0,26.988,21.954,48.942,48.942,48.942h395.613 c26.988,0,48.941-21.954,48.941-48.942V134.16C493.497,107.171,471.544,85.218,444.556,85.218z M460.87,134.16v225.177 c0,2.574-0.725,4.924-1.793,7.09L343.74,251.081l117.097-117.097C460.837,134.049,460.87,134.096,460.87,134.16z M32.628,359.336 V134.16c0-0.064,0.033-0.11,0.033-0.175l117.097,117.097L34.413,366.426C33.353,364.26,32.628,361.911,32.628,359.336z M251.784,296.902c-2.692,2.691-7.378,2.691-10.07,0L62.667,117.846h368.172L251.784,296.902z M172.827,274.152l45.818,45.819 c7.512,7.511,17.493,11.645,28.104,11.645c10.61,0,20.592-4.134,28.104-11.645l45.82-45.819l101.49,101.499H71.327L172.827,274.152z ",className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}),v("g",{className:"jsx-3557293794"}))),v("div",{id:"footerText",className:"jsx-3557293794"},"Source code in the ",v("a",{href:"https://github.com/nainar/nainadotapp/",className:"jsx-3557293794"},"repository")," on GitHub")))},w=o.a.createElement,j=function(e){return w("div",null,w(u.a,null,w("title",null,"Naina Raisinghani"),w("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udca9</text></svg>"}),w("script",{async:!0,key:"amp-analytics","custom-element":"amp-analytics",src:"https://cdn.ampproject.org/v0/amp-analytics-0.1.js"})),w(m,null),e.children,w("amp-analytics",{type:"googleanalytics",id:"analytics1","data-credentials":"include"},w("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({vars:{account:"UA-126879454-1"},triggers:{trackPageview:{on:"visible",request:"pageview"}}})}})),w(x,null))},S=o.a.createElement;var b=function(e){var t=e.post;return S("li",{className:"jsx-2144997699"},S(l.a,{href:"/p/[id]",as:"/p/".concat(t.id)},S("a",{className:"jsx-2144997699"},t.title)),S(s.a,{id:"2144997699"},["li.jsx-2144997699{list-style:none;margin:5px 0;}","a.jsx-2144997699{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}","a.jsx-2144997699:hover{opacity:0.6;}"]))};function k(){return S(j,null,S("h1",{className:"jsx-344512576"},"My Blog"),S("ul",{className:"jsx-344512576"},[{id:"hello-nextjs",title:"Hello Next.js"},{id:"learn-nextjs",title:"Learn Next.js is awesome"},{id:"deploy-nextjs",title:"Deploy apps with ZEIT"}].map((function(e){return S(b,{key:e.id,post:e})}))),S(s.a,{id:"344512576"},["h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}","ul.jsx-344512576{padding:0;}","li.jsx-344512576{list-style:none;margin:5px 0;}","a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}","a.jsx-344512576:hover{opacity:0.6;}"]))}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},KUyn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hold",function(){return n("I/O0")}])},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var r=n("Ijbi"),s=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||s(e)||i()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),s=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var s=String(n),i=t+s;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,s=e.id;if(r){var i=this.computeId(s,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(s),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),s=n("PJYZ"),i=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),l=n("Nsbk"),c=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),h=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){o(d,c);var f,p=(f=d,function(){var e,t=l(f);if(u()){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function d(e){var i;return r(this,d),i=p.call(this,e),h&&(t.add(s(i)),n(s(i))),i}return i(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,l=void 0===a?r:a,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,l=e.prototype;return l.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),s=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),a=n("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,h=u(n("q1tI")),p=n("QmWs"),d=n("g/15"),m=c(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,_=window.IntersectionObserver,x={};function w(){return f||(_?f=new _((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){i(c,e);var t,n=(t=c,function(){var e,n=a(t);if(l()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return o(this,e)});function c(e){var t;return r(this,c),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(s,i){if(r&&s===t&&i===n)return r;var o=e(s,i);return t=s,n=i,r=o,o}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,s=n.target;if("A"!==r||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),o=i.href,a=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=(0,p.resolve)(l,o),a=a?(0,p.resolve)(l,a):o,e.preventDefault();var c=t.props.scroll;null==c&&(c=a.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](o,a,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return s(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,s=(0,p.resolve)(e,n);return[s,r?(0,p.resolve)(e,r):s]}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,s=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=s||r),h.default.cloneElement(i,o)}}]),c}(h.Component);t.default=j},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=r(n("q1tI"));t.AmpStateContext=s.createContext({})}},[["KUyn",0,2,1,3]]]);