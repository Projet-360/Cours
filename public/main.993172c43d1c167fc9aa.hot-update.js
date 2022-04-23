/*! For license information please see main.993172c43d1c167fc9aa.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/lodash/each.js"),a=s.n(n),l=s("./node_modules/gsap/index.js"),i=s("./app/utils/text.js"),o=s("./app/classes/Component.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){a()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=l.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),l.default.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"0 0"}),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"ed8c53b48fb6753874c9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTMxNzJjNDNkMWMxNjdmYzlhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVJBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJMUNDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHaEJGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksU0FHaEJELEtBQUtSLFNBQVNVLFdBQWFGLEtBQUtSLFNBQVNDLE1BQU1LLGlCQUFrQixhQUVqRUUsS0FBS0csT0FBUyxFQUVkSCxLQUFLSSxlQUdUQSxlQUNJQyxHQUFBQSxDQUFLTCxLQUFLUixTQUFTSSxRQUFRTCxJQUN2QkEsRUFBUWUsT0FBU0MsR0FBS1AsS0FBS1EsY0FBY2pCLEdBQ3pDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLGVBSTNDRixjQUFjRyxHQUNWWCxLQUFLRyxRQUFVLEVBRWYsTUFBTVMsRUFBVVosS0FBS0csT0FBU0gsS0FBS1IsU0FBU0ksT0FBT08sT0FDbkRILEtBQUtSLFNBQVNHLFdBQVdrQixVQUFhLEdBQUVDLEtBQUtDLE1BQWlCLElBQVZILE1BRXBDLElBQVpBLEdBQ0FaLEtBQUtnQixXQUliQSxXQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZmxCLEtBQUttQixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQzVCQyxNQUFPLElBR1hyQixLQUFLbUIsV0FBV0csR0FBR3RCLEtBQUtSLFNBQVNVLFdBQVksQ0FDekNxQixVQUFXLEVBQ1hDLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHUDNCLEtBQUttQixXQUFXRyxHQUFHdEIsS0FBS1IsU0FBU0csV0FBWSxDQUN6QzRCLFVBQVcsRUFDWEMsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUNKLFNBRUhQLEVBQUFBLFFBQUFBLEdBQVFwQixLQUFLVCxRQUFTLENBQ2xCaUMsU0FBVSxJQUNWQyxLQUFNLFdBQ05HLE9BQVEsRUFDUkMsZ0JBQWlCLFFBR3JCN0IsS0FBS21CLFdBQVdXLE1BQU12QixJQUNsQlAsS0FBSytCLEtBQUssbUJBS3RCQyxVQUNJaEMsS0FBS1QsUUFBUTBDLFdBQVdDLFlBQVlsQyxLQUFLVCwwQkN6RmpENEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICcuLi91dGlscy90ZXh0J1xyXG5cclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcclxuICAgICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnLnByZWxvYWRlcl9fdGV4dCcsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyVGV4dDogJy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3BsaXQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxyXG4gICAgICAgICAgICBleHByZXNzaW9uOiAnPGJyPidcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzcGxpdCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgoJ3NwYW4gc3BhbicpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTG9hZGVyKCkge1xyXG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IF8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCArPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKCBwZXJjZW50ICogMTAwKX0lYFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxyXG4gICAgICAgICAgICAgICAgc3RhZ2dlcjogMC4xLFxyXG4gICAgICAgICAgICAgICAgeTogJzEwMCUnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IDAuMSxcclxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9LCAnLT0xLjQnKVxyXG5cclxuICAgICAgICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkOGM1M2I0OGZiNjc1Mzg3NGM5XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==