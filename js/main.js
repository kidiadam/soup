!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){$((function(){new Vue({el:"#app",vuetify:new Vuetify,data:{page:"about",profile:"",type:[],typeTimmer:null,years:[],skills:[],projects:[],projectContent:"",modalImg:"",dialog:!1,dialog2:!1,hover:"about",links:[{title:"Sapporo",content:"https://sapporokurolabel-photocampaign2021.com/"},{title:"全聯",content:"https://www.freebear.com.tw/competition/2021Halloween/ "},{title:"小巴黎",content:"https://www.debalets.com.tw/"},{title:"采億",content:"https://www.tsaiyitech.com/"}]},methods:{changePage:function(t){this.page=t,"skill"==this.page?setTimeout((function(){$(".colorBar").addClass("show")}),300):$(".colorBar").removeClass("show")},getData:function(){var t=this;$.ajax({type:"GET",url:"./data.json",success:function(e){t.type=e.profile,t.years=e.years,t.skills=e.skills,t.projects=e.projects,t.$nextTick((function(){$(".owl-carousel1").owlCarousel({items:1,nav:!0,dots:!1,loop:!0}),t.typeProfile()}))},error:function(t,e,o){}})},showProjectContent:function(t){this.projectContent=t,this.dialog=!0},showProjectImg:function(t){this.modalImg=t,this.dialog2=!0},typeProfile:function(){var t=this.type.length,e=0,o=this;this.typeTimmer=setInterval((function(){o.profile+=o.type[e],++e==t&&(clearInterval(o.typeTimmer),o.typeTimmer=null)}),150)},hoverIn:function(t){this.hover=t},hoverout:function(){this.hover=this.page}},created:function(){this.getData()},mounted:function(){}})}))}]);