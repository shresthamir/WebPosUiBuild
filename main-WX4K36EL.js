import{d as T,e as L,f as j,g as H,i as V,k as z,m as B,n as U,o as c,p as v}from"./chunk-N2CQRIEU.js";import{$ as _,$a as k,Ba as P,Bb as a,Cb as r,Db as d,Ec as D,Ka as F,Ub as p,Z as A,aa as M,ac as g,bb as I,ca as S,db as N,fa as f,gb as w,ja as m,ka as x,kc as E,na as R,pc as O}from"./chunk-I3ZKYF4A.js";var C=[{path:"",redirectTo:"menu-config",pathMatch:"full"},{path:"menu-config",loadChildren:()=>import("./chunk-O6VS6JPZ.js").then(o=>o.Menu_routes)},{path:"feature-config",loadChildren:()=>import("./chunk-C667NOCN.js").then(o=>o.Feature_routes)},{path:"app-setting-reg",loadChildren:()=>import("./chunk-WSFPAFND.js").then(o=>o.AppSetting_routes)},{path:"variant-reg",loadChildren:()=>import("./chunk-7RDYSY66.js").then(o=>o.Variant_routes)},{path:"variant-configuration",loadChildren:()=>import("./chunk-ZII47GQ2.js").then(o=>o.VariantConfig_routes)}],Z=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=x({type:o});static \u0275inj=M({imports:[c.forRoot(C),c]})};var X="@",q=(()=>{class o{constructor(e,n,i,s,l){this.doc=e,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=f(I,{optional:!0}),this.loadingSchedulerFn=f(J,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-DYQNNILC.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new A(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let l=new s(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new b(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let W=l.createRenderer(e,n);s.use(W),this.scheduler?.notify(10)}).catch(l=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){k()}}static{this.\u0275prov=_({token:o,factory:o.\u0275fac})}}return o})(),b=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,i){this.delegate.insertBefore(t,e,n,i)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(X)}},J=new S("");function Y(o="animations"){return w("NgAsyncAnimations"),R([{provide:N,useFactory:(t,e,n)=>new q(t,e,n,o),deps:[D,j,P]},{provide:F,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var G={providers:[v,{provide:E,useFactory:o=>()=>o.loadAppConfig(),deps:[v],multi:!0},O({eventCoalescing:!0}),U(C),V(),Y(),T(L([]))]};var u=class o{icon="assets/logos/dashboard_logo_small.png";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-header"]],standalone:!0,features:[g],decls:27,vars:0,consts:[[1,"header-wrapper"],[1,"top-bar"],[1,"logo-container","ms-1"],["src","assets/logos/imslogo.png","alt","IMS Logo","routerLink","/menu-config",1,"logo"],[1,"navbar","navbar-expand-lg","navbar-light","nav-links","container"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarContent","aria-controls","navbarContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","ms-auto"],[1,"navbar-toggler-icon"],["id","navbarContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","/menu-config",1,"nav-link"],["routerLink","/app-setting-reg",1,"nav-link"],["routerLink","/feature-config",1,"nav-link"],["routerLink","/variant-reg",1,"nav-link"],["routerLink","/variant-configuration",1,"nav-link"],[1,"settings-icon-container","ms-auto","me-4","mt-3"],["src","assets/images/setting.png","alt","Settings",1,"settings-icon"],[1,"bottom-bar"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),d(3,"img",3),r(),a(4,"nav",4)(5,"button",5),d(6,"span",6),r(),a(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),p(11,"Menu Configuration"),r()(),a(12,"li",9)(13,"a",11),p(14,"App Setting Registration"),r()(),a(15,"li",9)(16,"a",12),p(17,"Feature Configuration"),r()(),a(18,"li",9)(19,"a",13),p(20,"Variant Registration"),r()(),a(21,"li",9)(22,"a",14),p(23,"Variant Configuration"),r()()()()(),a(24,"div",15),d(25,"img",16),r()(),d(26,"div",17),r())},dependencies:[c,B],styles:[".top-bar[_ngcontent-%COMP%]{background-color:#336799;display:flex;justify-content:start;line-height:1.6rem}.bottom-bar[_ngcontent-%COMP%]{background-color:#6599ff;height:2.5rem}.logo-container[_ngcontent-%COMP%]{position:absolute;top:4px;border:none}.logo[_ngcontent-%COMP%]{width:93px;height:92px;margin-right:1rem}.nav-links[_ngcontent-%COMP%]{display:flex;justify-content:start;width:75%;margin:auto}.nav-link[_ngcontent-%COMP%]{color:#fff;font-size:14px;margin-right:20px;text-decoration:none}.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:active, .nav-link[_ngcontent-%COMP%]:focus{color:#6599ff}.settings-icon-container[_ngcontent-%COMP%]{margin-right:10px}.settings-icon[_ngcontent-%COMP%]{height:20px;width:20px;cursor:pointer}"]})};var h=class o{title="MenuConfigIMS";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-root"]],standalone:!0,features:[g],decls:2,vars:0,template:function(e,n){e&1&&d(0,"app-header")(1,"router-outlet")},dependencies:[z,u]})};H(h,G).catch(o=>console.error(o));
