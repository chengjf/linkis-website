"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=i,p=d["".concat(c,".").concat(b)]||d[b]||m[b]||o;return t?r.createElement(p,a(a({ref:n},l),{},{components:t})):r.createElement(p,a({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},45898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"version number and branch modification instructions",sidebar_position:.4},a=void 0,s={unversionedId:"feature/version-and-branch-intro",id:"feature/version-and-branch-intro",title:"version number and branch modification instructions",description:"1. Linkis main version number modification instructions",source:"@site/docs/feature/version-and-branch-intro.md",sourceDirName:"feature",slug:"/feature/version-and-branch-intro",permalink:"/docs/1.4.0/feature/version-and-branch-intro",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/feature/version-and-branch-intro.md",tags:[],version:"current",sidebarPosition:.4,frontMatter:{title:"version number and branch modification instructions",sidebar_position:.4},sidebar:"tutorialSidebar",previous:{title:"upgrade hadoop\\spark\\hive default version to 3.x",permalink:"/docs/1.4.0/feature/upgrade-base-engine-version"},next:{title:"Sandbox",permalink:"/docs/1.4.0/quick/live-demo"}},c={},u=[{value:"1. Linkis main version number modification instructions",id:"1-linkis-main-version-number-modification-instructions",level:2},{value:"2. Linkis code submission master branch instructions",id:"2-linkis-code-submission-master-branch-instructions",level:2}],l={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-linkis-main-version-number-modification-instructions"},"1. Linkis main version number modification instructions"),(0,i.kt)("p",null,"Linkis will no longer be upgraded by minor version after version 1.3.2. The next version will be 1.4.0, and the version number will be 1.5.0, 1.6.0 and so on. When encountering a major defect in a released version that needs to be fixed, it will pull a minor version to fix the defect, such as 1.4.1."),(0,i.kt)("h2",{id:"2-linkis-code-submission-master-branch-instructions"},"2. Linkis code submission master branch instructions"),(0,i.kt)("p",null,"The modified code of Linkis 1.3.2 and earlier versions is merged into the dev branch by default. In fact, the development community of Apache Linkis is very active, and new development requirements or repair functions will be submitted to the dev branch, but when users visit the Linkis code base, the master branch is displayed by default. Since we only release a new version every quarter, it seems that the community is not very active from the perspective of the master branch. Therefore, we decided to merge the code submitted by developers into the master branch by default starting from version 1.4.0."))}m.isMDXComponent=!0}}]);