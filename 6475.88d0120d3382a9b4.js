"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[6475],{77879:(b,d,s)=>{s.d(d,{H:()=>m});var g=s(36336),u=s(53074);let m=(()=>{class c{constructor(p){this.masterRepo=p}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return c.\u0275fac=function(p){return new(p||c)(g.Y36(u.P))},c.\u0275dir=g.lG2({type:c,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),c})()},16475:(b,d,s)=>{s.r(d),s.d(d,{LocationMappingModule:()=>B});var g=s(92752),u=s(53181),m=s(89953),c=s(72533),h=s(12640),p=s(45365),M=s(28698),t=s(36336),C=s(76165),y=s(79765),x=s(67297),Z=s(71180);let f=(()=>{class n{constructor(e,o,i){this.http=e,this.authService=o,this.state=i;const a=this.state.getGlobalSetting("apiUrl");a&&a.length>0&&(this.apiUrl=a)}getRequestOptions(){return new C.WM({"Content-type":"application/json",Authorization:this.authService.getAuth().token,"X-Requested-With":"XMLHttpRequest"})}getItemsLocation(){return this.http.get(this.apiUrl+"/getItemLocation")}getLocationWarehouseList(){return this.http.get(this.apiUrl+"/getWarehouseList")}getLocationByWarehouse(e){return this.http.get(this.apiUrl+"/getLocationDropDown?warehouse="+e)}saveLocationMapping(e,o){let i={status:"error",result:""},a=new y.xQ;const I={headers:this.getRequestOptions(),method:"post"};return this.http.post(this.apiUrl+"/saveItemLocationInfo",{mode:e,data:o},I).subscribe(v=>{let _=v;"ok"==_.status?(i.status="ok",i.result=_.result,a.next(i),a.unsubscribe()):(i.status="error1",i.result=_.result,a.next(i),a.unsubscribe())},v=>{i.status="errpr2",i.result=v,a.next(i),a.unsubscribe()}),a}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN),t.LFG(x.e),t.LFG(Z.q))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var L=s(67311),O=s(14970),l=s(63504);const A=["genericGridForItem"];function P(n,r){if(1&n&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.s9C("value",e.NAME),t.xp6(1),t.Oqu(e.NAME)}}function T(n,r){if(1&n&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.s9C("value",e.NAME),t.xp6(1),t.Oqu(e.NAME)}}function w(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr",33)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"tr")(13,"div",34)(14,"button",35),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.Removerow())}),t._uU(15,"Remove"),t.qZA()()()()()}if(2&n){const e=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.ItemMcode),t.xp6(2),t.Oqu(e.ItemName),t.xp6(2),t.Oqu(e.Location),t.xp6(2),t.Oqu(e.Warehouse)}}let F=(()=>{class n{constructor(e,o,i,a){this.locationMappingService=e,this.alertService=o,this.loadingService=i,this.router=a,this.mode="new",this.locationItemArray=[],this.activerowIndex=0,this.isLoader=!0,this.currentPage=1,this.showPopup=!0,this.locationMappings={},this.gridItemPopupSettings=new M.im,this.gridItemPopupSettings=Object.assign(new M.im,{title:"Item List",apiEndpoints:"/getItemPagedListForPriceChange",defaultFilterIndex:1,useDefinefilterValue:"",columns:[{key:"MENUCODE",title:"PRODUCT CODE",hidden:!1,noSearch:!1},{key:"DESCA",title:"DESCRIPTION",hidden:!1,noSearch:!1},{key:"BASEUNIT",title:"UNIT",hidden:!1,noSearch:!0},{key:"MRP",title:"MRP",hidden:!1,noSearch:!0,alignment:"right",pipe:!0}]})}ngOnInit(){this.getWarehouse(),console.log(this.locationMappings)}getWarehouse(){this.locationMappingService.getLocationWarehouseList().subscribe(e=>{this.locationWarehouseList=e,console.log(this.locationWarehouseList)},e=>{this.alertService.error(e)})}save(){console.log(this.locationItemArray),console.log("on save comapny wise rate",this.locationItemArray),0==this.locationItemArray.length?this.alertService.warning("Cannot Save Company Rate with empty list.Please add Items"):(this.loadingService.show("Saving company wise rate. Please wait.."),this.locationMappingService.saveLocationMapping(this.mode,this.locationItemArray).subscribe(e=>{console.log("result on save",e),"ok"==e.status?(this.loadingService.hide(),this.alertService.success(e.result),this.locationItemArray=[],setTimeout(()=>{this.onreset()},1500)):(this.loadingService.hide(),this.alertService.error(e.result.error))},e=>{this.loadingService.hide(),this.alertService.error(e)}))}onreset(){try{this.router.navigate(["./pages/masters/location-mapping"])}catch(e){alert(e)}}addLocationItems(){if(""==this.locationMappings.Item||null==this.locationMappings.Item||null==this.locationMappings.Item)return void this.alertService.warning("Please Enter the Item Name");if(""==this.locationMappings.Location)return void this.alertService.warning("Please Enter Location");let e=this.locationItemArray.filter(o=>{console.log("Vitra Gayo"),console.log("this.locationMappings.Item Code",this.locationMappings.Item),console.log("x.ItemCode",o.Item)});if(console.log("duplicate",e),e.length>0){if(console.log("inside the duplicate",e),!confirm("Do you want to overwrite?"))return;this.locationItemArray.forEach(o=>{o.Item==this.locationMappings.Item&&(o.Location=this.locationMappings.Location,o.ItemName=this.locationMappings.ItemName,o.Warehouse=this.locationMappings.Warehouse)})}if(this.locationItemArray.find(o=>o.Item==this.locationMappings.Item))this.alertService.warning("Item already selected");else{let o=this.locationMappings.Location,i=this.locationMappings.Warehouse;this.locationItemArray.push(this.locationMappings),this.locationMappings={},this.locationMappings.Warehouse=i,this.locationMappings.Location=o,console.log(this.locationItemArray)}}Removerow(){confirm("Are you sure you want to remove the Row? ")&&this.locationItemArray.splice(this.activerowIndex,1)}getLocationsByWarehouses(e){console.log(e),this.locationMappingService.getLocationByWarehouse(e).subscribe(o=>{this.locations=o})}categoryPagination(e){this.isLoader=!0,this.currentPage=e;const o=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{o.isLoader=!1},500)}dblClickPopupItem(e){this.locationMappings.Item=e.MCODE,this.locationMappings.ItemName=e.DESCA,this.locationMappings.ItemMcode=e.MENUCODE}showItemPopUp(e){null!=this.locationMappings.Warehouse&&null!=this.locationMappings.Location?(this.gridItemPopupSettings.defaultFilterIndex="menuCode"==e?0:1,this.genericGridForItem.show()):this.alertService.error("Warehouse and location filds required")}closePopup(){this.showPopup=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(L.c),t.Y36(O.V),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-location-mapping-form"]],viewQuery:function(e,o){if(1&e&&t.Gf(A,5),2&e){let i;t.iGM(i=t.CRH())&&(o.genericGridForItem=i.first)}},decls:57,vars:8,consts:[[1,"sticky-top","row"],[1,"col-md-4",2,"font-weight","bold"],[1,"col-md-8"],[1,"row","pull-right",2,"margin-right","10px"],["type","submit",1,"btn","btn-info","btn-sm",3,"click"],["type","button","routerLink","/pages/masters/location-mapping",1,"btn","btn-info","btn-sm"],[1,"row","plainBackGround",2,"margin-top","0.5rem","padding-top","1rem"],[1,"col-md-5","pd0"],[1,"form-group","row"],[1,"col-sm-2","form-control-label",2,"font-size","13px"],[1,"col-sm-9"],["id","warehouse","name","warehouse",2,"height","4vh","font-size","14px","width","40vw",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["id","warehouse","name","location",2,"height","4vh","font-size","14px","width","40vw",3,"ngModel","ngModelChange"],["value",""],[1,"col-md-3","form-control-label"],[1,"col-md-6","row",2,"right","50px"],["type","text","placeholder","Enter to Select Item",1,"col-md-4","form-control",3,"ngModel","ngModelChange","keydown.Enter"],["type","text","placeholder","Enter to Select Item",1,"col-md-8","form-control",3,"ngModel","ngModelChange","keydown.Enter"],[1,"col-md-5",2,"left","120px"],[1,"row",2,"position","relative","top","80px","left","100px"],[1,"col-md-6"],[1,"btn","btn-info",2,"font-size","12px","top","-3px","position","relative","margin-right","200px","line-height","11px","width","64px",3,"click"],[2,"margin-top","10px"],[2,"height","480px","overflow-y","scroll"],[2,"margin-bottom","5px","font-size","13px","width","98%","margin-left","10px"],[2,"border-bottom","2px solid #e6e6e6","border-top","2px solid #e6e6e6","height","30px","background","#9ccae4","color","black"],[2,"width","2%"],[2,"width","8%","text-align","center"],["style","border: 1px; max-height: 25px",4,"ngFor","ngForOf"],[3,"popupsettings","onItemDoubleClick"],["genericGridForItem",""],[3,"value"],[2,"border","1px","max-height","25px"],[1,"col-md-3","pd0"],[1,"btn","btn-danger",2,"font-size","12px","position","relative","top","-3px","line-height","11px","width","64px","left","100px",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Location Item Master "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.save()}),t._uU(6,"Save"),t.qZA(),t.TgZ(7,"button",5),t._uU(8,"Reset"),t.qZA()()()(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"label",9),t._uU(13,"Warehouse:"),t.qZA(),t.TgZ(14,"div",10)(15,"select",11),t.NdJ("ngModelChange",function(a){return o.locationMappings.Warehouse=a})("change",function(a){return o.getLocationsByWarehouses(a.target.value)}),t.YNc(16,P,2,2,"option",12),t.qZA()()(),t.TgZ(17,"div",8)(18,"label",9),t._uU(19,"Location:"),t.qZA(),t.TgZ(20,"div",10)(21,"select",13),t.NdJ("ngModelChange",function(a){return o.locationMappings.Location=a}),t._UZ(22,"option",14),t.YNc(23,T,2,2,"option",12),t.qZA()()(),t.TgZ(24,"div",8)(25,"label",15),t._uU(26,"Item Name:"),t.qZA(),t.TgZ(27,"div",16)(28,"input",17),t.NdJ("ngModelChange",function(a){return o.locationMappings.ItemMcode=a})("keydown.Enter",function(){return o.showItemPopUp("menuCode")}),t.qZA(),t.TgZ(29,"input",18),t.NdJ("ngModelChange",function(a){return o.locationMappings.ItemName=a})("keydown.Enter",function(){return o.showItemPopUp("itemName")}),t.qZA()()()(),t.TgZ(30,"div",19)(31,"div",20)(32,"div",21)(33,"button",22),t.NdJ("click",function(){return o.addLocationItems()}),t._uU(34,"Add"),t.qZA()()()()(),t.TgZ(35,"div")(36,"div",23)(37,"div",24)(38,"table",25)(39,"thead")(40,"tr",26)(41,"th",27),t._uU(42,"S.N"),t.qZA(),t.TgZ(43,"th",28),t._uU(44,"Item Code"),t.qZA(),t.TgZ(45,"th",28),t._uU(46,"Item Name"),t.qZA(),t.TgZ(47,"th",28),t._uU(48,"Location"),t.qZA(),t.TgZ(49,"th",28),t._uU(50,"Warehouse"),t.qZA(),t.TgZ(51,"th",28),t._uU(52,"Action"),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,w,16,5,"tr",29),t.qZA()()()()(),t.TgZ(55,"generic-popup-grid",30,31),t.NdJ("onItemDoubleClick",function(a){return o.dblClickPopupItem(a)}),t.qZA()),2&e&&(t.xp6(15),t.Q6J("ngModel",o.locationMappings.Warehouse),t.xp6(1),t.Q6J("ngForOf",o.locationWarehouseList),t.xp6(5),t.Q6J("ngModel",o.locationMappings.Location),t.xp6(2),t.Q6J("ngForOf",o.locations),t.xp6(5),t.Q6J("ngModel",o.locationMappings.ItemMcode),t.xp6(1),t.Q6J("ngModel",o.locationMappings.ItemName),t.xp6(25),t.Q6J("ngForOf",o.locationItemArray),t.xp6(1),t.Q6J("popupsettings",o.gridItemPopupSettings))},dependencies:[g.sg,p.rH,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.On,M.Zl],styles:["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #cbcbcb;border-radius:3px;height:3.5vh;color:#000;width:100%}label[_ngcontent-%COMP%]{height:25px;font-size:13px}.form-group[_ngcontent-%COMP%]{margin-bottom:.5rem}.form-control[_ngcontent-%COMP%]{font-size:13px}th[_ngcontent-%COMP%]{padding:2px}td[_ngcontent-%COMP%]{padding:3px}.TableRowSize[_ngcontent-%COMP%]{height:23px;border:1px solid #e6e6e6}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{line-height:21px;text-align:center;border:1px solid #e6e6e6}label[_ngcontent-%COMP%]{font-weight:700}"]}),n})();var S=s(53074),U=s(77879);let E=(()=>{class n{transform(e,o){if(e)return o?e.filter(i=>{const a=o.replace(/[^A-Z0-9]/gi,"").toLowerCase();if(-1!==(i.MENUCODE?i.MENUCODE.replace(/[^A-Z0-9]/gi,"").toLowerCase():"").indexOf(a))return i}):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"searchData",type:n,pure:!1}),n})();function N(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td",22),t._uU(2),t.qZA(),t.TgZ(3,"td",23),t._uU(4),t.qZA(),t.TgZ(5,"td",24),t._uU(6),t.qZA(),t.TgZ(7,"td",25),t._uU(8),t.qZA(),t.TgZ(9,"td",24),t._uU(10),t.qZA()()),2&n){const e=r.$implicit,o=r.index,i=t.oxw();t.xp6(2),t.Oqu(o+1+(i.currentPage-1)*i.itemsPerPage),t.xp6(2),t.Oqu(e.MENUCODE),t.xp6(2),t.Oqu(e.ITEMNAME),t.xp6(2),t.Oqu(e.LOCATION),t.xp6(2),t.Oqu(e.WAREHOUSE)}}function q(n,r){1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",26)(3,"div",27),t._uU(4,"Location Entry Information are unavailable."),t.qZA()()(),t.BQk())}function D(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"pagination-controls",31),t.NdJ("pageChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.categoryPagination(i))}),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("directionLinks",e.directionLinks)}}const k=function(n,r,e){return{itemsPerPage:n,currentPage:r,totalItems:e}},J=[{path:"",component:(()=>{class n{constructor(e,o,i,a){this.router=e,this.masterRepo=o,this.alertService=i,this.locationMappingService=a,this.itemsPerPage=100,this.isLoader=!0,this.currentPage=1}ngOnInit(){this.getLocationEntry()}addLocationRate(){try{if(0==this.masterRepo.checkIsBranch())return void this.alertService.warning("Cannot add Category in branch office");this.router.navigate(["./pages/masters/location-mapping/add-locationMapping",{mode:"add",returnUrl:this.router.url}])}catch(e){this.alertService.error(e)}}getLocationEntry(){this.locationMappingService.getItemsLocation().subscribe(e=>{this.locationMappingList=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(S.P),t.Y36(L.c),t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-location-mapping-list"]],decls:41,vars:21,consts:[[1,"row","col-md-12"],[1,"col-md-4"],[1,"col-md-8"],["routerLink","/pages/dashboard",1,"btn","btn-info","pull-right",2,"font-size","12px"],["appOldFYearDB","",1,"btn","btn-info","pull-right",2,"font-size","12px",3,"disabled","click"],["isOldFYearDB","appOldFYearDB"],[1,"row",2,"align-items","center"],[1,"col-md-12","col-sm-8",2,"margin-top","0.5rem"],[1,"card",2,"margin","auto","width","63rem"],[1,"card-header"],[2,"width","25%"],["type","search","placeholder","Search...","name","filter",2,"height","1.5rem","font-size","13px",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped"],[2,"position","sticky","top","0","line-height","1.5rem"],["scope","col",2,"width","3%"],["scope","col",2,"width","8%"],["scope","col",2,"width","15%"],["scope","col",2,"width","11%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","card-footer","style","padding:5px",4,"ngIf"],[2,"width","3%"],[2,"width","8%"],[2,"width","15%"],[2,"width","11%"],["colspan","7"],[1,"font-weight-bold"],[1,"card-footer",2,"padding","5px"],[1,"pagination"],[2,"margin","auto"],[1,"my-pagination",3,"directionLinks","pageChange"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Location Item Mapping "),t.qZA()(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"Back"),t.qZA(),t.TgZ(7,"button",4,5),t.NdJ("click",function(){return o.addLocationRate()}),t._uU(9,"Add Location Entry"),t.qZA()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"span"),t._uU(15,"Location Item Lists"),t.qZA(),t.TgZ(16,"div",10)(17,"input",11),t.NdJ("ngModelChange",function(a){return o.filter=a}),t.qZA()()(),t.TgZ(18,"div",12)(19,"table",13)(20,"thead")(21,"tr",14)(22,"th",15),t._uU(23,"S.N"),t.qZA(),t.TgZ(24,"th",16),t._uU(25," Item Code"),t.qZA(),t.TgZ(26,"th",17),t._uU(27," Item Name"),t.qZA(),t.TgZ(28,"th",18),t._uU(29," Location"),t.qZA(),t.TgZ(30,"th",17),t._uU(31," Warehouse"),t.qZA()()(),t.TgZ(32,"tbody"),t.ynx(33),t.YNc(34,N,11,5,"tr",19),t.ALo(35,"paginate"),t.ALo(36,"searchData"),t.BQk(),t.YNc(37,q,5,0,"ng-container",20),t.ALo(38,"searchData"),t.qZA()(),t.YNc(39,D,4,1,"div",21),t.ALo(40,"searchData"),t.qZA()()()()),2&e){const i=t.MAs(8);t.xp6(7),t.Q6J("disabled",i.isOldFYearDB()),t.xp6(10),t.Q6J("ngModel",o.filter),t.xp6(17),t.Q6J("ngForOf",t.xi3(35,5,t.xi3(36,8,o.locationMappingList,o.filter),t.kEZ(17,k,o.itemsPerPage,o.currentPage,o.totalCount))),t.xp6(3),t.Q6J("ngIf",o.locationMappingList&&0===t.xi3(38,11,o.locationMappingList,o.filter).length),t.xp6(2),t.Q6J("ngIf",o.locationMappingList&&t.xi3(40,14,o.locationMappingList,o.filter).length>o.itemsPerPage)}},dependencies:[g.sg,g.O5,p.rH,l.Fj,l.JJ,l.On,c.LS,U.H,c._s,E],styles:[".card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-header[_ngcontent-%COMP%]:after{display:none}.card-body[_ngcontent-%COMP%]{padding:5px!important;max-height:455px!important}.main-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:60px 0}.scroll-touch[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.1rem!important}.sticky-top[_ngcontent-%COMP%]{margin-top:60px;height:100vh}tbody[_ngcontent-%COMP%]{display:block;height:59vh;overflow:auto}thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}th[_ngcontent-%COMP%]{font-size:15px}td[_ngcontent-%COMP%]{font-size:13px}.btn-sm[_ngcontent-%COMP%]{line-height:3px}.card-header[_ngcontent-%COMP%]{padding:10px 20px}.card-footer[_ngcontent-%COMP%]{height:6vh}.searchBy[_ngcontent-%COMP%]{font-size:13px;margin-left:16rem}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#17a2b8!important;border:transparent!important;border-radius:20px!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current:hover{background:#74d4e2!important;border-radius:20px!important;border:transparent!important}.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .ngx-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#c2c2c2;border-radius:20px!important}"]}),n})()},{path:"add-locationMapping",component:F}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(J),p.Bz]}),n})();const W={suppressScrollX:!1};let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[f,{provide:h.op,useValue:W}],imports:[g.ez,R,m.m,c.JX,h.Xd,u.Is]}),n})()}}]);