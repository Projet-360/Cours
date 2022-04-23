/*! For license information please see main.a3cd1b47b18490232d26.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var n=a("./node_modules/lodash/each.js"),s=a.n(n),o=a("./app/pages/Home/index.js"),i=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages(),this.addLinkListeners()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new i.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(console.log(t),200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const n=a.querySelector(".content");this.content.setAttribute("data-template",n.getAttribute("data-template")),this.content.innerHTML=n.innerHTML}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");s()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a),console.log(t)}}))}}}},(function(e){e.h=()=>"821cd5d638353bddc6a7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hM2NkMWI0N2IxODQ5MDIzMmQyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBcUVBLElBOURBLE1BQ0lBLGNBQ0lDLEtBQUtDLGVBQ0xELEtBQUtFLGNBQ0xGLEtBQUtHLG1CQUdURixlQUNJRCxLQUFLSSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDTixLQUFLTyxTQUFXUCxLQUFLSSxRQUFRSSxhQUFhLGlCQUc5Q04sY0FDSUYsS0FBS1MsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCYixLQUFLYyxLQUFPZCxLQUFLUyxNQUFNVCxLQUFLTyxVQUM1QlAsS0FBS2MsS0FBS0MsU0FDVmYsS0FBS2MsS0FBS0UsT0FHQSxlQUFFQyxTQUNOakIsS0FBS2MsS0FBS0ksT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBR25DLEdBRkFLLFFBQVFDLElBQUlKLEdBRVksTUFBbkJBLEVBQVFLLE9BQWdCLENBQ3pCLE1BQU1DLFFBQWFOLEVBQVFPLE9BQ3JCQyxFQUFNdEIsU0FBU3VCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUlyQixjQUFjLFlBRXJDTixLQUFLSSxRQUFRMkIsYUFBYSxnQkFBaUJELEVBQVd0QixhQUFhLGtCQUNuRVIsS0FBS0ksUUFBUXlCLFVBQVlDLEVBQVdELGVBRXBDUCxRQUFRQyxJQUFJLDZCQUlwQnBCLG1CQUNJLE1BQU02QixFQUFRM0IsU0FBUzRCLGlCQUFpQixLQUV4Q0MsR0FBQUEsQ0FBS0YsR0FBT0csSUFDUkEsRUFBS0MsUUFBVUMsSUFDWCxNQUFNLEtBQUVDLEdBQVNILEVBQ2pCRSxFQUFNRSxpQkFFTnZDLEtBQUt3QyxTQUFTRixHQUVkaEIsUUFBUUMsSUFBSWMsd0JDL0Q1QkksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICAnYWJvdXQnOiBuZXcgQWJvdXQoKSxcclxuICAgICAgICAgICAgJ2NvbGxlY3Rpb25zJzogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgICAgICAgICdkZXRhaWwnOiBuZXcgRGV0YWlsKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgaWYgKCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQydlc3QgbGEgbWVyZGUgbW9uIGdhcnMgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlua0xpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcbiAgICAgICAgZWFjaChsaW5rcywgbGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MjFjZDVkNjM4MzUzYmRkYzZhN1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdENvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsIkhvbWUiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9