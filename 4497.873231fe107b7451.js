"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[4497],{84497:(F,a,r)=>{r.r(a),r.d(a,{BackupRestoreModule:()=>y});var p=r(92752),u=r(72011),c=r(95570),e=r(28611),v=r(71180),d=r(76165),m=r(67297),S=r(69389),f=r(14970),R=r(53074),k=r(67311),B=r(62870);let l=(()=>{class s{constructor(t,o,n,b,h,C,M,A,T){this.state=t,this.router=o,this.http=n,this.authService=b,this.setting=h,this.spinnerService=C,this.masterService=M,this.alertService=A,this.authenticationService=T,this.AppSettings={},this.userProfile={},this.result={},this.AppSettings=h.appSetting,this.result.dashboardpurchase={},this.result.dashboardsales={},this.result.dashboardtender={},this.result.dashboardhivalue={},this.userProfile=this.authService.getUserProfile()}ngOnInit(){}onBackupClick(){this.spinnerService.show("Backing up..."),this.masterService.getBackup().subscribe(t=>{t&&(this.spinnerService.hide(),"ok"==t.status?this.alertService.success(t.result):this.alertService.error(t.result))},t=>{this.spinnerService.hide()})}onRestoreClick(){this.spinnerService.show("Restoring..."),this.masterService.getRestore().subscribe(t=>{t&&(this.spinnerService.hide(),"ok"==t.status?this.alertService.success(t.result):this.alertService.error(t.result))},t=>{this.spinnerService.hide()})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.q),e.Y36(c.F0),e.Y36(d.eN),e.Y36(m.e),e.Y36(S.R),e.Y36(f.V),e.Y36(R.P),e.Y36(k.c),e.Y36(B.$))},s.\u0275cmp=e.Xpm({type:s,selectors:[["backup-restore"]],decls:7,vars:0,consts:[[1,"col-md-12",2,"margin-top","15%","margin-left","45%"],[1,"row"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"row",2,"margin-top","10px"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.onBackupClick()}),e._uU(3,"Backup"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",2),e.NdJ("click",function(){return o.onRestoreClick()}),e._uU(6,"Restore"),e.qZA()()())},encapsulation:2}),s})();const g=[{path:"",component:l,children:[{path:"backup-restore",component:l}]}];let Y=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[c.Bz.forChild(g),c.Bz]}),s})(),y=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,u.u5,Y,u.UX]}),s})()}}]);