import{B as d,s as w}from"./index-96ee33b2.js";import{a as E}from"./paths-6cd3a76e.js";const c=[];function b(e,t=d){let n;const s=new Set;function o(a){if(w(e,a)&&(e=a,n)){const u=!c.length;for(const l of s)l[1](),c.push(l,e);if(u){for(let l=0;l<c.length;l+=2)c[l][0](c[l+1]);c.length=0}}}function r(a){o(a(e))}function i(a,u=d){const l=[a,u];return s.add(l),s.size===1&&(n=t(o)||d),a(e),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}let _="";function I(e){_=e}const y="sveltekit:scroll",A="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const g={...p,"":p.hover};function m(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function U(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=m(e)}}function L(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},o=!n||R(n,t)||s.rel_external||s.target||s.download;return{url:n,has:s,external:o}}function O(e){let t=null,n=null,s=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),t===null&&(t=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=m(r);return{preload_code:g[n!=null?n:"off"],preload_data:g[s!=null?s:"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function h(e){const t=b(e);let n=!0;function s(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function r(i){let a;return t.subscribe(u=>{(a===void 0||n&&u!==a)&&i(a=u)})}return{notify:s,set:o,subscribe:r}}function v(){const{set:e,subscribe:t}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==_;return i&&(e(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:s}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const N={url:h({}),page:h({}),navigating:b(null),updated:v()};export{A as I,p as P,y as S,L as a,O as b,T as c,V as d,I as e,U as f,S as g,R as i,N as s};
