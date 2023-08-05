"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[28091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,b=u["".concat(o,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"\u516c\u5171\u670d\u52a1\u67b6\u6784",sidebar_position:2},c=void 0,l={unversionedId:"architecture/feature/public-enhancement-services/public-service",id:"version-1.3.2/architecture/feature/public-enhancement-services/public-service",title:"\u516c\u5171\u670d\u52a1\u67b6\u6784",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/architecture/feature/public-enhancement-services/public-service.md",sourceDirName:"architecture/feature/public-enhancement-services",slug:"/architecture/feature/public-enhancement-services/public-service",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/public-service",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/architecture/feature/public-enhancement-services/public-service.md",tags:[],version:"1.3.2",sidebarPosition:2,frontMatter:{title:"\u516c\u5171\u670d\u52a1\u67b6\u6784",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/overview"},next:{title:"CS \u67b6\u6784",permalink:"/zh-CN/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/"}},o={},s=[{value:"<strong>\u80cc\u666f</strong>",id:"\u80cc\u666f",level:2},{value:"<strong>\u67b6\u6784\u56fe</strong>",id:"\u67b6\u6784\u56fe",level:2},{value:"<strong>\u67b6\u6784\u8bf4\u660e</strong>",id:"\u67b6\u6784\u8bf4\u660e",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u80cc\u666f"},(0,i.kt)("strong",{parentName:"h2"},"\u80cc\u666f")),(0,i.kt)("p",null,"PublicService\u516c\u5171\u670d\u52a1\u662f\u7531configuration\u3001jobhistory\u3001udf\u3001variable\u7b49\u591a\u4e2a\u5b50\u6a21\u5757\u7ec4\u6210\u7684\u7efc\u5408\u6027\u670d\u52a1\u3002Linkis\n1.0\u57280.9\u7248\u672c\u7684\u57fa\u7840\u4e0a\u8fd8\u65b0\u589e\u4e86\u6807\u7b7e\u7ba1\u7406\u3002Linkis\u5728\u7528\u6237\u4e0d\u540c\u4f5c\u4e1a\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u662f\u6bcf\u6b21\u6267\u884c\u90fd\u9700\u8981\u53bb\u8bbe\u7f6e\u4e00\u904d\u53c2\u6570\uff0c\u5f88\u591a\u53ef\u4ee5\u590d\u7528\u7684\u53d8\u91cf\uff0c\u51fd\u6570\uff0c\u914d\u7f6e\u90fd\u662f\u7528\u6237\u5728\u5b8c\u6210\u4e00\u6b21\u8bbe\u7f6e\u540e\uff0c\u80fd\u591f\u88ab\u590d\u7528\u8d77\u6765\uff0c\u5f53\u7136\u8fd8\u53ef\u4ee5\u5171\u4eab\u7ed9\u522b\u7684\u7528\u6237\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u67b6\u6784\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(6882).Z,width:"907",height:"552"})),(0,i.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},(0,i.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u8bf4\u660e")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"linkis-configuration\uff1a\u5bf9\u5916\u63d0\u4f9b\u4e86\u5168\u5c40\u8bbe\u7f6e\u548c\u901a\u7528\u8bbe\u7f6e\u7684\u67e5\u8be2\u548c\u4fdd\u5b58\u64cd\u4f5c\uff0c\u7279\u522b\u662f\u5f15\u64ce\u914d\u7f6e\u53c2\u6570")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"linkis-jobhistory\uff1a\u4e13\u95e8\u7528\u4e8e\u5386\u53f2\u6267\u884c\u4efb\u52a1\u7684\u5b58\u50a8\u548c\u67e5\u8be2\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7jobhistory\u63d0\u4f9b\u7684\u63a5\u53e3\u83b7\u53d6\u5386\u53f2\u4efb\u52a1\n\u7684\u6267\u884c\u60c5\u51b5\u3002\u5305\u62ec\u65e5\u5fd7\u3001\u72b6\u6001\u3001\u6267\u884c\u5185\u5bb9\u7b49\u3002\u540c\u65f6\u5386\u53f2\u4efb\u52a1\u8fd8\u652f\u6301\u4e86\u5206\u9875\u67e5\u8be2\u64cd\u4f5c\uff0c\u5bf9\u4e8e\u7ba1\u7406\u5458\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7684\u5386\u53f2\u4efb\u52a1\uff0c\u666e\u901a\u7528\u6237\u53ea\u80fd\u67e5\u770b\u81ea\u5df1\u7684\u5386\u53f2\u4efb\u52a1\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis-udf\uff1a\u63d0\u4f9blinkis\u7684\u7528\u6237\u51fd\u6570\u7ba1\u7406\u529f\u80fd\uff0c\u5177\u4f53\u53ef\u5206\u4e3a\u5171\u4eab\u51fd\u6570\u3001\u4e2a\u4eba\u51fd\u6570\u3001\u7cfb\u7edf\u51fd\u6570\uff0c\u4ee5\u53ca\u51fd\u6570\u4f7f\u7528\u7684\u5f15\u64ce\uff0c\u7528\u6237\u52fe\u9009\u540e\u4f1a\u5728\u5f15\u64ce\u542f\u52a8\u7684\u65f6\u5019\u88ab\u81ea\u52a8\u52a0\u8f7d\u3002\u4f9b\u7528\u6237\u5728\u4ee3\u7801\u4e2d\u76f4\u63a5\u5f15\u7528\u548c\u4e0d\u540c\u7684\u811a\u672c\u95f4\u8fdb\u884c\u51fd\u6570\u590d\u7528\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis-variable\uff1a\u63d0\u4f9blinkis\u7684\u5168\u5c40\u53d8\u91cf\u7ba1\u7406\u80fd\u529b\uff0c\u5b58\u50a8\u7528\u6237\u5b9a\u4e49\u7684\u5168\u5c40\u53d8\u91cf\uff0c\u67e5\u8be2\u7528\u6237\u5b9a\u4e49\u7684\u5168\u5c40\u53d8\u91cf\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"linkis-instance-label\uff1a\u63d0\u4f9b\u4e86label server \u548clabel\nclient\u4e24\u4e2a\u6a21\u5757\uff0c\u4e3aEngine\u548cEM\u6253\u6807\u7b7e\uff0c\u63d0\u4f9b\u57fa\u4e8e\u8282\u70b9\u7684\u6807\u7b7e\u589e\u5220\u6539\u67e5\u80fd\u529b\u3002\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e3a\u4e00\u4e9b\u7279\u5b9a\u7684\u6807\u7b7e\uff0c\u63d0\u4f9b\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff0c\u534f\u52a9RM\u5728\u8d44\u6e90\u7ba1\u7406\u5c42\u9762\u66f4\u52a0\u7cbe\u7ec6\u5316")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e3a\u7528\u6237\u63d0\u4f9b\u6807\u7b7e\u80fd\u529b\u3002\u4e3a\u4e00\u4e9b\u7528\u6237\u6253\u4e0a\u6807\u7b7e\uff0c\u8fd9\u6837\u5728\u5f15\u64ce\u7533\u8bf7\u65f6\uff0c\u4f1a\u81ea\u52a8\u52a0\u4e0a\u8fd9\u4e9b\u6807\u7b7e\u5224\u65ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u6807\u7b7e\u89e3\u6790\u6a21\u5757\uff0c\u80fd\u5c06\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u89e3\u6790\u6210\u4e00\u5806\u6807\u7b7e\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5177\u5907\u8282\u70b9\u6807\u7b7e\u7ba1\u7406\u7684\u80fd\u529b\uff0c\u4e3b\u8981\u7528\u4e8e\u63d0\u4f9b\u8282\u70b9\u7684\u6807\u7b7eCRUD\u80fd\u529b\uff0c\u8fd8\u6709\u6807\u7b7e\u8d44\u6e90\u7ba1\u7406\u7528\u4e8e\u7ba1\u7406\u67d0\u4e9b\u6807\u7b7e\u7684\u8d44\u6e90\uff0c\u6807\u8bb0\u4e00\u4e2aLabel\u7684\u6700\u5927\u8d44\u6e90\u3001\u6700\u5c0f\u8d44\u6e90\u548c\u5df2\u4f7f\u7528\u8d44\u6e90\u3002"))))}m.isMDXComponent=!0},6882:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-publicService-01-fe98364417c2879f8c12204e36ef6dfc.png"}}]);