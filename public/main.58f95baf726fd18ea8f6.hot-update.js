/*! For license information please see main.58f95baf726fd18ea8f6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/events/events.js"),l=s.n(n),i=s("./node_modules/lodash/each.js"),r=s.n(i);class o extends(l()){constructor({element:e,elements:t}){super({}),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners(),this.removeEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},r()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"d3bb43715c715d0ce8be"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OGY5NWJhZjcyNmZkMThlYThmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Nk5BR2UsTUFBTUEsVUFBa0JDLEtBQ25DQyxhQUFhLFFBQ1RDLEVBRFMsU0FFVEMsSUFFQUMsTUFBTSxJQUdOQyxLQUFLQyxTQUFXSixFQUNoQkcsS0FBS0UsaUJBQW1CLElBQ2pCSixHQUdQRSxLQUFLRyxTQUNMSCxLQUFLSSxvQkFDTEosS0FBS0ssdUJBR1RGLFNBQ0lILEtBQUtILFFBQVVTLFNBQVNDLGNBQWNQLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLEdBRWhCVSxHQUFBQSxDQUFLUixLQUFLRSxrQkFBa0IsQ0FBQ08sRUFBT0MsS0FDNUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDekZULEtBQUtGLFNBQVNZLEdBQU9ELEdBRXJCVCxLQUFLRixTQUFTWSxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJULEtBQUtGLFNBQVNZLEdBQUtPLE9BQ25CakIsS0FBS0YsU0FBU1ksR0FBTyxLQUNnQixJQUE5QlYsS0FBS0YsU0FBU1ksR0FBS08sU0FDMUJqQixLQUFLRixTQUFTWSxHQUFPSixTQUFTQyxjQUFjRSxRQU01REwscUJBR0FDLHlDQzNDSmEsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2NsYXNzZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcclxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGVsZW1lbnRzXHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50c1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fVxyXG5cclxuICAgICAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQzYmI0MzcxNWM3MTVkMGNlOGJlXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9