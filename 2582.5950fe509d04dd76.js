"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[2582],{62106:(b,p,s)=>{s.d(p,{A:()=>t});var f=s(89953),h=s(66274);let t=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[f.m]}),l})()},49137:(b,p,s)=>{s.d(p,{C:()=>h});var f=s(66274);let h=(()=>{class t{transform(c,g,T){if(c)return g?c.filter(m=>{let v=m[T];const C=g.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(v?v.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(C))return m}):c}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275pipe=f.Yjl({name:"searchData",type:t,pure:!1}),t})()},92582:(b,p,s)=>{s.r(p),s.d(p,{TermsModule:()=>I});var f=s(89953),h=s(79765),t=s(66274),l=s(76165),c=s(67297),g=s(71180);let T=(()=>{class i{constructor(e,n,r){this.http=e,this.authService=n,this.state=r;const o=this.state.getGlobalSetting("apiUrl");o&&o.length>0&&(this.apiUrl=o)}onSave(e){return this.http.post(`${this.apiUrl}/savePOTermsAndConditions`,e)}getPOTerm(){return this.http.get(`${this.apiUrl}/getPOTermsAndConditions`)}onEditClicked(e){return console.log("FF"),this.http.get(`${this.apiUrl}/getPOTermsAndConditionsByID/?ID=${e.result.Id}`)}getTermForEdit(e){let n={status:"error",result:""},r=new h.xQ;return this.http.get(`${this.apiUrl}/getPOTermsAndConditionsByID/?ID=${e}`).subscribe(o=>{r.next(o),r.unsubscribe()},o=>{n.status="error",n.result=o,r.next(n),r.unsubscribe()}),r}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(l.eN),t.LFG(c.e),t.LFG(g.q))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var m=s(48083),v=s(67311),C=s(92752),d=s(7587),_=s(72533),A=s(49137);function y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td",21),t._uU(4),t.qZA(),t.TgZ(5,"td",22)(6,"button",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onEditClicked(o))}),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",24),t.NdJ("click",function(){const o=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onViewClicked(o))}),t._uU(9,"View"),t.qZA()()()}if(2&i){const e=a.$implicit;t.xp6(2),t.Oqu(e.ID),t.xp6(2),t.Oqu(e.Label)}}const L=function(i,a,e){return{itemsPerPage:i,currentPage:a,totalItems:e}};function x(i,a){if(1&i&&(t.ynx(0),t.YNc(1,y,10,2,"tr",19),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.termLists,e.filter,"Label"),t.kEZ(8,L,e.itemsPerPage,e.currentPage,e.totalCount)))}}function P(i,a){1&i&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",25)(3,"div",26),t._uU(4,"Terms Lists are unavailable."),t.qZA()()(),t.BQk())}function M(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"div",29)(3,"pagination-controls",30),t.NdJ("pageChange",function(r){t.CHM(e);const o=t.oxw();return t.KtG(o.termsPagination(r))}),t.qZA()()()()}}let w=(()=>{class i{constructor(e,n,r){this.router=e,this.alertService=n,this.termservice=r,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=13,this.directionLinks=!0}updown(e){"Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){console.log("onINit"),this.termservice.getPOTerm().subscribe(e=>{e?(console.log("Res",e),this.isLoader=!1,this.termLists=e?e.result:[],console.log("term",this.termLists,this.termLists.length)):(this.termLists=[],this.errorMessage="Something is wrong")},e=>{this.isLoader=!1,this.termLists=[],this.errorMessage="Something is wrong"})}onEditClicked(e){try{this.router.navigate(["./pages/masters/terms/add-term",{ID:e.ID,mode:"edit",returnUrl:this.router.url}])}catch(n){this.alertService.error(n)}}onViewClicked(e){try{this.router.navigate(["./pages/masters/terms/add-term",{ID:e.ID,mode:"view",returnUrl:this.router.url}])}catch(n){this.alertService.error(n)}}addUnit(){try{this.router.navigate(["./pages/masters/terms/add-term",{mode:"add",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}termsPagination(e){this.isLoader=!0,this.currentPage=e;const n=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n.isLoader=!1},500)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.F0),t.Y36(v.c),t.Y36(T))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-terms-and-conditions-list"]],hostBindings:function(e,n){1&e&&t.NdJ("keydown",function(o){return n.updown(o)},!1,t.evT)},decls:33,vars:12,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control","search-input",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","5%"],["scope","col",2,"width","70%"],["scope","col",2,"text-align","center","width","20%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","5%"],[2,"width","70%"],[2,"text-align","center","width","20%"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"click"],["colspan","3"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"pageChange"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Terms And Condition Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return n.addUnit()}),t._uU(8,"Add Term"),t.qZA()()(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"span"),t._uU(14,"Term And Conditions Lists"),t.qZA(),t.TgZ(15,"div",9)(16,"input",10),t.NdJ("ngModelChange",function(o){return n.filter=o}),t.qZA()()(),t.TgZ(17,"div",11)(18,"table",12)(19,"thead")(20,"tr",13)(21,"th",14),t._uU(22,"ID."),t.qZA(),t.TgZ(23,"th",15),t._uU(24,"Label"),t.qZA(),t.TgZ(25,"th",16),t._uU(26,"Action"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,x,4,12,"ng-container",17),t.YNc(29,P,5,0,"ng-container",17),t.ALo(30,"searchData"),t.qZA()(),t.YNc(31,M,4,0,"div",18),t.ALo(32,"searchData"),t.qZA()()()()),2&e&&(t.xp6(16),t.Q6J("ngModel",n.filter),t.xp6(12),t.Q6J("ngIf",n.termLists&&n.termLists.length>0),t.xp6(1),t.Q6J("ngIf",n.termLists&&0===t.Dn7(30,4,n.termLists,n.filter,"Label").length),t.xp6(2),t.Q6J("ngIf",n.termLists&&t.Dn7(32,8,n.termLists,n.filter,"Label").length>n.itemsPerPage))},dependencies:[m.rH,C.sg,C.O5,d.Fj,d.JJ,d.On,_.LS,_._s,A.C],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:465px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:55vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),i})();var S=s(14970),O=s(53074);function Z(i,a){1&i&&(t.TgZ(0,"small",21),t._uU(1," Label is required ! "),t.qZA())}const F=[{path:"",component:w},{path:"add-term",component:(()=>{class i{constructor(e,n,r,o,u,D,E){this.fb=e,this.spinnerService=n,this.alertService=r,this.router=o,this.termService=u,this.masterService=D,this._activatedRoute=E,this.TermList=[],this.mode="new",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1}updown(e){if("Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/masters/terms"])),"Enter"==e.code&&e.shiftKey&&e.preventDefault(),"F6"===e.code){if(e.preventDefault(),!this.TermsForm.valid)return;this.onSubmit()}}ngOnInit(){try{if(this.TermsForm=this.fb.group({Label:["",[d.kI.required]],TermsAndConditions:[""],ID:[]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.TermsForm.get("Label").disable(),this.TermsForm.get("TermsAndConditions").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.ID){let e="";e=this._activatedRoute.snapshot.params.ID,this.spinnerService.show("Getting data, Please wait..."),this.termService.getTermForEdit(e).subscribe(n=>{"ok"===n.status?(this.spinnerService.hide(),this.TermsForm.patchValue({ID:e,Label:n.result.Label,TermsAndConditions:n.result.TermsAndConditions}),"edit"===this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Unit Master":"view"===this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Unit Master"),this.mode="edit",this.initialTextReadOnly=!0):this.alertService.error(n.result)},n=>{this.spinnerService.hide(),this.alertService.error(n._body)})}else this.mode="new",this.modeTitle="Add Term Master",this.initialTextReadOnly=!1}catch(e){this.alertService.error(e)}}onSubmit(){console.log("LABEL",this.TermsForm.value.Label,this.TermsForm);let e={};e.Label=this.TermsForm.value.Label,e.TermsAndConditions=this.TermsForm.value.TermsAndConditions+"\n",e.ID=this.TermsForm.value.ID;const n={mode:this.mode,data:e};this.spinnerService.show("Data is Saving ..."),this.termService.onSave(n).subscribe(r=>{console.log("Response",r),"ok"==r.status?(this.spinnerService.hide(),this.alertService.success("Saved Successfully"),this.TermsForm.reset(),this.router.navigate(["./pages/masters/terms"])):(this.spinnerService.hide(),this.alertService.error(r.result))},r=>{this.spinnerService.hide()})}TandCenter(){const e=document.getElementById("termsandcondition"),n=e.value,r=e.selectionStart,o=e.selectionEnd;e.value=n.substring(0,r)+"\n"+n.substring(o),e.selectionStart=e.selectionEnd=r+1,e.focus()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.qu),t.Y36(S.V),t.Y36(v.c),t.Y36(m.F0),t.Y36(T),t.Y36(O.P),t.Y36(m.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-terms-and-conditions"]],hostBindings:function(e,n){1&e&&t.NdJ("keydown",function(o){return n.updown(o)},!1,t.evT)},decls:29,vars:5,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/terms","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-2","form-control-label",2,"margin-left","-12px"],[1,"col-sm-8"],["type","text","id","Parent","placeholder","Enter label","formControlName","Label","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"readOnly","keydown.enter"],["style","margin-left: 12vw;","class","form-text text-danger ",4,"ngIf"],[1,"col-sm-2","form-control-label","check",2,"margin-left","-12px"],[1,"col-sm-5"],["name","terms","id","termsandcondition","cols","80","rows","10","formControlName","TermsAndConditions",3,"keydown.Enter"],[1,"form-text","text-danger",2,"margin-left","12vw"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Terms and Condition Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(7,"button",5,6),t._uU(9,"Save"),t.qZA(),t.TgZ(10,"button",7),t._uU(11,"Back"),t.qZA()()()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"h5",10),t._uU(15,"Terms and Conditions "),t.qZA()(),t.TgZ(16,"div",11)(17,"form",12),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(18,"div",13)(19,"label",14),t._uU(20,"Label:"),t.qZA(),t.TgZ(21,"div",15)(22,"input",16),t.NdJ("keydown.enter",function(){t.CHM(r);const u=t.MAs(8);return t.KtG(u.focus())}),t.qZA()()(),t.YNc(23,Z,2,0,"small",17),t.TgZ(24,"div",13)(25,"label",18),t._uU(26,"Terms and Condition:"),t.qZA(),t.TgZ(27,"div",19)(28,"textarea",20),t.NdJ("keydown.Enter",function(){return n.TandCenter()}),t.qZA()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",n.TermsForm),t.xp6(1),t.Q6J("disabled",!n.TermsForm.valid),t.xp6(10),t.Q6J("formGroup",n.TermsForm),t.xp6(5),t.Q6J("readOnly","view"==n.mode),t.xp6(1),t.Q6J("ngIf",n.TermsForm.controls.Label.touched&&(null==n.TermsForm.controls.Label.errors?null:n.TermsForm.controls.Label.errors.required)))},dependencies:[m.rH,C.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],styles:[".card[_ngcontent-%COMP%]{margin:36px 30px 0 300px!important;width:60%}input[type=checkbox][_ngcontent-%COMP%]{height:20px;position:absolute;right:42%}.check[_ngcontent-%COMP%]{position:relative}"]}),i})()}];let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(F),m.Bz]}),i})();var k=s(62106);let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[T],imports:[U,f.m,_.JX,k.A]}),i})()}}]);