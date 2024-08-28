"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[6808],{76808:(I,g,s)=>{s.r(g),s.d(g,{AreaMasterModule:()=>J});var v=s(46543),m=s(92752),e=s(66274),u=s(48083),A=s(67311),f=s(79765),_=s(76165),b=s(67297),C=s(71180);let p=(()=>{class a{constructor(t,r,n){this.http=t,this.authService=r,this.state=n;const i=this.state.getGlobalSetting("apiUrl");i&&i.length>0&&(this.apiUrl=i)}postAreaGroup(t){const r={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(`${this.apiUrl}/saveAreaMaster`,t,r)}getAreaGroup(){return this.http.get(this.apiUrl+"/getAreaMasterList")}getAreaForEdit(t){let r={status:"error",result:""},n=new f.xQ,i={mode:"query",data:{AREA_NAME:t}};const l={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/getAreaMaster",i,l).subscribe(d=>{n.next(d),n.unsubscribe()},d=>{r.status="error",r.result=d,n.next(r),n.unsubscribe()}),n}deleteArea(t){let r={status:"error",result:""},n=new f.xQ,i={mode:"query",data:{AREA_ID:t}};const l={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/deleteAreaMaster",i,l).subscribe(d=>{n.next(d),n.unsubscribe()},d=>{r.status="error",r.result=d,n.next(r),n.unsubscribe()}),n}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(_.eN),e.LFG(b.e),e.LFG(C.q))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var c=s(7587),h=s(72533);let E=(()=>{class a{transform(t,r){if(t)return r?t.filter(n=>{const i=r.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(n.AREA_NAME?n.AREA_NAME.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(i))return n}):t}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=e.Yjl({name:"searchData",type:a,pure:!1}),a})();function S(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td",22),e._uU(4),e.qZA(),e.TgZ(5,"td",22),e._uU(6),e.qZA(),e.TgZ(7,"td",22),e._uU(8),e.qZA(),e.TgZ(9,"td",23)(10,"a",24),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.onEditClicked(i))}),e._uU(11,"Edit"),e.qZA(),e.TgZ(12,"button",25),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.deleteArea(i))}),e._uU(13,"Delete"),e.qZA()()()}if(2&a){const t=o.$implicit,r=o.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Oqu(t.AREA_NAME),e.xp6(2),e.Oqu(t.AREASNAME),e.xp6(2),e.Oqu(t.AREA_CODE)}}const x=function(a,o,t){return{itemsPerPage:a,currentPage:o,totalItems:t}};function y(a,o){if(1&a&&(e.ynx(0),e.YNc(1,S,14,4,"tr",20),e.ALo(2,"paginate"),e.ALo(3,"searchData"),e.BQk()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.xi3(3,4,t.areaLists,t.filter),e.kEZ(7,x,t.itemsPerPage,t.currentPage,t.totalCount)))}}function Z(a,o){1&a&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",26)(3,"div",27),e._uU(4,"Area Master Lists are unavailable."),e.qZA()()(),e.BQk())}function O(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"pagination-controls",30),e.NdJ("pageChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.areaPagination(n))}),e.qZA()()()}}let w=(()=>{class a{constructor(t,r,n){this.router=t,this.alertService=r,this.areaMasterService=n,this.isLoader=!0,this.currentPage=1,this.limit=20,this.itemsPerPage=100,this.offset=0}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){this.areaMasterService.getAreaGroup().subscribe(t=>{"ok"==t.status?(this.isLoader=!1,this.areaLists=t.result?t.result:[]):(this.areaLists=[],this.errorMessage="Something went wrong.")},t=>{this.isLoader=!1,this.areaLists=[],this.errorMessage="Something went wrong."})}areaPagination(t){this.isLoader=!0,this.currentPage=t;const r=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{r.isLoader=!1},500)}onEditClicked(t){try{this.router.navigate(["./pages/masters/area-master/add-area-master",{name:t.AREA_NAME,mode:"edit",returnUrl:this.router.url}])}catch(r){this.alertService.info(r)}}onViewClicked(t){try{this.router.navigate(["./pages/masters/area-master/add-area-master",{name:t.AREA_NAME,mode:"view",returnUrl:this.router.url}])}catch(r){this.alertService.info(r)}}addAreaMaster(){try{this.router.navigate(["./pages/masters/area-master/add-area-master",{mode:"add",returnUrl:this.router.url}])}catch(t){this.alertService.info(t)}}deleteArea(t){confirm("Are you sure you want to delete "+t.AREA_NAME+" ?")&&this.areaMasterService.deleteArea(t.AREA_ID).subscribe(r=>{"ok"==r.status?(this.alertService.info(r.result),this.areaMasterService.getAreaGroup().subscribe(n=>{"ok"==n.status?(this.isLoader=!1,this.areaLists=n.result?n.result:[]):(this.areaLists=[],this.errorMessage="Something went wrong.")})):this.alertService.info(r.result.error)},r=>{this.alertService.info(r.error)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.F0),e.Y36(A.c),e.Y36(p))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-area-master-list"]],hostBindings:function(t,r){1&t&&e.NdJ("keydown",function(i){return r.updown(i)},!1,e.evT)},decls:36,vars:7,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter",1,"form-control",2,"height","1.5rem",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","5%"],["scope","col",2,"width","15%"],["scopr","col",2,"width","15%"],["scope","col",2,"text-align","center","width","20%"],[4,"ngIf"],["class","pagination",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","5%"],[2,"width","15%"],[2,"text-align","center","width","20%"],[1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","btn-sm",2,"width","60px",3,"click"],["colspan","4"],[1,"font-weight-bold"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"pageChange"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Area Master"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return r.addAreaMaster()}),e._uU(8,"Add Area Master"),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"span"),e._uU(14,"Area Master Lists"),e.qZA(),e.TgZ(15,"div",9)(16,"input",10),e.NdJ("ngModelChange",function(i){return r.filter=i}),e.qZA()()(),e.TgZ(17,"div",11)(18,"table",12)(19,"thead")(20,"tr",13)(21,"th",14),e._uU(22,"S.N."),e.qZA(),e.TgZ(23,"th",15),e._uU(24,"Area Name"),e.qZA(),e.TgZ(25,"th",16),e._uU(26,"Short Name"),e.qZA(),e.TgZ(27,"th",15),e._uU(28,"Area Code"),e.qZA(),e.TgZ(29,"th",17),e._uU(30,"Action"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,y,4,11,"ng-container",18),e.YNc(33,Z,5,0,"ng-container",18),e.ALo(34,"searchData"),e.qZA()(),e.YNc(35,O,3,0,"div",19),e.qZA()()()()),2&t&&(e.xp6(16),e.Q6J("ngModel",r.filter),e.xp6(16),e.Q6J("ngIf",r.areaLists&&r.areaLists.length>0),e.xp6(1),e.Q6J("ngIf",r.areaLists&&0===e.xi3(34,4,r.areaLists,r.filter).length),e.xp6(2),e.Q6J("ngIf",r.areaLists&&r.areaLists.length>r.itemsPerPage))},dependencies:[m.sg,m.O5,u.rH,c.Fj,c.JJ,c.On,h.LS,h._s,E],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),a})();var N=s(14970),T=s(53074);const F=["areaName"];function R(a,o){1&a&&(e.TgZ(0,"small",25),e._uU(1," Area Name is required ! "),e.qZA())}function L(a,o){1&a&&(e.TgZ(0,"small",25),e._uU(1," Short Name is required ! "),e.qZA())}function P(a,o){1&a&&(e.TgZ(0,"small",25),e._uU(1," Area Code is required ! "),e.qZA())}const U=[{path:"",component:w},{path:"add-area-master",component:(()=>{class a{constructor(t,r,n,i,l,d,D){this.fb=t,this.spinnerService=r,this.alertService=n,this.areaMasterService=i,this.router=l,this.masterService=d,this._activatedRoute=D,this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1,this.areaMasterList=[],this.areaObj={}}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/masters/area-master"])),"F6"===t.code&&(t.preventDefault(),this.onSubmit())}ngOnInit(){try{if(this.areaForm=this.fb.group({AREANAME:["",[c.kI.required]],SNAME:["",[c.kI.required]],AREACODE:["",[c.kI.required]]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.areaForm.get("AREANAME").disable(),this.areaForm.get("SNAME").disable(),this.areaForm.get("AREACODE").disable()),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.name){let t="";t=this._activatedRoute.snapshot.params.name,this.spinnerService.show("Getting data, Please wait..."),this.areaMasterService.getAreaForEdit(t).subscribe(r=>{"ok"===r.status?(this.spinnerService.hide(),this.areaForm.patchValue({AREANAME:r.result.AREA_NAME,SNAME:r.result.AREASNAME,AREACODE:r.result.AREA_CODE}),this.areaID=r.result.AREA_ID,"edit"===this._activatedRoute.snapshot.params.mode?this.modeTitle="Edit Area Master":"view"===this._activatedRoute.snapshot.params.mode&&(this.modeTitle="View Area Master"),this.mode="edit",this.initialTextReadOnly=!0):this.alertService.info(r.result)},r=>{this.spinnerService.hide(),this.alertService.info(r._body)})}else this.mode="add",this.modeTitle="Add Area Master",this.initialTextReadOnly=!1}catch(t){this.alertService.info(t)}}ngAfterViewInit(){setTimeout(()=>this.areaNameEl.nativeElement.focus())}onSubmit(){this.areaObj.AREA_NAME=this.areaForm.value.AREANAME,this.areaObj.AREA_CODE=this.areaForm.value.AREACODE,this.areaObj.AREASNAME=this.areaForm.value.SNAME,"edit"==this.mode&&(this.areaObj.AREA_ID=this.areaID);let t=Object.assign(this.areaObj,{},this.areaForm.value);const r={mode:this.mode,data:t};this.spinnerService.show("Data is Saving ..."),this.areaMasterService.postAreaGroup(r).subscribe(n=>{"ok"==n.status?(this.spinnerService.hide(),this.alertService.info(n.result),this.areaForm.reset(),this.router.navigate(["./pages/masters/area-master"])):(this.spinnerService.hide(),this.alertService.info(n.result))},n=>{this.spinnerService.hide()})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.qu),e.Y36(N.V),e.Y36(A.c),e.Y36(p),e.Y36(u.F0),e.Y36(T.P),e.Y36(u.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-area-master-form"]],viewQuery:function(t,r){if(1&t&&e.Gf(F,5),2&t){let n;e.iGM(n=e.CRH())&&(r.areaNameEl=n.first)}},hostBindings:function(t,r){1&t&&e.NdJ("keydown",function(i){return r.updown(i)},!1,e.evT)},decls:39,vars:9,consts:[[1,"sticky-top","row"],[1,"col-md-4"],[1,"col-md-8"],[1,"row","pull-right","mx-2"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/area-master","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-2","form-control-label"],[1,"col-sm-8"],["type","text","id","areaName","placeholder","Enter name","formControlName","AREANAME","autocomplete","off",1,"form-control",2,"height","4vh","font-size","13px",3,"readOnly","keydown.enter"],["areaName",""],["style","margin-left: 12vw; margin-top: -1rem;","class","form-text text-danger",4,"ngIf"],[1,"col-sm-4"],["type","text","id","sName","placeholder","Enter short name","autocomplete","off","formControlName","SNAME",1,"form-control",2,"height","4vh","font-size","13px",3,"readOnly","keydown.enter"],["sName",""],["style","margin-left: 12vw; margin-top: -1rem;","class","form-text text-danger ",4,"ngIf"],["type","text","id","areaCode","placeholder","Enter area code","autocomplete","off","formControlName","AREACODE",1,"form-control",2,"height","4vh","font-size","13px",3,"readOnly"],["areaCode",""],[1,"form-text","text-danger",2,"margin-left","12vw","margin-top","-1rem"]],template:function(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Area Master "),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3)(6,"form",4),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(7,"button",5,6),e._uU(9,"Save"),e.qZA(),e.TgZ(10,"button",7),e._uU(11,"Back"),e.qZA()()()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"h5",10),e._uU(15,"New Area Master"),e.qZA()(),e.TgZ(16,"div",11)(17,"form",12),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(18,"div",13)(19,"label",14),e._uU(20,"Area Name:"),e.qZA(),e.TgZ(21,"div",15)(22,"input",16,17),e.NdJ("keydown.enter",function(){e.CHM(n);const l=e.MAs(30);return e.KtG(l.focus())}),e.qZA()()(),e.YNc(24,R,2,0,"small",18),e.TgZ(25,"div",13)(26,"label",14),e._uU(27,"Short Name:"),e.qZA(),e.TgZ(28,"div",19)(29,"input",20,21),e.NdJ("keydown.enter",function(){e.CHM(n);const l=e.MAs(37);return e.KtG(l.focus())}),e.qZA()()(),e.YNc(31,L,2,0,"small",22),e.TgZ(32,"div",13)(33,"label",14),e._uU(34,"Area Code:"),e.qZA(),e.TgZ(35,"div",19),e._UZ(36,"input",23,24),e.qZA()(),e.YNc(38,P,2,0,"small",18),e.qZA()()()}2&t&&(e.xp6(6),e.Q6J("formGroup",r.areaForm),e.xp6(1),e.Q6J("disabled",!r.areaForm.valid),e.xp6(10),e.Q6J("formGroup",r.areaForm),e.xp6(5),e.Q6J("readOnly","view"==r.mode),e.xp6(2),e.Q6J("ngIf",r.areaForm.controls.AREANAME.touched&&(null==r.areaForm.controls.AREANAME.errors?null:r.areaForm.controls.AREANAME.errors.required)),e.xp6(5),e.Q6J("readOnly","view"==r.mode),e.xp6(2),e.Q6J("ngIf",r.areaForm.controls.SNAME.touched&&(null==r.areaForm.controls.SNAME.errors?null:r.areaForm.controls.SNAME.errors.required)),e.xp6(5),e.Q6J("readOnly","view"==r.mode),e.xp6(2),e.Q6J("ngIf",r.areaForm.controls.AREACODE.touched&&(null==r.areaForm.controls.AREACODE.errors?null:r.areaForm.controls.AREACODE.errors.required)))},dependencies:[m.O5,u.rH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:[".card[_ngcontent-%COMP%]{margin:36px 30px 0 300px!important;width:60%}label[_ngcontent-%COMP%]{font-size:13px}"]}),a})()}];let q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.Bz.forChild(U),u.Bz]}),a})();var M=s(12640);const k={suppressScrollX:!1};let J=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[p,{provide:M.op,useValue:k}],imports:[m.ez,q,v.m,h.JX,M.Xd]}),a})()}}]);