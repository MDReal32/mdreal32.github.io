import{c as ee,a as m,d as R,u as V,b as K,o as r,e as c,f as t,n as N,F as C,r as P,g as o,h as W,i as O,j as te,t as l,w as G,k as L,l as se,m as I,p as ne,q as oe,s as ae,v as re,x as ie,y as ce,z as U,A as Q,B as le}from"./vendor.89cbb03c.js";const ue=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const _ of i)if(_.type==="childList")for(const v of _.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&p(v)}).observe(document,{childList:!0,subtree:!0});function n(i){const _={};return i.integrity&&(_.integrity=i.integrity),i.referrerpolicy&&(_.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?_.credentials="include":i.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function p(i){if(i.ep)return;i.ep=!0;const _=n(i);fetch(i.href,_)}};ue();const E=(e,s=0,n=1,p=i=>i.toUpperCase())=>p(e.slice(s,n))+e.slice(n),D=ee({state:{config:{},isPageReady:!1,lang:"az",skillType:""},getters:{config({config:e}){return e},skillType({skillType:e}){return e},isPageReady({isPageReady:e}){return e},getLang({lang:e}){return e}},mutations:{setConfig(e,s){var n;e.config=s,e.skillType=(n=Object.keys(s.skillTypes))==null?void 0:n[0]},pageReady(e){e.isPageReady=!0},setLang(e,s){e.lang=s},setSkillType(e,s){e.skillType=s}},actions:{setConfig({commit:e},s){e("setConfig",s)},pageReady({commit:e}){e("pageReady")},setLang({commit:e},s){e("setLang",s)},setSkillType({commit:e},s){e("setSkillType",s)}}}),de=(e=m(()=>D.getters.config).value)=>(Object.keys(e.skills||[]),[{path:"/cv",text:"CV"}]);var B=(e,s)=>{const n=e.__vccOpts||e;for(const[p,i]of s)n[p]=i;return n};const he={class:"app"},_e={class:"aside"},pe={class:O({groups:!0,active:!0})},ge=["onClick"],me=["onClick"],ve=["onClick"],fe=["href"],ye={class:"page"},be=R({setup(e){const s=V(),n=K(),p=de(),i=s.getters.config,_=["az","ru","en"],v=m(()=>Object.keys(i.skillTypes||{})),f=m(()=>s.getters.skillType),$=m(()=>s.getters.getLang),u=y=>s.dispatch("setLang",y),S=y=>s.dispatch("setSkillType",y),z=y=>()=>p[y].path===n.currentRoute.value.path,A=y=>n.push(p[y].path);return(y,x)=>{const T=te("router-view");return r(),c("div",he,[t("aside",_e,[t("div",pe,[t("div",{class:"grouping",style:N(`--children-count: ${_.length}`)},[(r(),c(C,null,P(_,a=>t("button",{class:O({button:!0,animated:!0,active:a===o($)}),onClick:d=>u(a)},[t("span",null,l(o(E)(a||"")),1)],10,ge)),64))],4),t("div",{class:"grouping",style:N(`--children-count: ${o(v).length>3?3:o(v).length}`)},[(r(!0),c(C,null,P(o(v),a=>(r(),c("button",{class:O({button:!0,animated:!0,active:a===o(f)}),onClick:d=>S(a)},[t("span",null,l(o(E)(a.toLowerCase()||"")),1)],10,me))),256))],4)]),(r(!0),c(C,null,P(o(p),(a,d)=>(r(),c("div",{class:O({"link-container":!0,active:z(d)}),onClick:G(h=>A(d),["prevent"])},[t("a",{href:a.path,class:"link",onClick:x[0]||(x[0]=G(()=>{},["prevent"]))},l(a.text),9,fe)],10,ve))),256))]),t("main",ye,[W(T)])])}}});var ke=B(be,[["__scopeId","data-v-bbf32d7e"]]);const $e={class:O({progress:!0})},xe={key:0,class:"line"},Se=["d","stroke-width"],we=["d","stroke","stroke-width"],Ce={key:0},Te={key:1},Pe={key:2,class:"fullPart"},je={key:3,class:"point"},Ne={key:4,class:"fractionalPart"},Le={key:5,class:"fractionalPart"},Ae={key:6},Ie=R({props:{strokeHeight:{type:Number,default:4},percentage:{type:Number,default:0,required:!0,validator:e=>e>=0&&e<=100},progressbarType:{type:String,default:"line",validator:e=>["circle","line"].includes(e)},progressbarColor:{type:String,default:"#20a0ff"},hasTextContent:{type:Boolean,default:!1},text:{type:String},textColor:{type:String},size:{type:Number,default:100},animationDuration:{type:Number,default:1},contentMaxAcceptableNumber:{type:Number,default:10},containerWidth:{type:String,default:"100%"},isPercentShown:{type:Boolean,default:!1},isNumberVisible:{type:Boolean,default:!0},await:{type:Number,default:0},isAnimate:{type:Boolean,default:null}},setup(e){const s=e,n=L(0),p=m(()=>s.isPercentShown?s.percentage:n.value),i=m(()=>({width:`${p.value}%`,backgroundColor:s.progressbarColor})),_=m(()=>s.strokeHeight*100/s.size),v=m(()=>50-_.value/2),f=m(()=>v.value*2),$=m(()=>`M 50 50 m 0 -${v.value} a ${v.value} ${v.value} 0 1 1 0 ${f.value} a ${v.value} ${v.value} 0 1 1 0 -${f.value}`),u=m(()=>2*Math.PI*v.value),S=m(()=>({strokeDasharray:`${u.value}px,${u.value}px`,strokeDashoffset:`${(1-n.value/100)*u.value}px`})),z=m(()=>(s.contentMaxAcceptableNumber*n.value/100).toFixed(2)),A=m(()=>z.value.split(".")),y=m(()=>s.progressbarType==="line"),x=20,T=s.percentage/(x*(x+1)/2),a=s.animationDuration*1e3/(x*(x+1)/2);let d=T*x,h=a*x;const g=()=>{if(n.value+=d,d-=T,h-=a,n.value+T>=s.percentage){n.value=s.percentage;return}setTimeout(g,h)};return s.isAnimate!==!1&&(s.await?setTimeout(()=>setTimeout(g,h),s.await*1e3):setTimeout(g,h)),se(()=>s.isAnimate,b=>b&&(s.await?setTimeout(()=>setTimeout(g,h),s.await*1e3):setTimeout(g,h))),(b,w)=>(r(),c("div",{class:"container",style:N({width:e.containerWidth})},[t("div",$e,[o(y)?(r(),c("div",xe,[t("div",{style:N({height:`${e.strokeHeight}px`}),class:"outer"},[t("div",{style:N(o(i)),class:"inner"},null,4)],4)])):(r(),c("div",{key:1,style:N({width:`${e.size}px`,height:`${e.size}px`}),class:"circle"},[(r(),c("svg",{style:N({width:`${e.size}px`,height:`${e.size}px`}),viewBox:"0 0 100 100"},[t("path",{d:o($),"stroke-width":o(_),fill:"none",stroke:"#e5e9f2"},null,8,Se),t("path",{d:o($),stroke:s.progressbarColor,"stroke-width":o(_),style:N(o(S)),class:"fillTrack",fill:"none","stroke-linecap":"round"},null,12,we)],4))],4)),t("div",{class:O({"text-entry":!0,circle:!o(y)})},[t("div",{style:N({color:e.textColor}),class:"text-content"},[o(y)&&e.hasTextContent?(r(),c("span",Ce,l(e.text)+"\xA0",1)):I("",!0),o(y)&&e.hasTextContent&&!e.isPercentShown&&e.text&&e.isNumberVisible?(r(),c("span",Te,"(")):I("",!0),e.isNumberVisible?(r(),c("span",Pe,l(e.isPercentShown?e.percentage:e.hasTextContent?o(A)[0]:""),1)):I("",!0),!e.isPercentShown&&e.hasTextContent&&e.isNumberVisible?(r(),c("span",je,".")):I("",!0),!e.isPercentShown&&e.isNumberVisible?(r(),c("span",Ne,l(e.hasTextContent?o(A)[1]:""),1)):I("",!0),e.isPercentShown&&e.isNumberVisible?(r(),c("span",Le,"%")):I("",!0),o(y)&&e.hasTextContent&&!e.isPercentShown&&e.text&&e.isNumberVisible?(r(),c("span",Ae,")")):I("",!0)],4)],2)]),e.text&&!o(y)?(r(),c("div",{key:0,style:N({color:e.textColor}),class:"text"},l(e.text),5)):I("",!0)],4))}});var q=B(Ie,[["__scopeId","data-v-282276ac"]]);const J=e=>["#january","#february","#march","#april","#may","#june","#july","#august","#september","#october","#november","#december"][e-1],ze=(e,s,n)=>`${s.repeat(n)}${e.toString()}`.slice(-n);const j=e=>(ne("data-v-1f6e1ecc"),e=e(),oe(),e),Re={class:"resume"},Oe={class:"left"},Be={class:"sector logo"},Me=["srcset"],Ve=["alt","src"],Ee={class:"sector"},De=j(()=>t("h2",{class:"header"},"Social Networks",-1)),He={class:"links"},Fe={class:"link"},We=["href"],Ue=["alt","src"],qe={class:"sector"},Je=j(()=>t("h2",{class:"header"},"Languages",-1)),Ke={class:"languages"},Ge={class:"language"},Qe={class:"language--name"},Xe={class:"sector"},Ye=j(()=>t("h2",{class:"header"},"Education",-1)),Ze={class:"educations"},et={class:"education"},tt={class:"name"},st={class:"location"},nt={key:0,class:"from-to"},ot={key:1,class:"from-since"},at={class:"right"},rt={class:"sector about"},it={class:"header"},ct={class:"header"},lt={class:"half"},ut={class:"first"},dt=j(()=>t("img",{src:"https://icongr.am/material/phone.svg?size=16&color=currentColor",alt:"Phone",width:"16",height:"16"},null,-1)),ht={class:"second"},_t=j(()=>t("img",{src:"https://icongr.am/material/calendar.svg?size=16&color=currentColor",alt:"Date",width:"16",height:"16"},null,-1)),pt={class:"half"},gt={class:"first"},mt=j(()=>t("img",{src:"https://icongr.am/material/email.svg?size=16&color=currentColor",alt:"Mail",width:"16",height:"16"},null,-1)),vt={class:"second"},ft=j(()=>t("img",{src:"https://icongr.am/material/map-marker.svg?size=16&color=currentColor",alt:"Marker",width:"16",height:"16"},null,-1)),yt={class:"sector"},bt=j(()=>t("h2",{class:"header"},"Skills",-1)),kt={class:"skills"},$t={class:"skill"},xt={class:"skill-name"},St={class:"skill-items"},wt={class:"item"},Ct={class:"item-name"},Tt={class:"item-description"},Pt={class:"sector"},jt=j(()=>t("h2",null,"Work Experience",-1)),Nt={class:"jobs"},Lt={class:"job"},At={class:"job-name"},It={class:"job-content"},zt={class:"name"},Rt=j(()=>t("span",{class:"hyphen"},"\xA0-\xA0",-1)),Ot={class:"location"},Bt=j(()=>t("span",{class:"hyphen"},"\xA0-\xA0",-1)),Mt={key:0,class:"from-to"},Vt={key:1,class:"from-since"},Et={class:"job-description"},Dt=R({setup(e){const s=V(),n=s.getters.config,p=m(()=>s.getters.getLang),i=m(()=>s.getters.isPageReady),_=m(()=>n.education.reverse()),v=m(()=>n.job.reverse()),f=m(()=>Object.keys(n.skillTypes)),$=m(()=>s.getters.skillType);L();const u=a=>{var d;return((d=n.i18n[a==null?void 0:a.slice(1)])==null?void 0:d[p.value])||a},S=(a,d)=>p.value==="az"?`${u(a)}${u(`#${d}`)}`:`${u(`#${d}`)} ${u(a)}`,z=m(()=>{const{day:a,month:d,year:h}=n.birthday;return`${ze(a,"0",2)} ${u(J(d))} ${h}`}),A=a=>u(a>=100?"#native":a>=85?"#advanced":a>=70?"#upper-intermediate":a>=60?"#intermediate":a>=40?"#pre-intermediate":"#beginner").split(" ").map(d=>E(d)).join(" "),y=a=>{var g,b;const d={github:/^(?:https?:\/\/(?:www\.)?)?github\.com\/(?<username>\w+)\/?$/,linkedin:/^(?:https?:\/\/(?:www\.)?)?linkedin\.com\/in\/(?<username>\w+)\/?$/};let h;return(h=a.match(d.github))?(g=h.groups)==null?void 0:g.username:(h=a.match(d.linkedin))?(b=h.groups)==null?void 0:b.username:a},x=a=>{const d={};return Object.entries(a).forEach(([h,g])=>{f.value.includes(h)?h===$.value&&(d[h]=g):d[h]=g}),d},T=a=>{var w;const d={};for(const k of a)k.group&&(d[w=k.group]||(d[w]=[]),d[k.group].push(k));const h=Object.entries(d).map(([k,H])=>{const Z=H.reduce((M,F)=>(M.name=M.name?`${M.name} / ${F.name}`:F.name,M.description=n.groups[F.group],M),{});return[k,Z]}),g=Object.fromEntries(h),b=new Set;return a.map(k=>{if(k.group&&!b.has(k.group))return b.add(k.group),g[k.group];if(!k.group)return k}).flat(1).filter(Boolean)};return(a,d)=>(r(),c("div",Re,[t("div",Oe,[t("section",Be,[t("picture",null,[t("source",{srcset:o(n).image.png},null,8,Me),t("img",{alt:`${u(o(n).name)} ${u(o(n).surname)}`,src:o(n).image.png,class:"me"},null,8,Ve)])]),t("section",Ee,[De,t("div",He,[(r(!0),c(C,null,P(o(n).socialLinks,({name:h,icon:g,url:b})=>(r(),c("div",Fe,[t("a",{href:b,target:"_blank"},[t("img",{alt:h,src:g,class:"icon",width:"20",height:"20"},null,8,Ue),t("span",null,"@"+l(y(b)),1)],8,We)]))),256))])]),t("section",qe,[Je,t("div",Ke,[(r(!0),c(C,null,P(o(n).languages,({name:h,percent:g})=>(r(),c("div",Ge,[t("div",Qe,l(h),1),W(q,{"has-text-content":!0,"is-animate":o(i),"is-number-visible":!1,percentage:g,text:A(g),"container-width":"80%"},null,8,["is-animate","percentage","text"])]))),256))])]),t("section",Xe,[Ye,t("div",Ze,[(r(!0),c(C,null,P(o(_),({name:h,location:g,from:b,to:w})=>(r(),c("div",et,[t("div",tt,l(u(h)),1),t("div",st,l(u(g.name))+" - "+l(u(g.country))+", "+l(u(g.city)),1),w?(r(),c("div",nt,l(b)+" - "+l(w),1)):(r(),c("div",ot,l(S(b.toString(),"education.since")),1))]))),256))])])]),t("div",at,[t("section",rt,[t("h2",it,l(u(o(n).name))+" "+l(u(o(n).surname)),1),t("h3",ct,l(u(o(n).description)),1),t("div",lt,[t("div",ut,[dt,t("span",null,l(o(n).phoneNumber),1)]),t("div",ht,[_t,t("span",null,l(o(z)),1)])]),t("div",pt,[t("div",gt,[mt,t("span",null,l(o(n).email),1)]),t("div",vt,[ft,t("span",null,l(u(o(n).from.city))+", "+l(u(o(n).from.country)),1)])])]),t("section",yt,[bt,t("div",kt,[(r(!0),c(C,null,P(x(o(n).skills),(h,g)=>(r(),c("div",$t,[t("h4",xt,l(g)+" Skills",1),t("div",St,[(r(!0),c(C,null,P(T(h),({name:b,description:w})=>(r(),c("div",wt,[t("div",Ct,l(b),1),t("div",Tt,l(u(w||"")),1)]))),256))])]))),256))])]),t("section",Pt,[jt,t("div",Nt,[(r(!0),c(C,null,P(o(v),({name:h,role:g,description:b,from:w,to:k,location:H})=>(r(),c("div",Lt,[t("div",At,[t("span",null,l(g),1)]),t("div",It,[t("span",zt,l(h),1),Rt,t("span",Ot,l(u(H.country))+", "+l(u(H.city)),1),Bt,k?(r(),c("span",Mt,l(o(E)(S(`${w.year} ${u(o(J)(w.month))}`,"work.from")))+" "+l(o(E)(S(`${k.year} ${u(o(J)(k.month))}`,"work.to"))),1)):(r(),c("span",Vt,l(S(`${w.month} ${w.year}`,"education.since")),1))]),t("div",Et,[t("span",null,l(u(b||"")),1)])]))),256))])])])]))}});var Ht=B(Dt,[["__scopeId","data-v-1f6e1ecc"]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ht});const Ft={};function Wt(e,s){return"About"}var Ut=B(Ft,[["render",Wt]]),qt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ut});const Jt={class:"container"},Kt={class:"section"},Gt={class:"bars"},Qt=R({setup(e){const s=L({}),n=L([]),p=V();s.value=p.getters.config.skills,n.value=Object.keys(s.value);const i=m(()=>p.getters.isPageReady);return(_,v)=>(r(),c("div",Jt,[(r(!0),c(C,null,P(n.value,f=>(r(),c("section",Kt,[t("h2",null,l(f)+" Skills",1),t("div",Gt,[(r(!0),c(C,null,P(s.value[f],({percentage:$,name:u,color:S})=>(r(),ae(q,{"animation-duration":.5,"is-animate":o(i),"has-text-content":!0,percentage:$,"progressbar-color":S,size:80,text:u,"text-color":S,"progressbar-type":"circle"},null,8,["animation-duration","is-animate","percentage","progressbar-color","text","text-color"]))),256))])]))),256))]))}});var Xt=B(Qt,[["__scopeId","data-v-5afaed2c"]]),Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xt});const Zt=R({setup(e){const s=V(),n=K();re((f,$,u)=>{f.params.techid&&(p.value=f.params.techid),u()});const p=L(n.currentRoute.value.params.techid),i=s.getters.config,_=m(()=>i.skills[p.value]||[]),v=m(()=>Array.from(new Set(_.value.map(f=>f.group))).filter(Boolean).reduce((f,$)=>(f[$]=i.groups[$],f),{}));return(f,$)=>(r(),c(C,null,[t("pre",null,l(o(v)),1),t("pre",null,l(o(_)),1)],64))}});var es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zt});const ts=[{name:"Index",path:"/",component:async()=>X},{name:"Home",path:"/home",component:async()=>Yt},{name:"About",path:"/about",component:async()=>qt},{name:"Technology",path:"/technology/:techid",component:async()=>es},{name:"CV",path:"/cv",component:async()=>X}],Y=ie({history:ce(),routes:ts});const ss=R({setup(e){const s=L(),n=V(),p=L(1),i=L(0),_=L(!1),v=U.int(35,44),f=U.int(5,9),$=setInterval(()=>{i.value++,i.value>=v&&clearInterval($)},80),u=setInterval(()=>{i.value<v||(i.value++,i.value>=v+f&&clearInterval(u))},300),S=setInterval(()=>{var y,x;if(!(i.value<v+f)&&(i.value+=U.int(3,5),i.value>=100)){i.value=100,clearInterval(S),_.value=!0;const T=(x=(y=s.value)==null?void 0:y.parentNode)==null?void 0:x.parentNode;T.classList.add("loaded"),setTimeout(()=>n.dispatch("pageReady"),400),setTimeout(()=>{var a;return(a=T.parentNode)==null?void 0:a.removeChild(T)},800)}},30),z=setInterval(()=>{p.value===5&&(p.value=0),p.value++,_.value&&clearInterval(z)},650),A=m(()=>Array.from({length:p.value}).fill(".").join(""));return(y,x)=>(r(),c(C,null,[t("h2",{ref_key:"rootElement",ref:s},"Please wait. Loading data about me"+l(o(A)),513),W(q,{class:"preloader-progressbar","is-percent-shown":!0,percentage:i.value},null,8,["percentage"])],64))}});var ns=B(ss,[["__scopeId","data-v-33022839"]]);const os=Q(ns).use(D),as=()=>Q(ke).use(Y).use(D);os.mount(".preloader .preloader-container");(async()=>{const e=as();await Y.isReady();const s=JSON.parse(document.getElementById("data").textContent);await D.dispatch("setConfig",s),le.get("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json").then(({data:n})=>D.dispatch("setConfig",n)).then(()=>!1),e.mount("#app")})();
