(()=>{"use strict";var r={d:(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t)};function _slicedToArray(r,t){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,a,o,i,l=[],c=!0,u=!1;try{if(o=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=o.call(e)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(r){u=!0,a=r}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(r,t)||function _unsupportedIterableToArray(r,t){if(!r)return;if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(r,t)}(r,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function registerSettings(){!function registerSettingsArray(r){for(var e=0,n=Object.entries(r);e<n.length;e++){var a=_slicedToArray(n[e],2),o=a[0],i=a[1];i.name||(i.name="".concat(t,".settings.").concat(o,".name")),i.hint||(i.hint="".concat(t,".settings.").concat(o,".hint")),game.settings.register(t,o,i)}}({})}r.d({},{c:()=>t});var t="module-id";Hooks.on("init",(function(){registerSettings()}))})();
//# sourceMappingURL=index.js.map