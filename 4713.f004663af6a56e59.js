(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4713],{49457:function(M,T){var _;void 0!==(_=function(){"use strict";function f(r,e,p){var s=new XMLHttpRequest;s.open("GET",r),s.responseType="blob",s.onload=function(){w(s.response,e,p)},s.onerror=function(){console.error("could not download file")},s.send()}function C(r){var e=new XMLHttpRequest;e.open("HEAD",r,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function m(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(e)}}var d="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,g=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=d.saveAs||("object"!=typeof window||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(r,e,p){var s=d.URL||d.webkitURL,c=document.createElement("a");c.download=e=e||r.name||"download",c.rel="noopener","string"==typeof r?(c.href=r,c.origin===location.origin?m(c):C(c.href)?f(r,e,p):m(c,c.target="_blank")):(c.href=s.createObjectURL(r),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){m(c)},0))}:"msSaveOrOpenBlob"in navigator?function(r,e,p){if(e=e||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function b(r,e){return typeof e>"u"?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,p),e);else if(C(r))f(r,e,p);else{var s=document.createElement("a");s.href=r,s.target="_blank",setTimeout(function(){m(s)})}}:function(r,e,p,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof r)return f(r,e,p);var c="application/octet-stream"===r.type,E=/constructor/i.test(d.HTMLElement)||d.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||c&&E||g)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var P=O.result;P=v?P:P.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=P:location=P,s=null},O.readAsDataURL(r)}else{var x=d.URL||d.webkitURL,B=x.createObjectURL(r);s?s.location=B:location.href=B,s=null,setTimeout(function(){x.revokeObjectURL(B)},4e4)}});d.saveAs=w.saveAs=w,M.exports=w}.apply(T,[]))&&(M.exports=_)},18488:(M,T,a)=>{"use strict";a.d(T,{G:()=>d});var u=a(76165),_=a(79765),b=a(66274),f=a(48083),C=a(67297),m=a(71180);let d=(()=>{class g{constructor(r,e,p,s){this.http=r,this.activatedRoute=e,this.authService=p,this.state=s;const c=this.state.getGlobalSetting("apiUrl");c&&c.length>0&&(this.apiUrl=c)}getRequestOption(){return new u.WM({"Content-type":"application/csv",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}RequestOptionForCSV(){return{headers:new u.WM({Authorization:this.authService.getAuth().token})}}downloadSampleFile(r,e="download"){return this.http.get(this.apiUrl+`${r}`,{headers:this.getRequestOption(),responseType:"blob"})}downloadSampleExcelforPIImport(r){return this.http.post(this.apiUrl+"/downloadSampleExcelforPIImport",r,{responseType:"blob"})}cancelPhysicalStock(r){return this.http.post(`${this.apiUrl}/physicalStockCancel?sessionId=${r}`,null)}importSelectedFiles(r,e){let p={status:"error",result:"error"},s=new _.xQ;return this.http.post(this.apiUrl+`${r}`,e).subscribe(c=>{s.next(c),s.unsubscribe()},c=>{p.status="error",p.result=c,s.next(p),s.unsubscribe()}),s}}return g.\u0275fac=function(r){return new(r||g)(b.LFG(u.eN),b.LFG(f.gz),b.LFG(C.e),b.LFG(m.q))},g.\u0275prov=b.Yz7({token:g,factory:g.\u0275fac}),g})()},34365:(M,T,a)=>{"use strict";a.r(T),a.d(T,{BranchWisePriceModule:()=>Y});var u=a(92752),_=a(53181),b=a(82738),f=a(46543),C=a(72533),m=a(12640),d=a(59629),g=a(88465),w=a(55618),r=a(79765),e=a(66274),p=a(76165),s=a(67297),c=a(71180);let E=(()=>{class n{constructor(t,i,o){this.http=t,this.authService=i,this.state=o,this.userProfile={};const l=this.state.getGlobalSetting("apiUrl");l&&l.length>0&&(this.apiUrl=l),this.userProfile=i.getUserProfile()}getBranchwisePriceByID(t){return new r.xQ,this.http.post(this.apiUrl+"/getRateGroupByID",{mode:"query",data:{BranchwisePriceID:t}})}getBranchwisePriceList(t,i,o,l){return this.http.get(`${this.apiUrl}/getBranchwisePriceList?Mode=${t}&RateType=${i}&ID=${o}&INITIAL=${l}`)}downloadRateGroupExcel(t,i,o,l){return this.http.get(this.apiUrl+`/getExcelForBranchWisePriceList?mode=${t}&rateType=${i}&ID=${o}&INITIAL=${l}`,{responseType:"blob"})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.eN),e.LFG(s.e),e.LFG(c.q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var v=a(48083),O=a(28698),x=a(49457),B=a(87584),P=a(248),j=a(67311),U=a(14970),R=a(53074),y=a(7587);const D=["genericGrid"];function L(n,h){if(1&n&&(e.TgZ(0,"option",34),e._uU(1),e.qZA()),2&n){const t=h.$implicit;e.s9C("value",t.Division),e.xp6(1),e.hij(" ",t.NAME," ")}}function W(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"label",9),e._uU(2,"Group Name:"),e.qZA(),e.TgZ(3,"input",36),e.NdJ("keydown.Tab",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.parentKeyEvent())})("ngModelChange",function(o){e.CHM(t);const l=e.oxw();return e.KtG(l.branchwisePriceObj.DESCAGroup=o)})("keydown.enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.parentKeyEvent())}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.branchwisePriceObj.DESCAGroup)("disabled",t.disableOnView)}}function N(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"label",14),e._uU(2,"Category:"),e.qZA(),e.TgZ(3,"input",37),e.NdJ("keydown.Tab",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.CatkeyEvent())})("ngModelChange",function(o){e.CHM(t);const l=e.oxw();return e.KtG(l.branchwisePriceObj.MCATCategory=o)})("keydown.enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.CatkeyEvent())}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.branchwisePriceObj.MCATCategory)("disabled",t.disableOnView)}}function I(n,h){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.DESCA)}}function F(n,h){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.DESCA)}}function k(n,h){if(1&n&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.DESCA)}}function G(n,h){if(1&n){const t=e.EpF();e.TgZ(0,"tr",38),e.NdJ("keydown.Shift.delete",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.deleteRow())}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.YNc(5,I,2,1,"td",39),e.YNc(6,F,2,1,"td",39),e.YNc(7,k,2,1,"td",39),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"number"),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA()()}if(2&n){const t=h.$implicit,i=h.index,o=e.oxw();e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.MENUCODE),e.xp6(1),e.Q6J("ngIf","bygroupname"==o.flag),e.xp6(1),e.Q6J("ngIf","bycategory"==o.flag),e.xp6(1),e.Q6J("ngIf","byitemname"==o.flag),e.xp6(2),e.Oqu(t.BASEUNIT),e.xp6(2),e.Oqu(e.xi3(12,11,t.BranchRate,"1.2-2")),e.xp6(3),e.Oqu(t.confactor),e.xp6(2),e.Oqu(t.RATE),e.xp6(2),e.Oqu(e.xi3(19,14,t.SalesRate,"1.2-2")),e.xp6(3),e.Oqu(t.LabeledMRP)}}const q=[{path:"",component:(()=>{class n{constructor(t,i,o,l,S,A,Z,K,Q,$){this._trnMainService=t,this.preventNavigationService=i,this.alertService=o,this.loadingService=l,this.masterService=S,this.router=A,this.activatedRoute=Z,this.fb=K,this.branchwisepriceService=Q,this._spinnerservice=$,this.gridPopupSettings=new O.im,this.enableTable=!1,this.divisionList=[],this.branchwisePriceObj={},this.mode="",this.branchwisepriceList=[],this.branchwisepriceListData=[],this.disableOnView=!1,this.activerowIndex=0,this.masterService.getDivisionForTrnPrivilege().subscribe(H=>{this.divisionList=H,console.log("divisionList",this.divisionList)})}ngOnInit(){this.modeTitle="Branch Wise Price List"}dblClickPopupItem(t){switch(console.log(t,"value"),this.flag){case"bygroupname":this.branchwisePriceObj.BranchwisePrice_ID=t.MCODE,this.branchwisePriceObj.DESCAGroup=t.DESCA;break;case"bycategory":this.branchwisePriceObj.BranchwisePrice_ID=t.MCAT,this.branchwisePriceObj.MCATCategory=t.MCAT}}ChangeRateType(t){this.disableOfferOn=!1,console.log("change rete",t),this.branchwisePriceObj.BranchwisePrice_Detail=[],this.Offeron="rate",this.addRow(),"bycategory"==t?this.flag="bycategory":"bygroupname"==t?this.flag="bygroupname":"byitemname"==t&&(this.flag="byitemname")}addRow(){try{this.branchwisePriceObj.BranchwisePrice_Detail.push({})}catch(i){console.log(i),alert(i)}}parentKeyEvent(){console.log("parent key event"),this.disableOfferOn=!0,this.gridPopupSettings={title:"Parent",apiEndpoints:"/getMenuitemPagedListForScheme/Parent",defaultFilterIndex:0,columns:[{key:"MENUCODE",title:"MENU CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"NAME",hidden:!1,noSearch:!1},{key:"PARENT",title:"PARENT",hidden:!1,noSearch:!1}]},this.genericGrid.show()}CatkeyEvent(){this.PlistTitle="Category List",this.disableOfferOn=!0,this.gridPopupSettings={title:"Category",apiEndpoints:"/getMenuitemPagedListForScheme/Category",defaultFilterIndex:0,columns:[{key:"MCAT",title:"Category",hidden:!1,noSearch:!1}]},this.genericGrid.show()}checkValidation(){return null==this.branchwisePriceObj.BranchwisePrice_Name||""==this.branchwisePriceObj.BranchwisePrice_Name||null==this.branchwisePriceObj?(this.alertService.warning("Branch Name is empty"),!1):""==this.branchwisePriceObj.BranchwisePrice_RateType||null==this.branchwisePriceObj.BranchwisePrice_RateType||null==this.branchwisePriceObj?(this.alertService.warning("Rate Type Name is empty"),!1):""==this.branchwisePriceObj.BranchwisePrice_Mode||null==this.branchwisePriceObj.BranchwisePrice_Mode||null==this.branchwisePriceObj?(this.alertService.warning("Mode Name is empty"),!1):"bygroupname"==this.branchwisePriceObj.BranchwisePrice_Mode&&""==this.branchwisePriceObj.DESCAGroup||"bygroupname"==this.branchwisePriceObj.BranchwisePrice_Mode&&null==this.branchwisePriceObj.DESCAGroup?(this.alertService.warning("Group cannot be empty"),!1):!("bycategory"==this.branchwisePriceObj.BranchwisePrice_Mode&&""==this.branchwisePriceObj.MCATCategory||"bycategory"==this.branchwisePriceObj.BranchwisePrice_Mode&&null==this.branchwisePriceObj.MCATCategory)||(this.alertService.warning("Category cannot be empty"),!1)}exportClick(){if(!this.checkValidation())return;let i=this.branchwisePriceObj.BranchwisePrice_RateType,o=this.branchwisePriceObj.BranchwisePrice_ID,l=this.branchwisePriceObj.BranchwisePrice_Mode,S=this.branchwisePriceObj.BranchwisePrice_Name;console.log("blobmew1"),this.loadingService.show("Excel file is downloading..Please wait"),this.branchwisepriceService.downloadRateGroupExcel(l,i,o,S).subscribe(A=>{0==A?.length&&this.alertService.info("No Data Available");let Z=new Blob([A],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});console.log("blobkm",Z,A),x.saveAs(Z,"BrancWisePriceList.xlsx"),this.loadingService.hide()},A=>{this.alertService.info("No Data Available"),this._spinnerservice.hide()})}applyClick(){try{if(!this.checkValidation())return;this._spinnerservice.show("Getting data please wait.."),this.branchwisepriceService.getBranchwisePriceList(this.branchwisePriceObj.BranchwisePrice_Mode,this.branchwisePriceObj.BranchwisePrice_RateType,this.branchwisePriceObj.BranchwisePrice_ID,this.branchwisePriceObj.BranchwisePrice_Name).subscribe(t=>{this.branchwisepriceListData=t,0==this.branchwisepriceListData?.length&&(this.alertService.info("No Data Available"),this._spinnerservice.hide()),this.Salesrates=this.branchwisepriceListData.forEach(i=>i.SalesRate=i.BranchRate*i.confactor),this._spinnerservice.hide()},t=>{this.alertService.info("No Data Available"),this._spinnerservice.hide()})}catch(t){alert(t)}}onReset(){this.branchwisePriceObj={},this.branchwisepriceListData=[]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B.p),e.Y36(P.d),e.Y36(j.c),e.Y36(U.V),e.Y36(R.P),e.Y36(v.F0),e.Y36(v.gz),e.Y36(y.qu),e.Y36(E),e.Y36(U.V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["branchwise-price"]],viewQuery:function(t,i){if(1&t&&e.Gf(D,5),2&t){let o;e.iGM(o=e.CRH())&&(i.genericGrid=o.first)}},decls:70,vars:12,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-7"],[1,"row","pull-right"],["type","button",1,"btn","btn-info","btn-sm",3,"click"],["type","submit",1,"btn","btn-info","btn-sm",3,"disabled","click"],["type","submit",1,"btn","btn-info","btn-sm",3,"click"],[1,"row","plainBackGround",2,"margin-top","0.5rem","padding-top","1rem"],[1,"form-group","row"],[1,"col-md-4","form-control-label",2,"font-size","16px","white-space","nowrap"],[1,"col-md-6"],[1,"form-control","input-text",2,"width","16.2rem","height","30px",3,"ngModel","ngModelChange"],["value","%"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-4","form-control-label",2,"font-size","16px"],["name","rateType","id","rateType",2,"width","16.2rem","height","30px",3,"ngModel","disabled","ngModelChange"],["value","wholesale"],["value","retail"],[2,"width","55%","height","30px","margin-left","-10px",3,"ngModel","disabled","ngModelChange"],["value","bygroupname"],["value","bycategory"],["value","byitemname"],["style","margin-top: 15px;",4,"ngIf"],[1,"row",2,"margin-left","10px","margin-right","0px","background","white","color","#666666","background-color","#ffffff","border","0","border-radius","5px","position","relative","box-shadow","0 5px 5px 0 rgba(0, 0, 0, 0.25)","height","65vh","margin-top","10px"],[1,"col-md-12","row"],[1,"col-md-12",2,"height","55vh","overflow-y","scroll","overflow-x","hidden"],[1,"table"],[2,"border-bottom","2px solid #E6E6E6","border-top","1px solid #E6E6E6","height","30px","background","#9ccae4","color","black","font-size","15px"],["scope","col",2,"width","4%"],["scope","col"],[2,"background-color","aliceblue"],["style","height: 28px;",3,"keydown.Shift.delete",4,"ngFor","ngForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],[3,"value"],[2,"margin-top","15px"],["type","text","id","parentCode","placeholder","Press Enter to select Group","autocomplete","off",2,"margin-left","-10px","height","30px","width","55%","white-space","nowrap",3,"ngModel","disabled","keydown.Tab","ngModelChange","keydown.enter"],["type","text","id","category","placeholder","Press Enter to select Category","autocomplete","off",2,"margin-left","-10px","height","30px","width","55%","white-space","nowrap",3,"ngModel","disabled","keydown.Tab","ngModelChange","keydown.enter"],[2,"height","28px",3,"keydown.Shift.delete"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3)(6,"button",4),e.NdJ("click",function(){return i.exportClick()}),e._uU(7,"Export "),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return i.applyClick()}),e._uU(9,"Apply"),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return i.onReset()}),e._uU(11,"Reset"),e.qZA()()()(),e.TgZ(12,"div",7)(13,"div",1)(14,"div",8)(15,"label",9),e._uU(16,"Branch Name:"),e.qZA(),e.TgZ(17,"div",10)(18,"select",11),e.NdJ("ngModelChange",function(l){return i.branchwisePriceObj.BranchwisePrice_Name=l}),e.TgZ(19,"option",12),e._uU(20,"ALL"),e.qZA(),e.YNc(21,L,2,2,"option",13),e.qZA()()(),e.TgZ(22,"div",8)(23,"label",14),e._uU(24,"Rate Type: "),e.qZA(),e.TgZ(25,"div",10)(26,"select",15),e.NdJ("ngModelChange",function(l){return i.branchwisePriceObj.BranchwisePrice_RateType=l}),e.TgZ(27,"option",16),e._uU(28,"Whole Sale "),e.qZA(),e.TgZ(29,"option",17),e._uU(30,"Retail"),e.qZA()()()()(),e.TgZ(31,"div",1)(32,"label",14),e._uU(33,"Price Mode:"),e.qZA(),e.TgZ(34,"select",18),e.NdJ("ngModelChange",function(l){return i.branchwisePriceObj.BranchwisePrice_Mode=l})("ngModelChange",function(){return i.ChangeRateType(i.branchwisePriceObj.BranchwisePrice_Mode)}),e.TgZ(35,"option",19),e._uU(36," Group Name"),e.qZA(),e.TgZ(37,"option",20),e._uU(38," Category Name"),e.qZA(),e.TgZ(39,"option",21),e._uU(40," Item Name"),e.qZA()(),e.YNc(41,W,4,2,"div",22),e.YNc(42,N,4,2,"div",22),e.qZA()(),e.TgZ(43,"div",23)(44,"div",24)(45,"div",25)(46,"table",26)(47,"tr",27)(48,"th",28),e._uU(49,"S.no."),e.qZA(),e.TgZ(50,"th",29),e._uU(51,"Item Code"),e.qZA(),e.TgZ(52,"th",29),e._uU(53,"Item Name"),e.qZA(),e.TgZ(54,"th",29),e._uU(55,"Unit"),e.qZA(),e.TgZ(56,"th",29),e._uU(57,"Base Unit Rate"),e.qZA(),e.TgZ(58,"th",29),e._uU(59,"Conversion Factor"),e.qZA(),e.TgZ(60,"th",29),e._uU(61,"Rate Adjustment %"),e.qZA(),e.TgZ(62,"th",29),e._uU(63,"Sales Rate"),e.qZA(),e.TgZ(64,"th",29),e._uU(65,"LABEL MRP"),e.qZA()(),e.TgZ(66,"tbody",30),e.YNc(67,G,22,17,"tr",31),e.qZA()()()()(),e.TgZ(68,"generic-popup-grid",32,33),e.NdJ("onItemDoubleClick",function(l){return i.dblClickPopupItem(l)}),e.qZA()),2&t&&(e.xp6(3),e.Oqu(i.modeTitle),e.xp6(5),e.Q6J("disabled",i.disableOnView),e.xp6(10),e.Q6J("ngModel",i.branchwisePriceObj.BranchwisePrice_Name),e.xp6(3),e.Q6J("ngForOf",i.divisionList),e.xp6(5),e.Q6J("ngModel",i.branchwisePriceObj.BranchwisePrice_RateType)("disabled",i.disableOnView),e.xp6(8),e.Q6J("ngModel",i.branchwisePriceObj.BranchwisePrice_Mode)("disabled",i.disableOnView),e.xp6(7),e.Q6J("ngIf","bygroupname"==i.branchwisePriceObj.BranchwisePrice_Mode),e.xp6(1),e.Q6J("ngIf","bycategory"==i.branchwisePriceObj.BranchwisePrice_Mode),e.xp6(25),e.Q6J("ngForOf",i.branchwisepriceListData),e.xp6(1),e.Q6J("popupsettings",i.gridPopupSettings))},dependencies:[u.sg,u.O5,y.YN,y.Kr,y.Fj,y.EJ,y.JJ,y.On,O.Zl,u.JJ]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild(q),v.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[E],imports:[u.ez,J,f.m,C.JX,m.Xd,_.Is,b.b.forRoot(),g.x.forRoot(),w.c.forRoot(),d.Z]}),n})()}}]);