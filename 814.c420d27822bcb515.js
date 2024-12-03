(self.webpackChunkimserp=self.webpackChunkimserp||[]).push([[814],{27389:(M,s,l)=>{"use strict";l.d(s,{N:()=>n,V:()=>t});var u=l(6877),o=l(66274);const e=["qrcElement"];let t=(()=>{class r{constructor(i){this.renderer=i,this.colordark="",this.colorlight="",this.level="",this.hidetitle=!1,this.size=0,this.usesvg=!1,this.allowEmptyString=!1,this.qrdata="",this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.scale=4,this.width=10,""!==this.colordark&&console.warn("[angularx-qrcode] colordark is deprecated, use colorDark."),""!==this.colorlight&&console.warn("[angularx-qrcode] colorlight is deprecated, use colorLight."),""!==this.level&&console.warn("[angularx-qrcode] level is deprecated, use errorCorrectionLevel."),!1!==this.hidetitle&&console.warn("[angularx-qrcode] hidetitle is deprecated."),0!==this.size&&console.warn("[angularx-qrcode] size is deprecated, use `width`. Defaults to 10."),!1!==this.usesvg&&console.warn("[angularx-qrcode] usesvg is deprecated, use [elementType]=\"'svg'\".")}ngOnChanges(){this.createQRCode()}isValidQrCodeText(i){return!1===this.allowEmptyString?!(typeof i>"u"||""===i||"null"===i||null===i):!(typeof i>"u")}toDataURL(){return new Promise((i,h)=>{(0,u.hz)(this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,version:this.version,width:this.width},(v,p)=>{v?h(v):i(p)})})}toCanvas(i){return new Promise((h,v)=>{(0,u.rT)(i,this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,version:this.version,width:this.width},p=>{p?v(p):h("success")})})}toSVG(){return new Promise((i,h)=>{(0,u.toString)(this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:"svg",version:this.version,width:this.width},(v,p)=>{v?h(v):i(p)})})}renderElement(i){for(const h of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,h);this.renderer.appendChild(this.qrcElement.nativeElement,i)}createQRCode(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error('[angularx-qrcode] Field `qrdata` is empty, set`allowEmptyString="true"` to overwrite this behaviour.');let i;switch(this.elementType){case"canvas":i=this.renderer.createElement("canvas"),this.toCanvas(i).then(()=>{this.renderElement(i)}).catch(h=>{console.error("[angularx-qrcode] canvas error: ",h)});break;case"svg":i=this.renderer.createElement("div"),this.toSVG().then(h=>{this.renderer.setProperty(i,"innerHTML",h);const v=i.firstChild;this.renderer.setAttribute(v,"height",`${this.width}`),this.renderer.setAttribute(v,"width",`${this.width}`),this.renderElement(v)}).catch(h=>{console.error("[angularx-qrcode] svg error: ",h)});break;default:i=this.renderer.createElement("img"),this.toDataURL().then(h=>{i.setAttribute("src",h),this.renderElement(i)}).catch(h=>{console.error("[angularx-qrcode] img/url error: ",h)})}}catch(i){console.error("[angularx-qrcode] Error generating QR Code: ",i.message)}}}return r.\u0275fac=function(i){return new(i||r)(o.Y36(o.Qsj))},r.\u0275cmp=o.Xpm({type:r,selectors:[["qrcode"]],viewQuery:function(i,h){if(1&i&&o.Gf(e,7),2&i){let v;o.iGM(v=o.CRH())&&(h.qrcElement=v.first)}},inputs:{colordark:"colordark",colorlight:"colorlight",level:"level",hidetitle:"hidetitle",size:"size",usesvg:"usesvg",allowEmptyString:"allowEmptyString",qrdata:"qrdata",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",margin:"margin",scale:"scale",width:"width",version:"version"},features:[o.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(i,h){1&i&&o._UZ(0,"div",null,0),2&i&&o.Tol(h.cssClass)},encapsulation:2,changeDetection:0}),r})(),n=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({}),r})()},78333:M=>{"use strict";var s={single_source_shortest_paths:function(l,u,o){var e={},t={};t[u]=0;var r,d,i,h,v,m,n=s.PriorityQueue.make();for(n.push(u,0);!n.empty();)for(i in h=(r=n.pop()).cost,v=l[d=r.value]||{})v.hasOwnProperty(i)&&(m=h+v[i],(typeof t[i]>"u"||t[i]>m)&&(t[i]=m,n.push(i,m),e[i]=d));if(typeof o<"u"&&typeof t[o]>"u"){var b=["Could not find a path from ",u," to ",o,"."].join("");throw new Error(b)}return e},extract_shortest_path_from_predecessor_list:function(l,u){for(var o=[],e=u;e;)o.push(e),e=l[e];return o.reverse(),o},find_path:function(l,u,o){var e=s.single_source_shortest_paths(l,u,o);return s.extract_shortest_path_from_predecessor_list(e,o)},PriorityQueue:{make:function(l){var e,u=s.PriorityQueue,o={};for(e in l=l||{},u)u.hasOwnProperty(e)&&(o[e]=u[e]);return o.queue=[],o.sorter=l.sorter||u.default_sorter,o},default_sorter:function(l,u){return l.cost-u.cost},push:function(l,u){this.queue.push({value:l,cost:u}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};M.exports=s},6877:(M,s,l)=>{var o=l(50436),e=l(51191),t=l(32158),n=l(173);function r(d,i,h,v,p){var m=[].slice.call(arguments,1),B=m.length,E="function"==typeof m[B-1];if(!E&&!o())throw new Error("Callback required as last argument");if(!E){if(B<1)throw new Error("Too few arguments provided");return 1===B?(h=i,i=v=void 0):2===B&&!i.getContext&&(v=h,h=i,i=void 0),new Promise(function(F,A){try{var g=e.create(h,v);F(d(g,i,v))}catch(f){A(f)}})}if(B<2)throw new Error("Too few arguments provided");2===B?(p=h,h=i,i=v=void 0):3===B&&(i.getContext&&typeof p>"u"?(p=v,v=void 0):(p=v,v=h,h=i,i=void 0));try{var b=e.create(h,v);p(null,d(b,i,v))}catch(F){p(F)}}s.rT=r.bind(null,t.render),s.hz=r.bind(null,t.renderToDataURL),s.toString=r.bind(null,function(d,i,h){return n.render(d,h)})},50436:M=>{M.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},76448:(M,s,l)=>{var u=l(55402).getSymbolSize;s.getRowColCoords=function(e){if(1===e)return[];for(var t=Math.floor(e/7)+2,n=u(e),r=145===n?26:2*Math.ceil((n-13)/(2*t-2)),d=[n-7],i=1;i<t-1;i++)d[i]=d[i-1]-r;return d.push(6),d.reverse()},s.getPositions=function(e){for(var t=[],n=s.getRowColCoords(e),r=n.length,d=0;d<r;d++)for(var i=0;i<r;i++)0===d&&0===i||0===d&&i===r-1||d===r-1&&0===i||t.push([n[d],n[i]]);return t}},42793:(M,s,l)=>{var u=l(93141),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(t){this.mode=u.ALPHANUMERIC,this.data=t}e.getBitsLength=function(n){return 11*Math.floor(n/2)+n%2*6},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){var r;for(r=0;r+2<=this.data.length;r+=2){var d=45*o.indexOf(this.data[r]);d+=o.indexOf(this.data[r+1]),n.put(d,11)}this.data.length%2&&n.put(o.indexOf(this.data[r]),6)},M.exports=e},57258:M=>{function s(){this.buffer=[],this.length=0}s.prototype={get:function(l){var u=Math.floor(l/8);return 1==(this.buffer[u]>>>7-l%8&1)},put:function(l,u){for(var o=0;o<u;o++)this.putBit(1==(l>>>u-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(l){var u=Math.floor(this.length/8);this.buffer.length<=u&&this.buffer.push(0),l&&(this.buffer[u]|=128>>>this.length%8),this.length++}},M.exports=s},8104:(M,s,l)=>{var u=l(39657);function o(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new u(e*e),this.data.fill(0),this.reservedBit=new u(e*e),this.reservedBit.fill(0)}o.prototype.set=function(e,t,n,r){var d=e*this.size+t;this.data[d]=n,r&&(this.reservedBit[d]=!0)},o.prototype.get=function(e,t){return this.data[e*this.size+t]},o.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},o.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},M.exports=o},62860:(M,s,l)=>{var u=l(39657),o=l(93141);function e(t){this.mode=o.BYTE,this.data=new u(t)}e.getBitsLength=function(n){return 8*n},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(var n=0,r=this.data.length;n<r;n++)t.put(this.data[n],8)},M.exports=e},67291:(M,s,l)=>{var u=l(3997),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];s.getBlocksCount=function(n,r){switch(r){case u.L:return o[4*(n-1)+0];case u.M:return o[4*(n-1)+1];case u.Q:return o[4*(n-1)+2];case u.H:return o[4*(n-1)+3];default:return}},s.getTotalCodewordsCount=function(n,r){switch(r){case u.L:return e[4*(n-1)+0];case u.M:return e[4*(n-1)+1];case u.Q:return e[4*(n-1)+2];case u.H:return e[4*(n-1)+3];default:return}}},3997:(M,s)=>{s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},s.from=function(o,e){if(s.isValid(o))return o;try{return function l(u){if("string"!=typeof u)throw new Error("Param is not a string");switch(u.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+u)}}(o)}catch{return e}}},21224:(M,s,l)=>{var u=l(55402).getSymbolSize;s.getPositions=function(t){var n=u(t);return[[0,0],[n-7,0],[0,n-7]]}},34482:(M,s,l)=>{var u=l(55402),t=u.getBCHDigit(1335);s.getEncodedBits=function(r,d){for(var i=r.bit<<3|d,h=i<<10;u.getBCHDigit(h)-t>=0;)h^=1335<<u.getBCHDigit(h)-t;return 21522^(i<<10|h)}},10567:(M,s,l)=>{var o,e,u=l(39657);u.alloc?(o=u.alloc(512),e=u.alloc(256)):(o=new u(512),e=new u(256)),function(){for(var n=1,r=0;r<255;r++)o[r]=n,e[n]=r,256&(n<<=1)&&(n^=285);for(r=255;r<512;r++)o[r]=o[r-255]}(),s.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},s.exp=function(n){return o[n]},s.mul=function(n,r){return 0===n||0===r?0:o[e[n]+e[r]]}},51909:(M,s,l)=>{var u=l(93141),o=l(55402);function e(t){this.mode=u.KANJI,this.data=t}e.getBitsLength=function(n){return 13*n},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){var n;for(n=0;n<this.data.length;n++){var r=o.toSJIS(this.data[n]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[n]+"\nMake sure your charset is UTF-8");r-=49472}t.put(r=192*(r>>>8&255)+(255&r),13)}},M.exports=e},41976:(M,s)=>{s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function u(o,e,t){switch(o){case s.Patterns.PATTERN000:return(e+t)%2==0;case s.Patterns.PATTERN001:return e%2==0;case s.Patterns.PATTERN010:return t%3==0;case s.Patterns.PATTERN011:return(e+t)%3==0;case s.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(t/3))%2==0;case s.Patterns.PATTERN101:return e*t%2+e*t%3==0;case s.Patterns.PATTERN110:return(e*t%2+e*t%3)%2==0;case s.Patterns.PATTERN111:return(e*t%3+(e+t)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}s.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},s.from=function(e){return s.isValid(e)?parseInt(e,10):void 0},s.getPenaltyN1=function(e){for(var t=e.size,n=0,r=0,d=0,i=null,h=null,v=0;v<t;v++){r=d=0,i=h=null;for(var p=0;p<t;p++){var m=e.get(v,p);m===i?r++:(r>=5&&(n+=r-5+3),i=m,r=1),(m=e.get(p,v))===h?d++:(d>=5&&(n+=d-5+3),h=m,d=1)}r>=5&&(n+=r-5+3),d>=5&&(n+=d-5+3)}return n},s.getPenaltyN2=function(e){for(var t=e.size,n=0,r=0;r<t-1;r++)for(var d=0;d<t-1;d++){var i=e.get(r,d)+e.get(r,d+1)+e.get(r+1,d)+e.get(r+1,d+1);(4===i||0===i)&&n++}return 3*n},s.getPenaltyN3=function(e){for(var t=e.size,n=0,r=0,d=0,i=0;i<t;i++){r=d=0;for(var h=0;h<t;h++)r=r<<1&2047|e.get(i,h),h>=10&&(1488===r||93===r)&&n++,d=d<<1&2047|e.get(h,i),h>=10&&(1488===d||93===d)&&n++}return 40*n},s.getPenaltyN4=function(e){for(var t=0,n=e.data.length,r=0;r<n;r++)t+=e.data[r];return 10*Math.abs(Math.ceil(100*t/n/5)-10)},s.applyMask=function(e,t){for(var n=t.size,r=0;r<n;r++)for(var d=0;d<n;d++)t.isReserved(d,r)||t.xor(d,r,u(e,d,r))},s.getBestMask=function(e,t){for(var n=Object.keys(s.Patterns).length,r=0,d=1/0,i=0;i<n;i++){t(i),s.applyMask(i,e);var h=s.getPenaltyN1(e)+s.getPenaltyN2(e)+s.getPenaltyN3(e)+s.getPenaltyN4(e);s.applyMask(i,e),h<d&&(d=h,r=i)}return r}},93141:(M,s,l)=>{var u=l(74200),o=l(22679);s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(n,r){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!u.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?n.ccBits[0]:r<27?n.ccBits[1]:n.ccBits[2]},s.getBestModeForData=function(n){return o.testNumeric(n)?s.NUMERIC:o.testAlphanumeric(n)?s.ALPHANUMERIC:o.testKanji(n)?s.KANJI:s.BYTE},s.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},s.isValid=function(n){return n&&n.bit&&n.ccBits},s.from=function(n,r){if(s.isValid(n))return n;try{return function e(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+t)}}(n)}catch{return r}}},50580:(M,s,l)=>{var u=l(93141);function o(e){this.mode=u.NUMERIC,this.data=e.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var n,r,d;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),d=parseInt(r,10),t.put(d,10);var i=this.data.length-n;i>0&&(r=this.data.substr(n),d=parseInt(r,10),t.put(d,3*i+1))},M.exports=o},70830:(M,s,l)=>{var u=l(39657),o=l(10567);s.mul=function(t,n){var r=new u(t.length+n.length-1);r.fill(0);for(var d=0;d<t.length;d++)for(var i=0;i<n.length;i++)r[d+i]^=o.mul(t[d],n[i]);return r},s.mod=function(t,n){for(var r=new u(t);r.length-n.length>=0;){for(var d=r[0],i=0;i<n.length;i++)r[i]^=o.mul(n[i],d);for(var h=0;h<r.length&&0===r[h];)h++;r=r.slice(h)}return r},s.generateECPolynomial=function(t){for(var n=new u([1]),r=0;r<t;r++)n=s.mul(n,[1,o.exp(r)]);return n}},51191:(M,s,l)=>{var u=l(39657),o=l(55402),e=l(3997),t=l(57258),n=l(8104),r=l(76448),d=l(21224),i=l(41976),h=l(67291),v=l(56041),p=l(90160),m=l(34482),B=l(93141),E=l(71769),b=l(17881);function a(C,R,P){var I,S,w=C.size,L=m.getEncodedBits(R,P);for(I=0;I<15;I++)C.set(I<6?I:I<8?I+1:w-15+I,8,S=1==(L>>I&1),!0),C.set(8,I<8?w-I-1:I<9?15-I-1+1:15-I-1,S,!0);C.set(w-8,8,1,!0)}function N(C,R,P,w){var L;if(b(C))L=E.fromArray(C);else{if("string"!=typeof C)throw new Error("Invalid data");var I=R;if(!I){var S=E.rawSplit(C);I=p.getBestVersionForData(S,P)}L=E.fromString(C,I||40)}var D=p.getBestVersionForData(L,P);if(!D)throw new Error("The amount of data is too big to be stored in a QR Code");if(R){if(R<D)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+D+".\n")}else R=D;var U=function y(C,R,P){var w=new t;P.forEach(function(z){w.put(z.mode.bit,4),w.put(z.getLength(),B.getCharCountIndicator(z.mode,C)),z.write(w)});var S=8*(o.getSymbolTotalCodewords(C)-h.getTotalCodewordsCount(C,R));for(w.getLengthInBits()+4<=S&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(0);for(var D=(S-w.getLengthInBits())/8,U=0;U<D;U++)w.put(U%2?17:236,8);return function T(C,R,P){for(var w=o.getSymbolTotalCodewords(R),I=w-h.getTotalCodewordsCount(R,P),S=h.getBlocksCount(R,P),U=S-w%S,z=Math.floor(w/S),_=Math.floor(I/S),X=_+1,V=z-_,$=new v(V),k=0,J=new Array(S),G=new Array(S),K=0,Z=new u(C.buffer),Y=0;Y<S;Y++){var H=Y<U?_:X;J[Y]=Z.slice(k,k+H),G[Y]=$.encode(J[Y]),k+=H,K=Math.max(K,H)}var O,x,Q=new u(w),W=0;for(O=0;O<K;O++)for(x=0;x<S;x++)O<J[x].length&&(Q[W++]=J[x][O]);for(O=0;O<V;O++)for(x=0;x<S;x++)Q[W++]=G[x][O];return Q}(w,C,R)}(R,P,L),z=o.getSymbolSize(R),_=new n(z);return function F(C,R){for(var P=C.size,w=d.getPositions(R),L=0;L<w.length;L++)for(var I=w[L][0],S=w[L][1],D=-1;D<=7;D++)if(!(I+D<=-1||P<=I+D))for(var U=-1;U<=7;U++)S+U<=-1||P<=S+U||C.set(I+D,S+U,D>=0&&D<=6&&(0===U||6===U)||U>=0&&U<=6&&(0===D||6===D)||D>=2&&D<=4&&U>=2&&U<=4,!0)}(_,R),function A(C){for(var R=C.size,P=8;P<R-8;P++){var w=P%2==0;C.set(P,6,w,!0),C.set(6,P,w,!0)}}(_),function g(C,R){for(var P=r.getPositions(R),w=0;w<P.length;w++)for(var L=P[w][0],I=P[w][1],S=-2;S<=2;S++)for(var D=-2;D<=2;D++)C.set(L+S,I+D,-2===S||2===S||-2===D||2===D||0===S&&0===D,!0)}(_,R),a(_,P,0),R>=7&&function f(C,R){for(var L,I,S,P=C.size,w=p.getEncodedBits(R),D=0;D<18;D++)L=Math.floor(D/3),C.set(L,I=D%3+P-8-3,S=1==(w>>D&1),!0),C.set(I,L,S,!0)}(_,R),function c(C,R){for(var P=C.size,w=-1,L=P-1,I=7,S=0,D=P-1;D>0;D-=2)for(6===D&&D--;;){for(var U=0;U<2;U++)if(!C.isReserved(L,D-U)){var z=!1;S<R.length&&(z=1==(R[S]>>>I&1)),C.set(L,D-U,z),-1==--I&&(S++,I=7)}if((L+=w)<0||P<=L){L-=w,w=-w;break}}}(_,U),isNaN(w)&&(w=i.getBestMask(_,a.bind(null,_,P))),i.applyMask(w,_),a(_,P,w),{modules:_,version:R,errorCorrectionLevel:P,maskPattern:w,segments:L}}s.create=function(R,P){if(typeof R>"u"||""===R)throw new Error("No input text");var L,I,w=e.M;return typeof P<"u"&&(w=e.from(P.errorCorrectionLevel,e.M),L=p.from(P.version),I=i.from(P.maskPattern),P.toSJISFunc&&o.setToSJISFunction(P.toSJISFunc)),N(R,L,w,I)}},56041:(M,s,l)=>{var u=l(39657),o=l(70830);function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}e.prototype.initialize=function(n){this.degree=n,this.genPoly=o.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");var r=new u(this.degree);r.fill(0);var d=u.concat([n,r],n.length+this.degree),i=o.mod(d,this.genPoly),h=this.degree-i.length;if(h>0){var v=new u(this.degree);return v.fill(0),i.copy(v,h),v}return i},M.exports=e},22679:(M,s)=>{var l="[0-9]+",o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",e="(?:(?![A-Z0-9 $%*+\\-./:]|"+(o=o.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";s.KANJI=new RegExp(o,"g"),s.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),s.BYTE=new RegExp(e,"g"),s.NUMERIC=new RegExp(l,"g"),s.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var t=new RegExp("^"+o+"$"),n=new RegExp("^"+l+"$"),r=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");s.testKanji=function(i){return t.test(i)},s.testNumeric=function(i){return n.test(i)},s.testAlphanumeric=function(i){return r.test(i)}},71769:(M,s,l)=>{var u=l(93141),o=l(50580),e=l(42793),t=l(62860),n=l(51909),r=l(22679),d=l(55402),i=l(78333);function h(A){return unescape(encodeURIComponent(A)).length}function v(A,g,f){for(var c,a=[];null!==(c=A.exec(f));)a.push({data:c[0],index:c.index,mode:g,length:c[0].length});return a}function p(A){var a,c,g=v(r.NUMERIC,u.NUMERIC,A),f=v(r.ALPHANUMERIC,u.ALPHANUMERIC,A);return d.isKanjiModeEnabled()?(a=v(r.BYTE,u.BYTE,A),c=v(r.KANJI,u.KANJI,A)):(a=v(r.BYTE_KANJI,u.BYTE,A),c=[]),g.concat(f,a,c).sort(function(T,N){return T.index-N.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function m(A,g){switch(g){case u.NUMERIC:return o.getBitsLength(A);case u.ALPHANUMERIC:return e.getBitsLength(A);case u.KANJI:return n.getBitsLength(A);case u.BYTE:return t.getBitsLength(A)}}function F(A,g){var f,a=u.getBestModeForData(A);if((f=u.from(g,a))!==u.BYTE&&f.bit<a.bit)throw new Error('"'+A+'" cannot be encoded with mode '+u.toString(f)+".\n Suggested mode is: "+u.toString(a));switch(f===u.KANJI&&!d.isKanjiModeEnabled()&&(f=u.BYTE),f){case u.NUMERIC:return new o(A);case u.ALPHANUMERIC:return new e(A);case u.KANJI:return new n(A);case u.BYTE:return new t(A)}}s.fromArray=function(g){return g.reduce(function(f,a){return"string"==typeof a?f.push(F(a,null)):a.data&&f.push(F(a.data,a.mode)),f},[])},s.fromString=function(g,f){for(var c=function E(A){for(var g=[],f=0;f<A.length;f++){var a=A[f];switch(a.mode){case u.NUMERIC:g.push([a,{data:a.data,mode:u.ALPHANUMERIC,length:a.length},{data:a.data,mode:u.BYTE,length:a.length}]);break;case u.ALPHANUMERIC:g.push([a,{data:a.data,mode:u.BYTE,length:a.length}]);break;case u.KANJI:g.push([a,{data:a.data,mode:u.BYTE,length:h(a.data)}]);break;case u.BYTE:g.push([{data:a.data,mode:u.BYTE,length:h(a.data)}])}}return g}(p(g,d.isKanjiModeEnabled())),y=function b(A,g){for(var f={},a={start:{}},c=["start"],y=0;y<A.length;y++){for(var T=A[y],N=[],C=0;C<T.length;C++){var R=T[C],P=""+y+C;N.push(P),f[P]={node:R,lastCount:0},a[P]={};for(var w=0;w<c.length;w++){var L=c[w];f[L]&&f[L].node.mode===R.mode?(a[L][P]=m(f[L].lastCount+R.length,R.mode)-m(f[L].lastCount,R.mode),f[L].lastCount+=R.length):(f[L]&&(f[L].lastCount=R.length),a[L][P]=m(R.length,R.mode)+4+u.getCharCountIndicator(R.mode,g))}}c=N}for(w=0;w<c.length;w++)a[c[w]].end=0;return{map:a,table:f}}(c,f),T=i.find_path(y.map,"start","end"),N=[],C=1;C<T.length-1;C++)N.push(y.table[T[C]].node);return s.fromArray(function B(A){return A.reduce(function(g,f){var a=g.length-1>=0?g[g.length-1]:null;return a&&a.mode===f.mode?(g[g.length-1].data+=f.data,g):(g.push(f),g)},[])}(N))},s.rawSplit=function(g){return s.fromArray(p(g,d.isKanjiModeEnabled()))}},55402:(M,s)=>{var l,u=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];s.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},s.getSymbolTotalCodewords=function(e){return u[e]},s.getBCHDigit=function(o){for(var e=0;0!==o;)e++,o>>>=1;return e},s.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');l=e},s.isKanjiModeEnabled=function(){return typeof l<"u"},s.toSJIS=function(e){return l(e)}},74200:(M,s)=>{s.isValid=function(u){return!isNaN(u)&&u>=1&&u<=40}},90160:(M,s,l)=>{var u=l(55402),o=l(67291),e=l(3997),t=l(93141),n=l(74200),r=l(17881),i=u.getBCHDigit(7973);function v(B,E){return t.getCharCountIndicator(B,E)+4}function p(B,E){var b=0;return B.forEach(function(F){var A=v(F.mode,E);b+=A+F.getBitsLength()}),b}s.from=function(E,b){return n.isValid(E)?parseInt(E,10):b},s.getCapacity=function(E,b,F){if(!n.isValid(E))throw new Error("Invalid QR Code version");typeof F>"u"&&(F=t.BYTE);var f=8*(u.getSymbolTotalCodewords(E)-o.getTotalCodewordsCount(E,b));if(F===t.MIXED)return f;var a=f-v(F,E);switch(F){case t.NUMERIC:return Math.floor(a/10*3);case t.ALPHANUMERIC:return Math.floor(a/11*2);case t.KANJI:return Math.floor(a/13);default:return Math.floor(a/8)}},s.getBestVersionForData=function(E,b){var F,A=e.from(b,e.M);if(r(E)){if(E.length>1)return function m(B,E){for(var b=1;b<=40;b++)if(p(B,b)<=s.getCapacity(b,E,t.MIXED))return b}(E,A);if(0===E.length)return 1;F=E[0]}else F=E;return function h(B,E,b){for(var F=1;F<=40;F++)if(E<=s.getCapacity(F,b,B))return F}(F.mode,F.getLength(),A)},s.getEncodedBits=function(E){if(!n.isValid(E)||E<7)throw new Error("Invalid QR Code version");for(var b=E<<12;u.getBCHDigit(b)-i>=0;)b^=7973<<u.getBCHDigit(b)-i;return E<<12|b}},32158:(M,s,l)=>{var u=l(5726);s.render=function(n,r,d){var i=d,h=r;typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),r||(h=function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),i=u.getOptions(i);var v=u.getImageWidth(n.modules.size,i),p=h.getContext("2d"),m=p.createImageData(v,v);return u.qrToImageData(m.data,n,i),function o(t,n,r){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=r,n.width=r,n.style.height=r+"px",n.style.width=r+"px"}(p,h,v),p.putImageData(m,0,0),h},s.renderToDataURL=function(n,r,d){var i=d;return typeof i>"u"&&(!r||!r.getContext)&&(i=r,r=void 0),i||(i={}),s.render(n,r,i).toDataURL(i.type||"image/png",(i.rendererOpts||{}).quality)}},173:(M,s,l)=>{var u=l(5726);function o(n,r){var d=n.a/255,i=r+'="'+n.hex+'"';return d<1?i+" "+r+'-opacity="'+d.toFixed(2).slice(1)+'"':i}function e(n,r,d){var i=n+r;return typeof d<"u"&&(i+=" "+d),i}s.render=function(r,d,i){var h=u.getOptions(d),v=r.modules.size,p=r.modules.data,m=v+2*h.margin,B=h.color.light.a?"<path "+o(h.color.light,"fill")+' d="M0 0h'+m+"v"+m+'H0z"/>':"",E="<path "+o(h.color.dark,"stroke")+' d="'+function t(n,r,d){for(var i="",h=0,v=!1,p=0,m=0;m<n.length;m++){var B=Math.floor(m%r),E=Math.floor(m/r);!B&&!v&&(v=!0),n[m]?(p++,m>0&&B>0&&n[m-1]||(i+=v?e("M",B+d,.5+E+d):e("m",h,0),h=0,v=!1),B+1<r&&n[m+1]||(i+=e("h",p),p=0)):h++}return i}(p,v,h.margin)+'"/>',A='<svg xmlns="http://www.w3.org/2000/svg" '+(h.width?'width="'+h.width+'" height="'+h.width+'" ':"")+'viewBox="0 0 '+m+" "+m+'" shape-rendering="crispEdges">'+B+E+"</svg>\n";return"function"==typeof i&&i(null,A),A}},5726:(M,s)=>{function l(u){if("number"==typeof u&&(u=u.toString()),"string"!=typeof u)throw new Error("Color should be defined as hex string");var o=u.slice().replace("#","").split("");if(o.length<3||5===o.length||o.length>8)throw new Error("Invalid hex color: "+u);(3===o.length||4===o.length)&&(o=Array.prototype.concat.apply([],o.map(function(t){return[t,t]}))),6===o.length&&o.push("F","F");var e=parseInt(o.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+o.slice(0,6).join("")}}s.getOptions=function(o){o||(o={}),o.color||(o.color={});var t=o.width&&o.width>=21?o.width:void 0;return{width:t,scale:t?4:o.scale||4,margin:typeof o.margin>"u"||null===o.margin||o.margin<0?4:o.margin,color:{dark:l(o.color.dark||"#000000ff"),light:l(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},s.getScale=function(o,e){return e.width&&e.width>=o+2*e.margin?e.width/(o+2*e.margin):e.scale},s.getImageWidth=function(o,e){var t=s.getScale(o,e);return Math.floor((o+2*e.margin)*t)},s.qrToImageData=function(o,e,t){for(var n=e.modules.size,r=e.modules.data,d=s.getScale(n,t),i=Math.floor((n+2*t.margin)*d),h=t.margin*d,v=[t.color.light,t.color.dark],p=0;p<i;p++)for(var m=0;m<i;m++){var B=4*(p*i+m),E=t.color.light;p>=h&&m>=h&&p<i-h&&m<i-h&&(E=v[r[Math.floor((p-h)/d)*n+Math.floor((m-h)/d)]?1:0]),o[B++]=E.r,o[B++]=E.g,o[B++]=E.b,o[B]=E.a}}},39657:(M,s,l)=>{"use strict";var u=l(17881),e=(t.TYPED_ARRAY_SUPPORT=function o(){try{var g=new Uint8Array(1);return g.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===g.foo()}catch{return!1}}())?2147483647:1073741823;function t(g,f,a){return t.TYPED_ARRAY_SUPPORT||this instanceof t?"number"==typeof g?i(this,g):function A(g,f,a,c){if("number"==typeof f)throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&f instanceof ArrayBuffer?function p(g,f,a,c){if(a<0||f.byteLength<a)throw new RangeError("'offset' is out of bounds");if(f.byteLength<a+(c||0))throw new RangeError("'length' is out of bounds");var y;return y=void 0===a&&void 0===c?new Uint8Array(f):void 0===c?new Uint8Array(f,a):new Uint8Array(f,a,c),t.TYPED_ARRAY_SUPPORT?y.__proto__=t.prototype:y=v(g,y),y}(g,f,a,c):"string"==typeof f?function h(g,f){var a=0|E(f),c=d(g,a),y=c.write(f);return y!==a&&(c=c.slice(0,y)),c}(g,f):function m(g,f){if(t.isBuffer(f)){var a=0|n(f.length),c=d(g,a);return 0===c.length||f.copy(c,0,0,a),c}if(f){if(typeof ArrayBuffer<"u"&&f.buffer instanceof ArrayBuffer||"length"in f)return"number"!=typeof f.length||function r(g){return g!=g}(f.length)?d(g,0):v(g,f);if("Buffer"===f.type&&Array.isArray(f.data))return v(g,f.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(g,f)}(this,g,f,a):new t(g,f,a)}function n(g){if(g>=e)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+e.toString(16)+" bytes");return 0|g}function d(g,f){var a;return t.TYPED_ARRAY_SUPPORT?(a=new Uint8Array(f)).__proto__=t.prototype:(null===(a=g)&&(a=new t(f)),a.length=f),a}function i(g,f){var a=d(g,f<0?0:0|n(f));if(!t.TYPED_ARRAY_SUPPORT)for(var c=0;c<f;++c)a[c]=0;return a}function v(g,f){for(var a=f.length<0?0:0|n(f.length),c=d(g,a),y=0;y<a;y+=1)c[y]=255&f[y];return c}function B(g,f){f=f||1/0;for(var a,c=g.length,y=null,T=[],N=0;N<c;++N){if((a=g.charCodeAt(N))>55295&&a<57344){if(!y){if(a>56319){(f-=3)>-1&&T.push(239,191,189);continue}if(N+1===c){(f-=3)>-1&&T.push(239,191,189);continue}y=a;continue}if(a<56320){(f-=3)>-1&&T.push(239,191,189),y=a;continue}a=65536+(y-55296<<10|a-56320)}else y&&(f-=3)>-1&&T.push(239,191,189);if(y=null,a<128){if((f-=1)<0)break;T.push(a)}else if(a<2048){if((f-=2)<0)break;T.push(a>>6|192,63&a|128)}else if(a<65536){if((f-=3)<0)break;T.push(a>>12|224,a>>6&63|128,63&a|128)}else{if(!(a<1114112))throw new Error("Invalid code point");if((f-=4)<0)break;T.push(a>>18|240,a>>12&63|128,a>>6&63|128,63&a|128)}}return T}function E(g){return t.isBuffer(g)?g.length:typeof ArrayBuffer<"u"&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(g)||g instanceof ArrayBuffer)?g.byteLength:("string"!=typeof g&&(g=""+g),0===g.length?0:B(g).length)}t.TYPED_ARRAY_SUPPORT&&(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&t[Symbol.species]===t&&Object.defineProperty(t,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),t.prototype.write=function(f,a,c){void 0===a||void 0===c&&"string"==typeof a?(c=this.length,a=0):isFinite(a)&&(a|=0,isFinite(c)?c|=0:c=void 0);var y=this.length-a;if((void 0===c||c>y)&&(c=y),f.length>0&&(c<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function F(g,f,a,c){return function b(g,f,a,c){for(var y=0;y<c&&!(y+a>=f.length||y>=g.length);++y)f[y+a]=g[y];return y}(B(f,g.length-a),g,a,c)}(this,f,a,c)},t.prototype.slice=function(f,a){var y,c=this.length;if((f=~~f)<0?(f+=c)<0&&(f=0):f>c&&(f=c),(a=void 0===a?c:~~a)<0?(a+=c)<0&&(a=0):a>c&&(a=c),a<f&&(a=f),t.TYPED_ARRAY_SUPPORT)(y=this.subarray(f,a)).__proto__=t.prototype;else{var T=a-f;y=new t(T,void 0);for(var N=0;N<T;++N)y[N]=this[N+f]}return y},t.prototype.copy=function(f,a,c,y){if(c||(c=0),!y&&0!==y&&(y=this.length),a>=f.length&&(a=f.length),a||(a=0),y>0&&y<c&&(y=c),y===c||0===f.length||0===this.length)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("sourceStart out of bounds");if(y<0)throw new RangeError("sourceEnd out of bounds");y>this.length&&(y=this.length),f.length-a<y-c&&(y=f.length-a+c);var N,T=y-c;if(this===f&&c<a&&a<y)for(N=T-1;N>=0;--N)f[N+a]=this[N+c];else if(T<1e3||!t.TYPED_ARRAY_SUPPORT)for(N=0;N<T;++N)f[N+a]=this[N+c];else Uint8Array.prototype.set.call(f,this.subarray(c,c+T),a);return T},t.prototype.fill=function(f,a,c){if("string"==typeof f){if("string"==typeof a?(a=0,c=this.length):"string"==typeof c&&(c=this.length),1===f.length){var y=f.charCodeAt(0);y<256&&(f=y)}}else"number"==typeof f&&(f&=255);if(a<0||this.length<a||this.length<c)throw new RangeError("Out of range index");if(c<=a)return this;var T;if(a>>>=0,c=void 0===c?this.length:c>>>0,f||(f=0),"number"==typeof f)for(T=a;T<c;++T)this[T]=f;else{var N=t.isBuffer(f)?f:new t(f),C=N.length;for(T=0;T<c-a;++T)this[T+a]=N[T%C]}return this},t.concat=function(f,a){if(!u(f))throw new TypeError('"list" argument must be an Array of Buffers');if(0===f.length)return d(null,0);var c;if(void 0===a)for(a=0,c=0;c<f.length;++c)a+=f[c].length;var y=i(null,a),T=0;for(c=0;c<f.length;++c){var N=f[c];if(!t.isBuffer(N))throw new TypeError('"list" argument must be an Array of Buffers');N.copy(y,T),T+=N.length}return y},t.byteLength=E,t.prototype._isBuffer=!0,t.isBuffer=function(f){return!(null==f||!f._isBuffer)},M.exports=t},17881:M=>{var s={}.toString;M.exports=Array.isArray||function(l){return"[object Array]"==s.call(l)}},55618:(M,s,l)=>{"use strict";l.d(s,{c:()=>v});var u=l(92752),o=l(71800),e=l(72533),t=l(18488),n=l(53074),r=l(7587),d=l(47766),i=l(66274);let h=(()=>{class p{static forRoot(){return{ngModule:p}}}return p.\u0275fac=function(B){return new(B||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[u.ez,r.u5,r.UX,e.JX]}),p})(),v=(()=>{class p{static forRoot(){return{ngModule:p,providers:[n.P,t.G]}}}return p.\u0275fac=function(B){return new(B||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[u.ez,o.zk.forRoot(),e.JX,u.ez,r.u5,r.UX,d.e,h.forRoot()]}),p})()},82738:(M,s,l)=>{"use strict";l.d(s,{b:()=>d});var u=l(92752),o=l(72533),e=l(87584),t=l(71800),n=l(53074),r=l(66274);let d=(()=>{class i{static forRoot(){return{ngModule:i,providers:[n.P,e.p]}}}return i.\u0275fac=function(v){return new(v||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[u.ez,t.zk.forRoot(),o.JX]}),i})()},88465:(M,s,l)=>{"use strict";l.d(s,{x:()=>p});var u=l(92752),o=l(71800),e=l(72533),t=l(7587),n=l(71259),r=l(27389),d=l(66274);let i=(()=>{class m{static forRoot(){return{ngModule:m}}}return m.\u0275fac=function(E){return new(E||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({imports:[u.ez,o.zk.forRoot(),e.JX,t.u5,t.UX,r.N]}),m})();var h=l(46543);let v=(()=>{class m{static forRoot(){return{ngModule:m}}}return m.\u0275fac=function(E){return new(E||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({imports:[u.ez]}),m})(),p=(()=>{class m{static forRoot(){return{ngModule:m}}}return m.\u0275fac=function(E){return new(E||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({imports:[u.ez,o.zk.forRoot(),e.JX,t.u5,t.UX,n.Z.forRoot(),h.m,i.forRoot(),v.forRoot()]}),m})()}}]);