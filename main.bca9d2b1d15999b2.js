"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{243:(Ke,le,S)=>{var v=S(808),P=S(587);
/**
       * @license Angular v13.1.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ee extends v.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class te extends ee{static makeCurrent(){(0,v.HT)(new te)}onAndCancel(A,b,N){return A.addEventListener(b,N,!1),()=>{A.removeEventListener(b,N,!1)}}dispatchEvent(A,b){A.dispatchEvent(b)}remove(A){A.parentNode&&A.parentNode.removeChild(A)}createElement(A,b){return(b=b||this.getDefaultDocument()).createElement(A)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(A){return A.nodeType===Node.ELEMENT_NODE}isShadowRoot(A){return A instanceof DocumentFragment}getGlobalEventTarget(A,b){return"window"===b?window:"document"===b?A:"body"===b?A.body:null}getBaseHref(A){const b=(se=se||document.querySelector("base"),se?se.getAttribute("href"):null);return null==b?null:function(T){oe=oe||document.createElement("a"),oe.setAttribute("href",T);const A=oe.pathname;return"/"===A.charAt(0)?A:`/${A}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b)}resetBaseElement(){se=null}getUserAgent(){return window.navigator.userAgent}getCookie(A){return(0,v.Mx)(document.cookie,A)}}let oe,se=null;const de=new P.OlP("TRANSITION_ID"),B=[{provide:P.ip1,useFactory:function(T,A,b){return()=>{b.get(P.CZH).donePromise.then(()=>{const N=(0,v.q)(),Y=A.querySelectorAll(`style[ng-transition="${T}"]`);for(let Te=0;Te<Y.length;Te++)N.remove(Y[Te])})}},deps:[de,v.K0,P.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ce{static init(){(0,P.VLi)(new Ce)}addToWindow(A){P.dqk.getAngularTestability=(N,Y=!0)=>{const Te=A.findTestabilityInTree(N,Y);if(null==Te)throw new Error("Could not find testability for element.");return Te},P.dqk.getAllAngularTestabilities=()=>A.getAllTestabilities(),P.dqk.getAllAngularRootElements=()=>A.getAllRootElements(),P.dqk.frameworkStabilizers||(P.dqk.frameworkStabilizers=[]),P.dqk.frameworkStabilizers.push(N=>{const Y=P.dqk.getAllAngularTestabilities();let Te=Y.length,je=!1;const Gt=function(ct){je=je||ct,Te--,0==Te&&N(je)};Y.forEach(function(ct){ct.whenStable(Gt)})})}findTestabilityInTree(A,b,N){if(null==b)return null;const Y=A.getTestability(b);return null!=Y?Y:N?(0,v.q)().isShadowRoot(b)?this.findTestabilityInTree(A,b.host,!0):this.findTestabilityInTree(A,b.parentElement,!0):null}}let ne=(()=>{class T{build(){return new XMLHttpRequest}}return T.\u0275fac=function(b){return new(b||T)},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ge=new P.OlP("EventManagerPlugins");let Ge=(()=>{class T{constructor(b,N){this._zone=N,this._eventNameToPlugin=new Map,b.forEach(Y=>Y.manager=this),this._plugins=b.slice().reverse()}addEventListener(b,N,Y){return this._findPluginFor(N).addEventListener(b,N,Y)}addGlobalEventListener(b,N,Y){return this._findPluginFor(N).addGlobalEventListener(b,N,Y)}getZone(){return this._zone}_findPluginFor(b){const N=this._eventNameToPlugin.get(b);if(N)return N;const Y=this._plugins;for(let Te=0;Te<Y.length;Te++){const je=Y[Te];if(je.supports(b))return this._eventNameToPlugin.set(b,je),je}throw new Error(`No event manager plugin found for event ${b}`)}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(ge),P.LFG(P.R0b))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();class Ie{constructor(A){this._doc=A}addGlobalEventListener(A,b,N){const Y=(0,v.q)().getGlobalEventTarget(this._doc,A);if(!Y)throw new Error(`Unsupported event target ${Y} for event ${b}`);return this.addEventListener(Y,b,N)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class T{constructor(){this._stylesSet=new Set}addStyles(b){const N=new Set;b.forEach(Y=>{this._stylesSet.has(Y)||(this._stylesSet.add(Y),N.add(Y))}),this.onStylesAdded(N)}onStylesAdded(b){}getAllStyles(){return Array.from(this._stylesSet)}}return T.\u0275fac=function(b){return new(b||T)},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})(),Le=(()=>{class T extends Z{constructor(b){super(),this._doc=b,this._hostNodes=new Map,this._hostNodes.set(b.head,[])}_addStylesToHost(b,N,Y){b.forEach(Te=>{const je=this._doc.createElement("style");je.textContent=Te,Y.push(N.appendChild(je))})}addHost(b){const N=[];this._addStylesToHost(this._stylesSet,b,N),this._hostNodes.set(b,N)}removeHost(b){const N=this._hostNodes.get(b);N&&N.forEach(ye),this._hostNodes.delete(b)}onStylesAdded(b){this._hostNodes.forEach((N,Y)=>{this._addStylesToHost(b,Y,N)})}ngOnDestroy(){this._hostNodes.forEach(b=>b.forEach(ye))}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(v.K0))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();function ye(T){(0,v.q)().remove(T)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ee={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ve=/%COMP%/g;function U(T,A,b){for(let N=0;N<A.length;N++){let Y=A[N];Array.isArray(Y)?U(T,Y,b):(Y=Y.replace(ve,T),b.push(Y))}return b}function H(T){return A=>{if("__ngUnwrap__"===A)return T;!1===T(A)&&(A.preventDefault(),A.returnValue=!1)}}let ie=(()=>{class T{constructor(b,N,Y){this.eventManager=b,this.sharedStylesHost=N,this.appId=Y,this.rendererByCompId=new Map,this.defaultRenderer=new V(b)}createRenderer(b,N){if(!b||!N)return this.defaultRenderer;switch(N.encapsulation){case P.ifc.Emulated:{let Y=this.rendererByCompId.get(N.id);return Y||(Y=new Ae(this.eventManager,this.sharedStylesHost,N,this.appId),this.rendererByCompId.set(N.id,Y)),Y.applyToHost(b),Y}case 1:case P.ifc.ShadowDom:return new Ue(this.eventManager,this.sharedStylesHost,b,N);default:if(!this.rendererByCompId.has(N.id)){const Y=U(N.id,N.styles,[]);this.sharedStylesHost.addStyles(Y),this.rendererByCompId.set(N.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(Ge),P.LFG(Le),P.LFG(P.AFp))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();class V{constructor(A){this.eventManager=A,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(A,b){return b?document.createElementNS(Ee[b]||b,A):document.createElement(A)}createComment(A){return document.createComment(A)}createText(A){return document.createTextNode(A)}appendChild(A,b){A.appendChild(b)}insertBefore(A,b,N){A&&A.insertBefore(b,N)}removeChild(A,b){A&&A.removeChild(b)}selectRootElement(A,b){let N="string"==typeof A?document.querySelector(A):A;if(!N)throw new Error(`The selector "${A}" did not match any elements`);return b||(N.textContent=""),N}parentNode(A){return A.parentNode}nextSibling(A){return A.nextSibling}setAttribute(A,b,N,Y){if(Y){b=Y+":"+b;const Te=Ee[Y];Te?A.setAttributeNS(Te,b,N):A.setAttribute(b,N)}else A.setAttribute(b,N)}removeAttribute(A,b,N){if(N){const Y=Ee[N];Y?A.removeAttributeNS(Y,b):A.removeAttribute(`${N}:${b}`)}else A.removeAttribute(b)}addClass(A,b){A.classList.add(b)}removeClass(A,b){A.classList.remove(b)}setStyle(A,b,N,Y){Y&(P.JOm.DashCase|P.JOm.Important)?A.style.setProperty(b,N,Y&P.JOm.Important?"important":""):A.style[b]=N}removeStyle(A,b,N){N&P.JOm.DashCase?A.style.removeProperty(b):A.style[b]=""}setProperty(A,b,N){A[b]=N}setValue(A,b){A.nodeValue=b}listen(A,b,N){return"string"==typeof A?this.eventManager.addGlobalEventListener(A,b,H(N)):this.eventManager.addEventListener(A,b,H(N))}}class Ae extends V{constructor(A,b,N,Y){super(A),this.component=N;const Te=U(Y+"-"+N.id,N.styles,[]);b.addStyles(Te),this.contentAttr="_ngcontent-%COMP%".replace(ve,Y+"-"+N.id),this.hostAttr="_nghost-%COMP%".replace(ve,Y+"-"+N.id)}applyToHost(A){super.setAttribute(A,this.hostAttr,"")}createElement(A,b){const N=super.createElement(A,b);return super.setAttribute(N,this.contentAttr,""),N}}class Ue extends V{constructor(A,b,N,Y){super(A),this.sharedStylesHost=b,this.hostEl=N,this.shadowRoot=N.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Te=U(Y.id,Y.styles,[]);for(let je=0;je<Te.length;je++){const Gt=document.createElement("style");Gt.textContent=Te[je],this.shadowRoot.appendChild(Gt)}}nodeOrShadowRoot(A){return A===this.hostEl?this.shadowRoot:A}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(A,b){return super.appendChild(this.nodeOrShadowRoot(A),b)}insertBefore(A,b,N){return super.insertBefore(this.nodeOrShadowRoot(A),b,N)}removeChild(A,b){return super.removeChild(this.nodeOrShadowRoot(A),b)}parentNode(A){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(A)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let mt=(()=>{class T extends Ie{constructor(b){super(b)}supports(b){return!0}addEventListener(b,N,Y){return b.addEventListener(N,Y,!1),()=>this.removeEventListener(b,N,Y)}removeEventListener(b,N,Y){return b.removeEventListener(N,Y)}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(v.K0))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rn=["alt","control","meta","shift"],cn={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Pt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},ht={alt:T=>T.altKey,control:T=>T.ctrlKey,meta:T=>T.metaKey,shift:T=>T.shiftKey};let Xe=(()=>{class T extends Ie{constructor(b){super(b)}supports(b){return null!=T.parseEventName(b)}addEventListener(b,N,Y){const Te=T.parseEventName(N),je=T.eventCallback(Te.fullKey,Y,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,v.q)().onAndCancel(b,Te.domEventName,je))}static parseEventName(b){const N=b.toLowerCase().split("."),Y=N.shift();if(0===N.length||"keydown"!==Y&&"keyup"!==Y)return null;const Te=T._normalizeKey(N.pop());let je="";if(rn.forEach(ct=>{const ce=N.indexOf(ct);ce>-1&&(N.splice(ce,1),je+=ct+".")}),je+=Te,0!=N.length||0===Te.length)return null;const Gt={};return Gt.domEventName=Y,Gt.fullKey=je,Gt}static getEventFullKey(b){let N="",Y=function(T){let A=T.key;if(null==A){if(A=T.keyIdentifier,null==A)return"Unidentified";A.startsWith("U+")&&(A=String.fromCharCode(parseInt(A.substring(2),16)),3===T.location&&Pt.hasOwnProperty(A)&&(A=Pt[A]))}return cn[A]||A}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b);return Y=Y.toLowerCase()," "===Y?Y="space":"."===Y&&(Y="dot"),rn.forEach(Te=>{Te!=Y&&ht[Te](b)&&(N+=Te+".")}),N+=Y,N}static eventCallback(b,N,Y){return Te=>{T.getEventFullKey(Te)===b&&Y.runGuarded(()=>N(Te))}}static _normalizeKey(b){return"esc"===b?"escape":b}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(v.K0))},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})();const qt=(0,P.eFA)(P._c5,"browser",[{provide:P.Lbi,useValue:v.bD},{provide:P.g9A,useValue:function(){te.makeCurrent(),Ce.init()},multi:!0},{provide:v.K0,useFactory:function(){return(0,P.RDi)(document),document},deps:[]}]),Cn=[{provide:P.zSh,useValue:"root"},{provide:P.qLn,useFactory:function(){return new P.qLn},deps:[]},{provide:ge,useClass:mt,multi:!0,deps:[v.K0,P.R0b,P.Lbi]},{provide:ge,useClass:Xe,multi:!0,deps:[v.K0]},{provide:ie,useClass:ie,deps:[Ge,Le,P.AFp]},{provide:P.FYo,useExisting:ie},{provide:Z,useExisting:Le},{provide:Le,useClass:Le,deps:[v.K0]},{provide:P.dDg,useClass:P.dDg,deps:[P.R0b]},{provide:Ge,useClass:Ge,deps:[ge,P.R0b]},{provide:v.JF,useClass:ne,deps:[]}];let St=(()=>{class T{constructor(b){if(b)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(b){return{ngModule:T,providers:[{provide:P.AFp,useValue:b.appId},{provide:de,useExisting:P.AFp},B]}}}return T.\u0275fac=function(b){return new(b||T)(P.LFG(T,12))},T.\u0275mod=P.oAB({type:T}),T.\u0275inj=P.cJS({providers:Cn,imports:[v.ez,P.hGG]}),T})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */"undefined"!=typeof window&&window;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Jt=S(520),wr=S(783),Pr=S(506);let or=(()=>{class T{constructor(){this.title="portfolio"}}return T.\u0275fac=function(b){return new(b||T)},T.\u0275cmp=P.Xpm({type:T,selectors:[["app-root"]],decls:1,vars:0,template:function(b,N){1&b&&P._UZ(0,"router-outlet")},directives:[wr.lC],styles:[""]}),T})();var ir=S(306),br=S(576);const At=[{path:"",loadChildren:()=>S.e(466).then(S.bind(S,466)).then(T=>T.LandingModule)}],zt=[{provide:Jt.TP,useClass:(()=>{class T{constructor(){}intercept(b,N){return b.url.startsWith("/")?function(T,A){const b=(0,br.m)(T)?T:()=>T,N=Y=>Y.error(b());return new ir.y(N)}(()=>new Error('Url must not start with "/" to follow our convention')):(b.url.startsWith("http")||(b=b.clone({url:"https://anderson.free.mockoapp.net/"+b.url})),N.handle(b))}}return T.\u0275fac=function(b){return new(b||T)},T.\u0275prov=P.Yz7({token:T,factory:T.\u0275fac}),T})(),multi:!0}];let Ut=(()=>{class T{}return T.\u0275fac=function(b){return new(b||T)},T.\u0275mod=P.oAB({type:T,bootstrap:[or]}),T.\u0275inj=P.cJS({providers:zt,imports:[[St,wr.Bz.forRoot(At,{useHash:!0}),Jt.JF,Pr.x]]}),T})();(0,P.G48)(),qt().bootstrapModule(Ut).catch(T=>console.error(T))},506:(Ke,le,S)=>{S.d(le,{x:()=>Ne,w:()=>se});var v=S(808),P=S(587);const ee=function(oe,Me,de){return{width:oe,height:Me,borderRadius:de}},te=function(oe){return{rtl:oe}};let se=(()=>{class oe{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return oe.\u0275fac=function(de){return new(de||oe)},oe.\u0275cmp=P.Xpm({type:oe,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(de,Q){2&de&&P.Tol(Q.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(de,Q){1&de&&P._UZ(0,"div",0),2&de&&P.Q6J("ngStyle",P.kEZ(2,ee,Q.width,Q.shimmerHeight,Q.shimmerBorderRadius))("ngClass",P.VKq(6,te,"rtl"===Q.direction))},directives:[v.PC,v.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),oe})(),Ne=(()=>{class oe{}return oe.\u0275fac=function(de){return new(de||oe)},oe.\u0275mod=P.oAB({type:oe}),oe.\u0275inj=P.cJS({imports:[[v.ez]]}),oe})()},306:(Ke,le,S)=>{S.d(le,{y:()=>Q});var v=S(961),P=S(727),ee=S(822),te=S(671);var oe=S(416),Me=S(576),de=S(806);let Q=(()=>{class ge{constructor(Ie){Ie&&(this._subscribe=Ie)}lift(Ie){const Z=new ge;return Z.source=this,Z.operator=Ie,Z}subscribe(Ie,Z,Le){const ye=function(ge){return ge&&ge instanceof v.Lv||function(ge){return ge&&(0,Me.m)(ge.next)&&(0,Me.m)(ge.error)&&(0,Me.m)(ge.complete)}(ge)&&(0,P.Nn)(ge)}(Ie)?Ie:new v.Hp(Ie,Z,Le);return(0,de.x)(()=>{const{operator:Ee,source:ve}=this;ye.add(Ee?Ee.call(ye,ve):ve?this._subscribe(ye):this._trySubscribe(ye))}),ye}_trySubscribe(Ie){try{return this._subscribe(Ie)}catch(Z){Ie.error(Z)}}forEach(Ie,Z){return new(Z=B(Z))((Le,ye)=>{let Ee;Ee=this.subscribe(ve=>{try{Ie(ve)}catch(Re){ye(Re),null==Ee||Ee.unsubscribe()}},ye,Le)})}_subscribe(Ie){var Z;return null===(Z=this.source)||void 0===Z?void 0:Z.subscribe(Ie)}[ee.L](){return this}pipe(...Ie){return function(ge){return 0===ge.length?te.y:1===ge.length?ge[0]:function(Ie){return ge.reduce((Z,Le)=>Le(Z),Ie)}}(Ie)(this)}toPromise(Ie){return new(Ie=B(Ie))((Z,Le)=>{let ye;this.subscribe(Ee=>ye=Ee,Ee=>Le(Ee),()=>Z(ye))})}}return ge.create=Ge=>new ge(Ge),ge})();function B(ge){var Ge;return null!==(Ge=null!=ge?ge:oe.v.Promise)&&void 0!==Ge?Ge:Promise}},579:(Ke,le,S)=>{S.d(le,{x:()=>oe});var v=S(306),P=S(727);const te=(0,S(888).d)(de=>function(){de(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var se=S(737),Ne=S(806);let oe=(()=>{class de extends v.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(B){const Ce=new Me(this,this);return Ce.operator=B,Ce}_throwIfClosed(){if(this.closed)throw new te}next(B){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const Ce=this.observers.slice();for(const ne of Ce)ne.next(B)}})}error(B){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=B;const{observers:Ce}=this;for(;Ce.length;)Ce.shift().error(B)}})}complete(){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:B}=this;for(;B.length;)B.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var B;return(null===(B=this.observers)||void 0===B?void 0:B.length)>0}_trySubscribe(B){return this._throwIfClosed(),super._trySubscribe(B)}_subscribe(B){return this._throwIfClosed(),this._checkFinalizedStatuses(B),this._innerSubscribe(B)}_innerSubscribe(B){const{hasError:Ce,isStopped:ne,observers:ge}=this;return Ce||ne?P.Lc:(ge.push(B),new P.w0(()=>(0,se.P)(ge,B)))}_checkFinalizedStatuses(B){const{hasError:Ce,thrownError:ne,isStopped:ge}=this;Ce?B.error(ne):ge&&B.complete()}asObservable(){const B=new v.y;return B.source=this,B}}return de.create=(Q,B)=>new Me(Q,B),de})();class Me extends oe{constructor(Q,B){super(),this.destination=Q,this.source=B}next(Q){var B,Ce;null===(Ce=null===(B=this.destination)||void 0===B?void 0:B.next)||void 0===Ce||Ce.call(B,Q)}error(Q){var B,Ce;null===(Ce=null===(B=this.destination)||void 0===B?void 0:B.error)||void 0===Ce||Ce.call(B,Q)}complete(){var Q,B;null===(B=null===(Q=this.destination)||void 0===Q?void 0:Q.complete)||void 0===B||B.call(Q)}_subscribe(Q){var B,Ce;return null!==(Ce=null===(B=this.source)||void 0===B?void 0:B.subscribe(Q))&&void 0!==Ce?Ce:P.Lc}}},961:(Ke,le,S)=>{S.d(le,{Hp:()=>ne,Lv:()=>Ce});var v=S(576),P=S(727),ee=S(416),te=S(849);function se(){}const Ne=de("C",void 0,void 0);function de(Le,ye,Ee){return{kind:Le,value:ye,error:Ee}}var Q=S(410),B=S(806);class Ce extends P.w0{constructor(ye){super(),this.isStopped=!1,ye?(this.destination=ye,(0,P.Nn)(ye)&&ye.add(this)):this.destination=Z}static create(ye,Ee,ve){return new ne(ye,Ee,ve)}next(ye){this.isStopped?Ie(de("N",ye,void 0),this):this._next(ye)}error(ye){this.isStopped?Ie(de("E",void 0,ye),this):(this.isStopped=!0,this._error(ye))}complete(){this.isStopped?Ie(Ne,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(ye){this.destination.next(ye)}_error(ye){try{this.destination.error(ye)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class ne extends Ce{constructor(ye,Ee,ve){let Re;if(super(),(0,v.m)(ye))Re=ye;else if(ye){let re;({next:Re,error:Ee,complete:ve}=ye),this&&ee.v.useDeprecatedNextContext?(re=Object.create(ye),re.unsubscribe=()=>this.unsubscribe()):re=ye,Re=null==Re?void 0:Re.bind(re),Ee=null==Ee?void 0:Ee.bind(re),ve=null==ve?void 0:ve.bind(re)}this.destination={next:Re?ge(Re):se,error:ge(null!=Ee?Ee:Ge),complete:ve?ge(ve):se}}}function ge(Le,ye){return(...Ee)=>{try{Le(...Ee)}catch(ve){ee.v.useDeprecatedSynchronousErrorHandling?(0,B.O)(ve):(0,te.h)(ve)}}}function Ge(Le){throw Le}function Ie(Le,ye){const{onStoppedNotification:Ee}=ee.v;Ee&&Q.z.setTimeout(()=>Ee(Le,ye))}const Z={closed:!0,next:se,error:Ge,complete:se}},727:(Ke,le,S)=>{S.d(le,{Lc:()=>Ne,w0:()=>se,Nn:()=>oe});var v=S(576);const ee=(0,S(888).d)(de=>function(B){de(this),this.message=B?`${B.length} errors occurred during unsubscription:\n${B.map((Ce,ne)=>`${ne+1}) ${Ce.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=B});var te=S(737);class se{constructor(Q){this.initialTeardown=Q,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let Q;if(!this.closed){this.closed=!0;const{_parentage:B}=this;if(B)if(this._parentage=null,Array.isArray(B))for(const ge of B)ge.remove(this);else B.remove(this);const{initialTeardown:Ce}=this;if((0,v.m)(Ce))try{Ce()}catch(ge){Q=ge instanceof ee?ge.errors:[ge]}const{_teardowns:ne}=this;if(ne){this._teardowns=null;for(const ge of ne)try{Me(ge)}catch(Ge){Q=null!=Q?Q:[],Ge instanceof ee?Q=[...Q,...Ge.errors]:Q.push(Ge)}}if(Q)throw new ee(Q)}}add(Q){var B;if(Q&&Q!==this)if(this.closed)Me(Q);else{if(Q instanceof se){if(Q.closed||Q._hasParent(this))return;Q._addParent(this)}(this._teardowns=null!==(B=this._teardowns)&&void 0!==B?B:[]).push(Q)}}_hasParent(Q){const{_parentage:B}=this;return B===Q||Array.isArray(B)&&B.includes(Q)}_addParent(Q){const{_parentage:B}=this;this._parentage=Array.isArray(B)?(B.push(Q),B):B?[B,Q]:Q}_removeParent(Q){const{_parentage:B}=this;B===Q?this._parentage=null:Array.isArray(B)&&(0,te.P)(B,Q)}remove(Q){const{_teardowns:B}=this;B&&(0,te.P)(B,Q),Q instanceof se&&Q._removeParent(this)}}se.EMPTY=(()=>{const de=new se;return de.closed=!0,de})();const Ne=se.EMPTY;function oe(de){return de instanceof se||de&&"closed"in de&&(0,v.m)(de.remove)&&(0,v.m)(de.add)&&(0,v.m)(de.unsubscribe)}function Me(de){(0,v.m)(de)?de():de.unsubscribe()}},416:(Ke,le,S)=>{S.d(le,{v:()=>v});const v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Ke,le,S)=>{S.d(le,{E:()=>P});const P=new(S(306).y)(se=>se.complete())},76:(Ke,le,S)=>{S.d(le,{D:()=>qe});var v=S(421),P=S(672),ee=S(482),te=S(403);function se(_e,fe=0){return(0,ee.e)((j,U)=>{j.subscribe(new te.Q(U,H=>(0,P.f)(U,_e,()=>U.next(H),fe),()=>(0,P.f)(U,_e,()=>U.complete(),fe),H=>(0,P.f)(U,_e,()=>U.error(H),fe)))})}function Ne(_e,fe=0){return(0,ee.e)((j,U)=>{U.add(_e.schedule(()=>j.subscribe(U),fe))})}var de=S(306),B=S(202),Ce=S(576);function ge(_e,fe){if(!_e)throw new Error("Iterable cannot be null");return new de.y(j=>{(0,P.f)(j,fe,()=>{const U=_e[Symbol.asyncIterator]();(0,P.f)(j,fe,()=>{U.next().then(H=>{H.done?j.complete():j.next(H.value)})},0,!0)})})}var Ge=S(670),Ie=S(239),Z=S(144),Le=S(495),ye=S(206),Ee=S(532),ve=S(260);function qe(_e,fe){return fe?function(_e,fe){if(null!=_e){if((0,Ge.c)(_e))return function(_e,fe){return(0,v.Xf)(_e).pipe(Ne(fe),se(fe))}(_e,fe);if((0,Z.z)(_e))return function(_e,fe){return new de.y(j=>{let U=0;return fe.schedule(function(){U===_e.length?j.complete():(j.next(_e[U++]),j.closed||this.schedule())})})}(_e,fe);if((0,Ie.t)(_e))return function(_e,fe){return(0,v.Xf)(_e).pipe(Ne(fe),se(fe))}(_e,fe);if((0,ye.D)(_e))return ge(_e,fe);if((0,Le.T)(_e))return function(_e,fe){return new de.y(j=>{let U;return(0,P.f)(j,fe,()=>{U=_e[B.h](),(0,P.f)(j,fe,()=>{let H,G;try{({value:H,done:G}=U.next())}catch(ie){return void j.error(ie)}G?j.complete():j.next(H)},0,!0)}),()=>(0,Ce.m)(null==U?void 0:U.return)&&U.return()})}(_e,fe);if((0,ve.L)(_e))return function(_e,fe){return ge((0,ve.Q)(_e),fe)}(_e,fe)}throw(0,Ee.z)(_e)}(_e,fe):(0,v.Xf)(_e)}},421:(Ke,le,S)=>{S.d(le,{Xf:()=>ne});var v=S(987),P=S(144),ee=S(239),te=S(306),se=S(670),Ne=S(206),oe=S(532),Me=S(495),de=S(260),Q=S(576),B=S(849),Ce=S(822);function ne(ve){if(ve instanceof te.y)return ve;if(null!=ve){if((0,se.c)(ve))return function(ve){return new te.y(Re=>{const re=ve[Ce.L]();if((0,Q.m)(re.subscribe))return re.subscribe(Re);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(ve);if((0,P.z)(ve))return function(ve){return new te.y(Re=>{for(let re=0;re<ve.length&&!Re.closed;re++)Re.next(ve[re]);Re.complete()})}(ve);if((0,ee.t)(ve))return function(ve){return new te.y(Re=>{ve.then(re=>{Re.closed||(Re.next(re),Re.complete())},re=>Re.error(re)).then(null,B.h)})}(ve);if((0,Ne.D)(ve))return Le(ve);if((0,Me.T)(ve))return function(ve){return new te.y(Re=>{for(const re of ve)if(Re.next(re),Re.closed)return;Re.complete()})}(ve);if((0,de.L)(ve))return function(ve){return Le((0,de.Q)(ve))}(ve)}throw(0,oe.z)(ve)}function Le(ve){return new te.y(Re=>{(function(ve,Re){var re,qe,_e,fe;return(0,v.mG)(this,void 0,void 0,function*(){try{for(re=(0,v.KL)(ve);!(qe=yield re.next()).done;)if(Re.next(qe.value),Re.closed)return}catch(j){_e={error:j}}finally{try{qe&&!qe.done&&(fe=re.return)&&(yield fe.call(re))}finally{if(_e)throw _e.error}}Re.complete()})})(ve,Re).catch(re=>Re.error(re))})}},646:(Ke,le,S)=>{S.d(le,{of:()=>ee});var v=S(669),P=S(76);function ee(...te){const se=(0,v.yG)(te);return(0,P.D)(te,se)}},403:(Ke,le,S)=>{S.d(le,{Q:()=>P});var v=S(961);class P extends v.Lv{constructor(te,se,Ne,oe,Me){super(te),this.onFinalize=Me,this._next=se?function(de){try{se(de)}catch(Q){te.error(Q)}}:super._next,this._error=oe?function(de){try{oe(de)}catch(Q){te.error(Q)}finally{this.unsubscribe()}}:super._error,this._complete=Ne?function(){try{Ne()}catch(de){te.error(de)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var te;const{closed:se}=this;super.unsubscribe(),!se&&(null===(te=this.onFinalize)||void 0===te||te.call(this))}}},351:(Ke,le,S)=>{S.d(le,{b:()=>ee});var v=S(577),P=S(576);function ee(te,se){return(0,P.m)(se)?(0,v.z)(te,se,1):(0,v.z)(te,1)}},300:(Ke,le,S)=>{S.d(le,{h:()=>ee});var v=S(482),P=S(403);function ee(te,se){return(0,v.e)((Ne,oe)=>{let Me=0;Ne.subscribe(new P.Q(oe,de=>te.call(se,de,Me++)&&oe.next(de)))})}},4:(Ke,le,S)=>{S.d(le,{U:()=>ee});var v=S(482),P=S(403);function ee(te,se){return(0,v.e)((Ne,oe)=>{let Me=0;Ne.subscribe(new P.Q(oe,de=>{oe.next(te.call(se,de,Me++))}))})}},189:(Ke,le,S)=>{S.d(le,{J:()=>ee});var v=S(577),P=S(671);function ee(te=1/0){return(0,v.z)(P.y,te)}},577:(Ke,le,S)=>{S.d(le,{z:()=>Me});var v=S(4),P=S(421),ee=S(482),se=(S(672),S(403)),oe=S(576);function Me(de,Q,B=1/0){return(0,oe.m)(Q)?Me((Ce,ne)=>(0,v.U)((ge,Ge)=>Q(Ce,ge,ne,Ge))((0,P.Xf)(de(Ce,ne))),B):("number"==typeof Q&&(B=Q),(0,ee.e)((Ce,ne)=>function(de,Q,B,Ce,ne,ge,Ge,Ie){const Z=[];let Le=0,ye=0,Ee=!1;const ve=()=>{Ee&&!Z.length&&!Le&&Q.complete()},Re=qe=>Le<Ce?re(qe):Z.push(qe),re=qe=>{Le++;let _e=!1;(0,P.Xf)(B(qe,ye++)).subscribe(new se.Q(Q,fe=>{Q.next(fe)},()=>{_e=!0},void 0,()=>{if(_e)try{for(Le--;Z.length&&Le<Ce;){const fe=Z.shift();re(fe)}ve()}catch(fe){Q.error(fe)}}))};return de.subscribe(new se.Q(Q,Re,()=>{Ee=!0,ve()})),()=>{}}(Ce,ne,de,B)))}},99:(Ke,le,S)=>{S.d(le,{B:()=>Ne});var v=S(76),P=S(698),ee=S(579),te=S(961),se=S(482);function Ne(Me={}){const{connector:de=(()=>new ee.x),resetOnError:Q=!0,resetOnComplete:B=!0,resetOnRefCountZero:Ce=!0}=Me;return ne=>{let ge=null,Ge=null,Ie=null,Z=0,Le=!1,ye=!1;const Ee=()=>{null==Ge||Ge.unsubscribe(),Ge=null},ve=()=>{Ee(),ge=Ie=null,Le=ye=!1},Re=()=>{const re=ge;ve(),null==re||re.unsubscribe()};return(0,se.e)((re,qe)=>{Z++,!ye&&!Le&&Ee();const _e=Ie=null!=Ie?Ie:de();qe.add(()=>{Z--,0===Z&&!ye&&!Le&&(Ge=oe(Re,Ce))}),_e.subscribe(qe),ge||(ge=new te.Hp({next:fe=>_e.next(fe),error:fe=>{ye=!0,Ee(),Ge=oe(ve,Q,fe),_e.error(fe)},complete:()=>{Le=!0,Ee(),Ge=oe(ve,B),_e.complete()}}),(0,v.D)(re).subscribe(ge))})(ne)}}function oe(Me,de,...Q){return!0===de?(Me(),null):!1===de?null:de(...Q).pipe((0,P.q)(1)).subscribe(()=>Me())}},698:(Ke,le,S)=>{S.d(le,{q:()=>te});var v=S(515),P=S(482),ee=S(403);function te(se){return se<=0?()=>v.E:(0,P.e)((Ne,oe)=>{let Me=0;Ne.subscribe(new ee.Q(oe,de=>{++Me<=se&&(oe.next(de),se<=Me&&oe.complete())}))})}},410:(Ke,le,S)=>{S.d(le,{z:()=>v});const v={setTimeout(...P){const{delegate:ee}=v;return((null==ee?void 0:ee.setTimeout)||setTimeout)(...P)},clearTimeout(P){const{delegate:ee}=v;return((null==ee?void 0:ee.clearTimeout)||clearTimeout)(P)},delegate:void 0}},202:(Ke,le,S)=>{S.d(le,{h:()=>P});const P="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},822:(Ke,le,S)=>{S.d(le,{L:()=>v});const v="function"==typeof Symbol&&Symbol.observable||"@@observable"},669:(Ke,le,S)=>{S.d(le,{_6:()=>Ne,jO:()=>te,yG:()=>se});var v=S(576);function ee(oe){return oe[oe.length-1]}function te(oe){return(0,v.m)(ee(oe))?oe.pop():void 0}function se(oe){return function(oe){return oe&&(0,v.m)(oe.schedule)}(ee(oe))?oe.pop():void 0}function Ne(oe,Me){return"number"==typeof ee(oe)?oe.pop():Me}},737:(Ke,le,S)=>{function v(P,ee){if(P){const te=P.indexOf(ee);0<=te&&P.splice(te,1)}}S.d(le,{P:()=>v})},888:(Ke,le,S)=>{function v(P){const te=P(se=>{Error.call(se),se.stack=(new Error).stack});return te.prototype=Object.create(Error.prototype),te.prototype.constructor=te,te}S.d(le,{d:()=>v})},806:(Ke,le,S)=>{S.d(le,{x:()=>ee,O:()=>te});var v=S(416);let P=null;function ee(se){if(v.v.useDeprecatedSynchronousErrorHandling){const Ne=!P;if(Ne&&(P={errorThrown:!1,error:null}),se(),Ne){const{errorThrown:oe,error:Me}=P;if(P=null,oe)throw Me}}else se()}function te(se){v.v.useDeprecatedSynchronousErrorHandling&&P&&(P.errorThrown=!0,P.error=se)}},672:(Ke,le,S)=>{function v(P,ee,te,se=0,Ne=!1){const oe=ee.schedule(function(){te(),Ne?P.add(this.schedule(null,se)):this.unsubscribe()},se);if(P.add(oe),!Ne)return oe}S.d(le,{f:()=>v})},671:(Ke,le,S)=>{function v(P){return P}S.d(le,{y:()=>v})},144:(Ke,le,S)=>{S.d(le,{z:()=>v});const v=P=>P&&"number"==typeof P.length&&"function"!=typeof P},206:(Ke,le,S)=>{S.d(le,{D:()=>P});var v=S(576);function P(ee){return Symbol.asyncIterator&&(0,v.m)(null==ee?void 0:ee[Symbol.asyncIterator])}},576:(Ke,le,S)=>{function v(P){return"function"==typeof P}S.d(le,{m:()=>v})},670:(Ke,le,S)=>{S.d(le,{c:()=>ee});var v=S(822),P=S(576);function ee(te){return(0,P.m)(te[v.L])}},495:(Ke,le,S)=>{S.d(le,{T:()=>ee});var v=S(202),P=S(576);function ee(te){return(0,P.m)(null==te?void 0:te[v.h])}},239:(Ke,le,S)=>{S.d(le,{t:()=>P});var v=S(576);function P(ee){return(0,v.m)(null==ee?void 0:ee.then)}},260:(Ke,le,S)=>{S.d(le,{Q:()=>ee,L:()=>te});var v=S(987),P=S(576);function ee(se){return(0,v.FC)(this,arguments,function*(){const oe=se.getReader();try{for(;;){const{value:Me,done:de}=yield(0,v.qq)(oe.read());if(de)return yield(0,v.qq)(void 0);yield yield(0,v.qq)(Me)}}finally{oe.releaseLock()}})}function te(se){return(0,P.m)(null==se?void 0:se.getReader)}},482:(Ke,le,S)=>{S.d(le,{A:()=>P,e:()=>ee});var v=S(576);function P(te){return(0,v.m)(null==te?void 0:te.lift)}function ee(te){return se=>{if(P(se))return se.lift(function(Ne){try{return te(Ne,this)}catch(oe){this.error(oe)}});throw new TypeError("Unable to lift unknown Observable type")}}},849:(Ke,le,S)=>{S.d(le,{h:()=>ee});var v=S(416),P=S(410);function ee(te){P.z.setTimeout(()=>{const{onUnhandledError:se}=v.v;if(!se)throw te;se(te)})}},532:(Ke,le,S)=>{function v(P){return new TypeError(`You provided ${null!==P&&"object"==typeof P?"an invalid object":`'${P}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}S.d(le,{z:()=>v})},987:(Ke,le,S)=>{function Me(j,U,H,G){return new(H||(H=Promise))(function(V,Pe){function st(mt){try{Ue(G.next(mt))}catch(rn){Pe(rn)}}function Ae(mt){try{Ue(G.throw(mt))}catch(rn){Pe(rn)}}function Ue(mt){mt.done?V(mt.value):function(V){return V instanceof H?V:new H(function(Pe){Pe(V)})}(mt.value).then(st,Ae)}Ue((G=G.apply(j,U||[])).next())})}function Z(j){return this instanceof Z?(this.v=j,this):new Z(j)}function Le(j,U,H){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ie,G=H.apply(j,U||[]),V=[];return ie={},Pe("next"),Pe("throw"),Pe("return"),ie[Symbol.asyncIterator]=function(){return this},ie;function Pe(It){G[It]&&(ie[It]=function(cn){return new Promise(function(Pt,ht){V.push([It,cn,Pt,ht])>1||st(It,cn)})})}function st(It,cn){try{!function(It){It.value instanceof Z?Promise.resolve(It.value.v).then(Ue,mt):rn(V[0][2],It)}(G[It](cn))}catch(Pt){rn(V[0][3],Pt)}}function Ue(It){st("next",It)}function mt(It){st("throw",It)}function rn(It,cn){It(cn),V.shift(),V.length&&st(V[0][0],V[0][1])}}function Ee(j){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H,U=j[Symbol.asyncIterator];return U?U.call(j):(j=function(j){var U="function"==typeof Symbol&&Symbol.iterator,H=U&&j[U],G=0;if(H)return H.call(j);if(j&&"number"==typeof j.length)return{next:function(){return j&&G>=j.length&&(j=void 0),{value:j&&j[G++],done:!j}}};throw new TypeError(U?"Object is not iterable.":"Symbol.iterator is not defined.")}(j),H={},G("next"),G("throw"),G("return"),H[Symbol.asyncIterator]=function(){return this},H);function G(V){H[V]=j[V]&&function(Pe){return new Promise(function(st,Ae){!function(V,Pe,st,Ae){Promise.resolve(Ae).then(function(Ue){V({value:Ue,done:st})},Pe)}(st,Ae,(Pe=j[V](Pe)).done,Pe.value)})}}}S.d(le,{mG:()=>Me,qq:()=>Z,FC:()=>Le,KL:()=>Ee})},808:(Ke,le,S)=>{S.d(le,{mr:()=>ye,Ov:()=>Fr,ez:()=>Gn,K0:()=>oe,uU:()=>wi,Do:()=>ve,V_:()=>Q,Ye:()=>Re,S$:()=>Z,mk:()=>_n,sg:()=>Vn,O5:()=>$n,PC:()=>on,RF:()=>On,n9:()=>Fn,b0:()=>Ee,lw:()=>Me,EM:()=>Ti,JF:()=>Ai,w_:()=>Ne,bD:()=>kr,q:()=>ee,Mx:()=>_t,HT:()=>se});var v=S(587);
/**
       * @license Angular v13.1.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let P=null;function ee(){return P}function se(p){P||(P=p)}class Ne{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oe=new v.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Me=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=v.Yz7({token:p,factory:function(){return(0,v.LFG)(B)},providedIn:"platform"}),p})();const Q=new v.OlP("Location Initialized");let B=(()=>{class p extends Me{constructor(h){super(),this._doc=h,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ee().getBaseHref(this._doc)}onPopState(h){const E=ee().getGlobalEventTarget(this._doc,"window");return E.addEventListener("popstate",h,!1),()=>E.removeEventListener("popstate",h)}onHashChange(h){const E=ee().getGlobalEventTarget(this._doc,"window");return E.addEventListener("hashchange",h,!1),()=>E.removeEventListener("hashchange",h)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(h){this.location.pathname=h}pushState(h,E,R){Ce()?this._history.pushState(h,E,R):this.location.hash=R}replaceState(h,E,R){Ce()?this._history.replaceState(h,E,R):this.location.hash=R}forward(){this._history.forward()}back(){this._history.back()}historyGo(h=0){this._history.go(h)}getState(){return this._history.state}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(oe))},p.\u0275prov=v.Yz7({token:p,factory:function(){return new B((0,v.LFG)(oe))},providedIn:"platform"}),p})();function Ce(){return!!window.history.pushState}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ge(p,C){if(0==p.length)return C;if(0==C.length)return p;let h=0;return p.endsWith("/")&&h++,C.startsWith("/")&&h++,2==h?p+C.substring(1):1==h?p+C:p+"/"+C}function Ge(p){const C=p.match(/#|\?|$/),h=C&&C.index||p.length;return p.slice(0,h-("/"===p[h-1]?1:0))+p.slice(h)}function Ie(p){return p&&"?"!==p[0]?"?"+p:p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=v.Yz7({token:p,factory:function(){return function(p){const C=(0,v.LFG)(oe).location;return new Ee((0,v.LFG)(Me),C&&C.origin||"")}()},providedIn:"root"}),p})();const ye=new v.OlP("appBaseHref");let Ee=(()=>{class p extends Z{constructor(h,E){if(super(),this._platformLocation=h,this._removeListenerFns=[],null==E&&(E=this._platformLocation.getBaseHrefFromDOM()),null==E)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=E}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}prepareExternalUrl(h){return ge(this._baseHref,h)}path(h=!1){const E=this._platformLocation.pathname+Ie(this._platformLocation.search),R=this._platformLocation.hash;return R&&h?`${E}${R}`:E}pushState(h,E,R,k){const J=this.prepareExternalUrl(R+Ie(k));this._platformLocation.pushState(h,E,J)}replaceState(h,E,R,k){const J=this.prepareExternalUrl(R+Ie(k));this._platformLocation.replaceState(h,E,J)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var E,R;null===(R=(E=this._platformLocation).historyGo)||void 0===R||R.call(E,h)}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(Me),v.LFG(ye,8))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})(),ve=(()=>{class p extends Z{constructor(h,E){super(),this._platformLocation=h,this._baseHref="",this._removeListenerFns=[],null!=E&&(this._baseHref=E)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}path(h=!1){let E=this._platformLocation.hash;return null==E&&(E="#"),E.length>0?E.substring(1):E}prepareExternalUrl(h){const E=ge(this._baseHref,h);return E.length>0?"#"+E:E}pushState(h,E,R,k){let J=this.prepareExternalUrl(R+Ie(k));0==J.length&&(J=this._platformLocation.pathname),this._platformLocation.pushState(h,E,J)}replaceState(h,E,R,k){let J=this.prepareExternalUrl(R+Ie(k));0==J.length&&(J=this._platformLocation.pathname),this._platformLocation.replaceState(h,E,J)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var E,R;null===(R=(E=this._platformLocation).historyGo)||void 0===R||R.call(E,h)}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(Me),v.LFG(ye,8))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})(),Re=(()=>{class p{constructor(h,E){this._subject=new v.vpe,this._urlChangeListeners=[],this._platformStrategy=h;const R=this._platformStrategy.getBaseHref();this._platformLocation=E,this._baseHref=Ge(_e(R)),this._platformStrategy.onPopState(k=>{this._subject.emit({url:this.path(!0),pop:!0,state:k.state,type:k.type})})}path(h=!1){return this.normalize(this._platformStrategy.path(h))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(h,E=""){return this.path()==this.normalize(h+Ie(E))}normalize(h){return p.stripTrailingSlash(function(p,C){return p&&C.startsWith(p)?C.substring(p.length):C}(this._baseHref,_e(h)))}prepareExternalUrl(h){return h&&"/"!==h[0]&&(h="/"+h),this._platformStrategy.prepareExternalUrl(h)}go(h,E="",R=null){this._platformStrategy.pushState(R,"",h,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(E)),R)}replaceState(h,E="",R=null){this._platformStrategy.replaceState(R,"",h,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(E)),R)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(h=0){var E,R;null===(R=(E=this._platformStrategy).historyGo)||void 0===R||R.call(E,h)}onUrlChange(h){this._urlChangeListeners.push(h),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(E=>{this._notifyUrlChangeListeners(E.url,E.state)}))}_notifyUrlChangeListeners(h="",E){this._urlChangeListeners.forEach(R=>R(h,E))}subscribe(h,E,R){return this._subject.subscribe({next:h,error:E,complete:R})}}return p.normalizeQueryParams=Ie,p.joinWithSlash=ge,p.stripTrailingSlash=Ge,p.\u0275fac=function(h){return new(h||p)(v.LFG(Z),v.LFG(Me))},p.\u0275prov=v.Yz7({token:p,factory:function(){return new Re((0,v.LFG)(Z),(0,v.LFG)(Me))},providedIn:"root"}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _e(p){return p.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var U=(()=>((U=U||{})[U.Zero=0]="Zero",U[U.One=1]="One",U[U.Two=2]="Two",U[U.Few=3]="Few",U[U.Many=4]="Many",U[U.Other=5]="Other",U))(),H=(()=>((H=H||{})[H.Format=0]="Format",H[H.Standalone=1]="Standalone",H))(),G=(()=>((G=G||{})[G.Narrow=0]="Narrow",G[G.Abbreviated=1]="Abbreviated",G[G.Wide=2]="Wide",G[G.Short=3]="Short",G))(),ie=(()=>((ie=ie||{})[ie.Short=0]="Short",ie[ie.Medium=1]="Medium",ie[ie.Long=2]="Long",ie[ie.Full=3]="Full",ie))(),V=(()=>((V=V||{})[V.Decimal=0]="Decimal",V[V.Group=1]="Group",V[V.List=2]="List",V[V.PercentSign=3]="PercentSign",V[V.PlusSign=4]="PlusSign",V[V.MinusSign=5]="MinusSign",V[V.Exponential=6]="Exponential",V[V.SuperscriptingExponent=7]="SuperscriptingExponent",V[V.PerMille=8]="PerMille",V[V.Infinity=9]="Infinity",V[V.NaN=10]="NaN",V[V.TimeSeparator=11]="TimeSeparator",V[V.CurrencyDecimal=12]="CurrencyDecimal",V[V.CurrencyGroup=13]="CurrencyGroup",V))();function Pt(p,C){return lt((0,v.cg1)(p)[v.wAp.DateFormat],C)}function ht(p,C){return lt((0,v.cg1)(p)[v.wAp.TimeFormat],C)}function Xe(p,C){return lt((0,v.cg1)(p)[v.wAp.DateTimeFormat],C)}function jt(p,C){const h=(0,v.cg1)(p),E=h[v.wAp.NumberSymbols][C];if(void 0===E){if(C===V.CurrencyDecimal)return h[v.wAp.NumberSymbols][V.Decimal];if(C===V.CurrencyGroup)return h[v.wAp.NumberSymbols][V.Group]}return E}const Cn=v.kL8;function St(p){if(!p[v.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${p[v.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function lt(p,C){for(let h=C;h>-1;h--)if(void 0!==p[h])return p[h];throw new Error("Locale data API: locale data undefined")}function Bt(p){const[C,h]=p.split(":");return{hours:+C,minutes:+h}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const O=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,X={},W=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var De=(()=>((De=De||{})[De.Short=0]="Short",De[De.ShortGMT=1]="ShortGMT",De[De.Long=2]="Long",De[De.Extended=3]="Extended",De))(),he=(()=>((he=he||{})[he.FullYear=0]="FullYear",he[he.Month=1]="Month",he[he.Date=2]="Date",he[he.Hours=3]="Hours",he[he.Minutes=4]="Minutes",he[he.Seconds=5]="Seconds",he[he.FractionalSeconds=6]="FractionalSeconds",he[he.Day=7]="Day",he))(),me=(()=>((me=me||{})[me.DayPeriods=0]="DayPeriods",me[me.Days=1]="Days",me[me.Months=2]="Months",me[me.Eras=3]="Eras",me))();function ke(p,C,h,E){let R=function(p){if(or(p))return p;if("number"==typeof p&&!isNaN(p))return new Date(p);if("string"==typeof p){if(p=p.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p)){const[R,k=1,J=1]=p.split("-").map(Se=>+Se);return Dt(R,k-1,J)}const h=parseFloat(p);if(!isNaN(p-h))return new Date(h);let E;if(E=p.match(O))return function(p){const C=new Date(0);let h=0,E=0;const R=p[8]?C.setUTCFullYear:C.setFullYear,k=p[8]?C.setUTCHours:C.setHours;p[9]&&(h=Number(p[9]+p[10]),E=Number(p[9]+p[11])),R.call(C,Number(p[1]),Number(p[2])-1,Number(p[3]));const J=Number(p[4]||0)-h,Se=Number(p[5]||0)-E,ft=Number(p[6]||0),Je=Math.floor(1e3*parseFloat("0."+(p[7]||0)));return k.call(C,J,Se,ft,Je),C}(E)}const C=new Date(p);if(!or(C))throw new Error(`Unable to convert "${p}" into a date`);return C}(p);C=Lt(h,C)||C;let Se,J=[];for(;C;){if(Se=W.exec(C),!Se){J.push(C);break}{J=J.concat(Se.slice(1));const pt=J.pop();if(!pt)break;C=pt}}let ft=R.getTimezoneOffset();E&&(ft=Jr(E,ft),R=function(p,C,h){const R=p.getTimezoneOffset();return function(p,C){return(p=new Date(p.getTime())).setMinutes(p.getMinutes()+C),p}(p,-1*(Jr(C,R)-R))}(R,E));let Je="";return J.forEach(pt=>{const Ve=function(p){if(Zt[p])return Zt[p];let C;switch(p){case"G":case"GG":case"GGG":C=xe(me.Eras,G.Abbreviated);break;case"GGGG":C=xe(me.Eras,G.Wide);break;case"GGGGG":C=xe(me.Eras,G.Narrow);break;case"y":C=$e(he.FullYear,1,0,!1,!0);break;case"yy":C=$e(he.FullYear,2,0,!0,!0);break;case"yyy":C=$e(he.FullYear,3,0,!1,!0);break;case"yyyy":C=$e(he.FullYear,4,0,!1,!0);break;case"Y":C=Un(1);break;case"YY":C=Un(2,!0);break;case"YYY":C=Un(3);break;case"YYYY":C=Un(4);break;case"M":case"L":C=$e(he.Month,1,1);break;case"MM":case"LL":C=$e(he.Month,2,1);break;case"MMM":C=xe(me.Months,G.Abbreviated);break;case"MMMM":C=xe(me.Months,G.Wide);break;case"MMMMM":C=xe(me.Months,G.Narrow);break;case"LLL":C=xe(me.Months,G.Abbreviated,H.Standalone);break;case"LLLL":C=xe(me.Months,G.Wide,H.Standalone);break;case"LLLLL":C=xe(me.Months,G.Narrow,H.Standalone);break;case"w":C=$t(1);break;case"ww":C=$t(2);break;case"W":C=$t(1,!0);break;case"d":C=$e(he.Date,1);break;case"dd":C=$e(he.Date,2);break;case"c":case"cc":C=$e(he.Day,1);break;case"ccc":C=xe(me.Days,G.Abbreviated,H.Standalone);break;case"cccc":C=xe(me.Days,G.Wide,H.Standalone);break;case"ccccc":C=xe(me.Days,G.Narrow,H.Standalone);break;case"cccccc":C=xe(me.Days,G.Short,H.Standalone);break;case"E":case"EE":case"EEE":C=xe(me.Days,G.Abbreviated);break;case"EEEE":C=xe(me.Days,G.Wide);break;case"EEEEE":C=xe(me.Days,G.Narrow);break;case"EEEEEE":C=xe(me.Days,G.Short);break;case"a":case"aa":case"aaa":C=xe(me.DayPeriods,G.Abbreviated);break;case"aaaa":C=xe(me.DayPeriods,G.Wide);break;case"aaaaa":C=xe(me.DayPeriods,G.Narrow);break;case"b":case"bb":case"bbb":C=xe(me.DayPeriods,G.Abbreviated,H.Standalone,!0);break;case"bbbb":C=xe(me.DayPeriods,G.Wide,H.Standalone,!0);break;case"bbbbb":C=xe(me.DayPeriods,G.Narrow,H.Standalone,!0);break;case"B":case"BB":case"BBB":C=xe(me.DayPeriods,G.Abbreviated,H.Format,!0);break;case"BBBB":C=xe(me.DayPeriods,G.Wide,H.Format,!0);break;case"BBBBB":C=xe(me.DayPeriods,G.Narrow,H.Format,!0);break;case"h":C=$e(he.Hours,1,-12);break;case"hh":C=$e(he.Hours,2,-12);break;case"H":C=$e(he.Hours,1);break;case"HH":C=$e(he.Hours,2);break;case"m":C=$e(he.Minutes,1);break;case"mm":C=$e(he.Minutes,2);break;case"s":C=$e(he.Seconds,1);break;case"ss":C=$e(he.Seconds,2);break;case"S":C=$e(he.FractionalSeconds,1);break;case"SS":C=$e(he.FractionalSeconds,2);break;case"SSS":C=$e(he.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":C=mn(De.Short);break;case"ZZZZZ":C=mn(De.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":C=mn(De.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":C=mn(De.Long);break;default:return null}return Zt[p]=C,C}(pt);Je+=Ve?Ve(R,h,ft):"''"===pt?"'":pt.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),Je}function Dt(p,C,h){const E=new Date(0);return E.setFullYear(p,C,h),E.setHours(0,0,0),E}function Lt(p,C){const h=function(p){return(0,v.cg1)(p)[v.wAp.LocaleId]}(p);if(X[h]=X[h]||{},X[h][C])return X[h][C];let E="";switch(C){case"shortDate":E=Pt(p,ie.Short);break;case"mediumDate":E=Pt(p,ie.Medium);break;case"longDate":E=Pt(p,ie.Long);break;case"fullDate":E=Pt(p,ie.Full);break;case"shortTime":E=ht(p,ie.Short);break;case"mediumTime":E=ht(p,ie.Medium);break;case"longTime":E=ht(p,ie.Long);break;case"fullTime":E=ht(p,ie.Full);break;case"short":const R=Lt(p,"shortTime"),k=Lt(p,"shortDate");E=Tt(Xe(p,ie.Short),[R,k]);break;case"medium":const J=Lt(p,"mediumTime"),Se=Lt(p,"mediumDate");E=Tt(Xe(p,ie.Medium),[J,Se]);break;case"long":const ft=Lt(p,"longTime"),Je=Lt(p,"longDate");E=Tt(Xe(p,ie.Long),[ft,Je]);break;case"full":const pt=Lt(p,"fullTime"),Ve=Lt(p,"fullDate");E=Tt(Xe(p,ie.Full),[pt,Ve])}return E&&(X[h][C]=E),E}function Tt(p,C){return C&&(p=p.replace(/\{([^}]+)}/g,function(h,E){return null!=C&&E in C?C[E]:h})),p}function Ct(p,C,h="-",E,R){let k="";(p<0||R&&p<=0)&&(R?p=1-p:(p=-p,k=h));let J=String(p);for(;J.length<C;)J="0"+J;return E&&(J=J.substr(J.length-C)),k+J}function $e(p,C,h=0,E=!1,R=!1){return function(k,J){let Se=function(p,C){switch(p){case he.FullYear:return C.getFullYear();case he.Month:return C.getMonth();case he.Date:return C.getDate();case he.Hours:return C.getHours();case he.Minutes:return C.getMinutes();case he.Seconds:return C.getSeconds();case he.FractionalSeconds:return C.getMilliseconds();case he.Day:return C.getDay();default:throw new Error(`Unknown DateType value "${p}".`)}}(p,k);if((h>0||Se>-h)&&(Se+=h),p===he.Hours)0===Se&&-12===h&&(Se=12);else if(p===he.FractionalSeconds)return function(p,C){return Ct(p,3).substr(0,C)}(Se,C);const ft=jt(J,V.MinusSign);return Ct(Se,C,ft,E,R)}}function xe(p,C,h=H.Format,E=!1){return function(R,k){return function(p,C,h,E,R,k){switch(h){case me.Months:return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.MonthsFormat],E[v.wAp.MonthsStandalone]],C);return lt(k,h)}(C,R,E)[p.getMonth()];case me.Days:return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.DaysFormat],E[v.wAp.DaysStandalone]],C);return lt(k,h)}(C,R,E)[p.getDay()];case me.DayPeriods:const J=p.getHours(),Se=p.getMinutes();if(k){const Je=function(p){const C=(0,v.cg1)(p);return St(C),(C[v.wAp.ExtraData][2]||[]).map(E=>"string"==typeof E?Bt(E):[Bt(E[0]),Bt(E[1])])}(C),pt=function(p,C,h){const E=(0,v.cg1)(p);St(E);const k=lt([E[v.wAp.ExtraData][0],E[v.wAp.ExtraData][1]],C)||[];return lt(k,h)||[]}(C,R,E),Ve=Je.findIndex(vt=>{if(Array.isArray(vt)){const[Ze,Rt]=vt,vn=J>=Ze.hours&&Se>=Ze.minutes,Wn=J<Rt.hours||J===Rt.hours&&Se<Rt.minutes;if(Ze.hours<Rt.hours){if(vn&&Wn)return!0}else if(vn||Wn)return!0}else if(vt.hours===J&&vt.minutes===Se)return!0;return!1});if(-1!==Ve)return pt[Ve]}return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.DayPeriodsFormat],E[v.wAp.DayPeriodsStandalone]],C);return lt(k,h)}(C,R,E)[J<12?0:1];case me.Eras:return function(p,C){return lt((0,v.cg1)(p)[v.wAp.Eras],C)}(C,E)[p.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${h}`)}}(R,k,p,C,h,E)}}function mn(p){return function(C,h,E){const R=-1*E,k=jt(h,V.MinusSign),J=R>0?Math.floor(R/60):Math.ceil(R/60);switch(p){case De.Short:return(R>=0?"+":"")+Ct(J,2,k)+Ct(Math.abs(R%60),2,k);case De.ShortGMT:return"GMT"+(R>=0?"+":"")+Ct(J,1,k);case De.Long:return"GMT"+(R>=0?"+":"")+Ct(J,2,k)+":"+Ct(Math.abs(R%60),2,k);case De.Extended:return 0===E?"Z":(R>=0?"+":"")+Ct(J,2,k)+":"+Ct(Math.abs(R%60),2,k);default:throw new Error(`Unknown zone width "${p}"`)}}}function _r(p){return Dt(p.getFullYear(),p.getMonth(),p.getDate()+(4-p.getDay()))}function $t(p,C=!1){return function(h,E){let R;if(C){const k=new Date(h.getFullYear(),h.getMonth(),1).getDay()-1,J=h.getDate();R=1+Math.floor((J+k)/7)}else{const k=_r(h),J=function(p){const C=Dt(p,0,1).getDay();return Dt(p,0,1+(C<=4?4:11)-C)}(k.getFullYear()),Se=k.getTime()-J.getTime();R=1+Math.round(Se/6048e5)}return Ct(R,p,jt(E,V.MinusSign))}}function Un(p,C=!1){return function(h,E){return Ct(_r(h).getFullYear(),p,jt(E,V.MinusSign),C)}}const Zt={};function Jr(p,C){p=p.replace(/:/g,"");const h=Date.parse("Jan 01, 1970 00:00:00 "+p)/6e4;return isNaN(h)?C:h}function or(p){return p instanceof Date&&!isNaN(p.valueOf())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class We{}let Xt=(()=>{class p extends We{constructor(h){super(),this.locale=h}getPluralCategory(h,E){switch(Cn(E||this.locale)(h)){case U.Zero:return"zero";case U.One:return"one";case U.Two:return"two";case U.Few:return"few";case U.Many:return"many";default:return"other"}}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(v.soG))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _t(p,C){C=encodeURIComponent(C);for(const h of p.split(";")){const E=h.indexOf("="),[R,k]=-1==E?[h,""]:[h.slice(0,E),h.slice(E+1)];if(R.trim()===C)return decodeURIComponent(k)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _n=(()=>{class p{constructor(h,E,R,k){this._iterableDiffers=h,this._keyValueDiffers=E,this._ngEl=R,this._renderer=k,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(h){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof h?h.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(h){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof h?h.split(/\s+/):h,this._rawClass&&((0,v.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const h=this._iterableDiffer.diff(this._rawClass);h&&this._applyIterableChanges(h)}else if(this._keyValueDiffer){const h=this._keyValueDiffer.diff(this._rawClass);h&&this._applyKeyValueChanges(h)}}_applyKeyValueChanges(h){h.forEachAddedItem(E=>this._toggleClass(E.key,E.currentValue)),h.forEachChangedItem(E=>this._toggleClass(E.key,E.currentValue)),h.forEachRemovedItem(E=>{E.previousValue&&this._toggleClass(E.key,!1)})}_applyIterableChanges(h){h.forEachAddedItem(E=>{if("string"!=typeof E.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,v.AaK)(E.item)}`);this._toggleClass(E.item,!0)}),h.forEachRemovedItem(E=>this._toggleClass(E.item,!1))}_applyClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(E=>this._toggleClass(E,!0)):Object.keys(h).forEach(E=>this._toggleClass(E,!!h[E])))}_removeClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(E=>this._toggleClass(E,!1)):Object.keys(h).forEach(E=>this._toggleClass(E,!1)))}_toggleClass(h,E){(h=h.trim())&&h.split(/\s+/g).forEach(R=>{E?this._renderer.addClass(this._ngEl.nativeElement,R):this._renderer.removeClass(this._ngEl.nativeElement,R)})}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.ZZ4),v.Y36(v.aQg),v.Y36(v.SBq),v.Y36(v.Qsj))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ir{constructor(C,h,E,R){this.$implicit=C,this.ngForOf=h,this.index=E,this.count=R}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Vn=(()=>{class p{constructor(h,E,R){this._viewContainer=h,this._template=E,this._differs=R,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(h){this._ngForOf=h,this._ngForOfDirty=!0}set ngForTrackBy(h){this._trackByFn=h}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(h){h&&(this._template=h)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const h=this._ngForOf;!this._differ&&h&&(this._differ=this._differs.find(h).create(this.ngForTrackBy))}if(this._differ){const h=this._differ.diff(this._ngForOf);h&&this._applyChanges(h)}}_applyChanges(h){const E=this._viewContainer;h.forEachOperation((R,k,J)=>{if(null==R.previousIndex)E.createEmbeddedView(this._template,new Ir(R.item,this._ngForOf,-1,-1),null===J?void 0:J);else if(null==J)E.remove(null===k?void 0:k);else if(null!==k){const Se=E.get(k);E.move(Se,J),Ye(Se,R)}});for(let R=0,k=E.length;R<k;R++){const Se=E.get(R).context;Se.index=R,Se.count=k,Se.ngForOf=this._ngForOf}h.forEachIdentityChange(R=>{Ye(E.get(R.currentIndex),R)})}static ngTemplateContextGuard(h,E){return!0}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(v.ZZ4))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),p})();function Ye(p,C){p.context.$implicit=C.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let $n=(()=>{class p{constructor(h,E){this._viewContainer=h,this._context=new Xr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=E}set ngIf(h){this._context.$implicit=this._context.ngIf=h,this._updateView()}set ngIfThen(h){zn("ngIfThen",h),this._thenTemplateRef=h,this._thenViewRef=null,this._updateView()}set ngIfElse(h){zn("ngIfElse",h),this._elseTemplateRef=h,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(h,E){return!0}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),p})();class Xr{constructor(){this.$implicit=null,this.ngIf=null}}function zn(p,C){if(C&&!C.createEmbeddedView)throw new Error(`${p} must be a TemplateRef, but received '${(0,v.AaK)(C)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ht{constructor(C,h){this._viewContainerRef=C,this._templateRef=h,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(C){C&&!this._created?this.create():!C&&this._created&&this.destroy()}}let On=(()=>{class p{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(h){this._ngSwitch=h,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(h){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(h)}_matchCase(h){const E=h==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||E,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),E}_updateDefaultCases(h){if(this._defaultViews&&h!==this._defaultUsed){this._defaultUsed=h;for(let E=0;E<this._defaultViews.length;E++)this._defaultViews[E].enforceState(h)}}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275dir=v.lG2({type:p,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),p})(),Fn=(()=>{class p{constructor(h,E,R){this.ngSwitch=R,R._addCase(),this._view=new Ht(h,E)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(On,9))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),p})(),on=(()=>{class p{constructor(h,E,R){this._ngEl=h,this._differs=E,this._renderer=R,this._ngStyle=null,this._differ=null}set ngStyle(h){this._ngStyle=h,!this._differ&&h&&(this._differ=this._differs.find(h).create())}ngDoCheck(){if(this._differ){const h=this._differ.diff(this._ngStyle);h&&this._applyChanges(h)}}_setStyle(h,E){const[R,k]=h.split(".");null!=(E=null!=E&&k?`${E}${k}`:E)?this._renderer.setStyle(this._ngEl.nativeElement,R,E):this._renderer.removeStyle(this._ngEl.nativeElement,R)}_applyChanges(h){h.forEachRemovedItem(E=>this._setStyle(E.key,null)),h.forEachAddedItem(E=>this._setStyle(E.key,E.currentValue)),h.forEachChangedItem(E=>this._setStyle(E.key,E.currentValue))}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.SBq),v.Y36(v.aQg),v.Y36(v.Qsj))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xt(p,C){return Error(`InvalidPipeArgument: '${C}' for pipe '${(0,v.AaK)(p)}'`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Sr{createSubscription(C,h){return C.subscribe({next:h,error:E=>{throw E}})}dispose(C){C.unsubscribe()}onDestroy(C){C.unsubscribe()}}class fn{createSubscription(C,h){return C.then(h,E=>{throw E})}dispose(C){}onDestroy(C){}}const Or=new fn,_i=new Sr;let Fr=(()=>{class p{constructor(h){this._ref=h,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(h){return this._obj?h!==this._obj?(this._dispose(),this.transform(h)):this._latestValue:(h&&this._subscribe(h),this._latestValue)}_subscribe(h){this._obj=h,this._strategy=this._selectStrategy(h),this._subscription=this._strategy.createSubscription(h,E=>this._updateLatestValue(h,E))}_selectStrategy(h){if((0,v.QGY)(h))return Or;if((0,v.F4k)(h))return _i;throw xt(p,h)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(h,E){h===this._obj&&(this._latestValue=E,this._ref.markForCheck())}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.sBO,16))},p.\u0275pipe=v.Yjl({name:"async",type:p,pure:!1}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Nr=new v.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let wi=(()=>{class p{constructor(h,E){this.locale=h,this.defaultTimezone=E}transform(h,E="mediumDate",R,k){var J;if(null==h||""===h||h!=h)return null;try{return ke(h,E,k||this.locale,null!==(J=null!=R?R:this.defaultTimezone)&&void 0!==J?J:void 0)}catch(Se){throw xt(p,Se.message)}}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.soG,16),v.Y36(Nr,24))},p.\u0275pipe=v.Yjl({name:"date",type:p,pure:!0}),p})(),Gn=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=v.oAB({type:p}),p.\u0275inj=v.cJS({providers:[{provide:We,useClass:Xt}]}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kr="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ti=(()=>{class p{}return p.\u0275prov=(0,v.Yz7)({token:p,providedIn:"root",factory:()=>new Ot((0,v.LFG)(oe),window)}),p})();class Ot{constructor(C,h){this.document=C,this.window=h,this.offset=()=>[0,0]}setOffset(C){this.offset=Array.isArray(C)?()=>C:C}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(C){this.supportsScrolling()&&this.window.scrollTo(C[0],C[1])}scrollToAnchor(C){if(!this.supportsScrolling())return;const h=function(p,C){const h=p.getElementById(C)||p.getElementsByName(C)[0];if(h)return h;if("function"==typeof p.createTreeWalker&&p.body&&(p.body.createShadowRoot||p.body.attachShadow)){const E=p.createTreeWalker(p.body,NodeFilter.SHOW_ELEMENT);let R=E.currentNode;for(;R;){const k=R.shadowRoot;if(k){const J=k.getElementById(C)||k.querySelector(`[name="${C}"]`);if(J)return J}R=E.nextNode()}}return null}(this.document,C);h&&(this.scrollToElement(h),this.attemptFocus(h))}setHistoryScrollRestoration(C){if(this.supportScrollRestoration()){const h=this.window.history;h&&h.scrollRestoration&&(h.scrollRestoration=C)}}scrollToElement(C){const h=C.getBoundingClientRect(),E=h.left+this.window.pageXOffset,R=h.top+this.window.pageYOffset,k=this.offset();this.window.scrollTo(E-k[0],R-k[1])}attemptFocus(C){return C.focus(),this.document.activeElement===C}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const C=ro(this.window.history)||ro(Object.getPrototypeOf(this.window.history));return!(!C||!C.writable&&!C.set)}catch(C){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(C){return!1}}}function ro(p){return Object.getOwnPropertyDescriptor(p,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ai{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */},520:(Ke,le,S)=>{S.d(le,{TP:()=>st,eN:()=>V,JF:()=>lt});var v=S(808),P=S(587),ee=S(646),te=S(306),se=S(351),Ne=S(300),oe=S(4);
/**
       * @license Angular v13.1.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Me{}class de{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Q{constructor(M){this.normalizedNames=new Map,this.lazyUpdate=null,M?this.lazyInit="string"==typeof M?()=>{this.headers=new Map,M.split("\n").forEach(O=>{const X=O.indexOf(":");if(X>0){const W=O.slice(0,X),De=W.toLowerCase(),he=O.slice(X+1).trim();this.maybeSetNormalizedName(W,De),this.headers.has(De)?this.headers.get(De).push(he):this.headers.set(De,[he])}})}:()=>{this.headers=new Map,Object.keys(M).forEach(O=>{let X=M[O];const W=O.toLowerCase();"string"==typeof X&&(X=[X]),X.length>0&&(this.headers.set(W,X),this.maybeSetNormalizedName(O,W))})}:this.headers=new Map}has(M){return this.init(),this.headers.has(M.toLowerCase())}get(M){this.init();const O=this.headers.get(M.toLowerCase());return O&&O.length>0?O[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(M){return this.init(),this.headers.get(M.toLowerCase())||null}append(M,O){return this.clone({name:M,value:O,op:"a"})}set(M,O){return this.clone({name:M,value:O,op:"s"})}delete(M,O){return this.clone({name:M,value:O,op:"d"})}maybeSetNormalizedName(M,O){this.normalizedNames.has(O)||this.normalizedNames.set(O,M)}init(){this.lazyInit&&(this.lazyInit instanceof Q?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(M=>this.applyUpdate(M)),this.lazyUpdate=null))}copyFrom(M){M.init(),Array.from(M.headers.keys()).forEach(O=>{this.headers.set(O,M.headers.get(O)),this.normalizedNames.set(O,M.normalizedNames.get(O))})}clone(M){const O=new Q;return O.lazyInit=this.lazyInit&&this.lazyInit instanceof Q?this.lazyInit:this,O.lazyUpdate=(this.lazyUpdate||[]).concat([M]),O}applyUpdate(M){const O=M.name.toLowerCase();switch(M.op){case"a":case"s":let X=M.value;if("string"==typeof X&&(X=[X]),0===X.length)return;this.maybeSetNormalizedName(M.name,O);const W=("a"===M.op?this.headers.get(O):void 0)||[];W.push(...X),this.headers.set(O,W);break;case"d":const De=M.value;if(De){let he=this.headers.get(O);if(!he)return;he=he.filter(me=>-1===De.indexOf(me)),0===he.length?(this.headers.delete(O),this.normalizedNames.delete(O)):this.headers.set(O,he)}else this.headers.delete(O),this.normalizedNames.delete(O)}}forEach(M){this.init(),Array.from(this.normalizedNames.keys()).forEach(O=>M(this.normalizedNames.get(O),this.headers.get(O)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class B{encodeKey(M){return Ge(M)}encodeValue(M){return Ge(M)}decodeKey(M){return decodeURIComponent(M)}decodeValue(M){return decodeURIComponent(M)}}const ne=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function Ge(z){return encodeURIComponent(z).replace(ne,(M,O)=>{var X;return null!==(X=ge[O])&&void 0!==X?X:M})}function Ie(z){return`${z}`}class Z{constructor(M={}){if(this.updates=null,this.cloneFrom=null,this.encoder=M.encoder||new B,M.fromString){if(M.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(z,M){const O=new Map;return z.length>0&&z.replace(/^\?/,"").split("&").forEach(W=>{const De=W.indexOf("="),[he,me]=-1==De?[M.decodeKey(W),""]:[M.decodeKey(W.slice(0,De)),M.decodeValue(W.slice(De+1))],ke=O.get(he)||[];ke.push(me),O.set(he,ke)}),O}(M.fromString,this.encoder)}else M.fromObject?(this.map=new Map,Object.keys(M.fromObject).forEach(O=>{const X=M.fromObject[O];this.map.set(O,Array.isArray(X)?X:[X])})):this.map=null}has(M){return this.init(),this.map.has(M)}get(M){this.init();const O=this.map.get(M);return O?O[0]:null}getAll(M){return this.init(),this.map.get(M)||null}keys(){return this.init(),Array.from(this.map.keys())}append(M,O){return this.clone({param:M,value:O,op:"a"})}appendAll(M){const O=[];return Object.keys(M).forEach(X=>{const W=M[X];Array.isArray(W)?W.forEach(De=>{O.push({param:X,value:De,op:"a"})}):O.push({param:X,value:W,op:"a"})}),this.clone(O)}set(M,O){return this.clone({param:M,value:O,op:"s"})}delete(M,O){return this.clone({param:M,value:O,op:"d"})}toString(){return this.init(),this.keys().map(M=>{const O=this.encoder.encodeKey(M);return this.map.get(M).map(X=>O+"="+this.encoder.encodeValue(X)).join("&")}).filter(M=>""!==M).join("&")}clone(M){const O=new Z({encoder:this.encoder});return O.cloneFrom=this.cloneFrom||this,O.updates=(this.updates||[]).concat(M),O}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(M=>this.map.set(M,this.cloneFrom.map.get(M))),this.updates.forEach(M=>{switch(M.op){case"a":case"s":const O=("a"===M.op?this.map.get(M.param):void 0)||[];O.push(Ie(M.value)),this.map.set(M.param,O);break;case"d":if(void 0===M.value){this.map.delete(M.param);break}{let X=this.map.get(M.param)||[];const W=X.indexOf(Ie(M.value));-1!==W&&X.splice(W,1),X.length>0?this.map.set(M.param,X):this.map.delete(M.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ye{constructor(){this.map=new Map}set(M,O){return this.map.set(M,O),this}get(M){return this.map.has(M)||this.map.set(M,M.defaultValue()),this.map.get(M)}delete(M){return this.map.delete(M),this}has(M){return this.map.has(M)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ve(z){return"undefined"!=typeof ArrayBuffer&&z instanceof ArrayBuffer}function Re(z){return"undefined"!=typeof Blob&&z instanceof Blob}function re(z){return"undefined"!=typeof FormData&&z instanceof FormData}class _e{constructor(M,O,X,W){let De;if(this.url=O,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=M.toUpperCase(),function(z){switch(z){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||W?(this.body=void 0!==X?X:null,De=W):De=X,De&&(this.reportProgress=!!De.reportProgress,this.withCredentials=!!De.withCredentials,De.responseType&&(this.responseType=De.responseType),De.headers&&(this.headers=De.headers),De.context&&(this.context=De.context),De.params&&(this.params=De.params)),this.headers||(this.headers=new Q),this.context||(this.context=new ye),this.params){const he=this.params.toString();if(0===he.length)this.urlWithParams=O;else{const me=O.indexOf("?");this.urlWithParams=O+(-1===me?"?":me<O.length-1?"&":"")+he}}else this.params=new Z,this.urlWithParams=O}serializeBody(){return null===this.body?null:ve(this.body)||Re(this.body)||re(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof Z?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||re(this.body)?null:Re(this.body)?this.body.type||null:ve(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Z?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(M={}){var O;const X=M.method||this.method,W=M.url||this.url,De=M.responseType||this.responseType,he=void 0!==M.body?M.body:this.body,me=void 0!==M.withCredentials?M.withCredentials:this.withCredentials,ke=void 0!==M.reportProgress?M.reportProgress:this.reportProgress;let Dt=M.headers||this.headers,Lt=M.params||this.params;const Tt=null!==(O=M.context)&&void 0!==O?O:this.context;return void 0!==M.setHeaders&&(Dt=Object.keys(M.setHeaders).reduce((Ct,et)=>Ct.set(et,M.setHeaders[et]),Dt)),M.setParams&&(Lt=Object.keys(M.setParams).reduce((Ct,et)=>Ct.set(et,M.setParams[et]),Lt)),new _e(X,W,he,{params:Lt,headers:Dt,context:Tt,reportProgress:ke,responseType:De,withCredentials:me})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var fe=(()=>((fe=fe||{})[fe.Sent=0]="Sent",fe[fe.UploadProgress=1]="UploadProgress",fe[fe.ResponseHeader=2]="ResponseHeader",fe[fe.DownloadProgress=3]="DownloadProgress",fe[fe.Response=4]="Response",fe[fe.User=5]="User",fe))();class j{constructor(M,O=200,X="OK"){this.headers=M.headers||new Q,this.status=void 0!==M.status?M.status:O,this.statusText=M.statusText||X,this.url=M.url||null,this.ok=this.status>=200&&this.status<300}}class U extends j{constructor(M={}){super(M),this.type=fe.ResponseHeader}clone(M={}){return new U({headers:M.headers||this.headers,status:void 0!==M.status?M.status:this.status,statusText:M.statusText||this.statusText,url:M.url||this.url||void 0})}}class H extends j{constructor(M={}){super(M),this.type=fe.Response,this.body=void 0!==M.body?M.body:null}clone(M={}){return new H({body:void 0!==M.body?M.body:this.body,headers:M.headers||this.headers,status:void 0!==M.status?M.status:this.status,statusText:M.statusText||this.statusText,url:M.url||this.url||void 0})}}class G extends j{constructor(M){super(M,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${M.url||"(unknown url)"}`:`Http failure response for ${M.url||"(unknown url)"}: ${M.status} ${M.statusText}`,this.error=M.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ie(z,M){return{body:M,headers:z.headers,context:z.context,observe:z.observe,params:z.params,reportProgress:z.reportProgress,responseType:z.responseType,withCredentials:z.withCredentials}}let V=(()=>{class z{constructor(O){this.handler=O}request(O,X,W={}){let De;if(O instanceof _e)De=O;else{let ke,Dt;ke=W.headers instanceof Q?W.headers:new Q(W.headers),W.params&&(Dt=W.params instanceof Z?W.params:new Z({fromObject:W.params})),De=new _e(O,X,void 0!==W.body?W.body:null,{headers:ke,context:W.context,params:Dt,reportProgress:W.reportProgress,responseType:W.responseType||"json",withCredentials:W.withCredentials})}const he=(0,ee.of)(De).pipe((0,se.b)(ke=>this.handler.handle(ke)));if(O instanceof _e||"events"===W.observe)return he;const me=he.pipe((0,Ne.h)(ke=>ke instanceof H));switch(W.observe||"body"){case"body":switch(De.responseType){case"arraybuffer":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&!(ke.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return ke.body}));case"blob":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&!(ke.body instanceof Blob))throw new Error("Response is not a Blob.");return ke.body}));case"text":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&"string"!=typeof ke.body)throw new Error("Response is not a string.");return ke.body}));default:return me.pipe((0,oe.U)(ke=>ke.body))}case"response":return me;default:throw new Error(`Unreachable: unhandled observe type ${W.observe}}`)}}delete(O,X={}){return this.request("DELETE",O,X)}get(O,X={}){return this.request("GET",O,X)}head(O,X={}){return this.request("HEAD",O,X)}jsonp(O,X){return this.request("JSONP",O,{params:(new Z).append(X,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(O,X={}){return this.request("OPTIONS",O,X)}patch(O,X,W={}){return this.request("PATCH",O,ie(W,X))}post(O,X,W={}){return this.request("POST",O,ie(W,X))}put(O,X,W={}){return this.request("PUT",O,ie(W,X))}}return z.\u0275fac=function(O){return new(O||z)(P.LFG(Me))},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pe{constructor(M,O){this.next=M,this.interceptor=O}handle(M){return this.interceptor.intercept(M,this.next)}}const st=new P.OlP("HTTP_INTERCEPTORS");let Ae=(()=>{class z{intercept(O,X){return X.handle(O)}}return z.\u0275fac=function(O){return new(O||z)},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Xe=/^\)\]\}',?\n/;let jn=(()=>{class z{constructor(O){this.xhrFactory=O}handle(O){if("JSONP"===O.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new te.y(X=>{const W=this.xhrFactory.build();if(W.open(O.method,O.urlWithParams),O.withCredentials&&(W.withCredentials=!0),O.headers.forEach((et,$e)=>W.setRequestHeader(et,$e.join(","))),O.headers.has("Accept")||W.setRequestHeader("Accept","application/json, text/plain, */*"),!O.headers.has("Content-Type")){const et=O.detectContentTypeHeader();null!==et&&W.setRequestHeader("Content-Type",et)}if(O.responseType){const et=O.responseType.toLowerCase();W.responseType="json"!==et?et:"text"}const De=O.serializeBody();let he=null;const me=()=>{if(null!==he)return he;const et=1223===W.status?204:W.status,$e=W.statusText||"OK",He=new Q(W.getAllResponseHeaders()),xe=function(z){return"responseURL"in z&&z.responseURL?z.responseURL:/^X-Request-URL:/m.test(z.getAllResponseHeaders())?z.getResponseHeader("X-Request-URL"):null}(W)||O.url;return he=new U({headers:He,status:et,statusText:$e,url:xe}),he},ke=()=>{let{headers:et,status:$e,statusText:He,url:xe}=me(),Et=null;204!==$e&&(Et=void 0===W.response?W.responseText:W.response),0===$e&&($e=Et?200:0);let mn=$e>=200&&$e<300;if("json"===O.responseType&&"string"==typeof Et){const dn=Et;Et=Et.replace(Xe,"");try{Et=""!==Et?JSON.parse(Et):null}catch(tt){Et=dn,mn&&(mn=!1,Et={error:tt,text:Et})}}mn?(X.next(new H({body:Et,headers:et,status:$e,statusText:He,url:xe||void 0})),X.complete()):X.error(new G({error:Et,headers:et,status:$e,statusText:He,url:xe||void 0}))},Dt=et=>{const{url:$e}=me(),He=new G({error:et,status:W.status||0,statusText:W.statusText||"Unknown Error",url:$e||void 0});X.error(He)};let Lt=!1;const Tt=et=>{Lt||(X.next(me()),Lt=!0);let $e={type:fe.DownloadProgress,loaded:et.loaded};et.lengthComputable&&($e.total=et.total),"text"===O.responseType&&!!W.responseText&&($e.partialText=W.responseText),X.next($e)},Ct=et=>{let $e={type:fe.UploadProgress,loaded:et.loaded};et.lengthComputable&&($e.total=et.total),X.next($e)};return W.addEventListener("load",ke),W.addEventListener("error",Dt),W.addEventListener("timeout",Dt),W.addEventListener("abort",Dt),O.reportProgress&&(W.addEventListener("progress",Tt),null!==De&&W.upload&&W.upload.addEventListener("progress",Ct)),W.send(De),X.next({type:fe.Sent}),()=>{W.removeEventListener("error",Dt),W.removeEventListener("abort",Dt),W.removeEventListener("load",ke),W.removeEventListener("timeout",Dt),O.reportProgress&&(W.removeEventListener("progress",Tt),null!==De&&W.upload&&W.upload.removeEventListener("progress",Ct)),W.readyState!==W.DONE&&W.abort()}})}}return z.\u0275fac=function(O){return new(O||z)(P.LFG(v.JF))},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nr=new P.OlP("XSRF_COOKIE_NAME"),wt=new P.OlP("XSRF_HEADER_NAME");class rr{}let qt=(()=>{class z{constructor(O,X,W){this.doc=O,this.platform=X,this.cookieName=W,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const O=this.doc.cookie||"";return O!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(O,this.cookieName),this.lastCookieString=O),this.lastToken}}return z.\u0275fac=function(O){return new(O||z)(P.LFG(v.K0),P.LFG(P.Lbi),P.LFG(nr))},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})(),Cn=(()=>{class z{constructor(O,X){this.tokenService=O,this.headerName=X}intercept(O,X){const W=O.url.toLowerCase();if("GET"===O.method||"HEAD"===O.method||W.startsWith("http://")||W.startsWith("https://"))return X.handle(O);const De=this.tokenService.getToken();return null!==De&&!O.headers.has(this.headerName)&&(O=O.clone({headers:O.headers.set(this.headerName,De)})),X.handle(O)}}return z.\u0275fac=function(O){return new(O||z)(P.LFG(rr),P.LFG(wt))},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})(),St=(()=>{class z{constructor(O,X){this.backend=O,this.injector=X,this.chain=null}handle(O){if(null===this.chain){const X=this.injector.get(st,[]);this.chain=X.reduceRight((W,De)=>new Pe(W,De),this.backend)}return this.chain.handle(O)}}return z.\u0275fac=function(O){return new(O||z)(P.LFG(de),P.LFG(P.zs3))},z.\u0275prov=P.Yz7({token:z,factory:z.\u0275fac}),z})(),Nt=(()=>{class z{static disable(){return{ngModule:z,providers:[{provide:Cn,useClass:Ae}]}}static withOptions(O={}){return{ngModule:z,providers:[O.cookieName?{provide:nr,useValue:O.cookieName}:[],O.headerName?{provide:wt,useValue:O.headerName}:[]]}}}return z.\u0275fac=function(O){return new(O||z)},z.\u0275mod=P.oAB({type:z}),z.\u0275inj=P.cJS({providers:[Cn,{provide:st,useExisting:Cn,multi:!0},{provide:rr,useClass:qt},{provide:nr,useValue:"XSRF-TOKEN"},{provide:wt,useValue:"X-XSRF-TOKEN"}]}),z})(),lt=(()=>{class z{}return z.\u0275fac=function(O){return new(O||z)},z.\u0275mod=P.oAB({type:z}),z.\u0275inj=P.cJS({providers:[V,{provide:Me,useClass:St},jn,{provide:de,useExisting:jn}],imports:[[Nt.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,587:(Ke,le,S)=>{S.d(le,{deG:()=>Yr,tb:()=>Xp,AFp:()=>qp,ip1:()=>Nl,CZH:()=>Ei,hGG:()=>G0,z2F:()=>_s,sBO:()=>C0,Sil:()=>kl,_Vd:()=>gs,EJc:()=>tg,SBq:()=>ms,qLn:()=>ts,vpe:()=>Cr,tBr:()=>Qi,XFs:()=>M,OlP:()=>ut,zs3:()=>Ln,ZZ4:()=>Ta,aQg:()=>Aa,soG:()=>Ia,YKP:()=>up,h0i:()=>vi,PXZ:()=>h0,R0b:()=>Tn,FiY:()=>co,Lbi:()=>Jp,g9A:()=>Zp,Qsj:()=>KC,FYo:()=>op,JOm:()=>gr,tp0:()=>Yo,Rgc:()=>Cs,dDg:()=>og,GfV:()=>ip,s_b:()=>_a,ifc:()=>Tt,eFA:()=>ag,G48:()=>D0,_c5:()=>j0,VLi:()=>l0,c2e:()=>eg,zSh:()=>zu,wAp:()=>Be,vHH:()=>Ee,cg1:()=>fl,kL8:()=>Ah,dqk:()=>xe,sIi:()=>as,CqO:()=>Of,QGY:()=>sl,F4k:()=>Pf,RDi:()=>Ai,AaK:()=>ne,TTD:()=>to,xp6:()=>ud,uIk:()=>Zu,Tol:()=>nh,Suo:()=>Tp,Xpm:()=>bt,lG2:()=>En,Yz7:()=>wt,cJS:()=>qt,oAB:()=>ir,Yjl:()=>Mr,Y36:()=>ls,_UZ:()=>Af,qZA:()=>il,TgZ:()=>ol,LFG:()=>nn,$8M:()=>ze,$Z:()=>Tf,NdJ:()=>al,CRH:()=>Ap,kcU:()=>Bs,O4$:()=>js,oxw:()=>kf,ALo:()=>Dp,lcZ:()=>Cp,xi3:()=>Ep,Q6J:()=>nl,VKq:()=>fp,kEZ:()=>hp,iGM:()=>Sp,MAs:()=>yf,LSH:()=>iu,kYT:()=>br,YNc:()=>mf,W1O:()=>Op,_uU:()=>lh,Oqu:()=>dl,hij:()=>pa});var v=S(189),P=S(421),ee=S(515),te=S(669),se=S(76),oe=S(579),Me=S(727),de=S(306),Q=S(99);
/**
       * @license Angular v13.1.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function B(e){for(let t in e)if(e[t]===B)return t;throw Error("Could not find renamed property on target object.")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ne(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ne).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ge(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ge=B({__forward_ref__:B});function Ie(e){return e.__forward_ref__=Ie,e.toString=function(){return ne(this())},e}function Z(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(Ge)&&e.__forward_ref__===Ie}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ee extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function re(e){return"string"==typeof e?e:null==e?"":String(e)}function qe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():re(e)}function U(e,t){const n=t?` in ${t}`:"";throw new Ee("201",`No provider for ${qe(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ht(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function qt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Cn(e){return St(e,lt)||St(e,Bn)}function St(e,t){return e.hasOwnProperty(t)?e[t]:null}function Nt(e){return e&&(e.hasOwnProperty(Bt)||e.hasOwnProperty(z))?e[Bt]:null}const lt=B({\u0275prov:B}),Bt=B({\u0275inj:B}),Bn=B({ngInjectableDef:B}),z=B({ngInjectorDef:B});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var M=(()=>((M=M||{})[M.Default=0]="Default",M[M.Host=1]="Host",M[M.Self=2]="Self",M[M.SkipSelf=4]="SkipSelf",M[M.Optional=8]="Optional",M))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let O;function W(e){const t=O;return O=e,t}function De(e,t,n){const r=Cn(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&M.Optional?null:void 0!==t?t:void U(ne(e),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function me(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ke=(()=>((ke=ke||{})[ke.OnPush=0]="OnPush",ke[ke.Default=1]="Default",ke))(),Tt=(()=>{return(e=Tt||(Tt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Tt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ct="undefined"!=typeof globalThis&&globalThis,et="undefined"!=typeof window&&window,$e="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,xe=Ct||"undefined"!=typeof global&&global||et||$e,dn={},tt=[],Er=B({\u0275cmp:B}),_r=B({\u0275dir:B}),$t=B({\u0275pipe:B}),Un=B({\u0275mod:B}),Zt=B({\u0275fac:B}),Hn=B({__NG_ELEMENT_ID__:B});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Jr=0;function bt(e){return me(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===ke.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||tt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Tt.Emulated,id:"c",styles:e.styles||tt,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Jr++,r.inputs=Rn(e.inputs,n),r.outputs=Rn(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(wr):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(Pr):null,r})}function wr(e){return At(e)||function(e){return e[_r]||null}(e)}function Pr(e){return function(e){return e[$t]||null}(e)}const or={};function ir(e){return me(()=>{const t={type:e.type,bootstrap:e.bootstrap||tt,declarations:e.declarations||tt,imports:e.imports||tt,exports:e.exports||tt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(or[e.id]=e.type),t})}function br(e,t){return me(()=>{const n=T(e,!0);n.declarations=t.declarations||tt,n.imports=t.imports||tt,n.exports=t.exports||tt})}function Rn(e,t){if(null==e)return dn;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const En=bt;function Mr(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function At(e){return e[Er]||null}function T(e,t){const n=e[Un]||null;if(!n&&!0===t)throw new Error(`Type ${ne(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function on(e){return Array.isArray(e)&&"object"==typeof e[1]}function sn(e){return Array.isArray(e)&&!0===e[1]}function yo(e){return 0!=(8&e.flags)}function xt(e){return 2==(2&e.flags)}function Sr(e){return 1==(1&e.flags)}function fn(e){return null!==e.template}function Or(e){return 0!=(512&e[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gn(e,t){return e.hasOwnProperty(Zt)?e[Zt]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kr{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function to(){return no}function no(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ss),So}function So(){const e=Si(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===dn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ss(e,t,n,r){const o=Si(e)||function(e,t){return e[Ii]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:dn,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new kr(d&&d.currentValue,t,s===dn),e[r]=t}to.ngInherit=!0;const Ii="__ngSimpleChanges__";function Si(e){return e[Ii]||null}const ro="http://www.w3.org/2000/svg";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let xo;function Ai(e){xo=e}function h(e){return!!e.listen}const E={createRenderer:(e,t)=>void 0!==xo?xo:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function k(e){for(;Array.isArray(e);)e=e[0];return e}function ft(e,t){return k(t[e])}function Je(e,t){return k(t[e.index])}function Ve(e,t){return e.data[t]}function vt(e,t){return e[t]}function Ze(e,t){const n=t[e];return on(n)?n:n[0]}function Rt(e){return 4==(4&e[2])}function vn(e){return 128==(128&e[2])}function hn(e,t){return null==t?null:e[t]}function Yn(e){e[18]=0}function jr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Oe={lFrame:Ns(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function io(){return Oe.bindingsEnabled}function q(){return Oe.lFrame.lView}function rt(){return Oe.lFrame.tView}function kt(){let e=Po();for(;null!==e&&64===e.type;)e=e.parent;return e}function Po(){return Oe.lFrame.currentTNode}function bn(e,t){const n=Oe.lFrame;n.currentTNode=e,n.isParent=t}function Br(){return Oe.lFrame.isParent}function Fo(){return Oe.isInCheckNoChangesMode}function ur(e){Oe.isInCheckNoChangesMode=e}function tn(){const e=Oe.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Hr(){return Oe.lFrame.bindingIndex++}function Oa(e,t){const n=Oe.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ri(t)}function Ri(e){Oe.lFrame.currentDirectiveIndex=e}function Ps(){return Oe.lFrame.currentQueryIndex}function No(e){Oe.lFrame.currentQueryIndex=e}function Na(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Os(e,t,n){if(n&M.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&M.Host||(o=Na(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Oe.lFrame=Fs();return r.currentTNode=t,r.lView=e,!0}function Lo(e){const t=Fs(),n=e[1];Oe.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Fs(){const e=Oe.lFrame,t=null===e?null:e.child;return null===t?Ns(e):t}function Ns(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Oi(){const e=Oe.lFrame;return Oe.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const La=Oi;function ao(){const e=Oi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Qt(){return Oe.lFrame.selectedIndex}function lr(e){Oe.lFrame.selectedIndex=e}function Mt(){const e=Oe.lFrame;return Ve(e.tView,e.selectedIndex)}function js(){Oe.lFrame.currentNamespace=ro}function Bs(){Oe.lFrame.currentNamespace=null}function ko(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:y}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=y&&(e.destroyHooks||(e.destroyHooks=[])).push(n,y)}}function Vr(e,t,n){Us(e,t,3,n)}function uo(e,t,n,r){(3&e[2])===n&&Us(e,t,n,r)}function Ni(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Us(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(Ua(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function Ua(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $r{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Bo(e,t,n){const r=h(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];Uo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function Vs(e){return 3===e||4===e||6===e}function Uo(e){return 64===e.charCodeAt(0)}function Ho(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||ji(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function ji(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bi(e){return-1!==e}function dr(e){return 32767&e}function Dn(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Vo=!0;function $o(e){const t=Vo;return Vo=e,t}let $a=0;function zr(e,t){const n=Hi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Ui(r.data,e),Ui(t,null),Ui(r.blueprint,null));const o=zo(e,t),i=e.injectorIndex;if(Bi(o)){const s=dr(o),l=Dn(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function Ui(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Hi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function zo(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Gr(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Hn)&&(r=n[Hn]),null==r&&(r=n[Hn]=$a++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Gs(e,t,n){if(n&M.Optional)return e;U(t,"NodeInjector")}function Vi(e,t,n,r){if(n&M.Optional&&void 0===r&&(r=null),0==(n&(M.Self|M.Host))){const o=e[9],i=W(void 0);try{return o?o.get(t,r,n&M.Optional):De(t,r,n&M.Optional)}finally{W(i)}}return Gs(r,t,n)}function Ws(e,t,n,r=M.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Hn)?e[Hn]:void 0;return"number"==typeof t?t>=0?255&t:c:t}(n);if("function"==typeof i){if(!Os(t,e,r))return r&M.Host?Gs(o,n,r):Vi(t,n,r,o);try{const s=i(r);if(null!=s||r&M.Optional)return s;U(n)}finally{La()}}else if("number"==typeof i){let s=null,l=Hi(e,t),d=-1,m=r&M.Host?t[16][6]:null;for((-1===l||r&M.SkipSelf)&&(d=-1===l?zo(e,t):t[l+8],-1!==d&&w(r,!1)?(s=t[1],l=dr(d),t=Dn(d,t)):l=-1);-1!==l;){const y=t[1];if(D(i,l,y.data)){const _=u(l,t,n,s,r,m);if(_!==Wa)return _}d=t[l+8],-1!==d&&w(r,t[1].data[l+8]===m)&&D(i,l,t)?(s=y,l=dr(d),t=Dn(d,t)):l=-1}}}return Vi(t,n,r,o)}const Wa={};function c(){return new I(kt(),q())}function u(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],y=a(l,s,n,null==r?xt(l)&&Vo:r!=s&&0!=(3&l.type),o&M.Host&&i===l);return null!==y?f(t,s,y,l):Wa}function a(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,y=i>>20,x=o?l+y:e.directiveEnd;for(let F=r?l:l+y;F<x;F++){const $=s[F];if(F<d&&n===$||F>=d&&$.type===n)return F}if(o){const F=s[d];if(F&&fn(F)&&F.type===n)return d}return null}function f(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof $r}(o)){const s=o;s.resolving&&function(e,t){throw new Ee("200",`Circular dependency in DI detected for ${e}`)}(qe(i[n]));const l=$o(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?W(s.injectImpl):null;Os(e,r,M.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=no(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&W(d),$o(l),s.resolving=!1,La()}}return o}function D(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function w(e,t){return!(e&M.Self||e&M.Host&&t)}class I{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Ws(this._tNode,this._lView,t,r,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ze(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Vs(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(kt(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ot="__parameters__";function an(e,t,n){return me(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,m,y){const _=d.hasOwnProperty(ot)?d[ot]:Object.defineProperty(d,ot,{value:[]})[ot];for(;_.length<=y;)_.push(null);return(_[y]=_[y]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ut{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=wt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yr=new ut("AnalyzeForEntryComponents");function Nn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Nn(r,t)):t!==e&&t.push(r)}return t}function fr(e,t){e.forEach(n=>Array.isArray(n)?fr(n,t):t(n))}function sc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ys(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function In(e,t,n){let r=Wo(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Ka(e,t){const n=Wo(e,t);if(n>=0)return e[1|n]}function Wo(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Wi={},qa="__NG_DI_FLAG__",Qs="ngTempTokenPath",Fg=/\n/gm,dc="__source",Lg=B({provide:String,useValue:B});let Yi;function fc(e){const t=Yi;return Yi=e,t}function kg(e,t=M.Default){if(void 0===Yi)throw new Error("inject() must be called from an injection context");return null===Yi?De(e,void 0,t):Yi.get(e,t&M.Optional?null:void 0,t)}function nn(e,t=M.Default){return(O||kg)(Z(e),t)}function Za(e){const t=[];for(let n=0;n<e.length;n++){const r=Z(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=M.Default;for(let s=0;s<r.length;s++){const l=r[s],d=jg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(nn(o,i))}else t.push(nn(r))}return t}function Ki(e,t){return e[qa]=t,e.prototype[qa]=t,e}function jg(e){return e[qa]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qi=Ki(an("Inject",e=>({token:e})),-1),co=Ki(an("Optional"),8),Yo=Ki(an("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ec{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Kr(e){return e instanceof Ec?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sm=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,am=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Vt=(()=>((Vt=Vt||{})[Vt.NONE=0]="NONE",Vt[Vt.HTML=1]="HTML",Vt[Vt.STYLE=2]="STYLE",Vt[Vt.SCRIPT=3]="SCRIPT",Vt[Vt.URL=4]="URL",Vt[Vt.RESOURCE_URL=5]="RESOURCE_URL",Vt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iu(e){const t=function(){const e=q();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Vt.URL,e)||"":function(e,t){const n=function(e){return e instanceof Ec&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Kr(e):function(e){return(e=String(e)).match(sm)||e.match(am)?e:"unsafe:"+e}(re(e))}const Rc="__ngContext__";function un(e,t){e[Rc]=t}function au(e){const t=function(e){return e[Rc]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function lu(e){return e.ngOriginalError}function Rm(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ts{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=(e=t)&&e.ngErrorLogger||Rm;var e;r(this._console,"ERROR",t),n&&r(this._console,"ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&lu(t);for(;n&&lu(n);)n=lu(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Lc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(xe))();function pr(e){return e instanceof Function?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var gr=(()=>((gr=gr||{})[gr.Important=1]="Important",gr[gr.DashCase=2]="DashCase",gr))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function du(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ns(e){const t=e[3];return sn(t)?t[3]:t}function fu(e){return Hc(e[13])}function hu(e){return Hc(e[4])}function Hc(e){for(;null!==e&&!sn(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zo(e,t,n,r,o){if(null!=r){let i,s=!1;sn(r)?i=r:on(r)&&(s=!0,r=r[0]);const l=k(r);0===e&&null!==n?null==o?Yc(t,n,l):fo(t,n,l,o||null,!0):1===e&&null!==n?fo(t,n,l,o||null,!0):2===e?function(e,t,n){const r=ta(e,t);r&&function(e,t,n,r){h(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==k(n)&&Zo(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];rs(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function gu(e,t,n){return h(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function $c(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,jr(o,-1)),n.splice(r,1)}function mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&$c(o,r),t>0&&(e[n-1][4]=r[4]);const i=Ys(e,10+t);!function(e,t){rs(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function zc(e,t){if(!(256&t[2])){const n=t[11];h(n)&&n.destroyNode&&rs(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yu(e[1],e);for(;t;){let n=null;if(on(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)on(t)&&yu(t[1],t),t=t[3];null===t&&(t=e),on(t)&&yu(t[1],t),n=t&&t[4]}t=n}}(t)}}function yu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof $r)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):k(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&h(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&sn(t[3])){n!==t[3]&&$c(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function Gc(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Tt.None||o===Tt.Emulated)return null}return Je(r,n)}(e,t.parent,n)}function fo(e,t,n,r,o){h(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function Yc(e,t,n){h(e)?e.appendChild(t,n):t.appendChild(n)}function Kc(e,t,n,r,o){null!==r?fo(e,t,n,r,o):Yc(e,t,n)}function ta(e,t){return h(e)?e.parentNode(t):t.parentNode}let Zc=function(e,t,n){return 40&e.type?Je(e,n):null};function na(e,t,n,r){const o=Gc(e,r,t),i=t[11],l=function(e,t,n){return Zc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Kc(i,o,n[d],l,!1);else Kc(i,o,n,l,!1)}function ra(e,t){if(null!==t){const n=t.type;if(3&n)return Je(t,e);if(4&n)return Du(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return ra(e,r);{const o=e[t.index];return sn(o)?Du(-1,o):k(o)}}if(32&n)return du(t,e)()||k(e[t.index]);{const r=Xc(e,t);return null!==r?Array.isArray(r)?r[0]:ra(ns(e[16]),r):ra(e,t.next)}}return null}function Xc(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Du(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return ra(r,o)}return t[7]}function Cu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&un(k(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)Cu(e,t,n.child,r,o,i,!1),Zo(t,e,o,l,i);else if(32&d){const m=du(n,r);let y;for(;y=m();)Zo(t,e,o,y,i);Zo(t,e,o,l,i)}else 16&d?td(e,t,r,n,o,i):Zo(t,e,o,l,i);n=s?n.projectionNext:n.next}}function rs(e,t,n,r,o,i){Cu(n,r,e.firstChild,t,o,i,!1)}function td(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)Zo(t,e,o,d[m],i);else Cu(e,t,d,s[3],o,i,!0)}function nd(e,t,n){h(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Eu(e,t,n){h(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rd(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const od="ng-template";function iy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==rd(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function id(e){return 4===e.type&&e.value!==od}function sy(e,t,n){return t===(4!==e.type||n?e.value:od)}function ay(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(Vs(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!sy(e,d,n)||""===d&&1===t.length){if(qn(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!iy(e.attrs,m,n)){if(qn(r))return!1;s=!0}continue}const _=uy(8&r?"class":d,o,id(e),n);if(-1===_){if(qn(r))return!1;s=!0;continue}if(""!==m){let x;x=_>i?"":o[_+1].toLowerCase();const F=8&r?x:null;if(F&&-1!==rd(F,m,0)||2&r&&m!==x){if(qn(r))return!1;s=!0}}}}else{if(!s&&!qn(r)&&!qn(d))return!1;if(s&&qn(d))continue;s=!1,r=d|1&r}}return qn(r)||s}function qn(e){return 0==(1&e)}function uy(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function sd(e,t,n=!1){for(let r=0;r<t.length;r++)if(ay(e,t[r],n))return!0;return!1}function ad(e,t){return e?":not("+t.trim()+")":t}function hy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!qn(s)&&(t+=ad(i,o),o=""),r=s,i=i||!qn(r);n++}return""!==o&&(t+=ad(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qe={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ud(e){ld(rt(),q(),Qt()+e,Fo())}function ld(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&Vr(t,i,n)}else{const i=e.preOrderHooks;null!==i&&uo(t,i,0,n)}lr(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oa(e,t){return e<<17|t<<2}function Zn(e){return e>>17&32767}function _u(e){return 2|e}function xr(e){return(131068&e)>>2}function wu(e,t){return-131069&e|t<<2}function bu(e){return 1|e}function Cd(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];No(o),s.contentQueries(2,t[i],i)}}}function os(e,t,n,r,o,i,s,l,d,m){const y=t.blueprint.slice();return y[0]=o,y[2]=140|r,Yn(y),y[3]=y[15]=e,y[8]=n,y[10]=s||e&&e[10],y[11]=l||e&&e[11],y[12]=d||e&&e[12]||null,y[9]=m||e&&e[9]||null,y[6]=i,y[16]=2==t.type?e[16]:y,y}function Jo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=Po(),s=Br(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),Oe.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Oe.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return bn(i,!0),i}function Xo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function is(e,t,n){Lo(t);try{const r=e.viewQuery;null!==r&&Vu(1,r,n);const o=e.template;null!==o&&Ed(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Cd(e,t),e.staticViewQueries&&Vu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Qy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,ao()}}function ei(e,t,n,r){const o=t[2];if(256==(256&o))return;Lo(t);const i=Fo();try{Yn(t),function(e){Oe.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Ed(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&Vr(t,m,null)}else{const m=e.preOrderHooks;null!==m&&uo(t,m,0,null),Ni(t,0)}if(function(e){for(let t=fu(e);null!==t;t=hu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&jr(i,1),o[2]|=1024}}}(t),function(e){for(let t=fu(e);null!==t;t=hu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];vn(r)&&ei(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Cd(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&Vr(t,m)}else{const m=e.contentHooks;null!==m&&uo(t,m,1),Ni(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)lr(~o);else{const i=o,s=n[++r],l=n[++r];Oa(s,i),l(2,t[i])}}}finally{lr(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Ky(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Vu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&Vr(t,m)}else{const m=e.viewHooks;null!==m&&uo(t,m,2),Ni(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,jr(t[3],-1))}finally{ao()}}function Ay(e,t,n,r){const o=t[10],i=!Fo(),s=Rt(t);try{i&&!s&&o.begin&&o.begin(),s&&is(e,t,r),ei(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Ed(e,t,n,r,o){const i=Qt(),s=2&r;try{lr(-1),s&&t.length>20&&ld(e,t,20,Fo()),n(r,o)}finally{lr(i)}}function Fu(e,t,n){!io()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||zr(n,t),un(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=fn(d);m&&$y(t,n,d);const y=f(t,e,l,n);un(y,t),null!==s&&zy(0,l-o,y,d,0,s),m&&(Ze(n.index,t)[8]=y)}}(e,t,n,Je(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=Oe.lFrame.currentDirectiveIndex;try{lr(s);for(let d=r;d<o;d++){const m=e.data[d],y=t[d];Ri(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&xd(m,y)}}finally{lr(-1),Ri(l)}}(e,t,n))}function Nu(e,t,n=Je){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function wd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=aa(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function aa(e,t,n,r,o,i,s,l,d,m){const y=20+r,_=y+o,x=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Qe);return n}(y,_),F="function"==typeof m?m():m;return x[1]={type:e,blueprint:x,template:n,queries:null,viewQuery:l,declTNode:t,data:x.slice().fill(null,y),bindingStartIndex:y,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:F,incompleteFirstPass:!1}}function Id(e,t,n,r){const o=Ld(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&kd(e).push(r,o.length-1))}function Sd(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Lu(e,t,n,r){let o=!1;if(io()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];sd(n,s.selectors,!1)&&(o||(o=[]),Gr(zr(n,t),e,s.type),fn(s)?(Rd(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Pd(n,e.data.length,i.length);for(let y=0;y<i.length;y++){const _=i[y];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=Xo(e,t,i.length,null);for(let y=0;y<i.length;y++){const _=i[y];n.mergedAttrs=Ho(n.mergedAttrs,_.hostAttrs),Od(e,n,t,m,_),Vy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const x=_.type.prototype;!l&&(x.ngOnChanges||x.ngOnInit||x.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(x.ngOnChanges||x.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const y=o[m],_=y.inputs,x=null===i||id(t)?null:Gy(_,i);s.push(x),l=Sd(_,m,l),d=Sd(y.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Ee("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=Ho(n.mergedAttrs,n.attrs),o}function Ad(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function xd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Rd(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Vy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;fn(t)&&(n[""]=e)}}function Pd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Od(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Gn(o.type)),s=new $r(i,fn(o),null);e.blueprint[r]=s,n[r]=s,Ad(e,t,0,r,Xo(e,n,o.hostVars,Qe),o)}function $y(e,t,n){const r=Je(t,e),o=wd(n),i=e[10],s=ua(e,os(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function mr(e,t,n,r,o,i){const s=Je(e,t);!function(e,t,n,r,o,i,s){if(null==i)h(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?re(i):s(i,r||"",o);h(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function zy(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],y=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,y):n[y]=_}}}function Gy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Fd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Ky(e,t){const n=Ze(t,e);if(vn(n)){const r=n[1];80&n[2]?ei(r,n,r.template,n[8]):n[5]>0&&ju(n)}}function ju(e){for(let r=fu(e);null!==r;r=hu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];ei(s,i,s.template,i[8])}else i[5]>0&&ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Ze(n[r],e);vn(o)&&o[5]>0&&ju(o)}}function Qy(e,t){const n=Ze(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),is(r,n,n[8])}function ua(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Bu(e){for(;e;){e[2]|=64;const t=ns(e);if(Or(e)&&!t)return e;e=t}return null}function Hu(e,t,n){const r=t[10];r.begin&&r.begin();try{ei(e,t,e.template,n)}catch(o){throw Bd(t,o),o}finally{r.end&&r.end()}}function Nd(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=au(n),o=r[1];Ay(o,r,o.template,n)}}(e[8])}function Vu(e,t,n){No(0),t(e,n)}const ev=(()=>Promise.resolve(null))();function Ld(e){return e[7]||(e[7]=[])}function kd(e){return e.cleanup||(e.cleanup=[])}function Bd(e,t){const n=e[9],r=n?n.get(ts,null):null;r&&r.handleError(t)}function Ud(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function Rr(e,t,n){const r=ft(t,e);!function(e,t,n){h(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function la(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=ge(o,l):2==i&&(r=ge(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $u=new ut("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hd{get(t,n=Wi){if(n===Wi){const r=new Error(`NullInjectorError: No provider for ${ne(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zu=new ut("Set Injector scope."),ss={},rv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Gu;function Vd(){return void 0===Gu&&(Gu=new Hd),Gu}function $d(e,t=null,n=null,r){const o=zd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function zd(e,t=null,n=null,r){return new ov(e,n,t||Vd(),r)}class ov{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&fr(n,l=>this.processProvider(l,t,n)),fr([t],l=>this.processInjectorType(l,[],i)),this.records.set($u,ti(void 0,this));const s=this.records.get(zu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:ne(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Wi,r=M.Default){this.assertNotDestroyed();const o=fc(this),i=W(void 0);try{if(!(r&M.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof ut)&&Cn(t);l=d&&this.injectableDefInScope(d)?ti(Wu(t),ss):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&M.Self?Vd():this.parent).get(t,n=r&M.Optional&&n===Wi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Qs]=s[Qs]||[]).unshift(ne(t)),o)throw s;return function(e,t,n,r){const o=e[Qs];throw t[dc]&&o.unshift(t[dc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=ne(t);if(Array.isArray(t))o=t.map(ne).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):ne(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Fg,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Qs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{W(i),fc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(ne(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=Z(t)))return!1;let o=Nt(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=Nt(i)),null==o)return!1;if(null!=o.imports&&!l){let y;r.push(s);try{fr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===y&&(y=[]),y.push(_))})}finally{}if(void 0!==y)for(let _=0;_<y.length;_++){const{ngModule:x,providers:F}=y[_];fr(F,$=>this.processProvider($,x,F||tt))}}this.injectorDefTypes.add(s);const d=Gn(s)||(()=>new s);this.records.set(s,ti(d,ss));const m=o.providers;if(null!=m&&!l){const y=t;fr(m,_=>this.processProvider(_,y,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=ni(t=Z(t))?t:Z(t&&t.provide);const i=(e=t,Wd(e)?ti(void 0,e.useValue):ti(function(e,t,n){let r;if(ni(e)){const o=Z(e);return Gn(o)||Wu(o)}if(Wd(e))r=()=>Z(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Za(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>nn(Z(e.useExisting));else{const o=Z(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return Gn(o)||Wu(o);r=()=>new o(...Za(e.deps))}return r}(e),ss));var e;if(ni(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=ti(void 0,ss,!0),s.factory=()=>Za(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===ss&&(n.value=rv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=Z(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Wu(e){const t=Cn(e),n=null!==t?t.factory:Gn(e);if(null!==n)return n;if(e instanceof ut)throw new Error(`Token ${ne(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${ne(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[lt]||e[Bn]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function ti(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Wd(e){return null!==e&&"object"==typeof e&&Lg in e}function ni(e){return"function"==typeof e}let Ln=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return $d({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return $d({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Wi,e.NULL=new Hd,e.\u0275prov=wt({token:e,providedIn:"any",factory:()=>nn($u)}),e.__NG_ELEMENT_ID__=-1,e})();function Cv(e,t){ko(au(e)[1],kt())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ca=null;function ri(){if(!ca){const e=xe.Symbol;if(e&&e.iterator)ca=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ca=r)}}}return ca}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function as(e){return!!qu(e)&&(Array.isArray(e)||!(e instanceof Map)&&ri()in e)}function qu(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yr(e,t,n){return e[t]=n}function ln(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function ho(e,t,n,r){const o=ln(e,t,n);return ln(e,t+1,r)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(e,t,n,r){const o=q();return ln(o,Hr(),t)&&(rt(),mr(Mt(),o,e,t,n,r)),Zu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mf(e,t,n,r,o,i,s,l){const d=q(),m=rt(),y=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,y=Jo(t,e,4,s||null,hn(m,l));Lu(t,n,y,hn(m,d)),ko(t,y);const _=y.tViews=aa(2,y,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,y),_.queries=t.queries.embeddedTView(y)),y}(y,m,d,t,n,r,o,i,s):m.data[y];bn(_,!1);const x=d[11].createComment("");na(m,d,x,_),un(x,d),ua(d,d[y]=Fd(x,d,x,_)),Sr(_)&&Fu(m,d,_),null!=s&&Nu(d,_,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yf(e){return vt(Oe.lFrame.contextLView,20+e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ls(e,t=M.Default){const n=q();return null===n?nn(e,t):Ws(kt(),n,Z(e),t)}function Tf(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n){const r=q();return ln(r,Hr(),t)&&function(e,t,n,r,o,i,s,l){const d=Je(t,n);let y,m=t.inputs;!l&&null!=m&&(y=m[r])?(Ud(e,n,y,r,o),xt(t)&&function(e,t){const n=Ze(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,h(i)?i.setProperty(d,r,o):Uo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(rt(),Mt(),r,e,t,r[11],n,!1),nl}function rl(e,t,n,r,o){const s=o?"class":"style";Ud(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(e,t,n,r){const o=q(),i=rt(),s=20+e,l=o[11],d=o[s]=gu(l,t,Oe.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Jo(t,e,2,o,hn(l,i));return Lu(t,n,m,hn(l,s)),null!==m.attrs&&la(m,m.attrs,!1),null!==m.mergedAttrs&&la(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];bn(m,!0);const y=m.mergedAttrs;null!==y&&Bo(l,d,y);const _=m.classes;null!==_&&Eu(l,d,_);const x=m.styles;null!==x&&nd(l,d,x),64!=(64&m.flags)&&na(i,o,d,m),0===Oe.lFrame.elementDepthCount&&un(d,o),Oe.lFrame.elementDepthCount++,Sr(m)&&(Fu(i,o,m),function(e,t,n){if(yo(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Nu(o,m)}function il(){let e=kt();Br()?Oe.lFrame.isParent=!1:(e=e.parent,bn(e,!1));const t=e;Oe.lFrame.elementDepthCount--;const n=rt();n.firstCreatePass&&(ko(n,e),yo(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&rl(n,t,q(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rl(n,t,q(),t.stylesWithoutHost,!1)}function Af(e,t,n,r){ol(e,t,n,r),il()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sl(e){return!!e&&"function"==typeof e.then}function Pf(e){return!!e&&"function"==typeof e.subscribe}const Of=Pf;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function al(e,t,n,r){const o=q(),i=rt(),s=kt();return function(e,t,n,r,o,i,s,l){const d=Sr(r),y=e.firstCreatePass&&kd(e),_=t[8],x=Ld(t);let F=!0;if(3&r.type||l){const pe=Je(r,t),be=l?l(pe):pe,K=x.length,Fe=l?nt=>l(k(nt[r.index])):r.index;if(h(n)){let nt=null;if(!l&&d&&(nt=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==nt)(nt.__ngLastListenerFn__||nt).__ngNextListenerFn__=i,nt.__ngLastListenerFn__=i,F=!1;else{i=ul(r,t,_,i,!1);const gt=n.listen(be,o,i);x.push(i,gt),y&&y.push(o,Fe,K,K+1)}}else i=ul(r,t,_,i,!0),be.addEventListener(o,i,s),x.push(i),y&&y.push(o,Fe,K,s)}else i=ul(r,t,_,i,!1);const $=r.outputs;let ae;if(F&&null!==$&&(ae=$[o])){const pe=ae.length;if(pe)for(let be=0;be<pe;be+=2){const An=t[ae[be]][ae[be+1]].subscribe(i),mo=x.length;x.push(i,An),y&&y.push(o,r.index,mo,-(mo+1))}}}(i,o,o[11],s,e,t,!!n,r),al}function Lf(e,t,n,r){try{return!1!==n(r)}catch(o){return Bd(e,o),!1}}function ul(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?Ze(e.index,t):t;0==(32&t[2])&&Bu(l);let d=Lf(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Lf(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kf(e=1){return function(e){return(Oe.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Oe.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yf(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?Zn(i):xr(i),d=!1;for(;0!==l&&(!1===d||s);){const y=e[l+1];uD(e[l],t)&&(d=!0,e[l+1]=r?bu(y):_u(y)),l=r?Zn(y):xr(y)}d&&(e[n+1]=r?_u(i):bu(i))}function uD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Wo(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Kt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Kf(e){return e.substring(Kt.key,Kt.keyEnd)}function Qf(e,t){const n=Kt.textEnd;return n===t?-1:(t=Kt.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Kt.key=t,n),pi(e,t,n))}function pi(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function nh(e){!function(e,t,n,r){const o=rt(),i=function(e){const t=Oe.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Qt()],s=rh(e,n);uh(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Oe.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=cs(n=cl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cl(o,e,t,n,r),null===i){let d=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==xr(r))return e[Zn(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=cl(null,e,t,d[1],r),d=cs(d,t.attrs,r),function(e,t,n,r){e[Zn(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=cs(r,e[i].hostAttrs,n);return cs(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=Zn(s),d=xr(s);e[r]=n;let y,m=!1;if(Array.isArray(n)){const _=n;y=_[1],(null===y||Wo(_,y)>0)&&(m=!0)}else y=n;if(o)if(0!==d){const x=Zn(e[l+1]);e[r+1]=oa(x,l),0!==x&&(e[x+1]=wu(e[x+1],r)),e[l+1]=function(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=oa(l,0),0!==l&&(e[l+1]=wu(e[l+1],r)),l=r;else e[r+1]=oa(d,0),0===l?l=r:e[d+1]=wu(e[d+1],r),d=r;m&&(e[r+1]=_u(e[r+1])),Yf(e,y,r,!0),Yf(e,y,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Wo(i,t)>=0&&(n[r+1]=bu(n[r+1]))}(t,y,e,r,i),s=oa(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(o,null,i,r);const s=q();if(n!==Qe&&ln(s,i,n)){const l=o.data[Qt()];if(uh(l,r)&&!rh(o,i)){let d=r?l.classesWithoutHost:l.stylesWithoutHost;null!==d&&(n=ge(d,n||"")),rl(o,l,s,n,r)}else!function(e,t,n,r,o,i,s,l){o===Qe&&(o=tt);let d=0,m=0,y=0<o.length?o[0]:null,_=0<i.length?i[0]:null;for(;null!==y||null!==_;){const x=d<o.length?o[d+1]:void 0,F=m<i.length?i[m+1]:void 0;let ae,$=null;y===_?(d+=2,m+=2,x!==F&&($=_,ae=F)):null===_||null!==y&&y<_?(d+=2,$=y):(m+=2,$=_,ae=F),null!==$&&sh(e,t,n,r,$,ae,s,l),y=d<o.length?o[d]:null,_=m<i.length?i[m]:null}}(o,l,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return tt;const r=[],o=Kr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}(In,Dr,e,!0)}function Dr(e,t){for(let n=function(e){return function(e){Kt.key=0,Kt.keyEnd=0,Kt.value=0,Kt.valueEnd=0,Kt.textEnd=e.length}(e),Qf(e,pi(e,0,Kt.textEnd))}(t);n>=0;n=Qf(t,n))In(e,Kf(t),!0)}function rh(e,t){return t>=e.expandoStartIndex}function cl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=cs(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function cs(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),In(e,s,!!n||t[++i]))}return void 0===e?null:e}function sh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,m=d[l+1];ha(function(e){return 1==(1&e)}(m)?ah(d,t,n,o,xr(m),s):void 0)||(ha(i)||function(e){return 2==(2&e)}(m)&&(i=ah(d,null,n,o,l,s)),function(e,t,n,r,o){const i=h(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:gr.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=gr.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,l?"important":"")}}}(r,s,ft(Qt(),n),o,i))}function ah(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],m=Array.isArray(d),y=m?d[1]:d,_=null===y;let x=n[o+1];x===Qe&&(x=_?tt:void 0);let F=_?Ka(x,r):y===r?x:void 0;if(m&&!ha(F)&&(F=Ka(d,r)),ha(F)&&(l=F,s))return l;const $=e[o+1];o=s?Zn($):xr($)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Ka(d,r))}return l}function ha(e){return void 0!==e}function uh(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lh(e,t=""){const n=q(),r=rt(),o=e+20,i=r.firstCreatePass?Jo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return h(e)?e.createText(t):e.createTextNode(t)}(n[11],t);na(r,n,s,i),bn(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dl(e){return pa("",e,""),dl}function pa(e,t,n){const r=q(),o=function(e,t,n,r){return ln(e,Hr(),n)?t+re(n)+r:Qe}(r,e,t,n);return o!==Qe&&Rr(r,Qt(),o),pa}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const po=void 0;var VD=["en",[["a","p"],["AM","PM"],po],[["AM","PM"],po,po],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],po,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],po,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",po,"{1} 'at' {0}",po],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gi={};function fl(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=xh(t);if(n)return n;const r=t.split("-")[0];if(n=xh(r),n)return n;if("en"===r)return VD;throw new Error(`Missing locale data for the locale "${e}".`)}function Ah(e){return fl(e)[Be.PluralCase]}function xh(e){return e in gi||(gi[e]=xe.ng&&xe.ng.common&&xe.ng.common.locales&&xe.ng.common.locales[e]),gi[e]}var Be=(()=>((Be=Be||{})[Be.LocaleId=0]="LocaleId",Be[Be.DayPeriodsFormat=1]="DayPeriodsFormat",Be[Be.DayPeriodsStandalone=2]="DayPeriodsStandalone",Be[Be.DaysFormat=3]="DaysFormat",Be[Be.DaysStandalone=4]="DaysStandalone",Be[Be.MonthsFormat=5]="MonthsFormat",Be[Be.MonthsStandalone=6]="MonthsStandalone",Be[Be.Eras=7]="Eras",Be[Be.FirstDayOfWeek=8]="FirstDayOfWeek",Be[Be.WeekendRange=9]="WeekendRange",Be[Be.DateFormat=10]="DateFormat",Be[Be.TimeFormat=11]="TimeFormat",Be[Be.DateTimeFormat=12]="DateTimeFormat",Be[Be.NumberSymbols=13]="NumberSymbols",Be[Be.NumberFormats=14]="NumberFormats",Be[Be.CurrencyCode=15]="CurrencyCode",Be[Be.CurrencySymbol=16]="CurrencySymbol",Be[Be.CurrencyName=17]="CurrencyName",Be[Be.Currencies=18]="Currencies",Be[Be.Directionality=19]="Directionality",Be[Be.PluralCase=20]="PluralCase",Be[Be.ExtraData=21]="ExtraData",Be))();const ga="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Rh=ga;class np{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class GC{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${ne(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let gs=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new GC,e})();function WC(){return yi(kt(),q())}function yi(e,t){return new ms(Je(e,t))}let ms=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=WC,e})();function YC(e){return e instanceof ms?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op{}let KC=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=q(),n=Ze(kt().index,e);return function(e){return e[11]}(on(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),ZC=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=wt({token:e,providedIn:"root",factory:()=>null}),e})();class ip{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const JC=new ip("13.1.1"),Dl={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ca(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(k(i)),sn(i))for(let l=10;l<i.length;l++){const d=i[l],m=d[1].firstChild;null!==m&&Ca(d[1],d,m,r)}const s=n.type;if(8&s)Ca(e,t,n.child,r);else if(32&s){const l=du(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=Xc(t,n);if(Array.isArray(l))r.push(...l);else{const d=ns(t[16]);Ca(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ys{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Ca(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(sn(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),Ys(n,r))}this._attachedToViewContainer=!1}zc(this._lView[1],this._lView)}onDestroy(t){Id(this._lView[1],this._lView,null,t)}markForCheck(){Bu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){ur(!0);try{Hu(e,t,n)}finally{ur(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,rs(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class XC extends ys{constructor(t){super(t),this._view=t}detectChanges(){Nd(this._view)}checkNoChanges(){!function(e){ur(!0);try{Nd(e)}finally{ur(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class sp extends gs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=At(t);return new Cl(n,this.ngModule)}}function ap(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const tE=new ut("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Lc});class Cl extends np{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(hy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ap(this.componentDef.inputs)}get outputs(){return ap(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Dl,o);return i!==Dl||r===Dl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(op,E),l=i.get(ZC,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",y=r?function(e,t,n){if(h(e))return e.selectRootElement(t,n===Tt.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):gu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?ro:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,x=function(e,t){return{components:[],scheduler:e||Lc,clean:ev,playerHandler:t||null,flags:0}}(),F=aa(0,null,null,1,0,null,null,null,null,null),$=os(null,F,x,_,null,null,s,d,l,i);let ae,pe;Lo($);try{const be=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Jo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(la(d,m,!0),null!==e&&(Bo(o,e,m),null!==d.classes&&Eu(o,e,d.classes),null!==d.styles&&nd(o,e,d.styles)));const y=r.createRenderer(e,t),_=os(n,wd(t),null,t.onPush?64:16,n[20],d,r,y,i||null,null);return s.firstCreatePass&&(Gr(zr(d,n),s,t.type),Rd(s,d),Pd(d,n.length,1)),ua(n,_),n[20]=_}(y,this.componentDef,$,s,d);if(y)if(r)Bo(d,y,["ng-version",JC.full]);else{const{attrs:K,classes:Fe}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!qn(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);K&&Bo(d,y,K),Fe&&Fe.length>0&&Eu(d,y,Fe.join(" "))}if(pe=Ve(F,20),void 0!==n){const K=pe.projection=[];for(let Fe=0;Fe<this.ngContentSelectors.length;Fe++){const nt=n[Fe];K.push(null!=nt?Array.from(nt):null)}}ae=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=kt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Od(e,r,t,Xo(e,t,1,null),n));const o=f(t,e,r.directiveStart,r);un(o,t);const i=Je(r,t);return i&&un(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=kt();t.contentQueries(1,s,d.directiveStart)}const l=kt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(lr(l.index),Ad(n[1],l,0,l.directiveStart,l.directiveEnd,t),xd(t,s)),s}(be,this.componentDef,$,x,[Cv]),is(F,$,null)}finally{ao()}return new oE(this.componentType,ae,yi(pe,$),$,pe)}}class oE extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new XC(o),this.componentType=t}get injector(){return new I(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vi{}class up{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Di=new Map;class dp extends vi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new sp(this);const r=T(t);this._bootstrapComponents=pr(r.bootstrap),this._r3Injector=zd(t,n,[{provide:vi,useValue:this},{provide:gs,useValue:this.componentFactoryResolver}],ne(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Ln.THROW_IF_NOT_FOUND,r=M.Default){return t===Ln||t===vi||t===$u?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class El extends up{constructor(t){super(),this.moduleType=t,null!==T(t)&&function(e){const t=new Set;!function n(r){const o=T(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${ne(t)} vs ${ne(t.name)}`)}(i,Di.get(i),r),Di.set(i,r));const s=pr(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new dp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fp(e,t,n,r){return pp(q(),tn(),e,t,n,r)}function hp(e,t,n,r,o,i){return function(e,t,n,r,o,i,s,l){const d=t+n;return function(e,t,n,r,o){const i=ho(e,t,n,r);return ln(e,t+2,o)||i}(e,d,o,i,s)?yr(e,d+3,l?r.call(l,o,i,s):r(o,i,s)):vs(e,d+3)}(q(),tn(),e,t,n,r,o,i)}function vs(e,t){const n=e[t];return n===Qe?void 0:n}function pp(e,t,n,r,o,i){const s=t+n;return ln(e,s,o)?yr(e,s+1,i?r.call(i,o):r(o)):vs(e,s+1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Dp(e,t){const n=rt();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Gn(r.type)),s=W(ls);try{const l=$o(!1),d=i();return $o(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,q(),o,d),d}finally{W(s)}}function Cp(e,t,n){const r=e+20,o=q(),i=vt(o,r);return Ds(o,r)?pp(o,tn(),t,i.transform,n,i):i.transform(n)}function Ep(e,t,n,r){const o=e+20,i=q(),s=vt(i,o);return Ds(i,o)?function(e,t,n,r,o,i,s){const l=t+n;return ho(e,l,o,i)?yr(e,l+2,s?r.call(s,o,i):r(o,i)):vs(e,l+2)}(i,tn(),t,s.transform,n,r,s):s.transform(n,r)}function Ds(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _l(e){return t=>{setTimeout(e,void 0,t)}}const Cr=class extends oe.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=_l(d),l&&(l=_l(l)),m&&(m=_l(m)));const y=super.subscribe({next:l,error:d,complete:m});return t instanceof Me.w0&&t.add(y),y}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CE(){return this._results[ri()]()}class wl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ri(),r=wl.prototype;r[n]||(r[n]=CE)}get changes(){return this._changes||(this._changes=new Cr)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Nn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Cs=(()=>{class e{}return e.__NG_ELEMENT_ID__=wE,e})();const EE=Cs,_E=class extends EE{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=os(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),is(n,r,t),new ys(r)}};function wE(){return Ea(kt(),q())}function Ea(e,t){return 4&e.type?new _E(t,e,yi(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _a=(()=>{class e{}return e.__NG_ELEMENT_ID__=bE,e})();function bE(){return bp(kt(),q())}const ME=_a,_p=class extends ME{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return yi(this._hostTNode,this._hostLView)}get injector(){return new I(this._hostTNode,this._hostLView)}get parentInjector(){const t=zo(this._hostTNode,this._hostLView);if(Bi(t)){const n=Dn(t,this._hostLView),r=dr(t);return new I(n[1].data[r+8],n)}return new I(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=wp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new Cl(At(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(vi,null);_&&(i=_)}const y=d.create(m,o,void 0,i);return this.insert(y.hostView,l),y}insert(t,n){const r=t._lView,o=r[1];if(sn(r[3])){const y=this.indexOf(t);if(-1!==y)this.detach(y);else{const _=r[3],x=new _p(_,_[6],_[3]);x.detach(x.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],sc(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=Du(i,s),d=r[11],m=ta(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,rs(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),sc(bl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=wp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(Ys(bl(this._lContainer),n),zc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&null!=Ys(bl(this._lContainer),n)?new ys(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function wp(e){return e[8]}function bl(e){return e[8]||(e[8]=[])}function bp(e,t){let n;const r=t[e.index];if(sn(r))n=r;else{let o;if(8&e.type)o=k(r);else{const i=t[11];o=i.createComment("");const s=Je(e,t);fo(i,ta(i,s),o,function(e,t){return h(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Fd(r,t,o,e),ua(t,n)}return new _p(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ml{constructor(t){this.queryList=t,this.matches=null}clone(){return new Ml(this.queryList)}setDirty(){this.queryList.setDirty()}}class Il{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Il(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Pp(t,n).matches&&this.queries[n].setDirty()}}class Mp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Sl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Sl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Tl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Tl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,TE(n,i)),this.matchTNodeWithReadOption(t,n,a(n,t,i,!1,!1))}else r===Cs?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,a(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ms||o===_a||o===Cs&&4&n.type)this.addMatch(n.index,-2);else{const i=a(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function TE(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function xE(e,t,n,r){return-1===n?function(e,t){return 11&e.type?yi(e,t):4&e.type?Ea(e,t):null}(t,e):-2===n?function(e,t,n){return n===ms?yi(t,e):n===Cs?Ea(t,e):n===_a?bp(t,e):void 0}(e,t,r):f(e,e[1],n,t)}function Ip(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:xE(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Al(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Ip(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],y=t[-d];for(let _=10;_<y.length;_++){const x=y[_];x[17]===x[3]&&Al(x[1],x,m,r)}if(null!==y[9]){const _=y[9];for(let x=0;x<_.length;x++){const F=_[x];Al(F[1],F,m,r)}}}}}return r}function Sp(e){const t=q(),n=rt(),r=Ps();No(r+1);const o=Pp(n,r);if(e.dirty&&Rt(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Al(n,t,r,[]):Ip(n,t,o,r);e.reset(i,YC),e.notifyOnChanges()}return!0}return!1}function Tp(e,t,n,r){const o=rt();if(o.firstCreatePass){const i=kt();(function(e,t,n){null===e.queries&&(e.queries=new Sl),e.queries.track(new Tl(t,n))})(o,new Mp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new wl(4==(4&n));Id(e,t,r,r.destroy),null===t[19]&&(t[19]=new Il),t[19].queries.push(new Ml(r))}(o,q(),n)}function Ap(){return e=q(),t=Ps(),e[19].queries[t].queryList;var e,t}function Pp(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Op(e,t){return Ea(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ma(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nl=new ut("Application Initializer");let Ei=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Ma,this.reject=Ma,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(sl(i))n.push(i);else if(Of(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(nn(Nl,8))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qp=new ut("AppId"),JE={provide:qp,useFactory:function(){return`${Ll()}${Ll()}${Ll()}`},deps:[]};function Ll(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Zp=new ut("Platform Initializer"),Jp=new ut("Platform ID"),Xp=new ut("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let eg=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ia=new ut("LocaleId"),tg=new ut("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class XE{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kl=(()=>{class e{compileModuleSync(n){return new El(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=pr(T(n).declarations).reduce((s,l)=>{const d=At(l);return d&&s.push(new Cl(d)),s},[]);return new XE(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const t0=(()=>Promise.resolve(0))();function jl(e){"undefined"==typeof Zone?t0.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Tn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Cr(!1),this.onMicrotaskEmpty=new Cr(!1),this.onStable=new Cr(!1),this.onError=new Cr(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=xe.requestAnimationFrame,t=xe.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(xe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ul(e),e.isCheckStableRunning=!0,Bl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ul(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return ng(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),rg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return ng(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),rg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ul(e),Bl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Tn.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Tn.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,r0,Ma,Ma);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const r0={};function Bl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ul(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function ng(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function rg(e){e._nesting--,Bl(e)}class a0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Cr,this.onMicrotaskEmpty=new Cr,this.onStable=new Cr,this.onError=new Cr}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let og=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Tn.assertNotInAngularZone(),jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(nn(Tn))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})(),ig=(()=>{class e{constructor(){this._applications=new Map,Hl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Hl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();class u0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function l0(e){Hl=e}let tr,Hl=new u0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sg=new ut("AllowMultipleToken");class h0{constructor(t,n){this.name=t,this.token=n}}function ag(e,t,n=[]){const r=`Platform: ${t}`,o=new ut(r);return(i=[])=>{let s=ug();if(!s||s.injector.get(sg,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:zu,useValue:"platform"});!function(e){if(tr&&!tr.destroyed&&!tr.injector.get(sg,!1))throw new Ee("400","");tr=e.get(lg);const t=e.get(Zp,null);t&&t.forEach(n=>n())}(Ln.create({providers:l,name:r}))}return function(e){const t=ug();if(!t)throw new Ee("401","");return t}()}}function ug(){return tr&&!tr.destroyed?tr:null}let lg=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new a0:("zone.js"===e?void 0:e)||new Tn({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:Tn,useValue:l}];return l.run(()=>{const m=Ln.create({providers:d,parent:this.injector,name:n.moduleType.name}),y=n.create(m),_=y.injector.get(ts,null);if(!_)throw new Ee("402","");return l.runOutsideAngular(()=>{const x=l.onError.subscribe({next:F=>{_.handleError(F)}});y.onDestroy(()=>{Vl(this._modules,y),x.unsubscribe()})}),function(e,t,n){try{const r=n();return sl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const x=y.injector.get(Ei);return x.runInitializers(),x.donePromise.then(()=>(function(e){ht(e,"Expected localeId to be defined"),"string"==typeof e&&(Rh=e.toLowerCase().replace(/_/g,"-"))}(y.injector.get(Ia,ga)||ga),this._moduleDoBootstrap(y),y))})})}bootstrapModule(n,r=[]){const o=cg({},r);return function(e,t,n){const r=new El(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(_s);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Ee("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ee("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(nn(Ln))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();function cg(e,t){return Array.isArray(t)?t.reduce(cg,e):Object.assign(Object.assign({},e),t)}let _s=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new de.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new de.y(m=>{let y;this._zone.runOutsideAngular(()=>{y=this._zone.onStable.subscribe(()=>{Tn.assertNotInAngularZone(),jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{Tn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{y.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,te.yG)(e),n=(0,te._6)(e,1/0),r=e;return r.length?1===r.length?(0,P.Xf)(r[0]):(0,v.J)(n)((0,se.D)(r,t)):ee.E}(l,d.pipe((0,Q.B)()))}bootstrap(n,r){if(!this._initStatus.done)throw new Ee("405","");let o;o=n instanceof np?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(vi),l=o.create(Ln.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(og,null),y=m&&l.injector.get(ig);return m&&y&&y.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Vl(this.components,l),y&&y.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new Ee("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Vl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Xp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(nn(Tn),nn(Ln),nn(ts),nn(gs),nn(Ei))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();function Vl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let fg=!0;function D0(){fg=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let C0=(()=>{class e{}return e.__NG_ELEMENT_ID__=E0,e})();function E0(e){return function(e,t,n){if(xt(e)&&!n){const r=Ze(e.index,t);return new ys(r,r)}return 47&e.type?new ys(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(kt(),q(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Dg{constructor(){}supports(t){return as(t)}create(t){return new T0(t)}}const S0=(e,t)=>t;class T0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||S0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Eg(r,o,i)?n:r,l=Eg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,y=d-o;if(m!=y){for(let x=0;x<m;x++){const F=x<i.length?i[x]:i[x]=0,$=F+x;y<=$&&$<m&&(i[x]=F+1)}i[s.previousIndex]=y-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!as(t))throw new Error(`Error trying to diff '${ne(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ri()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new A0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Cg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Cg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class A0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class x0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Cg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new x0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Eg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class _g{constructor(){}supports(t){return t instanceof Map||qu(t)}create(){return new R0}}class R0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||qu(t)))throw new Error(`Error trying to diff '${ne(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new P0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class P0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wg(){return new Ta([new Dg])}let Ta=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||wg()),deps:[[e,new Yo,new co]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=wt({token:e,providedIn:"root",factory:wg}),e})();function bg(){return new Aa([new _g])}let Aa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||bg()),deps:[[e,new Yo,new co]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=wt({token:e,providedIn:"root",factory:bg}),e})();const F0=[new _g],L0=new Ta([new Dg]),k0=new Aa(F0),j0=ag(null,"core",[{provide:Jp,useValue:"unknown"},{provide:lg,deps:[Ln]},{provide:ig,deps:[]},{provide:eg,deps:[]}]),$0=[{provide:_s,useClass:_s,deps:[Tn,Ln,ts,gs,Ei]},{provide:tE,deps:[Tn],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:Ei,useClass:Ei,deps:[[new co,Nl]]},{provide:kl,useClass:kl,deps:[]},JE,{provide:Ta,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return L0},deps:[]},{provide:Aa,useFactory:function(){return k0},deps:[]},{provide:Ia,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||ga},deps:[[new Qi(Ia),new co,new Yo]]},{provide:tg,useValue:"USD"}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let G0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(nn(_s))},e.\u0275mod=ir({type:e}),e.\u0275inj=qt({providers:$0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,783:(Ke,le,S)=>{S.d(le,{Bz:()=>$s,lC:()=>R});var v=S(587),P=S(579);class ee extends P.x{constructor(u){super(),this._value=u}get value(){return this.getValue()}_subscribe(u){const a=super._subscribe(u);return!a.closed&&u.next(this._value),a}getValue(){const{hasError:u,thrownError:a,_value:f}=this;if(u)throw a;return this._throwIfClosed(),f}next(u){super.next(this._value=u)}}var te=S(306);const{isArray:se}=Array,{getPrototypeOf:Ne,prototype:oe,keys:Me}=Object;var B=S(76),Ce=S(671),ne=S(4);const{isArray:ge}=Array;var Z=S(669),ye=S(403),Ee=S(672);function ve(...c){const u=(0,Z.yG)(c),a=(0,Z.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(se(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&Ne(c)===oe}(u)){const a=Me(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,B.D)([],u);const D=new te.y(function(c,u,a=Ce.y){return f=>{re(u,()=>{const{length:g}=c,D=new Array(g);let w=g,I=g;for(let L=0;L<g;L++)re(u,()=>{const ue=(0,B.D)(c[L],u);let ze=!1;ue.subscribe(new ye.Q(f,we=>{D[L]=we,ze||(ze=!0,I--),I||f.next(a(D.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):Ce.y));return a?D.pipe(function(c){return(0,ne.U)(u=>function(c,u){return ge(u)?c(...u):c(u)}(c,u))}(a)):D}function re(c,u,a){c?(0,Ee.f)(a,c,u):u()}const _e=(0,S(888).d)(c=>function(){c(this),this.name="EmptyError",this.message="no elements in sequence"});var fe=S(189);function U(...c){return(0,fe.J)(1)((0,B.D)(c,(0,Z.yG)(c)))}var H=S(421);function G(c){return new te.y(u=>{(0,H.Xf)(c()).subscribe(u)})}var ie=S(727),V=S(482);function Pe(){return(0,V.e)((c,u)=>{let a=null;c._refCount++;const f=new ye.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,D=a;a=null,g&&(!D||g===D)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class st extends te.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,V.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new ie.w0;const a=this.getSubject();u.add(this.source.subscribe(new ye.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=ie.w0.EMPTY)}return u}refCount(){return Pe()(this)}}var Ae=S(646),Ue=S(515);function mt(c,u){return(0,V.e)((a,f)=>{let g=null,D=0,w=!1;const I=()=>w&&!g&&f.complete();a.subscribe(new ye.Q(f,L=>{null==g||g.unsubscribe();let ue=0;const ze=D++;(0,H.Xf)(c(L,ze)).subscribe(g=new ye.Q(f,we=>f.next(u?u(L,we,ze,ue++):we),()=>{g=null,I()}))},()=>{w=!0,I()}))})}function It(c,u,a,f,g){return(D,w)=>{let I=a,L=u,ue=0;D.subscribe(new ye.Q(w,ze=>{const we=ue++;L=I?c(L,ze,we):(I=!0,ze),f&&w.next(L)},g&&(()=>{I&&w.next(L),w.complete()})))}}function cn(c,u){return(0,V.e)(It(c,u,arguments.length>=2,!0))}function Pt(c){return(0,V.e)((u,a)=>{let D,f=null,g=!1;f=u.subscribe(new ye.Q(a,void 0,void 0,w=>{D=(0,H.Xf)(c(w,Pt(c)(u))),f?(f.unsubscribe(),f=null,D.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,D.subscribe(a))})}var ht=S(300);function Xe(c){return c<=0?()=>Ue.E:(0,V.e)((u,a)=>{let f=[];u.subscribe(new ye.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}function jt(c=jn){return(0,V.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>f?a.complete():a.error(c())))})}function jn(){return new _e}function nr(c){return(0,V.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>{f||a.next(c),a.complete()}))})}var rr=S(698);function qt(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,ht.h)((g,D)=>c(g,D,f)):Ce.y,(0,rr.q)(1),a?nr(u):jt(()=>new _e))}var Cn=S(576);function St(c,u,a){const f=(0,Cn.m)(c)||u||a?{next:c,error:u,complete:a}:c;return f?(0,V.e)((g,D)=>{var w;null===(w=f.subscribe)||void 0===w||w.call(f);let I=!0;g.subscribe(new ye.Q(D,L=>{var ue;null===(ue=f.next)||void 0===ue||ue.call(f,L),D.next(L)},()=>{var L;I=!1,null===(L=f.complete)||void 0===L||L.call(f),D.complete()},L=>{var ue;I=!1,null===(ue=f.error)||void 0===ue||ue.call(f,L),D.error(L)},()=>{var L,ue;I&&(null===(L=f.unsubscribe)||void 0===L||L.call(f)),null===(ue=f.finalize)||void 0===ue||ue.call(f)}))}):Ce.y}var xn=S(351),Nt=S(577),lt=S(808);
/**
       * @license Angular v13.1.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bt{constructor(u,a){this.id=u,this.url=a}}class Bn extends Bt{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class z extends Bt{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class M extends Bt{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class O extends Bt{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class X extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class W extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class De extends Bt{constructor(u,a,f,g,D){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=D}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class he extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class me extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ke{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Dt{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Lt{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Tt{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class et{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class $e{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const He="primary";class xe{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Et(c){return new xe(c)}const mn="ngNavigationCancelingError";function dn(c){const u=Error("NavigationCancelingError: "+c);return u[mn]=!0,u}function Er(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let D=0;D<f.length;D++){const w=f[D],I=c[D];if(w.startsWith(":"))g[w.substring(1)]=I;else if(w!==I.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $t(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let D=0;D<a.length;D++)if(g=a[D],!Un(c[g],u[g]))return!1;return!0}function Un(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,D)=>f[D]===g)}return c===u}function Zt(c){return Array.prototype.concat.apply([],c)}function Hn(c){return c.length>0?c[c.length-1]:null}function bt(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Jt(c){return(0,v.CqO)(c)?c:(0,v.QGY)(c)?(0,B.D)(Promise.resolve(c)):(0,Ae.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pr={exact:function Rn(c,u,a){if(!N(c.segments,u.segments)||!zt(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!Rn(c.children[f],u.children[f],a))return!1;return!0},subset:Mr},or={exact:function(c,u){return $t(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>Un(c[a],u[a]))},ignored:()=>!0};function ir(c,u,a){return Pr[a.paths](c.root,u.root,a.matrixParams)&&or[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function Mr(c,u,a){return At(c,u,u.segments,a)}function At(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!N(g,a)||u.hasChildren()||!zt(g,a,f))}if(c.segments.length===a.length){if(!N(c.segments,a)||!zt(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!Mr(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),D=a.slice(c.segments.length);return!!(N(c.segments,g)&&zt(c.segments,g,f)&&c.children[He])&&At(c.children[He],u,D,f)}}function zt(c,u,a){return u.every((f,g)=>or[a](c[g].parameters,f.parameters))}class Ut{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return Gt.serialize(this)}}class T{constructor(u,a){this.segments=u,this.children=a,this.parent=null,bt(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ct(this)}}class A{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Et(this.parameters)),this._parameterMap}toString(){return yt(this)}}function N(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class Te{}class je{parse(u){const a=new On(u);return new Ut(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${ce(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${at(a)}=${at(g)}`).join("&"):`${at(a)}=${at(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const Gt=new je;function ct(c){return c.segments.map(u=>yt(u)).join("/")}function ce(c,u){if(!c.hasChildren())return ct(c);if(u){const a=c.children[He]?ce(c.children[He],!1):"",f=[];return bt(c.children,(g,D)=>{D!==He&&f.push(`${D}:${ce(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return bt(c.children,(f,g)=>{g===He&&(a=a.concat(u(f,g)))}),bt(c.children,(f,g)=>{g!==He&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===He?[ce(c.children[He],!1)]:[`${g}:${ce(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[He]?`${ct(c)}/${a[0]}`:`${ct(c)}/(${a.join("//")})`}}function We(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function at(c){return We(c).replace(/%3B/gi,";")}function Pn(c){return We(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _t(c){return decodeURIComponent(c)}function _n(c){return _t(c.replace(/\+/g,"%20"))}function yt(c){return`${Pn(c.path)}${function(c){return Object.keys(c).map(u=>`;${Pn(u)}=${Pn(c[u])}`).join("")}(c.parameters)}`}const Ye=/^[^\/()?;=#]+/;function sr(c){const u=c.match(Ye);return u?u[0]:""}const $n=/^[^=?&#]+/,zn=/^[^&#]+/;class On{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new T([],{}):new T([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[He]=new T(u,a)),f}parseSegment(){const u=sr(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new A(_t(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=sr(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=sr(this.remaining);g&&(f=g,this.capture(f))}u[_t(a)]=_t(f)}parseQueryParam(u){const a=function(c){const u=c.match($n);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(zn);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=_n(a),D=_n(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(D)}else u[g]=D}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=sr(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let D;f.indexOf(":")>-1?(D=f.substr(0,f.indexOf(":")),this.capture(D),this.capture(":")):u&&(D=He);const w=this.parseChildren();a[D]=1===Object.keys(w).length?w[He]:new T([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fn{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=en(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=en(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=dt(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return dt(u,this._root).map(a=>a.value)}}function en(c,u){if(c===u.value)return u;for(const a of u.children){const f=en(c,a);if(f)return f}return null}function dt(c,u){if(c===u.value)return[u];for(const a of u.children){const f=dt(c,a);if(f.length)return f.unshift(u),f}return[]}class yn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function ar(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class on extends Fn{constructor(u,a){super(u),this.snapshot=a,Fr(this,u)}toString(){return this.snapshot.toString()}}function sn(c,u){const a=function(c,u){const w=new Or([],{},{},"",{},He,u,null,c.root,-1,{});return new _i("",new yn(w,[]))}(c,u),f=new ee([new A("",{})]),g=new ee({}),D=new ee({}),w=new ee({}),I=new ee(""),L=new xt(f,g,w,I,D,He,u,a.root);return L.snapshot=a.root,new on(new yn(L,[]),a)}class xt{constructor(u,a,f,g,D,w,I,L){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this._futureSnapshot=L}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,ne.U)(u=>Et(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,ne.U)(u=>Et(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Sr(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],D=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(D.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Or{constructor(u,a,f,g,D,w,I,L,ue,ze,we){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this.routeConfig=L,this._urlSegment=ue,this._lastPathIndex=ze,this._resolve=we}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Et(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class _i extends Fn{constructor(u,a){super(a),this.url=u,Fr(this,a)}toString(){return vo(this._root)}}function Fr(c,u){u.value._routerState=c,u.children.forEach(a=>Fr(c,a))}function vo(c){const u=c.children.length>0?` { ${c.children.map(vo).join(", ")} } `:"";return`${c.value}${u}`}function Do(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,$t(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),$t(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!$t(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),$t(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function Co(c,u){const a=$t(c.params,u.params)&&function(c,u){return N(c,u)&&c.every((a,f)=>$t(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||Co(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nr(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Nr(c,f,g);return Nr(c,f)})}(c,u,a);return new yn(f,g)}{if(c.shouldAttach(u.value)){const D=c.retrieve(u.value);if(null!==D){const w=D.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(I=>Nr(c,I)),w}}const f=function(c){return new xt(new ee(c.url),new ee(c.params),new ee(c.queryParams),new ee(c.fragment),new ee(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(D=>Nr(c,D));return new yn(f,g)}}function eo(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function Lr(c){return"object"==typeof c&&null!=c&&c.outlets}function Eo(c,u,a,f,g){let D={};return f&&bt(f,(w,I)=>{D[I]=Array.isArray(w)?w.map(L=>`${L}`):`${w}`}),new Ut(a.root===c?u:bi(a.root,c,u),D,g)}function bi(c,u,a){const f={};return bt(c.children,(g,D)=>{f[D]=g===u?a:bi(g,u,a)}),new T(c.segments,f)}class _o{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&eo(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find(Lr);if(g&&g!==Hn(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class wo{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function Mi(c,u,a){if(c||(c=new T([],{})),0===c.segments.length&&c.hasChildren())return Io(c,u,a);const f=function(c,u,a){let f=0,g=u;const D={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return D;const w=c.segments[g],I=a[f];if(Lr(I))break;const L=`${I}`,ue=f<a.length-1?a[f+1]:null;if(g>0&&void 0===L)break;if(L&&ue&&"object"==typeof ue&&void 0===ue.outlets){if(!So(L,ue,w))return D;f+=2}else{if(!So(L,{},w))return D;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const D=new T(c.segments.slice(0,f.pathIndex),{});return D.children[He]=new T(c.segments.slice(f.pathIndex),c.children),Io(D,0,g)}return f.match&&0===g.length?new T(c.segments,{}):f.match&&!c.hasChildren()?kr(c,u,a):f.match?Io(c,0,g):kr(c,u,a)}function Io(c,u,a){if(0===a.length)return new T(c.segments,{});{const f=function(c){return Lr(c[0])?c[0].outlets:{[He]:c}}(a),g={};return bt(f,(D,w)=>{"string"==typeof D&&(D=[D]),null!==D&&(g[w]=Mi(c.children[w],u,D))}),bt(c.children,(D,w)=>{void 0===f[w]&&(g[w]=D)}),new T(c.segments,g)}}function kr(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const D=a[g];if(Lr(D)){const L=to(D.outlets);return new T(f,L)}if(0===g&&eo(a[0])){f.push(new A(c.segments[u].path,no(a[0]))),g++;continue}const w=Lr(D)?D.outlets[He]:`${D}`,I=g<a.length-1?a[g+1]:null;w&&I&&eo(I)?(f.push(new A(w,no(I))),g+=2):(f.push(new A(w,{})),g++)}return new T(f,{})}function to(c){const u={};return bt(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=kr(new T([],{}),0,a))}),u}function no(c){const u={};return bt(c,(a,f)=>u[f]=`${a}`),u}function So(c,u,a){return c==a.path&&$t(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ii{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),Do(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=ar(a);u.children.forEach(D=>{const w=D.value.outlet;this.deactivateRoutes(D,g[w],f),delete g[w]}),bt(g,(D,w)=>{this.deactivateRouteAndItsChildren(D,f)})}deactivateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(g===D)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else D&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=ar(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);if(f&&f.outlet){const w=f.outlet.detach(),I=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:I})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=ar(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=ar(a);u.children.forEach(D=>{this.activateRoutes(D,g[D.value.outlet],f),this.forwardEvent(new et(D.value.snapshot))}),u.children.length&&this.forwardEvent(new Tt(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(Do(g),g===D)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const I=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(I.contexts),w.attachRef=I.componentRef,w.route=I.route.value,w.outlet&&w.outlet.attach(I.componentRef,I.route.value),Do(I.route.value),this.activateChildRoutes(u,null,w.children)}else{const I=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(g.snapshot),L=I?I.module.componentFactoryResolver:null;w.attachRef=null,w.route=g,w.resolver=L,w.outlet&&w.outlet.activateWith(g,L),this.activateChildRoutes(u,null,w.children)}}else this.activateChildRoutes(u,null,f)}}class To{constructor(u,a){this.routes=u,this.module=a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wn(c){return"function"==typeof c}function Ot(c){return c instanceof Ut}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const p=Symbol("INITIAL_VALUE");function C(){return mt(c=>ve(c.map(u=>u.pipe((0,rr.q)(1),function(...c){const u=(0,Z.yG)(c);return(0,V.e)((a,f)=>{(u?U(c,a,u):U(c,a)).subscribe(f)})}(p)))).pipe(cn((u,a)=>{let f=!1;return a.reduce((g,D,w)=>g!==p?g:(D===p&&(f=!0),f||!1!==D&&w!==a.length-1&&!Ot(D)?g:D),u)},p),(0,ht.h)(u=>u!==p),(0,ne.U)(u=>Ot(u)?u:!0===u),(0,rr.q)(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class h{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new E,this.attachRef=null}}class E{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const f=this.getOrCreateContext(u);f.outlet=a,this.contexts.set(u,f)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new h,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let R=(()=>{class c{constructor(a,f,g,D,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new v.vpe,this.deactivateEvents=new v.vpe,this.attachEvents=new v.vpe,this.detachEvents=new v.vpe,this.name=D||He,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),I=this.parentContexts.getOrCreateContext(this.name).children,L=new k(a,I,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,L),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(v.Y36(E),v.Y36(v.s_b),v.Y36(v._Vd),v.$8M("name"),v.Y36(v.sBO))},c.\u0275dir=v.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class k{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===xt?this.route:u===E?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let J=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=v.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&v._UZ(0,"router-outlet")},directives:[R],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Se(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];ft(f,Je(u,f))}}function ft(c,u){c.children&&Se(c.children,u)}function Je(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function pt(c){const u=c.children&&c.children.map(pt),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==He&&(a.component=J),a}function Ve(c){return c.outlet||He}function vt(c,u){const a=c.filter(f=>Ve(f)===u);return a.push(...c.filter(f=>Ve(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Ze={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Rt(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},Ze):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const D=(u.matcher||Er)(a,c,u);if(!D)return Object.assign({},Ze);const w={};bt(D.posParams,(L,ue)=>{w[ue]=L.path});const I=D.consumed.length>0?Object.assign(Object.assign({},w),D.consumed[D.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:D.consumed,lastChild:D.consumed.length,parameters:I,positionalParamSegments:null!==(f=D.posParams)&&void 0!==f?f:{}}}function vn(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>Oe(c,u,f)&&Ve(f)!==He)}(c,a,f)){const w=new T(u,function(c,u,a,f){const g={};g[He]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const D of a)if(""===D.path&&Ve(D)!==He){const w=new T([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[Ve(D)]=w}return g}(c,u,f,new T(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>Oe(c,u,f))}(c,a,f)){const w=new T(c.segments,function(c,u,a,f,g,D){const w={};for(const I of f)if(Oe(c,a,I)&&!g[Ve(I)]){const L=new T([],{});L._sourceSegment=c,L._segmentIndexShift="legacy"===D?c.segments.length:u.length,w[Ve(I)]=L}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const D=new T(c.segments,c.children);return D._sourceSegment=c,D._segmentIndexShift=u.length,{segmentGroup:D,slicedSegments:a}}function Oe(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function Ro(c,u,a,f){return!!(Ve(c)===f||f!==He&&Oe(u,a,c))&&("**"===c.path||Rt(u,c,a).matched)}function Ts(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oo{constructor(u){this.segmentGroup=u||null}}class As{constructor(u){this.urlTree=u}}function io(c){return new te.y(u=>u.error(new oo(c)))}function xs(c){return new te.y(u=>u.error(new As(c)))}function xa(c){return new te.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class Ra{constructor(u,a,f,g,D){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=D,this.allowRedirects=!0,this.ngModule=u.get(v.h0i)}apply(){const u=vn(this.urlTree.root,[],[],this.config).segmentGroup,a=new T(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,He).pipe((0,ne.U)(D=>this.createUrlTree(Po(D),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Pt(D=>{if(D instanceof As)return this.allowRedirects=!1,this.match(D.urlTree);throw D instanceof oo?this.noMatchError(D):D}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,He).pipe((0,ne.U)(g=>this.createUrlTree(Po(g),u.queryParams,u.fragment))).pipe(Pt(g=>{throw g instanceof oo?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new T([],{[He]:u}):u;return new Ut(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,ne.U)(D=>new T([],D))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const D of Object.keys(f.children))"primary"===D?g.unshift(D):g.push(D);return(0,B.D)(g).pipe((0,xn.b)(D=>{const w=f.children[D],I=vt(a,D);return this.expandSegmentGroup(u,I,w,D).pipe((0,ne.U)(L=>({segment:L,outlet:D})))}),cn((D,w)=>(D[w.outlet]=w.segment,D),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,ht.h)((g,D)=>c(g,D,f)):Ce.y,Xe(1),a?nr(u):jt(()=>new _e))}())}expandSegment(u,a,f,g,D,w){return(0,B.D)(f).pipe((0,xn.b)(I=>this.expandSegmentAgainstRoute(u,a,f,I,g,D,w).pipe(Pt(ue=>{if(ue instanceof oo)return(0,Ae.of)(null);throw ue}))),qt(I=>!!I),Pt((I,L)=>{if(I instanceof _e||"EmptyError"===I.name){if(Ts(a,g,D))return(0,Ae.of)(new T([],{}));throw new oo(a)}throw I}))}expandSegmentAgainstRoute(u,a,f,g,D,w,I){return Ro(g,a,D,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,D,w):I&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w):io(a):io(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const D=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?xs(D):this.lineralizeSegments(f,D).pipe((0,Nt.z)(w=>{const I=new T(w,{});return this.expandSegment(u,I,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){const{matched:I,consumedSegments:L,lastChild:ue,positionalParamSegments:ze}=Rt(a,g,D);if(!I)return io(a);const we=this.applyRedirectCommands(L,g.redirectTo,ze);return g.redirectTo.startsWith("/")?xs(we):this.lineralizeSegments(g,we).pipe((0,Nt.z)(ot=>this.expandSegment(u,a,f,ot.concat(D.slice(ue)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,D){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,Ae.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,ne.U)(ot=>(f._loadedConfig=ot,new T(g,{})))):(0,Ae.of)(new T(g,{}));const{matched:w,consumedSegments:I,lastChild:L}=Rt(a,f,g);if(!w)return io(a);const ue=g.slice(L);return this.getChildConfig(u,f,g).pipe((0,Nt.z)(we=>{const ot=we.module,it=we.routes,{segmentGroup:Wr,slicedSegments:Mn}=vn(a,I,ue,it),an=new T(Wr.segments,Wr.children);if(0===Mn.length&&an.hasChildren())return this.expandChildren(ot,it,an).pipe((0,ne.U)(Yr=>new T(I,Yr)));if(0===it.length&&0===Mn.length)return(0,Ae.of)(new T(I,{}));const Ar=Ve(f)===D;return this.expandSegment(ot,an,it,Mn,Ar?He:D,!0).pipe((0,ne.U)(ut=>new T(I.concat(ut.segments),ut.children)))}))}getChildConfig(u,a,f){return a.children?(0,Ae.of)(new To(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,Ae.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,Nt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,ne.U)(D=>(a._loadedConfig=D,D))):(c=a,new te.y(u=>u.error(dn(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,Ae.of)(new To([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,Ae.of)(!0);const D=g.map(w=>{const I=u.get(w);let L;if((c=I)&&wn(c.canLoad))L=I.canLoad(a,f);else{if(!wn(I))throw new Error("Invalid CanLoad guard");L=I(a,f)}var c;return Jt(L)});return(0,Ae.of)(D).pipe(C(),St(w=>{if(!Ot(w))return;const I=dn(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw I.url=w,I}),(0,ne.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,Ae.of)(f);if(g.numberOfChildren>1||!g.children[He])return xa(u.redirectTo);g=g.children[He]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const D=this.createSegmentGroup(u,a.root,f,g);return new Ut(D,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return bt(u,(g,D)=>{if("string"==typeof g&&g.startsWith(":")){const I=g.substring(1);f[D]=a[I]}else f[D]=g}),f}createSegmentGroup(u,a,f,g){const D=this.createSegments(u,a.segments,f,g);let w={};return bt(a.children,(I,L)=>{w[L]=this.createSegmentGroup(u,I,f,g)}),new T(D,w)}createSegments(u,a,f,g){return a.map(D=>D.path.startsWith(":")?this.findPosParam(u,D,g):this.findOrReturn(D,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function Po(c){const u={};for(const f of Object.keys(c.children)){const D=Po(c.children[f]);(D.segments.length>0||D.hasChildren())&&(u[f]=D)}return function(c){if(1===c.numberOfChildren&&c.children[He]){const u=c.children[He];return new T(c.segments.concat(u.segments),u.children)}return c}(new T(c.segments,u))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bn{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class Br{constructor(u,a){this.component=u,this.route=a}}function xi(c,u,a){const f=c._root;return ur(f,u?u._root:null,a,[f.value])}function Oo(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function ur(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=ar(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=c.value,w=u?u.value:null,I=a?a.getContext(c.value.outlet):null;if(w&&D.routeConfig===w.routeConfig){const L=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!N(c.url,u.url);case"pathParamsOrQueryParamsChange":return!N(c.url,u.url)||!$t(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Co(c,u)||!$t(c.queryParams,u.queryParams);default:return!Co(c,u)}}(w,D,D.routeConfig.runGuardsAndResolvers);L?g.canActivateChecks.push(new bn(f)):(D.data=w.data,D._resolvedData=w._resolvedData),ur(c,u,D.component?I?I.children:null:a,f,g),L&&I&&I.outlet&&I.outlet.isActivated&&g.canDeactivateChecks.push(new Br(I.outlet.component,w))}else w&&Ur(u,I,g),g.canActivateChecks.push(new bn(f)),ur(c,null,D.component?I?I.children:null:a,f,g)})(w,D[w.value.outlet],a,f.concat([w.value]),g),delete D[w.value.outlet]}),bt(D,(w,I)=>Ur(w,a.getContext(I),g)),g}function Ur(c,u,a){const f=ar(c),g=c.value;bt(f,(D,w)=>{Ur(D,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new Br(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ps{}function No(c){return new te.y(u=>u.error(c))}class Os{constructor(u,a,f,g,D,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=D,this.relativeLinkResolution=w}recognize(){const u=vn(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,He);if(null===a)return null;const f=new Or([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},He,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new yn(f,a),D=new _i(this.url,g);return this.inheritParamsAndData(D._root),D}inheritParamsAndData(u){const a=u.value,f=Sr(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const D of Object.keys(a.children)){const w=a.children[D],I=vt(u,D),L=this.processSegmentGroup(I,w,D);if(null===L)return null;f.push(...L)}const g=Oi(f);return g.sort((u,a)=>u.value.outlet===He?-1:a.value.outlet===He?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const D of u){const w=this.processSegmentAgainstRoute(D,a,f,g);if(null!==w)return w}return Ts(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!Ro(u,a,f,g))return null;let D,w=[],I=[];if("**"===u.path){const it=f.length>0?Hn(f).parameters:{};D=new Or(f,it,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,ks(u),Ve(u),u.component,u,ao(a),Ls(a)+f.length,Qt(u))}else{const it=Rt(a,u,f);if(!it.matched)return null;w=it.consumedSegments,I=f.slice(it.lastChild),D=new Or(w,it.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,ks(u),Ve(u),u.component,u,ao(a),Ls(a)+w.length,Qt(u))}const L=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:ue,slicedSegments:ze}=vn(a,w,I,L.filter(it=>void 0===it.redirectTo),this.relativeLinkResolution);var c;if(0===ze.length&&ue.hasChildren()){const it=this.processChildren(L,ue);return null===it?null:[new yn(D,it)]}if(0===L.length&&0===ze.length)return[new yn(D,[])];const we=Ve(u)===g,ot=this.processSegment(L,ue,ze,we?He:g);return null===ot?null:[new yn(D,ot)]}}function Ns(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function Oi(c){const u=[],a=new Set;for(const f of c){if(!Ns(f)){u.push(f);continue}const g=u.find(D=>f.value.routeConfig===D.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=Oi(f.children);u.push(new yn(f.value,g))}return u.filter(f=>!a.has(f))}function ao(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Ls(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function ks(c){return c.data||{}}function Qt(c){return c.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Fi(c){return mt(u=>{const a=c(u);return a?(0,B.D)(a).pipe((0,ne.U)(()=>u)):(0,Ae.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ko extends class{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vr=new v.OlP("ROUTES");class uo{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,ne.U)(D=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=D.create(u);return new To(Zt(w.injector.get(Vr,void 0,v.XFs.Self|v.XFs.Optional)).map(pt),w)}),Pt(D=>{throw a._loader$=void 0,D}));return a._loader$=new st(g,()=>new P.x).pipe(Pe()),a._loader$}loadModuleFactory(u){return Jt(u()).pipe((0,Nt.z)(a=>a instanceof v.YKP?(0,Ae.of)(a):(0,B.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Us{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Ua(c){throw c}function cr(c,u,a){return u.parse("/")}function $r(c,u){return(0,Ae.of)(null)}const Ha={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Va={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Wt=(()=>{class c{constructor(a,f,g,D,w,I,L){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=D,this.config=L,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new P.x,this.errorHandler=Ua,this.malformedUriErrorHandler=cr,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:$r,afterPreactivation:$r},this.urlHandlingStrategy=new Us,this.routeReuseStrategy=new ko,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(v.h0i),this.console=w.get(v.c2e);const we=w.get(v.R0b);this.isNgZoneEnabled=we instanceof v.R0b&&v.R0b.isInAngularZone(),this.resetConfig(L),this.currentUrlTree=new Ut(new T([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new uo(w,I,ot=>this.triggerEvent(new ke(ot)),ot=>this.triggerEvent(new Dt(ot))),this.routerState=sn(this.currentUrlTree,this.rootComponentType),this.transitions=new ee({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,ht.h)(g=>0!==g.id),(0,ne.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),mt(g=>{let D=!1,w=!1;return(0,Ae.of)(g).pipe(St(I=>{this.currentNavigation={id:I.id,initialUrl:I.currentRawUrl,extractedUrl:I.extractedUrl,trigger:I.source,extras:I.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),mt(I=>{const L=this.browserUrlTree.toString(),ue=!this.navigated||I.extractedUrl.toString()!==L||L!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ue)&&this.urlHandlingStrategy.shouldProcessUrl(I.rawUrl))return jo(I.source)&&(this.browserUrlTree=I.extractedUrl),(0,Ae.of)(I).pipe(mt(we=>{const ot=this.transitions.getValue();return f.next(new Bn(we.id,this.serializeUrl(we.extractedUrl),we.source,we.restoredState)),ot!==this.transitions.getValue()?Ue.E:Promise.resolve(we)}),function(c,u,a,f){return mt(g=>function(c,u,a,f,g){return new Ra(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,ne.U)(D=>Object.assign(Object.assign({},g),{urlAfterRedirects:D}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),St(we=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:we.urlAfterRedirects})}),function(c,u,a,f,g){return(0,Nt.z)(D=>function(c,u,a,f,g="emptyOnly",D="legacy"){try{const w=new Os(c,u,a,f,g,D).recognize();return null===w?No(new Ps):(0,Ae.of)(w)}catch(w){return No(w)}}(c,u,D.urlAfterRedirects,a(D.urlAfterRedirects),f,g).pipe((0,ne.U)(w=>Object.assign(Object.assign({},D),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,we=>this.serializeUrl(we),this.paramsInheritanceStrategy,this.relativeLinkResolution),St(we=>{if("eager"===this.urlUpdateStrategy){if(!we.extras.skipLocationChange){const it=this.urlHandlingStrategy.merge(we.urlAfterRedirects,we.rawUrl);this.setBrowserUrl(it,we)}this.browserUrlTree=we.urlAfterRedirects}const ot=new X(we.id,this.serializeUrl(we.extractedUrl),this.serializeUrl(we.urlAfterRedirects),we.targetSnapshot);f.next(ot)}));if(ue&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:ot,extractedUrl:it,source:Wr,restoredState:Mn,extras:an}=I,Ar=new Bn(ot,this.serializeUrl(it),Wr,Mn);f.next(Ar);const Go=sn(it,this.rootComponentType).snapshot;return(0,Ae.of)(Object.assign(Object.assign({},I),{targetSnapshot:Go,urlAfterRedirects:it,extras:Object.assign(Object.assign({},an),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=I.rawUrl,I.resolve(null),Ue.E}),Fi(I=>{const{targetSnapshot:L,id:ue,extractedUrl:ze,rawUrl:we,extras:{skipLocationChange:ot,replaceUrl:it}}=I;return this.hooks.beforePreactivation(L,{navigationId:ue,appliedUrlTree:ze,rawUrlTree:we,skipLocationChange:!!ot,replaceUrl:!!it})}),St(I=>{const L=new W(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot);this.triggerEvent(L)}),(0,ne.U)(I=>Object.assign(Object.assign({},I),{guards:xi(I.targetSnapshot,I.currentSnapshot,this.rootContexts)})),function(c,u){return(0,Nt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:D,canDeactivateChecks:w}}=a;return 0===w.length&&0===D.length?(0,Ae.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,B.D)(c).pipe((0,Nt.z)(g=>function(c,u,a,f,g){const D=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!D||0===D.length)return(0,Ae.of)(!0);const w=D.map(I=>{const L=Oo(I,u,g);let ue;if(function(c){return c&&wn(c.canDeactivate)}(L))ue=Jt(L.canDeactivate(c,u,a,f));else{if(!wn(L))throw new Error("Invalid CanDeactivate guard");ue=Jt(L(c,u,a,f))}return ue.pipe(qt())});return(0,Ae.of)(w).pipe(C())}(g.component,g.route,a,u,f)),qt(g=>!0!==g,!0))}(w,f,g,c).pipe((0,Nt.z)(I=>I&&function(c){return"boolean"==typeof c}(I)?function(c,u,a,f){return(0,B.D)(u).pipe((0,xn.b)(g=>U(function(c,u){return null!==c&&u&&u(new Lt(c)),(0,Ae.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new Ct(c)),(0,Ae.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],D=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>G(()=>{const I=w.guards.map(L=>{const ue=Oo(L,w.node,a);let ze;if(function(c){return c&&wn(c.canActivateChild)}(ue))ze=Jt(ue.canActivateChild(f,c));else{if(!wn(ue))throw new Error("Invalid CanActivateChild guard");ze=Jt(ue(f,c))}return ze.pipe(qt())});return(0,Ae.of)(I).pipe(C())}));return(0,Ae.of)(D).pipe(C())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,Ae.of)(!0);const g=f.map(D=>G(()=>{const w=Oo(D,u,a);let I;if(function(c){return c&&wn(c.canActivate)}(w))I=Jt(w.canActivate(u,c));else{if(!wn(w))throw new Error("Invalid CanActivate guard");I=Jt(w(u,c))}return I.pipe(qt())}));return(0,Ae.of)(g).pipe(C())}(c,g.route,a))),qt(g=>!0!==g,!0))}(f,D,c,u):(0,Ae.of)(I)),(0,ne.U)(I=>Object.assign(Object.assign({},a),{guardsResult:I})))})}(this.ngModule.injector,I=>this.triggerEvent(I)),St(I=>{if(Ot(I.guardsResult)){const ue=dn(`Redirecting to "${this.serializeUrl(I.guardsResult)}"`);throw ue.url=I.guardsResult,ue}const L=new De(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot,!!I.guardsResult);this.triggerEvent(L)}),(0,ht.h)(I=>!!I.guardsResult||(this.restoreHistory(I),this.cancelNavigationTransition(I,""),!1)),Fi(I=>{if(I.guards.canActivateChecks.length)return(0,Ae.of)(I).pipe(St(L=>{const ue=new he(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(ue)}),mt(L=>{let ue=!1;return(0,Ae.of)(L).pipe(function(c,u){return(0,Nt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,Ae.of)(a);let D=0;return(0,B.D)(g).pipe((0,xn.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,Ae.of)({});const D={};return(0,B.D)(g).pipe((0,Nt.z)(w=>function(c,u,a,f){const g=Oo(c,u,f);return Jt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe(St(I=>{D[w]=I}))),Xe(1),(0,Nt.z)(()=>Object.keys(D).length===g.length?(0,Ae.of)(D):Ue.E))}(c._resolve,c,u,f).pipe((0,ne.U)(D=>(c._resolvedData=D,c.data=Object.assign(Object.assign({},c.data),Sr(c,a).resolve),null)))}(w.route,f,c,u)),St(()=>D++),Xe(1),(0,Nt.z)(w=>D===g.length?(0,Ae.of)(a):Ue.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),St({next:()=>ue=!0,complete:()=>{ue||(this.restoreHistory(L),this.cancelNavigationTransition(L,"At least one route resolver didn't emit any value."))}}))}),St(L=>{const ue=new me(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(ue)}))}),Fi(I=>{const{targetSnapshot:L,id:ue,extractedUrl:ze,rawUrl:we,extras:{skipLocationChange:ot,replaceUrl:it}}=I;return this.hooks.afterPreactivation(L,{navigationId:ue,appliedUrlTree:ze,rawUrlTree:we,skipLocationChange:!!ot,replaceUrl:!!it})}),(0,ne.U)(I=>{const L=function(c,u,a){const f=Nr(c,u._root,a?a._root:void 0);return new on(f,u)}(this.routeReuseStrategy,I.targetSnapshot,I.currentRouterState);return Object.assign(Object.assign({},I),{targetRouterState:L})}),St(I=>{this.currentUrlTree=I.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(I.urlAfterRedirects,I.rawUrl),this.routerState=I.targetRouterState,"deferred"===this.urlUpdateStrategy&&(I.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,I),this.browserUrlTree=I.urlAfterRedirects)}),((c,u,a)=>(0,ne.U)(f=>(new Ii(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,I=>this.triggerEvent(I)),St({next(){D=!0},complete(){D=!0}}),function(c){return(0,V.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var I;D||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(I=this.currentNavigation)||void 0===I?void 0:I.id)===g.id&&(this.currentNavigation=null)}),Pt(I=>{if(w=!0,function(c){return c&&c[mn]}(I)){const L=Ot(I.url);L||(this.navigated=!0,this.restoreHistory(g,!0));const ue=new M(g.id,this.serializeUrl(g.extractedUrl),I.message);f.next(ue),L?setTimeout(()=>{const ze=this.urlHandlingStrategy.merge(I.url,this.rawUrlTree),we={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||jo(g.source)};this.scheduleNavigation(ze,"imperative",null,we,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const L=new O(g.id,this.serializeUrl(g.extractedUrl),I);f.next(L);try{g.resolve(this.errorHandler(I))}catch(ue){g.reject(ue)}}return Ue.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const D={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const L=Object.assign({},w);delete L.navigationId,delete L.\u0275routerPageId,0!==Object.keys(L).length&&(D.state=L)}const I=this.parseUrl(a.url);this.scheduleNavigation(I,f,w,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){Se(a),this.config=a.map(pt),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:D,fragment:w,queryParamsHandling:I,preserveFragment:L}=f,ue=g||this.routerState.root,ze=L?this.currentUrlTree.fragment:w;let we=null;switch(I){case"merge":we=Object.assign(Object.assign({},this.currentUrlTree.queryParams),D);break;case"preserve":we=this.currentUrlTree.queryParams;break;default:we=D||null}return null!==we&&(we=this.removeEmptyProps(we)),function(c,u,a,f,g){if(0===a.length)return Eo(u.root,u.root,u,f,g);const D=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new _o(!0,0,c);let u=0,a=!1;const f=c.reduce((g,D,w)=>{if("object"==typeof D&&null!=D){if(D.outlets){const I={};return bt(D.outlets,(L,ue)=>{I[ue]="string"==typeof L?L.split("/"):L}),[...g,{outlets:I}]}if(D.segmentPath)return[...g,D.segmentPath]}return"string"!=typeof D?[...g,D]:0===w?(D.split("/").forEach((I,L)=>{0==L&&"."===I||(0==L&&""===I?a=!0:".."===I?u++:""!=I&&g.push(I))}),g):[...g,D]},[]);return new _o(a,u,f)}(a);if(D.toRoot())return Eo(u.root,new T([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new wo(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const D=a.snapshot._urlSegment;return new wo(D,D===u.root,0)}const f=eo(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,D=a;for(;D>g;){if(D-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new wo(f,!1,g-D)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(D,u,c),I=w.processChildren?Io(w.segmentGroup,w.index,D.commands):Mi(w.segmentGroup,w.index,D.commands);return Eo(w.segmentGroup,I,u,f,g)}(ue,this.currentUrlTree,a,we,null!=ze?ze:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=Ot(a)?a:this.parseUrl(a),D=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(D,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},Ha):!1===f?Object.assign({},Va):f,Ot(a))return ir(this.currentUrlTree,a,g);const D=this.parseUrl(a);return ir(this.currentUrlTree,D,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const D=a[g];return null!=D&&(f[g]=D),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new z(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,D,w){var I,L,ue;if(this.disposed)return Promise.resolve(!1);const ze=this.transitions.value,we=jo(f)&&ze&&!jo(ze.source),ot=ze.rawUrl.toString()===a.toString(),it=ze.id===(null===(I=this.currentNavigation)||void 0===I?void 0:I.id);if(we&&ot&&it)return Promise.resolve(!0);let Mn,an,Ar;w?(Mn=w.resolve,an=w.reject,Ar=w.promise):Ar=new Promise((Yr,ic)=>{Mn=Yr,an=ic});const Go=++this.navigationId;let ut;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),ut=g&&g.\u0275routerPageId?g.\u0275routerPageId:D.replaceUrl||D.skipLocationChange?null!==(L=this.browserPageId)&&void 0!==L?L:0:(null!==(ue=this.browserPageId)&&void 0!==ue?ue:0)+1):ut=0,this.setTransition({id:Go,targetPageId:ut,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:D,resolve:Mn,reject:an,promise:Ar,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Ar.catch(Yr=>Promise.reject(Yr))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),D=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",D):this.location.go(g,"",D)}restoreHistory(a,f=!1){var g,D;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new M(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function jo(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Uo{}class ji{preload(u,a){return(0,Ae.of)(null)}}let Bi=(()=>{class c{constructor(a,f,g,D){this.router=a,this.injector=g,this.preloadingStrategy=D,this.loader=new uo(g,f,L=>a.triggerEvent(new ke(L)),L=>a.triggerEvent(new Dt(L)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,ht.h)(a=>a instanceof z),(0,xn.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(v.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const D of f)if(D.loadChildren&&!D.canLoad&&D._loadedConfig){const w=D._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else D.loadChildren&&!D.canLoad?g.push(this.preloadConfig(a,D)):D.children&&g.push(this.processRoutes(a,D.children));return(0,B.D)(g).pipe((0,fe.J)(),(0,ne.U)(D=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,Ae.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,Nt.z)(D=>(f._loadedConfig=D,this.processRoutes(D.module,D.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Wt),v.LFG(v.Sil),v.LFG(v.zs3),v.LFG(Uo))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})(),dr=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Bn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof z&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof $e&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new $e(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dn=new v.OlP("ROUTER_CONFIGURATION"),Vo=new v.OlP("ROUTER_FORROOT_GUARD"),$o=[lt.Ye,{provide:Te,useClass:je},{provide:Wt,useFactory:function(c,u,a,f,g,D,w={},I,L){const ue=new Wt(null,c,u,a,f,g,Zt(D));return I&&(ue.urlHandlingStrategy=I),L&&(ue.routeReuseStrategy=L),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,ue),w.enableTracing&&ue.events.subscribe(ze=>{var we,ot;null===(we=console.group)||void 0===we||we.call(console,`Router Event: ${ze.constructor.name}`),console.log(ze.toString()),console.log(ze),null===(ot=console.groupEnd)||void 0===ot||ot.call(console)}),ue},deps:[Te,E,lt.Ye,v.zs3,v.Sil,Vr,Dn,[class{},new v.FiY],[class{},new v.FiY]]},E,{provide:xt,useFactory:function(c){return c.routerState.root},deps:[Wt]},Bi,ji,class{preload(u,a){return a().pipe(Pt(()=>(0,Ae.of)(null)))}},{provide:Dn,useValue:{enableTracing:!1}}];function oc(){return new v.PXZ("Router",Wt)}let $s=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[$o,zr(a),{provide:Vo,useFactory:za,deps:[[Wt,new v.FiY,new v.tp0]]},{provide:Dn,useValue:f||{}},{provide:lt.S$,useFactory:$a,deps:[lt.lw,[new v.tBr(lt.mr),new v.FiY],Dn]},{provide:dr,useFactory:zs,deps:[Wt,lt.EM,Dn]},{provide:Uo,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:ji},{provide:v.PXZ,multi:!0,useFactory:oc},[Gr,{provide:v.ip1,multi:!0,useFactory:Ga,deps:[Gr]},{provide:Vi,useFactory:Gs,deps:[Gr]},{provide:v.tb,multi:!0,useExisting:Vi}]]}}static forChild(a){return{ngModule:c,providers:[zr(a)]}}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Vo,8),v.LFG(Wt,8))},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({}),c})();function zs(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new dr(c,u,a)}function $a(c,u,a={}){return a.useHash?new lt.Do(c,u):new lt.b0(c,u)}function za(c){return"guarded"}function zr(c){return[{provide:v.deG,multi:!0,useValue:c},{provide:Vr,multi:!0,useValue:c}]}let Gr=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new P.x}appInitializer(){return this.injector.get(lt.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(I=>f=I),D=this.injector.get(Wt),w=this.injector.get(Dn);return"disabled"===w.initialNavigation?(D.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(D.hooks.afterPreactivation=()=>this.initNavigation?(0,Ae.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),D.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(Dn),g=this.injector.get(Bi),D=this.injector.get(dr),w=this.injector.get(Wt),I=this.injector.get(v.z2F);a===I.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),D.init(),w.resetRootComponentType(I.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(v.zs3))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function Ga(c){return c.appInitializer.bind(c)}function Gs(c){return c.bootstrapListener.bind(c)}const Vi=new v.OlP("Router Initializer")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */},Ke=>{Ke(Ke.s=243)}]);