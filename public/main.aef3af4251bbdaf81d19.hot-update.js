/*! For license information please see main.aef3af4251bbdaf81d19.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),i=a.n(s),n=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),d=a("./app/pages/About/index.js"),p=a("./app/pages/Collections/index.js"),h=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new n.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new d.default,collections:new p.default,detail:new h.default},this.page=this.pages[this.template],this.page.create(),this.page.onResize()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text();console.log(e);const a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.onResize(),this.page.show()}else console.log("C'est la merde mon gars !")}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");i()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"6eba9b6a35b77893526f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZWYzYWY0MjUxYmJkYWY4MWQxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBNkdBLElBcEdBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUNMTCxLQUFLTSxTQUdUTCxrQkFDSUQsS0FBS08sVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlIsS0FBS08sVUFBVUUsS0FBSyxZQUFhVCxLQUFLVSxZQUFZQyxLQUFLWCxPQUczREUsZ0JBQ0lGLEtBQUtZLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENkLEtBQUtlLFNBQVdmLEtBQUtZLFFBQVFJLGFBQWEsaUJBRzlDYixjQUNJSCxLQUFLaUIsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCckIsS0FBS3NCLEtBQU90QixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBRTVCZixLQUFLc0IsS0FBS0MsU0FDVnZCLEtBQUtzQixLQUFLRSxXQUdkZCxjQUNJVixLQUFLTyxVQUFVa0IsVUFDZnpCLEtBQUtzQixLQUFLSSxPQUdBLGVBQUVDLFNBQ04zQixLQUFLc0IsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXdCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUN6QixNQUFNQyxRQUFhSixFQUFRSyxPQUMzQkMsUUFBUUMsSUFBSUgsR0FDWixNQUFNSSxFQUFNeEIsU0FBU3lCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlOLEVBRWhCLE1BQU1PLEVBQWFILEVBQUl2QixjQUFjLFlBRXJDZCxLQUFLZSxTQUFXeUIsRUFBV3hCLGFBQWEsaUJBRXhDaEIsS0FBS1ksUUFBUTZCLGFBQWEsZ0JBQWlCekMsS0FBS2UsVUFDaERmLEtBQUtZLFFBQVEyQixVQUFZQyxFQUFXRCxVQUVwQ3ZDLEtBQUtzQixLQUFPdEIsS0FBS2lCLE1BQU1qQixLQUFLZSxVQUM1QmYsS0FBS3NCLEtBQUtDLFNBQ1Z2QixLQUFLc0IsS0FBS0UsV0FDVnhCLEtBQUtzQixLQUFLSSxZQUVWUyxRQUFRQyxJQUFJLDZCQUlwQlosV0FDUXhCLEtBQUtzQixNQUFRdEIsS0FBS3NCLEtBQUtFLFVBQ3ZCeEIsS0FBS3NCLEtBQUtFLFdBSWxCbEIsU0FDUU4sS0FBS3NCLE1BQVF0QixLQUFLc0IsS0FBS2hCLFFBQ3ZCTixLQUFLc0IsS0FBS2hCLFNBR2ROLEtBQUswQyxNQUFRWixPQUFPYSxzQkFBc0IzQyxLQUFLTSxPQUFPSyxLQUFLWCxPQUcvREksb0JBQ0kwQixPQUFPYyxpQkFBaUIsU0FBVTVDLEtBQUt3QixTQUFTYixLQUFLWCxPQUd6REssbUJBQ0ksTUFBTXdDLEVBQVFoQyxTQUFTaUMsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSQSxFQUFLQyxRQUFVQyxJQUNYLE1BQU0sS0FBRUMsR0FBU0gsRUFDakJFLEVBQU1FLGlCQUVOcEQsS0FBS3FELFNBQVNGLHdCQ3ZHOUJHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9QcmVsb2FkZXInXHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucydcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL3BhZ2VzL0RldGFpbCdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICAnaG9tZSc6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgICdhYm91dCc6IG5ldyBBYm91dCgpLFxyXG4gICAgICAgICAgICAnY29sbGVjdGlvbnMnOiBuZXcgQ29sbGVjdGlvbnMoKSxcclxuICAgICAgICAgICAgJ2RldGFpbCc6IG5ldyBEZXRhaWwoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcclxuICAgICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlbG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNoYW5nZSAodXJsKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcclxuXHJcbiAgICAgICAgaWYgKCByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhodG1sKVxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuICAgICAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5zaG93KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkMnZXN0IGxhIG1lcmRlIG1vbiBnYXJzICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKSAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlua0xpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcbiAgICAgICAgZWFjaChsaW5rcywgbGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZlYmE5YjZhMzViNzc4OTM1MjZmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsIkhvbWUiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsIm9uUmVzaXplIiwiZGVzdHJveSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9