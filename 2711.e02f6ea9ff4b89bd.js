(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[2711],{49457:function(x,A){var T;void 0!==(T=function(){"use strict";function p(a,u,y){var m=new XMLHttpRequest;m.open("GET",a),m.responseType="blob",m.onload=function(){e(m.response,u,y)},m.onerror=function(){console.error("could not download file")},m.send()}function f(a){var u=new XMLHttpRequest;u.open("HEAD",a,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function l(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(u)}}var _="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,v=_.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),e=_.saveAs||("object"!=typeof window||window!==_?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(a,u,y){var m=_.URL||_.webkitURL,C=document.createElement("a");C.download=u=u||a.name||"download",C.rel="noopener","string"==typeof a?(C.href=a,C.origin===location.origin?l(C):f(C.href)?p(a,u,y):l(C,C.target="_blank")):(C.href=m.createObjectURL(a),setTimeout(function(){m.revokeObjectURL(C.href)},4e4),setTimeout(function(){l(C)},0))}:"msSaveOrOpenBlob"in navigator?function(a,u,y){if(u=u||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function g(a,u){return typeof u>"u"?u={autoBom:!1}:"object"!=typeof u&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,y),u);else if(f(a))p(a,u,y);else{var m=document.createElement("a");m.href=a,m.target="_blank",setTimeout(function(){l(m)})}}:function(a,u,y,m){if((m=m||open("","_blank"))&&(m.document.title=m.document.body.innerText="downloading..."),"string"==typeof a)return p(a,u,y);var C="application/octet-stream"===a.type,N=/constructor/i.test(_.HTMLElement)||_.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||C&&N||v)&&typeof FileReader<"u"){var F=new FileReader;F.onloadend=function(){var M=F.result;M=E?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=M:location=M,m=null},F.readAsDataURL(a)}else{var O=_.URL||_.webkitURL,d=O.createObjectURL(a);m?m.location=d:location.href=d,m=null,setTimeout(function(){O.revokeObjectURL(d)},4e4)}});_.saveAs=e.saveAs=e,x.exports=e}.apply(A,[]))&&(x.exports=T)},98692:(x,A,s)=>{"use strict";s.d(A,{n:()=>T});var b=s(66274);let T=(()=>{class g{constructor(f){this.el=f}onKeyDown(f){let l=f;if(this.OnlyNumber){if(-1!==[46,8,9,27,13,110].indexOf(l.keyCode)||190==l.keyCode&&!1===l.shiftKey||65==l.keyCode&&!0===l.ctrlKey||67==l.keyCode&&!0===l.ctrlKey||88==l.keyCode&&!0===l.ctrlKey||l.keyCode>=35&&l.keyCode<=39)return;(l.shiftKey||l.keyCode<48||l.keyCode>57)&&(l.keyCode<96||l.keyCode>105)&&l.preventDefault()}}}return g.\u0275fac=function(f){return new(f||g)(b.Y36(b.SBq))},g.\u0275dir=b.lG2({type:g,selectors:[["","OnlyNumber",""]],hostBindings:function(f,l){1&f&&b.NdJ("keydown",function(v){return l.onKeyDown(v)})},inputs:{OnlyNumber:"OnlyNumber"}}),g})()},82738:(x,A,s)=>{"use strict";s.d(A,{b:()=>_});var b=s(92752),T=s(72533),g=s(87584),p=s(71800),f=s(53074),l=s(66274);let _=(()=>{class v{static forRoot(){return{ngModule:v,providers:[f.P,g.p]}}}return v.\u0275fac=function(a){return new(a||v)},v.\u0275mod=l.oAB({type:v}),v.\u0275inj=l.cJS({imports:[b.ez,p.zk.forRoot(),T.JX]}),v})()},77879:(x,A,s)=>{"use strict";s.d(A,{H:()=>g});var b=s(66274),T=s(53074);let g=(()=>{class p{constructor(l){this.masterRepo=l}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return p.\u0275fac=function(l){return new(l||p)(b.Y36(T.P))},p.\u0275dir=b.lG2({type:p,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),p})()},12711:(x,A,s)=>{"use strict";s.r(A),s.d(A,{CustomerModule:()=>se});var b=s(89953),T=s(92752),g=s(72533),p=s(12640),f=s(82738),l=s(71800),_=s(53181),v=s(49457),e=s(66274),a=s(48083),u=s(23804),y=s(67311),m=s(14970),C=s(79765),N=s(76165),E=s(67297),F=s(71180);let O=(()=>{class r{constructor(t,o,n){this.http=t,this.authService=o,this.state=n;const i=this.state.getGlobalSetting("apiUrl");i&&i.length>0&&(this.apiUrl=i)}postCustomerProfile(t){return this.http.post(this.apiUrl+"/SaveCustomerProfile",{data:t})}getCustomerProfileListGroup(){return this.http.get(this.apiUrl+"/getCustomerProfileList")}getCustomerProfileListByID(t){return this.http.get(this.apiUrl+`/getCustomerProfileListByID/${t}`)}checkTransactionHistory(t){return this.http.get(this.apiUrl+`/checkCustomerInTransaction/${t}`)}getCustomerForEdit(t){let o={status:"error",result:""},n=new C.xQ,i={mode:"query",data:{NAME:t}};const h={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+"/getCustomerMaster",i,h).subscribe(S=>{n.next(S),n.unsubscribe()},S=>{o.status="error",o.result=S,n.next(o),n.unsubscribe()}),n}deleteCustomerFromCustomerProfile(t){return this.http.post(this.apiUrl+"/deleteCustomerFromCustomerProfile",{mode:"query",data:{CUSTID:t}})}downloadExcelReport(){return this.http.get(this.apiUrl+"/getExcelForCustomerProfileList",{responseType:"blob"})}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(N.eN),e.LFG(E.e),e.LFG(F.q))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var d=s(7587),M=s(77879);let L=(()=>{class r{transform(t,o,n){if(t){if(!o)return t;if("searchName"==n)return t.filter(i=>{const h=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(i.CUSTNAME?i.CUSTNAME.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(h))return i});if("searchMobileNo"==n)return t.filter(i=>{const h=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(i.MOBILENO?i.MOBILENO.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(h))return i})}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=e.Yjl({name:"searchData",type:r,pure:!1}),r})();function Z(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td",28),e._uU(2),e.qZA(),e.TgZ(3,"td",29),e._uU(4),e.qZA(),e.TgZ(5,"td",30),e._uU(6),e.qZA(),e.TgZ(7,"td",31),e._uU(8),e.qZA(),e.TgZ(9,"td",31),e._uU(10),e.qZA(),e.TgZ(11,"td",32)(12,"button",33),e.NdJ("click",function(){const i=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.onViewClicked(i))}),e._uU(13," View"),e.qZA(),e.TgZ(14,"button",34,6),e.NdJ("click",function(){const i=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.onEditClicked(i))}),e._uU(16,"Edit"),e.qZA(),e.TgZ(17,"button",35,6),e.NdJ("click",function(){const i=e.CHM(t).$implicit,h=e.oxw(2);return e.KtG(h.deleteCustomer(i))}),e._uU(19," Delete"),e.qZA()()()}if(2&r){const t=c.$implicit,o=c.index,n=e.MAs(15),i=e.oxw(2);e.xp6(2),e.Oqu(o+1+(i.currentPage-1)*i.itemsPerPage),e.xp6(2),e.Oqu(t.CUSTNAME),e.xp6(2),e.Oqu(t.ADDRESS),e.xp6(2),e.Oqu(t.MOBILENO),e.xp6(2),e.Oqu(t.PANNO),e.xp6(4),e.Q6J("disabled",n.isOldFYearDB()),e.xp6(3),e.Q6J("disabled",n.isOldFYearDB())}}const P=function(r,c,t){return{itemsPerPage:r,currentPage:c,totalItems:t}};function w(r,c){if(1&r&&(e.ynx(0),e.YNc(1,Z,20,7,"tr",27),e.ALo(2,"paginate"),e.ALo(3,"searchData"),e.BQk()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.customerLists,t.filter,t.searchProduct),e.kEZ(8,P,t.itemsPerPage,t.currentPage,t.totalCount)))}}function U(r,c){1&r&&(e.ynx(0),e.TgZ(1,"tr")(2,"td",36)(3,"div",37),e._uU(4,"Customer Group Information are unavailable."),e.qZA()()(),e.BQk())}function I(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div",38)(1,"div",39)(2,"div",40)(3,"pagination-controls",41),e.NdJ("pageChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.customerPagination(n))}),e.qZA()()()()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("directionLinks",t.directionLinks)}}let D=(()=>{class r{constructor(t,o,n,i,h){this.router=t,this.title=o,this.alertService=n,this.spinnerService=i,this.customerService=h,this.customerLists=[],this.isLoader=!0,this.currentPage=1,this.itemsPerPage=20,this.offset=0,this.directionLinks=!0,this.searchProduct="searchName"}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/dashboard"]))}ngOnInit(){this.customerService.getCustomerProfileListGroup().subscribe(t=>{t?(this.isLoader=!1,this.customerLists=t||[]):(this.isLoader=!1,this.customerLists=[],this.errorMessage="Something went wrong.")},t=>{this.isLoader=!1,this.customerLists=[],this.errorMessage="Something went wrong."})}insertText(){}onViewClicked(t){try{this.router.navigate(["./pages/masters/customer/add-customer",{name:t.CUSTID,mode:"view",returnUrl:this.router.url}])}catch(o){this.alertService.info(o)}}onEditClicked(t){try{this.customerService.checkTransactionHistory(t.CUSTID).subscribe(o=>{if(console.log("cehck transac",o),"ok"==o.status){if("EXIST"==o.result)return void this.alertService.info("This customer exists in transaction history, cannot edit.");this.router.navigate(["./pages/masters/customer/add-customer",{name:t.CUSTID,mode:"edit",returnUrl:this.router.url}])}})}catch(o){this.alertService.info(o)}}deleteCustomer(t){confirm("Are you sure you want to delete "+t.CUSTNAME+" ?")&&this.customerService.deleteCustomerFromCustomerProfile(t.CUSTID).subscribe(o=>{"ok"==o.status?(this.alertService.info(o.result),this.customerService.getCustomerProfileListGroup().subscribe(n=>{n?(this.isLoader=!1,this.customerLists=n||[]):(this.isLoader=!1,this.customerLists=[],this.errorMessage="Something went wrong.")})):this.alertService.info(o.result.error)},o=>{this.alertService.info(o.error)})}customerPagination(t){this.isLoader=!0,this.currentPage=t;const o=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{o.isLoader=!1},500)}addCustomer(){try{this.router.navigate(["./pages/masters/customer/add-customer",{mode:"add",returnUrl:this.router.url}])}catch(t){this.alertService.info(t)}}onExport(){console.log("export button clicked");this.spinnerService.show("Excel file is downloading..Please wait"),this.customerService.downloadExcelReport().subscribe(n=>{this.spinnerService.hide();let i=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});v.saveAs(i,"Customer Profile Details.xlsx")},n=>{this.spinnerService.hide()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.F0),e.Y36(u.Dx),e.Y36(y.c),e.Y36(m.V),e.Y36(O))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-list"]],hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(i){return o.updown(i)},!1,e.evT)},decls:47,vars:15,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[2,"white-space","nowrap","font-family","Segoe UI Light","font-weight","bold","font-size","20px","padding-left","4%","width","192px"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"btn","btn-info","pull-right",2,"font-size","12px",3,"click"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[1,"searchBy"],["type","radio","name","item","value","searchName",3,"ngModel","ngModelChange"],["type","radio","name","item","value","searchMobileNo",3,"ngModel","ngModelChange"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter","autocomplete","off",1,"form-control",2,"height","1.5rem","font-size","13px",3,"ngModel","change","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","18%"],["scope","col",2,"width","13%"],["scope","col",2,"width","8%"],["scope","col",2,"text-align","center","width","18%"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","3%"],[2,"width","18%"],[2,"width","13%"],[2,"width","8%"],[2,"width","18%","text-align","center"],["type","button","data-toggle","modal",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px",3,"click"],["appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px","color","white",3,"disabled","click"],["type","button","data-toggle","modal","appOldFYearDB","",1,"btn","btn-sm","btn-info","mr-1","btn-sm",2,"width","60px",3,"disabled","click"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"CUSTOMER PROFILE MASTER"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e._uU(6,"Back"),e.qZA(),e.TgZ(7,"button",5,6),e.NdJ("click",function(){return o.addCustomer()}),e._uU(9,"Add Customer"),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return o.onExport()}),e._uU(11,"Export Details"),e.qZA()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"span"),e._uU(17,"Customer Profile Lists"),e.qZA(),e.TgZ(18,"div",12)(19,"input",13),e.NdJ("ngModelChange",function(i){return o.searchProduct=i}),e.qZA(),e._uU(20," Search By Name \xa0 "),e.TgZ(21,"input",14),e.NdJ("ngModelChange",function(i){return o.searchProduct=i}),e.qZA(),e._uU(22," Search By Mobile No "),e.qZA(),e.TgZ(23,"div",15)(24,"input",16),e.NdJ("change",function(){return o.insertText()})("ngModelChange",function(i){return o.filter=i}),e.qZA()()(),e.TgZ(25,"div",17)(26,"table",18)(27,"thead")(28,"tr",19)(29,"th",20),e._uU(30,"S.N"),e.qZA(),e.TgZ(31,"th",21),e._uU(32,"Name"),e.qZA(),e.TgZ(33,"th",22),e._uU(34,"Address"),e.qZA(),e.TgZ(35,"th",23),e._uU(36,"Mobile No."),e.qZA(),e.TgZ(37,"th",23),e._uU(38,"PAN No."),e.qZA(),e.TgZ(39,"th",24),e._uU(40,"Action"),e.qZA()()(),e.TgZ(41,"tbody"),e.YNc(42,w,4,12,"ng-container",25),e.YNc(43,U,5,0,"ng-container",25),e.ALo(44,"searchData"),e.qZA()()(),e.YNc(45,I,4,1,"div",26),e.ALo(46,"searchData"),e.qZA()()()),2&t){const n=e.MAs(8);e.xp6(7),e.Q6J("disabled",n.isOldFYearDB()),e.xp6(12),e.Q6J("ngModel",o.searchProduct),e.xp6(2),e.Q6J("ngModel",o.searchProduct),e.xp6(3),e.Q6J("ngModel",o.filter),e.xp6(18),e.Q6J("ngIf",o.customerLists&&o.customerLists.length>0),e.xp6(1),e.Q6J("ngIf",o.customerLists&&0===e.Dn7(44,7,o.customerLists,o.filter,o.searchProduct).length),e.xp6(2),e.Q6J("ngIf",o.customerLists&&e.Dn7(46,11,o.customerLists,o.filter,o.searchProduct).length>o.itemsPerPage)}},dependencies:[T.sg,T.O5,a.rH,d.Fj,d._,d.JJ,d.On,g.LS,M.H,g._s,L],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:675px!important}.card-footer[_ngcontent-%COMP%]{height:6vh}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:18rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),r})();var R=s(92340),B=s(53074),J=s(98692),k=s(99515);const Y=["customerName"];function q(r,c){1&r&&(e.TgZ(0,"span"),e._uU(1,"Name is required."),e.qZA())}function V(r,c){if(1&r&&(e.TgZ(0,"div",32),e.YNc(1,q,2,0,"span",31),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.customerForm.controls.name.errors.required)}}function Q(r,c){1&r&&(e.TgZ(0,"span"),e._uU(1,"Address is required."),e.qZA())}function G(r,c){if(1&r&&(e.TgZ(0,"div",32),e.YNc(1,Q,2,0,"span",31),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.customerForm.controls.address.errors.required)}}function H(r,c){1&r&&(e.TgZ(0,"span",33),e._uU(1,"*"),e.qZA())}function K(r,c){1&r&&(e.TgZ(0,"span"),e._uU(1,"PAN No must be 9 digit long."),e.qZA())}function j(r,c){if(1&r&&(e.TgZ(0,"div",32),e.YNc(1,K,2,0,"span",31),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.customerForm.controls.pan.errors.minlength||t.customerForm.controls.pan.errors.maxlength)}}function z(r,c){1&r&&(e.TgZ(0,"span"),e._uU(1,"Mobile No must be 10 digit long."),e.qZA())}function W(r,c){if(1&r&&(e.TgZ(0,"div",32),e.YNc(1,z,2,0,"span",31),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.customerForm.controls.mobNo.errors.minlength||t.customerForm.controls.mobNo.errors.maxlength)}}function X(r,c){1&r&&(e.TgZ(0,"div",14)(1,"label",15),e._uU(2,"Mobile No Register in:"),e.qZA(),e.TgZ(3,"div",16)(4,"select",34),e._UZ(5,"option",28),e.TgZ(6,"option",35),e._uU(7,"Viber"),e.qZA(),e.TgZ(8,"option",36),e._uU(9,"Whatsapp"),e.qZA()()()())}function $(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"app-multi-input",37),e.NdJ("shipadress",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.getSHippingAddress(n))}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("mode",t.mode)("ShippingArray",t.onViewShippingList)("resetform",t.onChildresetform)("height",8)("multiInputLabelName",t.shippingLabel)("showDefault",!0)}}function ee(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"app-multi-input",37),e.NdJ("shipadress",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.getVehicleNumber(n))}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("mode",t.mode)("ShippingArray",t.onViewVehicleList)("resetform",t.onChildresetform)("height",8)("multiInputLabelName","Vehicle Selection")("showDefault",!1)}}function te(r,c){if(1&r){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",38)(2,"input",39),e.NdJ("change",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.customerForm.value.createMember=n.target.checked?1:0)}),e.qZA(),e.TgZ(3,"label",40),e._uU(4,"Create Customer Profile as Member Also"),e.qZA()(),e._UZ(5,"div",41),e.qZA()}}const oe=[{path:"",component:D},{path:"add-customer",component:(()=>{class r{constructor(t,o,n,i,h,S,ae,ce){this.fb=t,this.spinnerService=o,this.alertService=n,this.customerService=i,this.router=h,this.masterService=S,this._activatedRoute=ae,this.authService=ce,this.shippingLabel="Shipping location",this.onChildresetform=!1,this.onViewShippingList=[],this.onViewVehicleList=[],this.mode="add",this.viewMode=!1,this.modeTitle="",this.initialTextReadOnly=!1,this.CustID="",this.userSetting=this.authService.getSetting(),this.AppMode=R.N.appMode}updown(t){"Escape"===t.code&&(t.preventDefault(),this.router.navigate(["./pages/masters/customer"]))}ngOnInit(){try{if(this.customerForm=this.fb.group({name:["",[d.kI.required]],address:["",[d.kI.required]],pan:["",[d.kI.minLength(9),d.kI.maxLength(9)]],phoneNo:[""],mobNo:["",[d.kI.minLength(10),d.kI.maxLength(10)]],email:[""],createMember:[0],MOBILENO_REG_IN:[""],FurtherProceed:[""],CUSTID:[""],STATUS:[1],ShippingList:[],VehicleList:[]}),this._activatedRoute.snapshot.params.mode&&"view"===this._activatedRoute.snapshot.params.mode&&(this.viewMode=!0,this.mode="view",this.customerForm.get("name").disable(),this.customerForm.get("address").disable(),this.customerForm.get("pan").disable(),this.customerForm.get("mobNo").disable(),this.customerForm.get("email").disable(),this.customerForm.get("phoneNo").disable(),this.customerForm.get("MOBILENO_REG_IN").disable(),this.customerForm.get("STATUS").disable()),this.customerForm.controls.createMember.patchValue(1==this.masterService.userSetting.CREATE_CPROFILE_AS_MEMBER&&"pro"==this.AppMode?1:0),this._activatedRoute.snapshot.params.returnUrl&&(this.returnUrl=this._activatedRoute.snapshot.params.returnUrl),this._activatedRoute.snapshot.params.name){let t="";t=this._activatedRoute.snapshot.params.name,this.CustID=this._activatedRoute.snapshot.params.name,this.spinnerService.show("Getting data, Please wait..."),this.customerService.getCustomerProfileListByID(this.CustID).subscribe(o=>{"ok"===o.status?(this.spinnerService.hide(),this.customerForm.patchValue({name:o.result[0].CUSTNAME,address:o.result[0].ADDRESS,pan:o.result[0].PANNO,mobNo:o.result[0].MOBILENO,email:o.result[0].EMAIL,phoneNo:o.result[0].PHONE,MOBILENO_REG_IN:o.result[0].REGMOBILE,STATUS:o.result[0].STATUS}),this.onViewShippingList=o.result[0].ShippingList,this.onViewVehicleList=o.result[0].VehicleList?.map(n=>({NAME:n.VEHICLE_NO})),this.customerForm.controls.ShippingList.patchValue(o.result[0].ShippingList),this.customerForm.controls.VehicleList.patchValue(o.result[0].VehicleList),"edit"===this._activatedRoute.snapshot.params.mode?(this.modeTitle="Edit Customer Master",this.mode="edit"):"view"===this._activatedRoute.snapshot.params.mode&&(this.mode="view",this.modeTitle="View Customer Master"),this.initialTextReadOnly=!0):this.alertService.info(o.result)},o=>{this.spinnerService.hide(),this.alertService.info(o._body)})}else this.mode="add",this.modeTitle="Add Customer Master",this.initialTextReadOnly=!1}catch(t){this.alertService.info(t)}}ngAfterViewInit(){setTimeout(()=>this.customerNameEl.nativeElement.focus())}onclear(){this.customerForm.reset(),this.onChildresetform=!0,1==this.masterService.userSetting.CREATE_CPROFILE_AS_MEMBER&&this.customerForm.controls.createMember.patchValue(!0)}getSHippingAddress(t){this.customerForm.controls.ShippingList.patchValue(t),console.log("CUSTOMERFORM",this.customerForm)}getVehicleNumber(t){if(t?.length){const o=t.map(n=>({Vehicle_NO:n.NAME}));this.customerForm.controls.VehicleList.patchValue(o)}}onSubmit(){console.log("CUstomerform",this.customerForm.value),"edit"==this.mode&&(this.customerForm.value.CUSTID=this.CustID),1!=this.masterService.userSetting.ValidatePanNumber||""!=this.customerForm.value.pan?"B2B"!==this.masterService.userSetting.CompanyType||""!=this.customerForm.value.pan?""!=this.customerForm.value.name?""!=this.customerForm.value.address?((""==this.customerForm.value.mobNo||null==this.customerForm.value.mobNo)&&(this.customerForm.value.MOBILENO_REG_IN=""),this.spinnerService.show("Data is Saving ..."),this.masterService.saveCustomerProfile(this.customerForm.value,this.mode).subscribe(o=>{"ok"==o.status?(this.spinnerService.hide(),"ProceedConfirmation"==o.result?confirm("Member is not Created in  Server.Do you want to Process..")?(this.customerForm.value.FurtherProceed="ProceedConfirmationYes",this.onSubmit()):(this.onclear(),this.alertService.hide()):(this.onclear(),this.alertService.info(o.result),setTimeout(()=>{this.alertService.hide()},500),this.router.navigate(["./pages/masters/customer/"]))):(this.alertService.info(o.result),this.spinnerService.hide())},o=>{this.spinnerService.hide()})):this.alertService.info("Please Enter the Address!!!"):this.alertService.info("Please Enter the Name!!!"):this.alertService.info("PAN/VAT No is Required"):this.alertService.info("Please Enter the PAN No.!!!")}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.qu),e.Y36(m.V),e.Y36(y.c),e.Y36(O),e.Y36(a.F0),e.Y36(B.P),e.Y36(a.gz),e.Y36(E.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-form"]],viewQuery:function(t,o){if(1&t&&e.Gf(Y,5),2&t){let n;e.iGM(n=e.CRH())&&(o.customerNameEl=n.first)}},hostBindings:function(t,o){1&t&&e.NdJ("keydown",function(i){return o.updown(i)},!1,e.evT)},decls:69,vars:18,consts:[[1,"sticky-top","row"],[1,"col-md-12"],[1,"row"],[1,"col-md-6"],[2,"white-space","nowrap","font-family","Segoe UI Light","font-weight","bold","font-size","20px","padding-left","4%","width","192px"],[2,"float","right",3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-info",2,"font-size","12px",3,"disabled"],["save",""],["type","button","routerLink","/pages/masters/customer","title","Cancel",1,"btn","btn-info",2,"font-size","12px"],[1,"card"],[1,"card-header"],[1,"page-title"],[1,"card-body"],[1,"form-horizontal",2,"margin-top","15px",3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col-sm-3","form-control-label",2,"margin-left","-12px"],[1,"col-sm-7"],["type","text","id","Parent","formControlName","name","autocomplete","off",1,"form-control",2,"height","4vh",3,"readOnly"],["customerName",""],["class","invalid-feedback d-block",4,"ngIf"],["type","text","formControlName","address","autocomplete","off",1,"form-control",2,"height","4vh",3,"readOnly"],["style","color: red",4,"ngIf"],["type","text","OnlyNumber","true","maxlength","9","id","Parent","formControlName","pan","autocomplete","off",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","id","Parent","formControlName","phoneNo","autocomplete","off",1,"form-control",2,"height","4vh",3,"readOnly"],["type","text","OnlyNumber","true","maxlength","10","id","Parent","formControlName","mobNo","autocomplete","off",1,"form-control",2,"height","4vh"],["class","form-group row",4,"ngIf"],["type","email","id","Parent","formControlName","email","autocomplete","off",1,"form-control",2,"height","4vh",3,"readOnly"],["formControlName","STATUS",1,"form-control",2,"padding","1px 5px"],["value",""],["value","1"],["value","0"],[4,"ngIf"],[1,"invalid-feedback","d-block"],[2,"color","red"],["formControlName","MOBILENO_REG_IN",1,"form-control",2,"padding","1px 5px"],["value","VIBER"],["value","WHATSAPP"],[3,"mode","ShippingArray","resetform","height","multiInputLabelName","showDefault","shipadress"],[1,"col-sm-5"],["type","checkbox","id","createMember","formControlName","createMember",1,"form-control",2,"height","59%","width","5%",3,"change"],[1,"form-control-label",2,"width","100%","margin-top","-14%","margin-left","10%"],[1,"col-sm-3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"CUSTOMER PROFILE MASTER"),e.qZA()(),e.TgZ(6,"div",3)(7,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(8,"button",6,7),e._uU(10,"Save"),e.qZA(),e.TgZ(11,"button",8),e._uU(12,"Back"),e.qZA()()()()()(),e.TgZ(13,"div",9)(14,"div",10)(15,"h5",11),e._uU(16),e.qZA()(),e.TgZ(17,"div",12)(18,"form",13),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(19,"div",14)(20,"label",15),e._uU(21,"Name:"),e.qZA(),e.TgZ(22,"div",16),e._UZ(23,"input",17,18),e.YNc(25,V,2,1,"div",19),e.qZA()(),e.TgZ(26,"div",14)(27,"label",15),e._uU(28,"Address:"),e.qZA(),e.TgZ(29,"div",16),e._UZ(30,"input",20),e.YNc(31,G,2,1,"div",19),e.qZA()(),e.TgZ(32,"div",14)(33,"label",15),e._uU(34,"PAN No:"),e.YNc(35,H,2,0,"span",21),e.qZA(),e.TgZ(36,"div",16),e._UZ(37,"input",22),e.YNc(38,j,2,1,"div",19),e.qZA()(),e.TgZ(39,"div",14)(40,"label",15),e._uU(41,"Phone No:"),e.qZA(),e.TgZ(42,"div",16),e._UZ(43,"input",23),e.qZA()(),e.TgZ(44,"div",14)(45,"label",15),e._uU(46,"Mobile No:"),e.qZA(),e.TgZ(47,"div",16),e._UZ(48,"input",24),e.YNc(49,W,2,1,"div",19),e.qZA()(),e.YNc(50,X,10,0,"div",25),e.TgZ(51,"div",14)(52,"label",15),e._uU(53,"EMAIL:"),e.qZA(),e.TgZ(54,"div",16),e._UZ(55,"input",26),e.qZA()(),e.TgZ(56,"div",14)(57,"label",15),e._uU(58,"Status:"),e.qZA(),e.TgZ(59,"div",16)(60,"select",27),e._UZ(61,"option",28),e.TgZ(62,"option",29),e._uU(63,"ACTIVE"),e.qZA(),e.TgZ(64,"option",30),e._uU(65,"INACTIVE"),e.qZA()()()(),e.YNc(66,$,2,6,"div",31),e.YNc(67,ee,2,6,"div",31),e.YNc(68,te,6,0,"div",25),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("formGroup",o.customerForm),e.xp6(1),e.Q6J("disabled","view"==o.mode),e.xp6(8),e.Oqu(o.modeTitle),e.xp6(2),e.Q6J("formGroup",o.customerForm),e.xp6(5),e.Q6J("readOnly","view"==o.mode),e.xp6(2),e.Q6J("ngIf",o.customerForm.controls.name.invalid&&(o.customerForm.controls.name.dirty||o.customerForm.controls.name.touched)),e.xp6(5),e.Q6J("readOnly","view"==o.mode),e.xp6(1),e.Q6J("ngIf",o.customerForm.controls.address.invalid&&(o.customerForm.controls.address.dirty||o.customerForm.controls.address.touched)),e.xp6(4),e.Q6J("ngIf","B2B"===o.masterService.userSetting.CompanyType),e.xp6(2),e.Q6J("readOnly","view"==o.mode),e.xp6(1),e.Q6J("ngIf",o.customerForm.controls.pan.invalid&&(o.customerForm.controls.pan.dirty||o.customerForm.controls.pan.touched)),e.xp6(5),e.Q6J("readOnly","view"==o.mode),e.xp6(6),e.Q6J("ngIf",o.customerForm.controls.mobNo.invalid&&(o.customerForm.controls.mobNo.dirty||o.customerForm.controls.mobNo.touched)),e.xp6(1),e.Q6J("ngIf","pro"==o.AppMode),e.xp6(5),e.Q6J("readOnly","view"==o.mode),e.xp6(11),e.Q6J("ngIf",1===o.userSetting.EnableShippingAddress),e.xp6(1),e.Q6J("ngIf",1===o.userSetting.EnableVehicleMappingForCustomer),e.xp6(1),e.Q6J("ngIf",1==o.masterService.userSetting.CREATE_CPROFILE_AS_MEMBER))},dependencies:[T.O5,a.rH,d._Y,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.JL,d.nD,d.sg,d.u,J.n,k.L],styles:[".card[_ngcontent-%COMP%]{margin:10px 30px 0 300px!important;width:60%}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:4vh;color:#000}label[_ngcontent-%COMP%]{height:25px;font-size:14px}.col-sm-7[_ngcontent-%COMP%]{padding-left:1px}.form-control[_ngcontent-%COMP%]{font-size:14px}.card-body[_ngcontent-%COMP%]{height:70vh;overflow-y:scroll}"]}),r})()}];let re=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[a.Bz.forChild(oe),a.Bz]}),r})();var ne=s(59629);const ie={suppressScrollX:!1};let se=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[O,{provide:p.op,useValue:ie}],imports:[T.ez,re,b.m,g.JX,p.Xd,l.zk.forRoot(),_.Is,f.b.forRoot(),ne.Z]}),r})()}}]);