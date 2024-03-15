(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,Je=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),dt=new WeakMap;let Nt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Je&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=dt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&dt.set(t,e))}return e}toString(){return this.cssText}};const Er=r=>new Nt(typeof r=="string"?r:r+"",void 0,Ze),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1],r[0]);return new Nt(t,r,Ze)},Pr=(r,e)=>{if(Je)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=me.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}},ht=Je?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Er(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kr,defineProperty:Or,getOwnPropertyDescriptor:Sr,getOwnPropertyNames:zr,getOwnPropertySymbols:Cr,getPrototypeOf:Rr}=Object,O=globalThis,ut=O.trustedTypes,Lr=ut?ut.emptyScript:"",Me=O.reactiveElementPolyfillSupport,K=(r,e)=>r,_e={toAttribute(r,e){switch(e){case Boolean:r=r?Lr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ye=(r,e)=>!kr(r,e),pt={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:Ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);class j extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Or(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=Sr(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const l=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pt}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=Rr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,i=[...zr(t),...Cr(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(ht(o))}else e!==void 0&&t.push(ht(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:_e).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:_e;this._$Em=o,this[o]=l.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ye)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[K("elementProperties")]=new Map,j[K("finalized")]=new Map,Me==null||Me({ReactiveElement:j}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,we=J.trustedTypes,ft=we?we.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ht="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Bt="?"+P,Dr=`<${Bt}>`,R=document,Y=()=>R.createComment(""),Q=r=>r===null||typeof r!="object"&&typeof r!="function",Ft=Array.isArray,jr=r=>Ft(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ne=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,mt=/>/g,z=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,bt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,Tr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=Tr(1),U=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),yt=new WeakMap,C=R.createTreeWalker(R,129);function qt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(e):e}const Ur=(r,e)=>{const t=r.length-1,i=[];let o,n=e===2?"<svg>":"",a=G;for(let l=0;l<t;l++){const s=r[l];let c,d,h=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),d!==null);)u=a.lastIndex,a===G?d[1]==="!--"?a=gt:d[1]!==void 0?a=mt:d[2]!==void 0?(Vt.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=z):d[3]!==void 0&&(a=z):a===z?d[0]===">"?(a=o??G,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?z:d[3]==='"'?bt:vt):a===bt||a===vt?a=z:a===gt||a===mt?a=G:(a=z,o=void 0);const p=a===z&&r[l+1].startsWith("/>")?" ":"";n+=a===G?s+Dr:h>=0?(i.push(c),s.slice(0,h)+Ht+s.slice(h)+P+p):s+P+(h===-2?l:p)}return[qt(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class X{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,a=0;const l=e.length-1,s=this.parts,[c,d]=Ur(e,t);if(this.el=X.createElement(c,i),C.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=C.nextNode())!==null&&s.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Ht)){const u=d[a++],p=o.getAttribute(h).split(P),S=/([.?@])?(.*)/.exec(u);s.push({type:1,index:n,name:S[2],strings:p,ctor:S[1]==="."?Mr:S[1]==="?"?Nr:S[1]==="@"?Hr:Le}),o.removeAttribute(h)}else h.startsWith(P)&&(s.push({type:6,index:n}),o.removeAttribute(h));if(Vt.test(o.tagName)){const h=o.textContent.split(P),u=h.length-1;if(u>0){o.textContent=we?we.emptyScript:"";for(let p=0;p<u;p++)o.append(h[p],Y()),C.nextNode(),s.push({type:2,index:++n});o.append(h[u],Y())}}}else if(o.nodeType===8)if(o.data===Bt)s.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(P,h+1))!==-1;)s.push({type:7,index:n}),h+=P.length-1}n++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function I(r,e,t=r,i){var a,l;if(e===U)return e;let o=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Q(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=I(r,o._$AS(r,e.values),o,i)),e}class Ir{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??R).importNode(t,!0);C.currentNode=o;let n=C.nextNode(),a=0,l=0,s=i[0];for(;s!==void 0;){if(a===s.index){let c;s.type===2?c=new he(n,n.nextSibling,this,e):s.type===1?c=new s.ctor(n,s.name,s.strings,this,e):s.type===6&&(c=new Br(n,this,e)),this._$AV.push(c),s=i[++l]}a!==(s==null?void 0:s.index)&&(n=C.nextNode(),a++)}return C.currentNode=R,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class he{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),Q(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==y&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=X.createElement(qt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const a=new Ir(o,this),l=a.u(this.options);a.p(t),this.T(l),this._$AH=a}}_$AC(e){let t=yt.get(e.strings);return t===void 0&&yt.set(e.strings,t=new X(e)),t}k(e){Ft(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new he(this.S(Y()),this.S(Y()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(e,t=this,i,o){const n=this.strings;let a=!1;if(n===void 0)e=I(this,e,t,0),a=!Q(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const l=e;let s,c;for(e=n[0],s=0;s<n.length-1;s++)c=I(this,l[i+s],t,s),c===U&&(c=this._$AH[s]),a||(a=!Q(c)||c!==this._$AH[s]),c===y?e=y:e!==y&&(e+=(c??"")+n[s+1]),this._$AH[s]=c}a&&!o&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mr extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}class Nr extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}}class Hr extends Le{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??y)===U)return;const i=this._$AH,o=e===y&&i!==y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==y&&(i===y||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Br{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const He=J.litHtmlPolyfillSupport;He==null||He(X,he),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.1.2");const Fr=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new he(e.insertBefore(Y(),n),n,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return U}};var Mt;m._$litElement$=!0,m.finalized=!0,(Mt=globalThis.litElementHydrateSupport)==null||Mt.call(globalThis,{LitElement:m});const Be=globalThis.litElementPolyfillSupport;Be==null||Be({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:Ye},qr=(r=Vr,e,t)=>{const{kind:i,metadata:o}=t;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(l){const s=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,s,r)},init(l){return l!==void 0&&this.P(a,void 0,r),l}}}if(i==="setter"){const{name:a}=t;return function(l){const s=this[a];e.call(this,l),this.requestUpdate(a,s,r)}}throw Error("Unsupported decorator location: "+i)};function f(r){return(e,t)=>typeof t=="object"?qr(r,e,t):((i,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(o,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(r){return f({...r,state:!0,attribute:!1})}var Wr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Qe=(r,e,t,i)=>{for(var o=i>1?void 0:i?Gr(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Wr(e,t,o),o};let ee=class extends m{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return this.align,g`

      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ee.styles=b`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      font-family: var(--font-family-body);
      font-size: var(--font-size-body);
      color: var(--color-mode-light-accent);
      border-radius: 15px;
      display: none;
      position: absolute;
      top: 100%;
      left: -50px;
      border: 1px solid;
      background: var(--color-mode-lw);
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
        background-color: white
      color: white;
      margin: 0;
      padding: 0.25em;
      list-style: none;
      display: flex;
      white-space: nowrap;
    }
  `;Qe([f({reflect:!0,type:Boolean})],ee.prototype,"open",2);Qe([f()],ee.prototype,"align",2);ee=Qe([v("drop-down")],ee);var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Wt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Jr(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Kr(e,t,o),o};let xe=class extends m{constructor(){super(...arguments),this.avatar=""}render(){return g`
      <ul>
        <li class="header">
          <img src=${this.avatar} />
          <h1>Hello, <slot name="name">Your Name</slot></h1>
        </li>
        <li>
            <a href="/profile/">Profile</a>
        </li>
        <li>
          <toggle-switch @change=${this._toggleDarkMode}>
            Dark Mode
          </toggle-switch>
        </li>

        <slot></slot>
        <li>
          <slot name="logout">Sign out&hellip;</slot>
        </li>
        <li>
            <a href="signup.html">Sign Up</a>
        </li>
      </ul>
    `}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}};xe.styles=b`
    * {
      margin: 0.5;
      box-sizing: border-box;
      z-index: 1;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-page);
      color: var(--color-mode-light-accent);
      // border: 1px solid var(--color-accent);
      border-radius: var(--size-corner-medium);
      padding: var(--size-spacing-small);
      width: min-content;
      box-shadow: var(--shadow-dropdown);
      align-text: center;
    }
    li {
      white-space: nowrap;
      border-color: var(--color-mode-lw);
      border-width: var(--line-weight-superfine);
      padding: 0.5em;

    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      height: var(--size-icon-large);
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    a {
      color: var(--color-mode-light-accent);
    }
  `;Wt([f()],xe.prototype,"avatar",2);xe=Wt([v("user-panel")],xe);var Zr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Gt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Yr(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Zr(e,t,o),o};let $e=class extends m{constructor(){super(...arguments),this.on=!1}render(){return g`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};$e.styles=b`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
        color: black;
      display: inline-block;
      border: 1px solid black;
      border-radius: 0.75em;
      background-color: var(--color-dark-purple);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: black
        var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-accent);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: white;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;Gt([f({reflect:!0,type:Boolean})],$e.prototype,"on",2);$e=Gt([v("toggle-switch")],$e);var Qr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,eo=(r,e,t,i)=>{for(var o=i>1?void 0:i?Xr(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Qr(e,t,o),o};const to=b`/* * {
    box-sizing: border-box;
} */
header {
    /* background-color: var(--color-header-background); */
    overflow: visible;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 2rem;
}

.header_logo {
    width: 128px;
    aspect-ratio: 1;
    scale: 150%;
    fill: currentColor;
}

.hero {
    position: relative;
    -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
    /* color: var(--color-mode-opp); */
    font-family: var(--font-family-headers);
    margin-bottom: 75px;
}

.header-hero {
    position: relative;
    color: var(--color-mode-light-accent);
    font-family: var(--font-family-headers);
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
}

.header-hero>a:visited {
    opacity: 0;
    color: var(--color-mode-light-accent);
    line-height: 0;
    /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
    /* color: var(--color-mode-opp); */
    /* margin-bottom: px; */
}

.header-hero h3{
    font-family: var(--font-family-headers);
    color: var(--color-mode-light-accent);
    line-height: 0;
    margin-top: 5px;
}


.header a.active {
    background-color: var(--color-header-a-active);
    color: white;
}



.hero span {
    display: inline-block;
    color: var(--color-mode-light-accent);
    font-size: var(--font-size-regular);
    font-size: 5.5rem;
    font-family: vars(--font-family-headers);

}

body{
    background-color: var(--color-background-main);
    background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    background: var(--color-background-main);
    background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    vertical-align: baseline;
    text-align: center;
    font-weight: 500;
}


.page {
    display: flex;
    flex-basis: 100%;
    overflow: auto;
    margin: 0;
    padding: var(--size-spacing-medium);
}


h1, h2, h3, h4, h5, h6{
    /* background-color:#121212; */
    color: var(--color-header-text-color);
    line-height: 2;
    text-align: center;
    border: white;
    font-family: vars(--font-family-headers);
}

img {
    /* display: block; */
    /* height: 20vh; */
    width: 100%;
}

/*title fonts: Bebas Neue*/
.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
h1{
    align-items: left;
    line-height: 1;
    color: var(--color-header-text-color);
    font-size: var(--font-size-large);
    letter-spacing: 0.50rem;
    vertical-align: baseline;
}
h2{
    font-size: var(--font-size-regular);
    background-color: var(--color-h2-background);
}
h3{
    color: var(--color-h3-text);
    font-size: var(--font-size-small);
}
h4{
    font-size: 1.25rem;
    background-color:rgba(255 255 255 / 75%);
    color: black;
}
h5{
    font-size: var(--font-size-body);
}
h6{
    font-size: var(--font-size-body);
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
svg.header_icon {
    display: inline;
    height: 5.5rem;
    aspect-ratio: 1.25;
    vertical-align: center;
    fill: var(--color-header-text-color);

}
svg.account_icon {
    float: right;
    display: inline;
    height: 6rem;
    width: 6rem;
    scale: 0.60;
    fill: var(--color-header-text-color);

}

li{
    font-size: var(--font-size-body);
    color: var(--color-mode-opp);
}

nav {
    color: var(--color-nav-active-color);
    z-index: 1;
}
a:link{
    color: var(--color-mode-opp);
}
a:visited{
    color: var(--color-accent);
}
a:hover{
    color:var(--color-accent) ;
}
a:active{
    color: var(--color-light-tan);
}


/* body font: PT Sans */
.red-hat display-body {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  
.user-dropdown > ul {
    padding-left: 20%;
    padding-right:20%;
    z-index: 1;
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.user-dropdown a:link {
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.setlist-bg {
    background-color: var(--color-h3-background);
    color: var(--color-mode-main);
}


/* headers */


`,st=class st extends m{constructor(){super(...arguments),this.name=""}render(){return console.log("Hello"),g`
        <div style="height: 300px;">
            <nav aria-label="breadcrumb">
                <slot name="breadcrumb"></slot>
            </nav>  
            <header>
                <div class="header-hero">
                    <a href="index.html">
                        <h3>SOUNDWAVE</h3>
                        <h3>COLLECTIVE</h3>
                    </a>
                </div>
                <drop-down>
                    <svg class="account_icon">
                        <use href="/icons/symbols.svg#icon-profile" />
                    </svg>
                    <user-panel 
                        slot="menu" 
                        class="user-dropdown">
                        <span slot="name">${this.name}</span>
                    </user-panel>
                </drop-down>
            </header>
        </div>
        `}};st.styles=to;let Ve=st;eo([f()],Ve.prototype,"name",2);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class{constructor(e,t,i,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Kt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ro{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oo=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class wt extends ro{constructor(e,t,i){var o,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const s=new Set;for(const[c,{consumerHost:d}]of this.subscriptions)s.has(c)||(s.add(c),d.dispatchEvent(new Kt(this.context,c,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(o=this.host).addController)==null||n.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new oo(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new wt(this,{context:r}))}),{get(){return e.get.call(this)},set(o){var n;return(n=i.get(this))==null||n.setValue(o),e.set.call(this,o)},init(o){var n;return(n=i.get(this))==null||n.setValue(o),o}};{e.constructor.addInitializer(a=>{i.set(a,new wt(a,{context:r}))});const o=Object.getOwnPropertyDescriptor(e,t);let n;if(o===void 0){const a=new WeakMap;n={get:function(){return a.get(this)},set:function(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=o.set;n={...o,set:function(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zt({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new _t(this,{context:r,callback:o=>{this[i.name]=o},subscribe:e})}):t.constructor.addInitializer(o=>{new _t(o,{context:r,callback:n=>{o[i]=n},subscribe:e})})}}let io=class extends m{constructor(e,t,i){super(),this.updateFn=e,this.getModel=t,this.setModel=i,this.addEventListener("mvu:message",o=>{const n=o.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){const t=this.updateFn(this.getModel(),e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(o=>{const n=o(this.getModel());console.log("Updating model in Promise:",n),this.setModel(n)}):(console.log("Updating model:",t),this.setModel(t))}},no=class extends m{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class ao{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,o=this._handlers.get(i);return o?o(t,e):e}}function so(r){return e=>Object.assign({},e,r)}function lo(r){return r}var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Yt=(r,e,t,i)=>{for(var o=i>1?void 0:i?ho(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&co(e,t,o),o};const Qt="BlazingModel",uo={profile:JSON.parse(localStorage.getItem("profile")||"{}"),artistList:[],toursList:[],tourInfoList:[],setList:[]};class Xt extends io{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=uo}}Yt([Jt({context:Qt}),ue()],Xt.prototype,"model",2);class F extends no{getFromModel(e){if(this._model)return this._model[e]}}Yt([Zt({context:Qt,subscribe:!0}),f({attribute:!1})],F.prototype,"_model",2);const po=()=>new ao,V=so,De=lo,fo="http://127.0.0.1:3000",go="/api",qe="JWT_AUTH_TOKEN",E=class E{constructor(){this.authenticated=!1,this.username="",this.signOut=()=>{}}static deauthenticate(e){const t=new E;return console.log("Deauthenticating",e,E._theUser),e===E._theUser&&(localStorage.removeItem(qe),E._theUser=t),t}};E._theUser=new E;let $=E;class te extends ${constructor(e,t){super();const o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(o).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),a=JSON.parse(n);console.log("Token payload",a),this.token=e,this.authenticated=!0,this.username=a.username,this.signOut=t}static authenticate(e,t){const i=new te(e,t);return $._theUser=i,localStorage.setItem(qe,e),i}static authenticateFromLocalStorage(e){const t=localStorage.getItem(qe);return t?te.authenticate(t,e):$._theUser}}class q{constructor(e){this._base=go,this.json=e}base(e=""){return this._base=e,this}get(e){return console.log("GET",this._url(e)),fetch(this._url(e),{headers:this._headers()})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${fo}${this._base}${e}`}}class xt extends q{constructor(e){super(Object.fromEntries(e))}}class mo extends q{constructor(){super(void 0)}}const D=po();D.addMessage("ProfileRequested",r=>{const{userid:e}=r;return new q({}).get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{t&&console.log("Profile:",t)}).then(t=>t?V({profile:t}):De)});D.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new q(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{if(i)return console.log("Profile:",i),i}).then(i=>(localStorage.setItem("profile",JSON.stringify(i)),i?V({profile:i}):De))});D.addMessage("ArtistListRequested",r=>new q({}).get("/artists").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return e}).then(e=>e?V({artistList:e}):De));D.addMessage("ToursListRequested",r=>{const{name:e}=r;return new q({}).get(`/tours/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return t}).then(t=>t?V({toursList:t}):De)});async function vo(){return[{date:"July 29th",location:"Seattle, WA",tourname:""},{date:"July 30th",location:"Seattle, WA",tourname:""},{date:"July 31st",location:"Seattle, WA",tourname:""},{date:"August 17th",location:"Phoenix, AZ",tourname:""},{date:"August 19th",location:"Austin, TX",tourname:""},{date:"September 30th",location:"Santa Barbara, CA",tourname:""}]}D.addMessage("TourInfoListRequested",r=>vo().then(e=>V({tourInfoList:e})));async function bo(){return[{song:"This Version of You",spotifyurl:"https://open.spotify.com/embed/track/2h4IoIeRasKE7moH6zhHUO?utm_source=generator"},{song:"Behind the Sun",spotifyurl:"https://open.spotify.com/embed/track/7tRXTDi87CiAqU5sIBQfIC?utm_source=generator"},{song:"All We Need",spotifyurl:"https://open.spotify.com/embed/track/5jnp8E61wcoF6qIEtDHQnJ?utm_source=generator"},{song:"Love Letter/Something About You",spotifyurl:"https://open.spotify.com/embed/track/5p8QLRVnBk20xuvwiDZtTr?utm_source=generator"},{song:"Say My Name",spotifyurl:"https://open.spotify.com/embed/track/1LeItUMezKA1HdCHxYICed?utm_source=generator"},{song:"Late Night",spotifyurl:"https://open.spotify.com/embed/track/5Nu5Uyoauauy9LFePYL1Z3?utm_source=generator"},{song:"In the Rain",spotifyurl:"https://open.spotify.com/embed/track/0fR8y0bMqFn0mDdZoksk7N?utm_source=generator"},{song:"Heavier",spotifyurl:"https://open.spotify.com/embed/track/4JBRlhgxP6tkb31KCfM88R?utm_source=generator"}]}D.addMessage("SetListRequested",r=>bo().then(e=>V({setList:e})));const yo=D.update;var _o=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var o=i>1?void 0:i?wo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&_o(e,t,o),o};let M=class extends m{constructor(){super(...arguments),this.name="",this.artistPicPath="",this.genres=[]}render(){return g`
        <div class="card">
            <span class="artistImage">
                <slot name="artistImage">
            </span>
            <h3>
                <slot name="artistName">Artist Name</slot>
            </h3>
            </card>
    `}};M.styles=b`
    :host {
        display: block;
        height: 100%;
        width: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.5);
    }

    label {
        cursor: pointer;
    }
    
    img {
        width: 100%;
        border-radius: var(--size-corner-medium);
    }
    `;je([f({type:String})],M.prototype,"name",2);je([f({type:String})],M.prototype,"artistPicPath",2);je([f({type:Array})],M.prototype,"genres",2);M=je([v("artist-card")],M);var xo=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,er=(r,e,t,i)=>{for(var o=i>1?void 0:i?$o(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&xo(e,t,o),o};let Ae=class extends m{constructor(){super(...arguments),this.artists=[]}sortAlphabetically(){this.artists.sort((r,e)=>r.name.localeCompare(e.name)),this.requestUpdate()}renderArtist(r){return g`<a href="/tours/${r.name}">
                <artist-card class="artist-card">
                    <img slot="artistImage" src="${r.image}"/>
                    <span slot="artistName">${r.name}</span> 
                    
                </artist-card>
            </a> `}render(){return g`
        <section>
            <div class="sort">
                <button @click="${this.sortAlphabetically}">Sort Alp</button>
            </div>
            <div class="artists">
            ${this.artists.map(r=>this.renderArtist(r))}
            </div>
        </section>`}};Ae.styles=b`
    .artists{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .artist{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .artist-card{
        border: 3px solid var(--color-mode-light-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    .sort {
        display: flex;
        justify-content: flex-left;
    }

    .sort > button {
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid var(--color-mode-light-accent);
        border-radius: 3px;
        background-color: var(--color-mode-lw);
        color: var(--color-mode-light-accent);
        cursor: pointer;
    }

    .sort > button:hover {
        background-color: var(--color-mode-light-accent);
        color: white;
    }

    img {
        width: 100%;
    }

    `;er([f({type:Array})],Ae.prototype,"artists",2);Ae=er([v("artist-list")],Ae);var Ao=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,Xe=(r,e,t,i)=>{for(var o=i>1?void 0:i?Eo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Ao(e,t,o),o};const Po=b`/* * {
    box-sizing: border-box;
} */
header {
    /* background-color: var(--color-header-background); */
    overflow: visible;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 2rem;
}

.header_logo {
    width: 128px;
    aspect-ratio: 1;
    scale: 150%;
    fill: currentColor;
}

.hero {
    position: relative;
    -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
    /* color: var(--color-mode-opp); */
    font-family: var(--font-family-headers);
    margin-bottom: 75px;
}

.header-hero {
    position: relative;
    color: var(--color-mode-light-accent);
    font-family: var(--font-family-headers);
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
}

.header-hero>a:visited {
    opacity: 0;
    color: var(--color-mode-light-accent);
    line-height: 0;
    /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
    /* color: var(--color-mode-opp); */
    /* margin-bottom: px; */
}

.header-hero h3{
    font-family: var(--font-family-headers);
    color: var(--color-mode-light-accent);
    line-height: 0;
    margin-top: 5px;
}


.header a.active {
    background-color: var(--color-header-a-active);
    color: white;
}



.hero span {
    display: inline-block;
    color: var(--color-mode-light-accent);
    font-size: var(--font-size-regular);
    font-size: 5.5rem;
    font-family: vars(--font-family-headers);

}

body{
    background-color: var(--color-background-main);
    background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    background: var(--color-background-main);
    background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    vertical-align: baseline;
    text-align: center;
    font-weight: 500;
}


.page {
    display: flex;
    flex-basis: 100%;
    overflow: auto;
    margin: 0;
    padding: var(--size-spacing-medium);
}


h1, h2, h3, h4, h5, h6{
    /* background-color:#121212; */
    color: var(--color-header-text-color);
    line-height: 2;
    text-align: center;
    border: white;
    font-family: vars(--font-family-headers);
}

img {
    /* display: block; */
    /* height: 20vh; */
    width: 100%;
}

/*title fonts: Bebas Neue*/
.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
h1{
    align-items: left;
    line-height: 1;
    color: var(--color-header-text-color);
    font-size: var(--font-size-large);
    letter-spacing: 0.50rem;
    vertical-align: baseline;
}
h2{
    font-size: var(--font-size-regular);
    background-color: var(--color-h2-background);
}
h3{
    color: var(--color-h3-text);
    font-size: var(--font-size-small);
}
h4{
    font-size: 1.25rem;
    background-color:rgba(255 255 255 / 75%);
    color: black;
}
h5{
    font-size: var(--font-size-body);
}
h6{
    font-size: var(--font-size-body);
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
svg.header_icon {
    display: inline;
    height: 5.5rem;
    aspect-ratio: 1.25;
    vertical-align: center;
    fill: var(--color-header-text-color);

}
svg.account_icon {
    float: right;
    display: inline;
    height: 6rem;
    width: 6rem;
    scale: 0.60;
    fill: var(--color-header-text-color);

}

li{
    font-size: var(--font-size-body);
    color: var(--color-mode-opp);
}

nav {
    color: var(--color-nav-active-color);
    z-index: 1;
}
a:link{
    color: var(--color-mode-opp);
}
a:visited{
    color: var(--color-accent);
}
a:hover{
    color:var(--color-accent) ;
}
a:active{
    color: var(--color-light-tan);
}


/* body font: PT Sans */
.red-hat display-body {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  
.user-dropdown > ul {
    padding-left: 20%;
    padding-right:20%;
    z-index: 1;
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.user-dropdown a:link {
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.setlist-bg {
    background-color: var(--color-h3-background);
    color: var(--color-mode-main);
}


/* headers */


`;let re=class extends F{constructor(){super()}get profile(){return this.getFromModel("profile")}get artistList(){return this.getFromModel("artistList")}connectedCallback(){super.connectedCallback(),this.dispatchMessage({type:"ArtistListRequested"})}render(){var r;return g`
        <nav aria-label="breadcrumb">
            Home
        </nav>
        <header>
            <drop-down>
                <svg class="account_icon">
                    <use href="/icons/symbols.svg#icon-profile" />
                </svg>
                <user-panel 
                    slot="menu" 
                    class="user-dropdown">
                    <span slot="name">${(r=this.profile)==null?void 0:r.name}</span>
                </user-panel>
            </drop-down>
        </header>
        <article>
        <div class="hero">
            <span>SOUNDWAVE COLLECTIVE</span>
        </div>
        <h2>Artists</h2>
        <artist-list .artists=${this.artistList}></artist-list>
        </article>`}};re.styles=Po;Xe([f()],re.prototype,"profile",1);Xe([f()],re.prototype,"artistList",1);re=Xe([v("index-page")],re);var ko=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,et=(r,e,t,i)=>{for(var o=i>1?void 0:i?Oo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&ko(e,t,o),o};let oe=class extends m{constructor(){super(...arguments),this.name="",this.tourPicPath=""}render(){return g`
        <div class="card">
            <span class="tourImage">
                <slot name="tourImage">
            </span>
            <h3>
                <slot name="tourName">Tour Name</slot>
            </h3>
            <h4>
                <slot name="artistName">Artist Name</slot>
            </h4>
        </card>
    `}};oe.styles=b`
    :host {
        display: block;
        height: 100%;
        width: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.5);
    }

    label {
        cursor: pointer;
    }
    
    img {
        width: 100%;
        border-radius: var(--size-corner-medium);
    }
    `;et([f({type:String})],oe.prototype,"name",2);et([f({type:String})],oe.prototype,"tourPicPath",2);oe=et([v("tour-card")],oe);var So=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,tr=(r,e,t,i)=>{for(var o=i>1?void 0:i?zo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&So(e,t,o),o};let Ee=class extends m{constructor(){super(...arguments),this.tours=[]}sortAlphabetically(){this.tours.sort((r,e)=>r.name.localeCompare(e.name)),this.requestUpdate()}renderTour(r){return g`<a href="/tour/">
                <tour-card class="tour-card">
                    <img slot="tourImage" src="${r.image}"/>
                    <span slot="tourName">${r.name}</span>
                    <span slot="artistName">${r.artist}</span> 
                    
                </tour-card>
            </a> `}render(){return g`
        <section>
            <div class="sort">
                <button @click="${this.sortAlphabetically}">Sort Alp</button>
            </div>
            <div class="tours">
            ${this.tours.map(r=>this.renderTour(r))}
            </div>
        </section>`}};Ee.styles=b`
    .tours{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .tour{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .tour-card{
        border: 3px solid var(--color-mode-light-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    .sort {
        display: flex;
        justify-content: flex-left;
    }

    .sort > button {
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid var(--color-mode-light-accent);
        border-radius: 3px;
        background-color: var(--color-mode-lw);
        color: var(--color-mode-light-accent);
        cursor: pointer;
    }

    .sort > button:hover {
        background-color: var(--color-mode-light-accent);
        color: white;
    }

    img {
        width: 100%;
    }

    `;tr([f({type:Array})],Ee.prototype,"tours",2);Ee=tr([v("tour-list")],Ee);var Co=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Te=(r,e,t,i)=>{for(var o=i>1?void 0:i?Ro(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Co(e,t,o),o};const Lo=b`header {
    /* background-color: var(--color-header-background); */
    overflow: visible;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 2rem;
}

.header_logo {
    width: 128px;
    aspect-ratio: 1;
    scale: 150%;
    fill: currentColor;
}

.hero {
    position: relative;
    -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
    /* color: var(--color-mode-opp); */
    font-family: var(--font-family-headers);
    margin-bottom: 75px;
}

.header-hero {
    position: relative;
    color: var(--color-mode-light-accent);
    font-family: var(--font-family-headers);
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
}

.header-hero>a:visited {
    opacity: 0;
    color: var(--color-mode-light-accent);
    line-height: 0;
    /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
    /* color: var(--color-mode-opp); */
    /* margin-bottom: px; */
}

.header-hero h3{
    font-family: var(--font-family-headers);
    color: var(--color-mode-light-accent);
    line-height: 0;
    margin-top: 5px;
}


.header a.active {
    background-color: var(--color-header-a-active);
    color: white;
}



.hero span {
    display: inline-block;
    color: var(--color-mode-light-accent);
    font-size: var(--font-size-regular);
    font-size: 5.5rem;
    font-family: vars(--font-family-headers);

}

body{
    background-color: var(--color-background-main);
    background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    background: var(--color-background-main);
    background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    vertical-align: baseline;
    text-align: center;
    font-weight: 500;
}


.page {
    display: flex;
    flex-basis: 100%;
    overflow: auto;
    margin: 0;
    padding: var(--size-spacing-medium);
}


h1, h2, h3, h4, h5, h6{
    /* background-color:#121212; */
    color: var(--color-header-text-color);
    line-height: 2;
    text-align: center;
    border: white;
    font-family: vars(--font-family-headers);
}

img {
    /* display: block; */
    /* height: 20vh; */
    width: 100%;
}

/*title fonts: Bebas Neue*/
.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
h1{
    align-items: left;
    line-height: 1;
    color: var(--color-header-text-color);
    font-size: var(--font-size-large);
    letter-spacing: 0.50rem;
    vertical-align: baseline;
}
h2{
    font-size: var(--font-size-regular);
    background-color: var(--color-h2-background);
}
h3{
    color: var(--color-h3-text);
    font-size: var(--font-size-small);
}
h4{
    font-size: 1.25rem;
    background-color:rgba(255 255 255 / 75%);
    color: black;
}
h5{
    font-size: var(--font-size-body);
}
h6{
    font-size: var(--font-size-body);
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
svg.header_icon {
    display: inline;
    height: 5.5rem;
    aspect-ratio: 1.25;
    vertical-align: center;
    fill: var(--color-header-text-color);

}
svg.account_icon {
    float: right;
    display: inline;
    height: 6rem;
    width: 6rem;
    scale: 0.60;
    fill: var(--color-header-text-color);

}

li{
    font-size: var(--font-size-body);
    color: var(--color-mode-opp);
}

nav {
    color: var(--color-nav-active-color);
    z-index: 1;
}
a:link{
    color: var(--color-mode-opp);
}
a:visited{
    color: var(--color-accent);
}
a:hover{
    color:var(--color-accent) ;
}
a:active{
    color: var(--color-light-tan);
}


/* body font: PT Sans */
.red-hat display-body {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  
.user-dropdown > ul {
    padding-left: 20%;
    padding-right:20%;
    z-index: 1;
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.user-dropdown a:link {
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.setlist-bg {
    background-color: var(--color-h3-background);
    color: var(--color-mode-main);
}




.tours {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0 4 rem;
    align-items: baseline;
    align-content: space-around;
    justify-content: space-evenly;
    column-gap: 1rem;
}

.tour{
    display: block;
    height: 20vh;
    width: auto;
}

.tour-card{
    border: 3px solid var(--color-mode-light-accent);
    text-align: center;
    color: white;
    margin: 4px 2px;
    padding: 15px 32px;
    font-size: var(--font-size-small);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px 10px 10px 10px;
    font-family: var(--font-family-headers);

}

.tour-card:hover{
    background-color: rgba(255, 255, 255, 0.5);
    border: 3px solid var(--color-mode-light-accent);
    color: var(--color-mode-light-accent);
}
`;let N=class extends F{get artistname(){var r;return((r=this.location)==null?void 0:r.params.artistname)||""}constructor(){super()}get profile(){return this.getFromModel("profile")}get toursList(){return this.getFromModel("toursList")}connectedCallback(){super.connectedCallback(),this.dispatchMessage({type:"ToursListRequested",name:this.artistname})}render(){var r;return g`
            <article>
                <nav aria-label="breadcrumb">
                <a href="">Home</a> &gt;
                ${this.artistname}
                </nav>  
                <header>
                    <div class="header-hero">
                        <a href="index.html">
                            <h3>SOUNDWAVE</h3>
                            <h3>COLLECTIVE</h3>
                        </a>
                    </div>
                    <drop-down>
                        <svg class="account_icon">
                            <use href="/icons/symbols.svg#icon-profile" />
                        </svg>
                        <user-panel 
                            slot="menu" 
                            class="user-dropdown">
                            <span slot="name">${(r=this.profile)==null?void 0:r.name}</span>
                        </user-panel>
                    </drop-down>
                </header>
                <div>
                    <h1>
                    ${this.artistname}
                    </h1>
                    <h2>Tours</h2>
                    <tour-list .tours=${this.toursList}></tour-list>
                </div>
            </article>`}};N.styles=Lo;Te([f({attribute:"artistname",reflect:!0})],N.prototype,"artistname",1);Te([f()],N.prototype,"profile",1);Te([f()],N.prototype,"toursList",1);N=Te([v("tours-page")],N);var Do=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,pe=(r,e,t,i)=>{for(var o=i>1?void 0:i?jo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Do(e,t,o),o};let H=class extends m{render(){const{userid:r,name:e,nickname:t,city:i,genres:o=[]}=this.profile||{},n=a=>g`<dd>${a}</dd>`;return g`
      <section>
        ${this._renderAvatar()}
        <h1>${e}</h1>
        <dl>
          <dt>Username</dt>
          <dd>${r}</dd>
          <dt>Nickname</dt>
          <dd>${t}</dd>
          <dt>Home City</dt>
          <dd>${i}</dd>
          <dt>Genres</dt>
          ${o.map(n)}
        </dl>
      </section>
    `}_renderAvatar(){}};H.styles=[b`
      :host {
        --avatar-backgroundColor: var(--color-accent);
        --avatar-size: 100px;
        padding: var(--size-spacing-medium);
      }
      section {
        display: grid;
        grid-template-columns: [key] 1fr [value] 2fr [end];
        gap: var(--size-spacing-xlarge);
        align-items: end;
      }
      h1 {
        grid-column: value;
      }
      dl {
        display: grid;
        grid-column: key / end;
        grid-template-columns: subgrid;
        gap: 0 var(--size-spacing-xlarge);
        align-items: baseline;
      }
      dt {
        grid-column: key;
        justify-self: end;
        color: var(--color-accent);
        font-family: var(--font-family-display);
      }
      dd {
        grid-column: value;
      }
      .avatar {
        grid-column: key;
        justify-self: end;
        position: relative;
        width: var(--avatar-size);
        aspect-ratio: 1;
        background-color: var(--avatar-backgroundColor);
        border-radius: 50%;
        text-align: center;
        line-height: var(--avatar-size);
        font-size: calc(0.66 * var(--avatar-size));
        font-family: var(--font-family-display);
        color: var(--color-link-inverted);
        overflow: hidden;
      }
      .name {
        width: 100%;
        font-family: var(--font-family-display);
        color: var(--color-accent);
      }
      img {
        width: 100%;
      }
    `];pe([f({attribute:!1})],H.prototype,"profile",2);H=pe([v("user-profile")],H);let ie=class extends H{render(){const{userid:r,name:e,nickname:t,city:i,genres:o=[]}=this.profile||{};return console.log("Rendering form",this.profile),g`
      <section>
        <form @submit=${this._handleSubmit}>
          <dl>
            <dt>Username</dt>
            <dd><input name="userid" .value=${r} /></dd>
            <dt>Avatar</dt>
            <dd
              ><input
                name="avatar"
                type="file"
                @change=${this._handleAvatarSelected}
            /></dd>
            <dd>${this._renderAvatar()}</dd>
            <dt>Name</dt>
            <dd><input name="name" .value=${e} /></dd>
            <dt>Nickname</dt>
            <dd
              ><input name="nickname" .value=${t}
            /></dd>
            <dt>Home City</dt>
            <dd><input name="city" .value=${i} /></dd>
            <dt>Genres</dt>
            <dd
              ><input
                name="genres"
                .value=${o.join(", ")}
            /></dd>
          </dl>
          <button type="submit">Submit</button>
        </form>
      </section>
    `}_handleAvatarSelected(r){const t=r.target.files[0];new Promise((o,n)=>{const a=new FileReader;a.onload=()=>o(a.result),a.onerror=l=>n(l),a.readAsDataURL(t)}).then()}_handleSubmit(r){if(r.preventDefault(),this.profile){console.log("Profile",this.profile);const e=r.target;console.log(e);const t=new FormData(e);let i=Array.from(t.entries()).map(([n,a])=>a===""?[n]:[n,a]);const o=Object.fromEntries(i);this.submitProfileChange&&this.submitProfileChange(o)}}_renderAvatar(){}};ie.styles=[...H.styles,b`
      form {
        display: contents;
      }
      button {
        grid-column: value;
        width: 10em;
      }
      input {
        font: inherit;
      }
    `];pe([f()],ie.prototype,"profile",2);pe([f()],ie.prototype,"submitProfileChange",2);ie=pe([v("user-profile-edit")],ie);var To=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,rr=(r,e,t,i)=>{for(var o=i>1?void 0:i?Uo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&To(e,t,o),o};const Io=b`
    header {
        /* background-color: var(--color-header-background); */
        overflow: visible;
        display: flex;
        flex-wrap: no-wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        gap: 2rem;
    }

    .header_logo {
        width: 128px;
        aspect-ratio: 1;
        scale: 150%;
        fill: currentColor;
    }

    .hero {
        position: relative;
        -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
        /* color: var(--color-mode-opp); */
        font-family: var(--font-family-headers);
        margin-bottom: 75px;
    }

    .header-hero {
        position: relative;
        color: var(--color-mode-light-accent);
        font-family: var(--font-family-headers);
        margin-bottom: 5px;
        margin-top: 5px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .header-hero>a:visited {
        opacity: 0;
        color: var(--color-mode-light-accent);
        line-height: 0;
        /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
        /* color: var(--color-mode-opp); */
        /* margin-bottom: px; */
    }

    .header-hero h3{
        font-family: var(--font-family-headers);
        color: var(--color-mode-light-accent);
        line-height: 0;
        margin-top: 5px;
    }


    .header a.active {
        background-color: var(--color-header-a-active);
        color: white;
    }



    .hero span {
        display: inline-block;
        color: var(--color-mode-light-accent);
        font-size: var(--font-size-regular);
        font-size: 5.5rem;
        font-family: vars(--font-family-headers);

    }

    body{
        background-color: var(--color-background-main);
        background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
        background: var(--color-background-main);
        background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
        font-family: var(--font-family-body);
        font-size: var(--font-size-body);
        vertical-align: baseline;
        text-align: center;
        font-weight: 500;
    }


    .page {
        display: flex;
        flex-basis: 100%;
        overflow: auto;
        margin: 0;
        padding: var(--size-spacing-medium);
    }


    h1, h2, h3, h4, h5, h6{
        /* background-color:#121212; */
        color: var(--color-header-text-color);
        line-height: 2;
        text-align: center;
        border: white;
        font-family: vars(--font-family-headers);
    }

    img {
        /* display: block; */
        /* height: 20vh; */
        width: 100%;
    }

    /*title fonts: Bebas Neue*/
    .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
    } 
    h1{
        align-items: left;
        line-height: 1;
        color: var(--color-header-text-color);
        font-size: var(--font-size-large);
        letter-spacing: 0.50rem;
        vertical-align: baseline;
    }
    h2{
        font-size: var(--font-size-regular);
        background-color: var(--color-h2-background);
    }
    h3{
        color: var(--color-h3-text);
        font-size: var(--font-size-small);
    }
    h4{
        font-size: 1.25rem;
        background-color:rgba(255 255 255 / 75%);
        color: black;
    }
    h5{
        font-size: var(--font-size-body);
    }
    h6{
        font-size: var(--font-size-body);
    }
    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
    }
    svg.header_icon {
        display: inline;
        height: 5.5rem;
        aspect-ratio: 1.25;
        vertical-align: center;
        fill: var(--color-header-text-color);

    }
    svg.account_icon {
        float: right;
        display: inline;
        height: 6rem;
        width: 6rem;
        scale: 0.60;
        fill: var(--color-header-text-color);

    }

    li{
        font-size: var(--font-size-body);
        color: var(--color-mode-opp);
    }

    nav {
        color: var(--color-nav-active-color);
        z-index: 1;
    }
    a:link{
        color: var(--color-mode-opp);
    }
    a:visited{
        color: var(--color-accent);
    }
    a:hover{
        color:var(--color-accent) ;
    }
    a:active{
        color: var(--color-light-tan);
    }


    /* body font: PT Sans */
    .red-hat display-body {
        font-family: "Red Hat Display", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    
    .user-dropdown > ul {
        padding-left: 20%;
        padding-right:20%;
        z-index: 1;
        /* display: none; */
        color: black;
        /* background-color: white; */
        text-align: center;
    }
    .user-dropdown a:link {
        /* display: none; */
        color: black;
        /* background-color: white; */
        text-align: center;
    }
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }



`;let Pe=class extends F{constructor(){super()}connectedCallback(){super.connectedCallback()}get profile(){return this.getFromModel("profile")}onSubmit(r){var e;console.log("Form submitted",r),this.dispatchMessage({type:"ProfileSaved",userid:((e=this.profile)==null?void 0:e.userid)??"",profile:{...r,avatar:""}})}render(){var r;return g`
        <article>

            <nav aria-label="breadcrumb">
            <a href="/">Home</a> &gt;
            ODESZA
            </nav>  
            <header>
                <div class="header-hero">
                    <a href="index.html">
                        <h3>SOUNDWAVE</h3>
                        <h3>COLLECTIVE</h3>
                    </a>
                </div>
                <drop-down>
                    <svg class="account_icon">
                        <use href="/icons/symbols.svg#icon-profile" />
                    </svg>
                    <user-panel 
                        slot="menu" 
                        class="user-dropdown">
                        <span slot="name">${(r=this.profile)==null?void 0:r.name}</span>
                    </user-panel>
                </drop-down>
            </header>
            <body>
                <h2>Profile</h2>
                <main class="page">
                    
                    <user-profile .profile=${this.profile}></user-profile>
                    <user-profile-edit .profile=${this.profile} .submitProfileChange=${e=>this.onSubmit(e)}></user-profile-edit>
                </main>
            </body>
        </article>
        `}};Pe.styles=Io;rr([f({type:Object})],Pe.prototype,"profile",1);Pe=rr([v("profile-page")],Pe);var Mo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,tt=(r,e,t,i)=>{for(var o=i>1?void 0:i?No(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Mo(e,t,o),o};let ne=class extends m{constructor(){super(...arguments),this.date="",this.location=""}render(){return g`
        <div class="tourinfo">
            <h3>
                <slot name="tourDate">Date</slot>
            </h3>
            <a href="/setlist/">
                    <button class="tour-city">
                        <slot name="tourLocation">
                            City, State
                        </slot>
                    </button>
            </a>
        </card>
    `}};ne.styles=b`
    :host {
        display: block;
        height: 100%;
        width: auto;
        margin: 10px;
        border: 3px solid var(--color-mode-light-accent);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.2);
    }

    label {
        cursor: pointer;
    }

    .tour-city {
        border: 3px solid var(--color-hot-pink);
        text-align: center;
        color: var(--color-hot-pink);
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-body);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.75);
        /* opacity: 0.50; */
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    }
    
    .tour-city:hover {
        background-color: var(--color-hot-pink);
        color: var(--color-lightpink-white);
    }
    
    .tour-city > a {
        text-decoration: none;
        color: var(--color-dark-purple);
    }
    
    .tourinfo > h3{
        color: var(--color-mode-opp);
    }


    `;tt([f({type:String})],ne.prototype,"date",2);tt([f({type:String})],ne.prototype,"location",2);ne=tt([v("tourinfo-card")],ne);var Ho=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,or=(r,e,t,i)=>{for(var o=i>1?void 0:i?Bo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Ho(e,t,o),o};let ke=class extends m{constructor(){super(...arguments),this.tourInfo=[]}sortAlphabetically(){this.tourInfo.sort((r,e)=>r.location.localeCompare(e.location)),this.requestUpdate()}renderTourInfo(r){return g`<a href="/setlist/">
                <tourinfo-card class="tourinfo-card">
                    <span slot="tourDate">${r.date}</span>
                    <span slot="tourLocation">${r.location}</span> 
                    
                </tourinfo-card>
            </a> `}render(){return console.log(this.tourInfo,"####"),g`
        <section>
            <div class="sort">
                <button @click="${this.sortAlphabetically}">Sort Alp</button>
            </div>
            <div class="tourinfo">
            ${this.tourInfo.map(r=>this.renderTourInfo(r))}
            </div>
        </section>`}};ke.styles=b`
    .tours{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    .tour{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .tour-card{
        border: 3px solid var(--color-mode-light-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    .sort {
        display: flex;
        justify-content: flex-left;
    }

    .sort > button {
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid var(--color-mode-light-accent);
        border-radius: 3px;
        background-color: var(--color-mode-lw);
        color: var(--color-mode-light-accent);
        cursor: pointer;
    }

    .sort > button:hover {
        background-color: var(--color-mode-light-accent);
        color: white;
    }

    img {
        width: 100%;
    }

    `;or([f({type:Array})],ke.prototype,"tourInfo",2);ke=or([v("tourinfo-list")],ke);var Fo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,rt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Vo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Fo(e,t,o),o};const qo=b`header {
    /* background-color: var(--color-header-background); */
    overflow: visible;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 2rem;
}

.header_logo {
    width: 128px;
    aspect-ratio: 1;
    scale: 150%;
    fill: currentColor;
}

.hero {
    position: relative;
    -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
    /* color: var(--color-mode-opp); */
    font-family: var(--font-family-headers);
    margin-bottom: 75px;
}

.header-hero {
    position: relative;
    color: var(--color-mode-light-accent);
    font-family: var(--font-family-headers);
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
}

.header-hero>a:visited {
    opacity: 0;
    color: var(--color-mode-light-accent);
    line-height: 0;
    /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
    /* color: var(--color-mode-opp); */
    /* margin-bottom: px; */
}

.header-hero h3{
    font-family: var(--font-family-headers);
    color: var(--color-mode-light-accent);
    line-height: 0;
    margin-top: 5px;
}


.header a.active {
    background-color: var(--color-header-a-active);
    color: white;
}



.hero span {
    display: inline-block;
    color: var(--color-mode-light-accent);
    font-size: var(--font-size-regular);
    font-size: 5.5rem;
    font-family: vars(--font-family-headers);

}

body{
    background-color: var(--color-background-main);
    background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    background: var(--color-background-main);
    background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
    font-family: var(--font-family-body);
    font-size: var(--font-size-body);
    vertical-align: baseline;
    text-align: center;
    font-weight: 500;
}


.page {
    display: flex;
    flex-basis: 100%;
    overflow: auto;
    margin: 0;
    padding: var(--size-spacing-medium);
}


h1, h2, h3, h4, h5, h6{
    /* background-color:#121212; */
    color: var(--color-header-text-color);
    line-height: 2;
    text-align: center;
    border: white;
    font-family: vars(--font-family-headers);
}

img {
    /* display: block; */
    /* height: 20vh; */
    width: 100%;
}

/*title fonts: Bebas Neue*/
.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  } 
h1{
    align-items: left;
    line-height: 1;
    color: var(--color-header-text-color);
    font-size: var(--font-size-large);
    letter-spacing: 0.50rem;
    vertical-align: baseline;
}
h2{
    font-size: var(--font-size-regular);
    background-color: var(--color-h2-background);
}
h3{
    color: var(--color-h3-text);
    font-size: var(--font-size-small);
}
h4{
    font-size: 1.25rem;
    background-color:rgba(255 255 255 / 75%);
    color: black;
}
h5{
    font-size: var(--font-size-body);
}
h6{
    font-size: var(--font-size-body);
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
svg.header_icon {
    display: inline;
    height: 5.5rem;
    aspect-ratio: 1.25;
    vertical-align: center;
    fill: var(--color-header-text-color);

}
svg.account_icon {
    float: right;
    display: inline;
    height: 6rem;
    width: 6rem;
    scale: 0.60;
    fill: var(--color-header-text-color);

}

li{
    font-size: var(--font-size-body);
    color: var(--color-mode-opp);
}

nav {
    color: var(--color-nav-active-color);
    z-index: 1;
}
a:link{
    color: var(--color-mode-opp);
}
a:visited{
    color: var(--color-accent);
}
a:hover{
    color:var(--color-accent) ;
}
a:active{
    color: var(--color-light-tan);
}


/* body font: PT Sans */
.red-hat display-body {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  
.user-dropdown > ul {
    padding-left: 20%;
    padding-right:20%;
    z-index: 1;
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.user-dropdown a:link {
    /* display: none; */
    color: black;
    /* background-color: white; */
    text-align: center;
}
.setlist-bg {
    background-color: var(--color-h3-background);
    color: var(--color-mode-main);
}

.tour-city {
    border: 3px solid var(--color-hot-pink);
    text-align: center;
    color: var(--color-hot-pink);
    margin: 4px 2px;
    padding: 15px 32px;
    font-size: var(--font-size-body);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.75);
    /* opacity: 0.50; */
    border-radius: 10px 10px 10px 10px;
    font-family: var(--font-family-headers);
}

.tour-city:hover {
    background-color: var(--color-hot-pink);
    color: var(--color-lightpink-white);
}

.tour-city > a {
    text-decoration: none;
    color: var(--color-dark-purple);
}`;let ae=class extends F{constructor(){super()}get profile(){return this.getFromModel("profile")}get tourInfoList(){return this.getFromModel("tourInfoList")}connectedCallback(){super.connectedCallback(),this.dispatchMessage({type:"TourInfoListRequested"})}render(){var r;return g`
            <article class="tours">
            <nav aria-label="breadcrumb">
                <a href="index.html">Home</a> &gt;
                <a href="tours.html">ODESZA</a> &gt;
                The Last Goodbye (2023)
            </nav>
            <header>
                <div class="header-hero">
                    <a href="index.html">
                        <h3>SOUNDWAVE</h3>
                        <h3>COLLECTIVE</h3>
                    </a>
                </div>
                <drop-down>
                    <svg class="account_icon">
                        <use href="/icons/symbols.svg#icon-profile" />
                    </svg>
                    <user-panel 
                        slot="menu" 
                        class="user-dropdown">
                        <span slot="name">${(r=this.profile)==null?void 0:r.name}</span>
                    </user-panel>
                </drop-down>
            </header>
            <img src="/images/tour_odesza_tlg.jpeg"/>
            <section class="tour">
                <h2>Dates // Locations</h2>
                <tourinfo-list .tourInfo=${this.tourInfoList}></tourinfo-list>
            </section>
        </article>`}};ae.styles=qo;rt([f()],ae.prototype,"profile",1);rt([f()],ae.prototype,"tourInfoList",1);ae=rt([v("tour-page")],ae);var Wo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,ot=(r,e,t,i)=>{for(var o=i>1?void 0:i?Go(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Wo(e,t,o),o};let se=class extends m{constructor(){super(...arguments),this.song="",this.spotifyurl=""}render(){return g`
        <div class="songcard">
            <h4>
                <slot name="songname">Song</slot>
            </h4>
            <iframe style="border-radius:12px" src=${this.spotifyurl} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `}};se.styles=b`
    :host {
        display: block;
        height: 100%;
        width: auto;
        margin: 10px;
        border: 3px solid var(--color-mode-light-accent);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.2);
    }

    label {
        cursor: pointer;
    }

    .setlist {
        display: grid;
        align-items: baseline;
        vertical-align: auto;
    }
    
    .setlist > header {
        flex-basis: min-content;
    }
    
    .setlist > li {
        color: var(--color-mode-opp);
    }
    
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }

    .songcard > h4 {
        margin: 0.2rem;
    }

    `;ot([f({type:String})],se.prototype,"song",2);ot([f({type:String})],se.prototype,"spotifyurl",2);se=ot([v("song-card")],se);var Ko=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,ir=(r,e,t,i)=>{for(var o=i>1?void 0:i?Jo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Ko(e,t,o),o};let Oe=class extends m{constructor(){super(...arguments),this.songs=[]}renderSong(r){return g`
            <song-card class="song-card" spotifyurl=${r.spotifyurl}>
                <span slot="songname">${r.song}</span>
            </song-card>`}render(){return console.log(this.songs,"####"),g`
        <section>
            ${this.songs.map(r=>this.renderSong(r))}
        </section>`}};Oe.styles=b`
    .host{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0 4 rem;
        align-items: baseline;
        align-content: space-around;
        justify-content: space-evenly;
        column-gap: 1rem;
    }
    
    .setlist{
        display: block;
        height: 20vh;
        width: auto;
    }
    
    .song-card{
        border: 3px solid var(--color-mode-light-accent);
        text-align: center;
        color: white;
        margin: 4px 2px;
        padding: 15px 32px;
        font-size: var(--font-size-small);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 10px 10px 10px 10px;
        font-family: var(--font-family-headers);
    
    }

    .sort {
        display: flex;
        justify-content: flex-left;
    }

    .sort > button {
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid var(--color-mode-light-accent);
        border-radius: 3px;
        background-color: var(--color-mode-lw);
        color: var(--color-mode-light-accent);
        cursor: pointer;
    }

    .sort > button:hover {
        background-color: var(--color-mode-light-accent);
        color: white;
    }

    img {
        width: 100%;
    }

    label {
        cursor: pointer;
    }

    .setlist {
        display: grid;
        align-items: baseline;
        vertical-align: auto;
    }
    
    .setlist > header {
        flex-basis: min-content;
    }
    
    .setlist > li {
        color: var(--color-mode-opp);
    }
    
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }

    `;ir([f({type:Array})],Oe.prototype,"songs",2);Oe=ir([v("set-list")],Oe);var Zo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,it=(r,e,t,i)=>{for(var o=i>1?void 0:i?Yo(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Zo(e,t,o),o};const Qo=b`
    header {
        /* background-color: var(--color-header-background); */
        overflow: visible;
        display: flex;
        flex-wrap: no-wrap;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        gap: 2rem;
    }

    .header_logo {
        width: 128px;
        aspect-ratio: 1;
        scale: 150%;
        fill: currentColor;
    }

    .hero {
        position: relative;
        -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp));
        /* color: var(--color-mode-opp); */
        font-family: var(--font-family-headers);
        margin-bottom: 75px;
    }

    .header-hero {
        position: relative;
        color: var(--color-mode-light-accent);
        font-family: var(--font-family-headers);
        margin-bottom: 5px;
        margin-top: 5px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .header-hero>a:visited {
        opacity: 0;
        color: var(--color-mode-light-accent);
        line-height: 0;
        /* -webkit-box-reflect: below -50px linear-gradient(transparent, var(--color-mode-opp)); */
        /* color: var(--color-mode-opp); */
        /* margin-bottom: px; */
    }

    .header-hero h3{
        font-family: var(--font-family-headers);
        color: var(--color-mode-light-accent);
        line-height: 0;
        margin-top: 5px;
    }


    .header a.active {
        background-color: var(--color-header-a-active);
        color: white;
    }



    .hero span {
        display: inline-block;
        color: var(--color-mode-light-accent);
        font-size: var(--font-size-regular);
        font-size: 5.5rem;
        font-family: vars(--font-family-headers);

    }

    body{
        background-color: var(--color-background-main);
        background-image: linear-gradient(var(--color-background-main), var(--color-background-secondary));
        background: var(--color-background-main);
        background: linear-gradient(var(--color-background-main), var(--color-background-secondary));
        font-family: var(--font-family-body);
        font-size: var(--font-size-body);
        vertical-align: baseline;
        text-align: center;
        font-weight: 500;
    }


    .page {
        display: flex;
        flex-basis: 100%;
        overflow: auto;
        margin: 0;
        padding: var(--size-spacing-medium);
    }


    h1, h2, h3, h4, h5, h6{
        /* background-color:#121212; */
        color: var(--color-header-text-color);
        line-height: 2;
        text-align: center;
        border: white;
        font-family: vars(--font-family-headers);
    }

    img {
        /* display: block; */
        /* height: 20vh; */
        width: 100%;
    }

    /*title fonts: Bebas Neue*/
    .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
    } 
    h1{
        align-items: left;
        line-height: 1;
        color: var(--color-header-text-color);
        font-size: var(--font-size-large);
        letter-spacing: 0.50rem;
        vertical-align: baseline;
    }
    h2{
        font-size: var(--font-size-regular);
        background-color: var(--color-h2-background);
    }
    h3{
        color: var(--color-h3-text);
        font-size: var(--font-size-small);
    }
    h4{
        font-size: 1.25rem;
        background-color:rgba(255 255 255 / 75%);
        color: black;
    }
    h5{
        font-size: var(--font-size-body);
    }
    h6{
        font-size: var(--font-size-body);
    }
    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
    }
    svg.header_icon {
        display: inline;
        height: 5.5rem;
        aspect-ratio: 1.25;
        vertical-align: center;
        fill: var(--color-header-text-color);

    }
    svg.account_icon {
        float: right;
        display: inline;
        height: 6rem;
        width: 6rem;
        scale: 0.60;
        fill: var(--color-header-text-color);

    }

    li{
        font-size: var(--font-size-body);
        color: var(--color-mode-opp);
    }

    nav {
        color: var(--color-nav-active-color);
        z-index: 1;
    }
    a:link{
        color: var(--color-mode-opp);
    }
    a:visited{
        color: var(--color-accent);
    }
    a:hover{
        color:var(--color-accent) ;
    }
    a:active{
        color: var(--color-light-tan);
    }


    /* body font: PT Sans */
    .red-hat display-body {
        font-family: "Red Hat Display", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }
    
    .user-dropdown > ul {
        padding-left: 20%;
        padding-right:20%;
        z-index: 1;
        /* display: none; */
        color: black;
        /* background-color: white; */
        text-align: center;
    }
    .user-dropdown a:link {
        /* display: none; */
        color: black;
        /* background-color: white; */
        text-align: center;
    }

    .setlist {
        display: grid;
        align-items: baseline;
        vertical-align: auto;
    }
    
    .setlist > header {
        flex-basis: min-content;
    }
    
    .setlist > li {
        color: var(--color-mode-opp);
    }
    
    .setlist-bg {
        background-color: var(--color-h3-background);
        color: var(--color-mode-main);
    }
    

`;let le=class extends F{constructor(){super()}get profile(){return this.getFromModel("profile")}get setList(){return this.getFromModel("setList")}connectedCallback(){super.connectedCallback(),this.dispatchMessage({type:"SetListRequested"})}render(){var r;return g`
        <article class="Set List">
        <nav aria-label="breadcrumb">
            <a href="index.html">Home</a> &gt;
            <a href="tours.html">ODESZA</a> &gt;
            <a href="tour.html">The Last Goodbye (2023)</a> &gt;
            Set List
        </nav>
        <header>
            <div class="header-hero">
                <a href="index.html">
                    <h3>SOUNDWAVE</h3>
                    <h3>COLLECTIVE</h3>
                </a>
            </div>  
            <drop-down>
                <svg class="account_icon">
                    <use href="/icons/symbols.svg#icon-profile" />
                </svg>
                <user-panel 
                    slot="menu" 
                    class="user-dropdown">
                    <span slot="name">${(r=this.profile)==null?void 0:r.name}</span>
                </user-panel>
            </drop-down>
        </header>
        <!-- <h1>SetList</h1> -->
        <h2>ODESZA @ Santa Barbara Bowl</h2>
        <div class="setlist-bg">
            <h3 class="setlist-bg">September 30th, 2023</h3>
        </div>
        <img src="/images/tour_odesza_tlg.jpeg" />
        <section class="setlist">
            <set-list .songs=${this.setList}></set-list>
        </section>
    </article>`}};le.styles=Qo;it([f()],le.prototype,"profile",1);it([f()],le.prototype,"setList",1);le=it([v("setlist-page")],le);const Xo=[{path:"/",component:"index-page"},{path:"/tours/:artistname",component:"tours-page"},{path:"/profile/",component:"profile-page"},{path:"/tour/",component:"tour-page"},{path:"/setlist/",component:"setlist-page"},{path:"(.*)",redirect:"/"}];function Se(r){return r=r||[],Array.isArray(r)?r:[r]}function x(r){return`[Vaadin.Router] ${r}`}function ei(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ze="module",Ce="nomodule",We=[ze,Ce];function $t(r){if(!r.match(/.+\.[m]?js$/))throw new Error(x(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function nr(r){if(!r||!w(r.path))throw new Error(x('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!L(r.action)&&!Array.isArray(r.children)&&!L(r.children)&&!Re(e)&&!t.some(i=>w(r[i])))throw new Error(x(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))$t(e);else if(We.some(i=>i in e))We.forEach(i=>i in e&&$t(e[i]));else throw new Error(x('Expected route bundle to include either "'+Ce+'" or "'+ze+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(x(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function At(r){Se(r).forEach(e=>nr(e))}function Et(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ze?t.setAttribute("type",ze):e===Ce&&t.setAttribute(Ce,""),t.async=!0),new Promise((i,o)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,i(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),o(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function ti(r){return w(r)?Et(r):Promise.race(We.filter(e=>e in r).map(e=>Et(r[e],e)))}function Z(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Re(r){return typeof r=="object"&&!!r}function L(r){return typeof r=="function"}function w(r){return typeof r=="string"}function ar(r){const e=new Error(x(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const T=new class{};function ri(r){const e=r.port,t=r.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${n}`}function Pt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const s=t[l];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ri(e))!==window.location.origin)return;const{pathname:o,search:n,hash:a}=e;Z("go",{pathname:o,search:n,hash:a})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const oi={activate(){window.document.addEventListener("click",Pt)},inactivate(){window.document.removeEventListener("click",Pt)}},ii=/Trident/.test(navigator.userAgent);ii&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function kt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;Z("go",{pathname:e,search:t,hash:i})}const ni={activate(){window.addEventListener("popstate",kt)},inactivate(){window.removeEventListener("popstate",kt)}};var W=ur,ai=nt,si=hi,li=cr,ci=hr,sr="/",lr="./",di=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function nt(r,e){for(var t=[],i=0,o=0,n="",a=e&&e.delimiter||sr,l=e&&e.delimiters||lr,s=!1,c;(c=di.exec(r))!==null;){var d=c[0],h=c[1],u=c.index;if(n+=r.slice(o,u),o=u+d.length,h){n+=h[1],s=!0;continue}var p="",S=r[o],yr=c[2],_r=c[3],wr=c[4],fe=c[5];if(!s&&n.length){var Ie=n.length-1;l.indexOf(n[Ie])>-1&&(p=n[Ie],n=n.slice(0,Ie))}n&&(t.push(n),n="",s=!1);var xr=p!==""&&S!==void 0&&S!==p,$r=fe==="+"||fe==="*",Ar=fe==="?"||fe==="*",lt=p||a,ct=_r||wr;t.push({name:yr||i++,prefix:p,delimiter:lt,optional:Ar,repeat:$r,partial:xr,pattern:ct?ui(ct):"[^"+A(lt)+"]+?"})}return(n||o<r.length)&&t.push(n+r.substr(o)),t}function hi(r,e){return cr(nt(r,e))}function cr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,o){for(var n="",a=o&&o.encode||encodeURIComponent,l=0;l<r.length;l++){var s=r[l];if(typeof s=="string"){n+=s;continue}var c=i?i[s.name]:void 0,d;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(c.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(d=a(c[h],s),!e[l].test(d))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');n+=(h===0?s.prefix:s.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=a(String(c),s),!e[l].test(d))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+d+'"');n+=s.prefix+d;continue}if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return n}}function A(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ui(r){return r.replace(/([=!:$/()])/g,"\\$1")}function dr(r){return r&&r.sensitive?"":"i"}function pi(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function fi(r,e,t){for(var i=[],o=0;o<r.length;o++)i.push(ur(r[o],e,t).source);return new RegExp("(?:"+i.join("|")+")",dr(t))}function gi(r,e,t){return hr(nt(r,t),e,t)}function hr(r,e,t){t=t||{};for(var i=t.strict,o=t.start!==!1,n=t.end!==!1,a=A(t.delimiter||sr),l=t.delimiters||lr,s=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),c=o?"^":"",d=r.length===0,h=0;h<r.length;h++){var u=r[h];if(typeof u=="string")c+=A(u),d=h===r.length-1&&l.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?c+=A(u.prefix)+"("+p+")?":c+="(?:"+A(u.prefix)+"("+p+"))?":c+=A(u.prefix)+"("+p+")"}}return n?(i||(c+="(?:"+a+")?"),c+=s==="$"?"$":"(?="+s+")"):(i||(c+="(?:"+a+"(?="+s+"))?"),d||(c+="(?="+a+"|"+s+")")),new RegExp(c,dr(t))}function ur(r,e,t){return r instanceof RegExp?pi(r,e):Array.isArray(r)?fi(r,e,t):gi(r,e,t)}W.parse=ai;W.compile=si;W.tokensToFunction=li;W.tokensToRegExp=ci;const{hasOwnProperty:mi}=Object.prototype,Ge=new Map;Ge.set("|false",{keys:[],pattern:/(?:)/});function Ot(r){try{return decodeURIComponent(r)}catch{return r}}function vi(r,e,t,i,o){t=!!t;const n=`${r}|${t}`;let a=Ge.get(n);if(!a){const c=[];a={keys:c,pattern:W(r,c,{end:t,strict:r===""})},Ge.set(n,a)}const l=a.pattern.exec(e);if(!l)return null;const s=Object.assign({},o);for(let c=1;c<l.length;c++){const d=a.keys[c-1],h=d.name,u=l[c];(u!==void 0||!mi.call(s,h))&&(d.repeat?s[h]=u?u.split(d.delimiter).map(Ot):[]:s[h]=u&&Ot(u))}return{path:l[0],keys:(i||[]).concat(a.keys),params:s}}function pr(r,e,t,i,o){let n,a,l=0,s=r.path||"";return s.charAt(0)==="/"&&(t&&(s=s.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const d=r.__children=r.__children||r.children;if(!n&&(n=vi(s,e,!d,i,o),n))return{done:!1,value:{route:r,keys:n.keys,params:n.params,path:n.path}};if(n&&d)for(;l<d.length;){if(!a){const u=d[l];u.parent=r;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),a=pr(u,e.substr(p),t,n.keys,n.params)}const h=a.next(c);if(!h.done)return{done:!1,value:h.value};a=null,l++}return{done:!0}}}}function bi(r){if(L(r.route.action))return r.route.action(r)}function yi(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function _i(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function wi(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const o={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let n=r.chain.length;for(;n--&&r.chain[n].route&&r.chain[n].route!==t.parent;)r.chain.pop()}r.chain.push(o)}}class ce{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||bi,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){At(e);const t=[...Se(e)];this.root.__children=t}addRoutes(e){return At(e),this.root.__children.push(...Se(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),i=pr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),o=this.resolveRoute;let n=null,a=null,l=t;function s(c,d=n.value.route,h){const u=h===null&&n.value.route;return n=a||i.next(u),a=null,!c&&(n.done||!yi(d,n.value.route))?(a=n,Promise.resolve(T)):n.done?Promise.reject(ar(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,n.value),wi(l,n.value),Promise.resolve(o(l)).then(p=>p!=null&&p!==T?(l.result=p.result||p,l):s(c,d,p)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(c=>{const d=_i(l);if(c?console.warn(d):c=new Error(d),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}ce.pathToRegexp=W;const{pathToRegexp:St}=ce,zt=new Map;function fr(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let o=0;o<t.length;o++){const n=t[o];n.parent=e,fr(r,n,n.__children||n.children)}}function Ct(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Rt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function xi(r,e={}){if(!(r instanceof ce))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,o)=>{let n=Ct(t,i);if(!n&&(t.clear(),fr(t,r.root,r.root.__children),n=Ct(t,i),!n))throw new Error(`Route "${i}" not found`);let a=zt.get(n.fullPath);if(!a){let s=Rt(n),c=n.parent;for(;c;){const p=Rt(c);p&&(s=p.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),c=c.parent}const d=St.parse(s),h=St.tokensToFunction(d),u=Object.create(null);for(let p=0;p<d.length;p++)w(d[p])||(u[d[p].name]=!0);a={toPath:h,keys:u},zt.set(s,a),n.fullPath=s}let l=a.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const s={},c=Object.keys(o);for(let h=0;h<c.length;h++){const u=c[h];a.keys[u]||(s[u]=o[u])}const d=e.stringifyQueryParams(s);d&&(l+=d.charAt(0)==="?"?d:`?${d}`)}return l}}let Lt=[];function $i(r){Lt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Lt=r}const Ai=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Ei=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Dt(r,e){return r.classList.add(e),new Promise(t=>{if(Ai(r)){const i=r.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${o}`),Ei(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Pi=256;function Fe(r){return r!=null}function ki(r){const e=Object.assign({},r);return delete e.next,e}function _({pathname:r="",search:e="",hash:t="",chain:i=[],params:o={},redirectFrom:n,resolver:a},l){const s=i.map(c=>c.route);return{baseUrl:a&&a.baseUrl||"",pathname:r,search:e,hash:t,routes:s,route:l||s.length&&s[s.length-1]||null,params:o,redirectFrom:n,getUrl:(c={})=>be(k.pathToRegexp.compile(gr(s))(Object.assign({},o,c)),a)}}function jt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Oi(r,e){e.location=_(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function ve(r,e,t){if(L(r))return r.apply(t,e)}function Tt(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return ve(t[r],e,t)}}function Si(r,e){if(!Array.isArray(r)&&!Re(r))throw new Error(x(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Se(r);for(let i=0;i<t.length;i++)nr(t[i]),e.__children.push(t[i])}function ge(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function be(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function gr(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class k extends ce{constructor(e,t){const i=document.head.querySelector("base"),o=i&&i.getAttribute("href");super([],Object.assign({baseUrl:o&&ce.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const n=k.NavigationTrigger;k.setTriggers.apply(k,Object.keys(n).map(a=>n[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=_({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();L(t.children)&&(i=i.then(()=>t.children(ki(e))).then(n=>{!Fe(n)&&!L(t.children)&&(n=t.children),Si(n,t)}));const o={redirect:n=>jt(e,n),component:n=>{const a=document.createElement(n);return this.__createdByRouter.set(a,!0),a}};return i.then(()=>{if(this.__isLatestRender(e))return ve(t.action,[e,o],t)}).then(n=>{if(Fe(n)&&(n instanceof HTMLElement||n.redirect||n===T))return n;if(w(t.redirect))return o.redirect(t.redirect);if(t.bundle)return ti(t.bundle).then(()=>{},()=>{throw new Error(x(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Fe(n))return n;if(w(t.component))return o.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(o).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const a=this.__previousContext;if(n===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=_(n),t&&this.__updateBrowserHistory(n,i===1),Z("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,a),this.__previousContext=n,this.location;this.__addAppearingContent(n,a);const l=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,a),l.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(o),ge(this.__outlet&&this.__outlet.children),this.location=_(Object.assign(o,{resolver:this})),Z("error",Object.assign({router:this,error:n},o)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,l=be(gr(i.chain),i.resolver)===i.pathname,s=(c,d=c.route,h)=>c.next(void 0,d,h).then(u=>u===null||u===T?l?c:d.parent!==null?s(c,d.parent,u):u:u);return s(i).then(c=>{if(c===null||c===T)throw ar(n);return c&&c!==T&&c!==i?this.__fullyResolveChain(n,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Oi(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(x(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ei(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],o=e.chain;let n=Promise.resolve();const a=()=>({cancel:!0}),l=s=>jt(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let s=0;s<Math.min(i.length,o.length)&&!(i[s].route!==o[s].route||i[s].path!==o[s].path&&i[s].element!==o[s].element||!this.__isReusableElement(i[s].element,o[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=o.length===i.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=o.length-1;s>=0;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},i[s]);for(let s=0;s<o.length;s++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:l},o[s]),i[s].element.location=_(e,i[s].route)}else for(let s=i.length-1;s>=e.__divergedChainIndex;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},i[s])}if(!e.__skipAttach)for(let s=0;s<o.length;s++)s<e.__divergedChainIndex?s<i.length&&i[s].element&&(i[s].element.location=_(e,i[s].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:l},o[s]),o[s].element&&(o[s].element.location=_(e,o[s].route)));return n.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,o){const n=_(t);return e.then(a=>{if(this.__isLatestRender(t))return Tt("onBeforeLeave",[n,i,this],o.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,i,o){const n=_(t,o.route);return e.then(a=>{if(this.__isLatestRender(t))return Tt("onBeforeEnter",[n,i,this],o.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Pi)throw new Error(x(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(x(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},o){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=o?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const n=t&&t.chain[o].element;if(n)if(n.parentNode===i)e.chain[o].element=n,i=n;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let o=i;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const a=e.chain[n].element;a&&(o.appendChild(a),this.__addedByRouter.set(a,!0),o===i&&this.__appearingContent.push(a),o=a)}}__removeDisappearingContent(){this.__disappearingContent&&ge(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ge(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const o=t.chain[i].element;if(o)try{const n=_(e);ve(o.onAfterLeave,[n,{},t.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&ge(o.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},o=_(e,e.chain[t].route);ve(i.onAfterEnter,[o,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],o=[],n=e.chain;let a;for(let l=n.length;l>0;l--)if(n[l-1].route.animate){a=n[l-1].route.animate;break}if(t&&i&&a){const l=Re(a)&&a.leave||"leaving",s=Re(a)&&a.enter||"entering";o.push(Dt(t,l)),o.push(Dt(i,s))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:o}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:o},!0))}static setTriggers(...e){$i(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=xi(this)),be(this.__urlForName(e,t),this)}urlForPath(e,t){return be(k.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:o}=w(e)?this.__createUrl(e,"http://a"):e;return Z("go",{pathname:t,search:i,hash:o})}}const zi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ye=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ci(){function r(){return!0}return mr(r)}function Ri(){try{return Li()?!0:Di()?ye?!ji():!Ci():!1}catch{return!1}}function Li(){return localStorage.getItem("vaadin.developmentmode.force")}function Di(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ji(){return!!(ye&&Object.keys(ye).map(e=>ye[e]).filter(e=>e.productionMode).length>0)}function mr(r,e){if(typeof r!="function")return;const t=zi.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const Ut=function(r,e){if(window.Vaadin.developmentMode)return mr(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ri());function Ti(){}const Ui=function(){if(typeof Ut=="function")return Ut(Ti)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ui();k.NavigationTrigger={POPSTATE:ni,CLICK:oi};var Ii=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var o=i>1?void 0:i?Mi(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Ii(e,t,o),o};let Ke=class extends m{constructor(){super(...arguments),this.router=new k(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};vr([f({attribute:!1})],Ke.prototype,"routes",2);Ke=vr([v("vaadin-router")],Ke);var Ni=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Ue=(r,e,t,i)=>{for(var o=i>1?void 0:i?Hi(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Ni(e,t,o),o};let br="auth",B=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=te.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const r=g`
      <dialog ?open=${!this.isAuthenticated}>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}>
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>
            ${this.loginStatus?`Login failed: ${this.loginStatus}`:""}
          </p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${this.registerStatus=0}>
          <h2>New User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return g`
      ${r}
      <slot></slot>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new xt(t).base().post("/login").then(o=>{if(o.status===200)return o.json();this.loginStatus=o.status}).then(o=>{if(o){console.log("Authentication:",o.token);const n=te.authenticate(o.token,()=>this._signOut());this.user=n,this._toggleDialog(!1),this._dispatchUserLoggedIn(n),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new xt(t).base().post("/signup").then(o=>{if(o.status===200)return o.json();this.registerStatus=o.status}).then(o=>{console.log("Registration:",o)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};B.styles=b`
    :host {
      display: contents;
    }
    dialog[open] {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;Ue([ue()],B.prototype,"loginStatus",2);Ue([ue()],B.prototype,"registerStatus",2);Ue([Jt({context:br}),ue()],B.prototype,"user",2);B=Ue([v("auth-required")],B);var Bi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,at=(r,e,t,i)=>{for(var o=i>1?void 0:i?Fi(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Bi(e,t,o),o};let de=class extends m{constructor(){super(...arguments),this.user=new $}render(){const{name:r,nickname:e,userid:t}=this.profile||{},i=e||r&&r.split(" ")[0]||this.user.username,n=this.user.authenticated?g`
          <span>Hello,</span>
          <drop-down align="right">
            ${i}
            <user-panel
              slot="menu"
              userid=${t}>
              <span slot="name">${r}</span>
              <button slot="logout" @click=${this._signOut}>
                Log out...
              </button>
            </user-panel>
          </drop-down>
        `:"Not logged in";return g`
      <header>
        <h1>Soundwave Collective</h1>
        <p>${n}</p>
      </header>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profile/${e}`)}return!0}_getData(r){new mo().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};de.styles=[b`
      header {
        grid-area: header;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        padding: var(--size-spacing-medium);
        gap: 0 var(--size-spacing-xlarge);
        background-color: var(--color-background-header);
        color: var(--color-text-inverted);
      }
      header * + :last-child {
        flex-grow: 1;
        text-align: right;
      }
      header h1 {
        white-space: nowrap;
      }
      header a[href] {
        color: var(--color-link-inverted);
      }
      h1 {
        font-size: var(--size-type-xxlarge);
        font-style: oblique;
        font-weight: var(--font-weight-bold);
        font-family: var(--font-family-display);
        line-height: var(--font-line-height-display);
      }
      [slot="logout"] a {
        color: var(--color-accent);
        cursor: pointer;
        font-weight: var(--font-weight-bold);
      }
    `];at([ue()],de.prototype,"profile",2);at([Zt({context:br,subscribe:!0}),f({attribute:!1})],de.prototype,"user",2);de=at([v("sw-header")],de);var Vi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Wi=(r,e,t,i)=>{for(var o=i>1?void 0:i?qi(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(e,t,o):a(o))||o);return i&&o&&Vi(e,t,o),o};let It=class extends Xt{constructor(){super(yo)}render(){return g`
      <sw-header></sw-header>
      <vaadin-router .routes=${Xo}></vaadin-router>
    
    `}};It=Wi([v("soundwave-collective-app")],It);
