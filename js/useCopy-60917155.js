import{a9 as t}from"./index-7145d906.js";const n=o=>{try{navigator.clipboard.writeText(o).then(()=>t.success("复制成功"))}catch{const e=document.createElement("input");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e),t.success("复制成功")}};export{n as u};
