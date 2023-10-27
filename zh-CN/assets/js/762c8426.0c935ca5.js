"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[89320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"LDAP",sidebar_position:1},l=void 0,o={unversionedId:"auth/ldap",id:"auth/ldap",title:"LDAP",description:"LDAP(Lightweight Directory Access Protocol)\u914d\u7f6e\uff0c\u9ed8\u8ba4\u5b89\u88c5\u90e8\u7f72\u540e\uff0c\u53ea\u652f\u6301\u914d\u7f6e\u7684\u9759\u6001\u7528\u6237\u548c\u5bc6\u7801\u767b\u5f55\uff08\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\uff09\uff0c\u5982\u679c\u9700\u8981\u652f\u6301\u591a\u7528\u6237\u767b\u5f55\u53ef\u4ee5\u4f7f\u7528LDAP",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/auth/ldap.md",sourceDirName:"auth",slug:"/auth/ldap",permalink:"/zh-CN/docs/1.5.0/auth/ldap",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/auth/ldap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"LDAP",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HBase",permalink:"/zh-CN/docs/1.5.0/engine-usage/hbase"},next:{title:"Token",permalink:"/zh-CN/docs/1.5.0/auth/token"}},p={},s=[{value:"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",level:2},{value:"2. \u4f7f\u7528\u65b9\u5f0f",id:"2-\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"2.1 Step1 \u5f00\u542fladp\u767b\u9646\u9a8c\u5bc6\u65b9\u5f0f",id:"21-step1-\u5f00\u542fladp\u767b\u9646\u9a8c\u5bc6\u65b9\u5f0f",level:3},{value:"2.2 Step2 \u91cd\u542flinkis-mg-gateway \u7684\u670d\u52a1",id:"22-step2-\u91cd\u542flinkis-mg-gateway-\u7684\u670d\u52a1",level:3},{value:"3  \u6ce8\u610f\u4e8b\u9879",id:"3--\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LDAP(Lightweight Directory Access Protocol)\u914d\u7f6e\uff0c\u9ed8\u8ba4\u5b89\u88c5\u90e8\u7f72\u540e\uff0c\u53ea\u652f\u6301\u914d\u7f6e\u7684\u9759\u6001\u7528\u6237\u548c\u5bc6\u7801\u767b\u5f55\uff08\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\uff09\uff0c\u5982\u679c\u9700\u8981\u652f\u6301\u591a\u7528\u6237\u767b\u5f55\u53ef\u4ee5\u4f7f\u7528LDAP")),(0,r.kt)("h2",{id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"},"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u65b9\u5f0f\u7684\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"#\u9ed8\u8ba4\u7528\u6237\u540d\nwds.linkis.admin.user=hadoop\n#\u9ed8\u8ba4\u5bc6\u7801 \nwds.linkis.admin.password=123456\n")),(0,r.kt)("p",null,"\u767b\u9646\u8bf7\u6c42\u5904\u7406\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.UserPwdAbstractUserRestful#tryLogin"),"\uff0c\n\u5982\u679c\u767b\u9646\u7528\u6237\u540d/\u7528\u6237\u5bc6\u7801\u548c\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u8d70LDAP\u6a21\u5f0f\u3002\nLDAP\u6838\u5fc3\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.LDAPUserRestful#login")," \u901a\u8fc7\u8c03\u7528jdk\u901a\u7528\u7684ldap\u5de5\u5177\u7c7b\u8fdb\u884c\u8ba4\u8bc1\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"javax.naming.ldap.InitialLdapContext#InitialLdapContext(java.util.Hashtable<?,?>, javax.naming.ldap.Control[])")),(0,r.kt)("h2",{id:"2-\u4f7f\u7528\u65b9\u5f0f"},"2. \u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u524d\u63d0\u662f\u6709\u53ef\u7528\u7684LADP\u670d\u52a1")),(0,r.kt)("h3",{id:"21-step1-\u5f00\u542fladp\u767b\u9646\u9a8c\u5bc6\u65b9\u5f0f"},"2.1 Step1 \u5f00\u542fladp\u767b\u9646\u9a8c\u5bc6\u65b9\u5f0f"),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties"),"\u914d\u7f6e "),(0,r.kt)("p",null,"\u5c06LDAP\u76f8\u5173\u53c2\u6570\u586b\u5165 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"##LDAP\n#ldap\u670d\u52a1\u5730\u5740\nwds.linkis.ldap.proxy.url=ldap://localhost:1389/\n#Directory Name(DN) ldap\u7684\u76ee\u5f55\u6784\u6210\nwds.linkis.ldap.proxy.baseDN==dc=linkis,dc=org\n#\u7528\u6237\u540d\u683c\u5f0f\u5316 \u4e00\u822c\u65e0\u9700\u8981\u914d\u7f6e\nwds.linkis.ldap.proxy.userNameFormat=\n")),(0,r.kt)("h3",{id:"22-step2-\u91cd\u542flinkis-mg-gateway-\u7684\u670d\u52a1"},"2.2 Step2 \u91cd\u542flinkis-mg-gateway \u7684\u670d\u52a1"),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u540e\uff0c\u9700\u8981\u91cd\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway"),"\u670d\u52a1 ",(0,r.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start mg-mgtaeway"),"\uff0c\u624d\u80fd\u751f\u6548"),(0,r.kt)("h2",{id:"3--\u6ce8\u610f\u4e8b\u9879"},"3  \u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8ba4\u8bc1\u7c7b\u578b\u4f7f\u7528\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"java.naming.security.authentication"),"\uff08\u5b89\u5168\u7c7b\u578b\uff0c\u4e09\u4e2a\u503c\uff1anone\uff0csimple\u6216strong\u3002\uff09\u4e2d\u7684simple\u6a21\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5173\u4e8eldap\u7684\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903857311449102"},"LDAP\u76ee\u5f55\u670d\u52a1\u5668\u4ecb\u7ecd")))))}d.isMDXComponent=!0}}]);