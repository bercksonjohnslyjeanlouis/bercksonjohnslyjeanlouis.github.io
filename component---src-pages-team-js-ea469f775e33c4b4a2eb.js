"use strict";(self.webpackChunkjlbj_github_io=self.webpackChunkjlbj_github_io||[]).push([[371],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,s=new RegExp("^"+r.source),o=new RegExp(r.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,n,i)=>{let r=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];r&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),r=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,r=!0):(r=n(c)===c&&i(c)!==c,o=s,s=i(c)===c&&n(c)!==c)}return e})(e,r,c)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return L},P:function(){return N},_:function(){return o},a:function(){return s},b:function(){return u},c:function(){return d},g:function(){return p},h:function(){return l}});var n=a(7294),i=(a(3204),a(5697)),r=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}const d=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,a){const n={};let i="gatsby-image-wrapper";return c()||(n.position="relative",n.overflow="hidden"),"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(c()||(n.display="inline-block",n.verticalAlign="top"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,i){return void 0===i&&(i={}),c()||(i=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},i)),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function p(e,t,a,n,i,r,o,l){const d={};r&&(d.backgroundColor=r,"fixed"===a?(d.width=n,d.height=i,d.backgroundColor=r,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);const m=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c()||(m.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),m}const g=["children"],h=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${i}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=o(e,g);return n.createElement(n.Fragment,null,n.createElement(h,s({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:i,alt:r="",shouldLoad:l}=e,c=o(e,b);return n.createElement("img",s({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:r}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,r=o(e,y);const l=r.sizes||(null==t?void 0:t.sizes),c=n.createElement(w,s({},r,t,{sizes:l,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:`${t}-${r}-${a}`,type:r,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),c):c};var E;w.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const k=["fallback"],N=function(e){let{fallback:t}=e,a=o(e,k);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};N.displayName="Placeholder",N.propTypes={fallback:i.string,sources:null==(E=v.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const L=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],S=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),s=3;s<n;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},T={image:r().object.isRequired,alt:I},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],A=new Set;let O,$;const P=function(e){let{as:t="div",image:i,style:r,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,j);const{width:b,height:y,layout:w}=i,v=m(b,y,w),{style:E,className:k}=v,N=o(v,_),L=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(d=u);const x=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(w,b,y);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return $=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(C);if($&&A.has(C))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:A.has(C),image:i},f)),A.has(C)||(t=requestAnimationFrame((()=>{L.current&&(n=o(L.current,C,A,r,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{A.has(C)&&$&&(L.current.innerHTML=$(s({isLoading:A.has(C),isLoaded:A.has(C),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(t,s({},N,{style:s({},E,r,{backgroundColor:c}),className:`${k}${d?` ${d}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(c(),(0,n.createElement)(P,e)):null}));R.propTypes=T,R.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:i,__error:r}=t,l=o(t,M);return r&&console.warn(r),i?n.createElement(e,s({image:i},l)):(console.warn("Image not loaded",a),null)}}const F=q((function(e){let{as:t="div",className:a,class:i,style:r,image:l,loading:c="lazy",imgClassName:d,imgStyle:g,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),g=s({objectFit:b,objectPosition:y,backgroundColor:h},g);const{width:v,height:E,layout:k,images:I,placeholder:T,backgroundColor:j}=l,_=m(v,E,k),{style:A,className:O}=_,$=o(_,x),P={fallback:void 0,sources:[]};return I.fallback&&(P.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(P.sources=I.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,s({},$,{style:s({},A,r,{backgroundColor:h}),className:`${O}${a?` ${a}`:""}`}),n.createElement(f,{layout:k,width:v,height:E},n.createElement(N,s({},p(T,!1,k,v,E,j,b,y))),n.createElement(L,s({"data-gatsby-image-ssr":"",className:d},w,u("eager"===c,!1,P,c,g)))))})),W=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),Z={src:r().string.isRequired,alt:I,width:W,height:W,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};F.displayName="StaticImage",F.propTypes=Z;const D=q(R);D.displayName="StaticImage",D.propTypes=Z},9284:function(e,t,a){var n=a(7294),i=a(1945);t.Z=()=>n.createElement("div",{className:"my-3 d-flex justify-content-center align-items-center text-center"},n.createElement(i.Z,{className:"btn btn-cta-primary",variant:"cta-primary",href:"https://www.linkedin.com/in/bercksonjohnslyjeanlouis"},"CONSULTER MON PROFIL LINKEDIN"))},8474:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return c}});var n=a(7294),i=a(4051),r=JSON.parse('[{"id":4,"profile":"Licencié en Psychologie, blogueur","name":"Robinson ACHILLE","photo":"/images/team/robinson.jpg","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-twitter","link":"https://x.com/Psyachille?t=w27hc3pjWd5ekz4dI6u4dg&s=09"},{"icon":"fab fa-linkedin-in","link":"https://www.linkedin.com/in/robinson-achille-5487851b9"},{"icon":"fab fa-facebook-f","link":"https://www.facebook.com/robinson.achille"},{"icon":"fab fa-instagram","link":"https://www.instagram.com/psyachille01?igshid=OGY3MTU3OGY1Mw=="},{"icon":"fas fa-globe","link":"https://psyachille.blogspot.com"},{"icon":"fa-solid fa-list-check","link":"https://lireaumax.com/author/robinson"}]},{"id":4,"profile":"Psychoéducateur / Psychologue stagiaire, Massothérapeute, Animateur d\'atelier de production littéraire et scientifique (créole, français) PLEZIYIS","name":"Edens HENRISSE","photo":"/images/team/edens.jpg","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-twitter","link":"https://twitter.com/ed_henrisse?t=3_0d5XEAPIbLA2J06df7FQ&s=09"},{"icon":"fab fa-linkedin-in","link":"https://www.linkedin.com/in/edens-mesye-h-henrisse"},{"icon":"fab fa-facebook-f","link":"https://www.facebook.com/edens.henrisse.1?mibextid=ZbWKwL"},{"icon":"fab fa-instagram","link":"https://www.instagram.com/edhenrisse?igsh=OGQ5ZDc2ODk2ZA=="}]},{"id":4,"profile":"Journaliste , Photographe, activiste climatique, Juriste, Géographe et Aménageur","name":"Lovinsky FILS-AIMÉ","photo":"/images/team/lovinsky.png","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-facebook-f","link":"https://web.facebook.com/sageproduction20/"},{"icon":"fab fa-instagram","link":"https://www.instagram.com/filsaimelovinsky/"}]},{"id":4,"profile":"Finissant en psychoéducation, web developer, graphiste, musicien","name":"John Stevens MAURICETTE","photo":"/images/team/stevens.jpeg","about":"C\'est l\'un de mes collaborateurs. Je dirai prochainement comment il m\'aide avec ma profession...","networks":[{"icon":"fab fa-facebook-f","link":"https://www.facebook.com/johnatan.steve.7?mibextid=rS40aB7S9Ucbxw6v"}]}]'),s=a(9284),o=(a(8032),a(9511)),l=(a(4529),a(8454));var c=()=>n.createElement(o.Z,{page:"Collaborateurs",description:"Mes Collaborateurs..."},n.createElement("section",{className:"about section"},n.createElement("div",{className:"section-inner-g"},n.createElement("div",{className:"content"},n.createElement(i.Z,{className:"d-flex gap-3"},r.map(((e,t)=>n.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4",key:t},n.createElement("div",{className:"image-flip",onTouchStart:"this.classList.toggle('hover');"},n.createElement("div",{className:"mainflip"},n.createElement("div",{className:"frontside"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body text-center"},n.createElement("p",null,n.createElement("img",{className:"img-fluid",title:e.name,src:"../../"+e.photo,alt:e.name})),n.createElement("h4",{className:"card-title"},e.name),n.createElement("p",{className:"card-text"},e.profile),n.createElement("a",{className:"btn btn-1"},"+")))),n.createElement("div",{className:"backside"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body text-center mt-4"},n.createElement("h4",{className:"card-title"},e.name),n.createElement("p",{className:"card-text"},e.about),n.createElement("ul",{className:"list-inline"},e.networks.map(((e,t)=>n.createElement("li",{className:"list-inline-item",key:t},n.createElement("a",{className:"social-icon text-xs-center",target:"_blank",href:e.link},n.createElement("i",{className:e.icon}))))))))))))))),n.createElement(s.Z,null)))));const d=()=>n.createElement(l.Z,{title:"Collaborateurs",description:"Mes collaborateurs..."})}}]);
//# sourceMappingURL=component---src-pages-team-js-ea469f775e33c4b4a2eb.js.map