_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,r=void 0!==a&&a,o=t.hasQuery;return n||r&&(void 0!==o&&o)}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"1OyB":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},"23aj":function(t,e,n){"use strict";n.r(e);var a=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),i=n("md7G"),c=n("foSv"),s=n("q1tI"),u=n.n(s),l=n("8Kt/"),f=n.n(l),p=n("5M6V"),d=n("K/ea"),m=n.n(d),h=n("nOHt"),g=u.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var b=function(t){Object(o.a)(n,t);var e=y(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={router:t.router,query:""},r}return Object(r.a)(n,[{key:"render",value:function(){return g(p.a,null,g(f.a,null,g("title",null,p.b)),g("section",{className:"".concat(m.a.section," ").concat(m.a.sectionOpenSource)},g("div",{className:m.a.container},g("div",{className:m.a.inner},g("img",{className:m.a.sectionImage,src:"".concat(this.state.router.basePath,"/images/studio-audio-rack-mobile.jpg"),alt:"Open source"}),g("h2",{className:m.a.title},"An open-source audio plugin ecosystem"),g("p",null,"Our tools are built using GitHub and open-source libraries, ensuring you will always be able to access them."),g("a",{className:"button",href:"".concat(this.state.router.basePath,"/plugins")},"Browse plugins")))),g("section",{className:"".concat(m.a.section," ").concat(m.a.sectionProducers)},g("div",{className:m.a.container},g("div",{className:m.a.inner},g("img",{className:m.a.sectionImage,src:"".concat(this.state.router.basePath,"/images/producers-mobile.jpg"),alt:"Producers"}),g("h2",{className:m.a.title},"Easy plugin installation & management"),g("p",null,"Our app and command line tools allow you to search our plugin registry for free plugins. You can install and manage plugin versions all from one place."),g("a",{className:"button",href:"https://github.com/studiorack/studiorack-app/releases/latest",target:"_blank"},"Download the app")," ",g("a",{className:"button button-clear",href:"https://www.npmjs.com/package/@studiorack/cli",target:"_blank"},"Install the CLI")))),g("section",{className:"".concat(m.a.section," ").concat(m.a.sectionCreators)},g("div",{className:m.a.container},g("div",{className:m.a.inner},g("img",{className:m.a.sectionImage,src:"".concat(this.state.router.basePath,"/images/creators-mobile.jpg"),alt:"Creators"}),g("h2",{className:m.a.title},"Automate your plugin publishing workflow"),g("p",null,"Our plugin starter templates use GitHub Actions to automatically build your plugin, publishing Windows, Mac and Linux versions directly to GitHub Releases."),g("a",{className:"button",href:"https://github.com/studiorack/studiorack-plugin-dplug",target:"_blank"},"Dplug"),g("a",{className:"button",href:"https://github.com/studiorack/studiorack-plugin-iplug",target:"_blank"},"iPlug"),g("a",{className:"button",href:"https://github.com/studiorack/studiorack-plugin-juce",target:"_blank"},"JUCE"),g("a",{className:"button",href:"https://github.com/studiorack/studiorack-plugin-steinberg",target:"_blank"},"Steinberg")))))}}]),n}(s.Component);e.default=Object(h.withRouter)(b)},"5M6V":function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return j}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("1OyB"),s=n("vuIU"),u=n("JX7q"),l=n("Ji7U"),f=n("md7G"),p=n("foSv"),d=n("rePB"),m=n("DMma"),h=n.n(m),g=n("nOHt"),y=r.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(p.a)(t);if(e){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(f.a)(this,n)}}var v=function(t){Object(l.a)(n,t);var e=b(n);function n(t){var a;return Object(c.a)(this,n),a=e.call(this,t),Object(d.a)(Object(u.a)(a),"isSelected",(function(t){return"/"===t?a.state.router.asPath===t?"active":"":a.state.router.asPath.startsWith(t)?"active":""})),a.state={home:t.home,router:t.router},a}return Object(s.a)(n,[{key:"render",value:function(){return y("ul",{className:h.a.navigation},y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/"),className:this.isSelected("/")},"Tools")),y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/plugins"),className:this.isSelected("/plugins")},"Plugins")),y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/docs"),className:this.isSelected("/docs")},"Docs")))}}]),n}(a.Component),_=Object(g.withRouter)(v),w=r.a.createElement,O="StudioRack",k="Automate your plugin publishing workflow, easy plugin installation and management";function j(t){var e=t.children,n=Object(g.useRouter)().basePath;return w("div",{className:h.a.container},w(i.a,null,w("meta",{name:"description",content:k}),w("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),w("meta",{name:"og:title",content:O}),w("meta",{name:"twitter:card",content:"summary_large_image"}),w("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),w("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),w("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),w("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),w("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),w("header",{className:h.a.header},w("a",{href:"".concat(n,"/"),className:h.a.headerLink},w("img",{className:h.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:O}),w("span",{className:h.a.logoText},"Studio",w("span",{className:h.a.logoTextBold},"Rack"))),w(_,null)),w("main",null,e))}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=l,e.default=void 0;var a,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(r.type){case"title":case"base":e.has(r.type)?o=!1:e.add(r.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var u=p[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],f=a[u]||new Set;f.has(l)?o=!1:(f.add(l),a[u]=f)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},e)}m.rewind=function(){};var h=m;e.default=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(t,e,n){t.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p"}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var a=n("WkPL");t.exports=function(t){if(Array.isArray(t))return a(t)}},JX7q:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},Ji7U:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return r}))},"K/ea":function(t,e,n){t.exports={section:"styles_section__1JNLY",sectionImage:"styles_sectionImage__2bEij",container:"styles_container__1_WuM",inner:"styles_inner__2HmlD",sectionProducers:"styles_sectionProducers__qluv9",sectionOpenSource:"styles_sectionOpenSource__10HZ5",sectionCreators:"styles_sectionCreators__2mrvF"}},RIqP:function(t,e,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return a(t)||r(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),s=n("a1gu"),u=n("Nsbk");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1,d=function(t){c(n,t);var e=l(n);function n(t){var o;return r(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=d},foSv:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},lwAK:function(t,e,n){"use strict";var a;e.__esModule=!0,e.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});e.AmpStateContext=r},md7G:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n("JX7q");function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},rePB:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},vuIU:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))}},[["/EDR",0,2,1]]]);