"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[1582],{98692:(_,m,i)=>{i.d(m,{n:()=>g});var p=i(36336);let g=(()=>{class e{constructor(h){this.el=h}onKeyDown(h){let s=h;if(this.OnlyNumber){if(-1!==[46,8,9,27,13,110].indexOf(s.keyCode)||190==s.keyCode&&!1===s.shiftKey||65==s.keyCode&&!0===s.ctrlKey||67==s.keyCode&&!0===s.ctrlKey||88==s.keyCode&&!0===s.ctrlKey||s.keyCode>=35&&s.keyCode<=39)return;(s.shiftKey||s.keyCode<48||s.keyCode>57)&&(s.keyCode<96||s.keyCode>105)&&s.preventDefault()}}}return e.\u0275fac=function(h){return new(h||e)(p.Y36(p.SBq))},e.\u0275dir=p.lG2({type:e,selectors:[["","OnlyNumber",""]],hostBindings:function(h,s){1&h&&p.NdJ("keydown",function(f){return s.onKeyDown(f)})},inputs:{OnlyNumber:"OnlyNumber"}}),e})()},62106:(_,m,i)=>{i.d(m,{A:()=>e});var p=i(89953),g=i(36336);let e=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=g.oAB({type:d}),d.\u0275inj=g.cJS({imports:[p.m]}),d})()},49137:(_,m,i)=>{i.d(m,{C:()=>g});var p=i(36336);let g=(()=>{class e{transform(h,s,u){if(h)return s?h.filter(f=>{let v=f[u];const b=s.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(v?v.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(b))return f}):h}}return e.\u0275fac=function(h){return new(h||e)},e.\u0275pipe=p.Yjl({name:"searchData",type:e,pure:!1}),e})()},77879:(_,m,i)=>{i.d(m,{H:()=>e});var p=i(36336),g=i(53074);let e=(()=>{class d{constructor(s){this.masterRepo=s}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return d.\u0275fac=function(s){return new(s||d)(p.Y36(g.P))},d.\u0275dir=p.lG2({type:d,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),d})()},1582:(_,m,i)=>{i.r(m),i.d(m,{WarehouseModule:()=>K});var p=i(45365),e=(i(64298),i(36336)),d=i(67311),h=i(53074),s=i(92752),u=i(63504),f=i(72533),v=i(77879),b=i(49137);const A=["genericGrid"];function S(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td",22),e._uU(4),e.qZA(),e.TgZ(5,"td",22),e._uU(6),e.qZA(),e.TgZ(7,"td",22),e._uU(8),e.qZA(),e.TgZ(9,"td",22),e._uU(10),e.qZA(),e.TgZ(11,"td",23)(12,"button",24),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.onViewClicked(l))}),e._uU(13,"View"),e.qZA(),e.TgZ(14,"button",25,5),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.onEditClick(l))}),e._uU(16,"Edit"),e.qZA(),e.TgZ(17,"button",26,5),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.deleteWarehouse(l))}),e._uU(19,"Delete"),e.qZA()()()}if(2&n){const t=a.$implicit,o=a.index,r=e.MAs(15),l=e.oxw(2);e.xp6(2),e.Oqu(o+1+(l.currentPage-1)*l.itemsPerPage),e.xp6(2),e.Oqu(null==t?null:t.NAME),e.xp6(2),e.Oqu(null==t?null:t.DIVISIONNAME),e.xp6(2),e.Oqu(null==t?null:t.DIVISION),e.xp6(2),e.Oqu(null==t?null:t.WarehouseType),e.xp6(4),e.Q6J("disabled",r.isOldFYearDB()),e.xp6(3),e.Q6J("disabled",r.isOldFYearDB())}}const C=function(n,a,t){return{itemsPerPage:n,currentPage:a,totalItems:t}};function N(n,a){if(1&n&&(e.ynx(0),e.YNc(1,S,20,7,"tr",20),e.ALo(2,"paginate"),e.ALo(3,"searchData"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.warehouseList,t.filter,"NAME"),e.kEZ(8,C,t.itemsPerPage,t.currentPage,t.totalCount)))}}function M(n,a){1&n&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",27)(3,"div",28),e._uU(4,"Warehouse List are unavailable."),e.qZA()()(),e.BQk())}function O(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"pagination-controls",32),e.NdJ("pageChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.warehousePagination(r))}),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("directionLinks",t.directionLinks)}}let w=(()=>{class n{constructor(t,o,r){this.router=t,this.alertService=o,this.masterService=r,this.warehouseList=[],this.isLoader=!0,this.directionLinks=!0,this.currentPage=1,this.itemsPerPage=20,this.masterService.getAllWarehouseList().subscribe(l=>{this.warehouseList=l})}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){}addNewWarehouse(){try{this.router.navigate(["./pages/masters/warehouse/add-warehouse",{mode:"add",returnUrl:this.router.url}])}catch(t){this.alertService.error(t)}}onEditClick(t){if("T"!=t.ISDEFAULT)try{this.router.navigate(["./pages/masters/warehouse/add-warehouse",{name:t.NAME,mode:"edit",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}else this.alertService.warning("Main Warehouse is not editable.")}onViewClicked(t){try{this.router.navigate(["pages/masters/warehouse/add-warehouse",{name:t.NAME,mode:"view",returnUrl:this.router.url}])}catch(o){this.alertService.error(o)}}deleteWarehouse(t){confirm("Are you sure you want to delete "+t.NAME+" ?")&&this.masterService.deleteWarehouse(t.NAME).subscribe(o=>{"ok"==o.status?(this.alertService.info(o.result),this.masterService.getAllWarehouseList().subscribe(r=>{this.warehouseList=r&&r||[]})):this.alertService.error(o.result.error)},o=>{this.alertService.error(o.error)})}warehousePagination(t){this.isLoader=!0,this.currentPage=t;const o=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{o.isLoader=!1},500)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.F0),e.Y36(d.c),e.Y36(h.P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-warehouselist"]],viewQuery:function(t,o){if(1&t&&e.Gf(A,5),2&t){let r;e.iGM(r=e.CRH())&&(o.genericGrid=r.first)}},hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(l){return o.updown(l)},!1,e.evT)},decls:40,vars:13,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem","height","31rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control",2,"height","1.5rem",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","15%"],["scope","col",2,"width","20%","text-align","center"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","15%"],[2,"width","20%","text-align","center"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px",3,"click"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["type","button","data-toggle","modal","appOldFYearDB","",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"disabled","click"],["colspan","3"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Warehouse"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",4,5),e.NdJ("click",function(){return o.addNewWarehouse()}),e._uU(9,"Add Warehouse"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),e._uU(15,"Warehouse List"),e.qZA(),e.TgZ(16,"div",10)(17,"input",11),e.NdJ("ngModelChange",function(l){return o.filter=l}),e.qZA()()(),e.TgZ(18,"div",12)(19,"table",13)(20,"thead")(21,"tr",14)(22,"th",15),e._uU(23,"S.N."),e.qZA(),e.TgZ(24,"th",16),e._uU(25,"Warehouse"),e.qZA(),e.TgZ(26,"th",16),e._uU(27,"Division Name"),e.qZA(),e.TgZ(28,"th",16),e._uU(29,"Division"),e.qZA(),e.TgZ(30,"th",16),e._uU(31,"Warehouse Type"),e.qZA(),e.TgZ(32,"th",17),e._uU(33,"Action"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,N,4,12,"ng-container",18),e.YNc(36,M,5,0,"ng-container",18),e.ALo(37,"searchData"),e.qZA()()(),e.YNc(38,O,4,1,"div",19),e.ALo(39,"searchData"),e.qZA()()()),2&t){const r=e.MAs(8);e.xp6(7),e.Q6J("disabled",r.isOldFYearDB()),e.xp6(10),e.Q6J("ngModel",o.filter),e.xp6(18),e.Q6J("ngIf",o.warehouseList&&o.warehouseList.length>0),e.xp6(1),e.Q6J("ngIf",o.warehouseList&&0===e.Dn7(37,5,o.warehouseList,o.filter,"NAME").length),e.xp6(2),e.Q6J("ngIf",o.warehouseList&&e.Dn7(39,9,o.warehouseList,o.filter,"NAME").length>o.itemsPerPage)}},dependencies:[p.rH,s.sg,s.O5,u.Fj,u.JJ,u.On,f.LS,v.H,f._s,b.C],styles:[".no-data-available[_ngcontent-%COMP%]{text-align:center}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.card-footer[_ngcontent-%COMP%]{height:6vh}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}",".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n        background: #17a2b8 !important;\n        border: transparent !important;\n        border-radius: 20px !important;\n    }\n    \n    .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover {\n        background: #74d4e2 !important;\n        border-radius: 20px !important;\n        border: transparent !important;\n    }\n    \n    .my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n        background: #c2c2c2;\n        border-radius: 20px !important;\n    }"]}),n})();var y=i(67297),T=i(28698),E=i(248),I=i(14970),Z=i(98692);const x=["genericGrid"],W=["name"];function D(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",42),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onSave())}),e._uU(1," Save "),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.form.valid)}}function k(n,a){1&n&&(e.TgZ(0,"small",43),e._uU(1," Name is required ! "),e.qZA())}function P(n,a){1&n&&(e.TgZ(0,"small",43),e._uU(1," Short name is required ! "),e.qZA())}function U(n,a){if(1&n&&(e.TgZ(0,"option",44),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("ngValue",t.INITIAL),e.xp6(1),e.hij(" ",t.NAME," ")}}function L(n,a){1&n&&(e.TgZ(0,"small",43),e._uU(1," Address is required ! "),e.qZA())}function R(n,a){1&n&&(e.TgZ(0,"small",43),e._uU(1," Warehouse type is required ! "),e.qZA())}function q(n,a){if(1&n&&(e.TgZ(0,"option",44),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("ngValue",t.INITIAL),e.xp6(1),e.hij(" ",t.NAME," ")}}function F(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",16)(1,"label",26),e._uU(2,"Transit Warehouse: "),e.qZA(),e.TgZ(3,"input",45),e.NdJ("change",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.form.value.ISTRANSITWAREHOUSE=r.target.checked?1:0)}),e.qZA()()}}const J=[{path:"",component:w},{path:"add-warehouse",component:(()=>{class n{constructor(t,o,r,l,c,G,Q,V){this.preventNavigationService=t,this.alertService=o,this.loadingService=r,this.masterService=l,this.authservice=c,this.router=G,this._activatedRoute=Q,this.fb=V,this.viewMode=!1,this.mode="add",this.modeTitle="",this.warehouse={},this.initialTextReadOnly=!1,this.subcriptions=[],this.gridPopupSettings=new T.im,this.userSetting=this.authservice.getSetting()}updown(t){if("Escape"===t.code&&(t.preventDefault(),this.cancel()),"F6"===t.code){if(t.preventDefault(),!this.form.valid)return;this.onSave()}}ngOnInit(){this.gridPopupSettings=Object.assign(new T.im,{title:"STATE",apiEndpoints:"/getStatesPagedList",defaultFilterIndex:0,columns:[{key:"StateCode",title:"State Code",hidden:!1,noSearch:!1},{key:"StateName",title:"State Name",hidden:!1,noSearch:!1}]});try{if(this.form=this.fb.group({NAME:["",[u.kI.required]],WNAME:["",[u.kI.required]],ADDRESS:["",u.kI.required],PHONE:[""],REMARKS:[""],DIVISION:["",[u.kI.required]],WarehouseType:["",[u.kI.required]],STATUS:[1],COMPANYID:[""],REFDIVISION:["",[u.kI.required]],ISTRANSITWAREHOUSE:[0]}),this.onFormChanges(),this._activatedRoute.snapshot.params.mode&&"view"==this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.form.get("NAME").disable(),this.form.get("ADDRESS").disable(),this.form.get("PHONE").disable(),this.form.get("REMARKS").disable(),this.form.get("DIVISION").disable(),this.form.get("REFDIVISION").disable(),this.form.get("WNAME").disable(),this.form.get("STATUS").disable(),this.form.get("WarehouseType").disable(),this.form.get("ISTRANSITWAREHOUSE").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.name){let t="";t=this._activatedRoute.snapshot.params.name,this.loadingService.show("Getting data, Please wait..."),this.masterService.masterPostmethod("/getWarehouse",{mode:"query",data:{NAME:t}}).subscribe(o=>{this.loadingService.hide(),"ok"==o.status?(this.form.patchValue({NAME:o.result.NAME,WNAME:o.result.WNAME,ADDRESS:o.result.ADDRESS,PHONE:o.result.PHONE,REMARKS:o.result.REMARKS,DIVISION:o.result.DIVISION,REFDIVISION:o.result.REFDIVISION,WarehouseType:o.result.WarehouseType,STATUS:o.result.STATUS,COMPANYID:o.result.COMPANYID,ISTRANSITWAREHOUSE:o.result.ISTRANSITWAREHOUSE}),null==this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Warehouse":"view"==this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Warehouse"),this.mode="edit",this.initialTextReadOnly=!0):this.alertService.error(o.result)},o=>{this.loadingService.hide(),this.alertService.error(o._body)})}else this.mode="add",this.modeTitle="Add Warehouse"}catch(t){this.alertService.error(t)}this.getDivisionList()}onFormChanges(){this.form.valueChanges.subscribe(()=>{this.form.dirty&&this.preventNavigationService.preventNavigation(!0)})}cancel(){try{this.router.navigate([this.returnUrl])}catch(t){this.alertService.error(t)}}ngOnDestroy(){try{this.subcriptions.forEach(t=>{t.unsubscribe()})}catch(t){this.alertService.error(t)}}disabled(){try{return 1==this.viewMode?"#EBEBE4":""}catch(t){this.alertService.error(t)}}editDisabled(){try{return"edit"==this.mode?"#EBEBE4":""}catch(t){this.alertService.error(t)}}getDivisionList(){this.divisonList=[],this.masterService.getAllDivisionList().subscribe(t=>{if(this.divisonList=t,!this._activatedRoute.snapshot.params.name){const o=this.divisonList.find(r=>1==r.MAIN);this.form.patchValue({DIVISION:o.INITIAL,REFDIVISION:o.INITIAL})}})}onSave(){try{if(!this.form.valid)return void this.alertService.info("Invalid Request, Please enter all required fields.");this.onsubmit()}catch(t){this.alertService.error(t)}}onsubmit(){console.log("onsubmit inside");try{if(this.form.controls.ADDRESS.value.length>200)return void this.alertService.error("Address cannot be more than 200 character");if(this.form.controls.PHONE.value?.length>10)return void this.alertService.error("Mobile Number cannot be more than 10 digit");let t=Object.assign({},this.form.value);this.loadingService.show("Saving data, please wait...");let o=this.masterService.masterPostmethod("/saveWarehouse",{mode:this.mode,data:t}).subscribe(r=>{if(this.loadingService.hide(),"ok"==r.status)this.alertService.success("Data Saved Successfully"),this.preventNavigationService.preventNavigation(!1),setTimeout(()=>{this.router.navigate([this.returnUrl])},1e3);else{if("The ConnectionString property has not been initialized."==r.result._body)return void this.router.navigate(["/login",this.router.url]);this.alertService.error(`Error in Saving Data: ${r.result.error}`)}},r=>{this.loadingService.hide(),this.alertService.error(r)});this.subcriptions.push(o)}catch(t){console.log("caught error"),this.alertService.error(t)}}onSateClicked(){this.genericGrid.show()}dblClickPopupItem(t){this.form.patchValue({STATE:t.StateCode,STATENAME:t.StateName}),null!=document.getElementById("Type")&&document.getElementById("Type").focus()}preventInput(t){return t.preventDefault(),!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E.d),e.Y36(d.c),e.Y36(I.V),e.Y36(h.P),e.Y36(y.e),e.Y36(p.F0),e.Y36(p.gz),e.Y36(u.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["warehouse"]],viewQuery:function(t,o){if(1&t&&(e.Gf(x,5),e.Gf(W,5)),2&t){let r;e.iGM(r=e.CRH())&&(o.genericGrid=r.first),e.iGM(r=e.CRH())&&(o.nameEl=r.first)}},hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(l){return o.updown(l)},!1,e.evT)},features:[e._Bn([y.e])],decls:78,vars:23,consts:[[1,"row","sticky-top"],[1,"col-md-6"],[1,"page-title"],["type","button ",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],["style","font-size: 12px;","class","btn btn-info pull-right",3,"disabled","click",4,"ngIf"],[1,"row"],[1,"col-md-12","no-padding"],["id","warehouse-tabs",1,"tabbable"],[1,"nav","nav-tabs"],[1,"nav-item"],["href","#general-info","data-toggle","tab",1,"nav-link","active"],[1,"tab-content","mr5"],["id","general-info",1,"tab-pane","active"],[1,"form-horizontal",3,"formGroup"],[1,"col-md-12","row","no-padding"],[1,"col-md-6","no-padding"],[1,"form-inline"],[1,"col-md-3"],["type","text","id","warehouseName","name","warehouseName","formControlName","NAME","autocomplete","off",1,"form-control","col-md-8",2,"color","black","height","4vh",3,"readOnly","keydown.enter"],["name",""],["class","form-text text-danger text-center",4,"ngIf"],["type","text","id","shortName","name","shortName","formControlName","WNAME","autocomplete","off",1,"form-control","col-md-8",2,"color","black","height","4vh",3,"keydown.enter"],["sname",""],["id","division","name","division","formControlName","DIVISION",1,"form-control","col-md-8",2,"height","4vh","padding","1px 12px",3,"keydown.enter"],["division",""],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-3"],["type","text","id","Address","name","Address","formControlName","ADDRESS","autocomplete","off",1,"form-control","col-md-8",2,"color","black","height","4vh",3,"keydown.enter"],["address",""],["type","text","maxlength","10","OnlyNumber","true","id","phone","name","phone","formControlName","PHONE","autocomplete","off",1,"form-control","col-md-8",2,"color","black","height","4vh",3,"keydown.enter"],["phone",""],["name","Type","id","Type","formControlName","WarehouseType",1,"form-control","col-md-8",2,"height","4vh","padding","1px 12px",3,"keydown.enter"],["type",""],["value","sellable"],["value","nonsellable"],["id","division","name","division","formControlName","REFDIVISION",1,"form-control","col-md-8",2,"height","4vh","padding","1px 12px",3,"keydown.enter"],["refDivision",""],["formControlName","STATUS",1,"form-control","col-md-8",2,"height","4vh","padding","1px 12px"],["status",""],["value","0"],["value","1"],["class","form-inline",4,"ngIf"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],[1,"form-text","text-danger","text-center"],[3,"ngValue"],["type","checkbox","formControlName","ISTRANSITWAREHOUSE",2,"width","2.5%",3,"change"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"button",3),e.NdJ("click",function(){return o.cancel()}),e._uU(6,"Back"),e.qZA(),e.YNc(7,D,2,1,"button",4),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"ul",8)(12,"li",9)(13,"a",10),e._uU(14,"General Info"),e.qZA()()(),e.TgZ(15,"div",11)(16,"div",12)(17,"form",13)(18,"div",14)(19,"div",15)(20,"div",16)(21,"label",17),e._uU(22,"Name :"),e.qZA(),e.TgZ(23,"input",18,19),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(30);return e.KtG(c.focus())}),e.qZA()(),e.YNc(25,k,2,0,"small",20),e.TgZ(26,"div",16)(27,"label",17),e._uU(28,"Short Name :"),e.qZA(),e.TgZ(29,"input",21,22),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(36);return e.KtG(c.focus())}),e.qZA()(),e.YNc(31,P,2,0,"small",20),e.TgZ(32,"div",16)(33,"label",17),e._uU(34,"Division :"),e.qZA(),e.TgZ(35,"select",23,24),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(43);return e.KtG(c.focus())}),e.YNc(37,U,2,2,"option",25),e._UZ(38,"option"),e.qZA()(),e.TgZ(39,"div",16)(40,"label",26),e._uU(41,"Address :"),e.qZA(),e.TgZ(42,"input",27,28),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(49);return e.KtG(c.focus())}),e.qZA()(),e.YNc(44,L,2,0,"small",20),e.TgZ(45,"div",16)(46,"label",26),e._uU(47,"Mobile No :"),e.qZA(),e.TgZ(48,"input",29,30),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(55);return e.KtG(c.focus())}),e.qZA()()(),e.TgZ(50,"div",15)(51,"div",16)(52,"label",26),e._uU(53,"Type:"),e.qZA(),e.TgZ(54,"select",31,32),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(65);return e.KtG(c.focus())}),e.TgZ(56,"option",33),e._uU(57,"Sellable"),e.qZA(),e.TgZ(58,"option",34),e._uU(59,"Non-Sellable"),e.qZA()()(),e.YNc(60,R,2,0,"small",20),e.TgZ(61,"div",16)(62,"label",17),e._uU(63,"Reference Division :"),e.qZA(),e.TgZ(64,"select",35,36),e.NdJ("keydown.enter",function(){e.CHM(r);const c=e.MAs(72);return e.KtG(c.focus())}),e.YNc(66,q,2,2,"option",25),e._UZ(67,"option"),e.qZA()(),e.TgZ(68,"div",16)(69,"label",26),e._uU(70,"Status: "),e.qZA(),e.TgZ(71,"select",37,38)(73,"option",39),e._uU(74,"Inactive"),e.qZA(),e.TgZ(75,"option",40),e._uU(76,"Active"),e.qZA()()(),e.YNc(77,F,4,0,"div",41),e.qZA()()()()()()()()}2&t&&(e.xp6(3),e.Oqu(o.modeTitle),e.xp6(4),e.Q6J("ngIf",0==o.viewMode),e.xp6(10),e.Q6J("formGroup",o.form),e.xp6(6),e.Udp("background-color",o.disabled())("background-color",o.editDisabled()),e.Q6J("readOnly","edit"==o.mode),e.xp6(2),e.Q6J("ngIf",o.form.controls.NAME.touched&&(null==o.form.controls.NAME.errors?null:o.form.controls.NAME.errors.required)),e.xp6(4),e.Udp("background-color",o.disabled()),e.xp6(2),e.Q6J("ngIf",o.form.controls.WNAME.touched&&(null==o.form.controls.WNAME.errors?null:o.form.controls.WNAME.errors.required)),e.xp6(6),e.Q6J("ngForOf",o.divisonList),e.xp6(5),e.Udp("background-color",o.disabled()),e.xp6(2),e.Q6J("ngIf",o.form.controls.ADDRESS.touched&&(null==o.form.controls.ADDRESS.errors?null:o.form.controls.ADDRESS.errors.required)),e.xp6(4),e.Udp("background-color",o.disabled()),e.xp6(6),e.Udp("background-color",o.disabled()),e.xp6(6),e.Q6J("ngIf",o.form.controls.WarehouseType.touched&&(null==o.form.controls.WarehouseType.errors?null:o.form.controls.WarehouseType.errors.required)),e.xp6(6),e.Q6J("ngForOf",o.divisonList),e.xp6(11),e.Q6J("ngIf",1==o.userSetting.EnableTransitWiseTransferIn))},dependencies:[s.sg,s.O5,u._Y,u.YN,u.Kr,u.Fj,u.Wl,u.EJ,u.JJ,u.JL,u.nD,u.sg,u.u,Z.n],styles:["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:4vh;color:#000;font-size:14px}label[_ngcontent-%COMP%]{height:25px;font-size:14px}"]}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(J),p.Bz]}),n})();var Y=i(89953),H=i(62106);let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[B,Y.m,H.A]}),n})()}}]);