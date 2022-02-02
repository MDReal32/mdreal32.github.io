import{d as j,q as B,k as b,j as E,o as r,b as d,F as m,r as g,e as s,f as i,t,y as F,z as P,g as U}from"./vendor.3d62933d.js";import{_ as V,P as z}from"./index.522c0a3c.js";const A=l=>["January","February","March","April","May","June","July","August","September","October","November","December"][l-1],J=(l,p,v)=>`${p.repeat(v)}${l.toString()}`.slice(-v);const f=l=>(F("data-v-799a7222"),l=l(),P(),l),M=["onClick"],O={class:"resume"},D={class:"left"},q={class:"sector logo"},R=["alt","src"],W={class:"sector"},G=f(()=>s("h2",{class:"header"},"Social Networks",-1)),H={class:"links"},K={class:"link"},Q=["href"],T=["alt","src"],X={class:"sector"},Y=f(()=>s("h2",{class:"header"},"Languages",-1)),Z={class:"languages"},ss={class:"language"},es={class:"language--name"},ts={class:"sector"},os=f(()=>s("h2",{class:"header"},"Education",-1)),ns={class:"educations"},as={class:"education"},cs={class:"name"},is={class:"location"},rs={class:"description"},ds={key:0,class:"from-to"},_s={key:1,class:"from-since"},ls={class:"right"},us={class:"sector about"},hs={class:"header"},ms={class:"header"},gs={class:"half"},ps={class:"first"},vs={class:"second"},fs={class:"half"},bs={class:"first"},ys={class:"second"},ks={class:"sector"},Ss=f(()=>s("h2",{class:"header"},"Skills",-1)),$s={class:"skills"},ws={class:"skill"},xs={class:"skill-name"},Cs={class:"skill-items"},Is={class:"item"},Ns={class:"item-name"},Ls={class:"item-description"},js=f(()=>s("section",{class:"sector"},[s("h2",null,"Work Experience")],-1)),Bs=j({setup(l){const p=Symbol("nongruoup"),v=B(),c=v.getters.config,S=b(()=>v.getters.isPageReady),$=b(()=>c.education.reverse()),w=["az","ru","en"],y=E("az"),x=a=>y.value=a,h=a=>c.i18n[y.value][a.slice(1)]||a,C=b(()=>{const{day:a,month:_,year:e}=c.birthday;return`${J(a,"0",2)} ${A(_)} ${e}`}),I=a=>a>=100?"Native":a>=85?"Advanced":a>=70?"Upper-Intermediate":a>=60?"Intermediate":a>=40?"Pre-Intermediate":"Beginner",N=a=>{var o,n;const _={github:/^(?:https?:\/\/(?:www\.)?)github\.com\/(?<username>\w+)\/?$/,linkedin:/^(?:https?:\/\/(?:www\.)?)linkedin\.com\/in\/(?<username>\w+)\/?$/};let e;return(e=a.match(_.github))?(o=e.groups)==null?void 0:o.username:(e=a.match(_.linkedin))?(n=e.groups)==null?void 0:n.username:a},L=a=>{const _={[p]:[]};a.forEach(o=>{var n;o.group?(_[n=o.group]||(_[n]=[]),_[o.group].push(o)):_[p].push(o)});const e=Object.values(_).map(o=>o.reduce((n,u)=>(n.name=n.name?`${n.name} / ${u.name}`:u.name,n.description=c.groups[u.group],n),{}));return[..._[p],...e]};return(a,_)=>(r(),d(m,null,[(r(),d(m,null,g(w,e=>{var o;return s("button",{onClick:n=>x(e.toLowerCase())},t(((o=e==null?void 0:e.at(0))==null?void 0:o.toUpperCase())||"")+t((e==null?void 0:e.slice(1))||""),9,M)}),64)),s("div",O,[s("div",D,[s("section",q,[s("img",{alt:`${h(i(c).name)} ${h(i(c).surname)}`,src:i(c).image,class:"me"},null,8,R)]),s("section",W,[G,s("div",H,[(r(!0),d(m,null,g(i(c).socialLinks,({name:e,icon:o,url:n})=>(r(),d("div",K,[s("a",{href:n,target:"_blank"},[s("img",{alt:e,src:o,class:"icon"},null,8,T),s("span",null,"@"+t(N(n)),1)],8,Q)]))),256))])]),s("section",X,[Y,s("div",Z,[(r(!0),d(m,null,g(i(c).languages,({name:e,percent:o})=>(r(),d("div",ss,[s("div",es,t(e),1),U(z,{"has-text-content":!0,"is-animate":i(S),"is-number-visible":!1,percentage:o,text:I(o),"container-width":"80%"},null,8,["is-animate","percentage","text"])]))),256))])]),s("section",ts,[os,s("div",ns,[(r(!0),d(m,null,g(i($),({name:e,description:o,location:n,from:u,to:k})=>(r(),d("div",as,[s("div",cs,t(e),1),s("div",is,t(n.name)+" - "+t(n.country)+", "+t(n.city),1),s("div",rs,t(o),1),k?(r(),d("div",ds,t(u)+" - "+t(k),1)):(r(),d("div",_s,t(u)+" - Since",1))]))),256))])])]),s("div",ls,[s("section",us,[s("h2",hs,t(h(i(c).name))+" "+t(h(i(c).surname)),1),s("h3",ms,t(h(i(c).description)),1),s("div",gs,[s("div",ps,t(i(c).phoneNumber),1),s("div",vs,t(i(C)),1)]),s("div",fs,[s("div",bs,t(i(c).email),1),s("div",ys,t(h(i(c).from.city))+", "+t(h(i(c).from.country)),1)])]),s("section",ks,[Ss,s("div",$s,[(r(!0),d(m,null,g(Object.entries(i(c).skills),([e,o])=>(r(),d("div",ws,[s("h4",xs,t(e)+" Skills",1),s("div",Cs,[(r(!0),d(m,null,g(L(o),({name:n,description:u})=>(r(),d("div",Is,[s("div",Ns,t(n),1),s("div",Ls,t(u),1)]))),256))])]))),256))])]),js])])],64))}});var Ps=V(Bs,[["__scopeId","data-v-799a7222"]]);export{Ps as default};
