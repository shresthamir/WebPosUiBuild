"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4666],{73965:(C,p,e)=>{e.d(p,{_:()=>v});var t=e(94650),u=e(34793),f=e(80529),r=e(71180);let d=(()=>{class n{constructor(o,s,c){this.router=o,this.http=s,this.state=c;const a=this.state.getGlobalSetting("apiUrl");a&&a.length>0&&(this.apiUrl=a)}authenticateOTP(o){return this.http.get(this.apiUrl+`/authenticateOTP?OTP=${o}`)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(u.F0),t.LFG(f.eN),t.LFG(r.q))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=e(67311),m=e(36895),l=e(24006);function h(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h6",5),t._uU(5,"OTP Authentication"),t.qZA()()(),t.TgZ(6,"div",6)(7,"div",7)(8,"p",8),t._uU(9," OTP Authorization is required to perform selected Action. Please enter OTP Pin to continue. "),t.qZA(),t.TgZ(10,"label"),t._uU(11,"OTP Pin:"),t.qZA(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(c){t.CHM(o);const a=t.oxw();return t.KtG(a.otpPin=c)}),t.qZA()()(),t.TgZ(13,"div",10)(14,"div",11)(15,"button",12),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.submit())}),t._uU(16,"SUBMIT"),t.qZA(),t.TgZ(17,"button",13),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.closeDialog())}),t._uU(18,"CANCEL"),t.qZA()()()()()}if(2&n){const o=t.oxw();t.xp6(12),t.Q6J("ngModel",o.otpPin)}}let v=(()=>{class n{constructor(o,s){this.otpService=o,this.alertService=s,this.okClicked=new t.vpe,this.isActive=!1}ngOnInit(){}show(){this.isActive=!0}closeDialog(){this.isActive=!1,this.otpPin=null}submit(){this.otpService.authenticateOTP(this.otpPin).subscribe(o=>{"ok"==o.status?(this.alertService.success(o.result),setTimeout(()=>{this.okClicked.emit(!0)},2e3),this.closeDialog(),this.otpPin=null):(this.alertService.info(o),this.okClicked.emit(!1))})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d),t.Y36(g.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-otp"]],outputs:{okClicked:"okClicked"},features:[t._Bn([d])],decls:1,vars:1,consts:[["class","confirmation-container",4,"ngIf"],[1,"confirmation-container"],[1,"card"],[1,"card-header",2,"background-color","lightsteelblue","padding","0.5rem 1.25rem"],[1,"row"],[2,"font-size","1.1rem"],[1,"row",2,"margin-top","1rem"],[1,"mx-4"],[2,"font-size","15px","font-weight","500"],["type","number","name","otpPin","id","otpPin",3,"ngModel","ngModelChange"],[2,"display","flex","justify-content","center"],[1,"button-group","my-4"],["type","button",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"],["type","button","title","Cancel",1,"btn","btn-info",2,"margin-right","2px","width","75px","font-size","12px",3,"click"]],template:function(o,s){1&o&&t.YNc(0,h,19,1,"div",0),2&o&&t.Q6J("ngIf",s.isActive)},dependencies:[m.O5,l.Fj,l.wV,l.JJ,l.On],styles:[".confirmation-container[_ngcontent-%COMP%]{position:fixed!important;transform:translate(-50px,-50px);background:#ffffff;z-index:99999;width:33%;top:33%;left:37%}label[_ngcontent-%COMP%]{font-size:14px;font-weight:550}input[_ngcontent-%COMP%]{width:70%}.button-group[_ngcontent-%COMP%]{position:absolute}.card[_ngcontent-%COMP%]{height:15rem;border:2px solid slategray}"]}),n})()},90911:(C,p,e)=>{e.r(p),e.d(p,{TaxConfigModule:()=>v});var t=e(36895),u=e(34793),f=e(52103),r=e(94650);const d=[{path:"",component:f.l}];let g=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[u.Bz.forChild(d),u.Bz]}),n})();var m=e(89953),l=e(65412),h=e(64069);let v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[h.H],imports:[t.ez,g,m.m,l.Is]}),n})()}}]);