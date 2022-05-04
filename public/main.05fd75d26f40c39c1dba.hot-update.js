/*! For license information please see main.05fd75d26f40c39c1dba.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/gsap/index.js"),n=s("./node_modules/normalize-wheel/index.js"),l=s.n(n),o=s("./node_modules/prefix/index.js"),r=s.n(o),a=s("./node_modules/lodash/each.js"),h=s.n(a),m=s("./node_modules/lodash/map.js"),c=s.n(m),d=s("./app/animations/Title.js");class u{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s,animationsTitles:'[data-animation="title"]'},this.transformPrefix=r()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},h()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimation()}createAnimation(){this.animationsTitles=c()(this.elements.animationsTitles,(e=>new d.default({element:e})))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=l()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),h()(this.animationsTitles,(e=>e.onResize()))}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"903b4ce2c07aa3209649"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNWZkNzVkMjZmNDBjMzljMWRiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVlBUWUsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEVBQ0hJLGlCQUFrQiw0QkFHdEJILEtBQUtJLGdCQUFrQkMsR0FBQUEsQ0FBTyxhQUM5QkwsS0FBS00sa0JBQW9CTixLQUFLTyxhQUFhQyxLQUFLUixNQUdwRFMsU0FDSVQsS0FBS0YsUUFBVVksU0FBU0MsY0FBY1gsS0FBS0MsVUFDM0NELEtBQUtELFNBQVcsR0FFaEJDLEtBQUtZLE9BQVMsQ0FDVkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQUssRUFDTEMsTUFBTyxHQUdYQyxHQUFBQSxDQUFLakIsS0FBS0Usa0JBQWtCLENBQUNnQixFQUFPQyxLQUM1QkQsYUFBaUJFLE9BQU9DLGFBQWVILGFBQWlCRSxPQUFPRSxVQUFZQyxNQUFNQyxRQUFRTixHQUN6RmxCLEtBQUtELFNBQVNvQixHQUFPRCxHQUVyQmxCLEtBQUtELFNBQVNvQixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJsQixLQUFLRCxTQUFTb0IsR0FBS08sT0FDbkIxQixLQUFLRCxTQUFTb0IsR0FBTyxLQUNnQixJQUE5Qm5CLEtBQUtELFNBQVNvQixHQUFLTyxTQUMxQjFCLEtBQUtELFNBQVNvQixHQUFPVCxTQUFTQyxjQUFjTyxRQUt4RGxCLEtBQUsyQixrQkFHVEEsa0JBQ0kzQixLQUFLRyxpQkFBbUJ5QixHQUFBQSxDQUFJNUIsS0FBS0QsU0FBU0ksa0JBQWtCTCxHQUNqRCxJQUFJK0IsRUFBQUEsUUFBTSxDQUNiL0IsUUFBQUEsTUFLWmdDLE9BQ0ksT0FBTyxJQUFJQyxTQUFRQyxJQUNmaEMsS0FBS2lDLFlBQWNDLEVBQUFBLFFBQUFBLFdBRW5CbEMsS0FBS2lDLFlBQVlFLE9BQU9uQyxLQUFLRixRQUFTLENBQ2xDc0MsVUFBVyxHQUVmLENBQ0lBLFVBQVcsRUFDWEMsV0FBWUwsSUFHaEJoQyxLQUFLaUMsWUFBWUssTUFBTUMsSUFDbkJ2QyxLQUFLd0Msb0JBQ0xSLFVBS1pTLE9BQ0ksT0FBTyxJQUFJVixTQUFRQyxJQUNmaEMsS0FBSzBDLHVCQUVMMUMsS0FBSzJDLGFBQWVULEVBQUFBLFFBQUFBLFdBRXBCbEMsS0FBSzJDLGFBQWFDLEdBQUc1QyxLQUFLRixRQUFTLENBQy9Cc0MsVUFBVyxFQUNYQyxXQUFZTCxPQUt4QnpCLGFBQWFzQyxHQUNULE1BQU0sT0FBRUMsR0FBV0MsR0FBQUEsQ0FBZUYsR0FDbEM3QyxLQUFLWSxPQUFPRSxRQUFVZ0MsRUFHMUJFLFdBQ1FoRCxLQUFLRCxTQUFTa0QsVUFDZGpELEtBQUtZLE9BQU9JLE1BQVFoQixLQUFLRCxTQUFTa0QsUUFBUUMsYUFBZTlCLE9BQU8rQixhQUdwRWxDLEdBQUFBLENBQUtqQixLQUFLRyxrQkFBa0JpRCxHQUFhQSxFQUFVSixhQUd2REssU0FDSXJELEtBQUtZLE9BQU9FLE9BQVNvQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHbEMsS0FBS1ksT0FBT0ksTUFBT2hCLEtBQUtZLE9BQU9FLFFBRXhFZCxLQUFLWSxPQUFPQyxRQUFVcUIsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJsQyxLQUFLWSxPQUFPQyxRQUFTYixLQUFLWSxPQUFPRSxPQUFRLElBRWxGZCxLQUFLWSxPQUFPQyxRQUFVLE1BQ3RCYixLQUFLWSxPQUFPQyxRQUFVLEdBR3RCYixLQUFLRCxTQUFTa0QsVUFDZGpELEtBQUtELFNBQVNrRCxRQUFRSyxNQUFNdEQsS0FBS0ksaUJBQW9CLGVBQWNKLEtBQUtZLE9BQU9DLGNBSXZGMkIsb0JBQ0lwQixPQUFPbUMsaUJBQWlCLGFBQWN2RCxLQUFLTSxtQkFHL0NvQyx1QkFDSXRCLE9BQU9vQyxvQkFBb0IsYUFBY3hELEtBQUtNLG9DQzdIdERtRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xyXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcclxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXHJcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9hbmltYXRpb25zL1RpdGxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudHMsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxyXG4gICAgICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxhc3Q6MCxcclxuICAgICAgICAgICAgbGltaXQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRpdGxlKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3cgKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKCBfID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoaWRlICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWFjaCh0aGlzLmFuaW1hdGlvbnNUaXRsZXMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcclxuICAgIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkwM2I0Y2UyYzA3YWEzMjA5NjQ5XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb24iLCJtYXAiLCJUaXRsZSIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImZyb21UbyIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9