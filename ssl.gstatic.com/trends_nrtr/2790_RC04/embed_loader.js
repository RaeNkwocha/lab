(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g,k=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},n=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},p=n(this),q=function(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&l(c,a,{configurable:!0,writable:!0,value:b})}};
q("Symbol",function(a){if(a)return a;var b=function(f,h){this.$jscomp$symbol$id_=f;l(this,"description",{configurable:!0,writable:!0,value:h})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+d++,f)};return e},"es6","es3");
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=p[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&l(d.prototype,a,{configurable:!0,writable:!0,value:function(){return t(k(this))}})}return a},"es6","es3");
var t=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},u=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b},v=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e},w=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");
if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var h=d[f];if(b.call(c,h,f,d)){b=h;break a}}b=void 0}return b}},"es6","es3");q("Array.prototype.values",function(a){return a?a:function(){return v(this,function(b,c){return c})}},"es8","es3");
q("String.prototype.repeat",function(a){return a?a:function(b){var c=w(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}},"es6","es3");q("String.prototype.padStart",function(a){return a?a:function(b,c){var d=w(this,null,"padStart");b-=d.length;c=void 0!==c?String(c):" ";return(0<b&&c?c.repeat(Math.ceil(b/c.length)).substring(0,b):"")+d}},"es8","es3");
q("Array.prototype.keys",function(a){return a?a:function(){return v(this,function(b){return b})}},"es6","es3");
var x=this||self,z=function(a,b,c,d){a=a.split(".");d=d||x;a[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)if(a.length||void 0===b)d=d[e]&&d[e]!==Object.prototype[e]?d[e]:d[e]={};else if(!c&&y(b)&&y(d[e]))for(var f in b)b.hasOwnProperty(f)&&(d[e][f]=b[f]);else d[e]=b},y=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},B=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=
a;a.base=function(d,e,f){for(var h=Array(arguments.length-2),m=2;m<arguments.length;m++)h[m-2]=arguments[m];return b.prototype[e].apply(d,h)}},C=function(a){return a};/*

 SPDX-License-Identifier: Apache-2.0
*/
function D(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b);this.reportErrorToServer=!0}B(D,Error);D.prototype.name="CustomError";var E=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");D.call(this,d+c[e]);this.messagePattern=a};B(E,D);E.prototype.name="AssertionError";var F=function(a,b){throw new E("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var G;var H={},I=function(a,b,c){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=c===H?a:"";this.dir_=b;this.implementsGoogStringTypedString=this.implementsGoogI18nBidiDirectionalString=!0};I.prototype.getDirection=function(){return this.dir_};I.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()};I.prototype.toString=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()};function J(a){if(a instanceof I&&a.constructor===I)a=a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;else{var b=typeof a;F("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));a="type_error:SafeHtml"}return a};function K(a){var b=a.write,c=b.apply,d=u.apply(1,arguments).map(J);if(!(d instanceof Array)){var e="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];d=e?e.call(d):{next:k(d)};for(var f=[];!(e=d.next()).done;)f.push(e.value);d=f}c.call(b,a,d)};var L=function(a,b){this.lodash_=a;this.timeout_=b};L.prototype.copyWidgetData=function(a){a=a||[];this.copyToClipboard_(this.parseWidgetData_(a))};L.prototype.parseWidgetData_=function(a){var b=a[1].values,c=[];c.push(a[0].value);b.forEach(function(d,e){return c.push(e+1+") "+d)});return c};
L.prototype.copyToClipboard_=function(a){var b=a.join("\r\n"),c=document.createElement("div");c.textContent=b;c.style.opacity="0";document.body.appendChild(c);var d=document.createRange();d.selectNode(c);window.getSelection().removeAllRanges();window.getSelection().addRange(d);var e=function(f){document.removeEventListener("copy",e);void 0!==f.clipboardData&&(f.clipboardData.setData("text/plain",b),f.clipboardData.setData("text/html",a.join("<br>")),f.preventDefault())};document.addEventListener("copy",
e);document.execCommand("copy");c.remove();this.onCopyNotify_()};L.prototype.onCopyNotify_=function(){if(0===document.getElementsByClassName("copy-notification").length){var a=document.createElement("div");a.textContent=document.getElementsByClassName("translate-patch")[0].textContent;a.className="copy-notification";document.body.appendChild(a);this.timeout_(this.lodash_.bind(function(){a.remove()},a),2E3)}};z("$jscomp.scope.ClipboardService",L,!0,void 0);L.$inject=["lodash","$timeout"];var M=function(){this.oldTypeToNewTypeDictionary_={TIMESERIES_GRAPH_AVERAGES_CHART:"TIMESERIES",TIMESERIES_GRAPH_0:"TIMESERIES",GEO_TABLE:"GEO_MAP",TOP_ENTITIES:"RELATED_TOPICS",TOP_QUERIES:"RELATED_QUERIES",RISING_QUERIES:"RELATED_QUERIES",GEO_MAP:"GEO_MAP"}};g=M.prototype;g.convertDateWithHours_=function(a,b){var c=a.match(b);b=c[1];a=parseInt(c[2],10);c=c[4];var d=new Date(b);d.setHours(a);b=new Date(b);b.setHours(parseInt(a,10)+parseInt(c,10));return""+this.dateTimeStringFormat_(d)+(" "+this.dateTimeStringFormat_(b))};
g.dateStringFormat_=function(a){return""+a.getFullYear()+("-"+(a.getMonth()+1).toString().padStart(2,"0"))+("-"+a.getDate().toString().padStart(2,"0"))};g.convertDateWithMonth_=function(a,b){a=a.match(b);b=parseInt(a[1],10);var c=parseInt(a[2],10),d=new Date(c,b-1,1);c=new Date(c,b-1,1);c.setMonth(b+parseInt(a[3],10)-1,0);return""+this.dateStringFormat_(d)+(" "+this.dateStringFormat_(c))};
g.dateTimeStringFormat_=function(a){return this.dateStringFormat_(a)+("T"+a.getHours().toString().padStart(2,"0"))};
g.convertOldEmbedParams=function(a){var b=this,c={};if(0===Object.keys(a).length)return null;var d;a.geo&&(d=a.geo.replace(/(\w+,?)\s?/g,"$1"));var e=a.date?a.date.split(",").map(function(A){return b.convertDateParam_(A)}).join(","):"all";a.cat&&(c.cat=a.cat.replace(/(.*-)?(\d+)$/,"$2"));c.comparisonItems={};var f=[];a.q&&a.q.split(",").forEach(function(A){f.push({keyword:A,geo:d||"",time:e})},this);var h=a.cid||"",m="",r=h.match(/(^\w*)[_](\d)[_]\d/);r&&0<r.length&&(h=r[1],0!=r[2]&&(m="_"+r[2]));
h=this.oldTypeToNewTypeDictionary_[h]+m;c.q=a.q;c.widgetType=h;c.comparisonItems.comparisonItem=f;c.comparisonItems.category=c.cat||0;c.comparisonItems.property=a.gprop||"";return c};g.convertDateParam_=function(a){if(""===a)return"all";a=a.replace(/\+/g," ");if(/now|today/.test(a))return a;var b=null,c=/(\d{1,2})\/(\d{4}) (\d*)M/i,d=/(\d{4}-\d{2}-\d{2})T(\d{2})([\d\\:]*) (\d+)H/i;c.test(a)?b=this.convertDateWithMonth_(a,c):d.test(a)&&(b=this.convertDateWithHours_(a,d));return b};
z("$jscomp.scope.OldFeCompatibilityUtil",M,!0,void 0);var N,O=new M,P=function(a,b,c){c||(c={});c.guestPath||(c.guestPath="https://trends.google.com/trends/embed/");this.url_=a||"";this.params_=b||{};this.config_=c},Q=function(a,b,c){return new P(b?a+"/"+b:a,{},c)},R=function(a,b,c){return new P("yis/"+c+"/"+(b.geo||"GLOBAL")+"/"+a,{},b)},S=function(a,b,c){return new P("explore/"+a,{req:b,tz:(new Date).getTimezoneOffset()},c)};g=P.prototype;g.createIframe_=function(a){var b=document.createElement("iframe"),c;for(c in a)b.setAttribute(c,a[c]);return b};
g.createIframeCycle_=function(a,b){var c=this;this.socketHandshake_(a,b,function(d){d.data.isReady&&(a.style.borderRadius="2px",a.style.boxShadow="0px 0px 2px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.24)");d.data.height&&(a.style.height=d.data.height+"px",d.data.isIeAndLineChart&&c.setMobilePreviewLineChartWidthInIe_())})};
g.setMobilePreviewLineChartWidthInIe_=function(){var a=document.getElementsByTagName("embed-widget-preview")[0];0!==a.length&&"false"!==a.getAttribute("force-mobile-mode")&&(a=a.find("iframe"))&&(a=a.contentDocument.getElementsByClassName("fe-line-chart"),0!==a.length&&a[0].setAttribute("width",this.IFRAME_WIDTH_+"px"))};
g.generate_=function(){if(!/^(https?:\/\/)?([a-z0-9\.]+)?(\.google\.com)?/i.test(this.config_.guestPath)&&/^[^.]+\.[a-z]{2,4}\/?/i.test(this.config_.guestPath))console.error("Iframe caller domain name not allowed!");else if(this.config_.width&&!/^\d{1,4}(px|%)?$/i.test(this.config_.width))console.error("Width parameter contain illegal value!");else{var a=this.config_.guestPath+this.url_,b=[],c="trends-widget-"+this.generateSeed_(),d;for(d in this.params_)Object.prototype.hasOwnProperty.call(this.params_,
d)&&b.push(d+"="+encodeURIComponent(JSON.stringify(this.params_[d])));this.config_.timeStamp&&b.push("ts="+this.config_.timeStamp);void 0!==this.config_.forceMobileMode&&b.push("forceMobileMode="+!!this.config_.forceMobileMode);void 0!==this.config_.isPreviewMode&&b.push("isPreviewMode="+!!this.config_.isPreviewMode);this.config_.exploreQuery&&b.push("eq="+encodeURIComponent(this.config_.exploreQuery));this.config_.locale&&b.push("hl="+this.config_.locale.replace(/[^a-z]/ig,""));this.config_.geo&&
b.push("geo="+this.config_.geo);b.length&&(a+="?"+b.join("&"));a=this.createIframe_({id:c,title:c,src:a,width:this.config_.width||"100%",frameBorder:0,scrolling:0});return{id:c,element:a}}};g.generateSeed_=function(){return N?++N:N=1};
g.render=function(){var a=this.generate_();if(a){var b=a.element.outerHTML;if(void 0===G){var c=null;var d=x.trustedTypes;if(d&&d.createPolicy)try{c=d.createPolicy("goog#html",{createHTML:C,createScript:C,createScriptURL:C})}catch(e){x.console&&x.console.error(e.message)}G=c}b=(c=G)?c.createHTML(b):b;K(document,new I(b,null,H));b=document.getElementById(a.id);this.createIframeCycle_(b,a.id)}return b};
g.renderTo=function(a){var b=this.generate_();if(b){var c=b.element;a.appendChild(c);this.createIframeCycle_(c,b.id)}return c};g.socketHandshake_=function(a,b,c){a.addEventListener("load",function(){a.contentWindow.postMessage({uniqueID:b},"*")});window.addEventListener("message",function(d){d.data.uniqueID===b&&c(d)},!1)};z("trends.embed.renderWidget",function(a,b,c){return(new Q(a,b,c)).render()},!0,void 0);
z("trends.embed.renderTopChartsWidget",function(a,b,c){return(new R(a,b,c)).render()},!0,void 0);z("trends.embed.renderWidgetTo",function(a,b,c,d){return(new Q(b,c,d)).renderTo(a)},!0,void 0);z("trends.embed.renderTopChartsWidgetTo",function(a,b,c,d){return(new R(b,c,d)).renderTo(a)},!0,void 0);var T=function(a,b,c){return(new S(a,b,c)).render()};z("trends.embed.renderExploreWidget",T,!0,void 0);z("trends.embed.renderExploreWidgetTo",function(a,b,c,d){return(new S(b,c,d)).renderTo(a)},!0,void 0);
z("trends.embed.renderExploreWidgetFromOldParamaters",function(a){a=U(a);var b=O.convertOldEmbedParams(a),c="";a.cat&&(c=a.cat.split("-"),c="&cat="+c[c.length-1]);T(b.widgetType,b.comparisonItems,{exploreQuery:"date="+b.comparisonItems.comparisonItem[0].time+"&q="+b.q+(a.geo?"&geo="+a.geo:"")+(a.gprop?"&gprop="+a.gprop:"")+c},{exploreQuery:"q="+b.q+"&date="+b.comparisonItems.comparisonItem[0].time,guestPath:"https://trends.google.com/trends/"})},!0,void 0);
var U=function(a){var b={};a.replace(/[?&](.+?)=([^&#]*)/g,function(c,d,e){b[d]=decodeURI(e).replace(/\+/g," ")});return b};}).call(this);
