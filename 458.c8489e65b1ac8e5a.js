"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[458],{62106:(y,_,i)=>{i.d(_,{A:()=>t});var n=i(89953),h=i(66274);let t=(()=>{class l{}return l.\u0275fac=function(F){return new(F||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[n.m]}),l})()},49137:(y,_,i)=>{i.d(_,{C:()=>h});var n=i(66274);let h=(()=>{class t{transform(d,F,x){if(d)return F?d.filter(f=>{let S=f[x];const u=F.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(S?S.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(u))return f}):d}}return t.\u0275fac=function(d){return new(d||t)},t.\u0275pipe=n.Yjl({name:"searchData",type:t,pure:!1}),t})()},73965:(y,_,i)=>{i.d(_,{_:()=>u});var n=i(66274),h=i(48083),t=i(76165),l=i(71180);let d=(()=>{class c{constructor(p,g,v){this.router=p,this.http=g,this.state=v;const R=this.state.getGlobalSetting("apiUrl");R&&R.length>0&&(this.apiUrl=R)}authenticateOTP(p){return this.http.get(this.apiUrl+`/authenticateOTP?OTP=${p}`)}}return c.\u0275fac=function(p){return new(p||c)(n.LFG(h.F0),n.LFG(t.eN),n.LFG(l.q))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var F=i(67311),x=i(92752),f=i(7587);function S(c,C){if(1&c){const p=n.EpF();n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h6",5),n._uU(5,"OTP Authentication"),n.qZA()()(),n.TgZ(6,"div",6)(7,"div",7)(8,"p",8),n._uU(9," OTP Authorization is required to perform selected Action. Please enter OTP Pin to continue. "),n.qZA(),n.TgZ(10,"label"),n._uU(11,"OTP Pin:"),n.qZA(),n.TgZ(12,"input",9),n.NdJ("ngModelChange",function(v){n.CHM(p);const R=n.oxw();return n.KtG(R.otpPin=v)}),n.qZA()()(),n.TgZ(13,"div",10)(14,"div",11)(15,"button",12),n.NdJ("click",function(){n.CHM(p);const v=n.oxw();return n.KtG(v.submit())}),n._uU(16,"SUBMIT"),n.qZA(),n.TgZ(17,"button",13),n.NdJ("click",function(){n.CHM(p);const v=n.oxw();return n.KtG(v.closeDialog())}),n._uU(18,"CANCEL"),n.qZA()()()()()}if(2&c){const p=n.oxw();n.xp6(12),n.Q6J("ngModel",p.otpPin)}}let u=(()=>{class c{constructor(p,g){this.otpService=p,this.alertService=g,this.okClicked=new n.vpe,this.isActive=!1}ngOnInit(){}show(){this.isActive=!0}closeDialog(){this.isActive=!1,this.otpPin=null}submit(){this.otpService.authenticateOTP(this.otpPin).subscribe(p=>{"ok"==p.status?(this.alertService.success(p.result),setTimeout(()=>{this.okClicked.emit(!0)},2e3),this.closeDialog(),this.otpPin=null):(this.alertService.info(p),this.okClicked.emit(!1))})}}return c.\u0275fac=function(p){return new(p||c)(n.Y36(d),n.Y36(F.c))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-otp"]],outputs:{okClicked:"okClicked"},features:[n._Bn([d])],decls:1,vars:1,consts:[["class","confirmation-container",4,"ngIf"],[1,"confirmation-container"],[1,"card"],[1,"card-header",2,"background-color","lightsteelblue","padding","0.5rem 1.25rem"],[1,"row"],[2,"font-size","1.1rem"],[1,"row",2,"margin-top","1rem"],[1,"mx-4"],[2,"font-size","15px","font-weight","500"],["type","number","name","otpPin","id","otpPin",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],[1,"button-group","my-4"],["type","button",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"],["type","button","title","Cancel",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"]],template:function(p,g){1&p&&n.YNc(0,S,19,1,"div",0),2&p&&n.Q6J("ngIf",g.isActive)},dependencies:[x.O5,f.Fj,f.wV,f.JJ,f.On],styles:[".confirmation-container[_ngcontent-%COMP%]{position:fixed!important;transform:translate(-50px,-50px);background:#ffffff;z-index:99999;width:33%;top:33%;left:37%}label[_ngcontent-%COMP%]{font-size:14px;font-weight:550}input[_ngcontent-%COMP%]{width:70%}.button-group[_ngcontent-%COMP%]{position:absolute}.card[_ngcontent-%COMP%]{height:15rem;border:2px solid slategray}"]}),c})()},70458:(y,_,i)=>{i.r(_),i.d(_,{ReportFormatSetupModule:()=>z});var n=i(89953),h=i(92752),t=i(66274),l=i(48083),d=i(67311),F=i(76165),x=i(67297),f=i(71180);let S=(()=>{class r{constructor(e,o,a){this.http=e,this.authService=o,this.state=a;const m=this.state.getGlobalSetting("apiUrl");m&&m.length>0&&(this.apiUrl=m)}getDefaultReportFormatList(){return this.http.get(this.apiUrl+"/getDefaultReportFormatList")}deleteReportFormat(e){return this.http.get(`${this.apiUrl}/deleteDefaultReportFormat?ReportName=${e}`)}savedefaultReportFormat(e,o){let a={mode:o,data:e};return console.log("datanew",a),this.http.post(this.apiUrl+"/saveDefaultReportFormat ",a)}getDefaultReportFormatDetails(e){return this.http.get(`${this.apiUrl}/getDefaultReportFormatDetails?ReportName=${e}`)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(F.eN),t.LFG(x.e),t.LFG(f.q))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();var u=i(7587),c=i(72533),C=i(49137);function p(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._uU(2),t.qZA(),t.TgZ(3,"td",21),t._uU(4),t.qZA(),t.TgZ(5,"td",21),t._uU(6),t.qZA(),t.TgZ(7,"td",22)(8,"button",23),t.NdJ("click",function(){const m=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onViewClicked(m))}),t._uU(9," View"),t.qZA(),t.TgZ(10,"a",24),t.NdJ("click",function(){const m=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onEditClicked(m))}),t._uU(11,"Edit"),t.qZA(),t.TgZ(12,"button",23),t.NdJ("click",function(){const m=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onDeleteClicked(m))}),t._uU(13," Delete"),t.qZA()()()}if(2&r){const e=s.$implicit,o=s.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.DisplayName),t.xp6(2),t.Oqu(e.ReportName)}}const g=function(r,s,e){return{itemsPerPage:r,currentPage:s,totalItems:e}};function v(r,s){if(1&r&&(t.ynx(0),t.YNc(1,p,14,3,"tr",19),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.reportFormatLists,e.filter,"ReportName"),t.kEZ(8,g,e.itemsPerPage,e.currentPage,e.totalCount)))}}function R(r,s){1&r&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",25)(3,"div",26),t._uU(4,"Report Format Setup Information are unavailable."),t.qZA()()(),t.BQk())}function P(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"div",29)(3,"pagination-controls",30),t.NdJ("pageChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.defaultReportFormatPagination(a))}),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("directionLinks",e.directionLinks)}}let T=(()=>{class r{constructor(e,o,a){this.router=e,this.alertService=o,this.reportFormatSetupService=a,this.reportFormatLists=[],this.paymentModeLists=[],this.isLoader=!0,this.currentPage=1,this.itemsPerPage=20,this.offset=0,this.directionLinks=!0}updown(e){"Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){this.reportFormatSetupService.getDefaultReportFormatList().subscribe(e=>{e?(console.log("what is in the res",e),this.isLoader=!1,this.reportFormatLists=e||[]):(this.isLoader=!1,this.reportFormatLists=[],this.errorMessage="Something went wrong.")},e=>{this.isLoader=!1,this.reportFormatLists=[],this.errorMessage="Something went wrong."})}onViewClicked(e){try{this.router.navigate(["./pages/masters/default-report-format-setup/add-report-format-setup",{reportname:e.ReportName,mode:"view",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}}onEditClicked(e){try{this.router.navigate(["./pages/masters/default-report-format-setup/add-report-format-setup",{reportname:e.ReportName,mode:"edit",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}}onDeleteClicked(e){confirm("Are you sure you want to delete default format for "+e.ReportName+" ?")&&this.reportFormatSetupService.deleteReportFormat(e.ReportName).subscribe(o=>{"ok"==o.status?(this.alertService.info(o.result),this.reportFormatSetupService.getDefaultReportFormatList().subscribe(a=>{a?(this.isLoader=!1,this.reportFormatLists=a||[]):(this.isLoader=!1,this.reportFormatLists=[],this.errorMessage="Something went wrong.")})):this.alertService.error(o.result.error)},o=>{this.alertService.error(o.error)})}defaultReportFormatPagination(e){this.isLoader=!0,this.currentPage=e;const o=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{o.isLoader=!1},500)}addReportSetup(){try{this.router.navigate(["./pages/masters/default-report-format-setup/add-report-format-setup",{mode:"new",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.F0),t.Y36(d.c),t.Y36(S))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-payment-mode-list"]],hostBindings:function(e,o){1&e&&t.NdJ("keydown",function(m){return o.updown(m)},!1,t.evT)},decls:35,vars:12,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control",2,"height","1.5rem","font-size","13px",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","18%"],["scope","col",2,"text-align","center","width","18%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","18%"],[2,"width","18%","text-align","center"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px",3,"click"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Default Report Format Setup Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return o.addReportSetup()}),t._uU(8,"Add Report Format Setup"),t.qZA()()(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"span"),t._uU(14,"Default Report Format Lists"),t.qZA(),t.TgZ(15,"div",9)(16,"input",10),t.NdJ("ngModelChange",function(m){return o.filter=m}),t.qZA()()(),t.TgZ(17,"div",11)(18,"table",12)(19,"thead")(20,"tr",13)(21,"th",14),t._uU(22,"S.N"),t.qZA(),t.TgZ(23,"th",15),t._uU(24,"Report Display Name"),t.qZA(),t.TgZ(25,"th",15),t._uU(26,"Report Name"),t.qZA(),t.TgZ(27,"th",16),t._uU(28,"Action"),t.qZA()()(),t.TgZ(29,"tbody"),t.YNc(30,v,4,12,"ng-container",17),t.YNc(31,R,5,0,"ng-container",17),t.ALo(32,"searchData"),t.qZA()()(),t.YNc(33,P,4,1,"div",18),t.ALo(34,"searchData"),t.qZA()()()),2&e&&(t.xp6(16),t.Q6J("ngModel",o.filter),t.xp6(14),t.Q6J("ngIf",o.reportFormatLists&&o.reportFormatLists.length>0),t.xp6(1),t.Q6J("ngIf",o.reportFormatLists&&0===t.Dn7(32,4,o.reportFormatLists,o.filter,"ReportName").length),t.xp6(2),t.Q6J("ngIf",o.reportFormatLists&&t.Dn7(34,8,o.reportFormatLists,o.filter,"ReportName").length>o.itemsPerPage))},dependencies:[h.sg,h.O5,l.rH,u.Fj,u.JJ,u.On,c.LS,c._s,C.C],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.card-footer[_ngcontent-%COMP%]{height:6vh}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:18rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),r})();var O=i(66635),Z=i(14970),N=i(53074),M=i(73965);const w=["reportDisplayName"],A=["OtpPopup"];function L(r,s){1&r&&(t.TgZ(0,"span"),t._uU(1,"Report Display Name is required."),t.qZA())}function k(r,s){if(1&r&&(t.TgZ(0,"div",23),t.YNc(1,L,2,0,"span",24),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.reportFormatSetupForm.controls.DisplayName.errors.required)}}function D(r,s){1&r&&(t.TgZ(0,"span"),t._uU(1,"Report Name is required."),t.qZA())}function U(r,s){if(1&r&&(t.TgZ(0,"div",23),t.YNc(1,D,2,0,"span",24),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.reportFormatSetupForm.controls.ReportName.errors.required)}}function J(r,s){1&r&&(t.TgZ(0,"span"),t._uU(1,"Procedure Name is required."),t.qZA())}function I(r,s){if(1&r&&(t.TgZ(0,"div",23),t.YNc(1,J,2,0,"span",24),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.reportFormatSetupForm.controls.ProcName.errors.required)}}const q=[{path:"",component:T},{path:"add-report-format-setup",component:(()=>{class r{constructor(e,o,a,m,b,G,B){this.fb=e,this.spinnerService=o,this.alertService=a,this.reportFormatSetupService=m,this.router=b,this.masterService=G,this._activatedRoute=B,this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1,this.menu=O.C}updown(e){"Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/masters/default-report-format-setup"])),"F6"===e.code&&e.preventDefault()}ngOnInit(){console.log("menu",this.menu);try{if(this.reportFormatSetupForm=this.fb.group({DisplayName:["",[u.kI.required]],ReportName:["",[u.kI.required]],ProcName:["",[u.kI.required]],OldReportName:[""]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.mode="view",this.reportFormatSetupForm.get("DisplayName").disable(),this.reportFormatSetupForm.get("ReportName").disable(),this.reportFormatSetupForm.get("ProcName").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.reportname){let e="";e=this._activatedRoute.snapshot.params.reportname,this.spinnerService.show("Getting data, Please wait..."),this.reportFormatSetupService.getDefaultReportFormatDetails(e).subscribe(o=>{console.log("data ma k aaucha",o),"ok"===o.status?(this.spinnerService.hide(),this.reportFormatSetupForm.patchValue({DisplayName:o.result.DisplayName,ReportName:o.result.ReportName,ProcName:o.result.ProcName,OldReportName:o.result.ReportName}),console.log("here"),"edit"===this._activatedRoute.snapshot.params.mode?(this.modeTitle="Edit Default Report Format",this.mode="edit"):"view"===this._activatedRoute.snapshot.params.mode&&(this.mode="view",this.modeTitle="View Default Report Format")):this.alertService.error(o.result)},o=>{this.spinnerService.hide(),this.alertService.error(o._body)})}else this.mode="new",this.modeTitle="Add Default Report Format"}catch(e){this.alertService.error(e)}}ngAfterViewInit(){setTimeout(()=>this.reportDisplayName.nativeElement.focus())}onSubmit(){this.OtpPopup.show()}confirmationOkClicked(e){1==e?(this.spinnerService.show("Data is Saving ..."),this.reportFormatSetupService.savedefaultReportFormat(this.reportFormatSetupForm.value,this.mode).subscribe(o=>{console.log("response catch",o),"ok"==o.status?(this.spinnerService.hide(),this.alertService.success(o.result),setTimeout(()=>{this.alertService.hide()},500),this.reportFormatSetupForm.reset(),this.router.navigate(["./pages/masters/default-report-format-setup"]),console.log("response catch",o)):(this.alertService.error(o.result),this.spinnerService.hide())},o=>{this.spinnerService.hide()})):this.alertService.error("OTP Invalid")}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u.qu),t.Y36(Z.V),t.Y36(d.c),t.Y36(S),t.Y36(l.F0),t.Y36(N.P),t.Y36(l.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-unit-form"]],viewQuery:function(e,o){if(1&e&&(t.Gf(w,5),t.Gf(A,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.reportDisplayName=a.first),t.iGM(a=t.CRH())&&(o.OtpPopup=a.first)}},hostBindings:function(e,o){1&e&&t.NdJ("keydown",function(m){return o.updown(m)},!1,t.evT)},decls:39,vars:10,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/default-report-format-setup","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-3","form-control-label",2,"margin-left","-12px"],[1,"col-sm-7"],["type","text","autocomplete","off","formControlName","DisplayName",1,"form-control",2,"height","4vh",3,"readOnly"],["reportDisplayName",""],["class","invalid-feedback d-block",4,"ngIf"],["type","text","autocomplete","off","formControlName","ReportName",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","autocomplete","off","formControlName","ProcName",1,"form-control",2,"height","4vh",3,"readOnly"],[3,"okClicked"],["OtpPopup",""],[1,"invalid-feedback","d-block"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Default Report Format Setup Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(7,"button",5,6),t._uU(9,"Save"),t.qZA(),t.TgZ(10,"button",7),t._uU(11,"Back"),t.qZA()()()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"h5",10),t._uU(15),t.qZA()(),t.TgZ(16,"div",11)(17,"form",12),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(18,"div",13)(19,"label",14),t._uU(20,"Report Display Name:"),t.qZA(),t.TgZ(21,"div",15),t._UZ(22,"input",16,17),t.YNc(24,k,2,1,"div",18),t.qZA()(),t.TgZ(25,"div",13)(26,"label",14),t._uU(27,"Report Name:"),t.qZA(),t.TgZ(28,"div",15),t._UZ(29,"input",19),t.YNc(30,U,2,1,"div",18),t.qZA()(),t.TgZ(31,"div",13)(32,"label",14),t._uU(33,"Procedure Name:"),t.qZA(),t.TgZ(34,"div",15),t._UZ(35,"input",20),t.YNc(36,I,2,1,"div",18),t.qZA()()()()(),t.TgZ(37,"app-otp",21,22),t.NdJ("okClicked",function(m){return o.confirmationOkClicked(m)}),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.reportFormatSetupForm),t.xp6(1),t.Q6J("disabled",!o.reportFormatSetupForm.valid||"view"==o.mode),t.xp6(8),t.Oqu(o.modeTitle),t.xp6(2),t.Q6J("formGroup",o.reportFormatSetupForm),t.xp6(5),t.Q6J("readOnly","view"==o.mode),t.xp6(2),t.Q6J("ngIf",o.reportFormatSetupForm.controls.DisplayName.invalid&&(o.reportFormatSetupForm.controls.DisplayName.dirty||o.reportFormatSetupForm.controls.DisplayName.touched)),t.xp6(5),t.Q6J("readOnly","view"==o.mode),t.xp6(1),t.Q6J("ngIf",o.reportFormatSetupForm.controls.ReportName.invalid&&(o.reportFormatSetupForm.controls.ReportName.dirty||o.reportFormatSetupForm.controls.ReportName.touched)),t.xp6(5),t.Q6J("readOnly","view"==o.mode),t.xp6(1),t.Q6J("ngIf",o.reportFormatSetupForm.controls.ProcName.invalid&&(o.reportFormatSetupForm.controls.ProcName.dirty||o.reportFormatSetupForm.controls.ProcName.touched)))},dependencies:[h.O5,l.rH,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,M._],styles:[".card[_ngcontent-%COMP%]{margin:30px 30px 0 300px!important;width:60%}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:4vh;color:#000}label[_ngcontent-%COMP%]{height:25px;font-size:14px}.col-sm-7[_ngcontent-%COMP%]{padding-left:1px}.form-control[_ngcontent-%COMP%]{font-size:14px}.card-body[_ngcontent-%COMP%]{height:37vh}"]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.Bz.forChild(q),l.Bz]}),r})();var Q=i(62106);let z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[S],imports:[h.ez,Y,n.m,c.JX,Q.A]}),r})()}}]);