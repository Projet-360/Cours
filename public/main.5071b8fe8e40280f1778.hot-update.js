/*! For license information please see main.5071b8fe8e40280f1778.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/pages/Home/index.js"),o=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.creatContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new Preloader}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new i.default,about:new o.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a),console.log(t)}}))}}}},(function(e){e.h=()=>"6db4da8b891abd03d0ea"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MDcxYjhmZThlNDAyODBmMTc3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1JBK0VBLElBeEVBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxtQkFHVEgsa0JBQ0lELEtBQUtLLFVBQVksSUFBSUMsVUFHekJKLGVBQ0lGLEtBQUtPLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENULEtBQUtVLFNBQVdWLEtBQUtPLFFBQVFJLGFBQWEsaUJBRzlDUixjQUNJSCxLQUFLWSxNQUFRLENBQ1QsS0FBUSxJQUFJQyxFQUFBQSxRQUNaLE1BQVMsSUFBSUMsRUFBQUEsUUFDYixZQUFlLElBQUlDLEVBQUFBLFFBQ25CLE9BQVUsSUFBSUMsRUFBQUEsU0FHbEJoQixLQUFLaUIsS0FBT2pCLEtBQUtZLE1BQU1aLEtBQUtVLFVBQzVCVixLQUFLaUIsS0FBS0MsU0FDVmxCLEtBQUtpQixLQUFLRSxPQUdBLGVBQUVDLFNBQ05wQixLQUFLaUIsS0FBS0ksT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXdCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUN6QixNQUFNQyxRQUFhSixFQUFRSyxPQUNyQkMsRUFBTXBCLFNBQVNxQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJbkIsY0FBYyxZQUVyQ1QsS0FBS1UsU0FBV3FCLEVBQVdwQixhQUFhLGlCQUV4Q1gsS0FBS08sUUFBUXlCLGFBQWEsZ0JBQWlCaEMsS0FBS1UsVUFDaERWLEtBQUtPLFFBQVF1QixVQUFZQyxFQUFXRCxVQUVwQzlCLEtBQUtpQixLQUFPakIsS0FBS1ksTUFBTVosS0FBS1UsVUFDNUJWLEtBQUtpQixLQUFLQyxTQUNWbEIsS0FBS2lCLEtBQUtFLFlBRVZjLFFBQVFDLElBQUksNkJBSXBCOUIsbUJBQ0ksTUFBTStCLEVBQVEzQixTQUFTNEIsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSQSxFQUFLQyxRQUFVQyxJQUNYLE1BQU0sS0FBRUMsR0FBU0gsRUFDakJFLEVBQU1FLGlCQUVOMUMsS0FBSzJDLFNBQVNGLEdBRWRSLFFBQVFDLElBQUlNLHdCQ3pFNUJJLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucydcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL3BhZ2VzL0RldGFpbCdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdENvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlclxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICAnYWJvdXQnOiBuZXcgQWJvdXQoKSxcclxuICAgICAgICAgICAgJ2NvbGxlY3Rpb25zJzogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgICAgICAgICdkZXRhaWwnOiBuZXcgRGV0YWlsKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZkYjRkYThiODkxYWJkMDNkMGVhXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0Q29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiSG9tZSIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=