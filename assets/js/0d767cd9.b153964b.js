"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[9374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},s="Distribution Life-cycle",a={unversionedId:"distribution_life_cycle",id:"distribution_life_cycle",title:"Distribution Life-cycle",description:"From the JOD Distributions TEMPLATE source code (this project) to an operative JOSP Objects there are few steps performed by 3 different actors:",source:"@site/3_references/5_tools/1_jod_dist_template/1_distribution_life_cycle.mdx",sourceDirName:".",slug:"/distribution_life_cycle",permalink:"/references/tools/jod_dist_template/distribution_life_cycle",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"toolsSidebar",previous:{title:"JOD Distributions TEMPLATE",permalink:"/references/tools/jod_dist_template/"},next:{title:"Requirements",permalink:"/references/tools/jod_dist_template/create_your_own_jod_distribution/requirements"}},l={},c=[{value:"Cross-OS support",id:"cross-os-support",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distribution-life-cycle"},"Distribution Life-cycle"),(0,o.kt)("p",null,"From the JOD Distributions TEMPLATE source code (this project) to an operative JOSP Objects there are few steps performed by 3 different actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JOSP Developer"),": who implements the JOD Distribution TEMPLATE project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maker"),": anyone who wants to design a connected object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"End User"),": anyone who will manage and use a connected object")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JOD Distribution TEMPLATE LifeCycle diagram",src:r(45874).Z,title:"JOD Distribution TEMPLATE LifeCycle",width:"1341",height:"523"})),(0,o.kt)("p",null,"First, there is the ",(0,o.kt)("strong",{parentName:"p"},"JOSP Developer")," (or any maintainer of this project) that implements and then release JOD Distribution TEMPLATE's artifacts. ",(0,o.kt)("em",{parentName:"p"},"This stage is intended for the sole use of JOD Dist TMPL's developers.")," ",(0,o.kt)("br",null),"\nAll JOD Distribution TEMPLATES artifacts can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/"},"Downloads @ Bitbucket")," page."),(0,o.kt)("p",null,"Then ",(0,o.kt)("strong",{parentName:"p"},"Makers")," can download and extract it. The resulting folder will be the project dir for a new JOD Distribution. Makers can customize their own JOD Distribution simply editing extracted files. For more info check the README.md file in extracted dir or (at this ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/tmpl/resources/README.md"},"link"),"). Once, it's ready, Makers can build and publish their own JOD Distributions."),(0,o.kt)("p",null,"Finally, the ",(0,o.kt)("strong",{parentName:"p"},"End User"),", who received built JOD Distribution, can copy it on his PC or deploy it on a remote machine (like a RaspberryPi). At this point, a JOD Distribution can be installed as a background service/daemon (managed by the guest OS). Otherwise, it can be executed as a foreground command that expose a shell to interact with running JOD Instance."),(0,o.kt)("p",null,"For each step, this project provides different scripts to automate his management:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Development:")," this phase can be handled with ",(0,o.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/gradle/gradle.md"},"Gradle project")," 's tasks like ",(0,o.kt)("inlineCode",{parentName:"li"},"buildTMPL")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"publishTMPL")," to build or publish JOD Dist TMPL artifacts. ",(0,o.kt)("em",{parentName:"li"},"This stage is intended for the sole use of JOD Dist TMPL's developers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customization:")," Makers can use ",(0,o.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/tmpl/tmpl.md"},"JOD Template Commands")," contained in ",(0,o.kt)("inlineCode",{parentName:"li"},"$JOD_Custom_DIR/scripts")," dir. Those scripts help maker to build, test, install and publish their own JOD Distriubutions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage:")," Each JOD Distribution includes the ",(0,o.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/dists.md"},"JOD Distribution Commands"),". End User can execute those commands to manage (start/stop, install/uninstall) current JOD installation.")),(0,o.kt)("h2",{id:"cross-os-support"},"Cross-OS support"),(0,o.kt)("p",null,"The JOD Distribution TEMPLATE support Linux, MacOS and Windows, and it's agnostic along all those steps."),(0,o.kt)("p",null,"In other worlds, any actor can perform any steps with his favourite OS. Then, following steps can still be executed by other actors using different OS. That's always true except for JOD Distribution configuration steps, because Makers can add scripts, executables or other resources that are OS dependant. Each JOD Distribution must specify in his README.md file which OS can support."),(0,o.kt)("p",null,"To support different OS, JOD Distribution TEMPLATE provide all is commands as Bash (for Linux and MacOS) and PowerShell (for Windows) scripts."))}d.isMDXComponent=!0},45874:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/JODDistTMPL_LifeCycle-b5e76de86416451129dcad5a83cf1462.png"}}]);