"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[8788],{82661:(Y,C,t)=>{t.d(C,{C:()=>x});var S=t(26215),l=t(54536),o=t(64537),f=t(88692);let c=(()=>{class s{constructor(a,d){this.dialogref=a,this.data=d,this.heading="Information",this.heading=d.header,this.message$=d.message}authResult(a){this.dialogref.close(a)}}return s.\u0275fac=function(a){return new(a||s)(o.Y36(l.so),o.Y36(l.WI))},s.\u0275cmp=o.Xpm({type:s,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(a,d){1&a&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),o._uU(4),o.qZA(),o.TgZ(5,"div",4),o.NdJ("click",function(){return d.authResult(!0)}),o._uU(6,"\xd7"),o.qZA()(),o.TgZ(7,"div",5),o._UZ(8,"div",6),o._uU(9),o.ALo(10,"async"),o.qZA()()()),2&a&&(o.xp6(4),o.Oqu(d.heading),o.xp6(5),o.hij(" ",o.lcZ(10,2,d.message$)," "))},dependencies:[f.Ov],encapsulation:2}),s})();var v=t(67297),M=t(53074),n=t(14970),A=t(7976),I=t(67311);function T(s,h){1&s&&(o.TgZ(0,"h4",5),o._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),o.qZA())}function L(s,h){1&s&&(o.TgZ(0,"h4",5),o._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),o.qZA())}function F(s,h){if(1&s){const a=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){o.CHM(a);const e=o.oxw();return o.KtG(e.YesClick())}),o._uU(1,"Yes"),o.qZA()}}function r(s,h){if(1&s){const a=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){o.CHM(a);const e=o.oxw();return o.KtG(e.NoClick())}),o._uU(1,"No"),o.qZA()}}function N(s,h){if(1&s){const a=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){o.CHM(a);const e=o.oxw();return o.KtG(e.offlinelineOK())}),o._uU(1,"OK"),o.qZA()}}let D=(()=>{class s{constructor(a,d,e,g,m,i){this.dialogref=a,this.authSerice=d,this.masterService=e,this.spinnerService=g,this.router=m,this.alertService=i}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(a=>{"ok"===a.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(a.result.error))},a=>{this.spinnerService.hide(),alert(JSON.parse(a._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return s.\u0275fac=function(a){return new(a||s)(o.Y36(l.so),o.Y36(v.e),o.Y36(M.P),o.Y36(n.V),o.Y36(A.F0),o.Y36(I.c))},s.\u0275cmp=o.Xpm({type:s,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(a,d){1&a&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,T,2,0,"h4",2),o.YNc(3,L,2,0,"h4",2),o.qZA(),o.TgZ(4,"div",3),o.YNc(5,F,2,0,"button",4),o.YNc(6,r,2,0,"button",4),o.YNc(7,N,2,0,"button",4),o.qZA()()),2&a&&(o.xp6(2),o.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),o.xp6(1),o.Q6J("ngIf",1==d.masterService.userSetting.ENABLEOFFLINESALE),o.xp6(2),o.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),o.xp6(1),o.Q6J("ngIf",1!=d.masterService.userSetting.ENABLEOFFLINESALE),o.xp6(1),o.Q6J("ngIf",1==d.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[f.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),s})();var O=t(71180),u=t(62870);let x=(()=>{class s{constructor(a,d,e,g,m,i){this.gblstate=a,this._authService=d,this.authenticationService=e,this.masterService=g,this.router=m,this.dialog=i,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=a.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(a,d){const e=new S.X(""),g=e.asObservable(),m=this._authService.getAuth();let i="";null!=a.url[0]&&(i=a.url[0].path),console.log("path",i);let y=a.params.mode;if(void 0===y&&(y="list"),!m||!m.profile){e.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const P=this.dialog.open(c,{hasBackdrop:!0,data:{header:"Information",message:g}});return this.authenticationService.setCurrentUserValue(null),this.router.navigate(["/login"]),setTimeout(()=>{P.close()},1e4),!1}if(0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(D,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==i))return!1;if(m&&m.profile&&"dashboard"===i||"ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return!0;if("addsientry"===i||"add-creditnote-itembase"===i){e.next("You are not authorize for this operation");const P=this.dialog.open(c,{hasBackdrop:!0,data:{header:"Information",message:g}});return setTimeout(()=>(P.close(),!1),2e3),!1}if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return console.log("MENURIGHTBLOCKEDADMIN",i),!0;const E=this._authService.getMenuRight(i,y);return i?!0===E.right||"list"===y&&!0===E.list:!0===E.list||void 0}}return s.\u0275fac=function(a){return new(a||s)(o.LFG(O.q),o.LFG(v.e),o.LFG(u.$),o.LFG(M.P),o.LFG(A.F0),o.LFG(l.uw))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},38788:(Y,C,t)=>{t.r(C),t.d(C,{MastersModule:()=>M});var S=t(7976),l=t(82661);const f=S.Bz.forChild([{path:"warehouse",loadChildren:()=>Promise.all([t.e(8698),t.e(1582)]).then(t.bind(t,1582)).then(n=>n.WarehouseModule),canActivate:[l.C]},{path:"company-info",loadChildren:()=>Promise.all([t.e(8698),t.e(8592),t.e(9424)]).then(t.bind(t,9424)).then(n=>n.CompanyInfoModule),canActivate:[l.C]},{path:"route-master",loadChildren:()=>t.e(6965).then(t.bind(t,36965)).then(n=>n.RouteMasterModule),canActivate:[l.C]},{path:"productmaster",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(8011),t.e(6893),t.e(5482),t.e(8592),t.e(7148)]).then(t.bind(t,27148)).then(n=>n.ProductMasterModule),canActivate:[l.C]},{path:"productmasterdynamicattributes",loadChildren:()=>Promise.all([t.e(8698),t.e(8011),t.e(6893),t.e(5482),t.e(8592),t.e(8175)]).then(t.bind(t,68175)).then(n=>n.ProductMasterModule),canActivate:[l.C]},{path:"routecoverageplan",loadChildren:()=>t.e(6766).then(t.bind(t,36766)).then(n=>n.RouteCoverageModule),canActivate:[l.C]},{path:"fixed-assets",loadChildren:()=>Promise.all([t.e(8698),t.e(8011),t.e(6893),t.e(1944)]).then(t.bind(t,61944)).then(n=>n.FixedAssetsModule),canActivate:[l.C]},{path:"utility/transporter",loadChildren:()=>t.e(2690).then(t.bind(t,42690)).then(n=>n.TransporterModule),canActivate:[l.C]},{path:"item",loadChildren:()=>Promise.all([t.e(8698),t.e(7051),t.e(8592),t.e(399)]).then(t.bind(t,90399)).then(n=>n.ItemModule),canActivate:[l.C]},{path:"color",loadChildren:()=>t.e(5942).then(t.bind(t,45942)).then(n=>n.ColorModule),canActivate:[l.C]},{path:"cost-center",loadChildren:()=>t.e(3634).then(t.bind(t,33634)).then(n=>n.CostCenterModule),canActivate:[l.C]},{path:"area-master",loadChildren:()=>t.e(6808).then(t.bind(t,76808)).then(n=>n.AreaMasterModule),canActivate:[l.C]},{path:"category",loadChildren:()=>Promise.all([t.e(3731),t.e(8592),t.e(43)]).then(t.bind(t,80043)).then(n=>n.CategoryModule),canActivate:[l.C]},{path:"unit",loadChildren:()=>Promise.all([t.e(8592),t.e(5296)]).then(t.bind(t,15296)).then(n=>n.UnitModule),canActivate:[l.C]},{path:"terms",loadChildren:()=>t.e(2582).then(t.bind(t,92582)).then(n=>n.TermsModule),canActivate:[l.C]},{path:"division",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(8592),t.e(8211)]).then(t.bind(t,78211)).then(n=>n.DivisionModule),canActivate:[l.C]},{path:"sales-terminal",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(2654)]).then(t.bind(t,52654)).then(n=>n.SalesTerminalModule),canActivate:[l.C]},{path:"companymaster",loadChildren:()=>t.e(561).then(t.bind(t,80561)).then(n=>n.CompanyMasterModule),canActivate:[l.C]},{path:"tax-config",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(8592),t.e(4666)]).then(t.bind(t,90911)).then(n=>n.TaxConfigModule),canActivate:[l.C]},{path:"channel",loadChildren:()=>t.e(1536).then(t.bind(t,81536)).then(n=>n.ChannelModule),canActivate:[l.C]},{path:"point",loadChildren:()=>t.e(5512).then(t.bind(t,45512)).then(n=>n.PointModule),canActivate:[l.C]},{path:"membership",loadChildren:()=>Promise.all([t.e(8698),t.e(4822)]).then(t.bind(t,74822)).then(n=>n.MembershipModule),canActivate:[l.C]},{path:"customer",loadChildren:()=>Promise.all([t.e(8592),t.e(2711)]).then(t.bind(t,12711)).then(n=>n.CustomerModule),canActivate:[l.C]},{path:"salesman",loadChildren:()=>Promise.all([t.e(7758),t.e(2752)]).then(t.bind(t,32752)).then(n=>n.SalesmanModule),canActivate:[l.C]},{path:"scheme-management",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(814),t.e(5578),t.e(4579),t.e(3218)]).then(t.bind(t,83218)).then(n=>n.SchemeManagementModule),canActivate:[l.C]},{path:"rategroup",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(1961)]).then(t.bind(t,81961)).then(n=>n.RateGroupModule),canActivate:[l.C]},{path:"Companyrate",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(814),t.e(5578),t.e(4579),t.e(9921)]).then(t.bind(t,29921)).then(n=>n.CompanyRateModule),canActivate:[l.C]},{path:"inventoryInfo",loadChildren:()=>t.e(8114).then(t.bind(t,28114)).then(n=>n.InventoryInfoModule),canActivate:[l.C]},{path:"bulkprice",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(814),t.e(9875)]).then(t.bind(t,99875)).then(n=>n.BulkPriceChangeModule),canActivate:[l.C]},{path:"Contract-price",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(216),t.e(3470),t.e(1223)]).then(t.bind(t,41223)).then(n=>n.ContractPriceModule),canActivate:[l.C]},{path:"master-settings",loadChildren:()=>Promise.all([t.e(5778),t.e(6552)]).then(t.bind(t,56552)).then(n=>n.MasterSettingModule),canActivate:[l.C]},{path:"location",loadChildren:()=>t.e(3164).then(t.bind(t,23164)).then(n=>n.LocationEntryModule),canActivate:[l.C]},{path:"location-mapping",loadChildren:()=>Promise.all([t.e(8698),t.e(6475)]).then(t.bind(t,16475)).then(n=>n.LocationMappingModule),canActivate:[l.C]},{path:"partymasterledger",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(216),t.e(8011),t.e(6893),t.e(5482),t.e(8592),t.e(6260)]).then(t.bind(t,6260)).then(n=>n.PartyMasterLedgerModule),canActivate:[l.C]},{path:"branchwise-price",loadChildren:()=>Promise.all([t.e(8698),t.e(814),t.e(4713)]).then(t.bind(t,34365)).then(n=>n.BranchWisePriceModule),canActivate:[l.C]},{path:"manualstockentry",loadChildren:()=>Promise.all([t.e(8698),t.e(216),t.e(814),t.e(5578),t.e(4579),t.e(8011),t.e(8630),t.e(7051),t.e(6234),t.e(8592),t.e(3661)]).then(t.bind(t,93661)).then(n=>n.ManualStockEntryModule),canActivate:[l.C]},{path:"gateway-info-master",loadChildren:()=>t.e(2725).then(t.bind(t,82725)).then(n=>n.GatewayInfoModule),canActivate:[l.C]},{path:"view-item-details",loadChildren:()=>Promise.all([t.e(8698),t.e(5578)]).then(t.bind(t,5578)).then(n=>n.SearchItemDetailsModule),canActivate:[l.C]},{path:"default-report-format-setup",loadChildren:()=>t.e(458).then(t.bind(t,70458)).then(n=>n.ReportFormatSetupModule),canActivate:[l.C]},{path:"document-heading",loadChildren:()=>Promise.all([t.e(8592),t.e(3120)]).then(t.bind(t,23120)).then(n=>n.DocumentHeadingModule),canActivate:[l.C]},{path:"loyalty-point-adjustment",loadChildren:()=>Promise.all([t.e(8698),t.e(5865)]).then(t.bind(t,55865)).then(n=>n.LoyaltyPointAdjustmentModule),canActivate:[l.C]},{path:"barcodemapping",loadChildren:()=>Promise.all([t.e(8698),t.e(8592),t.e(8442)]).then(t.bind(t,38442)).then(n=>n.BarCodeMappingModule),canActivate:[l.C]},{path:"attribute-master",loadChildren:()=>Promise.all([t.e(216),t.e(8592),t.e(2003)]).then(t.bind(t,72003)).then(n=>n.AttributeMasterModule),canActivate:[l.C]},{path:"payment-mode-master",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(8592),t.e(5410)]).then(t.bind(t,21011)).then(n=>n.PaymentModeMasterModule),canActivate:[l.C]},{path:"coupon-issue",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(2573)]).then(t.bind(t,62573)).then(n=>n.CouponIssueModule),canActivate:[l.C]},{path:"pumpmaster",loadChildren:()=>Promise.all([t.e(8698),t.e(9102),t.e(7758),t.e(4107)]).then(t.bind(t,54107)).then(n=>n.PumpmasterModule),canActivate:[l.C]},{path:"meter-reading",loadChildren:()=>Promise.all([t.e(8698),t.e(5155)]).then(t.bind(t,5155)).then(n=>n.MeterReadingModule),canActivate:[l.C]}]);var c=t(54536),v=t(64537);let M=(()=>{class n{}return n.\u0275fac=function(I){return new(I||n)},n.\u0275mod=v.oAB({type:n}),n.\u0275inj=v.cJS({providers:[l.C],imports:[f,c.Is]}),n})()}}]);