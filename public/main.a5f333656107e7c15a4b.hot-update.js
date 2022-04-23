/*! For license information please see main.a5f333656107e7c15a4b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s("./node_modules/lodash/each.js"),n=s.n(a),l=s("./node_modules/gsap/index.js"),i=s("./app/utils/text.js"),o=s("./app/classes/Component.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){n()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=l.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"df28cdb49aa76030ff0a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNWYzMzM2NTYxMDdlN2MxNWE0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVJBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJMUNDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHaEJGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksU0FHaEJELEtBQUtSLFNBQVNVLFdBQWFGLEtBQUtSLFNBQVNDLE1BQU1LLGlCQUFrQixhQUVqRUUsS0FBS0csT0FBUyxFQUVkSCxLQUFLSSxlQUdUQSxlQUNJQyxHQUFBQSxDQUFLTCxLQUFLUixTQUFTSSxRQUFRTCxJQUN2QkEsRUFBUWUsT0FBU0MsR0FBS1AsS0FBS1EsY0FBY2pCLEdBQ3pDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLGVBSTNDRixjQUFjRyxHQUNWWCxLQUFLRyxRQUFVLEVBRWYsTUFBTVMsRUFBVVosS0FBS0csT0FBU0gsS0FBS1IsU0FBU0ksT0FBT08sT0FDbkRILEtBQUtSLFNBQVNHLFdBQVdrQixVQUFhLEdBQUVDLEtBQUtDLE1BQWlCLElBQVZILE1BRXBDLElBQVpBLEdBQ0FaLEtBQUtnQixXQUliQSxXQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZmxCLEtBQUttQixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQzVCQyxNQUFPLElBR1hyQixLQUFLbUIsV0FBV0csR0FBR3RCLEtBQUtSLFNBQVNVLFdBQVksQ0FDekNxQixVQUFXLEVBQ1hDLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHUDNCLEtBQUttQixXQUFXRyxHQUFHdEIsS0FBS1IsU0FBU0csV0FBWSxDQUN6QzRCLFVBQVcsRUFDWEMsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUNKLFNBTUgzQixLQUFLbUIsV0FBV1MsTUFBTXJCLFdBTTlCc0IsVUFDSTdCLEtBQUtULFFBQVF1QyxXQUFXQyxZQUFZL0IsS0FBS1QsMEJDdEZqRHlDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dCdcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIG51bWJlclRleHQ6ICcucHJlbG9hZGVyX19udW1iZXJfX3RleHQnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNwbGl0KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcclxuICAgICAgICAgICAgZXhwcmVzc2lvbjogJzxicj4nXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3BsaXQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxyXG4gICAgICAgICAgICBleHByZXNzaW9uOiAnPGJyPidcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoKCdzcGFuIHNwYW4nKSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxvYWRlcigpIHtcclxuICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxyXG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMVxyXG5cclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCggcGVyY2VudCAqIDEwMCl9JWBcclxuICAgICAgICBcclxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAyXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IDAuMSxcclxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXHJcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOiAwLjEsXHJcbiAgICAgICAgICAgICAgICB5OiAnMTAwJSdcclxuICAgICAgICAgICAgfSwgJy09MS40JylcclxuXHJcbiAgICAgICAgICAgIC8vIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgIC8vICAgICBhdXRvQWxwaGE6IDBcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKCBfID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRmMjhjZGI0OWFhNzYwMzBmZjBhXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImNhbGwiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9