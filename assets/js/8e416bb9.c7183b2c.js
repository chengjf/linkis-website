"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"How to Develop A New Microservice",sidebar_position:8},o=void 0,s={unversionedId:"development/new-microservice",id:"version-1.3.2/development/new-microservice",title:"How to Develop A New Microservice",description:"This article introduces how to develop, debug and deploy a new microservice in the local area based on the existing Linkis microservice architecture, so as to facilitate the need for logs of new applications.",source:"@site/versioned_docs/version-1.3.2/development/new-microservice.md",sourceDirName:"development",slug:"/development/new-microservice",permalink:"/docs/1.3.2/development/new-microservice",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/development/new-microservice.md",tags:[],version:"1.3.2",sidebarPosition:8,frontMatter:{title:"How to Develop A New Microservice",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Quickly Implement New Engine",permalink:"/docs/1.3.2/development/new-engine-conn"},next:{title:"Swagger Annotation",permalink:"/docs/1.3.2/development/swwager"}},l={},c=[{value:"1. New microservice development",id:"1-new-microservice-development",level:2},{value:"1.1 Create a new submodule",id:"11-create-a-new-submodule",level:3},{value:"1.1.1 Modify the pom.xml file of the linkis-new-microservice module",id:"111-modify-the-pomxml-file-of-the-linkis-new-microservice-module",level:4},{value:"1.1.2 Add configuration files corresponding to new services",id:"112-add-configuration-files-corresponding-to-new-services",level:4},{value:"1.1.4 Enable debug mode",id:"114-enable-debug-mode",level:4},{value:"1.2 Code Development",id:"12-code-development",level:3},{value:"1.2.1 Create a new interface class",id:"121-create-a-new-interface-class",level:4},{value:"1.2.2 new startup class",id:"122-new-startup-class",level:4},{value:"1.3 Start eureka service",id:"13-start-eureka-service",level:3},{value:"1.4 Start the new microservice locally",id:"14-start-the-new-microservice-locally",level:3},{value:"1.5 Postman for interface debugging",id:"15-postman-for-interface-debugging",level:3},{value:"2. Package deployment",id:"2-package-deployment",level:2},{value:"2.1 Modify the distribution.xml under the new service",id:"21-modify-the-distributionxml-under-the-new-service",level:3},{value:"2.2 Modify distribution.xml under linkis-dist",id:"22-modify-distributionxml-under-linkis-dist",level:3},{value:"2.3 Run configuration script for the service",id:"23-run-configuration-script-for-the-service",level:3},{value:"2.4 linkis-start-all.sh configuration modification",id:"24-linkis-start-allsh-configuration-modification",level:3},{value:"2.5 linkis-stop-all.sh configuration modification",id:"25-linkis-stop-allsh-configuration-modification",level:3},{value:"2.6 Installation package preparation",id:"26-installation-package-preparation",level:3},{value:"2.7 Server Deployment",id:"27-server-deployment",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article introduces how to develop, debug and deploy a new microservice in the local area based on the existing Linkis microservice architecture, so as to facilitate the need for logs of new applications.")),(0,a.kt)("p",null,"Mind mapping:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mind-Mapping",src:n(54985).Z,width:"4321",height:"2314"})),(0,a.kt)("h2",{id:"1-new-microservice-development"},"1. New microservice development"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article introduces the new microservice ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-new-microservice")," as an example. How to create and register a new microservice belonging to linkis in IDEA")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software requirements")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jdk1.8"),(0,a.kt)("li",{parentName:"ul"},"maven3.5+")),(0,a.kt)("h3",{id:"11-create-a-new-submodule"},"1.1 Create a new submodule"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The new sub-module under which module is not fixed and depends on the situation. Generally, it is divided and confirmed by service group. Here is just an example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Right click under the linkis-public-enhancements module")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-module",src:n(15931).Z,width:"1083",height:"570"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select maven and click Nex to next step")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"maven-module",src:n(31064).Z,width:"1051",height:"826"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the module name and click Finsh")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"name-module",src:n(50041).Z,width:"1035",height:"737"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Created successfully")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"created-successfully",src:n(95926).Z,width:"1754",height:"667"})),(0,a.kt)("h4",{id:"111-modify-the-pomxml-file-of-the-linkis-new-microservice-module"},"1.1.1 Modify the pom.xml file of the linkis-new-microservice module"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-public-enhancements/linkis-new-microservice/pom.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## Add the public dependency module of linkis and the mybatis module dependency (if it does not involve database operations, you can not add mybatis)\n  <dependency>\n      <groupId>org.apache.linkis</groupId>\n      <artifactId>linkis-module</artifactId>\n      <version>${project.version}</version>\n      <exclusions>\n        <exclusion>\n          <groupId>org.ow2.asm</groupId>\n          <artifactId>asm</artifactId>\n        </exclusion>\n      </exclusions>\n  </dependency>\n\n  <dependency>\n      <groupId>org.apache.linkis</groupId>\n      <artifactId>linkis-mybatis</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,a.kt)("h4",{id:"112-add-configuration-files-corresponding-to-new-services"},"1.1.2 Add configuration files corresponding to new services"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The configuration file is named according to linkis-service name.properties, and placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/package/conf/")," directory. When the service starts, the linkis.properties general configuration file and the linkis-service name.properties configuration file will be loaded")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-new-microservice.properties")," configuration file"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/conf/linkis-new-microservice.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# \n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n# http://www.apache.org/licenses/LICENSE-2.0\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\n\n## If you do not need to provide interface Api, you do not need to add this configuration\n##restful\nwds.linkis.server.restful.scan.packages=org.apache.linkis.newmicroservice.server.restful \n\n## mybatis Configuration of data manipulation items\nwds.linkis.server.mybatis.mapperLocations=classpath*:org/apache/linkis/newmicroservice/server/dao/mapper/*.xml \nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.newmicroservice.server.domain\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.newmicroservice.server.dao\n\n\n## Never use the same port as other services\nspring.server.port=9208 \n\n')),(0,a.kt)("h4",{id:"114-enable-debug-mode"},"1.1.4 Enable debug mode"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is convenient to debug the interface, no need to verify the login status")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/conf/linkis.properties"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"test-mode",src:n(68625).Z,width:"806",height:"226"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.test.mode=true   # Turn on test mode\nwds.linkis.test.user=hadoop # Specify which user to proxy all requests to in test mode\n\n")),(0,a.kt)("h3",{id:"12-code-development"},"1.2 Code Development"),(0,a.kt)("p",null,"To make it easier for everyone to learn, let's take creating a simple API interface as an example."),(0,a.kt)("h4",{id:"121-create-a-new-interface-class"},"1.2.1 Create a new interface class"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-microservice",src:n(16175).Z,width:"1607",height:"508"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.newmicroservice.server.restful;\n\n\nimport io.swagger.annotations.ApiOperation;\nimport org.apache.linkis.server.Message;\nimport org.springframework.web.bind.annotation.*;\n\nimport io.swagger.annotations.Api;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@Api(tags = "newmicroservice")\n@RestController\n@RequestMapping(path = "/newmicroservice")\npublic class NewMicroservice {\n\n\n    @ApiOperation(value = "establish", httpMethod = "GET")\n    @RequestMapping(path = "establish", method = RequestMethod.GET)\n    public Message list() {\n        Map&lt;String,String&gt; map=new HashMap&lt;&gt;();\n        map.put("NewMicroservice","Hello! This is a new microservice I registered(\u8fd9\u662f\u6211\u6ce8\u518c\u7684\u4e00\u4e2a\u65b0\u7684\u5fae\u670d\u52a1)");\n        return Message.ok("").data("map", map);\n    }\n\n}\n')),(0,a.kt)("h4",{id:"122-new-startup-class"},"1.2.2 new startup class"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"maven-module",src:n(93226).Z,width:"1720",height:"543"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.apache.linkis.newmicroservice.server;\n\nimport org.apache.linkis.LinkisBaseServerApp;\n\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\n\npublic class LinkisNewMicroserviceApplication {\n\n  private static final Log logger = LogFactory.getLog(LinkisNewMicroserviceApplication.class);\n\n  public static void main(String[] args) throws ReflectiveOperationException {\n    logger.info("Start to running LinkisNewmicroserviceApplication");\n    LinkisBaseServerApp.main(args);\n  }\n}\n')),(0,a.kt)("h3",{id:"13-start-eureka-service"},"1.3 Start eureka service"),(0,a.kt)("p",null,"The specific guidelines for this step have been written in the ",(0,a.kt)("a",{parentName:"p",href:"../development/debug"},"Debugging Guidelines")," document and can be directly accessed, so I won\u2019t introduce too much here"),(0,a.kt)("h3",{id:"14-start-the-new-microservice-locally"},"1.4 Start the new microservice locally"),(0,a.kt)("p",null,"Set the startup Application of linkis-new-microservice"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"commissioning-service",src:n(43610).Z,width:"1446",height:"584"})),(0,a.kt)("p",null,"parameter explanation\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-new-microservice\n\n[Module Name]\nlinkis-new-microservice\n\n[VM Opitons]\n-DserviceName=linkis-new-microservice -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.newmicroservice.server.LinkisNewmicroserviceApplication\n\n[Add provided scope to classpath]\nBy checking Include dependencies with \u201cProvided\u201d scope, you can introduce provided-level dependency packages during debugging.\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After the above settings are completed, the Application can be run directly. After running successfully, open the browser and enter the url of the eureka registration center")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    http://ip:port/ \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-service",src:n(49992).Z,width:"1896",height:"352"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the linkis-new-microservice service appears in the eureka registration center, the local registration of the new microservice is successful.")),(0,a.kt)("h3",{id:"15-postman-for-interface-debugging"},"1.5 Postman for interface debugging"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://ip:port/api/rest_j/v1/newmicroservice/establish"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-test",src:n(65071).Z,width:"1699",height:"758"})),(0,a.kt)("h2",{id:"2-package-deployment"},"2. Package deployment"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Packaging and deployment mainly has two stages. The first step is that after the module is packaged by maven, the dependencies required by the module will be packaged into the corresponding target directory of the module linkis-new-microservice/target/out/lib.\nThe second step is to assemble the complete final deployment installation package, you need to automatically copy ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-new-microservice/target/out/lib")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/target/apache-linkis-x.x.x-incubating-bin/linkis - under package/lib"))),(0,a.kt)("h3",{id:"21-modify-the-distributionxml-under-the-new-service"},"2.1 Modify the distribution.xml under the new service"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-public-enhancements/linkis-new-microservice/src/main/assembly/distribution.xml"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-distribution",src:n(44792).Z,width:"1640",height:"530"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since there are many dependencies that need to be excluded, only part of the code is posted here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <excludes> \x3c!-- does not include --\x3e\n           <exclude>antlr:antlr:jar</exclude>\n           <exclude>aopalliance:aopalliance:jar</exclude>\n           <exclude>com.fasterxml.jackson.core:jackson-annotations:jar</exclude>\n           <exclude>com.fasterxml.jackson.core:jackson-core:jar</exclude>\n </excludes>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Here is an explanation of why you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"excludes"),", because the service startup script linkis-dist/package/sbin/ext/linkis-common-start generally loads the general lib by default")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"common-start",src:n(42591).Z,width:"863",height:"207"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Therefore, when packaging service dependencies, existing lib packages can be excluded. For details, please refer to linkis-computation-governance/linkis-entrance/src/main/assembly/distribution.xml")),(0,a.kt)("h3",{id:"22-modify-distributionxml-under-linkis-dist"},"2.2 Modify distribution.xml under linkis-dist"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/src/main/assembly/distribution.xml"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add fileSet configuration, changing the configuration is mainly to control the output linkis-new-microservice service package when compiling and packaging")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fileset",src:n(16495).Z,width:"1033",height:"403"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only the configuration content that needs to be added is posted here.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"   <fileSet>\n            <directory>\n                ../linkis-public-enhancements/linkis-new-microservice/target/out/lib\n            </directory>\n            <outputDirectory>\n                linkis-package/lib/linkis-public-enhancements/linkis-new-microservice\n            </outputDirectory>\n            <includes>\n                <include>**/*</include>\n            </includes>\n   </fileSet>\n\n")),(0,a.kt)("h3",{id:"23-run-configuration-script-for-the-service"},"2.3 Run configuration script for the service"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-configuration",src:n(26593).Z,width:"1633",height:"582"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\n#!/usr/bin/env bash\n#\n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n# http://www.apache.org/licenses/LICENSE-2.0\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n# description:  manager start cmd\n#\n# Modified for Linkis 1.0.0\n\n\nexport SERVER_SUFFIX="linkis-public-enhancements/linkis-new-microservice"\n\n\nexport SERVER_CLASS=org.apache.linkis.newmicroservice.server.LinkisNewMicroserviceApplication\n\n#export DEBUG_PORT=\n\nexport COMMON_START_BIN=$LINKIS_HOME/sbin/ext/linkis-common-start\nif [[ ! -f "${COMMON_START_BIN}" ]]; then\n    echo "The $COMMON_START_BIN  does not exist!"\n    exit 1\nelse\n    sh $COMMON_START_BIN\nfi\n\n')),(0,a.kt)("h3",{id:"24-linkis-start-allsh-configuration-modification"},"2.4 linkis-start-all.sh configuration modification"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/sbin/linkis-start-all.sh"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"start-script",src:n(21).Z,width:"1032",height:"365"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only the configuration content that needs to be added is posted here.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ## startApp\n    #linkis-new-microservice\n    SERVER_NAME="new-microservice" \n    startApp\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"detection-script",src:n(73504).Z,width:"926",height:"347"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only the configuration content that needs to be added is posted here.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ##checkServer\n    #linkis-new-microservice\n    SERVER_NAME="new-microservice"\n    checkServer\n')),(0,a.kt)("h3",{id:"25-linkis-stop-allsh-configuration-modification"},"2.5 linkis-stop-all.sh configuration modification"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),":linkis-dist/package/sbin/linkis-stop-all.sh"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stop-script",src:n(9713).Z,width:"821",height:"247"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only the configuration content that needs to be added is posted here.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ## stopApp\n    #linkis-new-microservice\n    export SERVER_NAME="new-microservice"\n    stopApp\n')),(0,a.kt)("h3",{id:"26-installation-package-preparation"},"2.6 Installation package preparation"),(0,a.kt)("p",null,"The specific guidelines for this step have been written in the ",(0,a.kt)("a",{parentName:"p",href:"../development/build"},"backend compilation")," document and can be directly accessed, so I won\u2019t introduce too much here"),(0,a.kt)("h3",{id:"27-server-deployment"},"2.7 Server Deployment"),(0,a.kt)("p",null,"Here is an example of single-machine deployment, and the specific guidance of this step has been written in the ",(0,a.kt)("a",{parentName:"p",href:"../deployment/deploy-quick"},"Single-machine deployment")," document and can be accessed directly, so I won\u2019t introduce it here"),(0,a.kt)("p",null,"After the installation and deployment is successful, you can directly visit the eureka registration center in the browser to see if the center has successfully registered the linkis-new-microservice service. If the registration is successful, the creation of a new microservice is successful."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-service",src:n(49992).Z,width:"1896",height:"352"})))}u.isMDXComponent=!0},43610:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/commissioning-service-5ee70b1a31fad5ecb05a50ada0852b12.png"},42591:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/common-start-95438e917ec8cbf685cb7fba1e3cf438.png"},95926:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/created-successfully-38e7252c58c83c84c7d68b9f191f211a.png"},73504:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/detection-script-5c4fafb9b4781587f8b1c434f92d76b0.png"},16495:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fileset-a5d335bf41188bfa1a893bf6fa6fb29c.png"},31064:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/maven-module-7c2c3c86d5321174cd0278a3de25b263.png"},50041:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/name-module-e405c145aa474f6467127afcd1816ccb.png"},26593:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-configuration-15c913176102e31b92bbb10105387c35.png"},44792:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-distribution-fcbc548f2892449c926e270afd2e4284.png"},16175:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-microservice-04ed07325802304105f72dc8510543df.png"},15931:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-module-26e83fefad1f10a0a966d67e1b9e7393.png"},49992:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-service-46a3f18549b7350fe0256802e49b7d8b.png"},65071:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/postman-test-9b60f0c78b3633bbda057e7b3b98e730.png"},21:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-script-6f906207540e8a3734a626fa17fe6096.png"},93226:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-up-e88d28789d35a7f7b150b11e8fddeef6.png"},9713:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/stop-script-733ebc978f613ddcea3c70d0584176fd.png"},68625:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/test-mode-163484aba071f98ed856ee156166bb7f.png"},54985:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/thinking-948d34864381dc87fee7be4172d45f0f.png"}}]);