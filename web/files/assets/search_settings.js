// This script was generate by Google's Custom Search Engine (https://cse.google.com/cse/all)

(function(opts_){var f=this||self,h=/^[\w+/_-]+[=]{0,2}$/,k=null,l=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},m=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var n=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};m(n,Error);n.prototype.name="CustomError";var p=function(a,b){a=a.split("%s");for(var c="",e=a.length-1,d=0;d<e;d++)c+=a[d]+(d<b.length?b[d]:"%s");n.call(this,c+a[e])};m(p,n);p.prototype.name="AssertionError";var q=function(a,b,c){if(!a){var e="Assertion failed";if(b){e+=": "+b;var d=Array.prototype.slice.call(arguments,2)}throw new p(""+e,d||[]);}},t=function(a,b){throw new p("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var u=function(a,b){a:{try{var c=a&&a.ownerDocument,e=c&&(c.defaultView||c.parentWindow);e=e||f;if(e.Element&&e.Location){var d=e;break a}}catch(r){}d=null}if(d&&"undefined"!=typeof d[b]&&(!a||!(a instanceof d[b])&&(a instanceof d.Location||a instanceof d.Element))){d=typeof a;if("object"==d&&null!=a||"function"==d)try{var g=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(r){g="<object could not be stringified>"}else g=void 0===a?"undefined":null===a?"null":
typeof a;t("Argument is not a %s (or a non-Element, non-Location mock); got: %s",b,g)}};var x=function(a,b){this.i=a===v&&b||"";this.l=w};x.prototype.toString=function(){return"Const{"+this.i+"}"};var y=function(a){if(a instanceof x&&a.constructor===x&&a.l===w)return a.i;t("expected object of type Const, got '"+a+"'");return"type_error:Const"},w={},v={};var z=function(){this.f=""};z.prototype.toString=function(){return"SafeScript{"+this.f+"}"};z.prototype.a=function(a){this.f=a};(new z).a("");var B=function(){this.b="";this.j=null;this.m=A};B.prototype.toString=function(){return"TrustedResourceUrl{"+this.b+"}"};
var C=function(a){if(a instanceof B&&a.constructor===B&&a.m===A)return a.b;t("expected object of type TrustedResourceUrl, got '"+a+"' of type "+l(a));return"type_error:TrustedResourceUrl"},E=function(a,b){var c=y(a);if(!aa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(ba,function(e,d){if(!Object.prototype.hasOwnProperty.call(b,d))throw Error('Found marker, "'+d+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));e=b[d];return e instanceof
x?y(e):encodeURIComponent(String(e))});return D(a)},ba=/%{(\w+)}/g,aa=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,ca=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,G=function(a){var b=da;a=E(ea,a);a=C(a).toString();a=ca.exec(a);var c=a[3]||"";return D(a[1]+F("?",a[2]||"",b)+F("#",c,void 0))},A={},D=function(a){var b=new B;b.b=a;return b},F=function(a,b,c){if(null==c)return b;if("string"==typeof c)return c?a+encodeURIComponent(c):"";for(var e in c){var d=c[e];d="array"==
l(d)?d:[d];for(var g=0;g<d.length;g++){var r=d[g];null!=r&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(String(r)))}}return b};var H=function(){this.h=""};H.prototype.toString=function(){return"SafeStyle{"+this.h+"}"};H.prototype.a=function(a){this.h=a};(new H).a("");var I=function(){this.g=""};I.prototype.toString=function(){return"SafeStyleSheet{"+this.g+"}"};I.prototype.a=function(a){this.g=a};(new I).a("");var J=function(){this.c=""};J.prototype.toString=function(){return"SafeHtml{"+this.c+"}"};J.prototype.a=function(a){this.c=a};(new J).a("<!DOCTYPE html>");(new J).a("");(new J).a("<br>");var fa=new x(v,"https://www.google.com/cse/static/style/look/%{versionDir}%{versionSlash}%{theme}.css"),K=new x(v,"https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}default%{experiment}+%{lang}.css"),ea=new x(v,"https://www.google.com/cse/static/element/%{versionDir}%{versionSlash}cse_element__%{lang}.js"),L=new x(v,"/");window.__gcse=window.__gcse||{};window.__gcse.ct=(new Date).getTime();
window.__gcse.scb=function(){var a=window.__gcse;M()||delete opts_.rawCss;var b=ha(a.initializationCallback||a.callback);google.search.cse.element.init(opts_)&&("explicit"!==a.parsetags?"complete"===document.readyState||"interactive"===document.readyState?(google.search.cse.element.go(),b&&b()):google.setOnLoadCallback(function(){google.search.cse.element.go();b&&b()},!0):b&&b())};function ha(a){return"function"===typeof a?a:"string"===typeof a&&"function"===typeof window[a]?window[a]:null}
function M(){return!(window.__gcse&&window.__gcse.plainStyle)}function N(a){var b=document.createElement("link");b.type="text/css";u(b,"HTMLLinkElement");b.rel="stylesheet";q(a instanceof B,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');b.href=a.j?a.j:C(a).toString();return b};var O,da=opts_.usqp?{usqp:opts_.usqp}:{},P=opts_.language.toLowerCase();O=opts_.cselibVersion?G({versionDir:opts_.cselibVersion,versionSlash:L,lang:P}):G({versionDir:"",versionSlash:"",lang:P});var Q=window.__gcse.scb,R=document.createElement("script");u(R,"HTMLScriptElement");R.src=C(O);var S;if(null===k)a:{var T=f.document,U=T.querySelector&&T.querySelector("script[nonce]");if(U){var V=U.nonce||U.getAttribute("nonce");if(V&&h.test(V)){k=V;break a}}k=""}(S=k)&&R.setAttribute("nonce",S);R.type="text/javascript";
Q&&(R.onload=Q);document.getElementsByTagName("head")[0].appendChild(R);
if(M()){document.getElementsByTagName("head")[0].appendChild(N(opts_.cselibVersion?E(K,{versionDir:opts_.cselibVersion,versionSlash:L,experiment:opts_.uiOptions.imageLayoutRedesign?"_v2":"",lang:opts_.language}):E(K,{versionDir:"",versionSlash:"",experiment:opts_.uiOptions.imageLayoutRedesign?"_v2":"",lang:opts_.language})));var W,X=opts_.uiOptions.cssThemeVersion||2,Y=opts_.theme.toLowerCase(),Z=X?"v"+X:Y.match(/v2_/g)?"v2":"",ia=Y.replace("v2_","");W=E(fa,{versionDir:Z,versionSlash:Z?L:"",theme:ia});
document.getElementsByTagName("head")[0].appendChild(N(W))};
})({
  "cx": "000471076243295430097:pvkhqlk6you",
  "language": "en",
  "theme": "V2_DEFAULT",
  "uiOptions": {
    "resultsUrl": "",
    "enableAutoComplete": true,
    "enableImageSearch": false,
    "imageSearchLayout": "popup",
    "resultSetSize": "filtered_cse",
    "enableOrderBy": true,
    "orderByOptions": [{
      "label": "Relevance",
      "key": ""
    }, {
      "label": "Date",
      "key": "date"
    }],
    "overlayResults": false,
    "numTopRefinements": -1,
    "hideElementBranding": false,
    "cssThemeVersion": 3,
    "mobileLayout": "enabled",
    "isSafeSearchActive": false,
    "imageLayoutRedesign": false
  },
  "protocol": "https",
  "rawCss": ".gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}",
  "cse_token": "AJvRUv1MpKn8aLSJGDGsfmON5CA3:1583188657717",
  "isHostedPage": false,
  "exp": ["csqr", "cc"],
  "cselibVersion": "8b2252448421acb3",
  "usqp": "CAI\u003d"
});