"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"ECM takes over EC",sidebar_position:.2},i=void 0,c={unversionedId:"feature/ecm-takes-over-ec",id:"feature/ecm-takes-over-ec",title:"ECM takes over EC",description:"1. Requirement Background",source:"@site/docs/feature/ecm-takes-over-ec.md",sourceDirName:"feature",slug:"/feature/ecm-takes-over-ec",permalink:"/docs/1.4.0/feature/ecm-takes-over-ec",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/feature/ecm-takes-over-ec.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"ECM takes over EC",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Generate SQL from the data source",permalink:"/docs/1.4.0/feature/datasource-generate-sql"},next:{title:"hive engine support concurrent",permalink:"/docs/1.4.0/feature/hive-engine-support-concurrent"}},s={},u=[{value:"1. Requirement Background",id:"1-requirement-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2}],l={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-requirement-background"},"1. Requirement Background"),(0,o.kt)("p",null,"When the ECM restarts, can choose not to kill the engine, and it can take over the existing surviving engine.\nMake engine conn manager(ECM) service stateless ."),(0,o.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,o.kt)("p",null,"this feature is enabled by default"))}f.isMDXComponent=!0}}]);