"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17270],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=o(n),c=l,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(k,p(p({ref:e},u),{},{components:n})):a.createElement(k,p({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[s]="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58997:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"\u6839\u636e\u6570\u636e\u6e90\u751f\u6210SQL",sidebar_position:.5},p=void 0,i={unversionedId:"feature/datasource-generate-sql",id:"version-1.4.0/feature/datasource-generate-sql",title:"\u6839\u636e\u6570\u636e\u6e90\u751f\u6210SQL",description:"1. \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/feature/datasource-generate-sql.md",sourceDirName:"feature",slug:"/feature/datasource-generate-sql",permalink:"/zh-CN/docs/latest/feature/datasource-generate-sql",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/feature/datasource-generate-sql.md",tags:[],version:"1.4.0",sidebarPosition:.5,frontMatter:{title:"\u6839\u636e\u6570\u636e\u6e90\u751f\u6210SQL",sidebar_position:.5},sidebar:"tutorialSidebar",previous:{title:"\u652f\u6301 spark ETL \u6570\u636e\u540c\u6b65",permalink:"/zh-CN/docs/latest/feature/spark-etl"},next:{title:"\u5176\u5b83\u7279\u6027\u8bf4\u660e",permalink:"/zh-CN/docs/latest/feature/other"}},d={},o=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:2},{value:"2. \u4f7f\u7528\u8bf4\u660e",id:"2-\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u751f\u6210SparkSQL",id:"\u751f\u6210sparksql",level:3},{value:"\u751f\u6210JdbcSQL",id:"\u751f\u6210jdbcsql",level:3},{value:"3. \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",level:2},{value:"4. \u5b9e\u73b0\u539f\u7406",id:"4-\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u751f\u6210SparkSQL\u5b9e\u73b0\u539f\u7406",id:"\u751f\u6210sparksql\u5b9e\u73b0\u539f\u7406",level:3},{value:"\u751f\u6210JdbcSQL\u5b9e\u73b0\u539f\u7406",id:"\u751f\u6210jdbcsql\u5b9e\u73b0\u539f\u7406",level:3}],u={toc:o},s="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,l.kt)("p",null,"\u6839\u636e\u6570\u636e\u6e90\u4fe1\u606f\u751f\u6210 SparkSQL \u548c JdbcSQL\uff0c\u5305\u542bDDL\u3001DML\u3001DQL\u3002"),(0,l.kt)("h2",{id:"2-\u4f7f\u7528\u8bf4\u660e"},"2. \u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u751f\u6210sparksql"},"\u751f\u6210SparkSQL"),(0,l.kt)("p",null,"\u63a5\u53e3\u5730\u5740\uff1a/api/rest_j/v1/metadataQuery/getSparkSql"),(0,l.kt)("p",null,"\u8bf7\u6c42\u65b9\u5f0f\uff1aGET"),(0,l.kt)("p",null,"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b\uff1aapplication/x-www-form-urlencoded"),(0,l.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataSourceName")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"system")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")))),(0,l.kt)("p",null,"\u54cd\u5e94\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "sparkSql": {\n            "ddl": "CREATE TEMPORARY TABLE test USING org.apache.spark.sql.jdbc OPTIONS (  url \'jdbc:mysql://localhost:3306/test\',  dbtable \'test\',  user \'root\',  password \'password\')",\n            "dml": "INSERT INTO test SELECT * FROM ${resultTable}",\n            "dql": "SELECT id,name FROM test"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u76ee\u524d\u652f\u6301jdbc\u3001kafka\u3001elasticsearch\u3001mongo \u6570\u636e\u6e90\uff0c\u53ef\u4ee5\u6839\u636eSparkSQLDDL\u6ce8\u518c spark table \u8fdb\u884c\u67e5\u8be2"),(0,l.kt)("h3",{id:"\u751f\u6210jdbcsql"},"\u751f\u6210JdbcSQL"),(0,l.kt)("p",null,"\u63a5\u53e3\u5730\u5740\uff1a/api/rest_j/v1/metadataQuery/getJdbcSql"),(0,l.kt)("p",null,"\u8bf7\u6c42\u65b9\u5f0f\uff1aGET"),(0,l.kt)("p",null,"\u8bf7\u6c42\u6570\u636e\u7c7b\u578b\uff1aapplication/x-www-form-urlencoded"),(0,l.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dataSourceName")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"system")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"String")))),(0,l.kt)("p",null,"\u54cd\u5e94\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": null,\n    "status": 0,\n    "message": "OK",\n    "data": {\n        "jdbcSql": {\n            "ddl": "CREATE TABLE `test` (\\n\\t  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT \'\u5217\u540d\u662fid\',\\n\\t  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT \'\u5217\u540d\u662fname\',\\n\\t  PRIMARY KEY (`id`)\\n\\t) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci",\n            "dml": "INSERT INTO test SELECT * FROM ${resultTable}",\n            "dql": "SELECT id,name FROM test"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u76ee\u524d\u652f\u6301 JDBC \u6570\u636e\u6e90\uff0c\u5982\uff1amysql\u3001oracle\u3001postgres\u7b49\uff0cJdbcSQLDDL\u53ef\u4ee5\u7528\u4e8e\u524d\u7aef\u5c55\u793a\u3002"),(0,l.kt)("h2",{id:"3-\u6ce8\u610f\u4e8b\u9879"},"3. \u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u5148\u6ce8\u518c\u6570\u636e\u6e90")),(0,l.kt)("h2",{id:"4-\u5b9e\u73b0\u539f\u7406"},"4. \u5b9e\u73b0\u539f\u7406"),(0,l.kt)("h3",{id:"\u751f\u6210sparksql\u5b9e\u73b0\u539f\u7406"},"\u751f\u6210SparkSQL\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("p",null,"\u5b9a\u4e49DDL_SQL_TEMPLATE,\u83b7\u53d6\u6570\u636e\u6e90\u4fe1\u606f\u8fdb\u884c\u66ff\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'  public static final String JDBC_DDL_SQL_TEMPLATE =\n        "CREATE TEMPORARY TABLE %s "\n        + "USING org.apache.spark.sql.jdbc "\n        + "OPTIONS ("\n        + "  url \'%s\',"\n        + "  dbtable \'%s\',"\n        + "  user \'%s\',"\n        + "  password \'%s\'"\n        + ")";\n')),(0,l.kt)("h3",{id:"\u751f\u6210jdbcsql\u5b9e\u73b0\u539f\u7406"},"\u751f\u6210JdbcSQL\u5b9e\u73b0\u539f\u7406"),(0,l.kt)("p",null,"\u6839\u636e\u8868schema\u4fe1\u606f\u62fc\u63a5DDL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public String generateJdbcDdlSql(String database, String table) {\n    StringBuilder ddl = new StringBuilder();\n    ddl.append("CREATE TABLE ").append(String.format("%s.%s", database, table)).append(" (");\n\n    try {\n        List < MetaColumnInfo > columns = getColumns(database, table);\n        if (CollectionUtils.isNotEmpty(columns)) {\n            for (MetaColumnInfo column: columns) {\n                ddl.append("\\n\\t").append(column.getName()).append(" ").append(column.getType());\n                if (column.getLength() > 0) {\n                    ddl.append("(").append(column.getLength()).append(")");\n                }\n                if (!column.isNullable()) {\n                    ddl.append(" NOT NULL");\n                }\n                ddl.append(",");\n            }\n            String primaryKeys =\n                columns.stream()\n                .filter(MetaColumnInfo::isPrimaryKey)\n                .map(MetaColumnInfo::getName)\n                .collect(Collectors.joining(", "));\n            if (StringUtils.isNotBlank(primaryKeys)) {\n                ddl.append(String.format("\\n\\tPRIMARY KEY (%s),", primaryKeys));\n            }\n            ddl.deleteCharAt(ddl.length() - 1);\n        }\n    } catch (Exception e) {\n        LOG.warn("Fail to get Sql columns(\u83b7\u53d6\u5b57\u6bb5\u5217\u8868\u5931\u8d25)");\n    }\n\n    ddl.append("\\n)");\n\n    return ddl.toString();\n}\n')),(0,l.kt)("p",null,"\u90e8\u5206\u6570\u636e\u6e90\u652f\u6301\u76f4\u63a5\u83b7\u53d6DDL"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"mysql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE 'table'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"oracle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DBMS_METADATA.GET_DDL('TABLE', 'table', 'database') AS DDL  FROM DUAL\n")))}m.isMDXComponent=!0}}]);