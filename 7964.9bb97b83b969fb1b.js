"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[7964],{18488:(D,T,a)=>{a.d(T,{G:()=>f});var E=a(80529),_=a(8929),C=a(94650),P=a(34793),O=a(67297),y=a(71180);let f=(()=>{class e{constructor(u,v,A,g){this.http=u,this.activatedRoute=v,this.authService=A,this.state=g;const h=this.state.getGlobalSetting("apiUrl");h&&h.length>0&&(this.apiUrl=h)}getRequestOption(){return new E.WM({"Content-type":"application/csv",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}RequestOptionForCSV(){return{headers:new E.WM({Authorization:this.authService.getAuth().token})}}downloadSampleFile(u,v="download"){return this.http.get(this.apiUrl+`${u}`,{headers:this.getRequestOption(),responseType:"blob"})}downloadSampleExcelforPIImport(u){return this.http.post(this.apiUrl+"/downloadSampleExcelforPIImport",u,{responseType:"blob"})}importSelectedFiles(u,v){let A={status:"error",result:"error"},g=new _.xQ;return this.http.post(this.apiUrl+`${u}`,v).subscribe(h=>{g.next(h),g.unsubscribe()},h=>{A.status="error",A.result=h,g.next(A),g.unsubscribe()}),g}}return e.\u0275fac=function(u){return new(u||e)(C.LFG(E.eN),C.LFG(P.gz),C.LFG(O.e),C.LFG(y.q))},e.\u0275prov=C.Yz7({token:e,factory:e.\u0275fac}),e})()},63758:(D,T,a)=>{a.r(T),a.d(T,{ProductWiseModule:()=>ie});var E=a(89953),_=a(36895),C=a(44841),P=a(68567),O=a(26952),y=a(14422),f=a(34793),e=a(94650),M=a(67311),u=a(8929),v=a(80529),A=a(67297),g=a(71180);let h=(()=>{class n{constructor(t,o,i){this.http=t,this.authService=o,this.state=i;const r=this.state.getGlobalSetting("apiUrl");r&&r.length>0&&(this.apiUrl=r)}saveProductWise(t){console.log("barcode",t);const o={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(`${this.apiUrl}/saveProductWiseVariant`,t,o)}getAllProductWise(){return this.http.get(this.apiUrl+"/getAllVariantProductWiseList")}getProductWiseForEdit(t,o,i){let r={status:"error",result:""},s=new u.xQ,l={mode:"query",data:{MENUCAT:t,MCODE:o,BARCODE:i}};const m={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/getProductWiseMaster",l,m).subscribe(d=>{s.next(d),s.unsubscribe()},d=>{r.status="error",r.result=d,s.next(r),s.unsubscribe()}),s}deleteProductWise(t,o,i){let r={status:"error",result:""},s=new u.xQ,l={mode:"query",data:{DESCA:t,MCODE:o,BARCODE:i}};const m={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/deleteProductWiseMaster",l,m).subscribe(d=>{s.next(d),s.unsubscribe()},d=>{r.status="error",r.result=d,s.next(r),s.unsubscribe()}),s}masterPostmethod_NEW(t,o){const i={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+t,o,i).map(r=>r.json()).share()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN),e.LFG(A.e),e.LFG(g.q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var p=a(24006),W=a(77879);let x=(()=>{class n{transform(t,o,i){if(t){if(!o)return t;if("searchName"==i)return t.filter(r=>{const s=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(r.DESCA?r.DESCA.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(s))return r});if("searchCode"==i)return t.filter(r=>{const s=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(r.MENUCODE?r.MENUCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(s))return r});if("searchBarcode"==i)return t.filter(r=>{const s=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(r.BCODE?r.BCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(s))return r})}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"searchData",type:n,pure:!1}),n})();function R(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",24),e._uU(2),e.qZA(),e.TgZ(3,"td",25),e._uU(4),e.qZA(),e.TgZ(5,"td",25),e._uU(6),e.qZA(),e.TgZ(7,"td",26)(8,"button",27,5),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.onEditClicked(r))}),e._uU(10,"Edit"),e.qZA(),e.TgZ(11,"button",28,5),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.deleteCategory(r))}),e._uU(13,"Delete"),e.qZA()()()}if(2&n){const t=c.$implicit,o=c.index,i=e.MAs(9);e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.MENUCODE),e.xp6(2),e.Oqu(t.DESCA),e.xp6(2),e.Q6J("disabled",i.isOldFYearDB()),e.xp6(3),e.Q6J("disabled",i.isOldFYearDB())}}const L=function(n,c,t){return{itemsPerPage:n,currentPage:c,totalItems:t}};function F(n,c){if(1&n&&(e.ynx(0),e.YNc(1,R,14,5,"tr",23),e.ALo(2,"paginate"),e.ALo(3,"searchData"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.productwiseLists,t.filter,t.searchProduct),e.kEZ(8,L,t.itemsPerPage,t.currentPage,t.totalCount)))}}function N(n,c){1&n&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",29)(3,"div",30),e._uU(4,"Product Wise Lists are unavailable."),e.qZA()()(),e.BQk())}function U(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",31)(1,"div",32)(2,"div",33)(3,"pagination-controls",34),e.NdJ("pageChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.productWisePagination(i))}),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("directionLinks",t.directionLinks)}}let I=(()=>{class n{constructor(t,o,i){this.router=t,this.alertService=o,this.prodWiseService=i,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=20,this.offset=0,this.directionLinks=!0,this.searchProduct="searchName"}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){console.log("procdutwise list"),this.prodWiseService.getAllProductWise().subscribe(t=>{t?(this.isLoader=!1,this.productwiseLists=t||[]):(this.productwiseLists=[],this.errorMessage="something is wrong.")},t=>{this.isLoader=!1,this.productwiseLists=[],this.errorMessage="something is wrong."})}onViewClicked(t){try{this.router.navigate(["./pages/masters/inventoryInfo/productwise/add-productwise",{name:t.MENUCAT,mode:"view",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}}onEditClicked(t){try{console.log(t),this.router.navigate(["./pages/masters/inventoryInfo/productwise/add-productwise",{name:t.DESCA,mcode:t.MCODE,barcode:t.BARCODE,mode:"edit",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}}deleteCategory(t){confirm("Are you sure you want to delete "+t.MENUCAT+" ?")&&this.prodWiseService.deleteProductWise(t.DESCA,t.MCODE,t.BARCODE).subscribe(o=>{"ok"==o.status?(this.alertService.info(o.result),this.prodWiseService.getAllProductWise().subscribe(i=>{i?(this.isLoader=!1,this.productwiseLists=i||[]):(this.productwiseLists=[],this.errorMessage="something is wrong.")})):this.alertService.error(o.result.error)},o=>{this.alertService.error(o.error)})}addProductWise(){try{this.router.navigate(["./pages/masters/inventoryInfo/productwise/add-productwise",{mode:"add",returnUrl:this.router.url}])}catch(t){this.alertService.error(t)}}productWisePagination(t){this.isLoader=!0,this.currentPage=t;const o=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{o.isLoader=!1},500)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.F0),e.Y36(M.c),e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-productwise-list"]],hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(r){return o.updown(r)},!1,e.evT)},decls:41,vars:15,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[1,"searchBy",2,"margin-left","200px","font-size","13px"],["type","radio","name","item","value","searchName",3,"ngModel","ngModelChange"],["type","radio","name","item","value","searchCode",3,"ngModel","ngModelChange"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter",1,"form-control",2,"height","1.5rem",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","5%"],["scope","col",2,"width","35%"],["scope","col",2,"text-align","center","width","20%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","5%"],[2,"width","35%"],[2,"text-align","center","width","20%"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["type","button","data-toggle","modal","appOldFYearDB","",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"disabled","click"],["colspan","3"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Add Product Variant"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",4,5),e.NdJ("click",function(){return o.addProductWise()}),e._uU(9,"Add Product Variant"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),e._uU(15,"Product Variant Lists"),e.qZA(),e.TgZ(16,"div",10)(17,"input",11),e.NdJ("ngModelChange",function(r){return o.searchProduct=r}),e.qZA(),e._uU(18," Search By Name \xa0 "),e.TgZ(19,"input",12),e.NdJ("ngModelChange",function(r){return o.searchProduct=r}),e.qZA(),e._uU(20," Search By Code \xa0 "),e.qZA(),e.TgZ(21,"div",13)(22,"input",14),e.NdJ("ngModelChange",function(r){return o.filter=r}),e.qZA()()(),e.TgZ(23,"div",15)(24,"table",16)(25,"thead")(26,"tr",17)(27,"th",18),e._uU(28,"S.N."),e.qZA(),e.TgZ(29,"th",19),e._uU(30,"Product Code"),e.qZA(),e.TgZ(31,"th",19),e._uU(32,"Product Name"),e.qZA(),e.TgZ(33,"th",20),e._uU(34,"Action"),e.qZA()()(),e.TgZ(35,"tbody"),e.YNc(36,F,4,12,"ng-container",21),e.YNc(37,N,5,0,"ng-container",21),e.ALo(38,"searchData"),e.qZA()(),e.YNc(39,U,4,1,"div",22),e.ALo(40,"searchData"),e.qZA()()()()),2&t){const i=e.MAs(8);e.xp6(7),e.Q6J("disabled",i.isOldFYearDB()),e.xp6(10),e.Q6J("ngModel",o.searchProduct),e.xp6(2),e.Q6J("ngModel",o.searchProduct),e.xp6(3),e.Q6J("ngModel",o.filter),e.xp6(14),e.Q6J("ngIf",o.productwiseLists&&o.productwiseLists.length>0),e.xp6(1),e.Q6J("ngIf",o.productwiseLists&&0===e.Dn7(38,7,o.productwiseLists,o.filter,o.searchProduct).length),e.xp6(2),e.Q6J("ngIf",o.productwiseLists&&e.Dn7(40,11,o.productwiseLists,o.filter,o.searchProduct).length>o.itemsPerPage)}},dependencies:[_.sg,_.O5,f.rH,p.Fj,p._,p.JJ,p.On,P.LS,W.H,P._s,x],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.card-footer[_ngcontent-%COMP%]{height:6vh}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),n})();var Z=a(19102),B=a(14970),V=a(53074),J=a(87584),k=a(28698),G=a(88265);const Q=["genericGrid"],Y=["categoryName"];function q(n,c){1&n&&(e.TgZ(0,"small",27),e._uU(1," Product name is required ! "),e.qZA())}function H(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",14)(1,"label",15),e._uU(2,"Barcode:"),e.qZA(),e.TgZ(3,"div",16)(4,"input",28),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.validateItemBarcode())}),e.qZA()()()}}function z(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"ng-multiselect-dropdown",33),e.NdJ("onDeSelect",function(i){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onDeSelect(i,r))})("ngModelChange",function(i){e.CHM(t);const r=e.oxw().$implicit;return e.KtG(r.SELECTEDVARIANT=i)})("onSelect",function(i){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onMultiSelect(i,r))})("onSelectAll",function(i){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onSelectAll(i,r))})("onDeSelectAll",function(i){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onDeSelectAll(i,r))}),e.qZA()()}if(2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("placeholder","Select Variant ")("settings",o.dropdownSettings)("data",t.VARIANTVALUES)("ngModel",t.SELECTEDVARIANT)}}function K(n,c){if(1&n&&(e.TgZ(0,"div",14)(1,"div",29)(2,"label",30),e._uU(3),e.qZA()(),e.YNc(4,z,2,4,"div",31),e.qZA()),2&n){const t=c.$implicit;e.xp6(3),e.hij("",null==t?null:t.VARIANTNAME," :"),e.xp6(1),e.Q6J("ngIf",t.VARIANTVALUES.length)}}const $=[{path:"",component:I},{path:"add-productwise",component:(()=>{class n{constructor(t,o,i,r,s,l,m,d){this.fb=t,this.spinnerService=o,this.alertService=i,this.productWiseService=r,this.router=s,this.masterService=l,this._activatedRoute=m,this._trnMainService=d,this.gridPopupSettings=new Z.sG,this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1,this.categorywiseConfigurationdetails=[],this.matrixSelectSetting={singleSelection:!1,text:"Select",enableCheckAll:!0,selectAllText:"Select All",unSelectAllText:"UnSelect All",enableSearchFilter:!0,searchBy:[],maxHeight:300,badgeShowLimit:999999999999,classes:"",disabled:!1,searchPlaceholderText:"Search",showCheckbox:!0,noDataLabel:"No Data Available",searchAutofocus:!0,lazyLoading:!1,labelKey:"NAME",primaryKey:"NAME",position:"bottom"},this.showStockedQuantityOnly=0,"add"===this._activatedRoute.snapshot.params.mode&&(this.spinnerService.show("Loading...."),this.masterService.masterPostmethod("/getcategorywiseconfiguration",{}).subscribe(w=>{w.result&&w.result.length&&(this.spinnerService.hide(),this.categorywiseConfigurationdetails=w.result,this.categorywiseConfigurationdetails.forEach(S=>{if(S.SELECTEDMCAT=[],S.finalSelectedMCAT=[],S.hasOwnProperty("VARIANTVALUES")){let b=JSON.parse(S.VARIANTVALUES);S.VARIANTVALUES="object"==typeof b&&b&&b.length?b:[]}}),console.log("categorywiseConfigurationdetails",this.categorywiseConfigurationdetails))},w=>{this.spinnerService.hide()}))}updown(t){if("Escape"===t.code&&(t.preventDefault(),this.cancel()),"F6"===t.code){if(t.preventDefault(),!this.productWiseForm.valid)return;this.onSubmit()}}ngOnInit(){try{if(this.dropdownSettings={singleSelection:!1,idField:"VARIANTBARCODE",textField:"NAME",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0,maxHeight:170},this.productWiseForm=this.fb.group({PRODUCTWISENAME:["",[p.kI.required]],MCODE:["",[p.kI.required]],STATUS:[1],BARCODE:[""]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.productWiseForm.get("PRODUCTWISENAME").disable(),this.productWiseForm.get("STATUS").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),console.log("MCODE",this._activatedRoute.snapshot.params.mcode),this._activatedRoute.snapshot.params.name&&this._activatedRoute.snapshot.params.mcode){let t="";t=this._activatedRoute.snapshot.params.name;let o=this._activatedRoute.snapshot.params.barcode;this.spinnerService.show("Getting data, Please wait..."),this.productWiseService.getProductWiseForEdit(t,this._activatedRoute.snapshot.params.mcode,o).subscribe(i=>{"ok"===i.status&&i.result2?.length>0?(console.log("selected mcat",i.result,i.result2),this.productWiseForm.patchValue({PRODUCTWISENAME:i.result.DESCA,STATUS:i.result.status,MCODE:i.result.MCODE,BARCODE:i.result.BARCODE}),null!=this.productWiseForm.value.BARCODE&&this.productWiseForm.get("BARCODE").disable(),this.productWiseBeforeEdit=i.result.MCODE,i.result2&&i.result2.length&&(this.masterService.masterPostmethod("/getcategorywiseconfiguration",{}).subscribe(r=>{r.result&&r.result.length&&(this.spinnerService.hide(),this.categorywiseConfigurationdetails=r.result,this.categorywiseConfigurationdetails.forEach(s=>{if(s.SELECTEDMCAT=[],s.finalSelectedMCAT=[],s.hasOwnProperty("VARIANTVALUES")){let l=JSON.parse(s.VARIANTVALUES);s.VARIANTVALUES="object"==typeof l&&l&&l.length?l:[]}this.categorywiseConfigurationdetails.forEach(l=>{let m=i.result2.filter(d=>d.VARIANT==l.VARIANT)[0];l.SELECTEDMCAT=m?m.SELECTEDMCAT:[],l.SELECTEDVARIANT=m?m.SELECTEDMCAT:[]})}),console.log("categorywiseConfigurationdetails",this.categorywiseConfigurationdetails))},r=>{this.spinnerService.hide()}),i.result.BARCODE&&this.validateItemBarcode()),"edit"===this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Product Variant":"view"===this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Productwise Master"),this.mode="edit",this.initialTextReadOnly=!0):this.alertService.error(i.result)},i=>{this.spinnerService.hide(),this.alertService.error(i._body)})}else this.mode="add",this.modeTitle="New Product Variant",this.initialTextReadOnly=!1}catch(t){this.alertService.error(t)}}GetFinalProductVariant(t,o){const i=[];for(var r in o){console.log("property",r,t);var s=t.find(l=>l.VARIANTNAME?.toUpperCase()==r.toUpperCase());s&&(console.log("property1",s),s.VARIANTVALUES&&(s.SELECTEDMCAT=s.VARIANTVALUES.filter(l=>l.NAME==o[r]))),i.push(s)}return console.log("finalbcode",i),i}ngAfterViewInit(){setTimeout(()=>this.categoryNameEl.nativeElement.focus())}onSubmit(){console.log("barode value",this.productWiseForm),console.log("category variant ",this.categorywiseConfigurationdetails);let t={};if(!this.productWiseForm.value.PRODUCTWISENAME||!this.productWiseForm.value.MCODE)return void this.alertService.warning("Please select product first.");t.MENUCAT=this.productWiseForm.value.PRODUCTWISENAME,t.STATUS=this.productWiseForm.value.STATUS,t.ProductWiseDetail=this.categorywiseConfigurationdetails,t.MCODE=this.productWiseForm.value.MCODE,t.BARCODE=this.productWiseForm.value.BARCODE,"edit"==this.mode&&(t.productWiseBeforeEdit=this.productWiseBeforeEdit);const o={mode:this.mode,data:t};this.spinnerService.show("Data is Saving ..."),this.productWiseService.saveProductWise(o).subscribe(i=>{"ok"==i.status?(this.spinnerService.hide(),this.alertService.info("Saved Successfully"),this.productWiseForm.reset(),this.router.navigate(["./pages/masters/inventoryInfo/productwise"])):(this.spinnerService.hide(),this.alertService.error(i.result))},i=>{this.spinnerService.hide()})}cancel(){this.router.navigate(["./pages/masters/productwise"])}onItemSelect(t){console.log(t)}onMultiSelect(t,o){let i=o.VARIANTVALUES.find(r=>r.VARIANTBARCODE==t.VARIANTBARCODE);o.SELECTEDMCAT.push(i)}onSelectAll(t,o){o.SELECTEDMCAT=[],t.forEach(i=>{let r=o.VARIANTVALUES.find(s=>s.VARIANTBARCODE==i.VARIANTBARCODE);o.SELECTEDMCAT.push(r)})}onDeSelect(t,o){o.SELECTEDMCAT=o.SELECTEDMCAT.filter(i=>i.VARIANTBARCODE!=t.VARIANTBARCODE)}onDeSelectAll(t,o){o.SELECTEDMCAT=[]}validateItemBarcode(){null==this.productWiseForm.value.PRODUCTWISENAME||null==this.productWiseForm.value.BARCODE&&""==this.productWiseForm.value.BARCODE&&null==this.productWiseForm.value.BARCODE?this.matrixSelectSetting=Object.assign({},this.matrixSelectSetting,{limitSelection:null}):(console.log("value223"),this.matrixSelectSetting=Object.assign({},this.matrixSelectSetting,{limitSelection:1})),console.log("setting log",this.dropdownSettings)}onProductSelect(){this.gridPopupSettings={title:"PRODUCTS",apiEndpoints:"/getMenuitemPagedListForVariantProducts",defaultFilterIndex:1,useDefinefilterValue:"",columns:[{key:"MENUCODE",title:"MENU CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"NAME",hidden:!1,noSearch:!1},{key:"DESCRIPTION",title:"SHORT NAME",hidden:!1,noSearch:!1},{key:"PARENT",title:"PARENT",hidden:!1,noSearch:!1}]},this.genericGrid.show()}dblClickPopupItem(t){console.log("value",t),this.productWiseForm.get("PRODUCTWISENAME").patchValue(t.DESCA),this.productWiseForm.get("MCODE").patchValue(t.MCODE),console.log("Form",this.productWiseForm),document.getElementById("barcode").focus()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.qu),e.Y36(B.V),e.Y36(M.c),e.Y36(h),e.Y36(f.F0),e.Y36(V.P),e.Y36(f.gz),e.Y36(J.p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-productwise-form"]],viewQuery:function(t,o){if(1&t&&(e.Gf(Q,5),e.Gf(Y,5)),2&t){let i;e.iGM(i=e.CRH())&&(o.genericGrid=i.first),e.iGM(i=e.CRH())&&(o.categoryNameEl=i.first)}},hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(r){return o.updown(r)},!1,e.evT)},features:[e._Bn([A.e])],decls:34,vars:9,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/inventoryInfo/productwise","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"container"],[1,"form-group","row"],[1,"col-sm-3","form-control-label",2,"font-size","13px"],[1,"col-sm-8"],["type","text","id","Parent","formControlName","PRODUCTWISENAME","placeholder","Press Enter to Select","autocomplete","off",1,"form-control",2,"height","4vh","font-size","14px",3,"readOnly","keydown","keydown.Enter"],["categoryName",""],["style","margin-left: 16vw;","class","form-text text-danger ",4,"ngIf"],["class","form-group row",4,"ngIf"],[2,"border","2px solid #d9d9d9","width","100%","padding","5px 5px","margin-left","-5px","margin-bottom","0.5rem"],[2,"font-size","13px","text-align","left","margin-bottom","2px","width","auto","margin-left","1rem","font-weight","500"],[1,"container",2,"height","20rem","overflow-y","auto"],["class","form-group row",4,"ngFor","ngForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],[1,"form-text","text-danger",2,"margin-left","16vw"],["type","text","id","barcode","formControlName","BARCODE",1,"form-control",2,"height","4vh","font-size","14px",3,"change"],[1,"col-sm-3"],[1,"form-control-label"],["class","col-sm-7",4,"ngIf"],[1,"col-sm-7"],[1,"custom-asset-dropdown",3,"placeholder","settings","data","ngModel","onDeSelect","ngModelChange","onSelect","onSelectAll","onDeSelectAll"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Product Variant"),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(7,"button",5,6),e._uU(9,"Save"),e.qZA(),e.TgZ(10,"button",7),e._uU(11,"Back"),e.qZA()()()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"h5",10),e._uU(15),e.qZA()(),e.TgZ(16,"div",11)(17,"form",12),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(18,"div",13)(19,"div",14)(20,"label",15),e._uU(21,"Product Name:"),e.qZA(),e.TgZ(22,"div",16)(23,"input",17,18),e.NdJ("keydown",function(r){return r.preventDefault()})("keydown.Enter",function(){return o.onProductSelect()}),e.qZA()()(),e.YNc(25,q,2,0,"small",19),e.YNc(26,H,5,0,"div",20),e.qZA()(),e.TgZ(27,"fieldset",21)(28,"legend",22),e._uU(29,"Add product variants"),e.qZA(),e.TgZ(30,"div",23),e.YNc(31,K,5,2,"div",24),e.qZA()()()(),e.TgZ(32,"generic-popup-grid",25,26),e.NdJ("onItemDoubleClick",function(r){return o.dblClickPopupItem(r)}),e.qZA()),2&t&&(e.xp6(6),e.Q6J("formGroup",o.productWiseForm),e.xp6(1),e.Q6J("disabled",!o.productWiseForm.valid),e.xp6(8),e.Oqu(o.modeTitle),e.xp6(2),e.Q6J("formGroup",o.productWiseForm),e.xp6(6),e.Q6J("readOnly","view"==o.mode),e.xp6(2),e.Q6J("ngIf",o.productWiseForm.controls.PRODUCTWISENAME.touched&&(null==o.productWiseForm.controls.PRODUCTWISENAME.errors?null:o.productWiseForm.controls.PRODUCTWISENAME.errors.required)),e.xp6(1),e.Q6J("ngIf",1==o._trnMainService.userSetting.EnableBarcodeMapwithVariant),e.xp6(5),e.Q6J("ngForOf",o.categorywiseConfigurationdetails),e.xp6(1),e.Q6J("popupsettings",o.gridPopupSettings))},dependencies:[_.sg,_.O5,f.rH,p._Y,p.Fj,p.JJ,p.JL,p.On,p.sg,p.u,k.Zl,G.O],styles:[".card[_ngcontent-%COMP%]{margin:2px 30px 0 300px!important;width:60%}.card-body[_ngcontent-%COMP%]{padding:10px 16px}"]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild($),f.Bz]}),n})();var ee=a(82738),te=a(34579);const oe={suppressScrollX:!1};let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[h,{provide:C.op,useValue:oe}],imports:[_.ez,X,E.m,P.JX,C.Xd,O.ZQ.forRoot(),y.AngularMultiSelectModule,ee.b.forRoot(),te.h]}),n})()}}]);