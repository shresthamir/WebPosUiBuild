"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[5155],{82661:(I,T,c)=>{c.d(T,{C:()=>D});var R=c(26215),h=c(9219),n=c(28611),p=c(92752);let e=(()=>{class g{constructor(o,l){this.dialogref=o,this.data=l,this.heading="Information",this.heading=l.header,this.message$=l.message}authResult(o){this.dialogref.close(o)}}return g.\u0275fac=function(o){return new(o||g)(n.Y36(h.so),n.Y36(h.WI))},g.\u0275cmp=n.Xpm({type:g,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4),n.NdJ("click",function(){return l.authResult(!0)}),n._uU(6,"\xd7"),n.qZA()(),n.TgZ(7,"div",5),n._UZ(8,"div",6),n._uU(9),n.ALo(10,"async"),n.qZA()()()),2&o&&(n.xp6(4),n.Oqu(l.heading),n.xp6(5),n.hij(" ",n.lcZ(10,2,l.message$)," "))},dependencies:[p.Ov],encapsulation:2}),g})();var v=c(67297),b=c(53074),A=c(14970),S=c(95570),f=c(67311);function C(g,u){1&g&&(n.TgZ(0,"h4",5),n._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),n.qZA())}function O(g,u){1&g&&(n.TgZ(0,"h4",5),n._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),n.qZA())}function N(g,u){if(1&g){const o=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.YesClick())}),n._uU(1,"Yes"),n.qZA()}}function y(g,u){if(1&g){const o=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.NoClick())}),n._uU(1,"No"),n.qZA()}}function Z(g,u){if(1&g){const o=n.EpF();n.TgZ(0,"button",6),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.offlinelineOK())}),n._uU(1,"OK"),n.qZA()}}let P=(()=>{class g{constructor(o,l,i,t,r,a){this.dialogref=o,this.authSerice=l,this.masterService=i,this.spinnerService=t,this.router=r,this.alertService=a}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(o=>{"ok"===o.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(o.result.error))},o=>{this.spinnerService.hide(),alert(JSON.parse(o._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return g.\u0275fac=function(o){return new(o||g)(n.Y36(h.so),n.Y36(v.e),n.Y36(b.P),n.Y36(A.V),n.Y36(S.F0),n.Y36(f.c))},g.\u0275cmp=n.Xpm({type:g,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(o,l){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,C,2,0,"h4",2),n.YNc(3,O,2,0,"h4",2),n.qZA(),n.TgZ(4,"div",3),n.YNc(5,N,2,0,"button",4),n.YNc(6,y,2,0,"button",4),n.YNc(7,Z,2,0,"button",4),n.qZA()()),2&o&&(n.xp6(2),n.Q6J("ngIf",1!=l.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1==l.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(2),n.Q6J("ngIf",1!=l.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1!=l.masterService.userSetting.ENABLEOFFLINESALE),n.xp6(1),n.Q6J("ngIf",1==l.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[p.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),g})();var L=c(71180);let D=(()=>{class g{constructor(o,l,i,t,r){this.gblstate=o,this._authService=l,this.masterService=i,this.router=t,this.dialog=r,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=o.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(o,l){const i=new R.X(""),t=i.asObservable(),r=this._authService.getAuth();let a="";null!=o.url[0]&&(a=o.url[0].path);let s=o.params.mode;if(void 0===s&&(s="list"),!r||!r.profile){i.next("You are not logged In.Please login in");const d=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:t}});return setTimeout(()=>{d.close()},1e3),!1}if(this.masterService.checkUserValid().subscribe(_=>{if(!1===_){i.next("Invalid User");const E=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:t}});return setTimeout(()=>(E.close(),!1),1e3),!1}}),0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(P,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==a))return!1;if(0===this.userSetting.ENABLEOFFLINESALE||2===this.userSetting.ENABLEOFFLINESALE){if(r&&r.profile&&"dashboard"===a)return!0;if(0===this.userSetting.ENABLEOFFLINESALE){if("ADMIN"===this.masterService.userProfile.username.toUpperCase()||"patanjali_user"===this.masterService.userProfile.username)return!0}else if(2===this.userSetting.ENABLEOFFLINESALE){if("addsientry"===a||"add-creditnote-itembase"===a){i.next("You are not authorize for this operation");const _=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:t}});return setTimeout(()=>(_.close(),!1),2e3),!1}if("ADMIN"===this.masterService.userProfile.username.toUpperCase()||"patanjali_user"===this.masterService.userProfile.username)return!0}const d=this._authService.getMenuRight(a,s);if(a){if(!0===d.right)return!0;if("list"===s&&!0===d.list)return!0}else if(!0===d.list)return!0}else if(1===this.userSetting.ENABLEOFFLINESALE)return!0}}return g.\u0275fac=function(o){return new(o||g)(n.LFG(L.q),n.LFG(v.e),n.LFG(b.P),n.LFG(S.F0),n.LFG(h.uw))},g.\u0275prov=n.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},89952:(I,T,c)=>{c.d(T,{g:()=>h});var R=c(28611);let h=(()=>{class n{transform(e){return e||(e=0),Number(e).toFixed(2)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=R.Yjl({name:"twoDigitNumber",type:n,pure:!0}),n})()},5155:(I,T,c)=>{c.r(T),c.d(T,{MeterReadingModule:()=>u});var R=c(92752),h=c(95570),n=c(82661),p=c(28698),e=c(28611),v=c(53074),b=c(67311),A=c(14970),S=c(87584),f=c(72011),C=c(89952);const O=["genericGridMeterEntry"],N=["firstMeterEndInput"];function y(o,l){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"input",30),e.NdJ("ngModelChange",function(r){const s=e.CHM(i).$implicit;return e.KtG(s.PUMP=r)}),e.qZA()(),e.TgZ(5,"td")(6,"input",31),e.NdJ("ngModelChange",function(r){const s=e.CHM(i).$implicit;return e.KtG(s.PRODUCT=r)}),e.qZA()(),e.TgZ(7,"td"),e._UZ(8,"input",32),e.ALo(9,"twoDigitNumber"),e.qZA(),e.TgZ(10,"td")(11,"input",33),e.NdJ("ngModelChange",function(r){const s=e.CHM(i).$implicit;return e.KtG(s.METER_END=r)})("ngModelChange",function(){const a=e.CHM(i).index,s=e.oxw();return e.KtG(s.calulateSalesQuantity(a))})("keydown.enter",function(r){const s=e.CHM(i).index,d=e.oxw();return e.KtG(d.focusNextMeterEnd(s,r))})("keydown.Tab",function(r){const s=e.CHM(i).index,d=e.oxw();return e.KtG(d.focusNextMeterEnd(s,r))}),e.qZA()(),e.TgZ(12,"td"),e._UZ(13,"input",34),e.ALo(14,"twoDigitNumber"),e.qZA(),e.TgZ(15,"td")(16,"input",35),e.NdJ("ngModelChange",function(r){const s=e.CHM(i).$implicit;return e.KtG(s.UNIT=r)}),e.qZA()(),e.TgZ(17,"td")(18,"input",35),e.NdJ("ngModelChange",function(r){const s=e.CHM(i).$implicit;return e.KtG(s.METER_MAX=r)}),e.qZA()()()}if(2&o){const i=l.$implicit,t=l.index,r=e.oxw();e.xp6(1),e.MGl("id","sno",t,""),e.xp6(1),e.hij(" ",t+1," "),e.xp6(2),e.MGl("id","pump",t,""),e.Q6J("ngModel",i.PUMP)("disabled","View"==r.mode),e.xp6(2),e.MGl("id","menuCode",t,""),e.Q6J("ngModel",i.PRODUCT)("disabled","View"==r.mode),e.xp6(2),e.MGl("id","METER_START",t,""),e.Q6J("value",e.lcZ(9,24,i.METER_START))("disabled","View"==r.mode),e.xp6(3),e.MGl("id","METER_END",t,""),e.Q6J("ngModel",i.METER_END)("min",i.METER_START)("disabled","View"==r.mode),e.xp6(2),e.MGl("id","SALES_QTY",t,""),e.Q6J("value",e.lcZ(14,26,i.SALES_QTY))("disabled","View"==r.mode),e.xp6(3),e.MGl("id","UNIT",t,""),e.Q6J("ngModel",i.UNIT)("disabled","View"==r.mode),e.xp6(2),e.MGl("id","UNIT",t,""),e.Q6J("ngModel",i.METER_MAX)("disabled","View"==r.mode)}}const P=[{path:"",component:(()=>{class o{constructor(i,t,r,a,s,d){this.masterService=i,this.alertService=t,this.loadingService=r,this.MasterRepo=a,this._trnMainService=s,this.router=d,this.mode="Add",this.meterReadingObj={},this.ISNOTUPDATABLE=!1,this.gridMeterEntryPopupSettings=new p.im,this.activerowIndex=0}refreshPage(){location.reload()}ngOnInit(){this.reset(),this.getAllPumpDetails(),this.firstMeterEndInput&&this.firstMeterEndInput.nativeElement&&this.firstMeterEndInput.nativeElement.focus()}getAllPumpDetails(){this.masterService.getPumpDetails().subscribe(i=>{if("ok"==i.status){i.result.forEach(m=>{if(0===m.STATUS)return;let M={};M.METER_START=m.METER_END_VALUE>0?m.METER_END_VALUE:m.OPENING_METER?m.OPENING_METER:0,M.PRODUCT_CODE=m.MCODE,M.PRODUCT=m.PRODUCT_NAME,M.UNIT=m.PRODUCT_UNIT,M.METER_MAX=m.METER_MAX_VALUE?m.METER_MAX_VALUE:0,M.PUMP=m.PUMP_NAME,M.PUMP_ID=m.PUMP_ID,M.SALES_QTY=0,M.METER_END=0,this.meterReadingObj.MeterRowDetailList.push(M)});const t=new Date(i.result2),r=t.getFullYear(),a=t.getMonth()+1,s=t.getDate();this.minDate=`${r}-${a<10?"0"+a:a}-${s<10?"0"+s:s}`;const d=new Date,_=d.getFullYear(),E=d.getMonth()+1,w=d.getDate();this.maxDate=`${_}-${E<10?"0"+E:E}-${w<10?"0"+w:w}`,this.calculateTotal()}},i=>{this.alertService.info(i.error.message)})}onDateChange(){const i=new Date(this.meterReadingObj.READING_DATE),t=new Date(this.minDate),r=new Date(this.maxDate);(i<t||i>r)&&(this.meterReadingObj.READING_DATE=i<t?this.minDate:this.maxDate)}DisplayGenericListOfEntry(){this.gridMeterEntryPopupSettings=Object.assign(new p.im,{title:"METER READING LIST",apiEndpoints:"/getMeterReadingPagedList",defaultFilterIndex:1,columns:[{key:"ENTRY_DATE",title:"Entry Date",hidden:!1,noSearch:!1,format:"shortDate"},{key:"ENTRY_NO",title:"Entry Number",hidden:!1,noSearch:!1}]}),this.genericGridForProduct.show()}dblClickPopupMeterItem(i,t){let r=i.ENTRY_NO;this.mode=t,this.loadingService.show("Data Loading..."),this.masterService.getMeterReadingDetails(r).subscribe(a=>{"ok"==a.status&&(this.meterReadingObj.MeterRowDetailList=[],a.result.forEach(s=>{let d={};d.PRODUCT=s.Product,d.PUMP=s.Pump,d.PUMP_ID=s.PumpID,d.METER_END=s.MeterStart,d.METER_START=s.MeterStart<s.SalesQty?s.METER_MAX_VALUE-s.SalesQty+s.MeterStart:s.MeterStart-s.SalesQty,d.SALES_QTY=s.SalesQty?s.SalesQty:0,d.UNIT=s.Unit,d.METER_MAX=s.METER_MAX_VALUE?s.METER_MAX_VALUE:0,this.meterReadingObj.MeterRowDetailList.push(d)}),a.result.length>0&&(this.ISNOTUPDATABLE=1==a.result[0].ISNOTUPDATABLE,this._trnMainService.TrnMainObj.VCHRNO=a.result[0].ENTRY_NO,this.meterReadingObj.READING_DATE=a.result[0].Date.substring(0,10),this.ISNOTUPDATABLE&&"Edit"==this.mode&&(this.alertService.info("Only the latest Meter Reading Entry is Editable."),this.mode="View"),this.minDate=new Date(a.result[0].Date).toJSON().split("T")[0],this.calculateTotal()),this.loadingService.hide())},a=>{this.loadingService.hide(),this.alertService.warning(a._body)})}reset(){this.meterReadingObj.READING_DATE=(new Date).toJSON().split("T")[0],this._trnMainService.TrnMainObj.MWAREHOUSE=this.masterService.userProfile.userWarehouse,this._trnMainService.TrnMainObj.DIVISION=this.masterService.userProfile.userDivision,this._trnMainService.TrnMainObj.PhiscalID=this.masterService.userProfile.PhiscalYearInfo.PhiscalID,this._trnMainService.TrnMainObj.VoucherPrefix="MR",this._trnMainService.getVoucherNumber(),this.meterReadingObj.MeterRowDetailList=[],this.meterReadingObj.TOTAL_PUMP=0,this.meterReadingObj.TOTAL_SALES_QTY=0,this.maxDate=(new Date).toJSON().split("T")[0]}calulateSalesQuantity(i){const t=this.meterReadingObj.MeterRowDetailList[i].METER_START,r=this.meterReadingObj.MeterRowDetailList[i].METER_END;this.meterReadingObj.MeterRowDetailList[i].SALES_QTY=r<t?this.meterReadingObj.MeterRowDetailList[i].METER_MAX-t+r:r>t&&r?r-t:0,this.calculateTotal()}calculateTotal(){this.meterReadingObj.TOTAL_SALES_QTY=this.meterReadingObj.MeterRowDetailList.reduce((i,t)=>i+t.SALES_QTY,0),this.meterReadingObj.TOTAL_PUMP=this.meterReadingObj.MeterRowDetailList.length}saveMeterReading(){if(this.ISNOTUPDATABLE)return void this.alertService.info("Only the latest Meter Reading Entry is Editable.");if(this.meterReadingObj.MeterRowDetailList.some(t=>null==t.METER_END||0==t.METER_END||t.METER_END<0)){const t=this.meterReadingObj.MeterRowDetailList.find(r=>null==r.METER_END||0==r.METER_END||r.METER_END<0);return void this.alertService.info("Meter End Can't be Zero or Negative for "+t.PUMP+".")}if(this.meterReadingObj.MeterRowDetailList.some(t=>t.METER_END>t.METER_MAX)){const t=this.meterReadingObj.MeterRowDetailList.find(r=>r.METER_END>r.METER_MAX);return void this.alertService.info("Meter End/Close Value ("+t.METER_END+") must be less than Meter Max value ("+t.METER_MAX+") for "+t.PUMP+".")}let i=[];this.meterReadingObj.MeterRowDetailList.forEach(t=>{let r={};r.ENTRY_DATE=this.meterReadingObj.READING_DATE,r.PRODUCT=t.PRODUCT_CODE,r.PUMP=t.PUMP_ID,r.READING_VALUE=t.METER_END>0?t.METER_END:t.METER_START,r.SALES_QTY=t.SALES_QTY,r.METER_MAX_VALUE=t.METER_MAX,r.ENTRY_NO=this._trnMainService.TrnMainObj.VCHRNO,i.push(r)}),this.loadingService.show("Data Saving..."),"Edit"==this.mode?this.masterService.updateMeterReadingDetails(i).subscribe(t=>{"ok"==t.status&&(this.alertService.success(t.message),this.loadingService.hide(),this.reset(),this.getAllPumpDetails())},t=>{this.alertService.info(t.error.message),this.loadingService.hide()}):this.masterService.saveMeterReadingDetails(i).subscribe(t=>{"ok"==t.status&&(this.alertService.success(t.message),this.loadingService.hide(),this.reset())},t=>{this.alertService.info(t.error.message),this.loadingService.hide()})}focusNextMeterEnd(i,t){t.preventDefault();const a=this.meterReadingObj.MeterRowDetailList[i].METER_END,s=this.meterReadingObj.MeterRowDetailList[i].METER_MAX;if(this.meterReadingObj.MeterRowDetailList[i].METER_START>a&&null!=a&&0!=a&&a>0&&!window.confirm("Meter End Value is Less than Meter Start Value. Do You Want To Proceed or Not ?"))return this.meterReadingObj.MeterRowDetailList[i].METER_END=null,void(this.meterReadingObj.MeterRowDetailList[i].SALES_QTY=null);if(null==a||0==a||a<=0)return this.alertService.warning("Meter End Can't be Zero or Negative."),this.meterReadingObj.MeterRowDetailList[i].METER_END=0,void(this.meterReadingObj.MeterRowDetailList[i].SALES_QTY=0);if(a>s)return this.alertService.warning("Meter End/Close Value must be less than Meter Max value."),this.meterReadingObj.MeterRowDetailList[i].METER_END=0,void(this.meterReadingObj.MeterRowDetailList[i].SALES_QTY=0);const _=document.getElementById(`METER_END${i+1}`);if(_)_.focus();else{const E=document.getElementById("saveButton");E&&E.focus()}}formatDate(){const i=new Date(this.meterReadingObj.READING_DATE),t=i.getFullYear(),r=(i.getMonth()+1).toString().padStart(2,"0"),a=i.getDate().toString().padStart(2,"0");this.meterReadingObj.READING_DATE=`${r}/${a}/${t}`}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(v.P),e.Y36(b.c),e.Y36(A.V),e.Y36(v.P),e.Y36(S.p),e.Y36(h.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-meter-reading"]],viewQuery:function(i,t){if(1&i&&(e.Gf(O,5),e.Gf(N,5)),2&i){let r;e.iGM(r=e.CRH())&&(t.genericGridForProduct=r.first),e.iGM(r=e.CRH())&&(t.firstMeterEndInput=r.first)}},decls:69,vars:12,consts:[[1,"heading"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"btn","btn-info","pull-right","header-buttons",3,"click"],["ButtonType",""],["viewButton",""],["id","saveButton",1,"btn","btn-info","pull-right","header-buttons",3,"disabled","click"],[1,"col-md-8","inner-row"],[1,"main-wrap"],[1,"bom-body"],[1,"card","mt-2"],[1,"card-body"],[1,"inner-body"],[1,"form-group","row"],[1,"col-sm-4"],[1,"col-sm-5","form-control-label","reading-label"],["type","date","autocomplete","off",1,"col-md-6",3,"ngModel","disabled","min","max","ngModelChange","change","blur"],["for","type",1,"col-sm-5","form-control-label","entry-label"],["type","text","autocomplete","off","readonly","",1,"form-control","col-md-6","entry-input",3,"ngModel","ngModelChange"],[1,"table-wrap"],[1,"table","table-striped"],[1,"five"],[1,"ten"],[4,"ngFor","ngForOf"],[1,"row","total-row"],[1,"total-css"],[3,"popupsettings","onItemDoubleClick"],["genericGridMeterEntry",""],[3,"id"],["type","text","readonly","",1,"input-width",3,"id","ngModel","disabled","ngModelChange"],["type","text","autocomplete","off","readonly","",1,"CellWithComment",3,"id","ngModel","disabled","ngModelChange"],["type","text","autocomplete","off","readonly","",1,"CellWithComment",3,"id","value","disabled"],["type","number","autocomplete","off","autofocus","",1,"input-width",3,"id","ngModel","min","disabled","ngModelChange","keydown.enter","keydown.Tab"],["type","number","readonly","",1,"input-width",3,"id","value","disabled"],["type","text","readonly","",1,"CellWithComment",3,"id","ngModel","disabled","ngModelChange"]],template:function(i,t){if(1&i){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h5"),e._uU(5,"Meter Reading"),e.qZA()()(),e.TgZ(6,"div",3)(7,"button",4),e.NdJ("click",function(){return t.refreshPage()}),e._uU(8,"Back"),e.qZA(),e.TgZ(9,"button",4,5),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(10);return t.DisplayGenericListOfEntry(),e.KtG(s.value="Edit")}),e._uU(11,"Edit"),e.qZA(),e.TgZ(12,"button",4,6),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(10);return t.DisplayGenericListOfEntry(),e.KtG(s.value="View")}),e._uU(14,"View"),e.qZA(),e.TgZ(15,"button",7),e.NdJ("click",function(){return t.saveMeterReading()}),e._uU(16,"Save"),e.qZA()()()(),e.TgZ(17,"div",1)(18,"div",8)(19,"div",9)(20,"div")(21,"div",10)(22,"div",11)(23,"div",12)(24,"div",13),e.ynx(25),e.TgZ(26,"div",14)(27,"div",15)(28,"div",1)(29,"label",16),e._uU(30,"Reading Date :"),e.qZA(),e.TgZ(31,"input",17),e.NdJ("ngModelChange",function(s){return t.meterReadingObj.READING_DATE=s})("change",function(){return t.onDateChange()})("blur",function(){return t.formatDate()}),e.qZA()()(),e.TgZ(32,"div",15)(33,"div",1)(34,"label",18),e._uU(35,"Entry No :"),e.qZA(),e.TgZ(36,"input",19),e.NdJ("ngModelChange",function(s){return t._trnMainService.TrnMainObj.VCHRNO=s}),e.qZA()()()(),e.BQk(),e.qZA()()()()(),e.TgZ(37,"div",20)(38,"table",21)(39,"thead")(40,"tr")(41,"th",22),e._uU(42,"S.No."),e.qZA(),e.TgZ(43,"th",23),e._uU(44,"Pump"),e.qZA(),e.TgZ(45,"th",23),e._uU(46,"Product"),e.qZA(),e.TgZ(47,"th",23),e._uU(48,"Meter Start"),e.qZA(),e.TgZ(49,"th",23),e._uU(50,"Meter End"),e.qZA(),e.TgZ(51,"th",23),e._uU(52,"Sales Qty"),e.qZA(),e.TgZ(53,"th",23),e._uU(54,"Unit"),e.qZA(),e.TgZ(55,"th",23),e._uU(56,"Meter Max"),e.qZA()()(),e.TgZ(57,"tbody"),e.YNc(58,y,19,28,"tr",24),e.qZA()()(),e.TgZ(59,"div",25)(60,"div",26)(61,"h6"),e._uU(62),e.qZA()(),e.TgZ(63,"div",26)(64,"h6"),e._uU(65),e.ALo(66,"twoDigitNumber"),e.qZA()()()()()(),e.TgZ(67,"generic-popup-grid",27,28),e.NdJ("onItemDoubleClick",function(s){e.CHM(r);const d=e.MAs(10);return e.KtG(t.dblClickPopupMeterItem(s,d.value))}),e.qZA()}2&i&&(e.xp6(15),e.Q6J("disabled","View"==t.mode),e.xp6(16),e.Q6J("ngModel",t.meterReadingObj.READING_DATE)("disabled","View"==t.mode||"Edit"==t.mode)("min",t.minDate)("max",t.maxDate),e.xp6(5),e.Q6J("ngModel",t._trnMainService.TrnMainObj.VCHRNO),e.xp6(22),e.Q6J("ngForOf",t.meterReadingObj.MeterRowDetailList),e.xp6(4),e.hij("TOTAL PUMP: ",t.meterReadingObj.TOTAL_PUMP,""),e.xp6(3),e.hij("TOTAL SALES QTY: ",e.lcZ(66,10,t.meterReadingObj.TOTAL_SALES_QTY),""),e.xp6(2),e.Q6J("popupsettings",t.gridMeterEntryPopupSettings))},dependencies:[R.sg,f.Fj,f.wV,f.JJ,f.qQ,f.On,p.Zl,C.g],styles:[".form-control[_ngcontent-%COMP%]{color:#000}.closeTooltip[_ngcontent-%COMP%]{display:inline-block;transition:.3s ease;border:none}.card-body[_ngcontent-%COMP%]{padding:0!important}.form-group.row[_ngcontent-%COMP%]{margin-bottom:5px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{height:26px;font-size:14px;padding-top:0;padding-bottom:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.2rem;vertical-align:top;border-top:1px solid #dee2e6;font-size:14px}th[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1;background-color:#6599ff;color:#fff}th[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dee2e6}.highlighted[_ngcontent-%COMP%]{background-color:#ced6d3}.footer[_ngcontent-%COMP%]{margin-right:1px;margin-bottom:2.8%;clear:both;padding-top:20px;border-top:1px solid #eaeaea;border-left:1px solid #eaeaea;border-right:1px solid #eaeaea;background-color:#eaeaea}.headerbuttons[_ngcontent-%COMP%]{font-size:12px}.input-width[_ngcontent-%COMP%]{width:100%}.card-body[_ngcontent-%COMP%]{background-color:#336799;color:#fff}.inner-body[_ngcontent-%COMP%]{margin-top:10px}.inner-row[_ngcontent-%COMP%]{margin-left:20%}.reading-label[_ngcontent-%COMP%]{font-size:13px;width:auto}.entry-label[_ngcontent-%COMP%]{font-size:13px}.total-row[_ngcontent-%COMP%]{justify-content:flex-end;.table-wrap{overflow: auto; height: 70vh;} .total-css{width: 23.25%;}}.entry-input[_ngcontent-%COMP%]{width:70%}.table-width[_ngcontent-%COMP%]{width:100%;.five{width: 5%;} .ten{width: 10%;}}"]}),o})(),canActivate:[n.C]}];let L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(P),h.Bz]}),o})();var D=c(12640),g=c(9219);let u=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[n.C,{provide:D.op,useValue:D.op}],imports:[R.ez,L,g.Is]}),o})()}}]);