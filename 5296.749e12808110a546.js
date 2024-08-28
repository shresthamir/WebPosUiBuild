"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[5296],{62106:(U,h,r)=>{r.d(h,{A:()=>t});var f=r(46543),m=r(66274);let t=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[f.m]}),l})()},49137:(U,h,r)=>{r.d(h,{C:()=>m});var f=r(66274);let m=(()=>{class t{transform(d,p,c){if(d)return p?d.filter(g=>{let _=g[c];const v=p.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(_?_.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(v))return g}):d}}return t.\u0275fac=function(d){return new(d||t)},t.\u0275pipe=f.Yjl({name:"searchData",type:t,pure:!1}),t})()},15296:(U,h,r)=>{r.r(h),r.d(h,{UnitModule:()=>N});var f=r(46543),m=r(92752),t=r(66274),l=r(48083),d=r(67311),p=r(79829),c=r(7587),g=r(72533),_=r(49137);function v(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",21),t._uU(2),t.qZA(),t.TgZ(3,"td",22),t._uU(4),t.qZA(),t.TgZ(5,"td",23)(6,"a",24),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onEditClicked(a))}),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.deleteUnit(a))}),t._uU(9,"Delete"),t.qZA()()()}if(2&i){const e=s.$implicit,n=s.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.UNITS)}}const C=function(i,s,e){return{itemsPerPage:i,currentPage:s,totalItems:e}};function T(i,s){if(1&i&&(t.ynx(0),t.YNc(1,v,10,2,"tr",20),t.ALo(2,"paginate"),t.ALo(3,"searchData"),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.unitLists,e.filter,"UNITS"),t.kEZ(8,C,e.itemsPerPage,e.currentPage,e.totalCount)))}}function S(i,s){1&i&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",26)(3,"div",27),t._uU(4,"Unit Lists are unavailable."),t.qZA()()(),t.BQk())}function M(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"pagination-controls",31),t.NdJ("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.unitPagination(o))}),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("directionLinks",e.directionLinks)}}let y=(()=>{class i{constructor(e,n,o){this.router=e,this.alertService=n,this.unitMasterService=o,this.isLoader=!0,this.currentPage=1,this.itemsPerPage=100,this.directionLinks=!0}updown(e){"Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){this.unitMasterService.getUnitGroup().subscribe(e=>{e?(this.isLoader=!1,this.unitLists=e||[]):(this.unitLists=[],this.errorMessage="Something is wrong")},e=>{this.isLoader=!1,this.unitLists=[],this.errorMessage="Something is wrong"})}onEditClicked(e){try{this.router.navigate(["./pages/masters/unit/add-unit",{name:e.UNITS,mode:"edit",returnUrl:this.router.url}])}catch(n){this.alertService.error(n)}}onViewClicked(e){try{this.router.navigate(["./pages/masters/unit/add-unit",{name:e.UNITS,mode:"view",returnUrl:this.router.url}])}catch(n){this.alertService.error(n)}}addUnit(){try{this.router.navigate(["./pages/masters/unit/add-unit",{mode:"add",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}deleteUnit(e){confirm("Are you sure you want to delete "+e.UNITS+" ?")&&this.unitMasterService.deleteUnit(e.UNITS,e.StopDecimal).subscribe(n=>{"ok"==n.status?(this.alertService.info(n.result),this.unitMasterService.getUnitGroup().subscribe(o=>{o?(this.isLoader=!1,this.unitLists=o||[]):(this.unitLists=[],this.errorMessage="Something is wrong")})):this.alertService.error(n.result.error)},n=>{this.alertService.error(n.error)})}unitPagination(e){this.isLoader=!0,this.currentPage=e;const n=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n.isLoader=!1},500)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.F0),t.Y36(d.c),t.Y36(p.P))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-unit-list"]],hostBindings:function(e,n){1&e&&t.NdJ("keydown",function(a){return n.updown(a)},!1,t.evT)},decls:33,vars:12,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[2,"white-space","nowrap","margin-left","-30px","margin-bottom","8px","font-family","Segoe UI Light","font-weight","bold","font-size","20px","padding-left","4%","width","192px"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","autocomplete","off","name","filter",1,"form-control",2,"height","1.5rem",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","5%"],["scope","col",2,"width","70%"],["scope","col",2,"text-align","center","width","20%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","5%"],[2,"width","70%"],[2,"text-align","center","width","20%"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"click"],["colspan","3"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"UNIT MASTER"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.addUnit()}),t._uU(8,"Add Unit"),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"span"),t._uU(14,"Unit Lists"),t.qZA(),t.TgZ(15,"div",10)(16,"input",11),t.NdJ("ngModelChange",function(a){return n.filter=a}),t.qZA()()(),t.TgZ(17,"div",12)(18,"table",13)(19,"thead")(20,"tr",14)(21,"th",15),t._uU(22,"S.N."),t.qZA(),t.TgZ(23,"th",16),t._uU(24,"Unit Name"),t.qZA(),t.TgZ(25,"th",17),t._uU(26,"Action"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,T,4,12,"ng-container",18),t.YNc(29,S,5,0,"ng-container",18),t.ALo(30,"searchData"),t.qZA()(),t.YNc(31,M,4,1,"div",19),t.ALo(32,"searchData"),t.qZA()()()()),2&e&&(t.xp6(16),t.Q6J("ngModel",n.filter),t.xp6(12),t.Q6J("ngIf",n.unitLists&&n.unitLists.length>0),t.xp6(1),t.Q6J("ngIf",n.unitLists&&0===t.Dn7(30,4,n.unitLists,n.filter,"UNITS").length),t.xp6(2),t.Q6J("ngIf",n.unitLists&&t.Dn7(32,8,n.unitLists,n.filter,"UNITS").length>n.itemsPerPage))},dependencies:[m.sg,m.O5,l.rH,c.Fj,c.JJ,c.On,g.LS,g._s,_.C],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:465px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:60vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),i})();var x=r(14970),P=r(53074);const w=["unitNameEl"];function L(i,s){1&i&&(t.TgZ(0,"small",22),t._uU(1," Unit name is required! "),t.qZA())}const O=[{path:"",component:y},{path:"add-unit",component:(()=>{class i{constructor(e,n,o,a,u,k,E){this.fb=e,this.spinnerService=n,this.alertService=o,this.unitMasterService=a,this.router=u,this.masterService=k,this._activatedRoute=E,this.unitList=[],this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1}updown(e){if("Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/masters/unit"])),"F6"===e.code){if(e.preventDefault(),!this.unitForm.valid)return;this.onSubmit()}}ngOnInit(){try{if(this.unitForm=this.fb.group({unitName:["",[c.kI.required]],notDecimal:[0]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.unitForm.get("unitName").disable(),this.unitForm.get("notDecimal").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.name){let e="";e=this._activatedRoute.snapshot.params.name,this.spinnerService.show("Getting data, Please wait..."),this.unitMasterService.getUnitForEdit(e).subscribe(n=>{"ok"===n.status?(this.spinnerService.hide(),this.unitForm.patchValue({unitName:n.result.UNITS,notDecimal:n.result.StopDecimal}),this.unitBeforeEdit=n.result.UNITS,"edit"===this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Unit Master":"view"===this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Unit Master"),this.mode="edit",this.initialTextReadOnly=!0):(console.log("UNIT MASTER RROT",n),this.spinnerService.hide(),this.alertService.error(n.result.error),this.router.navigate(["./pages/masters/unit"]))},n=>{this.spinnerService.hide(),this.alertService.error(n._body)})}else this.mode="add",this.modeTitle="Add Unit Master",this.initialTextReadOnly=!1}catch(e){this.alertService.error(e)}}ngAfterViewInit(){setTimeout(()=>this.unitNameEl.nativeElement.focus())}onSubmit(){let e={};e.UNITS=this.unitForm.value.unitName,e.STOPDECIMAL=this.unitForm.value.notDecimal,"edit"==this.mode&&(e.unitBeforeEdit=this.unitBeforeEdit);const n={mode:this.mode,data:e};this.spinnerService.show("Data is Saving ..."),this.unitMasterService.postUnitGroup(n).subscribe(o=>{"ok"==o.status?(this.spinnerService.hide(),this.alertService.info("Saved Successfully"),this.unitForm.reset(),this.router.navigate(["./pages/masters/unit"])):(this.spinnerService.hide(),this.alertService.error(o.result))},o=>{this.spinnerService.hide(),this.alertService.error(o.error.result)})}onChange(e){console.log("EVENT",e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.qu),t.Y36(x.V),t.Y36(d.c),t.Y36(p.P),t.Y36(l.F0),t.Y36(P.P),t.Y36(l.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-unit-form"]],viewQuery:function(e,n){if(1&e&&t.Gf(w,5),2&e){let o;t.iGM(o=t.CRH())&&(n.unitNameEl=o.first)}},hostBindings:function(e,n){1&e&&t.NdJ("keydown",function(a){return n.updown(a)},!1,t.evT)},decls:30,vars:7,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/unit","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-2","form-control-label",2,"margin-left","-12px"],[1,"col-sm-8"],["type","text","id","Parent","placeholder","Enter unit name","formControlName","unitName","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"readOnly","keydown.enter","change"],["unitNameEl",""],["style","margin-left: 12vw;","class","form-text text-danger ",4,"ngIf"],[1,"col-sm-2","form-control-label","check",2,"margin-left","-12px"],[1,"col-sm-5"],["type","checkbox","id","Parent","formControlName","notDecimal",1,"form-control",3,"readOnly","change"],[1,"form-text","text-danger",2,"margin-left","12vw"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Unit Master"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(7,"button",5,6),t._uU(9,"Save"),t.qZA(),t.TgZ(10,"button",7),t._uU(11,"Back"),t.qZA()()()()(),t.TgZ(12,"div",8)(13,"div",9)(14,"h5",10),t._uU(15),t.qZA()(),t.TgZ(16,"div",11)(17,"form",12),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(18,"div",13)(19,"label",14),t._uU(20,"Unit Name:"),t.qZA(),t.TgZ(21,"div",15)(22,"input",16,17),t.NdJ("keydown.enter",function(){t.CHM(o);const u=t.MAs(8);return t.KtG(u.focus())})("change",function(u){return n.onChange(u)}),t.qZA()()(),t.YNc(24,L,2,0,"small",18),t.TgZ(25,"div",13)(26,"label",19),t._uU(27,"No Decimal:"),t.qZA(),t.TgZ(28,"div",20)(29,"input",21),t.NdJ("change",function(u){return n.unitForm.value.notDecimal=u.target.checked?1:0}),t.qZA()()()()()()}2&e&&(t.xp6(6),t.Q6J("formGroup",n.unitForm),t.xp6(1),t.Q6J("disabled",!n.unitForm.valid),t.xp6(8),t.Oqu(n.modeTitle),t.xp6(2),t.Q6J("formGroup",n.unitForm),t.xp6(5),t.Q6J("readOnly","view"==n.mode),t.xp6(2),t.Q6J("ngIf",n.unitForm.controls.unitName.touched&&(null==n.unitForm.controls.unitName.errors?null:n.unitForm.controls.unitName.errors.required)),t.xp6(5),t.Q6J("readOnly","view"==n.mode))},dependencies:[m.O5,l.rH,c._Y,c.Fj,c.Wl,c.JJ,c.JL,c.sg,c.u],styles:[".card[_ngcontent-%COMP%]{margin:36px 30px 0 300px!important;width:60%}input[type=checkbox][_ngcontent-%COMP%]{height:20px;position:absolute;right:42%}.check[_ngcontent-%COMP%]{position:relative}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.Bz.forChild(O),l.Bz]}),i})();var b=r(12640),F=r(62106);const A={suppressScrollX:!1};let N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[p.P,{provide:b.op,useValue:A}],imports:[m.ez,Z,f.m,g.JX,b.Xd,F.A]}),i})()}}]);