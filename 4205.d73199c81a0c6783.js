(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4205],{49457:function(P,U){var M;void 0!==(M=function(){"use strict";function Z(c,u,p){var f=new XMLHttpRequest;f.open("GET",c),f.responseType="blob",f.onload=function(){C(f.response,u,p)},f.onerror=function(){console.error("could not download file")},f.send()}function e(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function v(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var g="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,_=g.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),C=g.saveAs||("object"!=typeof window||window!==g?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(c,u,p){var f=g.URL||g.webkitURL,E=document.createElement("a");E.download=u=u||c.name||"download",E.rel="noopener","string"==typeof c?(E.href=c,E.origin===location.origin?v(E):e(E.href)?Z(c,u,p):v(E,E.target="_blank")):(E.href=f.createObjectURL(c),setTimeout(function(){f.revokeObjectURL(E.href)},4e4),setTimeout(function(){v(E)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,p){if(u=u||c.name||"download","string"!=typeof c)navigator.msSaveOrOpenBlob(function r(c,u){return typeof u>"u"?u={autoBom:!1}:"object"!=typeof u&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\ufeff",c],{type:c.type}):c}(c,p),u);else if(e(c))Z(c,u,p);else{var f=document.createElement("a");f.href=c,f.target="_blank",setTimeout(function(){v(f)})}}:function(c,u,p,f){if((f=f||open("","_blank"))&&(f.document.title=f.document.body.innerText="downloading..."),"string"==typeof c)return Z(c,u,p);var E="application/octet-stream"===c.type,Y=/constructor/i.test(g.HTMLElement)||g.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||E&&Y||_)&&typeof FileReader<"u"){var O=new FileReader;O.onloadend=function(){var T=O.result;T=b?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=T:location=T,f=null},O.readAsDataURL(c)}else{var J=g.URL||g.webkitURL,m=J.createObjectURL(c);f?f.location=m:location.href=m,f=null,setTimeout(function(){J.revokeObjectURL(m)},4e4)}});g.saveAs=C.saveAs=C,P.exports=C}.apply(U,[]))&&(P.exports=M)},82661:(P,U,s)=>{"use strict";s.d(U,{C:()=>J});var y=s(26215),M=s(54536),r=s(64537),Z=s(88692);let e=(()=>{class m{constructor(d,x){this.dialogref=d,this.data=x,this.heading="Information",this.heading=x.header,this.message$=x.message}authResult(d){this.dialogref.close(d)}}return m.\u0275fac=function(d){return new(d||m)(r.Y36(M.so),r.Y36(M.WI))},m.\u0275cmp=r.Xpm({type:m,selectors:[["result-dialog"]],decls:11,vars:4,consts:[[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","custom-modal-header"],[1,"modal-title"],["aria-label","Close",1,"close",3,"click"],[1,"modal-body"],[2,"display","inline-block"]],template:function(d,x){1&d&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),r._uU(4),r.qZA(),r.TgZ(5,"div",4),r.NdJ("click",function(){return x.authResult(!0)}),r._uU(6,"\xd7"),r.qZA()(),r.TgZ(7,"div",5),r._UZ(8,"div",6),r._uU(9),r.ALo(10,"async"),r.qZA()()()),2&d&&(r.xp6(4),r.Oqu(x.heading),r.xp6(5),r.hij(" ",r.lcZ(10,2,x.message$)," "))},dependencies:[Z.Ov],encapsulation:2}),m})();var v=s(67297),g=s(53074),_=s(14970),C=s(7976),c=s(67311);function u(m,T){1&m&&(r.TgZ(0,"h4",5),r._uU(1,"Your Fiscal Year is Changed. Year End Process will generate new sequence for transaction. Would you like to start Inventry year Ending Process ? "),r.qZA())}function p(m,T){1&m&&(r.TgZ(0,"h4",5),r._uU(1,"Your Fiscal Year is Changed.Please do year end process from Online portal and sync the transaction.If you want do back date Sales invoice Click Ok to continue.Thank you... "),r.qZA())}function f(m,T){if(1&m){const d=r.EpF();r.TgZ(0,"button",6),r.NdJ("click",function(){r.CHM(d);const I=r.oxw();return r.KtG(I.YesClick())}),r._uU(1,"Yes"),r.qZA()}}function E(m,T){if(1&m){const d=r.EpF();r.TgZ(0,"button",6),r.NdJ("click",function(){r.CHM(d);const I=r.oxw();return r.KtG(I.NoClick())}),r._uU(1,"No"),r.qZA()}}function Y(m,T){if(1&m){const d=r.EpF();r.TgZ(0,"button",6),r.NdJ("click",function(){r.CHM(d);const I=r.oxw();return r.KtG(I.offlinelineOK())}),r._uU(1,"OK"),r.qZA()}}let b=(()=>{class m{constructor(d,x,I,L,F,N){this.dialogref=d,this.authSerice=x,this.masterService=I,this.spinnerService=L,this.router=F,this.alertService=N}YesClick(){1!==this.masterService.userSetting.ENABLEOFFLINESALE&&(this.spinnerService.show("Processing...Please Wait..."),this.masterService.masterGetmethod("/yearEndingInventory").subscribe(d=>{"ok"===d.status?(this.authSerice.setSessionVariable("isIYE",1),this.dialogref.close(),this.alertService.success("The year end for inventory are done successfully..."),setTimeout(()=>{console.log("from logout"),this.router.navigate(["login",{logout:"logout"}]).then(()=>{window.location.reload()})},5e3)):(this.spinnerService.hide(),alert(d.result.error))},d=>{this.spinnerService.hide(),alert(JSON.parse(d._body))}))}NoClick(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}offlinelineOK(){this.authSerice.setSessionVariable("isIYE",2),this.dialogref.close()}}return m.\u0275fac=function(d){return new(d||m)(r.Y36(M.so),r.Y36(v.e),r.Y36(g.P),r.Y36(_.V),r.Y36(C.F0),r.Y36(c.c))},m.\u0275cmp=r.Xpm({type:m,selectors:[["inventry-yearend-dialog"]],decls:8,vars:5,consts:[[1,"modal-content","modal-content-main-area",2,"width","100%"],[1,"modal-header"],["class","modal-title","id","myModalLabel",4,"ngIf"],[1,"modal-body"],["class","btn btn-info",3,"click",4,"ngIf"],["id","myModalLabel",1,"modal-title"],[1,"btn","btn-info",3,"click"]],template:function(d,x){1&d&&(r.TgZ(0,"div",0)(1,"div",1),r.YNc(2,u,2,0,"h4",2),r.YNc(3,p,2,0,"h4",2),r.qZA(),r.TgZ(4,"div",3),r.YNc(5,f,2,0,"button",4),r.YNc(6,E,2,0,"button",4),r.YNc(7,Y,2,0,"button",4),r.qZA()()),2&d&&(r.xp6(2),r.Q6J("ngIf",1!=x.masterService.userSetting.ENABLEOFFLINESALE),r.xp6(1),r.Q6J("ngIf",1==x.masterService.userSetting.ENABLEOFFLINESALE),r.xp6(2),r.Q6J("ngIf",1!=x.masterService.userSetting.ENABLEOFFLINESALE),r.xp6(1),r.Q6J("ngIf",1!=x.masterService.userSetting.ENABLEOFFLINESALE),r.xp6(1),r.Q6J("ngIf",1==x.masterService.userSetting.ENABLEOFFLINESALE))},dependencies:[Z.O5],styles:[".md-dialog-container[_ngcontent-%COMP%]{height:auto!important;width:auto!important;overflow:hidden!important;box-shadow:0!important}.mat-dialog-container[_ngcontent-%COMP%]{background:transparent!important;box-shadow:none!important;margin-left:auto;margin-right:auto;overflow:hidden!important;height:350px!important}.auth-main[_ngcontent-%COMP%]{position:inherit!important;display:inherit!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{height:auto!important}.cdk-overlay-pane[_ngcontent-%COMP%], .md-overlay-pane[_ngcontent-%COMP%]{flex:1 1 0}"]}),m})();var O=s(71180);let J=(()=>{class m{constructor(d,x,I,L,F){this.gblstate=d,this._authService=x,this.masterService=I,this.router=L,this.dialog=F,this.viewPermission=[],this.userSetting={},this.enableFiscalYearEnd=!1,this.viewPermission=d.getGlobalSetting("View-Permission")||[],this.userSetting=this.masterService.userSetting}canActivate(d,x){const I=new y.X(""),L=I.asObservable(),F=this._authService.getAuth();let N="";null!=d.url[0]&&(N=d.url[0].path),console.log("path",N);let k=d.params.mode;if(void 0===k&&(k="list"),!F||!F.profile){I.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const w=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:L}});return setTimeout(()=>{w.close()},1e4),!1}if(this.masterService.checkUserValid().subscribe(D=>{if(!1===D){I.next("Your session has expired. You have been logged out of your account in another tab. Please log in again to continue.");const B=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:L}});return setTimeout(()=>(B.close(),!1),1e4),!1}}),0===this._authService.getSessionVariable("isIYE")&&(this.dialog.closeAll(),this.dialog.open(b,{hasBackdrop:!0,data:{header:"Information",message:""}}),"dashboard"!==N))return!1;if(0===this.userSetting.ENABLEOFFLINESALE||2===this.userSetting.ENABLEOFFLINESALE){if(F&&F.profile&&"dashboard"===N)return!0;if(0===this.userSetting.ENABLEOFFLINESALE){if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return!0}else if(2===this.userSetting.ENABLEOFFLINESALE){if("addsientry"===N||"add-creditnote-itembase"===N){I.next("You are not authorize for this operation");const D=this.dialog.open(e,{hasBackdrop:!0,data:{header:"Information",message:L}});return setTimeout(()=>(D.close(),!1),2e3),!1}if("ADMIN"===this._authService.getUserProfile().username.toUpperCase()||"patanjali_user"===this._authService.getUserProfile().username)return console.log("MENURIGHTBLOCKEDADMIN",N),!0}const w=this._authService.getMenuRight(N,k);if(N)return!0===w.right||"list"===k&&!0===w.list;if(!0===w.list)return!0}else if(1===this.userSetting.ENABLEOFFLINESALE)return!0}}return m.\u0275fac=function(d){return new(d||m)(r.LFG(O.q),r.LFG(v.e),r.LFG(g.P),r.LFG(C.F0),r.LFG(M.uw))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},62490:(P,U,s)=>{"use strict";s.d(U,{VO:()=>Z,gB:()=>M});var y=s(64537);let M=(()=>{class e{transform(g,_,C){return null==_||null==_||""==_||null==C||null==C||""==C?g:C?g.filter(c=>null!=c[_]&&null!=c[_]&&-1!==c[_].toLowerCase().indexOf(C.toLowerCase())):g}}return e.\u0275fac=function(g){return new(g||e)},e.\u0275pipe=y.Yjl({name:"filter",type:e,pure:!1}),e})(),Z=(()=>{class e{transform(g,_){let C=[];for(let c in g)C.push(c);return C}}return e.\u0275fac=function(g){return new(g||e)},e.\u0275pipe=y.Yjl({name:"keys",type:e,pure:!0}),e})()},55618:(P,U,s)=>{"use strict";s.d(U,{c:()=>u});var y=s(88692),M=s(71800),r=s(72533),Z=s(18488),e=s(53074),v=s(20092),g=s(47766),_=s(64537);let C=(()=>{class p{static forRoot(){return{ngModule:p}}}return p.\u0275fac=function(E){return new(E||p)},p.\u0275mod=_.oAB({type:p}),p.\u0275inj=_.cJS({imports:[y.ez,v.u5,v.UX,r.JX]}),p})();var c=s(48496);let u=(()=>{class p{static forRoot(){return{ngModule:p,providers:[e.P,Z.G]}}}return p.\u0275fac=function(E){return new(E||p)},p.\u0275mod=_.oAB({type:p}),p.\u0275inj=_.cJS({imports:[y.ez,M.zk.forRoot(),r.JX,y.ez,v.u5,v.UX,g.e,C.forRoot(),c.z.forRoot()]}),p})()},48496:(P,U,s)=>{"use strict";s.d(U,{z:()=>g});var y=s(88692),M=s(71800),r=s(72533),Z=s(74417),e=s(20092),v=s(64537);let g=(()=>{class _{static forRoot(){return{ngModule:_}}}return _.\u0275fac=function(c){return new(c||_)},_.\u0275mod=v.oAB({type:_}),_.\u0275inj=v.cJS({imports:[y.ez,M.zk.forRoot(),r.JX,Z.Cl,e.u5]}),_})()},94205:(P,U,s)=>{"use strict";s.r(U),s.d(U,{MasterMigrationModule:()=>fe});var y=s(88692),M=s(7976),r=s(40216),Z=s(49457),e=s(64537),v=s(248),g=s(67311),_=s(14970),C=s(53074),c=s(35732),u=s(92340),p=s(79765),f=s(67297),E=s(71180);let Y=(()=>{class o{constructor(t,i,n,l){this.http=t,this.activatedRoute=i,this.authService=n,this.state=l}get apiUrl(){return u.N.apiUrl}loadConfig(t){return this.http.get(this.apiUrl+`/getConfig/${t}`)}downloadConfigCSV(t){return console.log("api"+this.apiUrl),this.http.get(this.apiUrl+`/downloadCSV/${t}`).map(i=>({content:new Blob([i._body],{type:i.headers.get("Content-Type")}),filename:`${t}.csv`}))}downloadConfigExcel(t){const n={headers:this.authService.getRequestOption(),method:"get"};return this.http.get(this.apiUrl+`/downloadExcel/${t}`,n).map(l=>({content:new Blob([l._body],{type:l.headers.get("Content-Type")}),filename:`${t}.xlsx`}))}downloadExcelErrorStatus(t){return this.http.get(this.apiUrl+`/downloadExcelErrorStatus/${t}`,{responseType:"blob"})}downloadSampleExcel(t){return this.http.get(this.apiUrl+`/downloadSampleExcelforMasterMigration?importName=${t}`,{responseType:"blob"})}saveConfig(t){let i={status:"error",result:""},n=new p.xQ;const l={headers:this.authService.getRequestOption(),methos:"post"};return this.http.post(this.apiUrl+"/saveConfig",{mode:"EDIT",data:t},l).subscribe(S=>{let A=S.json();"ok"==A.status?(i.status="ok",i.result=A.result,n.next(i),n.unsubscribe()):(i.status="error1",i.result=A.result,console.log(i),n.next(i),n.unsubscribe())},S=>{i.status="error2",i.result=S,console.log(i),n.next(i),n.unsubscribe()}),n}importConfig(t,i,n){let l={status:"error",result:"error"},h=new p.xQ;const S={headers:this.getRequestOptionWithoutContent(),method:"post"};return this.http.post(this.apiUrl+`/masterImport/${i}/${n}`,t,S).subscribe(A=>{h.next(A),h.unsubscribe()},A=>{l.status=0===A?.error?.loaded?"File Changed After Select":"error",l.result=A,h.next(l),h.unsubscribe()}),h}loadImportErrorList(t){return this.http.get(this.apiUrl+`/masterImportErrorList/${t}`).map(i=>i.json()||[])}saveCorrectedList(t,i){let n={status:"error",result:""},l=new p.xQ;const h={headers:this.authService.getRequestOption(),method:"post"};return this.http.post(this.apiUrl+`/masterImportCorrection/${i}`,t,h).subscribe(S=>{let A=S.json();"ok"==A.status?(n.status="ok",n.result=A.result,l.next(n),l.unsubscribe()):(n.status="error1",n.result=A.result,console.log(n),l.next(n),l.unsubscribe())},S=>{n.status="error2",n.result=S,console.log(n),l.next(n),l.unsubscribe()}),l}getRequestOptionWithoutContent(){return new c.WM({Authorization:this.authService.getAuth().token})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN),e.LFG(M.gz),e.LFG(f.e),e.LFG(E.q))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var b=s(20092),O=s(87584),J=s(62490);const m=["fileSelector_Import"],T=["fileUploadPopup"];function d(o,a){if(1&o&&(e.TgZ(0,"option",39),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.s9C("value",t),e.xp6(1),e.Oqu(t)}}function x(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",36)(1,"label",37),e._uU(2,"Select a Master "),e.qZA(),e.TgZ(3,"div",13)(4,"select",38),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.selectedMasterName=n)}),e.YNc(5,d,2,2,"option",23),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.selectedMasterName),e.xp6(1),e.Q6J("ngForOf",t.masterList)}}function I(o,a){if(1&o&&(e.TgZ(0,"div",20),e.YNc(1,x,6,2,"div",35),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.excelImportConfig.length)}}function L(o,a){if(1&o&&(e.TgZ(0,"div",20)(1,"label",40),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.hij("Master :: ",t.selectedMasterName,"")}}function F(o,a){if(1&o){const t=e.EpF();e.ynx(0,43),e.TgZ(1,"tr",44)(2,"td"),e._UZ(3,"input",45),e.qZA(),e.TgZ(4,"td"),e._UZ(5,"input",46),e.qZA(),e.TgZ(6,"td"),e._UZ(7,"input",47),e.qZA(),e.TgZ(8,"td"),e._UZ(9,"input",48),e.qZA(),e.TgZ(10,"td")(11,"input",49),e.NdJ("change",function(n){const h=e.CHM(t).index,S=e.oxw(2);return e.KtG(S.MandatoryChanged(n,h))}),e.qZA()(),e.TgZ(12,"td")(13,"input",50),e.NdJ("change",function(n){const h=e.CHM(t).index,S=e.oxw(2);return e.KtG(S.AddToSheetChanged(n,h))}),e.qZA()(),e.TgZ(14,"td"),e._UZ(15,"input",51),e.qZA()(),e.BQk()}if(2&o){const t=a.index;e.xp6(1),e.Q6J("formGroupName",t)}}function N(o,a){if(1&o&&(e.TgZ(0,"table",41)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"SI NO"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Caption Name"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Column Size"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Data Type"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Mandatory"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Add to Sheet"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Column Value"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,F,16,1,"ng-container",42),e.qZA()()),2&o){const t=e.oxw();e.xp6(18),e.Q6J("ngForOf",t.form.get("items").controls)}}function k(o,a){if(1&o&&(e.TgZ(0,"option",39),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.s9C("value",t),e.xp6(1),e.Oqu(t)}}function w(o,a){if(1&o&&(e.TgZ(0,"option",54),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("ngValue",t.CURNAME),e.xp6(1),e.hij("",t.CURNAME," ")}}function D(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"label"),e._uU(2,"Currency"),e.qZA(),e.TgZ(3,"select",52),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.FCurrency=n)})("change",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.CurrencyChange())}),e.YNc(4,w,2,2,"option",53),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.FCurrency),e.xp6(1),e.Q6J("ngForOf",t.masterService.Currencies)}}function B(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"label"),e._uU(2,"EX Rate"),e.qZA(),e.TgZ(3,"input",55),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.EXRATE=n)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.EXRATE)}}function Q(o,a){if(1&o&&(e.TgZ(0,"option",39),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.s9C("value",t),e.xp6(1),e.Oqu(t)}}function j(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",36)(1,"label",37),e._uU(2,"Select a Master "),e.qZA(),e.TgZ(3,"div",13)(4,"select",38),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.selectedMasterName=n)}),e.YNc(5,Q,2,2,"option",23),e.qZA()(),e.TgZ(6,"div",20)(7,"button",56),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.downloadErrorStatus())}),e._uU(8," Download Status "),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.selectedMasterName),e.xp6(1),e.Q6J("ngForOf",t.masterList)}}function $(o,a){if(1&o&&(e.TgZ(0,"div",20),e.YNc(1,j,9,2,"div",35),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.excelImportConfig.length)}}function G(o,a){if(1&o&&(e.TgZ(0,"div",20)(1,"label",40),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.hij("Master :: ",t.selectedMasterName,"")}}function K(o,a){if(1&o&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function V(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"input",59),e.NdJ("ngModelChange",function(n){const h=e.CHM(t).$implicit,S=e.oxw().$implicit;return e.KtG(S[h]=n)}),e.qZA()()}if(2&o){const t=a.$implicit,i=a.index,n=e.oxw(),l=n.index,h=n.$implicit;e.xp6(1),e.hYB("name","",l,"_",i,""),e.Q6J("ngModel",h[t])}}function z(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,V,2,3,"td",58),e.ALo(2,"keys"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t))}}function H(o,a){if(1&o&&(e.TgZ(0,"div",57)(1,"table",41)(2,"thead")(3,"tr"),e.YNc(4,K,2,1,"th",58),e.ALo(5,"keys"),e.qZA()(),e.TgZ(6,"tbody"),e.YNc(7,z,3,3,"tr",58),e.qZA()()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,2,t.importErrorList[0])),e.xp6(3),e.Q6J("ngForOf",t.importErrorList)}}function W(o,a){if(1&o&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function X(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"input",59),e.NdJ("ngModelChange",function(n){const h=e.CHM(t).$implicit,S=e.oxw().$implicit;return e.KtG(S[h]=n)}),e.qZA()()}if(2&o){const t=a.$implicit,i=a.index,n=e.oxw(),l=n.index,h=n.$implicit;e.xp6(1),e.hYB("name","",l,"_",i,""),e.Q6J("ngModel",h[t])}}function ee(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,X,2,3,"td",58),e.ALo(2,"keys"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t))}}function te(o,a){if(1&o&&(e.TgZ(0,"div",57)(1,"table",41)(2,"thead")(3,"tr"),e.YNc(4,W,2,1,"th",58),e.ALo(5,"keys"),e.qZA()(),e.TgZ(6,"tbody"),e.YNc(7,ee,3,3,"tr",58),e.qZA()()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,2,t.importErrorList[0])),e.xp6(3),e.Q6J("ngForOf",t.importErrorList)}}function oe(o,a){if(1&o&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function ne(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"input",59),e.NdJ("ngModelChange",function(n){const h=e.CHM(t).$implicit,S=e.oxw().$implicit;return e.KtG(S[h]=n)}),e.qZA()()}if(2&o){const t=a.$implicit,i=a.index,n=e.oxw(),l=n.index,h=n.$implicit;e.xp6(1),e.hYB("name","",l,"_",i,""),e.Q6J("ngModel",h[t])}}function ie(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,ne,2,3,"td",58),e.ALo(2,"keys"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t))}}function re(o,a){if(1&o&&(e.TgZ(0,"div",57)(1,"table",41)(2,"thead")(3,"tr"),e.YNc(4,oe,2,1,"th",58),e.ALo(5,"keys"),e.qZA()(),e.TgZ(6,"tbody"),e.YNc(7,ie,3,3,"tr",58),e.qZA()()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,2,t.importErrorList[0])),e.xp6(3),e.Q6J("ngForOf",t.importErrorList)}}function se(o,a){if(1&o&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function ae(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"td")(1,"input",59),e.NdJ("ngModelChange",function(n){const h=e.CHM(t).$implicit,S=e.oxw().$implicit;return e.KtG(S[h]=n)}),e.qZA()()}if(2&o){const t=a.$implicit,i=a.index,n=e.oxw(),l=n.index,h=n.$implicit;e.xp6(1),e.hYB("name","",l,"_",i,""),e.Q6J("ngModel",h[t])}}function le(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,ae,2,3,"td",58),e.ALo(2,"keys"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t))}}function ce(o,a){if(1&o&&(e.TgZ(0,"div",57)(1,"table",41)(2,"thead")(3,"tr"),e.YNc(4,se,2,1,"th",58),e.ALo(5,"keys"),e.qZA()(),e.TgZ(6,"tbody"),e.YNc(7,le,3,3,"tr",58),e.qZA()()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,2,t.importErrorList[0])),e.xp6(3),e.Q6J("ngForOf",t.importErrorList)}}let de=(()=>{class o{constructor(t,i,n,l,h,S,A,R,_e){this.preventNavigationService=t,this.alertService=i,this.loadingService=n,this.masterService=l,this.service=h,this.router=S,this._activatedRoute=A,this.fb=R,this._trnMainService=_e,this.fileUploadPopupSettings=new r.s,this.excelImportConfig=[],this.initialTextReadOnly=!1,this.subcriptions=[],this.FCurrency="",this.importErrorList=[],this.fileList=null,this.getAllMasterList(),this.masterService.Currencies=[],this.masterService.getCurrencies().subscribe(ve=>{this.masterService.Currencies=ve})}ngOnInit(){try{this.resetConfig(),this.onFormChanges()}catch(t){console.log(t),this.alertService.info(t)}}showImportScheme(){this.activeurlpath=this._activatedRoute.snapshot.url[0].path,this.fileUploadPopupSettings=Object.assign(new r.s,{title:"Import Scheme",sampleFileUrl:"/downloadSampleFile/scheme",uploadEndpoints:"/InsertPrimarySecondarySchemes",allowMultiple:!1,acceptFormat:".csv"}),this.fileUploadPopup.show()}UpdateSchemeImport(){this.fileUploadPopupSettings=Object.assign(new r.s,{title:"Update Scheme",sampleFileUrl:"/downloadSampleFile/",uploadEndpoints:"/UpdatePrimarySecondarySchemes",allowMultiple:!1,acceptFormat:".csv"}),this.fileUploadPopup.show()}showImportMargin(){this.fileUploadPopupSettings=Object.assign(new r.s,{title:"Import Margin",uploadEndpoints:"/insertMargins",allowMultiple:!1,acceptFormat:".csv"}),this.fileUploadPopup.show()}UpdateMarginImport(){this.fileUploadPopupSettings=Object.assign(new r.s,{title:"Update Margin",uploadEndpoints:"/UpdateMargins",allowMultiple:!1,acceptFormat:".csv"}),this.fileUploadPopup.show()}fileUploadSuccessStatus(t){"ok"==t.status?this.alertService.success("Upload Successfully"):this.alertService.info("error"==t.status?"Some of the rows cannot be saved. Please check 'Upload Status' for more details.":"Could not uploaded"),this.fileSelector_Import.nativeElement.value=null}fileUploadSuccess(t){if(t&&null!=t&&null!=t&&"ok"==t.status){let i=t.result;console.log("productList"+i),this._trnMainService.TrnMainObj.ProdList=i;for(let n in this._trnMainService.TrnMainObj.ProdList)this._trnMainService.setAltunitDropDownForView(n),this._trnMainService.getPricingOfItem(n,"",!1),this._trnMainService.TrnMainObj.ProdList[n].inputMode=!1,this._trnMainService.TrnMainObj.ProdList[n].VCHRNO=this._trnMainService.TrnMainObj.VCHRNO;this._trnMainService.ReCalculateBillWithNormal()}}createFormItem(t){return this.fb.group({ImportName:[t.ImportName],ColumnName:[t.ColumnName],SNO:[t.SNO],ColumnSize:[t.ColumnSize],DataType:[t.DataType],ColumnValue:[t.ColumnValue],Mandatory:[t.Mandatory],AddToSheet:[t.AddToSheet]})}addItemsToForm(){let t=this.form.get("items");this.excelImportConfig.forEach(i=>{t.push(this.createFormItem(i))})}onFormChanges(){this.form.valueChanges.subscribe(t=>{this.form.dirty&&this.preventNavigationService.preventNavigation(!0)})}cancel(){try{this.router.navigate(["/pages/dashboard"])}catch(t){console.log(t),this.alertService.info(t)}}ngOnDestroy(){try{this.subcriptions.forEach(t=>{t.unsubscribe()})}catch(t){console.log(t),this.alertService.info(t)}}onSave(){try{if(!this.form.valid)return void this.alertService.info("Invalid Request, Please enter all required fields.");this.onsubmit()}catch(t){console.log(t),this.alertService.info(t)}}onsubmit(){try{let t=this.form.get("items").value;if(console.log(t),null==t||0==t.length)return;this.loadingService.show("Saving Config. Please Wait...");let i=this.service.saveConfig(t).subscribe(n=>{if(this.loadingService.hide(),"ok"==n.status)this.alertService.success("Config Saved Successfully"),this.preventNavigationService.preventNavigation(!1);else{if("The ConnectionString property has not been initialized."==n.result._body)return void this.router.navigate(["/login",this.router.url]);this.alertService.info(`Error in Saving Data: ${n.result._body}`)}},n=>{this.loadingService.hide(),this.alertService.info(n)});this.subcriptions.push(i)}catch(t){this.alertService.info(t)}}getAllMasterList(){this.masterService.getAllExcelImportMasterList().subscribe(t=>{this.masterList=t,console.log("masterList",this.masterList)},t=>{this.masterList=[]})}loadConfig(){this.selectedMasterName&&null!=this.selectedMasterName&&null!=this.selectedMasterName&&""!=this.selectedMasterName?(this.loadingService.show("Loading Config. Please Wait..."),this.service.loadConfig(this.selectedMasterName).subscribe(t=>{this.loadingService.hide(),this.excelImportConfig=t,this.addItemsToForm()},t=>{this.loadingService.hide(),this.excelImportConfig=[]})):this.alertService.info("Please Select a Master")}downloadConfigCSV(){this.selectedMasterName&&null!=this.selectedMasterName&&null!=this.selectedMasterName&&""!=this.selectedMasterName?(this.loadingService.show("Downloading..."),this.service.downloadConfigCSV(this.selectedMasterName).subscribe(t=>{this.loadingService.hide(),this.downloadFile(t)},t=>{this.loadingService.hide()})):this.alertService.info("Please Select a Master")}downloadConfigExcel(){this.selectedMasterName&&null!=this.selectedMasterName&&null!=this.selectedMasterName&&""!=this.selectedMasterName?(console.log("masterName",this.selectedMasterName),this.loadingService.show("Sample excel file is downloading..Please wait"),this.service.downloadSampleExcel(this.selectedMasterName).subscribe(i=>{let n=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Z.saveAs(n,`${this.selectedMasterName} Sample.xlsx`),this.loadingService.hide()},i=>{console.log("Error message for excel",i),this.alertService.info("This sample excel file download is not possible."),this.loadingService.hide()})):this.alertService.info("Please Select a Master")}downloadFile(t){const i=document.createElement("a");i.href=URL.createObjectURL(t.content),i.download=t.filename,document.body.appendChild(i),i.click()}onFileChange(t){console.log("filteupload",t.target.files),this.fileList=t.target.files}clearFile(){this.fileList=null}importConfig(){if(null!=this.fileList&&0!=this.fileList.length)if(null!=this.selectedMasterName&&""!=this.selectedMasterName){if(this.fileList.length>0){let t=this.fileList[0],i=new FormData;i.append("config",t,t.name),this.loadingService.show("Uploading. Please Wait...this may take some time"),this.service.importConfig(i,this.selectedMasterName,this.FCurrency).subscribe(n=>{this.loadingService.hide(),console.log("result"),"ok"==n.status?(this.alertService.success("Request Successful"),this.selectedMasterName="",this.fileList=null,this.fileSelector_Import.nativeElement.value=null):"errorfile"==n.status?this.alertService.info("Some of the rows cannot be saved.Please check 'Upload Status' for more details."):"error"===n.status?this.alertService.info("Error :"+n.result):"File Changed After Select"===n.status?(this.loadingService.hide(),this.fileSelector_Import.nativeElement.value=null,this.clearFile(),this.alertService.info("File Changed after selection. Please select file again.")):(this.loadingService.hide(),this.alertService.info(n.result))},n=>{console.log("R",n),this.loadingService.hide(),this.alertService.info(n)})}}else this.alertService.info("Please Select Master.");else this.alertService.info("Please Select File.")}resetConfig(){this.form=this.fb.group({items:this.fb.array([])}),this.excelImportConfig=[],this.selectedMasterName="",this.importErrorList=[],this.preventNavigationService.preventNavigation(!1)}CurrencyChange(t){let i=this.masterService.Currencies.filter(n=>n.CURNAME==this.FCurrency)[0];this.EXRATE=i.EXRATE}MandatoryChanged(t,i){let n=this.form.get("items");!t.target.checked||n.at(i).patchValue({AddToSheet:!0})}AddToSheetChanged(t,i){let n=this.form.get("items");if(!n.controls[i].get("Mandatory").value)return!0;n.at(i).patchValue({AddToSheet:!0})}onLoadMaster(){null!=this.selectedMasterName&&""!=this.selectedMasterName?(this.loadingService.show("Loading Master Data. Please Wait..."),this.service.loadImportErrorList(this.selectedMasterName).subscribe(t=>{this.loadingService.hide(),this.importErrorList=t},t=>{this.loadingService.hide(),this.alertService.info("No Data Found"),console.log(t)})):this.alertService.info("Please Select Master.")}onLoadMargin(){}downloadErrorStatus(){this.selectedMasterName&&null!=this.selectedMasterName&&null!=this.selectedMasterName&&""!=this.selectedMasterName?(console.log("masterName",this.selectedMasterName),this.loadingService.show("Excel file is downloading..Please wait"),this.service.downloadExcelErrorStatus(this.selectedMasterName).subscribe(i=>{console.log("Res ko result",i),this.loadingService.hide();let n=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});Z.saveAs(n,`${this.selectedMasterName}.xlsx`)},i=>{console.log("Error message for excel",i),this.alertService.info("This excel file download is not possible."),this.loadingService.hide()})):this.alertService.info("Please Select a Master")}onSaveMaster(){null!=this.selectedMasterName&&""!=this.selectedMasterName?(this.loadingService.show("Saving Master Data. Please Wait..."),this.service.saveCorrectedList(this.importErrorList,this.selectedMasterName).subscribe(t=>{this.loadingService.hide(),this.alertService.success("Successfully Saved.")},t=>{this.loadingService.hide(),this.alertService.info("No Data Found"),console.log(t)})):this.alertService.info("Please Select Master.")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.d),e.Y36(g.c),e.Y36(_.V),e.Y36(C.P),e.Y36(Y),e.Y36(M.F0),e.Y36(M.gz),e.Y36(b.qu),e.Y36(O.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["excel-import-config"]],viewQuery:function(t,i){if(1&t&&(e.Gf(m,5),e.Gf(T,5)),2&t){let n;e.iGM(n=e.CRH())&&(i.fileSelector_Import=n.first),e.iGM(n=e.CRH())&&(i.fileUploadPopup=n.first)}},decls:89,vars:15,consts:[[1,"main-container",2,"margin-top","0px","; margin-bottom","0px","height","auto"],[1,"row"],[1,"col-md-12"],["id","sheet-generation-tabs",1,"tabbable"],[1,"nav","nav-tabs",2,"background-color","#d9e5e7"],[1,"nav-item"],["href","#sheet-generation","data-toggle","tab",1,"nav-link","active"],["href","#upload-sheet","data-toggle","tab",1,"nav-link"],["href","#update-status","data-toggle","tab",1,"nav-link"],[1,"tab-content"],["id","sheet-generation",1,"tab-pane","active"],[1,"row","clearfix"],["class","col-md-4",4,"ngIf"],[1,"col-md-8"],["type","button",1,"btn","btn-info",2,"margin-right","10px",3,"click"],["type","button ",1,"btn","btn-info",2,"margin-right","10px",3,"click"],[1,"form-horizontal",3,"formGroup"],[1,"col-md-12",2,"height","400px","overflow-y","auto"],["class","table",4,"ngIf"],["id","upload-sheet",1,"tab-pane"],[1,"col-md-4"],[1,"form-group"],["name","selectedMaster",1,"form-control",2,"height","35px",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","form-group",4,"ngIf"],["type","file","accept",".xlsx, .csv",1,"form-control",2,"height","41px","font-size","14px",3,"change"],["fileSelector_Import",""],[1,"btn","btn-info",3,"click"],["id","update-status",1,"tab-pane"],["class","col-md-12","style","width: 100%; height: 400px;  overflow: auto;",4,"ngIf"],["id","Margin",1,"tab-pane"],["id","Scheme",1,"tab-pane"],["id","Product",1,"tab-pane"],[3,"popupsettings","onUploaded"],["fileUploadPopup",""],["class","form-group row",4,"ngIf"],[1,"form-group","row"],[1,"col-md-4","form-control-label"],["name","selectedMaster",1,"form-control",2,"color","black",3,"ngModel","ngModelChange"],[3,"value"],[1,"col-md-6"],[1,"table"],["formArrayName","items",4,"ngFor","ngForOf"],["formArrayName","items"],[3,"formGroupName"],["formControlName","SNO","readonly","",1,"non-editable"],["formControlName","ColumnName","readonly","",1,"non-editable"],["formControlName","ColumnSize","readonly","",1,"non-editable"],["formControlName","DataType","readonly","",1,"non-editable"],["type","checkbox","formControlName","Mandatory",1,"non-editable",3,"change"],["type","checkbox","formControlName","AddToSheet",1,"non-editable",3,"change"],["formControlName","ColumnValue","readonly","",1,"non-editable"],[1,"form-control",2,"color","black","height","35px",3,"ngModel","ngModelChange","change"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],["type","number",1,"form-control",2,"color","black","height","35px",3,"ngModel","ngModelChange"],["type","button ",1,"btn","btn-info",3,"click"],[1,"col-md-12",2,"width","100%","height","400px","overflow","auto"],[4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"ngModel","name","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ul",4)(5,"li",5)(6,"a",6),e._uU(7,"Sheet Generation"),e.qZA()(),e.TgZ(8,"li",5)(9,"a",7),e._uU(10,"Upload Sheet"),e.qZA()(),e.TgZ(11,"li",5)(12,"a",8),e._uU(13,"Upload Status"),e.qZA()()(),e.TgZ(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",2),e.YNc(18,I,2,1,"div",12),e.YNc(19,L,3,1,"div",12),e.TgZ(20,"div",13)(21,"button",14),e.NdJ("click",function(){return i.downloadConfigExcel()}),e._uU(22," Download Sample Excel "),e.qZA(),e.TgZ(23,"button",14),e.NdJ("click",function(){return i.resetConfig()}),e._uU(24," Clear Config "),e.qZA(),e.TgZ(25,"button",15),e.NdJ("click",function(){return i.cancel()}),e._uU(26," Back "),e.qZA()()()(),e._UZ(27,"hr"),e.TgZ(28,"form",16)(29,"div",17),e.YNc(30,N,19,1,"table",18),e.qZA()()(),e.TgZ(31,"div",19)(32,"div",11)(33,"div",2)(34,"div",20)(35,"div",2)(36,"div",21)(37,"label"),e._uU(38,"Select a Master "),e.qZA(),e.TgZ(39,"select",22),e.NdJ("ngModelChange",function(l){return i.selectedMasterName=l}),e.YNc(40,k,2,2,"option",23),e.qZA()(),e.YNc(41,D,5,2,"div",24),e.YNc(42,B,4,1,"div",24),e.TgZ(43,"div",21)(44,"label"),e._uU(45,"Choose a Path "),e.qZA(),e.TgZ(46,"input",25,26),e.NdJ("change",function(l){return i.onFileChange(l)}),e.qZA()(),e.TgZ(48,"button",27),e.NdJ("click",function(){return i.importConfig()}),e._uU(49," Upload File "),e.qZA(),e.TgZ(50,"button",15),e.NdJ("click",function(){return i.cancel()}),e._uU(51," Back "),e.qZA()()()()()(),e.TgZ(52,"div",28)(53,"div",11)(54,"div",2),e.YNc(55,$,2,1,"div",12),e.YNc(56,G,3,1,"div",12),e.qZA(),e._UZ(57,"hr"),e.YNc(58,H,8,4,"div",29),e.qZA()(),e.TgZ(59,"div",30)(60,"div",11)(61,"div",2)(62,"div",13)(63,"button",14),e.NdJ("click",function(){return i.UpdateMarginImport()}),e._uU(64," Upload Margin "),e.qZA()()(),e._UZ(65,"hr"),e.YNc(66,te,8,4,"div",29),e.qZA()(),e.TgZ(67,"div",31)(68,"div",11)(69,"div",2)(70,"div",13)(71,"button",14),e.NdJ("click",function(){return i.showImportScheme()}),e._uU(72," Load "),e.qZA(),e.TgZ(73,"button",14),e.NdJ("click",function(){return i.UpdateSchemeImport()}),e._uU(74," Update "),e.qZA()()(),e._UZ(75,"hr"),e.YNc(76,re,8,4,"div",29),e.qZA()(),e.TgZ(77,"div",32)(78,"div",11)(79,"div",2)(80,"div",13)(81,"button",14),e.NdJ("click",function(){return i.showImportScheme()}),e._uU(82," Load "),e.qZA(),e.TgZ(83,"button",14),e.NdJ("click",function(){return i.UpdateSchemeImport()}),e._uU(84," Update "),e.qZA()()(),e._UZ(85,"hr"),e.YNc(86,ce,8,4,"div",29),e.qZA()()()()()()(),e.TgZ(87,"file-uploader-popup",33,34),e.NdJ("onUploaded",function(l){return i.fileUploadSuccess(l)}),e.qZA()),2&t&&(e.xp6(18),e.Q6J("ngIf",!i.excelImportConfig.length),e.xp6(1),e.Q6J("ngIf",i.excelImportConfig.length),e.xp6(9),e.Q6J("formGroup",i.form),e.xp6(2),e.Q6J("ngIf",i.excelImportConfig.length),e.xp6(9),e.Q6J("ngModel",i.selectedMasterName),e.xp6(1),e.Q6J("ngForOf",i.masterList),e.xp6(1),e.Q6J("ngIf","Import Purchase"==i.selectedMasterName),e.xp6(1),e.Q6J("ngIf","Import Purchase"==i.selectedMasterName),e.xp6(13),e.Q6J("ngIf",!i.importErrorList.length),e.xp6(1),e.Q6J("ngIf",i.importErrorList.length),e.xp6(2),e.Q6J("ngIf",i.importErrorList.length),e.xp6(8),e.Q6J("ngIf",i.importErrorList.length),e.xp6(10),e.Q6J("ngIf",i.importErrorList.length),e.xp6(10),e.Q6J("ngIf",i.importErrorList.length),e.xp6(1),e.Q6J("popupsettings",i.fileUploadPopupSettings))},dependencies:[y.sg,y.O5,b._Y,b.YN,b.Kr,b.Fj,b.wV,b.Wl,b.EJ,b.JJ,b.JL,b.On,b.sg,b.u,b.x0,b.CE,r.U,J.VO],styles:["input.non-editable[_ngcontent-%COMP%] {\n      border: none;\n      background: #f1f1f1;\n      text-align: left;\n    }\n  \n    .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n      text-align: left;\n    }\n  \n    input[_ngcontent-%COMP%] {\n      min-width: 90px;\n      height: 23px;\n    }\n  \n    tr[_ngcontent-%COMP%] {\n      height: 30px;\n      line-height: 30px;\n      text-align: center;\n    }"]}),o})();var q=s(82661);const ue=[{path:"",component:de,canActivate:[q.C]}];let pe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[M.Bz.forChild(ue),M.Bz]}),o})();var me=s(89953),he=s(54536),ge=s(55618);let fe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[q.C,O.p,Y],imports:[y.ez,me.m,pe,he.Is,ge.c.forRoot()]}),o})()}}]);