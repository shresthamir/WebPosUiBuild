"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[9118],{89952:(E,g,c)=>{c.d(g,{g:()=>M});var m=c(94650);let M=(()=>{class p{transform(h){return h||(h=0),Number(h).toFixed(2)}}return p.\u0275fac=function(h){return new(h||p)},p.\u0275pipe=m.Yjl({name:"twoDigitNumber",type:p,pure:!0}),p})()},82738:(E,g,c)=>{c.d(g,{b:()=>f});var m=c(36895),M=c(68567),p=c(87584),u=c(76750),h=c(53074),C=c(94650);let f=(()=>{class d{static forRoot(){return{ngModule:d,providers:[h.P,p.p]}}}return d.\u0275fac=function(v){return new(v||d)},d.\u0275mod=C.oAB({type:d}),d.\u0275inj=C.cJS({imports:[m.ez,u.zk.forRoot(),M.JX]}),d})()},77879:(E,g,c)=>{c.d(g,{H:()=>p});var m=c(94650),M=c(53074);let p=(()=>{class u{constructor(C){this.masterRepo=C}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return u.\u0275fac=function(C){return new(C||u)(m.Y36(M.P))},u.\u0275dir=m.lG2({type:u,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),u})()},29118:(E,g,c)=>{c.r(g),c.d(g,{BOMMasterModule:()=>oe});var m=c(36895),M=c(65412),p=c(82738),u=c(46543),h=c(68567),C=c(44841),f=c(34793),d=c(28698),e=c(94650),v=c(53074),w=c(87584),y=c(67311),b=c(14970),S=c(80529),I=c(8929),A=c(67297),D=c(71180);let O=(()=>{class s{constructor(t,n,i){this.http=t,this.authService=n,this.state=i;const r=this.state.getGlobalSetting("apiUrl");r&&r.length>0&&(this.apiUrl=r)}getRequestOption(){return new S.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}saveBOMMaster(t){let n={status:"error",result:""},i=new I.xQ;const r={headers:this.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/saveReceipeItem",t,r).subscribe(o=>{i.next(o),i.unsubscribe()},o=>{n.status="error",n.result=o,i.next(n),i.unsubscribe()}),i}deleteBOMMaster(t){let n={status:"error",result:""},i=new I.xQ;const r={headers:this.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/deleteNorms",{MCODE:t},r).subscribe(l=>{i.next(l),i.unsubscribe()},l=>{n.status="error",n.result=l,i.next(n),i.unsubscribe()}),i}getReceipeListByID(t){const i={headers:this.getRequestOption(),method:"post"};return new I.xQ,this.http.post(this.apiUrl+"/getReceipeListByID",{mode:"query",data:{enoID:t}},i)}checkDuplicateRecipe(t){return this.http.get(this.apiUrl+`/checkNormsItemTransaction?MCODE=${t}`)}getListFromKey(t,n){let i={status:"error",result:""},r=new I.xQ;return this.http.get(this.apiUrl+t+n).subscribe(o=>{r.next(o),r.unsubscribe()},o=>{i.status="error",i.result=o,r.next(i),r.unsubscribe()}),r}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(S.eN),e.LFG(A.e),e.LFG(D.q))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})();var _=c(24006),B=c(77879),N=c(89952);const k=["genericGridProduct"],R=["genericGridItem"],L=["genericGridview"],Z=["genericGridedit"],G=["genericGridGroup"];function P(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onClickDelete())}),e._uU(1,"Delete"),e.qZA()}}function U(s,a){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"input",46),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.receipemain.DESCA=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.productSelect())}),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.receipemain.DESCA)}}function Q(s,a){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"input",47),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.receipemain.DESCA=i)}),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.receipemain.DESCA)}}function F(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",48)(1,"input",49),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.receipemain.showInvenoryItem=i)})("change",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.receipemain.showInvenoryItem=i.target.checked?1:0)})("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.onChangeShowInventoryEvent(i))}),e.qZA(),e._uU(2," \xa0 "),e.TgZ(3,"a",50),e._uU(4," Show Inventory Items "),e.qZA(),e._uU(5," \xa0 \xa0 "),e.qZA()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.receipemain.showInvenoryItem)("checked",1==t.receipemain.showInvenoryItem)}}function J(s,a){1&s&&(e.TgZ(0,"th",34),e._uU(1,"Sub Item"),e.qZA())}function Y(s,a){1&s&&(e.TgZ(0,"th",33),e._uU(1,"Actual Qty"),e.qZA())}function K(s,a){1&s&&(e.TgZ(0,"th",33),e._uU(1,"Yield(%)"),e.qZA())}function H(s,a){1&s&&(e.TgZ(0,"th",33),e._uU(1,"Rate"),e.qZA())}function q(s,a){1&s&&(e.TgZ(0,"th",33),e._uU(1,"Amount"),e.qZA())}function W(s,a){if(1&s&&(e.TgZ(0,"option",63),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.SubItem),e.xp6(1),e.Oqu(t.SubItem)}}function V(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"td",34)(1,"select",61),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.SubItem=i)})("change",function(i){e.CHM(t);const r=e.oxw().index,o=e.oxw();return e.KtG(o.setYieldForGrid(i,r))}),e._UZ(2,"option",62),e.YNc(3,W,2,2,"option",59),e.qZA()()}if(2&s){const t=e.oxw(),n=t.index,i=t.$implicit,r=e.oxw();e.xp6(1),e.MGl("id","subItem",n,""),e.Q6J("ngModel",i.SubItem)("disabled","VIEW"==r.mode),e.xp6(2),e.Q6J("ngForOf",i.SubItemList)}}function $(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"td",33)(1,"input",64),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.Entry_Qty=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw(),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.focusToQty(r,o))})("onkeypress",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.return(8==i.event.charCode||0==i.event.charCode||13==i.event.charCode)?null:i.event.charCode>=46&&i.event.charCode<=57)}),e.qZA()()}if(2&s){const t=e.oxw(),n=t.index,i=t.$implicit,r=e.oxw();e.xp6(1),e.MGl("id","actualQty",n,""),e.Q6J("ngModel",i.Entry_Qty)("disabled","VIEW"==r.mode)}}function j(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"td",33)(1,"input",64),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.Yield=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw(),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.focusToItem(r,o))})("onkeypress",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.return(8==i.event.charCode||0==i.event.charCode||13==i.event.charCode)?null:i.event.charCode>=46&&i.event.charCode<=57)}),e.qZA()()}if(2&s){const t=e.oxw(),n=t.index,i=t.$implicit,r=e.oxw();e.xp6(1),e.MGl("id","yield",n,""),e.Q6J("ngModel",i.Yield)("disabled","VIEW"==r.mode)}}function z(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"td",33)(1,"input",57),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.Rate=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw(),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.focusToItemType(r,o))})("onkeypress",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.return(8==i.event.charCode||0==i.event.charCode||13==i.event.charCode)?null:i.event.charCode>=46&&i.event.charCode<=57)}),e.qZA()()}if(2&s){const t=e.oxw(),n=t.index,i=t.$implicit;e.xp6(1),e.MGl("id","rate",n,""),e.Q6J("ngModel",i.Rate)("disabled",!0)}}function X(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"td",33)(1,"input",57),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.Amount=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw(),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.focusToItemType(r,o))})("onkeypress",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.return(8==i.event.charCode||0==i.event.charCode||13==i.event.charCode)?null:i.event.charCode>=46&&i.event.charCode<=57)}),e.qZA()()}if(2&s){const t=e.oxw(),n=t.index,i=t.$implicit;e.xp6(1),e.MGl("id","amount",n,""),e.Q6J("ngModel",i.Amount)("disabled",!0)}}function ee(s,a){if(1&s&&(e.TgZ(0,"option",63),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.Q6J("value",t.ITEMTYPECODE),e.xp6(1),e.Oqu(t.ITEMTYPENAME)}}function te(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr",51),e.NdJ("click",function(){const r=e.CHM(t).index,o=e.oxw();return e.KtG(o.RowClick(r))})("keydown.shift.delete",function(){const r=e.CHM(t).index,o=e.oxw();return e.KtG(o.deleteRow(r))}),e.TgZ(1,"td",52),e._uU(2),e.qZA(),e.TgZ(3,"td",27)(4,"input",53),e.NdJ("change",function(i){const r=e.CHM(t),o=r.$implicit,l=r.index,T=e.oxw();return o.IsChoiceItem=i.target.checked?1:0,e.KtG(T.changeItem(l))})("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.IsChoiceItem=i)}),e.qZA()(),e.TgZ(5,"td",27)(6,"input",54),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.MENUCODE=i)}),e.qZA()(),e.TgZ(7,"td",28)(8,"input",55),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.DESCA=i)})("keydown.Enter",function(){const r=e.CHM(t).index,o=e.oxw();return e.KtG(o.showItemPopUp(r))}),e.qZA()(),e.YNc(9,V,4,4,"td",29),e.TgZ(10,"td",30)(11,"input",56),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.BASEUNIT=i)})("keydown.Enter",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addFocus())}),e.qZA()(),e.YNc(12,$,2,3,"td",31),e.TgZ(13,"td",32)(14,"input",57),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.QTY=i)})("keydown.Enter",function(){const i=e.CHM(t),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.focusToItemType(r,o))})("ngModelChange",function(){const r=e.CHM(t).index,o=e.oxw();return e.KtG(o.calculateActualQty(r))})("onkeypress",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.return(8==i.event.charCode||0==i.event.charCode||13==i.event.charCode)?null:i.event.charCode>=46&&i.event.charCode<=57)}),e.qZA()(),e.YNc(15,j,2,3,"td",31),e.YNc(16,z,2,3,"td",31),e.YNc(17,X,2,3,"td",31),e.TgZ(18,"td",33)(19,"select",58),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.IsTakeAwayItem=i)})("keydown.Enter",function(){const i=e.CHM(t),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.onEnterClickONItemType(r,o))}),e.YNc(20,ee,2,2,"option",59),e.qZA()(),e.TgZ(21,"td",34)(22,"input",60),e.NdJ("ngModelChange",function(i){const o=e.CHM(t).$implicit;return e.KtG(o.ChoiceCount=i)})("keydown.Enter",function(){const i=e.CHM(t),r=i.$implicit,o=i.index,l=e.oxw();return e.KtG(l.addNextRow(r,o))}),e.qZA()()()}if(2&s){const t=a.$implicit,n=a.index,i=e.oxw();e.xp6(1),e.MGl("id","sno",n,""),e.xp6(1),e.hij(" ",n+1," "),e.xp6(2),e.Q6J("ngModel",t.IsChoiceItem)("disabled",i.checkValidate(n)),e.xp6(2),e.MGl("id","menuCode",n,""),e.Q6J("ngModel",t.MENUCODE)("disabled","VIEW"==i.mode),e.xp6(2),e.MGl("id","desca",n,""),e.Q6J("ngModel",t.DESCA)("disabled","VIEW"==i.mode),e.xp6(1),e.Q6J("ngIf",1==i.masterService.userSetting.EnableServiceCharge),e.xp6(2),e.MGl("id","unit",n,""),e.Q6J("ngModel",t.BASEUNIT)("disabled",1==t.IsChoiceItem||"VIEW"==i.mode),e.xp6(1),e.Q6J("ngIf",1==i.masterService.userSetting.EnableServiceCharge),e.xp6(2),e.MGl("id","qty",n,""),e.Q6J("ngModel",t.QTY)("disabled","VIEW"==i.mode),e.xp6(1),e.Q6J("ngIf",1==i.masterService.userSetting.EnableServiceCharge),e.xp6(1),e.Q6J("ngIf",1==i.masterService.userSetting.EnableServiceCharge),e.xp6(1),e.Q6J("ngIf",1==i.masterService.userSetting.EnableServiceCharge),e.xp6(2),e.MGl("id","itemType",n,""),e.Q6J("ngModel",t.IsTakeAwayItem)("disabled","VIEW"==i.mode),e.xp6(1),e.Q6J("ngForOf",i.itemTypeList),e.xp6(2),e.MGl("id","noOfCoiceItem",n,""),e.Q6J("ngModel",t.ChoiceCount)("disabled",0==t.IsChoiceItem||"VIEW"==i.mode)}}let x=(()=>{class s{constructor(t,n,i,r,o,l){this.masterService=t,this._trnMainService=n,this.alertService=i,this.loadingService=r,this.MasterRepo=o,this.BomRepo=l,this.mode="add",this.showStockedQuantityOnly=0,this.count=0,this.itemTypeList=[],this.TOTCOST=0,this.TOTCOSTPERUNIT=0,this.gridProductPopupSettings=new d.im,this.gridItemPopupSettings=new d.im,this.gridItemviewSettings=new d.im,this.gridItemeditSettings=new d.im,this.gridGroupSettings=new d.im,this.activerowIndex=0,this.receipemain={},this.onReset(),this.gridItemPopupSettings=Object.assign(new d.im,{title:"ITEMS",apiEndpoints:"/getItemListExceptService",defaultFilterIndex:1,useDefinefilterValue:"",columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"ITEM NAME",hidden:!1,noSearch:!1},{key:"BASEUNIT",title:"UNIT",hidden:!1,noSearch:!0},{key:"costprice",title:"COST PRICE",hidden:!1,noSearch:!0,alignment:"right",pipe:!0},{key:"BARCODE",title:"BARCODE",hidden:!0,noSearch:!1}]}),this.gridItemviewSettings={title:"Norms Configured Item Section",apiEndpoints:"/getReceipeListByEdit",defaultFilterIndex:0,columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"ITEM DESCRIPTION",hidden:!1,noSearch:!1}]},this.gridItemeditSettings={title:"Norms Configured Item Section",apiEndpoints:"/getReceipeListByEdit",defaultFilterIndex:0,columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"ITEM DESCRIPTION",hidden:!1,noSearch:!1}]},this.gridGroupSettings=Object.assign(new d.im,{title:"Group",apiEndpoints:"/getItemGroupListExceptService",defaultFilterIndex:1,useDefinefilterValue:"",columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"ITEM NAME",hidden:!1,noSearch:!1},{key:"costprice",title:"COST PRICE",hidden:!1,noSearch:!0,alignment:"right",pipe:!0},{key:"BARCODE",title:"BARCODE",hidden:!0,noSearch:!1}]}),this.receipemain.FACTOR=1,this.masterService.getItemTypeList().subscribe(T=>{this.itemTypeList=T})}ngOnInit(){1==this.masterService.userSetting.EnableServiceCharge&&(this.receipemain.showInvenoryItem=1,this.receipemain.isChoiceItem=0)}productSelect(){this.genericGridForProduct.show(),this.gridProductPopupSettings=Object.assign(new d.im,{title:"ITEMS",apiEndpoints:0==this.masterService.userSetting.EnableServiceCharge?"/getMenuItemList":`/getMenuItemList/${this.receipemain.showInvenoryItem}`,defaultFilterIndex:1,columns:[{key:"MENUCODE",title:"ITEM CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"ITEM NAME",hidden:!1,noSearch:!1},{key:"BASEUNIT",title:"UNIT",hidden:!1,noSearch:!0},{key:"IN_RATE_A",title:"MRP",hidden:!1,noSearch:!1},{key:"BARCODE",title:"BARCODE",hidden:!0,noSearch:!1}]})}onChangeEvent(t){t&&(this.receipemain.showInvenoryItem=0)}onChangeShowInventoryEvent(t){t&&(this.receipemain.isChoiceItem=0)}dblClickPopupProductINEIDT(t,n="NEW"){this.receipemain.MCODE=t.MCODE,this.receipemain.ENO=t.ENO,this.receipemain.DESCA=t.DESCA,this.receipemain.FACTOR=t.FACTOR,"NEW"==n&&(this.receipemain.FACTOR=1),this.BomRepo.getReceipeListByID(this.receipemain.ENO).subscribe(i=>{let r;"ok"==i.status&&null!=i.result?(this.receipemain.prodList=i.result.res1,this.mode=n):(this.mode="NEW",this.receipemain.prodList=[],this.receipemain.prodList.push({}),setTimeout(()=>{this.masterService.focusAnyControl("desca"+this.activerowIndex)},100)),r=this.receipemain.prodList.length-1,setTimeout(()=>{this.masterService.focusAnyControl("qty"+r)},100)})}factorVerify(){this.receipemain.FACTOR<=0&&this.alertService.warning("The value should be positive or above 0")}dblClickPopupProduct(t,n="NEW"){let i=t.MCODE;"NEW"==n&&this.BomRepo.checkDuplicateRecipe(t.MCODE).subscribe(r=>{"ok"==r.status?(this.setItemDetail(t,i),this.receipemain.FACTOR=1,this.masterService.focusAnyControl("desca"+this.activerowIndex)):this.alertService.info(r.result.concat(t?.DESCA))}),("VIEW"==n||"EDIT"==n)&&(this.setItemDetail(t,i),this.BomRepo.getReceipeListByID(this.receipemain.ENO).subscribe(r=>{let o;"ok"==r.status&&null!=r.result?(this.receipemain.prodList=r.result.res1,this.TOTCOST=r.result.res.TOTALCOST,this.mode=n):(this.mode="NEW",this.receipemain.prodList=[],this.receipemain.prodList.push({}),setTimeout(()=>{this.masterService.focusAnyControl("desca"+this.activerowIndex)},100)),o=this.receipemain.prodList.length-1,setTimeout(()=>{this.masterService.focusAnyControl("qty"+o)},100)}))}dblclikedForGroup(t){if(null!=this.receipemain.prodList.filter(n=>n.RMCODE==t.MCODE)[0]){if(!confirm("Are you sure you want to add "+t.DESCA+"again ?"))return;this.receipemain.prodList[this.activerowIndex].RMCODE=t.MCODE,this.receipemain.prodList[this.activerowIndex].DESCA=t.DESCA,this.receipemain.prodList[this.activerowIndex].BASEUNIT=t.BASEUNIT}else this.receipemain.prodList[this.activerowIndex].RMCODE=t.MCODE,this.receipemain.prodList[this.activerowIndex].MENUCODE=t.MENUCODE,this.receipemain.prodList[this.activerowIndex].DESCA=t.DESCA,this.masterService.focusAnyControl("qty"+this.activerowIndex)}setItemDetail(t,n){this.receipemain.MCODE=t.MCODE,this.mcodeForSubItem=t.MCODE,this.receipemain.ENO=t.ENO,this.receipemain.DESCA=t.DESCA,this.receipemain.FACTOR=t.FACTOR,1==this.masterService.userSetting.EnableServiceCharge&&this.BomRepo.getListFromKey("/getProductYield/",n).subscribe(i=>{this.subItemList=i.result},i=>{})}setYield(t){let n=this.subItemList.filter(i=>i.SubItem===t.target.value).map(i=>i.Yield);this.receipemain.Yield=n[0]}setYieldForGrid(t,n){let i=this.receipemain.prodList[n].SubItemList.filter(r=>r.SubItem===t.target.value).map(r=>r.Yield);this.receipemain.prodList[n].Yield=i[0],document.getElementById("qty"+n).focus()}RowClick(t){this.activerowIndex=this.rowIndex=t}deleteRow(t){this.activerowIndex=t,confirm("Are you sure u you want to delete the Row?")&&(this.receipemain.prodList.splice(this.activerowIndex,1),this.calculateTotalAmount())}addNextRow(t,n){if(this.receipemain.prodList[n].SubItemList?.length>0&&(null==this.receipemain.prodList[n].SubItem||null==this.receipemain.prodList[n].SubItem))this.alertService.warning("Sub Item must be selected.");else if(t.RMCODE){if(!t.QTY)return this.alertService.warning("Quantity is required."),void this.alertService.emitShowHideSubject.subscribe(o=>{setTimeout(()=>{document.getElementById("qty"+this.activerowIndex).focus()},0)});if(this.checkValidation(t)){this.activerowIndex=n,this.receipemain.prodList.push({DESCA:"",RMCODE:"",QTY:null,IsChoiceItem:0,ChoiceCount:null});var i=this.activerowIndex+1;document.getElementById("sno"+this.activerowIndex).scrollIntoView(),setTimeout(()=>{this.masterService.focusAnyControl("desca"+i)},500)}else{if(!confirm("Are you sure you want to proceed with empty data?"))return void this.masterService.focusAnyControl("mcode"+this.activerowIndex);this.activerowIndex=n,this.receipemain.prodList.push({DESCA:"",RMCODE:"",QTY:null,SubItem:null,Yield:null,IsChoiceItem:0})}}else this.alertService.warning("Product is required.")}checkValidation(t){return!(!t.RMCODE||!t.QTY)}onClickDelete(){this.receipemain.MCODE&&(this.loadingService.show("Please Wait.."),this.BomRepo.deleteBOMMaster(this.receipemain.MCODE).subscribe(t=>{"ok"===t.status?(this.alertService.info(t.result),this.onReset(),this.loadingService.hide()):(this.alertService.info(t.result),this.loadingService.hide())},t=>{this.loadingService.hide(),this.alertService.info(t.result.error)}))}onSave(){"VIEW"!=this.mode.toUpperCase()?this.receipemain.FACTOR<=0?this.alertService.info("The value should be positive or above 0"):(this.receipemain.prodList=this.receipemain.prodList.filter(t=>null!=t.RMCODE&&""!=t.RMCODE),1==this.masterService.userSetting.EnableServiceCharge&&this.receipemain.prodList.find(t=>!t.SubItem&&t.SubItemList?.length>0)?this.alertService.info("Please enter Sub Item"):this.receipemain.prodList.find(t=>!t.QTY)?this.alertService.info("Please enter Qty"):""!=this.receipemain.MCODE&&null!=this.receipemain.MCODE&&null!=this.receipemain.MCODE?(this.loadingService.show("Please wait.... Saving your data."),this.BomRepo.saveBOMMaster({mode:this.mode,data:this.receipemain}).subscribe(n=>{"ok"==n.status?(this.alertService.success("Data Saved Successfully"),this.onReset(),this.receipemain.FACTOR=1,this.loadingService.hide()):(this.loadingService.hide(),this.alertService.info(n.result.error))},n=>{})):this.alertService.info("Please select combo pack.")):this.alertService.info("Cannot Save in view Mode")}showItemPopUp(t){1==this.receipemain.prodList[t].IsChoiceItem?this.genericGridGroup.show():(this.genericGridForItem.show(),this.activerowIndex=t)}dblClickPopupItem(t){if(this.receipemain.DESCA!=t.DESCA)if(null!=this.receipemain.prodList.filter(n=>n.RMCODE==t.MCODE)[0]){if(!confirm("Are you sure you want to add "+t.DESCA+"again ?"))return;this.receipemain.prodList[this.activerowIndex].RMCODE=t.MCODE,this.receipemain.prodList[this.activerowIndex].DESCA=t.DESCA,this.receipemain.prodList[this.activerowIndex].BASEUNIT=t.BASEUNIT,this.receipemain.prodList[this.activerowIndex].Rate=t.costprice,this.BomRepo.getListFromKey("/getProductYield/",this.receipemain.prodList[this.activerowIndex].RMCODE).subscribe(n=>{this.receipemain.prodList[this.activerowIndex].SubItemList=n.result,this.masterService.focusAnyControl(this.receipemain.prodList[this.activerowIndex].SubItemList?.length>0?"subItem"+this.activerowIndex:"unit"+this.activerowIndex)},n=>{})}else this.receipemain.prodList[this.activerowIndex].RMCODE=t.MCODE,this.receipemain.prodList[this.activerowIndex].MENUCODE=t.MENUCODE,this.receipemain.prodList[this.activerowIndex].DESCA=t.DESCA,this.receipemain.prodList[this.activerowIndex].BASEUNIT=t.BASEUNIT,this.receipemain.prodList[this.activerowIndex].Rate=t.costprice,1==this.masterService.userSetting.EnableServiceCharge?this.BomRepo.getListFromKey("/getProductYield/",this.receipemain.prodList[this.activerowIndex].RMCODE).subscribe(n=>{this.receipemain.prodList[this.activerowIndex].SubItemList=n.result,this.masterService.focusAnyControl(this.receipemain.prodList[this.activerowIndex].SubItemList?.length>0?"subItem"+this.activerowIndex:"unit"+this.activerowIndex)},n=>{}):this.masterService.focusAnyControl("qty"+this.activerowIndex);else this.alertService.info("Recipe item and item required to create the recipe cannot be same !!!")}onReset(){this.receipemain={},this.receipemain.prodList=[],this.product="",this.receipemain.showInvenoryItem=1;this.receipemain.prodList.push({IsChoiceItem:0}),this.mode="NEW",this.receipemain.FACTOR=1,this.TOTCOST=0,this.TOTCOSTPERUNIT=0,setTimeout(()=>{this.masterService.focusAnyControl("itemDesc"+this.activerowIndex)},100)}dblClickview(t){this.dblClickPopupProduct(t,"VIEW")}dblClickedit(t){this.dblClickPopupProduct(t,"EDIT")}dblClickedGroup(t){this.dblclikedForGroup(t)}onView(){this.genericGridview.show("",!1,"receipemainlist")}onEdit(){this.genericGridedit.show("",!1,"receipemainlist")}addFocus(){setTimeout(()=>{this.masterService.focusAnyControl("qty"+this.activerowIndex)})}focusToQty(){this.masterService.focusAnyControl("qty"+this.activerowIndex)}focusToItemType(){1==this.masterService.userSetting.EnableServiceCharge?(this.calculateActualQty(this.activerowIndex),this.calculateTotalAmount(),this.masterService.focusAnyControl("yield"+this.activerowIndex)):setTimeout(()=>{this.masterService.focusAnyControl("itemType"+this.activerowIndex)})}focusToItem(){setTimeout(()=>{this.masterService.focusAnyControl("itemType"+this.activerowIndex)})}checkValidate(t){if("NEW"==this.mode||"VIEW"==this.mode)return!(null==this.receipemain.prodList[t].DESCA||""==this.receipemain.prodList[t].DESCA||null==this.receipemain.prodList[t].DESCA)}validation(t,n){return t.SubItemList?.length>0&&!t.SubItem?(this.alertService.info("Please select Sub Item!"),!1):!!t.QTY||(this.alertService.info("Please enter Qty!"),!1)}onEnterClickONItemType(t,n){1==this.masterService.userSetting.EnableServiceCharge&&!this.validation(t,n)||(0==this.receipemain.prodList[n].IsChoiceItem&&this.addNextRow(t,n),1==this.receipemain.prodList[n].IsChoiceItem&&this.masterService.focusAnyControl("noOfCoiceItem"+this.activerowIndex))}changeItem(t){this.receipemain.prodList[t].DESCA="",this.receipemain.prodList[t].RMCODE="",this.receipemain.prodList[t].QTY=null,this.receipemain.prodList[t].BASEUNIT=null,this.receipemain.prodList[t].MENUCODE=""}calculateActualQty(t){const n=this.receipemain.prodList[t].Yield??0;n>0?(this.receipemain.prodList[t].Entry_Qty=100/n*this.receipemain.prodList[t].QTY,this.receipemain.prodList[t].Amount=this.receipemain.prodList[t].Entry_Qty*this.receipemain.prodList[t].Rate):this.receipemain.prodList[t].Amount=this.receipemain.prodList[t].QTY*this.receipemain.prodList[t].Rate}calculateTotalAmount(){this.TOTCOST=0,this.receipemain.prodList.forEach(t=>{this.TOTCOST+=this.nullToZeroConverter(t.Amount)})}nullToZeroConverter(t){return void 0===t||null==t||""===t||!Number.isFinite(t)||Number.isNaN(t)||isNaN(parseFloat(t))?0:parseFloat(t)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.P),e.Y36(w.p),e.Y36(y.c),e.Y36(b.V),e.Y36(v.P),e.Y36(O))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-bom-master"]],viewQuery:function(t,n){if(1&t&&(e.Gf(k,5),e.Gf(R,5),e.Gf(L,5),e.Gf(Z,5),e.Gf(G,5)),2&t){let i;e.iGM(i=e.CRH())&&(n.genericGridForProduct=i.first),e.iGM(i=e.CRH())&&(n.genericGridForItem=i.first),e.iGM(i=e.CRH())&&(n.genericGridview=i.first),e.iGM(i=e.CRH())&&(n.genericGridedit=i.first),e.iGM(i=e.CRH())&&(n.genericGridGroup=i.first)}},decls:89,vars:25,consts:[[1,"heading"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],["class","btn btn-info pull-right","style","font-size: 12px;",3,"click",4,"ngIf"],[1,"main-wrap"],[1,"bom-body"],[1,"card","mt-2"],[1,"card-body"],[2,"margin-top","10px"],[1,"form-group","row"],[1,"col-sm-1","form-control-label",2,"font-size","13px","width","auto"],[1,"col-sm-4"],[4,"ngIf"],["for","type",1,"CellWithComment",2,"font-size","13px"],[1,"col-sm-1"],["min","1","type","number","placeholder","",1,"form-control",2,"width","70%",3,"ngModel","ngModelChange","change"],["class","col-sm-5",4,"ngIf"],[1,"col-sm-12",2,"padding-right","30px"],[1,"bom-wrap"],[1,"table-wrap",2,"overflow","auto","height","70vh"],[1,"table","table-striped",2,"width","100%"],[2,"width","2%"],[2,"width","7%"],[2,"width","15%"],["style","width: 10%;",4,"ngIf"],[2,"width","5%"],["style","width: 6%;",4,"ngIf"],[2,"width","4%"],[2,"width","6%"],[2,"width","10%"],[3,"click","keydown.shift.delete",4,"ngFor","ngForOf"],[1,"row","clearfix","footer",2,"margin-top","7%","position","fixed","width","100%","bottom","-17px"],[1,"col-md-12",2,"vertical-align","center"],[1,"row",2,"justify-content","flex-end"],[2,"width","23.25%"],[3,"popupsettings","onItemDoubleClick"],["genericGridProduct",""],["genericGridItem",""],["genericGridview",""],["genericGridedit",""],["genericGridGroup",""],["id","itemDesc","type","text","placeholder","Press Enter to Select","readonly","","autofocus","","autocomplete","off",1,"CellWithComment",2,"width","100%",3,"ngModel","ngModelChange","keydown.Enter"],["type","text","readonly","",2,"width","100%",3,"ngModel","ngModelChange"],[1,"col-sm-5"],["type","checkbox","id","showInventoryItems",3,"ngModel","checked","ngModelChange","change"],[2,"font-size","13px"],[3,"click","keydown.shift.delete"],[2,"width","2%",3,"id"],["type","checkbox",2,"width","20px","margin-left","15px",3,"ngModel","disabled","change","ngModelChange"],["type","text","autocomplete","off","readonly","",1,"CellWithComment",2,"width","98%",3,"id","ngModel","disabled","ngModelChange"],["type","text","autocomplete","off","placeholder","Press Enter to Select Item","readonly","",1,"CellWithComment",2,"width","100%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter"],["type","text","readonly","",1,"CellWithComment",2,"width","100%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter"],["type","number",1,"CellWithComment",2,"width","98%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter","onkeypress"],[2,"width","98%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter"],[3,"value",4,"ngFor","ngForOf"],["type","number",1,"CellWithComment",2,"width","98%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter"],[2,"width","100%",3,"id","ngModel","disabled","ngModelChange","change"],["value",""],[3,"value"],["type","number","readonly","",1,"CellWithComment",2,"width","98%",3,"id","ngModel","disabled","ngModelChange","keydown.Enter","onkeypress"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"h5"),e._uU(5),e.qZA()()(),e.TgZ(6,"div",3)(7,"button",4),e._uU(8,"Back"),e.qZA(),e.TgZ(9,"button",5,6),e.NdJ("click",function(){return n.onEdit()}),e._uU(11,"Edit"),e.qZA(),e.TgZ(12,"button",7),e.NdJ("click",function(){return n.onView()}),e._uU(13,"View"),e.qZA(),e.TgZ(14,"button",7),e.NdJ("click",function(){return n.onReset()}),e._uU(15,"Reset"),e.qZA(),e.TgZ(16,"button",5,6),e.NdJ("click",function(){return n.onSave()}),e._uU(18,"Save"),e.qZA(),e.YNc(19,P,2,0,"button",8),e.qZA()()(),e.TgZ(20,"div",9)(21,"div")(22,"div",10)(23,"div",11)(24,"div",12)(25,"div",13),e.ynx(26),e.TgZ(27,"div",14)(28,"label",15),e._uU(29,"Item Name :"),e.qZA(),e.TgZ(30,"div",16),e.YNc(31,U,2,1,"ng-container",17),e.YNc(32,Q,2,1,"ng-container",17),e.qZA(),e.TgZ(33,"label",18),e._uU(34,"Factor :"),e.qZA(),e.TgZ(35,"div",19)(36,"input",20),e.NdJ("ngModelChange",function(r){return n.receipemain.FACTOR=r})("change",function(){return n.factorVerify()}),e.qZA()(),e.YNc(37,F,6,2,"div",21),e.qZA(),e.BQk(),e.qZA()()()()()(),e.TgZ(38,"div",1)(39,"div",22)(40,"div",23)(41,"div",24)(42,"table",25)(43,"thead")(44,"tr")(45,"th",26),e._uU(46,"S.No."),e.qZA(),e.TgZ(47,"th",27),e._uU(48,"Choice Item"),e.qZA(),e.TgZ(49,"th",27),e._uU(50,"Item Code"),e.qZA(),e.TgZ(51,"th",28),e._uU(52,"Description"),e.qZA(),e.YNc(53,J,2,0,"th",29),e.TgZ(54,"th",30),e._uU(55,"Unit"),e.qZA(),e.YNc(56,Y,2,0,"th",31),e.TgZ(57,"th",32),e._uU(58,"Qty"),e.qZA(),e.YNc(59,K,2,0,"th",31),e.YNc(60,H,2,0,"th",31),e.YNc(61,q,2,0,"th",31),e.TgZ(62,"th",33),e._uU(63,"Item Type"),e.qZA(),e.TgZ(64,"th",34),e._uU(65,"No. of Choice Item"),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,te,23,28,"tr",35),e.qZA()()()()()(),e.TgZ(68,"div",36)(69,"div",37)(70,"div",38)(71,"div",39)(72,"h6"),e._uU(73),e.ALo(74,"twoDigitNumber"),e.qZA()(),e.TgZ(75,"div",39)(76,"h6"),e._uU(77),e.ALo(78,"twoDigitNumber"),e.qZA()()()()(),e.TgZ(79,"generic-popup-grid",40,41),e.NdJ("onItemDoubleClick",function(r){return n.dblClickPopupProduct(r)}),e.qZA(),e.TgZ(81,"generic-popup-grid",40,42),e.NdJ("onItemDoubleClick",function(r){return n.dblClickPopupItem(r)}),e.qZA(),e.TgZ(83,"generic-popup-grid",40,43),e.NdJ("onItemDoubleClick",function(r){return n.dblClickview(r)}),e.qZA(),e.TgZ(85,"generic-popup-grid",40,44),e.NdJ("onItemDoubleClick",function(r){return n.dblClickedit(r)}),e.qZA(),e.TgZ(87,"generic-popup-grid",40,45),e.NdJ("onItemDoubleClick",function(r){return n.dblClickedGroup(r)}),e.qZA()),2&t){const i=e.MAs(10);e.xp6(5),e.hij("NORMS SETTING [",n.mode,"]"),e.xp6(4),e.Q6J("disabled",i.isOldFYearDB()),e.xp6(7),e.Q6J("disabled",i.isOldFYearDB()),e.xp6(3),e.Q6J("ngIf","VIEW"==(null==n.mode?null:n.mode.toUpperCase())),e.xp6(12),e.Q6J("ngIf","NEW"==n.mode),e.xp6(1),e.Q6J("ngIf","VIEW"==n.mode||"EDIT"==n.mode),e.xp6(4),e.Q6J("ngModel",n.receipemain.FACTOR),e.xp6(1),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(16),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(3),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(3),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(1),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(1),e.Q6J("ngIf",1==n.masterService.userSetting.EnableServiceCharge),e.xp6(6),e.Q6J("ngForOf",n.receipemain.prodList),e.xp6(6),e.hij("TOTAL COST: ",e.lcZ(74,21,n.TOTCOST),""),e.xp6(4),e.hij("TOTAL COST PER UNIT: ",e.lcZ(78,23,n.TOTCOST)," "),e.xp6(2),e.Q6J("popupsettings",n.gridProductPopupSettings),e.xp6(2),e.Q6J("popupsettings",n.gridItemPopupSettings),e.xp6(2),e.Q6J("popupsettings",n.gridItemviewSettings),e.xp6(2),e.Q6J("popupsettings",n.gridItemeditSettings),e.xp6(2),e.Q6J("popupsettings",n.gridGroupSettings)}},dependencies:[m.sg,m.O5,f.rH,_.YN,_.Kr,_.Fj,_.wV,_.Wl,_.EJ,_.JJ,_.qQ,_.On,d.Zl,B.H,N.g],styles:[".form-control[_ngcontent-%COMP%]{color:#000}",".card-body[_ngcontent-%COMP%] {\n        padding: 0 !important;\n    }\n\n    .form-group.row[_ngcontent-%COMP%] {\n        margin-bottom: 5px;\n    }\n\n    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n        height: 26px;\n        font-size: 14px;\n        padding-top: 0;\n        padding-bottom: 0px;\n    }\n\n    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n        padding: .2rem;\n        vertical-align: top;\n        border-top: 1px solid #dee2e6;\n        font-size: 14px;\n    }\n    th[_ngcontent-%COMP%]{\n        position: sticky; top: -1px; z-index: 1;\n        background-color: #7ed0ff;\n    }\n\n    th[_ngcontent-%COMP%]:first-child {\n        border-bottom: 1px solid #dee2e6;\n    }\n    .highlighted[_ngcontent-%COMP%]{\n        background-color: #ced6d3;\n    }\n    \n  \n    .footer[_ngcontent-%COMP%] {\n      \n      \n      margin-right: 1px;\n      margin-bottom: 2.8%;\n      clear: both;\n      padding-top: 20px;\n      border-top: 1px solid #eaeaea;\n      border-left: 1px solid #eaeaea;\n      border-right: 1px solid #eaeaea;\n      background-color: #eaeaea;\n    }"]}),s})();const ie=[{path:"",component:x},{path:"norm",component:x}];let ne=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[f.Bz.forChild(ie),f.Bz]}),s})();var re=c(59629);let oe=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[O],imports:[m.ez,ne,u.m,h.JX,C.Xd,M.Is,p.b.forRoot(),re.Z]}),s})()}}]);