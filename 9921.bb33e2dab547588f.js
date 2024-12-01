"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[9921],{77879:(Z,C,r)=>{r.d(C,{H:()=>f});var R=r(66274),h=r(53074);let f=(()=>{class m{constructor(g){this.masterRepo=g}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return m.\u0275fac=function(g){return new(g||m)(R.Y36(h.P))},m.\u0275dir=R.lG2({type:m,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),m})()},29921:(Z,C,r)=>{r.r(C),r.d(C,{CompanyRateModule:()=>W});var R=r(89953),h=r(92752),f=r(72533),m=r(12640),b=r(82738),g=r(71800),w=r(53181),d=r(48083),S=r(47767),e=r(66274),E=r(67311),T=r(76165),A=r(79765),x=r(67297),P=r(71180);let v=(()=>{class i{constructor(t,n,o,a){this.http=t,this.activatedRoute=n,this.authService=o,this.state=a;const p=this.state.getGlobalSetting("apiUrl");p&&p.length>0&&(this.apiUrl=p)}getRequestOptions(){return new T.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}saveCompanyRate(t,n){let o={status:"error",result:""},a=new A.xQ;const p={headers:this.getRequestOptions(),method:"post"};return this.http.post(this.apiUrl+"/saveCompanySellingRate",{mode:t,data:n},p).subscribe(c=>{let y=c;"ok"==y.status?(o.status="ok",o.result=y.result,a.next(o),a.unsubscribe()):(o.status="error1",o.result=y.result,a.next(o),a.unsubscribe())},c=>{o.status="error2",o.result=c,a.next(o),a.unsubscribe()}),a}getCompanyRateList(){return this.http.get(this.apiUrl+"/getCompanySellingRateList")}getCompanyrateByID(t){let n={status:"error",result:""},o=new A.xQ,a={mode:"query",data:{COMPANYRATE_NAME:t}};const p={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/getCompanyRateByID",a,p).subscribe(l=>{o.next(l),o.unsubscribe()},l=>{n.status="error",n.result=l,o.next(n),o.unsubscribe()}),o}deleteCompanyRate(t,n){let o={status:"error",result:""},a=new A.xQ,p={mode:"query",data:{COMPANYRATE_NAME:t,MCODE:n}};const l={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/deleteCompanyRate",p,l).subscribe(c=>{a.next(c),a.unsubscribe()},c=>{o.status="error",o.result=c,a.next(o),a.unsubscribe()}),a}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(T.eN),e.LFG(d.gz),e.LFG(x.e),e.LFG(P.q))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();var u=r(7587),N=r(77879);function F(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td",20),e._uU(2),e.qZA(),e.TgZ(3,"td",21),e._uU(4),e.qZA(),e.TgZ(5,"td",22)(6,"a",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.onView(a))}),e._uU(7,"View"),e.qZA(),e.TgZ(8,"button",24,5),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.onEdit(a))}),e._uU(10,"Edit"),e.qZA(),e.TgZ(11,"button",24,5),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.onDelete(a))}),e._uU(13,"Delete"),e.qZA()()()}if(2&i){const t=s.$implicit,n=s.index,o=e.MAs(9),a=e.oxw(2);e.xp6(2),e.Oqu(n+1+(a.currentPage-1)*a.itemsPerPage),e.xp6(2),e.Oqu(t.COMPANYRATE_NAME),e.xp6(4),e.Q6J("disabled",o.isOldFYearDB()),e.xp6(3),e.Q6J("disabled",o.isOldFYearDB())}}function I(i,s){if(1&i&&(e.ynx(0),e.YNc(1,F,14,4,"tr",19),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.companyRateList)}}function U(i,s){1&i&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",25)(3,"div",26),e._uU(4,"Company Rate Information are unavailable."),e.qZA()()(),e.BQk())}let j=(()=>{class i extends S.c{constructor(t,n,o,a){super(o),this.router=t,this.alertService=n,this.injector=o,this.companyrateservice=a,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=50,this.offset=0,this.rategroupList=[],this.companyRateList=[]}ngOnInit(){this.companyrateservice.getCompanyRateList().subscribe(t=>{console.log("rate",t),this.companyRateList=t&&t||[]},t=>{this.companyRateList=[]})}onEdit(t){try{this.router.navigate(["./pages/masters/Companyrate/addcompanyrate",{companyRateName:t.COMPANYRATE_NAME,mode:"edit",returnUrl:this.router.url}])}catch(n){this.alertService.info(n)}}onView(t){try{this.router.navigate(["./pages/masters/Companyrate/addcompanyrate",{companyRateName:t.COMPANYRATE_NAME,mode:"view",returnUrl:this.router.url}])}catch(n){console.log(n),alert(n)}}onDelete(t){console.log("on delete",t),confirm("Are you sure you want to delete "+t.COMPANYRATE_NAME+" ?")&&this.companyrateservice.deleteCompanyRate(t.COMPANYRATE_NAME,t.MCODE).subscribe(n=>{"ok"==n.status?(this.alertService.info(n.result),this.companyrateservice.getCompanyRateList().subscribe(o=>{o?(this.isLoader=!1,this.companyRateList=o||[]):(this.companyRateList=[],this.errorMessage="something is wrong.")})):this.alertService.info(n.result.error)},n=>{this.alertService.info(n.error)})}addCompanyRate(){try{this.router.navigate(["./pages/masters/Companyrate/addcompanyrate",{mode:"add",returnUrl:this.router.url}])}catch{}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.F0),e.Y36(E.c),e.Y36(e.zs3),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-company-rate-list"]],features:[e.qOj],decls:31,vars:4,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter",1,"form-control",2,"height","1.5rem","font-size","13px",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","18%"],["scope","col",2,"text-align","center","width","15%"],[4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","18%"],[2,"width","15%","text-align","center"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["colspan","7"],[1,"font-weight-bold"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Company Rate Master"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",4,5),e.NdJ("click",function(){return n.addCompanyRate()}),e._uU(9,"Add Company Rate"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),e._uU(15,"Company Rate Lists"),e.qZA(),e.TgZ(16,"div",10)(17,"input",11),e.NdJ("ngModelChange",function(a){return n.filter=a}),e.qZA()()(),e.TgZ(18,"div",12)(19,"table",13)(20,"thead")(21,"tr",14)(22,"th",15),e._uU(23,"S.N"),e.qZA(),e.TgZ(24,"th",16),e._uU(25,"Company Rate Name"),e.qZA(),e.TgZ(26,"th",17),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,I,2,1,"ng-container",18),e.YNc(30,U,5,0,"ng-container",18),e.qZA()()()()()()),2&t){const o=e.MAs(8);e.xp6(7),e.Q6J("disabled",o.isOldFYearDB()),e.xp6(10),e.Q6J("ngModel",n.filter),e.xp6(12),e.Q6J("ngIf",n.companyRateList&&n.companyRateList.length>0),e.xp6(1),e.Q6J("ngIf",n.companyRateList&&0===n.companyRateList.length)}},dependencies:[h.sg,h.O5,u.Fj,u.JJ,u.On,N.H,d.rH],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.card-footer[_ngcontent-%COMP%]{height:6vh}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:16rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),i})();var O=r(28698),M=r(40216),D=r(53074),L=r(87584),k=r(14970),_=r(88146);let J=(()=>{class i{transform(t,n){if(t)return n?t.filter(o=>{const a=n.replace(/[^A-Z0-9]/gi,"").toLowerCase(),p=o.MENUCODE?o.MENUCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"",l=o.ITEMNAME?o.ITEMNAME.replace(/[^A-Z0-9]/gi,"").toLowerCase():"";if(-1!==p.indexOf(a)||-1!==l.indexOf(a))return o}):t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"searchDatas",type:i,pure:!1}),i})(),Y=(()=>{class i{transform(t,n,o){return t?o&&0!=o.length?t.filter(a=>a.IsRemoved==o):t:[]}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"ngForFilter",type:i,pure:!0}),i})();const q=["genericGridForItem"],B=["fileUploadPopup"];function V(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr",50)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"tr")(17,"div",51)(18,"button",32),e.NdJ("click",function(){const o=e.CHM(t),a=o.index,p=o.$implicit,l=e.oxw();return e.KtG(l.Removerow(a,p))}),e._uU(19,"Remove"),e.qZA()()()()()}if(2&i){const t=s.$implicit,n=s.index,o=e.oxw();e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.MENUCODE),e.xp6(2),e.Oqu(t.ITEMNAME),e.xp6(2),e.Oqu(t.RATE),e.xp6(2),e.Oqu(t.RATE_A),e.xp6(2),e.Oqu(t.WHOLESALE),e.xp6(2),e.Oqu(t.RATE_B),e.xp6(4),e.Q6J("disabled","view"==o.mode)}}const Q=[{path:"",component:j},{path:"addcompanyrate",component:(()=>{class i{constructor(t,n,o,a,p,l,c,y){this.masterService=t,this._trnMainService=n,this.alertService=o,this.loadingService=a,this.router=p,this.activatedRoute=l,this.companyRateService=c,this.authservice=y,this.mode="add",this.showStockedQuantityOnly=0,this.disableOnView=!1,this.showPopup=!1,this.companyRateObj={},this.CompanyRateArray=[],this.COMPANYRATE_NAME="",this.gridItemPopupSettings=new O.im,this.fileUploadPopupSettings=new M.s,this.activerowIndex=0,this.userSetting=this.authservice.getSetting(),this.gridItemPopupSettings=Object.assign(new O.im,{title:"Item List",apiEndpoints:"/getItemPagedListForPriceChange",defaultFilterIndex:this.userSetting.DefaultFilterIndex?this.userSetting.DefaultFilterIndex:0,useDefinefilterValue:"",columns:[{key:"DESCA",title:"DESCRIPTION",hidden:!1,noSearch:!1},{key:"MENUCODE",title:"PRODUCT CODE",hidden:!1,noSearch:!1},{key:"BASEUNIT",title:"UNIT",hidden:!1,noSearch:!0},{key:"MRP",title:"MRP",hidden:!1,noSearch:!0,alignment:"right",pipe:!0}]}),this.fileUploadPopupSettings=Object.assign(new M.s,{title:"Import Company Rate",sampleFileUrl:"/downloadSampleExcelforMasterMigration?importName=Company Rate",uploadEndpoints:"/importCompanyWiseSellingRate",allowMultiple:!1,acceptFormat:".xlsx",filename:"Company Rate Sample"})}ngOnInit(){try{if(this.activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this.activatedRoute.snapshot.params.returnUrl),this.activatedRoute.snapshot.params.companyRateName){let t=this.activatedRoute.snapshot.params.companyRateName;this.loadingService.show("Getting Data, please wait..."),this.companyRateService.getCompanyrateByID(t).subscribe(n=>{console.log("res",n),this.loadingService.hide(),"ok"==n.status?(this.CompanyRateArray=n.result,this.COMPANYRATE_NAME=n.result[0].COMPANYRATE_NAME,"edit"==this.activatedRoute.snapshot.params.mode?(this.mode="edit",this.modeTitle="Edit Company Rate Master"):"view"==this.activatedRoute.snapshot.params.mode&&(this.mode="view",this.modeTitle="View Company Rate Master")):(this.mode="",this.modeTitle="Edit- Error in Rate Group")},n=>{this.loadingService.hide(),this.mode="",this.modeTitle="Edit2 -Error in Loading data"})}else this.mode="add",this.modeTitle="Add Company Rate Master"}catch(t){this.alertService.info(t)}}handleKeyDownboardEvent(t){"F2"==t.code?(t.preventDefault(),this.onimport()):"Escape"==t.code&&(console.log("popup close"),this.fileUploadPopup.hide())}showItemPopUp(){this.genericGridForItem.show()}dblClickPopupItem(t){console.log("item select",t),document.getElementById("rateIncVat").focus(),this.companyRateObj.ITEMNAME=t.DESCA,this.companyRateObj.MENUCODE=t.MENUCODE,this.companyRateObj.UNIT=t.BASEUNIT,this.companyRateObj.MCODE=t.MCODE,this.companyRateObj.CurrentRate_A=t.RATE_A,this.companyRateObj.CurrentRate_B=t.RATE_B,this.companyRateObj.PRATE_A=t.PRATE_A,this.companyRateObj.ISVAT=t.ISVAT}showImportPopup(){this.showPopup=!0}closePopup(){this.showPopup=!1}addCompanyRate(){if(console.log("ADD",this.companyRateObj),this.companyRateObj.IsRemoved=0,""==this.companyRateObj.MENUCODE||null==this.companyRateObj.MENUCODE||null==this.companyRateObj.MENUCODE)return void this.alertService.warning("Please Enter the Item Name");if(this.companyRateObj.PRATE_A>this.companyRateObj.RATE_A)return void this.alertService.warning("Please Enter Retail price greater than cost price ");if(this.companyRateObj.RATE_A<0)return void this.alertService.warning("Please inter valid number");let t=this.CompanyRateArray.findIndex(n=>n.MCODE==this.companyRateObj.MCODE);if(t>-1)return confirm("Do you want to overwrite?")?("edit"==this.mode&&(this.companyRateObj.RowMode="edit"),this.CompanyRateArray[t]=this.companyRateObj,void(this.companyRateObj={})):void 0;"edit"==this.mode&&(this.companyRateObj.RowMode="edit"),this.CompanyRateArray=[...this.CompanyRateArray,this.companyRateObj],this.companyRateObj={}}onSave(){console.log("on save comapny wise rate",this.CompanyRateArray),this.CompanyRateArray.forEach(t=>{t.COMPANYRATE_NAME=this.COMPANYRATE_NAME}),0==this.CompanyRateArray.length?this.alertService.warning("Cannot Save Company Rate with empty list.Please add Items"):(this.loadingService.show("Saving company wise rate. Please wait.."),this.companyRateService.saveCompanyRate(this.mode,this.CompanyRateArray).subscribe(t=>{console.log("result on save",t),"ok"==t.status?(this.loadingService.hide(),this.alertService.success(t.result),this.CompanyRateArray=[],setTimeout(()=>{this.onreset()},1500)):(this.loadingService.hide(),this.alertService.info(t.result.error))},t=>{this.loadingService.hide(),this.alertService.info(t)}))}onreset(){try{this.router.navigate(["./pages/masters/Companyrate"])}catch(t){alert(t)}}Removerow(t,n){if(this.activerowIndex=t,confirm("Are you sure you want to remove the Row? ")){const o=Object.assign([],this.CompanyRateArray);null===this.filter||""===this.filter||void 0===this.filter?o[this.activerowIndex].IsRemoved=1:o[this.CompanyRateArray.findIndex(p=>p.MENUCODE==n.MENUCODE)].IsRemoved=1,this.CompanyRateArray=o}}CalculateRateIncvat(){let t=0==this.companyRateObj.ISVAT?this.companyRateObj.RATE:(this.companyRateObj.RATE/this.userSetting.VatConRate).toFixed(3);this.companyRateObj.RATE_A=t}CalculateRateExcvat(){let t=0==this.companyRateObj.ISVAT?this.companyRateObj.RATE:(this.companyRateObj.RATE_A*this.userSetting.VatConRate).toFixed(3);this.companyRateObj.RATE=t}RateValidation(){return this.companyRateObj.PRATE_A>this.companyRateObj.RATE_A?(this.alertService.warning("Please Enter Retail price greater than cost price "),this.companyRateObj.RATE_A=0,void(this.companyRateObj.RATE=0)):this.companyRateObj.RATE_A<0?(this.alertService.warning("Please inter valid number"),this.companyRateObj.RATE_A=0,void(this.companyRateObj.RATE=0)):void 0}CalculateIncvat(){let t=0==this.companyRateObj.ISVAT?this.companyRateObj.WHOLESALE:(this.companyRateObj.WHOLESALE/this.userSetting.VatConRate).toFixed(3);this.companyRateObj.RATE_B=t}CalculateExcvat(){let t=0==this.companyRateObj.ISVAT?this.companyRateObj.RATE_B:(this.companyRateObj.RATE_B*this.userSetting.VatConRate).toFixed(3);this.companyRateObj.WHOLESALE=t}onimport(){console.log("Import"),this.COMPANYRATE_NAME?this.fileUploadPopup.show():(this.alertService.info("Please insert Company Rate Name before Excel Import !!!"),this.alertService.emitShowHideSubject.subscribe(t=>{setTimeout(()=>{document.getElementById("companyRateName").focus()},10)}))}fileUploadSuccess(t){if("ok"==t.status){console.log("checkvalue",t);let n=t.result;n.forEach(o=>{o.IsRemoved=0}),this.CompanyRateArray=[...n]}else this.loadingService.show("Error"+t.error)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(D.P),e.Y36(L.p),e.Y36(E.c),e.Y36(k.V),e.Y36(d.F0),e.Y36(d.gz),e.Y36(v),e.Y36(x.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-company-rate-form"]],viewQuery:function(t,n){if(1&t&&(e.Gf(q,5),e.Gf(B,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.genericGridForItem=o.first),e.iGM(o=e.CRH())&&(n.fileUploadPopup=o.first)}},hostBindings:function(t,n){1&t&&e.NdJ("keydown",function(a){return n.handleKeyDownboardEvent(a)},!1,e.evT)},decls:94,vars:24,consts:[[1,"sticky-top","row"],[1,"col-md-4",2,"font-weight","bold"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],["type","submit",1,"btn","btn-info","btn-sm",3,"disabled","click"],["type","button",1,"btn","btn-info","btn-sm",3,"click"],[1,"row","plainBackGround",2,"margin-top","0.5rem","padding-top","1rem"],[1,"col-md-5","pd0"],[1,"form-group","row"],[1,"col-md-3","form-control-label",2,"padding-right","0px"],["type","text","id","companyRateName",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-3","form-control-label"],[1,"col-md-8","row"],["type","text","placeholder","Enter to Select Item",1,"col-md-4","form-control",3,"ngModel","ngModelChange","keydown.Enter"],["type","text","placeholder","Enter to Select Item",1,"col-md-8","form-control",3,"ngModel","ngModelChange","keydown.Enter"],[1,"col-md-7","pd0",2,"margin-left","-51px"],[1,"row",2,"position","relative","top","10px"],[1,"col-md-2","pd1"],[1,"col-md-3","pd1",2,"margin-left","-43px"],[2,"width","121px"],[1,"col-md-1","pd1"],[2,"margin-left","-39px"],[1,"col-md-3","pd1"],[2,"width","auto"],[2,"margin-left","-17px"],[1,"row",2,"margin-top","9px"],["type","text",1,"form-control",2,"width","75px",3,"ngModel","disabled","ngModelChange"],["type","number","id","rateIncVat",1,"form-control",2,"margin-left","-44px",3,"ngModel","ngModelChange","change"],["type","number",1,"form-control",2,"margin-left","-44px",3,"ngModel","ngModelChange"],["type","number",1,"form-control",2,"margin-left","-44px","width","145px",3,"ngModel","ngModelChange"],["type","number",1,"form-control",2,"margin-left","-15px",3,"ngModel","ngModelChange"],[1,"col-md-2","pd0"],[1,"btn","btn-info",2,"font-size","12px","position","relative","top","-3px","line-height","11px","width","64px",3,"disabled","click"],[1,"row"],[1,"col-md-3","pd0",2,"margin-top","5px"],["type","search","placeholder","Search...","name","filters",1,"form-control",2,"height","1.5rem","font-size","13px","margin-top","7px",3,"ngModel","ngModelChange"],[2,"margin-top","10px"],[2,"height","480px","overflow-y","scroll"],[3,"itemSize"],[2,"margin-bottom","5px","font-size","13px","width","98%","margin-left","10px"],[2,"border-bottom","2px solid #e6e6e6","border-top","2px solid #e6e6e6","height","30px","background","#9ccae4","color","black"],[2,"width","2%"],[2,"width","3%","text-align","center"],[2,"width","15%","text-align","center"],[2,"width","8%","text-align","center"],["style","border: 1px; max-height: 25px",4,"cdkVirtualFor","cdkVirtualForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGridForItem",""],[3,"popupsettings","onUploaded"],["fileUploadPopup",""],[2,"border","1px","max-height","25px"],[1,"col-md-3","pd0"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"button",4),e.NdJ("click",function(){return n.onSave()}),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.onreset()}),e._uU(8,"Back"),e.qZA(),e.TgZ(9,"button",5),e.NdJ("click",function(){return n.onimport()}),e._uU(10,"Import Excel [F2]"),e.qZA()()()(),e.TgZ(11,"div",6)(12,"div",7)(13,"div",8)(14,"label",9),e._uU(15,"Company Rate Name:"),e.qZA(),e.TgZ(16,"div",2)(17,"input",10),e.NdJ("ngModelChange",function(a){return n.COMPANYRATE_NAME=a}),e.qZA()()(),e.TgZ(18,"div",8)(19,"label",11),e._uU(20,"Item Name:"),e.qZA(),e.TgZ(21,"div",12)(22,"input",13),e.NdJ("ngModelChange",function(a){return n.companyRateObj.MENUCODE=a})("keydown.Enter",function(){return n.showItemPopUp()}),e.qZA(),e.TgZ(23,"input",14),e.NdJ("ngModelChange",function(a){return n.companyRateObj.ITEMNAME=a})("keydown.Enter",function(){return n.showItemPopUp()}),e.qZA()()()(),e.TgZ(24,"div",15)(25,"div",16)(26,"div",17)(27,"label"),e._uU(28,"Unit"),e.qZA()(),e.TgZ(29,"div",18)(30,"label",19),e._uU(31,"Retail Rate (Inc VAT)"),e.qZA()(),e.TgZ(32,"div",20)(33,"label",21),e._uU(34,"Exc VAT"),e.qZA()(),e.TgZ(35,"div",22)(36,"label",23),e._uU(37,"Whole-sale Rate(Inc VAT)"),e.qZA()(),e.TgZ(38,"div",20)(39,"label",24),e._uU(40,"Exc VAT"),e.qZA()()(),e.TgZ(41,"div",25)(42,"div",17)(43,"input",26),e.NdJ("ngModelChange",function(a){return n.companyRateObj.UNIT=a}),e.qZA()(),e.TgZ(44,"div",17)(45,"input",27),e.NdJ("ngModelChange",function(a){return n.companyRateObj.RATE=a})("change",function(){return n.RateValidation()})("ngModelChange",function(){return n.CalculateRateIncvat()}),e.qZA()(),e.TgZ(46,"div",17)(47,"input",28),e.NdJ("ngModelChange",function(a){return n.companyRateObj.RATE_A=a})("ngModelChange",function(){return n.CalculateRateExcvat()}),e.qZA()(),e.TgZ(48,"div",17)(49,"input",29),e.NdJ("ngModelChange",function(a){return n.companyRateObj.WHOLESALE=a})("ngModelChange",function(){return n.CalculateIncvat()}),e.qZA()(),e.TgZ(50,"div",17)(51,"input",30),e.NdJ("ngModelChange",function(a){return n.companyRateObj.RATE_B=a})("ngModelChange",function(){return n.CalculateExcvat()}),e.qZA()(),e.TgZ(52,"div",31)(53,"button",32),e.NdJ("click",function(){return n.addCompanyRate()}),e._uU(54,"Add"),e.qZA()()()()(),e.TgZ(55,"div")(56,"div",33)(57,"div",34)(58,"div",8)(59,"label",11),e._uU(60,"Search:"),e.qZA(),e.TgZ(61,"div",12)(62,"input",35),e.NdJ("ngModelChange",function(a){return n.filter=a}),e.qZA()()()()()(),e.TgZ(63,"div")(64,"div",36)(65,"div",37)(66,"cdk-virtual-scroll-viewport",38)(67,"table",39)(68,"thead")(69,"tr",40)(70,"th",41),e._uU(71,"S.N"),e.qZA(),e.TgZ(72,"th",42),e._uU(73,"Item Code"),e.qZA(),e.TgZ(74,"th",43),e._uU(75,"Item Name"),e.qZA(),e.TgZ(76,"th",44),e._uU(77,"Rate Inc (Retail)"),e.qZA(),e.TgZ(78,"th",44),e._uU(79,"Rate Exc (Retail)"),e.qZA(),e.TgZ(80,"th",44),e._uU(81,"Rate Exc (Whole-sale)"),e.qZA(),e.TgZ(82,"th",44),e._uU(83,"Rate Inc (Whole-sale)"),e.qZA(),e.TgZ(84,"th",42),e._uU(85,"Action"),e.qZA()()(),e.TgZ(86,"tbody"),e.YNc(87,V,20,8,"tr",45),e.ALo(88,"ngForFilter"),e.ALo(89,"searchDatas"),e.qZA()()()()()(),e.TgZ(90,"generic-popup-grid",46,47),e.NdJ("onItemDoubleClick",function(a){return n.dblClickPopupItem(a)}),e.qZA(),e.TgZ(92,"file-uploader-popup",48,49),e.NdJ("onUploaded",function(a){return n.fileUploadSuccess(a)}),e.qZA()),2&t&&(e.xp6(2),e.hij(" Company Rate Master >> ",n.modeTitle," "),e.xp6(3),e.Q6J("disabled","view"==n.mode),e.xp6(12),e.Q6J("ngModel",n.COMPANYRATE_NAME),e.xp6(5),e.Q6J("ngModel",n.companyRateObj.MENUCODE),e.xp6(1),e.Q6J("ngModel",n.companyRateObj.ITEMNAME),e.xp6(20),e.Q6J("ngModel",n.companyRateObj.UNIT)("disabled",!0),e.xp6(2),e.Q6J("ngModel",n.companyRateObj.RATE),e.xp6(2),e.Q6J("ngModel",n.companyRateObj.RATE_A),e.xp6(2),e.Q6J("ngModel",n.companyRateObj.WHOLESALE),e.xp6(2),e.Q6J("ngModel",n.companyRateObj.RATE_B),e.xp6(2),e.Q6J("disabled","view"==n.mode),e.xp6(9),e.Q6J("ngModel",n.filter),e.xp6(4),e.Q6J("itemSize",50),e.xp6(21),e.Q6J("cdkVirtualForOf",e.Dn7(88,17,e.xi3(89,21,n.CompanyRateArray,n.filter),"IsRemoved","0")),e.xp6(3),e.Q6J("popupsettings",n.gridItemPopupSettings),e.xp6(2),e.Q6J("popupsettings",n.fileUploadPopupSettings))},dependencies:[u.Fj,u.wV,u.JJ,u.On,O.Zl,M.U,_.xd,_.x0,_.N7,J,Y],styles:["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:3.5vh;color:#000;width:100%}label[_ngcontent-%COMP%]{height:25px;font-size:13px}.form-group[_ngcontent-%COMP%]{margin-bottom:.5rem}.form-control[_ngcontent-%COMP%]{font-size:13px}th[_ngcontent-%COMP%]{padding:2px}td[_ngcontent-%COMP%]{padding:3px}.TableRowSize[_ngcontent-%COMP%]{height:23px;border:1px solid #e6e6e6}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{line-height:21px;text-align:center;border:1px solid #e6e6e6}label[_ngcontent-%COMP%]{font-weight:700}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:24rem}"]}),i})()}];let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(Q),d.Bz]}),i})();var G=r(34579);const H={suppressScrollX:!1};let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[v,{provide:m.op,useValue:H}],imports:[h.ez,R.m,z,f.JX,m.Xd,g.zk.forRoot(),w.Is,b.b.forRoot(),G.h,_.Cl]}),i})()}}]);