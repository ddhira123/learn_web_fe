!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=8)}([function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),c=new E(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=x(c,e);if(a){if(a===f)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,c),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var y={};y[i]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==e&&r.call(v,i)&&(y=v);var b=d.prototype=p.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,e){var o;this._invoke=function(i,c){function a(){return new e((function(o,a){!function o(i,c,a,u){var s=l(t[i],t,c);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(p).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}(i,c,o,a)}))}return o=o?o.then(a,a):a()}}function x(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=b.constructor=d,d.constructor=h,h.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[c]=function(){return this},t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new w(s(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(b),u(b,a,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),c=[];function a(t){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],u=n.base?i[0]+n.base:i[0],s=e[u]||0,l="".concat(u," ").concat(s);e[u]=s+1;var f=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(p)):c.push({identifier:l,updater:m(p,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,f=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function m(t,n){var e,r,o;if(n.singleton){var i=y++;e=d||(d=s(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=a(e[r]);c[o].references--}for(var i=u(t,n),s=0;s<e.length;s++){var l=a(e[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}e=i}}}},function(t,n,e){(n=e(5)(!1)).push([t.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nh2 {\n    font-size: 3vw;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\n.jumbotron {\n    padding-top: 10%;\n    padding-bottom: 3%;\n    margin:0px auto;\n    color:floralwhite;\n    overflow: hidden;\n    position: relative;\n    background: none;\n}\n\n.jumbotron-background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-image: url(https://source.unsplash.com/1600x900/?%22food%20in%20dark%22);\n    background-position: 0% 25%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n     -o-filter: blur(5px);\n     -ms-filter: blur(5px);\n     filter: blur(5px);\n    z-index: -1;\n}\n\n.lead-title {\n    font-size: 1.5vw;\n}\n\n.title-box{\n    margin: 0 auto;\n    width: 60%;\n    margin-bottom: 5vw;\n}\n\n.title {\n    font-family: Sofia;\n    font-size: 7vw;\n}\n.lead-title{\n    font-size: 2vw;\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,a,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function c(t,n,e){return(c=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(p,t);var n,e,i,c,l,f=(n=p,e=a(),function(){var t,r=s(n);if(e){var i=s(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <script src="node_modules/jquery/dist/jquery.slim.min.js"><\/script>\n        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"><\/script>\n        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">\n        <style>\n        img{\n            width: 2vw;\n            height: 2vw;\n        }\n        .search-container {\n            max-width: 80%;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            margin: auto;\n            padding: 3px 16px;\n            border-radius: 30px;\n            display: flex;\n            position: sticky;\n            top: 10px;\n            background-color: white;\n        }\n        \n        .search-container > input {\n            width: 90%;\n            padding: 6px;\n            border: 0;\n            font-weight: bold;\n        }\n        \n        .search-container > input:focus {\n            outline: 0;\n        }\n        \n        .search-container > input:focus::placeholder {\n            font-weight: bold;\n        }\n        \n        .search-container >  input::placeholder {\n            color: black;\n            font-weight: normal;\n        }\n        \n        .search-container > button {\n            width: 6vw;\n            height: 6vw;\n            cursor: pointer;\n            margin-top: auto;\n            margin-bottom: auto;\n            margin-left: auto;\n            background-color: black;\n            color: white;\n            border-radius: 50%;\n            text-transform: uppercase;\n        }\n        \n        @media screen and (max-width: 550px){\n            .search-container {\n                flex-direction: column;\n                position: static;\n            }\n        \n            .search-container > input {\n                margin-bottom: 12px;\n            }\n        \n        }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Search any meal" id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit"><img src="https://www.iconsdb.com/icons/preview/white/search-13-xxl.png"></button>\n        </div>\n        ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"inputValue",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("search-bar",l)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function c(t,n,e){return(c=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(p,t);var n,e,i,c,l,f=(n=p,e=a(),function(){var t,r=s(n);if(e){var i=s(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        :host {\n            display: block;\n            margin-bottom: 18px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            overflow: hidden;\n        }\n        \n        .meal-photo{\n            display: block;\n            width: 100%;\n            max-height: 300px;\n            object-fit: cover;\n            object-position: center;\n            \n        }\n        .food-info {\n            padding: 24px;\n        }\n        \n        .food-info > h2 {\n            font-weight: lighter;\n        }\n        \n        .food-info > p {\n            margin-bottom: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: inline;\n        }\n        </style>\n        <img class="meal-photo" src="'.concat(this._item.strMealThumb,'" alt="Photo of the Meal">\n        <div class="food-info">\n        <p class="text-uppercase"> ').concat(this._item.strCategory," </p>\n        <h2> ").concat(this._item.strMeal," </h2>\n        \n        </div>\n        ")}},{key:"foodItem",set:function(t){this._item=t,this.render()}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("food-list-item",l)},function(t,n,e){"use strict";e.r(n);e(0),e(2),e(6),e(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function a(t,n,e){return(a=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(p,t);var n,e,r,c,a,f=(n=p,e=u(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=p,(c=[{key:"render",value:function(){var t,n=this;this.shadowDOM.innerHTML='\n        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">\n        <style>\n        \n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        :host {\n            display: block;\n            margin-top: 32px;\n            width: 100%;\n            padding: 16px;\n        }\n        \n        .placeholder{\n            font-weight: lighter;\n           color: rgba(0,0,0,0.5);\n           -webkit-user-select: none;\n           -moz-user-select: none;\n           -ms-user-select: none;\n           user-select: none;\n        }  \n\n        .row {\n            margin-top: 18px;\n        } \n             \n        </style>\n        ';var e=document.createElement("div");e.setAttribute("class","container"),this._items.forEach((function(r,o){o%2==0&&(t=document.createElement("div")).setAttribute("class","row");var i=document.createElement("div");i.setAttribute("class","col col-sm");var c=document.createElement("food-list-item");c.foodItem=r,i.appendChild(c),t.appendChild(i),o%2!=1&&o+1!=n._items.length||e.appendChild(t),console.log(e.innerHTML)})),this.shadowDOM.appendChild(e)}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n        <style>\n           .placeholder {\n               font-weight: lighter;\n               color: rgba(0,0,0,0.5);\n               -webkit-user-select: none;\n               -moz-user-select: none;\n               -ms-user-select: none;\n               user-select: none;\n           }\n       </style>\n       ",this.shadowDOM.innerHTML+='<h2 class="placeholder"> '.concat(t," </h2>")}},{key:"foodItems",set:function(t){console.log(t),this._items=t,this.render()}}])&&o(r.prototype,c),a&&o(r,a),p}(c(HTMLElement));function p(t,n,e,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,o)}function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("food-list",f);var d=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r,o,i;return n=t,e=null,r=[{key:"searchFoodFromAPI",value:(o=regeneratorRuntime.mark((function t(n){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,fetch("".concat("https://www.themealdb.com/api/json/v1/1/search.php?s=").concat(n));case 4:return e=t.sent,t.next=7,e.json();case 7:if(!(r=t.sent).meals){t.next=12;break}return t.abrupt("return",Promise.resolve(r.meals));case 12:return t.abrupt("return",Promise.reject("".concat(n," is not found.")));case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(1),t.abrupt("return",Promise.reject(t.t0));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})),i=function(){var t=this,n=arguments;return new Promise((function(e,r){var i=o.apply(t,n);function c(t){p(i,e,r,c,a,"next",t)}function a(t){p(i,e,r,c,a,"throw",t)}c(void 0)}))},function(t){return i.apply(this,arguments)})}],e&&h(n.prototype,e),r&&h(n,r),t}();function y(t,n,e,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,o)}var m=function(t){var n=document.querySelector("search-bar"),e=document.querySelector("food-list"),r=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.searchFoodFromAPI(n.inputValue);case 3:e=t.sent,console.log(e),o(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),i(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){y(i,r,o,c,a,"next",t)}function a(t){y(i,r,o,c,a,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),o=function(t){try{console.log(t),e.foodItems=t}catch(t){console.log(t)}},i=function(t){e.renderError(t)};n.clickEvent=r};document.addEventListener("DOMContentLoaded",m)}]);