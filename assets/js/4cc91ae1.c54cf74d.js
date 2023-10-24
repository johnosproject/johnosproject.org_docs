"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[4740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Structure"},i="JOD Structure",s={unversionedId:"jod/specs/structure",id:"jod/specs/structure",title:"Structure",description:"A JOSP Object expose to the JOSP EcoSystem all features defined in his structure.",source:"@site/3_references/1_josp/1_jod/4_specs/4_structure.mdx",sourceDirName:"1_jod/4_specs",slug:"/jod/specs/structure",permalink:"/references/josp/jod/specs/structure",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Structure"},sidebar:"referencesSidebar",previous:{title:"Permissions",permalink:"/references/josp/jod/specs/permissions"},next:{title:"JOD Pillars",permalink:"/references/josp/jod/specs/pillars/"}},l={},c=[{value:"Object info",id:"object-info",level:2},{value:"Object structure",id:"object-structure",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jod-structure"},"JOD Structure"),(0,a.kt)("p",null,"A JOSP Object expose to the JOSP EcoSystem all features defined in his structure."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"object's structure")," contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"configs/struct.jod")," file is a hierarchical list of the features that the JOD Agent must expose to the JOSP EcoSystem.",(0,a.kt)("br",null),"\nEach feature can be defined as a State or an Action. States can wait for firmware's value updates and update JOSP Services on value changes. Actions are like States, but they can also receive commands requests from JOSP Services and translate those command to firmware calls.",(0,a.kt)("br",null)),(0,a.kt)("img",{alt:"JOD Distribution TEMPLATE Build process diagram",src:"/references/josp/jod/specs/JODDistTMPL_ActionStates.png",title:"JOD Distribution TEMPLATE Build process",style:{maxHeight:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,a.kt)("br",null),(0,a.kt)("p",null,"States and Actions, depending on what they must expose to the JOSP EcoSystem, they can be of different types. We call this types ",(0,a.kt)("strong",{parentName:"p"},"Pillars"),".",(0,a.kt)("br",null),"\nFor example if you are designing a JOD Distribution for a connected lamp, probably you would expose the On/Off control as object's feature. To do that, you must add a ",(0,a.kt)("inlineCode",{parentName:"p"},"BooleanAction"),' pillar to the object\'s structure. Then configure it as "On/Off switch".',(0,a.kt)("br",null),"\nOtherwise, if the feature that you would expose is like the environment temperature, then you must add a ",(0,a.kt)("inlineCode",{parentName:"p"},"RangeState")," pillar to object's structure.",(0,a.kt)("br",null),"\nMore details and examples on ",(0,a.kt)("a",{parentName:"p",href:"pillars/"},"Pillars")," and ",(0,a.kt)("a",{parentName:"p",href:"workers/"},"Workers")," chapters."),(0,a.kt)("p",null,"Pillars configuration allow the JOD Agent to ",(0,a.kt)("strong",{parentName:"p"},"expose the feature to JOSP Services")," exactly as you desire, and on the other side, ",(0,a.kt)("strong",{parentName:"p"},"use the right firmware calls")," to interact with external world like hardware sensors and actuators. The JOD Agent is very flexible and can interact, not only with hardware peripherals, but also with other software, websites or anything you require. Pillars can be configured to use different firmware interfaces depending on your needs."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"object-info"},"Object info"),(0,a.kt)("p",null,"Object's info are related to JOSP Object implementation and are contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"struct.jod")," file as part of the object's structure."),(0,a.kt)("p",null,"You can use this info to define your JOSP Object and help JOSP Service developers find and use it."),(0,a.kt)("p",null,"From JOSP Service developers prospective, object's info are intended as model info exposed by JOSP Objects; and can help them to identify connected objects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"model"),": unique name that identify your JOSP Object type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brand"),": unique name that identify yourself or hardware manufacturer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"descr"),": sort object description"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"descr_long"),": detailed object description"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contains"),": the object's structure, contains is the root container")),(0,a.kt)("p",null,"Here an example of a complete object's info section in a ",(0,a.kt)("inlineCode",{parentName:"p"},"struct.jod")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JOD PC Mac/configs/struct.jod distribution"',title:'"JOD',PC:!0,"Mac/configs/struct.jod":!0,'distribution"':!0},'{\n    "model": "MacOS JOSP Object",\n    "brand": "Apple Inc.",\n    "descr": "A MacOS computer that expose his features to JOSP\'s services.",\n    "descr_long": "This object can be used to control remotely functions as system volume, lightning, keyboard, mouse, etc...",\n    "contains": {\n      // Object\'s structure\n  }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"object-structure"},"Object structure"),(0,a.kt)("p",null,"Object's structure is a hierarchical list of object's features."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"struct.jod")," file, each feature is defined as a Pillar element. Pillars can be contained in Container elements. The ",(0,a.kt)("inlineCode",{parentName:"p"},"contains")," element from ",(0,a.kt)("inlineCode",{parentName:"p"},"struct.jod")," files is the root container of the object's structure. Container can contain other containers and create multi-level hierarchy."),(0,a.kt)("img",{alt:"JOD Distribution TEMPLATE Build process diagram",src:"/references/josp/jod/specs/JODDistTMPL_Struct.png",title:"JOD Distribution TEMPLATE Build process",style:{maxHeight:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here an example of complete ",(0,a.kt)("inlineCode",{parentName:"p"},"struct.jod")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="MyDist/configs/struct.jod"',title:'"MyDist/configs/struct.jod"'},'{\n    "model": "My Distribution",\n    "brand": "MyMyselfAndI",\n    "descr": "A _full_ featured IoT Object that expose _all_ data and _all_ remote controls to the JOSP EcoSystem",\n    "descr_long": "Long and more detailed configs",\n    "contains": {\n        "Container A" : {\n            "type": "JODContainer",\n            "contains": {\n                "Pillar A" : {\n                    "type": "PillarType",\n                    // PillarType specific configs for Feature A\n                },\n                "Pillar B" : {\n                    "type": "PillarType",\n                    // PillarType specific configs for Feature B\n                }\n            }\n        },\n        "Container B" : {\n            "type": "JODContainer",\n            "contains": {\n                "Pillar ..." : {\n                    "type": "PillarType",\n                    // PillarType specific configs for Feature ...\n                }\n            }\n        },\n  }\n}\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Please customize the main ",(0,a.kt)("inlineCode",{parentName:"p"},"contains")," section according to the JOSP Object's structure you would expose.",(0,a.kt)("br",null),"\nDetailed pillars configs can be found in the ",(0,a.kt)("a",{parentName:"p",href:"pillars"},"next")," section."))}d.isMDXComponent=!0}}]);