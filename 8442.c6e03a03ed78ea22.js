"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8442],{82738:(M,g,r)=>{r.d(g,{b:()=>_});var l=r(88692),u=r(72533),h=r(87584),c=r(71800),f=r(53074),p=r(64537);let _=(()=>{class s{static forRoot(){return{ngModule:s,providers:[f.P,h.p]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=p.oAB({type:s}),s.\u0275inj=p.cJS({imports:[l.ez,c.zk.forRoot(),u.JX]}),s})()},77879:(M,g,r)=>{r.d(g,{H:()=>h});var l=r(64537),u=r(53074);let h=(()=>{class c{constructor(p){this.masterRepo=p}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return c.\u0275fac=function(p){return new(p||c)(l.Y36(u.P))},c.\u0275dir=l.lG2({type:c,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),c})()},38442:(M,g,r)=>{r.r(g),r.d(g,{BarCodeMappingModule:()=>F});var l=r(88692),u=r(72533),h=r(12640),c=r(71800),f=r(54536),p=r(82738),_=r(89953),s=r(7976),b=r(28698),e=r(64537),x=r(53074),D=r(67311),E=r(35732),v=r(67297),A=r(71180);let O=(()=>{class o{constructor(t,n,i){this.http=t,this.authService=n,this.state=i}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(E.eN),e.LFG(v.e),e.LFG(A.q))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var B=r(59866),U=r(14970),m=r(20092),S=r(77879);const y=["genericGrid"];function Z(o,d){if(1&o&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&o){const t=d.$implicit;e.Q6J("ngValue",t.UNITS),e.xp6(1),e.Oqu(t.UNITS)}}function k(o,d){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",27)(2,"label",28),e._uU(3,"Barcode :"),e.qZA(),e.TgZ(4,"div",29)(5,"input",30),e.NdJ("click",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.clearForm(i))})("keydown.enter",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.BarcodeCheck())})("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.formObj.BCODE=i)}),e.qZA()()(),e.TgZ(6,"div",31)(7,"label",28),e._uU(8,"Item:"),e.qZA(),e.TgZ(9,"div",29)(10,"input",32),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.formObj.ItemName=i)})("keydown",function(i){return i.preventDefault()})("keydown.Enter",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.itemKeyEvent())}),e.qZA()(),e.TgZ(11,"div",33)(12,"label",34),e._uU(13,"Stock Unit:"),e.qZA(),e.TgZ(14,"select",35),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.formObj.Unit=i)}),e._UZ(15,"option"),e.YNc(16,Z,2,2,"option",36),e.qZA()(),e.TgZ(17,"div",37)(18,"button",38,7),e.NdJ("click",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.addToTable(i))}),e._uU(20,"Add"),e.qZA(),e.TgZ(21,"button",39),e.NdJ("click",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.clearForm(i))}),e._uU(22,"Clear"),e.qZA()()(),e.BQk()}if(2&o){const t=e.MAs(19),n=e.oxw();e.xp6(5),e.Q6J("ngModel",n.formObj.BCODE),e.xp6(5),e.Q6J("ngModel",n.formObj.ItemName),e.xp6(4),e.Q6J("ngModel",n.formObj.Unit)("disabled",1==n.masterService.disableOnCheckTran),e.xp6(2),e.Q6J("ngForOf",n.Units),e.xp6(2),e.Q6J("disabled",t.isOldFYearDB())}}function I(o,d){if(1&o&&(e.TgZ(0,"tr")(1,"td",41),e._uU(2),e.qZA(),e.TgZ(3,"td",42),e._uU(4),e.ynx(5),e._UZ(6,"br")(7,"span",43),e.BQk(),e.qZA(),e.TgZ(8,"td",44),e._uU(9),e.qZA(),e.TgZ(10,"td",45),e._uU(11),e.qZA()()),2&o){const t=d.$implicit;e.xp6(2),e.Oqu(t.Code),e.xp6(2),e.hij("",t.ItemName," "),e.xp6(3),e.Q6J("innerHtml",t.bcodeDESCA,e.oJD),e.xp6(2),e.hij("",t.BCODE," "),e.xp6(2),e.Oqu(t.Unit)}}const P=[{path:"",component:(()=>{class o{constructor(t,n,i,a,T,C,N){this.masterService=t,this.alertService=n,this.barCodeMappingService=i,this.authservice=a,this.printService=T,this.router=C,this._spinnerservice=N,this.showBarcode=!1,this.activerowIndex=0,this.gridPopupSettings=new b.im,this.Units=[],this.formObj={},this.barcodeList=[],this.barcodeSelectIndex=0,this.bcDetails={},this.VchrsItemDetailsList=[],this.clickCount=0,this.clickTimeout=null,this.barCodeArr=[],this.userProfile=a.getUserProfile()}ngOnInit(){this.formObj.DISCONTINUE=0}addToTable(t){this.clickCount++,this.clickTimeout?this.clickCount>=2&&console.log("multiple click detected"):this.setClickTimeOut(this.singleClickAdd())}setClickTimeOut(t){clearInterval(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.clickTimeout=null,this.clickCount=0},1500)}singleClickAdd(){this.LoadToTable()}LoadToTable(){this.BarcodeCheck()}clearForm(){this.formObj={},this.Units=[]}itemKeyEvent(){this.gridPopupSettings={title:"Item list",apiEndpoints:"/getMenuitemPagedListForScheme/Item",defaultFilterIndex:1,columns:[{key:"MENUCODE",title:"MENU CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"NAME",hidden:!1,noSearch:!1},{key:"DESCRIPTION",title:"SHORT NAME",hidden:!1,noSearch:!1},{key:"PARENT",title:"PARENT",hidden:!1,noSearch:!1}]},this.genericGrid.show()}dblClickPopupItem(t){console.log(t),this.formObj.Code=t.MENUCODE,this.formObj.Menucode=t.MCODE,this.formObj.ItemName=t.DESCA,this.formObj.MCODE=t.MCODE,this.masterService.focusAnyControl("StockUnit"),this.masterService.getItemUnit(this.formObj.MCODE).subscribe(n=>{"ok"==n.status&&(this.Units=n.result,this.formObj.Unit=n.result[0].UNITS)})}onReset(){confirm("Are you sure you want to reset ?")&&(this.formObj={},this.Units=[],this.barCodeArr=[])}hidePopup(){this.showBarcode=!1}RowClickEvent(t){this.barcodeSelectIndex=t}back(){this.router.navigate(["/pages/dashboard"])}BarcodeCheck(){let t={BCODE:this.formObj.BCODE,ItemName:this.formObj.ItemName,Code:this.formObj.Code,MCODE:this.formObj.MCODE,Menucode:this.formObj.Menucode,bcodeDESCA:this.formObj.bcodeDESCA,Unit:this.formObj.Unit,DISCONTINUE:0,barcodeMapDetails:[]};this.masterService.checkBarcode(this.formObj.BCODE).subscribe(n=>{var i;if("error"==n.status)this.alertService.info("Barcode already mapped for another item.");else if(i=t,this.barCodeArr.length>=0){let a=this.barCodeArr.filter(C=>C.Code==t.Code)[0];if(this.barCodeArr.filter(C=>C.BCODE==this.formObj.BCODE)[0])return void this.alertService.info(`Barcode : ${this.formObj.BCODE} is already mapped in the list below.`);if(a&&null!==a&&null!==a.Code&&void 0!==a){if(confirm("Dublicate item detected. Are you sure you want to continue?")){if(this.validateForBarCode(this.formObj.BCODE))return;this.barCodeArr.push(i)}}else{if(this.validateForItem(this.formObj.Code)||this.validateForBarCode(this.formObj.BCODE))return;this.barCodeArr.push(i)}}})}validateForItem(t){return(null==t||null==t||""==t)&&(alert("Please select the item for barcode mapping first."),!0)}validateForBarCode(t){return(null==t||null==t||""==t)&&(alert("Please map barcode for the item first."),!0)}onSave(){console.log("barcode array",this.barCodeArr),this._spinnerservice.show("Saving, Please Wait..."),this.masterService.saveBarcode(this.barCodeArr).subscribe(t=>{"ok"===t.status&&(this._spinnerservice.hide(),this.barCodeArr=[],this.Units=[],this.formObj={},this.alertService.success(t.result))},t=>{this.alertService.error("Save unsuccessful...")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x.P),e.Y36(D.c),e.Y36(O),e.Y36(v.e),e.Y36(B.n),e.Y36(s.F0),e.Y36(U.V))},o.\u0275cmp=e.Xpm({type:o,selectors:[["barcode-mappingint"]],viewQuery:function(t,n){if(1&t&&e.Gf(y,5),2&t){let i;e.iGM(i=e.CRH())&&(n.genericGrid=i.first)}},decls:45,vars:4,consts:[[1,"heading"],[1,"row"],[1,"col-md-4"],[2,"white-space","nowrap","margin-left","-30px","margin-bottom","8px","font-family","Segoe UI Light","font-weight","bold","font-size","20px","padding-left","4%","width","192px"],[1,"col-md-8"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"main-wrap"],[1,"barcode-body"],[1,"card","mt-2"],[1,"card-header",2,"padding","3px"],[1,"page-title"],[4,"ngIf"],[1,"col-sm-12"],[1,"barcodeList-wrap"],[1,"heading",2,"background-color","rgba(0,0,0,.03)","padding","8px"],[2,"font-size","14px"],[1,"table-wrap",2,"overflow","auto","height","39vh"],[1,"table","table-striped",2,"width","100%"],["width","180px"],["width","300px;"],["width","180px;"],["width","160px;"],[4,"ngFor","ngForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],[1,"form-group","row",2,"margin-top","10px"],[1,"col-sm-2","form-control-label",2,"font-size","13px"],[1,"col-sm-2",2,"padding-left","3px"],["id","bc","type","text","autocomplete","off","name","barcode","name","BCODE",1,"form-control",2,"height","30px","font-size","14px","width","75%",3,"ngModel","click","keydown.enter","ngModelChange"],[1,"form-group","row"],["type","text","id","item","name","ItemName","autocomplete","off","placeholder","Press Enter to Select item",1,"form-control",2,"height","30px","font-size","14px","width","75%",3,"ngModel","ngModelChange","keydown","keydown.Enter"],[1,"col-sm-2"],["type","number",1,"ThirtyTreeLabel",2,"font-size","13px"],["id","StockUnit",2,"width","50%","margin-left","5px",3,"ngModel","disabled","ngModelChange"],["id","StockUnit",3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-2",2,"margin-top","-9px"],["appOldFYearDB","",1,"btn","btn-info",2,"padding","10px","width","30%","height","90%",3,"disabled","click"],[1,"btn","btn-info",2,"padding","10px","width","30%","height","90%",3,"click"],["id","StockUnit",3,"ngValue"],["widtd","180px"],["widtd","300px;"],[3,"innerHtml"],["widtd","180px;"],["widtd","160px;"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",0)(5,"label",3),e._uU(6,"BARCODE MAPPING"),e.qZA()()(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return n.back()}),e._uU(9,"Back"),e.qZA(),e.TgZ(10,"button",5),e.NdJ("click",function(){return n.onReset()}),e._uU(11,"Reset"),e.qZA(),e.TgZ(12,"button",6,7),e.NdJ("click",function(){return n.onSave()}),e._uU(14,"Save"),e.qZA()()()(),e.TgZ(15,"div",8)(16,"div")(17,"div",9)(18,"div",10)(19,"div",11)(20,"h5",12),e._uU(21,"New Barcode Mapping"),e.qZA()(),e.YNc(22,k,23,6,"ng-container",13),e.qZA()()()(),e.TgZ(23,"div",1)(24,"div",14)(25,"div",15)(26,"div",16)(27,"h3",17),e._uU(28,"Barcode Mapping List"),e.qZA()(),e.TgZ(29,"div",18)(30,"table",19)(31,"thead")(32,"tr")(33,"th",20),e._uU(34,"Item Code"),e.qZA(),e.TgZ(35,"th",21),e._uU(36,"Item Name"),e.qZA(),e.TgZ(37,"th",22),e._uU(38," Barcode"),e.qZA(),e.TgZ(39,"th",23),e._uU(40,"Stock Unit"),e.qZA()()(),e.TgZ(41,"tbody"),e.YNc(42,I,12,5,"tr",24),e.qZA()()()()()(),e.TgZ(43,"generic-popup-grid",25,26),e.NdJ("onItemDoubleClick",function(a){return n.dblClickPopupItem(a)}),e.qZA()()),2&t){const i=e.MAs(13);e.xp6(12),e.Q6J("disabled",i.isOldFYearDB()),e.xp6(10),e.Q6J("ngIf","piWise"!=n.barcodeType&&"bcWise"!=n.barcodeType&&"trWise"!=n.barcodeType),e.xp6(20),e.Q6J("ngForOf",n.barCodeArr),e.xp6(1),e.Q6J("popupsettings",n.gridPopupSettings)}},dependencies:[l.sg,l.O5,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.On,b.Zl,S.H],styles:[".card-body[_ngcontent-%COMP%] {\n        padding: 0 !important;\n    }\n\n    .form-group.row[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n    }\n\n    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n        height: 26px;\n        font-size: 14px;\n        padding-top: 0;\n        padding-bottom: 0px;\n    }\n\n    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n        padding: .2rem;\n        vertical-align: top;\n        border-top: 1px solid #dee2e6;\n        font-size: 14px;\n    }\n\n    th[_ngcontent-%COMP%] {\n        position: sticky;\n        top: -1px;\n        z-index: 1;\n        background-color: #7ed0ff;\n    }\n\n    th[_ngcontent-%COMP%]:first-child {\n        border-bottom: 1px solid #dee2e6;\n    }\n\n    .highlighted[_ngcontent-%COMP%] {\n        background-color: #ced6d3;\n    }"]}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(P),s.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[O,B.n],imports:[_.m,l.ez,w,u.JX,h.Xd,c.zk.forRoot(),f.Is,p.b.forRoot()]}),o})()}}]);