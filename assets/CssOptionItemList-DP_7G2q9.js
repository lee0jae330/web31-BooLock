import{j as s}from"./jsx-runtime-DR9Q75dM.js";import"./GuideVideo-MGmf4GR2.js";import{C as i}from"./HoveredEmptyWorkspace-Cy-Ug4GZ.js";import"./WorkspaceLoadError-FmbY_INt.js";import"./NotHoveredEmptyWorkspace-CddEnm-X.js";import"./index-BXCeiWJk.js";import"./CssCategoryButton-cnkcY8L4.js";import"./client-Dbo3a7kb.js";import{c as m}from"./cssCategoryList-CHFX1k4S.js";import"./blockly_compressed-Csa91utS.js";import{u as p}from"./useWorkspaceStore-DrKMScWF.js";const a=()=>{const{selectedCssCategory:r}=p();return s.jsx("article",{className:"flex h-full w-full flex-col gap-4 overflow-y-auto p-3",children:m.filter(t=>t.category===r).map(t=>t.items.map((o,e)=>s.jsx(i,{cssItem:o,index:e},o.label)))})};a.__docgenInfo={description:`@description
CSS 속성을 설정할 수 있는 컴포넌트의 목록을 보여주는 컴포넌트`,methods:[],displayName:"CssOptionItemList"};export{a as C};
