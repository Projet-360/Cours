/*! For license information please see main.f9c72d31f5e30e3c1db0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),i=a.n(s),n=a("./app/components/Preloader.js"),o=a("./app/pages/Home/index.js"),d=a("./app/pages/About/index.js"),p=a("./app/pages/Collections/index.js"),h=a("./app/pages/Detail/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new n.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new o.default,about:new d.default,collections:new p.default,detail:new h.default},this.page=this.pages[this.template],console.log(this.page),this.page.create(),this.page.onResize()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.onResize(),this.page.show()}else console.log("C'est la merde mon gars !")}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");i()(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"886f08d519ae8a1f1018"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOWM3MmQzMWY1ZTMwZTNjMWRiMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBNEdBLElBbkdBLE1BQ0lBLGNBQ0lDLEtBQUtDLGtCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUNMTCxLQUFLTSxTQUdUTCxrQkFDSUQsS0FBS08sVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlIsS0FBS08sVUFBVUUsS0FBSyxZQUFhVCxLQUFLVSxZQUFZQyxLQUFLWCxPQUczREUsZ0JBQ0lGLEtBQUtZLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENkLEtBQUtlLFNBQVdmLEtBQUtZLFFBQVFJLGFBQWEsaUJBRzlDYixjQUNJSCxLQUFLaUIsTUFBUSxDQUNULEtBQVEsSUFBSUMsRUFBQUEsUUFDWixNQUFTLElBQUlDLEVBQUFBLFFBQ2IsWUFBZSxJQUFJQyxFQUFBQSxRQUNuQixPQUFVLElBQUlDLEVBQUFBLFNBR2xCckIsS0FBS3NCLEtBQU90QixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCUSxRQUFRQyxJQUFJeEIsS0FBS3NCLE1BQ2pCdEIsS0FBS3NCLEtBQUtHLFNBQ1Z6QixLQUFLc0IsS0FBS0ksV0FHZGhCLGNBQ0lWLEtBQUtPLFVBQVVvQixVQUNmM0IsS0FBS3NCLEtBQUtNLE9BR0EsZUFBRUMsU0FDTjdCLEtBQUtzQixLQUFLUSxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBd0IsTUFBbkJFLEVBQVFHLE9BQWdCLENBQ3pCLE1BQU1DLFFBQWFKLEVBQVFLLE9BQ3JCQyxFQUFNeEIsU0FBU3lCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUl2QixjQUFjLFlBRXJDZCxLQUFLZSxTQUFXeUIsRUFBV3hCLGFBQWEsaUJBRXhDaEIsS0FBS1ksUUFBUTZCLGFBQWEsZ0JBQWlCekMsS0FBS2UsVUFDaERmLEtBQUtZLFFBQVEyQixVQUFZQyxFQUFXRCxVQUVwQ3ZDLEtBQUtzQixLQUFPdEIsS0FBS2lCLE1BQU1qQixLQUFLZSxVQUM1QmYsS0FBS3NCLEtBQUtHLFNBQ1Z6QixLQUFLc0IsS0FBS0ksV0FDVjFCLEtBQUtzQixLQUFLTSxZQUVWTCxRQUFRQyxJQUFJLDZCQUlwQkUsV0FDUTFCLEtBQUtzQixNQUFRdEIsS0FBS3NCLEtBQUtJLFVBQ3ZCMUIsS0FBS3NCLEtBQUtJLFdBSWxCcEIsU0FDUU4sS0FBS3NCLE1BQVF0QixLQUFLc0IsS0FBS2hCLFFBQ3ZCTixLQUFLc0IsS0FBS2hCLFNBR2ROLEtBQUswQyxNQUFRVixPQUFPVyxzQkFBc0IzQyxLQUFLTSxPQUFPSyxLQUFLWCxPQUcvREksb0JBQ0k0QixPQUFPWSxpQkFBaUIsU0FBVTVDLEtBQUswQixTQUFTZixLQUFLWCxPQUd6REssbUJBQ0ksTUFBTXdDLEVBQVFoQyxTQUFTaUMsaUJBQWlCLEtBRXhDQyxHQUFBQSxDQUFLRixHQUFPRyxJQUNSQSxFQUFLQyxRQUFVQyxJQUNYLE1BQU0sS0FBRUMsR0FBU0gsRUFDakJFLEVBQU1FLGlCQUVOcEQsS0FBS3FELFNBQVNGLHdCQ3RHOUJHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9QcmVsb2FkZXInXHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucydcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL3BhZ2VzL0RldGFpbCdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50KClcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXHJcbiAgICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXHJcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlcygpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICAnaG9tZSc6IG5ldyBIb21lKCksXHJcbiAgICAgICAgICAgICdhYm91dCc6IG5ldyBBYm91dCgpLFxyXG4gICAgICAgICAgICAnY29sbGVjdGlvbnMnOiBuZXcgQ29sbGVjdGlvbnMoKSxcclxuICAgICAgICAgICAgJ2RldGFpbCc6IG5ldyBEZXRhaWwoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXHJcbiAgICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKClcclxuICAgIH1cclxuXHJcbiAgICBvblByZWxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcclxuICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXHJcblxyXG4gICAgICAgIGlmICggcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uuc2hvdygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDJ2VzdCBsYSBtZXJkZSBtb24gZ2FycyAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSkgICBcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXHJcblxyXG4gICAgICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ODZmMDhkNTE5YWU4YTFmMTAxOFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJIb21lIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlIiwib25SZXNpemUiLCJkZXN0cm95Iiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==