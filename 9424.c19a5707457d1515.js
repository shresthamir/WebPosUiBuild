"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[9424],{98692:(_,g,r)=>{r.d(g,{n:()=>s});var p=r(64537);let s=(()=>{class n{constructor(c){this.el=c}onKeyDown(c){let i=c;if(this.OnlyNumber){if(-1!==[46,8,9,27,13,110].indexOf(i.keyCode)||190==i.keyCode&&!1===i.shiftKey||65==i.keyCode&&!0===i.ctrlKey||67==i.keyCode&&!0===i.ctrlKey||88==i.keyCode&&!0===i.ctrlKey||i.keyCode>=35&&i.keyCode<=39)return;(i.shiftKey||i.keyCode<48||i.keyCode>57)&&(i.keyCode<96||i.keyCode>105)&&i.preventDefault()}}}return n.\u0275fac=function(c){return new(c||n)(p.Y36(p.SBq))},n.\u0275dir=p.lG2({type:n,selectors:[["","OnlyNumber",""]],hostBindings:function(c,i){1&c&&p.NdJ("keydown",function(d){return i.onKeyDown(d)})},inputs:{OnlyNumber:"OnlyNumber"}}),n})()},9424:(_,g,r)=>{r.r(g),r.d(g,{CompanyInfoModule:()=>E});var p=r(7976),s=r(28698),n=r(64537),u=r(53074),c=r(67311),i=r(14970),C=r(88692),d=r(20092),h=r(94071),y=r(98692);const M=["genericGrid"];function T(l,m){if(1&l){const e=n.EpF();n.TgZ(0,"div")(1,"div",8)(2,"div",9)(3,"label",10),n._uU(4,"Company ID*"),n.qZA(),n.TgZ(5,"input",11),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.COMPANYID=o)}),n.qZA()(),n.TgZ(6,"div",9)(7,"label",10),n._uU(8,"Name*"),n.qZA(),n.TgZ(9,"input",12),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.NAME=o)}),n.qZA()(),n.TgZ(10,"div",9)(11,"label",10),n._uU(12,"Address (200 character):"),n.qZA(),n.TgZ(13,"textarea",13),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.ADDRESS=o)}),n.qZA()(),n.TgZ(14,"div",9)(15,"label",10),n._uU(16,"Address2 (100 character):"),n.qZA(),n.TgZ(17,"textarea",14),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.ADDRESS2=o)}),n.qZA()(),n.TgZ(18,"div",9)(19,"label",10),n._uU(20,"Place:"),n.qZA(),n.TgZ(21,"input",15),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.PLACE=o)}),n.qZA()(),n.TgZ(22,"div",9)(23,"label",10),n._uU(24,"Telephone No:"),n.qZA(),n.TgZ(25,"input",16),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.TELA=o)}),n.qZA()(),n.TgZ(26,"div",9)(27,"label",10),n._uU(28,"Mobile No:"),n.qZA(),n.TgZ(29,"input",17),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.TELB=o)}),n.qZA()(),n.TgZ(30,"div",9)(31,"label",10),n._uU(32,"STATE*:"),n.qZA(),n.TgZ(33,"input",18),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.STATENAME=o)})("keydown.enter",function(){n.CHM(e);const o=n.oxw();return n.KtG(o.onSateClicked())}),n.qZA()(),n.TgZ(34,"div",9)(35,"label",10),n._uU(36,"VAT No:"),n.qZA(),n.TgZ(37,"input",19),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.GSTNO=o)}),n.qZA()(),n.TgZ(38,"div",9)(39,"label",10),n._uU(40,"Email:"),n.qZA(),n.TgZ(41,"input",20),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.EMAIL=o)}),n.qZA()(),n.TgZ(42,"div",9)(43,"label",10),n._uU(44,"Year start*"),n.qZA(),n.TgZ(45,"input",21),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.FBDATE=o)}),n.qZA()(),n.TgZ(46,"div",9)(47,"label",10),n._uU(48,"Year end*"),n.qZA(),n.TgZ(49,"input",22),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.FEDATE=o)}),n.qZA()(),n.TgZ(50,"div",9)(51,"label",10),n._uU(52,"Phiscal Year:"),n.qZA(),n.TgZ(53,"input",23),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.PhiscalID=o)}),n.qZA()(),n.TgZ(54,"div",9)(55,"label",10),n._uU(56,"ORGTYPE :"),n.qZA(),n.TgZ(57,"input",24),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.ORG_TYPE=o)}),n.qZA()(),n.TgZ(58,"div",9)(59,"label",10),n._uU(60,"PINCODE *:"),n.qZA(),n.TgZ(61,"input",19),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.PINCODE=o)}),n.qZA()(),n.TgZ(62,"div",9)(63,"label",10),n._uU(64,"PERSON NAME:"),n.qZA(),n.TgZ(65,"input",15),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.MERCHANTLEGALNAME=o)}),n.qZA()(),n.TgZ(66,"div",9)(67,"label",10),n._uU(68,"CUSTOMER CODE:"),n.qZA(),n.TgZ(69,"input",15),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.CUSTOMERCODE=o)}),n.qZA()(),n.TgZ(70,"div",9)(71,"label",10),n._uU(72,"CITY:"),n.qZA(),n.TgZ(73,"input",15),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.CITY=o)}),n.qZA()(),n.TgZ(74,"div",9)(75,"label",10),n._uU(76,"Bank Name:"),n.qZA(),n.TgZ(77,"input",25),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.BankName=o)}),n.qZA()(),n.TgZ(78,"div",9)(79,"label",10),n._uU(80,"Account No:"),n.qZA(),n.TgZ(81,"input",26),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.AccountNo=o)}),n.qZA()(),n.TgZ(82,"div",9)(83,"label",10),n._uU(84,"IFSC Code:"),n.qZA(),n.TgZ(85,"input",27),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.IFSCCode=o)}),n.qZA()(),n.TgZ(86,"div",9)(87,"label",10),n._uU(88,"Account Holder Name:"),n.qZA(),n.TgZ(89,"input",28),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.AcountHolder=o)}),n.qZA()(),n.TgZ(90,"div",9)(91,"label",10),n._uU(92,"Bank Branch:"),n.qZA(),n.TgZ(93,"input",29),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.BankBranch=o)}),n.qZA()(),n.TgZ(94,"div",9)(95,"label",10),n._uU(96,"Declaration (400 character):"),n.qZA(),n.TgZ(97,"input",30),n.NdJ("ngModelChange",function(o){n.CHM(e);const t=n.oxw();return n.KtG(t.company.Declaration=o)}),n.qZA()()()()}if(2&l){const e=n.oxw();n.xp6(5),n.Q6J("ngModel",e.company.COMPANYID),n.xp6(4),n.Q6J("ngModel",e.company.NAME),n.xp6(4),n.Q6J("ngModel",e.company.ADDRESS),n.xp6(4),n.Q6J("ngModel",e.company.ADDRESS2),n.xp6(4),n.Q6J("ngModel",e.company.PLACE),n.xp6(4),n.Q6J("ngModel",e.company.TELA),n.xp6(4),n.Q6J("ngModel",e.company.TELB),n.xp6(4),n.Q6J("ngModel",e.company.STATENAME),n.xp6(4),n.Q6J("ngModel",e.company.GSTNO),n.xp6(4),n.Q6J("ngModel",e.company.EMAIL)("email",!0),n.xp6(4),n.Q6J("ngModel",e.company.FBDATE),n.xp6(4),n.Q6J("ngModel",e.company.FEDATE),n.xp6(4),n.Q6J("ngModel",e.company.PhiscalID),n.xp6(4),n.Q6J("ngModel",e.company.ORG_TYPE),n.xp6(4),n.Q6J("ngModel",e.company.PINCODE),n.xp6(4),n.Q6J("ngModel",e.company.MERCHANTLEGALNAME),n.xp6(4),n.Q6J("ngModel",e.company.CUSTOMERCODE),n.xp6(4),n.Q6J("ngModel",e.company.CITY),n.xp6(4),n.Q6J("ngModel",e.company.BankName),n.xp6(4),n.Q6J("ngModel",e.company.AccountNo),n.xp6(4),n.Q6J("ngModel",e.company.IFSCCode),n.xp6(4),n.Q6J("ngModel",e.company.AcountHolder),n.xp6(4),n.Q6J("ngModel",e.company.BankBranch),n.xp6(4),n.Q6J("ngModel",e.company.Declaration)}}const f=[{path:"",component:(()=>{class l{constructor(e,a,o){this.masterService=e,this.alertService=a,this.spinnerservice=o,this.gridPopupSettings=new s.im,this.company={},this.StateList=[],this.gridPopupSettings=Object.assign(new s.im,{title:"STATE",apiEndpoints:"/getStatesPagedList",defaultFilterIndex:0,columns:[{key:"StateCode",title:"State Code",hidden:!1,noSearch:!1},{key:"StateName",title:"State Name",hidden:!1,noSearch:!1}]})}ngOnInit(){try{this.masterService.loadCompany().subscribe(e=>{this.company=e,e&&(this.company.FBDATE=e?e.FBDATE.substring(0,10):"",this.company.FEDATE=e?e.FEDATE.substring(0,10):"")},e=>{this.company={}})}catch{}}onSateClicked(){this.genericGrid.show()}onSaveClicked(){try{this.validateCompanyInfo()&&(this.spinnerservice.show("Please Wait while processing your data."),this.masterService.saveCompany(this.company).subscribe(e=>{"ok"===e.status?(this.spinnerservice.hide(),this.alertService.success("Company Info Updates successfully...")):(this.spinnerservice.hide(),this.alertService.info(e._body))},e=>{this.spinnerservice.hide(),this.alertService.info(e)}))}catch{}}dblClickPopupItem(e){this.company.STATE=e.StateCode,this.company.STATENAME=e.StateName}validateCompanyInfo(){if(this.company){const e=[];(null==this.company.NAME||void 0===this.company.NAME||""===this.company.NAME)&&e.push("Company name must be defined."),(null==this.company.FBDATE||void 0===this.company.FBDATE||""===this.company.FBDATE)&&e.push("Phiscal Year Begin Date must be defined."),(null==this.company.FEDATE||void 0===this.company.FEDATE||""===this.company.FEDATE)&&e.push("Phiscal Year End Date must be defined."),(null==this.company.PhiscalID||void 0===this.company.PhiscalID||""===this.company.PhiscalID)&&e.push("PhiscalID  must be defined."),(null==this.company.ORG_TYPE||void 0===this.company.ORG_TYPE||""===this.company.ORG_TYPE)&&e.push("Nature of Company  must be defined."),(null==this.company.STATE||void 0===this.company.STATE||""===this.company.STATE)&&e.push("State of Company  must be defined."),("Regular"===this.company.GSTTYPE||"Composite"===this.company.GSTTYPE)&&(""===this.company.GSTNO||null==this.company.GSTNO)&&e.push("VAT NO is required"),this.company.GSTNO&&9!==this.company.GSTNO.length&&e.push("VAT number must be 9 digit only."),this.company&&null!==this.company.Declaration&&this.company.Declaration.length>400&&e.push("Declaration Cannot be more than 400 character."),this.company&&null!==this.company.ADDRESS&&this.company.ADDRESS.length>200&&e.push("Adress Cannot be more than 200 character."),this.company&&null!==this.company.ADDRESS2&&this.company.ADDRESS2.length>100&&e.push("ADDRESS2 Cannot be more than 100 character."),this.company&&null!==this.company.TELB&&this.company.TELB.length>10&&e.push("Mobile Number must be 10 digit.");const a=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;if(this.company&&this.company.EMAIL&&!a.test(this.company.EMAIL)&&e.push("Invalid Email Detected."),e.length){const o=e.join("\n");return this.alertService.info(o),!1}return!0}}}return l.\u0275fac=function(e){return new(e||l)(n.Y36(u.P),n.Y36(c.c),n.Y36(i.V))},l.\u0275cmp=n.Xpm({type:l,selectors:[["CompanyFormSelector"]],viewQuery:function(e,a){if(1&e&&n.Gf(M,5),2&e){let o;n.iGM(o=n.CRH())&&(a.genericGrid=o.first)}},decls:11,vars:2,consts:[[1,"sticky-top"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],["type","button","title","onSave",1,"btn","btn-info","pull-right",3,"click"],[4,"ngIf"],[3,"popupsettings","onItemDoubleClick"],["genericGrid",""],[1,"",2,"height","500px","overflow","scroll","margin","0 5px","padding-bottom","30px"],[1,"form-inline"],[1,"col-md-2"],["IMSINPUTREADONLY","true","type","text","placeholder","maximum 3 Character","placeholder","ID",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Name",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["name","Address",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["name","Address2",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","OnlyNumber","true","name","telno",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","OnlyNumber","true","name","mobileNo",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","IMSINPUTREADONLY","true","placeholder","State",1,"form-control","col-md-4",3,"ngModel","ngModelChange","keydown.enter"],["type","text","OnlyNumber","true",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","email","placeholder","Email",1,"form-control","col-md-4",3,"ngModel","email","ngModelChange"],["type","date","IMSINPUTREADONLY","true","placeholder","Year Start Date",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","date","IMSINPUTREADONLY","true","placeholder","Year end Date",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Fiscal Year","IMSINPUTREADONLY","true",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["type","text","IMSINPUTREADONLY","true",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","BankName","name","BankName",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","AccountNo","name","AccountNo",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","IFSCCode","name","IFSCCode",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","AcountHolder","name","AccountHolder",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","BankBranch","name","BankBranch",1,"form-control","col-md-4",3,"ngModel","ngModelChange"],["placeholder","Declaration","name","Declaration",1,"form-control","col-md-4",3,"ngModel","ngModelChange"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),n._uU(4," Add Company Information "),n.qZA()(),n.TgZ(5,"div",3)(6,"button",4),n.NdJ("click",function(){return a.onSaveClicked()}),n._uU(7," Save "),n.qZA()()()(),n.YNc(8,T,98,25,"div",5),n.TgZ(9,"generic-popup-grid",6,7),n.NdJ("onItemDoubleClick",function(t){return a.dblClickPopupItem(t)}),n.qZA()),2&e&&(n.xp6(8),n.Q6J("ngIf",a.company),n.xp6(1),n.Q6J("popupsettings",a.gridPopupSettings))},dependencies:[C.O5,d.Fj,d.JJ,d.on,d.On,h.u,s.Zl,y.n],encapsulation:2}),l})()}];let A=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[p.Bz.forChild(f),p.Bz]}),l})();var Z=r(69401);let E=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[Z.m,A]}),l})()}}]);