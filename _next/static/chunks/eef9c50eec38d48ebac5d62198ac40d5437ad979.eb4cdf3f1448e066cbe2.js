(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"20a2":function(e,t,n){e.exports=n("nOHt")},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return x}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),u=n.n(o),i=n("1OyB"),c=n("vuIU"),s=n("JX7q"),l=n("Ji7U"),f=n("md7G"),p=n("foSv"),d=n("rePB"),m=n("DMma"),h=n.n(m),y=n("20a2"),v=a.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var g=function(e){Object(l.a)(n,e);var t=b(n);function n(e){var r;return Object(i.a)(this,n),r=t.call(this,e),Object(d.a)(Object(s.a)(r),"isSelected",(function(e){return"/"===e?r.state.router.asPath===e?"active":"":r.state.router.asPath.startsWith(e)?"active":""})),r.state={home:e.home,router:e.router},r}return Object(c.a)(n,[{key:"render",value:function(){return v("div",{className:h.a.navigation},v("input",{className:h.a.menuBtn,type:"checkbox",id:"menu-btn"}),v("label",{className:h.a.menuIcn,htmlFor:"menu-btn"},v("span",{className:h.a.menuNavIcn})),v("ul",{className:h.a.menu},v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/"),className:this.isSelected("/")},"Tools")),v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/plugins"),className:this.isSelected("/plugins")},"Plugins")),v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/docs"),className:this.isSelected("/docs")},"Docs"))))}}]),n}(r.Component),_=Object(y.withRouter)(g),w=a.a.createElement,O="StudioRack";function x(e){var t=e.children,n=Object(y.useRouter)().basePath;return w("div",{className:h.a.container},w(u.a,null,w("meta",{name:"description",content:"Automate your plugin publishing workflow, easy plugin installation and management"}),w("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),w("meta",{name:"og:title",content:O}),w("meta",{name:"twitter:card",content:"summary_large_image"}),w("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),w("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),w("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),w("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),w("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),w("header",{className:h.a.header},w("a",{href:"".concat(n,"/"),className:h.a.headerLink},w("img",{className:h.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:O}),w("span",{className:h.a.logoText},"Studio",w("span",{className:h.a.logoTextBold},"Rack"))),w(_,null)),w("main",null,t))}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var s=p[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(e,t,n){e.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p",menu:"layout_menu__3E6ov",menuIcn:"layout_menuIcn__2Js-c",menuNavIcn:"layout_menuNavIcn__ZfVtH",menuBtn:"layout_menuBtn__262aa",steps:"layout_steps__1d4RD"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var a=n("JX7q");function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))}}]);