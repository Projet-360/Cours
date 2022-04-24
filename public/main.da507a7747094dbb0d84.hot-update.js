/*! For license information please see main.da507a7747094dbb0d84.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,t,n)=>{var r=n("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),i=Object.create(null),o="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function l(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(u(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function a(e){if(!e)return!1;var t=document.querySelectorAll("link"),n=!1;return c.call(t,(function(t){if(t.href){var i=function(e,t){var n;return e=r(e,{stripWWW:!1}),t.some((function(r){e.indexOf(t)>-1&&(n=r)})),n}(t.href,e);u(i)&&!0!==t.visited&&i&&(l(t,i),n=!0)}})),n}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&l(e)}))}function u(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(o)return console.log("no window.document found, will not HMR CSS"),s;var n,c,l,u=function(e){var t=i[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var n=document.getElementsByTagName("script"),o=n[n.length-1];o&&(t=o.src)}i[e]=t}return function(e){if(!t)return null;var n=t.split(/([^\\/]+)\.js$/),i=n&&n[1];return i&&e?e.split(",").map((function(e){var n=new RegExp("".concat(i,"\\.js$"),"g");return r(t.replace(n,"".concat(e.replace(/{fileName}/g,i),".css")))})):[t.replace(".js",".css")]}}(e);return n=function(){var e=u(t.filename),n=a(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,l=0,function(){var e=this,t=arguments,r=function(){return n.apply(e,t)};clearTimeout(l),l=setTimeout(r,c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(t,"i"),"").split("/"),r=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",t+r+n.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},"./styles/index.scss":(e,t,n)=>{n.r(t);var r=n("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){e.h=()=>"7810db7d9a0c49b13c84"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TytDLEdBQUksQ0FBQyxXQUFhLEdBQUcsUUFBUyxJQUMxSi9DLEVBQU9nRCxJQUFJQyxRQUFRSCxHQUNuQjlDLEVBQU9nRCxJQUFJRSxZQUFPQyxFQUFXTCxrQkNObkNNLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ub3JtYWxpemUtdXJsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3R5bGVzL2luZGV4LnNjc3M/ZjBmZiIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKlxuICBlc2xpbnQtZGlzYWJsZVxuICBuby1jb25zb2xlLFxuICBmdW5jLW5hbWVzXG4qL1xudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoJy4vbm9ybWFsaXplLXVybCcpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG5cbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdID0gc3JjO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoJy5qcycsICcuY3NzJyldO1xuICAgIH1cblxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZSgnLmpzJywgJy5jc3MnKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCAnZycpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWwsIHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICAgIHVybCA9IGVsLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoJy5jc3MnKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIGVsLnZpc2l0ZWQgPSB0cnVlO1xuICB2YXIgbmV3RWwgPSBlbC5jbG9uZU5vZGUoKTtcbiAgbmV3RWwuaXNMb2FkZWQgPSBmYWxzZTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYsIHtcbiAgICBzdHJpcFdXVzogZmFsc2VcbiAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cblxuICBzcmMuc29tZShmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJyk7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG5cbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15odHRwcz86L2kudGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coJ25vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTUycpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3MnKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWxvYWRlZCkge1xuICAgICAgY29uc29sZS5sb2coJ1tITVJdIGNzcyByZWxvYWQgJXMnLCBzcmMuam9pbignICcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1tITVJdIFJlbG9hZCBhbGwgY3NzJyk7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlICcuLic6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnLic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgW10pLmpvaW4oJy8nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG5cbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdXJsU3RyaW5nLmluZGV4T2YoJy8vJykgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KCcvLycpWzBdICsgJy8vJyA6ICcnO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsICdpJyksICcnKS5zcGxpdCgnLycpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgJycpO1xuICBjb21wb25lbnRzWzBdID0gJyc7XG4gIHZhciBwYXRoID0gbm9ybWFsaXplVXJsKGNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MDc5MjM3MTUwNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi93YW1wNjQvd3d3L0NvdXJzL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzgxMGRiN2Q5YTBjNDliMTNjODRcIikiXSwibmFtZXMiOlsibm9ybWFsaXplVXJsIiwicmVxdWlyZSIsInNyY0J5TW9kdWxlSWQiLCJPYmplY3QiLCJjcmVhdGUiLCJub0RvY3VtZW50IiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJub29wIiwidXBkYXRlQ3NzIiwiZWwiLCJ1cmwiLCJocmVmIiwic3BsaXQiLCJpc1VybFJlcXVlc3QiLCJpc0xvYWRlZCIsImluZGV4T2YiLCJ2aXNpdGVkIiwibmV3RWwiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWxvYWRTdHlsZSIsInNyYyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRlZCIsImNhbGwiLCJyZXQiLCJzdHJpcFdXVyIsInNvbWUiLCJnZXRSZWxvYWRVcmwiLCJyZWxvYWRBbGwiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZUlkIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmbiIsInRpbWUiLCJ0aW1lb3V0IiwiZ2V0U2NyaXB0U3JjIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxhc3RTY3JpcHRUYWciLCJsZW5ndGgiLCJmaWxlTWFwIiwic3BsaXRSZXN1bHQiLCJmaWxlbmFtZSIsIm1hcCIsIm1hcFJ1bGUiLCJyZWciLCJSZWdFeHAiLCJyZXBsYWNlIiwiZ2V0Q3VycmVudFNjcmlwdFVybCIsInJlbG9hZGVkIiwibG9jYWxzIiwiam9pbiIsInNlbGYiLCJ0aGlzIiwiYXJncyIsImFyZ3VtZW50cyIsImZ1bmN0aW9uQ2FsbCIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInVybFN0cmluZyIsInRyaW0iLCJwcm90b2NvbCIsImNvbXBvbmVudHMiLCJob3N0IiwidG9Mb3dlckNhc2UiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsIml0ZW0iLCJwb3AiLCJwdXNoIiwiY3NzUmVsb2FkIiwiaWQiLCJob3QiLCJkaXNwb3NlIiwiYWNjZXB0IiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9