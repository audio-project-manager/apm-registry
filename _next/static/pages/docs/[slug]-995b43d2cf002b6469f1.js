_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var l=n("TqRt");t.__esModule=!0,t.default=void 0;var s=l(n("q1tI")),d=l(n("8Kt/")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var m=function(e){o(n,e);var t=u(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(d.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:h.h1},e):null,s.default.createElement("div",{style:h.desc},s.default.createElement("h2",{style:h.h2},t,"."))))}}]),n}(s.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("DMma"),u=n.n(c),l=n("nOHt"),s=r.a.createElement,d="StudioRack",f="Automate your plugin publishing workflow, easy plugin installation and management";function p(e){var t=e.children,n=(e.home,Object(l.useRouter)().basePath);return s("div",{className:u.a.container},s(i.a,null,s("meta",{name:"description",content:f}),s("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),s("meta",{name:"og:title",content:d}),s("meta",{name:"twitter:card",content:"summary_large_image"}),s("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),s("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),s("header",{className:u.a.header},s("a",{href:"".concat(n,"/"),className:u.a.headerLink},s("img",{className:u.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:d}),s("span",{className:u.a.logoText},"Studio",s("span",{className:u.a.logoTextBold},"Rack"))),s("ul",{className:u.a.navigation},s("li",null,s("a",{href:"".concat(n,"/#template")},"Plugin template")),s("li",null,s("a",{href:"".concat(n,"/#app")},"App & tools")),s("li",null,s("a",{href:"".concat(n,"/#plugins")},"Plugins")),s("li",null,s("a",{href:"".concat(n,"/docs")},"Docs")))),s("main",null,t))}},"7Rgj":function(e,t,n){e.exports={container:"docs_container__18tj9",sidebar:"docs_sidebar__3mbp9",content:"docs_content__3OOKn"}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=r.props[l],d=a[l]||new Set;d.has(s)?o=!1:(d.add(s),a[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(e,t,n){e.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},I8z9:function(e,t,n){e.exports={markdown:"doc_markdown__2E8_P"}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},JYFF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[slug]",function(){return n("SqIG")}])},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},SqIG:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("nOHt"),i=n("eomm"),c=n.n(i),u=n("pJr+"),l=n("5M6V"),s=n("I8z9"),d=n.n(s),f=r.a.createElement,p=!0;t.default=function(e){var t=e.allDocs,n=e.doc;return Object(o.useRouter)().isFallback||(null===n||void 0===n?void 0:n.slug)?f(l.a,null,f(u.a,{docs:t},f("h1",null,n.title),f("div",{className:d.a.markdown,dangerouslySetInnerHTML:{__html:n.content}}))):f(c.a,{statusCode:404})}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1,p=function(e){c(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},eomm:function(e,t,n){e.exports=n("/a9y")},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},"pJr+":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("7Rgj"),i=n.n(o),c=r.a.createElement;function u(e){var t=e.children,n=e.docs;return c("div",{className:i.a.container},c("div",{className:i.a.sidebar},c("h4",null,"Documentation"),c("ul",{className:i.a.menu},n.map((function(e){return c("li",{className:i.a.menuItem,key:e.slug},c("a",{href:"/docs/".concat(e.slug)},e.title))})))),c("div",{className:i.a.content},t))}}},[["JYFF",0,2,1]]]);