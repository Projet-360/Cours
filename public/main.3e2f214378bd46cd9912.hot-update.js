/*! For license information please see main.3e2f214378bd46cd9912.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});class a{constructor({id:e}){this.id=e}create(){console.log("create",this.id)}}},"./app/index.js":(e,s,t)=>{t.r(s);var a=t("./app/pages/Home/index.js"),p=t("./app/pages/About/index.js"),l=t("./app/pages/Collections/index.js"),c=t("./app/pages/Detail/index.js");new class{constructor(){this.creatContent(),this.createPages()}creatContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new a.default,about:new p.default,collections:new l.default,detail:new c.default},this.page=this.pages[this.template],console.log(this.pages)}}},"./app/pages/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t("./app/classes/Page.js");class p extends a.default{constructor(){super({id:"about"})}}},"./app/pages/Collections/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t("./app/classes/Page.js");class p extends a.default{constructor(){super({id:"collections"})}}},"./app/pages/Detail/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t("./app/classes/Page.js");class p extends a.default{constructor(){super({id:"detail"})}}},"./app/pages/Home/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t("./app/classes/Page.js");class p extends a.default{constructor(){super({id:"home"})}}}},(function(e){e.h=()=>"2498b51757425d1ca302"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZTJmMjE0Mzc4YmQ0NmNkOTkxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c0hBQWUsTUFBTUEsRUFDakJDLGFBQWEsR0FBQ0MsSUFDVkMsS0FBS0QsR0FBS0EsRUFHZEUsU0FDSUMsUUFBUUMsSUFBSSxTQUFVSCxLQUFLRCwyTEN3Qm5DLElBMUJBLE1BQ0lELGNBQ0lFLEtBQUtJLGVBQ0xKLEtBQUtLLGNBR1RELGVBQ0lKLEtBQUtNLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENSLEtBQUtTLFNBQVdULEtBQUtNLFFBQVFJLGFBQWEsaUJBRzlDTCxjQUNJTCxLQUFLVyxNQUFRLENBQ1QsS0FBUSxJQUFJQyxFQUFBQSxRQUNaLE1BQVMsSUFBSUMsRUFBQUEsUUFDYixZQUFlLElBQUlDLEVBQUFBLFFBQ25CLE9BQVUsSUFBSUMsRUFBQUEsU0FHbEJmLEtBQUtnQixLQUFPaEIsS0FBS1csTUFBTVgsS0FBS1MsVUFHNUJQLFFBQVFDLElBQUlILEtBQUtXLGdIQ3hCVixNQUFNRSxVQUFjaEIsRUFBQUEsUUFDL0JDLGNBQ0ltQixNQUFPLENBQ0hsQixHQUFJLHlIQ0hELE1BQU1lLFVBQW9CakIsRUFBQUEsUUFDckNDLGNBQ0ltQixNQUFPLENBQ0hsQixHQUFJLDBIQ0hELE1BQU1nQixVQUFlbEIsRUFBQUEsUUFDaENDLGNBQ0ltQixNQUFPLENBQ0hsQixHQUFJLG1IQ0hELE1BQU1hLFVBQWFmLEVBQUFBLFFBQzlCQyxjQUNJbUIsTUFBTyxDQUNIbEIsR0FBSSwwQkNMaEJtQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL3BhZ2VzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL3BhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL3BhZ2VzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yICh7aWR9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVwiLCB0aGlzLmlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL3BhZ2VzL0NvbGxlY3Rpb25zJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdENvbnRlbnQoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0Q29udGVudCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcyAoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxyXG4gICAgICAgICAgICAnYWJvdXQnOiBuZXcgQWJvdXQoKSxcclxuICAgICAgICAgICAgJ2NvbGxlY3Rpb25zJzogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgICAgICAgICdkZXRhaWwnOiBuZXcgRGV0YWlsKCkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICAvLyB0aGlzLnBhZ2UuY3JlYXRlKClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWdlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsImltcG9ydCBQYWdlIGZyb20gJy4vLi4vLi4vY2xhc3Nlcy9QYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoe1xyXG4gICAgICAgICAgICBpZDogJ2Fib3V0J1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnLi8uLi8uLi9jbGFzc2VzL1BhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9ucyBleHRlbmRzIFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICh7XHJcbiAgICAgICAgICAgIGlkOiAnY29sbGVjdGlvbnMnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUGFnZSBmcm9tICcuLy4uLy4uL2NsYXNzZXMvUGFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICh7XHJcbiAgICAgICAgICAgIGlkOiAnZGV0YWlsJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnLi8uLi8uLi9jbGFzc2VzL1BhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKHtcclxuICAgICAgICAgICAgaWQ6ICdob21lJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjQ5OGI1MTc1NzQyNWQxY2EzMDJcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJ0aGlzIiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsImNyZWF0Q29udGVudCIsImNyZWF0ZVBhZ2VzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJIb21lIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsInBhZ2UiLCJzdXBlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==