import{S as A,i as B,s as C,k as f,q as d,a as j,l as v,m as y,r as b,h as g,c as w,n as E,b as G,G as r,u as H,B as P,H as I}from"../../chunks/index-199c2484.js";import{s as L}from"../../chunks/singletons-1130c273.js";const M=()=>{const s=L,e={page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},enumerable:!1},session:{get(){return O(),{}},enumerable:!1}}),e},N={subscribe(s){return M().page.subscribe(s)}};function O(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function T(s){let e,a,l,c,i,q,x,n,u=s[0].status+"",h,S,p=s[0].error.message+"",m;return{c(){e=f("main"),a=f("style"),l=d(`* {\r
            background-color: rgb(20, 24, 33);\r
        }`),c=j(),i=f("h1"),q=d("uh oh!! u messed up"),x=j(),n=f("p"),h=d(u),S=d(": "),m=d(p),this.h()},l(o){e=v(o,"MAIN",{class:!0});var t=y(e);a=v(t,"STYLE",{class:!0});var $=y(a);l=b($,`* {\r
            background-color: rgb(20, 24, 33);\r
        }`),$.forEach(g),c=w(t),i=v(t,"H1",{class:!0});var k=y(i);q=b(k,"uh oh!! u messed up"),k.forEach(g),x=w(t),n=v(t,"P",{class:!0});var _=y(n);h=b(_,u),S=b(_,": "),m=b(_,p),_.forEach(g),t.forEach(g),this.h()},h(){E(a,"class","svelte-38fx4q"),E(i,"class","svelte-38fx4q"),E(n,"class","svelte-38fx4q"),E(e,"class","svelte-38fx4q")},m(o,t){G(o,e,t),r(e,a),r(a,l),r(e,c),r(e,i),r(i,q),r(e,x),r(e,n),r(n,h),r(n,S),r(n,m)},p(o,[t]){t&1&&u!==(u=o[0].status+"")&&H(h,u),t&1&&p!==(p=o[0].error.message+"")&&H(m,p)},i:P,o:P,d(o){o&&g(e)}}}function Y(s,e,a){let l;return I(s,N,c=>a(0,l=c)),[l]}class F extends A{constructor(e){super(),B(this,e,Y,T,C,{})}}export{F as default};
