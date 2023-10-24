"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[8756],{90895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var s=r(87462),n=(r(67294),r(3905)),o=r(54872),a=r(32671);const p={slug:"./"},i="JOD Agent References",c={unversionedId:"jod/index",id:"jod/index",title:"JOD Agent References",description:"<ReferenceIntro",source:"@site/3_references/1_josp/1_jod/0_index.mdx",sourceDirName:"1_jod",slug:"/jod/",permalink:"/references/josp/jod/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"./"},sidebar:"referencesSidebar",previous:{title:"JOSP Components References",permalink:"/references/josp/"},next:{title:"Requirements",permalink:"/references/josp/jod/requirements"}},l={},m=[{value:"Versions",id:"versions",level:2},{value:"Collaborate",id:"collaborate",level:2},{value:"Licences",id:"licences",level:2}],h={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jod-agent-references"},"JOD Agent References"),(0,n.kt)(o.ZP,{logo_path:"/img/icons/JOD_Icon_250.png",mdxType:"ReferenceIntro"},(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"John Object Daemon is software that expose a ",(0,n.kt)("a",{parentName:"strong",href:"/what/josp/object"},"JOSP Object")," to the ",(0,n.kt)("a",{parentName:"strong",href:"/what/josp/ecosystem"},"JOSP EcoSystem")),".\nIt can be installed on computers, embedded devices, servers, etc..."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NB!"),": normally it's distributed within a ",(0,n.kt)("a",{parentName:"p",href:"/references/jod_dists/"},"JOD Distribution")," designed by ",(0,n.kt)("a",{parentName:"p",href:"/what/josp/actors/maker"},"Makers"),".")),(0,n.kt)(a.ZP,{proj_name:"JOD",refs_dir:"josp/jod",ver_stable:"2.2.1",ver_dev:"2.3.0-DEV",repo_name:"com.robypomper.josp",mdxType:"ReferenceInfo"}),(0,n.kt)("p",null,"The JOD Agent read object's structure from ",(0,n.kt)("inlineCode",{parentName:"p"},"configs/struct.jod")," file and expose that structure to the ",(0,n.kt)("a",{parentName:"p",href:"/what/josp/ecosystem"},"JOSP EcoSystem")," and then to ",(0,n.kt)("a",{parentName:"p",href:"/what/josp/service"},"JOSP Services")," as a ",(0,n.kt)("a",{parentName:"p",href:"/what/josp/object"},"JOSP Object"),".\nOnly JOSP Services with the right ",(0,n.kt)("a",{parentName:"p",href:"/what/josp/specs/permissions"},"permission")," can access to the exposed JOSP Object. Depending on their permissions, they can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if permission=",(0,n.kt)("a",{parentName:"li",href:"/what/josp/specs/permissions#state"},"STATE"),": read object's structure and contained ",(0,n.kt)("a",{parentName:"li",href:"specs/pillars#states"},"Pillar's states")),(0,n.kt)("li",{parentName:"ul"},"if permission=",(0,n.kt)("a",{parentName:"li",href:"/what/josp/specs/permissions#action"},"ACTION"),": require ",(0,n.kt)("a",{parentName:"li",href:"specs/pillars#actions"},"Pillar's actions")," executions"),(0,n.kt)("li",{parentName:"ul"},"if permission=",(0,n.kt)("a",{parentName:"li",href:"/what/josp/specs/permissions#owner"},"OWNER"),": edit object's name, owner or permissions"),(0,n.kt)("li",{parentName:"ul"},"if permission=",(0,n.kt)("a",{parentName:"li",href:"/what/josp/specs/permissions#none"},"NONE"),": list object but can't get object's info or structure")),(0,n.kt)("p",null,"In the JOSP EcoSystem ",(0,n.kt)("strong",{parentName:"p"},"each JOSP Object is identified by his ID"),". The ",(0,n.kt)("a",{parentName:"p",href:"specs/object_id"},"Object's ID"),", if not yet set, is generated automatically at JOD Agent startup. This, normally happens on object's first startup.\nThe only other circumstance when the object's ID changes, is when the object's change his owner. That happen on object's owner registration or when current owner 'sell' the object to another user."),(0,n.kt)("p",null,"At startup, the JOD Agent loads the ",(0,n.kt)("a",{parentName:"p",href:"specs/structure"},"object's structure")," and initialize all required object's ",(0,n.kt)("a",{parentName:"p",href:"specs/pillars"},"Pillars")," and relative ",(0,n.kt)("a",{parentName:"p",href:"specs/workers"},"Workers"),". Then checks if configured ",(0,n.kt)("a",{parentName:"p",href:"/references/josp/jcp"},"JCP")," is reachable, if it's available, the object opens a connection with returned ",(0,n.kt)("a",{parentName:"p",href:"/references/josp/jcp/microservices/gws"},"JCP Gateways"),".",(0,n.kt)("br",null),"\nFinally, it startup a local server for direct communication"),(0,n.kt)("p",null,"It's possible to ",(0,n.kt)("strong",{parentName:"p"},"customize the exposed object")," changing the ",(0,n.kt)("a",{parentName:"p",href:"specs/configs"},"JOD Agent behaviour")," with his main configs file  ",(0,n.kt)("inlineCode",{parentName:"p"},"configs/jod.yml")," or editing the ",(0,n.kt)("inlineCode",{parentName:"p"},"configs/struct.jod")," file to alter his ",(0,n.kt)("a",{parentName:"p",href:"specs/structure"},"structure"),".\nHere a list of all JOD Agent's ",(0,n.kt)("a",{parentName:"p",href:"specs/files"},"files"),"."),(0,n.kt)("p",null,"JOD Agent was developed to ",(0,n.kt)("strong",{parentName:"p"},"run on many different type of devices (computers, embedded, server...) and keep running 24/7"),".",(0,n.kt)("br",null),"\nBecause of that, normally it's executed as a ",(0,n.kt)("a",{parentName:"p",href:"usage#daemon"},"background process"),", but occasionally it can be executed also as a ",(0,n.kt)("a",{parentName:"p",href:"usage#command"},"foreground command")," and managed by the ",(0,n.kt)("a",{parentName:"p",href:"specs/shell"},"JOD Shell"),". Mostly for configurations test purposes."),(0,n.kt)("p",null,"Here a simple guide on ",(0,n.kt)("strong",{parentName:"p"},"JOD Agent's ",(0,n.kt)("a",{parentName:"strong",href:"usage"},"usage")," and troubleshooting"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"versions"},"Versions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.0.0/"},"2.0.0")),(0,n.kt)("li",{parentName:"ul"},"v 2.1.0"),(0,n.kt)("li",{parentName:"ul"},"v ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.0/"},"2.2.0")),(0,n.kt)("li",{parentName:"ul"},"v ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/2.2.1/"},"2.2.1")),(0,n.kt)("li",{parentName:"ul"},"v ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/develop/"},"2.3.0-DEV"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"collaborate"},"Collaborate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Any kind of collaboration is welcome!")," This is an Open Source project, so we are happy to share our experience with other developers, makers and users. Bug reporting, extension development, documentation and guides etc... are activities where anybody can help to improve this project."),(0,n.kt)("p",null,"Please email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:tech@johnosproject.com"},"tech@johnosproject.com"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"licences"},"Licences"),(0,n.kt)("p",null,"The John Object Daemon is an open-source project part of the John Os Project and is distributed with a ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/master/LICENSES/John%20Object%20Daemon"},"GPLv3 license"),"."))}d.isMDXComponent=!0},32671:(e,t,r)=>{r.d(t,{ZP:()=>p});var s=r(87462),n=(r(67294),r(3905));const o={toc:[]},a="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(a,(0,s.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Stable version:",(0,n.kt)("span",null," ",r.ver_stable)),(0,n.kt)("li",{parentName:"ul"},"Development version:",(0,n.kt)("span",null," ",r.ver_dev)),(0,n.kt)("li",{parentName:"ul"},"Docs:",(0,n.kt)("a",{href:"https://www.johnosproject.org/references/"+r.refs_dir+"/"}," ",r.proj_name," @ JOSP Docs")),(0,n.kt)("li",{parentName:"ul"},"Repo:",(0,n.kt)("a",{href:"https://bitbucket.org/johnosproject_shared/"+r.repo_name+"/"}," ",r.repo_name," @ Bitbucket")),(0,n.kt)("li",{parentName:"ul"},"Downloads:",(0,n.kt)("a",{href:"https://bitbucket.org/johnosproject_shared/"+r.repo_name+"/downloads/"}," ",r.repo_name," > Downloads @ Bitbucket")))))}p.isMDXComponent=!0},54872:(e,t,r)=>{r.d(t,{ZP:()=>i});var s=r(87462),n=(r(67294),r(3905)),o=r(41181);const a={toc:[]},p="wrapper";function i(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{container:!0,spacing:4,mdxType:"Grid"},(0,n.kt)(o.ZP,{item:!0,xs:2,mdxType:"Grid"},(0,n.kt)("img",{src:r.logo_path,width:"200"})),(0,n.kt)(o.ZP,{item:!0,xs:10,mdxType:"Grid"},(0,n.kt)("div",null,r.children))))}i.isMDXComponent=!0}}]);