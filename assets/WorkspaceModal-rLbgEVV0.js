import{j as e}from"./jsx-runtime-DR9Q75dM.js";import"./plus-qIVVYTMO.js";import{S as d}from"./SquareButton-hj7tViqk.js";import"./Logo-Ca0csvGK.js";import{M as m}from"./ModalConfirm-BDuYJlbG.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import{S as p}from"./Spinner-CHPW_G4Q.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./HoveredEmptyWorkspace-DZD9W-0R.js";import{a as c}from"./useImageModalStore-BhpnCE_Z.js";const x=()=>{const{isModalOpen:o,modalContent:s,handleModalConfirmButton:r,handleModalCloseButton:a,isLoading:t}=c(),n=[{name:"아차차~",func:a,type:"neutral"},{name:"지울래요",func:r,type:"danger",isDisabled:t}];return e.jsx(m,{isOpen:o,children:e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-center justify-center gap-3 text-center",children:[e.jsx("img",{src:"/images/booduck_modal.png",width:100,height:100}),e.jsx("p",{className:"text-semibold-lg whitespace-pre-line text-gray-500",children:s})]}),e.jsx("div",{className:"flex gap-3",children:n.map((i,l)=>e.jsx(d,{onClick:()=>i.func(),variant:i.type,isDisabled:i.isDisabled,children:e.jsx(e.Fragment,{children:i.isDisabled?e.jsx(p,{width:4,height:4,foregroundColor:"grayWhite",backgroundColor:"gray200"}):i.name})},l))})]})})};x.__docgenInfo={description:`@description
워크스페이스 삭제 모달 컴포넌트`,methods:[],displayName:"WorkspaceModal"};export{x as W};
