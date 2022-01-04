"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{561:(Ke,ce,T)=>{var v=T(808),x=T(223);
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
       */class ne extends v.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class re extends ne{static makeCurrent(){(0,v.HT)(new re)}onAndCancel(A,b,k){return A.addEventListener(b,k,!1),()=>{A.removeEventListener(b,k,!1)}}dispatchEvent(A,b){A.dispatchEvent(b)}remove(A){A.parentNode&&A.parentNode.removeChild(A)}createElement(A,b){return(b=b||this.getDefaultDocument()).createElement(A)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(A){return A.nodeType===Node.ELEMENT_NODE}isShadowRoot(A){return A instanceof DocumentFragment}getGlobalEventTarget(A,b){return"window"===b?window:"document"===b?A:"body"===b?A.body:null}getBaseHref(A){const b=(se=se||document.querySelector("base"),se?se.getAttribute("href"):null);return null==b?null:function(N){he=he||document.createElement("a"),he.setAttribute("href",N);const A=he.pathname;return"/"===A.charAt(0)?A:`/${A}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b)}resetBaseElement(){se=null}getUserAgent(){return window.navigator.userAgent}getCookie(A){return(0,v.Mx)(document.cookie,A)}}let he,se=null;const De=new x.OlP("TRANSITION_ID"),z=[{provide:x.ip1,useFactory:function(N,A,b){return()=>{b.get(x.CZH).donePromise.then(()=>{const k=(0,v.q)(),U=A.querySelectorAll(`style[ng-transition="${N}"]`);for(let pe=0;pe<U.length;pe++)k.remove(U[pe])})}},deps:[De,v.K0,x.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ee{static init(){(0,x.VLi)(new Ee)}addToWindow(A){x.dqk.getAngularTestability=(k,U=!0)=>{const pe=A.findTestabilityInTree(k,U);if(null==pe)throw new Error("Could not find testability for element.");return pe},x.dqk.getAllAngularTestabilities=()=>A.getAllTestabilities(),x.dqk.getAllAngularRootElements=()=>A.getAllRootElements(),x.dqk.frameworkStabilizers||(x.dqk.frameworkStabilizers=[]),x.dqk.frameworkStabilizers.push(k=>{const U=x.dqk.getAllAngularTestabilities();let pe=U.length,qe=!1;const ct=function(yt){qe=qe||yt,pe--,0==pe&&k(qe)};U.forEach(function(yt){yt.whenStable(ct)})})}findTestabilityInTree(A,b,k){if(null==b)return null;const U=A.getTestability(b);return null!=U?U:k?(0,v.q)().isShadowRoot(b)?this.findTestabilityInTree(A,b.host,!0):this.findTestabilityInTree(A,b.parentElement,!0):null}}let be=(()=>{class N{build(){return new XMLHttpRequest}}return N.\u0275fac=function(b){return new(b||N)},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ge=new x.OlP("EventManagerPlugins");let we=(()=>{class N{constructor(b,k){this._zone=k,this._eventNameToPlugin=new Map,b.forEach(U=>U.manager=this),this._plugins=b.slice().reverse()}addEventListener(b,k,U){return this._findPluginFor(k).addEventListener(b,k,U)}addGlobalEventListener(b,k,U){return this._findPluginFor(k).addGlobalEventListener(b,k,U)}getZone(){return this._zone}_findPluginFor(b){const k=this._eventNameToPlugin.get(b);if(k)return k;const U=this._plugins;for(let pe=0;pe<U.length;pe++){const qe=U[pe];if(qe.supports(b))return this._eventNameToPlugin.set(b,qe),qe}throw new Error(`No event manager plugin found for event ${b}`)}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(ge),x.LFG(x.R0b))},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();class Te{constructor(A){this._doc=A}addGlobalEventListener(A,b,k){const U=(0,v.q)().getGlobalEventTarget(this._doc,A);if(!U)throw new Error(`Unsupported event target ${U} for event ${b}`);return this.addEventListener(U,b,k)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ie=(()=>{class N{constructor(){this._stylesSet=new Set}addStyles(b){const k=new Set;b.forEach(U=>{this._stylesSet.has(U)||(this._stylesSet.add(U),k.add(U))}),this.onStylesAdded(k)}onStylesAdded(b){}getAllStyles(){return Array.from(this._stylesSet)}}return N.\u0275fac=function(b){return new(b||N)},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})(),Le=(()=>{class N extends ie{constructor(b){super(),this._doc=b,this._hostNodes=new Map,this._hostNodes.set(b.head,[])}_addStylesToHost(b,k,U){b.forEach(pe=>{const qe=this._doc.createElement("style");qe.textContent=pe,U.push(k.appendChild(qe))})}addHost(b){const k=[];this._addStylesToHost(this._stylesSet,b,k),this._hostNodes.set(b,k)}removeHost(b){const k=this._hostNodes.get(b);k&&k.forEach(ye),this._hostNodes.delete(b)}onStylesAdded(b){this._hostNodes.forEach((k,U)=>{this._addStylesToHost(b,U,k)})}ngOnDestroy(){this._hostNodes.forEach(b=>b.forEach(ye))}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(v.K0))},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();function ye(N){(0,v.q)().remove(N)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xe={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Q=/%COMP%/g;function L(N,A,b){for(let k=0;k<A.length;k++){let U=A[k];Array.isArray(U)?L(N,U,b):(U=U.replace(Q,N),b.push(U))}return b}function H(N){return A=>{if("__ngUnwrap__"===A)return N;!1===N(A)&&(A.preventDefault(),A.returnValue=!1)}}let oe=(()=>{class N{constructor(b,k,U){this.eventManager=b,this.sharedStylesHost=k,this.appId=U,this.rendererByCompId=new Map,this.defaultRenderer=new B(b)}createRenderer(b,k){if(!b||!k)return this.defaultRenderer;switch(k.encapsulation){case x.ifc.Emulated:{let U=this.rendererByCompId.get(k.id);return U||(U=new Se(this.eventManager,this.sharedStylesHost,k,this.appId),this.rendererByCompId.set(k.id,U)),U.applyToHost(b),U}case 1:case x.ifc.ShadowDom:return new ke(this.eventManager,this.sharedStylesHost,b,k);default:if(!this.rendererByCompId.has(k.id)){const U=L(k.id,k.styles,[]);this.sharedStylesHost.addStyles(U),this.rendererByCompId.set(k.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(we),x.LFG(Le),x.LFG(x.AFp))},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();class B{constructor(A){this.eventManager=A,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(A,b){return b?document.createElementNS(xe[b]||b,A):document.createElement(A)}createComment(A){return document.createComment(A)}createText(A){return document.createTextNode(A)}appendChild(A,b){A.appendChild(b)}insertBefore(A,b,k){A&&A.insertBefore(b,k)}removeChild(A,b){A&&A.removeChild(b)}selectRootElement(A,b){let k="string"==typeof A?document.querySelector(A):A;if(!k)throw new Error(`The selector "${A}" did not match any elements`);return b||(k.textContent=""),k}parentNode(A){return A.parentNode}nextSibling(A){return A.nextSibling}setAttribute(A,b,k,U){if(U){b=U+":"+b;const pe=xe[U];pe?A.setAttributeNS(pe,b,k):A.setAttribute(b,k)}else A.setAttribute(b,k)}removeAttribute(A,b,k){if(k){const U=xe[k];U?A.removeAttributeNS(U,b):A.removeAttribute(`${k}:${b}`)}else A.removeAttribute(b)}addClass(A,b){A.classList.add(b)}removeClass(A,b){A.classList.remove(b)}setStyle(A,b,k,U){U&(x.JOm.DashCase|x.JOm.Important)?A.style.setProperty(b,k,U&x.JOm.Important?"important":""):A.style[b]=k}removeStyle(A,b,k){k&x.JOm.DashCase?A.style.removeProperty(b):A.style[b]=""}setProperty(A,b,k){A[b]=k}setValue(A,b){A.nodeValue=b}listen(A,b,k){return"string"==typeof A?this.eventManager.addGlobalEventListener(A,b,H(k)):this.eventManager.addEventListener(A,b,H(k))}}class Se extends B{constructor(A,b,k,U){super(A),this.component=k;const pe=L(U+"-"+k.id,k.styles,[]);b.addStyles(pe),this.contentAttr="_ngcontent-%COMP%".replace(Q,U+"-"+k.id),this.hostAttr="_nghost-%COMP%".replace(Q,U+"-"+k.id)}applyToHost(A){super.setAttribute(A,this.hostAttr,"")}createElement(A,b){const k=super.createElement(A,b);return super.setAttribute(k,this.contentAttr,""),k}}class ke extends B{constructor(A,b,k,U){super(A),this.sharedStylesHost=b,this.hostEl=k,this.shadowRoot=k.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const pe=L(U.id,U.styles,[]);for(let qe=0;qe<pe.length;qe++){const ct=document.createElement("style");ct.textContent=pe[qe],this.shadowRoot.appendChild(ct)}}nodeOrShadowRoot(A){return A===this.hostEl?this.shadowRoot:A}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(A,b){return super.appendChild(this.nodeOrShadowRoot(A),b)}insertBefore(A,b,k){return super.insertBefore(this.nodeOrShadowRoot(A),b,k)}removeChild(A,b){return super.removeChild(this.nodeOrShadowRoot(A),b)}parentNode(A){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(A)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let et=(()=>{class N extends Te{constructor(b){super(b)}supports(b){return!0}addEventListener(b,k,U){return b.addEventListener(k,U,!1),()=>this.removeEventListener(b,k,U)}removeEventListener(b,k,U){return b.removeEventListener(k,U)}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(v.K0))},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dn=["alt","control","meta","shift"],En={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Yt={alt:N=>N.altKey,control:N=>N.ctrlKey,meta:N=>N.metaKey,shift:N=>N.shiftKey};let In=(()=>{class N extends Te{constructor(b){super(b)}supports(b){return null!=N.parseEventName(b)}addEventListener(b,k,U){const pe=N.parseEventName(k),qe=N.eventCallback(pe.fullKey,U,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,v.q)().onAndCancel(b,pe.domEventName,qe))}static parseEventName(b){const k=b.toLowerCase().split("."),U=k.shift();if(0===k.length||"keydown"!==U&&"keyup"!==U)return null;const pe=N._normalizeKey(k.pop());let qe="";if(dn.forEach(yt=>{const _n=k.indexOf(yt);_n>-1&&(k.splice(_n,1),qe+=yt+".")}),qe+=pe,0!=k.length||0===pe.length)return null;const ct={};return ct.domEventName=U,ct.fullKey=qe,ct}static getEventFullKey(b){let k="",U=function(N){let A=N.key;if(null==A){if(A=N.keyIdentifier,null==A)return"Unidentified";A.startsWith("U+")&&(A=String.fromCharCode(parseInt(A.substring(2),16)),3===N.location&&xt.hasOwnProperty(A)&&(A=xt[A]))}return En[A]||A}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b);return U=U.toLowerCase()," "===U?U="space":"."===U&&(U="dot"),dn.forEach(pe=>{pe!=U&&Yt[pe](b)&&(k+=pe+".")}),k+=U,k}static eventCallback(b,k,U){return pe=>{N.getEventFullKey(pe)===b&&U.runGuarded(()=>k(pe))}}static _normalizeKey(b){return"esc"===b?"escape":b}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(v.K0))},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})();const Mn=(0,x.eFA)(x._c5,"browser",[{provide:x.Lbi,useValue:v.bD},{provide:x.g9A,useValue:function(){re.makeCurrent(),Ee.init()},multi:!0},{provide:v.K0,useFactory:function(){return(0,x.RDi)(document),document},deps:[]}]),ar=[{provide:x.zSh,useValue:"root"},{provide:x.qLn,useFactory:function(){return new x.qLn},deps:[]},{provide:ge,useClass:et,multi:!0,deps:[v.K0,x.R0b,x.Lbi]},{provide:ge,useClass:In,multi:!0,deps:[v.K0]},{provide:oe,useClass:oe,deps:[we,Le,x.AFp]},{provide:x.FYo,useExisting:oe},{provide:ie,useExisting:Le},{provide:Le,useClass:Le,deps:[v.K0]},{provide:x.dDg,useClass:x.dDg,deps:[x.R0b]},{provide:we,useClass:we,deps:[ge,x.R0b]},{provide:v.JF,useClass:be,deps:[]}];let tt=(()=>{class N{constructor(b){if(b)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(b){return{ngModule:N,providers:[{provide:x.AFp,useValue:b.appId},{provide:De,useExisting:x.AFp},z]}}}return N.\u0275fac=function(b){return new(b||N)(x.LFG(N,12))},N.\u0275mod=x.oAB({type:N}),N.\u0275inj=x.cJS({providers:ar,imports:[v.ez,x.hGG]}),N})();
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
var wt=T(520),Nn=T(783);let eo=(()=>{class N{constructor(){this.title="portfolio"}}return N.\u0275fac=function(b){return new(b||N)},N.\u0275cmp=x.Xpm({type:N,selectors:[["app-root"]],decls:1,vars:0,template:function(b,k){1&b&&x._UZ(0,"router-outlet")},directives:[Nn.lC],styles:[""]}),N})();const $r=[{path:"",loadChildren:()=>T.e(680).then(T.bind(T,680)).then(N=>N.LandingModule)}],Rr=[{provide:wt.TP,useClass:(()=>{class N{constructor(){}intercept(b,k){return b.url.startsWith("http")||(b=b.clone({url:"https://anderson.free.mockoapp.net/"+b.url})),k.handle(b)}}return N.\u0275fac=function(b){return new(b||N)},N.\u0275prov=x.Yz7({token:N,factory:N.\u0275fac}),N})(),multi:!0}];let Ln=(()=>{class N{}return N.\u0275fac=function(b){return new(b||N)},N.\u0275mod=x.oAB({type:N,bootstrap:[eo]}),N.\u0275inj=x.cJS({providers:Rr,imports:[[tt,Nn.Bz.forRoot($r),wt.JF]]}),N})();(0,x.G48)(),Mn().bootstrapModule(Ln).catch(N=>console.error(N))},306:(Ke,ce,T)=>{T.d(ce,{y:()=>ee});var v=T(961),x=T(727),ne=T(822),re=T(671);var he=T(416),Oe=T(576),De=T(806);let ee=(()=>{class ge{constructor(Te){Te&&(this._subscribe=Te)}lift(Te){const ie=new ge;return ie.source=this,ie.operator=Te,ie}subscribe(Te,ie,Le){const ye=function(ge){return ge&&ge instanceof v.Lv||function(ge){return ge&&(0,Oe.m)(ge.next)&&(0,Oe.m)(ge.error)&&(0,Oe.m)(ge.complete)}(ge)&&(0,x.Nn)(ge)}(Te)?Te:new v.Hp(Te,ie,Le);return(0,De.x)(()=>{const{operator:xe,source:Q}=this;ye.add(xe?xe.call(ye,Q):Q?this._subscribe(ye):this._trySubscribe(ye))}),ye}_trySubscribe(Te){try{return this._subscribe(Te)}catch(ie){Te.error(ie)}}forEach(Te,ie){return new(ie=z(ie))((Le,ye)=>{let xe;xe=this.subscribe(Q=>{try{Te(Q)}catch(Pe){ye(Pe),null==xe||xe.unsubscribe()}},ye,Le)})}_subscribe(Te){var ie;return null===(ie=this.source)||void 0===ie?void 0:ie.subscribe(Te)}[ne.L](){return this}pipe(...Te){return function(ge){return 0===ge.length?re.y:1===ge.length?ge[0]:function(Te){return ge.reduce((ie,Le)=>Le(ie),Te)}}(Te)(this)}toPromise(Te){return new(Te=z(Te))((ie,Le)=>{let ye;this.subscribe(xe=>ye=xe,xe=>Le(xe),()=>ie(ye))})}}return ge.create=we=>new ge(we),ge})();function z(ge){var we;return null!==(we=null!=ge?ge:he.v.Promise)&&void 0!==we?we:Promise}},579:(Ke,ce,T)=>{T.d(ce,{x:()=>he});var v=T(306),x=T(727);const re=(0,T(888).d)(De=>function(){De(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var se=T(737),Ne=T(806);let he=(()=>{class De extends v.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(z){const Ee=new Oe(this,this);return Ee.operator=z,Ee}_throwIfClosed(){if(this.closed)throw new re}next(z){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const Ee=this.observers.slice();for(const be of Ee)be.next(z)}})}error(z){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=z;const{observers:Ee}=this;for(;Ee.length;)Ee.shift().error(z)}})}complete(){(0,Ne.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:z}=this;for(;z.length;)z.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var z;return(null===(z=this.observers)||void 0===z?void 0:z.length)>0}_trySubscribe(z){return this._throwIfClosed(),super._trySubscribe(z)}_subscribe(z){return this._throwIfClosed(),this._checkFinalizedStatuses(z),this._innerSubscribe(z)}_innerSubscribe(z){const{hasError:Ee,isStopped:be,observers:ge}=this;return Ee||be?x.Lc:(ge.push(z),new x.w0(()=>(0,se.P)(ge,z)))}_checkFinalizedStatuses(z){const{hasError:Ee,thrownError:be,isStopped:ge}=this;Ee?z.error(be):ge&&z.complete()}asObservable(){const z=new v.y;return z.source=this,z}}return De.create=(ee,z)=>new Oe(ee,z),De})();class Oe extends he{constructor(ee,z){super(),this.destination=ee,this.source=z}next(ee){var z,Ee;null===(Ee=null===(z=this.destination)||void 0===z?void 0:z.next)||void 0===Ee||Ee.call(z,ee)}error(ee){var z,Ee;null===(Ee=null===(z=this.destination)||void 0===z?void 0:z.error)||void 0===Ee||Ee.call(z,ee)}complete(){var ee,z;null===(z=null===(ee=this.destination)||void 0===ee?void 0:ee.complete)||void 0===z||z.call(ee)}_subscribe(ee){var z,Ee;return null!==(Ee=null===(z=this.source)||void 0===z?void 0:z.subscribe(ee))&&void 0!==Ee?Ee:x.Lc}}},961:(Ke,ce,T)=>{T.d(ce,{Hp:()=>be,Lv:()=>Ee});var v=T(576),x=T(727),ne=T(416),re=T(849);function se(){}const Ne=De("C",void 0,void 0);function De(Le,ye,xe){return{kind:Le,value:ye,error:xe}}var ee=T(410),z=T(806);class Ee extends x.w0{constructor(ye){super(),this.isStopped=!1,ye?(this.destination=ye,(0,x.Nn)(ye)&&ye.add(this)):this.destination=ie}static create(ye,xe,Q){return new be(ye,xe,Q)}next(ye){this.isStopped?Te(De("N",ye,void 0),this):this._next(ye)}error(ye){this.isStopped?Te(De("E",void 0,ye),this):(this.isStopped=!0,this._error(ye))}complete(){this.isStopped?Te(Ne,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(ye){this.destination.next(ye)}_error(ye){try{this.destination.error(ye)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class be extends Ee{constructor(ye,xe,Q){let Pe;if(super(),(0,v.m)(ye))Pe=ye;else if(ye){let ze;({next:Pe,error:xe,complete:Q}=ye),this&&ne.v.useDeprecatedNextContext?(ze=Object.create(ye),ze.unsubscribe=()=>this.unsubscribe()):ze=ye,Pe=null==Pe?void 0:Pe.bind(ze),xe=null==xe?void 0:xe.bind(ze),Q=null==Q?void 0:Q.bind(ze)}this.destination={next:Pe?ge(Pe):se,error:ge(null!=xe?xe:we),complete:Q?ge(Q):se}}}function ge(Le,ye){return(...xe)=>{try{Le(...xe)}catch(Q){ne.v.useDeprecatedSynchronousErrorHandling?(0,z.O)(Q):(0,re.h)(Q)}}}function we(Le){throw Le}function Te(Le,ye){const{onStoppedNotification:xe}=ne.v;xe&&ee.z.setTimeout(()=>xe(Le,ye))}const ie={closed:!0,next:se,error:we,complete:se}},727:(Ke,ce,T)=>{T.d(ce,{Lc:()=>Ne,w0:()=>se,Nn:()=>he});var v=T(576);const ne=(0,T(888).d)(De=>function(z){De(this),this.message=z?`${z.length} errors occurred during unsubscription:\n${z.map((Ee,be)=>`${be+1}) ${Ee.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=z});var re=T(737);class se{constructor(ee){this.initialTeardown=ee,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let ee;if(!this.closed){this.closed=!0;const{_parentage:z}=this;if(z)if(this._parentage=null,Array.isArray(z))for(const ge of z)ge.remove(this);else z.remove(this);const{initialTeardown:Ee}=this;if((0,v.m)(Ee))try{Ee()}catch(ge){ee=ge instanceof ne?ge.errors:[ge]}const{_teardowns:be}=this;if(be){this._teardowns=null;for(const ge of be)try{Oe(ge)}catch(we){ee=null!=ee?ee:[],we instanceof ne?ee=[...ee,...we.errors]:ee.push(we)}}if(ee)throw new ne(ee)}}add(ee){var z;if(ee&&ee!==this)if(this.closed)Oe(ee);else{if(ee instanceof se){if(ee.closed||ee._hasParent(this))return;ee._addParent(this)}(this._teardowns=null!==(z=this._teardowns)&&void 0!==z?z:[]).push(ee)}}_hasParent(ee){const{_parentage:z}=this;return z===ee||Array.isArray(z)&&z.includes(ee)}_addParent(ee){const{_parentage:z}=this;this._parentage=Array.isArray(z)?(z.push(ee),z):z?[z,ee]:ee}_removeParent(ee){const{_parentage:z}=this;z===ee?this._parentage=null:Array.isArray(z)&&(0,re.P)(z,ee)}remove(ee){const{_teardowns:z}=this;z&&(0,re.P)(z,ee),ee instanceof se&&ee._removeParent(this)}}se.EMPTY=(()=>{const De=new se;return De.closed=!0,De})();const Ne=se.EMPTY;function he(De){return De instanceof se||De&&"closed"in De&&(0,v.m)(De.remove)&&(0,v.m)(De.add)&&(0,v.m)(De.unsubscribe)}function Oe(De){(0,v.m)(De)?De():De.unsubscribe()}},416:(Ke,ce,T)=>{T.d(ce,{v:()=>v});const v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Ke,ce,T)=>{T.d(ce,{E:()=>x});const x=new(T(306).y)(se=>se.complete())},76:(Ke,ce,T)=>{T.d(ce,{D:()=>Xe});var v=T(421),x=T(672),ne=T(482),re=T(403);function se(Ie,de=0){return(0,ne.e)((O,L)=>{O.subscribe(new re.Q(L,H=>(0,x.f)(L,Ie,()=>L.next(H),de),()=>(0,x.f)(L,Ie,()=>L.complete(),de),H=>(0,x.f)(L,Ie,()=>L.error(H),de)))})}function Ne(Ie,de=0){return(0,ne.e)((O,L)=>{L.add(Ie.schedule(()=>O.subscribe(L),de))})}var De=T(306),z=T(202),Ee=T(576);function ge(Ie,de){if(!Ie)throw new Error("Iterable cannot be null");return new De.y(O=>{(0,x.f)(O,de,()=>{const L=Ie[Symbol.asyncIterator]();(0,x.f)(O,de,()=>{L.next().then(H=>{H.done?O.complete():O.next(H.value)})},0,!0)})})}var we=T(670),Te=T(239),ie=T(144),Le=T(495),ye=T(206),xe=T(532),Q=T(260);function Xe(Ie,de){return de?function(Ie,de){if(null!=Ie){if((0,we.c)(Ie))return function(Ie,de){return(0,v.Xf)(Ie).pipe(Ne(de),se(de))}(Ie,de);if((0,ie.z)(Ie))return function(Ie,de){return new De.y(O=>{let L=0;return de.schedule(function(){L===Ie.length?O.complete():(O.next(Ie[L++]),O.closed||this.schedule())})})}(Ie,de);if((0,Te.t)(Ie))return function(Ie,de){return(0,v.Xf)(Ie).pipe(Ne(de),se(de))}(Ie,de);if((0,ye.D)(Ie))return ge(Ie,de);if((0,Le.T)(Ie))return function(Ie,de){return new De.y(O=>{let L;return(0,x.f)(O,de,()=>{L=Ie[z.h](),(0,x.f)(O,de,()=>{let H,K;try{({value:H,done:K}=L.next())}catch(oe){return void O.error(oe)}K?O.complete():O.next(H)},0,!0)}),()=>(0,Ee.m)(null==L?void 0:L.return)&&L.return()})}(Ie,de);if((0,Q.L)(Ie))return function(Ie,de){return ge((0,Q.Q)(Ie),de)}(Ie,de)}throw(0,xe.z)(Ie)}(Ie,de):(0,v.Xf)(Ie)}},421:(Ke,ce,T)=>{T.d(ce,{Xf:()=>be});var v=T(987),x=T(144),ne=T(239),re=T(306),se=T(670),Ne=T(206),he=T(532),Oe=T(495),De=T(260),ee=T(576),z=T(849),Ee=T(822);function be(Q){if(Q instanceof re.y)return Q;if(null!=Q){if((0,se.c)(Q))return function(Q){return new re.y(Pe=>{const ze=Q[Ee.L]();if((0,ee.m)(ze.subscribe))return ze.subscribe(Pe);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(Q);if((0,x.z)(Q))return function(Q){return new re.y(Pe=>{for(let ze=0;ze<Q.length&&!Pe.closed;ze++)Pe.next(Q[ze]);Pe.complete()})}(Q);if((0,ne.t)(Q))return function(Q){return new re.y(Pe=>{Q.then(ze=>{Pe.closed||(Pe.next(ze),Pe.complete())},ze=>Pe.error(ze)).then(null,z.h)})}(Q);if((0,Ne.D)(Q))return Le(Q);if((0,Oe.T)(Q))return function(Q){return new re.y(Pe=>{for(const ze of Q)if(Pe.next(ze),Pe.closed)return;Pe.complete()})}(Q);if((0,De.L)(Q))return function(Q){return Le((0,De.Q)(Q))}(Q)}throw(0,he.z)(Q)}function Le(Q){return new re.y(Pe=>{(function(Q,Pe){var ze,Xe,Ie,de;return(0,v.mG)(this,void 0,void 0,function*(){try{for(ze=(0,v.KL)(Q);!(Xe=yield ze.next()).done;)if(Pe.next(Xe.value),Pe.closed)return}catch(O){Ie={error:O}}finally{try{Xe&&!Xe.done&&(de=ze.return)&&(yield de.call(ze))}finally{if(Ie)throw Ie.error}}Pe.complete()})})(Q,Pe).catch(ze=>Pe.error(ze))})}},646:(Ke,ce,T)=>{T.d(ce,{of:()=>ne});var v=T(669),x=T(76);function ne(...re){const se=(0,v.yG)(re);return(0,x.D)(re,se)}},403:(Ke,ce,T)=>{T.d(ce,{Q:()=>x});var v=T(961);class x extends v.Lv{constructor(re,se,Ne,he,Oe){super(re),this.onFinalize=Oe,this._next=se?function(De){try{se(De)}catch(ee){re.error(ee)}}:super._next,this._error=he?function(De){try{he(De)}catch(ee){re.error(ee)}finally{this.unsubscribe()}}:super._error,this._complete=Ne?function(){try{Ne()}catch(De){re.error(De)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var re;const{closed:se}=this;super.unsubscribe(),!se&&(null===(re=this.onFinalize)||void 0===re||re.call(this))}}},351:(Ke,ce,T)=>{T.d(ce,{b:()=>ne});var v=T(577),x=T(576);function ne(re,se){return(0,x.m)(se)?(0,v.z)(re,se,1):(0,v.z)(re,1)}},300:(Ke,ce,T)=>{T.d(ce,{h:()=>ne});var v=T(482),x=T(403);function ne(re,se){return(0,v.e)((Ne,he)=>{let Oe=0;Ne.subscribe(new x.Q(he,De=>re.call(se,De,Oe++)&&he.next(De)))})}},4:(Ke,ce,T)=>{T.d(ce,{U:()=>ne});var v=T(482),x=T(403);function ne(re,se){return(0,v.e)((Ne,he)=>{let Oe=0;Ne.subscribe(new x.Q(he,De=>{he.next(re.call(se,De,Oe++))}))})}},189:(Ke,ce,T)=>{T.d(ce,{J:()=>ne});var v=T(577),x=T(671);function ne(re=1/0){return(0,v.z)(x.y,re)}},577:(Ke,ce,T)=>{T.d(ce,{z:()=>Oe});var v=T(4),x=T(421),ne=T(482),se=(T(672),T(403)),he=T(576);function Oe(De,ee,z=1/0){return(0,he.m)(ee)?Oe((Ee,be)=>(0,v.U)((ge,we)=>ee(Ee,ge,be,we))((0,x.Xf)(De(Ee,be))),z):("number"==typeof ee&&(z=ee),(0,ne.e)((Ee,be)=>function(De,ee,z,Ee,be,ge,we,Te){const ie=[];let Le=0,ye=0,xe=!1;const Q=()=>{xe&&!ie.length&&!Le&&ee.complete()},Pe=Xe=>Le<Ee?ze(Xe):ie.push(Xe),ze=Xe=>{Le++;let Ie=!1;(0,x.Xf)(z(Xe,ye++)).subscribe(new se.Q(ee,de=>{ee.next(de)},()=>{Ie=!0},void 0,()=>{if(Ie)try{for(Le--;ie.length&&Le<Ee;){const de=ie.shift();ze(de)}Q()}catch(de){ee.error(de)}}))};return De.subscribe(new se.Q(ee,Pe,()=>{xe=!0,Q()})),()=>{}}(Ee,be,De,z)))}},698:(Ke,ce,T)=>{T.d(ce,{q:()=>re});var v=T(515),x=T(482),ne=T(403);function re(se){return se<=0?()=>v.E:(0,x.e)((Ne,he)=>{let Oe=0;Ne.subscribe(new ne.Q(he,De=>{++Oe<=se&&(he.next(De),se<=Oe&&he.complete())}))})}},410:(Ke,ce,T)=>{T.d(ce,{z:()=>v});const v={setTimeout(...x){const{delegate:ne}=v;return((null==ne?void 0:ne.setTimeout)||setTimeout)(...x)},clearTimeout(x){const{delegate:ne}=v;return((null==ne?void 0:ne.clearTimeout)||clearTimeout)(x)},delegate:void 0}},202:(Ke,ce,T)=>{T.d(ce,{h:()=>x});const x="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},822:(Ke,ce,T)=>{T.d(ce,{L:()=>v});const v="function"==typeof Symbol&&Symbol.observable||"@@observable"},669:(Ke,ce,T)=>{T.d(ce,{_6:()=>Ne,jO:()=>re,yG:()=>se});var v=T(576);function ne(he){return he[he.length-1]}function re(he){return(0,v.m)(ne(he))?he.pop():void 0}function se(he){return function(he){return he&&(0,v.m)(he.schedule)}(ne(he))?he.pop():void 0}function Ne(he,Oe){return"number"==typeof ne(he)?he.pop():Oe}},737:(Ke,ce,T)=>{function v(x,ne){if(x){const re=x.indexOf(ne);0<=re&&x.splice(re,1)}}T.d(ce,{P:()=>v})},888:(Ke,ce,T)=>{function v(x){const re=x(se=>{Error.call(se),se.stack=(new Error).stack});return re.prototype=Object.create(Error.prototype),re.prototype.constructor=re,re}T.d(ce,{d:()=>v})},806:(Ke,ce,T)=>{T.d(ce,{x:()=>ne,O:()=>re});var v=T(416);let x=null;function ne(se){if(v.v.useDeprecatedSynchronousErrorHandling){const Ne=!x;if(Ne&&(x={errorThrown:!1,error:null}),se(),Ne){const{errorThrown:he,error:Oe}=x;if(x=null,he)throw Oe}}else se()}function re(se){v.v.useDeprecatedSynchronousErrorHandling&&x&&(x.errorThrown=!0,x.error=se)}},672:(Ke,ce,T)=>{function v(x,ne,re,se=0,Ne=!1){const he=ne.schedule(function(){re(),Ne?x.add(this.schedule(null,se)):this.unsubscribe()},se);if(x.add(he),!Ne)return he}T.d(ce,{f:()=>v})},671:(Ke,ce,T)=>{function v(x){return x}T.d(ce,{y:()=>v})},144:(Ke,ce,T)=>{T.d(ce,{z:()=>v});const v=x=>x&&"number"==typeof x.length&&"function"!=typeof x},206:(Ke,ce,T)=>{T.d(ce,{D:()=>x});var v=T(576);function x(ne){return Symbol.asyncIterator&&(0,v.m)(null==ne?void 0:ne[Symbol.asyncIterator])}},576:(Ke,ce,T)=>{function v(x){return"function"==typeof x}T.d(ce,{m:()=>v})},670:(Ke,ce,T)=>{T.d(ce,{c:()=>ne});var v=T(822),x=T(576);function ne(re){return(0,x.m)(re[v.L])}},495:(Ke,ce,T)=>{T.d(ce,{T:()=>ne});var v=T(202),x=T(576);function ne(re){return(0,x.m)(null==re?void 0:re[v.h])}},239:(Ke,ce,T)=>{T.d(ce,{t:()=>x});var v=T(576);function x(ne){return(0,v.m)(null==ne?void 0:ne.then)}},260:(Ke,ce,T)=>{T.d(ce,{Q:()=>ne,L:()=>re});var v=T(987),x=T(576);function ne(se){return(0,v.FC)(this,arguments,function*(){const he=se.getReader();try{for(;;){const{value:Oe,done:De}=yield(0,v.qq)(he.read());if(De)return yield(0,v.qq)(void 0);yield yield(0,v.qq)(Oe)}}finally{he.releaseLock()}})}function re(se){return(0,x.m)(null==se?void 0:se.getReader)}},482:(Ke,ce,T)=>{T.d(ce,{A:()=>x,e:()=>ne});var v=T(576);function x(re){return(0,v.m)(null==re?void 0:re.lift)}function ne(re){return se=>{if(x(se))return se.lift(function(Ne){try{return re(Ne,this)}catch(he){this.error(he)}});throw new TypeError("Unable to lift unknown Observable type")}}},849:(Ke,ce,T)=>{T.d(ce,{h:()=>ne});var v=T(416),x=T(410);function ne(re){x.z.setTimeout(()=>{const{onUnhandledError:se}=v.v;if(!se)throw re;se(re)})}},532:(Ke,ce,T)=>{function v(x){return new TypeError(`You provided ${null!==x&&"object"==typeof x?"an invalid object":`'${x}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}T.d(ce,{z:()=>v})},987:(Ke,ce,T)=>{function Oe(O,L,H,K){return new(H||(H=Promise))(function(B,Me){function st(et){try{ke(K.next(et))}catch(dn){Me(dn)}}function Se(et){try{ke(K.throw(et))}catch(dn){Me(dn)}}function ke(et){et.done?B(et.value):function(B){return B instanceof H?B:new H(function(Me){Me(B)})}(et.value).then(st,Se)}ke((K=K.apply(O,L||[])).next())})}function ie(O){return this instanceof ie?(this.v=O,this):new ie(O)}function Le(O,L,H){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var oe,K=H.apply(O,L||[]),B=[];return oe={},Me("next"),Me("throw"),Me("return"),oe[Symbol.asyncIterator]=function(){return this},oe;function Me(St){K[St]&&(oe[St]=function(En){return new Promise(function(xt,Yt){B.push([St,En,xt,Yt])>1||st(St,En)})})}function st(St,En){try{!function(St){St.value instanceof ie?Promise.resolve(St.value.v).then(ke,et):dn(B[0][2],St)}(K[St](En))}catch(xt){dn(B[0][3],xt)}}function ke(St){st("next",St)}function et(St){st("throw",St)}function dn(St,En){St(En),B.shift(),B.length&&st(B[0][0],B[0][1])}}function xe(O){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H,L=O[Symbol.asyncIterator];return L?L.call(O):(O=function(O){var L="function"==typeof Symbol&&Symbol.iterator,H=L&&O[L],K=0;if(H)return H.call(O);if(O&&"number"==typeof O.length)return{next:function(){return O&&K>=O.length&&(O=void 0),{value:O&&O[K++],done:!O}}};throw new TypeError(L?"Object is not iterable.":"Symbol.iterator is not defined.")}(O),H={},K("next"),K("throw"),K("return"),H[Symbol.asyncIterator]=function(){return this},H);function K(B){H[B]=O[B]&&function(Me){return new Promise(function(st,Se){!function(B,Me,st,Se){Promise.resolve(Se).then(function(ke){B({value:ke,done:st})},Me)}(st,Se,(Me=O[B](Me)).done,Me.value)})}}}T.d(ce,{mG:()=>Oe,qq:()=>ie,FC:()=>Le,KL:()=>xe})},808:(Ke,ce,T)=>{T.d(ce,{mr:()=>ye,Ov:()=>qn,ez:()=>ro,K0:()=>he,uU:()=>vi,Do:()=>Q,V_:()=>ee,Ye:()=>Pe,S$:()=>ie,mk:()=>ht,sg:()=>Rt,O5:()=>lr,PC:()=>Jt,RF:()=>Sn,n9:()=>Or,b0:()=>xe,lw:()=>Oe,EM:()=>Ao,JF:()=>on,w_:()=>Ne,bD:()=>oo,q:()=>ne,Mx:()=>We,HT:()=>se});var v=T(223);
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
       */let x=null;function ne(){return x}function se(h){x||(x=h)}class Ne{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const he=new v.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Oe=(()=>{class h{historyGo(p){throw new Error("Not implemented")}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=v.Yz7({token:h,factory:function(){return(0,v.LFG)(z)},providedIn:"platform"}),h})();const ee=new v.OlP("Location Initialized");let z=(()=>{class h extends Oe{constructor(p){super(),this._doc=p,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ne().getBaseHref(this._doc)}onPopState(p){const E=ne().getGlobalEventTarget(this._doc,"window");return E.addEventListener("popstate",p,!1),()=>E.removeEventListener("popstate",p)}onHashChange(p){const E=ne().getGlobalEventTarget(this._doc,"window");return E.addEventListener("hashchange",p,!1),()=>E.removeEventListener("hashchange",p)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(p){this.location.pathname=p}pushState(p,E,S){Ee()?this._history.pushState(p,E,S):this.location.hash=S}replaceState(p,E,S){Ee()?this._history.replaceState(p,E,S):this.location.hash=S}forward(){this._history.forward()}back(){this._history.back()}historyGo(p=0){this._history.go(p)}getState(){return this._history.state}}return h.\u0275fac=function(p){return new(p||h)(v.LFG(he))},h.\u0275prov=v.Yz7({token:h,factory:function(){return new z((0,v.LFG)(he))},providedIn:"platform"}),h})();function Ee(){return!!window.history.pushState}
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
function ge(h,C){if(0==h.length)return C;if(0==C.length)return h;let p=0;return h.endsWith("/")&&p++,C.startsWith("/")&&p++,2==p?h+C.substring(1):1==p?h+C:h+"/"+C}function we(h){const C=h.match(/#|\?|$/),p=C&&C.index||h.length;return h.slice(0,p-("/"===h[p-1]?1:0))+h.slice(p)}function Te(h){return h&&"?"!==h[0]?"?"+h:h}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ie=(()=>{class h{historyGo(p){throw new Error("Not implemented")}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=v.Yz7({token:h,factory:function(){return function(h){const C=(0,v.LFG)(he).location;return new xe((0,v.LFG)(Oe),C&&C.origin||"")}()},providedIn:"root"}),h})();const ye=new v.OlP("appBaseHref");let xe=(()=>{class h extends ie{constructor(p,E){if(super(),this._platformLocation=p,this._removeListenerFns=[],null==E&&(E=this._platformLocation.getBaseHrefFromDOM()),null==E)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=E}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(p){this._removeListenerFns.push(this._platformLocation.onPopState(p),this._platformLocation.onHashChange(p))}getBaseHref(){return this._baseHref}prepareExternalUrl(p){return ge(this._baseHref,p)}path(p=!1){const E=this._platformLocation.pathname+Te(this._platformLocation.search),S=this._platformLocation.hash;return S&&p?`${E}${S}`:E}pushState(p,E,S,V){const G=this.prepareExternalUrl(S+Te(V));this._platformLocation.pushState(p,E,G)}replaceState(p,E,S,V){const G=this.prepareExternalUrl(S+Te(V));this._platformLocation.replaceState(p,E,G)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(p=0){var E,S;null===(S=(E=this._platformLocation).historyGo)||void 0===S||S.call(E,p)}}return h.\u0275fac=function(p){return new(p||h)(v.LFG(Oe),v.LFG(ye,8))},h.\u0275prov=v.Yz7({token:h,factory:h.\u0275fac}),h})(),Q=(()=>{class h extends ie{constructor(p,E){super(),this._platformLocation=p,this._baseHref="",this._removeListenerFns=[],null!=E&&(this._baseHref=E)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(p){this._removeListenerFns.push(this._platformLocation.onPopState(p),this._platformLocation.onHashChange(p))}getBaseHref(){return this._baseHref}path(p=!1){let E=this._platformLocation.hash;return null==E&&(E="#"),E.length>0?E.substring(1):E}prepareExternalUrl(p){const E=ge(this._baseHref,p);return E.length>0?"#"+E:E}pushState(p,E,S,V){let G=this.prepareExternalUrl(S+Te(V));0==G.length&&(G=this._platformLocation.pathname),this._platformLocation.pushState(p,E,G)}replaceState(p,E,S,V){let G=this.prepareExternalUrl(S+Te(V));0==G.length&&(G=this._platformLocation.pathname),this._platformLocation.replaceState(p,E,G)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(p=0){var E,S;null===(S=(E=this._platformLocation).historyGo)||void 0===S||S.call(E,p)}}return h.\u0275fac=function(p){return new(p||h)(v.LFG(Oe),v.LFG(ye,8))},h.\u0275prov=v.Yz7({token:h,factory:h.\u0275fac}),h})(),Pe=(()=>{class h{constructor(p,E){this._subject=new v.vpe,this._urlChangeListeners=[],this._platformStrategy=p;const S=this._platformStrategy.getBaseHref();this._platformLocation=E,this._baseHref=we(Ie(S)),this._platformStrategy.onPopState(V=>{this._subject.emit({url:this.path(!0),pop:!0,state:V.state,type:V.type})})}path(p=!1){return this.normalize(this._platformStrategy.path(p))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(p,E=""){return this.path()==this.normalize(p+Te(E))}normalize(p){return h.stripTrailingSlash(function(h,C){return h&&C.startsWith(h)?C.substring(h.length):C}(this._baseHref,Ie(p)))}prepareExternalUrl(p){return p&&"/"!==p[0]&&(p="/"+p),this._platformStrategy.prepareExternalUrl(p)}go(p,E="",S=null){this._platformStrategy.pushState(S,"",p,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(p+Te(E)),S)}replaceState(p,E="",S=null){this._platformStrategy.replaceState(S,"",p,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(p+Te(E)),S)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(p=0){var E,S;null===(S=(E=this._platformStrategy).historyGo)||void 0===S||S.call(E,p)}onUrlChange(p){this._urlChangeListeners.push(p),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(E=>{this._notifyUrlChangeListeners(E.url,E.state)}))}_notifyUrlChangeListeners(p="",E){this._urlChangeListeners.forEach(S=>S(p,E))}subscribe(p,E,S){return this._subject.subscribe({next:p,error:E,complete:S})}}return h.normalizeQueryParams=Te,h.joinWithSlash=ge,h.stripTrailingSlash=we,h.\u0275fac=function(p){return new(p||h)(v.LFG(ie),v.LFG(Oe))},h.\u0275prov=v.Yz7({token:h,factory:function(){return new Pe((0,v.LFG)(ie),(0,v.LFG)(Oe))},providedIn:"root"}),h})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ie(h){return h.replace(/\/index.html$/,"")}
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
var L=(()=>((L=L||{})[L.Zero=0]="Zero",L[L.One=1]="One",L[L.Two=2]="Two",L[L.Few=3]="Few",L[L.Many=4]="Many",L[L.Other=5]="Other",L))(),H=(()=>((H=H||{})[H.Format=0]="Format",H[H.Standalone=1]="Standalone",H))(),K=(()=>((K=K||{})[K.Narrow=0]="Narrow",K[K.Abbreviated=1]="Abbreviated",K[K.Wide=2]="Wide",K[K.Short=3]="Short",K))(),oe=(()=>((oe=oe||{})[oe.Short=0]="Short",oe[oe.Medium=1]="Medium",oe[oe.Long=2]="Long",oe[oe.Full=3]="Full",oe))(),B=(()=>((B=B||{})[B.Decimal=0]="Decimal",B[B.Group=1]="Group",B[B.List=2]="List",B[B.PercentSign=3]="PercentSign",B[B.PlusSign=4]="PlusSign",B[B.MinusSign=5]="MinusSign",B[B.Exponential=6]="Exponential",B[B.SuperscriptingExponent=7]="SuperscriptingExponent",B[B.PerMille=8]="PerMille",B[B.Infinity=9]="Infinity",B[B.NaN=10]="NaN",B[B.TimeSeparator=11]="TimeSeparator",B[B.CurrencyDecimal=12]="CurrencyDecimal",B[B.CurrencyGroup=13]="CurrencyGroup",B))();function xt(h,C){return mt((0,v.cg1)(h)[v.wAp.DateFormat],C)}function Yt(h,C){return mt((0,v.cg1)(h)[v.wAp.TimeFormat],C)}function In(h,C){return mt((0,v.cg1)(h)[v.wAp.DateTimeFormat],C)}function Bt(h,C){const p=(0,v.cg1)(h),E=p[v.wAp.NumberSymbols][C];if(void 0===E){if(C===B.CurrencyDecimal)return p[v.wAp.NumberSymbols][B.Decimal];if(C===B.CurrencyGroup)return p[v.wAp.NumberSymbols][B.Group]}return E}const ar=v.kL8;function tt(h){if(!h[v.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${h[v.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function mt(h,C){for(let p=C;p>-1;p--)if(void 0!==h[p])return h[p];throw new Error("Locale data API: locale data undefined")}function Kt(h){const[C,p]=h.split(":");return{hours:+C,minutes:+p}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,X={},Z=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var q=(()=>((q=q||{})[q.Short=0]="Short",q[q.ShortGMT=1]="ShortGMT",q[q.Long=2]="Long",q[q.Extended=3]="Extended",q))(),ue=(()=>((ue=ue||{})[ue.FullYear=0]="FullYear",ue[ue.Month=1]="Month",ue[ue.Date=2]="Date",ue[ue.Hours=3]="Hours",ue[ue.Minutes=4]="Minutes",ue[ue.Seconds=5]="Seconds",ue[ue.FractionalSeconds=6]="FractionalSeconds",ue[ue.Day=7]="Day",ue))(),ve=(()=>((ve=ve||{})[ve.DayPeriods=0]="DayPeriods",ve[ve.Days=1]="Days",ve[ve.Months=2]="Months",ve[ve.Eras=3]="Eras",ve))();function je(h,C,p,E){let S=function(h){if(zn(h))return h;if("number"==typeof h&&!isNaN(h))return new Date(h);if("string"==typeof h){if(h=h.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(h)){const[S,V=1,G=1]=h.split("-").map(_e=>+_e);return Dt(S,V-1,G)}const p=parseFloat(h);if(!isNaN(h-p))return new Date(p);let E;if(E=h.match(P))return function(h){const C=new Date(0);let p=0,E=0;const S=h[8]?C.setUTCFullYear:C.setFullYear,V=h[8]?C.setUTCHours:C.setHours;h[9]&&(p=Number(h[9]+h[10]),E=Number(h[9]+h[11])),S.call(C,Number(h[1]),Number(h[2])-1,Number(h[3]));const G=Number(h[4]||0)-p,_e=Number(h[5]||0)-E,vt=Number(h[6]||0),He=Math.floor(1e3*parseFloat("0."+(h[7]||0)));return V.call(C,G,_e,vt,He),C}(E)}const C=new Date(h);if(!zn(C))throw new Error(`Unable to convert "${h}" into a date`);return C}(h);C=Ut(p,C)||C;let _e,G=[];for(;C;){if(_e=Z.exec(C),!_e){G.push(C);break}{G=G.concat(_e.slice(1));const pt=G.pop();if(!pt)break;C=pt}}let vt=S.getTimezoneOffset();E&&(vt=Ar(E,vt),S=function(h,C,p){const S=h.getTimezoneOffset();return function(h,C){return(h=new Date(h.getTime())).setMinutes(h.getMinutes()+C),h}(h,-1*(Ar(C,S)-S))}(S,E));let He="";return G.forEach(pt=>{const $e=function(h){if(Fn[h])return Fn[h];let C;switch(h){case"G":case"GG":case"GGG":C=nt(ve.Eras,K.Abbreviated);break;case"GGGG":C=nt(ve.Eras,K.Wide);break;case"GGGGG":C=nt(ve.Eras,K.Narrow);break;case"y":C=Ue(ue.FullYear,1,0,!1,!0);break;case"yy":C=Ue(ue.FullYear,2,0,!0,!0);break;case"yyy":C=Ue(ue.FullYear,3,0,!1,!0);break;case"yyyy":C=Ue(ue.FullYear,4,0,!1,!0);break;case"Y":C=rt(1);break;case"YY":C=rt(2,!0);break;case"YYY":C=rt(3);break;case"YYYY":C=rt(4);break;case"M":case"L":C=Ue(ue.Month,1,1);break;case"MM":case"LL":C=Ue(ue.Month,2,1);break;case"MMM":C=nt(ve.Months,K.Abbreviated);break;case"MMMM":C=nt(ve.Months,K.Wide);break;case"MMMMM":C=nt(ve.Months,K.Narrow);break;case"LLL":C=nt(ve.Months,K.Abbreviated,H.Standalone);break;case"LLLL":C=nt(ve.Months,K.Wide,H.Standalone);break;case"LLLLL":C=nt(ve.Months,K.Narrow,H.Standalone);break;case"w":C=Ft(1);break;case"ww":C=Ft(2);break;case"W":C=Ft(1,!0);break;case"d":C=Ue(ue.Date,1);break;case"dd":C=Ue(ue.Date,2);break;case"c":case"cc":C=Ue(ue.Day,1);break;case"ccc":C=nt(ve.Days,K.Abbreviated,H.Standalone);break;case"cccc":C=nt(ve.Days,K.Wide,H.Standalone);break;case"ccccc":C=nt(ve.Days,K.Narrow,H.Standalone);break;case"cccccc":C=nt(ve.Days,K.Short,H.Standalone);break;case"E":case"EE":case"EEE":C=nt(ve.Days,K.Abbreviated);break;case"EEEE":C=nt(ve.Days,K.Wide);break;case"EEEEE":C=nt(ve.Days,K.Narrow);break;case"EEEEEE":C=nt(ve.Days,K.Short);break;case"a":case"aa":case"aaa":C=nt(ve.DayPeriods,K.Abbreviated);break;case"aaaa":C=nt(ve.DayPeriods,K.Wide);break;case"aaaaa":C=nt(ve.DayPeriods,K.Narrow);break;case"b":case"bb":case"bbb":C=nt(ve.DayPeriods,K.Abbreviated,H.Standalone,!0);break;case"bbbb":C=nt(ve.DayPeriods,K.Wide,H.Standalone,!0);break;case"bbbbb":C=nt(ve.DayPeriods,K.Narrow,H.Standalone,!0);break;case"B":case"BB":case"BBB":C=nt(ve.DayPeriods,K.Abbreviated,H.Format,!0);break;case"BBBB":C=nt(ve.DayPeriods,K.Wide,H.Format,!0);break;case"BBBBB":C=nt(ve.DayPeriods,K.Narrow,H.Format,!0);break;case"h":C=Ue(ue.Hours,1,-12);break;case"hh":C=Ue(ue.Hours,2,-12);break;case"H":C=Ue(ue.Hours,1);break;case"HH":C=Ue(ue.Hours,2);break;case"m":C=Ue(ue.Minutes,1);break;case"mm":C=Ue(ue.Minutes,2);break;case"s":C=Ue(ue.Seconds,1);break;case"ss":C=Ue(ue.Seconds,2);break;case"S":C=Ue(ue.FractionalSeconds,1);break;case"SS":C=Ue(ue.FractionalSeconds,2);break;case"SSS":C=Ue(ue.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":C=hn(q.Short);break;case"ZZZZZ":C=hn(q.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":C=hn(q.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":C=hn(q.Long);break;default:return null}return Fn[h]=C,C}(pt);He+=$e?$e(S,p,vt):"''"===pt?"'":pt.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),He}function Dt(h,C,p){const E=new Date(0);return E.setFullYear(h,C,p),E.setHours(0,0,0),E}function Ut(h,C){const p=function(h){return(0,v.cg1)(h)[v.wAp.LocaleId]}(h);if(X[p]=X[p]||{},X[p][C])return X[p][C];let E="";switch(C){case"shortDate":E=xt(h,oe.Short);break;case"mediumDate":E=xt(h,oe.Medium);break;case"longDate":E=xt(h,oe.Long);break;case"fullDate":E=xt(h,oe.Full);break;case"shortTime":E=Yt(h,oe.Short);break;case"mediumTime":E=Yt(h,oe.Medium);break;case"longTime":E=Yt(h,oe.Long);break;case"fullTime":E=Yt(h,oe.Full);break;case"short":const S=Ut(h,"shortTime"),V=Ut(h,"shortDate");E=Ot(In(h,oe.Short),[S,V]);break;case"medium":const G=Ut(h,"mediumTime"),_e=Ut(h,"mediumDate");E=Ot(In(h,oe.Medium),[G,_e]);break;case"long":const vt=Ut(h,"longTime"),He=Ut(h,"longDate");E=Ot(In(h,oe.Long),[vt,He]);break;case"full":const pt=Ut(h,"fullTime"),$e=Ut(h,"fullDate");E=Ot(In(h,oe.Full),[pt,$e])}return E&&(X[p][C]=E),E}function Ot(h,C){return C&&(h=h.replace(/\{([^}]+)}/g,function(p,E){return null!=C&&E in C?C[E]:p})),h}function it(h,C,p="-",E,S){let V="";(h<0||S&&h<=0)&&(S?h=1-h:(h=-h,V=p));let G=String(h);for(;G.length<C;)G="0"+G;return E&&(G=G.substr(G.length-C)),V+G}function Ue(h,C,p=0,E=!1,S=!1){return function(V,G){let _e=function(h,C){switch(h){case ue.FullYear:return C.getFullYear();case ue.Month:return C.getMonth();case ue.Date:return C.getDate();case ue.Hours:return C.getHours();case ue.Minutes:return C.getMinutes();case ue.Seconds:return C.getSeconds();case ue.FractionalSeconds:return C.getMilliseconds();case ue.Day:return C.getDay();default:throw new Error(`Unknown DateType value "${h}".`)}}(h,V);if((p>0||_e>-p)&&(_e+=p),h===ue.Hours)0===_e&&-12===p&&(_e=12);else if(h===ue.FractionalSeconds)return function(h,C){return it(h,3).substr(0,C)}(_e,C);const vt=Bt(G,B.MinusSign);return it(_e,C,vt,E,S)}}function nt(h,C,p=H.Format,E=!1){return function(S,V){return function(h,C,p,E,S,V){switch(p){case ve.Months:return function(h,C,p){const E=(0,v.cg1)(h),V=mt([E[v.wAp.MonthsFormat],E[v.wAp.MonthsStandalone]],C);return mt(V,p)}(C,S,E)[h.getMonth()];case ve.Days:return function(h,C,p){const E=(0,v.cg1)(h),V=mt([E[v.wAp.DaysFormat],E[v.wAp.DaysStandalone]],C);return mt(V,p)}(C,S,E)[h.getDay()];case ve.DayPeriods:const G=h.getHours(),_e=h.getMinutes();if(V){const He=function(h){const C=(0,v.cg1)(h);return tt(C),(C[v.wAp.ExtraData][2]||[]).map(E=>"string"==typeof E?Kt(E):[Kt(E[0]),Kt(E[1])])}(C),pt=function(h,C,p){const E=(0,v.cg1)(h);tt(E);const V=mt([E[v.wAp.ExtraData][0],E[v.wAp.ExtraData][1]],C)||[];return mt(V,p)||[]}(C,S,E),$e=He.findIndex(It=>{if(Array.isArray(It)){const[Qe,Nt]=It,wn=G>=Qe.hours&&_e>=Qe.minutes,sn=G<Nt.hours||G===Nt.hours&&_e<Nt.minutes;if(Qe.hours<Nt.hours){if(wn&&sn)return!0}else if(wn||sn)return!0}else if(It.hours===G&&It.minutes===_e)return!0;return!1});if(-1!==$e)return pt[$e]}return function(h,C,p){const E=(0,v.cg1)(h),V=mt([E[v.wAp.DayPeriodsFormat],E[v.wAp.DayPeriodsStandalone]],C);return mt(V,p)}(C,S,E)[G<12?0:1];case ve.Eras:return function(h,C){return mt((0,v.cg1)(h)[v.wAp.Eras],C)}(C,E)[h.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${p}`)}}(S,V,h,C,p,E)}}function hn(h){return function(C,p,E){const S=-1*E,V=Bt(p,B.MinusSign),G=S>0?Math.floor(S/60):Math.ceil(S/60);switch(h){case q.Short:return(S>=0?"+":"")+it(G,2,V)+it(Math.abs(S%60),2,V);case q.ShortGMT:return"GMT"+(S>=0?"+":"")+it(G,1,V);case q.Long:return"GMT"+(S>=0?"+":"")+it(G,2,V)+":"+it(Math.abs(S%60),2,V);case q.Extended:return 0===E?"Z":(S>=0?"+":"")+it(G,2,V)+":"+it(Math.abs(S%60),2,V);default:throw new Error(`Unknown zone width "${h}"`)}}}function Co(h){return Dt(h.getFullYear(),h.getMonth(),h.getDate()+(4-h.getDay()))}function Ft(h,C=!1){return function(p,E){let S;if(C){const V=new Date(p.getFullYear(),p.getMonth(),1).getDay()-1,G=p.getDate();S=1+Math.floor((G+V)/7)}else{const V=Co(p),G=function(h){const C=Dt(h,0,1).getDay();return Dt(h,0,1+(C<=4?4:11)-C)}(V.getFullYear()),_e=V.getTime()-G.getTime();S=1+Math.round(_e/6048e5)}return it(S,h,Bt(E,B.MinusSign))}}function rt(h,C=!1){return function(p,E){return it(Co(p).getFullYear(),h,Bt(E,B.MinusSign),C)}}const Fn={};function Ar(h,C){h=h.replace(/:/g,"");const p=Date.parse("Jan 01, 1970 00:00:00 "+h)/6e4;return isNaN(p)?C:p}function zn(h){return h instanceof Date&&!isNaN(h.valueOf())}
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
class bt{}let nn=(()=>{class h extends bt{constructor(p){super(),this.locale=p}getPluralCategory(p,E){switch(ar(E||this.locale)(p)){case L.Zero:return"zero";case L.One:return"one";case L.Two:return"two";case L.Few:return"few";case L.Many:return"many";default:return"other"}}}return h.\u0275fac=function(p){return new(p||h)(v.LFG(v.soG))},h.\u0275prov=v.Yz7({token:h,factory:h.\u0275fac}),h})();
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
function We(h,C){C=encodeURIComponent(C);for(const p of h.split(";")){const E=p.indexOf("="),[S,V]=-1==E?[p,""]:[p.slice(0,E),p.slice(E+1)];if(S.trim()===C)return decodeURIComponent(V)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ht=(()=>{class h{constructor(p,E,S,V){this._iterableDiffers=p,this._keyValueDiffers=E,this._ngEl=S,this._renderer=V,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(p){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof p?p.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(p){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof p?p.split(/\s+/):p,this._rawClass&&((0,v.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const p=this._iterableDiffer.diff(this._rawClass);p&&this._applyIterableChanges(p)}else if(this._keyValueDiffer){const p=this._keyValueDiffer.diff(this._rawClass);p&&this._applyKeyValueChanges(p)}}_applyKeyValueChanges(p){p.forEachAddedItem(E=>this._toggleClass(E.key,E.currentValue)),p.forEachChangedItem(E=>this._toggleClass(E.key,E.currentValue)),p.forEachRemovedItem(E=>{E.previousValue&&this._toggleClass(E.key,!1)})}_applyIterableChanges(p){p.forEachAddedItem(E=>{if("string"!=typeof E.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,v.AaK)(E.item)}`);this._toggleClass(E.item,!0)}),p.forEachRemovedItem(E=>this._toggleClass(E.item,!1))}_applyClasses(p){p&&(Array.isArray(p)||p instanceof Set?p.forEach(E=>this._toggleClass(E,!0)):Object.keys(p).forEach(E=>this._toggleClass(E,!!p[E])))}_removeClasses(p){p&&(Array.isArray(p)||p instanceof Set?p.forEach(E=>this._toggleClass(E,!1)):Object.keys(p).forEach(E=>this._toggleClass(E,!1)))}_toggleClass(p,E){(p=p.trim())&&p.split(/\s+/g).forEach(S=>{E?this._renderer.addClass(this._ngEl.nativeElement,S):this._renderer.removeClass(this._ngEl.nativeElement,S)})}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.ZZ4),v.Y36(v.aQg),v.Y36(v.SBq),v.Y36(v.Qsj))},h.\u0275dir=v.lG2({type:h,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),h})();
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
class Kn{constructor(C,p,E,S){this.$implicit=C,this.ngForOf=p,this.index=E,this.count=S}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Rt=(()=>{class h{constructor(p,E,S){this._viewContainer=p,this._template=E,this._differs=S,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(p){this._ngForOf=p,this._ngForOfDirty=!0}set ngForTrackBy(p){this._trackByFn=p}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(p){p&&(this._template=p)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const p=this._ngForOf;!this._differ&&p&&(this._differ=this._differs.find(p).create(this.ngForTrackBy))}if(this._differ){const p=this._differ.diff(this._ngForOf);p&&this._applyChanges(p)}}_applyChanges(p){const E=this._viewContainer;p.forEachOperation((S,V,G)=>{if(null==S.previousIndex)E.createEmbeddedView(this._template,new Kn(S.item,this._ngForOf,-1,-1),null===G?void 0:G);else if(null==G)E.remove(null===V?void 0:V);else if(null!==V){const _e=E.get(V);E.move(_e,G),kn(_e,S)}});for(let S=0,V=E.length;S<V;S++){const _e=E.get(S).context;_e.index=S,_e.count=V,_e.ngForOf=this._ngForOf}p.forEachIdentityChange(S=>{kn(E.get(S.currentIndex),S)})}static ngTemplateContextGuard(p,E){return!0}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(v.ZZ4))},h.\u0275dir=v.lG2({type:h,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),h})();function kn(h,C){h.context.$implicit=C.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lr=(()=>{class h{constructor(p,E){this._viewContainer=p,this._context=new cr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=E}set ngIf(p){this._context.$implicit=this._context.ngIf=p,this._updateView()}set ngIfThen(p){Ve("ngIfThen",p),this._thenTemplateRef=p,this._thenViewRef=null,this._updateView()}set ngIfElse(p){Ve("ngIfElse",p),this._elseTemplateRef=p,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(p,E){return!0}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.s_b),v.Y36(v.Rgc))},h.\u0275dir=v.lG2({type:h,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),h})();class cr{constructor(){this.$implicit=null,this.ngIf=null}}function Ve(h,C){if(C&&!C.createEmbeddedView)throw new Error(`${h} must be a TemplateRef, but received '${(0,v.AaK)(C)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class dr{constructor(C,p){this._viewContainerRef=C,this._templateRef=p,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(C){C&&!this._created?this.create():!C&&this._created&&this.destroy()}}let Sn=(()=>{class h{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(p){this._ngSwitch=p,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(p){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(p)}_matchCase(p){const E=p==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||E,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),E}_updateDefaultCases(p){if(this._defaultViews&&p!==this._defaultUsed){this._defaultUsed=p;for(let E=0;E<this._defaultViews.length;E++)this._defaultViews[E].enforceState(p)}}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275dir=v.lG2({type:h,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),h})(),Or=(()=>{class h{constructor(p,E,S){this.ngSwitch=S,S._addCase(),this._view=new dr(p,E)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(Sn,9))},h.\u0275dir=v.lG2({type:h,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),h})(),Jt=(()=>{class h{constructor(p,E,S){this._ngEl=p,this._differs=E,this._renderer=S,this._ngStyle=null,this._differ=null}set ngStyle(p){this._ngStyle=p,!this._differ&&p&&(this._differ=this._differs.find(p).create())}ngDoCheck(){if(this._differ){const p=this._differ.diff(this._ngStyle);p&&this._applyChanges(p)}}_setStyle(p,E){const[S,V]=p.split(".");null!=(E=null!=E&&V?`${E}${V}`:E)?this._renderer.setStyle(this._ngEl.nativeElement,S,E):this._renderer.removeStyle(this._ngEl.nativeElement,S)}_applyChanges(p){p.forEachRemovedItem(E=>this._setStyle(E.key,null)),p.forEachAddedItem(E=>this._setStyle(E.key,E.currentValue)),p.forEachChangedItem(E=>this._setStyle(E.key,E.currentValue))}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.SBq),v.Y36(v.aQg),v.Y36(v.Qsj))},h.\u0275dir=v.lG2({type:h,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),h})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ht(h,C){return Error(`InvalidPipeArgument: '${C}' for pipe '${(0,v.AaK)(h)}'`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gn{createSubscription(C,p){return C.subscribe({next:p,error:E=>{throw E}})}dispose(C){C.unsubscribe()}onDestroy(C){C.unsubscribe()}}class mn{createSubscription(C,p){return C.then(p,E=>{throw E})}dispose(C){}onDestroy(C){}}const fr=new mn,Fr=new gn;let qn=(()=>{class h{constructor(p){this._ref=p,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(p){return this._obj?p!==this._obj?(this._dispose(),this.transform(p)):this._latestValue:(p&&this._subscribe(p),this._latestValue)}_subscribe(p){this._obj=p,this._strategy=this._selectStrategy(p),this._subscription=this._strategy.createSubscription(p,E=>this._updateLatestValue(p,E))}_selectStrategy(p){if((0,v.QGY)(p))return fr;if((0,v.F4k)(p))return Fr;throw Ht(h,p)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(p,E){p===this._obj&&(this._latestValue=E,this._ref.markForCheck())}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.sBO,16))},h.\u0275pipe=v.Yjl({name:"async",type:h,pure:!1}),h})();
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
const Nr=new v.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let vi=(()=>{class h{constructor(p,E){this.locale=p,this.defaultTimezone=E}transform(p,E="mediumDate",S,V){var G;if(null==p||""===p||p!=p)return null;try{return je(p,E,V||this.locale,null!==(G=null!=S?S:this.defaultTimezone)&&void 0!==G?G:void 0)}catch(_e){throw Ht(h,_e.message)}}}return h.\u0275fac=function(p){return new(p||h)(v.Y36(v.soG,16),v.Y36(Nr,24))},h.\u0275pipe=v.Yjl({name:"date",type:h,pure:!0}),h})(),ro=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=v.oAB({type:h}),h.\u0275inj=v.cJS({providers:[{provide:bt,useClass:nn}]}),h})();
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
const oo="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ao=(()=>{class h{}return h.\u0275prov=(0,v.Yz7)({token:h,providedIn:"root",factory:()=>new Un((0,v.LFG)(he),window)}),h})();class Un{constructor(C,p){this.document=C,this.window=p,this.offset=()=>[0,0]}setOffset(C){this.offset=Array.isArray(C)?()=>C:C}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(C){this.supportsScrolling()&&this.window.scrollTo(C[0],C[1])}scrollToAnchor(C){if(!this.supportsScrolling())return;const p=function(h,C){const p=h.getElementById(C)||h.getElementsByName(C)[0];if(p)return p;if("function"==typeof h.createTreeWalker&&h.body&&(h.body.createShadowRoot||h.body.attachShadow)){const E=h.createTreeWalker(h.body,NodeFilter.SHOW_ELEMENT);let S=E.currentNode;for(;S;){const V=S.shadowRoot;if(V){const G=V.getElementById(C)||V.querySelector(`[name="${C}"]`);if(G)return G}S=E.nextNode()}}return null}(this.document,C);p&&(this.scrollToElement(p),this.attemptFocus(p))}setHistoryScrollRestoration(C){if(this.supportScrollRestoration()){const p=this.window.history;p&&p.scrollRestoration&&(p.scrollRestoration=C)}}scrollToElement(C){const p=C.getBoundingClientRect(),E=p.left+this.window.pageXOffset,S=p.top+this.window.pageYOffset,V=this.offset();this.window.scrollTo(E-V[0],S-V[1])}attemptFocus(C){return C.focus(),this.document.activeElement===C}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const C=Ro(this.window.history)||Ro(Object.getPrototypeOf(this.window.history));return!(!C||!C.writable&&!C.set)}catch(C){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(C){return!1}}}function Ro(h){return Object.getOwnPropertyDescriptor(h,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class on{}
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
       */},520:(Ke,ce,T)=>{T.d(ce,{TP:()=>st,eN:()=>B,JF:()=>mt});var v=T(808),x=T(223),ne=T(646),re=T(306),se=T(351),Ne=T(300),he=T(4);
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
       */class Oe{}class De{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ee{constructor(R){this.normalizedNames=new Map,this.lazyUpdate=null,R?this.lazyInit="string"==typeof R?()=>{this.headers=new Map,R.split("\n").forEach(P=>{const X=P.indexOf(":");if(X>0){const Z=P.slice(0,X),q=Z.toLowerCase(),ue=P.slice(X+1).trim();this.maybeSetNormalizedName(Z,q),this.headers.has(q)?this.headers.get(q).push(ue):this.headers.set(q,[ue])}})}:()=>{this.headers=new Map,Object.keys(R).forEach(P=>{let X=R[P];const Z=P.toLowerCase();"string"==typeof X&&(X=[X]),X.length>0&&(this.headers.set(Z,X),this.maybeSetNormalizedName(P,Z))})}:this.headers=new Map}has(R){return this.init(),this.headers.has(R.toLowerCase())}get(R){this.init();const P=this.headers.get(R.toLowerCase());return P&&P.length>0?P[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(R){return this.init(),this.headers.get(R.toLowerCase())||null}append(R,P){return this.clone({name:R,value:P,op:"a"})}set(R,P){return this.clone({name:R,value:P,op:"s"})}delete(R,P){return this.clone({name:R,value:P,op:"d"})}maybeSetNormalizedName(R,P){this.normalizedNames.has(P)||this.normalizedNames.set(P,R)}init(){this.lazyInit&&(this.lazyInit instanceof ee?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(R=>this.applyUpdate(R)),this.lazyUpdate=null))}copyFrom(R){R.init(),Array.from(R.headers.keys()).forEach(P=>{this.headers.set(P,R.headers.get(P)),this.normalizedNames.set(P,R.normalizedNames.get(P))})}clone(R){const P=new ee;return P.lazyInit=this.lazyInit&&this.lazyInit instanceof ee?this.lazyInit:this,P.lazyUpdate=(this.lazyUpdate||[]).concat([R]),P}applyUpdate(R){const P=R.name.toLowerCase();switch(R.op){case"a":case"s":let X=R.value;if("string"==typeof X&&(X=[X]),0===X.length)return;this.maybeSetNormalizedName(R.name,P);const Z=("a"===R.op?this.headers.get(P):void 0)||[];Z.push(...X),this.headers.set(P,Z);break;case"d":const q=R.value;if(q){let ue=this.headers.get(P);if(!ue)return;ue=ue.filter(ve=>-1===q.indexOf(ve)),0===ue.length?(this.headers.delete(P),this.normalizedNames.delete(P)):this.headers.set(P,ue)}else this.headers.delete(P),this.normalizedNames.delete(P)}}forEach(R){this.init(),Array.from(this.normalizedNames.keys()).forEach(P=>R(this.normalizedNames.get(P),this.headers.get(P)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z{encodeKey(R){return we(R)}encodeValue(R){return we(R)}decodeKey(R){return decodeURIComponent(R)}decodeValue(R){return decodeURIComponent(R)}}const be=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function we(W){return encodeURIComponent(W).replace(be,(R,P)=>{var X;return null!==(X=ge[P])&&void 0!==X?X:R})}function Te(W){return`${W}`}class ie{constructor(R={}){if(this.updates=null,this.cloneFrom=null,this.encoder=R.encoder||new z,R.fromString){if(R.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(W,R){const P=new Map;return W.length>0&&W.replace(/^\?/,"").split("&").forEach(Z=>{const q=Z.indexOf("="),[ue,ve]=-1==q?[R.decodeKey(Z),""]:[R.decodeKey(Z.slice(0,q)),R.decodeValue(Z.slice(q+1))],je=P.get(ue)||[];je.push(ve),P.set(ue,je)}),P}(R.fromString,this.encoder)}else R.fromObject?(this.map=new Map,Object.keys(R.fromObject).forEach(P=>{const X=R.fromObject[P];this.map.set(P,Array.isArray(X)?X:[X])})):this.map=null}has(R){return this.init(),this.map.has(R)}get(R){this.init();const P=this.map.get(R);return P?P[0]:null}getAll(R){return this.init(),this.map.get(R)||null}keys(){return this.init(),Array.from(this.map.keys())}append(R,P){return this.clone({param:R,value:P,op:"a"})}appendAll(R){const P=[];return Object.keys(R).forEach(X=>{const Z=R[X];Array.isArray(Z)?Z.forEach(q=>{P.push({param:X,value:q,op:"a"})}):P.push({param:X,value:Z,op:"a"})}),this.clone(P)}set(R,P){return this.clone({param:R,value:P,op:"s"})}delete(R,P){return this.clone({param:R,value:P,op:"d"})}toString(){return this.init(),this.keys().map(R=>{const P=this.encoder.encodeKey(R);return this.map.get(R).map(X=>P+"="+this.encoder.encodeValue(X)).join("&")}).filter(R=>""!==R).join("&")}clone(R){const P=new ie({encoder:this.encoder});return P.cloneFrom=this.cloneFrom||this,P.updates=(this.updates||[]).concat(R),P}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(R=>this.map.set(R,this.cloneFrom.map.get(R))),this.updates.forEach(R=>{switch(R.op){case"a":case"s":const P=("a"===R.op?this.map.get(R.param):void 0)||[];P.push(Te(R.value)),this.map.set(R.param,P);break;case"d":if(void 0===R.value){this.map.delete(R.param);break}{let X=this.map.get(R.param)||[];const Z=X.indexOf(Te(R.value));-1!==Z&&X.splice(Z,1),X.length>0?this.map.set(R.param,X):this.map.delete(R.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ye{constructor(){this.map=new Map}set(R,P){return this.map.set(R,P),this}get(R){return this.map.has(R)||this.map.set(R,R.defaultValue()),this.map.get(R)}delete(R){return this.map.delete(R),this}has(R){return this.map.has(R)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Q(W){return"undefined"!=typeof ArrayBuffer&&W instanceof ArrayBuffer}function Pe(W){return"undefined"!=typeof Blob&&W instanceof Blob}function ze(W){return"undefined"!=typeof FormData&&W instanceof FormData}class Ie{constructor(R,P,X,Z){let q;if(this.url=P,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=R.toUpperCase(),function(W){switch(W){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||Z?(this.body=void 0!==X?X:null,q=Z):q=X,q&&(this.reportProgress=!!q.reportProgress,this.withCredentials=!!q.withCredentials,q.responseType&&(this.responseType=q.responseType),q.headers&&(this.headers=q.headers),q.context&&(this.context=q.context),q.params&&(this.params=q.params)),this.headers||(this.headers=new ee),this.context||(this.context=new ye),this.params){const ue=this.params.toString();if(0===ue.length)this.urlWithParams=P;else{const ve=P.indexOf("?");this.urlWithParams=P+(-1===ve?"?":ve<P.length-1?"&":"")+ue}}else this.params=new ie,this.urlWithParams=P}serializeBody(){return null===this.body?null:Q(this.body)||Pe(this.body)||ze(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof ie?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ze(this.body)?null:Pe(this.body)?this.body.type||null:Q(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof ie?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(R={}){var P;const X=R.method||this.method,Z=R.url||this.url,q=R.responseType||this.responseType,ue=void 0!==R.body?R.body:this.body,ve=void 0!==R.withCredentials?R.withCredentials:this.withCredentials,je=void 0!==R.reportProgress?R.reportProgress:this.reportProgress;let Dt=R.headers||this.headers,Ut=R.params||this.params;const Ot=null!==(P=R.context)&&void 0!==P?P:this.context;return void 0!==R.setHeaders&&(Dt=Object.keys(R.setHeaders).reduce((it,Ze)=>it.set(Ze,R.setHeaders[Ze]),Dt)),R.setParams&&(Ut=Object.keys(R.setParams).reduce((it,Ze)=>it.set(Ze,R.setParams[Ze]),Ut)),new Ie(X,Z,ue,{params:Ut,headers:Dt,context:Ot,reportProgress:je,responseType:q,withCredentials:ve})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var de=(()=>((de=de||{})[de.Sent=0]="Sent",de[de.UploadProgress=1]="UploadProgress",de[de.ResponseHeader=2]="ResponseHeader",de[de.DownloadProgress=3]="DownloadProgress",de[de.Response=4]="Response",de[de.User=5]="User",de))();class O{constructor(R,P=200,X="OK"){this.headers=R.headers||new ee,this.status=void 0!==R.status?R.status:P,this.statusText=R.statusText||X,this.url=R.url||null,this.ok=this.status>=200&&this.status<300}}class L extends O{constructor(R={}){super(R),this.type=de.ResponseHeader}clone(R={}){return new L({headers:R.headers||this.headers,status:void 0!==R.status?R.status:this.status,statusText:R.statusText||this.statusText,url:R.url||this.url||void 0})}}class H extends O{constructor(R={}){super(R),this.type=de.Response,this.body=void 0!==R.body?R.body:null}clone(R={}){return new H({body:void 0!==R.body?R.body:this.body,headers:R.headers||this.headers,status:void 0!==R.status?R.status:this.status,statusText:R.statusText||this.statusText,url:R.url||this.url||void 0})}}class K extends O{constructor(R){super(R,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${R.url||"(unknown url)"}`:`Http failure response for ${R.url||"(unknown url)"}: ${R.status} ${R.statusText}`,this.error=R.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oe(W,R){return{body:R,headers:W.headers,context:W.context,observe:W.observe,params:W.params,reportProgress:W.reportProgress,responseType:W.responseType,withCredentials:W.withCredentials}}let B=(()=>{class W{constructor(P){this.handler=P}request(P,X,Z={}){let q;if(P instanceof Ie)q=P;else{let je,Dt;je=Z.headers instanceof ee?Z.headers:new ee(Z.headers),Z.params&&(Dt=Z.params instanceof ie?Z.params:new ie({fromObject:Z.params})),q=new Ie(P,X,void 0!==Z.body?Z.body:null,{headers:je,context:Z.context,params:Dt,reportProgress:Z.reportProgress,responseType:Z.responseType||"json",withCredentials:Z.withCredentials})}const ue=(0,ne.of)(q).pipe((0,se.b)(je=>this.handler.handle(je)));if(P instanceof Ie||"events"===Z.observe)return ue;const ve=ue.pipe((0,Ne.h)(je=>je instanceof H));switch(Z.observe||"body"){case"body":switch(q.responseType){case"arraybuffer":return ve.pipe((0,he.U)(je=>{if(null!==je.body&&!(je.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return je.body}));case"blob":return ve.pipe((0,he.U)(je=>{if(null!==je.body&&!(je.body instanceof Blob))throw new Error("Response is not a Blob.");return je.body}));case"text":return ve.pipe((0,he.U)(je=>{if(null!==je.body&&"string"!=typeof je.body)throw new Error("Response is not a string.");return je.body}));default:return ve.pipe((0,he.U)(je=>je.body))}case"response":return ve;default:throw new Error(`Unreachable: unhandled observe type ${Z.observe}}`)}}delete(P,X={}){return this.request("DELETE",P,X)}get(P,X={}){return this.request("GET",P,X)}head(P,X={}){return this.request("HEAD",P,X)}jsonp(P,X){return this.request("JSONP",P,{params:(new ie).append(X,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(P,X={}){return this.request("OPTIONS",P,X)}patch(P,X,Z={}){return this.request("PATCH",P,oe(Z,X))}post(P,X,Z={}){return this.request("POST",P,oe(Z,X))}put(P,X,Z={}){return this.request("PUT",P,oe(Z,X))}}return W.\u0275fac=function(P){return new(P||W)(x.LFG(Oe))},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Me{constructor(R,P){this.next=R,this.interceptor=P}handle(R){return this.interceptor.intercept(R,this.next)}}const st=new x.OlP("HTTP_INTERCEPTORS");let Se=(()=>{class W{intercept(P,X){return X.handle(P)}}return W.\u0275fac=function(P){return new(P||W)},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const In=/^\)\]\}',?\n/;let Gn=(()=>{class W{constructor(P){this.xhrFactory=P}handle(P){if("JSONP"===P.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new re.y(X=>{const Z=this.xhrFactory.build();if(Z.open(P.method,P.urlWithParams),P.withCredentials&&(Z.withCredentials=!0),P.headers.forEach((Ze,Ue)=>Z.setRequestHeader(Ze,Ue.join(","))),P.headers.has("Accept")||Z.setRequestHeader("Accept","application/json, text/plain, */*"),!P.headers.has("Content-Type")){const Ze=P.detectContentTypeHeader();null!==Ze&&Z.setRequestHeader("Content-Type",Ze)}if(P.responseType){const Ze=P.responseType.toLowerCase();Z.responseType="json"!==Ze?Ze:"text"}const q=P.serializeBody();let ue=null;const ve=()=>{if(null!==ue)return ue;const Ze=1223===Z.status?204:Z.status,Ue=Z.statusText||"OK",Ae=new ee(Z.getAllResponseHeaders()),nt=function(W){return"responseURL"in W&&W.responseURL?W.responseURL:/^X-Request-URL:/m.test(W.getAllResponseHeaders())?W.getResponseHeader("X-Request-URL"):null}(Z)||P.url;return ue=new L({headers:Ae,status:Ze,statusText:Ue,url:nt}),ue},je=()=>{let{headers:Ze,status:Ue,statusText:Ae,url:nt}=ve(),Et=null;204!==Ue&&(Et=void 0===Z.response?Z.responseText:Z.response),0===Ue&&(Ue=Et?200:0);let hn=Ue>=200&&Ue<300;if("json"===P.responseType&&"string"==typeof Et){const Sr=Et;Et=Et.replace(In,"");try{Et=""!==Et?JSON.parse(Et):null}catch(ut){Et=Sr,hn&&(hn=!1,Et={error:ut,text:Et})}}hn?(X.next(new H({body:Et,headers:Ze,status:Ue,statusText:Ae,url:nt||void 0})),X.complete()):X.error(new K({error:Et,headers:Ze,status:Ue,statusText:Ae,url:nt||void 0}))},Dt=Ze=>{const{url:Ue}=ve(),Ae=new K({error:Ze,status:Z.status||0,statusText:Z.statusText||"Unknown Error",url:Ue||void 0});X.error(Ae)};let Ut=!1;const Ot=Ze=>{Ut||(X.next(ve()),Ut=!0);let Ue={type:de.DownloadProgress,loaded:Ze.loaded};Ze.lengthComputable&&(Ue.total=Ze.total),"text"===P.responseType&&!!Z.responseText&&(Ue.partialText=Z.responseText),X.next(Ue)},it=Ze=>{let Ue={type:de.UploadProgress,loaded:Ze.loaded};Ze.lengthComputable&&(Ue.total=Ze.total),X.next(Ue)};return Z.addEventListener("load",je),Z.addEventListener("error",Dt),Z.addEventListener("timeout",Dt),Z.addEventListener("abort",Dt),P.reportProgress&&(Z.addEventListener("progress",Ot),null!==q&&Z.upload&&Z.upload.addEventListener("progress",it)),Z.send(q),X.next({type:de.Sent}),()=>{Z.removeEventListener("error",Dt),Z.removeEventListener("abort",Dt),Z.removeEventListener("load",je),Z.removeEventListener("timeout",Dt),P.reportProgress&&(Z.removeEventListener("progress",Ot),null!==q&&Z.upload&&Z.upload.removeEventListener("progress",it)),Z.readyState!==Z.DONE&&Z.abort()}})}}return W.\u0275fac=function(P){return new(P||W)(x.LFG(v.JF))},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Tt=new x.OlP("XSRF_COOKIE_NAME"),at=new x.OlP("XSRF_HEADER_NAME");class sr{}let Mn=(()=>{class W{constructor(P,X,Z){this.doc=P,this.platform=X,this.cookieName=Z,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const P=this.doc.cookie||"";return P!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(P,this.cookieName),this.lastCookieString=P),this.lastToken}}return W.\u0275fac=function(P){return new(P||W)(x.LFG(v.K0),x.LFG(x.Lbi),x.LFG(Tt))},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})(),ar=(()=>{class W{constructor(P,X){this.tokenService=P,this.headerName=X}intercept(P,X){const Z=P.url.toLowerCase();if("GET"===P.method||"HEAD"===P.method||Z.startsWith("http://")||Z.startsWith("https://"))return X.handle(P);const q=this.tokenService.getToken();return null!==q&&!P.headers.has(this.headerName)&&(P=P.clone({headers:P.headers.set(this.headerName,q)})),X.handle(P)}}return W.\u0275fac=function(P){return new(P||W)(x.LFG(sr),x.LFG(at))},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})(),tt=(()=>{class W{constructor(P,X){this.backend=P,this.injector=X,this.chain=null}handle(P){if(null===this.chain){const X=this.injector.get(st,[]);this.chain=X.reduceRight((Z,q)=>new Me(Z,q),this.backend)}return this.chain.handle(P)}}return W.\u0275fac=function(P){return new(P||W)(x.LFG(De),x.LFG(x.zs3))},W.\u0275prov=x.Yz7({token:W,factory:W.\u0275fac}),W})(),Pt=(()=>{class W{static disable(){return{ngModule:W,providers:[{provide:ar,useClass:Se}]}}static withOptions(P={}){return{ngModule:W,providers:[P.cookieName?{provide:Tt,useValue:P.cookieName}:[],P.headerName?{provide:at,useValue:P.headerName}:[]]}}}return W.\u0275fac=function(P){return new(P||W)},W.\u0275mod=x.oAB({type:W}),W.\u0275inj=x.cJS({providers:[ar,{provide:st,useExisting:ar,multi:!0},{provide:sr,useClass:Mn},{provide:Tt,useValue:"XSRF-TOKEN"},{provide:at,useValue:"X-XSRF-TOKEN"}]}),W})(),mt=(()=>{class W{}return W.\u0275fac=function(P){return new(P||W)},W.\u0275mod=x.oAB({type:W}),W.\u0275inj=x.cJS({providers:[B,{provide:Oe,useClass:tt},Gn,{provide:De,useExisting:Gn}],imports:[[Pt.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),W})();
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
       */,223:(Ke,ce,T)=>{T.d(ce,{deG:()=>wg,tb:()=>Qp,AFp:()=>Yp,ip1:()=>Nl,CZH:()=>gi,hGG:()=>K0,z2F:()=>ws,sBO:()=>w0,Sil:()=>kl,_Vd:()=>ms,EJc:()=>Jp,SBq:()=>ys,qLn:()=>ns,vpe:()=>Mr,tBr:()=>Qi,XFs:()=>q,OlP:()=>kt,zs3:()=>Vn,ZZ4:()=>Ma,aQg:()=>Sa,soG:()=>ba,YKP:()=>ap,h0i:()=>fi,PXZ:()=>m0,R0b:()=>Pn,FiY:()=>ho,Lbi:()=>qp,g9A:()=>Kp,Qsj:()=>qC,FYo:()=>rp,JOm:()=>Er,tp0:()=>Ho,Rgc:()=>Es,dDg:()=>tg,GfV:()=>op,s_b:()=>Ca,ifc:()=>Ae,eFA:()=>og,G48:()=>_0,_c5:()=>H0,VLi:()=>f0,c2e:()=>Zp,zSh:()=>Gu,wAp:()=>Fe,vHH:()=>Xe,cg1:()=>fl,kL8:()=>Th,dqk:()=>ut,sIi:()=>us,CqO:()=>Of,QGY:()=>sl,F4k:()=>Pf,RDi:()=>E,AaK:()=>ie,TTD:()=>So,xp6:()=>ld,uIk:()=>Zu,Suo:()=>Mp,Xpm:()=>zn,lG2:()=>k,Yz7:()=>tt,cJS:()=>fn,oAB:()=>N,Yjl:()=>U,Y36:()=>cs,_UZ:()=>Af,qZA:()=>il,TgZ:()=>ol,LFG:()=>tn,$8M:()=>Ur,$Z:()=>Tf,NdJ:()=>al,CRH:()=>Sp,kcU:()=>Hs,O4$:()=>Us,oxw:()=>kf,ALo:()=>yp,lcZ:()=>vp,xi3:()=>Dp,Q6J:()=>nl,VKq:()=>dp,iGM:()=>Ip,LSH:()=>iu,YNc:()=>yf,_uU:()=>uh,Oqu:()=>dl,hij:()=>fa});var v=T(189),x=T(421),ne=T(515),re=T(669),se=T(76),he=T(579),Oe=T(727),De=T(306),ee=T(698),z=T(961),Ee=T(482);function ge(e,t,...n){return!0===t?(e(),null):!1===t?null:t(...n).pipe((0,ee.q)(1)).subscribe(()=>e())}
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
       */function we(e){for(let t in e)if(e[t]===we)return t;throw Error("Could not find renamed property on target object.")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ie(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ie).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Le(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ye=we({__forward_ref__:we});function xe(e){return e.__forward_ref__=xe,e.toString=function(){return ie(this())},e}function Q(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(ye)&&e.__forward_ref__===xe}
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
class Xe extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function O(e){return"string"==typeof e?e:null==e?"":String(e)}function L(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():O(e)}function B(e,t){const n=t?` in ${t}`:"";throw new Xe("201",`No provider for ${L(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tt(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function fn(e){return{providers:e.providers||[],imports:e.imports||[]}}function Pt(e){return mt(e,R)||mt(e,X)}function mt(e,t){return e.hasOwnProperty(t)?e[t]:null}function W(e){return e&&(e.hasOwnProperty(P)||e.hasOwnProperty(Z))?e[P]:null}const R=we({\u0275prov:we}),P=we({\u0275inj:we}),X=we({ngInjectableDef:we}),Z=we({ngInjectorDef:we});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var q=(()=>((q=q||{})[q.Default=0]="Default",q[q.Host=1]="Host",q[q.Self=2]="Self",q[q.SkipSelf=4]="SkipSelf",q[q.Optional=8]="Optional",q))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ue;function je(e){const t=ue;return ue=e,t}function Dt(e,t,n){const r=Pt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&q.Optional?null:void 0!==t?t:void B(ie(e),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ot(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var it=(()=>((it=it||{})[it.OnPush=0]="OnPush",it[it.Default=1]="Default",it))(),Ae=(()=>{return(e=Ae||(Ae={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Ae;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nt="undefined"!=typeof globalThis&&globalThis,Et="undefined"!=typeof window&&window,hn="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,ut=nt||"undefined"!=typeof global&&global||Et||hn,Ft={},rt=[],Fn=we({\u0275cmp:we}),Tr=we({\u0275dir:we}),Ar=we({\u0275pipe:we}),At=we({\u0275mod:we}),wt=we({\u0275fac:we}),Nn=we({__NG_ELEMENT_ID__:we});
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
let eo=0;function zn(e){return Ot(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===it.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||rt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Ae.Emulated,id:"c",styles:e.styles||rt,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=eo++,r.inputs=b(e.inputs,n),r.outputs=b(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(Rr):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(Ln):null,r})}function Rr(e){return pe(e)||function(e){return e[Tr]||null}(e)}function Ln(e){return function(e){return e[Ar]||null}(e)}const Wn={};function N(e){return Ot(()=>{const t={type:e.type,bootstrap:e.bootstrap||rt,declarations:e.declarations||rt,imports:e.imports||rt,exports:e.exports||rt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Wn[e.id]=e.type),t})}function b(e,t){if(null==e)return Ft;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const k=zn;function U(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function pe(e){return e[Fn]||null}function yt(e,t){const n=e[At]||null;if(!n&&!0===t)throw new Error(`Type ${ie(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gn(e){return Array.isArray(e)&&"object"==typeof e[1]}function mn(e){return Array.isArray(e)&&!0===e[1]}function fr(e){return 0!=(8&e.flags)}function Fr(e){return 2==(2&e.flags)}function qn(e){return 1==(1&e.flags)}function rn(e){return null!==e.template}function to(e){return 0!=(512&e[2])}
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
function Bn(e,t){return e.hasOwnProperty(wt)?e[wt]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rs{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function So(){return _i}function _i(e){return e.type.prototype.ngOnChanges&&(e.setInput=Qn),To}function To(){const e=Un(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===Ft)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Qn(e,t,n,r){const o=Un(e)||function(e,t){return e[Ao]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Ft,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new Rs(d&&d.currentValue,t,s===Ft),e[r]=t}So.ngInherit=!0;const Ao="__ngSimpleChanges__";function Un(e){return e[Ao]||null}const h="http://www.w3.org/2000/svg";
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
let p;function E(e){p=e}function G(e){return!!e.listen}const _e={createRenderer:(e,t)=>void 0!==p?p:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function He(e){for(;Array.isArray(e);)e=e[0];return e}function Qe(e,t){return He(t[e.index])}function wn(e,t){return e.data[t]}function sn(e,t){return e[t]}function Vt(e,t){const n=t[e];return gn(n)?n:n[0]}function Zn(e){return 4==(4&e[2])}function Yr(e){return 128==(128&e[2])}function bn(e,t){return null==t?null:e[t]}function wi(e){e[18]=0}function Lr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Be={lFrame:Pi(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Os(){return Be.bindingsEnabled}function J(){return Be.lFrame.lView}function ot(){return Be.lFrame.tView}function Mt(){let e=Ns();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ns(){return Be.lFrame.currentTNode}function yn(e,t){const n=Be.lFrame;n.currentTNode=e,n.isParent=t}function Ii(){return Be.lFrame.isParent}function pr(){return Be.isInCheckNoChangesMode}function xo(e){Be.isInCheckNoChangesMode=e}function Xt(){const e=Be.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Kr(){return Be.lFrame.bindingIndex++}function Fa(e,t){const n=Be.lFrame;n.bindingIndex=n.bindingRootIndex=e,Mi(t)}function Mi(e){Be.lFrame.currentDirectiveIndex=e}function Bs(){return Be.lFrame.currentQueryIndex}function Ti(e){Be.lFrame.currentQueryIndex=e}function Na(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Ai(e,t,n){if(n&q.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&q.Host||(o=Na(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Be.lFrame=xi();return r.currentTNode=t,r.lView=e,!0}function Ri(e){const t=xi(),n=e[1];Be.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xi(){const e=Be.lFrame,t=null===e?null:e.child;return null===t?Pi(e):t}function Pi(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Oi(){const e=Be.lFrame;return Be.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Fi=Oi;function Po(){const e=Oi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function en(){return Be.lFrame.selectedIndex}function gr(e){Be.lFrame.selectedIndex=e}function _t(){const e=Be.lFrame;return wn(e.tView,e.selectedIndex)}function Us(){Be.lFrame.currentNamespace=h}function Hs(){Be.lFrame.currentNamespace=null}function Oo(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:y}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=y&&(e.destroyHooks||(e.destroyHooks=[])).push(n,y)}}function Fo(e,t,n){$s(e,t,3,n)}function No(e,t,n,r){(3&e[2])===n&&$s(e,t,n,r)}function Lo(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function $s(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(Ua(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function Ua(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ao{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function uo(e,t,n){const r=G(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];lo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function ki(e){return 3===e||4===e||6===e}function lo(e){return 64===e.charCodeAt(0)}function ji(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||yr(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function yr(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bi(e){return-1!==e}function qr(e){return 32767&e}function Qr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ui=!0;function jo(e){const t=Ui;return Ui=e,t}let za=0;function Br(e,t){const n=$i(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Vi(r.data,e),Vi(t,null),Vi(r.blueprint,null));const o=co(e,t),i=e.injectorIndex;if(Bi(o)){const s=qr(o),l=Qr(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function Vi(e,t){e.push(0,0,0,0,0,0,0,0,t)}function $i(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function co(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Bo(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Nn)&&(r=n[Nn]),null==r&&(r=n[Nn]=za++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function c(e,t,n){if(n&q.Optional)return e;B(t,"NodeInjector")}function u(e,t,n,r){if(n&q.Optional&&void 0===r&&(r=null),0==(n&(q.Self|q.Host))){const o=e[9],i=je(void 0);try{return o?o.get(t,r,n&q.Optional):Dt(t,r,n&q.Optional)}finally{je(i)}}return c(r,t,n)}function a(e,t,n,r=q.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Nn)?e[Nn]:void 0;return"number"==typeof t?t>=0?255&t:g:t}(n);if("function"==typeof i){if(!Ai(t,e,r))return r&q.Host?c(o,n,r):u(t,n,r,o);try{const s=i(r);if(null!=s||r&q.Optional)return s;B(n)}finally{Fi()}}else if("number"==typeof i){let s=null,l=$i(e,t),d=-1,m=r&q.Host?t[16][6]:null;for((-1===l||r&q.SkipSelf)&&(d=-1===l?co(e,t):t[l+8],-1!==d&&Ge(r,!1)?(s=t[1],l=qr(d),t=Qr(d,t)):l=-1);-1!==l;){const y=t[1];if(ae(i,l,y.data)){const _=D(l,t,n,s,r,m);if(_!==f)return _}d=t[l+8],-1!==d&&Ge(r,t[1].data[l+8]===m)&&ae(i,l,t)?(s=y,l=qr(d),t=Qr(d,t)):l=-1}}}return u(t,n,r,o)}const f={};function g(){return new Ce(Mt(),J())}function D(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],y=w(l,s,n,null==r?Fr(l)&&Ui:r!=s&&0!=(3&l.type),o&q.Host&&i===l);return null!==y?I(t,s,y,l):f}function w(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,y=i>>20,M=o?l+y:e.directiveEnd;for(let F=r?l:l+y;F<M;F++){const $=s[F];if(F<d&&n===$||F>=d&&$.type===n)return F}if(o){const F=s[d];if(F&&rn(F)&&F.type===n)return d}return null}function I(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof ao}(o)){const s=o;s.resolving&&function(e,t){throw new Xe("200",`Circular dependency in DI detected for ${e}`)}(L(i[n]));const l=jo(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?je(s.injectImpl):null;Ai(e,r,q.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=_i(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&je(d),jo(l),s.resolving=!1,Fi()}}return o}function ae(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ge(e,t){return!(e&q.Self||e&q.Host&&t)}class Ce{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return a(this._tNode,this._lView,t,r,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ur(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(ki(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Mt(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const un="__parameters__";function An(e,t,n){return Ot(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,m,y){const _=d.hasOwnProperty(un)?d[un]:Object.defineProperty(d,un,{value:[]})[un];for(;_.length<=y;)_.push(null);return(_[y]=_[y]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class kt{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=tt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wg=new kt("AnalyzeForEntryComponents");function Hn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Hn(r,t)):t!==e&&t.push(r)}return t}function vr(e,t){e.forEach(n=>Array.isArray(n)?vr(n,t):t(n))}function ac(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function zs(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Yi={},Qa="__NG_DI_FLAG__",Ys="ngTempTokenPath",Og=/\n/gm,fc="__source",Ng=we({provide:String,useValue:we});let Ki;function hc(e){const t=Ki;return Ki=e,t}function Lg(e,t=q.Default){if(void 0===Ki)throw new Error("inject() must be called from an injection context");return null===Ki?Dt(e,void 0,t):Ki.get(e,t&q.Optional?null:void 0,t)}function tn(e,t=q.Default){return(ue||Lg)(Q(e),t)}function Za(e){const t=[];for(let n=0;n<e.length;n++){const r=Q(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=q.Default;for(let s=0;s<r.length;s++){const l=r[s],d=kg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(tn(o,i))}else t.push(tn(r))}return t}function qi(e,t){return e[Qa]=t,e.prototype[Qa]=t,e}function kg(e){return e[Qa]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qi=qi(An("Inject",e=>({token:e})),-1),ho=qi(An("Optional"),8),Ho=qi(An("SkipSelf"),4);
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
class _c{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const im=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,sm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var $t=(()=>(($t=$t||{})[$t.NONE=0]="NONE",$t[$t.HTML=1]="HTML",$t[$t.STYLE=2]="STYLE",$t[$t.SCRIPT=3]="SCRIPT",$t[$t.URL=4]="URL",$t[$t.RESOURCE_URL=5]="RESOURCE_URL",$t))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iu(e){const t=function(){const e=J();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize($t.URL,e)||"":function(e,t){const n=function(e){return e instanceof _c&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?function(e){return e instanceof _c?e.changingThisBreaksApplicationSecurity:e}(e):function(e){return(e=String(e)).match(im)||e.match(sm)?e:"unsafe:"+e}(O(e))}const Pc="__ngContext__";function ln(e,t){e[Pc]=t}function au(e){const t=function(e){return e[Pc]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function lu(e){return e.ngOriginalError}function Rm(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ns{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=(e=t)&&e.ngErrorLogger||Rm;var e;r(this._console,"ERROR",t),n&&r(this._console,"ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&lu(t);for(;n&&lu(n);)n=lu(n);return n||null}}
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
const kc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(ut))();function Cr(e){return e instanceof Function?e():e}
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
var Er=(()=>((Er=Er||{})[Er.Important=1]="Important",Er[Er.DashCase=2]="DashCase",Er))();
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
function rs(e){const t=e[3];return mn(t)?t[3]:t}function fu(e){return Vc(e[13])}function hu(e){return Vc(e[4])}function Vc(e){for(;null!==e&&!mn(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zo(e,t,n,r,o){if(null!=r){let i,s=!1;mn(r)?i=r:gn(r)&&(s=!0,r=r[0]);const l=He(r);0===e&&null!==n?null==o?Kc(t,n,l):po(t,n,l,o||null,!0):1===e&&null!==n?po(t,n,l,o||null,!0):2===e?function(e,t,n){const r=Xs(e,t);r&&function(e,t,n,r){G(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==He(n)&&zo(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];os(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function gu(e,t,n){return G(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function Gc(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,Lr(o,-1)),n.splice(r,1)}function mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Gc(o,r),t>0&&(e[n-1][4]=r[4]);const i=zs(e,10+t);!function(e,t){os(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function zc(e,t){if(!(256&t[2])){const n=t[11];G(n)&&n.destroyNode&&os(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yu(e[1],e);for(;t;){let n=null;if(gn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)gn(t)&&yu(t[1],t),t=t[3];null===t&&(t=e),gn(t)&&yu(t[1],t),n=t&&t[4]}t=n}}(t)}}function yu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof ao)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):He(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&G(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&mn(t[3])){n!==t[3]&&Gc(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function Wc(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Ae.None||o===Ae.Emulated)return null}return Qe(r,n)}(e,t.parent,n)}function po(e,t,n,r,o){G(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function Kc(e,t,n){G(e)?e.appendChild(t,n):t.appendChild(n)}function qc(e,t,n,r,o){null!==r?po(e,t,n,r,o):Kc(e,t,n)}function Xs(e,t){return G(e)?e.parentNode(t):t.parentNode}let Jc=function(e,t,n){return 40&e.type?Qe(e,n):null};function ea(e,t,n,r){const o=Wc(e,r,t),i=t[11],l=function(e,t,n){return Jc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)qc(i,o,n[d],l,!1);else qc(i,o,n,l,!1)}function ta(e,t){if(null!==t){const n=t.type;if(3&n)return Qe(t,e);if(4&n)return Du(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return ta(e,r);{const o=e[t.index];return mn(o)?Du(-1,o):He(o)}}if(32&n)return du(t,e)()||He(e[t.index]);{const r=ed(e,t);return null!==r?Array.isArray(r)?r[0]:ta(rs(e[16]),r):ta(e,t.next)}}return null}function ed(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Du(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return ta(r,o)}return t[7]}function Cu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&ln(He(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)Cu(e,t,n.child,r,o,i,!1),zo(t,e,o,l,i);else if(32&d){const m=du(n,r);let y;for(;y=m();)zo(t,e,o,y,i);zo(t,e,o,l,i)}else 16&d?nd(e,t,r,n,o,i):zo(t,e,o,l,i);n=s?n.projectionNext:n.next}}function os(e,t,n,r,o,i){Cu(n,r,e.firstChild,t,o,i,!1)}function nd(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)zo(t,e,o,d[m],i);else Cu(e,t,d,s[3],o,i,!0)}function rd(e,t,n){G(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Eu(e,t,n){G(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function od(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const id="ng-template";function oy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==od(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function sd(e){return 4===e.type&&e.value!==id}function iy(e,t,n){return t===(4!==e.type||n?e.value:id)}function sy(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(ki(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!iy(e,d,n)||""===d&&1===t.length){if(er(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!oy(e.attrs,m,n)){if(er(r))return!1;s=!0}continue}const _=ay(8&r?"class":d,o,sd(e),n);if(-1===_){if(er(r))return!1;s=!0;continue}if(""!==m){let M;M=_>i?"":o[_+1].toLowerCase();const F=8&r?M:null;if(F&&-1!==od(F,m,0)||2&r&&m!==M){if(er(r))return!1;s=!0}}}}else{if(!s&&!er(r)&&!er(d))return!1;if(s&&er(d))continue;s=!1,r=d|1&r}}return er(r)||s}function er(e){return 0==(1&e)}function ay(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function ad(e,t,n=!1){for(let r=0;r<t.length;r++)if(sy(e,t[r],n))return!0;return!1}function ud(e,t){return e?":not("+t.trim()+")":t}function fy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!er(s)&&(t+=ud(i,o),o=""),r=s,i=i||!er(r);n++}return""!==o&&(t+=ud(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ye={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ld(e){cd(ot(),J(),en()+e,pr())}function cd(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&Fo(t,i,n)}else{const i=e.preOrderHooks;null!==i&&No(t,i,0,n)}gr(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ed(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Ti(o),s.contentQueries(2,t[i],i)}}}function is(e,t,n,r,o,i,s,l,d,m){const y=t.blueprint.slice();return y[0]=o,y[2]=140|r,wi(y),y[3]=y[15]=e,y[8]=n,y[10]=s||e&&e[10],y[11]=l||e&&e[11],y[12]=d||e&&e[12]||null,y[9]=m||e&&e[9]||null,y[6]=i,y[16]=2==t.type?e[16]:y,y}function Wo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=Ns(),s=Ii(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),Be.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Be.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return yn(i,!0),i}function Yo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function ss(e,t,n){Ri(t);try{const r=e.viewQuery;null!==r&&Vu(1,r,n);const o=e.template;null!==o&&_d(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Ed(e,t),e.staticViewQueries&&Vu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Ky(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Po()}}function Ko(e,t,n,r){const o=t[2];if(256==(256&o))return;Ri(t);const i=pr();try{wi(t),function(e){Be.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&_d(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&Fo(t,m,null)}else{const m=e.preOrderHooks;null!==m&&No(t,m,0,null),Lo(t,0)}if(function(e){for(let t=fu(e);null!==t;t=hu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&Lr(i,1),o[2]|=1024}}}(t),function(e){for(let t=fu(e);null!==t;t=hu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Yr(r)&&Ko(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Ed(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&Fo(t,m)}else{const m=e.contentHooks;null!==m&&No(t,m,1),Lo(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)gr(~o);else{const i=o,s=n[++r],l=n[++r];Fa(s,i),l(2,t[i])}}}finally{gr(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Yy(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Vu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&Fo(t,m)}else{const m=e.viewHooks;null!==m&&No(t,m,2),Lo(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,Lr(t[3],-1))}finally{Po()}}function Ty(e,t,n,r){const o=t[10],i=!pr(),s=Zn(t);try{i&&!s&&o.begin&&o.begin(),s&&ss(e,t,r),Ko(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function _d(e,t,n,r,o){const i=en(),s=2&r;try{gr(-1),s&&t.length>20&&cd(e,t,20,pr()),n(r,o)}finally{gr(i)}}function Fu(e,t,n){!Os()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Br(n,t),ln(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=rn(d);m&&Vy(t,n,d);const y=I(t,e,l,n);ln(y,t),null!==s&&$y(0,l-o,y,d,0,s),m&&(Vt(n.index,t)[8]=y)}}(e,t,n,Qe(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=Be.lFrame.currentDirectiveIndex;try{gr(s);for(let d=r;d<o;d++){const m=e.data[d],y=t[d];Mi(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&xd(m,y)}}finally{gr(-1),Mi(l)}}(e,t,n))}function Nu(e,t,n=Qe){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function bd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=ia(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function ia(e,t,n,r,o,i,s,l,d,m){const y=20+r,_=y+o,M=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Ye);return n}(y,_),F="function"==typeof m?m():m;return M[1]={type:e,blueprint:M,template:n,queries:null,viewQuery:l,declTNode:t,data:M.slice().fill(null,y),bindingStartIndex:y,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:F,incompleteFirstPass:!1}}function Sd(e,t,n,r){const o=kd(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&jd(e).push(r,o.length-1))}function Td(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Lu(e,t,n,r){let o=!1;if(Os()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];ad(n,s.selectors,!1)&&(o||(o=[]),Bo(Br(n,t),e,s.type),rn(s)?(Pd(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Od(n,e.data.length,i.length);for(let y=0;y<i.length;y++){const _=i[y];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=Yo(e,t,i.length,null);for(let y=0;y<i.length;y++){const _=i[y];n.mergedAttrs=ji(n.mergedAttrs,_.hostAttrs),Fd(e,n,t,m,_),Hy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const M=_.type.prototype;!l&&(M.ngOnChanges||M.ngOnInit||M.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(M.ngOnChanges||M.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const y=o[m],_=y.inputs,M=null===i||sd(t)?null:Gy(_,i);s.push(M),l=Td(_,m,l),d=Td(y.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Xe("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=ji(n.mergedAttrs,n.attrs),o}function Rd(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function xd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Pd(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Hy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;rn(t)&&(n[""]=e)}}function Od(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Fd(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Bn(o.type)),s=new ao(i,rn(o),null);e.blueprint[r]=s,n[r]=s,Rd(e,t,0,r,Yo(e,n,o.hostVars,Ye),o)}function Vy(e,t,n){const r=Qe(t,e),o=bd(n),i=e[10],s=sa(e,is(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function _r(e,t,n,r,o,i){const s=Qe(e,t);!function(e,t,n,r,o,i,s){if(null==i)G(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?O(i):s(i,r||"",o);G(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function $y(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],y=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,y):n[y]=_}}}function Gy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Nd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Yy(e,t){const n=Vt(t,e);if(Yr(n)){const r=n[1];80&n[2]?Ko(r,n,r.template,n[8]):n[5]>0&&ju(n)}}function ju(e){for(let r=fu(e);null!==r;r=hu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];Ko(s,i,s.template,i[8])}else i[5]>0&&ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Vt(n[r],e);Yr(o)&&o[5]>0&&ju(o)}}function Ky(e,t){const n=Vt(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),ss(r,n,n[8])}function sa(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Bu(e){for(;e;){e[2]|=64;const t=rs(e);if(to(e)&&!t)return e;e=t}return null}function Hu(e,t,n){const r=t[10];r.begin&&r.begin();try{Ko(e,t,e.template,n)}catch(o){throw Ud(t,o),o}finally{r.end&&r.end()}}function Ld(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=au(n),o=r[1];Ty(o,r,o.template,n)}}(e[8])}function Vu(e,t,n){Ti(0),t(e,n)}const Xy=(()=>Promise.resolve(null))();function kd(e){return e[7]||(e[7]=[])}function jd(e){return e.cleanup||(e.cleanup=[])}function Ud(e,t){const n=e[9],r=n?n.get(ns,null):null;r&&r.handleError(t)}function Hd(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function Vr(e,t,n){const r=function(e,t){return He(t[e])}(t,e);!function(e,t,n){G(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function aa(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=Le(o,l):2==i&&(r=Le(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
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
const $u=new kt("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vd{get(t,n=Yi){if(n===Yi){const r=new Error(`NullInjectorError: No provider for ${ie(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Gu=new kt("Set Injector scope."),as={},nv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zu;function $d(){return void 0===zu&&(zu=new Vd),zu}function Gd(e,t=null,n=null,r){const o=zd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function zd(e,t=null,n=null,r){return new rv(e,n,t||$d(),r)}class rv{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&vr(n,l=>this.processProvider(l,t,n)),vr([t],l=>this.processInjectorType(l,[],i)),this.records.set($u,qo(void 0,this));const s=this.records.get(Gu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:ie(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Yi,r=q.Default){this.assertNotDestroyed();const o=hc(this),i=je(void 0);try{if(!(r&q.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof kt)&&Pt(t);l=d&&this.injectableDefInScope(d)?qo(Wu(t),as):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&q.Self?$d():this.parent).get(t,n=r&q.Optional&&n===Yi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Ys]=s[Ys]||[]).unshift(ie(t)),o)throw s;return function(e,t,n,r){const o=e[Ys];throw t[fc]&&o.unshift(t[fc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=ie(t);if(Array.isArray(t))o=t.map(ie).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):ie(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Og,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Ys]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{je(i),hc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(ie(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=Q(t)))return!1;let o=W(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=W(i)),null==o)return!1;if(null!=o.imports&&!l){let y;r.push(s);try{vr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===y&&(y=[]),y.push(_))})}finally{}if(void 0!==y)for(let _=0;_<y.length;_++){const{ngModule:M,providers:F}=y[_];vr(F,$=>this.processProvider($,M,F||rt))}}this.injectorDefTypes.add(s);const d=Bn(s)||(()=>new s);this.records.set(s,qo(d,as));const m=o.providers;if(null!=m&&!l){const y=t;vr(m,_=>this.processProvider(_,y,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=Qo(t=Q(t))?t:Q(t&&t.provide);const i=(e=t,Yd(e)?qo(void 0,e.useValue):qo(function(e,t,n){let r;if(Qo(e)){const o=Q(e);return Bn(o)||Wu(o)}if(Yd(e))r=()=>Q(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Za(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>tn(Q(e.useExisting));else{const o=Q(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return Bn(o)||Wu(o);r=()=>new o(...Za(e.deps))}return r}(e),as));var e;if(Qo(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=qo(void 0,as,!0),s.factory=()=>Za(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===as&&(n.value=nv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=Q(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Wu(e){const t=Pt(e),n=null!==t?t.factory:Bn(e);if(null!==n)return n;if(e instanceof kt)throw new Error(`Token ${ie(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${ie(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[R]||e[X]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function qo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Yd(e){return null!==e&&"object"==typeof e&&Ng in e}function Qo(e){return"function"==typeof e}let Vn=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return Gd({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return Gd({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Yi,e.NULL=new Vd,e.\u0275prov=tt({token:e,providedIn:"any",factory:()=>tn($u)}),e.__NG_ELEMENT_ID__=-1,e})();function Dv(e,t){Oo(au(e)[1],Mt())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ua=null;function Zo(){if(!ua){const e=ut.Symbol;if(e&&e.iterator)ua=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ua=r)}}}return ua}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function us(e){return!!Qu(e)&&(Array.isArray(e)||!(e instanceof Map)&&Zo()in e)}function Qu(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wr(e,t,n){return e[t]=n}function cn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(e,t,n,r){const o=J();return cn(o,Kr(),t)&&(ot(),_r(_t(),o,e,t,n,r)),Zu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yf(e,t,n,r,o,i,s,l){const d=J(),m=ot(),y=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,y=Wo(t,e,4,s||null,bn(m,l));Lu(t,n,y,bn(m,d)),Oo(t,y);const _=y.tViews=ia(2,y,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,y),_.queries=t.queries.embeddedTView(y)),y}(y,m,d,t,n,r,o,i,s):m.data[y];yn(_,!1);const M=d[11].createComment("");ea(m,d,M,_),ln(M,d),sa(d,d[y]=Nd(M,d,M,_)),qn(_)&&Fu(m,d,_),null!=s&&Nu(d,_,l)}
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
function cs(e,t=q.Default){const n=J();return null===n?tn(e,t):a(Mt(),n,Q(e),t)}function Tf(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n){const r=J();return cn(r,Kr(),t)&&function(e,t,n,r,o,i,s,l){const d=Qe(t,n);let y,m=t.inputs;!l&&null!=m&&(y=m[r])?(Hd(e,n,y,r,o),Fr(t)&&function(e,t){const n=Vt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,G(i)?i.setProperty(d,r,o):lo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(ot(),_t(),r,e,t,r[11],n,!1),nl}function rl(e,t,n,r,o){const s=o?"class":"style";Hd(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(e,t,n,r){const o=J(),i=ot(),s=20+e,l=o[11],d=o[s]=gu(l,t,Be.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Wo(t,e,2,o,bn(l,i));return Lu(t,n,m,bn(l,s)),null!==m.attrs&&aa(m,m.attrs,!1),null!==m.mergedAttrs&&aa(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];yn(m,!0);const y=m.mergedAttrs;null!==y&&uo(l,d,y);const _=m.classes;null!==_&&Eu(l,d,_);const M=m.styles;null!==M&&rd(l,d,M),64!=(64&m.flags)&&ea(i,o,d,m),0===Be.lFrame.elementDepthCount&&ln(d,o),Be.lFrame.elementDepthCount++,qn(m)&&(Fu(i,o,m),function(e,t,n){if(fr(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Nu(o,m)}function il(){let e=Mt();Ii()?Be.lFrame.isParent=!1:(e=e.parent,yn(e,!1));const t=e;Be.lFrame.elementDepthCount--;const n=ot();n.firstCreatePass&&(Oo(n,e),fr(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&rl(n,t,J(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rl(n,t,J(),t.stylesWithoutHost,!1)}function Af(e,t,n,r){ol(e,t,n,r),il()}
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
       */function al(e,t,n,r){const o=J(),i=ot(),s=Mt();return function(e,t,n,r,o,i,s,l){const d=qn(r),y=e.firstCreatePass&&jd(e),_=t[8],M=kd(t);let F=!0;if(3&r.type||l){const le=Qe(r,t),me=l?l(le):le,Y=M.length,Re=l?Je=>l(He(Je[r.index])):r.index;if(G(n)){let Je=null;if(!l&&d&&(Je=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==Je)(Je.__ngLastListenerFn__||Je).__ngNextListenerFn__=i,Je.__ngLastListenerFn__=i,F=!1;else{i=ul(r,t,_,i,!1);const gt=n.listen(me,o,i);M.push(i,gt),y&&y.push(o,Re,Y,Y+1)}}else i=ul(r,t,_,i,!0),me.addEventListener(o,i,s),M.push(i),y&&y.push(o,Re,Y,s)}else i=ul(r,t,_,i,!1);const $=r.outputs;let te;if(F&&null!==$&&(te=$[o])){const le=te.length;if(le)for(let me=0;me<le;me+=2){const On=t[te[me]][te[me+1]].subscribe(i),vo=M.length;M.push(i,On),y&&y.push(o,r.index,vo,-(vo+1))}}}(i,o,o[11],s,e,t,!!n,r),al}function Lf(e,t,n,r){try{return!1!==n(r)}catch(o){return Ud(e,o),!1}}function ul(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?Vt(e.index,t):t;0==(32&t[2])&&Bu(l);let d=Lf(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Lf(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
       */function kf(e=1){return function(e){return(Be.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Be.lFrame.contextLView))[8]}(e)}
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
function uh(e,t=""){const n=J(),r=ot(),o=e+20,i=r.firstCreatePass?Wo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return G(e)?e.createText(t):e.createTextNode(t)}(n[11],t);ea(r,n,s,i),yn(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dl(e){return fa("",e,""),dl}function fa(e,t,n){const r=J(),o=function(e,t,n,r){return cn(e,Kr(),n)?t+O(n)+r:Ye}(r,e,t,n);return o!==Ye&&Vr(r,en(),o),fa}
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
const mo=void 0;var $D=["en",[["a","p"],["AM","PM"],mo],[["AM","PM"],mo,mo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],mo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],mo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",mo,"{1} 'at' {0}",mo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let li={};function fl(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=Ah(t);if(n)return n;const r=t.split("-")[0];if(n=Ah(r),n)return n;if("en"===r)return $D;throw new Error(`Missing locale data for the locale "${e}".`)}function Th(e){return fl(e)[Fe.PluralCase]}function Ah(e){return e in li||(li[e]=ut.ng&&ut.ng.common&&ut.ng.common.locales&&ut.ng.common.locales[e]),li[e]}var Fe=(()=>((Fe=Fe||{})[Fe.LocaleId=0]="LocaleId",Fe[Fe.DayPeriodsFormat=1]="DayPeriodsFormat",Fe[Fe.DayPeriodsStandalone=2]="DayPeriodsStandalone",Fe[Fe.DaysFormat=3]="DaysFormat",Fe[Fe.DaysStandalone=4]="DaysStandalone",Fe[Fe.MonthsFormat=5]="MonthsFormat",Fe[Fe.MonthsStandalone=6]="MonthsStandalone",Fe[Fe.Eras=7]="Eras",Fe[Fe.FirstDayOfWeek=8]="FirstDayOfWeek",Fe[Fe.WeekendRange=9]="WeekendRange",Fe[Fe.DateFormat=10]="DateFormat",Fe[Fe.TimeFormat=11]="TimeFormat",Fe[Fe.DateTimeFormat=12]="DateTimeFormat",Fe[Fe.NumberSymbols=13]="NumberSymbols",Fe[Fe.NumberFormats=14]="NumberFormats",Fe[Fe.CurrencyCode=15]="CurrencyCode",Fe[Fe.CurrencySymbol=16]="CurrencySymbol",Fe[Fe.CurrencyName=17]="CurrencyName",Fe[Fe.Currencies=18]="Currencies",Fe[Fe.Directionality=19]="Directionality",Fe[Fe.PluralCase=20]="PluralCase",Fe[Fe.ExtraData=21]="ExtraData",Fe))();const ha="en-US";
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
let Rh=ha;class tp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class WC{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${ie(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let ms=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new WC,e})();function YC(){return di(Mt(),J())}function di(e,t){return new ys(Qe(e,t))}let ys=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=YC,e})();function KC(e){return e instanceof ys?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rp{}let qC=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=J(),n=Vt(Mt().index,e);return function(e){return e[11]}(gn(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),JC=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=tt({token:e,providedIn:"root",factory:()=>null}),e})();class op{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const XC=new op("13.1.1"),Dl={};
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
function va(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(He(i)),mn(i))for(let l=10;l<i.length;l++){const d=i[l],m=d[1].firstChild;null!==m&&va(d[1],d,m,r)}const s=n.type;if(8&s)va(e,t,n.child,r);else if(32&s){const l=du(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=ed(t,n);if(Array.isArray(l))r.push(...l);else{const d=rs(t[16]);va(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vs{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return va(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(mn(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),zs(n,r))}this._attachedToViewContainer=!1}zc(this._lView[1],this._lView)}onDestroy(t){Sd(this._lView[1],this._lView,null,t)}markForCheck(){Bu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){xo(!0);try{Hu(e,t,n)}finally{xo(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,os(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class eE extends vs{constructor(t){super(t),this._view=t}detectChanges(){Ld(this._view)}checkNoChanges(){!function(e){xo(!0);try{Ld(e)}finally{xo(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ip extends ms{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=pe(t);return new Cl(n,this.ngModule)}}function sp(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const nE=new kt("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>kc});class Cl extends tp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(fy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return sp(this.componentDef.inputs)}get outputs(){return sp(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Dl,o);return i!==Dl||r===Dl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(rp,_e),l=i.get(JC,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",y=r?function(e,t,n){if(G(e))return e.selectRootElement(t,n===Ae.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):gu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?h:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,M=function(e,t){return{components:[],scheduler:e||kc,clean:Xy,playerHandler:t||null,flags:0}}(),F=ia(0,null,null,1,0,null,null,null,null,null),$=is(null,F,M,_,null,null,s,d,l,i);let te,le;Ri($);try{const me=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Wo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(aa(d,m,!0),null!==e&&(uo(o,e,m),null!==d.classes&&Eu(o,e,d.classes),null!==d.styles&&rd(o,e,d.styles)));const y=r.createRenderer(e,t),_=is(n,bd(t),null,t.onPush?64:16,n[20],d,r,y,i||null,null);return s.firstCreatePass&&(Bo(Br(d,n),s,t.type),Pd(s,d),Od(d,n.length,1)),sa(n,_),n[20]=_}(y,this.componentDef,$,s,d);if(y)if(r)uo(d,y,["ng-version",XC.full]);else{const{attrs:Y,classes:Re}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!er(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);Y&&uo(d,y,Y),Re&&Re.length>0&&Eu(d,y,Re.join(" "))}if(le=wn(F,20),void 0!==n){const Y=le.projection=[];for(let Re=0;Re<this.ngContentSelectors.length;Re++){const Je=n[Re];Y.push(null!=Je?Array.from(Je):null)}}te=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=Mt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Fd(e,r,t,Yo(e,t,1,null),n));const o=I(t,e,r.directiveStart,r);ln(o,t);const i=Qe(r,t);return i&&ln(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=Mt();t.contentQueries(1,s,d.directiveStart)}const l=Mt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(gr(l.index),Rd(n[1],l,0,l.directiveStart,l.directiveEnd,t),xd(t,s)),s}(me,this.componentDef,$,M,[Dv]),ss(F,$,null)}finally{Po()}return new iE(this.componentType,te,di(le,$),$,le)}}class iE extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new eE(o),this.componentType=t}get injector(){return new Ce(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
class fi{}class ap{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hi=new Map;class cp extends fi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new ip(this);const r=yt(t);this._bootstrapComponents=Cr(r.bootstrap),this._r3Injector=zd(t,n,[{provide:fi,useValue:this},{provide:ms,useValue:this.componentFactoryResolver}],ie(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Vn.THROW_IF_NOT_FOUND,r=q.Default){return t===Vn||t===fi||t===$u?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class El extends ap{constructor(t){super(),this.moduleType=t,null!==yt(t)&&function(e){const t=new Set;!function n(r){const o=yt(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${ie(t)} vs ${ie(t.name)}`)}(i,hi.get(i),r),hi.set(i,r));const s=Cr(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new cp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dp(e,t,n,r){return fp(J(),Xt(),e,t,n,r)}function Ds(e,t){const n=e[t];return n===Ye?void 0:n}function fp(e,t,n,r,o,i){const s=t+n;return cn(e,s,o)?wr(e,s+1,i?r.call(i,o):r(o)):Ds(e,s+1)}function hp(e,t,n,r,o,i,s){const l=t+n;return function(e,t,n,r){const o=cn(e,t,n);return cn(e,t+1,r)||o}(e,l,o,i)?wr(e,l+2,s?r.call(s,o,i):r(o,i)):Ds(e,l+2)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yp(e,t){const n=ot();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Bn(r.type)),s=je(cs);try{const l=jo(!1),d=i();return jo(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,J(),o,d),d}finally{je(s)}}function vp(e,t,n){const r=e+20,o=J(),i=sn(o,r);return Cs(o,r)?fp(o,Xt(),t,i.transform,n,i):i.transform(n)}function Dp(e,t,n,r){const o=e+20,i=J(),s=sn(i,o);return Cs(i,o)?hp(i,Xt(),t,s.transform,n,r,s):s.transform(n,r)}function Cs(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _l(e){return t=>{setTimeout(e,void 0,t)}}const Mr=class extends he.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=_l(d),l&&(l=_l(l)),m&&(m=_l(m)));const y=super.subscribe({next:l,error:d,complete:m});return t instanceof Oe.w0&&t.add(y),y}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _E(){return this._results[Zo()]()}class wl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Zo(),r=wl.prototype;r[n]||(r[n]=_E)}get changes(){return this._changes||(this._changes=new Mr)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Hn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Es=(()=>{class e{}return e.__NG_ELEMENT_ID__=IE,e})();const wE=Es,bE=class extends wE{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=is(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),ss(n,r,t),new vs(r)}};function IE(){return Da(Mt(),J())}function Da(e,t){return 4&e.type?new bE(t,e,di(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ca=(()=>{class e{}return e.__NG_ELEMENT_ID__=ME,e})();function ME(){return _p(Mt(),J())}const SE=Ca,Cp=class extends SE{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return di(this._hostTNode,this._hostLView)}get injector(){return new Ce(this._hostTNode,this._hostLView)}get parentInjector(){const t=co(this._hostTNode,this._hostLView);if(Bi(t)){const n=Qr(t,this._hostLView),r=qr(t);return new Ce(n[1].data[r+8],n)}return new Ce(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Ep(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new Cl(pe(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(fi,null);_&&(i=_)}const y=d.create(m,o,void 0,i);return this.insert(y.hostView,l),y}insert(t,n){const r=t._lView,o=r[1];if(mn(r[3])){const y=this.indexOf(t);if(-1!==y)this.detach(y);else{const _=r[3],M=new Cp(_,_[6],_[3]);M.detach(M.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],ac(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=Du(i,s),d=r[11],m=Xs(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,os(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),ac(bl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Ep(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(zs(bl(this._lContainer),n),zc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&null!=zs(bl(this._lContainer),n)?new vs(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Ep(e){return e[8]}function bl(e){return e[8]||(e[8]=[])}function _p(e,t){let n;const r=t[e.index];if(mn(r))n=r;else{let o;if(8&e.type)o=He(r);else{const i=t[11];o=i.createComment("");const s=Qe(e,t);po(i,Xs(i,s),o,function(e,t){return G(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Nd(r,t,o,e),sa(t,n)}return new Cp(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Il{constructor(t){this.queryList=t,this.matches=null}clone(){return new Il(this.queryList)}setDirty(){this.queryList.setDirty()}}class Ml{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Ml(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Rp(t,n).matches&&this.queries[n].setDirty()}}class wp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Sl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Sl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Tl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Tl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,RE(n,i)),this.matchTNodeWithReadOption(t,n,w(n,t,i,!1,!1))}else r===Es?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,w(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ys||o===Ca||o===Es&&4&n.type)this.addMatch(n.index,-2);else{const i=w(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function RE(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function PE(e,t,n,r){return-1===n?function(e,t){return 11&e.type?di(e,t):4&e.type?Da(e,t):null}(t,e):-2===n?function(e,t,n){return n===ys?di(t,e):n===Es?Da(t,e):n===Ca?_p(t,e):void 0}(e,t,r):I(e,e[1],n,t)}function bp(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:PE(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Al(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=bp(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],y=t[-d];for(let _=10;_<y.length;_++){const M=y[_];M[17]===M[3]&&Al(M[1],M,m,r)}if(null!==y[9]){const _=y[9];for(let M=0;M<_.length;M++){const F=_[M];Al(F[1],F,m,r)}}}}}return r}function Ip(e){const t=J(),n=ot(),r=Bs();Ti(r+1);const o=Rp(n,r);if(e.dirty&&Zn(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Al(n,t,r,[]):bp(n,t,o,r);e.reset(i,KC),e.notifyOnChanges()}return!0}return!1}function Mp(e,t,n,r){const o=ot();if(o.firstCreatePass){const i=Mt();(function(e,t,n){null===e.queries&&(e.queries=new Sl),e.queries.track(new Tl(t,n))})(o,new wp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new wl(4==(4&n));Sd(e,t,r,r.destroy),null===t[19]&&(t[19]=new Ml),t[19].queries.push(new Il(r))}(o,J(),n)}function Sp(){return e=J(),t=Bs(),e[19].queries[t].queryList;var e,t}function Rp(e,t){return e.queries.getByIndex(t)}
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
function wa(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nl=new kt("Application Initializer");let gi=(()=>{class e{constructor(n){this.appInits=n,this.resolve=wa,this.reject=wa,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(sl(i))n.push(i);else if(Of(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(tn(Nl,8))},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yp=new kt("AppId"),t0={provide:Yp,useFactory:function(){return`${Ll()}${Ll()}${Ll()}`},deps:[]};function Ll(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Kp=new kt("Platform Initializer"),qp=new kt("Platform ID"),Qp=new kt("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zp=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ba=new kt("LocaleId"),Jp=new kt("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class n0{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kl=(()=>{class e{compileModuleSync(n){return new El(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=Cr(yt(n).declarations).reduce((s,l)=>{const d=pe(l);return d&&s.push(new Cl(d)),s},[]);return new n0(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const o0=(()=>Promise.resolve(0))();function jl(e){"undefined"==typeof Zone?o0.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Pn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Mr(!1),this.onMicrotaskEmpty=new Mr(!1),this.onStable=new Mr(!1),this.onError=new Mr(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=ut.requestAnimationFrame,t=ut.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ut,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ul(e),e.isCheckStableRunning=!0,Bl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ul(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return Xp(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),eg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return Xp(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),eg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ul(e),Bl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Pn.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Pn.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,a0,wa,wa);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const a0={};function Bl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ul(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Xp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function eg(e){e._nesting--,Bl(e)}class c0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Mr,this.onMicrotaskEmpty=new Mr,this.onStable=new Mr,this.onError=new Mr}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let tg=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Pn.assertNotInAngularZone(),jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(tn(Pn))},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})(),ng=(()=>{class e{constructor(){this._applications=new Map,Hl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Hl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();class d0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function f0(e){Hl=e}let ir,Hl=new d0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rg=new kt("AllowMultipleToken");class m0{constructor(t,n){this.name=t,this.token=n}}function og(e,t,n=[]){const r=`Platform: ${t}`,o=new kt(r);return(i=[])=>{let s=ig();if(!s||s.injector.get(rg,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:Gu,useValue:"platform"});!function(e){if(ir&&!ir.destroyed&&!ir.injector.get(rg,!1))throw new Xe("400","");ir=e.get(sg);const t=e.get(Kp,null);t&&t.forEach(n=>n())}(Vn.create({providers:l,name:r}))}return function(e){const t=ig();if(!t)throw new Xe("401","");return t}()}}function ig(){return ir&&!ir.destroyed?ir:null}let sg=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new c0:("zone.js"===e?void 0:e)||new Pn({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:Pn,useValue:l}];return l.run(()=>{const m=Vn.create({providers:d,parent:this.injector,name:n.moduleType.name}),y=n.create(m),_=y.injector.get(ns,null);if(!_)throw new Xe("402","");return l.runOutsideAngular(()=>{const M=l.onError.subscribe({next:F=>{_.handleError(F)}});y.onDestroy(()=>{Vl(this._modules,y),M.unsubscribe()})}),function(e,t,n){try{const r=n();return sl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const M=y.injector.get(gi);return M.runInitializers(),M.donePromise.then(()=>(function(e){Tt(e,"Expected localeId to be defined"),"string"==typeof e&&(Rh=e.toLowerCase().replace(/_/g,"-"))}(y.injector.get(ba,ha)||ha),this._moduleDoBootstrap(y),y))})})}bootstrapModule(n,r=[]){const o=ag({},r);return function(e,t,n){const r=new El(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(ws);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Xe("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Xe("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(tn(Vn))},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();function ag(e,t){return Array.isArray(t)?t.reduce(ag,e):Object.assign(Object.assign({},e),t)}let ws=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new De.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new De.y(m=>{let y;this._zone.runOutsideAngular(()=>{y=this._zone.onStable.subscribe(()=>{Pn.assertNotInAngularZone(),jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{Pn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{y.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,re.yG)(e),n=(0,re._6)(e,1/0),r=e;return r.length?1===r.length?(0,x.Xf)(r[0]):(0,v.J)(n)((0,se.D)(r,t)):ne.E}(l,d.pipe(function(e={}){const{connector:t=(()=>new he.x),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s=null,l=null,d=null,m=0,y=!1,_=!1;const M=()=>{null==l||l.unsubscribe(),l=null},F=()=>{M(),s=d=null,y=_=!1},$=()=>{const te=s;F(),null==te||te.unsubscribe()};return(0,Ee.e)((te,le)=>{m++,!_&&!y&&M();const me=d=null!=d?d:t();le.add(()=>{m--,0===m&&!_&&!y&&(l=ge($,o))}),me.subscribe(le),s||(s=new z.Hp({next:Y=>me.next(Y),error:Y=>{_=!0,M(),l=ge(F,n,Y),me.error(Y)},complete:()=>{y=!0,M(),l=ge(F,r),me.complete()}}),(0,se.D)(te).subscribe(s))})(i)}}()))}bootstrap(n,r){if(!this._initStatus.done)throw new Xe("405","");let o;o=n instanceof tp?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(fi),l=o.create(Vn.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(tg,null),y=m&&l.injector.get(ng);return m&&y&&y.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Vl(this.components,l),y&&y.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new Xe("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Vl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Qp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(tn(Pn),tn(Vn),tn(ns),tn(ms),tn(gi))},e.\u0275prov=tt({token:e,factory:e.\u0275fac}),e})();function Vl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lg=!0;function _0(){lg=!1}
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
let w0=(()=>{class e{}return e.__NG_ELEMENT_ID__=b0,e})();function b0(e){return function(e,t,n){if(Fr(e)&&!n){const r=Vt(e.index,t);return new vs(r,r)}return 47&e.type?new vs(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Mt(),J(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mg{constructor(){}supports(t){return us(t)}create(t){return new x0(t)}}const R0=(e,t)=>t;class x0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||R0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<vg(r,o,i)?n:r,l=vg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,y=d-o;if(m!=y){for(let M=0;M<m;M++){const F=M<i.length?i[M]:i[M]=0,$=F+M;y<=$&&$<m&&(i[M]=F+1)}i[s.previousIndex]=y-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!us(t))throw new Error(`Error trying to diff '${ie(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Zo()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new P0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new yg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new yg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class P0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class O0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class yg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new O0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function vg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Dg{constructor(){}supports(t){return t instanceof Map||Qu(t)}create(){return new F0}}class F0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Qu(t)))throw new Error(`Error trying to diff '${ie(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new N0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class N0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cg(){return new Ma([new mg])}let Ma=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Cg()),deps:[[e,new Ho,new ho]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=tt({token:e,providedIn:"root",factory:Cg}),e})();function Eg(){return new Sa([new Dg])}let Sa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Eg()),deps:[[e,new Ho,new ho]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=tt({token:e,providedIn:"root",factory:Eg}),e})();const k0=[new Dg],B0=new Ma([new mg]),U0=new Sa(k0),H0=og(null,"core",[{provide:qp,useValue:"unknown"},{provide:sg,deps:[Vn]},{provide:ng,deps:[]},{provide:Zp,deps:[]}]),W0=[{provide:ws,useClass:ws,deps:[Pn,Vn,ns,ms,gi]},{provide:nE,deps:[Pn],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:gi,useClass:gi,deps:[[new ho,Nl]]},{provide:kl,useClass:kl,deps:[]},t0,{provide:Ma,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return B0},deps:[]},{provide:Sa,useFactory:function(){return U0},deps:[]},{provide:ba,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||ha},deps:[[new Qi(ba),new ho,new Ho]]},{provide:Jp,useValue:"USD"}];
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
       */let K0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(tn(ws))},e.\u0275mod=N({type:e}),e.\u0275inj=fn({providers:W0}),e})();
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
       */,783:(Ke,ce,T)=>{T.d(ce,{Bz:()=>Qr,lC:()=>S});var v=T(223),x=T(579);class ne extends x.x{constructor(u){super(),this._value=u}get value(){return this.getValue()}_subscribe(u){const a=super._subscribe(u);return!a.closed&&u.next(this._value),a}getValue(){const{hasError:u,thrownError:a,_value:f}=this;if(u)throw a;return this._throwIfClosed(),f}next(u){super.next(this._value=u)}}var re=T(306);const{isArray:se}=Array,{getPrototypeOf:Ne,prototype:he,keys:Oe}=Object;var z=T(76),Ee=T(671),be=T(4);const{isArray:ge}=Array;var ie=T(669),ye=T(403),xe=T(672);function Q(...c){const u=(0,ie.yG)(c),a=(0,ie.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(se(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&Ne(c)===he}(u)){const a=Oe(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,z.D)([],u);const D=new re.y(function(c,u,a=Ee.y){return f=>{ze(u,()=>{const{length:g}=c,D=new Array(g);let w=g,I=g;for(let j=0;j<g;j++)ze(u,()=>{const ae=(0,z.D)(c[j],u);let Ge=!1;ae.subscribe(new ye.Q(f,Ce=>{D[j]=Ce,Ge||(Ge=!0,I--),I||f.next(a(D.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):Ee.y));return a?D.pipe(function(c){return(0,be.U)(u=>function(c,u){return ge(u)?c(...u):c(u)}(c,u))}(a)):D}function ze(c,u,a){c?(0,xe.f)(a,c,u):u()}const Ie=(0,T(888).d)(c=>function(){c(this),this.name="EmptyError",this.message="no elements in sequence"});var de=T(189);function L(...c){return(0,de.J)(1)((0,z.D)(c,(0,ie.yG)(c)))}var H=T(421);function K(c){return new re.y(u=>{(0,H.Xf)(c()).subscribe(u)})}var oe=T(727),B=T(482);function Me(){return(0,B.e)((c,u)=>{let a=null;c._refCount++;const f=new ye.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,D=a;a=null,g&&(!D||g===D)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class st extends re.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,B.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new oe.w0;const a=this.getSubject();u.add(this.source.subscribe(new ye.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=oe.w0.EMPTY)}return u}refCount(){return Me()(this)}}var Se=T(646),ke=T(515);function et(c,u){return(0,B.e)((a,f)=>{let g=null,D=0,w=!1;const I=()=>w&&!g&&f.complete();a.subscribe(new ye.Q(f,j=>{null==g||g.unsubscribe();let ae=0;const Ge=D++;(0,H.Xf)(c(j,Ge)).subscribe(g=new ye.Q(f,Ce=>f.next(u?u(j,Ce,Ge,ae++):Ce),()=>{g=null,I()}))},()=>{w=!0,I()}))})}function St(c,u,a,f,g){return(D,w)=>{let I=a,j=u,ae=0;D.subscribe(new ye.Q(w,Ge=>{const Ce=ae++;j=I?c(j,Ge,Ce):(I=!0,Ge),f&&w.next(j)},g&&(()=>{I&&w.next(j),w.complete()})))}}function En(c,u){return(0,B.e)(St(c,u,arguments.length>=2,!0))}function xt(c){return(0,B.e)((u,a)=>{let D,f=null,g=!1;f=u.subscribe(new ye.Q(a,void 0,void 0,w=>{D=(0,H.Xf)(c(w,xt(c)(u))),f?(f.unsubscribe(),f=null,D.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,D.subscribe(a))})}var Yt=T(300);function In(c){return c<=0?()=>ke.E:(0,B.e)((u,a)=>{let f=[];u.subscribe(new ye.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}function Bt(c=Gn){return(0,B.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>f?a.complete():a.error(c())))})}function Gn(){return new Ie}function Tt(c){return(0,B.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>{f||a.next(c),a.complete()}))})}var sr=T(698);function Mn(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Yt.h)((g,D)=>c(g,D,f)):Ee.y,(0,sr.q)(1),a?Tt(u):Bt(()=>new Ie))}var ar=T(576);function tt(c,u,a){const f=(0,ar.m)(c)||u||a?{next:c,error:u,complete:a}:c;return f?(0,B.e)((g,D)=>{var w;null===(w=f.subscribe)||void 0===w||w.call(f);let I=!0;g.subscribe(new ye.Q(D,j=>{var ae;null===(ae=f.next)||void 0===ae||ae.call(f,j),D.next(j)},()=>{var j;I=!1,null===(j=f.complete)||void 0===j||j.call(f),D.complete()},j=>{var ae;I=!1,null===(ae=f.error)||void 0===ae||ae.call(f,j),D.error(j)},()=>{var j,ae;I&&(null===(j=f.unsubscribe)||void 0===j||j.call(f)),null===(ae=f.finalize)||void 0===ae||ae.call(f)}))}):Ee.y}var fn=T(351),Pt=T(577),mt=T(808);
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
       */class Kt{constructor(u,a){this.id=u,this.url=a}}class ur extends Kt{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class W extends Kt{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class R extends Kt{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class P extends Kt{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class X extends Kt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Z extends Kt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class q extends Kt{constructor(u,a,f,g,D){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=D}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class ue extends Kt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ve extends Kt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class je{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Dt{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ut{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ot{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class it{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ze{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ue{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ae="primary";class nt{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Et(c){return new nt(c)}const hn="ngNavigationCancelingError";function Sr(c){const u=Error("NavigationCancelingError: "+c);return u[hn]=!0,u}function mi(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let D=0;D<f.length;D++){const w=f[D],I=c[D];if(w.startsWith(":"))g[w.substring(1)]=I;else if(w!==I.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ft(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let D=0;D<a.length;D++)if(g=a[D],!rt(c[g],u[g]))return!1;return!0}function rt(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,D)=>f[D]===g)}return c===u}function Fn(c){return Array.prototype.concat.apply([],c)}function Tr(c){return c.length>0?c[c.length-1]:null}function At(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function wt(c){return(0,v.CqO)(c)?c:(0,v.QGY)(c)?(0,z.D)(Promise.resolve(c)):(0,Se.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const eo={exact:function Ln(c,u,a){if(!ct(c.segments,u.segments)||!b(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!Ln(c.children[f],u.children[f],a))return!1;return!0},subset:N},zn={exact:function(c,u){return Ft(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>rt(c[a],u[a]))},ignored:()=>!0};function $r(c,u,a){return eo[a.paths](c.root,u.root,a.matrixParams)&&zn[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function N(c,u,a){return A(c,u,u.segments,a)}function A(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!ct(g,a)||u.hasChildren()||!b(g,a,f))}if(c.segments.length===a.length){if(!ct(c.segments,a)||!b(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!N(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),D=a.slice(c.segments.length);return!!(ct(c.segments,g)&&b(c.segments,g,f)&&c.children[Ae])&&A(c.children[Ae],u,D,f)}}function b(c,u,a){return u.every((f,g)=>zn[a](c[g].parameters,f.parameters))}class k{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return xr.serialize(this)}}class U{constructor(u,a){this.segments=u,this.children=a,this.parent=null,At(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Yn(this)}}class pe{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Et(this.parameters)),this._parameterMap}toString(){return qt(this)}}function ct(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class _n{}class Gr{parse(u){const a=new Sn(u);return new k(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${Zt(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${Pr(a)}=${Pr(g)}`).join("&"):`${Pr(a)}=${Pr(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const xr=new Gr;function Yn(c){return c.segments.map(u=>qt(u)).join("/")}function Zt(c,u){if(!c.hasChildren())return Yn(c);if(u){const a=c.children[Ae]?Zt(c.children[Ae],!1):"",f=[];return At(c.children,(g,D)=>{D!==Ae&&f.push(`${D}:${Zt(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return At(c.children,(f,g)=>{g===Ae&&(a=a.concat(u(f,g)))}),At(c.children,(f,g)=>{g!==Ae&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===Ae?[Zt(c.children[Ae],!1)]:[`${g}:${Zt(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[Ae]?`${Yn(c)}/${a[0]}`:`${Yn(c)}/(${a.join("//")})`}}function bt(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pr(c){return bt(c).replace(/%3B/gi,";")}function fe(c){return bt(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function We(c){return decodeURIComponent(c)}function ht(c){return We(c.replace(/\+/g,"%20"))}function qt(c){return`${fe(c.path)}${function(c){return Object.keys(c).map(u=>`;${fe(u)}=${fe(c[u])}`).join("")}(c.parameters)}`}const kn=/^[^\/()?;=#]+/;function Ct(c){const u=c.match(kn);return u?u[0]:""}const lr=/^[^=?&#]+/,Ve=/^[^&#]+/;class Sn{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new U([],{}):new U([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[Ae]=new U(u,a)),f}parseSegment(){const u=Ct(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new pe(We(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=Ct(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=Ct(this.remaining);g&&(f=g,this.capture(f))}u[We(a)]=We(f)}parseQueryParam(u){const a=function(c){const u=c.match(lr);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(Ve);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=ht(a),D=ht(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(D)}else u[g]=D}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=Ct(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let D;f.indexOf(":")>-1?(D=f.substr(0,f.indexOf(":")),this.capture(D),this.capture(":")):u&&(D=Ae);const w=this.parseChildren();a[D]=1===Object.keys(w).length?w[Ae]:new U([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Or{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=jn(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=jn(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=Gt(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return Gt(u,this._root).map(a=>a.value)}}function jn(c,u){if(c===u.value)return u;for(const a of u.children){const f=jn(c,a);if(f)return f}return null}function Gt(c,u){if(c===u.value)return[u];for(const a of u.children){const f=Gt(c,a);if(f.length)return f.unshift(u),f}return[]}class Qt{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function pn(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Jt extends Or{constructor(u,a){super(u),this.snapshot=a,qn(this,u)}toString(){return this.snapshot.toString()}}function dt(c,u){const a=function(c,u){const w=new fr([],{},{},"",{},Ae,u,null,c.root,-1,{});return new Fr("",new Qt(w,[]))}(c,u),f=new ne([new pe("",{})]),g=new ne({}),D=new ne({}),w=new ne({}),I=new ne(""),j=new Ht(f,g,w,I,D,Ae,u,a.root);return j.snapshot=a.root,new Jt(new Qt(j,[]),a)}class Ht{constructor(u,a,f,g,D,w,I,j){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this._futureSnapshot=j}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,be.U)(u=>Et(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,be.U)(u=>Et(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function gn(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],D=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(D.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class fr{constructor(u,a,f,g,D,w,I,j,ae,Ge,Ce){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this.routeConfig=j,this._urlSegment=ae,this._lastPathIndex=Ge,this._resolve=Ce}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Et(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Fr extends Or{constructor(u,a){super(a),this.url=u,qn(this,a)}toString(){return rn(this._root)}}function qn(c,u){u.value._routerState=c,u.children.forEach(a=>qn(c,a))}function rn(c){const u=c.children.length>0?` { ${c.children.map(rn).join(", ")} } `:"";return`${c.value}${u}`}function to(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,Ft(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),Ft(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!Ft(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),Ft(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function Eo(c,u){const a=Ft(c.params,u.params)&&function(c,u){return ct(c,u)&&c.every((a,f)=>Ft(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||Eo(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nr(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Nr(c,f,g);return Nr(c,f)})}(c,u,a);return new Qt(f,g)}{if(c.shouldAttach(u.value)){const D=c.retrieve(u.value);if(null!==D){const w=D.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(I=>Nr(c,I)),w}}const f=function(c){return new Ht(new ne(c.url),new ne(c.params),new ne(c.queryParams),new ne(c.fragment),new ne(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(D=>Nr(c,D));return new Qt(f,g)}}function no(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function zr(c){return"object"==typeof c&&null!=c&&c.outlets}function _o(c,u,a,f,g){let D={};return f&&At(f,(w,I)=>{D[I]=Array.isArray(w)?w.map(j=>`${j}`):`${w}`}),new k(a.root===c?u:Di(a.root,c,u),D,g)}function Di(c,u,a){const f={};return At(c.children,(g,D)=>{f[D]=g===u?a:Di(g,u,a)}),new U(c.segments,f)}class wo{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&no(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find(zr);if(g&&g!==Tr(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class bo{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function Ci(c,u,a){if(c||(c=new U([],{})),0===c.segments.length&&c.hasChildren())return Wr(c,u,a);const f=function(c,u,a){let f=0,g=u;const D={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return D;const w=c.segments[g],I=a[f];if(zr(I))break;const j=`${I}`,ae=f<a.length-1?a[f+1]:null;if(g>0&&void 0===j)break;if(j&&ae&&"object"==typeof ae&&void 0===ae.outlets){if(!Bn(j,ae,w))return D;f+=2}else{if(!Bn(j,{},w))return D;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const D=new U(c.segments.slice(0,f.pathIndex),{});return D.children[Ae]=new U(c.segments.slice(f.pathIndex),c.children),Wr(D,0,g)}return f.match&&0===g.length?new U(c.segments,{}):f.match&&!c.hasChildren()?oo(c,u,a):f.match?Wr(c,0,g):oo(c,u,a)}function Wr(c,u,a){if(0===a.length)return new U(c.segments,{});{const f=function(c){return zr(c[0])?c[0].outlets:{[Ae]:c}}(a),g={};return At(f,(D,w)=>{"string"==typeof D&&(D=[D]),null!==D&&(g[w]=Ci(c.children[w],u,D))}),At(c.children,(D,w)=>{void 0===f[w]&&(g[w]=D)}),new U(c.segments,g)}}function oo(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const D=a[g];if(zr(D)){const j=As(D.outlets);return new U(f,j)}if(0===g&&no(a[0])){f.push(new pe(c.segments[u].path,Ei(a[0]))),g++;continue}const w=zr(D)?D.outlets[Ae]:`${D}`,I=g<a.length-1?a[g+1]:null;w&&I&&no(I)?(f.push(new pe(w,Ei(I))),g+=2):(f.push(new pe(w,{})),g++)}return new U(f,{})}function As(c){const u={};return At(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=oo(new U([],{}),0,a))}),u}function Ei(c){const u={};return At(c,(a,f)=>u[f]=`${a}`),u}function Bn(c,u,a){return c==a.path&&Ft(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class So{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),to(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=pn(a);u.children.forEach(D=>{const w=D.value.outlet;this.deactivateRoutes(D,g[w],f),delete g[w]}),At(g,(D,w)=>{this.deactivateRouteAndItsChildren(D,f)})}deactivateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(g===D)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else D&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=pn(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);if(f&&f.outlet){const w=f.outlet.detach(),I=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:I})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=pn(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=pn(a);u.children.forEach(D=>{this.activateRoutes(D,g[D.value.outlet],f),this.forwardEvent(new Ze(D.value.snapshot))}),u.children.length&&this.forwardEvent(new Ot(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(to(g),g===D)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const I=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(I.contexts),w.attachRef=I.componentRef,w.route=I.route.value,w.outlet&&w.outlet.attach(I.componentRef,I.route.value),to(I.route.value),this.activateChildRoutes(u,null,w.children)}else{const I=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(g.snapshot),j=I?I.module.componentFactoryResolver:null;w.attachRef=null,w.route=g,w.resolver=j,w.outlet&&w.outlet.activateWith(g,j),this.activateChildRoutes(u,null,w.children)}}else this.activateChildRoutes(u,null,f)}}class To{constructor(u,a){this.routes=u,this.module=a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qn(c){return"function"==typeof c}function Un(c){return c instanceof k}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const h=Symbol("INITIAL_VALUE");function C(){return et(c=>Q(c.map(u=>u.pipe((0,sr.q)(1),function(...c){const u=(0,ie.yG)(c);return(0,B.e)((a,f)=>{(u?L(c,a,u):L(c,a)).subscribe(f)})}(h)))).pipe(En((u,a)=>{let f=!1;return a.reduce((g,D,w)=>g!==h?g:(D===h&&(f=!0),f||!1!==D&&w!==a.length-1&&!Un(D)?g:D),u)},h),(0,Yt.h)(u=>u!==h),(0,be.U)(u=>Un(u)?u:!0===u),(0,sr.q)(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class p{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new E,this.attachRef=null}}class E{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const f=this.getOrCreateContext(u);f.outlet=a,this.contexts.set(u,f)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new p,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let S=(()=>{class c{constructor(a,f,g,D,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new v.vpe,this.deactivateEvents=new v.vpe,this.attachEvents=new v.vpe,this.detachEvents=new v.vpe,this.name=D||Ae,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),I=this.parentContexts.getOrCreateContext(this.name).children,j=new V(a,I,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,j),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(v.Y36(E),v.Y36(v.s_b),v.Y36(v._Vd),v.$8M("name"),v.Y36(v.sBO))},c.\u0275dir=v.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class V{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===Ht?this.route:u===E?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let G=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=v.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&v._UZ(0,"router-outlet")},directives:[S],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _e(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];vt(f,He(u,f))}}function vt(c,u){c.children&&_e(c.children,u)}function He(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function pt(c){const u=c.children&&c.children.map(pt),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==Ae&&(a.component=G),a}function $e(c){return c.outlet||Ae}function It(c,u){const a=c.filter(f=>$e(f)===u);return a.push(...c.filter(f=>$e(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Qe={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Nt(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},Qe):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const D=(u.matcher||mi)(a,c,u);if(!D)return Object.assign({},Qe);const w={};At(D.posParams,(j,ae)=>{w[ae]=j.path});const I=D.consumed.length>0?Object.assign(Object.assign({},w),D.consumed[D.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:D.consumed,lastChild:D.consumed.length,parameters:I,positionalParamSegments:null!==(f=D.posParams)&&void 0!==f?f:{}}}function wn(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>hr(c,u,f)&&$e(f)!==Ae)}(c,a,f)){const w=new U(u,function(c,u,a,f){const g={};g[Ae]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const D of a)if(""===D.path&&$e(D)!==Ae){const w=new U([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[$e(D)]=w}return g}(c,u,f,new U(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>hr(c,u,f))}(c,a,f)){const w=new U(c.segments,function(c,u,a,f,g,D){const w={};for(const I of f)if(hr(c,a,I)&&!g[$e(I)]){const j=new U([],{});j._sourceSegment=c,j._segmentIndexShift="legacy"===D?c.segments.length:u.length,w[$e(I)]=j}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const D=new U(c.segments,c.children);return D._sourceSegment=c,D._segmentIndexShift=u.length,{segmentGroup:D,slicedSegments:a}}function hr(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function bn(c,u,a,f){return!!($e(c)===f||f!==Ae&&hr(u,a,c))&&("**"===c.path||Nt(u,c,a).matched)}function wi(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lr{constructor(u){this.segmentGroup=u||null}}class Be{constructor(u){this.urlTree=u}}function bi(c){return new re.y(u=>u.error(new Lr(c)))}function Ps(c){return new re.y(u=>u.error(new Be(c)))}function Ta(c){return new re.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class Ra{constructor(u,a,f,g,D){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=D,this.allowRedirects=!0,this.ngModule=u.get(v.h0i)}apply(){const u=wn(this.urlTree.root,[],[],this.config).segmentGroup,a=new U(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,Ae).pipe((0,be.U)(D=>this.createUrlTree(J(D),this.urlTree.queryParams,this.urlTree.fragment))).pipe(xt(D=>{if(D instanceof Be)return this.allowRedirects=!1,this.match(D.urlTree);throw D instanceof Lr?this.noMatchError(D):D}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,Ae).pipe((0,be.U)(g=>this.createUrlTree(J(g),u.queryParams,u.fragment))).pipe(xt(g=>{throw g instanceof Lr?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new U([],{[Ae]:u}):u;return new k(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,be.U)(D=>new U([],D))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const D of Object.keys(f.children))"primary"===D?g.unshift(D):g.push(D);return(0,z.D)(g).pipe((0,fn.b)(D=>{const w=f.children[D],I=It(a,D);return this.expandSegmentGroup(u,I,w,D).pipe((0,be.U)(j=>({segment:j,outlet:D})))}),En((D,w)=>(D[w.outlet]=w.segment,D),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Yt.h)((g,D)=>c(g,D,f)):Ee.y,In(1),a?Tt(u):Bt(()=>new Ie))}())}expandSegment(u,a,f,g,D,w){return(0,z.D)(f).pipe((0,fn.b)(I=>this.expandSegmentAgainstRoute(u,a,f,I,g,D,w).pipe(xt(ae=>{if(ae instanceof Lr)return(0,Se.of)(null);throw ae}))),Mn(I=>!!I),xt((I,j)=>{if(I instanceof Ie||"EmptyError"===I.name){if(wi(a,g,D))return(0,Se.of)(new U([],{}));throw new Lr(a)}throw I}))}expandSegmentAgainstRoute(u,a,f,g,D,w,I){return bn(g,a,D,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,D,w):I&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w):bi(a):bi(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const D=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?Ps(D):this.lineralizeSegments(f,D).pipe((0,Pt.z)(w=>{const I=new U(w,{});return this.expandSegment(u,I,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){const{matched:I,consumedSegments:j,lastChild:ae,positionalParamSegments:Ge}=Nt(a,g,D);if(!I)return bi(a);const Ce=this.applyRedirectCommands(j,g.redirectTo,Ge);return g.redirectTo.startsWith("/")?Ps(Ce):this.lineralizeSegments(g,Ce).pipe((0,Pt.z)(ft=>this.expandSegment(u,a,f,ft.concat(D.slice(ae)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,D){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,Se.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,be.U)(ft=>(f._loadedConfig=ft,new U(g,{})))):(0,Se.of)(new U(g,{}));const{matched:w,consumedSegments:I,lastChild:j}=Nt(a,f,g);if(!w)return bi(a);const ae=g.slice(j);return this.getChildConfig(u,f,g).pipe((0,Pt.z)(Ce=>{const ft=Ce.module,lt=Ce.routes,{segmentGroup:Ur,slicedSegments:an}=wn(a,I,ae,lt),un=new U(Ur.segments,Ur.children);if(0===an.length&&un.hasChildren())return this.expandChildren(ft,lt,un).pipe((0,be.U)(An=>new U(I,An)));if(0===lt.length&&0===an.length)return(0,Se.of)(new U(I,{}));const vn=$e(f)===D;return this.expandSegment(ft,un,lt,an,vn?Ae:D,!0).pipe((0,be.U)(Tn=>new U(I.concat(Tn.segments),Tn.children)))}))}getChildConfig(u,a,f){return a.children?(0,Se.of)(new To(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,Se.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,Pt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,be.U)(D=>(a._loadedConfig=D,D))):(c=a,new re.y(u=>u.error(Sr(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,Se.of)(new To([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,Se.of)(!0);const D=g.map(w=>{const I=u.get(w);let j;if((c=I)&&Qn(c.canLoad))j=I.canLoad(a,f);else{if(!Qn(I))throw new Error("Invalid CanLoad guard");j=I(a,f)}var c;return wt(j)});return(0,Se.of)(D).pipe(C(),tt(w=>{if(!Un(w))return;const I=Sr(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw I.url=w,I}),(0,be.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,Se.of)(f);if(g.numberOfChildren>1||!g.children[Ae])return Ta(u.redirectTo);g=g.children[Ae]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const D=this.createSegmentGroup(u,a.root,f,g);return new k(D,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return At(u,(g,D)=>{if("string"==typeof g&&g.startsWith(":")){const I=g.substring(1);f[D]=a[I]}else f[D]=g}),f}createSegmentGroup(u,a,f,g){const D=this.createSegments(u,a.segments,f,g);let w={};return At(a.children,(I,j)=>{w[j]=this.createSegmentGroup(u,I,f,g)}),new U(D,w)}createSegments(u,a,f,g){return a.map(D=>D.path.startsWith(":")?this.findPosParam(u,D,g):this.findOrReturn(D,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function J(c){const u={};for(const f of Object.keys(c.children)){const D=J(c.children[f]);(D.segments.length>0||D.hasChildren())&&(u[f]=D)}return function(c){if(1===c.numberOfChildren&&c.children[Ae]){const u=c.children[Ae];return new U(c.segments.concat(u.segments),u.children)}return c}(new U(c.segments,u))}
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
class Fs{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class Mt{constructor(u,a){this.component=u,this.route=a}}function Ns(c,u,a){const f=c._root;return kr(f,u?u._root:null,a,[f.value])}function yn(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function kr(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=pn(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=c.value,w=u?u.value:null,I=a?a.getContext(c.value.outlet):null;if(w&&D.routeConfig===w.routeConfig){const j=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!ct(c.url,u.url);case"pathParamsOrQueryParamsChange":return!ct(c.url,u.url)||!Ft(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Eo(c,u)||!Ft(c.queryParams,u.queryParams);default:return!Eo(c,u)}}(w,D,D.routeConfig.runGuardsAndResolvers);j?g.canActivateChecks.push(new Fs(f)):(D.data=w.data,D._resolvedData=w._resolvedData),kr(c,u,D.component?I?I.children:null:a,f,g),j&&I&&I.outlet&&I.outlet.isActivated&&g.canDeactivateChecks.push(new Mt(I.outlet.component,w))}else w&&pr(u,I,g),g.canActivateChecks.push(new Fs(f)),kr(c,null,D.component?I?I.children:null:a,f,g)})(w,D[w.value.outlet],a,f.concat([w.value]),g),delete D[w.value.outlet]}),At(D,(w,I)=>pr(w,a.getContext(I),g)),g}function pr(c,u,a){const f=pn(c),g=c.value;At(f,(D,w)=>{pr(D,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new Mt(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
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
class Fa{}function js(c){return new re.y(u=>u.error(c))}class Si{constructor(u,a,f,g,D,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=D,this.relativeLinkResolution=w}recognize(){const u=wn(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,Ae);if(null===a)return null;const f=new fr([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},Ae,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new Qt(f,a),D=new Fr(this.url,g);return this.inheritParamsAndData(D._root),D}inheritParamsAndData(u){const a=u.value,f=gn(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const D of Object.keys(a.children)){const w=a.children[D],I=It(u,D),j=this.processSegmentGroup(I,w,D);if(null===j)return null;f.push(...j)}const g=Ai(f);return g.sort((u,a)=>u.value.outlet===Ae?-1:a.value.outlet===Ae?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const D of u){const w=this.processSegmentAgainstRoute(D,a,f,g);if(null!==w)return w}return wi(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!bn(u,a,f,g))return null;let D,w=[],I=[];if("**"===u.path){const lt=f.length>0?Tr(f).parameters:{};D=new fr(f,lt,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Oi(u),$e(u),u.component,u,xi(a),Pi(a)+f.length,Fi(u))}else{const lt=Nt(a,u,f);if(!lt.matched)return null;w=lt.consumedSegments,I=f.slice(lt.lastChild),D=new fr(w,lt.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Oi(u),$e(u),u.component,u,xi(a),Pi(a)+w.length,Fi(u))}const j=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:ae,slicedSegments:Ge}=wn(a,w,I,j.filter(lt=>void 0===lt.redirectTo),this.relativeLinkResolution);var c;if(0===Ge.length&&ae.hasChildren()){const lt=this.processChildren(j,ae);return null===lt?null:[new Qt(D,lt)]}if(0===j.length&&0===Ge.length)return[new Qt(D,[])];const Ce=$e(u)===g,ft=this.processSegment(j,ae,Ge,Ce?Ae:g);return null===ft?null:[new Qt(D,ft)]}}function Na(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function Ai(c){const u=[],a=new Set;for(const f of c){if(!Na(f)){u.push(f);continue}const g=u.find(D=>f.value.routeConfig===D.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=Ai(f.children);u.push(new Qt(f.value,g))}return u.filter(f=>!a.has(f))}function xi(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Pi(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function Oi(c){return c.data||{}}function Fi(c){return c.resolve||{}}
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
function _t(c){return et(u=>{const a=c(u);return a?(0,z.D)(a).pipe((0,be.U)(()=>u)):(0,Se.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hs extends class{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ni=new v.OlP("ROUTES");class Vs{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,be.U)(D=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=D.create(u);return new To(Fn(w.injector.get(Ni,void 0,v.XFs.Self|v.XFs.Optional)).map(pt),w)}),xt(D=>{throw a._loader$=void 0,D}));return a._loader$=new st(g,()=>new x.x).pipe(Me()),a._loader$}loadModuleFactory(u){return wt(u()).pipe((0,Pt.z)(a=>a instanceof v.YKP?(0,Se.of)(a):(0,z.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Oo{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Fo(c){throw c}function No(c,u,a){return u.parse("/")}function Lo(c,u){return(0,Se.of)(null)}const $s={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ua={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Lt=(()=>{class c{constructor(a,f,g,D,w,I,j){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=D,this.config=j,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new x.x,this.errorHandler=Fo,this.malformedUriErrorHandler=No,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Lo,afterPreactivation:Lo},this.urlHandlingStrategy=new Oo,this.routeReuseStrategy=new Hs,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(v.h0i),this.console=w.get(v.c2e);const Ce=w.get(v.R0b);this.isNgZoneEnabled=Ce instanceof v.R0b&&v.R0b.isInAngularZone(),this.resetConfig(j),this.currentUrlTree=new k(new U([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new Vs(w,I,ft=>this.triggerEvent(new je(ft)),ft=>this.triggerEvent(new Dt(ft))),this.routerState=dt(this.currentUrlTree,this.rootComponentType),this.transitions=new ne({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,Yt.h)(g=>0!==g.id),(0,be.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),et(g=>{let D=!1,w=!1;return(0,Se.of)(g).pipe(tt(I=>{this.currentNavigation={id:I.id,initialUrl:I.currentRawUrl,extractedUrl:I.extractedUrl,trigger:I.source,extras:I.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),et(I=>{const j=this.browserUrlTree.toString(),ae=!this.navigated||I.extractedUrl.toString()!==j||j!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ae)&&this.urlHandlingStrategy.shouldProcessUrl(I.rawUrl))return ko(I.source)&&(this.browserUrlTree=I.extractedUrl),(0,Se.of)(I).pipe(et(Ce=>{const ft=this.transitions.getValue();return f.next(new ur(Ce.id,this.serializeUrl(Ce.extractedUrl),Ce.source,Ce.restoredState)),ft!==this.transitions.getValue()?ke.E:Promise.resolve(Ce)}),function(c,u,a,f){return et(g=>function(c,u,a,f,g){return new Ra(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,be.U)(D=>Object.assign(Object.assign({},g),{urlAfterRedirects:D}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),tt(Ce=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:Ce.urlAfterRedirects})}),function(c,u,a,f,g){return(0,Pt.z)(D=>function(c,u,a,f,g="emptyOnly",D="legacy"){try{const w=new Si(c,u,a,f,g,D).recognize();return null===w?js(new Fa):(0,Se.of)(w)}catch(w){return js(w)}}(c,u,D.urlAfterRedirects,a(D.urlAfterRedirects),f,g).pipe((0,be.U)(w=>Object.assign(Object.assign({},D),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,Ce=>this.serializeUrl(Ce),this.paramsInheritanceStrategy,this.relativeLinkResolution),tt(Ce=>{if("eager"===this.urlUpdateStrategy){if(!Ce.extras.skipLocationChange){const lt=this.urlHandlingStrategy.merge(Ce.urlAfterRedirects,Ce.rawUrl);this.setBrowserUrl(lt,Ce)}this.browserUrlTree=Ce.urlAfterRedirects}const ft=new X(Ce.id,this.serializeUrl(Ce.extractedUrl),this.serializeUrl(Ce.urlAfterRedirects),Ce.targetSnapshot);f.next(ft)}));if(ae&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:ft,extractedUrl:lt,source:Ur,restoredState:an,extras:un}=I,vn=new ur(ft,this.serializeUrl(lt),Ur,an);f.next(vn);const fo=dt(lt,this.rootComponentType).snapshot;return(0,Se.of)(Object.assign(Object.assign({},I),{targetSnapshot:fo,urlAfterRedirects:lt,extras:Object.assign(Object.assign({},un),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=I.rawUrl,I.resolve(null),ke.E}),_t(I=>{const{targetSnapshot:j,id:ae,extractedUrl:Ge,rawUrl:Ce,extras:{skipLocationChange:ft,replaceUrl:lt}}=I;return this.hooks.beforePreactivation(j,{navigationId:ae,appliedUrlTree:Ge,rawUrlTree:Ce,skipLocationChange:!!ft,replaceUrl:!!lt})}),tt(I=>{const j=new Z(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot);this.triggerEvent(j)}),(0,be.U)(I=>Object.assign(Object.assign({},I),{guards:Ns(I.targetSnapshot,I.currentSnapshot,this.rootContexts)})),function(c,u){return(0,Pt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:D,canDeactivateChecks:w}}=a;return 0===w.length&&0===D.length?(0,Se.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,z.D)(c).pipe((0,Pt.z)(g=>function(c,u,a,f,g){const D=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!D||0===D.length)return(0,Se.of)(!0);const w=D.map(I=>{const j=yn(I,u,g);let ae;if(function(c){return c&&Qn(c.canDeactivate)}(j))ae=wt(j.canDeactivate(c,u,a,f));else{if(!Qn(j))throw new Error("Invalid CanDeactivate guard");ae=wt(j(c,u,a,f))}return ae.pipe(Mn())});return(0,Se.of)(w).pipe(C())}(g.component,g.route,a,u,f)),Mn(g=>!0!==g,!0))}(w,f,g,c).pipe((0,Pt.z)(I=>I&&function(c){return"boolean"==typeof c}(I)?function(c,u,a,f){return(0,z.D)(u).pipe((0,fn.b)(g=>L(function(c,u){return null!==c&&u&&u(new Ut(c)),(0,Se.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new it(c)),(0,Se.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],D=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>K(()=>{const I=w.guards.map(j=>{const ae=yn(j,w.node,a);let Ge;if(function(c){return c&&Qn(c.canActivateChild)}(ae))Ge=wt(ae.canActivateChild(f,c));else{if(!Qn(ae))throw new Error("Invalid CanActivateChild guard");Ge=wt(ae(f,c))}return Ge.pipe(Mn())});return(0,Se.of)(I).pipe(C())}));return(0,Se.of)(D).pipe(C())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,Se.of)(!0);const g=f.map(D=>K(()=>{const w=yn(D,u,a);let I;if(function(c){return c&&Qn(c.canActivate)}(w))I=wt(w.canActivate(u,c));else{if(!Qn(w))throw new Error("Invalid CanActivate guard");I=wt(w(u,c))}return I.pipe(Mn())}));return(0,Se.of)(g).pipe(C())}(c,g.route,a))),Mn(g=>!0!==g,!0))}(f,D,c,u):(0,Se.of)(I)),(0,be.U)(I=>Object.assign(Object.assign({},a),{guardsResult:I})))})}(this.ngModule.injector,I=>this.triggerEvent(I)),tt(I=>{if(Un(I.guardsResult)){const ae=Sr(`Redirecting to "${this.serializeUrl(I.guardsResult)}"`);throw ae.url=I.guardsResult,ae}const j=new q(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot,!!I.guardsResult);this.triggerEvent(j)}),(0,Yt.h)(I=>!!I.guardsResult||(this.restoreHistory(I),this.cancelNavigationTransition(I,""),!1)),_t(I=>{if(I.guards.canActivateChecks.length)return(0,Se.of)(I).pipe(tt(j=>{const ae=new ue(j.id,this.serializeUrl(j.extractedUrl),this.serializeUrl(j.urlAfterRedirects),j.targetSnapshot);this.triggerEvent(ae)}),et(j=>{let ae=!1;return(0,Se.of)(j).pipe(function(c,u){return(0,Pt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,Se.of)(a);let D=0;return(0,z.D)(g).pipe((0,fn.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,Se.of)({});const D={};return(0,z.D)(g).pipe((0,Pt.z)(w=>function(c,u,a,f){const g=yn(c,u,f);return wt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe(tt(I=>{D[w]=I}))),In(1),(0,Pt.z)(()=>Object.keys(D).length===g.length?(0,Se.of)(D):ke.E))}(c._resolve,c,u,f).pipe((0,be.U)(D=>(c._resolvedData=D,c.data=Object.assign(Object.assign({},c.data),gn(c,a).resolve),null)))}(w.route,f,c,u)),tt(()=>D++),In(1),(0,Pt.z)(w=>D===g.length?(0,Se.of)(a):ke.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),tt({next:()=>ae=!0,complete:()=>{ae||(this.restoreHistory(j),this.cancelNavigationTransition(j,"At least one route resolver didn't emit any value."))}}))}),tt(j=>{const ae=new ve(j.id,this.serializeUrl(j.extractedUrl),this.serializeUrl(j.urlAfterRedirects),j.targetSnapshot);this.triggerEvent(ae)}))}),_t(I=>{const{targetSnapshot:j,id:ae,extractedUrl:Ge,rawUrl:Ce,extras:{skipLocationChange:ft,replaceUrl:lt}}=I;return this.hooks.afterPreactivation(j,{navigationId:ae,appliedUrlTree:Ge,rawUrlTree:Ce,skipLocationChange:!!ft,replaceUrl:!!lt})}),(0,be.U)(I=>{const j=function(c,u,a){const f=Nr(c,u._root,a?a._root:void 0);return new Jt(f,u)}(this.routeReuseStrategy,I.targetSnapshot,I.currentRouterState);return Object.assign(Object.assign({},I),{targetRouterState:j})}),tt(I=>{this.currentUrlTree=I.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(I.urlAfterRedirects,I.rawUrl),this.routerState=I.targetRouterState,"deferred"===this.urlUpdateStrategy&&(I.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,I),this.browserUrlTree=I.urlAfterRedirects)}),((c,u,a)=>(0,be.U)(f=>(new So(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,I=>this.triggerEvent(I)),tt({next(){D=!0},complete(){D=!0}}),function(c){return(0,B.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var I;D||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(I=this.currentNavigation)||void 0===I?void 0:I.id)===g.id&&(this.currentNavigation=null)}),xt(I=>{if(w=!0,function(c){return c&&c[hn]}(I)){const j=Un(I.url);j||(this.navigated=!0,this.restoreHistory(g,!0));const ae=new R(g.id,this.serializeUrl(g.extractedUrl),I.message);f.next(ae),j?setTimeout(()=>{const Ge=this.urlHandlingStrategy.merge(I.url,this.rawUrlTree),Ce={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||ko(g.source)};this.scheduleNavigation(Ge,"imperative",null,Ce,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const j=new P(g.id,this.serializeUrl(g.extractedUrl),I);f.next(j);try{g.resolve(this.errorHandler(I))}catch(ae){g.reject(ae)}}return ke.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const D={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const j=Object.assign({},w);delete j.navigationId,delete j.\u0275routerPageId,0!==Object.keys(j).length&&(D.state=j)}const I=this.parseUrl(a.url);this.scheduleNavigation(I,f,w,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){_e(a),this.config=a.map(pt),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:D,fragment:w,queryParamsHandling:I,preserveFragment:j}=f,ae=g||this.routerState.root,Ge=j?this.currentUrlTree.fragment:w;let Ce=null;switch(I){case"merge":Ce=Object.assign(Object.assign({},this.currentUrlTree.queryParams),D);break;case"preserve":Ce=this.currentUrlTree.queryParams;break;default:Ce=D||null}return null!==Ce&&(Ce=this.removeEmptyProps(Ce)),function(c,u,a,f,g){if(0===a.length)return _o(u.root,u.root,u,f,g);const D=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new wo(!0,0,c);let u=0,a=!1;const f=c.reduce((g,D,w)=>{if("object"==typeof D&&null!=D){if(D.outlets){const I={};return At(D.outlets,(j,ae)=>{I[ae]="string"==typeof j?j.split("/"):j}),[...g,{outlets:I}]}if(D.segmentPath)return[...g,D.segmentPath]}return"string"!=typeof D?[...g,D]:0===w?(D.split("/").forEach((I,j)=>{0==j&&"."===I||(0==j&&""===I?a=!0:".."===I?u++:""!=I&&g.push(I))}),g):[...g,D]},[]);return new wo(a,u,f)}(a);if(D.toRoot())return _o(u.root,new U([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new bo(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const D=a.snapshot._urlSegment;return new bo(D,D===u.root,0)}const f=no(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,D=a;for(;D>g;){if(D-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new bo(f,!1,g-D)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(D,u,c),I=w.processChildren?Wr(w.segmentGroup,w.index,D.commands):Ci(w.segmentGroup,w.index,D.commands);return _o(w.segmentGroup,I,u,f,g)}(ae,this.currentUrlTree,a,Ce,null!=Ge?Ge:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=Un(a)?a:this.parseUrl(a),D=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(D,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},$s):!1===f?Object.assign({},Ua):f,Un(a))return $r(this.currentUrlTree,a,g);const D=this.parseUrl(a);return $r(this.currentUrlTree,D,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const D=a[g];return null!=D&&(f[g]=D),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new W(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,D,w){var I,j,ae;if(this.disposed)return Promise.resolve(!1);const Ge=this.transitions.value,Ce=ko(f)&&Ge&&!ko(Ge.source),ft=Ge.rawUrl.toString()===a.toString(),lt=Ge.id===(null===(I=this.currentNavigation)||void 0===I?void 0:I.id);if(Ce&&ft&&lt)return Promise.resolve(!0);let an,un,vn;w?(an=w.resolve,un=w.reject,vn=w.promise):vn=new Promise((An,sc)=>{an=An,un=sc});const fo=++this.navigationId;let Tn;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),Tn=g&&g.\u0275routerPageId?g.\u0275routerPageId:D.replaceUrl||D.skipLocationChange?null!==(j=this.browserPageId)&&void 0!==j?j:0:(null!==(ae=this.browserPageId)&&void 0!==ae?ae:0)+1):Tn=0,this.setTransition({id:fo,targetPageId:Tn,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:D,resolve:an,reject:un,promise:vn,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),vn.catch(An=>Promise.reject(An))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),D=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",D):this.location.go(g,"",D)}restoreHistory(a,f=!1){var g,D;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new R(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function ko(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class $a{}class uo{preload(u,a){return(0,Se.of)(null)}}let ki=(()=>{class c{constructor(a,f,g,D){this.router=a,this.injector=g,this.preloadingStrategy=D,this.loader=new Vs(g,f,j=>a.triggerEvent(new je(j)),j=>a.triggerEvent(new Dt(j)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,Yt.h)(a=>a instanceof W),(0,fn.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(v.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const D of f)if(D.loadChildren&&!D.canLoad&&D._loadedConfig){const w=D._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else D.loadChildren&&!D.canLoad?g.push(this.preloadConfig(a,D)):D.children&&g.push(this.processRoutes(a,D.children));return(0,z.D)(g).pipe((0,de.J)(),(0,be.U)(D=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,Se.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,Pt.z)(D=>(f._loadedConfig=D,this.processRoutes(D.module,D.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Lt),v.LFG(v.Sil),v.LFG(v.zs3),v.LFG($a))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})(),lo=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof ur?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof W&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Ue&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new Ue(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yr=new v.OlP("ROUTER_CONFIGURATION"),Bi=new v.OlP("ROUTER_FORROOT_GUARD"),qr=[mt.Ye,{provide:_n,useClass:Gr},{provide:Lt,useFactory:function(c,u,a,f,g,D,w={},I,j){const ae=new Lt(null,c,u,a,f,g,Fn(D));return I&&(ae.urlHandlingStrategy=I),j&&(ae.routeReuseStrategy=j),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,ae),w.enableTracing&&ae.events.subscribe(Ge=>{var Ce,ft;null===(Ce=console.group)||void 0===Ce||Ce.call(console,`Router Event: ${Ge.constructor.name}`),console.log(Ge.toString()),console.log(Ge),null===(ft=console.groupEnd)||void 0===ft||ft.call(console)}),ae},deps:[_n,E,mt.Ye,v.zs3,v.Sil,Ni,yr,[class{},new v.FiY],[class{},new v.FiY]]},E,{provide:Ht,useFactory:function(c){return c.routerState.root},deps:[Lt]},ki,uo,class{preload(u,a){return a().pipe(xt(()=>(0,Se.of)(null)))}},{provide:yr,useValue:{enableTracing:!1}}];function Ga(){return new v.PXZ("Router",Lt)}let Qr=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[qr,Hi(a),{provide:Bi,useFactory:oc,deps:[[Lt,new v.FiY,new v.tp0]]},{provide:yr,useValue:f||{}},{provide:mt.S$,useFactory:jo,deps:[mt.lw,[new v.tBr(mt.mr),new v.FiY],yr]},{provide:lo,useFactory:Ui,deps:[Lt,mt.EM,yr]},{provide:$a,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:uo},{provide:v.PXZ,multi:!0,useFactory:Ga},[Br,{provide:v.ip1,multi:!0,useFactory:Vi,deps:[Br]},{provide:co,useFactory:$i,deps:[Br]},{provide:v.tb,multi:!0,useExisting:co}]]}}static forChild(a){return{ngModule:c,providers:[Hi(a)]}}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Bi,8),v.LFG(Lt,8))},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({}),c})();function Ui(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new lo(c,u,a)}function jo(c,u,a={}){return a.useHash?new mt.Do(c,u):new mt.b0(c,u)}function oc(c){return"guarded"}function Hi(c){return[{provide:v.deG,multi:!0,useValue:c},{provide:Ni,multi:!0,useValue:c}]}let Br=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new x.x}appInitializer(){return this.injector.get(mt.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(I=>f=I),D=this.injector.get(Lt),w=this.injector.get(yr);return"disabled"===w.initialNavigation?(D.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(D.hooks.afterPreactivation=()=>this.initNavigation?(0,Se.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),D.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(yr),g=this.injector.get(ki),D=this.injector.get(lo),w=this.injector.get(Lt),I=this.injector.get(v.z2F);a===I.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),D.init(),w.resetRootComponentType(I.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(v.zs3))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function Vi(c){return c.appInitializer.bind(c)}function $i(c){return c.bootstrapListener.bind(c)}const co=new v.OlP("Router Initializer")}
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
       */},Ke=>{Ke(Ke.s=561)}]);