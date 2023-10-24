"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[9885],{56726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),s=a(26113);const r={title:"Pillars"},i="JOSP Pillar",o={unversionedId:"josp/specs/pillar",id:"josp/specs/pillar",title:"Pillars",description:"<WhatIntro",source:"@site/1_what/2_josp/30_specs/35_pillar.mdx",sourceDirName:"2_josp/30_specs",slug:"/josp/specs/pillar",permalink:"/what/josp/specs/pillar",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Pillars"},sidebar:"docsSidebar",previous:{title:"Structure",permalink:"/what/josp/specs/structure"}},p={},c=[{value:"State",id:"state",level:2},{value:"Action",id:"action",level:2},{value:"Boolean",id:"boolean",level:2},{value:"Range",id:"range",level:2},{value:"Pillar 3",id:"pillar-3",level:2},{value:"Pillar 4",id:"pillar-4",level:2}],u={toc:c},h="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"josp-pillar"},"JOSP Pillar"),(0,l.kt)(s.ZP,{logo_path:"/img/logo/logo_250.png",mdxType:"WhatIntro"},(0,l.kt)("p",null,"Pillars are the object's features representations exposed by JOSP Objects to the JOSP EcoSystem.")),(0,l.kt)("br",null),(0,l.kt)("p",null,"When an object is configured as an JOSP Object, all his features are translated in to pillars.\nDepending on his configuration, a pillar can represent any kind of feature exposed by the object."),(0,l.kt)("p",null,"First, define if the object's feature ",(0,l.kt)("strong",{parentName:"p"},"expose a value or a command executable")," on the object itself.\nDepending on that, the pillar describing this feature must be respectively a ",(0,l.kt)("a",{parentName:"p",href:"#state"},"State")," or an ",(0,l.kt)("a",{parentName:"p",href:"#action"},"Action")," pillar."),(0,l.kt)("p",null,"Then, identify ",(0,l.kt)("strong",{parentName:"p"},"which kind of value or which commands expose the features"),".\nIn the JOSP EcoSystem there are 4 types of pillars (with JOSP 2.2.0 only 2 are available) to describe different values and commands exposed by objects.",(0,l.kt)("br",null),"\nFor examples all binary values (On/Off, Empty/Full, Active/Inactive...) can be represented with a ",(0,l.kt)("a",{parentName:"p",href:"#boolean"},"Boolean")," ",(0,l.kt)("a",{parentName:"p",href:"#state"},"State")," pillar.\nOn other hands all commands to regulate an actuator (oven temperature, speakers volume, valve flow) can be represented with a ",(0,l.kt)("a",{parentName:"p",href:"#range"},"Range")," ",(0,l.kt)("a",{parentName:"p",href:"#action"},"Action")," pillar, and so on..."),(0,l.kt)("h2",{id:"state"},"State"),(0,l.kt)("p",null,"States pillars are configured to read object's values (with firmware calls) and send ",(0,l.kt)("a",{parentName:"p",href:"protocol#state-update"},"update messages"),"."),(0,l.kt)("p",null,"Depending on firmware, states pillars can listen for firmware updates or can periodically poll the firmware for updated value.\nOnly when the value changes, this pillar sends the update message to all connected JOSP Services."),(0,l.kt)("p",null,"This message is send to all JOSP Services/Users with at least the ",(0,l.kt)("a",{parentName:"p",href:"permissions#state"},"STATE")," permission on current object."),(0,l.kt)("h2",{id:"action"},"Action"),(0,l.kt)("p",null,"Actions inherit all features from States pillars.\nSo also action pillars send update messages, when configured object's value changes."),(0,l.kt)("p",null,"Moreover, actions pillars expose commands that can be executed by JOSP Services.\nJOSP Services can execute those commands sending an ",(0,l.kt)("a",{parentName:"p",href:"permissions#action-request"},"action request")," to the JOSP Object. "),(0,l.kt)("p",null,"When a pillar action receive an action request, depending on his configuration, it translates the action request in firmware calls.\nFinally, the firmware send the command to the object's actuators."),(0,l.kt)("p",null,"Only JOSP Services/Users with at least the ",(0,l.kt)("a",{parentName:"p",href:"permissions#action"},"ACTION")," permission can send action requests to current object."),(0,l.kt)("h2",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"Boolean pillars can be used to ",(0,l.kt)("strong",{parentName:"p"},"represent any binary value")," like On/Off, Empty/Full, Active/Inactive...",(0,l.kt)("br",null),"\nOn the other side it can be used also to ",(0,l.kt)("strong",{parentName:"p"},"represent any pair of opposing commands")," like SwitchOn/SwitchOff, ToEmpty/ToFill, Start/Stop..."),(0,l.kt)("p",null,"A Boolean state emits a status update message each time his value switches.",(0,l.kt)("br",null),"\nA Boolean action exposes setTrue and setFalse opposing commands, but also the switchValue command that, as you can guess, switch current pillar's value."),(0,l.kt)("h2",{id:"range"},"Range"),(0,l.kt)("p",null,"Range pillars are used to ",(0,l.kt)("strong",{parentName:"p"},"represent values within a range")," like environment temperature in \xb0C, vehicle speed in Km/h, % of humidity in the ground...\nRange pillars are also used to ",(0,l.kt)("strong",{parentName:"p"},"represent commands to regulate remotely a value within a range")," like the oven temperature, a valve flow, the speaker volume..."),(0,l.kt)("p",null,"Range pillars introduce some specific properties in the pillar configuration like ",(0,l.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"step"),".\nThose properties allow pillar to determinate the range of the value handled."),(0,l.kt)("p",null,"A Range state emits a status update each time his value change.",(0,l.kt)("br",null),"\nA Range action exposes different commands to remotely control the value like setValue, setMin, setMax, increase and decrease."),(0,l.kt)("p",null,"This pillar type is really flexible.",(0,l.kt)("br",null),"\nIt can represent also cumulative values, like how many times a light was switched on/off.\nThose pillars can set ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," as the minimum value and a high number as the maximum value reachable.",(0,l.kt)("br",null),"\nAnother example where use this pillar, is when object allow to select a program (like the washing machine).\nEach program can be associated to a value from 0 to N.\nThen the pillar should be configured with ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," as the minimum value, ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," as the maximum value and ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," as the step.\nSo services, using exposed commands, can easily select the Nth program, switch to the next/previous one, or even select the first/last program."),(0,l.kt)("h2",{id:"pillar-3"},"Pillar 3"),(0,l.kt)("p",null,"Not yet available."),(0,l.kt)("h2",{id:"pillar-4"},"Pillar 4"),(0,l.kt)("p",null,"Not yet available."))}m.isMDXComponent=!0},26113:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),l=(a(67294),a(3905)),s=a(41181);const r={toc:[]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,l.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.ZP,{container:!0,spacing:4,mdxType:"Grid"},(0,l.kt)(s.ZP,{item:!0,xs:2,mdxType:"Grid"},(0,l.kt)("img",{src:a.logo_path,width:"200"})),(0,l.kt)(s.ZP,{item:!0,xs:10,mdxType:"Grid"},(0,l.kt)("div",null,a.children))))}o.isMDXComponent=!0}}]);