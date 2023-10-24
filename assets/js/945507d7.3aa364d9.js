"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[6728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),b=o,m=c["".concat(s,".").concat(b)]||c[b]||d[b]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a="Build JOD Distribution TEMPLATE",l={unversionedId:"build_jod_distribution_template",id:"build_jod_distribution_template",title:"Build JOD Distribution TEMPLATE",description:"This project includes a Gradle config that provide the `buildTMPL` task. Execute that task to assemble and generate the JOD Distribution TEMPLATE:",source:"@site/3_references/5_tools/1_jod_dist_template/7_build_jod_distribution_template.mdx",sourceDirName:".",slug:"/build_jod_distribution_template",permalink:"/references/tools/jod_dist_template/build_jod_distribution_template",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Install a JOD Distribution as a Service",permalink:"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service"},next:{title:"References",permalink:"/references/tools/jod_dist_template/references"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-jod-distribution-template"},"Build JOD Distribution TEMPLATE"),(0,o.kt)("p",null,"This project includes a Gradle config that provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildTMPL")," task. Execute that task to assemble and generate the JOD Distribution TEMPLATE:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew buildTMPL\n")),(0,o.kt)("p",null,"Once executed, you can find assembled JOD Distribution TEMPLATE in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"build/assemble/$JOD_TEMPL_VER")," dir, or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/publications"),"\nfolder as distributable files. Alternatively, you can download published JOD Distribution TEMPLATE at ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/"},"Repository > Downloads @ Bitbucket"),". Visit that page to list all available versions and then execute following command to download it."),(0,o.kt)("p",null,"For Bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -fo JOD_Dist_TMPL-1.0.1.tgz https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/JOD_Dist_TMPL-1.0.1.tgz\n")),(0,o.kt)("p",null,"For Powershell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ Invoke-WebRequest -Uri "https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/JOD_Dist_TMPL-1.0.1.zip" -OutFile "JOD_Dist_TMPL-1.0.1.zip"\n')))}d.isMDXComponent=!0}}]);