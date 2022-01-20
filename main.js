(()=>{"use strict";var e={62:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},793:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},173:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},892:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},36:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},464:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},426:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(418),t.b),l=i()(o()),u=s()(d);l.push([e.id,"@font-face {\n    font-family: MyFont;\n    src: url("+u+");\n}\n\nbody {\n    margin: 0;\n    box-sizing: border-box;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.header_container{\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    width: 70vw;\n    margin: 20px auto;\n}\n\n.header_logo{\n    width: 100px;\n}\n\n.header_text {\n    font-size: larger;\n    font-family: 'MyFont';\n    margin: 10px;\n}\n\n/* nav bar */\n\n.nav_bar{\n    display:flex;\n    justify-content: end;\n    gap: 10px;\n    width:100%;\n\n}\n\n.nav_bar button {\n    border: none;\n    background-color: white;\n    font-size: 1rem;\n}\n\n.nav_bar > button:hover {\n    color: rgba(146, 125, 6, 0.562);\n}\n\n/* home page */\n\n.hero_img{\n    display:block;\n    width: 100%;\n}\n\n.hero_content{\n    display: flex;\n    width: 70vw;\n    margin: 200px auto;\n    justify-content: center;\n    font-family: 'MyFont';\n}\n\n.black_banner{\n    width: 100%;\n    height: 15vh;\n    background-color: rgba(0,0,0,0.8);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n}\n\nul {\n    list-style-type: none;\n    width: 70vw;\n    margin: 20px auto;\n}\n\nul li {\n    color: white;\n}\n\n.picture_div img {\n    height: 400px;\n    width: 50%;\n}\n\n/* menu CSS */\n.menu__container {\n    margin: 150px auto;\n    width: 60%;\n    border-top: 2px solid black;\n}\n\n.menu_list_item{\n    display: flex;\n    justify-content: space-between;\n    padding: 30px;\n}\n\n.menu__item {\n    margin: 0;\n    font-size: 1rem;\n    line-height: 1.6;\n}\n\n.menu__desc {\n    font-size: 0.875rem;\n    font-weight: normal;\n    font-style: italic;\n}\n\n/* aboutus */\n.about_wrapper{\n    display: flex;\n    width:60%;\n    justify-content: center;\n    margin: 150px auto;\n    gap:20px;\n}\n\n.chef_pic{\n    height: 500px;\n}\n\n/* footer CSS */\n\n.footer_bg {\n    width: 100vw;\n    height: 20vh;\n    background-color: rgba(0,0,0,0.8);\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer_logo{\n    width:75px;\n    height:75px;\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},418:(e,n,t)=>{e.exports=t.p+"ef0718e13cae4a820617.ttf"},509:(e,n,t)=>{e.exports=t.p+"02caf4cfcb113d07b25c.jpg"},142:(e,n,t)=>{e.exports=t.p+"59caadb71c59c4c5a1a9.jpg"},702:(e,n,t)=>{e.exports=t.p+"e8344fa077cb8a69f0d8.png"},169:(e,n,t)=>{e.exports=t.p+"00ac29525da61edd1095.jpg"},428:(e,n,t)=>{e.exports=t.p+"fae515cf6170f00bba7b.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(428),n=t(169),a=t(142);const o=function(){document.querySelector("#main_content").textContent="";const t=document.createElement("div");t.classList.add("home_wrapper");const o=document.createElement("img");return o.src=e,o.classList.add("hero_img"),t.appendChild(o),t.appendChild(function(e){const n=document.createElement("div");return n.classList.add("hero_content"),n.textContent="Experience World-Class dining experience with World-Class Views",n}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("black_banner");const n=document.createElement("div");return n.classList.add("banner_text"),n.innerHTML="\n        <ul>\n        <li>Head Chef: Barney Rubble</li>\n        <li>Executive Sous Chef: Fred Rubble</li>\n        <li>General Manager: Ted Rubble</li>\n    ",e.appendChild(n),e}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("picture_div");const t=document.createElement("img");t.src=n;const o=document.createElement("img");return o.src=a,e.appendChild(t),e.appendChild(o),e}()),t},r=[{name:"Rib-Eye",description:"Steak and more Steak",Price:"$40"},{name:"New York Strip",description:"Steak and more Steak",Price:"$30"},{name:"Pepper Steak",description:"Steak and more Steak",Price:"$35"},{name:"Lobster",description:"Lobster with Lobster on top of Lobster",Price:"$50"},{name:"Pan Fried Salmon",description:"Salmon with Salmon on top of Salmon",Price:"$35"}];var i=t(509);var c=t(62),s=t.n(c),d=t(36),l=t.n(d),u=t(793),p=t.n(u),m=t(892),f=t.n(m),h=t(173),v=t.n(h),b=t(464),g=t.n(b),y=t(426),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),s()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var _=t(702);!function(){const e=document.createElement("div");e.classList.add("nav_bar");const n=document.createElement("button");n.classList.add("menu_button"),n.textContent="Menu";const t=document.createElement("button");t.classList.add("home_button"),t.textContent="Home";const a=document.createElement("button");a.classList.add("aboutUs_button"),a.textContent="About Us",e.appendChild(t),e.appendChild(n),e.appendChild(a);const r=document.querySelector("#content"),i=function(e){const n=document.createElement("div");n.classList.add("header_container");const t=document.createElement("img");t.src=_,t.classList.add("header_logo");const a=document.createElement("div");return a.textContent="From Land to Sea",a.classList.add("header_text"),n.appendChild(t),n.appendChild(a),n}();r.appendChild(i),i.appendChild(e);const c=document.createElement("div");c.id="main_content",r.appendChild(c),c.appendChild(o()),r.appendChild(function(){const e=document.createElement("div");e.classList.add("footer_bg");const n=document.createElement("img");n.src=_,n.classList.add("footer_logo"),e.appendChild(n);const t=document.createElement("div");return t.innerHTML="<ul>\n    <li>604.000.0000</li>\n    <li>1234 Main St</li>\n    <li>Vancouver, BC</li>\n    </ul>\n     ",e.appendChild(t),e}())}();const C=document.querySelector("#main_content");document.querySelector(".menu_button").addEventListener("click",(()=>{console.log("test"),C.appendChild(function(){document.querySelector("#main_content").textContent="";const e=document.createElement("div");return e.classList.add("menu__container"),r.forEach((n=>{const t=function(e,n,t){const a=document.createElement("div");a.classList.add("menu_list_item");const o=document.createElement("h3");o.classList.add("menu__item"),o.textContent=e;const r=document.createElement("p");r.classList.add("menu__desc"),r.textContent=n;const i=document.createElement("div");return i.classList.add("menu__price"),i.innerHTML=t,a.appendChild(o),a.appendChild(i),o.appendChild(r),a}(n.name,n.description,n.Price);e.appendChild(t)})),e}())})),document.querySelector(".aboutUs_button").addEventListener("click",(()=>{C.appendChild(function(){document.querySelector("#main_content").textContent="";const e=document.createElement("div");e.classList.add("about_wrapper");const n=document.createElement("div");n.classList.add("about_container"),n.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia leo convallis erat mattis, in scelerisque libero gravida. Donec ullamcorper, magna rutrum fringilla dictum, turpis ex efficitur turpis, sed bibendum orci lacus vitae augue. Fusce odio ex, ultricies a dapibus sed, laoreet eu felis. Nulla sed nisi malesuada, ornare odio vulputate, aliquet turpis. Aliquam erat volutpat. Ut egestas tortor ante, sed consequat sapien malesuada tempor. Proin pharetra molestie nibh eu convallis. Aenean est ante, convallis eget commodo ac, commodo vel leo. Fusce dapibus dictum velit vel mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut suscipit laoreet magna a tempor. Curabitur nec placerat nisi. Cras ac luctus dui, ac vehicula libero. Nulla ut mi in dui varius posuere pulvinar in turpis. Suspendisse malesuada volutpat orci, a maximus quam cursus et.";const t=document.createElement("img");return t.src=i,t.classList.add("chef_pic"),e.appendChild(n),e.appendChild(t),e}())})),document.querySelector(".home_button").addEventListener("click",(()=>{C.appendChild(o())}))})()})();