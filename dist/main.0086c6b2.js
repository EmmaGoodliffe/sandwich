parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"abMv":[function(require,module,exports) {
var t=this&&this.__spreadArrays||function(){for(var t=0,r=0,u=arguments.length;r<u;r++)t+=arguments[r].length;var e=Array(t),n=0;for(r=0;r<u;r++)for(var o=arguments[r],a=0,l=o.length;a<l;a++,n++)e[n]=o[a];return e},r=document.querySelector("#app"),u=function(t,r,u){return'<input type="text" id="'+t+'" class="'+(r?"left":"")+(u?" top":"")+'" />'},e=function(t){return'<input class="output '+t+'" value="0" readonly />'},n="<div>";n+=e("blank-output");for(var o=0;o<9;o++)n+=e("col-output");n+="</div>";for(o=0;o<9;o++){n+="<div>",n+=e("row-output");for(var a=0;a<9;a++)n+=u(o+","+a,a%3==0,o%3==0);n+="</div>"}n+='<button id="go">Go</button>',r.innerHTML+=n;var l=function(t){for(var r=[],u=0;u<t.length;u++){var e=t[u],n=e.row,o=e.value||0;r[n]instanceof Array?r[n].push(o):r[n]=[o]}return r},c=function(t){for(var r=[],u=0;u<t.length;u++){var e=t[u],n=e.col,o=e.value||0;r[n]instanceof Array?r[n].push(o):r[n]=[o]}return r},i=function(t){var r=t.indexOf(1),u=t.indexOf(9),e=r<u?t.slice(r+1,u):t.slice(u+1,r);try{return e.reduce(function(t,r){return t+r})}catch(n){return 0}};document.querySelector("#go").addEventListener("click",function(){var r=t(document.querySelectorAll("input")).map(function(t){var r=t.value,u=t.id.split(","),e=u[0],n=u[1];return{value:parseInt(r),row:parseInt(e),col:parseInt(n)}}),u=l(r).map(function(t){return i(t)}),e=c(r).map(function(t){return i(t)}),n=t(document.querySelectorAll(".output.row-output")),o=t(document.querySelectorAll(".output.col-output"));console.log({rowOutputs:n,colOutputs:o});for(var a=0;a<u.length;a++){var v=u[a];n[a].value=""+v}for(a=0;a<e.length;a++){v=e[a];o[a].value=""+v}});
},{}]},{},["abMv"], null)
//# sourceMappingURL=/sandwich/dist/main.0086c6b2.js.map