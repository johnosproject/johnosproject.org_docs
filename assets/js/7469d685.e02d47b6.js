"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[2173],{31397:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),r=o(26113);const s={title:"Maker"},i="JOSP Maker",c={unversionedId:"josp/actors/maker",id:"josp/actors/maker",title:"Maker",description:"<WhatIntro",source:"@site/1_what/2_josp/20_actors/22_maker.mdx",sourceDirName:"2_josp/20_actors",slug:"/josp/actors/maker",permalink:"/what/josp/actors/maker",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Maker"},sidebar:"docsSidebar",previous:{title:"End User",permalink:"/what/josp/actors/end_user"},next:{title:"Developer",permalink:"/what/josp/actors/developer"}},l={},u=[],h={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"josp-maker"},"JOSP Maker"),(0,a.kt)(r.ZP,{logo_path:"/img/icons/Maker_Icon_250.png",mdxType:"WhatIntro"},(0,a.kt)("p",null,"A JOSP Object, at least, should be configured by ",(0,a.kt)("strong",{parentName:"p"},"someone that define object's info and structure"),".\nIn the JOSP Project this is the Maker.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Any JOSP Object require a basic configuration before starting.\nThis configuration includes the object's structure, a file that define all features exposed by the object.\nWhoever configures this file is considered ",(0,a.kt)("strong",{parentName:"p"},"the Maker of that JOSP Object"),".\nOnce the maker has finished configuring the object, he can start distributing it.\nThere are two mainly way to distribute JOSP Objects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as physical objects:",(0,a.kt)("br",null),"\nConnected objects that runs the JOD agent.\nWhen plugged in, those objects startup the JOD agent to expose their feature to the JOSP EcoSystem"),(0,a.kt)("li",{parentName:"ul"},"as JOD Distributions:",(0,a.kt)("br",null),"\nJOD distributions are compressed archives that contain all files required to install and run a pre-configured JOD Agent.\nCommonly are used for systems integrations.\nJOD distributions can be installed on a PC (or better on a local server) that can communicate with the system to integrate (gateway, hub, proprietary protocols...).")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," the JOD agent is the software that expose the JOSP Object to the EcoSystem.")),(0,a.kt)("p",null,"All JOD Distribution are configured to use specific firmware's tools (the object's structure define also the list of the firmware calls).\nBecause of that, ",(0,a.kt)("strong",{parentName:"p"},"each JOD Distribution come with his specific requirements"),".",(0,a.kt)("br",null),"\nSometimes those requirements are only software like libraries, tools or special configs.\nOther times, distribution's requirements are also about hardware.\nFor example a distribution can require a specific gateway reachable on the local network."),(0,a.kt)("p",null,"Also, the JOD agent installed on ",(0,a.kt)("strong",{parentName:"p"},"physical objects, can come from a JOD Distribution"),".\nIn this case the Maker design and make the object (physically, connecting sensors and actuators).\nThen he prepares a JOD Distribution to install and run on the physical object.",(0,a.kt)("br",null),"\nThis distribution will be configured to expose to the EcoSystem, certain object's features, echo of them connected to the specific hardware mounted on the object."),(0,a.kt)("p",null,"Often, for JOSP Objects provided as physical objects, the ",(0,a.kt)("strong",{parentName:"p"},"object's maker correspond with the product's manufacturer"),"."),(0,a.kt)("p",null,"Any maker, whether amateur or professional, shares those needs with other Makers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make connected object easily and fast",(0,a.kt)("br",null),"\nIn recent years, new tools reduced the time for prototyping electronic circuits.\nConfiguring the software layer should also be a matter of little time, easy to learn and as self-configuring as possible.",(0,a.kt)("br",null),"\nFast prototyping has become crucial for today's business plans to reduce the time-to-market for a connected product."),(0,a.kt)("li",{parentName:"ul"},"Be free to choose hardware components according to their needs",(0,a.kt)("br",null),"\nEach objects expose his own features and each object must withstand the conditions of its working environment.\nBecause of that, each objects requires different hardware components.\nMakers must be free to design their objects using any hardware component available."),(0,a.kt)("li",{parentName:"ul"},"Not be bound by limits of the tools used",(0,a.kt)("br",null),"\nIn an IoT solution, often, are involved dozens of different service and tools.\nEach of them with their own role and limitations.",(0,a.kt)("br",null),"\nIt must never happen that, once the project has begun, we realize that some tool does not allow us to do what we hoped for."),(0,a.kt)("li",{parentName:"ul"},"Keep component costs and energy consumption as low as possible",(0,a.kt)("br",null),"\nA well-designed object keeps production costs low and when active it reduces its energy consumption to a minimum."),(0,a.kt)("li",{parentName:"ul"},"Being able to forget about the IT infrastructure",(0,a.kt)("br",null),"\nMakers are not often experienced computer technicians.\nIndeed, they usually have little more than basic IT knowledge.",(0,a.kt)("br",null),"\nAt the same time, when the maker is an enterprise that sell connected products, often they don't have the skills or willingness to manage internally an IT infrastructure for their IoT solutions.\nSo, normally they opt for a managed IoT infrastructure. "),(0,a.kt)("li",{parentName:"ul"},"Provide at least one out-of-the-box IoT solution",(0,a.kt)("br",null),"\nA connected object without an IoT service is almost useless.\nMakers, and manufacturers, together with the object, also provides at least an IoT Service to interact with their products.",(0,a.kt)("br",null),"\nDepending on Makers intentions, this IoT Service can be a mobile app for connected object monitor and control, a voice assistant command, a web dashboard with objects stats and reports...")))}p.isMDXComponent=!0},26113:(e,t,o)=>{o.d(t,{ZP:()=>c});var n=o(87462),a=(o(67294),o(3905)),r=o(41181);const s={toc:[]},i="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(i,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{container:!0,spacing:4,mdxType:"Grid"},(0,a.kt)(r.ZP,{item:!0,xs:2,mdxType:"Grid"},(0,a.kt)("img",{src:o.logo_path,width:"200"})),(0,a.kt)(r.ZP,{item:!0,xs:10,mdxType:"Grid"},(0,a.kt)("div",null,o.children))))}c.isMDXComponent=!0}}]);