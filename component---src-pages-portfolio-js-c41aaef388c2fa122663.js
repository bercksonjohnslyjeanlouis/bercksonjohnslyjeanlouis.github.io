"use strict";(self.webpackChunkjlbj_github_io=self.webpackChunkjlbj_github_io||[]).push([[25],{4529:function(e,a,t){var s=t(7294);t(2281),t(4160);a.Z=e=>{let{page:a,description:t}=e;return s.createElement("header",{style:{backgroundColor:"white"},className:"section-header text-center mb-5 pt-4 pb-1"},s.createElement("h3",{className:"text-uppercase text-black"},a),s.createElement("p",{className:"position-relative"},t))}},9284:function(e,a,t){var s=t(7294),r=t(1945);a.Z=()=>s.createElement("div",{className:"my-3 d-flex justify-content-center align-items-center text-center"},s.createElement(r.Z,{className:"btn btn-cta-primary",variant:"cta-primary",href:"https://www.linkedin.com/in/bercksonjohnslyjeanlouis"},"CONSULTER MON PROFIL LINKEDIN"))},4037:function(e,a,t){t.r(a);var s=t(7294),r=t(4051),n=t(1555),l=t(2351),c=t(1945),i=t(3053),o=t(4529),d=t(9284);a.default=()=>s.createElement(i.Z,null,s.createElement(o.Z,{page:"PORTFOLIO",description:"Mes realisations..."}),s.createElement("section",{className:"about section"},s.createElement("div",{className:"section-inner-g"},s.createElement("div",{className:"content"},s.createElement(r.Z,{style:{display:"flex",flexWrap:"wrap"}},[{count:"+ 10",category:"Applications Web et Logicielles",link:"/development"},{count:"+ 200",category:"Conceptions Graphiques",link:"/design"},{count:"+ 50",category:"Photos De Tout Genre",link:"/photography"},{count:"+ 15",category:"Événements Auxquels J'ai Participé",link:"/events"}].map(((e,a)=>s.createElement(n.Z,{key:a,md:12,className:"mx-0 mx-1 mb-3 d-flex justify-content-center align-items-center text-center width-full"},s.createElement(l.Z,{style:{textAlign:"center"}},s.createElement("div",{className:"col"},s.createElement("div",{className:"overflow-hidden flex-nowrap width-full",style:{textAlign:"center"}},s.createElement("h1",{className:"mb-1 text-center py-2"},s.createElement("span",{className:"text-reset"},e.count)),s.createElement("p",null,e.category),s.createElement("p",{style:{textAlign:"center"}},s.createElement(c.Z,{variant:"cta-primary-1",href:e.link},"Voir les détails"))))))))),s.createElement(d.Z,null)))))},1945:function(e,a,t){t.d(a,{Z:function(){return f}});var s=t(3967),r=t.n(s),n=t(7294),l=t(5893);const c=["as","disabled"];function i({tagName:e,disabled:a,href:t,target:s,rel:r,role:n,onClick:l,tabIndex:c=0,type:i}){e||(e=null!=t||null!=s||null!=r?"a":"button");const o={tagName:e};if("button"===e)return[{type:i||"button",disabled:a},o];const d=s=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&s.preventDefault(),a?s.stopPropagation():null==l||l(s)};return"a"===e&&(t||(t="#"),a&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:a?void 0:c,href:t,target:"a"===e?s:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}const o=n.forwardRef(((e,a)=>{let{as:t,disabled:s}=e,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,c);const[n,{tagName:o}]=i(Object.assign({tagName:t,disabled:s},r));return(0,l.jsx)(o,Object.assign({},r,n,{ref:a}))}));o.displayName="Button";var d=t(6792);const m=n.forwardRef((({as:e,bsPrefix:a,variant:t="primary",size:s,active:n=!1,disabled:c=!1,className:o,...m},f)=>{const u=(0,d.vE)(a,"btn"),[v,{tagName:p}]=i({tagName:e,disabled:c,...m}),N=p;return(0,l.jsx)(N,{...v,...m,ref:f,disabled:c,className:r()(o,u,n&&"active",t&&`${u}-${t}`,s&&`${u}-${s}`,m.href&&c&&"disabled")})}));m.displayName="Button";var f=m},2351:function(e,a,t){t.d(a,{Z:function(){return I}});var s=t(3967),r=t.n(s),n=t(7294),l=t(6792),c=t(5893);const i=n.forwardRef((({className:e,bsPrefix:a,as:t="div",...s},n)=>(a=(0,l.vE)(a,"card-body"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));i.displayName="CardBody";var o=i;const d=n.forwardRef((({className:e,bsPrefix:a,as:t="div",...s},n)=>(a=(0,l.vE)(a,"card-footer"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));d.displayName="CardFooter";var m=d;const f=n.createContext(null);f.displayName="CardHeaderContext";var u=f;const v=n.forwardRef((({bsPrefix:e,className:a,as:t="div",...s},i)=>{const o=(0,l.vE)(e,"card-header"),d=(0,n.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,c.jsx)(u.Provider,{value:d,children:(0,c.jsx)(t,{ref:i,...s,className:r()(a,o)})})}));v.displayName="CardHeader";var p=v;const N=n.forwardRef((({bsPrefix:e,className:a,variant:t,as:s="img",...n},i)=>{const o=(0,l.vE)(e,"card-img");return(0,c.jsx)(s,{ref:i,className:r()(t?`${o}-${t}`:o,a),...n})}));N.displayName="CardImg";var b=N;const x=n.forwardRef((({className:e,bsPrefix:a,as:t="div",...s},n)=>(a=(0,l.vE)(a,"card-img-overlay"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));x.displayName="CardImgOverlay";var y=x;const g=n.forwardRef((({className:e,bsPrefix:a,as:t="a",...s},n)=>(a=(0,l.vE)(a,"card-link"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));g.displayName="CardLink";var h=g,E=t(9602);const j=(0,E.Z)("h6"),w=n.forwardRef((({className:e,bsPrefix:a,as:t=j,...s},n)=>(a=(0,l.vE)(a,"card-subtitle"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));w.displayName="CardSubtitle";var $=w;const P=n.forwardRef((({className:e,bsPrefix:a,as:t="p",...s},n)=>(a=(0,l.vE)(a,"card-text"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));P.displayName="CardText";var k=P;const C=(0,E.Z)("h5"),R=n.forwardRef((({className:e,bsPrefix:a,as:t=C,...s},n)=>(a=(0,l.vE)(a,"card-title"),(0,c.jsx)(t,{ref:n,className:r()(e,a),...s}))));R.displayName="CardTitle";var Z=R;const O=n.forwardRef((({bsPrefix:e,className:a,bg:t,text:s,border:n,body:i=!1,children:d,as:m="div",...f},u)=>{const v=(0,l.vE)(e,"card");return(0,c.jsx)(m,{ref:u,...f,className:r()(a,v,t&&`bg-${t}`,s&&`text-${s}`,n&&`border-${n}`),children:i?(0,c.jsx)(o,{children:d}):d})}));O.displayName="Card";var I=Object.assign(O,{Img:b,Title:Z,Subtitle:$,Body:o,Link:h,Text:k,Header:p,Footer:m,ImgOverlay:y})},1555:function(e,a,t){var s=t(3967),r=t.n(s),n=t(7294),l=t(6792),c=t(5893);const i=n.forwardRef(((e,a)=>{const[{className:t,...s},{as:n="div",bsPrefix:i,spans:o}]=function({as:e,bsPrefix:a,className:t,...s}){a=(0,l.vE)(a,"col");const n=(0,l.pi)(),c=(0,l.zG)(),i=[],o=[];return n.forEach((e=>{const t=s[e];let r,n,l;delete s[e],"object"==typeof t&&null!=t?({span:r,offset:n,order:l}=t):r=t;const d=e!==c?`-${e}`:"";r&&i.push(!0===r?`${a}${d}`:`${a}${d}-${r}`),null!=l&&o.push(`order${d}-${l}`),null!=n&&o.push(`offset${d}-${n}`)})),[{...s,className:r()(t,...i,...o)},{as:e,bsPrefix:a,spans:i}]}(e);return(0,c.jsx)(n,{...s,ref:a,className:r()(t,!o.length&&i)})}));i.displayName="Col",a.Z=i},4051:function(e,a,t){var s=t(3967),r=t.n(s),n=t(7294),l=t(6792),c=t(5893);const i=n.forwardRef((({bsPrefix:e,className:a,as:t="div",...s},n)=>{const i=(0,l.vE)(e,"row"),o=(0,l.pi)(),d=(0,l.zG)(),m=`${i}-cols`,f=[];return o.forEach((e=>{const a=s[e];let t;delete s[e],null!=a&&"object"==typeof a?({cols:t}=a):t=a;const r=e!==d?`-${e}`:"";null!=t&&f.push(`${m}${r}-${t}`)})),(0,c.jsx)(t,{ref:n,...s,className:r()(a,i,...f)})}));i.displayName="Row",a.Z=i}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-c41aaef388c2fa122663.js.map