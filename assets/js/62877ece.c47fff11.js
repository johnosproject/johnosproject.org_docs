"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[6521],{42286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),i=n(74866),a=n(85162);n(60614);const s={},l="Start new JOD Distribution",u={unversionedId:"create_your_own_jod_distribution/start_new_jod_distribution",id:"create_your_own_jod_distribution/start_new_jod_distribution",title:"Start new JOD Distribution",description:"Initialize a JOD Distribution project",source:"@site/3_references/5_tools/1_jod_dist_template/2_create_your_own_jod_distribution/2_start_new_jod_distribution.mdx",sourceDirName:"2_create_your_own_jod_distribution",slug:"/create_your_own_jod_distribution/start_new_jod_distribution",permalink:"/references/tools/jod_dist_template/create_your_own_jod_distribution/start_new_jod_distribution",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Requirements",permalink:"/references/tools/jod_dist_template/create_your_own_jod_distribution/requirements"},next:{title:"Customize JOD Distribution",permalink:"/references/tools/jod_dist_template/create_your_own_jod_distribution/configuration/customize_jod_distribution"}},c={},d=[{value:"Initialize a JOD Distribution project",id:"initialize-a-jod-distribution-project",level:2},{value:"Build your JOD Distribution",id:"build-your-jod-distribution",level:2}],p={toc:d},b="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-new-jod-distribution"},"Start new JOD Distribution"),(0,o.kt)("h2",{id:"initialize-a-jod-distribution-project"},"Initialize a JOD Distribution project"),(0,o.kt)("p",null,"To create a new JOD Distribution you require latest JOD Distribution TEMPLATE's artifact, downloadable from ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/"},"Downloads @ Bitbucket"),"."),(0,o.kt)("p",null,"After extract it with your favourite decompression tool, rename extracted dir according to your distribution scope (p.e. 'JOD-MyLamp' or 'JOD-MQTT'). Then enter to the JOD Distribution project's folder."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jod_dist_configs.(sh|ps1)"),' files contains the main distribution\'s configs like his name and version, the JOD version to use, the JCP credentials, etc... Populate all properties from both files and remove the "customization check" at the top of the files.'),(0,o.kt)(i.Z,{groupId:"os-shell",defaultValue:"bash",values:[{label:"Linux/Mac",value:"bash"},{label:"Windows",value:"powershell"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Bash version"',title:'"Bash','version"':!0},'# Create new JOD Distribution\n$ curl -fo JOD_Dist_TMPL-{VER}.tgz https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/downloads/JOD_Dist_TMPL-{VER}.tgz\n$ tar zxvf JOD_Dist_TMPL-{VER}.tgz\n$ mv JOD_Dist_TMPL-{VER} {MY_JOD_DIST}\n$ cd {$MY_JOD_DIST}\n\n# Configure JOD Distribution\n# On both files delete "customization check" line and update variables according\n# to your needs (mandatory JCP_ID and JCP_SECRET).\n# For more customization option see the README.md file $ cat README.md\n$ nano configs/jod_dist_configs.sh\n$ nano configs/jod_dist_configs.ps1\n'))),(0,o.kt)(a.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Powershell version"',title:'"Powershell','version"':!0},'# Create new JOD Distribution\n$ Expand-Archive -Path JOD_Dist_TMPL-{VER}.zip\n$ mv JOD_Dist_TMPL-{VER} {MY_JOD_DIST}\n$ Rename-Item JOD_Dist_TMPL-{VER} {MY_JOD_DIST}\n$ cd {MY_JOD_DIST}\n\n# Configure JOD Distribution\n# On both files delete "customization check" line and update variables according\n# to your needs (mandatory JCP_ID and JCP_SECRET).\n# For more customization option see the README.md file $ cat README.md\n$ notepad configs/jod_dist_configs.sh\n$ notepad configs/jod_dist_configs.ps1\n')))),(0,o.kt)("p",null,"Now you are able to build and test your own distribution."),(0,o.kt)("h2",{id:"build-your-jod-distribution"},"Build your JOD Distribution"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," script create a temporary folder that contains all files required by your JOD Distribution. You can check his content in ",(0,o.kt)("inlineCode",{parentName:"p"},"{MY_JOD_DIST}/build/{MY_JOD_DIST}/{MY_JOD_DIST_VER}")," folder. You can also use this folder to run a test instance of your distribution, because it contains also all JOD Distribution Commands from JOD Dist TMPL. To run the JOD agent, you can use the FOREGROUND switch of the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.(sh|ps1)")," script, that run the instance with the JOD Shell enabled. That will be useful to test your JOD Distribution."),(0,o.kt)(i.Z,{groupId:"os-shell",defaultValue:"bash",values:[{label:"Linux/Mac",value:"bash"},{label:"Windows",value:"powershell"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Bash version"',title:'"Bash','version"':!0},"#Build JOD Distribution\n$ bash scripts/build.sh\n\n$ cd build/{MY_JOD_DIST}/{MY_JOD_DIST_VER}\n$ bash start.sh true        # FOREGROUND=true\n"))),(0,o.kt)(a.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Powershell version"',title:'"Powershell','version"':!0},"#Build JOD Distribution\n$ powershell scripts/build.ps1\n\n$ cd build/{MY_JOD_DIST}/{MY_JOD_DIST_VER}\n$ powershell start.ps1 FOREGROUND        # FOREGROUND=true\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Built distribution will expose a test JOSP Object.")),(0,o.kt)("p",null,"To customize how your distribution expose JOSP Objects features, please see ",(0,o.kt)("a",{parentName:"p",href:"configuration/customize_jod_distribution"},"next")," chapter."))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(86010);const i={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,a),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),o=n(67294),i=n(86010),a=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function _(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[a,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:r}),[d,_]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=l??d;return b({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),_(e)}),[u,_,i]),tabValues:i}}var h=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function D(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),l(r))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},a,{className:(0,i.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=_(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},o.createElement(D,(0,r.Z)({},e,t)),o.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(g,(0,r.Z)({key:String(t)},e))}}}]);