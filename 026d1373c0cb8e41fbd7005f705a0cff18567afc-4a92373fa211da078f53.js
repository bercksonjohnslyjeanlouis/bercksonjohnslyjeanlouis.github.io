/*! For license information please see 026d1373c0cb8e41fbd7005f705a0cff18567afc-4a92373fa211da078f53.js.LICENSE.txt */
(self.webpackChunkjlbj_github_io=self.webpackChunkjlbj_github_io||[]).push([[941],{3053:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ge}});var r=n(7294),o=n(4160),i=n(2281),s=n(3967),a=n.n(s);const l=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;var c="undefined"!=typeof document||l?r.useLayoutEffect:r.useEffect;const u=new WeakMap,d=(e,t)=>{if(!e||!t)return;const n=u.get(t)||new Map;u.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function f(e,t=("undefined"==typeof window?void 0:window)){const n=d(e,t),[o,i]=(0,r.useState)((()=>!!n&&n.matches));return c((()=>{let n=d(e,t);if(!n)return i(!1);let r=u.get(t);const o=()=>{i(n.matches)};return n.refCount++,n.addListener(o),o(),()=>{n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),o}var p=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function o(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let o=e[r];return o="number"==typeof o?o-.2+"px":`calc(${o} - 0.2px)`,`(max-width: ${o})`}return function(t,i,s){let a;return"object"==typeof t?(a=t,s=i,i=!0):a={[t]:i=i||!0},f((0,r.useMemo)((()=>Object.entries(a).reduce(((t,[r,i])=>("up"!==i&&!0!==i||(t=n(t,function(t){let n=e[t];return"number"==typeof n&&(n=`${n}px`),`(min-width: ${n})`}(r))),"down"!==i&&!0!==i||(t=n(t,o(r))),t)),"")),[JSON.stringify(a)]),s)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});var m=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t};function h(e){const t=m(e);return(0,r.useCallback)((function(...e){return t.current&&t.current(...e)}),[t])}function v(e){return e&&e.ownerDocument||document}function E(e){void 0===e&&(e=v());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function g(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var x=!("undefined"==typeof window||!window.document||!window.document.createElement),b=!1,y=!1;try{var k={get passive(){return b=!0},get once(){return y=b=!0}};x&&(window.addEventListener("test",k,k),window.removeEventListener("test",k,!0))}catch(Ye){}var C=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!y){var o=r.once,i=r.capture,s=n;!y&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=s),e.addEventListener(t,s,b?r:i)}e.addEventListener(t,n,r)};var w=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var j=function(e,t,n,r){return C(e,t,n,r),function(){w(e,t,n,r)}},N=n(3935);function O(e){const t=function(e){const t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)((()=>()=>t.current()),[])}function S(e,t){return function(e){var t=v(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var R=/([A-Z])/g;var T=/^ms-/;function L(e){return function(e){return e.replace(R,"-$1").toLowerCase()}(e).replace(T,"-ms-")}var D=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var M=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(L(t))||S(e).getPropertyValue(L(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!D.test(e))}(o)?n+=L(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(L(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};const B=`data-rr-ui-${"modal-open"}`;var A=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(M(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(B,""),M(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(B),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const F=(0,r.createContext)(x?window:void 0);F.Provider;function P(){return(0,r.useContext)(F)}const $=(e,t)=>x?null==e?(t||v()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const q=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;var H=function(e,t){return(0,r.useMemo)((()=>function(e,t){const n=q(e),r=q(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};var _=function({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:i}){const s=(0,r.useRef)(null),a=(0,r.useRef)(t),l=h(n);(0,r.useEffect)((()=>{t?a.current=!0:l(s.current)}),[t,l]);const c=H(s,e.ref),u=(0,r.cloneElement)(e,{ref:c});return t?u:i||!a.current&&o?null:u},W=n(5893);function J({children:e,in:t,onExited:n,onEntered:o,transition:i}){const[s,a]=(0,r.useState)(!t);t&&s&&a(!1);const l=function({in:e,onTransition:t}){const n=(0,r.useRef)(null),o=(0,r.useRef)(!0),i=h(t);return c((()=>{if(!n.current)return;let t=!1;return i({in:e,element:n.current,initial:o.current,isStale:()=>t}),()=>{t=!0}}),[e,i]),c((()=>(o.current=!1,()=>{o.current=!0})),[]),n}({in:!!t,onTransition:e=>{Promise.resolve(i(e)).then((()=>{e.isStale()||(e.in?null==o||o(e.element,e.initial):(a(!0),null==n||n(e.element)))}),(t=>{throw e.in||a(!0),t}))}}),u=H(l,e.ref);return s&&!t?null:(0,r.cloneElement)(e,{ref:u})}function z(e,t,n){return e?(0,W.jsx)(e,Object.assign({},n)):t?(0,W.jsx)(J,Object.assign({},n,{transition:t})):(0,W.jsx)(_,Object.assign({},n))}const I=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let V;function U(e){const t=P(),n=e||function(e){return V||(V=new A({ownerDocument:null==e?void 0:e.document})),V}(t),o=(0,r.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,r.useCallback)((e=>{o.current.dialog=e}),[]),setBackdropRef:(0,r.useCallback)((e=>{o.current.backdrop=e}),[])})}const Z=(0,r.forwardRef)(((e,t)=>{let{show:n=!1,role:o="dialog",className:i,style:s,children:a,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:m,runBackdropTransition:v,autoFocus:b=!0,enforceFocus:y=!0,restoreFocus:k=!0,restoreFocusOptions:C,renderDialog:w,renderBackdrop:S=(e=>(0,W.jsx)("div",Object.assign({},e))),manager:R,container:T,onShow:L,onHide:D=(()=>{}),onExit:M,onExited:B,onExiting:A,onEnter:F,onEntering:q,onEntered:H}=e,_=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,I);const J=P(),V=function(e,t){const n=P(),[o,i]=(0,r.useState)((()=>$(e,null==n?void 0:n.document)));if(!o){const t=$(e);t&&i(t)}return(0,r.useEffect)((()=>{t&&o&&t(o)}),[t,o]),(0,r.useEffect)((()=>{const t=$(e);t!==o&&i(t)}),[e,o]),o}(T),Z=U(R),K=function(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),X=function(e){const t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{t.current=e})),t.current}(n),[G,Y]=(0,r.useState)(!n),Q=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>Z),[Z]),x&&!X&&n&&(Q.current=E(null==J?void 0:J.document)),n&&G&&Y(!1);const ee=h((()=>{if(Z.add(),se.current=j(document,"keydown",oe),ie.current=j(document,"focus",(()=>setTimeout(ne)),!0),L&&L(),b){var e,t;const n=E(null!=(e=null==(t=Z.dialog)?void 0:t.ownerDocument)?e:null==J?void 0:J.document);Z.dialog&&n&&!g(Z.dialog,n)&&(Q.current=n,Z.dialog.focus())}})),te=h((()=>{var e;(Z.remove(),null==se.current||se.current(),null==ie.current||ie.current(),k)&&(null==(e=Q.current)||null==e.focus||e.focus(C),Q.current=null)}));(0,r.useEffect)((()=>{n&&V&&ee()}),[n,V,ee]),(0,r.useEffect)((()=>{G&&te()}),[G,te]),O((()=>{te()}));const ne=h((()=>{if(!y||!K()||!Z.isTopModal())return;const e=E(null==J?void 0:J.document);Z.dialog&&e&&!g(Z.dialog,e)&&Z.dialog.focus()})),re=h((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&D())})),oe=h((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&Z.isTopModal()&&(null==d||d(e),e.defaultPrevented||D())})),ie=(0,r.useRef)(),se=(0,r.useRef)();if(!V)return null;const ae=Object.assign({role:o,ref:Z.setDialogRef,"aria-modal":"dialog"===o||void 0},_,{style:s,className:i,tabIndex:-1});let le=w?w(ae):(0,W.jsx)("div",Object.assign({},ae,{children:r.cloneElement(a,{role:"document"})}));le=z(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:M,onExiting:A,onExited:(...e)=>{Y(!0),null==B||B(...e)},onEnter:F,onEntering:q,onEntered:H,children:le});let ce=null;return l&&(ce=S({ref:Z.setBackdropRef,onClick:re}),ce=z(m,v,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ce})),(0,W.jsx)(W.Fragment,{children:N.createPortal((0,W.jsxs)(W.Fragment,{children:[ce,le]}),V)})}));Z.displayName="Modal";var K=Object.assign(Z,{Manager:A});var X=n(1721),G=!1,Y=r.createContext(null),Q="unmounted",ee="exited",te="entering",ne="entered",re="exiting",oe=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=ee,r.appearStatus=te):o=ne:o=t.unmountOnExit||t.mountOnEnter?Q:ee,r.state={status:o},r.nextCallback=null,r}(0,X.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Q?{status:ee}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==te&&n!==ne&&(t=te):n!==te&&n!==ne||(t=re)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===te){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ee&&this.setState({status:Q})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[N.findDOMNode(this),r],i=o[0],s=o[1],a=this.getTimeouts(),l=r?a.appear:a.enter;!e&&!n||G?this.safeSetState({status:ne},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,s),this.safeSetState({status:te},(function(){t.props.onEntering(i,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:ne},(function(){t.props.onEntered(i,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:N.findDOMNode(this);t&&!G?(this.props.onExit(r),this.safeSetState({status:re},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ee},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ee},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===Q)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(Y.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function ie(){}oe.contextType=Y,oe.propTypes={},oe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ie,onEntering:ie,onEntered:ie,onExit:ie,onExiting:ie,onExited:ie},oe.UNMOUNTED=Q,oe.EXITED=ee,oe.ENTERING=te,oe.ENTERED=ne,oe.EXITING=re;var se=oe;function ae(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=j(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function le(e,t,n,r){var o,i;null==n&&(o=M(e,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var s=ae(e,n,r),a=j(e,"transitionend",t);return function(){s(),a()}}function ce(e,t){const n=M(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ue(e,t){const n=ce(e,"transitionDuration"),r=ce(e,"transitionDelay"),o=le(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var de=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:i,onExited:s,addEndListener:a,children:l,childRef:c,...u},d)=>{const f=(0,r.useRef)(null),p=H(f,c),m=e=>{var t;p((t=e)&&"setState"in t?N.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&f.current&&e(f.current,t)},v=(0,r.useCallback)(h(e),[e]),E=(0,r.useCallback)(h(t),[t]),g=(0,r.useCallback)(h(n),[n]),x=(0,r.useCallback)(h(o),[o]),b=(0,r.useCallback)(h(i),[i]),y=(0,r.useCallback)(h(s),[s]),k=(0,r.useCallback)(h(a),[a]);return(0,W.jsx)(se,{ref:d,...u,onEnter:v,onEntered:g,onEntering:E,onExit:x,onExited:y,onExiting:b,addEndListener:k,nodeRef:f,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:m}):r.cloneElement(l,{ref:m})})}));const fe={[te]:"show",[ne]:"show"},pe=r.forwardRef((({className:e,children:t,transitionClasses:n={},onEnter:o,...i},s)=>{const l={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},c=(0,r.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==o||o(e,t)}),[o]);return(0,W.jsx)(de,{ref:s,addEndListener:ue,...l,onEnter:c,childRef:t.ref,children:(o,i)=>r.cloneElement(t,{...i,className:a()("fade",e,t.props.className,fe[o],n[o])})})}));pe.displayName="Fade";var me=pe,he=n(6792);const ve=r.forwardRef((({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=(0,he.vE)(t,"offcanvas-body"),(0,W.jsx)(n,{ref:o,className:a()(e,t),...r}))));ve.displayName="OffcanvasBody";var Ee=ve;const ge={[te]:"show",[ne]:"show"},xe=r.forwardRef((({bsPrefix:e,className:t,children:n,in:o=!1,mountOnEnter:i=!1,unmountOnExit:s=!1,appear:l=!1,...c},u)=>(e=(0,he.vE)(e,"offcanvas"),(0,W.jsx)(de,{ref:u,addEndListener:ue,in:o,mountOnEnter:i,unmountOnExit:s,appear:l,...c,childRef:n.ref,children:(o,i)=>r.cloneElement(n,{...i,className:a()(t,n.props.className,(o===te||o===re)&&`${e}-toggling`,ge[o])})}))));xe.displayName="OffcanvasToggling";var be=xe;var ye=r.createContext({onHide(){}});const ke=r.createContext(null);ke.displayName="NavbarContext";var Ce=ke,we=n(5697),je=n.n(we);const Ne={"aria-label":je().string,onClick:je().func,variant:je().oneOf(["white"])},Oe=r.forwardRef((({className:e,variant:t,"aria-label":n="Close",...r},o)=>(0,W.jsx)("button",{ref:o,type:"button",className:a()("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r})));Oe.displayName="CloseButton",Oe.propTypes=Ne;var Se=Oe;const Re=r.forwardRef((({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:o,children:i,...s},a)=>{const l=(0,r.useContext)(ye),c=h((()=>{null==l||l.onHide(),null==o||o()}));return(0,W.jsxs)("div",{ref:a,...s,children:[i,n&&(0,W.jsx)(Se,{"aria-label":e,variant:t,onClick:c})]})}));var Te=Re;const Le=r.forwardRef((({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=(0,he.vE)(e,"offcanvas-header"),(0,W.jsx)(Te,{ref:i,...o,className:a()(t,e),closeLabel:n,closeButton:r}))));Le.displayName="OffcanvasHeader";var De=Le;const Me=(0,n(9602).Z)("h5"),Be=r.forwardRef((({className:e,bsPrefix:t,as:n=Me,...r},o)=>(t=(0,he.vE)(t,"offcanvas-title"),(0,W.jsx)(n,{ref:o,className:a()(e,t),...r}))));Be.displayName="OffcanvasTitle";var Ae=Be;var Fe=Function.prototype.bind.call(Function.prototype.call,[].slice);function Pe(e,t){return Fe(e.querySelectorAll(t))}function $e(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const qe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",He=".sticky-top",_e=".navbar-toggler";class We extends A{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,M(t,{[e]:`${parseFloat(M(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],M(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,r;if(r="modal-open",(n=t).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!e.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Pe(t,qe).forEach((t=>this.adjustAndStore(o,t,e.scrollBarWidth))),Pe(t,He).forEach((t=>this.adjustAndStore(i,t,-e.scrollBarWidth))),Pe(t,_e).forEach((t=>this.adjustAndStore(i,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,r;r="modal-open",(n=t).classList?n.classList.remove(r):"string"==typeof n.className?n.className=$e(n.className,r):n.setAttribute("class",$e(n.className&&n.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Pe(t,qe).forEach((e=>this.restore(o,e))),Pe(t,He).forEach((e=>this.restore(i,e))),Pe(t,_e).forEach((e=>this.restore(i,e)))}}let Je;var ze=We;function Ie(e){return(0,W.jsx)(be,{...e})}function Ve(e){return(0,W.jsx)(me,{...e})}const Ue=r.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":o,placement:i="start",responsive:s,show:l=!1,backdrop:c=!0,keyboard:u=!0,scroll:d=!1,onEscapeKeyDown:f,onShow:m,onHide:v,container:E,autoFocus:g=!0,enforceFocus:x=!0,restoreFocus:b=!0,restoreFocusOptions:y,onEntered:k,onExit:C,onExiting:w,onEnter:j,onEntering:N,onExited:O,backdropClassName:S,manager:R,renderStaticNode:T=!1,...L},D)=>{const M=(0,r.useRef)();e=(0,he.vE)(e,"offcanvas");const{onToggle:B}=(0,r.useContext)(Ce)||{},[A,F]=(0,r.useState)(!1),P=p(s||"xs","up");(0,r.useEffect)((()=>{F(s?l&&!P:l)}),[l,s,P]);const $=h((()=>{null==B||B(),null==v||v()})),q=(0,r.useMemo)((()=>({onHide:$})),[$]);const H=(0,r.useCallback)((t=>(0,W.jsx)("div",{...t,className:a()(`${e}-backdrop`,S)})),[S,e]),_=r=>(0,W.jsx)("div",{...r,...L,className:a()(t,s?`${e}-${s}`:e,`${e}-${i}`),"aria-labelledby":o,children:n});return(0,W.jsxs)(W.Fragment,{children:[!A&&(s||T)&&_({}),(0,W.jsx)(ye.Provider,{value:q,children:(0,W.jsx)(K,{show:A,ref:D,backdrop:c,container:E,keyboard:u,autoFocus:g,enforceFocus:x&&!d,restoreFocus:b,restoreFocusOptions:y,onEscapeKeyDown:f,onShow:m,onHide:$,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==j||j(e,...t)},onEntering:N,onEntered:k,onExit:C,onExiting:w,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==O||O(...t)},manager:R||(d?(M.current||(M.current=new ze({handleContainerOverflow:!1})),M.current):function(e){return Je||(Je=new We(e)),Je}()),transition:Ie,backdropTransition:Ve,renderBackdrop:H,renderDialog:_})})]})}));Ue.displayName="Offcanvas";var Ze=Object.assign(Ue,{Body:Ee,Header:De,Title:Ae});var Ke=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("h1",{onClick:()=>t(!0),style:{backgroundColor:"#f5f5f5",cursor:"pointer",color:"#000000"}},r.createElement("i",{className:"fas fa-bars text-black pt-3 pe-2"})),r.createElement(Ze,{show:e,placement:"start",tabIndex:"-1",id:"side_menu",onHide:()=>t(!1),"aria-labelledby":"offcanvasLabel"},r.createElement(Ze.Header,{closeButton:!0},r.createElement(Ze.Title,{id:"offcanvasLabel"},"MENU")),r.createElement(Ze.Body,null,r.createElement("div",null,i.map(((e,t)=>r.createElement("div",{key:t,className:"border-bottom border-gray border-1 py-2"},r.createElement("a",{href:e.link,className:"text-decoration-none width-full","data-bs-toggle":"offcanvas","data-bs-target":"#side_menu"},r.createElement("span",null,r.createElement("i",{className:e.icon}),r.createElement("strong",null,r.createElement("span",{className:"ps-2"},`  ${e.anchor.toUpperCase()}`)))))))))))};var Xe=()=>r.createElement("nav",{style:{backgroundColor:"#f5f5f5",margin:0,padding:0,borderBottom:"#000000 solid 2px shadow"}},r.createElement("div",{className:"row fixed-top",style:{backgroundColor:"#f5f5f5",margin:0,padding:0}},r.createElement("div",{className:"col-9 pt-4",style:{textAlign:"left",paddingLeft:"10px",color:"black"}},r.createElement("span",{className:"ms-3 ms-md-5"},r.createElement("strong",null,r.createElement(o.rU,{to:"/",style:{textDecoration:"none"}},"< Bienvenue sur mon site />")))),r.createElement("div",{className:"col-3",style:{textAlign:"right"}},r.createElement(Ke,null))));var Ge=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(Xe,null),t)}},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return c},vE:function(){return l},zG:function(){return u}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:s,Provider:a}=i;function l(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(i);return e}function u(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}},9602:function(e,t,n){"use strict";var r=n(7294),o=n(3967),i=n.n(o),s=n(5893);t.Z=e=>r.forwardRef(((t,n)=>(0,s.jsx)("div",{...t,ref:n,className:i()(t.className,e)})))},3967:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2281:function(e){"use strict";e.exports=JSON.parse('[{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"About","text":"Qui je suis","link":"/","icon":"fas fa-user-tie"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Services","text":"Services","link":"/services","icon":"fa-regular fa-building"},{"intro":" Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Portfolio","text":"Portfolio","link":"/portfolio","icon":"fa-solid fa-list-check"},{"intro":"Cette section est encore en cours de développement... Pour chaque projet j\'ajouterai les contributeurs, la date, les langages et technologies utilisés, le status et autres informations nécessaires.","anchor":"Développement","text":"Développement","link":"/development","icon":"fa-solid fa-laptop-code"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Design","text":"Design","link":"/design","icon":"fas fa-photo-film"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Photographie","text":"Photographie","link":"/photography","icon":"fas fa-camera"},{"intro":"My hub, where you and I meet to explore life, technology, management, movie, language, personal development etc.","anchor":"Articles","text":"Blog","link":"/blog","icon":"fa-solid fa-square-rss"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Événements","text":"Événements","link":"/events","icon":"fa-solid fa-microphone"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Collaborateurs","text":"Collaborateurs","link":"/team","icon":"fa-solid fa-users"},{"intro":"Ayant assez de créativité et le souci du travail bien fait, je prends donc chaque petit projet comme un chef-d’œuvre à réaliser et dans lequel je dois m’investir à fond. J’ai hâte de vous parler !","anchor":"Témoignages","text":"Témoignages","link":"/testimonials","icon":"far fa-comment-dots"}]')}}]);
//# sourceMappingURL=026d1373c0cb8e41fbd7005f705a0cff18567afc-4a92373fa211da078f53.js.map