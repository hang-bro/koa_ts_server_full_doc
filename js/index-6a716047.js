import{d as x,h as b,r as V,o as m,c as u,e as n,i as o,j as r,u as e,g,F as v,b as E,t as B,p as k,l as w}from"./index-9c88cf56.js";import{E as I}from"./el-button-9e6e24b6.js";import{E as y,a as F}from"./el-form-item-7d9c1304.js";import{E as S}from"./el-input-84b47a85.js";import{h as C}from"./index-93bbcf08.js";import{_ as N}from"./plugin-vueexport-helper-c27b6911.js";import"./use-form-item-7a66bdac.js";import"./error-78e43d3e.js";import"./baseClone-85186682.js";import"./Uint8Array-a29d9e42.js";import"./event-9519ab40.js";import"./isNil-c75b1b34.js";const O=l=>(k("data-v-8d5019e7"),l=l(),w(),l),U={class:"w-full h-full p-5"},j=O(()=>n("h1",null,"BOOK",-1)),q={class:"h-[500px] overflow-auto bg-white"},D={class:"m-1 text-base text-gray-600"},K=x({__name:"index",setup(l){const c=b(),t=V({url:"https://m.biqubao8.com/book/108395/",start:61878}),i=()=>{C.get("/api/patch/patchBook",{...t}).then(p=>{console.log("res ==>",p.data),c.value=p.data,t.start+=1})};return(p,s)=>{const d=S,_=y,f=F,h=I;return m(),u("main",U,[j,n("section",null,[o(f,{ref:"formRef",model:e(t),"status-icon":"","label-width":"auto",class:"demo-form"},{default:r(()=>[o(_,{label:"url",prop:"url"},{default:r(()=>[o(d,{modelValue:e(t).url,"onUpdate:modelValue":s[0]||(s[0]=a=>e(t).url=a),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(_,{label:"start",prop:"url"},{default:r(()=>[o(d,{modelValue:e(t).start,"onUpdate:modelValue":s[1]||(s[1]=a=>e(t).start=a),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),o(h,{onClick:i},{default:r(()=>[g("爬取")]),_:1})]),n("section",q,[(m(!0),u(v,null,E(e(c),a=>(m(),u("div",null,[n("p",D,B(a),1)]))),256))])])}}});const X=N(K,[["__scopeId","data-v-8d5019e7"]]);export{X as default};