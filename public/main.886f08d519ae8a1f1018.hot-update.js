/*! For license information please see main.886f08d519ae8a1f1018.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),i=a.n(s),n=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),d=a("./app/pages/About/index.js"),p=a("./app/pages/Collections/index.js"),h=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new n.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new d.default,collections:new p.default,detail:new h.default},this.page=this.pages[this.template],this.page.create(),this.page.onResize()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.onResize(),this.page.show()}else console.log("C'est la merde mon gars !")}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");i()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"01ef65202f61f2142a41"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ODZmMDhkNTE5YWU4YTFmMTAxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBNEdBLElBbkdBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUNMTCxLQUFLTSxTQUdUTCxrQkFDSUQsS0FBS08sVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlIsS0FBS08sVUFBVUUsS0FBSyxZQUFhVCxLQUFLVSxZQUFZQyxLQUFLWCxPQUczREUsZ0JBQ0lGLEtBQUtZLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENkLEtBQUtlLFNBQVdmLEtBQUtZLFFBQVFJLGFBQWEsaUJBRzlDYixjQUNJSCxLQUFLaUIsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCckIsS0FBS3NCLEtBQU90QixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBRTVCZixLQUFLc0IsS0FBS0MsU0FDVnZCLEtBQUtzQixLQUFLRSxXQUdkZCxjQUNJVixLQUFLTyxVQUFVa0IsVUFDZnpCLEtBQUtzQixLQUFLSSxPQUdBLGVBQUVDLFNBQ04zQixLQUFLc0IsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXdCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUN6QixNQUFNQyxRQUFhSixFQUFRSyxPQUNyQkMsRUFBTXRCLFNBQVN1QixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJckIsY0FBYyxZQUVyQ2QsS0FBS2UsU0FBV3VCLEVBQVd0QixhQUFhLGlCQUV4Q2hCLEtBQUtZLFFBQVEyQixhQUFhLGdCQUFpQnZDLEtBQUtlLFVBQ2hEZixLQUFLWSxRQUFReUIsVUFBWUMsRUFBV0QsVUFFcENyQyxLQUFLc0IsS0FBT3RCLEtBQUtpQixNQUFNakIsS0FBS2UsVUFDNUJmLEtBQUtzQixLQUFLQyxTQUNWdkIsS0FBS3NCLEtBQUtFLFdBQ1Z4QixLQUFLc0IsS0FBS0ksWUFFVmMsUUFBUUMsSUFBSSw2QkFJcEJqQixXQUNReEIsS0FBS3NCLE1BQVF0QixLQUFLc0IsS0FBS0UsVUFDdkJ4QixLQUFLc0IsS0FBS0UsV0FJbEJsQixTQUNRTixLQUFLc0IsTUFBUXRCLEtBQUtzQixLQUFLaEIsUUFDdkJOLEtBQUtzQixLQUFLaEIsU0FHZE4sS0FBSzBDLE1BQVFaLE9BQU9hLHNCQUFzQjNDLEtBQUtNLE9BQU9LLEtBQUtYLE9BRy9ESSxvQkFDSTBCLE9BQU9jLGlCQUFpQixTQUFVNUMsS0FBS3dCLFNBQVNiLEtBQUtYLE9BR3pESyxtQkFDSSxNQUFNd0MsRUFBUWhDLFNBQVNpQyxpQkFBaUIsS0FFeENDLEdBQUFBLENBQUtGLEdBQU9HLElBQ1JBLEVBQUtDLFFBQVVDLElBQ1gsTUFBTSxLQUFFQyxHQUFTSCxFQUNqQkUsRUFBTUUsaUJBRU5wRCxLQUFLcUQsU0FBU0Ysd0JDdEc5QkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlcidcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQcmVsb2FkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgICAgICAgICdob21lJzogbmV3IEhvbWUoKSxcclxuICAgICAgICAgICAgJ2Fib3V0JzogbmV3IEFib3V0KCksXHJcbiAgICAgICAgICAgICdjb2xsZWN0aW9ucyc6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICAgICAgICAnZGV0YWlsJzogbmV3IERldGFpbCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcblxyXG4gICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVsb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlICh1cmwpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxyXG5cclxuICAgICAgICBpZiAoIHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKClcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQydlc3QgbGEgbWVyZGUgbW9uIGdhcnMgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDFlZjY1MjAyZjYxZjIxNDJhNDFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiSG9tZSIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwib25SZXNpemUiLCJkZXN0cm95Iiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=