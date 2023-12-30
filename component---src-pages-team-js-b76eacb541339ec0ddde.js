"use strict";(self.webpackChunkjlbj_github_io=self.webpackChunkjlbj_github_io||[]).push([[371],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),o=new RegExp(n.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,o=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return N},S:function(){return G},_:function(){return o},a:function(){return i},b:function(){return u},g:function(){return m},h:function(){return l}});var r=a(7294),s=(a(3204),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function d(e,t,a){const r={};let s="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,s){return void 0===s&&(s={}),c()||(s=i({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},s)),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function m(e,t,a,r,s,n,o,l){const d={};n&&(d.backgroundColor=n,"fixed"===a?(d.width=r,d.height=s,d.backgroundColor=n,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c()||(u.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),u}const p=["children"],f=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${s}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(f,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=o(e,b);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},n,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var w;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},v.displayName="Picture",v.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const E=["fallback"],N=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};N.displayName="Placeholder",N.propTypes={fallback:s.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],j=e=>e.replace(/\n/g,""),$=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:n().object.isRequired,alt:$},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let P,R;const O=function(e){let{as:t="div",image:s,style:n,backgroundColor:c,className:u,class:m,onStartLoad:p,onLoad:f,onError:g}=e,h=o(e,S);const{width:b,height:y,layout:v}=s,w=d(b,y,v),{style:E,className:N}=w,x=o(w,I),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);m&&(u=m);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,b,y);return(0,r.useEffect)((()=>{P||(P=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(R&&T.has(C))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:T.has(C),image:s},h)),T.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=o(k.current,C,T,n,p,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{T.has(C)&&R&&(k.current.innerHTML=R(i({isLoading:T.has(C),isLoaded:T.has(C),image:s},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},x,{style:i({},E,n,{backgroundColor:c}),className:`${N}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(O,e)):null}));_.propTypes=L,_.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:s,__error:n}=t,l=o(t,A);return n&&console.warn(n),s?r.createElement(e,i({image:s},l)):(console.warn("Image not loaded",a),null)}}const Z=M((function(e){let{as:t="div",className:a,class:s,style:n,image:l,loading:c="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,v=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),f=i({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:w,height:E,layout:$,images:L,placeholder:S,backgroundColor:I}=l,T=d(w,E,$),{style:P,className:R}=T,O=o(T,C),_={fallback:void 0,sources:[]};return L.fallback&&(_.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?j(L.fallback.srcSet):void 0})),L.sources&&(_.sources=L.sources.map((e=>i({},e,{srcSet:j(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},P,n,{backgroundColor:h}),className:`${R}${a?` ${a}`:""}`}),r.createElement(g,{layout:$,width:w,height:E},r.createElement(N,i({},m(S,!1,$,w,E,I,b,y))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:p},v,u("eager"===c,!1,_,c,f)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:$,width:q,height:q,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};Z.displayName="StaticImage",Z.propTypes=F;const G=M(_);G.displayName="StaticImage",G.propTypes=F},4529:function(e,t,a){var r=a(7294);a(2281),a(4160);t.Z=e=>{let{page:t,description:a}=e;return r.createElement("header",{style:{backgroundColor:"white"},className:"section-header text-center mb-5 pt-4 pb-1"},r.createElement("h3",{className:"text-uppercase text-black"},t),r.createElement("p",{className:"position-relative"},a))}},9284:function(e,t,a){var r=a(7294),s=a(1945);t.Z=()=>r.createElement("div",{className:"my-3 d-flex justify-content-center align-items-center text-center"},r.createElement(s.Z,{className:"btn btn-cta-primary",variant:"cta-primary",href:"https://www.linkedin.com/in/bercksonjohnslyjeanlouis"},"CONSULTER MON PROFIL LINKEDIN"))},8474:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),s=a(4051),n=a(1555),i=a(2351),o=JSON.parse('[{"id":4,"profile":"Psychologue de formation, blogueur","name":"Robinson ACHILLE","photo":"/images/team/robinson.jpg","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-twitter","link":"https://x.com/Psyachille?t=w27hc3pjWd5ekz4dI6u4dg&s=09"},{"icon":"fab fa-linkedin-in","link":"https://www.linkedin.com/in/robinson-achille-5487851b9"},{"icon":"fab fa-facebook-f","link":"https://www.facebook.com/robinson.achille"},{"icon":"fab fa-instagram","link":"https://www.instagram.com/psyachille01?igshid=OGY3MTU3OGY1Mw=="},{"icon":"fas fa-globe","link":"https://psyachille.blogspot.com"},{"icon":"fa-solid fa-list-check","link":"https://lireaumax.com/author/robinson"}]},{"id":4,"profile":"Journaliste , Photographe, activiste climatique, Juriste, Géographe et Aménageur","name":"Lovinsky FILS-AIMÉ","photo":"/images/team/lovinsky.png","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-facebook-f","link":"https://web.facebook.com/sageproduction20/"},{"icon":"fab fa-instagram","link":"https://www.instagram.com/filsaimelovinsky/"}]},{"id":4,"profile":"Finissant en psychoéducation, web developer, graphiste, musicien","name":"John Stevens MAURICETTE","photo":"/images/team/stevens.jpeg","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-facebook-f","link":"https://www.facebook.com/johnatan.steve.7?mibextid=rS40aB7S9Ucbxw6v"}]}]'),l=a(9284),c=a(8032),d=a(3053),u=a(4529);var m=()=>r.createElement(d.Z,null,r.createElement(u.Z,{page:"Collaborateurs",description:"Mes Collaborateurs"}),r.createElement("section",{className:"about section"},r.createElement("div",{className:"section-inner-g"},r.createElement("div",{className:"content"},r.createElement(s.Z,{className:"d-flex gap-3"},o.map(((e,t)=>r.createElement(n.Z,{key:t,md:6,className:"p-0 mb-4 animate-box"},r.createElement(i.Z,{"data-animate-effect":"fadeInLeft"},r.createElement("a",{href:e.link,className:"m-0 p-0"},r.createElement(i.Z.Img,{title:e.name,src:".."+e.photo,alt:e.name}),r.createElement(c.S,{src:".."+e.photo,alt:e.name})),r.createElement(i.Z.Body,null,r.createElement("h5",{className:"card-title"},e.name),r.createElement("p",{style:{marginTop:"-10px",marginBottom:"10px"}},r.createElement("em",null,e.profile)),r.createElement("div",{style:{marginTop:"15px"},className:"deco"}),r.createElement("p",{className:"card-text text-justify",style:{textAlign:"justify",marginTop:"-10px"}},e.about),r.createElement("hr",null),r.createElement("div",{className:"card-text d-flex justify-content-center align-items-center text-center text-muted"},e.networks.map(((e,t)=>r.createElement("div",{key:t,className:"mx-2"},r.createElement("a",{href:e.link},r.createElement("i",{className:e.icon})))))))))))),r.createElement(l.Z,null)))))},1945:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(3967),s=a.n(r),n=a(7294),i=a(5893);const o=["as","disabled"];function l({tagName:e,disabled:t,href:a,target:r,rel:s,role:n,onClick:i,tabIndex:o=0,type:l}){e||(e=null!=a||null!=r||null!=s?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const d=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(a))&&r.preventDefault(),t?r.stopPropagation():null==i||i(r)};return"a"===e&&(a||(a="#"),t&&(a=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:o,href:a,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},c]}const c=n.forwardRef(((e,t)=>{let{as:a,disabled:r}=e,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,o);const[n,{tagName:c}]=l(Object.assign({tagName:a,disabled:r},s));return(0,i.jsx)(c,Object.assign({},s,n,{ref:t}))}));c.displayName="Button";var d=a(6792);const u=n.forwardRef((({as:e,bsPrefix:t,variant:a="primary",size:r,active:n=!1,disabled:o=!1,className:c,...u},m)=>{const p=(0,d.vE)(t,"btn"),[f,{tagName:g}]=l({tagName:e,disabled:o,...u}),h=g;return(0,i.jsx)(h,{...f,...u,ref:m,disabled:o,className:s()(c,p,n&&"active",a&&`${p}-${a}`,r&&`${p}-${r}`,u.href&&o&&"disabled")})}));u.displayName="Button";var m=u},2351:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(3967),s=a.n(r),n=a(7294),i=a(6792),o=a(5893);const l=n.forwardRef((({className:e,bsPrefix:t,as:a="div",...r},n)=>(t=(0,i.vE)(t,"card-body"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));l.displayName="CardBody";var c=l;const d=n.forwardRef((({className:e,bsPrefix:t,as:a="div",...r},n)=>(t=(0,i.vE)(t,"card-footer"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));d.displayName="CardFooter";var u=d;const m=n.createContext(null);m.displayName="CardHeaderContext";var p=m;const f=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...r},l)=>{const c=(0,i.vE)(e,"card-header"),d=(0,n.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,o.jsx)(p.Provider,{value:d,children:(0,o.jsx)(a,{ref:l,...r,className:s()(t,c)})})}));f.displayName="CardHeader";var g=f;const h=n.forwardRef((({bsPrefix:e,className:t,variant:a,as:r="img",...n},l)=>{const c=(0,i.vE)(e,"card-img");return(0,o.jsx)(r,{ref:l,className:s()(a?`${c}-${a}`:c,t),...n})}));h.displayName="CardImg";var b=h;const y=n.forwardRef((({className:e,bsPrefix:t,as:a="div",...r},n)=>(t=(0,i.vE)(t,"card-img-overlay"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));y.displayName="CardImgOverlay";var v=y;const w=n.forwardRef((({className:e,bsPrefix:t,as:a="a",...r},n)=>(t=(0,i.vE)(t,"card-link"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));w.displayName="CardLink";var E=w,N=a(9602);const x=(0,N.Z)("h6"),k=n.forwardRef((({className:e,bsPrefix:t,as:a=x,...r},n)=>(t=(0,i.vE)(t,"card-subtitle"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));k.displayName="CardSubtitle";var C=k;const j=n.forwardRef((({className:e,bsPrefix:t,as:a="p",...r},n)=>(t=(0,i.vE)(t,"card-text"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));j.displayName="CardText";var $=j;const L=(0,N.Z)("h5"),S=n.forwardRef((({className:e,bsPrefix:t,as:a=L,...r},n)=>(t=(0,i.vE)(t,"card-title"),(0,o.jsx)(a,{ref:n,className:s()(e,t),...r}))));S.displayName="CardTitle";var I=S;const T=n.forwardRef((({bsPrefix:e,className:t,bg:a,text:r,border:n,body:l=!1,children:d,as:u="div",...m},p)=>{const f=(0,i.vE)(e,"card");return(0,o.jsx)(u,{ref:p,...m,className:s()(t,f,a&&`bg-${a}`,r&&`text-${r}`,n&&`border-${n}`),children:l?(0,o.jsx)(c,{children:d}):d})}));T.displayName="Card";var P=Object.assign(T,{Img:b,Title:I,Subtitle:C,Body:c,Link:E,Text:$,Header:g,Footer:u,ImgOverlay:v})},1555:function(e,t,a){var r=a(3967),s=a.n(r),n=a(7294),i=a(6792),o=a(5893);const l=n.forwardRef(((e,t)=>{const[{className:a,...r},{as:n="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:a,...r}){t=(0,i.vE)(t,"col");const n=(0,i.pi)(),o=(0,i.zG)(),l=[],c=[];return n.forEach((e=>{const a=r[e];let s,n,i;delete r[e],"object"==typeof a&&null!=a?({span:s,offset:n,order:i}=a):s=a;const d=e!==o?`-${e}`:"";s&&l.push(!0===s?`${t}${d}`:`${t}${d}-${s}`),null!=i&&c.push(`order${d}-${i}`),null!=n&&c.push(`offset${d}-${n}`)})),[{...r,className:s()(a,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,o.jsx)(n,{...r,ref:t,className:s()(a,!c.length&&l)})}));l.displayName="Col",t.Z=l},4051:function(e,t,a){var r=a(3967),s=a.n(r),n=a(7294),i=a(6792),o=a(5893);const l=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...r},n)=>{const l=(0,i.vE)(e,"row"),c=(0,i.pi)(),d=(0,i.zG)(),u=`${l}-cols`,m=[];return c.forEach((e=>{const t=r[e];let a;delete r[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const s=e!==d?`-${e}`:"";null!=a&&m.push(`${u}${s}-${a}`)})),(0,o.jsx)(a,{ref:n,...r,className:s()(t,l,...m)})}));l.displayName="Row",t.Z=l}}]);
//# sourceMappingURL=component---src-pages-team-js-b76eacb541339ec0ddde.js.map