(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4235],{49457:function(A,M){var f;void 0!==(f=function(){"use strict";function _(n,r,m){var a=new XMLHttpRequest;a.open("GET",n),a.responseType="blob",a.onload=function(){g(a.response,r,m)},a.onerror=function(){console.error("could not download file")},a.send()}function S(n){var r=new XMLHttpRequest;r.open("HEAD",n,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function p(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(r)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,v=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(n,r,m){var a=u.URL||u.webkitURL,h=document.createElement("a");h.download=r=r||n.name||"download",h.rel="noopener","string"==typeof n?(h.href=n,h.origin===location.origin?p(h):S(h.href)?_(n,r,m):p(h,h.target="_blank")):(h.href=a.createObjectURL(n),setTimeout(function(){a.revokeObjectURL(h.href)},4e4),setTimeout(function(){p(h)},0))}:"msSaveOrOpenBlob"in navigator?function(n,r,m){if(r=r||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function e(n,r){return typeof r>"u"?r={autoBom:!1}:"object"!=typeof r&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,m),r);else if(S(n))_(n,r,m);else{var a=document.createElement("a");a.href=n,a.target="_blank",setTimeout(function(){p(a)})}}:function(n,r,m,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return _(n,r,m);var h="application/octet-stream"===n.type,Y=/constructor/i.test(u.HTMLElement)||u.safari,I=/CriOS\/[\d]+/.test(navigator.userAgent);if((I||h&&Y||v)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var l=O.result;l=I?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=l:location=l,a=null},O.readAsDataURL(n)}else{var L=u.URL||u.webkitURL,i=L.createObjectURL(n);a?a.location=i:location.href=i,a=null,setTimeout(function(){L.revokeObjectURL(i)},4e4)}});u.saveAs=g.saveAs=g,A.exports=g}.apply(M,[]))&&(A.exports=f)},82661:(A,M,o)=>{"use strict";o.d(M,{C:()=>L});var s=o(26215),f=o(53181),e=o(66274),_=o(92752);let S=(()=>{class i{constructor(t,c){this.dialogref=t,this.data=c,this.heading="Information",this.heading=c.header,this.message$=c.message}authResult(t){this.dialogref.close(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.so),e.Y36(f.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e.NdJ("click",function(){return c.authResult(!0)}),e._uU(6,"\xd7"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"div",6),e._uU(9),e.ALo(10,"async"),e.qZA()()()),2&t&&(e.xp6(4),e.Oqu(c.heading),e.xp6(5),e.hij(" ",e.lcZ(10,2,c.message$)," "))},dependencies:[_.Ov],encapsulation:2}),i})();var p=o(67297),u=o(53074),v=o(14970),g=o(48083),n=o(67311);function r(i,l){1&i&&(e.TgZ(0,"h4",5),e._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),e.qZA())}function m(i,l){1&i&&(e.TgZ(0,"h4",5),e._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),e.qZA())}function a(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.YesClick())}),e._uU(1,"Yes"),e.qZA()}}function h(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.NoClick())}),e._uU(1,"No"),e.qZA()}}function Y(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.offlinelineOK())}),e._uU(1,"OK"),e.qZA()}}let I=(()=>{class i{constructor(t,c,d,y,b,E){this.dialogref=t,this.authSerice=c,this.masterService=d,this.spinnerService=y,this.router=b,this.alertService=E}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(t=>{"ok"===t.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(t.result.error))},t=>{this.spinnerService.hide(),alert(JSON.parse(t._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.so),e.Y36(p.e),e.Y36(u.P),e.Y36(v.V),e.Y36(g.F0),e.Y36(n.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,r,2,0,"h4",2),e.YNc(3,m,2,0,"h4",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,a,2,0,"button",4),e.YNc(6,h,2,0,"button",4),e.YNc(7,Y,2,0,"button",4),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",1!=c.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1==c.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(2),e.Q6J("ngIf",1!=c.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1!=c.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1==c.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[_.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),i})();var O=o(71180);let L=(()=>{class i{constructor(t,c,d,y,b){this.gblstate=t,this._authService=c,this.masterService=d,this.router=y,this.dialog=b,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=t.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(t,c){const d=new s.X(""),y=d.asObservable(),b=this._authService.getAuth();let E="";null!=t.url[0]&&(E=t.url[0].path),console.log("path",E);let F=t.params.mode;if(void 0===F&&(F="list"),!b||!b.profile){d.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const T=this.dialog.open(S,{hasBackdrop:!0,data:{header:"Information",message:y}});return setTimeout(()=>{T.close()},1e4),!1}if(this.masterService.checkUserValid().subscribe(D=>{if(!1===D){d.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const N=this.dialog.open(S,{hasBackdrop:!0,data:{header:"Information",message:y}});return setTimeout(()=>(N.close(),!1),1e4),!1}}),0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(I,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==E))return!1;if(0===this.userSetting.ENABLEOFFLINESALE||2===this.userSetting.ENABLEOFFLINESALE){if(b&&b.profile&&"dashboard"===E)return!0;if(0===this.userSetting.ENABLEOFFLINESALE){if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return!0}else if(2===this.userSetting.ENABLEOFFLINESALE){if("addsientry"===E||"add-creditnote-itembase"===E){d.next("You are not authorize for this operation");const D=this.dialog.open(S,{hasBackdrop:!0,data:{header:"Information",message:y}});return setTimeout(()=>(D.close(),!1),2e3),!1}if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return console.log("MENURIGHTBLOCKEDADMIN",E),!0}const T=this._authService.getMenuRight(E,F);if(E)return!0===T.right||"list"===F&&!0===T.list;if(!0===T.list)return!0}else if(1===this.userSetting.ENABLEOFFLINESALE)return!0}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(O.q),e.LFG(p.e),e.LFG(u.P),e.LFG(g.F0),e.LFG(f.uw))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},63213:(A,M,o)=>{"use strict";o.d(M,{u:()=>S});var s=o(42326),f=o(66274),e=o(87584),_=o(48083);let S=(()=>{class p{constructor(v,g){this._trnMainService=v,this.arouter=g,this.activeurlpath=g._routerState.snapshot.url.split("/").pop()}transform(v){return console.log("field name",v),this.disableFieldInTransaction(v)}disableFieldInTransaction(v){switch(v){case"disableWareHouse":return(this._trnMainService.TrnMainObj.VoucherType==s.Km.TaxInvoice||"abbreviated-sales-invoice"==this._trnMainService.activeurlpath||"self-billing"==this._trnMainService.activeurlpath||"add-membership-sales-invoice"==this._trnMainService.activeurlpath||this._trnMainService.TrnMainObj.VoucherType==s.Km.DeliveryChalan||this._trnMainService.TrnMainObj.VoucherType==s.Km.PerformaSalesInvoice||this._trnMainService.TrnMainObj.VoucherType==s.Km.Purchase||this._trnMainService.TrnMainObj.VoucherType==s.Km.DebitNote||this._trnMainService.TrnMainObj.VoucherType==s.Km.GoodsReceived||this._trnMainService.TrnMainObj.VoucherType==s.Km.OpeningStockBalance||this._trnMainService.TrnMainObj.VoucherType==s.Km.StockIssue||this._trnMainService.TrnMainObj.VoucherType==s.Km.StockIssueReturn||this._trnMainService.TrnMainObj.VoucherType==s.Km.BranchTransferIn||this._trnMainService.TrnMainObj.VoucherType==s.Km.BranchTransferOut||this._trnMainService.TrnMainObj.VoucherType==s.Km.RequisitionEntry||this._trnMainService.TrnMainObj.VoucherType==s.Km.RequisitionApproval||this._trnMainService.TrnMainObj.VoucherType==s.Km.Repack||this._trnMainService.TrnMainObj.VoucherType==s.Km.StockSettlement||this._trnMainService.TrnMainObj.VoucherType==s.Km.BatchAdjustment||"stockageing-report"==this.activeurlpath||"stock-issue-report"==this.activeurlpath||"stock-variance-report"==this.activeurlpath||"reorder-levelstock-report"==this.activeurlpath||"max-stocklevel-report"==this.activeurlpath||"minimum-stocklevel-report"==this.activeurlpath||"item-expiry-report"==this.activeurlpath||"stock-ledger-report"==this.activeurlpath||"stock-summary-report"==this.activeurlpath||"requisition-report"==this.activeurlpath||"openingstock-report"==this.activeurlpath)&&1==this._trnMainService.userSetting.UserWiseWarehouse;case"disableGridInMixedPurchase":return!!("VIEW"==this._trnMainService.TrnMainObj.Mode||1==this._trnMainService.disableAllFieldinPurchase||this._trnMainService.TrnMainObj.VoucherType==s.Km.DebitNote&&this._trnMainService.userSetting.REFBILLCOMPULSORINDNOTE)}}}return p.\u0275fac=function(v){return new(v||p)(f.Y36(e.p,16),f.Y36(_.gz,16))},p.\u0275pipe=f.Yjl({name:"disableField",type:p,pure:!0}),p})()}}]);