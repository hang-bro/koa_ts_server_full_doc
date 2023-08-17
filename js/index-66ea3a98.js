import{y as yt,M as bt,z as ie,d as $e,b1 as Et,h as wt,A as M,b2 as Ae,v as gt,G as St,o as k,I as $,j as ae,f as Ne,e as H,n as L,u as T,Y as Pe,N as xe,W as Ot,k as ce,t as ve,m as Rt,c as _e,F as Tt,aY as Be,X as Ct,i as We,a9 as At,_ as Nt,by as Pt,bB as xt,E as ue,aP as vt,b3 as he,aS as Fe,aj as _t,b4 as ke,cc as Bt,al as Ft,am as kt,cd as Lt,a7 as Ut,ce as Dt}from"./index-7db89b37.js";const Ke=["success","info","warning","error"],jt=yt({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:bt},id:{type:String,default:""},message:{type:ie([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:ie(Function),default:()=>{}},onClose:{type:ie(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...Ke,""],default:""},zIndex:Number}),It={destroy:()=>!0},Mt=["id"],Ht=["textContent"],qt={key:0},zt=["innerHTML"],Jt=$e({name:"ElNotification"}),Vt=$e({...Jt,props:jt,emits:It,setup(e,{expose:t}){const n=e,{ns:r,zIndex:s}=Et("notification"),{nextZIndex:o,currentZIndex:i}=s,{Close:l}=Pt,p=wt(!1);let u;const d=M(()=>{const y=n.type;return y&&Ae[n.type]?r.m(y):""}),h=M(()=>n.type&&Ae[n.type]||n.icon),S=M(()=>n.position.endsWith("right")?"right":"left"),w=M(()=>n.position.startsWith("top")?"top":"bottom"),a=M(()=>{var y;return{[w.value]:`${n.offset}px`,zIndex:(y=n.zIndex)!=null?y:i.value}});function f(){n.duration>0&&({stop:u}=xt(()=>{p.value&&b()},n.duration))}function m(){u==null||u()}function b(){p.value=!1}function O({code:y}){y===ue.delete||y===ue.backspace?m():y===ue.esc?p.value&&b():f()}return gt(()=>{f(),o(),p.value=!0}),St(document,"keydown",O),t({visible:p,close:b}),(y,g)=>(k(),$(At,{name:T(r).b("fade"),onBeforeLeave:y.onClose,onAfterLeave:g[1]||(g[1]=C=>y.$emit("destroy")),persisted:""},{default:ae(()=>[Ne(H("div",{id:y.id,class:L([T(r).b(),y.customClass,T(S)]),style:Pe(T(a)),role:"alert",onMouseenter:m,onMouseleave:f,onClick:g[0]||(g[0]=(...C)=>y.onClick&&y.onClick(...C))},[T(h)?(k(),$(T(xe),{key:0,class:L([T(r).e("icon"),T(d)])},{default:ae(()=>[(k(),$(Ot(T(h))))]),_:1},8,["class"])):ce("v-if",!0),H("div",{class:L(T(r).e("group"))},[H("h2",{class:L(T(r).e("title")),textContent:ve(y.title)},null,10,Ht),Ne(H("div",{class:L(T(r).e("content")),style:Pe(y.title?void 0:{margin:0})},[Rt(y.$slots,"default",{},()=>[y.dangerouslyUseHTMLString?(k(),_e(Tt,{key:1},[ce(" Caution here, message could've been compromised, never use user's input as message "),H("p",{innerHTML:y.message},null,8,zt)],2112)):(k(),_e("p",qt,ve(y.message),1))])],6),[[Be,y.message]]),y.showClose?(k(),$(T(xe),{key:0,class:L(T(r).e("closeBtn")),onClick:Ct(b,["stop"])},{default:ae(()=>[We(T(l))]),_:1},8,["class","onClick"])):ce("v-if",!0)],2)],46,Mt),[[Be,p.value]])]),_:3},8,["name","onBeforeLeave"]))}});var $t=Nt(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const Y={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},me=16;let Wt=1;const D=function(e={},t=null){if(!vt)return{close:()=>{}};(typeof e=="string"||he(e))&&(e={message:e});const n=e.position||"top-right";let r=e.offset||0;Y[n].forEach(({vm:d})=>{var h;r+=(((h=d.el)==null?void 0:h.offsetHeight)||0)+me}),r+=me;const s=`notification_${Wt++}`,o=e.onClose,i={...e,offset:r,id:s,onClose:()=>{Kt(s,n,o)}};let l=document.body;Fe(e.appendTo)?l=e.appendTo:_t(e.appendTo)&&(l=document.querySelector(e.appendTo)),Fe(l)||(l=document.body);const p=document.createElement("div"),u=We($t,i,he(i.message)?{default:()=>i.message}:null);return u.appContext=t??D._context,u.props.onDestroy=()=>{ke(null,p)},ke(u,p),Y[n].push({vm:u}),l.appendChild(p.firstElementChild),{close:()=>{u.component.exposed.visible.value=!1}}};Ke.forEach(e=>{D[e]=(t={})=>((typeof t=="string"||he(t))&&(t={message:t}),D({...t,type:e}))});function Kt(e,t,n){const r=Y[t],s=r.findIndex(({vm:u})=>{var d;return((d=u.component)==null?void 0:d.props.id)===e});if(s===-1)return;const{vm:o}=r[s];if(!o)return;n==null||n(o);const i=o.el.offsetHeight,l=t.split("-")[0];r.splice(s,1);const p=r.length;if(!(p<1))for(let u=s;u<p;u++){const{el:d,component:h}=r[u].vm,S=Number.parseInt(d.style[l],10)-i-me;h.props.offset=S}}function Gt(){for(const e of Object.values(Y))e.forEach(({vm:t})=>{t.component.exposed.visible.value=!1})}D.closeAll=Gt;D._context=null;const Le=Bt(D,"$notify");function Ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xt}=Object.prototype,{getPrototypeOf:Se}=Object,ee=(e=>t=>{const n=Xt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>ee(t)===e),te=e=>t=>typeof t===e,{isArray:I}=Array,z=te("undefined");function Zt(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xe=x("ArrayBuffer");function Yt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xe(e.buffer),t}const Qt=te("string"),A=te("function"),Ze=te("number"),ne=e=>e!==null&&typeof e=="object",en=e=>e===!0||e===!1,K=e=>{if(ee(e)!=="object")return!1;const t=Se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tn=x("Date"),nn=x("File"),rn=x("Blob"),sn=x("FileList"),on=e=>ne(e)&&A(e.pipe),an=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=ee(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},cn=x("URLSearchParams"),un=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ye(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),et=e=>!z(e)&&e!==Qe;function ye(){const{caseless:e}=et(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ye(t,s)||s;K(t[o])&&K(r)?t[o]=ye(t[o],r):K(r)?t[o]=ye({},r):I(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&J(arguments[r],n);return t}const ln=(e,t,n,{allOwnKeys:r}={})=>(J(t,(s,o)=>{n&&A(s)?e[o]=Ge(s,n):e[o]=s},{allOwnKeys:r}),e),fn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pn=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&Se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},hn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mn=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!Ze(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Se(Uint8Array)),bn=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},En=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},wn=x("HTMLFormElement"),gn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Sn=x("RegExp"),tt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},On=e=>{tt(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rn=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return I(e)?r(e):r(String(e).split(t)),n},Tn=()=>{},Cn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),le="abcdefghijklmnopqrstuvwxyz",De="0123456789",nt={DIGIT:De,ALPHA:le,ALPHA_DIGIT:le+le.toUpperCase()+De},An=(e=16,t=nt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nn(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Pn=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=I(r)?[]:{};return J(r,(i,l)=>{const p=n(i,s+1);!z(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},xn=x("AsyncFunction"),vn=e=>e&&(ne(e)||A(e))&&A(e.then)&&A(e.catch),c={isArray:I,isArrayBuffer:Xe,isBuffer:Zt,isFormData:an,isArrayBufferView:Yt,isString:Qt,isNumber:Ze,isBoolean:en,isObject:ne,isPlainObject:K,isUndefined:z,isDate:tn,isFile:nn,isBlob:rn,isRegExp:Sn,isFunction:A,isStream:on,isURLSearchParams:cn,isTypedArray:yn,isFileList:sn,forEach:J,merge:ye,extend:ln,trim:un,stripBOM:fn,inherits:dn,toFlatObject:pn,kindOf:ee,kindOfTest:x,endsWith:hn,toArray:mn,forEachEntry:bn,matchAll:En,isHTMLForm:wn,hasOwnProperty:Ue,hasOwnProp:Ue,reduceDescriptors:tt,freezeMethods:On,toObjectSet:Rn,toCamelCase:gn,noop:Tn,toFiniteNumber:Cn,findKey:Ye,global:Qe,isContextDefined:et,ALPHABET:nt,generateString:An,isSpecCompliantForm:Nn,toJSONObject:Pn,isAsyncFn:xn,isThenable:vn};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const rt=E.prototype,st={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{st[e]={value:e}});Object.defineProperties(E,st);Object.defineProperty(rt,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,o)=>{const i=Object.create(rt);return c.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),E.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const _n=null;function be(e){return c.isPlainObject(e)||c.isArray(e)}function ot(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function je(e,t,n){return e?e.concat(t).map(function(s,o){return s=ot(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Bn(e){return c.isArray(e)&&!e.some(be)}const Fn=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function re(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,m){return!c.isUndefined(m[f])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function u(a){if(a===null)return"";if(c.isDate(a))return a.toISOString();if(!p&&c.isBlob(a))throw new E("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(a)||c.isTypedArray(a)?p&&typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function d(a,f,m){let b=a;if(a&&!m&&typeof a=="object"){if(c.endsWith(f,"{}"))f=r?f:f.slice(0,-2),a=JSON.stringify(a);else if(c.isArray(a)&&Bn(a)||(c.isFileList(a)||c.endsWith(f,"[]"))&&(b=c.toArray(a)))return f=ot(f),b.forEach(function(y,g){!(c.isUndefined(y)||y===null)&&t.append(i===!0?je([f],g,o):i===null?f:f+"[]",u(y))}),!1}return be(a)?!0:(t.append(je(m,f,o),u(a)),!1)}const h=[],S=Object.assign(Fn,{defaultVisitor:d,convertValue:u,isVisitable:be});function w(a,f){if(!c.isUndefined(a)){if(h.indexOf(a)!==-1)throw Error("Circular reference detected in "+f.join("."));h.push(a),c.forEach(a,function(b,O){(!(c.isUndefined(b)||b===null)&&s.call(t,b,c.isString(O)?O.trim():O,f,S))===!0&&w(b,f?f.concat(O):[O])}),h.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Oe(e,t){this._pairs=[],e&&re(e,this,t)}const it=Oe.prototype;it.append=function(t,n){this._pairs.push([t,n])};it.toString=function(t){const n=t?function(r){return t.call(this,r,Ie)}:Ie;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function at(e,t,n){if(!t)return e;const r=n&&n.encode||kn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=c.isURLSearchParams(t)?t.toString():new Oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ln{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me=Ln,ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Un=typeof URLSearchParams<"u"?URLSearchParams:Oe,Dn=typeof FormData<"u"?FormData:null,jn=typeof Blob<"u"?Blob:null,In=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),P={isBrowser:!0,classes:{URLSearchParams:Un,FormData:Dn,Blob:jn},isStandardBrowserEnv:In,isStandardBrowserWebWorkerEnv:Mn,protocols:["http","https","file","blob","url","data"]};function Hn(e,t){return re(e,new P.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return P.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function qn(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ut(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,p?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=zn(s[i])),!l)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(qn(r),s,n,0)}),n}return null}const Jn={"Content-Type":void 0};function Vn(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const se={transitional:ct,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(ut(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Hn(t,this.formSerializer).toString();if((l=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return re(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Vn(t)):t}],transformResponse:[function(t){const n=this.transitional||se.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?E.from(l,E.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:P.classes.FormData,Blob:P.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){se.headers[t]={}});c.forEach(["post","put","patch"],function(t){se.headers[t]=c.merge(Jn)});const Re=se,$n=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&$n[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},He=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:c.isArray(e)?e.map(G):String(e)}function Kn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Gn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fe(e,t,n,r,s){if(c.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zn(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class oe{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,u){const d=q(p);if(!d)throw new Error("header name must be a non-empty string");const h=c.findKey(s,d);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||p]=G(l))}const i=(l,p)=>c.forEach(l,(u,d)=>o(u,d,p));return c.isPlainObject(t)||t instanceof this.constructor?i(t,n):c.isString(t)&&(t=t.trim())&&!Gn(t)?i(Wn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=q(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Kn(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||fe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const l=c.findKey(r,i);l&&(!n||fe(r,r[l],l,n))&&(delete r[l],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||fe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=G(s),delete n[o];return}const l=t?Xn(o):String(o).trim();l!==o&&delete n[o],n[l]=G(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[He]=this[He]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=q(i);r[l]||(Zn(s,i),r[l]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.freezeMethods(oe.prototype);c.freezeMethods(oe);const v=oe;function de(e,t){const n=this||Re,r=t||n,s=v.from(r.headers);let o=r.data;return c.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function lt(e){return!!(e&&e.__CANCEL__)}function V(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(V,E,{__CANCEL__:!0});function Yn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Qn=P.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const p=[];p.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),c.isString(o)&&p.push("path="+o),c.isString(i)&&p.push("domain="+i),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function er(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ft(e,t){return e&&!er(t)?tr(e,t):t}const nr=P.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=c.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function rr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sr(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const u=Date.now(),d=r[o];i||(i=u),n[s]=p,r[s]=u;let h=o,S=0;for(;h!==s;)S+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const w=d&&u-d;return w?Math.round(S*1e3/w):void 0}}function qe(e,t){let n=0;const r=sr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),u=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&u?(i-o)/p:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const or=typeof XMLHttpRequest<"u",ir=or&&function(e){return new Promise(function(n,r){let s=e.data;const o=v.from(e.headers).normalize(),i=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}c.isFormData(s)&&(P.isStandardBrowserEnv||P.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+a))}const d=ft(e.baseURL,e.url);u.open(e.method.toUpperCase(),at(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function h(){if(!u)return;const w=v.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),f={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};Yn(function(b){n(b),p()},function(b){r(b),p()},f),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new E("Request aborted",E.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let a=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const f=e.transitional||ct;e.timeoutErrorMessage&&(a=e.timeoutErrorMessage),r(new E(a,f.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,u)),u=null},P.isStandardBrowserEnv){const w=(e.withCredentials||nr(d))&&e.xsrfCookieName&&Qn.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&c.forEach(o.toJSON(),function(a,f){u.setRequestHeader(f,a)}),c.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",qe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",qe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{u&&(r(!w||w.type?new V(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const S=rr(d);if(S&&P.protocols.indexOf(S)===-1){r(new E("Unsupported protocol "+S+":",E.ERR_BAD_REQUEST,e));return}u.send(s||null)})},X={http:_n,xhr:ir};c.forEach(X,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ar={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=c.isString(n)?X[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(X,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!c.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:X};function pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V(null,e)}function ze(e){return pe(e),e.headers=v.from(e.headers),e.data=de.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ar.getAdapter(e.adapter||Re.adapter)(e).then(function(r){return pe(e),r.data=de.call(e,e.transformResponse,r),r.headers=v.from(r.headers),r},function(r){return lt(r)||(pe(e),r&&r.response&&(r.response.data=de.call(e,e.transformResponse,r.response),r.response.headers=v.from(r.response.headers))),Promise.reject(r)})}const Je=e=>e instanceof v?e.toJSON():e;function j(e,t){t=t||{};const n={};function r(u,d,h){return c.isPlainObject(u)&&c.isPlainObject(d)?c.merge.call({caseless:h},u,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function s(u,d,h){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u,h)}else return r(u,d,h)}function o(u,d){if(!c.isUndefined(d))return r(void 0,d)}function i(u,d){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,h){if(h in t)return r(u,d);if(h in e)return r(void 0,u)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(u,d)=>s(Je(u),Je(d),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(d){const h=p[d]||s,S=h(e[d],t[d],d);c.isUndefined(S)&&h!==l||(n[d]=S)}),n}const dt="1.4.0",Te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Te[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ve={};Te.transitional=function(t,n,r){function s(o,i){return"[Axios v"+dt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!Ve[i]&&(Ve[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function cr(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new E("option "+o+" must be "+p,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const Ee={assertOptions:cr,validators:Te},_=Ee.validators;class Q{constructor(t){this.defaults=t,this.interceptors={request:new Me,response:new Me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=j(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Ee.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(c.isFunction(s)?n.paramsSerializer={serialize:s}:Ee.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&c.merge(o.common,o[n.method]),i&&c.forEach(["delete","get","head","post","put","patch","common"],a=>{delete o[a]}),n.headers=v.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(p=p&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const u=[];this.interceptors.response.forEach(function(f){u.push(f.fulfilled,f.rejected)});let d,h=0,S;if(!p){const a=[ze.bind(this),void 0];for(a.unshift.apply(a,l),a.push.apply(a,u),S=a.length,d=Promise.resolve(n);h<S;)d=d.then(a[h++],a[h++]);return d}S=l.length;let w=n;for(h=0;h<S;){const a=l[h++],f=l[h++];try{w=a(w)}catch(m){f.call(this,m);break}}try{d=ze.call(this,w)}catch(a){return Promise.reject(a)}for(h=0,S=u.length;h<S;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=j(this.defaults,t);const n=ft(t.baseURL,t.url);return at(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){Q.prototype[t]=function(n,r){return this.request(j(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(j(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Q.prototype[t]=n(),Q.prototype[t+"Form"]=n(!0)});const Z=Q;class Ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new V(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ce(function(s){t=s}),cancel:t}}}const ur=Ce;function lr(e){return function(n){return e.apply(null,n)}}function fr(e){return c.isObject(e)&&e.isAxiosError===!0}const we={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(we).forEach(([e,t])=>{we[t]=e});const dr=we;function pt(e){const t=new Z(e),n=Ge(Z.prototype.request,t);return c.extend(n,Z.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return pt(j(e,s))},n}const R=pt(Re);R.Axios=Z;R.CanceledError=V;R.CancelToken=ur;R.isCancel=lt;R.VERSION=dt;R.toFormData=re;R.AxiosError=E;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=lr;R.isAxiosError=fr;R.mergeConfig=j;R.AxiosHeaders=v;R.formToJSON=e=>ut(c.isHTMLForm(e)?new FormData(e):e);R.HttpStatusCode=dr;R.default=R;const pr=R;var ht={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(Ft,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(a){var f,m;for(f in a)m=a[f],m!==void 0&&a.hasOwnProperty(f)&&(r[f]=m);return this},n.status=null,n.set=function(a){var f=n.isStarted();a=s(a,r.minimum,1),n.status=a===1?null:a;var m=n.render(!f),b=m.querySelector(r.barSelector),O=r.speed,y=r.easing;return m.offsetWidth,l(function(g){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),p(b,i(a,O,y)),a===1?(p(m,{transition:"none",opacity:1}),m.offsetWidth,setTimeout(function(){p(m,{transition:"all "+O+"ms linear",opacity:0}),setTimeout(function(){n.remove(),g()},O)},O)):setTimeout(g,O)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var a=function(){setTimeout(function(){n.status&&(n.trickle(),a())},r.trickleSpeed)};return r.trickle&&a(),this},n.done=function(a){return!a&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(a){var f=n.status;return f?(typeof a!="number"&&(a=(1-f)*s(Math.random()*f,.1,.95)),f=s(f+a,0,.994),n.set(f)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var a=0,f=0;n.promise=function(m){return!m||m.state()==="resolved"?this:(f===0&&n.start(),a++,f++,m.always(function(){f--,f===0?(a=0,n.done()):n.set((a-f)/a)}),this)}}(),n.render=function(a){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var f=document.createElement("div");f.id="nprogress",f.innerHTML=r.template;var m=f.querySelector(r.barSelector),b=a?"-100":o(n.status||0),O=document.querySelector(r.parent),y;return p(m,{transition:"all 0 linear",transform:"translate3d("+b+"%,0,0)"}),r.showSpinner||(y=f.querySelector(r.spinnerSelector),y&&w(y)),O!=document.body&&d(O,"nprogress-custom-parent"),O.appendChild(f),f},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&w(a)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var a=document.body.style,f="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return f+"Perspective"in a?"translate3d":f+"Transform"in a?"translate":"margin"};function s(a,f,m){return a<f?f:a>m?m:a}function o(a){return(-1+a)*100}function i(a,f,m){var b;return r.positionUsing==="translate3d"?b={transform:"translate3d("+o(a)+"%,0,0)"}:r.positionUsing==="translate"?b={transform:"translate("+o(a)+"%,0)"}:b={"margin-left":o(a)+"%"},b.transition="all "+f+"ms "+m,b}var l=function(){var a=[];function f(){var m=a.shift();m&&m(f)}return function(m){a.push(m),a.length==1&&f()}}(),p=function(){var a=["Webkit","O","Moz","ms"],f={};function m(g){return g.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(C,N){return N.toUpperCase()})}function b(g){var C=document.body.style;if(g in C)return g;for(var N=a.length,F=g.charAt(0).toUpperCase()+g.slice(1),B;N--;)if(B=a[N]+F,B in C)return B;return g}function O(g){return g=m(g),f[g]||(f[g]=b(g))}function y(g,C,N){C=O(C),g.style[C]=N}return function(g,C){var N=arguments,F,B;if(N.length==2)for(F in C)B=C[F],B!==void 0&&C.hasOwnProperty(F)&&y(g,F,B);else y(g,N[1],N[2])}}();function u(a,f){var m=typeof a=="string"?a:S(a);return m.indexOf(" "+f+" ")>=0}function d(a,f){var m=S(a),b=m+f;u(m,f)||(a.className=b.substring(1))}function h(a,f){var m=S(a),b;u(a,f)&&(b=m.replace(" "+f+" "," "),a.className=b.substring(1,b.length-1))}function S(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function w(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return n})})(ht);var hr=ht.exports;const mt=kt(hr);const{token:mr}=Lt(Ut()),U=pr.create({baseURL:{}.VITE_BASE_URL,timeout:2e4,responseType:"json",headers:{"Content-type":"application/json"}}),yr=()=>{mt.start()},ge=()=>{mt.done()};U.interceptors.request.use(e=>(e.headers.authorization=mr.value||"",yr(),e),e=>(ge(),Promise.reject(e)));U.interceptors.response.use(e=>{ge();const{code:t,message:n}=e.data;switch(t&&t!==200&&Le.warning(n),t){case 4001:Dt.push({path:"/login"});break}return{data:e.data}},e=>(ge(),Le.error(e.response.statusText||e.message),{data:{}}));const br={headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}},W={};["get","post","put","delete","upload"].map(e=>{switch(e){case"get":return W[e]=(t,n)=>new Promise((r,s)=>{U[e](t,{params:n}).then(o=>r(o.data)).catch(o=>s(o))});case"post":case"put":return W[e]=(t,n)=>new Promise((r,s)=>{U[e](t,n).then(o=>r(o.data)).catch(o=>s(o))});case"delete":return W[e]=(t,n)=>new Promise((r,s)=>{U[e](t,{data:n}).then(o=>r(o.data)).catch(o=>s(o))});case"upload":return W[e]=(t,n,r=br)=>new Promise((s,o)=>{U.post(t,n,r).then(i=>s(i.data)).catch(i=>o(i))})}});export{W as h};