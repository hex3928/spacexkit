import{r as l,h as _,o as m,a,c as s,t as p,d as c,g as v,F as f,b as n}from"./index.4faffcd7.js";import{a as h}from"./api.bae3838d.js";import{_ as x}from"./PageItem.ff6bdcfc.js";const y={key:0,class:"flex justify-center text-4xl font-semibold text-red-400"},g={key:1,class:"py-10 flex justify-center"},w=n("svg",{class:"animate-spin -ml-1 mr-3 h-16 w-16 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),k=[w],B={key:2},b={setup(C){const e=l({}),o=l(!0),r=l(!1),i=_(),u=i.params.id;return m(d=>{setTimeout(t=>{r.value=!0},200),h(`/${i.name.replace("get-one-","")}/${u}`).then(t=>e.value=t).then(t=>o.value=!1)}),(d,t)=>(a(),s(f,null,[e.value.error?(a(),s("div",y,p(e.value.error),1)):c("",!0),(o.value||!r.value)&&!e.value.error?(a(),s("div",g,k)):c("",!0),!o.value&&r.value&&!e.value.error?(a(),s("div",B,[v(x,{data:e.value},null,8,["data"])])):c("",!0)],64))}};export{b as default};
