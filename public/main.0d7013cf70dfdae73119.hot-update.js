/*! For license information please see main.0d7013cf70dfdae73119.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),o=a("./app/pages/Home/index.js"),i=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages(),this.addLinkListeners()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new i.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onChange(e){}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a),console.log(t)}}))}}}},(function(e){e.h=()=>"3083a59a51402a4860ff"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZDcwMTNjZjcwZGZkYWU3MzExOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBb0RBLElBN0NBLE1BQ0lBLGNBQ0lDLEtBQUtDLGVBQ0xELEtBQUtFLGNBQ0xGLEtBQUtHLG1CQUdURixlQUNJRCxLQUFLSSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDTixLQUFLTyxTQUFXUCxLQUFLSSxRQUFRSSxhQUFhLGlCQUc5Q04sY0FDSUYsS0FBS1MsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCYixLQUFLYyxLQUFPZCxLQUFLUyxNQUFNVCxLQUFLTyxVQUM1QlAsS0FBS2MsS0FBS0MsU0FDVmYsS0FBS2MsS0FBS0UsT0FHZEMsU0FBVUMsSUFJVmYsbUJBQ0ksTUFBTWdCLEVBQVFkLFNBQVNlLGlCQUFpQixLQUV4Q0MsR0FBQUEsQ0FBS0YsR0FBT0csSUFDUkEsRUFBS0MsUUFBVUMsSUFDWCxNQUFNLEtBQUVDLEdBQVNILEVBQ2pCRSxFQUFNRSxpQkFFTjFCLEtBQUtpQixTQUFTUSxHQUVkRSxRQUFRQyxJQUFJSix3QkM5QzVCSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCdcclxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vcGFnZXMvQ29sbGVjdGlvbnMnXHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9wYWdlcy9EZXRhaWwnXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdENvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRDb250ZW50ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VzICgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICAnaG9tZSc6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgICdhYm91dCc6IG5ldyBBYm91dCgpLFxyXG4gICAgICAgICAgICAnY29sbGVjdGlvbnMnOiBuZXcgQ29sbGVjdGlvbnMoKSxcclxuICAgICAgICAgICAgJ2RldGFpbCc6IG5ldyBEZXRhaWwoKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSAodXJsKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXHJcblxyXG4gICAgICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzA4M2E1OWE1MTQwMmE0ODYwZmZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJIb21lIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=