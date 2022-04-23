/*! For license information please see main.f00718743881d0665e24.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/lodash/each.js"),a=s.n(n),o=s("./app/classes/Component.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){a()(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){this.emit("completed")}}}},(function(e){e.h=()=>"e826d931182a97296103"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMDA3MTg3NDM4ODFkMDY2NWUyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a05BR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFHMUNDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsZUFHVEEsZUFDSUMsR0FBQUEsQ0FBS0gsS0FBS04sU0FBU0csUUFBUUosSUFDdkIsTUFBTVcsRUFBUSxJQUFJQyxNQUVsQkQsRUFBTUUsT0FBU0MsR0FBS1AsS0FBS1EsY0FBY0osR0FDdkNBLEVBQU1LLElBQU1oQixFQUFRaUIsYUFBYSxlQUl6Q0YsY0FBY0osR0FDVkosS0FBS0MsUUFBVSxFQUVmLE1BQU1VLEVBQVVYLEtBQUtDLE9BQVNELEtBQUtOLFNBQVNHLE9BQU9JLE9BQ25ERCxLQUFLTixTQUFTRSxPQUFPZ0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFpQixJQUFWSCxNQUVoQyxJQUFaQSxHQUNBWCxLQUFLZSxXQUliQSxXQUNJZixLQUFLZ0IsS0FBSyw4QkN2Q2xCQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxyXG4gICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTG9hZGVyKCkge1xyXG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXHJcblxyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSlcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCArPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoIHBlcmNlbnQgKiAxMDApfSVgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY29tcGxldGVkJylcclxuICAgIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlODI2ZDkzMTE4MmE5NzI5NjEwM1wiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aGlzIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsImVtaXQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=