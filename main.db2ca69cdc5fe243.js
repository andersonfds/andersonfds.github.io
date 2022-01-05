"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{561:(Ke,le,S)=>{var v=S(808),R=S(587);
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
       */class te extends ee{static makeCurrent(){(0,v.HT)(new te)}onAndCancel(T,b,O){return T.addEventListener(b,O,!1),()=>{T.removeEventListener(b,O,!1)}}dispatchEvent(T,b){T.dispatchEvent(b)}remove(T){T.parentNode&&T.parentNode.removeChild(T)}createElement(T,b){return(b=b||this.getDefaultDocument()).createElement(T)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(T){return T.nodeType===Node.ELEMENT_NODE}isShadowRoot(T){return T instanceof DocumentFragment}getGlobalEventTarget(T,b){return"window"===b?window:"document"===b?T:"body"===b?T.body:null}getBaseHref(T){const b=(se=se||document.querySelector("base"),se?se.getAttribute("href"):null);return null==b?null:function(F){oe=oe||document.createElement("a"),oe.setAttribute("href",F);const T=oe.pathname;return"/"===T.charAt(0)?T:`/${T}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b)}resetBaseElement(){se=null}getUserAgent(){return window.navigator.userAgent}getCookie(T){return(0,v.Mx)(document.cookie,T)}}let oe,se=null;const ce=new R.OlP("TRANSITION_ID"),B=[{provide:R.ip1,useFactory:function(F,T,b){return()=>{b.get(R.CZH).donePromise.then(()=>{const O=(0,v.q)(),G=T.querySelectorAll(`style[ng-transition="${F}"]`);for(let Le=0;Le<G.length;Le++)O.remove(G[Le])})}},deps:[ce,v.K0,R.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ce{static init(){(0,R.VLi)(new Ce)}addToWindow(T){R.dqk.getAngularTestability=(O,G=!0)=>{const Le=T.findTestabilityInTree(O,G);if(null==Le)throw new Error("Could not find testability for element.");return Le},R.dqk.getAllAngularTestabilities=()=>T.getAllTestabilities(),R.dqk.getAllAngularRootElements=()=>T.getAllRootElements(),R.dqk.frameworkStabilizers||(R.dqk.frameworkStabilizers=[]),R.dqk.frameworkStabilizers.push(O=>{const G=R.dqk.getAllAngularTestabilities();let Le=G.length,Ge=!1;const Ot=function(mt){Ge=Ge||mt,Le--,0==Le&&O(Ge)};G.forEach(function(mt){mt.whenStable(Ot)})})}findTestabilityInTree(T,b,O){if(null==b)return null;const G=T.getTestability(b);return null!=G?G:O?(0,v.q)().isShadowRoot(b)?this.findTestabilityInTree(T,b.host,!0):this.findTestabilityInTree(T,b.parentElement,!0):null}}let ne=(()=>{class F{build(){return new XMLHttpRequest}}return F.\u0275fac=function(b){return new(b||F)},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ge=new R.OlP("EventManagerPlugins");let ze=(()=>{class F{constructor(b,O){this._zone=O,this._eventNameToPlugin=new Map,b.forEach(G=>G.manager=this),this._plugins=b.slice().reverse()}addEventListener(b,O,G){return this._findPluginFor(O).addEventListener(b,O,G)}addGlobalEventListener(b,O,G){return this._findPluginFor(O).addGlobalEventListener(b,O,G)}getZone(){return this._zone}_findPluginFor(b){const O=this._eventNameToPlugin.get(b);if(O)return O;const G=this._plugins;for(let Le=0;Le<G.length;Le++){const Ge=G[Le];if(Ge.supports(b))return this._eventNameToPlugin.set(b,Ge),Ge}throw new Error(`No event manager plugin found for event ${b}`)}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(ge),R.LFG(R.R0b))},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();class Ie{constructor(T){this._doc=T}addGlobalEventListener(T,b,O){const G=(0,v.q)().getGlobalEventTarget(this._doc,T);if(!G)throw new Error(`Unsupported event target ${G} for event ${b}`);return this.addEventListener(G,b,O)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class F{constructor(){this._stylesSet=new Set}addStyles(b){const O=new Set;b.forEach(G=>{this._stylesSet.has(G)||(this._stylesSet.add(G),O.add(G))}),this.onStylesAdded(O)}onStylesAdded(b){}getAllStyles(){return Array.from(this._stylesSet)}}return F.\u0275fac=function(b){return new(b||F)},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})(),Ne=(()=>{class F extends Z{constructor(b){super(),this._doc=b,this._hostNodes=new Map,this._hostNodes.set(b.head,[])}_addStylesToHost(b,O,G){b.forEach(Le=>{const Ge=this._doc.createElement("style");Ge.textContent=Le,G.push(O.appendChild(Ge))})}addHost(b){const O=[];this._addStylesToHost(this._stylesSet,b,O),this._hostNodes.set(b,O)}removeHost(b){const O=this._hostNodes.get(b);O&&O.forEach(ye),this._hostNodes.delete(b)}onStylesAdded(b){this._hostNodes.forEach((O,G)=>{this._addStylesToHost(b,G,O)})}ngOnDestroy(){this._hostNodes.forEach(b=>b.forEach(ye))}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(v.K0))},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();function ye(F){(0,v.q)().remove(F)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ee={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ve=/%COMP%/g;function U(F,T,b){for(let O=0;O<T.length;O++){let G=T[O];Array.isArray(G)?U(F,G,b):(G=G.replace(ve,F),b.push(G))}return b}function H(F){return T=>{if("__ngUnwrap__"===T)return F;!1===F(T)&&(T.preventDefault(),T.returnValue=!1)}}let ie=(()=>{class F{constructor(b,O,G){this.eventManager=b,this.sharedStylesHost=O,this.appId=G,this.rendererByCompId=new Map,this.defaultRenderer=new V(b)}createRenderer(b,O){if(!b||!O)return this.defaultRenderer;switch(O.encapsulation){case R.ifc.Emulated:{let G=this.rendererByCompId.get(O.id);return G||(G=new Te(this.eventManager,this.sharedStylesHost,O,this.appId),this.rendererByCompId.set(O.id,G)),G.applyToHost(b),G}case 1:case R.ifc.ShadowDom:return new Be(this.eventManager,this.sharedStylesHost,b,O);default:if(!this.rendererByCompId.has(O.id)){const G=U(O.id,O.styles,[]);this.sharedStylesHost.addStyles(G),this.rendererByCompId.set(O.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(ze),R.LFG(Ne),R.LFG(R.AFp))},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();class V{constructor(T){this.eventManager=T,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(T,b){return b?document.createElementNS(Ee[b]||b,T):document.createElement(T)}createComment(T){return document.createComment(T)}createText(T){return document.createTextNode(T)}appendChild(T,b){T.appendChild(b)}insertBefore(T,b,O){T&&T.insertBefore(b,O)}removeChild(T,b){T&&T.removeChild(b)}selectRootElement(T,b){let O="string"==typeof T?document.querySelector(T):T;if(!O)throw new Error(`The selector "${T}" did not match any elements`);return b||(O.textContent=""),O}parentNode(T){return T.parentNode}nextSibling(T){return T.nextSibling}setAttribute(T,b,O,G){if(G){b=G+":"+b;const Le=Ee[G];Le?T.setAttributeNS(Le,b,O):T.setAttribute(b,O)}else T.setAttribute(b,O)}removeAttribute(T,b,O){if(O){const G=Ee[O];G?T.removeAttributeNS(G,b):T.removeAttribute(`${O}:${b}`)}else T.removeAttribute(b)}addClass(T,b){T.classList.add(b)}removeClass(T,b){T.classList.remove(b)}setStyle(T,b,O,G){G&(R.JOm.DashCase|R.JOm.Important)?T.style.setProperty(b,O,G&R.JOm.Important?"important":""):T.style[b]=O}removeStyle(T,b,O){O&R.JOm.DashCase?T.style.removeProperty(b):T.style[b]=""}setProperty(T,b,O){T[b]=O}setValue(T,b){T.nodeValue=b}listen(T,b,O){return"string"==typeof T?this.eventManager.addGlobalEventListener(T,b,H(O)):this.eventManager.addEventListener(T,b,H(O))}}class Te extends V{constructor(T,b,O,G){super(T),this.component=O;const Le=U(G+"-"+O.id,O.styles,[]);b.addStyles(Le),this.contentAttr="_ngcontent-%COMP%".replace(ve,G+"-"+O.id),this.hostAttr="_nghost-%COMP%".replace(ve,G+"-"+O.id)}applyToHost(T){super.setAttribute(T,this.hostAttr,"")}createElement(T,b){const O=super.createElement(T,b);return super.setAttribute(O,this.contentAttr,""),O}}class Be extends V{constructor(T,b,O,G){super(T),this.sharedStylesHost=b,this.hostEl=O,this.shadowRoot=O.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Le=U(G.id,G.styles,[]);for(let Ge=0;Ge<Le.length;Ge++){const Ot=document.createElement("style");Ot.textContent=Le[Ge],this.shadowRoot.appendChild(Ot)}}nodeOrShadowRoot(T){return T===this.hostEl?this.shadowRoot:T}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(T,b){return super.appendChild(this.nodeOrShadowRoot(T),b)}insertBefore(T,b,O){return super.insertBefore(this.nodeOrShadowRoot(T),b,O)}removeChild(T,b){return super.removeChild(this.nodeOrShadowRoot(T),b)}parentNode(T){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(T)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gt=(()=>{class F extends Ie{constructor(b){super(b)}supports(b){return!0}addEventListener(b,O,G){return b.addEventListener(O,G,!1),()=>this.removeEventListener(b,O,G)}removeEventListener(b,O,G){return b.removeEventListener(O,G)}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(v.K0))},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nn=["alt","control","meta","shift"],ln={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Pt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},ft={alt:F=>F.altKey,control:F=>F.ctrlKey,meta:F=>F.metaKey,shift:F=>F.shiftKey};let Xe=(()=>{class F extends Ie{constructor(b){super(b)}supports(b){return null!=F.parseEventName(b)}addEventListener(b,O,G){const Le=F.parseEventName(O),Ge=F.eventCallback(Le.fullKey,G,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,v.q)().onAndCancel(b,Le.domEventName,Ge))}static parseEventName(b){const O=b.toLowerCase().split("."),G=O.shift();if(0===O.length||"keydown"!==G&&"keyup"!==G)return null;const Le=F._normalizeKey(O.pop());let Ge="";if(nn.forEach(mt=>{const Mt=O.indexOf(mt);Mt>-1&&(O.splice(Mt,1),Ge+=mt+".")}),Ge+=Le,0!=O.length||0===Le.length)return null;const Ot={};return Ot.domEventName=G,Ot.fullKey=Ge,Ot}static getEventFullKey(b){let O="",G=function(F){let T=F.key;if(null==T){if(T=F.keyIdentifier,null==T)return"Unidentified";T.startsWith("U+")&&(T=String.fromCharCode(parseInt(T.substring(2),16)),3===F.location&&Pt.hasOwnProperty(T)&&(T=Pt[T]))}return ln[T]||T}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(b);return G=G.toLowerCase()," "===G?G="space":"."===G&&(G="dot"),nn.forEach(Le=>{Le!=G&&ft[Le](b)&&(O+=Le+".")}),O+=G,O}static eventCallback(b,O,G){return Le=>{F.getEventFullKey(Le)===b&&G.runGuarded(()=>O(Le))}}static _normalizeKey(b){return"esc"===b?"escape":b}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(v.K0))},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})();const qt=(0,R.eFA)(R._c5,"browser",[{provide:R.Lbi,useValue:v.bD},{provide:R.g9A,useValue:function(){te.makeCurrent(),Ce.init()},multi:!0},{provide:v.K0,useFactory:function(){return(0,R.RDi)(document),document},deps:[]}]),Dn=[{provide:R.zSh,useValue:"root"},{provide:R.qLn,useFactory:function(){return new R.qLn},deps:[]},{provide:ge,useClass:gt,multi:!0,deps:[v.K0,R.R0b,R.Lbi]},{provide:ge,useClass:Xe,multi:!0,deps:[v.K0]},{provide:ie,useClass:ie,deps:[ze,Ne,R.AFp]},{provide:R.FYo,useExisting:ie},{provide:Z,useExisting:Ne},{provide:Ne,useClass:Ne,deps:[v.K0]},{provide:R.dDg,useClass:R.dDg,deps:[R.R0b]},{provide:ze,useClass:ze,deps:[ge,R.R0b]},{provide:v.JF,useClass:ne,deps:[]}];let Tt=(()=>{class F{constructor(b){if(b)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(b){return{ngModule:F,providers:[{provide:R.AFp,useValue:b.appId},{provide:ce,useExisting:R.AFp},B]}}}return F.\u0275fac=function(b){return new(b||F)(R.LFG(F,12))},F.\u0275mod=R.oAB({type:F}),F.\u0275inj=R.cJS({providers:Dn,imports:[v.ez,R.hGG]}),F})();
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
var Zt=S(520),_r=S(783),Rr=S(506);let or=(()=>{class F{constructor(){this.title="portfolio"}}return F.\u0275fac=function(b){return new(b||F)},F.\u0275cmp=R.Xpm({type:F,selectors:[["app-root"]],decls:1,vars:0,template:function(b,O){1&b&&R._UZ(0,"router-outlet")},directives:[_r.lC],styles:[""]}),F})();const An=[{path:"",loadChildren:()=>S.e(67).then(S.bind(S,67)).then(F=>F.LandingModule)}],xn=[{provide:Zt.TP,useClass:(()=>{class F{constructor(){}intercept(b,O){if(b.url.startsWith("/"))throw new Error('Url must not start with "/" to follow our convention');return b.url.startsWith("http")||(b=b.clone({url:"https://anderson.free.mockoapp.net/"+b.url})),O.handle(b)}}return F.\u0275fac=function(b){return new(b||F)},F.\u0275prov=R.Yz7({token:F,factory:F.\u0275fac}),F})(),multi:!0}];let br=(()=>{class F{}return F.\u0275fac=function(b){return new(b||F)},F.\u0275mod=R.oAB({type:F,bootstrap:[or]}),F.\u0275inj=R.cJS({providers:xn,imports:[[Tt,_r.Bz.forRoot(An),Zt.JF,Rr.x]]}),F})();(0,R.G48)(),qt().bootstrapModule(br).catch(F=>console.error(F))},506:(Ke,le,S)=>{S.d(le,{x:()=>Fe,w:()=>se});var v=S(808),R=S(587);const ee=function(oe,Me,ce){return{width:oe,height:Me,borderRadius:ce}},te=function(oe){return{rtl:oe}};let se=(()=>{class oe{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return oe.\u0275fac=function(ce){return new(ce||oe)},oe.\u0275cmp=R.Xpm({type:oe,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(ce,q){2&ce&&R.Tol(q.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(ce,q){1&ce&&R._UZ(0,"div",0),2&ce&&R.Q6J("ngStyle",R.kEZ(2,ee,q.width,q.shimmerHeight,q.shimmerBorderRadius))("ngClass",R.VKq(6,te,"rtl"===q.direction))},directives:[v.PC,v.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),oe})(),Fe=(()=>{class oe{}return oe.\u0275fac=function(ce){return new(ce||oe)},oe.\u0275mod=R.oAB({type:oe}),oe.\u0275inj=R.cJS({imports:[[v.ez]]}),oe})()},306:(Ke,le,S)=>{S.d(le,{y:()=>q});var v=S(961),R=S(727),ee=S(822),te=S(671);var oe=S(416),Me=S(576),ce=S(806);let q=(()=>{class ge{constructor(Ie){Ie&&(this._subscribe=Ie)}lift(Ie){const Z=new ge;return Z.source=this,Z.operator=Ie,Z}subscribe(Ie,Z,Ne){const ye=function(ge){return ge&&ge instanceof v.Lv||function(ge){return ge&&(0,Me.m)(ge.next)&&(0,Me.m)(ge.error)&&(0,Me.m)(ge.complete)}(ge)&&(0,R.Nn)(ge)}(Ie)?Ie:new v.Hp(Ie,Z,Ne);return(0,ce.x)(()=>{const{operator:Ee,source:ve}=this;ye.add(Ee?Ee.call(ye,ve):ve?this._subscribe(ye):this._trySubscribe(ye))}),ye}_trySubscribe(Ie){try{return this._subscribe(Ie)}catch(Z){Ie.error(Z)}}forEach(Ie,Z){return new(Z=B(Z))((Ne,ye)=>{let Ee;Ee=this.subscribe(ve=>{try{Ie(ve)}catch(xe){ye(xe),null==Ee||Ee.unsubscribe()}},ye,Ne)})}_subscribe(Ie){var Z;return null===(Z=this.source)||void 0===Z?void 0:Z.subscribe(Ie)}[ee.L](){return this}pipe(...Ie){return function(ge){return 0===ge.length?te.y:1===ge.length?ge[0]:function(Ie){return ge.reduce((Z,Ne)=>Ne(Z),Ie)}}(Ie)(this)}toPromise(Ie){return new(Ie=B(Ie))((Z,Ne)=>{let ye;this.subscribe(Ee=>ye=Ee,Ee=>Ne(Ee),()=>Z(ye))})}}return ge.create=ze=>new ge(ze),ge})();function B(ge){var ze;return null!==(ze=null!=ge?ge:oe.v.Promise)&&void 0!==ze?ze:Promise}},579:(Ke,le,S)=>{S.d(le,{x:()=>oe});var v=S(306),R=S(727);const te=(0,S(888).d)(ce=>function(){ce(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var se=S(737),Fe=S(806);let oe=(()=>{class ce extends v.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(B){const Ce=new Me(this,this);return Ce.operator=B,Ce}_throwIfClosed(){if(this.closed)throw new te}next(B){(0,Fe.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const Ce=this.observers.slice();for(const ne of Ce)ne.next(B)}})}error(B){(0,Fe.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=B;const{observers:Ce}=this;for(;Ce.length;)Ce.shift().error(B)}})}complete(){(0,Fe.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:B}=this;for(;B.length;)B.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var B;return(null===(B=this.observers)||void 0===B?void 0:B.length)>0}_trySubscribe(B){return this._throwIfClosed(),super._trySubscribe(B)}_subscribe(B){return this._throwIfClosed(),this._checkFinalizedStatuses(B),this._innerSubscribe(B)}_innerSubscribe(B){const{hasError:Ce,isStopped:ne,observers:ge}=this;return Ce||ne?R.Lc:(ge.push(B),new R.w0(()=>(0,se.P)(ge,B)))}_checkFinalizedStatuses(B){const{hasError:Ce,thrownError:ne,isStopped:ge}=this;Ce?B.error(ne):ge&&B.complete()}asObservable(){const B=new v.y;return B.source=this,B}}return ce.create=(q,B)=>new Me(q,B),ce})();class Me extends oe{constructor(q,B){super(),this.destination=q,this.source=B}next(q){var B,Ce;null===(Ce=null===(B=this.destination)||void 0===B?void 0:B.next)||void 0===Ce||Ce.call(B,q)}error(q){var B,Ce;null===(Ce=null===(B=this.destination)||void 0===B?void 0:B.error)||void 0===Ce||Ce.call(B,q)}complete(){var q,B;null===(B=null===(q=this.destination)||void 0===q?void 0:q.complete)||void 0===B||B.call(q)}_subscribe(q){var B,Ce;return null!==(Ce=null===(B=this.source)||void 0===B?void 0:B.subscribe(q))&&void 0!==Ce?Ce:R.Lc}}},961:(Ke,le,S)=>{S.d(le,{Hp:()=>ne,Lv:()=>Ce});var v=S(576),R=S(727),ee=S(416),te=S(849);function se(){}const Fe=ce("C",void 0,void 0);function ce(Ne,ye,Ee){return{kind:Ne,value:ye,error:Ee}}var q=S(410),B=S(806);class Ce extends R.w0{constructor(ye){super(),this.isStopped=!1,ye?(this.destination=ye,(0,R.Nn)(ye)&&ye.add(this)):this.destination=Z}static create(ye,Ee,ve){return new ne(ye,Ee,ve)}next(ye){this.isStopped?Ie(ce("N",ye,void 0),this):this._next(ye)}error(ye){this.isStopped?Ie(ce("E",void 0,ye),this):(this.isStopped=!0,this._error(ye))}complete(){this.isStopped?Ie(Fe,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(ye){this.destination.next(ye)}_error(ye){try{this.destination.error(ye)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class ne extends Ce{constructor(ye,Ee,ve){let xe;if(super(),(0,v.m)(ye))xe=ye;else if(ye){let re;({next:xe,error:Ee,complete:ve}=ye),this&&ee.v.useDeprecatedNextContext?(re=Object.create(ye),re.unsubscribe=()=>this.unsubscribe()):re=ye,xe=null==xe?void 0:xe.bind(re),Ee=null==Ee?void 0:Ee.bind(re),ve=null==ve?void 0:ve.bind(re)}this.destination={next:xe?ge(xe):se,error:ge(null!=Ee?Ee:ze),complete:ve?ge(ve):se}}}function ge(Ne,ye){return(...Ee)=>{try{Ne(...Ee)}catch(ve){ee.v.useDeprecatedSynchronousErrorHandling?(0,B.O)(ve):(0,te.h)(ve)}}}function ze(Ne){throw Ne}function Ie(Ne,ye){const{onStoppedNotification:Ee}=ee.v;Ee&&q.z.setTimeout(()=>Ee(Ne,ye))}const Z={closed:!0,next:se,error:ze,complete:se}},727:(Ke,le,S)=>{S.d(le,{Lc:()=>Fe,w0:()=>se,Nn:()=>oe});var v=S(576);const ee=(0,S(888).d)(ce=>function(B){ce(this),this.message=B?`${B.length} errors occurred during unsubscription:\n${B.map((Ce,ne)=>`${ne+1}) ${Ce.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=B});var te=S(737);class se{constructor(q){this.initialTeardown=q,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let q;if(!this.closed){this.closed=!0;const{_parentage:B}=this;if(B)if(this._parentage=null,Array.isArray(B))for(const ge of B)ge.remove(this);else B.remove(this);const{initialTeardown:Ce}=this;if((0,v.m)(Ce))try{Ce()}catch(ge){q=ge instanceof ee?ge.errors:[ge]}const{_teardowns:ne}=this;if(ne){this._teardowns=null;for(const ge of ne)try{Me(ge)}catch(ze){q=null!=q?q:[],ze instanceof ee?q=[...q,...ze.errors]:q.push(ze)}}if(q)throw new ee(q)}}add(q){var B;if(q&&q!==this)if(this.closed)Me(q);else{if(q instanceof se){if(q.closed||q._hasParent(this))return;q._addParent(this)}(this._teardowns=null!==(B=this._teardowns)&&void 0!==B?B:[]).push(q)}}_hasParent(q){const{_parentage:B}=this;return B===q||Array.isArray(B)&&B.includes(q)}_addParent(q){const{_parentage:B}=this;this._parentage=Array.isArray(B)?(B.push(q),B):B?[B,q]:q}_removeParent(q){const{_parentage:B}=this;B===q?this._parentage=null:Array.isArray(B)&&(0,te.P)(B,q)}remove(q){const{_teardowns:B}=this;B&&(0,te.P)(B,q),q instanceof se&&q._removeParent(this)}}se.EMPTY=(()=>{const ce=new se;return ce.closed=!0,ce})();const Fe=se.EMPTY;function oe(ce){return ce instanceof se||ce&&"closed"in ce&&(0,v.m)(ce.remove)&&(0,v.m)(ce.add)&&(0,v.m)(ce.unsubscribe)}function Me(ce){(0,v.m)(ce)?ce():ce.unsubscribe()}},416:(Ke,le,S)=>{S.d(le,{v:()=>v});const v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Ke,le,S)=>{S.d(le,{E:()=>R});const R=new(S(306).y)(se=>se.complete())},76:(Ke,le,S)=>{S.d(le,{D:()=>Qe});var v=S(421),R=S(672),ee=S(482),te=S(403);function se(_e,fe=0){return(0,ee.e)((j,U)=>{j.subscribe(new te.Q(U,H=>(0,R.f)(U,_e,()=>U.next(H),fe),()=>(0,R.f)(U,_e,()=>U.complete(),fe),H=>(0,R.f)(U,_e,()=>U.error(H),fe)))})}function Fe(_e,fe=0){return(0,ee.e)((j,U)=>{U.add(_e.schedule(()=>j.subscribe(U),fe))})}var ce=S(306),B=S(202),Ce=S(576);function ge(_e,fe){if(!_e)throw new Error("Iterable cannot be null");return new ce.y(j=>{(0,R.f)(j,fe,()=>{const U=_e[Symbol.asyncIterator]();(0,R.f)(j,fe,()=>{U.next().then(H=>{H.done?j.complete():j.next(H.value)})},0,!0)})})}var ze=S(670),Ie=S(239),Z=S(144),Ne=S(495),ye=S(206),Ee=S(532),ve=S(260);function Qe(_e,fe){return fe?function(_e,fe){if(null!=_e){if((0,ze.c)(_e))return function(_e,fe){return(0,v.Xf)(_e).pipe(Fe(fe),se(fe))}(_e,fe);if((0,Z.z)(_e))return function(_e,fe){return new ce.y(j=>{let U=0;return fe.schedule(function(){U===_e.length?j.complete():(j.next(_e[U++]),j.closed||this.schedule())})})}(_e,fe);if((0,Ie.t)(_e))return function(_e,fe){return(0,v.Xf)(_e).pipe(Fe(fe),se(fe))}(_e,fe);if((0,ye.D)(_e))return ge(_e,fe);if((0,Ne.T)(_e))return function(_e,fe){return new ce.y(j=>{let U;return(0,R.f)(j,fe,()=>{U=_e[B.h](),(0,R.f)(j,fe,()=>{let H,W;try{({value:H,done:W}=U.next())}catch(ie){return void j.error(ie)}W?j.complete():j.next(H)},0,!0)}),()=>(0,Ce.m)(null==U?void 0:U.return)&&U.return()})}(_e,fe);if((0,ve.L)(_e))return function(_e,fe){return ge((0,ve.Q)(_e),fe)}(_e,fe)}throw(0,Ee.z)(_e)}(_e,fe):(0,v.Xf)(_e)}},421:(Ke,le,S)=>{S.d(le,{Xf:()=>ne});var v=S(987),R=S(144),ee=S(239),te=S(306),se=S(670),Fe=S(206),oe=S(532),Me=S(495),ce=S(260),q=S(576),B=S(849),Ce=S(822);function ne(ve){if(ve instanceof te.y)return ve;if(null!=ve){if((0,se.c)(ve))return function(ve){return new te.y(xe=>{const re=ve[Ce.L]();if((0,q.m)(re.subscribe))return re.subscribe(xe);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(ve);if((0,R.z)(ve))return function(ve){return new te.y(xe=>{for(let re=0;re<ve.length&&!xe.closed;re++)xe.next(ve[re]);xe.complete()})}(ve);if((0,ee.t)(ve))return function(ve){return new te.y(xe=>{ve.then(re=>{xe.closed||(xe.next(re),xe.complete())},re=>xe.error(re)).then(null,B.h)})}(ve);if((0,Fe.D)(ve))return Ne(ve);if((0,Me.T)(ve))return function(ve){return new te.y(xe=>{for(const re of ve)if(xe.next(re),xe.closed)return;xe.complete()})}(ve);if((0,ce.L)(ve))return function(ve){return Ne((0,ce.Q)(ve))}(ve)}throw(0,oe.z)(ve)}function Ne(ve){return new te.y(xe=>{(function(ve,xe){var re,Qe,_e,fe;return(0,v.mG)(this,void 0,void 0,function*(){try{for(re=(0,v.KL)(ve);!(Qe=yield re.next()).done;)if(xe.next(Qe.value),xe.closed)return}catch(j){_e={error:j}}finally{try{Qe&&!Qe.done&&(fe=re.return)&&(yield fe.call(re))}finally{if(_e)throw _e.error}}xe.complete()})})(ve,xe).catch(re=>xe.error(re))})}},646:(Ke,le,S)=>{S.d(le,{of:()=>ee});var v=S(669),R=S(76);function ee(...te){const se=(0,v.yG)(te);return(0,R.D)(te,se)}},403:(Ke,le,S)=>{S.d(le,{Q:()=>R});var v=S(961);class R extends v.Lv{constructor(te,se,Fe,oe,Me){super(te),this.onFinalize=Me,this._next=se?function(ce){try{se(ce)}catch(q){te.error(q)}}:super._next,this._error=oe?function(ce){try{oe(ce)}catch(q){te.error(q)}finally{this.unsubscribe()}}:super._error,this._complete=Fe?function(){try{Fe()}catch(ce){te.error(ce)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var te;const{closed:se}=this;super.unsubscribe(),!se&&(null===(te=this.onFinalize)||void 0===te||te.call(this))}}},351:(Ke,le,S)=>{S.d(le,{b:()=>ee});var v=S(577),R=S(576);function ee(te,se){return(0,R.m)(se)?(0,v.z)(te,se,1):(0,v.z)(te,1)}},300:(Ke,le,S)=>{S.d(le,{h:()=>ee});var v=S(482),R=S(403);function ee(te,se){return(0,v.e)((Fe,oe)=>{let Me=0;Fe.subscribe(new R.Q(oe,ce=>te.call(se,ce,Me++)&&oe.next(ce)))})}},4:(Ke,le,S)=>{S.d(le,{U:()=>ee});var v=S(482),R=S(403);function ee(te,se){return(0,v.e)((Fe,oe)=>{let Me=0;Fe.subscribe(new R.Q(oe,ce=>{oe.next(te.call(se,ce,Me++))}))})}},189:(Ke,le,S)=>{S.d(le,{J:()=>ee});var v=S(577),R=S(671);function ee(te=1/0){return(0,v.z)(R.y,te)}},577:(Ke,le,S)=>{S.d(le,{z:()=>Me});var v=S(4),R=S(421),ee=S(482),se=(S(672),S(403)),oe=S(576);function Me(ce,q,B=1/0){return(0,oe.m)(q)?Me((Ce,ne)=>(0,v.U)((ge,ze)=>q(Ce,ge,ne,ze))((0,R.Xf)(ce(Ce,ne))),B):("number"==typeof q&&(B=q),(0,ee.e)((Ce,ne)=>function(ce,q,B,Ce,ne,ge,ze,Ie){const Z=[];let Ne=0,ye=0,Ee=!1;const ve=()=>{Ee&&!Z.length&&!Ne&&q.complete()},xe=Qe=>Ne<Ce?re(Qe):Z.push(Qe),re=Qe=>{Ne++;let _e=!1;(0,R.Xf)(B(Qe,ye++)).subscribe(new se.Q(q,fe=>{q.next(fe)},()=>{_e=!0},void 0,()=>{if(_e)try{for(Ne--;Z.length&&Ne<Ce;){const fe=Z.shift();re(fe)}ve()}catch(fe){q.error(fe)}}))};return ce.subscribe(new se.Q(q,xe,()=>{Ee=!0,ve()})),()=>{}}(Ce,ne,ce,B)))}},99:(Ke,le,S)=>{S.d(le,{B:()=>Fe});var v=S(76),R=S(698),ee=S(579),te=S(961),se=S(482);function Fe(Me={}){const{connector:ce=(()=>new ee.x),resetOnError:q=!0,resetOnComplete:B=!0,resetOnRefCountZero:Ce=!0}=Me;return ne=>{let ge=null,ze=null,Ie=null,Z=0,Ne=!1,ye=!1;const Ee=()=>{null==ze||ze.unsubscribe(),ze=null},ve=()=>{Ee(),ge=Ie=null,Ne=ye=!1},xe=()=>{const re=ge;ve(),null==re||re.unsubscribe()};return(0,se.e)((re,Qe)=>{Z++,!ye&&!Ne&&Ee();const _e=Ie=null!=Ie?Ie:ce();Qe.add(()=>{Z--,0===Z&&!ye&&!Ne&&(ze=oe(xe,Ce))}),_e.subscribe(Qe),ge||(ge=new te.Hp({next:fe=>_e.next(fe),error:fe=>{ye=!0,Ee(),ze=oe(ve,q,fe),_e.error(fe)},complete:()=>{Ne=!0,Ee(),ze=oe(ve,B),_e.complete()}}),(0,v.D)(re).subscribe(ge))})(ne)}}function oe(Me,ce,...q){return!0===ce?(Me(),null):!1===ce?null:ce(...q).pipe((0,R.q)(1)).subscribe(()=>Me())}},698:(Ke,le,S)=>{S.d(le,{q:()=>te});var v=S(515),R=S(482),ee=S(403);function te(se){return se<=0?()=>v.E:(0,R.e)((Fe,oe)=>{let Me=0;Fe.subscribe(new ee.Q(oe,ce=>{++Me<=se&&(oe.next(ce),se<=Me&&oe.complete())}))})}},410:(Ke,le,S)=>{S.d(le,{z:()=>v});const v={setTimeout(...R){const{delegate:ee}=v;return((null==ee?void 0:ee.setTimeout)||setTimeout)(...R)},clearTimeout(R){const{delegate:ee}=v;return((null==ee?void 0:ee.clearTimeout)||clearTimeout)(R)},delegate:void 0}},202:(Ke,le,S)=>{S.d(le,{h:()=>R});const R="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},822:(Ke,le,S)=>{S.d(le,{L:()=>v});const v="function"==typeof Symbol&&Symbol.observable||"@@observable"},669:(Ke,le,S)=>{S.d(le,{_6:()=>Fe,jO:()=>te,yG:()=>se});var v=S(576);function ee(oe){return oe[oe.length-1]}function te(oe){return(0,v.m)(ee(oe))?oe.pop():void 0}function se(oe){return function(oe){return oe&&(0,v.m)(oe.schedule)}(ee(oe))?oe.pop():void 0}function Fe(oe,Me){return"number"==typeof ee(oe)?oe.pop():Me}},737:(Ke,le,S)=>{function v(R,ee){if(R){const te=R.indexOf(ee);0<=te&&R.splice(te,1)}}S.d(le,{P:()=>v})},888:(Ke,le,S)=>{function v(R){const te=R(se=>{Error.call(se),se.stack=(new Error).stack});return te.prototype=Object.create(Error.prototype),te.prototype.constructor=te,te}S.d(le,{d:()=>v})},806:(Ke,le,S)=>{S.d(le,{x:()=>ee,O:()=>te});var v=S(416);let R=null;function ee(se){if(v.v.useDeprecatedSynchronousErrorHandling){const Fe=!R;if(Fe&&(R={errorThrown:!1,error:null}),se(),Fe){const{errorThrown:oe,error:Me}=R;if(R=null,oe)throw Me}}else se()}function te(se){v.v.useDeprecatedSynchronousErrorHandling&&R&&(R.errorThrown=!0,R.error=se)}},672:(Ke,le,S)=>{function v(R,ee,te,se=0,Fe=!1){const oe=ee.schedule(function(){te(),Fe?R.add(this.schedule(null,se)):this.unsubscribe()},se);if(R.add(oe),!Fe)return oe}S.d(le,{f:()=>v})},671:(Ke,le,S)=>{function v(R){return R}S.d(le,{y:()=>v})},144:(Ke,le,S)=>{S.d(le,{z:()=>v});const v=R=>R&&"number"==typeof R.length&&"function"!=typeof R},206:(Ke,le,S)=>{S.d(le,{D:()=>R});var v=S(576);function R(ee){return Symbol.asyncIterator&&(0,v.m)(null==ee?void 0:ee[Symbol.asyncIterator])}},576:(Ke,le,S)=>{function v(R){return"function"==typeof R}S.d(le,{m:()=>v})},670:(Ke,le,S)=>{S.d(le,{c:()=>ee});var v=S(822),R=S(576);function ee(te){return(0,R.m)(te[v.L])}},495:(Ke,le,S)=>{S.d(le,{T:()=>ee});var v=S(202),R=S(576);function ee(te){return(0,R.m)(null==te?void 0:te[v.h])}},239:(Ke,le,S)=>{S.d(le,{t:()=>R});var v=S(576);function R(ee){return(0,v.m)(null==ee?void 0:ee.then)}},260:(Ke,le,S)=>{S.d(le,{Q:()=>ee,L:()=>te});var v=S(987),R=S(576);function ee(se){return(0,v.FC)(this,arguments,function*(){const oe=se.getReader();try{for(;;){const{value:Me,done:ce}=yield(0,v.qq)(oe.read());if(ce)return yield(0,v.qq)(void 0);yield yield(0,v.qq)(Me)}}finally{oe.releaseLock()}})}function te(se){return(0,R.m)(null==se?void 0:se.getReader)}},482:(Ke,le,S)=>{S.d(le,{A:()=>R,e:()=>ee});var v=S(576);function R(te){return(0,v.m)(null==te?void 0:te.lift)}function ee(te){return se=>{if(R(se))return se.lift(function(Fe){try{return te(Fe,this)}catch(oe){this.error(oe)}});throw new TypeError("Unable to lift unknown Observable type")}}},849:(Ke,le,S)=>{S.d(le,{h:()=>ee});var v=S(416),R=S(410);function ee(te){R.z.setTimeout(()=>{const{onUnhandledError:se}=v.v;if(!se)throw te;se(te)})}},532:(Ke,le,S)=>{function v(R){return new TypeError(`You provided ${null!==R&&"object"==typeof R?"an invalid object":`'${R}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}S.d(le,{z:()=>v})},987:(Ke,le,S)=>{function Me(j,U,H,W){return new(H||(H=Promise))(function(V,Re){function st(gt){try{Be(W.next(gt))}catch(nn){Re(nn)}}function Te(gt){try{Be(W.throw(gt))}catch(nn){Re(nn)}}function Be(gt){gt.done?V(gt.value):function(V){return V instanceof H?V:new H(function(Re){Re(V)})}(gt.value).then(st,Te)}Be((W=W.apply(j,U||[])).next())})}function Z(j){return this instanceof Z?(this.v=j,this):new Z(j)}function Ne(j,U,H){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ie,W=H.apply(j,U||[]),V=[];return ie={},Re("next"),Re("throw"),Re("return"),ie[Symbol.asyncIterator]=function(){return this},ie;function Re(St){W[St]&&(ie[St]=function(ln){return new Promise(function(Pt,ft){V.push([St,ln,Pt,ft])>1||st(St,ln)})})}function st(St,ln){try{!function(St){St.value instanceof Z?Promise.resolve(St.value.v).then(Be,gt):nn(V[0][2],St)}(W[St](ln))}catch(Pt){nn(V[0][3],Pt)}}function Be(St){st("next",St)}function gt(St){st("throw",St)}function nn(St,ln){St(ln),V.shift(),V.length&&st(V[0][0],V[0][1])}}function Ee(j){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H,U=j[Symbol.asyncIterator];return U?U.call(j):(j=function(j){var U="function"==typeof Symbol&&Symbol.iterator,H=U&&j[U],W=0;if(H)return H.call(j);if(j&&"number"==typeof j.length)return{next:function(){return j&&W>=j.length&&(j=void 0),{value:j&&j[W++],done:!j}}};throw new TypeError(U?"Object is not iterable.":"Symbol.iterator is not defined.")}(j),H={},W("next"),W("throw"),W("return"),H[Symbol.asyncIterator]=function(){return this},H);function W(V){H[V]=j[V]&&function(Re){return new Promise(function(st,Te){!function(V,Re,st,Te){Promise.resolve(Te).then(function(Be){V({value:Be,done:st})},Re)}(st,Te,(Re=j[V](Re)).done,Re.value)})}}}S.d(le,{mG:()=>Me,qq:()=>Z,FC:()=>Ne,KL:()=>Ee})},808:(Ke,le,S)=>{S.d(le,{mr:()=>ye,Ov:()=>Or,ez:()=>Gn,K0:()=>oe,uU:()=>wi,Do:()=>ve,V_:()=>q,Ye:()=>xe,S$:()=>Z,mk:()=>Cn,sg:()=>Vn,O5:()=>$n,PC:()=>rn,RF:()=>Pn,n9:()=>On,b0:()=>Ee,lw:()=>Me,EM:()=>Ti,JF:()=>Ai,w_:()=>Fe,bD:()=>Lr,q:()=>ee,Mx:()=>_t,HT:()=>se});var v=S(587);
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
       */let R=null;function ee(){return R}function se(p){R||(R=p)}class Fe{}
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
       */let Me=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=v.Yz7({token:p,factory:function(){return(0,v.LFG)(B)},providedIn:"platform"}),p})();const q=new v.OlP("Location Initialized");let B=(()=>{class p extends Me{constructor(h){super(),this._doc=h,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ee().getBaseHref(this._doc)}onPopState(h){const E=ee().getGlobalEventTarget(this._doc,"window");return E.addEventListener("popstate",h,!1),()=>E.removeEventListener("popstate",h)}onHashChange(h){const E=ee().getGlobalEventTarget(this._doc,"window");return E.addEventListener("hashchange",h,!1),()=>E.removeEventListener("hashchange",h)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(h){this.location.pathname=h}pushState(h,E,x){Ce()?this._history.pushState(h,E,x):this.location.hash=x}replaceState(h,E,x){Ce()?this._history.replaceState(h,E,x):this.location.hash=x}forward(){this._history.forward()}back(){this._history.back()}historyGo(h=0){this._history.go(h)}getState(){return this._history.state}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(oe))},p.\u0275prov=v.Yz7({token:p,factory:function(){return new B((0,v.LFG)(oe))},providedIn:"platform"}),p})();function Ce(){return!!window.history.pushState}
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
function ge(p,C){if(0==p.length)return C;if(0==C.length)return p;let h=0;return p.endsWith("/")&&h++,C.startsWith("/")&&h++,2==h?p+C.substring(1):1==h?p+C:p+"/"+C}function ze(p){const C=p.match(/#|\?|$/),h=C&&C.index||p.length;return p.slice(0,h-("/"===p[h-1]?1:0))+p.slice(h)}function Ie(p){return p&&"?"!==p[0]?"?"+p:p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=v.Yz7({token:p,factory:function(){return function(p){const C=(0,v.LFG)(oe).location;return new Ee((0,v.LFG)(Me),C&&C.origin||"")}()},providedIn:"root"}),p})();const ye=new v.OlP("appBaseHref");let Ee=(()=>{class p extends Z{constructor(h,E){if(super(),this._platformLocation=h,this._removeListenerFns=[],null==E&&(E=this._platformLocation.getBaseHrefFromDOM()),null==E)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=E}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}prepareExternalUrl(h){return ge(this._baseHref,h)}path(h=!1){const E=this._platformLocation.pathname+Ie(this._platformLocation.search),x=this._platformLocation.hash;return x&&h?`${E}${x}`:E}pushState(h,E,x,k){const J=this.prepareExternalUrl(x+Ie(k));this._platformLocation.pushState(h,E,J)}replaceState(h,E,x,k){const J=this.prepareExternalUrl(x+Ie(k));this._platformLocation.replaceState(h,E,J)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var E,x;null===(x=(E=this._platformLocation).historyGo)||void 0===x||x.call(E,h)}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(Me),v.LFG(ye,8))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})(),ve=(()=>{class p extends Z{constructor(h,E){super(),this._platformLocation=h,this._baseHref="",this._removeListenerFns=[],null!=E&&(this._baseHref=E)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}path(h=!1){let E=this._platformLocation.hash;return null==E&&(E="#"),E.length>0?E.substring(1):E}prepareExternalUrl(h){const E=ge(this._baseHref,h);return E.length>0?"#"+E:E}pushState(h,E,x,k){let J=this.prepareExternalUrl(x+Ie(k));0==J.length&&(J=this._platformLocation.pathname),this._platformLocation.pushState(h,E,J)}replaceState(h,E,x,k){let J=this.prepareExternalUrl(x+Ie(k));0==J.length&&(J=this._platformLocation.pathname),this._platformLocation.replaceState(h,E,J)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var E,x;null===(x=(E=this._platformLocation).historyGo)||void 0===x||x.call(E,h)}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(Me),v.LFG(ye,8))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})(),xe=(()=>{class p{constructor(h,E){this._subject=new v.vpe,this._urlChangeListeners=[],this._platformStrategy=h;const x=this._platformStrategy.getBaseHref();this._platformLocation=E,this._baseHref=ze(_e(x)),this._platformStrategy.onPopState(k=>{this._subject.emit({url:this.path(!0),pop:!0,state:k.state,type:k.type})})}path(h=!1){return this.normalize(this._platformStrategy.path(h))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(h,E=""){return this.path()==this.normalize(h+Ie(E))}normalize(h){return p.stripTrailingSlash(function(p,C){return p&&C.startsWith(p)?C.substring(p.length):C}(this._baseHref,_e(h)))}prepareExternalUrl(h){return h&&"/"!==h[0]&&(h="/"+h),this._platformStrategy.prepareExternalUrl(h)}go(h,E="",x=null){this._platformStrategy.pushState(x,"",h,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(E)),x)}replaceState(h,E="",x=null){this._platformStrategy.replaceState(x,"",h,E),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+Ie(E)),x)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(h=0){var E,x;null===(x=(E=this._platformStrategy).historyGo)||void 0===x||x.call(E,h)}onUrlChange(h){this._urlChangeListeners.push(h),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(E=>{this._notifyUrlChangeListeners(E.url,E.state)}))}_notifyUrlChangeListeners(h="",E){this._urlChangeListeners.forEach(x=>x(h,E))}subscribe(h,E,x){return this._subject.subscribe({next:h,error:E,complete:x})}}return p.normalizeQueryParams=Ie,p.joinWithSlash=ge,p.stripTrailingSlash=ze,p.\u0275fac=function(h){return new(h||p)(v.LFG(Z),v.LFG(Me))},p.\u0275prov=v.Yz7({token:p,factory:function(){return new xe((0,v.LFG)(Z),(0,v.LFG)(Me))},providedIn:"root"}),p})();
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
var U=(()=>((U=U||{})[U.Zero=0]="Zero",U[U.One=1]="One",U[U.Two=2]="Two",U[U.Few=3]="Few",U[U.Many=4]="Many",U[U.Other=5]="Other",U))(),H=(()=>((H=H||{})[H.Format=0]="Format",H[H.Standalone=1]="Standalone",H))(),W=(()=>((W=W||{})[W.Narrow=0]="Narrow",W[W.Abbreviated=1]="Abbreviated",W[W.Wide=2]="Wide",W[W.Short=3]="Short",W))(),ie=(()=>((ie=ie||{})[ie.Short=0]="Short",ie[ie.Medium=1]="Medium",ie[ie.Long=2]="Long",ie[ie.Full=3]="Full",ie))(),V=(()=>((V=V||{})[V.Decimal=0]="Decimal",V[V.Group=1]="Group",V[V.List=2]="List",V[V.PercentSign=3]="PercentSign",V[V.PlusSign=4]="PlusSign",V[V.MinusSign=5]="MinusSign",V[V.Exponential=6]="Exponential",V[V.SuperscriptingExponent=7]="SuperscriptingExponent",V[V.PerMille=8]="PerMille",V[V.Infinity=9]="Infinity",V[V.NaN=10]="NaN",V[V.TimeSeparator=11]="TimeSeparator",V[V.CurrencyDecimal=12]="CurrencyDecimal",V[V.CurrencyGroup=13]="CurrencyGroup",V))();function Pt(p,C){return lt((0,v.cg1)(p)[v.wAp.DateFormat],C)}function ft(p,C){return lt((0,v.cg1)(p)[v.wAp.TimeFormat],C)}function Xe(p,C){return lt((0,v.cg1)(p)[v.wAp.DateTimeFormat],C)}function Bt(p,C){const h=(0,v.cg1)(p),E=h[v.wAp.NumberSymbols][C];if(void 0===E){if(C===V.CurrencyDecimal)return h[v.wAp.NumberSymbols][V.Decimal];if(C===V.CurrencyGroup)return h[v.wAp.NumberSymbols][V.Group]}return E}const Dn=v.kL8;function Tt(p){if(!p[v.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${p[v.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function lt(p,C){for(let h=C;h>-1;h--)if(void 0!==p[h])return p[h];throw new Error("Locale data API: locale data undefined")}function Ut(p){const[C,h]=p.split(":");return{hours:+C,minutes:+h}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,X={},Y=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var De=(()=>((De=De||{})[De.Short=0]="Short",De[De.ShortGMT=1]="ShortGMT",De[De.Long=2]="Long",De[De.Extended=3]="Extended",De))(),he=(()=>((he=he||{})[he.FullYear=0]="FullYear",he[he.Month=1]="Month",he[he.Date=2]="Date",he[he.Hours=3]="Hours",he[he.Minutes=4]="Minutes",he[he.Seconds=5]="Seconds",he[he.FractionalSeconds=6]="FractionalSeconds",he[he.Day=7]="Day",he))(),me=(()=>((me=me||{})[me.DayPeriods=0]="DayPeriods",me[me.Days=1]="Days",me[me.Months=2]="Months",me[me.Eras=3]="Eras",me))();function ke(p,C,h,E){let x=function(p){if(or(p))return p;if("number"==typeof p&&!isNaN(p))return new Date(p);if("string"==typeof p){if(p=p.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p)){const[x,k=1,J=1]=p.split("-").map(Se=>+Se);return Dt(x,k-1,J)}const h=parseFloat(p);if(!isNaN(p-h))return new Date(h);let E;if(E=p.match(P))return function(p){const C=new Date(0);let h=0,E=0;const x=p[8]?C.setUTCFullYear:C.setFullYear,k=p[8]?C.setUTCHours:C.setHours;p[9]&&(h=Number(p[9]+p[10]),E=Number(p[9]+p[11])),x.call(C,Number(p[1]),Number(p[2])-1,Number(p[3]));const J=Number(p[4]||0)-h,Se=Number(p[5]||0)-E,dt=Number(p[6]||0),Je=Math.floor(1e3*parseFloat("0."+(p[7]||0)));return k.call(C,J,Se,dt,Je),C}(E)}const C=new Date(p);if(!or(C))throw new Error(`Unable to convert "${p}" into a date`);return C}(p);C=kt(h,C)||C;let Se,J=[];for(;C;){if(Se=Y.exec(C),!Se){J.push(C);break}{J=J.concat(Se.slice(1));const ht=J.pop();if(!ht)break;C=ht}}let dt=x.getTimezoneOffset();E&&(dt=Zr(E,dt),x=function(p,C,h){const x=p.getTimezoneOffset();return function(p,C){return(p=new Date(p.getTime())).setMinutes(p.getMinutes()+C),p}(p,-1*(Zr(C,x)-x))}(x,E));let Je="";return J.forEach(ht=>{const He=function(p){if(Qt[p])return Qt[p];let C;switch(p){case"G":case"GG":case"GGG":C=Ae(me.Eras,W.Abbreviated);break;case"GGGG":C=Ae(me.Eras,W.Wide);break;case"GGGGG":C=Ae(me.Eras,W.Narrow);break;case"y":C=Ve(he.FullYear,1,0,!1,!0);break;case"yy":C=Ve(he.FullYear,2,0,!0,!0);break;case"yyy":C=Ve(he.FullYear,3,0,!1,!0);break;case"yyyy":C=Ve(he.FullYear,4,0,!1,!0);break;case"Y":C=Bn(1);break;case"YY":C=Bn(2,!0);break;case"YYY":C=Bn(3);break;case"YYYY":C=Bn(4);break;case"M":case"L":C=Ve(he.Month,1,1);break;case"MM":case"LL":C=Ve(he.Month,2,1);break;case"MMM":C=Ae(me.Months,W.Abbreviated);break;case"MMMM":C=Ae(me.Months,W.Wide);break;case"MMMMM":C=Ae(me.Months,W.Narrow);break;case"LLL":C=Ae(me.Months,W.Abbreviated,H.Standalone);break;case"LLLL":C=Ae(me.Months,W.Wide,H.Standalone);break;case"LLLLL":C=Ae(me.Months,W.Narrow,H.Standalone);break;case"w":C=$t(1);break;case"ww":C=$t(2);break;case"W":C=$t(1,!0);break;case"d":C=Ve(he.Date,1);break;case"dd":C=Ve(he.Date,2);break;case"c":case"cc":C=Ve(he.Day,1);break;case"ccc":C=Ae(me.Days,W.Abbreviated,H.Standalone);break;case"cccc":C=Ae(me.Days,W.Wide,H.Standalone);break;case"ccccc":C=Ae(me.Days,W.Narrow,H.Standalone);break;case"cccccc":C=Ae(me.Days,W.Short,H.Standalone);break;case"E":case"EE":case"EEE":C=Ae(me.Days,W.Abbreviated);break;case"EEEE":C=Ae(me.Days,W.Wide);break;case"EEEEE":C=Ae(me.Days,W.Narrow);break;case"EEEEEE":C=Ae(me.Days,W.Short);break;case"a":case"aa":case"aaa":C=Ae(me.DayPeriods,W.Abbreviated);break;case"aaaa":C=Ae(me.DayPeriods,W.Wide);break;case"aaaaa":C=Ae(me.DayPeriods,W.Narrow);break;case"b":case"bb":case"bbb":C=Ae(me.DayPeriods,W.Abbreviated,H.Standalone,!0);break;case"bbbb":C=Ae(me.DayPeriods,W.Wide,H.Standalone,!0);break;case"bbbbb":C=Ae(me.DayPeriods,W.Narrow,H.Standalone,!0);break;case"B":case"BB":case"BBB":C=Ae(me.DayPeriods,W.Abbreviated,H.Format,!0);break;case"BBBB":C=Ae(me.DayPeriods,W.Wide,H.Format,!0);break;case"BBBBB":C=Ae(me.DayPeriods,W.Narrow,H.Format,!0);break;case"h":C=Ve(he.Hours,1,-12);break;case"hh":C=Ve(he.Hours,2,-12);break;case"H":C=Ve(he.Hours,1);break;case"HH":C=Ve(he.Hours,2);break;case"m":C=Ve(he.Minutes,1);break;case"mm":C=Ve(he.Minutes,2);break;case"s":C=Ve(he.Seconds,1);break;case"ss":C=Ve(he.Seconds,2);break;case"S":C=Ve(he.FractionalSeconds,1);break;case"SS":C=Ve(he.FractionalSeconds,2);break;case"SSS":C=Ve(he.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":C=gn(De.Short);break;case"ZZZZZ":C=gn(De.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":C=gn(De.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":C=gn(De.Long);break;default:return null}return Qt[p]=C,C}(ht);Je+=He?He(x,h,dt):"''"===ht?"'":ht.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),Je}function Dt(p,C,h){const E=new Date(0);return E.setFullYear(p,C,h),E.setHours(0,0,0),E}function kt(p,C){const h=function(p){return(0,v.cg1)(p)[v.wAp.LocaleId]}(p);if(X[h]=X[h]||{},X[h][C])return X[h][C];let E="";switch(C){case"shortDate":E=Pt(p,ie.Short);break;case"mediumDate":E=Pt(p,ie.Medium);break;case"longDate":E=Pt(p,ie.Long);break;case"fullDate":E=Pt(p,ie.Full);break;case"shortTime":E=ft(p,ie.Short);break;case"mediumTime":E=ft(p,ie.Medium);break;case"longTime":E=ft(p,ie.Long);break;case"fullTime":E=ft(p,ie.Full);break;case"short":const x=kt(p,"shortTime"),k=kt(p,"shortDate");E=At(Xe(p,ie.Short),[x,k]);break;case"medium":const J=kt(p,"mediumTime"),Se=kt(p,"mediumDate");E=At(Xe(p,ie.Medium),[J,Se]);break;case"long":const dt=kt(p,"longTime"),Je=kt(p,"longDate");E=At(Xe(p,ie.Long),[dt,Je]);break;case"full":const ht=kt(p,"fullTime"),He=kt(p,"fullDate");E=At(Xe(p,ie.Full),[ht,He])}return E&&(X[h][C]=E),E}function At(p,C){return C&&(p=p.replace(/\{([^}]+)}/g,function(h,E){return null!=C&&E in C?C[E]:h})),p}function Ct(p,C,h="-",E,x){let k="";(p<0||x&&p<=0)&&(x?p=1-p:(p=-p,k=h));let J=String(p);for(;J.length<C;)J="0"+J;return E&&(J=J.substr(J.length-C)),k+J}function Ve(p,C,h=0,E=!1,x=!1){return function(k,J){let Se=function(p,C){switch(p){case he.FullYear:return C.getFullYear();case he.Month:return C.getMonth();case he.Date:return C.getDate();case he.Hours:return C.getHours();case he.Minutes:return C.getMinutes();case he.Seconds:return C.getSeconds();case he.FractionalSeconds:return C.getMilliseconds();case he.Day:return C.getDay();default:throw new Error(`Unknown DateType value "${p}".`)}}(p,k);if((h>0||Se>-h)&&(Se+=h),p===he.Hours)0===Se&&-12===h&&(Se=12);else if(p===he.FractionalSeconds)return function(p,C){return Ct(p,3).substr(0,C)}(Se,C);const dt=Bt(J,V.MinusSign);return Ct(Se,C,dt,E,x)}}function Ae(p,C,h=H.Format,E=!1){return function(x,k){return function(p,C,h,E,x,k){switch(h){case me.Months:return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.MonthsFormat],E[v.wAp.MonthsStandalone]],C);return lt(k,h)}(C,x,E)[p.getMonth()];case me.Days:return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.DaysFormat],E[v.wAp.DaysStandalone]],C);return lt(k,h)}(C,x,E)[p.getDay()];case me.DayPeriods:const J=p.getHours(),Se=p.getMinutes();if(k){const Je=function(p){const C=(0,v.cg1)(p);return Tt(C),(C[v.wAp.ExtraData][2]||[]).map(E=>"string"==typeof E?Ut(E):[Ut(E[0]),Ut(E[1])])}(C),ht=function(p,C,h){const E=(0,v.cg1)(p);Tt(E);const k=lt([E[v.wAp.ExtraData][0],E[v.wAp.ExtraData][1]],C)||[];return lt(k,h)||[]}(C,x,E),He=Je.findIndex(vt=>{if(Array.isArray(vt)){const[Ze,Rt]=vt,yn=J>=Ze.hours&&Se>=Ze.minutes,Wn=J<Rt.hours||J===Rt.hours&&Se<Rt.minutes;if(Ze.hours<Rt.hours){if(yn&&Wn)return!0}else if(yn||Wn)return!0}else if(vt.hours===J&&vt.minutes===Se)return!0;return!1});if(-1!==He)return ht[He]}return function(p,C,h){const E=(0,v.cg1)(p),k=lt([E[v.wAp.DayPeriodsFormat],E[v.wAp.DayPeriodsStandalone]],C);return lt(k,h)}(C,x,E)[J<12?0:1];case me.Eras:return function(p,C){return lt((0,v.cg1)(p)[v.wAp.Eras],C)}(C,E)[p.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${h}`)}}(x,k,p,C,h,E)}}function gn(p){return function(C,h,E){const x=-1*E,k=Bt(h,V.MinusSign),J=x>0?Math.floor(x/60):Math.ceil(x/60);switch(p){case De.Short:return(x>=0?"+":"")+Ct(J,2,k)+Ct(Math.abs(x%60),2,k);case De.ShortGMT:return"GMT"+(x>=0?"+":"")+Ct(J,1,k);case De.Long:return"GMT"+(x>=0?"+":"")+Ct(J,2,k)+":"+Ct(Math.abs(x%60),2,k);case De.Extended:return 0===E?"Z":(x>=0?"+":"")+Ct(J,2,k)+":"+Ct(Math.abs(x%60),2,k);default:throw new Error(`Unknown zone width "${p}"`)}}}function Er(p){return Dt(p.getFullYear(),p.getMonth(),p.getDate()+(4-p.getDay()))}function $t(p,C=!1){return function(h,E){let x;if(C){const k=new Date(h.getFullYear(),h.getMonth(),1).getDay()-1,J=h.getDate();x=1+Math.floor((J+k)/7)}else{const k=Er(h),J=function(p){const C=Dt(p,0,1).getDay();return Dt(p,0,1+(C<=4?4:11)-C)}(k.getFullYear()),Se=k.getTime()-J.getTime();x=1+Math.round(Se/6048e5)}return Ct(x,p,Bt(E,V.MinusSign))}}function Bn(p,C=!1){return function(h,E){return Ct(Er(h).getFullYear(),p,Bt(E,V.MinusSign),C)}}const Qt={};function Zr(p,C){p=p.replace(/:/g,"");const h=Date.parse("Jan 01, 1970 00:00:00 "+p)/6e4;return isNaN(h)?C:h}function or(p){return p instanceof Date&&!isNaN(p.valueOf())}
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
class We{}let Jt=(()=>{class p extends We{constructor(h){super(),this.locale=h}getPluralCategory(h,E){switch(Dn(E||this.locale)(h)){case U.Zero:return"zero";case U.One:return"one";case U.Two:return"two";case U.Few:return"few";case U.Many:return"many";default:return"other"}}}return p.\u0275fac=function(h){return new(h||p)(v.LFG(v.soG))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac}),p})();
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
function _t(p,C){C=encodeURIComponent(C);for(const h of p.split(";")){const E=h.indexOf("="),[x,k]=-1==E?[h,""]:[h.slice(0,E),h.slice(E+1)];if(x.trim()===C)return decodeURIComponent(k)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Cn=(()=>{class p{constructor(h,E,x,k){this._iterableDiffers=h,this._keyValueDiffers=E,this._ngEl=x,this._renderer=k,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(h){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof h?h.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(h){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof h?h.split(/\s+/):h,this._rawClass&&((0,v.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const h=this._iterableDiffer.diff(this._rawClass);h&&this._applyIterableChanges(h)}else if(this._keyValueDiffer){const h=this._keyValueDiffer.diff(this._rawClass);h&&this._applyKeyValueChanges(h)}}_applyKeyValueChanges(h){h.forEachAddedItem(E=>this._toggleClass(E.key,E.currentValue)),h.forEachChangedItem(E=>this._toggleClass(E.key,E.currentValue)),h.forEachRemovedItem(E=>{E.previousValue&&this._toggleClass(E.key,!1)})}_applyIterableChanges(h){h.forEachAddedItem(E=>{if("string"!=typeof E.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,v.AaK)(E.item)}`);this._toggleClass(E.item,!0)}),h.forEachRemovedItem(E=>this._toggleClass(E.item,!1))}_applyClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(E=>this._toggleClass(E,!0)):Object.keys(h).forEach(E=>this._toggleClass(E,!!h[E])))}_removeClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(E=>this._toggleClass(E,!1)):Object.keys(h).forEach(E=>this._toggleClass(E,!1)))}_toggleClass(h,E){(h=h.trim())&&h.split(/\s+/g).forEach(x=>{E?this._renderer.addClass(this._ngEl.nativeElement,x):this._renderer.removeClass(this._ngEl.nativeElement,x)})}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.ZZ4),v.Y36(v.aQg),v.Y36(v.SBq),v.Y36(v.Qsj))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),p})();
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
class Mr{constructor(C,h,E,x){this.$implicit=C,this.ngForOf=h,this.index=E,this.count=x}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Vn=(()=>{class p{constructor(h,E,x){this._viewContainer=h,this._template=E,this._differs=x,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(h){this._ngForOf=h,this._ngForOfDirty=!0}set ngForTrackBy(h){this._trackByFn=h}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(h){h&&(this._template=h)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const h=this._ngForOf;!this._differ&&h&&(this._differ=this._differs.find(h).create(this.ngForTrackBy))}if(this._differ){const h=this._differ.diff(this._ngForOf);h&&this._applyChanges(h)}}_applyChanges(h){const E=this._viewContainer;h.forEachOperation((x,k,J)=>{if(null==x.previousIndex)E.createEmbeddedView(this._template,new Mr(x.item,this._ngForOf,-1,-1),null===J?void 0:J);else if(null==J)E.remove(null===k?void 0:k);else if(null!==k){const Se=E.get(k);E.move(Se,J),Ye(Se,x)}});for(let x=0,k=E.length;x<k;x++){const Se=E.get(x).context;Se.index=x,Se.count=k,Se.ngForOf=this._ngForOf}h.forEachIdentityChange(x=>{Ye(E.get(x.currentIndex),x)})}static ngTemplateContextGuard(h,E){return!0}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(v.ZZ4))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),p})();function Ye(p,C){p.context.$implicit=C.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let $n=(()=>{class p{constructor(h,E){this._viewContainer=h,this._context=new Jr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=E}set ngIf(h){this._context.$implicit=this._context.ngIf=h,this._updateView()}set ngIfThen(h){zn("ngIfThen",h),this._thenTemplateRef=h,this._thenViewRef=null,this._updateView()}set ngIfElse(h){zn("ngIfElse",h),this._elseTemplateRef=h,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(h,E){return!0}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),p})();class Jr{constructor(){this.$implicit=null,this.ngIf=null}}function zn(p,C){if(C&&!C.createEmbeddedView)throw new Error(`${p} must be a TemplateRef, but received '${(0,v.AaK)(C)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ht{constructor(C,h){this._viewContainerRef=C,this._templateRef=h,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(C){C&&!this._created?this.create():!C&&this._created&&this.destroy()}}let Pn=(()=>{class p{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(h){this._ngSwitch=h,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(h){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(h)}_matchCase(h){const E=h==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||E,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),E}_updateDefaultCases(h){if(this._defaultViews&&h!==this._defaultUsed){this._defaultUsed=h;for(let E=0;E<this._defaultViews.length;E++)this._defaultViews[E].enforceState(h)}}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275dir=v.lG2({type:p,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),p})(),On=(()=>{class p{constructor(h,E,x){this.ngSwitch=x,x._addCase(),this._view=new Ht(h,E)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.s_b),v.Y36(v.Rgc),v.Y36(Pn,9))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),p})(),rn=(()=>{class p{constructor(h,E,x){this._ngEl=h,this._differs=E,this._renderer=x,this._ngStyle=null,this._differ=null}set ngStyle(h){this._ngStyle=h,!this._differ&&h&&(this._differ=this._differs.find(h).create())}ngDoCheck(){if(this._differ){const h=this._differ.diff(this._ngStyle);h&&this._applyChanges(h)}}_setStyle(h,E){const[x,k]=h.split(".");null!=(E=null!=E&&k?`${E}${k}`:E)?this._renderer.setStyle(this._ngEl.nativeElement,x,E):this._renderer.removeStyle(this._ngEl.nativeElement,x)}_applyChanges(h){h.forEachRemovedItem(E=>this._setStyle(E.key,null)),h.forEachAddedItem(E=>this._setStyle(E.key,E.currentValue)),h.forEachChangedItem(E=>this._setStyle(E.key,E.currentValue))}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.SBq),v.Y36(v.aQg),v.Y36(v.Qsj))},p.\u0275dir=v.lG2({type:p,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),p})();
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
       */class Ir{createSubscription(C,h){return C.subscribe({next:h,error:E=>{throw E}})}dispose(C){C.unsubscribe()}onDestroy(C){C.unsubscribe()}}class dn{createSubscription(C,h){return C.then(h,E=>{throw E})}dispose(C){}onDestroy(C){}}const Pr=new dn,_i=new Ir;let Or=(()=>{class p{constructor(h){this._ref=h,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(h){return this._obj?h!==this._obj?(this._dispose(),this.transform(h)):this._latestValue:(h&&this._subscribe(h),this._latestValue)}_subscribe(h){this._obj=h,this._strategy=this._selectStrategy(h),this._subscription=this._strategy.createSubscription(h,E=>this._updateLatestValue(h,E))}_selectStrategy(h){if((0,v.QGY)(h))return Pr;if((0,v.F4k)(h))return _i;throw xt(p,h)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(h,E){h===this._obj&&(this._latestValue=E,this._ref.markForCheck())}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.sBO,16))},p.\u0275pipe=v.Yjl({name:"async",type:p,pure:!1}),p})();
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
const Fr=new v.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let wi=(()=>{class p{constructor(h,E){this.locale=h,this.defaultTimezone=E}transform(h,E="mediumDate",x,k){var J;if(null==h||""===h||h!=h)return null;try{return ke(h,E,k||this.locale,null!==(J=null!=x?x:this.defaultTimezone)&&void 0!==J?J:void 0)}catch(Se){throw xt(p,Se.message)}}}return p.\u0275fac=function(h){return new(h||p)(v.Y36(v.soG,16),v.Y36(Fr,24))},p.\u0275pipe=v.Yjl({name:"date",type:p,pure:!0}),p})(),Gn=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=v.oAB({type:p}),p.\u0275inj=v.cJS({providers:[{provide:We,useClass:Jt}]}),p})();
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
const Lr="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ti=(()=>{class p{}return p.\u0275prov=(0,v.Yz7)({token:p,providedIn:"root",factory:()=>new Ft((0,v.LFG)(oe),window)}),p})();class Ft{constructor(C,h){this.document=C,this.window=h,this.offset=()=>[0,0]}setOffset(C){this.offset=Array.isArray(C)?()=>C:C}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(C){this.supportsScrolling()&&this.window.scrollTo(C[0],C[1])}scrollToAnchor(C){if(!this.supportsScrolling())return;const h=function(p,C){const h=p.getElementById(C)||p.getElementsByName(C)[0];if(h)return h;if("function"==typeof p.createTreeWalker&&p.body&&(p.body.createShadowRoot||p.body.attachShadow)){const E=p.createTreeWalker(p.body,NodeFilter.SHOW_ELEMENT);let x=E.currentNode;for(;x;){const k=x.shadowRoot;if(k){const J=k.getElementById(C)||k.querySelector(`[name="${C}"]`);if(J)return J}x=E.nextNode()}}return null}(this.document,C);h&&(this.scrollToElement(h),this.attemptFocus(h))}setHistoryScrollRestoration(C){if(this.supportScrollRestoration()){const h=this.window.history;h&&h.scrollRestoration&&(h.scrollRestoration=C)}}scrollToElement(C){const h=C.getBoundingClientRect(),E=h.left+this.window.pageXOffset,x=h.top+this.window.pageYOffset,k=this.offset();this.window.scrollTo(E-k[0],x-k[1])}attemptFocus(C){return C.focus(),this.document.activeElement===C}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const C=no(this.window.history)||no(Object.getPrototypeOf(this.window.history));return!(!C||!C.writable&&!C.set)}catch(C){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(C){return!1}}}function no(p){return Object.getOwnPropertyDescriptor(p,"scrollRestoration")}
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
       */},520:(Ke,le,S)=>{S.d(le,{TP:()=>st,eN:()=>V,JF:()=>lt});var v=S(808),R=S(587),ee=S(646),te=S(306),se=S(351),Fe=S(300),oe=S(4);
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
       */class Me{}class ce{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class q{constructor(M){this.normalizedNames=new Map,this.lazyUpdate=null,M?this.lazyInit="string"==typeof M?()=>{this.headers=new Map,M.split("\n").forEach(P=>{const X=P.indexOf(":");if(X>0){const Y=P.slice(0,X),De=Y.toLowerCase(),he=P.slice(X+1).trim();this.maybeSetNormalizedName(Y,De),this.headers.has(De)?this.headers.get(De).push(he):this.headers.set(De,[he])}})}:()=>{this.headers=new Map,Object.keys(M).forEach(P=>{let X=M[P];const Y=P.toLowerCase();"string"==typeof X&&(X=[X]),X.length>0&&(this.headers.set(Y,X),this.maybeSetNormalizedName(P,Y))})}:this.headers=new Map}has(M){return this.init(),this.headers.has(M.toLowerCase())}get(M){this.init();const P=this.headers.get(M.toLowerCase());return P&&P.length>0?P[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(M){return this.init(),this.headers.get(M.toLowerCase())||null}append(M,P){return this.clone({name:M,value:P,op:"a"})}set(M,P){return this.clone({name:M,value:P,op:"s"})}delete(M,P){return this.clone({name:M,value:P,op:"d"})}maybeSetNormalizedName(M,P){this.normalizedNames.has(P)||this.normalizedNames.set(P,M)}init(){this.lazyInit&&(this.lazyInit instanceof q?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(M=>this.applyUpdate(M)),this.lazyUpdate=null))}copyFrom(M){M.init(),Array.from(M.headers.keys()).forEach(P=>{this.headers.set(P,M.headers.get(P)),this.normalizedNames.set(P,M.normalizedNames.get(P))})}clone(M){const P=new q;return P.lazyInit=this.lazyInit&&this.lazyInit instanceof q?this.lazyInit:this,P.lazyUpdate=(this.lazyUpdate||[]).concat([M]),P}applyUpdate(M){const P=M.name.toLowerCase();switch(M.op){case"a":case"s":let X=M.value;if("string"==typeof X&&(X=[X]),0===X.length)return;this.maybeSetNormalizedName(M.name,P);const Y=("a"===M.op?this.headers.get(P):void 0)||[];Y.push(...X),this.headers.set(P,Y);break;case"d":const De=M.value;if(De){let he=this.headers.get(P);if(!he)return;he=he.filter(me=>-1===De.indexOf(me)),0===he.length?(this.headers.delete(P),this.normalizedNames.delete(P)):this.headers.set(P,he)}else this.headers.delete(P),this.normalizedNames.delete(P)}}forEach(M){this.init(),Array.from(this.normalizedNames.keys()).forEach(P=>M(this.normalizedNames.get(P),this.headers.get(P)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class B{encodeKey(M){return ze(M)}encodeValue(M){return ze(M)}decodeKey(M){return decodeURIComponent(M)}decodeValue(M){return decodeURIComponent(M)}}const ne=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function ze(z){return encodeURIComponent(z).replace(ne,(M,P)=>{var X;return null!==(X=ge[P])&&void 0!==X?X:M})}function Ie(z){return`${z}`}class Z{constructor(M={}){if(this.updates=null,this.cloneFrom=null,this.encoder=M.encoder||new B,M.fromString){if(M.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(z,M){const P=new Map;return z.length>0&&z.replace(/^\?/,"").split("&").forEach(Y=>{const De=Y.indexOf("="),[he,me]=-1==De?[M.decodeKey(Y),""]:[M.decodeKey(Y.slice(0,De)),M.decodeValue(Y.slice(De+1))],ke=P.get(he)||[];ke.push(me),P.set(he,ke)}),P}(M.fromString,this.encoder)}else M.fromObject?(this.map=new Map,Object.keys(M.fromObject).forEach(P=>{const X=M.fromObject[P];this.map.set(P,Array.isArray(X)?X:[X])})):this.map=null}has(M){return this.init(),this.map.has(M)}get(M){this.init();const P=this.map.get(M);return P?P[0]:null}getAll(M){return this.init(),this.map.get(M)||null}keys(){return this.init(),Array.from(this.map.keys())}append(M,P){return this.clone({param:M,value:P,op:"a"})}appendAll(M){const P=[];return Object.keys(M).forEach(X=>{const Y=M[X];Array.isArray(Y)?Y.forEach(De=>{P.push({param:X,value:De,op:"a"})}):P.push({param:X,value:Y,op:"a"})}),this.clone(P)}set(M,P){return this.clone({param:M,value:P,op:"s"})}delete(M,P){return this.clone({param:M,value:P,op:"d"})}toString(){return this.init(),this.keys().map(M=>{const P=this.encoder.encodeKey(M);return this.map.get(M).map(X=>P+"="+this.encoder.encodeValue(X)).join("&")}).filter(M=>""!==M).join("&")}clone(M){const P=new Z({encoder:this.encoder});return P.cloneFrom=this.cloneFrom||this,P.updates=(this.updates||[]).concat(M),P}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(M=>this.map.set(M,this.cloneFrom.map.get(M))),this.updates.forEach(M=>{switch(M.op){case"a":case"s":const P=("a"===M.op?this.map.get(M.param):void 0)||[];P.push(Ie(M.value)),this.map.set(M.param,P);break;case"d":if(void 0===M.value){this.map.delete(M.param);break}{let X=this.map.get(M.param)||[];const Y=X.indexOf(Ie(M.value));-1!==Y&&X.splice(Y,1),X.length>0?this.map.set(M.param,X):this.map.delete(M.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ye{constructor(){this.map=new Map}set(M,P){return this.map.set(M,P),this}get(M){return this.map.has(M)||this.map.set(M,M.defaultValue()),this.map.get(M)}delete(M){return this.map.delete(M),this}has(M){return this.map.has(M)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ve(z){return"undefined"!=typeof ArrayBuffer&&z instanceof ArrayBuffer}function xe(z){return"undefined"!=typeof Blob&&z instanceof Blob}function re(z){return"undefined"!=typeof FormData&&z instanceof FormData}class _e{constructor(M,P,X,Y){let De;if(this.url=P,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=M.toUpperCase(),function(z){switch(z){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||Y?(this.body=void 0!==X?X:null,De=Y):De=X,De&&(this.reportProgress=!!De.reportProgress,this.withCredentials=!!De.withCredentials,De.responseType&&(this.responseType=De.responseType),De.headers&&(this.headers=De.headers),De.context&&(this.context=De.context),De.params&&(this.params=De.params)),this.headers||(this.headers=new q),this.context||(this.context=new ye),this.params){const he=this.params.toString();if(0===he.length)this.urlWithParams=P;else{const me=P.indexOf("?");this.urlWithParams=P+(-1===me?"?":me<P.length-1?"&":"")+he}}else this.params=new Z,this.urlWithParams=P}serializeBody(){return null===this.body?null:ve(this.body)||xe(this.body)||re(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof Z?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||re(this.body)?null:xe(this.body)?this.body.type||null:ve(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Z?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(M={}){var P;const X=M.method||this.method,Y=M.url||this.url,De=M.responseType||this.responseType,he=void 0!==M.body?M.body:this.body,me=void 0!==M.withCredentials?M.withCredentials:this.withCredentials,ke=void 0!==M.reportProgress?M.reportProgress:this.reportProgress;let Dt=M.headers||this.headers,kt=M.params||this.params;const At=null!==(P=M.context)&&void 0!==P?P:this.context;return void 0!==M.setHeaders&&(Dt=Object.keys(M.setHeaders).reduce((Ct,et)=>Ct.set(et,M.setHeaders[et]),Dt)),M.setParams&&(kt=Object.keys(M.setParams).reduce((Ct,et)=>Ct.set(et,M.setParams[et]),kt)),new _e(X,Y,he,{params:kt,headers:Dt,context:At,reportProgress:ke,responseType:De,withCredentials:me})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var fe=(()=>((fe=fe||{})[fe.Sent=0]="Sent",fe[fe.UploadProgress=1]="UploadProgress",fe[fe.ResponseHeader=2]="ResponseHeader",fe[fe.DownloadProgress=3]="DownloadProgress",fe[fe.Response=4]="Response",fe[fe.User=5]="User",fe))();class j{constructor(M,P=200,X="OK"){this.headers=M.headers||new q,this.status=void 0!==M.status?M.status:P,this.statusText=M.statusText||X,this.url=M.url||null,this.ok=this.status>=200&&this.status<300}}class U extends j{constructor(M={}){super(M),this.type=fe.ResponseHeader}clone(M={}){return new U({headers:M.headers||this.headers,status:void 0!==M.status?M.status:this.status,statusText:M.statusText||this.statusText,url:M.url||this.url||void 0})}}class H extends j{constructor(M={}){super(M),this.type=fe.Response,this.body=void 0!==M.body?M.body:null}clone(M={}){return new H({body:void 0!==M.body?M.body:this.body,headers:M.headers||this.headers,status:void 0!==M.status?M.status:this.status,statusText:M.statusText||this.statusText,url:M.url||this.url||void 0})}}class W extends j{constructor(M){super(M,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${M.url||"(unknown url)"}`:`Http failure response for ${M.url||"(unknown url)"}: ${M.status} ${M.statusText}`,this.error=M.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ie(z,M){return{body:M,headers:z.headers,context:z.context,observe:z.observe,params:z.params,reportProgress:z.reportProgress,responseType:z.responseType,withCredentials:z.withCredentials}}let V=(()=>{class z{constructor(P){this.handler=P}request(P,X,Y={}){let De;if(P instanceof _e)De=P;else{let ke,Dt;ke=Y.headers instanceof q?Y.headers:new q(Y.headers),Y.params&&(Dt=Y.params instanceof Z?Y.params:new Z({fromObject:Y.params})),De=new _e(P,X,void 0!==Y.body?Y.body:null,{headers:ke,context:Y.context,params:Dt,reportProgress:Y.reportProgress,responseType:Y.responseType||"json",withCredentials:Y.withCredentials})}const he=(0,ee.of)(De).pipe((0,se.b)(ke=>this.handler.handle(ke)));if(P instanceof _e||"events"===Y.observe)return he;const me=he.pipe((0,Fe.h)(ke=>ke instanceof H));switch(Y.observe||"body"){case"body":switch(De.responseType){case"arraybuffer":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&!(ke.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return ke.body}));case"blob":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&!(ke.body instanceof Blob))throw new Error("Response is not a Blob.");return ke.body}));case"text":return me.pipe((0,oe.U)(ke=>{if(null!==ke.body&&"string"!=typeof ke.body)throw new Error("Response is not a string.");return ke.body}));default:return me.pipe((0,oe.U)(ke=>ke.body))}case"response":return me;default:throw new Error(`Unreachable: unhandled observe type ${Y.observe}}`)}}delete(P,X={}){return this.request("DELETE",P,X)}get(P,X={}){return this.request("GET",P,X)}head(P,X={}){return this.request("HEAD",P,X)}jsonp(P,X){return this.request("JSONP",P,{params:(new Z).append(X,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(P,X={}){return this.request("OPTIONS",P,X)}patch(P,X,Y={}){return this.request("PATCH",P,ie(Y,X))}post(P,X,Y={}){return this.request("POST",P,ie(Y,X))}put(P,X,Y={}){return this.request("PUT",P,ie(Y,X))}}return z.\u0275fac=function(P){return new(P||z)(R.LFG(Me))},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Re{constructor(M,P){this.next=M,this.interceptor=P}handle(M){return this.interceptor.intercept(M,this.next)}}const st=new R.OlP("HTTP_INTERCEPTORS");let Te=(()=>{class z{intercept(P,X){return X.handle(P)}}return z.\u0275fac=function(P){return new(P||z)},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Xe=/^\)\]\}',?\n/;let kn=(()=>{class z{constructor(P){this.xhrFactory=P}handle(P){if("JSONP"===P.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new te.y(X=>{const Y=this.xhrFactory.build();if(Y.open(P.method,P.urlWithParams),P.withCredentials&&(Y.withCredentials=!0),P.headers.forEach((et,Ve)=>Y.setRequestHeader(et,Ve.join(","))),P.headers.has("Accept")||Y.setRequestHeader("Accept","application/json, text/plain, */*"),!P.headers.has("Content-Type")){const et=P.detectContentTypeHeader();null!==et&&Y.setRequestHeader("Content-Type",et)}if(P.responseType){const et=P.responseType.toLowerCase();Y.responseType="json"!==et?et:"text"}const De=P.serializeBody();let he=null;const me=()=>{if(null!==he)return he;const et=1223===Y.status?204:Y.status,Ve=Y.statusText||"OK",Ue=new q(Y.getAllResponseHeaders()),Ae=function(z){return"responseURL"in z&&z.responseURL?z.responseURL:/^X-Request-URL:/m.test(z.getAllResponseHeaders())?z.getResponseHeader("X-Request-URL"):null}(Y)||P.url;return he=new U({headers:Ue,status:et,statusText:Ve,url:Ae}),he},ke=()=>{let{headers:et,status:Ve,statusText:Ue,url:Ae}=me(),Et=null;204!==Ve&&(Et=void 0===Y.response?Y.responseText:Y.response),0===Ve&&(Ve=Et?200:0);let gn=Ve>=200&&Ve<300;if("json"===P.responseType&&"string"==typeof Et){const cn=Et;Et=Et.replace(Xe,"");try{Et=""!==Et?JSON.parse(Et):null}catch(tt){Et=cn,gn&&(gn=!1,Et={error:tt,text:Et})}}gn?(X.next(new H({body:Et,headers:et,status:Ve,statusText:Ue,url:Ae||void 0})),X.complete()):X.error(new W({error:Et,headers:et,status:Ve,statusText:Ue,url:Ae||void 0}))},Dt=et=>{const{url:Ve}=me(),Ue=new W({error:et,status:Y.status||0,statusText:Y.statusText||"Unknown Error",url:Ve||void 0});X.error(Ue)};let kt=!1;const At=et=>{kt||(X.next(me()),kt=!0);let Ve={type:fe.DownloadProgress,loaded:et.loaded};et.lengthComputable&&(Ve.total=et.total),"text"===P.responseType&&!!Y.responseText&&(Ve.partialText=Y.responseText),X.next(Ve)},Ct=et=>{let Ve={type:fe.UploadProgress,loaded:et.loaded};et.lengthComputable&&(Ve.total=et.total),X.next(Ve)};return Y.addEventListener("load",ke),Y.addEventListener("error",Dt),Y.addEventListener("timeout",Dt),Y.addEventListener("abort",Dt),P.reportProgress&&(Y.addEventListener("progress",At),null!==De&&Y.upload&&Y.upload.addEventListener("progress",Ct)),Y.send(De),X.next({type:fe.Sent}),()=>{Y.removeEventListener("error",Dt),Y.removeEventListener("abort",Dt),Y.removeEventListener("load",ke),Y.removeEventListener("timeout",Dt),P.reportProgress&&(Y.removeEventListener("progress",At),null!==De&&Y.upload&&Y.upload.removeEventListener("progress",Ct)),Y.readyState!==Y.DONE&&Y.abort()}})}}return z.\u0275fac=function(P){return new(P||z)(R.LFG(v.JF))},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nr=new R.OlP("XSRF_COOKIE_NAME"),wt=new R.OlP("XSRF_HEADER_NAME");class rr{}let qt=(()=>{class z{constructor(P,X,Y){this.doc=P,this.platform=X,this.cookieName=Y,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const P=this.doc.cookie||"";return P!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(P,this.cookieName),this.lastCookieString=P),this.lastToken}}return z.\u0275fac=function(P){return new(P||z)(R.LFG(v.K0),R.LFG(R.Lbi),R.LFG(nr))},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})(),Dn=(()=>{class z{constructor(P,X){this.tokenService=P,this.headerName=X}intercept(P,X){const Y=P.url.toLowerCase();if("GET"===P.method||"HEAD"===P.method||Y.startsWith("http://")||Y.startsWith("https://"))return X.handle(P);const De=this.tokenService.getToken();return null!==De&&!P.headers.has(this.headerName)&&(P=P.clone({headers:P.headers.set(this.headerName,De)})),X.handle(P)}}return z.\u0275fac=function(P){return new(P||z)(R.LFG(rr),R.LFG(wt))},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})(),Tt=(()=>{class z{constructor(P,X){this.backend=P,this.injector=X,this.chain=null}handle(P){if(null===this.chain){const X=this.injector.get(st,[]);this.chain=X.reduceRight((Y,De)=>new Re(Y,De),this.backend)}return this.chain.handle(P)}}return z.\u0275fac=function(P){return new(P||z)(R.LFG(ce),R.LFG(R.zs3))},z.\u0275prov=R.Yz7({token:z,factory:z.\u0275fac}),z})(),Lt=(()=>{class z{static disable(){return{ngModule:z,providers:[{provide:Dn,useClass:Te}]}}static withOptions(P={}){return{ngModule:z,providers:[P.cookieName?{provide:nr,useValue:P.cookieName}:[],P.headerName?{provide:wt,useValue:P.headerName}:[]]}}}return z.\u0275fac=function(P){return new(P||z)},z.\u0275mod=R.oAB({type:z}),z.\u0275inj=R.cJS({providers:[Dn,{provide:st,useExisting:Dn,multi:!0},{provide:rr,useClass:qt},{provide:nr,useValue:"XSRF-TOKEN"},{provide:wt,useValue:"X-XSRF-TOKEN"}]}),z})(),lt=(()=>{class z{}return z.\u0275fac=function(P){return new(P||z)},z.\u0275mod=R.oAB({type:z}),z.\u0275inj=R.cJS({providers:[V,{provide:Me,useClass:Tt},kn,{provide:ce,useExisting:kn}],imports:[[Lt.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),z})();
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
       */,587:(Ke,le,S)=>{S.d(le,{deG:()=>Wr,tb:()=>Xp,AFp:()=>Qp,ip1:()=>Nl,CZH:()=>Ci,hGG:()=>G0,z2F:()=>_s,sBO:()=>C0,Sil:()=>kl,_Vd:()=>gs,EJc:()=>tg,SBq:()=>ms,qLn:()=>ts,vpe:()=>Dr,tBr:()=>qi,XFs:()=>M,OlP:()=>ut,zs3:()=>Nn,ZZ4:()=>Ta,aQg:()=>Aa,soG:()=>Ia,YKP:()=>up,h0i:()=>yi,PXZ:()=>h0,R0b:()=>In,FiY:()=>lo,Lbi:()=>Jp,g9A:()=>Zp,Qsj:()=>KC,FYo:()=>op,JOm:()=>pr,tp0:()=>Wo,Rgc:()=>Cs,dDg:()=>og,GfV:()=>ip,s_b:()=>_a,ifc:()=>At,eFA:()=>ag,G48:()=>D0,_c5:()=>j0,VLi:()=>l0,c2e:()=>eg,zSh:()=>zu,wAp:()=>je,vHH:()=>Ee,cg1:()=>fl,kL8:()=>Ah,dqk:()=>Ae,sIi:()=>as,CqO:()=>Of,QGY:()=>sl,F4k:()=>Pf,RDi:()=>Ai,AaK:()=>ne,TTD:()=>eo,xp6:()=>ud,uIk:()=>Zu,Tol:()=>nh,Suo:()=>Tp,Xpm:()=>bt,lG2:()=>xn,Yz7:()=>wt,cJS:()=>qt,oAB:()=>Hn,Yjl:()=>br,Y36:()=>ls,_UZ:()=>Af,qZA:()=>il,TgZ:()=>ol,LFG:()=>tn,$8M:()=>$e,$Z:()=>Tf,NdJ:()=>al,CRH:()=>Ap,kcU:()=>Bs,O4$:()=>js,oxw:()=>kf,ALo:()=>Dp,lcZ:()=>Cp,xi3:()=>Ep,Q6J:()=>nl,VKq:()=>fp,kEZ:()=>hp,iGM:()=>Sp,MAs:()=>yf,LSH:()=>iu,kYT:()=>wr,YNc:()=>mf,W1O:()=>Op,_uU:()=>lh,Oqu:()=>dl,hij:()=>pa});var v=S(189),R=S(421),ee=S(515),te=S(669),se=S(76),oe=S(579),Me=S(727),ce=S(306),q=S(99);
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
       */const ze=B({__forward_ref__:B});function Ie(e){return e.__forward_ref__=Ie,e.toString=function(){return ne(this())},e}function Z(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(ze)&&e.__forward_ref__===Ie}
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
       */(t,n)),this.code=t}}function re(e){return"string"==typeof e?e:null==e?"":String(e)}function Qe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():re(e)}function U(e,t){const n=t?` in ${t}`:"";throw new Ee("201",`No provider for ${Qe(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ft(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function qt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Dn(e){return Tt(e,lt)||Tt(e,jn)}function Tt(e,t){return e.hasOwnProperty(t)?e[t]:null}function Lt(e){return e&&(e.hasOwnProperty(Ut)||e.hasOwnProperty(z))?e[Ut]:null}const lt=B({\u0275prov:B}),Ut=B({\u0275inj:B}),jn=B({ngInjectableDef:B}),z=B({ngInjectorDef:B});
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
       */let P;function Y(e){const t=P;return P=e,t}function De(e,t,n){const r=Dn(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&M.Optional?null:void 0!==t?t:void U(ne(e),"Injector")}
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
       */var ke=(()=>((ke=ke||{})[ke.OnPush=0]="OnPush",ke[ke.Default=1]="Default",ke))(),At=(()=>{return(e=At||(At={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",At;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ct="undefined"!=typeof globalThis&&globalThis,et="undefined"!=typeof window&&window,Ve="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Ae=Ct||"undefined"!=typeof global&&global||et||Ve,cn={},tt=[],Cr=B({\u0275cmp:B}),Er=B({\u0275dir:B}),$t=B({\u0275pipe:B}),Bn=B({\u0275mod:B}),Qt=B({\u0275fac:B}),Un=B({__NG_ELEMENT_ID__:B});
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
let Zr=0;function bt(e){return me(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===ke.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||tt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||At.Emulated,id:"c",styles:e.styles||tt,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Zr++,r.inputs=An(e.inputs,n),r.outputs=An(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(_r):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(Rr):null,r})}function _r(e){return F(e)||function(e){return e[Er]||null}(e)}function Rr(e){return function(e){return e[$t]||null}(e)}const or={};function Hn(e){return me(()=>{const t={type:e.type,bootstrap:e.bootstrap||tt,declarations:e.declarations||tt,imports:e.imports||tt,exports:e.exports||tt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(or[e.id]=e.type),t})}function wr(e,t){return me(()=>{const n=O(e,!0);n.declarations=t.declarations||tt,n.imports=t.imports||tt,n.exports=t.exports||tt})}function An(e,t){if(null==e)return cn;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const xn=bt;function br(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function F(e){return e[Cr]||null}function O(e,t){const n=e[Bn]||null;if(!n&&!0===t)throw new Error(`Type ${ne(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rn(e){return Array.isArray(e)&&"object"==typeof e[1]}function on(e){return Array.isArray(e)&&!0===e[1]}function mo(e){return 0!=(8&e.flags)}function xt(e){return 2==(2&e.flags)}function Ir(e){return 1==(1&e.flags)}function dn(e){return null!==e.template}function Pr(e){return 0!=(512&e[2])}
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
function Gn(e,t){return e.hasOwnProperty(Qt)?e[Qt]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lr{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eo(){return to}function to(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ss),Io}function Io(){const e=Si(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===cn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ss(e,t,n,r){const o=Si(e)||function(e,t){return e[Ii]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:cn,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new Lr(d&&d.currentValue,t,s===cn),e[r]=t}eo.ngInherit=!0;const Ii="__ngSimpleChanges__";function Si(e){return e[Ii]||null}const no="http://www.w3.org/2000/svg";
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
let Ao;function Ai(e){Ao=e}function h(e){return!!e.listen}const E={createRenderer:(e,t)=>void 0!==Ao?Ao:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function k(e){for(;Array.isArray(e);)e=e[0];return e}function dt(e,t){return k(t[e])}function Je(e,t){return k(t[e.index])}function He(e,t){return e.data[t]}function vt(e,t){return e[t]}function Ze(e,t){const n=t[e];return rn(n)?n:n[0]}function Rt(e){return 4==(4&e[2])}function yn(e){return 128==(128&e[2])}function fn(e,t){return null==t?null:e[t]}function Yn(e){e[18]=0}function kr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Pe={lFrame:Ns(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function oo(){return Pe.bindingsEnabled}function Q(){return Pe.lFrame.lView}function rt(){return Pe.lFrame.tView}function jt(){let e=Ro();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ro(){return Pe.lFrame.currentTNode}function _n(e,t){const n=Pe.lFrame;n.currentTNode=e,n.isParent=t}function jr(){return Pe.lFrame.isParent}function Oo(){return Pe.isInCheckNoChangesMode}function ar(e){Pe.isInCheckNoChangesMode=e}function en(){const e=Pe.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Ur(){return Pe.lFrame.bindingIndex++}function Oa(e,t){const n=Pe.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ri(t)}function Ri(e){Pe.lFrame.currentDirectiveIndex=e}function Ps(){return Pe.lFrame.currentQueryIndex}function Fo(e){Pe.lFrame.currentQueryIndex=e}function Na(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Os(e,t,n){if(n&M.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&M.Host||(o=Na(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Pe.lFrame=Fs();return r.currentTNode=t,r.lView=e,!0}function No(e){const t=Fs(),n=e[1];Pe.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Fs(){const e=Pe.lFrame,t=null===e?null:e.child;return null===t?Ns(e):t}function Ns(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Oi(){const e=Pe.lFrame;return Pe.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const La=Oi;function so(){const e=Oi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Kt(){return Pe.lFrame.selectedIndex}function ur(e){Pe.lFrame.selectedIndex=e}function It(){const e=Pe.lFrame;return He(e.tView,e.selectedIndex)}function js(){Pe.lFrame.currentNamespace=no}function Bs(){Pe.lFrame.currentNamespace=null}function Lo(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:y}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=y&&(e.destroyHooks||(e.destroyHooks=[])).push(n,y)}}function Hr(e,t,n){Us(e,t,3,n)}function ao(e,t,n,r){(3&e[2])===n&&Us(e,t,n,r)}function Ni(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Us(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(Ua(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function Ua(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vr{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function jo(e,t,n){const r=h(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];Bo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function Vs(e){return 3===e||4===e||6===e}function Bo(e){return 64===e.charCodeAt(0)}function Uo(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||ji(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function ji(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bi(e){return-1!==e}function cr(e){return 32767&e}function vn(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ho=!0;function Vo(e){const t=Ho;return Ho=e,t}let $a=0;function $r(e,t){const n=Hi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Ui(r.data,e),Ui(t,null),Ui(r.blueprint,null));const o=$o(e,t),i=e.injectorIndex;if(Bi(o)){const s=cr(o),l=vn(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function Ui(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Hi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function $o(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function zr(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Un)&&(r=n[Un]),null==r&&(r=n[Un]=$a++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Gs(e,t,n){if(n&M.Optional)return e;U(t,"NodeInjector")}function Vi(e,t,n,r){if(n&M.Optional&&void 0===r&&(r=null),0==(n&(M.Self|M.Host))){const o=e[9],i=Y(void 0);try{return o?o.get(t,r,n&M.Optional):De(t,r,n&M.Optional)}finally{Y(i)}}return Gs(r,t,n)}function Ws(e,t,n,r=M.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Un)?e[Un]:void 0;return"number"==typeof t?t>=0?255&t:c:t}(n);if("function"==typeof i){if(!Os(t,e,r))return r&M.Host?Gs(o,n,r):Vi(t,n,r,o);try{const s=i(r);if(null!=s||r&M.Optional)return s;U(n)}finally{La()}}else if("number"==typeof i){let s=null,l=Hi(e,t),d=-1,m=r&M.Host?t[16][6]:null;for((-1===l||r&M.SkipSelf)&&(d=-1===l?$o(e,t):t[l+8],-1!==d&&w(r,!1)?(s=t[1],l=cr(d),t=vn(d,t)):l=-1);-1!==l;){const y=t[1];if(D(i,l,y.data)){const _=u(l,t,n,s,r,m);if(_!==Wa)return _}d=t[l+8],-1!==d&&w(r,t[1].data[l+8]===m)&&D(i,l,t)?(s=y,l=cr(d),t=vn(d,t)):l=-1}}}return Vi(t,n,r,o)}const Wa={};function c(){return new I(jt(),Q())}function u(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],y=a(l,s,n,null==r?xt(l)&&Ho:r!=s&&0!=(3&l.type),o&M.Host&&i===l);return null!==y?f(t,s,y,l):Wa}function a(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,y=i>>20,A=o?l+y:e.directiveEnd;for(let N=r?l:l+y;N<A;N++){const $=s[N];if(N<d&&n===$||N>=d&&$.type===n)return N}if(o){const N=s[d];if(N&&dn(N)&&N.type===n)return d}return null}function f(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof Vr}(o)){const s=o;s.resolving&&function(e,t){throw new Ee("200",`Circular dependency in DI detected for ${e}`)}(Qe(i[n]));const l=Vo(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?Y(s.injectImpl):null;Os(e,r,M.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=to(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&Y(d),Vo(l),s.resolving=!1,La()}}return o}function D(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function w(e,t){return!(e&M.Self||e&M.Host&&t)}class I{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Ws(this._tNode,this._lView,t,r,n)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $e(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Vs(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(jt(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ot="__parameters__";function sn(e,t,n){return me(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,m,y){const _=d.hasOwnProperty(ot)?d[ot]:Object.defineProperty(d,ot,{value:[]})[ot];for(;_.length<=y;)_.push(null);return(_[y]=_[y]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
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
       */const Wr=new ut("AnalyzeForEntryComponents");function Fn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Fn(r,t)):t!==e&&t.push(r)}return t}function dr(e,t){e.forEach(n=>Array.isArray(n)?dr(n,t):t(n))}function sc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ys(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function bn(e,t,n){let r=Go(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Ka(e,t){const n=Go(e,t);if(n>=0)return e[1|n]}function Go(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Wi={},Qa="__NG_DI_FLAG__",qs="ngTempTokenPath",Fg=/\n/gm,dc="__source",Lg=B({provide:String,useValue:B});let Yi;function fc(e){const t=Yi;return Yi=e,t}function kg(e,t=M.Default){if(void 0===Yi)throw new Error("inject() must be called from an injection context");return null===Yi?De(e,void 0,t):Yi.get(e,t&M.Optional?null:void 0,t)}function tn(e,t=M.Default){return(P||kg)(Z(e),t)}function Za(e){const t=[];for(let n=0;n<e.length;n++){const r=Z(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=M.Default;for(let s=0;s<r.length;s++){const l=r[s],d=jg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(tn(o,i))}else t.push(tn(r))}return t}function Ki(e,t){return e[Qa]=t,e.prototype[Qa]=t,e}function jg(e){return e[Qa]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qi=Ki(sn("Inject",e=>({token:e})),-1),lo=Ki(sn("Optional"),8),Wo=Ki(sn("SkipSelf"),4);
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
class Ec{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Yr(e){return e instanceof Ec?e.changingThisBreaksApplicationSecurity:e}
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
       */function iu(e){const t=function(){const e=Q();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Vt.URL,e)||"":function(e,t){const n=function(e){return e instanceof Ec&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Yr(e):function(e){return(e=String(e)).match(sm)||e.match(am)?e:"unsafe:"+e}(re(e))}const Rc="__ngContext__";function an(e,t){e[Rc]=t}function au(e){const t=function(e){return e[Rc]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function lu(e){return e.ngOriginalError}function Rm(e,...t){e.error(...t)}
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
const Lc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Ae))();function hr(e){return e instanceof Function?e():e}
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
var pr=(()=>((pr=pr||{})[pr.Important=1]="Important",pr[pr.DashCase=2]="DashCase",pr))();
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
function ns(e){const t=e[3];return on(t)?t[3]:t}function fu(e){return Hc(e[13])}function hu(e){return Hc(e[4])}function Hc(e){for(;null!==e&&!on(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qo(e,t,n,r,o){if(null!=r){let i,s=!1;on(r)?i=r:rn(r)&&(s=!0,r=r[0]);const l=k(r);0===e&&null!==n?null==o?Yc(t,n,l):co(t,n,l,o||null,!0):1===e&&null!==n?co(t,n,l,o||null,!0):2===e?function(e,t,n){const r=ta(e,t);r&&function(e,t,n,r){h(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==k(n)&&Qo(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];rs(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function gu(e,t,n){return h(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function $c(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,kr(o,-1)),n.splice(r,1)}function mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&$c(o,r),t>0&&(e[n-1][4]=r[4]);const i=Ys(e,10+t);!function(e,t){rs(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function zc(e,t){if(!(256&t[2])){const n=t[11];h(n)&&n.destroyNode&&rs(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yu(e[1],e);for(;t;){let n=null;if(rn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)rn(t)&&yu(t[1],t),t=t[3];null===t&&(t=e),rn(t)&&yu(t[1],t),n=t&&t[4]}t=n}}(t)}}function yu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Vr)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):k(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&h(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&on(t[3])){n!==t[3]&&$c(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function Gc(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===At.None||o===At.Emulated)return null}return Je(r,n)}(e,t.parent,n)}function co(e,t,n,r,o){h(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function Yc(e,t,n){h(e)?e.appendChild(t,n):t.appendChild(n)}function Kc(e,t,n,r,o){null!==r?co(e,t,n,r,o):Yc(e,t,n)}function ta(e,t){return h(e)?e.parentNode(t):t.parentNode}let Zc=function(e,t,n){return 40&e.type?Je(e,n):null};function na(e,t,n,r){const o=Gc(e,r,t),i=t[11],l=function(e,t,n){return Zc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Kc(i,o,n[d],l,!1);else Kc(i,o,n,l,!1)}function ra(e,t){if(null!==t){const n=t.type;if(3&n)return Je(t,e);if(4&n)return Du(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return ra(e,r);{const o=e[t.index];return on(o)?Du(-1,o):k(o)}}if(32&n)return du(t,e)()||k(e[t.index]);{const r=Xc(e,t);return null!==r?Array.isArray(r)?r[0]:ra(ns(e[16]),r):ra(e,t.next)}}return null}function Xc(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Du(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return ra(r,o)}return t[7]}function Cu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&an(k(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)Cu(e,t,n.child,r,o,i,!1),Qo(t,e,o,l,i);else if(32&d){const m=du(n,r);let y;for(;y=m();)Qo(t,e,o,y,i);Qo(t,e,o,l,i)}else 16&d?td(e,t,r,n,o,i):Qo(t,e,o,l,i);n=s?n.projectionNext:n.next}}function rs(e,t,n,r,o,i){Cu(n,r,e.firstChild,t,o,i,!1)}function td(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)Qo(t,e,o,d[m],i);else Cu(e,t,d,s[3],o,i,!0)}function nd(e,t,n){h(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Eu(e,t,n){h(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
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
       */const od="ng-template";function iy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==rd(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function id(e){return 4===e.type&&e.value!==od}function sy(e,t,n){return t===(4!==e.type||n?e.value:od)}function ay(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(Vs(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!sy(e,d,n)||""===d&&1===t.length){if(Qn(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!iy(e.attrs,m,n)){if(Qn(r))return!1;s=!0}continue}const _=uy(8&r?"class":d,o,id(e),n);if(-1===_){if(Qn(r))return!1;s=!0;continue}if(""!==m){let A;A=_>i?"":o[_+1].toLowerCase();const N=8&r?A:null;if(N&&-1!==rd(N,m,0)||2&r&&m!==A){if(Qn(r))return!1;s=!0}}}}else{if(!s&&!Qn(r)&&!Qn(d))return!1;if(s&&Qn(d))continue;s=!1,r=d|1&r}}return Qn(r)||s}function Qn(e){return 0==(1&e)}function uy(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function sd(e,t,n=!1){for(let r=0;r<t.length;r++)if(ay(e,t[r],n))return!0;return!1}function ad(e,t){return e?":not("+t.trim()+")":t}function hy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Qn(s)&&(t+=ad(i,o),o=""),r=s,i=i||!Qn(r);n++}return""!==o&&(t+=ad(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qe={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ud(e){ld(rt(),Q(),Kt()+e,Oo())}function ld(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&Hr(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ao(t,i,0,n)}ur(n)}
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
function oa(e,t){return e<<17|t<<2}function Zn(e){return e>>17&32767}function _u(e){return 2|e}function Ar(e){return(131068&e)>>2}function wu(e,t){return-131069&e|t<<2}function bu(e){return 1|e}function Cd(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Fo(o),s.contentQueries(2,t[i],i)}}}function os(e,t,n,r,o,i,s,l,d,m){const y=t.blueprint.slice();return y[0]=o,y[2]=140|r,Yn(y),y[3]=y[15]=e,y[8]=n,y[10]=s||e&&e[10],y[11]=l||e&&e[11],y[12]=d||e&&e[12]||null,y[9]=m||e&&e[9]||null,y[6]=i,y[16]=2==t.type?e[16]:y,y}function Zo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=Ro(),s=jr(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),Pe.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Pe.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return _n(i,!0),i}function Jo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function is(e,t,n){No(t);try{const r=e.viewQuery;null!==r&&Vu(1,r,n);const o=e.template;null!==o&&Ed(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Cd(e,t),e.staticViewQueries&&Vu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)qy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,so()}}function Xo(e,t,n,r){const o=t[2];if(256==(256&o))return;No(t);const i=Oo();try{Yn(t),function(e){Pe.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Ed(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&Hr(t,m,null)}else{const m=e.preOrderHooks;null!==m&&ao(t,m,0,null),Ni(t,0)}if(function(e){for(let t=fu(e);null!==t;t=hu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&kr(i,1),o[2]|=1024}}}(t),function(e){for(let t=fu(e);null!==t;t=hu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];yn(r)&&Xo(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Cd(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&Hr(t,m)}else{const m=e.contentHooks;null!==m&&ao(t,m,1),Ni(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)ur(~o);else{const i=o,s=n[++r],l=n[++r];Oa(s,i),l(2,t[i])}}}finally{ur(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Ky(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Vu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&Hr(t,m)}else{const m=e.viewHooks;null!==m&&ao(t,m,2),Ni(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,kr(t[3],-1))}finally{so()}}function Ay(e,t,n,r){const o=t[10],i=!Oo(),s=Rt(t);try{i&&!s&&o.begin&&o.begin(),s&&is(e,t,r),Xo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Ed(e,t,n,r,o){const i=Kt(),s=2&r;try{ur(-1),s&&t.length>20&&ld(e,t,20,Oo()),n(r,o)}finally{ur(i)}}function Fu(e,t,n){!oo()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||$r(n,t),an(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=dn(d);m&&$y(t,n,d);const y=f(t,e,l,n);an(y,t),null!==s&&zy(0,l-o,y,d,0,s),m&&(Ze(n.index,t)[8]=y)}}(e,t,n,Je(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=Pe.lFrame.currentDirectiveIndex;try{ur(s);for(let d=r;d<o;d++){const m=e.data[d],y=t[d];Ri(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&xd(m,y)}}finally{ur(-1),Ri(l)}}(e,t,n))}function Nu(e,t,n=Je){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function wd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=aa(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function aa(e,t,n,r,o,i,s,l,d,m){const y=20+r,_=y+o,A=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:qe);return n}(y,_),N="function"==typeof m?m():m;return A[1]={type:e,blueprint:A,template:n,queries:null,viewQuery:l,declTNode:t,data:A.slice().fill(null,y),bindingStartIndex:y,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:N,incompleteFirstPass:!1}}function Id(e,t,n,r){const o=Ld(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&kd(e).push(r,o.length-1))}function Sd(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Lu(e,t,n,r){let o=!1;if(oo()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];sd(n,s.selectors,!1)&&(o||(o=[]),zr($r(n,t),e,s.type),dn(s)?(Rd(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Pd(n,e.data.length,i.length);for(let y=0;y<i.length;y++){const _=i[y];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=Jo(e,t,i.length,null);for(let y=0;y<i.length;y++){const _=i[y];n.mergedAttrs=Uo(n.mergedAttrs,_.hostAttrs),Od(e,n,t,m,_),Vy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const A=_.type.prototype;!l&&(A.ngOnChanges||A.ngOnInit||A.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(A.ngOnChanges||A.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const y=o[m],_=y.inputs,A=null===i||id(t)?null:Gy(_,i);s.push(A),l=Sd(_,m,l),d=Sd(y.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Ee("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=Uo(n.mergedAttrs,n.attrs),o}function Ad(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function xd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Rd(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Vy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;dn(t)&&(n[""]=e)}}function Pd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Od(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Gn(o.type)),s=new Vr(i,dn(o),null);e.blueprint[r]=s,n[r]=s,Ad(e,t,0,r,Jo(e,n,o.hostVars,qe),o)}function $y(e,t,n){const r=Je(t,e),o=wd(n),i=e[10],s=ua(e,os(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function gr(e,t,n,r,o,i){const s=Je(e,t);!function(e,t,n,r,o,i,s){if(null==i)h(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?re(i):s(i,r||"",o);h(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function zy(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],y=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,y):n[y]=_}}}function Gy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Fd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Ky(e,t){const n=Ze(t,e);if(yn(n)){const r=n[1];80&n[2]?Xo(r,n,r.template,n[8]):n[5]>0&&ju(n)}}function ju(e){for(let r=fu(e);null!==r;r=hu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];Xo(s,i,s.template,i[8])}else i[5]>0&&ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Ze(n[r],e);yn(o)&&o[5]>0&&ju(o)}}function qy(e,t){const n=Ze(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),is(r,n,n[8])}function ua(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Bu(e){for(;e;){e[2]|=64;const t=ns(e);if(Pr(e)&&!t)return e;e=t}return null}function Hu(e,t,n){const r=t[10];r.begin&&r.begin();try{Xo(e,t,e.template,n)}catch(o){throw Bd(t,o),o}finally{r.end&&r.end()}}function Nd(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=au(n),o=r[1];Ay(o,r,o.template,n)}}(e[8])}function Vu(e,t,n){Fo(0),t(e,n)}const ev=(()=>Promise.resolve(null))();function Ld(e){return e[7]||(e[7]=[])}function kd(e){return e.cleanup||(e.cleanup=[])}function Bd(e,t){const n=e[9],r=n?n.get(ts,null):null;r&&r.handleError(t)}function Ud(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function xr(e,t,n){const r=dt(t,e);!function(e,t,n){h(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
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
       */let Gu;function Vd(){return void 0===Gu&&(Gu=new Hd),Gu}function $d(e,t=null,n=null,r){const o=zd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function zd(e,t=null,n=null,r){return new ov(e,n,t||Vd(),r)}class ov{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&dr(n,l=>this.processProvider(l,t,n)),dr([t],l=>this.processInjectorType(l,[],i)),this.records.set($u,ei(void 0,this));const s=this.records.get(zu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:ne(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Wi,r=M.Default){this.assertNotDestroyed();const o=fc(this),i=Y(void 0);try{if(!(r&M.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof ut)&&Dn(t);l=d&&this.injectableDefInScope(d)?ei(Wu(t),ss):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&M.Self?Vd():this.parent).get(t,n=r&M.Optional&&n===Wi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[qs]=s[qs]||[]).unshift(ne(t)),o)throw s;return function(e,t,n,r){const o=e[qs];throw t[dc]&&o.unshift(t[dc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=ne(t);if(Array.isArray(t))o=t.map(ne).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):ne(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Fg,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[qs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Y(i),fc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(ne(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=Z(t)))return!1;let o=Lt(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=Lt(i)),null==o)return!1;if(null!=o.imports&&!l){let y;r.push(s);try{dr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===y&&(y=[]),y.push(_))})}finally{}if(void 0!==y)for(let _=0;_<y.length;_++){const{ngModule:A,providers:N}=y[_];dr(N,$=>this.processProvider($,A,N||tt))}}this.injectorDefTypes.add(s);const d=Gn(s)||(()=>new s);this.records.set(s,ei(d,ss));const m=o.providers;if(null!=m&&!l){const y=t;dr(m,_=>this.processProvider(_,y,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=ti(t=Z(t))?t:Z(t&&t.provide);const i=(e=t,Wd(e)?ei(void 0,e.useValue):ei(function(e,t,n){let r;if(ti(e)){const o=Z(e);return Gn(o)||Wu(o)}if(Wd(e))r=()=>Z(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Za(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>tn(Z(e.useExisting));else{const o=Z(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return Gn(o)||Wu(o);r=()=>new o(...Za(e.deps))}return r}(e),ss));var e;if(ti(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=ei(void 0,ss,!0),s.factory=()=>Za(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===ss&&(n.value=rv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=Z(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Wu(e){const t=Dn(e),n=null!==t?t.factory:Gn(e);if(null!==n)return n;if(e instanceof ut)throw new Error(`Token ${ne(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${ne(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[lt]||e[jn]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function ei(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Wd(e){return null!==e&&"object"==typeof e&&Lg in e}function ti(e){return"function"==typeof e}let Nn=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return $d({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return $d({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Wi,e.NULL=new Hd,e.\u0275prov=wt({token:e,providedIn:"any",factory:()=>tn($u)}),e.__NG_ELEMENT_ID__=-1,e})();function Cv(e,t){Lo(au(e)[1],jt())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ca=null;function ni(){if(!ca){const e=Ae.Symbol;if(e&&e.iterator)ca=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ca=r)}}}return ca}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function as(e){return!!Qu(e)&&(Array.isArray(e)||!(e instanceof Map)&&ni()in e)}function Qu(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mr(e,t,n){return e[t]=n}function un(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function fo(e,t,n,r){const o=un(e,t,n);return un(e,t+1,r)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(e,t,n,r){const o=Q();return un(o,Ur(),t)&&(rt(),gr(It(),o,e,t,n,r)),Zu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mf(e,t,n,r,o,i,s,l){const d=Q(),m=rt(),y=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,y=Zo(t,e,4,s||null,fn(m,l));Lu(t,n,y,fn(m,d)),Lo(t,y);const _=y.tViews=aa(2,y,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,y),_.queries=t.queries.embeddedTView(y)),y}(y,m,d,t,n,r,o,i,s):m.data[y];_n(_,!1);const A=d[11].createComment("");na(m,d,A,_),an(A,d),ua(d,d[y]=Fd(A,d,A,_)),Ir(_)&&Fu(m,d,_),null!=s&&Nu(d,_,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yf(e){return vt(Pe.lFrame.contextLView,20+e)}
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
function ls(e,t=M.Default){const n=Q();return null===n?tn(e,t):Ws(jt(),n,Z(e),t)}function Tf(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n){const r=Q();return un(r,Ur(),t)&&function(e,t,n,r,o,i,s,l){const d=Je(t,n);let y,m=t.inputs;!l&&null!=m&&(y=m[r])?(Ud(e,n,y,r,o),xt(t)&&function(e,t){const n=Ze(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,h(i)?i.setProperty(d,r,o):Bo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(rt(),It(),r,e,t,r[11],n,!1),nl}function rl(e,t,n,r,o){const s=o?"class":"style";Ud(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(e,t,n,r){const o=Q(),i=rt(),s=20+e,l=o[11],d=o[s]=gu(l,t,Pe.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Zo(t,e,2,o,fn(l,i));return Lu(t,n,m,fn(l,s)),null!==m.attrs&&la(m,m.attrs,!1),null!==m.mergedAttrs&&la(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];_n(m,!0);const y=m.mergedAttrs;null!==y&&jo(l,d,y);const _=m.classes;null!==_&&Eu(l,d,_);const A=m.styles;null!==A&&nd(l,d,A),64!=(64&m.flags)&&na(i,o,d,m),0===Pe.lFrame.elementDepthCount&&an(d,o),Pe.lFrame.elementDepthCount++,Ir(m)&&(Fu(i,o,m),function(e,t,n){if(mo(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Nu(o,m)}function il(){let e=jt();jr()?Pe.lFrame.isParent=!1:(e=e.parent,_n(e,!1));const t=e;Pe.lFrame.elementDepthCount--;const n=rt();n.firstCreatePass&&(Lo(n,e),mo(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&rl(n,t,Q(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rl(n,t,Q(),t.stylesWithoutHost,!1)}function Af(e,t,n,r){ol(e,t,n,r),il()}
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
       */function al(e,t,n,r){const o=Q(),i=rt(),s=jt();return function(e,t,n,r,o,i,s,l){const d=Ir(r),y=e.firstCreatePass&&kd(e),_=t[8],A=Ld(t);let N=!0;if(3&r.type||l){const pe=Je(r,t),be=l?l(pe):pe,K=A.length,Oe=l?nt=>l(k(nt[r.index])):r.index;if(h(n)){let nt=null;if(!l&&d&&(nt=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==nt)(nt.__ngLastListenerFn__||nt).__ngNextListenerFn__=i,nt.__ngLastListenerFn__=i,N=!1;else{i=ul(r,t,_,i,!1);const pt=n.listen(be,o,i);A.push(i,pt),y&&y.push(o,Oe,K,K+1)}}else i=ul(r,t,_,i,!0),be.addEventListener(o,i,s),A.push(i),y&&y.push(o,Oe,K,s)}else i=ul(r,t,_,i,!1);const $=r.outputs;let ae;if(N&&null!==$&&(ae=$[o])){const pe=ae.length;if(pe)for(let be=0;be<pe;be+=2){const Sn=t[ae[be]][ae[be+1]].subscribe(i),go=A.length;A.push(i,Sn),y&&y.push(o,r.index,go,-(go+1))}}}(i,o,o[11],s,e,t,!!n,r),al}function Lf(e,t,n,r){try{return!1!==n(r)}catch(o){return Bd(e,o),!1}}function ul(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?Ze(e.index,t):t;0==(32&t[2])&&Bu(l);let d=Lf(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Lf(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
       */function kf(e=1){return function(e){return(Pe.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Pe.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yf(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?Zn(i):Ar(i),d=!1;for(;0!==l&&(!1===d||s);){const y=e[l+1];uD(e[l],t)&&(d=!0,e[l+1]=r?bu(y):_u(y)),l=r?Zn(y):Ar(y)}d&&(e[n+1]=r?_u(i):bu(i))}function uD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Go(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Kf(e){return e.substring(Yt.key,Yt.keyEnd)}function qf(e,t){const n=Yt.textEnd;return n===t?-1:(t=Yt.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Yt.key=t,n),hi(e,t,n))}function hi(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function nh(e){!function(e,t,n,r){const o=rt(),i=function(e){const t=Pe.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Kt()],s=rh(e,n);uh(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Pe.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=cs(n=cl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cl(o,e,t,n,r),null===i){let d=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Ar(r))return e[Zn(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=cl(null,e,t,d[1],r),d=cs(d,t.attrs,r),function(e,t,n,r){e[Zn(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=cs(r,e[i].hostAttrs,n);return cs(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=Zn(s),d=Ar(s);e[r]=n;let y,m=!1;if(Array.isArray(n)){const _=n;y=_[1],(null===y||Go(_,y)>0)&&(m=!0)}else y=n;if(o)if(0!==d){const A=Zn(e[l+1]);e[r+1]=oa(A,l),0!==A&&(e[A+1]=wu(e[A+1],r)),e[l+1]=function(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=oa(l,0),0!==l&&(e[l+1]=wu(e[l+1],r)),l=r;else e[r+1]=oa(d,0),0===l?l=r:e[d+1]=wu(e[d+1],r),d=r;m&&(e[r+1]=_u(e[r+1])),Yf(e,y,r,!0),Yf(e,y,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Go(i,t)>=0&&(n[r+1]=bu(n[r+1]))}(t,y,e,r,i),s=oa(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(o,null,i,r);const s=Q();if(n!==qe&&un(s,i,n)){const l=o.data[Kt()];if(uh(l,r)&&!rh(o,i)){let d=r?l.classesWithoutHost:l.stylesWithoutHost;null!==d&&(n=ge(d,n||"")),rl(o,l,s,n,r)}else!function(e,t,n,r,o,i,s,l){o===qe&&(o=tt);let d=0,m=0,y=0<o.length?o[0]:null,_=0<i.length?i[0]:null;for(;null!==y||null!==_;){const A=d<o.length?o[d+1]:void 0,N=m<i.length?i[m+1]:void 0;let ae,$=null;y===_?(d+=2,m+=2,A!==N&&($=_,ae=N)):null===_||null!==y&&y<_?(d+=2,$=y):(m+=2,$=_,ae=N),null!==$&&sh(e,t,n,r,$,ae,s,l),y=d<o.length?o[d]:null,_=m<i.length?i[m]:null}}(o,l,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return tt;const r=[],o=Yr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}(bn,vr,e,!0)}function vr(e,t){for(let n=function(e){return function(e){Yt.key=0,Yt.keyEnd=0,Yt.value=0,Yt.valueEnd=0,Yt.textEnd=e.length}(e),qf(e,hi(e,0,Yt.textEnd))}(t);n>=0;n=qf(t,n))bn(e,Kf(t),!0)}function rh(e,t){return t>=e.expandoStartIndex}function cl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=cs(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function cs(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),bn(e,s,!!n||t[++i]))}return void 0===e?null:e}function sh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,m=d[l+1];ha(function(e){return 1==(1&e)}(m)?ah(d,t,n,o,Ar(m),s):void 0)||(ha(i)||function(e){return 2==(2&e)}(m)&&(i=ah(d,null,n,o,l,s)),function(e,t,n,r,o){const i=h(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:pr.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=pr.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,l?"important":"")}}}(r,s,dt(Kt(),n),o,i))}function ah(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],m=Array.isArray(d),y=m?d[1]:d,_=null===y;let A=n[o+1];A===qe&&(A=_?tt:void 0);let N=_?Ka(A,r):y===r?A:void 0;if(m&&!ha(N)&&(N=Ka(d,r)),ha(N)&&(l=N,s))return l;const $=e[o+1];o=s?Zn($):Ar($)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Ka(d,r))}return l}function ha(e){return void 0!==e}function uh(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lh(e,t=""){const n=Q(),r=rt(),o=e+20,i=r.firstCreatePass?Zo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return h(e)?e.createText(t):e.createTextNode(t)}(n[11],t);na(r,n,s,i),_n(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dl(e){return pa("",e,""),dl}function pa(e,t,n){const r=Q(),o=function(e,t,n,r){return un(e,Ur(),n)?t+re(n)+r:qe}(r,e,t,n);return o!==qe&&xr(r,Kt(),o),pa}
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
const ho=void 0;var VD=["en",[["a","p"],["AM","PM"],ho],[["AM","PM"],ho,ho],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],ho,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],ho,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",ho,"{1} 'at' {0}",ho],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
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
       */(e);let n=xh(t);if(n)return n;const r=t.split("-")[0];if(n=xh(r),n)return n;if("en"===r)return VD;throw new Error(`Missing locale data for the locale "${e}".`)}function Ah(e){return fl(e)[je.PluralCase]}function xh(e){return e in pi||(pi[e]=Ae.ng&&Ae.ng.common&&Ae.ng.common.locales&&Ae.ng.common.locales[e]),pi[e]}var je=(()=>((je=je||{})[je.LocaleId=0]="LocaleId",je[je.DayPeriodsFormat=1]="DayPeriodsFormat",je[je.DayPeriodsStandalone=2]="DayPeriodsStandalone",je[je.DaysFormat=3]="DaysFormat",je[je.DaysStandalone=4]="DaysStandalone",je[je.MonthsFormat=5]="MonthsFormat",je[je.MonthsStandalone=6]="MonthsStandalone",je[je.Eras=7]="Eras",je[je.FirstDayOfWeek=8]="FirstDayOfWeek",je[je.WeekendRange=9]="WeekendRange",je[je.DateFormat=10]="DateFormat",je[je.TimeFormat=11]="TimeFormat",je[je.DateTimeFormat=12]="DateTimeFormat",je[je.NumberSymbols=13]="NumberSymbols",je[je.NumberFormats=14]="NumberFormats",je[je.CurrencyCode=15]="CurrencyCode",je[je.CurrencySymbol=16]="CurrencySymbol",je[je.CurrencyName=17]="CurrencyName",je[je.Currencies=18]="Currencies",je[je.Directionality=19]="Directionality",je[je.PluralCase=20]="PluralCase",je[je.ExtraData=21]="ExtraData",je))();const ga="en-US";
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
return e.NULL=new GC,e})();function WC(){return mi(jt(),Q())}function mi(e,t){return new ms(Je(e,t))}let ms=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=WC,e})();function YC(e){return e instanceof ms?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op{}let KC=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=Q(),n=Ze(jt().index,e);return function(e){return e[11]}(rn(n)?n:e)}
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
function Ca(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(k(i)),on(i))for(let l=10;l<i.length;l++){const d=i[l],m=d[1].firstChild;null!==m&&Ca(d[1],d,m,r)}const s=n.type;if(8&s)Ca(e,t,n.child,r);else if(32&s){const l=du(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=Xc(t,n);if(Array.isArray(l))r.push(...l);else{const d=ns(t[16]);Ca(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ys{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Ca(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(on(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),Ys(n,r))}this._attachedToViewContainer=!1}zc(this._lView[1],this._lView)}onDestroy(t){Id(this._lView[1],this._lView,null,t)}markForCheck(){Bu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){ar(!0);try{Hu(e,t,n)}finally{ar(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,rs(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class XC extends ys{constructor(t){super(t),this._view=t}detectChanges(){Nd(this._view)}checkNoChanges(){!function(e){ar(!0);try{Nd(e)}finally{ar(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class sp extends gs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=F(t);return new Cl(n,this.ngModule)}}function ap(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const tE=new ut("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Lc});class Cl extends np{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(hy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ap(this.componentDef.inputs)}get outputs(){return ap(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Dl,o);return i!==Dl||r===Dl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(op,E),l=i.get(ZC,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",y=r?function(e,t,n){if(h(e))return e.selectRootElement(t,n===At.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):gu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?no:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,A=function(e,t){return{components:[],scheduler:e||Lc,clean:ev,playerHandler:t||null,flags:0}}(),N=aa(0,null,null,1,0,null,null,null,null,null),$=os(null,N,A,_,null,null,s,d,l,i);let ae,pe;No($);try{const be=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Zo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(la(d,m,!0),null!==e&&(jo(o,e,m),null!==d.classes&&Eu(o,e,d.classes),null!==d.styles&&nd(o,e,d.styles)));const y=r.createRenderer(e,t),_=os(n,wd(t),null,t.onPush?64:16,n[20],d,r,y,i||null,null);return s.firstCreatePass&&(zr($r(d,n),s,t.type),Rd(s,d),Pd(d,n.length,1)),ua(n,_),n[20]=_}(y,this.componentDef,$,s,d);if(y)if(r)jo(d,y,["ng-version",JC.full]);else{const{attrs:K,classes:Oe}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Qn(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);K&&jo(d,y,K),Oe&&Oe.length>0&&Eu(d,y,Oe.join(" "))}if(pe=He(N,20),void 0!==n){const K=pe.projection=[];for(let Oe=0;Oe<this.ngContentSelectors.length;Oe++){const nt=n[Oe];K.push(null!=nt?Array.from(nt):null)}}ae=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=jt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Od(e,r,t,Jo(e,t,1,null),n));const o=f(t,e,r.directiveStart,r);an(o,t);const i=Je(r,t);return i&&an(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=jt();t.contentQueries(1,s,d.directiveStart)}const l=jt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(ur(l.index),Ad(n[1],l,0,l.directiveStart,l.directiveEnd,t),xd(t,s)),s}(be,this.componentDef,$,A,[Cv]),is(N,$,null)}finally{so()}return new oE(this.componentType,ae,mi(pe,$),$,pe)}}class oE extends
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
class yi{}class up{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vi=new Map;class dp extends yi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new sp(this);const r=O(t);this._bootstrapComponents=hr(r.bootstrap),this._r3Injector=zd(t,n,[{provide:yi,useValue:this},{provide:gs,useValue:this.componentFactoryResolver}],ne(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Nn.THROW_IF_NOT_FOUND,r=M.Default){return t===Nn||t===yi||t===$u?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class El extends up{constructor(t){super(),this.moduleType=t,null!==O(t)&&function(e){const t=new Set;!function n(r){const o=O(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${ne(t)} vs ${ne(t.name)}`)}(i,vi.get(i),r),vi.set(i,r));const s=hr(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new dp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fp(e,t,n,r){return pp(Q(),en(),e,t,n,r)}function hp(e,t,n,r,o,i){return function(e,t,n,r,o,i,s,l){const d=t+n;return function(e,t,n,r,o){const i=fo(e,t,n,r);return un(e,t+2,o)||i}(e,d,o,i,s)?mr(e,d+3,l?r.call(l,o,i,s):r(o,i,s)):vs(e,d+3)}(Q(),en(),e,t,n,r,o,i)}function vs(e,t){const n=e[t];return n===qe?void 0:n}function pp(e,t,n,r,o,i){const s=t+n;return un(e,s,o)?mr(e,s+1,i?r.call(i,o):r(o)):vs(e,s+1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Dp(e,t){const n=rt();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Gn(r.type)),s=Y(ls);try{const l=Vo(!1),d=i();return Vo(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,Q(),o,d),d}finally{Y(s)}}function Cp(e,t,n){const r=e+20,o=Q(),i=vt(o,r);return Ds(o,r)?pp(o,en(),t,i.transform,n,i):i.transform(n)}function Ep(e,t,n,r){const o=e+20,i=Q(),s=vt(i,o);return Ds(i,o)?function(e,t,n,r,o,i,s){const l=t+n;return fo(e,l,o,i)?mr(e,l+2,s?r.call(s,o,i):r(o,i)):vs(e,l+2)}(i,en(),t,s.transform,n,r,s):s.transform(n,r)}function Ds(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _l(e){return t=>{setTimeout(e,void 0,t)}}const Dr=class extends oe.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=_l(d),l&&(l=_l(l)),m&&(m=_l(m)));const y=super.subscribe({next:l,error:d,complete:m});return t instanceof Me.w0&&t.add(y),y}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CE(){return this._results[ni()]()}class wl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ni(),r=wl.prototype;r[n]||(r[n]=CE)}get changes(){return this._changes||(this._changes=new Dr)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Fn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Cs=(()=>{class e{}return e.__NG_ELEMENT_ID__=wE,e})();const EE=Cs,_E=class extends EE{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=os(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),is(n,r,t),new ys(r)}};function wE(){return Ea(jt(),Q())}function Ea(e,t){return 4&e.type?new _E(t,e,mi(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _a=(()=>{class e{}return e.__NG_ELEMENT_ID__=bE,e})();function bE(){return bp(jt(),Q())}const ME=_a,_p=class extends ME{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return mi(this._hostTNode,this._hostLView)}get injector(){return new I(this._hostTNode,this._hostLView)}get parentInjector(){const t=$o(this._hostTNode,this._hostLView);if(Bi(t)){const n=vn(t,this._hostLView),r=cr(t);return new I(n[1].data[r+8],n)}return new I(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=wp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new Cl(F(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(yi,null);_&&(i=_)}const y=d.create(m,o,void 0,i);return this.insert(y.hostView,l),y}insert(t,n){const r=t._lView,o=r[1];if(on(r[3])){const y=this.indexOf(t);if(-1!==y)this.detach(y);else{const _=r[3],A=new _p(_,_[6],_[3]);A.detach(A.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],sc(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=Du(i,s),d=r[11],m=ta(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,rs(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),sc(bl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=wp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(Ys(bl(this._lContainer),n),zc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&null!=Ys(bl(this._lContainer),n)?new ys(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function wp(e){return e[8]}function bl(e){return e[8]||(e[8]=[])}function bp(e,t){let n;const r=t[e.index];if(on(r))n=r;else{let o;if(8&e.type)o=k(r);else{const i=t[11];o=i.createComment("");const s=Je(e,t);co(i,ta(i,s),o,function(e,t){return h(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Fd(r,t,o,e),ua(t,n)}return new _p(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ml{constructor(t){this.queryList=t,this.matches=null}clone(){return new Ml(this.queryList)}setDirty(){this.queryList.setDirty()}}class Il{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Il(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Pp(t,n).matches&&this.queries[n].setDirty()}}class Mp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Sl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Sl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Tl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Tl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,TE(n,i)),this.matchTNodeWithReadOption(t,n,a(n,t,i,!1,!1))}else r===Cs?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,a(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ms||o===_a||o===Cs&&4&n.type)this.addMatch(n.index,-2);else{const i=a(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function TE(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function xE(e,t,n,r){return-1===n?function(e,t){return 11&e.type?mi(e,t):4&e.type?Ea(e,t):null}(t,e):-2===n?function(e,t,n){return n===ms?mi(t,e):n===Cs?Ea(t,e):n===_a?bp(t,e):void 0}(e,t,r):f(e,e[1],n,t)}function Ip(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:xE(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Al(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Ip(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],y=t[-d];for(let _=10;_<y.length;_++){const A=y[_];A[17]===A[3]&&Al(A[1],A,m,r)}if(null!==y[9]){const _=y[9];for(let A=0;A<_.length;A++){const N=_[A];Al(N[1],N,m,r)}}}}}return r}function Sp(e){const t=Q(),n=rt(),r=Ps();Fo(r+1);const o=Pp(n,r);if(e.dirty&&Rt(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Al(n,t,r,[]):Ip(n,t,o,r);e.reset(i,YC),e.notifyOnChanges()}return!0}return!1}function Tp(e,t,n,r){const o=rt();if(o.firstCreatePass){const i=jt();(function(e,t,n){null===e.queries&&(e.queries=new Sl),e.queries.track(new Tl(t,n))})(o,new Mp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new wl(4==(4&n));Id(e,t,r,r.destroy),null===t[19]&&(t[19]=new Il),t[19].queries.push(new Ml(r))}(o,Q(),n)}function Ap(){return e=Q(),t=Ps(),e[19].queries[t].queryList;var e,t}function Pp(e,t){return e.queries.getByIndex(t)}
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
       */const Nl=new ut("Application Initializer");let Ci=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Ma,this.reject=Ma,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(sl(i))n.push(i);else if(Of(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(tn(Nl,8))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Qp=new ut("AppId"),JE={provide:Qp,useFactory:function(){return`${Ll()}${Ll()}${Ll()}`},deps:[]};function Ll(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Zp=new ut("Platform Initializer"),Jp=new ut("Platform ID"),Xp=new ut("appBootstrapListener");
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
class XE{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kl=(()=>{class e{compileModuleSync(n){return new El(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=hr(O(n).declarations).reduce((s,l)=>{const d=F(l);return d&&s.push(new Cl(d)),s},[]);return new XE(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();
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
class In{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Dr(!1),this.onMicrotaskEmpty=new Dr(!1),this.onStable=new Dr(!1),this.onError=new Dr(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=Ae.requestAnimationFrame,t=Ae.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Ae,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ul(e),e.isCheckStableRunning=!0,Bl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ul(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return ng(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),rg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return ng(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),rg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ul(e),Bl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!In.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(In.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,r0,Ma,Ma);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const r0={};function Bl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ul(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function ng(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function rg(e){e._nesting--,Bl(e)}class a0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Dr,this.onMicrotaskEmpty=new Dr,this.onStable=new Dr,this.onError=new Dr}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let og=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{In.assertNotInAngularZone(),jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(tn(In))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})(),ig=(()=>{class e{constructor(){this._applications=new Map,Hl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Hl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();class u0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function l0(e){Hl=e}let tr,Hl=new u0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sg=new ut("AllowMultipleToken");class h0{constructor(t,n){this.name=t,this.token=n}}function ag(e,t,n=[]){const r=`Platform: ${t}`,o=new ut(r);return(i=[])=>{let s=ug();if(!s||s.injector.get(sg,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:zu,useValue:"platform"});!function(e){if(tr&&!tr.destroyed&&!tr.injector.get(sg,!1))throw new Ee("400","");tr=e.get(lg);const t=e.get(Zp,null);t&&t.forEach(n=>n())}(Nn.create({providers:l,name:r}))}return function(e){const t=ug();if(!t)throw new Ee("401","");return t}()}}function ug(){return tr&&!tr.destroyed?tr:null}let lg=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new a0:("zone.js"===e?void 0:e)||new In({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:In,useValue:l}];return l.run(()=>{const m=Nn.create({providers:d,parent:this.injector,name:n.moduleType.name}),y=n.create(m),_=y.injector.get(ts,null);if(!_)throw new Ee("402","");return l.runOutsideAngular(()=>{const A=l.onError.subscribe({next:N=>{_.handleError(N)}});y.onDestroy(()=>{Vl(this._modules,y),A.unsubscribe()})}),function(e,t,n){try{const r=n();return sl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const A=y.injector.get(Ci);return A.runInitializers(),A.donePromise.then(()=>(function(e){ft(e,"Expected localeId to be defined"),"string"==typeof e&&(Rh=e.toLowerCase().replace(/_/g,"-"))}(y.injector.get(Ia,ga)||ga),this._moduleDoBootstrap(y),y))})})}bootstrapModule(n,r=[]){const o=cg({},r);return function(e,t,n){const r=new El(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(_s);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Ee("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Ee("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(tn(Nn))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();function cg(e,t){return Array.isArray(t)?t.reduce(cg,e):Object.assign(Object.assign({},e),t)}let _s=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new ce.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new ce.y(m=>{let y;this._zone.runOutsideAngular(()=>{y=this._zone.onStable.subscribe(()=>{In.assertNotInAngularZone(),jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{In.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{y.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,te.yG)(e),n=(0,te._6)(e,1/0),r=e;return r.length?1===r.length?(0,R.Xf)(r[0]):(0,v.J)(n)((0,se.D)(r,t)):ee.E}(l,d.pipe((0,q.B)()))}bootstrap(n,r){if(!this._initStatus.done)throw new Ee("405","");let o;o=n instanceof np?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(yi),l=o.create(Nn.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(og,null),y=m&&l.injector.get(ig);return m&&y&&y.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Vl(this.components,l),y&&y.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new Ee("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Vl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Xp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(tn(In),tn(Nn),tn(ts),tn(gs),tn(Ci))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})();function Vl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
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
       */(jt(),Q(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Dg{constructor(){}supports(t){return as(t)}create(t){return new T0(t)}}const S0=(e,t)=>t;class T0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||S0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Eg(r,o,i)?n:r,l=Eg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,y=d-o;if(m!=y){for(let A=0;A<m;A++){const N=A<i.length?i[A]:i[A]=0,$=N+A;y<=$&&$<m&&(i[A]=N+1)}i[s.previousIndex]=y-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!as(t))throw new Error(`Error trying to diff '${ne(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ni()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new A0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Cg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Cg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class A0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class x0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Cg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new x0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Eg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class _g{constructor(){}supports(t){return t instanceof Map||Qu(t)}create(){return new R0}}class R0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Qu(t)))throw new Error(`Error trying to diff '${ne(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new P0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class P0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wg(){return new Ta([new Dg])}let Ta=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||wg()),deps:[[e,new Wo,new lo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=wt({token:e,providedIn:"root",factory:wg}),e})();function bg(){return new Aa([new _g])}let Aa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||bg()),deps:[[e,new Wo,new lo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=wt({token:e,providedIn:"root",factory:bg}),e})();const F0=[new _g],L0=new Ta([new Dg]),k0=new Aa(F0),j0=ag(null,"core",[{provide:Jp,useValue:"unknown"},{provide:lg,deps:[Nn]},{provide:ig,deps:[]},{provide:eg,deps:[]}]),$0=[{provide:_s,useClass:_s,deps:[In,Nn,ts,gs,Ci]},{provide:tE,deps:[In],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:Ci,useClass:Ci,deps:[[new lo,Nl]]},{provide:kl,useClass:kl,deps:[]},JE,{provide:Ta,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return L0},deps:[]},{provide:Aa,useFactory:function(){return k0},deps:[]},{provide:Ia,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||ga},deps:[[new qi(Ia),new lo,new Wo]]},{provide:tg,useValue:"USD"}];
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
       */let G0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(tn(_s))},e.\u0275mod=Hn({type:e}),e.\u0275inj=qt({providers:$0}),e})();
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
       */,783:(Ke,le,S)=>{S.d(le,{Bz:()=>$s,lC:()=>x});var v=S(587),R=S(579);class ee extends R.x{constructor(u){super(),this._value=u}get value(){return this.getValue()}_subscribe(u){const a=super._subscribe(u);return!a.closed&&u.next(this._value),a}getValue(){const{hasError:u,thrownError:a,_value:f}=this;if(u)throw a;return this._throwIfClosed(),f}next(u){super.next(this._value=u)}}var te=S(306);const{isArray:se}=Array,{getPrototypeOf:Fe,prototype:oe,keys:Me}=Object;var B=S(76),Ce=S(671),ne=S(4);const{isArray:ge}=Array;var Z=S(669),ye=S(403),Ee=S(672);function ve(...c){const u=(0,Z.yG)(c),a=(0,Z.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(se(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&Fe(c)===oe}(u)){const a=Me(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,B.D)([],u);const D=new te.y(function(c,u,a=Ce.y){return f=>{re(u,()=>{const{length:g}=c,D=new Array(g);let w=g,I=g;for(let L=0;L<g;L++)re(u,()=>{const ue=(0,B.D)(c[L],u);let $e=!1;ue.subscribe(new ye.Q(f,we=>{D[L]=we,$e||($e=!0,I--),I||f.next(a(D.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):Ce.y));return a?D.pipe(function(c){return(0,ne.U)(u=>function(c,u){return ge(u)?c(...u):c(u)}(c,u))}(a)):D}function re(c,u,a){c?(0,Ee.f)(a,c,u):u()}const _e=(0,S(888).d)(c=>function(){c(this),this.name="EmptyError",this.message="no elements in sequence"});var fe=S(189);function U(...c){return(0,fe.J)(1)((0,B.D)(c,(0,Z.yG)(c)))}var H=S(421);function W(c){return new te.y(u=>{(0,H.Xf)(c()).subscribe(u)})}var ie=S(727),V=S(482);function Re(){return(0,V.e)((c,u)=>{let a=null;c._refCount++;const f=new ye.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,D=a;a=null,g&&(!D||g===D)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class st extends te.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,V.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new ie.w0;const a=this.getSubject();u.add(this.source.subscribe(new ye.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=ie.w0.EMPTY)}return u}refCount(){return Re()(this)}}var Te=S(646),Be=S(515);function gt(c,u){return(0,V.e)((a,f)=>{let g=null,D=0,w=!1;const I=()=>w&&!g&&f.complete();a.subscribe(new ye.Q(f,L=>{null==g||g.unsubscribe();let ue=0;const $e=D++;(0,H.Xf)(c(L,$e)).subscribe(g=new ye.Q(f,we=>f.next(u?u(L,we,$e,ue++):we),()=>{g=null,I()}))},()=>{w=!0,I()}))})}function St(c,u,a,f,g){return(D,w)=>{let I=a,L=u,ue=0;D.subscribe(new ye.Q(w,$e=>{const we=ue++;L=I?c(L,$e,we):(I=!0,$e),f&&w.next(L)},g&&(()=>{I&&w.next(L),w.complete()})))}}function ln(c,u){return(0,V.e)(St(c,u,arguments.length>=2,!0))}function Pt(c){return(0,V.e)((u,a)=>{let D,f=null,g=!1;f=u.subscribe(new ye.Q(a,void 0,void 0,w=>{D=(0,H.Xf)(c(w,Pt(c)(u))),f?(f.unsubscribe(),f=null,D.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,D.subscribe(a))})}var ft=S(300);function Xe(c){return c<=0?()=>Be.E:(0,V.e)((u,a)=>{let f=[];u.subscribe(new ye.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}function Bt(c=kn){return(0,V.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>f?a.complete():a.error(c())))})}function kn(){return new _e}function nr(c){return(0,V.e)((u,a)=>{let f=!1;u.subscribe(new ye.Q(a,g=>{f=!0,a.next(g)},()=>{f||a.next(c),a.complete()}))})}var rr=S(698);function qt(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,ft.h)((g,D)=>c(g,D,f)):Ce.y,(0,rr.q)(1),a?nr(u):Bt(()=>new _e))}var Dn=S(576);function Tt(c,u,a){const f=(0,Dn.m)(c)||u||a?{next:c,error:u,complete:a}:c;return f?(0,V.e)((g,D)=>{var w;null===(w=f.subscribe)||void 0===w||w.call(f);let I=!0;g.subscribe(new ye.Q(D,L=>{var ue;null===(ue=f.next)||void 0===ue||ue.call(f,L),D.next(L)},()=>{var L;I=!1,null===(L=f.complete)||void 0===L||L.call(f),D.complete()},L=>{var ue;I=!1,null===(ue=f.error)||void 0===ue||ue.call(f,L),D.error(L)},()=>{var L,ue;I&&(null===(L=f.unsubscribe)||void 0===L||L.call(f)),null===(ue=f.finalize)||void 0===ue||ue.call(f)}))}):Ce.y}var Tn=S(351),Lt=S(577),lt=S(808);
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
       */class Ut{constructor(u,a){this.id=u,this.url=a}}class jn extends Ut{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class z extends Ut{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class M extends Ut{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class P extends Ut{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class X extends Ut{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Y extends Ut{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class De extends Ut{constructor(u,a,f,g,D){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=D}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class he extends Ut{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class me extends Ut{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ke{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Dt{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class kt{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class At{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class et{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ve{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ue="primary";class Ae{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Et(c){return new Ae(c)}const gn="ngNavigationCancelingError";function cn(c){const u=Error("NavigationCancelingError: "+c);return u[gn]=!0,u}function Cr(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let D=0;D<f.length;D++){const w=f[D],I=c[D];if(w.startsWith(":"))g[w.substring(1)]=I;else if(w!==I.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $t(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let D=0;D<a.length;D++)if(g=a[D],!Bn(c[g],u[g]))return!1;return!0}function Bn(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,D)=>f[D]===g)}return c===u}function Qt(c){return Array.prototype.concat.apply([],c)}function Un(c){return c.length>0?c[c.length-1]:null}function bt(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Zt(c){return(0,v.CqO)(c)?c:(0,v.QGY)(c)?(0,B.D)(Promise.resolve(c)):(0,Te.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rr={exact:function An(c,u,a){if(!Ge(c.segments,u.segments)||!T(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!An(c.children[f],u.children[f],a))return!1;return!0},subset:br},or={exact:function(c,u){return $t(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>Bn(c[a],u[a]))},ignored:()=>!0};function Hn(c,u,a){return Rr[a.paths](c.root,u.root,a.matrixParams)&&or[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function br(c,u,a){return F(c,u,u.segments,a)}function F(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!Ge(g,a)||u.hasChildren()||!T(g,a,f))}if(c.segments.length===a.length){if(!Ge(c.segments,a)||!T(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!br(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),D=a.slice(c.segments.length);return!!(Ge(c.segments,g)&&T(c.segments,g,f)&&c.children[Ue])&&F(c.children[Ue],u,D,f)}}function T(c,u,a){return u.every((f,g)=>or[a](c[g].parameters,f.parameters))}class b{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return Ei.serialize(this)}}class O{constructor(u,a){this.segments=u,this.children=a,this.parent=null,bt(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return zt(this)}}class G{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Et(this.parameters)),this._parameterMap}toString(){return yt(this)}}function Ge(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class mt{}class Mt{parse(u){const a=new Pn(u);return new b(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${de(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${at(a)}=${at(g)}`).join("&"):`${at(a)}=${at(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const Ei=new Mt;function zt(c){return c.segments.map(u=>yt(u)).join("/")}function de(c,u){if(!c.hasChildren())return zt(c);if(u){const a=c.children[Ue]?de(c.children[Ue],!1):"",f=[];return bt(c.children,(g,D)=>{D!==Ue&&f.push(`${D}:${de(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return bt(c.children,(f,g)=>{g===Ue&&(a=a.concat(u(f,g)))}),bt(c.children,(f,g)=>{g!==Ue&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===Ue?[de(c.children[Ue],!1)]:[`${g}:${de(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[Ue]?`${zt(c)}/${a[0]}`:`${zt(c)}/(${a.join("//")})`}}function We(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function at(c){return We(c).replace(/%3B/gi,";")}function Rn(c){return We(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _t(c){return decodeURIComponent(c)}function Cn(c){return _t(c.replace(/\+/g,"%20"))}function yt(c){return`${Rn(c.path)}${function(c){return Object.keys(c).map(u=>`;${Rn(u)}=${Rn(c[u])}`).join("")}(c.parameters)}`}const Ye=/^[^\/()?;=#]+/;function ir(c){const u=c.match(Ye);return u?u[0]:""}const $n=/^[^=?&#]+/,zn=/^[^&#]+/;class Pn{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new O([],{}):new O([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[Ue]=new O(u,a)),f}parseSegment(){const u=ir(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new G(_t(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=ir(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=ir(this.remaining);g&&(f=g,this.capture(f))}u[_t(a)]=_t(f)}parseQueryParam(u){const a=function(c){const u=c.match($n);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(zn);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=Cn(a),D=Cn(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(D)}else u[g]=D}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=ir(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let D;f.indexOf(":")>-1?(D=f.substr(0,f.indexOf(":")),this.capture(D),this.capture(":")):u&&(D=Ue);const w=this.parseChildren();a[D]=1===Object.keys(w).length?w[Ue]:new O([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class On{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Xt(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=Xt(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=ct(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return ct(u,this._root).map(a=>a.value)}}function Xt(c,u){if(c===u.value)return u;for(const a of u.children){const f=Xt(c,a);if(f)return f}return null}function ct(c,u){if(c===u.value)return[u];for(const a of u.children){const f=ct(c,a);if(f.length)return f.unshift(u),f}return[]}class mn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function sr(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class rn extends On{constructor(u,a){super(u),this.snapshot=a,Or(this,u)}toString(){return this.snapshot.toString()}}function on(c,u){const a=function(c,u){const w=new Pr([],{},{},"",{},Ue,u,null,c.root,-1,{});return new _i("",new mn(w,[]))}(c,u),f=new ee([new G("",{})]),g=new ee({}),D=new ee({}),w=new ee({}),I=new ee(""),L=new xt(f,g,w,I,D,Ue,u,a.root);return L.snapshot=a.root,new rn(new mn(L,[]),a)}class xt{constructor(u,a,f,g,D,w,I,L){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this._futureSnapshot=L}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,ne.U)(u=>Et(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,ne.U)(u=>Et(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Ir(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],D=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(D.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Pr{constructor(u,a,f,g,D,w,I,L,ue,$e,we){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=D,this.outlet=w,this.component=I,this.routeConfig=L,this._urlSegment=ue,this._lastPathIndex=$e,this._resolve=we}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Et(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Et(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class _i extends On{constructor(u,a){super(a),this.url=u,Or(this,a)}toString(){return yo(this._root)}}function Or(c,u){u.value._routerState=c,u.children.forEach(a=>Or(c,a))}function yo(c){const u=c.children.length>0?` { ${c.children.map(yo).join(", ")} } `:"";return`${c.value}${u}`}function vo(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,$t(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),$t(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!$t(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),$t(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function Do(c,u){const a=$t(c.params,u.params)&&function(c,u){return Ge(c,u)&&c.every((a,f)=>$t(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||Do(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fr(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Fr(c,f,g);return Fr(c,f)})}(c,u,a);return new mn(f,g)}{if(c.shouldAttach(u.value)){const D=c.retrieve(u.value);if(null!==D){const w=D.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(I=>Fr(c,I)),w}}const f=function(c){return new xt(new ee(c.url),new ee(c.params),new ee(c.queryParams),new ee(c.fragment),new ee(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(D=>Fr(c,D));return new mn(f,g)}}function Xr(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function Nr(c){return"object"==typeof c&&null!=c&&c.outlets}function Co(c,u,a,f,g){let D={};return f&&bt(f,(w,I)=>{D[I]=Array.isArray(w)?w.map(L=>`${L}`):`${w}`}),new b(a.root===c?u:bi(a.root,c,u),D,g)}function bi(c,u,a){const f={};return bt(c.children,(g,D)=>{f[D]=g===u?a:bi(g,u,a)}),new O(c.segments,f)}class Eo{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&Xr(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find(Nr);if(g&&g!==Un(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class _o{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function Mi(c,u,a){if(c||(c=new O([],{})),0===c.segments.length&&c.hasChildren())return Mo(c,u,a);const f=function(c,u,a){let f=0,g=u;const D={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return D;const w=c.segments[g],I=a[f];if(Nr(I))break;const L=`${I}`,ue=f<a.length-1?a[f+1]:null;if(g>0&&void 0===L)break;if(L&&ue&&"object"==typeof ue&&void 0===ue.outlets){if(!Io(L,ue,w))return D;f+=2}else{if(!Io(L,{},w))return D;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const D=new O(c.segments.slice(0,f.pathIndex),{});return D.children[Ue]=new O(c.segments.slice(f.pathIndex),c.children),Mo(D,0,g)}return f.match&&0===g.length?new O(c.segments,{}):f.match&&!c.hasChildren()?Lr(c,u,a):f.match?Mo(c,0,g):Lr(c,u,a)}function Mo(c,u,a){if(0===a.length)return new O(c.segments,{});{const f=function(c){return Nr(c[0])?c[0].outlets:{[Ue]:c}}(a),g={};return bt(f,(D,w)=>{"string"==typeof D&&(D=[D]),null!==D&&(g[w]=Mi(c.children[w],u,D))}),bt(c.children,(D,w)=>{void 0===f[w]&&(g[w]=D)}),new O(c.segments,g)}}function Lr(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const D=a[g];if(Nr(D)){const L=eo(D.outlets);return new O(f,L)}if(0===g&&Xr(a[0])){f.push(new G(c.segments[u].path,to(a[0]))),g++;continue}const w=Nr(D)?D.outlets[Ue]:`${D}`,I=g<a.length-1?a[g+1]:null;w&&I&&Xr(I)?(f.push(new G(w,to(I))),g+=2):(f.push(new G(w,{})),g++)}return new O(f,{})}function eo(c){const u={};return bt(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=Lr(new O([],{}),0,a))}),u}function to(c){const u={};return bt(c,(a,f)=>u[f]=`${a}`),u}function Io(c,u,a){return c==a.path&&$t(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ii{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),vo(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=sr(a);u.children.forEach(D=>{const w=D.value.outlet;this.deactivateRoutes(D,g[w],f),delete g[w]}),bt(g,(D,w)=>{this.deactivateRouteAndItsChildren(D,f)})}deactivateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(g===D)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else D&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=sr(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);if(f&&f.outlet){const w=f.outlet.detach(),I=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:I})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,D=sr(u);for(const w of Object.keys(D))this.deactivateRouteAndItsChildren(D[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=sr(a);u.children.forEach(D=>{this.activateRoutes(D,g[D.value.outlet],f),this.forwardEvent(new et(D.value.snapshot))}),u.children.length&&this.forwardEvent(new At(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,D=a?a.value:null;if(vo(g),g===D)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const I=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(I.contexts),w.attachRef=I.componentRef,w.route=I.route.value,w.outlet&&w.outlet.attach(I.componentRef,I.route.value),vo(I.route.value),this.activateChildRoutes(u,null,w.children)}else{const I=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(g.snapshot),L=I?I.module.componentFactoryResolver:null;w.attachRef=null,w.route=g,w.resolver=L,w.outlet&&w.outlet.activateWith(g,L),this.activateChildRoutes(u,null,w.children)}}else this.activateChildRoutes(u,null,f)}}class So{constructor(u,a){this.routes=u,this.module=a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function En(c){return"function"==typeof c}function Ft(c){return c instanceof b}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const p=Symbol("INITIAL_VALUE");function C(){return gt(c=>ve(c.map(u=>u.pipe((0,rr.q)(1),function(...c){const u=(0,Z.yG)(c);return(0,V.e)((a,f)=>{(u?U(c,a,u):U(c,a)).subscribe(f)})}(p)))).pipe(ln((u,a)=>{let f=!1;return a.reduce((g,D,w)=>g!==p?g:(D===p&&(f=!0),f||!1!==D&&w!==a.length-1&&!Ft(D)?g:D),u)},p),(0,ft.h)(u=>u!==p),(0,ne.U)(u=>Ft(u)?u:!0===u),(0,rr.q)(1)))}
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
       */let x=(()=>{class c{constructor(a,f,g,D,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new v.vpe,this.deactivateEvents=new v.vpe,this.attachEvents=new v.vpe,this.detachEvents=new v.vpe,this.name=D||Ue,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),I=this.parentContexts.getOrCreateContext(this.name).children,L=new k(a,I,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,L),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(v.Y36(E),v.Y36(v.s_b),v.Y36(v._Vd),v.$8M("name"),v.Y36(v.sBO))},c.\u0275dir=v.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class k{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===xt?this.route:u===E?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let J=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=v.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&v._UZ(0,"router-outlet")},directives:[x],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Se(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];dt(f,Je(u,f))}}function dt(c,u){c.children&&Se(c.children,u)}function Je(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function ht(c){const u=c.children&&c.children.map(ht),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==Ue&&(a.component=J),a}function He(c){return c.outlet||Ue}function vt(c,u){const a=c.filter(f=>He(f)===u);return a.push(...c.filter(f=>He(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Ze={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Rt(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},Ze):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const D=(u.matcher||Cr)(a,c,u);if(!D)return Object.assign({},Ze);const w={};bt(D.posParams,(L,ue)=>{w[ue]=L.path});const I=D.consumed.length>0?Object.assign(Object.assign({},w),D.consumed[D.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:D.consumed,lastChild:D.consumed.length,parameters:I,positionalParamSegments:null!==(f=D.posParams)&&void 0!==f?f:{}}}function yn(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>Pe(c,u,f)&&He(f)!==Ue)}(c,a,f)){const w=new O(u,function(c,u,a,f){const g={};g[Ue]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const D of a)if(""===D.path&&He(D)!==Ue){const w=new O([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[He(D)]=w}return g}(c,u,f,new O(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>Pe(c,u,f))}(c,a,f)){const w=new O(c.segments,function(c,u,a,f,g,D){const w={};for(const I of f)if(Pe(c,a,I)&&!g[He(I)]){const L=new O([],{});L._sourceSegment=c,L._segmentIndexShift="legacy"===D?c.segments.length:u.length,w[He(I)]=L}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const D=new O(c.segments,c.children);return D._sourceSegment=c,D._segmentIndexShift=u.length,{segmentGroup:D,slicedSegments:a}}function Pe(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function xo(c,u,a,f){return!!(He(c)===f||f!==Ue&&Pe(u,a,c))&&("**"===c.path||Rt(u,c,a).matched)}function Ts(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ro{constructor(u){this.segmentGroup=u||null}}class As{constructor(u){this.urlTree=u}}function oo(c){return new te.y(u=>u.error(new ro(c)))}function xs(c){return new te.y(u=>u.error(new As(c)))}function xa(c){return new te.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class Ra{constructor(u,a,f,g,D){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=D,this.allowRedirects=!0,this.ngModule=u.get(v.h0i)}apply(){const u=yn(this.urlTree.root,[],[],this.config).segmentGroup,a=new O(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,Ue).pipe((0,ne.U)(D=>this.createUrlTree(Ro(D),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Pt(D=>{if(D instanceof As)return this.allowRedirects=!1,this.match(D.urlTree);throw D instanceof ro?this.noMatchError(D):D}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,Ue).pipe((0,ne.U)(g=>this.createUrlTree(Ro(g),u.queryParams,u.fragment))).pipe(Pt(g=>{throw g instanceof ro?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new O([],{[Ue]:u}):u;return new b(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,ne.U)(D=>new O([],D))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const D of Object.keys(f.children))"primary"===D?g.unshift(D):g.push(D);return(0,B.D)(g).pipe((0,Tn.b)(D=>{const w=f.children[D],I=vt(a,D);return this.expandSegmentGroup(u,I,w,D).pipe((0,ne.U)(L=>({segment:L,outlet:D})))}),ln((D,w)=>(D[w.outlet]=w.segment,D),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,ft.h)((g,D)=>c(g,D,f)):Ce.y,Xe(1),a?nr(u):Bt(()=>new _e))}())}expandSegment(u,a,f,g,D,w){return(0,B.D)(f).pipe((0,Tn.b)(I=>this.expandSegmentAgainstRoute(u,a,f,I,g,D,w).pipe(Pt(ue=>{if(ue instanceof ro)return(0,Te.of)(null);throw ue}))),qt(I=>!!I),Pt((I,L)=>{if(I instanceof _e||"EmptyError"===I.name){if(Ts(a,g,D))return(0,Te.of)(new O([],{}));throw new ro(a)}throw I}))}expandSegmentAgainstRoute(u,a,f,g,D,w,I){return xo(g,a,D,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,D,w):I&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w):oo(a):oo(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const D=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?xs(D):this.lineralizeSegments(f,D).pipe((0,Lt.z)(w=>{const I=new O(w,{});return this.expandSegment(u,I,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,D,w){const{matched:I,consumedSegments:L,lastChild:ue,positionalParamSegments:$e}=Rt(a,g,D);if(!I)return oo(a);const we=this.applyRedirectCommands(L,g.redirectTo,$e);return g.redirectTo.startsWith("/")?xs(we):this.lineralizeSegments(g,we).pipe((0,Lt.z)(ot=>this.expandSegment(u,a,f,ot.concat(D.slice(ue)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,D){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,Te.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,ne.U)(ot=>(f._loadedConfig=ot,new O(g,{})))):(0,Te.of)(new O(g,{}));const{matched:w,consumedSegments:I,lastChild:L}=Rt(a,f,g);if(!w)return oo(a);const ue=g.slice(L);return this.getChildConfig(u,f,g).pipe((0,Lt.z)(we=>{const ot=we.module,it=we.routes,{segmentGroup:Gr,slicedSegments:wn}=yn(a,I,ue,it),sn=new O(Gr.segments,Gr.children);if(0===wn.length&&sn.hasChildren())return this.expandChildren(ot,it,sn).pipe((0,ne.U)(Wr=>new O(I,Wr)));if(0===it.length&&0===wn.length)return(0,Te.of)(new O(I,{}));const Tr=He(f)===D;return this.expandSegment(ot,sn,it,wn,Tr?Ue:D,!0).pipe((0,ne.U)(ut=>new O(I.concat(ut.segments),ut.children)))}))}getChildConfig(u,a,f){return a.children?(0,Te.of)(new So(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,Te.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,Lt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,ne.U)(D=>(a._loadedConfig=D,D))):(c=a,new te.y(u=>u.error(cn(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,Te.of)(new So([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,Te.of)(!0);const D=g.map(w=>{const I=u.get(w);let L;if((c=I)&&En(c.canLoad))L=I.canLoad(a,f);else{if(!En(I))throw new Error("Invalid CanLoad guard");L=I(a,f)}var c;return Zt(L)});return(0,Te.of)(D).pipe(C(),Tt(w=>{if(!Ft(w))return;const I=cn(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw I.url=w,I}),(0,ne.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,Te.of)(f);if(g.numberOfChildren>1||!g.children[Ue])return xa(u.redirectTo);g=g.children[Ue]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const D=this.createSegmentGroup(u,a.root,f,g);return new b(D,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return bt(u,(g,D)=>{if("string"==typeof g&&g.startsWith(":")){const I=g.substring(1);f[D]=a[I]}else f[D]=g}),f}createSegmentGroup(u,a,f,g){const D=this.createSegments(u,a.segments,f,g);let w={};return bt(a.children,(I,L)=>{w[L]=this.createSegmentGroup(u,I,f,g)}),new O(D,w)}createSegments(u,a,f,g){return a.map(D=>D.path.startsWith(":")?this.findPosParam(u,D,g):this.findOrReturn(D,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function Ro(c){const u={};for(const f of Object.keys(c.children)){const D=Ro(c.children[f]);(D.segments.length>0||D.hasChildren())&&(u[f]=D)}return function(c){if(1===c.numberOfChildren&&c.children[Ue]){const u=c.children[Ue];return new O(c.segments.concat(u.segments),u.children)}return c}(new O(c.segments,u))}
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
class _n{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class jr{constructor(u,a){this.component=u,this.route=a}}function xi(c,u,a){const f=c._root;return ar(f,u?u._root:null,a,[f.value])}function Po(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function ar(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=sr(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const D=c.value,w=u?u.value:null,I=a?a.getContext(c.value.outlet):null;if(w&&D.routeConfig===w.routeConfig){const L=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!Ge(c.url,u.url);case"pathParamsOrQueryParamsChange":return!Ge(c.url,u.url)||!$t(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Do(c,u)||!$t(c.queryParams,u.queryParams);default:return!Do(c,u)}}(w,D,D.routeConfig.runGuardsAndResolvers);L?g.canActivateChecks.push(new _n(f)):(D.data=w.data,D._resolvedData=w._resolvedData),ar(c,u,D.component?I?I.children:null:a,f,g),L&&I&&I.outlet&&I.outlet.isActivated&&g.canDeactivateChecks.push(new jr(I.outlet.component,w))}else w&&Br(u,I,g),g.canActivateChecks.push(new _n(f)),ar(c,null,D.component?I?I.children:null:a,f,g)})(w,D[w.value.outlet],a,f.concat([w.value]),g),delete D[w.value.outlet]}),bt(D,(w,I)=>Br(w,a.getContext(I),g)),g}function Br(c,u,a){const f=sr(c),g=c.value;bt(f,(D,w)=>{Br(D,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new jr(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
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
class Ps{}function Fo(c){return new te.y(u=>u.error(c))}class Os{constructor(u,a,f,g,D,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=D,this.relativeLinkResolution=w}recognize(){const u=yn(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,Ue);if(null===a)return null;const f=new Pr([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},Ue,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new mn(f,a),D=new _i(this.url,g);return this.inheritParamsAndData(D._root),D}inheritParamsAndData(u){const a=u.value,f=Ir(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const D of Object.keys(a.children)){const w=a.children[D],I=vt(u,D),L=this.processSegmentGroup(I,w,D);if(null===L)return null;f.push(...L)}const g=Oi(f);return g.sort((u,a)=>u.value.outlet===Ue?-1:a.value.outlet===Ue?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const D of u){const w=this.processSegmentAgainstRoute(D,a,f,g);if(null!==w)return w}return Ts(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!xo(u,a,f,g))return null;let D,w=[],I=[];if("**"===u.path){const it=f.length>0?Un(f).parameters:{};D=new Pr(f,it,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,ks(u),He(u),u.component,u,so(a),Ls(a)+f.length,Kt(u))}else{const it=Rt(a,u,f);if(!it.matched)return null;w=it.consumedSegments,I=f.slice(it.lastChild),D=new Pr(w,it.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,ks(u),He(u),u.component,u,so(a),Ls(a)+w.length,Kt(u))}const L=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:ue,slicedSegments:$e}=yn(a,w,I,L.filter(it=>void 0===it.redirectTo),this.relativeLinkResolution);var c;if(0===$e.length&&ue.hasChildren()){const it=this.processChildren(L,ue);return null===it?null:[new mn(D,it)]}if(0===L.length&&0===$e.length)return[new mn(D,[])];const we=He(u)===g,ot=this.processSegment(L,ue,$e,we?Ue:g);return null===ot?null:[new mn(D,ot)]}}function Ns(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function Oi(c){const u=[],a=new Set;for(const f of c){if(!Ns(f)){u.push(f);continue}const g=u.find(D=>f.value.routeConfig===D.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=Oi(f.children);u.push(new mn(f.value,g))}return u.filter(f=>!a.has(f))}function so(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Ls(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function ks(c){return c.data||{}}function Kt(c){return c.resolve||{}}
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
function Fi(c){return gt(u=>{const a=c(u);return a?(0,B.D)(a).pipe((0,ne.U)(()=>u)):(0,Te.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lo extends class{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Hr=new v.OlP("ROUTES");class ao{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,ne.U)(D=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=D.create(u);return new So(Qt(w.injector.get(Hr,void 0,v.XFs.Self|v.XFs.Optional)).map(ht),w)}),Pt(D=>{throw a._loader$=void 0,D}));return a._loader$=new st(g,()=>new R.x).pipe(Re()),a._loader$}loadModuleFactory(u){return Zt(u()).pipe((0,Lt.z)(a=>a instanceof v.YKP?(0,Te.of)(a):(0,B.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Us{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Ua(c){throw c}function lr(c,u,a){return u.parse("/")}function Vr(c,u){return(0,Te.of)(null)}const Ha={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Va={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Gt=(()=>{class c{constructor(a,f,g,D,w,I,L){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=D,this.config=L,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new R.x,this.errorHandler=Ua,this.malformedUriErrorHandler=lr,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Vr,afterPreactivation:Vr},this.urlHandlingStrategy=new Us,this.routeReuseStrategy=new Lo,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(v.h0i),this.console=w.get(v.c2e);const we=w.get(v.R0b);this.isNgZoneEnabled=we instanceof v.R0b&&v.R0b.isInAngularZone(),this.resetConfig(L),this.currentUrlTree=new b(new O([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new ao(w,I,ot=>this.triggerEvent(new ke(ot)),ot=>this.triggerEvent(new Dt(ot))),this.routerState=on(this.currentUrlTree,this.rootComponentType),this.transitions=new ee({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,ft.h)(g=>0!==g.id),(0,ne.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),gt(g=>{let D=!1,w=!1;return(0,Te.of)(g).pipe(Tt(I=>{this.currentNavigation={id:I.id,initialUrl:I.currentRawUrl,extractedUrl:I.extractedUrl,trigger:I.source,extras:I.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),gt(I=>{const L=this.browserUrlTree.toString(),ue=!this.navigated||I.extractedUrl.toString()!==L||L!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ue)&&this.urlHandlingStrategy.shouldProcessUrl(I.rawUrl))return ko(I.source)&&(this.browserUrlTree=I.extractedUrl),(0,Te.of)(I).pipe(gt(we=>{const ot=this.transitions.getValue();return f.next(new jn(we.id,this.serializeUrl(we.extractedUrl),we.source,we.restoredState)),ot!==this.transitions.getValue()?Be.E:Promise.resolve(we)}),function(c,u,a,f){return gt(g=>function(c,u,a,f,g){return new Ra(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,ne.U)(D=>Object.assign(Object.assign({},g),{urlAfterRedirects:D}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Tt(we=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:we.urlAfterRedirects})}),function(c,u,a,f,g){return(0,Lt.z)(D=>function(c,u,a,f,g="emptyOnly",D="legacy"){try{const w=new Os(c,u,a,f,g,D).recognize();return null===w?Fo(new Ps):(0,Te.of)(w)}catch(w){return Fo(w)}}(c,u,D.urlAfterRedirects,a(D.urlAfterRedirects),f,g).pipe((0,ne.U)(w=>Object.assign(Object.assign({},D),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,we=>this.serializeUrl(we),this.paramsInheritanceStrategy,this.relativeLinkResolution),Tt(we=>{if("eager"===this.urlUpdateStrategy){if(!we.extras.skipLocationChange){const it=this.urlHandlingStrategy.merge(we.urlAfterRedirects,we.rawUrl);this.setBrowserUrl(it,we)}this.browserUrlTree=we.urlAfterRedirects}const ot=new X(we.id,this.serializeUrl(we.extractedUrl),this.serializeUrl(we.urlAfterRedirects),we.targetSnapshot);f.next(ot)}));if(ue&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:ot,extractedUrl:it,source:Gr,restoredState:wn,extras:sn}=I,Tr=new jn(ot,this.serializeUrl(it),Gr,wn);f.next(Tr);const zo=on(it,this.rootComponentType).snapshot;return(0,Te.of)(Object.assign(Object.assign({},I),{targetSnapshot:zo,urlAfterRedirects:it,extras:Object.assign(Object.assign({},sn),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=I.rawUrl,I.resolve(null),Be.E}),Fi(I=>{const{targetSnapshot:L,id:ue,extractedUrl:$e,rawUrl:we,extras:{skipLocationChange:ot,replaceUrl:it}}=I;return this.hooks.beforePreactivation(L,{navigationId:ue,appliedUrlTree:$e,rawUrlTree:we,skipLocationChange:!!ot,replaceUrl:!!it})}),Tt(I=>{const L=new Y(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot);this.triggerEvent(L)}),(0,ne.U)(I=>Object.assign(Object.assign({},I),{guards:xi(I.targetSnapshot,I.currentSnapshot,this.rootContexts)})),function(c,u){return(0,Lt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:D,canDeactivateChecks:w}}=a;return 0===w.length&&0===D.length?(0,Te.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,B.D)(c).pipe((0,Lt.z)(g=>function(c,u,a,f,g){const D=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!D||0===D.length)return(0,Te.of)(!0);const w=D.map(I=>{const L=Po(I,u,g);let ue;if(function(c){return c&&En(c.canDeactivate)}(L))ue=Zt(L.canDeactivate(c,u,a,f));else{if(!En(L))throw new Error("Invalid CanDeactivate guard");ue=Zt(L(c,u,a,f))}return ue.pipe(qt())});return(0,Te.of)(w).pipe(C())}(g.component,g.route,a,u,f)),qt(g=>!0!==g,!0))}(w,f,g,c).pipe((0,Lt.z)(I=>I&&function(c){return"boolean"==typeof c}(I)?function(c,u,a,f){return(0,B.D)(u).pipe((0,Tn.b)(g=>U(function(c,u){return null!==c&&u&&u(new kt(c)),(0,Te.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new Ct(c)),(0,Te.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],D=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>W(()=>{const I=w.guards.map(L=>{const ue=Po(L,w.node,a);let $e;if(function(c){return c&&En(c.canActivateChild)}(ue))$e=Zt(ue.canActivateChild(f,c));else{if(!En(ue))throw new Error("Invalid CanActivateChild guard");$e=Zt(ue(f,c))}return $e.pipe(qt())});return(0,Te.of)(I).pipe(C())}));return(0,Te.of)(D).pipe(C())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,Te.of)(!0);const g=f.map(D=>W(()=>{const w=Po(D,u,a);let I;if(function(c){return c&&En(c.canActivate)}(w))I=Zt(w.canActivate(u,c));else{if(!En(w))throw new Error("Invalid CanActivate guard");I=Zt(w(u,c))}return I.pipe(qt())}));return(0,Te.of)(g).pipe(C())}(c,g.route,a))),qt(g=>!0!==g,!0))}(f,D,c,u):(0,Te.of)(I)),(0,ne.U)(I=>Object.assign(Object.assign({},a),{guardsResult:I})))})}(this.ngModule.injector,I=>this.triggerEvent(I)),Tt(I=>{if(Ft(I.guardsResult)){const ue=cn(`Redirecting to "${this.serializeUrl(I.guardsResult)}"`);throw ue.url=I.guardsResult,ue}const L=new De(I.id,this.serializeUrl(I.extractedUrl),this.serializeUrl(I.urlAfterRedirects),I.targetSnapshot,!!I.guardsResult);this.triggerEvent(L)}),(0,ft.h)(I=>!!I.guardsResult||(this.restoreHistory(I),this.cancelNavigationTransition(I,""),!1)),Fi(I=>{if(I.guards.canActivateChecks.length)return(0,Te.of)(I).pipe(Tt(L=>{const ue=new he(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(ue)}),gt(L=>{let ue=!1;return(0,Te.of)(L).pipe(function(c,u){return(0,Lt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,Te.of)(a);let D=0;return(0,B.D)(g).pipe((0,Tn.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,Te.of)({});const D={};return(0,B.D)(g).pipe((0,Lt.z)(w=>function(c,u,a,f){const g=Po(c,u,f);return Zt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe(Tt(I=>{D[w]=I}))),Xe(1),(0,Lt.z)(()=>Object.keys(D).length===g.length?(0,Te.of)(D):Be.E))}(c._resolve,c,u,f).pipe((0,ne.U)(D=>(c._resolvedData=D,c.data=Object.assign(Object.assign({},c.data),Ir(c,a).resolve),null)))}(w.route,f,c,u)),Tt(()=>D++),Xe(1),(0,Lt.z)(w=>D===g.length?(0,Te.of)(a):Be.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Tt({next:()=>ue=!0,complete:()=>{ue||(this.restoreHistory(L),this.cancelNavigationTransition(L,"At least one route resolver didn't emit any value."))}}))}),Tt(L=>{const ue=new me(L.id,this.serializeUrl(L.extractedUrl),this.serializeUrl(L.urlAfterRedirects),L.targetSnapshot);this.triggerEvent(ue)}))}),Fi(I=>{const{targetSnapshot:L,id:ue,extractedUrl:$e,rawUrl:we,extras:{skipLocationChange:ot,replaceUrl:it}}=I;return this.hooks.afterPreactivation(L,{navigationId:ue,appliedUrlTree:$e,rawUrlTree:we,skipLocationChange:!!ot,replaceUrl:!!it})}),(0,ne.U)(I=>{const L=function(c,u,a){const f=Fr(c,u._root,a?a._root:void 0);return new rn(f,u)}(this.routeReuseStrategy,I.targetSnapshot,I.currentRouterState);return Object.assign(Object.assign({},I),{targetRouterState:L})}),Tt(I=>{this.currentUrlTree=I.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(I.urlAfterRedirects,I.rawUrl),this.routerState=I.targetRouterState,"deferred"===this.urlUpdateStrategy&&(I.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,I),this.browserUrlTree=I.urlAfterRedirects)}),((c,u,a)=>(0,ne.U)(f=>(new Ii(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,I=>this.triggerEvent(I)),Tt({next(){D=!0},complete(){D=!0}}),function(c){return(0,V.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var I;D||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(I=this.currentNavigation)||void 0===I?void 0:I.id)===g.id&&(this.currentNavigation=null)}),Pt(I=>{if(w=!0,function(c){return c&&c[gn]}(I)){const L=Ft(I.url);L||(this.navigated=!0,this.restoreHistory(g,!0));const ue=new M(g.id,this.serializeUrl(g.extractedUrl),I.message);f.next(ue),L?setTimeout(()=>{const $e=this.urlHandlingStrategy.merge(I.url,this.rawUrlTree),we={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||ko(g.source)};this.scheduleNavigation($e,"imperative",null,we,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const L=new P(g.id,this.serializeUrl(g.extractedUrl),I);f.next(L);try{g.resolve(this.errorHandler(I))}catch(ue){g.reject(ue)}}return Be.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const D={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const L=Object.assign({},w);delete L.navigationId,delete L.\u0275routerPageId,0!==Object.keys(L).length&&(D.state=L)}const I=this.parseUrl(a.url);this.scheduleNavigation(I,f,w,D)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){Se(a),this.config=a.map(ht),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:D,fragment:w,queryParamsHandling:I,preserveFragment:L}=f,ue=g||this.routerState.root,$e=L?this.currentUrlTree.fragment:w;let we=null;switch(I){case"merge":we=Object.assign(Object.assign({},this.currentUrlTree.queryParams),D);break;case"preserve":we=this.currentUrlTree.queryParams;break;default:we=D||null}return null!==we&&(we=this.removeEmptyProps(we)),function(c,u,a,f,g){if(0===a.length)return Co(u.root,u.root,u,f,g);const D=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new Eo(!0,0,c);let u=0,a=!1;const f=c.reduce((g,D,w)=>{if("object"==typeof D&&null!=D){if(D.outlets){const I={};return bt(D.outlets,(L,ue)=>{I[ue]="string"==typeof L?L.split("/"):L}),[...g,{outlets:I}]}if(D.segmentPath)return[...g,D.segmentPath]}return"string"!=typeof D?[...g,D]:0===w?(D.split("/").forEach((I,L)=>{0==L&&"."===I||(0==L&&""===I?a=!0:".."===I?u++:""!=I&&g.push(I))}),g):[...g,D]},[]);return new Eo(a,u,f)}(a);if(D.toRoot())return Co(u.root,new O([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new _o(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const D=a.snapshot._urlSegment;return new _o(D,D===u.root,0)}const f=Xr(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,D=a;for(;D>g;){if(D-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new _o(f,!1,g-D)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(D,u,c),I=w.processChildren?Mo(w.segmentGroup,w.index,D.commands):Mi(w.segmentGroup,w.index,D.commands);return Co(w.segmentGroup,I,u,f,g)}(ue,this.currentUrlTree,a,we,null!=$e?$e:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=Ft(a)?a:this.parseUrl(a),D=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(D,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},Ha):!1===f?Object.assign({},Va):f,Ft(a))return Hn(this.currentUrlTree,a,g);const D=this.parseUrl(a);return Hn(this.currentUrlTree,D,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const D=a[g];return null!=D&&(f[g]=D),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new z(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,D,w){var I,L,ue;if(this.disposed)return Promise.resolve(!1);const $e=this.transitions.value,we=ko(f)&&$e&&!ko($e.source),ot=$e.rawUrl.toString()===a.toString(),it=$e.id===(null===(I=this.currentNavigation)||void 0===I?void 0:I.id);if(we&&ot&&it)return Promise.resolve(!0);let wn,sn,Tr;w?(wn=w.resolve,sn=w.reject,Tr=w.promise):Tr=new Promise((Wr,ic)=>{wn=Wr,sn=ic});const zo=++this.navigationId;let ut;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),ut=g&&g.\u0275routerPageId?g.\u0275routerPageId:D.replaceUrl||D.skipLocationChange?null!==(L=this.browserPageId)&&void 0!==L?L:0:(null!==(ue=this.browserPageId)&&void 0!==ue?ue:0)+1):ut=0,this.setTransition({id:zo,targetPageId:ut,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:D,resolve:wn,reject:sn,promise:Tr,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Tr.catch(Wr=>Promise.reject(Wr))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),D=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",D):this.location.go(g,"",D)}restoreHistory(a,f=!1){var g,D;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new M(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function ko(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bo{}class ji{preload(u,a){return(0,Te.of)(null)}}let Bi=(()=>{class c{constructor(a,f,g,D){this.router=a,this.injector=g,this.preloadingStrategy=D,this.loader=new ao(g,f,L=>a.triggerEvent(new ke(L)),L=>a.triggerEvent(new Dt(L)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,ft.h)(a=>a instanceof z),(0,Tn.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(v.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const D of f)if(D.loadChildren&&!D.canLoad&&D._loadedConfig){const w=D._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else D.loadChildren&&!D.canLoad?g.push(this.preloadConfig(a,D)):D.children&&g.push(this.processRoutes(a,D.children));return(0,B.D)(g).pipe((0,fe.J)(),(0,ne.U)(D=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,Te.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,Lt.z)(D=>(f._loadedConfig=D,this.processRoutes(D.module,D.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Gt),v.LFG(v.Sil),v.LFG(v.zs3),v.LFG(Bo))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})(),cr=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof jn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof z&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Ve&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new Ve(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){v.$Z()},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vn=new v.OlP("ROUTER_CONFIGURATION"),Ho=new v.OlP("ROUTER_FORROOT_GUARD"),Vo=[lt.Ye,{provide:mt,useClass:Mt},{provide:Gt,useFactory:function(c,u,a,f,g,D,w={},I,L){const ue=new Gt(null,c,u,a,f,g,Qt(D));return I&&(ue.urlHandlingStrategy=I),L&&(ue.routeReuseStrategy=L),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,ue),w.enableTracing&&ue.events.subscribe($e=>{var we,ot;null===(we=console.group)||void 0===we||we.call(console,`Router Event: ${$e.constructor.name}`),console.log($e.toString()),console.log($e),null===(ot=console.groupEnd)||void 0===ot||ot.call(console)}),ue},deps:[mt,E,lt.Ye,v.zs3,v.Sil,Hr,vn,[class{},new v.FiY],[class{},new v.FiY]]},E,{provide:xt,useFactory:function(c){return c.routerState.root},deps:[Gt]},Bi,ji,class{preload(u,a){return a().pipe(Pt(()=>(0,Te.of)(null)))}},{provide:vn,useValue:{enableTracing:!1}}];function oc(){return new v.PXZ("Router",Gt)}let $s=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[Vo,$r(a),{provide:Ho,useFactory:za,deps:[[Gt,new v.FiY,new v.tp0]]},{provide:vn,useValue:f||{}},{provide:lt.S$,useFactory:$a,deps:[lt.lw,[new v.tBr(lt.mr),new v.FiY],vn]},{provide:cr,useFactory:zs,deps:[Gt,lt.EM,vn]},{provide:Bo,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:ji},{provide:v.PXZ,multi:!0,useFactory:oc},[zr,{provide:v.ip1,multi:!0,useFactory:Ga,deps:[zr]},{provide:Vi,useFactory:Gs,deps:[zr]},{provide:v.tb,multi:!0,useExisting:Vi}]]}}static forChild(a){return{ngModule:c,providers:[$r(a)]}}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(Ho,8),v.LFG(Gt,8))},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({}),c})();function zs(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new cr(c,u,a)}function $a(c,u,a={}){return a.useHash?new lt.Do(c,u):new lt.b0(c,u)}function za(c){return"guarded"}function $r(c){return[{provide:v.deG,multi:!0,useValue:c},{provide:Hr,multi:!0,useValue:c}]}let zr=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new R.x}appInitializer(){return this.injector.get(lt.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(I=>f=I),D=this.injector.get(Gt),w=this.injector.get(vn);return"disabled"===w.initialNavigation?(D.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(D.hooks.afterPreactivation=()=>this.initNavigation?(0,Te.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),D.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(vn),g=this.injector.get(Bi),D=this.injector.get(cr),w=this.injector.get(Gt),I=this.injector.get(v.z2F);a===I.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),D.init(),w.resetRootComponentType(I.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(v.zs3))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac}),c})();function Ga(c){return c.appInitializer.bind(c)}function Gs(c){return c.bootstrapListener.bind(c)}const Vi=new v.OlP("Router Initializer")}
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