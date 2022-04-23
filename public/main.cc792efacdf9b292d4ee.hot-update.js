/*! For license information please see main.cc792efacdf9b292d4ee.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),r=a("./app/pages/About/index.js"),l=a("./app/pages/Collections/index.js"),c=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.creatContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new i.default,this.preloader.once("completed",(e=>this.onPreloader.bind(this)))}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new r.default,collections:new l.default,detail:new c.default},this.page=this.pages[this.template],this.page.create()}onPreloader(){this.page.show(),this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("C'est la merde mon gars !")}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"3d06ec86a98885dae2d6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYzc5MmVmYWNkZjliMjkyZDRlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBcUZBLElBNUVBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxtQkFHVEgsa0JBQ0lELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFDckJOLEtBQUtLLFVBQVVFLEtBQUssYUFBYUMsR0FBS1IsS0FBS1MsWUFBWUMsS0FBS1YsUUFHaEVFLGVBQ0lGLEtBQUtXLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENiLEtBQUtjLFNBQVdkLEtBQUtXLFFBQVFJLGFBQWEsaUJBRzlDWixjQUNJSCxLQUFLZ0IsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCcEIsS0FBS3FCLEtBQU9yQixLQUFLZ0IsTUFBTWhCLEtBQUtjLFVBQzVCZCxLQUFLcUIsS0FBS0MsU0FJZGIsY0FDSVQsS0FBS3FCLEtBQUtFLE9BQ1Z2QixLQUFLSyxVQUFVbUIsVUFHTCxlQUFFQyxTQUNOekIsS0FBS3FCLEtBQUtLLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF3QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDekIsTUFBTUMsUUFBYUosRUFBUUssT0FDckJDLEVBQU1yQixTQUFTc0IsY0FBYyxPQUVuQ0QsRUFBSUUsVUFBWUosRUFFaEIsTUFBTUssRUFBYUgsRUFBSXBCLGNBQWMsWUFFckNiLEtBQUtjLFNBQVdzQixFQUFXckIsYUFBYSxpQkFFeENmLEtBQUtXLFFBQVEwQixhQUFhLGdCQUFpQnJDLEtBQUtjLFVBQ2hEZCxLQUFLVyxRQUFRd0IsVUFBWUMsRUFBV0QsVUFFcENuQyxLQUFLcUIsS0FBT3JCLEtBQUtnQixNQUFNaEIsS0FBS2MsVUFDNUJkLEtBQUtxQixLQUFLQyxTQUNWdEIsS0FBS3FCLEtBQUtFLFlBRVZlLFFBQVFDLElBQUksNkJBSXBCbkMsbUJBQ0ksTUFBTW9DLEVBQVE1QixTQUFTNkIsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSQSxFQUFLQyxRQUFVQyxJQUNYLE1BQU0sS0FBRUMsR0FBU0gsRUFDakJFLEVBQU1FLGlCQUVOL0MsS0FBS2dELFNBQVNGLHdCQy9FOUJHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9QcmVsb2FkZXInXHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucydcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL3BhZ2VzL0RldGFpbCdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdENvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgXyA9PiB0aGlzLm9uUHJlbG9hZGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRDb250ZW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICAnYWJvdXQnOiBuZXcgQWJvdXQoKSxcclxuICAgICAgICAgICAgJ2NvbGxlY3Rpb25zJzogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgICAgICAgICdkZXRhaWwnOiBuZXcgRGV0YWlsKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblByZWxvYWRlcigpIHtcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxyXG5cclxuICAgICAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2QwNmVjODZhOTg4ODVkYWUyZDZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIl8iLCJvblByZWxvYWRlciIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsIkhvbWUiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJkZXN0cm95IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==