"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Task JDBC API",sidebar_position:4},o="Task Submission And Execution Of JDBC API",s={unversionedId:"api/jdbc-api",id:"version-1.2.0/api/jdbc-api",title:"Task JDBC API",description:"1. Introduce Dependent Modules",source:"@site/versioned_docs/version-1.2.0/api/jdbc-api.md",sourceDirName:"api",slug:"/api/jdbc-api",permalink:"/docs/1.2.0/api/jdbc-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/api/jdbc-api.md",tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{title:"Task JDBC API",sidebar_position:4},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Task Submission and Execution Rest Api",permalink:"/docs/1.2.0/api/linkis-task-operator"},next:{title:"DataSource Api",permalink:"/docs/1.2.0/api/http/linkis-ps-publicservice-api/data-source-manager-api"}},c={},p=[{value:"1. Introduce Dependent Modules",id:"1-introduce-dependent-modules",level:3},{value:"2. Create A Test Category",id:"2-create-a-test-category",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"task-submission-and-execution-of-jdbc-api"},"Task Submission And Execution Of JDBC API"),(0,r.kt)("h3",{id:"1-introduce-dependent-modules"},"1. Introduce Dependent Modules"),(0,r.kt)("p",null,"The first way depends on the JDBC module in the pom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-jdbc-driver</artifactId>\n    <version>${linkis.version}</version>\n </dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The module has not been deployed to the central repository. You need to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn install -Dmaven.test.skip=true")," in the linkis-computation-governance/linkis-jdbc-driver directory for local installation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The second way is through packaging and compilation:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter the linkis-jdbc-driver directory in the Linkis project and enter the command in the terminal to package ",(0,r.kt)("inlineCode",{parentName:"li"},"mvn assembly:assembly -Dmaven.test.skip=true"),"\nThe packaging instruction skips the running of the unit test and the compilation of the test code, and packages the dependencies required by the JDBC module into the Jar package."),(0,r.kt)("li",{parentName:"ol"},"After the packaging is complete, two Jar packages will be generated in the target directory of JDBC. The one with dependencies in the Jar package name is the Jar package we need.")),(0,r.kt)("h3",{id:"2-create-a-test-category"},"2. Create A Test Category"),(0,r.kt)("p",null,"Establish a Java test class LinkisJDBCTest, the specific interface meaning can be seen in the notes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.jdbc.test;\n\nimport java.sql.*;\n\npublic class LinkisJDBCTest {\n\n    public static void main(String[] args) throws SQLException, ClassNotFoundException {\n\n        //1. load driver\uff1aorg.apache.linkis.ujes.jdbc.UJESSQLDriver\n        Class.forName("org.apache.linkis.ujes.jdbc.UJESSQLDriver");\n\n        //2. Get Connection\uff1ajdbc:linkis://gatewayIP:gatewayPort/dbName?EngineType=hive&creator=test, user/password   \n        Connection connection =  DriverManager.getConnection("jdbc:linkis://10.107.118.104:9001/default?EngineType=hive&creator=test","hadoop","hadoop");\n        //3. Create statement \n        Statement st= connection.createStatement();\n        ResultSet rs=st.executeQuery("show tables");\n        //4.get result\n        while (rs.next()) {\n            ResultSetMetaData metaData = rs.getMetaData();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                System.out.print(metaData.getColumnName(i) + ":" +metaData.getColumnTypeName(i)+": "+ rs.getObject(i) + "    ");\n            }\n            System.out.println();\n        }\n        //close resource\n        rs.close();\n        st.close();\n        connection.close();\n    }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Where EngineType is the specified corresponding engine type: supports Spark/hive/presto/shell, etc."),(0,r.kt)("li",{parentName:"ol"},"Creator is the specified corresponding application type, which is used for resource isolation between applications")))}d.isMDXComponent=!0}}]);