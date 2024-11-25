import{a as ae,b as oe,c as re}from"./chunk-OSBE524Y.js";import{A as Me,B as we,C as Ee,D as Ie,G as Se,I as ke,J as j,K as Fe,L as Ve,M as Ne,N as Ae,O as Oe,P as z,b as de,c as ce,d as ue,e as he,f as _e,g as me,h as pe,i as fe,j as ge,k as Ce,l as ve,n as xe,p as be,t as ye,v as De}from"./chunk-AU4LS4EU.js";import{$ as le,G as U,_ as se,ga as Te,k as ne,m as ie}from"./chunk-IOQHTKTC.js";import{$a as E,$b as b,Ab as O,Bb as P,Cb as r,Db as s,Eb as g,F as J,Fb as y,Gb as D,Ib as M,Kc as X,Lb as C,Mc as Z,Nb as h,Nc as ee,Qc as te,Rb as k,Sb as T,Tb as F,Vb as u,Wb as B,Xb as w,Yb as Y,Zb as v,_a as l,_b as x,aa as K,bc as V,cc as R,ja as S,ka as W,p as G,pb as _,sa as m,sb as H,ta as p,tb as d,xb as N,yb as A,yc as L}from"./chunk-VBZWTO5P.js";var Q=class t{constructor(i){this.tableFetchService=i}variantConfigtableColumns=L(()=>[...this.tableFetchService.tableColumns(),{header:"ACTION",def:"ACTION"}]);variantConfigtableData=L(()=>this.tableFetchService.tableData());ngOnInit(){this.tableFetchService.paginationPage.set(1),this.tableFetchService.getTableData("getAllVariantConfiguation"),this.tableFetchService.selectedTab.set("variant-configuration")}static \u0275fac=function(e){return new(e||t)(E(j))};static \u0275cmp=S({type:t,selectors:[["app-variant-configuration"]],standalone:!0,features:[V],decls:9,vars:4,consts:[[1,"container","mt-3"],[1,"heading","fw-bold","fs-5"],[1,"border-bottom","border-secondary"],[1,"container","d-flex","flex-column","flex-grow-1"],[1,"row"],[1,"col-md-6","mt-2","ms-auto"],[3,"columns","dataSource"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"h5",1),u(2,"Variant Configuration"),s()(),g(3,"div",2),r(4,"div",3)(5,"div",4)(6,"div",5),g(7,"app-generic-filter",6),s()(),g(8,"app-generic-table",6),s()),e&2&&(l(7),d("columns",n.variantConfigtableColumns())("dataSource",n.variantConfigtableData()),l(),d("columns",n.variantConfigtableColumns())("dataSource",n.variantConfigtableData()))},dependencies:[z,Fe]})};var Pe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=W({type:t})}static{this.\u0275inj=K({})}}return t})();var Be=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=W({type:t})}static{this.\u0275inj=K({imports:[Pe,U,U]})}}return t})();var et=["categoryHiddenBtn"],tt=["subCategoryHiddenBtn"],nt=["isEnableHiddenButtons"],Re=()=>["checkbox","Interface_Name","feature_Name","Do_Menu_Visible"],Le=()=>["checkbox","Function_Name","feature_Name","Default_Value","Disabling_Value","Is_User_Configurable"];function it(t,i){if(t&1&&(r(0,"option",15),u(1),s()),t&2){let e=i.$implicit;d("value",e.ID),l(),B(e.Module)}}function at(t,i){if(t&1&&(r(0,"option",15),u(1),s()),t&2){let e=i.$implicit;d("value",e.VariantID),l(),B(e.VariantName)}}function ot(t,i){if(t&1){let e=M();r(0,"div",19)(1,"button",48),C("click",function(){m(e);let a=h();return p(a.loadViewEditData("edit",!0))}),u(2,"INHERIT"),s()()}}function rt(t,i){t&1&&(r(0,"th",49),u(1,"Feature Name"),s())}function st(t,i){if(t&1&&(r(0,"mat-icon"),u(1),s()),t&2){let e=h().index,n=h();l(),B(n.expandedRows[e]?"remove":"add")}}function lt(t,i){if(t&1){let e=M();r(0,"div",58)(1,"mat-checkbox",54),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.check,a)||(o.check=a),p(a)}),C("change",function(a){let o=m(e),c=o.$implicit,f=o.index,I=h(2),Ke=I.$implicit,We=I.index,He=h();return p(He.onChildCheckboxChange(a,c,Ke,We,f))}),u(2),s()()}if(t&2){let e=i.$implicit,n=h(3);l(),v("ngModel",e.check),d("disabled",n.mode==="view"),l(),w(" ",e.feature_Name," ")}}function dt(t,i){if(t&1&&(r(0,"div",56),_(1,lt,3,3,"div",57),s()),t&2){let e=h().$implicit;l(),d("ngForOf",e.children)}}function ct(t,i){if(t&1){let e=M();r(0,"td",50)(1,"div",51)(2,"button",52),C("click",function(){let a=m(e),o=a.$implicit,c=a.index,f=h();return p(f.toggleRow(c,o))}),_(3,st,2,1,"mat-icon",53),s(),r(4,"mat-checkbox",54),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.check,a)||(o.check=a),p(a)}),C("change",function(a){let o=m(e),c=o.$implicit,f=o.index,I=h();return p(I.onParentCheckboxChange(a,c,f))}),u(5),s(),_(6,dt,2,1,"div",55),s()()}if(t&2){let e=i.$implicit,n=i.index,a=h();l(2),d("disabled",!(e.children.length>0)),H("aria-label","Toggle "+e.feature_Name),l(),d("ngIf",e.children.length>0),l(),v("ngModel",e.check),d("disabled",a.parentCheckBoxDisable(e)||a.mode==="view"),l(),w(" ",e.feature_Name," "),l(),d("ngIf",a.expandedRows[n]&&e.children)}}function ut(t,i){t&1&&(r(0,"th",49),u(1,"Category"),s())}function ht(t,i){if(t&1&&(r(0,"div",60),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.category," ")}}function _t(t,i){if(t&1&&(r(0,"div",56),_(1,ht,2,1,"div",59),s()),t&2){let e=h().$implicit;l(),d("ngForOf",e.children)}}function mt(t,i){if(t&1&&(r(0,"td",50),u(1),_(2,_t,2,1,"div",55),s()),t&2){let e=i.$implicit,n=i.index,a=h();l(),w(" ",e.category," "),l(),d("ngIf",a.expandedRows[n]&&e.children)}}function pt(t,i){t&1&&(r(0,"th",49),u(1,"Sub Category"),s())}function ft(t,i){if(t&1&&(r(0,"div",62),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.sub_Category," ")}}function gt(t,i){if(t&1&&(r(0,"div",56),_(1,ft,2,1,"div",61),s()),t&2){let e=h().$implicit;l(),d("ngForOf",e.children)}}function Ct(t,i){if(t&1&&(r(0,"td",50),u(1),_(2,gt,2,1,"div",55),s()),t&2){let e=i.$implicit,n=i.index,a=h();l(),w(" ",e.sub_Category," "),l(),d("ngIf",a.expandedRows[n]&&e.children)}}function vt(t,i){t&1&&(r(0,"th",49),u(1,"Is Enabled"),s())}function xt(t,i){if(t&1){let e=M();r(0,"div",64)(1,"mat-checkbox",54),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.isEnable,a)||(o.isEnable=a),p(a)}),C("change",function(a){let o=m(e).$implicit,c=h(3);return p(c.onFeatureIsEnable(a,o))}),s()()}if(t&2){let e=i.$implicit,n=h(3);l(),v("ngModel",e.isEnable),d("disabled",!e.check||n.mode==="view")}}function bt(t,i){if(t&1&&(r(0,"div",56),_(1,xt,2,2,"div",63),s()),t&2){let e=h().$implicit;l(),d("ngForOf",e.children)}}function yt(t,i){if(t&1){let e=M();r(0,"td",50)(1,"mat-checkbox",54),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.isEnable,a)||(o.isEnable=a),p(a)}),C("change",function(a){let o=m(e).$implicit,c=h();return p(c.onFeatureIsEnable(a,o))}),s(),_(2,bt,2,1,"div",55),s()}if(t&2){let e=i.$implicit,n=i.index,a=h();l(),v("ngModel",e.isEnable),d("disabled",!e.check||a.mode==="view"),l(),d("ngIf",a.expandedRows[n]&&e.children)}}function Dt(t,i){t&1&&g(0,"tr",65)}function Mt(t,i){t&1&&g(0,"tr",66)}function wt(t,i){if(t&1&&(r(0,"option",15),u(1),s()),t&2){let e=i.$implicit;d("value",e.featuresID),l(),w(" ",e.feature_Name," ")}}function Et(t,i){if(t&1){let e=M();r(0,"select",67),b("ngModelChange",function(a){m(e);let o=h();return x(o.selectedID,a)||(o.selectedID=a),p(a)}),C("change",function(a){m(e);let o=h();return p(o.featureNameChange(a))}),r(1,"option",16),u(2," Filter By Feature Name (All)"),s(),O(3,wt,2,2,"option",15,A),s()}if(t&2){let e=h();v("ngModel",e.selectedID),l(3),P(e.featureName)}}function It(t,i){t&1&&g(0,"th",49)}function St(t,i){if(t&1){let e=M();r(0,"td",50)(1,"mat-checkbox",72),C("change",function(a){let o=m(e).$implicit,c=h(2);return p(c.onMenuCheckbox(a,o))}),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.check,a)||(o.check=a),p(a)}),s()()}if(t&2){let e=i.$implicit,n=h(2);l(),v("ngModel",e.check),d("disabled",n.mode==="view")}}function kt(t,i){t&1&&(r(0,"th",49),u(1,"Menu Name "),s())}function Tt(t,i){if(t&1&&(r(0,"td",50),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.interface_Name," ")}}function Ft(t,i){t&1&&(r(0,"th",49),u(1,"Feature Name "),s())}function Vt(t,i){if(t&1&&(r(0,"td",50),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.feature_Name," ")}}function Nt(t,i){t&1&&(r(0,"th",49),u(1," Do Menu Visible "),s())}function At(t,i){if(t&1){let e=M();r(0,"td",50)(1,"mat-checkbox",73),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.do_Menu_Visible,a)||(o.do_Menu_Visible=a),p(a)}),s()()}if(t&2){let e=i.$implicit,n=h(2);l(),v("ngModel",e.do_Menu_Visible),d("disabled",!e.isDoMenuVisibleEnabled||n.mode==="view")}}function Ot(t,i){t&1&&g(0,"tr",65)}function Pt(t,i){t&1&&g(0,"tr",66)}function Bt(t,i){if(t&1&&(r(0,"div",47)(1,"table",28),y(2,68),_(3,It,1,0,"th",30)(4,St,2,2,"td",31),D(),y(5,69),_(6,kt,2,0,"th",30)(7,Tt,2,1,"td",31),D(),y(8,29),_(9,Ft,2,0,"th",30)(10,Vt,2,1,"td",31),D(),y(11,70),_(12,Nt,2,0,"th",30)(13,At,2,2,"td",31),D(),_(14,Ot,1,0,"tr",71)(15,Pt,1,0,"tr",36),s()()),t&2){let e=h();l(),d("dataSource",e.menuData),l(13),d("matHeaderRowDef",R(4,Re))("matHeaderRowDefSticky",!0),l(),d("matRowDefColumns",R(5,Re))}}function Rt(t,i){t&1&&g(0,"th",49)}function Lt(t,i){if(t&1){let e=M();r(0,"td",50)(1,"mat-checkbox",81),C("change",function(a){let o=m(e).$implicit,c=h(2);return p(c.onSettingCheckbox(a,o))}),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.check,a)||(o.check=a),p(a)}),s()()}if(t&2){let e=i.$implicit,n=h(2);l(),d("disabled",n.mode==="view"),v("ngModel",e.check)}}function Kt(t,i){t&1&&(r(0,"th",49),u(1,"Setting Name "),s())}function Wt(t,i){if(t&1&&(r(0,"td",82),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.function_Name," ")}}function Ht(t,i){t&1&&(r(0,"th",49),u(1,"Feature Name "),s())}function jt(t,i){if(t&1&&(r(0,"td",50),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.feature_Name," ")}}function zt(t,i){t&1&&(r(0,"th",49),u(1," Default Value "),s())}function Qt(t,i){if(t&1){let e=M();r(0,"input",86),b("ngModelChange",function(a){m(e);let o=h().$implicit;return x(o.default_Value,a)||(o.default_Value=a),p(a)}),s()}if(t&2){let e=h().$implicit,n=h(2);v("ngModel",e.default_Value),d("disabled",!e.check||n.mode==="view")}}function $t(t,i){if(t&1){let e=M();r(0,"input",87),b("ngModelChange",function(a){m(e);let o=h().$implicit;return x(o.default_Value,a)||(o.default_Value=a),p(a)}),s()}if(t&2){let e=h().$implicit,n=h(2);v("ngModel",e.default_Value),d("disabled",!e.check||n.mode==="view")}}function Ut(t,i){if(t&1){let e=M();r(0,"select",88),b("ngModelChange",function(a){m(e);let o=h().$implicit;return x(o.default_Value,a)||(o.default_Value=a),p(a)}),r(1,"option",15),u(2,"True "),s(),r(3,"option",15),u(4,"False "),s()()}if(t&2){let e=h().$implicit,n=h(2);v("ngModel",e.default_Value),d("disabled",!e.check||n.mode==="view"),l(),d("value",1),l(2),d("value",0)}}function qt(t,i){if(t&1&&(r(0,"option",15),u(1),s()),t&2){let e=i.$implicit;d("value",e.Value),l(),Y("",e.Key," - ",e.Value," ")}}function Gt(t,i){if(t&1){let e=M();r(0,"select",88),b("ngModelChange",function(a){m(e);let o=h().$implicit;return x(o.default_Value,a)||(o.default_Value=a),p(a)}),O(1,qt,2,3,"option",15,A),s()}if(t&2){let e=h().$implicit,n=h(2);v("ngModel",e.default_Value),d("disabled",!e.check||n.mode==="view"),l(),P(e.options)}}function Jt(t,i){if(t&1&&(r(0,"td",50),_(1,Qt,1,2,"input",83)(2,$t,1,2,"input",84)(3,Ut,5,4,"select",85)(4,Gt,3,2,"select",85),s()),t&2){let e=i.$implicit;l(),N(e.dataType.toLowerCase()=="text"?1:e.dataType.toLowerCase()=="number"?2:e.dataType.toLowerCase()==="boolean"?3:4)}}function Yt(t,i){t&1&&(r(0,"th",49),u(1," Disabling Value"),s())}function Xt(t,i){if(t&1&&(r(0,"td",89),u(1),s()),t&2){let e=i.$implicit;l(),w(" ",e.disabling_Value,"")}}function Zt(t,i){t&1&&(r(0,"th",49),u(1," Is User Configurable "),s())}function en(t,i){if(t&1){let e=M();r(0,"td",89)(1,"mat-checkbox",73),b("ngModelChange",function(a){let o=m(e).$implicit;return x(o.is_User_Configurable,a)||(o.is_User_Configurable=a),p(a)}),s()()}if(t&2){let e=i.$implicit,n=h(2);l(),v("ngModel",e.is_User_Configurable),d("disabled",!e.check||n.mode==="view")}}function tn(t,i){t&1&&g(0,"tr",65)}function nn(t,i){t&1&&g(0,"tr",66)}function an(t,i){if(t&1&&(r(0,"table",28),y(1,68),_(2,Rt,1,0,"th",30)(3,Lt,2,2,"td",31),D(),y(4,74),_(5,Kt,2,0,"th",30)(6,Wt,2,1,"td",75),D(),y(7,29),_(8,Ht,2,0,"th",30)(9,jt,2,1,"td",31),D(),y(10,76),_(11,zt,2,0,"th",30)(12,Jt,5,1,"td",31),D(),y(13,77),_(14,Yt,2,0,"th",30)(15,Xt,2,1,"td",78),D(),y(16,79),_(17,Zt,2,0,"th",30)(18,en,2,2,"td",78),D(),_(19,tn,1,0,"tr",71),r(20,"tbody",80),_(21,nn,1,0,"tr",36),s()()),t&2){let e=h();d("dataSource",e.settingData),l(19),d("matHeaderRowDef",R(4,Le))("matHeaderRowDefSticky",!0),l(2),d("matRowDefColumns",R(5,Le))}}var $=class t{constructor(i,e,n,a,o,c){this.apiService=i;this.location=e;this.route=n;this.router=a;this.tableFetchService=o;this.snackBarService=c;this.route.queryParams.subscribe(f=>{let I=f.mode;this.variantId=f.id,this.moduleId=f.mid,I&&this.variantId&&this.moduleId&&(I==="view"&&(this.mode="view"),I==="edit"&&(this.mode="edit"),this.loadViewEditData(this.mode))}),this.tableFetchService.emptyTableData()}categoryHiddenButtons;subCategoryHiddenButtons;isEnableHiddenButtons;clickedTabIndex=0;formHeading="Variant Configuration ";mode="add";dataSource=[];module;variant;variantId;moduleId;settingData=[];allSettingData=[];menuData=[];allMenuData=[];menuSaveData=[];settingSaveData=[];expandedElement;doMenuVisible=!1;featureName=[];featureSave=[];selectedID="";isInherit;variantConfigtableData=L(()=>this.tableFetchService.tableData());childrenAccessor=i=>i.children??[];hasChild=(i,e)=>e.children&&e.children.length>0;expandedRows=[];featureTableColumnData=["feature_Name","category","sub_Category","isEnable"];featureColumn=[{header:"SEARCH BY",def:"search_By"},{header:"feature Name",def:"feature_Name"},{header:"category",def:"category"},{header:"sub Category",def:"sub_Category"}];loadViewEditData(i,e){e&&(this.isInherit=!0),this.mode=i;let n={variantID:this.variantId,moduleID:this.moduleId,mode:this.mode};this.tableFetchService.getTableData("LoadFeaturesForVariantConfiguation",n),this.getViewApi("LoadFeaturesForVariantConfiguation",n),this.apiService.get("getAllVariants",{mode:this.isInherit?"add":this.mode,moduleId:this.moduleId}).subscribe(a=>{this.variant=a.result})}isExpanded(i){return console.log("expanded"),this.expandedElement===i}getViewApi(i,e){this.apiService.get(i,e).subscribe(n=>{if(n?.result&&n.result.length>0){this.dataSource=[...n.result],this.menuData=[...n.result2.variantInterfaceMenus],this.allMenuData=[...n.result2.variantInterfaceMenus],this.menuSaveData=[...n.result2.variantInterfaceMenus],this.settingData=[...n.result2.variantFunctionSettings],this.allSettingData=[...n.result2.variantFunctionSettings];let a=[...n.result];this.featureSave=a.filter(c=>c.check==1);let o=a.flatMap(c=>c.children||[]).filter(c=>c.check==1);this.featureSave=[...this.featureSave,...o],this.allSettingData=this.allSettingData.map(c=>{if(typeof c.options=="string")try{c.options=JSON.parse(c.options)}catch(f){console.error("Failed to parse options:",f)}return c}),this.menuData.forEach(c=>c.isDoMenuVisibleEnabled=!0),this.mode=="view"&&this.menuData.forEach(c=>c.check=1),this.filterByFeatureName()}})}ngOnInit(){this.apiService.get("getModule").subscribe(i=>{this.module=i.result}),this.mode=="add"&&this.apiService.get("getAllVariants",{mode:this.mode,moduleId:this.moduleId}).subscribe(i=>{this.variant=i.result}),this.expandedRows=new Array(this.dataSource.length).fill(!1)}toggleRow(i,e){this.expandedRows[i]=!this.expandedRows[i]}onParentCheckboxChange(i,e,n){this.onCheckboxChange(i,e),e.children&&e.children.forEach(a=>{a.check||(a.isEnable=!1)})}parentCheckBoxDisable(i){return i.children?.some(n=>n.check)}onChildCheckboxChange(i,e,n,a,o){if(console.log("child",e),e.check){let c=this.variantConfigtableData().find(f=>f.featuresID===e.mainFeatures);c.check||(c.check=1,this.onCheckboxChange(i,c))}this.onCheckboxChange(i,e),e.check||(e.isEnable=!1)}loadFeature(){this.menuSaveData=[],this.menuData=[],this.settingData=[],this.featureName=[];let i={variantID:this.variantId,moduleID:this.moduleId,mode:"Load"};this.tableFetchService.getTableData("LoadFeaturesForVariantConfiguation",i),this.apiService.get("LoadFeaturesForVariantConfiguation",i).subscribe(e=>{e?.result?.length>0&&(this.dataSource=[...e.result])})}goBack(){this.location.back()}onModuleIdChange(i){this.moduleId=i,this.variantId="",this.apiService.get("getAllVariants",{mode:this.mode,moduleId:this.moduleId}).subscribe(e=>{this.variant=e.result})}onCheckboxChange(i,e){if(e.isEnable=i.checked,i.checked){let n={featuresID:e.featuresID,moduleID:this.moduleId,mode:"Load"};this.apiService.get("getFeatureDetailsForVariantConfiguation",n).subscribe(a=>{let o=a.result;this.featureSave=[...this.featureSave,e],o.variantInterfaceMenus?.length>0&&(this.allMenuData=[...this.allMenuData,...o.variantInterfaceMenus],this.menuData=[...this.menuData,...o.variantInterfaceMenus],this.menuData.forEach(c=>c.check=1)),o.variantFunctionSettings?.length>0&&(this.allSettingData=[...this.allSettingData,...o.variantFunctionSettings],this.settingData=[...this.settingData,...o.variantFunctionSettings],this.settingData=this.settingData.map(c=>{if(typeof c.options=="string")try{c.options=JSON.parse(c.options)}catch(f){console.error("Failed to parse options:",f)}return c}),this.allSettingData=this.allSettingData.map(c=>{if(typeof c.options=="string")try{c.options=JSON.parse(c.options)}catch(f){console.error("Failed to parse options:",f)}return c})),this.filterByFeatureName(),this.onFeatureIsEnable(i,e)}),this.selectedID=e.featuresID,this.featureNameChange(void 0,e.featuresID)}else e.isEnable=!1,this.featureSave=this.featureSave.filter(n=>n.featuresID!==e.featuresID),this.menuData=this.allMenuData.filter(n=>n.featuresID!==e.featuresID),this.menuSaveData=this.menuSaveData.filter(n=>n.featuresID!==e.featuresID),this.settingData=this.allSettingData.filter(n=>n.featuresID!==e.featuresID),this.allMenuData=this.allMenuData.filter(n=>n.featuresID!==e.featuresID),this.allSettingData=this.allSettingData.filter(n=>n.featuresID!==e.featuresID),this.featureName=this.featureName.filter(n=>n.featuresID!==e.featuresID),this.selectedID=""}updateParentCheckboxState(i){if(i.mainFeatures){let e=this.dataSource.find(n=>n.featuresID===i.mainFeatures);e&&(e.isEnable=i.isEnable)}}onFeatureIsEnable(i,e){this.featureSave.forEach(n=>{e.featuresID===n.featuresID&&(n.isEnable=i.checked)}),this.menuData.forEach(n=>{e.featuresID===n.featuresID&&(n.do_Menu_Visible=i.checked,n.isDoMenuVisibleEnabled=i.checked)})}featureNameChange(i,e){let n=i?i.target.value:e;if(n==""){this.menuData=[...this.allMenuData],this.settingData=[...this.allSettingData];return}this.menuData=this.allMenuData.filter(a=>a.featuresID==n),this.settingData=this.allSettingData.filter(a=>a.featuresID==n)}onMenuCheckbox(i,e){i.checked?(e.check=1,e.do_Menu_Visible=!0,e.isDoMenuVisibleEnabled=!0,this.menuSaveData=[...this.menuSaveData,e]):(e.check=0,e.do_Menu_Visible=!1,e.isDoMenuVisibleEnabled=!1,this.menuSaveData=this.menuSaveData.filter(n=>n.MenuID!==e.menuID))}filterByFeatureName(){let i=new Set,e=[...this.allMenuData.map(({feature_Name:n,featuresID:a})=>({feature_Name:n,featuresID:a})),...this.allSettingData.map(({feature_Name:n,featuresID:a})=>({feature_Name:n,featuresID:a}))];this.featureName=e.filter(n=>{let a=n.feature_Name;return i.has(a)?!1:(i.add(a),!0)})}onSettingCheckbox(i,e){i.checked?e.check=1:e.check=0}onTabClick(i){let e=i.index;this.clickedTabIndex=e}submit(){this.menuSaveData=this.allMenuData.filter(e=>e.check),this.isInherit&&(this.mode="add"),this.allSettingData.forEach(e=>e.default_Value=String(e.default_Value)),this.featureSave=this.featureSave.reduce((e,n)=>(e.push({featuresID:n.featuresID,isEnable:n.isEnable}),e),[]);let i={mode:this.mode,data:{variantID:this.variantId,moduleID:this.moduleId,variantInterfaceMenus:this.menuSaveData,variantFunctionSettings:this.allSettingData,features:this.featureSave}};this.apiService.post("saveVariantConfiguration",i).pipe(J(e=>{let n=e.error?.result||"Error while saving Feature Configuration!!";return this.snackBarService.showError(n),G(()=>e)})).subscribe(e=>{this.snackBarService.showSuccess(e.result),this.router.navigate(["/variant-configuration"])})}static \u0275fac=function(e){return new(e||t)(E(ke),E(X),E(ne),E(ie),E(j),E(Te))};static \u0275cmp=S({type:t,selectors:[["app-variant-configuration-form"]],viewQuery:function(e,n){if(e&1&&(k(et,5),k(tt,5),k(nt,5)),e&2){let a;T(a=F())&&(n.categoryHiddenButtons=a),T(a=F())&&(n.subCategoryHiddenButtons=a),T(a=F())&&(n.isEnableHiddenButtons=a)}},standalone:!0,features:[V],decls:75,vars:14,consts:[[1,"container-main"],[1,"container","my-1","d-flex","justify-content-between","align-items-center"],[1,"col-md-6"],[1,"mb-0","heading"],[1,"col-md-6","d-flex","justify-content-end"],["id","save",1,"btn","me-2","px-4",3,"click","disabled"],["id","back",1,"btn","px-4",3,"click"],[1,"border-bottom","mb-3"],[1,"container","pb-5"],[1,"row","mb-2"],[1,"col-12","col-md-auto"],["for","mainMenu",1,"form-label","mb-0"],[1,"star"],[1,"col-12","col-md-3"],["id","modules",1,"form-select",3,"ngModelChange","ngModel","disabled"],[3,"value"],["value",""],[1,"col-12","col-md-1"],["id","load","type","button",1,"btn","me-2","px-4","py-1",3,"click","disabled"],[1,"col-12","col-md-1","ms-auto"],[1,"container-fluid","mb-2","p-0"],[1,"row","mt-3"],[1,"col-md-6","mat-elevation-z2","p-0"],[1,"table-responsive","table1"],[1,"container"],[1,"h3","mt-2"],[1,"col-12"],[3,"columns"],["mat-table","",1,"custom-table",3,"dataSource"],["matColumnDef","feature_Name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","category"],["matColumnDef","sub_Category"],["matColumnDef","isEnable"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"row","ms-1"],[1,"col-12","mat-elevation-z2","mb-2","p-0"],[1,"row","align-items-center"],[1,"col-md-12"],["animationDuration","0ms",1,"mt-2",3,"selectedTabChange"],["value","0","label","Menu Configuration"],["value","1","label","Setting Configuration"],[1,"filter"],[1,"form-control",3,"ngModel"],[1,"table-responsive"],[1,"table-size"],["id","load","type","button",1,"btn","me-2","px-4","py-1",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"feature-tree-container"],["mat-icon-button","",1,"plus-icon",3,"click","disabled"],[4,"ngIf"],[3,"ngModelChange","change","ngModel","disabled"],["class","child",4,"ngIf"],[1,"child"],["class","child-feature-row",4,"ngFor","ngForOf"],[1,"child-feature-row"],["class","child-category-row",4,"ngFor","ngForOf"],[1,"child-category-row"],["class","child-subcategory-row",4,"ngFor","ngForOf"],[1,"child-subcategory-row"],["class","child-enable-row",4,"ngFor","ngForOf"],[1,"child-enable-row"],["mat-header-row",""],["mat-row",""],[1,"form-control",3,"ngModelChange","change","ngModel"],["matColumnDef","checkbox"],["matColumnDef","Interface_Name"],["matColumnDef","Do_Menu_Visible"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],[3,"change","ngModelChange","ngModel","disabled"],[3,"ngModelChange","ngModel","disabled"],["matColumnDef","Function_Name"],["mat-cell","","style","width: 12.5rem;",4,"matCellDef"],["matColumnDef","Default_Value"],["matColumnDef","Disabling_Value"],["mat-cell","","style","text-align: center;",4,"matCellDef"],["matColumnDef","Is_User_Configurable"],[1,"mat-row"],[3,"change","ngModelChange","disabled","ngModel"],["mat-cell","",2,"width","12.5rem"],[1,"form-control",3,"ngModel","disabled"],["type","number","min","0",1,"form-control",3,"ngModel","disabled"],["name","","id","",1,"form-select",3,"ngModel","disabled"],[1,"form-control",3,"ngModelChange","ngModel","disabled"],["type","number","min","0",1,"form-control",3,"ngModelChange","ngModel","disabled"],["name","","id","",1,"form-select",3,"ngModelChange","ngModel","disabled"],["mat-cell","",2,"text-align","center"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),u(4),s()(),r(5,"div",4)(6,"button",5),C("click",function(){return n.submit()}),u(7,"SAVE"),s(),r(8,"button",6),C("click",function(){return n.goBack()}),u(9,"BACK"),s()()(),g(10,"div",7),r(11,"div",8)(12,"div",9)(13,"div",10)(14,"label",11),u(15,"Module:"),r(16,"span",12),u(17,"*"),s()()(),r(18,"div",13)(19,"select",14),C("ngModelChange",function(o){return n.onModuleIdChange(o)}),b("ngModelChange",function(o){return x(n.moduleId,o)||(n.moduleId=o),o}),O(20,it,2,2,"option",15,A),s()(),r(22,"div",10)(23,"label",11),u(24,"Variant Name:"),r(25,"span",12),u(26,"*"),s()()(),r(27,"div",13)(28,"select",14),b("ngModelChange",function(o){return x(n.variantId,o)||(n.variantId=o),o}),r(29,"option",16),u(30,"--Select--"),s(),O(31,at,2,2,"option",15,A),s()(),r(33,"div",17)(34,"button",18),C("click",function(){return n.loadFeature()}),u(35,"Load"),s()(),_(36,ot,3,0,"div",19),s(),r(37,"div",20)(38,"div",21)(39,"div",22)(40,"div",23)(41,"div",24)(42,"h3",25),u(43," Features"),s()(),r(44,"div",26),g(45,"app-generic-filter",27),s(),r(46,"table",28),y(47,29),_(48,rt,2,0,"th",30)(49,ct,7,7,"td",31),D(),y(50,32),_(51,ut,2,0,"th",30)(52,mt,3,2,"td",31),D(),y(53,33),_(54,pt,2,0,"th",30)(55,Ct,3,2,"td",31),D(),y(56,34),_(57,vt,2,0,"th",30)(58,yt,3,3,"td",31),D(),_(59,Dt,1,0,"tr",35)(60,Mt,1,0,"tr",36),s()()(),r(61,"div",2)(62,"div",37)(63,"div",38)(64,"div",39)(65,"div",40)(66,"mat-tab-group",41),C("selectedTabChange",function(o){return n.onTabClick(o)}),g(67,"mat-tab",42)(68,"mat-tab",43),s()()(),r(69,"div",44),_(70,Et,5,1,"select",45),s(),r(71,"div",46),_(72,Bt,16,6,"div",47)(73,an,22,6,"table",28),g(74,"div"),s()()()()()()()()),e&2&&(l(4),B(n.formHeading),l(2),d("disabled",n.mode=="view"),l(13),v("ngModel",n.moduleId),d("disabled",n.mode==="view"||n.mode=="edit"||n.isInherit),l(),P(n.module),l(8),v("ngModel",n.variantId),d("disabled",n.mode==="view"||n.mode=="edit"&&!n.isInherit),l(3),P(n.variant),l(3),d("disabled",n.mode==="view"||n.mode=="edit"||n.isInherit||!n.moduleId||!n.variantId),l(2),N(n.mode==="view"?36:-1),l(9),d("columns",n.featureColumn),l(),d("dataSource",n.variantConfigtableData()),l(13),d("matHeaderRowDef",n.featureTableColumnData),l(),d("matRowDefColumns",n.featureTableColumnData),l(10),N(n.featureName.length>0?70:-1),l(2),N(n.clickedTabIndex===0?72:73))},dependencies:[z,le,se,Oe,Ae,Be,ve,de,ue,pe,he,ce,fe,_e,me,ge,Ce,Ne,Ve,Se,we,Ee,xe,De,Me,be,Ie,ye,re,ae,oe,te,Z,ee],styles:["h4[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.h3[_ngcontent-%COMP%]{color:#336799}label[_ngcontent-%COMP%], input[type=select][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500}input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;line-height:normal}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{font-size:14px}.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:#007bff40;box-shadow:0 0 0 .1rem #007bff40}.star[_ngcontent-%COMP%]{color:red}#load[_ngcontent-%COMP%]{background-color:#4081bf;color:#fff;font-size:14px}#save[_ngcontent-%COMP%]{background-color:#336799;color:#fff;font-size:14px}#back[_ngcontent-%COMP%]{color:#336799;border:1px solid rgba(51,103,153,1);font-size:14px}#back[_ngcontent-%COMP%]:hover, #save[_ngcontent-%COMP%]:hover{background-color:#336899ac;color:#fff;border:none}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f6f6f6f5}tr[_ngcontent-%COMP%]:nth-child(2n)   .mat-tree-node[_ngcontent-%COMP%]{background-color:#f6f6f6f5}tr[_ngcontent-%COMP%]:nth-child(odd)   .mat-tree-node[_ngcontent-%COMP%]{background-color:#fffffff5}.mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:1px solid transparent;cursor:pointer;padding:0}.mat-mdc-header-row[_ngcontent-%COMP%]{border-top:1px solid gainsboro}.mat-mdc-row[_ngcontent-%COMP%]{overflow-y:auto}.custom-table[_ngcontent-%COMP%]{background-color:#fffdfd;overflow-y:auto}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:left;border-bottom:1px solid #ddd}.table-size[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.table-size[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1b0}.table-size[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a5a5a5;border-radius:10px;border:2px solid #f1f1f1}.table-size[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#b0b0b0c0}.hiddenButton[_ngcontent-%COMP%]{display:none}.child-feature-row[_ngcontent-%COMP%], .child-category-row[_ngcontent-%COMP%], .child-subcategory-row[_ngcontent-%COMP%], .child-enable-row[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-height:48px}.child[_ngcontent-%COMP%]{padding-left:50px}.plus-icon[_ngcontent-%COMP%]{vertical-align:middle}"]})};var ci=[{path:"",component:Q},{path:":subpath",component:$}];export{ci as VariantConfig_routes};
