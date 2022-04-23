/*! For license information please see main.c920fc5347cfada1b8e2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s("./node_modules/lodash/each.js"),n=s.n(a),l=s("./node_modules/gsap/index.js"),o=s("./app/utils/text.js"),i=s("./app/classes/Component.js");class r extends i.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",images:document.querySelectorAll("img")}}),this.elements.titleSpans=(0,o.split)({element:this.elements.title,expression:"<br>"}),this.length=0,this.createLoader()}createLoader(){n()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=l.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100ù"}),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"3772a41ee501a6261cb9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOTIwZmM1MzQ3Y2ZhZGExYjhlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVJBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJMUNDLEtBQUtOLFNBQVNPLFlBQWFDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDN0JULFFBQVNPLEtBQUtOLFNBQVNDLE1BQ3ZCUSxXQUFZLFNBRWhCSCxLQUFLSSxPQUFTLEVBRWRKLEtBQUtLLGVBR1RBLGVBQ0lDLEdBQUFBLENBQUtOLEtBQUtOLFNBQVNHLFFBQVFKLElBQ3ZCQSxFQUFRYyxPQUFTQyxHQUFLUixLQUFLUyxjQUFjaEIsR0FDekNBLEVBQVFpQixJQUFNakIsRUFBUWtCLGFBQWEsZUFJM0NGLGNBQWNHLEdBQ1ZaLEtBQUtJLFFBQVUsRUFFZixNQUFNUyxFQUFVYixLQUFLSSxPQUFTSixLQUFLTixTQUFTRyxPQUFPTyxPQUNuREosS0FBS04sU0FBU0UsT0FBT2tCLFVBQWEsR0FBRUMsS0FBS0MsTUFBaUIsSUFBVkgsTUFFaEMsSUFBWkEsR0FDQWIsS0FBS2lCLFdBSWJBLFdBQ0ksT0FBTyxJQUFJQyxTQUFRQyxJQUNmbkIsS0FBS29CLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDNUJDLE1BQU8sSUFHWHRCLEtBQUtvQixXQUFXRyxHQUFHdkIsS0FBS04sU0FBU08sV0FBWSxDQUN6Q3VCLFVBQVcsRUFDWEMsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQU9QNUIsS0FBS29CLFdBQVdTLE1BQU1yQixXQU05QnNCLFVBQ0k5QixLQUFLUCxRQUFRc0MsV0FBV0MsWUFBWWhDLEtBQUtQLDBCQ3JFakR3QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJy4uL3V0aWxzL3RleHQnXHJcblxyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxyXG4gICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSBzcGxpdCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMb2FkZXIoKSB7XHJcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkID0gXyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcclxuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoICs9IDFcclxuXHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCggcGVyY2VudCAqIDEwMCl9JWBcclxuICAgICAgICBcclxuICAgICAgICBpZiAocGVyY2VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAyXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IDAuMSxcclxuICAgICAgICAgICAgICAgIHk6ICcxMDDDuSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgIC8vICAgICBhdXRvQWxwaGE6IDBcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKCBfID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM3NzJhNDFlZTUwMWE2MjYxY2I5XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoaXMiLCJ0aXRsZVNwYW5zIiwic3BsaXQiLCJleHByZXNzaW9uIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=