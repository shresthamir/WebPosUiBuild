"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[9836],{69836:(D,_,a)=>{a.r(_),a.d(_,{AssetGroupsModule:()=>R});var l=a(1298),p=a(55757),O=a(8929),P=a(80013),b=a(75778),t=a(718),m=a(14970),C=a(67311),M=a(86833);let x=(()=>{class e{transform(n,o){if(n){if(o){const r=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();return n.filter(s=>{const u=s?.GroupName?s.GroupName.replace(/[^A-Z0-9]/gi,"").toLowerCase():"",d=s.DepreciationRate.toString();if(-1!==u?.indexOf(r)||-1!==d?.indexOf(r))return s})}return n}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"groupSearch",type:e,pure:!0}),e})();function y(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td",19),t._uU(2),t.qZA(),t.TgZ(3,"td",20),t._uU(4),t.qZA(),t.TgZ(5,"td",21),t._uU(6),t.qZA(),t.TgZ(7,"td",22)(8,"button",23),t.NdJ("click",function(){const c=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.editGroup(c))}),t._uU(9,"Edit"),t.qZA(),t.TgZ(10,"button",24),t.NdJ("click",function(){const c=t.CHM(n).$implicit,s=t.oxw(2);return t.KtG(s.deleteLocation(c))}),t._uU(11,"Delete"),t.qZA()()()}if(2&e){const n=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.GroupName),t.xp6(2),t.Oqu(n.DepreciationRate)}}function A(e,i){if(1&e&&(t.ynx(0,17),t.YNc(1,y,12,3,"tr",18),t.ALo(2,"groupSearch"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,n.groupList,n.filter))}}function v(e,i){1&e&&(t.TgZ(0,"tr")(1,"td",25)(2,"div",26),t._uU(3,"Location Lists are unavailable."),t.qZA()()())}let w=(()=>{class e{constructor(n,o,r,c){this.spinnerService=n,this.alertService=o,this.router=r,this._assetService=c,this.searchSubject=new O.xQ,this.filter="",this.groupList=[]}ngOnInit(){this.getGroup(),this.searchSubscription=this.searchSubject.pipe((0,P.b)(250),(0,b.x)()).subscribe(n=>{this.filter=n})}getGroup(){this.spinnerService.show("Fetching data from api..."),this._assetService.getAssetGroup().subscribe(n=>{this.spinnerService.hide(),this.groupList=n.result},n=>{this.spinnerService.hide(),this.alertService.error(n.error),this.groupList=[]})}onAddGroup(){this.router.navigate(["./pages/masters/fixed-assets/asset-groups/asset-group-entry",{mode:"add",returnUrl:this.router.url}])}onSearchGroup(n){this.searchSubject.next(n.target.value?.trim())}editGroup(n){console.log("grp",n),this.router.navigate(["./pages/masters/fixed-assets/asset-groups/asset-group-entry",{mode:"edit",returnUrl:this.router.url,id:n.AssetGroupID}])}deleteLocation(n){this.spinnerService.show("Deleting data from api..."),this._assetService.addEditDeleteAssetGroup(n,"query").subscribe(()=>{setTimeout(()=>{this.spinnerService.hide()},800),this.getGroup()},r=>{this.spinnerService.hide(),this.alertService.error(r),this.getGroup()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.V),t.Y36(C.c),t.Y36(p.F0),t.Y36(M.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-asset-groups"]],decls:30,vars:5,consts:[[1,"configuration-section"],[1,"title-section"],["type","button","routerLink","/pages/dashboard",1,"btn","pull-right"],["type","button",1,"btn","pull-right",3,"click"],[1,"row"],[1,"col-md-12","col-sm-8","asset-location-section"],[1,"card"],[1,"card-header"],["type","search","placeholder","Search...","name","filter",3,"input"],[1,"card-body"],[1,"table","table-striped"],["scope","col",1,"first-col"],["scope","col",1,"second-col"],["scope","col",1,"third-col"],["scope","col",1,"fourth-col"],[";","",4,"ngIf"],[3,"ngIf"],[";",""],[4,"ngFor","ngForOf"],[1,"first-col"],[1,"second-col"],[1,"third-col"],[1,"fourth-col"],[1,"btn","btn-sm","mr-1",3,"click"],[1,"btn","btn-sm",3,"click"],["colspan","6"],[1,"font-weight-bold"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"ASSET GROUP"),t.qZA(),t.TgZ(3,"button",2),t._uU(4,"Back"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return o.onAddGroup()}),t._uU(6,"Add Group"),t.qZA()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"span"),t._uU(12,"Group Lists"),t.qZA(),t.TgZ(13,"input",8),t.NdJ("input",function(c){return o.onSearchGroup(c)}),t.qZA()(),t.TgZ(14,"div",9)(15,"table",10)(16,"thead")(17,"tr")(18,"th",11),t._uU(19,"S.N"),t.qZA(),t.TgZ(20,"th",12),t._uU(21,"Group Name"),t.qZA(),t.TgZ(22,"th",13),t._uU(23,"Depreciation Rate"),t.qZA(),t.TgZ(24,"th",14),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,A,3,4,"ng-container",15),t.YNc(28,v,4,0,"ng-template",16),t.ALo(29,"groupSearch"),t.qZA()()()()()()),2&n&&(t.xp6(27),t.Q6J("ngIf",o.groupList&&o.groupList.length>0),t.xp6(1),t.Q6J("ngIf",o.groupList&&0===t.xi3(29,2,o.groupList,o.filter).length))},dependencies:[l.sg,l.O5,p.rH,x],styles:[".configuration-section[_ngcontent-%COMP%]{position:relative;height:40px;background:#d9e5e7}.configuration-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{position:absolute;font-family:Segoe UI Light;height:25px;font-style:normal;font-weight:700;font-size:18px;line-height:25px;color:#000;left:4%;top:50%;transform:translateY(-50%)}.configuration-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#4472c4;color:#fff;font-size:12px;margin-right:5px;margin-top:2px}.row[_ngcontent-%COMP%]{align-items:center}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]{margin-top:.5rem}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:auto;width:65vw}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{background-color:#4472c4;padding:10px 20px;display:flex;justify-content:space-between;align-items:center}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{display:none}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:13px;width:30%}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-top:6px;box-shadow:2px 3px 2px 2px #00000040;position:sticky;top:0;line-height:1.5rem}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:15px;padding:.5rem!important}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:block;max-height:59vh;overflow:auto;margin-top:3px}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-top:2px}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n-1){background-color:#cfd5ea}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#e9ebf5}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;padding:.3rem!important}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .first-col[_ngcontent-%COMP%]{width:15%}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .second-col[_ngcontent-%COMP%]{width:30%}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .third-col[_ngcontent-%COMP%]{width:20%}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .fourth-col[_ngcontent-%COMP%]{text-align:center;width:20%}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .fourth-col[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-color:#4472c4;font-size:10px;background-color:#4472c4;padding-bottom:0;padding-top:0;color:#fff}.row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .asset-location-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}.cross[_ngcontent-%COMP%]{color:#fff;border:1px solid #ffffff;margin-top:5px;margin-right:2px}span.cross[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}span.cross[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;text-align:center;font-size:20px;font-family:Roboto;border-radius:50%;position:relative;cursor:pointer;margin-left:4px}span.cross[_ngcontent-%COMP%]{background:#4472c4}.modal-sticky[_ngcontent-%COMP%]{display:block;padding:0;margin-bottom:-86px;margin-right:12rem}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]{width:70%;box-shadow:2px 3px 2px 2px #00000040}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0;background:#4472c4}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{padding-left:5px;color:#fff;font-size:16px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:2px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:-12px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:4vh;font-size:13px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;float:right;background-color:#4472c4;color:#fff}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .disabled-button[_ngcontent-%COMP%]{background-color:#336799a6}"]}),e})();var g=a(35757),f=a(38011);const G=["genericMultiSelectLedgerMapping"];function Z(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n," ")}}function T(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"span",24),t.YNc(2,Z,2,1,"span",25),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.ledgerAccountId)}}function k(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",32),t.NdJ("click",function(){const c=t.CHM(n).index,s=t.oxw(3);return t.KtG(s.removeItem(c))}),t._uU(7,"Remove"),t.qZA()()()}if(2&e){const n=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n)}}function S(e,i){if(1&e&&(t.TgZ(0,"tbody",31),t.YNc(1,k,8,2,"tr",25),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.selectedLedger)}}function I(e,i){if(1&e&&(t.TgZ(0,"div",26)(1,"table",27)(2,"thead",28)(3,"th",29),t._uU(4,"S.N"),t.qZA(),t.TgZ(5,"th",29),t._uU(6,"Account Name"),t.qZA(),t.TgZ(7,"th",29),t._uU(8,"Action"),t.qZA()(),t.YNc(9,S,2,1,"tbody",30),t.qZA()()),2&e){const n=t.oxw();t.xp6(9),t.Q6J("ngIf",""!=n.selectedLedger[0])}}const h=function(e){return{"disabled-button":e}};function U(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",33)(2,"div",34)(3,"div",35)(4,"h5",36),t._uU(5,"New Location Group"),t.qZA(),t.TgZ(6,"span",37),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.closeUnitModal())}),t.TgZ(7,"p"),t._uU(8,"\xd7"),t.qZA()()(),t.TgZ(9,"form",0),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.saveGroup())}),t.TgZ(10,"div",38)(11,"div",39)(12,"label",40),t._uU(13,"LocationGroupName:"),t.qZA(),t.TgZ(14,"div",41),t._UZ(15,"input",42),t.qZA()(),t.TgZ(16,"button",43),t._uU(17,"Save"),t.qZA()()()()(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(9),t.Q6J("formGroup",n.ledgerForm),t.xp6(7),t.Q6J("disabled",n.locGrpForm.invalid)("ngClass",t.VKq(3,h,n.locGrpForm.invalid))}}const N=[{path:"",component:w},{path:"asset-group-entry",component:(()=>{class e{constructor(n,o,r,c,s,u){this.fb=n,this.spinnerService=o,this.alertService=r,this._assetService=c,this._activatedRoute=s,this.router=u,this.showTooltip=!1,this.ledgerAccountId=[],this.modeHeading="New Group",this.selectedLedger=[],this.addNewGroup=!1,this.returnUrl="",this.mode="add",this.gridPopupSettingsForLedgerMapping=new f.oe,this.groupContentList=[{heading:"New Group",body:"present"}],this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl)}ngOnInit(){if(this.groupForm=this.fb.group({AssetGroupId:0,GroupName:["",[g.kI.required]],DepreciationRate:["",[g.kI.required]],ACID:["",[g.kI.required]]}),this.mode=this._activatedRoute.snapshot.params.mode,"edit"===this.mode){this.modeHeading="Edit List";const n=this._activatedRoute.snapshot.params.id;this.groupForm.get("AssetGroupId").patchValue(n),this.spinnerService.show("Fetching location group by Id..."),this._assetService.getAssetGroupById(n).subscribe(o=>{let r=[],c=[],s=[];s=o.result.ledger.map(d=>d.ACNAME),c=o.result.ledger.map(d=>d.ACID),c.join(","),o.result.ledger.map(d=>r.push(d.ACID)),this.spinnerService.hide(),this.ledgerAccountId=c,this.selectedLedger=s,this.groupForm.get("ACID").patchValue(c),this.groupForm.patchValue(o.result),this.genericMultiSelectLedgerMapping.selectedItems=o.result.ledger,this.genericMultiSelectLedgerMapping.popupsettings.title="LEDGER MAPPING"},o=>{this.spinnerService.hide(),this.alertService.error(o.error)})}}onNewGroupAdd(){this.addNewGroup=!0}closeUnitModal(){this.addNewGroup=!1}saveGroup(){""!=this.groupForm.value.ACID[0]&&null!=this.groupForm.value.ACID[0]&&null!=this.groupForm.value.ACID[0]?this.groupForm.value.DepreciationRate>100?this.alertService.warning("Depreciation Rate cannot be greater than 100 !!!"):(this.spinnerService.show("Saving new asset group..."),this._assetService.addEditDeleteAssetGroup(this.groupForm.value,this.mode).subscribe(()=>{setTimeout(()=>{this.spinnerService.hide()},700),this.alertService.success("Data Saved Successfully."),this.groupForm.reset(),this.backToPreviousRoute()},n=>{this.spinnerService.hide(),400==n.status&&n.error.result&&this.alertService.info(n.error.result)})):this.alertService.warning("Please select ledger to proceed!!!")}backToPreviousRoute(){try{this.router.navigate([this.returnUrl])}catch(n){this.alertService.error(n)}}onEnterLedger(){this.gridPopupSettingsForLedgerMapping={title:"LEDGER MAPPING",apiEndpoints:"/getACListForAssetGroup",defaultFilterIndex:0,showIsDefaultSelection:!1,columns:[{key:"ACID",title:"Account Code",hidden:!1,noSearch:!1},{key:"ACNAME",title:"Account Name",hidden:!1,noSearch:!1}]},this.genericMultiSelectLedgerMapping.show()}onMultiItemSelected(n){console.log("on double click",n),this.selectedLedger=n.DESCA.split(",");let o=n.MCODE.split(",");console.log("event",this.selectedLedger),this.groupForm.get("ACID").setValue(o),this.ledgerAccountId=o}removeItem(n){this.genericMultiSelectLedgerMapping.removeItem(n),this.genericMultiSelectLedgerMapping.selectMultipleItem()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.qu),t.Y36(m.V),t.Y36(C.c),t.Y36(M.C),t.Y36(p.gz),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-asset-group-entry"]],viewQuery:function(n,o){if(1&n&&t.Gf(G,5),2&n){let r;t.iGM(r=t.CRH())&&(o.genericMultiSelectLedgerMapping=r.first)}},decls:44,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"configuration-section"],[1,"title-section"],["type","button",1,"btn","back-btn","pull-right",3,"click"],["type","submit",1,"btn","save-btn","pull-right",3,"disabled","ngClass"],[1,"row","d-flex","justify-content-around"],[1,"col-lg-5","col-md-5","col-sm-10","col-10"],[1,"configuration-body"],[1,"node-header"],[1,"node-title"],[1,"node-body"],[1,"d-flex"],["for","grpname"],[1,"requiredStar"],["type","text","formControlName","GroupName","autocomplete","off",1,"form-control","grpname"],["for","depreciation-rate"],["type","number","formControlName","DepreciationRate","placeholder","In(%)","autocomplete","off",1,"form-control","depreciation-rate"],["for","ledger-mapping"],["type","text","formControlName","ACID","autocomplete","off",1,"form-control","ledger-mapping",3,"click","mouseover","mouseleave"],[1,"add",3,"click"],[4,"ngIf"],["class","ledgerTableRow",4,"ngIf"],[3,"popupsettings","onItemsSelected"],["genericMultiSelectLedgerMapping",""],[1,"ledgertooltip"],[4,"ngFor","ngForOf"],[1,"ledgerTableRow"],[1,"table","table-striped"],[1,"tablehead"],["scope","col"],["class","selecteditem",4,"ngIf"],[1,"selecteditem"],[1,"btn","btn-danger",3,"click"],[1,"modal-sticky"],[1,"modal-content","modal-content-main-area"],[1,"modal-header"],[1,"modal-title"],[1,"cross",3,"click"],[1,"modal-body"],[1,"form-group","row"],[1,"col-sm-3","form-control-label"],[1,"col-sm-8"],["type","text","formControlName","GroupName","autocomplete","off",1,"form-control"],["type","submit",1,"btn","btn-sm","btn-info",3,"disabled","ngClass"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.saveGroup()}),t.TgZ(1,"div",1)(2,"span",2),t._uU(3,"ASSET GROUP"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return o.backToPreviousRoute()}),t._uU(5,"Back"),t.qZA(),t.TgZ(6,"button",4),t._uU(7,"Save"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"label",9),t._uU(13),t.qZA()(),t.TgZ(14,"div",10)(15,"div",11)(16,"label",12),t._uU(17,"Group Name "),t.TgZ(18,"span",13),t._uU(19,"*"),t.qZA(),t._uU(20," :"),t.qZA(),t._UZ(21,"input",14),t.qZA(),t.TgZ(22,"div",11)(23,"label",15),t._uU(24,"Depreciation Rate "),t.TgZ(25,"span",13),t._uU(26,"*"),t.qZA(),t._uU(27," :"),t.qZA(),t._UZ(28,"input",16),t.qZA(),t.TgZ(29,"div",11)(30,"label",17),t._uU(31,"Ledger Mapping "),t.TgZ(32,"span",13),t._uU(33,"*"),t.qZA(),t._uU(34," :"),t.qZA(),t.TgZ(35,"input",18),t.NdJ("click",function(){return o.onEnterLedger()})("mouseover",function(){return o.showTooltip=!0})("mouseleave",function(){return o.showTooltip=!1}),t.qZA(),t.TgZ(36,"span",19),t.NdJ("click",function(){return o.onEnterLedger()}),t.TgZ(37,"p"),t._uU(38,"+"),t.qZA()(),t.YNc(39,T,3,1,"ng-container",20),t.qZA()()(),t.YNc(40,I,10,1,"div",21),t.qZA()()(),t.TgZ(41,"multiselect-generic-grid",22,23),t.NdJ("onItemsSelected",function(c){return o.onMultiItemSelected(c)}),t.qZA(),t.YNc(43,U,18,5,"ng-container",20)),2&n&&(t.Q6J("formGroup",o.groupForm),t.xp6(6),t.Q6J("disabled",o.groupForm.invalid)("ngClass",t.VKq(8,h,o.groupForm.invalid)),t.xp6(7),t.Oqu(o.modeHeading),t.xp6(26),t.Q6J("ngIf",o.showTooltip&&o.ledgerAccountId.length>0),t.xp6(1),t.Q6J("ngIf",o.groupForm.get("ACID").valid),t.xp6(1),t.Q6J("popupsettings",o.gridPopupSettingsForLedgerMapping),t.xp6(2),t.Q6J("ngIf",o.addNewGroup))},dependencies:[l.mk,l.sg,l.O5,g._Y,g.Fj,g.wV,g.JJ,g.JL,g.sg,g.u,f.ky],styles:[".configuration-section[_ngcontent-%COMP%]{position:relative;height:40px;background:#d9e5e7;padding-right:8px}.configuration-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{position:absolute;font-family:Segoe UI Light;height:25px;font-style:normal;font-weight:700;font-size:18px;line-height:25px;color:#000;left:4%;top:50%;transform:translateY(-50%)}.configuration-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#336799;color:#fff;font-size:12px;margin-left:6px;margin-top:2px}.configuration-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .disabled-button[_ngcontent-%COMP%]{background-color:#336799a6}.configuration-body[_ngcontent-%COMP%]{padding:0;color:#000;font-family:Segoe UI Light;box-sizing:border-box;min-height:155px;margin-top:10px;border:1px solid #7b7979;border-radius:5px}.configuration-body[_ngcontent-%COMP%]   .node-rate[_ngcontent-%COMP%], .configuration-body[_ngcontent-%COMP%]   .node-mapping[_ngcontent-%COMP%]{margin-top:8px}.configuration-body[_ngcontent-%COMP%]   .node-rate[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .configuration-body[_ngcontent-%COMP%]   .node-mapping[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:15%}.configuration-body[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]{padding:10px 20px;display:flex;justify-content:space-between;align-items:center;background-color:#4472c4;box-sizing:border-box;height:45px;border-radius:5px 5px 0 0}.configuration-body[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-title[_ngcontent-%COMP%]{color:#fff;height:25px;display:block;width:250px;font-style:normal;font-weight:600;font-size:16px}@media screen and (max-width: 320px){.configuration-body[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-title[_ngcontent-%COMP%]{font-size:80%}}.configuration-body[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .choose-node[_ngcontent-%COMP%]{box-sizing:border-box;width:40%;height:30px;background:#ffffff;border:1px solid #9c9b9b;padding-top:1px;border-radius:5px;font-size:14px;font-style:normal;font-weight:700;color:#000}.configuration-body[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .choose-node[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-weight:700}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]{margin-left:5%;margin-top:2%;padding-bottom:10px;padding-right:2px}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;font-size:14px;width:150px}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:25px;display:inline-block}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   .grpname[_ngcontent-%COMP%]{width:50%}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   .depreciation-rate[_ngcontent-%COMP%], .configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   .ledger-mapping[_ngcontent-%COMP%]{width:20%}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   .depr[_ngcontent-%COMP%]{margin-top:8px}.configuration-body[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%]   .depr[_ngcontent-%COMP%]     .simplesuggestformControl{width:30%}.popup-body[_ngcontent-%COMP%]{width:50%}.add[_ngcontent-%COMP%]{color:#378a3f;border:2px solid #378a3f;margin-top:5px}.cross[_ngcontent-%COMP%]{color:#fff;border:1px solid #ffffff;margin-top:5px;margin-right:2px}span.add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], span.cross[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}span.add[_ngcontent-%COMP%], .cross[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;text-align:center;font-size:20px;font-family:Roboto;border-radius:50%;position:relative;cursor:pointer;margin-left:4px}span.add[_ngcontent-%COMP%]{background:#ffffff}span.cross[_ngcontent-%COMP%]{background:#4472c4}.modal-sticky[_ngcontent-%COMP%]{display:block;padding:0;margin-bottom:20px;margin-right:8rem}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]{width:70%;box-shadow:2px 3px 2px 2px #00000040}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0;background:#4472c4}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{padding-left:5px;color:#fff;font-size:16px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:2px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:-12px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:4vh;font-size:13px}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;float:right;background-color:#6599ff;color:#fff}.modal-sticky[_ngcontent-%COMP%]   .modal-content-main-area[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .disabled-button[_ngcontent-%COMP%]{background-color:#336799a6}.requiredStar[_ngcontent-%COMP%]{color:red}input[readonly][_ngcontent-%COMP%]{background-color:#fff}.ledgerTableRow[_ngcontent-%COMP%]{display:block;background-color:#fff;max-height:280px;margin-top:10px;overflow-y:scroll;position:relative}.ledgerTableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border:1px solid #dee2e6}.ledgerTableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1){width:10%}.ledgerTableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2){width:10%}.ledgerTableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(3){width:10%}.ledgerTableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;line-height:1rem;z-index:100;border:1px solid #dee2e6;background-color:#fff;outline:3px solid #dee2e6}.ledgerTableRow[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{line-height:8px;font-size:10px;padding:4px}  multiselect-generic-grid .asset-group-entry{background-color:#4472c4!important;color:#fff}.ledgertooltip[_ngcontent-%COMP%]{display:block!important;background:black;position:absolute;border-radius:17px;color:#fff;width:100%;z-index:999;padding:5px 0 5px 5px;margin-left:102px;margin-top:28px;left:10%;max-width:200px}.ledgertooltip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}.ledger-mapping[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;cursor:pointer}"]}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(N),p.Bz]}),e})();var q=a(46543),E=a(53158),F=a(70489);let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,L,q.m,E.i,F.Is]}),e})()}}]);