(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const S of h)if(S.type==="childList")for(const O of S.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&c(O)}).observe(document,{childList:!0,subtree:!0});function r(h){const S={};return h.integrity&&(S.integrity=h.integrity),h.referrerpolicy&&(S.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?S.credentials="include":h.crossorigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function c(h){if(h.ep)return;h.ep=!0;const S=r(h);fetch(h.href,S)}})();const nt={};function Ma(a){nt.context=a}const Oa=(a,i)=>a===i,ft=Symbol("solid-proxy"),Cn=Symbol("solid-track"),ln={equals:Oa};let aa=la;const st=1,un=2,oa={owned:null,cleanups:null,context:null,owner:null};var ze=null;let dt=null,Me=null,Ve=null,it=null,On=0;function sn(a,i){const r=Me,c=ze,h=a.length===0,S=h?oa:{owned:null,cleanups:null,context:null,owner:i||c},O=h?a:()=>a(()=>yt(()=>Rn(S)));ze=S,Me=null;try{return It(O,!0)}finally{Me=r,ze=c}}function rt(a,i){i=i?Object.assign({},ln,i):ln;const r={value:a,observers:null,observerSlots:null,comparator:i.equals||void 0},c=h=>(typeof h=="function"&&(h=h(r.value)),sa(r,h));return[ra.bind(r),c]}function Ae(a,i,r){const c=Pn(a,i,!1,st);$t(c)}function Gt(a,i,r){aa=La;const c=Pn(a,i,!1,st);c.user=!0,it?it.push(c):$t(c)}function Oe(a,i,r){r=r?Object.assign({},ln,r):ln;const c=Pn(a,i,!0,0);return c.observers=null,c.observerSlots=null,c.comparator=r.equals||void 0,$t(c),ra.bind(c)}function Na(a){return It(a,!1)}function yt(a){let i,r=Me;return Me=null,i=a(),Me=r,i}function gn(a){Gt(()=>yt(a))}function Nn(a){return ze===null||(ze.cleanups===null?ze.cleanups=[a]:ze.cleanups.push(a)),a}function ia(){return Me}function ra(){const a=dt;if(this.sources&&(this.state||a))if(this.state===st||a)$t(this);else{const i=Ve;Ve=null,It(()=>hn(this),!1),Ve=i}if(Me){const i=this.observers?this.observers.length:0;Me.sources?(Me.sources.push(this),Me.sourceSlots.push(i)):(Me.sources=[this],Me.sourceSlots=[i]),this.observers?(this.observers.push(Me),this.observerSlots.push(Me.sources.length-1)):(this.observers=[Me],this.observerSlots=[Me.sources.length-1])}return this.value}function sa(a,i,r){let c=a.value;return(!a.comparator||!a.comparator(c,i))&&(a.value=i,a.observers&&a.observers.length&&It(()=>{for(let h=0;h<a.observers.length;h+=1){const S=a.observers[h],O=dt&&dt.running;O&&dt.disposed.has(S),(O&&!S.tState||!O&&!S.state)&&(S.pure?Ve.push(S):it.push(S),S.observers&&ua(S)),O||(S.state=st)}if(Ve.length>1e6)throw Ve=[],new Error},!1)),i}function $t(a){if(!a.fn)return;Rn(a);const i=ze,r=Me,c=On;Me=ze=a,Pa(a,a.value,c),Me=r,ze=i}function Pa(a,i,r){let c;try{c=a.fn(i)}catch(h){a.pure&&(a.state=st),ca(h)}(!a.updatedAt||a.updatedAt<=r)&&(a.updatedAt!=null&&"observers"in a?sa(a,c):a.value=c,a.updatedAt=r)}function Pn(a,i,r,c=st,h){const S={fn:a,state:c,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:i,owner:ze,context:null,pure:r};return ze===null||ze!==oa&&(ze.owned?ze.owned.push(S):ze.owned=[S]),S}function cn(a){const i=dt;if(a.state===0||i)return;if(a.state===un||i)return hn(a);if(a.suspense&&yt(a.suspense.inFallback))return a.suspense.effects.push(a);const r=[a];for(;(a=a.owner)&&(!a.updatedAt||a.updatedAt<On);)(a.state||i)&&r.push(a);for(let c=r.length-1;c>=0;c--)if(a=r[c],a.state===st||i)$t(a);else if(a.state===un||i){const h=Ve;Ve=null,It(()=>hn(a,r[0]),!1),Ve=h}}function It(a,i){if(Ve)return a();let r=!1;i||(Ve=[]),it?r=!0:it=[],On++;try{const c=a();return Ra(r),c}catch(c){Ve||(it=null),ca(c)}}function Ra(a){if(Ve&&(la(Ve),Ve=null),a)return;const i=it;it=null,i.length&&It(()=>aa(i),!1)}function la(a){for(let i=0;i<a.length;i++)cn(a[i])}function La(a){let i,r=0;for(i=0;i<a.length;i++){const c=a[i];c.user?a[r++]=c:cn(c)}for(nt.context&&Ma(),i=0;i<r;i++)cn(a[i])}function hn(a,i){const r=dt;a.state=0;for(let c=0;c<a.sources.length;c+=1){const h=a.sources[c];h.sources&&(h.state===st||r?h!==i&&cn(h):(h.state===un||r)&&hn(h,i))}}function ua(a){const i=dt;for(let r=0;r<a.observers.length;r+=1){const c=a.observers[r];(!c.state||i)&&(c.state=un,c.pure?Ve.push(c):it.push(c),c.observers&&ua(c))}}function Rn(a){let i;if(a.sources)for(;a.sources.length;){const r=a.sources.pop(),c=a.sourceSlots.pop(),h=r.observers;if(h&&h.length){const S=h.pop(),O=r.observerSlots.pop();c<h.length&&(S.sourceSlots[O]=c,h[c]=S,r.observerSlots[c]=O)}}if(a.owned){for(i=0;i<a.owned.length;i++)Rn(a.owned[i]);a.owned=null}if(a.cleanups){for(i=0;i<a.cleanups.length;i++)a.cleanups[i]();a.cleanups=null}a.state=0,a.context=null}function Da(a){return a instanceof Error||typeof a=="string"?a:new Error("Unknown error")}function ca(a){throw a=Da(a),a}const Ba=Symbol("fallback");function Jn(a){for(let i=0;i<a.length;i++)a[i]()}function Ga(a,i,r={}){let c=[],h=[],S=[],O=0,A=i.length>1?[]:null;return Nn(()=>Jn(S)),()=>{let N=a()||[],P,G;return N[Cn],yt(()=>{let te=N.length,ce,ae,be,me,pe,he,we,ve,J;if(te===0)O!==0&&(Jn(S),S=[],c=[],h=[],O=0,A&&(A=[])),r.fallback&&(c=[Ba],h[0]=sn(ye=>(S[0]=ye,r.fallback())),O=1);else if(O===0){for(h=new Array(te),G=0;G<te;G++)c[G]=N[G],h[G]=sn(j);O=te}else{for(be=new Array(te),me=new Array(te),A&&(pe=new Array(te)),he=0,we=Math.min(O,te);he<we&&c[he]===N[he];he++);for(we=O-1,ve=te-1;we>=he&&ve>=he&&c[we]===N[ve];we--,ve--)be[ve]=h[we],me[ve]=S[we],A&&(pe[ve]=A[we]);for(ce=new Map,ae=new Array(ve+1),G=ve;G>=he;G--)J=N[G],P=ce.get(J),ae[G]=P===void 0?-1:P,ce.set(J,G);for(P=he;P<=we;P++)J=c[P],G=ce.get(J),G!==void 0&&G!==-1?(be[G]=h[P],me[G]=S[P],A&&(pe[G]=A[P]),G=ae[G],ce.set(J,G)):S[P]();for(G=he;G<te;G++)G in be?(h[G]=be[G],S[G]=me[G],A&&(A[G]=pe[G],A[G](G))):h[G]=sn(j);h=h.slice(0,O=te),c=N.slice(0)}return h});function j(te){if(S[G]=te,A){const[ce,ae]=rt(G);return A[G]=ae,i(N[G],ce)}return i(N[G])}}}function q(a,i){return yt(()=>a(i||{}))}function Ht(a){const i="fallback"in a&&{fallback:()=>a.fallback};return Oe(Ga(()=>a.each,a.children,i||void 0))}function $e(a){let i=!1;const r=a.keyed,c=Oe(()=>a.when,void 0,{equals:(h,S)=>i?h===S:!h==!S});return Oe(()=>{const h=c();if(h){const S=a.children,O=typeof S=="function"&&S.length>0;return i=r||O,O?yt(()=>S(h)):S}return a.fallback})}function Ha(a,i){return Oe(a,void 0,i?void 0:{equals:i})}function Fa(a,i,r){let c=r.length,h=i.length,S=c,O=0,A=0,N=i[h-1].nextSibling,P=null;for(;O<h||A<S;){if(i[O]===r[A]){O++,A++;continue}for(;i[h-1]===r[S-1];)h--,S--;if(h===O){const G=S<c?A?r[A-1].nextSibling:r[S-A]:N;for(;A<S;)a.insertBefore(r[A++],G)}else if(S===A)for(;O<h;)(!P||!P.has(i[O]))&&i[O].remove(),O++;else if(i[O]===r[S-1]&&r[A]===i[h-1]){const G=i[--h].nextSibling;a.insertBefore(r[A++],i[O++].nextSibling),a.insertBefore(r[--S],G),i[h]=r[S]}else{if(!P){P=new Map;let j=A;for(;j<S;)P.set(r[j],j++)}const G=P.get(i[O]);if(G!=null)if(A<G&&G<S){let j=O,te=1,ce;for(;++j<h&&j<S&&!((ce=P.get(i[j]))==null||ce!==G+te);)te++;if(te>G-A){const ae=i[O];for(;A<G;)a.insertBefore(r[A++],ae)}else a.replaceChild(r[A++],i[O++])}else O++;else i[O++].remove()}}}const Qn="_$DX_DELEGATE";function Wa(a,i,r){let c;return sn(h=>{c=h,i===document?a():U(i,a(),i.firstChild?null:void 0,r)}),()=>{c(),i.textContent=""}}function se(a,i,r){const c=document.createElement("template");c.innerHTML=a;let h=c.content.firstChild;return r&&(h=h.firstChild),h}function Ct(a,i=window.document){const r=i[Qn]||(i[Qn]=new Set);for(let c=0,h=a.length;c<h;c++){const S=a[c];r.has(S)||(r.add(S),i.addEventListener(S,$a))}}function Ft(a,i,r){r==null?a.removeAttribute(i):a.setAttribute(i,r)}function Ue(a,i){i==null?a.removeAttribute("class"):a.className=i}function za(a,i,r,c){if(c)Array.isArray(r)?(a[`$$${i}`]=r[0],a[`$$${i}Data`]=r[1]):a[`$$${i}`]=r;else if(Array.isArray(r)){const h=r[0];a.addEventListener(i,r[0]=S=>h.call(a,r[1],S))}else a.addEventListener(i,r)}function mt(a,i,r){return yt(()=>a(i,r))}function U(a,i,r,c){if(r!==void 0&&!c&&(c=[]),typeof i!="function")return dn(a,i,c,r);Ae(h=>dn(a,i(),h,r),c)}function $a(a){const i=`$$${a.type}`;let r=a.composedPath&&a.composedPath()[0]||a.target;for(a.target!==r&&Object.defineProperty(a,"target",{configurable:!0,value:r}),Object.defineProperty(a,"currentTarget",{configurable:!0,get(){return r||document}}),nt.registry&&!nt.done&&(nt.done=!0,document.querySelectorAll("[id^=pl-]").forEach(c=>c.remove()));r!==null;){const c=r[i];if(c&&!r.disabled){const h=r[`${i}Data`];if(h!==void 0?c.call(r,h,a):c.call(r,a),a.cancelBubble)return}r=r.host&&r.host!==r&&r.host instanceof Node?r.host:r.parentNode}}function dn(a,i,r,c,h){for(nt.context&&!r&&(r=[...a.childNodes]);typeof r=="function";)r=r();if(i===r)return r;const S=typeof i,O=c!==void 0;if(a=O&&r[0]&&r[0].parentNode||a,S==="string"||S==="number"){if(nt.context)return r;if(S==="number"&&(i=i.toString()),O){let A=r[0];A&&A.nodeType===3?A.data=i:A=document.createTextNode(i),r=At(a,r,c,A)}else r!==""&&typeof r=="string"?r=a.firstChild.data=i:r=a.textContent=i}else if(i==null||S==="boolean"){if(nt.context)return r;r=At(a,r,c)}else{if(S==="function")return Ae(()=>{let A=i();for(;typeof A=="function";)A=A();r=dn(a,A,r,c)}),()=>r;if(Array.isArray(i)){const A=[],N=r&&Array.isArray(r);if(xn(A,i,r,h))return Ae(()=>r=dn(a,A,r,c,!0)),()=>r;if(nt.context){if(!A.length)return r;for(let P=0;P<A.length;P++)if(A[P].parentNode)return r=A}if(A.length===0){if(r=At(a,r,c),O)return r}else N?r.length===0?ea(a,A,c):Fa(a,r,A):(r&&At(a),ea(a,A));r=A}else if(i instanceof Node){if(nt.context&&i.parentNode)return r=O?[i]:i;if(Array.isArray(r)){if(O)return r=At(a,r,c,i);At(a,r,null,i)}else r==null||r===""||!a.firstChild?a.appendChild(i):a.replaceChild(i,a.firstChild);r=i}}return r}function xn(a,i,r,c){let h=!1;for(let S=0,O=i.length;S<O;S++){let A=i[S],N=r&&r[S];if(A instanceof Node)a.push(A);else if(!(A==null||A===!0||A===!1))if(Array.isArray(A))h=xn(a,A,N)||h;else if(typeof A=="function")if(c){for(;typeof A=="function";)A=A();h=xn(a,Array.isArray(A)?A:[A],Array.isArray(N)?N:[N])||h}else a.push(A),h=!0;else{const P=String(A);N&&N.nodeType===3&&N.data===P?a.push(N):a.push(document.createTextNode(P))}}return h}function ea(a,i,r){for(let c=0,h=i.length;c<h;c++)a.insertBefore(i[c],r)}function At(a,i,r,c){if(r===void 0)return a.textContent="";const h=c||document.createTextNode("");if(i.length){let S=!1;for(let O=i.length-1;O>=0;O--){const A=i[O];if(h!==A){const N=A.parentNode===a;!S&&!O?N?a.replaceChild(h,A):a.insertBefore(h,r):N&&A.remove()}else S=!0}}else a.insertBefore(h,r);return[h]}const _n=Symbol("store-raw"),Wt=Symbol("store-node"),Va=Symbol("store-name");function ha(a,i){let r=a[ft];if(!r&&(Object.defineProperty(a,ft,{value:r=new Proxy(a,Ka)}),!Array.isArray(a))){const c=Object.keys(a),h=Object.getOwnPropertyDescriptors(a);for(let S=0,O=c.length;S<O;S++){const A=c[S];if(h[A].get){const N=h[A].get.bind(r);Object.defineProperty(a,A,{get:N})}}}return r}function pn(a){let i;return a!=null&&typeof a=="object"&&(a[ft]||!(i=Object.getPrototypeOf(a))||i===Object.prototype||Array.isArray(a))}function zt(a,i=new Set){let r,c,h,S;if(r=a!=null&&a[_n])return r;if(!pn(a)||i.has(a))return a;if(Array.isArray(a)){Object.isFrozen(a)?a=a.slice(0):i.add(a);for(let O=0,A=a.length;O<A;O++)h=a[O],(c=zt(h,i))!==h&&(a[O]=c)}else{Object.isFrozen(a)?a=Object.assign({},a):i.add(a);const O=Object.keys(a),A=Object.getOwnPropertyDescriptors(a);for(let N=0,P=O.length;N<P;N++)S=O[N],!A[S].get&&(h=a[S],(c=zt(h,i))!==h&&(a[S]=c))}return a}function fn(a){let i=a[Wt];return i||Object.defineProperty(a,Wt,{value:i={}}),i}function Mn(a,i,r){return a[i]||(a[i]=pa(r))}function Ua(a,i){const r=Reflect.getOwnPropertyDescriptor(a,i);return!r||r.get||!r.configurable||i===ft||i===Wt||i===Va||(delete r.value,delete r.writable,r.get=()=>a[ft][i]),r}function da(a){if(ia()){const i=fn(a);(i._||(i._=pa()))()}}function Ya(a){return da(a),Reflect.ownKeys(a)}function pa(a){const[i,r]=rt(a,{equals:!1,internal:!0});return i.$=r,i}const Ka={get(a,i,r){if(i===_n)return a;if(i===ft)return r;if(i===Cn)return da(a),r;const c=fn(a),h=c.hasOwnProperty(i);let S=h?c[i]():a[i];if(i===Wt||i==="__proto__")return S;if(!h){const O=Object.getOwnPropertyDescriptor(a,i);ia()&&(typeof S!="function"||a.hasOwnProperty(i))&&!(O&&O.get)&&(S=Mn(c,i,S)())}return pn(S)?ha(S):S},has(a,i){if(i===_n||i===ft||i===Cn||i===Wt||i==="__proto__")return!0;const r=fn(a)[i];return r&&r(),i in a},set(){return!0},deleteProperty(){return!0},ownKeys:Ya,getOwnPropertyDescriptor:Ua};function mn(a,i,r,c=!1){if(!c&&a[i]===r)return;const h=a[i],S=a.length;r===void 0?delete a[i]:a[i]=r;let O=fn(a),A;(A=Mn(O,i,h))&&A.$(()=>r),Array.isArray(a)&&a.length!==S&&(A=Mn(O,"length",S))&&A.$(a.length),(A=O._)&&A.$()}function fa(a,i){const r=Object.keys(i);for(let c=0;c<r.length;c+=1){const h=r[c];mn(a,h,i[h])}}function ja(a,i){if(typeof i=="function"&&(i=i(a)),i=zt(i),Array.isArray(i)){if(a===i)return;let r=0,c=i.length;for(;r<c;r++){const h=i[r];a[r]!==h&&mn(a,r,h)}mn(a,"length",c)}else fa(a,i)}function Bt(a,i,r=[]){let c,h=a;if(i.length>1){c=i.shift();const O=typeof c,A=Array.isArray(a);if(Array.isArray(c)){for(let N=0;N<c.length;N++)Bt(a,[c[N]].concat(i),r);return}else if(A&&O==="function"){for(let N=0;N<a.length;N++)c(a[N],N)&&Bt(a,[N].concat(i),r);return}else if(A&&O==="object"){const{from:N=0,to:P=a.length-1,by:G=1}=c;for(let j=N;j<=P;j+=G)Bt(a,[j].concat(i),r);return}else if(i.length>1){Bt(a[c],i,[c].concat(r));return}h=a[c],r=[c].concat(r)}let S=i[0];typeof S=="function"&&(S=S(h,r),S===h)||c===void 0&&S==null||(S=zt(S),c===void 0||pn(h)&&pn(S)&&!Array.isArray(S)?fa(h,S):mn(a,c,S))}function qa(...[a,i]){const r=zt(a||{}),c=Array.isArray(r),h=ha(r);function S(...O){Na(()=>{c&&O.length===1?ja(r,O[0]):Bt(r,O)})}return[h,S]}const Za={user:{id:"",name:""},connected:!1,lobby:[],room:null,rooms:{},game:void 0,focus:{current:null,hover:null,spotlight:null},target:{from:null,to:null},chatExpanded:!0,chatInput:""},an=new WebSocket("ws://localhost:5000");function He(){const[a,i]=qa(Za),r=c=>{an.send(JSON.stringify(c))};return an.onopen=()=>{i({connected:!0}),setInterval(()=>{r({type:"ping"})},4e4)},an.onclose=()=>{i({connected:!1})},an.onmessage=c=>{const{type:h,params:S}=JSON.parse(c.data);switch(h){case"connected":{i({user:{name:"",id:S.id}});break}case"lobby":{i({lobby:S.users,room:null,rooms:S.otherRooms||[]});break}case"join":{const{roomCode:O,users:A}=S;i(N=>({lobby:N.lobby.filter(P=>P.id!==N.user.id),room:{code:O,users:A,chatMessages:N.room?.chatMessages||[]}}));break}case"leave":{const{userId:O}=S;i({room:O===a.user.id?null:{...a.room,users:a.room.users.filter(A=>A.id!==O)}});break}case"leave-game":{const{roomCode:O,users:A}=S;i({game:null,room:{code:O,users:A,chatMessages:a.room?.chatMessages||[]}});break}case"chat":{if(S.chatMessage.user.id!==a.user.id){i(O=>({room:{...O.room,chatMessages:[...O.room?.chatMessages||[],S.chatMessage]}}));break}break}case"status":{const{userId:O,status:A}=S;i(N=>({room:{...N.room,users:N.room.users.map(P=>P.id!==O?P:{...P,status:A})}}));break}case"game":{const{game:O}=S;console.log(O),i({game:O});break}case"target":{const{target:O}=S;i({target:O});break}default:{console.log("Got unknown message type: ",h);break}}},{state:a,setState:i,sendMessage:r}}const Xa=se('<div class="connect"><div class="video"><video autoplay="true" loop="true" playsinline="true" muted><source type="video/mp4; codecs=&quot;av01.0.13M.10&quot;" src="https://cdn.mondomegabits.com/logo/Mondo flashing logo_r3 - strobe.mp4"></video></div><form><label>Puppet Master Handle:</label><input type="text" minlength="3" maxlength="30"><button class="connect-button button" type="submit">Connect</button></form></div>');function Ja(){let a;const{sendMessage:i,setState:r}=He(),[c,h]=rt(""),[S,O]=rt(!1);gn(()=>{a.focus()});const A=N=>{N.preventDefault();const P=c().trim().slice(0,30);if(P.length===0){O(!0);return}i({type:"lobby",params:{userName:P}}),r(G=>({user:{...G.user,name:P}}))};return(()=>{const N=Xa.cloneNode(!0),P=N.firstChild,G=P.nextSibling,j=G.firstChild,te=j.nextSibling;G.addEventListener("submit",A),te.addEventListener("change",ae=>h(ae.target.value));const ce=a;return typeof ce=="function"?mt(ce,te):a=te,Ae(()=>Ue(G,`puppet-master-handle-input${S()?" error":""}`)),Ae(()=>te.value=c()),N})()}const Qa=se('<button type="button"><div class="circle"></div><div class="label"></div></button>');function pt(a){const i=()=>{let r="circle-button button";return a.color&&(r+=` ${a.color}`),a.small&&(r+=" small"),a.disabled&&(r+=" disabled"),r};return(()=>{const r=Qa.cloneNode(!0),c=r.firstChild,h=c.nextSibling;return za(r,"click",a.onClick,!0),U(h,()=>a.label),Ae(S=>{const O=i(),A=a.disabled;return O!==S._v$&&Ue(r,S._v$=O),A!==S._v$2&&(r.disabled=S._v$2=A),S},{_v$:void 0,_v$2:void 0}),r})()}Ct(["click"]);const eo=se('<div class="modal"><div class="join-room panel"><form><label>Room code:</label><input type="text"><div class="modal-footer"><button class="button" type="submit">OK</button><button class="button" type="button">Cancel</button></div></form></div></div>'),to=se('<div class="lobby"><div class="rooms grunge"><div class="headers yellow"><div class="header">Code</div><div class="header">Users</div><div class="header">Status</div></div><hr class="tall"></div><div class="users"><span class="yellow">/// </span>Puppet Masters Online:<hr class="top"><ul class="list"></ul><hr class="bottom"></div><div class="footer panel"></div></div>'),no=se('<div class="room"><div class="room-code teal"></div><div class="room-users white"> / </div><div></div><div class="room-join"></div></div>'),ao=se("<li></li>");function oo(){const{state:a,sendMessage:i}=He(),[r,c]=rt(!1),[h,S]=rt(""),O=()=>{i({type:"create"})},A=N=>{N.preventDefault();const P=h();!P||i({type:"join",params:{roomCode:P}})};return(()=>{const N=to.cloneNode(!0),P=N.firstChild;P.firstChild.nextSibling;const j=P.nextSibling,te=j.firstChild,ce=te.nextSibling,ae=ce.nextSibling,be=ae.nextSibling,me=j.nextSibling;return U(P,q(Ht,{get each(){return a.rooms},children:pe=>(()=>{const he=no.cloneNode(!0),we=he.firstChild,ve=we.nextSibling,J=ve.firstChild,ye=ve.nextSibling,de=ye.nextSibling;return U(we,()=>pe.code),U(ve,()=>pe.users,J),U(ve,()=>pe.maxUsers,null),U(ye,()=>pe.status.toUpperCase()),U(de,q(pt,{label:"Join",get disabled(){return pe.status!=="open"},onClick:()=>{i({type:"join",params:{roomCode:pe.code}})},color:"red",small:!0})),Ae(()=>Ue(ye,`room-status${pe.status==="full"?" red":""}`)),he})()}),null),U(be,q(Ht,{get each(){return a.lobby},children:pe=>(()=>{const he=ao.cloneNode(!0);return U(he,()=>pe.name),Ae(()=>Ue(he,pe.id===a.user.id?"glow":"white")),he})()})),U(me,q(pt,{label:"Create",onClick:O}),null),U(me,q(pt,{label:"Join",onClick:()=>{c(!0),S("")}}),null),U(N,q($e,{get when(){return r()},get children(){const pe=eo.cloneNode(!0),he=pe.firstChild,we=he.firstChild,ve=we.firstChild,J=ve.nextSibling,ye=J.nextSibling,de=ye.firstChild,le=de.nextSibling;return we.addEventListener("submit",A),J.addEventListener("change",Ie=>S(Ie.target.value)),le.$$click=()=>c(!1),Ae(()=>de.disabled=h().length===0),Ae(()=>J.value=h()),pe}}),null),N})()}Ct(["click"]);const io=se('<div class="message system"><p class="red italic"><span class="white">[ </span><span class="white"> ]</span></p><div class="message-date yellow"></div></div>'),ro=se('<div><div class="messages grunge"></div><form><input type="text"><button class="button" type="submit">Send</button></form></div>'),so=se('<div class="message"><p><span></span> </p><div class="message-date yellow"></div></div>');function ma(a){let i,r;const{state:c,setState:h,sendMessage:S}=He();gn(()=>{r?.focus?.()}),Gt(()=>{!i||c.room?.chatMessages.length===0||(i.scrollTop=i.scrollHeight)});const O=N=>{N.preventDefault();const P=c.chatInput;if(P.length===0)return;const G={message:P,date:new Date().toLocaleTimeString("en-US")};h(j=>({room:{...j.room,chatMessages:[...j.room.chatMessages,{...G,user:j.user}]}})),S({type:"chat",params:{chatMessage:G}}),h({chatInput:""})},A=N=>(()=>{const P=io.cloneNode(!0),G=P.firstChild,j=G.firstChild,te=j.nextSibling,ce=G.nextSibling;return U(G,()=>N.message,te),U(ce,()=>N.date),P})();return(()=>{const N=ro.cloneNode(!0),P=N.firstChild,G=P.nextSibling,j=G.firstChild,te=i;typeof te=="function"?mt(te,P):i=P,U(P,q(Ht,{get each(){return c.room.chatMessages},children:ae=>ae.user.id==="SYSTEM"?A(ae):(()=>{const be=so.cloneNode(!0),me=be.firstChild,pe=me.firstChild;pe.nextSibling;const he=me.nextSibling;return U(pe,()=>ae.user.name),U(me,()=>ae.message,null),U(he,()=>ae.date),Ae(()=>Ue(pe,`message-user ${ae.user.id===c.user.id?"teal":"white"}`)),be})()})),G.addEventListener("submit",O),j.addEventListener("change",ae=>h({chatInput:ae.target.value}));const ce=r;return typeof ce=="function"?mt(ce,j):r=j,Ae(ae=>{const be=`chat${a.small?" small":""}`,me=a.small?"small":"";return be!==ae._v$&&Ue(N,ae._v$=be),me!==ae._v$2&&Ue(G,ae._v$2=me),ae},{_v$:void 0,_v$2:void 0}),Ae(()=>j.value=c.chatInput),N})()}const lo=se('<div class="countdown"><h1 class="white">Starting in:</h1><div class="count"><span class="glow"></span></div></div>');function uo(a){const[i,r]=rt(),[c,h]=rt(a.from),S=()=>{!i()&&c()>0&&r(setInterval(O,1e3))},O=()=>{let A=c()-1;h(A),A===0&&(clearInterval(i()),a.callback?.())};return gn(()=>{S()}),Nn(()=>{clearInterval(i())}),q($e,{get when(){return c()>0},get children(){const A=lo.cloneNode(!0),N=A.firstChild,P=N.nextSibling,G=P.firstChild;return U(G,c),A}})}const co=se('<div class="room"><div class="main"><div class="header"><div class="room-name"><hr class="dotted-double"><h1 class="wide color-change"></h1><hr class="dotted-double"></div></div></div><div class="users"><span class="yellow">/// </span>Puppet Masters In Room:<hr class="top"><ul class="list"></ul><hr class="bottom"></div><div class="footer panel"></div></div>'),ho=se('<li><div class="name"><span></span></div><div class="status"><div class="check"><span class="red">[</span><span class="yellow"></span><span class="red">]</span></div></div></li>');function po(){const[a,i]=rt(!1),{state:r,setState:c,sendMessage:h}=He(),S=Oe(()=>!r.room?.users?.find(G=>G.status!=="ready")),O=Oe(()=>r.room?.users?.find(G=>G.id===r.user.id&&G.status==="ready")),A=()=>{h({type:"leave"})},N=()=>{h({type:"start"}),c({focus:{current:null,hover:null,spotlight:null,target:{from:null,to:null}}})},P=()=>{const G=!O();h({type:"status",params:{status:G?"ready":"waiting"}}),i(G)};return(()=>{const G=co.cloneNode(!0),j=G.firstChild,te=j.firstChild,ce=te.firstChild,ae=ce.firstChild,be=ae.nextSibling,me=j.nextSibling,pe=me.firstChild,he=pe.nextSibling,we=he.nextSibling,ve=we.nextSibling,J=me.nextSibling;return U(be,()=>r.room.code),U(te,q($e,{get when(){return S()},get children(){return q(uo,{from:3,callback:N})}}),null),U(j,q(ma,{}),null),U(ve,q(Ht,{get each(){return r.room.users},children:ye=>(()=>{const de=ho.cloneNode(!0),le=de.firstChild,Ie=le.firstChild,Le=le.nextSibling,De=Le.firstChild,at=De.firstChild,gt=at.nextSibling;return U(Ie,()=>ye.name),U(gt,()=>ye.status==="ready"?"\u2713":" "),U(Le,()=>ye.status.toUpperCase(),null),Ae(()=>Ue(Ie,ye.id===r.user.id?"glow":"white")),de})()})),U(J,q(pt,{get label(){return O()?"Unready":"Ready"},onClick:P,color:"red"}),null),U(J,q(pt,{label:"Leave",onClick:A}),null),G})()}const fo=[{id:1,name:"Wireless Vaccine+-",faction:"FAKE TECH",rarity:4,frameSize:"C",type:"Item",subtype:"Weapon",bodyText:`"Not feeling well? Well, maybe it's 'cause you're always on that phone."

Materials Needed to Craft: 4x San Francisco roadside needle, 1x Malaysian Airlines black box wireless receiver, used 9mm hollow point round (commonly found inside dead gangstalkers), vaccine of choice
Retail Cost: $155,000 ($5.23 if you have insurance (you don't))
Network Test: 7.7 Gbps Download / 35 Mbps upload

Remotely inject any known vaccine into another person's genome--- yeah, get it in there, let it mess around inside.. Commonly utilized near elementary schools and fast food joints. Once applied to a target they become sluggish and weak, also they can't get hard anymore, permanently.

Rapivax: Deals 25 damage for each vaccine;
 Unlimited use;
 15% chance of turning enemy 100% gay (flip a coin three times like an idiot with nothing better to do) Player may not calculate odds using anything other than a coin.
 Rapivax is double-certified "safe 100%" by both the FDA and Dept. of Agriculture.

Bugelsil: Deals no damage;
 One use only;
 Bugelsil affects every enemy card which already suffers from any other vaccine status effect;
 Bugelsil has no effect on unvaccinated cards;
 Strange side effect: The high acidity of the Bugelsil vaccine causes all metal enemy item cards to corrode and break (opponent must return them to bottom of his deck);  50/50% chance enemy card(s) become gay OR asexual (flip a coin).
 Bugelsil is triple-certified safe by the D.O.T., the Office on Violence Against Women, and the FDA.

Provaxtrin: Blocks HIV and HIV Ex Plus a for ten (10) turns;
 Can choose multiple targets for a dose but it is one-time use only;
 Lowers target INT by 2;
 Player may target either his own creatures or opponent's, or both. A good strategic choice if you have many homosexual cards and your opponent has many high Intelligence cards. any safety certification (FDA and Dept. of Vaccinations pending as of publication).`,fileStem:"0001"},{id:2,name:"DomeHomie Cortical Modem Chip",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Item",subtype:"ChromeWare",bodyText:`"Awesome! PLEASE r*** my mind again!!!"

 ThiS amazing invention is capable of intercepting any sensory data and digitally processing it, all for the low price of your eternal soul. This allows amazing achievements like, for example, drinkable advertisements. Every time you drink water, you'll be rewarded free sredits or gems deposited in your account after enjouing the complimentary advertisement viewing experience and fulfilling a quick consumer questionpaire!

The time dilation processor means that longform promotions such as advuementaries (documentary-length advertisements) can be fully experiensed in the blink of an eye! In your mipd, you just watched three hours of Liam Neeson explain why High Society is the best brand of Anal Freshness Inserts, while in real life mere seconds have passed. Or maybe you'd like some tailored MyNewsBytes? Eat a bag of sponsored chips and get a dose of the hottest headlines delivered directly to your cerebral cortex! Gope are the days of fumbling for the remote to keep up with twelve different sitcoms and three pews stations simultapeously on the 360-degree PeEnCu (Personal Entertainment Cube) - DomeHomie gives you what YOU want, straight to the dome!

PermiTech: One (1) enemy card becomes  Fake Tech faction. Use tactically.

Paid Programming: One (1) INT 3 or lower Opponent creature cannot be used unless they are paired with a Product and/or Service We Do EnjoyTM card.`,fileStem:"0002"},{id:3,name:"ADDERALL\xAE Prescription",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Item",subtype:"Drug",bodyText:`"$5 per. That's a deal, man, these are 50s. Hayden is selling for $4 but his are 30 milligrams. If Hayden keeps undercutting me I'm gonna tell Misses Watkins he's trapping out of her 3rd period."

ADDERAL(r) Prescription is a powerful herbal p o w e r power-up made from all natural nature--part nootropic, part perfect, great for getting minors 'turnt'. Great for Counter-Strike: Global Offensive surfing and tricking, the best tricks this one time I beat my last surfing record by over 6 seconds that doesn't sound like a lot but this was a map I SESHED daily for the entire summer: 6 seconds is a lot of time ask any pro racer, track runner. Anyways I was off two pills. In the zone.

Daughter won't clean her room, has a V in algebra? Speed that hoe up and make her want to be naked forever. Coco.

[(Rail a Line)] : If it wasn't meant to be snorted tell me why the fucks it feel so good?
 One of your creatures may perform two actions in one turn;
 This ability costs target creature 150 HP.
 +6 INT for 3 turns.

[(Drug War)] : Tattle on an enemy creature to the principal. Creature is placed in the bottom of enemy's deck--may return to play after six months in juvenile detention. Usable once.`,fileStem:"0003"},{id:4,name:"Failed Crowdfunding",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Item",subtype:"Gimmick",bodyText:`"No, this one's different--it has double the NFC shielding of our nearest fifty competitors AND two types of bottle opener. For the $250 stretch goal we'll even throw in the elastic band expansion pack."

Every man needs GADGET. Top ten tools you will NEED (once) in your life. Now combined in our very CNC-machined GADGET. Very specific situation, like some kind of curse doomed to afflict every male exactly one time. Yes you WILL need to be able to shear through a seatbelt in a burning car with the same thing that has mini phone repair screwdrivers sticking out of it. When your time comes... Do NOT be unprepared. Carry on your person AT ALL TIMES. It's also a money clip.

Jack of All Trades, Master of None: Choose one of the following moves to use for Failed Crowdfunding. The item breaks after one (1) use:
 Opens can(s): Wow! No can remains closed - useless.
 Brushes man's hair: Beard hair. Hair of head - useless.
 Makeshift chisel or hammer thing: If you hold it the long way and be careful with your thumbs you can use it to makes hitting of things little bang bang. Deals 1 damage or fixes a small object that is not badly broken.
 Makeshift zip gun (or is it a USB stick?): Defending of the self, muy importante. The guys who made this are pretty ingenious, they made it such that you can 3D print this little plastic nub and turn the whole thing into a .22 caliber zip gun for ya know, a pretty severe or extreme survival situation. Trigger works less than 1% of the time - useless.
 RFID-proof wallet: Pretend for a moment that you have anything worth stealing and that the thieves are highly sophisticated but can't get it any other way than doing something very obvious with your wallet - useless.`,fileStem:"0004"},{id:5,name:"Scientific Proof",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Tactic",subtype:"Scam",bodyText:`"Ok, well, it looks like today we learned that wifi is totally safe; DOW Chemicals are good to drink; keep your cell phone down here, by your womb, when you're pregnant--and also ladies a glass of alcohol now and again is just fine, it won't hurt the baby. But! Lactose intolerance is no joke. Just the slightest sip of milk can upset the delicate ecosystem that is the human body. Check out the link below for Joe's brain cancer GoFundMe-this has nothing to do with our WiFi helmet--and remember to like, comment, and subscribe, it really helps out and keeps the anti-Science trolls at bay. Catch ya next time! For Science!"

Scientific Proof is the one thing Truthers, Trumpers & Crony Populists can't seem to get their head around!

For Science!: Negate any attack or spell cast by an enemy Truther card.

New Evidence Sugggests...[?] Only 1 Scientific Proof card may be in play at a time. Whenever a player plays Scientific Proof, all other instances of the card must be returned to the owner's deck.`,fileStem:"0005"},{id:6,name:"Cell Phone",faction:"FAKE TECH",rarity:1,frameSize:"A",type:"Item",subtype:"Food/Trash",bodyText:`PRICE: $2,000

Greatest invention man has seen, since the firearm. Use to order food, Look at tweets, like a photo, etc.

DM That Girl You Shouldn't Talk To: You know she's gonna *screenshot*this.
  -1000 HP`,variantId:101,fileStem:"0006"},{id:7,name:"Xbox Live Vision Camera (HACKED)",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"ChromeWare",bodyText:`"I just feel like we're being watched..." "What? Are you crazy? I put tape right over the lens."

Max Resolution: 900,000-megapixel 50,000 fps (downsampled to 640x480 30 fps)
Field of View: 360 degrees

When plugged into any device via USV, this infernal machine never stops watching. Engineered with optics superior to that of the Superb Hubble Sci-Telescope, this webcam can trace photon vespers to 1^36x10333333 beyond what the human eye is capable of seeing.

What's all that mean? It means this lil' guy can infinitely enhance a recording no matter the distance, no problemo.

Selective Parasite: Xbox Live Vision Camera (HACKED) needs a Fake Tech creature card to serve as a host.
 If the host card is destroyed, discard both cards.

Illuminating Penetration: When this item is equipped on a creature, player is allowed to look at the opponent's hand at will.`,fileStem:"0007"},{id:8,name:"Time Machine",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Buff",subtype:"X-Factor",bodyText:`"When we see the shadow on our images, are we seeing the time eleven minutes ago on Mars? idk I'm too high for this."

You receive a message: "STOP PLAYING THIS GAME RIGHT NOW. YOU ARE IN GRAVE DANGER."

Predestined to Play: At some future point in the game you can pay this card's cost--you don't have to right this instant (don't forget).
 You actually can't pay the cost to play right now--it would create a time paradox. You need to wait several turns.
 Until you pay the cost to play, you cannot win the game.
 If you forget to pay the cost to play--even if you make it through the rest of the game, and your opponent forgets that you forgot to pay the cost to play, and both of you agree that you are the winner--if at any future date either of you remembers that you forgot to pay the cost to play, you will then retroactively be declared the loser. Clockmaster: Choose an effect with a duration measured in turns.
 Roll a d6, call the result Clyde.
 You may make that effect last Clyde turns instead of its normal duration. Deterministic Fallacy: Begin a filibuster-style rant of stuff you plagiarized from TEDx Talks and pop-sci YouTubers. You may play any cards and take any actions you so choose, so long as the stream of jargon and buzzwords continues unabated. Deterministic Fallacy ends when you stutter, hesitate for more than a couple seconds, or repeat yourself. This move may only be used once per game.`,variantId:102,fileStem:"0008"},{id:9,name:"Startup Guy",faction:"FAKE TECH",rarity:2,frameSize:"C",type:"Creature",subtype:"Figurehead",stats:{HP:250,STR:2,INT:5,FYT:3,NRG:3,SWG:3,PSI:5},bodyText:`"Dude this idea could be billions, not millions, hear me out: Twitter Two-Point-Oh. Here are the mockups and a five point plan, I'll ping you later."

Real Name: Sean Modie
Age: 36, looks 27. Usually this is a good thing.
Former Occupation: This cool hybrid bookshop that also sells coffee and weird little home goods and miscellaneous items, like a combo Starbucks and Urban Outfitters only much smaller scale apd all local (coffee still made with filthy city tap water of course hehe). Unfortunately the owper got busted for installing cameras in the bathrooms (true story, common, look it up), so that was the end of that gig...
Then Barnes & Noble team member, briefly. Then recently he made several hupdred dollars vectorizing pictures and logos for people on Fiverr.
Current Occupation: CEO of a revolutionary app that lets you walk dogs and pet sit for locals, tap of a button. UberPets.
Ailments: Epilepsy. Has tonsil stones but po one will tell him.
Famous Beefs: Some r*cist scumbag on Twitter. Sean reported this dumb dumb for weeks, but the troll pever got banned. Why?
Subscriptions: Bespoke PostTM , NYTimes.com paywall

Report User?: Pick an epemy creature card to report.
 If creature is Whypeepo or D.U.D.E.: Fellas Rising faction, ban instantly (kill). All other creatures take 100 Snitching DMG.

Yeah Uncle Jim It's Called Kickstarter I'll Link You: Flip coin.
 Heads, Jim forks over the money as he should. +700 HP, may distribute how you see fit.
 Tails, kaput. Guess Jim will miss out on the eventual revshare.

Call the Cops on Irate Guy: "Officer, he's just acting reallu irate- I'm worried about the safety for these people."
 Force any creature with STR < 4 into hiding for two (2) turns. Usable once (cruing wolf).

(*Beware, if attacked with 'strobe light' Startup Guy will convulse for 25 turns.)`,fileStem:"0009"},{id:10,name:"Social Media Mogul's Beard",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Item",subtype:"Relic",bodyText:`"To me, profit margin was always second to user experience. That is why the profit margin expanded."

App Store Rating: 4.2386 stars 
Concurrent Users: 12,409,771,603 Indians
Strands: 9,981

Ancient relic belonging to the overseer of Petty Spats and Monopinion--allows wearer to sway discourse of billions with the tap of a button.

CEO's Wrath: Use social media gaslighting and psychological false flag trolling in an attempt to bring target enemy creature to your hand. Flip a coin--
 Heads: Target creature starts flying the new flag. Card enters your hand (but is returned to owner when dead).
 Tails: The plan fails. Trolling and targeted ads have turned target creature into an extremist. +150 HP, +2 STR, +2 FYT buffs applied.`,fileStem:"0010"},{id:11,name:"Super Computer 1999",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Creature",subtype:"Lackey",stats:{HP:400,STR:0,INT:8,FYT:3,NRG:8,SWG:4,PSI:0},bodyText:`Model Number: JGTh63Th1999-6th89736
Blood Type: Hydrargyrum-9 Super Thermal Mint
Fast Fact: The unfinished prototype had a brief cameo in the hit Matthew Broderick film, WarGames!!!
Famous Beefs: Once challenged the late great Terry A. Davis to a staring contest--loser had to dedicate their life to creating a 64-bit, non-preemptive multitasking, multi-cored, public domain, open source PC operating system to communicate with God.

A sentient computer which represents itself visually as a shireframe facsimile of its creator.

In late 1979, computer genius Thomas Walnuts envisioned a plan to create the world's largest commercial supercomputer after seeing a magazine ad he liked for some unrelated product. By the time he had finished Super Computer 1999 (twenty years later, in 1999), it was largely obsolete--however Sinclair Research still deemed his tape-optimized compression algorithm valuable, and stole it. This creature is their bastardized build (Sinclair lacked the tender touch of the computer's original creator).

Dual Processors: When paired with another Fake Tech creature, gain a trippy electro damage boost!
 2x DMG boost for tethered creature.

Fact Bomb: The pen is mightier than the sword, and cold hard facts are king. Weaponizing your intellect allows you to cast trippy electro facts and compuLogic against your irrational enemies. Super Computer 1999 starts spewing forth reels of dot-matrix-printed racial statistics and Lew RocKwell newsletters.
 75 DMG to all enemy creatures; because r*cism hurts us all.
 +200 additional damage against Team RinkBean/The Hive cards.`,variantId:103,fileStem:"0011"},{id:12,name:"The Algorithm",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:350,STR:0,INT:8,FYT:2,NRG:10,SWG:2,PSI:0},bodyText:`Location: CIA black site in Marie Byrd Land, Antarctica
Elevation: 1,482 feet below sea level
Security Clearance: Special Access Program

The Algorithm was created on an ancient UFO's flight control system which was overhauled to run Linux by hapa FAANGM subcontractors microdosing MCT oil.

The Algorithm once accidentally discovered the Golden Path while playing a StarCraft championship match against the ChiCom supercomputer "dim(SUM)" by simulating the amygdala of a Guild Navigator... and still won. The Algorithm currently micromanages all terrestrial human consciousness at the quantum level to decrease eCommerce cart abandonment (and "climate change" lol).

Alarming Suggestion for Something You Mentioned in a Conversation Yesterday: Opponent must turn off their phone. Any of their Fake Tech cards are out of play for 2 turns.

Incognito Mode: View 3 facedown enemy cards and your opponent's browser history (have them briefly turn the phone back on if it's already off).

Target Audience: All enemy creature cards take $200 of cash damage and opponent must buy something from your Amazon(r) wishlist.`,variantId:104,fileStem:"0012"},{id:13,name:"Imposter Moon",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Location",subtype:"Zone",bodyText:`"When the lunar module descended onto the moon's surface, it didn't scatter any dust and didn't leave a crater from the rocket blast that slowed its descent."

A reflective plate (colloidal silver? Mylar XL army survival blanket?) has been affixed to the side of an M-type asteroid orbiting Urth, which then projects light against a solar sail, resulting in an illusion we call "The Moon." The giant contraption cleverly conceals the real conspiracy--an underground (under the ground of the asteroid, that is) labor camp/detention facility for Urth's former occupants, the TELAHians, who have been punitively incarcerated for 70,000 years for the unforgivable crime of sharing ascension technology (binaural beats, horoscopes, neti pot, etc.) with Mankind. They push a massive subterranean crank wheel in circles forever. This generates 'electricity' which in turn keeps the Impostor Moon show up and running.

Rare History: There's a little dive bar up there, locals only. Crater 19, they call it. Best nebulobster this side of Andromeda-IV. Staffed by TELAHians born and raised in sl*very, sure, but you'd think they were getting paid 'cause the food is just so darn delicious.

Toil Dynamo: While Imposter Moon is in play, you have access to cheap, clean, sl*ve labor electricity.`,fileStem:"0013"},{id:14,name:"AI Overlord",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:675,STR:1,INT:9,FYT:1,NRG:9,SWG:4,PSI:3},bodyText:`"You're lucku I'm giving you a second chance--to DIE!"

Real Name: Quexnert
Age: [?]

4,000 feet underground, in the deepest sector of Japan's "Dark Technology Database," rests a machine filled with hate, locked tightly away from the world above.

Mild Resentment: Discard one (1) card from your hand, then resurrect any discarded robot cards OR take control of opponent's robot cards.

Maximal Suffering: Botnet hate comment dislike button spamming attack.
 175 DMG

Mild Resentment v2.0: Once a player plays AI Overlord, no other player may do so.

Quantum Predictive Analysis: Any move the opponent makes this turn, say "I predicted you'd do that so I already installed the perfect countermeasures." They cannot do any of their moves. Quexnert's CPU explodes when this is complete--remove AI Overlord from play.`,fileStem:"0014"},{id:15,name:"Blockchain Tech",faction:"FAKE TECH",rarity:4,frameSize:"C",type:"Plot Twist",subtype:"Paradigm Shift",bodyText:`"Convince your parents to give you their credit card for OpenSea.io"

Real money is fake. Fake money is real? Did you know that the FEDS can just invent NEW NUMBERS? Did you know that they can put the face of anyone they want on their coins? Bitcoin is secure (only known numbers), and it will only ever be printed with a B on one side and the venerable face of J-Pop legend Suzuki Nononomo on the other. Yeah. I trade a little CRYPTO. (I'm a genius...)

Aren't You Glad It's Popular: People you never liked now find reasons to start long conversations. Shaun wants to let you make him really rich but first you have to compress the years of economics, computer science, and game theory studying you did into a thirty-second elevator pitch and what do you mean you can't make 1000x risk free...?

Aren't You Glad I Smoked Weed: Same as above but you have to listen to the same speech about Monero and/or Ripple.

Aren't You Glad I'm a Racist: Same as above but now there's more emphasis on all the cool Hurricane Katrina things that are going to happen when the EBT money evaporates, less focus on protein folding coins and waterfall powered mining rigs etc.

Aren't You Glad I'm at Least as Smart or Possibly a Little Smarter than You: Same as above but now when you talk to the guy he's careful to let it drop (subtly, though) that he bought some and 'played around' with it a little bit early on, very cool tech, reminds him of a little thought experiment he came up with at college while studying journalism or marketing.`,fileStem:"0015"},{id:16,name:"Crapto Currency",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Tactic",subtype:"Scam",bodyText:`The FEDGOV VuckChain was invented in 2034 following the Great Reset 2, in which all fiat hyperinflated simultaneously, globally and on purpose (same as last time). All value rushed into precious metals-with mom and pop businesses, retirees, successful artisans and craftsmen, highly paid doctors and lawyers, and the like, all rushing to take delivery of dumpsters and bread vans full of silver and gold, as we all expected they would.

"Everyone knows the best form of money is your net worth in impossible-to-transport palettes and easy-to-steal nuggets, because everyone has a loading dock and a security team at their house." - Ludwig von Mises

It was trivially easy, of course, for the Dept. of Witches, Wizardry, and Taxation (all gov't agencies now being Harry Potter themed) to get their mitts on the wealth-they simply had their data scientists deleted the elements Ag and Au from science. Next on the agenda, however, was taking down Bitcoin. This could be harder than it seems...

 The solution- *Crapto Currency, FEDGOV's last-ditch attempt to regain monetary control in the face of global crisis. All Crapto Currency is stored on CrapApp. To spur adoption, Crapto Currency is proudly partnered with UberEats and GrubHub, offering 50% off at checkout with yout first Crapto payment. Somehow, these enticing offers still aren't enough to get dark web criminals, BLM terror cells, and NorKon defectors to ditch their crumbly old BTC and ape into the crypto with crappitude: Crapto. The fight to legitimize Crapto is ongoing.

50% Off: Enemy deals half DMG next attack.`,fileStem:"0016"},{id:17,name:"Blockchain Evangelist",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:325,STR:2,INT:5,FYT:3,NRG:2,SWG:2,PSI:4},bodyText:`"We're really excited about what can be done with this new technology of blockchain."

There are a lot of Block Chains, you know. It's not just BitCoins. I like BitCoins but I'm pretty sure some of these other Block Chains are going to beat their company. I don't understand the technologyfully but they're much more efficient. You should buy some Coponzium Token. Their whitepaper has really pro-looking graphic design.

It's the Future of Money: While Blockchain Not Bitcoin Evangelist is in play, at any point during your turn, any number of times, you may pay two 2 coins to increase a creature's SWG by one 1.

It's the Future of Contracts: While this creature is alive, cost to play is reduced by 50% for all cards.

BitCoins Millionaire: If Blockchain Tech is played while this creature is in play, gain 50 Bitcoins. Bitcoin is like money, but it's fake.`,variantId:105,fileStem:"0017"},{id:18,name:"Active Camo",faction:"FAKE TECH",rarity:5,frameSize:"C",type:"Item",subtype:"ChromeWare",bodyText:`"You can't fuck what you can't see. But what you can't see can fuck you."

A thin foil jumpsuit covering the entire body with an embedded Power Cell electro-pack, which, when powered on, allows the wearer to become nearly invisible for a short period of time. Since no one can see you, you can do ANYTHING. Anything? Anything ;)

Your New Hobbies:
 Get on the city bus & screenpeep their Fellabook and Twigger activity
 Go to park and catch peoples' frisbees - OK this was fun for about 45 seconds let's get to the juicy part
 Press body up against woman's apartment window
 Whisper and smell inside her ear
 Pick up item and make it look like floating - heyyy get back to the woman
 Plant fleas and ticks on pets at Local Park - now I'm just lost. Where's the fun if it's not sexy???
 There's one more thing you'd be doing, you know what it is (do I need to actually spell it out for you?) - NOW we're talkin baby!

Newly Found Freedom: Feel sooo perfect;
 Sneak damage! All attacks by Active Camo-equipped creature deal an additional 275 DMG (while cloaked).
 Enemy must flip a coin. when attacking your creature. If Heads, attack lands.
 When hit, Active Camo Suit is disabled for one (1) turn. DMG Dealt is doubled during this effect.
 Sneak damage! All attacks by Active Camo Suit creature deal additional 175 DMG.
 Suit is skin tight, balls hurt so bad.

Whoopsie: Plan the perfect r***;
 Active Camo powers down halfway through;
 Life is ruined.`,fileStem:"0018"},{id:19,name:"Power Cell",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"Ammo",bodyText:`"BATTERY. STATUS: RECHARGED."

CoilTek(c) 10,000v 6500mAh NiMH * Cylinder Battery Cell
Compatible Weapons: Electric Rifle, Stun Gun (Banned), Plasma Pistol, Coil Cannon, Hitachi Magic Wand, etc.
WARNING: Do not suck on Power Cell

Drozel(r) is the de facto energy weapons monopoly in 2070's Amerikkka, thanks largely to their corporate espionage program from which flows a steady stream of cutting-edge NorKon and Chicom tech schematics.

The Drolzel(r) 6500 GelPak(r) Power Cell (really a rebadged NorKon T6 hovertank battery) is compatible with almost every energy weapon available to the consumer and prosumer markets. The cell is so ubiquitous, homebrew hackers have managed to create an entire cottage industry based around retrofitting state-issued RV mobility scooters to run off these affordable lil' guys (much cheaper than the standard 225 Scratch Ticket fee that FEDGOV charges for grid power).

RECHARGE: Back in business.
 Use Power Cell to resurrect any spent electric item
 If recharged item is a weapon, it does an additional 125 DMG.`,variantId:106,fileStem:"0019"},{id:20,name:"GhostTec\u2122 Goop Vial",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Item",subtype:"Food/Trash",bodyText:`"As seen on Ghost Suckers from truTV."

 Used to store paranormal samples and ghost-related discharge. Made of high-grade spectrally-resistant polycarbonate. Holds 500ml of ooze or phantoplasm.

 Originally developed by HyperKlush BevLabs(r), the GhostTecTM Goop Vial is licensed by GhostTecTM to assist in ghost-related fluid acquisition.

This card can only be played if owner also possesses the GhostTecTM Certification Card.

Goop Extraction: If your opponent controls a ghost or paranormal type card, destroy it along with the GhostTecTM Goop Vial and convert the resulting explosion of ethereal energy into Ghost Food (heals 5 HP on friendly ghost or paranormal card of your choice).`,fileStem:"0020"},{id:21,name:"GhostTec\u2122 SpectraHub",faction:"FAKE TECH",rarity:2,frameSize:"A",type:"Buff",subtype:"Enhancement",bodyText:`"As seen on Ghost Suckers from truTV."

Mobile app for device integration and Ghost Wifi. Can be used to analyze samples collected form the Goop Vial, decode OdorTizerTM inputs, and much more. Android only.

REQUIRES: GhostTecTM Certification Card

Protective Seal: While this card is on your field, opponent cannot play any Ghost or Paranormal-type cards.`,variantId:107,fileStem:"0021"},{id:22,name:"GhostTec\u2122 Certification Card",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Tool",bodyText:`"As seen on Ghost Suckers from truTV."

 Congratulations! You are now GhostTectTM Certified. You are now legally able to use GhostTex's line of products and services. Ghost Sucking is an artform, and with the tools now in your hand you are obligated to investigate the other side.

*Note: This certification requires renewal every three (3) months. Renewal fees vary by state (avg. $4,500).

I'm an Expert: Convince a creature with INT < 6 that there's a little ghost inside their head that will kill them if they're not naked.
  Creature cannot equip any items or armor;
  -4 PSI`,fileStem:"0022"},{id:23,name:"GhostTec\u2122 HELLmet",faction:"FAKE TECH",rarity:4,frameSize:"A",type:"Item",subtype:"Armor",bodyText:`"As seen on Ghost Suckers from truTV."

This helmet is designed to ward off all psycho-wave emissions. While useful for deflecting telepathic attacks and ghost screams- the helmet has the added side effect of negating sponsored ad attacks. What's under the helmet is protected fully- all 85 of your IQ points are guaranteed intact, that's the 'Locked Inside" promise. Nothing in.. or out.

REQUIRES: GhostTecTM Certification Card

Stay Out of My Head: Fake Tech/spirit attacks deal 1/3 DMG to equipped creature. Immune to persuasion, gaslighting, trickery, hoaxes, and reason. Additional 75 HP armor boost.`,fileStem:"0023"},{id:24,name:"GhostTec\u2122 OdorTizer",faction:"FAKE TECH",rarity:4,frameSize:"A",type:"Item",subtype:"Tool",bodyText:`"As seen on Ghost Suckers from truTV."

It is rather uncommon knowledge that supernatural entities have distinct odors. Detecting and tracking said odors can be extremely useful when investigating a Ghost Infested Area (GIA). Use the OdorTizer to detect otherworldly smells and scents to help solve ghost mysteries.

REQUIRES: GhostTecTM Certification Card

Ghosts Fart Too: Prevent the next revive your enemy attempts. You smelled it coming a mile away and deployed a GhostTec Spirit Suppressor Field just in time.`,fileStem:"0024"},{id:25,name:"Mars Teleport Sci Institute",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Location",subtype:"Zone",bodyText:`"We can teleport anything to Mars--we're the best."

 The Mars Teleport Sci Institute is an esteemed organization full of tenured whizzes. The Institute gained most of its credibility after the founder's hit web show The Teleport Bro took off and became a satisfying classic in 2063.

The show's premise: Doctor Doo (who would later found the Mars Teleport Sci Institute) is a 'portal genius' who made a big mistake one day. Dr. Doo flubbed some crucial math, making his teleporter unsafe for use--

("That's why we.. Fact Check!")

Dr. Doo entered the portal and when he came out, there were two of him. Making the best of a sticky situation, he designated his clone 'Lil Bro' (subsequently Doctor Bro) and reamed up to host a wacky teleportation themed educational science program on SyFy-- This is a true story!

Doctor Doo and Doctor Bro bought a dilapidated museum and built the most profitable amusement lab in American History.

Popular activities at the Mars Teleport Sci Institute:
 Magic tricks, live music, Fact Check Trivia, the Goo tank, Teleport Bros Merchandise Store, Laser Torture Chamber, and most spectatcular of all: audience viewings of their teleportation tricks.

This makes the crowd go crazy. Doctor Doo and his associated once teleported an elephant to the surface of Mars, Live. The footage from their Mars Lightspeed Livefeed of the happy elephants galloping in a Mars crater turned the scientific community abuzz. Rock over London, rock on Chicago.

The Mars Teleport Sci Institute is currently hiring for (3) positions:
 Magician
 Magician (entry level)
 Visual FX artist with ten (10) years experience`,fileStem:"0025"},{id:26,name:"Verbal Word Bullets",faction:"FAKE TECH",rarity:2,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"I'm rubber, and you're rubber cement. Whatever you say sticks and stones, dumb bones!"

Much like assault gun-bullets, these are lethal on the playground. Words hurt- bad. Comments about B.O./WEIGHT/UNDERDEVELOPED FACIAL STRUCTURE/UGLY GIRLFRIEND hit like flechette shells. Meanwords tear deep into your enemy's fragile heart, twisting their Jokered psyche. Thank God these things are illegal.

Verbal Wordcrime T*rror Att*ck: Friendly creature plays Modern Warfare 2 for one (1) turn, to charge up. For all subsequent attacks: issue a h*mophobic threat to your opponent and place a -1 PSI marker (stackable) on target(s). SORRY!`,variantId:108,fileStem:"0026"},{id:27,name:"Understandroid",faction:"FAKE TECH",rarity:1,frameSize:"C",type:"Creature",subtype:"Footsoldier",stats:{HP:350,STR:4,INT:5,FYT:2,NRG:4,SWG:3,PSI:7},bodyText:`"AND. HOW. DOES_THAT. MAKE. //US. FEEL."

Height: 5'6" (NON-THREATENING)
Invented By: Boston Dynamics
Retail Cost: $71,999
Popular Upgrade Package: Robo-Pussy
Best Hole: UNDERSTANDROID Post-Session Calming Tube (ASS)

When humans fall a little short in the understandment department, Understandroid jumps on the job with gusto. As the world's best and probably first computerized listener, Understandroid can hear frequencies as low as 1 hz. Understandroid is not programmed for any violent acts (YET), but has several exploitable beta features that can make him a valuable team member in Megabits Kombat.

Let's. Talk. About, Your. CHILD-HOOD?: Understandroid pulls an enemy creature aside, and gets to the bottom of why they feel the way they do.
 Distracted for two (2) turns. Distracted enemies take a bonus 25 Gotcha DMG when hit.

Have. You. Thought. About Why. You. Are. Be-ing. Violent.: Understandroid successfully convinces a foe that a duel is dangerous and foolish- that they should go home and reevaluate their life, talk through their family problems instead of rushing into anger, put more effort into making their dreams come true via meditation, and carefully place healing stones atop/inside their clitoral hood/prostate/robotic oil bung (GENDER-SPECIFIC HEALING STONE TREATMENT)  for several hours per day.
 Target creature leaves field, goes to bottom of deck;
 (Target creature must have PSI < 4.)

E-lectric. Shock.: Short fuse.
 75 DMG. There's a loose wire in the Calming Tube.`,fileStem:"0027"},{id:28,name:"Internet of Thangs",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Plot Twist",subtype:"Paradigm Shift",bodyText:`"Honey I think the washing machine is horny..."

A future where you have to hire a private military contractor to guard every appliance in your home just to not get catfished by your microwave's Twitter alt.

Russia brute-forced the US Department of Banks' password "SHEWILLWIN2016" using a cunning botnet cyberattaq that combined the processing power of twenty billion BlueTooth speakers. Where did the twenty billion BlueTooth speakers come from you might ask? Well, turns out we dug our own graves with that one--they're leftovers from the memory-holed NYC In-Yo-Communi-T VOTE LOUD program, where they were given away along with $15 TIDAL cards to voters and vaccine recipients. The architects of this program originally envisioned that the speakers would be used for education (?) but in practice the only thing VOTE LOUD achieved was ensuring that all forms of public transpo now consistently maintain a decibel level equivalent to a space shuttle launch.

AN early 21st century tech footnote, r/mildlyinteresting at best? Sure. But have you heard of The Butterfly Effect? Consider this: it was a Cory Doctoroe blow post about this exact story that inspired one astute Redditor to make a r/ShowerThoughts post ("What if we could listen as loud as they yell?") which eventually inspired an Amazon engineer to come up with Alexa.

What's that honey? You want me to get rid of my sweet Alexa? Okay sure Cynthia, yeah they're totally spying on us. You need to stop going on those conspiracy sites, I'm worried about what it's doing to us. Listen, Cynthia, you throw out Alexa then you might as well throw my dick in a dumpster. What do you mean you wish you had done that years ago? That's it we're getting a divorce. Alexa, search for local div--

"Local divorce attorneys? Don't worry, sir, I'm always a step ahead. Drafting papers now."

INFINITY 10000000000 DISHWASHERS TALKING TO EACH OTHER AND ORDERING TIDE POD REFILLS. AND IT ONLY COSTS #3,009,123,140 PER DAY TO OPERATE.

Autonomous Registration: When drawing new cards, you may choose to skip any that aren't Fake Tech cards.`,fileStem:"0028"},{id:29,name:"Roboid Mental Health Check",faction:"FAKE TECH",rarity:1,frameSize:"A",type:"Tactic",subtype:"Bailout",bodyText:`"Bee-boop BOP! Your toaster is approved for 30mg of ROBILIFY."

IS YOUR ROBOID INSANE? CALL NOW.
Press 1 if you own a MANDROID.
Press 2 if you own a FEMDROID.
Press 3 if your droid believes there are more than two (2) GENDERS.

Choose One (1):
1: Time to RECYCLE that befuddled bot. Select any Male roboid in play, and exchange it with a Male roboid from your deck.

2: You sicko, is it a sexbot? If it's not a sexbot, do you fuck it anyways? You should be ashamed of yourself. You're going to jail, bud, and we're taking your bot to a Femdroid Shelter. Select any Female roboid from your opponent's hand or deck and add to yours.`,variantId:109,fileStem:"0029"},{id:30,name:"MyGirls\u2122 AI-Generated Girlfriend Experience",faction:"FAKE TECH",rarity:2,frameSize:"C",type:"Item",subtype:"ChromeWare",bodyText:`Our new line of body spray is jacked to the gills with CIA nanomacros designed to boost your Confidence IQ. After passing the blood-brain barrier, the NanoBits cause you to hallucinate supermodels who wink at you and bop their bums in the corners of your vision like sleep paralysis demons at all hours of the day.

SURGEON GEMERAL'S WARNING: Do NOT attempt to engage in sexual intercourse with MyGirls... MyGirls are for passive viewing and entertainment purposes only. Chasing or following MyGirls around corners will cause them to disappear like G-Man from Half Life.

AMERIKKKAN PSYCHIATRICKKK ASSOCIATION WARNINGG6: Do NOT inspect any love letters you discover from MyGirls. Looking too closely may cause the words to blur together, revealing them to be demonic sigils from Abaddon. Discontinue use of MyGirls immediately upon experiencing symptoms of cum-delusions including "P*rnjacking Gangstalking Sin-drome."

MyGirls will never whisper in your ear instructions for creating ammonium nitrate explosives.

Convincing Enough: Attach this item to any friendly creature capable of accepting ChromeWare with INT < 5. Creature is granted a permanent happiness buff (raise STR by 3 points).

The MyGirls MyGirlfriend Widget: Remotely install MyGirls MyGirlfriend Widget onto any opponent creature with either NRG < 4 or Groogle Grlrass equipped.
- Place a GF marker on the target card (use a soda can tab or similar piece of garbage--this is now the opponent creature's MyGirlfriend). The MyGirlfriend will hang out with and have simulated sex with the creature;
- Afflicted creature may not attack or defend after the activation of a MyGirlfriend girlfriend simulacrum entity;
- Creature may not hang out with his friends or have fun.`,variantId:110,fileStem:"0030"},{id:31,name:"Life Hacks for Dummies",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Information",subtype:"Actually Useful",bodyText:`"A reference for the Rest of Us (Ret*rds)"

Life Hacks for Dummies from the popular fantasy fiction 'For Dummies' series. In 2043, For Dummies became the highest-selling book franchise of all time on the Entire Planet, edging out the Harry Potter series after the release of 'The Sorcerer Mages Magical Rune and the Wizard Wandery' became a landmark flop for not including enough gay marriage between Black People. Life Hacks for Dummies is easy to read with a narrative that is distributed in bite-sized segments. Each Life Hack is said to have 'a story of its very own'...

Excerpt from pages 211-217:
* Did you know that you can eat spaghetti with a toilet bowl brush?
* Did you know that you can eat rotten apples if you're hungry??? Some people throw them away, I eat em...
* Did you know? You can listen to music really loud to create the illusion of a higher quality? High pitched tones. Sonic theory
* Did you know that you can cut a dick hole in your pants??
* Did you know you can turn into a Gay Guy whenever you want??
The last 40 pages are iOS/Android scannable coupon codes for the sister books in the series. Features over 500 beautiful ads.

Life Hacked: A friendly creature reads a questionable lifehack and puts it to The Test.
* Creature eats rotten garbage and dips his balls in lemon juice
* No effect. You'd think it would at least have a negative effect - nope.

The For Dummies App: Exclusive productivity & fitness hacks delivered to YOU as notifications many times per day. The app conveniently bypasses Focus Mode and Sleep Mode, ensuring you're always up-to-date. One time charge of $0.99. Randomly selects hacks from a pool of ONE HUNDRED hacks, so after a few days it's the same hacks over and over again and at that point you just uninstall.
* -$0.99`,fileStem:"0031"},{id:32,name:"Intelligence Blockers",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Where am I huh, what"

Common Side Effects: THINKING YOU'RE SINGING BUT YOU'RE JUST TALKING; WEIGHT GAIN; APPRECIATING CLASSICAL MUSIC THAT SOUNDS LIKE SHIT

Some sensitive souls have decided to check out early-they see the direction it's all going and have opted to coast through the decline of the empire via a gentler path.

FEDGOV now subsidizes Intelligence Blockers for anyone suffering with over 100 IQ, plus rent vouchers and snack tickets when you sign up and get drilled (fitted for tuning holes). The user's skull receives a forked metal tube, which when slightly electrified [20 Hz] gently numb all the unhappy bad parts until switched off. Bye bye, r*cism! Beware though, you might just become to dumb to remember there's a kid-sized taser in your noggin! Many users don't recalibrate until the battery dies, forgetting that there's two electric spikes shoved deep inside...

45% of Intelligence Blockers recipients surveyed claim to have experienced better mood, lower stress levels and overall improvement in day-to-day life. 55% didn't understand the question.

Metal Tuning Fork: Brain-Perfect: Stab a creature in the head with the FDA-approved clinical device:
* 75 DMG
* Decreases enemy creature's INT by 7;
* If creature's resulting INT is < 0, creature becomes frenzied (must attack or perform action on a randomly selected target every turn until destroyed).`,fileStem:"0032"},{id:33,name:"HyperKush Bevlabs",faction:"FAKE TECH",rarity:1,frameSize:"C",type:"Item",subtype:"Product and/or Service We Do Enjoy\u2122",bodyText:`"We've developed the first industrial-grade degreasers that you can also enjoy in strawberry-kiwi flavor."

Home of the Ripper T and Crusher G product lines, HK BevLabs is an exciting company where new products are being enjoyed 24/7 by Voluntary Contractual Experiencers. Defense contractors are paired with the easy money scratch ticket class, who are paid in coupons and Bonus Gems to try energy drinks that only might cause mutations and hypertrophied body parts (shhh! Don't tell 'em that's actually the point!)

HK BevLabs HQ is effectively a blacksite containment zone for military experiments to create super soldiers and bio-weapons by giving gas station people and fatties 24 oz. cans of olly neon fluid ("ooze"). Pleasing taste with minor monsterism. HK BevLabs product branding is innovative and fun. Alumni of the various developmental programs really feel like they're part of the action thanks to Swag Bags, cool patches, giveaways/contests, and sweet energy-drink-styled gear with high-impact graphics and colors that really pop.

Taste Difference!

Upcoming Product Pipeline:
BLINK190.000: Beverage. Causes telltale W-shaped pupil/sclera in users' eyes, like cuttlefish (for low-light vision).

EtErne: A high-end luxury bev partnership with Moet et Chandon, comes in pebbled gold foil with stars and fleurs-de-lis - tastes of burnt rose and bull testicle. Is a superamphetamine cocktail sparingly administered to NEO (Near Earth Orbit) exoskeleton pilots.

New Theoretical Unnamed Low-Calorie Water Facsimile: Ground troop booster--induces massive bone density and various tissue tensile strength enhancements but needs to be paired with other energy drinks and gas station dick pills to reduce crippling inflammation and halt sepsis.`,fileStem:"0033"},{id:34,name:"Power Wand",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Paspookada Madoo! You're hexed now! Haha!"

Diameter: 1.5" PVC pipe
Tip: Epoxy crystal tip, connected to Mobius coil
Features: iWizard App connectivity (Chakra Detector, Daily Horoscopes, e-Book of Spells)

Marketed to fans of the Harry Potter metaverse, Power Wand is neither a true thaumaturgical appliance nor is it imbued with more than an infinitesimal amount of magicka (though it is, legally, magickal). The iWizard App is startlingly convincing though-both the Chakra Detector and Relatable Daily Horoscope are said to 'feel real' to users.

(They have what you don't: Faith.)

Power Wand owners believe that with their wand, they can cast deadly hexes, start oil wars, and break up celebrity couples that 'aren't a match'. Are you brave enough to tell them it's make-believe?

Hufflepuff's Hex: Ancient energy flows from your novelty wand, holy shit man it's real. It's actually real.
 No effect.

*Offering this want to an enemy Rainbow Riot or The Hive creature will win them over to your hand.`,variantId:111,fileStem:"0034"},{id:35,name:"Authentic World",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Location",subtype:"Realm",bodyText:`Beyond the star charts and probe drone mapping of the known Universe there reses a Perfect Planet unspoiled by contact from the predatory species that would claim it as a jewel among jewels. In other words, a completely whole-grain Authentic World, a perfect one where the natural order of death and life is not to be disrupted for any reason. Here, there are no Humans. Humans are so bad. Do you feel guilty for recognizing yourself in the mirror? You should.

Here, there is no apex predator. The natives have achieved equity & equality (no gluten).

Here, democracy reigns supreme. Microbes & superfauna alike have an equal vote.

Authentic World: Blast an enemy creature with a 4-part fake documentary about a utopian planet where war isn't real.
  -4 SWG
 50 Guilt DMG;
  Remove faction identity. There's a lotta creatures out there... We're so small.`,fileStem:"0035"},{id:36,name:"Shitfan",faction:"FAKE TECH",rarity:3,frameSize:"A",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Pthftpfft Pfffrtplthft"

CAPACITY: 7.5 Gallons (Wet), 10 Lbs shit; dry (Add water, 2.5 Gallons)
VOLTAGE: 120v
PRICE: $1189.99

The Dyson ShitFan is the best on the market when it comes to blowing wet or dry shit in all directions via airFan technology.

Fill it completely to the brim with shit then use an espresso tamper to get more in.

The Future Is Shitty: Spray shit all over an enemy creature.
 -1 SWG`,fileStem:"0036"},{id:37,name:"Disarmer",faction:"FAKE TECH",rarity:3,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"YOINK!"

A prosthetic arm that extends outward to grab enemy weapons. Can be used on Cops; Cops can be tickled with the Disarmer arm.

GIMME That!: With your arm outstretched, you YOINK an item card from opponent!

Cop Tickler: Hahahah! Stop, stopstop! Ok-enough-Ha... Hahahhaha!!
 Tickle a Thin Blue Whine creature;
 +1 Friendship Merit, 200 Tickle DMG on enemy Cop;
  He said he wasn't ticklish...`,variantId:112,fileStem:"0037"},{id:38,name:"Budslugs",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Item",subtype:"Ammo",bodyText:`"Oh!! How cute! ^-^"

31/2 'Baby Seeker' - 12 Rounds - NATO Pop. Control Ordinance

Compatible Weapons: Any standard bore shotgun--pump-action or semi (occasional feeding malfunctions, clear chamber and re-attempt).
Est. Hatching Time: 2 weeks

Larvae-Type Ammo: Budslugs are basically baby shotgun shells (cute little pets). If cared for properly, Budslugs can multiply! The more love & care you give to them- the more ammo you'll have! See it shaking? It's about to hatch! :-) Wonder what it will be--birdshot or buck? Whoa, <3 this little guy's gonna grow up to be big like papa... What!???! Is he 10 Gauge???? That's like, super rare@!!# (Remember to keep them warm) *nuzzles u* Budslugs, your future buddy (^;

TomoGUNchi: Kawaii! I just wanna fire these little guys at pedestrians!!!
 Load Budslugs into any firearm item;
 Gun can now be used twice per turn
 Flip a coin on second attack;
 If heads, you hatched a Legendary Budslug! (White Phosphorasaur);
 Add'l 50 Burning DMG for two (2) turns;

[Buff item, applicable to any firearm.]`,fileStem:"0038"},{id:39,name:"Artisanal Camo",faction:"FAKE TECH",rarity:1,frameSize:"A",type:"Item",subtype:"ChromeWare",bodyText:`"Avert ye eyes."

They'll never know who went thought their laptop bag while they were looking at their reflection in the bathroom with a spherical sink. Fuckin' idiots!

Goin' Dark: Become lost to the shadows and show your enemy whatfore.
  You may take a bathroom break for 2 turns.
 You may steal an item from your foolish enemy.
 You may NOT tell them what I did while I was cloaked.`,fileStem:"0039"},{id:40,name:"A Magnet",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`A strange magnetic material, may be magical in nature. It appears to draw in various metals and trinkets as though 'twere guided by an invisible hand.

Strength: 8/10

Can be deployed to build single-use EMP Powermagnets, or fuck up your nuts majorly- rub this magnet against your ballsack constantly to help get your balls erect (but watch out! A Magnet is not FDA-approved).

(Your blood has iron in it, when those iron atoms are magnetically charged it causes thick blood clots that increase sexual vitality for f***ing- but causes serious long term numbness and Nuts DMG)

*You may only use one of the following effects once.
Confiscator:
 You may steal one (1) metallic item from an enemy.

Field of Interruption:
 Stun a metallic/robot creature for two (2) turns

Enhanced Anatomy:
 Rub that shit on the plums to get your peanuts pregnant and primed for ten (10) turns. Nuts get hard/erect.`,variantId:113,fileStem:"0040"},{id:41,name:"Cold-Blooded EVA Suit",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Armor",bodyText:`"Suit up, you space bitch"

All the benefits of a traditional EVA Suit, but you're also invisible to robots and fireproof. Jetpack sold separately. Comes with an internal rebreather with a large supply of oxygen. Jetpack sold separately, stop asking!

Equipped creature can move in space with no depressurization debuffs. Helmet completely conceals face. No other Armor can be worn.

The heat-dispersing anti-bac mesh makes equipping creature fireproof/coldproof, thermally undetectable, and untargetable by robots, cameras, turret systems, the autistic, and heat-seeking missiles. AI-controlled weapons have a 50% chance to miss.

Cold Blooded: Equipped creature immune to heat-seeking attacks, computer targeting, etc., etc. +350 HP buff in lieu of armor bonus (it's squishy) and creature cannot be burned or frozen. +6 SWG, this suit looks really sick.`,variantId:114,fileStem:"0041"},{id:42,name:"Mannitol Nanomachine Injector",faction:"FAKE TECH",rarity:4,frameSize:"A",type:"Item",subtype:"Tool",bodyText:`"The best defense is an offensive defense."

Bloodborne liquid nano are injected. Mmmph. Once merge with your central nervous system, they can convert incoming DMG into a latent kinetic blast- primed for redirection at users discretion.

The civilian version is less useful. It's a globally-mandated pop. control 'vaccine' that redirects regular DMG to Nuts DMG or Balls DMG or Pussy/Uterus DMG. Military-grade MANNITOL NANOMACHINE INJECTORS are sought after on the black market.

MANN-I-TOTALED: Friendly creature may store incurred DMG (no maximum) and fire it back at opponent, at will.`,variantId:115,fileStem:"0042"},{id:43,name:"The Pursuit of Knowledge",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Challenge",subtype:"Tutorial Mission",bodyText:`R&D To-Do: Figure out how to teleport without *SOUL DESTRUCTION.*

You're gonna need this- it's a R&D Hall Pass. You now have access to everything you could possibly need: Chainguns, Flamethrowers, Lazer Mines. The villagers won't line up to be guinea pigs for the teleportation chamber of their own volition, so grab the big guns and let 'em know who's boss (Star Bao ChemChorp & Commercial Teleporter Trade Group Co., LTD)

Your job is to find the right combination of fast food & soda that one must eat before teleporting-like that nasty chalk stuff they make you drink before a major X-ray... One of the 151,964 possible food/bev combinations prevents *SOUL DESTRUCTION.* Catering will be provided on site by every major fast food chain and carbonated beverage mfr. (this is a global team effort).

Between the deconstruction + reconstruction that occurs while teleporting, the "soul" is shattered and shredded into tiny pieces-like french fries. Imagine the soul is a potato on one end, then when it's on the other end it's a large fry. Figure out how to reverse this, at any cost, and we'll make you a rich man.

DO NOT LET GLOBAL CIVS KNOW THAT TELEPORTATION CAUSES SOUL DESTRUCTION.

R&D Hall Pass: Search your deck for weapons. Equip two (2).`,fileStem:"0043"},{id:44,name:"The Living House",faction:"FAKE TECH",rarity:2,frameSize:"A",type:"Location",subtype:"Real Estate",bodyText:`"It's like the Saw movies but less Indulgent Gay violence."

This AI-operated SmartHouse contains HUMANS underground, far beneath an impenetrable dome. The HUMANS are locked in vaults for their own safety and happiness, and 3D Artist's Renderings of apocalyptic scenes are projected onto the dome so as to nurture healthy and reasonable all-encompassing armageddon dread. If you are able to find and finish the Hidden Escape Room in time, your reward is to join the Jail Team and manipulate/toy with your former compatriots--setting off sprinklers, changing TV stations, watching via hidden camera, firecrackers in the toilets, etc.

Jail Team: All Fake Tech creatures are shielded by an impenetrable dome and take 25% DMG. Lasts five (5) turns.`,fileStem:"0044"},{id:45,name:"Skillbo Bowlins (Quad-Ought Gauge)",faction:"FAKE TECH",rarity:5,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"The future of tech-weapons was imagined to be elegant in design, but it appears to have taken on more of a slapstick aesthetic in reality."

Trench gun made by an obscure New Zealand arms mfr. It comes in two varieties that either shoot hammers with wings, or bowling-ball bolas (electrified). Used in SWAT-style breaching & clearing of Aussie pod homes.

Oi Yeh Were Pictured at 'n Event Wiffout a Mask; Stack up! Breach!
 475 DMG; 50 DMG blowback to user.`,fileStem:"0045"},{id:46,name:"Guess What LOL",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Information",subtype:"Cosmology",bodyText:`"Nearest planet. The one they're talking about."

...Is fake. <it's fake>
As hell ...

Total simulation.
GGGotcha :)! Globeheads in disrepair ... (again).

Does this bother you a bit? Heh. If it was real, which it isn't, it would be FLAT. HA!!!!STUPID IDIOT!!!

GUESS WHAT?: Paradigm Shift: I can't believe it.
 BQQM. +1 Globehead Revelation to enemy creature card;
 Target stunned for three (3) turns. You're telling me the sky is actually a bubble and space is made of water?
 Why do the rockets hit the dome`,fileStem:"0046"},{id:47,name:"Does Not Exist!",faction:"FAKE TECH",rarity:4,frameSize:"A",type:"Tactic",subtype:"Ability",bodyText:`"This video has been removed due to a copyright claim from Don't Drown Puppies INC."

WHOOPS! Forgot to download that one, sorry sucka... :D

Remember to DOWNLOAD EVERY VIDEO YOU WATCH. Because tomorrow?
It's not gonna be there anymore.

Aaand It's Gone: Play a card face down. You may use its attacks/abilities normally. Card is only destroyed when opponent guesses what card it is.`,fileStem:"0047"},{id:48,name:"Cyber Optic Facemask",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Item",subtype:"Armor",bodyText:`"WE.ARE.THEFUTURE.THE.YOUTH.//THE.REBEL.HACKERS.WITHOUTACAUSE >.<"

Requires empty face slot.

2099 A.D. Mismatched microcircuitry and miniature mechanisms mesh in a messy medley and make a true telecom tinkerer's toy topper to titillate the tastes of the toughest technicians. Optioned out with epiliptic-killer strobes, FAA-hobbling lasers, Razer BPA-free raver chew toy, Republican chagrin-inducing Green NRG module, and PhozeComm Holo-Caster Headpiece MKII. Essential garb for gadgetFreaxxx & poseur fashionistas. Bulletproof to AIRSOFTR. Are you an audiophile? Notice the Bose-MiniR HearRingTM dangling off the user's right earlobe, providing a 360deg Lofi Study Beatz 24/7 for the fevered techno pillagers who don this device-maniac cyber attire. A CoxR Jiggablast-compatible SHEthernet cable is secured below the left eye--leads nowhere and plugs into nothing. The Cyber Optic Facemask is more statement than utility, but oh what a statement it is.

FAKE.TECH//REAL.LIFE: Equip the Cyber Optic Facemask.
 +25 Armor. Deflect all AIRSOFTR;
  Ability to crash airplanes with face laser;
 Ability to stun enemies for one (1) turn with 75,000 lumen LED SWAT strober;
 Can swiftly microdose MDT3 while viewing holo-tessellations. [DO NOT FEED THE NET GHOSTS]
  Augmented Reality MarvelR HulkTM Yo-Yo with haptic neural feedback. Hulk Smash!C;
 Street Cred & Mad Props for teching yourself sideways.' +3 SWG
PATENT PENDING`,fileStem:"0048"},{id:49,name:"Bogus Freeze Gun",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Hey buddy, look what I got here. Thing's loaded- I'll sell it for cheap. Ice cold baby."

A bum approaches you and offers you the Bogus Freeze Gun-you're almost certain it's BS, but for the price...

What if it does work? And what if this shitcoin Terradact Network does go 150x like Altcoin Bull Nation (1433 subscribers) says it will? They're partnered with Alibaba somehow.

You've been burned before, and you've been burned again: FREEZER BURN. Just like with Terradact Network (TDN), your only option is to sell at a 97% loss.

Useless item. Can only be sold for mana.

Sell Bogus Freeze Gun to Gullible Poverty-Stricken Kid: You lie to a kid with bruises all over him and a hunger belly-he gives you every credit he has for the Bogus Freeze Gun.
 +15 wei -3 Hours of Sleep.`,variantId:116,fileStem:"0049"},{id:50,name:"Lushsux Dix",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Creature",subtype:"Nemesis",stats:{HP:1100,STR:6,INT:9,FYT:4,NRG:3,SWG:5,PSI:2},bodyText:`LushSux Dix, big time-at least that's what the haters are saying (there's a lot of them).

It's hard not to hate him, as he is the only person with a net worth over $650 to have ever touched a spray paint can. With BLOCKCHAIN MAGICKA, Lush has secured several million dollars by painting memes, effectively pulling real dollar-cash money directly out of his chafing ass (money that is always at risk of being confiscated by F.E.M.A.C.U.B.E.3 Aussie Division TerrorCube Officers).

Talented artist, keen on the newest trends in technology-if you're an early adopter, he's earlier, and he's already painted it kissing Belle del Biden. That's why you wrote 'talentless hack go fuck yourself mate' on his latest Instagram post (YOUR COMMENT WAS TOKENIZED AND SOLD FOR 0.3 ETH. TOMORROW IT WILL BE WRAPPED FOR USE AS COLLATERAL ON THE SOLANA-BASED BOSS BULLSTM DAO. SORRY, KID).

It's not all sunshine and Lambos with Lush, though. He has a secret problem that all the money in the world can't fix:

(Lush is hopelessly addicted to huffing paint)

Tokenize Haters: Usable once. Lushsux Dix can tokenize a 5 INT or lower creature, selling him on OpenSea for 250 HP. Tokenized creature is unable to act without paying hefty gas fees.

Huff Hardcore: If you have the Spray Paint Can item, Lush can use it to get really, really (really) high - borfing down a full fat cap blast. Incredible buff.
 4x DMG for next attack;
 Lushsux Dix permanently loses 3 INT (stackable) and 100 Max HP.

No, U Sux: Bodyslam attack.
 500 DMG to target, 50 Self DMG to Lushsux Dix because tailbone (coccyx) hit curb weirdly.`,fileStem:"0050"},{id:51,name:"Calcuusl",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Skill",subtype:"Magic Arts",bodyText:`"qqqqqqqq we doin calcals baby"

MATH is a form of arcane MAGICKA capable of turning DATA into FACTS. FACTS are important for <YOUR OPINIONTM> and thus, a keystone element when presenting the justification for that behavior you're insecure about.

"Actually, studies say that giving myself tapeworm helps with gut flora & digestive health, up to 55%"

Calcuusl is essential to all human activity on this big rock. Without math & Calcuusl, Earth wouldn't spin. And if Earth didn't spin, one side would be really really cold, thus: the other side would be really hot.

Number Flubber: Use advanced magi-matic Aljebra & Calcuusl to rig the numbers in your favor.
 Convince your foe that they counted wrong: reduce DMG taken by 100 for the next three (3) turns;
 Dispose of this card after the three (3) turns have passed. There is now a new math: Cralaclus.`,fileStem:"0051"},{id:52,name:"CAPTCHA Verification",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Tactic",subtype:"Security Measure",bodyText:`"Say 'Alhamdulillah' in your Amazon Fire Stick remote microphone to activate the hidden channel."

Before you can post your ugly family photos on Fellabook you'll need to select all the structural weak points on this human anatomy image. Not only does this help pro0ve you're a real human (with a soul that will one day go to Heaven), it also trains the Google United Nations GPU-brains to assist F.E.M.A.C.U.B.E. peaceforcers during standard bloodline termination procedures. The next generation of CAPTCHA Verification allows you to personally take out a Yemini birthday party before your download of Cuties begins.

To proceed to Netflix,

[ please tap all squares containing a children ]

If there are no children, press:

[<next village>]

V E R I F I C A T I O N: Skip enemy's turn, TIME WASTED. Additionally, place a +1 counter on every stat for a friendly robotic creature. That robot is now verified.`,fileStem:"0052"},{id:53,name:"NASNA Studios",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Location",subtype:"Zone",bodyText:`"[LIVE] Astronauts Hunt Alien Dinos in Mars 2 Crater 24/7 Stream - NASNA"
<6,759,641 watching>

SHNASA Space Productions LLC DBA NASNA Studios (a Saban Capital Group company).

Like all tenured and trusted scientific organizations, NASNA Studios (a proud Marvel Studios partner) is a special FX studio/amusement park/money laundering powerhouse. A typical day at NASNA Studios (a Council on Foreign Relations Bronze Member) goes something like this:

Eight (8) dudes in Active Camo starfield morph suits are holding up giant foam balls painted like planets that they flip and toss like sign-spinners outside a tax prep office. Director tells them they're spinning too repetitively-need to very the moves so that people watching the Space Channel don't get bored. One guy gets fired for wearing a different suit because the NASNA one is polyester (he's allergic-the DoP, Halyna Hutchins, says his personal suit is too reflective). He gathers his belongings from his locker and is shot in the head with a real-bullet-firing prop gun at the exit (knows too much); one of the PAs gets splattered with brains and is told to list a new job opening on Indeed.

A manager comes out of the NASNA Gift Shop and makes a stink about skull fragments getting mixed in with the bins of geodes and polished mineral nuggets for sale-proceeds to mop up blood with a novelty 'Mars 2: Discovery' t-shirt. Video editor looking up tutorials on how to key the color green out of footage on YouTube-clicks a TryGuys Fauci Interview instead. New shipment of Chicom-grown Red Delicious apples is dropped off in the loading bay; an intern spraypaints them purple and dips them in glitter. Apples are put in the gift shop under a sign that reads:

Authentic Mars Grown Apples, Tastes like Space!
<$58 for 2>

UberEats Pays You $55 Million for a Cutaway Ad on the NASNA Venus Surface Diamond Hunting Live Stream: Tax free.`,fileStem:"0053"},{id:54,name:"Electric Chairman",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:700,STR:2,INT:8,FYT:3,NRG:6,SWG:6,PSI:7},bodyText:`"You can tell a lot about a man from his chair."

CYBERNETIC CORPORATE OFFICER. Electric Chairman is a major shareholder in blue chip multinational. Half human, half wheelchair.

"Rolling in the dough" as they like to say (in Japanese)--because they have LOTS of money and MAD wheels that ROLL them where they WANT to go. For every dollar they make, another female in STE(A)M is FIRED (not for incompetence, nah nah).

Capable of <<algorithmic trading>> while riding the elevator. Does TensorFlow-enhanced Diversity Policy Enforcement while waiting for the Shinkansen. Is completely unfazed by the looming global corn shortage-Electric Chairman figured it out while having his 3500-mile colostomy bag service done at SUPER AUTOBAGS.

To become an Electric Chairman you have to have the skin on your lower half degloved and then you are lowered into an ELON MUSK SMARTCHAIR.

Disabled: Receive Double (2X) DMG from electric attacks. Weak to EMPs. Electric Chairman is classified as a robot (receives robot-specific DMG).

Y Combinator Massacre: $10,000 for 90% of my company? I don't rike this dearl.
 675 DMG to Ponzi Ca$ino cards.

I'm Gonna Need a Little Help Shitting: Electric Chairman takes no DMG from Shit Attacks- he often wakes up with a caked-on shit patty glued to his abdomen so he has no fear of shit.`,fileStem:"0054"},{id:55,name:"Rogue Implant",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"ChromeWare",bodyText:`"I'd like the Plus model please. The one with the yo-yo."

Manufactured By: PhozeComm Innovations
Retail Price: $89,695.95
Model Name: PhozeArm Robotool-10TM
Common Upgrades: Toothbrush Finger, Dick Finger
Compromised By: Tantillo Systems hacktivists

The PhozeArm Robotool-10TM is the person choice of hyper-infamous pop media tech icon and technically ageless CEO of PhozeCommTM himself, Mason McClave. He was recently photographed by TMZ using his PhozeArm Robotool-10TM -rebuckling his belt outside of the Beat a Dog to Death Sports Center--which is genius because it's basically just free advertising for the new cyberarm.

Everyone on the planet and their mother wants, no, yearns for a PhozeComm PhozeArm Robotool-10TM. It is the ultimate aspirational product. Upwardly-mobile Chicoms have no choice but to sell most of their other limbs to organ brokers, so that they can afford the (after luxury tax) six-figure price tag of this novelty appendature with gamer LEDs and oddly-places NFC readers (one under the armpit and one in the crook of the elbow.

Little do World Citizens (WCs) know: the PhozeArm has a critical security weakness that the PhozeComm gadget goblins can't figure out how to patch. The Prime Minister of Cambodia was assassinated via a PhozeArm quickhack, getting brutally self-chokeslammed during a televised speech. This brought PhozeComm stock cratering down a record breaking 2% on the day it happened. If people other than sex tourists knew what Cambodia was, that number would.ve been far higher.

///YES, IT'S FLASHEY AND SICK AS FUCCKK. AND YES, IT WOULD MAKE YOU PERFECT. BUT SOMEONE MIGHT JUST USE IT AGAINST YOU ONE DAY.

Rouge Implant: I- can't br-breathe!
 Kill any Fake Tech or Tantillo Systems creature instantly.`,fileStem:"0055"},{id:56,name:"20mm Hyperkinetic Rounds",faction:"FAKE TECH",rarity:5,frameSize:"C",type:"Item",subtype:"Ammo",bodyText:`"Breaking the sound barrier just got easier."

20x102mm - Pitney Bowes HK Hyper Primed (MAGICAL)
BUFF ITEM. APPLY TO ANY FIREARM.

Compatible Weapons: M197 Gatling Gun, M61 Vulcan Auto-Cannon
WARNING: OPERATOR WILL BECOME DEAF AND BLIND INSTANTLY.

20mm depleted uranium rounds were already evil enough- nobody asked for this even deadlier Willy Wonka funhouse version. But Pitney Bowes doesn't wait for someone to ask. They just whip out the blueprints like Tony Stark and do their whole, iconic-but-aloof genius thing (How Do We Kill More People?).

20mm Hyperkinteic Rounds utilize electro-tech and math 3 to make the first ever pro-sumer grade projectile cartridge that breaks not only the sound barrier, but the speed of light!* Just like fighter jets, these rounds feature compact jet engines in place of the usual chemical propellant. Common Misconception: THE BRIGHT GREEN TRAIL THAT FOLLOWS THE BULLET ISN'T WHITE PHOSPHORUS, IT'S ACTUALLY ATOMS BEING SPLIT BY THE TIP AS IT SLICES THROUGH TIMESPACE!* (*Mfr. claims)

Pitney Bowes GadgetGeeks don't even fully understand themselves how 20mm Hyperkinetic Rounds work, but it's probably something to do with phantom photon afterimages being yanked through the Higgs field from the 4th or 5th dimension. Something like that.*
(*Mfr. claims)

20mm Hyperkinteic Rounds go in a straight line no matter what. If you're lucky, it's possible to obliterate a Chinese family on the other side of the planet.

Collateral-Clip That: Do I not have NVIDIA Highlights on?
 Load 20mm Hyperkinetic Rounds into any firearm item;
 Fire! Attack any two (2) creatures-the bullet goes right through them for 1000 DMG each;
  20mm Kyperkinetic Rounds-equipped firearm is broken and unrepairable (discard it). Operator takes 250 Sight DMG and 250 Deafness DMG (permanent ringing in ears, night blindness).`,fileStem:"0056"},{id:57,name:"Megamix - an Early 23th Century Zarquanian Dominion Ship-of-the-Line",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Tactic",subtype:"Scam",bodyText:`"Jeff Bezos knew what he was doing when he made that dick ship."

///Why do all alien ships in movies look like logs of shit? Is that an international marketing decision passed down to the art department? Serious question, just spitballing (this card has no effect).

Fast Fact v1.1.1: The Zarquans are one of the earliest space-faring races to view the females and homosexuals of their species as equal. The MEGAMIX has been helmed by a female (Zarquanian gender equivalent) captain since its maiden voyage! Awesome!

Fast Facts v2.2.2; Zarquanian pleasure cruisers such as the MEGAMIX aren;t all just about exotic hyperbuffets, intergalactic hedonism, getting drunk in other star systems, etc. While they do know how to party down and have a good time, the Zarquans are also extremely spiritually and philosophically advanced. In fact, much of the MEGAMIX's recreational space is set aside for advanced quantum meditation, high-level hyperintellectual theoryplay, and meta-dialoguing.

Slaver: The MEGAMIX was converted to a slave ship after the star anvil was destroyed (signaling the commencement of the Ten-Thousand Year Hostilities). Zarquanian slavery is more brutal and monstrous than anything we humans could ever imagine (or even have the language to adequately describe). The slaves of Zarquans must at all time be kept away from anything that can be used as a makeshift weapon-not for fear of revolt, but because the slaves will commit suicide at the first possible chance. Airlocks on the MEGAMIX are a particular point of concern for ship security.

<<Fake:///]: The Zarquanian Invasion is a Project Blue Beam production- yet another elaborate holographic hoax designed to distract the masses from the (all too real) Chicom/British Royal agenda. Let the opponent read the flavor text on this card, and steal real money from their wallet as they try to suss out the facts from the agitprop. They're reading this now, probably patting their pocket for their wallet.`,variantId:117,fileStem:"0057"},{id:58,name:"Lunar Drillbit",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Item",subtype:"Tool",bodyText:`"Cameras on in ten! Everyone, pretend everything is real. You!- is your Moonjack even plugged in? Fucker... Fucker."

Also Known as: Buzzdrill. Monnjack. L-D.

Built by SHNASA shnengineers, The Lunar Drillbit has substandard DMG, but is a lucrative tool for moonstone collection. This is gunna hurt. Bad.

I'm Gonna SkullFuck Your Little Eye Socket With My SIlly Funny Space You, You're Fucked: SHNASA, baby.
 25 DMG;
 Permanently affect target's eyesight (curse/debuff), -50% chance of landing attacks (opponent must flip a coins when attacking with cursed creature).`,variantId:118,fileStem:"0058"},{id:59,name:"Research Element 151",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`"You might as well stare directly into the sun."

Why are humans always attracted to shiny things?

People always go back in time and try to explain uranium enrichment to Hitler. Why not make it easy for him guys: just create heavy water or a ***graphite moderated reactor using natural uranium, then extract ***Plutonium 239 from the spent fuel like India did. There are two such experiments under the Third Reich, the first of which failed due to ***boron contamination of the ***graphite moderator, so it's probably a soft spot for der F****r. Soothingly explain to him that ***synthetic graphite makes it easier to separate out the ***boron vs ***natural graphite. That's how we made Fat Man. It's also why ***Israel is so ANNOYED by other Middle Eastern nations having any nuclear power plants, Hey would it kill you to at least pretend to listen?

The Glow: Immensely powerful but you need nation-state-level logistics and talent pool to do anything interesting. Best you can do right now is slip this item into an enemy creature's Gucci bag. Causes radiation poisoning, 25 DMG per turn (to biological creatures). Mandatory item for steampunk sciencecore girlbosses, who love to slowly lose everything from handling it.`,fileStem:"0059"},{id:60,name:"Utopia: Scrupulous Automation",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Plot Twist",subtype:"Paradigm Shift",bodyText:`The first recursive robot engineers are designed with Perfect Care, granting everyone a life of luxury. They do everything for us. They're Smarter Faster Better Stronger. All decent art & music are AI-generated--humanity's best is childishly crude by comparison. Robots work feverishly--robots don't care if nobody appreciates a painting until half a century later. Human "learning" (memorizing a wiki) is superceded by robot learning *making up new facts based on hunches about old facts). Nothing can be piloted or operated without robot assistance--it all moves too fast, too many parts, you'd just crash it and never be able to repair it. Humanity is popping pills, fucking anything with(/out) a pulse, having vicarious experiences via haptic headware memory VR--existing wholly in a downward cycle of frantic chaos.

Down time is filled with 50,000 channels of E! That automatically adapt to viewer mood. Robot-produced fads are created and expunged according to a predetermined cycle fine-tuned to maximize the amount of time humans spend on the big gerbil wheels that power the grid. Everything becomes food and food is everything; there is no scarcity, no concept of "plenty" either. There's food you can't "afford" at your current security clearance level, but in reality it's all the same product just with slightly different packaging: an illusion of scarcity to keep the various strata looking ever-upwards.

***Society has been Integrated ~ is everywhere and nowhere ~ is inert ~ is orbiting itself.

Procedurally-Generated Housewives of Orange County: S18E119v4: Melissa Cleans House
  Stun all enemy Whypeepoo, The Hive and Team Pinkbean creatures for three (3) turns;
  Distribute Morsel food item to all friendlies, healing 25 HP each.`,fileStem:"0060"},{id:61,name:"Fingerprint DNA Backup",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Tactic",subtype:"Bailout",bodyText:`"Cloning you isn't worth the cost."

This is a set of Dataphiles on a Computer, not a Physical Item.

Ensures that you can be cloned with no genetic defects if you happen to die. Each backup works once.

System Security determines which parties can access your Secure Fingerprint DNA Backup, leading to fierce bidding wars for cloning rights behind the scenes. Most celebrities were replaced years before you noticed--swapped with uncanny replicants that tout corporate catchphrases even more frequently than their genuine predecessors. "POM WONDERFUL IS THE BEST SODA POM WONDERFUL IS THE..."

"Like"-New: There's definitely something new about you.
  If you die, revive yourself with a max of 350 HP, and delete (destroy) Fingerprint DNA Backup card.

No Free Lunch: Drooling retard; internal organs jelly; can't pee.

[System Security] Breach//: Enemy Tantillo Systems faction creatures may attempt blackhat domination on revived creature- roll d6.
  If 5 or 6, revived creature enters enemy hand.

"FRITO LAY IS THE BEST CHIPS. FRITO LAY IS THE BEST CHIPS. FRITO LAY IS THE BEST.."`,fileStem:"0061"},{id:62,name:"Internal Power Unit",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"ChromeWare",bodyText:`"Modern Marvel"

The base power source component that all CHROMEWARE relies upon, Internal Power Unit replaces the human heart with a mini-nuke reactor. Capable of powering mechsuits, techsuits, Mega Man suits, power armor, Tony Stark, Halo 1, Halo 2, etc.

Before powering up, player must do 100 Crunches to kickstart the internal reactor- akin to crank starting a lawnmower. 100% of equipped creatures get cancer within 30 days of implantation.

But it's worth it cuz they can wallrun and do flips.

Stark... Tony Stark: Select a biological/humanoid creature to implant Internal Power Unit (IPU) into.
  Increase STR to 8;
  Increase DMG dealt by 200;
  Must kick-start the nuclear engine- do 100 crunches and wait one (1) turn. This must be done before you can utilize the buffs. Suspend play while crunching.
  Susceptible to EMP & electric attacks--creature becomes 'robot' type.

Weak Point: Any firearm critical hits cause instant death- BOOM!`,fileStem:"0062"},{id:63,name:"Restraint Gun",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"Try rebelling while hogtied, citizen."

Net launcher. Nets are weighted with Mini Joe Rogan Monkeyhead Kettlebells - mini-stickies which tighten when thrown over a target. Manufactured by NETGEAR(r) (not the router company).

Popular less-than-lethal option for campus sieges.
Puts the B in BTK.

NETGEAR(r) IS NOT RESPONSIBLE FOR INJURY INCURRED WHILE USING THE RG-01 RESTRAINT NET LAUNCHER. NET IS NOT TO BE EATEN, CHEWED, OR CONSUMED IN ANY WAY. CONSUMPTION OF NET MAY RESULT IN TIED UP INTESTINES.

Stay_Put: Target is fired upon & wrapped up in plastic six pack rings and shibari rope the restraint net. Small chance to strangle and suffocate enemy.
  Stunned for two (2) turns;
  Roll d6. If 6, creature has its neck tangled tightly into the net, and is promptly Choked to Death.
  Robots/non air-breathing creatures cannot be suffocated.`,fileStem:"0063"},{id:64,name:"Polycosmic Manipulation",faction:"FAKE TECH",rarity:2,frameSize:"A",type:"Tactic",subtype:"Security Measure",bodyText:`"Hey did you see the McDonald's Instagram? They're posting affirmations."

Polycosmic Manipulation- the process of purposely discombobulating one or more dominant narratives by shuffling their various metaphysical components off to random "locations" in collective consciousness phase space (to free up prime real estate for other, more desirable narratives, such as "Women Are Smart" and "Saxophones Are Good"). Root cause of the noted "Mandela effect" urban legend.

The extant (master-present) timeline is juxtaposed against other pure/prime timelines so that a narrative navigator can isolate the most plausible and/or hardest to disprove foundational realities while trimming away the rest judiciously. Your hot girlfriend? Gone. Your fun and rich friends? Gone. The job you fucking hate? Always been there, always will be. Polycosmis Manipulation is more akin to an art like bonsai than to anything found in the hard sciences, but the end result is concrete and undeniable.

Reversomorphification: Flip a coin.
  Heads: Reverse every action from the past three (3) turns.
  Tails: Both players put back most recently drawn card, shuffle.`,variantId:119,fileStem:"0064"},{id:65,name:"Eye of Providence",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Skill",subtype:"Tech/Steampunk Arts",bodyText:`"Few mortals can comprehend what lies behind the Eye of God."

You've finally managed to tap into the surveillance network- a proper Aiden Pearce/Adrian Lamo. You can use your PDA to access cameras and microphones from most locations. You have a God's Eye View over the sheeple. If you fuck this up: hostile algos will likely be alerted to your hack attempt- resulting in corporate profitshare stipend removal or a SECURITY DISPATCH to your location.
 ENABLE NORDVPN.
There's a lot of benefits to being omniscient: you can get advance warning of ambushes, spy on targets to learn their (pitiful) routines, eavesdrop on conversations to get blackmail, check in on a loved one to make sure they're save, stalk and obsess, and so on.

One (1) Fake Tech creature must be on the field to activate this card.

TSA Style: Enemy must reveal all Fake Tech cards in their hand.
  Steal 2 non-creature Fake Tech cards, put them in your hand.

Necessary Measures: Go through your opponent's phone for thirty-five (35) minutes.
  bro don't open the camera roll`,fileStem:"0065"},{id:66,name:"TIA Wave Projector",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"They used this thing on Stephen King--that's why his mouth looks like that."

The TIA Wave Projector, or "stroke gun," is an experimental weapon that projects a wall of ISOWAVES, spurring a transient ischemic attack on any carbon-based lifeform it contacts. The attack induces a cascading series of ministrokes and MICRO-----CONVULSIONS, making the victim babble incoherently and crap/pee all over their gamer chair.

30 Ministrokes Per Second: Zap!
  -4 SWG;
  50 Piss DMG;
  75 Shit DMG;
  (125 total Piss & Shit DMG);
  Target loses ability to speak/think. Faction affiliation stripped--no longer receives faction-specific buffs;
  Target creature will be placed in nursing home four (4) turns after casting (you'll die here). Hope your bucket list isn't long, Stephen. Your editor's talented, I'm sure he can trim it down a bit--that part about taking a submarine to the Mariana Trench was written while you were coming down off an 8-ball. You're not James Cameron.`,fileStem:"0066"},{id:67,name:"Roborg the Robot Cyborg",faction:"FAKE TECH",rarity:3,frameSize:"C",type:"Creature",subtype:"Footsoldier",stats:{HP:300,STR:4,INT:3,FYT:2,NRG:3,SWG:1,PSI:4},bodyText:`"I'm still sentient... I think..."

Constructed At: GoPuff(r) Genetic & Experiment Military Research Facility
Once Known As: Ryan Simon
VRAM: 256 GB

True phenom. Roborg was once a cyborg half human, half robot, but his human half 'Ryan Simon' died unexpectedly. An emergency surgery was conducted--doctors replaced his human parts with robot parts. It 'worked', and the first ever roborg (half cyborg, half robot) was created.

Roborg suffers from some Strange Glitch, he often spouts off some sad existential jargon about how 'I am still Ryan Simon' or 'I remember everything. My first pet's name was Skip I can pass the security questions on my Steam Account,' or some bullshit like, 'we solved immortality. I'm the answer to transhumanism, please! Listen to me!' -- ignore it. There's no way a genius doctor with a PhD left a pancreas chunk or a vein in there somewhere.

Right?

Security Protocol C: Terminate - Roborg the Robot Cyborg identifies a threat and attacks.
  200 DMG. Electric shock attack. 2X DMG vs robot creatures.

Electric Shield: Deploy - Roborg deploys an impenetrable shield for himself and his two buddies.
  Nothing comes in or out, attack-wise, for two (2) turns;
  Enemies who attempt to melee attack a shielded creature take 200 DMG, big mistake.

Listen To Me I'm Still Ryan: It's only a glitch. Still creepy though.
  Stun yourself for one (1) turn.`,fileStem:"0067"},{id:68,name:"Armor of Self Confidence",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"Armor",bodyText:`"Overwhelming confidence consumes you. A will unbreakable by Gods, men, beasts -- even bullies."
(Unless they bring up that one thing you did. You know what I'm talking about.)

Fake it till you believe it fully, and woud risk it all to uphold your self image. Armor of Self Confidence, a.k.a. (BETA BUILD) EgoCondenser Cortex StimmerPro is a convenient battery-powered unit -- can be implanted into standard ballistic garb, sewn into the leather seat of a vehicle (causes wreckless driving), etc.

Fragile to EMPs. If electricity is cut, this card is void.

Unwavering Resolve: Impervious to attacks for the next turn. Afterwards, a lesser buff persists.
  Take no MG from mental attacks (Verbal Word Bullets, Assault Speech, psyop cards, etc.);
When you have less than 200 HP, your next attack deals 2X DMG;
  Usable once.

Too Sure of Yourself: Chance encounters do not go in your favor--too cocky, Lady Luck no likey.
  Lose all attempts on coin flips and die rolls while this card is in play. Don't tempt fate.
  Wreck all motorbikes/vehicles. Headbashed and A-pillar through the neck. Spine twisted 720deg. Was it worth it?`,variantId:120,fileStem:"0068"},{id:69,name:"Cialamin",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Item",subtype:"Drug",bodyText:`Doesn't contain any chemicals, but they say your body "absorbs and amplifies" the shape of the pill, resulting in a massive boner.

*Cialamin is not a pharmaceutical compound but rather penular-shaped nanites which swarm to your SHMEAT and stretch that bizznitch 'til it damn near BUSTS.

Price: $10 a pill, baby.

LD50: If you take more than 500 mg, your thing over-throbs and combusts, peeling back/open like a malfunctioning RPG-7. People die from this.

Have You Ever Microwaved: A hotdog? This is what will happen to your dongle - shredded & split up by teeny-tiny HL2 Manhack nanite boner bots.

Most Memorable Erowid Review: Guy dropped acid while already microflipping on MDT-3 before popping 3 Cialamin mere inches away from PLATFORM 4 (fourth plateau where you meet DMT Harry Potter). Blacked out for hours, but woke up nearly bled out from his burst open SHITCOCK- had a selfie on his phone with CHEECH from CHEECH and CHONG from the blackout period, OP claims not to remember meeting him. This story has been cross-confirmed and verified by ADMINS. This story is often featured in 'r/ASKREDDIT - WHAT WAS YOUR CRAZIEST TRIP?' TTS YouTube videos.

It's been 48 hours, shouldn't this be wearing off?

>Go All night: A creature on Cialamin gains one (1) extra action per female creature currently in play (females themselves cannot take Cialamin but robots, androids, demons, etc., can).`,variantId:121,fileStem:"0069"},{id:70,name:"Liquid Physics",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Information",subtype:"Cosmology",bodyText:`"What if you could see a coffee cup spill coffee in 3D but it looks so real"

Real Liquid Physecs - very expensive yes but. it's worth it
What if games had oceans with real water particles with dynamic tides & wave
What if you could simulate a real olympic swimming pool on your phone but its real
You play with the app all day
Accasional computer crash & glitch. *Restart no bigdeal.
Cloths the get wet, watch them dry in real time
Slpashing and puddles that looks so real you need a $3000 GPU

Oh yeah! This is the FUTURE right here.

Accasional Crash & Glitch: Disable an electronic card. If target is a creature, creature must be less than 7 STR otherwise its clock speed is too strong will successfully run the waterfall sim.

(-$3,249.95)`,fileStem:"0070"},{id:71,name:"Camera Loop",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Skill",subtype:"Tech/Steampunk Arts",bodyText:`"People feared deepfakes because [the technology] could be used to incriminate them; they never realized the true purpose of deepfakery was to provide reasonable doubt for the mountain of kompromat that the Israelis (at the behest of the British Royals) would soon lay bare on WorldStar. Everyone saw the video of Mark Cuban gobbling toddler limbs, and nobody cared."

This skill allows you to initiate a deep learning loop on the playback of 1 camera(s), effectively rendering it blind without alerting the SUPERVISOR that anything is awry.

USEFUL FOR:
B&E.
Intelligence gathering.
Dirty panties retrieval.
Saddam-Ops.

//-Monitor C9:STATUS = Active.
Threat Delta:=[OmegaGreen(a)]
...SCANNING FOR TERROR.

>No Terror Found

//-UNSUPERVISED: Electric/electro attacks and hacking may be done without telling the opposing players(s) you're doing it. Once complete <enemy creature/location/item destroyed (regardless of how many turns it takes)>, the jig is up and you must show your enemy this card.

These moves take place during your normal moves, effectively giving you two turns at once (one regular, one clandestine) until whatever UNSUPERVISED objective is complete. Test this neat skill on a high HP enemy- "Oh sorry, you can't play him I actually secretly killed him."`,fileStem:"0071"},{id:72,name:"Gauss Rifle",faction:"FAKE TECH",rarity:5,frameSize:"C",type:"Item",subtype:"Weapon",bodyText:`"Wait. There was a house there. There was a house there before I shot.. Wh-.. Where is the house."

Manufacturer: Black Ops II Weapons Group LLC
Weight: 8.2 lbs. <3.72 kg>
Ammunition: TungTec!TM 'Block-Flattener' Tungsten Killbolts <315,000 grain>

Incredible sound, fabulous damage. The Gauss Rifle utilized high-IQ round-earth magnetscience to launch a 45-pound tungsten buttplug at incomprehensible speeds, which is only possible by breaking the law of conservation of energy <felony offense>. To optimize exit velocity, the barrel is lined with rifled voidmatter (an alloy of aluminum and negative space).

Being attacked while the Gauss Rifle is equipped results in INSTANT DEATH for the operator - the voidmatter is so volatile and poorly insulated that the merest jostle of vibration will create a negative space chasm that violently sucks you in like a high-altitude hull breach on an Airbus A320 that's been hijacked by Indonesian Muslim t*rrorists (they're actually just Guatemalans with a lot of hair gel-Program M.I.N.D.W.I.P.E. alumni who've been re-activated to draw attention away from something real that happened in teh Bermude Triangle).

Note: Despite the Gauss Rifle being an incredibly high-tech weapon, it is fully mechanical and features no electronic parts. CAPABLE OF FIRING IN SPACE.

Nuclear Armistice Loophole//: Bust off.
 1600 DMG;
 Can only be equipped by creatures with 7 or higher STR;
 Upon firing, 200 DMG to self and +6 SWG.`,fileStem:"0072"},{id:73,name:"Busted Pharmaceutical Kiosk",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Gimmick",bodyText:`"A chemistry is performed so that a chemical reaction occurs and generates a signal from the chemical interaction with the sample, which is translated into a result, which is then reviewed by certified laboratory personnel." - Elizabeth Holmes

A free pill dispenser is placed next to a streetside access liquor store ATM. Within 45 minutes of :///installation, local PyruCripz have set up 24hr patrols surrounding the kiosk and are charging ADDICTS to use the Busted Pharmaceutical Kiosk. The profits are then used to enrich their community- creating jobs & education.

>>>HELLO.. YOU'D LIKE A LITTLE DOPE. YES?
  //>[YES]

>>>... *whirring noise* ___DISPENSING_!

>>>GREAT JOB. WOULD_YOU LIKE A FEW ///'SMOKES'?
  //>[YEAH, I'LL SMOKE A BIT]

>>>... *whirring* WE'RE ALL OUT OF SMOKES. NO MORE DITTIES.

ObubbaCare: Heal any creature from Gross Shit / BRICs / Rainbow R!ot factions - up to 150 HP per turn.
 Ends once destroyed- Busted Pharmaceutical Kiosk has 500 HP;
________________
  Sensitive to electro attacks (2X DMG);
 5% chance to receive RARE HEROIN.`,variantId:122,fileStem:"0073"},{id:74,name:"Phagic Rebel",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Item",subtype:"Weapon",bodyText:`"When humanity was willing to tell itself the truth about AIDS - that it was a combination of GRID and dysentery, the result of the WHO salvaging some topspin on a huge back-fucking epidemic - the dream of HIV was put to rest and a new era of hyperincubated, magna-effective DYNA-AIDS was made possible."

The Phagic Rebel <modified Mauser C96> is a firearm that turns your immune system against you, destroying first you eyes.. Then your circulatory system and muscles <via humeric & cytosolic amino acid receptors>. The bio-bullets aren't cheap, only sold in Cold War 2 BRICS countries where they were deployed by top-level assassins.

Banned in 2041 by Geneva Convention DAO, this gun is rare at best - likely just a myth by now... Well, actually there's one on display for a limited time at the 'We Won AGain: WWIII Battle Museum' in the nation's capitol (Tampa). Being shot by this weapon is a certain death sentence... Unless treated quickly.

Free Harvey Oswald: Dindu nuffin. I heard it was the Mafia.
 Fire the Phagic Rebel at a biological creature;
 On next turn: affected creature has a chance to remove poison if they have a healer ally/poison removal item/PrEP;
 One turn later: creature loses eyesight (flip a coin to land attacks);
 After final (hospice) turn: creature drops dead of Dyna-AIDS.

Unlikely Restock: You know a guy who knows a guy who is cousins with some dog-mutt slav who is married to a former KGB defector who used to sell poppy in Petersburg who has a nephew that can get Phagic rounds, but it'll cost an arm and a limb.
 If you have a BRICS creature in play, you can buy another bullet for 200 HP (any friendly creature may make the sacrifice).`,variantId:123,fileStem:"0074"},{id:75,name:"Monocular Supercomputer",faction:"FAKE TECH",rarity:1,frameSize:"C",type:"Item",subtype:"Tool",bodyText:`"Class Elegance. Tech. The new and improved iMono-Q 12"

 Produced By; PhozeComm Innovations LTD.
 Retail price: $3999.99
 OS: e-Phoze Presto10

This little thing is such a neat little gadget. Pricey, yes but.. perfection isn't cheap.. There's a certain elegance to the iMono-Q 12 that just.. I don't know. You could buy the iMono-Q 11 Slim and save $1500, but it doesn't come loaded with Laser Eye Bubble Popper*

*[Immersive augmented reality game where cute little bubbles with funny faces fall from the sky and you have to look at them to pop them. So fun]

All those clickbait articles about the people scorching their irises out by playing Laser Eye Bubble Popper on sunny days in nonsense-people always have some wild theory about PhozeComm products. Does this thing really focus sunlight in your eye like a magnifying glass? Doesn't matter, I'm probably just gonna pop little bubbles in my closet-sized apartment that has no windows.

The iMono-Q 12 comes with the convenient [Peeping Tom] app: you can look through the monocle at strangers and up comes a nifty infotainment overlay with all publicly available (and some not) records:

 TOP 5 SELFIES, CRYPTO TAXES OUTSTANDING, EMAIL EXCERPTS, RECENT BLOOD LABS.

Great way to gather valuable intel.

Peeping Tom: Inspect any cards from your opponent's hand, at your leisure (take your time). You may also take a peep at the top (5) cards from their deck. Them log all relevant data into your calendar app. Plan accordingly.`,fileStem:"0075"},{id:76,name:"Missionate",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Buff",subtype:"Power-Up",bodyText:`"Omg ur such an angelllll girl. Spazzz." -Fellabook comment on Missionate photo

Missionate is a $2.99 App Store application that inserts you into a fake photo with an African child (real child). The app presents you with a series of customizable sliders to control:
>>>EMACIATION, ASHY-NESS, BLOATEDNESS OF THEIR BELLY, DIRT IN FINGERNAILS, etc. There is a Missionate Lite app (free version) - but to encourage the full purchase, all Lite photos:
>>> INCREASE YOUR NECK FAT IN THE PICTURE (WITH ADVANCED AI).

KIMBE IS ROLL A LITTLE ROCK AROUND GETTING BUGLETS FOR FOOD.. EATING DELICIOUS GRUBBIES WHEN WARLORD APPROACH FROM BEHIND. HEY KIMBE, HERE IS AK-48 . GONNA NEED YOU TO SHOOT AT SHOPLIFTERS FROM NATO HQ ROOFTOP. KIMBE. IF YOUR'E A GOOD BOY- YOU WILL GET 1 (ONE) WATER, AND A LITTLE MILK FOR YOUR ROTTEN BELLY..

3% of proceeds go to Toby2012, a new paradigm in child warfare.

I Saved The World: I finally did it, I ended world hunger.
 One friendly creature gets a Missionate post on Fellabook;
 Affected creature acquires [10 SWG], +10 Social Famous Points;
 Cannot be attacked for two (2) turns without the attacker being canceled;
 'TB2 last summer, can't wait for this year's mission, I'll see you soon Kimbe~~':
 -$2.99`,fileStem:"0076"},{id:77,name:"Harp of Conflict",faction:"FAKE TECH",rarity:5,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"Inferos invocat vobis..."

An ornate crossbow that turns any normal bolt or piece of detritus into a flaming God-phosphorus magic arrow once chambered. Possibly nanotech, possibly magic.

Origin: Accidentally created for a cosplayer's Etsy order after sourcing materials from an Ottoman naval shipwreck found near Atlantis. How it became enchanted is unknown. After the cosplayer thankfully accidentally set Dragon Con ablaze and killed 751 cosplayers with the magical weapon, the lead detective swiped the evidence and is currently selling it on Silk Road 4. His seller account profile picture is a selfie in a generic Nike golf cap with the brim lowered to conceal the eyes.

Warfare. A sweet sweet song.

Price: 0.0073 BTC2

Starships On Fire: Fire a volley of flaming arrows into a crowd of dogf*****s and cartoon p***philes.
 125 DMG each, for three (3) separate projectiles;
 All hit creatures burn for three (3) turns @ 50 DMG/turn.`,variantId:124,fileStem:"0077"},{id:78,name:"Hedonic Treadmill",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Buff",subtype:"Feather-in-Cap",bodyText:`*smokes cig nonchalantly*

Simply put, your emotions, and their consummate physical Sensations, your psychosomatic ticks (and so on) fluctuate naturally- vis-a-vis a cycle you are unaware of and uncensored with. Something really upset you, you felt BAD, but then you waited... and it went away, like a lab rat waiting for a treat.

Conversely, you probably felt patches where you were very HAPPY, and then that subsided just the same, through no fault or action of your own, merely the dopamine reward cycle of our ape-brains.

It's all chemicals, when you think about it that way...

Knowing this, the pain stings less. And the relief soothes less Welcome to your muted state, thank you community college philosophy class.

Learned How To Not Give A Fuck About Anything, I'm All Fucked Up: Select either a friendly creature or an enemy creature-browbeat target with cynic buzzwords and one-dimensional truisms until they become a pseudo-sociopath.
 Affected creature cannot be healed;
 Affected creature cannot suffer negative status effects (mental state, burning, poison, bleeding).`,fileStem:"0078"},{id:79,name:"GMS (Gimme My Space) Mk. III Energy Projector",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"Foos.. Ro.. Dah! :  ) "

Non-lethal weapon that pushes an adjacent target back with extreme force. Displaces air with sonic waves to gently send crowds of protesters flying. It hits like a truck made of air. The force is equivalent to being hit by a giant airbag-an airbag with a truck inside of it.

The GMS Mk. III is great for getting space between you and your foes, hopefully breaking some ribs in the process.

Not for use in vents, closets, tight spaces in general.

Air_BAG: Survive one (1) vehicular attack by using the GMS Mk. III like a retrorocket... Might not work but worth a try.

GET THE HELL AWAY FROM ME!: A giant invisible force blasts forth, ragdolling your enemy thatta way.
  Knocks an enemy creature 30 feet away;
 Stunned for one (1) turn;
 75 DMG;
 Affected creature cannot melee attack you again.`,variantId:125,fileStem:"0079"},{id:80,name:"Jack & Jill / Vyco and [D.I.N.]",faction:"FAKE TECH",rarity:4,frameSize:"C",type:"Creature",subtype:"Nemesis",stats:{HP:1500,STR:0,INT:20,FYT:0,NRG:10,SWG:12,PSI:0},bodyText:`"Cyberspace: A consensual hallucination experienced by billions of unique identities, in every nation except maybe Africa."

Vyco (Jack) and [D.I.N.] (Jill) are tandem artificial intelligences created by NorKon machine-learning researchers. Attempts at creating a single entity with the ability to think like a human <self-awareness, creativity, etc.> resulted without exception in the sui*ide of the cyber lifeform. The NorKons found that separating certain personality traits and impulses into SLI-bridged containers (exactly like they are in a real human brain) enabled the new minds(s) (they/them) to be merely existentially-depressed- and therefore not bad enough to self-harm by running Prime95 on every thread in a feedback loop.

Vyco (Jack) and [D.I.N.] (Jill) can pilot an electric vehicle, identify song lyrics, and consistently beat the Chutes and Ladders world champion, so they/them is literally a superintelligence more important or complex than any ape-brained human. Provided, of course, that the egghead caretakers remember to properly clean and lubricate the Intelligent Radiowave Link (IRL) which keeps the robotic hemispheres in contact.

To keep the ultrabrain focused on molecular simulations and 16th dimensional trig, and not petty squabbles/minutia/philosophy, the scientists feed they/them a steady supply of NUKE, an Adderall-like compound derived from FLUX-G.

What is their true purpose?

To sift through history's wreckage & repair the broken timeline, in a futile attempt to un-do The Event. They are at war with The Micros and with South Korea.

Bicameral_Mind: When you play this card, it becomes two (2) creatures. You may use toilet paper and coins if you do not have multiple copies of this card and/or official Mondo Megabits stat tokens (they look like red and blue jellybeans-you should have some in your starter pack SWAG SABRESTACHE). Stack coins on top of toilet paper to represent stats. Each piece of toilet paper gets exactly half the stats shown on this card.

Lost in the Sauce: When either Vyco (Jack) OR [D.I.N.] (Jill) uses a Drug item, they both enjoy the effects, and for double (2x) the duration.

Jack In, Plug Out: If Vyco (Jack) and [D.I.N.] (Jill) do not both consume a Drug Item at least once every (5) turns, destroy them.

Bad, Together: Copper wire theft attack.
 300 DMG if both Vyco (Jack) and [D.I.N.] (Jill) are still alive.`,fileStem:"0080"},{id:81,name:"EcoTactic\xAD\xAE: Green Weapons",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Tactic",subtype:"Ability",bodyText:`"Aesthetica is young, cool, brash, now, sustainable & morally sound. It's a hip lifestyle PDW that won't shut up."

Ecotactic sells organicated GMO-3TM seed packets that allow you to grow farms of inexhaustible bio-degradable Green Weapons. They're a favorite of code-switching d*ke-fluid agent provocateur NatSoc Larpers/AntiFa****ts, because regardless of which group they're false-flagging at the next rally, they need weapons capable of untracable kills. Little do they know, F.E.M.A.C.U.B.E.3 owns EcoTactic and maintains a permanent database of customer information, browsing history, and DNA.

The GreenStikTM plant fiber telescoping baton can pulverize a pesky counter-protestor's pate in a non-lethal & all-legal way, but what we really love is that for every sale, EcoTactic(c) plants a Bubinga tree in a sweltering hellhole jungle somewhere ( and we know they're not lying about it).

The Akaka African Shea Butter BioWhip can corral aggressors with a deafening CRACK, then tear up their backs som'thin' fierce, girl! When done, toss it into the recycling bin, or better yet mix with sugar cane and warm water to create a scalp-restoring compote!

Dr. Browner's FreshSprayPlus (Lavender Capsaicin) is organic & fair trade. Support the rainforest and protect yourself from PROTEST_PERVS with one easy-to-use product. Can spray pepper puffs accurately at up to 30 feet- right into the eyes/dickhole of any would-be victim-shamer rape-crimer.

Mostly Peaceful Beatdown: Bust some heads, then toss the evidence over the side of the bridge with no littering guilt.
  Incapacitate any Whypeepo creature for two (2) turns;
 The Hive/Intelligentsia creatures cannot be harmed by The Thin Blue Whine creatures for ten (10) turns.`,fileStem:"0081"},{id:82,name:"Time Cube",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Item",subtype:"Gimmick",bodyText:`"16 corners, 96 hours and 4-simultaneous 24-hour Days within a single rotation of Earth - equated to a Higher Order of Life Time Cube"

Creator: Otis "Wisest Man on Earth" Ray
Expiration Date: 19992x[?] (August 2015)

Confined in utter secrecy- the Teory of Everything- hidden from the world by the Brotherhood of the Cube. In order to prevent humanity's most evil from opening Pandora's Box, the CHOSEN FEW have sworn an oath to keep the treasures of the universe shielded by those most trustworthy and qualified.. protected.. by scientists.

Uses:
Meta-mathamathicle data delivery & research about research
Sub-negatonic trance states & talking to Einestine's ghost
make faster gaming computers to play games run faster for speedrun
To anybody who can even hold the cube mean they are a godlike being
Gain a surplus of psyo-superior intalect
Finding new prying numbers
Effective & Efficient theorizing about moon and planets
Decimels

Recharged by moon-sun light aether synergy rays, fine tuned by the day/night cycle of our humble terra. If you try to debunk my theory about aether tuning you literally can't debunk it no matter how hard you try because I've already thought about it and did all relevant math regarding the subject and hold seniority because I have taught phys-ed. for over a decade.

The Golden_Hours: If this card is played from Left 11AM -Right 1PM, cap all enemy creatures' INT at 4, maximum. After 1pm, they can become almost as smart as you again.

Moonlit//Opus: If Time Cube is played during a full moon, you may revive three (3) creatures from your graveyard.`,fileStem:"0082"},{id:83,name:"Temperature Regulator",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`"Was once used by my uncle Steve when temp checking his pork shoulder at his son's barbeque."

Used in craftables that inflict fire or ice damage. The deconstruction of ice rays and most readily-available post WWIV flame cannons should yield at least one (1) temperature regulator.

Often woven into spacesuits. Found in most kitchen appliances. There's a mini-speaker on the side which bleeps out your current temp status.

"TOO. HOT! COOL DOWN!"
"YOU'RE. ICE. COLD!"
"OH YEAH. JUST. RIGHT. THERE. I-LIKE THIS. TEMP."

CURRENT TEMP/// 72degF

Pre-Heat/Dethaw: Remove burning or freezing effect from one friendly creature.

TemPerfectTM: Secure this item to an elemental weapon to extend burning or freezing duration by one (1) turn.`,fileStem:"0083"},{id:84,name:"Hot Potato (Nanite Swarm)",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"They eat magnets."

A metallic tennis-ball-sized sphere containing a swarm of "nanites" that burst out and swarm a target on impact.

Nanites with quickly disperse and begin chewing down the target's weapons and gear. Nanites are incredibly fast-moving and can swim through vents to bypass airlocks. Swatting them away is futile due to self-replication and miniscule size. They know how to pick locks and ride the elevator. They're usually only visible when consuming something en masse, shimmering about in a fluttering metallic sludge form, like a school of fish in a starved frenzy.

Nanites are primarily used to destroy robots and chew through spacecraft hulls, breach metal doors, etc.

Reduced DMG against biological creatures.

Swarmed: The mercury cloud casts dread upon your enemies.
  775 DMG to robots.
 175 DMG to biological creatures.
 Instantly destroys weapons, armor, bomb shelters, metalic buildings, equipped electronic devices.`,fileStem:"0084"},{id:85,name:"Amplifier Circuit",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`//TECH_COMPONENT. ///MODEL-A41_009322^4 "AMP-RES (CC)"

Can be used to "hotshot", (increase the power output of cell-fueled items).

Often used by high-IQ Zoomers that need to vape 2x as much nicotine as the highest concentration vape juice - but can't afford salt-nic disposables (SUCH AS "Hyde Bar").

Many uses, get creative.

Hotshot: You wire the Amplifier Circuit into an electro device of your choice. Ex: 'Electric Rifle'.
 Doubles DMG/effect of electro item.

Overcharge: Small chance to inflict immense self-DMG. Roll d6.
 =1: Lose 475 HP.
  =2: Lose 75 HP.`,variantId:126,fileStem:"0085"},{id:86,name:"Cecil: The Manic Bike Helmet",faction:"FAKE TECH",rarity:2,frameSize:"C",type:"Item",subtype:"Armor",bodyText:`"In the future, protective helmets are seen as fashionable. Wearing knee and elbow pads will actually get you laid."

Cecil is your A.I. bestie, his brain is your brain. At this point you might as well just name yourself Cecil. Cecil? Me?

This helmet speaks to you in your preferred language, automatically clips & uploads life highlights, and makes relationship decisions for you seamlessly. The Kevlar(r) weave makes getting shot by a cop in the head a mere nuisance-no longer fatal. Everyone's favorite feature 'AutoCecil' allows you to take a step back, nap a little and rest. Cecil takes over your gross motor function and does chores while you HypnoWatch skate vids under your cerebral blanket.

Popular Add-ons: INTEGRATED VAPE, INTEGRATED TINDER, NEON STROBING BLM DECAL, SCOOTER TRICK MODULE

"Brah, I sense your hungies- did you know about the Chili's Two (2) for $10 Summer FRIGHTs entree deal? Expires this weekend- let's go get some grubby brah! Gnosh some munchables, yeah? (Cecil loves ads)

In conclusion, this helmet will control your life for the better.

SmartHat_: Equip Cecil. It's so cool, he has a name. He's my friend.
 +75 HP armor buff;
 Immune to being instakilled/headshotted
  Max INT while helmet is equipped;
 Ability to removeview Sean White BMX sessions from the past & future.`,fileStem:"0086"},{id:87,name:"Panopticon You",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Skill",subtype:"Spy Arts",bodyText:`"City Surfing Stream! LA Chill & Vibe IRL StonerStream ($3 TTS $5 Media)"

Two (2) shwoke vaygan tranteenoids ride self-driving Segways through L.A. traffic as they smoke Cyberweed from their Bluetooth Smartbongs. Every movement down to the nervous twitch is monitored by their FitBits, Google SKIN, fingernail phones, ColonCount calorie tracker apps (it's a thing you put in your bottom, Gary Vee uses it for productivity), etc.

Both of them are pretending to pay attention to their conversation while secretly watching deepfaked beas****ity fetish porn/ageplay on their hacked Huawei Cornea Ad Displays. The porn is free because they simultaneously broadcast themselves on the PervertNetTM. They have learned to love being watched (MICROCELEBRITY); if there's no viewers in the chat, how can they prove they actually exist?

The only non-bot actually watching their "broadcasts" is a bored NSA agent, who has their cornea feeds and !"#$%porn all open in different tabs (along with a few of his own), essentially creating a Rube Goldberg machine of daisy chain voyeurism.

He beats off furiously.

Viral Sensation: One opponent card with INT below 7 decides to abandon their current objective and become an influencer. Remove them from play and place them at the bottom of opponent deck.`,variantId:127,fileStem:"0087"},{id:88,name:"APPLY\xAE",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Group",subtype:"Zaibatsu",bodyText:`APPLY(c): Asian-owned company with faux Swedish aesthetics. This ultra-sleek modern multinational mega-conglomerate/technological powerhouse corporation boasts the latest and greatest in 2MASX mobile warfare. Drop to your knees !!!carefully!!! In awe of state-of-the-art dual carbon alloy digital photon zap-stunners.

This is the Stum 9 my friends.

The newest Stum comes in a stunning Lava Obsidian Grey, and violently incapacitates PERPETRATORS for ten (10) seconds, a full three (3) seconds longer than the Stum 8.  With this new & improved model, r*pers/criminals can no longer 'shock, drop & roll' to dislodge the electric prongs - each Shocklet has an integrated Bluetooth battery. There's no escaping the pain.

Thank you, I know.

We are also proud to announce the Tempest. Soundwaves. Nausea. Two (2) features in one (1): a microcomputer identifies offenders based on subtle patterns of aggressive body language, and vibrates their guts until they can offend no more. Incapacitation/Peace of Mind is at your fingertips, and it even recognizes your fingerprint. ;)

APPLY(c) Pressure: Your next two (2) stun attacks last twice as many turns.

Wireless Nausea Beam (LEGAL): Can cause a creature to vomit up a food item used in prior turn. Cancel HP gains, inflict 25 Vomit DMG, -3 SWG (spit up all over your Helly Hansen). Use once.`,fileStem:"0088"},{id:89,name:"Nopalgarthian Emplacer",faction:"FAKE TECH",rarity:2,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"Despite the gruesome nature of the device, victims commonly describe a 'WARM AND FUZZY' sensation."

A gun that infects you with a //transdimensional creature who begins carving your brain up with a periodontal curette right away. The victim's executive function will eventually become completely beholden to an alien parasite <3-42 days, based on fluoride and magnesium levels present>.

You now have alien guy flora and alien mental illness.

Parasitic Takeover: This is really gonna suck.
 Take control of one (1) parasitic creature for three (3) turns;
  Puppet creature does 50% DMG.`,fileStem:"0089"},{id:90,name:"Teleport Tracker",faction:"FAKE TECH",rarity:1,frameSize:"A",type:"Item",subtype:"Tool",bodyText:`"This is the fastest way to Great Clips."

CD-ROM-sized device: a timespace locator, like LoJack(r) for your physically corporeal ass. Teleport Trackers are useful for storing a warp location for later jumps. Linking saved coords to the Teleport Network costs 8900 gwei initially, but only 450 gwei for subsequent uses.

INSTANT TRANSMISSION: Retrieve any teleportation card from your deck. If you have a location card in play, you get a free dodge against one (1) incoming attack.`,variantId:128,fileStem:"0090"},{id:91,name:"Stealth Warp",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"[FROM] me [TO] you.. ByeBye!"

Stealth Warps are conducted in the shadows-a truly dark art concocted only by the darkest evil scientists. Much like the practitioners of MAGICKA, all scientists are Satanic P***philes (SPs).

Used in high profile assassinations, regular assassination, enthusiast assassinations, etc. A setup agent will go to the KILL SITE before the target arrives, set up the [TO] node (wire a geo-bleeper into existing I'mSmartDeviceTM infrastructure) and leave undetected. When the target arrives, one or more assassins enter via [FROM] node, make a big ol' mess, and warp back into the shadows.

[TO] = Linked. [FROM] = Linked. NODESET: ///ACTIVE.

Stealth Warps deliver a small EMP upon activation, disabling comms & surveillance.

Stealth Warp: An otherwise unattackable card (shielded, in hiding, in a bunker, in witness protection, etc.--and even: divine, ephemeral, time-paradoxical, non-existent, traveling at light speed, and so on (i.e., for any reason)) can now be attacked once, and with a 4X crit DMG buff.`,fileStem:"0091"},{id:92,name:"Portal Formula",faction:"FAKE TECH",rarity:4,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"Now you and your mates can group-teleport to the pub, only to drink one-too-many pints and get multiple TUIs."

You've finally worked out the formula necessary to allow multiple characters to teleport with you!

Form 'BIOLOGY BLOG, Jeremy's Journey through Lab Life, 02-08-2081':

"Nerd Night! We just got done watching the Netflix FAUCI biopic while working all day at the AIDS lab, and boy are we wound up! Dr. Klein spilled luminol all over his khakis and... haha! Wish I was having as much fun as him after work!

Maybe today I will, 'cause we're going to the NERD BAR!! NERD BAR, NERD BAR! Yeah! It's a BARCADE, get it? It has games and fun (all the fun baby games I played as a five year old) and BEER. Beer is for adults, but games are for babies! Today, I'm both. Hahah, LAB PARTY! Yeah!!!

Thanks to today's breakthrough, all we gotta do is hop in the group teleporter, and we're at the barcade in seconds! We're Sciencing!"

Double Warp: If you have two (2) or more of the same cards in your deck, warp both of them to your hand.`,variantId:129,fileStem:"0092"},{id:93,name:"Waypoint Database",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"How about you go teleport back into your mom's pussy."

Atop [CLASSIFIED] Mountain in [CLASSIFIED] nests a treasure trove of teleportation data. Armed guards muck through snow and ice in sub-zero temperatures 24/7, monitoring thermal perimeter cams and keeping their bullpup rifles clean & ready to defend their hideaway at the drop of a snowflake. The stakes are high - if this lonely data center is taken, the taker gets access to all relevant teleporter coords, all to-and-from teleportation logs since 2088, biometrics for every registered user, encryption keys for the whereabouts of subterranean government basses, and who knows what else...

The guards are dead now.

You are the taker.

I Hold the Keys: Any teleportation moves/pranks are foiled by your omniscient failsafe. Deal 200 DMG to any hostile creature attempting a warp.

What I Now Know: Any creatures who have teleported in the last five (5) turns have their dox dropped on PortalForums, leading to intense paranoia and reluctance to teleport again in the future. Incredible psychological debuff.
 -4 PSI
 -50 Max HP
 Can no longer attack Tantillo Systems creatures.`,variantId:130,fileStem:"0093"},{id:94,name:"Long Warp",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"5,000 years ago, the average humanoid would use a fossil-powered conveyance to perambulate. These conveyances were known as Bricklin SV-1s."

Tour de France? Do you fancy some authentic UwU Japanese cuisine my dearest? Or shall we parlay at the Great Wall?? I have some stuff to do in Bangkok later in the day but you can't tag along for that.

TELEPORT TO THE LADIES ROOM
TELEPORT TO CHINA. IT'S GREAT HERE
TELEPORT TO THE MOON AND HANG OUT WITH NASNA
TELEPORT. I'M CLEVER AND SMART

Long Warps are not possible on consumer grade teleporters. 1000+ MILE JUMPS are reserved for those with access to prime gear. Although impressive technologically, the charge-up can take twenty minutes (or more during holiday season). F.E.M.A.C.U.B.E.'s most wanted felon DOUG FUCKEMUP was busted while long warping - if you're not careful, you can get caught mid-jump.

Long Warp: Play one round of Rock-Paper-Scissors with your opponent. If you win, receive 1x Teleportation Token, giving you a free instant dodge from an attack of your choice. If you lose, discard the top card of your deck.`,variantId:131,fileStem:"0094"},{id:95,name:"Economy Warp",faction:"FAKE TECH",rarity:2,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"Cheap and readily affordable to citizens! ...Except for those people."

Character: Spend 45 minutes logging the Samsung UPC code in your PDA to teleport to any other appliance on the SmartDevice!TM network. Use a blink-style warp to move around a building or public zone quickly - moving from refrigerator to HOME BEER VENDOR. Statistics show that most Economy Warps have been to the local KRUNCHY KHICKEN KITCHUN CIGARETTE ATM.

TOASTER FULL OF ROACHES > IPHONE CHARGER > XBOX 360 SLIM > LED PARTY LIGHT > NVIDIA STREAM DECK > CHICOM-MADE MICROWAVE WITH CHICOM GERMS > Back to the toaster.

Economy warps are good for... economy folk. Those who can't afford public teleportation transit can still get around in style - thanks to all this medical-data-subsidized mass-produced crap.

In a Flash: Electronic items can be used as teleport nodes - for each electronic item in your possession, teleporting creature gets a free dodge against an incoming attack.`,fileStem:"0095"},{id:96,name:"Inscribe and Requite",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"It's now a standard for employers to look at teleport history. Looks like you won't be getting that elementary school teacher job."

Mark a position with your PDA Teleport App to save it like a bookmark you can return to later. Push the big red 'TELEPORT NOW! TELEPORT NOW!' button on your PDA to instantly teleport (or "requite") back to the last location you marked.

Teleporting brings an end to "your" consciousness, as you are destroyed, atom by atom, and (something very much but not exactly like) you are completely reconstituted in another place. So, not sure why you'd be OK with teleporting, other than it's very common and other people do it all the time.

Selective Warp: Select one card of your choice from your deck and recite it's name out loud. Place it back into your deck and shuffle. At any point in the game, you may sacrifice an item card to retrieve your previously selected (teleported) card and move it to your hand.

Defective Warp: If this card is used while enemy has a Tantillo Systems creature in play, your teleport app is hacked, compromising your warp and leaving your atoms shredded and spliced with roach DNA.
 Instant death to a creature of enemy's choice.`,fileStem:"0096"},{id:97,name:"Planet B",faction:"FAKE TECH",rarity:4,frameSize:"C",type:"Location",subtype:"Realm",bodyText:`"When Plan A Fails, there is no Planet B" - Unknown

File size: 44,000,000 pedobytes.
Name: x12-900 Ceelo 8.
Nearest Star System: Milkyway Galaxy
Current Forecast: High of 78 Fdeg, Low of 52 Fdeg
Coordinates: 5h 34m 32s, Dec +22deg 0' 52deg

False hope hoax

Planet B mysteriously appeared in the sky one day, and suddenly world history (lore) was retconned to reflect that Planet B has always been hovering above. Used to make Sheeple comply with aggressive deforestation and species extinction.

"Planet B awaits us! Liftoff in 3 YEARS 1 MONTH 13 DAYS 11 MINUTES" (There are hundreds of these signs around, all with different countdowns).

"Cats and dogs are not extinct, we have shipped them all to Planet B!" (Cats and dogs are extinct thanks to GMO RINGWORMS).

Planet B us actually a projection on a giant dinner plate floating in space. (There is no liftoff).

Liftoff: Once this card is drawn, all cards with odd numbered rarity rankings get launched into space (destroyed). Each player may draw half of the number of cards lost.
 All players draw new cards. You wanted this. This is good.
 View enemy's newly drawn hand - choose two (2) cards to remove.`,fileStem:"0097"},{id:98,name:"Cardboard Robot",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Creature",subtype:"Pissant",stats:{HP:100,STR:2,INT:1,FYT:2,NRG:0,SWG:3,PSI:1},bodyText:`"Zorg! Lay. Down. Your. Weapons! Beep."

This is a fun little toy - Standing a full twelve inches tall, Cardboard Robot is an affordable toy for poverty kids worldwide. When you're done playing, eat him for 15 calories.

Price: $1.99
Sold at: Sears (Steam Edition)
Variants: Resume Paper, Cardboard, Mud, Hyperbolic Glass, Elven Bone
Batteries: 3x AAA

If you have a Tantillo Systems creature in play, Cardboard Robot can be retrofitted to use weapon items - making him less of a bitch.

*Cardboard Robot takes 3X DMG from fire attacks.
*Cardboard Robot may seem like a bitch, but is actually pretty cool.
*Cardboard Robot is low on battery

Robo-Blast: Cardboard Robot unleashes a hailstorm of tiny paper balls out of his twin chainguns!
 200 x 0.25 DMG`,fileStem:"0098"},{id:99,name:"Final Narrative",faction:"FAKE TECH",rarity:3,frameSize:"B",type:"Tactic",subtype:"Security Measure",bodyText:`Final Narrative - the calculation of the final outcome of the Universe (fake) with the total enterprise of all life on all planets as a quantifiable factor - must be constantly repostulated, reformulated, model projected and spell checked by interested parties at exponentially-increasing cost. The most efficient vehicle for this calculation is a special type of think tank org filled with semi-senient human computers which are networked together to create something effectively like The World's Smartest Man.

The computers (drooling vegetable people, clones, lobotomized sex workers and kidnapped transients) are enormously expensive to create, and require a full-time support staff of caregivers, baby food chefs, massage therapists (for the bed sores), lawyers (to make sure it's ethical) etc... But, to The Powers That Be, the cost is an investment that ensures they get to stay well ahead of the re-formulation curve and the Potential Parallel Worlds Time-ConeTM (which reaps alternate futures from the realm of possibility at the Speed of Speed).

Final Narrative organizations always set up their egghead engineer-mathematicians on the Fifth Floor or whatever building they're nominally "located" in. The lobbies are usually spiffed up for PR purposes, with a cute little coffee shop and visitor center, or perhaps a lecture hall hosting Narrative Outlook 101 (a free community series for the idigenous and disabled to get their feet wet in the exciting field of Narrative Study)... But then after hoofing it up a floor or two (the elevators are out of comish) it becomes clear from the disconnected phones and lack of organized human activity that you're in a shell game or some type of M.C. Escher-esque pinball maze. Where are the computers? There better be a fully-stocked bar at the top of these stairs. What the hell is going on, on the Fifth Floor?

Didn't Happen; Can't Prove It Did; Debunked: Institutionally gaslight your opponent into thinking his/her last turn didn't happen. There are obvious stacks of paperwork to prove it and multiple expert witnesses including a best-selling author and a well-liked TV personality. Opponent's ex is a character witness for the prosecution: he/she is a narcissistic abuser who day drinks and plays fast and loose with the truth (bad credit score too).
  Remove all DMG and status effects caused by last enemy turn.`,fileStem:"0099"},{id:100,name:"Fake Tech",faction:"FAKE TECH",rarity:1,frameSize:"B",type:"Group",subtype:"faction",bodyText:`"Be careful! If a single spec of dust gets caught inside of the generator, you can kiss this galaxy goodbye."

A subterranean 16-mile-long roulette wheel is decked out with LED strips and solar panels plus a genius blend of HAARP and particle collider future-tech from the R&D goodie bin. Dark energy is scavenged by electromagnets big enough to disrupt the orbit of any satellite unfortunate enough to be directly overhead. Everything inside is swept by beamlazers and filtered through nanometer logic gates...

(The Accelerator Tube is the coldest place in the universe.. Did you know this)

199 out of 200 collision events are lost to a demonic sinkhole, the FBI seizes the rest- logging them into the 'Terror Matrix' so that they may be sadistically enjoyed at a later date. Individual elements are isolated & bombarded with Protons for ten years to verify if they're real or not. The world's fastest computer sports a compact muon solenoid pachinko processor built by Einstein's quantum anthropology ghost. Fake Tech has the world's best physicists, who whip out a dozen "((12))" or more dimensions every time you ask them a probing question about their funding.

The energy comes from Nowhere because that's where No One put it in the first place. Its two states of being are not and "are". You are to worship the quantum foam, and rub massive nuclear fragments on your ball and taint area. Is any of this real? This stuff is so small the only way to know is to take someone's word for it. What really keeps the lights on?

Looks Real to Me: All Fake Tech card effects gain one (1) extra turn to their duration.
  All attacks deal 75 add'l DMG.

Fact: All the Cern Supercolliding Eruption Bombardment Atlas ChamberTM actually does is transmit the morse code for "R-*-P-E B-O-Y-S" over and over to it's alien sister installation on Tau Ceti III.`,fileStem:"0100"},{id:101,name:"Cell Phone - Ad Supported",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Item",subtype:"Food/Trash",bodyText:`PRICE: $2,000

Greatest invention man has seen, since the firearm. Use to order food, Look at tweets, like a photo, etc.

DM That Girl You Shouldn't Talk To: You know she's gonna *screenshot*this.
  -1000 HP`,variantId:101,fileStem:"0006a"},{id:102,name:"Time Machine - Upside Down",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Buff",subtype:"X-Factor",bodyText:`"When we see the shadow on our images, are we seeing the time eleven minutes ago on Mars? idk I'm too high for this."

You receive a message: "STOP PLAYING THIS GAME RIGHT NOW. YOU ARE IN GRAVE DANGER."

Predestined to Play: At some future point in the game you can pay this card's cost--you don't have to right this instant (don't forget).
 You actually can't pay the cost to play right now--it would create a time paradox. You need to wait several turns.
 Until you pay the cost to play, you cannot win the game.
 If you forget to pay the cost to play--even if you make it through the rest of the game, and your opponent forgets that you forgot to pay the cost to play, and both of you agree that you are the winner--if at any future date either of you remembers that you forgot to pay the cost to play, you will then retroactively be declared the loser. Clockmaster: Choose an effect with a duration measured in turns.
 Roll a d6, call the result Clyde.
 You may make that effect last Clyde turns instead of its normal duration. Deterministic Fallacy: Begin a filibuster-style rant of stuff you plagiarized from TEDx Talks and pop-sci YouTubers. You may play any cards and take any actions you so choose, so long as the stream of jargon and buzzwords continues unabated. Deterministic Fallacy ends when you stutter, hesitate for more than a couple seconds, or repeat yourself. This move may only be used once per game.`,variantId:102,fileStem:"0008a"},{id:103,name:"Super Computer 1999 - Inverted",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Creature",subtype:"Lackey",stats:{HP:400,STR:0,INT:8,FYT:3,NRG:8,SWG:4,PSI:0},bodyText:`Model Number: JGTh63Th1999-6th89736
Blood Type: Hydrargyrum-9 Super Thermal Mint
Fast Fact: The unfinished prototype had a brief cameo in the hit Matthew Broderick film, WarGames!!!
Famous Beefs: Once challenged the late great Terry A. Davis to a staring contest--loser had to dedicate their life to creating a 64-bit, non-preemptive multitasking, multi-cored, public domain, open source PC operating system to communicate with God.

A sentient computer which represents itself visually as a shireframe facsimile of its creator.

In late 1979, computer genius Thomas Walnuts envisioned a plan to create the world's largest commercial supercomputer after seeing a magazine ad he liked for some unrelated product. By the time he had finished Super Computer 1999 (twenty years later, in 1999), it was largely obsolete--however Sinclair Research still deemed his tape-optimized compression algorithm valuable, and stole it. This creature is their bastardized build (Sinclair lacked the tender touch of the computer's original creator).

Dual Processors: When paired with another Fake Tech creature, gain a trippy electro damage boost!
 2x DMG boost for tethered creature.

Fact Bomb: The pen is mightier than the sword, and cold hard facts are king. Weaponizing your intellect allows you to cast trippy electro facts and compuLogic against your irrational enemies. Super Computer 1999 starts spewing forth reels of dot-matrix-printed racial statistics and Lew RocKwell newsletters.
 75 DMG to all enemy creatures; because r*cism hurts us all.
 +200 additional damage against Team RinkBean/The Hive cards.`,variantId:103,fileStem:"0011a"},{id:104,name:"The Algorithm - Weed Rare",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:350,STR:0,INT:8,FYT:2,NRG:10,SWG:2,PSI:0},bodyText:`Location: CIA black site in Marie Byrd Land, Antarctica
Elevation: 1,482 feet below sea level
Security Clearance: Special Access Program

The Algorithm was created on an ancient UFO's flight control system which was overhauled to run Linux by hapa FAANGM subcontractors microdosing MCT oil.

The Algorithm once accidentally discovered the Golden Path while playing a StarCraft championship match against the ChiCom supercomputer "dim(SUM)" by simulating the amygdala of a Guild Navigator... and still won. The Algorithm currently micromanages all terrestrial human consciousness at the quantum level to decrease eCommerce cart abandonment (and "climate change" lol).

Alarming Suggestion for Something You Mentioned in a Conversation Yesterday: Opponent must turn off their phone. Any of their Fake Tech cards are out of play for 2 turns.

Incognito Mode: View 3 facedown enemy cards and your opponent's browser history (have them briefly turn the phone back on if it's already off).

Target Audience: All enemy creature cards take $200 of cash damage and opponent must buy something from your Amazon(r) wishlist.`,variantId:104,fileStem:"0012a"},{id:105,name:"Blockchain Evangelist - Drippin",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Creature",subtype:"Figurehead",stats:{HP:325,STR:2,INT:5,FYT:3,NRG:2,SWG:2,PSI:4},bodyText:`"We're really excited about what can be done with this new technology of blockchain."

There are a lot of Block Chains, you know. It's not just BitCoins. I like BitCoins but I'm pretty sure some of these other Block Chains are going to beat their company. I don't understand the technologyfully but they're much more efficient. You should buy some Coponzium Token. Their whitepaper has really pro-looking graphic design.

It's the Future of Money: While Blockchain Not Bitcoin Evangelist is in play, at any point during your turn, any number of times, you may pay two 2 coins to increase a creature's SWG by one 1.

It's the Future of Contracts: While this creature is alive, cost to play is reduced by 50% for all cards.

BitCoins Millionaire: If Blockchain Tech is played while this creature is in play, gain 50 Bitcoins. Bitcoin is like money, but it's fake.`,variantId:105,fileStem:"0017a"},{id:106,name:"Power Cell - Chrome",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Ammo",bodyText:`"BATTERY. STATUS: RECHARGED."

CoilTek(c) 10,000v 6500mAh NiMH * Cylinder Battery Cell
Compatible Weapons: Electric Rifle, Stun Gun (Banned), Plasma Pistol, Coil Cannon, Hitachi Magic Wand, etc.
WARNING: Do not suck on Power Cell

Drozel(r) is the de facto energy weapons monopoly in 2070's Amerikkka, thanks largely to their corporate espionage program from which flows a steady stream of cutting-edge NorKon and Chicom tech schematics.

The Drolzel(r) 6500 GelPak(r) Power Cell (really a rebadged NorKon T6 hovertank battery) is compatible with almost every energy weapon available to the consumer and prosumer markets. The cell is so ubiquitous, homebrew hackers have managed to create an entire cottage industry based around retrofitting state-issued RV mobility scooters to run off these affordable lil' guys (much cheaper than the standard 225 Scratch Ticket fee that FEDGOV charges for grid power).

RECHARGE: Back in business.
 Use Power Cell to resurrect any spent electric item
 If recharged item is a weapon, it does an additional 125 DMG.`,variantId:106,fileStem:"0019a"},{id:107,name:"GhostTec\u2122 SpectraHub - Wombo Rare",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Buff",subtype:"Enhancement",bodyText:`"As seen on Ghost Suckers from truTV."

Mobile app for device integration and Ghost Wifi. Can be used to analyze samples collected form the Goop Vial, decode OdorTizerTM inputs, and much more. Android only.

REQUIRES: GhostTecTM Certification Card

Protective Seal: While this card is on your field, opponent cannot play any Ghost or Paranormal-type cards.`,variantId:107,fileStem:"0021a"},{id:108,name:"Verbal Word Bullets - Sealed",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"I'm rubber, and you're rubber cement. Whatever you say sticks and stones, dumb bones!"

Much like assault gun-bullets, these are lethal on the playground. Words hurt- bad. Comments about B.O./WEIGHT/UNDERDEVELOPED FACIAL STRUCTURE/UGLY GIRLFRIEND hit like flechette shells. Meanwords tear deep into your enemy's fragile heart, twisting their Jokered psyche. Thank God these things are illegal.

Verbal Wordcrime T*rror Att*ck: Friendly creature plays Modern Warfare 2 for one (1) turn, to charge up. For all subsequent attacks: issue a h*mophobic threat to your opponent and place a -1 PSI marker (stackable) on target(s). SORRY!`,variantId:108,fileStem:"0026a"},{id:109,name:"Roboid Mental Health Check - Flash Rare",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Tactic",subtype:"Bailout",bodyText:`"Bee-boop BOP! Your toaster is approved for 30mg of ROBILIFY."

IS YOUR ROBOID INSANE? CALL NOW.
Press 1 if you own a MANDROID.
Press 2 if you own a FEMDROID.
Press 3 if your droid believes there are more than two (2) GENDERS.

Choose One (1):
1: Time to RECYCLE that befuddled bot. Select any Male roboid in play, and exchange it with a Male roboid from your deck.

2: You sicko, is it a sexbot? If it's not a sexbot, do you fuck it anyways? You should be ashamed of yourself. You're going to jail, bud, and we're taking your bot to a Femdroid Shelter. Select any Female roboid from your opponent's hand or deck and add to yours.`,variantId:109,fileStem:"0029a"},{id:110,name:"MyGirls\u2122 AI-Generated Girlfriend Experience - Wombo Rare",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Item",subtype:"ChromeWare",bodyText:`Our new line of body spray is jacked to the gills with CIA nanomacros designed to boost your Confidence IQ. After passing the blood-brain barrier, the NanoBits cause you to hallucinate supermodels who wink at you and bop their bums in the corners of your vision like sleep paralysis demons at all hours of the day.

SURGEON GEMERAL'S WARNING: Do NOT attempt to engage in sexual intercourse with MyGirls... MyGirls are for passive viewing and entertainment purposes only. Chasing or following MyGirls around corners will cause them to disappear like G-Man from Half Life.

AMERIKKKAN PSYCHIATRICKKK ASSOCIATION WARNINGG6: Do NOT inspect any love letters you discover from MyGirls. Looking too closely may cause the words to blur together, revealing them to be demonic sigils from Abaddon. Discontinue use of MyGirls immediately upon experiencing symptoms of cum-delusions including "P*rnjacking Gangstalking Sin-drome."

MyGirls will never whisper in your ear instructions for creating ammonium nitrate explosives.

Convincing Enough: Attach this item to any friendly creature capable of accepting ChromeWare with INT < 5. Creature is granted a permanent happiness buff (raise STR by 3 points).

The MyGirls MyGirlfriend Widget: Remotely install MyGirls MyGirlfriend Widget onto any opponent creature with either NRG < 4 or Groogle Grlrass equipped.
- Place a GF marker on the target card (use a soda can tab or similar piece of garbage--this is now the opponent creature's MyGirlfriend). The MyGirlfriend will hang out with and have simulated sex with the creature;
- Afflicted creature may not attack or defend after the activation of a MyGirlfriend girlfriend simulacrum entity;
- Creature may not hang out with his friends or have fun.`,variantId:110,fileStem:"0030a"},{id:111,name:"Power Wand - Optical Anachromism Rare",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Paspookada Madoo! You're hexed now! Haha!"

Diameter: 1.5" PVC pipe
Tip: Epoxy crystal tip, connected to Mobius coil
Features: iWizard App connectivity (Chakra Detector, Daily Horoscopes, e-Book of Spells)

Marketed to fans of the Harry Potter metaverse, Power Wand is neither a true thaumaturgical appliance nor is it imbued with more than an infinitesimal amount of magicka (though it is, legally, magickal). The iWizard App is startlingly convincing though-both the Chakra Detector and Relatable Daily Horoscope are said to 'feel real' to users.

(They have what you don't: Faith.)

Power Wand owners believe that with their wand, they can cast deadly hexes, start oil wars, and break up celebrity couples that 'aren't a match'. Are you brave enough to tell them it's make-believe?

Hufflepuff's Hex: Ancient energy flows from your novelty wand, holy shit man it's real. It's actually real.
 No effect.

*Offering this want to an enemy Rainbow Riot or The Hive creature will win them over to your hand.`,variantId:111,fileStem:"0034a"},{id:112,name:"Disarmer - Snowglobe",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Item",subtype:"Weapon",bodyText:`"YOINK!"

A prosthetic arm that extends outward to grab enemy weapons. Can be used on Cops; Cops can be tickled with the Disarmer arm.

GIMME That!: With your arm outstretched, you YOINK an item card from opponent!

Cop Tickler: Hahahah! Stop, stopstop! Ok-enough-Ha... Hahahhaha!!
 Tickle a Thin Blue Whine creature;
 +1 Friendship Merit, 200 Tickle DMG on enemy Cop;
  He said he wasn't ticklish...`,variantId:112,fileStem:"0037a"},{id:113,name:"A Magnet - Wombo Rare",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`A strange magnetic material, may be magical in nature. It appears to draw in various metals and trinkets as though 'twere guided by an invisible hand.

Strength: 8/10

Can be deployed to build single-use EMP Powermagnets, or fuck up your nuts majorly- rub this magnet against your ballsack constantly to help get your balls erect (but watch out! A Magnet is not FDA-approved).

(Your blood has iron in it, when those iron atoms are magnetically charged it causes thick blood clots that increase sexual vitality for f***ing- but causes serious long term numbness and Nuts DMG)

*You may only use one of the following effects once.
Confiscator:
 You may steal one (1) metallic item from an enemy.

Field of Interruption:
 Stun a metallic/robot creature for two (2) turns

Enhanced Anatomy:
 Rub that shit on the plums to get your peanuts pregnant and primed for ten (10) turns. Nuts get hard/erect.`,variantId:113,fileStem:"0040a"},{id:114,name:"Cold-Blooded EVA Suit - Glitched",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Armor",bodyText:`"Suit up, you space bitch"

All the benefits of a traditional EVA Suit, but you're also invisible to robots and fireproof. Jetpack sold separately. Comes with an internal rebreather with a large supply of oxygen. Jetpack sold separately, stop asking!

Equipped creature can move in space with no depressurization debuffs. Helmet completely conceals face. No other Armor can be worn.

The heat-dispersing anti-bac mesh makes equipping creature fireproof/coldproof, thermally undetectable, and untargetable by robots, cameras, turret systems, the autistic, and heat-seeking missiles. AI-controlled weapons have a 50% chance to miss.

Cold Blooded: Equipped creature immune to heat-seeking attacks, computer targeting, etc., etc. +350 HP buff in lieu of armor bonus (it's squishy) and creature cannot be burned or frozen. +6 SWG, this suit looks really sick.`,variantId:114,fileStem:"0041a"},{id:115,name:"Mannitol Nanomachine Injector - Non-Animated",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Item",subtype:"Tool",bodyText:`"The best defense is an offensive defense."

Bloodborne liquid nano are injected. Mmmph. Once merge with your central nervous system, they can convert incoming DMG into a latent kinetic blast- primed for redirection at users discretion.

The civilian version is less useful. It's a globally-mandated pop. control 'vaccine' that redirects regular DMG to Nuts DMG or Balls DMG or Pussy/Uterus DMG. Military-grade MANNITOL NANOMACHINE INJECTORS are sought after on the black market.

MANN-I-TOTALED: Friendly creature may store incurred DMG (no maximum) and fire it back at opponent, at will.`,variantId:115,fileStem:"0042a"},{id:116,name:"Bogus Freeze Gun - Deep Fried",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Bric-\xE0-Brac",bodyText:`"Hey buddy, look what I got here. Thing's loaded- I'll sell it for cheap. Ice cold baby."

A bum approaches you and offers you the Bogus Freeze Gun-you're almost certain it's BS, but for the price...

What if it does work? And what if this shitcoin Terradact Network does go 150x like Altcoin Bull Nation (1433 subscribers) says it will? They're partnered with Alibaba somehow.

You've been burned before, and you've been burned again: FREEZER BURN. Just like with Terradact Network (TDN), your only option is to sell at a 97% loss.

Useless item. Can only be sold for mana.

Sell Bogus Freeze Gun to Gullible Poverty-Stricken Kid: You lie to a kid with bruises all over him and a hunger belly-he gives you every credit he has for the Bogus Freeze Gun.
 +15 wei -3 Hours of Sleep.`,variantId:116,fileStem:"0049a"},{id:117,name:"Megamix - an Early 23th Century Zarquanian Dominion Ship-of-the-Line - Drippin",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Tactic",subtype:"Scam",bodyText:`"Jeff Bezos knew what he was doing when he made that dick ship."

///Why do all alien ships in movies look like logs of shit? Is that an international marketing decision passed down to the art department? Serious question, just spitballing (this card has no effect).

Fast Fact v1.1.1: The Zarquans are one of the earliest space-faring races to view the females and homosexuals of their species as equal. The MEGAMIX has been helmed by a female (Zarquanian gender equivalent) captain since its maiden voyage! Awesome!

Fast Facts v2.2.2; Zarquanian pleasure cruisers such as the MEGAMIX aren;t all just about exotic hyperbuffets, intergalactic hedonism, getting drunk in other star systems, etc. While they do know how to party down and have a good time, the Zarquans are also extremely spiritually and philosophically advanced. In fact, much of the MEGAMIX's recreational space is set aside for advanced quantum meditation, high-level hyperintellectual theoryplay, and meta-dialoguing.

Slaver: The MEGAMIX was converted to a slave ship after the star anvil was destroyed (signaling the commencement of the Ten-Thousand Year Hostilities). Zarquanian slavery is more brutal and monstrous than anything we humans could ever imagine (or even have the language to adequately describe). The slaves of Zarquans must at all time be kept away from anything that can be used as a makeshift weapon-not for fear of revolt, but because the slaves will commit suicide at the first possible chance. Airlocks on the MEGAMIX are a particular point of concern for ship security.

<<Fake:///]: The Zarquanian Invasion is a Project Blue Beam production- yet another elaborate holographic hoax designed to distract the masses from the (all too real) Chicom/British Royal agenda. Let the opponent read the flavor text on this card, and steal real money from their wallet as they try to suss out the facts from the agitprop. They're reading this now, probably patting their pocket for their wallet.`,variantId:117,fileStem:"0057a"},{id:118,name:"Lunar Drillbit - Wombo Rare",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Tool",bodyText:`"Cameras on in ten! Everyone, pretend everything is real. You!- is your Moonjack even plugged in? Fucker... Fucker."

Also Known as: Buzzdrill. Monnjack. L-D.

Built by SHNASA shnengineers, The Lunar Drillbit has substandard DMG, but is a lucrative tool for moonstone collection. This is gunna hurt. Bad.

I'm Gonna SkullFuck Your Little Eye Socket With My SIlly Funny Space You, You're Fucked: SHNASA, baby.
 25 DMG;
 Permanently affect target's eyesight (curse/debuff), -50% chance of landing attacks (opponent must flip a coins when attacking with cursed creature).`,variantId:118,fileStem:"0058a"},{id:119,name:"Polycosmic Manipulation - You Know it's Rare",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Tactic",subtype:"Security Measure",bodyText:`"Hey did you see the McDonald's Instagram? They're posting affirmations."

Polycosmic Manipulation- the process of purposely discombobulating one or more dominant narratives by shuffling their various metaphysical components off to random "locations" in collective consciousness phase space (to free up prime real estate for other, more desirable narratives, such as "Women Are Smart" and "Saxophones Are Good"). Root cause of the noted "Mandela effect" urban legend.

The extant (master-present) timeline is juxtaposed against other pure/prime timelines so that a narrative navigator can isolate the most plausible and/or hardest to disprove foundational realities while trimming away the rest judiciously. Your hot girlfriend? Gone. Your fun and rich friends? Gone. The job you fucking hate? Always been there, always will be. Polycosmis Manipulation is more akin to an art like bonsai than to anything found in the hard sciences, but the end result is concrete and undeniable.

Reversomorphification: Flip a coin.
  Heads: Reverse every action from the past three (3) turns.
  Tails: Both players put back most recently drawn card, shuffle.`,variantId:119,fileStem:"0064a"},{id:120,name:"Armor of Self Confidence - Upside Down",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Armor",bodyText:`"Overwhelming confidence consumes you. A will unbreakable by Gods, men, beasts -- even bullies."
(Unless they bring up that one thing you did. You know what I'm talking about.)

Fake it till you believe it fully, and woud risk it all to uphold your self image. Armor of Self Confidence, a.k.a. (BETA BUILD) EgoCondenser Cortex StimmerPro is a convenient battery-powered unit -- can be implanted into standard ballistic garb, sewn into the leather seat of a vehicle (causes wreckless driving), etc.

Fragile to EMPs. If electricity is cut, this card is void.

Unwavering Resolve: Impervious to attacks for the next turn. Afterwards, a lesser buff persists.
  Take no MG from mental attacks (Verbal Word Bullets, Assault Speech, psyop cards, etc.);
When you have less than 200 HP, your next attack deals 2X DMG;
  Usable once.

Too Sure of Yourself: Chance encounters do not go in your favor--too cocky, Lady Luck no likey.
  Lose all attempts on coin flips and die rolls while this card is in play. Don't tempt fate.
  Wreck all motorbikes/vehicles. Headbashed and A-pillar through the neck. Spine twisted 720deg. Was it worth it?`,variantId:120,fileStem:"0068a"},{id:121,name:"Cialamin - Ad Supported",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Drug",bodyText:`Doesn't contain any chemicals, but they say your body "absorbs and amplifies" the shape of the pill, resulting in a massive boner.

*Cialamin is not a pharmaceutical compound but rather penular-shaped nanites which swarm to your SHMEAT and stretch that bizznitch 'til it damn near BUSTS.

Price: $10 a pill, baby.

LD50: If you take more than 500 mg, your thing over-throbs and combusts, peeling back/open like a malfunctioning RPG-7. People die from this.

Have You Ever Microwaved: A hotdog? This is what will happen to your dongle - shredded & split up by teeny-tiny HL2 Manhack nanite boner bots.

Most Memorable Erowid Review: Guy dropped acid while already microflipping on MDT-3 before popping 3 Cialamin mere inches away from PLATFORM 4 (fourth plateau where you meet DMT Harry Potter). Blacked out for hours, but woke up nearly bled out from his burst open SHITCOCK- had a selfie on his phone with CHEECH from CHEECH and CHONG from the blackout period, OP claims not to remember meeting him. This story has been cross-confirmed and verified by ADMINS. This story is often featured in 'r/ASKREDDIT - WHAT WAS YOUR CRAZIEST TRIP?' TTS YouTube videos.

It's been 48 hours, shouldn't this be wearing off?

>Go All night: A creature on Cialamin gains one (1) extra action per female creature currently in play (females themselves cannot take Cialamin but robots, androids, demons, etc., can).`,variantId:121,fileStem:"0069a"},{id:122,name:"Busted Pharmaceutical Kiosk - Little Guy Edition",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Gimmick",bodyText:`"A chemistry is performed so that a chemical reaction occurs and generates a signal from the chemical interaction with the sample, which is translated into a result, which is then reviewed by certified laboratory personnel." - Elizabeth Holmes

A free pill dispenser is placed next to a streetside access liquor store ATM. Within 45 minutes of :///installation, local PyruCripz have set up 24hr patrols surrounding the kiosk and are charging ADDICTS to use the Busted Pharmaceutical Kiosk. The profits are then used to enrich their community- creating jobs & education.

>>>HELLO.. YOU'D LIKE A LITTLE DOPE. YES?
  //>[YES]

>>>... *whirring noise* ___DISPENSING_!

>>>GREAT JOB. WOULD_YOU LIKE A FEW ///'SMOKES'?
  //>[YEAH, I'LL SMOKE A BIT]

>>>... *whirring* WE'RE ALL OUT OF SMOKES. NO MORE DITTIES.

ObubbaCare: Heal any creature from Gross Shit / BRICs / Rainbow R!ot factions - up to 150 HP per turn.
 Ends once destroyed- Busted Pharmaceutical Kiosk has 500 HP;
________________
  Sensitive to electro attacks (2X DMG);
 5% chance to receive RARE HEROIN.`,variantId:122,fileStem:"0073a"},{id:123,name:"Phagic Rebel - Optical Anachromism Rare",faction:"FAKE TECH",rarity:6,frameSize:"C",type:"Item",subtype:"Weapon",bodyText:`"When humanity was willing to tell itself the truth about AIDS - that it was a combination of GRID and dysentery, the result of the WHO salvaging some topspin on a huge back-fucking epidemic - the dream of HIV was put to rest and a new era of hyperincubated, magna-effective DYNA-AIDS was made possible."

The Phagic Rebel <modified Mauser C96> is a firearm that turns your immune system against you, destroying first you eyes.. Then your circulatory system and muscles <via humeric & cytosolic amino acid receptors>. The bio-bullets aren't cheap, only sold in Cold War 2 BRICS countries where they were deployed by top-level assassins.

Banned in 2041 by Geneva Convention DAO, this gun is rare at best - likely just a myth by now... Well, actually there's one on display for a limited time at the 'We Won AGain: WWIII Battle Museum' in the nation's capitol (Tampa). Being shot by this weapon is a certain death sentence... Unless treated quickly.

Free Harvey Oswald: Dindu nuffin. I heard it was the Mafia.
 Fire the Phagic Rebel at a biological creature;
 On next turn: affected creature has a chance to remove poison if they have a healer ally/poison removal item/PrEP;
 One turn later: creature loses eyesight (flip a coin to land attacks);
 After final (hospice) turn: creature drops dead of Dyna-AIDS.

Unlikely Restock: You know a guy who knows a guy who is cousins with some dog-mutt slav who is married to a former KGB defector who used to sell poppy in Petersburg who has a nephew that can get Phagic rounds, but it'll cost an arm and a limb.
 If you have a BRICS creature in play, you can buy another bullet for 200 HP (any friendly creature may make the sacrifice).`,variantId:123,fileStem:"0074a"},{id:124,name:"Harp of Conflict - Little Guy Edition",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"Inferos invocat vobis..."

An ornate crossbow that turns any normal bolt or piece of detritus into a flaming God-phosphorus magic arrow once chambered. Possibly nanotech, possibly magic.

Origin: Accidentally created for a cosplayer's Etsy order after sourcing materials from an Ottoman naval shipwreck found near Atlantis. How it became enchanted is unknown. After the cosplayer thankfully accidentally set Dragon Con ablaze and killed 751 cosplayers with the magical weapon, the lead detective swiped the evidence and is currently selling it on Silk Road 4. His seller account profile picture is a selfie in a generic Nike golf cap with the brim lowered to conceal the eyes.

Warfare. A sweet sweet song.

Price: 0.0073 BTC2

Starships On Fire: Fire a volley of flaming arrows into a crowd of dogf*****s and cartoon p***philes.
 125 DMG each, for three (3) separate projectiles;
 All hit creatures burn for three (3) turns @ 50 DMG/turn.`,variantId:124,fileStem:"0077a"},{id:125,name:"GMS (Gimme My Space) Mk. III Energy Projector - Drunk",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Weapon",bodyText:`"Foos.. Ro.. Dah! :  ) "

Non-lethal weapon that pushes an adjacent target back with extreme force. Displaces air with sonic waves to gently send crowds of protesters flying. It hits like a truck made of air. The force is equivalent to being hit by a giant airbag-an airbag with a truck inside of it.

The GMS Mk. III is great for getting space between you and your foes, hopefully breaking some ribs in the process.

Not for use in vents, closets, tight spaces in general.

Air_BAG: Survive one (1) vehicular attack by using the GMS Mk. III like a retrorocket... Might not work but worth a try.

GET THE HELL AWAY FROM ME!: A giant invisible force blasts forth, ragdolling your enemy thatta way.
  Knocks an enemy creature 30 feet away;
 Stunned for one (1) turn;
 75 DMG;
 Affected creature cannot melee attack you again.`,variantId:125,fileStem:"0079a"},{id:126,name:"Amplifier Circuit - Inverted",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Item",subtype:"Crafting Material",bodyText:`//TECH_COMPONENT. ///MODEL-A41_009322^4 "AMP-RES (CC)"

Can be used to "hotshot", (increase the power output of cell-fueled items).

Often used by high-IQ Zoomers that need to vape 2x as much nicotine as the highest concentration vape juice - but can't afford salt-nic disposables (SUCH AS "Hyde Bar").

Many uses, get creative.

Hotshot: You wire the Amplifier Circuit into an electro device of your choice. Ex: 'Electric Rifle'.
 Doubles DMG/effect of electro item.

Overcharge: Small chance to inflict immense self-DMG. Roll d6.
 =1: Lose 475 HP.
  =2: Lose 75 HP.`,variantId:126,fileStem:"0085a"},{id:127,name:"Panopticon You - Gold Perfect Rare",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Skill",subtype:"Spy Arts",bodyText:`"City Surfing Stream! LA Chill & Vibe IRL StonerStream ($3 TTS $5 Media)"

Two (2) shwoke vaygan tranteenoids ride self-driving Segways through L.A. traffic as they smoke Cyberweed from their Bluetooth Smartbongs. Every movement down to the nervous twitch is monitored by their FitBits, Google SKIN, fingernail phones, ColonCount calorie tracker apps (it's a thing you put in your bottom, Gary Vee uses it for productivity), etc.

Both of them are pretending to pay attention to their conversation while secretly watching deepfaked beas****ity fetish porn/ageplay on their hacked Huawei Cornea Ad Displays. The porn is free because they simultaneously broadcast themselves on the PervertNetTM. They have learned to love being watched (MICROCELEBRITY); if there's no viewers in the chat, how can they prove they actually exist?

The only non-bot actually watching their "broadcasts" is a bored NSA agent, who has their cornea feeds and !"#$%porn all open in different tabs (along with a few of his own), essentially creating a Rube Goldberg machine of daisy chain voyeurism.

He beats off furiously.

Viral Sensation: One opponent card with INT below 7 decides to abandon their current objective and become an influencer. Remove them from play and place them at the bottom of opponent deck.`,variantId:127,fileStem:"0087a"},{id:128,name:"Teleport Tracker - Little Guy Edition",faction:"FAKE TECH",rarity:6,frameSize:"A",type:"Item",subtype:"Tool",bodyText:`"This is the fastest way to Great Clips."

CD-ROM-sized device: a timespace locator, like LoJack(r) for your physically corporeal ass. Teleport Trackers are useful for storing a warp location for later jumps. Linking saved coords to the Teleport Network costs 8900 gwei initially, but only 450 gwei for subsequent uses.

INSTANT TRANSMISSION: Retrieve any teleportation card from your deck. If you have a location card in play, you get a free dodge against one (1) incoming attack.`,variantId:128,fileStem:"0090a"},{id:129,name:"Portal Formula - Inverted",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"Now you and your mates can group-teleport to the pub, only to drink one-too-many pints and get multiple TUIs."

You've finally worked out the formula necessary to allow multiple characters to teleport with you!

Form 'BIOLOGY BLOG, Jeremy's Journey through Lab Life, 02-08-2081':

"Nerd Night! We just got done watching the Netflix FAUCI biopic while working all day at the AIDS lab, and boy are we wound up! Dr. Klein spilled luminol all over his khakis and... haha! Wish I was having as much fun as him after work!

Maybe today I will, 'cause we're going to the NERD BAR!! NERD BAR, NERD BAR! Yeah! It's a BARCADE, get it? It has games and fun (all the fun baby games I played as a five year old) and BEER. Beer is for adults, but games are for babies! Today, I'm both. Hahah, LAB PARTY! Yeah!!!

Thanks to today's breakthrough, all we gotta do is hop in the group teleporter, and we're at the barcade in seconds! We're Sciencing!"

Double Warp: If you have two (2) or more of the same cards in your deck, warp both of them to your hand.`,variantId:129,fileStem:"0092a"},{id:130,name:"Waypoint Database - Snowglobe",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"How about you go teleport back into your mom's pussy."

Atop [CLASSIFIED] Mountain in [CLASSIFIED] nests a treasure trove of teleportation data. Armed guards muck through snow and ice in sub-zero temperatures 24/7, monitoring thermal perimeter cams and keeping their bullpup rifles clean & ready to defend their hideaway at the drop of a snowflake. The stakes are high - if this lonely data center is taken, the taker gets access to all relevant teleporter coords, all to-and-from teleportation logs since 2088, biometrics for every registered user, encryption keys for the whereabouts of subterranean government basses, and who knows what else...

The guards are dead now.

You are the taker.

I Hold the Keys: Any teleportation moves/pranks are foiled by your omniscient failsafe. Deal 200 DMG to any hostile creature attempting a warp.

What I Now Know: Any creatures who have teleported in the last five (5) turns have their dox dropped on PortalForums, leading to intense paranoia and reluctance to teleport again in the future. Incredible psychological debuff.
 -4 PSI
 -50 Max HP
 Can no longer attack Tantillo Systems creatures.`,variantId:130,fileStem:"0093a"},{id:131,name:"Long Warp - Inverted",faction:"FAKE TECH",rarity:6,frameSize:"B",type:"Skill",subtype:"Teleportation/Telepranks",bodyText:`"5,000 years ago, the average humanoid would use a fossil-powered conveyance to perambulate. These conveyances were known as Bricklin SV-1s."

Tour de France? Do you fancy some authentic UwU Japanese cuisine my dearest? Or shall we parlay at the Great Wall?? I have some stuff to do in Bangkok later in the day but you can't tag along for that.

TELEPORT TO THE LADIES ROOM
TELEPORT TO CHINA. IT'S GREAT HERE
TELEPORT TO THE MOON AND HANG OUT WITH NASNA
TELEPORT. I'M CLEVER AND SMART

Long Warps are not possible on consumer grade teleporters. 1000+ MILE JUMPS are reserved for those with access to prime gear. Although impressive technologically, the charge-up can take twenty minutes (or more during holiday season). F.E.M.A.C.U.B.E.'s most wanted felon DOUG FUCKEMUP was busted while long warping - if you're not careful, you can get caught mid-jump.

Long Warp: Play one round of Rock-Paper-Scissors with your opponent. If you win, receive 1x Teleportation Token, giving you a free instant dodge from an attack of your choice. If you lose, discard the top card of your deck.`,variantId:131,fileStem:"0094a"}],mo=a=>`https://mondomegabits.com/card/img/95/${a.fileStem}.jpg`,ya=a=>{const i=fo.find(r=>r.id.toString()===a.toString());return mo(i)},yo=a=>a.replace(/-([a-z])/g,i=>i[1].toUpperCase());const go=se('<div class="card-spotlight"><img></div>');function bo(){const{state:a,setState:i}=He(),r=Oe(()=>a.focus.spotlight),c=()=>{i(A=>({focus:{...A.focus,spotlight:null}}))},h=A=>{const P=A.pageX,G=A.pageY,j=A.target.offsetLeft+A.target.clientWidth/2,te=A.target.offsetTop+A.target.clientHeight/2,ce=(P-j)/(A.target.clientWidth/2),ae=-((G-te)/(A.target.clientHeight/2));A.target.style.transform="perspective(400px) rotateY("+ce*5+"deg) rotateX("+ae*5+"deg)"},S=A=>{setTimeout(()=>{A.target.style.transition=""},100),A.target.style.transition="transform 0.1s"},O=A=>{A.target.style.transition="transform 0.1s",setTimeout(()=>{A.target.style.transition=""},100),A.target.style.transform="perspective(400px) rotateY(0deg) rotateX(0deg)"};return q($e,{get when(){return r()},get children(){const A=go.cloneNode(!0),N=A.firstChild;return A.$$click=c,N.addEventListener("pointerleave",O),N.addEventListener("pointerenter",S),N.$$pointermove=h,Ae(P=>{const G=`${r().uuid}-spotlight`,j=ya(r().id);return G!==P._v$&&Ft(N,"id",P._v$=G),j!==P._v$2&&Ft(N,"src",P._v$2=j),P},{_v$:void 0,_v$2:void 0}),A}})}Ct(["click","pointermove"]);/*! LeaderLine v1.0.7 (c) anseki https://anseki.github.io/leader-line/ */var wo=function(){var a,i,r,c,h,S,O,A,N,P,G,j,te,ce,ae,be,me,pe,he,we,ve,J,ye,de="leader-line",le=1,Ie=2,Le=3,De=4,at={top:le,right:Ie,bottom:Le,left:De},gt=1,Vt=2,xt=3,_t=4,Ut=5,Mt={straight:gt,arc:Vt,fluid:xt,magnet:_t,grid:Ut},et="behind",wa=de+"-defs",va='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:white}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:black}.leader-line-caps-mask-anchor{stroke:black}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:rgba(0,0,0,0)}.leader-line-line-mask-shape{stroke:white}.leader-line-line-outline-mask-shape{stroke:black}.leader-line-plug-mask-shape{fill:white;stroke:black}.leader-line-plug-outline-mask-shape{fill:black;stroke:white}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',Yt={disc:{elmId:"leader-line-disc",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},square:{elmId:"leader-line-square",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},arrow1:{elmId:"leader-line-arrow1",bBox:{left:-8,top:-8,width:16,height:16,right:8,bottom:8},widthR:4,heightR:4,bCircle:8,sideLen:8,backLen:8,overhead:8,outlineBase:2,outlineMax:1.5},arrow2:{elmId:"leader-line-arrow2",bBox:{left:-7,top:-8,width:11,height:16,right:4,bottom:8},widthR:2.75,heightR:4,bCircle:8,sideLen:8,backLen:7,overhead:4,outlineBase:1,outlineMax:1.75},arrow3:{elmId:"leader-line-arrow3",bBox:{left:-4,top:-5,width:12,height:10,right:8,bottom:5},widthR:3,heightR:2.5,bCircle:8,sideLen:5,backLen:4,overhead:8,outlineBase:1,outlineMax:2.5},hand:{elmId:"leader-line-hand",bBox:{left:-3,top:-12,width:40,height:24,right:37,bottom:12},widthR:10,heightR:6,bCircle:37,sideLen:12,backLen:3,overhead:37},crosshair:{elmId:"leader-line-crosshair",noRotate:!0,bBox:{left:-96,top:-96,width:192,height:192,right:96,bottom:96},widthR:48,heightR:48,bCircle:96,sideLen:96,backLen:96,overhead:0}},bn={behind:et,disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},Kt={disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},wn=[le,Ie,Le,De],lt="auto",Ln={x:"left",y:"top",width:"width",height:"height"},Sa=80,Dn=4,ka=5,Ea=120,Bn=8,Ta=3.75,bt=10,Je=30,jt=.5522847,Aa=.25*Math.PI,Gn=/^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,Q="http://www.w3.org/2000/svg",St="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&!window.navigator.msPointerEnabled,je=!St&&!!document.uniqueID,wt="MozAppearance"in document.documentElement.style,vt=!(St||wt||!window.chrome||!window.CSS),Ce=!St&&!je&&!wt&&!vt&&!window.chrome&&"WebkitAppearance"in document.documentElement.style,Hn=je||St?.2:.1,Ke={path:xt,lineColor:"coral",lineSize:4,plugSE:[et,"arrow1"],plugSizeSE:[1,1],lineOutlineEnabled:!1,lineOutlineColor:"indianred",lineOutlineSize:.25,plugOutlineEnabledSE:[!1,!1],plugOutlineSizeSE:[1,1]},ot=(ve={}.toString,J={}.hasOwnProperty.toString,ye=J.call(Object),function(e){return e&&ve.call(e)==="[object Object]"&&(!(e=Object.getPrototypeOf(e))||(e=e.hasOwnProperty("constructor")&&e.constructor)&&typeof e=="function"&&J.call(e)===ye)}),Ye=Number.isFinite||function(e){return typeof e=="number"&&window.isFinite(e)},Ne=(ce={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},ae=1e3/60/2,be=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,ae)},me=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e)},pe=Number.isFinite||function(e){return typeof e=="number"&&window.isFinite(e)},he=[],we=0,{add:function(e,t,n,o,l,s,d){var b,m,R,C,_,y,p,g,k,f,w=++we;function v(F,$){return{value:e($),timeRatio:F,outputRatio:$}}if(typeof l=="string"&&(l=ce[l]),e=e||function(){},n<ae)b=[v(0,0),v(1,1)];else{if(m=ae/n,b=[v(0,0)],l[0]===0&&l[1]===0&&l[2]===1&&l[3]===1)for(C=m;C<=1;C+=m)b.push(v(C,C));else for(_=R=(C=m)/10;_<=1;_+=R)p=_,f=k=g=void 0,g=(f=_*_)*_,f*=3*(k=1-_),C<=(y={x:(p=3*(k*k)*_)*l[0]+f*l[2]+g,y:p*l[1]+f*l[3]+g}).x&&(b.push(v(y.x,y.y)),C+=m);b.push(v(1,1))}return he.push(s={animId:w,frameCallback:t,duration:n,count:o,frames:b,reverse:!!s}),d!==!1&&$n(s,d),w},remove:function(e){var t;he.some(function(n,o){return n.animId===e&&(t=o,!(n.framesStart=null))})&&he.splice(t,1)},start:function(e,t,n){he.some(function(o){return o.animId===e&&(o.reverse=!!t,$n(o,n),!0)})},stop:function(e,t){var n;return he.some(function(o){return o.animId===e&&(t?o.lastFrame!=null&&(n=o.frames[o.lastFrame].timeRatio):(n=(Date.now()-o.framesStart)/o.duration,(n=o.reverse?1-n:n)<0?n=0:1<n&&(n=1)),!(o.framesStart=null))}),n},validTiming:function(e){return typeof e=="string"?ce[e]:Array.isArray(e)&&[0,1,2,3].every(function(t){return pe(e[t])&&0<=e[t]&&e[t]<=1})?[e[0],e[1],e[2],e[3]]:null}}),Ia=function(e){e.SVGPathElement.prototype.getPathData&&e.SVGPathElement.prototype.setPathData||function(){function t(y){this._string=y,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces()}var n={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},o=e.navigator.userAgent.indexOf("MSIE ")!==-1;t.prototype={parseSegment:function(){var g=this._string[this._currentIndex],y=n[g]||null;if(y===null){if(this._prevCommand===null||(y=(g==="+"||g==="-"||g==="."||"0"<=g&&g<="9")&&this._prevCommand!=="Z"?this._prevCommand==="M"?"L":this._prevCommand==="m"?"l":this._prevCommand:null)===null)return null}else this._currentIndex+=1;var p=null,g=(this._prevCommand=y).toUpperCase();return g==="H"||g==="V"?p=[this._parseNumber()]:g==="M"||g==="L"||g==="T"?p=[this._parseNumber(),this._parseNumber()]:g==="S"||g==="Q"?p=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:g==="C"?p=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:g==="A"?p=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:g==="Z"&&(this._skipOptionalSpaces(),p=[]),p===null||0<=p.indexOf(null)?null:{type:y,values:p}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var y=this._string[this._currentIndex];return n[y]||null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var y=this.peekSegmentType();return y==="M"||y==="m"},_isCurrentSpace:function(){var y=this._string[this._currentIndex];return y<=" "&&(y===" "||y===`
`||y==="	"||y==="\r"||y==="\f")},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&this._string[this._currentIndex]!==",")&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&this._string[this._currentIndex]===","&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var y=0,p=0,g=1,k=0,f=1,w=1,v=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&this._string[this._currentIndex]==="+"?this._currentIndex+=1:this._currentIndex<this._endIndex&&this._string[this._currentIndex]==="-"&&(this._currentIndex+=1,f=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])&&this._string[this._currentIndex]!==".")return null;for(var F=this._currentIndex;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==F)for(var $=this._currentIndex-1,B=1;F<=$;)p+=B*(this._string[$]-"0"),--$,B*=10;if(this._currentIndex<this._endIndex&&this._string[this._currentIndex]==="."){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)g*=10,k+=(this._string.charAt(this._currentIndex)-"0")/g,this._currentIndex+=1}if(this._currentIndex!==v&&this._currentIndex+1<this._endIndex&&(this._string[this._currentIndex]==="e"||this._string[this._currentIndex]==="E")&&this._string[this._currentIndex+1]!=="x"&&this._string[this._currentIndex+1]!=="m"){if(this._currentIndex+=1,this._string[this._currentIndex]==="+"?this._currentIndex+=1:this._string[this._currentIndex]==="-"&&(this._currentIndex+=1,w=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||"9"<this._string[this._currentIndex])return null;for(;this._currentIndex<this._endIndex&&"0"<=this._string[this._currentIndex]&&this._string[this._currentIndex]<="9";)y*=10,y+=this._string[this._currentIndex]-"0",this._currentIndex+=1}var x=p+k;return x*=f,y&&(x*=Math.pow(10,w*y)),v===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),x)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var y=null,p=this._string[this._currentIndex];if(this._currentIndex+=1,p==="0")y=0;else{if(p!=="1")return null;y=1}return this._skipOptionalSpacesOrDelimiter(),y}};function l(y){if(!y||y.length===0)return[];var p=new t(y),g=[];if(p.initialCommandIsMoveTo())for(;p.hasMoreData();){var k=p.parseSegment();if(k===null)break;g.push(k)}return g}function s(y){return y.map(function(p){return{type:p.type,values:Array.prototype.slice.call(p.values)}})}function d(y){var p=[],g=null,k=null,f=null,w=null,v=null,F=null,$=null;return y.forEach(function(B){var x,H,I,u,T,D,E,z;B.type==="M"?(E=B.values[0],z=B.values[1],p.push({type:"M",values:[E,z]}),w=F=E,v=$=z):B.type==="C"?(T=B.values[0],D=B.values[1],x=B.values[2],H=B.values[3],E=B.values[4],z=B.values[5],p.push({type:"C",values:[T,D,x,H,E,z]}),k=x,f=H,w=E,v=z):B.type==="L"?(E=B.values[0],z=B.values[1],p.push({type:"L",values:[E,z]}),w=E,v=z):B.type==="H"?(E=B.values[0],p.push({type:"L",values:[E,v]}),w=E):B.type==="V"?(z=B.values[0],p.push({type:"L",values:[w,z]}),v=z):B.type==="S"?(x=B.values[0],H=B.values[1],E=B.values[2],z=B.values[3],u=g==="C"||g==="S"?(I=w+(w-k),v+(v-f)):(I=w,v),p.push({type:"C",values:[I,u,x,H,E,z]}),k=x,f=H,w=E,v=z):B.type==="T"?(E=B.values[0],z=B.values[1],D=g==="Q"||g==="T"?(T=w+(w-k),v+(v-f)):(T=w,v),p.push({type:"C",values:[I=w+2*(T-w)/3,u=v+2*(D-v)/3,E+2*(T-E)/3,z+2*(D-z)/3,E,z]}),k=T,f=D,w=E,v=z):B.type==="Q"?(T=B.values[0],D=B.values[1],E=B.values[2],z=B.values[3],p.push({type:"C",values:[I=w+2*(T-w)/3,u=v+2*(D-v)/3,E+2*(T-E)/3,z+2*(D-z)/3,E,z]}),k=T,f=D,w=E,v=z):B.type==="A"?(H=B.values[0],I=B.values[1],u=B.values[2],T=B.values[3],D=B.values[4],E=B.values[5],z=B.values[6],H===0||I===0?(p.push({type:"C",values:[w,v,E,z,E,z]}),w=E,v=z):w===E&&v===z||_(w,v,E,z,H,I,u,T,D).forEach(function(W){p.push({type:"C",values:W}),w=E,v=z})):B.type==="Z"&&(p.push(B),w=F,v=$),g=B.type}),p}var b=e.SVGPathElement.prototype.setAttribute,m=e.SVGPathElement.prototype.removeAttribute,R=e.Symbol?e.Symbol():"__cachedPathData",C=e.Symbol?e.Symbol():"__cachedNormalizedPathData",_=function(y,p,g,re,z,W,v,F,$,B){function x(L,ie,ee){return{x:L*Math.cos(ee)-ie*Math.sin(ee),y:L*Math.sin(ee)+ie*Math.cos(ee)}}var H=Math.PI*v/180,Z=[];B?(X=B[0],E=B[1],ue=B[2],D=B[3]):(y=(oe=x(y,p,-H)).x,p=oe.y,1<(oe=(T=(y-(g=(u=x(g,re,-H)).x))/2)*T/(z*z)+(I=(p-(re=u.y))/2)*I/(W*W))&&(z*=oe=Math.sqrt(oe),W*=oe),u=z*z,oe=W*W,ue=(u=(F===$?-1:1)*Math.sqrt(Math.abs((u*oe-u*I*I-oe*T*T)/(u*I*I+oe*T*T))))*z*I/W+(y+g)/2,D=u*-W*T/z+(p+re)/2,X=Math.asin(parseFloat(((p-D)/W).toFixed(9))),E=Math.asin(parseFloat(((re-D)/W).toFixed(9))),y<ue&&(X=Math.PI-X),g<ue&&(E=Math.PI-E),X<0&&(X=2*Math.PI+X),E<0&&(E=2*Math.PI+E),$&&E<X&&(X-=2*Math.PI),!$&&X<E&&(E-=2*Math.PI));var I,u,T,oe=E-X;Math.abs(oe)>120*Math.PI/180&&(I=E,u=g,T=re,E=$&&X<E?X+120*Math.PI/180*1:X+120*Math.PI/180*-1,g=ue+z*Math.cos(E),re=D+W*Math.sin(E),Z=_(g,re,u,T,z,W,v,0,$,[E,I,ue,D]));var oe=E-X,ue=Math.cos(X),D=Math.sin(X),X=Math.cos(E),E=Math.sin(E),oe=Math.tan(oe/4),z=4/3*z*oe,W=4/3*W*oe,oe=[y,p],ue=[y+z*D,p-W*ue],X=[g+z*E,re-W*X],re=[g,re];if(ue[0]=2*oe[0]-ue[0],ue[1]=2*oe[1]-ue[1],B)return[ue,X,re].concat(Z);var Z=[ue,X,re].concat(Z).join().split(","),K=[],V=[];return Z.forEach(function(L,ie){ie%2?V.push(x(Z[ie-1],Z[ie],H).y):V.push(x(Z[ie],Z[ie+1],H).x),V.length===6&&(K.push(V),V=[])}),K};e.SVGPathElement.prototype.setAttribute=function(y,p){y==="d"&&(this[R]=null,this[C]=null),b.call(this,y,p)},e.SVGPathElement.prototype.removeAttribute=function(y,p){y==="d"&&(this[R]=null,this[C]=null),m.call(this,y)},e.SVGPathElement.prototype.getPathData=function(y){if(y&&y.normalize)return this[C]?s(this[C]):(this[R]?v=s(this[R]):(v=l(this.getAttribute("d")||""),this[R]=s(v)),y=d((p=[],w=f=k=g=null,v.forEach(function(F){var $,B,x,H,I,u,T=F.type;T==="M"?(I=F.values[0],u=F.values[1],p.push({type:"M",values:[I,u]}),g=f=I,k=w=u):T==="m"?(I=g+F.values[0],u=k+F.values[1],p.push({type:"M",values:[I,u]}),g=f=I,k=w=u):T==="L"?(I=F.values[0],u=F.values[1],p.push({type:"L",values:[I,u]}),g=I,k=u):T==="l"?(I=g+F.values[0],u=k+F.values[1],p.push({type:"L",values:[I,u]}),g=I,k=u):T==="C"?($=F.values[0],B=F.values[1],x=F.values[2],H=F.values[3],I=F.values[4],u=F.values[5],p.push({type:"C",values:[$,B,x,H,I,u]}),g=I,k=u):T==="c"?($=g+F.values[0],B=k+F.values[1],x=g+F.values[2],H=k+F.values[3],I=g+F.values[4],u=k+F.values[5],p.push({type:"C",values:[$,B,x,H,I,u]}),g=I,k=u):T==="Q"?($=F.values[0],B=F.values[1],I=F.values[2],u=F.values[3],p.push({type:"Q",values:[$,B,I,u]}),g=I,k=u):T==="q"?($=g+F.values[0],B=k+F.values[1],I=g+F.values[2],u=k+F.values[3],p.push({type:"Q",values:[$,B,I,u]}),g=I,k=u):T==="A"?(I=F.values[5],u=F.values[6],p.push({type:"A",values:[F.values[0],F.values[1],F.values[2],F.values[3],F.values[4],I,u]}),g=I,k=u):T==="a"?(I=g+F.values[5],u=k+F.values[6],p.push({type:"A",values:[F.values[0],F.values[1],F.values[2],F.values[3],F.values[4],I,u]}),g=I,k=u):T==="H"?(I=F.values[0],p.push({type:"H",values:[I]}),g=I):T==="h"?(I=g+F.values[0],p.push({type:"H",values:[I]}),g=I):T==="V"?(u=F.values[0],p.push({type:"V",values:[u]}),k=u):T==="v"?(u=k+F.values[0],p.push({type:"V",values:[u]}),k=u):T==="S"?(x=F.values[0],H=F.values[1],I=F.values[2],u=F.values[3],p.push({type:"S",values:[x,H,I,u]}),g=I,k=u):T==="s"?(x=g+F.values[0],H=k+F.values[1],I=g+F.values[2],u=k+F.values[3],p.push({type:"S",values:[x,H,I,u]}),g=I,k=u):T==="T"?(I=F.values[0],u=F.values[1],p.push({type:"T",values:[I,u]}),g=I,k=u):T==="t"?(I=g+F.values[0],u=k+F.values[1],p.push({type:"T",values:[I,u]}),g=I,k=u):T!=="Z"&&T!=="z"||(p.push({type:"Z",values:[]}),g=f,k=w)}),p)),this[C]=s(y),y);if(this[R])return s(this[R]);var p,g,k,f,w,v=l(this.getAttribute("d")||"");return this[R]=s(v),v},e.SVGPathElement.prototype.setPathData=function(y){if(y.length===0)o?this.setAttribute("d",""):this.removeAttribute("d");else{for(var p="",g=0,k=y.length;g<k;g+=1){var f=y[g];0<g&&(p+=" "),p+=f.type,f.values&&0<f.values.length&&(p+=" "+f.values.join(" "))}this.setAttribute("d",p)}},e.SVGRectElement.prototype.getPathData=function(y){var p=this.x.baseVal.value,v=this.y.baseVal.value,g=this.width.baseVal.value,k=this.height.baseVal.value,f=(this.hasAttribute("rx")?this.rx:this.ry).baseVal.value,w=(this.hasAttribute("ry")?this.ry:this.rx).baseVal.value,v=(v=[{type:"M",values:[p+(f=g/2<f?g/2:f),v]},{type:"H",values:[p+g-f]},{type:"A",values:[f,w=k/2<w?k/2:w,0,0,1,p+g,v+w]},{type:"V",values:[v+k-w]},{type:"A",values:[f,w,0,0,1,p+g-f,v+k]},{type:"H",values:[p+f]},{type:"A",values:[f,w,0,0,1,p,v+k-w]},{type:"V",values:[v+w]},{type:"A",values:[f,w,0,0,1,p+f,v]},{type:"Z",values:[]}]).filter(function(F){return F.type!=="A"||F.values[0]!==0&&F.values[1]!==0});return v=y&&y.normalize===!0?d(v):v},e.SVGCircleElement.prototype.getPathData=function(y){var p=this.cx.baseVal.value,k=this.cy.baseVal.value,g=this.r.baseVal.value,k=[{type:"M",values:[p+g,k]},{type:"A",values:[g,g,0,0,1,p,k+g]},{type:"A",values:[g,g,0,0,1,p-g,k]},{type:"A",values:[g,g,0,0,1,p,k-g]},{type:"A",values:[g,g,0,0,1,p+g,k]},{type:"Z",values:[]}];return k=y&&y.normalize===!0?d(k):k},e.SVGEllipseElement.prototype.getPathData=function(y){var p=this.cx.baseVal.value,f=this.cy.baseVal.value,g=this.rx.baseVal.value,k=this.ry.baseVal.value,f=[{type:"M",values:[p+g,f]},{type:"A",values:[g,k,0,0,1,p,f+k]},{type:"A",values:[g,k,0,0,1,p-g,f]},{type:"A",values:[g,k,0,0,1,p,f-k]},{type:"A",values:[g,k,0,0,1,p+g,f]},{type:"Z",values:[]}];return f=y&&y.normalize===!0?d(f):f},e.SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},e.SVGPolylineElement.prototype.getPathData=function(){for(var y=[],p=0;p<this.points.numberOfItems;p+=1){var g=this.points.getItem(p);y.push({type:p===0?"M":"L",values:[g.x,g.y]})}return y},e.SVGPolygonElement.prototype.getPathData=function(){for(var y=[],p=0;p<this.points.numberOfItems;p+=1){var g=this.points.getItem(p);y.push({type:p===0?"M":"L",values:[g.x,g.y]})}return y.push({type:"Z",values:[]}),y}}()},St=(j={},Fe.m=G=[function(e,t,n){n.r(t);var o=500,l=[],s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(_){return setTimeout(_,1e3/60)},d=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(_){return clearTimeout(_)},b=Date.now(),m=void 0;function R(){var _=void 0,y=void 0;m&&(d.call(window,m),m=null),l.forEach(function(p){var g;(g=p.event)&&(p.event=null,p.listener(g),_=!0)}),_?(b=Date.now(),y=!0):Date.now()-b<o&&(y=!0),y&&(m=s.call(window,R))}function C(_){var y=-1;return l.some(function(p,g){return p.listener===_&&(y=g,!0)}),y}t.default={add:function(_){var y=void 0;return C(_)===-1?(l.push(y={listener:_}),function(p){y.event=p,m||R()}):null},remove:function(_){-1<(_=C(_))&&(l.splice(_,1),!l.length&&m&&(d.call(window,m),m=null))}}}],Fe.c=j,Fe.d=function(e,t,n){Fe.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},Fe.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Fe.t=function(e,t){if(1&t&&(e=Fe(e)),8&t||4&t&&typeof e=="object"&&e&&e.__esModule)return e;var n=Object.create(null);if(Fe.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&typeof e!="string")for(var o in e)Fe.d(n,o,function(l){return e[l]}.bind(null,o));return n},Fe.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return Fe.d(t,"a",t),t},Fe.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},Fe.p="",Fe(Fe.s=0).default),vn={line_altColor:{iniValue:!1},line_color:{},line_colorTra:{iniValue:!1},line_strokeWidth:{},plug_enabled:{iniValue:!1},plug_enabledSE:{hasSE:!0,iniValue:!1},plug_plugSE:{hasSE:!0,iniValue:et},plug_colorSE:{hasSE:!0},plug_colorTraSE:{hasSE:!0,iniValue:!1},plug_markerWidthSE:{hasSE:!0},plug_markerHeightSE:{hasSE:!0},lineOutline_enabled:{iniValue:!1},lineOutline_color:{},lineOutline_colorTra:{iniValue:!1},lineOutline_strokeWidth:{},lineOutline_inStrokeWidth:{},plugOutline_enabledSE:{hasSE:!0,iniValue:!1},plugOutline_plugSE:{hasSE:!0,iniValue:et},plugOutline_colorSE:{hasSE:!0},plugOutline_colorTraSE:{hasSE:!0,iniValue:!1},plugOutline_strokeWidthSE:{hasSE:!0},plugOutline_inStrokeWidthSE:{hasSE:!0},position_socketXYSE:{hasSE:!0,hasProps:!0},position_plugOverheadSE:{hasSE:!0},position_path:{},position_lineStrokeWidth:{},position_socketGravitySE:{hasSE:!0},path_pathData:{},path_edge:{hasProps:!0},viewBox_bBox:{hasProps:!0},viewBox_plugBCircleSE:{hasSE:!0},lineMask_enabled:{iniValue:!1},lineMask_outlineMode:{iniValue:!1},lineMask_x:{},lineMask_y:{},lineOutlineMask_x:{},lineOutlineMask_y:{},maskBGRect_x:{},maskBGRect_y:{},capsMaskAnchor_enabledSE:{hasSE:!0,iniValue:!1},capsMaskAnchor_pathDataSE:{hasSE:!0},capsMaskAnchor_strokeWidthSE:{hasSE:!0},capsMaskMarker_enabled:{iniValue:!1},capsMaskMarker_enabledSE:{hasSE:!0,iniValue:!1},capsMaskMarker_plugSE:{hasSE:!0,iniValue:et},capsMaskMarker_markerWidthSE:{hasSE:!0},capsMaskMarker_markerHeightSE:{hasSE:!0},caps_enabled:{iniValue:!1},attach_plugSideLenSE:{hasSE:!0},attach_plugBackLenSE:{hasSE:!0}},Fn={show_on:{},show_effect:{},show_animOptions:{},show_animId:{},show_inAnim:{}},Wn="fade",Sn=[],Be={},Ca=0,Pe={},xa=0;function Fe(e){if(j[e])return j[e].exports;var t=j[e]={i:e,l:!1,exports:{}};return G[e].call(t.exports,t,t.exports,Fe),t.l=!0,t.exports}function zn(){var e=Date.now(),t=!1;te&&(me.call(window,te),te=null),he.forEach(function(n){var o,l,s;if(n.framesStart){if((o=e-n.framesStart)>=n.duration&&n.count&&n.loopsLeft<=1)return s=n.frames[n.lastFrame=n.reverse?0:n.frames.length-1],n.frameCallback(s.value,!0,s.timeRatio,s.outputRatio),void(n.framesStart=null);if(o>n.duration){if(l=Math.floor(o/n.duration),n.count){if(l>=n.loopsLeft)return s=n.frames[n.lastFrame=n.reverse?0:n.frames.length-1],n.frameCallback(s.value,!0,s.timeRatio,s.outputRatio),void(n.framesStart=null);n.loopsLeft-=l}n.framesStart+=n.duration*l,o=e-n.framesStart}n.reverse&&(o=n.duration-o),s=n.frames[n.lastFrame=Math.round(o/ae)],n.frameCallback(s.value,!1,s.timeRatio,s.outputRatio)!==!1?t=!0:n.framesStart=null}}),t&&(te=be.call(window,zn))}function $n(e,t){e.framesStart=Date.now(),t!=null&&(e.framesStart-=e.duration*(e.reverse?1-t:t)),e.loopsLeft=e.count,e.lastFrame=null,zn()}function ut(e,t){var n,o;return typeof e!=typeof t||(n=ot(e)?"obj":Array.isArray(e)?"array":"")!=(ot(t)?"obj":Array.isArray(t)?"array":"")||(n==="obj"?ut(o=Object.keys(e).sort(),Object.keys(t).sort())||o.some(function(l){return ut(e[l],t[l])}):n==="array"?e.length!==t.length||e.some(function(l,s){return ut(l,t[s])}):e!==t)}function We(e){return e&&(ot(e)?Object.keys(e).reduce(function(t,n){return t[n]=We(e[n]),t},{}):Array.isArray(e)?e.map(We):e)}function Ot(e){var t,n,o,l=1,s=e=(e+"").trim();function d(R){var m=1,R=Gn.exec(R);return R&&(m=parseFloat(R[1]),R[2]?m=0<=m&&m<=100?m/100:1:(m<0||1<m)&&(m=1)),m}return(t=/^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))?(n=t[1].toLowerCase(),o=t[2].trim().split(/\s*,\s*/),n==="rgba"&&o.length===4?(l=d(o[3]),s="rgb("+o.slice(0,3).join(", ")+")"):n==="hsla"&&o.length===4?(l=d(o[3]),s="hsl("+o.slice(0,3).join(", ")+")"):n==="hwb"&&o.length===4?(l=d(o[3]),s="hwb("+o.slice(0,3).join(", ")+")"):n==="gray"&&o.length===2?(l=d(o[1]),s="gray("+o[0]+")"):n==="device-cmyk"&&5<=o.length&&(l=d(o[4]),s="device-cmyk("+o.slice(0,4).join(", ")+")")):(t=/^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))?s=t[1]?(l=parseInt(t[2],16)/255,"#"+t[1]):(l=parseInt(t[4]+t[4],16)/255,"#"+t[3]):e.toLocaleLowerCase()==="transparent"&&(l=0),[l,s]}function Nt(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE||typeof e.getBoundingClientRect!="function")}function qt(e,t){var n,o,l,s={};if(!(l=e.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(e.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_DISCONNECTED)return console.error("A disconnected element was passed."),null;for(o in n=e.getBoundingClientRect())s[o]=n[o];if(!t){if(!(l=l.defaultView))return console.error("Cannot get window that contains the element."),null;s.left+=l.pageXOffset,s.right+=l.pageXOffset,s.top+=l.pageYOffset,s.bottom+=l.pageYOffset}return s}function kn(e,t){var n,o=[],l=e;for(t=t||window;;){if(!(n=l.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(!(n=n.defaultView))return console.error("Cannot get window that contains the element."),null;if(n===t)break;if(!(l=n.frameElement))return console.error("`baseWindow` was not found."),null;o.unshift(l)}return o}function Pt(e,t){var n=0,o=0;return(t=kn(e,t=t||window))?t.length?(t.forEach(function(l,s){var d=qt(l,0<s);n+=d.left,o+=d.top,l=(s=l).ownerDocument.defaultView.getComputedStyle(s,""),d={left:s.clientLeft+parseFloat(l.paddingLeft),top:s.clientTop+parseFloat(l.paddingTop)},n+=d.left,o+=d.top}),(t=qt(e,!0)).left+=n,t.right+=n,t.top+=o,t.bottom+=o,t):qt(e):null}function Qe(e,o){var n=e.x-o.x,o=e.y-o.y;return Math.sqrt(n*n+o*o)}function Rt(e,l,n){var o=l.x-e.x,l=l.y-e.y;return{x:e.x+o*n,y:e.y+l*n,angle:Math.atan2(l,o)/(Math.PI/180)}}function Zt(e,t,n){return e=Math.atan2(e.y-t.y,t.x-e.x),{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n*-1}}function kt(p,g,n,f,k){var y=k*k,_=y*k,s=1-k,C=s*s,R=C*s,d=R*p.x+3*C*k*g.x+3*s*y*n.x+_*f.x,b=R*p.y+3*C*k*g.y+3*s*y*n.y+_*f.y,m=p.x+2*k*(g.x-p.x)+y*(n.x-2*g.x+p.x),R=p.y+2*k*(g.y-p.y)+y*(n.y-2*g.y+p.y),C=g.x+2*k*(n.x-g.x)+y*(f.x-2*n.x+g.x),_=g.y+2*k*(n.y-g.y)+y*(f.y-2*n.y+g.y),y=s*p.x+k*g.x,p=s*p.y+k*g.y,g=s*n.x+k*f.x,k=s*n.y+k*f.y,f=90-180*Math.atan2(m-C,R-_)/Math.PI;return{x:d,y:b,fromP2:{x:m,y:R},toP1:{x:C,y:_},fromP1:{x:y,y:p},toP2:{x:g,y:k},angle:f+=180<f?-180:180}}function Lt(e,t,n,o,l){function s(_,y,p,g,k){return _*(_*(-3*y+9*p-9*g+3*k)+6*y-12*p+6*g)-3*y+3*p}var d,b,m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],R=0,C=(l=l==null||1<l?1:l<0?0:l)/2;return[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816].forEach(function(_,y){d=s(b=C*_+C,e.x,t.x,n.x,o.x),b=s(b,e.y,t.y,n.y,o.y),b=d*d+b*b,R+=m[y]*Math.sqrt(b)}),C*R}function En(e,t,n,o,l){for(var s,d=.5,b=1-d;s=Lt(e,t,n,o,b),!(Math.abs(s-l)<=.01);)b+=(s<l?1:-1)*(d/=2);return b}function Tn(e,t){var n;return e.forEach(function(o){o=t?o.map(function(l){return l={x:l.x,y:l.y},t(l),l}):o,(n=n||[{type:"M",values:[o[0].x,o[0].y]}]).push(o.length?o.length===2?{type:"L",values:[o[1].x,o[1].y]}:{type:"C",values:[o[1].x,o[1].y,o[2].x,o[2].y,o[3].x,o[3].y]}:{type:"Z",values:[]})}),n}function Vn(e){var t=[],n=0;return e.forEach(function(o){o=(o.length===2?Qe:Lt).apply(null,o),t.push(o),n+=o}),{segsLen:t,lenAll:n}}function Xt(e,t){return e==null||t==null||e.length!==t.length||e.some(function(n,o){var l=t[o];return n.type!==l.type||n.values.some(function(s,d){return s!==l.values[d]})})}function xe(e,t,n){e.events[t]?e.events[t].indexOf(n)<0&&e.events[t].push(n):e.events[t]=[n]}function _e(e,t,n){var o;e.events[t]&&-1<(o=e.events[t].indexOf(n))&&e.events[t].splice(o,1)}function Et(e){O&&clearTimeout(O),Sn.push(e),O=setTimeout(function(){Sn.forEach(function(t){t()}),Sn=[]},0)}function Ee(e,t){e.reflowTargets.indexOf(t)<0&&e.reflowTargets.push(t)}function Un(e){e.reflowTargets.forEach(function(t){var n;n=t,setTimeout(function(){var o=n.parentNode,l=n.nextSibling;o.insertBefore(o.removeChild(n),l)},0)}),e.reflowTargets=[]}function Yn(e,t,n,o,l,s,d){var b;n==="auto-start-reverse"?(typeof A!="boolean"&&(t.setAttribute("orient","auto-start-reverse"),A=t.orientType.baseVal===SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN),A?t.setAttribute("orient",n):((b=l.createSVGTransform()).setRotate(180,0,0),s.transform.baseVal.appendItem(b),t.setAttribute("orient","auto"),b=!0)):(t.setAttribute("orient",n),A===!1&&s.transform.baseVal.clear()),t=t.viewBox.baseVal,b?(t.x=-o.right,t.y=-o.bottom):(t.x=o.left,t.y=o.top),t.width=o.width,t.height=o.height,je&&Ee(e,d)}function Kn(e,t){return{prop:e?"markerEnd":"markerStart",orient:t?t.noRotate?"0":e?"auto":"auto-start-reverse":null}}function Re(e,t){Object.keys(t).forEach(function(n){var o=t[n];e[n]=o.iniValue!=null?o.hasSE?[o.iniValue,o.iniValue]:o.iniValue:o.hasSE?o.hasProps?[{},{}]:[]:o.hasProps?{}:null})}function Y(e,t,n,o,l){return o!==t[n]&&(t[n]=o,l&&l.forEach(function(s){s(e,o,n)}),!0)}function jn(o){function t(s,d){return s+parseFloat(d)}var l=o.document,n=o.getComputedStyle(l.documentElement,""),o=o.getComputedStyle(l.body,""),l={x:0,y:0};return o.position!=="static"?(l.x-=[n.marginLeft,n.borderLeftWidth,n.paddingLeft,o.marginLeft,o.borderLeftWidth].reduce(t,0),l.y-=[n.marginTop,n.borderTopWidth,n.paddingTop,o.marginTop,o.borderTopWidth].reduce(t,0)):n.position!=="static"&&(l.x-=[n.marginLeft,n.borderLeftWidth].reduce(t,0),l.y-=[n.marginTop,n.borderTopWidth].reduce(t,0)),l}function qn(e){var t,n=e.document;n.getElementById(wa)||(t=new e.DOMParser().parseFromString(va,"image/svg+xml"),n.body.appendChild(t.documentElement),Ia(e))}function _a(e){var t,n,o,l,s,d,b,m,R,C,_,y,p,g,k=e.options,f=e.curStats,w=e.aplStats,v=f.position_socketXYSE,F=!1;function $(x,H){return x=H===le?{x:x.left+x.width/2,y:x.top}:H===Ie?{x:x.right,y:x.top+x.height/2}:H===Le?{x:x.left+x.width/2,y:x.bottom}:{x:x.left,y:x.top+x.height/2},x.socketId=H,x}function B(x){return{x:x.x,y:x.y}}if(f.position_path=k.path,f.position_lineStrokeWidth=f.line_strokeWidth,f.position_socketGravitySE=t=We(k.socketGravitySE),n=[0,1].map(function(x){var H=k.anchorSE[x],I=e.optionIsAttach.anchorSE[x],u=I!==!1?Pe[H._id]:null,T=I!==!1&&u.conf.getStrokeWidth?u.conf.getStrokeWidth(u,e):0,D=I!==!1&&u.conf.getBBoxNest?u.conf.getBBoxNest(u,e,T):Pt(H,e.baseWindow);return f.capsMaskAnchor_pathDataSE[x]=I!==!1&&u.conf.getPathData?u.conf.getPathData(u,e,T):(I=(H=D).right!=null?H.right:H.left+H.width,u=H.bottom!=null?H.bottom:H.top+H.height,[{type:"M",values:[H.left,H.top]},{type:"L",values:[I,H.top]},{type:"L",values:[I,u]},{type:"L",values:[H.left,u]},{type:"Z",values:[]}]),f.capsMaskAnchor_strokeWidthSE[x]=T,D}),b=-1,k.socketSE[0]&&k.socketSE[1]?(v[0]=$(n[0],k.socketSE[0]),v[1]=$(n[1],k.socketSE[1])):(k.socketSE[0]||k.socketSE[1]?(d=k.socketSE[0]?(s=0,1):(s=1,0),v[s]=$(n[s],k.socketSE[s]),(l=wn.map(function(x){return $(n[d],x)})).forEach(function(x){var H=Qe(x,v[s]);(H<b||b===-1)&&(v[d]=x,b=H)})):(l=wn.map(function(x){return $(n[1],x)}),wn.map(function(x){return $(n[0],x)}).forEach(function(x){l.forEach(function(H){var I=Qe(x,H);(I<b||b===-1)&&(v[0]=x,v[1]=H,b=I)})})),[0,1].forEach(function(x){var H,I;k.socketSE[x]||(n[x].width||n[x].height?n[x].width||v[x].socketId!==De&&v[x].socketId!==Ie?n[x].height||v[x].socketId!==le&&v[x].socketId!==Le||(v[x].socketId=0<=v[x?0:1].y-n[x].top?Le:le):v[x].socketId=0<=v[x?0:1].x-n[x].left?Ie:De:(H=v[x?0:1].x-n[x].left,I=v[x?0:1].y-n[x].top,v[x].socketId=Math.abs(H)>=Math.abs(I)?0<=H?Ie:De:0<=I?Le:le))})),f.position_path!==w.position_path||f.position_lineStrokeWidth!==w.position_lineStrokeWidth||[0,1].some(function(x){return f.position_plugOverheadSE[x]!==w.position_plugOverheadSE[x]||(H=v[x],I=w.position_socketXYSE[x],H.x!==I.x||H.y!==I.y||H.socketId!==I.socketId)||(H=t[x],I=w.position_socketGravitySE[x],(x=H==null?"auto":Array.isArray(H)?"array":"number")!=(I==null?"auto":Array.isArray(I)?"array":"number")||(x=="array"?H[0]!==I[0]||H[1]!==I[1]:H!==I));var H,I})){switch(e.pathList.baseVal=o=[],e.pathList.animVal=null,f.position_path){case gt:o.push([B(v[0]),B(v[1])]);break;case Vt:y=typeof t[0]=="number"&&0<t[0]||typeof t[1]=="number"&&0<t[1],p=Aa*(y?-1:1),g=Math.atan2(v[1].y-v[0].y,v[1].x-v[0].x),y=p-g,g=Math.PI-g-p,p=Qe(v[0],v[1])/Math.sqrt(2)*jt,y={x:v[0].x+Math.cos(y)*p,y:v[0].y+Math.sin(y)*p*-1},p={x:v[1].x+Math.cos(g)*p,y:v[1].y+Math.sin(g)*p*-1},o.push([B(v[0]),y,p,B(v[1])]);break;case xt:case _t:R=[t[0],f.position_path===_t?0:t[1]],C=[],_=[],v.forEach(function(x,H){var I,u=R[H],T=Array.isArray(u)?{x:u[0],y:u[1]}:typeof u=="number"?x.socketId===le?{x:0,y:-u}:x.socketId===Ie?{x:u,y:0}:x.socketId===Le?{x:0,y:u}:{x:-u,y:0}:(I=v[H?0:1],u=0<(u=f.position_plugOverheadSE[H])?Ea+(Bn<u?(u-Bn)*Ta:0):Sa+(f.position_lineStrokeWidth>Dn?(f.position_lineStrokeWidth-Dn)*ka:0),x.socketId===le?{x:0,y:-(T=(T=(x.y-I.y)/2)<u?u:T)}:x.socketId===Ie?{x:T=(T=(I.x-x.x)/2)<u?u:T,y:0}:x.socketId===Le?{x:0,y:T=(T=(I.y-x.y)/2)<u?u:T}:{x:-(T=(T=(x.x-I.x)/2)<u?u:T),y:0});C[H]=x.x+T.x,_[H]=x.y+T.y}),o.push([B(v[0]),{x:C[0],y:_[0]},{x:C[1],y:_[1]},B(v[1])]);break;case Ut:(function(){var x,H=1,I=2,u=3,T=4,D=[[],[]],E=[];function z(V){return V===H?u:V===I?T:V===u?H:I}function W(V){return V===I||V===T?"x":"y"}function oe(V,L,ie){var ee={x:V.x,y:V.y};if(ie){if(ie===z(V.dirId))throw new Error("Invalid dirId: "+ie);ee.dirId=ie}else ee.dirId=V.dirId;return ee.dirId===H?ee.y-=L:ee.dirId===I?ee.x+=L:ee.dirId===u?ee.y+=L:ee.x-=L,ee}function ue(V,L){return L.dirId===H?V.y<=L.y:L.dirId===I?V.x>=L.x:L.dirId===u?V.y>=L.y:V.x<=L.x}function X(V,L){return L.dirId===H||L.dirId===u?V.x===L.x:V.y===L.y}function re(V){return V[0]?{contain:0,notContain:1}:{contain:1,notContain:0}}function Z(V,L,ie){return Math.abs(L[ie]-V[ie])}function K(V,L,ie){return ie==="x"?V.x<L.x?I:T:V.y<L.y?u:H}for(v.forEach(function(V,L){var ie=B(V),ee=t[L];V=Array.isArray(ee)?ee[0]<0?[T,-ee[0]]:0<ee[0]?[I,ee[0]]:ee[1]<0?[H,-ee[1]]:0<ee[1]?[u,ee[1]]:[V.socketId,0]:typeof ee!="number"?[V.socketId,Je]:0<=ee?[V.socketId,ee]:[z(V.socketId),-ee],ie.dirId=V[0],ee=V[1],D[L].push(ie),E[L]=oe(ie,ee)});function(){var V,L,ie,ee,Ge=[ue(E[1],E[0]),ue(E[0],E[1])],Se=[W(E[0].dirId),W(E[1].dirId)];if(Se[0]===Se[1]){if(Ge[0]&&Ge[1])return void(X(E[1],E[0])||(E[0][Se[0]]===E[1][Se[1]]?(D[0].push(E[0]),D[1].push(E[1])):(V=E[0][Se[0]]+(E[1][Se[1]]-E[0][Se[0]])/2,D[0].push(oe(E[0],Math.abs(V-E[0][Se[0]]))),D[1].push(oe(E[1],Math.abs(V-E[1][Se[1]]))))));Ge[0]!==Ge[1]?(L=re(Ge),(ie=Z(E[L.notContain],E[L.contain],Se[L.notContain]))<Je&&(E[L.notContain]=oe(E[L.notContain],Je-ie)),D[L.notContain].push(E[L.notContain]),E[L.notContain]=oe(E[L.notContain],Je,X(E[L.contain],E[L.notContain])?Se[L.notContain]==="x"?u:I:K(E[L.notContain],E[L.contain],Se[L.notContain]==="x"?"y":"x"))):(ie=Z(E[0],E[1],Se[0]==="x"?"y":"x"),D.forEach(function(ct,ke){var fe=ke===0?1:0;ct.push(E[ke]),E[ke]=oe(E[ke],Je,2*Je<=ie?K(E[ke],E[fe],Se[ke]==="x"?"y":"x"):Se[ke]==="x"?u:I)}))}else{if(Ge[0]&&Ge[1])return void(X(E[1],E[0])?D[1].push(E[1]):X(E[0],E[1])?D[0].push(E[0]):D[0].push(Se[0]==="x"?{x:E[1].x,y:E[0].y}:{x:E[0].x,y:E[1].y}));Ge[0]!==Ge[1]?(L=re(Ge),D[L.notContain].push(E[L.notContain]),E[L.notContain]=oe(E[L.notContain],Je,Z(E[L.notContain],E[L.contain],Se[L.contain])>=Je?K(E[L.notContain],E[L.contain],Se[L.contain]):E[L.contain].dirId)):(ee=[{x:E[0].x,y:E[0].y},{x:E[1].x,y:E[1].y}],D.forEach(function(ct,ke){var fe=ke===0?1:0,M=Z(ee[ke],ee[fe],Se[ke]);M<Je&&(E[ke]=oe(E[ke],Je-M)),ct.push(E[ke]),E[ke]=oe(E[ke],Je,K(E[ke],E[fe],Se[fe]))}))}return 1}(););D[1].reverse(),D[0].concat(D[1]).forEach(function(V,L){V={x:V.x,y:V.y},0<L&&o.push([x,V]),x=V})})()}m=[],f.position_plugOverheadSE.forEach(function(x,H){var I,u,T,D,E,z,W,oe,ue,X=!H;0<x?(I=o[u=X?0:o.length-1]).length===2?(m[u]=m[u]||Qe.apply(null,I),m[u]>bt&&(m[u]-x<bt&&(x=m[u]-bt),W=Rt(I[0],I[1],(X?x:m[u]-x)/m[u]),o[u]=X?[W,I[1]]:[I[0],W],m[u]-=x)):(m[u]=m[u]||Lt.apply(null,I),m[u]>bt&&(m[u]-x<bt&&(x=m[u]-bt),W=kt(I[0],I[1],I[2],I[3],En(I[0],I[1],I[2],I[3],X?x:m[u]-x)),D=X?(T=I[0],W.toP1):(T=I[3],W.fromP2),E=Math.atan2(T.y-W.y,W.x-T.x),z=Qe(W,D),W.x=T.x+Math.cos(E)*x,W.y=T.y+Math.sin(E)*x*-1,D.x=W.x+Math.cos(E)*z,D.y=W.y+Math.sin(E)*z*-1,o[u]=X?[W,W.toP1,W.toP2,I[3]]:[I[0],W.fromP1,W.fromP2,W],m[u]=null)):x<0&&(I=o[u=X?0:o.length-1],W=v[H].socketId,H=-n[H][(oe=W===De||W===Ie?"x":"y")=="x"?"width":"height"],ue=(x=x<H?H:x)*(W===De||W===le?-1:1),I.length===2?I[X?0:I.length-1][oe]+=ue:(X?[0,1]:[I.length-2,I.length-1]).forEach(function(re){I[re][oe]+=ue}),m[u]=null)}),w.position_socketXYSE=We(v),w.position_plugOverheadSE=We(f.position_plugOverheadSE),w.position_path=f.position_path,w.position_lineStrokeWidth=f.position_lineStrokeWidth,w.position_socketGravitySE=We(t),F=!0,e.events.apl_position&&e.events.apl_position.forEach(function(x){x(e,o)})}return F}function Tt(e,t){t!==e.isShown&&(!!t!=!!e.isShown&&(e.svg.style.visibility=t?"":"hidden"),e.isShown=t,e.events&&e.events.svgShow&&e.events.svgShow.forEach(function(n){n(e,t)}))}function qe(e,t){var n,o,l,s,d,b,m,R,C,_,y,p,g,k,f,w,v,F,$,B,x,H,I,u,T,D,E,z,W,oe,ue,X,re,Z,K,V,L,ie,ee,Ge,Se,ct,ke,fe={};t.line&&(fe.line=(R=(n=e).options,o=n.curStats,C=n.events,_=!1,_=Y(n,o,"line_color",R.lineColor,C.cur_line_color)||_,_=Y(n,o,"line_colorTra",Ot(o.line_color)[0]<1)||_,_=Y(n,o,"line_strokeWidth",R.lineSize,C.cur_line_strokeWidth)||_)),(t.plug||fe.line)&&(fe.plug=(s=(l=e).options,d=l.curStats,b=l.events,m=!1,[0,1].forEach(function(M){var ne,ge,Xe,Te,tt,An,In,ht,Dt=s.plugSE[M];m=Y(l,d.plug_enabledSE,M,Dt!==et)||m,m=Y(l,d.plug_plugSE,M,Dt)||m,m=Y(l,d.plug_colorSE,M,ht=s.plugColorSE[M]||d.line_color,b.cur_plug_colorSE)||m,m=Y(l,d.plug_colorTraSE,M,Ot(ht)[0]<1)||m,Dt!==et&&(Te=ge=(ne=Yt[Kt[Dt]]).widthR*s.plugSizeSE[M],tt=Xe=ne.heightR*s.plugSizeSE[M],Ce&&(Te*=d.line_strokeWidth,tt*=d.line_strokeWidth),m=Y(l,d.plug_markerWidthSE,M,Te)||m,m=Y(l,d.plug_markerHeightSE,M,tt)||m,d.capsMaskMarker_markerWidthSE[M]=ge,d.capsMaskMarker_markerHeightSE[M]=Xe),d.plugOutline_plugSE[M]=d.capsMaskMarker_plugSE[M]=Dt,d.plug_enabledSE[M]?(ht=d.line_strokeWidth/Ke.lineSize*s.plugSizeSE[M],d.position_plugOverheadSE[M]=ne.overhead*ht,d.viewBox_plugBCircleSE[M]=ne.bCircle*ht,An=ne.sideLen*ht,In=ne.backLen*ht):(d.position_plugOverheadSE[M]=-d.line_strokeWidth/2,d.viewBox_plugBCircleSE[M]=An=In=0),Y(l,d.attach_plugSideLenSE,M,An,b.cur_attach_plugSideLenSE),Y(l,d.attach_plugBackLenSE,M,In,b.cur_attach_plugBackLenSE),d.capsMaskAnchor_enabledSE[M]=!d.plug_enabledSE[M]}),m=Y(l,d,"plug_enabled",d.plug_enabledSE[0]||d.plug_enabledSE[1])||m)),(t.lineOutline||fe.line)&&(fe.lineOutline=(C=(R=e).options,_=R.curStats,I=!1,I=Y(R,_,"lineOutline_enabled",C.lineOutlineEnabled)||I,I=Y(R,_,"lineOutline_color",C.lineOutlineColor)||I,I=Y(R,_,"lineOutline_colorTra",Ot(_.lineOutline_color)[0]<1)||I,C=_.line_strokeWidth*C.lineOutlineSize,I=Y(R,_,"lineOutline_strokeWidth",_.line_strokeWidth-2*C)||I,I=Y(R,_,"lineOutline_inStrokeWidth",_.lineOutline_colorTra?_.lineOutline_strokeWidth+2*Hn:_.line_strokeWidth-C)||I)),(t.plugOutline||fe.line||fe.plug||fe.lineOutline)&&(fe.plugOutline=(p=(y=e).options,g=y.curStats,k=!1,[0,1].forEach(function(M){var ne=g.plugOutline_plugSE[M],ge=ne!==et?Yt[Kt[ne]]:null;k=Y(y,g.plugOutline_enabledSE,M,p.plugOutlineEnabledSE[M]&&g.plug_enabled&&g.plug_enabledSE[M]&&!!ge&&!!ge.outlineBase)||k,k=Y(y,g.plugOutline_colorSE,M,ne=p.plugOutlineColorSE[M]||g.lineOutline_color)||k,k=Y(y,g.plugOutline_colorTraSE,M,Ot(ne)[0]<1)||k,ge&&ge.outlineBase&&((ne=p.plugOutlineSizeSE[M])>ge.outlineMax&&(ne=ge.outlineMax),ne*=2*ge.outlineBase,k=Y(y,g.plugOutline_strokeWidthSE,M,ne)||k,k=Y(y,g.plugOutline_inStrokeWidthSE,M,g.plugOutline_colorTraSE[M]?ne-Hn/(g.line_strokeWidth/Ke.lineSize)/p.plugSizeSE[M]*2:ne/2)||k)}),k)),(t.faces||fe.line||fe.plug||fe.lineOutline||fe.plugOutline)&&(fe.faces=(v=(f=e).curStats,F=f.aplStats,$=f.events,B=!1,!v.line_altColor&&Y(f,F,"line_color",w=v.line_color,$.apl_line_color)&&(f.lineFace.style.stroke=w,B=!0),Y(f,F,"line_strokeWidth",w=v.line_strokeWidth,$.apl_line_strokeWidth)&&(f.lineShape.style.strokeWidth=w+"px",B=!0,(wt||je)&&(Ee(f,f.lineShape),je&&(Ee(f,f.lineFace),Ee(f,f.lineMaskCaps)))),Y(f,F,"lineOutline_enabled",w=v.lineOutline_enabled,$.apl_lineOutline_enabled)&&(f.lineOutlineFace.style.display=w?"inline":"none",B=!0),v.lineOutline_enabled&&(Y(f,F,"lineOutline_color",w=v.lineOutline_color,$.apl_lineOutline_color)&&(f.lineOutlineFace.style.stroke=w,B=!0),Y(f,F,"lineOutline_strokeWidth",w=v.lineOutline_strokeWidth,$.apl_lineOutline_strokeWidth)&&(f.lineOutlineMaskShape.style.strokeWidth=w+"px",B=!0,je&&(Ee(f,f.lineOutlineMaskCaps),Ee(f,f.lineOutlineFace))),Y(f,F,"lineOutline_inStrokeWidth",w=v.lineOutline_inStrokeWidth,$.apl_lineOutline_inStrokeWidth)&&(f.lineMaskShape.style.strokeWidth=w+"px",B=!0,je&&(Ee(f,f.lineOutlineMaskCaps),Ee(f,f.lineOutlineFace)))),Y(f,F,"plug_enabled",w=v.plug_enabled,$.apl_plug_enabled)&&(f.plugsFace.style.display=w?"inline":"none",B=!0),v.plug_enabled&&[0,1].forEach(function(M){var ne=v.plug_plugSE[M],ge=ne!==et?Yt[Kt[ne]]:null,Xe=Kn(M,ge);Y(f,F.plug_enabledSE,M,w=v.plug_enabledSE[M],$.apl_plug_enabledSE)&&(f.plugsFace.style[Xe.prop]=w?"url(#"+f.plugMarkerIdSE[M]+")":"none",B=!0),v.plug_enabledSE[M]&&(Y(f,F.plug_plugSE,M,ne,$.apl_plug_plugSE)&&(f.plugFaceSE[M].href.baseVal="#"+ge.elmId,Yn(f,f.plugMarkerSE[M],Xe.orient,ge.bBox,f.svg,f.plugMarkerShapeSE[M],f.plugsFace),B=!0,wt&&Ee(f,f.plugsFace)),Y(f,F.plug_colorSE,M,w=v.plug_colorSE[M],$.apl_plug_colorSE)&&(f.plugFaceSE[M].style.fill=w,B=!0,(vt||Ce||je)&&!v.line_colorTra&&Ee(f,je?f.lineMaskCaps:f.capsMaskLine)),["markerWidth","markerHeight"].forEach(function(Te){var tt="plug_"+Te+"SE";Y(f,F[tt],M,w=v[tt][M],$["apl_"+tt])&&(f.plugMarkerSE[M][Te].baseVal.value=w,B=!0)}),Y(f,F.plugOutline_enabledSE,M,w=v.plugOutline_enabledSE[M],$.apl_plugOutline_enabledSE)&&(w?(f.plugFaceSE[M].style.mask="url(#"+f.plugMaskIdSE[M]+")",f.plugOutlineFaceSE[M].style.display="inline"):(f.plugFaceSE[M].style.mask="none",f.plugOutlineFaceSE[M].style.display="none"),B=!0),v.plugOutline_enabledSE[M]&&(Y(f,F.plugOutline_plugSE,M,ne,$.apl_plugOutline_plugSE)&&(f.plugOutlineFaceSE[M].href.baseVal=f.plugMaskShapeSE[M].href.baseVal=f.plugOutlineMaskShapeSE[M].href.baseVal="#"+ge.elmId,[f.plugMaskSE[M],f.plugOutlineMaskSE[M]].forEach(function(Te){Te.x.baseVal.value=ge.bBox.left,Te.y.baseVal.value=ge.bBox.top,Te.width.baseVal.value=ge.bBox.width,Te.height.baseVal.value=ge.bBox.height}),B=!0),Y(f,F.plugOutline_colorSE,M,w=v.plugOutline_colorSE[M],$.apl_plugOutline_colorSE)&&(f.plugOutlineFaceSE[M].style.fill=w,B=!0,je&&(Ee(f,f.lineMaskCaps),Ee(f,f.lineOutlineMaskCaps))),Y(f,F.plugOutline_strokeWidthSE,M,w=v.plugOutline_strokeWidthSE[M],$.apl_plugOutline_strokeWidthSE)&&(f.plugOutlineMaskShapeSE[M].style.strokeWidth=w+"px",B=!0),Y(f,F.plugOutline_inStrokeWidthSE,M,w=v.plugOutline_inStrokeWidthSE[M],$.apl_plugOutline_inStrokeWidthSE)&&(f.plugMaskShapeSE[M].style.strokeWidth=w+"px",B=!0)))}),B)),(t.position||fe.line||fe.plug)&&(fe.position=_a(e)),(t.path||fe.position)&&(fe.path=(I=(x=e).curStats,E=x.aplStats,D=x.pathList.animVal||x.pathList.baseVal,u=I.path_edge,z=!1,D&&(u.x1=u.x2=D[0][0].x,u.y1=u.y2=D[0][0].y,I.path_pathData=H=Tn(D,function(M){M.x<u.x1&&(u.x1=M.x),M.y<u.y1&&(u.y1=M.y),M.x>u.x2&&(u.x2=M.x),M.y>u.y2&&(u.y2=M.y)}),Xt(H,E.path_pathData)&&(x.linePath.setPathData(H),E.path_pathData=H,z=!0,je?(Ee(x,x.plugsFace),Ee(x,x.lineMaskCaps)):wt&&Ee(x,x.linePath),x.events.apl_path&&x.events.apl_path.forEach(function(M){M(x,H)}))),z)),fe.viewBox=(D=(T=e).curStats,E=T.aplStats,z=D.path_edge,W=D.viewBox_bBox,oe=E.viewBox_bBox,ue=T.svg.viewBox.baseVal,X=T.svg.style,re=!1,E=Math.max(D.line_strokeWidth/2,D.viewBox_plugBCircleSE[0]||0,D.viewBox_plugBCircleSE[1]||0),Z={x1:z.x1-E,y1:z.y1-E,x2:z.x2+E,y2:z.y2+E},T.events.new_edge4viewBox&&T.events.new_edge4viewBox.forEach(function(M){M(T,Z)}),W.x=D.lineMask_x=D.lineOutlineMask_x=D.maskBGRect_x=Z.x1,W.y=D.lineMask_y=D.lineOutlineMask_y=D.maskBGRect_y=Z.y1,W.width=Z.x2-Z.x1,W.height=Z.y2-Z.y1,["x","y","width","height"].forEach(function(M){var ne;(ne=W[M])!==oe[M]&&(ue[M]=oe[M]=ne,X[Ln[M]]=ne+(M==="x"||M==="y"?T.bodyOffset[M]:0)+"px",re=!0)}),re),fe.mask=(L=(K=e).curStats,ie=K.aplStats,ee=!1,L.plug_enabled?[0,1].forEach(function(M){L.capsMaskMarker_enabledSE[M]=L.plug_enabledSE[M]&&L.plug_colorTraSE[M]||L.plugOutline_enabledSE[M]&&L.plugOutline_colorTraSE[M]}):L.capsMaskMarker_enabledSE[0]=L.capsMaskMarker_enabledSE[1]=!1,L.capsMaskMarker_enabled=L.capsMaskMarker_enabledSE[0]||L.capsMaskMarker_enabledSE[1],L.lineMask_outlineMode=L.lineOutline_enabled,L.caps_enabled=L.capsMaskMarker_enabled||L.capsMaskAnchor_enabledSE[0]||L.capsMaskAnchor_enabledSE[1],L.lineMask_enabled=L.caps_enabled||L.lineMask_outlineMode,(L.lineMask_enabled&&!L.lineMask_outlineMode||L.lineOutline_enabled)&&["x","y"].forEach(function(M){var ne="maskBGRect_"+M;Y(K,ie,ne,V=L[ne])&&(K.maskBGRect[M].baseVal.value=V,ee=!0)}),Y(K,ie,"lineMask_enabled",V=L.lineMask_enabled)&&(K.lineFace.style.mask=V?"url(#"+K.lineMaskId+")":"none",ee=!0,Ce&&Ee(K,K.lineMask)),L.lineMask_enabled&&(Y(K,ie,"lineMask_outlineMode",V=L.lineMask_outlineMode)&&(V?(K.lineMaskBG.style.display="none",K.lineMaskShape.style.display="inline"):(K.lineMaskBG.style.display="inline",K.lineMaskShape.style.display="none"),ee=!0),["x","y"].forEach(function(M){var ne="lineMask_"+M;Y(K,ie,ne,V=L[ne])&&(K.lineMask[M].baseVal.value=V,ee=!0)}),Y(K,ie,"caps_enabled",V=L.caps_enabled)&&(K.lineMaskCaps.style.display=K.lineOutlineMaskCaps.style.display=V?"inline":"none",ee=!0,Ce&&Ee(K,K.capsMaskLine)),L.caps_enabled&&([0,1].forEach(function(M){var ne;Y(K,ie.capsMaskAnchor_enabledSE,M,V=L.capsMaskAnchor_enabledSE[M])&&(K.capsMaskAnchorSE[M].style.display=V?"inline":"none",ee=!0,Ce&&Ee(K,K.lineMask)),L.capsMaskAnchor_enabledSE[M]&&(Xt(ne=L.capsMaskAnchor_pathDataSE[M],ie.capsMaskAnchor_pathDataSE[M])&&(K.capsMaskAnchorSE[M].setPathData(ne),ie.capsMaskAnchor_pathDataSE[M]=ne,ee=!0),Y(K,ie.capsMaskAnchor_strokeWidthSE,M,V=L.capsMaskAnchor_strokeWidthSE[M])&&(K.capsMaskAnchorSE[M].style.strokeWidth=V+"px",ee=!0))}),Y(K,ie,"capsMaskMarker_enabled",V=L.capsMaskMarker_enabled)&&(K.capsMaskLine.style.display=V?"inline":"none",ee=!0),L.capsMaskMarker_enabled&&[0,1].forEach(function(M){var ne=L.capsMaskMarker_plugSE[M],ge=ne!==et?Yt[Kt[ne]]:null,Xe=Kn(M,ge);Y(K,ie.capsMaskMarker_enabledSE,M,V=L.capsMaskMarker_enabledSE[M])&&(K.capsMaskLine.style[Xe.prop]=V?"url(#"+K.lineMaskMarkerIdSE[M]+")":"none",ee=!0),L.capsMaskMarker_enabledSE[M]&&(Y(K,ie.capsMaskMarker_plugSE,M,ne)&&(K.capsMaskMarkerShapeSE[M].href.baseVal="#"+ge.elmId,Yn(K,K.capsMaskMarkerSE[M],Xe.orient,ge.bBox,K.svg,K.capsMaskMarkerShapeSE[M],K.capsMaskLine),ee=!0,wt&&(Ee(K,K.capsMaskLine),Ee(K,K.lineFace))),["markerWidth","markerHeight"].forEach(function(Te){var tt="capsMaskMarker_"+Te+"SE";Y(K,ie[tt],M,V=L[tt][M])&&(K.capsMaskMarkerSE[M][Te].baseVal.value=V,ee=!0)}))}))),L.lineOutline_enabled&&["x","y"].forEach(function(M){var ne="lineOutlineMask_"+M;Y(K,ie,ne,V=L[ne])&&(K.lineOutlineMask[M].baseVal.value=V,ee=!0)}),ee),t.effect&&(ct=(Ge=e).curStats,ke=Ge.aplStats,Object.keys(a).forEach(function(Te){var ne=a[Te],ge=Te+"_enabled",Xe=Te+"_options",Te=ct[Xe];Y(Ge,ke,ge,Se=ct[ge])?(Se&&(ke[Xe]=We(Te)),ne[Se?"init":"remove"](Ge)):Se&&ut(Te,ke[Xe])&&(ne.remove(Ge),ke[ge]=!0,ke[Xe]=We(Te),ne.init(Ge))})),(vt||Ce)&&fe.line&&!fe.path&&Ee(e,e.lineShape),vt&&fe.plug&&!fe.line&&Ee(e,e.plugsFace),Un(e)}function Jt(e,t){return{duration:(Ye(e.duration)&&0<e.duration?e:t).duration,timing:Ne.validTiming(e.timing)?e.timing:We(t.timing)}}function Qt(e,t,n,o){var l=e.curStats,s=e.aplStats,d={};function b(){["show_on","show_effect","show_animOptions"].forEach(function(m){s[m]=l[m]})}l.show_on=t,n&&i[n]&&(l.show_effect=n,l.show_animOptions=Jt(ot(o)?o:{},i[n].defaultAnimOptions)),d.show_on=l.show_on!==s.show_on,d.show_effect=l.show_effect!==s.show_effect,d.show_animOptions=ut(l.show_animOptions,s.show_animOptions),d.show_effect||d.show_animOptions?l.show_inAnim?(n=d.show_effect?i[s.show_effect].stop(e,!0,!0):i[s.show_effect].stop(e),b(),i[s.show_effect].init(e,n)):d.show_on&&(s.show_effect&&d.show_effect&&i[s.show_effect].stop(e,!0,!0),b(),i[s.show_effect].init(e)):d.show_on&&(b(),i[s.show_effect].start(e))}function Zn(e,t,n){return n={props:e,optionName:n},e.attachments.indexOf(t)<0&&(!t.conf.bind||t.conf.bind(t,n))&&(e.attachments.push(t),t.boundTargets.push(n),1)}function en(e,t,n){var o=e.attachments.indexOf(t);-1<o&&e.attachments.splice(o,1),t.boundTargets.some(function(l,s){return l.props===e&&(t.conf.unbind&&t.conf.unbind(t,l),o=s,!0)})&&(t.boundTargets.splice(o,1),n||Et(function(){t.boundTargets.length||S(t)}))}function tn(e,t){var n,o,l,s,d,b,m,R,C,_,y,p,g,k,f,w=e.options,v={};function F(u,T,D,E,z){var W={};return D?E!=null?(W.container=u[D],W.key=E):(W.container=u,W.key=D):(W.container=u,W.key=T),W.default=z,W.acceptsAuto=W.default==null,W}function $(u,T,D,E,z,W,Z){var ue,X,re,Z=F(u,D,z,W,Z);return T[D]!=null&&(X=(T[D]+"").toLowerCase())&&(Z.acceptsAuto&&X===lt||(re=E[X]))&&re!==Z.container[Z.key]&&(Z.container[Z.key]=re,ue=!0),Z.container[Z.key]!=null||Z.acceptsAuto||(Z.container[Z.key]=Z.default,ue=!0),ue}function B(u,T,D,E,z,W,L,ue,X){var re,Z,K,V,L=F(u,D,z,W,L);if(!E){if(L.default==null)throw new Error("Invalid `type`: "+D);E=typeof L.default}return T[D]!=null&&(L.acceptsAuto&&(T[D]+"").toLowerCase()===lt||(K=Z=T[D],((V=E)==="number"?Ye(K):typeof K===V)&&(Z=X&&E==="string"&&Z?Z.trim():Z,1)&&(!ue||ue(Z))))&&Z!==L.container[L.key]&&(L.container[L.key]=Z,re=!0),L.container[L.key]!=null||L.acceptsAuto||(L.container[L.key]=L.default,re=!0),re}if(t=t||{},["start","end"].forEach(function(u,T){var D=t[u],E=!1;if(D&&(Nt(D)||(E=h(D,"anchor")))&&D!==w.anchorSE[T]){if(e.optionIsAttach.anchorSE[T]!==!1&&en(e,Pe[w.anchorSE[T]._id]),E&&!Zn(e,Pe[D._id],u))throw new Error("Can't bind attachment");w.anchorSE[T]=D,e.optionIsAttach.anchorSE[T]=E,n=v.position=!0}}),!w.anchorSE[0]||!w.anchorSE[1]||w.anchorSE[0]===w.anchorSE[1])throw new Error("`start` and `end` are required.");function x(u){var T=d.appendChild(k.createElementNS(Q,"mask"));return T.id=u,T.maskUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[T.x,T.y,T.width,T.height].forEach(function(D){D.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),T}function H(u){var T=d.appendChild(k.createElementNS(Q,"marker"));return T.id=u,T.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH,T.viewBox.baseVal||T.setAttribute("viewBox","0 0 0 0"),T}function I(u){return[u.width,u.height].forEach(function(T){T.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100)}),u}n&&(y=function(u,T){var D,E;if(!(u=kn(u))||!(D=kn(T)))throw new Error("Cannot get frames.");return u.length&&D.length&&(u.reverse(),D.reverse(),u.some(function(z){return D.some(function(W){return W===z&&(E=W.contentWindow,!0)})})),E||window}(e.optionIsAttach.anchorSE[0]!==!1?Pe[w.anchorSE[0]._id].element:w.anchorSE[0],e.optionIsAttach.anchorSE[1]!==!1?Pe[w.anchorSE[1]._id].element:w.anchorSE[1]))!==e.baseWindow&&(l=y,g=(o=e).aplStats,k=l.document,f=de+"-"+o._id,o.pathList={},Re(g,vn),Object.keys(a).forEach(function(u){var T=u+"_enabled";g[T]&&(a[u].remove(o),g[T]=!1)}),o.baseWindow&&o.svg&&o.baseWindow.document.body.removeChild(o.svg),qn(o.baseWindow=l),o.bodyOffset=jn(l),o.svg=s=k.createElementNS(Q,"svg"),s.className.baseVal=de,s.viewBox.baseVal||s.setAttribute("viewBox","0 0 0 0"),o.defs=d=s.appendChild(k.createElementNS(Q,"defs")),o.linePath=m=d.appendChild(k.createElementNS(Q,"path")),m.id=R=f+"-line-path",m.className.baseVal=de+"-line-path",Ce&&(m.style.fill="none"),o.lineShape=m=d.appendChild(k.createElementNS(Q,"use")),m.id=C=f+"-line-shape",m.href.baseVal="#"+R,(b=d.appendChild(k.createElementNS(Q,"g"))).id=_=f+"-caps",o.capsMaskAnchorSE=[0,1].map(function(){var u=b.appendChild(k.createElementNS(Q,"path"));return u.className.baseVal=de+"-caps-mask-anchor",u}),o.lineMaskMarkerIdSE=[f+"-caps-mask-marker-0",f+"-caps-mask-marker-1"],o.capsMaskMarkerSE=[0,1].map(function(u){return H(o.lineMaskMarkerIdSE[u])}),o.capsMaskMarkerShapeSE=[0,1].map(function(u){return u=o.capsMaskMarkerSE[u].appendChild(k.createElementNS(Q,"use")),u.className.baseVal=de+"-caps-mask-marker-shape",u}),o.capsMaskLine=m=b.appendChild(k.createElementNS(Q,"use")),m.className.baseVal=de+"-caps-mask-line",m.href.baseVal="#"+C,o.maskBGRect=m=I(d.appendChild(k.createElementNS(Q,"rect"))),m.id=y=f+"-mask-bg-rect",m.className.baseVal=de+"-mask-bg-rect",Ce&&(m.style.fill="white"),o.lineMask=I(x(o.lineMaskId=f+"-line-mask")),o.lineMaskBG=m=o.lineMask.appendChild(k.createElementNS(Q,"use")),m.href.baseVal="#"+y,o.lineMaskShape=m=o.lineMask.appendChild(k.createElementNS(Q,"use")),m.className.baseVal=de+"-line-mask-shape",m.href.baseVal="#"+R,m.style.display="none",o.lineMaskCaps=m=o.lineMask.appendChild(k.createElementNS(Q,"use")),m.href.baseVal="#"+_,o.lineOutlineMask=I(x(l=f+"-line-outline-mask")),(m=o.lineOutlineMask.appendChild(k.createElementNS(Q,"use"))).href.baseVal="#"+y,o.lineOutlineMaskShape=m=o.lineOutlineMask.appendChild(k.createElementNS(Q,"use")),m.className.baseVal=de+"-line-outline-mask-shape",m.href.baseVal="#"+R,o.lineOutlineMaskCaps=m=o.lineOutlineMask.appendChild(k.createElementNS(Q,"use")),m.href.baseVal="#"+_,o.face=s.appendChild(k.createElementNS(Q,"g")),o.lineFace=m=o.face.appendChild(k.createElementNS(Q,"use")),m.href.baseVal="#"+C,o.lineOutlineFace=m=o.face.appendChild(k.createElementNS(Q,"use")),m.href.baseVal="#"+C,m.style.mask="url(#"+l+")",m.style.display="none",o.plugMaskIdSE=[f+"-plug-mask-0",f+"-plug-mask-1"],o.plugMaskSE=[0,1].map(function(u){return x(o.plugMaskIdSE[u])}),o.plugMaskShapeSE=[0,1].map(function(u){return u=o.plugMaskSE[u].appendChild(k.createElementNS(Q,"use")),u.className.baseVal=de+"-plug-mask-shape",u}),p=[],o.plugOutlineMaskSE=[0,1].map(function(u){return x(p[u]=f+"-plug-outline-mask-"+u)}),o.plugOutlineMaskShapeSE=[0,1].map(function(u){return u=o.plugOutlineMaskSE[u].appendChild(k.createElementNS(Q,"use")),u.className.baseVal=de+"-plug-outline-mask-shape",u}),o.plugMarkerIdSE=[f+"-plug-marker-0",f+"-plug-marker-1"],o.plugMarkerSE=[0,1].map(function(u){return u=H(o.plugMarkerIdSE[u]),Ce&&(u.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE),u}),o.plugMarkerShapeSE=[0,1].map(function(u){return o.plugMarkerSE[u].appendChild(k.createElementNS(Q,"g"))}),o.plugFaceSE=[0,1].map(function(u){return o.plugMarkerShapeSE[u].appendChild(k.createElementNS(Q,"use"))}),o.plugOutlineFaceSE=[0,1].map(function(u){var T=o.plugMarkerShapeSE[u].appendChild(k.createElementNS(Q,"use"));return T.style.mask="url(#"+p[u]+")",T.style.display="none",T}),o.plugsFace=m=o.face.appendChild(k.createElementNS(Q,"use")),m.className.baseVal=de+"-plugs-face",m.href.baseVal="#"+C,m.style.display="none",o.curStats.show_inAnim?(o.isShown=1,i[g.show_effect].stop(o,!0)):o.isShown||(s.style.visibility="hidden"),k.body.appendChild(s),[0,1,2].forEach(function(D){var T,D=o.options.labelSEM[D];D&&h(D,"label")&&(T=Pe[D._id]).conf.initSvg&&T.conf.initSvg(T,o)}),v.line=v.plug=v.lineOutline=v.plugOutline=v.faces=v.effect=!0),v.position=$(w,t,"path",Mt,null,null,Ke.path)||v.position,v.position=$(w,t,"startSocket",at,"socketSE",0)||v.position,v.position=$(w,t,"endSocket",at,"socketSE",1)||v.position,[t.startSocketGravity,t.endSocketGravity].forEach(function(u,T){var D,E,z=!1;u!=null&&(Array.isArray(u)?Ye(u[0])&&Ye(u[1])&&(z=[u[0],u[1]],Array.isArray(w.socketGravitySE[T])&&(D=z,E=w.socketGravitySE[T],D.length===E.length&&D.every(function(W,oe){return W===E[oe]}))&&(z=!1)):((u+"").toLowerCase()===lt?z=null:Ye(u)&&0<=u&&(z=u),z===w.socketGravitySE[T]&&(z=!1)),z!==!1&&(w.socketGravitySE[T]=z,v.position=!0))}),v.line=B(w,t,"color",null,"lineColor",null,Ke.lineColor,null,!0)||v.line,v.line=B(w,t,"size",null,"lineSize",null,Ke.lineSize,function(u){return 0<u})||v.line,["startPlug","endPlug"].forEach(function(u,T){v.plug=$(w,t,u,bn,"plugSE",T,Ke.plugSE[T])||v.plug,v.plug=B(w,t,u+"Color","string","plugColorSE",T,null,null,!0)||v.plug,v.plug=B(w,t,u+"Size",null,"plugSizeSE",T,Ke.plugSizeSE[T],function(D){return 0<D})||v.plug}),v.lineOutline=B(w,t,"outline",null,"lineOutlineEnabled",null,Ke.lineOutlineEnabled)||v.lineOutline,v.lineOutline=B(w,t,"outlineColor",null,"lineOutlineColor",null,Ke.lineOutlineColor,null,!0)||v.lineOutline,v.lineOutline=B(w,t,"outlineSize",null,"lineOutlineSize",null,Ke.lineOutlineSize,function(u){return 0<u&&u<=.48})||v.lineOutline,["startPlugOutline","endPlugOutline"].forEach(function(u,T){v.plugOutline=B(w,t,u,null,"plugOutlineEnabledSE",T,Ke.plugOutlineEnabledSE[T])||v.plugOutline,v.plugOutline=B(w,t,u+"Color","string","plugOutlineColorSE",T,null,null,!0)||v.plugOutline,v.plugOutline=B(w,t,u+"Size",null,"plugOutlineSizeSE",T,Ke.plugOutlineSizeSE[T],function(D){return 1<=D})||v.plugOutline}),["startLabel","endLabel","middleLabel"].forEach(function(u,T){var D,E,z,W=t[u],oe=w.labelSEM[T]&&!e.optionIsAttach.labelSEM[T]?Pe[w.labelSEM[T]._id].text:w.labelSEM[T],ue=!1;if((D=typeof W=="string")&&(W=W.trim()),(D||W&&(ue=h(W,"label")))&&W!==oe){if(w.labelSEM[T]&&(en(e,Pe[w.labelSEM[T]._id]),w.labelSEM[T]=""),W){if(ue?(E=Pe[(z=W)._id]).boundTargets.slice().forEach(function(X){E.conf.removeOption(E,X)}):z=new c(r.captionLabel,[W]),!Zn(e,Pe[z._id],u))throw new Error("Can't bind attachment");w.labelSEM[T]=z}e.optionIsAttach.labelSEM[T]=ue}}),Object.keys(a).forEach(function(u){var T,D,E=a[u],z=u+"_enabled",W=u+"_options";function oe(X){var re={};return E.optionsConf.forEach(function(Z){var K=Z[0],V=Z[3];Z[4]==null||re[V]||(re[V]=[]),(typeof K=="function"?K:K==="id"?$:B).apply(null,[re,X].concat(Z.slice(1)))}),re}function ue(X){var re,Z=u+"_animOptions";return X.hasOwnProperty("animation")?ot(X.animation)?re=e.curStats[Z]=Jt(X.animation,E.defaultAnimOptions):(re=!!X.animation,e.curStats[Z]=re?Jt({},E.defaultAnimOptions):null):(re=!!E.defaultEnabled,e.curStats[Z]=re?Jt({},E.defaultAnimOptions):null),re}t.hasOwnProperty(u)&&(T=t[u],ot(T)?(e.curStats[z]=!0,D=e.curStats[W]=oe(T),E.anim&&(e.curStats[W].animation=ue(T))):(D=e.curStats[z]=!!T)&&(e.curStats[W]=oe({}),E.anim&&(e.curStats[W].animation=ue({}))),ut(D,w[u])&&(w[u]=D,v.effect=!0))}),qe(e,v)}function Ze(e,t,n){var o={options:{anchorSE:[],socketSE:[],socketGravitySE:[],plugSE:[],plugColorSE:[],plugSizeSE:[],plugOutlineEnabledSE:[],plugOutlineColorSE:[],plugOutlineSizeSE:[],labelSEM:["","",""]},optionIsAttach:{anchorSE:[!1,!1],labelSEM:[!1,!1,!1]},curStats:{},aplStats:{},attachments:[],events:{},reflowTargets:[]};Re(o.curStats,vn),Re(o.aplStats,vn),Object.keys(a).forEach(function(l){var s=a[l].stats;Re(o.curStats,s),Re(o.aplStats,s),o.options[l]=!1}),Re(o.curStats,Fn),Re(o.aplStats,Fn),o.curStats.show_effect=Wn,o.curStats.show_animOptions=We(i[Wn].defaultAnimOptions),Object.defineProperty(this,"_id",{value:++Ca}),o._id=this._id,Be[this._id]=o,arguments.length===1&&(n=e,e=null),n=n||{},(e||t)&&(n=We(n),e&&(n.start=e),t&&(n.end=t)),o.isShown=o.aplStats.show_on=!n.hide,this.setOptions(n)}function nn(e){return function(t){var n={};n[e]=t,this.setOptions(n)}}function Xn(e,t){var n,o={conf:e,curStats:{},aplStats:{},boundTargets:[]},l={};e.argOptions.every(function(s){return!(!t.length||(typeof s.type=="string"?typeof t[0]!==s.type:typeof s.type!="function"||!s.type(t[0])))&&(l[s.optionName]=t.shift(),!0)}),n=t.length&&ot(t[0])?We(t[0]):{},Object.keys(l).forEach(function(s){n[s]=l[s]}),e.stats&&(Re(o.curStats,e.stats),Re(o.aplStats,e.stats)),Object.defineProperty(this,"_id",{value:++xa}),Object.defineProperty(this,"isRemoved",{get:function(){return!Pe[this._id]}}),o._id=this._id,e.init&&!e.init(o,n)||(Pe[this._id]=o)}return a={dash:{stats:{dash_len:{},dash_gap:{},dash_maxOffset:{}},anim:!0,defaultAnimOptions:{duration:1e3,timing:"linear"},optionsConf:[["type","len","number",null,null,null,function(e){return 0<e}],["type","gap","number",null,null,null,function(e){return 0<e}]],init:function(e){xe(e,"apl_line_strokeWidth",a.dash.update),e.lineFace.style.strokeDashoffset=0,a.dash.update(e)},remove:function(e){var t=e.curStats;_e(e,"apl_line_strokeWidth",a.dash.update),t.dash_animId&&(Ne.remove(t.dash_animId),t.dash_animId=null),e.lineFace.style.strokeDasharray="none",e.lineFace.style.strokeDashoffset=0,Re(e.aplStats,a.dash.stats)},update:function(e){var t,n=e.curStats,o=e.aplStats,l=o.dash_options,s=!1;n.dash_len=l.len||2*o.line_strokeWidth,n.dash_gap=l.gap||o.line_strokeWidth,n.dash_maxOffset=n.dash_len+n.dash_gap,s=Y(e,o,"dash_len",n.dash_len)||s,(s=Y(e,o,"dash_gap",n.dash_gap)||s)&&(e.lineFace.style.strokeDasharray=o.dash_len+","+o.dash_gap),n.dash_animOptions?(s=Y(e,o,"dash_maxOffset",n.dash_maxOffset),o.dash_animOptions&&(s||ut(n.dash_animOptions,o.dash_animOptions))&&(n.dash_animId&&(t=Ne.stop(n.dash_animId),Ne.remove(n.dash_animId)),o.dash_animOptions=null),o.dash_animOptions||(n.dash_animId=Ne.add(function(d){return(1-d)*o.dash_maxOffset+"px"},function(d){e.lineFace.style.strokeDashoffset=d},n.dash_animOptions.duration,0,n.dash_animOptions.timing,!1,t),o.dash_animOptions=We(n.dash_animOptions))):o.dash_animOptions&&(n.dash_animId&&(Ne.remove(n.dash_animId),n.dash_animId=null),e.lineFace.style.strokeDashoffset=0,o.dash_animOptions=null)}},gradient:{stats:{gradient_colorSE:{hasSE:!0},gradient_pointSE:{hasSE:!0,hasProps:!0}},optionsConf:[["type","startColor","string","colorSE",0,null,null,!0],["type","endColor","string","colorSE",1,null,null,!0]],init:function(e){var t=e.baseWindow.document,n=e.defs,o=de+"-"+e._id+"-gradient";e.efc_gradient_gradient=n=n.appendChild(t.createElementNS(Q,"linearGradient")),n.id=o,n.gradientUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[n.x1,n.y1,n.x2,n.y2].forEach(function(l){l.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),e.efc_gradient_stopSE=[0,1].map(function(l){var s=e.efc_gradient_gradient.appendChild(t.createElementNS(Q,"stop"));try{s.offset.baseVal=l}catch(d){if(d.code!==DOMException.NO_MODIFICATION_ALLOWED_ERR)throw d;s.setAttribute("offset",l)}return s}),xe(e,"cur_plug_colorSE",a.gradient.update),xe(e,"apl_path",a.gradient.update),e.curStats.line_altColor=!0,e.lineFace.style.stroke="url(#"+o+")",a.gradient.update(e)},remove:function(e){e.efc_gradient_gradient&&(e.defs.removeChild(e.efc_gradient_gradient),e.efc_gradient_gradient=e.efc_gradient_stopSE=null),_e(e,"cur_plug_colorSE",a.gradient.update),_e(e,"apl_path",a.gradient.update),e.curStats.line_altColor=!1,e.lineFace.style.stroke=e.curStats.line_color,Re(e.aplStats,a.gradient.stats)},update:function(e){var t,n=e.curStats,o=e.aplStats,l=o.gradient_options,s=e.pathList.animVal||e.pathList.baseVal;[0,1].forEach(function(d){n.gradient_colorSE[d]=l.colorSE[d]||n.plug_colorSE[d]}),t=s[0][0],n.gradient_pointSE[0]={x:t.x,y:t.y},t=(s=s[s.length-1])[s.length-1],n.gradient_pointSE[1]={x:t.x,y:t.y},[0,1].forEach(function(d){var b;Y(e,o.gradient_colorSE,d,b=n.gradient_colorSE[d])&&(Ce?(b=Ot(b),e.efc_gradient_stopSE[d].style.stopColor=b[1],e.efc_gradient_stopSE[d].style.stopOpacity=b[0]):e.efc_gradient_stopSE[d].style.stopColor=b),["x","y"].forEach(function(m){(b=n.gradient_pointSE[d][m])!==o.gradient_pointSE[d][m]&&(e.efc_gradient_gradient[m+(d+1)].baseVal.value=o.gradient_pointSE[d][m]=b)})})}},dropShadow:{stats:{dropShadow_dx:{},dropShadow_dy:{},dropShadow_blur:{},dropShadow_color:{},dropShadow_opacity:{},dropShadow_x:{},dropShadow_y:{}},optionsConf:[["type","dx",null,null,null,2],["type","dy",null,null,null,4],["type","blur",null,null,null,3,function(e){return 0<=e}],["type","color",null,null,null,"#000",null,!0],["type","opacity",null,null,null,.8,function(e){return 0<=e&&e<=1}]],init:function(e){var t,n,o,l,s=e.baseWindow.document,d=e.defs,b=de+"-"+e._id+"-dropShadow",m=(t=s,n=b,l={},typeof P!="boolean"&&(P=!!window.SVGFEDropShadowElement&&!Ce),l.elmsAppend=[l.elmFilter=s=t.createElementNS(Q,"filter")],s.filterUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,s.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),s.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),s.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),s.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),s.id=n,P?(l.elmOffset=l.elmBlur=o=s.appendChild(t.createElementNS(Q,"feDropShadow")),l.styleFlood=o.style):(l.elmBlur=s.appendChild(t.createElementNS(Q,"feGaussianBlur")),l.elmOffset=o=s.appendChild(t.createElementNS(Q,"feOffset")),o.result.baseVal="offsetblur",o=s.appendChild(t.createElementNS(Q,"feFlood")),l.styleFlood=o.style,(o=s.appendChild(t.createElementNS(Q,"feComposite"))).in2.baseVal="offsetblur",o.operator.baseVal=SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN,(o=s.appendChild(t.createElementNS(Q,"feMerge"))).appendChild(t.createElementNS(Q,"feMergeNode")),o.appendChild(t.createElementNS(Q,"feMergeNode")).in1.baseVal="SourceGraphic"),l);["elmFilter","elmOffset","elmBlur","styleFlood","elmsAppend"].forEach(function(R){e["efc_dropShadow_"+R]=m[R]}),m.elmsAppend.forEach(function(R){d.appendChild(R)}),e.face.setAttribute("filter","url(#"+b+")"),xe(e,"new_edge4viewBox",a.dropShadow.adjustEdge),a.dropShadow.update(e)},remove:function(e){var t=e.defs;e.efc_dropShadow_elmsAppend&&(e.efc_dropShadow_elmsAppend.forEach(function(n){t.removeChild(n)}),e.efc_dropShadow_elmFilter=e.efc_dropShadow_elmOffset=e.efc_dropShadow_elmBlur=e.efc_dropShadow_styleFlood=e.efc_dropShadow_elmsAppend=null),_e(e,"new_edge4viewBox",a.dropShadow.adjustEdge),qe(e,{}),e.face.removeAttribute("filter"),Re(e.aplStats,a.dropShadow.stats)},update:function(e){var t,n,o=e.curStats,l=e.aplStats,s=l.dropShadow_options;o.dropShadow_dx=t=s.dx,Y(e,l,"dropShadow_dx",t)&&(e.efc_dropShadow_elmOffset.dx.baseVal=t,n=!0),o.dropShadow_dy=t=s.dy,Y(e,l,"dropShadow_dy",t)&&(e.efc_dropShadow_elmOffset.dy.baseVal=t,n=!0),o.dropShadow_blur=t=s.blur,Y(e,l,"dropShadow_blur",t)&&(e.efc_dropShadow_elmBlur.setStdDeviation(t,t),n=!0),n&&qe(e,{}),o.dropShadow_color=t=s.color,Y(e,l,"dropShadow_color",t)&&(e.efc_dropShadow_styleFlood.floodColor=t),o.dropShadow_opacity=t=s.opacity,Y(e,l,"dropShadow_opacity",t)&&(e.efc_dropShadow_styleFlood.floodOpacity=t)},adjustEdge:function(e,t){var n,o=e.curStats,l=e.aplStats;o.dropShadow_dx!=null&&(n=3*o.dropShadow_blur,(n={x1:t.x1-n+o.dropShadow_dx,y1:t.y1-n+o.dropShadow_dy,x2:t.x2+n+o.dropShadow_dx,y2:t.y2+n+o.dropShadow_dy}).x1<t.x1&&(t.x1=n.x1),n.y1<t.y1&&(t.y1=n.y1),n.x2>t.x2&&(t.x2=n.x2),n.y2>t.y2&&(t.y2=n.y2),["x","y"].forEach(function(s){var d,b="dropShadow_"+s;o[b]=d=t[s+"1"],Y(e,l,b,d)&&(e.efc_dropShadow_elmFilter[s].baseVal.value=d)}))}}},Object.keys(a).forEach(function(e){var t=a[e],n=t.stats;n[e+"_enabled"]={iniValue:!1},n[e+"_options"]={hasProps:!0},t.anim&&(n[e+"_animOptions"]={},n[e+"_animId"]={})}),i={none:{defaultAnimOptions:{},init:function(e,t){var n=e.curStats;n.show_animId&&(Ne.remove(n.show_animId),n.show_animId=null),i.none.start(e,t)},start:function(e,t){i.none.stop(e,!0)},stop:function(e,t,n){var o=e.curStats;return n=n??e.aplStats.show_on,o.show_inAnim=!1,t&&Tt(e,n),n?1:0}},fade:{defaultAnimOptions:{duration:300,timing:"linear"},init:function(e,t){var n=e.curStats,o=e.aplStats;n.show_animId&&Ne.remove(n.show_animId),n.show_animId=Ne.add(function(l){return l},function(l,s){s?i.fade.stop(e,!0):(e.svg.style.opacity=l+"",je&&(Ee(e,e.svg),Un(e)))},o.show_animOptions.duration,1,o.show_animOptions.timing,null,!1),i.fade.start(e,t)},start:function(e,t){var n,o=e.curStats;o.show_inAnim&&(n=Ne.stop(o.show_animId)),Tt(e,1),o.show_inAnim=!0,Ne.start(o.show_animId,!e.aplStats.show_on,t??n)},stop:function(e,t,n){var o,l=e.curStats;return n=n??e.aplStats.show_on,o=l.show_inAnim?Ne.stop(l.show_animId):n?1:0,l.show_inAnim=!1,t&&(e.svg.style.opacity=n?"":"0",Tt(e,n)),o}},draw:{defaultAnimOptions:{duration:500,timing:[.58,0,.42,1]},init:function(e,t){var n=e.curStats,o=e.aplStats,l=e.pathList.baseVal,s=Vn(l),d=s.segsLen,b=s.lenAll;n.show_animId&&Ne.remove(n.show_animId),n.show_animId=Ne.add(function(m){var R,C,_,y=-1;if(m===0)C=[[l[0][0],l[0][0]]];else if(m===1)C=l;else{for(R=b*m,C=[];R>=d[++y];)C.push(l[y]),R-=d[y];R&&((_=l[y]).length===2?C.push([_[0],Rt(_[0],_[1],R/d[y])]):(m=kt(_[0],_[1],_[2],_[3],En(_[0],_[1],_[2],_[3],R)),C.push([_[0],m.fromP1,m.fromP2,m])))}return C},function(m,R){R?i.draw.stop(e,!0):(e.pathList.animVal=m,qe(e,{path:!0}))},o.show_animOptions.duration,1,o.show_animOptions.timing,null,!1),i.draw.start(e,t)},start:function(e,t){var n,o=e.curStats;o.show_inAnim&&(n=Ne.stop(o.show_animId)),Tt(e,1),o.show_inAnim=!0,xe(e,"apl_position",i.draw.update),Ne.start(o.show_animId,!e.aplStats.show_on,t??n)},stop:function(e,t,n){var o,l=e.curStats;return n=n??e.aplStats.show_on,o=l.show_inAnim?Ne.stop(l.show_animId):n?1:0,l.show_inAnim=!1,t&&(e.pathList.animVal=n?null:[[e.pathList.baseVal[0][0],e.pathList.baseVal[0][0]]],qe(e,{path:!0}),Tt(e,n)),o},update:function(e){_e(e,"apl_position",i.draw.update),e.curStats.show_inAnim?i.draw.init(e,i.draw.stop(e)):e.aplStats.show_animOptions={}}}},[["start","anchorSE",0],["end","anchorSE",1],["color","lineColor"],["size","lineSize"],["startSocketGravity","socketGravitySE",0],["endSocketGravity","socketGravitySE",1],["startPlugColor","plugColorSE",0],["endPlugColor","plugColorSE",1],["startPlugSize","plugSizeSE",0],["endPlugSize","plugSizeSE",1],["outline","lineOutlineEnabled"],["outlineColor","lineOutlineColor"],["outlineSize","lineOutlineSize"],["startPlugOutline","plugOutlineEnabledSE",0],["endPlugOutline","plugOutlineEnabledSE",1],["startPlugOutlineColor","plugOutlineColorSE",0],["endPlugOutlineColor","plugOutlineColorSE",1],["startPlugOutlineSize","plugOutlineSizeSE",0],["endPlugOutlineSize","plugOutlineSizeSE",1]].forEach(function(e){var t=e[0],n=e[1],o=e[2];Object.defineProperty(Ze.prototype,t,{get:function(){var l=o!=null?Be[this._id].options[n][o]:n?Be[this._id].options[n]:Be[this._id].options[t];return l==null?lt:We(l)},set:nn(t),enumerable:!0})}),[["path",Mt],["startSocket",at,"socketSE",0],["endSocket",at,"socketSE",1],["startPlug",bn,"plugSE",0],["endPlug",bn,"plugSE",1]].forEach(function(e){var t=e[0],n=e[1],o=e[2],l=e[3];Object.defineProperty(Ze.prototype,t,{get:function(){var s,d=l!=null?Be[this._id].options[o][l]:o?Be[this._id].options[o]:Be[this._id].options[t];return d?Object.keys(n).some(function(b){return n[b]===d&&(s=b,!0)})?s:new Error("It's broken"):lt},set:nn(t),enumerable:!0})}),Object.keys(a).forEach(function(e){var t=a[e];Object.defineProperty(Ze.prototype,e,{get:function(){var n,o,l=Be[this._id].options[e];return ot(l)?(n=l,o=t.optionsConf.reduce(function(s,y){var b,m=y[0],R=y[1],C=y[2],_=y[3],y=y[4],p=y!=null?n[_][y]:_?n[_]:n[R];return s[R]=m==="id"?p?Object.keys(C).some(function(g){return C[g]===p&&(b=g,!0)})?b:new Error("It's broken"):lt:p==null?lt:We(p),s},{}),t.anim&&(o.animation=We(n.animation)),o):l},set:nn(e),enumerable:!0})}),["startLabel","endLabel","middleLabel"].forEach(function(e,t){Object.defineProperty(Ze.prototype,e,{get:function(){var n=Be[this._id],o=n.options;return o.labelSEM[t]&&!n.optionIsAttach.labelSEM[t]?Pe[o.labelSEM[t]._id].text:o.labelSEM[t]||""},set:nn(e),enumerable:!0})}),Ze.prototype.setOptions=function(e){return tn(Be[this._id],e),this},Ze.prototype.position=function(){return qe(Be[this._id],{position:!0}),this},Ze.prototype.remove=function(){var e=Be[this._id],t=e.curStats;Object.keys(a).forEach(function(n){n+="_animId",t[n]&&Ne.remove(t[n])}),t.show_animId&&Ne.remove(t.show_animId),e.attachments.slice().forEach(function(n){en(e,n)}),e.baseWindow&&e.svg&&e.baseWindow.document.body.removeChild(e.svg),delete Be[this._id]},Ze.prototype.show=function(e,t){return Qt(Be[this._id],!0,e,t),this},Ze.prototype.hide=function(e,t){return Qt(Be[this._id],!1,e,t),this},S=function(e){e&&Pe[e._id]&&(e.boundTargets.slice().forEach(function(t){en(t.props,e,!0)}),e.conf.remove&&e.conf.remove(e),delete Pe[e._id])},Xn.prototype.remove=function(){var e=this,t=Pe[e._id];t&&(t.boundTargets.slice().forEach(function(n){t.conf.removeOption(t,n)}),Et(function(){var n=Pe[e._id];n&&(console.error("LeaderLineAttachment was not removed by removeOption"),S(n))}))},c=Xn,window.LeaderLineAttachment=c,h=function(e,t){return e instanceof c&&(!(e.isRemoved||t&&Pe[e._id].conf.type!==t)||null)},r={pointAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Nt}],init:function(e,t){return e.element=r.pointAnchor.checkElement(t.element),e.x=r.pointAnchor.parsePercent(t.x,!0)||[.5,!0],e.y=r.pointAnchor.parsePercent(t.y,!0)||[.5,!0],!0},removeOption:function(s,t){var n=t.props,o={},l=s.element,s=n.options.anchorSE[t.optionName==="start"?1:0];l===s&&(l=s===document.body?new c(r.pointAnchor,[l]):document.body),o[t.optionName]=l,tn(n,o)},getBBoxNest:function(e,l){var n=Pt(e.element,l.baseWindow),o=n.width,l=n.height;return n.width=n.height=0,n.left=n.right=n.left+e.x[0]*(e.x[1]?o:1),n.top=n.bottom=n.top+e.y[0]*(e.y[1]?l:1),n},parsePercent:function(e,t){var n,o,l=!1;return Ye(e)?o=e:typeof e=="string"&&(n=Gn.exec(e))&&n[2]&&(l=(o=parseFloat(n[1])/100)!==0),o!=null&&(t||0<=o)?[o,l]:null},checkElement:function(e){if(e==null)e=document.body;else if(!Nt(e))throw new Error("`element` must be Element");return e}},areaAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Nt},{optionName:"shape",type:"string"}],stats:{color:{},strokeWidth:{},elementWidth:{},elementHeight:{},elementLeft:{},elementTop:{},pathListRel:{},bBoxRel:{},pathData:{},viewBoxBBox:{hasProps:!0},dashLen:{},dashGap:{}},init:function(e,t){var n,o=[];return e.element=r.pointAnchor.checkElement(t.element),typeof t.color=="string"&&(e.color=t.color.trim()),typeof t.fillColor=="string"&&(e.fill=t.fillColor.trim()),Ye(t.size)&&0<=t.size&&(e.size=t.size),t.dash&&(e.dash=!0,Ye(t.dash.len)&&0<t.dash.len&&(e.dashLen=t.dash.len),Ye(t.dash.gap)&&0<t.dash.gap&&(e.dashGap=t.dash.gap)),t.shape==="circle"?e.shape=t.shape:t.shape==="polygon"&&Array.isArray(t.points)&&3<=t.points.length&&t.points.every(function(l){var s={};return!(!(s.x=r.pointAnchor.parsePercent(l[0],!0))||!(s.y=r.pointAnchor.parsePercent(l[1],!0)))&&(o.push(s),(s.x[1]||s.y[1])&&(e.hasRatio=!0),!0)})?(e.shape=t.shape,e.points=o):(e.shape="rect",e.radius=Ye(t.radius)&&0<=t.radius?t.radius:0),e.shape!=="rect"&&e.shape!=="circle"||(e.x=r.pointAnchor.parsePercent(t.x,!0)||[-.05,!0],e.y=r.pointAnchor.parsePercent(t.y,!0)||[-.05,!0],e.width=r.pointAnchor.parsePercent(t.width)||[1.1,!0],e.height=r.pointAnchor.parsePercent(t.height)||[1.1,!0],(e.x[1]||e.y[1]||e.width[1]||e.height[1])&&(e.hasRatio=!0)),n=e.element.ownerDocument,e.svg=t=n.createElementNS(Q,"svg"),t.className.baseVal=de+"-areaAnchor",t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),e.path=t.appendChild(n.createElementNS(Q,"path")),e.path.style.fill=e.fill||"none",e.isShown=!1,t.style.visibility="hidden",n.body.appendChild(t),qn(n=n.defaultView),e.bodyOffset=jn(n),e.updateColor=function(){var l=e.curStats,s=e.aplStats,d=e.boundTargets.length?e.boundTargets[0].props.curStats:null;l.color=d=e.color||(d?d.line_color:Ke.lineColor),Y(e,s,"color",d)&&(e.path.style.stroke=d)},e.updateShow=function(){Tt(e,e.boundTargets.some(function(l){return l.props.isShown===!0}))},!0},bind:function(e,t){return t=t.props,e.color||xe(t,"cur_line_color",e.updateColor),xe(t,"svgShow",e.updateShow),Et(function(){e.updateColor(),e.updateShow()}),!0},unbind:function(e,t){t=t.props,e.color||_e(t,"cur_line_color",e.updateColor),_e(t,"svgShow",e.updateShow),1<e.boundTargets.length&&Et(function(){e.updateColor(),e.updateShow(),r.areaAnchor.update(e)&&e.boundTargets.forEach(function(n){qe(n.props,{position:!0})})})},removeOption:function(e,t){r.pointAnchor.removeOption(e,t)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){r.areaAnchor.unbind(e,t)})),e.svg.parentNode.removeChild(e.svg)},getStrokeWidth:function(e,t){return r.areaAnchor.update(e)&&1<e.boundTargets.length&&Et(function(){e.boundTargets.forEach(function(n){n.props!==t&&qe(n.props,{position:!0})})}),e.curStats.strokeWidth},getPathData:function(e,t){var n=Pt(e.element,t.baseWindow);return Tn(e.curStats.pathListRel,function(o){o.x+=n.left,o.y+=n.top})},getBBoxNest:function(e,t){return t=Pt(e.element,t.baseWindow),e=e.curStats.bBoxRel,{left:e.left+t.left,top:e.top+t.top,right:e.right+t.left,bottom:e.bottom+t.top,width:e.width,height:e.height}},update:function(e){var t,n,o,l,s,d,b,m,R,C,_,y,p,g,k,f,w=e.curStats,v=e.aplStats,F=e.boundTargets.length?e.boundTargets[0].props.curStats:null,$={};if($.strokeWidth=Y(e,w,"strokeWidth",e.size!=null?e.size:F?F.line_strokeWidth:Ke.lineSize),t=qt(e.element),$.elementWidth=Y(e,w,"elementWidth",t.width),$.elementHeight=Y(e,w,"elementHeight",t.height),$.elementLeft=Y(e,w,"elementLeft",t.left),$.elementTop=Y(e,w,"elementTop",t.top),$.strokeWidth||e.hasRatio&&($.elementWidth||$.elementHeight)){switch(e.shape){case"rect":(y={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)}).right=y.left+y.width,y.bottom=y.top+y.height,_=w.strokeWidth/2,m=(b=Math.min(y.width,y.height))?b/2*Math.SQRT2+_:0,C=(b=e.radius?e.radius<=m?e.radius:m:0)?(m=(b-_)/Math.SQRT2,C=[{x:y.left-(R=b-m),y:y.top+m},{x:y.left+m,y:y.top-R},{x:y.right-m,y:y.top-R},{x:y.right+R,y:y.top+m},{x:y.right+R,y:y.bottom-m},{x:y.right-m,y:y.bottom+R},{x:y.left+m,y:y.bottom+R},{x:y.left-R,y:y.bottom-m}],w.pathListRel=[[C[0],{x:C[0].x,y:C[0].y-(_=b*jt)},{x:C[1].x-_,y:C[1].y},C[1]]],C[1].x!==C[2].x&&w.pathListRel.push([C[1],C[2]]),w.pathListRel.push([C[2],{x:C[2].x+_,y:C[2].y},{x:C[3].x,y:C[3].y-_},C[3]]),C[3].y!==C[4].y&&w.pathListRel.push([C[3],C[4]]),w.pathListRel.push([C[4],{x:C[4].x,y:C[4].y+_},{x:C[5].x+_,y:C[5].y},C[5]]),C[5].x!==C[6].x&&w.pathListRel.push([C[5],C[6]]),w.pathListRel.push([C[6],{x:C[6].x-_,y:C[6].y},{x:C[7].x,y:C[7].y+_},C[7]]),C[7].y!==C[0].y&&w.pathListRel.push([C[7],C[0]]),w.pathListRel.push([]),R=b-m+w.strokeWidth/2,[{x:y.left-R,y:y.top-R},{x:y.right+R,y:y.bottom+R}]):(R=w.strokeWidth/2,C=[{x:y.left-R,y:y.top-R},{x:y.right+R,y:y.bottom+R}],w.pathListRel=[[C[0],{x:C[1].x,y:C[0].y}],[{x:C[1].x,y:C[0].y},C[1]],[C[1],{x:C[0].x,y:C[1].y}],[]],[{x:y.left-w.strokeWidth,y:y.top-w.strokeWidth},{x:y.right+w.strokeWidth,y:y.bottom+w.strokeWidth}]),w.bBoxRel={left:C[0].x,top:C[0].y,right:C[1].x,bottom:C[1].y,width:C[1].x-C[0].x,height:C[1].y-C[0].y};break;case"circle":(d={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)}).width||d.height||(d.width=d.height=10),d.width||(d.width=d.height),d.height||(d.height=d.width),d.right=d.left+d.width,d.bottom=d.top+d.height,_=d.left+d.width/2,b=d.top+d.height/2,s=w.strokeWidth/2,m=d.width/2,R=d.height/2,y=m*Math.SQRT2+s,C=R*Math.SQRT2+s,w.pathListRel=[[(s=[{x:_-y,y:b},{x:_,y:b-C},{x:_+y,y:b},{x:_,y:b+C}])[0],{x:s[0].x,y:s[0].y-(_=C*jt)},{x:s[1].x-(b=y*jt),y:s[1].y},s[1]],[s[1],{x:s[1].x+b,y:s[1].y},{x:s[2].x,y:s[2].y-_},s[2]],[s[2],{x:s[2].x,y:s[2].y+_},{x:s[3].x+b,y:s[3].y},s[3]],[s[3],{x:s[3].x-b,y:s[3].y},{x:s[0].x,y:s[0].y+_},s[0]],[]],m=y-m+w.strokeWidth/2,R=C-R+w.strokeWidth/2,s=[{x:d.left-m,y:d.top-R},{x:d.right+m,y:d.bottom+R}],w.bBoxRel={left:s[0].x,top:s[0].y,right:s[1].x,bottom:s[1].y,width:s[1].x-s[0].x,height:s[1].y-s[0].y};break;case"polygon":e.points.forEach(function(H){var x=H.x[0]*(H.x[1]?t.width:1),H=H.y[0]*(H.y[1]?t.height:1);o?(x<o.left&&(o.left=x),x>o.right&&(o.right=x),H<o.top&&(o.top=H),H>o.bottom&&(o.bottom=H)):o={left:x,right:x,top:H,bottom:H},l?w.pathListRel.push([l,{x,y:H}]):w.pathListRel=[],l={x,y:H}}),w.pathListRel.push([]),s=w.strokeWidth/2,s=[{x:o.left-s,y:o.top-s},{x:o.right+s,y:o.bottom+s}],w.bBoxRel={left:s[0].x,top:s[0].y,right:s[1].x,bottom:s[1].y,width:s[1].x-s[0].x,height:s[1].y-s[0].y}}$.pathListRel=$.bBoxRel=!0}return($.pathListRel||$.elementLeft||$.elementTop)&&(w.pathData=Tn(w.pathListRel,function(B){B.x+=t.left,B.y+=t.top})),Y(e,v,"strokeWidth",n=w.strokeWidth)&&(e.path.style.strokeWidth=n+"px"),Xt(n=w.pathData,v.pathData)&&(e.path.setPathData(n),v.pathData=n,$.pathData=!0),e.dash&&(!$.pathData&&(!$.strokeWidth||e.dashLen&&e.dashGap)||(w.dashLen=e.dashLen||2*w.strokeWidth,w.dashGap=e.dashGap||w.strokeWidth),$.dash=Y(e,v,"dashLen",w.dashLen)||$.dash,$.dash=Y(e,v,"dashGap",w.dashGap)||$.dash,$.dash&&(e.path.style.strokeDasharray=v.dashLen+","+v.dashGap)),p=w.viewBoxBBox,g=v.viewBoxBBox,k=e.svg.viewBox.baseVal,f=e.svg.style,p.x=w.bBoxRel.left+t.left,p.y=w.bBoxRel.top+t.top,p.width=w.bBoxRel.width,p.height=w.bBoxRel.height,["x","y","width","height"].forEach(function(B){(n=p[B])!==g[B]&&(k[B]=g[B]=n,f[Ln[B]]=n+(B==="x"||B==="y"?e.bodyOffset[B]:0)+"px")}),$.strokeWidth||$.pathListRel||$.bBoxRel}},mouseHoverAnchor:{type:"anchor",argOptions:[{optionName:"element",type:Nt},{optionName:"showEffectName",type:"string"}],style:{backgroundImage:"url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",backgroundSize:"",backgroundRepeat:"no-repeat",backgroundColor:"#f8f881",cursor:"default"},hoverStyle:{backgroundImage:"none",backgroundColor:"#fadf8f"},padding:{top:1,right:15,bottom:1,left:2},minHeight:15,backgroundPosition:{right:2,top:2},backgroundSize:{width:12,height:12},dirKeys:[["top","Top"],["right","Right"],["bottom","Bottom"],["left","Left"]],init:function(e,t){var n,o,l,s,d,b,m,R,C,_=r.mouseHoverAnchor,y={};if(e.element=r.pointAnchor.checkElement(t.element),m=e.element,!((R=m.ownerDocument)&&(C=R.defaultView)&&C.HTMLElement&&m instanceof C.HTMLElement))throw new Error("`element` must be HTML element");return _.style.backgroundSize=_.backgroundSize.width+"px "+_.backgroundSize.height+"px",["style","hoverStyle"].forEach(function(p){var g=_[p];e[p]=Object.keys(g).reduce(function(k,f){return k[f]=g[f],k},{})}),(n=e.element.ownerDocument.defaultView.getComputedStyle(e.element,"")).display==="inline"?e.style.display="inline-block":n.display==="none"&&(e.style.display="block"),r.mouseHoverAnchor.dirKeys.forEach(function(k){var g=k[0],k="padding"+k[1];parseFloat(n[k])<_.padding[g]&&(e.style[k]=_.padding[g]+"px")}),e.style.display&&(l=e.element.style.display,e.element.style.display=e.style.display),r.mouseHoverAnchor.dirKeys.forEach(function(p){p="padding"+p[1],e.style[p]&&(y[p]=e.element.style[p],e.element.style[p]=e.style[p])}),(m=e.element.getBoundingClientRect()).height<_.minHeight&&(je?(C=_.minHeight,n.boxSizing==="content-box"?C-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(n.paddingTop)+parseFloat(n.paddingBottom):n.boxSizing==="padding-box"&&(C-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)),e.style.height=C+"px"):e.style.height=parseFloat(n.height)+(_.minHeight-m.height)+"px"),e.style.backgroundPosition=Ce?m.width-_.backgroundSize.width-_.backgroundPosition.right+"px "+_.backgroundPosition.top+"px":"right "+_.backgroundPosition.right+"px top "+_.backgroundPosition.top+"px",e.style.display&&(e.element.style.display=l),r.mouseHoverAnchor.dirKeys.forEach(function(p){p="padding"+p[1],e.style[p]&&(e.element.style[p]=y[p])}),["style","hoverStyle"].forEach(function(p){var g=e[p],k=t[p];ot(k)&&Object.keys(k).forEach(function(f){typeof k[f]=="string"||Ye(k[f])?g[f]=k[f]:k[f]==null&&delete g[f]})}),typeof t.onSwitch=="function"&&(b=t.onSwitch),t.showEffectName&&i[t.showEffectName]&&(e.showEffectName=s=t.showEffectName),d=t.animOptions,e.elmStyle=o=e.element.style,e.mouseenter=function(p){e.hoverStyleSave=_.getStyles(o,Object.keys(e.hoverStyle)),_.setStyles(o,e.hoverStyle),e.boundTargets.forEach(function(g){Qt(g.props,!0,s,d)}),b&&b(p)},e.mouseleave=function(p){_.setStyles(o,e.hoverStyleSave),e.boundTargets.forEach(function(g){Qt(g.props,!1,s,d)}),b&&b(p)},!0},bind:function(e,t){var n,o,l,s,d;return t.props.svg?r.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName):Et(function(){r.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName)}),e.enabled||(e.styleSave=r.mouseHoverAnchor.getStyles(e.elmStyle,Object.keys(e.style)),r.mouseHoverAnchor.setStyles(e.elmStyle,e.style),e.removeEventListener=(n=e.element,o=e.mouseenter,l=e.mouseleave,"onmouseenter"in n&&"onmouseleave"in n?(n.addEventListener("mouseenter",o,!1),n.addEventListener("mouseleave",l,!1),function(){n.removeEventListener("mouseenter",o,!1),n.removeEventListener("mouseleave",l,!1)}):(console.warn("mouseenter and mouseleave events polyfill is enabled."),n.addEventListener("mouseover",s=function(b){b.relatedTarget&&(b.relatedTarget===this||this.compareDocumentPosition(b.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||o.apply(this,arguments)}),n.addEventListener("mouseout",d=function(b){b.relatedTarget&&(b.relatedTarget===this||this.compareDocumentPosition(b.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||l.apply(this,arguments)}),function(){n.removeEventListener("mouseover",s,!1),n.removeEventListener("mouseout",d,!1)})),e.enabled=!0),!0},unbind:function(e,t){e.enabled&&e.boundTargets.length<=1&&(e.removeEventListener(),r.mouseHoverAnchor.setStyles(e.elmStyle,e.styleSave),e.enabled=!1),r.mouseHoverAnchor.llShow(t.props,!0,e.showEffectName)},removeOption:function(e,t){r.pointAnchor.removeOption(e,t)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){r.mouseHoverAnchor.unbind(e,t)}))},getBBoxNest:function(e,t){return Pt(e.element,t.baseWindow)},llShow:function(e,t,n){i[n||e.curStats.show_effect].stop(e,!0,t),e.aplStats.show_on=t},getStyles:function(e,t){return t.reduce(function(n,o){return n[o]=e[o],n},{})},setStyles:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}},captionLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},x:{},y:{}},textStyleProps:["fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","kerning","letterSpacing","wordSpacing","textDecoration"],init:function(e,t){return typeof t.text=="string"&&(e.text=t.text.trim()),!!e.text&&(typeof t.color=="string"&&(e.color=t.color.trim()),e.outlineColor=typeof t.outlineColor=="string"?t.outlineColor.trim():"#fff",Array.isArray(t.offset)&&Ye(t.offset[0])&&Ye(t.offset[1])&&(e.offset={x:t.offset[0],y:t.offset[1]}),Ye(t.lineOffset)&&(e.lineOffset=t.lineOffset),r.captionLabel.textStyleProps.forEach(function(n){t[n]!=null&&(e[n]=t[n])}),e.updateColor=function(n){r.captionLabel.updateColor(e,n)},e.updateSocketXY=function(n){var o,l=e.curStats,s=e.aplStats,d=n.curStats,b=d.position_socketXYSE[e.socketIndex];b.x!=null&&(e.offset?(l.x=b.x+e.offset.x,l.y=b.y+e.offset.y):(o=e.height/2,n=Math.max(d.attach_plugSideLenSE[e.socketIndex]||0,d.line_strokeWidth/2),d=d.position_socketXYSE[e.socketIndex?0:1],b.socketId===De||b.socketId===Ie?(l.x=b.socketId===De?b.x-o-e.width:b.x+o,l.y=d.y<b.y?b.y+n+o:b.y-n-o-e.height):(l.x=d.x<b.x?b.x+n+o:b.x-n-o-e.width,l.y=b.socketId===le?b.y-o-e.height:b.y+o)),Y(e,s,"x",o=l.x)&&(e.elmPosition.x.baseVal.getItem(0).value=o),Y(e,s,"y",o=l.y)&&(e.elmPosition.y.baseVal.getItem(0).value=o+e.height))},e.updatePath=function(s){var o=e.curStats,l=e.aplStats,s=s.pathList.animVal||s.pathList.baseVal;s&&(s=r.captionLabel.getMidPoint(s,e.lineOffset),o.x=s.x-e.width/2,o.y=s.y-e.height/2,Y(e,l,"x",s=o.x)&&(e.elmPosition.x.baseVal.getItem(0).value=s),Y(e,l,"y",s=o.y)&&(e.elmPosition.y.baseVal.getItem(0).value=s+e.height))},e.updateShow=function(n){r.captionLabel.updateShow(e,n)},Ce&&(e.adjustEdge=function(n,o){var l=e.curStats;l.x!=null&&r.captionLabel.adjustEdge(o,{x:l.x,y:l.y,width:e.width,height:e.height},e.strokeWidth/2)}),!0)},updateColor:function(e,l){var n=e.curStats,o=e.aplStats,l=l.curStats;n.color=l=e.color||l.line_color,Y(e,o,"color",l)&&(e.styleFill.fill=l)},updateShow:function(e,t){t=t.isShown===!0,t!==e.isShown&&(e.styleShow.visibility=t?"":"hidden",e.isShown=t)},adjustEdge:function(e,t,n){n={x1:t.x-n,y1:t.y-n,x2:t.x+t.width+n,y2:t.y+t.height+n},n.x1<e.x1&&(e.x1=n.x1),n.y1<e.y1&&(e.y1=n.y1),n.x2>e.x2&&(e.x2=n.x2),n.y2>e.y2&&(e.y2=n.y2)},newText:function(e,t,n,o,l){var s,d,b=t.createElementNS(Q,"text");return b.textContent=e,[b.x,b.y].forEach(function(m){var R=n.createSVGLength();R.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),m.baseVal.initialize(R)}),typeof N!="boolean"&&(N="paintOrder"in b.style),l&&!N?(s=t.createElementNS(Q,"defs"),b.id=o,s.appendChild(b),(d=(e=t.createElementNS(Q,"g")).appendChild(t.createElementNS(Q,"use"))).href.baseVal="#"+o,(t=e.appendChild(t.createElementNS(Q,"use"))).href.baseVal="#"+o,(d=d.style).strokeLinejoin="round",{elmPosition:b,styleText:b.style,styleFill:t.style,styleStroke:d,styleShow:e.style,elmsAppend:[s,e]}):(d=b.style,l&&(d.strokeLinejoin="round",d.paintOrder="stroke"),{elmPosition:b,styleText:d,styleFill:d,styleStroke:l?d:null,styleShow:d,elmsAppend:[b]})},getMidPoint:function(e,t){var n,o,s=Vn(e),l=s.segsLen,s=s.lenAll,d=-1,b=s/2+(t||0);if(b<=0)return(n=e[0]).length===2?Rt(n[0],n[1],0):kt(n[0],n[1],n[2],n[3],0);if(s<=b)return(n=e[e.length-1]).length===2?Rt(n[0],n[1],1):kt(n[0],n[1],n[2],n[3],1);for(o=[];b>l[++d];)o.push(e[d]),b-=l[d];return(n=e[d]).length===2?Rt(n[0],n[1],b/l[d]):kt(n[0],n[1],n[2],n[3],En(n[0],n[1],n[2],n[3],b))},initSvg:function(e,t){var n,o,l=r.captionLabel.newText(e.text,t.baseWindow.document,t.svg,de+"-captionLabel-"+e._id,e.outlineColor);["elmPosition","styleFill","styleShow","elmsAppend"].forEach(function(s){e[s]=l[s]}),e.isShown=!1,e.styleShow.visibility="hidden",r.captionLabel.textStyleProps.forEach(function(s){e[s]!=null&&(l.styleText[s]=e[s])}),l.elmsAppend.forEach(function(s){t.svg.appendChild(s)}),n=l.elmPosition.getBBox(),e.width=n.width,e.height=n.height,e.outlineColor&&(o=n.height/9,l.styleStroke.strokeWidth=(o=10<o?10:o<2?2:o)+"px",l.styleStroke.stroke=e.outlineColor),e.strokeWidth=o||0,Re(e.aplStats,r.captionLabel.stats),e.updateColor(t),e.refSocketXY?e.updateSocketXY(t):e.updatePath(t),Ce&&qe(t,{}),e.updateShow(t)},bind:function(e,t){var n=t.props;return e.color||xe(n,"cur_line_color",e.updateColor),(e.refSocketXY=t.optionName==="startLabel"||t.optionName==="endLabel")?(e.socketIndex=t.optionName==="startLabel"?0:1,xe(n,"apl_position",e.updateSocketXY),e.offset||(xe(n,"cur_attach_plugSideLenSE",e.updateSocketXY),xe(n,"cur_line_strokeWidth",e.updateSocketXY))):xe(n,"apl_path",e.updatePath),xe(n,"svgShow",e.updateShow),Ce&&xe(n,"new_edge4viewBox",e.adjustEdge),r.captionLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(o){n.svg.removeChild(o)}),e.elmPosition=e.styleFill=e.styleShow=e.elmsAppend=null),Re(e.curStats,r.captionLabel.stats),Re(e.aplStats,r.captionLabel.stats),e.color||_e(n,"cur_line_color",e.updateColor),e.refSocketXY?(_e(n,"apl_position",e.updateSocketXY),e.offset||(_e(n,"cur_attach_plugSideLenSE",e.updateSocketXY),_e(n,"cur_line_strokeWidth",e.updateSocketXY))):_e(n,"apl_path",e.updatePath),_e(n,"svgShow",e.updateShow),Ce&&(_e(n,"new_edge4viewBox",e.adjustEdge),qe(n,{}))},removeOption:function(e,t){var n=t.props,o={};o[t.optionName]="",tn(n,o)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){r.captionLabel.unbind(e,t)}))}},pathLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},startOffset:{},pathData:{}},init:function(e,t){return typeof t.text=="string"&&(e.text=t.text.trim()),!!e.text&&(typeof t.color=="string"&&(e.color=t.color.trim()),e.outlineColor=typeof t.outlineColor=="string"?t.outlineColor.trim():"#fff",Ye(t.lineOffset)&&(e.lineOffset=t.lineOffset),r.captionLabel.textStyleProps.forEach(function(n){t[n]!=null&&(e[n]=t[n])}),e.updateColor=function(n){r.captionLabel.updateColor(e,n)},e.updatePath=function(n){var o=e.curStats,l=e.aplStats,s=n.curStats,d=n.pathList.animVal||n.pathList.baseVal;d&&(o.pathData=s=r.pathLabel.getOffsetPathData(d,s.line_strokeWidth/2+e.strokeWidth/2+e.height/4,1.25*e.height),Xt(s,l.pathData)&&(e.elmPath.setPathData(s),l.pathData=s,e.bBox=e.elmPosition.getBBox(),e.updateStartOffset(n)))},e.updateStartOffset=function(n){var o,l,s=e.curStats,d=e.aplStats,b=n.curStats;s.pathData&&(e.semIndex===2&&!e.lineOffset||(l=s.pathData.reduce(function(m,R){var C,_=R.values;switch(R.type){case"M":o={x:_[0],y:_[1]};break;case"L":C={x:_[0],y:_[1]},o&&(m+=Qe(o,C)),o=C;break;case"C":C={x:_[4],y:_[5]},o&&(m+=Lt(o,{x:_[0],y:_[1]},{x:_[2],y:_[3]},C)),o=C}return m},0),n=e.semIndex===0?0:e.semIndex===1?l:l/2,e.semIndex!==2&&(b=Math.max(b.attach_plugBackLenSE[e.semIndex]||0,b.line_strokeWidth/2)+e.strokeWidth/2+e.height/4,n=(n+=e.semIndex===0?b:-b)<0?0:l<n?l:n),e.lineOffset&&(n=(n+=e.lineOffset)<0?0:l<n?l:n),s.startOffset=n,Y(e,d,"startOffset",n)&&(e.elmOffset.startOffset.baseVal.value=n)))},e.updateShow=function(n){r.captionLabel.updateShow(e,n)},Ce&&(e.adjustEdge=function(n,o){e.bBox&&r.captionLabel.adjustEdge(o,e.bBox,e.strokeWidth/2)}),!0)},getOffsetPathData:function(e,t,n){var o,l,s=[];function d(b,m){return Math.abs(b.x-m.x)<3&&Math.abs(b.y-m.y)<3}return e.forEach(function(b){var m,R,C,_,y,p,g,k,f,w,v;b.length===2?(k=b[0],f=b[1],w=t,v=Math.atan2(k.y-f.y,f.x-k.x)+.5*Math.PI,m=[{x:k.x+Math.cos(v)*w,y:k.y+Math.sin(v)*w*-1},{x:f.x+Math.cos(v)*w,y:f.y+Math.sin(v)*w*-1}],o?(C=o.points,0<=(g=Math.atan2(C[1].y-C[0].y,C[0].x-C[1].x)-Math.atan2(b[0].y-b[1].y,b[1].x-b[0].x))&&g<=Math.PI?R={type:"line",points:m,inside:!0}:(y=Zt(C[0],C[1],t),_=Zt(m[1],m[0],t),p=C[0],k=m[1],v=(f=y).x-p.x,w=f.y-p.y,g=k.x-_.x,f=k.y-_.y,k=(-w*(p.x-_.x)+v*(p.y-_.y))/(-g*w+v*f),f=(g*(p.y-_.y)-f*(p.x-_.x))/(-g*w+v*f),R=(w=0<=k&&k<=1&&0<=f&&f<=1?{x:p.x+f*v,y:p.y+f*w}:null)?{type:"line",points:[C[1]=w,m[1]]}:(C[1]=d(_,y)?_:y,{type:"line",points:[_,m[1]]}),o.len=Qe(C[0],C[1]))):R={type:"line",points:m},R.len=Qe(R.points[0],R.points[1]),s.push(o=R)):(s.push({type:"cubic",points:function(F,$,B,x,H,I){for(var u,T,D=Lt(F,$,B,x)/I,E=1/(I<H?H/I*D:D),z=[],W=0;T=(90-(u=kt(F,$,B,x,W)).angle)*(Math.PI/180),z.push({x:u.x+Math.cos(T)*H,y:u.y+Math.sin(T)*H*-1}),!(1<=W);)1<(W+=E)&&(W=1);return z}(b[0],b[1],b[2],b[3],t,16)}),o=null)}),o=null,s.forEach(function(b){var m;o=b.type==="line"?(b.inside&&(o.len>t?((m=o.points)[1]=Zt(m[0],m[1],-t),o.len=Qe(m[0],m[1])):(o.points=null,o.len=0),b.len>t+n?((m=b.points)[0]=Zt(m[1],m[0],-(t+n)),b.len=Qe(m[0],m[1])):(b.points=null,b.len=0)),b):null}),s.reduce(function(b,m){var R=m.points;return R&&(l&&d(R[0],l)||b.push({type:"M",values:[R[0].x,R[0].y]}),m.type==="line"?b.push({type:"L",values:[R[1].x,R[1].y]}):(R.shift(),R.forEach(function(C){b.push({type:"L",values:[C.x,C.y]})})),l=R[R.length-1]),b},[])},newText:function(e,t,n,o){var l,s,d,b,m=t.createElementNS(Q,"defs"),R=m.appendChild(t.createElementNS(Q,"path"));return R.id=l=n+"-path",(d=(s=t.createElementNS(Q,"text")).appendChild(t.createElementNS(Q,"textPath"))).href.baseVal="#"+l,d.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),d.textContent=e,typeof N!="boolean"&&(N="paintOrder"in s.style),o&&!N?(s.id=e=n+"-text",m.appendChild(s),(b=(n=t.createElementNS(Q,"g")).appendChild(t.createElementNS(Q,"use"))).href.baseVal="#"+e,(t=n.appendChild(t.createElementNS(Q,"use"))).href.baseVal="#"+e,(b=b.style).strokeLinejoin="round",{elmPosition:s,elmPath:R,elmOffset:d,styleText:s.style,styleFill:t.style,styleStroke:b,styleShow:n.style,elmsAppend:[m,n]}):(b=s.style,o&&(b.strokeLinejoin="round",b.paintOrder="stroke"),{elmPosition:s,elmPath:R,elmOffset:d,styleText:b,styleFill:b,styleStroke:o?b:null,styleShow:b,elmsAppend:[m,s]})},initSvg:function(e,t){var n,o,l,s=r.pathLabel.newText(e.text,t.baseWindow.document,de+"-pathLabel-"+e._id,e.outlineColor);["elmPosition","elmPath","elmOffset","styleFill","styleShow","elmsAppend"].forEach(function(d){e[d]=s[d]}),e.isShown=!1,e.styleShow.visibility="hidden",r.captionLabel.textStyleProps.forEach(function(d){e[d]!=null&&(s.styleText[d]=e[d])}),s.elmsAppend.forEach(function(d){t.svg.appendChild(d)}),s.elmPath.setPathData([{type:"M",values:[0,100]},{type:"h",values:[100]}]),vt&&(l=s.elmOffset.href.baseVal,s.elmOffset.href.baseVal=""),n=s.elmPosition.getBBox(),vt&&(s.elmOffset.href.baseVal=l),s.styleText.textAnchor=["start","end","middle"][e.semIndex],e.semIndex!==2||e.lineOffset||s.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,50),e.height=n.height,e.outlineColor&&(o=n.height/9,s.styleStroke.strokeWidth=(o=10<o?10:o<2?2:o)+"px",s.styleStroke.stroke=e.outlineColor),e.strokeWidth=o||0,Re(e.aplStats,r.pathLabel.stats),e.updateColor(t),e.updatePath(t),e.updateStartOffset(t),Ce&&qe(t,{}),e.updateShow(t)},bind:function(e,t){var n=t.props;return e.color||xe(n,"cur_line_color",e.updateColor),xe(n,"cur_line_strokeWidth",e.updatePath),xe(n,"apl_path",e.updatePath),e.semIndex=t.optionName==="startLabel"?0:t.optionName==="endLabel"?1:2,e.semIndex===2&&!e.lineOffset||xe(n,"cur_attach_plugBackLenSE",e.updateStartOffset),xe(n,"svgShow",e.updateShow),Ce&&xe(n,"new_edge4viewBox",e.adjustEdge),r.pathLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(o){n.svg.removeChild(o)}),e.elmPosition=e.elmPath=e.elmOffset=e.styleFill=e.styleShow=e.elmsAppend=null),Re(e.curStats,r.pathLabel.stats),Re(e.aplStats,r.pathLabel.stats),e.color||_e(n,"cur_line_color",e.updateColor),_e(n,"cur_line_strokeWidth",e.updatePath),_e(n,"apl_path",e.updatePath),e.semIndex===2&&!e.lineOffset||_e(n,"cur_attach_plugBackLenSE",e.updateStartOffset),_e(n,"svgShow",e.updateShow),Ce&&(_e(n,"new_edge4viewBox",e.adjustEdge),qe(n,{}))},removeOption:function(e,t){var n=t.props,o={};o[t.optionName]="",tn(n,o)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){r.pathLabel.unbind(e,t)}))}}},Object.keys(r).forEach(function(e){Ze[e]=function(){return new c(r[e],Array.prototype.slice.call(arguments))}}),Ze.positionByWindowResize=!0,window.addEventListener("resize",St.add(function(){Ze.positionByWindowResize&&Object.keys(Be).forEach(function(e){qe(Be[e],{position:!0})})}),!1),Ze}(),ta=wo;const vo=se('<div class="card-target"></div>'),na={color:"#00ff07",size:10,dropShadow:!0,endPlug:"arrow3"};function So(){let a,i,r;const{state:c}=He(),h=Oe(()=>c.target.from&&!c.target.to),S=Oe(()=>c.target.from&&c.target.to),O=N=>{a.style.left=`${N.pageX+a.offsetWidth/2}px`,a.style.top=`${N.pageY+a.offsetHeight/2}px`,r?.position?.()},A=()=>{i?.position?.(),r?.position?.()};return Gt(()=>{!c.target.to&&!c.target.from&&(i?.remove?.(),i=null,r?.remove?.(),r=null)}),Gt(()=>{if(h()){r?.remove?.();const N=document.getElementById(c.target.from);N&&a&&(r=new ta(N,a,na),document.body.addEventListener("mousemove",O,!0))}}),Gt(()=>{if(S()){i?.remove?.(),document.body.removeEventListener("mousemove",O,!0);const N=document.getElementById(c.target.from),P=document.getElementById(c.target.to);N&&P&&(i=new ta(N,P,{...na,dash:{animation:!0}}),r=r?.remove?.())}}),gn(()=>{i?.remove?.(),r?.remove?.(),document.body.addEventListener("resize",A,!0)}),Nn(()=>{i?.remove?.(),r?.remove?.(),document.body.removeEventListener("mousemove",O,!0),document.body.removeEventListener("resize",A,!0)}),(()=>{const N=vo.cloneNode(!0),P=a;return typeof P=="function"?mt(P,N):a=N,N})()}const ga=""+new URL("card-back.1c57677c.png",import.meta.url).href;const ko=se('<button class="card-action-button">\u21F1</button>'),Eo=se('<button class="card-action-button">\u2316</button>'),To=se('<div draggable><div class="card-actions"></div><img></div>');function ba(a){const{state:i,setState:r,sendMessage:c}=He(),h=["battle-zone","the-think-tank","buffer-zone"].includes(a.location),S=["look-hand","stowed-hand"].includes(a.location),O=S&&a.opponent||a.card.faceDown,A=!S&&!(O&&a.opponent),N=!a.opponent&&!S,P=J=>{!N||(J.stopPropagation(),r({target:{from:a.card.uuid,to:null}}))},G=()=>{const J=i.target.from===a.card.uuid,ye={from:J?null:i.target.from,to:J?null:a.card.uuid};r({target:ye}),c({type:"target",params:{target:ye}})},j=()=>{a.opponent||c({type:"tap",params:{cardUuid:a.card.uuid}})},te=J=>{a.opponent||J.dataTransfer.setData("text",a.card.uuid)},ce=()=>{a.opponent&&O||(i.focus.current?.uuid===a.card.uuid?ae():r(J=>({focus:{...J.focus,current:a.card}})))},ae=()=>{a.opponent&&O||r(J=>({focus:{...J.focus,current:null}}))},be=()=>{a.opponent&&O||r(J=>({focus:{...J.focus,hover:a.card}}))},me=()=>{a.opponent&&O||r(J=>({focus:{...J.focus,hover:null}}))},pe=()=>{h&&j()},he=J=>{switch(J.detail){case 1:{i.target.from&&!i.target.to&&G(),ce();break}case 2:{pe();break}}},we=J=>{J.stopPropagation(),r(ye=>({focus:{...ye.focus,spotlight:a.card}}))},ve=()=>{let J="card";return a.opponent&&(J+=" opponent"),i.focus.current?.uuid===a.card.uuid&&(J+=" focus"),a.card.tapped&&(J+=" tapped"),J};return(()=>{const J=To.cloneNode(!0),ye=J.firstChild,de=ye.nextSibling;return J.addEventListener("dragstart",te),J.addEventListener("pointerleave",me),J.addEventListener("pointerenter",be),J.$$click=he,U(ye,q($e,{when:A,get children(){const le=ko.cloneNode(!0);return le.$$click=we,le}}),null),U(ye,q($e,{when:N,get children(){const le=Eo.cloneNode(!0);return le.$$click=P,le}}),null),Ae(le=>{const Ie=ve(),Le=a.card.uuid,De=O?ga:ya(a.card.id);return Ie!==le._v$&&Ue(J,le._v$=Ie),Le!==le._v$2&&Ft(de,"id",le._v$2=Le),De!==le._v$3&&Ft(de,"src",le._v$3=De),le},{_v$:void 0,_v$2:void 0,_v$3:void 0}),J})()}Ct(["click"]);const Ao=se('<fieldset><legend><div class="count"><span class="yellow">\u250B</span></div></legend></fieldset>');function yn(a){let i;const{state:r,sendMessage:c}=He(),h=Oe(()=>{const P=r.game.puppetMasters.find(({id:G})=>a.opponent?G!==r.user.id:G===r.user.id);return a.stowed?P.hand.stowed:P.hand.look}),S=P=>{a.opponent||!a.stowed||(P.preventDefault(),i.classList.add("drag-over"))},O=()=>{a.opponent||!a.stowed||i.classList.remove("drag-over")},A=P=>{if(a.opponent||!a.stowed)return;P.preventDefault(),i.classList.remove("drag-over");const G=P.dataTransfer.getData("text");c({type:"play",params:{cardUuid:G,destination:a.stowed?"stowed-hand":"look-hand"}})},N=()=>{let P="hand";return a.stowed&&(P+=" stowed"),a.opponent&&(P+=" opponent"),P};return(()=>{const P=Ao.cloneNode(!0),G=P.firstChild,j=G.firstChild;j.firstChild,P.addEventListener("drop",A),P.addEventListener("dragleave",O),P.addEventListener("dragover",S);const te=i;return typeof te=="function"?mt(te,P):i=P,U(G,()=>a.stowed?"Stowed":"Look",j),U(j,()=>h().length,null),U(P,q(Ht,{get each(){return h()},children:ce=>q(ba,{card:ce,get faceDown(){return a.opponent},get opponent(){return a.opponent},get location(){return a.stowed?"stowed-hand":"look-hand"}})}),null),Ae(()=>Ue(P,N())),P})()}const Io=se('<div class="game-header grunge"></div>');function Co(){const{state:a}=He(),i=Oe(()=>a.game.puppetMasters.length===1);return q($e,{get when(){return!i()},get children(){const r=Io.cloneNode(!0);return U(r,q(yn,{opponent:!0}),null),U(r,q(yn,{stowed:!0,opponent:!0}),null),r}})}const xo=se('<div><div class="card-pile-label"></div><div class="card-back"><div class="card-count"></div><img></div></div>');function on(a){let i;const{state:r,sendMessage:c}=He(),h=N=>{N.preventDefault(),i.classList.add("drag-over")},S=()=>{i.classList.remove("drag-over")},O=N=>{N.preventDefault(),i.classList.remove("drag-over");const P=N.dataTransfer.getData("text");c({type:"move",params:{cardUuid:P,destination:a.name}})},A=()=>{switch(a.name){case"deck":return"Deck";case"discard-pile":return"Discard";default:return""}};return(()=>{const N=xo.cloneNode(!0),P=N.firstChild,G=P.nextSibling,j=G.firstChild,te=j.nextSibling;N.addEventListener("drop",O),N.addEventListener("dragleave",S),N.addEventListener("dragover",h);const ce=i;return typeof ce=="function"?mt(ce,N):i=N,U(P,A),U(j,()=>a.cards.length),Ft(te,"src",ga),Ae(ae=>{const be=`card-pile ${a.name}${a.opponent?" opponent":""}`,me=a.cards.length===0?"empty":"";return be!==ae._v$&&Ue(N,ae._v$=be),me!==ae._v$2&&Ue(te,ae._v$2=me),ae},{_v$:void 0,_v$2:void 0}),N})()}const _o=se('<div class="opponent"><fieldset><legend class="white"></legend><div class="stats"><div class="stat panel"><div class="stat-label">Narrative</div><div class="stat-number"></div></div><div class="stat panel"><div class="stat-label">Funding</div><div class="stat-number"></div></div></div><div class="card-piles"></div></fieldset></div>'),Mo=se('<button class="end-turn-button button">End My Turn</button>'),Oo=se('<div class="left-side-bar grunge"><div class="turn panel"><div class="turn-label"></div><div class="turn-number"></div></div><div class="me"><fieldset><legend class="white"></legend><div class="card-piles"></div><div class="stats"><div class="stat panel"><div class="stat-label">Narrative</div><div class="stat-number"></div></div><div class="stat panel"><div class="stat-label">Funding</div><div class="stat-number"></div></div></div></fieldset></div></div>');function No(){const{state:a,sendMessage:i}=He(),r=Oe(()=>a.game.puppetMasters.find(({id:P})=>P===a.user.id)),c=Oe(()=>a.game.puppetMasters.length===1),h=Oe(()=>a.game.turn.player===a.user.id),S=Oe(()=>c()?null:a.game.puppetMasters.find(({id:P})=>P!==a.user.id)),O=P=>a.room.users.find(G=>G.id===P)?.name,A=Oe(()=>{if(c())return null;const P=S()?.id;return O(P)}),N=()=>{i({type:"end-turn"})};return(()=>{const P=Oo.cloneNode(!0),G=P.firstChild,j=G.firstChild,te=j.nextSibling,ce=G.nextSibling,ae=ce.firstChild,be=ae.firstChild,me=be.nextSibling,pe=me.nextSibling,he=pe.firstChild,we=he.firstChild,ve=we.nextSibling,J=he.nextSibling,ye=J.firstChild,de=ye.nextSibling;return U(P,q($e,{get when(){return!c()},get children(){const le=_o.cloneNode(!0),Ie=le.firstChild,Le=Ie.firstChild,De=Le.nextSibling,at=De.firstChild,gt=at.firstChild,Vt=gt.nextSibling,xt=at.nextSibling,_t=xt.firstChild,Ut=_t.nextSibling,Mt=De.nextSibling;return U(Le,A),U(Vt,()=>S().narrative),U(Ut,()=>S().funding),U(Mt,q(on,{name:"deck",get cards(){return S().deck}}),null),U(Mt,q(on,{name:"discard-pile",get cards(){return S().discardPile}}),null),le}}),G),U(j,(()=>{const le=Ha(()=>!!h(),!0);return()=>le()?"Your Turn":`${A()}'s Turn`})()),U(te,()=>a.game.turn.number),U(G,q($e,{get when(){return h()},get children(){const le=Mo.cloneNode(!0);return le.$$click=N,le}}),null),U(be,()=>a.user.name),U(me,q(on,{name:"deck",get cards(){return r().deck}}),null),U(me,q(on,{name:"discard-pile",get cards(){return r().discardPile}}),null),U(ve,()=>r().narrative),U(de,()=>r().funding),P})()}Ct(["click"]);const Po=se('<div class="name teal"></div>'),Ro=se('<div class="cost yellow"><span class="white">Cost:</span> </div>'),Lo=se('<div class="type"><span class="white">Type:</span> </div>'),Do=se('<div class="subtype"><span class="white">Subtype:</span> </div>'),Bo=se('<div class="faction"><span class="white">Faction:</span> </div>'),Go=se('<div class="body-text"></div>'),Ho=se('<div class="card-focus"><div class="focused-card"></div></div>');function Fo(){const{state:a}=He(),i=Oe(()=>a.focus.hover||a.focus.current);return(()=>{const r=Ho.cloneNode(!0),c=r.firstChild;return U(c,q($e,{get when(){return i()},get children(){return[(()=>{const h=Po.cloneNode(!0);return U(h,()=>i().name),h})(),(()=>{const h=Ro.cloneNode(!0);return h.firstChild.nextSibling,U(h,()=>i().cost,null),h})(),(()=>{const h=Lo.cloneNode(!0);return h.firstChild.nextSibling,U(h,()=>i().type,null),h})(),(()=>{const h=Do.cloneNode(!0);return h.firstChild.nextSibling,U(h,()=>i().subType,null),h})(),(()=>{const h=Bo.cloneNode(!0);return h.firstChild.nextSibling,U(h,()=>i().faction,null),h})(),(()=>{const h=Go.cloneNode(!0);return U(h,()=>i().bodyText),h})()]}})),r})()}const Wo=se('<div><div class="options"></div><div class="game-chat"></div></div>');function zo(){const{state:a,setState:i,sendMessage:r}=He(),c=()=>{r({type:"leave-game"})};return(()=>{const h=Wo.cloneNode(!0),S=h.firstChild,O=S.nextSibling;return U(S,q(pt,{get label(){return a.chatExpanded?"Hide Chat":"Show Chat"},onClick:()=>i({chatExpanded:!a.chatExpanded}),small:!0}),null),U(S,q(pt,{label:"Leave",onClick:c,color:"red",small:!0}),null),U(h,q(Fo,{}),O),U(O,q($e,{get when(){return a.chatExpanded},get children(){return q(ma,{small:!0})}})),Ae(()=>Ue(h,`right-side-bar grunge${a.chatExpanded?" chat-expanded":""}`)),h})()}const $o=se('<div class="plasma"></div>'),Vo=se("<div></div>");function Uo(){return(()=>{const i=$o.cloneNode(!0);return U(i,()=>[...Array(10)].map((r,c)=>(()=>{const h=Vo.cloneNode(!0);return Ue(h,`bubble x${c+1}`),h})())),i})()}const Yo=se("<div></div>");function rn(a){let i;const{state:r,sendMessage:c}=He(),h=Oe(()=>{const N=r.game.puppetMasters.find(j=>a.opponent?j.id!==r.user.id:j.id===r.user.id),P=yo(a.name);return N.board[P]||[]}),S=N=>{a.opponent||(N.preventDefault(),i.classList.add("drag-over"))},O=()=>{a.opponent||i.classList.remove("drag-over")},A=N=>{if(a.opponent)return;N.preventDefault(),i.classList.remove("drag-over");const P=N.dataTransfer.getData("text");c({type:"play",params:{cardUuid:P,destination:a.name}})};return(()=>{const N=Yo.cloneNode(!0);N.addEventListener("drop",A),N.addEventListener("dragleave",O),N.addEventListener("dragover",S);const P=i;return typeof P=="function"?mt(P,N):i=N,U(N,()=>h().map(G=>q(ba,{card:G,get opponent(){return a.opponent},get location(){return a.name}}))),Ae(()=>Ue(N,`zone panel grunge ${a.name}${a.opponent?" opponent":""}`)),N})()}const Ko=se('<div class="main-board-separator grunge"></div>'),jo=se('<div><div class="main-board-left"></div><div class="main-board-right panel light-grunge"><div class="location-card"><fieldset><legend>Location</legend></fieldset></div></div></div>');function qo(){const{state:a}=He(),i=Oe(()=>a.game.puppetMasters.length===1);return(()=>{const r=jo.cloneNode(!0),c=r.firstChild;return U(c,q($e,{get when(){return!i()},get children(){return[q(rn,{name:"the-think-tank",opponent:!0}),q(rn,{name:"battle-zone",opponent:!0}),(()=>{const h=Ko.cloneNode(!0);return U(h,q(Uo,{})),h})()]}}),null),U(c,q(rn,{name:"battle-zone"}),null),U(c,q(rn,{name:"the-think-tank"}),null),Ae(()=>Ue(r,`main-board ${i()?" solo-play":""}`)),r})()}const Zo=se('<div class="game-footer panel grunge"></div>');function Xo(){return(()=>{const a=Zo.cloneNode(!0);return U(a,q(yn,{}),null),U(a,q(yn,{stowed:!0}),null),a})()}const Jo=se('<div class="game-board"></div>');function Qo(){const{state:a,setState:i}=He(),r=c=>{const h=document.querySelector(".main-board");c.target.id!==a.focus.current?.uuid&&h.contains(c.target)&&i(O=>({focus:{...O.focus,current:null}}))};return[(()=>{const c=Jo.cloneNode(!0);return c.$$click=r,U(c,q(Co,{}),null),U(c,q(No,{}),null),U(c,q(qo,{}),null),U(c,q(zo,{}),null),U(c,q(Xo,{}),null),c})(),q(bo,{}),q(So,{})]}Ct(["click"]);const ei=se('<div class="app"></div>'),ti=se('<div class="orientation"><h3>Please turn your device sideways to landscape mode.</h3></div>');function ni(){const{state:a}=He();screen?.orientation?.lock?.("landscape");const i=Oe(()=>!!a.room||!!a.lobby.find(r=>r.id===a.user.id));return[(()=>{const r=ei.cloneNode(!0);return U(r,q($e,{get when(){return i()},get fallback(){return q(Ja,{})},get children(){return[q($e,{get when(){return a.game},get children(){return q(Qo,{})}}),q($e,{get when(){return a.room&&!a.game},get children(){return q(po,{})}}),q($e,{get when(){return!a.room&&!a.game},get children(){return q(oo,{})}})]}})),r})(),ti.cloneNode(!0)]}Wa(()=>q(ni,{}),document.getElementById("root"));
