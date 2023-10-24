"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[9224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Puller Http"},l="JOD Worker Puller Http",i={unversionedId:"jod/specs/workers/puller_http",id:"jod/specs/workers/puller_http",title:"Puller Http",description:"Each `freq` seconds, this puller performs the HTTP Request defined via HTTP Request configs , then update the JOD State.",source:"@site/3_references/1_josp/1_jod/4_specs/6_workers/puller_http.mdx",sourceDirName:"1_jod/4_specs/6_workers",slug:"/jod/specs/workers/puller_http",permalink:"/references/josp/jod/specs/workers/puller_http",draft:!1,tags:[],version:"current",frontMatter:{title:"Puller Http"},sidebar:"referencesSidebar",previous:{title:"Listener File",permalink:"/references/josp/jod/specs/workers/listener_file"},next:{title:"Puller Shell",permalink:"/references/josp/jod/specs/workers/puller_shell"}},s={},p=[{value:"Firmware Configs - Puller",id:"firmware-configs---puller",level:2},{value:"<code>freq</code>",id:"freq",level:3},{value:"<code>cache_timeout</code>",id:"cache_timeout",level:3},{value:"Firmware Configs - HTTP Request",id:"firmware-configs---http-request",level:2},{value:"<code>requestUrl</code>",id:"requesturl",level:3},{value:"<code>requestVerb</code>",id:"requestverb",level:3},{value:"<code>requestTimeOut</code>",id:"requesttimeout",level:3},{value:"<code>requestIgnoreSSLHosts</code>",id:"requestignoresslhosts",level:3},{value:"<code>availabilityRetrySeconds</code>",id:"availabilityretryseconds",level:3},{value:"Firmware Configs - Formatter",id:"firmware-configs---formatter",level:2},{value:"<code>formatType</code>",id:"formattype",level:3},{value:"<code>formatPath</code>",id:"formatpath",level:3},{value:"<code>formatPathType</code>",id:"formatpathtype",level:3},{value:"Firmware Configs - Evaluator",id:"firmware-configs---evaluator",level:2},{value:"<code>eval</code>",id:"eval",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jod-worker-puller-http"},"JOD Worker Puller Http"),(0,n.kt)("p",null,"Each ",(0,n.kt)("inlineCode",{parentName:"p"},"freq")," seconds, this puller performs the HTTP Request defined via ",(0,n.kt)("a",{parentName:"p",href:"#firmware-configs---http-request"},"HTTP Request")," configs , then update the ",(0,n.kt)("a",{parentName:"p",href:"../pillars#state"},"JOD State"),"."),(0,n.kt)("p",null,"Before execute the request, the ",(0,n.kt)("inlineCode",{parentName:"p"},"requestUrl")," string is updated and all his placeholder are replaced with current ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar")," and ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#state"},"State")," properties.\nOnce executed the HTTP Request, his response body is ",(0,n.kt)("a",{parentName:"p",href:"#firmware-configs---formatter"},"formatted")," and ",(0,n.kt)("a",{parentName:"p",href:"#firmware-configs---evaluator"},"evaluated"),".\nFinally, the evaluated HTTP Response's body is passed as new Pillar's state, independently to the Pillar's type."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firmware-configs---puller"},"Firmware Configs - Puller"),(0,n.kt)("h3",{id:"freq"},(0,n.kt)("inlineCode",{parentName:"h3"},"freq")),(0,n.kt)("p",null,"Pulling frequency in seconds. By default '5'."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"cache_timeout"},(0,n.kt)("inlineCode",{parentName:"h3"},"cache_timeout")),(0,n.kt)("p",null,"Cache timeout in seconds. By default '30'."),(0,n.kt)("p",null,"Once a url is required by any instance of Puller Http worker, his response is retrained in a cache memory for ",(0,n.kt)("inlineCode",{parentName:"p"},"cache_timeout")," seconds.",(0,n.kt)("br",null),"\nFor all time a url's response is cached, all other request (from any HTTP Puller instance) to the same url recevie cached response.",(0,n.kt)("br",null),"\nThat prevent HTTP server overload, especially when multiple HTTP Puller workers get their value from the same web page or API method."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firmware-configs---http-request"},"Firmware Configs - HTTP Request"),(0,n.kt)("p",null,"HTTP Requests are performed using the ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospCommons/java/com/robypomper/josp/clients/DefaultHTTPClient.java"},"DefaultHTTPClient")," from the ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/references/josp/internal/josp_commons/"},"JOSP Commons")," library."),(0,n.kt)("p",null,"Following Firmware Configs allow you customize the request that must be perform on worker execution.",(0,n.kt)("br",null),"\nThose configs are defined and used by ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospJOD/java/com/robypomper/josp/jod/executor/impls/http/HTTPInternal.java"},"HTTPInternal")," class."),(0,n.kt)("h3",{id:"requesturl"},(0,n.kt)("inlineCode",{parentName:"h3"},"requestUrl")),(0,n.kt)("p",null,"The url used for the HTTP Request. ",(0,n.kt)("strong",{parentName:"p"},"It's mandatory.")),(0,n.kt)("p",null,"This string is used to format the final url for the HTTP Request.",(0,n.kt)("br",null),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"requestUrl")," string is updated during worker initialization and then each time the puller pulls for pillar state."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization and with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#state"},"State Placeholder")," on pulling state."),(0,n.kt)("h3",{id:"requestverb"},(0,n.kt)("inlineCode",{parentName:"h3"},"requestVerb")),(0,n.kt)("p",null,"The HTTP method to use for the HTTP Request. Default 'GET'."),(0,n.kt)("p",null,"This string can be one of the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'GET'"),(0,n.kt)("li",{parentName:"ul"},"'POST'"),(0,n.kt)("li",{parentName:"ul"},"'PUT'"),(0,n.kt)("li",{parentName:"ul"},"'DELETE'"),(0,n.kt)("li",{parentName:"ul"},"'HEAD'"),(0,n.kt)("li",{parentName:"ul"},"'OPTIONS'"),(0,n.kt)("li",{parentName:"ul"},"'TRACE'"),(0,n.kt)("li",{parentName:"ul"},"'PATCH'")),(0,n.kt)("p",null,"Those values are coming from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scribejava/scribejava"},"Scribe Java library"),"."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"requesttimeout"},(0,n.kt)("inlineCode",{parentName:"h3"},"requestTimeOut")),(0,n.kt)("p",null,"The HTTP Request's timeout in seconds. Default '30'."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"requestignoresslhosts"},(0,n.kt)("inlineCode",{parentName:"h3"},"requestIgnoreSSLHosts")),(0,n.kt)("p",null,"Set this string to 'True' to ignore \"SSL: Invalid Hostname\" error. Default 'false'."),(0,n.kt)("p",null,"If the HTTP Server that receive the HTTP Request is set to use the SSL encryption but his certificate or hostname are not valid."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"availabilityretryseconds"},(0,n.kt)("inlineCode",{parentName:"h3"},"availabilityRetrySeconds")),(0,n.kt)("p",null,"When the HTTP Server is not reachable, this property define how much seconds wait before retry contacting the server. Default '10'."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This property is not used in the Puller HTTP worker execution.")),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firmware-configs---formatter"},"Firmware Configs - Formatter"),(0,n.kt)("p",null,"Once an HTTP Request receive a response, the response's body is parsed and formatted depending on those Firmware Configs."),(0,n.kt)("p",null,"That means, the HTTP Responses bodies are parsed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"formatType")," format.\nThen can be extracted part of the response, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"formatPathType")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"formatPath")," configs.\nFinally, only the extracted string is used as Pillar's state."),(0,n.kt)("p",null,"To avoid any response alteration, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"TEXT")," value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"formatType")," config.\nThat will thread the HTTP Response Body as raw text and, all contents from the response body are used as Pillar's state."),(0,n.kt)("p",null,"Those configs are defined and used by ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospJOD/java/com/robypomper/josp/jod/executor/impls/http/FormatterInternal.java"},"FormatterInternal")," class."),(0,n.kt)("h3",{id:"formattype"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatType")),(0,n.kt)("p",null,"HTTP Response's body format. Default 'HTML'."),(0,n.kt)("p",null,"Please set this FirmwareConfigs according to the expected response type.",(0,n.kt)("br",null),"\nYou can choose one of the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TEXT"),": raw text response, this format do not alter the response body."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HTML"),": for HTML responses that can be queried with XPath expression or with a TagName (Not Yet Implemented)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"XML"),": for XML responses (Not Yet Implemented)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"JSON"),": for JSON responses that can be queried with JSONPath expression."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"YML"),": for YML responses (Not Yet Implemented).")),(0,n.kt)("p",null,"Those values are coming from the ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospJOD/java/com/robypomper/josp/jod/executor/impls/http/FormatterInternal.java#lines-247"},"FormatterInternal::FormatType")," enum."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"formatpath"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatPath")),(0,n.kt)("p",null,"Path used to query the HTTP Response, this value depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"formatPathType")," Firmware Config. Default '/'."),(0,n.kt)("p",null,"Please set this FirmwareConfigs according to the expected response type.",(0,n.kt)("br",null),"\nDepending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"formatPathType")," value you can use different path syntax:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"XPATH"),": an expression format to identify nodes in XML documents (",(0,n.kt)("a",{parentName:"li",href:"https://www.w3schools.com/xml/xpath_intro.asp"},"W3School tutorial"),", ",(0,n.kt)("a",{parentName:"li",href:"http://xpather.com/"},"XPather: Online XPath Tester"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TAG_NAME"),": just write the tag name, then his content will be used as formatted response"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"JSONPATH"),": an expression format to identify nodes in JSON documents (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/json-path/JsonPath"},"Jayway JsonPath"),", ",(0,n.kt)("a",{parentName:"li",href:"https://jsonpath.com/"},"JsonPath.com: Online JsonPath Tester"),")")),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("h3",{id:"formatpathtype"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatPathType")),(0,n.kt)("p",null,"HTTP Response's body format type. Default ''."),(0,n.kt)("p",null,"Please set this FirmwareConfigs according to the expected response type.",(0,n.kt)("br",null),"\nYou can choose one of the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"XPATH"),": to query HTTP Responses with HTML and XML (Not Yet Implemented) bodies."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TAG_NAME"),": to query HTTP Responses with HTML and XML bodies (Not Yet Implemented)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"JSONPATH"),": to query HTTP Responses with JSON bodies.")),(0,n.kt)("p",null,"Those values are coming from the ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospJOD/java/com/robypomper/josp/jod/executor/impls/http/FormatterInternal.java#lines-69"},"FormatterInternal")," class."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"firmware-configs---evaluator"},"Firmware Configs - Evaluator"),(0,n.kt)("p",null,"If you are not yet satisfy from the result after the HTTP Response body format, you can continue customizing it within a configurable JavaScript script."),(0,n.kt)("p",null,"For example, if after response format, it still contains unwanted chars; or also if you configured the worker for handle a raw response  (",(0,n.kt)("inlineCode",{parentName:"p"},"formatType=TEXT"),").\nThen you need to edit the obtained response before passing it as new Pillar's state value."),(0,n.kt)("p",null,"To edit obtained result, after the response's body format, you must use the ",(0,n.kt)("inlineCode",{parentName:"p"},"eval")," Firmware Config.",(0,n.kt)("br",null),"\nDefault ",(0,n.kt)("inlineCode",{parentName:"p"},"eval")," value, or an empty string, prevents any response alteration."),(0,n.kt)("p",null,"Those configs are defined and used by ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/src/jospJOD/java/com/robypomper/josp/jod/executor/impls/http/EvaluatorInternal.java"},"EvaluatorInternal")," class."),(0,n.kt)("h3",{id:"eval"},(0,n.kt)("inlineCode",{parentName:"h3"},"eval")),(0,n.kt)("p",null,"JavaScript script to evaluate HTTP Response body after formatting it. Default '{httpResult}'."),(0,n.kt)("p",null,"This config accept any JavaScript script and response the evaluation function returns his output."),(0,n.kt)("p",null,"Custom JavaScript can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"httpResult")," string that contains the HTTP Response body after formatting.",(0,n.kt)("br",null),"\nAfter alter this string, the script must print the desired result."),(0,n.kt)("p",null,"Script are executed as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/javax/script/ScriptEngine.html"},"Java ScriptEngine"),".",(0,n.kt)("br",null),"\nMore details on how to write JavaScript for the Java ScriptEngine at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/scripting/programmer_guide/"},"Oracle: Java Scripting Programmer's Guide"),"."),(0,n.kt)("p",null,"This property is updated with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#pillar"},"Pillar's Placeholder")," on worker initialization and with ",(0,n.kt)("a",{parentName:"p",href:"workers_placeholders#state"},"State Placeholder")," on pulling state."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="struct.jod: BoolenState/Http @ JOD Philips Hue"',title:'"struct.jod:',"BoolenState/Http":!0,"@":!0,JOD:!0,Philips:!0,'Hue"':!0},'"Online": {\n    "type": "BooleanState",\n    "puller": "http://requestUrl=\'https://philips-hue-tres.local/api/Xex9YLRxERFf0TliilWFj3LkmjtCd2iGLmQSktYY/lights/1\';formatType=JSON;formatPath=\'$.state.reachable\';formatPathType=JSONPATH;requestIgnoreSSLHosts=true;"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="struct.jod: RangeState/Http @ JOD Meteo Web"',title:'"struct.jod:',"RangeState/Http":!0,"@":!0,JOD:!0,Meteo:!0,'Web"':!0},'"Temperature" : {\n    "type": "RangeState",\n    "puller" : "http://requestUrl=\'https://api.openweathermap.org/data/2.5/weather?q=${JOD_MWO_LOCATION}&units=metric&appid=03317c1f2de6827424efd170890ffd3c\';formatType=JSON;formatPath=\'$.main.temp\';formatPathType=JSONPATH;freq=600",\n    "min": "-50",\n    "max": "100"\n}\n')))}c.isMDXComponent=!0}}]);