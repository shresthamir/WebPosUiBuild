"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[7758],{98692:(b,_,i)=>{i.d(_,{n:()=>h});var u=i(28611);let h=(()=>{class e{constructor(m){this.el=m}onKeyDown(m){let a=m;if(this.OnlyNumber){if(-1!==[46,8,9,27,13,110].indexOf(a.keyCode)||190==a.keyCode&&!1===a.shiftKey||65==a.keyCode&&!0===a.ctrlKey||67==a.keyCode&&!0===a.ctrlKey||88==a.keyCode&&!0===a.ctrlKey||a.keyCode>=35&&a.keyCode<=39)return;(a.shiftKey||a.keyCode<48||a.keyCode>57)&&(a.keyCode<96||a.keyCode>105)&&a.preventDefault()}}}return e.\u0275fac=function(m){return new(m||e)(u.Y36(u.SBq))},e.\u0275dir=u.lG2({type:e,selectors:[["","OnlyNumber",""]],hostBindings:function(m,a){1&m&&u.NdJ("keydown",function(p){return a.onKeyDown(p)})},inputs:{OnlyNumber:"OnlyNumber"}}),e})()},62106:(b,_,i)=>{i.d(_,{A:()=>e});var u=i(46543),h=i(28611);let e=(()=>{class d{}return d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=h.oAB({type:d}),d.\u0275inj=h.cJS({imports:[u.m]}),d})()},49137:(b,_,i)=>{i.d(_,{C:()=>h});var u=i(28611);let h=(()=>{class e{transform(m,a,l){if(m)return a?m.filter(p=>{let f=p[l];const g=a.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(f?f.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(g))return p}):m}}return e.\u0275fac=function(m){return new(m||e)},e.\u0275pipe=u.Yjl({name:"searchData",type:e,pure:!1}),e})()},82738:(b,_,i)=>{i.d(_,{b:()=>l});var u=i(92752),h=i(72533),e=i(87584),d=i(71800),m=i(53074),a=i(28611);let l=(()=>{class p{static forRoot(){return{ngModule:p,providers:[m.P,e.p]}}}return p.\u0275fac=function(g){return new(g||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[u.ez,d.zk.forRoot(),h.JX]}),p})()},77879:(b,_,i)=>{i.d(_,{H:()=>e});var u=i(28611),h=i(53074);let e=(()=>{class d{constructor(a){this.masterRepo=a}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return d.\u0275fac=function(a){return new(a||d)(u.Y36(h.P))},d.\u0275dir=u.lG2({type:d,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),d})()},80814:(b,_,i)=>{i.d(_,{d:()=>B});var u=i(95570),h=i(47767),e=i(28611),d=i(67311),m=i(37282),a=i(92752),l=i(72011),p=i(72533),f=i(77879),g=i(49137);function v(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",23),e._uU(2),e.qZA(),e.TgZ(3,"td",24),e._uU(4),e.qZA(),e.TgZ(5,"td",25),e._uU(6),e.qZA(),e.TgZ(7,"td",26),e._uU(8),e.qZA(),e.TgZ(9,"td",26),e._uU(10),e.qZA(),e.TgZ(11,"td",27)(12,"a",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,S=e.oxw(2);return e.KtG(S.onViewClick(r))}),e._uU(13,"View"),e.qZA(),e.TgZ(14,"button",29,5),e.NdJ("click",function(){const r=e.CHM(t).$implicit,S=e.oxw(2);return e.KtG(S.onEditClicked(r))}),e._uU(16,"Edit"),e.qZA()()()}if(2&o){const t=c.$implicit,n=c.index,s=e.MAs(15),r=e.oxw(2);e.xp6(2),e.Oqu(n+1+(r.currentPage-1)*r.itemsPerPage),e.xp6(2),e.Oqu(t.NAME),e.xp6(2),e.Oqu(t.ADDRESS),e.xp6(2),e.Oqu(t.MOBILE),e.xp6(2),e.Oqu(t.SALESMANID),e.xp6(4),e.Q6J("disabled",s.isOldFYearDB())}}const A=function(o,c,t){return{itemsPerPage:o,currentPage:c,totalItems:t}};function M(o,c){if(1&o&&(e.ynx(0),e.YNc(1,v,17,6,"tr",22),e.ALo(2,"paginate"),e.ALo(3,"searchData"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.salesmanLists,t.filter,"NAME"),e.kEZ(8,A,t.itemsPerPage,t.currentPage,t.totalCount)))}}function C(o,c){1&o&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",30)(3,"div",31),e._uU(4,"Salesman Group Information are unavailable."),e.qZA()()(),e.BQk())}function E(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"div",34)(3,"pagination-controls",35),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.salesmanPagination(s))}),e.qZA()()()()}}let T=(()=>{class o extends h.c{constructor(t,n,s,r){super(r),this.router=t,this.alertService=n,this.salesmanService=s,this.injector=r,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=20,this.offset=0,this.salesmanLists=[]}ngOnInit(){this.salesmanService.getSalesmanProfileListGroup().subscribe(t=>{t?(console.log("res",t),this.isLoader=!1,this.salesmanLists=t||[]):(this.isLoader=!1,this.salesmanLists=[],this.errorMessage="Something went wrong.")},t=>{this.isLoader=!1,this.salesmanLists=[],this.errorMessage="Something went wrong."})}onEditClicked(t){try{this.router.navigate(["./pages/masters/salesman/add-salesman",{salesid:t.SALESMANID,mode:"edit",returnUrl:this.router.url}])}catch(n){this.alertService.error(n)}}onViewClick(t){try{this.router.navigate(["./pages/masters/salesman/add-salesman",{salesid:t.SALESMANID,mode:"view",returnUrl:this.router.url}])}catch(n){console.log(n),alert(n)}}deleteCustomer(t){}salesmanPagination(t){this.isLoader=!0,this.currentPage=t;const n=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n.isLoader=!1},500)}addSalesman(){try{this.router.navigate(["./pages/masters/salesman/add-salesman",{mode:"add",returnUrl:this.router.url}])}catch{}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.F0),e.Y36(d.c),e.Y36(m.o),e.Y36(e.zs3))},o.\u0275cmp=e.Xpm({type:o,selectors:[["salesman-list"]],features:[e.qOj],decls:40,vars:13,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control",2,"height","1.5rem","font-size","13px",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","18%"],["scope","col",2,"width","13%"],["scope","col",2,"width","8%"],["scope","col",2,"text-align","center","width","18%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","18%"],[2,"width","13%"],[2,"width","8%"],[2,"width","18%","text-align","center"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"pageChange"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Sales Man Master"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",4,5),e.NdJ("click",function(){return n.addSalesman()}),e._uU(9,"Add Sales man"),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),e._uU(15,"Salesman Lists"),e.qZA(),e.TgZ(16,"div",10)(17,"input",11),e.NdJ("ngModelChange",function(r){return n.filter=r}),e.qZA()()(),e.TgZ(18,"div",12)(19,"table",13)(20,"thead")(21,"tr",14)(22,"th",15),e._uU(23,"S.N"),e.qZA(),e.TgZ(24,"th",16),e._uU(25,"Name"),e.qZA(),e.TgZ(26,"th",17),e._uU(27,"Address"),e.qZA(),e.TgZ(28,"th",18),e._uU(29,"Mobile No."),e.qZA(),e.TgZ(30,"th",18),e._uU(31,"Salesman ID"),e.qZA(),e.TgZ(32,"th",19),e._uU(33,"Action"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,M,4,12,"ng-container",20),e.YNc(36,C,5,0,"ng-container",20),e.ALo(37,"searchData"),e.qZA()()(),e.YNc(38,E,4,0,"div",21),e.ALo(39,"searchData"),e.qZA()()()),2&t){const s=e.MAs(8);e.xp6(7),e.Q6J("disabled",s.isOldFYearDB()),e.xp6(10),e.Q6J("ngModel",n.filter),e.xp6(18),e.Q6J("ngIf",n.salesmanLists&&n.salesmanLists.length>0),e.xp6(1),e.Q6J("ngIf",n.salesmanLists&&0===e.Dn7(37,5,n.salesmanLists,n.filter,"NAME").length),e.xp6(2),e.Q6J("ngIf",n.salesmanLists&&e.Dn7(39,9,n.salesmanLists,n.filter,"NAME").length>n.itemsPerPage)}},dependencies:[a.sg,a.O5,u.rH,l.Fj,l.JJ,l.On,p.LS,f.H,p._s,g.C],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.card-footer[_ngcontent-%COMP%]{height:6vh}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:16rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),o})();var O=i(248),Z=i(14970),y=i(53074),x=i(97893),L=i(98692);function D(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSave())}),e._uU(1,"Save"),e.qZA()}}function P(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1," Salesman name is required. "),e.qZA())}function N(o,c){if(1&o&&(e.TgZ(0,"div",51),e.YNc(1,P,2,0,"span",52),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form.get("NAME").hasError("required"))}}function U(o,c){if(1&o&&(e.TgZ(0,"option",53),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.s9C("value",t.SalesmanTypeCode),e.xp6(1),e.hij(" ",t.SalesmanTypeName,"")}}function R(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1," Salesman type is required. "),e.qZA())}function w(o,c){if(1&o&&(e.TgZ(0,"div",51),e.YNc(1,R,2,0,"span",52),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form.get("SALESMANTYPECODE").hasError("required"))}}function F(o,c){if(1&o&&(e.TgZ(0,"option",54),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t.RouteName)}}function I(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"tbody")(1,"tr")(2,"td",55),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td")(12,"button",56),e.NdJ("click",function(){const r=e.CHM(t).index,S=e.oxw();return e.KtG(S.removeRoute(r))}),e._UZ(13,"span",57),e._uU(14," Remove "),e.qZA()()()()}if(2&o){const t=c.$implicit,n=c.index,s=e.oxw();e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(null==t?null:t.RouteName),e.xp6(2),e.Oqu(null==t?null:t.RouteCode),e.xp6(2),e.Oqu(e.lcZ(10,5,null==t?null:t.EffectiveDate)),e.xp6(3),e.Q6J("disabled",s.viewMode)}}const k=[{path:"",component:T},{path:"add-salesman",component:(()=>{class o{constructor(t,n,s,r,S,q,Y,J,K){this.preventNavigationService=t,this.alertService=n,this.loadingService=s,this.masterService=r,this.service=S,this.router=q,this.activatedRoute=Y,this.fb=J,this.alertMessage=K,this.viewMode=!1,this.mode="add",this.modeTitle="",this.salesman={},this.initialTextReadOnly=!1,this.subcriptions=[],this.routeNameList=[],this.routeList=[],this.Route={},this.getSalesmanType()}ngOnInit(){try{let t=this;if(this.form=this.fb.group({SALESMANID:["0"],NAME:["",l.kI.required],ADDRESS:["",l.kI.required],DOB:[""],TELNO:[""],MOBILE:["",l.kI.required],EMAIL:[""],SALESMANTYPECODE:["",l.kI.required],STATUS:[1]}),this.onFormChanges(),this.activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this.activatedRoute.snapshot.params.returnUrl),this.activatedRoute.snapshot.params.salesid){let s=this.activatedRoute.snapshot.params.salesid;console.log("Edit mode salesmanID",s),this.loadingService.show("Getting data, Please wait..."),this.service.getSalesman(s).subscribe(r=>{this.loadingService.hide(),console.log("salesman id info",r),"ok"==r.status?(this.form.patchValue({SALESMANID:r.result.res.SALESMANID,NAME:r.result.res.NAME,ADDRESS:r.result.res.ADDRESS,DOB:null==r.result.res.DOB?"":r.result.res.DOB.substring(0,10),TELNO:r.result.res.TELNO,MOBILE:r.result.res.MOBILE,EMAIL:r.result.res.EMAIL,SALESMANTYPECODE:r.result.res.SALESMANTYPECODE,STATUS:r.result.res.STATUS}),this.routeList=r.result.res1,"edit"==this.activatedRoute.snapshot.params.mode?this.modeTitle="Edit Salesman":"view"==this.activatedRoute.snapshot.params.mode&&(this.modeTitle="View Salesman"),t.mode="edit",t.initialTextReadOnly=!0):(this.mode="",this.modeTitle="Edit -Error in Salesman",this.initialTextReadOnly=!0)},r=>{this.loadingService.hide(),this.mode="",this.modeTitle="Edit2 -Error in Salesman",this.masterService.resolveError(r,"FormSaleman - getSalesman")})}else this.mode="add",this.modeTitle="Add Salesman",this.initialTextReadOnly=!1;this.activatedRoute.snapshot.params.mode&&"view"==this.activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.form.get("NAME").disable(),this.form.get("ADDRESS").disable(),this.form.get("DOB").disable(),this.form.get("TELNO").disable(),this.form.get("MOBILE").disable(),this.form.get("EMAIL").disable(),this.form.get("STATUS").disable(),this.form.get("SALESMANTYPECODE").disable()),this.getRouteMaster()}catch(t){alert(t)}}getSalesmanType(){console.log("get salesman type"),this.service.getAllSalesManTypeList().subscribe(t=>{console.log("res",t),this.salesmanTypeList=t||[]})}onFormChanges(){this.form.valueChanges.subscribe(()=>{this.form.dirty&&this.preventNavigationService.preventNavigation(!0)})}disabled(){try{return 1==this.viewMode?"#EBEBE4":""}catch(t){alert(t)}}editDisabled(){try{return"edit"==this.mode?"#EBEBE4":""}catch(t){alert(t)}}changeToArray(t){try{if(t){let n=[];return n.concat([],t),n}return[]}catch(n){alert(n)}}onSave(){try{this.onsubmit()}catch(t){alert(t)}}cancel(){try{this.router.navigate(["./pages/masters/salesman"]),"edit"==this.mode&&this.alertService.info("Changes are not saved!!")}catch(t){alert(t)}}salesbttnClick(){}onsubmit(){try{if(""==this.form.get("NAME").value||null==this.form.get("NAME").value)return void this.alertService.warning("Saleman Name is required");if(""==this.form.get("SALESMANTYPECODE").value||null==this.form.get("SALESMANTYPECODE").value)return void this.alertService.warning("Salesman Type is required");if(0==this.routeList.length)return void this.alertService.info("Please select a Route");let t=Object.assign({},this.form.value);this.loadingService.show("Saving data, Please wait..."),this.service.saveSalesman(this.mode,t,this.routeList).subscribe(n=>{if(console.log("inside save",n),this.loadingService.hide(),"ok"==n.status)"edit"==this.mode?this.alertMessage.success(3):this.alertMessage.success(0,"Salesman"),this.preventNavigationService.preventNavigation(!1),setTimeout(()=>{this.router.navigate([this.returnUrl])},1e3);else{if("The ConnectionString property has not been initialized."==n.result)return void this.router.navigate(["/login",this.router.url]);this.alertService.error("Error in Saving Data:"+n.result)}},n=>{this.loadingService.hide(),this.alertService.error(n)})}catch(t){this.alertService.error(t)}}onCancel(){try{this.router.navigate([this.returnUrl])}catch(t){this.alertService.error(t)}}ngOnDestroy(){try{this.subcriptions.forEach(t=>{t.unsubscribe()})}catch(t){this.alertService.error(t)}}getRouteMaster(){this.routeNameList=[],this.service.getAllRouteMasterName().subscribe(t=>{this.routeNameList=t})}AddRoute(){try{let n=this.Route;if(!n||null==n||null==n||n.length)return;if(""==n.RouteCode||null==n.RouteCode)return void this.alertService.warning("Please select a valid Route");if(""==this.EffectiveDate||null==this.EffectiveDate)return void this.alertService.warning("Please select Effective Date");if(this.routeList.findIndex(s=>s.RouteName==n.RouteName)>-1)return void this.alertService.warning("This Route  is already selected. Please Select another");this.Route.EffectiveDate=this.EffectiveDate,this.routeList.push(this.Route)}catch(n){this.alertService.error(n)}}changeRoute(t){}removeRoute(t){this.routeList.splice(t,1)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(O.d),e.Y36(d.c),e.Y36(Z.V),e.Y36(y.P),e.Y36(m.o),e.Y36(u.F0),e.Y36(u.gz),e.Y36(l.qu),e.Y36(x.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["salesman-form"]],decls:99,vars:29,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right",2,"margin-right","10px !important"],["type","submit","class","btn btn-info btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-info","btn-sm",3,"click"],[1,"main-container",2,"padding-top","10px","margin-bottom","0px"],[1,"row"],[1,"col-md-12"],["id","warehouse-tabs",1,"tabbable"],[1,"nav","nav-tabs"],[1,"nav-item"],["href","#general-info","data-toggle","tab",1,"nav-link","active"],["href","#Route","data-toggle","tab",1,"nav-link"],[1,"tab-content"],["id","general-info",1,"tab-pane","active"],[1,"form-horizontal",3,"formGroup"],[1,"row",2,"margin-top","1rem"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-3","form-control-label"],[1,"col-sm-7"],["type","text","formControlName","NAME","placeholder","Salesman Name","pattern","/[A-Z]{5}\\d{4}[A-Z]{1}/i",1,"form-control",2,"color","black"],["class","text-danger",4,"ngIf"],["type","date","formControlName","DOB",1,"form-control",2,"color","black"],["formControlName","SALESMANTYPECODE",1,"form-control",2,"color","black","padding","0px 5px"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","TELNO","placeholder","Phone number",1,"form-control",2,"color","black"],["type","text","formControlName","EMAIL","placeholder","Email",1,"form-control",2,"color","black"],["type","text","formControlName","ADDRESS","placeholder","Address",1,"form-control",2,"color","black"],["type","text","OnlyNumber","true","maxlength","10","formControlName","MOBILE","placeholder","Mobile number",1,"form-control",2,"color","black"],[1,"col-sm-3"],["formControlName","STATUS",1,"form-control",2,"padding","0px 5px"],["value","0"],["value","1"],["id","Route",1,"tab-pane"],[1,"col-md-7"],[1,"form-group","row",2,"margin-top","1rem"],[1,"col-md-2","form-control-label",2,"padding","0px"],[1,"col-md-4",2,"padding-left","0px"],[1,"form-control",2,"color","black","height","25px !important","padding","0px 5px",3,"ngModel","disabled","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["type","date",1,"form-control",2,"height","25px !important",3,"ngModel","disabled","ngModelChange"],[1,"btn","btn-info","btn-sm",3,"disabled","click"],[1,"table-striped","table",2,"background-color","white","border","1px solid #cbcbcb","margin-left","15px"],[2,"background-color","#cbcbcb","line-height","1.8rem"],[2,"width","50px"],[2,"width","300px"],[2,"width","150px"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-info","btn-sm",3,"click"],[1,"text-danger"],[4,"ngIf"],[3,"value"],[3,"ngValue"],[2,"text-align","center"],["type","button",1,"btn","btn-info","btn-sm",3,"disabled","click"],[1,"glyphicon","glyphicon-minus"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3),e.YNc(6,D,2,0,"button",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.cancel()}),e._uU(8,"Reset"),e.qZA()()()(),e.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"ul",10)(14,"li",11)(15,"a",12),e._uU(16,"General Info"),e.qZA()(),e.TgZ(17,"li",11)(18,"a",13),e._uU(19,"Route Details"),e.qZA()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"form",16)(23,"div",17)(24,"div",18)(25,"div",19)(26,"label",20),e._uU(27,"Name"),e.qZA(),e.TgZ(28,"div",21),e._UZ(29,"input",22),e.YNc(30,N,2,1,"div",23),e.qZA()(),e.TgZ(31,"div",19)(32,"label",20),e._uU(33,"Date of Birth"),e.qZA(),e.TgZ(34,"div",21),e._UZ(35,"input",24),e.qZA()(),e.TgZ(36,"div",19)(37,"label",20),e._uU(38,"Salesman Type"),e.qZA(),e.TgZ(39,"div",21)(40,"select",25),e.YNc(41,U,2,2,"option",26),e.qZA(),e.YNc(42,w,2,1,"div",23),e.qZA()(),e.TgZ(43,"div",19)(44,"label",20),e._uU(45,"Telephone No."),e.qZA(),e.TgZ(46,"div",21),e._UZ(47,"input",27),e.qZA()()(),e.TgZ(48,"div",18)(49,"div",19)(50,"label",20),e._uU(51,"Email"),e.qZA(),e.TgZ(52,"div",21),e._UZ(53,"input",28),e.qZA()(),e.TgZ(54,"div",19)(55,"label",20),e._uU(56,"Address"),e.qZA(),e.TgZ(57,"div",21),e._UZ(58,"input",29),e.qZA()(),e.TgZ(59,"div",19)(60,"label",20),e._uU(61,"Mobile No"),e.qZA(),e.TgZ(62,"div",21),e._UZ(63,"input",30),e.qZA()(),e.TgZ(64,"div",19)(65,"label",31),e._uU(66,"Status"),e.qZA(),e.TgZ(67,"div",21)(68,"select",32)(69,"option",33),e._uU(70,"Inactive"),e.qZA(),e.TgZ(71,"option",34),e._uU(72,"Active"),e.qZA()()()()()()()(),e.TgZ(73,"div",35)(74,"div",36)(75,"div",37)(76,"label",38),e._uU(77,"Route Name"),e.qZA(),e.TgZ(78,"div",39)(79,"select",40),e.NdJ("ngModelChange",function(r){return n.changeRoute(r)})("ngModelChange",function(r){return n.Route=r}),e.YNc(80,F,2,2,"option",41),e.qZA()(),e.TgZ(81,"div",39)(82,"input",42),e.NdJ("ngModelChange",function(r){return n.EffectiveDate=r}),e.qZA()()()(),e.TgZ(83,"div",1)(84,"button",43),e.NdJ("click",function(){return n.AddRoute()}),e._uU(85,"Add Route"),e.qZA()(),e.TgZ(86,"div",37)(87,"table",44)(88,"tr",45)(89,"th",46),e._uU(90,"S.No."),e.qZA(),e.TgZ(91,"th",47),e._uU(92,"Route Name"),e.qZA(),e.TgZ(93,"th",48),e._uU(94,"Route Code"),e.qZA(),e.TgZ(95,"th",48),e._uU(96,"Effective Date"),e.qZA(),e._UZ(97,"th"),e.qZA(),e.YNc(98,I,15,7,"tbody",49),e.qZA()()()()()()()()),2&t&&(e.xp6(3),e.Oqu(n.modeTitle),e.xp6(3),e.Q6J("ngIf",0==n.viewMode),e.xp6(16),e.Q6J("formGroup",n.form),e.xp6(7),e.Udp("background-color",n.disabled()),e.xp6(1),e.Q6J("ngIf",!n.form.controls.NAME.valid&&(null==n.form.controls.NAME?null:n.form.controls.NAME.touched)),e.xp6(5),e.Udp("background-color",n.disabled()),e.xp6(5),e.Udp("background-color",n.disabled()),e.xp6(1),e.Q6J("ngForOf",n.salesmanTypeList),e.xp6(1),e.Q6J("ngIf",!n.form.controls.SALESMANTYPECODE.valid&&(null==n.form.controls.SALESMANTYPECODE?null:n.form.controls.SALESMANTYPECODE.touched)),e.xp6(5),e.Udp("background-color",n.disabled()),e.xp6(6),e.Udp("background-color",n.disabled()),e.xp6(5),e.Udp("background-color",n.disabled()),e.xp6(5),e.Udp("background-color",n.disabled()),e.xp6(16),e.Udp("background-color",n.disabled()),e.Q6J("ngModel",n.Route)("disabled",n.viewMode),e.xp6(1),e.Q6J("ngForOf",n.routeNameList),e.xp6(2),e.Q6J("ngModel",n.EffectiveDate)("disabled",n.viewMode),e.xp6(2),e.Q6J("disabled",n.viewMode),e.xp6(14),e.Q6J("ngForOf",n.routeList))},dependencies:[a.sg,a.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.nD,l.c5,l.On,l.sg,l.u,L.n,a.uU],styles:[".card[_ngcontent-%COMP%]{margin:36px 30px 0 300px!important;width:60%}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:4vh;color:#000}label[_ngcontent-%COMP%]{height:25px;font-size:14px}.form-control[_ngcontent-%COMP%]{font-size:14px}.table[_ngcontent-%COMP%]{width:auto}th[_ngcontent-%COMP%]{font-size:15px;padding:0}td[_ngcontent-%COMP%]{font-size:13px;padding:0;vertical-align:baseline}"]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(k),u.Bz]}),o})()},37282:(b,_,i)=>{i.d(_,{o:()=>l});var u=i(76165),h=i(79765),e=i(28611),d=i(95570),m=i(67297),a=i(71180);let l=(()=>{class p{constructor(g,v,A,M){this.http=g,this.activatedRoute=v,this.authService=A,this.state=M;const C=this.state.getGlobalSetting("apiUrl");C&&C.length>0&&(this.apiUrl=C)}saveSalesman(g,v,A=[]){return new h.xQ,this.http.post(this.apiUrl+"/saveSalesman",{mode:g,data:v,dataList:A})}getSalesman(g){return new h.xQ,console.log("about to edit on getSalesman"),this.http.post(this.apiUrl+"/getSalesman",{mode:"query",data:{SALESMANID:g}})}getAllSalesManTypeList(){return this.http.get(this.apiUrl+"/getAllSalesmanTypeList")}getAllRouteMasterName(){return this.http.get(this.apiUrl+"/getAllRouteMasterList")}getSalesmanProfileListGroup(){return this.http.get(this.apiUrl+"/getSalesmanList")}getRequestOption(){const g=new u.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token});return console.log({headers:g}),g}}return p.\u0275fac=function(g){return new(g||p)(e.LFG(u.eN),e.LFG(d.gz),e.LFG(m.e),e.LFG(a.q))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),p})()}}]);