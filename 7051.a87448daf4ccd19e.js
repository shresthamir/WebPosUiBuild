"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[7051],{28096:(B,_,l)=>{l.d(_,{C:()=>g});var t=l(94650);let g=(()=>{class s{transform(r,p,f){if(r)return p?r.filter(a=>{if("BATCH"==f){const u=p.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(a.BATCH?a.BATCH.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(u))return a}else{const u=p.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(a.BATCHCODE?a.BATCHCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(u))return a}}):r}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275pipe=t.Yjl({name:"searchData",type:s,pure:!1}),s})()},37051:(B,_,l)=>{l.d(_,{K:()=>k});var t=l(94650),g=l(53074),s=l(87584),d=l(36895),r=l(24006),p=l(28096);const f=["BatchEntry"],a=["SearchBox"];function u(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.showCreateBatch())}),t._uU(1,"ADD BATCH"),t.qZA()}}function T(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"th"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(2),t.Oqu(e)}}function A(n,c){1&n&&(t.TgZ(0,"th"),t._uU(1,"BATCH"),t.qZA())}function x(n,c){1&n&&(t.TgZ(0,"th",19),t._uU(1,"P-Rate"),t.qZA())}function C(n,c){1&n&&(t.TgZ(0,"th",19),t._uU(1,"S-Rate"),t.qZA())}function E(n,c){1&n&&(t.TgZ(0,"th",19),t._uU(1,"Cost Rate"),t.qZA())}function b(n,c){1&n&&(t.TgZ(0,"th",16),t._uU(1,"EXP DATE"),t.qZA())}function I(n,c){1&n&&(t.TgZ(0,"th",16),t._uU(1,"MFG DATE"),t.qZA())}function w(n,c){1&n&&(t.TgZ(0,"th",19),t._uU(1,"MRP"),t.qZA())}function P(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"td",29),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(2),t.hij(" ",e," ")}}function R(n,c){if(1&n&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.BATCH)}}function L(n,c){if(1&n&&(t.TgZ(0,"td",31),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.RATE,"1.2-2"))}}function O(n,c){if(1&n&&(t.TgZ(0,"td",31),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.RATE,"1.2-2"))}}function v(n,c){if(1&n&&(t.TgZ(0,"td",32),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.EXPDATE))}}function Z(n,c){if(1&n&&(t.TgZ(0,"td",32),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.MFGDATE))}}function D(n,c){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.MRP,"1.2-2"))}}function y(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",20),t.NdJ("click",function(){const h=t.CHM(e).index,m=t.oxw();return t.KtG(m.RowClickEvent(h))})("dblclick",function(){const h=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.dblClickBatchObj(h))}),t.TgZ(1,"td",21),t._uU(2),t.qZA(),t.YNc(3,P,3,1,"ng-container",12),t.YNc(4,R,2,1,"td",22),t.YNc(5,L,3,4,"td",23),t.YNc(6,O,3,4,"td",23),t.YNc(7,v,3,3,"td",24),t.YNc(8,Z,3,3,"td",25),t.TgZ(9,"td",26),t._uU(10),t.qZA(),t.TgZ(11,"td",27),t._uU(12),t.qZA(),t.YNc(13,D,3,4,"td",28),t.qZA()}if(2&n){const e=c.$implicit,i=c.index,o=t.oxw();t.ekj("selected-row",i===o.selectedRowIndex),t.xp6(2),t.Oqu(i+1),t.xp6(1),t.Q6J("ngForOf",e.VariantValues),t.xp6(1),t.Q6J("ngIf",o.needtoShowBatchColumn()),t.xp6(1),t.Q6J("ngIf",14!=o.voucherType&&1!=o.voucherType),t.xp6(1),t.Q6J("ngIf",14==o.voucherType||1==o.voucherType),t.xp6(1),t.Q6J("ngIf",0==o.userSetting.ENABLEDEFAULTEXPIRYDATEENTRY&&1===(null==o.BList[0]?null:o.BList[0].REQEXPDATE)),t.xp6(1),t.Q6J("ngIf",0==o.userSetting.ENABLEDEFAULTEXPIRYDATEENTRY&&1===(null==o.BList[0]?null:o.BList[0].REQEXPDATE)),t.xp6(2),t.hij("",e.STOCK," "),t.xp6(2),t.hij(" ",e.BASEUNIT," "),t.xp6(1),t.Q6J("ngIf","self-billing"!=o.activeurlpath)}}let k=(()=>{class n{constructor(e,i){this.masterRepo=e,this._trnMainService=i,this.dbClickEvent=new t.vpe,this.BatchClosedClick=new t.vpe,this.searchItem=new t.vpe,this.returnBatchValue=new t.vpe,this.multiBatchScheme=new t.vpe,this.emitshowCreateBatch=new t.vpe,this.isFocus=!0,this.p=[],this.BatchObj={},this.BatchList=[],this.BList=[],this.unitList=[],this.AlternateUnits=[],this.getAttributeValues=(o,h)=>null!=o.VARIANTDETAIL&&o.VARIANTDETAIL[h]&&o.VARIANTDETAIL[h].hasOwnProperty("NAME")?o.VARIANTDETAIL[h].NAME:"",this.userSetting=this.masterRepo.userSetting,console.log("in popnatch",this.userSetting),this.selectedRowIndex=0,this.setClickedRow=function(o){this.selectedRow=o}}ngAfterViewInit(){}ngOnInit(){setTimeout(()=>{null!=document.getElementById("batchFilterPopup")&&document.getElementById("batchFilterPopup").focus()},500)}SelectUnit(){this.BatchObj.UNIT=this.BatchObj.ALTUNITObj.ALTUNIT,this.BatchObj.PRATE=this.BatchObj.ALTUNITObj.PRATE,this.BatchObj.SRATE=this.BatchObj.ALTUNITObj.RATE}pagingChange(e){this.p[this.tabindex]=e}setFocus(){}SearchList(e){}PopupItemListRowClick(e){this.selectedRowIndex=e}itemBatchClosed(){this.BatchClosedClick.emit()}keydownClick(){}AddNewBatch(){}tabClick(){this.returnBatchValue.emit(this.BatchObj)}clickPlusButton(){this.tabClick()}needtoShowBatchColumn(){return 2==this.userSetting.EnableBatch||1===this.BatchList[0]?.REQEXPDATE||"self-billing"==this.activeurlpath||!(14==this.voucherType||16==this.voucherType||1==this.voucherType)}clickButtonClick(){null!=this.BatchObj.BATCH?this.BatchObj.MFGDATE>this.BatchObj.EXPIRY?alert("Manufacture date cannot be greater than Expiry date!!"):this.BatchObj.SRATE>this.BatchObj.MRP||null!=this.BatchObj.MFGDATE&&null!=this.BatchObj.EXPIRY?this.tabClick():alert("MFGDate and ExpDate cannot be empty!"):alert("Please enter Batch no.")}RowClickEvent(e){this.selectedRowIndex=e}dblClickBatchObj(e){this.dbClickEvent.emit(e)}MultiBatchEntryClicked(){var e=this.BList.filter(o=>o.tQuantity>0),i=e[0];null!=i?null==e.filter(o=>o.SCHEME.schemeID!=i.SCHEME.schemeID)[0]?null==e.filter(o=>o.STOCK<o.tQuantity)[0]?this.multiBatchScheme.emit(e):alert("Exceed Quantity than Stock detected..."):alert("Can not Choose multi batch of different Scheme..."):alert("Row with valid Quantity not detected...")}updown(e){null==this.selectedRowIndex&&(this.selectedRowIndex=0),"ArrowDown"===e.code?(this.selectedRowIndex=this.selectedRowIndex+1,this.selectedRowIndex>this.BList.length-1&&(this.selectedRowIndex=this.BList.length-1)):"ArrowUp"===e.code&&(this.selectedRowIndex=this.selectedRowIndex-1,this.selectedRowIndex<0&&(this.selectedRowIndex=0)),"Enter"===e.code||"NumpadEnter"==e.code?null!=this.selectedRowIndex&&null!=this.BList[this.selectedRowIndex]&&this.dblClickBatchObj(this.BList[this.selectedRowIndex]):"Escape"===e.code&&this.itemBatchClosed()}ngOnChanges(e){e&&e.BList&&(this.BList=e.BList.currentValue,this.headerKeys=[],this.BList.forEach(i=>{i.VARIANTDETAIL=i.hasOwnProperty("VARIANTDETAIL")&&null!=i.VARIANTDETAIL?i.VARIANTDETAIL:null}),this.BList.forEach(i=>{for(var o in i.VariantValues=[],i.VARIANTDETAIL){let h=o.toUpperCase();-1==this.headerKeys.indexOf(h)&&this.headerKeys.push(h),i.VariantValues.push(i.VARIANTDETAIL[o])}}))}showCreateBatch(){this.emitshowCreateBatch.emit()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.P),t.Y36(s.p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["PBatchList"]],viewQuery:function(e,i){if(1&e&&(t.Gf(f,5),t.Gf(a,5)),2&e){let o;t.iGM(o=t.CRH())&&(i._BE=o.first),t.iGM(o=t.CRH())&&(i._Search=o.first)}},hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(h){return i.updown(h)},!1,t.evT)},inputs:{title:"title",tabindex:"tabindex",inputSearch:"inputSearch",BList:"BList",voucherType:"voucherType",activerowIndex:"activerowIndex",AlternateUnits:"AlternateUnits",activeurlpath:"activeurlpath"},outputs:{dbClickEvent:"dbClickEvent",BatchClosedClick:"BatchClosedClick",searchItem:"searchItem",returnBatchValue:"returnBatchValue",multiBatchScheme:"multiBatchScheme",emitshowCreateBatch:"showCreateBatchEvent"},features:[t.TTD],decls:31,vars:16,consts:[[1,"modal-sticky",2,"width","50vw"],[1,"modal-content",2,"padding","2px !important","box-shadow","-10px 0px 10px 1px #aaaaaa","width","101%","margin-left","1pc","margin-top","5pc","min-height","350px","max-height","350px","overflow","scroll","overflow-x","hidden"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"col-md-12",2,"padding","0px"],["type","text","id","batchFilterPopup","placeholder","Search by Batch...",2,"width","100%","/* padding","1px","*/padding-left","5px",3,"ngModel","ngModelChange"],["inputBox",""],["style","background-color: #7ed0ff;",3,"click",4,"ngIf"],[1,"Table1",2,"padding","0px","margin-top","2px","width","100%","overflow","scroll"],[2,"background","#7ed0ff"],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","text-align: right;",4,"ngIf"],["style","text-align: center",4,"ngIf"],[2,"text-align","center"],["aria-disabled","true","class","highlight",3,"selected-row","click","dblclick",4,"ngFor","ngForOf"],[2,"background-color","#7ed0ff",3,"click"],[2,"text-align","right"],["aria-disabled","true",1,"highlight",3,"click","dblclick"],[2,"border-bottom","1px solid #ddd","height","23px","width","5%"],["style","border-bottom: 1px solid #ddd;height: 23px;width:21%",4,"ngIf"],["style","border-bottom: 1px solid #ddd;height: 23px;width:12%;text-align: right;",4,"ngIf"],["style","border-bottom: 1px solid #ddd;height: 23px;width:18%;text-align: center;",4,"ngIf"],["style","border-bottom: 1px solid #ddd;height: 23px;width:18%;text-align: center",4,"ngIf"],[2,"border-bottom","1px solid #ddd","height","23px","width","10%","text-align","center"],[2,"border-bottom","1px solid #ddd","height","23px","width","9%"],["style","border-bottom: 1px solid #ddd;height: 23px;width:13%;text-align: right;",4,"ngIf"],[2,"border-bottom","1px solid #ddd","height","23px","width","10%"],[2,"border-bottom","1px solid #ddd","height","23px","width","21%"],[2,"border-bottom","1px solid #ddd","height","23px","width","12%","text-align","right"],[2,"border-bottom","1px solid #ddd","height","23px","width","18%","text-align","center"],[2,"border-bottom","1px solid #ddd","height","23px","width","13%","text-align","right"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.itemBatchClosed()}),t.TgZ(6,"span",5),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div",6)(9,"input",7,8),t.NdJ("ngModelChange",function(h){return i.filter=h}),t.qZA()(),t.YNc(11,u,2,0,"button",9),t.TgZ(12,"table",10)(13,"tr",11)(14,"th"),t._uU(15,"Sn."),t.qZA(),t.YNc(16,T,3,1,"ng-container",12),t.YNc(17,A,2,0,"th",13),t.YNc(18,x,2,0,"th",14),t.YNc(19,C,2,0,"th",14),t.YNc(20,E,2,0,"th",14),t.YNc(21,b,2,0,"th",15),t.YNc(22,I,2,0,"th",15),t.TgZ(23,"th",16),t._uU(24,"Stock"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Unit"),t.qZA(),t.YNc(27,w,2,0,"th",14),t.qZA(),t.TgZ(28,"tbody"),t.YNc(29,y,14,12,"tr",17),t.ALo(30,"searchData"),t.qZA()()()()),2&e&&(t.xp6(4),t.Oqu(i.title),t.xp6(5),t.Q6J("ngModel",i.filter),t.xp6(2),t.Q6J("ngIf",3==i.voucherType||24==i.voucherType||15==i.voucherType),t.xp6(5),t.Q6J("ngForOf",i.headerKeys),t.xp6(1),t.Q6J("ngIf",i.needtoShowBatchColumn()),t.xp6(1),t.Q6J("ngIf",14!=i.voucherType&&1!=i.voucherType),t.xp6(1),t.Q6J("ngIf",14==i.voucherType&&"self-billing"!=i.activeurlpath||1==i.voucherType),t.xp6(1),t.Q6J("ngIf",14==i.voucherType&&"self-billing"==i.activeurlpath),t.xp6(1),t.Q6J("ngIf",0==i.userSetting.ENABLEDEFAULTEXPIRYDATEENTRY&&1===(null==i.BList[0]?null:i.BList[0].REQEXPDATE)),t.xp6(1),t.Q6J("ngIf",0==i.userSetting.ENABLEDEFAULTEXPIRYDATEENTRY&&1===(null==i.BList[0]?null:i.BList[0].REQEXPDATE)),t.xp6(5),t.Q6J("ngIf","self-billing"!=i.activeurlpath),t.xp6(2),t.Q6J("ngForOf",t.Dn7(30,12,i.BList,i.filter,"BATCH")))},dependencies:[d.sg,d.O5,r.Fj,r.JJ,r.On,d.JJ,d.uU,p.C],styles:[".selected-row[_ngcontent-%COMP%] {\n    background-color: #ced6d3 !important;\n  }\n  .modal-sticky[_ngcontent-%COMP%]{\n    right: 55px;\n  }\n\n  .unitLabel[_ngcontent-%COMP%]{\n    width: auto;\n    font-size: 14px;\n    margin-left: 5px;\n  }"]}),n})()}}]);