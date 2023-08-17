import{d as q,P as j,o as b,I as $,j as X,m as ye,T as Ke,b_ as xe,u as R,a9 as Te,_ as ne,aM as se,r as Se,aN as Ae,s as U,aJ as he,q as Y,h as E,aU as de,aR as Be,N as Ie,a_ as Le,D as K,L as ue,b$ as $e,H as L,f as ae,aY as re,c as x,e as W,W as Oe,n as T,X as B,k as z,i as Z,Y as Me,F as Ne,b as ke,U as ve,ab as Pe,aj as He,b9 as fe,v as ze,af as Fe,G as qe,E as I,M as je,Q as _e,A as Re,t as Ue,c0 as Ye,w as We}from"./index-7f585186.js";import{E as Ge}from"./el-checkbox-666dc601.js";import{h as pe}from"./index-49a67ea0.js";import{f as Je}from"./use-form-item-63cb104c.js";import{_ as Qe}from"./plugin-vueexport-helper-c27b6911.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./isEqual-dcfd1d33.js";import"./Uint8Array-9b592408.js";const Xe=q({name:"ElCollapseTransition"}),Ze=q({...Xe,setup(t){const e=j("collapse-transition"),d={beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?(n.style.maxHeight=`${n.scrollHeight}px`,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom):(n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom),n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight=`${n.scrollHeight}px`,n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom}};return(n,o)=>(b(),$(Te,Ke({name:R(e).b()},xe(d)),{default:X(()=>[ye(n.$slots,"default")]),_:3},16,["name"]))}});var V=ne(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);V.install=t=>{t.component(V.name,V)};const Ve=V,F="$treeNodeId",ge=function(t,e){!e||e[F]||Object.defineProperty(e,F,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ce=function(t,e){return t?e[t]:e[F]},ie=(t,e,d)=>{const n=t.value.currentNode;d();const o=t.value.currentNode;n!==o&&e("current-change",o?o.data:null,o)},le=t=>{let e=!0,d=!0,n=!0;for(let o=0,s=t.length;o<s;o++){const i=t[o];(i.checked!==!0||i.indeterminate)&&(e=!1,i.disabled||(n=!1)),(i.checked!==!1||i.indeterminate)&&(d=!1)}return{all:e,none:d,allWithoutDisable:n,half:!e&&!d}},ee=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:d,half:n}=le(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):n?(t.checked=!1,t.indeterminate=!0):d&&(t.checked=!1,t.indeterminate=!1);const o=t.parent;!o||o.level===0||t.store.checkStrictly||ee(o)},Q=function(t,e){const d=t.store.props,n=t.data||{},o=d[e];if(typeof o=="function")return o(n,t);if(typeof o=="string")return n[o];if(typeof o>"u"){const s=n[e];return s===void 0?"":s}};let et=0;class O{constructor(e){this.id=et++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const d in e)se(e,d)&&(this[d]=e[d]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const d=e.props;if(d&&typeof d.isLeaf<"u"){const s=Q(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||ge(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,o=e.key;o&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||ge(this,e),this.data=e,this.childNodes=[];let d;this.level===0&&Array.isArray(this.data)?d=this.data:d=Q(this,"children")||[];for(let n=0,o=d.length;n<o;n++)this.insertChild({data:d[n]})}get label(){return Q(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return Q(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const d=e.childNodes.indexOf(this);if(d>-1)return e.childNodes[d+1]}return null}get previousSibling(){const e=this.parent;if(e){const d=e.childNodes.indexOf(this);if(d>-1)return d>0?e.childNodes[d-1]:null}return null}contains(e,d=!0){return(this.childNodes||[]).some(n=>n===e||d&&n.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,d,n){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof O)){if(!n){const o=this.getChildren(!0);o.includes(e.data)||(typeof d>"u"||d<0?o.push(e.data):o.splice(d,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Se(new O(e)),e instanceof O&&e.initialize()}e.level=this.level+1,typeof d>"u"||d<0?this.childNodes.push(e):this.childNodes.splice(d,0,e),this.updateLeafState()}insertBefore(e,d){let n;d&&(n=this.childNodes.indexOf(d)),this.insertChild(e,n)}insertAfter(e,d){let n;d&&(n=this.childNodes.indexOf(d),n!==-1&&(n+=1)),this.insertChild(e,n)}removeChild(e){const d=this.getChildren()||[],n=d.indexOf(e.data);n>-1&&d.splice(n,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let d=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){d=this.childNodes[n];break}d&&this.removeChild(d)}expand(e,d){const n=()=>{if(d){let o=this.parent;for(;o.level>0;)o.expanded=!0,o=o.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(o=>{o.canFocus=!0})};this.shouldLoadData()?this.loadData(o=>{Array.isArray(o)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||ee(this),n())}):n()}doCreateChildren(e,d={}){e.forEach(n=>{this.insertChild(Object.assign({data:n},d),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,d,n,o){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:i,allWithoutDisable:a}=le(this.childNodes);!this.isLeaf&&!i&&a&&(this.checked=!1,e=!1);const p=()=>{if(d){const f=this.childNodes;for(let r=0,g=f.length;r<g;r++){const N=f[r];o=o||e!==!1;const v=N.disabled?N.checked:o;N.setChecked(v,d,!0,o)}const{half:u,all:c}=le(f);c||(this.checked=c,this.indeterminate=u)}};if(this.shouldLoadData()){this.loadData(()=>{p(),ee(this)},{checked:e!==!1});return}else p()}const s=this.parent;!s||s.level===0||n||ee(s)}getChildren(e=!1){if(this.level===0)return this.data;const d=this.data;if(!d)return null;const n=this.store.props;let o="children";return n&&(o=n.children||"children"),d[o]===void 0&&(d[o]=null),e&&!d[o]&&(d[o]=[]),d[o]}updateChildren(){const e=this.getChildren()||[],d=this.childNodes.map(s=>s.data),n={},o=[];e.forEach((s,i)=>{const a=s[F];!!a&&d.findIndex(f=>f[F]===a)>=0?n[a]={index:i,data:s}:o.push({index:i,data:s})}),this.store.lazy||d.forEach(s=>{n[s[F]]||this.removeChildByData(s)}),o.forEach(({index:s,data:i})=>{this.insertChild({data:i},s)}),this.updateLeafState()}loadData(e,d={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(d).length)){this.loading=!0;const n=o=>{this.childNodes=[],this.doCreateChildren(o,d),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,o)};this.store.load(this,n)}else e&&e.call(this)}}class tt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const d in e)se(e,d)&&(this[d]=e[d]);this.nodesMap={}}initialize(){if(this.root=new O({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,d=>{this.root.doCreateChildren(d),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const d=this.filterNodeMethod,n=this.lazy,o=function(s){const i=s.root?s.root.childNodes:s.childNodes;if(i.forEach(a=>{a.visible=d.call(a,e,a.data,a),o(a)}),!s.visible&&i.length){let a=!0;a=!i.some(p=>p.visible),s.root?s.root.visible=a===!1:s.visible=a===!1}e&&s.visible&&!s.isLeaf&&!n&&s.expand()};o(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof O)return e;const d=Ae(e)?ce(this.key,e):e;return this.nodesMap[d]||null}insertBefore(e,d){const n=this.getNode(d);n.parent.insertBefore({data:e},n)}insertAfter(e,d){const n=this.getNode(d);n.parent.insertAfter({data:e},n)}remove(e){const d=this.getNode(e);d&&d.parent&&(d===this.currentNode&&(this.currentNode=null),d.parent.removeChild(d))}append(e,d){const n=d?this.getNode(d):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],d=this.nodesMap;e.forEach(n=>{const o=d[n];o&&o.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const d=this.key;!e||!e.data||(d?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(n=>{this.deregisterNode(n)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,d=!1){const n=[],o=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(a=>{(a.checked||d&&a.indeterminate)&&(!e||e&&a.isLeaf)&&n.push(a.data),o(a)})};return o(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(d=>(d||{})[this.key])}getHalfCheckedNodes(){const e=[],d=function(n){(n.root?n.root.childNodes:n.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),d(s)})};return d(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],d=this.nodesMap;for(const n in d)se(d,n)&&e.push(d[n]);return e}updateChildren(e,d){const n=this.nodesMap[e];if(!n)return;const o=n.childNodes;for(let s=o.length-1;s>=0;s--){const i=o[s];this.remove(i.data)}for(let s=0,i=d.length;s<i;s++){const a=d[s];this.append(a,n.data)}}_setCheckedKeys(e,d=!1,n){const o=this._getAllNodes().sort((a,p)=>p.level-a.level),s=Object.create(null),i=Object.keys(n);o.forEach(a=>a.setChecked(!1,!1));for(let a=0,p=o.length;a<p;a++){const f=o[a],u=f.data[e].toString();if(!i.includes(u)){f.checked&&!s[u]&&f.setChecked(!1,!1);continue}let r=f.parent;for(;r&&r.level>0;)s[r.data[e]]=!0,r=r.parent;if(f.isLeaf||this.checkStrictly){f.setChecked(!0,!1);continue}if(f.setChecked(!0,!0),d){f.setChecked(!1,!1);const g=function(N){N.childNodes.forEach(C=>{C.isLeaf||C.setChecked(!1,!1),g(C)})};g(f)}}}setCheckedNodes(e,d=!1){const n=this.key,o={};e.forEach(s=>{o[(s||{})[n]]=!0}),this._setCheckedKeys(n,d,o)}setCheckedKeys(e,d=!1){this.defaultCheckedKeys=e;const n=this.key,o={};e.forEach(s=>{o[s]=!0}),this._setCheckedKeys(n,d,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(d=>{const n=this.getNode(d);n&&n.expand(null,this.autoExpandParent)})}setChecked(e,d,n){const o=this.getNode(e);o&&o.setChecked(!!d,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const d=this.currentNode;d&&(d.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,d=!0){const n=e[this.key],o=this.nodesMap[n];this.setCurrentNode(o),d&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,d=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const n=this.getNode(e);n&&(this.setCurrentNode(n),d&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const nt=q({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=j("tree"),d=U("NodeInstance"),n=U("RootTree");return()=>{const o=t.node,{data:s,store:i}=o;return t.renderContent?t.renderContent(he,{_self:d,node:o,data:s,store:i}):n.ctx.slots.default?n.ctx.slots.default({node:o,data:s}):he("span",{class:e.be("node","label")},[o.label])}}});var ot=ne(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function Ce(t){const e=U("TreeNodeMap",null),d={treeNodeExpand:n=>{t.node!==n&&t.node.collapse()},children:[]};return e&&e.children.push(d),Y("TreeNodeMap",d),{broadcastExpanded:n=>{if(t.accordion)for(const o of d.children)o.treeNodeExpand(n)}}}const me=Symbol("dragEvents");function dt({props:t,ctx:e,el$:d,dropIndicator$:n,store:o}){const s=j("tree"),i=E({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return Y(me,{treeNodeDragStart:({event:u,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return u.preventDefault(),!1;u.dataTransfer.effectAllowed="move";try{u.dataTransfer.setData("text/plain","")}catch{}i.value.draggingNode=c,e.emit("node-drag-start",c.node,u)},treeNodeDragOver:({event:u,treeNode:c})=>{const r=c,g=i.value.dropNode;g&&g.node.id!==r.node.id&&de(g.$el,s.is("drop-inner"));const N=i.value.draggingNode;if(!N||!r)return;let v=!0,C=!0,D=!0,A=!0;typeof t.allowDrop=="function"&&(v=t.allowDrop(N.node,r.node,"prev"),A=C=t.allowDrop(N.node,r.node,"inner"),D=t.allowDrop(N.node,r.node,"next")),u.dataTransfer.dropEffect=C||v||D?"move":"none",(v||C||D)&&(g==null?void 0:g.node.id)!==r.node.id&&(g&&e.emit("node-drag-leave",N.node,g.node,u),e.emit("node-drag-enter",N.node,r.node,u)),(v||C||D)&&(i.value.dropNode=r),r.node.nextSibling===N.node&&(D=!1),r.node.previousSibling===N.node&&(v=!1),r.node.contains(N.node,!1)&&(C=!1),(N.node===r.node||N.node.contains(r.node))&&(v=!1,C=!1,D=!1);const S=r.$el.getBoundingClientRect(),M=d.value.getBoundingClientRect();let w;const G=v?C?.25:D?.45:1:-1,J=D?C?.75:v?.55:0:1;let P=-9999;const h=u.clientY-S.top;h<S.height*G?w="before":h>S.height*J?w="after":C?w="inner":w="none";const k=r.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=n.value;w==="before"?P=k.top-M.top:w==="after"&&(P=k.bottom-M.top),m.style.top=`${P}px`,m.style.left=`${k.right-M.left}px`,w==="inner"?Be(r.$el,s.is("drop-inner")):de(r.$el,s.is("drop-inner")),i.value.showDropIndicator=w==="before"||w==="after",i.value.allowDrop=i.value.showDropIndicator||A,i.value.dropType=w,e.emit("node-drag-over",N.node,r.node,u)},treeNodeDragEnd:u=>{const{draggingNode:c,dropType:r,dropNode:g}=i.value;if(u.preventDefault(),u.dataTransfer.dropEffect="move",c&&g){const N={data:c.node.data};r!=="none"&&c.node.remove(),r==="before"?g.node.parent.insertBefore(N,g.node):r==="after"?g.node.parent.insertAfter(N,g.node):r==="inner"&&g.node.insertChild(N),r!=="none"&&o.value.registerNode(N),de(g.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,g.node,r,u),r!=="none"&&e.emit("node-drop",c.node,g.node,r,u)}c&&!g&&e.emit("node-drag-end",c.node,null,r,u),i.value.showDropIndicator=!1,i.value.draggingNode=null,i.value.dropNode=null,i.value.allowDrop=!0}}),{dragState:i}}const st=q({name:"ElTreeNode",components:{ElCollapseTransition:Ve,ElCheckbox:Ge,NodeContent:ot,ElIcon:Ie,Loading:Le},props:{node:{type:O,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const d=j("tree"),{broadcastExpanded:n}=Ce(t),o=U("RootTree"),s=E(!1),i=E(!1),a=E(null),p=E(null),f=E(null),u=U(me),c=ve();Y("NodeInstance",c),t.node.expanded&&(s.value=!0,i.value=!0);const r=o.props.children||"children";K(()=>{const h=t.node.data[r];return h&&[...h]},()=>{t.node.updateChildren()}),K(()=>t.node.indeterminate,h=>{v(t.node.checked,h)}),K(()=>t.node.checked,h=>{v(h,t.node.indeterminate)}),K(()=>t.node.expanded,h=>{ue(()=>s.value=h),h&&(i.value=!0)});const g=h=>ce(o.props.nodeKey,h.data),N=h=>{const k=t.props.class;if(!k)return{};let m;if(Pe(k)){const{data:oe}=h;m=k(oe,h)}else m=k;return He(m)?{[m]:!0}:m},v=(h,k)=>{(a.value!==h||p.value!==k)&&o.ctx.emit("check-change",t.node.data,h,k),a.value=h,p.value=k},C=h=>{ie(o.store,o.ctx.emit,()=>o.store.value.setCurrentNode(t.node)),o.currentNode.value=t.node,o.props.expandOnClickNode&&A(),o.props.checkOnClickNode&&!t.node.disabled&&S(null,{target:{checked:!t.node.checked}}),o.ctx.emit("node-click",t.node.data,t.node,c,h)},D=h=>{o.instance.vnode.props.onNodeContextmenu&&(h.stopPropagation(),h.preventDefault()),o.ctx.emit("node-contextmenu",h,t.node.data,t.node,c)},A=()=>{t.node.isLeaf||(s.value?(o.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,c)))},S=(h,k)=>{t.node.setChecked(k.target.checked,!o.props.checkStrictly),ue(()=>{const m=o.store.value;o.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:d,node$:f,tree:o,expanded:s,childNodeRendered:i,oldChecked:a,oldIndeterminate:p,getNodeKey:g,getNodeClass:N,handleSelectChange:v,handleClick:C,handleContextMenu:D,handleExpandIconClick:A,handleCheckChange:S,handleChildNodeExpand:(h,k,m)=>{n(k),o.ctx.emit("node-expand",h,k,m)},handleDragStart:h=>{o.props.draggable&&u.treeNodeDragStart({event:h,treeNode:t})},handleDragOver:h=>{h.preventDefault(),o.props.draggable&&u.treeNodeDragOver({event:h,treeNode:{$el:f.value,node:t.node}})},handleDrop:h=>{h.preventDefault()},handleDragEnd:h=>{o.props.draggable&&u.treeNodeDragEnd(h)},CaretRight:$e}}}),at=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],rt=["aria-expanded"];function it(t,e,d,n,o,s){const i=L("el-icon"),a=L("el-checkbox"),p=L("loading"),f=L("node-content"),u=L("el-tree-node"),c=L("el-collapse-transition");return ae((b(),x("div",{ref:"node$",class:T([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=B((...r)=>t.handleClick&&t.handleClick(...r),["stop"])),onContextmenu:e[2]||(e[2]=(...r)=>t.handleContextMenu&&t.handleContextMenu(...r)),onDragstart:e[3]||(e[3]=B((...r)=>t.handleDragStart&&t.handleDragStart(...r),["stop"])),onDragover:e[4]||(e[4]=B((...r)=>t.handleDragOver&&t.handleDragOver(...r),["stop"])),onDragend:e[5]||(e[5]=B((...r)=>t.handleDragEnd&&t.handleDragEnd(...r),["stop"])),onDrop:e[6]||(e[6]=B((...r)=>t.handleDrop&&t.handleDrop(...r),["stop"]))},[W("div",{class:T(t.ns.be("node","content")),style:Me({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(b(),$(i,{key:0,class:T([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:B(t.handleExpandIconClick,["stop"])},{default:X(()=>[(b(),$(Oe(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):z("v-if",!0),t.showCheckbox?(b(),$(a,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=B(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):z("v-if",!0),t.node.loading?(b(),$(i,{key:2,class:T([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:X(()=>[Z(p)]),_:1},8,["class"])):z("v-if",!0),Z(f,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),Z(c,null,{default:X(()=>[!t.renderAfterExpand||t.childNodeRendered?ae((b(),x("div",{key:0,class:T(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(b(!0),x(Ne,null,ke(t.node.childNodes,r=>(b(),$(u,{key:t.getNodeKey(r),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:r,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,rt)),[[re,t.expanded]]):z("v-if",!0)]),_:1})],42,at)),[[re,t.node.visible]])}var lt=ne(st,[["render",it],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);function ct({el$:t},e){const d=j("tree"),n=fe([]),o=fe([]);ze(()=>{i()}),Fe(()=>{n.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),K(o,a=>{a.forEach(p=>{p.setAttribute("tabindex","-1")})}),qe(t,"keydown",a=>{const p=a.target;if(!p.className.includes(d.b("node")))return;const f=a.code;n.value=Array.from(t.value.querySelectorAll(`.${d.is("focusable")}[role=treeitem]`));const u=n.value.indexOf(p);let c;if([I.up,I.down].includes(f)){if(a.preventDefault(),f===I.up){c=u===-1?0:u!==0?u-1:n.value.length-1;const g=c;for(;!e.value.getNode(n.value[c].dataset.key).canFocus;){if(c--,c===g){c=-1;break}c<0&&(c=n.value.length-1)}}else{c=u===-1?0:u<n.value.length-1?u+1:0;const g=c;for(;!e.value.getNode(n.value[c].dataset.key).canFocus;){if(c++,c===g){c=-1;break}c>=n.value.length&&(c=0)}}c!==-1&&n.value[c].focus()}[I.left,I.right].includes(f)&&(a.preventDefault(),p.click());const r=p.querySelector('[type="checkbox"]');[I.enter,I.space].includes(f)&&r&&(a.preventDefault(),r.click())});const i=()=>{var a;n.value=Array.from(t.value.querySelectorAll(`.${d.is("focusable")}[role=treeitem]`)),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const p=t.value.querySelectorAll(`.${d.is("checked")}[role=treeitem]`);if(p.length){p[0].setAttribute("tabindex","0");return}(a=n.value[0])==null||a.setAttribute("tabindex","0")}}const ht=q({name:"ElTree",components:{ElTreeNode:lt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:je}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:d}=_e(),n=j("tree"),o=E(new tt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));o.value.initialize();const s=E(o.value.root),i=E(null),a=E(null),p=E(null),{broadcastExpanded:f}=Ce(t),{dragState:u}=dt({props:t,ctx:e,el$:a,dropIndicator$:p,store:o});ct({el$:a},o);const c=Re(()=>{const{childNodes:l}=s.value;return!l||l.length===0||l.every(({visible:y})=>!y)});K(()=>t.currentNodeKey,l=>{o.value.setCurrentNodeKey(l)}),K(()=>t.defaultCheckedKeys,l=>{o.value.setDefaultCheckedKey(l)}),K(()=>t.defaultExpandedKeys,l=>{o.value.setDefaultExpandedKeys(l)}),K(()=>t.data,l=>{o.value.setData(l)},{deep:!0}),K(()=>t.checkStrictly,l=>{o.value.checkStrictly=l});const r=l=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");o.value.filter(l)},g=l=>ce(t.nodeKey,l.data),N=l=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const y=o.value.getNode(l);if(!y)return[];const H=[y.data];let _=y.parent;for(;_&&_!==s.value;)H.push(_.data),_=_.parent;return H.reverse()},v=(l,y)=>o.value.getCheckedNodes(l,y),C=l=>o.value.getCheckedKeys(l),D=()=>{const l=o.value.getCurrentNode();return l?l.data:null},A=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const l=D();return l?l[t.nodeKey]:null},S=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");o.value.setCheckedNodes(l,y)},M=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");o.value.setCheckedKeys(l,y)},w=(l,y,H)=>{o.value.setChecked(l,y,H)},G=()=>o.value.getHalfCheckedNodes(),J=()=>o.value.getHalfCheckedKeys(),P=(l,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ie(o,e.emit,()=>o.value.setUserCurrentNode(l,y))},h=(l,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ie(o,e.emit,()=>o.value.setCurrentNodeKey(l,y))},k=l=>o.value.getNode(l),m=l=>{o.value.remove(l)},oe=(l,y)=>{o.value.append(l,y)},be=(l,y)=>{o.value.insertBefore(l,y)},Ee=(l,y)=>{o.value.insertAfter(l,y)},De=(l,y,H)=>{f(y),e.emit("node-expand",l,y,H)},we=(l,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");o.value.updateChildren(l,y)};return Y("RootTree",{ctx:e,props:t,store:o,root:s,currentNode:i,instance:ve()}),Y(Je,void 0),{ns:n,store:o,root:s,currentNode:i,dragState:u,el$:a,dropIndicator$:p,isEmpty:c,filter:r,getNodeKey:g,getNodePath:N,getCheckedNodes:v,getCheckedKeys:C,getCurrentNode:D,getCurrentKey:A,setCheckedNodes:S,setCheckedKeys:M,setChecked:w,getHalfCheckedNodes:G,getHalfCheckedKeys:J,setCurrentNode:P,setCurrentKey:h,t:d,getNode:k,remove:m,append:oe,insertBefore:be,insertAfter:Ee,handleNodeExpand:De,updateKeyChildren:we}}});function ut(t,e,d,n,o,s){const i=L("el-tree-node");return b(),x("div",{ref:"el$",class:T([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(b(!0),x(Ne,null,ke(t.root.childNodes,a=>(b(),$(i,{key:t.getNodeKey(a),node:a,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(b(),x("div",{key:0,class:T(t.ns.e("empty-block"))},[ye(t.$slots,"empty",{},()=>{var a;return[W("span",{class:T(t.ns.e("empty-text"))},Ue((a=t.emptyText)!=null?a:t.t("el.tree.emptyText")),3)]})],2)):z("v-if",!0),ae(W("div",{ref:"dropIndicator$",class:T(t.ns.e("drop-indicator"))},null,2),[[re,t.dragState.showDropIndicator]])],2)}var te=ne(ht,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);te.install=t=>{t.component(te.name,te)};const ft=te,pt=ft;const gt={class:"w-screen h-screen py-3 flex-1 flex bg-white rounded-md overflow-auto overflow-x-hidden"},yt={key:0,class:"min-w-[250px] overflow-auto"},Nt={class:"flex-1 mr-3 overflow-auto"},kt={contenteditable:"",class:"relative p-3 bg-gray-100 overflow-auto h-full rounded-md outline-none"},vt=["innerHTML"],Ct={key:1,class:"cursor-pointer absolute text-gray-500 left-1/2 top-1/2 trans"},mt=q({__name:"editor",async setup(t){let e,d;const n=E(),o=E(""),{path:s}=Ye().query;if(s){const f=([e,d]=We(()=>pe.post("/api/onlineEditor/projectTree",{path:s})),e=await e,d(),e);n.value=f.data}const i=E(""),a=E(""),p=f=>{if(f.type=="file"){if(a.value=f.key.split("/").pop(),o.value===f.key)return;o.value=f.key,pe.post("/api/onlineEditor/getFile",{path:f.key}).then(u=>{i.value=u.data})}};return(f,u)=>{const c=pt;return b(),x("main",gt,[R(n)?(b(),x("div",yt,[Z(c,{data:R(n),props:{children:"children",label:"name"},accordion:"",onNodeClick:p},null,8,["data"])])):z("",!0),W("div",Nt,[W("div",kt,[R(i)?(b(),x("pre",{key:0,innerHTML:R(i)},null,8,vt)):(b(),x("div",Ct,"选择文件打开"))])])])}}});const Bt=Qe(mt,[["__scopeId","data-v-9f05a984"]]);export{Bt as default};
