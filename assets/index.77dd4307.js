var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,o)=>{var n={};for(var r in e)F.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&m)for(var r of m(e))o.indexOf(r)<0&&S.call(e,r)&&(n[r]=e[r]);return n};import{c as y,a as J,d as b,b as d,e as f,F as w,r as k,u as L,f as j,g as A,h as O,o as g,n as R,w as v,t as P,i as $,j as V,k as I}from"./vendor.c56b455f.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};B();const D="modulepreload",h={},N="/",c=function(o,n){return!n||n.length===0?o():Promise.all(n.map(r=>{if(r=`${N}${r}`,r in h)return;h[r]=!0;const t=r.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":D,t||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),t)return new Promise((p,l)=>{s.addEventListener("load",p),s.addEventListener("error",l)})})).then(()=>o())},T=["home","about","frontend","backend","cv"],H="home",W=(e,o,n=(r,t)=>r.find(a=>a===t))=>{if(e.length!==o.length)throw new Error("Elements count and sortedItems must be same length");return e.map(r=>{const t=n(o,r);if(!t)throw new Error(`Cannot find element in sortedItems. With index ${JSON.stringify(r)}`);return t})},M={"/src/pages/About.vue":()=>c(()=>import("./About.b6a51b50.js"),["assets/About.b6a51b50.js","assets/vendor.c56b455f.js"]),"/src/pages/Backend.vue":()=>c(()=>import("./Backend.a7ad1a1e.js"),["assets/Backend.a7ad1a1e.js","assets/vendor.c56b455f.js"]),"/src/pages/CV.vue":()=>c(()=>import("./CV.6fbc9064.js"),["assets/CV.6fbc9064.js","assets/vendor.c56b455f.js"]),"/src/pages/Frontend.vue":()=>c(()=>import("./Frontend.49988e76.js"),["assets/Frontend.49988e76.js","assets/vendor.c56b455f.js"]),"/src/pages/Home.vue":()=>c(()=>import("./Home.5fed1384.js"),["assets/Home.5fed1384.js","assets/Home.97826b85.css","assets/vendor.c56b455f.js"])},q=Object.entries(M).map(([e,o])=>{const n=e.replace(/^\/src\/pages\/(.+)\.vue$/i,"$1");return{path:`/${n}`.toLowerCase(),name:n,component:o}}),i=W(T,q,(e,o)=>e.find(n=>n.path.endsWith(o.toLowerCase())));let u;var x;const E=y({history:J(),routes:[...(u=_(x=i.find(e=>e.path===`/${H}`),[]),x?(u.path="/",u.name+="_Index",[u]):[]),...i]});var z=(e,o)=>{const n=e.__vccOpts||e;for(const[r,t]of o)n[r]=t;return n};const G={class:"app"},K={class:"aside"},Q=["onClick"],U=["href"],X={class:"page"},Y=b({setup(e){const o=A(),n=t=>i[t].path===o.currentRoute.value.path,r=t=>o.push(i[t].path);return(t,a)=>{const s=O("router-view");return g(),d("div",G,[f("aside",K,[(g(!0),d(w,null,k(L(i),(p,l)=>(g(),d("div",{class:R({"link-container":!0,active:n(l)}),onClick:v(te=>r(l),["prevent"])},[f("a",{href:p.path,class:"link",onClick:a[0]||(a[0]=v(()=>{},["prevent"]))},P(p.name),9,U)],10,Q))),256))]),f("main",X,[j(s)])])}}});var Z=z(Y,[["__scopeId","data-v-504ca236"]]);const C=$({state:{config:{}},getters:{config({config:e}){return e}},mutations:{setConfig(e,o){e.config=o}},actions:{setConfig({commit:e},o){e("setConfig",o)}}}),ee=async()=>{const e=await V.get("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json");return await C.dispatch("setConfig",e.data),await C.dispatch("setConfig",{General:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"}],Frontend:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"}],Backend:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"}]}),I(Z).use(E).use(C)};(async()=>{const e=await ee();await E.isReady(),e.mount("#app")})();export{z as _};
