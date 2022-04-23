/*! For license information please see main.bca3c696d7095e19c5bf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/pages/Home/index.js"),o=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages(),this.addLinkListeners()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new i.default,about:new o.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(t=>{e.onclick=e=>{e.preventDefault(),console.log(e)}}))}}}},(function(e){e.h=()=>"e20f07b8ece4c8771741"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iY2EzYzY5NmQ3MDk1ZTE5YzViZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBNkNBLElBdENBLE1BQ0lBLGNBQ0lDLEtBQUtDLGVBQ0xELEtBQUtFLGNBQ0xGLEtBQUtHLG1CQUdURixlQUNJRCxLQUFLSSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDTixLQUFLTyxTQUFXUCxLQUFLSSxRQUFRSSxhQUFhLGlCQUc5Q04sY0FDSUYsS0FBS1MsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCYixLQUFLYyxLQUFPZCxLQUFLUyxNQUFNVCxLQUFLTyxVQUM1QlAsS0FBS2MsS0FBS0MsU0FDVmYsS0FBS2MsS0FBS0UsT0FHZGIsbUJBQ0ksTUFBTWMsRUFBUVosU0FBU2EsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSSCxFQUFNSSxRQUFVQyxJQUNaQSxFQUFNQyxpQkFFTkMsUUFBUUMsSUFBSUgsd0JDdkM1QkksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICAnYWJvdXQnOiBuZXcgQWJvdXQoKSxcclxuICAgICAgICAgICAgJ2NvbGxlY3Rpb25zJzogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgICAgICAgICdkZXRhaWwnOiBuZXcgRGV0YWlsKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlua0xpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcbiAgICAgICAgZWFjaChsaW5rcywgbGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtzLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTIwZjA3YjhlY2U0Yzg3NzE3NDFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJIb21lIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=