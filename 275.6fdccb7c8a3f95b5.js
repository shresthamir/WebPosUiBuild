"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[275],{77879:(O,C,r)=>{r.d(C,{H:()=>m});var p=r(36336),c=r(53074);let m=(()=>{class t{constructor(d){this.masterRepo=d}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return t.\u0275fac=function(d){return new(d||t)(p.Y36(c.P))},t.\u0275dir=p.lG2({type:t,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),t})()},275:(O,C,r)=>{r.r(C),r.d(C,{DepartmentVsCategoryModule:()=>D});var p=r(92752),c=r(63504),m=r(45365),t=r(36336);let _=(()=>{class n{constructor(){this.onResetClicked=()=>{this.DepartmentVsCategoryObj={},this.DepartmentVsCategoryObj.MODE="NEW",this.DepartmentVsCategoryObj.TITLE="DepartmentVsCategory",this.DepartmentVsCategoryObj.CATLIST=[],this.addNewRow(),this.DepartmentVsCategoryObj.SELECTEDINDEX=0},this.addNewRow=()=>{let e={};e.VARIANT=this.getLatestCategory(),console.log(e),this.DepartmentVsCategoryObj.CATLIST.push(e)},this.getLatestCategory=()=>{let e=[];return this.DepartmentVsCategoryObj.CATLIST.forEach(o=>{o.VARIANT&&e.push(parseFloat(o.VARIANT.split("_")[1]))}),e.length?`CATEGORY_${Math.max(...e)+1}`:"CATEGORY_1"},this.onResetClicked()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var d=r(53074),b=r(14970),M=r(67311),h=r(77879);function f(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr",15),t.NdJ("click",function(){const g=t.CHM(e).index,i=t.oxw();return t.KtG(i._departmentvsCategory.DepartmentVsCategoryObj.SELECTEDINDEX=g)}),t.TgZ(1,"td")(2,"input",16),t.NdJ("ngModelChange",function(a){const i=t.CHM(e).$implicit;return t.KtG(i.VARIANT=a)})("keydown",function(a){return a.preventDefault()}),t.qZA()(),t.TgZ(3,"td")(4,"input",17),t.NdJ("ngModelChange",function(a){const i=t.CHM(e).$implicit;return t.KtG(i.VARIANTNAME=a)})("keydown.enter",function(){const g=t.CHM(e).index,i=t.oxw();return t.KtG(i.onCategoryNameEnterClicked(g))}),t.qZA()()()}if(2&n){const e=s.$implicit,o=s.index;t.xp6(2),t.Q6J("ngModel",e.VARIANT),t.xp6(2),t.MGl("id","catname",o,""),t.Q6J("ngModel",e.VARIANTNAME)}}const u=[{path:"",component:(()=>{class n{constructor(e,o,a,g){this._departmentvsCategory=e,this._masterRepo=o,this._spinnerService=a,this._alertService=g,this.onCategoryNameEnterClicked=i=>{this._departmentvsCategory.DepartmentVsCategoryObj.CATLIST.some(l=>""==l.VARIANTNAME||null==l.VARIANTNAME||null==l.VARIANTNAME)||(this._departmentvsCategory.addNewRow(),this._departmentvsCategory.DepartmentVsCategoryObj.SELECTEDINDEX=i,setTimeout(()=>{this._masterRepo.focusAnyControl("catname"+(this._masterRepo.nullToZeroConverter(i)+1))},0))},this.onReset=()=>this._departmentvsCategory.onResetClicked(),this.onSaveClicked=()=>{this._spinnerService.show("saving data.please wait.");const i=this._departmentvsCategory.DepartmentVsCategoryObj.CATLIST;i.forEach(l=>{l.VARIANTVALUES=null==l.VARIANTVALUES?[]:JSON.parse(l.VARIANTVALUES.toString())}),this._masterRepo.masterPostmethod("/savecategorywiseconfiguration",i.filter(l=>l.VARIANTNAME)).subscribe(l=>{this._spinnerService.hide(),this._alertService.success(l.result)},l=>{this._spinnerService.hide()})}}ngOnInit(){this._masterRepo.masterPostmethod("/getcategorywiseconfiguration",{}).subscribe(e=>{"ok"==e.status&&e.result.length&&(this._departmentvsCategory.DepartmentVsCategoryObj.CATLIST=e.result)},e=>{})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(d.P),t.Y36(b.V),t.Y36(M.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["departmentvscategories"]],features:[t._Bn([_])],decls:25,vars:4,consts:[[1,"content-wrapper",2,"margin","1%"],[1,"kitwrap"],[1,"buttons-wrap"],[1,"hder-hding"],[1,"right-btn"],["appOldFYearDB","",1,"btn","add-btn",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"btn","btn-back",3,"click"],[1,"bgcover-form","depatvscat"],["id","prodlistTable"],["prodlistTable",""],[1,"table-container"],["id","BlueHeaderResizableTable",1,"table","reportTabel"],["reportHtmlTable",""],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["type","text",1,"form-control",3,"ngModel","ngModelChange","keydown"],["type","text",1,"form-control",3,"id","ngModel","ngModelChange","keydown.enter"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4)(6,"button",5,6),t.NdJ("click",function(){return o.onSaveClicked()}),t._uU(8,"Save"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.onReset()}),t._uU(10,"Reset"),t.qZA()()()(),t.TgZ(11,"div",8)(12,"div",9,10)(14,"div",11)(15,"table",12,13)(17,"thead")(18,"tr")(19,"th"),t._uU(20,"Categories"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Category Name"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,f,5,3,"tr",14),t.qZA()()()()()()),2&e){const a=t.MAs(7);t.xp6(4),t.AsE("",null==o._departmentvsCategory||null==o._departmentvsCategory.DepartmentVsCategoryObj?null:o._departmentvsCategory.DepartmentVsCategoryObj.TITLE," [",null==o._departmentvsCategory||null==o._departmentvsCategory.DepartmentVsCategoryObj?null:o._departmentvsCategory.DepartmentVsCategoryObj.MODE,"] "),t.xp6(2),t.Q6J("disabled",a.isOldFYearDB()),t.xp6(18),t.Q6J("ngForOf",o._departmentvsCategory.DepartmentVsCategoryObj.CATLIST)}},dependencies:[p.sg,c.Fj,c.JJ,c.On,h.H],styles:[".report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#CED6D3;border:1px solid #dbd7d7}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:30px;border:1px solid #dbd7d7}.report-table[_ngcontent-%COMP%]   .borderdiv[_ngcontent-%COMP%]{border:1px solid rgba(119,119,119,.15)}.report-table[_ngcontent-%COMP%]   .rowdiv[_ngcontent-%COMP%]{border:1px solid rgba(119,119,119,.15);text-align:center}.report-table[_ngcontent-%COMP%]   .smalllabeldiv[_ngcontent-%COMP%]{height:16px}.report-table[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin:0}.report-table[_ngcontent-%COMP%]   .scrolldiv[_ngcontent-%COMP%]{max-height:75px;padding-right:30px;overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;scrollbar-shadow-color:#0033CC}.report-table[_ngcontent-%COMP%]   .multiboxspan[_ngcontent-%COMP%]{font-size:11px;font-weight:700;position:relative;float:left;display:block;margin:2px;border:1px solid silver;border-radius:5px;background-color:#fff0f5}.report-table[_ngcontent-%COMP%]   .smallBoldLabel[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin:0;float:left;color:#222}.report-table[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{height:77vh}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:95%}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]{flex:0 0 auto;width:calc(100% - .9em)}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{flex:1 1 auto;display:block;overflow-y:scroll}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:99.6%}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;table-layout:fixed}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#deb887!important;color:#fff}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f2f2f2}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#fff}.report-table[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:#222;width:auto}.report-table[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{margin-bottom:1%}.report-table[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]{margin-top:10%}.report-table[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:15px;padding:0 5px}.report-table[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-bottom:1px!important}.report-table[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:inherit!important;height:35px!important;border:none!important}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-bottom:1px!important}.report-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:inherit!important;height:35px!important;border:none!important}.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:25px!important;padding:0 5px!important}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden}",".content-wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: inline-block;\n  width  : 100%;\n}\n\n  .content-wrapper[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]:not([size]):not([multiple]) {\n    height: 36px !important;\n  }\n\n  .content-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size     : 13px !important;\n  text-transform: capitalize;\n}\n\n  .depatvscat[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #2bade5;\n    color: #ffffff !important;\n    text-align: center;\n    font-weight: 600;\n    font-size: 15px;\n  }\n\n  .depatvscat[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    padding: 4px 12px;\n  }\n\n  .bgcover-form.depatvscat[_ngcontent-%COMP%] {\n    padding: 0;\n    border-top: 0;\n    margin: 6px 0 0;\n  }\n\n  .right-btn[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  h4.hder-hding[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 600;\n    color: #3a3a3a;\n    float: left;\n    display: inline;\n    width: auto;\n    margin: 8px 0 0;\n  }\n\n  h3.page-title.space-heading[_ngcontent-%COMP%] {\n    margin: 6px 0 0;\n  }\n\n  .btn.btn-back[_ngcontent-%COMP%] {\n    background: #11cdef;\n    color: #ffffff;\n    border-radius: 3px;\n    padding: 10px 20px;\n    font-weight: 500;\n    font-size: 15px;\n    transition: all ease-in-out 300ms;\n  }\n\n  .btn.add-btn[_ngcontent-%COMP%] {\n  background   : #44bd94;\n  color        : #ffffff;\n  border-radius: 3px;\n  padding      : 10px 20px;\n  font-weight  : 500;\n  font-size    : 15px;\n  transition   : all ease-in-out 300ms;\n  margin-right: 10px;\n}\n\n.add-btn[_ngcontent-%COMP%]:hover {\n  background: #0f9668;\n  transition: all ease-in-out 300ms;\n}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(u),m.Bz]}),n})();var y=r(63321),v=r(69401);let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,c.u5,c.UX,P,y._.forRoot(),v.m]}),n})()}}]);