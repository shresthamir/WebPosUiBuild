(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8289],{82661:(I,T,c)=>{"use strict";c.d(T,{C:()=>L});var u=c(591),s=c(70489),e=c(718),E=c(1298);let f=(()=>{class o{constructor(r,d){this.dialogref=r,this.data=d,this.heading="Information",this.heading=d.header,this.message$=d.message}authResult(r){this.dialogref.close(r)}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(s.so),e.Y36(s.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(r,d){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e.NdJ("click",function(){return d.authResult(!0)}),e._uU(6,"\xd7"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"div",6),e._uU(9),e.ALo(10,"async"),e.qZA()()()),2&r&&(e.xp6(4),e.Oqu(d.heading),e.xp6(5),e.hij(" ",e.lcZ(10,2,d.message$)," "))},dependencies:[E.Ov],encapsulation:2}),o})();var p=c(67297),i=c(53074),a=c(14970),v=c(55757),t=c(67311);function n(o,h){1&o&&(e.TgZ(0,"h4",5),e._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),e.qZA())}function m(o,h){1&o&&(e.TgZ(0,"h4",5),e._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),e.qZA())}function l(o,h){if(1&o){const r=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(r);const y=e.oxw();return e.KtG(y.YesClick())}),e._uU(1,"Yes"),e.qZA()}}function g(o,h){if(1&o){const r=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(r);const y=e.oxw();return e.KtG(y.NoClick())}),e._uU(1,"No"),e.qZA()}}function k(o,h){if(1&o){const r=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(r);const y=e.oxw();return e.KtG(y.offlinelineOK())}),e._uU(1,"OK"),e.qZA()}}let A=(()=>{class o{constructor(r,d,y,b,S,_){this.dialogref=r,this.authSerice=d,this.masterService=y,this.spinnerService=b,this.router=S,this.alertService=_}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(r=>{"ok"===r.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(r.result.error))},r=>{this.spinnerService.hide(),alert(JSON.parse(r._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(s.so),e.Y36(p.e),e.Y36(i.P),e.Y36(a.V),e.Y36(v.F0),e.Y36(t.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(r,d){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,n,2,0,"h4",2),e.YNc(3,m,2,0,"h4",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,l,2,0,"button",4),e.YNc(6,g,2,0,"button",4),e.YNc(7,k,2,0,"button",4),e.qZA()()),2&r&&(e.xp6(2),e.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1==d.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(2),e.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),e.xp6(1),e.Q6J("ngIf",1==d.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[E.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),o})();var O=c(71180);let L=(()=>{class o{constructor(r,d,y,b,S){this.gblstate=r,this._authService=d,this.masterService=y,this.router=b,this.dialog=S,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=r.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(r,d){const y=new u.X(""),b=y.asObservable(),S=this._authService.getAuth();let _="";null!=r.url[0]&&(_=r.url[0].path);let C=r.params.mode;if(void 0===C&&(C="list"),!S||!S.profile){y.next("You are not logged In.Please login in");const M=this.dialog.open(f,{hasBackdrop:!0,data:{header:"Information",message:b}});return setTimeout(()=>{M.close()},1e3),!1}if(this.masterService.checkUserValid().subscribe(F=>{if(!1===F){y.next("Invalid User");const P=this.dialog.open(f,{hasBackdrop:!0,data:{header:"Information",message:b}});return setTimeout(()=>(P.close(),!1),1e3),!1}}),0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(A,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==_))return!1;if(0===this.userSetting.ENABLEOFFLINESALE||2===this.userSetting.ENABLEOFFLINESALE){if(S&&S.profile&&"dashboard"===_)return!0;if(0===this.userSetting.ENABLEOFFLINESALE){if("ADMIN"===this.masterService.userProfile.username.toUpperCase()||"patanjali_user"===this.masterService.userProfile.username)return!0}else if(2===this.userSetting.ENABLEOFFLINESALE){if("addsientry"===_||"add-creditnote-itembase"===_){y.next("You are not authorize for this operation");const F=this.dialog.open(f,{hasBackdrop:!0,data:{header:"Information",message:b}});return setTimeout(()=>(F.close(),!1),2e3),!1}if("ADMIN"===this.masterService.userProfile.username.toUpperCase()||"patanjali_user"===this.masterService.userProfile.username)return!0}const M=this._authService.getMenuRight(_,C);if(_){if(!0===M.right)return!0;if("list"===C&&!0===M.list)return!0}else if(!0===M.list)return!0}else if(1===this.userSetting.ENABLEOFFLINESALE)return!0}}return o.\u0275fac=function(r){return new(r||o)(e.LFG(O.q),e.LFG(p.e),e.LFG(i.P),e.LFG(v.F0),e.LFG(s.uw))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},23470:(I,T,c)=>{"use strict";c.d(T,{v:()=>E});var u=c(1298),s=c(718),e=c(35757);let E=(()=>{class f{constructor(i){this.elementRef=i,this.onChange=()=>{},this.onTouch=()=>{},this.disableBefore="",this.id="",this.label="",this.disable=!1,this.max=!0,this.dateControl=new e.NI,this.writeValue=a=>{this.dateControl.setValue(a)},this.registerOnChange=a=>{this.onChange=a},this.registerOnTouched=a=>{this.onTouch=a},this.propagateChange=a=>{this.onChange(a),this.onTouch(a),this.elementRef.nativeElement.dispatchEvent(new CustomEvent("change",{detail:{value:a},bubbles:!0}))}}ngOnInit(){this.isNullOrEmpty(this.id);var i=new Date;this.date=(0,u.p6)(i,"yyyy-MM-dd","en-US"),this.changeDate(this.date,"AD")}ngAfterViewInit(){var i=this;jQuery(document).ready(function(){jQuery(document).on("click",`#${i.id}`,function(){document.getElementById(`${i.id}Picker`).focus()})}),jQuery(document).ready(function(){jQuery(document).on("focus",`#${i.id}Picker`,function(){jQuery(`#${i.id}Picker`).nepaliDatePicker({language:"english",onChange:function(){i.dateControl.setValue(jQuery(`#${i.id}Picker`).val()),i.propagateChange(i.dateControl.value),document.getElementById(`${i.id}Picker`).focus()},dateFormat:"DD/MM/YYYY",readOnlyInput:!1,disableAfter:i.dateBS,ndpYear:!0,ndpMonth:!0,ndpYearCount:5})})})}changeDate(i,a){var v=c(82071);if("AD"==a){var t=i.replace("-","/").replace("-","/"),n=v.ad2bs(t);this.dateBS=1==this.max?("1"==n.en.day||"2"==n.en.day||"3"==n.en.day||"4"==n.en.day||"5"==n.en.day||"6"==n.en.day||"7"==n.en.day||"8"==n.en.day||"9"==n.en.day?"0"+n.en.day:n.en.day)+"/"+n.en.month+"/"+n.en.year:null}else if("BS"==a){var m=i.split("/");t=v.bs2ad(m[2]+"/"+m[1]+"/"+m[0]),this.date=t.year+"-"+(1==t.month.toString().length?"0"+t.month:t.month)+"-"+(1==t.day.toString().length?"0"+t.day:t.day)}}isNullOrEmpty(i){if("string"!=typeof i)throw Error("Invalid Type for Id");if(""==i||null==i||null==i)throw Error("Invalid Id")}}return f.\u0275fac=function(i){return new(i||f)(s.Y36(s.SBq))},f.\u0275cmp=s.Xpm({type:f,selectors:[["nepali-date-picker"]],inputs:{id:"id",label:"label",disable:"disable",max:"max"},features:[s._Bn([{provide:e.JU,useExisting:(0,s.Gpc)(()=>f),multi:!0}])],decls:3,vars:5,consts:[[1,"dateRangeFrom",2,"position","relative"],["aria-hidden","true",1,"fa","fa-calendar",2,"position","absolute","cursor","pointer","font-size","15px","top","5px","right","15px","margin-right","-12px",3,"id"],["type","text",1,"form-control","custom-form-control",2,"display","block","width","110%","height","25px !important","padding","5px 15px","font-size","12px","line-height","1.5","color","#495057","background-color","#fff","background-clip","padding-box","border","1px solid #ced4da","border-radius","0.25rem","transition","border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",3,"formControl","placeholder","id","mouseover"]],template:function(i,a){1&i&&(s.TgZ(0,"div",0),s._UZ(1,"i",1),s.TgZ(2,"input",2),s.NdJ("mouseover",function(t){return t.preventDefault()}),s.qZA()()),2&i&&(s.xp6(1),s.s9C("id",a.id),s.xp6(1),s.s9C("placeholder",a.label),s.MGl("id","",a.id,"Picker"),s.Q6J("formControl",a.dateControl),s.uIk("disabled",!!a.disable||null))},dependencies:[e.Fj,e.JJ,e.oH]}),f})()},63213:(I,T,c)=>{"use strict";c.d(T,{u:()=>f});var u=c(42326),s=c(718),e=c(87584),E=c(55757);let f=(()=>{class p{constructor(a,v){this._trnMainService=a,this.arouter=v,this.activeurlpath=v._routerState.snapshot.url.split("/").pop()}transform(a){return console.log("field name",a),this.disableFieldInTransaction(a)}disableFieldInTransaction(a){switch(a){case"disableWareHouse":return(this._trnMainService.TrnMainObj.VoucherType==u.Km.TaxInvoice||"abbreviated-sales-invoice"==this._trnMainService.activeurlpath||"self-billing"==this._trnMainService.activeurlpath||"add-membership-sales-invoice"==this._trnMainService.activeurlpath||this._trnMainService.TrnMainObj.VoucherType==u.Km.DeliveryChalan||this._trnMainService.TrnMainObj.VoucherType==u.Km.PerformaSalesInvoice||this._trnMainService.TrnMainObj.VoucherType==u.Km.Purchase||this._trnMainService.TrnMainObj.VoucherType==u.Km.DebitNote||this._trnMainService.TrnMainObj.VoucherType==u.Km.GoodsReceived||this._trnMainService.TrnMainObj.VoucherType==u.Km.OpeningStockBalance||this._trnMainService.TrnMainObj.VoucherType==u.Km.StockIssue||this._trnMainService.TrnMainObj.VoucherType==u.Km.StockIssueReturn||this._trnMainService.TrnMainObj.VoucherType==u.Km.BranchTransferIn||this._trnMainService.TrnMainObj.VoucherType==u.Km.BranchTransferOut||this._trnMainService.TrnMainObj.VoucherType==u.Km.RequisitionEntry||this._trnMainService.TrnMainObj.VoucherType==u.Km.RequisitionApproval||this._trnMainService.TrnMainObj.VoucherType==u.Km.Repack||this._trnMainService.TrnMainObj.VoucherType==u.Km.StockSettlement||this._trnMainService.TrnMainObj.VoucherType==u.Km.BatchAdjustment||"stockageing-report"==this.activeurlpath||"stock-issue-report"==this.activeurlpath||"stock-variance-report"==this.activeurlpath||"reorder-levelstock-report"==this.activeurlpath||"max-stocklevel-report"==this.activeurlpath||"minimum-stocklevel-report"==this.activeurlpath||"item-expiry-report"==this.activeurlpath||"stock-ledger-report"==this.activeurlpath||"stock-summary-report"==this.activeurlpath||"requisition-report"==this.activeurlpath||"openingstock-report"==this.activeurlpath)&&1==this._trnMainService.userSetting.UserWiseWarehouse;case"disableGridInMixedPurchase":return"VIEW"==this._trnMainService.TrnMainObj.Mode||1==this._trnMainService.disableAllFieldinPurchase||1===this._trnMainService.userSetting.REFBILLCOMPULSORINDNOTE&&this._trnMainService.TrnMainObj.VoucherType===u.Km.DebitNote}}}return p.\u0275fac=function(a){return new(a||p)(s.Y36(e.p,16),s.Y36(E.gz,16))},p.\u0275pipe=s.Yjl({name:"disableField",type:p,pure:!0}),p})()},94327:function(I,T){var s;void 0!==(s=function(){"use strict";function E(t,n,m){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="blob",l.onload=function(){v(l.response,n,m)},l.onerror=function(){console.error("could not download file")},l.send()}function f(t){var n=new XMLHttpRequest;n.open("HEAD",t,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function p(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,n,m){var l=i.URL||i.webkitURL,g=document.createElement("a");g.download=n=n||t.name||"download",g.rel="noopener","string"==typeof t?(g.href=t,g.origin===location.origin?p(g):f(g.href)?E(t,n,m):p(g,g.target="_blank")):(g.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(g.href)},4e4),setTimeout(function(){p(g)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,m){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function e(t,n){return typeof n>"u"?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,m),n);else if(f(t))E(t,n,m);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){p(l)})}}:function(t,n,m,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return E(t,n,m);var g="application/octet-stream"===t.type,k=/constructor/i.test(i.HTMLElement)||i.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||g&&k||a)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var h=O.result;h=A?h:h.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=h:location=h,l=null},O.readAsDataURL(t)}else{var L=i.URL||i.webkitURL,o=L.createObjectURL(t);l?l.location=o:location.href=o,l=null,setTimeout(function(){L.revokeObjectURL(o)},4e4)}});i.saveAs=v.saveAs=v,I.exports=v}.apply(T,[]))&&(I.exports=s)}}]);