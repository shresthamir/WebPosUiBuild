"use strict";(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[3731],{77879:(m,u,s)=>{s.d(u,{H:()=>d});var e=s(64537),g=s(53074);let d=(()=>{class a{constructor(r){this.masterRepo=r}ngOnInit(){}isOldFYearDB(){return 1===this.masterRepo.userSetting.IsOldFyearDB}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(g.P))},a.\u0275dir=e.lG2({type:a,selectors:[["","appOldFYearDB",""]],exportAs:["appOldFYearDB"]}),a})()},26952:(m,u,s)=>{s.d(u,{ZQ:()=>_}),s(88265);var g=s(88692),d=s(20092),a=s(66277),c=s(35531),r=s(64537);let _=(()=>{class h{static forRoot(){return{ngModule:h}}}return h.\u0275fac=function(f){return new(f||h)},h.\u0275mod=r.oAB({type:h}),h.\u0275inj=r.cJS({providers:[a.$],imports:[g.ez,d.u5,c.Cl]}),h})()},66277:(m,u,s)=>{s.d(u,{$:()=>g});var e=s(64537);let g=(()=>{class d{transform(c,r){return c&&r?c.filter(_=>this.applyFilter(_,r)):c}applyFilter(c,r){return"string"==typeof c.text&&"string"==typeof r.text?!(r.text&&c.text&&-1===c.text.toLowerCase().indexOf(r.text.toLowerCase())):!(r.text&&c.text&&-1===c.text.toString().toLowerCase().indexOf(r.text.toString().toLowerCase()))}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275pipe=e.Yjl({name:"multiSelectFilter",type:d,pure:!1}),d})()},88265:(m,u,s)=>{s.d(u,{O:()=>M});var e=s(64537),g=s(20092);class d{constructor(l){("string"==typeof l||"number"==typeof l)&&(this.id=this.text=l,this.isDisabled=!1),"object"==typeof l&&(this.id=l.id,this.text=l.text,this.tooltip=l.tooltip,this.isDisabled=l.isDisabled)}}var a=s(66277),c=s(88692),r=s(35531);let _=(()=>{class i{constructor(t){this._elementRef=t,this.clickOutside=new e.vpe}onClick(t,n){n&&(this._elementRef.nativeElement.contains(n)||this.clickOutside.emit(t))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","clickOutside",""]],hostBindings:function(t,n){1&t&&e.NdJ("click",function(p){return n.onClick(p,p.target)},!1,e.evT)},outputs:{clickOutside:"clickOutside"}}),i})();function h(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t._placeholder)}}function C(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"span",16)(1,"span",17)(2,"span"),e._uU(3),e.qZA(),e.TgZ(4,"a",18),e.NdJ("click",function(o){const x=e.CHM(t).$implicit,b=e.oxw();return e.KtG(b.onItemClick(o,x))}),e._uU(5,"x"),e.qZA()()()}if(2&i){const t=l.$implicit,n=l.index,o=e.oxw();e.xp6(1),e.Q6J("hidden",n>o._settings.itemsShowLimit-1),e.uIk("title",t.tooltip),e.xp6(2),e.hij("",t.text,"\xa0")}}function f(i,l){if(1&i&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("+",t.itemShowRemaining(),"")}}function k(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleSelectAll())}),e._UZ(1,"input",21),e.TgZ(2,"div"),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.isAllItemsSelected())("disabled",t.disabled||t.isLimitSelectionReached()),e.xp6(2),e.Oqu(t.isAllItemsSelected()?t._settings.unSelectAllText:t._settings.selectAllText)}}function w(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",22)(1,"input",23),e.NdJ("ngModelChange",function(o){e.CHM(t);const p=e.oxw();return e.KtG(p.filter.text=o)})("ngModelChange",function(o){e.CHM(t);const p=e.oxw();return e.KtG(p.onFilterTextChange(o))}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("readOnly",t.disabled)("placeholder",t._settings.searchPlaceholderText)("ngModel",t.filter.text)}}function P(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",24),e.NdJ("click",function(o){const x=e.CHM(t).$implicit,b=e.oxw();return e.KtG(b.onItemClick(o,x))}),e._UZ(1,"input",25),e.TgZ(2,"div"),e._uU(3),e.qZA()()}if(2&i){const t=l.$implicit,n=e.oxw();e.uIk("title",t.tooltip),e.xp6(1),e.Q6J("checked",n.isSelected(t))("disabled",n.disabled||n.isLimitSelectionReached()&&!n.isSelected(t)||t.isDisabled),e.uIk("aria-label",t.text),e.xp6(2),e.Oqu(t.text)}}function S(i,l){if(1&i&&(e.TgZ(0,"li",26)(1,"h5"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t._settings.noFilteredDataAvailablePlaceholderText)}}function D(i,l){if(1&i&&(e.TgZ(0,"li",27)(1,"h5"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t._settings.noDataAvailablePlaceholderText)}}const y=function(i){return{"dropdown-multiselect--active":i}},F={provide:g.JU,useExisting:(0,e.Gpc)(()=>M),multi:!0},O=()=>{};let M=(()=>{class i{constructor(t,n){this.listFilterPipe=t,this.cdr=n,this._data=[],this.selectedItems=[],this.isDropdownOpen=!0,this._placeholder="Select",this._sourceDataType=null,this._sourceDataFields=[],this.filter=new d(this.data),this.defaultSettings={singleSelection:!1,idField:"id",textField:"text",tooltipField:"tooltip",disabledField:"isDisabled",enableCheckAll:!0,selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!1,limitSelection:-1,clearSearchFilter:!0,maxHeight:197,itemsShowLimit:999999999999,searchPlaceholderText:"Search",noDataAvailablePlaceholderText:"No data available",noFilteredDataAvailablePlaceholderText:"No filtered data available",closeDropDownOnSelection:!1,showSelectedItemsAtTop:!1,defaultOpen:!1,allowRemoteDataSearch:!1},this.disabled=!1,this.onFilterChange=new e.vpe,this.onDropDownClose=new e.vpe,this.onSelect=new e.vpe,this.onDeSelect=new e.vpe,this.onSelectAll=new e.vpe,this.onDeSelectAll=new e.vpe,this.onTouchedCallback=O,this.onChangeCallback=O}set placeholder(t){this._placeholder=t||"Select"}set settings(t){this._settings=t?Object.assign(this.defaultSettings,t):Object.assign(this.defaultSettings)}set data(t){if(t){const n=t[0];this._sourceDataType=typeof n,this._sourceDataFields=this.getFields(n),this._data=t.map(o=>this.deobjectify(o))}else this._data=[]}onFilterTextChange(t){this.onFilterChange.emit(t)}onItemClick(t,n){if(this.disabled||n.isDisabled)return!1;const o=this.isSelected(n),p=-1===this._settings.limitSelection||this._settings.limitSelection>0&&this.selectedItems.length<this._settings.limitSelection;o?this.removeSelected(n):p&&this.addSelected(n),this._settings.singleSelection&&this._settings.closeDropDownOnSelection&&this.closeDropdown()}writeValue(t){if(null!=t&&t.length>0)if(this._settings.singleSelection)try{t.length>=1&&(this.selectedItems=[this.deobjectify(t[0])])}catch{}else{const n=t.map(o=>this.deobjectify(o));this.selectedItems=this._settings.limitSelection>0?n.splice(0,this._settings.limitSelection):n}else this.selectedItems=[];this.onChangeCallback(t),this.cdr.markForCheck()}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}onTouched(){this.onTouchedCallback()}trackByFn(t,n){return n.id}isSelected(t){let n=!1;return this.selectedItems.forEach(o=>{t.id===o.id&&(n=!0)}),n}isLimitSelectionReached(){return this._settings.limitSelection===this.selectedItems.length}isAllItemsSelected(){let t=this.listFilterPipe.transform(this._data,this.filter);const n=t.filter(o=>o.isDisabled).length;return!((!this.data||0===this.data.length)&&this._settings.allowRemoteDataSearch)&&t.length===this.selectedItems.length+n}showButton(){return!(this._settings.singleSelection||this._settings.limitSelection>0)}itemShowRemaining(){return this.selectedItems.length-this._settings.itemsShowLimit}addSelected(t){this._settings.singleSelection?(this.selectedItems=[],this.selectedItems.push(t)):this.selectedItems.push(t),this.onChangeCallback(this.emittedValue(this.selectedItems)),this.onSelect.emit(this.emittedValue(t))}removeSelected(t){this.selectedItems.forEach(n=>{t.id===n.id&&this.selectedItems.splice(this.selectedItems.indexOf(n),1)}),this.onChangeCallback(this.emittedValue(this.selectedItems)),this.onDeSelect.emit(this.emittedValue(t))}emittedValue(t){const n=[];if(Array.isArray(t))t.map(o=>{n.push(this.objectify(o))});else if(t)return this.objectify(t);return n}objectify(t){if("object"===this._sourceDataType){const n={};return n[this._settings.idField]=t.id,n[this._settings.textField]=t.text,this._sourceDataFields.includes(this._settings.disabledField)&&(n[this._settings.disabledField]=t.isDisabled),this._sourceDataFields.includes(this._settings.tooltipField)&&(n[this._settings.tooltipField]=t.tooltip),n}return"number"===this._sourceDataType?Number(t.id):t.text}deobjectify(t){return new d("string"==typeof t||"number"==typeof t?t:{id:t[this._settings.idField],text:t[this._settings.textField],tooltip:t[this._settings.tooltipField],isDisabled:t[this._settings.disabledField]})}toggleDropdown(t){t.preventDefault(),(!this.disabled||!this._settings.singleSelection)&&(this._settings.defaultOpen=!this._settings.defaultOpen,this._settings.defaultOpen||this.onDropDownClose.emit())}closeDropdown(){this._settings.defaultOpen=!1,this._settings.clearSearchFilter&&(this.filter.text=""),this.onDropDownClose.emit()}toggleSelectAll(){if(this.disabled)return!1;this.isAllItemsSelected()?(this.selectedItems=[],this.onDeSelectAll.emit(this.emittedValue(this.selectedItems))):(this.selectedItems=this.listFilterPipe.transform(this._data,this.filter).filter(t=>!t.isDisabled).slice(),this.onSelectAll.emit(this.emittedValue(this.selectedItems))),this.onChangeCallback(this.emittedValue(this.selectedItems))}getFields(t){const n=[];if("object"!=typeof t)return n;for(const o in t)n.push(o);return n}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.$),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-multiselect-dropdown"]],hostBindings:function(t,n){1&t&&e.NdJ("blur",function(){return n.onTouched()})},inputs:{placeholder:"placeholder",disabled:"disabled",settings:"settings",data:"data"},outputs:{onFilterChange:"onFilterChange",onDropDownClose:"onDropDownClose",onSelect:"onSelect",onDeSelect:"onDeSelect",onSelectAll:"onSelectAll",onDeSelectAll:"onDeSelectAll"},features:[e._Bn([F])],decls:19,vars:23,consts:[["tabindex","0",1,"multiselect-dropdown",3,"blur","clickOutside"],["tabindex","-1",1,"dropdown-btn",3,"click"],[4,"ngIf"],["class","selected-item-container",4,"ngFor","ngForOf","ngForTrackBy"],[2,"float","right !important","padding-right","4px",3,"ngClass"],["style","padding-right: 15px;",4,"ngIf"],[1,"dropdown-multiselect__caret"],[1,"dropdown-list",3,"hidden"],[1,"item1"],["class","multiselect-item-checkbox","style","border-bottom: 1px solid #ccc;padding:10px",3,"click",4,"ngIf"],["class","filter-textbox",4,"ngIf"],[1,"item2"],["itemSize","10"],["class","multiselect-item-checkbox",3,"click",4,"cdkVirtualFor","cdkVirtualForOf"],["class","no-filtered-data",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"selected-item-container"],[1,"selected-item",3,"hidden"],[2,"padding-left","2px","color","white",3,"click"],[2,"padding-right","15px"],[1,"multiselect-item-checkbox",2,"border-bottom","1px solid #ccc","padding","10px",3,"click"],["type","checkbox","aria-label","multiselect-select-all",3,"checked","disabled"],[1,"filter-textbox"],["type","text","aria-label","multiselect-search",3,"readOnly","placeholder","ngModel","ngModelChange"],[1,"multiselect-item-checkbox",3,"click"],["type","checkbox",3,"checked","disabled"],[1,"no-filtered-data"],[1,"no-data"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.NdJ("blur",function(){return n.onTouched()})("clickOutside",function(){return n.closeDropdown()}),e.TgZ(1,"div")(2,"span",1),e.NdJ("click",function(p){return n.toggleDropdown(p)}),e.YNc(3,h,2,1,"span",2),e.YNc(4,C,6,3,"span",3),e.TgZ(5,"span",4),e.YNc(6,f,2,1,"span",5),e._UZ(7,"span",6),e.qZA()()(),e.TgZ(8,"div",7)(9,"ul",8),e.YNc(10,k,4,3,"li",9),e.YNc(11,w,2,3,"li",10),e.qZA(),e.TgZ(12,"ul",11)(13,"cdk-virtual-scroll-viewport",12),e.YNc(14,P,4,5,"li",13),e.ALo(15,"multiSelectFilter"),e.qZA(),e.YNc(16,S,3,1,"li",14),e.ALo(17,"multiSelectFilter"),e.YNc(18,D,3,1,"li",15),e.qZA()()()),2&t&&(e.xp6(1),e.ekj("disabled",n.disabled),e.xp6(2),e.Q6J("ngIf",0==n.selectedItems.length),e.xp6(1),e.Q6J("ngForOf",n.selectedItems)("ngForTrackBy",n.trackByFn),e.xp6(1),e.Q6J("ngClass",e.VKq(21,y,n._settings.defaultOpen)),e.xp6(1),e.Q6J("ngIf",n.itemShowRemaining()>0),e.xp6(2),e.Q6J("hidden",!n._settings.defaultOpen),e.xp6(2),e.Q6J("ngIf",(n._data.length>0||n._settings.allowRemoteDataSearch)&&!n._settings.singleSelection&&n._settings.enableCheckAll&&-1===n._settings.limitSelection),e.xp6(1),e.Q6J("ngIf",(n._data.length>0||n._settings.allowRemoteDataSearch)&&n._settings.allowSearchFilter),e.xp6(2),e.Udp("height",n._settings.maxHeight+"px"),e.xp6(1),e.Q6J("cdkVirtualForOf",e.xi3(15,15,n._data,n.filter)),e.xp6(2),e.Q6J("ngIf",0!=n._data.length&&0==e.xi3(17,18,n._data,n.filter).length&&!n._settings.allowRemoteDataSearch),e.xp6(2),e.Q6J("ngIf",0==n._data.length&&!n._settings.allowRemoteDataSearch))},dependencies:[c.mk,c.sg,c.O5,g.Fj,g.JJ,g.On,r.xd,r.x0,r.N7,_,a.$],styles:['.multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]{display:flex;float:left;max-width:93%}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;margin-bottom:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0 8px;border-color:#999999 transparent;content:""}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotate(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0px;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:"";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{animation:borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{transform:rotate(-45deg) scale(1)}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}'],changeDetection:0}),i})()}}]);