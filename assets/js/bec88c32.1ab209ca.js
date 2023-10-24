"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={slug:"./"},o="Maker's Guides",l={unversionedId:"makers/index",id:"makers/index",title:"Maker's Guides",description:"Makers is the connected object's designer.",source:"@site/2_guides/2_makers/0_index.mdx",sourceDirName:"2_makers",slug:"/makers/",permalink:"/guides/makers/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"./"},sidebar:"endUsersSidebar",previous:{title:"Login and logout",permalink:"/guides/end_users/user_account/login_and_out"},next:{title:"Create object",permalink:"/guides/makers/object_integration/create_object"}},s={},c=[{value:"JOSP Object integration",id:"josp-object-integration",level:2},{value:"Design JOSP Objects",id:"design-josp-objects",level:2},{value:"Design objects GuideLines",id:"design-objects-guidelines",level:2},{value:"Manage Online Objects",id:"manage-online-objects",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"makers-guides"},"Maker's Guides"),(0,a.kt)("p",null,"Makers is the connected object's designer."),(0,a.kt)("p",null,"Maker can be a simple enthusiast that create his own project, or be a company that design a new connected product. Regardless of who you are, on these pages you can find guides to learn how to create your own connected objects or integrate existing connected objects or communication protocols/standards."),(0,a.kt)("p",null,"Depending on your needs these HowTos help you create a full working John Object or a shareable JOD Distribution."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"josp-object-integration"},"JOSP Object integration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"object_integration/create_object"},"Create object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"object_integration/integrate_local"},"Integrate local")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"object_integration/integrate_protocol"},"Integrate via protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"object_integration/integrate_http"},"Integrate via HTTP"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"design-josp-objects"},"Design JOSP Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/create_distribution"},"Create JOD Distribution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/define_object_info"},"Define object info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/define_object_structure"},"Define object structure"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/object_factorization"},"Object factorization")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/features_into_pillars"},"Features into pillars")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/configure_workers"},"Configure workers"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/file_workers"},"File listener and executor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/shell_workers"},"Shell puller and executor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/http_workers"},"HTTP puller and executor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_objects/custom_workers"},"Implement custom workers"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"design-objects-guidelines"},"Design objects GuideLines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_guidelines/single_or_multiple_structures"},"Single or Multiple structures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_guidelines/meta-objects"},"Meta-Objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_guidelines/pre-defined_units"},"Pre-defined units and labels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_guidelines/object_i18n"},"Object i18n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"design_guidelines/object_from_service"},"Object from JOSP Service"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"manage-online-objects"},"Manage Online Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"manage_online_objects/require_object_access"},"Require object access")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"manage_online_objects/show_object_usage"},"Show object usage stats"))))}d.isMDXComponent=!0}}]);