import{h as d}from"./index-49a67ea0.js";import{d as _,a1 as f,h as m,w as h,o as t,c as s,e as o,F as x,b as w,t as y,u as j}from"./index-7f585186.js";const v={class:"w-screen h-screen flex flex-col p-5 rounded-xl overflow-auto"},b=o("header",{class:"font-bold text-2xl pl-2"},"项目列表",-1),k={class:"flex flex-wrap items-center justify-between"},g=["onClick"],q=_({__name:"project",async setup(C){let e,n;const l=f(),r=m([]),{data:i}=([e,n]=h(()=>d.get("/api/onlineEditor/project")),e=await e,n(),e);r.value=i;const p=a=>{l.push({path:"/editor",query:{path:a}})};return(a,B)=>(t(),s("main",v,[b,o("div",k,[(t(!0),s(x,null,w(j(r),(c,u)=>(t(),s("div",{onClick:E=>p(c.value),class:"cursor-pointer flex-1 min-w-[300px] whitespace-nowrap bg-slate-200 p-10 rounded-sm m-2 flex items-center justify-center",key:u},[o("a",null,y(c.label),1)],8,g))),128))])]))}});export{q as default};
