/*! For license information please see main.e826d931182a97296103.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),r=a("./app/pages/About/index.js"),c=a("./app/pages/Collections/index.js"),l=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.creatContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new i.default,this.preloader.once("completed",this.onPreloader)}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new r.default,collections:new c.default,detail:new l.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onPreloader(){await this.preloader.hide()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"de6215adcbd905eac6bd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lODI2ZDkzMTE4MmE5NzI5NjEwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBb0ZBLElBM0VBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxtQkFHVEgsa0JBQ0lELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFDckJOLEtBQUtLLFVBQVVFLEtBQUssWUFBYVAsS0FBS1EsYUFHMUNOLGVBQ0lGLEtBQUtTLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENYLEtBQUtZLFNBQVdaLEtBQUtTLFFBQVFJLGFBQWEsaUJBRzlDVixjQUNJSCxLQUFLYyxNQUFRLENBQ1QsS0FBUSxJQUFJQyxFQUFBQSxRQUNaLE1BQVMsSUFBSUMsRUFBQUEsUUFDYixZQUFlLElBQUlDLEVBQUFBLFFBQ25CLE9BQVUsSUFBSUMsRUFBQUEsU0FHbEJsQixLQUFLbUIsS0FBT25CLEtBQUtjLE1BQU1kLEtBQUtZLFVBQzVCWixLQUFLbUIsS0FBS0MsU0FDVnBCLEtBQUttQixLQUFLRSxPQUdHLDBCQUNQckIsS0FBS0ssVUFBVWlCLE9BR1gsZUFBRUMsU0FDTnZCLEtBQUttQixLQUFLRyxPQUVoQixNQUFNRSxRQUFnQkMsT0FBT0MsTUFBTUgsR0FFbkMsR0FBd0IsTUFBbkJDLEVBQVFHLE9BQWdCLENBQ3pCLE1BQU1DLFFBQWFKLEVBQVFLLE9BQ3JCQyxFQUFNcEIsU0FBU3FCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUluQixjQUFjLFlBRXJDWCxLQUFLWSxTQUFXcUIsRUFBV3BCLGFBQWEsaUJBRXhDYixLQUFLUyxRQUFReUIsYUFBYSxnQkFBaUJsQyxLQUFLWSxVQUNoRFosS0FBS1MsUUFBUXVCLFVBQVlDLEVBQVdELFVBRXBDaEMsS0FBS21CLEtBQU9uQixLQUFLYyxNQUFNZCxLQUFLWSxVQUM1QlosS0FBS21CLEtBQUtDLFNBQ1ZwQixLQUFLbUIsS0FBS0UsWUFFVmMsUUFBUUMsSUFBSSw2QkFJcEJoQyxtQkFDSSxNQUFNaUMsRUFBUTNCLFNBQVM0QixpQkFBaUIsS0FFeENDLEdBQUFBLENBQUtGLEdBQU9HLElBQ1JBLEVBQUtDLFFBQVVDLElBQ1gsTUFBTSxLQUFFQyxHQUFTSCxFQUNqQkUsRUFBTUUsaUJBRU41QyxLQUFLNkMsU0FBU0Ysd0JDOUU5QkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlcidcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0Q29udGVudCgpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcygpXHJcbiAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQcmVsb2FkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcclxuICAgICAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgICAgICAgICdob21lJzogbmV3IEhvbWUoKSxcclxuICAgICAgICAgICAgJ2Fib3V0JzogbmV3IEFib3V0KCksXHJcbiAgICAgICAgICAgICdjb2xsZWN0aW9ucyc6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICAgICAgICAnZGV0YWlsJzogbmV3IERldGFpbCgpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZGVyLmhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlICh1cmwpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxyXG5cclxuICAgICAgICBpZiAoIHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnNob3coKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQydlc3QgbGEgbWVyZGUgbW9uIGdhcnMgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlua0xpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcbiAgICAgICAgZWFjaChsaW5rcywgbGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRlNjIxNWFkY2JkOTA1ZWFjNmJkXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0Q29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlciIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiSG9tZSIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsImhpZGUiLCJ1cmwiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=