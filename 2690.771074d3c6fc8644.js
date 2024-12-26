"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[2690],{42690:(P,m,a)=>{a.r(m),a.d(m,{TransporterModule:()=>O});var d=a(7976),p=a(64298),e=a(64537),v=a(67311);const f=["genericGrid"];let g=(()=>{class n{constructor(t,o){this.router=t,this.alertService=o,this.imsGridSettings=new p.U5,this.imsGridSettings={title:"Transporter",apiEndpoints:"/getAllTransporterPagedList",pageSize:10,showActionButton:!0,columns:[{key:"NAME",title:"Name",hidden:!1,noSearch:!1,type:"string"},{key:"ADDRESS",title:"Address",hidden:!1,noSearch:!1,type:"string"},{key:"EMAIL",title:"Email",hidden:!1,noSearch:!1,type:"string"},{key:"PHONE",title:"Phone",hidden:!1,noSearch:!1,type:"string"},{key:"PANNO",title:"PAN No",hidden:!1,noSearch:!1,type:"string"},{key:"STATUS",title:"Status",hidden:!1,noSearch:!1,type:"list",valuePrepareFunction:r=>1==r?"Active":"Inactive",filter:{list:[{value:1,title:"Active"},{value:0,title:"Inactive"}]}},{key:"TRANSMODE",title:"Transport Mode",hidden:!1,noSearch:!1,type:"list",valuePrepareFunction:r=>{switch(r){case 1:return"Road";case 2:return"Rail";case 3:return"Air";case 4:return"Ship"}},filter:{list:[{value:1,title:"Road"},{value:2,title:"Rail"},{value:3,title:"Air"},{value:4,title:"Ship"}]}}],actionKeys:[{text:"Edit",title:"Edit",type:p.Dw.EDIT}]}}addNewTransport(){this.router.navigate(["pages/masters/utility/transporter/add-transporter",{mode:"add",returnUrl:this.router.url}])}onEditClick(t){this.router.navigate(["pages/masters/utility/transporter/add-transporter",{transporterId:t.data.TRANSPORTERID,mode:"edit",returnUrl:this.router.url}])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(v.c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["transporter-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(f,5),2&t){let r;e.iGM(r=e.CRH())&&(o.genericGrid=r.first)}},decls:9,vars:1,consts:[[1,"row","sticky-top"],[1,"col-md-4"],[1,"col-md-8"],[1,"btn","btn-info","pull-right",3,"click"],[3,"popupsettings","onEditClicked"],["genericGrid",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Transporter Master"),e.qZA()(),e.TgZ(4,"div",2)(5,"button",3),e.NdJ("click",function(){return o.addNewTransport()}),e._uU(6,"New Transporter"),e.qZA()()(),e.TgZ(7,"ims-grid",4,5),e.NdJ("onEditClicked",function(s){return o.onEditClick(s)}),e.qZA()),2&t&&(e.xp6(7),e.Q6J("popupsettings",o.imsGridSettings))},dependencies:[p.JF],encapsulation:2}),n})();var c=a(20092),A=a(248),N=a(14970),S=a(53074),h=a(67297),_=a(79765),y=a(92340),E=a(35732),b=a(71180);let T=(()=>{class n{constructor(t,o,r,s){this.http=t,this.activatedRoute=o,this.authService=r,this.state=s}get apiUrl(){let t=y.N.apiUrl,o="";return!!t&&t.length>0&&(o=t[0]),o}getTransporter(t){let o={status:"error",result:""},r=new _.xQ;return this.http.post(this.apiUrl+"/getTransporter",{mode:"query",data:{TRANSPORTERID:t}}).subscribe(i=>{r.next(i),r.unsubscribe()},i=>{o.status="error",o.result=i,r.next(o),r.unsubscribe()}),r}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(E.eN),e.LFG(d.gz),e.LFG(h.e),e.LFG(b.q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var Z=a(88692);function C(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onSave())}),e._uU(1," Save "),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.form.valid)}}function M(n,l){1&n&&(e.TgZ(0,"span"),e._uU(1," Transporter name is required. "),e.qZA())}function k(n,l){if(1&n&&(e.TgZ(0,"div",53),e.YNc(1,M,2,0,"span",54),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form.get("NAME").hasError("required"))}}const R=[{path:"",component:g},{path:"add-transporter",component:(()=>{class n{constructor(t,o,r,s,i,u,I,G,D){this.preventNavigationService=t,this.alertService=o,this.loadingService=r,this.masterService=s,this.router=i,this.authService=u,this._activatedRoute=I,this.fb=G,this.service=D,this.viewMode=!1,this.mode="add",this.modeTitle="",this.subcriptions=[]}ngOnInit(){let t=this.authService.getAuth();try{this.form=this.fb.group({NAME:["",[c.kI.required]],PHONE:[""],COMPANYID:[t.profile.CompanyInfo.COMPANYID],TRANSMODE:[1],ADDRESS:[""],AREA:[""],EMAIL:[""],GSTNO:[""],PANNO:[""],STATUS:[1],TRANSPORTERID:[""],VEHICLENO:[""]}),this.onFormChanges(),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),"add"===this._activatedRoute.snapshot.params.mode?(this.mode="add",this.modeTitle="Add Transporter"):"edit"===this._activatedRoute.snapshot.params.mode&&(this.mode="edit",this.modeTitle="Edit Transporter",this.loadingService.show("Getting data, Please wait..."),this.service.getTransporter(this._activatedRoute.snapshot.params.transporterId).subscribe(r=>{this.loadingService.hide(),"ok"==r.status&&this.form.patchValue({NAME:r.result.NAME,ADDRESS:r.result.ADDRESS,PHONE:r.result.PHONE,COMPANYID:r.result.COMPANYID,TRANSMODE:r.result.TRANSMODE,AREA:r.result.AREA,STATUS:r.result.STATUS,VEHICLENO:r.result.VEHICLENO,GSTNO:r.result.GSTNO,PANNO:r.result.PANNO,EMAIL:r.result.EMAIL,TRANSPORTERID:r.result.TRANSPORTERID})},r=>{this.alertService.error(r)}))}catch(o){this.alertService.error(o)}}onFormChanges(){this.form.valueChanges.subscribe(t=>{this.form.dirty&&this.preventNavigationService.preventNavigation(!0)})}cancel(){try{this.router.navigate([this.returnUrl])}catch(t){this.alertService.error(t)}}ngOnDestroy(){try{this.subcriptions.forEach(t=>{t.unsubscribe()})}catch(t){this.alertService.error(t)}}onSave(){try{if(!this.form.valid)return void this.alertService.info("Invalid Request, Please enter all required fields.");this.onsubmit()}catch(t){this.alertService.error(t)}}onsubmit(){try{let t=Object.assign({},this.form.value);this.loadingService.show("Saving data, please wait...");let r=this.masterService.masterPostmethod("/saveTransporter",{mode:this.mode,data:t}).subscribe(s=>{this.loadingService.hide(),"ok"==s.status?(this.alertService.success("Data Saved Successfully"),this.preventNavigationService.preventNavigation(!1),setTimeout(()=>{this.router.navigate([this.returnUrl])},1e3)):this.alertService.error(`Error in Saving Data: ${s.result._body}`)},s=>{this.loadingService.hide(),this.alertService.error(s)});this.subcriptions.push(r)}catch(t){this.alertService.error(t)}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.d),e.Y36(v.c),e.Y36(N.V),e.Y36(S.P),e.Y36(d.F0),e.Y36(h.e),e.Y36(d.gz),e.Y36(c.qu),e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-transporter"]],decls:104,vars:4,consts:[[1,"sticky-top"],[1,"row","pd0"],[1,"col-md-6"],[1,"page-title"],[1,"col-md-6",2,"float","right"],["type","button ",1,"btn","btn-info","pull-right",2,"margin-right","10px",3,"click"],["class","btn btn-info pull-right","style","margin-right : 10px;",3,"disabled","click",4,"ngIf"],[1,"main-container"],[1,"row"],[1,"col-md-12","pd0"],["id","warehouse-tabs",1,"tabbable"],[1,"nav","nav-tabs"],[1,"nav-item",3,"click"],["href","#general-info","data-toggle","tab",1,"nav-link","active"],["generalInfo",""],["href","#gst","data-toggle","tab",1,"nav-link"],["gst",""],[1,"row",3,"formGroup"],[1,"tab-content","mr5",2,"width","100%"],["id","general-info",1,"tab-pane","active"],[1,"row","col-md-12","pd0"],[1,"col-md-6","pd0"],[1,"form-group","row"],[1,"col-md-3","form-control-label"],[1,"col-md-8"],["type","text","id","NAME","name","NAME","formControlName","NAME","placeholder","Enter Transporter Name",1,"form-control",2,"color","black",3,"keydown.enter"],["NAME",""],["class","text-danger",4,"ngIf"],["type","text","formControlName","ADDRESS","placeholder","Enter Address Line 1",1,"form-control",2,"color","black",3,"keydown.enter"],["ADDRESS",""],["type","text","formControlName","PHONE","placeholder","Enter Phone Number",1,"form-control",2,"color","black",3,"keydown.enter"],["PHONE",""],["formControlName","STATUS",1,"form-control",3,"keydown.enter"],["STATUS",""],["value","0"],["value","1"],["formControlName","TRANSMODE",1,"form-control",3,"keydown.enter"],["TRANSMODE",""],["value","2"],["value","3"],["value","4"],["type","text","formControlName","AREA","placeholder","Enter Area Name",1,"form-control",2,"color","black",3,"keydown.enter"],["AREA",""],[1,"col-md-3"],["type","email","id","brandTypeName","name","brandTypeName","formControlName","VEHICLENO","placeholder","Enter VehicleNo",1,"form-control",2,"color","black"],["type","email","id","brandTypeName","name","brandTypeName","formControlName","EMAIL","placeholder","Enter Email",1,"form-control",2,"color","black",3,"keydown.enter"],["EMAIL",""],["id","gst",1,"tab-pane"],["type","text","formControlName","GSTNO","placeholder","Enter GST Number",1,"form-control",2,"color","black",3,"keydown.enter"],["GSTNO",""],["type","text","formControlName","PANNO","placeholder","Enter the PAN Number",1,"form-control",2,"color","black",3,"keydown.enter"],["PANNO",""],[1,"btn","btn-info","pull-right",2,"margin-right","10px",3,"disabled","click"],[1,"text-danger"],[4,"ngIf"]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),e._uU(4),e.qZA()(),e.TgZ(5,"div",4)(6,"button",5),e.NdJ("click",function(){return o.cancel()}),e._uU(7," Back "),e.qZA(),e.YNc(8,C,2,1,"button",6),e.qZA()()(),e.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"ul",11)(14,"li",12),e.NdJ("click",function(){e.CHM(r);const i=e.MAs(32);return e.KtG(i.focus())}),e.TgZ(15,"a",13,14),e._uU(17,"General "),e.qZA()(),e.TgZ(18,"li",12),e.NdJ("click",function(){e.CHM(r);const i=e.MAs(96);return e.KtG(i.focus())}),e.TgZ(19,"a",15,16),e._uU(21,"GST"),e.qZA()()(),e.TgZ(22,"form",17)(23,"div",18)(24,"div",19)(25,"div",20)(26,"div",21)(27,"div",22)(28,"label",23),e._uU(29,"Name"),e.qZA(),e.TgZ(30,"div",24)(31,"input",25,26),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(39);return e.KtG(i.focus())}),e.qZA(),e.YNc(33,k,2,1,"div",27),e.qZA()(),e.TgZ(34,"div",22)(35,"label",23),e._uU(36,"Address Line 1"),e.qZA(),e.TgZ(37,"div",24)(38,"input",28,29),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(45);return e.KtG(i.focus())}),e.qZA()()(),e.TgZ(40,"div",22)(41,"label",23),e._uU(42,"Phone"),e.qZA(),e.TgZ(43,"div",24)(44,"input",30,31),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(51);return e.KtG(i.focus())}),e.qZA()()(),e.TgZ(46,"div",22)(47,"label",23),e._uU(48,"Status"),e.qZA(),e.TgZ(49,"div",24)(50,"select",32,33),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(62);return e.KtG(i.focus())}),e.TgZ(52,"option",34),e._uU(53,"Inactive"),e.qZA(),e.TgZ(54,"option",35),e._uU(55,"Active"),e.qZA()()()()(),e.TgZ(56,"div",21)(57,"div",22)(58,"label",23),e._uU(59,"Trans Mode"),e.qZA(),e.TgZ(60,"div",24)(61,"select",36,37),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(76);return e.KtG(i.focus())}),e.TgZ(63,"option",35),e._uU(64,"Road"),e.qZA(),e.TgZ(65,"option",38),e._uU(66,"Rail"),e.qZA(),e.TgZ(67,"option",39),e._uU(68,"Air"),e.qZA(),e.TgZ(69,"option",40),e._uU(70,"Ship"),e.qZA()()()(),e.TgZ(71,"div",22)(72,"label",23),e._uU(73,"Area"),e.qZA(),e.TgZ(74,"div",24)(75,"input",41,42),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(87);return e.KtG(i.focus())}),e.qZA()()(),e.TgZ(77,"div",22)(78,"label",43),e._uU(79,"Vehicle No."),e.qZA(),e.TgZ(80,"div",24),e._UZ(81,"input",44),e.qZA()(),e.TgZ(82,"div",22)(83,"label",23),e._uU(84,"Email"),e.qZA(),e.TgZ(85,"div",24)(86,"input",45,46),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(20),u=e.MAs(96);return i.click(),e.KtG(u.focus())}),e.qZA()()()()()(),e.TgZ(88,"div",47)(89,"div",20)(90,"div",2)(91,"div",22)(92,"label",23),e._uU(93,"GST No"),e.qZA(),e.TgZ(94,"div",24)(95,"input",48,49),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(103);return e.KtG(i.focus())}),e.qZA()()()(),e.TgZ(97,"div",2)(98,"div",22)(99,"label",23),e._uU(100,"PAN No"),e.qZA(),e.TgZ(101,"div",24)(102,"input",50,51),e.NdJ("keydown.enter",function(){e.CHM(r);const i=e.MAs(16),u=e.MAs(32);return i.click(),e.KtG(u.focus())}),e.qZA()()()()()()()()()()()()}2&t&&(e.xp6(4),e.Oqu(o.modeTitle),e.xp6(4),e.Q6J("ngIf",0==o.viewMode),e.xp6(14),e.Q6J("formGroup",o.form),e.xp6(11),e.Q6J("ngIf",!o.form.controls.NAME.valid&&(null==o.form.controls.NAME?null:o.form.controls.NAME.touched)))},dependencies:[Z.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u],encapsulation:2}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(R),d.Bz]}),n})();var U=a(69401);let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[T],imports:[U.m,w]}),n})()}}]);