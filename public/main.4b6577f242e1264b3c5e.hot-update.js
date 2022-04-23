/*! For license information please see main.4b6577f242e1264b3c5e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,n)=>{n.r(t);var a=n("./node_modules/lodash/each.js"),s=n.n(a),o=n("./app/pages/Home/index.js"),i=n("./app/pages/About/index.js"),c=n("./app/pages/Collections/index.js"),l=n("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages(),this.addLinkListeners()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new i.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){const t=await window.fetch(e);if(console.log(t),200===t.status){const e=await t.text(),n=document.createElement("div");n.innerHTML=e;const a=n.querySelector(".content");this.content.innerHTML=a.innerHTML}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");s()(e,(e=>{e.onclick=t=>{const{href:n}=e;t.preventDefault(),this.onChange(n),console.log(t)}}))}}}},(function(e){e.h=()=>"1464ad3ddaf09ef76a8b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YjY1NzdmMjQyZTEyNjRiM2M1ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBaUVBLElBMURBLE1BQ0lBLGNBQ0lDLEtBQUtDLGVBQ0xELEtBQUtFLGNBQ0xGLEtBQUtHLG1CQUdURixlQUNJRCxLQUFLSSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDTixLQUFLTyxTQUFXUCxLQUFLSSxRQUFRSSxhQUFhLGlCQUc5Q04sY0FDSUYsS0FBS1MsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCYixLQUFLYyxLQUFPZCxLQUFLUyxNQUFNVCxLQUFLTyxVQUM1QlAsS0FBS2MsS0FBS0MsU0FDVmYsS0FBS2MsS0FBS0UsT0FHQSxlQUFFQyxHQUNaLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSCxHQUduQyxHQUZBSSxRQUFRQyxJQUFJSixHQUVZLE1BQW5CQSxFQUFRSyxPQUFnQixDQUN6QixNQUFNQyxRQUFhTixFQUFRTyxPQUNyQkMsRUFBTXJCLFNBQVNzQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJcEIsY0FBYyxZQUNyQ04sS0FBS0ksUUFBUXdCLFVBQVlDLEVBQVdELGVBRXBDUCxRQUFRQyxJQUFJLDZCQUlwQm5CLG1CQUNJLE1BQU0yQixFQUFRekIsU0FBUzBCLGlCQUFpQixLQUV4Q0MsR0FBQUEsQ0FBS0YsR0FBT0csSUFDUkEsRUFBS0MsUUFBVUMsSUFDWCxNQUFNLEtBQUVDLEdBQVNILEVBQ2pCRSxFQUFNRSxpQkFFTnJDLEtBQUtzQyxTQUFTRixHQUVkZixRQUFRQyxJQUFJYSx3QkMzRDVCSSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCdcclxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vcGFnZXMvQ29sbGVjdGlvbnMnXHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9wYWdlcy9EZXRhaWwnXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdENvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRDb250ZW50ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VzICgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICAnaG9tZSc6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgICdhYm91dCc6IG5ldyBBYm91dCgpLFxyXG4gICAgICAgICAgICAnY29sbGVjdGlvbnMnOiBuZXcgQ29sbGVjdGlvbnMoKSxcclxuICAgICAgICAgICAgJ2RldGFpbCc6IG5ldyBEZXRhaWwoKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNoYW5nZSAodXJsKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdCk7XHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0NjRhZDNkZGFmMDllZjc2YThiXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0Q29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiSG9tZSIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsInVybCIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==