import{j as e}from"./jsx-runtime-DR9Q75dM.js";import"./plus-C7enkl2d.js";import{S as d}from"./SquareButton-eIFPi1Hz.js";import"./Logo-DlHd6_yt.js";import{M as m}from"./ModalConfirm-BDuYJlbG.js";import"./ToasterWithMax-D4jPvwZi.js";import"./Loading-CVQUyNmW.js";import{S as c}from"./Spinner-BB_XZPSl.js";import"./SkeletonWorkspace-D4UalYBK.js";import"./SkeletonWorkspaceList-LqBByOXs.js";import"./HoveredEmptyWorkspace-zFPGcuqw.js";import{a as p}from"./html2canvas.esm-T2p3Seyt.js";const h=()=>{const{isModalOpen:t,modalContent:a,handleModalConfirmButton:r,handleModalCloseButton:s,isLoading:i}=p(),n=[{name:"아차차~",func:s,type:"neutral"},{name:"지울래요",func:r,type:"danger",isDisabled:i}];return e.jsx(m,{isOpen:t,children:e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-center justify-center gap-3 text-center",children:[e.jsx("img",{src:"https://kr.object.ncloudstorage.com/boolock-storage/static/booduck_modal.png",width:100,height:100,alt:"Booduck Modal"}),e.jsx("p",{className:"text-semibold-lg whitespace-pre-line text-gray-500",children:a})]}),e.jsx("div",{className:"flex gap-3",children:n.map((o,l)=>e.jsx(d,{onClick:()=>o.func(),variant:o.type,isDisabled:o.isDisabled,"aria-label":"워크스페이스 삭제 여부 버튼",children:e.jsx(e.Fragment,{children:o.isDisabled?e.jsx(c,{width:4,height:4,foregroundColor:"grayWhite",backgroundColor:"gray200"}):o.name})},l))})]})})};h.__docgenInfo={description:`@description
워크스페이스 삭제 모달 컴포넌트`,methods:[],displayName:"WorkspaceModal"};export{h as W};
