/*! For license information please see main.12676a4fef4a9bd36cd6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),o=a("./app/components/Preloader.js"),i=a("./app/pages/Home/index.js"),l=a("./app/pages/About/index.js"),r=a("./app/pages/Collections/index.js"),c=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.creatContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new o.default,this.preloader.once("completed",this.onPreloader)}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new i.default,about:new l.default,collections:new r.default,detail:new c.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onPreloader(){console.log("preload")}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"648028e7a8489817363f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMjY3NmE0ZmVmNGE5YmQzNmNkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBb0ZBLElBM0VBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxtQkFHVEgsa0JBQ0lELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFDckJOLEtBQUtLLFVBQVVFLEtBQUssWUFBYVAsS0FBS1EsYUFHMUNOLGVBQ0lGLEtBQUtTLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENYLEtBQUtZLFNBQVdaLEtBQUtTLFFBQVFJLGFBQWEsaUJBRzlDVixjQUNJSCxLQUFLYyxNQUFRLENBQ1QsS0FBUSxJQUFJQyxFQUFBQSxRQUNaLE1BQVMsSUFBSUMsRUFBQUEsUUFDYixZQUFlLElBQUlDLEVBQUFBLFFBQ25CLE9BQVUsSUFBSUMsRUFBQUEsU0FHbEJsQixLQUFLbUIsS0FBT25CLEtBQUtjLE1BQU1kLEtBQUtZLFVBQzVCWixLQUFLbUIsS0FBS0MsU0FDVnBCLEtBQUttQixLQUFLRSxPQUdkYixjQUNJYyxRQUFRQyxJQUFJLFdBR0YsZUFBRUMsU0FDTnhCLEtBQUttQixLQUFLTSxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBd0IsTUFBbkJFLEVBQVFHLE9BQWdCLENBQ3pCLE1BQU1DLFFBQWFKLEVBQVFLLE9BQ3JCQyxFQUFNdEIsU0FBU3VCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUlyQixjQUFjLFlBRXJDWCxLQUFLWSxTQUFXdUIsRUFBV3RCLGFBQWEsaUJBRXhDYixLQUFLUyxRQUFRMkIsYUFBYSxnQkFBaUJwQyxLQUFLWSxVQUNoRFosS0FBS1MsUUFBUXlCLFVBQVlDLEVBQVdELFVBRXBDbEMsS0FBS21CLEtBQU9uQixLQUFLYyxNQUFNZCxLQUFLWSxVQUM1QlosS0FBS21CLEtBQUtDLFNBQ1ZwQixLQUFLbUIsS0FBS0UsWUFFVkMsUUFBUUMsSUFBSSw2QkFJcEJuQixtQkFDSSxNQUFNaUMsRUFBUTNCLFNBQVM0QixpQkFBaUIsS0FFeENDLEdBQUFBLENBQUtGLEdBQU9HLElBQ1JBLEVBQUtDLFFBQVVDLElBQ1gsTUFBTSxLQUFFQyxHQUFTSCxFQUNqQkUsRUFBTUUsaUJBRU41QyxLQUFLNkMsU0FBU0Ysd0JDOUU5QkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlcidcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0Q29udGVudCgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcygpXHJcbiAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQcmVsb2FkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgICAgICAgICdob21lJzogbmV3IEhvbWUoKSxcclxuICAgICAgICAgICAgJ2Fib3V0JzogbmV3IEFib3V0KCksXHJcbiAgICAgICAgICAgICdjb2xsZWN0aW9ucyc6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICAgICAgICAnZGV0YWlsJzogbmV3IERldGFpbCgpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmVsb2FkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjQ4MDI4ZTdhODQ4OTgxNzM2M2ZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVyIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJIb21lIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==