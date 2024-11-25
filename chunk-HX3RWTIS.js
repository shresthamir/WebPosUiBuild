import{c as G,g as K}from"./chunk-U5PHRH2R.js";import{c as R}from"./chunk-OSBE524Y.js";import{E,F as A,G as B,H as j,I as W,J as C,K as L,P as z,n as N,p as k,q as D,s as P,t as O,u as T}from"./chunk-AU4LS4EU.js";import{$ as x,ga as q,k as V,m as w}from"./chunk-IOQHTKTC.js";import{$a as l,$b as b,Cb as i,Db as r,Eb as s,F as y,Kc as I,Lb as f,N as F,Vb as a,Zb as g,_a as d,_b as u,bc as h,ja as v,tb as m,yc as _}from"./chunk-VBZWTO5P.js";var S=class p{constructor(n){this.tableFetchService=n}varianttableColumns=_(()=>[...this.tableFetchService.tableColumns(),{header:"ACTION",def:"ACTION"}]);varianttableData=_(()=>this.tableFetchService.tableData());ngOnInit(){this.tableFetchService.getTableData("getAllVariants"),this.tableFetchService.selectedTab.set("variant-reg-form")}static \u0275fac=function(t){return new(t||p)(l(C))};static \u0275cmp=v({type:p,selectors:[["app-variant-reg"]],standalone:!0,features:[h],decls:9,vars:4,consts:[[1,"container","mt-3"],[1,"heading","fw-bold","fs-5"],[1,"border-bottom","border-secondary"],[1,"container","d-flex","flex-column","flex-grow-1"],[1,"row"],[1,"col-md-6","mt-2","ms-auto"],[3,"columns","dataSource"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"h5",1),a(2,"Variant Registration"),r()(),s(3,"div",2),i(4,"div",3)(5,"div",4)(6,"div",5),s(7,"app-generic-filter",6),r()(),s(8,"app-generic-table",6),r()),t&2&&(d(7),m("columns",e.varianttableColumns())("dataSource",e.varianttableData()),d(),m("columns",e.varianttableColumns())("dataSource",e.varianttableData()))},dependencies:[z,L]})};var M=class p{constructor(n,t,e,c,o,U,X,Y){this.fb=n;this.route=t;this.router=e;this.tableFetchService=c;this.dialog=o;this.location=U;this.apiService=X;this.snackBarService=Y}mode="add";variantId;variantName;description;loading;ngOnInit(){this.route.queryParams.subscribe(n=>{let t=n.mode;this.variantId=n.id,t&&this.variantId&&(t==="view"&&(this.mode="view"),t==="edit"&&(this.mode="edit"),n={variantID:this.variantId},this.getViewApi("getAppVariantByID",n))})}getViewApi(n,t){this.apiService.get(n,t).subscribe(e=>{e?.result&&(this.variantId=e.result.VariantID,this.variantName=e.result.VariantName,this.description=e.result.Description)})}goBack(){this.location.back()}saveVariant(){if(!this.variantId||!this.variantName||!this.description){alert("Please fill in all the required fields.");return}let n={mode:this.mode,data:{variantID:this.variantId,variantName:this.variantName,description:this.description}};this.apiService.post("saveAppVariant",n).pipe(F(()=>{this.loading=!1}),y(t=>(console.error("Error:",t),this.snackBarService.showError("Error while registering variant"),t))).subscribe(t=>{this.snackBarService.showSuccess("variant registered successfully"),this.router.navigate(["/variant-reg"])})}static \u0275fac=function(t){return new(t||p)(l(A),l(V),l(w),l(C),l(G),l(I),l(W),l(q))};static \u0275cmp=v({type:p,selectors:[["variant-reg-form"]],standalone:!0,features:[h],decls:38,vars:7,consts:[[1,"container","my-1","d-flex","justify-content-between","align-items-center"],[1,"col-md-6"],[1,"mb-0","heading"],[1,"col-md-6","d-flex","justify-content-end"],["id","save",1,"btn","me-2","px-4",3,"click","disabled"],["id","back",1,"btn","px-4",3,"click"],[1,"border-bottom","mb-3"],[1,"container"],[3,"ngSubmit"],[1,"row","mb-2"],[1,"col-12","col-md-2"],["for","variantId",1,"form-label"],[1,"star"],[1,"col-12","col-md-5"],["type","text","id","variantId","name","variantId","required","",1,"form-control","px-2","py-1",3,"ngModelChange","ngModel","disabled"],["for","variantName",1,"form-label"],["type","text","id","variantName","name","variantName","required","",1,"form-control","px-2","py-1",3,"ngModelChange","ngModel","disabled"],["for","description",1,"form-label"],["type","text","id","description","name","description","required","",1,"form-control","px-2","py-1",3,"ngModelChange","ngModel","disabled"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Variant Registration"),r()(),i(4,"div",3)(5,"button",4),f("click",function(){return e.saveVariant()}),a(6,"SAVE"),r(),i(7,"button",5),f("click",function(){return e.goBack()}),a(8,"BACK"),r()()(),s(9,"div",6),i(10,"div",7)(11,"div",7)(12,"form",8),f("ngSubmit",function(){return e.saveVariant()}),i(13,"div",9)(14,"div",10)(15,"label",11),a(16,"Variant ID: "),i(17,"span",12),a(18,"*"),r()()(),i(19,"div",13)(20,"input",14),b("ngModelChange",function(o){return u(e.variantId,o)||(e.variantId=o),o}),r()()(),i(21,"div",9)(22,"div",10)(23,"label",15),a(24,"Variant Name: "),i(25,"span",12),a(26,"*"),r()()(),i(27,"div",13)(28,"input",16),b("ngModelChange",function(o){return u(e.variantName,o)||(e.variantName=o),o}),r()()(),i(29,"div",9)(30,"div",10)(31,"label",17),a(32,"Description: "),i(33,"span",12),a(34,"*"),r()()(),i(35,"div",13)(36,"textarea",18),b("ngModelChange",function(o){return u(e.description,o)||(e.description=o),o}),a(37,"                "),r()()()()()()),t&2&&(d(5),m("disabled",e.mode=="view"),d(15),g("ngModel",e.variantId),m("disabled",e.mode!="add"),d(8),g("ngModel",e.variantName),m("disabled",e.mode==="view"),d(8),g("ngModel",e.description),m("disabled",e.mode==="view"))},dependencies:[j,T,N,k,D,E,B,O,P,R,x,K],styles:["h4[_ngcontent-%COMP%]{font-size:20px;font-weight:500}label[_ngcontent-%COMP%], input[type=select][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500}.star[_ngcontent-%COMP%]{color:red}.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:#007bff40;box-shadow:0 0 0 .1rem #007bff40}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{font-size:14px}.footer[_ngcontent-%COMP%]{width:100vw;position:fixed;bottom:5px;padding:1rem;background-color:#ffffff26;box-shadow:0 0 0 .2rem #7e7e7e22;border-top:1px solid #dee2e6}#save[_ngcontent-%COMP%]{background-color:#336799;color:#fff;font-size:14px}#back[_ngcontent-%COMP%]{color:#336799;border:1px solid rgba(51,103,153,1);font-size:14px}#back[_ngcontent-%COMP%]:hover, #save[_ngcontent-%COMP%]:hover{background-color:#336899ac;color:#fff;border:none}.dialog-button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:none}.search-button[_ngcontent-%COMP%]{background-color:#007bff;border:none;border-radius:4px;padding:3px 12px;cursor:pointer}.check-box[_ngcontent-%COMP%]{height:1.1rem;width:1.1rem}"]})};var Fe=[{path:"",component:S},{path:":variant-reg-form",component:M}];export{Fe as Variant_routes};
