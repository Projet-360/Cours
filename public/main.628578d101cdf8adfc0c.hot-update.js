/*! For license information please see main.628578d101cdf8adfc0c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var l=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/each.js"),o=s.n(n);class i{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s}}create(){this.element=document.querySelector(this.selector),this.elements={},o()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e})}))}hide(){return new Promise((e=>{l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}}}},(function(e){e.h=()=>"1a472918ee3fe121c32b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42Mjg1NzhkMTAxY2RmOGFkZmMwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NE1BR2UsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEdBSVhJLFNBQ0lILEtBQUtGLFFBQVVNLFNBQVNDLGNBQWNMLEtBQUtDLFVBQzNDRCxLQUFLRCxTQUFXLEdBRWhCTyxHQUFBQSxDQUFLTixLQUFLRSxrQkFBa0IsQ0FBQ0ssRUFBT0MsS0FDNUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDekZQLEtBQUtELFNBQVNTLEdBQU9ELEdBRXJCUCxLQUFLRCxTQUFTUyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJQLEtBQUtELFNBQVNTLEdBQUtPLE9BQ25CZixLQUFLRCxTQUFTUyxHQUFPLEtBQ2dCLElBQTlCUixLQUFLRCxTQUFTUyxHQUFLTyxTQUMxQmYsS0FBS0QsU0FBU1MsR0FBT0osU0FBU0MsY0FBY0UsUUFNNURTLE9BQ0ksT0FBTyxJQUFJQyxTQUFRQyxJQUNmQyxFQUFBQSxRQUFBQSxPQUFZbkIsS0FBS0YsUUFBUyxDQUN0QnNCLFVBQVcsR0FFZixDQUNJQSxVQUFXLEVBQ1hDLFdBQVlILE9BS3hCSSxPQUNJLE9BQU8sSUFBSUwsU0FBUUMsSUFDZkMsRUFBQUEsUUFBQUEsR0FBUW5CLEtBQUtGLFFBQVMsQ0FDbEJzQixVQUFXLEVBQ1hDLFdBQVlILHdCQ25ENUJLLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIEdTQVAuZnJvbVRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUgKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWE0NzI5MThlZTNmZTEyMWMzMmJcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJHU0FQIiwiYXV0b0FscGhhIiwib25Db21wbGV0ZSIsImhpZGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=