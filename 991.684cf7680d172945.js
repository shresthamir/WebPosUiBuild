"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[991],{62106:(x,O,a)=>{a.d(O,{A:()=>p});var h=a(46543),l=a(64537);let p=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=l.oAB({type:g}),g.\u0275inj=l.cJS({imports:[h.m]}),g})()},49137:(x,O,a)=>{a.d(O,{C:()=>l});var h=a(64537);let l=(()=>{class p{transform(m,u,t){if(m)return u?m.filter(_=>{let A=_[t];const C=u.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(A?A.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(C))return _}):m}}return p.\u0275fac=function(m){return new(m||p)},p.\u0275pipe=h.Yjl({name:"searchData",type:p,pure:!1}),p})()},18488:(x,O,a)=>{a.d(O,{G:()=>t});var h=a(35732),l=a(79765),p=a(64537),g=a(7976),m=a(67297),u=a(71180);let t=(()=>{class _{constructor(C,v,b,y){this.http=C,this.activatedRoute=v,this.authService=b,this.state=y;const f=this.state.getGlobalSetting("apiUrl");f&&f.length>0&&(this.apiUrl=f)}getRequestOption(){return new h.WM({"Content-type":"application/csv",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}RequestOptionForCSV(){return{headers:new h.WM({Authorization:this.authService.getAuth().token})}}downloadSampleFile(C,v="download"){return this.http.get(this.apiUrl+`${C}`,{headers:this.getRequestOption(),responseType:"blob"})}downloadSampleExcelforPIImport(C){return this.http.post(this.apiUrl+"/downloadSampleExcelforPIImport",C,{responseType:"blob"})}importSelectedFiles(C,v){let b={status:"error",result:"error"},y=new l.xQ;return this.http.post(this.apiUrl+`${C}`,v).subscribe(f=>{y.next(f),y.unsubscribe()},f=>{b.status="error",b.result=f,y.next(b),y.unsubscribe()}),y}}return _.\u0275fac=function(C){return new(C||_)(p.LFG(h.eN),p.LFG(g.gz),p.LFG(m.e),p.LFG(u.q))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac}),_})()},77879:(x,O,a)=>{a.d(O,{H:()=>p});var h=a(64537),l=a(53074);let p=(()=>{class g{constructor(u){this.masterRepo=u}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return g.\u0275fac=function(u){return new(u||g)(h.Y36(l.P))},g.\u0275dir=h.lG2({type:g,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),g})()},79777:(x,O,a)=>{a.r(O),a.d(O,{CategoryMasterModule:()=>Q});var h=a(88692),l=a(20092),p=a(56893),g=a(87584),m=a(34579),u=a(7976),t=a(64537),_=a(53074),A=a(67311),C=a(14970),v=a(79765),b=a(35732),y=a(67297),f=a(71180);let L=(()=>{class o{constructor(e,n,r){this.http=e,this.authService=n,this.state=r}get apiUrl(){let e=this.state.getGlobalSetting("apiUrl"),n="";return!!e&&e.length>0&&(n=e[0]),n}getRequestOption(){return new b.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}saveCategoryMaster(e,n){let r={status:"error",result:""},i=new v.xQ;const s={headers:this.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/saveCategoryMaster",{mode:e,data:n},s).subscribe(M=>{let P=M.json();i.next(P),i.unsubscribe()},M=>{r.status="error",r.result=M,i.next(r),i.unsubscribe()}),i}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(b.eN),t.LFG(y.e),t.LFG(f.q))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var E=a(74417),w=a(49137);function S(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",31)(1,"label",11),t._uU(2,"Barcode Length: "),t.TgZ(3,"span",12),t._uU(4,"*"),t.qZA()(),t.TgZ(5,"input",32),t.NdJ("ngModelChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.categoryObj.BARCODELENGTH=r)})("keydown.ENTER",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.enterBarcodeLength())})("keydown.tab",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.enterBarcodeLength())}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.categoryObj.BARCODELENGTH)}}function D(o,c){if(1&o&&(t.TgZ(0,"option",33),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.s9C("value",e.VARIANTNAME),t.xp6(1),t.hij("",e.VARIANTNAME," ")}}function R(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr",34),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.rowclick(i))})("keydown.Shift.delete",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.deleteVariant(i))}),t.TgZ(1,"td",29),t._uU(2),t.qZA(),t.TgZ(3,"td",29)(4,"input",35),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.CODE=r)}),t.qZA()(),t.TgZ(5,"td",29)(6,"input",36),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.NAME=r)})("change",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.checkDuplicateName(i))}),t.qZA()(),t.TgZ(7,"td",29)(8,"input",35),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.VARIANTBARCODE=r)}),t.qZA()(),t.TgZ(9,"td",29)(10,"input",35),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.ALIASCODE=r)}),t.qZA()()()}if(2&o){const e=c.$implicit,n=c.index;t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.MGl("id","code",n,""),t.Q6J("ngModel",e.CODE),t.xp6(2),t.MGl("id","name",n,""),t.Q6J("ngModel",e.NAME),t.xp6(2),t.MGl("id","catbarcode",n,""),t.Q6J("ngModel",e.VARIANTBARCODE),t.xp6(2),t.MGl("id","aliascode",n,""),t.Q6J("ngModel",e.ALIASCODE)}}let B=(()=>{class o{constructor(e,n,r,i){this.masterService=e,this.alertService=n,this.loadingService=r,this.categoryService=i,this.activerowIndex=0,this.categoryObj={},this.categoryList=[],this.catLists=[],this.countCodeDigits=0,this.getInitialValues=()=>{this.masterService.masterPostmethod("/getcategorywiseconfiguration",{}).subscribe(s=>{this.catLists=s.result},s=>{})},this.onSaveClicked=()=>{!this.masterService.checkUserRights("add","categorymaster")||this.onSaveValidation()||(this.loadingService.show("Saving Data.Please wait."),this.masterService.masterPostmethod("/savecategorywiseconfigurationdetail",this.categoryList).subscribe(s=>{this.loadingService.hide(),this.alertService.info(s.result),this.getInitialValues(),this.onReset()},s=>{this.loadingService.hide()}))},this.onBrandChange=s=>{this.categoryList=[],this.variant="",this.variant=this.catLists.filter(d=>d.VARIANTNAME==s)[0].VARIANT,this.catLists.forEach(d=>{d.VARIANTNAME==s&&(this.categoryList=JSON.parse(d.VARIANTVALUES))}),this.categoryList.forEach(d=>{d.VARIANT=this.variant,d.NAME=d.NAME.toString()});for(let d=0;d<this.categoryList?.length;d++)document.getElementById("name"+d).disabled=!1},this.onReset=()=>{this.categoryObj={},this.categoryList=[]},this.onAddCategory=()=>{if(""!==this.categoryObj.CODE&&null!=this.categoryObj.CODE)if(""!==this.categoryObj.NAME&&null!=this.categoryObj.NAME)if(""!==this.categoryObj.VARIANTNAME&&null!=this.categoryObj.VARIANTNAME){if(1!=this.userSetting.CheckBarcodeLength||!this.validateBarcodeLength()){if(null!=this.categoryList){if(this.categoryList.filter(T=>T.CODE==this.categoryObj.CODE).length>0)return void this.alertService.warning("Cannot enter duplicate code");if(this.categoryList.filter(T=>T.NAME.trim().toLowerCase()==this.categoryObj.NAME.trim().toLowerCase()).length>0)return void this.alertService.warning("Cannot enter duplicate category name")}this.categoryList||(this.categoryList=[]),this.categoryList.some(M=>(M.CODE==this.categoryObj.CODE||M.NAME===this.categoryObj.NAME)&&M.VARIANTNAME==this.categoryObj.VARIANTNAME)||(this.categoryObj.VARIANTBARCODE=function d(M,P){return M.toString().length<P?d("0"+M,P).toString():M.toString()}(this.categoryObj.CODE,1==this.userSetting.CheckBarcodeLength?this.categoryObj.BARCODELENGTH.toString():3),this.categoryList.push({CODE:this.categoryObj.CODE,BARCODELENGTH:this.categoryObj.BARCODELENGTH,VARIANTBARCODE:this.categoryObj.VARIANTBARCODE,ALIASCODE:this.categoryObj.ALIASCODE,VARIANTNAME:this.categoryObj.VARIANTNAME,NAME:this.categoryObj.NAME,VARIANT:this.variant}),this.categoryList=[...this.categoryList],this.categoryObj.CODE=null,this.categoryObj.NAME=null,this.categoryObj.BARCODELENGTH=null,this.masterService.focusAnyControl("barcodeLength"))}}else this.alertService.warning("Please enter category variant type");else this.alertService.warning("Please enter category name");else this.alertService.warning("Please enter category code. ")},this.getInitialValues(),this.userSetting=this.masterService.userSetting}onSaveValidation(){return 0===this.categoryList?.length?(this.alertService.info("Please enter variant details!"),!0):!!this.categoryObj.NAME&&(this.alertService.info("Please press 'Enter' in 'Category Name' field to add entered variant!"),this.alertService.emitShowHideSubject.subscribe(e=>{setTimeout(()=>{document.getElementById("categoryName").focus()})}),!0)}validateBarcodeLength(){return 0===this.categoryObj.BARCODELENGTH||null==this.categoryObj.BARCODELENGTH?(this.alertService.warning("Please enter barcode length"),!0):this.categoryObj.CODE&&(this.countDigit(),this.countCodeDigits!==this.categoryObj.BARCODELENGTH)?(this.alertService.warning("Barcode number and number of digits in code should be same"),!0):this.categoryObj.BARCODELENGTH>3&&(this.alertService.warning("Length should be less than 4"),!0)}enterBarcodeLength(){0===this.categoryObj.BARCODELENGTH?this.alertService.warning("Barcode length cannot be 0"):null==this.categoryObj.BARCODELENGTH||null==this.categoryObj.BARCODELENGTH?this.alertService.warning("Please enter barcode length"):this.categoryObj.BARCODELENGTH>3?(this.alertService.warning("Length should be less than 4"),this.masterService.focusAnyControl("barcodeLength")):this.masterService.focusAnyControl("code")}focusNext(){0==parseInt(this.categoryObj.CODE)&&this.alertService.warning("Barcode length cannot be 0"),(null==this.categoryObj.CODE||null==this.categoryObj.CODE)&&this.alertService.warning("Please enter code "),this.categoryObj.CODE&&1==this.userSetting.CheckBarcodeLength&&(this.countDigit(),this.countCodeDigits!=this.categoryObj.BARCODELENGTH?this.alertService.warning("Barcode number and number of digits in code should be same"):this.masterService.focusAnyControl("category"))}countDigit(){this.countCodeDigits=this.categoryObj.CODE.toString().length}rowclick(e){let n=this.categoryList.findIndex(r=>r.VARIANTBARCODE===e.VARIANTBARCODE);this.currentindex=n,this.prevName=this.categoryList[n].NAME,this.masterService.masterPostmethod("/editVariantCategory",this.categoryList[n]).subscribe(r=>{"error"==r.status&&(this.alertService.warning(r.result),document.getElementById("code"+this.currentindex).setAttribute("disabled","disabled"),document.getElementById("name"+this.currentindex).setAttribute("disabled","disabled"),document.getElementById("catbarcode"+this.currentindex).setAttribute("disabled","disabled"),document.getElementById("aliascode"+this.currentindex).setAttribute("disabled","disabled"))})}checkDuplicateName(e){let n=e.NAME,r=null,i=this.categoryList.findIndex(s=>s.VARIANTBARCODE===e.VARIANTBARCODE);if(r=this.categoryList.filter(s=>s.NAME.toLowerCase()==n.toLowerCase()),r.length>1)return this.alertService.warning("Cannot enter duplicate category name"),void(this.categoryList[i].NAME=this.prevName)}deleteVariant(e){if(confirm("Are you sure you want to delete this variant category ?")){let n=this.categoryList.findIndex(r=>r.VARIANTBARCODE===e.VARIANTBARCODE);this.categoryList.splice(n,1),this.categoryList=[...this.categoryList]}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.P),t.Y36(A.c),t.Y36(C.V),t.Y36(L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["categorymaster"]],decls:63,vars:17,consts:[[1,"content-wrapper"],[1,"row"],[1,"col-md-10"],[1,"hder-hding"],[1,"right-btn","col-md-2"],[1,"btn","add-btn",3,"click"],[1,"btn","btn-back",3,"click"],[1,"full-width","compony-infoouter","catgory-master"],[1,"inner-wrap"],["class","col-xs-12 col-sm-6 col-md-3",4,"ngIf"],[3,"ngClass"],["for","type",1,"form-control-label",2,"width","100px"],[1,"mandatory"],["type","number","id","code","id","code",1,"form-control",3,"ngModel","ngModelChange","keydown.enter","keydown.tab","change"],["code",""],["id","category",1,"form-control",3,"ngModel","ngModelChange","change"],["cat",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","text","id","categoryName",1,"form-control",3,"ngModel","ngModelChange","keydown.ENTER"],[1,"row","col-md-6","mt-3","search"],["type","search","placeholder","Search by Variant Name",3,"ngModel","ngModelChange"],["id","prodlistTable",1,"Category-table"],["prodlistTable",""],[1,"widgets"],[1,"table-container"],[2,"height","405px",3,"itemSize","minBufferPx","maxBufferPx"],["id","BlueHeaderResizableTable",1,"table","reportTabel"],["reportHtmlTable",""],["width","100px"],[3,"click","keydown.Shift.delete",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"col-xs-12","col-sm-6","col-md-3"],["type","number","id","barcodeLength",1,"form-control",3,"ngModel","ngModelChange","keydown.ENTER","keydown.tab"],[3,"value"],[3,"click","keydown.Shift.delete"],["type","text","readonly","",1,"form-control",3,"id","ngModel","ngModelChange"],["type","text",1,"form-control",3,"id","ngModel","ngModelChange","change"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),t._uU(4," Variant Category Master"),t.qZA()(),t.TgZ(5,"div",4)(6,"button",5),t.NdJ("click",function(){return n.onSaveClicked()}),t._uU(7,"Save"),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){return n.onReset()}),t._uU(9,"Reset"),t.qZA()()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",1),t.YNc(13,S,6,1,"div",9),t.TgZ(14,"div",10)(15,"label",11),t._uU(16,"Code: "),t.TgZ(17,"span",12),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"input",13,14),t.NdJ("ngModelChange",function(i){return n.categoryObj.CODE=i})("keydown.enter",function(){return n.focusNext()})("keydown.tab",function(){return n.focusNext()})("change",function(){return n.focusNext()}),t.qZA()(),t.TgZ(21,"div",10)(22,"label",11),t._uU(23,"Category: "),t.TgZ(24,"span",12),t._uU(25,"*"),t.qZA()(),t.TgZ(26,"select",15,16),t.NdJ("ngModelChange",function(i){return n.categoryObj.VARIANTNAME=i})("change",function(i){return n.onBrandChange(i.target.value)}),t._UZ(28,"option",17),t.YNc(29,D,2,2,"option",18),t.qZA()(),t.TgZ(30,"div",10)(31,"label",11),t._uU(32,"Category Name: "),t.TgZ(33,"span",12),t._uU(34,"*"),t.qZA()(),t.TgZ(35,"input",19),t.NdJ("ngModelChange",function(i){return n.categoryObj.NAME=i})("keydown.ENTER",function(){return n.onAddCategory()}),t.qZA()()(),t.TgZ(36,"div",20)(37,"label"),t._uU(38,"Search:"),t.qZA(),t.TgZ(39,"input",21),t.NdJ("ngModelChange",function(i){return n.filter=i}),t.qZA()()()(),t.TgZ(40,"div")(41,"div",22,23)(43,"div",24)(44,"div",25)(45,"cdk-virtual-scroll-viewport",26)(46,"table",27,28)(48,"thead")(49,"tr")(50,"th",29),t._uU(51,"SNO"),t.qZA(),t.TgZ(52,"th",29),t._uU(53,"Code"),t.qZA(),t.TgZ(54,"th",29),t._uU(55,"Name"),t.qZA(),t.TgZ(56,"th",29),t._uU(57,"Cat Barcode"),t.qZA(),t.TgZ(58,"th",29),t._uU(59,"Alias Code"),t.qZA()()(),t.TgZ(60,"tbody"),t.YNc(61,R,11,9,"tr",30),t.ALo(62,"searchData"),t.qZA()()()()()()()()),2&e&&(t.xp6(13),t.Q6J("ngIf",1==n.userSetting.CheckBarcodeLength),t.xp6(1),t.Q6J("ngClass",1==n.userSetting.CheckBarcodeLength?"col-xs-12 col-sm-6 col-md-3":"col-xs-12 col-sm-6 col-md-4"),t.xp6(5),t.Q6J("ngModel",n.categoryObj.CODE),t.xp6(2),t.Q6J("ngClass",1==n.userSetting.CheckBarcodeLength?"col-xs-12 col-sm-6 col-md-3":"col-xs-12 col-sm-6 col-md-4"),t.xp6(5),t.Q6J("ngModel",n.categoryObj.VARIANTNAME),t.xp6(3),t.Q6J("ngForOf",n.catLists),t.xp6(1),t.Q6J("ngClass",1==n.userSetting.CheckBarcodeLength?"col-xs-12 col-sm-6 col-md-3":"col-xs-12 col-sm-6 col-md-4"),t.xp6(5),t.Q6J("ngModel",n.categoryObj.NAME),t.xp6(4),t.Q6J("ngModel",n.filter),t.xp6(6),t.Q6J("itemSize",20)("minBufferPx",700)("maxBufferPx",1e3),t.xp6(16),t.Q6J("cdkVirtualForOf",t.Dn7(62,13,n.categoryList,n.filter,"NAME")))},dependencies:[h.mk,h.sg,h.O5,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.On,E.xd,E.x0,E.N7,w.C],styles:[".report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#CED6D3;border:1px solid #dbd7d7}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:30px;border:1px solid #dbd7d7}.report-table[_ngcontent-%COMP%]   .borderdiv[_ngcontent-%COMP%]{border:1px solid rgba(119,119,119,.15)}.report-table[_ngcontent-%COMP%]   .rowdiv[_ngcontent-%COMP%]{border:1px solid rgba(119,119,119,.15);text-align:center}.report-table[_ngcontent-%COMP%]   .smalllabeldiv[_ngcontent-%COMP%]{height:16px}.report-table[_ngcontent-%COMP%]   .smallHeader[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin:0}.report-table[_ngcontent-%COMP%]   .scrolldiv[_ngcontent-%COMP%]{max-height:75px;padding-right:30px;overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;scrollbar-shadow-color:#0033CC}.report-table[_ngcontent-%COMP%]   .multiboxspan[_ngcontent-%COMP%]{font-size:11px;font-weight:700;position:relative;float:left;display:block;margin:2px;border:1px solid silver;border-radius:5px;background-color:#fff0f5}.report-table[_ngcontent-%COMP%]   .smallBoldLabel[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin:0;float:left;color:#222}.report-table[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{height:77vh}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:95%}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]{flex:0 0 auto;width:calc(100% - .9em)}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{flex:1 1 auto;display:block;overflow-y:scroll}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:99.6%}.report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;table-layout:fixed}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:#deb887!important;color:#fff}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f2f2f2}.report-table[_ngcontent-%COMP%]   .reportTabel[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#fff}.report-table[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:#222;width:auto}.report-table[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{margin-bottom:1%}.report-table[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]{margin-top:10%}.report-table[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:15px;padding:0 5px}.report-table[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-bottom:1px!important}.report-table[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:inherit!important;height:35px!important;border:none!important}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-bottom:1px!important}.report-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .report-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:inherit!important;height:35px!important;border:none!important}.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{height:25px!important;padding:0 5px!important}.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden}.search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:10%}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:30%;padding:2%}",".content-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n    display: inline-block;\n    width: 100%;\n  }\n\n  .content-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n    text-transform: capitalize;\n  }\n\n  .btn.btn-back[_ngcontent-%COMP%] {\n    background: #11cdef;\n    color: #ffffff;\n    border-radius: 3px;\n    padding: 10px 20px;\n    font-weight: 500;\n    font-size: 15px;\n    transition: all ease-in-out 300ms;\n  }\n\n  .btn.add-btn[_ngcontent-%COMP%] {\n    background: #44bd94;\n    color: #ffffff;\n    border-radius: 3px;\n    padding: 10px 20px;\n    font-weight: 500;\n    font-size: 15px;\n    transition: all ease-in-out 300ms;\n    margin-right: 10px;\n  }\n\n  .add-btn[_ngcontent-%COMP%]:hover {\n    background: #0f9668;\n    transition: all ease-in-out 300ms;\n  }\n\n  .catgory-master[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.catgory-master[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n}\n\n.Category-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background : #2bade5;\n  border     : 1px solid #ccc;\n  text-align : center;\n  font-weight: 600;\n  color      : #2f2f2f !important;\n}\n\n.Category-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px !important;\n}\n\n.Category-table[_ngcontent-%COMP%] {\n  display: inline-block;\n  width  : 100%;\n  margin : 16px 0 0;\n}\n\n.Category-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  height  : 100px;\n  overflow: auto;\n}\n\n.compony-infoouter[_ngcontent-%COMP%] {\n  display   : inline-block;\n  width     : 100%;\n  background: #fff;\n}\n\n.compony-infoouter[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  float : left;\n  width : 33.33333%;\n  margin: 0 0 15px;\n}\n\n.compony-infoouter[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color        : #172b4d;\n  font-size    : 14px;\n  line-height  : 18px;\n  margin       : 10px 0 0;\n  text-align   : right;\n  font-weight  : 600;\n}\n\n.right-btn[_ngcontent-%COMP%] {\n    float: right;\n  }"]}),o})();var N=a(72533),Z=a(77879);function I(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td",19),t._uU(2),t.qZA(),t.TgZ(3,"td",20),t._uU(4),t.qZA(),t.TgZ(5,"td",21),t._uU(6),t.qZA(),t._UZ(7,"td",22),t.qZA()),2&o){const e=c.$implicit,n=c.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.VARIANT),t.xp6(2),t.Oqu(e.VARIANTNAME)}}const k=function(o,c,e){return{itemsPerPage:o,currentPage:c,totalItems:e}};function j(o,c){if(1&o&&(t.ynx(0),t.YNc(1,I,8,3,"tr",18),t.ALo(2,"paginate"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.categoryLists,t.kEZ(4,k,e.itemsPerPage,e.currentPage,e.totalCount)))}}function U(o,c){1&o&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",23)(3,"div",24),t._uU(4,"Category Lists are unavailable."),t.qZA()()(),t.BQk())}function F(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"div",26)(2,"div",27)(3,"pagination-controls",28),t.NdJ("pageChange",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.categoryPagination(r))}),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("directionLinks",e.directionLinks)}}const V=[{path:"",component:(()=>{class o{constructor(e,n,r){this.router=e,this.alertService=n,this.masterService=r,this.categoryLists=[],this.isLoader=!0,this.currentPage=1,this.itemsPerPage=100,this.offset=0,this.directionLinks=!0}updown(e){"Escape"===e.code&&(e.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){this.masterService.masterPostmethod("/getcategorywiseconfiguration",{}).subscribe(e=>{this.categoryLists=e.result},e=>{})}onViewClicked(e){try{this.router.navigate(["./pages/masters/inventoryInfo/categorymaster/add-categorymaster",{name:e.MENUCAT,mode:"view",returnUrl:this.router.url}])}catch(n){this.alertService.info(n)}}onEditClicked(e){try{this.router.navigate(["./pages/masters/inventoryInfo/categorymaster/add-categorymaster",{name:e.MENUCAT,mode:"edit",returnUrl:this.router.url}])}catch(n){this.alertService.info(n)}}deleteCategory(e){}addCategory(){if(this.masterService.checkUserRights("add","categorymaster"))try{this.router.navigate(["./pages/masters/inventoryInfo/categorymaster/add-categorymaster",{mode:"add",returnUrl:this.router.url}])}catch(e){this.alertService.info(e)}}categoryPagination(e){this.isLoader=!0,this.currentPage=e;const n=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{n.isLoader=!1},500)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0),t.Y36(A.c),t.Y36(_.P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-categorymaster-list"]],hostBindings:function(e,n){1&e&&t.NdJ("keydown",function(i){return n.updown(i)},!1,t.evT)},decls:31,vars:4,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-sm-8","col-md-12",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","5%"],["scope","col",2,"width","70%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","5%"],[2,"width","65%"],[2,"width","85%"],[2,"text-align","center","width","20%"],["colspan","3"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Category"),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4,5),t.NdJ("click",function(){return n.addCategory()}),t._uU(9,"Add Category"),t.qZA()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),t._uU(15,"Category Lists"),t.qZA(),t._UZ(16,"div",10),t.qZA(),t.TgZ(17,"div",11)(18,"table",12)(19,"thead")(20,"tr",13)(21,"th",14),t._uU(22,"S.N."),t.qZA(),t.TgZ(23,"th",15),t._uU(24,"Variant"),t.qZA(),t.TgZ(25,"th",15),t._uU(26,"Variant Name"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,j,3,8,"ng-container",16),t.YNc(29,U,5,0,"ng-container",16),t.qZA()(),t.YNc(30,F,4,1,"div",17),t.qZA()()()()),2&e){const r=t.MAs(8);t.xp6(7),t.Q6J("disabled",r.isOldFYearDB()),t.xp6(21),t.Q6J("ngIf",n.categoryLists&&n.categoryLists.length>0),t.xp6(1),t.Q6J("ngIf",n.categoryLists&&0===n.categoryLists.length),t.xp6(1),t.Q6J("ngIf",n.categoryLists&&n.categoryLists.length>n.itemsPerPage)}},dependencies:[h.sg,h.O5,u.rH,N.LS,Z.H,N._s],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:475px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),o})()},{path:"add-categorymaster",component:B}];let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(V),u.Bz]}),o})();var G=a(63321),H=a(62106),Y=a(46543);let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[L,g.p],imports:[p.xc,h.ez,l.u5,l.UX,J,G._.forRoot(),m.h,E.Cl,H.A,Y.m]}),o})()}}]);