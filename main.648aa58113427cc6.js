"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{6243:(Be,ie,M)=>{var y=M(9808),S=M(7587);
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
       */class ne extends y.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class J extends ne{static makeCurrent(){(0,y.HT)(new J)}onAndCancel(A,b,k){return A.addEventListener(b,k,!1),()=>{A.removeEventListener(b,k,!1)}}dispatchEvent(A,b){A.dispatchEvent(b)}remove(A){A.parentNode&&A.parentNode.removeChild(A)}createElement(A,b){return(b=b||this.getDefaultDocument()).createElement(A)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(A){return A.nodeType===Node.ELEMENT_NODE}isShadowRoot(A){return A instanceof DocumentFragment}getGlobalEventTarget(A,b){return"window"===b?window:"document"===b?A:"body"===b?A.body:null}getBaseHref(A){const b=(ee=ee||document.querySelector("base"),ee?ee.getAttribute("href"):null);return null==b?null:function(O){se=se||document.createElement("a"),se.setAttribute("href",O);const A=se.pathname;return"/"===A.charAt(0)?A:`/${A}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b)}resetBaseElement(){ee=null}getUserAgent(){return window.navigator.userAgent}getCookie(A){return(0,y.Mx)(document.cookie,A)}}let se,ee=null;const te=new S.OlP("TRANSITION_ID"),N=[{provide:S.ip1,useFactory:function(O,A,b){return()=>{b.get(S.CZH).donePromise.then(()=>{const k=(0,y.q)(),W=A.querySelectorAll(`style[ng-transition="${O}"]`);for(let xe=0;xe<W.length;xe++)k.remove(W[xe])})}},deps:[te,y.K0,S.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _e{static init(){(0,S.VLi)(new _e)}addToWindow(A){S.dqk.getAngularTestability=(k,W=!0)=>{const xe=A.findTestabilityInTree(k,W);if(null==xe)throw new Error("Could not find testability for element.");return xe},S.dqk.getAllAngularTestabilities=()=>A.getAllTestabilities(),S.dqk.getAllAngularRootElements=()=>A.getAllRootElements(),S.dqk.frameworkStabilizers||(S.dqk.frameworkStabilizers=[]),S.dqk.frameworkStabilizers.push(k=>{const W=S.dqk.getAllAngularTestabilities();let xe=W.length,Ne=!1;const Mt=function(dt){Ne=Ne||dt,xe--,0==xe&&k(Ne)};W.forEach(function(dt){dt.whenStable(Mt)})})}findTestabilityInTree(A,b,k){if(null==b)return null;const W=A.getTestability(b);return null!=W?W:k?(0,y.q)().isShadowRoot(b)?this.findTestabilityInTree(A,b.host,!0):this.findTestabilityInTree(A,b.parentElement,!0):null}}let ye=(()=>{class O{build(){return new XMLHttpRequest}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pe=new S.OlP("EventManagerPlugins");let ze=(()=>{class O{constructor(b,k){this._zone=k,this._eventNameToPlugin=new Map,b.forEach(W=>W.manager=this),this._plugins=b.slice().reverse()}addEventListener(b,k,W){return this._findPluginFor(k).addEventListener(b,k,W)}addGlobalEventListener(b,k,W){return this._findPluginFor(k).addGlobalEventListener(b,k,W)}getZone(){return this._zone}_findPluginFor(b){const k=this._eventNameToPlugin.get(b);if(k)return k;const W=this._plugins;for(let xe=0;xe<W.length;xe++){const Ne=W[xe];if(Ne.supports(b))return this._eventNameToPlugin.set(b,Ne),Ne}throw new Error(`No event manager plugin found for event ${b}`)}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(pe),S.LFG(S.R0b))},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();class Ie{constructor(A){this._doc=A}addGlobalEventListener(A,b,k){const W=(0,y.q)().getGlobalEventTarget(this._doc,A);if(!W)throw new Error(`Unsupported event target ${W} for event ${b}`);return this.addEventListener(W,b,k)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class O{constructor(){this._stylesSet=new Set}addStyles(b){const k=new Set;b.forEach(W=>{this._stylesSet.has(W)||(this._stylesSet.add(W),k.add(W))}),this.onStylesAdded(k)}onStylesAdded(b){}getAllStyles(){return Array.from(this._stylesSet)}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})(),Le=(()=>{class O extends Z{constructor(b){super(),this._doc=b,this._hostNodes=new Map,this._hostNodes.set(b.head,[])}_addStylesToHost(b,k,W){b.forEach(xe=>{const Ne=this._doc.createElement("style");Ne.textContent=xe,W.push(k.appendChild(Ne))})}addHost(b){const k=[];this._addStylesToHost(this._stylesSet,b,k),this._hostNodes.set(b,k)}removeHost(b){const k=this._hostNodes.get(b);k&&k.forEach(Te),this._hostNodes.delete(b)}onStylesAdded(b){this._hostNodes.forEach((k,W)=>{this._addStylesToHost(b,W,k)})}ngOnDestroy(){this._hostNodes.forEach(b=>b.forEach(Te))}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(y.K0))},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();function Te(O){(0,y.q)().remove(O)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ce={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},De=/%COMP%/g;function j(O,A,b){for(let k=0;k<A.length;k++){let W=A[k];Array.isArray(W)?j(O,W,b):(W=W.replace(De,O),b.push(W))}return b}function H(O){return A=>{if("__ngUnwrap__"===A)return O;!1===O(A)&&(A.preventDefault(),A.returnValue=!1)}}let $=(()=>{class O{constructor(b,k,W){this.eventManager=b,this.sharedStylesHost=k,this.appId=W,this.rendererByCompId=new Map,this.defaultRenderer=new V(b)}createRenderer(b,k){if(!b||!k)return this.defaultRenderer;switch(k.encapsulation){case S.ifc.Emulated:{let W=this.rendererByCompId.get(k.id);return W||(W=new St(this.eventManager,this.sharedStylesHost,k,this.appId),this.rendererByCompId.set(k.id,W)),W.applyToHost(b),W}case 1:case S.ifc.ShadowDom:return new Ve(this.eventManager,this.sharedStylesHost,b,k);default:if(!this.rendererByCompId.has(k.id)){const W=j(k.id,k.styles,[]);this.sharedStylesHost.addStyles(W),this.rendererByCompId.set(k.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(ze),S.LFG(Le),S.LFG(S.AFp))},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();class V{constructor(A){this.eventManager=A,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(A,b){return b?document.createElementNS(Ce[b]||b,A):document.createElement(A)}createComment(A){return document.createComment(A)}createText(A){return document.createTextNode(A)}appendChild(A,b){A.appendChild(b)}insertBefore(A,b,k){A&&A.insertBefore(b,k)}removeChild(A,b){A&&A.removeChild(b)}selectRootElement(A,b){let k="string"==typeof A?document.querySelector(A):A;if(!k)throw new Error(`The selector "${A}" did not match any elements`);return b||(k.textContent=""),k}parentNode(A){return A.parentNode}nextSibling(A){return A.nextSibling}setAttribute(A,b,k,W){if(W){b=W+":"+b;const xe=Ce[W];xe?A.setAttributeNS(xe,b,k):A.setAttribute(b,k)}else A.setAttribute(b,k)}removeAttribute(A,b,k){if(k){const W=Ce[k];W?A.removeAttributeNS(W,b):A.removeAttribute(`${k}:${b}`)}else A.removeAttribute(b)}addClass(A,b){A.classList.add(b)}removeClass(A,b){A.classList.remove(b)}setStyle(A,b,k,W){W&(S.JOm.DashCase|S.JOm.Important)?A.style.setProperty(b,k,W&S.JOm.Important?"important":""):A.style[b]=k}removeStyle(A,b,k){k&S.JOm.DashCase?A.style.removeProperty(b):A.style[b]=""}setProperty(A,b,k){A[b]=k}setValue(A,b){A.nodeValue=b}listen(A,b,k){return"string"==typeof A?this.eventManager.addGlobalEventListener(A,b,H(k)):this.eventManager.addEventListener(A,b,H(k))}}class St extends V{constructor(A,b,k,W){super(A),this.component=k;const xe=j(W+"-"+k.id,k.styles,[]);b.addStyles(xe),this.contentAttr="_ngcontent-%COMP%".replace(De,W+"-"+k.id),this.hostAttr="_nghost-%COMP%".replace(De,W+"-"+k.id)}applyToHost(A){super.setAttribute(A,this.hostAttr,"")}createElement(A,b){const k=super.createElement(A,b);return super.setAttribute(k,this.contentAttr,""),k}}class Ve extends V{constructor(A,b,k,W){super(A),this.sharedStylesHost=b,this.hostEl=k,this.shadowRoot=k.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const xe=j(W.id,W.styles,[]);for(let Ne=0;Ne<xe.length;Ne++){const Mt=document.createElement("style");Mt.textContent=xe[Ne],this.shadowRoot.appendChild(Mt)}}nodeOrShadowRoot(A){return A===this.hostEl?this.shadowRoot:A}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(A,b){return super.appendChild(this.nodeOrShadowRoot(A),b)}insertBefore(A,b,k){return super.insertBefore(this.nodeOrShadowRoot(A),b,k)}removeChild(A,b){return super.removeChild(this.nodeOrShadowRoot(A),b)}parentNode(A){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(A)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xt=(()=>{class O extends Ie{constructor(b){super(b)}supports(b){return!0}addEventListener(b,k,W){return b.addEventListener(k,W,!1),()=>this.removeEventListener(b,k,W)}removeEventListener(b,k,W){return b.removeEventListener(k,W)}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(y.K0))},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tn=["alt","control","meta","shift"],Pt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Vt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},gt={alt:O=>O.altKey,control:O=>O.ctrlKey,meta:O=>O.metaKey,shift:O=>O.shiftKey};let nt=(()=>{class O extends Ie{constructor(b){super(b)}supports(b){return null!=O.parseEventName(b)}addEventListener(b,k,W){const xe=O.parseEventName(k),Ne=O.eventCallback(xe.fullKey,W,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,y.q)().onAndCancel(b,xe.domEventName,Ne))}static parseEventName(b){const k=b.toLowerCase().split("."),W=k.shift();if(0===k.length||"keydown"!==W&&"keyup"!==W)return null;const xe=O._normalizeKey(k.pop());let Ne="";if(tn.forEach(dt=>{const ce=k.indexOf(dt);ce>-1&&(k.splice(ce,1),Ne+=dt+".")}),Ne+=xe,0!=k.length||0===xe.length)return null;const Mt={};return Mt.domEventName=W,Mt.fullKey=Ne,Mt}static getEventFullKey(b){let k="",W=function(O){let A=O.key;if(null==A){if(A=O.keyIdentifier,null==A)return"Unidentified";A.startsWith("U+")&&(A=String.fromCharCode(parseInt(A.substring(2),16)),3===O.location&&Vt.hasOwnProperty(A)&&(A=Vt[A]))}return Pt[A]||A}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b);return W=W.toLowerCase()," "===W?W="space":"."===W&&(W="dot"),tn.forEach(xe=>{xe!=W&&gt[xe](b)&&(k+=xe+".")}),k+=W,k}static eventCallback(b,k,W){return xe=>{O.getEventFullKey(xe)===b&&W.runGuarded(()=>k(xe))}}static _normalizeKey(b){return"esc"===b?"escape":b}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(y.K0))},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})();const _n=(0,S.eFA)(S._c5,"browser",[{provide:S.Lbi,useValue:y.bD},{provide:S.g9A,useValue:function(){J.makeCurrent(),_e.init()},multi:!0},{provide:y.K0,useFactory:function(){return(0,S.RDi)(document),document},deps:[]}]),Qt=[{provide:S.zSh,useValue:"root"},{provide:S.qLn,useFactory:function(){return new S.qLn},deps:[]},{provide:pe,useClass:xt,multi:!0,deps:[y.K0,S.R0b,S.Lbi]},{provide:pe,useClass:nt,multi:!0,deps:[y.K0]},{provide:$,useClass:$,deps:[ze,Le,S.AFp]},{provide:S.FYo,useExisting:$},{provide:Z,useExisting:Le},{provide:Le,useClass:Le,deps:[y.K0]},{provide:S.dDg,useClass:S.dDg,deps:[S.R0b]},{provide:ze,useClass:ze,deps:[pe,S.R0b]},{provide:y.JF,useClass:ye,deps:[]}];let nn=(()=>{class O{constructor(b){if(b)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(b){return{ngModule:O,providers:[{provide:S.AFp,useValue:b.appId},{provide:te,useExisting:S.AFp},N]}}}return O.\u0275fac=function(b){return new(b||O)(S.LFG(O,12))},O.\u0275mod=S.oAB({type:O}),O.\u0275inj=S.cJS({providers:Qt,imports:[y.ez,S.hGG]}),O})();
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
var Ur=M(520),lr=M(8880),Sr=M(9506);let Ar=(()=>{class O{constructor(){this.title="portfolio"}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275cmp=S.Xpm({type:O,selectors:[["app-root"]],decls:1,vars:0,template:function(b,k){1&b&&S._UZ(0,"router-outlet")},directives:[lr.lC],styles:[""]}),O})();var cr=M(8306),Rr=M(576);const ht=[{path:"",loadChildren:()=>M.e(957).then(M.bind(M,3957)).then(O=>O.LandingModule)}],He=[{provide:Ur.TP,useClass:(()=>{class O{constructor(){}intercept(b,k){return b.url.startsWith("/")?function(O,A){const b=(0,Rr.m)(O)?O:()=>O,k=W=>W.error(b());return new cr.y(k)}(()=>new Error('Url must not start with "/" to follow our convention')):(b.url.startsWith("http")||(b=b.clone({url:"https://anderson.free.mockoapp.net/"+b.url})),k.handle(b))}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=S.Yz7({token:O,factory:O.\u0275fac}),O})(),multi:!0}];let Yt=(()=>{class O{}return O.\u0275fac=function(b){return new(b||O)},O.\u0275mod=S.oAB({type:O,bootstrap:[Ar]}),O.\u0275inj=S.cJS({providers:He,imports:[[nn,lr.Bz.forRoot(ht,{useHash:!0}),Ur.JF,Sr.x]]}),O})();(0,S.G48)(),_n().bootstrapModule(Yt).catch(O=>console.error(O))},9506:(Be,ie,M)=>{M.d(ie,{x:()=>Me,w:()=>ee});var y=M(9808),S=M(7587);const ne=function(se,me,te){return{width:se,height:me,borderRadius:te}},J=function(se){return{rtl:se}};let ee=(()=>{class se{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return se.\u0275fac=function(te){return new(te||se)},se.\u0275cmp=S.Xpm({type:se,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(te,G){2&te&&S.Tol(G.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(te,G){1&te&&S._UZ(0,"div",0),2&te&&S.Q6J("ngStyle",S.kEZ(2,ne,G.width,G.shimmerHeight,G.shimmerBorderRadius))("ngClass",S.VKq(6,J,"rtl"===G.direction))},directives:[y.PC,y.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),se})(),Me=(()=>{class se{}return se.\u0275fac=function(te){return new(te||se)},se.\u0275mod=S.oAB({type:se}),se.\u0275inj=S.cJS({imports:[[y.ez]]}),se})()},1135:(Be,ie,M)=>{M.d(ie,{X:()=>S});var y=M(7579);class S extends y.x{constructor(J){super(),this._value=J}get value(){return this.getValue()}_subscribe(J){const ee=super._subscribe(J);return!ee.closed&&J.next(this._value),ee}getValue(){const{hasError:J,thrownError:ee,_value:Me}=this;if(J)throw ee;return this._throwIfClosed(),Me}next(J){super.next(this._value=J)}}},8306:(Be,ie,M)=>{M.d(ie,{y:()=>G});var y=M(2961),S=M(727),ne=M(8822),J=M(4671);var se=M(2416),me=M(576),te=M(2806);let G=(()=>{class pe{constructor(Ie){Ie&&(this._subscribe=Ie)}lift(Ie){const Z=new pe;return Z.source=this,Z.operator=Ie,Z}subscribe(Ie,Z,Le){const Te=function(pe){return pe&&pe instanceof y.Lv||function(pe){return pe&&(0,me.m)(pe.next)&&(0,me.m)(pe.error)&&(0,me.m)(pe.complete)}(pe)&&(0,S.Nn)(pe)}(Ie)?Ie:new y.Hp(Ie,Z,Le);return(0,te.x)(()=>{const{operator:Ce,source:De}=this;Te.add(Ce?Ce.call(Te,De):De?this._subscribe(Te):this._trySubscribe(Te))}),Te}_trySubscribe(Ie){try{return this._subscribe(Ie)}catch(Z){Ie.error(Z)}}forEach(Ie,Z){return new(Z=N(Z))((Le,Te)=>{let Ce;Ce=this.subscribe(De=>{try{Ie(De)}catch(Re){Te(Re),null==Ce||Ce.unsubscribe()}},Te,Le)})}_subscribe(Ie){var Z;return null===(Z=this.source)||void 0===Z?void 0:Z.subscribe(Ie)}[ne.L](){return this}pipe(...Ie){return function(pe){return 0===pe.length?J.y:1===pe.length?pe[0]:function(Ie){return pe.reduce((Z,Le)=>Le(Z),Ie)}}(Ie)(this)}toPromise(Ie){return new(Ie=N(Ie))((Z,Le)=>{let Te;this.subscribe(Ce=>Te=Ce,Ce=>Le(Ce),()=>Z(Te))})}}return pe.create=ze=>new pe(ze),pe})();function N(pe){var ze;return null!==(ze=null!=pe?pe:se.v.Promise)&&void 0!==ze?ze:Promise}},7579:(Be,ie,M)=>{M.d(ie,{x:()=>se});var y=M(8306),S=M(727);const J=(0,M(3888).d)(te=>function(){te(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ee=M(8737),Me=M(2806);let se=(()=>{class te extends y.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(N){const _e=new me(this,this);return _e.operator=N,_e}_throwIfClosed(){if(this.closed)throw new J}next(N){(0,Me.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const _e=this.observers.slice();for(const ye of _e)ye.next(N)}})}error(N){(0,Me.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=N;const{observers:_e}=this;for(;_e.length;)_e.shift().error(N)}})}complete(){(0,Me.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:N}=this;for(;N.length;)N.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var N;return(null===(N=this.observers)||void 0===N?void 0:N.length)>0}_trySubscribe(N){return this._throwIfClosed(),super._trySubscribe(N)}_subscribe(N){return this._throwIfClosed(),this._checkFinalizedStatuses(N),this._innerSubscribe(N)}_innerSubscribe(N){const{hasError:_e,isStopped:ye,observers:pe}=this;return _e||ye?S.Lc:(pe.push(N),new S.w0(()=>(0,ee.P)(pe,N)))}_checkFinalizedStatuses(N){const{hasError:_e,thrownError:ye,isStopped:pe}=this;_e?N.error(ye):pe&&N.complete()}asObservable(){const N=new y.y;return N.source=this,N}}return te.create=(G,N)=>new me(G,N),te})();class me extends se{constructor(G,N){super(),this.destination=G,this.source=N}next(G){var N,_e;null===(_e=null===(N=this.destination)||void 0===N?void 0:N.next)||void 0===_e||_e.call(N,G)}error(G){var N,_e;null===(_e=null===(N=this.destination)||void 0===N?void 0:N.error)||void 0===_e||_e.call(N,G)}complete(){var G,N;null===(N=null===(G=this.destination)||void 0===G?void 0:G.complete)||void 0===N||N.call(G)}_subscribe(G){var N,_e;return null!==(_e=null===(N=this.source)||void 0===N?void 0:N.subscribe(G))&&void 0!==_e?_e:S.Lc}}},2961:(Be,ie,M)=>{M.d(ie,{Hp:()=>ye,Lv:()=>_e});var y=M(576),S=M(727),ne=M(2416),J=M(7849);function ee(){}const Me=te("C",void 0,void 0);function te(Le,Te,Ce){return{kind:Le,value:Te,error:Ce}}var G=M(3410),N=M(2806);class _e extends S.w0{constructor(Te){super(),this.isStopped=!1,Te?(this.destination=Te,(0,S.Nn)(Te)&&Te.add(this)):this.destination=Z}static create(Te,Ce,De){return new ye(Te,Ce,De)}next(Te){this.isStopped?Ie(te("N",Te,void 0),this):this._next(Te)}error(Te){this.isStopped?Ie(te("E",void 0,Te),this):(this.isStopped=!0,this._error(Te))}complete(){this.isStopped?Ie(Me,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Te){this.destination.next(Te)}_error(Te){try{this.destination.error(Te)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class ye extends _e{constructor(Te,Ce,De){let Re;if(super(),(0,y.m)(Te))Re=Te;else if(Te){let ae;({next:Re,error:Ce,complete:De}=Te),this&&ne.v.useDeprecatedNextContext?(ae=Object.create(Te),ae.unsubscribe=()=>this.unsubscribe()):ae=Te,Re=null==Re?void 0:Re.bind(ae),Ce=null==Ce?void 0:Ce.bind(ae),De=null==De?void 0:De.bind(ae)}this.destination={next:Re?pe(Re):ee,error:pe(null!=Ce?Ce:ze),complete:De?pe(De):ee}}}function pe(Le,Te){return(...Ce)=>{try{Le(...Ce)}catch(De){ne.v.useDeprecatedSynchronousErrorHandling?(0,N.O)(De):(0,J.h)(De)}}}function ze(Le){throw Le}function Ie(Le,Te){const{onStoppedNotification:Ce}=ne.v;Ce&&G.z.setTimeout(()=>Ce(Le,Te))}const Z={closed:!0,next:ee,error:ze,complete:ee}},727:(Be,ie,M)=>{M.d(ie,{Lc:()=>Me,w0:()=>ee,Nn:()=>se});var y=M(576);const ne=(0,M(3888).d)(te=>function(N){te(this),this.message=N?`${N.length} errors occurred during unsubscription:\n${N.map((_e,ye)=>`${ye+1}) ${_e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=N});var J=M(8737);class ee{constructor(G){this.initialTeardown=G,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let G;if(!this.closed){this.closed=!0;const{_parentage:N}=this;if(N)if(this._parentage=null,Array.isArray(N))for(const pe of N)pe.remove(this);else N.remove(this);const{initialTeardown:_e}=this;if((0,y.m)(_e))try{_e()}catch(pe){G=pe instanceof ne?pe.errors:[pe]}const{_teardowns:ye}=this;if(ye){this._teardowns=null;for(const pe of ye)try{me(pe)}catch(ze){G=null!=G?G:[],ze instanceof ne?G=[...G,...ze.errors]:G.push(ze)}}if(G)throw new ne(G)}}add(G){var N;if(G&&G!==this)if(this.closed)me(G);else{if(G instanceof ee){if(G.closed||G._hasParent(this))return;G._addParent(this)}(this._teardowns=null!==(N=this._teardowns)&&void 0!==N?N:[]).push(G)}}_hasParent(G){const{_parentage:N}=this;return N===G||Array.isArray(N)&&N.includes(G)}_addParent(G){const{_parentage:N}=this;this._parentage=Array.isArray(N)?(N.push(G),N):N?[N,G]:G}_removeParent(G){const{_parentage:N}=this;N===G?this._parentage=null:Array.isArray(N)&&(0,J.P)(N,G)}remove(G){const{_teardowns:N}=this;N&&(0,J.P)(N,G),G instanceof ee&&G._removeParent(this)}}ee.EMPTY=(()=>{const te=new ee;return te.closed=!0,te})();const Me=ee.EMPTY;function se(te){return te instanceof ee||te&&"closed"in te&&(0,y.m)(te.remove)&&(0,y.m)(te.add)&&(0,y.m)(te.unsubscribe)}function me(te){(0,y.m)(te)?te():te.unsubscribe()}},2416:(Be,ie,M)=>{M.d(ie,{v:()=>y});const y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Be,ie,M)=>{M.d(ie,{E:()=>S});const S=new(M(8306).y)(ee=>ee.complete())},2076:(Be,ie,M)=>{M.d(ie,{D:()=>qe});var y=M(8421),S=M(9672),ne=M(4482),J=M(5403);function ee(we,he=0){return(0,ne.e)((U,j)=>{U.subscribe(new J.Q(j,H=>(0,S.f)(j,we,()=>j.next(H),he),()=>(0,S.f)(j,we,()=>j.complete(),he),H=>(0,S.f)(j,we,()=>j.error(H),he)))})}function Me(we,he=0){return(0,ne.e)((U,j)=>{j.add(we.schedule(()=>U.subscribe(j),he))})}var te=M(8306),N=M(2202),_e=M(576);function pe(we,he){if(!we)throw new Error("Iterable cannot be null");return new te.y(U=>{(0,S.f)(U,he,()=>{const j=we[Symbol.asyncIterator]();(0,S.f)(U,he,()=>{j.next().then(H=>{H.done?U.complete():U.next(H.value)})},0,!0)})})}var ze=M(3670),Ie=M(8239),Z=M(1144),Le=M(6495),Te=M(2206),Ce=M(4532),De=M(3260);function qe(we,he){return he?function(we,he){if(null!=we){if((0,ze.c)(we))return function(we,he){return(0,y.Xf)(we).pipe(Me(he),ee(he))}(we,he);if((0,Z.z)(we))return function(we,he){return new te.y(U=>{let j=0;return he.schedule(function(){j===we.length?U.complete():(U.next(we[j++]),U.closed||this.schedule())})})}(we,he);if((0,Ie.t)(we))return function(we,he){return(0,y.Xf)(we).pipe(Me(he),ee(he))}(we,he);if((0,Te.D)(we))return pe(we,he);if((0,Le.T)(we))return function(we,he){return new te.y(U=>{let j;return(0,S.f)(U,he,()=>{j=we[N.h](),(0,S.f)(U,he,()=>{let H,Y;try{({value:H,done:Y}=j.next())}catch($){return void U.error($)}Y?U.complete():U.next(H)},0,!0)}),()=>(0,_e.m)(null==j?void 0:j.return)&&j.return()})}(we,he);if((0,De.L)(we))return function(we,he){return pe((0,De.Q)(we),he)}(we,he)}throw(0,Ce.z)(we)}(we,he):(0,y.Xf)(we)}},8421:(Be,ie,M)=>{M.d(ie,{Xf:()=>ye});var y=M(5987),S=M(1144),ne=M(8239),J=M(8306),ee=M(3670),Me=M(2206),se=M(4532),me=M(6495),te=M(3260),G=M(576),N=M(7849),_e=M(8822);function ye(De){if(De instanceof J.y)return De;if(null!=De){if((0,ee.c)(De))return function(De){return new J.y(Re=>{const ae=De[_e.L]();if((0,G.m)(ae.subscribe))return ae.subscribe(Re);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(De);if((0,S.z)(De))return function(De){return new J.y(Re=>{for(let ae=0;ae<De.length&&!Re.closed;ae++)Re.next(De[ae]);Re.complete()})}(De);if((0,ne.t)(De))return function(De){return new J.y(Re=>{De.then(ae=>{Re.closed||(Re.next(ae),Re.complete())},ae=>Re.error(ae)).then(null,N.h)})}(De);if((0,Me.D)(De))return Le(De);if((0,me.T)(De))return function(De){return new J.y(Re=>{for(const ae of De)if(Re.next(ae),Re.closed)return;Re.complete()})}(De);if((0,te.L)(De))return function(De){return Le((0,te.Q)(De))}(De)}throw(0,se.z)(De)}function Le(De){return new J.y(Re=>{(function(De,Re){var ae,qe,we,he;return(0,y.mG)(this,void 0,void 0,function*(){try{for(ae=(0,y.KL)(De);!(qe=yield ae.next()).done;)if(Re.next(qe.value),Re.closed)return}catch(U){we={error:U}}finally{try{qe&&!qe.done&&(he=ae.return)&&(yield he.call(ae))}finally{if(we)throw we.error}}Re.complete()})})(De,Re).catch(ae=>Re.error(ae))})}},9646:(Be,ie,M)=>{M.d(ie,{of:()=>ne});var y=M(3269),S=M(2076);function ne(...J){const ee=(0,y.yG)(J);return(0,S.D)(J,ee)}},5403:(Be,ie,M)=>{M.d(ie,{Q:()=>S});var y=M(2961);class S extends y.Lv{constructor(J,ee,Me,se,me){super(J),this.onFinalize=me,this._next=ee?function(te){try{ee(te)}catch(G){J.error(G)}}:super._next,this._error=se?function(te){try{se(te)}catch(G){J.error(G)}finally{this.unsubscribe()}}:super._error,this._complete=Me?function(){try{Me()}catch(te){J.error(te)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var J;const{closed:ee}=this;super.unsubscribe(),!ee&&(null===(J=this.onFinalize)||void 0===J||J.call(this))}}},4351:(Be,ie,M)=>{M.d(ie,{b:()=>ne});var y=M(5577),S=M(576);function ne(J,ee){return(0,S.m)(ee)?(0,y.z)(J,ee,1):(0,y.z)(J,1)}},6590:(Be,ie,M)=>{M.d(ie,{d:()=>ne});var y=M(4482),S=M(5403);function ne(J){return(0,y.e)((ee,Me)=>{let se=!1;ee.subscribe(new S.Q(Me,me=>{se=!0,Me.next(me)},()=>{se||Me.next(J),Me.complete()}))})}},9300:(Be,ie,M)=>{M.d(ie,{h:()=>ne});var y=M(4482),S=M(5403);function ne(J,ee){return(0,y.e)((Me,se)=>{let me=0;Me.subscribe(new S.Q(se,te=>J.call(ee,te,me++)&&se.next(te)))})}},590:(Be,ie,M)=>{M.d(ie,{P:()=>se});var y=M(6805),S=M(9300),ne=M(5698),J=M(6590),ee=M(8068),Me=M(4671);function se(me,te){const G=arguments.length>=2;return N=>N.pipe(me?(0,S.h)((_e,ye)=>me(_e,ye,N)):Me.y,(0,ne.q)(1),G?(0,J.d)(te):(0,ee.T)(()=>new y.K))}},4004:(Be,ie,M)=>{M.d(ie,{U:()=>ne});var y=M(4482),S=M(5403);function ne(J,ee){return(0,y.e)((Me,se)=>{let me=0;Me.subscribe(new S.Q(se,te=>{se.next(J.call(ee,te,me++))}))})}},8189:(Be,ie,M)=>{M.d(ie,{J:()=>ne});var y=M(5577),S=M(4671);function ne(J=1/0){return(0,y.z)(S.y,J)}},5577:(Be,ie,M)=>{M.d(ie,{z:()=>me});var y=M(4004),S=M(8421),ne=M(4482),ee=(M(9672),M(5403)),se=M(576);function me(te,G,N=1/0){return(0,se.m)(G)?me((_e,ye)=>(0,y.U)((pe,ze)=>G(_e,pe,ye,ze))((0,S.Xf)(te(_e,ye))),N):("number"==typeof G&&(N=G),(0,ne.e)((_e,ye)=>function(te,G,N,_e,ye,pe,ze,Ie){const Z=[];let Le=0,Te=0,Ce=!1;const De=()=>{Ce&&!Z.length&&!Le&&G.complete()},Re=qe=>Le<_e?ae(qe):Z.push(qe),ae=qe=>{Le++;let we=!1;(0,S.Xf)(N(qe,Te++)).subscribe(new ee.Q(G,he=>{G.next(he)},()=>{we=!0},void 0,()=>{if(we)try{for(Le--;Z.length&&Le<_e;){const he=Z.shift();ae(he)}De()}catch(he){G.error(he)}}))};return te.subscribe(new ee.Q(G,Re,()=>{Ce=!0,De()})),()=>{}}(_e,ye,te,N)))}},3099:(Be,ie,M)=>{M.d(ie,{B:()=>Me});var y=M(2076),S=M(5698),ne=M(7579),J=M(2961),ee=M(4482);function Me(me={}){const{connector:te=(()=>new ne.x),resetOnError:G=!0,resetOnComplete:N=!0,resetOnRefCountZero:_e=!0}=me;return ye=>{let pe=null,ze=null,Ie=null,Z=0,Le=!1,Te=!1;const Ce=()=>{null==ze||ze.unsubscribe(),ze=null},De=()=>{Ce(),pe=Ie=null,Le=Te=!1},Re=()=>{const ae=pe;De(),null==ae||ae.unsubscribe()};return(0,ee.e)((ae,qe)=>{Z++,!Te&&!Le&&Ce();const we=Ie=null!=Ie?Ie:te();qe.add(()=>{Z--,0===Z&&!Te&&!Le&&(ze=se(Re,_e))}),we.subscribe(qe),pe||(pe=new J.Hp({next:he=>we.next(he),error:he=>{Te=!0,Ce(),ze=se(De,G,he),we.error(he)},complete:()=>{Le=!0,Ce(),ze=se(De,N),we.complete()}}),(0,y.D)(ae).subscribe(pe))})(ye)}}function se(me,te,...G){return!0===te?(me(),null):!1===te?null:te(...G).pipe((0,S.q)(1)).subscribe(()=>me())}},5698:(Be,ie,M)=>{M.d(ie,{q:()=>J});var y=M(515),S=M(4482),ne=M(5403);function J(ee){return ee<=0?()=>y.E:(0,S.e)((Me,se)=>{let me=0;Me.subscribe(new ne.Q(se,te=>{++me<=ee&&(se.next(te),ee<=me&&se.complete())}))})}},8068:(Be,ie,M)=>{M.d(ie,{T:()=>J});var y=M(6805),S=M(4482),ne=M(5403);function J(Me=ee){return(0,S.e)((se,me)=>{let te=!1;se.subscribe(new ne.Q(me,G=>{te=!0,me.next(G)},()=>te?me.complete():me.error(Me())))})}function ee(){return new y.K}},3410:(Be,ie,M)=>{M.d(ie,{z:()=>y});const y={setTimeout(...S){const{delegate:ne}=y;return((null==ne?void 0:ne.setTimeout)||setTimeout)(...S)},clearTimeout(S){const{delegate:ne}=y;return((null==ne?void 0:ne.clearTimeout)||clearTimeout)(S)},delegate:void 0}},2202:(Be,ie,M)=>{M.d(ie,{h:()=>S});const S="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},8822:(Be,ie,M)=>{M.d(ie,{L:()=>y});const y="function"==typeof Symbol&&Symbol.observable||"@@observable"},6805:(Be,ie,M)=>{M.d(ie,{K:()=>S});const S=(0,M(3888).d)(ne=>function(){ne(this),this.name="EmptyError",this.message="no elements in sequence"})},3269:(Be,ie,M)=>{M.d(ie,{jO:()=>J,yG:()=>ee,_6:()=>Me});var y=M(576),S=M(3532);function ne(se){return se[se.length-1]}function J(se){return(0,y.m)(ne(se))?se.pop():void 0}function ee(se){return(0,S.K)(ne(se))?se.pop():void 0}function Me(se,me){return"number"==typeof ne(se)?se.pop():me}},8737:(Be,ie,M)=>{function y(S,ne){if(S){const J=S.indexOf(ne);0<=J&&S.splice(J,1)}}M.d(ie,{P:()=>y})},3888:(Be,ie,M)=>{function y(S){const J=S(ee=>{Error.call(ee),ee.stack=(new Error).stack});return J.prototype=Object.create(Error.prototype),J.prototype.constructor=J,J}M.d(ie,{d:()=>y})},2806:(Be,ie,M)=>{M.d(ie,{x:()=>ne,O:()=>J});var y=M(2416);let S=null;function ne(ee){if(y.v.useDeprecatedSynchronousErrorHandling){const Me=!S;if(Me&&(S={errorThrown:!1,error:null}),ee(),Me){const{errorThrown:se,error:me}=S;if(S=null,se)throw me}}else ee()}function J(ee){y.v.useDeprecatedSynchronousErrorHandling&&S&&(S.errorThrown=!0,S.error=ee)}},9672:(Be,ie,M)=>{function y(S,ne,J,ee=0,Me=!1){const se=ne.schedule(function(){J(),Me?S.add(this.schedule(null,ee)):this.unsubscribe()},ee);if(S.add(se),!Me)return se}M.d(ie,{f:()=>y})},4671:(Be,ie,M)=>{function y(S){return S}M.d(ie,{y:()=>y})},1144:(Be,ie,M)=>{M.d(ie,{z:()=>y});const y=S=>S&&"number"==typeof S.length&&"function"!=typeof S},2206:(Be,ie,M)=>{M.d(ie,{D:()=>S});var y=M(576);function S(ne){return Symbol.asyncIterator&&(0,y.m)(null==ne?void 0:ne[Symbol.asyncIterator])}},576:(Be,ie,M)=>{function y(S){return"function"==typeof S}M.d(ie,{m:()=>y})},3670:(Be,ie,M)=>{M.d(ie,{c:()=>ne});var y=M(8822),S=M(576);function ne(J){return(0,S.m)(J[y.L])}},6495:(Be,ie,M)=>{M.d(ie,{T:()=>ne});var y=M(2202),S=M(576);function ne(J){return(0,S.m)(null==J?void 0:J[y.h])}},8239:(Be,ie,M)=>{M.d(ie,{t:()=>S});var y=M(576);function S(ne){return(0,y.m)(null==ne?void 0:ne.then)}},3260:(Be,ie,M)=>{M.d(ie,{Q:()=>ne,L:()=>J});var y=M(5987),S=M(576);function ne(ee){return(0,y.FC)(this,arguments,function*(){const se=ee.getReader();try{for(;;){const{value:me,done:te}=yield(0,y.qq)(se.read());if(te)return yield(0,y.qq)(void 0);yield yield(0,y.qq)(me)}}finally{se.releaseLock()}})}function J(ee){return(0,S.m)(null==ee?void 0:ee.getReader)}},3532:(Be,ie,M)=>{M.d(ie,{K:()=>S});var y=M(576);function S(ne){return ne&&(0,y.m)(ne.schedule)}},4482:(Be,ie,M)=>{M.d(ie,{A:()=>S,e:()=>ne});var y=M(576);function S(J){return(0,y.m)(null==J?void 0:J.lift)}function ne(J){return ee=>{if(S(ee))return ee.lift(function(Me){try{return J(Me,this)}catch(se){this.error(se)}});throw new TypeError("Unable to lift unknown Observable type")}}},7849:(Be,ie,M)=>{M.d(ie,{h:()=>ne});var y=M(2416),S=M(3410);function ne(J){S.z.setTimeout(()=>{const{onUnhandledError:ee}=y.v;if(!ee)throw J;ee(J)})}},4532:(Be,ie,M)=>{function y(S){return new TypeError(`You provided ${null!==S&&"object"==typeof S?"an invalid object":`'${S}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}M.d(ie,{z:()=>y})},5987:(Be,ie,M)=>{function me(U,j,H,Y){return new(H||(H=Promise))(function(V,Oe){function Je(xt){try{Ve(Y.next(xt))}catch(tn){Oe(tn)}}function St(xt){try{Ve(Y.throw(xt))}catch(tn){Oe(tn)}}function Ve(xt){xt.done?V(xt.value):function(V){return V instanceof H?V:new H(function(Oe){Oe(V)})}(xt.value).then(Je,St)}Ve((Y=Y.apply(U,j||[])).next())})}function Z(U){return this instanceof Z?(this.v=U,this):new Z(U)}function Le(U,j,H){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var $,Y=H.apply(U,j||[]),V=[];return $={},Oe("next"),Oe("throw"),Oe("return"),$[Symbol.asyncIterator]=function(){return this},$;function Oe(Dt){Y[Dt]&&($[Dt]=function(Pt){return new Promise(function(Vt,gt){V.push([Dt,Pt,Vt,gt])>1||Je(Dt,Pt)})})}function Je(Dt,Pt){try{!function(Dt){Dt.value instanceof Z?Promise.resolve(Dt.value.v).then(Ve,xt):tn(V[0][2],Dt)}(Y[Dt](Pt))}catch(Vt){tn(V[0][3],Vt)}}function Ve(Dt){Je("next",Dt)}function xt(Dt){Je("throw",Dt)}function tn(Dt,Pt){Dt(Pt),V.shift(),V.length&&Je(V[0][0],V[0][1])}}function Ce(U){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H,j=U[Symbol.asyncIterator];return j?j.call(U):(U=function(U){var j="function"==typeof Symbol&&Symbol.iterator,H=j&&U[j],Y=0;if(H)return H.call(U);if(U&&"number"==typeof U.length)return{next:function(){return U&&Y>=U.length&&(U=void 0),{value:U&&U[Y++],done:!U}}};throw new TypeError(j?"Object is not iterable.":"Symbol.iterator is not defined.")}(U),H={},Y("next"),Y("throw"),Y("return"),H[Symbol.asyncIterator]=function(){return this},H);function Y(V){H[V]=U[V]&&function(Oe){return new Promise(function(Je,St){!function(V,Oe,Je,St){Promise.resolve(St).then(function(Ve){V({value:Ve,done:Je})},Oe)}(Je,St,(Oe=U[V](Oe)).done,Oe.value)})}}}M.d(ie,{mG:()=>me,qq:()=>Z,FC:()=>Le,KL:()=>Ce})},9808:(Be,ie,M)=>{M.d(ie,{mr:()=>Te,Ov:()=>Hr,ez:()=>Qn,K0:()=>se,uU:()=>Ei,Do:()=>De,V_:()=>G,Ye:()=>Re,S$:()=>Z,mk:()=>xn,sg:()=>vn,O5:()=>Wn,PC:()=>fn,RF:()=>Dn,n9:()=>Mn,b0:()=>Ce,lw:()=>me,EM:()=>Mi,JF:()=>Or,w_:()=>Me,bD:()=>ao,q:()=>ne,Mx:()=>It,HT:()=>ee});var y=M(7587);
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
       */let S=null;function ne(){return S}function ee(p){S||(S=p)}class Me{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const se=new y.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let me=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return(0,y.LFG)(N)},providedIn:"platform"}),p})();const G=new y.OlP("Location Initialized");let N=(()=>{class p extends me{constructor(h){super(),this._doc=h,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ne().getBaseHref(this._doc)}onPopState(h){const C=ne().getGlobalEventTarget(this._doc,"window");return C.addEventListener("popstate",h,!1),()=>C.removeEventListener("popstate",h)}onHashChange(h){const C=ne().getGlobalEventTarget(this._doc,"window");return C.addEventListener("hashchange",h,!1),()=>C.removeEventListener("hashchange",h)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(h){this.location.pathname=h}pushState(h,C,x){_e()?this._history.pushState(h,C,x):this.location.hash=x}replaceState(h,C,x){_e()?this._history.replaceState(h,C,x):this.location.hash=x}forward(){this._history.forward()}back(){this._history.back()}historyGo(h=0){this._history.go(h)}getState(){return this._history.state}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(se))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new N((0,y.LFG)(se))},providedIn:"platform"}),p})();function _e(){return!!window.history.pushState}
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
function pe(p,E){if(0==p.length)return E;if(0==E.length)return p;let h=0;return p.endsWith("/")&&h++,E.startsWith("/")&&h++,2==h?p+E.substring(1):1==h?p+E:p+"/"+E}function ze(p){const E=p.match(/#|\?|$/),h=E&&E.index||p.length;return p.slice(0,h-("/"===p[h-1]?1:0))+p.slice(h)}function Ie(p){return p&&"?"!==p[0]?"?"+p:p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return function(p){const E=(0,y.LFG)(se).location;return new Ce((0,y.LFG)(me),E&&E.origin||"")}()},providedIn:"root"}),p})();const Te=new y.OlP("appBaseHref");let Ce=(()=>{class p extends Z{constructor(h,C){if(super(),this._platformLocation=h,this._removeListenerFns=[],null==C&&(C=this._platformLocation.getBaseHrefFromDOM()),null==C)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=C}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}prepareExternalUrl(h){return pe(this._baseHref,h)}path(h=!1){const C=this._platformLocation.pathname+Ie(this._platformLocation.search),x=this._platformLocation.hash;return x&&h?`${C}${x}`:C}pushState(h,C,x,B){const oe=this.prepareExternalUrl(x+Ie(B));this._platformLocation.pushState(h,C,oe)}replaceState(h,C,x,B){const oe=this.prepareExternalUrl(x+Ie(B));this._platformLocation.replaceState(h,C,oe)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(me),y.LFG(Te,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),De=(()=>{class p extends Z{constructor(h,C){super(),this._platformLocation=h,this._baseHref="",this._removeListenerFns=[],null!=C&&(this._baseHref=C)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}path(h=!1){let C=this._platformLocation.hash;return null==C&&(C="#"),C.length>0?C.substring(1):C}prepareExternalUrl(h){const C=pe(this._baseHref,h);return C.length>0?"#"+C:C}pushState(h,C,x,B){let oe=this.prepareExternalUrl(x+Ie(B));0==oe.length&&(oe=this._platformLocation.pathname),this._platformLocation.pushState(h,C,oe)}replaceState(h,C,x,B){let oe=this.prepareExternalUrl(x+Ie(B));0==oe.length&&(oe=this._platformLocation.pathname),this._platformLocation.replaceState(h,C,oe)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(me),y.LFG(Te,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),Re=(()=>{class p{constructor(h,C){this._subject=new y.vpe,this._urlChangeListeners=[],this._platformStrategy=h;const x=this._platformStrategy.getBaseHref();this._platformLocation=C,this._baseHref=ze(we(x)),this._platformStrategy.onPopState(B=>{this._subject.emit({url:this.path(!0),pop:!0,state:B.state,type:B.type})})}path(h=!1){return this.normalize(this._platformStrategy.path(h))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(h,C=""){return this.path()==this.normalize(h+Ie(C))}normalize(h){return p.stripTrailingSlash(function(p,E){return p&&E.startsWith(p)?E.substring(p.length):E}(this._baseHref,we(h)))}prepareExternalUrl(h){return h&&"/"!==h[0]&&(h="/"+h),this._platformStrategy.prepareExternalUrl(h)}go(h,C="",x=null){this._platformStrategy.pushState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(C)),x)}replaceState(h,C="",x=null){this._platformStrategy.replaceState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(C)),x)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformStrategy).historyGo)||void 0===x||x.call(C,h)}onUrlChange(h){this._urlChangeListeners.push(h),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(C=>{this._notifyUrlChangeListeners(C.url,C.state)}))}_notifyUrlChangeListeners(h="",C){this._urlChangeListeners.forEach(x=>x(h,C))}subscribe(h,C,x){return this._subject.subscribe({next:h,error:C,complete:x})}}return p.normalizeQueryParams=Ie,p.joinWithSlash=pe,p.stripTrailingSlash=ze,p.\u0275fac=function(h){return new(h||p)(y.LFG(Z),y.LFG(me))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new Re((0,y.LFG)(Z),(0,y.LFG)(me))},providedIn:"root"}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function we(p){return p.replace(/\/index.html$/,"")}
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
var j=(()=>((j=j||{})[j.Zero=0]="Zero",j[j.One=1]="One",j[j.Two=2]="Two",j[j.Few=3]="Few",j[j.Many=4]="Many",j[j.Other=5]="Other",j))(),H=(()=>((H=H||{})[H.Format=0]="Format",H[H.Standalone=1]="Standalone",H))(),Y=(()=>((Y=Y||{})[Y.Narrow=0]="Narrow",Y[Y.Abbreviated=1]="Abbreviated",Y[Y.Wide=2]="Wide",Y[Y.Short=3]="Short",Y))(),$=(()=>(($=$||{})[$.Short=0]="Short",$[$.Medium=1]="Medium",$[$.Long=2]="Long",$[$.Full=3]="Full",$))(),V=(()=>((V=V||{})[V.Decimal=0]="Decimal",V[V.Group=1]="Group",V[V.List=2]="List",V[V.PercentSign=3]="PercentSign",V[V.PlusSign=4]="PlusSign",V[V.MinusSign=5]="MinusSign",V[V.Exponential=6]="Exponential",V[V.SuperscriptingExponent=7]="SuperscriptingExponent",V[V.PerMille=8]="PerMille",V[V.Infinity=9]="Infinity",V[V.NaN=10]="NaN",V[V.TimeSeparator=11]="TimeSeparator",V[V.CurrencyDecimal=12]="CurrencyDecimal",V[V.CurrencyGroup=13]="CurrencyGroup",V))();function Vt(p,E){return Et((0,y.cg1)(p)[y.wAp.DateFormat],E)}function gt(p,E){return Et((0,y.cg1)(p)[y.wAp.TimeFormat],E)}function nt(p,E){return Et((0,y.cg1)(p)[y.wAp.DateTimeFormat],E)}function $t(p,E){const h=(0,y.cg1)(p),C=h[y.wAp.NumberSymbols][E];if(void 0===C){if(E===V.CurrencyDecimal)return h[y.wAp.NumberSymbols][V.Decimal];if(E===V.CurrencyGroup)return h[y.wAp.NumberSymbols][V.Group]}return C}const Qt=y.kL8;function nn(p){if(!p[y.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${p[y.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Et(p,E){for(let h=E;h>-1;h--)if(void 0!==p[h])return p[h];throw new Error("Locale data API: locale data undefined")}function on(p){const[E,h]=p.split(":");return{hours:+E,minutes:+h}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,re={},K=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var Ee=(()=>((Ee=Ee||{})[Ee.Short=0]="Short",Ee[Ee.ShortGMT=1]="ShortGMT",Ee[Ee.Long=2]="Long",Ee[Ee.Extended=3]="Extended",Ee))(),de=(()=>((de=de||{})[de.FullYear=0]="FullYear",de[de.Month=1]="Month",de[de.Date=2]="Date",de[de.Hours=3]="Hours",de[de.Minutes=4]="Minutes",de[de.Seconds=5]="Seconds",de[de.FractionalSeconds=6]="FractionalSeconds",de[de.Day=7]="Day",de))(),ge=(()=>((ge=ge||{})[ge.DayPeriods=0]="DayPeriods",ge[ge.Days=1]="Days",ge[ge.Months=2]="Months",ge[ge.Eras=3]="Eras",ge))();function Ue(p,E,h,C){let x=function(p){if(Ar(p))return p;if("number"==typeof p&&!isNaN(p))return new Date(p);if("string"==typeof p){if(p=p.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p)){const[x,B=1,oe=1]=p.split("-").map(Ae=>+Ae);return Ct(x,B-1,oe)}const h=parseFloat(p);if(!isNaN(p-h))return new Date(h);let C;if(C=p.match(P))return function(p){const E=new Date(0);let h=0,C=0;const x=p[8]?E.setUTCFullYear:E.setFullYear,B=p[8]?E.setUTCHours:E.setHours;p[9]&&(h=Number(p[9]+p[10]),C=Number(p[9]+p[11])),x.call(E,Number(p[1]),Number(p[2])-1,Number(p[3]));const oe=Number(p[4]||0)-h,Ae=Number(p[5]||0)-C,at=Number(p[6]||0),$e=Math.floor(1e3*parseFloat("0."+(p[7]||0)));return B.call(E,oe,Ae,at,$e),E}(C)}const E=new Date(p);if(!Ar(E))throw new Error(`Unable to convert "${p}" into a date`);return E}(p);E=Ot(h,E)||E;let Ae,oe=[];for(;E;){if(Ae=K.exec(E),!Ae){oe.push(E);break}{oe=oe.concat(Ae.slice(1));const ft=oe.pop();if(!ft)break;E=ft}}let at=x.getTimezoneOffset();C&&(at=Jt(C,at),x=function(p,E,h){const x=p.getTimezoneOffset();return function(p,E){return(p=new Date(p.getTime())).setMinutes(p.getMinutes()+E),p}(p,-1*(Jt(E,x)-x))}(x,C));let $e="";return oe.forEach(ft=>{const Xe=function(p){if(dn[p])return dn[p];let E;switch(p){case"G":case"GG":case"GGG":E=Pe(ge.Eras,Y.Abbreviated);break;case"GGGG":E=Pe(ge.Eras,Y.Wide);break;case"GGGGG":E=Pe(ge.Eras,Y.Narrow);break;case"y":E=Ge(de.FullYear,1,0,!1,!0);break;case"yy":E=Ge(de.FullYear,2,0,!0,!0);break;case"yyy":E=Ge(de.FullYear,3,0,!1,!0);break;case"yyyy":E=Ge(de.FullYear,4,0,!1,!0);break;case"Y":E=$n(1);break;case"YY":E=$n(2,!0);break;case"YYY":E=$n(3);break;case"YYYY":E=$n(4);break;case"M":case"L":E=Ge(de.Month,1,1);break;case"MM":case"LL":E=Ge(de.Month,2,1);break;case"MMM":E=Pe(ge.Months,Y.Abbreviated);break;case"MMMM":E=Pe(ge.Months,Y.Wide);break;case"MMMMM":E=Pe(ge.Months,Y.Narrow);break;case"LLL":E=Pe(ge.Months,Y.Abbreviated,H.Standalone);break;case"LLLL":E=Pe(ge.Months,Y.Wide,H.Standalone);break;case"LLLLL":E=Pe(ge.Months,Y.Narrow,H.Standalone);break;case"w":E=Vn(1);break;case"ww":E=Vn(2);break;case"W":E=Vn(1,!0);break;case"d":E=Ge(de.Date,1);break;case"dd":E=Ge(de.Date,2);break;case"c":case"cc":E=Ge(de.Day,1);break;case"ccc":E=Pe(ge.Days,Y.Abbreviated,H.Standalone);break;case"cccc":E=Pe(ge.Days,Y.Wide,H.Standalone);break;case"ccccc":E=Pe(ge.Days,Y.Narrow,H.Standalone);break;case"cccccc":E=Pe(ge.Days,Y.Short,H.Standalone);break;case"E":case"EE":case"EEE":E=Pe(ge.Days,Y.Abbreviated);break;case"EEEE":E=Pe(ge.Days,Y.Wide);break;case"EEEEE":E=Pe(ge.Days,Y.Narrow);break;case"EEEEEE":E=Pe(ge.Days,Y.Short);break;case"a":case"aa":case"aaa":E=Pe(ge.DayPeriods,Y.Abbreviated);break;case"aaaa":E=Pe(ge.DayPeriods,Y.Wide);break;case"aaaaa":E=Pe(ge.DayPeriods,Y.Narrow);break;case"b":case"bb":case"bbb":E=Pe(ge.DayPeriods,Y.Abbreviated,H.Standalone,!0);break;case"bbbb":E=Pe(ge.DayPeriods,Y.Wide,H.Standalone,!0);break;case"bbbbb":E=Pe(ge.DayPeriods,Y.Narrow,H.Standalone,!0);break;case"B":case"BB":case"BBB":E=Pe(ge.DayPeriods,Y.Abbreviated,H.Format,!0);break;case"BBBB":E=Pe(ge.DayPeriods,Y.Wide,H.Format,!0);break;case"BBBBB":E=Pe(ge.DayPeriods,Y.Narrow,H.Format,!0);break;case"h":E=Ge(de.Hours,1,-12);break;case"hh":E=Ge(de.Hours,2,-12);break;case"H":E=Ge(de.Hours,1);break;case"HH":E=Ge(de.Hours,2);break;case"m":E=Ge(de.Minutes,1);break;case"mm":E=Ge(de.Minutes,2);break;case"s":E=Ge(de.Seconds,1);break;case"ss":E=Ge(de.Seconds,2);break;case"S":E=Ge(de.FractionalSeconds,1);break;case"SS":E=Ge(de.FractionalSeconds,2);break;case"SSS":E=Ge(de.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":E=wn(Ee.Short);break;case"ZZZZZ":E=wn(Ee.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":E=wn(Ee.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":E=wn(Ee.Long);break;default:return null}return dn[p]=E,E}(ft);$e+=Xe?Xe(x,h,at):"''"===ft?"'":ft.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),$e}function Ct(p,E,h){const C=new Date(0);return C.setFullYear(p,E,h),C.setHours(0,0,0),C}function Ot(p,E){const h=function(p){return(0,y.cg1)(p)[y.wAp.LocaleId]}(p);if(re[h]=re[h]||{},re[h][E])return re[h][E];let C="";switch(E){case"shortDate":C=Vt(p,$.Short);break;case"mediumDate":C=Vt(p,$.Medium);break;case"longDate":C=Vt(p,$.Long);break;case"fullDate":C=Vt(p,$.Full);break;case"shortTime":C=gt(p,$.Short);break;case"mediumTime":C=gt(p,$.Medium);break;case"longTime":C=gt(p,$.Long);break;case"fullTime":C=gt(p,$.Full);break;case"short":const x=Ot(p,"shortTime"),B=Ot(p,"shortDate");C=bt(nt(p,$.Short),[x,B]);break;case"medium":const oe=Ot(p,"mediumTime"),Ae=Ot(p,"mediumDate");C=bt(nt(p,$.Medium),[oe,Ae]);break;case"long":const at=Ot(p,"longTime"),$e=Ot(p,"longDate");C=bt(nt(p,$.Long),[at,$e]);break;case"full":const ft=Ot(p,"fullTime"),Xe=Ot(p,"fullDate");C=bt(nt(p,$.Full),[ft,Xe])}return C&&(re[h][E]=C),C}function bt(p,E){return E&&(p=p.replace(/\{([^}]+)}/g,function(h,C){return null!=E&&C in E?E[C]:h})),p}function mt(p,E,h="-",C,x){let B="";(p<0||x&&p<=0)&&(x?p=1-p:(p=-p,B=h));let oe=String(p);for(;oe.length<E;)oe="0"+oe;return C&&(oe=oe.substr(oe.length-E)),B+oe}function Ge(p,E,h=0,C=!1,x=!1){return function(B,oe){let Ae=function(p,E){switch(p){case de.FullYear:return E.getFullYear();case de.Month:return E.getMonth();case de.Date:return E.getDate();case de.Hours:return E.getHours();case de.Minutes:return E.getMinutes();case de.Seconds:return E.getSeconds();case de.FractionalSeconds:return E.getMilliseconds();case de.Day:return E.getDay();default:throw new Error(`Unknown DateType value "${p}".`)}}(p,B);if((h>0||Ae>-h)&&(Ae+=h),p===de.Hours)0===Ae&&-12===h&&(Ae=12);else if(p===de.FractionalSeconds)return function(p,E){return mt(p,3).substr(0,E)}(Ae,E);const at=$t(oe,V.MinusSign);return mt(Ae,E,at,C,x)}}function Pe(p,E,h=H.Format,C=!1){return function(x,B){return function(p,E,h,C,x,B){switch(h){case ge.Months:return function(p,E,h){const C=(0,y.cg1)(p),B=Et([C[y.wAp.MonthsFormat],C[y.wAp.MonthsStandalone]],E);return Et(B,h)}(E,x,C)[p.getMonth()];case ge.Days:return function(p,E,h){const C=(0,y.cg1)(p),B=Et([C[y.wAp.DaysFormat],C[y.wAp.DaysStandalone]],E);return Et(B,h)}(E,x,C)[p.getDay()];case ge.DayPeriods:const oe=p.getHours(),Ae=p.getMinutes();if(B){const $e=function(p){const E=(0,y.cg1)(p);return nn(E),(E[y.wAp.ExtraData][2]||[]).map(C=>"string"==typeof C?on(C):[on(C[0]),on(C[1])])}(E),ft=function(p,E,h){const C=(0,y.cg1)(p);nn(C);const B=Et([C[y.wAp.ExtraData][0],C[y.wAp.ExtraData][1]],E)||[];return Et(B,h)||[]}(E,x,C),Xe=$e.findIndex(pt=>{if(Array.isArray(pt)){const[Ze,Ut]=pt,qn=oe>=Ze.hours&&Ae>=Ze.minutes,Zn=oe<Ut.hours||oe===Ut.hours&&Ae<Ut.minutes;if(Ze.hours<Ut.hours){if(qn&&Zn)return!0}else if(qn||Zn)return!0}else if(pt.hours===oe&&pt.minutes===Ae)return!0;return!1});if(-1!==Xe)return ft[Xe]}return function(p,E,h){const C=(0,y.cg1)(p),B=Et([C[y.wAp.DayPeriodsFormat],C[y.wAp.DayPeriodsStandalone]],E);return Et(B,h)}(E,x,C)[oe<12?0:1];case ge.Eras:return function(p,E){return Et((0,y.cg1)(p)[y.wAp.Eras],E)}(E,C)[p.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${h}`)}}(x,B,p,E,h,C)}}function wn(p){return function(E,h,C){const x=-1*C,B=$t(h,V.MinusSign),oe=x>0?Math.floor(x/60):Math.ceil(x/60);switch(p){case Ee.Short:return(x>=0?"+":"")+mt(oe,2,B)+mt(Math.abs(x%60),2,B);case Ee.ShortGMT:return"GMT"+(x>=0?"+":"")+mt(oe,1,B);case Ee.Long:return"GMT"+(x>=0?"+":"")+mt(oe,2,B)+":"+mt(Math.abs(x%60),2,B);case Ee.Extended:return 0===C?"Z":(x>=0?"+":"")+mt(oe,2,B)+":"+mt(Math.abs(x%60),2,B);default:throw new Error(`Unknown zone width "${p}"`)}}}function ur(p){return Ct(p.getFullYear(),p.getMonth(),p.getDate()+(4-p.getDay()))}function Vn(p,E=!1){return function(h,C){let x;if(E){const B=new Date(h.getFullYear(),h.getMonth(),1).getDay()-1,oe=h.getDate();x=1+Math.floor((oe+B)/7)}else{const B=ur(h),oe=function(p){const E=Ct(p,0,1).getDay();return Ct(p,0,1+(E<=4?4:11)-E)}(B.getFullYear()),Ae=B.getTime()-oe.getTime();x=1+Math.round(Ae/6048e5)}return mt(x,p,$t(C,V.MinusSign))}}function $n(p,E=!1){return function(h,C){return mt(ur(h).getFullYear(),p,$t(C,V.MinusSign),E)}}const dn={};function Jt(p,E){p=p.replace(/:/g,"");const h=Date.parse("Jan 01, 1970 00:00:00 "+p)/6e4;return isNaN(h)?E:h}function Ar(p){return p instanceof Date&&!isNaN(p.valueOf())}
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
class Ye{}let jt=(()=>{class p extends Ye{constructor(h){super(),this.locale=h}getPluralCategory(h,C){switch(Qt(C||this.locale)(h)){case j.Zero:return"zero";case j.One:return"one";case j.Two:return"two";case j.Few:return"few";case j.Many:return"many";default:return"other"}}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(y.soG))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})();
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
function It(p,E){E=encodeURIComponent(E);for(const h of p.split(";")){const C=h.indexOf("="),[x,B]=-1==C?[h,""]:[h.slice(0,C),h.slice(C+1)];if(x.trim()===E)return decodeURIComponent(B)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xn=(()=>{class p{constructor(h,C,x,B){this._iterableDiffers=h,this._keyValueDiffers=C,this._ngEl=x,this._renderer=B,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(h){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof h?h.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(h){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof h?h.split(/\s+/):h,this._rawClass&&((0,y.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const h=this._iterableDiffer.diff(this._rawClass);h&&this._applyIterableChanges(h)}else if(this._keyValueDiffer){const h=this._keyValueDiffer.diff(this._rawClass);h&&this._applyKeyValueChanges(h)}}_applyKeyValueChanges(h){h.forEachAddedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachChangedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachRemovedItem(C=>{C.previousValue&&this._toggleClass(C.key,!1)})}_applyIterableChanges(h){h.forEachAddedItem(C=>{if("string"!=typeof C.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,y.AaK)(C.item)}`);this._toggleClass(C.item,!0)}),h.forEachRemovedItem(C=>this._toggleClass(C.item,!1))}_applyClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!0)):Object.keys(h).forEach(C=>this._toggleClass(C,!!h[C])))}_removeClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!1)):Object.keys(h).forEach(C=>this._toggleClass(C,!1)))}_toggleClass(h,C){(h=h.trim())&&h.split(/\s+/g).forEach(x=>{C?this._renderer.addClass(this._ngEl.nativeElement,x):this._renderer.removeClass(this._ngEl.nativeElement,x)})}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.ZZ4),y.Y36(y.aQg),y.Y36(y.SBq),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),p})();
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
class xr{constructor(E,h,C,x){this.$implicit=E,this.ngForOf=h,this.index=C,this.count=x}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let vn=(()=>{class p{constructor(h,C,x){this._viewContainer=h,this._template=C,this._differs=x,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(h){this._ngForOf=h,this._ngForOfDirty=!0}set ngForTrackBy(h){this._trackByFn=h}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(h){h&&(this._template=h)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const h=this._ngForOf;!this._differ&&h&&(this._differ=this._differs.find(h).create(this.ngForTrackBy))}if(this._differ){const h=this._differ.diff(this._ngForOf);h&&this._applyChanges(h)}}_applyChanges(h){const C=this._viewContainer;h.forEachOperation((x,B,oe)=>{if(null==x.previousIndex)C.createEmbeddedView(this._template,new xr(x.item,this._ngForOf,-1,-1),null===oe?void 0:oe);else if(null==oe)C.remove(null===B?void 0:B);else if(null!==B){const Ae=C.get(B);C.move(Ae,oe),We(Ae,x)}});for(let x=0,B=C.length;x<B;x++){const Ae=C.get(x).context;Ae.index=x,Ae.count=B,Ae.ngForOf=this._ngForOf}h.forEachIdentityChange(x=>{We(C.get(x.currentIndex),x)})}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(y.ZZ4))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),p})();function We(p,E){p.context.$implicit=E.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Wn=(()=>{class p{constructor(h,C){this._viewContainer=h,this._context=new eo,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=C}set ngIf(h){this._context.$implicit=this._context.ngIf=h,this._updateView()}set ngIfThen(h){Yn("ngIfThen",h),this._thenTemplateRef=h,this._thenViewRef=null,this._updateView()}set ngIfElse(h){Yn("ngIfElse",h),this._elseTemplateRef=h,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),p})();class eo{constructor(){this.$implicit=null,this.ngIf=null}}function Yn(p,E){if(E&&!E.createEmbeddedView)throw new Error(`${p} must be a TemplateRef, but received '${(0,y.AaK)(E)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ft{constructor(E,h){this._viewContainerRef=E,this._templateRef=h,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(E){E&&!this._created?this.create():!E&&this._created&&this.destroy()}}let Dn=(()=>{class p{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(h){this._ngSwitch=h,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(h){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(h)}_matchCase(h){const C=h==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||C,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),C}_updateDefaultCases(h){if(this._defaultViews&&h!==this._defaultUsed){this._defaultUsed=h;for(let C=0;C<this._defaultViews.length;C++)this._defaultViews[C].enforceState(h)}}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),p})(),Mn=(()=>{class p{constructor(h,C,x){this.ngSwitch=x,x._addCase(),this._view=new Ft(h,C)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(Dn,9))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),p})(),fn=(()=>{class p{constructor(h,C,x){this._ngEl=h,this._differs=C,this._renderer=x,this._ngStyle=null,this._differ=null}set ngStyle(h){this._ngStyle=h,!this._differ&&h&&(this._differ=this._differs.find(h).create())}ngDoCheck(){if(this._differ){const h=this._differ.diff(this._ngStyle);h&&this._applyChanges(h)}}_setStyle(h,C){const[x,B]=h.split(".");null!=(C=null!=C&&B?`${C}${B}`:C)?this._renderer.setStyle(this._ngEl.nativeElement,x,C):this._renderer.removeStyle(this._ngEl.nativeElement,x)}_applyChanges(h){h.forEachRemovedItem(C=>this._setStyle(C.key,null)),h.forEachAddedItem(C=>this._setStyle(C.key,C.currentValue)),h.forEachChangedItem(C=>this._setStyle(C.key,C.currentValue))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.SBq),y.Y36(y.aQg),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Kt(p,E){return Error(`InvalidPipeArgument: '${E}' for pipe '${(0,y.AaK)(p)}'`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kn{createSubscription(E,h){return E.subscribe({next:h,error:C=>{throw C}})}dispose(E){E.unsubscribe()}onDestroy(E){E.unsubscribe()}}class sn{createSubscription(E,h){return E.then(h,C=>{throw C})}dispose(E){}onDestroy(E){}}const ro=new sn,Di=new Kn;let Hr=(()=>{class p{constructor(h){this._ref=h,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(h){return this._obj?h!==this._obj?(this._dispose(),this.transform(h)):this._latestValue:(h&&this._subscribe(h),this._latestValue)}_subscribe(h){this._obj=h,this._strategy=this._selectStrategy(h),this._subscription=this._strategy.createSubscription(h,C=>this._updateLatestValue(h,C))}_selectStrategy(h){if((0,y.QGY)(h))return ro;if((0,y.F4k)(h))return Di;throw Kt(p,h)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(h,C){h===this._obj&&(this._latestValue=C,this._ref.markForCheck())}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.sBO,16))},p.\u0275pipe=y.Yjl({name:"async",type:p,pure:!1}),p})();
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
const _s=new y.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let Ei=(()=>{class p{constructor(h,C){this.locale=h,this.defaultTimezone=C}transform(h,C="mediumDate",x,B){var oe;if(null==h||""===h||h!=h)return null;try{return Ue(h,C,B||this.locale,null!==(oe=null!=x?x:this.defaultTimezone)&&void 0!==oe?oe:void 0)}catch(Ae){throw Kt(p,Ae.message)}}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.soG,16),y.Y36(_s,24))},p.\u0275pipe=y.Yjl({name:"date",type:p,pure:!0}),p})(),Qn=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=y.oAB({type:p}),p.\u0275inj=y.cJS({providers:[{provide:Ye,useClass:jt}]}),p})();
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
const ao="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Mi=(()=>{class p{}return p.\u0275prov=(0,y.Yz7)({token:p,providedIn:"root",factory:()=>new an((0,y.LFG)(se),window)}),p})();class an{constructor(E,h){this.document=E,this.window=h,this.offset=()=>[0,0]}setOffset(E){this.offset=Array.isArray(E)?()=>E:E}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(E){this.supportsScrolling()&&this.window.scrollTo(E[0],E[1])}scrollToAnchor(E){if(!this.supportsScrolling())return;const h=function(p,E){const h=p.getElementById(E)||p.getElementsByName(E)[0];if(h)return h;if("function"==typeof p.createTreeWalker&&p.body&&(p.body.createShadowRoot||p.body.attachShadow)){const C=p.createTreeWalker(p.body,NodeFilter.SHOW_ELEMENT);let x=C.currentNode;for(;x;){const B=x.shadowRoot;if(B){const oe=B.getElementById(E)||B.querySelector(`[name="${E}"]`);if(oe)return oe}x=C.nextNode()}}return null}(this.document,E);h&&(this.scrollToElement(h),this.attemptFocus(h))}setHistoryScrollRestoration(E){if(this.supportScrollRestoration()){const h=this.window.history;h&&h.scrollRestoration&&(h.scrollRestoration=E)}}scrollToElement(E){const h=E.getBoundingClientRect(),C=h.left+this.window.pageXOffset,x=h.top+this.window.pageYOffset,B=this.offset();this.window.scrollTo(C-B[0],x-B[1])}attemptFocus(E){return E.focus(),this.document.activeElement===E}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const E=lo(this.window.history)||lo(Object.getPrototypeOf(this.window.history));return!(!E||!E.writable&&!E.set)}catch(E){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(E){return!1}}}function lo(p){return Object.getOwnPropertyDescriptor(p,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Or{}
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
       */},520:(Be,ie,M)=>{M.d(ie,{TP:()=>Je,eN:()=>V,JF:()=>Et});var y=M(9808),S=M(7587),ne=M(9646),J=M(8306),ee=M(4351),Me=M(9300),se=M(4004);
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
       */class me{}class te{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class G{constructor(I){this.normalizedNames=new Map,this.lazyUpdate=null,I?this.lazyInit="string"==typeof I?()=>{this.headers=new Map,I.split("\n").forEach(P=>{const re=P.indexOf(":");if(re>0){const K=P.slice(0,re),Ee=K.toLowerCase(),de=P.slice(re+1).trim();this.maybeSetNormalizedName(K,Ee),this.headers.has(Ee)?this.headers.get(Ee).push(de):this.headers.set(Ee,[de])}})}:()=>{this.headers=new Map,Object.keys(I).forEach(P=>{let re=I[P];const K=P.toLowerCase();"string"==typeof re&&(re=[re]),re.length>0&&(this.headers.set(K,re),this.maybeSetNormalizedName(P,K))})}:this.headers=new Map}has(I){return this.init(),this.headers.has(I.toLowerCase())}get(I){this.init();const P=this.headers.get(I.toLowerCase());return P&&P.length>0?P[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(I){return this.init(),this.headers.get(I.toLowerCase())||null}append(I,P){return this.clone({name:I,value:P,op:"a"})}set(I,P){return this.clone({name:I,value:P,op:"s"})}delete(I,P){return this.clone({name:I,value:P,op:"d"})}maybeSetNormalizedName(I,P){this.normalizedNames.has(P)||this.normalizedNames.set(P,I)}init(){this.lazyInit&&(this.lazyInit instanceof G?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(I=>this.applyUpdate(I)),this.lazyUpdate=null))}copyFrom(I){I.init(),Array.from(I.headers.keys()).forEach(P=>{this.headers.set(P,I.headers.get(P)),this.normalizedNames.set(P,I.normalizedNames.get(P))})}clone(I){const P=new G;return P.lazyInit=this.lazyInit&&this.lazyInit instanceof G?this.lazyInit:this,P.lazyUpdate=(this.lazyUpdate||[]).concat([I]),P}applyUpdate(I){const P=I.name.toLowerCase();switch(I.op){case"a":case"s":let re=I.value;if("string"==typeof re&&(re=[re]),0===re.length)return;this.maybeSetNormalizedName(I.name,P);const K=("a"===I.op?this.headers.get(P):void 0)||[];K.push(...re),this.headers.set(P,K);break;case"d":const Ee=I.value;if(Ee){let de=this.headers.get(P);if(!de)return;de=de.filter(ge=>-1===Ee.indexOf(ge)),0===de.length?(this.headers.delete(P),this.normalizedNames.delete(P)):this.headers.set(P,de)}else this.headers.delete(P),this.normalizedNames.delete(P)}}forEach(I){this.init(),Array.from(this.normalizedNames.keys()).forEach(P=>I(this.normalizedNames.get(P),this.headers.get(P)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class N{encodeKey(I){return ze(I)}encodeValue(I){return ze(I)}decodeKey(I){return decodeURIComponent(I)}decodeValue(I){return decodeURIComponent(I)}}const ye=/%(\d[a-f0-9])/gi,pe={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function ze(Q){return encodeURIComponent(Q).replace(ye,(I,P)=>{var re;return null!==(re=pe[P])&&void 0!==re?re:I})}function Ie(Q){return`${Q}`}class Z{constructor(I={}){if(this.updates=null,this.cloneFrom=null,this.encoder=I.encoder||new N,I.fromString){if(I.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(Q,I){const P=new Map;return Q.length>0&&Q.replace(/^\?/,"").split("&").forEach(K=>{const Ee=K.indexOf("="),[de,ge]=-1==Ee?[I.decodeKey(K),""]:[I.decodeKey(K.slice(0,Ee)),I.decodeValue(K.slice(Ee+1))],Ue=P.get(de)||[];Ue.push(ge),P.set(de,Ue)}),P}(I.fromString,this.encoder)}else I.fromObject?(this.map=new Map,Object.keys(I.fromObject).forEach(P=>{const re=I.fromObject[P];this.map.set(P,Array.isArray(re)?re:[re])})):this.map=null}has(I){return this.init(),this.map.has(I)}get(I){this.init();const P=this.map.get(I);return P?P[0]:null}getAll(I){return this.init(),this.map.get(I)||null}keys(){return this.init(),Array.from(this.map.keys())}append(I,P){return this.clone({param:I,value:P,op:"a"})}appendAll(I){const P=[];return Object.keys(I).forEach(re=>{const K=I[re];Array.isArray(K)?K.forEach(Ee=>{P.push({param:re,value:Ee,op:"a"})}):P.push({param:re,value:K,op:"a"})}),this.clone(P)}set(I,P){return this.clone({param:I,value:P,op:"s"})}delete(I,P){return this.clone({param:I,value:P,op:"d"})}toString(){return this.init(),this.keys().map(I=>{const P=this.encoder.encodeKey(I);return this.map.get(I).map(re=>P+"="+this.encoder.encodeValue(re)).join("&")}).filter(I=>""!==I).join("&")}clone(I){const P=new Z({encoder:this.encoder});return P.cloneFrom=this.cloneFrom||this,P.updates=(this.updates||[]).concat(I),P}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(I=>this.map.set(I,this.cloneFrom.map.get(I))),this.updates.forEach(I=>{switch(I.op){case"a":case"s":const P=("a"===I.op?this.map.get(I.param):void 0)||[];P.push(Ie(I.value)),this.map.set(I.param,P);break;case"d":if(void 0===I.value){this.map.delete(I.param);break}{let re=this.map.get(I.param)||[];const K=re.indexOf(Ie(I.value));-1!==K&&re.splice(K,1),re.length>0?this.map.set(I.param,re):this.map.delete(I.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Te{constructor(){this.map=new Map}set(I,P){return this.map.set(I,P),this}get(I){return this.map.has(I)||this.map.set(I,I.defaultValue()),this.map.get(I)}delete(I){return this.map.delete(I),this}has(I){return this.map.has(I)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function De(Q){return"undefined"!=typeof ArrayBuffer&&Q instanceof ArrayBuffer}function Re(Q){return"undefined"!=typeof Blob&&Q instanceof Blob}function ae(Q){return"undefined"!=typeof FormData&&Q instanceof FormData}class we{constructor(I,P,re,K){let Ee;if(this.url=P,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=I.toUpperCase(),function(Q){switch(Q){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||K?(this.body=void 0!==re?re:null,Ee=K):Ee=re,Ee&&(this.reportProgress=!!Ee.reportProgress,this.withCredentials=!!Ee.withCredentials,Ee.responseType&&(this.responseType=Ee.responseType),Ee.headers&&(this.headers=Ee.headers),Ee.context&&(this.context=Ee.context),Ee.params&&(this.params=Ee.params)),this.headers||(this.headers=new G),this.context||(this.context=new Te),this.params){const de=this.params.toString();if(0===de.length)this.urlWithParams=P;else{const ge=P.indexOf("?");this.urlWithParams=P+(-1===ge?"?":ge<P.length-1?"&":"")+de}}else this.params=new Z,this.urlWithParams=P}serializeBody(){return null===this.body?null:De(this.body)||Re(this.body)||ae(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof Z?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ae(this.body)?null:Re(this.body)?this.body.type||null:De(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Z?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(I={}){var P;const re=I.method||this.method,K=I.url||this.url,Ee=I.responseType||this.responseType,de=void 0!==I.body?I.body:this.body,ge=void 0!==I.withCredentials?I.withCredentials:this.withCredentials,Ue=void 0!==I.reportProgress?I.reportProgress:this.reportProgress;let Ct=I.headers||this.headers,Ot=I.params||this.params;const bt=null!==(P=I.context)&&void 0!==P?P:this.context;return void 0!==I.setHeaders&&(Ct=Object.keys(I.setHeaders).reduce((mt,ve)=>mt.set(ve,I.setHeaders[ve]),Ct)),I.setParams&&(Ot=Object.keys(I.setParams).reduce((mt,ve)=>mt.set(ve,I.setParams[ve]),Ot)),new we(re,K,de,{params:Ot,headers:Ct,context:bt,reportProgress:Ue,responseType:Ee,withCredentials:ge})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var he=(()=>((he=he||{})[he.Sent=0]="Sent",he[he.UploadProgress=1]="UploadProgress",he[he.ResponseHeader=2]="ResponseHeader",he[he.DownloadProgress=3]="DownloadProgress",he[he.Response=4]="Response",he[he.User=5]="User",he))();class U{constructor(I,P=200,re="OK"){this.headers=I.headers||new G,this.status=void 0!==I.status?I.status:P,this.statusText=I.statusText||re,this.url=I.url||null,this.ok=this.status>=200&&this.status<300}}class j extends U{constructor(I={}){super(I),this.type=he.ResponseHeader}clone(I={}){return new j({headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class H extends U{constructor(I={}){super(I),this.type=he.Response,this.body=void 0!==I.body?I.body:null}clone(I={}){return new H({body:void 0!==I.body?I.body:this.body,headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class Y extends U{constructor(I){super(I,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${I.url||"(unknown url)"}`:`Http failure response for ${I.url||"(unknown url)"}: ${I.status} ${I.statusText}`,this.error=I.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(Q,I){return{body:I,headers:Q.headers,context:Q.context,observe:Q.observe,params:Q.params,reportProgress:Q.reportProgress,responseType:Q.responseType,withCredentials:Q.withCredentials}}let V=(()=>{class Q{constructor(P){this.handler=P}request(P,re,K={}){let Ee;if(P instanceof we)Ee=P;else{let Ue,Ct;Ue=K.headers instanceof G?K.headers:new G(K.headers),K.params&&(Ct=K.params instanceof Z?K.params:new Z({fromObject:K.params})),Ee=new we(P,re,void 0!==K.body?K.body:null,{headers:Ue,context:K.context,params:Ct,reportProgress:K.reportProgress,responseType:K.responseType||"json",withCredentials:K.withCredentials})}const de=(0,ne.of)(Ee).pipe((0,ee.b)(Ue=>this.handler.handle(Ue)));if(P instanceof we||"events"===K.observe)return de;const ge=de.pipe((0,Me.h)(Ue=>Ue instanceof H));switch(K.observe||"body"){case"body":switch(Ee.responseType){case"arraybuffer":return ge.pipe((0,se.U)(Ue=>{if(null!==Ue.body&&!(Ue.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return Ue.body}));case"blob":return ge.pipe((0,se.U)(Ue=>{if(null!==Ue.body&&!(Ue.body instanceof Blob))throw new Error("Response is not a Blob.");return Ue.body}));case"text":return ge.pipe((0,se.U)(Ue=>{if(null!==Ue.body&&"string"!=typeof Ue.body)throw new Error("Response is not a string.");return Ue.body}));default:return ge.pipe((0,se.U)(Ue=>Ue.body))}case"response":return ge;default:throw new Error(`Unreachable: unhandled observe type ${K.observe}}`)}}delete(P,re={}){return this.request("DELETE",P,re)}get(P,re={}){return this.request("GET",P,re)}head(P,re={}){return this.request("HEAD",P,re)}jsonp(P,re){return this.request("JSONP",P,{params:(new Z).append(re,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(P,re={}){return this.request("OPTIONS",P,re)}patch(P,re,K={}){return this.request("PATCH",P,$(K,re))}post(P,re,K={}){return this.request("POST",P,$(K,re))}put(P,re,K={}){return this.request("PUT",P,$(K,re))}}return Q.\u0275fac=function(P){return new(P||Q)(S.LFG(me))},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Oe{constructor(I,P){this.next=I,this.interceptor=P}handle(I){return this.interceptor.intercept(I,this.next)}}const Je=new S.OlP("HTTP_INTERCEPTORS");let St=(()=>{class Q{intercept(P,re){return re.handle(P)}}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nt=/^\)\]\}',?\n/;let Hn=(()=>{class Q{constructor(P){this.xhrFactory=P}handle(P){if("JSONP"===P.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new J.y(re=>{const K=this.xhrFactory.build();if(K.open(P.method,P.urlWithParams),P.withCredentials&&(K.withCredentials=!0),P.headers.forEach((ve,Ge)=>K.setRequestHeader(ve,Ge.join(","))),P.headers.has("Accept")||K.setRequestHeader("Accept","application/json, text/plain, */*"),!P.headers.has("Content-Type")){const ve=P.detectContentTypeHeader();null!==ve&&K.setRequestHeader("Content-Type",ve)}if(P.responseType){const ve=P.responseType.toLowerCase();K.responseType="json"!==ve?ve:"text"}const Ee=P.serializeBody();let de=null;const ge=()=>{if(null!==de)return de;const ve=1223===K.status?204:K.status,Ge=K.statusText||"OK",Zt=new G(K.getAllResponseHeaders()),Pe=function(Q){return"responseURL"in Q&&Q.responseURL?Q.responseURL:/^X-Request-URL:/m.test(Q.getAllResponseHeaders())?Q.getResponseHeader("X-Request-URL"):null}(K)||P.url;return de=new j({headers:Zt,status:ve,statusText:Ge,url:Pe}),de},Ue=()=>{let{headers:ve,status:Ge,statusText:Zt,url:Pe}=ge(),At=null;204!==Ge&&(At=void 0===K.response?K.responseText:K.response),0===Ge&&(Ge=At?200:0);let wn=Ge>=200&&Ge<300;if("json"===P.responseType&&"string"==typeof At){const bn=At;At=At.replace(nt,"");try{At=""!==At?JSON.parse(At):null}catch(et){At=bn,wn&&(wn=!1,At={error:et,text:At})}}wn?(re.next(new H({body:At,headers:ve,status:Ge,statusText:Zt,url:Pe||void 0})),re.complete()):re.error(new Y({error:At,headers:ve,status:Ge,statusText:Zt,url:Pe||void 0}))},Ct=ve=>{const{url:Ge}=ge(),Zt=new Y({error:ve,status:K.status||0,statusText:K.statusText||"Unknown Error",url:Ge||void 0});re.error(Zt)};let Ot=!1;const bt=ve=>{Ot||(re.next(ge()),Ot=!0);let Ge={type:he.DownloadProgress,loaded:ve.loaded};ve.lengthComputable&&(Ge.total=ve.total),"text"===P.responseType&&!!K.responseText&&(Ge.partialText=K.responseText),re.next(Ge)},mt=ve=>{let Ge={type:he.UploadProgress,loaded:ve.loaded};ve.lengthComputable&&(Ge.total=ve.total),re.next(Ge)};return K.addEventListener("load",Ue),K.addEventListener("error",Ct),K.addEventListener("timeout",Ct),K.addEventListener("abort",Ct),P.reportProgress&&(K.addEventListener("progress",bt),null!==Ee&&K.upload&&K.upload.addEventListener("progress",mt)),K.send(Ee),re.next({type:he.Sent}),()=>{K.removeEventListener("error",Ct),K.removeEventListener("abort",Ct),K.removeEventListener("load",Ue),K.removeEventListener("timeout",Ct),P.reportProgress&&(K.removeEventListener("progress",bt),null!==Ee&&K.upload&&K.upload.removeEventListener("progress",mt)),K.readyState!==K.DONE&&K.abort()}})}}return Q.\u0275fac=function(P){return new(P||Q)(S.LFG(y.JF))},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Tr=new S.OlP("XSRF_COOKIE_NAME"),rt=new S.OlP("XSRF_HEADER_NAME");class jr{}let _n=(()=>{class Q{constructor(P,re,K){this.doc=P,this.platform=re,this.cookieName=K,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const P=this.doc.cookie||"";return P!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,y.Mx)(P,this.cookieName),this.lastCookieString=P),this.lastToken}}return Q.\u0275fac=function(P){return new(P||Q)(S.LFG(y.K0),S.LFG(S.Lbi),S.LFG(Tr))},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})(),Qt=(()=>{class Q{constructor(P,re){this.tokenService=P,this.headerName=re}intercept(P,re){const K=P.url.toLowerCase();if("GET"===P.method||"HEAD"===P.method||K.startsWith("http://")||K.startsWith("https://"))return re.handle(P);const Ee=this.tokenService.getToken();return null!==Ee&&!P.headers.has(this.headerName)&&(P=P.clone({headers:P.headers.set(this.headerName,Ee)})),re.handle(P)}}return Q.\u0275fac=function(P){return new(P||Q)(S.LFG(jr),S.LFG(rt))},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})(),nn=(()=>{class Q{constructor(P,re){this.backend=P,this.injector=re,this.chain=null}handle(P){if(null===this.chain){const re=this.injector.get(Je,[]);this.chain=re.reduceRight((K,Ee)=>new Oe(K,Ee),this.backend)}return this.chain.handle(P)}}return Q.\u0275fac=function(P){return new(P||Q)(S.LFG(te),S.LFG(S.zs3))},Q.\u0275prov=S.Yz7({token:Q,factory:Q.\u0275fac}),Q})(),rn=(()=>{class Q{static disable(){return{ngModule:Q,providers:[{provide:Qt,useClass:St}]}}static withOptions(P={}){return{ngModule:Q,providers:[P.cookieName?{provide:Tr,useValue:P.cookieName}:[],P.headerName?{provide:rt,useValue:P.headerName}:[]]}}}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275mod=S.oAB({type:Q}),Q.\u0275inj=S.cJS({providers:[Qt,{provide:Je,useExisting:Qt,multi:!0},{provide:jr,useClass:_n},{provide:Tr,useValue:"XSRF-TOKEN"},{provide:rt,useValue:"X-XSRF-TOKEN"}]}),Q})(),Et=(()=>{class Q{}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275mod=S.oAB({type:Q}),Q.\u0275inj=S.cJS({providers:[V,{provide:me,useClass:nn},Hn,{provide:te,useExisting:Hn}],imports:[[rn.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),Q})();
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
       */,7587:(Be,ie,M)=>{M.d(ie,{deG:()=>wg,tb:()=>Zp,AFp:()=>Kp,ip1:()=>Ol,CZH:()=>vi,hGG:()=>z0,z2F:()=>Ds,sBO:()=>D0,Sil:()=>Nl,_Vd:()=>fs,EJc:()=>Xp,SBq:()=>hs,qLn:()=>Ji,vpe:()=>Ir,tBr:()=>Wi,XFs:()=>I,OlP:()=>wt,zs3:()=>Bn,ZZ4:()=>Aa,aQg:()=>Ra,soG:()=>Ta,YKP:()=>sp,h0i:()=>gi,PXZ:()=>f0,R0b:()=>Sn,FiY:()=>Eo,Lbi:()=>qp,g9A:()=>Qp,Qsj:()=>YE,FYo:()=>np,JOm:()=>Cr,tp0:()=>zo,Rgc:()=>ys,dDg:()=>ng,GfV:()=>rp,s_b:()=>wa,ifc:()=>bt,eFA:()=>ig,G48:()=>v0,_c5:()=>k0,VLi:()=>u0,c2e:()=>Jp,zSh:()=>Vu,wAp:()=>je,vHH:()=>Ce,cg1:()=>cl,kL8:()=>Th,dqk:()=>Pe,sIi:()=>os,CqO:()=>xf,QGY:()=>ol,F4k:()=>Rf,RDi:()=>Or,AaK:()=>ye,TTD:()=>zr,xp6:()=>sd,uIk:()=>Qu,Tol:()=>eh,Suo:()=>Ip,Xpm:()=>Br,lG2:()=>yn,Yz7:()=>rt,cJS:()=>_n,oAB:()=>cr,Yjl:()=>zn,Y36:()=>ss,_UZ:()=>Tf,qZA:()=>rl,TgZ:()=>nl,LFG:()=>en,$8M:()=>ut,$Z:()=>If,NdJ:()=>il,CRH:()=>Tp,kcU:()=>js,O4$:()=>ks,oxw:()=>Nf,ALo:()=>yp,lcZ:()=>vp,xi3:()=>Dp,Q6J:()=>el,VKq:()=>cp,kEZ:()=>dp,iGM:()=>Mp,MAs:()=>gf,LSH:()=>ru,kYT:()=>Rr,YNc:()=>pf,W1O:()=>xp,_uU:()=>ah,Oqu:()=>ll,hij:()=>ga});var y=M(8189),S=M(8421),ne=M(515),J=M(3269),ee=M(2076),se=M(7579),me=M(727),te=M(8306),G=M(3099);
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
function N(e){for(let t in e)if(e[t]===N)return t;throw Error("Could not find renamed property on target object.")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ye(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ye).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function pe(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ze=N({__forward_ref__:N});function Ie(e){return e.__forward_ref__=Ie,e.toString=function(){return ye(this())},e}function Z(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(ze)&&e.__forward_ref__===Ie}
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
class Ce extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function ae(e){return"string"==typeof e?e:null==e?"":String(e)}function qe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():ae(e)}function j(e,t){const n=t?` in ${t}`:"";throw new Ce("201",`No provider for ${qe(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gt(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function _n(e){return{providers:e.providers||[],imports:e.imports||[]}}function Qt(e){return nn(e,Et)||nn(e,ar)}function nn(e,t){return e.hasOwnProperty(t)?e[t]:null}function rn(e){return e&&(e.hasOwnProperty(on)||e.hasOwnProperty(Q))?e[on]:null}const Et=N({\u0275prov:N}),on=N({\u0275inj:N}),ar=N({ngInjectableDef:N}),Q=N({ngInjectorDef:N});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var I=(()=>((I=I||{})[I.Default=0]="Default",I[I.Host=1]="Host",I[I.Self=2]="Self",I[I.SkipSelf=4]="SkipSelf",I[I.Optional=8]="Optional",I))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let P;function K(e){const t=P;return P=e,t}function Ee(e,t,n){const r=Qt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&I.Optional?null:void 0!==t?t:void j(ye(e),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ge(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ue=(()=>((Ue=Ue||{})[Ue.OnPush=0]="OnPush",Ue[Ue.Default=1]="Default",Ue))(),bt=(()=>{return(e=bt||(bt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",bt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mt="undefined"!=typeof globalThis&&globalThis,ve="undefined"!=typeof window&&window,Ge="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Pe=mt||"undefined"!=typeof global&&global||ve||Ge,bn={},et=[],Wt=N({\u0275cmp:N}),ur=N({\u0275dir:N}),Vn=N({\u0275pipe:N}),$n=N({\u0275mod:N}),dn=N({\u0275fac:N}),yt=N({__NG_ELEMENT_ID__:N});
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
let Jt=0;function Br(e){return ge(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ue.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||et,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||bt.Emulated,id:"c",styles:e.styles||et,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Jt++,r.inputs=Rn(e.inputs,n),r.outputs=Rn(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(lr):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(Sr):null,r})}function lr(e){return ht(e)||function(e){return e[ur]||null}(e)}function Sr(e){return function(e){return e[Vn]||null}(e)}const Ar={};function cr(e){return ge(()=>{const t={type:e.type,bootstrap:e.bootstrap||et,declarations:e.declarations||et,imports:e.imports||et,exports:e.exports||et,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Ar[e.id]=e.type),t})}function Rr(e,t){return ge(()=>{const n=O(e,!0);n.declarations=t.declarations||et,n.imports=t.imports||et,n.exports=t.exports||et})}function Rn(e,t){if(null==e)return bn;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const yn=Br;function zn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function ht(e){return e[Wt]||null}function O(e,t){const n=e[$n]||null;if(!n&&!0===t)throw new Error(`Type ${ye(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fn(e){return Array.isArray(e)&&"object"==typeof e[1]}function Bt(e){return Array.isArray(e)&&!0===e[1]}function no(e){return 0!=(8&e.flags)}function Kt(e){return 2==(2&e.flags)}function Kn(e){return 1==(1&e.flags)}function sn(e){return null!==e.template}function ro(e){return 0!=(512&e[2])}
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
function Qn(e,t){return e.hasOwnProperty(dn)?e[dn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ao{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zr(){return Ao}function Ao(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ts),bi}function bi(){const e=Pn(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===bn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ts(e,t,n,r){const o=Pn(e)||function(e,t){return e[uo]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:bn,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new ao(d&&d.currentValue,t,s===bn),e[r]=t}zr.ngInherit=!0;const uo="__ngSimpleChanges__";function Pn(e){return e[uo]||null}const lo="http://www.w3.org/2000/svg";
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
let fr;function Or(e){fr=e}function h(e){return!!e.listen}const C={createRenderer:(e,t)=>void 0!==fr?fr:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B(e){for(;Array.isArray(e);)e=e[0];return e}function at(e,t){return B(t[e])}function $e(e,t){return B(t[e.index])}function Xe(e,t){return e.data[t]}function pt(e,t){return e[t]}function Ze(e,t){const n=t[e];return fn(n)?n:n[0]}function Ut(e){return 4==(4&e[2])}function qn(e){return 128==(128&e[2])}function hn(e,t){return null==t?null:e[t]}function En(e){e[18]=0}function Fr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const ke={lFrame:ka(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function xs(){return ke.bindingsEnabled}function X(){return ke.lFrame.lView}function ot(){return ke.lFrame.tView}function Nt(){let e=Ti();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ti(){return ke.lFrame.currentTNode}function Fn(e,t){const n=ke.lFrame;n.currentTNode=e,n.isParent=t}function Si(){return ke.lFrame.isParent}function Po(){return ke.isInCheckNoChangesMode}function Oo(e){ke.isInCheckNoChangesMode=e}function Lt(){const e=ke.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Wr(){return ke.lFrame.bindingIndex++}function Fa(e,t){const n=ke.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ai(t)}function Ai(e){ke.lFrame.currentDirectiveIndex=e}function Fs(){return ke.lFrame.currentQueryIndex}function Ri(e){ke.lFrame.currentQueryIndex=e}function La(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Ns(e,t,n){if(n&I.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&I.Host||(o=La(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=ke.lFrame=xi();return r.currentTNode=t,r.lView=e,!0}function No(e){const t=xi(),n=e[1];ke.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xi(){const e=ke.lFrame,t=null===e?null:e.child;return null===t?ka(e):t}function ka(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Pi(){const e=ke.lFrame;return ke.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Oi=Pi;function fo(){const e=Pi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Xt(){return ke.lFrame.selectedIndex}function pr(e){ke.lFrame.selectedIndex=e}function _t(){const e=ke.lFrame;return Xe(e.tView,e.selectedIndex)}function ks(){ke.lFrame.currentNamespace=lo}function js(){ke.lFrame.currentNamespace=null}function ho(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:v}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=v&&(e.destroyHooks||(e.destroyHooks=[])).push(n,v)}}function Lo(e,t,n){Bs(e,t,3,n)}function ko(e,t,n,r){(3&e[2])===n&&Bs(e,t,n,r)}function Li(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Bs(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(Us(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function Us(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class po{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function mo(e,t,n){const r=h(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];jo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function Hs(e){return 3===e||4===e||6===e}function jo(e){return 64===e.charCodeAt(0)}function yo(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Bo(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Bo(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Va(e){return-1!==e}function Cn(e){return 32767&e}function Kr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ji=!0;function Uo(e){const t=ji;return ji=e,t}let Gs=0;function vo(e,t){const n=Do(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Bi(r.data,e),Bi(t,null),Bi(r.blueprint,null));const o=Ho(e,t),i=e.injectorIndex;if(Va(o)){const s=Cn(o),l=Kr(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function Bi(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Do(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Ho(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Vo(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(yt)&&(r=n[yt]),null==r&&(r=n[yt]=Gs++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Ys(e,t,n){if(n&I.Optional)return e;j(t,"NodeInjector")}function za(e,t,n,r){if(n&I.Optional&&void 0===r&&(r=null),0==(n&(I.Self|I.Host))){const o=e[9],i=K(void 0);try{return o?o.get(t,r,n&I.Optional):Ee(t,r,n&I.Optional)}finally{K(i)}}return Ys(r,t,n)}function c(e,t,n,r=I.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(yt)?e[yt]:void 0;return"number"==typeof t?t>=0?255&t:a:t}(n);if("function"==typeof i){if(!Ns(t,e,r))return r&I.Host?Ys(o,n,r):za(t,n,r,o);try{const s=i(r);if(null!=s||r&I.Optional)return s;j(n)}finally{Oi()}}else if("number"==typeof i){let s=null,l=Do(e,t),d=-1,m=r&I.Host?t[16][6]:null;for((-1===l||r&I.SkipSelf)&&(d=-1===l?Ho(e,t):t[l+8],-1!==d&&L(r,!1)?(s=t[1],l=Cn(d),t=Kr(d,t)):l=-1);-1!==l;){const v=t[1];if(T(i,l,v.data)){const _=f(l,t,n,s,r,m);if(_!==u)return _}d=t[l+8],-1!==d&&L(r,t[1].data[l+8]===m)&&T(i,l,t)?(s=v,l=Cn(d),t=Kr(d,t)):l=-1}}}return za(t,n,r,o)}const u={};function a(){return new le(Nt(),X())}function f(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],v=g(l,s,n,null==r?Kt(l)&&ji:r!=s&&0!=(3&l.type),o&I.Host&&i===l);return null!==v?D(t,s,v,l):u}function g(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,v=i>>20,R=o?l+v:e.directiveEnd;for(let F=r?l:l+v;F<R;F++){const z=s[F];if(F<d&&n===z||F>=d&&z.type===n)return F}if(o){const F=s[d];if(F&&sn(F)&&F.type===n)return d}return null}function D(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof po}(o)){const s=o;s.resolving&&function(e,t){throw new Ce("200",`Circular dependency in DI detected for ${e}`)}(qe(i[n]));const l=Uo(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?K(s.injectImpl):null;Ns(e,r,I.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Ao(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&K(d),Uo(l),s.resolving=!1,Oi()}}return o}function T(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function L(e,t){return!(e&I.Self||e&I.Host&&t)}class le{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return c(this._tNode,this._lView,t,r,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ut(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Hs(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Nt(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nn="__parameters__";function er(e,t,n){return ge(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,m,v){const _=d.hasOwnProperty(Nn)?d[Nn]:Object.defineProperty(d,Nn,{value:[]})[Nn];for(;_.length<=v;)_.push(null);return(_[v]=_[v]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class wt{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=rt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wg=new wt("AnalyzeForEntryComponents");function jn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),jn(r,t)):t!==e&&t.push(r)}return t}function vr(e,t){e.forEach(n=>Array.isArray(n)?vr(n,t):t(n))}function oc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ks(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function In(e,t,n){let r=$o(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Wa(e,t){const n=$o(e,t);if(n>=0)return e[1|n]}function $o(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const $i={},Ka="__NG_DI_FLAG__",qs="ngTempTokenPath",Og=/\n/gm,lc="__source",Ng=N({provide:String,useValue:N});let zi;function cc(e){const t=zi;return zi=e,t}function Lg(e,t=I.Default){if(void 0===zi)throw new Error("inject() must be called from an injection context");return null===zi?Ee(e,void 0,t):zi.get(e,t&I.Optional?null:void 0,t)}function en(e,t=I.Default){return(P||Lg)(Z(e),t)}function Qa(e){const t=[];for(let n=0;n<e.length;n++){const r=Z(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=I.Default;for(let s=0;s<r.length;s++){const l=r[s],d=kg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(en(o,i))}else t.push(en(r))}return t}function Gi(e,t){return e[Ka]=t,e.prototype[Ka]=t,e}function kg(e){return e[Ka]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Wi=Gi(er("Inject",e=>({token:e})),-1),Eo=Gi(er("Optional"),8),zo=Gi(er("SkipSelf"),4);
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
class Dc{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function qr(e){return e instanceof Dc?e.changingThisBreaksApplicationSecurity:e}
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
var Ht=(()=>((Ht=Ht||{})[Ht.NONE=0]="NONE",Ht[Ht.HTML=1]="HTML",Ht[Ht.STYLE=2]="STYLE",Ht[Ht.SCRIPT=3]="SCRIPT",Ht[Ht.URL=4]="URL",Ht[Ht.RESOURCE_URL=5]="RESOURCE_URL",Ht))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ru(e){const t=function(){const e=X();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Ht.URL,e)||"":function(e,t){const n=function(e){return e instanceof Dc&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?qr(e):function(e){return(e=String(e)).match(im)||e.match(sm)?e:"unsafe:"+e}(ae(e))}const Ac="__ngContext__";function ln(e,t){e[Ac]=t}function iu(e){const t=function(e){return e[Ac]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function au(e){return e.ngOriginalError}function Rm(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ji{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=(e=t)&&e.ngErrorLogger||Rm;var e;r(this._console,"ERROR",t),n&&r(this._console,"ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&au(t);for(;n&&au(n);)n=au(n);return n||null}}
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
const Fc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Pe))();function Er(e){return e instanceof Function?e():e}
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
var Cr=(()=>((Cr=Cr||{})[Cr.Important=1]="Important",Cr[Cr.DashCase=2]="DashCase",Cr))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Xi(e){const t=e[3];return Bt(t)?t[3]:t}function cu(e){return Bc(e[13])}function du(e){return Bc(e[4])}function Bc(e){for(;null!==e&&!Bt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ko(e,t,n,r,o){if(null!=r){let i,s=!1;Bt(r)?i=r:fn(r)&&(s=!0,r=r[0]);const l=B(r);0===e&&null!==n?null==o?Gc(t,n,l):Co(t,n,l,o||null,!0):1===e&&null!==n?Co(t,n,l,o||null,!0):2===e?function(e,t,n){const r=na(e,t);r&&function(e,t,n,r){h(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==B(n)&&Ko(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];es(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function hu(e,t,n){return h(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function Hc(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,Fr(o,-1)),n.splice(r,1)}function pu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Hc(o,r),t>0&&(e[n-1][4]=r[4]);const i=Ks(e,10+t);!function(e,t){es(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Vc(e,t){if(!(256&t[2])){const n=t[11];h(n)&&n.destroyNode&&es(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return gu(e[1],e);for(;t;){let n=null;if(fn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)fn(t)&&gu(t[1],t),t=t[3];null===t&&(t=e),fn(t)&&gu(t[1],t),n=t&&t[4]}t=n}}(t)}}function gu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof po)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):B(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&h(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&Bt(t[3])){n!==t[3]&&Hc(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function $c(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===bt.None||o===bt.Emulated)return null}return $e(r,n)}(e,t.parent,n)}function Co(e,t,n,r,o){h(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function Gc(e,t,n){h(e)?e.appendChild(t,n):t.appendChild(n)}function Wc(e,t,n,r,o){null!==r?Co(e,t,n,r,o):Gc(e,t,n)}function na(e,t){return h(e)?e.parentNode(t):t.parentNode}let Qc=function(e,t,n){return 40&e.type?$e(e,n):null};function ra(e,t,n,r){const o=$c(e,r,t),i=t[11],l=function(e,t,n){return Qc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Wc(i,o,n[d],l,!1);else Wc(i,o,n,l,!1)}function oa(e,t){if(null!==t){const n=t.type;if(3&n)return $e(t,e);if(4&n)return yu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return oa(e,r);{const o=e[t.index];return Bt(o)?yu(-1,o):B(o)}}if(32&n)return lu(t,e)()||B(e[t.index]);{const r=Zc(e,t);return null!==r?Array.isArray(r)?r[0]:oa(Xi(e[16]),r):oa(e,t.next)}}return null}function Zc(e,t){return null!==t?e[16][6].projection[t.projection]:null}function yu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return oa(r,o)}return t[7]}function vu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&ln(B(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)vu(e,t,n.child,r,o,i,!1),Ko(t,e,o,l,i);else if(32&d){const m=lu(n,r);let v;for(;v=m();)Ko(t,e,o,v,i);Ko(t,e,o,l,i)}else 16&d?Xc(e,t,r,n,o,i):Ko(t,e,o,l,i);n=s?n.projectionNext:n.next}}function es(e,t,n,r,o,i){vu(n,r,e.firstChild,t,o,i,!1)}function Xc(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)Ko(t,e,o,d[m],i);else vu(e,t,d,s[3],o,i,!0)}function ed(e,t,n){h(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Du(e,t,n){h(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function td(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nd="ng-template";function oy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==td(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function rd(e){return 4===e.type&&e.value!==nd}function iy(e,t,n){return t===(4!==e.type||n?e.value:nd)}function sy(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(Hs(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!iy(e,d,n)||""===d&&1===t.length){if(tr(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!oy(e.attrs,m,n)){if(tr(r))return!1;s=!0}continue}const _=ay(8&r?"class":d,o,rd(e),n);if(-1===_){if(tr(r))return!1;s=!0;continue}if(""!==m){let R;R=_>i?"":o[_+1].toLowerCase();const F=8&r?R:null;if(F&&-1!==td(F,m,0)||2&r&&m!==R){if(tr(r))return!1;s=!0}}}}else{if(!s&&!tr(r)&&!tr(d))return!1;if(s&&tr(d))continue;s=!1,r=d|1&r}}return tr(r)||s}function tr(e){return 0==(1&e)}function ay(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function od(e,t,n=!1){for(let r=0;r<t.length;r++)if(sy(e,t[r],n))return!0;return!1}function id(e,t){return e?":not("+t.trim()+")":t}function fy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!tr(s)&&(t+=id(i,o),o=""),r=s,i=i||!tr(r);n++}return""!==o&&(t+=id(i,o)),t}
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
       */function sd(e){ad(ot(),X(),Xt()+e,Po())}function ad(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&Lo(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ko(t,i,0,n)}pr(n)}
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
function ia(e,t){return e<<17|t<<2}function nr(e){return e>>17&32767}function Eu(e){return 2|e}function Lr(e){return(131068&e)>>2}function Cu(e,t){return-131069&e|t<<2}function _u(e){return 1|e}function vd(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Ri(o),s.contentQueries(2,t[i],i)}}}function ts(e,t,n,r,o,i,s,l,d,m){const v=t.blueprint.slice();return v[0]=o,v[2]=140|r,En(v),v[3]=v[15]=e,v[8]=n,v[10]=s||e&&e[10],v[11]=l||e&&e[11],v[12]=d||e&&e[12]||null,v[9]=m||e&&e[9]||null,v[6]=i,v[16]=2==t.type?e[16]:v,v}function Qo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=Ti(),s=Si(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),ke.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=ke.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Fn(i,!0),i}function qo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function ns(e,t,n){No(t);try{const r=e.viewQuery;null!==r&&Uu(1,r,n);const o=e.template;null!==o&&Dd(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&vd(e,t),e.staticViewQueries&&Uu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Ky(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,fo()}}function Zo(e,t,n,r){const o=t[2];if(256==(256&o))return;No(t);const i=Po();try{En(t),function(e){ke.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Dd(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&Lo(t,m,null)}else{const m=e.preOrderHooks;null!==m&&ko(t,m,0,null),Li(t,0)}if(function(e){for(let t=cu(e);null!==t;t=du(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&Fr(i,1),o[2]|=1024}}}(t),function(e){for(let t=cu(e);null!==t;t=du(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];qn(r)&&Zo(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&vd(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&Lo(t,m)}else{const m=e.contentHooks;null!==m&&ko(t,m,1),Li(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)pr(~o);else{const i=o,s=n[++r],l=n[++r];Fa(s,i),l(2,t[i])}}}finally{pr(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Yy(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Uu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&Lo(t,m)}else{const m=e.viewHooks;null!==m&&ko(t,m,2),Li(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,Fr(t[3],-1))}finally{fo()}}function Sy(e,t,n,r){const o=t[10],i=!Po(),s=Ut(t);try{i&&!s&&o.begin&&o.begin(),s&&ns(e,t,r),Zo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Dd(e,t,n,r,o){const i=Xt(),s=2&r;try{pr(-1),s&&t.length>20&&ad(e,t,20,Po()),n(r,o)}finally{pr(i)}}function Pu(e,t,n){!xs()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||vo(n,t),ln(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=sn(d);m&&Vy(t,n,d);const v=D(t,e,l,n);ln(v,t),null!==s&&$y(0,l-o,v,d,0,s),m&&(Ze(n.index,t)[8]=v)}}(e,t,n,$e(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=ke.lFrame.currentDirectiveIndex;try{pr(s);for(let d=r;d<o;d++){const m=e.data[d],v=t[d];Ai(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&Sd(m,v)}}finally{pr(-1),Ai(l)}}(e,t,n))}function Ou(e,t,n=$e){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function Cd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=ua(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function ua(e,t,n,r,o,i,s,l,d,m){const v=20+r,_=v+o,R=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Qe);return n}(v,_),F="function"==typeof m?m():m;return R[1]={type:e,blueprint:R,template:n,queries:null,viewQuery:l,declTNode:t,data:R.slice().fill(null,v),bindingStartIndex:v,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:F,incompleteFirstPass:!1}}function bd(e,t,n,r){const o=Fd(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Nd(e).push(r,o.length-1))}function Md(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Fu(e,t,n,r){let o=!1;if(xs()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];od(n,s.selectors,!1)&&(o||(o=[]),Vo(vo(n,t),e,s.type),sn(s)?(Ad(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Rd(n,e.data.length,i.length);for(let v=0;v<i.length;v++){const _=i[v];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=qo(e,t,i.length,null);for(let v=0;v<i.length;v++){const _=i[v];n.mergedAttrs=yo(n.mergedAttrs,_.hostAttrs),xd(e,n,t,m,_),Hy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const R=_.type.prototype;!l&&(R.ngOnChanges||R.ngOnInit||R.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(R.ngOnChanges||R.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const v=o[m],_=v.inputs,R=null===i||rd(t)?null:zy(_,i);s.push(R),l=Md(_,m,l),d=Md(v.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Ce("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=yo(n.mergedAttrs,n.attrs),o}function Td(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function Sd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Ad(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Hy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;sn(t)&&(n[""]=e)}}function Rd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function xd(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Qn(o.type)),s=new po(i,sn(o),null);e.blueprint[r]=s,n[r]=s,Td(e,t,0,r,qo(e,n,o.hostVars,Qe),o)}function Vy(e,t,n){const r=$e(t,e),o=Cd(n),i=e[10],s=la(e,ts(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function _r(e,t,n,r,o,i){const s=$e(e,t);!function(e,t,n,r,o,i,s){if(null==i)h(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?ae(i):s(i,r||"",o);h(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function $y(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],v=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,v):n[v]=_}}}function zy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Pd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Yy(e,t){const n=Ze(t,e);if(qn(n)){const r=n[1];80&n[2]?Zo(r,n,r.template,n[8]):n[5]>0&&Lu(n)}}function Lu(e){for(let r=cu(e);null!==r;r=du(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];Zo(s,i,s.template,i[8])}else i[5]>0&&Lu(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Ze(n[r],e);qn(o)&&o[5]>0&&Lu(o)}}function Ky(e,t){const n=Ze(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),ns(r,n,n[8])}function la(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function ku(e){for(;e;){e[2]|=64;const t=Xi(e);if(ro(e)&&!t)return e;e=t}return null}function Bu(e,t,n){const r=t[10];r.begin&&r.begin();try{Zo(e,t,e.template,n)}catch(o){throw kd(t,o),o}finally{r.end&&r.end()}}function Od(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=iu(n),o=r[1];Sy(o,r,o.template,n)}}(e[8])}function Uu(e,t,n){Ri(0),t(e,n)}const Xy=(()=>Promise.resolve(null))();function Fd(e){return e[7]||(e[7]=[])}function Nd(e){return e.cleanup||(e.cleanup=[])}function kd(e,t){const n=e[9],r=n?n.get(Ji,null):null;r&&r.handleError(t)}function jd(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function kr(e,t,n){const r=at(t,e);!function(e,t,n){h(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ca(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=pe(o,l):2==i&&(r=pe(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
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
const Hu=new wt("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bd{get(t,n=$i){if(n===$i){const r=new Error(`NullInjectorError: No provider for ${ye(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vu=new wt("Set Injector scope."),rs={},nv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let $u;function Ud(){return void 0===$u&&($u=new Bd),$u}function Hd(e,t=null,n=null,r){const o=Vd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function Vd(e,t=null,n=null,r){return new rv(e,n,t||Ud(),r)}class rv{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&vr(n,l=>this.processProvider(l,t,n)),vr([t],l=>this.processInjectorType(l,[],i)),this.records.set(Hu,Jo(void 0,this));const s=this.records.get(Vu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:ye(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=$i,r=I.Default){this.assertNotDestroyed();const o=cc(this),i=K(void 0);try{if(!(r&I.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof wt)&&Qt(t);l=d&&this.injectableDefInScope(d)?Jo(zu(t),rs):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&I.Self?Ud():this.parent).get(t,n=r&I.Optional&&n===$i?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[qs]=s[qs]||[]).unshift(ye(t)),o)throw s;return function(e,t,n,r){const o=e[qs];throw t[lc]&&o.unshift(t[lc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=ye(t);if(Array.isArray(t))o=t.map(ye).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):ye(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Og,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[qs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{K(i),cc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(ye(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=Z(t)))return!1;let o=rn(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=rn(i)),null==o)return!1;if(null!=o.imports&&!l){let v;r.push(s);try{vr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===v&&(v=[]),v.push(_))})}finally{}if(void 0!==v)for(let _=0;_<v.length;_++){const{ngModule:R,providers:F}=v[_];vr(F,z=>this.processProvider(z,R,F||et))}}this.injectorDefTypes.add(s);const d=Qn(s)||(()=>new s);this.records.set(s,Jo(d,rs));const m=o.providers;if(null!=m&&!l){const v=t;vr(m,_=>this.processProvider(_,v,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=Xo(t=Z(t))?t:Z(t&&t.provide);const i=(e=t,zd(e)?Jo(void 0,e.useValue):Jo(function(e,t,n){let r;if(Xo(e)){const o=Z(e);return Qn(o)||zu(o)}if(zd(e))r=()=>Z(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Qa(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>en(Z(e.useExisting));else{const o=Z(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return Qn(o)||zu(o);r=()=>new o(...Qa(e.deps))}return r}(e),rs));var e;if(Xo(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=Jo(void 0,rs,!0),s.factory=()=>Qa(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===rs&&(n.value=nv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=Z(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function zu(e){const t=Qt(e),n=null!==t?t.factory:Qn(e);if(null!==n)return n;if(e instanceof wt)throw new Error(`Token ${ye(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${ye(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[Et]||e[ar]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function Jo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function zd(e){return null!==e&&"object"==typeof e&&Ng in e}function Xo(e){return"function"==typeof e}let Bn=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return Hd({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return Hd({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=$i,e.NULL=new Bd,e.\u0275prov=rt({token:e,providedIn:"any",factory:()=>en(Hu)}),e.__NG_ELEMENT_ID__=-1,e})();function Dv(e,t){ho(iu(e)[1],Nt())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let da=null;function ei(){if(!da){const e=Pe.Symbol;if(e&&e.iterator)da=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(da=r)}}}return da}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function os(e){return!!Ku(e)&&(Array.isArray(e)||!(e instanceof Map)&&ei()in e)}function Ku(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wr(e,t,n){return e[t]=n}function cn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function _o(e,t,n,r){const o=cn(e,t,n);return cn(e,t+1,r)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qu(e,t,n,r){const o=X();return cn(o,Wr(),t)&&(ot(),_r(_t(),o,e,t,n,r)),Qu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pf(e,t,n,r,o,i,s,l){const d=X(),m=ot(),v=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,v=Qo(t,e,4,s||null,hn(m,l));Fu(t,n,v,hn(m,d)),ho(t,v);const _=v.tViews=ua(2,v,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,v),_.queries=t.queries.embeddedTView(v)),v}(v,m,d,t,n,r,o,i,s):m.data[v];Fn(_,!1);const R=d[11].createComment("");ra(m,d,R,_),ln(R,d),la(d,d[v]=Pd(R,d,R,_)),Kn(_)&&Pu(m,d,_),null!=s&&Ou(d,_,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gf(e){return pt(ke.lFrame.contextLView,20+e)}
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
function ss(e,t=I.Default){const n=X();return null===n?en(e,t):c(Nt(),n,Z(e),t)}function If(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function el(e,t,n){const r=X();return cn(r,Wr(),t)&&function(e,t,n,r,o,i,s,l){const d=$e(t,n);let v,m=t.inputs;!l&&null!=m&&(v=m[r])?(jd(e,n,v,r,o),Kt(t)&&function(e,t){const n=Ze(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,h(i)?i.setProperty(d,r,o):jo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(ot(),_t(),r,e,t,r[11],n,!1),el}function tl(e,t,n,r,o){const s=o?"class":"style";jd(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n,r){const o=X(),i=ot(),s=20+e,l=o[11],d=o[s]=hu(l,t,ke.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Qo(t,e,2,o,hn(l,i));return Fu(t,n,m,hn(l,s)),null!==m.attrs&&ca(m,m.attrs,!1),null!==m.mergedAttrs&&ca(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];Fn(m,!0);const v=m.mergedAttrs;null!==v&&mo(l,d,v);const _=m.classes;null!==_&&Du(l,d,_);const R=m.styles;null!==R&&ed(l,d,R),64!=(64&m.flags)&&ra(i,o,d,m),0===ke.lFrame.elementDepthCount&&ln(d,o),ke.lFrame.elementDepthCount++,Kn(m)&&(Pu(i,o,m),function(e,t,n){if(no(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Ou(o,m)}function rl(){let e=Nt();Si()?ke.lFrame.isParent=!1:(e=e.parent,Fn(e,!1));const t=e;ke.lFrame.elementDepthCount--;const n=ot();n.firstCreatePass&&(ho(n,e),no(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&tl(n,t,X(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&tl(n,t,X(),t.stylesWithoutHost,!1)}function Tf(e,t,n,r){nl(e,t,n,r),rl()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ol(e){return!!e&&"function"==typeof e.then}function Rf(e){return!!e&&"function"==typeof e.subscribe}const xf=Rf;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function il(e,t,n,r){const o=X(),i=ot(),s=Nt();return function(e,t,n,r,o,i,s,l){const d=Kn(r),v=e.firstCreatePass&&Nd(e),_=t[8],R=Fd(t);let F=!0;if(3&r.type||l){const fe=$e(r,t),be=l?l(fe):fe,q=R.length,Fe=l?tt=>l(B(tt[r.index])):r.index;if(h(n)){let tt=null;if(!l&&d&&(tt=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==tt)(tt.__ngLastListenerFn__||tt).__ngNextListenerFn__=i,tt.__ngLastListenerFn__=i,F=!1;else{i=sl(r,t,_,i,!1);const ct=n.listen(be,o,i);R.push(i,ct),v&&v.push(o,Fe,q,q+1)}}else i=sl(r,t,_,i,!0),be.addEventListener(o,i,s),R.push(i),v&&v.push(o,Fe,q,s)}else i=sl(r,t,_,i,!1);const z=r.outputs;let ue;if(F&&null!==z&&(ue=z[o])){const fe=ue.length;if(fe)for(let be=0;be<fe;be+=2){const An=t[ue[be]][ue[be+1]].subscribe(i),Mo=R.length;R.push(i,An),v&&v.push(o,r.index,Mo,-(Mo+1))}}}(i,o,o[11],s,e,t,!!n,r),il}function Ff(e,t,n,r){try{return!1!==n(r)}catch(o){return kd(e,o),!1}}function sl(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?Ze(e.index,t):t;0==(32&t[2])&&ku(l);let d=Ff(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Ff(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
       */function Nf(e=1){return function(e){return(ke.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,ke.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gf(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?nr(i):Lr(i),d=!1;for(;0!==l&&(!1===d||s);){const v=e[l+1];aD(e[l],t)&&(d=!0,e[l+1]=r?_u(v):Eu(v)),l=r?nr(v):Lr(v)}d&&(e[n+1]=r?Eu(i):_u(i))}function aD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&$o(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Gt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Wf(e){return e.substring(Gt.key,Gt.keyEnd)}function Yf(e,t){const n=Gt.textEnd;return n===t?-1:(t=Gt.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Gt.key=t,n),di(e,t,n))}function di(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function eh(e){!function(e,t,n,r){const o=ot(),i=function(e){const t=ke.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Xt()],s=th(e,n);sh(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=ke.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=as(n=ul(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=ul(o,e,t,n,r),null===i){let d=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Lr(r))return e[nr(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=ul(null,e,t,d[1],r),d=as(d,t.attrs,r),function(e,t,n,r){e[nr(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=as(r,e[i].hostAttrs,n);return as(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=nr(s),d=Lr(s);e[r]=n;let v,m=!1;if(Array.isArray(n)){const _=n;v=_[1],(null===v||$o(_,v)>0)&&(m=!0)}else v=n;if(o)if(0!==d){const R=nr(e[l+1]);e[r+1]=ia(R,l),0!==R&&(e[R+1]=Cu(e[R+1],r)),e[l+1]=function(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=ia(l,0),0!==l&&(e[l+1]=Cu(e[l+1],r)),l=r;else e[r+1]=ia(d,0),0===l?l=r:e[d+1]=Cu(e[d+1],r),d=r;m&&(e[r+1]=Eu(e[r+1])),Gf(e,v,r,!0),Gf(e,v,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&$o(i,t)>=0&&(n[r+1]=_u(n[r+1]))}(t,v,e,r,i),s=ia(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(o,null,i,r);const s=X();if(n!==Qe&&cn(s,i,n)){const l=o.data[Xt()];if(sh(l,r)&&!th(o,i)){let d=r?l.classesWithoutHost:l.stylesWithoutHost;null!==d&&(n=pe(d,n||"")),tl(o,l,s,n,r)}else!function(e,t,n,r,o,i,s,l){o===Qe&&(o=et);let d=0,m=0,v=0<o.length?o[0]:null,_=0<i.length?i[0]:null;for(;null!==v||null!==_;){const R=d<o.length?o[d+1]:void 0,F=m<i.length?i[m+1]:void 0;let ue,z=null;v===_?(d+=2,m+=2,R!==F&&(z=_,ue=F)):null===_||null!==v&&v<_?(d+=2,z=v):(m+=2,z=_,ue=F),null!==z&&oh(e,t,n,r,z,ue,s,l),v=d<o.length?o[d]:null,_=m<i.length?i[m]:null}}(o,l,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return et;const r=[],o=qr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}(In,Mr,e,!0)}function Mr(e,t){for(let n=function(e){return function(e){Gt.key=0,Gt.keyEnd=0,Gt.value=0,Gt.valueEnd=0,Gt.textEnd=e.length}(e),Yf(e,di(e,0,Gt.textEnd))}(t);n>=0;n=Yf(t,n))In(e,Wf(t),!0)}function th(e,t){return t>=e.expandoStartIndex}function ul(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=as(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function as(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),In(e,s,!!n||t[++i]))}return void 0===e?null:e}function oh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,m=d[l+1];pa(function(e){return 1==(1&e)}(m)?ih(d,t,n,o,Lr(m),s):void 0)||(pa(i)||function(e){return 2==(2&e)}(m)&&(i=ih(d,null,n,o,l,s)),function(e,t,n,r,o){const i=h(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:Cr.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=Cr.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,l?"important":"")}}}(r,s,at(Xt(),n),o,i))}function ih(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],m=Array.isArray(d),v=m?d[1]:d,_=null===v;let R=n[o+1];R===Qe&&(R=_?et:void 0);let F=_?Wa(R,r):v===r?R:void 0;if(m&&!pa(F)&&(F=Wa(d,r)),pa(F)&&(l=F,s))return l;const z=e[o+1];o=s?nr(z):Lr(z)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Wa(d,r))}return l}function pa(e){return void 0!==e}function sh(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ah(e,t=""){const n=X(),r=ot(),o=e+20,i=r.firstCreatePass?Qo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return h(e)?e.createText(t):e.createTextNode(t)}(n[11],t);ra(r,n,s,i),Fn(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ll(e){return ga("",e,""),ll}function ga(e,t,n){const r=X(),o=function(e,t,n,r){return cn(e,Wr(),n)?t+ae(n)+r:Qe}(r,e,t,n);return o!==Qe&&kr(r,Xt(),o),ga}
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
const wo=void 0;var HD=["en",[["a","p"],["AM","PM"],wo],[["AM","PM"],wo,wo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],wo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],wo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",wo,"{1} 'at' {0}",wo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let fi={};function cl(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=Sh(t);if(n)return n;const r=t.split("-")[0];if(n=Sh(r),n)return n;if("en"===r)return HD;throw new Error(`Missing locale data for the locale "${e}".`)}function Th(e){return cl(e)[je.PluralCase]}function Sh(e){return e in fi||(fi[e]=Pe.ng&&Pe.ng.common&&Pe.ng.common.locales&&Pe.ng.common.locales[e]),fi[e]}var je=(()=>((je=je||{})[je.LocaleId=0]="LocaleId",je[je.DayPeriodsFormat=1]="DayPeriodsFormat",je[je.DayPeriodsStandalone=2]="DayPeriodsStandalone",je[je.DaysFormat=3]="DaysFormat",je[je.DaysStandalone=4]="DaysStandalone",je[je.MonthsFormat=5]="MonthsFormat",je[je.MonthsStandalone=6]="MonthsStandalone",je[je.Eras=7]="Eras",je[je.FirstDayOfWeek=8]="FirstDayOfWeek",je[je.WeekendRange=9]="WeekendRange",je[je.DateFormat=10]="DateFormat",je[je.TimeFormat=11]="TimeFormat",je[je.DateTimeFormat=12]="DateTimeFormat",je[je.NumberSymbols=13]="NumberSymbols",je[je.NumberFormats=14]="NumberFormats",je[je.CurrencyCode=15]="CurrencyCode",je[je.CurrencySymbol=16]="CurrencySymbol",je[je.CurrencyName=17]="CurrencyName",je[je.Currencies=18]="Currencies",je[je.Directionality=19]="Directionality",je[je.PluralCase=20]="PluralCase",je[je.ExtraData=21]="ExtraData",je))();const ma="en-US";
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
let Ah=ma;class ep{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zE{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${ye(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let fs=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new zE,e})();function GE(){return pi(Nt(),X())}function pi(e,t){return new hs($e(e,t))}let hs=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=GE,e})();function WE(e){return e instanceof hs?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class np{}let YE=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=X(),n=Ze(Nt().index,e);return function(e){return e[11]}(fn(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),qE=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=rt({token:e,providedIn:"root",factory:()=>null}),e})();class rp{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const ZE=new rp("13.1.1"),yl={};
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
function Ca(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(B(i)),Bt(i))for(let l=10;l<i.length;l++){const d=i[l],m=d[1].firstChild;null!==m&&Ca(d[1],d,m,r)}const s=n.type;if(8&s)Ca(e,t,n.child,r);else if(32&s){const l=lu(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=Zc(t,n);if(Array.isArray(l))r.push(...l);else{const d=Xi(t[16]);Ca(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ps{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Ca(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Bt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(pu(t,r),Ks(n,r))}this._attachedToViewContainer=!1}Vc(this._lView[1],this._lView)}onDestroy(t){bd(this._lView[1],this._lView,null,t)}markForCheck(){ku(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Bu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Oo(!0);try{Bu(e,t,n)}finally{Oo(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,es(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class JE extends ps{constructor(t){super(t),this._view=t}detectChanges(){Od(this._view)}checkNoChanges(){!function(e){Oo(!0);try{Od(e)}finally{Oo(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op extends fs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ht(t);return new vl(n,this.ngModule)}}function ip(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const eC=new wt("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Fc});class vl extends ep{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(fy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ip(this.componentDef.inputs)}get outputs(){return ip(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,yl,o);return i!==yl||r===yl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(np,C),l=i.get(qE,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",v=r?function(e,t,n){if(h(e))return e.selectRootElement(t,n===bt.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):hu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?lo:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,R=function(e,t){return{components:[],scheduler:e||Fc,clean:Xy,playerHandler:t||null,flags:0}}(),F=ua(0,null,null,1,0,null,null,null,null,null),z=ts(null,F,R,_,null,null,s,d,l,i);let ue,fe;No(z);try{const be=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Qo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(ca(d,m,!0),null!==e&&(mo(o,e,m),null!==d.classes&&Du(o,e,d.classes),null!==d.styles&&ed(o,e,d.styles)));const v=r.createRenderer(e,t),_=ts(n,Cd(t),null,t.onPush?64:16,n[20],d,r,v,i||null,null);return s.firstCreatePass&&(Vo(vo(d,n),s,t.type),Ad(s,d),Rd(d,n.length,1)),la(n,_),n[20]=_}(v,this.componentDef,z,s,d);if(v)if(r)mo(d,v,["ng-version",ZE.full]);else{const{attrs:q,classes:Fe}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!tr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);q&&mo(d,v,q),Fe&&Fe.length>0&&Du(d,v,Fe.join(" "))}if(fe=Xe(F,20),void 0!==n){const q=fe.projection=[];for(let Fe=0;Fe<this.ngContentSelectors.length;Fe++){const tt=n[Fe];q.push(null!=tt?Array.from(tt):null)}}ue=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=Nt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),xd(e,r,t,qo(e,t,1,null),n));const o=D(t,e,r.directiveStart,r);ln(o,t);const i=$e(r,t);return i&&ln(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=Nt();t.contentQueries(1,s,d.directiveStart)}const l=Nt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(pr(l.index),Td(n[1],l,0,l.directiveStart,l.directiveEnd,t),Sd(t,s)),s}(be,this.componentDef,z,R,[Dv]),ns(F,z,null)}finally{fo()}return new rC(this.componentType,ue,pi(fe,z),z,fe)}}class rC extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new JE(o),this.componentType=t}get injector(){return new le(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
class gi{}class sp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mi=new Map;class lp extends gi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new op(this);const r=O(t);this._bootstrapComponents=Er(r.bootstrap),this._r3Injector=Vd(t,n,[{provide:gi,useValue:this},{provide:fs,useValue:this.componentFactoryResolver}],ye(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Bn.THROW_IF_NOT_FOUND,r=I.Default){return t===Bn||t===gi||t===Hu?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Dl extends sp{constructor(t){super(),this.moduleType=t,null!==O(t)&&function(e){const t=new Set;!function n(r){const o=O(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${ye(t)} vs ${ye(t.name)}`)}(i,mi.get(i),r),mi.set(i,r));const s=Er(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new lp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cp(e,t,n,r){return fp(X(),Lt(),e,t,n,r)}function dp(e,t,n,r,o,i){return function(e,t,n,r,o,i,s,l){const d=t+n;return function(e,t,n,r,o){const i=_o(e,t,n,r);return cn(e,t+2,o)||i}(e,d,o,i,s)?wr(e,d+3,l?r.call(l,o,i,s):r(o,i,s)):gs(e,d+3)}(X(),Lt(),e,t,n,r,o,i)}function gs(e,t){const n=e[t];return n===Qe?void 0:n}function fp(e,t,n,r,o,i){const s=t+n;return cn(e,s,o)?wr(e,s+1,i?r.call(i,o):r(o)):gs(e,s+1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yp(e,t){const n=ot();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Qn(r.type)),s=K(ss);try{const l=Uo(!1),d=i();return Uo(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,X(),o,d),d}finally{K(s)}}function vp(e,t,n){const r=e+20,o=X(),i=pt(o,r);return ms(o,r)?fp(o,Lt(),t,i.transform,n,i):i.transform(n)}function Dp(e,t,n,r){const o=e+20,i=X(),s=pt(i,o);return ms(i,o)?function(e,t,n,r,o,i,s){const l=t+n;return _o(e,l,o,i)?wr(e,l+2,s?r.call(s,o,i):r(o,i)):gs(e,l+2)}(i,Lt(),t,s.transform,n,r,s):s.transform(n,r)}function ms(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function El(e){return t=>{setTimeout(e,void 0,t)}}const Ir=class extends se.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=El(d),l&&(l=El(l)),m&&(m=El(m)));const v=super.subscribe({next:l,error:d,complete:m});return t instanceof me.w0&&t.add(v),v}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function DC(){return this._results[ei()]()}class Cl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ei(),r=Cl.prototype;r[n]||(r[n]=DC)}get changes(){return this._changes||(this._changes=new Ir)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=jn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ys=(()=>{class e{}return e.__NG_ELEMENT_ID__=_C,e})();const EC=ys,CC=class extends EC{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=ts(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),ns(n,r,t),new ps(r)}};function _C(){return _a(Nt(),X())}function _a(e,t){return 4&e.type?new CC(t,e,pi(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let wa=(()=>{class e{}return e.__NG_ELEMENT_ID__=wC,e})();function wC(){return _p(Nt(),X())}const bC=wa,Ep=class extends bC{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return pi(this._hostTNode,this._hostLView)}get injector(){return new le(this._hostTNode,this._hostLView)}get parentInjector(){const t=Ho(this._hostTNode,this._hostLView);if(Va(t)){const n=Kr(t,this._hostLView),r=Cn(t);return new le(n[1].data[r+8],n)}return new le(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Cp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new vl(ht(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(gi,null);_&&(i=_)}const v=d.create(m,o,void 0,i);return this.insert(v.hostView,l),v}insert(t,n){const r=t._lView,o=r[1];if(Bt(r[3])){const v=this.indexOf(t);if(-1!==v)this.detach(v);else{const _=r[3],R=new Ep(_,_[6],_[3]);R.detach(R.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],oc(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=yu(i,s),d=r[11],m=na(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,es(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),oc(_l(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Cp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=pu(this._lContainer,n);r&&(Ks(_l(this._lContainer),n),Vc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=pu(this._lContainer,n);return r&&null!=Ks(_l(this._lContainer),n)?new ps(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Cp(e){return e[8]}function _l(e){return e[8]||(e[8]=[])}function _p(e,t){let n;const r=t[e.index];if(Bt(r))n=r;else{let o;if(8&e.type)o=B(r);else{const i=t[11];o=i.createComment("");const s=$e(e,t);Co(i,na(i,s),o,function(e,t){return h(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Pd(r,t,o,e),la(t,n)}return new Ep(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wl{constructor(t){this.queryList=t,this.matches=null}clone(){return new wl(this.queryList)}setDirty(){this.queryList.setDirty()}}class bl{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new bl(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Rp(t,n).matches&&this.queries[n].setDirty()}}class wp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Ml{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Ml(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Il{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Il(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,TC(n,i)),this.matchTNodeWithReadOption(t,n,g(n,t,i,!1,!1))}else r===ys?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,g(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===hs||o===wa||o===ys&&4&n.type)this.addMatch(n.index,-2);else{const i=g(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function TC(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function AC(e,t,n,r){return-1===n?function(e,t){return 11&e.type?pi(e,t):4&e.type?_a(e,t):null}(t,e):-2===n?function(e,t,n){return n===hs?pi(t,e):n===ys?_a(t,e):n===wa?_p(t,e):void 0}(e,t,r):D(e,e[1],n,t)}function bp(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:AC(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Tl(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=bp(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],v=t[-d];for(let _=10;_<v.length;_++){const R=v[_];R[17]===R[3]&&Tl(R[1],R,m,r)}if(null!==v[9]){const _=v[9];for(let R=0;R<_.length;R++){const F=_[R];Tl(F[1],F,m,r)}}}}}return r}function Mp(e){const t=X(),n=ot(),r=Fs();Ri(r+1);const o=Rp(n,r);if(e.dirty&&Ut(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Tl(n,t,r,[]):bp(n,t,o,r);e.reset(i,WE),e.notifyOnChanges()}return!0}return!1}function Ip(e,t,n,r){const o=ot();if(o.firstCreatePass){const i=Nt();(function(e,t,n){null===e.queries&&(e.queries=new Ml),e.queries.track(new Il(t,n))})(o,new wp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new Cl(4==(4&n));bd(e,t,r,r.destroy),null===t[19]&&(t[19]=new bl),t[19].queries.push(new wl(r))}(o,X(),n)}function Tp(){return e=X(),t=Fs(),e[19].queries[t].queryList;var e,t}function Rp(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xp(e,t){return _a(e,t)}
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
function Ia(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ol=new wt("Application Initializer");let vi=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Ia,this.reject=Ia,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(ol(i))n.push(i);else if(xf(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(en(Ol,8))},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Kp=new wt("AppId"),ZC={provide:Kp,useFactory:function(){return`${Fl()}${Fl()}${Fl()}`},deps:[]};function Fl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Qp=new wt("Platform Initializer"),qp=new wt("Platform ID"),Zp=new wt("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jp=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ta=new wt("LocaleId"),Xp=new wt("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Nl=(()=>{class e{compileModuleSync(n){return new Dl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=Er(O(n).declarations).reduce((s,l)=>{const d=ht(l);return d&&s.push(new vl(d)),s},[]);return new JC(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const e0=(()=>Promise.resolve(0))();function Ll(e){"undefined"==typeof Zone?e0.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Sn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ir(!1),this.onMicrotaskEmpty=new Ir(!1),this.onStable=new Ir(!1),this.onError=new Ir(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=Pe.requestAnimationFrame,t=Pe.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Pe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,jl(e),e.isCheckStableRunning=!0,kl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),jl(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return eg(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),tg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return eg(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),tg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,jl(e),kl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Sn.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Sn.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,n0,Ia,Ia);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const n0={};function kl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function jl(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function eg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function tg(e){e._nesting--,kl(e)}class s0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ir,this.onMicrotaskEmpty=new Ir,this.onStable=new Ir,this.onError=new Ir}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ng=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Sn.assertNotInAngularZone(),Ll(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ll(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(en(Sn))},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})(),rg=(()=>{class e{constructor(){this._applications=new Map,Bl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Bl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();class a0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function u0(e){Bl=e}let sr,Bl=new a0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const og=new wt("AllowMultipleToken");class f0{constructor(t,n){this.name=t,this.token=n}}function ig(e,t,n=[]){const r=`Platform: ${t}`,o=new wt(r);return(i=[])=>{let s=sg();if(!s||s.injector.get(og,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:Vu,useValue:"platform"});!function(e){if(sr&&!sr.destroyed&&!sr.injector.get(og,!1))throw new Ce("400","");sr=e.get(ag);const t=e.get(Qp,null);t&&t.forEach(n=>n())}(Bn.create({providers:l,name:r}))}return function(e){const t=sg();if(!t)throw new Ce("401","");return t}()}}function sg(){return sr&&!sr.destroyed?sr:null}let ag=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new s0:("zone.js"===e?void 0:e)||new Sn({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:Sn,useValue:l}];return l.run(()=>{const m=Bn.create({providers:d,parent:this.injector,name:n.moduleType.name}),v=n.create(m),_=v.injector.get(Ji,null);if(!_)throw new Ce("402","");return l.runOutsideAngular(()=>{const R=l.onError.subscribe({next:F=>{_.handleError(F)}});v.onDestroy(()=>{Ul(this._modules,v),R.unsubscribe()})}),function(e,t,n){try{const r=n();return ol(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const R=v.injector.get(vi);return R.runInitializers(),R.donePromise.then(()=>(function(e){gt(e,"Expected localeId to be defined"),"string"==typeof e&&(Ah=e.toLowerCase().replace(/_/g,"-"))}(v.injector.get(Ta,ma)||ma),this._moduleDoBootstrap(v),v))})})}bootstrapModule(n,r=[]){const o=ug({},r);return function(e,t,n){const r=new Dl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Ds);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Ce("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ce("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(en(Bn))},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();function ug(e,t){return Array.isArray(t)?t.reduce(ug,e):Object.assign(Object.assign({},e),t)}let Ds=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new te.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new te.y(m=>{let v;this._zone.runOutsideAngular(()=>{v=this._zone.onStable.subscribe(()=>{Sn.assertNotInAngularZone(),Ll(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{Sn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{v.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,J.yG)(e),n=(0,J._6)(e,1/0),r=e;return r.length?1===r.length?(0,S.Xf)(r[0]):(0,y.J)(n)((0,ee.D)(r,t)):ne.E}(l,d.pipe((0,G.B)()))}bootstrap(n,r){if(!this._initStatus.done)throw new Ce("405","");let o;o=n instanceof ep?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(gi),l=o.create(Bn.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(ng,null),v=m&&l.injector.get(rg);return m&&v&&v.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Ul(this.components,l),v&&v.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new Ce("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Ul(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Zp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(en(Sn),en(Bn),en(Ji),en(fs),en(vi))},e.\u0275prov=rt({token:e,factory:e.\u0275fac}),e})();function Ul(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let cg=!0;function v0(){cg=!1}
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
let D0=(()=>{class e{}return e.__NG_ELEMENT_ID__=E0,e})();function E0(e){return function(e,t,n){if(Kt(e)&&!n){const r=Ze(e.index,t);return new ps(r,r)}return 47&e.type?new ps(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Nt(),X(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yg{constructor(){}supports(t){return os(t)}create(t){return new T0(t)}}const I0=(e,t)=>t;class T0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||I0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Dg(r,o,i)?n:r,l=Dg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,v=d-o;if(m!=v){for(let R=0;R<m;R++){const F=R<i.length?i[R]:i[R]=0,z=F+R;v<=z&&z<m&&(i[R]=F+1)}i[s.previousIndex]=v-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!os(t))throw new Error(`Error trying to diff '${ye(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ei()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new S0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new vg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new vg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class S0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class A0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class vg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new A0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Dg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Eg{constructor(){}supports(t){return t instanceof Map||Ku(t)}create(){return new R0}}class R0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Ku(t)))throw new Error(`Error trying to diff '${ye(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new x0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class x0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cg(){return new Aa([new yg])}let Aa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Cg()),deps:[[e,new zo,new Eo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=rt({token:e,providedIn:"root",factory:Cg}),e})();function _g(){return new Ra([new Eg])}let Ra=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||_g()),deps:[[e,new zo,new Eo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=rt({token:e,providedIn:"root",factory:_g}),e})();const O0=[new Eg],N0=new Aa([new yg]),L0=new Ra(O0),k0=ig(null,"core",[{provide:qp,useValue:"unknown"},{provide:ag,deps:[Bn]},{provide:rg,deps:[]},{provide:Jp,deps:[]}]),V0=[{provide:Ds,useClass:Ds,deps:[Sn,Bn,Ji,fs,vi]},{provide:eC,deps:[Sn],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:vi,useClass:vi,deps:[[new Eo,Ol]]},{provide:Nl,useClass:Nl,deps:[]},ZC,{provide:Aa,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return N0},deps:[]},{provide:Ra,useFactory:function(){return L0},deps:[]},{provide:Ta,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||ma},deps:[[new Wi(Ta),new Eo,new zo]]},{provide:Xp,useValue:"USD"}];
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
       */let z0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(en(Ds))},e.\u0275mod=cr({type:e}),e.\u0275inj=_n({providers:V0}),e})();
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
       */,8880:(Be,ie,M)=>{M.d(ie,{Bz:()=>Uo,lC:()=>h});var y=M(7587),S=M(8306);const{isArray:ne}=Array,{getPrototypeOf:J,prototype:ee,keys:Me}=Object;var te=M(2076),G=M(4671),N=M(4004);const{isArray:_e}=Array;var ze=M(3269),Z=M(5403),Le=M(9672);function Te(...c){const u=(0,ze.yG)(c),a=(0,ze.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(ne(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&J(c)===ee}(u)){const a=Me(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,te.D)([],u);const D=new S.y(function(c,u,a=G.y){return f=>{De(u,()=>{const{length:g}=c,D=new Array(g);let w=g,T=g;for(let L=0;L<g;L++)De(u,()=>{const le=(0,te.D)(c[L],u);let Ke=!1;le.subscribe(new Z.Q(f,Se=>{D[L]=Se,Ke||(Ke=!0,T--),T||f.next(a(D.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):G.y));return a?D.pipe(function(c){return(0,N.U)(u=>function(c,u){return _e(u)?c(...u):c(u)}(c,u))}(a)):D}function De(c,u,a){c?(0,Le.f)(a,c,u):u()}var Re=M(8189);function qe(...c){return(0,Re.J)(1)((0,te.D)(c,(0,ze.yG)(c)))}var we=M(8421);function he(c){return new S.y(u=>{(0,we.Xf)(c()).subscribe(u)})}var U=M(727),j=M(4482);function H(){return(0,j.e)((c,u)=>{let a=null;c._refCount++;const f=new Z.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,D=a;a=null,g&&(!D||g===D)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class Y extends S.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,j.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new U.w0;const a=this.getSubject();u.add(this.source.subscribe(new Z.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=U.w0.EMPTY)}return u}refCount(){return H()(this)}}var $=M(9646),V=M(1135),Oe=M(6805),Je=M(515),St=M(7579);function Ve(c,u){return(0,j.e)((a,f)=>{let g=null,D=0,w=!1;const T=()=>w&&!g&&f.complete();a.subscribe(new Z.Q(f,L=>{null==g||g.unsubscribe();let le=0;const Ke=D++;(0,we.Xf)(c(L,Ke)).subscribe(g=new Z.Q(f,Se=>f.next(u?u(L,Se,Ke,le++):Se),()=>{g=null,T()}))},()=>{w=!0,T()}))})}function tn(c,u,a,f,g){return(D,w)=>{let T=a,L=u,le=0;D.subscribe(new Z.Q(w,Ke=>{const Se=le++;L=T?c(L,Ke,Se):(T=!0,Ke),f&&w.next(L)},g&&(()=>{T&&w.next(L),w.complete()})))}}function Dt(c,u){return(0,j.e)(tn(c,u,arguments.length>=2,!0))}function Pt(c){return(0,j.e)((u,a)=>{let D,f=null,g=!1;f=u.subscribe(new Z.Q(a,void 0,void 0,w=>{D=(0,we.Xf)(c(w,Pt(c)(u))),f?(f.unsubscribe(),f=null,D.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,D.subscribe(a))})}var Vt=M(9300);function gt(c){return c<=0?()=>Je.E:(0,j.e)((u,a)=>{let f=[];u.subscribe(new Z.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}var nt=M(8068),$t=M(6590),Tr=M(576);function rt(c,u,a){const f=(0,Tr.m)(c)||u||a?{next:c,error:u,complete:a}:c;return f?(0,j.e)((g,D)=>{var w;null===(w=f.subscribe)||void 0===w||w.call(f);let T=!0;g.subscribe(new Z.Q(D,L=>{var le;null===(le=f.next)||void 0===le||le.call(f,L),D.next(L)},()=>{var L;T=!1,null===(L=f.complete)||void 0===L||L.call(f),D.complete()},L=>{var le;T=!1,null===(le=f.error)||void 0===le||le.call(f,L),D.error(L)},()=>{var L,le;T&&(null===(L=f.unsubscribe)||void 0===L||L.call(f)),null===(le=f.finalize)||void 0===le||le.call(f)}))}):G.y}var _n=M(5698),Qt=M(4351),nn=M(590),kt=M(5577),qt=M(9808);
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
       */class rn{constructor(u,a){this.id=u,this.url=a}}class Et extends rn{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class on extends rn{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class ar extends rn{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Q extends rn{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class I extends rn{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class P extends rn{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class re extends rn{constructor(u,a,f,g,D){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=D}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class K extends rn{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ee extends rn{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class de{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class ge{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ue{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ot{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class bt{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class mt{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ve="primary";class Ge{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Zt(c){return new Ge(c)}const Pe="ngNavigationCancelingError";function At(c){const u=Error("NavigationCancelingError: "+c);return u[Pe]=!0,u}function bn(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let D=0;D<f.length;D++){const w=f[D],T=c[D];if(w.startsWith(":"))g[w.substring(1)]=T;else if(w!==T.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wt(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let D=0;D<a.length;D++)if(g=a[D],!ur(c[g],u[g]))return!1;return!0}function ur(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,D)=>f[D]===g)}return c===u}function Vn(c){return Array.prototype.concat.apply([],c)}function $n(c){return c.length>0?c[c.length-1]:null}function yt(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Jt(c){return(0,y.CqO)(c)?c:(0,y.QGY)(c)?(0,te.D)(Promise.resolve(c)):(0,$.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ur={exact:function cr(c,u,a){if(!A(c.segments,u.segments)||!zn(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!cr(c.children[f],u.children[f],a))return!1;return!0},subset:Rn},lr={exact:function(c,u){return Wt(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>ur(c[a],u[a]))},ignored:()=>!0};function Sr(c,u,a){return Ur[a.paths](c.root,u.root,a.matrixParams)&&lr[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function Rn(c,u,a){return yn(c,u,u.segments,a)}function yn(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!A(g,a)||u.hasChildren()||!zn(g,a,f))}if(c.segments.length===a.length){if(!A(c.segments,a)||!zn(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!Rn(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),D=a.slice(c.segments.length);return!!(A(c.segments,g)&&zn(c.segments,g,f)&&c.children[ve])&&yn(c.children[ve],u,D,f)}}function zn(c,u,a){return u.every((f,g)=>lr[a](c[g].parameters,f.parameters))}class ht{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Zt(this.queryParams)),this._queryParamMap}toString(){return xe.serialize(this)}}class He{constructor(u,a){this.segments=u,this.children=a,this.parent=null,yt(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ne(this)}}class Yt{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Zt(this.parameters)),this._parameterMap}toString(){return It(this)}}function A(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class k{}class W{parse(u){const a=new Yn(u);return new ht(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${Mt(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${ce(a)}=${ce(g)}`).join("&"):`${ce(a)}=${ce(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const xe=new W;function Ne(c){return c.segments.map(u=>It(u)).join("/")}function Mt(c,u){if(!c.hasChildren())return Ne(c);if(u){const a=c.children[ve]?Mt(c.children[ve],!1):"",f=[];return yt(c.children,(g,D)=>{D!==ve&&f.push(`${D}:${Mt(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return yt(c.children,(f,g)=>{g===ve&&(a=a.concat(u(f,g)))}),yt(c.children,(f,g)=>{g!==ve&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===ve?[Mt(c.children[ve],!1)]:[`${g}:${Mt(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[ve]?`${Ne(c)}/${a[0]}`:`${Ne(c)}/(${a.join("//")})`}}function dt(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ce(c){return dt(c).replace(/%3B/gi,";")}function lt(c){return dt(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function jt(c){return decodeURIComponent(c)}function Gn(c){return jt(c.replace(/\+/g,"%20"))}function It(c){return`${lt(c.path)}${function(c){return Object.keys(c).map(u=>`;${lt(u)}=${lt(c[u])}`).join("")}(c.parameters)}`}const xr=/^[^\/()?;=#]+/;function vn(c){const u=c.match(xr);return u?u[0]:""}const We=/^[^=?&#]+/,Wn=/^[^&#]+/;class Yn{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new He([],{}):new He([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[ve]=new He(u,a)),f}parseSegment(){const u=vn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new Yt(jt(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=vn(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=vn(this.remaining);g&&(f=g,this.capture(f))}u[jt(a)]=jt(f)}parseQueryParam(u){const a=function(c){const u=c.match(We);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(Wn);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=Gn(a),D=Gn(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(D)}else u[g]=D}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=vn(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let D;f.indexOf(":")>-1?(D=f.substr(0,f.indexOf(":")),this.capture(D),this.capture(":")):u&&(D=ve);const w=this.parseChildren();a[D]=1===Object.keys(w).length?w[ve]:new He([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ft{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Dn(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=Dn(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=Mn(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return Mn(u,this._root).map(a=>a.value)}}function Dn(c,u){if(c===u.value)return u;for(const a of u.children){const f=Dn(c,a);if(f)return f}return null}function Mn(c,u){if(c===u.value)return[u];for(const a of u.children){const f=Mn(c,a);if(f.length)return f.unshift(u),f}return[]}class Tt{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function st(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class to extends Ft{constructor(u,a){super(u),this.snapshot=a,ro(this,u)}toString(){return this.snapshot.toString()}}function Io(c,u){const a=function(c,u){const w=new Kn([],{},{},"",{},ve,u,null,c.root,-1,{});return new sn("",new Tt(w,[]))}(c,u),f=new V.X([new Yt("",{})]),g=new V.X({}),D=new V.X({}),w=new V.X({}),T=new V.X(""),L=new Bt(f,g,w,T,D,ve,u,a.root);return L.snapshot=a.root,new to(new Tt(L,[]),a)}class Bt{constructor(u,a,f,g,D,w,T,L){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=T,this._futureSnapshot=L}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,N.U)(u=>Zt(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,N.U)(u=>Zt(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function no(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],D=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(D.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Kn{constructor(u,a,f,g,D,w,T,L,le,Ke,Se){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=T,this.routeConfig=L,this._urlSegment=le,this._lastPathIndex=Ke,this._resolve=Se}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Zt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Zt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class sn extends Ft{constructor(u,a){super(a),this.url=u,ro(this,a)}toString(){return Di(this._root)}}function ro(c,u){u.value._routerState=c,u.children.forEach(a=>ro(c,a))}function Di(c){const u=c.children.length>0?` { ${c.children.map(Di).join(", ")} } `:"";return`${c.value}${u}`}function Hr(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,Wt(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),Wt(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!Wt(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),Wt(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function oo(c,u){const a=Wt(c.params,u.params)&&function(c,u){return A(c,u)&&c.every((a,f)=>Wt(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||oo(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vr(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Vr(c,f,g);return Vr(c,f)})}(c,u,a);return new Tt(f,g)}{if(c.shouldAttach(u.value)){const D=c.retrieve(u.value);if(null!==D){const w=D.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(T=>Vr(c,T)),w}}const f=function(c){return new Bt(new V.X(c.url),new V.X(c.params),new V.X(c.queryParams),new V.X(c.fragment),new V.X(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(D=>Vr(c,D));return new Tt(f,g)}}function io(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function $r(c){return"object"==typeof c&&null!=c&&c.outlets}function To(c,u,a,f,g){let D={};return f&&yt(f,(w,T)=>{D[T]=Array.isArray(w)?w.map(L=>`${L}`):`${w}`}),new ht(a.root===c?u:Ci(a.root,c,u),D,g)}function Ci(c,u,a){const f={};return yt(c.children,(g,D)=>{f[D]=g===u?a:Ci(g,u,a)}),new He(c.segments,f)}class _i{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&io(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find($r);if(g&&g!==$n(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class so{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function dr(c,u,a){if(c||(c=new He([],{})),0===c.segments.length&&c.hasChildren())return Pr(c,u,a);const f=function(c,u,a){let f=0,g=u;const D={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return D;const w=c.segments[g],T=a[f];if($r(T))break;const L=`${T}`,le=f<a.length-1?a[f+1]:null;if(g>0&&void 0===L)break;if(L&&le&&"object"==typeof le&&void 0===le.outlets){if(!zr(L,le,w))return D;f+=2}else{if(!zr(L,{},w))return D;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const D=new He(c.segments.slice(0,f.pathIndex),{});return D.children[ve]=new He(c.segments.slice(f.pathIndex),c.children),Pr(D,0,g)}return f.match&&0===g.length?new He(c.segments,{}):f.match&&!c.hasChildren()?wi(c,u,a):f.match?Pr(c,0,g):wi(c,u,a)}function Pr(c,u,a){if(0===a.length)return new He(c.segments,{});{const f=function(c){return $r(c[0])?c[0].outlets:{[ve]:c}}(a),g={};return yt(f,(D,w)=>{"string"==typeof D&&(D=[D]),null!==D&&(g[w]=dr(c.children[w],u,D))}),yt(c.children,(D,w)=>{void 0===f[w]&&(g[w]=D)}),new He(c.segments,g)}}function wi(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const D=a[g];if($r(D)){const L=Qn(D.outlets);return new He(f,L)}if(0===g&&io(a[0])){f.push(new Yt(c.segments[u].path,ao(a[0]))),g++;continue}const w=$r(D)?D.outlets[ve]:`${D}`,T=g<a.length-1?a[g+1]:null;w&&T&&io(T)?(f.push(new Yt(w,ao(T))),g+=2):(f.push(new Yt(w,{})),g++)}return new He(f,{})}function Qn(c){const u={};return yt(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=wi(new He([],{}),0,a))}),u}function ao(c){const u={};return yt(c,(a,f)=>u[f]=`${a}`),u}function zr(c,u,a){return c==a.path&&Wt(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bi{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),Hr(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=st(a);u.children.forEach(D=>{const w=D.value.outlet;this.deactivateRoutes(D,g[w],f),delete g[w]}),yt(g,(D,w)=>{this.deactivateRouteAndItsChildren(D,f)})}deactivateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(g===D)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else D&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=st(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);if(f&&f.outlet){const w=f.outlet.detach(),T=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:T})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=st(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=st(a);u.children.forEach(D=>{this.activateRoutes(D,g[D.value.outlet],f),this.forwardEvent(new bt(D.value.snapshot))}),u.children.length&&this.forwardEvent(new Ct(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(Hr(g),g===D)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const T=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(T.contexts),w.attachRef=T.componentRef,w.route=T.route.value,w.outlet&&w.outlet.attach(T.componentRef,T.route.value),Hr(T.route.value),this.activateChildRoutes(u,null,w.children)}else{const T=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(g.snapshot),L=T?T.module.componentFactoryResolver:null;w.attachRef=null,w.route=g,w.resolver=L,w.outlet&&w.outlet.activateWith(g,L),this.activateChildRoutes(u,null,w.children)}}else this.activateChildRoutes(u,null,f)}}class uo{constructor(u,a){this.routes=u,this.module=a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pn(c){return"function"==typeof c}function On(c){return c instanceof ht}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fr=Symbol("INITIAL_VALUE");function Or(){return Ve(c=>Te(c.map(u=>u.pipe((0,_n.q)(1),function(...c){const u=(0,ze.yG)(c);return(0,j.e)((a,f)=>{(u?qe(c,a,u):qe(c,a)).subscribe(f)})}(fr)))).pipe(Dt((u,a)=>{let f=!1;return a.reduce((g,D,w)=>g!==fr?g:(D===fr&&(f=!0),f||!1!==D&&w!==a.length-1&&!On(D)?g:D),u)},fr),(0,Vt.h)(u=>u!==fr),(0,N.U)(u=>On(u)?u:!0===u),(0,_n.q)(1)))}
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
       */let h=(()=>{class c{constructor(a,f,g,D,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new y.vpe,this.deactivateEvents=new y.vpe,this.attachEvents=new y.vpe,this.detachEvents=new y.vpe,this.name=D||ve,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),T=this.parentContexts.getOrCreateContext(this.name).children,L=new C(a,T,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,L),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(y.Y36(E),y.Y36(y.s_b),y.Y36(y._Vd),y.$8M("name"),y.Y36(y.sBO))},c.\u0275dir=y.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class C{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===Bt?this.route:u===E?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let x=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=y.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&y._UZ(0,"router-outlet")},directives:[h],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];oe(f,Ae(u,f))}}function oe(c,u){c.children&&B(c.children,u)}function Ae(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function at(c){const u=c.children&&c.children.map(at),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==ve&&(a.component=x),a}function $e(c){return c.outlet||ve}function ft(c,u){const a=c.filter(f=>$e(f)===u);return a.push(...c.filter(f=>$e(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Xe={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function pt(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},Xe):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const D=(u.matcher||bn)(a,c,u);if(!D)return Object.assign({},Xe);const w={};yt(D.posParams,(L,le)=>{w[le]=L.path});const T=D.consumed.length>0?Object.assign(Object.assign({},w),D.consumed[D.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:D.consumed,lastChild:D.consumed.length,parameters:T,positionalParamSegments:null!==(f=D.posParams)&&void 0!==f?f:{}}}function Ze(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>En(c,u,f)&&$e(f)!==ve)}(c,a,f)){const w=new He(u,function(c,u,a,f){const g={};g[ve]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const D of a)if(""===D.path&&$e(D)!==ve){const w=new He([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[$e(D)]=w}return g}(c,u,f,new He(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>En(c,u,f))}(c,a,f)){const w=new He(c.segments,function(c,u,a,f,g,D){const w={};for(const T of f)if(En(c,a,T)&&!g[$e(T)]){const L=new He([],{});L._sourceSegment=c,L._segmentIndexShift="legacy"===D?c.segments.length:u.length,w[$e(T)]=L}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const D=new He(c.segments,c.children);return D._sourceSegment=c,D._segmentIndexShift=u.length,{segmentGroup:D,slicedSegments:a}}function En(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function Fr(c,u,a,f){return!!($e(c)===f||f!==ve&&En(u,a,c))&&("**"===c.path||pt(u,c,a).matched)}function ke(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Nr{constructor(u){this.segmentGroup=u||null}}class As{constructor(u){this.urlTree=u}}function xo(c){return new S.y(u=>u.error(new Nr(c)))}function Rs(c){return new S.y(u=>u.error(new As(c)))}function xs(c){return new S.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class X{constructor(u,a,f,g,D){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=D,this.allowRedirects=!0,this.ngModule=u.get(y.h0i)}apply(){const u=Ze(this.urlTree.root,[],[],this.config).segmentGroup,a=new He(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,ve).pipe((0,N.U)(D=>this.createUrlTree(Ii(D),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Pt(D=>{if(D instanceof As)return this.allowRedirects=!1,this.match(D.urlTree);throw D instanceof Nr?this.noMatchError(D):D}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,ve).pipe((0,N.U)(g=>this.createUrlTree(Ii(g),u.queryParams,u.fragment))).pipe(Pt(g=>{throw g instanceof Nr?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new He([],{[ve]:u}):u;return new ht(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,N.U)(D=>new He([],D))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const D of Object.keys(f.children))"primary"===D?g.unshift(D):g.push(D);return(0,te.D)(g).pipe((0,Qt.b)(D=>{const w=f.children[D],T=ft(a,D);return this.expandSegmentGroup(u,T,w,D).pipe((0,N.U)(L=>({segment:L,outlet:D})))}),Dt((D,w)=>(D[w.outlet]=w.segment,D),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Vt.h)((g,D)=>c(g,D,f)):G.y,gt(1),a?(0,$t.d)(u):(0,nt.T)(()=>new Oe.K))}())}expandSegment(u,a,f,g,D,w){return(0,te.D)(f).pipe((0,Qt.b)(T=>this.expandSegmentAgainstRoute(u,a,f,T,g,D,w).pipe(Pt(le=>{if(le instanceof Nr)return(0,$.of)(null);throw le}))),(0,nn.P)(T=>!!T),Pt((T,L)=>{if(T instanceof Oe.K||"EmptyError"===T.name){if(ke(a,g,D))return(0,$.of)(new He([],{}));throw new Nr(a)}throw T}))}expandSegmentAgainstRoute(u,a,f,g,D,w,T){return Fr(g,a,D,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,D,w):T&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w):xo(a):xo(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const D=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?Rs(D):this.lineralizeSegments(f,D).pipe((0,kt.z)(w=>{const T=new He(w,{});return this.expandSegment(u,T,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){const{matched:T,consumedSegments:L,lastChild:le,positionalParamSegments:Ke}=pt(a,g,D);if(!T)return xo(a);const Se=this.applyRedirectCommands(L,g.redirectTo,Ke);return g.redirectTo.startsWith("/")?Rs(Se):this.lineralizeSegments(g,Se).pipe((0,kt.z)(ut=>this.expandSegment(u,a,f,ut.concat(D.slice(le)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,D){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,$.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,N.U)(ut=>(f._loadedConfig=ut,new He(g,{})))):(0,$.of)(new He(g,{}));const{matched:w,consumedSegments:T,lastChild:L}=pt(a,f,g);if(!w)return xo(a);const le=g.slice(L);return this.getChildConfig(u,f,g).pipe((0,kt.z)(Se=>{const ut=Se.module,it=Se.routes,{segmentGroup:Nn,slicedSegments:un}=Ze(a,T,le,it),Ln=new He(Nn.segments,Nn.children);if(0===un.length&&Ln.hasChildren())return this.expandChildren(ut,it,Ln).pipe((0,N.U)(Qr=>new He(T,Qr)));if(0===it.length&&0===un.length)return(0,$.of)(new He(T,{}));const kn=$e(f)===D;return this.expandSegment(ut,Ln,it,un,kn?ve:D,!0).pipe((0,N.U)(yr=>new He(T.concat(yr.segments),yr.children)))}))}getChildConfig(u,a,f){return a.children?(0,$.of)(new uo(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,$.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,kt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,N.U)(D=>(a._loadedConfig=D,D))):(c=a,new S.y(u=>u.error(At(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,$.of)(new uo([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,$.of)(!0);const D=g.map(w=>{const T=u.get(w);let L;if((c=T)&&Pn(c.canLoad))L=T.canLoad(a,f);else{if(!Pn(T))throw new Error("Invalid CanLoad guard");L=T(a,f)}var c;return Jt(L)});return(0,$.of)(D).pipe(Or(),rt(w=>{if(!On(w))return;const T=At(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw T.url=w,T}),(0,N.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,$.of)(f);if(g.numberOfChildren>1||!g.children[ve])return xs(u.redirectTo);g=g.children[ve]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const D=this.createSegmentGroup(u,a.root,f,g);return new ht(D,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return yt(u,(g,D)=>{if("string"==typeof g&&g.startsWith(":")){const T=g.substring(1);f[D]=a[T]}else f[D]=g}),f}createSegmentGroup(u,a,f,g){const D=this.createSegments(u,a.segments,f,g);let w={};return yt(a.children,(T,L)=>{w[L]=this.createSegmentGroup(u,T,f,g)}),new He(D,w)}createSegments(u,a,f,g){return a.map(D=>D.path.startsWith(":")?this.findPosParam(u,D,g):this.findOrReturn(D,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function Ii(c){const u={};for(const f of Object.keys(c.children)){const D=Ii(c.children[f]);(D.segments.length>0||D.hasChildren())&&(u[f]=D)}return function(c){if(1===c.numberOfChildren&&c.children[ve]){const u=c.children[ve];return new He(c.segments.concat(u.segments),u.children)}return c}(new He(c.segments,u))}
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
class Ti{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class hr{constructor(u,a){this.component=u,this.route=a}}function Fn(c,u,a){const f=c._root;return co(f,u?u._root:null,a,[f.value])}function Gr(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function co(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=st(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=c.value,w=u?u.value:null,T=a?a.getContext(c.value.outlet):null;if(w&&D.routeConfig===w.routeConfig){const L=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!A(c.url,u.url);case"pathParamsOrQueryParamsChange":return!A(c.url,u.url)||!Wt(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!oo(c,u)||!Wt(c.queryParams,u.queryParams);default:return!oo(c,u)}}(w,D,D.routeConfig.runGuardsAndResolvers);L?g.canActivateChecks.push(new Ti(f)):(D.data=w.data,D._resolvedData=w._resolvedData),co(c,u,D.component?T?T.children:null:a,f,g),L&&T&&T.outlet&&T.outlet.isActivated&&g.canDeactivateChecks.push(new hr(T.outlet.component,w))}else w&&Lt(u,T,g),g.canActivateChecks.push(new Ti(f)),co(c,null,D.component?T?T.children:null:a,f,g)})(w,D[w.value.outlet],a,f.concat([w.value]),g),delete D[w.value.outlet]}),yt(D,(w,T)=>Lt(w,a.getContext(T),g)),g}function Lt(c,u,a){const f=st(c),g=c.value;yt(f,(D,w)=>{Lt(D,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new hr(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
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
class Ai{}function Fo(c){return new S.y(u=>u.error(c))}class Ri{constructor(u,a,f,g,D,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=D,this.relativeLinkResolution=w}recognize(){const u=Ze(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,ve);if(null===a)return null;const f=new Kn([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},ve,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new Tt(f,a),D=new sn(this.url,g);return this.inheritParamsAndData(D._root),D}inheritParamsAndData(u){const a=u.value,f=no(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const D of Object.keys(a.children)){const w=a.children[D],T=ft(u,D),L=this.processSegmentGroup(T,w,D);if(null===L)return null;f.push(...L)}const g=xi(f);return g.sort((u,a)=>u.value.outlet===ve?-1:a.value.outlet===ve?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const D of u){const w=this.processSegmentAgainstRoute(D,a,f,g);if(null!==w)return w}return ke(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!Fr(u,a,f,g))return null;let D,w=[],T=[];if("**"===u.path){const it=f.length>0?$n(f).parameters:{};D=new Kn(f,it,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,fo(u),$e(u),u.component,u,Pi(a),Oi(a)+f.length,Ls(u))}else{const it=pt(a,u,f);if(!it.matched)return null;w=it.consumedSegments,T=f.slice(it.lastChild),D=new Kn(w,it.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,fo(u),$e(u),u.component,u,Pi(a),Oi(a)+w.length,Ls(u))}const L=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:le,slicedSegments:Ke}=Ze(a,w,T,L.filter(it=>void 0===it.redirectTo),this.relativeLinkResolution);var c;if(0===Ke.length&&le.hasChildren()){const it=this.processChildren(L,le);return null===it?null:[new Tt(D,it)]}if(0===L.length&&0===Ke.length)return[new Tt(D,[])];const Se=$e(u)===g,ut=this.processSegment(L,le,Ke,Se?ve:g);return null===ut?null:[new Tt(D,ut)]}}function No(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function xi(c){const u=[],a=new Set;for(const f of c){if(!No(f)){u.push(f);continue}const g=u.find(D=>f.value.routeConfig===D.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=xi(f.children);u.push(new Tt(f.value,g))}return u.filter(f=>!a.has(f))}function Pi(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Oi(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function fo(c){return c.data||{}}function Ls(c){return c.resolve||{}}
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
function Fi(c){return Ve(u=>{const a=c(u);return a?(0,te.D)(a).pipe((0,N.U)(()=>u)):(0,$.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ua extends class{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ni=new y.OlP("ROUTES");class ho{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,N.U)(D=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=D.create(u);return new uo(Vn(w.injector.get(Ni,void 0,y.XFs.Self|y.XFs.Optional)).map(at),w)}),Pt(D=>{throw a._loader$=void 0,D}));return a._loader$=new Y(g,()=>new St.x).pipe(H()),a._loader$}loadModuleFactory(u){return Jt(u()).pipe((0,kt.z)(a=>a instanceof y.YKP?(0,$.of)(a):(0,te.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ko{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Li(c){throw c}function Bs(c,u,a){return u.parse("/")}function Us(c,u){return(0,$.of)(null)}const gr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},po={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let pn=(()=>{class c{constructor(a,f,g,D,w,T,L){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=D,this.config=L,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new St.x,this.errorHandler=Li,this.malformedUriErrorHandler=Bs,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Us,afterPreactivation:Us},this.urlHandlingStrategy=new ko,this.routeReuseStrategy=new Ua,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(y.h0i),this.console=w.get(y.c2e);const Se=w.get(y.R0b);this.isNgZoneEnabled=Se instanceof y.R0b&&y.R0b.isInAngularZone(),this.resetConfig(L),this.currentUrlTree=new ht(new He([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new ho(w,T,ut=>this.triggerEvent(new de(ut)),ut=>this.triggerEvent(new ge(ut))),this.routerState=Io(this.currentUrlTree,this.rootComponentType),this.transitions=new V.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,Vt.h)(g=>0!==g.id),(0,N.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),Ve(g=>{let D=!1,w=!1;return(0,$.of)(g).pipe(rt(T=>{this.currentNavigation={id:T.id,initialUrl:T.currentRawUrl,extractedUrl:T.extractedUrl,trigger:T.source,extras:T.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Ve(T=>{const L=this.browserUrlTree.toString(),le=!this.navigated||T.extractedUrl.toString()!==L||L!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||le)&&this.urlHandlingStrategy.shouldProcessUrl(T.rawUrl))return mr(T.source)&&(this.browserUrlTree=T.extractedUrl),(0,$.of)(T).pipe(Ve(Se=>{const ut=this.transitions.getValue();return f.next(new Et(Se.id,this.serializeUrl(Se.extractedUrl),Se.source,Se.restoredState)),ut!==this.transitions.getValue()?Je.E:Promise.resolve(Se)}),function(c,u,a,f){return Ve(g=>function(c,u,a,f,g){return new X(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,N.U)(D=>Object.assign(Object.assign({},g),{urlAfterRedirects:D}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),rt(Se=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:Se.urlAfterRedirects})}),function(c,u,a,f,g){return(0,kt.z)(D=>function(c,u,a,f,g="emptyOnly",D="legacy"){try{const w=new Ri(c,u,a,f,g,D).recognize();return null===w?Fo(new Ai):(0,$.of)(w)}catch(w){return Fo(w)}}(c,u,D.urlAfterRedirects,a(D.urlAfterRedirects),f,g).pipe((0,N.U)(w=>Object.assign(Object.assign({},D),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,Se=>this.serializeUrl(Se),this.paramsInheritanceStrategy,this.relativeLinkResolution),rt(Se=>{if("eager"===this.urlUpdateStrategy){if(!Se.extras.skipLocationChange){const it=this.urlHandlingStrategy.merge(Se.urlAfterRedirects,Se.rawUrl);this.setBrowserUrl(it,Se)}this.browserUrlTree=Se.urlAfterRedirects}const ut=new I(Se.id,this.serializeUrl(Se.extractedUrl),this.serializeUrl(Se.urlAfterRedirects),Se.targetSnapshot);f.next(ut)}));if(le&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:ut,extractedUrl:it,source:Nn,restoredState:un,extras:Ln}=T,kn=new Et(ut,this.serializeUrl(it),Nn,un);f.next(kn);const er=Io(it,this.rootComponentType).snapshot;return(0,$.of)(Object.assign(Object.assign({},T),{targetSnapshot:er,urlAfterRedirects:it,extras:Object.assign(Object.assign({},Ln),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=T.rawUrl,T.resolve(null),Je.E}),Fi(T=>{const{targetSnapshot:L,id:le,extractedUrl:Ke,rawUrl:Se,extras:{skipLocationChange:ut,replaceUrl:it}}=T;return this.hooks.beforePreactivation(L,{navigationId:le,appliedUrlTree:Ke,rawUrlTree:Se,skipLocationChange:!!ut,replaceUrl:!!it})}),rt(T=>{const L=new P(T.id,this.serializeUrl(T.extractedUrl),this.serializeUrl(T.urlAfterRedirects),T.targetSnapshot);this.triggerEvent(L)}),(0,N.U)(T=>Object.assign(Object.assign({},T),{guards:Fn(T.targetSnapshot,T.currentSnapshot,this.rootContexts)})),function(c,u){return(0,kt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:D,canDeactivateChecks:w}}=a;return 0===w.length&&0===D.length?(0,$.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,te.D)(c).pipe((0,kt.z)(g=>function(c,u,a,f,g){const D=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!D||0===D.length)return(0,$.of)(!0);const w=D.map(T=>{const L=Gr(T,u,g);let le;if(function(c){return c&&Pn(c.canDeactivate)}(L))le=Jt(L.canDeactivate(c,u,a,f));else{if(!Pn(L))throw new Error("Invalid CanDeactivate guard");le=Jt(L(c,u,a,f))}return le.pipe((0,nn.P)())});return(0,$.of)(w).pipe(Or())}(g.component,g.route,a,u,f)),(0,nn.P)(g=>!0!==g,!0))}(w,f,g,c).pipe((0,kt.z)(T=>T&&function(c){return"boolean"==typeof c}(T)?function(c,u,a,f){return(0,te.D)(u).pipe((0,Qt.b)(g=>qe(function(c,u){return null!==c&&u&&u(new Ue(c)),(0,$.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new Ot(c)),(0,$.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],D=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>he(()=>{const T=w.guards.map(L=>{const le=Gr(L,w.node,a);let Ke;if(function(c){return c&&Pn(c.canActivateChild)}(le))Ke=Jt(le.canActivateChild(f,c));else{if(!Pn(le))throw new Error("Invalid CanActivateChild guard");Ke=Jt(le(f,c))}return Ke.pipe((0,nn.P)())});return(0,$.of)(T).pipe(Or())}));return(0,$.of)(D).pipe(Or())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,$.of)(!0);const g=f.map(D=>he(()=>{const w=Gr(D,u,a);let T;if(function(c){return c&&Pn(c.canActivate)}(w))T=Jt(w.canActivate(u,c));else{if(!Pn(w))throw new Error("Invalid CanActivate guard");T=Jt(w(u,c))}return T.pipe((0,nn.P)())}));return(0,$.of)(g).pipe(Or())}(c,g.route,a))),(0,nn.P)(g=>!0!==g,!0))}(f,D,c,u):(0,$.of)(T)),(0,N.U)(T=>Object.assign(Object.assign({},a),{guardsResult:T})))})}(this.ngModule.injector,T=>this.triggerEvent(T)),rt(T=>{if(On(T.guardsResult)){const le=At(`Redirecting to "${this.serializeUrl(T.guardsResult)}"`);throw le.url=T.guardsResult,le}const L=new re(T.id,this.serializeUrl(T.extractedUrl),this.serializeUrl(T.urlAfterRedirects),T.targetSnapshot,!!T.guardsResult);this.triggerEvent(L)}),(0,Vt.h)(T=>!!T.guardsResult||(this.restoreHistory(T),this.cancelNavigationTransition(T,""),!1)),Fi(T=>{if(T.guards.canActivateChecks.length)return(0,$.of)(T).pipe(rt(L=>{const le=new K(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(le)}),Ve(L=>{let le=!1;return(0,$.of)(L).pipe(function(c,u){return(0,kt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,$.of)(a);let D=0;return(0,te.D)(g).pipe((0,Qt.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,$.of)({});const D={};return(0,te.D)(g).pipe((0,kt.z)(w=>function(c,u,a,f){const g=Gr(c,u,f);return Jt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe(rt(T=>{D[w]=T}))),gt(1),(0,kt.z)(()=>Object.keys(D).length===g.length?(0,$.of)(D):Je.E))}(c._resolve,c,u,f).pipe((0,N.U)(D=>(c._resolvedData=D,c.data=Object.assign(Object.assign({},c.data),no(c,a).resolve),null)))}(w.route,f,c,u)),rt(()=>D++),gt(1),(0,kt.z)(w=>D===g.length?(0,$.of)(a):Je.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),rt({next:()=>le=!0,complete:()=>{le||(this.restoreHistory(L),this.cancelNavigationTransition(L,"At least one route resolver didn't emit any value."))}}))}),rt(L=>{const le=new Ee(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(le)}))}),Fi(T=>{const{targetSnapshot:L,id:le,extractedUrl:Ke,rawUrl:Se,extras:{skipLocationChange:ut,replaceUrl:it}}=T;return this.hooks.afterPreactivation(L,{navigationId:le,appliedUrlTree:Ke,rawUrlTree:Se,skipLocationChange:!!ut,replaceUrl:!!it})}),(0,N.U)(T=>{const L=function(c,u,a){const f=Vr(c,u._root,a?a._root:void 0);return new to(f,u)}(this.routeReuseStrategy,T.targetSnapshot,T.currentRouterState);return Object.assign(Object.assign({},T),{targetRouterState:L})}),rt(T=>{this.currentUrlTree=T.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(T.urlAfterRedirects,T.rawUrl),this.routerState=T.targetRouterState,"deferred"===this.urlUpdateStrategy&&(T.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,T),this.browserUrlTree=T.urlAfterRedirects)}),((c,u,a)=>(0,N.U)(f=>(new bi(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,T=>this.triggerEvent(T)),rt({next(){D=!0},complete(){D=!0}}),function(c){return(0,j.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var T;D||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(T=this.currentNavigation)||void 0===T?void 0:T.id)===g.id&&(this.currentNavigation=null)}),Pt(T=>{if(w=!0,function(c){return c&&c[Pe]}(T)){const L=On(T.url);L||(this.navigated=!0,this.restoreHistory(g,!0));const le=new ar(g.id,this.serializeUrl(g.extractedUrl),T.message);f.next(le),L?setTimeout(()=>{const Ke=this.urlHandlingStrategy.merge(T.url,this.rawUrlTree),Se={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||mr(g.source)};this.scheduleNavigation(Ke,"imperative",null,Se,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const L=new Q(g.id,this.serializeUrl(g.extractedUrl),T);f.next(L);try{g.resolve(this.errorHandler(T))}catch(le){g.reject(le)}}return Je.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const D={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const L=Object.assign({},w);delete L.navigationId,delete L.\u0275routerPageId,0!==Object.keys(L).length&&(D.state=L)}const T=this.parseUrl(a.url);this.scheduleNavigation(T,f,w,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){B(a),this.config=a.map(at),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:D,fragment:w,queryParamsHandling:T,preserveFragment:L}=f,le=g||this.routerState.root,Ke=L?this.currentUrlTree.fragment:w;let Se=null;switch(T){case"merge":Se=Object.assign(Object.assign({},this.currentUrlTree.queryParams),D);break;case"preserve":Se=this.currentUrlTree.queryParams;break;default:Se=D||null}return null!==Se&&(Se=this.removeEmptyProps(Se)),function(c,u,a,f,g){if(0===a.length)return To(u.root,u.root,u,f,g);const D=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new _i(!0,0,c);let u=0,a=!1;const f=c.reduce((g,D,w)=>{if("object"==typeof D&&null!=D){if(D.outlets){const T={};return yt(D.outlets,(L,le)=>{T[le]="string"==typeof L?L.split("/"):L}),[...g,{outlets:T}]}if(D.segmentPath)return[...g,D.segmentPath]}return"string"!=typeof D?[...g,D]:0===w?(D.split("/").forEach((T,L)=>{0==L&&"."===T||(0==L&&""===T?a=!0:".."===T?u++:""!=T&&g.push(T))}),g):[...g,D]},[]);return new _i(a,u,f)}(a);if(D.toRoot())return To(u.root,new He([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new so(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const D=a.snapshot._urlSegment;return new so(D,D===u.root,0)}const f=io(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,D=a;for(;D>g;){if(D-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new so(f,!1,g-D)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(D,u,c),T=w.processChildren?Pr(w.segmentGroup,w.index,D.commands):dr(w.segmentGroup,w.index,D.commands);return To(w.segmentGroup,T,u,f,g)}(le,this.currentUrlTree,a,Se,null!=Ke?Ke:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=On(a)?a:this.parseUrl(a),D=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(D,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},gr):!1===f?Object.assign({},po):f,On(a))return Sr(this.currentUrlTree,a,g);const D=this.parseUrl(a);return Sr(this.currentUrlTree,D,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const D=a[g];return null!=D&&(f[g]=D),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new on(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,D,w){var T,L,le;if(this.disposed)return Promise.resolve(!1);const Ke=this.transitions.value,Se=mr(f)&&Ke&&!mr(Ke.source),ut=Ke.rawUrl.toString()===a.toString(),it=Ke.id===(null===(T=this.currentNavigation)||void 0===T?void 0:T.id);if(Se&&ut&&it)return Promise.resolve(!0);let un,Ln,kn;w?(un=w.resolve,Ln=w.reject,kn=w.promise):kn=new Promise((Qr,wt)=>{un=Qr,Ln=wt});const er=++this.navigationId;let yr;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),yr=g&&g.\u0275routerPageId?g.\u0275routerPageId:D.replaceUrl||D.skipLocationChange?null!==(L=this.browserPageId)&&void 0!==L?L:0:(null!==(le=this.browserPageId)&&void 0!==le?le:0)+1):yr=0,this.setTransition({id:er,targetPageId:yr,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:D,resolve:un,reject:Ln,promise:kn,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),kn.catch(Qr=>Promise.reject(Qr))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),D=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",D):this.location.go(g,"",D)}restoreHistory(a,f=!1){var g,D;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new ar(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function mr(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mo{}class jo{preload(u,a){return(0,$.of)(null)}}let yo=(()=>{class c{constructor(a,f,g,D){this.router=a,this.injector=g,this.preloadingStrategy=D,this.loader=new ho(g,f,L=>a.triggerEvent(new de(L)),L=>a.triggerEvent(new ge(L)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,Vt.h)(a=>a instanceof on),(0,Qt.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(y.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const D of f)if(D.loadChildren&&!D.canLoad&&D._loadedConfig){const w=D._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else D.loadChildren&&!D.canLoad?g.push(this.preloadConfig(a,D)):D.children&&g.push(this.processRoutes(a,D.children));return(0,te.D)(g).pipe((0,Re.J)(),(0,N.U)(D=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,$.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,kt.z)(D=>(f._loadedConfig=D,this.processRoutes(D.module,D.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(pn),y.LFG(y.Sil),y.LFG(y.zs3),y.LFG(mo))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})(),Bo=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Et?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof on&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof mt&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new mt(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Cn=new y.OlP("ROUTER_CONFIGURATION"),Vs=new y.OlP("ROUTER_FORROOT_GUARD"),Kr=[qt.Ye,{provide:k,useClass:W},{provide:pn,useFactory:function(c,u,a,f,g,D,w={},T,L){const le=new pn(null,c,u,a,f,g,Vn(D));return T&&(le.urlHandlingStrategy=T),L&&(le.routeReuseStrategy=L),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,le),w.enableTracing&&le.events.subscribe(Ke=>{var Se,ut;null===(Se=console.group)||void 0===Se||Se.call(console,`Router Event: ${Ke.constructor.name}`),console.log(Ke.toString()),console.log(Ke),null===(ut=console.groupEnd)||void 0===ut||ut.call(console)}),le},deps:[k,E,qt.Ye,y.zs3,y.Sil,Ni,Cn,[class{},new y.FiY],[class{},new y.FiY]]},E,{provide:Bt,useFactory:function(c){return c.routerState.root},deps:[pn]},yo,jo,class{preload(u,a){return a().pipe(Pt(()=>(0,$.of)(null)))}},{provide:Cn,useValue:{enableTracing:!1}}];function ji(){return new y.PXZ("Router",pn)}let Uo=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[Kr,Gs(a),{provide:Vs,useFactory:zs,deps:[[pn,new y.FiY,new y.tp0]]},{provide:Cn,useValue:f||{}},{provide:qt.S$,useFactory:$s,deps:[qt.lw,[new y.tBr(qt.mr),new y.FiY],Cn]},{provide:Bo,useFactory:rc,deps:[pn,qt.EM,Cn]},{provide:mo,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:jo},{provide:y.PXZ,multi:!0,useFactory:ji},[Do,{provide:y.ip1,multi:!0,useFactory:Ho,deps:[Do]},{provide:Ws,useFactory:Vo,deps:[Do]},{provide:y.tb,multi:!0,useExisting:Ws}]]}}static forChild(a){return{ngModule:c,providers:[Gs(a)]}}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(Vs,8),y.LFG(pn,8))},c.\u0275mod=y.oAB({type:c}),c.\u0275inj=y.cJS({}),c})();function rc(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new Bo(c,u,a)}function $s(c,u,a={}){return a.useHash?new qt.Do(c,u):new qt.b0(c,u)}function zs(c){return"guarded"}function Gs(c){return[{provide:y.deG,multi:!0,useValue:c},{provide:Ni,multi:!0,useValue:c}]}let Do=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new St.x}appInitializer(){return this.injector.get(qt.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(T=>f=T),D=this.injector.get(pn),w=this.injector.get(Cn);return"disabled"===w.initialNavigation?(D.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(D.hooks.afterPreactivation=()=>this.initNavigation?(0,$.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),D.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(Cn),g=this.injector.get(yo),D=this.injector.get(Bo),w=this.injector.get(pn),T=this.injector.get(y.z2F);a===T.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),D.init(),w.resetRootComponentType(T.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(y.zs3))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function Ho(c){return c.appInitializer.bind(c)}function Vo(c){return c.bootstrapListener.bind(c)}const Ws=new y.OlP("Router Initializer")}
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
       */},Be=>{Be(Be.s=6243)}]);