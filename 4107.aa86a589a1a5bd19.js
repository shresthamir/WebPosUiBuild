"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4107],{82661:(G,C,r)=>{r.d(C,{C:()=>Y});var E=r(26215),v=r(53181),n=r(66274),x=r(92752);let A=(()=>{class l{constructor(s,p){this.dialogref=s,this.data=p,this.heading="Information",this.heading=p.header,this.message$=p.message}authResult(s){this.dialogref.close(s)}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(v.so),n.Y36(v.WI))},l.\u0275cmp=n.Xpm({type:l,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(s,p){1&s&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4),n.NdJ("click",function(){return p.authResult(!0)}),n._uU(6,"\xd7"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"div",6),n._uU(9),n.ALo(10,"async"),n.qZA()()()),2&s&&(n.xp6(4),n.Oqu(p.heading),n.xp6(5),n.hij(" ",n.lcZ(10,2,p.message$)," "))},dependencies:[x.Ov],encapsulation:2}),l})();var t=r(67297),b=r(53074),O=r(14970),N=r(48083),U=r(67311);function Z(l,m){1&l&&(n.TgZ(0,"h4",5),n._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),n.qZA())}function y(l,m){1&l&&(n.TgZ(0,"h4",5),n._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),n.qZA())}function T(l,m){if(1&l){const s=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(s);const c=n.oxw();return n.KtG(c.YesClick())}),n._uU(1,"Yes"),n.qZA()}}function I(l,m){if(1&l){const s=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(s);const c=n.oxw();return n.KtG(c.NoClick())}),n._uU(1,"No"),n.qZA()}}function w(l,m){if(1&l){const s=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(s);const c=n.oxw();return n.KtG(c.offlinelineOK())}),n._uU(1,"OK"),n.qZA()}}let D=(()=>{class l{constructor(s,p,c,_,h,g){this.dialogref=s,this.authSerice=p,this.masterService=c,this.spinnerService=_,this.router=h,this.alertService=g}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(s=>{"ok"===s.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(s.result.error))},s=>{this.spinnerService.hide(),alert(JSON.parse(s._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(v.so),n.Y36(t.e),n.Y36(b.P),n.Y36(O.V),n.Y36(N.F0),n.Y36(U.c))},l.\u0275cmp=n.Xpm({type:l,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(s,p){1&s&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,Z,2,0,"h4",2),n.YNc(3,y,2,0,"h4",2),n.qZA(),n.TgZ(4,"div",3),n.YNc(5,T,2,0,"button",4),n.YNc(6,I,2,0,"button",4),n.YNc(7,w,2,0,"button",4),n.qZA()()),2&s&&(n.xp6(2),n.Q6J("ngIf",1!=p.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1==p.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(2),n.Q6J("ngIf",1!=p.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1!=p.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1==p.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[x.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),l})();var L=r(71180);let Y=(()=>{class l{constructor(s,p,c,_,h){this.gblstate=s,this._authService=p,this.masterService=c,this.router=_,this.dialog=h,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=s.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(s,p){const c=new E.X(""),_=c.asObservable(),h=this._authService.getAuth();let g="";null!=s.url[0]&&(g=s.url[0].path),console.log("path",g);let P=s.params.mode;if(void 0===P&&(P="list"),!h||!h.profile){c.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const f=this.dialog.open(A,{hasBackdrop:!0,data:{header:"Information",message:_}});return setTimeout(()=>{f.close()},1e4),!1}if(this.masterService.checkUserValid().subscribe(S=>{if(!1===S){c.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const F=this.dialog.open(A,{hasBackdrop:!0,data:{header:"Information",message:_}});return setTimeout(()=>(F.close(),!1),1e4),!1}}),0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(D,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==g))return!1;if(0===this.userSetting.ENABLEOFFLINESALE||2===this.userSetting.ENABLEOFFLINESALE){if(h&&h.profile&&"dashboard"===g)return!0;if(0===this.userSetting.ENABLEOFFLINESALE){if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return!0}else if(2===this.userSetting.ENABLEOFFLINESALE){if("addsientry"===g||"add-creditnote-itembase"===g){c.next("You are not authorize for this operation");const S=this.dialog.open(A,{hasBackdrop:!0,data:{header:"Information",message:_}});return setTimeout(()=>(S.close(),!1),2e3),!1}if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return console.log("MENURIGHTBLOCKEDADMIN",g),!0}const f=this._authService.getMenuRight(g,P);if(g)return!0===f.right||"list"===P&&!0===f.list;if(!0===f.list)return!0}else if(1===this.userSetting.ENABLEOFFLINESALE)return!0}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(L.q),n.LFG(t.e),n.LFG(b.P),n.LFG(N.F0),n.LFG(v.uw))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},54107:(G,C,r)=>{r.r(C),r.d(C,{PumpmasterModule:()=>rt});var E=r(92752),v=r(48083),n=r(7587),x=r(19102),A=r(47767),t=r(66274),b=r(67311),O=r(53074),N=r(76165),U=r(71180);let Z=(()=>{class i{constructor(e,a){this._http=e,this.state=a;const o=this.state.getGlobalSetting("apiUrl");o&&o.length>0&&(this.apiUrl=o)}savePumpDetails(e){return this._http.post(`${this.apiUrl}/savePumpDetails`,e)}getMasterPumpDetailsList(){return this._http.get(`${this.apiUrl}/getPumpDetails`)}updatePumpDetails(e){return this._http.post(`${this.apiUrl}/updatePumpDetails`,e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(N.eN),t.LFG(U.q))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var y=r(28698),T=r(72533),I=r(49137);const w=["genericGrid"],D=["inputProduct"],L=["inputOpeningMeter"];function Y(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ADDPump())}),t._uU(1,"Add Pump"),t.qZA()}}function l(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.SavePumpMaster())}),t._uU(1,"Save"),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",!e.validate())}}function m(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.EditPumpMaster())}),t._uU(1,"Save"),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("disabled",!e.validate())}}function s(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onCancel())}),t._uU(1,"Cancel"),t.qZA()}}function p(i,u){1&i&&(t.TgZ(0,"div",36),t._uU(1," NEW PUMP "),t.qZA())}function c(i,u){1&i&&(t.TgZ(0,"div",36),t._uU(1," Edit PUMP "),t.qZA())}function _(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2,"Pump Name is Required"),t.qZA()())}function h(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2," Product Name is Required"),t.qZA()())}function g(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2,"Negative values are not allowed"),t.qZA()())}function P(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2,"Opening Meter Reading is Required"),t.qZA()())}function f(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2,"Negative values are not allowed"),t.qZA()())}function S(i,u){1&i&&(t.TgZ(0,"div",37)(1,"span"),t._uU(2,"Maximum Meter Value is Required"),t.qZA()())}function F(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t.YNc(3,p,2,0,"div",16),t.YNc(4,c,2,0,"div",16),t.qZA()(),t.TgZ(5,"div",17)(6,"form",18)(7,"div",1)(8,"div",19)(9,"div",1)(10,"div",2)(11,"label"),t._uU(12," Pump Name: "),t.TgZ(13,"span",20),t._uU(14,"*"),t.qZA()()(),t.TgZ(15,"div",21),t._UZ(16,"input",22,23),t.YNc(18,_,3,0,"div",24),t.qZA()()(),t.TgZ(19,"div",19)(20,"div",1)(21,"div",2)(22,"label"),t._uU(23," Product : "),t.TgZ(24,"span",20),t._uU(25,"*"),t.qZA()()(),t.TgZ(26,"div",21)(27,"input",25,26),t.NdJ("keydown",function(o){return o.preventDefault()})("keydown.Enter",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onProductSelect())})("keydown.Enter",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onEnterPumpProduct())})("keydown.Tab",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onProductSelect())})("keydown.Tab",function(){t.CHM(e);const o=t.MAs(40),d=t.oxw();return t.KtG(d.onEnterPump4(o))}),t.qZA(),t.YNc(29,h,3,0,"div",24),t.qZA()()()(),t.TgZ(30,"div",27)(31,"div",19)(32,"div",1)(33,"div",2)(34,"label"),t._uU(35,"Opening Reading :"),t.TgZ(36,"span",20),t._uU(37,"*"),t.qZA()()(),t.TgZ(38,"div",21)(39,"input",28,29),t.NdJ("input",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.preventNegativeInput(o))}),t.qZA(),t.YNc(41,g,3,0,"div",24),t.YNc(42,P,3,0,"div",24),t.qZA()()(),t.TgZ(43,"div",19)(44,"div",1)(45,"div",2)(46,"label"),t._uU(47," Max Meter Value:"),t.TgZ(48,"span",20),t._uU(49,"*"),t.qZA()()(),t.TgZ(50,"div",21)(51,"input",30,31),t.NdJ("input",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.preventNegativeMaxInput(o))}),t.qZA(),t.YNc(53,f,3,0,"div",24),t.YNc(54,S,3,0,"div",24),t.qZA()()(),t.TgZ(55,"div",32)(56,"div",1)(57,"div",2)(58,"label"),t._uU(59," Status : "),t.TgZ(60,"span",20),t._uU(61,"*"),t.qZA()()(),t.TgZ(62,"div",21)(63,"select",33)(64,"option",34),t._uU(65,"Active"),t.qZA(),t.TgZ(66,"option",35),t._uU(67,"Inactive"),t.qZA()()()()()()()()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",1!=e.ShowEditpump),t.xp6(1),t.Q6J("ngIf",1==e.ShowEditpump),t.xp6(2),t.Q6J("formGroup",e.PumpMaster),t.xp6(12),t.Q6J("ngIf",e.PumpMaster.get("PUMP_NAME").invalid&&(e.PumpMaster.get("PUMP_NAME").dirty||e.PumpMaster.get("PUMP_NAME").touched)),t.xp6(9),t.Q6J("readOnly",1==e.updatable),t.xp6(2),t.Q6J("ngIf",e.PumpMaster.get("PRODUCT_NAME").invalid&&(e.PumpMaster.get("PRODUCT_NAME").dirty||e.PumpMaster.get("PRODUCT_NAME").touched)),t.xp6(10),t.Q6J("readOnly",e.updatable),t.xp6(2),t.Q6J("ngIf",e.negativeValueEntered),t.xp6(1),t.Q6J("ngIf",e.PumpMaster.get("OPENING_METER").invalid&&(e.PumpMaster.get("OPENING_METER").dirty||e.PumpMaster.get("OPENING_METER").touched)),t.xp6(9),t.Q6J("readOnly",1==e.updatable),t.xp6(2),t.Q6J("ngIf",e.negativeMaxValueEntered),t.xp6(1),t.Q6J("ngIf",e.PumpMaster.get("METER_MAX_VALUE").invalid&&(e.PumpMaster.get("METER_MAX_VALUE").dirty||e.PumpMaster.get("METER_MAX_VALUE").touched))}}function q(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"button",45),t.NdJ("click",function(o){const M=t.CHM(e).$implicit,k=t.oxw(3);return t.KtG(k.OnEditpumpdetail(o,M))}),t._uU(15,"edit"),t.qZA()()()}if(2&i){const e=u.$implicit,a=u.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.PUMP_NAME),t.xp6(2),t.Oqu(e.PRODUCT_NAME),t.xp6(2),t.Oqu(e.OPENING_METER),t.xp6(2),t.Oqu(e.METER_MAX_VALUE),t.xp6(2),t.Oqu(e.STATUS?"Active":"Inactive")}}const V=function(i,u,e){return{itemsPerPage:i,currentPage:u,totalItems:e}};function Q(i,u){if(1&i&&(t.ynx(0),t.YNc(1,q,16,6,"tr",44),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.pumpDetailslist,e.filter,"PUMP_NAME"),t.kEZ(8,V,e.itemsPerPage,e.currentPage,e.totalCount)))}}function B(i,u){1&i&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",46)(3,"div",47),t._uU(4,"Pump Information are unavailable."),t.qZA()()(),t.BQk())}function j(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"div",50)(3,"pagination-controls",51),t.NdJ("pageChange",function(o){t.CHM(e);const d=t.oxw(2);return t.KtG(d.pumpPagination(o))}),t.qZA()()()()}}function H(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",38)(2,"span"),t._uU(3,"Pump List"),t.qZA(),t.TgZ(4,"div",39)(5,"input",40),t.NdJ("ngModelChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.filter=o)}),t.qZA()()(),t.TgZ(6,"div",17)(7,"table",41)(8,"thead")(9,"th"),t._uU(10,"S.N"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Pump"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Product"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Opening Reading"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Maximum Reading"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Status"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Action"),t.qZA()(),t.TgZ(23,"tbody"),t.YNc(24,Q,4,12,"ng-container",42),t.YNc(25,B,5,0,"ng-container",42),t.ALo(26,"searchData"),t.qZA()()(),t.YNc(27,j,4,0,"div",43),t.ALo(28,"searchData"),t.qZA()}if(2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.filter),t.xp6(19),t.Q6J("ngIf",e.pumpDetailslist&&e.pumpDetailslist.length>0),t.xp6(1),t.Q6J("ngIf",e.pumpDetailslist&&0===t.Dn7(26,4,e.pumpDetailslist,e.filter,"PUMP_NAME").length),t.xp6(2),t.Q6J("ngIf",e.pumpDetailslist&&t.Dn7(28,8,e.pumpDetailslist,e.filter,"PUMP_NAME").length>e.itemsPerPage)}}let K=(()=>{class i extends A.c{constructor(e,a,o,d,M,k){super(M),this.fb=e,this._alertService=a,this._masterService=o,this.meterServive=d,this.injector=M,this.router=k,this.gridPopupSettings=new x.sG,this.pumpMeterObj={},this.isLoader=!0,this.currentPage=1,this.itemsPerPage=20,this.offset=0,this.pumpDetailslist=[],this.ShowAdd=!0,this.ShowSave=!1,this.ShowCancel=!1,this.ShowPumpList=!0,this.ShowAddPump=!1,this.ShowEditpump=!1,this.negativeValueEntered=!1,this.negativeMaxValueEntered=!1}petrolForm(){this.PumpMaster=this.fb.group({PUMP_ID:[""],PUMP_NAME:["",n.kI.required],MCODE:["",n.kI.required],PRODUCT_NAME:[""],OPENING_METER:["",n.kI.required],METER_MAX_VALUE:["",n.kI.required],STATUS:[""]})}ngOnInit(){this.title="MASTER",this.petrolForm(),this.getPumpDetailList()}getPumpDetailList(){this.meterServive.getMasterPumpDetailsList().subscribe(e=>{console.log(e.result),this.pumpDetailslist=e.result})}pumpPagination(e){this.isLoader=!0,this.currentPage=e;const a=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{a.isLoader=!1},500)}OnEditpumpdetail(e,a){this.title="<<EDIT",this.ShowEditpump=!0,this.ShowAddPump=!0,this.ShowPumpList=!1,this.ShowAdd=!1,this.ShowCancel=!0,this.ShowSave=!1,this.pumpMeterObj=this.pumpDetailslist.find(o=>a.PUMP_ID===o.PUMP_ID),console.log(a),this.PumpMaster.patchValue({PUMP_ID:this.pumpMeterObj.PUMP_ID,PUMP_NAME:this.pumpMeterObj.PUMP_NAME,MCODE:this.pumpMeterObj.MCODE,PRODUCT_NAME:this.pumpMeterObj.PRODUCT_NAME,OPENING_METER:this.pumpMeterObj.OPENING_METER,METER_MAX_VALUE:this.pumpMeterObj.METER_MAX_VALUE,STATUS:this.pumpMeterObj.STATUS,hasTransaction:this.pumpMeterObj.hasTransaction}),this.updatable=this.pumpMeterObj.hasTransaction}EditPumpMaster(){delete this.PumpMaster.value.PRODUCT_NAME,this.meterServive.updatePumpDetails([this.PumpMaster.value]).subscribe(a=>{this._alertService.success("Edit successfully"),this.PumpMaster.reset(),this.getPumpDetailList(),this.ShowPumpList=!0,this.ShowCancel=!1,this.ShowEditpump=!1,this.ShowAddPump=!1,this.ShowAdd=!0},a=>{this._alertService.error(a.error.message)})}onEnterPump(e){e.focus()}onEnterPumpProduct(e){e.focus(),this.onProductSelect()}onEnterPump4(e){e.focus()}onProductSelect(){this.gridPopupSettings={title:"PRODUCTS",apiEndpoints:"/getMenuitemWithStockPagedList/0/A/All/%40/%40",defaultFilterIndex:1,useDefinefilterValue:"",columns:[{key:"MENUCODE",title:"MENU CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"NAME",hidden:!1,noSearch:!1},{key:"DESCRIPTION",title:"SHORT NAME",hidden:!1,noSearch:!1},{key:"PARENT",title:"PARENT",hidden:!1,noSearch:!1}]},this.genericGrid.show()}dblClickPopupItem(e){this.PumpMaster.get("MCODE").patchValue(e.MCODE),this.inputProduct.nativeElement.value=e.DESCA}preventNegativeInput(e){this.negativeValueEntered=!!e.target.value.startsWith("-")}preventNegativeMaxInput(e){this.negativeMaxValueEntered=!!e.target.value.startsWith("-")}SavePumpMaster(){let e=this.PumpMaster.value,a=this.PumpMaster.get("OPENING_METER").value,o=this.PumpMaster.get("STATUS").value,d=this.PumpMaster.get("METER_MAX_VALUE").value;e.OPENING_METER=parseFloat(a),e.STATUS=parseFloat(o),e.METER_MAX_VALUE=parseFloat(d),this.meterServive.savePumpDetails([e]).subscribe(M=>{this.PumpMaster.reset(),this._alertService.success("Pump Meter Save Successfully "),this.getPumpDetailList(),this.ShowPumpList=!0,this.ShowAddPump=!1,this.ShowSave=!1,this.ShowAdd=!0,this.ShowCancel=!1},M=>{this._alertService.error(M.error.message)})}onCancel(){this.title="MASTER",this.ShowAddPump=!1,this.ShowPumpList=!0,this.ShowAdd=!0,this.ShowCancel=!1,this.ShowSave=!1,this.ShowEditpump=!1,this.PumpMaster.reset(),this.updatable=!1}ADDPump(){this.PumpMaster.reset({STATUS:1}),this.title="ADD",this.ShowAddPump=!0,this.ShowPumpList=!1,this.ShowAdd=!1,this.ShowCancel=!0,this.ShowSave=!0}validate(){return!this.PumpMaster.invalid&&!this.negativeValueEntered&&!this.negativeMaxValueEntered}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.qu),t.Y36(b.c),t.Y36(O.P),t.Y36(Z),t.Y36(t.zs3),t.Y36(v.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-masterpump"]],viewQuery:function(e,a){if(1&e&&(t.Gf(w,5),t.Gf(D,5),t.Gf(L,5)),2&e){let o;t.iGM(o=t.CRH())&&(a.genericGrid=o.first),t.iGM(o=t.CRH())&&(a.inputProduct=o.first),t.iGM(o=t.CRH())&&(a.inputOpeningMeter=o.first)}},features:[t.qOj],decls:20,vars:8,consts:[[1,"container-fluid","mt-2"],[1,"row"],[1,"col-md-4"],[1,"col-md-8","text-right","header-button"],["class","btn btn-info pull-right",3,"click",4,"ngIf"],["class","btn btn-info pull-right",3,"disabled","click",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-10","offset-md-1"],["class","card",4,"ngIf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],[1,"btn","btn-info","pull-right",3,"click"],[1,"btn","btn-info","pull-right",3,"disabled","click"],[1,"card"],[1,"card-header"],[1,"row","mb-0"],["class","col-md-4 text-light",4,"ngIf"],[1,"card-body"],[3,"formGroup"],[1,"col-md-6"],["id","asterik"],[1,"col-md-8"],["type","text","formControlName","PUMP_NAME","placeholder","Enter Pump Name...","autofocus","",1,"form-control"],["inputPumpName",""],["class","text-danger",4,"ngIf"],["type","text","formControlName","PRODUCT_NAME","placeholder","Press Enter to select product ","autofocus","",1,"form-control",3,"readOnly","keydown","keydown.Enter","keydown.Tab"],["inputProduct",""],[1,"row","mt-2"],["type","number","formControlName","OPENING_METER","placeholder","Enter Opening Reading...","autofocus","",1,"form-control",3,"readOnly","input"],["inputOpeningMeter",""],["type","number","formControlName","METER_MAX_VALUE","placeholder","Enter Maximum Meter Value...","autofocus","",1,"form-control",3,"readOnly","input"],["inputMaxReading",""],[1,"col-md-6","mt-2"],["formControlName","STATUS","autofocus","",1,"form-control"],["value","1"],["value","0"],[1,"col-md-4","text-light"],[1,"text-danger"],[1,"card-header","table-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control","search-input",3,"ngModel","ngModelChange"],["width","100%",1,"table","table-striped"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm","edit-button",3,"click"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"pageChange"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4),t.qZA()(),t.TgZ(5,"div",3),t.YNc(6,Y,2,0,"button",4),t._uU(7,"\xa0 "),t.YNc(8,l,2,1,"button",5),t._uU(9,"\xa0 "),t.YNc(10,m,2,1,"button",5),t._uU(11,"\xa0 "),t.YNc(12,s,2,0,"button",4),t._uU(13,"\xa0 "),t.qZA()(),t.TgZ(14,"div",6)(15,"div",7),t.YNc(16,F,68,12,"div",8),t.YNc(17,H,29,12,"div",8),t.qZA()()(),t.TgZ(18,"generic-popup-grid",9,10),t.NdJ("onItemDoubleClick",function(d){return a.dblClickPopupItem(d)}),t.qZA()),2&e&&(t.xp6(4),t.hij("PUMP ",a.title,""),t.xp6(2),t.Q6J("ngIf",a.ShowAdd),t.xp6(2),t.Q6J("ngIf",a.ShowSave),t.xp6(2),t.Q6J("ngIf",a.ShowEditpump),t.xp6(2),t.Q6J("ngIf",a.ShowCancel),t.xp6(4),t.Q6J("ngIf",a.ShowAddPump),t.xp6(1),t.Q6J("ngIf",a.ShowPumpList),t.xp6(1),t.Q6J("popupsettings",a.gridPopupSettings))},dependencies:[E.sg,E.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.On,n.sg,n.u,y.Zl,T.LS,T._s,I.C],styles:[".table-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.table-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{background-color:#6597c5;padding:5px}#asterik[_ngcontent-%COMP%]{color:red}input[_ngcontent-%COMP%]{height:4vh;padding:13px}select[_ngcontent-%COMP%]{height:5vh;padding:4px}.card-footer[_ngcontent-%COMP%]{height:6vh}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:16rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}.header-button[_ngcontent-%COMP%]{font-size:12px}.edit-button[_ngcontent-%COMP%]{width:60px;color:#fff}.search-input[_ngcontent-%COMP%]{height:1.5rem;font-size:13px}label[_ngcontent-%COMP%]{width:-webkit-fill-available;margin:2px}"]}),i})();var J=r(82661);const X=[{path:"",component:K,canActivate:[J.C]}];let z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.Bz.forChild(X),v.Bz]}),i})();var $=r(89953),W=r(71259),tt=r(82738),R=r(12640),et=r(14422),nt=r(53181),it=r(62106),ot=r(71800),at=r(80814);let rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[J.C,Z,{provide:R.op,useValue:R.op}],imports:[E.ez,z,n.u5,nt.Is,$.m,T.JX,R.Xd,W.Z.forRoot(),et.AngularMultiSelectModule,tt.b.forRoot(),at.d,ot.zk.forRoot(),it.A]}),i})()}}]);