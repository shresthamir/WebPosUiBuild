"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[7180],{82738:(y,b,l)=>{l.d(b,{b:()=>C});var _=l(1298),T=l(68567),P=l(87584),g=l(76750),O=l(53074),m=l(26320);let C=(()=>{class f{static forRoot(){return{ngModule:f,providers:[O.P,P.p]}}}return f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=m.oAB({type:f}),f.\u0275inj=m.cJS({imports:[_.ez,g.zk.forRoot(),T.JX]}),f})()},77879:(y,b,l)=>{l.d(b,{H:()=>P});var _=l(26320),T=l(53074);let P=(()=>{class g{constructor(m){this.masterRepo=m}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return g.\u0275fac=function(m){return new(m||g)(_.Y36(T.P))},g.\u0275dir=_.lG2({type:g,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),g})()},87180:(y,b,l)=>{l.r(b),l.d(b,{PrintModule:()=>ce});var _=l(1298),T=l(68567),P=l(44841),g=l(76750),O=l(70489),m=l(70477),C=l(28698),f=l(92340),E=l(23732),e=l(26320),S=l(53074),A=l(67311),B=l(14970),x=l(59866),M=l(67297),u=l(81152),N=l(77879);const v=["genericGrid"],D=["genericGridForPIVoucher"],w=["genericGridForTRVoucher"];function Z(r,a){if(1&r&&(e.TgZ(0,"option",47),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.Q6J("ngValue",t.value),e.xp6(1),e.hij(" ",t.name," ")}}const I=function(){return{standalone:!0}};function R(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",14)(1,"label",48),e._uU(2,"Assign Product Master Rate"),e.qZA(),e.TgZ(3,"input",49),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.ASSIGNMENURATE=o)})("change",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.ASSIGNMENURATE=o.target.checked?1:0)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.ASSIGNMENURATE)("ngModelOptions",e.DdM(2,I))}}function j(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",1)(1,"label",56),e._uU(2,"Expiry Date:"),e.qZA(),e.TgZ(3,"div",57)(4,"input",58),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw(2);return e.KtG(n.formObj.EXPDATE=o)})("keydown",function(o){return o.preventDefault()}),e.qZA()()()}if(2&r){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.formObj.EXPDATE)("disabled",!0)}}function k(r,a){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",12)(2,"label",13),e._uU(3,"Item:"),e.qZA(),e.TgZ(4,"div",14)(5,"input",50),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.Code=o)})("keydown",function(o){return o.preventDefault()})("keydown.Enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.itemKeyEvent())}),e.qZA()(),e.TgZ(6,"div",51)(7,"input",52),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.ItemName=o)})("keydown",function(o){return o.preventDefault()})("keydown.Enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.itemKeyEvent())}),e.qZA()()(),e.TgZ(8,"div",12)(9,"label",13),e._uU(10,"Short Name:"),e.qZA(),e.TgZ(11,"div",14)(12,"input",53),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.ShortName=o)}),e.qZA()()(),e.TgZ(13,"div",12)(14,"label",13),e._uU(15,"Barcode :"),e.qZA(),e.TgZ(16,"div",14)(17,"input",54),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.Barcode=o)})("keydown.Enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onShowBarCode())})("keypress",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.keyPress(o))}),e.qZA()(),e.YNc(18,j,5,2,"div",55),e.qZA(),e.BQk()}if(2&r){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.formObj.Code),e.xp6(2),e.Q6J("ngModel",t.formObj.ItemName),e.xp6(5),e.Q6J("ngModel",t.formObj.ShortName)("readOnly",!0),e.xp6(5),e.Q6J("ngModel",t.formObj.Barcode),e.xp6(1),e.Q6J("ngIf","btWise"==t.barcodeType||"itemWise"==t.barcodeType)}}function V(r,a){1&r&&(e.TgZ(0,"label",13),e._uU(1,"Purchase Bill No:"),e.qZA())}function U(r,a){1&r&&(e.TgZ(0,"label",13),e._uU(1,"Production No:"),e.qZA())}function L(r,a){1&r&&(e.TgZ(0,"label",13),e._uU(1,"Repack No:"),e.qZA())}function W(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",12),e.YNc(1,V,2,0,"label",59),e.YNc(2,U,2,0,"label",59),e.YNc(3,L,2,0,"label",59),e.TgZ(4,"div",14)(5,"input",60),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.VCHRNO=o)})("keydown",function(o){return o.preventDefault()})("keydown.Enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.PIVoucherEnterClicked())}),e.qZA()(),e.TgZ(6,"div",51)(7,"input",61),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.VOUCHERLIST=o)}),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","piWise"==t.barcodeType),e.xp6(1),e.Q6J("ngIf","pdWise"==t.barcodeType),e.xp6(1),e.Q6J("ngIf","rpWise"==t.barcodeType),e.xp6(2),e.Q6J("ngModel",t.formObj.VCHRNO),e.xp6(2),e.Q6J("ngModel",t.VOUCHERLIST)}}function H(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",12)(1,"label",13),e._uU(2,"Barcode :"),e.qZA(),e.TgZ(3,"div",14)(4,"input",62),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.Barcode=o)}),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.formObj.Barcode)}}function Q(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",12)(1,"label",13),e._uU(2,"TransferIn BillNo:"),e.qZA(),e.TgZ(3,"div",14)(4,"input",60),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.formObj.VCHRNO=o)})("keydown",function(o){return o.preventDefault()})("keydown.Enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.TRVoucherEnterClicked())}),e.qZA()(),e.TgZ(5,"div",51)(6,"input",61),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.VOUCHERLIST=o)}),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.formObj.VCHRNO),e.xp6(2),e.Q6J("ngModel",t.VOUCHERLIST)}}function J(r,a){1&r&&(e.TgZ(0,"th",36),e._uU(1," Batch"),e.qZA())}function F(r,a){1&r&&(e.TgZ(0,"th",36),e._uU(1," Exp Date"),e.qZA())}function G(r,a){if(1&r&&(e.TgZ(0,"td",66),e._uU(1),e.qZA()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.Batch," ")}}function q(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"td",66)(1,"input",72),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw().$implicit;return e.KtG(n.EXPDATE=o)}),e.qZA()()}if(2&r){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.EXPDATE)("disabled",1!=t.REQEXPDATE)("ngModelOptions",e.DdM(3,I))}}function Y(r,a){if(1&r&&(e.TgZ(0,"td",70),e._uU(1),e.qZA()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.Quantity)}}function K(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"td",70)(1,"input",73),e.NdJ("ngModelChange",function(o){e.CHM(t);const n=e.oxw().$implicit;return e.KtG(n.Quantity=o)}),e.qZA()()}if(2&r){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.Quantity)("ngModelOptions",e.DdM(2,I))}}function z(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td",63),e._uU(2),e.qZA(),e.TgZ(3,"td",64),e._uU(4),e.ynx(5),e._UZ(6,"br")(7,"span",65),e.BQk(),e.qZA(),e.TgZ(8,"td",66),e._uU(9),e.qZA(),e.YNc(10,G,2,1,"td",67),e.YNc(11,q,2,4,"td",67),e.TgZ(12,"td",68),e._uU(13),e.qZA(),e.YNc(14,Y,2,1,"td",69),e.YNc(15,K,2,3,"td",69),e.TgZ(16,"td",70)(17,"input",71),e.NdJ("ngModelChange",function(o){const s=e.CHM(t).$implicit;return e.KtG(s.ISACTIVE=o)})("change",function(o){const s=e.CHM(t).$implicit;return e.KtG(s.ISACTIVE=o.target.checked?1:0)}),e.qZA()()()}if(2&r){const t=a.$implicit,i=e.oxw();e.xp6(2),e.Oqu(t.Code),e.xp6(2),e.hij("",t.ItemName," "),e.xp6(3),e.Q6J("innerHtml",t.bcodeDESCA,e.oJD),e.xp6(2),e.hij("",t.Barcode," "),e.xp6(1),e.Q6J("ngIf","btWise"==i.barcodeType||"itemWise"==i.barcodeType||"piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(1),e.Q6J("ngIf","btWise"==i.barcodeType||"itemWise"==i.barcodeType||"piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(2),e.Oqu(t.Price),e.xp6(1),e.Q6J("ngIf","piWise"!=i.barcodeType&&"pdWise"!=i.barcodeType&&"rpWise"!=i.barcodeType),e.xp6(1),e.Q6J("ngIf","piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(2),e.Q6J("ngModel",t.ISACTIVE)}}function X(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"tr",86),e.NdJ("click",function(){const n=e.CHM(t).index,s=e.oxw(2);return e.KtG(s.RowClickEvent(n))})("dblclick",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.dblClickBarcode(n))}),e.TgZ(1,"td",83),e._uU(2),e.qZA(),e.TgZ(3,"td",87),e._uU(4),e.qZA(),e.TgZ(5,"td",88),e._UZ(6,"span",89),e.qZA()()}if(2&r){const t=a.$implicit,i=a.index,o=e.oxw(2);e.ekj("highlighted",i===o.barcodeSelectIndex),e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.BCODE),e.xp6(2),e.Q6J("innerHTML",t.bcodeDESCA,e.oJD)}}function $(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",74)(1,"div",75)(2,"div",76)(3,"h4",77),e._uU(4,"Barcode Selection"),e.qZA(),e.TgZ(5,"button",78),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.hidePopup())}),e.TgZ(6,"span",79),e._uU(7,"\xd7"),e.qZA()()(),e.TgZ(8,"div",80)(9,"table",81)(10,"thead",82)(11,"tr")(12,"th",83),e._uU(13,"S.No"),e.qZA(),e.TgZ(14,"th",84),e._uU(15,"Barcode"),e.qZA(),e.TgZ(16,"th",84),e._uU(17,"Description"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,X,7,5,"tr",85),e.qZA()()()()()}if(2&r){const t=e.oxw();e.xp6(19),e.Q6J("ngForOf",t.barcodeList)}}function ee(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"tr",93),e.NdJ("dblclick",function(){const n=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.dblClickBatch(n))}),e.TgZ(1,"td",83),e._uU(2),e.qZA(),e.TgZ(3,"td",87),e._uU(4),e.qZA(),e.TgZ(5,"td",94),e._uU(6),e.qZA()()}if(2&r){const t=a.$implicit,i=a.index,o=e.oxw(2);e.ekj("highlighted",i===o.batchSelectIndex),e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.BATCHCODE),e.xp6(2),e.Oqu(t.MRP)}}function te(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",90)(1,"div",75)(2,"div",76)(3,"h4",77),e._uU(4,"Batch Selection "),e.qZA(),e.TgZ(5,"button",78),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.hidePopupBatch())}),e.TgZ(6,"span",79),e._uU(7,"\xd7"),e.qZA()()(),e.TgZ(8,"div",80)(9,"table",81)(10,"thead",91)(11,"tr")(12,"th",83),e._uU(13,"S.No"),e.qZA(),e.TgZ(14,"th",84),e._uU(15,"Batch"),e.qZA(),e.TgZ(16,"th",84),e._uU(17,"MRP"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,ee,7,5,"tr",92),e.qZA()()()()()}if(2&r){const t=e.oxw();e.xp6(19),e.Q6J("ngForOf",t.batchList)}}const oe=[{path:"",component:(()=>{class r{constructor(t,i,o,n,s,p){this.masterService=t,this.alertService=i,this.loadService=o,this.printService=n,this.authservice=s,this.router=p,this.showBarcode=!1,this.showBatches=!1,this.ASSIGNMENURATE=0,this.activerowIndex=0,this.gridPopupSettings=new C.im,this.gridPopupSettingsForPIVoucher=new C.im,this.gridPopupSettingsForTRVoucher=new C.im,this.barcodeTypeStaticArr=[{name:"Item Wise",value:"itemWise"},{name:"Purchase Bill Wise",value:"piWise"},{name:"Barcode Wise",value:"bcWise"},{name:"TransferIn Wise",value:"trWise"},{name:"Batch Wise",value:"btWise"},{name:"Production Entry Wise",value:"pdWise"},{name:"Repack Entry Wise",value:"rpWise"}],this.formObj={},this.barcodeList=[],this.barcodeSelectIndex=0,this.batchSelectIndex=0,this.bcDetails={},this.multiplePIVoucher=[],this.VchrsItemDetailsList=[],this.multipleTRVoucher=[],this.clickCount=0,this.clickTimeout=null,this.batchList=[],this.voucherBillTitle="",this.getConnectionId=()=>{this.connection.invoke("getconnectionid").then(h=>{console.log(h),this.connectionId=h})},this.barCodeArr=[],this.p=0,this.userProfile=s.getUserProfile(),this.userSetting=this.authservice.getSetting(),this.AppMode=f.N.appMode,"lite"==this.AppMode&&this.barcodeTypeStaticArr.splice(2)}updown(t){"ArrowDown"===t.code?(1==this.showBarcode&&(t.preventDefault(),this.barcodeSelectIndex=this.barcodeSelectIndex+1,this.barcodeSelectIndex>this.barcodeList.length-1&&(this.barcodeSelectIndex=this.barcodeList.length-1)),1==this.showBatches&&(t.preventDefault(),this.batchSelectIndex=this.batchSelectIndex+1,this.batchSelectIndex>this.batchList.length-1&&(this.batchSelectIndex=this.batchList.length-1))):"ArrowUp"===t.code&&(1==this.showBarcode&&(t.preventDefault(),this.barcodeSelectIndex=this.barcodeSelectIndex-1,this.barcodeSelectIndex<0&&(this.barcodeSelectIndex=0)),1==this.showBatches&&(t.preventDefault(),this.batchSelectIndex=this.batchSelectIndex-1,this.batchSelectIndex<0&&(this.batchSelectIndex=0))),"Enter"===t.code||"NumpadEnter"==t.code?(t.preventDefault(),this.showBarcode&&null!=this.barcodeSelectIndex&&null!=this.barcodeList[this.barcodeSelectIndex]&&this.dblClickBarcode(this.barcodeList[this.barcodeSelectIndex]),this.showBatches&&null!=this.batchSelectIndex&&null!=this.batchList[this.batchSelectIndex]&&this.dblClickBatch(this.batchList[this.batchSelectIndex])):"Escape"===t.code&&(t.preventDefault(),this.showBarcode&&this.hidePopup(),this.showBatches&&this.hidePopupBatch())}checkUserightsForRateChange(){if("piWise"==this.barcodeType)return!0;let t=this.masterService.userProfile.userRights.find(i=>"AllowRateChangeInBarcodePrinting"==i.right);return t&&(this.allowRateChange=t.value),1!=this.allowRateChange}ngOnInit(){this.createConnection1(),this.initialiseDefaults()}initialiseDefaults(){this.barcodeType="itemWise"}createConnection(){var t=new URL("/printserver","http://localhost:1881");t.protocol=t.protocol.replace("http","ws"),this.connection=(new E.su).withUrl("http://127.0.0.1:1881/printserver",{transport:E.n4.WebSockets}).withAutomaticReconnect().build(),this.connection.start().then(function(){}).then(()=>console.log("connection started")).catch(function(i){return console.log(i.toString())})}printBarcodeV2(){let t=this.barCodeArr.filter(s=>1==s.ISACTIVE);var i;(i=new WebSocket("ws://127.0.0.1:1881/printserver")).addEventListener("message",function n(s){},!1),i.addEventListener("PrintBarcode",function o(s){i.onopen=()=>i.send(s)}(JSON.stringify(t)),!1)}createConnection1(){try{this.connection=(new E.su).withUrl("http://localhost:1881/printserver",{transport:E.n4.WebSockets,skipNegotiation:!0}).build(),this.connection.start().then(function(){}).then(()=>console.log("connection started")).catch(function(t){return console.log(t.toString())})}catch(t){return console.log(t.toString())}}printBarcode(){if(0!=this.barCodeArr.length){console.log("printBarcode",this.barCodeArr);try{let i=this.barCodeArr.filter(o=>1==o.ISACTIVE).map(o=>({...o,ItemName:o.ItemName.replace(/["/]/g,"")}));this.connection.invoke("PrintBarcode",JSON.stringify(i))}catch(t){return console.error(t.toString())}}else alert("Please select item first")}addToTable(t){this.clickCount++,this.clickTimeout?this.clickCount>=2&&console.log("multiple click detected"):this.setClickTimeOut(this.singleClickAdd())}setClickTimeOut(t){clearInterval(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.clickTimeout=null,this.clickCount=0},1500)}singleClickAdd(){if(console.log("single click"),"piWise"==this.barcodeType||"pdWise"==this.barcodeType||"rpWise"==this.barcodeType){if(""===this.formObj.VCHRNO||null==this.formObj.VCHRNO)return void this.alertService.info("Please Select Voucher no");this.loadVoucherData_BCode_PiWise(this.formObj.VCHRNO,this.formObj.DIVISION,this.formObj.PHISCALID)}else if("bcWise"==this.barcodeType){if(""===this.formObj.Barcode||null==this.formObj.Barcode)return void this.alertService.info("Please Entry Barcode");if(null==this.formObj.Quantity||0==this.formObj.Quantity)return void this.alertService.info("Please Enter the Print Qunatity");this.loadData_barcodewise(this.formObj.Barcode,0,this.userProfile.userWarehouse,"TI")}else if("trWise"==this.barcodeType){if(""===this.formObj.VCHRNO||null==this.formObj.VCHRNO)return void this.alertService.info("Please Select Voucher no");this.loadVoucherData_BCode_transferInWise(this.formObj.VCHRNO,this.formObj.DIVISION,this.formObj.PHISCALID)}else{if(null==this.formObj.Code||null==this.formObj.Code||""==this.formObj.Code)return void alert("please select the item first to add");if("itemWise"==this.barcodeType){if(""===this.formObj.Barcode||null==this.formObj.Barcode)return void this.alertService.info("Please Entry Barcode");if(null==this.formObj.Quantity||0==this.formObj.Quantity)return void this.alertService.info("Please Enter the Print Quantity")}this.LoadToTable()}}LoadToTable(){let i={Barcode:this.formObj.Barcode,ItemName:this.formObj.ShortName?this.formObj.ShortName:this.formObj.ItemName,ShortName:this.formObj.ShortName,Price:this.formObj.Price,Quantity:this.formObj.Quantity,Print:2,Code:this.formObj.Code,Mcode:this.formObj.Mcode,bcodeDESCA:this.formObj.bcodeDESCA,ItemCode:this.formObj.Code,VCHRNO:this.formObj.VCHRNO,DIVISION:this.formObj.DIVISION,PHISCALID:this.formObj.PHISCALID,ISACTIVE:1,Batch:this.formObj.Batch,EXPDATE:this.formObj.EXPDATE,MFGDATE:this.formObj.MFGDATE,REQEXPDATE:this.formObj.REQEXPDATE};var o;if(o=null!=this.bcDetails?Object.assign(i,this.bcDetails):i,this.barCodeArr.length>0){let n=this.barCodeArr.filter(s=>s.Code==i.Code)[0];n&&null!==n&&null!==n.Code&&void 0!==n?confirm("Duplicate item detected. Are you sure you want to continue?")&&this.barCodeArr.push(o):this.barCodeArr.push(o)}else this.barCodeArr.push(o);this.formObj={},this.bcDetails={}}itemKeyEvent(){this.gridPopupSettings={title:"Item list",apiEndpoints:"/getMenuitemPagedListForScheme/Item",defaultFilterIndex:1,columns:[{key:"MENUCODE",title:"MENU CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"NAME",hidden:!1,noSearch:!1},{key:"GroupName",title:"GROUP NAME",hidden:!1,noSearch:!1},{key:"DESCRIPTION",title:"SHORT NAME",hidden:!1,noSearch:!1},{key:"PARENT",title:"PARENT",hidden:!1,noSearch:!1}]},this.genericGrid.show()}dblClickPopupItem(t){this.formObj.Code=t.MENUCODE,this.formObj.Mcode=t.MCODE,this.formObj.ItemName=t.DESCA,this.formObj.ShortName=t.DESCRIPTION,this.formObj.Barcode="",this.masterService.focusAnyControl("bc")}focusToNext(t){this.masterService.focusAnyControl(t)}onReset(){confirm("Are you sure you want to reset ?")&&(this.formObj={},this.barCodeArr=[],this.VOUCHERLIST="",this.multiplePIVoucher=[],this.VchrsItemDetailsList=[],this.multipleTRVoucher=[],this.hidePopup(),this.hidePopupBatch())}onShowBatches(){null!=this.formObj.Code&&null!=this.formObj.Code&&""!=this.formObj.Code?setTimeout(()=>{document.getElementById("bt").blur()},500):this.alertService.warning("Please select item first")}onShowBarCode(){null!=this.formObj.Code&&null!=this.formObj.Code&&""!=this.formObj.Code?(setTimeout(()=>{document.getElementById("bc").blur()},500),this.printService.getItemWiseBarcodeList(this.formObj.Mcode).subscribe(t=>{"ok"==t.status?(this.barcodeList=t.result?t.result:[],this.barcodeList.length>0?(this.barcodeList.forEach(i=>{if(i.bcodeDESCA="",null!=i.barcodeDetails){var o=JSON.parse(i.barcodeDetails);for(var n in o)i.bcodeDESCA=i.bcodeDESCA+`<b>${n}</b> : ${o[n]} &nbsp;`}else i.bcodeDESCA=""}),console.log("final",this.barcodeList),this.showBarcode=!0):this.alertService.warning("Could not load barcode for this item")):(this.alertService.error("Could not load barcode for this item"),this.showBarcode=!1)},t=>{this.alertService.error(t),this.showBarcode=!1}),this.showBatches&&this.hidePopupBatch()):this.alertService.warning("Please select item first")}hidePopup(){this.showBarcode=!1}RowClickEvent(t){this.barcodeSelectIndex=t}dblClickBarcode(t){if(this.bcDetails=JSON.parse(t.barcodeDetails),this.formObj.Barcode=t.BCODE,this.formObj.bcodeDESCA=t.bcodeDESCA?t.bcodeDESCA:"","itemWise"==this.barcodeType)if(t.CONFACTOR>0){let i=t.CONFACTOR*t.ItemWiseRate;1==this.userSetting.EnableDiscountInAltUnit&&1==this.userSetting.EnableAltUnitDiscOnRate&&t.SRATE_DISCOUNT>0&&(i-=i*(t.SRATE_DISCOUNT/100)),this.formObj.Price=i}else this.formObj.Price=t.ItemWiseRate;("btWise"==this.barcodeType||"itemWise"==this.barcodeType)&&(this.formObj.EXPDATE=null!=t.EXPDATE?(0,_.p6)(t.EXPDATE?.substring(0,10),"yyyy-MM-dd","en-US"):"",this.formObj.Batch=t.BATCHNO,this.formObj.REQEXPDATE=t.REQEXPDATE),this.showBarcode=!1,0==this.allowRateChange&&this.masterService.focusAnyControl("qty"),1==this.userSetting.BATCHWISEPRICE&&this.printService.getItemWiseBatchLst(this.formObj.Mcode,this.userProfile.userWarehouse).subscribe(i=>{console.log("response here",i),"ok"==i.status&&(this.batchList=i.result?i.result:[],this.batchList.forEach(o=>o.CONFACTOR=t.CONFACTOR),console.log("BATCH LIST",this.batchList),"btWise"==this.barcodeType&&(this.showBatches=!0,this.masterService.RemoveFocusFromAnyControl("qty")))})}hidePopupBatch(){this.showBatches=!1}dblClickBatch(t){this.formObj.Price=t.CONFACTOR>0?t.CONFACTOR*t.MRP:t.MRP,console.log("MRP VALUE",t),this.hidePopupBatch(),0==this.allowRateChange&&this.masterService.focusAnyControl("qty")}PIVoucherEnterClicked(){let t="";t="pdWise"===this.barcodeType?"PD":"rpWise"===this.barcodeType?"RP":"PI",this.gridPopupSettingsForPIVoucher="PI"==t?this.SetPurchaseInvoiceGenericSetting():this.masterService.getGenericGridPopUpSettings(t),this.genericGridForPIVoucher.show()}SetPurchaseInvoiceGenericSetting(){return{apiEndpoints:"/getPurchaseListForBarcodePrint",defaultFilterIndex:0,columns:[{key:"VCHRNO",title:"VOUCHERNO",hidden:!1,noSearch:!1},{key:"TRNDATE",title:"DATE",hidden:!1,noSearch:!1},{key:"REFBILL",title:"Invoice No",hidden:!1,noSearch:!1},{key:"BILLTO",title:"Supplier",hidden:!1,noSearch:!1},{key:"NETAMNT",title:"AMOUNT",hidden:!1,noSearch:!1,alignment:"right",pipe:!0}]}}dblClickPopupVoucher(t){this.formObj.Price=0,this.formObj.Quantity=0;let i=this.multiplePIVoucher.filter(o=>o.VOUCHERNO==t.VCHRNO);if(i.length&&i.length>0)return this.alertService.error("Duplicate Voucher No Detected. Please select another."),void(this.formObj.VCHRNO="");this.formObj.VCHRNO=t.VCHRNO,this.formObj.DIVISION=t.DIVISION,this.formObj.PHISCALID=t.PhiscalID,this.masterService.focusAnyControl("price")}loadVoucherData(t,i,o){this.masterService.getPIForBarcodePrint(t,i,o).subscribe(n=>{if("ok"===n.status){let s=[];s=n.result;for(let c in s.ProdList){let d={};d.Code=s.ProdList[c].MENUCODE,d.ItemName=s.ProdList[c].ITEMDESC,d.Barcode=s.ProdList[c].BC,d.Price=this.formObj.Price||this.formObj.Price>0?this.formObj.Price:s.ProdList[c].MRP,d.Quantity=this.formObj.Quantity||this.formObj.Quantity>0?this.formObj.Quantity:s.ProdList[c].ALTERNATEQUANTIY,d.Print=2,d.Mcode=s.ProdList[c].MCODE,d.ItemCode=s.ProdList[c].MENUCODE,d.VCHRNO=t,d.DIVISION=i,d.PHISCALID=o,d.ISACTIVE=1,this.VchrsItemDetailsList.push(d)}this.barCodeArr=this.VchrsItemDetailsList,this.multiplePIVoucher.push({VOUCHERNO:t});let p=[],h="";0!=this.multiplePIVoucher.length?(this.multiplePIVoucher.forEach(c=>{p.push(c.VOUCHERNO)}),h+=`${p},`):h=this.formObj.VCHRNO,this.VOUCHERLIST=h,this.formObj.VCHRNO=""}},n=>{this.alertService.error(n)})}loadVoucherData_BCode_PiWise(t,i,o){this.loadService.show("Loading Please wait..."),this.masterService.loadVoucherData_BCode_piWise(t,i,o,"","","","",this.ASSIGNMENURATE).subscribe(n=>{if("ok"===n.status){let s=[];s=n.result;for(let c in s.ProdList){let d={};d.Code=s.ProdList[c].MENUCODE,d.ItemName=s.ProdList[c].ITEMDESC,d.Barcode=s.ProdList[c].BC?s.ProdList[c].BC:s.ProdList[c].MENUCODE,d.Price=this.masterService.nullToZeroConverter(this.formObj.Price)>0?this.formObj.Price:s.ProdList[c].MRP,d.Quantity=this.formObj.Quantity||this.formObj.Quantity>0?this.formObj.Quantity:s.ProdList[c].ALTERNATEQUANTIY,d.Print=2,d.Mcode=s.ProdList[c].MCODE,d.ItemCode=s.ProdList[c].MENUCODE,d.VCHRNO=t,d.DIVISION=i,d.PHISCALID=o,d.ISACTIVE=1,d.Batch=s.ProdList[c].BATCH,d.EXPDATE=s.ProdList[c].EXPDATE?s.ProdList[c].EXPDATE?.toString().substring(0,10):"",d.MFGDATE=s.ProdList[c].MFGDATE?s.ProdList[c].MFGDATE?.toString().substring(0,10):"",this.VchrsItemDetailsList.push(d)}this.barCodeArr=this.VchrsItemDetailsList,this.multiplePIVoucher.push({VOUCHERNO:t});let p=[],h="";0!=this.multiplePIVoucher.length?(this.multiplePIVoucher.forEach(c=>{p.push(c.VOUCHERNO)}),h+=`${p},`):h=this.formObj.VCHRNO,this.VOUCHERLIST=h,this.formObj.VCHRNO="",this.loadService.hide()}},n=>{this.alertService.error(n)})}keyPress(t){const o=String.fromCharCode(t.charCode);/[\b]/.test(o)||t.preventDefault()}loadData_barcodewise(t,i,o,n){this.masterService.loadData_barcodewise(t,i,o,n).subscribe(s=>{if("ok"===s.status){let p=[];p=s.result.data;for(let h in p){let c={};c.Code=p[h].MENUCODE,c.ItemName=p[h].DESCA,c.Barcode=p[h].BARCODE?p[h].BARCODE:p[h].MENUCODE,c.Price=this.formObj.Price||this.formObj.Price>0?this.formObj.Price:"bcWise"==this.barcodeType?p[h].In_Rate_A:p[h].MRP,c.Quantity=this.formObj.Quantity||this.formObj.Quantity>0?this.formObj.Quantity:1,c.Print=2,c.Mcode=p[h].MCODE,c.ItemCode=p[h].MENUCODE,c.ISACTIVE=1,this.VchrsItemDetailsList.push(c)}this.barCodeArr=this.VchrsItemDetailsList,this.formObj.Barcode="",this.formObj.Price=0,this.formObj.Quantity=0}else this.alertService.error(s.result.error)},s=>{this.alertService.error(s)})}TRVoucherEnterClicked(){this.gridPopupSettingsForTRVoucher=this.masterService.getGenericGridPopUpSettings("TR"),this.genericGridForTRVoucher.show()}dblClickPopupTRVoucher(t){this.formObj.Price=0,this.formObj.Quantity=0;let i=this.multipleTRVoucher.filter(o=>o.VOUCHERNO==t.VCHRNO);if(i.length&&i.length>0)return this.alertService.error("Duplicate Voucher No Detected. Please select another."),void(this.formObj.VCHRNO="");this.formObj.VCHRNO=t.VCHRNO,this.formObj.DIVISION=t.DIVISION,this.formObj.PHISCALID=t.PhiscalID,this.masterService.focusAnyControl("price")}loadVoucherData_BCode_transferInWise(t,i,o){this.loadService.show("Loading Please wait..."),this.masterService.loadVoucherData_BCode_transferInWise(t,i,o).subscribe(n=>{if("ok"===n.status){let s=[];s=n.result;for(let c in s.ProdList){let d={};d.Code=s.ProdList[c].MENUCODE,d.ItemName=s.ProdList[c].DESCRIPTION,d.Barcode=s.ProdList[c].BC?s.ProdList[c].BC:s.ProdList[c].MENUCODE,d.Price=this.formObj.Price||this.formObj.Price>0?this.formObj.Price:s.ProdList[c].MRP,d.Quantity=this.formObj.Quantity||this.formObj.Quantity>0?this.formObj.Quantity:s.ProdList[c].ALTERNATEQUANTIY,d.Print=2,d.Mcode=s.ProdList[c].MCODE,d.ItemCode=s.ProdList[c].MENUCODE,d.VCHRNO=t,d.DIVISION=i,d.PHISCALID=o,d.ISACTIVE=1,this.VchrsItemDetailsList.push(d)}this.barCodeArr=this.VchrsItemDetailsList,this.multipleTRVoucher.push({VOUCHERNO:t});let p=[],h="";0!=this.multipleTRVoucher.length?(this.multipleTRVoucher.forEach(c=>{p.push(c.VOUCHERNO)}),h+=`${p},`):h=this.formObj.VCHRNO,this.VOUCHERLIST=h,this.formObj.VCHRNO="",this.loadService.hide()}},n=>{this.alertService.error(n)})}printQtyClick(){this.hidePopup(),this.hidePopupBatch()}back(){this.router.navigate(["/pages/dashboard"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(S.P),e.Y36(A.c),e.Y36(B.V),e.Y36(x.n),e.Y36(M.e),e.Y36(m.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["barcode-printint"]],viewQuery:function(t,i){if(1&t&&(e.Gf(v,5),e.Gf(D,5),e.Gf(w,5)),2&t){let o;e.iGM(o=e.CRH())&&(i.genericGrid=o.first),e.iGM(o=e.CRH())&&(i.genericGridForPIVoucher=o.first),e.iGM(o=e.CRH())&&(i.genericGridForTRVoucher=o.first)}},hostBindings:function(t,i){1&t&&e.NdJ("keydown",function(n){return i.updown(n)},!1,e.evT)},decls:82,vars:20,consts:[[1,"heading"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"main-wrap"],[1,"barcode-body"],[1,"card","mt-2"],[1,"card-header",2,"padding","3px"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px"],[1,"form-group","row"],[1,"col-sm-2","form-control-label",2,"font-size","13px"],[1,"col-sm-2"],["name","barcodeType",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","ngModelChange"],["value",""],[3,"ngValue",4,"ngFor","ngForOf"],["class","col-sm-2",4,"ngIf"],[4,"ngIf"],["class","form-group row",4,"ngIf"],["type","number","id","price","name","price",1,"form-control","text-right",2,"height","30px","font-size","14px",3,"ngModel","disabled","ngModelChange","keydown.Enter"],["type","number",1,"form-control-label",2,"font-size","13px"],[2,"width","10%"],["id","qty","name","printQty",1,"form-control","text-right",2,"height","30px","font-size","14px",3,"ngModel","disabled","ngModelChange","keydown.Enter"],[1,"col-sm-1"],["appOldFYearDB","",1,"btn","btn-info","w-100",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"col-sm-12"],[1,"barcodeList-wrap"],[1,"heading",2,"background-color","rgba(0,0,0,.03)","padding","8px"],[2,"font-size","14px"],[1,"table-wrap",2,"overflow","auto","height","225px"],[1,"table","table-striped",2,"width","100%"],["width","180px"],["width","300px;"],["width","180px;"],["width","180px;",4,"ngIf"],["width","160px;"],["width","70px"],[4,"ngFor","ngForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],["genericGridForPIVoucher",""],["genericGridForTRVoucher",""],["class","modal-sticky","style","\n    display: block;\n    padding: 0px;\n    margin-bottom: 25px;\n    height: 500px;\n    position: fixed;\n    right: 1%;\n    top: 30%;\n    z-index: 9999999;\n  ",4,"ngIf"],["class","modal-sticky","style","\ndisplay: block;\npadding: 0px;\nmargin-bottom: 25px;\nheight: 500px;\nposition: fixed;\nright: 1%;\ntop: 30%;\nz-index: 9999999;\nwidth: 24rem;\n",4,"ngIf"],[3,"ngValue"],[2,"width","73%"],["type","checkbox",2,"width","7%",3,"ngModel","ngModelOptions","ngModelChange","change"],["type","text","name","Code","autocomplete","off","placeholder","Press Enter to Select item",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","ngModelChange","keydown","keydown.Enter"],[1,"col-sm-4",2,"padding-left","3px"],["type","text","name","ItemName","autocomplete","off","placeholder","Press Enter to Select item",1,"form-control",2,"height","30px","font-size","14px","width","75%",3,"ngModel","ngModelChange","keydown","keydown.Enter"],["type","text","name","ShortName","autocomplete","off","placeholder","Short Name",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","readOnly","ngModelChange"],["id","bc","type","text","autocomplete","off","name","barcode","name","Barcode","placeholder","Press Enter to Select","autocomplete","off",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","ngModelChange","keydown.Enter","keypress"],["class","row",4,"ngIf"],[1,"form-control-label",2,"font-size","13px"],[1,""],["type","date","name","vchrno","autocomplete","off",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","disabled","ngModelChange","keydown"],["class","col-sm-2 form-control-label","style","font-size: 13px;",4,"ngIf"],["type","text","name","vchrno","autocomplete","off","placeholder","Press Enter to Select Voucher",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","ngModelChange","keydown","keydown.Enter"],["type","text","name","vhrnolist","autocomplete","off","readonly","",1,"form-control",2,"height","30px","font-size","14px","width","200%",3,"ngModel","ngModelChange"],["id","_bc","type","text","name","_barcode","autocomplete","off",1,"form-control",2,"height","30px","font-size","14px",3,"ngModel","ngModelChange"],["widtd","180px"],["widtd","300px;"],[3,"innerHtml"],["widtd","180px;"],["widtd","180px;",4,"ngIf"],["widtd","160px;"],["widtd","70px",4,"ngIf"],["widtd","70px"],["type","checkbox","name","print",3,"ngModel","ngModelChange","change"],["type","date",3,"ngModel","disabled","ngModelOptions","ngModelChange"],["type","number",3,"ngModel","ngModelOptions","ngModelChange"],[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px","height","500px","position","fixed","right","1%","top","30%","z-index","9999999"],[1,"modal-content","modal-content-main-area"],[1,"modal-header",2,"height","40px","background","#ecad79"],["id","header","id","myModalLabel",1,"modal-title","m-0",2,"font-size","19px"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[2,"padding","0px","height","45vh","overflow-y","scroll"],[1,"table"],[2,"background","#b5e26a"],[2,"width","3%","font-size","13px"],["scope","col",2,"font-size","13px"],["class","highlight",3,"highlighted","click","dblclick",4,"ngFor","ngForOf"],[1,"highlight",3,"click","dblclick"],[2,"width","20%","font-size","13px"],[2,"width","30%","font-size","13px"],[3,"innerHTML"],[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px","height","500px","position","fixed","right","1%","top","30%","z-index","9999999","width","24rem"],[2,"background-color","#b5e26a"],["class","highlight",3,"highlighted","dblclick",4,"ngFor","ngForOf"],[1,"highlight",3,"dblclick"],[2,"width","15%"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h5"),e._uU(5,"Barcode Printer"),e.qZA()()(),e.TgZ(6,"div",3)(7,"button",4),e.NdJ("click",function(){return i.back()}),e._uU(8,"Back"),e.qZA(),e.TgZ(9,"button",4),e.NdJ("click",function(){return i.printBarcode()}),e._uU(10,"Print Barcode"),e.qZA(),e.TgZ(11,"button",4),e.NdJ("click",function(){return i.onReset()}),e._uU(12,"Reset"),e.qZA()()()(),e.TgZ(13,"div",5)(14,"div")(15,"div",6)(16,"div",7)(17,"div",8)(18,"h5",9),e._uU(19,"New Barcode Print"),e.qZA()(),e.TgZ(20,"div",10)(21,"form",11)(22,"div")(23,"div",12)(24,"label",13),e._uU(25,"Barcode Print Type:"),e.qZA(),e.TgZ(26,"div",14)(27,"select",15),e.NdJ("ngModelChange",function(n){return i.barcodeType=n}),e._UZ(28,"option",16),e.YNc(29,Z,2,2,"option",17),e.qZA()(),e.YNc(30,R,4,3,"div",18),e.qZA(),e.YNc(31,k,19,6,"ng-container",19),e.YNc(32,W,8,5,"div",20),e.YNc(33,H,5,1,"div",20),e.YNc(34,Q,7,2,"div",20),e.TgZ(35,"div",12)(36,"label",13),e._uU(37,"Price :"),e.qZA(),e.TgZ(38,"div",14)(39,"input",21),e.NdJ("ngModelChange",function(n){return i.formObj.Price=n})("keydown.Enter",function(){return i.focusToNext("qty")}),e.qZA()(),e.TgZ(40,"label",22),e._uU(41,"Print Qty:"),e.qZA(),e.TgZ(42,"div",23)(43,"input",24),e.NdJ("ngModelChange",function(n){return i.formObj.Quantity=n})("keydown.Enter",function(n){return i.addToTable(n)}),e.qZA()(),e.TgZ(44,"div",25)(45,"button",26,27),e.NdJ("click",function(n){return i.addToTable(n)}),e._uU(47,"Add"),e.qZA()()()()()()()()()(),e.TgZ(48,"div",1)(49,"div",28)(50,"div",29)(51,"div",30)(52,"h3",31),e._uU(53,"Barcode Print List"),e.qZA()(),e.TgZ(54,"div",32)(55,"table",33)(56,"thead")(57,"tr")(58,"th",34),e._uU(59,"Item Code"),e.qZA(),e.TgZ(60,"th",35),e._uU(61,"Item Name"),e.qZA(),e.TgZ(62,"th",36),e._uU(63," Barcode"),e.qZA(),e.YNc(64,J,2,0,"th",37),e.YNc(65,F,2,0,"th",37),e.TgZ(66,"th",38),e._uU(67,"Price"),e.qZA(),e.TgZ(68,"th",39),e._uU(69,"Nos"),e.qZA(),e.TgZ(70,"th",39),e._uU(71,"Print"),e.qZA()()(),e.TgZ(72,"tbody"),e.YNc(73,z,18,10,"tr",40),e.qZA()()()()()(),e.TgZ(74,"generic-popup-grid",41,42),e.NdJ("onItemDoubleClick",function(n){return i.dblClickPopupItem(n)}),e.qZA(),e.TgZ(76,"generic-popup-grid",41,43),e.NdJ("onItemDoubleClick",function(n){return i.dblClickPopupVoucher(n)}),e.qZA(),e.TgZ(78,"generic-popup-grid",41,44),e.NdJ("onItemDoubleClick",function(n){return i.dblClickPopupTRVoucher(n)}),e.qZA(),e.YNc(80,$,20,1,"div",45),e.YNc(81,te,20,1,"div",46)),2&t){const o=e.MAs(46);e.xp6(27),e.Q6J("ngModel",i.barcodeType),e.xp6(2),e.Q6J("ngForOf",i.barcodeTypeStaticArr),e.xp6(1),e.Q6J("ngIf","piWise"==i.barcodeType||"pdWise"==i.barcodeType),e.xp6(1),e.Q6J("ngIf","piWise"!=i.barcodeType&&"bcWise"!=i.barcodeType&&"trWise"!=i.barcodeType&&"pdWise"!=i.barcodeType&&"rpWise"!=i.barcodeType),e.xp6(1),e.Q6J("ngIf","piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(1),e.Q6J("ngIf","bcWise"==i.barcodeType),e.xp6(1),e.Q6J("ngIf","trWise"==i.barcodeType),e.xp6(5),e.Q6J("ngModel",i.formObj.Price)("disabled",i.checkUserightsForRateChange()),e.xp6(4),e.Q6J("ngModel",i.formObj.Quantity)("disabled","piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(2),e.Q6J("disabled",o.isOldFYearDB()),e.xp6(19),e.Q6J("ngIf","btWise"==i.barcodeType||"itemWise"==i.barcodeType||"piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(1),e.Q6J("ngIf","btWise"==i.barcodeType||"itemWise"==i.barcodeType||"piWise"==i.barcodeType||"pdWise"==i.barcodeType||"rpWise"==i.barcodeType),e.xp6(8),e.Q6J("ngForOf",i.barCodeArr),e.xp6(1),e.Q6J("popupsettings",i.gridPopupSettings),e.xp6(2),e.Q6J("popupsettings",i.gridPopupSettingsForPIVoucher),e.xp6(2),e.Q6J("popupsettings",i.gridPopupSettingsForTRVoucher),e.xp6(2),e.Q6J("ngIf",i.showBarcode),e.xp6(1),e.Q6J("ngIf",i.showBatches)}},dependencies:[_.sg,_.O5,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.Wl,u.EJ,u.JJ,u.JL,u.On,u.F,C.Zl,N.H],styles:[".card-body[_ngcontent-%COMP%] {\n        padding: 0 !important;\n    }\n\n    .form-group.row[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n    }\n\n    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n        height: 26px;\n        font-size: 14px;\n        padding-top: 0;\n        padding-bottom: 0px;\n    }\n\n    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n        padding: .2rem;\n        vertical-align: top;\n        border-top: 1px solid #dee2e6;\n        font-size: 14px;\n    }\n    th[_ngcontent-%COMP%]{\n        position: sticky; top: -1px; z-index: 1;\n        background-color: #7ed0ff;\n    }\n\n    th[_ngcontent-%COMP%]:first-child {\n        border-bottom: 1px solid #dee2e6;\n    }\n    .highlighted[_ngcontent-%COMP%]{\n        background-color: #ced6d3;\n    }"]}),r})()}];let ne=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(oe),m.Bz]}),r})();var re=l(82738),se=l(46543);let ce=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[x.n],imports:[se.m,_.ez,ne,T.JX,P.Xd,g.zk.forRoot(),O.Is,re.b.forRoot()]}),r})()}}]);