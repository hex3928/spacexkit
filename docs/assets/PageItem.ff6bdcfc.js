import{k as t,l as h,a as o,c as i,b as n,d as g,t as m,n as p,g as x,u as y}from"./index.4faffcd7.js";const b=s=>s.replace(/([A-Z])/g,l=>` ${l}`).replace(/^./,l=>l.toUpperCase()).replaceAll("_"," "),w=s=>/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(s);var k={props:{json:void 0},setup(s){const l=["rockets","ships","launches","launchpads","landpads","capsules","crew"],u=["rocket","ship","launchpad","landpad","payload","capsule","core"],f=(e,a)=>{if(e==="youtube_id")return c(`https://www.youtube.com/watch?v=${a}`);if([...l,...u].includes(e)){const r=u.includes(e)?e==="launch"?"launches":e+"s":e;return Array.isArray(a)?t("ul",a.map(d=>t("li",t(h("router-link"),{to:`/${r}/${d}`,target:"_blank"},U=>d)))):t(h("router-link"),{to:`/${r}/${a}`,target:"_blank"},d=>a)}else return c(a)},c=e=>{if(typeof e=="string")return w(e)?t("a",{href:e,target:"_blank"},e):t("p",{class:"string"},e);if(typeof e=="number")return t("span",{class:"number"},e);if(typeof e=="boolean")return t("span",{class:`bool ${e?"bool-true":"bool-false"}`},e?"yes":"no");if(e===null||e===[])return t("span",{class:"null"},"-");if(typeof e=="object"){if(Array.isArray(e))return t("ul",{class:"array"},e.map(a=>t("li",{class:"array-item"},c(a))));{const a=[];for(const r in e)a.push(t("div",{class:"key-val-wrapper"},[t("dt",{class:"key"},t("span",{class:"string"},b(r))),t("dd",{class:"val"},f(r,e[r]))]));return t("dl",{class:"dict"},a)}}};return e=>t("div",{"data-vjson":""},c(s.json))}};const v={class:"border-t-4 border-sky-400 my-12 md:my-12 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl bg-white shadow-md shadow-sky-400 overflow-hidden sm:rounded-lg"},j={class:"flex flex-wrap"},$={key:0},A=["src"],V={class:"px-4 py-5 sm:px-6"},C={class:"text-lg leading-6 font-medium text-gray-900"},_={class:"mt-1 max-w-2xl text-sm text-gray-500"},B={key:0,class:"text-lg font-bold text-emerald-400 uppercase"},N={key:1},S={class:"border-t border-gray-400 bg-black overflow-y-auto max-h-96"},D={props:{data:{}},setup(s){return(l,u)=>(o(),i("div",v,[n("div",j,[s.data.image||s.data.images?(o(),i("div",$,[n("img",{class:"h-40",src:s.data.image||Object.values(s.data.images)[0],alt:"Image"},null,8,A)])):g("",!0),n("div",V,[n("h3",C,m(s.data.name||s.data.serial||s.data.title),1),n("p",_,m(s.data.id),1),s.data.upcoming?(o(),i("p",B,"Upcoming")):s.data.success===!0||s.data.success===!1?(o(),i("span",N,[n("p",{class:p(["text-lg font-bold",{"text-green-400":s.data.success,"text-red-400":!s.data.success}])},m(s.data.success?"Successfull":"Unsuccessfull"),3)])):g("",!0)])]),n("div",S,[x(y(k),{json:s.data},null,8,["json"])])]))}};export{k as V,D as _};