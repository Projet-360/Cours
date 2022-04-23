/*! For license information please see main.59d20e3506d2833348c7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),o=a("./app/pages/Home/index.js"),i=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages(),this.addLinkListeners()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new i.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{target:{href:a}}=e;t.preventDefault(),this.onChange(a),console.log(t)}}))}}}},(function(e){e.h=()=>"ca721fad956b50f067d7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OWQyMGUzNTA2ZDI4MzMzNDhjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBZ0RBLElBekNBLE1BQ0lBLGNBQ0lDLEtBQUtDLGVBQ0xELEtBQUtFLGNBQ0xGLEtBQUtHLG1CQUdURixlQUNJRCxLQUFLSSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDTixLQUFLTyxTQUFXUCxLQUFLSSxRQUFRSSxhQUFhLGlCQUc5Q04sY0FDSUYsS0FBS1MsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCYixLQUFLYyxLQUFPZCxLQUFLUyxNQUFNVCxLQUFLTyxVQUM1QlAsS0FBS2MsS0FBS0MsU0FDVmYsS0FBS2MsS0FBS0UsT0FHZGIsbUJBQ0ksTUFBTWMsRUFBUVosU0FBU2EsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSQSxFQUFLQyxRQUFVQyxJQUNYLE1BQVFDLFFBQVMsS0FBQ0MsSUFBVUosRUFDNUJFLEVBQU1HLGlCQUVOekIsS0FBSzBCLFNBQVNGLEdBRWRHLFFBQVFDLElBQUlOLHdCQzFDNUJPLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucydcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL3BhZ2VzL0RldGFpbCdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0Q29udGVudCgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcygpXHJcbiAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdENvbnRlbnQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXMgKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgICAgICAgICdob21lJzogbmV3IEhvbWUoKSxcclxuICAgICAgICAgICAgJ2Fib3V0JzogbmV3IEFib3V0KCksXHJcbiAgICAgICAgICAgICdjb2xsZWN0aW9ucyc6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICAgICAgICAnZGV0YWlsJzogbmV3IERldGFpbCgpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXHJcblxyXG4gICAgICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhcmdldCA6IHtocmVmfSB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYTcyMWZhZDk1NmI1MGYwNjdkN1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdENvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsIkhvbWUiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==