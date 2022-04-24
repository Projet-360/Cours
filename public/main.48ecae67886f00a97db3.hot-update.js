/*! For license information please see main.48ecae67886f00a97db3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var l=s("./node_modules/gsap/index.js"),i=s("./node_modules/prefix/index.js"),n=s.n(i),o=s("./node_modules/lodash/each.js"),r=s.n(o);class h{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s},this.scroll={current:0,target:0,last:0,limit:1e3},this.transformPrefix=n()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},r()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=l.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;console.log(this.scroll.target),this.scroll.target+=t,console.log(this.scroll.target)}onResize(){this.scroll.limit=this.elements.wrapper.clientHeight}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"f43d8e89553353fd5068"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40OGVjYWU2Nzg4NmYwMGE5N2RiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MlBBSWUsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEdBR1BDLEtBQUtHLE9BQVMsQ0FDVkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQUssRUFDTEMsTUFBTyxLQUdYUCxLQUFLUSxnQkFBa0JDLEdBQUFBLENBQU8sYUFFOUJULEtBQUtVLGtCQUFvQlYsS0FBS1csYUFBYUMsS0FBS1osTUFHcERhLFNBQ0liLEtBQUtGLFFBQVVnQixTQUFTQyxjQUFjZixLQUFLQyxVQUMzQ0QsS0FBS0QsU0FBVyxHQUVoQkMsS0FBS0csT0FBUyxDQUNWQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBSyxFQUNMQyxNQUFPLEdBR1hTLEdBQUFBLENBQUtoQixLQUFLRSxrQkFBa0IsQ0FBQ2UsRUFBT0MsS0FDNUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDekZqQixLQUFLRCxTQUFTbUIsR0FBT0QsR0FFckJqQixLQUFLRCxTQUFTbUIsR0FBT0osU0FBU1UsaUJBQWlCUCxHQUViLElBQTlCakIsS0FBS0QsU0FBU21CLEdBQUtPLE9BQ25CekIsS0FBS0QsU0FBU21CLEdBQU8sS0FDZ0IsSUFBOUJsQixLQUFLRCxTQUFTbUIsR0FBS08sU0FDMUJ6QixLQUFLRCxTQUFTbUIsR0FBT0osU0FBU0MsY0FBY0UsUUFNNURTLE9BQ0ksT0FBTyxJQUFJQyxTQUFRQyxJQUNmNUIsS0FBSzZCLFlBQWNDLEVBQUFBLFFBQUFBLFdBRW5COUIsS0FBSzZCLFlBQVlFLE9BQU8vQixLQUFLRixRQUFTLENBQ2xDa0MsVUFBVyxHQUVmLENBQ0lBLFVBQVcsRUFDWEMsV0FBWUwsSUFHaEI1QixLQUFLNkIsWUFBWUssTUFBTUMsSUFDbkJuQyxLQUFLb0Msb0JBQ0xSLFVBS1pTLE9BQ0ksT0FBTyxJQUFJVixTQUFRQyxJQUNmNUIsS0FBS3NDLHVCQUVMdEMsS0FBS3VDLGFBQWVULEVBQUFBLFFBQUFBLFdBRXBCOUIsS0FBS3VDLGFBQWFDLEdBQUd4QyxLQUFLRixRQUFTLENBQy9Ca0MsVUFBVyxFQUNYQyxXQUFZTCxPQUt4QmpCLGFBQWE4QixHQUNULE1BQU0sT0FBRUMsR0FBV0QsRUFDbkJFLFFBQVFDLElBQUk1QyxLQUFLRyxPQUFPRSxRQUN4QkwsS0FBS0csT0FBT0UsUUFBVXFDLEVBQ3RCQyxRQUFRQyxJQUFJNUMsS0FBS0csT0FBT0UsUUFHNUJ3QyxXQUNJN0MsS0FBS0csT0FBT0ksTUFBUVAsS0FBS0QsU0FBUytDLFFBQVFDLGFBRzlDQyxTQUNJaEQsS0FBS0csT0FBT0UsT0FBU3lCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQWlCLEVBQUc5QixLQUFLRyxPQUFPSSxNQUFPUCxLQUFLRyxPQUFPRSxRQUN4RUwsS0FBS0csT0FBT0MsUUFBVTBCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCOUIsS0FBS0csT0FBT0MsUUFBU0osS0FBS0csT0FBT0UsT0FBUSxJQUVsRkwsS0FBS0QsU0FBUytDLFVBQ2Q5QyxLQUFLRCxTQUFTK0MsUUFBUUcsTUFBTWpELEtBQUtRLGlCQUFvQixlQUFjUixLQUFLRyxPQUFPQyxjQUl2RmdDLG9CQUNJakIsT0FBTytCLGlCQUFpQixhQUFjbEQsS0FBS1UsbUJBRy9DNEIsdUJBQ0luQixPQUFPZ0Msb0JBQW9CLGFBQWNuRCxLQUFLVSxvQ0MvR3REMEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxhc3Q6MCxcclxuICAgICAgICAgICAgbGltaXQ6IDEwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxhc3Q6MCxcclxuICAgICAgICAgICAgbGltaXQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCggXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcclxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcclxuICAgIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY0M2Q4ZTg5NTUzMzUzZmQ1MDY4XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImZyb21UbyIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJldmVudCIsImRlbHRhWSIsImNvbnNvbGUiLCJsb2ciLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9