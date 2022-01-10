"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{6243:(Be,oe,b)=>{var y=b(9808),T=b(7587);
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
       */class te extends y.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Z extends te{static makeCurrent(){(0,y.HT)(new Z)}onAndCancel(R,M,L){return R.addEventListener(M,L,!1),()=>{R.removeEventListener(M,L,!1)}}dispatchEvent(R,M){R.dispatchEvent(M)}remove(R){R.parentNode&&R.parentNode.removeChild(R)}createElement(R,M){return(M=M||this.getDefaultDocument()).createElement(R)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(R){return R.nodeType===Node.ELEMENT_NODE}isShadowRoot(R){return R instanceof DocumentFragment}getGlobalEventTarget(R,M){return"window"===M?window:"document"===M?R:"body"===M?R.body:null}getBaseHref(R){const M=(X=X||document.querySelector("base"),X?X.getAttribute("href"):null);return null==M?null:function(O){re=re||document.createElement("a"),re.setAttribute("href",O);const R=re.pathname;return"/"===R.charAt(0)?R:`/${R}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(M)}resetBaseElement(){X=null}getUserAgent(){return window.navigator.userAgent}getCookie(R){return(0,y.Mx)(document.cookie,R)}}let re,X=null;const G=new T.OlP("TRANSITION_ID"),N=[{provide:T.ip1,useFactory:function(O,R,M){return()=>{M.get(T.CZH).donePromise.then(()=>{const L=(0,y.q)(),Q=R.querySelectorAll(`style[ng-transition="${O}"]`);for(let Re=0;Re<Q.length;Re++)L.remove(Q[Re])})}},deps:[G,y.K0,T.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ye{static init(){(0,T.VLi)(new ye)}addToWindow(R){T.dqk.getAngularTestability=(L,Q=!0)=>{const Re=R.findTestabilityInTree(L,Q);if(null==Re)throw new Error("Could not find testability for element.");return Re},T.dqk.getAllAngularTestabilities=()=>R.getAllTestabilities(),T.dqk.getAllAngularRootElements=()=>R.getAllRootElements(),T.dqk.frameworkStabilizers||(T.dqk.frameworkStabilizers=[]),T.dqk.frameworkStabilizers.push(L=>{const Q=T.dqk.getAllAngularTestabilities();let Re=Q.length,ke=!1;const Lt=function(ct){ke=ke||ct,Re--,0==Re&&L(ke)};Q.forEach(function(ct){ct.whenStable(Lt)})})}findTestabilityInTree(R,M,L){if(null==M)return null;const Q=R.getTestability(M);return null!=Q?Q:L?(0,y.q)().isShadowRoot(M)?this.findTestabilityInTree(R,M.host,!0):this.findTestabilityInTree(R,M.parentElement,!0):null}}let de=(()=>{class O{build(){return new XMLHttpRequest}}return O.\u0275fac=function(M){return new(M||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ue=new T.OlP("EventManagerPlugins");let Ie=(()=>{class O{constructor(M,L){this._zone=L,this._eventNameToPlugin=new Map,M.forEach(Q=>Q.manager=this),this._plugins=M.slice().reverse()}addEventListener(M,L,Q){return this._findPluginFor(L).addEventListener(M,L,Q)}addGlobalEventListener(M,L,Q){return this._findPluginFor(L).addGlobalEventListener(M,L,Q)}getZone(){return this._zone}_findPluginFor(M){const L=this._eventNameToPlugin.get(M);if(L)return L;const Q=this._plugins;for(let Re=0;Re<Q.length;Re++){const ke=Q[Re];if(ke.supports(M))return this._eventNameToPlugin.set(M,ke),ke}throw new Error(`No event manager plugin found for event ${M}`)}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(ue),T.LFG(T.R0b))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();class we{constructor(R){this._doc=R}addGlobalEventListener(R,M,L){const Q=(0,y.q)().getGlobalEventTarget(this._doc,R);if(!Q)throw new Error(`Unsupported event target ${Q} for event ${M}`);return this.addEventListener(Q,M,L)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ee=(()=>{class O{constructor(){this._stylesSet=new Set}addStyles(M){const L=new Set;M.forEach(Q=>{this._stylesSet.has(Q)||(this._stylesSet.add(Q),L.add(Q))}),this.onStylesAdded(L)}onStylesAdded(M){}getAllStyles(){return Array.from(this._stylesSet)}}return O.\u0275fac=function(M){return new(M||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})(),Ue=(()=>{class O extends ee{constructor(M){super(),this._doc=M,this._hostNodes=new Map,this._hostNodes.set(M.head,[])}_addStylesToHost(M,L,Q){M.forEach(Re=>{const ke=this._doc.createElement("style");ke.textContent=Re,Q.push(L.appendChild(ke))})}addHost(M){const L=[];this._addStylesToHost(this._stylesSet,M,L),this._hostNodes.set(M,L)}removeHost(M){const L=this._hostNodes.get(M);L&&L.forEach(Te),this._hostNodes.delete(M)}onStylesAdded(M){this._hostNodes.forEach((L,Q)=>{this._addStylesToHost(M,Q,L)})}ngOnDestroy(){this._hostNodes.forEach(M=>M.forEach(Te))}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();function Te(O){(0,y.q)().remove(O)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _e={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ve=/%COMP%/g;function k(O,R,M){for(let L=0;L<R.length;L++){let Q=R[L];Array.isArray(Q)?k(O,Q,M):(Q=Q.replace(ve,O),M.push(Q))}return M}function U(O){return R=>{if("__ngUnwrap__"===R)return O;!1===O(R)&&(R.preventDefault(),R.returnValue=!1)}}let $=(()=>{class O{constructor(M,L,Q){this.eventManager=M,this.sharedStylesHost=L,this.appId=Q,this.rendererByCompId=new Map,this.defaultRenderer=new H(M)}createRenderer(M,L){if(!M||!L)return this.defaultRenderer;switch(L.encapsulation){case T.ifc.Emulated:{let Q=this.rendererByCompId.get(L.id);return Q||(Q=new Mt(this.eventManager,this.sharedStylesHost,L,this.appId),this.rendererByCompId.set(L.id,Q)),Q.applyToHost(M),Q}case 1:case T.ifc.ShadowDom:return new Ye(this.eventManager,this.sharedStylesHost,M,L);default:if(!this.rendererByCompId.has(L.id)){const Q=k(L.id,L.styles,[]);this.sharedStylesHost.addStyles(Q),this.rendererByCompId.set(L.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(Ie),T.LFG(Ue),T.LFG(T.AFp))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();class H{constructor(R){this.eventManager=R,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(R,M){return M?document.createElementNS(_e[M]||M,R):document.createElement(R)}createComment(R){return document.createComment(R)}createText(R){return document.createTextNode(R)}appendChild(R,M){R.appendChild(M)}insertBefore(R,M,L){R&&R.insertBefore(M,L)}removeChild(R,M){R&&R.removeChild(M)}selectRootElement(R,M){let L="string"==typeof R?document.querySelector(R):R;if(!L)throw new Error(`The selector "${R}" did not match any elements`);return M||(L.textContent=""),L}parentNode(R){return R.parentNode}nextSibling(R){return R.nextSibling}setAttribute(R,M,L,Q){if(Q){M=Q+":"+M;const Re=_e[Q];Re?R.setAttributeNS(Re,M,L):R.setAttribute(M,L)}else R.setAttribute(M,L)}removeAttribute(R,M,L){if(L){const Q=_e[L];Q?R.removeAttributeNS(Q,M):R.removeAttribute(`${L}:${M}`)}else R.removeAttribute(M)}addClass(R,M){R.classList.add(M)}removeClass(R,M){R.classList.remove(M)}setStyle(R,M,L,Q){Q&(T.JOm.DashCase|T.JOm.Important)?R.style.setProperty(M,L,Q&T.JOm.Important?"important":""):R.style[M]=L}removeStyle(R,M,L){L&T.JOm.DashCase?R.style.removeProperty(M):R.style[M]=""}setProperty(R,M,L){R[M]=L}setValue(R,M){R.nodeValue=M}listen(R,M,L){return"string"==typeof R?this.eventManager.addGlobalEventListener(R,M,U(L)):this.eventManager.addEventListener(R,M,U(L))}}class Mt extends H{constructor(R,M,L,Q){super(R),this.component=L;const Re=k(Q+"-"+L.id,L.styles,[]);M.addStyles(Re),this.contentAttr="_ngcontent-%COMP%".replace(ve,Q+"-"+L.id),this.hostAttr="_nghost-%COMP%".replace(ve,Q+"-"+L.id)}applyToHost(R){super.setAttribute(R,this.hostAttr,"")}createElement(R,M){const L=super.createElement(R,M);return super.setAttribute(L,this.contentAttr,""),L}}class Ye extends H{constructor(R,M,L,Q){super(R),this.sharedStylesHost=M,this.hostEl=L,this.shadowRoot=L.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Re=k(Q.id,Q.styles,[]);for(let ke=0;ke<Re.length;ke++){const Lt=document.createElement("style");Lt.textContent=Re[ke],this.shadowRoot.appendChild(Lt)}}nodeOrShadowRoot(R){return R===this.hostEl?this.shadowRoot:R}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(R,M){return super.appendChild(this.nodeOrShadowRoot(R),M)}insertBefore(R,M,L){return super.insertBefore(this.nodeOrShadowRoot(R),M,L)}removeChild(R,M){return super.removeChild(this.nodeOrShadowRoot(R),M)}parentNode(R){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(R)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let xt=(()=>{class O extends we{constructor(M){super(M)}supports(M){return!0}addEventListener(M,L,Q){return M.addEventListener(L,Q,!1),()=>this.removeEventListener(M,L,Q)}removeEventListener(M,L,Q){return M.removeEventListener(L,Q)}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qt=["alt","control","meta","shift"],Kt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Zt={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},vt={alt:O=>O.altKey,control:O=>O.ctrlKey,meta:O=>O.metaKey,shift:O=>O.shiftKey};let it=(()=>{class O extends we{constructor(M){super(M)}supports(M){return null!=O.parseEventName(M)}addEventListener(M,L,Q){const Re=O.parseEventName(L),ke=O.eventCallback(Re.fullKey,Q,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,y.q)().onAndCancel(M,Re.domEventName,ke))}static parseEventName(M){const L=M.toLowerCase().split("."),Q=L.shift();if(0===L.length||"keydown"!==Q&&"keyup"!==Q)return null;const Re=O._normalizeKey(L.pop());let ke="";if(qt.forEach(ct=>{const fe=L.indexOf(ct);fe>-1&&(L.splice(fe,1),ke+=ct+".")}),ke+=Re,0!=L.length||0===Re.length)return null;const Lt={};return Lt.domEventName=Q,Lt.fullKey=ke,Lt}static getEventFullKey(M){let L="",Q=function(O){let R=O.key;if(null==R){if(R=O.keyIdentifier,null==R)return"Unidentified";R.startsWith("U+")&&(R=String.fromCharCode(parseInt(R.substring(2),16)),3===O.location&&Zt.hasOwnProperty(R)&&(R=Zt[R]))}return Kt[R]||R}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(M);return Q=Q.toLowerCase()," "===Q?Q="space":"."===Q&&(Q="dot"),qt.forEach(Re=>{Re!=Q&&vt[Re](M)&&(L+=Re+".")}),L+=Q,L}static eventCallback(M,L,Q){return Re=>{O.getEventFullKey(Re)===M&&Q.runGuarded(()=>L(Re))}}static _normalizeKey(M){return"esc"===M?"escape":M}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(y.K0))},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})();const Jt=(0,T.eFA)(T._c5,"browser",[{provide:T.Lbi,useValue:y.bD},{provide:T.g9A,useValue:function(){Z.makeCurrent(),ye.init()},multi:!0},{provide:y.K0,useFactory:function(){return(0,T.RDi)(document),document},deps:[]}]),mt=[{provide:T.zSh,useValue:"root"},{provide:T.qLn,useFactory:function(){return new T.qLn},deps:[]},{provide:ue,useClass:xt,multi:!0,deps:[y.K0,T.R0b,T.Lbi]},{provide:ue,useClass:it,multi:!0,deps:[y.K0]},{provide:$,useClass:$,deps:[Ie,Ue,T.AFp]},{provide:T.FYo,useExisting:$},{provide:ee,useExisting:Ue},{provide:Ue,useClass:Ue,deps:[y.K0]},{provide:T.dDg,useClass:T.dDg,deps:[T.R0b]},{provide:Ie,useClass:Ie,deps:[ue,T.R0b]},{provide:y.JF,useClass:de,deps:[]}];let bt=(()=>{class O{constructor(M){if(M)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(M){return{ngModule:O,providers:[{provide:T.AFp,useValue:M.appId},{provide:G,useExisting:T.AFp},N]}}}return O.\u0275fac=function(M){return new(M||O)(T.LFG(O,12))},O.\u0275mod=T.oAB({type:O}),O.\u0275inj=T.cJS({providers:mt,imports:[y.ez,T.hGG]}),O})();
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
var Sr=b(520),ar=b(84),jr=b(9506);let ur=(()=>{class O{constructor(){this.title="portfolio"}}return O.\u0275fac=function(M){return new(M||O)},O.\u0275cmp=T.Xpm({type:O,selectors:[["app-root"]],decls:1,vars:0,template:function(M,L){1&M&&T._UZ(0,"router-outlet")},directives:[ar.lC],styles:[""]}),O})();var Ar=b(8306),lr=b(576);const Fe=[{path:"",loadChildren:()=>b.e(957).then(b.bind(b,3957)).then(O=>O.LandingModule)}],Nt=[{provide:Sr.TP,useClass:(()=>{class O{constructor(){}intercept(M,L){return M.url.startsWith("/")?function(O,R){const M=(0,lr.m)(O)?O:()=>O,L=Q=>Q.error(M());return new Ar.y(L)}(()=>new Error('Url must not start with "/" to follow our convention')):(M.url.startsWith("http")||(M=M.clone({url:"https://anderson.free.mockoapp.net/"+M.url})),L.handle(M))}}return O.\u0275fac=function(M){return new(M||O)},O.\u0275prov=T.Yz7({token:O,factory:O.\u0275fac}),O})(),multi:!0}];let vn=(()=>{class O{}return O.\u0275fac=function(M){return new(M||O)},O.\u0275mod=T.oAB({type:O,bootstrap:[ur]}),O.\u0275inj=T.cJS({providers:Nt,imports:[[bt,ar.Bz.forRoot(Fe,{useHash:!0}),Sr.JF,jr.x]]}),O})();(0,T.G48)(),Jt().bootstrapModule(vn).catch(O=>console.error(O))},9506:(Be,oe,b)=>{b.d(oe,{x:()=>De,w:()=>X});var y=b(9808),T=b(7587);const te=function(re,ce,G){return{width:re,height:ce,borderRadius:G}},Z=function(re){return{rtl:re}};let X=(()=>{class re{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return re.\u0275fac=function(G){return new(G||re)},re.\u0275cmp=T.Xpm({type:re,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(G,W){2&G&&T.Tol(W.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(G,W){1&G&&T._UZ(0,"div",0),2&G&&T.Q6J("ngStyle",T.kEZ(2,te,W.width,W.shimmerHeight,W.shimmerBorderRadius))("ngClass",T.VKq(6,Z,"rtl"===W.direction))},directives:[y.PC,y.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),re})(),De=(()=>{class re{}return re.\u0275fac=function(G){return new(G||re)},re.\u0275mod=T.oAB({type:re}),re.\u0275inj=T.cJS({imports:[[y.ez]]}),re})()},1135:(Be,oe,b)=>{b.d(oe,{X:()=>T});var y=b(7579);class T extends y.x{constructor(Z){super(),this._value=Z}get value(){return this.getValue()}_subscribe(Z){const X=super._subscribe(Z);return!X.closed&&Z.next(this._value),X}getValue(){const{hasError:Z,thrownError:X,_value:De}=this;if(Z)throw X;return this._throwIfClosed(),De}next(Z){super.next(this._value=Z)}}},8306:(Be,oe,b)=>{b.d(oe,{y:()=>W});var y=b(2961),T=b(727),te=b(8822),Z=b(4671);var re=b(2416),ce=b(576),G=b(2806);let W=(()=>{class ue{constructor(we){we&&(this._subscribe=we)}lift(we){const ee=new ue;return ee.source=this,ee.operator=we,ee}subscribe(we,ee,Ue){const Te=function(ue){return ue&&ue instanceof y.Lv||function(ue){return ue&&(0,ce.m)(ue.next)&&(0,ce.m)(ue.error)&&(0,ce.m)(ue.complete)}(ue)&&(0,T.Nn)(ue)}(we)?we:new y.Hp(we,ee,Ue);return(0,G.x)(()=>{const{operator:_e,source:ve}=this;Te.add(_e?_e.call(Te,ve):ve?this._subscribe(Te):this._trySubscribe(Te))}),Te}_trySubscribe(we){try{return this._subscribe(we)}catch(ee){we.error(ee)}}forEach(we,ee){return new(ee=N(ee))((Ue,Te)=>{let _e;_e=this.subscribe(ve=>{try{we(ve)}catch(xe){Te(xe),null==_e||_e.unsubscribe()}},Te,Ue)})}_subscribe(we){var ee;return null===(ee=this.source)||void 0===ee?void 0:ee.subscribe(we)}[te.L](){return this}pipe(...we){return function(ue){return 0===ue.length?Z.y:1===ue.length?ue[0]:function(we){return ue.reduce((ee,Ue)=>Ue(ee),we)}}(we)(this)}toPromise(we){return new(we=N(we))((ee,Ue)=>{let Te;this.subscribe(_e=>Te=_e,_e=>Ue(_e),()=>ee(Te))})}}return ue.create=Ie=>new ue(Ie),ue})();function N(ue){var Ie;return null!==(Ie=null!=ue?ue:re.v.Promise)&&void 0!==Ie?Ie:Promise}},7579:(Be,oe,b)=>{b.d(oe,{x:()=>re});var y=b(8306),T=b(727);const Z=(0,b(3888).d)(G=>function(){G(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var X=b(8737),De=b(2806);let re=(()=>{class G extends y.y{constructor(){super(),this.closed=!1,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(N){const ye=new ce(this,this);return ye.operator=N,ye}_throwIfClosed(){if(this.closed)throw new Z}next(N){(0,De.x)(()=>{if(this._throwIfClosed(),!this.isStopped){const ye=this.observers.slice();for(const de of ye)de.next(N)}})}error(N){(0,De.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=N;const{observers:ye}=this;for(;ye.length;)ye.shift().error(N)}})}complete(){(0,De.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:N}=this;for(;N.length;)N.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=null}get observed(){var N;return(null===(N=this.observers)||void 0===N?void 0:N.length)>0}_trySubscribe(N){return this._throwIfClosed(),super._trySubscribe(N)}_subscribe(N){return this._throwIfClosed(),this._checkFinalizedStatuses(N),this._innerSubscribe(N)}_innerSubscribe(N){const{hasError:ye,isStopped:de,observers:ue}=this;return ye||de?T.Lc:(ue.push(N),new T.w0(()=>(0,X.P)(ue,N)))}_checkFinalizedStatuses(N){const{hasError:ye,thrownError:de,isStopped:ue}=this;ye?N.error(de):ue&&N.complete()}asObservable(){const N=new y.y;return N.source=this,N}}return G.create=(W,N)=>new ce(W,N),G})();class ce extends re{constructor(W,N){super(),this.destination=W,this.source=N}next(W){var N,ye;null===(ye=null===(N=this.destination)||void 0===N?void 0:N.next)||void 0===ye||ye.call(N,W)}error(W){var N,ye;null===(ye=null===(N=this.destination)||void 0===N?void 0:N.error)||void 0===ye||ye.call(N,W)}complete(){var W,N;null===(N=null===(W=this.destination)||void 0===W?void 0:W.complete)||void 0===N||N.call(W)}_subscribe(W){var N,ye;return null!==(ye=null===(N=this.source)||void 0===N?void 0:N.subscribe(W))&&void 0!==ye?ye:T.Lc}}},2961:(Be,oe,b)=>{b.d(oe,{Hp:()=>de,Lv:()=>ye});var y=b(576),T=b(727),te=b(2416),Z=b(7849);function X(){}const De=G("C",void 0,void 0);function G(Ue,Te,_e){return{kind:Ue,value:Te,error:_e}}var W=b(3410),N=b(2806);class ye extends T.w0{constructor(Te){super(),this.isStopped=!1,Te?(this.destination=Te,(0,T.Nn)(Te)&&Te.add(this)):this.destination=ee}static create(Te,_e,ve){return new de(Te,_e,ve)}next(Te){this.isStopped?we(G("N",Te,void 0),this):this._next(Te)}error(Te){this.isStopped?we(G("E",void 0,Te),this):(this.isStopped=!0,this._error(Te))}complete(){this.isStopped?we(De,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Te){this.destination.next(Te)}_error(Te){try{this.destination.error(Te)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}class de extends ye{constructor(Te,_e,ve){let xe;if(super(),(0,y.m)(Te))xe=Te;else if(Te){let ae;({next:xe,error:_e,complete:ve}=Te),this&&te.v.useDeprecatedNextContext?(ae=Object.create(Te),ae.unsubscribe=()=>this.unsubscribe()):ae=Te,xe=null==xe?void 0:xe.bind(ae),_e=null==_e?void 0:_e.bind(ae),ve=null==ve?void 0:ve.bind(ae)}this.destination={next:xe?ue(xe):X,error:ue(null!=_e?_e:Ie),complete:ve?ue(ve):X}}}function ue(Ue,Te){return(..._e)=>{try{Ue(..._e)}catch(ve){te.v.useDeprecatedSynchronousErrorHandling?(0,N.O)(ve):(0,Z.h)(ve)}}}function Ie(Ue){throw Ue}function we(Ue,Te){const{onStoppedNotification:_e}=te.v;_e&&W.z.setTimeout(()=>_e(Ue,Te))}const ee={closed:!0,next:X,error:Ie,complete:X}},727:(Be,oe,b)=>{b.d(oe,{Lc:()=>De,w0:()=>X,Nn:()=>re});var y=b(576);const te=(0,b(3888).d)(G=>function(N){G(this),this.message=N?`${N.length} errors occurred during unsubscription:\n${N.map((ye,de)=>`${de+1}) ${ye.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=N});var Z=b(8737);class X{constructor(W){this.initialTeardown=W,this.closed=!1,this._parentage=null,this._teardowns=null}unsubscribe(){let W;if(!this.closed){this.closed=!0;const{_parentage:N}=this;if(N)if(this._parentage=null,Array.isArray(N))for(const ue of N)ue.remove(this);else N.remove(this);const{initialTeardown:ye}=this;if((0,y.m)(ye))try{ye()}catch(ue){W=ue instanceof te?ue.errors:[ue]}const{_teardowns:de}=this;if(de){this._teardowns=null;for(const ue of de)try{ce(ue)}catch(Ie){W=null!=W?W:[],Ie instanceof te?W=[...W,...Ie.errors]:W.push(Ie)}}if(W)throw new te(W)}}add(W){var N;if(W&&W!==this)if(this.closed)ce(W);else{if(W instanceof X){if(W.closed||W._hasParent(this))return;W._addParent(this)}(this._teardowns=null!==(N=this._teardowns)&&void 0!==N?N:[]).push(W)}}_hasParent(W){const{_parentage:N}=this;return N===W||Array.isArray(N)&&N.includes(W)}_addParent(W){const{_parentage:N}=this;this._parentage=Array.isArray(N)?(N.push(W),N):N?[N,W]:W}_removeParent(W){const{_parentage:N}=this;N===W?this._parentage=null:Array.isArray(N)&&(0,Z.P)(N,W)}remove(W){const{_teardowns:N}=this;N&&(0,Z.P)(N,W),W instanceof X&&W._removeParent(this)}}X.EMPTY=(()=>{const G=new X;return G.closed=!0,G})();const De=X.EMPTY;function re(G){return G instanceof X||G&&"closed"in G&&(0,y.m)(G.remove)&&(0,y.m)(G.add)&&(0,y.m)(G.unsubscribe)}function ce(G){(0,y.m)(G)?G():G.unsubscribe()}},2416:(Be,oe,b)=>{b.d(oe,{v:()=>y});const y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(Be,oe,b)=>{b.d(oe,{E:()=>T});const T=new(b(8306).y)(X=>X.complete())},2076:(Be,oe,b)=>{b.d(oe,{D:()=>qe});var y=b(8421),T=b(9672),te=b(4482),Z=b(5403);function X(be,ge=0){return(0,te.e)((j,k)=>{j.subscribe(new Z.Q(k,U=>(0,T.f)(k,be,()=>k.next(U),ge),()=>(0,T.f)(k,be,()=>k.complete(),ge),U=>(0,T.f)(k,be,()=>k.error(U),ge)))})}function De(be,ge=0){return(0,te.e)((j,k)=>{k.add(be.schedule(()=>j.subscribe(k),ge))})}var G=b(8306),N=b(2202),ye=b(576);function ue(be,ge){if(!be)throw new Error("Iterable cannot be null");return new G.y(j=>{(0,T.f)(j,ge,()=>{const k=be[Symbol.asyncIterator]();(0,T.f)(j,ge,()=>{k.next().then(U=>{U.done?j.complete():j.next(U.value)})},0,!0)})})}var Ie=b(3670),we=b(8239),ee=b(1144),Ue=b(6495),Te=b(2206),_e=b(4532),ve=b(3260);function qe(be,ge){return ge?function(be,ge){if(null!=be){if((0,Ie.c)(be))return function(be,ge){return(0,y.Xf)(be).pipe(De(ge),X(ge))}(be,ge);if((0,ee.z)(be))return function(be,ge){return new G.y(j=>{let k=0;return ge.schedule(function(){k===be.length?j.complete():(j.next(be[k++]),j.closed||this.schedule())})})}(be,ge);if((0,we.t)(be))return function(be,ge){return(0,y.Xf)(be).pipe(De(ge),X(ge))}(be,ge);if((0,Te.D)(be))return ue(be,ge);if((0,Ue.T)(be))return function(be,ge){return new G.y(j=>{let k;return(0,T.f)(j,ge,()=>{k=be[N.h](),(0,T.f)(j,ge,()=>{let U,K;try{({value:U,done:K}=k.next())}catch($){return void j.error($)}K?j.complete():j.next(U)},0,!0)}),()=>(0,ye.m)(null==k?void 0:k.return)&&k.return()})}(be,ge);if((0,ve.L)(be))return function(be,ge){return ue((0,ve.Q)(be),ge)}(be,ge)}throw(0,_e.z)(be)}(be,ge):(0,y.Xf)(be)}},8421:(Be,oe,b)=>{b.d(oe,{Xf:()=>de});var y=b(5987),T=b(1144),te=b(8239),Z=b(8306),X=b(3670),De=b(2206),re=b(4532),ce=b(6495),G=b(3260),W=b(576),N=b(7849),ye=b(8822);function de(ve){if(ve instanceof Z.y)return ve;if(null!=ve){if((0,X.c)(ve))return function(ve){return new Z.y(xe=>{const ae=ve[ye.L]();if((0,W.m)(ae.subscribe))return ae.subscribe(xe);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(ve);if((0,T.z)(ve))return function(ve){return new Z.y(xe=>{for(let ae=0;ae<ve.length&&!xe.closed;ae++)xe.next(ve[ae]);xe.complete()})}(ve);if((0,te.t)(ve))return function(ve){return new Z.y(xe=>{ve.then(ae=>{xe.closed||(xe.next(ae),xe.complete())},ae=>xe.error(ae)).then(null,N.h)})}(ve);if((0,De.D)(ve))return Ue(ve);if((0,ce.T)(ve))return function(ve){return new Z.y(xe=>{for(const ae of ve)if(xe.next(ae),xe.closed)return;xe.complete()})}(ve);if((0,G.L)(ve))return function(ve){return Ue((0,G.Q)(ve))}(ve)}throw(0,re.z)(ve)}function Ue(ve){return new Z.y(xe=>{(function(ve,xe){var ae,qe,be,ge;return(0,y.mG)(this,void 0,void 0,function*(){try{for(ae=(0,y.KL)(ve);!(qe=yield ae.next()).done;)if(xe.next(qe.value),xe.closed)return}catch(j){be={error:j}}finally{try{qe&&!qe.done&&(ge=ae.return)&&(yield ge.call(ae))}finally{if(be)throw be.error}}xe.complete()})})(ve,xe).catch(ae=>xe.error(ae))})}},9646:(Be,oe,b)=>{b.d(oe,{of:()=>te});var y=b(3269),T=b(2076);function te(...Z){const X=(0,y.yG)(Z);return(0,T.D)(Z,X)}},5403:(Be,oe,b)=>{b.d(oe,{Q:()=>T});var y=b(2961);class T extends y.Lv{constructor(Z,X,De,re,ce){super(Z),this.onFinalize=ce,this._next=X?function(G){try{X(G)}catch(W){Z.error(W)}}:super._next,this._error=re?function(G){try{re(G)}catch(W){Z.error(W)}finally{this.unsubscribe()}}:super._error,this._complete=De?function(){try{De()}catch(G){Z.error(G)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var Z;const{closed:X}=this;super.unsubscribe(),!X&&(null===(Z=this.onFinalize)||void 0===Z||Z.call(this))}}},4351:(Be,oe,b)=>{b.d(oe,{b:()=>te});var y=b(5577),T=b(576);function te(Z,X){return(0,T.m)(X)?(0,y.z)(Z,X,1):(0,y.z)(Z,1)}},6590:(Be,oe,b)=>{b.d(oe,{d:()=>te});var y=b(4482),T=b(5403);function te(Z){return(0,y.e)((X,De)=>{let re=!1;X.subscribe(new T.Q(De,ce=>{re=!0,De.next(ce)},()=>{re||De.next(Z),De.complete()}))})}},9300:(Be,oe,b)=>{b.d(oe,{h:()=>te});var y=b(4482),T=b(5403);function te(Z,X){return(0,y.e)((De,re)=>{let ce=0;De.subscribe(new T.Q(re,G=>Z.call(X,G,ce++)&&re.next(G)))})}},590:(Be,oe,b)=>{b.d(oe,{P:()=>re});var y=b(6805),T=b(9300),te=b(5698),Z=b(6590),X=b(8068),De=b(4671);function re(ce,G){const W=arguments.length>=2;return N=>N.pipe(ce?(0,T.h)((ye,de)=>ce(ye,de,N)):De.y,(0,te.q)(1),W?(0,Z.d)(G):(0,X.T)(()=>new y.K))}},4004:(Be,oe,b)=>{b.d(oe,{U:()=>te});var y=b(4482),T=b(5403);function te(Z,X){return(0,y.e)((De,re)=>{let ce=0;De.subscribe(new T.Q(re,G=>{re.next(Z.call(X,G,ce++))}))})}},8189:(Be,oe,b)=>{b.d(oe,{J:()=>te});var y=b(5577),T=b(4671);function te(Z=1/0){return(0,y.z)(T.y,Z)}},5577:(Be,oe,b)=>{b.d(oe,{z:()=>ce});var y=b(4004),T=b(8421),te=b(4482),X=(b(9672),b(5403)),re=b(576);function ce(G,W,N=1/0){return(0,re.m)(W)?ce((ye,de)=>(0,y.U)((ue,Ie)=>W(ye,ue,de,Ie))((0,T.Xf)(G(ye,de))),N):("number"==typeof W&&(N=W),(0,te.e)((ye,de)=>function(G,W,N,ye,de,ue,Ie,we){const ee=[];let Ue=0,Te=0,_e=!1;const ve=()=>{_e&&!ee.length&&!Ue&&W.complete()},xe=qe=>Ue<ye?ae(qe):ee.push(qe),ae=qe=>{Ue++;let be=!1;(0,T.Xf)(N(qe,Te++)).subscribe(new X.Q(W,ge=>{W.next(ge)},()=>{be=!0},void 0,()=>{if(be)try{for(Ue--;ee.length&&Ue<ye;){const ge=ee.shift();ae(ge)}ve()}catch(ge){W.error(ge)}}))};return G.subscribe(new X.Q(W,xe,()=>{_e=!0,ve()})),()=>{}}(ye,de,G,N)))}},3099:(Be,oe,b)=>{b.d(oe,{B:()=>De});var y=b(2076),T=b(5698),te=b(7579),Z=b(2961),X=b(4482);function De(ce={}){const{connector:G=(()=>new te.x),resetOnError:W=!0,resetOnComplete:N=!0,resetOnRefCountZero:ye=!0}=ce;return de=>{let ue=null,Ie=null,we=null,ee=0,Ue=!1,Te=!1;const _e=()=>{null==Ie||Ie.unsubscribe(),Ie=null},ve=()=>{_e(),ue=we=null,Ue=Te=!1},xe=()=>{const ae=ue;ve(),null==ae||ae.unsubscribe()};return(0,X.e)((ae,qe)=>{ee++,!Te&&!Ue&&_e();const be=we=null!=we?we:G();qe.add(()=>{ee--,0===ee&&!Te&&!Ue&&(Ie=re(xe,ye))}),be.subscribe(qe),ue||(ue=new Z.Hp({next:ge=>be.next(ge),error:ge=>{Te=!0,_e(),Ie=re(ve,W,ge),be.error(ge)},complete:()=>{Ue=!0,_e(),Ie=re(ve,N),be.complete()}}),(0,y.D)(ae).subscribe(ue))})(de)}}function re(ce,G,...W){return!0===G?(ce(),null):!1===G?null:G(...W).pipe((0,T.q)(1)).subscribe(()=>ce())}},3900:(Be,oe,b)=>{b.d(oe,{w:()=>Z});var y=b(8421),T=b(4482),te=b(5403);function Z(X,De){return(0,T.e)((re,ce)=>{let G=null,W=0,N=!1;const ye=()=>N&&!G&&ce.complete();re.subscribe(new te.Q(ce,de=>{null==G||G.unsubscribe();let ue=0;const Ie=W++;(0,y.Xf)(X(de,Ie)).subscribe(G=new te.Q(ce,we=>ce.next(De?De(de,we,Ie,ue++):we),()=>{G=null,ye()}))},()=>{N=!0,ye()}))})}},5698:(Be,oe,b)=>{b.d(oe,{q:()=>Z});var y=b(515),T=b(4482),te=b(5403);function Z(X){return X<=0?()=>y.E:(0,T.e)((De,re)=>{let ce=0;De.subscribe(new te.Q(re,G=>{++ce<=X&&(re.next(G),X<=ce&&re.complete())}))})}},8505:(Be,oe,b)=>{b.d(oe,{b:()=>X});var y=b(576),T=b(4482),te=b(5403),Z=b(4671);function X(De,re,ce){const G=(0,y.m)(De)||re||ce?{next:De,error:re,complete:ce}:De;return G?(0,T.e)((W,N)=>{var ye;null===(ye=G.subscribe)||void 0===ye||ye.call(G);let de=!0;W.subscribe(new te.Q(N,ue=>{var Ie;null===(Ie=G.next)||void 0===Ie||Ie.call(G,ue),N.next(ue)},()=>{var ue;de=!1,null===(ue=G.complete)||void 0===ue||ue.call(G),N.complete()},ue=>{var Ie;de=!1,null===(Ie=G.error)||void 0===Ie||Ie.call(G,ue),N.error(ue)},()=>{var ue,Ie;de&&(null===(ue=G.unsubscribe)||void 0===ue||ue.call(G)),null===(Ie=G.finalize)||void 0===Ie||Ie.call(G)}))}):Z.y}},8068:(Be,oe,b)=>{b.d(oe,{T:()=>Z});var y=b(6805),T=b(4482),te=b(5403);function Z(De=X){return(0,T.e)((re,ce)=>{let G=!1;re.subscribe(new te.Q(ce,W=>{G=!0,ce.next(W)},()=>G?ce.complete():ce.error(De())))})}function X(){return new y.K}},3410:(Be,oe,b)=>{b.d(oe,{z:()=>y});const y={setTimeout(...T){const{delegate:te}=y;return((null==te?void 0:te.setTimeout)||setTimeout)(...T)},clearTimeout(T){const{delegate:te}=y;return((null==te?void 0:te.clearTimeout)||clearTimeout)(T)},delegate:void 0}},2202:(Be,oe,b)=>{b.d(oe,{h:()=>T});const T="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},8822:(Be,oe,b)=>{b.d(oe,{L:()=>y});const y="function"==typeof Symbol&&Symbol.observable||"@@observable"},6805:(Be,oe,b)=>{b.d(oe,{K:()=>T});const T=(0,b(3888).d)(te=>function(){te(this),this.name="EmptyError",this.message="no elements in sequence"})},3269:(Be,oe,b)=>{b.d(oe,{jO:()=>Z,yG:()=>X,_6:()=>De});var y=b(576),T=b(3532);function te(re){return re[re.length-1]}function Z(re){return(0,y.m)(te(re))?re.pop():void 0}function X(re){return(0,T.K)(te(re))?re.pop():void 0}function De(re,ce){return"number"==typeof te(re)?re.pop():ce}},8737:(Be,oe,b)=>{function y(T,te){if(T){const Z=T.indexOf(te);0<=Z&&T.splice(Z,1)}}b.d(oe,{P:()=>y})},3888:(Be,oe,b)=>{function y(T){const Z=T(X=>{Error.call(X),X.stack=(new Error).stack});return Z.prototype=Object.create(Error.prototype),Z.prototype.constructor=Z,Z}b.d(oe,{d:()=>y})},2806:(Be,oe,b)=>{b.d(oe,{x:()=>te,O:()=>Z});var y=b(2416);let T=null;function te(X){if(y.v.useDeprecatedSynchronousErrorHandling){const De=!T;if(De&&(T={errorThrown:!1,error:null}),X(),De){const{errorThrown:re,error:ce}=T;if(T=null,re)throw ce}}else X()}function Z(X){y.v.useDeprecatedSynchronousErrorHandling&&T&&(T.errorThrown=!0,T.error=X)}},9672:(Be,oe,b)=>{function y(T,te,Z,X=0,De=!1){const re=te.schedule(function(){Z(),De?T.add(this.schedule(null,X)):this.unsubscribe()},X);if(T.add(re),!De)return re}b.d(oe,{f:()=>y})},4671:(Be,oe,b)=>{function y(T){return T}b.d(oe,{y:()=>y})},1144:(Be,oe,b)=>{b.d(oe,{z:()=>y});const y=T=>T&&"number"==typeof T.length&&"function"!=typeof T},2206:(Be,oe,b)=>{b.d(oe,{D:()=>T});var y=b(576);function T(te){return Symbol.asyncIterator&&(0,y.m)(null==te?void 0:te[Symbol.asyncIterator])}},576:(Be,oe,b)=>{function y(T){return"function"==typeof T}b.d(oe,{m:()=>y})},3670:(Be,oe,b)=>{b.d(oe,{c:()=>te});var y=b(8822),T=b(576);function te(Z){return(0,T.m)(Z[y.L])}},6495:(Be,oe,b)=>{b.d(oe,{T:()=>te});var y=b(2202),T=b(576);function te(Z){return(0,T.m)(null==Z?void 0:Z[y.h])}},8239:(Be,oe,b)=>{b.d(oe,{t:()=>T});var y=b(576);function T(te){return(0,y.m)(null==te?void 0:te.then)}},3260:(Be,oe,b)=>{b.d(oe,{Q:()=>te,L:()=>Z});var y=b(5987),T=b(576);function te(X){return(0,y.FC)(this,arguments,function*(){const re=X.getReader();try{for(;;){const{value:ce,done:G}=yield(0,y.qq)(re.read());if(G)return yield(0,y.qq)(void 0);yield yield(0,y.qq)(ce)}}finally{re.releaseLock()}})}function Z(X){return(0,T.m)(null==X?void 0:X.getReader)}},3532:(Be,oe,b)=>{b.d(oe,{K:()=>T});var y=b(576);function T(te){return te&&(0,y.m)(te.schedule)}},4482:(Be,oe,b)=>{b.d(oe,{A:()=>T,e:()=>te});var y=b(576);function T(Z){return(0,y.m)(null==Z?void 0:Z.lift)}function te(Z){return X=>{if(T(X))return X.lift(function(De){try{return Z(De,this)}catch(re){this.error(re)}});throw new TypeError("Unable to lift unknown Observable type")}}},7849:(Be,oe,b)=>{b.d(oe,{h:()=>te});var y=b(2416),T=b(3410);function te(Z){T.z.setTimeout(()=>{const{onUnhandledError:X}=y.v;if(!X)throw Z;X(Z)})}},4532:(Be,oe,b)=>{function y(T){return new TypeError(`You provided ${null!==T&&"object"==typeof T?"an invalid object":`'${T}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}b.d(oe,{z:()=>y})},5987:(Be,oe,b)=>{function ce(j,k,U,K){return new(U||(U=Promise))(function(H,Le){function et(xt){try{Ye(K.next(xt))}catch(qt){Le(qt)}}function Mt(xt){try{Ye(K.throw(xt))}catch(qt){Le(qt)}}function Ye(xt){xt.done?H(xt.value):function(H){return H instanceof U?H:new U(function(Le){Le(H)})}(xt.value).then(et,Mt)}Ye((K=K.apply(j,k||[])).next())})}function ee(j){return this instanceof ee?(this.v=j,this):new ee(j)}function Ue(j,k,U){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var $,K=U.apply(j,k||[]),H=[];return $={},Le("next"),Le("throw"),Le("return"),$[Symbol.asyncIterator]=function(){return this},$;function Le(dt){K[dt]&&($[dt]=function(Kt){return new Promise(function(Zt,vt){H.push([dt,Kt,Zt,vt])>1||et(dt,Kt)})})}function et(dt,Kt){try{!function(dt){dt.value instanceof ee?Promise.resolve(dt.value.v).then(Ye,xt):qt(H[0][2],dt)}(K[dt](Kt))}catch(Zt){qt(H[0][3],Zt)}}function Ye(dt){et("next",dt)}function xt(dt){et("throw",dt)}function qt(dt,Kt){dt(Kt),H.shift(),H.length&&et(H[0][0],H[0][1])}}function _e(j){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var U,k=j[Symbol.asyncIterator];return k?k.call(j):(j=function(j){var k="function"==typeof Symbol&&Symbol.iterator,U=k&&j[k],K=0;if(U)return U.call(j);if(j&&"number"==typeof j.length)return{next:function(){return j&&K>=j.length&&(j=void 0),{value:j&&j[K++],done:!j}}};throw new TypeError(k?"Object is not iterable.":"Symbol.iterator is not defined.")}(j),U={},K("next"),K("throw"),K("return"),U[Symbol.asyncIterator]=function(){return this},U);function K(H){U[H]=j[H]&&function(Le){return new Promise(function(et,Mt){!function(H,Le,et,Mt){Promise.resolve(Mt).then(function(Ye){H({value:Ye,done:et})},Le)}(et,Mt,(Le=j[H](Le)).done,Le.value)})}}}b.d(oe,{mG:()=>ce,qq:()=>ee,FC:()=>Ue,KL:()=>_e})},9808:(Be,oe,b)=>{b.d(oe,{mr:()=>Te,Ov:()=>Br,ez:()=>Fn,K0:()=>re,uU:()=>Hr,Do:()=>ve,V_:()=>W,Ye:()=>xe,S$:()=>ee,mk:()=>Rn,sg:()=>Gn,O5:()=>Wn,PC:()=>jt,RF:()=>Dn,n9:()=>$t,b0:()=>_e,lw:()=>ce,EM:()=>Si,JF:()=>Ai,w_:()=>De,bD:()=>no,q:()=>te,Mx:()=>It,HT:()=>X});var y=b(7587);
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
       */let T=null;function te(){return T}function X(p){T||(T=p)}class De{}
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
       */let ce=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return(0,y.LFG)(N)},providedIn:"platform"}),p})();const W=new y.OlP("Location Initialized");let N=(()=>{class p extends ce{constructor(h){super(),this._doc=h,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return te().getBaseHref(this._doc)}onPopState(h){const C=te().getGlobalEventTarget(this._doc,"window");return C.addEventListener("popstate",h,!1),()=>C.removeEventListener("popstate",h)}onHashChange(h){const C=te().getGlobalEventTarget(this._doc,"window");return C.addEventListener("hashchange",h,!1),()=>C.removeEventListener("hashchange",h)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(h){this.location.pathname=h}pushState(h,C,x){ye()?this._history.pushState(h,C,x):this.location.hash=x}replaceState(h,C,x){ye()?this._history.replaceState(h,C,x):this.location.hash=x}forward(){this._history.forward()}back(){this._history.back()}historyGo(h=0){this._history.go(h)}getState(){return this._history.state}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(re))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new N((0,y.LFG)(re))},providedIn:"platform"}),p})();function ye(){return!!window.history.pushState}
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
function ue(p,D){if(0==p.length)return D;if(0==D.length)return p;let h=0;return p.endsWith("/")&&h++,D.startsWith("/")&&h++,2==h?p+D.substring(1):1==h?p+D:p+"/"+D}function Ie(p){const D=p.match(/#|\?|$/),h=D&&D.index||p.length;return p.slice(0,h-("/"===p[h-1]?1:0))+p.slice(h)}function we(p){return p&&"?"!==p[0]?"?"+p:p}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ee=(()=>{class p{historyGo(h){throw new Error("Not implemented")}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275prov=y.Yz7({token:p,factory:function(){return function(p){const D=(0,y.LFG)(re).location;return new _e((0,y.LFG)(ce),D&&D.origin||"")}()},providedIn:"root"}),p})();const Te=new y.OlP("appBaseHref");let _e=(()=>{class p extends ee{constructor(h,C){if(super(),this._platformLocation=h,this._removeListenerFns=[],null==C&&(C=this._platformLocation.getBaseHrefFromDOM()),null==C)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=C}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}prepareExternalUrl(h){return ue(this._baseHref,h)}path(h=!1){const C=this._platformLocation.pathname+we(this._platformLocation.search),x=this._platformLocation.hash;return x&&h?`${C}${x}`:C}pushState(h,C,x,B){const se=this.prepareExternalUrl(x+we(B));this._platformLocation.pushState(h,C,se)}replaceState(h,C,x,B){const se=this.prepareExternalUrl(x+we(B));this._platformLocation.replaceState(h,C,se)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(ce),y.LFG(Te,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),ve=(()=>{class p extends ee{constructor(h,C){super(),this._platformLocation=h,this._baseHref="",this._removeListenerFns=[],null!=C&&(this._baseHref=C)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(h){this._removeListenerFns.push(this._platformLocation.onPopState(h),this._platformLocation.onHashChange(h))}getBaseHref(){return this._baseHref}path(h=!1){let C=this._platformLocation.hash;return null==C&&(C="#"),C.length>0?C.substring(1):C}prepareExternalUrl(h){const C=ue(this._baseHref,h);return C.length>0?"#"+C:C}pushState(h,C,x,B){let se=this.prepareExternalUrl(x+we(B));0==se.length&&(se=this._platformLocation.pathname),this._platformLocation.pushState(h,C,se)}replaceState(h,C,x,B){let se=this.prepareExternalUrl(x+we(B));0==se.length&&(se=this._platformLocation.pathname),this._platformLocation.replaceState(h,C,se)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformLocation).historyGo)||void 0===x||x.call(C,h)}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(ce),y.LFG(Te,8))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})(),xe=(()=>{class p{constructor(h,C){this._subject=new y.vpe,this._urlChangeListeners=[],this._platformStrategy=h;const x=this._platformStrategy.getBaseHref();this._platformLocation=C,this._baseHref=Ie(be(x)),this._platformStrategy.onPopState(B=>{this._subject.emit({url:this.path(!0),pop:!0,state:B.state,type:B.type})})}path(h=!1){return this.normalize(this._platformStrategy.path(h))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(h,C=""){return this.path()==this.normalize(h+we(C))}normalize(h){return p.stripTrailingSlash(function(p,D){return p&&D.startsWith(p)?D.substring(p.length):D}(this._baseHref,be(h)))}prepareExternalUrl(h){return h&&"/"!==h[0]&&(h="/"+h),this._platformStrategy.prepareExternalUrl(h)}go(h,C="",x=null){this._platformStrategy.pushState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+we(C)),x)}replaceState(h,C="",x=null){this._platformStrategy.replaceState(x,"",h,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(h+we(C)),x)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(h=0){var C,x;null===(x=(C=this._platformStrategy).historyGo)||void 0===x||x.call(C,h)}onUrlChange(h){this._urlChangeListeners.push(h),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(C=>{this._notifyUrlChangeListeners(C.url,C.state)}))}_notifyUrlChangeListeners(h="",C){this._urlChangeListeners.forEach(x=>x(h,C))}subscribe(h,C,x){return this._subject.subscribe({next:h,error:C,complete:x})}}return p.normalizeQueryParams=we,p.joinWithSlash=ue,p.stripTrailingSlash=Ie,p.\u0275fac=function(h){return new(h||p)(y.LFG(ee),y.LFG(ce))},p.\u0275prov=y.Yz7({token:p,factory:function(){return new xe((0,y.LFG)(ee),(0,y.LFG)(ce))},providedIn:"root"}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function be(p){return p.replace(/\/index.html$/,"")}
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
var k=(()=>((k=k||{})[k.Zero=0]="Zero",k[k.One=1]="One",k[k.Two=2]="Two",k[k.Few=3]="Few",k[k.Many=4]="Many",k[k.Other=5]="Other",k))(),U=(()=>((U=U||{})[U.Format=0]="Format",U[U.Standalone=1]="Standalone",U))(),K=(()=>((K=K||{})[K.Narrow=0]="Narrow",K[K.Abbreviated=1]="Abbreviated",K[K.Wide=2]="Wide",K[K.Short=3]="Short",K))(),$=(()=>(($=$||{})[$.Short=0]="Short",$[$.Medium=1]="Medium",$[$.Long=2]="Long",$[$.Full=3]="Full",$))(),H=(()=>((H=H||{})[H.Decimal=0]="Decimal",H[H.Group=1]="Group",H[H.List=2]="List",H[H.PercentSign=3]="PercentSign",H[H.PlusSign=4]="PlusSign",H[H.MinusSign=5]="MinusSign",H[H.Exponential=6]="Exponential",H[H.SuperscriptingExponent=7]="SuperscriptingExponent",H[H.PerMille=8]="PerMille",H[H.Infinity=9]="Infinity",H[H.NaN=10]="NaN",H[H.TimeSeparator=11]="TimeSeparator",H[H.CurrencyDecimal=12]="CurrencyDecimal",H[H.CurrencyGroup=13]="CurrencyGroup",H))();function Zt(p,D){return yt((0,y.cg1)(p)[y.wAp.DateFormat],D)}function vt(p,D){return yt((0,y.cg1)(p)[y.wAp.TimeFormat],D)}function it(p,D){return yt((0,y.cg1)(p)[y.wAp.DateTimeFormat],D)}function Ht(p,D){const h=(0,y.cg1)(p),C=h[y.wAp.NumberSymbols][D];if(void 0===C){if(D===H.CurrencyDecimal)return h[y.wAp.NumberSymbols][H.Decimal];if(D===H.CurrencyGroup)return h[y.wAp.NumberSymbols][H.Group]}return C}const mt=y.kL8;function bt(p){if(!p[y.wAp.ExtraData])throw new Error(`Missing extra locale data for the locale "${p[y.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function yt(p,D){for(let h=D;h>-1;h--)if(void 0!==p[h])return p[h];throw new Error("Locale data API: locale data undefined")}function En(p){const[D,h]=p.split(":");return{hours:+D,minutes:+h}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ie={},Y=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var Ee=(()=>((Ee=Ee||{})[Ee.Short=0]="Short",Ee[Ee.ShortGMT=1]="ShortGMT",Ee[Ee.Long=2]="Long",Ee[Ee.Extended=3]="Extended",Ee))(),he=(()=>((he=he||{})[he.FullYear=0]="FullYear",he[he.Month=1]="Month",he[he.Date=2]="Date",he[he.Hours=3]="Hours",he[he.Minutes=4]="Minutes",he[he.Seconds=5]="Seconds",he[he.FractionalSeconds=6]="FractionalSeconds",he[he.Day=7]="Day",he))(),me=(()=>((me=me||{})[me.DayPeriods=0]="DayPeriods",me[me.Days=1]="Days",me[me.Months=2]="Months",me[me.Eras=3]="Eras",me))();function $e(p,D,h,C){let x=function(p){if(ur(p))return p;if("number"==typeof p&&!isNaN(p))return new Date(p);if("string"==typeof p){if(p=p.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(p)){const[x,B=1,se=1]=p.split("-").map(Se=>+Se);return Ct(x,B-1,se)}const h=parseFloat(p);if(!isNaN(p-h))return new Date(h);let C;if(C=p.match(P))return function(p){const D=new Date(0);let h=0,C=0;const x=p[8]?D.setUTCFullYear:D.setFullYear,B=p[8]?D.setUTCHours:D.setHours;p[9]&&(h=Number(p[9]+p[10]),C=Number(p[9]+p[11])),x.call(D,Number(p[1]),Number(p[2])-1,Number(p[3]));const se=Number(p[4]||0)-h,Se=Number(p[5]||0)-C,Ze=Number(p[6]||0),Xe=Math.floor(1e3*parseFloat("0."+(p[7]||0)));return B.call(D,se,Se,Ze,Xe),D}(C)}const D=new Date(p);if(!ur(D))throw new Error(`Unable to convert "${p}" into a date`);return D}(p);D=Pt(h,D)||D;let Se,se=[];for(;D;){if(Se=Y.exec(D),!Se){se.push(D);break}{se=se.concat(Se.slice(1));const pt=se.pop();if(!pt)break;D=pt}}let Ze=x.getTimezoneOffset();C&&(Ze=Lr(C,Ze),x=function(p,D,h){const x=p.getTimezoneOffset();return function(p,D){return(p=new Date(p.getTime())).setMinutes(p.getMinutes()+D),p}(p,-1*(Lr(D,x)-x))}(x,C));let Xe="";return se.forEach(pt=>{const Je=function(p){if(at[p])return at[p];let D;switch(p){case"G":case"GG":case"GGG":D=Pe(me.Eras,K.Abbreviated);break;case"GGGG":D=Pe(me.Eras,K.Wide);break;case"GGGGG":D=Pe(me.Eras,K.Narrow);break;case"y":D=He(he.FullYear,1,0,!1,!0);break;case"yy":D=He(he.FullYear,2,0,!0,!0);break;case"yyy":D=He(he.FullYear,3,0,!1,!0);break;case"yyyy":D=He(he.FullYear,4,0,!1,!0);break;case"Y":D=Tr(1);break;case"YY":D=Tr(2,!0);break;case"YYY":D=Tr(3);break;case"YYYY":D=Tr(4);break;case"M":case"L":D=He(he.Month,1,1);break;case"MM":case"LL":D=He(he.Month,2,1);break;case"MMM":D=Pe(me.Months,K.Abbreviated);break;case"MMMM":D=Pe(me.Months,K.Wide);break;case"MMMMM":D=Pe(me.Months,K.Narrow);break;case"LLL":D=Pe(me.Months,K.Abbreviated,U.Standalone);break;case"LLLL":D=Pe(me.Months,K.Wide,U.Standalone);break;case"LLLLL":D=Pe(me.Months,K.Narrow,U.Standalone);break;case"w":D=$n(1);break;case"ww":D=$n(2);break;case"W":D=$n(1,!0);break;case"d":D=He(he.Date,1);break;case"dd":D=He(he.Date,2);break;case"c":case"cc":D=He(he.Day,1);break;case"ccc":D=Pe(me.Days,K.Abbreviated,U.Standalone);break;case"cccc":D=Pe(me.Days,K.Wide,U.Standalone);break;case"ccccc":D=Pe(me.Days,K.Narrow,U.Standalone);break;case"cccccc":D=Pe(me.Days,K.Short,U.Standalone);break;case"E":case"EE":case"EEE":D=Pe(me.Days,K.Abbreviated);break;case"EEEE":D=Pe(me.Days,K.Wide);break;case"EEEEE":D=Pe(me.Days,K.Narrow);break;case"EEEEEE":D=Pe(me.Days,K.Short);break;case"a":case"aa":case"aaa":D=Pe(me.DayPeriods,K.Abbreviated);break;case"aaaa":D=Pe(me.DayPeriods,K.Wide);break;case"aaaaa":D=Pe(me.DayPeriods,K.Narrow);break;case"b":case"bb":case"bbb":D=Pe(me.DayPeriods,K.Abbreviated,U.Standalone,!0);break;case"bbbb":D=Pe(me.DayPeriods,K.Wide,U.Standalone,!0);break;case"bbbbb":D=Pe(me.DayPeriods,K.Narrow,U.Standalone,!0);break;case"B":case"BB":case"BBB":D=Pe(me.DayPeriods,K.Abbreviated,U.Format,!0);break;case"BBBB":D=Pe(me.DayPeriods,K.Wide,U.Format,!0);break;case"BBBBB":D=Pe(me.DayPeriods,K.Narrow,U.Format,!0);break;case"h":D=He(he.Hours,1,-12);break;case"hh":D=He(he.Hours,2,-12);break;case"H":D=He(he.Hours,1);break;case"HH":D=He(he.Hours,2);break;case"m":D=He(he.Minutes,1);break;case"mm":D=He(he.Minutes,2);break;case"s":D=He(he.Seconds,1);break;case"ss":D=He(he.Seconds,2);break;case"S":D=He(he.FractionalSeconds,1);break;case"SS":D=He(he.FractionalSeconds,2);break;case"SSS":D=He(he.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":D=_n(Ee.Short);break;case"ZZZZZ":D=_n(Ee.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":D=_n(Ee.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":D=_n(Ee.Long);break;default:return null}return at[p]=D,D}(pt);Xe+=Je?Je(x,h,Ze):"''"===pt?"'":pt.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),Xe}function Ct(p,D,h){const C=new Date(0);return C.setFullYear(p,D,h),C.setHours(0,0,0),C}function Pt(p,D){const h=function(p){return(0,y.cg1)(p)[y.wAp.LocaleId]}(p);if(ie[h]=ie[h]||{},ie[h][D])return ie[h][D];let C="";switch(D){case"shortDate":C=Zt(p,$.Short);break;case"mediumDate":C=Zt(p,$.Medium);break;case"longDate":C=Zt(p,$.Long);break;case"fullDate":C=Zt(p,$.Full);break;case"shortTime":C=vt(p,$.Short);break;case"mediumTime":C=vt(p,$.Medium);break;case"longTime":C=vt(p,$.Long);break;case"fullTime":C=vt(p,$.Full);break;case"short":const x=Pt(p,"shortTime"),B=Pt(p,"shortDate");C=_t(it(p,$.Short),[x,B]);break;case"medium":const se=Pt(p,"mediumTime"),Se=Pt(p,"mediumDate");C=_t(it(p,$.Medium),[se,Se]);break;case"long":const Ze=Pt(p,"longTime"),Xe=Pt(p,"longDate");C=_t(it(p,$.Long),[Ze,Xe]);break;case"full":const pt=Pt(p,"fullTime"),Je=Pt(p,"fullDate");C=_t(it(p,$.Full),[pt,Je])}return C&&(ie[h][D]=C),C}function _t(p,D){return D&&(p=p.replace(/\{([^}]+)}/g,function(h,C){return null!=D&&C in D?D[C]:h})),p}function Ae(p,D,h="-",C,x){let B="";(p<0||x&&p<=0)&&(x?p=1-p:(p=-p,B=h));let se=String(p);for(;se.length<D;)se="0"+se;return C&&(se=se.substr(se.length-D)),B+se}function He(p,D,h=0,C=!1,x=!1){return function(B,se){let Se=function(p,D){switch(p){case he.FullYear:return D.getFullYear();case he.Month:return D.getMonth();case he.Date:return D.getDate();case he.Hours:return D.getHours();case he.Minutes:return D.getMinutes();case he.Seconds:return D.getSeconds();case he.FractionalSeconds:return D.getMilliseconds();case he.Day:return D.getDay();default:throw new Error(`Unknown DateType value "${p}".`)}}(p,B);if((h>0||Se>-h)&&(Se+=h),p===he.Hours)0===Se&&-12===h&&(Se=12);else if(p===he.FractionalSeconds)return function(p,D){return Ae(p,3).substr(0,D)}(Se,D);const Ze=Ht(se,H.MinusSign);return Ae(Se,D,Ze,C,x)}}function Pe(p,D,h=U.Format,C=!1){return function(x,B){return function(p,D,h,C,x,B){switch(h){case me.Months:return function(p,D,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.MonthsFormat],C[y.wAp.MonthsStandalone]],D);return yt(B,h)}(D,x,C)[p.getMonth()];case me.Days:return function(p,D,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.DaysFormat],C[y.wAp.DaysStandalone]],D);return yt(B,h)}(D,x,C)[p.getDay()];case me.DayPeriods:const se=p.getHours(),Se=p.getMinutes();if(B){const Xe=function(p){const D=(0,y.cg1)(p);return bt(D),(D[y.wAp.ExtraData][2]||[]).map(C=>"string"==typeof C?En(C):[En(C[0]),En(C[1])])}(D),pt=function(p,D,h){const C=(0,y.cg1)(p);bt(C);const B=yt([C[y.wAp.ExtraData][0],C[y.wAp.ExtraData][1]],D)||[];return yt(B,h)||[]}(D,x,C),Je=Xe.findIndex(gt=>{if(Array.isArray(gt)){const[tt,Bt]=gt,Kn=se>=tt.hours&&Se>=tt.minutes,Yn=se<Bt.hours||se===Bt.hours&&Se<Bt.minutes;if(tt.hours<Bt.hours){if(Kn&&Yn)return!0}else if(Kn||Yn)return!0}else if(gt.hours===se&&gt.minutes===Se)return!0;return!1});if(-1!==Je)return pt[Je]}return function(p,D,h){const C=(0,y.cg1)(p),B=yt([C[y.wAp.DayPeriodsFormat],C[y.wAp.DayPeriodsStandalone]],D);return yt(B,h)}(D,x,C)[se<12?0:1];case me.Eras:return function(p,D){return yt((0,y.cg1)(p)[y.wAp.Eras],D)}(D,C)[p.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${h}`)}}(x,B,p,D,h,C)}}function _n(p){return function(D,h,C){const x=-1*C,B=Ht(h,H.MinusSign),se=x>0?Math.floor(x/60):Math.ceil(x/60);switch(p){case Ee.Short:return(x>=0?"+":"")+Ae(se,2,B)+Ae(Math.abs(x%60),2,B);case Ee.ShortGMT:return"GMT"+(x>=0?"+":"")+Ae(se,1,B);case Ee.Long:return"GMT"+(x>=0?"+":"")+Ae(se,2,B)+":"+Ae(Math.abs(x%60),2,B);case Ee.Extended:return 0===C?"Z":(x>=0?"+":"")+Ae(se,2,B)+":"+Ae(Math.abs(x%60),2,B);default:throw new Error(`Unknown zone width "${p}"`)}}}function sr(p){return Ct(p.getFullYear(),p.getMonth(),p.getDate()+(4-p.getDay()))}function $n(p,D=!1){return function(h,C){let x;if(D){const B=new Date(h.getFullYear(),h.getMonth(),1).getDay()-1,se=h.getDate();x=1+Math.floor((se+B)/7)}else{const B=sr(h),se=function(p){const D=Ct(p,0,1).getDay();return Ct(p,0,1+(D<=4?4:11)-D)}(B.getFullYear()),Se=B.getTime()-se.getTime();x=1+Math.round(Se/6048e5)}return Ae(x,p,Ht(C,H.MinusSign))}}function Tr(p,D=!1){return function(h,C){return Ae(sr(h).getFullYear(),p,Ht(C,H.MinusSign),D)}}const at={};function Lr(p,D){p=p.replace(/:/g,"");const h=Date.parse("Jan 01, 1970 00:00:00 "+p)/6e4;return isNaN(h)?D:h}function ur(p){return p instanceof Date&&!isNaN(p.valueOf())}
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
class ze{}let Yt=(()=>{class p extends ze{constructor(h){super(),this.locale=h}getPluralCategory(h,C){switch(mt(C||this.locale)(h)){case k.Zero:return"zero";case k.One:return"one";case k.Two:return"two";case k.Few:return"few";case k.Many:return"many";default:return"other"}}}return p.\u0275fac=function(h){return new(h||p)(y.LFG(y.soG))},p.\u0275prov=y.Yz7({token:p,factory:p.\u0275fac}),p})();
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
function It(p,D){D=encodeURIComponent(D);for(const h of p.split(";")){const C=h.indexOf("="),[x,B]=-1==C?[h,""]:[h.slice(0,C),h.slice(C+1)];if(x.trim()===D)return decodeURIComponent(B)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rn=(()=>{class p{constructor(h,C,x,B){this._iterableDiffers=h,this._keyValueDiffers=C,this._ngEl=x,this._renderer=B,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(h){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof h?h.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(h){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof h?h.split(/\s+/):h,this._rawClass&&((0,y.sIi)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const h=this._iterableDiffer.diff(this._rawClass);h&&this._applyIterableChanges(h)}else if(this._keyValueDiffer){const h=this._keyValueDiffer.diff(this._rawClass);h&&this._applyKeyValueChanges(h)}}_applyKeyValueChanges(h){h.forEachAddedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachChangedItem(C=>this._toggleClass(C.key,C.currentValue)),h.forEachRemovedItem(C=>{C.previousValue&&this._toggleClass(C.key,!1)})}_applyIterableChanges(h){h.forEachAddedItem(C=>{if("string"!=typeof C.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,y.AaK)(C.item)}`);this._toggleClass(C.item,!0)}),h.forEachRemovedItem(C=>this._toggleClass(C.item,!1))}_applyClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!0)):Object.keys(h).forEach(C=>this._toggleClass(C,!!h[C])))}_removeClasses(h){h&&(Array.isArray(h)||h instanceof Set?h.forEach(C=>this._toggleClass(C,!1)):Object.keys(h).forEach(C=>this._toggleClass(C,!1)))}_toggleClass(h,C){(h=h.trim())&&h.split(/\s+/g).forEach(x=>{C?this._renderer.addClass(this._ngEl.nativeElement,x):this._renderer.removeClass(this._ngEl.nativeElement,x)})}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.ZZ4),y.Y36(y.aQg),y.Y36(y.SBq),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),p})();
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
class xn{constructor(D,h,C,x){this.$implicit=D,this.ngForOf=h,this.index=C,this.count=x}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Gn=(()=>{class p{constructor(h,C,x){this._viewContainer=h,this._template=C,this._differs=x,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(h){this._ngForOf=h,this._ngForOfDirty=!0}set ngForTrackBy(h){this._trackByFn=h}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(h){h&&(this._template=h)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const h=this._ngForOf;!this._differ&&h&&(this._differ=this._differs.find(h).create(this.ngForTrackBy))}if(this._differ){const h=this._differ.diff(this._ngForOf);h&&this._applyChanges(h)}}_applyChanges(h){const C=this._viewContainer;h.forEachOperation((x,B,se)=>{if(null==x.previousIndex)C.createEmbeddedView(this._template,new xn(x.item,this._ngForOf,-1,-1),null===se?void 0:se);else if(null==se)C.remove(null===B?void 0:B);else if(null!==B){const Se=C.get(B);C.move(Se,se),Ke(Se,x)}});for(let x=0,B=C.length;x<B;x++){const Se=C.get(x).context;Se.index=x,Se.count=B,Se.ngForOf=this._ngForOf}h.forEachIdentityChange(x=>{Ke(C.get(x.currentIndex),x)})}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(y.ZZ4))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),p})();function Ke(p,D){p.context.$implicit=D.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Wn=(()=>{class p{constructor(h,C){this._viewContainer=h,this._context=new Xr,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=C}set ngIf(h){this._context.$implicit=this._context.ngIf=h,this._updateView()}set ngIfThen(h){Pn("ngIfThen",h),this._thenTemplateRef=h,this._thenViewRef=null,this._updateView()}set ngIfElse(h){Pn("ngIfElse",h),this._elseTemplateRef=h,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(h,C){return!0}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),p})();class Xr{constructor(){this.$implicit=null,this.ngIf=null}}function Pn(p,D){if(D&&!D.createEmbeddedView)throw new Error(`${p} must be a TemplateRef, but received '${(0,y.AaK)(D)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Tt{constructor(D,h){this._viewContainerRef=D,this._templateRef=h,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(D){D&&!this._created?this.create():!D&&this._created&&this.destroy()}}let Dn=(()=>{class p{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(h){this._ngSwitch=h,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(h){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(h)}_matchCase(h){const C=h==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||C,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),C}_updateDefaultCases(h){if(this._defaultViews&&h!==this._defaultUsed){this._defaultUsed=h;for(let C=0;C<this._defaultViews.length;C++)this._defaultViews[C].enforceState(h)}}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),p})(),$t=(()=>{class p{constructor(h,C,x){this.ngSwitch=x,x._addCase(),this._view=new Tt(h,C)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.s_b),y.Y36(y.Rgc),y.Y36(Dn,9))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),p})(),jt=(()=>{class p{constructor(h,C,x){this._ngEl=h,this._differs=C,this._renderer=x,this._ngStyle=null,this._differ=null}set ngStyle(h){this._ngStyle=h,!this._differ&&h&&(this._differ=this._differs.find(h).create())}ngDoCheck(){if(this._differ){const h=this._differ.diff(this._ngStyle);h&&this._applyChanges(h)}}_setStyle(h,C){const[x,B]=h.split(".");null!=(C=null!=C&&B?`${C}${B}`:C)?this._renderer.setStyle(this._ngEl.nativeElement,x,C):this._renderer.removeStyle(this._ngEl.nativeElement,x)}_applyChanges(h){h.forEachRemovedItem(C=>this._setStyle(C.key,null)),h.forEachAddedItem(C=>this._setStyle(C.key,C.currentValue)),h.forEachChangedItem(C=>this._setStyle(C.key,C.currentValue))}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.SBq),y.Y36(y.aQg),y.Y36(y.Qsj))},p.\u0275dir=y.lG2({type:p,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),p})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ot(p,D){return Error(`InvalidPipeArgument: '${D}' for pipe '${(0,y.AaK)(p)}'`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rr{createSubscription(D,h){return D.subscribe({next:h,error:C=>{throw C}})}dispose(D){D.unsubscribe()}onDestroy(D){D.unsubscribe()}}class Xt{createSubscription(D,h){return D.then(h,C=>{throw C})}dispose(D){}onDestroy(D){}}const _o=new Xt,wo=new Rr;let Br=(()=>{class p{constructor(h){this._ref=h,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(h){return this._obj?h!==this._obj?(this._dispose(),this.transform(h)):this._latestValue:(h&&this._subscribe(h),this._latestValue)}_subscribe(h){this._obj=h,this._strategy=this._selectStrategy(h),this._subscription=this._strategy.createSubscription(h,C=>this._updateLatestValue(h,C))}_selectStrategy(h){if((0,y.QGY)(h))return _o;if((0,y.F4k)(h))return wo;throw Ot(p,h)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(h,C){h===this._obj&&(this._latestValue=C,this._ref.markForCheck())}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.sBO,16))},p.\u0275pipe=y.Yjl({name:"async",type:p,pure:!1}),p})();
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
const Ms=new y.OlP("DATE_PIPE_DEFAULT_TIMEZONE");let Hr=(()=>{class p{constructor(h,C){this.locale=h,this.defaultTimezone=C}transform(h,C="mediumDate",x,B){var se;if(null==h||""===h||h!=h)return null;try{return $e(h,C,B||this.locale,null!==(se=null!=x?x:this.defaultTimezone)&&void 0!==se?se:void 0)}catch(Se){throw Ot(p,Se.message)}}}return p.\u0275fac=function(h){return new(h||p)(y.Y36(y.soG,16),y.Y36(Ms,24))},p.\u0275pipe=y.Yjl({name:"date",type:p,pure:!0}),p})(),Fn=(()=>{class p{}return p.\u0275fac=function(h){return new(h||p)},p.\u0275mod=y.oAB({type:p}),p.\u0275inj=y.cJS({providers:[{provide:ze,useClass:Yt}]}),p})();
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
let Si=(()=>{class p{}return p.\u0275prov=(0,y.Yz7)({token:p,providedIn:"root",factory:()=>new un((0,y.LFG)(re),window)}),p})();class un{constructor(D,h){this.document=D,this.window=h,this.offset=()=>[0,0]}setOffset(D){this.offset=Array.isArray(D)?()=>D:D}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(D){this.supportsScrolling()&&this.window.scrollTo(D[0],D[1])}scrollToAnchor(D){if(!this.supportsScrolling())return;const h=function(p,D){const h=p.getElementById(D)||p.getElementsByName(D)[0];if(h)return h;if("function"==typeof p.createTreeWalker&&p.body&&(p.body.createShadowRoot||p.body.attachShadow)){const C=p.createTreeWalker(p.body,NodeFilter.SHOW_ELEMENT);let x=C.currentNode;for(;x;){const B=x.shadowRoot;if(B){const se=B.getElementById(D)||B.querySelector(`[name="${D}"]`);if(se)return se}x=C.nextNode()}}return null}(this.document,D);h&&(this.scrollToElement(h),this.attemptFocus(h))}setHistoryScrollRestoration(D){if(this.supportScrollRestoration()){const h=this.window.history;h&&h.scrollRestoration&&(h.scrollRestoration=D)}}scrollToElement(D){const h=D.getBoundingClientRect(),C=h.left+this.window.pageXOffset,x=h.top+this.window.pageYOffset,B=this.offset();this.window.scrollTo(C-B[0],x-B[1])}attemptFocus(D){return D.focus(),this.document.activeElement===D}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const D=oo(this.window.history)||oo(Object.getPrototypeOf(this.window.history));return!(!D||!D.writable&&!D.set)}catch(D){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(D){return!1}}}function oo(p){return Object.getOwnPropertyDescriptor(p,"scrollRestoration")}
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
       */},520:(Be,oe,b)=>{b.d(oe,{TP:()=>et,eN:()=>H,JF:()=>yt});var y=b(9808),T=b(7587),te=b(9646),Z=b(8306),X=b(4351),De=b(9300),re=b(4004);
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
       */class ce{}class G{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class W{constructor(I){this.normalizedNames=new Map,this.lazyUpdate=null,I?this.lazyInit="string"==typeof I?()=>{this.headers=new Map,I.split("\n").forEach(P=>{const ie=P.indexOf(":");if(ie>0){const Y=P.slice(0,ie),Ee=Y.toLowerCase(),he=P.slice(ie+1).trim();this.maybeSetNormalizedName(Y,Ee),this.headers.has(Ee)?this.headers.get(Ee).push(he):this.headers.set(Ee,[he])}})}:()=>{this.headers=new Map,Object.keys(I).forEach(P=>{let ie=I[P];const Y=P.toLowerCase();"string"==typeof ie&&(ie=[ie]),ie.length>0&&(this.headers.set(Y,ie),this.maybeSetNormalizedName(P,Y))})}:this.headers=new Map}has(I){return this.init(),this.headers.has(I.toLowerCase())}get(I){this.init();const P=this.headers.get(I.toLowerCase());return P&&P.length>0?P[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(I){return this.init(),this.headers.get(I.toLowerCase())||null}append(I,P){return this.clone({name:I,value:P,op:"a"})}set(I,P){return this.clone({name:I,value:P,op:"s"})}delete(I,P){return this.clone({name:I,value:P,op:"d"})}maybeSetNormalizedName(I,P){this.normalizedNames.has(P)||this.normalizedNames.set(P,I)}init(){this.lazyInit&&(this.lazyInit instanceof W?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(I=>this.applyUpdate(I)),this.lazyUpdate=null))}copyFrom(I){I.init(),Array.from(I.headers.keys()).forEach(P=>{this.headers.set(P,I.headers.get(P)),this.normalizedNames.set(P,I.normalizedNames.get(P))})}clone(I){const P=new W;return P.lazyInit=this.lazyInit&&this.lazyInit instanceof W?this.lazyInit:this,P.lazyUpdate=(this.lazyUpdate||[]).concat([I]),P}applyUpdate(I){const P=I.name.toLowerCase();switch(I.op){case"a":case"s":let ie=I.value;if("string"==typeof ie&&(ie=[ie]),0===ie.length)return;this.maybeSetNormalizedName(I.name,P);const Y=("a"===I.op?this.headers.get(P):void 0)||[];Y.push(...ie),this.headers.set(P,Y);break;case"d":const Ee=I.value;if(Ee){let he=this.headers.get(P);if(!he)return;he=he.filter(me=>-1===Ee.indexOf(me)),0===he.length?(this.headers.delete(P),this.normalizedNames.delete(P)):this.headers.set(P,he)}else this.headers.delete(P),this.normalizedNames.delete(P)}}forEach(I){this.init(),Array.from(this.normalizedNames.keys()).forEach(P=>I(this.normalizedNames.get(P),this.headers.get(P)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class N{encodeKey(I){return Ie(I)}encodeValue(I){return Ie(I)}decodeKey(I){return decodeURIComponent(I)}decodeValue(I){return decodeURIComponent(I)}}const de=/%(\d[a-f0-9])/gi,ue={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function Ie(q){return encodeURIComponent(q).replace(de,(I,P)=>{var ie;return null!==(ie=ue[P])&&void 0!==ie?ie:I})}function we(q){return`${q}`}class ee{constructor(I={}){if(this.updates=null,this.cloneFrom=null,this.encoder=I.encoder||new N,I.fromString){if(I.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(q,I){const P=new Map;return q.length>0&&q.replace(/^\?/,"").split("&").forEach(Y=>{const Ee=Y.indexOf("="),[he,me]=-1==Ee?[I.decodeKey(Y),""]:[I.decodeKey(Y.slice(0,Ee)),I.decodeValue(Y.slice(Ee+1))],$e=P.get(he)||[];$e.push(me),P.set(he,$e)}),P}(I.fromString,this.encoder)}else I.fromObject?(this.map=new Map,Object.keys(I.fromObject).forEach(P=>{const ie=I.fromObject[P];this.map.set(P,Array.isArray(ie)?ie:[ie])})):this.map=null}has(I){return this.init(),this.map.has(I)}get(I){this.init();const P=this.map.get(I);return P?P[0]:null}getAll(I){return this.init(),this.map.get(I)||null}keys(){return this.init(),Array.from(this.map.keys())}append(I,P){return this.clone({param:I,value:P,op:"a"})}appendAll(I){const P=[];return Object.keys(I).forEach(ie=>{const Y=I[ie];Array.isArray(Y)?Y.forEach(Ee=>{P.push({param:ie,value:Ee,op:"a"})}):P.push({param:ie,value:Y,op:"a"})}),this.clone(P)}set(I,P){return this.clone({param:I,value:P,op:"s"})}delete(I,P){return this.clone({param:I,value:P,op:"d"})}toString(){return this.init(),this.keys().map(I=>{const P=this.encoder.encodeKey(I);return this.map.get(I).map(ie=>P+"="+this.encoder.encodeValue(ie)).join("&")}).filter(I=>""!==I).join("&")}clone(I){const P=new ee({encoder:this.encoder});return P.cloneFrom=this.cloneFrom||this,P.updates=(this.updates||[]).concat(I),P}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(I=>this.map.set(I,this.cloneFrom.map.get(I))),this.updates.forEach(I=>{switch(I.op){case"a":case"s":const P=("a"===I.op?this.map.get(I.param):void 0)||[];P.push(we(I.value)),this.map.set(I.param,P);break;case"d":if(void 0===I.value){this.map.delete(I.param);break}{let ie=this.map.get(I.param)||[];const Y=ie.indexOf(we(I.value));-1!==Y&&ie.splice(Y,1),ie.length>0?this.map.set(I.param,ie):this.map.delete(I.param)}}}),this.cloneFrom=this.updates=null)}}
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
       */function ve(q){return"undefined"!=typeof ArrayBuffer&&q instanceof ArrayBuffer}function xe(q){return"undefined"!=typeof Blob&&q instanceof Blob}function ae(q){return"undefined"!=typeof FormData&&q instanceof FormData}class be{constructor(I,P,ie,Y){let Ee;if(this.url=P,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=I.toUpperCase(),function(q){switch(q){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||Y?(this.body=void 0!==ie?ie:null,Ee=Y):Ee=ie,Ee&&(this.reportProgress=!!Ee.reportProgress,this.withCredentials=!!Ee.withCredentials,Ee.responseType&&(this.responseType=Ee.responseType),Ee.headers&&(this.headers=Ee.headers),Ee.context&&(this.context=Ee.context),Ee.params&&(this.params=Ee.params)),this.headers||(this.headers=new W),this.context||(this.context=new Te),this.params){const he=this.params.toString();if(0===he.length)this.urlWithParams=P;else{const me=P.indexOf("?");this.urlWithParams=P+(-1===me?"?":me<P.length-1?"&":"")+he}}else this.params=new ee,this.urlWithParams=P}serializeBody(){return null===this.body?null:ve(this.body)||xe(this.body)||ae(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof ee?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ae(this.body)?null:xe(this.body)?this.body.type||null:ve(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof ee?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(I={}){var P;const ie=I.method||this.method,Y=I.url||this.url,Ee=I.responseType||this.responseType,he=void 0!==I.body?I.body:this.body,me=void 0!==I.withCredentials?I.withCredentials:this.withCredentials,$e=void 0!==I.reportProgress?I.reportProgress:this.reportProgress;let Ct=I.headers||this.headers,Pt=I.params||this.params;const _t=null!==(P=I.context)&&void 0!==P?P:this.context;return void 0!==I.setHeaders&&(Ct=Object.keys(I.setHeaders).reduce((Ae,nt)=>Ae.set(nt,I.setHeaders[nt]),Ct)),I.setParams&&(Pt=Object.keys(I.setParams).reduce((Ae,nt)=>Ae.set(nt,I.setParams[nt]),Pt)),new be(ie,Y,he,{params:Pt,headers:Ct,context:_t,reportProgress:$e,responseType:Ee,withCredentials:me})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ge=(()=>((ge=ge||{})[ge.Sent=0]="Sent",ge[ge.UploadProgress=1]="UploadProgress",ge[ge.ResponseHeader=2]="ResponseHeader",ge[ge.DownloadProgress=3]="DownloadProgress",ge[ge.Response=4]="Response",ge[ge.User=5]="User",ge))();class j{constructor(I,P=200,ie="OK"){this.headers=I.headers||new W,this.status=void 0!==I.status?I.status:P,this.statusText=I.statusText||ie,this.url=I.url||null,this.ok=this.status>=200&&this.status<300}}class k extends j{constructor(I={}){super(I),this.type=ge.ResponseHeader}clone(I={}){return new k({headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class U extends j{constructor(I={}){super(I),this.type=ge.Response,this.body=void 0!==I.body?I.body:null}clone(I={}){return new U({body:void 0!==I.body?I.body:this.body,headers:I.headers||this.headers,status:void 0!==I.status?I.status:this.status,statusText:I.statusText||this.statusText,url:I.url||this.url||void 0})}}class K extends j{constructor(I){super(I,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${I.url||"(unknown url)"}`:`Http failure response for ${I.url||"(unknown url)"}: ${I.status} ${I.statusText}`,this.error=I.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(q,I){return{body:I,headers:q.headers,context:q.context,observe:q.observe,params:q.params,reportProgress:q.reportProgress,responseType:q.responseType,withCredentials:q.withCredentials}}let H=(()=>{class q{constructor(P){this.handler=P}request(P,ie,Y={}){let Ee;if(P instanceof be)Ee=P;else{let $e,Ct;$e=Y.headers instanceof W?Y.headers:new W(Y.headers),Y.params&&(Ct=Y.params instanceof ee?Y.params:new ee({fromObject:Y.params})),Ee=new be(P,ie,void 0!==Y.body?Y.body:null,{headers:$e,context:Y.context,params:Ct,reportProgress:Y.reportProgress,responseType:Y.responseType||"json",withCredentials:Y.withCredentials})}const he=(0,te.of)(Ee).pipe((0,X.b)($e=>this.handler.handle($e)));if(P instanceof be||"events"===Y.observe)return he;const me=he.pipe((0,De.h)($e=>$e instanceof U));switch(Y.observe||"body"){case"body":switch(Ee.responseType){case"arraybuffer":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&!($e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return $e.body}));case"blob":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&!($e.body instanceof Blob))throw new Error("Response is not a Blob.");return $e.body}));case"text":return me.pipe((0,re.U)($e=>{if(null!==$e.body&&"string"!=typeof $e.body)throw new Error("Response is not a string.");return $e.body}));default:return me.pipe((0,re.U)($e=>$e.body))}case"response":return me;default:throw new Error(`Unreachable: unhandled observe type ${Y.observe}}`)}}delete(P,ie={}){return this.request("DELETE",P,ie)}get(P,ie={}){return this.request("GET",P,ie)}head(P,ie={}){return this.request("HEAD",P,ie)}jsonp(P,ie){return this.request("JSONP",P,{params:(new ee).append(ie,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(P,ie={}){return this.request("OPTIONS",P,ie)}patch(P,ie,Y={}){return this.request("PATCH",P,$(Y,ie))}post(P,ie,Y={}){return this.request("POST",P,$(Y,ie))}put(P,ie,Y={}){return this.request("PUT",P,$(Y,ie))}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(ce))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Le{constructor(I,P){this.next=I,this.interceptor=P}handle(I){return this.interceptor.intercept(I,this.next)}}const et=new T.OlP("HTTP_INTERCEPTORS");let Mt=(()=>{class q{intercept(P,ie){return ie.handle(P)}}return q.\u0275fac=function(P){return new(P||q)},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const it=/^\)\]\}',?\n/;let Vn=(()=>{class q{constructor(P){this.xhrFactory=P}handle(P){if("JSONP"===P.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new Z.y(ie=>{const Y=this.xhrFactory.build();if(Y.open(P.method,P.urlWithParams),P.withCredentials&&(Y.withCredentials=!0),P.headers.forEach((nt,He)=>Y.setRequestHeader(nt,He.join(","))),P.headers.has("Accept")||Y.setRequestHeader("Accept","application/json, text/plain, */*"),!P.headers.has("Content-Type")){const nt=P.detectContentTypeHeader();null!==nt&&Y.setRequestHeader("Content-Type",nt)}if(P.responseType){const nt=P.responseType.toLowerCase();Y.responseType="json"!==nt?nt:"text"}const Ee=P.serializeBody();let he=null;const me=()=>{if(null!==he)return he;const nt=1223===Y.status?204:Y.status,He=Y.statusText||"OK",Cn=new W(Y.getAllResponseHeaders()),Pe=function(q){return"responseURL"in q&&q.responseURL?q.responseURL:/^X-Request-URL:/m.test(q.getAllResponseHeaders())?q.getResponseHeader("X-Request-URL"):null}(Y)||P.url;return he=new k({headers:Cn,status:nt,statusText:He,url:Pe}),he},$e=()=>{let{headers:nt,status:He,statusText:Cn,url:Pe}=me(),Ft=null;204!==He&&(Ft=void 0===Y.response?Y.responseText:Y.response),0===He&&(He=Ft?200:0);let _n=He>=200&&He<300;if("json"===P.responseType&&"string"==typeof Ft){const wn=Ft;Ft=Ft.replace(it,"");try{Ft=""!==Ft?JSON.parse(Ft):null}catch(We){Ft=wn,_n&&(_n=!1,Ft={error:We,text:Ft})}}_n?(ie.next(new U({body:Ft,headers:nt,status:He,statusText:Cn,url:Pe||void 0})),ie.complete()):ie.error(new K({error:Ft,headers:nt,status:He,statusText:Cn,url:Pe||void 0}))},Ct=nt=>{const{url:He}=me(),Cn=new K({error:nt,status:Y.status||0,statusText:Y.statusText||"Unknown Error",url:He||void 0});ie.error(Cn)};let Pt=!1;const _t=nt=>{Pt||(ie.next(me()),Pt=!0);let He={type:ge.DownloadProgress,loaded:nt.loaded};nt.lengthComputable&&(He.total=nt.total),"text"===P.responseType&&!!Y.responseText&&(He.partialText=Y.responseText),ie.next(He)},Ae=nt=>{let He={type:ge.UploadProgress,loaded:nt.loaded};nt.lengthComputable&&(He.total=nt.total),ie.next(He)};return Y.addEventListener("load",$e),Y.addEventListener("error",Ct),Y.addEventListener("timeout",Ct),Y.addEventListener("abort",Ct),P.reportProgress&&(Y.addEventListener("progress",_t),null!==Ee&&Y.upload&&Y.upload.addEventListener("progress",Ae)),Y.send(Ee),ie.next({type:ge.Sent}),()=>{Y.removeEventListener("error",Ct),Y.removeEventListener("abort",Ct),Y.removeEventListener("load",$e),Y.removeEventListener("timeout",Ct),P.reportProgress&&(Y.removeEventListener("progress",_t),null!==Ee&&Y.upload&&Y.upload.removeEventListener("progress",Ae)),Y.readyState!==Y.DONE&&Y.abort()}})}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(y.JF))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pn=new T.OlP("XSRF_COOKIE_NAME"),Dt=new T.OlP("XSRF_HEADER_NAME");class Sn{}let Jt=(()=>{class q{constructor(P,ie,Y){this.doc=P,this.platform=ie,this.cookieName=Y,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const P=this.doc.cookie||"";return P!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,y.Mx)(P,this.cookieName),this.lastCookieString=P),this.lastToken}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(y.K0),T.LFG(T.Lbi),T.LFG(pn))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),mt=(()=>{class q{constructor(P,ie){this.tokenService=P,this.headerName=ie}intercept(P,ie){const Y=P.url.toLowerCase();if("GET"===P.method||"HEAD"===P.method||Y.startsWith("http://")||Y.startsWith("https://"))return ie.handle(P);const Ee=this.tokenService.getToken();return null!==Ee&&!P.headers.has(this.headerName)&&(P=P.clone({headers:P.headers.set(this.headerName,Ee)})),ie.handle(P)}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(Sn),T.LFG(Dt))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),bt=(()=>{class q{constructor(P,ie){this.backend=P,this.injector=ie,this.chain=null}handle(P){if(null===this.chain){const ie=this.injector.get(et,[]);this.chain=ie.reduceRight((Y,Ee)=>new Le(Y,Ee),this.backend)}return this.chain.handle(P)}}return q.\u0275fac=function(P){return new(P||q)(T.LFG(G),T.LFG(T.zs3))},q.\u0275prov=T.Yz7({token:q,factory:q.\u0275fac}),q})(),or=(()=>{class q{static disable(){return{ngModule:q,providers:[{provide:mt,useClass:Mt}]}}static withOptions(P={}){return{ngModule:q,providers:[P.cookieName?{provide:pn,useValue:P.cookieName}:[],P.headerName?{provide:Dt,useValue:P.headerName}:[]]}}}return q.\u0275fac=function(P){return new(P||q)},q.\u0275mod=T.oAB({type:q}),q.\u0275inj=T.cJS({providers:[mt,{provide:et,useExisting:mt,multi:!0},{provide:Sn,useClass:Jt},{provide:pn,useValue:"XSRF-TOKEN"},{provide:Dt,useValue:"X-XSRF-TOKEN"}]}),q})(),yt=(()=>{class q{}return q.\u0275fac=function(P){return new(P||q)},q.\u0275mod=T.oAB({type:q}),q.\u0275inj=T.cJS({providers:[H,{provide:ce,useClass:bt},Vn,{provide:G,useExisting:Vn}],imports:[[or.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),q})();
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
       */,7587:(Be,oe,b)=>{b.d(oe,{deG:()=>wg,tb:()=>Zp,AFp:()=>Yp,ip1:()=>Nl,CZH:()=>Ei,hGG:()=>z0,z2F:()=>_s,sBO:()=>D0,Sil:()=>kl,_Vd:()=>gs,EJc:()=>Xp,SBq:()=>ms,qLn:()=>ts,vpe:()=>Mr,tBr:()=>Qi,XFs:()=>I,OlP:()=>At,zs3:()=>Un,ZZ4:()=>Da,aQg:()=>Ea,soG:()=>ya,YKP:()=>sp,h0i:()=>yi,PXZ:()=>f0,R0b:()=>In,FiY:()=>go,Lbi:()=>qp,g9A:()=>Qp,Qsj:()=>KE,FYo:()=>np,JOm:()=>Er,tp0:()=>Wo,Rgc:()=>Es,dDg:()=>ng,GfV:()=>rp,s_b:()=>ha,ifc:()=>_t,eFA:()=>ig,G48:()=>v0,_c5:()=>k0,VLi:()=>u0,c2e:()=>Jp,zSh:()=>zu,wAp:()=>Ve,vHH:()=>_e,cg1:()=>fl,kL8:()=>Th,dqk:()=>Pe,sIi:()=>as,CqO:()=>xf,QGY:()=>sl,F4k:()=>Rf,RDi:()=>Ai,AaK:()=>de,TTD:()=>ro,xp6:()=>sd,uIk:()=>Zu,Tol:()=>eh,Suo:()=>Ip,Xpm:()=>kr,lG2:()=>sn,Yz7:()=>Dt,cJS:()=>Jt,oAB:()=>Ar,Yjl:()=>yn,Y36:()=>ls,_UZ:()=>Tf,qZA:()=>il,TgZ:()=>ol,LFG:()=>nn,$8M:()=>lt,$Z:()=>If,NdJ:()=>al,CRH:()=>Tp,kcU:()=>Ns,O4$:()=>Lo,oxw:()=>Nf,ALo:()=>yp,lcZ:()=>vp,xi3:()=>Dp,Q6J:()=>nl,VKq:()=>cp,kEZ:()=>dp,iGM:()=>Mp,MAs:()=>gf,LSH:()=>iu,kYT:()=>lr,YNc:()=>pf,W1O:()=>xp,_uU:()=>ah,Oqu:()=>dl,hij:()=>ia});var y=b(8189),T=b(8421),te=b(515),Z=b(3269),X=b(2076),re=b(7579),ce=b(727),G=b(8306),W=b(3099);
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
function de(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(de).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ue(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ie=N({__forward_ref__:N});function we(e){return e.__forward_ref__=we,e.toString=function(){return de(this())},e}function ee(e){return function(e){return"function"==typeof e&&e.hasOwnProperty(Ie)&&e.__forward_ref__===we}
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
       */function vt(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Dt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Jt(e){return{providers:e.providers||[],imports:e.imports||[]}}function mt(e){return bt(e,yt)||bt(e,Ir)}function bt(e,t){return e.hasOwnProperty(t)?e[t]:null}function or(e){return e&&(e.hasOwnProperty(En)||e.hasOwnProperty(q))?e[En]:null}const yt=N({\u0275prov:N}),En=N({\u0275inj:N}),Ir=N({ngInjectableDef:N}),q=N({ngInjectorDef:N});
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
       */let P;function Y(e){const t=P;return P=e,t}function Ee(e,t,n){const r=mt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&I.Optional?null:void 0!==t?t:void k(de(e),"Injector")}
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
const Ae="undefined"!=typeof globalThis&&globalThis,nt="undefined"!=typeof window&&window,He="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Pe=Ae||"undefined"!=typeof global&&global||nt||He,wn={},We=[],ir=N({\u0275cmp:N}),sr=N({\u0275dir:N}),$n=N({\u0275pipe:N}),Tr=N({\u0275mod:N}),at=N({\u0275fac:N}),Vt=N({__NG_ELEMENT_ID__:N});
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
let Lr=0;function kr(e){return me(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===$e.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||We,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||_t.Emulated,id:"c",styles:e.styles||We,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Lr++,r.inputs=An(e.inputs,n),r.outputs=An(e.outputs),i&&i.forEach(l=>l(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(ar):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(jr):null,r})}function ar(e){return Fe(e)||function(e){return e[sr]||null}(e)}function jr(e){return function(e){return e[$n]||null}(e)}const ur={};function Ar(e){return me(()=>{const t={type:e.type,bootstrap:e.bootstrap||We,declarations:e.declarations||We,imports:e.imports||We,exports:e.exports||We,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(ur[e.id]=e.type),t})}function lr(e,t){return me(()=>{const n=O(e,!0);n.declarations=t.declarations||We,n.imports=t.imports||We,n.exports=t.exports||We})}function An(e,t){if(null==e)return wn;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const sn=kr;function yn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function Fe(e){return e[ir]||null}function O(e,t){const n=e[Tr]||null;if(!n&&!0===t)throw new Error(`Type ${de(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jt(e){return Array.isArray(e)&&"object"==typeof e[1]}function an(e){return Array.isArray(e)&&!0===e[1]}function Co(e){return 0!=(8&e.flags)}function Ot(e){return 2==(2&e.flags)}function Rr(e){return 1==(1&e.flags)}function Xt(e){return null!==e.template}function _o(e){return 0!=(512&e[2])}
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
function Fn(e,t){return e.hasOwnProperty(at)?e[at]:null}
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
       */function ro(){return So}function So(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ao),Ii}function Ii(){const e=Ti(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===wn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ao(e,t,n,r){const o=Ti(e)||function(e,t){return e[Nn]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:wn,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new no(d&&d.currentValue,t,s===wn),e[r]=t}ro.ngInherit=!0;const Nn="__ngSimpleChanges__";function Ti(e){return e[Nn]||null}const oo="http://www.w3.org/2000/svg";
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
let fr;function Ai(e){fr=e}function h(e){return!!e.listen}const C={createRenderer:(e,t)=>void 0!==fr?fr:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B(e){for(;Array.isArray(e);)e=e[0];return e}function Ze(e,t){return B(t[e])}function Xe(e,t){return B(t[e.index])}function Je(e,t){return e.data[t]}function gt(e,t){return e[t]}function tt(e,t){const n=t[e];return jt(n)?n:n[0]}function Bt(e){return 4==(4&e[2])}function Kn(e){return 128==(128&e[2])}function Qt(e,t){return null==t?null:e[t]}function Ln(e){e[18]=0}function xr(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Ne={lFrame:Oi(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Rs(){return Ne.bindingsEnabled}function ne(){return Ne.lFrame.lView}function rt(){return Ne.lFrame.tView}function St(){let e=io();for(;null!==e&&64===e.type;)e=e.parent;return e}function io(){return Ne.lFrame.currentTNode}function kn(e,t){const n=Ne.lFrame;n.currentTNode=e,n.isParent=t}function $r(){return Ne.lFrame.isParent}function Fo(){return Ne.isInCheckNoChangesMode}function hr(e){Ne.isInCheckNoChangesMode=e}function en(){const e=Ne.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function zr(){return Ne.lFrame.bindingIndex++}function Sa(e,t){const n=Ne.lFrame;n.bindingIndex=n.bindingRootIndex=e,No(t)}function No(e){Ne.lFrame.currentDirectiveIndex=e}function Os(){return Ne.lFrame.currentQueryIndex}function Pi(e){Ne.lFrame.currentQueryIndex=e}function Ra(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Fs(e,t,n){if(n&I.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&I.Host||(o=Ra(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Ne.lFrame=xa();return r.currentTNode=t,r.lView=e,!0}function ao(e){const t=xa(),n=e[1];Ne.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xa(){const e=Ne.lFrame,t=null===e?null:e.child;return null===t?Oi(e):t}function Oi(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Fi(){const e=Ne.lFrame;return Ne.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ni=Fi;function uo(){const e=Fi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function tn(){return Ne.lFrame.selectedIndex}function pr(e){Ne.lFrame.selectedIndex=e}function wt(){const e=Ne.lFrame;return Je(e.tView,e.selectedIndex)}function Lo(){Ne.lFrame.currentNamespace=oo}function Ns(){Ne.lFrame.currentNamespace=null}function ko(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:v}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=v&&(e.destroyHooks||(e.destroyHooks=[])).push(n,v)}}function jo(e,t,n){ji(e,t,3,n)}function Bo(e,t,n,r){(3&e[2])===n&&ji(e,t,n,r)}function ki(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function ji(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(La(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function La(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zt{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Ho(e,t,n){const r=h(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],l=n[o++],d=n[o++];r?e.setAttribute(t,l,d,s):t.setAttributeNS(s,l,d)}else{const s=i,l=n[++o];Vo(s)?r&&e.setProperty(t,s,l):r?e.setAttribute(t,s,l):t.setAttribute(s,l),o++}}return o}function Bi(e){return 3===e||4===e||6===e}function Vo(e){return 64===e.charCodeAt(0)}function Wr(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Ua(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Ua(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mr(e){return-1!==e}function Or(e){return 32767&e}function Kr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ui=!0;function $o(e){const t=Ui;return Ui=e,t}let Va=0;function co(e,t){const n=Vi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,fo(r.data,e),fo(t,null),fo(r.blueprint,null));const o=zo(e,t),i=e.injectorIndex;if(mr(o)){const s=Or(o),l=Kr(o,t),d=l[1].data;for(let m=0;m<8;m++)t[i+m]=l[s+m]|d[s+m]}return t[i+8]=o,i}function fo(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Vi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function zo(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ho(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Vt)&&(r=n[Vt]),null==r&&(r=n[Vt]=Va++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Ga(e,t,n){if(n&I.Optional)return e;k(t,"NodeInjector")}function c(e,t,n,r){if(n&I.Optional&&void 0===r&&(r=null),0==(n&(I.Self|I.Host))){const o=e[9],i=Y(void 0);try{return o?o.get(t,r,n&I.Optional):Ee(t,r,n&I.Optional)}finally{Y(i)}}return Ga(r,t,n)}function u(e,t,n,r=I.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Vt)?e[Vt]:void 0;return"number"==typeof t?t>=0?255&t:f:t}(n);if("function"==typeof i){if(!Fs(t,e,r))return r&I.Host?Ga(o,n,r):c(t,n,r,o);try{const s=i(r);if(null!=s||r&I.Optional)return s;k(n)}finally{Ni()}}else if("number"==typeof i){let s=null,l=Vi(e,t),d=-1,m=r&I.Host?t[16][6]:null;for((-1===l||r&I.SkipSelf)&&(d=-1===l?zo(e,t):t[l+8],-1!==d&&Ce(r,!1)?(s=t[1],l=Or(d),t=Kr(d,t)):l=-1);-1!==l;){const v=t[1];if(V(i,l,v.data)){const _=g(l,t,n,s,r,m);if(_!==a)return _}d=t[l+8],-1!==d&&Ce(r,t[1].data[l+8]===m)&&V(i,l,t)?(s=v,l=Or(d),t=Kr(d,t)):l=-1}}}return c(t,n,r,o)}const a={};function f(){return new Ge(St(),ne())}function g(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],v=E(l,s,n,null==r?Ot(l)&&Ui:r!=s&&0!=(3&l.type),o&I.Host&&i===l);return null!==v?w(t,s,v,l):a}function E(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,v=i>>20,A=o?l+v:e.directiveEnd;for(let F=r?l:l+v;F<A;F++){const z=s[F];if(F<d&&n===z||F>=d&&z.type===n)return F}if(o){const F=s[d];if(F&&Xt(F)&&F.type===n)return d}return null}function w(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof zt}(o)){const s=o;s.resolving&&function(e,t){throw new _e("200",`Circular dependency in DI detected for ${e}`)}(qe(i[n]));const l=$o(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?Y(s.injectImpl):null;Fs(e,r,I.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=So(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&Y(d),$o(l),s.resolving=!1,Ni()}}return o}function V(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ce(e,t){return!(e&I.Self||e&I.Host&&t)}class Ge{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return u(this._tNode,this._lView,t,r,n)}}
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
class At{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=Dt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wg=new At("AnalyzeForEntryComponents");function Bn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Bn(r,t)):t!==e&&t.push(r)}return t}function yr(e,t){e.forEach(n=>Array.isArray(n)?yr(n,t):t(n))}function oc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function js(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function bn(e,t,n){let r=Go(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Ya(e,t){const n=Go(e,t);if(n>=0)return e[1|n]}function Go(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Wi={},qa="__NG_DI_FLAG__",Us="ngTempTokenPath",Og=/\n/gm,lc="__source",Ng=N({provide:String,useValue:N});let Ki;function cc(e){const t=Ki;return Ki=e,t}function Lg(e,t=I.Default){if(void 0===Ki)throw new Error("inject() must be called from an injection context");return null===Ki?Ee(e,void 0,t):Ki.get(e,t&I.Optional?null:void 0,t)}function nn(e,t=I.Default){return(P||Lg)(ee(e),t)}function Za(e){const t=[];for(let n=0;n<e.length;n++){const r=ee(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=I.Default;for(let s=0;s<r.length;s++){const l=r[s],d=kg(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(nn(o,i))}else t.push(nn(r))}return t}function Yi(e,t){return e[qa]=t,e.prototype[qa]=t,e}function kg(e){return e[qa]}
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
const im=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,sm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Ut=(()=>((Ut=Ut||{})[Ut.NONE=0]="NONE",Ut[Ut.HTML=1]="HTML",Ut[Ut.STYLE=2]="STYLE",Ut[Ut.SCRIPT=3]="SCRIPT",Ut[Ut.URL=4]="URL",Ut[Ut.RESOURCE_URL=5]="RESOURCE_URL",Ut))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iu(e){const t=function(){const e=ne();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Ut.URL,e)||"":function(e,t){const n=function(e){return e instanceof Dc&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Qr(e):function(e){return(e=String(e)).match(im)||e.match(sm)?e:"unsafe:"+e}(ae(e))}const Ac="__ngContext__";function fn(e,t){e[Ac]=t}function au(e){const t=function(e){return e[Ac]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function lu(e){return e.ngOriginalError}function Rm(e,...t){e.error(...t)}
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
const Fc=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Pe))();function Dr(e){return e instanceof Function?e():e}
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
function ns(e){const t=e[3];return an(t)?t[3]:t}function fu(e){return Bc(e[13])}function hu(e){return Bc(e[4])}function Bc(e){for(;null!==e&&!an(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qo(e,t,n,r,o){if(null!=r){let i,s=!1;an(r)?i=r:jt(r)&&(s=!0,r=r[0]);const l=B(r);0===e&&null!==n?null==o?Gc(t,n,l):mo(t,n,l,o||null,!0):1===e&&null!==n?mo(t,n,l,o||null,!0):2===e?function(e,t,n){const r=Ws(e,t);r&&function(e,t,n,r){h(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function(e,t,n,r,o){const i=n[7];i!==B(n)&&qo(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];rs(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function gu(e,t,n){return h(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function Hc(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,xr(o,-1)),n.splice(r,1)}function mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Hc(o,r),t>0&&(e[n-1][4]=r[4]);const i=js(e,10+t);!function(e,t){rs(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Vc(e,t){if(!(256&t[2])){const n=t[11];h(n)&&n.destroyNode&&rs(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yu(e[1],e);for(;t;){let n=null;if(jt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)jt(t)&&yu(t[1],t),t=t[3];null===t&&(t=e),jt(t)&&yu(t[1],t),n=t&&t[4]}t=n}}(t)}}function yu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof zt)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):B(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?l.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&h(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&an(t[3])){n!==t[3]&&Hc(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function $c(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===_t.None||o===_t.Emulated)return null}return Xe(r,n)}(e,t.parent,n)}function mo(e,t,n,r,o){h(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function Gc(e,t,n){h(e)?e.appendChild(t,n):t.appendChild(n)}function Wc(e,t,n,r,o){null!==r?mo(e,t,n,r,o):Gc(e,t,n)}function Ws(e,t){return h(e)?e.parentNode(t):t.parentNode}let Qc=function(e,t,n){return 40&e.type?Xe(e,n):null};function Ks(e,t,n,r){const o=$c(e,r,t),i=t[11],l=function(e,t,n){return Qc(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Wc(i,o,n[d],l,!1);else Wc(i,o,n,l,!1)}function Ys(e,t){if(null!==t){const n=t.type;if(3&n)return Xe(t,e);if(4&n)return Du(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ys(e,r);{const o=e[t.index];return an(o)?Du(-1,o):B(o)}}if(32&n)return du(t,e)()||B(e[t.index]);{const r=Zc(e,t);return null!==r?Array.isArray(r)?r[0]:Ys(ns(e[16]),r):Ys(e,t.next)}}return null}function Zc(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Du(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ys(r,o)}return t[7]}function Eu(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&fn(B(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)Eu(e,t,n.child,r,o,i,!1),qo(t,e,o,l,i);else if(32&d){const m=du(n,r);let v;for(;v=m();)qo(t,e,o,v,i);qo(t,e,o,l,i)}else 16&d?Xc(e,t,r,n,o,i):qo(t,e,o,l,i);n=s?n.projectionNext:n.next}}function rs(e,t,n,r,o,i){Eu(n,r,e.firstChild,t,o,i,!1)}function Xc(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)qo(t,e,o,d[m],i);else Eu(e,t,d,s[3],o,i,!0)}function ed(e,t,n){h(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Cu(e,t,n){h(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
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
       */const nd="ng-template";function oy(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==td(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function rd(e){return 4===e.type&&e.value!==nd}function iy(e,t,n){return t===(4!==e.type||n?e.value:nd)}function sy(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(Bi(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!iy(e,d,n)||""===d&&1===t.length){if(Jn(r))return!1;s=!0}}else{const m=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!oy(e.attrs,m,n)){if(Jn(r))return!1;s=!0}continue}const _=ay(8&r?"class":d,o,rd(e),n);if(-1===_){if(Jn(r))return!1;s=!0;continue}if(""!==m){let A;A=_>i?"":o[_+1].toLowerCase();const F=8&r?A:null;if(F&&-1!==td(F,m,0)||2&r&&m!==A){if(Jn(r))return!1;s=!0}}}}else{if(!s&&!Jn(r)&&!Jn(d))return!1;if(s&&Jn(d))continue;s=!1,r=d|1&r}}return Jn(r)||s}function Jn(e){return 0==(1&e)}function ay(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function od(e,t,n=!1){for(let r=0;r<t.length;r++)if(sy(e,t[r],n))return!0;return!1}function id(e,t){return e?":not("+t.trim()+")":t}function fy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Jn(s)&&(t+=id(i,o),o=""),r=s,i=i||!Jn(r);n++}return""!==o&&(t+=id(i,o)),t}
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
       */function sd(e){ad(rt(),ne(),tn()+e,Fo())}function ad(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&jo(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Bo(t,i,0,n)}pr(n)}
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
function Qs(e,t){return e<<17|t<<2}function Xn(e){return e>>17&32767}function _u(e){return 2|e}function Fr(e){return(131068&e)>>2}function wu(e,t){return-131069&e|t<<2}function bu(e){return 1|e}function vd(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Pi(o),s.contentQueries(2,t[i],i)}}}function os(e,t,n,r,o,i,s,l,d,m){const v=t.blueprint.slice();return v[0]=o,v[2]=140|r,Ln(v),v[3]=v[15]=e,v[8]=n,v[10]=s||e&&e[10],v[11]=l||e&&e[11],v[12]=d||e&&e[12]||null,v[9]=m||e&&e[9]||null,v[6]=i,v[16]=2==t.type?e[16]:v,v}function Zo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=io(),s=$r(),d=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),Ne.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Ne.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return kn(i,!0),i}function Jo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function is(e,t,n){ao(t);try{const r=e.viewQuery;null!==r&&Vu(1,r,n);const o=e.template;null!==o&&Dd(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&vd(e,t),e.staticViewQueries&&Vu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Yy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,uo()}}function Xo(e,t,n,r){const o=t[2];if(256==(256&o))return;ao(t);const i=Fo();try{Ln(t),function(e){Ne.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Dd(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const m=e.preOrderCheckHooks;null!==m&&jo(t,m,null)}else{const m=e.preOrderHooks;null!==m&&Bo(t,m,0,null),ki(t,0)}if(function(e){for(let t=fu(e);null!==t;t=hu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&xr(i,1),o[2]|=1024}}}(t),function(e){for(let t=fu(e);null!==t;t=hu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Kn(r)&&Xo(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&vd(e,t),!i)if(s){const m=e.contentCheckHooks;null!==m&&jo(t,m)}else{const m=e.contentHooks;null!==m&&Bo(t,m,1),ki(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)pr(~o);else{const i=o,s=n[++r],l=n[++r];Sa(s,i),l(2,t[i])}}}finally{pr(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Ky(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&Vu(2,d,r),!i)if(s){const m=e.viewCheckHooks;null!==m&&jo(t,m)}else{const m=e.viewHooks;null!==m&&Bo(t,m,2),ki(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,xr(t[3],-1))}finally{uo()}}function Sy(e,t,n,r){const o=t[10],i=!Fo(),s=Bt(t);try{i&&!s&&o.begin&&o.begin(),s&&is(e,t,r),Xo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Dd(e,t,n,r,o){const i=tn(),s=2&r;try{pr(-1),s&&t.length>20&&ad(e,t,20,Fo()),n(r,o)}finally{pr(i)}}function Fu(e,t,n){!Rs()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||co(n,t),fn(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],m=Xt(d);m&&Vy(t,n,d);const v=w(t,e,l,n);fn(v,t),null!==s&&$y(0,l-o,v,d,0,s),m&&(tt(n.index,t)[8]=v)}}(e,t,n,Xe(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,l=Ne.lFrame.currentDirectiveIndex;try{pr(s);for(let d=r;d<o;d++){const m=e.data[d],v=t[d];No(d),(null!==m.hostBindings||0!==m.hostVars||null!==m.hostAttrs)&&Sd(m,v)}}finally{pr(-1),No(l)}}(e,t,n))}function Nu(e,t,n=Xe){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function Cd(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Js(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Js(e,t,n,r,o,i,s,l,d,m){const v=20+r,_=v+o,A=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Qe);return n}(v,_),F="function"==typeof m?m():m;return A[1]={type:e,blueprint:A,template:n,queries:null,viewQuery:l,declTNode:t,data:A.slice().fill(null,v),bindingStartIndex:v,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:F,incompleteFirstPass:!1}}function bd(e,t,n,r){const o=Fd(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Nd(e).push(r,o.length-1))}function Md(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Lu(e,t,n,r){let o=!1;if(Rs()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];od(n,s.selectors,!1)&&(o||(o=[]),ho(co(n,t),e,s.type),Xt(s)?(Ad(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Rd(n,e.data.length,i.length);for(let v=0;v<i.length;v++){const _=i[v];_.providersResolver&&_.providersResolver(_)}let l=!1,d=!1,m=Jo(e,t,i.length,null);for(let v=0;v<i.length;v++){const _=i[v];n.mergedAttrs=Wr(n.mergedAttrs,_.hostAttrs),xd(e,n,t,m,_),Hy(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const A=_.type.prototype;!l&&(A.ngOnChanges||A.ngOnInit||A.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(A.ngOnChanges||A.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let m=t.directiveStart;m<r;m++){const v=o[m],_=v.inputs,A=null===i||rd(t)?null:zy(_,i);s.push(A),l=Md(_,m,l),d=Md(v.outputs,m,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new _e("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=Wr(n.mergedAttrs,n.attrs),o}function Td(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function Sd(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Ad(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Hy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Xt(t)&&(n[""]=e)}}function Rd(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function xd(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=Fn(o.type)),s=new zt(i,Xt(o),null);e.blueprint[r]=s,n[r]=s,Td(e,t,0,r,Jo(e,n,o.hostVars,Qe),o)}function Vy(e,t,n){const r=Xe(t,e),o=Cd(n),i=e[10],s=Xs(e,os(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function Cr(e,t,n,r,o,i){const s=Xe(e,t);!function(e,t,n,r,o,i,s){if(null==i)h(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const l=null==s?ae(i):s(i,r||"",o);h(e)?e.setAttribute(t,o,l,n):n?t.setAttributeNS(n,o,l):t.setAttribute(o,l)}}(t[11],s,i,e.value,n,r,o)}function $y(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const m=s[d++],v=s[d++],_=s[d++];null!==l?r.setInput(n,_,m,v):n[v]=_}}}function zy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Pd(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Ky(e,t){const n=tt(t,e);if(Kn(n)){const r=n[1];80&n[2]?Xo(r,n,r.template,n[8]):n[5]>0&&ju(n)}}function ju(e){for(let r=fu(e);null!==r;r=hu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];Xo(s,i,s.template,i[8])}else i[5]>0&&ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=tt(n[r],e);Kn(o)&&o[5]>0&&ju(o)}}function Yy(e,t){const n=tt(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),is(r,n,n[8])}function Xs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Bu(e){for(;e;){e[2]|=64;const t=ns(e);if(_o(e)&&!t)return e;e=t}return null}function Hu(e,t,n){const r=t[10];r.begin&&r.begin();try{Xo(e,t,e.template,n)}catch(o){throw kd(t,o),o}finally{r.end&&r.end()}}function Od(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=au(n),o=r[1];Sy(o,r,o.template,n)}}(e[8])}function Vu(e,t,n){Pi(0),t(e,n)}const Xy=(()=>Promise.resolve(null))();function Fd(e){return e[7]||(e[7]=[])}function Nd(e){return e.cleanup||(e.cleanup=[])}function kd(e,t){const n=e[9],r=n?n.get(ts,null):null;r&&r.handleError(t)}function jd(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,l):d[l]=o}}function Nr(e,t,n){const r=Ze(t,e);!function(e,t,n){h(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
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
       */class Bd{get(t,n=Wi){if(n===Wi){const r=new Error(`NullInjectorError: No provider for ${de(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zu=new At("Set Injector scope."),ss={},nv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Gu;function Ud(){return void 0===Gu&&(Gu=new Bd),Gu}function Hd(e,t=null,n=null,r){const o=Vd(e,t,n,r);return o._resolveInjectorDefTypes(),o}function Vd(e,t=null,n=null,r){return new rv(e,n,t||Ud(),r)}class rv{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&yr(n,l=>this.processProvider(l,t,n)),yr([t],l=>this.processInjectorType(l,[],i)),this.records.set($u,ei(void 0,this));const s=this.records.get(zu);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:de(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Wi,r=I.Default){this.assertNotDestroyed();const o=cc(this),i=Y(void 0);try{if(!(r&I.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=("function"==typeof(e=t)||"object"==typeof e&&e instanceof At)&&mt(t);l=d&&this.injectableDefInScope(d)?ei(Wu(t),ss):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&I.Self?Ud():this.parent).get(t,n=r&I.Optional&&n===Wi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Us]=s[Us]||[]).unshift(de(t)),o)throw s;return function(e,t,n,r){const o=e[Us];throw t[lc]&&o.unshift(t[lc]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=de(t);if(Array.isArray(t))o=t.map(de).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):de(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Og,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Us]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Y(i),cc(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(de(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=ee(t)))return!1;let o=or(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,l=-1!==r.indexOf(s);if(void 0!==i&&(o=or(i)),null==o)return!1;if(null!=o.imports&&!l){let v;r.push(s);try{yr(o.imports,_=>{this.processInjectorType(_,n,r)&&(void 0===v&&(v=[]),v.push(_))})}finally{}if(void 0!==v)for(let _=0;_<v.length;_++){const{ngModule:A,providers:F}=v[_];yr(F,z=>this.processProvider(z,A,F||We))}}this.injectorDefTypes.add(s);const d=Fn(s)||(()=>new s);this.records.set(s,ei(d,ss));const m=o.providers;if(null!=m&&!l){const v=t;yr(m,_=>this.processProvider(_,v,m))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=ti(t=ee(t))?t:ee(t&&t.provide);const i=(e=t,zd(e)?ei(void 0,e.useValue):ei(function(e,t,n){let r;if(ti(e)){const o=ee(e);return Fn(o)||Wu(o)}if(zd(e))r=()=>ee(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Za(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>nn(ee(e.useExisting));else{const o=ee(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return Fn(o)||Wu(o);r=()=>new o(...Za(e.deps))}return r}(e),ss));var e;if(ti(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=ei(void 0,ss,!0),s.factory=()=>Za(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===ss&&(n.value=nv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=ee(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Wu(e){const t=mt(e),n=null!==t?t.factory:Fn(e);if(null!==n)return n;if(e instanceof At)throw new Error(`Token ${de(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${de(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[yt]||e[Ir]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function ei(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function zd(e){return null!==e&&"object"==typeof e&&Ng in e}function ti(e){return"function"==typeof e}let Un=(()=>{class e{static create(n,r){var o;if(Array.isArray(n))return Hd({name:""},r,n,"");{const i=null!==(o=n.name)&&void 0!==o?o:"";return Hd({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Wi,e.NULL=new Bd,e.\u0275prov=Dt({token:e,providedIn:"any",factory:()=>nn($u)}),e.__NG_ELEMENT_ID__=-1,e})();function Dv(e,t){ko(au(e)[1],St())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ta=null;function ni(){if(!ta){const e=Pe.Symbol;if(e&&e.iterator)ta=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ta=r)}}}return ta}
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
       */function _r(e,t,n){return e[t]=n}function hn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function yo(e,t,n,r){const o=hn(e,t,n);return hn(e,t+1,r)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(e,t,n,r){const o=ne();return hn(o,zr(),t)&&(rt(),Cr(wt(),o,e,t,n,r)),Zu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pf(e,t,n,r,o,i,s,l){const d=ne(),m=rt(),v=e+20,_=m.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,l,d){const m=t.consts,v=Zo(t,e,4,s||null,Qt(m,l));Lu(t,n,v,Qt(m,d)),ko(t,v);const _=v.tViews=Js(2,v,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,m);return null!==t.queries&&(t.queries.template(t,v),_.queries=t.queries.embeddedTView(v)),v}(v,m,d,t,n,r,o,i,s):m.data[v];kn(_,!1);const A=d[11].createComment("");Ks(m,d,A,_),fn(A,d),Xs(d,d[v]=Pd(A,d,A,_)),Rr(_)&&Fu(m,d,_),null!=s&&Nu(d,_,l)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gf(e){return gt(Ne.lFrame.contextLView,20+e)}
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
function ls(e,t=I.Default){const n=ne();return null===n?nn(e,t):u(St(),n,ee(e),t)}function If(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nl(e,t,n){const r=ne();return hn(r,zr(),t)&&function(e,t,n,r,o,i,s,l){const d=Xe(t,n);let v,m=t.inputs;!l&&null!=m&&(v=m[r])?(jd(e,n,v,r,o),Ot(t)&&function(e,t){const n=tt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,h(i)?i.setProperty(d,r,o):Vo(r)||(d.setProperty?d.setProperty(r,o):d[r]=o))}(rt(),wt(),r,e,t,r[11],n,!1),nl}function rl(e,t,n,r,o){const s=o?"class":"style";jd(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(e,t,n,r){const o=ne(),i=rt(),s=20+e,l=o[11],d=o[s]=gu(l,t,Ne.lFrame.currentNamespace),m=i.firstCreatePass?function(e,t,n,r,o,i,s){const l=t.consts,m=Zo(t,e,2,o,Qt(l,i));return Lu(t,n,m,Qt(l,s)),null!==m.attrs&&ea(m,m.attrs,!1),null!==m.mergedAttrs&&ea(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];kn(m,!0);const v=m.mergedAttrs;null!==v&&Ho(l,d,v);const _=m.classes;null!==_&&Cu(l,d,_);const A=m.styles;null!==A&&ed(l,d,A),64!=(64&m.flags)&&Ks(i,o,d,m),0===Ne.lFrame.elementDepthCount&&fn(d,o),Ne.lFrame.elementDepthCount++,Rr(m)&&(Fu(i,o,m),function(e,t,n){if(Co(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&Nu(o,m)}function il(){let e=St();$r()?Ne.lFrame.isParent=!1:(e=e.parent,kn(e,!1));const t=e;Ne.lFrame.elementDepthCount--;const n=rt();n.firstCreatePass&&(ko(n,e),Co(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&rl(n,t,ne(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rl(n,t,ne(),t.stylesWithoutHost,!1)}function Tf(e,t,n,r){ol(e,t,n,r),il()}
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
       */function al(e,t,n,r){const o=ne(),i=rt(),s=St();return function(e,t,n,r,o,i,s,l){const d=Rr(r),v=e.firstCreatePass&&Nd(e),_=t[8],A=Fd(t);let F=!0;if(3&r.type||l){const pe=Xe(r,t),Me=l?l(pe):pe,J=A.length,je=l?ot=>l(B(ot[r.index])):r.index;if(h(n)){let ot=null;if(!l&&d&&(ot=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==ot)(ot.__ngLastListenerFn__||ot).__ngNextListenerFn__=i,ot.__ngLastListenerFn__=i,F=!1;else{i=ul(r,t,_,i,!1);const ht=n.listen(Me,o,i);A.push(i,ht),v&&v.push(o,je,J,J+1)}}else i=ul(r,t,_,i,!0),Me.addEventListener(o,i,s),A.push(i),v&&v.push(o,je,J,s)}else i=ul(r,t,_,i,!1);const z=r.outputs;let le;if(F&&null!==z&&(le=z[o])){const pe=le.length;if(pe)for(let Me=0;Me<pe;Me+=2){const Tn=t[le[Me]][le[Me+1]].subscribe(i),Eo=A.length;A.push(i,Tn),v&&v.push(o,r.index,Eo,-(Eo+1))}}}(i,o,o[11],s,e,t,!!n,r),al}function Ff(e,t,n,r){try{return!1!==n(r)}catch(o){return kd(e,o),!1}}function ul(e,t,n,r,o){return function i(s){if(s===Function)return r;const l=2&e.flags?tt(e.index,t):t;0==(32&t[2])&&Bu(l);let d=Ff(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=Ff(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
       */function Gf(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?Xn(i):Fr(i),d=!1;for(;0!==l&&(!1===d||s);){const v=e[l+1];aD(e[l],t)&&(d=!0,e[l+1]=r?bu(v):_u(v)),l=r?Xn(v):Fr(v)}d&&(e[n+1]=r?_u(i):bu(i))}function aD(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Go(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Wf(e){return e.substring(Wt.key,Wt.keyEnd)}function Kf(e,t){const n=Wt.textEnd;return n===t?-1:(t=Wt.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,Wt.key=t,n),hi(e,t,n))}function hi(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function eh(e){!function(e,t,n,r){const o=rt(),i=function(e){const t=Ne.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);o.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[tn()],s=th(e,n);sh(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Ne.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=cs(n=cl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cl(o,e,t,n,r),null===i){let d=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Fr(r))return e[Xn(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=cl(null,e,t,d[1],r),d=cs(d,t.attrs,r),function(e,t,n,r){e[Xn(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=cs(r,e[i].hostAttrs,n);return cs(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=Xn(s),d=Fr(s);e[r]=n;let v,m=!1;if(Array.isArray(n)){const _=n;v=_[1],(null===v||Go(_,v)>0)&&(m=!0)}else v=n;if(o)if(0!==d){const A=Xn(e[l+1]);e[r+1]=Qs(A,l),0!==A&&(e[A+1]=wu(e[A+1],r)),e[l+1]=function(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=Qs(l,0),0!==l&&(e[l+1]=wu(e[l+1],r)),l=r;else e[r+1]=Qs(d,0),0===l?l=r:e[d+1]=wu(e[d+1],r),d=r;m&&(e[r+1]=_u(e[r+1])),Gf(e,v,r,!0),Gf(e,v,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Go(i,t)>=0&&(n[r+1]=bu(n[r+1]))}(t,v,e,r,i),s=Qs(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(o,null,i,r);const s=ne();if(n!==Qe&&hn(s,i,n)){const l=o.data[tn()];if(sh(l,r)&&!th(o,i)){let d=r?l.classesWithoutHost:l.stylesWithoutHost;null!==d&&(n=ue(d,n||"")),rl(o,l,s,n,r)}else!function(e,t,n,r,o,i,s,l){o===Qe&&(o=We);let d=0,m=0,v=0<o.length?o[0]:null,_=0<i.length?i[0]:null;for(;null!==v||null!==_;){const A=d<o.length?o[d+1]:void 0,F=m<i.length?i[m+1]:void 0;let le,z=null;v===_?(d+=2,m+=2,A!==F&&(z=_,le=F)):null===_||null!==v&&v<_?(d+=2,z=v):(m+=2,z=_,le=F),null!==z&&oh(e,t,n,r,z,le,s,l),v=d<o.length?o[d]:null,_=m<i.length?i[m]:null}}(o,l,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return We;const r=[],o=Qr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}(bn,br,e,!0)}function br(e,t){for(let n=function(e){return function(e){Wt.key=0,Wt.keyEnd=0,Wt.value=0,Wt.valueEnd=0,Wt.textEnd=e.length}(e),Kf(e,hi(e,0,Wt.textEnd))}(t);n>=0;n=Kf(t,n))bn(e,Wf(t),!0)}function th(e,t){return t>=e.expandoStartIndex}function cl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=cs(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function cs(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),bn(e,s,!!n||t[++i]))}return void 0===e?null:e}function oh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,m=d[l+1];oa(function(e){return 1==(1&e)}(m)?ih(d,t,n,o,Fr(m),s):void 0)||(oa(i)||function(e){return 2==(2&e)}(m)&&(i=ih(d,null,n,o,l,s)),function(e,t,n,r,o){const i=h(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:Er.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const l="string"==typeof o&&o.endsWith("!important");l&&(o=o.slice(0,-10),s|=Er.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,l?"important":"")}}}(r,s,Ze(tn(),n),o,i))}function ih(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],m=Array.isArray(d),v=m?d[1]:d,_=null===v;let A=n[o+1];A===Qe&&(A=_?We:void 0);let F=_?Ya(A,r):v===r?A:void 0;if(m&&!oa(F)&&(F=Ya(d,r)),oa(F)&&(l=F,s))return l;const z=e[o+1];o=s?Xn(z):Fr(z)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Ya(d,r))}return l}function oa(e){return void 0!==e}function sh(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ah(e,t=""){const n=ne(),r=rt(),o=e+20,i=r.firstCreatePass?Zo(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return h(e)?e.createText(t):e.createTextNode(t)}(n[11],t);Ks(r,n,s,i),kn(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dl(e){return ia("",e,""),dl}function ia(e,t,n){const r=ne(),o=function(e,t,n,r){return hn(e,zr(),n)?t+ae(n)+r:Qe}(r,e,t,n);return o!==Qe&&Nr(r,tn(),o),ia}
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
const vo=void 0;var HD=["en",[["a","p"],["AM","PM"],vo],[["AM","PM"],vo,vo],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],vo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],vo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",vo,"{1} 'at' {0}",vo],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
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
       */(e);let n=Sh(t);if(n)return n;const r=t.split("-")[0];if(n=Sh(r),n)return n;if("en"===r)return HD;throw new Error(`Missing locale data for the locale "${e}".`)}function Th(e){return fl(e)[Ve.PluralCase]}function Sh(e){return e in pi||(pi[e]=Pe.ng&&Pe.ng.common&&Pe.ng.common.locales&&Pe.ng.common.locales[e]),pi[e]}var Ve=(()=>((Ve=Ve||{})[Ve.LocaleId=0]="LocaleId",Ve[Ve.DayPeriodsFormat=1]="DayPeriodsFormat",Ve[Ve.DayPeriodsStandalone=2]="DayPeriodsStandalone",Ve[Ve.DaysFormat=3]="DaysFormat",Ve[Ve.DaysStandalone=4]="DaysStandalone",Ve[Ve.MonthsFormat=5]="MonthsFormat",Ve[Ve.MonthsStandalone=6]="MonthsStandalone",Ve[Ve.Eras=7]="Eras",Ve[Ve.FirstDayOfWeek=8]="FirstDayOfWeek",Ve[Ve.WeekendRange=9]="WeekendRange",Ve[Ve.DateFormat=10]="DateFormat",Ve[Ve.TimeFormat=11]="TimeFormat",Ve[Ve.DateTimeFormat=12]="DateTimeFormat",Ve[Ve.NumberSymbols=13]="NumberSymbols",Ve[Ve.NumberFormats=14]="NumberFormats",Ve[Ve.CurrencyCode=15]="CurrencyCode",Ve[Ve.CurrencySymbol=16]="CurrencySymbol",Ve[Ve.CurrencyName=17]="CurrencyName",Ve[Ve.Currencies=18]="Currencies",Ve[Ve.Directionality=19]="Directionality",Ve[Ve.PluralCase=20]="PluralCase",Ve[Ve.ExtraData=21]="ExtraData",Ve))();const sa="en-US";
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
       */class zE{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${de(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let gs=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new zE,e})();function GE(){return mi(St(),ne())}function mi(e,t){return new ms(Xe(e,t))}let ms=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=GE,e})();function WE(e){return e instanceof ms?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class np{}let KE=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function(){const e=ne(),n=tt(St().index,e);return function(e){return e[11]}(jt(n)?n:e)}
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
return e.\u0275prov=Dt({token:e,providedIn:"root",factory:()=>null}),e})();class rp{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const ZE=new rp("13.1.1"),Dl={};
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
       */class ys{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return da(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(an(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(mu(t,r),js(n,r))}this._attachedToViewContainer=!1}Vc(this._lView[1],this._lView)}onDestroy(t){bd(this._lView[1],this._lView,null,t)}markForCheck(){Bu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){hr(!0);try{Hu(e,t,n)}finally{hr(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,rs(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class JE extends ys{constructor(t){super(t),this._view=t}detectChanges(){Od(this._view)}checkNoChanges(){!function(e){hr(!0);try{Od(e)}finally{hr(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class op extends gs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Fe(t);return new El(n,this.ngModule)}}function ip(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const eC=new At("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Fc});class El extends ep{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(fy).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return ip(this.componentDef.inputs)}get outputs(){return ip(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Dl,o);return i!==Dl||r===Dl?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(np,C),l=i.get(qE,null),d=s.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",v=r?function(e,t,n){if(h(e))return e.selectRootElement(t,n===_t.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(d,r,this.componentDef.encapsulation):gu(s.createRenderer(null,this.componentDef),m,function(e){const t=e.toLowerCase();return"svg"===t?oo:"math"===t?"http://www.w3.org/1998/MathML/":null}(m)),_=this.componentDef.onPush?576:528,A=function(e,t){return{components:[],scheduler:e||Fc,clean:Xy,playerHandler:t||null,flags:0}}(),F=Js(0,null,null,1,0,null,null,null,null,null),z=os(null,F,A,_,null,null,s,d,l,i);let le,pe;ao(z);try{const Me=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const d=Zo(s,20,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(ea(d,m,!0),null!==e&&(Ho(o,e,m),null!==d.classes&&Cu(o,e,d.classes),null!==d.styles&&ed(o,e,d.styles)));const v=r.createRenderer(e,t),_=os(n,Cd(t),null,t.onPush?64:16,n[20],d,r,v,i||null,null);return s.firstCreatePass&&(ho(co(d,n),s,t.type),Ad(s,d),Rd(d,n.length,1)),Xs(n,_),n[20]=_}(v,this.componentDef,z,s,d);if(v)if(r)Ho(d,v,["ng-version",ZE.full]);else{const{attrs:J,classes:je}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Jn(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);J&&Ho(d,v,J),je&&je.length>0&&Cu(d,v,je.join(" "))}if(pe=Je(F,20),void 0!==n){const J=pe.projection=[];for(let je=0;je<this.ngContentSelectors.length;je++){const ot=n[je];J.push(null!=ot?Array.from(ot):null)}}le=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=St();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),xd(e,r,t,Jo(e,t,1,null),n));const o=w(t,e,r.directiveStart,r);fn(o,t);const i=Xe(r,t);return i&&fn(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(d=>d(s,t)),t.contentQueries){const d=St();t.contentQueries(1,s,d.directiveStart)}const l=St();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(pr(l.index),Td(n[1],l,0,l.directiveStart,l.directiveEnd,t),Sd(t,s)),s}(Me,this.componentDef,z,A,[Dv]),is(F,z,null)}finally{uo()}return new rC(this.componentType,le,mi(pe,z),z,pe)}}class rC extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new JE(o),this.componentType=t}get injector(){return new Ge(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
       */const vi=new Map;class lp extends yi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new op(this);const r=O(t);this._bootstrapComponents=Dr(r.bootstrap),this._r3Injector=Vd(t,n,[{provide:yi,useValue:this},{provide:gs,useValue:this.componentFactoryResolver}],de(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=Un.THROW_IF_NOT_FOUND,r=I.Default){return t===Un||t===yi||t===$u?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Cl extends sp{constructor(t){super(),this.moduleType=t,null!==O(t)&&function(e){const t=new Set;!function n(r){const o=O(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${de(t)} vs ${de(t.name)}`)}(i,vi.get(i),r),vi.set(i,r));const s=Dr(o.imports);for(const l of s)t.has(l)||(t.add(l),n(l))}(e)}(t)}create(t){return new lp(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cp(e,t,n,r){return fp(ne(),en(),e,t,n,r)}function dp(e,t,n,r,o,i){return function(e,t,n,r,o,i,s,l){const d=t+n;return function(e,t,n,r,o){const i=yo(e,t,n,r);return hn(e,t+2,o)||i}(e,d,o,i,s)?_r(e,d+3,l?r.call(l,o,i,s):r(o,i,s)):vs(e,d+3)}(ne(),en(),e,t,n,r,o,i)}function vs(e,t){const n=e[t];return n===Qe?void 0:n}function fp(e,t,n,r,o,i){const s=t+n;return hn(e,s,o)?_r(e,s+1,i?r.call(i,o):r(o)):vs(e,s+1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yp(e,t){const n=rt();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Fn(r.type)),s=Y(ls);try{const l=$o(!1),d=i();return $o(l),function(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,ne(),o,d),d}finally{Y(s)}}function vp(e,t,n){const r=e+20,o=ne(),i=gt(o,r);return Ds(o,r)?fp(o,en(),t,i.transform,n,i):i.transform(n)}function Dp(e,t,n,r){const o=e+20,i=ne(),s=gt(i,o);return Ds(i,o)?function(e,t,n,r,o,i,s){const l=t+n;return yo(e,l,o,i)?_r(e,l+2,s?r.call(s,o,i):r(o,i)):vs(e,l+2)}(i,en(),t,s.transform,n,r,s):s.transform(n,r)}function Ds(e,t){return e[1].data[t].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _l(e){return t=>{setTimeout(e,void 0,t)}}const Mr=class extends re.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let l=t,d=n||(()=>null),m=r;if(t&&"object"==typeof t){const _=t;l=null===(o=_.next)||void 0===o?void 0:o.bind(_),d=null===(i=_.error)||void 0===i?void 0:i.bind(_),m=null===(s=_.complete)||void 0===s?void 0:s.bind(_)}this.__isAsync&&(d=_l(d),l&&(l=_l(l)),m&&(m=_l(m)));const v=super.subscribe({next:l,error:d,complete:m});return t instanceof ce.w0&&t.add(v),v}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function DC(){return this._results[ni()]()}class wl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ni(),r=wl.prototype;r[n]||(r[n]=DC)}get changes(){return this._changes||(this._changes=new Mr)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Bn(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Es=(()=>{class e{}return e.__NG_ELEMENT_ID__=_C,e})();const EC=Es,CC=class extends EC{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=os(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),is(n,r,t),new ys(r)}};function _C(){return fa(St(),ne())}function fa(e,t){return 4&e.type?new CC(t,e,mi(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ha=(()=>{class e{}return e.__NG_ELEMENT_ID__=wC,e})();function wC(){return _p(St(),ne())}const bC=ha,Ep=class extends bC{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return mi(this._hostTNode,this._hostLView)}get injector(){return new Ge(this._hostTNode,this._hostLView)}get parentInjector(){const t=zo(this._hostTNode,this._hostLView);if(mr(t)){const n=Kr(t,this._hostLView),r=Or(t);return new Ge(n[1].data[r+8],n)}return new Ge(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Cp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!("function"==typeof t);let l;if(s)l=n;else{const _=n||{};l=_.index,r=_.injector,o=_.projectableNodes,i=_.ngModuleRef}const d=s?t:new El(Fe(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule&&m){const _=m.get(yi,null);_&&(i=_)}const v=d.create(m,o,void 0,i);return this.insert(v.hostView,l),v}insert(t,n){const r=t._lView,o=r[1];if(an(r[3])){const v=this.indexOf(t);if(-1!==v)this.detach(v);else{const _=r[3],A=new Ep(_,_[6],_[3]);A.detach(A.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],oc(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=128}(o,r,s,i);const l=Du(i,s),d=r[11],m=Ws(d,s[7]);return null!==m&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,rs(e,r,n,1,o,i)}(o,s[6],d,r,m,l),t.attachToViewContainerRef(),oc(bl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Cp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);r&&(js(bl(this._lContainer),n),Vc(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=mu(this._lContainer,n);return r&&null!=js(bl(this._lContainer),n)?new ys(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Cp(e){return e[8]}function bl(e){return e[8]||(e[8]=[])}function _p(e,t){let n;const r=t[e.index];if(an(r))n=r;else{let o;if(8&e.type)o=B(r);else{const i=t[11];o=i.createComment("");const s=Xe(e,t);mo(i,Ws(i,s),o,function(e,t){return h(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Pd(r,t,o,e),Xs(t,n)}return new Ep(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ml{constructor(t){this.queryList=t,this.matches=null}clone(){return new Ml(this.queryList)}setDirty(){this.queryList.setDirty()}}class Il{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Il(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Rp(t,n).matches&&this.queries[n].setDirty()}}class wp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Tl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Tl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Sl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Sl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,TC(n,i)),this.matchTNodeWithReadOption(t,n,E(n,t,i,!1,!1))}else r===Es?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,E(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===ms||o===ha||o===Es&&4&n.type)this.addMatch(n.index,-2);else{const i=E(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function TC(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function AC(e,t,n,r){return-1===n?function(e,t){return 11&e.type?mi(e,t):4&e.type?fa(e,t):null}(t,e):-2===n?function(e,t,n){return n===ms?mi(t,e):n===Es?fa(t,e):n===ha?_p(t,e):void 0}(e,t,r):w(e,e[1],n,t)}function bp(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const m=s[d];l.push(m<0?null:AC(t,i[m],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Al(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=bp(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const m=i[l+1],v=t[-d];for(let _=10;_<v.length;_++){const A=v[_];A[17]===A[3]&&Al(A[1],A,m,r)}if(null!==v[9]){const _=v[9];for(let A=0;A<_.length;A++){const F=_[A];Al(F[1],F,m,r)}}}}}return r}function Mp(e){const t=ne(),n=rt(),r=Os();Pi(r+1);const o=Rp(n,r);if(e.dirty&&Bt(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Al(n,t,r,[]):bp(n,t,o,r);e.reset(i,WE),e.notifyOnChanges()}return!0}return!1}function Ip(e,t,n,r){const o=rt();if(o.firstCreatePass){const i=St();(function(e,t,n){null===e.queries&&(e.queries=new Tl),e.queries.track(new Sl(t,n))})(o,new wp(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new wl(4==(4&n));bd(e,t,r,r.destroy),null===t[19]&&(t[19]=new Il),t[19].queries.push(new Ml(r))}(o,ne(),n)}function Tp(){return e=ne(),t=Os(),e[19].queries[t].queryList;var e,t}function Rp(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xp(e,t){return fa(e,t)}
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
       */const Nl=new At("Application Initializer");let Ei=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ma,this.reject=ma,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(sl(i))n.push(i);else if(xf(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(nn(Nl,8))},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yp=new At("AppId"),ZC={provide:Yp,useFactory:function(){return`${Ll()}${Ll()}${Ll()}`},deps:[]};function Ll(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Qp=new At("Platform Initializer"),qp=new At("Platform ID"),Zp=new At("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jp=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ya=new At("LocaleId"),Xp=new At("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kl=(()=>{class e{compileModuleSync(n){return new Cl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=Dr(O(n).declarations).reduce((s,l)=>{const d=Fe(l);return d&&s.push(new El(d)),s},[]);return new JC(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();
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
class In{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Mr(!1),this.onMicrotaskEmpty=new Mr(!1),this.onStable=new Mr(!1),this.onError=new Mr(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=Pe.requestAnimationFrame,t=Pe.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Pe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ul(e),e.isCheckStableRunning=!0,Bl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ul(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return eg(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),tg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return eg(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),tg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ul(e),Bl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!In.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(In.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,n0,ma,ma);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const n0={};function Bl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ul(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function eg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function tg(e){e._nesting--,Bl(e)}class s0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Mr,this.onMicrotaskEmpty=new Mr,this.onStable=new Mr,this.onError=new Mr}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ng=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{In.assertNotInAngularZone(),jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(nn(In))},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})(),rg=(()=>{class e{constructor(){this._applications=new Map,Hl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Hl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();class a0{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function u0(e){Hl=e}let rr,Hl=new a0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const og=new At("AllowMultipleToken");class f0{constructor(t,n){this.name=t,this.token=n}}function ig(e,t,n=[]){const r=`Platform: ${t}`,o=new At(r);return(i=[])=>{let s=sg();if(!s||s.injector.get(og,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const l=n.concat(i).concat({provide:o,useValue:!0},{provide:zu,useValue:"platform"});!function(e){if(rr&&!rr.destroyed&&!rr.injector.get(og,!1))throw new _e("400","");rr=e.get(ag);const t=e.get(Qp,null);t&&t.forEach(n=>n())}(Un.create({providers:l,name:r}))}return function(e){const t=sg();if(!t)throw new _e("401","");return t}()}}function sg(){return rr&&!rr.destroyed?rr:null}let ag=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const l=function(e,t){let n;return n="noop"===e?new s0:("zone.js"===e?void 0:e)||new In({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),d=[{provide:In,useValue:l}];return l.run(()=>{const m=Un.create({providers:d,parent:this.injector,name:n.moduleType.name}),v=n.create(m),_=v.injector.get(ts,null);if(!_)throw new _e("402","");return l.runOutsideAngular(()=>{const A=l.onError.subscribe({next:F=>{_.handleError(F)}});v.onDestroy(()=>{Vl(this._modules,v),A.unsubscribe()})}),function(e,t,n){try{const r=n();return sl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(_,l,()=>{const A=v.injector.get(Ei);return A.runInitializers(),A.donePromise.then(()=>(function(e){vt(e,"Expected localeId to be defined"),"string"==typeof e&&(Ah=e.toLowerCase().replace(/_/g,"-"))}(v.injector.get(ya,sa)||sa),this._moduleDoBootstrap(v),v))})})}bootstrapModule(n,r=[]){const o=ug({},r);return function(e,t,n){const r=new Cl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(_s);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new _e("403","");n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new _e("404","");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(nn(Un))},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();function ug(e,t){return Array.isArray(t)?t.reduce(ug,e):Object.assign(Object.assign({},e),t)}let _s=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new G.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),d=new G.y(m=>{let v;this._zone.runOutsideAngular(()=>{v=this._zone.onStable.subscribe(()=>{In.assertNotInAngularZone(),jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const _=this._zone.onUnstable.subscribe(()=>{In.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{v.unsubscribe(),_.unsubscribe()}});this.isStable=function(...e){const t=(0,Z.yG)(e),n=(0,Z._6)(e,1/0),r=e;return r.length?1===r.length?(0,T.Xf)(r[0]):(0,y.J)(n)((0,X.D)(r,t)):te.E}(l,d.pipe((0,W.B)()))}bootstrap(n,r){if(!this._initStatus.done)throw new _e("405","");let o;o=n instanceof ep?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(yi),l=o.create(Un.NULL,[],r||o.selector,i),d=l.location.nativeElement,m=l.injector.get(ng,null),v=m&&l.injector.get(rg);return m&&v&&v.registerApplication(d,m),l.onDestroy(()=>{this.detachView(l.hostView),Vl(this.components,l),v&&v.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new _e("101","");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Vl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Zp,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(nn(In),nn(Un),nn(ts),nn(gs),nn(Ei))},e.\u0275prov=Dt({token:e,factory:e.\u0275fac}),e})();function Vl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
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
let D0=(()=>{class e{}return e.__NG_ELEMENT_ID__=E0,e})();function E0(e){return function(e,t,n){if(Ot(e)&&!n){const r=tt(e.index,t);return new ys(r,r)}return 47&e.type?new ys(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(St(),ne(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yg{constructor(){}supports(t){return as(t)}create(t){return new T0(t)}}const I0=(e,t)=>t;class T0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||I0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Dg(r,o,i)?n:r,l=Dg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=l-o,v=d-o;if(m!=v){for(let A=0;A<m;A++){const F=A<i.length?i[A]:i[A]=0,z=F+A;v<=z&&z<m&&(i[A]=F+1)}i[s.previousIndex]=v-m}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!as(t))throw new Error(`Error trying to diff '${de(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ni()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new S0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new vg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new vg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class S0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class A0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class vg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new A0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Dg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Eg{constructor(){}supports(t){return t instanceof Map||qu(t)}create(){return new R0}}class R0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||qu(t)))throw new Error(`Error trying to diff '${de(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new x0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class x0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cg(){return new Da([new yg])}let Da=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Cg()),deps:[[e,new Wo,new go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=Dt({token:e,providedIn:"root",factory:Cg}),e})();function _g(){return new Ea([new Eg])}let Ea=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||_g()),deps:[[e,new Wo,new go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=Dt({token:e,providedIn:"root",factory:_g}),e})();const O0=[new Eg],N0=new Da([new yg]),L0=new Ea(O0),k0=ig(null,"core",[{provide:qp,useValue:"unknown"},{provide:ag,deps:[Un]},{provide:rg,deps:[]},{provide:Jp,deps:[]}]),V0=[{provide:_s,useClass:_s,deps:[In,Un,ts,gs,Ei]},{provide:eC,deps:[In],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:Ei,useClass:Ei,deps:[[new go,Nl]]},{provide:kl,useClass:kl,deps:[]},ZC,{provide:Da,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return N0},deps:[]},{provide:Ea,useFactory:function(){return L0},deps:[]},{provide:ya,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||sa},deps:[[new Qi(ya),new go,new Wo]]},{provide:Xp,useValue:"USD"}];
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
       */let z0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(nn(_s))},e.\u0275mod=Ar({type:e}),e.\u0275inj=Jt({providers:V0}),e})();
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
       */,84:(Be,oe,b)=>{b.d(oe,{Bz:()=>Ui,lC:()=>D});var y=b(7587),T=b(8306);const{isArray:te}=Array,{getPrototypeOf:Z,prototype:X,keys:De}=Object;var G=b(2076),W=b(4671),N=b(4004);const{isArray:ye}=Array;var Ie=b(3269),ee=b(5403),Ue=b(9672);function Te(...c){const u=(0,Ie.yG)(c),a=(0,Ie.jO)(c),{args:f,keys:g}=function(c){if(1===c.length){const u=c[0];if(te(u))return{args:u,keys:null};if(function(c){return c&&"object"==typeof c&&Z(c)===X}(u)){const a=De(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:c,keys:null}}(c);if(0===f.length)return(0,G.D)([],u);const E=new T.y(function(c,u,a=W.y){return f=>{ve(u,()=>{const{length:g}=c,E=new Array(g);let w=g,S=g;for(let V=0;V<g;V++)ve(u,()=>{const Ce=(0,G.D)(c[V],u);let Ge=!1;Ce.subscribe(new ee.Q(f,Oe=>{E[V]=Oe,Ge||(Ge=!0,S--),S||f.next(a(E.slice()))},()=>{--w||f.complete()}))},f)},f)}}(f,u,g?w=>function(c,u){return c.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,w):W.y));return a?E.pipe(function(c){return(0,N.U)(u=>function(c,u){return ye(u)?c(...u):c(u)}(c,u))}(a)):E}function ve(c,u,a){c?(0,Ue.f)(a,c,u):u()}var xe=b(8189);function qe(...c){return(0,xe.J)(1)((0,G.D)(c,(0,Ie.yG)(c)))}var be=b(8421);function ge(c){return new T.y(u=>{(0,be.Xf)(c()).subscribe(u)})}var j=b(727),k=b(4482);function U(){return(0,k.e)((c,u)=>{let a=null;c._refCount++;const f=new ee.Q(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const g=c._connection,E=a;a=null,g&&(!E||g===E)&&g.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class K extends T.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,k.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,null==u||u.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new j.w0;const a=this.getSubject();u.add(this.source.subscribe(new ee.Q(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=j.w0.EMPTY)}return u}refCount(){return U()(this)}}var $=b(9646),H=b(1135),Le=b(6805),et=b(515),Mt=b(7579);function xt(c,u,a,f,g){return(E,w)=>{let S=a,V=u,Ce=0;E.subscribe(new ee.Q(w,Ge=>{const Oe=Ce++;V=S?c(V,Ge,Oe):(S=!0,Ge),f&&w.next(V)},g&&(()=>{S&&w.next(V),w.complete()})))}}function qt(c,u){return(0,k.e)(xt(c,u,arguments.length>=2,!0))}function dt(c){return(0,k.e)((u,a)=>{let E,f=null,g=!1;f=u.subscribe(new ee.Q(a,void 0,void 0,w=>{E=(0,be.Xf)(c(w,dt(c)(u))),f?(f.unsubscribe(),f=null,E.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,E.subscribe(a))})}var Kt=b(9300);function Zt(c){return c<=0?()=>et.E:(0,k.e)((u,a)=>{let f=[];u.subscribe(new ee.Q(a,g=>{f.push(g),c<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}var vt=b(8068),it=b(6590),pn=b(3900),Dt=b(5698),Sn=b(4351),Jt=b(590),mt=b(5577),bt=b(8505),rn=b(9808);
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
class on{constructor(u,a){this.id=u,this.url=a}}class or extends on{constructor(u,a,f="imperative",g=null){super(u,a),this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class yt extends on{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class En extends on{constructor(u,a,f){super(u,a),this.reason=f}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Ir extends on{constructor(u,a,f){super(u,a),this.error=f}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class q extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class I extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class P extends on{constructor(u,a,f,g,E){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=E}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class ie extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Y extends on{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ee{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class he{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class me{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class $e{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Pt{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class _t{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ae="primary";class nt{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function He(c){return new nt(c)}const Cn="ngNavigationCancelingError";function Pe(c){const u=Error("NavigationCancelingError: "+c);return u[Cn]=!0,u}function _n(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const g={};for(let E=0;E<f.length;E++){const w=f[E],S=c[E];if(w.startsWith(":"))g[w.substring(1)]=S;else if(w!==S.path)return null}return{consumed:c.slice(0,f.length),posParams:g}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function We(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let E=0;E<a.length;E++)if(g=a[E],!ir(c[g],u[g]))return!1;return!0}function ir(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((g,E)=>f[E]===g)}return c===u}function sr(c){return Array.prototype.concat.apply([],c)}function $n(c){return c.length>0?c[c.length-1]:null}function at(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Vt(c){return(0,y.CqO)(c)?c:(0,y.QGY)(c)?(0,G.D)(Promise.resolve(c)):(0,$.of)(c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kr={exact:function ur(c,u,a){if(!O(c.segments,u.segments)||!sn(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!ur(c.children[f],u.children[f],a))return!1;return!0},subset:lr},Sr={exact:function(c,u){return We(c,u)},subset:function(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>ir(c[a],u[a]))},ignored:()=>!0};function ar(c,u,a){return kr[a.paths](c.root,u.root,a.matrixParams)&&Sr[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function lr(c,u,a){return An(c,u,u.segments,a)}function An(c,u,a,f){if(c.segments.length>a.length){const g=c.segments.slice(0,a.length);return!(!O(g,a)||u.hasChildren()||!sn(g,a,f))}if(c.segments.length===a.length){if(!O(c.segments,a)||!sn(c.segments,a,f))return!1;for(const g in u.children)if(!c.children[g]||!lr(c.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,c.segments.length),E=a.slice(c.segments.length);return!!(O(c.segments,g)&&sn(c.segments,g,f)&&c.children[Ae])&&An(c.children[Ae],u,E,f)}}function sn(c,u,a){return u.every((f,g)=>Sr[a](c[g].parameters,f.parameters))}class yn{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=He(this.queryParams)),this._queryParamMap}toString(){return Q.serialize(this)}}class Fe{constructor(u,a){this.segments=u,this.children=a,this.parent=null,at(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Re(this)}}class Nt{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=He(this.parameters)),this._parameterMap}toString(){return zn(this)}}function O(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class M{}class L{parse(u){const a=new Xr(u);return new yn(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${ke(u.root,!0)}`,f=function(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(g=>`${ct(a)}=${ct(g)}`).join("&"):`${ct(a)}=${ct(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);var c;return`${a}${f}${"string"==typeof u.fragment?`#${c=u.fragment,encodeURI(c)}`:""}`}}const Q=new L;function Re(c){return c.segments.map(u=>zn(u)).join("/")}function ke(c,u){if(!c.hasChildren())return Re(c);if(u){const a=c.children[Ae]?ke(c.children[Ae],!1):"",f=[];return at(c.children,(g,E)=>{E!==Ae&&f.push(`${E}:${ke(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function(c,u){let a=[];return at(c.children,(f,g)=>{g===Ae&&(a=a.concat(u(f,g)))}),at(c.children,(f,g)=>{g!==Ae&&(a=a.concat(u(f,g)))}),a}(c,(f,g)=>g===Ae?[ke(c.children[Ae],!1)]:[`${g}:${ke(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[Ae]?`${Re(c)}/${a[0]}`:`${Re(c)}/(${a.join("//")})`}}function Lt(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ct(c){return Lt(c).replace(/%3B/gi,";")}function ze(c){return Lt(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ut(c){return decodeURIComponent(c)}function Yt(c){return ut(c.replace(/\+/g,"%20"))}function zn(c){return`${ze(c.path)}${function(c){return Object.keys(c).map(u=>`;${ze(u)}=${ze(c[u])}`).join("")}(c.parameters)}`}const Et=/^[^\/()?;=#]+/;function xn(c){const u=c.match(Et);return u?u[0]:""}const Gn=/^[^=?&#]+/,Jr=/^[^&#]+/;class Xr{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Fe([],{}):new Fe([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[Ae]=new Fe(u,a)),f}parseSegment(){const u=xn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new Nt(ut(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=xn(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=xn(this.remaining);g&&(f=g,this.capture(f))}u[ut(a)]=ut(f)}parseQueryParam(u){const a=function(c){const u=c.match(Gn);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const w=function(c){const u=c.match(Jr);return u?u[0]:""}(this.remaining);w&&(f=w,this.capture(f))}const g=Yt(a),E=Yt(f);if(u.hasOwnProperty(g)){let w=u[g];Array.isArray(w)||(w=[w],u[g]=w),w.push(E)}else u[g]=E}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=xn(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new Error(`Cannot parse url '${this.url}'`);let E;f.indexOf(":")>-1?(E=f.substr(0,f.indexOf(":")),this.capture(E),this.capture(":")):u&&(E=Ae);const w=this.parseChildren();a[E]=1===Object.keys(w).length?w[Ae]:new Fe([],w),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pn{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Tt(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=Tt(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=Dn(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return Dn(u,this._root).map(a=>a.value)}}function Tt(c,u){if(c===u.value)return u;for(const a of u.children){const f=Tt(c,a);if(f)return f}return null}function Dn(c,u){if(c===u.value)return[u];for(const a of u.children){const f=Dn(c,a);if(f.length)return f.unshift(u),f}return[]}class $t{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function kt(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class ft extends Pn{constructor(u,a){super(u),this.snapshot=a,Xt(this,u)}toString(){return this.snapshot.toString()}}function eo(c,u){const a=function(c,u){const w=new Ot([],{},{},"",{},Ae,u,null,c.root,-1,{});return new Rr("",new $t(w,[]))}(c,u),f=new H.X([new Nt("",{})]),g=new H.X({}),E=new H.X({}),w=new H.X({}),S=new H.X(""),V=new jt(f,g,w,S,E,Ae,u,a.root);return V.snapshot=a.root,new ft(new $t(V,[]),a)}class jt{constructor(u,a,f,g,E,w,S,V){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=E,this.outlet=w,this.component=S,this._futureSnapshot=V}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,N.U)(u=>He(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,N.U)(u=>He(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function an(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],E=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(E.component)break;f--}}return function(c){return c.reduce((u,a)=>({params:Object.assign(Object.assign({},u.params),a.params),data:Object.assign(Object.assign({},u.data),a.data),resolve:Object.assign(Object.assign({},u.resolve),a._resolvedData)}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Ot{constructor(u,a,f,g,E,w,S,V,Ce,Ge,Oe){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=E,this.outlet=w,this.component=S,this.routeConfig=V,this._urlSegment=Ce,this._lastPathIndex=Ge,this._resolve=Oe}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=He(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=He(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Rr extends Pn{constructor(u,a){super(a),this.url=u,Xt(this,a)}toString(){return _o(this._root)}}function Xt(c,u){u.value._routerState=c,u.children.forEach(a=>Xt(c,a))}function _o(c){const u=c.children.length>0?` { ${c.children.map(_o).join(", ")} } `:"";return`${c.value}${u}`}function wo(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,We(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),We(u.params,a.params)||c.params.next(a.params),function(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!We(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),We(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function Br(c,u){const a=We(c.params,u.params)&&function(c,u){return O(c,u)&&c.every((a,f)=>We(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||Br(c.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ur(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function(c,u,a){return u.children.map(f=>{for(const g of a.children)if(c.shouldReuseRoute(f.value,g.value.snapshot))return Ur(c,f,g);return Ur(c,f)})}(c,u,a);return new $t(f,g)}{if(c.shouldAttach(u.value)){const E=c.retrieve(u.value);if(null!==E){const w=E.route;return w.value._futureSnapshot=u.value,w.children=u.children.map(S=>Ur(c,S)),w}}const f=function(c){return new jt(new H.X(c.url),new H.X(c.params),new H.X(c.queryParams),new H.X(c.fragment),new H.X(c.data),c.outlet,c.component,c)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),g=u.children.map(E=>Ur(c,E));return new $t(f,g)}}function Hr(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function Vr(c){return"object"==typeof c&&null!=c&&c.outlets}function bo(c,u,a,f,g){let E={};return f&&at(f,(w,S)=>{E[S]=Array.isArray(w)?w.map(V=>`${V}`):`${w}`}),new yn(a.root===c?u:wi(a.root,c,u),E,g)}function wi(c,u,a){const f={};return at(c.children,(g,E)=>{f[E]=g===u?a:wi(g,u,a)}),new Fe(c.segments,f)}class bi{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&Hr(f[0]))throw new Error("Root segment cannot have matrix parameters");const g=f.find(Vr);if(g&&g!==$n(f))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Mo{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function to(c,u,a){if(c||(c=new Fe([],{})),0===c.segments.length&&c.hasChildren())return On(c,u,a);const f=function(c,u,a){let f=0,g=u;const E={match:!1,pathIndex:0,commandIndex:0};for(;g<c.segments.length;){if(f>=a.length)return E;const w=c.segments[g],S=a[f];if(Vr(S))break;const V=`${S}`,Ce=f<a.length-1?a[f+1]:null;if(g>0&&void 0===V)break;if(V&&Ce&&"object"==typeof Ce&&void 0===Ce.outlets){if(!no(V,Ce,w))return E;f+=2}else{if(!no(V,{},w))return E;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(c,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const E=new Fe(c.segments.slice(0,f.pathIndex),{});return E.children[Ae]=new Fe(c.segments.slice(f.pathIndex),c.children),On(E,0,g)}return f.match&&0===g.length?new Fe(c.segments,{}):f.match&&!c.hasChildren()?To(c,u,a):f.match?On(c,0,g):To(c,u,a)}function On(c,u,a){if(0===a.length)return new Fe(c.segments,{});{const f=function(c){return Vr(c[0])?c[0].outlets:{[Ae]:c}}(a),g={};return at(f,(E,w)=>{"string"==typeof E&&(E=[E]),null!==E&&(g[w]=to(c.children[w],u,E))}),at(c.children,(E,w)=>{void 0===f[w]&&(g[w]=E)}),new Fe(c.segments,g)}}function To(c,u,a){const f=c.segments.slice(0,u);let g=0;for(;g<a.length;){const E=a[g];if(Vr(E)){const V=Ca(E.outlets);return new Fe(f,V)}if(0===g&&Hr(a[0])){f.push(new Nt(c.segments[u].path,Fn(a[0]))),g++;continue}const w=Vr(E)?E.outlets[Ae]:`${E}`,S=g<a.length-1?a[g+1]:null;w&&S&&Hr(S)?(f.push(new Nt(w,Fn(S))),g+=2):(f.push(new Nt(w,{})),g++)}return new Fe(f,{})}function Ca(c){const u={};return at(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=To(new Fe([],{}),0,a))}),u}function Fn(c){const u={};return at(c,(a,f)=>u[f]=`${a}`),u}function no(c,u,a){return c==a.path&&We(u,a.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class So{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),wo(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=kt(a);u.children.forEach(E=>{const w=E.value.outlet;this.deactivateRoutes(E,g[w],f),delete g[w]}),at(g,(E,w)=>{this.deactivateRouteAndItsChildren(E,f)})}deactivateRoutes(u,a,f){const g=u.value,E=a?a.value:null;if(g===E)if(g.component){const w=f.getContext(g.outlet);w&&this.deactivateChildRoutes(u,a,w.children)}else this.deactivateChildRoutes(u,a,f);else E&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,E=kt(u);for(const w of Object.keys(E))this.deactivateRouteAndItsChildren(E[w],g);if(f&&f.outlet){const w=f.outlet.detach(),S=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:w,route:u,contexts:S})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,E=kt(u);for(const w of Object.keys(E))this.deactivateRouteAndItsChildren(E[w],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=kt(a);u.children.forEach(E=>{this.activateRoutes(E,g[E.value.outlet],f),this.forwardEvent(new Pt(E.value.snapshot))}),u.children.length&&this.forwardEvent(new $e(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,E=a?a.value:null;if(wo(g),g===E)if(g.component){const w=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,w.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const w=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const S=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),w.children.onOutletReAttached(S.contexts),w.attachRef=S.componentRef,w.route=S.route.value,w.outlet&&w.outlet.attach(S.componentRef,S.route.value),wo(S.route.value),this.activateChildRoutes(u,null,w.children)}else{const S=function(c){for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig;if(a&&a.component)return null}return null}
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
       */function Nn(c){return"function"==typeof c}function cr(c){return c instanceof yn}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const dr=Symbol("INITIAL_VALUE");function fr(){return(0,pn.w)(c=>Te(c.map(u=>u.pipe((0,Dt.q)(1),function(...c){const u=(0,Ie.yG)(c);return(0,k.e)((a,f)=>{(u?qe(c,a,u):qe(c,a)).subscribe(f)})}(dr)))).pipe(qt((u,a)=>{let f=!1;return a.reduce((g,E,w)=>g!==dr?g:(E===dr&&(f=!0),f||!1!==E&&w!==a.length-1&&!cr(E)?g:E),u)},dr),(0,Kt.h)(u=>u!==dr),(0,N.U)(u=>cr(u)?u:!0===u),(0,Dt.q)(1)))}
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
       */let D=(()=>{class c{constructor(a,f,g,E,w){this.parentContexts=a,this.location=f,this.resolver=g,this.changeDetector=w,this.activated=null,this._activatedRoute=null,this.activateEvents=new y.vpe,this.deactivateEvents=new y.vpe,this.attachEvents=new y.vpe,this.detachEvents=new y.vpe,this.name=E||Ae,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=a;const w=(f=f||this.resolver).resolveComponentFactory(a._futureSnapshot.routeConfig.component),S=this.parentContexts.getOrCreateContext(this.name).children,V=new h(a,S,this.location.injector);this.activated=this.location.createComponent(w,this.location.length,V),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(y.Y36(p),y.Y36(y.s_b),y.Y36(y._Vd),y.$8M("name"),y.Y36(y.sBO))},c.\u0275dir=y.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class h{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===jt?this.route:u===p?this.childContexts:this.parent.get(u,a)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let C=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=y.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&y._UZ(0,"router-outlet")},directives:[D],encapsulation:2}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function x(c,u=""){for(let a=0;a<c.length;a++){const f=c[a];B(f,se(u,f))}}function B(c,u){c.children&&x(c.children,u)}function se(c,u){return u?c||u.path?c&&!u.path?`${c}/`:!c&&u.path?u.path:`${c}/${u.path}`:"":c}function Se(c){const u=c.children&&c.children.map(Se),a=u?Object.assign(Object.assign({},c),{children:u}):Object.assign({},c);return!a.component&&(u||a.loadChildren)&&a.outlet&&a.outlet!==Ae&&(a.component=C),a}function Ze(c){return c.outlet||Ae}function Xe(c,u){const a=c.filter(f=>Ze(f)===u);return a.push(...c.filter(f=>Ze(f)!==u)),a
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const pt={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function Je(c,u,a){var f;if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?Object.assign({},pt):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const E=(u.matcher||_n)(a,c,u);if(!E)return Object.assign({},pt);const w={};at(E.posParams,(V,Ce)=>{w[Ce]=V.path});const S=E.consumed.length>0?Object.assign(Object.assign({},w),E.consumed[E.consumed.length-1].parameters):w;return{matched:!0,consumedSegments:E.consumed,lastChild:E.consumed.length,parameters:S,positionalParamSegments:null!==(f=E.posParams)&&void 0!==f?f:{}}}function gt(c,u,a,f,g="corrected"){if(a.length>0&&function(c,u,a){return a.some(f=>Qt(c,u,f)&&Ze(f)!==Ae)}(c,a,f)){const w=new Fe(u,function(c,u,a,f){const g={};g[Ae]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const E of a)if(""===E.path&&Ze(E)!==Ae){const w=new Fe([],{});w._sourceSegment=c,w._segmentIndexShift=u.length,g[Ze(E)]=w}return g}(c,u,f,new Fe(a,c.children)));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:[]}}if(0===a.length&&function(c,u,a){return a.some(f=>Qt(c,u,f))}(c,a,f)){const w=new Fe(c.segments,function(c,u,a,f,g,E){const w={};for(const S of f)if(Qt(c,a,S)&&!g[Ze(S)]){const V=new Fe([],{});V._sourceSegment=c,V._segmentIndexShift="legacy"===E?c.segments.length:u.length,w[Ze(S)]=V}return Object.assign(Object.assign({},g),w)}(c,u,a,f,c.children,g));return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}const E=new Fe(c.segments,c.children);return E._sourceSegment=c,E._segmentIndexShift=u.length,{segmentGroup:E,slicedSegments:a}}function Qt(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function Ln(c,u,a,f){return!!(Ze(c)===f||f!==Ae&&Qt(u,a,c))&&("**"===c.path||Je(u,c,a).matched)}function xr(c,u,a){return 0===u.length&&!c.children[a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ne{constructor(u){this.segmentGroup=u||null}}class xo{constructor(u){this.urlTree=u}}function Po(c){return new T.y(u=>u.error(new Ne(c)))}function As(c){return new T.y(u=>u.error(new xo(c)))}function _a(c){return new T.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${c}'`)))}class ba{constructor(u,a,f,g,E){this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=E,this.allowRedirects=!0,this.ngModule=u.get(y.h0i)}apply(){const u=gt(this.urlTree.root,[],[],this.config).segmentGroup,a=new Fe(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,a,Ae).pipe((0,N.U)(E=>this.createUrlTree(rt(E),this.urlTree.queryParams,this.urlTree.fragment))).pipe(dt(E=>{if(E instanceof xo)return this.allowRedirects=!1,this.match(E.urlTree);throw E instanceof Ne?this.noMatchError(E):E}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,Ae).pipe((0,N.U)(g=>this.createUrlTree(rt(g),u.queryParams,u.fragment))).pipe(dt(g=>{throw g instanceof Ne?this.noMatchError(g):g}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,a,f){const g=u.segments.length>0?new Fe([],{[Ae]:u}):u;return new yn(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,N.U)(E=>new Fe([],E))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const E of Object.keys(f.children))"primary"===E?g.unshift(E):g.push(E);return(0,G.D)(g).pipe((0,Sn.b)(E=>{const w=f.children[E],S=Xe(a,E);return this.expandSegmentGroup(u,S,w,E).pipe((0,N.U)(V=>({segment:V,outlet:E})))}),qt((E,w)=>(E[w.outlet]=w.segment,E),{}),function(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Kt.h)((g,E)=>c(g,E,f)):W.y,Zt(1),a?(0,it.d)(u):(0,vt.T)(()=>new Le.K))}())}expandSegment(u,a,f,g,E,w){return(0,G.D)(f).pipe((0,Sn.b)(S=>this.expandSegmentAgainstRoute(u,a,f,S,g,E,w).pipe(dt(Ce=>{if(Ce instanceof Ne)return(0,$.of)(null);throw Ce}))),(0,Jt.P)(S=>!!S),dt((S,V)=>{if(S instanceof Le.K||"EmptyError"===S.name){if(xr(a,g,E))return(0,$.of)(new Fe([],{}));throw new Ne(a)}throw S}))}expandSegmentAgainstRoute(u,a,f,g,E,w,S){return Ln(g,a,E,w)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,E,w):S&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,E,w):Po(a):Po(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,E,w){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,w):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,E,w)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const E=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?As(E):this.lineralizeSegments(f,E).pipe((0,mt.z)(w=>{const S=new Fe(w,{});return this.expandSegment(u,S,a,w,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,E,w){const{matched:S,consumedSegments:V,lastChild:Ce,positionalParamSegments:Ge}=Je(a,g,E);if(!S)return Po(a);const Oe=this.applyRedirectCommands(V,g.redirectTo,Ge);return g.redirectTo.startsWith("/")?As(Oe):this.lineralizeSegments(g,Oe).pipe((0,mt.z)(st=>this.expandSegment(u,a,f,st.concat(E.slice(Ce)),w,!1)))}matchSegmentAgainstRoute(u,a,f,g,E){if("**"===f.path)return f.loadChildren?(f._loadedConfig?(0,$.of)(f._loadedConfig):this.configLoader.load(u.injector,f)).pipe((0,N.U)(st=>(f._loadedConfig=st,new Fe(g,{})))):(0,$.of)(new Fe(g,{}));const{matched:w,consumedSegments:S,lastChild:V}=Je(a,f,g);if(!w)return Po(a);const Ce=g.slice(V);return this.getChildConfig(u,f,g).pipe((0,mt.z)(Oe=>{const st=Oe.module,lt=Oe.routes,{segmentGroup:jn,slicedSegments:ln}=gt(a,S,Ce,lt),cn=new Fe(jn.segments,jn.children);if(0===ln.length&&cn.hasChildren())return this.expandChildren(st,lt,cn).pipe((0,N.U)(po=>new Fe(S,po)));if(0===lt.length&&0===ln.length)return(0,$.of)(new Fe(S,{}));const Zn=Ze(f)===E;return this.expandSegment(st,cn,lt,ln,Zn?Ae:E,!0).pipe((0,N.U)(dn=>new Fe(S.concat(dn.segments),dn.children)))}))}getChildConfig(u,a,f){return a.children?(0,$.of)(new Ao(a.children,u)):a.loadChildren?void 0!==a._loadedConfig?(0,$.of)(a._loadedConfig):this.runCanLoadGuards(u.injector,a,f).pipe((0,mt.z)(g=>{return g?this.configLoader.load(u.injector,a).pipe((0,N.U)(E=>(a._loadedConfig=E,E))):(c=a,new T.y(u=>u.error(Pe(`Cannot load children because the guard of the route "path: '${c.path}'" returned false`))));var c})):(0,$.of)(new Ao([],u))}runCanLoadGuards(u,a,f){const g=a.canLoad;if(!g||0===g.length)return(0,$.of)(!0);const E=g.map(w=>{const S=u.get(w);let V;if((c=S)&&Nn(c.canLoad))V=S.canLoad(a,f);else{if(!Nn(S))throw new Error("Invalid CanLoad guard");V=S(a,f)}var c;return Vt(V)});return(0,$.of)(E).pipe(fr(),(0,bt.b)(w=>{if(!cr(w))return;const S=Pe(`Redirecting to "${this.urlSerializer.serialize(w)}"`);throw S.url=w,S}),(0,N.U)(w=>!0===w))}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return(0,$.of)(f);if(g.numberOfChildren>1||!g.children[Ae])return _a(u.redirectTo);g=g.children[Ae]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const E=this.createSegmentGroup(u,a.root,f,g);return new yn(E,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return at(u,(g,E)=>{if("string"==typeof g&&g.startsWith(":")){const S=g.substring(1);f[E]=a[S]}else f[E]=g}),f}createSegmentGroup(u,a,f,g){const E=this.createSegments(u,a.segments,f,g);let w={};return at(a.children,(S,V)=>{w[V]=this.createSegmentGroup(u,S,f,g)}),new Fe(E,w)}createSegments(u,a,f,g){return a.map(E=>E.path.startsWith(":")?this.findPosParam(u,E,g):this.findOrReturn(E,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new Error(`Cannot redirect to '${u}'. Cannot find '${a.path}'.`);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function rt(c){const u={};for(const f of Object.keys(c.children)){const E=rt(c.children[f]);(E.segments.length>0||E.hasChildren())&&(u[f]=E)}return function(c){if(1===c.numberOfChildren&&c.children[Ae]){const u=c.children[Ae];return new Fe(c.segments.concat(u.segments),u.children)}return c}(new Fe(c.segments,u))}
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
class St{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class io{constructor(u,a){this.component=u,this.route=a}}function so(c,u,a){const f=c._root;return Oo(f,u?u._root:null,a,[f.value])}function $r(c,u,a){const f=function(c){if(!c)return null;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a&&a._loadedConfig)return a._loadedConfig}return null}(u);return(f?f.module.injector:a).get(c)}function Oo(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const E=kt(u);return c.children.forEach(w=>{(function(c,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const E=c.value,w=u?u.value:null,S=a?a.getContext(c.value.outlet):null;if(w&&E.routeConfig===w.routeConfig){const V=function(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!O(c.url,u.url);case"pathParamsOrQueryParamsChange":return!O(c.url,u.url)||!We(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Br(c,u)||!We(c.queryParams,u.queryParams);default:return!Br(c,u)}}(w,E,E.routeConfig.runGuardsAndResolvers);V?g.canActivateChecks.push(new St(f)):(E.data=w.data,E._resolvedData=w._resolvedData),Oo(c,u,E.component?S?S.children:null:a,f,g),V&&S&&S.outlet&&S.outlet.isActivated&&g.canDeactivateChecks.push(new io(S.outlet.component,w))}else w&&hr(u,S,g),g.canActivateChecks.push(new St(f)),Oo(c,null,E.component?S?S.children:null:a,f,g)})(w,E[w.value.outlet],a,f.concat([w.value]),g),delete E[w.value.outlet]}),at(E,(w,S)=>hr(w,a.getContext(S),g)),g}function hr(c,u,a){const f=kt(c),g=c.value;at(f,(E,w)=>{hr(E,g.component?u?u.children.getContext(w):null:u,a)}),a.canDeactivateChecks.push(new io(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
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
class Aa{}function No(c){return new T.y(u=>u.error(c))}class Os{constructor(u,a,f,g,E,w){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=E,this.relativeLinkResolution=w}recognize(){const u=gt(this.urlTree.root,[],[],this.config.filter(w=>void 0===w.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,Ae);if(null===a)return null;const f=new Ot([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},Ae,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new $t(f,a),E=new Rr(this.url,g);return this.inheritParamsAndData(E._root),E}inheritParamsAndData(u){const a=u.value,f=an(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const E of Object.keys(a.children)){const w=a.children[E],S=Xe(u,E),V=this.processSegmentGroup(S,w,E);if(null===V)return null;f.push(...V)}const g=ao(f);return g.sort((u,a)=>u.value.outlet===Ae?-1:a.value.outlet===Ae?1:u.value.outlet.localeCompare(a.value.outlet)),g}processSegment(u,a,f,g){for(const E of u){const w=this.processSegmentAgainstRoute(E,a,f,g);if(null!==w)return w}return xr(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!Ln(u,a,f,g))return null;let E,w=[],S=[];if("**"===u.path){const lt=f.length>0?$n(f).parameters:{};E=new Ot(f,lt,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ni(u),Ze(u),u.component,u,Oi(a),Fi(a)+f.length,uo(u))}else{const lt=Je(a,u,f);if(!lt.matched)return null;w=lt.consumedSegments,S=f.slice(lt.lastChild),E=new Ot(w,lt.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ni(u),Ze(u),u.component,u,Oi(a),Fi(a)+w.length,uo(u))}const V=(c=u).children?c.children:c.loadChildren?c._loadedConfig.routes:[],{segmentGroup:Ce,slicedSegments:Ge}=gt(a,w,S,V.filter(lt=>void 0===lt.redirectTo),this.relativeLinkResolution);var c;if(0===Ge.length&&Ce.hasChildren()){const lt=this.processChildren(V,Ce);return null===lt?null:[new $t(E,lt)]}if(0===V.length&&0===Ge.length)return[new $t(E,[])];const Oe=Ze(u)===g,st=this.processSegment(V,Ce,Ge,Oe?Ae:g);return null===st?null:[new $t(E,st)]}}function Fs(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function ao(c){const u=[],a=new Set;for(const f of c){if(!Fs(f)){u.push(f);continue}const g=u.find(E=>f.value.routeConfig===E.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=ao(f.children);u.push(new $t(f.value,g))}return u.filter(f=>!a.has(f))}function Oi(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Fi(c){let u=c,a=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift?u._segmentIndexShift:0;return a-1}function Ni(c){return c.data||{}}function uo(c){return c.resolve||{}}
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
function Lo(c){return(0,pn.w)(u=>{const a=c(u);return a?(0,G.D)(a).pipe((0,N.U)(()=>u)):(0,$.of)(u)})}
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
       */const Li=new y.OlP("ROUTES");class Ls{constructor(u,a,f,g){this.injector=u,this.compiler=a,this.onLoadStartListener=f,this.onLoadEndListener=g}load(u,a){if(a._loader$)return a._loader$;this.onLoadStartListener&&this.onLoadStartListener(a);const g=this.loadModuleFactory(a.loadChildren).pipe((0,N.U)(E=>{this.onLoadEndListener&&this.onLoadEndListener(a);const w=E.create(u);return new Ao(sr(w.injector.get(Li,void 0,y.XFs.Self|y.XFs.Optional)).map(Se),w)}),dt(E=>{throw a._loader$=void 0,E}));return a._loader$=new K(g,()=>new Mt.x).pipe(U()),a._loader$}loadModuleFactory(u){return Vt(u()).pipe((0,mt.z)(a=>a instanceof y.YKP?(0,$.of)(a):(0,G.D)(this.compiler.compileModuleAsync(a))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jo{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}function Bo(c){throw c}function ki(c,u,a){return u.parse("/")}function ji(c,u){return(0,$.of)(null)}const La={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},gr={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let zt=(()=>{class c{constructor(a,f,g,E,w,S,V){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=E,this.config=V,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Mt.x,this.errorHandler=Bo,this.malformedUriErrorHandler=ki,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:ji,afterPreactivation:ji},this.urlHandlingStrategy=new jo,this.routeReuseStrategy=new Na,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=w.get(y.h0i),this.console=w.get(y.c2e);const Oe=w.get(y.R0b);this.isNgZoneEnabled=Oe instanceof y.R0b&&y.R0b.isInAngularZone(),this.resetConfig(V),this.currentUrlTree=new yn(new Fe([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new Ls(w,S,st=>this.triggerEvent(new Ee(st)),st=>this.triggerEvent(new he(st))),this.routerState=eo(this.currentUrlTree,this.rootComponentType),this.transitions=new H.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var a;return null===(a=this.location.getState())||void 0===a?void 0:a.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,Kt.h)(g=>0!==g.id),(0,N.U)(g=>Object.assign(Object.assign({},g),{extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),(0,pn.w)(g=>{let E=!1,w=!1;return(0,$.of)(g).pipe((0,bt.b)(S=>{this.currentNavigation={id:S.id,initialUrl:S.currentRawUrl,extractedUrl:S.extractedUrl,trigger:S.source,extras:S.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),(0,pn.w)(S=>{const V=this.browserUrlTree.toString(),Ce=!this.navigated||S.extractedUrl.toString()!==V||V!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||Ce)&&this.urlHandlingStrategy.shouldProcessUrl(S.rawUrl))return Uo(S.source)&&(this.browserUrlTree=S.extractedUrl),(0,$.of)(S).pipe((0,pn.w)(Oe=>{const st=this.transitions.getValue();return f.next(new or(Oe.id,this.serializeUrl(Oe.extractedUrl),Oe.source,Oe.restoredState)),st!==this.transitions.getValue()?et.E:Promise.resolve(Oe)}),function(c,u,a,f){return(0,pn.w)(g=>function(c,u,a,f,g){return new ba(c,u,a,f,g).apply()}(c,u,a,g.extractedUrl,f).pipe((0,N.U)(E=>Object.assign(Object.assign({},g),{urlAfterRedirects:E}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,bt.b)(Oe=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:Oe.urlAfterRedirects})}),function(c,u,a,f,g){return(0,mt.z)(E=>function(c,u,a,f,g="emptyOnly",E="legacy"){try{const w=new Os(c,u,a,f,g,E).recognize();return null===w?No(new Aa):(0,$.of)(w)}catch(w){return No(w)}}(c,u,E.urlAfterRedirects,a(E.urlAfterRedirects),f,g).pipe((0,N.U)(w=>Object.assign(Object.assign({},E),{targetSnapshot:w}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,Oe=>this.serializeUrl(Oe),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,bt.b)(Oe=>{if("eager"===this.urlUpdateStrategy){if(!Oe.extras.skipLocationChange){const lt=this.urlHandlingStrategy.merge(Oe.urlAfterRedirects,Oe.rawUrl);this.setBrowserUrl(lt,Oe)}this.browserUrlTree=Oe.urlAfterRedirects}const st=new q(Oe.id,this.serializeUrl(Oe.extractedUrl),this.serializeUrl(Oe.urlAfterRedirects),Oe.targetSnapshot);f.next(st)}));if(Ce&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:st,extractedUrl:lt,source:jn,restoredState:ln,extras:cn}=S,Zn=new or(st,this.serializeUrl(lt),jn,ln);f.next(Zn);const Yr=eo(lt,this.rootComponentType).snapshot;return(0,$.of)(Object.assign(Object.assign({},S),{targetSnapshot:Yr,urlAfterRedirects:lt,extras:Object.assign(Object.assign({},cn),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=S.rawUrl,S.resolve(null),et.E}),Lo(S=>{const{targetSnapshot:V,id:Ce,extractedUrl:Ge,rawUrl:Oe,extras:{skipLocationChange:st,replaceUrl:lt}}=S;return this.hooks.beforePreactivation(V,{navigationId:Ce,appliedUrlTree:Ge,rawUrlTree:Oe,skipLocationChange:!!st,replaceUrl:!!lt})}),(0,bt.b)(S=>{const V=new I(S.id,this.serializeUrl(S.extractedUrl),this.serializeUrl(S.urlAfterRedirects),S.targetSnapshot);this.triggerEvent(V)}),(0,N.U)(S=>Object.assign(Object.assign({},S),{guards:so(S.targetSnapshot,S.currentSnapshot,this.rootContexts)})),function(c,u){return(0,mt.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:E,canDeactivateChecks:w}}=a;return 0===w.length&&0===E.length?(0,$.of)(Object.assign(Object.assign({},a),{guardsResult:!0})):function(c,u,a,f){return(0,G.D)(c).pipe((0,mt.z)(g=>function(c,u,a,f,g){const E=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!E||0===E.length)return(0,$.of)(!0);const w=E.map(S=>{const V=$r(S,u,g);let Ce;if(function(c){return c&&Nn(c.canDeactivate)}(V))Ce=Vt(V.canDeactivate(c,u,a,f));else{if(!Nn(V))throw new Error("Invalid CanDeactivate guard");Ce=Vt(V(c,u,a,f))}return Ce.pipe((0,Jt.P)())});return(0,$.of)(w).pipe(fr())}(g.component,g.route,a,u,f)),(0,Jt.P)(g=>!0!==g,!0))}(w,f,g,c).pipe((0,mt.z)(S=>S&&function(c){return"boolean"==typeof c}(S)?function(c,u,a,f){return(0,G.D)(u).pipe((0,Sn.b)(g=>qe(function(c,u){return null!==c&&u&&u(new me(c)),(0,$.of)(!0)}(g.route.parent,f),function(c,u){return null!==c&&u&&u(new Ct(c)),(0,$.of)(!0)}(g.route,f),function(c,u,a){const f=u[u.length-1],E=u.slice(0,u.length-1).reverse().map(w=>function(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(w)).filter(w=>null!==w).map(w=>ge(()=>{const S=w.guards.map(V=>{const Ce=$r(V,w.node,a);let Ge;if(function(c){return c&&Nn(c.canActivateChild)}(Ce))Ge=Vt(Ce.canActivateChild(f,c));else{if(!Nn(Ce))throw new Error("Invalid CanActivateChild guard");Ge=Vt(Ce(f,c))}return Ge.pipe((0,Jt.P)())});return(0,$.of)(S).pipe(fr())}));return(0,$.of)(E).pipe(fr())}(c,g.path,a),function(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,$.of)(!0);const g=f.map(E=>ge(()=>{const w=$r(E,u,a);let S;if(function(c){return c&&Nn(c.canActivate)}(w))S=Vt(w.canActivate(u,c));else{if(!Nn(w))throw new Error("Invalid CanActivate guard");S=Vt(w(u,c))}return S.pipe((0,Jt.P)())}));return(0,$.of)(g).pipe(fr())}(c,g.route,a))),(0,Jt.P)(g=>!0!==g,!0))}(f,E,c,u):(0,$.of)(S)),(0,N.U)(S=>Object.assign(Object.assign({},a),{guardsResult:S})))})}(this.ngModule.injector,S=>this.triggerEvent(S)),(0,bt.b)(S=>{if(cr(S.guardsResult)){const Ce=Pe(`Redirecting to "${this.serializeUrl(S.guardsResult)}"`);throw Ce.url=S.guardsResult,Ce}const V=new P(S.id,this.serializeUrl(S.extractedUrl),this.serializeUrl(S.urlAfterRedirects),S.targetSnapshot,!!S.guardsResult);this.triggerEvent(V)}),(0,Kt.h)(S=>!!S.guardsResult||(this.restoreHistory(S),this.cancelNavigationTransition(S,""),!1)),Lo(S=>{if(S.guards.canActivateChecks.length)return(0,$.of)(S).pipe((0,bt.b)(V=>{const Ce=new ie(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot);this.triggerEvent(Ce)}),(0,pn.w)(V=>{let Ce=!1;return(0,$.of)(V).pipe(function(c,u){return(0,mt.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return(0,$.of)(a);let E=0;return(0,G.D)(g).pipe((0,Sn.b)(w=>function(c,u,a,f){return function(c,u,a,f){const g=Object.keys(c);if(0===g.length)return(0,$.of)({});const E={};return(0,G.D)(g).pipe((0,mt.z)(w=>function(c,u,a,f){const g=$r(c,u,f);return Vt(g.resolve?g.resolve(u,a):g(u,a))}(c[w],u,a,f).pipe((0,bt.b)(S=>{E[w]=S}))),Zt(1),(0,mt.z)(()=>Object.keys(E).length===g.length?(0,$.of)(E):et.E))}(c._resolve,c,u,f).pipe((0,N.U)(E=>(c._resolvedData=E,c.data=Object.assign(Object.assign({},c.data),an(c,a).resolve),null)))}(w.route,f,c,u)),(0,bt.b)(()=>E++),Zt(1),(0,mt.z)(w=>E===g.length?(0,$.of)(a):et.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,bt.b)({next:()=>Ce=!0,complete:()=>{Ce||(this.restoreHistory(V),this.cancelNavigationTransition(V,"At least one route resolver didn't emit any value."))}}))}),(0,bt.b)(V=>{const Ce=new Y(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot);this.triggerEvent(Ce)}))}),Lo(S=>{const{targetSnapshot:V,id:Ce,extractedUrl:Ge,rawUrl:Oe,extras:{skipLocationChange:st,replaceUrl:lt}}=S;return this.hooks.afterPreactivation(V,{navigationId:Ce,appliedUrlTree:Ge,rawUrlTree:Oe,skipLocationChange:!!st,replaceUrl:!!lt})}),(0,N.U)(S=>{const V=function(c,u,a){const f=Ur(c,u._root,a?a._root:void 0);return new ft(f,u)}(this.routeReuseStrategy,S.targetSnapshot,S.currentRouterState);return Object.assign(Object.assign({},S),{targetRouterState:V})}),(0,bt.b)(S=>{this.currentUrlTree=S.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(S.urlAfterRedirects,S.rawUrl),this.routerState=S.targetRouterState,"deferred"===this.urlUpdateStrategy&&(S.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,S),this.browserUrlTree=S.urlAfterRedirects)}),((c,u,a)=>(0,N.U)(f=>(new So(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,S=>this.triggerEvent(S)),(0,bt.b)({next(){E=!0},complete(){E=!0}}),function(c){return(0,k.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(c)}})}(()=>{var S;E||w||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),(null===(S=this.currentNavigation)||void 0===S?void 0:S.id)===g.id&&(this.currentNavigation=null)}),dt(S=>{if(w=!0,function(c){return c&&c[Cn]}(S)){const V=cr(S.url);V||(this.navigated=!0,this.restoreHistory(g,!0));const Ce=new En(g.id,this.serializeUrl(g.extractedUrl),S.message);f.next(Ce),V?setTimeout(()=>{const Ge=this.urlHandlingStrategy.merge(S.url,this.rawUrlTree),Oe={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Uo(g.source)};this.scheduleNavigation(Ge,"imperative",null,Oe,{resolve:g.resolve,reject:g.reject,promise:g.promise})},0):g.resolve(!1)}else{this.restoreHistory(g,!0);const V=new Ir(g.id,this.serializeUrl(g.extractedUrl),S);f.next(V);try{g.resolve(this.errorHandler(S))}catch(Ce){g.reject(Ce)}}return et.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next(Object.assign(Object.assign({},this.transitions.value),a))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{var g;const E={replaceUrl:!0},w=(null===(g=a.state)||void 0===g?void 0:g.navigationId)?a.state:null;if(w){const V=Object.assign({},w);delete V.navigationId,delete V.\u0275routerPageId,0!==Object.keys(V).length&&(E.state=V)}const S=this.parseUrl(a.url);this.scheduleNavigation(S,f,w,E)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){x(a),this.config=a.map(Se),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:E,fragment:w,queryParamsHandling:S,preserveFragment:V}=f,Ce=g||this.routerState.root,Ge=V?this.currentUrlTree.fragment:w;let Oe=null;switch(S){case"merge":Oe=Object.assign(Object.assign({},this.currentUrlTree.queryParams),E);break;case"preserve":Oe=this.currentUrlTree.queryParams;break;default:Oe=E||null}return null!==Oe&&(Oe=this.removeEmptyProps(Oe)),function(c,u,a,f,g){if(0===a.length)return bo(u.root,u.root,u,f,g);const E=function(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new bi(!0,0,c);let u=0,a=!1;const f=c.reduce((g,E,w)=>{if("object"==typeof E&&null!=E){if(E.outlets){const S={};return at(E.outlets,(V,Ce)=>{S[Ce]="string"==typeof V?V.split("/"):V}),[...g,{outlets:S}]}if(E.segmentPath)return[...g,E.segmentPath]}return"string"!=typeof E?[...g,E]:0===w?(E.split("/").forEach((S,V)=>{0==V&&"."===S||(0==V&&""===S?a=!0:".."===S?u++:""!=S&&g.push(S))}),g):[...g,E]},[]);return new bi(a,u,f)}(a);if(E.toRoot())return bo(u.root,new Fe([],{}),u,f,g);const w=function(c,u,a){if(c.isAbsolute)return new Mo(u.root,!0,0);if(-1===a.snapshot._lastPathIndex){const E=a.snapshot._urlSegment;return new Mo(E,E===u.root,0)}const f=Hr(c.commands[0])?0:1;return function(c,u,a){let f=c,g=u,E=a;for(;E>g;){if(E-=g,f=f.parent,!f)throw new Error("Invalid number of '../'");g=f.segments.length}return new Mo(f,!1,g-E)}(a.snapshot._urlSegment,a.snapshot._lastPathIndex+f,c.numberOfDoubleDots)}(E,u,c),S=w.processChildren?On(w.segmentGroup,w.index,E.commands):to(w.segmentGroup,w.index,E.commands);return bo(w.segmentGroup,S,u,f,g)}(Ce,this.currentUrlTree,a,Oe,null!=Ge?Ge:null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=cr(a)?a:this.parseUrl(a),E=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(E,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function(c){for(let u=0;u<c.length;u++){const a=c[u];if(null==a)throw new Error(`The requested path contains ${a} segment at index ${u}`)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?Object.assign({},La):!1===f?Object.assign({},gr):f,cr(a))return ar(this.currentUrlTree,a,g);const E=this.parseUrl(a);return ar(this.currentUrlTree,E,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const E=a[g];return null!=E&&(f[g]=E),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new yt(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,E,w){var S,V,Ce;if(this.disposed)return Promise.resolve(!1);const Ge=this.transitions.value,Oe=Uo(f)&&Ge&&!Uo(Ge.source),st=Ge.rawUrl.toString()===a.toString(),lt=Ge.id===(null===(S=this.currentNavigation)||void 0===S?void 0:S.id);if(Oe&&st&&lt)return Promise.resolve(!0);let ln,cn,Zn;w?(ln=w.resolve,cn=w.reject,Zn=w.promise):Zn=new Promise((po,Wa)=>{ln=po,cn=Wa});const Yr=++this.navigationId;let dn;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),dn=g&&g.\u0275routerPageId?g.\u0275routerPageId:E.replaceUrl||E.skipLocationChange?null!==(V=this.browserPageId)&&void 0!==V?V:0:(null!==(Ce=this.browserPageId)&&void 0!==Ce?Ce:0)+1):dn=0,this.setTransition({id:Yr,targetPageId:dn,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:E,resolve:ln,reject:cn,promise:Zn,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Zn.catch(po=>Promise.reject(po))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),E=Object.assign(Object.assign({},f.extras.state),this.generateNgRouterState(f.id,f.targetPageId));this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",E):this.location.go(g,"",E)}restoreHistory(a,f=!1){var g,E;if("computed"===this.canceledNavigationResolution){const w=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(g=this.currentNavigation)||void 0===g?void 0:g.finalUrl)||0===w?this.currentUrlTree===(null===(E=this.currentNavigation)||void 0===E?void 0:E.finalUrl)&&0===w&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(w)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new En(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function Uo(c){return"imperative"!==c}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ba{}class Bi{preload(u,a){return(0,$.of)(null)}}let Vo=(()=>{class c{constructor(a,f,g,E){this.router=a,this.injector=g,this.preloadingStrategy=E,this.loader=new Ls(g,f,V=>a.triggerEvent(new Ee(V)),V=>a.triggerEvent(new he(V)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,Kt.h)(a=>a instanceof yt),(0,Sn.b)(()=>this.preload())).subscribe(()=>{})}preload(){const a=this.injector.get(y.h0i);return this.processRoutes(a,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const E of f)if(E.loadChildren&&!E.canLoad&&E._loadedConfig){const w=E._loadedConfig;g.push(this.processRoutes(w.module,w.routes))}else E.loadChildren&&!E.canLoad?g.push(this.preloadConfig(a,E)):E.children&&g.push(this.processRoutes(a,E.children));return(0,G.D)(g).pipe((0,xe.J)(),(0,N.U)(E=>{}))}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>(f._loadedConfig?(0,$.of)(f._loadedConfig):this.loader.load(a.injector,f)).pipe((0,mt.z)(E=>(f._loadedConfig=E,this.processRoutes(E.module,E.routes)))))}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(zt),y.LFG(y.Sil),y.LFG(y.zs3),y.LFG(Ba))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})(),Wr=(()=>{class c{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof or?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof yt&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof _t&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new _t(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){y.$Z()},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mr=new y.OlP("ROUTER_CONFIGURATION"),Or=new y.OlP("ROUTER_FORROOT_GUARD"),Ha=[rn.Ye,{provide:M,useClass:L},{provide:zt,useFactory:function(c,u,a,f,g,E,w={},S,V){const Ce=new zt(null,c,u,a,f,g,sr(E));return S&&(Ce.urlHandlingStrategy=S),V&&(Ce.routeReuseStrategy=V),function(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(w,Ce),w.enableTracing&&Ce.events.subscribe(Ge=>{var Oe,st;null===(Oe=console.group)||void 0===Oe||Oe.call(console,`Router Event: ${Ge.constructor.name}`),console.log(Ge.toString()),console.log(Ge),null===(st=console.groupEnd)||void 0===st||st.call(console)}),Ce},deps:[M,p,rn.Ye,y.zs3,y.Sil,Li,mr,[class{},new y.FiY],[class{},new y.FiY]]},p,{provide:jt,useFactory:function(c){return c.routerState.root},deps:[zt]},Vo,Bi,class{preload(u,a){return a().pipe(dt(()=>(0,$.of)(null)))}},{provide:mr,useValue:{enableTracing:!1}}];function Kr(){return new y.PXZ("Router",zt)}let Ui=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[Ha,Hi(a),{provide:Or,useFactory:ks,deps:[[zt,new y.FiY,new y.tp0]]},{provide:mr,useValue:f||{}},{provide:rn.S$,useFactory:rc,deps:[rn.lw,[new y.tBr(rn.mr),new y.FiY],mr]},{provide:Wr,useFactory:$o,deps:[zt,rn.EM,mr]},{provide:Ba,useExisting:f&&f.preloadingStrategy?f.preloadingStrategy:Bi},{provide:y.PXZ,multi:!0,useFactory:Kr},[fo,{provide:y.ip1,multi:!0,useFactory:Vi,deps:[fo]},{provide:ho,useFactory:zo,deps:[fo]},{provide:y.tb,multi:!0,useExisting:ho}]]}}static forChild(a){return{ngModule:c,providers:[Hi(a)]}}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(Or,8),y.LFG(zt,8))},c.\u0275mod=y.oAB({type:c}),c.\u0275inj=y.cJS({}),c})();function $o(c,u,a){return a.scrollOffset&&u.setOffset(a.scrollOffset),new Wr(c,u,a)}function rc(c,u,a={}){return a.useHash?new rn.Do(c,u):new rn.b0(c,u)}function ks(c){return"guarded"}function Hi(c){return[{provide:y.deG,multi:!0,useValue:c},{provide:Li,multi:!0,useValue:c}]}let fo=(()=>{class c{constructor(a){this.injector=a,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new Mt.x}appInitializer(){return this.injector.get(rn.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let f=null;const g=new Promise(S=>f=S),E=this.injector.get(zt),w=this.injector.get(mr);return"disabled"===w.initialNavigation?(E.setUpLocationChangeListener(),f(!0)):"enabled"===w.initialNavigation||"enabledBlocking"===w.initialNavigation?(E.hooks.afterPreactivation=()=>this.initNavigation?(0,$.of)(null):(this.initNavigation=!0,f(!0),this.resultOfPreactivationDone),E.initialNavigation()):f(!0),g})}bootstrapListener(a){const f=this.injector.get(mr),g=this.injector.get(Vo),E=this.injector.get(Wr),w=this.injector.get(zt),S=this.injector.get(y.z2F);a===S.components[0]&&(("enabledNonBlocking"===f.initialNavigation||void 0===f.initialNavigation)&&w.initialNavigation(),g.setUpPreloading(),E.init(),w.resetRootComponentType(S.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return c.\u0275fac=function(a){return new(a||c)(y.LFG(y.zs3))},c.\u0275prov=y.Yz7({token:c,factory:c.\u0275fac}),c})();function Vi(c){return c.appInitializer.bind(c)}function zo(c){return c.bootstrapListener.bind(c)}const ho=new y.OlP("Router Initializer")}
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