/*! For license information please see main.8c7011281502c0c090b3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateboilerplate("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var l=s("./node_modules/lodash/each.js"),n=s.n(l);class i{constructor({id:e,element:t,elements:s}){this.id=e,this.selector=t,this.selectorChildren={...s}}create(){this.element=document.querySelector(this.selector),this.elements={},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.element[t].length&&(this.elements[t]=document.querySelector(e)))})),console.log("create",this.id)}}}},(function(e){e.h=()=>"398b11f7fb2b99886c53"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YzcwMTEyODE1MDJjMGMwOTBiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d0tBRWUsTUFBTUEsRUFDakJDLGFBQWEsR0FDVEMsRUFEUyxRQUVUQyxFQUZTLFNBR1RDLElBRUFDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFDakJILEdBSVhJLFNBQ0lILEtBQUtGLFFBQVVNLFNBQVNDLGNBQWNMLEtBQUtDLFVBQzNDRCxLQUFLRCxTQUFXLEdBRWhCTyxHQUFBQSxDQUFLTixLQUFLRSxrQkFBa0IsQ0FBQ0ssRUFBT0MsS0FDNUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDekZQLEtBQUtELFNBQVNTLEdBQU9ELEdBRXJCUCxLQUFLRCxTQUFTUyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJQLEtBQUtELFNBQVNTLEdBQUtPLE9BQ25CZixLQUFLRCxTQUFTUyxHQUFPLEtBQ2UsSUFBN0JSLEtBQUtGLFFBQVFVLEdBQUtPLFNBQ3pCZixLQUFLRCxTQUFTUyxHQUFPSixTQUFTQyxjQUFjRSxRQVF4RFMsUUFBUUMsSUFBSSxTQUFVakIsS0FBS0gscUJDcENuQ3FCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgLi4uZWxlbWVudHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRba2V5XS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSwgZW50cnkpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVcIiwgdGhpcy5pZCk7XHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOThiMTFmN2ZiMmI5OTg4NmM1M1wiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=