"use strict";(self.webpackChunksolara_strapi=self.webpackChunksolara_strapi||[]).push([[3650],{60648:(z,B,t)=>{t.r(B),t.d(B,{default:()=>Ot});var e=t(67294),u=t(185),a=t(30422),L=t(64593),h=t(86896),R=t(16550),v=t(4396),P=t(18206),i=t(24359),S=t(41580),H=t(75515),T=t(17034),o=t(36989),p=t(92155),E=t(12028),M=t(49066),O=t(67819),A=t(11047),Q=t(63237),N=t(70004),ee=t(78114),Y=t(50738),Ie=t(29729),Ue=t(4585),ge=t(80129),We=t(73727),te=t(88972),be=t(70572),Ke=t(21050),$e=t(4114),J=t(28742),ze=t(52805),He=t(45697),f=t.n(He);const ne=({pagination:s})=>e.createElement(S.x,{paddingTop:6},e.createElement(A.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.v4,null),e.createElement(a.tU,{pagination:s})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:f().shape({page:f().number,pageCount:f().number,pageSize:f().number,total:f().number})};var Qe=t(45687),Ve=t(24214),Ge=t(19839),C=t(11727),Ne=t(54314),Ye=t(40426),Je=t(41801),Xe=t(60269),we=t(93593),V=t(29728),ke=t(20022),qe=t(29731);const fe=({selected:s,onSuccess:r})=>{const{formatMessage:d}=(0,h.Z)(),[c,m]=(0,e.useState)(!1),{isLoading:g,remove:y}=(0,qe.K)(),D=async()=>{await y(s),r()};return e.createElement(e.Fragment,null,e.createElement(V.z,{variant:"danger-light",size:"S",startIcon:e.createElement(ke.Z,null),onClick:()=>m(!0)},d({id:"global.delete",defaultMessage:"Delete"})),e.createElement(a.QH,{isConfirmButtonLoading:g,isOpen:c,onToggleDialog:()=>m(!1),onConfirm:D}))};fe.propTypes={selected:f().arrayOf(C.pw,C.nx).isRequired,onSuccess:f().func.isRequired};var _e=t(32605),he=t(42866),Ee=t(59946),et=t(77197),tt=t(24969),nt=t(11276),at=t(64777),st=t(36856),lt=t(41054),ot=t(41609),rt=t.n(ot),ve=t(88767);const it=()=>{const s=(0,a.lm)(),r=(0,ve.useQueryClient)(),{post:d}=(0,a.kY)(),c=({destinationFolderId:y,filesAndFolders:D})=>{const x=D.reduce((F,U)=>{const{id:l,type:K}=U,j=K==="asset"?"fileIds":"folderIds";return F[j]||(F[j]=[]),F[j].push(l),F},{});return d("/upload/actions/bulk-move",{...x,destinationFolderId:y})},m=(0,ve.useMutation)(c,{onSuccess(y){const{data:{data:D}}=y;D?.files?.length>0&&(r.refetchQueries([P.Z,"assets"],{active:!0}),r.refetchQueries([P.Z,"asset-count"],{active:!0})),r.refetchQueries([P.Z,"folders"],{active:!0}),s({type:"success",message:{id:(0,i.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...m,move:(y,D)=>m.mutateAsync({destinationFolderId:y,filesAndFolders:D})}};var dt=t(81138),ct=t(71381);const ae=({onClose:s,selected:r,currentFolder:d})=>{const{formatMessage:c}=(0,h.Z)(),{data:m,isLoading:g}=(0,dt.v)(),{move:y}=it();if(!m)return null;const D=async(U,{setErrors:l})=>{try{await y(U.destination.value,r),s()}catch(K){const X=(0,a.OT)(K).errors.reduce((w,W)=>(w[W.values?.path?.length||"destination"]=W.defaultMessage,w),{});rt()(X)||l(X)}},x=()=>{s()};if(g)return e.createElement(he.P,{onClose:x,labelledBy:"title"},e.createElement(Ee.f,null,e.createElement(A.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(et.a,null,c({id:(0,i.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const F={destination:{value:d?.id||"",label:d?.name||m[0].label}};return e.createElement(he.P,{onClose:x,labelledBy:"title"},e.createElement(lt.J9,{validateOnChange:!1,onSubmit:D,initialValues:F},({values:U,errors:l,setFieldValue:K})=>e.createElement(a.l0,{noValidate:!0},e.createElement(tt.x,null,e.createElement(H.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,i.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(Ee.f,null,e.createElement(nt.r,{gap:4},e.createElement(O.P,{xs:12,col:12},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(at.Q,{htmlFor:"folder-destination"},c({id:(0,i.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(ct.Z,{options:m,onChange:j=>{K("destination",j)},defaultValue:U.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(H.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(st.m,{startActions:e.createElement(V.z,{onClick:x,variant:"tertiary",name:"cancel"},c({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(V.z,{type:"submit",loading:g},c({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};ae.defaultProps={currentFolder:void 0},ae.propTypes={onClose:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.nx,C.pw).isRequired};const se=({selected:s,onSuccess:r,currentFolder:d})=>{const{formatMessage:c}=(0,h.Z)(),[m,g]=(0,e.useState)(!1),y=()=>{g(!1),r()};return e.createElement(e.Fragment,null,e.createElement(V.z,{variant:"secondary",size:"S",startIcon:e.createElement(_e.Z,null),onClick:()=>g(!0)},c({id:"global.move",defaultMessage:"Move"})),m&&e.createElement(ae,{currentFolder:d,onClose:y,selected:s}))};se.defaultProps={currentFolder:void 0},se.propTypes={onSuccess:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.pw,C.nx).isRequired};const le=({selected:s,onSuccess:r,currentFolder:d})=>{const{formatMessage:c}=(0,h.Z)();return e.createElement(A.k,{gap:2,paddingBottom:5},e.createElement(H.Z,{variant:"epsilon",textColor:"neutral600"},c({id:(0,we.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s.filter(({type:m})=>m==="folder").length,numberAssets:s.filter(({type:m})=>m==="asset").length})),e.createElement(fe,{selected:s,onSuccess:r}),e.createElement(se,{currentFolder:d,selected:s,onSuccess:r}))};le.defaultProps={currentFolder:void 0},le.propTypes={onSuccess:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.pw,C.nx).isRequired};var ut=t(65169),oe=t(96315),mt=t(54053);const gt=({isFiltering:s,canCreate:r,canRead:d})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:d?r?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},pe=({canCreate:s,isFiltering:r,canRead:d,onActionClick:c})=>{const{formatMessage:m}=(0,h.Z)(),g=gt({isFiltering:r,canCreate:s,canRead:d});return e.createElement(mt.i,{icon:d?null:ut.Z,action:s&&!r&&e.createElement(V.z,{variant:"secondary",startIcon:e.createElement(oe.Z,null),onClick:c},m({id:(0,i.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:m({...g,id:(0,i.OB)(g.id)})})};pe.propTypes={canCreate:f().bool.isRequired,canRead:f().bool.isRequired,isFiltering:f().bool.isRequired,onActionClick:f().func.isRequired};var ft=t(89597),ht=t(99398),Et=t(32269),ye=t(62082);const vt=()=>{const s=(0,e.useRef)(null),[r,d]=(0,e.useState)(!1),{formatMessage:c}=(0,h.Z)(),{trackUsage:m}=(0,a.rS)(),[{query:g},y]=(0,a.Kx)(),D=g?.filters?.$and||[],x=()=>d(l=>!l),F=l=>{y({filters:{$and:l},page:1})},U=l=>{m("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),y({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(V.z,{variant:"tertiary",ref:s,startIcon:e.createElement(ft.Z,null),onClick:x,size:"S"},c({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(Et.Z,{displayedFilters:ye.Z,filters:D,onSubmit:U,onToggle:x,source:s}),e.createElement(ht.Z,{appliedFilters:D,filtersSchema:ye.Z,onRemoveFilter:F}))};var pt=t(53979),yt=t(23620),xt=t(67109),Mt=t(22976);const re=({breadcrumbs:s,canCreate:r,folder:d,onToggleEditFolderDialog:c,onToggleUploadAssetDialog:m})=>{const{formatMessage:g}=(0,h.Z)(),{pathname:y}=(0,R.TH)(),[{query:D}]=(0,a.Kx)(),x={...D,folder:d?.parent?.id??void 0,folderPath:d?.parent?.path??void 0};return e.createElement(pt.T,{title:g({id:(0,i.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&d&&e.createElement(Mt.O,{as:"nav",label:g({id:(0,i.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:d?.id}),navigationAction:d&&e.createElement(yt.r,{startIcon:e.createElement(xt.Z,null),to:`${y}?${(0,ge.stringify)(x,{encode:!1})}`},g({id:(0,i.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:r&&e.createElement(A.k,{gap:2},e.createElement(V.z,{startIcon:e.createElement(oe.Z,null),variant:"secondary",onClick:c},g({id:(0,i.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(V.z,{startIcon:e.createElement(oe.Z,null),onClick:m},g({id:(0,i.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};re.defaultProps={breadcrumbs:!1,folder:null},re.propTypes={breadcrumbs:f().oneOfType([C.Fv,f().bool]),canCreate:f().bool.isRequired,folder:C.nx,onToggleEditFolderDialog:f().func.isRequired,onToggleUploadAssetDialog:f().func.isRequired};const Ct=(0,te.ZP)(S.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,xe=(0,te.ZP)(H.Z)`
  max-width: 100%;
`,Me=(0,te.ZP)(S.x)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Bt=()=>{const{push:s}=(0,R.k6)(),{canRead:r,canCreate:d,canUpdate:c,canCopyLink:m,canDownload:g,isLoading:y}=(0,Xe.y)(),D=(0,e.useRef)(),{formatMessage:x}=(0,h.Z)(),{pathname:F}=(0,R.TH)(),{trackUsage:U}=(0,a.rS)(),[{query:l},K]=(0,a.Kx)(),j=Boolean(l._q||l.filters),[X,w]=(0,a.Yw)(C.uf.view,C.Uk.GRID),W=X===C.Uk.GRID,{data:b,isLoading:At,errors:Dt}=(0,Ne.L)({skipWhen:!r,query:l}),{data:Pt,isLoading:Tt,errors:Ft}=(0,Je.j)({enabled:r&&b?.pagination?.page===1&&!(0,i.rV)(l),query:l}),{data:ie,isLoading:Ce,error:Rt}=(0,Ye.W)(l?.folder,{enabled:r&&!!l?.folder});Rt?.response?.status===404&&s(F);const k=Pt?.map(n=>({...n,type:"folder",folderURL:(0,i.Km)(F,l,n.id),isSelectable:c}))??[],Z=k?.length||0,q=b?.results?.map(n=>({...n,type:"asset",isSelectable:c}))||[],I=q?.length??0,jt=b?.pagination?.total,Be=Ce||Tt||y||At,[St,Zt]=(0,e.useState)(!1),[It,Le]=(0,e.useState)(!1),[Oe,de]=(0,e.useState)(void 0),[ce,Ae]=(0,e.useState)(void 0),[$,{selectOne:_,selectAll:De}]=(0,a.Uq)(["type","id"],[]),Pe=$?.length>0&&$?.length!==I+Z,ue=()=>Zt(n=>!n),Te=({created:n=!1}={})=>{n&&l?.page!=="1"&&K({...l,page:1}),Le(G=>!G)},Fe=(n,G)=>{n.target.checked&&U("didSelectAllMediaLibraryElements"),De(G)},Re=n=>{U("didSortMediaLibraryElements",{location:"upload",sort:n}),K({sort:n})},je=n=>{Ae(n),Le(!0)},Ut=n=>{Ae(null),Te(n),D.current&&D.current.focus()},Se=n=>{n===I&&b.pagination.page===b.pagination.pageCount&&b.pagination.page>1&&K({...l,page:b.pagination.page-1})},Wt=()=>{De(),Se($.length)};return(0,a.go)(),e.createElement(T.A,null,e.createElement(u.o,{"aria-busy":Be},e.createElement(re,{breadcrumbs:!Ce&&(0,i.M4)(ie,{pathname:F,query:l}),canCreate:d,onToggleEditFolderDialog:Te,onToggleUploadAssetDialog:ue,folder:ie}),e.createElement(o.Z,{startActions:e.createElement(e.Fragment,null,c&&W&&(I>0||Z>0)&&e.createElement(Ct,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(p.C,{"aria-label":x({id:(0,i.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Pe,value:(I>0||Z>0)&&$.length===I+Z,onChange:n=>Fe(n,[...q,...k])})),r&&W&&e.createElement(Qe.Z,{value:l?.sort,onChangeSort:Re}),r&&e.createElement(vt,null)),endActions:e.createElement(e.Fragment,null,e.createElement(a.jW,{permissions:C._I.configureView},e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(E.h,{forwardedAs:We.rU,to:{pathname:`${F}/configuration`,search:(0,ge.stringify)(l,{encode:!1})},icon:e.createElement(ee.Z,null),label:x({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(E.h,{icon:W?e.createElement(Y.Z,null):e.createElement(Ie.Z,null),label:x(W?{id:(0,i.OB)("view-switch.list"),defaultMessage:"List View"}:{id:(0,i.OB)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>w(W?C.Uk.LIST:C.Uk.GRID)})),e.createElement(a.m,{label:x({id:(0,i.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(M.D,null,$.length>0&&e.createElement(le,{currentFolder:ie,selected:$,onSuccess:Wt}),Be&&e.createElement(a.dO,null),(Dt||Ft)&&e.createElement(a.Hn,null),Z===0&&I===0&&e.createElement(pe,{canCreate:d,canRead:r,isFiltering:j,onActionClick:ue}),r&&!W&&(I>0||Z>0)&&e.createElement(Ve.b,{assetCount:I,folderCount:Z,indeterminate:Pe,onChangeSort:Re,onChangeFolder:(n,G)=>s((0,i.Km)(F,l,{folder:n,folderPath:G})),onEditAsset:de,onEditFolder:je,onSelectOne:_,onSelectAll:Fe,rows:[...k,...q],selected:$,shouldDisableBulkSelect:!c,sortQuery:l?.sort??""}),r&&W&&e.createElement(e.Fragment,null,Z>0&&e.createElement(ze.a,{title:(j&&I>0||!j)&&x({id:(0,i.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Z})||""},k.map(n=>{const bt=!!$.filter(({type:me})=>me==="folder").find(me=>me.id===n.id),Ze=(0,i.Km)(F,l,{folder:n?.id,folderPath:n?.path});return e.createElement(O.P,{col:3,key:`folder-${n.id}`},e.createElement(J.Ac,{ref:ce&&n.id===ce.id?D:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:Ze,startAction:_&&n.isSelectable?e.createElement(J.MM,{"data-testid":`folder-checkbox-${n.id}`,value:bt,onChange:()=>_(n)}):null,cardActions:e.createElement(E.h,{icon:e.createElement(Ue.Z,null),"aria-label":x({id:(0,i.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>je(n)})},e.createElement(J.Bu,null,e.createElement(J.u6,{to:Ze},e.createElement(A.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(xe,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(Q.T,null,":")),e.createElement(xe,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},x({id:(0,i.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),I>0&&Z>0&&e.createElement(S.x,{paddingTop:6,paddingBottom:4},e.createElement(N.i,null)),I>0&&e.createElement(be.r,{assets:q,onEditAsset:de,onSelectAsset:_,selectedAssets:$.filter(({type:n})=>n==="asset"),title:(!j||j&&Z>0)&&b?.pagination?.page===1&&x({id:(0,i.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:jt})||""})),b?.pagination&&e.createElement(ne,{pagination:b.pagination}))),St&&e.createElement(Ge.x,{onClose:ue,trackedLocation:"upload",folderId:l?.folder}),It&&e.createElement($e.f,{onClose:Ut,folder:ce,parentFolderId:l?.folder,location:"upload"}),Oe&&e.createElement(Ke.s,{onClose:n=>{n===null&&Se(1),de(void 0)},asset:Oe,canUpdate:c,canCopyLink:m,canDownload:g,trackedLocation:"upload"}))},Lt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,47670))),Ot=()=>{const{config:{isLoading:s,isError:r,data:d}}=(0,v.Z)(),[{rawQuery:c},m]=(0,a.Kx)(),{formatMessage:g}=(0,h.Z)(),y=g({id:(0,i.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{s||r||c||m({sort:d.sort,page:1,pageSize:d.pageSize})},[s,r,d,c,m]),(0,a.go)(),e.createElement(u.o,{"aria-busy":s},e.createElement(L.q,{title:y}),s&&e.createElement(a.dO,null),c?e.createElement(e.Suspense,{fallback:e.createElement(a.dO,null)},e.createElement(R.rs,null,e.createElement(R.AW,{exact:!0,path:`/plugins/${P.Z}`,component:Bt}),e.createElement(R.AW,{exact:!0,path:`/plugins/${P.Z}/configuration`,render:()=>e.createElement(Lt,{config:d})}))):null)}},36989:(z,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893),u=t(11047);const a=({startActions:L,endActions:h})=>!L&&!h?null:(0,e.jsxs)(u.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(u.k,{gap:2,wrap:"wrap",children:L}),(0,e.jsx)(u.k,{gap:2,shrink:0,wrap:"wrap",children:h})]})},49066:(z,B,t)=>{t.d(B,{D:()=>a});var e=t(85893),u=t(41580);const a=({children:L})=>(0,e.jsx)(u.x,{paddingLeft:10,paddingRight:10,children:L})},53979:(z,B,t)=>{t.d(B,{A:()=>T,T:()=>S});var e=t(85893),u=t(67294),a=t(88972);const L=o=>{const p=(0,u.useRef)(null),[E,M]=(0,u.useState)(!0),O=([A])=>{M(A.isIntersecting)};return(0,u.useEffect)(()=>{const A=p.current,Q=new IntersectionObserver(O,o);return A&&Q.observe(p.current),()=>{A&&Q.disconnect()}},[p,o]),[p,E]};var h=t(79698);const R=(o,p)=>{const E=(0,h.W)(p);(0,u.useLayoutEffect)(()=>{const M=new ResizeObserver(E);return Array.isArray(o)?o.forEach(O=>{O.current&&M.observe(O.current)}):o.current&&M.observe(o.current),()=>{M.disconnect()}},[o,E])};var v=t(41580),P=t(11047),i=t(75515);const S=o=>{const p=(0,u.useRef)(null),[E,M]=(0,u.useState)(null),[O,A]=L({root:null,rootMargin:"0px",threshold:0});return R(O,()=>{O.current&&M(O.current.getBoundingClientRect())}),(0,u.useEffect)(()=>{p.current&&M(p.current.getBoundingClientRect())},[p]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:E?.height},ref:O,children:A&&(0,e.jsx)(T,{ref:p,...o})}),!A&&(0,e.jsx)(T,{...o,sticky:!0,width:E?.width})]})};S.displayName="HeaderLayout";const H=(0,a.ZP)(v.x)`
  width: ${({width:o})=>o?`${o/16}rem`:void 0};
  z-index: ${({theme:o})=>o.zIndices[1]};
`,T=u.forwardRef(({navigationAction:o,primaryAction:p,secondaryAction:E,subtitle:M,title:O,sticky:A,width:Q,...N},ee)=>{const Y=typeof M=="string";return A?(0,e.jsx)(H,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Q,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(P.k,{justifyContent:"space-between",children:[(0,e.jsxs)(P.k,{children:[o&&(0,e.jsx)(v.x,{paddingRight:3,children:o}),(0,e.jsxs)(v.x,{children:[(0,e.jsx)(i.Z,{variant:"beta",as:"h1",...N,children:O}),Y?(0,e.jsx)(i.Z,{variant:"pi",textColor:"neutral600",children:M}):M]}),E?(0,e.jsx)(v.x,{paddingLeft:4,children:E}):null]}),(0,e.jsx)(P.k,{children:p?(0,e.jsx)(v.x,{paddingLeft:2,children:p}):void 0})]})}):(0,e.jsxs)(v.x,{ref:ee,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0,children:[o?(0,e.jsx)(v.x,{paddingBottom:2,children:o}):null,(0,e.jsxs)(P.k,{justifyContent:"space-between",children:[(0,e.jsxs)(P.k,{minWidth:0,children:[(0,e.jsx)(i.Z,{as:"h1",variant:"alpha",...N,children:O}),E?(0,e.jsx)(v.x,{paddingLeft:4,children:E}):null]}),p]}),Y?(0,e.jsx)(i.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:M}):M]})})},17034:(z,B,t)=>{t.d(B,{A:()=>R});var e=t(85893),u=t(88972),a=t(41580);const L=(0,u.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:v})=>v?"auto 1fr":"1fr"};
`,h=(0,u.ZP)(a.x)`
  overflow-x: hidden;
`,R=({sideNav:v,children:P})=>(0,e.jsxs)(L,{hasSideNav:!!v,children:[v,(0,e.jsx)(h,{paddingBottom:10,children:P})]})},23620:(z,B,t)=>{t.d(B,{r:()=>H});var e=t(85893),u=t(67294),a=t(17772),L=t(73727),h=t(88972),R=t(15585),v=t(75515),P=t(41580);const i=h.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:T})=>T?"none":void 0};
  color: ${({disabled:T,theme:o})=>T?o.colors.neutral600:o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${v.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:T})=>T.colors.primary500};
  }

  &:active {
    color: ${({theme:T})=>T.colors.primary700};
  }

  ${R.BF};
`,S=(0,h.ZP)(P.x)`
  display: flex;
`,H=u.forwardRef(({children:T,href:o,to:p,disabled:E=!1,startIcon:M,endIcon:O,...A},Q)=>(0,e.jsxs)(i,{as:p&&!E?L.OL:"a",target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,to:E?void 0:p,href:E?"#":o,disabled:E,ref:Q,...A,children:[M&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingRight:2,children:M}),(0,e.jsx)(v.Z,{children:T}),O&&!o&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingLeft:2,children:O}),o&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(a.Z,{})})]}))},185:(z,B,t)=>{t.d(B,{o:()=>h});var e=t(85893),u=t(88972),a=t(41580);const L=(0,u.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:R="main-content-title",...v})=>(0,e.jsx)(L,{"aria-labelledby":R,as:"main",id:"main-content",tabIndex:-1,...v})},67109:(z,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893);const u=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=u},78114:(z,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893);const u=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=u}}]);
