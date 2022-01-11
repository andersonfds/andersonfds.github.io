"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{6243:(Ue,se,M)=>{var y=M(9808),T=M(7587);
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
       */class J extends ne{static makeCurrent(){(0,y.HT)(new J)}onAndCancel(R,b,L){return R.addEventListener(b,L,!1),()=>{R.removeEventListener(b,L,!1)}}dispatchEvent(R,b){R.dispatchEvent(b)}remove(R){R.parentNode&&R.parentNode.removeChild(R)}createElement(R,b){return(b=b||this.getDefaultDocument()).createElement(R)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(R){return R.nodeType===Node.ELEMENT_NODE}isShadowRoot(R){return R instanceof DocumentFragment}getGlobalEventTarget(R,b){return"window"===b?window:"document"===b?R:"body"===b?R.body:null}getBaseHref(R){const b=(ee=ee||document.querySelector("base"),ee?ee.getAttribute("href"):null);return null==b?null:function(O){re=re||document.createElement("a"),re.setAttribute("href",O);const R=re.pathname;return"/"===R.charAt(0)?R:`/${R}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b)}resetBaseElement(){ee=null}getUserAgent(){return window.navigator.userAgent}getCookie(R){return(0,y.Mx)(document.cookie,R)}}let re,ee=null;const W=new T.OlP("TRANSITION_ID"),N=[{provide:T.ip1,useFactory:function(O,R,b){return()=>{b.get(T.CZH).donePromise.then(()=>{const L=(0,y.q)(),Q=R.querySelectorAll(`style[ng-transition="${O}"]`);for(let Ae=0;Ae<Q.length;Ae++)L.remove(Q[Ae])})}},deps:[W,y.K0,T.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ee{static init(){(0,T.VLi)(new Ee)}addToWindow(R){T.dqk.getAngularTestability=(L,Q=!0)=>{const Ae=R.findTestabilityInTree(L,Q);if(null==Ae)throw new Error("Could not find testability for element.");return Ae},T.dqk.getAllAngularTestabilities=()=>R.getAllTestabilities(),T.dqk.getAllAngularRootElements=()=>R.getAllRootElements(),T.dqk.frameworkStabilizers||(T.dqk.frameworkStabilizers=[]),T.dqk.frameworkStabilizers.push(L=>{const Q=T.dqk.getAllAngularTestabilities();let Ae=Q.length,ke=!1;const kt=function(ct){ke=ke||ct,Ae--,0==Ae&&L(ke)};Q.forEach(function(ct){ct.whenStable(kt)})})}findTestabilityInTree(R,b,L){if(null==b)return null;const Q=R.getTestability(b);return null!=Q?Q:L?(0,y.q)().isShadowRoot(b)?this.findTestabilityInTree(R,b.host,!0):this.findTestabilityInTree(R,b.parentElement,!0):null}}let he=(()=>{class O{build(){return new XMLHttpRequest}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ue=new T.OlP("EventManagerPlugins");let xe=(()=>{class O{constructor(b,L){this._zone=L,this._eventNameToPlugin=new Map,b.forEach(Q=>Q.manager=this),this._plugins=b.slice().reverse()}addEventListener(b,L,Q){return this._findPluginFor(L).addEventListener(b,L,Q)}addGlobalEventListener(b,L,Q){return this._findPluginFor(L).addGlobalEventListener(b,L,Q)}getZone(){return this._zone}_findPluginFor(b){const L=this._eventNameToPlugin.get(b);if(L)return L;const Q=this._plugins;for(let Ae=0;Ae<Q.length;Ae++){const ke=Q[Ae];if(ke.supports(b))return this._eventNameToPlugin.set(b,ke),ke}throw new Error(`No event manager plugin found for event ${b}`)}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(ue),T.LFG(T.R0b))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();class Me{constructor(R){this._doc=R}addGlobalEventListener(R,b,L){const Q=(0,y.q)().getGlobalEventTarget(this._doc,R);if(!Q)throw new Error(`Unsupported event target ${Q} for event ${b}`);return this.addEventListener(Q,b,L)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let X=(()=>{class O{constructor(){this._stylesSet=new Set}addStyles(b){const L=new Set;b.forEach(Q=>{this._stylesSet.has(Q)||(this._stylesSet.add(Q),L.add(Q))}),this.onStylesAdded(L)}onStylesAdded(b){}getAllStyles(){return Array.from(this._stylesSet)}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})(),Be=(()=>{class O extends X{constructor(b){super(),this._doc=b,this._hostNodes=new Map,this._hostNodes.set(b.head,[])}_addStylesToHost(b,L,Q){b.forEach(Ae=>{const ke=this._doc.createElement("style");ke.textContent=Ae,Q.push(L.appendChild(ke))})}addHost(b){const L=[];this._addStylesToHost(this._stylesSet,b,L),this._hostNodes.set(b,L)}removeHost(b){const L=this._hostNodes.get(b);L&&L.forEach(Ie),this._hostNodes.delete(b)}onStylesAdded(b){this._hostNodes.forEach((L,Q)=>{this._addStylesToHost(b,Q,L)})}ngOnDestroy(){this._hostNodes.forEach(b=>b.forEach(Ie))}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();function Ie(O){(0,y.q)().remove(O)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _e={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ve=/%COMP%/g;function k(O,R,b){for(let L=0;L<R.length;L++){let Q=R[L];Array.isArray(Q)?k(O,Q,b):(Q=Q.replace(ve,O),b.push(Q))}return b}function U(O){return R=>{if("__ngUnwrap__"===R)return O;!1===O(R)&&(R.preventDefault(),R.returnValue=!1)}}let $=(()=>{class O{constructor(b,L,Q){this.eventManager=b,this.sharedStylesHost=L,this.appId=Q,this.rendererByCompId=new Map,this.defaultRenderer=new H(b)}createRenderer(b,L){if(!b||!L)return this.defaultRenderer;switch(L.encapsulation){case T.ifc.Emulated:{let Q=this.rendererByCompId.get(L.id);return Q||(Q=new Mt(this.eventManager,this.sharedStylesHost,L,this.appId),this.rendererByCompId.set(L.id,Q)),Q.applyToHost(b),Q}case 1:case T.ifc.ShadowDom:return new Ge(this.eventManager,this.sharedStylesHost,b,L);default:if(!this.rendererByCompId.has(L.id)){const Q=k(L.id,L.styles,[]);this.sharedStylesHost.addStyles(Q),this.rendererByCompId.set(L.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(xe),T.LFG(Be),T.LFG(T.AFp))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();class H{constructor(R){this.eventManager=R,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(R,b){return b?document.createElementNS(_e[b]||b,R):document.createElement(R)}createComment(R){return document.createComment(R)}createText(R){return document.createTextNode(R)}appendChild(R,b){R.appendChild(b)}insertBefore(R,b,L){R&&R.insertBefore(b,L)}removeChild(R,b){R&&R.removeChild(b)}selectRootElement(R,b){let L="string"==typeof R?document.querySelector(R):R;if(!L)throw new Error(`The selector "${R}" did not match any elements`);return b||(L.textContent=""),L}parentNode(R){return R.parentNode}nextSibling(R){return R.nextSibling}setAttribute(R,b,L,Q){if(Q){b=Q+":"+b;const Ae=_e[Q];Ae?R.setAttributeNS(Ae,b,L):R.setAttribute(b,L)}else R.setAttribute(b,L)}removeAttribute(R,b,L){if(L){const Q=_e[L];Q?R.removeAttributeNS(Q,b):R.removeAttribute(`${L}:${b}`)}else R.removeAttribute(b)}addClass(R,b){R.classList.add(b)}removeClass(R,b){R.classList.remove(b)}setStyle(R,b,L,Q){Q&(T.JOm.DashCase|T.JOm.Important)?R.style.setProperty(b,L,Q&T.JOm.Important?"important":""):R.style[b]=L}removeStyle(R,b,L){L&T.JOm.DashCase?R.style.removeProperty(b):R.style[b]=""}setProperty(R,b,L){R[b]=L}setValue(R,b){R.nodeValue=b}listen(R,b,L){return"string"==typeof R?this.eventManager.addGlobalEventListener(R,b,U(L)):this.eventManager.addEventListener(R,b,U(L))}}class Mt extends H{constructor(R,b,L,Q){super(R),this.component=L;const Ae=k(Q+"-"+L.id,L.styles,[]);b.addStyles(Ae),this.contentAttr="_ngcontent-%COMP%".replace(ve,Q+"-"+L.id),this.hostAttr="_nghost-%COMP%".replace(ve,Q+"-"+L.id)}applyToHost(R){super.setAttribute(R,this.hostAttr,"")}createElement(R,b){const L=super.createElement(R,b);return super.setAttribute(L,this.contentAttr,""),L}}class Ge extends H{constructor(R,b,L,Q){super(R),this.sharedStylesHost=b,this.hostEl=L,this.shadowRoot=L.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Ae=k(Q.id,Q.styles,[]);for(let ke=0;ke<Ae.length;ke++){const kt=document.createElement("style");kt.textContent=Ae[ke],this.shadowRoot.appendChild(kt)}}nodeOrShadowRoot(R){return R===this.hostEl?this.shadowRoot:R}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(R,b){return super.appendChild(this.nodeOrShadowRoot(R),b)}insertBefore(R,b,L){return super.insertBefore(this.nodeOrShadowRoot(R),b,L)}removeChild(R,b){return super.removeChild(this.nodeOrShadowRoot(R),b)}parentNode(R){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(R)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xt=(()=>{class O extends Me{constructor(b){super(b)}supports(b){return!0}addEventListener(b,L,Q){return b.addEventListener(L,Q,!1),()=>this.removeEventListener(b,L,Q)}removeEventListener(b,L,Q){return b.removeEventListener(L,Q)}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nn=["alt","control","meta","shift"],Pt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Vt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},gt={alt:O=>O.altKey,control:O=>O.ctrlKey,meta:O=>O.metaKey,shift:O=>O.shiftKey};let it=(()=>{class O extends Me{constructor(b){super(b)}supports(b){return null!=O.parseEventName(b)}addEventListener(b,L,Q){const Ae=O.parseEventName(L),ke=O.eventCallback(Ae.fullKey,Q,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,y.q)().onAndCancel(b,Ae.domEventName,ke))}static parseEventName(b){const L=b.toLowerCase().split("."),Q=L.shift();if(0===L.length||"keydown"!==Q&&"keyup"!==Q)return null;const Ae=O._normalizeKey(L.pop());let ke="";if(nn.forEach(ct=>{const ce=L.indexOf(ct);ce>-1&&(L.splice(ce,1),ke+=ct+".")}),ke+=Ae,0!=L.length||0===Ae.length)return null;const kt={};return kt.domEventName=Q,kt.fullKey=ke,kt}static getEventFullKey(b){let L="",Q=function(O){let R=O.key;if(null==R){if(R=O.keyIdentifier,null==R)return"Unidentified";R.startsWith("U+")&&(R=String.fromCharCode(parseInt(R.substring(2),16)),3===O.location&&Vt.hasOwnProperty(R)&&(R=Vt[R]))}return Pt[R]||R}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b);return Q=Q.toLowerCase()," "===Q?Q="space":"."===Q&&(Q="dot"),nn.forEach(Ae=>{Ae!=Q&&gt[Ae](b)&&(L+=Ae+".")}),L+=Q,L}static eventCallback(b,L,Q){return Ae=>{O.getEventFullKey(Ae)===b&&Q.runGuarded(()=>L(Ae))}}static _normalizeKey(b){return"esc"===b?"escape":b}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();const Zt=(0,T.eFA)(T._c5,"browser",[{provide:T.Lbi,useValue:y.bD},{provide:T.g9A,useValue:function(){J.makeCurrent(),Ee.init()},multi:!0},{provide:y.K0,useFactory:function(){return(0,T.RDi)(document),document},deps:[]}]),mt=[{provide:T.zSh,useValue:"root"},{provide:T.qLn,useFactory:function(){return new T.qLn},deps:[]},{provide:ue,useClass:xt,multi:!0,deps:[y.K0,T.R0b,T.Lbi]},{provide:ue,useClass:it,multi:!0,deps:[y.K0]},{provide:$,useClass:$,deps:[xe,Be,T.AFp]},{provide:T.FYo,useExisting:$},{provide:X,useExisting:Be},{provide:Be,useClass:Be,deps:[y.K0]},{provide:T.dDg,useClass:T.dDg,deps:[T.R0b]},{provide:xe,useClass:xe,deps:[ue,T.R0b]},{provide:y.JF,useClass:he,deps:[]}];let bt=(()=>{class O{constructor(b){if(b)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(b){return{ngModule:O,providers:[{provide:T.AFp,useValue:b.appId},{provide:W,useExisting:T.AFp},N]}}}return O.\u0275fac=function(b){return new(b||O)(T.LFG(O,12))},O.\u0275mod=T.oAB({type:O}),O.\u0275inj=T.cJS({providers:mt,imports:[y.ez,T.hGG]}),O})();
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
var Sr=M(520),sr=M(8062),jr=M(9506);let ar=(()=>{class O{constructor(){this.title="portfolio"}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275cmp=T.Xpm({type:O,selectors:[["app-root"]],decls:1,vars:0,template:function(b,L){1&b&&T._UZ(0,"router-outlet")},directives:[sr.lC],styles:[""]}),O})();var Ar=M(8306),ur=M(576);const Fe=[{path:"",loadChildren:()=>M.e(957).then(M.bind(M,3957)).then(O=>O.LandingModule)}],Lt=[{provide:Sr.TP,useClass:(()=>{class O{constructor(){}intercept(b,L){return b.url.startsWith("/")?function(O,R){const b=(0,ur.m)(O)?O:()=>O,L=Q=>Q.error(b());return new Ar.y(L)}(()=>new Error('Url must not start with "/" to follow our convention')):(b.url.startsWith("http")||(b=b.clone({url:"https://anderson.free.mockoapp.net/"+b.url})),L.handle(b))}}return O.\u0275fac=function(b){return new(b||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})(),multi:!0}];let yn=(()=>{class O{}return O.\u0275fac=function(b){return new(b||O)},O.\u0275mod=T.oAB({type:O,bootstrap:[ar]}),O.\u0275inj=T.cJS({providers:Lt,imports:[[bt,sr.Bz.forRoot(Fe,{useHash:!0}),Sr.JF,jr.x]]}),O})();(0,T.G48)(),Zt().bootstrapModule(yn).catch(O=>console.error(O))},9506:(Ue,se,M)=>{M.d(se,{x:()=>Ce,w:()=>ee});var y=M(9808),T=M(7587);const ne=function(re,ge,W){return{width:re,height:ge,borderRadius:W}},J=function(re){return{rtl:re}};let ee=(()=>{class re{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return re.\u0275fac=function(W){return new(W||re)},re.\u0275cmp=T.Xpm({type:re,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(W,z){2&W&&T.Tol(z.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(W,z){1&W&&T._UZ(0,"div",0),2&W&&T.Q6J("ngStyle",T.kEZ(2,ne,z.width,z.shimmerHeight,z.shimmerBorderRadius))("ngClass",T.VKq(6,J,"rtl"===z.direction))},directives:[y.PC,y.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),re})(),Ce=(()=>{class re{}return re.\u0275fac=function(W){return new(W||re)},re.\u0275mod=T.oAB({type:re}),re.\u0275inj=T.cJS({imports:[[y.ez]]}),re})()},1135:(Ue,se,M)=>{M.d(se,{X:()=>T});var y=M(7579);class T extends y.x{constructor(J){super(),this._value=J}get value(){return this.getValue()}_subscribe(J){const ee=super._subscribe(J);return!ee.closed&&J.next(this._value),ee}getValue(){const{hasError:J,thrownError:ee,_value:Ce}=this;if(J)throw ee;return this._throwIfClosed(),Ce}next(J){super.next(this._value=J)}}},8306:(Ue,se,M)=>{M.d(se,{y:()=>z});var y=M(2961),T=M(727),ne=M(8822),J=M(4671);var re=M(2416),ge=M(576),W=M(2806);let z=(()=>{class ue{constructor(Me){Me&&(this._subscribe=Me)}lift(Me){const X=new ue;return X.source=this,X.operator=Me,X}subscribe(Me,X,Be){const Ie=function(ue){return ue&&ue instanceof y.Lv||function(ue){return ue&&(0,ge.m)(ue.next)&&(0,ge.m)(ue.error)&&(0,ge.m)(ue.complete)}(ue)&&(0,T.Nn)(ue)}(Me)?Me:new y.Hp(Me,X,Be);return(0,W.x)(()=>{const{operator:_e,source:ve}=this;Ie.add(_e?_e.call(Ie,ve):ve?this._subscribe(Ie):this._trySubscribe(Ie))}),Ie}_trySubscribe(Me){try{return this._subscribe(Me)}catch(X){Me.error(X)}}forEach(Me,X){return new(X=N(X))((Be,Ie)=>{let _e;_e=this.subscribe(ve=>{try{Me(ve)}catch(Pe){Ie(Pe),null==_e||_e.unsubscribe()}},Ie,Be)})}_subscribe(Me){var X;return null===(X=this.source)||void 0===X?void 0:X.subscribe(Me)}[ne.L](){return this}pipe(...Me){return function(ue){return 0===ue.length?J.y:1===ue.length?ue[0]:function(Me){return ue.reduce((X,Be)=>Be(X),Me)}}(Me)(this)}toPromise(Me){return new(Me=N(Me))((X,Be)=>{let Ie;this.subscribe(_e=>Ie=_e,_e=>Be(_e),()=>X(Ie))})}}return ue.create=xe=>new ue(xe),ue})();function N(ue){var xe;return null!==(xe=null!=ue?ue:re.v.Promise)&&void 0!==xe?xe:Promise}},7579:(Ue,se,M)=>{M.d(se,{x:()=>re});var y=M(8306),T=M(727);const J=(0,M(3888).d)(W=>function(){W(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ee=M(8737),Ce=M(2806);let re=(()=>{class W extends y.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(N){const Ee=new ge(this,this);return Ee.operator=N,Ee}_throwIfClosed(){if(this.closed)throw new J}next(N){(0,Ce.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const Ee=this.observers.slice();for(const he of Ee)he.next(N)}})}error(N){(0,Ce.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=N;const{observers:Ee}=this;for(;Ee.length;)Ee.shift().error(N)}})}complete(){(0,Ce.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:N}=this;for(;N.length;)N.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var N;return(null===(N=this.observers)||void 0===N?void 0:N.length)>0}_trySubscribe(N){return this._throwIfClosed(),super._trySubscribe(N)}_subscribe(N){return this._throwIfClosed(),this._checkFinalizedStatuses(N),this._innerSubscribe(N)}_innerSubscribe(N){const{hasError:Ee,isStopped:he,observers:ue}=this;return Ee||he?T.Lc:(ue.push(N),new T.w0(()=>(0,ee.P)(ue,N)))}_checkFinalizedStatuses(N){const{hasError:Ee,thrownError:he,isStopped:ue}=this;Ee?N.error(he):ue&&N.complete()}asObservable(){const N=new y.y;return N.source=this,N}}return W.create=(z,N)=>new ge(z,N),W})();class ge extends re{constructor(z,N){super(),this.destination=z,this.source=N}next(z){var N,Ee;null===(Ee=null===(N=this.destination)||void 0===N?void 0:N.next)||void 0===Ee||Ee.call(N,z)}error(z){var N,Ee;null===(Ee=null===(N=this.destination)||void 0===N?void 0:N.error)||void 0===Ee||Ee.call(N,z)}complete(){var z,N;null===(N=null===(z=this.destination)||void 0===z?void 0:z.complete)||void 0===N||N.call(z)}_subscribe(z){var N,Ee;return null!==(Ee=null===(N=this.source)||void 0===N?void 0:N.subscribe(z))&&void 0!==Ee?Ee:T.Lc}}},2961:(Ue,se,M)=>{M.d(se,{Hp:()=>he,Lv:()=>Ee});var y=M(576),T=M(727),ne=M(2416),J=M(7849);function ee(){}const Ce=W("C",void 0,void 0);function W(Be,Ie,_e){return{kind:Be,value:Ie,error:_e}}var z=M(3410),N=M(2806);class Ee extends T.w0{constructor(Ie){super(),this.isStopped=!1,Ie?(this.destination=Ie,(0,T.Nn)(Ie)&&Ie.add(this)):this.destination=X}static create(Ie,_e,ve){return new he(Ie,_e,ve)}next(Ie){this.isStopped?Me(W("N",Ie,void 0),this):this._next(Ie)}error(Ie){this.isStopped?Me(W("E",void 0,Ie),this):(this.isStopped=!0,this._error(Ie))}complete(){this.isStopped?Me(Ce,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Ie){this.destination.next(Ie)}_error(Ie){try{this.destination.error(Ie)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class he extends Ee{constructor(Ie,_e,ve){let Pe;if(super(),(0,y.m)(Ie))Pe=Ie;else if(Ie){let ae;({next:Pe,error:_e,complete:ve}=Ie),this&&ne.v.useDeprecatedNextContext?(ae=Object.create(Ie),ae.unsubscribe=()=>this.unsubscribe()):ae=Ie,Pe=null==Pe?void 0:Pe.bind(ae),_e=null==_e?void 0:_e.bind(ae),ve=null==ve?void 0:ve.bind(ae)}this.destination={next:Pe?ue(Pe):ee,error:ue(null!=_e?_e:xe),complete:ve?ue(ve):ee}}}function ue(Be,Ie){return(..._e)=>{try{Be(..._e)}catch(ve){ne.v.useDeprecatedSynchronousErrorHandling?(0,N.O)(ve):(0,J.h)(ve)}}}function xe(Be){throw Be}function Me(Be,Ie){const{onStoppedNotification:_e}=ne.v;_e&&z.z.setTimeout(()=>_e(Be,Ie))}const X={closed:!0,next:ee,error:xe,complete:ee}},727:(Ue,se,M)=>{M.d(se,{Lc:()=>Ce,w0:()=>ee,Nn:()=>re});var y=M(576);const ne=(0,M(3888).d)(W=>function(N){W(this),this.message=N?`${N.length} errors occurred during unsubscription:\n${N.map((Ee,he)=>`${he+1}) ${Ee.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=N});var J=M(8737);class ee{constructor(z){this.initialTeardown=z,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let z;if(!this.closed){this.closed=!0;const{_parentage:N}=this;if(N)if(this._parentage=null,Array.isArray(N))for(const ue of N)ue.remove(this);else N.remove(this);const{initialTeardown:Ee}=this;if((0,y.m)(Ee))try{Ee()}catch(ue){z=ue instanceof ne?ue.errors:[ue]}const{_teardowns:he}=this;if(he){this._teardowns=null;for(const ue of he)try{ge(ue)}catch(xe){z=null!=z?z:[],xe instanceof ne?z=[...z,...xe.errors]:z.push(xe)}}if(z)throw new ne(z)}}add(z){var N;if(z&&z!==this)if(this.closed)ge(z);else{if(z instanceof ee){if(z.closed||z._hasParent(this))return;z._addParent(this)}(this._teardowns=null!==(N=this._teardowns)&&void 0!==N?N:[]).push(z)}}_hasParent(z){const{_parentage:N}=this;return N===z||Array.isArray(N)&&N.includes(z)}_addParent(z){const{_parentage:N}=this;this._parentage=Array.isArray(N)?(N.push(z),N):N?[N,z]:z}_removeParent(z){const{_parentage:N}=this;N===z?this._parentage=null:Array.isArray(N)&&(0,J.P)(N,z)}remove(z){const{_teardowns:N}=this;N&&(0,J.P)(N,z),z instanceof ee&&z._removeParent(this)}}ee.EMPTY=(()=>{const W=new ee;return W.closed=!0,W})();const Ce=ee.EMPTY;function re(W){return W instanceof ee||W&&"closed"in W&&(0,y.m)(W.remove)&&(0,y.m)(W.add)&&(0,y.m)(W.unsubscribe)}function ge(W){(0,y.m)(W)?W():W.unsubscribe()}},2416:(Ue,se,M)=>{M.d(se,{v:()=>y});const y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Ue,se,M)=>{M.d(se,{E:()=>T});const T=new(M(8306).y)(ee=>ee.complete())},2076:(Ue,se,M)=>{M.d(se,{D:()=>qe});var y=M(8421),T=M(9672),ne=M(4482),J=M(5403);function ee(we,pe=0){return(0,ne.e)((j,k)=>{j.subscribe(new J.Q(k,U=>(0,T.f)(k,we,()=>k.next(U),pe),()=>(0,T.f)(k,we,()=>k.complete(),pe),U=>(0,T.f)(k,we,()=>k.error(U),pe)))})}function Ce(we,pe=0){return(0,ne.e)((j,k)=>{k.add(we.schedule(()=>j.subscribe(k),pe))})}var W=M(8306),N=M(2202),Ee=M(576);function ue(we,pe){if(!we)throw new Error("Iterable cannot be null");return new W.y(j=>{(0,T.f)(j,pe,()=>{const k=we[Symbol.asyncIterator]();(0,T.f)(j,pe,()=>{k.next().then(U=>{U.done?j.complete():j.next(U.value)})},0,!0)})})}var xe=M(3670),Me=M(8239),X=M(1144),Be=M(6495),Ie=M(2206),_e=M(4532),ve=M(3260);function qe(we,pe){return pe?function(we,pe){if(null!=we){if((0,xe.c)(we))return function(we,pe){return(0,y.Xf)(we).pipe(Ce(pe),ee(pe))}(we,pe);if((0,X.z)(we))return function(we,pe){return new W.y(j=>{let k=0;return pe.schedule(function(){k===we.length?j.complete():(j.next(we[k++]),j.closed||this.schedule())})})}(we,pe);if((0,Me.t)(we))return function(we,pe){return(0,y.Xf)(we).pipe(Ce(pe),ee(pe))}(we,pe);if((0,Ie.D)(we))return ue(we,pe);if((0,Be.T)(we))return function(we,pe){return new W.y(j=>{let k;return(0,T.f)(j,pe,()=>{k=we[N.h](),(0,T.f)(j,pe,()=>{let U,K;try{({value:U,done:K}=k.next())}catch($){return void j.error($)}K?j.complete():j.next(U)},0,!0)}),()=>(0,Ee.m)(null==k?void 0:k.return)&&k.return()})}(we,pe);if((0,ve.L)(we))return function(we,pe){return ue((0,ve.Q)(we),pe)}(we,pe)}throw(0,_e.z)(we)}(we,pe):(0,y.Xf)(we)}},8421:(Ue,se,M)=>{M.d(se,{Xf:()=>he});var y=M(5987),T=M(1144),ne=M(8239),J=M(8306),ee=M(3670),Ce=M(2206),re=M(4532),ge=M(6495),W=M(3260),z=M(576),N=M(7849),Ee=M(8822);function he(ve){if(ve instanceof J.y)return ve;if(null!=ve){if((0,ee.c)(ve))return function(ve){return new J.y(Pe=>{const ae=ve[Ee.L]();if((0,z.m)(ae.subscribe))return ae.subscribe(Pe);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(ve);if((0,T.z)(ve))return function(ve){return new J.y(Pe=>{for(let ae=0;ae<ve.length&&!Pe.closed;ae++)Pe.next(ve[ae]);Pe.complete()})}(ve);if((0,ne.t)(ve))return function(ve){return new J.y(Pe=>{ve.then(ae=>{Pe.closed||(Pe.next(ae),Pe.complete())},ae=>Pe.error(ae)).then(null,N.h)})}(ve);if((0,Ce.D)(ve))return Be(ve);if((0,ge.T)(ve))return function(ve){return new J.y(Pe=>{for(const ae of ve)if(Pe.next(ae),Pe.closed)return;Pe.complete()})}(ve);if((0,W.L)(ve))return function(ve){return Be((0,W.Q)(ve))}(ve)}throw(0,re.z)(ve)}function Be(ve){return new J.y(Pe=>{(function(ve,Pe){var ae,qe,we,pe;return(0,y.mG)(this,void 0,void 0,function*(){try{for(ae=(0,y.KL)(ve);!(qe=yield ae.next()).done;)if(Pe.next(qe.value),Pe.closed)return}catch(j){we={error:j}}finally{try{qe&&!qe.done&&(pe=ae.return)&&(yield pe.call(ae))}finally{if(we)throw we.error}}Pe.complete()})})(ve,Pe).catch(ae=>Pe.error(ae))})}},9646:(Ue,se,M)=>{M.d(se,{of:()=>ne});var y=M(3269),T=M(2076);function ne(...J){const ee=(0,y.yG)(J);return(0,T.D)(J,ee)}},5403:(Ue,se,M)=>{M.d(se,{Q:()=>T});var y=M(2961);class T extends y.Lv{constructor(J,ee,Ce,re,ge){super(J),this.onFinalize=ge,this._next=ee?function(W){try{ee(W)}catch(z){J.error(z)}}:super._next,this._error=re?function(W){try{re(W)}catch(z){J.error(z)}finally{this.unsubscribe()}}:super._error,this._complete=Ce?function(){try{Ce()}catch(W){J.error(W)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var J;const{closed:ee}=this;super.unsubscribe(),!ee&&(null===(J=this.onFinalize)||void 0===J||J.call(this))}}},4351:(Ue,se,M)=>{M.d(se,{b:()=>ne});var y=M(5577),T=M(576);function ne(J,ee){return(0,T.m)(ee)?(0,y.z)(J,ee,1):(0,y.z)(J,1)}},6590:(Ue,se,M)=>{M.d(se,{d:()=>ne});var y=M(4482),T=M(5403);function ne(J){return(0,y.e)((ee,Ce)=>{let re=!1;ee.subscribe(new T.Q(Ce,ge=>{re=!0,Ce.next(ge)},()=>{re||Ce.next(J),Ce.complete()}))})}},9300:(Ue,se,M)=>{M.d(se,{h:()=>ne});var y=M(4482),T=M(5403);function ne(J,ee){return(0,y.e)((Ce,re)=>{let ge=0;Ce.subscribe(new T.Q(re,W=>J.call(ee,W,ge++)&&re.next(W)))})}},590:(Ue,se,M)=>{M.d(se,{P:()=>re});var y=M(6805),T=M(9300),ne=M(5698),J=M(6590),ee=M(8068),Ce=M(4671);function re(ge,W){const z=arguments.length>=2;return N=>N.pipe(ge?(0,T.h)((Ee,he)=>ge(Ee,he,N)):Ce.y,(0,ne.q)(1),z?(0,J.d)(W):(0,ee.T)(()=>new y.K))}},4004:(Ue,se,M)=>{M.d(se,{U:()=>ne});var y=M(4482),T=M(5403);function ne(J,ee){return(0,y.e)((Ce,re)=>{let ge=0;Ce.subscribe(new T.Q(re,W=>{re.next(J.call(ee,W,ge++))}))})}},8189:(Ue,se,M)=>{M.d(se,{J:()=>ne});var y=M(5577),T=M(4671);function ne(J=1/0){return(0,y.z)(T.y,J)}},5577:(Ue,se,M)=>{M.d(se,{z:()=>ge});var y=M(4004),T=M(8421),ne=M(4482),ee=(M(9672),M(5403)),re=M(576);function ge(W,z,N=1/0){return(0,re.m)(z)?ge((Ee,he)=>(0,y.U)((ue,xe)=>z(Ee,ue,he,xe))((0,T.Xf)(W(Ee,he))),N):("number"==typeof z&&(N=z),(0,ne.e)((Ee,he)=>function(W,z,N,Ee,he,ue,xe,Me){const X=[];let Be=0,Ie=0,_e=!1;const ve=()=>{_e&&!X.length&&!Be&&z.complete()},Pe=qe=>Be<Ee?ae(qe):X.push(qe),ae=qe=>{Be++;let we=!1;(0,T.Xf)(N(qe,Ie++)).subscribe(new ee.Q(z,pe=>{z.next(pe)},()=>{we=!0},void 0,()=>{if(we)try{for(Be--;X.length&&Be<Ee;){const pe=X.shift();ae(pe)}ve()}catch(pe){z.error(pe)}}))};return W.subscribe(new ee.Q(z,Pe,()=>{_e=!0,ve()})),()=>{}}(Ee,he,W,N)))}},3099:(Ue,se,M)=>{M.d(se,{B:()=>Ce});var y=M(2076),T=M(5698),ne=M(7579),J=M(2961),ee=M(4482);function Ce(ge={}){const{connector:W=(()=>new ne.x),resetOnError:z=!0,resetOnComplete:N=!0,resetOnRefCountZero:Ee=!0}=ge;return he=>{let ue=null,xe=null,Me=null,X=0,Be=!1,Ie=!1;const _e=()=>{null==xe||xe.unsubscribe(),xe=null},ve=()=>{_e(),ue=Me=null,Be=Ie=!1},Pe=()=>{const ae=ue;ve(),null==ae||ae.unsubscribe()};return(0,ee.e)((ae,qe)=>{X++,!Ie&&!Be&&_e();const we=Me=null!=Me?Me:W();qe.add(()=>{X--,0===X&&!Ie&&!Be&&(xe=re(Pe,Ee))}),we.subscribe(qe),ue||(ue=new J.Hp({next:pe=>we.next(pe),error:pe=>{Ie=!0,_e(),xe=re(ve,z,pe),we.error(pe)},complete:()=>{Be=!0,_e(),xe=re(ve,N),we.complete()}}),(0,y.D)(ae).subscribe(ue))})(he)}}function re(ge,W,...z){return!0===W?(ge(),null):!1===W?null:W(...z).pipe((0,T.q)(1)).subscribe(()=>ge())}},5698:(Ue,se,M)=>{M.d(se,{q:()=>J});var y=M(515),T=M(4482),ne=M(5403);function J(ee){return ee<=0?()=>y.E:(0,T.e)((Ce,re)=>{let ge=0;Ce.subscribe(new ne.Q(re,W=>{++ge<=ee&&(re.next(W),ee<=ge&&re.complete())}))})}},8505:(Ue,se,M)=>{M.d(se,{b:()=>ee});var y=M(576),T=M(4482),ne=M(5403),J=M(4671);function ee(Ce,re,ge){const W=(0,y.m)(Ce)||re||ge?{next:Ce,error:re,complete:ge}:Ce;return W?(0,T.e)((z,N)=>{var Ee;null===(Ee=W.subscribe)||void 0===Ee||Ee.call(W);let he=!0;z.subscribe(new ne.Q(N,ue=>{var xe;null===(xe=W.next)||void 0===xe||xe.call(W,ue),N.next(ue)},()=>{var ue;he=!1,null===(ue=W.complete)||void 0===ue||ue.call(W),N.complete()},ue=>{var xe;he=!1,null===(xe=W.error)||void 0===xe||xe.call(W,ue),N.error(ue)},()=>{var ue,xe;he&&(null===(ue=W.unsubscribe)||void 0===ue||ue.call(W)),null===(xe=W.finalize)||void 0===xe||xe.call(W)}))}):J.y}},8068:(Ue,se,M)=>{M.d(se,{T:()=>J});var y=M(6805),T=M(4482),ne=M(5403);function J(Ce=ee){return(0,T.e)((re,ge)=>{let W=!1;re.subscribe(new ne.Q(ge,z=>{W=!0,ge.next(z)},()=>W?ge.complete():ge.error(Ce())))})}function ee(){return new y.K}},3410:(Ue,se,M)=>{M.d(se,{z:()=>y});const y={setTimeout(...T){const{delegate:ne}=y;return((null==ne?void 0:ne.setTimeout)||setTimeout)(...T)},clearTimeout(T){const{delegate:ne}=y;return((null==ne?void 0:ne.clearTimeout)||clearTimeout)(T)},delegate:void 0}},2202:(Ue,se,M)=>{M.d(se,{h:()=>T});const T="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},8822:(Ue,se,M)=>{M.d(se,{L:()=>y});const y="function"==typeof Symbol&&Symbol.observable||"@@observable"},6805:(Ue,se,M)=>{M.d(se,{K:()=>T});const T=(0,M(3888).d)(ne=>function(){ne(this),this.name="EmptyError",this.message="no elements in sequence"})},3269:(Ue,se,M)=>{M.d(se,{jO:()=>J,yG:()=>ee,_6:()=>Ce});var y=M(576),T=M(3532);function ne(re){return re[re.length-1]}function J(re){return(0,y.m)(ne(re))?re.pop():void 0}function ee(re){return(0,T.K)(ne(re))?re.pop():void 0}function Ce(re,ge){return"number"==typeof ne(re)?re.pop():ge}},8737:(Ue,se,M)=>{function y(T,ne){if(T){const J=T.indexOf(ne);0<=J&&T.splice(J,1)}}M.d(se,{P:()=>y})},3888:(Ue,se,M)=>{function y(T){const J=T(ee=>{Error.call(ee),ee.stack=(new Error).stack});return J.prototype=Object.create(Error.prototype),J.prototype.constructor=J,J}M.d(se,{d:()=>y})},2806:(Ue,se,M)=>{M.d(se,{x:()=>ne,O:()=>J});var y=M(2416);let T=null;function ne(ee){if(y.v.useDeprecatedSynchronousErrorHandling){const Ce=!T;if(Ce&&(T={errorThrown:!1,error:null}),ee(),Ce){const{errorThrown:re,error:ge}=T;if(T=null,re)throw ge}}else ee()}function J(ee){y.v.useDeprecatedSynchronousErrorHandling&&T&&(T.errorThrown=!0,T.error=ee)}},9672:(Ue,se,M)=>{function y(T,ne,J,ee=0,Ce=!1){const re=ne.schedule(function(){J(),Ce?T.add(this.schedule(null,ee)):this.unsubscribe()},ee);if(T.add(re),!Ce)return re}M.d(se,{f:()=>y})},4671:(Ue,se,M)=>{function y(T){return T}M.d(se,{y:()=>y})},1144:(Ue,se,M)=>{M.d(se,{z:()=>y});const y=T=>T&&"number"==typeof T.length&&"function"!=typeof T},2206:(Ue,se,M)=>{M.d(se,{D:()=>T});var y=M(576);function T(ne){return Symbol.asyncIterator&&(0,y.m)(null==ne?void 0:ne[Symbol.asyncIterator])}},576:(Ue,se,M)=>{function y(T){return"function"==typeof T}M.d(se,{m:()=>y})},3670:(Ue,se,M)=>{M.d(se,{c:()=>ne});var y=M(8822),T=M(576);function ne(J){return(0,T.m)(J[y.L])}},6495:(Ue,se,M)=>{M.d(se,{T:()=>ne});var y=M(2202),T=M(576);function ne(J){return(0,T.m)(null==J?void 0:J[y.h])}},8239:(Ue,se,M)=>{M.d(se,{t:()=>T});var y=M(576);function T(ne){return(0,y.m)(null==ne?void 0:ne.then)}},3260:(Ue,se,M)=>{M.d(se,{Q:()=>ne,L:()=>J});var y=M(5987),T=M(576);function ne(ee){return(0,y.FC)(this,arguments,function*(){const re=ee.getReader();try{for(;;){const{value:ge,done:W}=yield(0,y.qq)(re.read());if(W)return yield(0,y.qq)(void 0);yield yield(0,y.qq)(ge)}}finally{re.releaseLock()}})}function J(ee){return(0,T.m)(null==ee?void 0:ee.getReader)}},3532:(Ue,se,M)=>{M.d(se,{K:()=>T});var y=M(576);function T(ne){return ne&&(0,y.m)(ne.schedule)}},4482:(Ue,se,M)=>{M.d(se,{A:()=>T,e:()=>ne});var y=M(576);function T(J){return(0,y.m)(null==J?void 0:J.lift)}function ne(J){return ee=>{if(T(ee))return ee.lift(function(Ce){try{return J(Ce,this)}catch(re){this.error(re)}});throw new TypeError("Unable to lift unknown Observable type")}}},7849:(Ue,se,M)=>{M.d(se,{h:()=>ne});var y=M(2416),T=M(3410);function ne(J){T.z.setTimeout(()=>{const{onUnhandledError:ee}=y.v;if(!ee)throw J;ee(J)})}},4532:(Ue,se,M)=>{function y(T){return new TypeError(`You provided ${null!==T&&"object"==typeof T?"an invalid object":`'${T}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}M.d(se,{z:()=>y})},5987:(Ue,se,M)=>{function ge(j,k,U,K){return new(U||(U=Promise))(function(H,Le){function et(xt){try{Ge(K.next(xt))}catch(nn){Le(nn)}}function Mt(xt){try{Ge(K.throw(xt))}catch(nn){Le(nn)}}function Ge(xt){xt.done?H(xt.value):function(H){return H instanceof U?H:new U(function(Le){Le(H)})}(xt.value).then(et,Mt)}Ge((K=K.apply(j,k||[])).next())})}function X(j){return this instanceof X?(this.v=j,this):new X(j)}function Be(j,k,U){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var $,K=U.apply(j,k||[]),H=[];return $={},Le("next"),Le("throw"),Le("return"),$[Symbol.asyncIterator]=function(){return this},$;function Le(Et){K[Et]&&($[Et]=function(Pt){return new Promise(function(Vt,gt){H.push([Et,Pt,Vt,gt])>1||et(Et,Pt)})})}function et(Et,Pt){try{!function(Et){Et.value instanceof X?Promise.resolve(Et.value.v).then(Ge,xt):nn(H[0][2],Et)}(K[Et](Pt))}catch(Vt){nn(H[0][3],Vt)}}function Ge(Et){et("next",Et)}function xt(Et){et("throw",Et)}function nn(Et,Pt){Et(Pt),H.shift(),H.length&&et(H[0][0],H[0][1])}}function _e(j){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var U,k=j[Symbol.asyncIterator];return k?k.call(j):(j=function(j){var k="function"==typeof Symbol&&Symbol.iterator,U=k&&j[k],K=0;if(U)return U.call(j);if(j&&"number"==typeof j.length)return{next:function(){return j&&K>=j.length&&(j=void 0),{value:j&&j[K++],done:!j}}};throw new TypeError(k?"Object is not iterable.":"Symbol.iterator is not defined.")}(j),U={},K("next"),K("throw"),K("return"),U[Symbol.asyncIterator]=function(){return this},U);function K(H){U[H]=j[H]&&function(Le){return new Promise(function(et,Mt){!function(H,Le,et,Mt){Promise.resolve(Mt).then(function(Ge){H({value:Ge,done:et})},Le)}(et,Mt,(Le=j[H](Le)).done,Le.value)})}}}M.d(se,{mG:()=>ge,qq:()=>X,FC:()=>Be,KL:()=>_e})},9808:(Ue,se,M)=>{M.d(se,{mr:()=>Ie,Ov:()=>Br,ez:()=>On,K0:()=>re,uU:()=>Hr,Do:()=>ve,V_:()=>z,Ye:()=>Pe,S$:()=>X,mk:()=>An,sg:()=>Gn,O5:()=>zn,PC:()=>Bt,RF:()=>vn,n9:()=>zt,b0:()=>_e,lw:()=>ge,EM:()=>Si,JF:()=>Ai,w_:()=>Ce,bD:()=>no,q:()=>ne,Mx:()=>It,HT:()=>ee});var y=M(7587);
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
       */let T=null;function ne(){return T}function ee(p){T||(T=p)}class Ce{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const re=new y.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ge=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return(0,y.LFG)(N)},providedIn:"platform"}),p})();const z=new y.OlP("Location Initialized");let N=(()=>{class p extends ge{constructor(h){super(),this._doc=h,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ne().getBaseHref(this._doc)}onPopState(h){const C=ne().getGlobalEventTarget(this._doc,"window");return C.addEventListener("popstate",h,!1),()=>C.removeEventListener("popstate",h)}onHashChange(h){const C=ne().getGlobalEventTarget(this._doc,"window");return C.addEventListener("hashchange",h,!1),()=>C.removeEventListener("hashchange",h)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(h){this.location.pathname=h}pushState(h,C,x){Ee()?this._history.pushState(h,C,x):this.location.hash=x}replaceState(h,C,x){Ee()?this._history.replaceState(h,C,x):this.location.hash=x}forward(){this._history.forward()}back(){this._history.back()}historyGo(h=0){this._history.go(h)}getState(){return this._history.state}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(re))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new N((0,y.LFG)(re))},providedIn:"platform"}),p})();function Ee(){return!!window.history.pushState}
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
function ue(p,E){if(0==p.length)return E;if(0==E.length)return p;let h=0;return p.endsWith("/")&&h++,E.startsWith("/")&&h++,2==h?p+E.substring(1):1==h?p+E:p+"/"+E}function xe(p){const E=p.match(/#|\?|$/),h=E&&E.index||p.length;return p.slice(0,h-("/"===p[h-1]?1:0))+p.slice(h)}function Me(p){return p&&"?"!==p[0]?"?"+p:p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let X=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return function(p){const E=(0,y.LFG)(re).location;return new _e((0,y.LFG)(ge),E&&E.origin||"")}()},providedIn:"root"}),p})();const Ie=new y.OlP("appBaseHref");let _e=(()=>{class p extends X{constructor(h,C){if(super(),this._platformLocation=h,this._removeListenerFns=[],null==C&&(C=this._platformLocation.getBaseHrefFromDOM()),null==C)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=C}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}prepareExternalUrl(h){return ue(this._baseHref,h)}path(h=!1){const C=this._platformLocation.pathname+Me(this._platformLocation.search),x=this._platformLocation.hash;return x&&h?`${C}${x}`:C}pushState(h,C,x,B){const ie=this.prepareExternalUrl(x+Me(B));this._platformLocation.pushState(h,C,ie)}replaceState(h,C,x,B){const ie=this.prepareExternalUrl(x+Me(B));this._platformLocation.replaceState(h,C,ie)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(ge),y.LFG(Ie,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),ve=(()=>{class p extends X{constructor(h,C){super(),this._platformLocation=h,this._baseHref="",this._removeListenerFns=[],null!=C&&(this._baseHref=C)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}path(h=!1){let C=this._platformLocation.hash;return null==C&&(C="#"),C.length>0?C.substring(1):C}prepareExternalUrl(h){const C=ue(this._baseHref,h);return C.length>0?"#"+C:C}pushState(h,C,x,B){let ie=this.prepareExternalUrl(x+Me(B));0==ie.length&&(ie=this._platformLocation.pathname),this._platformLocation.pushState(h,C,ie)}replaceState(h,C,x,B){let ie=this.prepareExternalUrl(x+Me(B));0==ie.length&&(ie=this._platformLocation.pathname),this._platformLocation.replaceState(h,C,ie)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(ge),y.LFG(Ie,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),Pe=(()=>{class p{constructor(h,C){this._subject=new y.vpe,this._urlChangeListeners=[],this._platformStrategy=h;const x=this._platformStrategy.getBaseHref();this._platformLocation=C,this._baseHref=xe(we(x)),this._platformStrategy.onPopState(B=>{this._subject.emit({url:this.path(!0),pop:!0,state:B.state,type:B.type})})}path(h=!1){return this.normalize(this._platformStrategy.path(h))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(h,C=""){return this.path()==this.normalize(h+Me(C))}normalize(h){return p.stripTrailingSlash(function(p,E){return p&&E.startsWith(p)?E.substring(p.length):E}(this._baseHref,we(h)))}prepareExternalUrl(h){return h&&"/"!==h[0]&&(h="/"+h),this._platformStrategy.prepareExternalUrl(h)}go(h,C="",x=null){this._platformStrategy.pushState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Me(C)),x)}replaceState(h,C="",x=null){this._platformStrategy.replaceState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Me(C)),x)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformStrategy).historyGo)||void 0===x||x.call(C,h)}onUrlChange(h){this._urlChangeListeners.push(h),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(C=>{this._notifyUrlChangeListeners(C.url,C.state)}))}_notifyUrlChangeListeners(h="",C){this._urlChangeListeners.forEach(x=>x(h,C))}subscribe(h,C,x){return this._subject.subscribe({next:h,error:C,complete:x})}}return p.normalizeQueryParams=Me,p.joinWithSlash=ue,p.stripTrailingSlash=xe,p.\u0275fac=function(h){return new(h||p)(y.LFG(X),y.LFG(ge))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new Pe((0,y.LFG)(X),(0,y.LFG)(ge))},providedIn:"root"}),p})();
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
var k=(()=>((k=k||{})[k.Zero=0]="Zero",k[k.One=1]="One",k[k.Two=2]="Two",k[k.Few=3]="Few",k[k.Many=4]="Many",k[k.Other=5]="Other",k))(),U=(()=>((U=U||{})[U.Format=0]="Format",U[U.Standalone=1]="Standalone",U))(),K=(()=>((K=K||{})[K.Narrow=0]="Narrow",K[K.Abbreviated=1]="Abbreviated",K[K.Wide=2]="Wide",K[K.Short=3]="Short",K))(),$=(()=>(($=$||{})[$.Short=0]="Short",$[$.Medium=1]="Medium",$[$.Long=2]="Long",$[$.Full=3]="Full",$))(),H=(()=>((H=H||{})[H.Decimal=0]="Decimal",H[H.Group=1]="Group",H[H.List=2]="List",H[H.PercentSign=3]="PercentSign",H[H.PlusSign=4]="PlusSign",H[H.MinusSign=5]="MinusSign",H[H.Exponential=6]="Exponential",H[H.SuperscriptingExponent=7]="SuperscriptingExponent",H[H.PerMille=8]="PerMille",H[H.Infinity=9]="Infinity",H[H.NaN=10]="NaN",H[H.TimeSeparator=11]="TimeSeparator",H[H.CurrencyDecimal=12]="CurrencyDecimal",H[H.CurrencyGroup=13]="CurrencyGroup",H))();function Vt(p,E){return yt((0,y.cg1)(p)[y.wAp.DateFormat],E)}function gt(p,E){return yt((0,y.cg1)(p)[y.wAp.TimeFormat],E)}function it(p,E){return yt((0,y.cg1)(p)[y.wAp.DateTimeFormat],E)}function $t(p,E){const h=(0,y.cg1)(p),C=h[y.wAp.NumberSymbols][E];if(void 0===C){if(E===H.CurrencyDecimal)return h[y.wAp.NumberSymbols][H.Decimal];if(E===H.CurrencyGroup)return h[y.wAp.NumberSymbols][H.Group]}return C}const mt=y.kL8;function bt(p){if(!p[y.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${p[y.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function yt(p,E){for(let h=E;h>-1;h--)if(void 0!==p[h])return p[h];throw new Error("Locale data API: locale data undefined")}function Dn(p){const[E,h]=p.split(":");return{hours:+E,minutes:+h}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,oe={},Y=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var De=(()=>((De=De||{})[De.Short=0]="Short",De[De.ShortGMT=1]="ShortGMT",De[De.Long=2]="Long",De[De.Extended=3]="Extended",De))(),de=(()=>((de=de||{})[de.FullYear=0]="FullYear",de[de.Month=1]="Month",de[de.Date=2]="Date",de[de.Hours=3]="Hours",de[de.Minutes=4]="Minutes",de[de.Seconds=5]="Seconds",de[de.FractionalSeconds=6]="FractionalSeconds",de[de.Day=7]="Day",de))(),me=(()=>((me=me||{})[me.DayPeriods=0]="DayPeriods",me[me.Days=1]="Days",me[me.Months=2]="Months",me[me.Eras=3]="Eras",me))();function $e(p,E,h,C){let x=function(p){if(ar(p))return p;if("number"==typeof p&&!isNaN(p))return new Date(p);if("string"==typeof p){if(p=p.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p)){const[x,B=1,ie=1]=p.split("-").map(Te=>+Te);return Ct(x,B-1,ie)}const h=parseFloat(p);if(!isNaN(p-h))return new Date(h);let C;if(C=p.match(P))return function(p){const E=new Date(0);let h=0,C=0;const x=p[8]?E.setUTCFullYear:E.setFullYear,B=p[8]?E.setUTCHours:E.setHours;p[9]&&(h=Number(p[9]+p[10]),C=Number(p[9]+p[11])),x.call(E,Number(p[1]),Number(p[2])-1,Number(p[3]));const ie=Number(p[4]||0)-h,Te=Number(p[5]||0)-C,Ze=Number(p[6]||0),Xe=Math.floor(1e3*parseFloat("0."+(p[7]||0)));return B.call(E,ie,Te,Ze,Xe),E}(C)}const E=new Date(p);if(!ar(E))throw new Error(`Unable to convert "${p}" into a date`);return E}(p);E=Ot(h,E)||E;let Te,ie=[];for(;E;){if(Te=Y.exec(E),!Te){ie.push(E);break}{ie=ie.concat(Te.slice(1));const ht=ie.pop();if(!ht)break;E=ht}}let Ze=x.getTimezoneOffset();C&&(Ze=Lr(C,Ze),x=function(p,E,h){const x=p.getTimezoneOffset();return function(p,E){return(p=new Date(p.getTime())).setMinutes(p.getMinutes()+E),p}(p,-1*(Lr(E,x)-x))}(x,C));let Xe="";return ie.forEach(ht=>{const Je=function(p){if(at[p])return at[p];let E;switch(p){case"G":case"GG":case"GGG":E=Oe(me.Eras,K.Abbreviated);break;case"GGGG":E=Oe(me.Eras,K.Wide);break;case"GGGGG":E=Oe(me.Eras,K.Narrow);break;case"y":E=He(de.FullYear,1,0,!1,!0);break;case"yy":E=He(de.FullYear,2,0,!0,!0);break;case"yyy":E=He(de.FullYear,3,0,!1,!0);break;case"yyyy":E=He(de.FullYear,4,0,!1,!0);break;case"Y":E=Tr(1);break;case"YY":E=Tr(2,!0);break;case"YYY":E=Tr(3);break;case"YYYY":E=Tr(4);break;case"M":case"L":E=He(de.Month,1,1);break;case"MM":case"LL":E=He(de.Month,2,1);break;case"MMM":E=Oe(me.Months,K.Abbreviated);break;case"MMMM":E=Oe(me.Months,K.Wide);break;case"MMMMM":E=Oe(me.Months,K.Narrow);break;case"LLL":E=Oe(me.Months,K.Abbreviated,U.Standalone);break;case"LLLL":E=Oe(me.Months,K.Wide,U.Standalone);break;case"LLLLL":E=Oe(me.Months,K.Narrow,U.Standalone);break;case"w":E=Vn(1);break;case"ww":E=Vn(2);break;case"W":E=Vn(1,!0);break;case"d":E=He(de.Date,1);break;case"dd":E=He(de.Date,2);break;case"c":case"cc":E=He(de.Day,1);break;case"ccc":E=Oe(me.Days,K.Abbreviated,U.Standalone);break;case"cccc":E=Oe(me.Days,K.Wide,U.Standalone);break;case"ccccc":E=Oe(me.Days,K.Narrow,U.Standalone);break;case"cccccc":E=Oe(me.Days,K.Short,U.Standalone);break;case"E":case"EE":case"EEE":E=Oe(me.Days,K.Abbreviated);break;case"EEEE":E=Oe(me.Days,K.Wide);break;case"EEEEE":E=Oe(me.Days,K.Narrow);break;case"EEEEEE":E=Oe(me.Days,K.Short);break;case"a":case"aa":case"aaa":E=Oe(me.DayPeriods,K.Abbreviated);break;case"aaaa":E=Oe(me.DayPeriods,K.Wide);break;case"aaaaa":E=Oe(me.DayPeriods,K.Narrow);break;case"b":case"bb":case"bbb":E=Oe(me.DayPeriods,K.Abbreviated,U.Standalone,!0);break;case"bbbb":E=Oe(me.DayPeriods,K.Wide,U.Standalone,!0);break;case"bbbbb":E=Oe(me.DayPeriods,K.Narrow,U.Standalone,!0);break;case"B":case"BB":case"BBB":E=Oe(me.DayPeriods,K.Abbreviated,U.Format,!0);break;case"BBBB":E=Oe(me.DayPeriods,K.Wide,U.Format,!0);break;case"BBBBB":E=Oe(me.DayPeriods,K.Narrow,U.Format,!0);break;case"h":E=He(de.Hours,1,-12);break;case"hh":E=He(de.Hours,2,-12);break;case"H":E=He(de.Hours,1);break;case"HH":E=He(de.Hours,2);break;case"m":E=He(de.Minutes,1);break;case"mm":E=He(de.Minutes,2);break;case"s":E=He(de.Seconds,1);break;case"ss":E=He(de.Seconds,2);break;case"S":E=He(de.FractionalSeconds,1);break;case"SS":E=He(de.FractionalSeconds,2);break;case"SSS":E=He(de.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":E=Cn(De.Short);break;case"ZZZZZ":E=Cn(De.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":E=Cn(De.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":E=Cn(De.Long);break;default:return null}return at[p]=E,E}(ht);Xe+=Je?Je(x,h,Ze):"''"===ht?"'":ht.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),Xe}function Ct(p,E,h){const C=new Date(0);return C.setFullYear(p,E,h),C.setHours(0,0,0),C}function Ot(p,E){const h=function(p){return(0,y.cg1)(p)[y.wAp.LocaleId]}(p);if(oe[h]=oe[h]||{},oe[h][E])return oe[h][E];let C="";switch(E){case"shortDate":C=Vt(p,$.Short);break;case"mediumDate":C=Vt(p,$.Medium);break;case"longDate":C=Vt(p,$.Long);break;case"fullDate":C=Vt(p,$.Full);break;case"shortTime":C=gt(p,$.Short);break;case"mediumTime":C=gt(p,$.Medium);break;case"longTime":C=gt(p,$.Long);break;case"fullTime":C=gt(p,$.Full);break;case"short":const x=Ot(p,"shortTime"),B=Ot(p,"shortDate");C=_t(it(p,$.Short),[x,B]);break;case"medium":const ie=Ot(p,"mediumTime"),Te=Ot(p,"mediumDate");C=_t(it(p,$.Medium),[ie,Te]);break;case"long":const Ze=Ot(p,"longTime"),Xe=Ot(p,"longDate");C=_t(it(p,$.Long),[Ze,Xe]);break;case"full":const ht=Ot(p,"fullTime"),Je=Ot(p,"fullDate");C=_t(it(p,$.Full),[ht,Je])}return C&&(oe[h][E]=C),C}function _t(p,E){return E&&(p=p.replace(/\{([^}]+)}/g,function(h,C){return null!=E&&C in E?E[C]:h})),p}function Se(p,E,h="-",C,x){let B="";(p<0||x&&p<=0)&&(x?p=1-p:(p=-p,B=h));let ie=String(p);for(;ie.length<E;)ie="0"+ie;return C&&(ie=ie.substr(ie.length-E)),B+ie}function He(p,E,h=0,C=!1,x=!1){return function(B,ie){let Te=function(p,E){switch(p){case de.FullYear:return E.getFullYear();case de.Month:return E.getMonth();case de.Date:return E.getDate();case de.Hours:return E.getHours();case de.Minutes:return E.getMinutes();case de.Seconds:return E.getSeconds();case de.FractionalSeconds:return E.getMilliseconds();case de.Day:return E.getDay();default:throw new Error(`Unknown DateType value "${p}".`)}}(p,B);if((h>0||Te>-h)&&(Te+=h),p===de.Hours)0===Te&&-12===h&&(Te=12);else if(p===de.FractionalSeconds)return function(p,E){return Se(p,3).substr(0,E)}(Te,E);const Ze=$t(ie,H.MinusSign);return Se(Te,E,Ze,C,x)}}function Oe(p,E,h=U.Format,C=!1){return function(x,B){return function(p,E,h,C,x,B){switch(h){case me.Months:return function(p,E,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.MonthsFormat],C[y.wAp.MonthsStandalone]],E);return yt(B,h)}(E,x,C)[p.getMonth()];case me.Days:return function(p,E,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.DaysFormat],C[y.wAp.DaysStandalone]],E);return yt(B,h)}(E,x,C)[p.getDay()];case me.DayPeriods:const ie=p.getHours(),Te=p.getMinutes();if(B){const Xe=function(p){const E=(0,y.cg1)(p);return bt(E),(E[y.wAp.ExtraData][2]||[]).map(C=>"string"==typeof C?Dn(C):[Dn(C[0]),Dn(C[1])])}(E),ht=function(p,E,h){const C=(0,y.cg1)(p);bt(C);const B=yt([C[y.wAp.ExtraData][0],C[y.wAp.ExtraData][1]],E)||[];return yt(B,h)||[]}(E,x,C),Je=Xe.findIndex(pt=>{if(Array.isArray(pt)){const[tt,Ut]=pt,Wn=ie>=tt.hours&&Te>=tt.minutes,Kn=ie<Ut.hours||ie===Ut.hours&&Te<Ut.minutes;if(tt.hours<Ut.hours){if(Wn&&Kn)return!0}else if(Wn||Kn)return!0}else if(pt.hours===ie&&pt.minutes===Te)return!0;return!1});if(-1!==Je)return ht[Je]}return function(p,E,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.DayPeriodsFormat],C[y.wAp.DayPeriodsStandalone]],E);return yt(B,h)}(E,x,C)[ie<12?0:1];case me.Eras:return function(p,E){return yt((0,y.cg1)(p)[y.wAp.Eras],E)}(E,C)[p.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${h}`)}}(x,B,p,E,h,C)}}function Cn(p){return function(E,h,C){const x=-1*C,B=$t(h,H.MinusSign),ie=x>0?Math.floor(x/60):Math.ceil(x/60);switch(p){case De.Short:return(x>=0?"+":"")+Se(ie,2,B)+Se(Math.abs(x%60),2,B);case De.ShortGMT:return"GMT"+(x>=0?"+":"")+Se(ie,1,B);case De.Long:return"GMT"+(x>=0?"+":"")+Se(ie,2,B)+":"+Se(Math.abs(x%60),2,B);case De.Extended:return 0===C?"Z":(x>=0?"+":"")+Se(ie,2,B)+":"+Se(Math.abs(x%60),2,B);default:throw new Error(`Unknown zone width "${p}"`)}}}function ir(p){return Ct(p.getFullYear(),p.getMonth(),p.getDate()+(4-p.getDay()))}function Vn(p,E=!1){return function(h,C){let x;if(E){const B=new Date(h.getFullYear(),h.getMonth(),1).getDay()-1,ie=h.getDate();x=1+Math.floor((ie+B)/7)}else{const B=ir(h),ie=function(p){const E=Ct(p,0,1).getDay();return Ct(p,0,1+(E<=4?4:11)-E)}(B.getFullYear()),Te=B.getTime()-ie.getTime();x=1+Math.round(Te/6048e5)}return Se(x,p,$t(C,H.MinusSign))}}function Tr(p,E=!1){return function(h,C){return Se(ir(h).getFullYear(),p,$t(C,H.MinusSign),E)}}const at={};function Lr(p,E){p=p.replace(/:/g,"");const h=Date.parse("Jan 01, 1970 00:00:00 "+p)/6e4;return isNaN(h)?E:h}function ar(p){return p instanceof Date&&!isNaN(p.valueOf())}
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
class We{}let Qt=(()=>{class p extends We{constructor(h){super(),this.locale=h}getPluralCategory(h,C){switch(mt(C||this.locale)(h)){case k.Zero:return"zero";case k.One:return"one";case k.Two:return"two";case k.Few:return"few";case k.Many:return"many";default:return"other"}}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(y.soG))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})();
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
       */let An=(()=>{class p{constructor(h,C,x,B){this._iterableDiffers=h,this._keyValueDiffers=C,this._ngEl=x,this._renderer=B,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(h){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof h?h.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(h){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof h?h.split(/\s+/):h,this._rawClass&&((0,y.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const h=this._iterableDiffer.diff(this._rawClass);h&&this._applyIterableChanges(h)}else if(this._keyValueDiffer){const h=this._keyValueDiffer.diff(this._rawClass);h&&this._applyKeyValueChanges(h)}}_applyKeyValueChanges(h){h.forEachAddedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachChangedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachRemovedItem(C=>{C.previousValue&&this._toggleClass(C.key,!1)})}_applyIterableChanges(h){h.forEachAddedItem(C=>{if("string"!=typeof C.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,y.AaK)(C.item)}`);this._toggleClass(C.item,!0)}),h.forEachRemovedItem(C=>this._toggleClass(C.item,!1))}_applyClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!0)):Object.keys(h).forEach(C=>this._toggleClass(C,!!h[C])))}_removeClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!1)):Object.keys(h).forEach(C=>this._toggleClass(C,!1)))}_toggleClass(h,C){(h=h.trim())&&h.split(/\s+/g).forEach(x=>{C?this._renderer.addClass(this._ngEl.nativeElement,x):this._renderer.removeClass(this._ngEl.nativeElement,x)})}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.ZZ4),y.Y36(y.aQg),y.Y36(y.SBq),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),p})();
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
class Rn{constructor(E,h,C,x){this.$implicit=E,this.ngForOf=h,this.index=C,this.count=x}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Gn=(()=>{class p{constructor(h,C,x){this._viewContainer=h,this._template=C,this._differs=x,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(h){this._ngForOf=h,this._ngForOfDirty=!0}set ngForTrackBy(h){this._trackByFn=h}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(h){h&&(this._template=h)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const h=this._ngForOf;!this._differ&&h&&(this._differ=this._differs.find(h).create(this.ngForTrackBy))}if(this._differ){const h=this._differ.diff(this._ngForOf);h&&this._applyChanges(h)}}_applyChanges(h){const C=this._viewContainer;h.forEachOperation((x,B,ie)=>{if(null==x.previousIndex)C.createEmbeddedView(this._template,new Rn(x.item,this._ngForOf,-1,-1),null===ie?void 0:ie);else if(null==ie)C.remove(null===B?void 0:B);else if(null!==B){const Te=C.get(B);C.move(Te,ie),Ye(Te,x)}});for(let x=0,B=C.length;x<B;x++){const Te=C.get(x).context;Te.index=x,Te.count=B,Te.ngForOf=this._ngForOf}h.forEachIdentityChange(x=>{Ye(C.get(x.currentIndex),x)})}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(y.ZZ4))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),p})();function Ye(p,E){p.context.$implicit=E.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let zn=(()=>{class p{constructor(h,C){this._viewContainer=h,this._context=new Xr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=C}set ngIf(h){this._context.$implicit=this._context.ngIf=h,this._updateView()}set ngIfThen(h){xn("ngIfThen",h),this._thenTemplateRef=h,this._thenViewRef=null,this._updateView()}set ngIfElse(h){xn("ngIfElse",h),this._elseTemplateRef=h,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),p})();class Xr{constructor(){this.$implicit=null,this.ngIf=null}}function xn(p,E){if(E&&!E.createEmbeddedView)throw new Error(`${p} must be a TemplateRef, but received '${(0,y.AaK)(E)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Tt{constructor(E,h){this._viewContainerRef=E,this._templateRef=h,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(E){E&&!this._created?this.create():!E&&this._created&&this.destroy()}}let vn=(()=>{class p{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(h){this._ngSwitch=h,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(h){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(h)}_matchCase(h){const C=h==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||C,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),C}_updateDefaultCases(h){if(this._defaultViews&&h!==this._defaultUsed){this._defaultUsed=h;for(let C=0;C<this._defaultViews.length;C++)this._defaultViews[C].enforceState(h)}}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),p})(),zt=(()=>{class p{constructor(h,C,x){this.ngSwitch=x,x._addCase(),this._view=new Tt(h,C)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(vn,9))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),p})(),Bt=(()=>{class p{constructor(h,C,x){this._ngEl=h,this._differs=C,this._renderer=x,this._ngStyle=null,this._differ=null}set ngStyle(h){this._ngStyle=h,!this._differ&&h&&(this._differ=this._differs.find(h).create())}ngDoCheck(){if(this._differ){const h=this._differ.diff(this._ngStyle);h&&this._applyChanges(h)}}_setStyle(h,C){const[x,B]=h.split(".");null!=(C=null!=C&&B?`${C}${B}`:C)?this._renderer.setStyle(this._ngEl.nativeElement,x,C):this._renderer.removeStyle(this._ngEl.nativeElement,x)}_applyChanges(h){h.forEachRemovedItem(C=>this._setStyle(C.key,null)),h.forEachAddedItem(C=>this._setStyle(C.key,C.currentValue)),h.forEachChangedItem(C=>this._setStyle(C.key,C.currentValue))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.SBq),y.Y36(y.aQg),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ft(p,E){return Error(`InvalidPipeArgument: '${E}' for pipe '${(0,y.AaK)(p)}'`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rr{createSubscription(E,h){return E.subscribe({next:h,error:C=>{throw C}})}dispose(E){E.unsubscribe()}onDestroy(E){E.unsubscribe()}}class Jt{createSubscription(E,h){return E.then(h,C=>{throw C})}dispose(E){}onDestroy(E){}}const _o=new Jt,wo=new Rr;let Br=(()=>{class p{constructor(h){this._ref=h,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(h){return this._obj?h!==this._obj?(this._dispose(),this.transform(h)):this._latestValue:(h&&this._subscribe(h),this._latestValue)}_subscribe(h){this._obj=h,this._strategy=this._selectStrategy(h),this._subscription=this._strategy.createSubscription(h,C=>this._updateLatestValue(h,C))}_selectStrategy(h){if((0,y.QGY)(h))return _o;if((0,y.F4k)(h))return wo;throw Ft(p,h)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(h,C){h===this._obj&&(this._latestValue=C,this._ref.markForCheck())}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.sBO,16))},p.\u0275pipe=y.Yjl({name:"async",type:p,pure:!1}),p})();
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
const Ms=new y.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let Hr=(()=>{class p{constructor(h,C){this.locale=h,this.defaultTimezone=C}transform(h,C="mediumDate",x,B){var ie;if(null==h||""===h||h!=h)return null;try{return $e(h,C,B||this.locale,null!==(ie=null!=x?x:this.defaultTimezone)&&void 0!==ie?ie:void 0)}catch(Te){throw Ft(p,Te.message)}}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.soG,16),y.Y36(Ms,24))},p.\u0275pipe=y.Yjl({name:"date",type:p,pure:!0}),p})(),On=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=y.oAB({type:p}),p.\u0275inj=y.cJS({providers:[{provide:We,useClass:Qt}]}),p})();
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
const no="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Si=(()=>{class p{}return p.\u0275prov=(0,y.Yz7)({token:p,providedIn:"root",factory:()=>new un((0,y.LFG)(re),window)}),p})();class un{constructor(E,h){this.document=E,this.window=h,this.offset=()=>[0,0]}setOffset(E){this.offset=Array.isArray(E)?()=>E:E}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(E){this.supportsScrolling()&&this.window.scrollTo(E[0],E[1])}scrollToAnchor(E){if(!this.supportsScrolling())return;const h=function(p,E){const h=p.getElementById(E)||p.getElementsByName(E)[0];if(h)return h;if("function"==typeof p.createTreeWalker&&p.body&&(p.body.createShadowRoot||p.body.attachShadow)){const C=p.createTreeWalker(p.body,NodeFilter.SHOW_ELEMENT);let x=C.currentNode;for(;x;){const B=x.shadowRoot;if(B){const ie=B.getElementById(E)||B.querySelector(`[name="${E}"]`);if(ie)return ie}x=C.nextNode()}}return null}(this.document,E);h&&(this.scrollToElement(h),this.attemptFocus(h))}setHistoryScrollRestoration(E){if(this.supportScrollRestoration()){const h=this.window.history;h&&h.scrollRestoration&&(h.scrollRestoration=E)}}scrollToElement(E){const h=E.getBoundingClientRect(),C=h.left+this.window.pageXOffset,x=h.top+this.window.pageYOffset,B=this.offset();this.window.scrollTo(C-B[0],x-B[1])}attemptFocus(E){return E.focus(),this.document.activeElement===E}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const E=oo(this.window.history)||oo(Object.getPrototypeOf(this.window.history));return!(!E||!E.writable&&!E.set)}catch(E){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(E){return!1}}}function oo(p){return Object.getOwnPropertyDescriptor(p,"scrollRestoration")}
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
       */},520:(Ue,se,M)=>{M.d(se,{TP:()=>et,eN:()=>H,JF:()=>yt});var y=M(9808),T=M(7587),ne=M(9646),J=M(8306),ee=M(4351),Ce=M(9300),re=M(4004);
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
       */class ge{}class W{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z{constructor(I){this.normalizedNames=new Map,this.lazyUpdate=null,I?this.lazyInit="string"==typeof I?()=>{this.headers=new Map,I.split("\n").forEach(P=>{const oe=P.indexOf(":");if(oe>0){const Y=P.slice(0,oe),De=Y.toLowerCase(),de=P.slice(oe+1).trim();this.maybeSetNormalizedName(Y,De),this.headers.has(De)?this.headers.get(De).push(de):this.headers.set(De,[de])}})}:()=>{this.headers=new Map,Object.keys(I).forEach(P=>{let oe=I[P];const Y=P.toLowerCase();"string"==typeof oe&&(oe=[oe]),oe.length>0&&(this.headers.set(Y,oe),this.maybeSetNormalizedName(P,Y))})}:this.headers=new Map}has(I){return this.init(),this.headers.has(I.toLowerCase())}get(I){this.init();const P=this.headers.get(I.toLowerCase());return P&&P.length>0?P[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(I){return this.init(),this.headers.get(I.toLowerCase())||null}append(I,P){return this.clone({name:I,value:P,op:"a"})}set(I,P){return this.clone({name:I,value:P,op:"s"})}delete(I,P){return this.clone({name:I,value:P,op:"d"})}maybeSetNormalizedName(I,P){this.normalizedNames.has(P)||this.normalizedNames.set(P,I)}init(){this.lazyInit&&(this.lazyInit instanceof z?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(I=>this.applyUpdate(I)),this.lazyUpdate=null))}copyFrom(I){I.init(),Array.from(I.headers.keys()).forEach(P=>{this.headers.set(P,I.headers.get(P)),this.normalizedNames.set(P,I.normalizedNames.get(P))})}clone(I){const P=new z;return P.lazyInit=this.lazyInit&&this.lazyInit instanceof z?this.lazyInit:this,P.lazyUpdate=(this.lazyUpdate||[]).concat([I]),P}applyUpdate(I){const P=I.name.toLowerCase();switch(I.op){case"a":case"s":let oe=I.value;if("string"==typeof oe&&(oe=[oe]),0===oe.length)return;this.maybeSetNormalizedName(I.name,P);const Y=("a"===I.op?this.headers.get(P):void 0)||[];Y.push(...oe),this.headers.set(P,Y);break;case"d":const De=I.value;if(De){let de=this.headers.get(P);if(!de)return;de=de.filter(me=>-1===De.indexOf(me)),0===de.length?(this.headers.delete(P),this.normalizedNames.delete(P)):this.headers.set(P,de)}else this.headers.delete(P),this.normalizedNames.delete(P)}}forEach(I){this.init(),Array.from(this.normalizedNames.keys()).forEach(P=>I(this.normalizedNames.get(P),this.headers.get(P)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class N{encodeKey(I){return xe(I)}encodeValue(I){return xe(I)}decodeKey(I){return decodeURIComponent(I)}decodeValue(I){return decodeURIComponent(I)}}const he=/%(\d[a-f0-9])/gi,ue={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function xe(q){return encodeURIComponent(q).replace(he,(I,P)=>{var oe;return null!==(oe=ue[P])&&void 0!==oe?oe:I})}function Me(q){return`${q}`}class X{constructor(I={}){if(this.updates=null,this.cloneFrom=null,this.encoder=I.encoder||new N,I.fromString){if(I.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(q,I){const P=new Map;return q.length>0&&q.replace(/^\?/,"").split("&").forEach(Y=>{const De=Y.indexOf("="),[de,me]=-1==De?[I.decodeKey(Y),""]:[I.decodeKey(Y.slice(0,De)),I.decodeValue(Y.slice(De+1))],$e=P.get(de)||[];$e.push(me),P.set(de,$e)}),P}(I.fromString,this.encoder)}else I.fromObject?(this.map=new Map,Object.keys(I.fromObject).forEach(P=>{const oe=I.fromObject[P];this.map.set(P,Array.isArray(oe)?oe:[oe])})):this.map=null}has(I){return this.init(),this.map.has(I)}get(I){this.init();const P=this.map.get(I);return P?P[0]:null}getAll(I){return this.init(),this.map.get(I)||null}keys(){return this.init(),Array.from(this.map.keys())}append(I,P){return this.clone({param:I,value:P,op:"a"})}appendAll(I){const P=[];return Object.keys(I).forEach(oe=>{const Y=I[oe];Array.isArray(Y)?Y.forEach(De=>{P.push({param:oe,value:De,op:"a"})}):P.push({param:oe,value:Y,op:"a"})}),this.clone(P)}set(I,P){return this.clone({param:I,value:P,op:"s"})}delete(I,P){return this.clone({param:I,value:P,op:"d"})}toString(){return this.init(),this.keys().map(I=>{const P=this.encoder.encodeKey(I);return this.map.get(I).map(oe=>P+"="+this.encoder.encodeValue(oe)).join("&")}).filter(I=>""!==I).join("&")}clone(I){const P=new X({encoder:this.encoder});return P.cloneFrom=this.cloneFrom||this,P.updates=(this.updates||[]).concat(I),P}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(I=>this.map.set(I,this.cloneFrom.map.get(I))),this.updates.forEach(I=>{switch(I.op){case"a":case"s":const P=("a"===I.op?this.map.get(I.param):void 0)||[];P.push(Me(I.value)),this.map.set(I.param,P);break;case"d":if(void 0===I.value){this.map.delete(I.param);break}{let oe=this.map.get(I.param)||[];const Y=oe.indexOf(Me(I.value));-1!==Y&&oe.splice(Y,1),oe.length>0?this.map.set(I.param,oe):this.map.delete(I.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ie{constructor(){this.map=new Map}set(I,P){return this.map.set(I,P),this}get(I){return this.map.has(I)||this.map.set(I,I.defaultValue()),this.map.get(I)}delete(I){return this.map.delete(I),this}has(I){return this.map.has(I)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ve(q){return"undefined"!=typeof ArrayBuffer&&q instanceof ArrayBuffer}function Pe(q){return"undefined"!=typeof Blob&&q instanceof Blob}function ae(q){return"undefined"!=typeof FormData&&q instanceof FormData}class we{constructor(I,P,oe,Y){let De;if(this.url=P,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=I.toUpperCase(),function(q){switch(q){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||Y?(this.body=void 0!==oe?oe:null,De=Y):De=oe,De&&(this.reportProgress=!!De.reportProgress,this.withCredentials=!!De.withCredentials,De.responseType&&(this.responseType=De.responseType),De.headers&&(this.headers=De.headers),De.context&&(this.context=De.context),De.params&&(this.params=De.params)),this.headers||(this.headers=new z),this.context||(this.context=new Ie),this.params){const de=this.params.toString();if(0===de.length)this.urlWithParams=P;else{const me=P.indexOf("?");this.urlWithParams=P+(-1===me?"?":me<P.length-1?"&":"")+de}}else this.params=new X,this.urlWithParams=P}serializeBody(){return null===this.body?null:ve(this.body)||Pe(this.body)||ae(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof X?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ae(this.body)?null:Pe(this.body)?this.body.type||null:ve(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof X?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(I={}){var P;const oe=I.method||this.method,Y=I.url||this.url,De=I.responseType||this.responseType,de=void 0!==I.body?I.body:this.body,me=void 0!==I.withCredentials?I.withCredentials:this.withCredentials,$e=void 0!==I.reportProgress?I.reportProgress:this.reportProgress;let Ct=I.headers||this.headers,Ot=I.params||this.params;const _t=null!==(P=I.context)&&void 0!==P?P:this.context;return void 0!==I.setHeaders&&(Ct=Object.keys(I.setHeaders).reduce((Se,nt)=>Se.set(nt,I.setHeaders[nt]),Ct)),I.setParams&&(Ot=Object.keys(I.setParams).reduce((Se,nt)=>Se.set(nt,I.setParams[nt]),Ot)),new we(oe,Y,de,{params:Ot,headers:Ct,context:_t,reportProgress:$e,responseType:De,withCredentials:me})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var pe=(()=>((pe=pe||{})[pe.Sent=0]="Sent",pe[pe.UploadProgress=1]="UploadProgress",pe[pe.ResponseHeader=2]="ResponseHeader",pe[pe.DownloadProgress=3]="DownloadProgress",pe[pe.Response=4]="Response",pe[pe.User=5]="User",pe))();class j{constructor(I,P=200,oe="OK"){this.headers=I.headers||new z,this.status=void 0!==I.status?I.status:P,this.statusText=I.statusText||oe,this.url=I.url||null,this.ok=this.status>=200&&this.status<300}}class k extends j{constructor(I={}){super(I),this.type=pe.ResponseHeader}clone(I={}){return new k({headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class U extends j{constructor(I={}){super(I),this.type=pe.Response,this.body=void 0!==I.body?I.body:null}clone(I={}){return new U({body:void 0!==I.body?I.body:this.body,headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class K extends j{constructor(I){super(I,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${I.url||"(unknown url)"}`:`Http failure response for ${I.url||"(unknown url)"}: ${I.status} ${I.statusText}`,this.error=I.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(q,I){return{body:I,headers:q.headers,context:q.context,observe:q.observe,params:q.params,reportProgress:q.reportProgress,responseType:q.responseType,withCredentials:q.withCredentials}}let H=(()=>{class q{constructor(P){this.handler=P}request(P,oe,Y={}){let De;if(P instanceof we)De=P;else{let $e,Ct;$e=Y.headers instanceof z?Y.headers:new z(Y.headers),Y.params&&(Ct=Y.params instanceof X?Y.params:new X({fromObject:Y.params})),De=new we(P,oe,void 0!==Y.body?Y.body:null,{headers:$e,context:Y.context,params:Ct,reportProgress:Y.reportProgress,responseType:Y.responseType||"json",withCredentials:Y.withCredentials})}const de=(0,ne.of)(De).pipe((0,ee.b)($e=>this.handler.handle($e)));if(P instanceof we||"events"===Y.observe)return de;const me=de.pipe((0,Ce.h)($e=>$e instanceof U));switch(Y.observe||"body"){case"body":switch(De.responseType){case"arraybuffer":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&!($e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return $e.body}));case"blob":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&!($e.body instanceof Blob))throw new Error("Response is not a Blob.");return $e.body}));case"text":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&"string"!=typeof $e.body)throw new Error("Response is not a string.");return $e.body}));default:return me.pipe((0,re.U)($e=>$e.body))}case"response":return me;default:throw new Error(`Unreachable: unhandled observe type ${Y.observe}}`)}}delete(P,oe={}){return this.request("DELETE",P,oe)}get(P,oe={}){return this.request("GET",P,oe)}head(P,oe={}){return this.request("HEAD",P,oe)}jsonp(P,oe){return this.request("JSONP",P,{params:(new X).append(oe,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(P,oe={}){return this.request("OPTIONS",P,oe)}patch(P,oe,Y={}){return this.request("PATCH",P,$(Y,oe))}post(P,oe,Y={}){return this.request("POST",P,$(Y,oe))}put(P,oe,Y={}){return this.request("PUT",P,$(Y,oe))}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(ge))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Le{constructor(I,P){this.next=I,this.interceptor=P}handle(I){return this.interceptor.intercept(I,this.next)}}const et=new T.OlP("HTTP_INTERCEPTORS");let Mt=(()=>{class q{intercept(P,oe){return oe.handle(P)}}return q.\u0275fac=function(P){return new(P||q)},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const it=/^\)\]\}',?\n/;let Hn=(()=>{class q{constructor(P){this.xhrFactory=P}handle(P){if("JSONP"===P.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new J.y(oe=>{const Y=this.xhrFactory.build();if(Y.open(P.method,P.urlWithParams),P.withCredentials&&(Y.withCredentials=!0),P.headers.forEach((nt,He)=>Y.setRequestHeader(nt,He.join(","))),P.headers.has("Accept")||Y.setRequestHeader("Accept","application/json, text/plain, */*"),!P.headers.has("Content-Type")){const nt=P.detectContentTypeHeader();null!==nt&&Y.setRequestHeader("Content-Type",nt)}if(P.responseType){const nt=P.responseType.toLowerCase();Y.responseType="json"!==nt?nt:"text"}const De=P.serializeBody();let de=null;const me=()=>{if(null!==de)return de;const nt=1223===Y.status?204:Y.status,He=Y.statusText||"OK",En=new z(Y.getAllResponseHeaders()),Oe=function(q){return"responseURL"in q&&q.responseURL?q.responseURL:/^X-Request-URL:/m.test(q.getAllResponseHeaders())?q.getResponseHeader("X-Request-URL"):null}(Y)||P.url;return de=new k({headers:En,status:nt,statusText:He,url:Oe}),de},$e=()=>{let{headers:nt,status:He,statusText:En,url:Oe}=me(),Nt=null;204!==He&&(Nt=void 0===Y.response?Y.responseText:Y.response),0===He&&(He=Nt?200:0);let Cn=He>=200&&He<300;if("json"===P.responseType&&"string"==typeof Nt){const _n=Nt;Nt=Nt.replace(it,"");try{Nt=""!==Nt?JSON.parse(Nt):null}catch(Ke){Nt=_n,Cn&&(Cn=!1,Nt={error:Ke,text:Nt})}}Cn?(oe.next(new U({body:Nt,headers:nt,status:He,statusText:En,url:Oe||void 0})),oe.complete()):oe.error(new K({error:Nt,headers:nt,status:He,statusText:En,url:Oe||void 0}))},Ct=nt=>{const{url:He}=me(),En=new K({error:nt,status:Y.status||0,statusText:Y.statusText||"Unknown Error",url:He||void 0});oe.error(En)};let Ot=!1;const _t=nt=>{Ot||(oe.next(me()),Ot=!0);let He={type:pe.DownloadProgress,loaded:nt.loaded};nt.lengthComputable&&(He.total=nt.total),"text"===P.responseType&&!!Y.responseText&&(He.partialText=Y.responseText),oe.next(He)},Se=nt=>{let He={type:pe.UploadProgress,loaded:nt.loaded};nt.lengthComputable&&(He.total=nt.total),oe.next(He)};return Y.addEventListener("load",$e),Y.addEventListener("error",Ct),Y.addEventListener("timeout",Ct),Y.addEventListener("abort",Ct),P.reportProgress&&(Y.addEventListener("progress",_t),null!==De&&Y.upload&&Y.upload.addEventListener("progress",Se)),Y.send(De),oe.next({type:pe.Sent}),()=>{Y.removeEventListener("error",Ct),Y.removeEventListener("abort",Ct),Y.removeEventListener("load",$e),Y.removeEventListener("timeout",Ct),P.reportProgress&&(Y.removeEventListener("progress",_t),null!==De&&Y.upload&&Y.upload.removeEventListener("progress",Se)),Y.readyState!==Y.DONE&&Y.abort()}})}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(y.JF))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Mr=new T.OlP("XSRF_COOKIE_NAME"),vt=new T.OlP("XSRF_HEADER_NAME");class Tn{}let Zt=(()=>{class q{constructor(P,oe,Y){this.doc=P,this.platform=oe,this.cookieName=Y,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const P=this.doc.cookie||"";return P!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,y.Mx)(P,this.cookieName),this.lastCookieString=P),this.lastToken}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(y.K0),T.LFG(T.Lbi),T.LFG(Mr))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),mt=(()=>{class q{constructor(P,oe){this.tokenService=P,this.headerName=oe}intercept(P,oe){const Y=P.url.toLowerCase();if("GET"===P.method||"HEAD"===P.method||Y.startsWith("http://")||Y.startsWith("https://"))return oe.handle(P);const De=this.tokenService.getToken();return null!==De&&!P.headers.has(this.headerName)&&(P=P.clone({headers:P.headers.set(this.headerName,De)})),oe.handle(P)}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(Tn),T.LFG(vt))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),bt=(()=>{class q{constructor(P,oe){this.backend=P,this.injector=oe,this.chain=null}handle(P){if(null===this.chain){const oe=this.injector.get(et,[]);this.chain=oe.reduceRight((Y,De)=>new Le(Y,De),this.backend)}return this.chain.handle(P)}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(W),T.LFG(T.zs3))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),rr=(()=>{class q{static disable(){return{ngModule:q,providers:[{provide:mt,useClass:Mt}]}}static withOptions(P={}){return{ngModule:q,providers:[P.cookieName?{provide:Mr,useValue:P.cookieName}:[],P.headerName?{provide:vt,useValue:P.headerName}:[]]}}}return q.\u0275fac=function(P){return new(P||q)},q.\u0275mod=T.oAB({type:q}),q.\u0275inj=T.cJS({providers:[mt,{provide:et,useExisting:mt,multi:!0},{provide:Tn,useClass:Zt},{provide:Mr,useValue:"XSRF-TOKEN"},{provide:vt,useValue:"X-XSRF-TOKEN"}]}),q})(),yt=(()=>{class q{}return q.\u0275fac=function(P){return new(P||q)},q.\u0275mod=T.oAB({type:q}),q.\u0275inj=T.cJS({providers:[H,{provide:ge,useClass:bt},Hn,{provide:W,useExisting:Hn}],imports:[[rr.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),q})();
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
       */,7587:(Ue,se,M)=>{M.d(se,{deG:()=>bg,tb:()=>Jp,AFp:()=>Qp,ip1:()=>Nl,CZH:()=>Ei,hGG:()=>G0,z2F:()=>_s,sBO:()=>D0,Sil:()=>kl,_Vd:()=>gs,EJc:()=>eg,SBq:()=>ms,qLn:()=>ts,vpe:()=>br,tBr:()=>Qi,XFs:()=>I,OlP:()=>At,zs3:()=>Bn,ZZ4:()=>Da,aQg:()=>Ea,soG:()=>ya,YKP:()=>sp,h0i:()=>yi,PXZ:()=>f0,R0b:()=>Mn,FiY:()=>go,Lbi:()=>Zp,g9A:()=>qp,Qsj:()=>YE,FYo:()=>np,JOm:()=>Dr,tp0:()=>Wo,Rgc:()=>Es,dDg:()=>rg,GfV:()=>rp,s_b:()=>ha,ifc:()=>_t,eFA:()=>sg,G48:()=>v0,_c5:()=>k0,VLi:()=>u0,c2e:()=>Xp,zSh:()=>Gu,wAp:()=>Ve,vHH:()=>_e,cg1:()=>fl,kL8:()=>Th,dqk:()=>Oe,sIi:()=>as,CqO:()=>xf,QGY:()=>sl,F4k:()=>Rf,RDi:()=>Ai,AaK:()=>he,TTD:()=>ro,xp6:()=>sd,uIk:()=>Zu,Tol:()=>eh,Suo:()=>Tp,Xpm:()=>kr,lG2:()=>sn,Yz7:()=>vt,cJS:()=>Zt,oAB:()=>Ar,Yjl:()=>mn,Y36:()=>ls,_UZ:()=>Tf,qZA:()=>il,TgZ:()=>ol,LFG:()=>tn,$8M:()=>lt,$Z:()=>If,NdJ:()=>al,CRH:()=>Sp,kcU:()=>Ns,O4$:()=>Lo,oxw:()=>Nf,ALo:()=>yp,lcZ:()=>vp,xi3:()=>Dp,Q6J:()=>nl,VKq:()=>cp,kEZ:()=>dp,iGM:()=>Mp,MAs:()=>gf,LSH:()=>iu,kYT:()=>ur,YNc:()=>pf,W1O:()=>Pp,_uU:()=>ah,Oqu:()=>dl,hij:()=>ia,Gf:()=>Ip});var y=M(8189),T=M(8421),ne=M(515),J=M(3269),ee=M(2076),re=M(7579),ge=M(727),W=M(8306),z=M(3099);
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
function he(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(he).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ue(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xe=N({__forward_ref__:N});function Me(e){return e.__forward_ref__=Me,e.toString=function(){return he(this())},e}function X(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(xe)&&e.__forward_ref__===Me}
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
class _e extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function ae(e){return"string"==typeof e?e:null==e?"":String(e)}function qe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():ae(e)}function k(e,t){const n=t?` in ${t}`:"";throw new _e("201",`No provider for ${qe(e)} found${n}`)}
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
function vt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Zt(e){return{providers:e.providers||[],imports:e.imports||[]}}function mt(e){return bt(e,yt)||bt(e,Ir)}function bt(e,t){return e.hasOwnProperty(t)?e[t]:null}function rr(e){return e&&(e.hasOwnProperty(Dn)||e.hasOwnProperty(q))?e[Dn]:null}const yt=N({\u0275prov:N}),Dn=N({\u0275inj:N}),Ir=N({ngInjectableDef:N}),q=N({ngInjectorDef:N});
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
       */let P;function Y(e){const t=P;return P=e,t}function De(e,t,n){const r=mt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&I.Optional?null:void 0!==t?t:void k(he(e),"Injector")}
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
       */var $e=(()=>(($e=$e||{})[$e.OnPush=0]="OnPush",$e[$e.Default=1]="Default",$e))(),_t=(()=>{return(e=_t||(_t={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",_t;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Se="undefined"!=typeof globalThis&&globalThis,nt="undefined"!=typeof window&&window,He="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Oe=Se||"undefined"!=typeof global&&global||nt||He,_n={},Ke=[],or=N({\u0275cmp:N}),ir=N({\u0275dir:N}),Vn=N({\u0275pipe:N}),Tr=N({\u0275mod:N}),at=N({\u0275fac:N}),Gt=N({__NG_ELEMENT_ID__:N});
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
let Lr=0;function kr(e){return me(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===$e.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||Ke,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||_t.Emulated,id:"c",styles:e.styles||Ke,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Lr++,r.inputs=Sn(e.inputs,n),r.outputs=Sn(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(sr):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(jr):null,r})}function sr(e){return Fe(e)||function(e){return e[ir]||null}(e)}function jr(e){return function(e){return e[Vn]||null}(e)}const ar={};function Ar(e){return me(()=>{const t={type:e.type,bootstrap:e.bootstrap||Ke,declarations:e.declarations||Ke,imports:e.imports||Ke,exports:e.exports||Ke,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(ar[e.id]=e.type),t})}function ur(e,t){return me(()=>{const n=O(e,!0);n.declarations=t.declarations||Ke,n.imports=t.imports||Ke,n.exports=t.exports||Ke})}function Sn(e,t){if(null==e)return _n;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const sn=kr;function mn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function Fe(e){return e[or]||null}function O(e,t){const n=e[Tr]||null;if(!n&&!0===t)throw new Error(`Type ${he(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bt(e){return Array.isArray(e)&&"object"==typeof e[1]}function an(e){return Array.isArray(e)&&!0===e[1]}function Co(e){return 0!=(8&e.flags)}function Ft(e){return 2==(2&e.flags)}function Rr(e){return 1==(1&e.flags)}function Jt(e){return null!==e.template}function _o(e){return 0!=(512&e[2])}
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
function On(e,t){return e.hasOwnProperty(at)?e[at]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class no{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ro(){return So}function So(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ao),Ii}function Ii(){const e=Ti(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===_n)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ao(e,t,n,r){const o=Ti(e)||function(e,t){return e[Fn]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:_n,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new no(d&&d.currentValue,t,s===_n),e[r]=t}ro.ngInherit=!0;const Fn="__ngSimpleChanges__";function Ti(e){return e[Fn]||null}const oo="http://www.w3.org/2000/svg";
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
let dr;function Ai(e){dr=e}function h(e){return!!e.listen}const C={createRenderer:(e,t)=>void 0!==dr?dr:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B(e){for(;Array.isArray(e);)e=e[0];return e}function Ze(e,t){return B(t[e])}function Xe(e,t){return B(t[e.index])}function Je(e,t){return e.data[t]}function pt(e,t){return e[t]}function tt(e,t){const n=t[e];return Bt(n)?n:n[0]}function Ut(e){return 4==(4&e[2])}function Wn(e){return 128==(128&e[2])}function qt(e,t){return null==t?null:e[t]}function Nn(e){e[18]=0}function xr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Ne={lFrame:Oi(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Rs(){return Ne.bindingsEnabled}function te(){return Ne.lFrame.lView}function rt(){return Ne.lFrame.tView}function St(){let e=io();for(;null!==e&&64===e.type;)e=e.parent;return e}function io(){return Ne.lFrame.currentTNode}function Ln(e,t){const n=Ne.lFrame;n.currentTNode=e,n.isParent=t}function $r(){return Ne.lFrame.isParent}function Fo(){return Ne.isInCheckNoChangesMode}function fr(e){Ne.isInCheckNoChangesMode=e}function Xt(){const e=Ne.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Gr(){return Ne.lFrame.bindingIndex++}function Sa(e,t){const n=Ne.lFrame;n.bindingIndex=n.bindingRootIndex=e,No(t)}function No(e){Ne.lFrame.currentDirectiveIndex=e}function Os(){return Ne.lFrame.currentQueryIndex}function Pi(e){Ne.lFrame.currentQueryIndex=e}function Ra(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Fs(e,t,n){if(n&I.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&I.Host||(o=Ra(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Ne.lFrame=xa();return r.currentTNode=t,r.lView=e,!0}function ao(e){const t=xa(),n=e[1];Ne.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xa(){const e=Ne.lFrame,t=null===e?null:e.child;return null===t?Oi(e):t}function Oi(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Fi(){const e=Ne.lFrame;return Ne.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ni=Fi;function uo(){const e=Fi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function en(){return Ne.lFrame.selectedIndex}function hr(e){Ne.lFrame.selectedIndex=e}function wt(){const e=Ne.lFrame;return Je(e.tView,e.selectedIndex)}function Lo(){Ne.lFrame.currentNamespace=oo}function Ns(){Ne.lFrame.currentNamespace=null}function ko(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:v}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=v&&(e.destroyHooks||(e.destroyHooks=[])).push(n,v)}}function jo(e,t,n){ji(e,t,3,n)}function Bo(e,t,n,r){(3&e[2])===n&&ji(e,t,n,r)}function ki(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function ji(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(La(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function La(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Wt{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Ho(e,t,n){const r=h(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];Vo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function Bi(e){return 3===e||4===e||6===e}function Vo(e){return 64===e.charCodeAt(0)}function Wr(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Ua(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Ua(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gr(e){return-1!==e}function Or(e){return 32767&e}function Kr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ui=!0;function $o(e){const t=Ui;return Ui=e,t}let Va=0;function co(e,t){const n=Vi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,fo(r.data,e),fo(t,null),fo(r.blueprint,null));const o=Go(e,t),i=e.injectorIndex;if(gr(o)){const s=Or(o),l=Kr(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function fo(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Vi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Go(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ho(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Gt)&&(r=n[Gt]),null==r&&(r=n[Gt]=Va++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function za(e,t,n){if(n&I.Optional)return e;k(t,"NodeInjector")}function c(e,t,n,r){if(n&I.Optional&&void 0===r&&(r=null),0==(n&(I.Self|I.Host))){const o=e[9],i=Y(void 0);try{return o?o.get(t,r,n&I.Optional):De(t,r,n&I.Optional)}finally{Y(i)}}return za(r,t,n)}function u(e,t,n,r=I.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Gt)?e[Gt]:void 0;return"number"==typeof t?t>=0?255&t:f:t}(n);if("function"==typeof i){if(!Fs(t,e,r))return r&I.Host?za(o,n,r):c(t,n,r,o);try{const s=i(r);if(null!=s||r&I.Optional)return s;k(n)}finally{Ni()}}else if("number"==typeof i){let s=null,l=Vi(e,t),d=-1,m=r&I.Host?t[16][6]:null;for((-1===l||r&I.SkipSelf)&&(d=-1===l?Go(e,t):t[l+8],-1!==d&&ye(r,!1)?(s=t[1],l=Or(d),t=Kr(d,t)):l=-1);-1!==l;){const v=t[1];if(V(i,l,v.data)){const _=g(l,t,n,s,r,m);if(_!==a)return _}d=t[l+8],-1!==d&&ye(r,t[1].data[l+8]===m)&&V(i,l,t)?(s=v,l=Or(d),t=Kr(d,t)):l=-1}}}return c(t,n,r,o)}const a={};function f(){return new ze(St(),te())}function g(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],v=D(l,s,n,null==r?Ft(l)&&Ui:r!=s&&0!=(3&l.type),o&I.Host&&i===l);return null!==v?w(t,s,v,l):a}function D(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,v=i>>20,A=o?l+v:e.directiveEnd;for(let F=r?l:l+v;F<A;F++){const G=s[F];if(F<d&&n===G||F>=d&&G.type===n)return F}if(o){const F=s[d];if(F&&Jt(F)&&F.type===n)return d}return null}function w(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof Wt}(o)){const s=o;s.resolving&&function(e,t){throw new _e("200",`Circular dependency in DI detected for ${e}`)}(qe(i[n]));const l=$o(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?Y(s.injectImpl):null;Fs(e,r,I.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=So(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&Y(d),$o(l),s.resolving=!1,Ni()}}return o}function V(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function ye(e,t){return!(e&I.Self||e&I.Host&&t)}class ze{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return u(this._tNode,this._lView,t,r,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lt(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Bi(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(St(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ln="__parameters__";function dn(e,t,n){return me(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,m,v){const _=d.hasOwnProperty(ln)?d[ln]:Object.defineProperty(d,ln,{value:[]})[ln];for(;_.length<=v;)_.push(null);return(_[v]=_[v]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class At{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=vt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bg=new At("AnalyzeForEntryComponents");function jn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),jn(r,t)):t!==e&&t.push(r)}return t}function mr(e,t){e.forEach(n=>Array.isArray(n)?mr(n,t):t(n))}function oc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function js(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function wn(e,t,n){let r=zo(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Ya(e,t){const n=zo(e,t);if(n>=0)return e[1|n]}function zo(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Wi={},qa="__NG_DI_FLAG__",Us="ngTempTokenPath",Fg=/\n/gm,lc="__source",Lg=N({provide:String,useValue:N});let Ki;function cc(e){const t=Ki;return Ki=e,t}function kg(e,t=I.Default){if(void 0===Ki)throw new Error("inject() must be called from an injection context");return null===Ki?De(e,void 0,t):Ki.get(e,t&I.Optional?null:void 0,t)}function tn(e,t=I.Default){return(P||kg)(X(e),t)}function Za(e){const t=[];for(let n=0;n<e.length;n++){const r=X(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=I.Default;for(let s=0;s<r.length;s++){const l=r[s],d=jg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(tn(o,i))}else t.push(tn(r))}return t}function Yi(e,t){return e[qa]=t,e.prototype[qa]=t,e}function jg(e){return e[qa]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qi=Yi(dn("Inject",e=>({token:e})),-1),go=Yi(dn("Optional"),8),Wo=Yi(dn("SkipSelf"),4);
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
class Dc{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Qr(e){return e instanceof Dc?e.changingThisBreaksApplicationSecurity:e}
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
var Ht=(()=>((Ht=Ht||{})[Ht.NONE=0]="NONE",Ht[Ht.HTML=1]="HTML",Ht[Ht.STYLE=2]="STYLE",Ht[Ht.SCRIPT=3]="SCRIPT",Ht[Ht.URL=4]="URL",Ht[Ht.RESOURCE_URL=5]="RESOURCE_URL",Ht))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iu(e){const t=function(){const e=te();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Ht.URL,e)||"":function(e,t){const n=function(e){return e instanceof Dc&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Qr(e):function(e){return(e=String(e)).match(sm)||e.match(am)?e:"unsafe:"+e}(ae(e))}const Ac="__ngContext__";function fn(e,t){e[Ac]=t}function au(e){const t=function(e){return e[Ac]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function lu(e){return e.ngOriginalError}function xm(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ts{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=(e=t)&&e.ngErrorLogger||xm;var e;r(this._console,"ERROR",t),n&&r(this._console,"ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&lu(t);for(;n&&lu(n);)n=lu(n);return n||null}}
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
const Fc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Oe))();function vr(e){return e instanceof Function?e():e}
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
var Dr=(()=>((Dr=Dr||{})[Dr.Important=1]="Important",Dr[Dr.DashCase=2]="DashCase",Dr))();
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
function ns(e){const t=e[3];return an(t)?t[3]:t}function fu(e){return Bc(e[13])}function hu(e){return Bc(e[4])}function Bc(e){for(;null!==e&&!an(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qo(e,t,n,r,o){if(null!=r){let i,s=!1;an(r)?i=r:Bt(r)&&(s=!0,r=r[0]);const l=B(r);0===e&&null!==n?null==o?zc(t,n,l):mo(t,n,l,o||null,!0):1===e&&null!==n?mo(t,n,l,o||null,!0):2===e?function(e,t,n){const r=Ws(e,t);r&&function(e,t,n,r){h(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==B(n)&&qo(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];rs(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function gu(e,t,n){return h(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function Hc(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,xr(o,-1)),n.splice(r,1)}function mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Hc(o,r),t>0&&(e[n-1][4]=r[4]);const i=js(e,10+t);!function(e,t){rs(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Vc(e,t){if(!(256&t[2])){const n=t[11];h(n)&&n.destroyNode&&rs(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yu(e[1],e);for(;t;){let n=null;if(Bt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Bt(t)&&yu(t[1],t),t=t[3];null===t&&(t=e),Bt(t)&&yu(t[1],t),n=t&&t[4]}t=n}}(t)}}function yu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Wt)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):B(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&h(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&an(t[3])){n!==t[3]&&Hc(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function $c(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===_t.None||o===_t.Emulated)return null}return Xe(r,n)}(e,t.parent,n)}function mo(e,t,n,r,o){h(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function zc(e,t,n){h(e)?e.appendChild(t,n):t.appendChild(n)}function Wc(e,t,n,r,o){null!==r?mo(e,t,n,r,o):zc(e,t,n)}function Ws(e,t){return h(e)?e.parentNode(t):t.parentNode}let Qc=function(e,t,n){return 40&e.type?Xe(e,n):null};function Ks(e,t,n,r){const o=$c(e,r,t),i=t[11],l=function(e,t,n){return Qc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Wc(i,o,n[d],l,!1);else Wc(i,o,n,l,!1)}function Ys(e,t){if(null!==t){const n=t.type;if(3&n)return Xe(t,e);if(4&n)return Du(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ys(e,r);{const o=e[t.index];return an(o)?Du(-1,o):B(o)}}if(32&n)return du(t,e)()||B(e[t.index]);{const r=Zc(e,t);return null!==r?Array.isArray(r)?r[0]:Ys(ns(e[16]),r):Ys(e,t.next)}}return null}function Zc(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Du(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ys(r,o)}return t[7]}function Eu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&fn(B(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)Eu(e,t,n.child,r,o,i,!1),qo(t,e,o,l,i);else if(32&d){const m=du(n,r);let v;for(;v=m();)qo(t,e,o,v,i);qo(t,e,o,l,i)}else 16&d?Xc(e,t,r,n,o,i):qo(t,e,o,l,i);n=s?n.projectionNext:n.next}}function rs(e,t,n,r,o,i){Eu(n,r,e.firstChild,t,o,i,!1)}function Xc(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)qo(t,e,o,d[m],i);else Eu(e,t,d,s[3],o,i,!0)}function ed(e,t,n){h(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Cu(e,t,n){h(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
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
       */const nd="ng-template";function iy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==td(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function rd(e){return 4===e.type&&e.value!==nd}function sy(e,t,n){return t===(4!==e.type||n?e.value:nd)}function ay(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(Bi(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!sy(e,d,n)||""===d&&1===t.length){if(Zn(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!iy(e.attrs,m,n)){if(Zn(r))return!1;s=!0}continue}const _=uy(8&r?"class":d,o,rd(e),n);if(-1===_){if(Zn(r))return!1;s=!0;continue}if(""!==m){let A;A=_>i?"":o[_+1].toLowerCase();const F=8&r?A:null;if(F&&-1!==td(F,m,0)||2&r&&m!==A){if(Zn(r))return!1;s=!0}}}}else{if(!s&&!Zn(r)&&!Zn(d))return!1;if(s&&Zn(d))continue;s=!1,r=d|1&r}}return Zn(r)||s}function Zn(e){return 0==(1&e)}function uy(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function od(e,t,n=!1){for(let r=0;r<t.length;r++)if(ay(e,t[r],n))return!0;return!1}function id(e,t){return e?":not("+t.trim()+")":t}function hy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Zn(s)&&(t+=id(i,o),o=""),r=s,i=i||!Zn(r);n++}return""!==o&&(t+=id(i,o)),t}
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
       */function sd(e){ad(rt(),te(),en()+e,Fo())}function ad(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&jo(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Bo(t,i,0,n)}hr(n)}
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
function Qs(e,t){return e<<17|t<<2}function Jn(e){return e>>17&32767}function _u(e){return 2|e}function Fr(e){return(131068&e)>>2}function wu(e,t){return-131069&e|t<<2}function bu(e){return 1|e}function vd(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Pi(o),s.contentQueries(2,t[i],i)}}}function os(e,t,n,r,o,i,s,l,d,m){const v=t.blueprint.slice();return v[0]=o,v[2]=140|r,Nn(v),v[3]=v[15]=e,v[8]=n,v[10]=s||e&&e[10],v[11]=l||e&&e[11],v[12]=d||e&&e[12]||null,v[9]=m||e&&e[9]||null,v[6]=i,v[16]=2==t.type?e[16]:v,v}function Zo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=io(),s=$r(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),Ne.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Ne.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Ln(i,!0),i}function Jo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function is(e,t,n){ao(t);try{const r=e.viewQuery;null!==r&&Vu(1,r,n);const o=e.template;null!==o&&Dd(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&vd(e,t),e.staticViewQueries&&Vu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Qy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,uo()}}function Xo(e,t,n,r){const o=t[2];if(256==(256&o))return;ao(t);const i=Fo();try{Nn(t),function(e){Ne.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Dd(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&jo(t,m,null)}else{const m=e.preOrderHooks;null!==m&&Bo(t,m,0,null),ki(t,0)}if(function(e){for(let t=fu(e);null!==t;t=hu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&xr(i,1),o[2]|=1024}}}(t),function(e){for(let t=fu(e);null!==t;t=hu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Wn(r)&&Xo(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&vd(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&jo(t,m)}else{const m=e.contentHooks;null!==m&&Bo(t,m,1),ki(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)hr(~o);else{const i=o,s=n[++r],l=n[++r];Sa(s,i),l(2,t[i])}}}finally{hr(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Yy(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Vu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&jo(t,m)}else{const m=e.viewHooks;null!==m&&Bo(t,m,2),ki(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,xr(t[3],-1))}finally{uo()}}function Ay(e,t,n,r){const o=t[10],i=!Fo(),s=Ut(t);try{i&&!s&&o.begin&&o.begin(),s&&is(e,t,r),Xo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Dd(e,t,n,r,o){const i=en(),s=2&r;try{hr(-1),s&&t.length>20&&ad(e,t,20,Fo()),n(r,o)}finally{hr(i)}}function Fu(e,t,n){!Rs()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||co(n,t),fn(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=Jt(d);m&&$y(t,n,d);const v=w(t,e,l,n);fn(v,t),null!==s&&Gy(0,l-o,v,d,0,s),m&&(tt(n.index,t)[8]=v)}}(e,t,n,Xe(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=Ne.lFrame.currentDirectiveIndex;try{hr(s);for(let d=r;d<o;d++){const m=e.data[d],v=t[d];No(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&Sd(m,v)}}finally{hr(-1),No(l)}}(e,t,n))}function Nu(e,t,n=Xe){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function Cd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Js(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Js(e,t,n,r,o,i,s,l,d,m){const v=20+r,_=v+o,A=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Qe);return n}(v,_),F="function"==typeof m?m():m;return A[1]={type:e,blueprint:A,template:n,queries:null,viewQuery:l,declTNode:t,data:A.slice().fill(null,v),bindingStartIndex:v,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:F,incompleteFirstPass:!1}}function bd(e,t,n,r){const o=Fd(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Nd(e).push(r,o.length-1))}function Md(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Lu(e,t,n,r){let o=!1;if(Rs()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];od(n,s.selectors,!1)&&(o||(o=[]),ho(co(n,t),e,s.type),Jt(s)?(Ad(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Rd(n,e.data.length,i.length);for(let v=0;v<i.length;v++){const _=i[v];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=Jo(e,t,i.length,null);for(let v=0;v<i.length;v++){const _=i[v];n.mergedAttrs=Wr(n.mergedAttrs,_.hostAttrs),xd(e,n,t,m,_),Vy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const A=_.type.prototype;!l&&(A.ngOnChanges||A.ngOnInit||A.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(A.ngOnChanges||A.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const v=o[m],_=v.inputs,A=null===i||rd(t)?null:zy(_,i);s.push(A),l=Md(_,m,l),d=Md(v.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new _e("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=Wr(n.mergedAttrs,n.attrs),o}function Td(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function Sd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Ad(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Vy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Jt(t)&&(n[""]=e)}}function Rd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function xd(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=On(o.type)),s=new Wt(i,Jt(o),null);e.blueprint[r]=s,n[r]=s,Td(e,t,0,r,Jo(e,n,o.hostVars,Qe),o)}function $y(e,t,n){const r=Xe(t,e),o=Cd(n),i=e[10],s=Xs(e,os(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function Er(e,t,n,r,o,i){const s=Xe(e,t);!function(e,t,n,r,o,i,s){if(null==i)h(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?ae(i):s(i,r||"",o);h(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function Gy(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],v=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,v):n[v]=_}}}function zy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Pd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Yy(e,t){const n=tt(t,e);if(Wn(n)){const r=n[1];80&n[2]?Xo(r,n,r.template,n[8]):n[5]>0&&ju(n)}}function ju(e){for(let r=fu(e);null!==r;r=hu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];Xo(s,i,s.template,i[8])}else i[5]>0&&ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=tt(n[r],e);Wn(o)&&o[5]>0&&ju(o)}}function Qy(e,t){const n=tt(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),is(r,n,n[8])}function Xs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Bu(e){for(;e;){e[2]|=64;const t=ns(e);if(_o(e)&&!t)return e;e=t}return null}function Hu(e,t,n){const r=t[10];r.begin&&r.begin();try{Xo(e,t,e.template,n)}catch(o){throw kd(t,o),o}finally{r.end&&r.end()}}function Od(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=au(n),o=r[1];Ay(o,r,o.template,n)}}(e[8])}function Vu(e,t,n){Pi(0),t(e,n)}const ev=(()=>Promise.resolve(null))();function Fd(e){return e[7]||(e[7]=[])}function Nd(e){return e.cleanup||(e.cleanup=[])}function kd(e,t){const n=e[9],r=n?n.get(ts,null):null;r&&r.handleError(t)}function jd(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function Nr(e,t,n){const r=Ze(t,e);!function(e,t,n){h(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ea(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=ue(o,l):2==i&&(r=ue(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
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
const $u=new At("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bd{get(t,n=Wi){if(n===Wi){const r=new Error(`NullInjectorError: No provider for ${he(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Gu=new At("Set Injector scope."),ss={},rv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zu;function Ud(){return void 0===zu&&(zu=new Bd),zu}function Hd(e,t=null,n=null,r){const o=Vd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function Vd(e,t=null,n=null,r){return new ov(e,n,t||Ud(),r)}class ov{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&mr(n,l=>this.processProvider(l,t,n)),mr([t],l=>this.processInjectorType(l,[],i)),this.records.set($u,ei(void 0,this));const s=this.records.get(Gu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:he(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Wi,r=I.Default){this.assertNotDestroyed();const o=cc(this),i=Y(void 0);try{if(!(r&I.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof At)&&mt(t);l=d&&this.injectableDefInScope(d)?ei(Wu(t),ss):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&I.Self?Ud():this.parent).get(t,n=r&I.Optional&&n===Wi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Us]=s[Us]||[]).unshift(he(t)),o)throw s;return function(e,t,n,r){const o=e[Us];throw t[lc]&&o.unshift(t[lc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=he(t);if(Array.isArray(t))o=t.map(he).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):he(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Fg,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Us]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Y(i),cc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(he(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=X(t)))return!1;let o=rr(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=rr(i)),null==o)return!1;if(null!=o.imports&&!l){let v;r.push(s);try{mr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===v&&(v=[]),v.push(_))})}finally{}if(void 0!==v)for(let _=0;_<v.length;_++){const{ngModule:A,providers:F}=v[_];mr(F,G=>this.processProvider(G,A,F||Ke))}}this.injectorDefTypes.add(s);const d=On(s)||(()=>new s);this.records.set(s,ei(d,ss));const m=o.providers;if(null!=m&&!l){const v=t;mr(m,_=>this.processProvider(_,v,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=ti(t=X(t))?t:X(t&&t.provide);const i=(e=t,Gd(e)?ei(void 0,e.useValue):ei(function(e,t,n){let r;if(ti(e)){const o=X(e);return On(o)||Wu(o)}if(Gd(e))r=()=>X(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Za(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>tn(X(e.useExisting));else{const o=X(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return On(o)||Wu(o);r=()=>new o(...Za(e.deps))}return r}(e),ss));var e;if(ti(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=ei(void 0,ss,!0),s.factory=()=>Za(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===ss&&(n.value=rv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=X(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Wu(e){const t=mt(e),n=null!==t?t.factory:On(e);if(null!==n)return n;if(e instanceof At)throw new Error(`Token ${he(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${he(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[yt]||e[Ir]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function ei(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Gd(e){return null!==e&&"object"==typeof e&&Lg in e}function ti(e){return"function"==typeof e}let Bn=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return Hd({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return Hd({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Wi,e.NULL=new Bd,e.\u0275prov=vt({token:e,providedIn:"any",factory:()=>tn($u)}),e.__NG_ELEMENT_ID__=-1,e})();function Ev(e,t){ko(au(e)[1],St())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ta=null;function ni(){if(!ta){const e=Oe.Symbol;if(e&&e.iterator)ta=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ta=r)}}}return ta}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function as(e){return!!qu(e)&&(Array.isArray(e)||!(e instanceof Map)&&ni()in e)}function qu(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cr(e,t,n){return e[t]=n}function hn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function yo(e,t,n,r){const o=hn(e,t,n);return hn(e,t+1,r)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(e,t,n,r){const o=te();return hn(o,Gr(),t)&&(rt(),Er(wt(),o,e,t,n,r)),Zu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pf(e,t,n,r,o,i,s,l){const d=te(),m=rt(),v=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,v=Zo(t,e,4,s||null,qt(m,l));Lu(t,n,v,qt(m,d)),ko(t,v);const _=v.tViews=Js(2,v,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,v),_.queries=t.queries.embeddedTView(v)),v}(v,m,d,t,n,r,o,i,s):m.data[v];Ln(_,!1);const A=d[11].createComment("");Ks(m,d,A,_),fn(A,d),Xs(d,d[v]=Pd(A,d,A,_)),Rr(_)&&Fu(m,d,_),null!=s&&Nu(d,_,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gf(e){return pt(Ne.lFrame.contextLView,20+e)}
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
function ls(e,t=I.Default){const n=te();return null===n?tn(e,t):u(St(),n,X(e),t)}function If(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n){const r=te();return hn(r,Gr(),t)&&function(e,t,n,r,o,i,s,l){const d=Xe(t,n);let v,m=t.inputs;!l&&null!=m&&(v=m[r])?(jd(e,n,v,r,o),Ft(t)&&function(e,t){const n=tt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,h(i)?i.setProperty(d,r,o):Vo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(rt(),wt(),r,e,t,r[11],n,!1),nl}function rl(e,t,n,r,o){const s=o?"class":"style";jd(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(e,t,n,r){const o=te(),i=rt(),s=20+e,l=o[11],d=o[s]=gu(l,t,Ne.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Zo(t,e,2,o,qt(l,i));return Lu(t,n,m,qt(l,s)),null!==m.attrs&&ea(m,m.attrs,!1),null!==m.mergedAttrs&&ea(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];Ln(m,!0);const v=m.mergedAttrs;null!==v&&Ho(l,d,v);const _=m.classes;null!==_&&Cu(l,d,_);const A=m.styles;null!==A&&ed(l,d,A),64!=(64&m.flags)&&Ks(i,o,d,m),0===Ne.lFrame.elementDepthCount&&fn(d,o),Ne.lFrame.elementDepthCount++,Rr(m)&&(Fu(i,o,m),function(e,t,n){if(Co(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Nu(o,m)}function il(){let e=St();$r()?Ne.lFrame.isParent=!1:(e=e.parent,Ln(e,!1));const t=e;Ne.lFrame.elementDepthCount--;const n=rt();n.firstCreatePass&&(ko(n,e),Co(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&rl(n,t,te(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rl(n,t,te(),t.stylesWithoutHost,!1)}function Tf(e,t,n,r){ol(e,t,n,r),il()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sl(e){return!!e&&"function"==typeof e.then}function Rf(e){return!!e&&"function"==typeof e.subscribe}const xf=Rf;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function al(e,t,n,r){const o=te(),i=rt(),s=St();return function(e,t,n,r,o,i,s,l){const d=Rr(r),v=e.firstCreatePass&&Nd(e),_=t[8],A=Fd(t);let F=!0;if(3&r.type||l){const fe=Xe(r,t),be=l?l(fe):fe,Z=A.length,je=l?ot=>l(B(ot[r.index])):r.index;if(h(n)){let ot=null;if(!l&&d&&(ot=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==ot)(ot.__ngLastListenerFn__||ot).__ngNextListenerFn__=i,ot.__ngLastListenerFn__=i,F=!1;else{i=ul(r,t,_,i,!1);const ft=n.listen(be,o,i);A.push(i,ft),v&&v.push(o,je,Z,Z+1)}}else i=ul(r,t,_,i,!0),be.addEventListener(o,i,s),A.push(i),v&&v.push(o,je,Z,s)}else i=ul(r,t,_,i,!1);const G=r.outputs;let le;if(F&&null!==G&&(le=G[o])){const fe=le.length;if(fe)for(let be=0;be<fe;be+=2){const In=t[le[be]][le[be+1]].subscribe(i),Eo=A.length;A.push(i,In),v&&v.push(o,r.index,Eo,-(Eo+1))}}}(i,o,o[11],s,e,t,!!n,r),al}function Ff(e,t,n,r){try{return!1!==n(r)}catch(o){return kd(e,o),!1}}function ul(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?tt(e.index,t):t;0==(32&t[2])&&Bu(l);let d=Ff(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Ff(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
       */function Nf(e=1){return function(e){return(Ne.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Ne.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zf(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?Jn(i):Fr(i),d=!1;for(;0!==l&&(!1===d||s);){const v=e[l+1];uD(e[l],t)&&(d=!0,e[l+1]=r?bu(v):_u(v)),l=r?Jn(v):Fr(v)}d&&(e[n+1]=r?_u(i):bu(i))}function uD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&zo(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Wf(e){return e.substring(Yt.key,Yt.keyEnd)}function Kf(e,t){const n=Yt.textEnd;return n===t?-1:(t=Yt.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Yt.key=t,n),hi(e,t,n))}function hi(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function eh(e){!function(e,t,n,r){const o=rt(),i=function(e){const t=Ne.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[en()],s=th(e,n);sh(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Ne.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=cs(n=cl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cl(o,e,t,n,r),null===i){let d=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Fr(r))return e[Jn(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=cl(null,e,t,d[1],r),d=cs(d,t.attrs,r),function(e,t,n,r){e[Jn(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=cs(r,e[i].hostAttrs,n);return cs(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=Jn(s),d=Fr(s);e[r]=n;let v,m=!1;if(Array.isArray(n)){const _=n;v=_[1],(null===v||zo(_,v)>0)&&(m=!0)}else v=n;if(o)if(0!==d){const A=Jn(e[l+1]);e[r+1]=Qs(A,l),0!==A&&(e[A+1]=wu(e[A+1],r)),e[l+1]=function(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=Qs(l,0),0!==l&&(e[l+1]=wu(e[l+1],r)),l=r;else e[r+1]=Qs(d,0),0===l?l=r:e[d+1]=wu(e[d+1],r),d=r;m&&(e[r+1]=_u(e[r+1])),zf(e,v,r,!0),zf(e,v,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&zo(i,t)>=0&&(n[r+1]=bu(n[r+1]))}(t,v,e,r,i),s=Qs(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(o,null,i,r);const s=te();if(n!==Qe&&hn(s,i,n)){const l=o.data[en()];if(sh(l,r)&&!th(o,i)){let d=r?l.classesWithoutHost:l.stylesWithoutHost;null!==d&&(n=ue(d,n||"")),rl(o,l,s,n,r)}else!function(e,t,n,r,o,i,s,l){o===Qe&&(o=Ke);let d=0,m=0,v=0<o.length?o[0]:null,_=0<i.length?i[0]:null;for(;null!==v||null!==_;){const A=d<o.length?o[d+1]:void 0,F=m<i.length?i[m+1]:void 0;let le,G=null;v===_?(d+=2,m+=2,A!==F&&(G=_,le=F)):null===_||null!==v&&v<_?(d+=2,G=v):(m+=2,G=_,le=F),null!==G&&oh(e,t,n,r,G,le,s,l),v=d<o.length?o[d]:null,_=m<i.length?i[m]:null}}(o,l,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return Ke;const r=[],o=Qr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}(wn,wr,e,!0)}function wr(e,t){for(let n=function(e){return function(e){Yt.key=0,Yt.keyEnd=0,Yt.value=0,Yt.valueEnd=0,Yt.textEnd=e.length}(e),Kf(e,hi(e,0,Yt.textEnd))}(t);n>=0;n=Kf(t,n))wn(e,Wf(t),!0)}function th(e,t){return t>=e.expandoStartIndex}function cl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=cs(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function cs(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),wn(e,s,!!n||t[++i]))}return void 0===e?null:e}function oh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,m=d[l+1];oa(function(e){return 1==(1&e)}(m)?ih(d,t,n,o,Fr(m),s):void 0)||(oa(i)||function(e){return 2==(2&e)}(m)&&(i=ih(d,null,n,o,l,s)),function(e,t,n,r,o){const i=h(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:Dr.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=Dr.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,l?"important":"")}}}(r,s,Ze(en(),n),o,i))}function ih(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],m=Array.isArray(d),v=m?d[1]:d,_=null===v;let A=n[o+1];A===Qe&&(A=_?Ke:void 0);let F=_?Ya(A,r):v===r?A:void 0;if(m&&!oa(F)&&(F=Ya(d,r)),oa(F)&&(l=F,s))return l;const G=e[o+1];o=s?Jn(G):Fr(G)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Ya(d,r))}return l}function oa(e){return void 0!==e}function sh(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ah(e,t=""){const n=te(),r=rt(),o=e+20,i=r.firstCreatePass?Zo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return h(e)?e.createText(t):e.createTextNode(t)}(n[11],t);Ks(r,n,s,i),Ln(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dl(e){return ia("",e,""),dl}function ia(e,t,n){const r=te(),o=function(e,t,n,r){return hn(e,Gr(),n)?t+ae(n)+r:Qe}(r,e,t,n);return o!==Qe&&Nr(r,en(),o),ia}
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
const vo=void 0;var VD=["en",[["a","p"],["AM","PM"],vo],[["AM","PM"],vo,vo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],vo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],vo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",vo,"{1} 'at' {0}",vo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let pi={};function fl(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=Sh(t);if(n)return n;const r=t.split("-")[0];if(n=Sh(r),n)return n;if("en"===r)return VD;throw new Error(`Missing locale data for the locale "${e}".`)}function Th(e){return fl(e)[Ve.PluralCase]}function Sh(e){return e in pi||(pi[e]=Oe.ng&&Oe.ng.common&&Oe.ng.common.locales&&Oe.ng.common.locales[e]),pi[e]}var Ve=(()=>((Ve=Ve||{})[Ve.LocaleId=0]="LocaleId",Ve[Ve.DayPeriodsFormat=1]="DayPeriodsFormat",Ve[Ve.DayPeriodsStandalone=2]="DayPeriodsStandalone",Ve[Ve.DaysFormat=3]="DaysFormat",Ve[Ve.DaysStandalone=4]="DaysStandalone",Ve[Ve.MonthsFormat=5]="MonthsFormat",Ve[Ve.MonthsStandalone=6]="MonthsStandalone",Ve[Ve.Eras=7]="Eras",Ve[Ve.FirstDayOfWeek=8]="FirstDayOfWeek",Ve[Ve.WeekendRange=9]="WeekendRange",Ve[Ve.DateFormat=10]="DateFormat",Ve[Ve.TimeFormat=11]="TimeFormat",Ve[Ve.DateTimeFormat=12]="DateTimeFormat",Ve[Ve.NumberSymbols=13]="NumberSymbols",Ve[Ve.NumberFormats=14]="NumberFormats",Ve[Ve.CurrencyCode=15]="CurrencyCode",Ve[Ve.CurrencySymbol=16]="CurrencySymbol",Ve[Ve.CurrencyName=17]="CurrencyName",Ve[Ve.Currencies=18]="Currencies",Ve[Ve.Directionality=19]="Directionality",Ve[Ve.PluralCase=20]="PluralCase",Ve[Ve.ExtraData=21]="ExtraData",Ve))();const sa="en-US";
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
let Ah=sa;class ep{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zE{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${he(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let gs=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new zE,e})();function WE(){return mi(St(),te())}function mi(e,t){return new ms(Xe(e,t))}let ms=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=WE,e})();function KE(e){return e instanceof ms?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class np{}let YE=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=te(),n=tt(St().index,e);return function(e){return e[11]}(Bt(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),ZE=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=vt({token:e,providedIn:"root",factory:()=>null}),e})();class rp{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const JE=new rp("13.1.1"),Dl={};
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
function da(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(B(i)),an(i))for(let l=10;l<i.length;l++){const d=i[l],m=d[1].firstChild;null!==m&&da(d[1],d,m,r)}const s=n.type;if(8&s)da(e,t,n.child,r);else if(32&s){const l=du(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=Zc(t,n);if(Array.isArray(l))r.push(...l);else{const d=ns(t[16]);da(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ys{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return da(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(an(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),js(n,r))}this._attachedToViewContainer=!1}Vc(this._lView[1],this._lView)}onDestroy(t){bd(this._lView[1],this._lView,null,t)}markForCheck(){Bu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){fr(!0);try{Hu(e,t,n)}finally{fr(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,rs(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class XE extends ys{constructor(t){super(t),this._view=t}detectChanges(){Od(this._view)}checkNoChanges(){!function(e){fr(!0);try{Od(e)}finally{fr(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op extends gs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Fe(t);return new El(n,this.ngModule)}}function ip(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const tC=new At("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Fc});class El extends ep{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(hy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ip(this.componentDef.inputs)}get outputs(){return ip(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Dl,o);return i!==Dl||r===Dl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(np,C),l=i.get(ZE,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",v=r?function(e,t,n){if(h(e))return e.selectRootElement(t,n===_t.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):gu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?oo:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,A=function(e,t){return{components:[],scheduler:e||Fc,clean:ev,playerHandler:t||null,flags:0}}(),F=Js(0,null,null,1,0,null,null,null,null,null),G=os(null,F,A,_,null,null,s,d,l,i);let le,fe;ao(G);try{const be=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Zo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(ea(d,m,!0),null!==e&&(Ho(o,e,m),null!==d.classes&&Cu(o,e,d.classes),null!==d.styles&&ed(o,e,d.styles)));const v=r.createRenderer(e,t),_=os(n,Cd(t),null,t.onPush?64:16,n[20],d,r,v,i||null,null);return s.firstCreatePass&&(ho(co(d,n),s,t.type),Ad(s,d),Rd(d,n.length,1)),Xs(n,_),n[20]=_}(v,this.componentDef,G,s,d);if(v)if(r)Ho(d,v,["ng-version",JE.full]);else{const{attrs:Z,classes:je}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Zn(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);Z&&Ho(d,v,Z),je&&je.length>0&&Cu(d,v,je.join(" "))}if(fe=Je(F,20),void 0!==n){const Z=fe.projection=[];for(let je=0;je<this.ngContentSelectors.length;je++){const ot=n[je];Z.push(null!=ot?Array.from(ot):null)}}le=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=St();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),xd(e,r,t,Jo(e,t,1,null),n));const o=w(t,e,r.directiveStart,r);fn(o,t);const i=Xe(r,t);return i&&fn(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=St();t.contentQueries(1,s,d.directiveStart)}const l=St();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(hr(l.index),Td(n[1],l,0,l.directiveStart,l.directiveEnd,t),Sd(t,s)),s}(be,this.componentDef,G,A,[Ev]),is(F,G,null)}finally{uo()}return new oC(this.componentType,le,mi(fe,G),G,fe)}}class oC extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new XE(o),this.componentType=t}get injector(){return new ze(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
class yi{}class sp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vi=new Map;class lp extends yi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new op(this);const r=O(t);this._bootstrapComponents=vr(r.bootstrap),this._r3Injector=Vd(t,n,[{provide:yi,useValue:this},{provide:gs,useValue:this.componentFactoryResolver}],he(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Bn.THROW_IF_NOT_FOUND,r=I.Default){return t===Bn||t===yi||t===$u?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Cl extends sp{constructor(t){super(),this.moduleType=t,null!==O(t)&&function(e){const t=new Set;!function n(r){const o=O(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${he(t)} vs ${he(t.name)}`)}(i,vi.get(i),r),vi.set(i,r));const s=vr(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new lp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cp(e,t,n,r){return fp(te(),Xt(),e,t,n,r)}function dp(e,t,n,r,o,i){return function(e,t,n,r,o,i,s,l){const d=t+n;return function(e,t,n,r,o){const i=yo(e,t,n,r);return hn(e,t+2,o)||i}(e,d,o,i,s)?Cr(e,d+3,l?r.call(l,o,i,s):r(o,i,s)):vs(e,d+3)}(te(),Xt(),e,t,n,r,o,i)}function vs(e,t){const n=e[t];return n===Qe?void 0:n}function fp(e,t,n,r,o,i){const s=t+n;return hn(e,s,o)?Cr(e,s+1,i?r.call(i,o):r(o)):vs(e,s+1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yp(e,t){const n=rt();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=On(r.type)),s=Y(ls);try{const l=$o(!1),d=i();return $o(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,te(),o,d),d}finally{Y(s)}}function vp(e,t,n){const r=e+20,o=te(),i=pt(o,r);return Ds(o,r)?fp(o,Xt(),t,i.transform,n,i):i.transform(n)}function Dp(e,t,n,r){const o=e+20,i=te(),s=pt(i,o);return Ds(i,o)?function(e,t,n,r,o,i,s){const l=t+n;return yo(e,l,o,i)?Cr(e,l+2,s?r.call(s,o,i):r(o,i)):vs(e,l+2)}(i,Xt(),t,s.transform,n,r,s):s.transform(n,r)}function Ds(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _l(e){return t=>{setTimeout(e,void 0,t)}}const br=class extends re.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=_l(d),l&&(l=_l(l)),m&&(m=_l(m)));const v=super.subscribe({next:l,error:d,complete:m});return t instanceof ge.w0&&t.add(v),v}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function EC(){return this._results[ni()]()}class wl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ni(),r=wl.prototype;r[n]||(r[n]=EC)}get changes(){return this._changes||(this._changes=new br)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=jn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Es=(()=>{class e{}return e.__NG_ELEMENT_ID__=wC,e})();const CC=Es,_C=class extends CC{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=os(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),is(n,r,t),new ys(r)}};function wC(){return fa(St(),te())}function fa(e,t){return 4&e.type?new _C(t,e,mi(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ha=(()=>{class e{}return e.__NG_ELEMENT_ID__=bC,e})();function bC(){return _p(St(),te())}const MC=ha,Ep=class extends MC{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return mi(this._hostTNode,this._hostLView)}get injector(){return new ze(this._hostTNode,this._hostLView)}get parentInjector(){const t=Go(this._hostTNode,this._hostLView);if(gr(t)){const n=Kr(t,this._hostLView),r=Or(t);return new ze(n[1].data[r+8],n)}return new ze(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Cp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new El(Fe(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(yi,null);_&&(i=_)}const v=d.create(m,o,void 0,i);return this.insert(v.hostView,l),v}insert(t,n){const r=t._lView,o=r[1];if(an(r[3])){const v=this.indexOf(t);if(-1!==v)this.detach(v);else{const _=r[3],A=new Ep(_,_[6],_[3]);A.detach(A.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],oc(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=Du(i,s),d=r[11],m=Ws(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,rs(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),oc(bl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Cp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(js(bl(this._lContainer),n),Vc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&null!=js(bl(this._lContainer),n)?new ys(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Cp(e){return e[8]}function bl(e){return e[8]||(e[8]=[])}function _p(e,t){let n;const r=t[e.index];if(an(r))n=r;else{let o;if(8&e.type)o=B(r);else{const i=t[11];o=i.createComment("");const s=Xe(e,t);mo(i,Ws(i,s),o,function(e,t){return h(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Pd(r,t,o,e),Xs(t,n)}return new Ep(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ml{constructor(t){this.queryList=t,this.matches=null}clone(){return new Ml(this.queryList)}setDirty(){this.queryList.setDirty()}}class Il{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Il(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==xp(t,n).matches&&this.queries[n].setDirty()}}class wp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Tl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Tl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Sl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Sl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,SC(n,i)),this.matchTNodeWithReadOption(t,n,D(n,t,i,!1,!1))}else r===Es?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,D(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ms||o===ha||o===Es&&4&n.type)this.addMatch(n.index,-2);else{const i=D(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function SC(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function RC(e,t,n,r){return-1===n?function(e,t){return 11&e.type?mi(e,t):4&e.type?fa(e,t):null}(t,e):-2===n?function(e,t,n){return n===ms?mi(t,e):n===Es?fa(t,e):n===ha?_p(t,e):void 0}(e,t,r):w(e,e[1],n,t)}function bp(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:RC(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Al(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=bp(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],v=t[-d];for(let _=10;_<v.length;_++){const A=v[_];A[17]===A[3]&&Al(A[1],A,m,r)}if(null!==v[9]){const _=v[9];for(let A=0;A<_.length;A++){const F=_[A];Al(F[1],F,m,r)}}}}}return r}function Mp(e){const t=te(),n=rt(),r=Os();Pi(r+1);const o=xp(n,r);if(e.dirty&&Ut(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Al(n,t,r,[]):bp(n,t,o,r);e.reset(i,KE),e.notifyOnChanges()}return!0}return!1}function Ip(e,t,n){const r=rt();r.firstCreatePass&&(Rp(r,new wp(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),Ap(r,te(),t)}function Tp(e,t,n,r){const o=rt();if(o.firstCreatePass){const i=St();Rp(o,new wp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}Ap(o,te(),n)}function Sp(){return e=te(),t=Os(),e[19].queries[t].queryList;var e,t}function Ap(e,t,n){const r=new wl(4==(4&n));bd(e,t,r,r.destroy),null===t[19]&&(t[19]=new Il),t[19].queries.push(new Ml(r))}function Rp(e,t,n){null===e.queries&&(e.queries=new Tl),e.queries.track(new Sl(t,n))}function xp(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pp(e,t){return fa(e,t)}
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
function ma(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nl=new At("Application Initializer");let Ei=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ma,this.reject=ma,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(sl(i))n.push(i);else if(xf(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(tn(Nl,8))},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Qp=new At("AppId"),ZC={provide:Qp,useFactory:function(){return`${Ll()}${Ll()}${Ll()}`},deps:[]};function Ll(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const qp=new At("Platform Initializer"),Zp=new At("Platform ID"),Jp=new At("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Xp=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ya=new At("LocaleId"),eg=new At("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kl=(()=>{class e{compileModuleSync(n){return new Cl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=vr(O(n).declarations).reduce((s,l)=>{const d=Fe(l);return d&&s.push(new El(d)),s},[]);return new JC(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const e0=(()=>Promise.resolve(0))();function jl(e){"undefined"==typeof Zone?e0.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Mn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new br(!1),this.onMicrotaskEmpty=new br(!1),this.onStable=new br(!1),this.onError=new br(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=Oe.requestAnimationFrame,t=Oe.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Oe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ul(e),e.isCheckStableRunning=!0,Bl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ul(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return tg(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),ng(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return tg(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),ng(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ul(e),Bl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Mn.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Mn.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,n0,ma,ma);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const n0={};function Bl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ul(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function tg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function ng(e){e._nesting--,Bl(e)}class s0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new br,this.onMicrotaskEmpty=new br,this.onStable=new br,this.onError=new br}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let rg=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Mn.assertNotInAngularZone(),jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(tn(Mn))},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})(),og=(()=>{class e{constructor(){this._applications=new Map,Hl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Hl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();class a0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function u0(e){Hl=e}let nr,Hl=new a0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ig=new At("AllowMultipleToken");class f0{constructor(t,n){this.name=t,this.token=n}}function sg(e,t,n=[]){const r=`Platform: ${t}`,o=new At(r);return(i=[])=>{let s=ag();if(!s||s.injector.get(ig,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:Gu,useValue:"platform"});!function(e){if(nr&&!nr.destroyed&&!nr.injector.get(ig,!1))throw new _e("400","");nr=e.get(ug);const t=e.get(qp,null);t&&t.forEach(n=>n())}(Bn.create({providers:l,name:r}))}return function(e){const t=ag();if(!t)throw new _e("401","");return t}()}}function ag(){return nr&&!nr.destroyed?nr:null}let ug=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new s0:("zone.js"===e?void 0:e)||new Mn({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:Mn,useValue:l}];return l.run(()=>{const m=Bn.create({providers:d,parent:this.injector,name:n.moduleType.name}),v=n.create(m),_=v.injector.get(ts,null);if(!_)throw new _e("402","");return l.runOutsideAngular(()=>{const A=l.onError.subscribe({next:F=>{_.handleError(F)}});v.onDestroy(()=>{Vl(this._modules,v),A.unsubscribe()})}),function(e,t,n){try{const r=n();return sl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const A=v.injector.get(Ei);return A.runInitializers(),A.donePromise.then(()=>(function(e){gt(e,"Expected localeId to be defined"),"string"==typeof e&&(Ah=e.toLowerCase().replace(/_/g,"-"))}(v.injector.get(ya,sa)||sa),this._moduleDoBootstrap(v),v))})})}bootstrapModule(n,r=[]){const o=lg({},r);return function(e,t,n){const r=new Cl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(_s);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new _e("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new _e("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(tn(Bn))},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();function lg(e,t){return Array.isArray(t)?t.reduce(lg,e):Object.assign(Object.assign({},e),t)}let _s=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new W.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new W.y(m=>{let v;this._zone.runOutsideAngular(()=>{v=this._zone.onStable.subscribe(()=>{Mn.assertNotInAngularZone(),jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{Mn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{v.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,J.yG)(e),n=(0,J._6)(e,1/0),r=e;return r.length?1===r.length?(0,T.Xf)(r[0]):(0,y.J)(n)((0,ee.D)(r,t)):ne.E}(l,d.pipe((0,z.B)()))}bootstrap(n,r){if(!this._initStatus.done)throw new _e("405","");let o;o=n instanceof ep?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(yi),l=o.create(Bn.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(rg,null),v=m&&l.injector.get(og);return m&&v&&v.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Vl(this.components,l),v&&v.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new _e("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Vl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Jp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(tn(Mn),tn(Bn),tn(ts),tn(gs),tn(Ei))},e.\u0275prov=vt({token:e,factory:e.\u0275fac}),e})();function Vl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let dg=!0;function v0(){dg=!1}
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
let D0=(()=>{class e{}return e.__NG_ELEMENT_ID__=E0,e})();function E0(e){return function(e,t,n){if(Ft(e)&&!n){const r=tt(e.index,t);return new ys(r,r)}return 47&e.type?new ys(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(St(),te(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vg{constructor(){}supports(t){return as(t)}create(t){return new T0(t)}}const I0=(e,t)=>t;class T0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||I0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Eg(r,o,i)?n:r,l=Eg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,v=d-o;if(m!=v){for(let A=0;A<m;A++){const F=A<i.length?i[A]:i[A]=0,G=F+A;v<=G&&G<m&&(i[A]=F+1)}i[s.previousIndex]=v-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!as(t))throw new Error(`Error trying to diff '${he(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ni()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new S0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Dg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Dg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class S0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class A0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Dg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new A0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Eg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Cg{constructor(){}supports(t){return t instanceof Map||qu(t)}create(){return new R0}}class R0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||qu(t)))throw new Error(`Error trying to diff '${he(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new x0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class x0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _g(){return new Da([new vg])}let Da=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||_g()),deps:[[e,new Wo,new go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=vt({token:e,providedIn:"root",factory:_g}),e})();function wg(){return new Ea([new Cg])}let Ea=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||wg()),deps:[[e,new Wo,new go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=vt({token:e,providedIn:"root",factory:wg}),e})();const O0=[new Cg],N0=new Da([new vg]),L0=new Ea(O0),k0=sg(null,"core",[{provide:Zp,useValue:"unknown"},{provide:ug,deps:[Bn]},{provide:og,deps:[]},{provide:Xp,deps:[]}]),V0=[{provide:_s,useClass:_s,deps:[Mn,Bn,ts,gs,Ei]},{provide:tC,deps:[Mn],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:Ei,useClass:Ei,deps:[[new go,Nl]]},{provide:kl,useClass:kl,deps:[]},ZC,{provide:Da,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return N0},deps:[]},{provide:Ea,useFactory:function(){return L0},deps:[]},{provide:ya,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||sa},deps:[[new Qi(ya),new go,new Wo]]},{provide:eg,useValue:"USD"}];
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
       */let G0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(tn(_s))},e.\u0275mod=Ar({type:e}),e.\u0275inj=Zt({providers:V0}),e})();
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
       */,8062:(Ue,se,M)=>{M.d(se,{Bz:()=>Ui,lC:()=>E});var y=M(7587),T=M(8306);const{isArray:ne}=Array,{getPrototypeOf:J,prototype:ee,keys:Ce}=Object;var W=M(2076),z=M(4671),N=M(4004);const{isArray:Ee}=Array;var xe=M(3269),X=M(5403),Be=M(9672);function Ie(...c){const u=(0,xe.yG)(c),a=(0,xe.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(ne(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&J(c)===ee}(u)){const a=Ce(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,W.D)([],u);const D=new T.y(function(c,u,a=z.y){return f=>{ve(u,()=>{const{length:g}=c,D=new Array(g);let w=g,S=g;for(let V=0;V<g;V++)ve(u,()=>{const ye=(0,W.D)(c[V],u);let ze=!1;ye.subscribe(new X.Q(f,Re=>{D[V]=Re,ze||(ze=!0,S--),S||f.next(a(D.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):z.y));return a?D.pipe(function(c){return(0,N.U)(u=>function(c,u){return Ee(u)?c(...u):c(u)}(c,u))}(a)):D}function ve(c,u,a){c?(0,Be.f)(a,c,u):u()}var Pe=M(8189);function qe(...c){return(0,Pe.J)(1)((0,W.D)(c,(0,xe.yG)(c)))}var we=M(8421);function pe(c){return new T.y(u=>{(0,we.Xf)(c()).subscribe(u)})}var j=M(727),k=M(4482);function U(){return(0,k.e)((c,u)=>{let a=null;c._refCount++;const f=new X.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,D=a;a=null,g&&(!D||g===D)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class K extends T.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,k.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new j.w0;const a=this.getSubject();u.add(this.source.subscribe(new X.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=j.w0.EMPTY)}return u}refCount(){return U()(this)}}var $=M(9646),H=M(1135),Le=M(6805),et=M(515),Mt=M(7579);function Ge(c,u){return(0,k.e)((a,f)=>{let g=null,D=0,w=!1;const S=()=>w&&!g&&f.complete();a.subscribe(new X.Q(f,V=>{null==g||g.unsubscribe();let ye=0;const ze=D++;(0,we.Xf)(c(V,ze)).subscribe(g=new X.Q(f,Re=>f.next(u?u(V,Re,ze,ye++):Re),()=>{g=null,S()}))},()=>{w=!0,S()}))})}function nn(c,u,a,f,g){return(D,w)=>{let S=a,V=u,ye=0;D.subscribe(new X.Q(w,ze=>{const Re=ye++;V=S?c(V,ze,Re):(S=!0,ze),f&&w.next(V)},g&&(()=>{S&&w.next(V),w.complete()})))}}function Et(c,u){return(0,k.e)(nn(c,u,arguments.length>=2,!0))}function Pt(c){return(0,k.e)((u,a)=>{let D,f=null,g=!1;f=u.subscribe(new X.Q(a,void 0,void 0,w=>{D=(0,we.Xf)(c(w,Pt(c)(u))),f?(f.unsubscribe(),f=null,D.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,D.subscribe(a))})}var Vt=M(9300);function gt(c){return c<=0?()=>et.E:(0,k.e)((u,a)=>{let f=[];u.subscribe(new X.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}var it=M(8068),$t=M(6590),vt=M(5698),Tn=M(4351),Zt=M(590),mt=M(5577),bt=M(8505),rn=M(9808);
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
class on{constructor(u,a){this.id=u,this.url=a}}class rr extends on{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class yt extends on{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Dn extends on{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Ir extends on{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class q extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class I extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class P extends on{constructor(u,a,f,g,D){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=D}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class oe extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Y extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class De{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class de{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class me{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class $e{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ot{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class _t{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Se="primary";class nt{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function He(c){return new nt(c)}const En="ngNavigationCancelingError";function Oe(c){const u=Error("NavigationCancelingError: "+c);return u[En]=!0,u}function Cn(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let D=0;D<f.length;D++){const w=f[D],S=c[D];if(w.startsWith(":"))g[w.substring(1)]=S;else if(w!==S.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ke(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let D=0;D<a.length;D++)if(g=a[D],!or(c[g],u[g]))return!1;return!0}function or(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,D)=>f[D]===g)}return c===u}function ir(c){return Array.prototype.concat.apply([],c)}function Vn(c){return c.length>0?c[c.length-1]:null}function at(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Gt(c){return(0,y.CqO)(c)?c:(0,y.QGY)(c)?(0,W.D)(Promise.resolve(c)):(0,$.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kr={exact:function ar(c,u,a){if(!O(c.segments,u.segments)||!sn(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!ar(c.children[f],u.children[f],a))return!1;return!0},subset:ur},Sr={exact:function(c,u){return Ke(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>or(c[a],u[a]))},ignored:()=>!0};function sr(c,u,a){return kr[a.paths](c.root,u.root,a.matrixParams)&&Sr[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function ur(c,u,a){return Sn(c,u,u.segments,a)}function Sn(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!O(g,a)||u.hasChildren()||!sn(g,a,f))}if(c.segments.length===a.length){if(!O(c.segments,a)||!sn(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!ur(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),D=a.slice(c.segments.length);return!!(O(c.segments,g)&&sn(c.segments,g,f)&&c.children[Se])&&Sn(c.children[Se],u,D,f)}}function sn(c,u,a){return u.every((f,g)=>Sr[a](c[g].parameters,f.parameters))}class mn{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=He(this.queryParams)),this._queryParamMap}toString(){return Q.serialize(this)}}class Fe{constructor(u,a){this.segments=u,this.children=a,this.parent=null,at(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ae(this)}}class Lt{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=He(this.parameters)),this._parameterMap}toString(){return $n(this)}}function O(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class b{}class L{parse(u){const a=new Xr(u);return new mn(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${ke(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${ct(a)}=${ct(g)}`).join("&"):`${ct(a)}=${ct(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const Q=new L;function Ae(c){return c.segments.map(u=>$n(u)).join("/")}function ke(c,u){if(!c.hasChildren())return Ae(c);if(u){const a=c.children[Se]?ke(c.children[Se],!1):"",f=[];return at(c.children,(g,D)=>{D!==Se&&f.push(`${D}:${ke(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return at(c.children,(f,g)=>{g===Se&&(a=a.concat(u(f,g)))}),at(c.children,(f,g)=>{g!==Se&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===Se?[ke(c.children[Se],!1)]:[`${g}:${ke(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[Se]?`${Ae(c)}/${a[0]}`:`${Ae(c)}/(${a.join("//")})`}}function kt(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ct(c){return kt(c).replace(/%3B/gi,";")}function We(c){return kt(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ut(c){return decodeURIComponent(c)}function Qt(c){return ut(c.replace(/\+/g,"%20"))}function $n(c){return`${We(c.path)}${function(c){return Object.keys(c).map(u=>`;${We(u)}=${We(c[u])}`).join("")}(c.parameters)}`}const Dt=/^[^\/()?;=#]+/;function Rn(c){const u=c.match(Dt);return u?u[0]:""}const Gn=/^[^=?&#]+/,Jr=/^[^&#]+/;class Xr{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Fe([],{}):new Fe([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[Se]=new Fe(u,a)),f}parseSegment(){const u=Rn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new Lt(ut(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=Rn(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=Rn(this.remaining);g&&(f=g,this.capture(f))}u[ut(a)]=ut(f)}parseQueryParam(u){const a=function(c){const u=c.match(Gn);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(Jr);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=Qt(a),D=Qt(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(D)}else u[g]=D}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=Rn(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let D;f.indexOf(":")>-1?(D=f.substr(0,f.indexOf(":")),this.capture(D),this.capture(":")):u&&(D=Se);const w=this.parseChildren();a[D]=1===Object.keys(w).length?w[Se]:new Fe([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xn{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Tt(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=Tt(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=vn(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return vn(u,this._root).map(a=>a.value)}}function Tt(c,u){if(c===u.value)return u;for(const a of u.children){const f=Tt(c,a);if(f)return f}return null}function vn(c,u){if(c===u.value)return[u];for(const a of u.children){const f=vn(c,a);if(f.length)return f.unshift(u),f}return[]}class zt{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function jt(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class dt extends xn{constructor(u,a){super(u),this.snapshot=a,Jt(this,u)}toString(){return this.snapshot.toString()}}function eo(c,u){const a=function(c,u){const w=new Ft([],{},{},"",{},Se,u,null,c.root,-1,{});return new Rr("",new zt(w,[]))}(c,u),f=new H.X([new Lt("",{})]),g=new H.X({}),D=new H.X({}),w=new H.X({}),S=new H.X(""),V=new Bt(f,g,w,S,D,Se,u,a.root);return V.snapshot=a.root,new dt(new zt(V,[]),a)}class Bt{constructor(u,a,f,g,D,w,S,V){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=S,this._futureSnapshot=V}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,N.U)(u=>He(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,N.U)(u=>He(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function an(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],D=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(D.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Ft{constructor(u,a,f,g,D,w,S,V,ye,ze,Re){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=S,this.routeConfig=V,this._urlSegment=ye,this._lastPathIndex=ze,this._resolve=Re}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=He(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=He(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Rr extends xn{constructor(u,a){super(a),this.url=u,Jt(this,a)}toString(){return _o(this._root)}}function Jt(c,u){u.value._routerState=c,u.children.forEach(a=>Jt(c,a))}function _o(c){const u=c.children.length>0?` { ${c.children.map(_o).join(", ")} } `:"";return`${c.value}${u}`}function wo(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,Ke(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),Ke(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!Ke(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),Ke(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function Br(c,u){const a=Ke(c.params,u.params)&&function(c,u){return O(c,u)&&c.every((a,f)=>Ke(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||Br(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ur(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Ur(c,f,g);return Ur(c,f)})}(c,u,a);return new zt(f,g)}{if(c.shouldAttach(u.value)){const D=c.retrieve(u.value);if(null!==D){const w=D.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(S=>Ur(c,S)),w}}const f=function(c){return new Bt(new H.X(c.url),new H.X(c.params),new H.X(c.queryParams),new H.X(c.fragment),new H.X(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(D=>Ur(c,D));return new zt(f,g)}}function Hr(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function Vr(c){return"object"==typeof c&&null!=c&&c.outlets}function bo(c,u,a,f,g){let D={};return f&&at(f,(w,S)=>{D[S]=Array.isArray(w)?w.map(V=>`${V}`):`${w}`}),new mn(a.root===c?u:wi(a.root,c,u),D,g)}function wi(c,u,a){const f={};return at(c.children,(g,D)=>{f[D]=g===u?a:wi(g,u,a)}),new Fe(c.segments,f)}class bi{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&Hr(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find(Vr);if(g&&g!==Vn(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Mo{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function to(c,u,a){if(c||(c=new Fe([],{})),0===c.segments.length&&c.hasChildren())return Pn(c,u,a);const f=function(c,u,a){let f=0,g=u;const D={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return D;const w=c.segments[g],S=a[f];if(Vr(S))break;const V=`${S}`,ye=f<a.length-1?a[f+1]:null;if(g>0&&void 0===V)break;if(V&&ye&&"object"==typeof ye&&void 0===ye.outlets){if(!no(V,ye,w))return D;f+=2}else{if(!no(V,{},w))return D;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const D=new Fe(c.segments.slice(0,f.pathIndex),{});return D.children[Se]=new Fe(c.segments.slice(f.pathIndex),c.children),Pn(D,0,g)}return f.match&&0===g.length?new Fe(c.segments,{}):f.match&&!c.hasChildren()?To(c,u,a):f.match?Pn(c,0,g):To(c,u,a)}function Pn(c,u,a){if(0===a.length)return new Fe(c.segments,{});{const f=function(c){return Vr(c[0])?c[0].outlets:{[Se]:c}}(a),g={};return at(f,(D,w)=>{"string"==typeof D&&(D=[D]),null!==D&&(g[w]=to(c.children[w],u,D))}),at(c.children,(D,w)=>{void 0===f[w]&&(g[w]=D)}),new Fe(c.segments,g)}}function To(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const D=a[g];if(Vr(D)){const V=Ca(D.outlets);return new Fe(f,V)}if(0===g&&Hr(a[0])){f.push(new Lt(c.segments[u].path,On(a[0]))),g++;continue}const w=Vr(D)?D.outlets[Se]:`${D}`,S=g<a.length-1?a[g+1]:null;w&&S&&Hr(S)?(f.push(new Lt(w,On(S))),g+=2):(f.push(new Lt(w,{})),g++)}return new Fe(f,{})}function Ca(c){const u={};return at(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=To(new Fe([],{}),0,a))}),u}function On(c){const u={};return at(c,(a,f)=>u[f]=`${a}`),u}function no(c,u,a){return c==a.path&&Ke(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class So{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),wo(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=jt(a);u.children.forEach(D=>{const w=D.value.outlet;this.deactivateRoutes(D,g[w],f),delete g[w]}),at(g,(D,w)=>{this.deactivateRouteAndItsChildren(D,f)})}deactivateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(g===D)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else D&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=jt(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);if(f&&f.outlet){const w=f.outlet.detach(),S=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:S})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=jt(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=jt(a);u.children.forEach(D=>{this.activateRoutes(D,g[D.value.outlet],f),this.forwardEvent(new Ot(D.value.snapshot))}),u.children.length&&this.forwardEvent(new $e(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(wo(g),g===D)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const S=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(S.contexts),w.attachRef=S.componentRef,w.route=S.route.value,w.outlet&&w.outlet.attach(S.componentRef,S.route.value),wo(S.route.value),this.activateChildRoutes(u,null,w.children)}else{const S=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(g.snapshot),V=S?S.module.componentFactoryResolver:null;w.attachRef=null,w.route=g,w.resolver=V,w.outlet&&w.outlet.activateWith(g,V),this.activateChildRoutes(u,null,w.children)}}else this.activateChildRoutes(u,null,f)}}class Ao{constructor(u,a){this.routes=u,this.module=a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fn(c){return"function"==typeof c}function lr(c){return c instanceof mn}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cr=Symbol("INITIAL_VALUE");function dr(){return Ge(c=>Ie(c.map(u=>u.pipe((0,vt.q)(1),function(...c){const u=(0,xe.yG)(c);return(0,k.e)((a,f)=>{(u?qe(c,a,u):qe(c,a)).subscribe(f)})}(cr)))).pipe(Et((u,a)=>{let f=!1;return a.reduce((g,D,w)=>g!==cr?g:(D===cr&&(f=!0),f||!1!==D&&w!==a.length-1&&!lr(D)?g:D),u)},cr),(0,Vt.h)(u=>u!==cr),(0,N.U)(u=>lr(u)?u:!0===u),(0,vt.q)(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ai{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new p,this.attachRef=null}}class p{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const f=this.getOrCreateContext(u);f.outlet=a,this.contexts.set(u,f)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new Ai,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let E=(()=>{class c{constructor(a,f,g,D,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new y.vpe,this.deactivateEvents=new y.vpe,this.attachEvents=new y.vpe,this.detachEvents=new y.vpe,this.name=D||Se,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),S=this.parentContexts.getOrCreateContext(this.name).children,V=new h(a,S,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,V),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(y.Y36(p),y.Y36(y.s_b),y.Y36(y._Vd),y.$8M("name"),y.Y36(y.sBO))},c.\u0275dir=y.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class h{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===Bt?this.route:u===p?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let C=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=y.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&y._UZ(0,"router-outlet")},directives:[E],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function x(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];B(f,ie(u,f))}}function B(c,u){c.children&&x(c.children,u)}function ie(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function Te(c){const u=c.children&&c.children.map(Te),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==Se&&(a.component=C),a}function Ze(c){return c.outlet||Se}function Xe(c,u){const a=c.filter(f=>Ze(f)===u);return a.push(...c.filter(f=>Ze(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const ht={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Je(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},ht):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const D=(u.matcher||Cn)(a,c,u);if(!D)return Object.assign({},ht);const w={};at(D.posParams,(V,ye)=>{w[ye]=V.path});const S=D.consumed.length>0?Object.assign(Object.assign({},w),D.consumed[D.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:D.consumed,lastChild:D.consumed.length,parameters:S,positionalParamSegments:null!==(f=D.posParams)&&void 0!==f?f:{}}}function pt(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>qt(c,u,f)&&Ze(f)!==Se)}(c,a,f)){const w=new Fe(u,function(c,u,a,f){const g={};g[Se]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const D of a)if(""===D.path&&Ze(D)!==Se){const w=new Fe([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[Ze(D)]=w}return g}(c,u,f,new Fe(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>qt(c,u,f))}(c,a,f)){const w=new Fe(c.segments,function(c,u,a,f,g,D){const w={};for(const S of f)if(qt(c,a,S)&&!g[Ze(S)]){const V=new Fe([],{});V._sourceSegment=c,V._segmentIndexShift="legacy"===D?c.segments.length:u.length,w[Ze(S)]=V}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const D=new Fe(c.segments,c.children);return D._sourceSegment=c,D._segmentIndexShift=u.length,{segmentGroup:D,slicedSegments:a}}function qt(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function Nn(c,u,a,f){return!!(Ze(c)===f||f!==Se&&qt(u,a,c))&&("**"===c.path||Je(u,c,a).matched)}function xr(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ne{constructor(u){this.segmentGroup=u||null}}class xo{constructor(u){this.urlTree=u}}function Po(c){return new T.y(u=>u.error(new Ne(c)))}function As(c){return new T.y(u=>u.error(new xo(c)))}function _a(c){return new T.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class ba{constructor(u,a,f,g,D){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=D,this.allowRedirects=!0,this.ngModule=u.get(y.h0i)}apply(){const u=pt(this.urlTree.root,[],[],this.config).segmentGroup,a=new Fe(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,Se).pipe((0,N.U)(D=>this.createUrlTree(rt(D),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Pt(D=>{if(D instanceof xo)return this.allowRedirects=!1,this.match(D.urlTree);throw D instanceof Ne?this.noMatchError(D):D}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,Se).pipe((0,N.U)(g=>this.createUrlTree(rt(g),u.queryParams,u.fragment))).pipe(Pt(g=>{throw g instanceof Ne?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new Fe([],{[Se]:u}):u;return new mn(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,N.U)(D=>new Fe([],D))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const D of Object.keys(f.children))"primary"===D?g.unshift(D):g.push(D);return(0,W.D)(g).pipe((0,Tn.b)(D=>{const w=f.children[D],S=Xe(a,D);return this.expandSegmentGroup(u,S,w,D).pipe((0,N.U)(V=>({segment:V,outlet:D})))}),Et((D,w)=>(D[w.outlet]=w.segment,D),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Vt.h)((g,D)=>c(g,D,f)):z.y,gt(1),a?(0,$t.d)(u):(0,it.T)(()=>new Le.K))}())}expandSegment(u,a,f,g,D,w){return(0,W.D)(f).pipe((0,Tn.b)(S=>this.expandSegmentAgainstRoute(u,a,f,S,g,D,w).pipe(Pt(ye=>{if(ye instanceof Ne)return(0,$.of)(null);throw ye}))),(0,Zt.P)(S=>!!S),Pt((S,V)=>{if(S instanceof Le.K||"EmptyError"===S.name){if(xr(a,g,D))return(0,$.of)(new Fe([],{}));throw new Ne(a)}throw S}))}expandSegmentAgainstRoute(u,a,f,g,D,w,S){return Nn(g,a,D,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,D,w):S&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w):Po(a):Po(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const D=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?As(D):this.lineralizeSegments(f,D).pipe((0,mt.z)(w=>{const S=new Fe(w,{});return this.expandSegment(u,S,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){const{matched:S,consumedSegments:V,lastChild:ye,positionalParamSegments:ze}=Je(a,g,D);if(!S)return Po(a);const Re=this.applyRedirectCommands(V,g.redirectTo,ze);return g.redirectTo.startsWith("/")?As(Re):this.lineralizeSegments(g,Re).pipe((0,mt.z)(st=>this.expandSegment(u,a,f,st.concat(D.slice(ye)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,D){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,$.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,N.U)(st=>(f._loadedConfig=st,new Fe(g,{})))):(0,$.of)(new Fe(g,{}));const{matched:w,consumedSegments:S,lastChild:V}=Je(a,f,g);if(!w)return Po(a);const ye=g.slice(V);return this.getChildConfig(u,f,g).pipe((0,mt.z)(Re=>{const st=Re.module,lt=Re.routes,{segmentGroup:kn,slicedSegments:ln}=pt(a,S,ye,lt),cn=new Fe(kn.segments,kn.children);if(0===ln.length&&cn.hasChildren())return this.expandChildren(st,lt,cn).pipe((0,N.U)(po=>new Fe(S,po)));if(0===lt.length&&0===ln.length)return(0,$.of)(new Fe(S,{}));const qn=Ze(f)===D;return this.expandSegment(st,cn,lt,ln,qn?Se:D,!0).pipe((0,N.U)(dn=>new Fe(S.concat(dn.segments),dn.children)))}))}getChildConfig(u,a,f){return a.children?(0,$.of)(new Ao(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,$.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,mt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,N.U)(D=>(a._loadedConfig=D,D))):(c=a,new T.y(u=>u.error(Oe(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,$.of)(new Ao([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,$.of)(!0);const D=g.map(w=>{const S=u.get(w);let V;if((c=S)&&Fn(c.canLoad))V=S.canLoad(a,f);else{if(!Fn(S))throw new Error("Invalid CanLoad guard");V=S(a,f)}var c;return Gt(V)});return(0,$.of)(D).pipe(dr(),(0,bt.b)(w=>{if(!lr(w))return;const S=Oe(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw S.url=w,S}),(0,N.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,$.of)(f);if(g.numberOfChildren>1||!g.children[Se])return _a(u.redirectTo);g=g.children[Se]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const D=this.createSegmentGroup(u,a.root,f,g);return new mn(D,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return at(u,(g,D)=>{if("string"==typeof g&&g.startsWith(":")){const S=g.substring(1);f[D]=a[S]}else f[D]=g}),f}createSegmentGroup(u,a,f,g){const D=this.createSegments(u,a.segments,f,g);let w={};return at(a.children,(S,V)=>{w[V]=this.createSegmentGroup(u,S,f,g)}),new Fe(D,w)}createSegments(u,a,f,g){return a.map(D=>D.path.startsWith(":")?this.findPosParam(u,D,g):this.findOrReturn(D,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function rt(c){const u={};for(const f of Object.keys(c.children)){const D=rt(c.children[f]);(D.segments.length>0||D.hasChildren())&&(u[f]=D)}return function(c){if(1===c.numberOfChildren&&c.children[Se]){const u=c.children[Se];return new Fe(c.segments.concat(u.segments),u.children)}return c}(new Fe(c.segments,u))}
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
class St{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class io{constructor(u,a){this.component=u,this.route=a}}function so(c,u,a){const f=c._root;return Oo(f,u?u._root:null,a,[f.value])}function $r(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function Oo(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=jt(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=c.value,w=u?u.value:null,S=a?a.getContext(c.value.outlet):null;if(w&&D.routeConfig===w.routeConfig){const V=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!O(c.url,u.url);case"pathParamsOrQueryParamsChange":return!O(c.url,u.url)||!Ke(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Br(c,u)||!Ke(c.queryParams,u.queryParams);default:return!Br(c,u)}}(w,D,D.routeConfig.runGuardsAndResolvers);V?g.canActivateChecks.push(new St(f)):(D.data=w.data,D._resolvedData=w._resolvedData),Oo(c,u,D.component?S?S.children:null:a,f,g),V&&S&&S.outlet&&S.outlet.isActivated&&g.canDeactivateChecks.push(new io(S.outlet.component,w))}else w&&fr(u,S,g),g.canActivateChecks.push(new St(f)),Oo(c,null,D.component?S?S.children:null:a,f,g)})(w,D[w.value.outlet],a,f.concat([w.value]),g),delete D[w.value.outlet]}),at(D,(w,S)=>fr(w,a.getContext(S),g)),g}function fr(c,u,a){const f=jt(c),g=c.value;at(f,(D,w)=>{fr(D,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new io(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
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
class Aa{}function No(c){return new T.y(u=>u.error(c))}class Os{constructor(u,a,f,g,D,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=D,this.relativeLinkResolution=w}recognize(){const u=pt(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,Se);if(null===a)return null;const f=new Ft([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},Se,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new zt(f,a),D=new Rr(this.url,g);return this.inheritParamsAndData(D._root),D}inheritParamsAndData(u){const a=u.value,f=an(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const D of Object.keys(a.children)){const w=a.children[D],S=Xe(u,D),V=this.processSegmentGroup(S,w,D);if(null===V)return null;f.push(...V)}const g=ao(f);return g.sort((u,a)=>u.value.outlet===Se?-1:a.value.outlet===Se?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const D of u){const w=this.processSegmentAgainstRoute(D,a,f,g);if(null!==w)return w}return xr(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!Nn(u,a,f,g))return null;let D,w=[],S=[];if("**"===u.path){const lt=f.length>0?Vn(f).parameters:{};D=new Ft(f,lt,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ni(u),Ze(u),u.component,u,Oi(a),Fi(a)+f.length,uo(u))}else{const lt=Je(a,u,f);if(!lt.matched)return null;w=lt.consumedSegments,S=f.slice(lt.lastChild),D=new Ft(w,lt.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ni(u),Ze(u),u.component,u,Oi(a),Fi(a)+w.length,uo(u))}const V=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:ye,slicedSegments:ze}=pt(a,w,S,V.filter(lt=>void 0===lt.redirectTo),this.relativeLinkResolution);var c;if(0===ze.length&&ye.hasChildren()){const lt=this.processChildren(V,ye);return null===lt?null:[new zt(D,lt)]}if(0===V.length&&0===ze.length)return[new zt(D,[])];const Re=Ze(u)===g,st=this.processSegment(V,ye,ze,Re?Se:g);return null===st?null:[new zt(D,st)]}}function Fs(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function ao(c){const u=[],a=new Set;for(const f of c){if(!Fs(f)){u.push(f);continue}const g=u.find(D=>f.value.routeConfig===D.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=ao(f.children);u.push(new zt(f.value,g))}return u.filter(f=>!a.has(f))}function Oi(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Fi(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function Ni(c){return c.data||{}}function uo(c){return c.resolve||{}}
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
function Lo(c){return Ge(u=>{const a=c(u);return a?(0,W.D)(a).pipe((0,N.U)(()=>u)):(0,$.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Na extends class{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Li=new y.OlP("ROUTES");class Ls{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,N.U)(D=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=D.create(u);return new Ao(ir(w.injector.get(Li,void 0,y.XFs.Self|y.XFs.Optional)).map(Te),w)}),Pt(D=>{throw a._loader$=void 0,D}));return a._loader$=new K(g,()=>new Mt.x).pipe(U()),a._loader$}loadModuleFactory(u){return Gt(u()).pipe((0,mt.z)(a=>a instanceof y.YKP?(0,$.of)(a):(0,W.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jo{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Bo(c){throw c}function ki(c,u,a){return u.parse("/")}function ji(c,u){return(0,$.of)(null)}const La={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},pr={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Wt=(()=>{class c{constructor(a,f,g,D,w,S,V){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=D,this.config=V,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Mt.x,this.errorHandler=Bo,this.malformedUriErrorHandler=ki,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:ji,afterPreactivation:ji},this.urlHandlingStrategy=new jo,this.routeReuseStrategy=new Na,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(y.h0i),this.console=w.get(y.c2e);const Re=w.get(y.R0b);this.isNgZoneEnabled=Re instanceof y.R0b&&y.R0b.isInAngularZone(),this.resetConfig(V),this.currentUrlTree=new mn(new Fe([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new Ls(w,S,st=>this.triggerEvent(new De(st)),st=>this.triggerEvent(new de(st))),this.routerState=eo(this.currentUrlTree,this.rootComponentType),this.transitions=new H.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,Vt.h)(g=>0!==g.id),(0,N.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),Ge(g=>{let D=!1,w=!1;return(0,$.of)(g).pipe((0,bt.b)(S=>{this.currentNavigation={id:S.id,initialUrl:S.currentRawUrl,extractedUrl:S.extractedUrl,trigger:S.source,extras:S.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Ge(S=>{const V=this.browserUrlTree.toString(),ye=!this.navigated||S.extractedUrl.toString()!==V||V!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ye)&&this.urlHandlingStrategy.shouldProcessUrl(S.rawUrl))return Uo(S.source)&&(this.browserUrlTree=S.extractedUrl),(0,$.of)(S).pipe(Ge(Re=>{const st=this.transitions.getValue();return f.next(new rr(Re.id,this.serializeUrl(Re.extractedUrl),Re.source,Re.restoredState)),st!==this.transitions.getValue()?et.E:Promise.resolve(Re)}),function(c,u,a,f){return Ge(g=>function(c,u,a,f,g){return new ba(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,N.U)(D=>Object.assign(Object.assign({},g),{urlAfterRedirects:D}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,bt.b)(Re=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:Re.urlAfterRedirects})}),function(c,u,a,f,g){return(0,mt.z)(D=>function(c,u,a,f,g="emptyOnly",D="legacy"){try{const w=new Os(c,u,a,f,g,D).recognize();return null===w?No(new Aa):(0,$.of)(w)}catch(w){return No(w)}}(c,u,D.urlAfterRedirects,a(D.urlAfterRedirects),f,g).pipe((0,N.U)(w=>Object.assign(Object.assign({},D),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,Re=>this.serializeUrl(Re),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,bt.b)(Re=>{if("eager"===this.urlUpdateStrategy){if(!Re.extras.skipLocationChange){const lt=this.urlHandlingStrategy.merge(Re.urlAfterRedirects,Re.rawUrl);this.setBrowserUrl(lt,Re)}this.browserUrlTree=Re.urlAfterRedirects}const st=new q(Re.id,this.serializeUrl(Re.extractedUrl),this.serializeUrl(Re.urlAfterRedirects),Re.targetSnapshot);f.next(st)}));if(ye&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:st,extractedUrl:lt,source:kn,restoredState:ln,extras:cn}=S,qn=new rr(st,this.serializeUrl(lt),kn,ln);f.next(qn);const Yr=eo(lt,this.rootComponentType).snapshot;return(0,$.of)(Object.assign(Object.assign({},S),{targetSnapshot:Yr,urlAfterRedirects:lt,extras:Object.assign(Object.assign({},cn),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=S.rawUrl,S.resolve(null),et.E}),Lo(S=>{const{targetSnapshot:V,id:ye,extractedUrl:ze,rawUrl:Re,extras:{skipLocationChange:st,replaceUrl:lt}}=S;return this.hooks.beforePreactivation(V,{navigationId:ye,appliedUrlTree:ze,rawUrlTree:Re,skipLocationChange:!!st,replaceUrl:!!lt})}),(0,bt.b)(S=>{const V=new I(S.id,this.serializeUrl(S.extractedUrl),this.serializeUrl(S.urlAfterRedirects),S.targetSnapshot);this.triggerEvent(V)}),(0,N.U)(S=>Object.assign(Object.assign({},S),{guards:so(S.targetSnapshot,S.currentSnapshot,this.rootContexts)})),function(c,u){return(0,mt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:D,canDeactivateChecks:w}}=a;return 0===w.length&&0===D.length?(0,$.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,W.D)(c).pipe((0,mt.z)(g=>function(c,u,a,f,g){const D=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!D||0===D.length)return(0,$.of)(!0);const w=D.map(S=>{const V=$r(S,u,g);let ye;if(function(c){return c&&Fn(c.canDeactivate)}(V))ye=Gt(V.canDeactivate(c,u,a,f));else{if(!Fn(V))throw new Error("Invalid CanDeactivate guard");ye=Gt(V(c,u,a,f))}return ye.pipe((0,Zt.P)())});return(0,$.of)(w).pipe(dr())}(g.component,g.route,a,u,f)),(0,Zt.P)(g=>!0!==g,!0))}(w,f,g,c).pipe((0,mt.z)(S=>S&&function(c){return"boolean"==typeof c}(S)?function(c,u,a,f){return(0,W.D)(u).pipe((0,Tn.b)(g=>qe(function(c,u){return null!==c&&u&&u(new me(c)),(0,$.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new Ct(c)),(0,$.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],D=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>pe(()=>{const S=w.guards.map(V=>{const ye=$r(V,w.node,a);let ze;if(function(c){return c&&Fn(c.canActivateChild)}(ye))ze=Gt(ye.canActivateChild(f,c));else{if(!Fn(ye))throw new Error("Invalid CanActivateChild guard");ze=Gt(ye(f,c))}return ze.pipe((0,Zt.P)())});return(0,$.of)(S).pipe(dr())}));return(0,$.of)(D).pipe(dr())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,$.of)(!0);const g=f.map(D=>pe(()=>{const w=$r(D,u,a);let S;if(function(c){return c&&Fn(c.canActivate)}(w))S=Gt(w.canActivate(u,c));else{if(!Fn(w))throw new Error("Invalid CanActivate guard");S=Gt(w(u,c))}return S.pipe((0,Zt.P)())}));return(0,$.of)(g).pipe(dr())}(c,g.route,a))),(0,Zt.P)(g=>!0!==g,!0))}(f,D,c,u):(0,$.of)(S)),(0,N.U)(S=>Object.assign(Object.assign({},a),{guardsResult:S})))})}(this.ngModule.injector,S=>this.triggerEvent(S)),(0,bt.b)(S=>{if(lr(S.guardsResult)){const ye=Oe(`Redirecting to "${this.serializeUrl(S.guardsResult)}"`);throw ye.url=S.guardsResult,ye}const V=new P(S.id,this.serializeUrl(S.extractedUrl),this.serializeUrl(S.urlAfterRedirects),S.targetSnapshot,!!S.guardsResult);this.triggerEvent(V)}),(0,Vt.h)(S=>!!S.guardsResult||(this.restoreHistory(S),this.cancelNavigationTransition(S,""),!1)),Lo(S=>{if(S.guards.canActivateChecks.length)return(0,$.of)(S).pipe((0,bt.b)(V=>{const ye=new oe(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot);this.triggerEvent(ye)}),Ge(V=>{let ye=!1;return(0,$.of)(V).pipe(function(c,u){return(0,mt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,$.of)(a);let D=0;return(0,W.D)(g).pipe((0,Tn.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,$.of)({});const D={};return(0,W.D)(g).pipe((0,mt.z)(w=>function(c,u,a,f){const g=$r(c,u,f);return Gt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe((0,bt.b)(S=>{D[w]=S}))),gt(1),(0,mt.z)(()=>Object.keys(D).length===g.length?(0,$.of)(D):et.E))}(c._resolve,c,u,f).pipe((0,N.U)(D=>(c._resolvedData=D,c.data=Object.assign(Object.assign({},c.data),an(c,a).resolve),null)))}(w.route,f,c,u)),(0,bt.b)(()=>D++),gt(1),(0,mt.z)(w=>D===g.length?(0,$.of)(a):et.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,bt.b)({next:()=>ye=!0,complete:()=>{ye||(this.restoreHistory(V),this.cancelNavigationTransition(V,"At least one route resolver didn't emit any value."))}}))}),(0,bt.b)(V=>{const ye=new Y(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot);this.triggerEvent(ye)}))}),Lo(S=>{const{targetSnapshot:V,id:ye,extractedUrl:ze,rawUrl:Re,extras:{skipLocationChange:st,replaceUrl:lt}}=S;return this.hooks.afterPreactivation(V,{navigationId:ye,appliedUrlTree:ze,rawUrlTree:Re,skipLocationChange:!!st,replaceUrl:!!lt})}),(0,N.U)(S=>{const V=function(c,u,a){const f=Ur(c,u._root,a?a._root:void 0);return new dt(f,u)}(this.routeReuseStrategy,S.targetSnapshot,S.currentRouterState);return Object.assign(Object.assign({},S),{targetRouterState:V})}),(0,bt.b)(S=>{this.currentUrlTree=S.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(S.urlAfterRedirects,S.rawUrl),this.routerState=S.targetRouterState,"deferred"===this.urlUpdateStrategy&&(S.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,S),this.browserUrlTree=S.urlAfterRedirects)}),((c,u,a)=>(0,N.U)(f=>(new So(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,S=>this.triggerEvent(S)),(0,bt.b)({next(){D=!0},complete(){D=!0}}),function(c){return(0,k.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var S;D||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(S=this.currentNavigation)||void 0===S?void 0:S.id)===g.id&&(this.currentNavigation=null)}),Pt(S=>{if(w=!0,function(c){return c&&c[En]}(S)){const V=lr(S.url);V||(this.navigated=!0,this.restoreHistory(g,!0));const ye=new Dn(g.id,this.serializeUrl(g.extractedUrl),S.message);f.next(ye),V?setTimeout(()=>{const ze=this.urlHandlingStrategy.merge(S.url,this.rawUrlTree),Re={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Uo(g.source)};this.scheduleNavigation(ze,"imperative",null,Re,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const V=new Ir(g.id,this.serializeUrl(g.extractedUrl),S);f.next(V);try{g.resolve(this.errorHandler(S))}catch(ye){g.reject(ye)}}return et.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const D={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const V=Object.assign({},w);delete V.navigationId,delete V.\u0275routerPageId,0!==Object.keys(V).length&&(D.state=V)}const S=this.parseUrl(a.url);this.scheduleNavigation(S,f,w,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){x(a),this.config=a.map(Te),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:D,fragment:w,queryParamsHandling:S,preserveFragment:V}=f,ye=g||this.routerState.root,ze=V?this.currentUrlTree.fragment:w;let Re=null;switch(S){case"merge":Re=Object.assign(Object.assign({},this.currentUrlTree.queryParams),D);break;case"preserve":Re=this.currentUrlTree.queryParams;break;default:Re=D||null}return null!==Re&&(Re=this.removeEmptyProps(Re)),function(c,u,a,f,g){if(0===a.length)return bo(u.root,u.root,u,f,g);const D=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new bi(!0,0,c);let u=0,a=!1;const f=c.reduce((g,D,w)=>{if("object"==typeof D&&null!=D){if(D.outlets){const S={};return at(D.outlets,(V,ye)=>{S[ye]="string"==typeof V?V.split("/"):V}),[...g,{outlets:S}]}if(D.segmentPath)return[...g,D.segmentPath]}return"string"!=typeof D?[...g,D]:0===w?(D.split("/").forEach((S,V)=>{0==V&&"."===S||(0==V&&""===S?a=!0:".."===S?u++:""!=S&&g.push(S))}),g):[...g,D]},[]);return new bi(a,u,f)}(a);if(D.toRoot())return bo(u.root,new Fe([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new Mo(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const D=a.snapshot._urlSegment;return new Mo(D,D===u.root,0)}const f=Hr(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,D=a;for(;D>g;){if(D-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new Mo(f,!1,g-D)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(D,u,c),S=w.processChildren?Pn(w.segmentGroup,w.index,D.commands):to(w.segmentGroup,w.index,D.commands);return bo(w.segmentGroup,S,u,f,g)}(ye,this.currentUrlTree,a,Re,null!=ze?ze:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=lr(a)?a:this.parseUrl(a),D=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(D,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},La):!1===f?Object.assign({},pr):f,lr(a))return sr(this.currentUrlTree,a,g);const D=this.parseUrl(a);return sr(this.currentUrlTree,D,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const D=a[g];return null!=D&&(f[g]=D),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new yt(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,D,w){var S,V,ye;if(this.disposed)return Promise.resolve(!1);const ze=this.transitions.value,Re=Uo(f)&&ze&&!Uo(ze.source),st=ze.rawUrl.toString()===a.toString(),lt=ze.id===(null===(S=this.currentNavigation)||void 0===S?void 0:S.id);if(Re&&st&&lt)return Promise.resolve(!0);let ln,cn,qn;w?(ln=w.resolve,cn=w.reject,qn=w.promise):qn=new Promise((po,Wa)=>{ln=po,cn=Wa});const Yr=++this.navigationId;let dn;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),dn=g&&g.\u0275routerPageId?g.\u0275routerPageId:D.replaceUrl||D.skipLocationChange?null!==(V=this.browserPageId)&&void 0!==V?V:0:(null!==(ye=this.browserPageId)&&void 0!==ye?ye:0)+1):dn=0,this.setTransition({id:Yr,targetPageId:dn,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:D,resolve:ln,reject:cn,promise:qn,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),qn.catch(po=>Promise.reject(po))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),D=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",D):this.location.go(g,"",D)}restoreHistory(a,f=!1){var g,D;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new Dn(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function Uo(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ba{}class Bi{preload(u,a){return(0,$.of)(null)}}let Vo=(()=>{class c{constructor(a,f,g,D){this.router=a,this.injector=g,this.preloadingStrategy=D,this.loader=new Ls(g,f,V=>a.triggerEvent(new De(V)),V=>a.triggerEvent(new de(V)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,Vt.h)(a=>a instanceof yt),(0,Tn.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(y.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const D of f)if(D.loadChildren&&!D.canLoad&&D._loadedConfig){const w=D._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else D.loadChildren&&!D.canLoad?g.push(this.preloadConfig(a,D)):D.children&&g.push(this.processRoutes(a,D.children));return(0,W.D)(g).pipe((0,Pe.J)(),(0,N.U)(D=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,$.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,mt.z)(D=>(f._loadedConfig=D,this.processRoutes(D.module,D.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(Wt),y.LFG(y.Sil),y.LFG(y.zs3),y.LFG(Ba))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})(),Wr=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof rr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof yt&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof _t&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new _t(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gr=new y.OlP("ROUTER_CONFIGURATION"),Or=new y.OlP("ROUTER_FORROOT_GUARD"),Ha=[rn.Ye,{provide:b,useClass:L},{provide:Wt,useFactory:function(c,u,a,f,g,D,w={},S,V){const ye=new Wt(null,c,u,a,f,g,ir(D));return S&&(ye.urlHandlingStrategy=S),V&&(ye.routeReuseStrategy=V),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,ye),w.enableTracing&&ye.events.subscribe(ze=>{var Re,st;null===(Re=console.group)||void 0===Re||Re.call(console,`Router Event: ${ze.constructor.name}`),console.log(ze.toString()),console.log(ze),null===(st=console.groupEnd)||void 0===st||st.call(console)}),ye},deps:[b,p,rn.Ye,y.zs3,y.Sil,Li,gr,[class{},new y.FiY],[class{},new y.FiY]]},p,{provide:Bt,useFactory:function(c){return c.routerState.root},deps:[Wt]},Vo,Bi,class{preload(u,a){return a().pipe(Pt(()=>(0,$.of)(null)))}},{provide:gr,useValue:{enableTracing:!1}}];function Kr(){return new y.PXZ("Router",Wt)}let Ui=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[Ha,Hi(a),{provide:Or,useFactory:ks,deps:[[Wt,new y.FiY,new y.tp0]]},{provide:gr,useValue:f||{}},{provide:rn.S$,useFactory:rc,deps:[rn.lw,[new y.tBr(rn.mr),new y.FiY],gr]},{provide:Wr,useFactory:$o,deps:[Wt,rn.EM,gr]},{provide:Ba,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:Bi},{provide:y.PXZ,multi:!0,useFactory:Kr},[fo,{provide:y.ip1,multi:!0,useFactory:Vi,deps:[fo]},{provide:ho,useFactory:Go,deps:[fo]},{provide:y.tb,multi:!0,useExisting:ho}]]}}static forChild(a){return{ngModule:c,providers:[Hi(a)]}}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(Or,8),y.LFG(Wt,8))},c.\u0275mod=y.oAB({type:c}),c.\u0275inj=y.cJS({}),c})();function $o(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new Wr(c,u,a)}function rc(c,u,a={}){return a.useHash?new rn.Do(c,u):new rn.b0(c,u)}function ks(c){return"guarded"}function Hi(c){return[{provide:y.deG,multi:!0,useValue:c},{provide:Li,multi:!0,useValue:c}]}let fo=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new Mt.x}appInitializer(){return this.injector.get(rn.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(S=>f=S),D=this.injector.get(Wt),w=this.injector.get(gr);return"disabled"===w.initialNavigation?(D.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(D.hooks.afterPreactivation=()=>this.initNavigation?(0,$.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),D.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(gr),g=this.injector.get(Vo),D=this.injector.get(Wr),w=this.injector.get(Wt),S=this.injector.get(y.z2F);a===S.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),D.init(),w.resetRootComponentType(S.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(y.zs3))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function Vi(c){return c.appInitializer.bind(c)}function Go(c){return c.bootstrapListener.bind(c)}const ho=new y.OlP("Router Initializer")}
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
       */},Ue=>{Ue(Ue.s=6243)}]);