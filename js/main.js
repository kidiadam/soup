!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){$((function(){new Vue({el:"#app",vuetify:new Vuetify,data:{page:"about",profile:"",type:[],typeTimmer:null,years:[],skills:[],projects:[],projectContent:"",modalImg:"",dialog:!1,dialog2:!1,hover:"about"},methods:{changePage:function(e){this.page=e,"skill"==this.page?setTimeout((function(){$(".colorBar").addClass("show")}),300):$(".colorBar").removeClass("show")},getData:function(){var e=this;$.ajax({type:"GET",url:"./data.json",success:function(t){e.type=t.profile,e.years=t.years,e.skills=t.skills,e.projects=t.projects,e.$nextTick((function(){$(".owl-carousel1").owlCarousel({items:1,nav:!0,dots:!1,loop:!0}),e.typeProfile()}))},error:function(e,t,o){}})},showProjectContent:function(e){this.projectContent=e,this.dialog=!0},showProjectImg:function(e){this.modalImg=e,this.dialog2=!0},typeProfile:function(){var e=this.type.length;console.log(this.type.length);var t=0,o=this;this.typeTimmer=setInterval((function(){o.profile+=o.type[t],++t==e&&(clearInterval(o.typeTimmer),o.typeTimmer=null)}),150)},hoverIn:function(e){this.hover=e},hoverout:function(){this.hover=this.page}},created:function(){this.getData()},mounted:function(){}})}))}]);