import{d as I,r as m,c as d,o as n,a as c,b as l,u as i,n as f,e as w,t as _,f as p,g as N,h as j,i as L,w as D,T as M,F as A,j as T,k as B,l as H,m as q,p as R,q as V,s as W}from"./vendor.316cc8dc.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};G();var x=(e,t)=>{const a=e.__vccOpts||e;for(const[u,r]of t)a[u]=r;return a};const K={class:w({progress:!0})},Q={key:0,class:"line"},U=["d","stroke-width"],X=["d","stroke","stroke-width"],Y={key:0},Z={key:1},ee={class:"fullPart"},te={key:2,class:"point"},ae={key:3,class:"fractionalPart"},re={key:4,class:"fractionalPart"},ne={key:5},oe=I({props:{strokeHeight:{type:Number,default:4},percentage:{type:Number,default:0,required:!0,validator:e=>e>=0&&e<=100},progressbarType:{type:String,default:"line",validator:e=>["circle","line"].includes(e)},progressbarColor:{type:String},hasTextContent:{type:Boolean,default:!1},text:{type:String},textColor:{type:String},size:{type:Number,default:100},animationDuration:{type:Number,default:1},contentMaxAcceptableNumber:{type:Number,default:10},containerWidth:{type:String,default:"100%"},isPercentShown:{type:Boolean,default:!1},await:{type:Number,default:0}},setup(e){const t=e,a=m(0),u=d(()=>t.isPercentShown?t.percentage:a.value),r=d(()=>({width:`${u.value}%`,backgroundColor:t.progressbarColor})),o=d(()=>t.strokeHeight*100/t.size),s=d(()=>50-o.value/2),C=d(()=>s.value*2),h=d(()=>`M 50 50 m 0 -${s.value} a ${s.value} ${s.value} 0 1 1 0 ${C.value} a ${s.value} ${s.value} 0 1 1 0 -${C.value}`),y=d(()=>2*Math.PI*s.value),E=d(()=>({strokeDasharray:`${y.value}px,${y.value}px`,strokeDashoffset:`${(1-a.value/100)*y.value}px`})),J=d(()=>(t.contentMaxAcceptableNumber*a.value/100).toFixed(2)),$=d(()=>J.value.split(".")),v=d(()=>t.progressbarType==="line"),g=20,F=t.percentage/(g*(g+1)/2),k=t.animationDuration*1e3/(g*(g+1)/2);let P=F*g,S=k*g;const b=()=>{if(a.value+=P,P-=F,S-=k,a.value+F>=t.percentage){a.value=t.percentage;return}setTimeout(b,S)};return setTimeout(()=>setTimeout(b,S),t.await*1e3),(Ie,Ne)=>(n(),c("div",{class:"container",style:f({width:e.containerWidth})},[l("div",K,[i(v)?(n(),c("div",Q,[l("div",{style:f({height:`${e.strokeHeight}px`}),class:"outer"},[l("div",{style:f(i(r)),class:"inner"},null,4)],4)])):(n(),c("div",{key:1,style:f({width:`${e.size}px`,height:`${e.size}px`}),class:"circle"},[(n(),c("svg",{style:f({width:`${e.size}px`,height:`${e.size}px`}),viewBox:"0 0 100 100"},[l("path",{d:i(h),"stroke-width":i(o),fill:"none",stroke:"#e5e9f2"},null,8,U),l("path",{d:i(h),stroke:t.progressbarColor||"#20a0ff","stroke-width":i(o),style:f(i(E)),class:"fillTrack",fill:"none","stroke-linecap":"round"},null,12,X)],4))],4)),l("div",{class:w({"text-entry":!0,circle:!i(v)})},[l("div",{style:f({color:e.textColor}),class:"integer"},[i(v)&&e.hasTextContent?(n(),c("span",Y,_(e.text)+"\xA0",1)):p("",!0),i(v)&&e.hasTextContent?(n(),c("span",Z,"(")):p("",!0),l("span",ee,_(e.isPercentShown?e.percentage:i($)[0]),1),e.isPercentShown?p("",!0):(n(),c("span",te,".")),e.isPercentShown?p("",!0):(n(),c("span",ae,_(i($)[1]),1)),e.isPercentShown?(n(),c("span",re,"%")):p("",!0),i(v)&&e.hasTextContent?(n(),c("span",ne,")")):p("",!0)],4)],2)]),e.text&&!i(v)?(n(),c("div",{key:0,style:f({color:e.textColor}),class:"text"},_(e.text),5)):p("",!0)],4))}});var z=x(oe,[["__scopeId","data-v-632fc283"]]);const se={key:0,class:"loading"},ce={class:"progress-container"},ie={class:"loading-data"},le={key:0,class:"section"},ue={class:"bars"},de=I({setup(e){const t=m(1),a=m(0),u=m(!1),r=m(!0),o=m({}),s=m([]),C=setInterval(()=>{t.value===5&&(t.value=0),t.value++,u.value&&clearInterval(C)},650),h=N.int(35,44),y=N.int(5,9),E=setInterval(()=>{a.value++,a.value>=h&&clearInterval(E)},80),J=setInterval(()=>{a.value<h||(a.value++,a.value>=h+y&&clearInterval(J))},400),$=setInterval(()=>{a.value<h+y||(a.value+=N.int(3,5),a.value>=100&&(a.value=100,clearInterval($),u.value=!0,setTimeout(()=>r.value=!1,800)))},60),v=d(()=>Array.from({length:t.value}).fill(".").join(""));return j.get("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json").then(({data:g})=>{o.value={General:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"}],Frontend:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"}],Backend:[{text:"JavaScript",percentage:60,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:25,color:"#E5CF1C"},{text:"JavaScript",percentage:30,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"},{text:"JavaScript",percentage:70,color:"#E5CF1C"},{text:"JavaScript",percentage:20,color:"#E5CF1C"}]},s.value=Object.keys(o.value)}),(g,F)=>(n(),c("div",{class:w({container:!0,"content-is-loading":r.value})},[L(M,{name:"fade"},{default:D(()=>[u.value?p("",!0):(n(),c("section",se,[l("div",ce,[l("h2",ie,"Please wait. Loading data about me"+_(i(v)),1),L(z,{percentage:a.value,"is-percent-shown":!0},null,8,["percentage"])])]))]),_:1}),(n(!0),c(A,null,T(s.value,k=>(n(),B(M,{name:"fade"},{default:D(()=>[u.value?(n(),c("section",le,[l("h2",null,_(k),1),l("div",ue,[(n(!0),c(A,null,T(o.value[k],({percentage:P,text:S,color:b})=>(n(),B(z,{"progressbar-type":"circle","progressbar-color":b,"text-color":b,text:S,percentage:P,"animation-duration":.5,"has-text-content":!0,size:80,await:.8},null,8,["progressbar-color","text-color","text","percentage","animation-duration","await"]))),256))])])):p("",!0)]),_:2},1024))),256))],2))}});var pe=x(de,[["__scopeId","data-v-7202f707"]]);const ve={};function ge(e,t){return"About"}var fe=x(ve,[["render",ge]]);const he={};function me(e,t){return"Frontend"}var _e=x(he,[["render",me]]);const ye={};function xe(e,t){return"Backend"}var Ce=x(ye,[["render",xe]]);const O={main:{name:"Home",type:"main",component:pe},about:{name:"About",type:"about",component:fe},frontend:{name:"Frontend Skills",type:"frontend",component:_e},backend:{name:"Backend Skills",type:"backend",component:Ce}};const ke={class:"app"},Se={class:"aside"},be=["onClick"],$e=["href"],Fe={class:"page"},Pe=I({setup(e){const t=q(),a=d(()=>t.getters.currentPage),u=r=>t.dispatch("setPage",r);return(r,o)=>(n(),c("div",ke,[l("aside",Se,[(n(!0),c(A,null,T(Object.values(i(O)),s=>(n(),c("div",{class:w({"link-container":!0,active:s.type===i(a).type}),onClick:R(C=>u(s.type),["prevent"])},[l("a",{class:"link",href:`/${s.type}`},_(s.name),9,$e)],10,be))),256))]),l("main",Fe,[(n(),B(H(i(a).component)))])]))}});var we=x(Pe,[["__scopeId","data-v-87052c94"]]);const Ee=V({state:{page:"main",pages:O},getters:{currentPage(e){return e.pages[e.page]}},mutations:{setPage(e,t){e.page=t}},actions:{setPage({commit:e},t){e("setPage",t)}}}),Je=W(we).use(Ee);Je.mount("#app");
