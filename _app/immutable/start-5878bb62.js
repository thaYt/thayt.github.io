import{S as at,i as ot,s as st,a as it,e as V,c as lt,b as M,g as pe,t as F,d as he,f as B,h as J,j as ct,o as Le,k as ft,l as ut,m as dt,n as Ee,p as D,q as pt,r as ht,u as mt,v as H,w as W,x as Ae,y as Y,z as X,A as le}from"./chunks/index-2ce039f8.js";import{S as tt,I as q,g as ze,f as He,a as ke,b as ce,s as K,i as We,c as de,P as Ye,d as _t,e as gt}from"./chunks/singletons-4bcca457.js";import{s as wt}from"./chunks/paths-b4419565.js";function yt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function bt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(n,e){const t=new URL(n);for(const i of Et){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return St(t),t}function St(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Ot(n){return n.replace(/\/$/,"")+Rt}function It(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;te.delete(i)}return me(n,e)};const te=new Map;function Lt(n,e){const t=nt(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...f}=JSON.parse(i.textContent),r=i.getAttribute("data-ttl");return r&&te.set(t,{body:s,init:f,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,f))}return me(n,e)}function Pt(n,e,t){if(te.size>0){const i=nt(n,t),s=te.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);te.delete(i)}}return me(e,t)}function nt(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${It(e.body)}"]`),i}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Ut(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const r=i.split(/\[(.+?)\](?!\])/);return"/"+r.map((_,p)=>{if(p%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(C=>parseInt(C,16))));const g=$t.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,k,N,P]=g;return e.push({name:N,matcher:P,optional:!!y,rest:!!k,chained:k?p===1&&r[0]==="":!1}),k?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:e}}function At(n){return!/^\([^)]+\)$/.test(n)}function Ut(n){return n.slice(1).split("/").filter(At)}function Nt(n,e,t){const i={},s=n.slice(1);let f="";for(let r=0;r<e.length;r+=1){const u=e[r];let _=s[r];if(u.chained&&u.rest&&f&&(_=_?f+"/"+_:f),f="",_===void 0)u.rest&&(i[u.name]="");else{if(u.matcher&&!t[u.matcher](_)){if(u.optional&&u.chained){let p=s.indexOf(void 0,r);if(p===-1){const g=e[r+1];if(g!=null&&g.rest&&g.chained)f=_;else return}for(;p>=r;)s[p]=s[p-1],p-=1;continue}return}i[u.name]=_}}if(!f)return i}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([u,[_,p,g]])=>{const{pattern:y,params:k}=jt(u),N={id:u,exec:P=>{const C=y.exec(P);if(C)return Nt(C,k,i)},errors:[1,...g||[]].map(P=>n[P]),layouts:[0,...p||[]].map(r),leaf:f(_)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function f(u){const _=u<0;return _&&(u=~u),[_,n[u]]}function r(u){return u===void 0?u:[s.has(u),n[u]]}}function Dt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Ae(e.$$.fragment,r),t=V()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&2&&(_.form=r[1]),s!==(s=r[0][0])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{X(p,1)}),he()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function qt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],$$slots:{default:[Ct]},$$scope:{ctx:r}}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Ae(e.$$.fragment,r),t=V()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&523&&(_.$$scope={dirty:u,ctx:r}),s!==(s=r[0][0])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{X(p,1)}),he()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Ct(n){let e,t,i;var s=n[0][1];function f(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Ae(e.$$.fragment,r),t=V()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const _={};if(u&8&&(_.data=r[3]),u&2&&(_.form=r[1]),s!==(s=r[0][1])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{X(p,1)}),he()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&F(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Xe(n){let e,t=n[5]&&Ze(n);return{c(){e=ft("div"),t&&t.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=dt(e);t&&t.l(s),s.forEach(J),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(i,s){M(i,e,s),t&&t.m(e,null)},p(i,s){i[5]?t?t.p(i,s):(t=Ze(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&J(e),t&&t.d()}}}function Ze(n){let e;return{c(){e=pt(n[6])},l(t){e=ht(t,n[6])},m(t,i){M(t,e,i)},p(t,i){i&64&&mt(e,t[6])},d(t){t&&J(e)}}}function Vt(n){let e,t,i,s,f;const r=[qt,Dt],u=[];function _(g,y){return g[0][1]?0:1}e=_(n),t=u[e]=r[e](n);let p=n[4]&&Xe(n);return{c(){t.c(),i=it(),p&&p.c(),s=V()},l(g){t.l(g),i=lt(g),p&&p.l(g),s=V()},m(g,y){u[e].m(g,y),M(g,i,y),p&&p.m(g,y),M(g,s,y),f=!0},p(g,[y]){let k=e;e=_(g),e===k?u[e].p(g,y):(pe(),F(u[k],1,1,()=>{u[k]=null}),he(),t=u[e],t?t.p(g,y):(t=u[e]=r[e](g),t.c()),B(t,1),t.m(i.parentNode,i)),g[4]?p?p.p(g,y):(p=Xe(g),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(g){f||(B(t),f=!0)},o(g){F(t),f=!1},d(g){u[e].d(g),g&&J(i),p&&p.d(g),g&&J(s)}}}function Ft(n,e,t){let{stores:i}=e,{page:s}=e,{components:f}=e,{form:r}=e,{data_0:u=null}=e,{data_1:_=null}=e;ct(i.page.notify);let p=!1,g=!1,y=null;return Le(()=>{const k=i.page.subscribe(()=>{p&&(t(5,g=!0),t(6,y=document.title||"untitled page"))});return t(4,p=!0),k}),n.$$set=k=>{"stores"in k&&t(7,i=k.stores),"page"in k&&t(8,s=k.page),"components"in k&&t(0,f=k.components),"form"in k&&t(1,r=k.form),"data_0"in k&&t(2,u=k.data_0),"data_1"in k&&t(3,_=k.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(s)},[f,r,u,_,p,g,y,i,s]}class Bt extends at{constructor(e){super(),ot(this,e,Ft,Vt,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Jt="modulepreload",Gt=function(n,e){return new URL(n,e).href},Qe={},x=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(f=>{if(f=Gt(f,i),f in Qe)return;Qe[f]=!0;const r=f.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!i)for(let g=s.length-1;g>=0;g--){const y=s[g];if(y.href===f&&(!r||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Jt,r||(p.as="script",p.crossOrigin=""),p.href=f,document.head.appendChild(p),r)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Kt={},_e=[()=>x(()=>import("./chunks/0-93713f10.js"),["./chunks\\0-93713f10.js","./chunks\\_layout-da46b06b.js","./components\\layout.svelte-537da57c.js","./chunks\\index-2ce039f8.js"],import.meta.url),()=>x(()=>import("./chunks/1-b4cb376e.js"),["./chunks\\1-b4cb376e.js","./components\\pages\\_error.svelte-896ed6c6.js","./chunks\\index-2ce039f8.js","./chunks\\singletons-4bcca457.js","./chunks\\paths-b4419565.js","./assets\\_error-3e9de4f0.css"],import.meta.url),()=>x(()=>import("./chunks/2-539a6bc3.js"),["./chunks\\2-539a6bc3.js","./components\\pages\\_page.svelte-94d4a7ae.js","./chunks\\index-2ce039f8.js","./chunks\\paths-b4419565.js","./chunks\\github-4929f466.js","./assets\\_page-bb169ea3.css"],import.meta.url),()=>x(()=>import("./chunks/3-5983478d.js"),["./chunks\\3-5983478d.js","./components\\pages\\old\\v1\\_page.svelte-6efff7f5.js","./chunks\\index-2ce039f8.js","./chunks\\paths-b4419565.js","./assets\\_page-44125753.css"],import.meta.url),()=>x(()=>import("./chunks/4-9a121d61.js"),["./chunks\\4-9a121d61.js","./components\\pages\\old\\v2b\\_page.svelte-babb838c.js","./chunks\\index-2ce039f8.js","./chunks\\paths-b4419565.js","./chunks\\github-4929f466.js","./assets\\_page-fdec09b5.css"],import.meta.url)],Mt=[],zt={"/":[2],"/old/v1":[3],"/old/v2b":[4]},Ht={handleError:({error:n})=>{console.error(n)}};class Pe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,t){this.status=e,this.location=t}}async function Wt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,Qt=-4,xt=-5,en=-6;function tn(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function i(s,f=!1){if(s===Yt)return;if(s===Zt)return NaN;if(s===Qt)return 1/0;if(s===xt)return-1/0;if(s===en)return-0;if(f)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const _=new Set;t[s]=_;for(let y=1;y<r.length;y+=1)_.add(i(r[y]));break;case"Map":const p=new Map;t[s]=p;for(let y=1;y<r.length;y+=2)p.set(i(r[y]),i(r[y+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const g=Object.create(null);t[s]=g;for(let y=1;y<r.length;y+=2)g[r[y]]=i(r[y+1]);break}else{const u=new Array(r.length);t[s]=u;for(let _=0;_<r.length;_+=1){const p=r[_];p!==Xt&&(u[_]=i(p))}}else{const u={};t[s]=u;for(const _ in r){const p=r[_];u[_]=i(p)}}return t[s]}return i(0)}const Re=Tt(_e,Mt,zt,Kt),$e=_e[0],je=_e[1];$e();je();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Oe(n){ne[n]=de()}function nn({target:n,base:e}){var Ge;const t=[];let i=null;const s={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},r=!1,u=!1,_=!0,p=!1,g=!1,y=!1,k=!1,N,P=(Ge=history.state)==null?void 0:Ge[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const C=ne[P];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let G,Ue,re;async function Ne(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=be(a,!0);i=null,await De(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:l=!1,keepFocus:c=!1,state:h={},invalidateAll:d=!1},m,v){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:o?de():null,keepfocus:c,redirect_chain:m,details:{state:h,replaceState:l},nav_token:v,accepted:()=>{d&&(k=!0)},blocked:()=>{},type:"goto"})}async function Te(a){const o=be(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Ve(o).then(l=>(l.type==="loaded"&&l.state.error&&(i=null),l))},i.promise}async function ae(...a){const l=Re.filter(c=>a.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(l)}async function De(a,o,l,c,h={},d){var v,b;Ue=h;let m=a&&await Ve(a);if(m||(m=await Je(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ue!==h)return!1;if(m.type==="redirect")if(l.length>10||l.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...l,o.pathname],h),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await K.updated.check()&&await ie(o);if(t.length=0,k=!1,p=!0,c&&c.details){const{details:w}=c,O=w.replaceState?0:1;w.state[q]=P+=O,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(i=null,u){f=m.state,m.props.page&&(m.props.page.url=o);const w=ue();N.$set(m.props),w()}else qe(m);if(c){const{scroll:w,keepfocus:O}=c;if(O||Ie(),await le(),_){const I=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();_=!0,m.props.page&&(G=m.props.page),d&&d(),p=!1}function qe(a){var h;f=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=a.props.page;const l=ue();N=new Bt({target:n,props:{...a.props,stores:K},hydrate:!0}),l();const c={from:null,to:fe("to",{params:f.params,route:{id:((h=f.route)==null?void 0:h.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(c)),u=!0}async function Z({url:a,params:o,branch:l,status:c,error:h,route:d,form:m}){const v=l.filter(Boolean);let b="never";for(const R of l)(R==null?void 0:R.slash)!==void 0&&(b=R.slash);a.pathname=yt(a.pathname,b),a.search=a.search;const w={type:"loaded",state:{url:a,params:o,branch:l,error:h,route:d},props:{components:v.map(R=>R.node.component)}};m!==void 0&&(w.props.form=m);let O={},I=!G;for(let R=0;R<v.length;R+=1){const E=v[R];O={...O,...E.data},(I||!f.branch.some(j=>j===E))&&(w.props[`data_${R}`]=O,I=I||Object.keys(E.data??{}).length>0)}if(I||(I=Object.keys(G.data).length!==Object.keys(O).length),!f.url||a.href!==f.url.href||f.error!==h||m!==void 0||I){w.props.page={error:h,params:o,route:d,status:c,url:new URL(a),form:m,data:I?O:G.data},Object.defineProperty(w.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(E,j)=>{Object.defineProperty(w.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${j}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return w}async function we({loader:a,parent:o,url:l,params:c,route:h,server_data_node:d}){var w,O,I;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((w=b.shared)!=null&&w.load){let T=function(...E){for(const j of E){const{href:U}=new URL(j,l);v.dependencies.add(U)}};const R={route:{get id(){return v.route=!0,h.id}},params:new Proxy(c,{get:(E,j)=>(v.params.add(j),E[j])}),data:(d==null?void 0:d.data)??null,url:kt(l,()=>{v.url=!0}),async fetch(E,j){let U;E instanceof Request?(U=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):U=E;const S=new URL(U,l).href;return T(S),u?Pt(U,S,j):Lt(U,j)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,o()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=await b.shared.load.call(null,R)??null,m=m?await Wt(m):null}return{node:b,loader:a,server:d,shared:(O=b.shared)!=null&&O.load?{type:"data",data:m,uses:v}:null,data:m??(d==null?void 0:d.data)??null,slash:((I=b.shared)==null?void 0:I.trailingSlash)??(d==null?void 0:d.slash)}}function Ce(a,o,l,c,h){if(k)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&l)return!0;for(const d of c.params)if(h[d]!==f.params[d])return!0;for(const d of c.dependencies)if(t.some(m=>m(new URL(d))))return!0;return!1}function ye(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Ve({id:a,invalidating:o,url:l,params:c,route:h}){if((i==null?void 0:i.id)===a)return i.promise;const{errors:d,layouts:m,leaf:v}=h,b=[...m,v];d.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const O=f.url?a!==f.url.pathname+f.url.search:!1,I=f.route?a!==f.route.id:!1,T=b.reduce((S,$,A)=>{var Q;const L=f.branch[A],z=!!($!=null&&$[0])&&((L==null?void 0:L.loader)!==$[1]||Ce(S.some(Boolean),I,O,(Q=L.server)==null?void 0:Q.uses,c));return S.push(z),S},[]);if(T.some(Boolean)){try{w=await et(l,T)}catch(S){return oe({status:500,error:await ee(S,{url:l,params:c,route:{id:h.id}}),url:l,route:h})}if(w.type==="redirect")return w}const R=w==null?void 0:w.nodes;let E=!1;const j=b.map(async(S,$)=>{var Q;if(!S)return;const A=f.branch[$],L=R==null?void 0:R[$];if((!L||L.type==="skip")&&S[1]===(A==null?void 0:A.loader)&&!Ce(E,I,O,(Q=A.shared)==null?void 0:Q.uses,c))return A;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return we({loader:S[1],url:l,params:c,route:h,parent:async()=>{var Me;const Ke={};for(let ve=0;ve<$;ve+=1)Object.assign(Ke,(Me=await j[ve])==null?void 0:Me.data);return Ke},server_data_node:ye(L===void 0&&S[0]?{type:"skip"}:L??null,A==null?void 0:A.server)})});for(const S of j)S.catch(()=>{});const U=[];for(let S=0;S<b.length;S+=1)if(b[S])try{U.push(await j[S])}catch($){if($ instanceof xe)return{type:"redirect",location:$.location};let A=500,L;R!=null&&R.includes($)?(A=$.status??A,L=$.error):$ instanceof Pe?(A=$.status,L=$.body):L=await ee($,{params:c,url:l,route:{id:h.id}});const z=await Fe(S,U,d);return z?await Z({url:l,params:c,branch:U.slice(0,z.idx).concat(z.node),status:A,error:L,route:h}):await Je(l,{id:h.id},L,A)}else U.push(void 0);return await Z({url:l,params:c,branch:U,status:200,error:null,route:h,form:o?void 0:null})}async function Fe(a,o,l){for(;a--;)if(l[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:o,url:l,route:c}){const h={},d=await $e();let m=null;if(d.server)try{const w=await et(l,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await ie(l)}const v=await we({loader:$e,url:l,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),b={node:await je(),loader:je,shared:null,server:null,data:null};return await Z({url:l,params:h,branch:[v,b],status:a,error:o,route:null})}function be(a,o){if(We(a,e))return;const l=bt(a.pathname.slice(e.length)||"/");for(const c of Re){const h=c.exec(l);if(h)return{id:a.pathname+a.search,invalidating:o,route:c,params:vt(h),url:a}}}function Be({url:a,type:o,intent:l,delta:c}){var v,b;let h=!1;const d={from:fe("from",{params:f.params,route:{id:((v=f.route)==null?void 0:v.id)??null},url:f.url}),to:fe("to",{params:(l==null?void 0:l.params)??null,route:{id:((b=l==null?void 0:l.route)==null?void 0:b.id)??null},url:a}),willUnload:!l,type:o};c!==void 0&&(d.delta=c);const m={...d,cancel:()=>{h=!0}};return g||s.before_navigate.forEach(w=>w(m)),h?null:d}async function se({url:a,scroll:o,keepfocus:l,redirect_chain:c,details:h,type:d,delta:m,nav_token:v,accepted:b,blocked:w}){const O=be(a,!1),I=Be({url:a,type:d,delta:m,intent:O});if(!I){w();return}Oe(P),b(),g=!0,u&&K.navigating.set(I),await De(O,a,c,{scroll:o,keepfocus:l,details:h},v,()=>{g=!1,s.after_navigate.forEach(T=>T(I)),K.navigating.set(null)})}async function Je(a,o,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await oe({status:c,error:l,url:a,route:o}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(a),a=setTimeout(()=>{c(m,2)},20)});function o(d){c(d.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const l=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(ae(new URL(m.target.href).pathname),l.unobserve(m.target))},{threshold:0});function c(d,m){const v=He(d,n);if(!v)return;const{url:b,external:w}=ke(v,e);if(w)return;const O=ce(v);O.reload||(m<=O.preload_data?Te(b):m<=O.preload_code&&ae(b.pathname))}function h(){l.disconnect();for(const d of n.querySelectorAll("a")){const{url:m,external:v}=ke(d,e);if(v)continue;const b=ce(d);b.reload||(b.preload_code===Ye.viewport&&l.observe(d),b.preload_code===Ye.eager&&ae(m.pathname))}}s.after_navigate.push(h),h()}return{after_navigate:a=>{Le(()=>(s.after_navigate.push(a),()=>{const o=s.after_navigate.indexOf(a);s.after_navigate.splice(o,1)}))},before_navigate:a=>{Le(()=>(s.before_navigate.push(a),()=>{const o=s.before_navigate.indexOf(a);s.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(p||!u)&&(_=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ge(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:o}=new URL(a,location.href);t.push(l=>l.href===o)}return Ne()},invalidateAll:()=>(k=!0,Ne()),preload_data:async a=>{const o=new URL(a,ze(document));await Te(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:l,route:c}=f;if(!c)return;const h=await Fe(f.branch.length,l,c.errors);if(h){const d=await Z({url:o,params:f.params,branch:l.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:c});f=d.state;const m=ue();N.$set(d.props),m(),le().then(Ie)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...G,form:a.data,status:a.status}},l=ue();N.$set(o),l(),a.type==="success"&&le().then(Ie)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c;let l=!1;if(!g){const h={from:fe("from",{params:f.params,route:{id:((c=f.route)==null?void 0:c.id)??null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};s.before_navigate.forEach(d=>d(h))}l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(P);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const l=He(o.composedPath()[0],n);if(!l)return;const{url:c,external:h,has:d}=ke(l,e),m=ce(l);if(!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||d.download)return;if(h||m.reload){Be({url:c,type:"link"})||o.preventDefault(),g=!0;return}const[b,w]=c.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){y=!0,Oe(P),f.url=c,K.page.set({...G,url:c}),K.page.notify();return}se({url:c,scroll:m.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const l=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||l.method)!=="get")return;const d=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||l.action);if(We(d,e))return;const{noscroll:m,reload:v}=ce(o.target);v||(o.preventDefault(),o.stopPropagation(),d.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:d,scroll:m?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var l;if((l=o.state)!=null&&l[q]){if(o.state[q]===P)return;const c=o.state[q]-P;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{y&&(y=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:o,node_ids:l,params:c,route:h,data:d,form:m})=>{r=!0;const v=new URL(location.href);let b;try{const w=l.map(async(O,I)=>{const T=d[I];return we({loader:_e[O],url:v,params:c,route:h,parent:async()=>{const R={};for(let E=0;E<I;E+=1)Object.assign(R,(await w[E]).data);return R},server_data_node:ye(T)})});b=await Z({url:v,params:c,branch:await Promise.all(w),status:a,error:o,form:m,route:Re.find(({id:O})=>O===h.id)??null})}catch(w){if(w instanceof xe){await ie(new URL(w.location,location.href));return}b=await oe({status:w instanceof Pe?w.status:500,error:await ee(w,{url:v,params:c,route:h}),url:v,route:h})}qe(b)}}}async function et(n,e){var f;const t=new URL(n);t.pathname=Ot(n.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const i=await me(t.href),s=await i.json();if(!i.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(r=>{(r==null?void 0:r.type)==="data"&&(r.data=tn(r.data),r.uses={dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function ee(n,e){return n instanceof Pe?n.body:Ht.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const rn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(n,e){for(const t of rn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}function Ie(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function ln({env:n,hydrate:e,paths:t,target:i,version:s}){wt(t),gt(s);const f=nn({target:i,base:t.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{ln as start};
