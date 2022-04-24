/*! For license information please see main.116f49ad8597f1012289.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),i=s("./node_modules/prefix/index.js"),l=s.n(i),o=s("./node_modules/lodash/each.js"),r=s.n(o);class h{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s},this.transformPrefix=l()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0},r()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=n.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=n.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}update(){console.log(this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.target,this.scroll.current,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"eb29991b468e8f0fffe6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMTZmNDlhZDg1OTdmMTAxMjI4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MlBBSWUsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEdBR1BDLEtBQUtHLGdCQUFrQkMsR0FBQUEsQ0FBTyxhQUU5QkosS0FBS0ssa0JBQW9CTCxLQUFLTSxhQUFhQyxLQUFLUCxNQUdwRFEsU0FDSVIsS0FBS0YsUUFBVVcsU0FBU0MsY0FBY1YsS0FBS0MsVUFDM0NELEtBQUtELFNBQVcsR0FFaEJDLEtBQUtXLE9BQVMsQ0FDVkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQUssR0FHVEMsR0FBQUEsQ0FBS2YsS0FBS0Usa0JBQWtCLENBQUNjLEVBQU9DLEtBQzVCRCxhQUFpQkUsT0FBT0MsYUFBZUgsYUFBaUJFLE9BQU9FLFVBQVlDLE1BQU1DLFFBQVFOLEdBQ3pGaEIsS0FBS0QsU0FBU2tCLEdBQU9ELEdBRXJCaEIsS0FBS0QsU0FBU2tCLEdBQU9SLFNBQVNjLGlCQUFpQlAsR0FFYixJQUE5QmhCLEtBQUtELFNBQVNrQixHQUFLTyxPQUNuQnhCLEtBQUtELFNBQVNrQixHQUFPLEtBQ2dCLElBQTlCakIsS0FBS0QsU0FBU2tCLEdBQUtPLFNBQzFCeEIsS0FBS0QsU0FBU2tCLEdBQU9SLFNBQVNDLGNBQWNNLFFBTTVEUyxPQUNJLE9BQU8sSUFBSUMsU0FBUUMsSUFDZjNCLEtBQUs0QixZQUFjQyxFQUFBQSxRQUFBQSxXQUVuQjdCLEtBQUs0QixZQUFZRSxPQUFPOUIsS0FBS0YsUUFBUyxDQUNsQ2lDLFVBQVcsR0FFZixDQUNJQSxVQUFXLEVBQ1hDLFdBQVlMLElBR2hCM0IsS0FBSzRCLFlBQVlLLE1BQU1DLElBQ25CbEMsS0FBS21DLG9CQUNMUixVQUtaUyxPQUNJLE9BQU8sSUFBSVYsU0FBUUMsSUFDZjNCLEtBQUtxQyx1QkFFTHJDLEtBQUtzQyxhQUFlVCxFQUFBQSxRQUFBQSxXQUVwQjdCLEtBQUtzQyxhQUFhQyxHQUFHdkMsS0FBS0YsUUFBUyxDQUMvQmlDLFVBQVcsRUFDWEMsV0FBWUwsT0FLeEJyQixhQUFha0MsR0FDVCxNQUFNLE9BQUVDLEdBQVdELEVBQ25CeEMsS0FBS1csT0FBT0UsUUFBVTRCLEVBRzFCQyxTQUNJQyxRQUFRQyxJQUFJNUMsS0FBS1csT0FBT0UsUUFDeEJiLEtBQUtXLE9BQU9DLFFBQVVpQixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QjdCLEtBQUtXLE9BQU9FLE9BQVFiLEtBQUtXLE9BQU9DLFFBQVMsSUFFbEZaLEtBQUtELFNBQVM4QyxVQUNkN0MsS0FBS0QsU0FBUzhDLFFBQVFDLE1BQU05QyxLQUFLRyxpQkFBb0IsZUFBY0gsS0FBS1csT0FBT0MsY0FJdkZ1QixvQkFDSWpCLE9BQU82QixpQkFBaUIsYUFBYy9DLEtBQUtLLG1CQUcvQ2dDLHVCQUNJbkIsT0FBTzhCLG9CQUFvQixhQUFjaEQsS0FBS0ssb0NDakd0RDRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xyXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIGVsZW1lbnRzXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XHJcbiAgICAgICAgICAgIC4uLmVsZW1lbnRzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fVxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgICAgICAgY3VycmVudDogMCxcclxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICAgICAgICBsYXN0OjBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCggXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkZWx0YVlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0KVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuY3VycmVudCwgMC4xKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWIyOTk5MWI0NjhlOGYwZmZmZTZcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImZyb21UbyIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJldmVudCIsImRlbHRhWSIsInVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwcGVyIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==