"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[216],{10669:(M,b,p)=>{p.d(b,{K:()=>d,R:()=>w});var e=p(26320);let w=(()=>{class c{constructor(){}generateExcelCSVFile(v,T,h){}}return c.\u0275fac=function(v){return new(v||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var d=(()=>{return(c=d||(d={})).xlsx="xlsx",c.CSV="csv",d;var c})()},40216:(M,b,p)=>{p.d(b,{s:()=>ue,U:()=>de});var e=p(26320),w=p(70655),d=p(68277),c=p(87224),U=p(80013),v=p(92340),T=p(70489),h=p(67311),g=p(1298),r=p(81152),f=p(68567);const x=["inputBox"];function u(n,o){if(1&n&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("value",t.key),e.xp6(1),e.Oqu(t.title)}}function m(n,o){if(1&n&&(e.ynx(0),e.YNc(1,u,2,2,"option",32),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf",!t.noSearch)}}const F=function(n){return{"text-align":n}};function y(n,o){if(1&n&&(e.TgZ(0,"th",35),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("ngStyle",e.VKq(2,F,t.alignment)),e.xp6(1),e.Oqu(t.title)}}function D(n,o){if(1&n&&(e.ynx(0),e.YNc(1,y,2,4,"th",34),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf",!t.hidden)}}function S(n,o){1&n&&(e.TgZ(0,"th"),e._uU(1,"Action"),e.qZA())}function Z(n,o){if(1&n&&(e.TgZ(0,"div",39),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit,i=e.oxw().$implicit;e.s9C("title",i[t.key]),e.xp6(1),e.hij(" ",i[t.key]," ")}}function A(n,o){if(1&n&&(e.TgZ(0,"div",39),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&n){const t=e.oxw(2).$implicit,i=e.oxw().$implicit;e.s9C("title",i[t.key]),e.xp6(1),e.hij(" ",e.Dn7(2,2,i[t.key],"INR","Rs. ")," ")}}function I(n,o){if(1&n&&(e.TgZ(0,"td",35),e.YNc(1,Z,2,2,"div",38),e.YNc(2,A,3,6,"div",38),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("ngStyle",e.VKq(3,F,t.alignment)),e.xp6(1),e.Q6J("ngIf",!t.pipe),e.xp6(1),e.Q6J("ngIf",t.pipe)}}function O(n,o){if(1&n&&(e.ynx(0),e.YNc(1,I,3,5,"td",34),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf",!t.hidden)}}function k(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"span")(2,"i",40),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw(2).index,_=e.oxw(3);return e.KtG(_.onActionClicked(s.text,a))}),e.qZA()(),e.BQk()}if(2&n){const t=o.$implicit;e.xp6(2),e.Tol(t.icon),e.s9C("title",t.title)}}function N(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"td"),e.YNc(2,k,3,4,"ng-container",13),e.qZA(),e.BQk()),2&n){const t=e.oxw(4);e.xp6(2),e.Q6J("ngForOf",t.popupsettings.actionKeys)}}function E(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr",37),e.NdJ("dblclick",function(){const s=e.CHM(t).$implicit,a=e.oxw(3);return e.KtG(a.doubleClick(s))})("click",function(){const s=e.CHM(t).index,a=e.oxw(3);return e.KtG(a.singleClick(s))}),e.YNc(1,O,2,1,"ng-container",13),e.YNc(2,N,3,1,"ng-container",2),e.qZA()}if(2&n){const t=o.index,i=e.oxw(3);e.ekj("selected-row",i.selectedRowIndex==t),e.xp6(1),e.Q6J("ngForOf",i.popupsettings.columns),e.xp6(1),e.Q6J("ngIf",i.popupsettings.showActionButton&&i.popupsettings.actionKeys.length)}}const L=function(n,o,t,i){return{id:n,itemsPerPage:o,currentPage:t,totalItems:i}};function R(n,o){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,E,3,4,"tr",36),e.ALo(2,"paginate"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,t.itemList,e.l5B(4,L,t.tabindex,t.pageSize,t.pageNumber,t.totalItems)))}}function J(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",41)(1,"pagination-controls",42),e.NdJ("pageChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onPageChange(l))}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("id",t.tabindex)}}function q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",43),e._uU(2),e.qZA(),e.TgZ(3,"td",44)(4,"button",45),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.removeItem(s))}),e._uU(5,"Remove"),e.qZA()()()}if(2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.DepartmentName)}}function Q(n,o){if(1&n&&e._UZ(0,"div",46),2&n){const t=e.oxw(2);e.Q6J("innerHTML",t.summary,e.oJD)}}function G(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div")(2,"div",3)(3,"h4",4),e._uU(4),e.qZA(),e.TgZ(5,"button",5),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.hide())}),e.TgZ(6,"span",6),e._uU(7,"\xd7"),e.qZA()()(),e.TgZ(8,"div",7)(9,"div",8)(10,"div",7)(11,"div",9)(12,"div",10)(13,"select",11),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.filterOption=l)})("change",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.triggerSearch(l))}),e.TgZ(14,"option",12),e._uU(15,"Select Filter Option"),e.qZA(),e.YNc(16,m,2,1,"ng-container",13),e.qZA()(),e.TgZ(17,"div",14),e._UZ(18,"input",15,16),e.qZA()()(),e.TgZ(20,"div",17)(21,"table",18)(22,"thead")(23,"tr",19),e.YNc(24,D,2,1,"ng-container",13),e.YNc(25,S,2,0,"th",2),e.qZA()(),e.YNc(26,R,3,9,"tbody",2),e.qZA(),e.TgZ(27,"div",20),e.YNc(28,J,2,1,"div",21),e.qZA()()(),e.TgZ(29,"div",8)(30,"fieldset",22)(31,"div",7)(32,"h6",23),e._uU(33,"Selected Department list"),e.qZA()(),e.TgZ(34,"div",7)(35,"table",24)(36,"thead",25)(37,"tr",26)(38,"th",27),e._uU(39,"Department"),e.qZA(),e.TgZ(40,"th",28),e._uU(41,"Action"),e.qZA()()(),e.TgZ(42,"tbody",29),e.YNc(43,q,6,1,"tr",13),e.qZA()()()(),e.TgZ(44,"div",7)(45,"button",30),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.selectMultipleItem())}),e._uU(46,"OK"),e.qZA()()()()(),e.YNc(47,Q,1,1,"div",31),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.popupsettings.title," "),e.xp6(9),e.Q6J("ngModel",t.filterOption),e.xp6(3),e.Q6J("ngForOf",t.popupsettings.columns),e.xp6(2),e.Q6J("formControl",t.filterValue),e.xp6(6),e.Q6J("ngForOf",t.popupsettings.columns),e.xp6(1),e.Q6J("ngIf",t.popupsettings.showActionButton&&t.popupsettings.actionKeys.length),e.xp6(1),e.Q6J("ngIf",t.itemList.length),e.xp6(2),e.Q6J("ngIf",t.itemList.length),e.xp6(15),e.Q6J("ngForOf",t.selectedItems),e.xp6(2),e.Q6J("disabled",""==t.selectedItems),e.xp6(2),e.Q6J("ngIf",t.summary)}}class C extends d.nd{constructor(o,t,i){super(o),this.injector=o,this.dialog=t,this.alertservice=i,this.selectedItems=[],this.requestUrl="",this.isActive=!1,this.itemList=[],this.selectedRowIndex=0,this.tabindex="list",this.hideGridOnDoubleClick=!0,this.billTo="",this.tag="",this.isForCancelOrder=!1,this.onPopUpClose=new e.vpe,this.onItemDoubleClick=new e.vpe,this.onDeleteClicked=new e.vpe,this.onItemsSelected=new e.vpe}ngAfterViewInit(){this.filterValue.valueChanges.pipe((0,U.b)(500)).subscribe(o=>{o.includes("&")?this.alertservice.warning("Cannot search using Special Characters."):(this.refreshPage(),this.refresh())})}show(o="",t=!1,i="",l=!0){this.hideGridOnDoubleClick=l,setTimeout(()=>{this.inputBox.nativeElement.focus()},10),this.summary=null,this.billTo=o,this.isForCancelOrder=t,this.itemList=[],this.isActive=!0,this.selectedRowIndex=0,this.tag=i,this.selectedItems=[],setTimeout(()=>{this.setFilterOption()},100)}setFilterOption(){if(this.popupsettings&&this.popupsettings.columns.length){const o=this.popupsettings.defaultFilterIndex?this.popupsettings.defaultFilterIndex:0;if(this.popupsettings.columns.length<=o)return;this.filterValue.setValue(""),this.filterOption=this.popupsettings.columns[o].key}}getData(){this.summary=null,this.selectedRowIndex=0;let i=`${v.N.apiUrl}${this.popupsettings.apiEndpoints}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`;return this.billTo&&""!==this.billTo&&null!=this.billTo&&void 0!==this.billTo&&(i+=`&billTo=${this.billTo}`),this.tag&&""!==this.tag&&null!=this.tag&&void 0!==this.isTableLoading&&(i+=`&tag=${this.tag}`),this.isForCancelOrder&&(i+=`&isForCancelOrder=${this.isForCancelOrder}`),this.requestUrl=this.getFilterOption(i),this._http.get(this.requestUrl).pipe((0,c.P)()).subscribe(l=>{this.totalItems=l?l.totalCount:0,this.itemList=l?l.data:[],this.itemList.forEach(function(s){null!=s.TRNDATE&&void 0!==s.TRNDATE&&(s.TRNDATE=s.TRNDATE.toString().substring(0,10)),null!=s.DATE&&void 0!==s.DATE&&(s.DATE=s.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)})}hide(){this.itemList=[],this.pageNumber=1,this.totalItems=0,this.isActive=!1}triggerSearch(){null==this.filterOption||void 0===this.filterOption||""===this.filterOption||this.filterValue.setValue("")}singleClick(o){this.selectedRowIndex=o,this.summary=this.itemList[o].itemSummary}doubleClick(o){console.log("double clicked item",o);let t=this.selectedItems.filter(i=>i.DepartmentName==o.DepartmentName);console.log("duplicate",t),!(t.length>0)&&(this.selectedItems.push(o),console.log("selected item lisr",this.selectedItems))}selectMultipleItem(){let o="";this.selectedItems.forEach(l=>{o+=`${l.DepartmentName},`});let i={DepartmentName:o.substring(0,o.length-1)};this.onItemsSelected.emit(i),this.hideGridOnDoubleClick&&this.hide()}updown(o){if(!this.isActive)return!0;if("ArrowDown"===o.code)o.preventDefault(),this.selectedRowIndex++,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),this.calculateTotalPages(),this.selectedRowIndex===this.itemList.length&&this.pageNumber<this.totalPages?(this.pageNumber=this.pageNumber+1,this.refresh(),this.selectedRowIndex=0,this.itemListClosed()):this.selectedRowIndex===this.itemList.length&&this.pageNumber===this.totalPages&&(this.selectedRowIndex=this.itemList.length-1);else if("ArrowUp"===o.code)o.preventDefault(),this.selectedRowIndex--,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),-1===this.selectedRowIndex&&this.pageNumber>1?(this.pageNumber=this.pageNumber-1,this.refresh(),this.selectedRowIndex=this.itemList.length-1,this.itemListClosed()):-1===this.selectedRowIndex&&1===this.pageNumber&&(this.selectedRowIndex=0);else if(("Enter"===o.code||"NumpadEnter"===o.code)&&this.selectedRowIndex>=0&&this.selectedRowIndex<this.itemList.length)o.preventDefault(),"BARCODE"===this.filterOption||(this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]),this.hide(),this.itemListClosed());else if("Escape"===o.code)o.preventDefault(),this.hide(),this.itemListClosed();else if("ArrowRight"===o.code){if(o.preventDefault(),this.calculateTotalPages(),this.pageNumber>=this.totalPages)return void(this.pageNumber=this.totalPages);this.selectedRowIndex=0,this.pageNumber=this.pageNumber+1,this.refresh()}else if("ArrowLeft"===o.code){if(o.preventDefault(),this.pageNumber<=1)return void(this.pageNumber=1);this.selectedRowIndex=0,this.pageNumber=this.pageNumber-1,this.refresh()}}itemListClosed(){this.onPopUpClose.emit()}ngOnChanges(o){this.popupsettings=o.popupsettings.currentValue}removeItem(o){this.selectedItems.splice(o,1)}onActionClicked(o,t){if(""!==o&&null!=o&&void 0!==o){const i=o.toLowerCase();switch(i){case"delete":case"cancel":confirm(`Are you sure to ${i} this row ?.`)&&this.onDeleteClicked.emit(this.itemList[t])}}}}C.\u0275fac=function(o){return new(o||C)(e.Y36(e.zs3),e.Y36(T.uw),e.Y36(h.c))},C.\u0275cmp=e.Xpm({type:C,selectors:[["multiselect-department-grid"]],viewQuery:function(o,t){if(1&o&&e.Gf(x,5),2&o){let i;e.iGM(i=e.CRH())&&(t.inputBox=i.first)}},hostBindings:function(o,t){1&o&&e.NdJ("keydown",function(l){return t.updown(l)},!1,e.evT)},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onItemDoubleClick:"onItemDoubleClick",onDeleteClicked:"onDeleteClicked",onItemsSelected:"onItemsSelected"},features:[e.qOj,e.TTD],decls:3,vars:3,consts:[[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px"],[1,"modal-content","modal-content-main-area"],[4,"ngIf"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"padding-left","5px","font-size","1.2rem"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-md-6","pd0"],[1,"col-md-12","row"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding","0px"],[2,"width","100%",3,"ngModel","ngModelChange","change"],["value","","selected",""],[4,"ngFor","ngForOf"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding-right","0px"],["type","text","placeholder","Enter keyword to search",2,"width","100%",3,"formControl"],["inputBox",""],[1,"col-md-12","table-scroll"],[1,"table"],[2,"background","#7ed0ff"],[1,"row",2,"float","center","margin","4px 0px"],["class","col-md-12","style","width:100%;margin-top: -1.8rem;",4,"ngIf"],[2,"border","2px solid #d9d9d9","width","96%","margin-top","5px","height","26rem"],[2,"text-align","center"],[1,"table","table-striped"],[1,"tablehead"],[2,"position","sticky","top","0","line-height","1rem"],["scope","col",2,"width","15%"],["scope","col",2,"width","10%"],[1,"selecteditem"],[1,"btn","btn-info","btn-sm",3,"disabled","click"],["style","margin-left: 25px; margin-top: -25px;\n        font-size: 12px;",3,"innerHTML",4,"ngIf"],[3,"value",4,"ngIf"],[3,"value"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"],["class","highlight","title","double click for detail view",3,"selected-row","dblclick","click",4,"ngFor","ngForOf"],["title","double click for detail view",1,"highlight",3,"dblclick","click"],[3,"title",4,"ngIf"],[3,"title"],[3,"title","click"],[1,"col-md-12",2,"width","100%","margin-top","-1.8rem"],["maxSize","9","directionLinks","true","autoHide","true","responsive","true","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",2,"margin-left","6rem","margin-bottom","0","font-size","0.8rem",3,"id","pageChange"],[2,"width","15%"],[2,"width","10%"],[1,"btn","btn-danger",2,"line-height","8px","font-size","10px","padding","4px",3,"click"],[2,"margin-left","25px","margin-top","-25px","font-size","12px",3,"innerHTML"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,G,48,11,"div",2),e.qZA()()),2&o&&(e.ekj("modal-sticky-hide",!t.isActive),e.xp6(2),e.Q6J("ngIf",t.popupsettings))},dependencies:[g.sg,g.O5,g.PC,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.On,r.oH,f.LS,g.H9,f._s],styles:[".modal-content[_ngcontent-%COMP%] {\n      padding: 1px;\n      margin: 0px;\n      float: right;\n      width: 100%;\n    }\n  \n    tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\n      background-color: #f3f5f4;\n      cursor: pointer;\n    }\n  \n    tr[_ngcontent-%COMP%] {\n      font-size: 11px;\n    }\n  \n    .selected-row[_ngcontent-%COMP%] {\n      background-color: #ced6d3 !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\n      line-height: 24px !important;\n      padding: 5px 10px;\n      vertical-align: middle;\n    }\n  \n    .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\n      line-height: 5px !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child {\n      text-align: left !important;\n      padding: 0px 0px 0px 11px !important;\n    }\n  \n    .modal-content[_ngcontent-%COMP%] {\n      box-shadow: -10px 0px 10px 1px #aaaaaa;\n    }\n  \n    .modal-content-main-area[_ngcontent-%COMP%] {\n      max-height: 100%;\n      height: 100%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .modal-content-summary-area[_ngcontent-%COMP%] {\n      max-height: 20%;\n      height: 20%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .ellipsis[_ngcontent-%COMP%] {\n      \n      white-space: nowrap;\n    }\n\n    .selecteditem[_ngcontent-%COMP%]{\n        display: block;\n    height: 50vh;\n    overflow: auto;\n    }\n\n    .tablehead[_ngcontent-%COMP%], .selecteditem[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\n        display: table;\n    width: 100%;\n    table-layout: fixed;\n    \n    }"]}),(0,w.gn)([function Y(n){return function(o,t,i){const l=i.value,s=`__timeout__${t}`;return i.value=function(...a){clearTimeout(this[s]),this[s]=setTimeout(()=>l.apply(this,a),n)},i}}(10)],C.prototype,"updown",null);class K{constructor(){this.columns=[],this.defaultFilterIndex=0,this.showActionButton=!1,this.actionKeys=[]}}var H=p(18488),V=p(14970),j=p(87584),B=p(53074),z=p(10669);const W=["fileSelect"],$=["multiselectDepartmentGrid"];function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.importConfig())}),e.TgZ(1,"span",27),e._UZ(2,"i",28),e.qZA(),e._uU(3,"Upload "),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("disabled",!t.fileList)}}function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.importConfigAttributes())}),e.TgZ(1,"span",27),e._UZ(2,"i",28),e.qZA(),e._uU(3,"Upload Variant "),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("disabled",!t.fileList)}}function te(n,o){if(1&n&&(e.TgZ(0,"div")(1,"h5"),e._uU(2,"Note"),e.qZA(),e._UZ(3,"div",29),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("innerHTML",t.popupsettings.note,e.oJD)}}function ie(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p"),e._uU(1," Download the "),e.TgZ(2,"a",30),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(3);return e.KtG(l.downloadSample())}),e._uU(3,"sample template"),e.qZA(),e._uU(4," to get started. "),e.qZA()}}function ne(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ie,5,0,"p",2),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.popupsettings.sampleFileUrl)}}function oe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p"),e._uU(1," Download the variant "),e.TgZ(2,"a",30),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(3);return e.KtG(l.downloadSampleForVariant())}),e._uU(3,"sample template"),e.qZA(),e._uU(4," to get started. "),e.qZA()}}function le(n,o){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,oe,5,0,"p",2),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.popupsettings.departmentWiseVariant)}}function se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",31)(1,"input",32),e.NdJ("change",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.ShowVariantFileUploader=l.target.checked?1:0)})("ngModelChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.ShowVariantFileUploader=l)}),e.qZA(),e.TgZ(2,"label",33),e._uU(3,"Upload Variant Excel file"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.ShowVariantFileUploader)}}function pe(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&n){const t=o.$implicit,i=o.index;e.xp6(2),e.hij(" ",i+1," "),e.xp6(2),e.Oqu(t)}}function re(n,o){if(1&n&&(e.TgZ(0,"table",34)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"SN."),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Filename"),e.qZA()()(),e.TgZ(7,"tbody"),e.YNc(8,pe,5,2,"tr",35),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(8),e.Q6J("ngForOf",t.selectedFileNames)}}function ae(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div")(2,"div",5)(3,"h4",6),e._uU(4),e.qZA(),e.TgZ(5,"button",7),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.popupClose())}),e.TgZ(6,"span",8),e._uU(7,"\xd7"),e.qZA()()(),e.TgZ(8,"div",9),e._UZ(9,"br"),e.TgZ(10,"div",10)(11,"div",11),e.NdJ("dragover",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onDragOver(l))})("drop",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onDrop(l))})("click",function(){e.CHM(t);const l=e.MAs(27);return e.KtG(l.click())}),e.TgZ(12,"b"),e._uU(13," Choose a File"),e.qZA(),e._uU(14," or Drag it Here. "),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"div",12),e._UZ(17,"input",13),e.TgZ(18,"span",14)(19,"button",15),e._UZ(20,"span",16),e._uU(21," Clear "),e.qZA(),e.TgZ(22,"div",17),e._UZ(23,"span",18),e.TgZ(24,"span",19),e._uU(25,"Browse"),e.qZA(),e.TgZ(26,"input",20,21),e.NdJ("change",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onFileChange(l))}),e.qZA()(),e.YNc(28,X,4,1,"button",22),e.YNc(29,ee,4,1,"button",22),e.qZA()(),e._UZ(30,"br"),e.YNc(31,te,4,1,"div",2),e.YNc(32,ne,2,1,"div",2),e.YNc(33,le,2,1,"div",2),e.YNc(34,se,4,1,"div",23),e.TgZ(35,"div",24),e.YNc(36,re,9,1,"table",25),e.qZA()()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.popupsettings.title," "),e.xp6(7),e.ekj("file-dropover-continue",t.dragging),e.xp6(15),e.uIk("accept",t.popupsettings.acceptFormat),e.xp6(2),e.Q6J("ngIf",0==t.ShowVariantFileUploader),e.xp6(1),e.Q6J("ngIf",1==t.ShowVariantFileUploader),e.xp6(2),e.Q6J("ngIf",t.popupsettings.note),e.xp6(1),e.Q6J("ngIf",0==t.ShowVariantFileUploader),e.xp6(1),e.Q6J("ngIf",1==t.ShowVariantFileUploader),e.xp6(1),e.Q6J("ngIf",t.popupsettings.uploadDepartmentWiseVariant),e.xp6(2),e.Q6J("ngIf",t.selectedFileNames.length)}}function ce(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",36)(2,"div",37)(3,"div",38)(4,"h5",39),e._uU(5,"Department Selection"),e.qZA(),e.TgZ(6,"button",7),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.closeDepartmentModal())}),e.TgZ(7,"span",8),e._uU(8,"\xd7"),e.qZA()()(),e.TgZ(9,"div",40)(10,"div",41)(11,"div",42)(12,"label",43),e._uU(13,"Department Name :"),e.qZA()(),e.TgZ(14,"div",44)(15,"input",45),e.NdJ("ngModelChange",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.departmentSelectObj.DEPARTMENTNAME=l)})("keydown.enter",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.DepartmentEnterCommand(l))})("keydown.Tab",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.DepartmentEnterCommand(l))})("keyup",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.DepartmentEnterCommand(l))})("keypress",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.keyPress(l))}),e.qZA()()()(),e.TgZ(16,"div",46)(17,"div",47)(18,"span",48)(19,"strong"),e._uU(20,"Note:"),e.qZA(),e._uU(21," Please select the department to download respective sample excel."),e.qZA()()()()()()}if(2&n){const t=e.oxw();e.xp6(15),e.Q6J("ngModel",t.departmentSelectObj.DEPARTMENTNAME)}}let de=(()=>{class n{constructor(t,i,l,s,a,_){this.fileImportService=t,this.alertService=i,this.loadingService=l,this._trnMainService=s,this.masterService=a,this.excelService=_,this.selectedFileNames=[],this.isActive=!1,this.dragging=!1,this.doUploadFile=!0,this.TrnMainObj={},this.onPopUpClose=new e.vpe,this.onUploaded=new e.vpe,this.showDepartmentSelectionPopUp=!1,this.departmentSelectObj={DEPARTMENTNAME:""},this.listForDepartment=[],this.multiselectPopupSettings=new K,this.ShowVariantFileUploader=0,this.items=[],this.fileList=null,this.TrnMainObj=s.TrnMainObj,this.voucherType=this.TrnMainObj.VoucherType}onFileChange(t){this.fileList=t.target.files,this.setSelectedFileNames()}setSelectedFileNames(){if(this.selectedFileNames=[],null!=this.fileList)for(let t=0;t<this.fileList.length;t++)this.selectedFileNames.push(this.fileList[t].name)}deleteSelectedItem(){this.setSelectedFileNames()}onDragOver(t){this.dragging=!0,t.preventDefault()}onDrop(t){this.dragging=!1,this.fileList=t.dataTransfer.files,this.setSelectedFileNames(),t.preventDefault()}clearFile(){this.fileList=null}importConfig(){if(null==this.fileList||0==this.fileList.length)return void this.alertService.info("Please Select File.");let t=new FormData;for(let i=0;i<this.fileList.length;i++){let l=this.fileList[i];t.append(`file_${i}`,l,l.name)}this.doUploadFile?(this.loadingService.show("Uploading. Please Wait..."),this.fileImportService.importSelectedFiles(this.popupsettings.uploadEndpoints,t).subscribe(i=>{this.loadingService.hide(),this.onUploaded.emit(i),this.hide(),"error"==i.status&&(this.loadingService.hide(),this.hide())},i=>{this.alertService.info(i),this.loadingService.hide(),this.onUploaded.emit(null)})):this.onUploaded.emit(this.fileList)}importConfigAttributes(){if(null==this.fileList||0==this.fileList.length)return void this.alertService.info("Please Select File.");let t=new FormData;for(let i=0;i<this.fileList.length;i++){let l=this.fileList[i];t.append(`file_${i}`,l,l.name)}this.doUploadFile?(this.loadingService.show("Uploading. Please Wait..."),this.fileImportService.importSelectedFiles(this.popupsettings.uploadEndpointsForVariant,t).subscribe(i=>{this.loadingService.hide(),this.onUploaded.emit(i),this.hide(),this.ShowVariantFileUploader=0,"error"==i.status&&(this.loadingService.hide(),this.hide(),this.ShowVariantFileUploader=0)},i=>{this.alertService.info(i),this.loadingService.hide(),this.onUploaded.emit(null)})):this.onUploaded.emit(this.fileList)}downloadSample(){this.loadingService.show("Downloading Sample. Please Wait...");let t=null==this.popupsettings.filename||""==this.popupsettings.filename?"SampleFile":this.popupsettings.filename,i=null==this.popupsettings.acceptFormat||""==this.popupsettings.acceptFormat?".csv":this.popupsettings.acceptFormat;this.fileImportService.downloadSampleFile(this.popupsettings.sampleFileUrl,t).subscribe(l=>{let s=new Blob([l],{type:"text/json; charset=utf-8"});window.URL.createObjectURL(s);const _=document.createElement("a");_.href=URL.createObjectURL(s),_.download=`${t}${i}`,document.body.appendChild(_),_.click(),this.loadingService.hide()},l=>{this.alertService.info(l),this.loadingService.hide()})}downloadSampleForVariant(){this.selectDepartment()}downloadFile(t){const i=document.createElement("a");i.href=URL.createObjectURL(t.content),i.download=t.filename,document.body.appendChild(i),i.click()}show(t=!0){this.fileSelect.nativeElement.value=null,this.selectedFileNames=[],this.fileList=null,this.isActive=!0,this.doUploadFile=t}hide(){this.fileSelect.nativeElement.value=null,this.isActive=!1}popupClose(){this.onPopUpClose.emit(),this.hide(),this.closeDepartmentModal(),this.ShowVariantFileUploader=0}DepartmentEnterCommand(t){this.getDepartmentList(),this.multiselectDepartmentGrid.show()}getDepartmentList(){this.multiselectPopupSettings=this.masterService.getGenericGridPopUpSettings("DepartmentList")}onMultiItemSelected(t){console.log("group mulitple selected",t),this.departmentSelectObj.DEPARTMENTNAME=t.DepartmentName,this.items=t.DepartmentName.split(","),this.items.forEach(i=>{this.listForDepartment.push({departmentName:i})}),console.log(this.items,this.listForDepartment),this.downloadVariantExcelSample(this.items)}selectDepartment(){this.showDepartmentSelectionPopUp=!0}closeDepartmentModal(){this.showDepartmentSelectionPopUp=!1,this.departmentSelectObj.DEPARTMENTNAME=""}downloadVariantExcelSample(t){this.loadingService.show("Downloading Sample. Please Wait..."),this.fileImportService.downloadSampleExcelforPIImport(t).subscribe(l=>{let s=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});var _=URL.createObjectURL(s),P=document.createElement("a");P.href=_,P.download="PI Import Sample.xlsx",P.click(),this.loadingService.hide(),this.closeDepartmentModal()},l=>{this.alertService.info(l),this.loadingService.hide()})}ngOnChanges(t){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(H.G),e.Y36(h.c),e.Y36(V.V),e.Y36(j.p),e.Y36(B.P),e.Y36(z.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["file-uploader-popup"]],viewQuery:function(t,i){if(1&t&&(e.Gf(W,5),e.Gf($,5)),2&t){let l;e.iGM(l=e.CRH())&&(i.fileSelect=l.first),e.iGM(l=e.CRH())&&(i.multiselectDepartmentGrid=l.first)}},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onUploaded:"onUploaded"},features:[e.TTD],decls:6,vars:5,consts:[[1,"modal-sticky",2,"display","block","padding","0px"],[1,"modal-content","modal-content-main-area"],[4,"ngIf"],[3,"popupsettings","onItemsSelected"],["multiselectDepartmentGrid",""],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"text-align","center"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"upload-area","container"],[1,"file-upload-area"],["id","drop-zone",1,"upload-drop-zone",3,"dragover","drop","click"],[1,"input-group","image-preview"],["placeholder","","type","text","disabled","disabled","name","selectedfiles",1,"form-control","image-preview-filename",2,"display","none"],[1,"input-group-btn"],["type","button",1,"btn","btn-default","image-preview-clear",2,"display","none"],[1,"glyphicon","glyphicon-remove"],[1,"btn","btn-info","image-preview-input",2,"margin-right","5px"],[1,"glyphicon","glyphicon-folder-open"],[1,"image-preview-input-title"],["type","file","accept",".csv, .xlsx","name","input-file-preview","ng-multiple","popupsettings.allowMultiple",3,"change"],["fileSelect",""],["type","button","class","btn btn-labeled btn-info",3,"disabled","click",4,"ngIf"],["style","margin-top: -24px;",4,"ngIf"],[2,"height","90px","overflow-y","auto"],["class","table",4,"ngIf"],["type","button",1,"btn","btn-labeled","btn-info",3,"disabled","click"],[1,"btn-label"],[1,"glyphicon","glyphicon-upload"],[3,"innerHTML"],[2,"cursor","pointer","color","#1b6ed6",3,"click"],[2,"margin-top","-24px"],["type","checkbox",3,"ngModel","change","ngModelChange"],[2,"width","50%"],[1,"table"],[4,"ngFor","ngForOf"],[1,"modal-sticky",2,"display","block","padding","0px","margin-top","2.5rem","margin-bottom","20px","margin-right","0.2rem","width","56%"],[1,"modal-content","modal-content-main-area",2,"width","70%"],[1,"modal-header",2,"padding","0px","background","#c0c0c0"],[1,"modal-title",2,"padding-left","5px"],[1,"modal-body"],[1,"form-group","row",2,"margin","0.5rem"],[1,"col-md-4"],[2,"width","90%"],[1,"col"],["type","text","placeholder","Press Enter or Tab for Department List",1,"form-control","input-text",2,"background","white",3,"ngModel","ngModelChange","keydown.enter","keydown.Tab","keyup","keypress"],[1,"modal-footer",2,"justify-content","flex-start"],[1,"col-11"],[2,"font-size","12px"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,ae,37,11,"div",2),e.qZA()(),e.YNc(3,ce,22,1,"div",2),e.TgZ(4,"multiselect-department-grid",3,4),e.NdJ("onItemsSelected",function(s){return i.onMultiItemSelected(s)}),e.qZA()),2&t&&(e.ekj("modal-sticky-hide",!i.isActive),e.xp6(2),e.Q6J("ngIf",i.popupsettings),e.xp6(1),e.Q6J("ngIf",i.showDepartmentSelectionPopUp),e.xp6(1),e.Q6J("popupsettings",i.multiselectPopupSettings))},dependencies:[g.sg,g.O5,r.Fj,r.Wl,r.JJ,r.On,C],styles:['.modal-content[_ngcontent-%COMP%] {\n    padding: 1px;\n    margin: 0px;\n    float: right;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: -10px 0px 10px 1px #aaaaaa;\n  }\n\n  .modal-content-summary-area[_ngcontent-%COMP%] {\n    max-height: 20%;\n    height: 20%;\n    overflow: auto;\n    overflow-x: hidden;\n  }\n\n  \n  .upload-drop-zone[_ngcontent-%COMP%] {\n    height: 80px;\n    border-width: 2px;\n    margin-bottom: 0px;\n  }\n\n  \n  .upload-drop-zone[_ngcontent-%COMP%] {\n    color: #c7dadf;\n    border-style: solid;\n    border-color:#c7dadf;\n    border-radius: 2px;\n    line-height: 75px;\n    text-align: center;\n    cursor: pointer;\n  }\n\n  .sample-download-area[_ngcontent-%COMP%] {\n    color: #ccc;\n    border-style: dashed;\n    border-color: #ccc;\n    line-height: 60px;\n    text-align: center;\n    cursor: pointer;\n  }\n\n  .upload-drop-zone.drop[_ngcontent-%COMP%] {\n    color: #222;\n    border-color: #222;\n  }\n\n  .image-preview-input[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    margin: 0px;\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n  }\n  .image-preview-input[_ngcontent-%COMP%]   input[type="file"][_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  .image-preview-input-title[_ngcontent-%COMP%] {\n    margin-left: 2px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n\n  .file-dropover-continue[_ngcontent-%COMP%] {\n    color: #1b6ed6;\n    border-style: dashed;\n    border-color: #1b6ed6;\n    background: #ded4d4;\n  }\n  .modal-sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 275px;\n    right: 20px;\n    width: 40%;\n    z-index: 9999999;\n}']}),n})();class ue{constructor(){this.allowMultiple=!1,this.acceptFormat="*",this.departmentWiseVariant=!1,this.uploadDepartmentWiseVariant=!1,this.voucherUpload=!1,this.vchrlist=[]}}},18488:(M,b,p)=>{p.d(b,{G:()=>T});var e=p(17545),w=p(8929),d=p(26320),c=p(70477),U=p(67297),v=p(71180);let T=(()=>{class h{constructor(r,f,x,u){this.http=r,this.activatedRoute=f,this.authService=x,this.state=u;const m=this.state.getGlobalSetting("apiUrl");m&&m.length>0&&(this.apiUrl=m)}getRequestOption(){return new e.WM({"Content-type":"application/csv",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}RequestOptionForCSV(){return{headers:new e.WM({Authorization:this.authService.getAuth().token})}}downloadSampleFile(r,f="download"){return this.http.get(this.apiUrl+`${r}`,{headers:this.getRequestOption(),responseType:"blob"})}downloadSampleExcelforPIImport(r){return this.http.post(this.apiUrl+"/downloadSampleExcelforPIImport",r,{responseType:"blob"})}importSelectedFiles(r,f){let x={status:"error",result:"error"},u=new w.xQ;return this.http.post(this.apiUrl+`${r}`,f).subscribe(m=>{u.next(m),u.unsubscribe()},m=>{x.status="error",x.result=m,u.next(x),u.unsubscribe()}),u}}return h.\u0275fac=function(r){return new(r||h)(d.LFG(e.eN),d.LFG(c.gz),d.LFG(U.e),d.LFG(v.q))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac}),h})()}}]);