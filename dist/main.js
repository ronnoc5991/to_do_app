!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(e="",t="",n="none",r="none",o="none",c="none")=>({title:e,description:t,dueDate:n,notes:r,priority:o,project:c});var o=(e,t="",n="")=>{const r=document.createElement("div");r.className="toDoItem",r.id=e;const o=document.createElement("div");o.className="titleWrapper";const c=document.createElement("div");c.className="textDiv",c.innerHTML=t,o.appendChild(c);const a=document.createElement("div");a.className="descriptionWrapper";const i=document.createElement("div");i.className="textDiv",i.innerHTML=n,a.appendChild(i);const d=document.createElement("div");d.className="checkBoxWrapper";const l=document.createElement("div");l.className="textDiv",d.appendChild(l);const u=document.createElement("div");u.className="deleteWrapper";const s=document.createElement("div");return s.className="textDiv deleteIcon",u.appendChild(s),r.appendChild(o),r.appendChild(a),r.appendChild(d),r.appendChild(u),r};document.getElementById("newItemButton").addEventListener("click",(function(){var e=document.getElementById("itemForm"),t=function(e){return e.elements[0].value}(e),n=function(e){return e.elements[1].value}(e),i=o("index"+a,t,n);document.getElementById("lowerDisplay").appendChild(i);var d=r(t,n);c.push(d),e.reset(),++a}));var c=[],a=0}]);