import{A as W,B as X,C as Y,F as Z,H as ee,I as te,J as x,K as ne,P as oe,m as B,n as G,o as c,p as L,q as j,r as H,u as U,v as q,w as $,x as J,y as K,z as Q}from"./chunk-AU4LS4EU.js";import{ga as ie,k as w,m as z}from"./chunk-IOQHTKTC.js";import{$a as d,Ab as h,Bb as y,Cb as e,Db as t,Eb as m,F as V,Fb as M,Gb as D,Kc as k,Lb as u,Mc as I,N as O,Nc as R,Qc as P,Vb as n,Wb as b,_a as l,bc as C,ja as S,p as N,pb as f,tb as p,xb as A,yb as v,yc as E,z as T}from"./chunk-VBZWTO5P.js";var _=class r{constructor(o){this.tableFetchService=o}menutableColumns=E(()=>[...this.tableFetchService.tableColumns(),{header:"ACTION",def:"ACTION"}]);menutableData=E(()=>this.tableFetchService.tableData());ngOnInit(){this.tableFetchService.getTableData("getAllAppSetting"),this.tableFetchService.selectedTab.set("app-setting-form")}static \u0275fac=function(a){return new(a||r)(d(x))};static \u0275cmp=S({type:r,selectors:[["app-app-setting-reg"]],standalone:!0,features:[C],decls:9,vars:4,consts:[[1,"container","mt-3"],[1,"heading","fw-bold","fs-5"],[1,"border-bottom","border-secondary"],[1,"container","d-flex","flex-column","flex-grow-1"],[1,"row"],[1,"col-md-6","mt-2","ms-auto"],[3,"columns","dataSource"]],template:function(a,i){a&1&&(e(0,"div",0)(1,"h5",1),n(2,"App Setting Configuration"),t()(),m(3,"div",2),e(4,"div",3)(5,"div",4)(6,"div",5),m(7,"app-generic-filter",6),t()(),m(8,"app-generic-table",6),t()),a&2&&(l(7),p("columns",i.menutableColumns())("dataSource",i.menutableData()),l(),p("columns",i.menutableColumns())("dataSource",i.menutableData()))},dependencies:[oe,ne]})};function me(r,o){r&1&&(e(0,"span",61),n(1," Setting name should not contain spaces. "),t())}function pe(r,o){if(r&1&&(e(0,"tr"),M(1,62),e(2,"td"),m(3,"input",63),t(),e(4,"td"),m(5,"input",64),t(),D(),t()),r&2){let a=o.index;l(),p("formGroupName",a)}}function se(r,o){r&1&&(e(0,"select",43)(1,"option",54),n(2,"True - 1 "),t(),e(3,"option",54),n(4,"False - 0"),t()()),r&2&&(l(),p("value",1),l(2),p("value",0))}function de(r,o){r&1&&m(0,"input",44)}function ce(r,o){r&1&&m(0,"input",45)}function ue(r,o){r&1&&(e(0,"select",50)(1,"option",54),n(2,"True - 1 "),t(),e(3,"option",54),n(4,"False - 0"),t()()),r&2&&(l(),p("value",1),l(2),p("value",0))}function ge(r,o){r&1&&m(0,"input",51)}function fe(r,o){r&1&&m(0,"input",52)}function be(r,o){if(r&1&&(e(0,"option",54),n(1),t()),r&2){let a=o.$implicit;p("value",a.ID),l(),b(a.Module)}}function Se(r,o){if(r&1&&(e(0,"option",54),n(1),t()),r&2){let a=o.$implicit;p("value",a.ID),l(),b(a.Category)}}function ve(r,o){if(r&1&&(e(0,"option",54),n(1),t()),r&2){let a=o.$implicit;p("value",a.ID),l(),b(a.SubCategory)}}var F=class r{constructor(o,a,i,s,g,ye,Ce){this.tableFetchService=o;this.fb=a;this.apiService=i;this.route=s;this.router=g;this.location=ye;this.snackBarService=Ce}settingsForm=new H({});formHeading="App Setting Registration ";featureMapping;loading=!1;mode="add";appSettingData;category;module;subcategory;dataTypeValue;ngOnInit(){this.getData(),this.route.queryParams.subscribe(o=>{let a=o.mode,i=o.id;a&&i&&(a==="view"&&(this.mode="view"),a==="edit"&&(this.mode="edit"),this.getViewApi("getAppSettingByName",i))}),this.formInitializer()}formInitializer(){this.settingsForm=this.fb.group({mode:[this.mode],data:this.fb.group({settingName:[this.appSettingData?.SettingName||"",[c.required,he()]],displayName:[this.appSettingData?.DisplayName||"",c.required],description:[this.appSettingData?.Description||"",c.required],dataType:[this.appSettingData?.DataType||"",c.required],dataSize:[this.appSettingData?.DataSize||""],options:this.fb.array([]),isUserConfigurable:[this.appSettingData?.isUserConfigurable||""],defaultValue:[this.appSettingData?.DefaultValue||"",c.required],disablingValue:[this.appSettingData?.DisablingValue||"",c.required],features_Header:[this.appSettingData?.Features_Header||""],features_HelpLink:[this.appSettingData?.Features_HelpLink||""],Category:[this.appSettingData?.Category||""],SubCategory:[this.appSettingData?.SubCategory||""],sn:[this.appSettingData?.SN||""]})}),this.addOption(),this.mode=="view"&&this.settingsForm.disable(),this.mode=="edit"&&this.settingsForm?.get("data.settingName")?.disable()}getData(){T({category:this.apiService.get("getCategory"),subCategory:this.apiService.get("getSubCategory"),module:this.apiService.get("getModule")}).subscribe(o=>{o.category?.result?.length>0&&(this.category=o.category.result),o.subCategory?.result?.length>0&&(this.subcategory=o.subCategory.result),o.module?.result?.length>0&&(this.module=o.module.result)})}get(o,a){this.apiService.get(o,a).subscribe(i=>{i?.result&&i.result.length>0&&(this.featureMapping=i.result)})}getViewApi(o,a){a={settingName:a},this.apiService.get(o,a).subscribe(i=>{i?.result&&i.result.length>0&&(this.appSettingData=i.result[0],this.formInitializer())})}addOption(o){if((this.mode==="view"||this.mode==="edit")&&!o)JSON.parse(this.appSettingData?.Options||"[]")?.forEach(i=>{let s=this.fb.group({key:[i?.Key||""],value:[i?.Value||""]});this.options.push(s)}),this.fieldChange();else{let a=this.options,i=a.at(a.length-1);if(!i||i.get("key")?.value&&i.get("value")?.value){let s=this.fb.group({key:[""],value:[""]});this.options.push(s)}}}get options(){return this.settingsForm.get("data.options")}removeOption(o){this.options.removeAt(o)}fieldChange(){console.log(this.dataTypeValue),this.dataTypeValue=this.settingsForm.get("data")?.get("dataType")?.value,this.dataTypeValue==="List"||this.dataTypeValue==="Boolean"?(this.dataTypeValue=="List"&&this.options.enable(),this.settingsForm.get("data.dataSize")?.disable(),this.settingsForm.get("data.dataSize")?.reset()):(this.options.disable(),this.options.reset(),this.settingsForm.get("data.dataSize")?.enable())}submit(){this.settingsForm.get("data.dataType")?.value!=="List"&&this.settingsForm.get("data.options").clear();let o=this.settingsForm.get("data")?.get("isUserConfigurable")?.value;this.settingsForm.get("data")?.get("isUserConfigurable")?.setValue(o?"true":"false"),this.settingsForm.get("data.Category")?.value||this.settingsForm.get("data.Category")?.setValue(null),this.settingsForm.get("data.SubCategory")?.value||this.settingsForm.get("data.SubCategory")?.setValue(null),this.settingsForm.get("data.dataSize")?.setValue(String(this.settingsForm.get("data.dataSize")?.value)),this.settingsForm.get("data.defaultValue")?.setValue(String(this.settingsForm.get("data.defaultValue")?.value)),this.settingsForm.get("data.disablingValue")?.setValue(String(this.settingsForm.get("data.disablingValue")?.value));let a=this.settingsForm.getRawValue();this.settingsForm.valid&&this.apiService.post("saveAppSetting",a).pipe(O(()=>this.loading=!1)).pipe(V(i=>{let s=i.error?.result||"Error while saving Appsetting Configuration!!";return this.snackBarService.showError(s),N(()=>i)})).subscribe(i=>{this.router.navigate(["/app-setting-reg"]),this.snackBarService.showSuccess(i.result)})}goBack(){this.location.back()}static \u0275fac=function(a){return new(a||r)(d(x),d(Z),d(te),d(w),d(z),d(k),d(ie))};static \u0275cmp=S({type:r,selectors:[["app-app-setting-reg-form"]],standalone:!0,features:[C],decls:148,vars:9,consts:[[1,"container","my-1","d-flex","justify-content-between","align-items-center"],[1,"col-md-6","px-3"],[1,"mb-0","heading"],[1,"col-md-6","d-flex","justify-content-end"],["id","save",1,"btn","me-2","px-4",3,"click","disabled"],["id","back",1,"btn","px-4",3,"click"],[1,"border-bottom","mb-3"],[1,"container"],[3,"ngSubmit","formGroup"],[1,"container",3,"formGroupName"],[1,"row","mb-2"],[1,"col-12","col-md-2"],["for","mainMenu",1,"form-label"],[1,"star"],[1,"col-12","col-md-5"],["type","text","id","mainMenu","formControlName","settingName","autocomplete","off",1,"form-control","px-2","py-1"],["class","errorText",4,"ngIf"],["for","subMenu",1,"form-label"],[1,"col-12","col-md-6"],["type","text","id","mainMenu","formControlName","displayName",1,"form-control","px-2","py-1"],["type","text","id","mainMenu","formControlName","features_Header",1,"form-control","px-2","py-1"],["for","parentMenu",1,"form-label"],["type","textarea","formControlName","description",1,"form-control","px-2","py-1"],["for","menuIndex",1,"form-label"],[1,"col-12","col-md-3"],["id","category","formControlName","dataType",1,"form-select","px-2","py-1",3,"change"],["value","Number"],["value","Boolean"],["value","List"],["value","Text"],[1,"col-12","col-md-auto","ps-2","pe-2"],["for","dataSize",1,"form-label"],["type","number","id","dataSize","formControlName","dataSize",1,"form-control","px-2","py-1"],["for","category",1,"form-label"],[1,"col-11","col-md-6"],[1,"option-table"],["formArrayName","options"],[4,"ngFor","ngForOf"],[1,"col-1","d-flex","flex-column","align-items-start","p-0"],["type","button",1,"dialog-button","mt-auto",3,"click","disabled"],["src","assets/images/addButton.png","alt","addicon"],["for","subCategory",1,"form-label"],[1,"col-11","col-md-3"],["id","defaultValueBoolean","formControlName","defaultValue",1,"form-select","px-2","py-1"],["type","number","id","defaultValueText","formControlName","defaultValue",1,"form-control","px-2","py-1"],["type","text","id","defaultValueText","formControlName","defaultValue",1,"form-control","px-2","py-1"],[1,"col-1","col-md-auto","ps-1","mt-1"],["type","checkbox","for","UserConfiguration","formControlName","isUserConfigurable"],[1,"col-1","col-md-4","p-0","mt-1"],["for","modules",1,"form-label"],["id","disablingValueBoolean","formControlName","disablingValue",1,"form-select","px-2","py-1"],["type","number","id","disablingValueText","formControlName","disablingValue",1,"form-control","px-2","py-1"],["type","text","id","disablingValueText","formControlName","disablingValue",1,"form-control","px-2","py-1"],["id","modules",1,"form-select","px-2","py-1"],[3,"value"],["id","modules","formControlName","Category",1,"form-select","px-2","py-1"],["id","modules","formControlName","SubCategory",1,"form-select","px-2","py-1"],["for","Icon",1,"form-label"],["type","text","id","Icon","formControlName","features_HelpLink",1,"form-control","px-2","py-1"],["type","text","id","Icon","formControlName","sn",1,"form-control","px-2","py-1"],[1,"footer","mb-1"],[1,"errorText"],[3,"formGroupName"],["formControlName","key"],["formControlName","value"]],template:function(a,i){if(a&1&&(e(0,"div",0)(1,"div",1)(2,"h4",2),n(3),t()(),e(4,"div",3)(5,"button",4),u("click",function(){return i.submit()}),n(6,"SAVE"),t(),e(7,"button",5),u("click",function(){return i.goBack()}),n(8,"BACK"),t()()(),m(9,"div",6),e(10,"div",7)(11,"form",8),u("ngSubmit",function(){return i.submit()}),e(12,"div",9)(13,"div",10)(14,"div",11)(15,"label",12),n(16,"Setting Name:"),e(17,"span",13),n(18,"*"),t()()(),e(19,"div",14),m(20,"input",15),f(21,me,2,0,"span",16),t()(),e(22,"div",10)(23,"div",11)(24,"label",17),n(25,"Display Names: "),e(26,"span",13),n(27,"*"),t()()(),e(28,"div",18),m(29,"input",19),t()(),e(30,"div",10)(31,"div",11)(32,"label",17),n(33,"Feature Header: "),t()(),e(34,"div",18),m(35,"input",20),t()(),e(36,"div",10)(37,"div",11)(38,"label",21),n(39,"Description: "),e(40,"span",13),n(41,"*"),t()()(),e(42,"div",18),m(43,"textarea",22),t()(),e(44,"div",10)(45,"div",11)(46,"label",23),n(47,"Value Type: "),e(48,"span",13),n(49,"*"),t()()(),e(50,"div",24)(51,"select",25),u("change",function(){return i.fieldChange()}),e(52,"option",26),n(53,"Number"),t(),e(54,"option",27),n(55,"Boolean"),t(),e(56,"option",28),n(57,"List"),t(),e(58,"option",29),n(59,"Text"),t()()(),e(60,"div",30)(61,"label",31),n(62,"Data Size: "),e(63,"span",13),n(64,"*"),t()()(),e(65,"div",11),m(66,"input",32),t()(),e(67,"div",10)(68,"div",11)(69,"label",33),n(70,"List Option:"),t()(),e(71,"div",34)(72,"table",35)(73,"thead")(74,"tr")(75,"th"),n(76,"Captions"),t(),e(77,"th"),n(78,"Values"),t()()(),e(79,"tbody",36),f(80,pe,6,1,"tr",37),t()()(),e(81,"div",38)(82,"button",39),u("click",function(){return i.addOption(!0)}),m(83,"img",40),t()()(),e(84,"div",10)(85,"div",11)(86,"label",41),n(87,"Default Value: "),e(88,"span",13),n(89,"*"),t()()(),e(90,"div",42),f(91,se,5,2,"select",43)(92,de,1,0,"input",44)(93,ce,1,0,"input",45),t(),e(94,"div",46),m(95,"input",47),t(),e(96,"div",48)(97,"label"),n(98," Is User Configuration Setting "),t()()(),e(99,"div",10)(100,"div",11)(101,"label",49),n(102,"Disabling Value"),e(103,"span",13),n(104,"*"),t()()(),e(105,"div",42),f(106,ue,5,2,"select",50)(107,ge,1,0,"input",51)(108,fe,1,0,"input",52),t()(),e(109,"div",10)(110,"div",11)(111,"label",49),n(112,"Module"),e(113,"span",13),n(114,"*"),t()()(),e(115,"div",42)(116,"select",53),h(117,be,2,2,"option",54,v),t()()(),e(119,"div",10)(120,"div",11)(121,"label",23),n(122,"Category: "),t()(),e(123,"div",24)(124,"select",55),h(125,Se,2,2,"option",54,v),t()()(),e(127,"div",10)(128,"div",11)(129,"label",23),n(130,"Sub Category: "),t()(),e(131,"div",24)(132,"select",56),h(133,ve,2,2,"option",54,v),t()()(),e(135,"div",10)(136,"div",11)(137,"label",57),n(138,"Setting Header Tagging:"),t()(),e(139,"div",14),m(140,"input",58),t()(),e(141,"div",10)(142,"div",11)(143,"label",57),n(144,"Serial Number:"),t()(),e(145,"div",24),m(146,"input",59),t()()()()(),m(147,"footer",60)),a&2){let s,g;l(3),b(i.formHeading),l(2),p("disabled",i.mode=="view"),l(6),p("formGroup",i.settingsForm),l(),p("formGroupName","data"),l(9),p("ngIf",((s=i.settingsForm.get("data.settingName"))==null?null:s.hasError("noSpaces"))&&((s=i.settingsForm.get("data.settingName"))==null?null:s.touched)),l(59),p("ngForOf",i.options.controls),l(2),p("disabled",((g=i.settingsForm.get("data.options"))==null?null:g.disabled)||((g=i.settingsForm.get("data.dataType"))==null?null:g.value)!="List"),l(9),A(i.dataTypeValue==="Boolean"?91:i.dataTypeValue==="Number"?92:93),l(15),A(i.dataTypeValue==="Boolean"?106:i.dataTypeValue==="Number"?107:108),l(11),y(i.module),l(8),y(i.category),l(8),y(i.subcategory)}},dependencies:[P,I,R,ee,U,X,Y,G,q,B,W,L,j,$,Q,J,K],styles:["h4[_ngcontent-%COMP%]{font-size:20px;font-weight:500}label[_ngcontent-%COMP%], input[type=select][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500}input[type=checkbox][_ngcontent-%COMP%]{line-height:normal;width:20px;height:20px}.star[_ngcontent-%COMP%]{color:red}.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:#007bff40;box-shadow:0 0 0 .1rem #007bff40}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{font-size:14px}#save[_ngcontent-%COMP%]{background-color:#336799;color:#fff;font-size:14px}#back[_ngcontent-%COMP%]{color:#336799;border:1px solid rgba(51,103,153,1);font-size:14px}#back[_ngcontent-%COMP%]:hover, #save[_ngcontent-%COMP%]:hover{background-color:#336899ac;color:#fff;border:none}.dialog-button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:none}#save[_ngcontent-%COMP%]{background-color:#4081bf;color:#fff;font-size:14px;font-weight:200}#close[_ngcontent-%COMP%]{border:1px solid rgba(64,129,191,1);color:#4081bf;font-size:14px;font-weight:200}.search-button[_ngcontent-%COMP%]{background-color:#3581ca;border:none;border-radius:2px;padding:2px 8px 0;cursor:pointer;box-shadow:2px 2px 4px #717171}.option-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid rgba(22,22,22,.211)}thead[_ngcontent-%COMP%]{background-color:#b9b9b97a}.option-table[_ngcontent-%COMP%]{width:100%}.option-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none}.option-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;font-size:medium;font-weight:500}.errorText[_ngcontent-%COMP%]{font-size:12px;color:red}"]})};function he(){return r=>(r.value||"").includes(" ")?{noSpaces:!0}:null}var Je=[{path:"",component:_},{path:"app-setting-form",component:F}];export{Je as AppSetting_routes};
