"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[5578],{48063:(Z,S,r)=>{r.d(S,{h:()=>_});var C=r(15439),e=r.n(C),n=r(42326),I=r(8929),T=r(92340),m=r(94650),E=r(67297),P=r(67311),M=r(14970),v=r(69389),A=r(34793),x=r(87584),d=r(53074),f=r(80529);let _=(()=>{class g{constructor(t,o,l,a,u,i,s,c){this.authservice=t,this.alertService=o,this.loadService=l,this.setting=a,this.arouter=u,this._trnMainService=i,this.masterService=s,this.http=c,this.hoverId=null,this.codeHoverId=null,this.saveButtonClickedSubject=new I.xQ,this.saveButtonClickedSubject$=this.saveButtonClickedSubject.asObservable(),this.userSetting=t.getSetting(),this.apiUrl=T.N.apiUrl}hoverDiscount(t,o){let l="";this.hoverId=t;let a=1==this.userSetting.EnableDiscountInAltUnit&&this._trnMainService.nullToZeroConverter(o.RATEDISCOUNT)>0?`<br ><span>Alt Unit Discount </span> : ${this._trnMainService.nullToZeroConverter(o.RATEDISCOUNT).toFixed(2)}`:"";return 0!==o.DISCOUNT&&(l=`<span>Indv Discount </span> : ${this._trnMainService.nullToZeroConverter(o.INDDISCOUNT).toFixed(2)} <br>\n                    <span>Flat Discount</span> : ${this._trnMainService.nullToZeroConverter(o.FLATDISCOUNT).toFixed(2)} <br> \n                    <span>Loyalty Discount</span> : ${this._trnMainService.nullToZeroConverter(o.LOYALTY).toFixed(2)} <br>\n                    <span>Promotional Discount </span> : ${this._trnMainService.nullToZeroConverter(o.PROMOTION).toFixed(2)}\n                    ${a}\n                    \n      `),l}hoverQty(t,o){let l="";return l=`<span>Stock </span> : ${this._trnMainService.nullToZeroConverter(o.STOCK)} <br>\n      `,l}hoverCode(t,o){let l="";return this.codeHoverId=t,console.log("prod attributes",o),l=`<span>${JSON.stringify(o.ProdAttributes).replace(/,/g,"<br />").replace(/"|[{}]/g," ")}</span>`,l}pushDiscountName(t){this.discountItem=[{discountName:"Individual Discount",value:t.INDDISCOUNT},{discountName:"Flat Discount",value:t.FLATDISCOUNT},{discountName:"Loyality Discount",value:t.LOYALTY}]}heightChange(t){let o;return this.masterService.ShowMore?t===n.Km.StockIssue||t===n.Km.StockIssueReturn||t===n.Km.OpeningStockBalance||t===n.Km.BranchTransferOut||t===n.Km.RequisitionApproval?(o=64,(t===n.Km.StockIssue||t===n.Km.StockIssueReturn||t===n.Km.OpeningStockBalance||t===n.Km.BranchTransferOut)&&1!==this.masterService.userSetting.GblBarcodeWiseBilling&&(o=66)):t===n.Km.ProductionEntry?o=67:t===n.Km.PurchaseOrder?o=45:t===n.Km.BatchAdjustment?o=72:t===n.Km.PerformaSalesInvoice?(o=48,t===n.Km.PerformaSalesInvoice&&1!==this.masterService.userSetting.GblBarcodeWiseBilling&&(o=51)):o=t===n.Km.RequisitionEntry||t===n.Km.Repack||t===n.Km.BranchTransferIn?70:t===n.Km.SalesOrder||t==n.Km.Purchase&&"IMPORT_PURCHASE"==this._trnMainService.TrnMainObj.AdditionalObj.tag||t===n.Km.Quotation||t===n.Km.GoodsReceived||1!==this.masterService.userSetting.GblBarcodeWiseBilling?55:47:o=(t===n.Km.StockIssue||t===n.Km.StockIssueReturn||t===n.Km.OpeningStockBalance||t===n.Km.BranchTransferOut||t===n.Km.PerformaSalesInvoice||t===n.Km.TaxInvoice||t===n.Km.Sales||t===n.Km.CreditNote||t==n.Km.Purchase&&"IMPORT_PURCHASE"!==this._trnMainService.TrnMainObj.AdditionalObj.tag||t===n.Km.DebitNote)&&1!==this.masterService.userSetting.GblBarcodeWiseBilling||(t===n.Km.StockIssue||t===n.Km.StockIssueReturn||t===n.Km.OpeningStockBalance||t===n.Km.BranchTransferOut||t===n.Km.PerformaSalesInvoice||t===n.Km.TaxInvoice||t===n.Km.Sales||t===n.Km.CreditNote||t==n.Km.Purchase&&"IMPORT_PURCHASE"!==this._trnMainService.TrnMainObj.AdditionalObj.tag||t===n.Km.DebitNote)&&1==this.masterService.userSetting.GblBarcodeWiseBilling?75:71,o}getGridPopUpSettingForMenuItem(t,o,l){let a=!0,u=!0,i=!0,s=!0,c="STOCK",p=!0,O=!0,D=!0,B=!1,y=!0,L=!0,R=!0,N=!1,k=!1,U=!0,h=o.VoucherType;return h==n.Km.CreditNote&&1==this.userSetting.EnableTelcomDevices&&(U=!1),h===n.Km.StockIssueReturn&&(u=!1),h===n.Km.DebitNote&&1==this.userSetting.REFBILLCOMPULSORINDNOTE&&(a=!1,i=!1),(h===n.Km.SalesReturn||h===n.Km.CreditNote)&&(s=!1,c="REMAINING QTY",y=!1),h===n.Km.Purchase&&(0!=this.userSetting.PODELIVERYMODE||0!=this.userSetting.IMPORTPOBILLMODE)&&(p=!1,B=!0),h===n.Km.GoodsReceived&&0!=this.userSetting.PODELIVERYMODE&&(p=!1),h===n.Km.SalesOrder&&this._trnMainService.TrnMainObj.REFORDBILL&&(O=!1),h===n.Km.CreditNote&&1==this.userSetting.EnableTelcomDevices&&(U=!1),(h===n.Km.TaxInvoice||h===n.Km.PerformaSalesInvoice)&&(this._trnMainService.TrnMainObj.REFORDBILL?(R=!0,D=!1):(R=!1,D=!0)),h===n.Km.BranchTransferOut&&o.REFORDBILL&&(L=!1),"add-sales-invoice"==l&&1==this.masterService.userSetting.ShowWarehouseWiseStockPopUp&&(k=!0),h===n.Km.RequisitionEntry&&(N=!0),{title:"PRODUCTS",apiEndpoints:`/getMenuitemWithStockPagedList/${t}/all/NO/${this._trnMainService.userProfile.userWarehouse}`,defaultFilterIndex:this.userSetting.DefaultFilterIndex?this.userSetting.DefaultFilterIndex:0,filterWarehouseWiseStock:k,columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"DESCRIPTION",hidden:!1,noSearch:!1},{key:"BCODE",title:"BARCODE",hidden:U,noSearch:!1},{key:"GroupName",title:"GROUP NAME",hidden:B,noSearch:!0},{key:"PSTOCK",title:"P-QTY",hidden:a,noSearch:!0},{key:"ISSUEQTY",title:"ISSUE QTY",hidden:u,noSearch:!0},{key:"CRATE",title:"NETRATE",hidden:i,noSearch:!0},{key:"RATE",title:"S-RATE",hidden:s,noSearch:!0},{key:"BASEUNIT",title:"UNIT",hidden:R,noSearch:!0},{key:"STOCK",title:c,hidden:N,noSearch:!0,alignment:"right"},{key:"RSTOCK",title:"Req.Order Qty",hidden:L,noSearch:!0},{key:"REALQTY",title:"SALES-QTY",hidden:y,noSearch:!0,alignment:"right"},{key:"POSTOCK",title:"PO QTY",hidden:p,noSearch:!0,alignment:"right"},{key:"POSTOCK",title:"QT QTY",hidden:O,noSearch:!0,alignment:"right"},{key:"OPSTOCK",title:"SO QTY",hidden:D,noSearch:!0,alignment:"right"},{key:"RATE",title:"PORATE",hidden:p,noSearch:!0,alignment:"right",pipe:!0},{key:"RATE",title:"SO RATE",hidden:D,noSearch:!0,alignment:"right",pipe:!0},{key:"MRP",title:"MRP",hidden:R,noSearch:!0,alignment:"right",pipe:!0}]}}getGridPopUpSettingForSupplier(){return{title:"Supplier",apiEndpoints:"/getAccountPagedListByPType/PA/V",defaultFilterIndex:0,columns:[{key:"ACNAME",title:"NAME",hidden:!1,noSearch:!1},{key:"ERPPLANTCODE",title:"CODE",hidden:!1,noSearch:!1},{key:"ADDRESS",title:"ADDRESS",hidden:!1,noSearch:!1},{key:"EMAIL",title:"EMAIL",hidden:!1,noSearch:!1}]}}CalculateExpiryDate(t,o,l){let a=l.SHELFLIFE;var u=e().duration(a,"d");let i=e()(new Date(t)).add(u.asDays(),"d").format("YYYY-MM-DD");(3===l.VoucherType||24===l.VoucherType||74===l.VoucherType||88===l.VoucherType||31===l.VoucherType)&&a&&(l.EXPDATE=i)}clearBarcodeGrid(){this._trnMainService.barCodes.DESCA="",this._trnMainService.barCodes.Quantity=1,this.barcodeEnterStock=null}saveButtonClicked(){this.saveButtonClickedSubject.next()}saveEditDataOfUpdateOpeningFromCarryFarward(t){return this.http.post(`${this.apiUrl}/updateOpeningFromCarryFarward`,t)}getProductInformation(t,o){return this.http.get(`${this.apiUrl}/getProductInformation?${t}=${o}`)}checkBatch(t,o){return this.http.get(`${this.apiUrl}/CheckEnteredBatch?mcode=${t}&batch=${o}`)}}return g.\u0275fac=function(t){return new(t||g)(m.LFG(E.e),m.LFG(P.c),m.LFG(M.V),m.LFG(v.R),m.LFG(A.gz),m.LFG(x.p),m.LFG(d.P),m.LFG(f.eN))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},7838:(Z,S,r)=>{r.d(S,{b:()=>l});var C=r(28698),e=r(94650),n=r(24006),I=r(34793),T=r(48063),m=r(36895);const E=["genericItemDetailsPopup"],P=["barcodeValue"];function M(a,u){if(1&a){const i=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(i);const c=e.oxw();return e.KtG(c.hide())}),e.TgZ(1,"span",13),e._uU(2,"\xd7"),e.qZA()()}}function v(a,u){if(1&a&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"div"),e._uU(8),e.qZA(),e.BQk()),2&a){const i=u.$implicit,s=u.index;e.xp6(2),e.Oqu(s+1),e.xp6(2),e.Oqu(i.location),e.xp6(2),e.Oqu(i.rack),e.xp6(2),e.Oqu(i.shelf)}}function A(a,u){if(1&a&&(e.TgZ(0,"tr",31)(1,"td",32),e._uU(2),e.qZA(),e.TgZ(3,"td",32),e._uU(4),e.qZA(),e.TgZ(5,"td",33),e._uU(6),e.qZA(),e.TgZ(7,"td",33),e._uU(8),e.qZA(),e.TgZ(9,"td",34),e._uU(10),e.qZA()()),2&a){const i=u.$implicit,s=u.index;e.xp6(2),e.hij(" ",s+1," "),e.xp6(2),e.hij(" ",null==i.value?null:i.value.itemCode," "),e.xp6(2),e.hij(" ",null==i.value?null:i.value.description," "),e.xp6(2),e.hij(" ",null==i.value?null:i.value.location," "),e.xp6(2),e.hij(" ",null==i.value?null:i.value.stock," ")}}function x(a,u){if(1&a&&(e.ynx(0),e.TgZ(1,"div",26)(2,"h5",27),e._uU(3,"Alternate Items"),e.qZA()(),e.TgZ(4,"table",28)(5,"tr",29)(6,"th"),e._uU(7,"S.N."),e.qZA(),e.TgZ(8,"th"),e._uU(9,"ItemCode"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Item Name"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Location"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Stock Qty"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,A,11,5,"tr",30),e.qZA()(),e.BQk()),2&a){const i=e.oxw(2);e.xp6(17),e.Q6J("ngForOf",i.items.controls)}}const d=function(){return{"input-font-popup":!0}},f=function(){return{"textarea-font-popup":!0}},_=function(){return{"qty-font-popup":!0}};function g(a,u){if(1&a&&(e.TgZ(0,"form",14)(1,"div",15)(2,"div"),e._uU(3,"Item Code:"),e.qZA(),e._UZ(4,"input",16),e.TgZ(5,"div"),e._uU(6,"Item Name:"),e.qZA(),e._UZ(7,"input",17),e.TgZ(8,"div"),e._uU(9,"Description:"),e.qZA(),e._UZ(10,"textarea",18),e.TgZ(11,"div"),e._uU(12,"MRP:"),e.qZA(),e.TgZ(13,"div",19),e._UZ(14,"input",20),e.TgZ(15,"div",21)(16,"div"),e._uU(17,"Stock Qty:"),e.qZA(),e.TgZ(18,"span"),e._uU(19),e.qZA()()(),e.TgZ(20,"div"),e._uU(21,"Item Location:"),e.qZA(),e.TgZ(22,"div",22)(23,"div",23),e._uU(24,"S.N."),e.qZA(),e.TgZ(25,"div",23),e._uU(26,"Location"),e.qZA(),e.TgZ(27,"div",23),e._uU(28,"Rack"),e.qZA(),e.TgZ(29,"div",23),e._uU(30,"Shelf"),e.qZA(),e.YNc(31,v,9,4,"ng-container",24),e.qZA()(),e.YNc(32,x,18,1,"ng-container",25),e.qZA()),2&a){const i=e.oxw();e.Q6J("formGroup",i.itemDetails),e.xp6(4),e.Q6J("readonly",!0)("ngClass",e.DdM(13,d)),e.xp6(3),e.Q6J("readonly",!0)("ngClass",e.DdM(14,d)),e.xp6(3),e.Q6J("readonly",!0)("ngClass",e.DdM(15,f)),e.xp6(4),e.Q6J("readonly",!0)("ngClass",e.DdM(16,d)),e.xp6(1),e.Q6J("ngClass",e.DdM(17,_)),e.xp6(4),e.Oqu(i.stock),e.xp6(12),e.Q6J("ngForOf",i.detailedLocationArray),e.xp6(1),e.Q6J("ngIf",i.items.controls.length>0)}}const K=function(a,u,i){return{visible:a,hide:u,"popup text-size-popup":i,"text-size-popup":!0}},t=function(){return{scanBarCodeAndEnterItemSelection__scanBarcode:!0,"input-font-popup":!0}},o=function(){return{scanBarCodeAndEnterItemSelection__itemSelection:!0,"input-font-popup":!0}};let l=(()=>{class a{constructor(i,s,c){this.formBuilder=i,this.router=s,this.productHelper=c,this.genericItemDetailsPopupSettings=new C.im,this.showHtml=!1,this.clickedItemDescription=!1,this.stock=0,this.fullPage=!1,this.detailedLocationArray=[]}ngOnInit(){"/pages/masters/view-item-details"===this.router.routerState.snapshot.url&&(this.fullPage=!0,this.show()),this.itemDetails=this.formBuilder.group({itemCode:[""],itemName:[""],description:[""],mrp:[""],alternateItems:this.formBuilder.group({items:this.formBuilder.array([])})})}get items(){return this.itemDetails.controls.alternateItems.controls.items}fillInItemDetailsForm(i){this.items.clear(),this.itemDetails.reset();const s={itemCode:i.result[0].MENUCODE,itemName:i.result[0].DESCA,description:i.result[0].DESCB,mrp:i.result[0].IN_RATE_A},c=i.result[0].LOCATION.split(",");this.detailedLocationArray=this.organizeLocation(c),this.stock=i.result[0].STOCK,this.itemDetails.patchValue(s),i.result2.forEach(p=>{const O=this.formBuilder.group({itemCode:[p.MENUCODE],description:[p.DESCA],location:[p.LOCATION],stock:[p.STOCK]});this.items.push(O)}),this.clickedItemDescription=!0}selectedItemDetails(i){this.barcodeValue.nativeElement.value="",this.getDataFromApi("mcode",i.MCODE)}getDataFromApi(i,s){this.selectedItemSubscription=this.productHelper.getProductInformation(i,s).subscribe(c=>{this.fillInItemDetailsForm(c)})}showItemDescriptionBarcode(){!this.barcodeValue.nativeElement.value||this.getDataFromApi("barcode",this.barcodeValue.nativeElement.value)}showItemDescriptionPopup(){this.genericItemDetailsPopupSettings={title:"Item Details",apiEndpoints:"/getMenuitemPagedListForScheme/Item",defaultFilterIndex:1,columns:[{key:"MENUCODE",title:"Item Code",hidden:!1,noSearch:!1},{key:"DESCA",title:"Description",hidden:!1,noSearch:!1}]},this.genericGridSalesReturnVoucher.show()}show(){this.showHtml=!0}hide(){this.showHtml=!1,this.items.clear(),this.itemDetails.reset(),this.clickedItemDescription=!1,this.barcodeValue.nativeElement.value=""}organizeLocation(i){const s=[];for(const c of i){const[p,O,D]=c.split("/");s.push({location:p,rack:O,shelf:D})}return s}ngOnDestroy(){this.selectedItemSubscription&&this.selectedItemSubscription.unsubscribe(),this.hide()}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(n.qu),e.Y36(I.F0),e.Y36(T.h))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-item-search-popup"]],viewQuery:function(i,s){if(1&i&&(e.Gf(E,5),e.Gf(P,5)),2&i){let c;e.iGM(c=e.CRH())&&(s.genericGridSalesReturnVoucher=c.first),e.iGM(c=e.CRH())&&(s.barcodeValue=c.first)}},decls:13,vars:13,consts:[[3,"ngClass"],[1,"modal-content","modal-content-main-area","text-size"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"padding-left","5px","font-size","1.2rem"],["class","close","aria-label","Close",3,"click",4,"ngIf"],[1,"scanBarCodeAndEnterItemSelection"],["type","text","placeholder","Scan Barcode",3,"ngClass","keydown.enter"],["barcodeValue",""],["type","text","placeholder","Press Enter for Item Selection",3,"ngClass","readOnly","keydown.enter"],[3,"formGroup",4,"ngIf"],[3,"popupsettings","onItemDoubleClick"],["genericItemDetailsPopup",""],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[3,"formGroup"],[1,"form-layout"],["type","text","formControlName","itemCode",2,"justify-self","start","max-width","110px",3,"readonly","ngClass"],["type","text","formControlName","itemName",2,"justify-self","stretch",3,"readonly","ngClass"],["type","text","formControlName","description",2,"justify-self","stretch",3,"readonly","ngClass"],[1,"flex3items"],["type","text","formControlName","mrp",2,"justify-self","start","max-width","110px",3,"readonly","ngClass"],[1,"qty",3,"ngClass"],[1,"locationDetailed"],[2,"font-weight","bold"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"modal-header",2,"padding","8px"],[1,"modal-title"],[1,"Table1"],[2,"background","#7ed0ff"],["aria-disabled","true","class","highlight",4,"ngFor","ngForOf"],["aria-disabled","true",1,"highlight"],[1,"table-data","width-3"],[1,"table-data","width-20"],[1,"table-data","width-5",2,"text-align","center"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4," Item Details "),e.qZA(),e.YNc(5,M,3,0,"button",4),e.qZA(),e.TgZ(6,"div",5)(7,"input",6,7),e.NdJ("keydown.enter",function(){return s.showItemDescriptionBarcode()}),e.qZA(),e.TgZ(9,"input",8),e.NdJ("keydown.enter",function(){return s.showItemDescriptionPopup()}),e.qZA()(),e.YNc(10,g,33,18,"form",9),e.qZA()(),e.TgZ(11,"generic-popup-grid",10,11),e.NdJ("onItemDoubleClick",function(p){return s.selectedItemDetails(p)}),e.qZA()),2&i&&(e.Q6J("ngClass",e.kEZ(7,K,s.showHtml,!s.showHtml,!s.fullPage)),e.xp6(5),e.Q6J("ngIf",!s.fullPage),e.xp6(2),e.Q6J("ngClass",e.DdM(11,t)),e.xp6(2),e.Q6J("ngClass",e.DdM(12,o))("readOnly",!0),e.xp6(1),e.Q6J("ngIf",s.clickedItemDescription),e.xp6(1),e.Q6J("popupsettings",s.genericItemDetailsPopupSettings))},dependencies:[m.mk,m.sg,m.O5,C.Zl,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".visible[_ngcontent-%COMP%]{display:inline-block;position:fixed;margin:20px;overflow-y:scroll;max-height:80vh;max-width:100%}.modal-content[_ngcontent-%COMP%]{overflow-x:hidden}.popup[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);max-height:80%;max-width:70%;overflow-y:auto;margin:0}.hide[_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}input[_ngcontent-%COMP%]{padding:12px;border:1px solid #cbcbcb;border-radius:3px}.input-font-popup[_ngcontent-%COMP%], .textarea-font-popup[_ngcontent-%COMP%]{font-size:14px}textarea[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 2px #cbcbcb}input[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 2px #cbcbcb}.scanBarCodeAndEnterItemSelection[_ngcontent-%COMP%]{display:flex;justify-items:center;align-items:center;gap:20px;padding:10px}.scanBarCodeAndEnterItemSelection__scanBarcode[_ngcontent-%COMP%]{width:250px}.scanBarCodeAndEnterItemSelection__itemSelection[_ngcontent-%COMP%]{width:550px}.bottom[_ngcontent-%COMP%]{margin-top:6px}.qty[_ngcontent-%COMP%]{display:flex;gap:20px;font-weight:700}.qty-font-popup[_ngcontent-%COMP%]{font-size:20px}.form-layout[_ngcontent-%COMP%]{grid-template-columns:150px 527px;display:grid;gap:16px 116px;padding-inline:15px;margin-top:16px;margin-bottom:16px}.text-size-popup[_ngcontent-%COMP%]{font-size:14px}.table-data[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;height:23px}.width-3[_ngcontent-%COMP%]{width:3%}.width-5[_ngcontent-%COMP%]{width:5%}.width-20[_ngcontent-%COMP%]{width:20%}.locationDetailed[_ngcontent-%COMP%]{display:grid;grid-template-columns:50px 220px 220px 220px;gap:10px,25px}.flex3items[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]{margin-bottom:0;line-height:1}"]}),a})()},5578:(Z,S,r)=>{r.r(S),r.d(S,{SearchItemDetailsModule:()=>x});var C=r(36895),e=r(63321),n=r(24006),I=r(34793),T=r(7838),m=r(94650);const E=[{path:"",component:T.b}];let P=(()=>{class d{}return d.\u0275fac=function(_){return new(_||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[I.Bz.forChild(E),I.Bz]}),d})();var M=r(65412),v=r(46543),A=r(68567);let x=(()=>{class d{}return d.\u0275fac=function(_){return new(_||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[C.ez,e._,n.UX,P,M.Is,v.m,A.JX]}),d})()}}]);