"use strict";(self.webpackChunksolara_strapi=self.webpackChunksolara_strapi||[]).push([[3677],{4186:(y,o,e)=>{e.r(o),e.d(o,{default:()=>D});var t=e(67294),a=e(30422),r=e(64593),i=e(86896),m=e(86706),E=e(36364),n=e(14087),d=e(17034),P=e(185),T=e(53979),C=e(49066),x=e(38939),L=e(8060),h=e(79031),u=e(37909),g=e(75515),A=e(15234),I=e(88767);const O=l=>{const s=(0,a.lm)(),{get:c}=(0,a.kY)();return(0,I.useQuery)(["plugins"],async()=>{const{data:v}=await c("/admin/plugins");return v},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,n.G)();(0,a.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),v=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:p,data:M}=O(v);return p!=="success"&&p!=="error"?t.createElement(d.A,null,t.createElement(P.o,{"aria-busy":!0},t.createElement(a.dO,null))):t.createElement(d.A,null,t.createElement(P.o,null,t.createElement(T.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(C.D,null,t.createElement(x.i,{colCount:2,rowCount:M?.plugins?.length??0+1},t.createElement(L.h,null,t.createElement(h.Tr,null,t.createElement(u.Th,null,t.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(u.Th,null,t.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(A.p,null,M.plugins.map(({name:f,displayName:B,description:N})=>t.createElement(h.Tr,{key:f},t.createElement(u.Td,null,t.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${f}`,defaultMessage:B}))),t.createElement(u.Td,null,t.createElement(g.Z,{textColor:"neutral800"},l({id:`global.plugins.${f}.description`,defaultMessage:N}))))))))))},D=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return t.createElement(a.O4,{permissions:s.marketplace.main},t.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),t.createElement(Z,null))}},17034:(y,o,e)=>{e.d(o,{A:()=>E});var t=e(85893),a=e(88972),r=e(41580);const i=(0,a.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,m=(0,a.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:n,children:d})=>(0,t.jsxs)(i,{hasSideNav:!!n,children:[n,(0,t.jsx)(m,{paddingBottom:10,children:d})]})}}]);
