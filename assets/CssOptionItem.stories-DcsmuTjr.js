import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{C as i}from"./HoveredEmptyWorkspace-BFMPZkv7.js";import{c as a}from"./cssCategoryList-CHFX1k4S.js";import"./useImageModalStore-axAWps0d.js";import"./index-DRjF_FHU.js";import"./QueryClientProvider-BdRu95_o.js";import"./index-D1AAVYfs.js";import"./GuideVideo-MGmf4GR2.js";import"./plus-dioM8lOZ.js";import"./SquareButton-hj7tViqk.js";import"./Logo-DlHd6_yt.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-D5uwPRVI.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./WorkspaceLoadError-BuktD2D2.js";import"./NotHoveredEmptyWorkspace-loFxOJJf.js";import"./question-BUxmZXrP.js";import"./CssCategoryButton-CZecLCOO.js";import"./client-Dbo3a7kb.js";const K={title:"entities/workspace/CssOptionItem",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{cssItem:a[0].items[0],index:0}},t={render:()=>r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:r.jsx(i,{cssItem:a[0].items[0],index:0})})},s={render:()=>{const C="레이아웃";return r.jsx("div",{style:{width:"400px",resize:"horizontal",overflow:"auto"},children:a.filter(o=>o.category===C).map(o=>o.items.map((n,I)=>r.jsx(i,{cssItem:n,index:I},n.label)))})}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cssItem: cssCategoryList[0].items[0],
    index: 0
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto'
    }}>
        <CssOptionItem cssItem={cssCategoryList[0].items[0]} index={0} />
      </div>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const selectedCssCategory = '레이아웃';
    return <div style={{
      width: '400px',
      resize: 'horizontal',
      overflow: 'auto'
    }}>
        {cssCategoryList.filter(cssCategory => cssCategory.category === selectedCssCategory).map(cssCategory => cssCategory.items.map((cssItem, index) => <CssOptionItem cssItem={cssItem} index={index} key={cssItem.label} />))}
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const N=["Default","Resize","ResizeMultipleItems"];export{e as Default,t as Resize,s as ResizeMultipleItems,N as __namedExportsOrder,K as default};
