"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8698],{28698:(X,m,c)=>{c.d(m,{Zl:()=>_,im:()=>$});var g=c(64762),e=c(66274),f=c(68277),x=c(28049),C=c(54395),v=c(92340),d=c(42326),T=c(53181),P=c(87584),w=c(67311),a=c(92752),p=c(7587),u=c(72533);const b=["inputBox"];function M(n,i){if(1&n&&(e.TgZ(0,"option",26),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("value",t.key),e.xp6(1),e.hij(" ",t.title," ")}}function I(n,i){if(1&n&&(e.ynx(0),e.YNc(1,M,2,2,"option",25),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.noSearch)}}const h=function(n){return{"text-align":n}};function A(n,i){if(1&n&&(e.TgZ(0,"th",28),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("ngStyle",e.VKq(2,h,t.alignment)),e.xp6(1),e.hij(" ",t.title," ")}}function O(n,i){if(1&n&&(e.ynx(0),e.YNc(1,A,2,4,"th",27),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.hidden)}}function y(n,i){1&n&&(e.TgZ(0,"th"),e._uU(1," Action "),e.qZA())}function S(n,i){if(1&n&&(e.TgZ(0,"div",32),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit,o=e.oxw().$implicit;e.s9C("title",o[t.key]),e.xp6(1),e.hij(" ",o[t.key]," ")}}function k(n,i){if(1&n&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&n){const t=e.oxw(2).$implicit,o=e.oxw().$implicit;e.s9C("title",o[t.key]),e.xp6(1),e.hij(" ",e.Dn7(2,2,o[t.key],"INR","Rs. ")," ")}}function U(n,i){if(1&n&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw(2).$implicit,o=e.oxw().$implicit;e.s9C("title",o[t.key]),e.xp6(1),e.hij(" ",e.xi3(2,2,o[t.key],"yyyy-MM-dd")," ")}}function D(n,i){if(1&n&&(e.TgZ(0,"td",28),e.YNc(1,S,2,2,"div",31),e.YNc(2,k,3,6,"div",31),e.YNc(3,U,3,5,"div",31),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("ngStyle",e.VKq(4,h,t.alignment)),e.xp6(1),e.Q6J("ngIf",!t.pipe&&!t.format),e.xp6(1),e.Q6J("ngIf",t.pipe),e.xp6(1),e.Q6J("ngIf",t.format)}}function E(n,i){if(1&n&&(e.ynx(0),e.YNc(1,D,4,6,"td",27),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.hidden)}}function Z(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"span")(2,"i",33),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw(2).index,z=e.oxw(3);return e.KtG(z.onActionClicked(s.text,r))}),e.qZA()(),e.BQk()}if(2&n){const t=i.$implicit;e.xp6(2),e.Tol(t.icon),e.s9C("title",t.title)}}function L(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"td"),e.YNc(2,Z,3,4,"ng-container",13),e.qZA(),e.BQk()),2&n){const t=e.oxw(4);e.xp6(2),e.Q6J("ngForOf",t.popupsettings.actionKeys)}}function R(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tr",30),e.NdJ("dblclick",function(){const s=e.CHM(t).$implicit,r=e.oxw(3);return e.KtG(r.doubleClick(s))})("click",function(){const s=e.CHM(t).index,r=e.oxw(3);return e.KtG(r.singleClick(s))}),e.YNc(1,E,2,1,"ng-container",13),e.YNc(2,L,3,1,"ng-container",2),e.qZA()}if(2&n){const t=i.index,o=e.oxw(3);e.ekj("selected-row",o.selectedRowIndex==t),e.xp6(1),e.Q6J("ngForOf",o.popupsettings.columns),e.xp6(1),e.Q6J("ngIf",o.popupsettings.showActionButton&&o.popupsettings.actionKeys.length)}}const N=function(n,i,t,o){return{id:n,itemsPerPage:i,currentPage:t,totalItems:o}};function G(n,i){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,R,3,4,"tr",29),e.ALo(2,"paginate"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,t.itemList,e.l5B(4,N,t.tabindex,t.pageSize,t.pageNumber,t.totalItems)))}}function W(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",34)(1,"pagination-controls",35),e.NdJ("pageChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onPageChange(l))}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("id",t.tabindex)}}function J(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",46),e._uU(2),e.qZA(),e.TgZ(3,"td",47),e._uU(4),e.qZA(),e.TgZ(5,"td",48)(6,"button",49),e.NdJ("click",function(){const s=e.CHM(t).index,r=e.oxw(3);return e.KtG(r.removeItem(s))}),e._uU(7," Remove "),e.qZA()()()}if(2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.MENUCODE),e.xp6(2),e.Oqu(t.DESCA)}}function F(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",36)(2,"fieldset")(3,"div",7)(4,"h6",37),e._uU(5,"Selected Item list"),e.qZA()(),e.TgZ(6,"div",7)(7,"table",38)(8,"thead",39)(9,"tr",40)(10,"th",41),e._uU(11,"Menucode"),e.qZA(),e.TgZ(12,"th",42),e._uU(13,"Description"),e.qZA(),e.TgZ(14,"th",43),e._uU(15,"Action"),e.qZA()()(),e.TgZ(16,"tbody",44),e.YNc(17,J,8,2,"tr",13),e.qZA()()()(),e.TgZ(18,"div",7)(19,"button",45),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.selectMultipleItem())}),e._uU(20," OK "),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(17),e.Q6J("ngForOf",t.selectedItems)}}function Q(n,i){if(1&n&&e._UZ(0,"div",50),2&n){const t=e.oxw(2);e.Q6J("innerHTML",t.summary,e.oJD)}}function H(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",51)(1,"input",52,53),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.suppliercodefilter=l)})("change",function(){e.CHM(t);const l=e.MAs(2),s=e.oxw(2);return s.suppliercodefilter=l.checked?1:0,e.KtG(s.onSupplierWiseFilter(l.checked))}),e.qZA(),e.TgZ(3,"label",54),e._uU(4,"Supplier wise items"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.suppliercodefilter)}}function q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",51)(1,"input",52,55),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.loadAllItemsFilter=l)})("change",function(){e.CHM(t);const l=e.MAs(2),s=e.oxw(2);return s.loadAllItemsFilter=l.checked?1:0,e.KtG(s.onLoadAllFilter(l.checked))}),e.qZA(),e.TgZ(3,"label",54),e._uU(4,"Load All Products"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.loadAllItemsFilter)}}function K(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",51)(1,"input",52,56),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.showPopupWareHouseWiseStock=l)})("change",function(l){e.CHM(t);const s=e.oxw(2);return s.showPopupWareHouseWiseStock=l.target.checked?1:0,e.KtG(s.onShowWarehouseWiseStockPopup(s.showPopupWareHouseWiseStock))}),e.qZA(),e.TgZ(3,"label",54),e._uU(4,"Show Warehouse Wise Stock"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.showPopupWareHouseWiseStock)}}function B(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",51)(1,"input",52),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.multipleSelect=l)})("change",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.multipleSelect=l.target.checked?1:0)}),e.qZA(),e.TgZ(2,"label",54),e._uU(3,"Select multiple items"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.multipleSelect)}}function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div")(2,"div",3)(3,"h4",4),e._uU(4),e.qZA(),e.TgZ(5,"button",5),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.hide())}),e.TgZ(6,"span",6),e._uU(7,"\xd7"),e.qZA()()(),e.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"select",11),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.filterOption=l)})("change",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.triggerSearch(l))}),e.TgZ(13,"option",12),e._uU(14,"Select Filter Option"),e.qZA(),e.YNc(15,I,2,1,"ng-container",13),e.qZA()(),e.TgZ(16,"div",14),e._UZ(17,"input",15,16),e.qZA()(),e.TgZ(19,"div",17)(20,"table",18)(21,"thead")(22,"tr",19),e.YNc(23,O,2,1,"ng-container",13),e.YNc(24,y,2,0,"th",2),e.qZA()(),e.YNc(25,G,3,9,"tbody",2),e.qZA(),e.TgZ(26,"div",20),e.YNc(27,W,2,1,"div",21),e.qZA(),e.YNc(28,F,21,1,"ng-container",2),e.qZA()()(),e.YNc(29,Q,1,1,"div",22),e.TgZ(30,"div",23),e.YNc(31,H,5,1,"div",24),e.qZA(),e.TgZ(32,"div",23),e.YNc(33,q,5,1,"div",24),e.qZA(),e.TgZ(34,"div",23),e.YNc(35,K,5,1,"div",24),e.qZA(),e.TgZ(36,"div",23),e.YNc(37,B,4,1,"div",24),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.popupsettings.title," "),e.xp6(5),e.Q6J("ngClass",1==t.multipleSelect?"col-md-7 pd0":""),e.xp6(3),e.Q6J("ngModel",t.filterOption),e.xp6(3),e.Q6J("ngForOf",t.popupsettings.columns),e.xp6(2),e.Q6J("formControl",t.filterValue),e.xp6(6),e.Q6J("ngForOf",t.popupsettings.columns),e.xp6(1),e.Q6J("ngIf",t.popupsettings.showActionButton&&t.popupsettings.actionKeys.length),e.xp6(1),e.Q6J("ngIf",t.itemList.length),e.xp6(2),e.Q6J("ngIf",t.itemList.length),e.xp6(1),e.Q6J("ngIf",1==t.multipleSelect),e.xp6(1),e.Q6J("ngIf",t.summary),e.xp6(2),e.Q6J("ngIf",t.popupsettings.filterSupplierWise),e.xp6(2),e.Q6J("ngIf",t.popupsettings.showLoadAllProductsOption),e.xp6(2),e.Q6J("ngIf",t.popupsettings.filterWarehouseWiseStock),e.xp6(2),e.Q6J("ngIf",t.popupsettings.multiSelect)}}const j=function(){return{width:"115%"}};class _ extends f.nd{constructor(i,t,o,l){super(i),this.injector=i,this.dialog=t,this._trnMainService=o,this.alertservice=l,this.loadCheckBox=!1,this.loadCheckBoxForWareHouseStock=!1,this.selectedItems=[],this.requestUrl="",this.isActive=!1,this.itemList=[],this.selectedRowIndex=0,this.tabindex="list",this.hideGridOnDoubleClick=!0,this.billTo="",this.warehouse="",this.tag="",this.isForCancelOrder=!1,this.supplierID=null,this.multipleSelect=0,this.onPopUpClose=new e.vpe,this.onItemDoubleClick=new e.vpe,this.onDeleteClicked=new e.vpe,this.onEmptyList=new e.vpe,this.onItemsSelected=new e.vpe}ngAfterViewInit(){this._trnMainService.TrnMainObj.VoucherType===d.Km.Purchase&&(this.loadCheckBox=!0),"add-sales-invoice"===this._trnMainService.activeurlpath&&1==this._trnMainService.userSetting.ShowWarehouseWiseStockPopUp&&(this.loadCheckBoxForWareHouseStock=!0),this.filterValue.valueChanges.pipe((0,C.b)(500)).subscribe(i=>{this.refreshPage(),this.refresh()})}show(i="",t=!1,o="",l=!0){this.hideGridOnDoubleClick=l,setTimeout(()=>{this.inputBox.nativeElement.focus()},10),this.summary=null,this.billTo=i,this.isForCancelOrder=t,this.itemList=[],this.isActive=!0,this.selectedRowIndex=0,this.tag=o,this.filterOption="",this._trnMainService.showWareHouseWiseStockPopup=!1,this.showPopupWareHouseWiseStock=0,this.selectedItems=[],setTimeout(()=>{this.setFilterOption()},100)}setFilterOption(){if(this.popupsettings&&this.popupsettings.columns.length){const i=this.popupsettings.defaultFilterIndex?this.popupsettings.defaultFilterIndex:0;if(this.popupsettings.columns.length<=i)return;this.filterValue.setValue(this.popupsettings.userDefinefilterValue),this.filterOption=this.popupsettings.columns[i].key}}getData(){this.assignSupplierCode(),this.showWareHouseStockPopup(),this.summary=null,this.selectedRowIndex=0;let i=v.N.apiUrl;const t=this.popupsettings.apiEndpoints;let o=`${i}${t}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`;return"/getpaymentmodepagedlist"==t&&(o+=`&paymentmodename=${encodeURIComponent(this._trnMainService.TrnMainObj.TRNMODE)}`),this.billTo&&""!==this.billTo&&null!=this.billTo&&void 0!==this.billTo&&(o+=`&billTo=${this.billTo}`),1===this.loadAllItemsFilter&&(o=`${i}/getMenuitemWithStockPagedList/0/A/all/PI/${this._trnMainService.TrnMainObj.MWAREHOUSE}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`),this.tag&&""!==this.tag&&null!=this.tag&&void 0!==this.isTableLoading&&(o+=`&tag=${this.tag}`),this.isForCancelOrder&&(o+=`&isForCancelOrder=${this.isForCancelOrder}`),null!=this.supplierID&&(o+=`&SupplierWiseItem=${this.supplierID}`),!1===this.popupsettings.userWiseWarehouseOnly&&(o+=`&userWiseWarehouseOnly=${this.popupsettings.userWiseWarehouseOnly}`),o.includes("getDivisionWiseWarehousePagedList")&&(o+=`&nonSellableWarehouseAlso=${this._trnMainService.TrnMainObj.VoucherType===d.Km.DebitNote}`),o.includes("getRequisitionListForStockIssue")&&(o+=`&sort=${JSON.stringify([{Field:"VCHRNO",Dir:"DESC"}])}`),null!=this._trnMainService.TrnMainObj.PARAC&&(o+=`&supCodeFilter=  ${encodeURIComponent(this._trnMainService.TrnMainObj.PARAC)}`),this.requestUrl=this.getFilterOption(o,1==this._trnMainService.userSetting.ProductSearchMode?1:0),this.popupsettings.bodyData?this._http.post(this.requestUrl,this.popupsettings.bodyData).subscribe(l=>{this.totalItems=l.result?l.result.totalCount:0,this.itemList=l.result?l.result.result:[],this.itemList.forEach(function(s){null!=s.TRNDATE&&void 0!==s.TRNDATE&&(s.TRNDATE=s.TRNDATE.toString().substring(0,10)),null!=s.DATE&&void 0!==s.DATE&&(s.DATE=s.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)}):this._http.get(this.requestUrl).pipe((0,x.P)()).subscribe(l=>{var s;this.totalItems=(s=l.result?l.result:l)?s.totalCount:0,this.itemList=s?s.data:[],this.itemList.forEach(function(r){null!=r.TRNDATE&&void 0!==r.TRNDATE&&(r.TRNDATE=r.TRNDATE.toString().substring(0,10)),null!=r.DATE&&void 0!==r.DATE&&(r.DATE=r.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)})}hide(){this.itemList=[],this.pageNumber=1,this.totalItems=0,this.isActive=!1}triggerSearch(){null==this.filterOption||void 0===this.filterOption||""===this.filterOption||this.filterValue.setValue("")}singleClick(i){this.selectedRowIndex=i,this.summary=this.itemList[i].itemSummary}doubleClick(i){if(0==this.multipleSelect)this.onItemDoubleClick.emit(i),this.hideGridOnDoubleClick&&this.hide();else if(1==this.multipleSelect){if(this.selectedItems.filter(o=>o.MCODE==i.MCODE).length>0)return;this.selectedItems.push(i)}}selectMultipleItem(){this.onItemsSelected.emit(this.selectedItems),this.hideGridOnDoubleClick&&this.hide()}removeItem(i){this.selectedItems.splice(i,1)}updown(i){if(!this.isActive)return!0;if("ArrowDown"===i.code)i.preventDefault(),this.selectedRowIndex++,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),this.calculateTotalPages(),this.selectedRowIndex===this.itemList.length&&this.pageNumber<this.totalPages?(this.pageNumber=this.pageNumber+1,this.refresh(),this.selectedRowIndex=0,this.itemListClosed()):this.selectedRowIndex===this.itemList.length&&this.pageNumber===this.totalPages&&(this.selectedRowIndex=this.itemList.length-1);else if("ArrowUp"===i.code)i.preventDefault(),this.selectedRowIndex--,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),-1===this.selectedRowIndex&&this.pageNumber>1?(this.pageNumber=this.pageNumber-1,this.refresh(),this.selectedRowIndex=this.itemList.length-1,this.itemListClosed()):-1===this.selectedRowIndex&&1===this.pageNumber&&(this.selectedRowIndex=0);else if(("Enter"===i.code||"NumpadEnter"===i.code)&&this.selectedRowIndex>=0&&this.selectedRowIndex<this.itemList.length)i.preventDefault(),"BARCODE"===this.filterOption||(this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]),this.hide(),this.itemListClosed());else if("Escape"===i.code)i.preventDefault(),this.hide(),this.itemListClosed();else if("ArrowRight"===i.code){if(i.preventDefault(),this.calculateTotalPages(),this.pageNumber>=this.totalPages)return void(this.pageNumber=this.totalPages);this.selectedRowIndex=0,this.pageNumber=this.pageNumber+1,this.refresh()}else if("ArrowLeft"===i.code){if(i.preventDefault(),this.pageNumber<=1)return void(this.pageNumber=1);this.selectedRowIndex=0,this.pageNumber=this.pageNumber-1,this.refresh()}}itemListClosed(){this.onPopUpClose.emit()}ngOnChanges(i){this.popupsettings=i.popupsettings.currentValue}onActionClicked(i,t){if(""!==i&&null!=i&&void 0!==i){const o=i.toLowerCase();switch(o){case"delete":case"cancel":confirm(`Are you sure to ${o} this row ?.`)&&this.onDeleteClicked.emit(this.itemList[t])}}}onSupplierWiseFilter(i){this.filterValue.setValue("")}onLoadAllFilter(i){this.filterValue.setValue("")}onShowWarehouseWiseStockPopup(i){this.filterValue.setValue("")}showWareHouseStockPopup(){this._trnMainService.showWareHouseWiseStockPopup=1==this.showPopupWareHouseWiseStock}assignSupplierCode(){console.log("k aaucha",this._trnMainService.TrnMainObj.BILLTO),(null==this.suppliercodefilter||0==this.suppliercodefilter)&&(this.supplierID=null),1==this.suppliercodefilter&&(this.supplierID=this._trnMainService.TrnMainObj.PARAC?this._trnMainService.TrnMainObj.PARAC:null),console.log("this.supplier id",this.supplierID)}}_.\u0275fac=function(i){return new(i||_)(e.Y36(e.zs3),e.Y36(T.uw),e.Y36(P.p),e.Y36(w.c))},_.\u0275cmp=e.Xpm({type:_,selectors:[["generic-popup-grid"]],viewQuery:function(i,t){if(1&i&&e.Gf(b,5),2&i){let o;e.iGM(o=e.CRH())&&(t.inputBox=o.first)}},hostBindings:function(i,t){1&i&&e.NdJ("keydown",function(l){return t.updown(l)},!1,e.evT)},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onItemDoubleClick:"onItemDoubleClick",onDeleteClicked:"onDeleteClicked",onEmptyList:"onEmptyList",onItemsSelected:"onItemsSelected"},features:[e.qOj,e.TTD],decls:3,vars:5,consts:[[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px"],[1,"modal-content","modal-content-main-area",3,"ngStyle"],[4,"ngIf"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"padding-left","20px","font-size","1.2rem"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"row"],[3,"ngClass"],[1,"col-md-12","row"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding","0px"],[2,"width","100%",3,"ngModel","ngModelChange","change"],["value","","selected",""],[4,"ngFor","ngForOf"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding-right","0px"],["type","text","placeholder","Enter keyword to search",2,"width","100%",3,"formControl"],["inputBox",""],[1,"col-md-12","table-scroll"],[1,"table"],[2,"background","#7ed0ff"],[1,"row",2,"float","center","margin","4px 0px"],["class","col-md-12","style","width: 100%; margin-top: -1.2rem",4,"ngIf"],["style","margin-left: 25px; margin-top: -25px; font-size: 12px",3,"innerHTML",4,"ngIf"],[2,"margin-left","25px","width","100%","font-size","12px"],["style","width: 100%",4,"ngIf"],[3,"value",4,"ngIf"],[3,"value"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"],["class","highlight","title","double click for detail view",3,"selected-row","dblclick","click",4,"ngFor","ngForOf"],["title","double click for detail view",1,"highlight",3,"dblclick","click"],[3,"title",4,"ngIf"],[3,"title"],[3,"title","click"],[1,"col-md-12",2,"width","100%","margin-top","-1.2rem"],["maxSize","9","directionLinks","true","autoHide","true","responsive","true","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",2,"margin-left","6rem","margin-bottom","0","font-size","0.8rem",3,"id","pageChange"],[1,"col-md-5","pd0"],[2,"text-align","center"],[1,"table","table-striped"],[1,"tablehead"],[2,"position","sticky","top","0","line-height","1rem"],["scope","col",2,"width","15%"],["scope","col",2,"width","25%"],["scope","col",2,"width","10%"],[1,"selecteditem"],[1,"btn","btn-info","btn-sm",3,"click"],[2,"width","15%"],[2,"width","25%"],[2,"width","10%"],[1,"btn","btn-danger",2,"line-height","8px","font-size","10px","padding","4px",3,"click"],[2,"margin-left","25px","margin-top","-25px","font-size","12px",3,"innerHTML"],[2,"width","100%"],["type","checkbox",3,"ngModel","ngModelChange","change"],["SupplierwiseItem",""],[2,"font-weight","bold","width","90%"],["loadAllItems",""],["showWarehouseWiseStock",""]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Y,38,15,"div",2),e.qZA()()),2&i&&(e.ekj("modal-sticky-hide",!t.isActive),e.xp6(1),e.Q6J("ngStyle",1==t.multipleSelect?e.DdM(4,j):null),e.xp6(1),e.Q6J("ngIf",t.popupsettings))},dependencies:[a.mk,a.sg,a.O5,a.PC,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,p.oH,u.LS,a.H9,a.uU,u._s],styles:[".modal-content[_ngcontent-%COMP%] {\n    padding: 1px;\n    margin: 0px;\n    float: right;\n    width: auto;\n  }\n\n  tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n    background-color: #f3f5f4;\n    cursor: pointer;\n  }\n\n  tr[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .selected-row[_ngcontent-%COMP%] {\n    background-color: #ced6d3 !important;\n  }\n\n  .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    line-height: 20px !important;\n    padding: 5px 10px;\n    vertical-align: middle;\n  }\n\n  .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n    line-height: 12px !important;\n  }\n\n  .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n    text-align: left !important;\n    padding: 0px 0px 0px 11px !important;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: -10px 0px 10px 1px #aaaaaa;\n  }\n\n  .modal-content-main-area[_ngcontent-%COMP%] {\n    max-height: 100%;\n    height: 100%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  .modal-content-summary-area[_ngcontent-%COMP%] {\n    max-height: 20%;\n    height: 20%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  .ellipsis[_ngcontent-%COMP%] {\n    \n    white-space: nowrap;\n  }\n\n  .selecteditem[_ngcontent-%COMP%] {\n    display: block;\n    height: 339px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    margin-right: 8px;\n  }\n\n  .tablehead[_ngcontent-%COMP%], .selecteditem[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    \n  }\n\n  fieldset[_ngcontent-%COMP%] {\n    border: 2px solid #d9d9d9;\n    width: 96%;\n    margin-top: 5px;\n    height: 26rem;\n  }"]}),(0,g.gn)([function V(n){return function(i,t,o){const l=o.value,s=`__timeout__${t}`;return o.value=function(...r){clearTimeout(this[s]),this[s]=setTimeout(()=>l.apply(this,r),n)},o}}(10)],_.prototype,"updown",null);class ${constructor(){this.columns=[],this.defaultFilterIndex=0,this.showActionButton=!1,this.actionKeys=[],this.filterSupplierWise=!1,this.filterWarehouseWiseStock=!1,this.showLoadAllProductsOption=!1,this.multiSelect=!1,this.userWiseWarehouseOnly=!0}}}}]);