import"./blockly_compressed-Csa91utS.js";import{R as p}from"./index-DRjF_FHU.js";const O=s=>{let e;const t=new Set,o=(c,u)=>{const l=typeof c=="function"?c(e):c;if(!Object.is(l,e)){const S=e;e=u??(typeof l!="object"||l===null)?l:Object.assign({},e,l),t.forEach(k=>k(e,S))}},n=()=>e,d={setState:o,getState:n,getInitialState:()=>b,subscribe:c=>(t.add(c),()=>t.delete(c))},b=e=s(o,n,d);return d},g=s=>s?O(s):O,j=s=>s;function P(s,e=j){const t=p.useSyncExternalStore(s.subscribe,()=>e(s.getState()),()=>e(s.getInitialState()));return p.useDebugValue(t),t}const f=s=>{const e=g(s),t=o=>P(e,o);return Object.assign(t,e),t},r=s=>s?f(s):f,I=r(s=>({isPending:!1,setIsPending:e=>s({isPending:e})})),L=r()(s=>({isModalOpen:!1,modalContent:"워크스페이스 이름",isLoading:!1,handleModalConfirmButton:()=>{},handleModalCloseButton:()=>{},openModal:()=>s({isModalOpen:!0}),closeModal:()=>s({isModalOpen:!1}),setModalContent:e=>s({modalContent:e}),setIsLoading:e=>s({isLoading:e}),setHandleModalConfirmButton:e=>s({handleModalConfirmButton:e}),setHandleModalCloseButton:e=>s({handleModalCloseButton:e})})),M=r(s=>({currentCssClassName:"",selectedCssCategory:"레이아웃",totalCssPropertyObj:{},addNewCssClass:e=>s(t=>t.totalCssPropertyObj[e]?{}:{totalCssPropertyObj:{...t.totalCssPropertyObj,[e]:{checkedCssPropertyObj:{},cssOptionObj:{}}}}),setCurrentCssClassName:e=>s({currentCssClassName:e}),setSelectedCssCategory:e=>s({selectedCssCategory:e}),setCheckedCssPropertyObj:(e,t,o)=>s(n=>{const a=n.totalCssPropertyObj[e]||{checkedCssPropertyObj:{},cssOptionObh:{}};return a.checkedCssPropertyObj[t]=o,{totalCssPropertyObj:{...n.totalCssPropertyObj,[e]:a}}}),setCssOptionObj:(e,t,o)=>s(n=>{const a=n.totalCssPropertyObj[e]||{checkedCssPropertyObj:{},cssOptionObj:{}};return a.cssOptionObj[t]=o,{totalCssPropertyObj:{...n.totalCssPropertyObj,[e]:a}}}),initCssPropertyObj:e=>s({totalCssPropertyObj:e,currentCssClassName:"",selectedCssCategory:"레이아웃"}),removeCssClass:e=>s(t=>{const o={...t.totalCssPropertyObj};return delete o[e],{totalCssPropertyObj:o,currentCssClassName:e===t.currentCssClassName?"":t.currentCssClassName}})})),R=r(s=>({offsetX:-1,offsetY:-1,leftX:0,topY:0,setOffsetX:e=>s({offsetX:e}),setOffsetY:e=>s({offsetY:e}),setLeftX:e=>s({leftX:e}),setTopY:e=>s({topY:e})})),i="BOOLOCK_SYSTEM_",C="CSS_",v=s=>`${i}${s}`,T=s=>s.startsWith(i)?s.slice(i.length):s,E=s=>s.startsWith(C)?s:`${C}${s}`,h=s=>s.startsWith(C)?s.replace(C,""):s,W=r((s,e)=>({classBlockList:[],addClassBlock:t=>{s(o=>({classBlockList:[...o.classBlockList,h(t)]}))},findClassBlock:t=>e().classBlockList.includes(t),removeClassBlock:t=>{s(o=>({classBlockList:o.classBlockList.filter(n=>n!==t)}))},initClassBlockList:t=>{s({classBlockList:t})}})),_=r(s=>({isBlockChanged:!1,isCssChanged:!1,setIsBlockChanged:e=>s({isBlockChanged:e}),setIsCssChanged:e=>s({isCssChanged:e}),resetChangedStatusState:()=>s({isBlockChanged:!1,isCssChanged:!1})}));r(s=>({workspace:null,setWorkspace:e=>{s({workspace:e})}}));const Y=r(s=>({isResetCssChecked:!1,toggleResetCss:()=>s(e=>({isResetCssChecked:!e.isResetCssChecked})),setIsResetCssChecked:e=>s({isResetCssChecked:e})})),x=r(s=>({workspace:null,canvasInfo:"",setWorkspace:e=>{s({workspace:e})},setCanvasInfo:e=>s(()=>({canvasInfo:e}))}));export{L as a,W as b,E as c,I as d,x as e,_ as f,Y as g,v as h,T as i,R as j,h as r,M as u};
