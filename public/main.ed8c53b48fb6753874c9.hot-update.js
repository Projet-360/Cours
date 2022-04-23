/*! For license information please see main.ed8c53b48fb6753874c9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s("./node_modules/lodash/each.js"),n=s.n(a),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js"),o=s("./app/classes/Component.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){n()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"0 0"}),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"44a80d6aae194335adae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZDhjNTNiNDhmYjY3NTM4NzRjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVJBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJMUNDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHaEJGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDRlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksU0FHaEJELEtBQUtSLFNBQVNVLFdBQWFGLEtBQUtSLFNBQVNDLE1BQU1LLGlCQUFrQixhQUVqRUUsS0FBS0csT0FBUyxFQUVkSCxLQUFLSSxlQUdUQSxlQUNJQyxHQUFBQSxDQUFLTCxLQUFLUixTQUFTSSxRQUFRTCxJQUN2QkEsRUFBUWUsT0FBU0MsR0FBS1AsS0FBS1EsY0FBY2pCLEdBQ3pDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLGVBSTNDRixjQUFjRyxHQUNWWCxLQUFLRyxRQUFVLEVBRWYsTUFBTVMsRUFBVVosS0FBS0csT0FBU0gsS0FBS1IsU0FBU0ksT0FBT08sT0FDbkRILEtBQUtSLFNBQVNHLFdBQVdrQixVQUFhLEdBQUVDLEtBQUtDLE1BQWlCLElBQVZILE1BRXBDLElBQVpBLEdBQ0FaLEtBQUtnQixXQUliQSxXQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZmxCLEtBQUttQixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQzVCQyxNQUFPLElBR1hyQixLQUFLbUIsV0FBV0csR0FBR3RCLEtBQUtSLFNBQVNVLFdBQVksQ0FDekNxQixVQUFXLEVBQ1hDLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHUDNCLEtBQUttQixXQUFXRyxHQUFHdEIsS0FBS1IsU0FBU0csV0FBWSxDQUN6QzRCLFVBQVcsRUFDWEMsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUNKLFNBRUgzQixLQUFLbUIsV0FBV0csR0FBR3RCLEtBQUtULFFBQVMsQ0FDN0JpQyxTQUFVLElBQ1ZDLEtBQU0sV0FDTkcsT0FBUSxFQUNSQyxnQkFBaUIsUUFHckI3QixLQUFLbUIsV0FBV1csTUFBTXZCLElBQ2xCUCxLQUFLK0IsS0FBSyxtQkFLdEJDLFVBQ0loQyxLQUFLVCxRQUFRMEMsV0FBV0MsWUFBWWxDLEtBQUtULDBCQ3pGakQ0QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJy4uL3V0aWxzL3RleHQnXHJcblxyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxyXG4gICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0JyxcclxuICAgICAgICAgICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzcGxpdCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNwbGl0KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcclxuICAgICAgICAgICAgZXhwcmVzc2lvbjogJzxicj4nXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCgnc3BhbiBzcGFuJykpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMb2FkZXIoKSB7XHJcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gXyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcclxuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoICs9IDFcclxuXHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQoIHBlcmNlbnQgKiAxMDApfSVgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXHJcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOiAwLjEsXHJcbiAgICAgICAgICAgICAgICB5OiAnMTAwJSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxyXG4gICAgICAgICAgICAgICAgc3RhZ2dlcjogMC4xLFxyXG4gICAgICAgICAgICAgICAgeTogJzEwMCUnXHJcbiAgICAgICAgICAgIH0sICctPTEuNCcpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcclxuICAgICAgICAgICAgICAgIHNjYWxlWTogMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKCBfID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29tcGxldGVkJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3kgKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcclxuICAgIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NGE4MGQ2YWFlMTk0MzM1YWRhZVwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BsaXQiLCJ0aGlzIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJkZWxheSIsInRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjYWxsIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=