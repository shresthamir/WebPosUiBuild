"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8211],{73965:(S,C,r)=>{r.d(C,{_:()=>Z});var n=r(64537),v=r(7976),c=r(35732),A=r(71180);let i=(()=>{class d{constructor(s,m,u){this.router=s,this.http=m,this.state=u;const g=this.state.getGlobalSetting("apiUrl");g&&g.length>0&&(this.apiUrl=g)}authenticateOTP(s){return this.http.get(this.apiUrl+`/authenticateOTP?OTP=${s}`)}}return d.\u0275fac=function(s){return new(s||d)(n.LFG(v.F0),n.LFG(c.eN),n.LFG(A.q))},d.\u0275prov=n.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var _=r(67311),y=r(88692),f=r(20092);function T(d,h){if(1&d){const s=n.EpF();n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h6",5),n._uU(5,"OTP Authentication"),n.qZA()()(),n.TgZ(6,"div",6)(7,"div",7)(8,"p",8),n._uU(9," OTP Authorization is required to perform selected Action. Please enter OTP Pin to continue. "),n.qZA(),n.TgZ(10,"label"),n._uU(11,"OTP Pin:"),n.qZA(),n.TgZ(12,"input",9),n.NdJ("ngModelChange",function(u){n.CHM(s);const g=n.oxw();return n.KtG(g.otpPin=u)}),n.qZA()()(),n.TgZ(13,"div",10)(14,"div",11)(15,"button",12),n.NdJ("click",function(){n.CHM(s);const u=n.oxw();return n.KtG(u.submit())}),n._uU(16,"SUBMIT"),n.qZA(),n.TgZ(17,"button",13),n.NdJ("click",function(){n.CHM(s);const u=n.oxw();return n.KtG(u.closeDialog())}),n._uU(18,"CANCEL"),n.qZA()()()()()}if(2&d){const s=n.oxw();n.xp6(12),n.Q6J("ngModel",s.otpPin)}}let Z=(()=>{class d{constructor(s,m){this.otpService=s,this.alertService=m,this.okClicked=new n.vpe,this.isActive=!1}ngOnInit(){}show(){this.isActive=!0}closeDialog(){this.isActive=!1,this.otpPin=null}submit(){this.otpService.authenticateOTP(this.otpPin).subscribe(s=>{"ok"==s.status?(this.alertService.success(s.result),setTimeout(()=>{this.okClicked.emit(!0)},2e3),this.closeDialog(),this.otpPin=null):(this.alertService.info(s),this.okClicked.emit(!1))})}}return d.\u0275fac=function(s){return new(s||d)(n.Y36(i),n.Y36(_.c))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-otp"]],outputs:{okClicked:"okClicked"},features:[n._Bn([i])],decls:1,vars:1,consts:[["class","confirmation-container",4,"ngIf"],[1,"confirmation-container"],[1,"card"],[1,"card-header",2,"background-color","lightsteelblue","padding","0.5rem 1.25rem"],[1,"row"],[2,"font-size","1.1rem"],[1,"row",2,"margin-top","1rem"],[1,"mx-4"],[2,"font-size","15px","font-weight","500"],["type","number","name","otpPin","id","otpPin",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],[1,"button-group","my-4"],["type","button",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"],["type","button","title","Cancel",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"]],template:function(s,m){1&s&&n.YNc(0,T,19,1,"div",0),2&s&&n.Q6J("ngIf",m.isActive)},dependencies:[y.O5,f.Fj,f.wV,f.JJ,f.On],styles:[".confirmation-container[_ngcontent-%COMP%]{position:fixed!important;transform:translate(-50px,-50px);background:#ffffff;z-index:99999;width:33%;top:33%;left:37%}label[_ngcontent-%COMP%]{font-size:14px;font-weight:550}input[_ngcontent-%COMP%]{width:70%}.button-group[_ngcontent-%COMP%]{position:absolute}.card[_ngcontent-%COMP%]{height:15rem;border:2px solid slategray}"]}),d})()},78211:(S,C,r)=>{r.r(C),r.d(C,{DivisionModule:()=>Y});var n=r(88692),v=r(7976),c=r(20092),A=r(19102),i=r(64537),_=r(30013),y=r(67311),f=r(14970),T=r(53074),Z=r(28698),d=r(73965);const h=["genericGridBranch"],s=["genericGridCashAccount"],m=["OtpPopup"];function u(o,a){1&o&&(i.TgZ(0,"h5",35),i._uU(1,"New Division"),i.qZA())}function g(o,a){1&o&&(i.TgZ(0,"h5",35),i._uU(1,"Edit Division"),i.qZA())}function b(o,a){1&o&&(i.TgZ(0,"h5",35),i._uU(1,"View Division"),i.qZA())}function O(o,a){1&o&&(i.TgZ(0,"span"),i._uU(1,"Initial must be of 3 characters."),i.qZA())}function N(o,a){if(1&o&&(i.TgZ(0,"div",36),i.YNc(1,O,2,0,"span",37),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",(null==t.divisionForm?null:t.divisionForm.controls.initial.errors.minlength)||(null==t.divisionForm?null:t.divisionForm.controls.initial.errors.maxlength))}}function M(o,a){1&o&&(i.TgZ(0,"span"),i._uU(1,"Name is required."),i.qZA())}function D(o,a){if(1&o&&(i.TgZ(0,"div",36),i.YNc(1,M,2,0,"span",37),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.divisionForm.controls.name.errors.required)}}function x(o,a){1&o&&(i.TgZ(0,"span"),i._uU(1,"Address is required."),i.qZA())}function E(o,a){if(1&o&&(i.TgZ(0,"div",36),i.YNc(1,x,2,0,"span",37),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.Q6J("ngIf",t.divisionForm.controls.address2.errors.required)}}function P(o,a){if(1&o&&(i.TgZ(0,"option",38),i._uU(1),i.qZA()),2&o){const t=a.$implicit;i.Q6J("ngValue",t.RateGroup_ID),i.xp6(1),i.Oqu(t.RateGroup_Name)}}function I(o,a){if(1&o&&(i.TgZ(0,"option",38),i._uU(1),i.qZA()),2&o){const t=a.$implicit;i.Q6J("ngValue",t.COSTCENTERNAME),i.xp6(1),i.Oqu(t.COSTCENTERNAME)}}function J(o,a){if(1&o&&(i.TgZ(0,"option",38),i._uU(1),i.qZA()),2&o){const t=a.$implicit;i.Q6J("ngValue",t.priority),i.xp6(1),i.Oqu(t.priority)}}let k=(()=>{class o{constructor(t,e,l,p,H,z,V){this.formBuilder=t,this._activatedRoute=e,this.divisionService=l,this.alertService=p,this.router=H,this.spinnerService=z,this.masterService=V,this.divID="",this.mode="add",this.viewMode=!1,this.initial="",this.modeTitle="",this.priority=[{priority:1},{priority:2},{priority:3},{priority:4},{priority:5},{priority:6},{priority:7},{priority:8},{priority:9},{priority:10},{priority:11},{priority:12},{priority:13},{priority:14},{priority:15},{priority:16},{priority:17},{priority:18},{priority:19},{priority:20},{priority:21},{priority:22},{priority:23},{priority:24},{priority:25}],this.gridPopupSettingsForBranch=new A.sG,this.gridPopupSettingsForCash=new A.sG}ngOnInit(){this.divisionForm=this.formBuilder.group({initial:["",[c.kI.minLength(3),c.kI.maxLength(3)]],name:["",[c.kI.required]],address2:["",[c.kI.required]],remarks:[""],branchamout:[""],rategroupid:[""],comid:[""],acid:[""],acname:[""],CASH_AC:[""],CASH_AC_NAME:[""],COSTCENTER:[""],Priority:[""],LocationCategory:[""]}),this.divisionService.getAllRateGroupList().subscribe(t=>{this.rateGroupList=t}),this.divisionService.getAllCostCenterList().subscribe(t=>{this.costCenterList=t}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.mode="view",this.viewMode=!0,this.divisionForm.get("initial").disable(),this.divisionForm.get("name").disable(),this.divisionForm.get("address2").disable(),this.divisionForm.get("remarks").disable(),this.divisionForm.get("acname").disable(),this.divisionForm.get("rategroupid").disable(),this.divisionForm.get("COSTCENTER").disable(),this.divisionForm.get("Priority").disable(),this.divisionForm.get("LocationCategory").disable(),this.divisionForm.get("acid").disable(),this.divisionForm.get("CASH_AC").disable(),this.divisionForm.get("CASH_AC_NAME").disable()),this._activatedRoute.snapshot.params.name?(this.initial=this._activatedRoute.snapshot.params.name,this.spinnerService.show("Getting data, Please wait..."),this.divisionService.getDivisionDataByInitial(this.initial).subscribe(t=>{console.log(t),"ok"===t.status?(this.spinnerService.hide(),this.divisionForm.patchValue({initial:t.result.INITIAL,name:t.result.NAME,address2:t.result.ADDRESS2,remarks:t.result.REMARKS,branchamout:t.result.BRANCHAMOUT,rategroupid:t.result.RateGroupID,comid:t.result.COMID,acid:t.result.ACID,acname:t.result.ACNAME,COSTCENTER:t.result.COSTCENTER,Priority:t.result.Priority,LocationCategory:t.result.LocationCategory,CASH_AC:t.result.CASH_AC,CASH_AC_NAME:t.result.CASH_AC_NAME}),"edit"===this._activatedRoute.snapshot.params.mode&&(this.mode="edit")):this.alertService.info(t.result)},t=>{this.spinnerService.hide(),this.alertService.info(t._body)})):(this.mode="add",this.modeTitle="Add Division Master")}catch(t){this.alertService.info(t)}onSubmit(){"edit"==this.mode&&(this.divisionForm.value.initial=this.initial),1==confirm("Save division?")&&this.OtpPopup.show()}getBranchList(){this.gridPopupSettingsForBranch={title:"Branch Account",apiEndpoints:"/getAccountPagedListByPType/PA/C",defaultFilterIndex:0,useDefinefilterValue:"",columns:[{key:"ACNAME",title:"NAME",hidden:!1,noSearch:!1},{key:"VATNO",title:"VAT No.",hidden:!1,noSearch:!1},{key:"ADDRESS",title:"ADDRESS",hidden:!1,noSearch:!1},{key:"MOBILE",title:"Mobile No.",hidden:!1,noSearch:!1}]}}getCashAccountList(){this.gridPopupSettingsForCash={title:"Cash Accounts",apiEndpoints:"/getAllCashAccounts",defaultFilterIndex:0,useDefinefilterValue:"",columns:[{key:"ACCODE",title:"A/C CODE",hidden:!1,noSearch:!1},{key:"ACNAME",title:"NAME",hidden:!1,noSearch:!1}]}}branchEnterCommand(t){this.getBranchList(),this.genericGridBranch.show()}cashAccountEnterCommand(t){this.getCashAccountList(),this.genericGridCashAccount.show()}onBranchSelected(t){this.acname=t.ACNAME,this.acid=t.ACID,this.divisionForm.patchValue({acname:t.ACNAME,acid:t.ACID})}onCashAccountSelected(t){this.CASH_AC_NAME=t.ACNAME,this.CASH_AC=t.ACID,this.divisionForm.patchValue({CASH_AC_NAME:t.ACNAME,CASH_AC:t.ACID})}confirmationOkClicked(t){1==t?(this.divisionForm.value.comid=this.masterService.userProfile.CompanyInfo.COMPANYID,this.spinnerService.show("Data is Saving ..."),this.divisionService.saveDivisionMaster(this.divisionForm.value,this.mode).subscribe(e=>{"ok"==e.status?(this.spinnerService.hide(),this.divisionForm.reset(),this.router.navigate(["./pages/masters/division"])):(this.alertService.info(e.result),this.spinnerService.hide())},e=>{this.spinnerService.hide(),this.alertService.error(e.error)})):this.alertService.info("OTP Invalid")}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(c.qu),i.Y36(v.gz),i.Y36(_.E),i.Y36(y.c),i.Y36(v.F0),i.Y36(f.V),i.Y36(T.P))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-division-form"]],viewQuery:function(t,e){if(1&t&&(i.Gf(h,5),i.Gf(s,5),i.Gf(m,5)),2&t){let l;i.iGM(l=i.CRH())&&(e.genericGridBranch=l.first),i.iGM(l=i.CRH())&&(e.genericGridCashAccount=l.first),i.iGM(l=i.CRH())&&(e.OtpPopup=l.first)}},decls:88,vars:27,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["type","button","routerLink","/pages/masters/division",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],["class","page-title",4,"ngIf"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-3","form-control-label",2,"margin-left","-12px"],[1,"col-sm-7"],["type","text","autocomplete","off","formControlName","initial",1,"form-control",2,"height","4vh",3,"readOnly"],["class","invalid-feedback d-block",4,"ngIf"],["type","text","autocomplete","off","formControlName","name",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","formControlName","address2",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","id","Parent","autocomplete","off","formControlName","remarks",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","autocomplete","off","formControlName","acname","placeholder","Press Enter to select...",1,"form-control",2,"height","4vh",3,"readOnly","ngModel","keydown.enter","ngModelChange"],["formControlName","","formControlName","rategroupid",1,"form-control",2,"padding","1px 5px",3,"disabled"],["value",""],[3,"ngValue",4,"ngFor","ngForOf"],["formControlName","COSTCENTER",1,"form-control",2,"padding","1px 5px",3,"disabled"],["formControlName","Priority",1,"form-control",2,"padding","1px 5px",3,"disabled"],["formControlName","LocationCategory",1,"form-control",2,"padding","1px 5px",3,"disabled"],["value","0"],["value","1"],["type","text","autocomplete","off","formControlName","CASH_AC_NAME","placeholder","Press Enter or Tab to select...",1,"form-control",2,"height","4vh",3,"readOnly","ngModel","keydown.enter","keydown.tab","ngModelChange"],[3,"popupsettings","onItemDoubleClick"],["genericGridBranch",""],["genericGridCashAccount",""],[3,"okClicked"],["OtpPopup",""],[1,"page-title"],[1,"invalid-feedback","d-block"],[4,"ngIf"],[3,"ngValue"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1)(2,"h5"),i._uU(3,"Division Master"),i.qZA()(),i.TgZ(4,"div",2)(5,"div",3)(6,"form",4),i.NdJ("ngSubmit",function(){return e.onSubmit()}),i.TgZ(7,"button",5),i._uU(8," Save "),i.qZA(),i.TgZ(9,"button",6),i._uU(10," Back "),i.qZA()()()()(),i.TgZ(11,"div",7)(12,"div",8),i.YNc(13,u,2,0,"h5",9),i.YNc(14,g,2,0,"h5",9),i.YNc(15,b,2,0,"h5",9),i.qZA(),i.TgZ(16,"div",10)(17,"form",11),i.NdJ("ngSubmit",function(){return e.onSubmit()}),i.TgZ(18,"div",12)(19,"label",13),i._uU(20,"Initial:"),i.qZA(),i.TgZ(21,"div",14),i._UZ(22,"input",15),i.YNc(23,N,2,1,"div",16),i.qZA()(),i.TgZ(24,"div",12)(25,"label",13),i._uU(26,"Name:"),i.qZA(),i.TgZ(27,"div",14),i._UZ(28,"input",17),i.YNc(29,D,2,1,"div",16),i.qZA()(),i.TgZ(30,"div",12)(31,"label",13),i._uU(32,"Address:"),i.qZA(),i.TgZ(33,"div",14),i._UZ(34,"input",18),i.YNc(35,E,2,1,"div",16),i.qZA()(),i.TgZ(36,"div",12)(37,"label",13),i._uU(38,"Remarks:"),i.qZA(),i.TgZ(39,"div",14),i._UZ(40,"input",19),i.qZA()(),i.TgZ(41,"div",12)(42,"label",13),i._uU(43,"Branch Account: "),i.qZA(),i.TgZ(44,"div",14)(45,"input",20),i.NdJ("keydown.enter",function(p){return e.branchEnterCommand(p)})("ngModelChange",function(p){return e.acid=p}),i.qZA()()(),i.TgZ(46,"div",12)(47,"label",13),i._uU(48,"Rate Group:"),i.qZA(),i.TgZ(49,"div",14)(50,"select",21),i._UZ(51,"option",22),i.YNc(52,P,2,2,"option",23),i.qZA()()(),i.TgZ(53,"div",12)(54,"label",13),i._uU(55,"Cost Center:"),i.qZA(),i.TgZ(56,"div",14)(57,"select",24),i._UZ(58,"option",22),i.YNc(59,I,2,2,"option",23),i.qZA()()(),i.TgZ(60,"div",12)(61,"label",13),i._uU(62,"Priority :"),i.qZA(),i.TgZ(63,"div",14)(64,"select",25),i._UZ(65,"option",22),i.YNc(66,J,2,2,"option",23),i.qZA()()(),i.TgZ(67,"div",12)(68,"label",13),i._uU(69,"Location Category:"),i.qZA(),i.TgZ(70,"div",14)(71,"select",26),i._UZ(72,"option",22),i.TgZ(73,"option",27),i._uU(74,"Inside Valley"),i.qZA(),i.TgZ(75,"option",28),i._uU(76,"Outside Valley"),i.qZA()()()(),i.TgZ(77,"div",12)(78,"label",13),i._uU(79,"Cash Account:"),i.qZA(),i.TgZ(80,"div",14)(81,"input",29),i.NdJ("keydown.enter",function(p){return e.cashAccountEnterCommand(p)})("keydown.tab",function(p){return e.cashAccountEnterCommand(p)})("ngModelChange",function(p){return e.CASH_AC_NAME=p}),i.qZA()()()()()(),i.TgZ(82,"generic-popup-grid",30,31),i.NdJ("onItemDoubleClick",function(p){return e.onBranchSelected(p)}),i.qZA(),i.TgZ(84,"generic-popup-grid",30,32),i.NdJ("onItemDoubleClick",function(p){return e.onCashAccountSelected(p)}),i.qZA(),i.TgZ(86,"app-otp",33,34),i.NdJ("okClicked",function(p){return e.confirmationOkClicked(p)}),i.qZA()),2&t&&(i.xp6(6),i.Q6J("formGroup",e.divisionForm),i.xp6(1),i.Q6J("disabled",!e.divisionForm.valid),i.xp6(6),i.Q6J("ngIf","add"==e.mode),i.xp6(1),i.Q6J("ngIf","edit"==e.mode),i.xp6(1),i.Q6J("ngIf","view"==e.mode),i.xp6(2),i.Q6J("formGroup",e.divisionForm),i.xp6(5),i.Q6J("readOnly","view"==e.mode)("readOnly","edit"==e.mode),i.xp6(1),i.Q6J("ngIf",(null==e.divisionForm?null:e.divisionForm.controls.initial.invalid)&&((null==e.divisionForm?null:e.divisionForm.controls.initial.dirty)||(null==e.divisionForm?null:e.divisionForm.controls.initial.touched))),i.xp6(5),i.Q6J("readOnly","view"==e.mode),i.xp6(1),i.Q6J("ngIf",e.divisionForm.controls.name.invalid&&(e.divisionForm.controls.name.dirty||e.divisionForm.controls.name.touched)),i.xp6(5),i.Q6J("readOnly","view"==e.mode),i.xp6(1),i.Q6J("ngIf",e.divisionForm.controls.address2.invalid&&(e.divisionForm.controls.address2.dirty||e.divisionForm.controls.address2.touched)),i.xp6(5),i.Q6J("readOnly","view"==e.mode),i.xp6(5),i.Q6J("readOnly","view"==e.mode)("ngModel",e.acid),i.xp6(5),i.Q6J("disabled","view"==e.mode),i.xp6(2),i.Q6J("ngForOf",e.rateGroupList),i.xp6(5),i.Q6J("disabled","view"==e.mode),i.xp6(2),i.Q6J("ngForOf",e.costCenterList),i.xp6(5),i.Q6J("disabled","view"==e.mode),i.xp6(2),i.Q6J("ngForOf",e.priority),i.xp6(5),i.Q6J("disabled","view"==e.mode),i.xp6(10),i.Q6J("readOnly","view"==e.mode)("ngModel",e.CASH_AC_NAME),i.xp6(1),i.Q6J("popupsettings",e.gridPopupSettingsForBranch),i.xp6(2),i.Q6J("popupsettings",e.gridPopupSettingsForCash))},dependencies:[n.sg,n.O5,v.rH,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,Z.Zl,d._],styles:[".card[_ngcontent-%COMP%]{margin:10px 30px 0 300px!important;width:60%}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:4vh;color:#000}label[_ngcontent-%COMP%]{height:25px;font-size:14px}.col-sm-7[_ngcontent-%COMP%]{padding-left:1px}.form-control[_ngcontent-%COMP%]{font-size:14px}"]}),o})();const U=[{path:"",component:r(82716).p},{path:"add-division",component:k}];let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[v.Bz.forChild(U),v.Bz]}),o})();var Q=r(89953),R=r(54536),q=r(71800),F=r(56707),L=r(29977),B=r(87584);let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[_.E,L.w,F.sK,B.p],imports:[n.ez,G,Q.m,R.Is,q.zk.forRoot(),F.aw]}),o})()}}]);