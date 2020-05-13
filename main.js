!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);var a=(e="",t="",n="",a="no")=>({title:e,description:t,dueDate:n,done:a});var r=(e,t,n)=>{const r=[];return{title:e,description:t,date:n,toDos:r,createNewItem:(e,t="",n="",o)=>{var i=a(e,t,n,o);r.push(i)},destroyItem:e=>{r.splice(e,1)},toggleDoneStatus:e=>{"no"==r[e].done?r[e].done="yes":r[e].done="no"}}};function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e,t){o(2,arguments);var n=i(e),a=i(t),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function l(e,t){o(2,arguments);var n=i(e),a=i(t),r=n.getFullYear()-a.getFullYear(),s=n.getMonth()-a.getMonth();return 12*r+s}function c(e,t){o(2,arguments);var n=i(e),a=i(t),r=s(n,a),c=Math.abs(l(n,a));n.setMonth(n.getMonth()-r*c);var u=s(n,a)===-r,d=r*(c-u);return 0===d?0:d}function u(e,t){o(2,arguments);var n=i(e),a=i(t);return n.getTime()-a.getTime()}function d(e,t){o(2,arguments);var n=u(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var m={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var h={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function p(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function v(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=a.match(i);if(!s)return null;var l,c=s[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(u,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(u,(function(e){return e.test(c)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(c.length)}}}var y,b={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof m[e]?m[e]:1===t?m[e].one:m[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:h,formatRelative:function(e,t,n,a){return g[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:p({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:p({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:p({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:p({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:p({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(y.matchPattern);if(!r)return null;var o=r[0],i=n.match(y.parsePattern);if(!i)return null;var s=y.valueCallback?y.valueCallback(i[0]):i[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(o.length)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}function M(e){return e.getTime()%6e4}function D(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+M(t))%6e4:M(t))}function j(e,t,n){o(2,arguments);var a=n||{},r=a.locale||b;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=s(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var u,m,f=w(a);f.addSuffix=Boolean(a.addSuffix),f.comparison=l,l>0?(u=i(t),m=i(e)):(u=i(e),m=i(t));var h,g=d(m,u),p=(D(m)-D(u))/1e3,v=Math.round((g-p)/60);if(v<2)return a.includeSeconds?g<5?r.formatDistance("lessThanXSeconds",5,f):g<10?r.formatDistance("lessThanXSeconds",10,f):g<20?r.formatDistance("lessThanXSeconds",20,f):g<40?r.formatDistance("halfAMinute",null,f):g<60?r.formatDistance("lessThanXMinutes",1,f):r.formatDistance("xMinutes",1,f):0===v?r.formatDistance("lessThanXMinutes",1,f):r.formatDistance("xMinutes",v,f);if(v<45)return r.formatDistance("xMinutes",v,f);if(v<90)return r.formatDistance("aboutXHours",1,f);if(v<1440){var y=Math.round(v/60);return r.formatDistance("aboutXHours",y,f)}if(v<2520)return r.formatDistance("xDays",1,f);if(v<43200){var M=Math.round(v/1440);return r.formatDistance("xDays",M,f)}if(v<86400)return h=Math.round(v/43200),r.formatDistance("aboutXMonths",h,f);if((h=c(m,u))<12){var j=Math.round(v/43200);return r.formatDistance("xMonths",j,f)}var T=h%12,S=Math.floor(h/12);return T<3?r.formatDistance("aboutXYears",S,f):T<9?r.formatDistance("overXYears",S,f):r.formatDistance("almostXYears",S+1,f)}function T(e,t){o(2,arguments);var n=i(e),a=i(t),r=(n-a)/864e5;return r>0?Math.floor(r):Math.ceil(r)}var S=(e="none")=>{const t=document.getElementById("projectTimeDisplay");t.style.color="black",document.getElementById("projectName").innerHTML=`<h1>${e.title}<h1>`;const n=document.getElementById("projectViewerDescription");if(n.innerHTML="",""===e.description||(n.innerHTML+=`<h3>${e.description}<h3><br>`),""===e.date)t.innerHTML='<i class="far fa-hourglass fa-3x"></i>',t.style.color="var(--hourglass-blue)";else{n.innerHTML+=`<h3>Due in ${j(new Date,new Date(e.date))}</h3><br>`;var a=T(new Date(e.date),new Date);a<1?(t.innerHTML='<i class="fas fa-hourglass-end fa-3x"></i>',t.style.color="var(--hourglass-red)"):a<7?(t.innerHTML='<i class="fas fa-hourglass-half fa-3x"></i>',t.style.color="var(--hourglass-orange)"):(t.innerHTML='<i class="fas fa-hourglass-start fa-3x"></i>',t.style.color="var(--hourglass-green)")}t.classList.toggle("spin");const r=document.getElementById("injectProjectItemsHere");for(;r.hasChildNodes();)r.removeChild(r.firstChild);var o,i=e.toDos;for(o=0;o<i.length;++o){const e=document.createElement("div");e.className="item",e.dataset.index=""+o;const t=document.createElement("div");t.className="checkBox",e.appendChild(t);const n=document.createElement("i");n.className="fas fa-check",n.style.margin="auto",t.appendChild(n);const a=document.createElement("div");a.className="itemTitle",a.innerHTML=`<h4>${i[o].title}<h4>`,e.appendChild(a),"yes"==i[o].done&&(e.className+=" done",a.className+=" lineThrough",t.classList+=" fill");const l=document.createElement("div");if(l.className="collapsible",l.dataset.index=""+o,""==i[o].description&&""==i[o].dueDate);else{const t=document.createElement("div");t.className="moreInfo",t.innerHTML='<i class="fas fa-info-circle"></i>',t.dataset.index=""+o,e.appendChild(t)}if(""!=i[o].description&&(l.innerHTML+=`<h3>${i[o].description}</h3>`),""!=i[o].dueDate){var s=j(new Date,new Date(i[o].dueDate));l.innerHTML+=`<br><h3>${s}</h3>`}const c=document.createElement("div");c.className="deleteItemDiv",c.dataset.index=""+o,c.innerHTML='<i class="fas fa-trash-alt"></i>',e.appendChild(c),e.appendChild(l),r.appendChild(e)}};var N=e=>{const t=document.getElementById("projectsNavBar");for(;t.hasChildNodes();)t.removeChild(t.firstChild);var n;for(n=0;n<e.length;++n){const r=document.createElement("div");r.className="project",r.dataset.active="no",r.dataset.index=""+n;const o=document.createElement("div");if(o.className="projectTimeDisplay",null!=e[n].date&&""!=e[n].date){var a=T(new Date(e[n].date),new Date);a<1?(o.style.color="var(--hourglass-red)",o.innerHTML='<i class="fas fa-hourglass-end"></i>'):a<7?(o.style.color="var(--hourglass-orange)",o.innerHTML='<i class="fas fa-hourglass-half"></i>'):(o.style.color="var(--hourglass-green)",o.innerHTML='<i class="fas fa-hourglass-start"></i>')}else o.style.color="blue",o.innerHTML='<i class="far fa-hourglass"></i>';const i=document.createElement("div");i.className="projectName",i.innerHTML=`<h6>${e[n].title}<h6>`;const s=document.createElement("div");s.className="deleteProjectButton",s.dataset.index=""+n,s.innerHTML='<i class="fas fa-ban"></i>',r.appendChild(s),r.appendChild(o),r.appendChild(i),t.appendChild(r)}};const x=document.getElementById("projectsNavBar"),P=document.getElementById("injectProjectItemsHere");document.getElementById("projectForm").onsubmit=function(e){!function(e){const t=document.querySelector("#projectFormContainer").querySelectorAll(".form");e.preventDefault();var n=new FormData(t[0]),a=n.get("projectTitle"),r=n.get("projectDescription");if(""!=n.get("projectDueDate"))var o=n.get("projectDueDate");else o="";C(a,r,o),t[0].reset(),H()}(e)},document.getElementById("itemForm").onsubmit=function(e){!function(e){const t=document.querySelector(".wrapper").querySelectorAll(".form");e.preventDefault();var n=new FormData(t[0]),a=n.get("toDoTitle");if(""!==n.get("toDoDescription"))var r=n.get("toDoDescription");else r="";var o=n.get("toDoDate");(function(e,t,n,a){var r=W();L[r].createNewItem(e,t,n,a),E(),k()})(a,r,o,"no"),t[0].reset()}(e)},document.getElementById("toggleProjectForm").addEventListener("click",H),x.addEventListener("click",e=>{"project"===e.target.className?I(e.target.dataset.index):"deleteProjectButton"===e.target.className&&function(e){document.querySelectorAll(".project");I(e),L.splice(e,1),N(L),document.querySelectorAll(".project").length>0&&I(0);E(),k()}(e.target.dataset.index)}),P.addEventListener("click",e=>{var t=e.target.parentNode;if("deleteItemDiv"===e.target.className)t.classList.add("fall"),t.addEventListener("transitionend",(function(e){"color"==e.propertyName&&function(e){var t=W();L[t].destroyItem(e),E(),k()}(e.target.dataset.index)}));else if("moreInfo"===e.target.className){var n,a=e.target.dataset.index,r=document.querySelectorAll(".collapsible");for(n=0;n<r.length;++n)r[n].dataset.index==a&&r[n].classList.toggle("extended")}else if("itemTitle"===e.target.classList[0]||"checkBox"===e.target.classList[0]){var o=W();L[o].toggleDoneStatus(t.dataset.index),t.classList.toggle("done");t.dataset.index;t.firstChild.classList.toggle("fill"),t.childNodes[1].classList.toggle("lineThrough"),k()}});const L=[];function C(e,t,n){const a=r(e,t,n);L.push(a),N(L),I(L.length-1),k()}function E(){var e=W();if(0==document.querySelectorAll(".project").length){document.getElementById("projectName").innerHTML="<h1>Create a New Project<h1>",document.getElementById("projectViewerDescription").innerHTML="<h4>Create a new Project to start being more productive!<h4>";const e=document.getElementById("injectProjectItemsHere");for(;e.hasChildNodes();)e.removeChild(e.firstChild)}else S(L[e])}function I(e){const t=document.querySelectorAll(".project");var n;for(n=0;n<t.length;++n)t[n].dataset.active="no",t[n].className="project";t[e].dataset.active="yes",t[e].className+=" active",t[e].childNodes[1].classList.toggle("spin"),E()}function W(){var e,t,n=document.querySelectorAll(".project");for(e=0;e<n.length;++e)"yes"==n[e].dataset.active&&(t=n[e].dataset.index);return t}function H(){const e=document.getElementById("formSpace");1!=e.style.zIndex?e.style.zIndex=1:e.style.zIndex=-1}function k(){localStorage.setItem("projectsLibrary",JSON.stringify(L))}!function(){if(null===localStorage.getItem("projectsLibrary"))C("Today","This is a default ToDo List for your day.  Feel free to create a new Project by giving it a title, description and Due Date.",function(e){o(1,arguments);var t=i(e);return t.setHours(23,59,59,999),t}(new Date));else if(0==localStorage.getItem("projectsLibrary").length)console.log("Hello");else{var e,t=JSON.parse(localStorage.getItem("projectsLibrary")),n=t.length;for(e=0;e<n;++e)if(C(t[e].title,t[e].description,t[e].date),t[e].toDos!=[]){var a,r=t[e].toDos,s=r.length;for(a=0;a<s;++a)L[e].createNewItem(r[a].title,r[a].description,r[a].dueDate,r[a].done)}}}(),k(),L.length>0&&(N(L),I(0)),E()}]);