import{d as a,v as r,o as c,c as l,e as s,i as d,j as _,g as i}from"./index-2b53d579.js";import{E as m}from"./el-button-dbcff3d1.js";import"./use-form-item-72a3afbe.js";const p={class:"w-full h-full p-5"},u=s("h1",null,"web-worker",-1),f={class:"my-5"},B=a({__name:"index",setup(h){let e;const t=()=>{e.postMessage("我是index.vue"+Math.random())};return r(()=>{e=new Worker(new URL("/doc/assets/worker-436e1404.js",self.location).href,{type:"module"}),e.addEventListener("message",o=>{console.log("接收worker消息==>",o.data)})}),(o,w)=>{const n=m;return c(),l("main",p,[u,s("section",f,[d(n,{type:"success",onClick:t},{default:_(()=>[i("发送消息")]),_:1})])])}}});export{B as default};
