"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[1536],{81536:(w,d,l)=>{l.r(d),l.d(d,{ChannelModule:()=>T});var h=l(89953),m=l(53074),p=l(92752),c=l(45365),r=l(64298),n=l(36336),C=l(67311);const u=["genericGrid"];function g(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"button",5),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.AddChanel())}),n._uU(1,"New Channel "),n.qZA()}}function f(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",6)(1,"div",7),n._UZ(2,"ChannelTree"),n.qZA(),n.TgZ(3,"div",8)(4,"ba-card",9)(5,"ims-grid",10,11),n.NdJ("onViewClicked",function(a){n.CHM(t);const s=n.oxw();return n.KtG(s.onViewClicked(a))})("onEditClicked",function(a){n.CHM(t);const s=n.oxw();return n.KtG(s.onEditClick(a))})("onDeleteClicked",function(a){n.CHM(t);const s=n.oxw();return n.KtG(s.onDeleteClick(a))}),n.qZA()()()()}if(2&e){const t=n.oxw();n.xp6(5),n.Q6J("popupsettings",t.imsGridSettings)}}function v(e,o){1&e&&(n.TgZ(0,"div",6)(1,"div",7),n._UZ(2,"ChannelTree"),n.qZA(),n.TgZ(3,"div",8),n._UZ(4,"ba-card",9),n.qZA()())}function _(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"div",15)(4,"button",16),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.close())}),n.TgZ(5,"span",17),n._uU(6,"\xd7"),n.qZA()(),n.TgZ(7,"h4",18),n._uU(8,"Information"),n.qZA()()()()()}}const y=[{path:"",component:(()=>{class e{constructor(t,i,a){this.router=t,this.alertService=i,this.masterService=a,this.imsGridSettings=new r.U5,this.userProfile={},this.OnlyForCentral=!0,this.popup=!1,this.menudata=[],this.reportHeaders=["Channel Code","Name","Channel Type","Parent Channel","Status"],this.reportBody=["ChannelCode","ChannelName","ChannelType","ParentChannel","STATUS"],this.reportData=[],this.imsGridSettings={title:"Channel",apiEndpoints:"/getAllChanelPagedList",pageSize:10,showActionButton:!0,columns:[{key:"ChannelName",title:"Channel",hidden:!1,noSearch:!1,type:"string"}],actionKeys:[{text:"Edit",title:"Edit",icon:"fa fa-edit",type:r.Dw.EDIT},{text:"View",title:"View",icon:"fa fa-eye",type:r.Dw.VIEW},{text:"Delete",title:"View",icon:"fa fa-trash",type:r.Dw.DELETE}]}}ngOnInit(){}AddChanel(){try{this.router.navigate(["./pages/masters/channel/add-channel",{mode:"add",returnUrl:this.router.url}])}catch(t){alert(t)}}onEditClick(t){try{this.router.navigate(["./pages/masters/channel/add-channel",{name:t.data.ChannelName,mode:"edit",returnUrl:this.router.url}])}catch(i){this.alertService.info(i)}}onViewClicked(t){try{this.router.navigate(["./pages/masters/channel/add-channel",{name:t.data.ChannelName,mode:"view",returnUrl:this.router.url}])}catch(i){this.alertService.info(i)}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.F0),n.Y36(C.c),n.Y36(m.P))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-channel-list"]],viewQuery:function(t,i){if(1&t&&n.Gf(u,5),2&t){let a;n.iGM(a=n.CRH())&&(i.genericGrid=a.first)}},decls:6,vars:4,consts:[[1,"widgets"],[1,"row"],["type","button","class","btn btn-info","style","margin-left:18px; margin-bottom: 10px;",3,"click",4,"ngIf"],["class","row col-md-12",4,"ngIf"],["class","print-modal-sticky","style","display : block; padding: 0px;  margin-bottom: 25px;height: auto;\n  position: absolute;right: 20%;top: 5px;width: 50%;z-index: 9999999;",4,"ngIf"],["type","button",1,"btn","btn-info",2,"margin-left","18px","margin-bottom","10px",3,"click"],[1,"row","col-md-12"],[1,"col-md-3"],[1,"col-md-9"],["title","Channel & Sub-Channel","baCardClass","with-scroll"],[3,"popupsettings","onViewClicked","onEditClicked","onDeleteClicked"],["genericGrid",""],[1,"print-modal-sticky",2,"display","block","padding","0px","margin-bottom","25px","height","auto","position","absolute","right","20%","top","5px","width","50%","z-index","9999999"],[1,"modal-dialog","modal-sm","modal-dialog-centered"],[1,"modal-content","modal-content-main-area"],[1,"modal-header"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["id","myModalLabel",1,"modal-title"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,g,2,0,"button",2),n.qZA(),n.YNc(3,f,7,1,"div",3),n.YNc(4,v,5,0,"div",3),n.qZA(),n.YNc(5,_,9,0,"div",4)),2&t&&(n.xp6(2),n.Q6J("ngIf",1==i.OnlyForCentral),n.xp6(1),n.Q6J("ngIf",1==i.OnlyForCentral),n.xp6(1),n.Q6J("ngIf",0==i.OnlyForCentral),n.xp6(1),n.Q6J("ngIf",1==i.popup))},dependencies:[p.O5,r.JF]}),e})()},{path:"add-channel",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-channel-form"]],decls:2,vars:0,template:function(t,i){1&t&&(n.TgZ(0,"p"),n._uU(1,"channel-form works!"),n.qZA())}}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(y),c.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[m.P],imports:[p.ez,x,h.m]}),e})()}}]);