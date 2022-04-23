/*! For license information please see main.298c09ccc763d2fec71f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s("./node_modules/lodash/each.js"),n=s.n(a),l=s("./node_modules/gsap/index.js"),i=s("./app/utils/text.js"),o=s("./app/classes/Component.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",images:document.querySelectorAll("img")}}),this.elements.titleSpans=(0,i.split)({element:this.elements.title,expression:"<br>"}),this.length=0,this.createLoader()}createLoader(){n()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=l.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,stagger:.1,y:-10}),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"902d99a04fcaae60ccdf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOThjMDljY2M3NjNkMmZlYzcxZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVJBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJMUNDLEtBQUtOLFNBQVNPLFlBQWFDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDN0JULFFBQVNPLEtBQUtOLFNBQVNDLE1BQ3ZCUSxXQUFZLFNBRWhCSCxLQUFLSSxPQUFTLEVBRWRKLEtBQUtLLGVBR1RBLGVBQ0lDLEdBQUFBLENBQUtOLEtBQUtOLFNBQVNHLFFBQVFKLElBQ3ZCQSxFQUFRYyxPQUFTQyxHQUFLUixLQUFLUyxjQUFjaEIsR0FDekNBLEVBQVFpQixJQUFNakIsRUFBUWtCLGFBQWEsZUFJM0NGLGNBQWNHLEdBQ1ZaLEtBQUtJLFFBQVUsRUFFZixNQUFNUyxFQUFVYixLQUFLSSxPQUFTSixLQUFLTixTQUFTRyxPQUFPTyxPQUNuREosS0FBS04sU0FBU0UsT0FBT2tCLFVBQWEsR0FBRUMsS0FBS0MsTUFBaUIsSUFBVkgsTUFFaEMsSUFBWkEsR0FDQWIsS0FBS2lCLFdBSWJBLFdBQ0ksT0FBTyxJQUFJQyxTQUFRQyxJQUNmbkIsS0FBS29CLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDNUJDLE1BQU8sSUFHWHRCLEtBQUtvQixXQUFXRyxHQUFHdkIsS0FBS04sU0FBU08sV0FBWSxDQUN6Q3VCLFVBQVcsRUFDWEMsUUFBUyxHQUNUQyxHQUFJLEtBT1IxQixLQUFLb0IsV0FBV08sTUFBTW5CLFdBTTlCb0IsVUFDSTVCLEtBQUtQLFFBQVFvQyxXQUFXQyxZQUFZOUIsS0FBS1AsMEJDbkVqRHNDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dCdcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHNwbGl0KHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcclxuICAgICAgICAgICAgZXhwcmVzc2lvbjogJzxicj4nXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxvYWRlcigpIHtcclxuICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxyXG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMVxyXG5cclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKCBwZXJjZW50ICogMTAwKX0lYFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwZXJjZW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIHN0YWdnZXI6IDAuMSxcclxuICAgICAgICAgICAgICAgIHk6IC0xMFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgLy8gICAgIGF1dG9BbHBoYTogMFxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoIF8gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTAyZDk5YTA0ZmNhYWU2MGNjZGZcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpcyIsInRpdGxlU3BhbnMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJkZWxheSIsInRvIiwiYXV0b0FscGhhIiwic3RhZ2dlciIsInkiLCJjYWxsIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==