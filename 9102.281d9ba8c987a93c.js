"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[9102],{19102:(S,d,l)=>{l.d(d,{QE:()=>c,sG:()=>k});var h=l(64762),t=l(66274),u=l(68277),g=l(42326),m=l(53074),f=l(87584),x=l(67297),C=l(48083),a=l(92752),_=l(72533);const w=["inputBox"];function P(n,i){if(1&n&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("value",e.key),t.xp6(1),t.Oqu(e.title)}}function v(n,i){if(1&n&&(t.ynx(0),t.YNc(1,P,2,2,"option",20),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.noSearch)}}function T(n,i){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.title)}}function b(n,i){if(1&n&&(t.ynx(0),t.YNc(1,T,2,1,"th",2),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function M(n,i){if(1&n&&(t.TgZ(0,"div",27),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit,o=t.oxw().$implicit;t.s9C("title",o[e.key]),t.xp6(1),t.hij(" ",o[e.key]," ")}}function O(n,i){if(1&n&&(t.TgZ(0,"div",27),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=t.oxw(2).$implicit,o=t.oxw().$implicit;t.s9C("title",o[e.key]),t.xp6(1),t.hij(" ",t.Dn7(2,2,o[e.key],"INR"," ")," ")}}const N=function(n){return{"text-align":n}};function I(n,i){if(1&n&&(t.TgZ(0,"td",25),t.YNc(1,M,2,2,"div",26),t.YNc(2,O,3,6,"div",26),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(3,N,e.alignment)),t.xp6(1),t.Q6J("ngIf",!e.pipe),t.xp6(1),t.Q6J("ngIf",!e.pipe)}}function y(n,i){if(1&n&&(t.ynx(0),t.YNc(1,I,3,5,"td",24),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",23),t.NdJ("dblclick",function(){const r=t.CHM(e).$implicit,p=t.oxw(3);return t.KtG(p.doubleClick(r))})("click",function(){const r=t.CHM(e).index,p=t.oxw(3);return t.KtG(p.singleClick(r))}),t.YNc(1,y,2,1,"ng-container",11),t.qZA()}if(2&n){const e=i.index,o=t.oxw(3);t.ekj("selected-row",o.selectedRowIndex==e),t.xp6(1),t.Q6J("ngForOf",o.popupsettings.columns)}}const L=function(n,i,e,o){return{id:n,itemsPerPage:i,currentPage:e,totalItems:o}};function R(n,i){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,U,2,3,"tr",22),t.ALo(2,"paginate"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.itemList,t.l5B(4,L,e.tabindex,e.pageSize,e.pageNumber,e.totalItems)))}}function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",28)(1,"pagination-controls",29),t.NdJ("pageChange",function(s){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onPageChange(s))}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("id",e.tabindex)}}function D(n,i){if(1&n&&t._UZ(0,"div",30),2&n){const e=t.oxw(2);t.Q6J("innerHTML",e.summary,t.oJD)}}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"div",3)(3,"h4",4),t._uU(4),t.qZA(),t.TgZ(5,"a",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.hide())}),t.TgZ(6,"span",6),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div")(9,"div",7)(10,"div",8)(11,"select",9),t.NdJ("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.filterOption=s)})("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.triggerSearch(s))}),t.TgZ(12,"option",10),t._uU(13,"Select Filter Option"),t.qZA(),t.YNc(14,v,2,1,"ng-container",11),t.qZA()(),t.TgZ(15,"div",8)(16,"input",12,13),t.NdJ("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.filterValue=s)})("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.triggerSearch(s))}),t.qZA()()()(),t.TgZ(18,"div",14)(19,"table",15)(20,"thead")(21,"tr",16),t.YNc(22,b,2,1,"ng-container",11),t.qZA()(),t.YNc(23,R,3,9,"tbody",2),t.qZA(),t.TgZ(24,"div",17),t.YNc(25,A,2,1,"div",18),t.qZA()()(),t.YNc(26,D,1,1,"div",19),t.qZA()}if(2&n){const e=t.oxw();t.xp6(4),t.hij(" ",e.popupsettings.title," "),t.xp6(7),t.Q6J("ngModel",e.filterOption),t.xp6(3),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(2),t.Q6J("ngModel",e.filterValue),t.xp6(6),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(1),t.Q6J("ngIf",e.itemList.length),t.xp6(2),t.Q6J("ngIf",e.itemList.length),t.xp6(1),t.Q6J("ngIf",e.summary)}}class c extends u.nd{constructor(i,e,o,s,r){super(i),this.injector=i,this.masterService=e,this._trnMainService=o,this._authservice=s,this.route=r,this.requestUrl="",this.isActive=!1,this.itemList=[],this.selectedRowIndex=0,this.tabindex="list",this.billTo="",this.isForCancelOrder=!1,this.onPopUpClose=new t.vpe,this.onItemDoubleClick=new t.vpe,this.isCustomerProfileData=new t.vpe}ngOnInit(){this.usersetting=this._authService.getSetting()}show(i="",e=!1){console.log("popupsettings",this.popupsettings),!0===this._trnMainService.customerEvent&&setTimeout(()=>{this.inputBox.nativeElement.focus()},500),this.summary=null,this.billTo=i,this.isForCancelOrder=e,this.itemList=[],this.isActive=!0,this.selectedRowIndex=0,setTimeout(()=>{this.setFilterOption(),this.refreshPage(),this.refresh()},100)}setFilterOption(){if(console.log("setfilter option",this.popupsettings),this.popupsettings&&this.popupsettings.columns.length){const i=this.popupsettings.defaultFilterIndex?this.popupsettings.defaultFilterIndex:0;if(this.popupsettings.columns.length<=i)return;this.filterValue.setValue(this.popupsettings.useDefinefilterValue),this.filterOption=this.popupsettings.columns[i].key}}getData(){this.summary=null,this.selectedRowIndex=0;let e=`${this.apiUrl}${this.popupsettings.apiEndpoints}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`;return this.billTo&&""!==this.billTo&&null!=this.billTo&&void 0!==this.billTo&&(e+=`&billTo=${this.billTo}`),this.isForCancelOrder&&(e+=`&isForCancelOrder=${this.isForCancelOrder}`),console.log("apiUrl",e),this.requestUrl=this.getFilterOption(e,1==this._trnMainService.userSetting.ProductSearchMode?1:0),this._http.get(this.requestUrl).subscribe(o=>{this.totalItems=o?o.totalCount:0,this.itemList=o?o.data:[],this._trnMainService.TrnMainObj.VoucherType===g.Km.BatchAdjustment&&(console.log("itemList",this.itemList),this.itemList=this.itemList.filter(s=>1==s.HASVARIANT)),this.checkReturnValue(),this.itemList.forEach(function(s){null!=s.TRNDATE&&void 0!==s.TRNDATE&&(s.TRNDATE=s.TRNDATE.toString().substring(0,10)),null!=s.DATE&&void 0!==s.DATE&&(s.DATE=s.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)})}checkReturnValue(){"B2C"===this.usersetting.CompanyType&&14===this._trnMainService.TrnMainObj.VoucherType&&"cash"===this._trnMainService.TrnMainObj.TRNMODE&&this.isCustomerProfileData.emit(0!==this.itemList.length)}hide(){this.itemList=[],this.pageNumber=1,this.totalItems=0,this.isActive=!1}triggerSearch(){null==this.filterOption||void 0===this.filterOption||""===this.filterOption||null==this.filterValue.value||void 0===this.filterValue.value||""===this.filterValue.value||(this.refreshPage(),this.refresh())}singleClick(i){this.selectedRowIndex=i,this.summary=this.itemList[i].itemSummary}doubleClick(i){this.onItemDoubleClick.emit(i),this.hide()}updown(i){if(!this.isActive)return!0;if("ArrowDown"===i.code)i.preventDefault(),this.selectedRowIndex++,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),this.calculateTotalPages(),this.selectedRowIndex===this.itemList.length&&this.pageNumber<this.totalPages?(this.pageNumber=this.pageNumber+1,this.refresh(),this.selectedRowIndex=0,this.itemListClosed()):this.selectedRowIndex===this.itemList.length&&this.pageNumber===this.totalPages&&(this.selectedRowIndex=this.itemList.length-1);else if("ArrowUp"===i.code)i.preventDefault(),this.selectedRowIndex--,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),-1===this.selectedRowIndex&&this.pageNumber>1?(this.pageNumber=this.pageNumber-1,this.refresh(),this.selectedRowIndex=this.itemList.length-1,this.itemListClosed()):-1===this.selectedRowIndex&&1===this.pageNumber&&(this.selectedRowIndex=0);else if(("Enter"===i.code||"NumpadEnter"===i.code)&&this.selectedRowIndex>=0&&this.selectedRowIndex<this.itemList.length)i.preventDefault(),"BARCODE"===this.filterOption||(this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]),this.hide(),this.itemListClosed());else if("Escape"===i.code&&"addsientry"!==this.route.snapshot.url[0].path)i.preventDefault(),this.hide(),this.itemListClosed();else if("ArrowRight"===i.code){if(i.preventDefault(),this.calculateTotalPages(),this.pageNumber>=this.totalPages)return void(this.pageNumber=this.totalPages);this.selectedRowIndex=0,this.pageNumber=this.pageNumber+1,this.refresh()}else if("ArrowLeft"===i.code){if(i.preventDefault(),this.pageNumber<=1)return void(this.pageNumber=1);this.selectedRowIndex=0,this.pageNumber=this.pageNumber-1,this.refresh()}}itemListClosed(){this.onPopUpClose.emit()}ngOnChanges(i){this.popupsettings=i.popupsettings.currentValue}}c.\u0275fac=function(i){return new(i||c)(t.Y36(t.zs3),t.Y36(m.P),t.Y36(f.p),t.Y36(x.e),t.Y36(C.gz))},c.\u0275cmp=t.Xpm({type:c,selectors:[["new-generic-popup-grid"]],viewQuery:function(i,e){if(1&i&&t.Gf(w,5),2&i){let o;t.iGM(o=t.CRH())&&(e.inputBox=o.first)}},hostBindings:function(i,e){1&i&&t.NdJ("keydown",function(s){return e.updown(s)},!1,t.evT)},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onItemDoubleClick:"onItemDoubleClick",isCustomerProfileData:"isCustomerProfileData"},features:[t.qOj,t.TTD],decls:3,vars:3,consts:[[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","20px"],[1,"modal-content","modal-content-main-area"],[4,"ngIf"],[1,"modal-header",2,"background","#c0c0c0"],[1,"modal-title",2,"padding-left","6px"],["aria-label","Close",1,"close",2,"cursor","pointer",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-md-6",2,"margin","4px 0px"],[2,"width","100%",3,"ngModel","ngModelChange"],["value","","selected",""],[4,"ngFor","ngForOf"],["type","text","placeholder","Enter keyword to search",2,"width","100%",3,"ngModel","ngModelChange"],["inputBox",""],[1,"col-md-12","table-scroll"],[1,"table"],[2,"background","#81DAAC"],[1,"row","clearfix",2,"float","center","margin","4px 0px"],["class","col-md-12","style","width:100%",4,"ngIf"],["style","margin-left: 25px ",3,"innerHTML",4,"ngIf"],[3,"value",4,"ngIf"],[3,"value"],["class","highlight","title","double click for detail view",3,"selected-row","dblclick","click",4,"ngFor","ngForOf"],["title","double click for detail view",1,"highlight",3,"dblclick","click"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"],[3,"title",4,"ngIf"],[3,"title"],[1,"col-md-12",2,"width","100%"],["maxSize","9","directionLinks","true","autoHide","true","responsive","true","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"id","pageChange"],[2,"margin-left","25px",3,"innerHTML"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,E,27,8,"div",2),t.qZA()()),2&i&&(t.ekj("modal-sticky-hide",!e.isActive),t.xp6(2),t.Q6J("ngIf",e.popupsettings))},dependencies:[a.sg,a.O5,a.PC,_.LS,a.H9,_._s],styles:[".modal-content[_ngcontent-%COMP%] {\n\n    padding: 1px;\n    margin: 0px;\n    float: right;\n    width: 460px;\n    \n    \n    \n    \n    \n    \n  }\n\n  tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\n    background-color: #f3f5f4;\n    cursor: pointer;\n  }\n\n  tr[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .selected-row[_ngcontent-%COMP%] {\n    background-color: #ced6d3 !important;\n  }\n\n  .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\n    line-height: 20px !important;\n  }\n\n  .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\n    line-height: 5px !important;\n  }\n\n  .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child {\n    text-align: left !important;\n    padding: 0px 0px 0px 11px !important;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: -10px 0px 10px 1px #aaaaaa;\n  }\n\n  .modal-content-main-area[_ngcontent-%COMP%] {\n    max-height: 100%;\n    height: 94%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  .modal-content-summary-area[_ngcontent-%COMP%] {\n    max-height: 20%;\n    height: 20%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  .ellipsis[_ngcontent-%COMP%] {\n    \n    white-space: nowrap;\n  }"]}),(0,h.gn)([function G(n){return function(i,e,o){const s=o.value,r=`__timeout__${e}`;return o.value=function(...p){clearTimeout(this[r]),this[r]=setTimeout(()=>s.apply(this,p),n)},o}}(10)],c.prototype,"updown",null);class k{constructor(){this.columns=[],this.defaultFilterIndex=0}}}}]);