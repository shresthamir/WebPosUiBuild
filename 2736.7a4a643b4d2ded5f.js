"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[2736],{71459:(j,u,n)=>{n.d(u,{J:()=>C});var g=n(20092),p=n(64537);let C=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=p.oAB({type:s}),s.\u0275inj=p.cJS({imports:[g.UX,g.u5]}),s})()},82738:(j,u,n)=>{n.d(u,{b:()=>m});var g=n(88692),p=n(72533),C=n(87584),s=n(71800),c=n(53074),h=n(64537);let m=(()=>{class l{static forRoot(){return{ngModule:l,providers:[c.P,C.p]}}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[g.ez,s.zk.forRoot(),p.JX]}),l})()},32736:(j,u,n)=>{n.r(u),n.d(u,{JobCardModule:()=>x});var g=n(88692),p=n(54536),C=n(82738),s=n(69401),c=n(72533),h=n(12640),m=n(59629),l=n(71459),_=n(7976),e=n(64537);let f=(()=>{class a{constructor(){}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["jobcard"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},dependencies:[_.lC],encapsulation:2}),a})();var Z=n(19102),J=n(67311),T=n(14970),v=n(53074),A=n(87584),M=n(20092),O=n(28698);const N=["genericGridCustomer"],E=["genericGridViewEdit"];function R(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"tr",28),e.NdJ("click",function(){const i=e.CHM(t).index,b=e.oxw();return e.KtG(b.rowClick(i))}),e.TgZ(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td")(22,"a",30),e.NdJ("click",function(){const i=e.CHM(t).$implicit,b=e.oxw();return e.KtG(b.onEditClicked(i))}),e._uU(23,"Edit"),e.qZA()()()}if(2&a){const t=d.$implicit,o=d.index;e.xp6(2),e.hij(" ",o+1," "),e.xp6(2),e.hij(" ",t.JobCardNO," "),e.xp6(2),e.hij(" ",t.CustomerName," "),e.xp6(2),e.hij(" ",t.Address," "),e.xp6(2),e.hij(" ",t.MobileNo," "),e.xp6(2),e.hij(" ",t.VehicleNo," "),e.xp6(2),e.hij(" ",t.EngineNo," "),e.xp6(2),e.hij(" ",t.ChasisNo," "),e.xp6(2),e.hij(" ",t.VehicleBrand," "),e.xp6(2),e.hij(" ",t.VehicleModel," ")}}const D=function(a,d,t){return{id:"pagination1",itemsPerPage:a,currentPage:d,totalItems:t}},U=_.Bz.forChild([{path:"",component:f,children:[{path:"jobcard-registration",component:(()=>{class a{constructor(t,o,r,i,b){this.alertService=t,this.loadingService=o,this.masterService=r,this._trnMainService=i,this.router=b,this.activerowIndex=0,this.jobCardObj={},this.jobCardList=[],this.currentPage=1,this.maxResultCount=10,this.gridPopupSettingsForCustomer=new Z.sG,this.gridPopupSettingsForViewEdit=new Z.sG,this.getJobCardList(),console.log("job card list ma k aaucha",this.getJobCardList())}ngOnInit(){this.Reset(),this.Mode="NEW",this.addRow(),this.getCurrentDate(),console.log("date",this.jobCardObj.Date)}getCurrentDate(){const t=new Date;this.currDate=(0,g.p6)(t,"yyyy-MM-dd","en-US"),this.jobCardObj.Date=this.currDate}rowClick(t){this.activerowIndex=t}addRow(){null==this.jobCardList&&(this.jobCardList=[]);try{this.jobCardList.push({})}catch(o){console.log(o),alert(o)}}customerEnterCommand(){this.getCustomersList()}onCustomerSelected(t){console.log("evnet here",t),this.jobCardObj.CustomerName=t.CUSTNAME,this.jobCardObj.ACID=t.ACID,console.log("ACID value",this.jobCardObj.ACID)}getCustomersList(){this.gridPopupSettingsForCustomer={title:"Customers",apiEndpoints:"/getCustomerFromCustomerProfile",defaultFilterIndex:0,useDefinefilterValue:this._trnMainService.TrnMainObj.BILLTO,columns:[{key:"CUSTNAME",title:"NAME",hidden:!1,noSearch:!1},{key:"ADDRESS",title:"ADDRESS",hidden:!1,noSearch:!1},{key:"MOBILENO",title:"MOBILE",hidden:!1,noSearch:!1}]},this.genericGridCustomer.show()}onSave(){this.loadingService.show("Saving, Please Wait..."),this.masterService.saveJobCardRegistration(this.Mode,this.jobCardObj).subscribe(t=>{console.log("job card registration save result",t,this.jobCardObj),"ok"==t.status?(this.loadingService.hide(),this.alertService.success(t.result),this.Reset(),this.getJobCardList()):(this.loadingService.hide(),this.alertService.info(t.result.error.result))},t=>{this.alertService.info(t)}),console.log("SAVE JOB CARD",this.jobCardObj)}Reset(){this.Mode="NEW",this.jobCardObj={},this.getCurrentDate(),this.currentPage=1,this.ListPagination(this.currentPage)}cancel(){console.log("@@returnUrl");try{this.router.navigate(["/pages/dashboard"])}catch(t){console.log(t),this.alertService.info(t)}}handleKeyDownboardEvent(t){"ControlLeft"==t.code||"ControlRight"==t.code?t.preventDefault():"F3"==t.code?(t.preventDefault(),this.Reset()):"F6"==t.code&&(t.preventDefault(),this.onSave())}getJobCardList(){this.masterService.getAllListforJobCard(this.currentPage,this.maxResultCount).subscribe(t=>{console.log("totalcount",t.totalCount),this.jobCardList=t.data,this.totalCount=t.totalCount})}onEditClicked(t){this.Mode="EDIT",console.log("edit click garda ko item",t,this.jobCardObj),this.jobCardObj.ACID=t.ACID,this.jobCardObj.MobileNo=t.MobileNo,this.jobCardObj.Date=t.Date,this.jobCardObj.JobCardNO=t.JobCardNO,this.jobCardObj.CustomerName=t.CustomerName,this.jobCardObj.Address=t.Address,this.jobCardObj.VehicleNo=t.VehicleNo,this.jobCardObj.EngineNo=t.EngineNo,this.jobCardObj.ChasisNo=t.ChasisNo,this.jobCardObj.VehicleBrand=t.VehicleBrand,this.jobCardObj.VehicleModel=t.VehicleModel}ListPagination(t){console.log("event ma k aaucha",t),this.currentPage=t,this.getJobCardList()}onJobCardSelected(t){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(J.c),e.Y36(T.V),e.Y36(v.P),e.Y36(A.p),e.Y36(_.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["jobcard-registration"]],viewQuery:function(t,o){if(1&t&&(e.Gf(N,5),e.Gf(E,5)),2&t){let r;e.iGM(r=e.CRH())&&(o.genericGridCustomer=r.first),e.iGM(r=e.CRH())&&(o.genericGridViewEdit=r.first)}},hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(i){return o.handleKeyDownboardEvent(i)},!1,e.evT)},decls:93,vars:31,consts:[[1,"sticky-top"],[1,"row","clearfix"],[1,"col-md-6","pd0"],[2,"color","black"],[1,"col-md-6",2,"margin-left","-1.5%"],[1,"row","pull-right"],["type","submit",1,"btn","btn-info","btn-sm",3,"click"],[1,"row","plainBackGround",2,"margin-top","0.5rem"],[1,"col-md-6"],[1,"row"],[2,"width","108px"],["type","text","autocomplete","off",2,"width","45%","height","24px","margin-left","23px","margin-top","4px",3,"ngModel","disabled","ngModelChange"],["type","date","id","date","autocomplete","off",2,"width","45%","height","24px","margin-left","23px","margin-top","4px",3,"ngModel","disabled","ngModelChange"],["type","text","id","custName","placeholder","Press ENTER to select Customer","autocomplete","off",2,"width","45%","height","24px","margin-left","23px","margin-top","4px",3,"ngModel","disabled","ngModelChange","keydown.enter"],[2,"margin-top","10px"],[2,"height","48vh","overflow-y","scroll"],[2,"margin-bottom","5px","font-size","12px","width","98%","margin-left","10px"],[2,"border-bottom","2px solid #e6e6e6","border-top","2px solid #e6e6e6","height","30px","background","#9ccae4","color","black","position","sticky","top","-2px"],[2,"width","2%","font-size","12px"],["scope","col",2,"text-align","center","width","9%","font-size","12px"],["scope","col",2,"text-align","center","font-size","12px","width","15%"],["scope","col",2,"text-align","center","font-size","12px","width","9%"],["style","border: 1px; height: 20px;",3,"click",4,"ngFor","ngForOf"],[2,"text-align","center","margin-top","5px"],["id","pagination1",1,"my-pagination",3,"pageChange"],[3,"popupsettings","onItemDoubleClick"],["genericGridCustomer",""],["genericGridViewEdit",""],[2,"border","1px","height","20px",3,"click"],["id","sn"],["type","button",1,"btn","btn-info","btn-sm",2,"color","white",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),e._uU(4),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5)(7,"button",6),e.NdJ("click",function(){return o.Reset()}),e._uU(8,"Reset F3"),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return o.onSave()}),e._uU(10,"Save F6"),e.qZA(),e.TgZ(11,"button",6),e.NdJ("click",function(){return o.cancel()}),e._uU(12,"Back"),e.qZA()()()()(),e.TgZ(13,"div",7)(14,"div",8)(15,"div",9)(16,"label",10),e._uU(17,"Job Card No:"),e.qZA(),e.TgZ(18,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.JobCardNO=i}),e.qZA()(),e.TgZ(19,"div",9)(20,"label",10),e._uU(21,"Date:"),e.qZA(),e.TgZ(22,"input",12),e.NdJ("ngModelChange",function(i){return o.jobCardObj.Date=i}),e.qZA()(),e.TgZ(23,"div",9)(24,"label",10),e._uU(25,"Customer Name:"),e.qZA(),e.TgZ(26,"input",13),e.NdJ("ngModelChange",function(i){return o.jobCardObj.CustomerName=i})("keydown.enter",function(){return o.customerEnterCommand()}),e.qZA()(),e.TgZ(27,"div",9)(28,"label",10),e._uU(29,"Address:"),e.qZA(),e.TgZ(30,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.Address=i}),e.qZA()(),e.TgZ(31,"div",9)(32,"label",10),e._uU(33,"Mobile No:"),e.qZA(),e.TgZ(34,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.MobileNo=i}),e.qZA()()(),e.TgZ(35,"div",8)(36,"div",9)(37,"label",10),e._uU(38,"Vehicle No:"),e.qZA(),e.TgZ(39,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.VehicleNo=i}),e.qZA()(),e.TgZ(40,"div",9)(41,"label",10),e._uU(42,"Engine No:"),e.qZA(),e.TgZ(43,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.EngineNo=i}),e.qZA()(),e.TgZ(44,"div",9)(45,"label",10),e._uU(46,"Chasis No:"),e.qZA(),e.TgZ(47,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.ChasisNo=i}),e.qZA()(),e.TgZ(48,"div",9)(49,"label",10),e._uU(50,"Vehicle Brand:"),e.qZA(),e.TgZ(51,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.VehicleBrand=i}),e.qZA()(),e.TgZ(52,"div",9)(53,"label",10),e._uU(54,"Vehicle Model:"),e.qZA(),e.TgZ(55,"input",11),e.NdJ("ngModelChange",function(i){return o.jobCardObj.VehicleModel=i}),e.qZA()()()(),e.TgZ(56,"div")(57,"div",14)(58,"div",15)(59,"table",16)(60,"thead")(61,"tr",17)(62,"th",18),e._uU(63,"SNo."),e.qZA(),e.TgZ(64,"th",19),e._uU(65,"Job Card No"),e.qZA(),e.TgZ(66,"th",20),e._uU(67,"Customer Name"),e.qZA(),e.TgZ(68,"th",21),e._uU(69,"Address"),e.qZA(),e.TgZ(70,"th",21),e._uU(71,"Mobile No"),e.qZA(),e.TgZ(72,"th",21),e._uU(73,"Vehicle No"),e.qZA(),e.TgZ(74,"th",21),e._uU(75,"Engine No"),e.qZA(),e.TgZ(76,"th",21),e._uU(77,"Chasis No"),e.qZA(),e.TgZ(78,"th",21),e._uU(79,"Vehicle Brand"),e.qZA(),e.TgZ(80,"th",21),e._uU(81,"Mobile Model"),e.qZA(),e.TgZ(82,"th",21),e._uU(83,"Action"),e.qZA()()(),e.TgZ(84,"tbody"),e.YNc(85,R,24,10,"tr",22),e.ALo(86,"paginate"),e.qZA()()()(),e.TgZ(87,"div",23)(88,"pagination-controls",24),e.NdJ("pageChange",function(i){return o.ListPagination(i)}),e.qZA()()(),e.TgZ(89,"generic-popup-grid",25,26),e.NdJ("onItemDoubleClick",function(i){return o.onCustomerSelected(i)}),e.qZA(),e.TgZ(91,"generic-popup-grid",25,27),e.NdJ("onItemDoubleClick",function(i){return o.onJobCardSelected(i)}),e.qZA()),2&t&&(e.xp6(4),e.hij("Job Card Registration Form [",o.Mode,"]"),e.xp6(14),e.Q6J("ngModel",o.jobCardObj.JobCardNO)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.Date)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.CustomerName)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.Address)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.MobileNo)("disabled","VIEW"==o.Mode),e.xp6(5),e.Q6J("ngModel",o.jobCardObj.VehicleNo)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.EngineNo)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.ChasisNo)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.VehicleBrand)("disabled","VIEW"==o.Mode),e.xp6(4),e.Q6J("ngModel",o.jobCardObj.VehicleModel)("disabled","VIEW"==o.Mode),e.xp6(30),e.Q6J("ngForOf",e.xi3(86,24,o.jobCardList,e.kEZ(27,D,o.maxResultCount,o.currentPage,o.totalCount))),e.xp6(4),e.Q6J("popupsettings",o.gridPopupSettingsForCustomer),e.xp6(2),e.Q6J("popupsettings",o.gridPopupSettingsForViewEdit))},dependencies:[g.sg,M.Fj,M.JJ,M.On,O.Zl,c.LS,c._s],styles:["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:30px;color:#000}label[_ngcontent-%COMP%]{width:62px;height:25px;font-size:13px}.form-control[_ngcontent-%COMP%]{font-size:13px}td[_ngcontent-%COMP%]{line-height:18px;text-align:center;border:1px solid #e6e6e6}input[_ngcontent-%COMP%]{padding:8px}"]}),a})()}]}]);let x=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[U,g.ez,s.m,c.JX,h.Xd,p.Is,C.b.forRoot(),m.Z,l.J]}),a})()}}]);