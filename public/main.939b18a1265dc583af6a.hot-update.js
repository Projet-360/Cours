/*! For license information please see main.939b18a1265dc583af6a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s("./node_modules/lodash/each.js"),o=s.n(a),l=s("./app/classes/Component.js");class n extends l.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){o()(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1,console.log(this.elements.images.length/this.length)}}}},(function(e){e.h=()=>"e05e47ea5b02299bfd60"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MzliMThhMTI2NWRjNTgzYWY2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a05BR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ25DQyxjQUNJQyxNQUFNLENBQ0ZDLFFBQVMsYUFDVEMsU0FBVSxDQUNOQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFHMUNDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsZUFHVEEsZUFDSUMsR0FBQUEsQ0FBS0gsS0FBS04sU0FBU0csUUFBUUosSUFDdkIsTUFBTVcsRUFBUSxJQUFJQyxNQUVsQkQsRUFBTUUsT0FBU0MsR0FBS1AsS0FBS1EsY0FBY0osR0FDdkNBLEVBQU1LLElBQU1oQixFQUFRaUIsYUFBYSxlQUl6Q0YsY0FBY0osR0FDVkosS0FBS0MsUUFBVSxFQUNmVSxRQUFRQyxJQUFJWixLQUFLTixTQUFTRyxPQUFPSSxPQUFTRCxLQUFLQyx5QkM3QnZEWSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxyXG4gICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTG9hZGVyKCkge1xyXG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXHJcblxyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSlcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCArPSAxXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5sZW5ndGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwNWU0N2VhNWIwMjI5OWJmZDYwXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoaXMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==