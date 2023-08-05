"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9027],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>_});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),o=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(a),c=i,_=k["".concat(s,".").concat(c)]||k[c]||u[c]||r;return a?t.createElement(_,l(l({ref:n},d),{},{components:a})):t.createElement(_,l({ref:n},d))}));function _(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[k]="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93085:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=a(87462),i=(a(67294),a(3905));const r={title:"Spark",sidebar_position:1},l=void 0,p={unversionedId:"engine-usage/spark",id:"version-1.4.0/engine-usage/spark",title:"Spark",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c Spark \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/engine-usage/spark.md",sourceDirName:"engine-usage",slug:"/engine-usage/spark",permalink:"/zh-CN/docs/latest/engine-usage/spark",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/engine-usage/spark.md",tags:[],version:"1.4.0",sidebarPosition:1,frontMatter:{title:"Spark",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/engine-usage/overview"},next:{title:"Hive",permalink:"/zh-CN/docs/latest/engine-usage/hive"}},s={},o=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u5f15\u64ce\u5b89\u88c5",id:"11-\u5f15\u64ce\u5b89\u88c5",level:3},{value:"1.2 \u73af\u5883\u9a8c\u8bc1",id:"12-\u73af\u5883\u9a8c\u8bc1",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 \u9ed8\u8ba4\u5f15\u64ce",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce",level:2},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.2 \u901a\u8fc7 <code>Linkis SDK</code> \u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.3 \u901a\u8fc7\u63d0\u4ea4jar\u5305\u6267\u884c\u4efb\u52a1",id:"33-\u901a\u8fc7\u63d0\u4ea4jar\u5305\u6267\u884c\u4efb\u52a1",level:3},{value:"3.4 \u901a\u8fc7 Restful API \u63d0\u4ea4\u4efb\u52a1",id:"34-\u901a\u8fc7-restful-api-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"4.\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2},{value:"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",level:3},{value:"4.2 \u961f\u5217\u8d44\u6e90\u914d\u7f6e",id:"42-\u961f\u5217\u8d44\u6e90\u914d\u7f6e",level:3},{value:"4.3 \u914d\u7f6e\u4fee\u6539",id:"43-\u914d\u7f6e\u4fee\u6539",level:3},{value:"4.3.1 \u7ba1\u7406\u53f0\u914d\u7f6e",id:"431-\u7ba1\u7406\u53f0\u914d\u7f6e",level:4},{value:"4.3.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"432-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4},{value:"4.4 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",id:"44-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",level:3}],d={toc:o},k="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(k,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,i.kt)("h3",{id:"11-\u5f15\u64ce\u5b89\u88c5"},"1.1 \u5f15\u64ce\u5b89\u88c5"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPARK_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528anaconda\u7684python\u4f5c\u4e3a\u9ed8\u8ba4python")))),(0,i.kt)("h3",{id:"12-\u73af\u5883\u9a8c\u8bc1"},"1.2 \u73af\u5883\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"pyspark")," \u9a8c\u8bc1 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pyspark\n\n#\u8fdb\u5165pyspark\u865a\u62df\u73af\u5883\u540e\uff0c\u51fa\u73b0spark\u7684logo\u5219\u8bf4\u660e\u73af\u5883\u5b89\u88c5\u6210\u529f\nWelcome to\n      ____              __\n     / __/__  ___ _____/ /__\n    _\\ \\/ _ \\/ _ `/ __/  '_/\n   /__ / .__/\\_,_/_/ /_/\\_\\   version 3.2.1\n      /_/\n\nUsing Python version 2.7.13 (default, Sep 30 2017 18:12:43)\nSparkSession available as 'spark'.\n")),(0,i.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"h2",href:"/zh-CN/docs/latest/engine-usage/overview"},"\u9ed8\u8ba4\u5f15\u64ce")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u53d1\u5e03\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u4e2d\u9ed8\u8ba4\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u5f15\u64ce\u63d2\u4ef6\uff0c\u7528\u6237\u65e0\u9700\u989d\u5916\u5b89\u88c5\u3002"),(0,i.kt)("p",null,"\u7406\u8bba\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u652f\u6301\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark2.x")," \u4ee5\u4e0a\u7684\u6240\u6709\u7248\u672c\u3002\u9ed8\u8ba4\u652f\u6301\u7684\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark3.2.1")," \u3002\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u5176\u4ed6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u7248\u672c\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark2.1.0")," \uff0c\u5219\u60a8\u4ec5\u4ec5\u9700\u8981\u5c06\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u7684\u7248\u672c\u8fdb\u884c\u4fee\u6539\uff0c\u7136\u540e\u8fdb\u884c\u7f16\u8bd1\u5373\u53ef\u3002\u5177\u4f53\u7684\uff0c\u60a8\u53ef\u4ee5\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-engineplugin-spark")," \u6a21\u5757\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," \u4f9d\u8d56\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"<spark.version>")," \u6807\u7b7e\u7684\u503c\u6539\u6210 2.1.0 \uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/deployment/install-engineconn"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,i.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# codeType\u5bf9\u5e94\u5173\u7cfb py--\x3epyspark  sql--\x3esparkSQL scala--\x3eSpark scala\nsh ./bin/linkis-cli -engineType spark-3.2.1 -codeType sql -code "show databases"  -submitUser hadoop -proxyUser hadoop\n\n# \u53ef\u4ee5\u5728\u63d0\u4ea4\u53c2\u6570\u901a\u8fc7-confMap wds.linkis.yarnqueue=dws  \u6765\u6307\u5b9ayarn \u961f\u5217\nsh ./bin/linkis-cli -engineType spark-3.2.1 -codeType sql  -confMap wds.linkis.yarnqueue=dws -code "show databases"  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,i.kt)("h3",{id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis SDK")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Demo")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-3.2.1"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "sql"); // required codeType py,sql,scala\n')),(0,i.kt)("p",null,"Spark\u8fd8\u652f\u6301\u63d0\u4ea4Scala\u4ee3\u7801\u548cPyspark\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n//scala \nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "scala");\ncode:\nval df=spark.sql("show tables")\nshow(df)        \n//pyspark\n/labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py");\ncode:\ndf=spark.sql("show tables")\nshow(df)\n')),(0,i.kt)("h3",{id:"33-\u901a\u8fc7\u63d0\u4ea4jar\u5305\u6267\u884c\u4efb\u52a1"},"3.3 \u901a\u8fc7\u63d0\u4ea4jar\u5305\u6267\u884c\u4efb\u52a1"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnceEngineConn")," \u63d0\u4ea4\u4efb\u52a1\uff08\u901a\u8fc7 spark-submit \u63d0\u4ea4 jar \u5305\u6267\u884c\u4efb\u52a1\uff09\uff0c\u63d0\u4ea4\u65b9\u5f0f\u53c2\u8003 ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.computation.client.SparkOnceJobTest")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SparkOnceJobTest {\n\n    public static void main(String[] args)  {\n\n        LinkisJobClient.config().setDefaultServerUrl("http://127.0.0.1:9001");\n\n        String submitUser = "linkis";\n        String engineType = "spark";\n\n        SubmittableSimpleOnceJob onceJob =\n                // region\n                LinkisJobClient.once().simple().builder()\n                        .setCreateService("Spark-Test")\n                        .setMaxSubmitTime(300000)\n                        .setDescription("SparkTestDescription")\n                        .addExecuteUser(submitUser)\n                        .addJobContent("runType", "jar")\n                        .addJobContent("spark.app.main.class", "org.apache.spark.examples.JavaWordCount")\n                        // \u63d0\u4ea4\u7684jar\u5305\u83b7\u53d6\u7684\u53c2\u6570\n                        .addJobContent("spark.app.args", "hdfs:///tmp/test_word_count.txt") // WordCount \u6d4b\u8bd5\u6587\u4ef6\n                        .addLabel("engineType", engineType + "-2.4.7")\n                        .addLabel("userCreator", submitUser + "-IDE")\n                        .addLabel("engineConnMode", "once")\n                        .addStartupParam("spark.app.name", "spark-submit-jar-test-linkis") // yarn\u4e0a\u5c55\u793a\u7684 Application Name\n                        .addStartupParam("spark.executor.memory", "1g")\n                        .addStartupParam("spark.driver.memory", "1g")\n                        .addStartupParam("spark.executor.cores", "1")\n                        .addStartupParam("spark.executor.instance", "1")\n                        .addStartupParam("spark.app.resource", "hdfs:///tmp/spark/spark-examples_2.11-2.3.0.2.6.5.0-292.jar")\n                        .addSource("jobName", "OnceJobTest")\n                        .build();\n        // endregion\n        onceJob.submit();\n        onceJob.waitForCompleted(); // \u7f51\u7edc\u4e34\u65f6\u4e0d\u901a\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff0c\u5efa\u8bae\u540e\u671f\u4fee\u6539 SDK\uff0c\u73b0\u9636\u6bb5\u4f7f\u7528\uff0c\u9700\u8981\u505a\u5f02\u5e38\u5904\u7406\n        // \u7f51\u7edc\u4e34\u65f6\u4e0d\u901a\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff0c\u5efa\u8bae\u540e\u671f\u4fee\u6539 SDK\uff0c\u73b0\u9636\u6bb5\u4f7f\u7528\uff0c\u9700\u8981\u505a\u5f02\u5e38\u5904\u7406\n        onceJob.waitForCompleted();\n    }\n}\n')),(0,i.kt)("h3",{id:"34-\u901a\u8fc7-restful-api-\u63d0\u4ea4\u4efb\u52a1"},"3.4 \u901a\u8fc7 Restful API \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,"\u8fd0\u884c\u811a\u672c\u7c7b\u578b\u5305\u62ec ",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"scala"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"python"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"data_calc(\u683c\u5f0f\u4e3ajson)"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/api/linkis-task-operator"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884cRestful API\u6587\u6863")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /api/rest_j/v1/entrance/submit\nContent-Type: application/json\nToken-Code: dss-AUTH\nToken-User: linkis\n\n{\n    "executionContent": {\n        // \u811a\u672c\u5185\u5bb9\uff0c\u53ef\u4ee5\u662fsql\uff0cpython\uff0cscala\uff0cjson\n        "code": "show databases",\n        // \u8fd0\u884c\u7684\u811a\u672c\u7c7b\u578b sql, py\uff08pyspark\uff09, scala, data_calc\n        "runType": "sql"\n    },\n    "params": {\n        "variable": {\n        },\n        "configuration": {\n            // spark \u542f\u52a8\u53c2\u6570\uff0c\u975e\u5fc5\u586b\n            "startup": {\n                "spark.executor.memory": "1g",\n                "spark.driver.memory": "1g",\n                "spark.executor.cores": "1",\n                "spark.executor.instances": 1\n            }\n        }\n    },\n    "source":  {\n        // \u975e\u5fc5\u586b\uff0cfile:/// \u6216\u8005 hdfs:///\n        "scriptPath": "file:///tmp/hadoop/test.sql"\n    },\n    "labels": {\n        // \u683c\u5f0f\u4e3a\uff1a\u5f15\u64ce\u7c7b\u578b-\u7248\u672c\n        "engineType": "spark-3.2.1",\n        // userCreator: linkis \u4e3a\u7528\u6237\u540d\u3002IDE \u662f\u7cfb\u7edf\u540d\uff0c\u5728 Linkis \u540e\u53f0\u7ba1\u7406\u3002\n        "userCreator": "linkis-IDE"\n    }\n}\n')),(0,i.kt)("h2",{id:"4\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4.\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("h3",{id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.rm.instance"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spark.executor.cores"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"spark\u6267\u884c\u5668\u6838\u5fc3\u4e2a\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spark.driver.memory"),(0,i.kt)("td",{parentName:"tr",align:null},"1g"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"spark\u6267\u884c\u5668\u5b9e\u4f8b\u6700\u5927\u5e76\u53d1\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spark.executor.memory"),(0,i.kt)("td",{parentName:"tr",align:null},"1g"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"spark\u6267\u884c\u5668\u5185\u5b58\u5927\u5c0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.max.free.time"),(0,i.kt)("td",{parentName:"tr",align:null},"1h"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7a7a\u95f2\u9000\u51fa\u65f6\u95f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spark.python.version"),(0,i.kt)("td",{parentName:"tr",align:null},"python2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"python\u7248\u672c")))),(0,i.kt)("h3",{id:"42-\u961f\u5217\u8d44\u6e90\u914d\u7f6e"},"4.2 \u961f\u5217\u8d44\u6e90\u914d\u7f6e"),(0,i.kt)("p",null,"\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u4efb\u52a1\u7684\u6267\u884c\u9700\u8981\u961f\u5217\u7684\u8d44\u6e90\uff0c\u987b\u8981\u8bbe\u7f6e\u81ea\u5df1\u80fd\u591f\u6267\u884c\u7684\u961f\u5217\u3002    "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yarn",src:a(20048).Z,width:"1296",height:"556"})," "),(0,i.kt)("h3",{id:"43-\u914d\u7f6e\u4fee\u6539"},"4.3 \u914d\u7f6e\u4fee\u6539"),(0,i.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,i.kt)("h4",{id:"431-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.3.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u4f1a\u8bdd ",(0,i.kt)("inlineCode",{parentName:"p"},"executor")," \u4e2a\u6570\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"executor")," \u7684\u5185\u5b58\u3002\u8fd9\u4e9b\u53c2\u6570\u662f\u4e3a\u4e86\u7528\u6237\u80fd\u591f\u66f4\u52a0\u81ea\u7531\u5730\u8bbe\u7f6e\u81ea\u5df1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"spark")," \u7684\u53c2\u6570\uff0c\u53e6\u5916 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," \u5176\u4ed6\u53c2\u6570\u4e5f\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\uff0c\u6bd4\u5982\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"pyspark")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," \u7248\u672c\u7b49\u3002\n",(0,i.kt)("img",{alt:"spark",src:a(25154).Z,width:"1578",height:"851"})),(0,i.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE")," \u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE \\\n-engineType spark-3.2.1 -codeType sql \\\n-code "show databases"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("h4",{id:"432-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.3.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,i.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show databases;", "runType":  "sql"},\n    "params": {\n        "variable": {},\n        "configuration": {\n            "runtime": {\n                "wds.linkis.rm.instance":"10"\n            }\n        }\n    },\n    "labels": {\n        "engineType": "spark-3.2.1",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("h3",{id:"44-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"},"4.4 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1aspark-3.2.1\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,i.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @SPARK_LABEL=\"spark-3.2.1\";\nSET @SPARK_ALL=CONCAT('*-*,',@SPARK_LABEL);\nSET @SPARK_IDE=CONCAT('*-IDE,',@SPARK_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @SPARK_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @SPARK_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @SPARK_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'spark\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570', '10', 'NumInterval', '[1,20]', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.executor.instances', '\u53d6\u503c\u8303\u56f4\uff1a1-40\uff0c\u5355\u4f4d\uff1a\u4e2a', 'spark\u6267\u884c\u5668\u5b9e\u4f8b\u6700\u5927\u5e76\u53d1\u6570', '1', 'NumInterval', '[1,40]', '0', '0', '2', 'spark\u8d44\u6e90\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.executor.cores', '\u53d6\u503c\u8303\u56f4\uff1a1-8\uff0c\u5355\u4f4d\uff1a\u4e2a', 'spark\u6267\u884c\u5668\u6838\u5fc3\u4e2a\u6570',  '1', 'NumInterval', '[1,8]', '0', '0', '1','spark\u8d44\u6e90\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.executor.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-15\uff0c\u5355\u4f4d\uff1aG', 'spark\u6267\u884c\u5668\u5185\u5b58\u5927\u5c0f', '1g', 'Regex', '^([1-9]|1[0-5])(G|g)$', '0', '0', '3', 'spark\u8d44\u6e90\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.driver.cores', '\u53d6\u503c\u8303\u56f4\uff1a\u53ea\u80fd\u53d61\uff0c\u5355\u4f4d\uff1a\u4e2a', 'spark\u9a71\u52a8\u5668\u6838\u5fc3\u4e2a\u6570', '1', 'NumInterval', '[1,1]', '0', '1', '1', 'spark\u8d44\u6e90\u8bbe\u7f6e','spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.driver.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-15\uff0c\u5355\u4f4d\uff1aG', 'spark\u9a71\u52a8\u5668\u5185\u5b58\u5927\u5c0f','1g', 'Regex', '^([1-9]|1[0-5])(G|g)$', '0', '0', '1', 'spark\u8d44\u6e90\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.max.free.time', '\u53d6\u503c\u8303\u56f4\uff1a3m,15m,30m,1h,2h', '\u5f15\u64ce\u7a7a\u95f2\u9000\u51fa\u65f6\u95f4','1h', 'OFT', '[\\\"1h\\\",\\\"2h\\\",\\\"30m\\\",\\\"15m\\\",\\\"3m\\\"]', '0', '0', '1', 'spark\u5f15\u64ce\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.tispark.pd.addresses', NULL, NULL, 'pd0:2379', 'None', NULL, '0', '0', '1', 'tidb\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.tispark.tidb.addr', NULL, NULL, 'tidb', 'None', NULL, '0', '0', '1', 'tidb\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.tispark.tidb.password', NULL, NULL, NULL, 'None', NULL, '0', '0', '1', 'tidb\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.tispark.tidb.port', NULL, NULL, '4000', 'None', NULL, '0', '0', '1', 'tidb\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.tispark.tidb.user', NULL, NULL, 'root', 'None', NULL, '0', '0', '1', 'tidb\u8bbe\u7f6e', 'spark');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('spark.python.version', '\u53d6\u503c\u8303\u56f4\uff1apython2,python3', 'python\u7248\u672c','python2', 'OFT', '[\\\"python3\\\",\\\"python2\\\"]', '0', '0', '1', 'spark\u5f15\u64ce\u8bbe\u7f6e', 'spark');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'spark' and label.label_value = @SPARK_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @SPARK_ALL);\n\n")))}u.isMDXComponent=!0},25154:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/spark-conf-87cd546b45f350e09ae728475573f200.png"},20048:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/yarn-conf-395feb3695fdbf71df62544d5df21ad3.png"}}]);