import{A as i,U as I,bO as z,u as v,s as l,h as c,cb as h,v as j,D as F,C as K,a6 as S}from"./index-7f585186.js";const b=s=>{const e=I();return i(()=>{var o,n;return(n=(o=e==null?void 0:e.proxy)==null?void 0:o.$props)==null?void 0:n[s]})},p={prefix:Math.floor(Math.random()*1e4),current:0},_=Symbol("elIdInjection"),D=()=>I()?l(_,p):p,R=s=>{const e=D(),o=z();return i(()=>v(s)||`${o.value}-id-${e.prefix}-${e.current++}`)},f=Symbol("formContextKey"),y=Symbol("formItemContextKey"),w=(s,e={})=>{const o=c(void 0),n=e.prop?o:b("size"),u=e.global?o:h(),t=e.form?{size:void 0}:l(f,void 0),d=e.formItem?{size:void 0}:l(y,void 0);return i(()=>n.value||v(s)||(d==null?void 0:d.size)||(t==null?void 0:t.size)||u.value||"")},N=s=>{const e=b("disabled"),o=l(f,void 0);return i(()=>e.value||v(s)||(o==null?void 0:o.disabled)||!1)},U=()=>{const s=l(f,void 0),e=l(y,void 0);return{form:s,formItem:e}},E=(s,{formItemContext:e,disableIdGeneration:o,disableIdManagement:n})=>{o||(o=c(!1)),n||(n=c(!1));const u=c();let t;const d=i(()=>{var a;return!!(!s.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return j(()=>{t=F([K(s,"id"),o],([a,m])=>{const r=a??(m?void 0:R().value);r!==u.value&&(e!=null&&e.removeInputId&&(u.value&&e.removeInputId(u.value),!(n!=null&&n.value)&&!m&&r&&e.addInputId(r)),u.value=r)},{immediate:!0})}),S(()=>{t&&t(),e!=null&&e.removeInputId&&u.value&&e.removeInputId(u.value)}),{isLabeledByFormItem:d,inputId:u}};export{w as a,U as b,N as c,D as d,f as e,y as f,E as g,R as u};
