/*! For license information please see main.84cb268bae024a5f93f3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),r=a("./app/pages/About/index.js"),d=a("./app/pages/Collections/index.js"),p=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.creatContent(),this.createPages(),this.addListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new i.default,this.preloader.once("completed",this.onPreloaded.bind(this))}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new r.default,collections:new d.default,detail:new p.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("C'est la merde mon gars !")}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"f74b1756fe90243674aa"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NGNiMjY4YmFlMDI0YTVmOTNmMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBa0dBLElBekZBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUVMSCxLQUFLSSxlQUNMSixLQUFLSyxtQkFDTEwsS0FBS00sU0FHVEwsa0JBQ0lELEtBQUtPLFVBQVksSUFBSUMsRUFBQUEsUUFDckJSLEtBQUtPLFVBQVVFLEtBQUssWUFBYVQsS0FBS1UsWUFBWUMsS0FBS1gsT0FHM0RFLGVBQ0lGLEtBQUtZLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENkLEtBQUtlLFNBQVdmLEtBQUtZLFFBQVFJLGFBQWEsaUJBRzlDYixjQUNJSCxLQUFLaUIsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCckIsS0FBS3NCLEtBQU90QixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLc0IsS0FBS0MsU0FJZGIsY0FDSVYsS0FBS08sVUFBVWlCLFVBRWZ4QixLQUFLc0IsS0FBS0csT0FHQSxlQUFFQyxTQUNOMUIsS0FBS3NCLEtBQUtLLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF3QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDekIsTUFBTUMsUUFBYUosRUFBUUssT0FDckJDLEVBQU1yQixTQUFTc0IsY0FBYyxPQUVuQ0QsRUFBSUUsVUFBWUosRUFFaEIsTUFBTUssRUFBYUgsRUFBSXBCLGNBQWMsWUFFckNkLEtBQUtlLFNBQVdzQixFQUFXckIsYUFBYSxpQkFFeENoQixLQUFLWSxRQUFRMEIsYUFBYSxnQkFBaUJ0QyxLQUFLZSxVQUNoRGYsS0FBS1ksUUFBUXdCLFVBQVlDLEVBQVdELFVBRXBDcEMsS0FBS3NCLEtBQU90QixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLc0IsS0FBS0MsU0FDVnZCLEtBQUtzQixLQUFLRyxZQUVWYyxRQUFRQyxJQUFJLDZCQUlwQmxDLFNBQ1FOLEtBQUtzQixNQUFRdEIsS0FBS3NCLEtBQUtoQixRQUN2Qk4sS0FBS3NCLEtBQUtoQixTQUdkTixLQUFLeUMsTUFBUVosT0FBT2Esc0JBQXNCMUMsS0FBS00sT0FBT0ssS0FBS1gsT0FJL0RLLG1CQUNJLE1BQU1zQyxFQUFROUIsU0FBUytCLGlCQUFpQixLQUV4Q0MsR0FBQUEsQ0FBS0YsR0FBT0csSUFDUkEsRUFBS0MsUUFBVUMsSUFDWCxNQUFNLEtBQUVDLEdBQVNILEVBQ2pCRSxFQUFNRSxpQkFFTmxELEtBQUttRCxTQUFTRix3QkM1RjlCRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCdcclxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vcGFnZXMvQ29sbGVjdGlvbnMnXHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9wYWdlcy9EZXRhaWwnXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdENvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICAnaG9tZSc6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgICdhYm91dCc6IG5ldyBBYm91dCgpLFxyXG4gICAgICAgICAgICAnY29sbGVjdGlvbnMnOiBuZXcgQ29sbGVjdGlvbnMoKSxcclxuICAgICAgICAgICAgJ2RldGFpbCc6IG5ldyBEZXRhaWwoKSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlbG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjc0YjE3NTZmZTkwMjQzNjc0YWFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiSG9tZSIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=