import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{C as m}from"./CssPropsSelectBox-DhflO_9W.js";import{b as g}from"./useWorkspaceStore-B_R62rvF.js";import"./index-DRjF_FHU.js";import"./GuidesBox-BqPlgfaz.js";import"./GuideVideo-MGmf4GR2.js";import"./HoveredEmptyWorkspace-C7MjS4iN.js";import"./index-D1AAVYfs.js";import"./QueryClientProvider-BdRu95_o.js";import"./blockly_compressed-Csa91utS.js";import"./CircleButton-CZ-LhlOb.js";import"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import"./index-x70cJmE6.js";import"./index-BXCeiWJk.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import"./Spinner-CHPW_G4Q.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./Select-BczipgGO.js";import"./plus-DWHtmhlY.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./RedoButton-Cb0DZdXt.js";import"./UndoButton-Bt5naQtv.js";import"./question-CX5dqjCQ.js";import"./CssCategoryButton-BgdQUONP.js";import"./client-Dbo3a7kb.js";import"./HomeHeader-CKtWbLu3.js";import"./WorkspaceList-BjfFAsJD.js";import"./WorkspaceHeader-DTTg7PjK.js";import"./EmptyWorkspace-6y8XPL-x.js";import"./WorkspaceGrid-vyyREuel.js";import"./WorkspaceModal-029nM_Th.js";import"./ModalConfirm-D4PzhGiJ.js";import"./PreviewBox-CK1RaCqU.js";import"./WorkspacePageHeader-Baiyd01w.js";import"./CssCategoryBar-ZribHL-0.js";import"./cssCategoryList-CfnxYM_i.js";import"./CssOptionItemList-Cdw587We.js";import"./CssPropsSelectBoxHeader-Bt2cPx16.js";import"./infiniteQueryBehavior-DdhmIwcw.js";const ae={title:"widgets/workspace/css/CssPropsSelectBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{}},r={render:()=>{const{addClassBlock:c,classBlockList:u}=g(),d=e=>{e.target.value===""||u.includes(e.target.value)||c(e.target.value)},f=e=>{e.key==="Enter"&&(e.currentTarget.blur(),e.preventDefault())};return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("input",{className:"w-full border p-2 focus:outline-none",type:"text",onBlur:d,onKeyDown:f,placeholder:"추가하고자 하는 CSS 클래스를 입력하세요"}),o.jsx(m,{})]})}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // propsname: value,
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,n,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const {
      addClassBlock,
      classBlockList
    } = useClassBlockStore();
    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '' || classBlockList.includes(e.target.value)) return;
      addClassBlock(e.target.value);
    };
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.currentTarget.blur();
        e.preventDefault();
      }
    };
    return <div className="flex flex-col gap-3">
        <input className="w-full border p-2 focus:outline-none" type="text" onBlur={handleOnBlur} onKeyDown={handleOnKeyDown} placeholder="추가하고자 하는 CSS 클래스를 입력하세요" />
        <CssPropsSelectBox />
      </div>;
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const le=["Default","CanSelectClass"];export{r as CanSelectClass,t as Default,le as __namedExportsOrder,ae as default};
