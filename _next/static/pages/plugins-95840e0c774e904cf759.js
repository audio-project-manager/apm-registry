_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},"1nr8":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return j}));var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),u=n("md7G"),c=n("foSv"),s=n("rePB"),l=n("q1tI"),f=n.n(l),p=n("8Kt/"),d=n.n(p),g=n("5M6V"),h=n("xoZS"),m=n.n(h),v=n("YFqc"),y=n.n(v),_=n("nOHt"),b=f.a.createElement;function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var w=function(e){Object(i.a)(n,e);var t=O(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(s.a)(Object(o.a)(r),"handleChange",(function(e){var t=e.target,n=t.value?t.value.toLowerCase():"",a=r.props.plugins.filter((function(e){return!(-1===e.name.toLowerCase().indexOf(n)&&-1===e.description.toLowerCase().indexOf(n)&&!e.tags.includes(n))&&e}));r.setState({pluginsFiltered:a||[],query:n})})),Object(s.a)(Object(o.a)(r),"getRepo",(function(e){var t;return null===(t=e.id)||void 0===t?void 0:t.slice(0,e.id.lastIndexOf("/"))})),Object(s.a)(Object(o.a)(r),"getPluginId",(function(e){var t;return null===(t=e.id)||void 0===t?void 0:t.slice(e.id.lastIndexOf("/")+1)})),r.state={pluginsFiltered:e.plugins||[],router:e.router,query:""},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return b(g.a,null,b(d.a,null,b("title",null,g.b)),b("section",{className:m.a.plugins},b("div",{className:m.a.pluginsHeader},b("h3",{className:m.a.pluginsTitle},"Plugins"),b("input",{className:m.a.pluginsSearch,placeholder:"Filter by keyword",value:this.state.query,onChange:this.handleChange})),b("div",{className:m.a.pluginsList},this.state.pluginsFiltered.map((function(t,n){return b(y.a,{href:"/plugins/[slug]",as:"/plugins/".concat(t.slug),key:"".concat(t.name,"-").concat(n)},b("div",{className:m.a.plugin},b("div",{className:m.a.pluginDetails},b("div",{className:m.a.pluginHead},b("h4",{className:m.a.pluginTitle},t.name," ",b("span",{className:m.a.pluginVersion},"v",t.version)),"installed"===t.status?b("span",{className:m.a.pluginButtonInstalled},b("img",{className:m.a.pluginButtonIcon,src:"".concat(e.state.router.basePath,"/images/icon-installed.svg"),alt:"Installed"})):b("span",{className:m.a.pluginButton},b("img",{className:m.a.pluginButtonIcon,src:"".concat(e.state.router.basePath,"/images/icon-download.svg"),alt:"Download"}))),b("ul",{className:m.a.pluginTags},b("img",{className:m.a.pluginIcon,src:"".concat(e.state.router.basePath,"/images/icon-tag.svg"),alt:"Tags"}),t.tags.map((function(e,t){return b("li",{className:m.a.pluginTag,key:"".concat(e,"-").concat(t)},e,",")})))),t.files.image?b("img",{className:m.a.pluginImage,src:"https://github.com/".concat(e.getRepo(t),"/releases/download/").concat(t.release,"/").concat(t.files.image.name),alt:t.name}):""))})))))}}]),n}(l.Component),j=!0;t.default=Object(_.withRouter)(w)},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return I}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),u=n("1OyB"),c=n("vuIU"),s=n("JX7q"),l=n("Ji7U"),f=n("md7G"),p=n("foSv"),d=n("rePB"),g=n("DMma"),h=n.n(g),m=n("nOHt"),v=r.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(e){Object(l.a)(n,e);var t=y(n);function n(e){var a;return Object(u.a)(this,n),a=t.call(this,e),Object(d.a)(Object(s.a)(a),"isSelected",(function(e){return"/"===e?a.state.router.asPath===e?"active":"":a.state.router.asPath.startsWith(e)?"active":""})),a.state={home:e.home,router:e.router},a}return Object(c.a)(n,[{key:"render",value:function(){return v("ul",{className:h.a.navigation},v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/"),className:this.isSelected("/")},"Tools")),v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/plugins"),className:this.isSelected("/plugins")},"Plugins")),v("li",null,v("a",{href:"".concat(this.state.router.basePath,"/docs"),className:this.isSelected("/docs")},"Docs")))}}]),n}(a.Component),b=Object(m.withRouter)(_),O=r.a.createElement,w="StudioRack",j="Automate your plugin publishing workflow, easy plugin installation and management";function I(e){var t=e.children,n=Object(m.useRouter)().basePath;return O("div",{className:h.a.container},O(i.a,null,O("meta",{name:"description",content:j}),O("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),O("meta",{name:"og:title",content:w}),O("meta",{name:"twitter:card",content:"summary_large_image"}),O("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),O("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),O("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),O("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),O("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),O("header",{className:h.a.header},O("a",{href:"".concat(n,"/"),className:h.a.headerLink},O("img",{className:h.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:w}),O("span",{className:h.a.logoText},"Studio",O("span",{className:h.a.logoTextBold},"Rack"))),O(b,null)),O("main",null,t))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=r.props[s],f=a[s]||new Set;f.has(l)?o=!1:(f.add(l),a[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}g.rewind=function(){};var h=g;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(e,t,n){e.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){u(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},YfdB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins",function(){return n("1nr8")}])},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),u=n("QmWs"),c=n("g/15"),s=n("nOHt"),l=n("elyg"),f=n("X24+");function p(e){return e&&(0,c.formatWithValidation)((0,f.normalizeTrailingSlash)("object"===typeof e?e:(0,u.parse)(e)))}var d=new Map,g=window.IntersectionObserver,h={};var m=function(e,t){var n=o||(g?o=new g((function(e){e.forEach((function(e){if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),d.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),d.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):function(){}};function v(e,t,n,a){e.prefetch(t,n,a).catch((function(e){0})),h[t+"%"+n]=!0}function y(e,t,n,a,r,o,i){var s=e.currentTarget,l=s.nodeName,f=s.target;"A"===l&&(f&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,c.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(n)&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var _=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],c=r[1],f=(0,s.useRouter)(),d=i.default.useMemo((function(){var t=(0,u.resolve)(f.pathname,p(e.href));return{href:t,as:e.as?(0,u.resolve)(f.pathname,p(e.as)):t}}),[f.pathname,e.href,e.as]),_=d.href,b=d.as;i.default.useEffect((function(){if(t&&g&&o&&o.tagName&&!h[_+"%"+b])return m(o,(function(){v(f,_,b)}))}),[t,o,_,b,f]);var O=e.children,w=e.replace,j=e.shallow,I=e.scroll;"string"===typeof O&&(O=i.default.createElement("a",null,O));var M=i.Children.only(O),S={ref:function(e){c(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||y(e,f,_,b,w,j,I)}};return t&&(S.onMouseEnter=function(e){M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),v(f,_,b,{priority:!0})}),!e.passHref&&("a"!==M.type||"href"in M.props)||(S.href=(0,l.addBasePath)(b)),i.default.cloneElement(M,S)};t.default=_},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var r=n("JX7q");function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},xoZS:function(e,t,n){e.exports={plugins:"plugins_plugins__2dNdD",pluginsTitle:"plugins_pluginsTitle__2p3GJ",pluginsHeader:"plugins_pluginsHeader__31AhY",pluginsCategory:"plugins_pluginsCategory__20pcK",pluginsSearch:"plugins_pluginsSearch__1rgj6",plugin:"plugins_plugin__1xG0k",pluginDetails:"plugins_pluginDetails__2eEMP",pluginHead:"plugins_pluginHead__EiVJg",pluginTitle:"plugins_pluginTitle__1NqYR",pluginButton:"plugins_pluginButton__ViK9P",pluginButtonInstalled:"plugins_pluginButtonInstalled__1cpJv",pluginVersion:"plugins_pluginVersion__1IJnM",pluginTags:"plugins_pluginTags__35guJ",pluginIcon:"plugins_pluginIcon__3_zAB",pluginTag:"plugins_pluginTag__1CUTL",pluginImage:"plugins_pluginImage__3HkLy",pluginsList:"plugins_pluginsList__qsHK-"}}},[["YfdB",0,2,1]]]);