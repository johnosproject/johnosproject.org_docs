"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[9854],{96336:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),s=a(85162);a(60614);const i={title:"Requirements"},u="Distribution's requirements",o={unversionedId:"requirements",id:"requirements",title:"Requirements",description:"This distribution can be installed only on Linux. For other JOD PC distributions that support different OS, please see JOD PC MacOS and JOD PC Windows.",source:"@site/3_references/2_jod_dists/jod_pc_linux/2_requirements.mdx",sourceDirName:".",slug:"/requirements",permalink:"/references/jod_dists/JOD_PC_Linux/requirements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Requirements"},sidebar:"jodDistsSidebar",previous:{title:"Exported object",permalink:"/references/jod_dists/JOD_PC_Linux/exported_object"},next:{title:"Configs",permalink:"/references/jod_dists/JOD_PC_Linux/distribution_configs"}},c={},p=[{value:"Install <code>mpstat</code>",id:"install-mpstat",level:2},{value:"Install <code>ps</code> and <code>top</code>",id:"install-ps-and-top",level:2},{value:"Install <code>amixer</code>",id:"install-amixer",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"distributions-requirements"},"Distribution's requirements"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This distribution can be installed only on Linux. For other JOD PC distributions that support different OS, please see ",(0,l.kt)("a",{parentName:"p",href:"/references/jod_dists/jod_pc_mac/"},"JOD PC MacOS")," and ",(0,l.kt)("a",{parentName:"p",href:"/references/jod_dists/jod_pc_win/"},"JOD PC Windows"),".")),(0,l.kt)("p",null,"This distribution use an object structure that calls different scripts from ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts/hw")," directory.\nThose scripts queries the host's OS to get object's statuses values. Some of them are dependant to external commands."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"All of the following requirements are optionals"),".",(0,l.kt)("br",null),"\nIf a required command is not installed, then corresponding script will return always ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For common JOD Distribution requirements, please see the ",(0,l.kt)("a",{parentName:"p",href:"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/requirements"},"JOD Distribution TEMPLATE/How to use a JOD Distribution/Configure JOD Distribution")," page.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-mpstat"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"mpstat")),(0,l.kt)("p",null,"The command ",(0,l.kt)("inlineCode",{parentName:"p"},"mpstat")," allow to query info about system memory and get values like the memory usage."),(0,l.kt)(r.Z,{groupId:"linux-package_managers",defaultValue:"apt",values:[{label:"APT (Debian, Ubuntu...)",value:"apt"},{label:"YUM (CentOS, RedHat, Fedora...)",value:"yum"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apt",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"ps")," contained in the ",(0,l.kt)("i",null,"procps")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ apt-get install sysstat\n"))),(0,l.kt)(s.Z,{value:"yum",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"ps")," contained in the ",(0,l.kt)("i",null,"procps")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yum install procps\n")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-ps-and-top"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"ps")," and ",(0,l.kt)("inlineCode",{parentName:"h2"},"top")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ps")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"top")," commands allow to query info about running process and get values like the process count and the memory usage.\nBoth those command are generally available on all Linux systems."),(0,l.kt)(r.Z,{groupId:"linux-package_managers",defaultValue:"apt",values:[{label:"APT (Debian, Ubuntu...)",value:"apt"},{label:"YUM (CentOS, RedHat, Fedora...)",value:"yum"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apt",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"ps, top")," contained in the ",(0,l.kt)("i",null,"sysstat")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ apt-get install procps\n"))),(0,l.kt)(s.Z,{value:"yum",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"ps, top")," contained in the ",(0,l.kt)("i",null,"sysstat")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yum install sysstat\n")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-amixer"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"amixer")),(0,l.kt)("p",null,"Util ",(0,l.kt)("inlineCode",{parentName:"p"},"amixer")," is part of the ALSA framework and allow to list audio interfaces and control them for Volume's actions."),(0,l.kt)(r.Z,{groupId:"linux-package_managers",defaultValue:"apt",values:[{label:"APT (Debian, Ubuntu...)",value:"apt"},{label:"YUM (CentOS, RedHat, Fedora...)",value:"yum"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apt",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"amixer")," contained in the ",(0,l.kt)("i",null,"alsa-utils")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get install alsa-utils\n"))),(0,l.kt)(s.Z,{value:"yum",mdxType:"TabItem"},(0,l.kt)("p",null,"Install ",(0,l.kt)("i",null,"amixer")," contained in the ",(0,l.kt)("i",null,"alsa-utils")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ yum install alsa-utils\n")))))}b.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),l=a(67294),r=a(86010),s=a(12466),i=a(16550),u=a(91980),o=a(67392),c=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,o]=b({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),k(e)}),[o,k,r]),tabValues:r}}var f=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=o[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}}}]);