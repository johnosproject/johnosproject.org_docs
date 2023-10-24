"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[1181],{41181:(e,n,t)=>{t.d(n,{ZP:()=>P});var r=t(63366),o=t(87462),i=t(67294),s=t(63961),a=t(95408),c=t(39707),p=t(94780),u=t(11496),l=t(54502),m=t(79718),d=t(90247),f=t(10606);const g=i.createContext();var h=t(1588),w=t(34867);function x(e){return(0,w.Z)("MuiGrid",e)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=(0,h.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...b.map((e=>`grid-xs-${e}`)),...b.map((e=>`grid-sm-${e}`)),...b.map((e=>`grid-md-${e}`)),...b.map((e=>`grid-lg-${e}`)),...b.map((e=>`grid-xl-${e}`))]);var k=t(85893);const v=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Z({breakpoints:e,values:n}){let t="";Object.keys(n).forEach((e=>{""===t&&0!==n[e]&&(t=e)}));const r=Object.keys(e).sort(((n,t)=>e[n]-e[t]));return r.slice(0,r.indexOf(t))}const y=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{container:r,direction:o,item:i,spacing:s,wrap:a,zeroMinWidth:c,breakpoints:p}=t;let u=[];r&&(u=function(e,n,t={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t[`spacing-xs-${String(e)}`]];const r=[];return n.forEach((n=>{const o=e[n];Number(o)>0&&r.push(t[`spacing-${n}-${String(o)}`])})),r}(s,p,n));const l=[];return p.forEach((e=>{const r=t[e];r&&l.push(n[`grid-${e}-${String(r)}`])})),[n.root,r&&n.container,i&&n.item,c&&n.zeroMinWidth,...u,"row"!==o&&n[`direction-xs-${String(o)}`],"wrap"!==a&&n[`wrap-xs-${String(a)}`],...l]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:n}){const t=(0,a.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,a.k9)({theme:e},t,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${$.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:t,rowSpacing:r}=n;let o={};if(t&&0!==r){const n=(0,a.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"==typeof n&&(t=Z({breakpoints:e.breakpoints.values,values:n})),o=(0,a.k9)({theme:e},n,((n,r)=>{var o;const i=e.spacing(n);return"0px"!==i?{marginTop:`-${S(i)}`,[`& > .${$.item}`]:{paddingTop:S(i)}}:null!=(o=t)&&o.includes(r)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}}))}return o}),(function({theme:e,ownerState:n}){const{container:t,columnSpacing:r}=n;let o={};if(t&&0!==r){const n=(0,a.P$)({values:r,breakpoints:e.breakpoints.values});let t;"object"==typeof n&&(t=Z({breakpoints:e.breakpoints.values,values:n})),o=(0,a.k9)({theme:e},n,((n,r)=>{var o;const i=e.spacing(n);return"0px"!==i?{width:`calc(100% + ${S(i)})`,marginLeft:`-${S(i)}`,[`& > .${$.item}`]:{paddingLeft:S(i)}}:null!=(o=t)&&o.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce(((r,i)=>{let s={};if(n[i]&&(t=n[i]),!t)return r;if(!0===t)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,a.P$)({values:n.columns,breakpoints:e.breakpoints.values}),p="object"==typeof c?c[i]:c;if(null==p)return r;const u=Math.round(t/p*1e8)/1e6+"%";let l={};if(n.container&&n.item&&0!==n.columnSpacing){const t=e.spacing(n.columnSpacing);if("0px"!==t){const e=`calc(${u} + ${S(t)})`;l={flexBasis:e,maxWidth:e}}}s=(0,o.Z)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===e.breakpoints.values[i]?Object.assign(r,s):r[e.breakpoints.up(i)]=s,r}),{})}));const W=e=>{const{classes:n,container:t,direction:r,item:o,spacing:i,wrap:s,zeroMinWidth:a,breakpoints:c}=e;let u=[];t&&(u=function(e,n){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const t=[];return n.forEach((n=>{const r=e[n];if(Number(r)>0){const e=`spacing-${n}-${String(r)}`;t.push(e)}})),t}(i,c));const l=[];c.forEach((n=>{const t=e[n];t&&l.push(`grid-${n}-${String(t)}`)}));const m={root:["root",t&&"container",o&&"item",a&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==s&&`wrap-xs-${String(s)}`,...l]};return(0,p.Z)(m,x,n)},M=i.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiGrid"}),{breakpoints:a}=function(){const e=(0,m.Z)(d.Z);return e[f.Z]||e}(),p=(0,c.Z)(t),{className:u,columns:h,columnSpacing:w,component:x="div",container:b=!1,direction:$="row",item:S=!1,rowSpacing:Z,spacing:M=0,wrap:P="wrap",zeroMinWidth:N=!1}=p,j=(0,r.Z)(p,v),z=Z||M,E=w||M,G=i.useContext(g),O=b?h||12:G,C={},B=(0,o.Z)({},j);a.keys.forEach((e=>{null!=j[e]&&(C[e]=j[e],delete B[e])}));const L=(0,o.Z)({},p,{columns:O,container:b,direction:$,item:S,rowSpacing:z,columnSpacing:E,wrap:P,zeroMinWidth:N,spacing:M},C,{breakpoints:a.keys}),T=W(L);return(0,k.jsx)(g.Provider,{value:O,children:(0,k.jsx)(y,(0,o.Z)({ownerState:L,className:(0,s.Z)(T.root,u),as:x,ref:n},B))})}));const P=M},39707:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(87462),o=t(63366),i=t(59766),s=t(44920);const a=["sx"],c=e=>{var n,t;const r={systemProps:{},otherProps:{}},o=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:s.Z;return Object.keys(e).forEach((n=>{o[n]?r.systemProps[n]=e[n]:r.otherProps[n]=e[n]})),r};function p(e){const{sx:n}=e,t=(0,o.Z)(e,a),{systemProps:s,otherProps:p}=c(t);let u;return u=Array.isArray(n)?[s,...n]:"function"==typeof n?(...e)=>{const t=n(...e);return(0,i.P)(t)?(0,r.Z)({},s,t):s}:(0,r.Z)({},s,n),(0,r.Z)({},p,{sx:u})}}}]);