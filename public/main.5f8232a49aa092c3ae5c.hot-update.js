/*! For license information please see main.5f8232a49aa092c3ae5c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),n=s.n(l),o=s("./node_modules/lodash/each.js"),r=s.n(o);class h{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s},this.transformPrefix=n()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},r()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;console.log(this.scroll.target),this.scroll.target+=t,console.log(this.scroll.target)}onResize(){this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.target<.01&&(this.scroll.target=0),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"4ad64c1977ab0b068373"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZjgyMzJhNDlhYTA5MmMzYWU1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MlBBSWUsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEdBR1BDLEtBQUtHLGdCQUFrQkMsR0FBQUEsQ0FBTyxhQUU5QkosS0FBS0ssa0JBQW9CTCxLQUFLTSxhQUFhQyxLQUFLUCxNQUdwRFEsU0FDSVIsS0FBS0YsUUFBVVcsU0FBU0MsY0FBY1YsS0FBS0MsVUFDM0NELEtBQUtELFNBQVcsR0FFaEJDLEtBQUtXLE9BQVMsQ0FDVkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQUssRUFDTEMsTUFBTyxHQUdYQyxHQUFBQSxDQUFLaEIsS0FBS0Usa0JBQWtCLENBQUNlLEVBQU9DLEtBQzVCRCxhQUFpQkUsT0FBT0MsYUFBZUgsYUFBaUJFLE9BQU9FLFVBQVlDLE1BQU1DLFFBQVFOLEdBQ3pGakIsS0FBS0QsU0FBU21CLEdBQU9ELEdBRXJCakIsS0FBS0QsU0FBU21CLEdBQU9ULFNBQVNlLGlCQUFpQlAsR0FFYixJQUE5QmpCLEtBQUtELFNBQVNtQixHQUFLTyxPQUNuQnpCLEtBQUtELFNBQVNtQixHQUFPLEtBQ2dCLElBQTlCbEIsS0FBS0QsU0FBU21CLEdBQUtPLFNBQzFCekIsS0FBS0QsU0FBU21CLEdBQU9ULFNBQVNDLGNBQWNPLFFBTTVEUyxPQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZjVCLEtBQUs2QixZQUFjQyxFQUFBQSxRQUFBQSxXQUVuQjlCLEtBQUs2QixZQUFZRSxPQUFPL0IsS0FBS0YsUUFBUyxDQUNsQ2tDLFVBQVcsR0FFZixDQUNJQSxVQUFXLEVBQ1hDLFdBQVlMLElBR2hCNUIsS0FBSzZCLFlBQVlLLE1BQU1DLElBQ25CbkMsS0FBS29DLG9CQUNMUixVQUtaUyxPQUNJLE9BQU8sSUFBSVYsU0FBUUMsSUFDZjVCLEtBQUtzQyx1QkFFTHRDLEtBQUt1QyxhQUFlVCxFQUFBQSxRQUFBQSxXQUVwQjlCLEtBQUt1QyxhQUFhQyxHQUFHeEMsS0FBS0YsUUFBUyxDQUMvQmtDLFVBQVcsRUFDWEMsV0FBWUwsT0FLeEJ0QixhQUFhbUMsR0FDVCxNQUFNLE9BQUVDLEdBQVdELEVBQ25CRSxRQUFRQyxJQUFJNUMsS0FBS1csT0FBT0UsUUFDeEJiLEtBQUtXLE9BQU9FLFFBQVU2QixFQUN0QkMsUUFBUUMsSUFBSTVDLEtBQUtXLE9BQU9FLFFBRzVCZ0MsV0FDSTdDLEtBQUtXLE9BQU9JLE1BQVFmLEtBQUtELFNBQVMrQyxRQUFRQyxhQUFlNUIsT0FBTzZCLFlBR3BFQyxTQUNJakQsS0FBS1csT0FBT0UsT0FBU2lCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQWlCLEVBQUc5QixLQUFLVyxPQUFPSSxNQUFPZixLQUFLVyxPQUFPRSxRQUVwRWIsS0FBS1csT0FBT0UsT0FBUyxNQUNyQmIsS0FBS1csT0FBT0UsT0FBUyxHQUd6QmIsS0FBS1csT0FBT0MsUUFBVWtCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCOUIsS0FBS1csT0FBT0MsUUFBU1osS0FBS1csT0FBT0UsT0FBUSxJQUVsRmIsS0FBS0QsU0FBUytDLFVBQ2Q5QyxLQUFLRCxTQUFTK0MsUUFBUUksTUFBTWxELEtBQUtHLGlCQUFvQixlQUFjSCxLQUFLVyxPQUFPQyxjQUl2RndCLG9CQUNJakIsT0FBT2dDLGlCQUFpQixhQUFjbkQsS0FBS0ssbUJBRy9DaUMsdUJBQ0luQixPQUFPaUMsb0JBQW9CLGFBQWNwRCxLQUFLSyxvQ0M3R3REZ0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcclxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgICAgICAgIGxhc3Q6MCxcclxuICAgICAgICAgICAgbGltaXQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCggXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLnRhcmdldCA8IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YWQ2NGMxOTc3YWIwYjA2ODM3M1wiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwiZXZlbnQiLCJkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9