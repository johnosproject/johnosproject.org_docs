"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[2161],{73547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),s=n(85162);n(60614);const i={},l="Run a JOD Distribution",u={unversionedId:"how_to_use_a_jod_distribution/run_a_jod_distribution",id:"how_to_use_a_jod_distribution/run_a_jod_distribution",title:"Run a JOD Distribution",description:"Once you get and configured a JOD Distribution, you can start it and use the JOSP Object exposed by that distribution.",source:"@site/3_references/5_tools/1_jod_dist_template/3_how_to_use_a_jod_distribution/4_run_a_jod_distribution.mdx",sourceDirName:"3_how_to_use_a_jod_distribution",slug:"/how_to_use_a_jod_distribution/run_a_jod_distribution",permalink:"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/run_a_jod_distribution",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Configure a JOD Distribution",permalink:"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/configure_a_jod_distribution"},next:{title:"Install a JOD Distribution as a Service",permalink:"/references/tools/jod_dist_template/how_to_use_a_jod_distribution/install_a_jod_distribution_as_a_service"}},c={},d=[{value:"Open terminal session",id:"open-terminal-session",level:2},{value:"On local machine",id:"on-local-machine",level:3},{value:"On remote device",id:"on-remote-device",level:3},{value:"Run JOD Agent",id:"run-jod-agent",level:2},{value:"As background process",id:"as-background-process",level:3},{value:"As foreground command",id:"as-foreground-command",level:3},{value:"Object registration and usage",id:"object-registration-and-usage",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-a-jod-distribution"},"Run a JOD Distribution"),(0,o.kt)("p",null,"Once you ",(0,o.kt)("a",{parentName:"p",href:"get_a_jod_distribution"},"get")," and ",(0,o.kt)("a",{parentName:"p",href:"configure_a_jod_distribution"},"configured")," a JOD Distribution, you can ",(0,o.kt)("strong",{parentName:"p"},"start it and use the JOSP Object")," exposed by that distribution."),(0,o.kt)("p",null,"The best way to handle JOD Distribution is via ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/dists.md"},"JOD Distribution Commands"),", a set of script that allow you to start/stop distributions. Those scripts are included on each JOD Distribution and (depending on distribution purpose) can be executed on Linux or MacOS via Bash, or on Windows via PowerShell terminals."),(0,o.kt)("p",null,"That, in conjunction with an SSH session, allow you ",(0,o.kt)("strong",{parentName:"p"},"handle local and remote JOD Distribution in the same way"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'When you run a JOSP Object, unless otherwise specified in the documentation, it is executed as "AnonymousObject", that means it has no owner.',(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"admonition"},"To ",(0,o.kt)("strong",{parentName:"p"},"register yourself as a JOSP Object's owner"),", your must add it via a JOSP Services like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/josp/jcp/microservices/fe/"},"JCP FrontEnd"),"."),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://www.johnosproject.org/frontend/index.html"},"Public JCP FrontEnd")),(0,o.kt)("li",{parentName:"ol"},"Login or register using the top-right button"),(0,o.kt)("li",{parentName:"ol"},"Go to the 'Objects list' and ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/end_users/new_objects/register_object"},"add your object"))),(0,o.kt)("p",{parentName:"admonition"},"Remember to copy the JOSP Object's ID from JOD Agent logs or from the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.sh|ps1")," JOD Dist Cmd's output.")),(0,o.kt)("p",null,"To run a JOD Distribution on each device reboot, please see the ",(0,o.kt)("a",{parentName:"p",href:"install_a_jod_distribution_as_a_service"},"Install JOD Distribution as a service")," page."),(0,o.kt)("h2",{id:"open-terminal-session"},"Open terminal session"),(0,o.kt)("p",null,"Before run downloaded JOD distribution, you must open distribution directory in to a terminal session."),(0,o.kt)("h3",{id:"on-local-machine"},"On local machine"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If downloaded distribution is on your working machine"),", simply open the terminal program and go to downloaded JOD Distribution dir (",(0,o.kt)("inlineCode",{parentName:"p"},"$JOD_DIST_DIR"),")."),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"If you are using a Desktop Environment, you can just open your favourite Terminal application.",(0,o.kt)("br",null),"\nIf you are using the Linux machine from a console, you are all right."),(0,o.kt)("p",null,"Then, go to distribution dir with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd $JOD_DIST_DIR")," command."),(0,o.kt)("p",null,"The JOD Dist TMPL projects provide scripts for Bash shell, so every time you call a JOD Dist Cmd, you must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ bash cmd_name.sh")," command.")),(0,o.kt)(s.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,"Open ",(0,o.kt)("em",{parentName:"p"},"Launchpad")," or ",(0,o.kt)("em",{parentName:"p"},"Applications")," dir from ",(0,o.kt)("em",{parentName:"p"},"Finder"),", then open the ",(0,o.kt)("em",{parentName:"p"},"Terminal")," app."),(0,o.kt)("p",null,"Then, go to distribution dir with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd $JOD_DIST_DIR")," command."),(0,o.kt)("p",null,"The JOD Dist TMPL projects provide scripts for Bash shell, so every time you call a JOD Dist Cmd, you must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ bash cmd_name.sh")," command.")),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"From the ",(0,o.kt)("em",{parentName:"p"},"Start")," menu, open the ",(0,o.kt)("em",{parentName:"p"},"Powershell")," application."),(0,o.kt)("p",null,"Then, go to distribution dir with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ cd $JOD_DIST_DIR")," command."),(0,o.kt)("p",null,"The JOD Dist TMPL projects provide scripts for Powershell, so every time you call a JOD Dist Cmd, you must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$ powershell cmd_name.ps1")," command."))),(0,o.kt)("h3",{id:"on-remote-device"},"On remote device"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Otherwise, if you would run the JOD Distribution on a remote device"),", you must open an SSH session to the remote device. The SSH connection require remote device's IP or address, there are many ways to get it. Depending on the remote device nature the address can be found via a mDNS/Bonjour discovery service (typical for IoT and Smart Home devices); or it can be got from the service provider that host our cloud services (for those objects that must run on cloud or 24/7); or even it can be the same as the DHCP gateway address (when the remote device is the same as provide the Wi-Fi network)."),(0,o.kt)(r.Z,{groupId:"os-shell",defaultValue:"bash",values:[{label:"Linux/Mac",value:"bash"},{label:"Windows",value:"powershell"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("p",null,"In Linux/MacOS environment you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," command to connect to a remote device via SSH protocol. This command accept different params to configure the connection with the remote device.",(0,o.kt)("br",null),"\nOnce the SSH session was opened, you can go to the downloaded JOD Distribution dir."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="SSH Connection to remote device"',title:'"SSH',Connection:!0,to:!0,remote:!0,'device"':!0},"$ ssh [{REMEOTE_USER}@]{REMOTE_HOST}[:{REMOTE_PORT}]\nREMOTE_USER@REMOTE_HOST $ cd {JOD_DIST_DIR}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REMOTE_USER: username to use on login to the remote device. During the ssh initialization, it asks you for the user password. Check device's documentation for user and password credentials. If not set, current username from local machine will be used."),(0,o.kt)("li",{parentName:"ul"},"REMOTE_HOST: hostname or ip address of the remote device. You can discover it as described above, or check the device's documentation."),(0,o.kt)("li",{parentName:"ul"},"REMOTE_PORT: by default ssh works with port 22, some device may change it. Use this param to override default port."))),(0,o.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("p",null,"..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="SSH Connection to remote device"',title:'"SSH',Connection:!0,to:!0,remote:!0,'device"':!0},"TODO Write SSH Connection to remote device\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"run-jod-agent"},"Run JOD Agent"),(0,o.kt)("p",null,"Now you are in the JOD Distribution directory and can execute his ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/dists.md"},"JOD Distribution Commands"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh|ps1")," script runs the JOD Agent, the software that expose the JOSP Object to the JOSP EcoSystem. By default, this script runs the JOD Agent as a background process, then you can close the terminal's session, and the JOD Agent still run after that. Otherwise, with the FOREGROUND param you can run it as a foreground command with the interactive ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/josp/jod/specs/shell"},"JOD Shell"),".",(0,o.kt)("br",null),"\nDepending on execution mode, you can halt the JOD Agent. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"stop.sh|ps1")," script if executed in background mode, or type ",(0,o.kt)("inlineCode",{parentName:"p"},"exit")," on running JOD Shell.",(0,o.kt)("br",null),"\nLogs are always stored in to the ",(0,o.kt)("inlineCode",{parentName:"p"},"logs/jospJOD.log")," file."),(0,o.kt)("h3",{id:"as-background-process"},"As background process"),(0,o.kt)("p",null,"Here an example to ",(0,o.kt)("strong",{parentName:"p"},"execute the JOD Distribution as a background process")," and get his JOSP Object's id with the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.sh|ps1")," script:"),(0,o.kt)(r.Z,{groupId:"os-shell",defaultValue:"bash",values:[{label:"Linux/Mac",value:"bash"},{label:"Windows",value:"powershell"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run JOD Agent as background process"',title:'"Run',JOD:!0,Agent:!0,as:!0,background:!0,'process"':!0},"$JOD_DIST_DIR/ $ bash start.sh\n                 < Start command logs\n$JOD_DIST_DIR/ $ bash state.sh\n                 < JOD Agent state (JOSP Object id, JOD Agent process id...)\n$JOD_DIST_DIR/ $ tail -f logs/jospJOD.log\n                 < JOD Agent logs\n                 < Ctrl+C to exit\n$JOD_DIST_DIR/ $ bash stop.sh\n                 < Stop command logs\n"))),(0,o.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run JOD Agent as background process"',title:'"Run',JOD:!0,Agent:!0,as:!0,background:!0,'process"':!0},"$JOD_DIST_DIR/ $ powershell start.ps1\n                 < Start command logs\n$JOD_DIST_DIR/ $ powershell state.ps1\n                 < JOD Agent state (JOSP Object id, JOD Agent process id...)\n$JOD_DIST_DIR/ $ Get-Content -Path logs/jospJOD.log -Tail 100 -Wait\n                 < JOD Agent logs\n                 < Ctrl+C to exit\n$JOD_DIST_DIR/ $ powershell stop.ps1\n                 < Stop command logs\n")))),(0,o.kt)("h3",{id:"as-foreground-command"},"As foreground command"),(0,o.kt)("p",null,"Alternatively an example to ",(0,o.kt)("strong",{parentName:"p"},"execute the JOD Distribution as a foreground command")," and get his JOSP Object's id from console logs or via ",(0,o.kt)("inlineCode",{parentName:"p"},"objectInfo")," JOD Shell's command."),(0,o.kt)(r.Z,{groupId:"os-shell",defaultValue:"bash",values:[{label:"Linux/Mac",value:"bash"},{label:"Windows",value:"powershell"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run JOD Agent as background process"',title:'"Run',JOD:!0,Agent:!0,as:!0,background:!0,'process"':!0},"$JOD_DIST_DIR/ $ bash start.sh true\n                 < Start command logs\n                 < JOD Agent logs (and JOSP Object id)\n                 > JOD Shell\n                 > objectInfo // type 'objectInfo' to print JOSP Object id\n                 > ?list      // type '?list' for JOD Shell command list\n                 > exit       // type 'exit' to shutdown JOD Agent\n"))),(0,o.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run JOD Agent as background process"',title:'"Run',JOD:!0,Agent:!0,as:!0,background:!0,'process"':!0},"$JOD_DIST_DIR/ $ powershell start.ps1 FOREGROUND\n                 < Start command logs\n                 < JOD Agent logs (and JOSP Object id)\n                 > JOD Shell\n                 > objectInfo // type 'objectInfo' to print JOSP Object id\n                 > ?list      // type '?list' for JOD Shell command list\n                 > exit       // type 'exit' to shutdown JOD Agent\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"object-registration-and-usage"},"Object registration and usage"),(0,o.kt)("p",null,"Now your JOSP Object is running. Then you can proceed with the ","[object registration]","\n(/docs/references/josp/jcp/microservices/fe/usage/register_a_josp_object) to register yourself as the object's owner. After that, you can access to that JOSP Object from any JOSP Service (like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/josp/jcp/microservices/fe/"},"JCP FrontEnd"),"), but also share the JOSP Object with your family, friend and colleagues, and may other things."),(0,o.kt)("p",null,"For more info about the JOSP Objects and understand how your objects and services can interact with the JOSP EcoSystem, see following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/end_users/"},"JOSP Docs > Guides > End User")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/what/"},"JOSP Docs > What is?"))),(0,o.kt)("p",null,"Please check the official ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/jsl_services/"},"JSL Service list")," for available software that can interact with your JOSP Objects."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),o=n(67294),r=n(86010),s=n(12466),i=n(16550),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function O(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function D(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(O,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return o.createElement(D,(0,a.Z)({key:String(t)},e))}}}]);