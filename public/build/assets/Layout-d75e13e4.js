import{K as f,r as b,o as n,c as r,a as c,b as s,t as l,u as a,F as h,h as x,n as u,w as i,d as m,x as k,k as d}from"./app-40f6085e.js";import g from"./Board-06669ad4.js";const C={class:"h-screen"},y={class:"bg-gray-800 z-10 h-screen sidebar"},N={class:"text-white text-2xl font-bold text-center py-4"},$={class:"sidenav"},w=s("span",{class:"icon"},[s("i",{class:"gg-add-r"})],-1),B=s("span",{class:"name"},"Create New Board",-1),T=[w,B],V=["onClick"],z=["src"],D={class:"name"},F=s("span",{class:"icon"},[s("i",{class:"gg-board"})],-1),L=s("span",{class:"name"},"Dashboard",-1),S={class:"relative main"},j={class:"user-panel"},E=["src"],I=["src"],A={__name:"Layout",setup(K){const t=f(),_=o=>{g.methods.open(o)};return(o,p)=>{const v=b("Toast");return n(),r(h,null,[c(v),s("div",C,[s("aside",y,[s("h1",N,l(a(t).props.appName),1),s("nav",$,[s("li",null,[s("a",{onClick:p[0]||(p[0]=e=>_({title:"New Board"})),class:"cursor-pointer",id:"create-board"},T)]),(n(!0),r(h,null,x(a(t).props.boards,e=>(n(),r("li",{class:u({active:o.$page.url.startsWith("/boards/"+e.id)})},[s("button",{class:"edit-board-btn",onClick:M=>_(e)},"⚙️",8,V),c(a(d),{href:"/boards/"+e.id},{default:i(()=>[s("img",{src:e.icon,class:"icon"},null,8,z),s("span",D,l(e.title),1)]),_:2},1032,["href"])],2))),256)),s("li",{class:u({active:o.$page.component==="Index"})},[c(a(d),{href:"/"},{default:i(()=>[F,L]),_:1})],2)])]),s("main",S,[s("div",j,[a(t).props.user.avatar?(n(),r("img",{key:0,src:a(t).props.user.avatar,class:"avatar"},null,8,E)):(n(),r("img",{key:1,src:"/data/avatar/avatar.jpg",class:"avatar"},null,8,I)),m(" "+l(a(t).props.user.name)+" ",1),c(a(d),{href:"/logout",class:"exit"},{default:i(()=>[m("x")]),_:1})]),k(o.$slots,"default"),c(g)])])],64)}}};export{A as default};
