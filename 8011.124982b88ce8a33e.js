"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8011],{38011:(_t,m,r)=>{r.d(m,{ky:()=>d,oe:()=>rt});var f=r(64762),t=r(66274),x=r(68277),C=r(28049),T=r(54395),A=r(92340),M=r(53181),I=r(67311),P=r(87584),_=r(92752),p=r(7587),h=r(72533);const D=["inputBox"];function b(n,i){if(1&n&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("value",e.key),t.xp6(1),t.Oqu(e.title)}}function U(n,i){if(1&n&&(t.ynx(0),t.YNc(1,b,2,2,"option",28),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.noSearch)}}const g=function(n){return{"text-align":n}};function E(n,i){if(1&n&&(t.TgZ(0,"th",31),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(2,g,e.alignment)),t.xp6(1),t.Oqu(e.title)}}function w(n,i){if(1&n&&(t.ynx(0),t.YNc(1,E,2,4,"th",30),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function Z(n,i){1&n&&(t.TgZ(0,"th"),t._uU(1,"Action"),t.qZA())}function O(n,i){if(1&n&&(t.TgZ(0,"div",35),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit,o=t.oxw().$implicit;t.s9C("title",o[e.key]),t.xp6(1),t.hij(" ",o[e.key]," ")}}function v(n,i){if(1&n&&(t.TgZ(0,"div",35),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=t.oxw(2).$implicit,o=t.oxw().$implicit;t.s9C("title",o[e.key]),t.xp6(1),t.hij(" ",t.Dn7(2,2,o[e.key],"INR","Rs. ")," ")}}function N(n,i){if(1&n&&(t.TgZ(0,"td",31),t.YNc(1,O,2,2,"div",34),t.YNc(2,v,3,6,"div",34),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngStyle",t.VKq(3,g,e.alignment)),t.xp6(1),t.Q6J("ngIf",!e.pipe),t.xp6(1),t.Q6J("ngIf",e.pipe)}}function y(n,i){if(1&n&&(t.ynx(0),t.YNc(1,N,3,5,"td",30),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!e.hidden)}}function G(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"span")(2,"i",36),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2).index,u=t.oxw(3);return t.KtG(u.onActionClicked(s.text,l))}),t.qZA()(),t.BQk()}if(2&n){const e=i.$implicit;t.xp6(2),t.Tol(e.icon),t.s9C("title",e.title)}}function S(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"td"),t.YNc(2,G,3,4,"ng-container",13),t.qZA(),t.BQk()),2&n){const e=t.oxw(4);t.xp6(2),t.Q6J("ngForOf",e.popupsettings.actionKeys)}}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",33),t.NdJ("dblclick",function(){const s=t.CHM(e).$implicit,l=t.oxw(3);return t.KtG(l.doubleClick(s))})("click",function(){const s=t.CHM(e).index,l=t.oxw(3);return t.KtG(l.singleClick(s))}),t.YNc(1,y,2,1,"ng-container",13),t.YNc(2,S,3,1,"ng-container",2),t.qZA()}if(2&n){const e=i.index,o=t.oxw(3);t.ekj("selected-row",o.selectedRowIndex==e),t.xp6(1),t.Q6J("ngForOf",o.popupsettings.columns),t.xp6(1),t.Q6J("ngIf",o.popupsettings.showActionButton&&o.popupsettings.actionKeys.length)}}const k=function(n,i,e,o){return{id:n,itemsPerPage:i,currentPage:e,totalItems:o}};function R(n,i){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,L,3,4,"tr",32),t.ALo(2,"paginate"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.itemList,t.l5B(4,k,e.tabindex,e.pageSize,e.pageNumber,e.totalItems)))}}function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",37)(1,"pagination-controls",38),t.NdJ("pageChange",function(c){t.CHM(e);const s=t.oxw(2);return t.KtG(s.onPageChange(c))}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("id",e.tabindex)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",47),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",49)(6,"button",50),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw(3);return t.KtG(l.removeItem(s))}),t._uU(7,"Remove"),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.ACID),t.xp6(2),t.Oqu(e.DESCA)}}function Q(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"h6",39),t._uU(2,"Selected LEDGER MAPPING list"),t.qZA(),t.TgZ(3,"table",40)(4,"thead",41)(5,"tr",42)(6,"th",43),t._uU(7,"ACID"),t.qZA(),t.TgZ(8,"th",44),t._uU(9,"ACCOUNT NAME"),t.qZA(),t.TgZ(10,"th",45),t._uU(11,"Action"),t.qZA()()(),t.TgZ(12,"tbody",46),t.YNc(13,J,8,2,"tr",13),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(13),t.Q6J("ngForOf",e.selectedItems)}}function Y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",48),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",49),t._uU(6),t.qZA(),t.TgZ(7,"td",49)(8,"button",50),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw(3);return t.KtG(l.removeItem(s))}),t._uU(9,"Remove"),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.DESCA),t.xp6(2),t.Oqu(e.ADDRESS),t.xp6(2),t.Oqu(e.VATNO)}}function F(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"h6",39),t._uU(2,"Selected Customers list"),t.qZA(),t.TgZ(3,"table",40)(4,"thead",41)(5,"tr",42)(6,"th",44),t._uU(7,"NAME"),t.qZA(),t.TgZ(8,"th",44),t._uU(9,"ADDRESS"),t.qZA(),t.TgZ(10,"th",45),t._uU(11,"VATNO"),t.qZA(),t.TgZ(12,"th",45),t._uU(13,"Action"),t.qZA()()(),t.TgZ(14,"tbody",46),t.YNc(15,Y,10,3,"tr",13),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(15),t.Q6J("ngForOf",e.selectedItems)}}function B(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",48),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",49),t._uU(6),t.qZA(),t.TgZ(7,"td",49)(8,"button",50),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw(3);return t.KtG(l.removeItem(s))}),t._uU(9,"Remove"),t.qZA()()()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.DESCA),t.xp6(2),t.Oqu(e.ADDRESS),t.xp6(2),t.Oqu(e.VATNO)}}function K(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"h6",39),t._uU(2,"Selected Suppliers list"),t.qZA(),t.TgZ(3,"table",40)(4,"thead",41)(5,"tr",42)(6,"th",44),t._uU(7,"NAME"),t.qZA(),t.TgZ(8,"th",44),t._uU(9,"ADDRESS"),t.qZA(),t.TgZ(10,"th",45),t._uU(11,"VATNO"),t.qZA(),t.TgZ(12,"th",45),t._uU(13,"Action"),t.qZA()()(),t.TgZ(14,"tbody",46),t.YNc(15,B,10,3,"tr",13),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(15),t.Q6J("ngForOf",e.selectedItems)}}function $(n,i){1&n&&(t.TgZ(0,"th",53),t._uU(1,"Menucode"),t.qZA())}function H(n,i){1&n&&(t.TgZ(0,"th",44),t._uU(1,"Description"),t.qZA())}function j(n,i){1&n&&(t.TgZ(0,"th",53),t._uU(1,"ACID"),t.qZA())}function V(n,i){1&n&&(t.TgZ(0,"th",44),t._uU(1,"Account Name"),t.qZA())}function W(n,i){1&n&&(t.TgZ(0,"th",53),t._uU(1,"Is Default"),t.qZA())}function z(n,i){if(1&n&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.MENUCODE)}}function X(n,i){if(1&n&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.DESCA)}}function tt(n,i){if(1&n&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.ACID)}}function et(n,i){if(1&n&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.ACNAME)}}function it(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"td",47)(1,"input",56),t.NdJ("change",function(c){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw(3);return t.KtG(l.isDefaultCheckBoxChange(c,s))}),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.isDefault)}}function nt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.YNc(1,z,2,1,"td",54),t.YNc(2,X,2,1,"td",55),t.YNc(3,tt,2,1,"td",54),t.YNc(4,et,2,1,"td",55),t.YNc(5,it,2,1,"td",54),t.TgZ(6,"td",49)(7,"button",50),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw(3);return t.KtG(l.removeItem(s))}),t._uU(8,"Remove"),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"!=e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"!=e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"==e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"==e.popupsettings.title),t.xp6(1),t.Q6J("ngIf",e.popupsettings.showIsDefaultSelection)}}function ot(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"h6",39),t._uU(2,"Selected Item list"),t.qZA(),t.TgZ(3,"table",40)(4,"thead",41)(5,"tr",42),t.YNc(6,$,2,0,"th",51),t.YNc(7,H,2,0,"th",52),t.YNc(8,j,2,0,"th",51),t.YNc(9,V,2,0,"th",52),t.YNc(10,W,2,0,"th",51),t.TgZ(11,"th",45),t._uU(12,"Action"),t.qZA()()(),t.TgZ(13,"tbody",46),t.YNc(14,nt,9,5,"tr",13),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(6),t.Q6J("ngIf","LEDGER MAPPING"!=e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"!=e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"==e.popupsettings.title),t.xp6(1),t.Q6J("ngIf","LEDGER MAPPING"==e.popupsettings.title),t.xp6(1),t.Q6J("ngIf",e.popupsettings.showIsDefaultSelection),t.xp6(4),t.Q6J("ngForOf",e.selectedItems)}}function st(n,i){if(1&n&&t._UZ(0,"div",57),2&n){const e=t.oxw(2);t.Q6J("innerHTML",e.summary,t.oJD)}}function ct(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"div",3)(3,"h4",4),t._uU(4),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.hide())}),t.TgZ(6,"span",6),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div",7)(9,"div",8)(10,"div",7)(11,"div",9)(12,"div",10)(13,"select",11),t.NdJ("ngModelChange",function(c){t.CHM(e);const s=t.oxw();return t.KtG(s.filterOption=c)})("change",function(c){t.CHM(e);const s=t.oxw();return t.KtG(s.triggerSearch(c))}),t.TgZ(14,"option",12),t._uU(15,"Select Filter Option"),t.qZA(),t.YNc(16,U,2,1,"ng-container",13),t.qZA()(),t.TgZ(17,"div",14),t._UZ(18,"input",15,16),t.qZA()()(),t.TgZ(20,"div",17)(21,"table",18)(22,"thead")(23,"tr",19),t.YNc(24,w,2,1,"ng-container",13),t.YNc(25,Z,2,0,"th",2),t.qZA()(),t.YNc(26,R,3,9,"tbody",2),t.qZA(),t.TgZ(27,"div",20),t.YNc(28,q,2,1,"div",21),t.qZA()()(),t.TgZ(29,"div",8)(30,"fieldset",22)(31,"div",7),t.ynx(32,23),t.YNc(33,Q,14,1,"ng-container",24),t.YNc(34,F,16,1,"ng-container",24),t.YNc(35,K,16,1,"ng-container",24),t.YNc(36,ot,15,6,"ng-container",25),t.BQk(),t.qZA()(),t.TgZ(37,"div",7)(38,"button",26),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.selectMultipleItem())}),t._uU(39,"OK"),t.qZA()()()()(),t.YNc(40,st,1,1,"div",27),t.qZA()}if(2&n){const e=t.oxw();t.xp6(4),t.hij(" ",e.popupsettings.title," "),t.xp6(9),t.Q6J("ngModel",e.filterOption),t.xp6(3),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(2),t.Q6J("formControl",e.filterValue),t.xp6(6),t.Q6J("ngForOf",e.popupsettings.columns),t.xp6(1),t.Q6J("ngIf",e.popupsettings.showActionButton&&e.popupsettings.actionKeys.length),t.xp6(1),t.Q6J("ngIf",e.itemList.length),t.xp6(2),t.Q6J("ngIf",e.itemList.length),t.xp6(4),t.Q6J("ngSwitch",e.popupsettings.title),t.xp6(1),t.Q6J("ngSwitchCase","LEDGER MAPPING"),t.xp6(1),t.Q6J("ngSwitchCase","Customers"),t.xp6(1),t.Q6J("ngSwitchCase","Supplier"),t.xp6(5),t.Q6J("ngIf",e.summary)}}const lt=function(){return{width:"115%"}};class d extends x.nd{constructor(i,e,o,c){super(i),this.injector=i,this.dialog=e,this.alertservice=o,this._trnMainService=c,this.selectedItems=[],this.requestUrl="",this.isActive=!1,this.itemList=[],this.selectedRowIndex=0,this.tabindex="list",this.hideGridOnDoubleClick=!0,this.billTo="",this.tag="",this.isForCancelOrder=!1,this.onPopUpClose=new t.vpe,this.onItemDoubleClick=new t.vpe,this.onDeleteClicked=new t.vpe,this.onItemsSelected=new t.vpe}ngAfterViewInit(){this.filterValue.valueChanges.pipe((0,T.b)(500)).subscribe(i=>{i.includes("&")?this.alertservice.warning("Cannot search using Special Characters."):(this.refreshPage(),this.refresh())})}show(i="",e=!1,o="",c=!0,s){this.hideGridOnDoubleClick=c,setTimeout(()=>{this.inputBox.nativeElement.focus()},10),this.summary=null,this.billTo=i,this.isForCancelOrder=e,this.itemList=[],this.isActive=!0,this.selectedRowIndex=0,this.tag=o,setTimeout(()=>{this.setFilterOption()},100),s&&(this.selectedItems=s.map(l=>({MENUCODE:l.ID,MCODE:l.ID,DESCA:l.Label,ID:l.ID,TermsAndConditions:l.TermsAndConditions,isDefault:l.isDefault,Label:l.Label})))}setFilterOption(){if(this.popupsettings&&this.popupsettings.columns.length){const i=this.popupsettings.defaultFilterIndex?this.popupsettings.defaultFilterIndex:0;if(this.popupsettings.columns.length<=i)return;this.filterValue.setValue(""),this.filterOption=this.popupsettings.columns[i].key}}getData(){this.summary=null,this.selectedRowIndex=0;let o=`${A.N.apiUrl}${this.popupsettings.apiEndpoints}?currentPage=${this.pageNumber}&maxResultCount=${this.pageSize}`;return this.billTo&&""!==this.billTo&&null!=this.billTo&&void 0!==this.billTo&&(o+=`&billTo=${this.billTo}`),this.tag&&""!==this.tag&&null!=this.tag&&void 0!==this.isTableLoading&&(o+=`&tag=${this.tag}`),this.isForCancelOrder&&(o+=`&isForCancelOrder=${this.isForCancelOrder}`),null!=this._trnMainService.TrnMainObj.PARAC&&(o+=`&supCodeFilter=${this._trnMainService.TrnMainObj.PARAC}`),this.requestUrl=this.getFilterOption(o,1==this._trnMainService.userSetting.ProductSearchMode?1:0),this._http.get(this.requestUrl).pipe((0,C.P)()).subscribe(c=>{this.totalItems=c?c.totalCount:0,this.itemList=c?c.data:[],this.itemList.forEach(function(s){null!=s.TRNDATE&&void 0!==s.TRNDATE&&(s.TRNDATE=s.TRNDATE.toString().substring(0,10)),null!=s.DATE&&void 0!==s.DATE&&(s.DATE=s.DATE.toString().substring(0,10))}),this.itemList.length>0&&0===this.selectedRowIndex&&this.itemList[this.selectedRowIndex].itemSummary&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary)})}hide(){this.itemList=[],this.pageNumber=1,this.totalItems=0,this.isActive=!1}triggerSearch(){null==this.filterOption||void 0===this.filterOption||""===this.filterOption||this.filterValue.setValue("")}singleClick(i){this.selectedRowIndex=i,this.summary=this.itemList[i].itemSummary}doubleClick(i){"Terms And Conditions List"==this.popupsettings.title?(i.MENUCODE=i.ID,i.MCODE=i.ID,i.DESCA=i.Label,i.isDefault=0,i.TermsAndConditions=i.TermsAndConditions):"LEDGER MAPPING"===this.popupsettings.title?(i.MENUCODE=i.ACID,i.MCODE=i.ACID,i.DESCA=i.ACNAME,i.isDefault=0):"Asset List"==this.popupsettings.title?(i.MENUCODE=i.AssetID,i.MCODE=i.AssetID,i.DESCA=i.Description):("customers"==this.popupsettings.title?.toLocaleLowerCase()||"supplier"==this.popupsettings.title?.toLocaleLowerCase())&&(i.MCODE=i.ACID??i.CUSTID,i.DESCA=i.ACNAME),!(this.selectedItems.filter(this.popupsettings.voucherMultiSelect?o=>o.VCHRNO==i.VCHRNO:o=>o.MCODE==i.MCODE).length>0)&&this.selectedItems.push(i)}selectMultipleItem(){if("Terms And Conditions List"==this.popupsettings.title){let i=[];this.selectedItems.forEach(e=>{i.push({ID:e.ID,Label:e.Label,isDefault:e.isDefault,TermsAndConditions:e.TermsAndConditions})}),this.onItemsSelected.emit(i),this.hideGridOnDoubleClick&&this.hide()}else if(this.popupsettings.voucherMultiSelect){let i=[];this.selectedItems.forEach(e=>{i.push(e.VCHRNO)}),this.onItemsSelected.emit(this.selectedItems)}else{let i="",e="",o="";this.selectedItems.forEach("LEDGER MAPPING"==this.popupsettings.title?a=>{i+=`${a.ACID},`,e+=`${a.ACNAME},`,o+=`${a.CUSTID},`}:a=>{i+=`${a.MCODE},`,e+=`${a.DESCA},`,o+=`${a.CUSTID},`});let u={MCODE:i.substring(0,i.length-1),DESCA:e.substring(0,e.length-1),CUSTID:o.substring(0,o.length-1)};this.onItemsSelected.emit("requisition-log"==this._trnMainService.activeurlpath?this.selectedItems:u),this.hideGridOnDoubleClick&&this.hide()}}isDefaultCheckBoxChange(i,e){e.isDefault=i.target.checked?1:0,this.selectedItems.forEach(o=>{e.ID!=o.ID&&(o.isDefault=0)})}updown(i){if(!this.isActive)return!0;if("ArrowDown"===i.code)i.preventDefault(),this.selectedRowIndex++,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),this.calculateTotalPages(),this.selectedRowIndex===this.itemList.length&&this.pageNumber<this.totalPages?(this.pageNumber=this.pageNumber+1,this.refresh(),this.selectedRowIndex=0,this.itemListClosed()):this.selectedRowIndex===this.itemList.length&&this.pageNumber===this.totalPages&&(this.selectedRowIndex=this.itemList.length-1);else if("ArrowUp"===i.code)i.preventDefault(),this.selectedRowIndex--,null!=this.itemList[this.selectedRowIndex]&&(this.summary=this.itemList[this.selectedRowIndex].itemSummary),-1===this.selectedRowIndex&&this.pageNumber>1?(this.pageNumber=this.pageNumber-1,this.refresh(),this.selectedRowIndex=this.itemList.length-1,this.itemListClosed()):-1===this.selectedRowIndex&&1===this.pageNumber&&(this.selectedRowIndex=0);else if(("Enter"===i.code||"NumpadEnter"===i.code)&&this.selectedRowIndex>=0&&this.selectedRowIndex<this.itemList.length)i.preventDefault(),"BARCODE"===this.filterOption||(this.onItemDoubleClick.emit(this.itemList[this.selectedRowIndex]),this.hide(),this.itemListClosed());else if("Escape"===i.code)i.preventDefault(),this.hide(),this.itemListClosed();else if("ArrowRight"===i.code){if(i.preventDefault(),this.calculateTotalPages(),this.pageNumber>=this.totalPages)return void(this.pageNumber=this.totalPages);this.selectedRowIndex=0,this.pageNumber=this.pageNumber+1,this.refresh()}else if("ArrowLeft"===i.code){if(i.preventDefault(),this.pageNumber<=1)return void(this.pageNumber=1);this.selectedRowIndex=0,this.pageNumber=this.pageNumber-1,this.refresh()}}itemListClosed(){this.onPopUpClose.emit()}ngOnChanges(i){this.popupsettings=i.popupsettings.currentValue}removeItem(i){this.selectedItems.splice(i,1)}onActionClicked(i,e){if(""!==i&&null!=i&&void 0!==i){const o=i.toLowerCase();switch(o){case"delete":case"cancel":confirm(`Are you sure to ${o} this row ?.`)&&this.onDeleteClicked.emit(this.itemList[e])}}}}d.\u0275fac=function(i){return new(i||d)(t.Y36(t.zs3),t.Y36(M.uw),t.Y36(I.c),t.Y36(P.p))},d.\u0275cmp=t.Xpm({type:d,selectors:[["multiselect-generic-grid"]],viewQuery:function(i,e){if(1&i&&t.Gf(D,5),2&i){let o;t.iGM(o=t.CRH())&&(e.inputBox=o.first)}},hostBindings:function(i,e){1&i&&t.NdJ("keydown",function(c){return e.updown(c)},!1,t.evT)},inputs:{popupsettings:"popupsettings",summary:"summary"},outputs:{onPopUpClose:"onPopUpClose",onItemDoubleClick:"onItemDoubleClick",onDeleteClicked:"onDeleteClicked",onItemsSelected:"onItemsSelected"},features:[t.qOj,t.TTD],decls:3,vars:5,consts:[[1,"modal-sticky",2,"display","block","padding","0px","margin-bottom","25px"],[1,"modal-content","modal-content-main-area",3,"ngStyle"],[4,"ngIf"],[1,"modal-header",2,"padding","0px","background","#7ed0ff"],[1,"modal-title",2,"padding-left","5px","font-size","1.2rem"],["aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"row"],[1,"col-md-6","pd0"],[1,"col-md-12","row"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding","0px"],[2,"width","100%",3,"ngModel","ngModelChange","change"],["value","","selected",""],[4,"ngFor","ngForOf"],[1,"col-md-6",2,"margin","2px 0px","display","flex","padding-right","0px"],["type","text","placeholder","Enter keyword to search",2,"width","100%",3,"formControl"],["inputBox",""],[1,"col-md-12","table-scroll"],[1,"table"],[2,"background","#7ed0ff"],[1,"row",2,"float","center","margin","4px 0px"],["class","col-md-12","style","width:100%;margin-top: -1.8rem;",4,"ngIf"],[2,"border","2px solid #d9d9d9","width","95%","margin-top","5px","height","26rem"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"btn","btn-info","btn-sm",3,"click"],["style","margin-left: 25px; margin-top: -25px;\n        font-size: 12px;",3,"innerHTML",4,"ngIf"],[3,"value",4,"ngIf"],[3,"value"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"],["class","highlight","title","double click for detail view",3,"selected-row","dblclick","click",4,"ngFor","ngForOf"],["title","double click for detail view",1,"highlight",3,"dblclick","click"],[3,"title",4,"ngIf"],[3,"title"],[3,"title","click"],[1,"col-md-12",2,"width","100%","margin-top","-1.8rem"],["maxSize","9","directionLinks","true","autoHide","true","responsive","true","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",2,"margin-left","6rem","margin-bottom","0","font-size","0.8rem",3,"id","pageChange"],[2,"text-align","center"],[1,"table","table-striped",2,"width","96%"],[1,"tablehead"],[2,"position","sticky","top","0","line-height","1rem"],["scope","col",2,"width","15%","line-height","10px !important"],["scope","col",2,"width","25%"],["scope","col",2,"width","10%"],[1,"selecteditem"],[2,"width","15%"],[2,"width","25%"],[2,"width","10%"],[1,"btn","btn-danger",2,"line-height","8px","font-size","10px","padding","4px",3,"click"],["scope","col","style","width: 15%;",4,"ngIf"],["scope","col","style","width: 25%;",4,"ngIf"],["scope","col",2,"width","15%"],["style","width: 15%;",4,"ngIf"],["style","width: 25%;",4,"ngIf"],["type","checkbox",3,"ngModel","change"],[2,"margin-left","25px","margin-top","-25px","font-size","12px",3,"innerHTML"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,ct,41,13,"div",2),t.qZA()()),2&i&&(t.ekj("modal-sticky-hide",!e.isActive),t.xp6(1),t.Q6J("ngStyle","requisition-log"==e._trnMainService.activeurlpath?t.DdM(4,lt):null),t.xp6(1),t.Q6J("ngIf",e.popupsettings))},dependencies:[_.sg,_.O5,_.PC,_.RF,_.n9,_.ED,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,p.oH,h.LS,_.H9,h._s],styles:[".modal-content[_ngcontent-%COMP%] {\n      padding: 1px;\n      margin: 0px;\n      float: right;\n      width: 100%;\n    }\n  \n    tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\n      background-color: #f3f5f4;\n      cursor: pointer;\n    }\n  \n    tr[_ngcontent-%COMP%] {\n      font-size: 11px;\n    }\n  \n    .selected-row[_ngcontent-%COMP%] {\n      background-color: #ced6d3 !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%] {\n      line-height: 24px !important;\n      padding: 5px 10px;\n      vertical-align: middle;\n    }\n  \n    .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%] {\n      line-height: 5px !important;\n    }\n  \n    .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child {\n      text-align: left !important;\n      padding: 0px 0px 0px 11px !important;\n    }\n  \n    .modal-content[_ngcontent-%COMP%] {\n      box-shadow: -10px 0px 10px 1px #aaaaaa;\n    }\n  \n    .modal-content-main-area[_ngcontent-%COMP%] {\n      max-height: 100%;\n      height: 100%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .modal-content-summary-area[_ngcontent-%COMP%] {\n      max-height: 20%;\n      height: 20%;\n      overflow: auto;\n      overflow-x: hidden;\n    }\n  \n    .ellipsis[_ngcontent-%COMP%] {\n      \n      white-space: nowrap;\n    }\n\n    .selecteditem[_ngcontent-%COMP%]{\n        display: block;\n    height: 50vh;\n    overflow: auto;\n    }\n\n    .tablehead[_ngcontent-%COMP%], .selecteditem[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\n        display: table;\n    width: 100%;\n    table-layout: fixed;\n    \n    }\n\n    .modal-sticky[_ngcontent-%COMP%]{\n      width: 55%;\n    }"]}),(0,f.gn)([function pt(n){return function(i,e,o){const c=o.value,s=`__timeout__${e}`;return o.value=function(...l){clearTimeout(this[s]),this[s]=setTimeout(()=>c.apply(this,l),n)},o}}(10)],d.prototype,"updown",null);class rt{constructor(){this.columns=[],this.defaultFilterIndex=0,this.showActionButton=!1,this.actionKeys=[],this.showIsDefaultSelection=!1,this.voucherMultiSelect=!1}}}}]);