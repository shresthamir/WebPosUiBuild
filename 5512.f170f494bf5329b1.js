"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[5512],{77879:(T,g,a)=>{a.d(g,{H:()=>t});var f=a(66274),m=a(53074);let t=(()=>{class c{constructor(h){this.masterRepo=h}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return c.\u0275fac=function(h){return new(h||c)(f.Y36(m.P))},c.\u0275dir=f.lG2({type:c,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),c})()},45512:(T,g,a)=>{a.r(g),a.d(g,{PointModule:()=>B});var f=a(89953),m=a(92752),t=a(66274),c=a(48083),_=a(23804),h=a(67311),P=a(79765),A=a(76165),Z=a(67297),x=a(71180);let v=(()=>{class n{constructor(e,i,o){this.http=e,this.authService=i,this.state=o;const r=this.state.getGlobalSetting("apiUrl");r&&r.length>0&&(this.apiUrl=r)}postPointGroup(e){const i={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(`${this.apiUrl}/savePointSetting`,e,i)}getPointGroup(){return this.http.get(this.apiUrl+"/getPointList")}getPointForEdit(e,i){let o={status:"error",result:""},r=new P.xQ;return this.authService.getRequestOption(),this.http.get(this.apiUrl+`/getPointMaster?SCHEMEID=${e}&MCAT=${i}`).subscribe(d=>{r.next(d),r.unsubscribe()},d=>{o.status="error",o.result=d,r.next(o),r.unsubscribe()}),r}deletePoint(e,i){let o={status:"error",result:""},r=new P.xQ,l={mode:"query",data:{SCHEMEID:e,MCAT:i}};const d={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/deletePointMaster",l,d).subscribe(u=>{r.next(u),r.unsubscribe()},u=>{o.status="error",o.result=u,r.next(o),r.unsubscribe()}),r}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.eN),t.LFG(Z.e),t.LFG(x.q))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var p=a(7587),C=a(72533),E=a(77879);let O=(()=>{class n{transform(e,i){if(e)return i?e.filter(o=>{const r=i.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(o.SCHEMEID?o.SCHEMEID.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(r))return o}):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"searchData",type:n,pure:!1}),n})();function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",24),t._uU(2),t.qZA(),t.TgZ(3,"td",25),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t._uU(6),t.qZA(),t.TgZ(7,"td",26),t._uU(8),t.qZA(),t.TgZ(9,"td",26),t._uU(10),t.qZA(),t.TgZ(11,"td",27)(12,"button",28,5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onEditClicked(r))}),t._uU(14,"Edit"),t.qZA(),t.TgZ(15,"button",29,5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.deletePoint(r))}),t._uU(17,"Delete"),t.qZA()()()}if(2&n){const e=s.$implicit,i=s.index,o=t.MAs(13),r=t.oxw(2);t.xp6(2),t.Oqu(i+1+(r.currentPage-1)*r.itemsPerPage),t.xp6(2),t.Oqu(e.SCHEMEID),t.xp6(2),t.Oqu(e.MCAT),t.xp6(2),t.Oqu(e.GRADEVALUE),t.xp6(2),t.Oqu(e.GRADEPOINT),t.xp6(2),t.Q6J("disabled",o.isOldFYearDB()),t.xp6(3),t.Q6J("disabled",o.isOldFYearDB())}}const y=function(n,s,e){return{itemsPerPage:n,currentPage:s,totalItems:e}};function w(n,s){if(1&n&&(t.ynx(0),t.YNc(1,S,18,7,"tr",23),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.xi3(3,4,e.pointList,e.filter),t.kEZ(7,y,e.itemsPerPage,e.currentPage,e.totalCount)))}}function F(n,s){1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",30)(3,"div",31),t._uU(4,"Point Master Lists are unavailable."),t.qZA()()(),t.BQk())}function L(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"pagination-controls",34),t.NdJ("pageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.pointPagination(o))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("directionLinks",e.directionLinks)}}let U=(()=>{class n{constructor(e,i,o,r){this.router=e,this.title=i,this.alertService=o,this.pointSettingService=r,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=100,this.directionLinks=!0}updown(e){"Escape"===e.code&&(e.preventDefault(),this.cancel())}ngOnInit(){this.pointSettingService.getPointGroup().subscribe(e=>{e?(this.isLoader=!1,this.pointList=e||[]):(this.pointList=[],this.errorMessage="Something went wrong.")},e=>{this.isLoader=!1,this.pointList=[],this.errorMessage="Something went wrong."})}pointPagination(e){this.isLoader=!0,this.currentPage=e;const i=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{i.isLoader=!1},500)}deleteColor(e){e&&(this.selectedDeletePoint=e)}onViewClicked(e){try{this.router.navigate(["./pages/masters/point/add-point",{name:e.SCHEMEID,mode:"view",returnUrl:this.router.url}])}catch(i){this.alertService.error(i)}}onEditClicked(e){console.log("point",e);try{this.router.navigate(["./pages/masters/point/add-point",{name:e.SCHEMEID,mcat:e.MCAT,mode:"edit",returnUrl:this.router.url}])}catch(i){this.alertService.error(i)}}addPoint(){try{this.router.navigate(["./pages/masters/point/add-point",{mode:"add",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}deletePoint(e){confirm("Are you sure you want to delete this item ?")&&this.pointSettingService.deletePoint(e.SCHEMEID,e.MCAT).subscribe(i=>{"ok"==i.status?(this.alertService.info(i.result),this.pointSettingService.getPointGroup().subscribe(o=>{o?(this.isLoader=!1,this.pointList=o||[]):(this.pointList=[],this.errorMessage="Something went wrong.")})):this.alertService.error(i.result.error)},i=>{this.alertService.error(i.error)})}cancel(){this.router.navigate(["./pages/dashboard"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0),t.Y36(_.Dx),t.Y36(h.c),t.Y36(v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-point-list"]],hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(r){return i.updown(r)},!1,t.evT)},decls:41,vars:11,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","autocomplete","off","name","filter",1,"form-control",2,"height","1.5rem",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","20%"],["scope","col",2,"width","12%"],["scope","Action",2,"width","20%","text-align","center"],[4,"ngIf"],["classs","card-footer"],["class","pagination",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","20%"],[2,"width","12%"],[2,"text-align","center","width","20%"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["type","button","data-toggle","modal","appOldFYearDB","",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"disabled","click"],["colspan","6"],[1,"font-weight-bold"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Membership Point Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4,5),t.NdJ("click",function(){return i.addPoint()}),t._uU(9,"Add New Point Setting"),t.qZA()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),t._uU(15,"Point Lists"),t.qZA(),t.TgZ(16,"div",10)(17,"input",11),t.NdJ("ngModelChange",function(r){return i.filter=r}),t.qZA()()(),t.TgZ(18,"div",12)(19,"table",13)(20,"thead",14)(21,"tr",15)(22,"th",16),t._uU(23,"S.N."),t.qZA(),t.TgZ(24,"th",17),t._uU(25,"Membership Category"),t.qZA(),t.TgZ(26,"th",17),t._uU(27,"Item Category"),t.qZA(),t.TgZ(28,"th",18),t._uU(29,"Pointable Value"),t.qZA(),t.TgZ(30,"th",18),t._uU(31,"Point"),t.qZA(),t.TgZ(32,"th",19),t._uU(33,"Action"),t.qZA()()(),t.TgZ(34,"tbody"),t.YNc(35,w,4,11,"ng-container",20),t.YNc(36,F,5,0,"ng-container",20),t.ALo(37,"searchData"),t.qZA()()(),t.TgZ(38,"div",21),t.YNc(39,L,3,1,"div",22),t.ALo(40,"searchData"),t.qZA()()()()),2&e){const o=t.MAs(8);t.xp6(7),t.Q6J("disabled",o.isOldFYearDB()),t.xp6(10),t.Q6J("ngModel",i.filter),t.xp6(18),t.Q6J("ngIf",i.pointList&&i.pointList.length>0),t.xp6(1),t.Q6J("ngIf",i.pointList&&0===t.xi3(37,5,i.pointList,i.filter).length),t.xp6(3),t.Q6J("ngIf",i.pointList&&t.xi3(40,8,i.pointList,i.filter).length>i.itemsPerPage)}},dependencies:[m.sg,m.O5,c.rH,p.Fj,p.JJ,p.On,C.LS,E.H,C._s,O],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),n})();var D=a(53074),I=a(14970);const q=["MembershipCat"];function k(n,s){if(1&n&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("ngValue",e.SCHEMEID),t.xp6(1),t.Oqu(e.NAME)}}function R(n,s){if(1&n&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("ngValue",e.MENUCAT),t.xp6(1),t.Oqu(e.MENUCAT)}}function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr",43)(1,"td",44),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",45),t._uU(8),t.qZA(),t.TgZ(9,"td",45),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",46),t.NdJ("click",function(){const r=t.CHM(e).index,l=t.oxw();return t.KtG(l.removeItems(r))}),t._uU(13,"Remove"),t.qZA()()()}if(2&n){const e=s.$implicit,i=s.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.SCHEMEID),t.xp6(2),t.Oqu(e.MCAT),t.xp6(2),t.Oqu(e.GRADEVALUE),t.xp6(2),t.Oqu(e.GRADEPOINT)}}const G=[{path:"",component:U},{path:"add-point",component:(()=>{class n{constructor(e,i,o,r,l,d,u){this.fb=e,this.masterService=i,this.pointSettingService=o,this.spinnerService=r,this.alertService=l,this.router=d,this._activatedRoute=u,this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1,this.ItemCatList=[],this.MemCatList=[],this.pointMasterList=[],this.masterService.getMCatList().subscribe(b=>{this.ItemCatList=b}),this.masterService.getMemCatList().subscribe(b=>{this.MemCatList=b})}updown(e){if("Escape"===e.code&&(e.preventDefault(),this.cancel()),"F6"===e.code){if(e.preventDefault(),!this.pointForm.valid)return;this.save()}}ngOnInit(){try{if(this.pointForm=this.fb.group({MEMCATEGORY:["",[p.kI.required]],ITEMCATEGORY:["",[p.kI.required]],ISDEFAULT:[""],VALUE:["",[p.kI.required]],POINT:["",[p.kI.required]]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.pointForm.get("MEMCATEGORY").disable(),this.pointForm.get("ITEMCATEGORY").disable(),this.pointForm.get("VALUE").disable(),this.pointForm.get("POINT").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.name&&this._activatedRoute.snapshot.params.mcat){let e="",i="";e=this._activatedRoute.snapshot.params.name,i=this._activatedRoute.snapshot.params.mcat,this.spinnerService.show("Getting data, Please wait..."),this.pointSettingService.getPointForEdit(e,i).subscribe(o=>{"ok"===o.status?(this.spinnerService.hide(),this.pointForm.patchValue({MEMCATEGORY:o.result.SCHEMEID,ITEMCATEGORY:o.result.MCAT,VALUE:o.result.GRADEVALUE,POINT:o.result.GRADEPOINT}),this.SCHEMEIDBeforeEdit=o.result.SCHEMEID,this.MCATBeforeEdit=o.result.MCAT,"edit"===this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Point Master":"view"===this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Point Master"),this.mode="edit",this.initialTextReadOnly=!0):this.alertService.error(o.result)},o=>{this.spinnerService.hide(),this.alertService.error(o._body)})}else this.mode="add",this.modeTitle="Add Point Master",this.initialTextReadOnly=!1}catch(e){this.spinnerService.hide(),this.alertService.error(e)}}ngAfterViewInit(){setTimeout(()=>this.memCatEl.nativeElement.focus())}onSubmit(){let e={};e.GRADEPOINT=this.pointForm.value.POINT,e.GRADEVALUE=this.pointForm.value.VALUE,e.SCHEMEID=this.pointForm.value.MEMCATEGORY,e.MCAT=this.pointForm.value.ITEMCATEGORY,"edit"==this.mode&&(e.SCHEMEIDBeforeEdit=this.SCHEMEIDBeforeEdit,e.MCATBeforeEdit=this.MCATBeforeEdit),this.pointMasterList.push(e),this.pointForm.reset()}removeItems(e){this.pointMasterList.splice(e,1)}defaultClicked(){this.pointForm.value.ITEMCATEGORY="%"}save(){const e={mode:this.mode,data:this.pointMasterList};this.spinnerService.show("Data is Saving ..."),this.pointSettingService.postPointGroup(e).subscribe(i=>{"ok"==i.status?(this.spinnerService.hide(),this.alertService.info(i.result),this.pointMasterList=[],this.router.navigate(["./pages/masters/point"])):(this.spinnerService.hide(),this.alertService.error(i.result))},i=>{this.spinnerService.hide(),this.alertService.info(i.error.result)})}cancel(){this.router.navigate(["./pages/masters/point"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.qu),t.Y36(D.P),t.Y36(v),t.Y36(I.V),t.Y36(h.c),t.Y36(c.F0),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-point-form"]],viewQuery:function(e,i){if(1&e&&t.Gf(q,5),2&e){let o;t.iGM(o=t.CRH())&&(i.memCatEl=o.first)}},hostBindings:function(e,i){1&e&&t.NdJ("keydown",function(r){return i.updown(r)},!1,t.evT)},decls:72,vars:9,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right",2,"margin-right","10px"],[3,"formGroup","ngSubmit"],["type","button",1,"btn","btn-info",2,"font-size","12px",3,"disabled","click"],["type","button","routerLink","/pages/masters/point","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"container",2,"margin-left","30px","margin-right","10px","padding","4px"],[1,"row"],[1,"col-sm-6"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-inline"],[1,"col-sm-4","form-control-label"],["id","memCat","formControlName","MEMCATEGORY",1,"form-control","col-sm-6",2,"height","4vh","width","16vw","font-size","12px",3,"keydown.enter"],["MembershipCat",""],[3,"ngValue",4,"ngFor","ngForOf"],["formControlName","ITEMCATEGORY",1,"form-control","col-sm-6",2,"height","4vh","width","16vw","font-size","12px",3,"keydown.enter"],["itemCat",""],["value","%"],[1,"form-control-label","col-sm-4"],[1,"col-sm-6",2,"padding-left","0px","padding-right","0px"],[1,"row",2,"padding-left","0px","padding-right","0px"],["type","number","formControlName","VALUE",1,"form-control","col-sm-3",2,"height","4vh","font-size","12px","padding","5px",3,"readOnly","keydown.enter"],["value",""],[1,"col-sm-1"],["type","number","formControlName","POINT",1,"form-control","col-sm-3",2,"height","4vh","font-size","12px","padding","5px",3,"readOnly","keydown.enter"],["point",""],[1,"form-control-label","col-sm-2"],[1,"form-group","row","col-sm-4"],[1,"form-group","col-sm-8"],["type","submit",1,"btn","btn-info","btn-sm","pull-right",3,"disabled"],["add",""],[1,"table","table-striped",2,"font-size","12px"],[2,"position","sticky","top","0"],["scope","col",2,"width","10%"],["scope","col"],["scope","col",2,"width","15%"],["style","border: 1px solid #e6e6e6;",4,"ngFor","ngForOf"],[3,"ngValue"],[2,"border","1px solid #e6e6e6"],[2,"width","10%"],[2,"width","14%"],["type","button",1,"btn","btn-sm","btn-danger",2,"line-height","1",3,"click"]],template:function(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Membership Point Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(7,"button",5),t.NdJ("click",function(){return i.save()}),t._uU(8,"Save"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"Back"),t.qZA()()()()(),t.TgZ(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"h5",12),t._uU(17,"Point Master"),t.qZA()(),t.TgZ(18,"div",13)(19,"form",14),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(20,"div",15)(21,"label",16),t._uU(22,"Membership Category:"),t.qZA(),t.TgZ(23,"select",17,18),t.NdJ("keydown.enter",function(){t.CHM(o);const l=t.MAs(30);return t.KtG(l.focus())}),t.YNc(25,k,2,2,"option",19),t.qZA()(),t.TgZ(26,"div",15)(27,"label",16),t._uU(28,"Item Category:"),t.qZA(),t.TgZ(29,"select",20,21),t.NdJ("keydown.enter",function(){t.CHM(o);const l=t.MAs(40);return t.KtG(l.focus())}),t.TgZ(31,"option",22),t._uU(32,"Default"),t.qZA(),t.YNc(33,R,2,2,"option",19),t.qZA()(),t.TgZ(34,"div",15)(35,"label",23),t._uU(36,"Value:"),t.qZA(),t.TgZ(37,"div",24)(38,"div",25)(39,"input",26,27),t.NdJ("keydown.enter",function(){t.CHM(o);const l=t.MAs(44);return t.KtG(l.focus())}),t.qZA(),t.TgZ(41,"label",28),t._uU(42,"="),t.qZA(),t.TgZ(43,"input",29,30),t.NdJ("keydown.enter",function(){t.CHM(o);const l=t.MAs(51);return t.KtG(l.focus())}),t.qZA(),t.TgZ(45,"label",31),t._uU(46,"Point"),t.qZA()()()(),t.TgZ(47,"div",8),t._UZ(48,"div",32),t.TgZ(49,"div",33)(50,"button",34,35),t._uU(52,"Add"),t.qZA()()()()()()(),t.TgZ(53,"div",9)(54,"div",10)(55,"table",36)(56,"thead")(57,"tr",37)(58,"th",38),t._uU(59,"SNo."),t.qZA(),t.TgZ(60,"th",39),t._uU(61," Mem Category "),t.qZA(),t.TgZ(62,"th",39),t._uU(63," Item Category "),t.qZA(),t.TgZ(64,"th",40),t._uU(65," Value "),t.qZA(),t.TgZ(66,"th",40),t._uU(67," Point "),t.qZA(),t.TgZ(68,"th",39),t._uU(69," Action"),t.qZA()()(),t.TgZ(70,"tbody"),t.YNc(71,Y,14,5,"tr",41),t.qZA()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",i.pointForm),t.xp6(1),t.Q6J("disabled",!(i.pointMasterList.length>0)),t.xp6(12),t.Q6J("formGroup",i.pointForm),t.xp6(6),t.Q6J("ngForOf",i.MemCatList),t.xp6(8),t.Q6J("ngForOf",i.ItemCatList),t.xp6(6),t.Q6J("readOnly","view"==i.mode),t.xp6(4),t.Q6J("readOnly","view"==i.mode),t.xp6(7),t.Q6J("disabled",!i.pointForm.valid),t.xp6(21),t.Q6J("ngForOf",i.pointMasterList))},dependencies:[m.sg,c.rH,p._Y,p.YN,p.Kr,p.Fj,p.wV,p.EJ,p.JJ,p.JL,p.sg,p.u],styles:[".card[_ngcontent-%COMP%]{margin:30px 30px 0!important;width:100%}tbody[_ngcontent-%COMP%]{display:block;max-height:250px;overflow-y:auto}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}"]}),n})()}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(G),c.Bz]}),n})();var M=a(12640);const J={suppressScrollX:!1};let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[v,{provide:M.op,useValue:J}],imports:[m.ez,N,f.m,C.JX,M.Xd]}),n})()}}]);