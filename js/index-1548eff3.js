import{d as m,h as s,o as a,c as l,I as v,i as t,j as _,u as k,e as x,g as r,k as y,a9 as C,aa as B}from"./index-7db89b37.js";import{E as u}from"./el-button-3deb7421.js";import{o as R}from"./index-53b18a66.js";import{_ as b}from"./plugin-vueexport-helper-c27b6911.js";import"./use-form-item-0eb850c7.js";const h={key:0,class:"modal overflow-hidden"},N=m({__name:"modal",setup(f,{expose:o}){const e=s(!1),n=s();return R(n,()=>{e.value=!1}),o({open:()=>e.value=!0}),(c,d)=>{const i=u;return a(),l("main",null,[(a(),v(B,{to:"body"},[t(C,{name:"modal"},{default:_(()=>[k(e)?(a(),l("div",h,[x("div",{class:"modal-body",ref_key:"modalRef",ref:n},[r(" 这是一个模态框 "),t(i,{onClick:d[0]||(d[0]=g=>e.value=!1)},{default:_(()=>[r("关闭弹窗")]),_:1})],512)])):y("",!0)]),_:1})]))])}}});const V=b(N,[["__scopeId","data-v-7528d1e6"]]),$=m({__name:"index",setup(f){const o=s(),e=()=>{console.log(" modalRef.value ==>",o.value.open())};return(n,p)=>{const c=u;return a(),l("main",null,[t(c,{onClick:e},{default:_(()=>[r("点击打开弹窗 ")]),_:1}),t(V,{ref_key:"modalRef",ref:o},null,512)])}}});export{$ as default};