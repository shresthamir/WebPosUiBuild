"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[216],{10669:(A,y,a)=>{a.d(y,{K:()=>g,R:()=>i});var t=a(66274);let i=(()=>{class _{constructor(){}generateExcelCSVFile(U,Z,x){}}return _.\u0275fac=function(U){return new(U||_)},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})();var g=(()=>{return(_=g||(g={})).xlsx="xlsx",_.CSV="csv",g;var _})()},40216:(A,y,a)=>{a.d(y,{s:()=>_t,U:()=>ht});var t=a(66274),i=a(42326),g=a(64762),_=a(68277),S=a(28049),U=a(54395),Z=a(92340),x=a(53181),w=a(67311),c=a(92752),h=a(7587),T=a(72533);const v=["inputBox"];function C(o,l){if(1&o&&(t.TgZ(0,"option",33),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("value",e.key),t.xp6(1),t.Oqu(e.title)}}function u(o,l){if(1&o&&(t.ynx(0),t.YNc(1,C,2,2,"option",32),t.BQk()),2&o){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf",!e.noSearch)}}const b=function(o){return{"text-align":o}};function p(o,l){if(1&o&&(t.TgZ(0,"th",35),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(2,b,e.alignment)),t.xp6(1),t.Oqu(e.title)}}function m(o,l){if(1&o&&(t.ynx(0),t.YNc(1,p,2,4,"th",34),t.BQk()),2&o){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function d(o,l){1&o&&(t.TgZ(0,"th"),t._uU(1,"Action"),t.qZA())}function P(o,l){if(1&o&&(t.TgZ(0,"div",39),t._uU(1),t.qZA()),2&o){const e=t.oxw(2).$implicit,n=t.oxw().$implicit;t.s9C("title",n[e.key]),t.xp6(1),t.hij(" ",n[e.key]," ")}}function D(o,l){if(1&o&&(t.TgZ(0,"div",39),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const e=t.oxw(2).$implicit,n=t.oxw().$implicit;t.s9C("title",n[e.key]),t.xp6(1),t.hij(" ",t.Dn7(2,2,n[e.key],"INR","Rs. ")," ")}}function F(o,l){if(1&o&&(t.TgZ(0,"td",35),t.YNc(1,P,2,2,"div",38),t.YNc(2,D,3,6,"div",38),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(3,b,e.alignment)),t.xp6(1),t.Q6J("ngIf",!e.pipe),t.xp6(1),t.Q6J("ngIf",e.pipe)}}function k(o,l){if(1&o&&(t.ynx(0),t.YNc(1,F,3,5,"td",34),t.BQk()),2&o){const e=l.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function I(o,l){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"span")(2,"i",40),t.NdJ("click",function(){const r=t.CHM(e).$implicit,f=t.oxw(2).index,M=t.oxw(3);return t.KtG(M.onActionClicked(r.text,f))}),t.qZA()(),t.BQk()}if(2&o){const e=l.$implicit;t.xp6(2),t.Tol(e.icon),t.s9C("title",e.title)}}function N(o,l){if(1&o&&(t.ynx(0),t.TgZ(1,"td"),t.YNc(2,I,3,4,"ng-container",13),t.qZA(),t.BQk()),2&o){const e=t.oxw(4);t.xp6(2),t.Q6J("ngForOf",e.popupsettings.actionKeys)}}function L(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr",37),t.NdJ("dblclick",function(){const r=t.CHM(e).$implicit,f=t.oxw(3);return t.KtG(f.doubleClick(r))})("click",function(){const r=t.CHM(e).index,f=t.oxw(3);return t.KtG(f.singleClick(r))}),t.YNc(1,k,2,1,"ng-container",13),t.YNc(2,N,3,1,"ng-container",2),t.qZA()}if(2&o){const e=l.index,n=t.oxw(3);t.ekj("selected-row",n.selectedRowIndex==e),t.xp6(1),t.Q6J("ngForOf",n.popupsettings.columns),t.xp6(1),t.Q6J("ngIf",n.popupsettings.showActionButton&&n.popupsettings.actionKeys.length)}}const R=function(o,l,e,n){return{id:o,itemsPerPage:l,currentPage:e,totalItems:n}};function J(o,l){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,L,3,4,"tr",36),t.ALo(2,"paginate"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.itemList,t.l5B(4,R,e.tabindex,e.pageSize,e.pageNumber,e.totalItems)))}}function q(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",41)(1,"pagination-controls",42),t.NdJ("pageChange",function(s){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onPageChange(s))}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("id",e.tabindex)}}function V(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",43),t._uU(2),t.qZA(),t.TgZ(3,"td",44)(4,"button",45),t.NdJ("click",function(){const r=t.CHM(e).index,f=t.oxw(2);return t.KtG(f.removeItem(r))}),t._uU(5,"Remove"),t.qZA()()()}if(2&o){const e=l.$implicit;t.xp6(2),t.Oqu(e.DepartmentName)}}function Q(o,l){if(1&o&&t._UZ(0,"div",46),2&o){const e=t.oxw(2);t.Q6J("innerHTML",e.summary,t.oJD)}}function G(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"div",3)(3,"h4",4),t._uU(4),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.hide())}),t.TgZ(6,"span",6),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div",7)(9,"div",8)(10,"div",7)(11,"div",9)(12,"div",10)(13,"select",11),t.NdJ("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.filterOption=s)})("change",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.triggerSearch(s))}),t.TgZ(14,"option",12),t._uU(15,"Select Filter Option"),t.qZA(),t.YNc(16,u,2,1,"ng-container",13),t.qZA()(),t.TgZ(17,"div",14),t._UZ(18,"input",15,16),t.qZA()()(),t.TgZ(20,"div",17)(21,"table",18)(22,"thead")(23,"tr",19),t.YNc(24,m,2,1,"ng-container",13),t.YNc(25,d,2,0,"th",2),t.qZA()(),t.YNc(26,J,3,9,"tbody",2),t.qZA(),t.TgZ(27,"div",20),t.YNc(28,q,2,1,"div",21),t.qZA()()(),t.TgZ(29,"div",8)(30,"fieldset",22)(31,"div",7)(32,"h6",23),t._uU(33,"Selected Department list"),t.qZA()(),t.TgZ(34,"div",7)(35,"table",24)(36,"thead",25)(37,"tr",26)(38,"th",27),t._uU(39,"Department"),t.qZA(),t.TgZ(40,"th",28),t._uU(41,"Action"),t.qZA()()(),t.TgZ(42,"tbody",29),t.YNc(43,V,6,1,"tr",13),t.qZA()()()(),t.TgZ(44,"div",7)(45,"button",30),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.selectMultipleItem())}),t._uU(46,"OK"),t.qZA()()()()(),t.YNc(47,Q,1,1,"div",31),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.hij(" ",e.popupsettings.title," "),t.xp6(9),t.Q6J("ngModel",e.filterOption),t.xp6(3),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(2),t.Q6J("formControl",e.filterValue),t.xp6(6),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(1),t.Q6J("ngIf",e.popupsettings.showActionButton&&e.popupsettings.actionKeys.length),t.xp6(1),t.Q6J("ngIf",e.itemList.length),t.xp6(2),t.Q6J("ngIf",e.itemList.length),t.xp6(15),t.Q6J("ngForOf",e.selectedItems),t.xp6(2),t.Q6J("disabled",""==e.selectedItems),t.xp6(2),t.Q6J("ngIf",e.summary)}}class O extends _.nd{constructor(l,e,n){super(l),this.injector=l,this.dialog=e,this.alertservice=n,this.selectedItems=[],this.requestUrl="",this.isActive=!1,this.itemList=[],this.selectedRowIndex=0,this.tabindex="list",this.hideGridOnDoubleClick=!0,this.billTo="",this.tag="",this.isForCancelOrder=!1,this.onPopUpClose=new t.vpe,this.onItemDoubleClick=new t.vpe,this.onDeleteClicked=new t.vpe,this.onItemsSelected=new t.vpe}ngAfterViewInit(){this.filterValue.valueChanges.pipe((0,U.b)(500)).subscribe(l=>{l.includes("&")?this.alertservice.warning("Cannot search using Special Characters."):(this.refreshPage(),this.refresh())})}show(l="",e=!1,n="",s=!0){this.hideGridOnDoubleClick=s,setTimeout(()=>{this.inputBox.nativeElement.focus()},10),this.summary=null,this.billTo=l,this.isForCancelOrder=e,this.itemList=[],this.isActive=!0,this.selectedRowIndex=0,this.tag=n,this.selectedItems=[],setTimeout(()=>{this.setFilterOption()},100)}setFilterOption(){if(this.popupsettings&&this.popupsettings.columns.length){const l=this.popupsettings.defaultFilterIndex?this.popupsettings.defaultFilterIndex:0;if(this.popupsettings.columns.length<=l)return;this.filterValue.setValue(""),this.filterOption=this.popupsettings.columns[l].key}}getData(){this.summary=null,this.selectedRowIndex=0;let n=`${Z.N.apiUrl}${this.popupsettings.apiEndpoints}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`;return this.billTo&&""!==this.billTo&&null!=this.billTo&&void 0!==this.billTo&&(n+=`&billTo=${this.billTo}`),this.tag&&""!==this.tag&&null!=this.tag&&void 0!==this.isTableLoading&&(n+=`&tag=${this.tag}`),this.isForCancelOrder&&(n+=`&isForCancelOrder=${this.isForCancelOrder}`),this.requestUrl=this.getFilterOption(n),this._http.get(this.requestUrl).pipe((0,S.P)()).subscribe(s=>{this.totalItems=s?s.totalCount:0,this.itemList=s?s.data:[],this.itemList.forEach(function(r){null!=r.TRNDATE&&void 0!==r.TRNDATE&&(r.TRNDATE=r.TRNDATE.toString().substring(0,10)),null!=r.DATE&&void 0!==r.DATE&&(r.DATE=r.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)})}hide(){this.itemList=[],this.pageNumber=1,this.totalItems=0,this.isActive=!1}triggerSearch(){null==this.filterOption||void 0===this.filterOption||""===this.filterOption||this.filterValue.setValue("")}singleClick(l){this.selectedRowIndex=l,this.summary=this.itemList[l].itemSummary}doubleClick(l){console.log("double clicked item",l);let e=this.selectedItems.filter(n=>n.DepartmentName==l.DepartmentName);console.log("duplicate",e),!(e.length>0)&&(this.selectedItems.push(l),console.log("selected item lisr",this.selectedItems))}selectMultipleItem(){let l="";this.selectedItems.forEach(s=>{l+=`${s.DepartmentName},`});let n={DepartmentName:l.substring(0,l.length-1)};this.onItemsSelected.emit(n),this.hideGridOnDoubleClick&&this.hide()}updown(l){if(!this.isActive)return!0;if("ArrowDown"===l.code)l.preventDefault(),this.selectedRowIndex++,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),this.calculateTotalPages(),this.selectedRowIndex===this.itemList.length&&this.pageNumber<this.totalPages?(this.pageNumber=this.pageNumber+1,this.refresh(),this.selectedRowIndex=0,this.itemListClosed()):this.selectedRowIndex===this.itemList.length&&this.pageNumber===this.totalPages&&(this.selectedRowIndex=this.itemList.length-1);else if("ArrowUp"===l.code)l.preventDefault(),this.selectedRowIndex--,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),-1===this.selectedRowIndex&&this.pageNumber>1?(this.pageNumber=this.pageNumber-1,this.refresh(),this.selectedRowIndex=this.itemList.length-1,this.itemListClosed()):-1===this.selectedRowIndex&&1===this.pageNumber&&(this.selectedRowIndex=0);else if(("Enter"===l.code||"NumpadEnter"===l.code)&&this.selectedRowIndex>=0&&this.selectedRowIndex<this.itemList.length)l.preventDefault(),"BARCODE"===this.filterOption||(this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]),this.hide(),this.itemListClosed());else if("Escape"===l.code)l.preventDefault(),this.hide(),this.itemListClosed();else if("ArrowRight"===l.code){if(l.preventDefault(),this.calculateTotalPages(),this.pageNumber>=this.totalPages)return void(this.pageNumber=this.totalPages);this.selectedRowIndex=0,this.pageNumber=this.pageNumber+1,this.refresh()}else if("ArrowLeft"===l.code){if(l.preventDefault(),this.pageNumber<=1)return void(this.pageNumber=1);this.selectedRowIndex=0,this.pageNumber=this.pageNumber-1,this.refresh()}}itemListClosed(){this.onPopUpClose.emit()}ngOnChanges(l){this.popupsettings=l.popupsettings.currentValue}removeItem(l){this.selectedItems.splice(l,1)}onActionClicked(l,e){if(""!==l&&null!=l&&void 0!==l){const n=l.toLowerCase();switch(n){case"delete":case"cancel":confirm(`Are you sure to ${n} this row ?.`)&&this.onDeleteClicked.emit(this.itemList[e])}}}}O.\u0275fac=function(l){return new(l||O)(t.Y36(t.zs3),t.Y36(x.uw),t.Y36(w.c))},O.\u0275cmp=t.Xpm({type:O,selectors:[["multiselect-department-grid"]],viewQuery:function(l,e){if(1&l&&t.Gf(v,5),2&l){let n;t.iGM(n=t.CRH())&&(e.inputBox=n.first)}},hostBindings:function(l,e){1&l&&t.NdJ("keydown",function(s){return e.updown(s)},!1,t.evT)},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onItemDoubleClick:"onItemDoubleClick",onDeleteClicked:"onDeleteClicked",onItemsSelected:"onItemsSelected"},features:[t.qOj,t.TTD],decls:3,vars:3,consts:[[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px"],[1,"modal-content","modal-content-main-area"],[4,"ngIf"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"padding-left","5px","font-size","1.2rem"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-md-6","pd0"],[1,"col-md-12","row"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding","0px"],[2,"width","100%",3,"ngModel","ngModelChange","change"],["value","","selected",""],[4,"ngFor","ngForOf"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding-right","0px"],["type","text","placeholder","Enter keyword to search",2,"width","100%",3,"formControl"],["inputBox",""],[1,"col-md-12","table-scroll"],[1,"table"],[2,"background","#7ed0ff"],[1,"row",2,"float","center","margin","4px 0px"],["class","col-md-12","style","width:100%;margin-top: -1.8rem;",4,"ngIf"],[2,"border","2px solid #d9d9d9","width","96%","margin-top","5px","height","26rem"],[2,"text-align","center"],[1,"table","table-striped"],[1,"tablehead"],[2,"position","sticky","top","0","line-height","1rem"],["scope","col",2,"width","15%"],["scope","col",2,"width","10%"],[1,"selecteditem"],[1,"btn","btn-info","btn-sm",3,"disabled","click"],["style","margin-left: 25px; margin-top: -25px;\n        font-size: 12px;",3,"innerHTML",4,"ngIf"],[3,"value",4,"ngIf"],[3,"value"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"],["class","highlight","title","double click for detail view",3,"selected-row","dblclick","click",4,"ngFor","ngForOf"],["title","double click for detail view",1,"highlight",3,"dblclick","click"],[3,"title",4,"ngIf"],[3,"title"],[3,"title","click"],[1,"col-md-12",2,"width","100%","margin-top","-1.8rem"],["maxSize","9","directionLinks","true","autoHide","true","responsive","true","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",2,"margin-left","6rem","margin-bottom","0","font-size","0.8rem",3,"id","pageChange"],[2,"width","15%"],[2,"width","10%"],[1,"btn","btn-danger",2,"line-height","8px","font-size","10px","padding","4px",3,"click"],[2,"margin-left","25px","margin-top","-25px","font-size","12px",3,"innerHTML"]],template:function(l,e){1&l&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,G,48,11,"div",2),t.qZA()()),2&l&&(t.ekj("modal-sticky-hide",!e.isActive),t.xp6(2),t.Q6J("ngIf",e.popupsettings))},dependencies:[c.sg,c.O5,c.PC,h.YN,h.Kr,h.Fj,h.EJ,h.JJ,h.On,h.oH,T.LS,c.H9,T._s],styles:[".modal-content[_ngcontent-%COMP%] {\n      padding: 1px;\n      margin: 0px;\n      float: right;\n      width: 100%;\n    }\n  \n    tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\n      background-color: #f3f5f4;\n      cursor: pointer;\n    }\n  \n    tr[_ngcontent-%COMP%] {\n      font-size: 11px;\n    }\n  \n    .selected-row[_ngcontent-%COMP%] {\n      background-color: #ced6d3 !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\n      line-height: 24px !important;\n      padding: 5px 10px;\n      vertical-align: middle;\n    }\n  \n    .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\n      line-height: 5px !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child {\n      text-align: left !important;\n      padding: 0px 0px 0px 11px !important;\n    }\n  \n    .modal-content[_ngcontent-%COMP%] {\n      box-shadow: -10px 0px 10px 1px #aaaaaa;\n    }\n  \n    .modal-content-main-area[_ngcontent-%COMP%] {\n      max-height: 100%;\n      height: 100%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .modal-content-summary-area[_ngcontent-%COMP%] {\n      max-height: 20%;\n      height: 20%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .ellipsis[_ngcontent-%COMP%] {\n      \n      white-space: nowrap;\n    }\n\n    .selecteditem[_ngcontent-%COMP%]{\n        display: block;\n    height: 50vh;\n    overflow: auto;\n    }\n\n    .tablehead[_ngcontent-%COMP%], .selecteditem[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\n        display: table;\n    width: 100%;\n    table-layout: fixed;\n    \n    }"]}),(0,g.gn)([function K(o){return function(l,e,n){const s=n.value,r=`__timeout__${e}`;return n.value=function(...f){clearTimeout(this[r]),this[r]=setTimeout(()=>s.apply(this,f),o)},n}}(10)],O.prototype,"updown",null);class Y{constructor(){this.columns=[],this.defaultFilterIndex=0,this.showActionButton=!1,this.actionKeys=[]}}var H=a(18488),j=a(14970),z=a(87584),B=a(53074),W=a(10669),$=a(11309);const X=["fileSelect"],tt=["multiselectDepartmentGrid"],et=["ManualStockEntryExcelVisualization"];function it(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.importConfig())}),t.TgZ(1,"span",28),t._UZ(2,"i",29),t.qZA(),t._uU(3,"Upload "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("disabled",!e.fileList)}}function nt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.importConfigAttributes())}),t.TgZ(1,"span",28),t._UZ(2,"i",29),t.qZA(),t._uU(3,"Upload Variant "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("disabled",!e.fileList)}}function ot(o,l){if(1&o&&(t.TgZ(0,"div")(1,"h5"),t._uU(2,"Note"),t.qZA(),t._UZ(3,"div",30),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("innerHTML",e.popupsettings.note,t.oJD)}}function lt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"p"),t._uU(1," Download the "),t.TgZ(2,"a",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(3);return t.KtG(s.downloadSample())}),t._uU(3,"sample template"),t.qZA(),t._uU(4," to get started. "),t.qZA()}}function st(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,lt,5,0,"p",2),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.popupsettings.sampleFileUrl)}}function rt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"p"),t._uU(1," Download the variant "),t.TgZ(2,"a",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(3);return t.KtG(s.downloadSampleForVariant())}),t._uU(3,"sample template"),t.qZA(),t._uU(4," to get started. "),t.qZA()}}function at(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,rt,5,0,"p",2),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.popupsettings.departmentWiseVariant)}}function pt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",32)(1,"input",33),t.NdJ("change",function(s){t.CHM(e);const r=t.oxw(2);return t.KtG(r.ShowVariantFileUploader=s.target.checked?1:0)})("ngModelChange",function(s){t.CHM(e);const r=t.oxw(2);return t.KtG(r.ShowVariantFileUploader=s)}),t.qZA(),t.TgZ(2,"label",34),t._uU(3,"Upload Variant Excel file"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngModel",e.ShowVariantFileUploader)}}function ct(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&o){const e=l.$implicit,n=l.index;t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.Oqu(e)}}function dt(o,l){if(1&o&&(t.TgZ(0,"table",35)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"SN."),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Filename"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,ct,5,2,"tr",36),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(8),t.Q6J("ngForOf",e.selectedFileNames)}}function ut(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"div",6)(3,"h4",7),t._uU(4),t.qZA(),t.TgZ(5,"button",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.popupClose())}),t.TgZ(6,"span",9),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div",10),t._UZ(9,"br"),t.TgZ(10,"div",11)(11,"div",12),t.NdJ("dragover",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.onDragOver(s))})("drop",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.onDrop(s))})("click",function(){t.CHM(e);const s=t.MAs(27);return t.KtG(s.click())}),t.TgZ(12,"b"),t._uU(13," Choose a File"),t.qZA(),t._uU(14," or Drag it Here. "),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"div",13),t._UZ(17,"input",14),t.TgZ(18,"span",15)(19,"button",16),t._UZ(20,"span",17),t._uU(21," Clear "),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"span",19),t.TgZ(24,"span",20),t._uU(25,"Browse"),t.qZA(),t.TgZ(26,"input",21,22),t.NdJ("change",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.onFileChange(s))}),t.qZA()(),t.YNc(28,it,4,1,"button",23),t.YNc(29,nt,4,1,"button",23),t.qZA()(),t._UZ(30,"br"),t.YNc(31,ot,4,1,"div",2),t.YNc(32,st,2,1,"div",2),t.YNc(33,at,2,1,"div",2),t.YNc(34,pt,4,1,"div",24),t.TgZ(35,"div",25),t.YNc(36,dt,9,1,"table",26),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.hij(" ",e.popupsettings.title," "),t.xp6(7),t.ekj("file-dropover-continue",e.dragging),t.xp6(15),t.uIk("accept",e.popupsettings.acceptFormat),t.xp6(2),t.Q6J("ngIf",0==e.ShowVariantFileUploader),t.xp6(1),t.Q6J("ngIf",1==e.ShowVariantFileUploader),t.xp6(2),t.Q6J("ngIf",e.popupsettings.note),t.xp6(1),t.Q6J("ngIf",0==e.ShowVariantFileUploader),t.xp6(1),t.Q6J("ngIf",1==e.ShowVariantFileUploader),t.xp6(1),t.Q6J("ngIf",e.popupsettings.uploadDepartmentWiseVariant),t.xp6(2),t.Q6J("ngIf",e.selectedFileNames.length)}}function mt(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",37)(2,"div",38)(3,"div",39)(4,"h5",40),t._uU(5,"Department Selection"),t.qZA(),t.TgZ(6,"button",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.closeDepartmentModal())}),t.TgZ(7,"span",9),t._uU(8,"\xd7"),t.qZA()()(),t.TgZ(9,"div",41)(10,"div",42)(11,"div",43)(12,"label",44),t._uU(13,"Department Name :"),t.qZA()(),t.TgZ(14,"div",45)(15,"input",46),t.NdJ("ngModelChange",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.departmentSelectObj.DEPARTMENTNAME=s)})("keydown.enter",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.DepartmentEnterCommand(s))})("keydown.Tab",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.DepartmentEnterCommand(s))})("keyup",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.DepartmentEnterCommand(s))})("keypress",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.keyPress(s))}),t.qZA()()()(),t.TgZ(16,"div",47)(17,"div",48)(18,"span",49)(19,"strong"),t._uU(20,"Note:"),t.qZA(),t._uU(21," Please select the department to download respective sample excel."),t.qZA()()()()()()}if(2&o){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.departmentSelectObj.DEPARTMENTNAME)}}let ht=(()=>{class o{constructor(e,n,s,r,f,M){this.fileImportService=e,this.alertService=n,this.loadingService=s,this._trnMainService=r,this.masterService=f,this.excelService=M,this.selectedFileNames=[],this.isActive=!1,this.dragging=!1,this.doUploadFile=!0,this.TrnMainObj={},this.onPopUpClose=new t.vpe,this.onUploaded=new t.vpe,this.showDepartmentSelectionPopUp=!1,this.departmentSelectObj={DEPARTMENTNAME:""},this.listForDepartment=[],this.multiselectPopupSettings=new Y,this.ShowVariantFileUploader=0,this.items=[],this.fileList=null,this.TrnMainObj=r.TrnMainObj,this.voucherType=this.TrnMainObj.VoucherType}onFileChange(e){this.fileList=e.target.files,this.setSelectedFileNames()}setSelectedFileNames(){if(this.selectedFileNames=[],null!=this.fileList)for(let e=0;e<this.fileList.length;e++)this.selectedFileNames.push(this.fileList[e].name)}deleteSelectedItem(){this.setSelectedFileNames()}onDragOver(e){this.dragging=!0,e.preventDefault()}onDrop(e){this.dragging=!1,this.fileList=e.dataTransfer.files,this.setSelectedFileNames(),e.preventDefault()}clearFile(){this.fileList=null}importConfig(){if(null==this.fileList||0==this.fileList.length)return void this.alertService.info("Please Select File.");let e=new FormData;for(let n=0;n<this.fileList.length;n++){let s=this.fileList[n];e.append(`file_${n}`,s,s.name)}this.doUploadFile?(this.loadingService.show("Uploading. Please Wait..."),this.fileImportService.importSelectedFiles(this.popupsettings.uploadEndpoints,e).subscribe(n=>{this.loadingService.hide(),this.onUploaded.emit(n),this.hide(),this._trnMainService.TrnMainObj.VoucherType==i.Km.ManualstockEntry&&"ok"==n.status&&this.ManualStockEntryExcelVisualization.show(n.result.result2,n.result.RefNo,this._trnMainService.TrnMainObj.Mode),"error"==n.status?(this.loadingService.hide(),this.hide()):(this.alertService.info(n.result),this.loadingService.hide(),this.hide())},n=>{this.alertService.info(n),this.loadingService.hide(),this.onUploaded.emit(null)})):this.onUploaded.emit(this.fileList)}importConfigAttributes(){if(null==this.fileList||0==this.fileList.length)return void this.alertService.info("Please Select File.");let e=new FormData;for(let n=0;n<this.fileList.length;n++){let s=this.fileList[n];e.append(`file_${n}`,s,s.name)}this.doUploadFile?(this.loadingService.show("Uploading. Please Wait..."),this.fileImportService.importSelectedFiles(this.popupsettings.uploadEndpointsForVariant,e).subscribe(n=>{this.loadingService.hide(),this.onUploaded.emit(n),this.hide(),this.ShowVariantFileUploader=0,"error"==n.status&&(this.loadingService.hide(),this.hide(),this.ShowVariantFileUploader=0)},n=>{this.alertService.info(n),this.loadingService.hide(),this.onUploaded.emit(null)})):this.onUploaded.emit(this.fileList)}downloadSample(){this.loadingService.show("Downloading Sample. Please Wait...");let e=null==this.popupsettings.filename||""==this.popupsettings.filename?"SampleFile":this.popupsettings.filename,n=null==this.popupsettings.acceptFormat||""==this.popupsettings.acceptFormat?".csv":this.popupsettings.acceptFormat;this.fileImportService.downloadSampleFile(this.popupsettings.sampleFileUrl,e).subscribe(s=>{let r=new Blob([s],{type:"text/json; charset=utf-8"});window.URL.createObjectURL(r);const M=document.createElement("a");M.href=URL.createObjectURL(r),M.download=`${e}${n}`,document.body.appendChild(M),M.click(),this.loadingService.hide()},s=>{this.alertService.info(s),this.loadingService.hide()})}downloadSampleForVariant(){this.selectDepartment()}downloadFile(e){const n=document.createElement("a");n.href=URL.createObjectURL(e.content),n.download=e.filename,document.body.appendChild(n),n.click()}show(e=!0){this.fileSelect.nativeElement.value=null,this.selectedFileNames=[],this.fileList=null,this.isActive=!0,this.doUploadFile=e}hide(){this.fileSelect.nativeElement.value=null,this.isActive=!1}popupClose(){this.onPopUpClose.emit(),this.hide(),this.closeDepartmentModal(),this.ShowVariantFileUploader=0}DepartmentEnterCommand(e){this.getDepartmentList(),this.multiselectDepartmentGrid.show()}getDepartmentList(){this.multiselectPopupSettings=this.masterService.getGenericGridPopUpSettings("DepartmentList")}onMultiItemSelected(e){console.log("group mulitple selected",e),this.departmentSelectObj.DEPARTMENTNAME=e.DepartmentName,this.items=e.DepartmentName.split(","),this.items.forEach(n=>{this.listForDepartment.push({departmentName:n})}),console.log(this.items,this.listForDepartment),this.downloadVariantExcelSample(this.items)}selectDepartment(){this.showDepartmentSelectionPopUp=!0}closeDepartmentModal(){this.showDepartmentSelectionPopUp=!1,this.departmentSelectObj.DEPARTMENTNAME=""}downloadVariantExcelSample(e){this.loadingService.show("Downloading Sample. Please Wait..."),this.fileImportService.downloadSampleExcelforPIImport(e).subscribe(s=>{let r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});var M=URL.createObjectURL(r),E=document.createElement("a");E.href=M,E.download="PI Import Sample.xlsx",E.click(),this.loadingService.hide(),this.closeDepartmentModal()},s=>{this.alertService.info(s),this.loadingService.hide()})}ngOnChanges(e){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(H.G),t.Y36(w.c),t.Y36(j.V),t.Y36(z.p),t.Y36(B.P),t.Y36(W.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["file-uploader-popup"]],viewQuery:function(e,n){if(1&e&&(t.Gf(X,5),t.Gf(tt,5),t.Gf(et,5)),2&e){let s;t.iGM(s=t.CRH())&&(n.fileSelect=s.first),t.iGM(s=t.CRH())&&(n.multiselectDepartmentGrid=s.first),t.iGM(s=t.CRH())&&(n.ManualStockEntryExcelVisualization=s.first)}},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onUploaded:"onUploaded"},features:[t.TTD],decls:8,vars:5,consts:[[1,"modal-sticky",2,"display","block","padding","0px"],[1,"modal-content","modal-content-main-area"],[4,"ngIf"],[3,"popupsettings","onItemsSelected"],["multiselectDepartmentGrid",""],["ManualStockEntryExcelVisualization",""],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"text-align","center"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"upload-area","container"],[1,"file-upload-area"],["id","drop-zone",1,"upload-drop-zone",3,"dragover","drop","click"],[1,"input-group","image-preview"],["placeholder","","type","text","disabled","disabled","name","selectedfiles",1,"form-control","image-preview-filename",2,"display","none"],[1,"input-group-btn"],["type","button",1,"btn","btn-default","image-preview-clear",2,"display","none"],[1,"glyphicon","glyphicon-remove"],[1,"btn","btn-info","image-preview-input",2,"margin-right","5px"],[1,"glyphicon","glyphicon-folder-open"],[1,"image-preview-input-title"],["type","file","accept",".csv, .xlsx","name","input-file-preview","ng-multiple","popupsettings.allowMultiple",3,"change"],["fileSelect",""],["type","button","class","btn btn-labeled btn-info",3,"disabled","click",4,"ngIf"],["style","margin-top: -24px;",4,"ngIf"],[2,"height","90px","overflow-y","auto"],["class","table",4,"ngIf"],["type","button",1,"btn","btn-labeled","btn-info",3,"disabled","click"],[1,"btn-label"],[1,"glyphicon","glyphicon-upload"],[3,"innerHTML"],[2,"cursor","pointer","color","#1b6ed6",3,"click"],[2,"margin-top","-24px"],["type","checkbox",3,"ngModel","change","ngModelChange"],[2,"width","50%"],[1,"table"],[4,"ngFor","ngForOf"],[1,"modal-sticky",2,"display","block","padding","0px","margin-top","2.5rem","margin-bottom","20px","margin-right","0.2rem","width","56%"],[1,"modal-content","modal-content-main-area",2,"width","70%"],[1,"modal-header",2,"padding","0px","background","#c0c0c0"],[1,"modal-title",2,"padding-left","5px"],[1,"modal-body"],[1,"form-group","row",2,"margin","0.5rem"],[1,"col-md-4"],[2,"width","90%"],[1,"col"],["type","text","placeholder","Press Enter or Tab for Department List",1,"form-control","input-text",2,"background","white",3,"ngModel","ngModelChange","keydown.enter","keydown.Tab","keyup","keypress"],[1,"modal-footer",2,"justify-content","flex-start"],[1,"col-11"],[2,"font-size","12px"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,ut,37,11,"div",2),t.qZA()(),t.YNc(3,mt,22,1,"div",2),t.TgZ(4,"multiselect-department-grid",3,4),t.NdJ("onItemsSelected",function(r){return n.onMultiItemSelected(r)}),t.qZA(),t._UZ(6,"app-manual-stock-entry-excel-visualization",null,5)),2&e&&(t.ekj("modal-sticky-hide",!n.isActive),t.xp6(2),t.Q6J("ngIf",n.popupsettings),t.xp6(1),t.Q6J("ngIf",n.showDepartmentSelectionPopUp),t.xp6(1),t.Q6J("popupsettings",n.multiselectPopupSettings))},dependencies:[c.sg,c.O5,h.Fj,h.Wl,h.JJ,h.On,O,$.L],styles:['.modal-content[_ngcontent-%COMP%] {\n    padding: 1px;\n    margin: 0px;\n    float: right;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: -10px 0px 10px 1px #aaaaaa;\n  }\n\n  .modal-content-summary-area[_ngcontent-%COMP%] {\n    max-height: 20%;\n    height: 20%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  \n  .upload-drop-zone[_ngcontent-%COMP%] {\n    height: 80px;\n    border-width: 2px;\n    margin-bottom: 0px;\n  }\n\n  \n  .upload-drop-zone[_ngcontent-%COMP%] {\n    color: #c7dadf;\n    border-style: solid;\n    border-color:#c7dadf;\n    border-radius: 2px;\n    line-height: 75px;\n    text-align: center;\n    cursor: pointer;\n  }\n\n  .sample-download-area[_ngcontent-%COMP%] {\n    color: #ccc;\n    border-style: dashed;\n    border-color: #ccc;\n    line-height: 60px;\n    text-align: center;\n    cursor: pointer;\n  }\n\n  .upload-drop-zone.drop[_ngcontent-%COMP%] {\n    color: #222;\n    border-color: #222;\n  }\n\n  .image-preview-input[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    margin: 0px;\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n  }\n  .image-preview-input[_ngcontent-%COMP%]   input[type="file"][_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  .image-preview-input-title[_ngcontent-%COMP%] {\n    margin-left: 2px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n\n  .file-dropover-continue[_ngcontent-%COMP%] {\n    color: #1b6ed6;\n    border-style: dashed;\n    border-color: #1b6ed6;\n    background: #ded4d4;\n  }\n  .modal-sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 275px;\n    right: 20px;\n    width: 40%;\n    z-index: 9999999;\n}']}),o})();class _t{constructor(){this.allowMultiple=!1,this.acceptFormat="*",this.departmentWiseVariant=!1,this.uploadDepartmentWiseVariant=!1,this.voucherUpload=!1,this.vchrlist=[]}}},18488:(A,y,a)=>{a.d(y,{G:()=>Z});var t=a(76165),i=a(79765),g=a(66274),_=a(48083),S=a(67297),U=a(71180);let Z=(()=>{class x{constructor(c,h,T,v){this.http=c,this.activatedRoute=h,this.authService=T,this.state=v;const C=this.state.getGlobalSetting("apiUrl");C&&C.length>0&&(this.apiUrl=C)}getRequestOption(){return new t.WM({"Content-type":"application/csv",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}RequestOptionForCSV(){return{headers:new t.WM({Authorization:this.authService.getAuth().token})}}downloadSampleFile(c,h="download"){return this.http.get(this.apiUrl+`${c}`,{headers:this.getRequestOption(),responseType:"blob"})}downloadSampleExcelforPIImport(c){return this.http.post(this.apiUrl+"/downloadSampleExcelforPIImport",c,{responseType:"blob"})}cancelPhysicalStock(c){return this.http.post(`${this.apiUrl}/physicalStockCancel/${c}`,null)}importSelectedFiles(c,h){let T={status:"error",result:"error"},v=new i.xQ;return this.http.post(this.apiUrl+`${c}`,h).subscribe(C=>{v.next(C),v.unsubscribe()},C=>{T.status="error",T.result=C,v.next(T),v.unsubscribe()}),v}}return x.\u0275fac=function(c){return new(c||x)(g.LFG(t.eN),g.LFG(_.gz),g.LFG(S.e),g.LFG(U.q))},x.\u0275prov=g.Yz7({token:x,factory:x.\u0275fac}),x})()},11309:(A,y,a)=>{a.d(y,{L:()=>C});var t=a(42326),i=a(66274),g=a(18488),_=a(87584),S=a(14970),U=a(67311),Z=a(92752),x=a(88146),w=a(7587);let c=(()=>{class u{transform(p,m){if(p)return m?p.filter(d=>{const P=m.replace(/[^A-Z0-9]/gi,"").toLowerCase(),D=d.MENUCODE?d.MENUCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"",F=d.DESCA?d.DESCA.replace(/[^A-Z0-9]/gi,"").toLowerCase():"";if(-1!==D.indexOf(P)||-1!==F.indexOf(P))return d}):p}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275pipe=i.Yjl({name:"searchId",type:u,pure:!0}),u})();function h(u,b){if(1&u){const p=i.EpF();i.TgZ(0,"button",20),i.NdJ("click",function(){i.CHM(p);const d=i.oxw(2);return i.KtG(d.saveData())}),i._uU(1," Save "),i.qZA()}}function T(u,b){if(1&u&&(i.TgZ(0,"tr",21)(1,"td",21),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td",21),i._uU(6),i.qZA(),i.TgZ(7,"td",21),i._uU(8),i.qZA(),i.TgZ(9,"td",21),i._uU(10),i.qZA(),i.TgZ(11,"td",22),i._uU(12),i.qZA(),i.TgZ(13,"td",23),i._uU(14),i.qZA(),i.TgZ(15,"td",21),i._uU(16),i.qZA()()),2&u){const p=b.$implicit,m=b.index;i.xp6(2),i.hij(" ",m+1," "),i.xp6(2),i.Oqu(p.MENUCODE),i.xp6(2),i.Oqu(p.BC||p.BCODE),i.xp6(2),i.Oqu(p.DESCA),i.xp6(2),i.Oqu(p.UNIT||p.BASEUNIT),i.xp6(2),i.hij(" ",p.QTY," "),i.xp6(2),i.hij(" ",p.WAREHOUSE," "),i.xp6(2),i.hij(" ",p.SHEETNO," ")}}function v(u,b){if(1&u){const p=i.EpF();i.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h5",8),i._uU(8,"Physical Stock Excel Upload"),i.qZA()(),i.TgZ(9,"div",9),i.YNc(10,h,2,0,"button",10),i.qZA(),i.TgZ(11,"div",9)(12,"input",11),i.NdJ("ngModelChange",function(d){i.CHM(p);const P=i.oxw();return i.KtG(P.searchbyid=d)}),i.qZA(),i.TgZ(13,"button",12),i.NdJ("click",function(){i.CHM(p);const d=i.oxw();return i.KtG(d.hide())}),i._uU(14," \xd7 "),i.qZA()()()()(),i._UZ(15,"hr"),i.qZA(),i.TgZ(16,"cdk-virtual-scroll-viewport",13)(17,"table",14)(18,"thead")(19,"tr",15)(20,"th",16),i._uU(21,"S.No."),i.qZA(),i.TgZ(22,"th"),i._uU(23,"Code"),i.qZA(),i.TgZ(24,"th"),i._uU(25,"BARCODE"),i.qZA(),i.TgZ(26,"th",17),i._uU(27,"Particular"),i.qZA(),i.TgZ(28,"th"),i._uU(29,"Unit"),i.qZA(),i.TgZ(30,"th"),i._uU(31,"Quantity"),i.qZA(),i.TgZ(32,"th"),i._uU(33,"Warehouse"),i.qZA(),i.TgZ(34,"th"),i._uU(35,"SheetNo#"),i.qZA()()(),i.TgZ(36,"tbody",18),i.YNc(37,T,17,8,"tr",19),i.ALo(38,"searchId"),i.qZA()()()()()}if(2&u){const p=i.oxw();i.xp6(10),i.Q6J("ngIf","VIEW"!=p.MODE),i.xp6(2),i.Q6J("ngModel",p.searchbyid),i.xp6(4),i.Q6J("itemSize",20),i.xp6(21),i.Q6J("cdkVirtualForOf",i.xi3(38,4,p.OpeningList,p.searchbyid))}}let C=(()=>{class u{constructor(p,m,d,P){this.fileImportService=p,this._transactionService=m,this.loadingService=d,this.alert=P,this.isActive=!1,this.OpeningList=[]}ngOnInit(){this._transactionService.TrnMainObj.VoucherType==t.Km.ManualstockEntry&&(this.importName="Physical Stock"),this.uploadEndpoint=`/masterImport/${this.importName}`}show(p,m,d){this.RefNo=m,this.isActive=!0,this.OpeningList=p,this.MODE=d}saveData(){let p;this.loadingService.show("Uploading. Please Wait..."),this._transactionService.TrnMainObj.VoucherType==t.Km.ManualstockEntry&&(p=`${this.uploadEndpoint}/${this.RefNo}`),this.fileImportService.importSelectedFiles(p,{isManualstockExcelView:!0}).subscribe(d=>{this.loadingService.hide(),this.isActive=!1,this.alert.success(d.result.result)},d=>{this.loadingService.hide(),this.isActive=!1,this.alert.error(d.result.result),console.error("File upload failed",d)})}hide(){this.isActive=!1,this._transactionService.TrnMainObj.VoucherType==t.Km.ManualstockEntry&&"VIEW"!=this.MODE&&this.fileImportService.cancelPhysicalStock(this.RefNo).subscribe(m=>{this.loadingService.hide()},m=>{this.loadingService.hide(),this.alert.error(m.result.result)})}}return u.\u0275fac=function(p){return new(p||u)(i.Y36(g.G),i.Y36(_.p),i.Y36(S.V),i.Y36(U.c))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-manual-stock-entry-excel-visualization"]],decls:1,vars:1,consts:[["class","opening-container",4,"ngIf"],[1,"opening-container"],[1,"row",2,"width","100%"],[1,"col-12","col-md-12"],[2,"background-color","#ffffff"],[1,"row"],[1,"modal-header","col-md-12",2,"border","0px"],[1,"col-md-6",2,"display","flex","align-items","baseline"],[1,"modal-title"],[1,"col-md-3"],["style","margin: 0px 4px ;\n                margin-top: 5px !important","class","btn btn-info pull-right",3,"click",4,"ngIf"],["type","text","placeholder","Search by Menu code or Description","name","searchbyid",1,"container-input","ms-2",3,"ngModel","ngModelChange"],["type","button","data-dismiss","modal","aria-hidden","true",1,"close",3,"click"],[1,"mb-4",3,"itemSize"],[2,"width","100%"],[2,"background","#eeeeee","color","black"],["scope","col"],[2,"width","30%"],[2,"border","1px"],["style","border: 1px solid #e6e6e6",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"btn","btn-info","pull-right",2,"margin","0px 4px","margin-top","5px !important",3,"click"],[2,"border","1px solid #e6e6e6"],[2,"border","1px solid #e6e6e6","width","10px"],[2,"border","1px solid #e6e6e6","width","10%"]],template:function(p,m){1&p&&i.YNc(0,v,39,7,"div",0),2&p&&i.Q6J("ngIf",m.isActive)},dependencies:[Z.O5,x.xd,x.x0,x.N7,w.Fj,w.JJ,w.On,c],styles:[".opening-container[_ngcontent-%COMP%]{position:fixed!important;transform:translate(-50px,-50px);background:#ffffff;z-index:99999;width:98.4%;top:30%;left:4%;box-shadow:#3c40434d 0 1px 2px,#3c404326 0 2px 6px 2px}.opening-container[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{margin-left:0}.opening-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0}@media (min-width: 768px) and (max-width: 1024px){.opening-container[_ngcontent-%COMP%]{left:5.6%}}.close[_ngcontent-%COMP%]{padding:2px;right:26px;position:absolute;margin:2px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:13px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1rem .3rem}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.3rem}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:24rem;border:1px solid #D1D6D8;width:87%;margin-left:auto;margin-right:auto}tbody[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}hr[_ngcontent-%COMP%]{margin-top:.2rem;margin-bottom:.5rem}.container-input[_ngcontent-%COMP%]{margin-top:7px;right:90px;width:70%;position:absolute}"]}),u})()}}]);