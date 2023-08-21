import{d as v,a3 as T,h as y,r as c,o as D,c as C,e as d,i as t,j as o,u as a,g as _,t as k,a9 as p}from"./index-7145d906.js";import{E as B,a as F}from"./el-form-item-37c64c9e.js";import{E as I}from"./el-button-3b52053a.js";import{E as R}from"./el-input-a8b97c2f.js";import{u as f}from"./useValidate-10313544.js";import{h as x}from"./index-cd4eb7cd.js";import"./use-form-item-ff632249.js";import"./error-78e43d3e.js";import"./baseClone-cd11f5db.js";import"./Uint8Array-636aa068.js";import"./event-9519ab40.js";import"./isNil-c75b1b34.js";const U={class:"w-screen h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},j={class:"sm:mx-auto sm:w-full sm:max-w-md"},z=d("div",{class:"w-full font-bold text-[30px] text-center text-bg"},"注 册",-1),M=d("div",{class:"text-sm text-gray-500"},[_(" 已有账号? "),d("a",{href:"#login",class:"font-semibold leading-6 text-indigo-600"}," 点击登录 ")],-1),Y=v({__name:"regist",setup(S){const w=T(),u=y(),n=c({code:"",email:"",password:""}),e=c({btnName:"发送验证码",btnDisabled:!1,leftTime:60}),h=c({email:f.email,password:f.password,code:f.pleaseInput}),V=()=>{u.value.validate(i=>{i&&x.post("/api/register",n).then(l=>{const{code:s,message:r}=l;s===200&&(p.success(r),w.push("/login"))})})},E=async()=>{try{await u.value.validateField("email")}catch{return p.error("请填写并填写正确的邮箱!")}e.btnName="发送中...",e.btnDisabled=!0,x.post("/api/register/sendEmailCode",{email:n.email}).then(i=>{const{code:l,message:s}=i;l===200?(p.success(s),b()):(e.btnName="发送验证码",e.btnDisabled=!1)})};function b(){e.btnName="获取验证码",e.leftTime>=1?(e.btnDisabled=!0,e.btnName=e.leftTime+"s 后获取",e.leftTime-=1,setTimeout(function(){b()},1e3)):(e.btnName="发送验证码",e.btnDisabled=!1,e.leftTime=60)}return(i,l)=>{const s=B,r=R,g=I,N=F;return D(),C("main",U,[d("div",j,[t(N,{"status-icon":"",size:"large",ref_key:"formRef",ref:u,"label-position":"top",model:a(n),rules:a(h),class:"bg-white/40 rounded-2xl shadow-2xl p-7 pt-10"},{default:o(()=>[t(s,null,{default:o(()=>[z]),_:1}),t(s,{prop:"email",label:"邮箱"},{default:o(()=>[t(r,{modelValue:a(n).email,"onUpdate:modelValue":l[0]||(l[0]=m=>a(n).email=m)},null,8,["modelValue"])]),_:1}),t(s,{prop:"password",label:"密码"},{default:o(()=>[t(r,{modelValue:a(n).password,"onUpdate:modelValue":l[1]||(l[1]=m=>a(n).password=m)},null,8,["modelValue"])]),_:1}),t(s,{class:"code",prop:"code",label:"验证码"},{default:o(()=>[t(r,{modelValue:a(n).code,"onUpdate:modelValue":l[2]||(l[2]=m=>a(n).code=m),placeholder:"请输入"},{append:o(()=>[t(g,{class:"btn rounded-none",onClick:E,disabled:a(e).btnDisabled},{default:o(()=>[_(k(a(e).btnName),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1}),t(s,null,{default:o(()=>[t(g,{class:"w-full !text-lg",color:"#626aef",onClick:V},{default:o(()=>[_("regist")]),_:1})]),_:1}),t(s,null,{default:o(()=>[M]),_:1})]),_:1},8,["model","rules"])])])}}});export{Y as default};
