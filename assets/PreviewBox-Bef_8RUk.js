import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as f}from"./index-DRjF_FHU.js";import{h as T}from"./useImageModalStore-axAWps0d.js";import{_ as v}from"./index-D1AAVYfs.js";import{u as x}from"./useCoachMarkStore-BoVLoTcU.js";const j=`
html, body, div, span, header, section, nav, main, article, footer, p, strong,
h1, h2, h3, h4, h5, h6, small, br, em, i, blockquote, hr, input, button,
form, option, textarea, select, fieldset, legend, label, td, tr, th,
caption, table, ul, ol, li, a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, header, section, nav, main, footer {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,L=i=>f.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},f.createElement("mask",{id:"mask0_503_1523",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:24,height:24},f.createElement("rect",{width:24,height:24,fill:"currentColor"})),f.createElement("g",{mask:"url(#mask0_503_1523)"},f.createElement("path",{d:"M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z",fill:"currentColor"}))),q="_viewer_5mpew_1",H="_scrollContainer_5mpew_7",S="_dark_5mpew_13",E="_lineNumbers_5mpew_18",F="_lineNumber_5mpew_18",M="_lineHighlight_5mpew_28",A="_codeContent_5mpew_32",I="_tag_5mpew_37",D="_attribute_5mpew_41",V="_value_5mpew_45",P="_selector_5mpew_49",O="_property_5mpew_53",R="_newLine_5mpew_70",z="_fadeIn_5mpew_1",B="_blockHighlight_5mpew_74",m={viewer:q,scrollContainer:H,dark:S,lineNumbers:E,lineNumber:F,lineHighlight:M,codeContent:A,tag:I,attribute:D,value:V,selector:P,property:O,"property-value":"_property-value_5mpew_57",newLine:R,fadeIn:z,blockHighlight:B},N=({code:i,codeLineList:r,selectedBlockStartLine:o,selectedBlockLength:g,selectedBlockType:a})=>{const[t,s]=f.useState([]),[u,c]=f.useState([]);return f.useEffect(()=>{const e=[];r.forEach((d,l)=>{(!t[l]||t[l]!==d)&&e.push(l)}),c(e);const p=setTimeout(()=>c([]),1e3);return s(r),()=>clearTimeout(p)},[i]),n.jsx("div",{className:m.codeContent,children:n.jsx("pre",{children:n.jsx("code",{children:r.map((e,p)=>{const d=o&&g&&p+1>=o&&p+1<o+g,l=a&&e.includes(a);return n.jsx("div",{className:`${u.includes(p)?m.newLine:""} ${d?m.blockHighlight:""} ${l?m.highlightBg:""}`,dangerouslySetInnerHTML:{__html:e}},p)})})})})};N.__docgenInfo={description:"",methods:[],displayName:"CodeContent",props:{code:{required:!0,tsType:{name:"string"},description:""},codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const k=({codeLineList:i})=>{const[r,o]=f.useState(null),g=t=>{o(t)},a=()=>{o(null)};return n.jsx("div",{className:m.lineNumbers,children:i.map((t,s)=>n.jsx("div",{onMouseEnter:()=>g(s+1),onMouseLeave:a,className:`${m.lineNumber} ${r===s+1?m.lineHighlight:""}`,children:s+1},s))})};k.__docgenInfo={description:"",methods:[],displayName:"LineNumbers",props:{codeLineList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const G=(i,r,o)=>{const g=i.split(`
`);let a=!1;return g.map(s=>o&&s.includes(`.${o}`)?(a=!0,`<span style="background-color: #FFF3AD;">${s}</span>`):a&&!s.includes("}")?`<span style="background-color: #FFF3AD;">${s}</span>`:a&&s.includes("}")?(a=!1,`<span style="background-color: #FFF3AD;">${s}</span>`):s.replace(/([^\s{}]+)\s*{/g,(u,c)=>{const e=o&&c.includes(`.${o}`)?`<span>${c}</span>`:c;return`<span class="${r.selector}">${e}</span> {`}).replace(/([\w-]+):/g,(u,c)=>`&nbsp;&nbsp;<span class="${r.property}">${c}</span>:`).replace(/:\s*([^;]+);/g,(u,c)=>`: <span class="${r["property-value"]}">${c}</span>;`)).join(`
`).split(`
`).map(s=>`  ${s}`).join(`
`)},K=(i,r,o)=>{const a=new DOMParser().parseFromString(i,"text/html"),t=(e,p)=>{const d="  ".repeat(p),l=`<span class="${r.tag}">${e.tagName.toLowerCase()}</span>`,b=Array.from(e.attributes).map(h=>{const $=h.name==="class"&&o&&h.value.includes(o)?h.value.replace(o,`<span style="background-color: #FFF3AD; color: green">${o}</span>`):h.value;return`<span class="${r.attribute}">${h.name}</span>=<span class="${r.value}">"${$}"</span>`}).join(" "),_=`${d}&lt;${l}${b?" "+b:""}&gt;`,y=`${d}&lt;/${l}&gt;`,w=Array.from(e.childNodes).map(h=>u(h,p+1)).join("");return["br","hr","img"].includes(e.tagName.toLowerCase())?`
${d}&lt;${l}${b?" "+b:""} /&gt;`:e.tagName.toLowerCase()==="head"?`${d}&lt;${l}${b?" "+b:""}&gt;${w.trim()}&lt;/${l}&gt;`:w.trim()?`
${_}
${w}
${y}`:`
${_}
${y}`},s=(e,p)=>{var b;const d=(b=e.textContent)==null?void 0:b.trim(),l="  ".repeat(p);return d?`
${l}<span class="${r.text}">${d}</span>`:""},u=(e,p=0)=>e.nodeType===Node.ELEMENT_NODE?t(e,p):e.nodeType===Node.TEXT_NODE?s(e,p):"";return u(a.documentElement,0).trim().split(`
`).map(e=>`  ${e}`).join(`
`)},C=({code:i,type:r,theme:o,selectedBlockStartLine:g,selectedBlockLength:a,selectedBlockType:t})=>{const u=(r==="html"?K(i,m,t):G(i,m,t)).split(`
`).filter(e=>e.trim()!==""),{currentStep:c}=x();return n.jsx("div",{className:`${m.viewer} ${o==="dark"?m.dark:m.light} ${c===3?"z-[200] bg-white":""}`,children:n.jsxs("div",{className:m.scrollContainer,children:[n.jsx(k,{codeLineList:u}),n.jsx(N,{code:i,codeLineList:u,selectedBlockLength:a,selectedBlockStartLine:g,selectedBlockType:t})]})})};C.__docgenInfo={description:"",methods:[],displayName:"CodeViewer",props:{code:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'html' | 'css'",elements:[{name:"literal",value:"'html'"},{name:"literal",value:"'css'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const U=({htmlCode:i,cssCode:r,selectedBlockStartLine:o,selectedBlockLength:g,selectedBlockType:a})=>{const[t,s]=f.useState("preview"),{isResetCssChecked:u}=T(),{currentStep:c}=x(),e=`
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Gothic+A1:wght@300;400;700&family=IBM+Plex+Sans+KR:wght@300;400;700&family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet" />
  `,d=`<style> * { box-sizing : border-box; margin : 0; padding : 0; ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #cdd9e4; border-radius: 4px; } } html, head, body { width : 100%; height : 100%;  } ${u?`${j}
${r}`:r}</style>`,l=i.indexOf("</head>"),b=`${i.slice(0,l)}${e}${d}${i.slice(l)}`,_=async(w,h)=>{try{await navigator.clipboard.writeText(w),v.success(`${h} 코드가 복사되었습니다.`)}catch{v.error(`${h} 코드 복사에 실패했습니다.`)}},y=()=>{const w=t==="html"?i:r,h=t.toUpperCase();_(w,h)};return n.jsxs("section",{className:`flex h-[calc(100vh-475px)] flex-1 flex-col border-b border-gray-100 ${c===3?"z-[200]":""}`,children:[n.jsxs("nav",{className:"flex h-10 border-b border-gray-100",children:[n.jsx("button",{onClick:()=>s("preview"),className:`${t==="preview"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"미리보기"}),n.jsx("button",{onClick:()=>s("html"),className:`${t==="html"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 border-r border-gray-100 bg-green-500`,children:"HTML"}),n.jsx("button",{onClick:()=>s("css"),className:`${t==="css"?"bg-green-500 text-white":"bg-white text-gray-200"} h-full flex-1 bg-green-500`,children:"CSS"})]}),n.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[(t==="html"||t==="css")&&n.jsx("div",{className:"absolute right-4 top-5 z-50",children:n.jsx(L,{className:"h-6 w-6 cursor-pointer text-gray-300 hover:text-green-500",onClick:y})}),t==="preview"&&n.jsx("iframe",{srcDoc:b,className:"h-full w-full",title:"Preview",sandbox:"allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation"}),t==="html"&&n.jsx(C,{code:t==="html"?i:r,type:t,theme:"light",selectedBlockStartLine:o,selectedBlockLength:g,selectedBlockType:a}),t==="css"&&n.jsx(C,{code:r,type:"css",theme:"light",selectedBlockType:a})]})]})};U.__docgenInfo={description:`@description
웹사이트, HTML, CSS 코드 미리보기 박스 컴포넌트`,methods:[],displayName:"PreviewBox",props:{htmlCode:{required:!0,tsType:{name:"string"},description:""},cssCode:{required:!0,tsType:{name:"string"},description:""},selectedBlockStartLine:{required:!1,tsType:{name:"number"},description:""},selectedBlockLength:{required:!1,tsType:{name:"number"},description:""},selectedBlockType:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};export{U as P};
