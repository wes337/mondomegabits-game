(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const O={};function ct(e){O.context=e}const ht=(e,t)=>e===t,z=Symbol("solid-proxy"),ve=Symbol("solid-track"),le={equals:ht};let We=je;const W=1,ce=2,$e={owned:null,cleanups:null,context:null,owner:null};var M=null;let $=null,E=null,R=null,F=null,Ie=0;function se(e,t){const a=E,o=M,n=e.length===0,i=n?$e:{owned:null,cleanups:null,context:null,owner:t||o},r=n?e:()=>e(()=>K(()=>Re(i)));M=i,E=null;try{return J(r,!0)}finally{E=a,M=o}}function x(e,t){t=t?Object.assign({},le,t):le;const a={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=n=>(typeof n=="function"&&(n=n(a.value)),_e(a,n));return[Ye.bind(a),o]}function N(e,t,a){const o=Me(e,t,!1,W);ae(o)}function ze(e,t,a){We=yt;const o=Me(e,t,!1,W);o.user=!0,F?F.push(o):ae(o)}function C(e,t,a){a=a?Object.assign({},le,a):le;const o=Me(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=a.equals||void 0,ae(o),Ye.bind(o)}function ut(e){return J(e,!1)}function K(e){let t,a=E;return E=null,t=e(),E=a,t}function Ce(e){ze(()=>K(e))}function Ke(e){return M===null||(M.cleanups===null?M.cleanups=[e]:M.cleanups.push(e)),e}function Ue(){return E}function Ye(){const e=$;if(this.sources&&(this.state||e))if(this.state===W||e)ae(this);else{const t=R;R=null,J(()=>ue(this),!1),R=t}if(E){const t=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(t)):(E.sources=[this],E.sourceSlots=[t]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return this.value}function _e(e,t,a){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&J(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],r=$&&$.running;r&&$.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?R.push(i):F.push(i),i.observers&&qe(i)),r||(i.state=W)}if(R.length>1e6)throw R=[],new Error},!1)),t}function ae(e){if(!e.fn)return;Re(e);const t=M,a=E,o=Ie;E=M=e,dt(e,e.value,o),E=a,M=t}function dt(e,t,a){let o;try{o=e.fn(t)}catch(n){e.pure&&(e.state=W),Ve(n)}(!e.updatedAt||e.updatedAt<=a)&&(e.updatedAt!=null&&"observers"in e?_e(e,o):e.value=o,e.updatedAt=a)}function Me(e,t,a,o=W,n){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:M,context:null,pure:a};return M===null||M!==$e&&(M.owned?M.owned.push(i):M.owned=[i]),i}function he(e){const t=$;if(e.state===0||t)return;if(e.state===ce||t)return ue(e);if(e.suspense&&K(e.suspense.inFallback))return e.suspense.effects.push(e);const a=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ie);)(e.state||t)&&a.push(e);for(let o=a.length-1;o>=0;o--)if(e=a[o],e.state===W||t)ae(e);else if(e.state===ce||t){const n=R;R=null,J(()=>ue(e,a[0]),!1),R=n}}function J(e,t){if(R)return e();let a=!1;t||(R=[]),F?a=!0:F=[],Ie++;try{const o=e();return mt(a),o}catch(o){R||(F=null),Ve(o)}}function mt(e){if(R&&(je(R),R=null),e)return;const t=F;F=null,t.length&&J(()=>We(t),!1)}function je(e){for(let t=0;t<e.length;t++)he(e[t])}function yt(e){let t,a=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[a++]=o:he(o)}for(O.context&&ct(),t=0;t<a;t++)he(e[t])}function ue(e,t){const a=$;e.state=0;for(let o=0;o<e.sources.length;o+=1){const n=e.sources[o];n.sources&&(n.state===W||a?n!==t&&he(n):(n.state===ce||a)&&ue(n,t))}}function qe(e){const t=$;for(let a=0;a<e.observers.length;a+=1){const o=e.observers[a];(!o.state||t)&&(o.state=ce,o.pure?R.push(o):F.push(o),o.observers&&qe(o))}}function Re(e){let t;if(e.sources)for(;e.sources.length;){const a=e.sources.pop(),o=e.sourceSlots.pop(),n=a.observers;if(n&&n.length){const i=n.pop(),r=a.observerSlots.pop();o<n.length&&(i.sourceSlots[r]=o,n[o]=i,a.observerSlots[o]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)Re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ft(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ve(e){throw e=ft(e),e}const pt=Symbol("fallback");function Be(e){for(let t=0;t<e.length;t++)e[t]()}function gt(e,t,a={}){let o=[],n=[],i=[],r=0,s=t.length>1?[]:null;return Ke(()=>Be(i)),()=>{let h=e()||[],c,l;return h[ve],K(()=>{let y=h.length,p,v,b,A,m,w,T,k,S;if(y===0)r!==0&&(Be(i),i=[],o=[],n=[],r=0,s&&(s=[])),a.fallback&&(o=[pt],n[0]=se(D=>(i[0]=D,a.fallback())),r=1);else if(r===0){for(n=new Array(y),l=0;l<y;l++)o[l]=h[l],n[l]=se(d);r=y}else{for(b=new Array(y),A=new Array(y),s&&(m=new Array(y)),w=0,T=Math.min(r,y);w<T&&o[w]===h[w];w++);for(T=r-1,k=y-1;T>=w&&k>=w&&o[T]===h[k];T--,k--)b[k]=n[T],A[k]=i[T],s&&(m[k]=s[T]);for(p=new Map,v=new Array(k+1),l=k;l>=w;l--)S=h[l],c=p.get(S),v[l]=c===void 0?-1:c,p.set(S,l);for(c=w;c<=T;c++)S=o[c],l=p.get(S),l!==void 0&&l!==-1?(b[l]=n[c],A[l]=i[c],s&&(m[l]=s[c]),l=v[l],p.set(S,l)):i[c]();for(l=w;l<y;l++)l in b?(n[l]=b[l],i[l]=A[l],s&&(s[l]=m[l],s[l](l))):n[l]=se(d);n=n.slice(0,r=y),o=h.slice(0)}return n});function d(y){if(i[l]=y,s){const[p,v]=x(l);return s[l]=v,t(h[l],p)}return t(h[l])}}}function f(e,t){return K(()=>e(t||{}))}function Q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(gt(()=>e.each,e.children,t||void 0))}function B(e){let t=!1;const a=e.keyed,o=C(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return C(()=>{const n=o();if(n){const i=e.children,r=typeof i=="function"&&i.length>0;return t=a||r,r?K(()=>i(n)):i}return e.fallback})}function bt(e,t){return C(e,void 0,t?void 0:{equals:t})}function wt(e,t,a){let o=a.length,n=t.length,i=o,r=0,s=0,h=t[n-1].nextSibling,c=null;for(;r<n||s<i;){if(t[r]===a[s]){r++,s++;continue}for(;t[n-1]===a[i-1];)n--,i--;if(n===r){const l=i<o?s?a[s-1].nextSibling:a[i-s]:h;for(;s<i;)e.insertBefore(a[s++],l)}else if(i===s)for(;r<n;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===a[i-1]&&a[s]===t[n-1]){const l=t[--n].nextSibling;e.insertBefore(a[s++],t[r++].nextSibling),e.insertBefore(a[--i],l),t[n]=a[i]}else{if(!c){c=new Map;let d=s;for(;d<i;)c.set(a[d],d++)}const l=c.get(t[r]);if(l!=null)if(s<l&&l<i){let d=r,y=1,p;for(;++d<n&&d<i&&!((p=c.get(t[d]))==null||p!==l+y);)y++;if(y>l-s){const v=t[r];for(;s<l;)e.insertBefore(a[s++],v)}else e.replaceChild(a[s++],t[r++])}else r++;else t[r++].remove()}}}const Fe="_$DX_DELEGATE";function Tt(e,t,a){let o;return se(n=>{o=n,t===document?e():u(t,e(),t.firstChild?null:void 0,a)}),()=>{o(),t.textContent=""}}function g(e,t,a){const o=document.createElement("template");o.innerHTML=e;let n=o.content.firstChild;return a&&(n=n.firstChild),n}function pe(e,t=window.document){const a=t[Fe]||(t[Fe]=new Set);for(let o=0,n=e.length;o<n;o++){const i=e[o];a.has(i)||(a.add(i),t.addEventListener(i,kt))}}function ke(e,t,a){a==null?e.removeAttribute(t):e.setAttribute(t,a)}function H(e,t){t==null?e.removeAttribute("class"):e.className=t}function vt(e,t,a,o){if(o)Array.isArray(a)?(e[`$$${t}`]=a[0],e[`$$${t}Data`]=a[1]):e[`$$${t}`]=a;else if(Array.isArray(a)){const n=a[0];e.addEventListener(t,a[0]=i=>n.call(e,a[1],i))}else e.addEventListener(t,a)}function V(e,t,a){return K(()=>e(t,a))}function u(e,t,a,o){if(a!==void 0&&!o&&(o=[]),typeof t!="function")return de(e,t,o,a);N(n=>de(e,t(),n,a),o)}function kt(e){const t=`$$${e.type}`;let a=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==a&&Object.defineProperty(e,"target",{configurable:!0,value:a}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return a||document}}),O.registry&&!O.done&&(O.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>o.remove()));a!==null;){const o=a[t];if(o&&!a.disabled){const n=a[`${t}Data`];if(n!==void 0?o.call(a,n,e):o.call(a,e),e.cancelBubble)return}a=a.host&&a.host!==a&&a.host instanceof Node?a.host:a.parentNode}}function de(e,t,a,o,n){for(O.context&&!a&&(a=[...e.childNodes]);typeof a=="function";)a=a();if(t===a)return a;const i=typeof t,r=o!==void 0;if(e=r&&a[0]&&a[0].parentNode||e,i==="string"||i==="number"){if(O.context)return a;if(i==="number"&&(t=t.toString()),r){let s=a[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),a=_(e,a,o,s)}else a!==""&&typeof a=="string"?a=e.firstChild.data=t:a=e.textContent=t}else if(t==null||i==="boolean"){if(O.context)return a;a=_(e,a,o)}else{if(i==="function")return N(()=>{let s=t();for(;typeof s=="function";)s=s();a=de(e,s,a,o)}),()=>a;if(Array.isArray(t)){const s=[],h=a&&Array.isArray(a);if(Se(s,t,a,n))return N(()=>a=de(e,s,a,o,!0)),()=>a;if(O.context){if(!s.length)return a;for(let c=0;c<s.length;c++)if(s[c].parentNode)return a=s}if(s.length===0){if(a=_(e,a,o),r)return a}else h?a.length===0?xe(e,s,o):wt(e,a,s):(a&&_(e),xe(e,s));a=s}else if(t instanceof Node){if(O.context&&t.parentNode)return a=r?[t]:t;if(Array.isArray(a)){if(r)return a=_(e,a,o,t);_(e,a,null,t)}else a==null||a===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);a=t}}return a}function Se(e,t,a,o){let n=!1;for(let i=0,r=t.length;i<r;i++){let s=t[i],h=a&&a[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=Se(e,s,h)||n;else if(typeof s=="function")if(o){for(;typeof s=="function";)s=s();n=Se(e,Array.isArray(s)?s:[s],Array.isArray(h)?h:[h])||n}else e.push(s),n=!0;else{const c=String(s);h&&h.nodeType===3&&h.data===c?e.push(h):e.push(document.createTextNode(c))}}return n}function xe(e,t,a){for(let o=0,n=t.length;o<n;o++)e.insertBefore(t[o],a)}function _(e,t,a,o){if(a===void 0)return e.textContent="";const n=o||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const s=t[r];if(n!==s){const h=s.parentNode===e;!i&&!r?h?e.replaceChild(n,s):e.insertBefore(n,a):h&&s.remove()}else i=!0}}else e.insertBefore(n,a);return[n]}const Ae=Symbol("store-raw"),ee=Symbol("store-node"),St=Symbol("store-name");function Je(e,t){let a=e[z];if(!a&&(Object.defineProperty(e,z,{value:a=new Proxy(e,It)}),!Array.isArray(e))){const o=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let i=0,r=o.length;i<r;i++){const s=o[i];if(n[s].get){const h=n[s].get.bind(a);Object.defineProperty(e,s,{get:h})}}}return a}function me(e){let t;return e!=null&&typeof e=="object"&&(e[z]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function te(e,t=new Set){let a,o,n,i;if(a=e!=null&&e[Ae])return a;if(!me(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,s=e.length;r<s;r++)n=e[r],(o=te(n,t))!==n&&(e[r]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let h=0,c=r.length;h<c;h++)i=r[h],!s[i].get&&(n=e[i],(o=te(n,t))!==n&&(e[i]=o))}return e}function ye(e){let t=e[ee];return t||Object.defineProperty(e,ee,{value:t={}}),t}function Ee(e,t,a){return e[t]||(e[t]=Xe(a))}function At(e,t){const a=Reflect.getOwnPropertyDescriptor(e,t);return!a||a.get||!a.configurable||t===z||t===ee||t===St||(delete a.value,delete a.writable,a.get=()=>e[z][t]),a}function Ze(e){if(Ue()){const t=ye(e);(t._||(t._=Xe()))()}}function Et(e){return Ze(e),Reflect.ownKeys(e)}function Xe(e){const[t,a]=x(e,{equals:!1,internal:!0});return t.$=a,t}const It={get(e,t,a){if(t===Ae)return e;if(t===z)return a;if(t===ve)return Ze(e),a;const o=ye(e),n=o.hasOwnProperty(t);let i=n?o[t]():e[t];if(t===ee||t==="__proto__")return i;if(!n){const r=Object.getOwnPropertyDescriptor(e,t);Ue()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(i=Ee(o,t,i)())}return me(i)?Je(i):i},has(e,t){if(t===Ae||t===z||t===ve||t===ee||t==="__proto__")return!0;const a=ye(e)[t];return a&&a(),t in e},set(){return!0},deleteProperty(){return!0},ownKeys:Et,getOwnPropertyDescriptor:At};function fe(e,t,a,o=!1){if(!o&&e[t]===a)return;const n=e[t],i=e.length;a===void 0?delete e[t]:e[t]=a;let r=ye(e),s;(s=Ee(r,t,n))&&s.$(()=>a),Array.isArray(e)&&e.length!==i&&(s=Ee(r,"length",i))&&s.$(e.length),(s=r._)&&s.$()}function Qe(e,t){const a=Object.keys(t);for(let o=0;o<a.length;o+=1){const n=a[o];fe(e,n,t[n])}}function Ct(e,t){if(typeof t=="function"&&(t=t(e)),t=te(t),Array.isArray(t)){if(e===t)return;let a=0,o=t.length;for(;a<o;a++){const n=t[a];e[a]!==n&&fe(e,a,n)}fe(e,"length",o)}else Qe(e,t)}function X(e,t,a=[]){let o,n=e;if(t.length>1){o=t.shift();const r=typeof o,s=Array.isArray(e);if(Array.isArray(o)){for(let h=0;h<o.length;h++)X(e,[o[h]].concat(t),a);return}else if(s&&r==="function"){for(let h=0;h<e.length;h++)o(e[h],h)&&X(e,[h].concat(t),a);return}else if(s&&r==="object"){const{from:h=0,to:c=e.length-1,by:l=1}=o;for(let d=h;d<=c;d+=l)X(e,[d].concat(t),a);return}else if(t.length>1){X(e[o],t,[o].concat(a));return}n=e[o],a=[o].concat(a)}let i=t[0];typeof i=="function"&&(i=i(n,a),i===n)||o===void 0&&i==null||(i=te(i),o===void 0||me(n)&&me(i)&&!Array.isArray(i)?Qe(n,i):fe(e,o,i))}function Mt(...[e,t]){const a=te(e||{}),o=Array.isArray(a),n=Je(a);function i(...r){ut(()=>{o&&r.length===1?Ct(a,r[0]):X(a,r)})}return[n,i]}const Rt={user:{id:"",name:""},connected:!1,lobby:[],room:null,rooms:{},game:void 0,focus:{current:null,hover:null},chatExpanded:!1},ie=new WebSocket("wss://mondo-megabits.herokuapp.com");function G(){const[e,t]=Mt(Rt),a=o=>{ie.send(JSON.stringify(o))};return ie.onopen=()=>{t({connected:!0}),setInterval(()=>{a({type:"ping"})},4e4)},ie.onclose=()=>{t({connected:!1})},ie.onmessage=o=>{const{type:n,params:i}=JSON.parse(o.data);switch(n){case"connected":{t({user:{name:"",id:i.id}});break}case"lobby":{t({lobby:i.users,room:null,rooms:i.otherRooms||[]});break}case"join":{const{roomCode:r,users:s}=i;t(h=>({lobby:h.lobby.filter(c=>c.id!==h.user.id),room:{code:r,users:s,chatMessages:h.room?.chatMessages||[]}}));break}case"leave":{const{userId:r}=i;t({room:r===e.user.id?null:{...e.room,users:e.room.users.filter(s=>s.id!==r)}});break}case"leave-game":{const{roomCode:r,users:s}=i;t({game:null,room:{code:r,users:s,chatMessages:e.room?.chatMessages||[]}});break}case"chat":{if(i.chatMessage.user.id!==e.user.id){t(r=>({room:{...r.room,chatMessages:[...r.room?.chatMessages||[],i.chatMessage]}}));break}break}case"ready":{const{userId:r,status:s}=i;t(h=>({room:{...h.room,users:h.room.users.map(c=>c.id!==r?c:{...c,status:s})}}));break}case"game":{const{game:r}=i;t({game:r});break}default:{console.log("Got unknown message type: ",n);break}}},{state:e,setState:t,sendMessage:a}}const Dt=g('<div class="connect"><div class="video"><video autoplay="true" loop="true" playsinline="true" muted><source type="video/mp4; codecs=&quot;av01.0.13M.10&quot;" src="https://cdn.mondomegabits.com/logo/Mondo flashing logo_r3 - strobe.mp4"></video></div><form class="puppet-master-handle-input"><label>Puppet Master Handle:</label><input type="text"><button class="connect-button button" type="submit">Connect</button></form></div>');function Nt(){let e;const{sendMessage:t,setState:a}=G(),[o,n]=x("");Ce(()=>{e.focus()});const i=r=>{r.preventDefault(),o().length!==0&&(t({type:"lobby",params:{userName:o()}}),a(s=>({user:{...s.user,name:o()}})))};return(()=>{const r=Dt.cloneNode(!0),s=r.firstChild,h=s.nextSibling,c=h.firstChild,l=c.nextSibling;h.addEventListener("submit",i),l.addEventListener("change",y=>n(y.target.value));const d=e;return typeof d=="function"?V(d,l):e=l,N(()=>l.value=o()),r})()}const Ht=g('<button type="button"><div class="circle"></div><div class="label"></div></button>');function q({label:e,onClick:t,disabled:a,color:o,small:n}){const i=()=>{let r="circle-button button";return o&&(r+=` ${o}`),n&&(r+=" small"),a&&(r+=" disabled"),r};return(()=>{const r=Ht.cloneNode(!0),s=r.firstChild,h=s.nextSibling;return vt(r,"click",t,!0),r.disabled=a,u(h,e),N(()=>H(r,i())),r})()}pe(["click"]);const Gt=g('<div class="plasma"></div>'),Pt=g("<div></div>");function Ot(){return(()=>{const t=Gt.cloneNode(!0);return u(t,()=>[...Array(10)].map((a,o)=>(()=>{const n=Pt.cloneNode(!0);return H(n,`bubble x${o+1}`),n})())),t})()}const Bt=g('<div class="modal"><div class="join-room panel"><form><label>Room code:</label><input type="text"><div class="modal-footer"><button class="button" type="submit">OK</button><button class="button" type="button">Cancel</button></div></form></div></div>'),Ft=g('<div class="lobby"><div class="rooms"><div class="headers yellow"><div class="header">Code</div><div class="header">Users</div><div class="header">Status</div></div><hr class="tall"></div><div class="users"><span class="yellow">/// </span>Puppet Masters Online:<hr class="top"><ul class="list"></ul><hr class="bottom"></div><div class="footer panel"></div></div>'),xt=g('<div class="room"><div class="room-code teal"></div><div class="room-users white"> / </div><div></div><div class="room-join"></div></div>'),Lt=g("<li></li>");function Wt(){const{state:e,sendMessage:t}=G(),[a,o]=x(!1),[n,i]=x(""),r=()=>{t({type:"create"})},s=h=>{h.preventDefault();const c=n();!c||t({type:"join",params:{roomCode:c}})};return(()=>{const h=Ft.cloneNode(!0),c=h.firstChild;c.firstChild.nextSibling;const d=c.nextSibling,y=d.firstChild,p=y.nextSibling,v=p.nextSibling,b=v.nextSibling,A=d.nextSibling;return u(c,f(Q,{get each(){return e.rooms},children:m=>(()=>{const w=xt.cloneNode(!0),T=w.firstChild,k=T.nextSibling,S=k.firstChild,D=k.nextSibling,P=D.nextSibling;return u(T,()=>m.code),u(k,()=>m.users,S),u(k,()=>m.maxUsers,null),u(D,()=>m.status.toUpperCase()),u(P,f(q,{label:"Join",get disabled(){return m.status!=="open"},onClick:()=>{t({type:"join",params:{roomCode:m.code}})},color:"red",small:!0})),N(()=>H(D,`room-status${m.status==="full"?" red":""}`)),w})()}),null),u(b,f(Q,{get each(){return e.lobby},children:m=>(()=>{const w=Lt.cloneNode(!0);return u(w,()=>m.name),N(()=>H(w,m.id===e.user.id?"glow":"white")),w})()})),u(A,f(q,{label:"Create",onClick:r}),null),u(A,f(q,{label:"Join",onClick:()=>{o(!0),i("")}}),null),u(h,f(B,{get when(){return a()},get children(){const m=Bt.cloneNode(!0),w=m.firstChild,T=w.firstChild,k=T.firstChild,S=k.nextSibling,D=S.nextSibling,P=D.firstChild,U=P.nextSibling;return T.addEventListener("submit",s),S.addEventListener("change",Y=>i(Y.target.value)),U.$$click=()=>o(!1),N(()=>P.disabled=n().length===0),N(()=>S.value=n()),m}}),null),h})()}pe(["click"]);const $t=g('<div class="message system"><p class="red italic"><span class="white">[ </span><span class="white"> ]</span></p><div class="message-date yellow"></div></div>'),zt=g('<div class="chat"><div class="messages"></div><form><input type="text"><button class="button" type="submit">Send</button></form></div>'),Kt=g('<div class="message"><p><span></span> </p><div class="message-date yellow"></div></div>');function et(){let e,t;const{state:a,setState:o,sendMessage:n}=G(),[i,r]=x("");Ce(()=>{t?.focus?.()}),ze(()=>{!e||a.room?.chatMessages.length===0||(e.scrollTop=e.scrollHeight)});const s=c=>{c.preventDefault();const l=i();if(l.length===0)return;const d={message:l,date:new Date().toLocaleTimeString("en-US")};o(y=>({room:{...y.room,chatMessages:[...y.room.chatMessages,{...d,user:y.user}]}})),n({type:"chat",params:{roomCode:a.room.code,chatMessage:d}}),r("")},h=c=>(()=>{const l=$t.cloneNode(!0),d=l.firstChild,y=d.firstChild,p=y.nextSibling,v=d.nextSibling;return u(d,()=>c.message,p),u(v,()=>c.date),l})();return(()=>{const c=zt.cloneNode(!0),l=c.firstChild,d=l.nextSibling,y=d.firstChild,p=e;typeof p=="function"?V(p,l):e=l,u(l,f(Q,{get each(){return a.room.chatMessages},children:b=>b.user.id==="SYSTEM"?h(b):(()=>{const A=Kt.cloneNode(!0),m=A.firstChild,w=m.firstChild;w.nextSibling;const T=m.nextSibling;return u(w,()=>b.user.name),u(m,()=>b.message,null),u(T,()=>b.date),N(()=>H(w,`message-user ${b.user.id===a.user.id?"teal":"white"}`)),A})()})),d.addEventListener("submit",s),y.addEventListener("change",b=>r(b.target.value));const v=t;return typeof v=="function"?V(v,y):t=y,N(()=>y.value=i()),c})()}const Ut=g('<div class="countdown"><h1 class="white">Starting in:</h1><div class="count"><span class="glow"></span></div></div>');function Yt({from:e=5,callback:t=()=>{}}){const[a,o]=x(),[n,i]=x(e),r=()=>{!a()&&n()>0&&o(setInterval(s,1e3))},s=()=>{let h=n()-1;i(h),h===0&&(clearInterval(a()),t?.())};return Ce(()=>{r()}),Ke(()=>{clearInterval(a())}),f(B,{get when(){return n()>0},get children(){const h=Ut.cloneNode(!0),c=h.firstChild,l=c.nextSibling,d=l.firstChild;return u(d,n),h}})}const _t=g('<div class="room"><div class="main"><div class="header"><div class="room-name"><hr class="dotted-double"><h1 class="wide color-change"></h1><hr class="dotted-double"></div></div></div><div class="users"><span class="yellow">/// </span>Puppet Masters In Room:<hr class="top"><ul class="list"></ul><hr class="bottom"></div><div class="footer panel"></div></div>'),jt=g('<li><div class="name"><span></span></div><div class="status"><div class="check"><span class="red">[</span><span class="yellow"></span><span class="red">]</span></div></div></li>');function qt(){const[e,t]=x(!1),{state:a,sendMessage:o}=G(),n=C(()=>!a.room?.users?.find(c=>c.status!=="ready")),i=C(()=>a.room?.users?.find(c=>c.id===a.user.id&&c.status==="ready")),r=()=>{o({type:"leave"})},s=()=>{o({type:"start"})},h=()=>{const c=!i(),l=c?"ready":"waiting";o({type:"ready",params:{roomCode:a.room.code,status:l}}),t(c)};return(()=>{const c=_t.cloneNode(!0),l=c.firstChild,d=l.firstChild,y=d.firstChild,p=y.firstChild,v=p.nextSibling,b=l.nextSibling,A=b.firstChild,m=A.nextSibling,w=m.nextSibling,T=w.nextSibling,k=b.nextSibling;return u(v,()=>a.room.code),u(d,f(B,{get when(){return n()},get children(){return f(Yt,{callback:s})}}),null),u(l,f(et,{}),null),u(T,f(Q,{get each(){return a.room.users},children:S=>(()=>{const D=jt.cloneNode(!0),P=D.firstChild,U=P.firstChild,Y=P.nextSibling,ge=Y.firstChild,be=ge.firstChild,we=be.nextSibling;return u(U,()=>S.name),u(we,()=>S.status==="ready"?"\u2713":" "),u(Y,()=>S.status.toUpperCase(),null),N(()=>H(U,S.id===a.user.id?"glow":"white")),D})()})),u(k,f(q,{get label(){return i()?"Unready":"Ready"},onClick:h,color:"red"}),null),u(k,f(q,{label:"Leave",onClick:r}),null),c})()}const Vt=[{id:1,name:"Wireless Vaccine+-",faction:"FAKE TECH",rarity:4,frameSize:"C",type:"Item",subtype:"Weapon",bodyText:`"Not feeling well? Well, maybe it's 'cause you're always on that phone."

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

Long Warp: Play one round of Rock-Paper-Scissors with your opponent. If you win, receive 1x Teleportation Token, giving you a free instant dodge from an attack of your choice. If you lose, discard the top card of your deck.`,variantId:131,fileStem:"0094a"}],Jt=e=>`https://mondomegabits.com/card/img/95/${e.fileStem}.jpg`,Zt=e=>{const t=Vt.find(a=>a.id.toString()===e.toString());return Jt(t)},Xt=e=>e.replace(/-([a-z])/g,t=>t[1].toUpperCase());const tt=""+new URL("card-back.1c57677c.png",import.meta.url).href;const Qt=g("<div draggable><img></div>");function at({card:e,opponent:t,location:a}){const{state:o,setState:n,sendMessage:i}=G(),r=a==="hand"&&t||e.faceDown,s=C(()=>["battle-zone","the-think-tank","buffer-zone"].includes(a)),h=()=>{t||i({type:"tap",params:{cardUuid:e.uuid,gameCode:o.game.id,roomCode:o.room.code}})},c=m=>{t||m.dataTransfer.setData("text",e.uuid)},l=()=>{t&&r||(o.focus.current?.uuid===e.uuid?d():n(m=>({focus:{...m.focus,current:e}})))},d=()=>{t&&r||n(m=>({focus:{...m.focus,current:null}}))},y=()=>{t&&r||n(m=>({focus:{...m.focus,hover:e}}))},p=()=>{t&&r||n(m=>({focus:{...m.focus,hover:null}}))},v=()=>{s()&&h()},b=m=>{switch(m.detail){case 1:l();break;case 2:v();break}},A=()=>{let m="card";return t&&(m+=" opponent"),o.focus.current?.uuid===e.uuid&&(m+=" focus"),e.tapped&&(m+=" tapped"),m};return(()=>{const m=Qt.cloneNode(!0),w=m.firstChild;return m.addEventListener("dragstart",c),m.addEventListener("pointerleave",p),m.addEventListener("pointerenter",y),m.$$click=b,N(T=>{const k=A(),S=e.uuid,D=r?tt:Zt(e.id);return k!==T._v$&&H(m,T._v$=k),S!==T._v$2&&ke(w,"id",T._v$2=S),D!==T._v$3&&ke(w,"src",T._v$3=D),T},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()}pe(["click"]);const ea=g("<div></div>");function Le({opponent:e}){const{state:t}=G(),a=C(()=>t.game.puppetMasters.find(({id:n})=>n===t.user.id)?.hand),o=C(()=>t.game.puppetMasters.find(({id:n})=>n!==t.user.id)?.hand);return(()=>{const n=ea.cloneNode(!0);return H(n,`hand${e?" opponent":""}`),u(n,f(Q,{get each(){return e?o():a()},children:i=>f(at,{card:i,faceDown:e,opponent:e,location:"hand"})})),n})()}const ta=g('<div class="name teal"></div>'),aa=g('<div class="cost yellow"><span class="white">Cost:</span> </div>'),na=g('<div class="type"><span class="white">Type:</span> </div>'),oa=g('<div class="subtype"><span class="white">Subtype:</span> </div>'),ia=g('<div class="faction"><span class="white">Faction:</span> </div>'),ra=g('<div class="body-text"></div>'),sa=g('<div class="card-focus"><div class="focused-card"></div></div>');function la(){const{state:e}=G(),t=C(()=>e.focus.hover||e.focus.current);return(()=>{const a=sa.cloneNode(!0),o=a.firstChild;return u(o,f(B,{get when(){return t()},get children(){return[(()=>{const n=ta.cloneNode(!0);return u(n,()=>t().name),n})(),(()=>{const n=aa.cloneNode(!0);return n.firstChild.nextSibling,u(n,()=>t().cost,null),n})(),(()=>{const n=na.cloneNode(!0);return n.firstChild.nextSibling,u(n,()=>t().type,null),n})(),(()=>{const n=oa.cloneNode(!0);return n.firstChild.nextSibling,u(n,()=>t().subType,null),n})(),(()=>{const n=ia.cloneNode(!0);return n.firstChild.nextSibling,u(n,()=>t().faction,null),n})(),(()=>{const n=ra.cloneNode(!0);return u(n,()=>t().bodyText),n})()]}})),a})()}const ca=g("<div></div>");function j({name:e,opponent:t}){let a;const{state:o,sendMessage:n}=G(),i=C(()=>{const c=o.game.puppetMasters.find(y=>t?y.id!==o.user.id:y.id===o.user.id),l=Xt(e);return c.board[l]||[]}),r=c=>{t||(c.preventDefault(),a.classList.add("drag-over"))},s=()=>{t||a.classList.remove("drag-over")},h=c=>{if(t)return;c.preventDefault(),a.classList.remove("drag-over");const l=c.dataTransfer.getData("text");n({type:"play",params:{cardUuid:l,destination:e,gameCode:o.game.id,roomCode:o.room.code}})};return(()=>{const c=ca.cloneNode(!0);c.addEventListener("drop",h),c.addEventListener("dragleave",s),c.addEventListener("dragover",r);const l=a;return typeof l=="function"?V(l,c):a=c,H(c,`zone panel grunge ${e}${t?" opponent":""}`),u(c,()=>i().map(d=>f(at,{card:d,opponent:t,location:e}))),c})()}const ha=g('<div><div class="card-pile-label"></div><div class="card-back"><div class="card-count"></div><img></div></div>');function re({name:e,cards:t,opponent:a,canView:o}){let n;const{state:i,sendMessage:r}=G(),s=d=>{d.preventDefault(),n.classList.add("drag-over")},h=()=>{n.classList.remove("drag-over")},c=d=>{d.preventDefault(),n.classList.remove("drag-over");const y=d.dataTransfer.getData("text");r({type:"move",params:{cardUuid:y,destination:e,gameCode:i.game.id,roomCode:i.room.code}})},l=()=>{switch(e){case"deck":return"Deck";case"discard-pile":return"Discard";default:return""}};return(()=>{const d=ha.cloneNode(!0),y=d.firstChild,p=y.nextSibling,v=p.firstChild,b=v.nextSibling;d.addEventListener("drop",c),d.addEventListener("dragleave",h),d.addEventListener("dragover",s);const A=n;return typeof A=="function"?V(A,d):n=d,H(d,`card-pile ${e}${a?" opponent":""}`),u(y,l),u(v,()=>t.length),ke(b,"src",tt),N(()=>H(b,t.length===0?"empty":"")),d})()}const ua=g('<div class="header grunge"></div>'),da=g('<div class="opponent"><fieldset><legend class="white"></legend><div class="stats"><div class="stat panel"><div class="stat-label">Narrative</div><div class="stat-number"></div></div><div class="stat panel"><div class="stat-label">Funding</div><div class="stat-number"></div></div></div><div class="card-piles"></div></fieldset></div>'),ma=g('<button class="end-turn-button button">End My Turn</button>'),ya=g('<div class="middle grunge"></div>'),fa=g('<div class="game-board"><div class="left-side-bar grunge"><div class="turn panel"><div class="turn-label"></div><div class="turn-number"></div></div><div class="me"><fieldset><legend class="white"></legend><div class="card-piles"></div><div class="stats"><div class="stat panel"><div class="stat-label">Narrative</div><div class="stat-number"></div></div><div class="stat panel"><div class="stat-label">Funding</div><div class="stat-number"></div></div></div></fieldset></div></div><div></div><div><div class="options"></div><div class="game-chat"><button class="expand-button button"></button></div></div><div class="footer panel grunge"></div></div>');function pa(){let e;const{state:t,setState:a,sendMessage:o}=G(),n=C(()=>t.game.puppetMasters.find(({id:p})=>p===t.user.id)),i=p=>t.room.users.find(v=>v.id===p)?.name,r=C(()=>t.game.puppetMasters.length===1),s=C(()=>r()?null:t.game.puppetMasters.find(({id:p})=>p!==t.user.id)),h=C(()=>{if(r())return null;const p=s()?.id;return i(p)}),c=C(()=>t.game.turn.player===t.user.id),l=()=>{o({type:"leave-game"})},d=()=>{o({type:"end-turn",params:{gameCode:t.game.id,roomCode:t.room.code}})},y=p=>{p.target.id!==t.focus.current?.uuid&&e.contains(p.target)&&a(b=>({focus:{...b.focus,current:null}}))};return(()=>{const p=fa.cloneNode(!0),v=p.firstChild,b=v.firstChild,A=b.firstChild,m=A.nextSibling,w=b.nextSibling,T=w.firstChild,k=T.firstChild,S=k.nextSibling,D=S.nextSibling,P=D.firstChild,U=P.firstChild,Y=U.nextSibling,ge=P.nextSibling,be=ge.firstChild,we=be.nextSibling,L=v.nextSibling,ne=L.nextSibling,De=ne.firstChild,Te=De.nextSibling,Ne=Te.firstChild,nt=ne.nextSibling;p.$$click=y,u(p,f(B,{get when(){return!r()},get children(){const I=ua.cloneNode(!0);return u(I,f(Le,{opponent:!0})),I}}),v),u(v,f(B,{get when(){return!r()},get children(){const I=da.cloneNode(!0),oe=I.firstChild,Z=oe.firstChild,Ge=Z.nextSibling,Pe=Ge.firstChild,ot=Pe.firstChild,it=ot.nextSibling,rt=Pe.nextSibling,st=rt.firstChild,lt=st.nextSibling,Oe=Ge.nextSibling;return u(Z,h),u(it,()=>s().narrative),u(lt,()=>s().funding),u(Oe,f(re,{name:"deck",get cards(){return s().deck}}),null),u(Oe,f(re,{name:"discard-pile",get cards(){return s().discardPile}}),null),I}}),b),u(A,(()=>{const I=bt(()=>!!c(),!0);return()=>I()?"Your Turn":`${h()}'s Turn`})()),u(m,()=>t.game.turn.number),u(b,f(B,{get when(){return c()},get children(){const I=ma.cloneNode(!0);return I.$$click=d,I}}),null),u(k,()=>t.user.name),u(S,f(re,{name:"deck",get cards(){return n().deck}}),null),u(S,f(re,{name:"discard-pile",get cards(){return n().discardPile}}),null),u(Y,()=>n().narrative),u(we,()=>n().funding);const He=e;return typeof He=="function"?V(He,L):e=L,u(L,f(B,{get when(){return!r()},get children(){return[f(j,{name:"the-think-tank",opponent:!0}),f(j,{name:"buffer-zone",opponent:!0}),f(j,{name:"battle-zone",opponent:!0}),(()=>{const I=ya.cloneNode(!0);return u(I,f(Ot,{})),I})()]}}),null),u(L,f(j,{name:"battle-zone"}),null),u(L,f(j,{name:"buffer-zone"}),null),u(L,f(j,{name:"the-think-tank"}),null),u(De,f(q,{label:"Leave",onClick:l,small:!0})),u(ne,f(la,{}),Te),Ne.$$click=()=>a({chatExpanded:!t.chatExpanded}),u(Ne,()=>t.chatExpanded?"Hide Chat":"Show Chat"),u(Te,f(B,{get when(){return t.chatExpanded},get children(){return f(et,{})}}),null),u(nt,f(Le,{})),N(I=>{const oe=`main${r()?" solo-play":""}`,Z=`right-side-bar grunge${t.chatExpanded?" chat-expanded":""}`;return oe!==I._v$&&H(L,I._v$=oe),Z!==I._v$2&&H(ne,I._v$2=Z),I},{_v$:void 0,_v$2:void 0}),p})()}pe(["click"]);const ga=g('<div class="app"></div>'),ba=g('<div class="orientation"><h3>Please turn your device sideways to landscape mode.</h3></div>');function wa(){const{state:e}=G();screen?.orientation?.lock?.("landscape");const t=C(()=>!!e.room||!!e.lobby.find(o=>o.id===e.user.id)),a=()=>e.game?f(pa,{}):e.room?f(qt,{}):f(Wt,{});return[(()=>{const o=ga.cloneNode(!0);return u(o,f(B,{get when(){return t()},get fallback(){return f(Nt,{})},get children(){return a()}})),o})(),ba.cloneNode(!0)]}Tt(()=>f(wa,{}),document.getElementById("root"));
