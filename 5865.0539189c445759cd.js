"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[5865],{55865:(I,u,l)=>{l.r(u),l.d(u,{LoyaltyPointAdjustmentModule:()=>R});var p=l(46543),M=l(92752),c=l(72533),m=l(12640),t=l(66274),g=l(76165),A=l(67297),j=l(71180);let y=(()=>{class o{constructor(n,e,s){this.http=n,this.authService=e,this.state=s;const i=this.state.getGlobalSetting("apiUrl");i&&i.length>0&&(this.apiUrl=i)}postLoyaltyPointAdjustment(n){const e={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(`${this.apiUrl}/postManualMemberPoints`,n,e)}getMemberCurrentPoints(n){return this.http.get(this.apiUrl+"/getMemberCurrentPoints?memid="+n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(g.eN),t.LFG(A.e),t.LFG(j.q))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var d=l(48083),h=l(28698),a=l(7587),P=l(14970),f=l(67311),E=l(53074);const v=["genericGrid"],T=["memberName"],b=[{path:"",component:(()=>{class o{constructor(n,e,s,i,S,N){this.fb=n,this.spinnerService=e,this.alertService=s,this.loyaltyPointAdjustmentService=i,this.router=S,this.masterService=N,this.mode="",this.loyaltyPointsAdjustmentObj={},this.gridPopupSettings=new h.im}ngOnInit(){this.gridPopupSettings={title:"MEMBERS",apiEndpoints:"/getMemberPagedList",defaultFilterIndex:0,columns:[{key:"FNAME",title:"FIRST NAME",hidden:!1,noSearch:!1},{key:"LNAME",title:"LAST NAME",hidden:!1,noSearch:!1},{key:"MEMID",title:"MEMBER ID",hidden:!1,noSearch:!1},{key:"MOBILE",title:"MOBILE",hidden:!1,noSearch:!1},{key:"EMAIL",title:"EMAIL",hidden:!1,noSearch:!1}]}}ngAfterViewInit(){setTimeout(()=>this.memberNameE1.nativeElement.focus())}resetPointsAdjustment(){this.mode=null,this.loyaltyPointsAdjustmentObj={},setTimeout(()=>this.memberNameE1.nativeElement.focus())}savePointsAdjustment(){if(null==this.loyaltyPointsAdjustmentObj)return void this.alertService.warning("Please reset before adding any points.");if(null==this.loyaltyPointsAdjustmentObj.MEMBERID||""==this.loyaltyPointsAdjustmentObj.MEMBERID)return void this.alertService.warning("Please choose the member");if(null==this.loyaltyPointsAdjustmentObj.REMARKS||""==this.loyaltyPointsAdjustmentObj.REMARKS)return void this.alertService.warning("Please insert remarks.");if(null==this.mode||""==this.mode)return void this.alertService.warning("Please choose the adjustment mode.");if(!Number.isFinite(this.loyaltyPointsAdjustmentObj.MEMTOTPOINT)||this.loyaltyPointsAdjustmentObj.MEMTOTPOINT<=0)return void this.alertService.warning("Please insert valid points");if("DEDUCT"===this.mode&&this.loyaltyPointsAdjustmentObj.MEMTOTPOINT>this.loyaltyPointsAdjustmentObj.MEMBERCURRENTPOINT)return void this.alertService.warning("In deduct mode, adjustment points cannot be more than current points");const n={mode:this.mode,data:this.loyaltyPointsAdjustmentObj};this.spinnerService.show("Saving data,Please wait..."),this.loyaltyPointAdjustmentService.postLoyaltyPointAdjustment(n).subscribe(e=>{"ok"==e.status?(this.spinnerService.hide(),this.alertService.info(e.result),this.resetPointsAdjustment()):(this.spinnerService.hide(),this.alertService.info(e.result))},e=>{this.spinnerService.hide()})}memberChooseOption(){this.genericGrid.show()}dblClickPopupItem(n){this.loyaltyPointsAdjustmentObj.MEMBERID=n.MEMID,this.loyaltyPointsAdjustmentObj.MEMBERNAME=n.FNAME+" "+(n.LNAME??""),this.loyaltyPointsAdjustmentObj.MEMBERMOBILE=n.MOBILE,this.loyaltyPointAdjustmentService.getMemberCurrentPoints(n.MEMID).subscribe(e=>{this.loyaltyPointsAdjustmentObj.MEMBERCURRENTPOINT=e})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.qu),t.Y36(P.V),t.Y36(f.c),t.Y36(y),t.Y36(d.F0),t.Y36(E.P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-loyalty-points-adjustment"]],viewQuery:function(n,e){if(1&n&&(t.Gf(v,5),t.Gf(T,5)),2&n){let s;t.iGM(s=t.CRH())&&(e.genericGrid=s.first),t.iGM(s=t.CRH())&&(e.memberNameE1=s.first)}},decls:48,vars:7,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"click"],["type","button","title","Cancel",1,"btn","btn-info",2,"font-size","12px",3,"click"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-group","row"],[1,"col-sm-2","form-control-label"],[1,"col-sm-8"],["type","text","id","MEMBERNAME","name","MEMBERNAME","placeholder","Enter To Choose Member","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"ngModel","ngModelChange","keydown.enter"],["memberName",""],["type","text","autocomplete","off","readonly","",1,"form-control",2,"height","4vh","font-size","13px",3,"ngModel","ngModelChange"],["type","text","placeholder","Enter To Choose Member","autocomplete","off","readonly","",1,"form-control",2,"height","4vh","font-size","13px",3,"ngModel","ngModelChange"],["type","text","id","REMARKS","placeholder","Enter Remarks","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"ngModel","ngModelChange"],[1,"col-sm-2","form-control",2,"height","4vh","font-size","13px","padding","2px","margin-left","15px",3,"ngModel","ngModelChange"],[1,"col-sm-6"],["type","number","id","MEMTOTPOINT","placeholder","Enter Points","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"ngModel","ngModelChange"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Loyalty Points Adjustment "),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"button",4),t.NdJ("click",function(){return e.savePointsAdjustment()}),t._uU(7,"Save"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return e.resetPointsAdjustment()}),t._uU(9,"Reset"),t.qZA()()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"h5",8),t._uU(13,"Loyalty Points Adjustment"),t.qZA()(),t.TgZ(14,"div",9)(15,"div",10)(16,"label",11),t._uU(17,"Member:"),t.qZA(),t.TgZ(18,"div",12)(19,"input",13,14),t.NdJ("ngModelChange",function(i){return e.loyaltyPointsAdjustmentObj.MEMBERNAME=i})("keydown.enter",function(){return e.memberChooseOption()}),t.qZA()()(),t.TgZ(21,"div",10)(22,"label",11),t._uU(23,"Mobile:"),t.qZA(),t.TgZ(24,"div",12)(25,"input",15),t.NdJ("ngModelChange",function(i){return e.loyaltyPointsAdjustmentObj.MEMBERMOBILE=i}),t.qZA()()(),t.TgZ(26,"div",10)(27,"label",11),t._uU(28,"Current Points:"),t.qZA(),t.TgZ(29,"div",12)(30,"input",16),t.NdJ("ngModelChange",function(i){return e.loyaltyPointsAdjustmentObj.MEMBERCURRENTPOINT=i}),t.qZA()()(),t.TgZ(31,"div",10)(32,"label",11),t._uU(33,"Remarks:"),t.qZA(),t.TgZ(34,"div",12)(35,"input",17),t.NdJ("ngModelChange",function(i){return e.loyaltyPointsAdjustmentObj.REMARKS=i}),t.qZA()()(),t.TgZ(36,"div",10)(37,"label",11),t._uU(38,"Adjustment Points:"),t.qZA(),t.TgZ(39,"select",18),t.NdJ("ngModelChange",function(i){return e.mode=i}),t.TgZ(40,"option"),t._uU(41,"ADD"),t.qZA(),t.TgZ(42,"option"),t._uU(43,"DEDUCT"),t.qZA()(),t.TgZ(44,"div",19)(45,"input",20),t.NdJ("ngModelChange",function(i){return e.loyaltyPointsAdjustmentObj.MEMTOTPOINT=i}),t.qZA()()()()(),t.TgZ(46,"generic-popup-grid",21,22),t.NdJ("onItemDoubleClick",function(i){return e.dblClickPopupItem(i)}),t.qZA()),2&n&&(t.xp6(19),t.Q6J("ngModel",e.loyaltyPointsAdjustmentObj.MEMBERNAME),t.xp6(6),t.Q6J("ngModel",e.loyaltyPointsAdjustmentObj.MEMBERMOBILE),t.xp6(5),t.Q6J("ngModel",e.loyaltyPointsAdjustmentObj.MEMBERCURRENTPOINT),t.xp6(5),t.Q6J("ngModel",e.loyaltyPointsAdjustmentObj.REMARKS),t.xp6(4),t.Q6J("ngModel",e.mode),t.xp6(6),t.Q6J("ngModel",e.loyaltyPointsAdjustmentObj.MEMTOTPOINT),t.xp6(1),t.Q6J("popupsettings",e.gridPopupSettings))},dependencies:[a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.On,h.Zl],styles:[".card[_ngcontent-%COMP%]{margin:36px 30px 0 300px!important;width:60%}label[_ngcontent-%COMP%]{font-size:13px}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(b),d.Bz]}),o})();var O=l(53181);const L={suppressScrollX:!1};let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[y,{provide:m.op,useValue:L}],imports:[M.ez,p.m,c.JX,m.Xd,O.Is,C]}),o})()}}]);