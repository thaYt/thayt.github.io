import{S as et,i as tt,s as nt,a as rt,e as B,c as at,b as H,g as he,t as F,d as me,f as J,h as z,j as ot,o as Oe,k as st,l as it,m as lt,n as ke,p as C,q as ct,r as ft,u as ut,v as X,w as Z,x as Pe,y as Q,z as x,A as fe}from"./chunks/index-2f022a03.js";import{g as Ke,f as Me,s as M,a as Le,b as dt,i as pt}from"./chunks/singletons-7b2e44cb.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function gt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const _t=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const s of _t){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(s)}return ge(r,e)};const oe=new Map;function kt(r,e){const n=Qe(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&oe.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(r,e)}function Rt(r,e,n){if(oe.size>0){const s=Qe(r,n),o=oe.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);oe.delete(s)}}return ge(e,n)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Lt(r).map((t,u,_)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(w)return e.push(w[1]),n.push(w[2]),s.push(!0),"(?:/([^/]+))?";const S=u===_.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map(($,q)=>{if(q%2){const T=St.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ee,W,ie,te]=T;return e.push(ie),n.push(te),s.push(!!ee),W?"(.*?)":ee?"([^/]*)?":"([^/]+?)"}return S&&$.includes(".")&&(o=!1),$.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function Lt(r){return r.slice(1).split("/").filter(Ot)}function It(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],_=n[t];let d=r[t+1];if(d||!s[t]){if(_){const g=o[_];if(!g)throw new Error(`Missing "${_}" param matcher`);if(!g(d))return}m[u]=d!=null?d:""}}return m}function jt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([u,[_,d,g]])=>{const{pattern:w,names:S,types:G,optional:K}=$t(u),$={id:u,exec:q=>{const T=w.exec(q);if(T)return It(T,{names:S,types:G,optional:K},s)},errors:[1,...g||[]].map(q=>r[q]),layouts:[0,...d||[]].map(t),leaf:m(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function m(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function t(u){return u===void 0?u:[o.has(u),r[u]]}}function At(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&x(e,t)}}}function Pt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&523&&(_.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&x(e,t)}}}function Nt(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=X(o,m(r))),{c(){e&&Z(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&Q(e,t,u),H(t,n,u),s=!0},p(t,u){const _={};if(u&8&&(_.data=t[3]),u&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),me()}o?(e=X(o,m(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&x(e,t)}}}function He(r){let e,n=r[5]&&We(r);return{c(){e=st("div"),n&&n.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);n&&n.l(o),o.forEach(z),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){H(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=We(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function We(r){let e;return{c(){e=ct(r[6])},l(n){e=ft(n,r[6])},m(n,s){H(n,e,s)},p(n,s){s&64&&ut(e,n[6])},d(n){n&&z(e)}}}function Ut(r){let e,n,s,o,m;const t=[Pt,At],u=[];function _(g,w){return g[0][1]?0:1}e=_(r),n=u[e]=t[e](r);let d=r[4]&&He(r);return{c(){n.c(),s=rt(),d&&d.c(),o=B()},l(g){n.l(g),s=at(g),d&&d.l(g),o=B()},m(g,w){u[e].m(g,w),H(g,s,w),d&&d.m(g,w),H(g,o,w),m=!0},p(g,[w]){let S=e;e=_(g),e===S?u[e].p(g,w):(he(),F(u[S],1,1,()=>{u[S]=null}),me(),n=u[e],n?n.p(g,w):(n=u[e]=t[e](g),n.c()),J(n,1),n.m(s.parentNode,s)),g[4]?d?d.p(g,w):(d=He(g),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(g){m||(J(n),m=!0)},o(g){F(n),m=!1},d(g){u[e].d(g),g&&z(s),d&&d.d(g),g&&z(o)}}}function Tt(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:_=null}=e;ot(s.page.notify);let d=!1,g=!1,w=null;return Oe(()=>{const S=s.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,_=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,u,_,d,g,w,s,o]}class Dt extends et{constructor(e){super(),tt(this,e,Tt,Ut,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const qt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ct=function(r,e){return new URL(r,e).href},Ye={},Re=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(m=>{if(m=Ct(m,s),m in Ye)return;Ye[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":qt,t||(d.as="script",d.crossOrigin=""),d.href=m,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},Vt={},_e=[()=>Re(()=>import("./chunks/0-6198687d.js"),["./chunks\\0-6198687d.js","./chunks\\_layout-8d2a742b.js","./components\\layout.svelte-5ebb9c3f.js","./chunks\\index-2f022a03.js"],import.meta.url),()=>Re(()=>import("./chunks/1-68a3462b.js"),["./chunks\\1-68a3462b.js","./components\\error.svelte-40a7fc09.js","./chunks\\index-2f022a03.js","./chunks\\singletons-7b2e44cb.js"],import.meta.url),()=>Re(()=>import("./chunks/2-c542bca4.js"),["./chunks\\2-c542bca4.js","./components\\pages\\_page.svelte-a3a8273e.js","./chunks\\index-2f022a03.js","./assets\\_page-89644ceb.css"],import.meta.url)],Bt=[],Ft={"/":[2]},Jt={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Mt=-3,Ht=-4,Wt=-5,Yt=-6;function Xt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===Gt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Wt)return-1/0;if(o===Yt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const d=new Map;n[o]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);n[o]=u;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Kt&&(u[_]=s(d))}}else{const u={};n[o]=u;for(const _ in t){const d=t[_];u[_]=s(d)}}return n[o]}return s(0)}const xe="sveltekit:scroll",V="sveltekit:index",ue=jt(_e,Bt,Ft,Vt),je=_e[0],Ae=_e[1];je();Ae();let se={};try{se=JSON.parse(sessionStorage[xe])}catch{}function Se(r){se[r]=Le()}function Zt({target:r,base:e,trailing_slash:n}){var Je;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,_=!1,d=!0,g=!1,w=!1,S=!1,G=!1,K,$=(Je=history.state)==null?void 0:Je[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const q=se[$];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let T,ee,W;async function ie(){W=W||Promise.resolve(),await W,W=null;const a=new URL(location.href),l=be(a,!0);o=null,await Ue(l,a,[])}async function te(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:f={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:l?Le():null,keepfocus:i,redirect_chain:h,details:{state:f,replaceState:c},nav_token:v,accepted:()=>{p&&(G=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:qe(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Ue(a,l,c,i,f={},p){var v,E;ee=f;let h=a&&await qe(a);if(h||(h=await Fe(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,ee!==f)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await le({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return te(new URL(h.location,l).href,{},[...c,l.pathname],f),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await ce(l);if(s.length=0,G=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[V]=$+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,_){t=h.state,h.props.page&&(h.props.page.url=l);const y=pe();K.$set(h.props),y()}else Te(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||$e(),await fe(),d){const L=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await fe();d=!0,h.props.page&&(T=h.props.page),p&&p(),g=!1}function Te(a){var f,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const c=pe();K=new Dt({target:r,props:{...a.props,stores:M},hydrate:!0}),c();const i={from:null,to:de("to",{params:t.params,route:{id:(p=(f=t.route)==null?void 0:f.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),_=!0}async function ne({url:a,params:l,branch:c,status:i,error:f,route:p,form:h}){var P;const v=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:f,route:p},props:{components:v.map(O=>O.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!T;for(let O=0;O<v.length;O+=1){const N=v[O];y={...y,...N.data},(b||!t.branch.some(U=>U===N))&&(E.props[`data_${O}`]=y,b=b||Object.keys((P=N.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==f||h!==void 0||b){E.props.page={error:f,params:l,route:p,status:i,url:a,form:h,data:b?y:T.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const O=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return E}async function we({loader:a,parent:l,url:c,params:i,route:f,server_data_node:p}){var y,b,L,P,O;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...R){for(const D of R){const{href:k}=new URL(D,c);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,f.id}},params:new Proxy(i,{get:(R,D)=>(v.params.add(D),R[D])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:wt(c,()=>{v.url=!0}),async fetch(R,D){let k;R instanceof Request?(k=R.url,D={body:R.method==="GET"||R.method==="HEAD"?void 0:await R.blob(),cache:R.cache,credentials:R.credentials,headers:R.headers,integrity:R.integrity,keepalive:R.keepalive,method:R.method,mode:R.mode,redirect:R.redirect,referrer:R.referrer,referrerPolicy:R.referrerPolicy,signal:R.signal,...D}):k=R;const I=new URL(k,c).href;return N(I),_?Rt(k,I,D):kt(k,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(L=await E.shared.load.call(null,U))!=null?L:null,h=h?await zt(h):null}return{node:E,loader:a,server:p,shared:(P=E.shared)!=null&&P.load?{type:"data",data:h,uses:v}:null,data:(O=h!=null?h:p==null?void 0:p.data)!=null?O:null}}function De(a,l,c,i,f){if(G)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const p of i.params)if(f[p]!==t.params[p])return!0;for(const p of i.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function ye(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function qe({id:a,invalidating:l,url:c,params:i,route:f}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:p,layouts:h,leaf:v}=f,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,P=E.reduce((k,I,A)=>{var re;const j=t.branch[A],Y=!!(I!=null&&I[0])&&((j==null?void 0:j.loader)!==I[1]||De(k.some(Boolean),L,b,(re=j.server)==null?void 0:re.uses,i));return k.push(Y),k},[]);if(P.some(Boolean)){try{y=await Ze(c,P)}catch(k){return le({status:500,error:ae(k,{url:c,params:i,route:{id:f.id}}),url:c,route:f})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let N=!1;const U=E.map(async(k,I)=>{var re;if(!k)return;const A=t.branch[I],j=O==null?void 0:O[I];if((!j||j.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!De(N,L,b,(re=A.shared)==null?void 0:re.uses,i))return A;if(N=!0,(j==null?void 0:j.type)==="error")throw j;return we({loader:k[1],url:c,params:i,route:f,parent:async()=>{var Ge;const ze={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(ze,(Ge=await U[Ee])==null?void 0:Ge.data);return ze},server_data_node:ye(j===void 0&&k[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const k of U)k.catch(()=>{});const R=[];for(let k=0;k<E.length;k+=1)if(E[k])try{R.push(await U[k])}catch(I){if(I instanceof Xe)return{type:"redirect",location:I.location};let A=500,j;O!=null&&O.includes(I)?(A=(D=I.status)!=null?D:A,j=I.error):I instanceof Ie?(A=I.status,j=I.body):j=ae(I,{params:i,url:c,route:{id:f.id}});const Y=await Ce(k,R,p);return Y?await ne({url:c,params:i,branch:R.slice(0,Y.idx).concat(Y.node),status:A,error:j,route:f}):await Fe(c,{id:f.id},j,A)}else R.push(void 0);return await ne({url:c,params:i,branch:R,status:200,error:null,route:f,form:l?void 0:null})}async function Ce(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:l,url:c,route:i}){var y;const f={},p=await je();let h=null;if(p.server)try{const b=await Ze(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await ce(c)}const v=await we({loader:je,url:c,params:f,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),E={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await ne({url:c,params:f,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const c=mt(a.pathname.slice(e.length)||"/");for(const i of ue){const f=i.exec(c);if(f){const p=new URL(a.origin+ht(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:i,params:gt(f),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:c,delta:i}){var v,E,y,b,L;let f=!1;const p={from:de("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:de("to",{params:(y=c==null?void 0:c.params)!=null?y:null,route:{id:(L=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?L:null},url:a}),willUnload:!c,type:l};i!==void 0&&(p.delta=i);const h={...p,cancel:()=>{f=!0}};return w||m.before_navigate.forEach(P=>P(h)),f?null:p}async function ve({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:f,type:p,delta:h,nav_token:v,accepted:E,blocked:y}){const b=be(a,!1),L=Be({url:a,type:p,delta:h,intent:b});if(!L){y();return}Se($),E(),w=!0,_&&M.navigating.set(L),await Ue(b,a,i,{scroll:l,keepfocus:c,details:f},v,()=>{w=!1,m.after_navigate.forEach(P=>P(L)),M.navigating.set(null)})}async function Fe(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await le({status:i,error:c,url:a,route:l}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Oe(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Oe(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return te(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return ie()},invalidateAll:()=>(G=!0,ie()),prefetch:async a=>{const l=new URL(a,Ke(document));await Ne(l)},prefetch_routes:async a=>{const c=(a?ue.filter(i=>a.some(f=>i.exec(f))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const f=await Ce(t.branch.length,c,i.errors);if(f){const p=await ne({url:l,params:t.params,branch:c.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:i});t=p.state;const h=pe();K.$set(p.props),h(),fe().then($e)}}else if(a.type==="redirect")te(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},c=pe();K.$set(l),c(),a.type==="success"&&fe().then($e)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var p,h;let f=!1;if(!w){const v={from:de("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};m.before_navigate.forEach(E=>E(v))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se($);try{sessionStorage[xe]=JSON.stringify(se)}catch{}}});const a=i=>{const{url:f,options:p,has:h}=Me(i);if(f&&p.prefetch&&!Ve(f)){if(p.reload||h.rel_external||h.target||h.download)return;Ne(f)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var f;(f=i.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:p,options:h,has:v}=Me(i);if(!f||!p||!(f instanceof SVGAElement)&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Be({url:p,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=p.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){S=!0,Se($),t.url=p,M.page.set({...T,url:p}),M.page.notify();return}ve({url:p,scroll:h.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[V]===$)return;const f=i.state[V]-$;ve({url:new URL(location.href),scroll:se[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=i.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:f,data:p,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=c.map(async(L,P)=>{const O=p[P];return we({loader:_e[L],url:v,params:i,route:f,parent:async()=>{const N={};for(let U=0;U<P;U+=1)Object.assign(N,(await b[U]).data);return N},server_data_node:ye(O)})});E=await ne({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=ue.find(({id:L})=>L===f.id))!=null?y:null})}catch(b){if(b instanceof Xe){await ce(new URL(b.location,location.href));return}E=await le({status:b instanceof Ie?b.status:500,error:ae(b,{url:v,params:i,route:f}),url:v,route:f})}Te(E)}}}async function Ze(r,e){var m;const n=new URL(r);n.pathname=vt(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,_;(t==null?void 0:t.type)==="data"&&(t.data=Xt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((_=t.uses.params)!=null?_:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ae(r,e){var n;return r instanceof Ie?r.body:(n=Jt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Qt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function tn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){dt(n);const m=Zt({target:s,base:n.base,trailing_slash:o});pt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{tn as start};
