/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/detector.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/_webpack@4.37.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../src/backend/toast.js":
/*!**************************************************************!*\
  !*** F:/三阶段/code/vue/day3/vue-devtools/src/backend/toast.js ***!
  \**************************************************************/
/*! exports provided: installToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installToast", function() { return installToast; });
function installToast (target) {
  if (typeof document === 'undefined') { return }
  var toastEl = null
  var toastTimer = 0

  var colors = {
    normal: '#3BA776',
    warn: '#DB6B00',
    error: '#DB2600'
  }

  target.__VUE_DEVTOOLS_TOAST__ = (message, type) => {
    var color = colors[type] || colors.normal
    console.log(`%c vue-devtools %c ${message} %c `,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      `background: ${color}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff`,
      'background:transparent')
    if (!toastEl) {
      toastEl = document.createElement('div')
      toastEl.addEventListener('click', removeToast)

      var vueDevtoolsToast = document.createElement('div')
      vueDevtoolsToast.id = 'vue-devtools-toast'
      vueDevtoolsToast.style.position = 'fixed'
      vueDevtoolsToast.style.bottom = '6px'
      vueDevtoolsToast.style.left = '0'
      vueDevtoolsToast.style.right = '0'
      vueDevtoolsToast.style.height = '0'
      vueDevtoolsToast.style.display = 'flex'
      vueDevtoolsToast.style.alignItems = 'flex-end'
      vueDevtoolsToast.style.justifyContent = 'center'
      vueDevtoolsToast.style.zIndex = '999999999999999999999'
      vueDevtoolsToast.style.fontFamily = 'Menlo, Consolas, monospace'
      vueDevtoolsToast.style.fontSize = '14px'

      var vueWrapper = document.createElement('div')
      vueWrapper.className = 'vue-wrapper'
      vueWrapper.style.padding = '6px 12px'
      vueWrapper.style.background = color
      vueWrapper.style.color = 'white'
      vueWrapper.style.borderRadius = '3px'
      vueWrapper.style.flex = 'auto 0 1'
      vueWrapper.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)'
      vueWrapper.style.cursor = 'pointer'

      var vueContent = document.createElement('div')
      vueContent.className = 'vue-content'

      vueWrapper.appendChild(vueContent)
      vueDevtoolsToast.appendChild(vueWrapper)
      toastEl.appendChild(vueDevtoolsToast)
      document.body.appendChild(toastEl)
    } else {
      toastEl.querySelector('.vue-wrapper').style.background = color
    }

    toastEl.querySelector('.vue-content').innerText = message

    clearTimeout(toastTimer)
    toastTimer = setTimeout(removeToast, 5000)
  }

  function removeToast () {
    clearTimeout(toastTimer)
    if (toastEl) {
      document.body.removeChild(toastEl)
      toastEl = null
    }
  }
}


/***/ }),

/***/ "../../src/devtools/env.js":
/*!*************************************************************!*\
  !*** F:/三阶段/code/vue/day3/vue-devtools/src/devtools/env.js ***!
  \*************************************************************/
/*! exports provided: isBrowser, target, isChrome, isFirefox, isWindows, isMac, isLinux, keys, initEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "target", function() { return target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return isMac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEnv", function() { return initEnv; });
var isBrowser = typeof navigator !== 'undefined'
var target = isBrowser
  ? window
  : typeof global !== 'undefined'
    ? global
    : {}
var isChrome = typeof chrome !== 'undefined' && !!chrome.devtools
var isFirefox = isBrowser && navigator.userAgent.indexOf('Firefox') > -1
var isWindows = isBrowser && navigator.platform.indexOf('Win') === 0
var isMac = isBrowser && navigator.platform === 'MacIntel'
var isLinux = isBrowser && navigator.platform.indexOf('Linux') === 0
var keys = {
  ctrl: isMac ? '&#8984;' : 'Ctrl',
  shift: 'Shift',
  alt: isMac ? '&#8997;' : 'Alt',
  del: 'Del',
  enter: 'Enter',
  esc: 'Esc'
}

function initEnv (Vue) {
  if (Vue.prototype.hasOwnProperty('$isChrome')) { return }

  Object.defineProperties(Vue.prototype, {
    '$isChrome': { get: () => isChrome },
    '$isFirefox': { get: () => isFirefox },
    '$isWindows': { get: () => isWindows },
    '$isMac': { get: () => isMac },
    '$isLinux': { get: () => isLinux },
    '$keys': { get: () => keys }
  })

  if (isWindows) { document.body.classList.add('platform-windows') }
  if (isMac) { document.body.classList.add('platform-mac') }
  if (isLinux) { document.body.classList.add('platform-linux') }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_webpack@4.37.0@webpack/buildin/global.js */ "../../node_modules/_webpack@4.37.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./src/detector.js":
/*!*************************!*\
  !*** ./src/detector.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_backend_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/backend/toast */ "../../src/backend/toast.js");
/* harmony import */ var src_devtools_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/devtools/env */ "../../src/devtools/env.js");



window.addEventListener('message', e => {
  if (e.source === window && e.data.vueDetected) {
    chrome.runtime.sendMessage(e.data)
  }
})

function detect (win) {
  setTimeout(() => {
    // Method 1: Check Nuxt.js
    var nuxtDetected = Boolean(window.__NUXT__ || window.$nuxt)

    if (nuxtDetected) {
      var Vue

      if (window.$nuxt) {
        Vue = window.$nuxt.$root.constructor
      }

      win.postMessage({
        devtoolsEnabled: Vue && Vue.config.devtools,
        vueDetected: true,
        nuxtDetected: true
      }, '*')

      return
    }

    // Method 2: Scan all elements inside document
    var all = document.querySelectorAll('*')
    var el
    for (var i = 0; i < all.length; i++) {
      if (all[i].__vue__) {
        el = all[i]
        break
      }
    }
    if (el) {
      var Vue$1 = Object.getPrototypeOf(el.__vue__).constructor
      while (Vue$1.super) {
        Vue$1 = Vue$1.super
      }
      win.postMessage({
        devtoolsEnabled: Vue$1.config.devtools,
        vueDetected: true
      }, '*')
    }
  }, 100)
}

// inject the hook
if (document instanceof HTMLDocument) {
  installScript(detect)
  installScript(src_backend_toast__WEBPACK_IMPORTED_MODULE_0__["installToast"])
}

function installScript (fn) {
  var source = ';(' + fn.toString() + ')(window)'

  if (src_devtools_env__WEBPACK_IMPORTED_MODULE_1__["isFirefox"]) {
    // eslint-disable-next-line no-eval
    window.eval(source) // in Firefox, this evaluates on the content window
  } else {
    var script = document.createElement('script')
    script.textContent = source
    document.documentElement.appendChild(script)
    script.parentNode.removeChild(script)
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi8uLi8uLi9zcmMvYmFja2VuZC90b2FzdC5qcyIsIndlYnBhY2s6Ly8vLi8uLi8uLi9zcmMvZGV2dG9vbHMvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRlY3Rvci5qcyJdLCJuYW1lcyI6WyJsZXQiLCJjb25zdCIsIlZ1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQU8sU0FBUyxZQUFZLEVBQUUsTUFBTSxFQUFFO0VB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QUNGO0lBQ0QsSUFBSSxFQUFFLEVBQUU7TUFDTkEsR0FBRyxDQUFDRSxLQUFHLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVztNQUN2RCxPQUFPQSxLQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2hCQSxLQUFHLEdBQUdBLEtBQUcsQ0FBQyxLQUFLO09BQ2hCO01BQ0QsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNkLGVBQWUsRUFBRUEsS0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3BDLFdBQVcsRUFBRSxJQUFJO09BQ2xCLEVBQUUsR0FBRyxDQUFDO0tBQ1I7R0FDRixFQUFFLEdBQUcsQ0FBQztDQUNSOzs7QUFHRCxJQUFJLFFBQVEsWUFBWSxZQUFZLEVBQUU7RUFDcEMsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUNyQixhQUFhLENBQUMsOERBQVksQ0FBQztDQUM1Qjs7QUFFRCxTQUFTLGFBQWEsRUFBRSxFQUFFLEVBQUU7RUFDMUJELEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXOztFQUVqRCxJQUFJLDBEQUFTLEVBQUU7O0lBRWIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7R0FDcEIsTUFBTTtJQUNMQSxHQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTTtJQUMzQixRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0dBQ3RDO0NBQ0YiLCJmaWxlIjoiZGV0ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kZXRlY3Rvci5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsVG9hc3QgKHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cclxuICBsZXQgdG9hc3RFbCA9IG51bGxcclxuICBsZXQgdG9hc3RUaW1lciA9IDBcclxuXHJcbiAgY29uc3QgY29sb3JzID0ge1xyXG4gICAgbm9ybWFsOiAnIzNCQTc3NicsXHJcbiAgICB3YXJuOiAnI0RCNkIwMCcsXHJcbiAgICBlcnJvcjogJyNEQjI2MDAnXHJcbiAgfVxyXG5cclxuICB0YXJnZXQuX19WVUVfREVWVE9PTFNfVE9BU1RfXyA9IChtZXNzYWdlLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvciA9IGNvbG9yc1t0eXBlXSB8fCBjb2xvcnMubm9ybWFsXHJcbiAgICBjb25zb2xlLmxvZyhgJWMgdnVlLWRldnRvb2xzICVjICR7bWVzc2FnZX0gJWMgYCxcclxuICAgICAgJ2JhY2tncm91bmQ6IzM1NDk1ZSA7IHBhZGRpbmc6IDFweDsgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7ICBjb2xvcjogI2ZmZicsXHJcbiAgICAgIGBiYWNrZ3JvdW5kOiAke2NvbG9yfTsgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDsgIGNvbG9yOiAjZmZmYCxcclxuICAgICAgJ2JhY2tncm91bmQ6dHJhbnNwYXJlbnQnKVxyXG4gICAgaWYgKCF0b2FzdEVsKSB7XHJcbiAgICAgIHRvYXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICB0b2FzdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVG9hc3QpXHJcblxyXG4gICAgICBjb25zdCB2dWVEZXZ0b29sc1RvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5pZCA9ICd2dWUtZGV2dG9vbHMtdG9hc3QnXHJcbiAgICAgIHZ1ZURldnRvb2xzVG9hc3Quc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgIHZ1ZURldnRvb2xzVG9hc3Quc3R5bGUuYm90dG9tID0gJzZweCdcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5zdHlsZS5sZWZ0ID0gJzAnXHJcbiAgICAgIHZ1ZURldnRvb2xzVG9hc3Quc3R5bGUucmlnaHQgPSAnMCdcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5zdHlsZS5oZWlnaHQgPSAnMCdcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgIHZ1ZURldnRvb2xzVG9hc3Quc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LWVuZCdcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcbiAgICAgIHZ1ZURldnRvb2xzVG9hc3Quc3R5bGUuekluZGV4ID0gJzk5OTk5OTk5OTk5OTk5OTk5OTk5OSdcclxuICAgICAgdnVlRGV2dG9vbHNUb2FzdC5zdHlsZS5mb250RmFtaWx5ID0gJ01lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlJ1xyXG4gICAgICB2dWVEZXZ0b29sc1RvYXN0LnN0eWxlLmZvbnRTaXplID0gJzE0cHgnXHJcblxyXG4gICAgICBjb25zdCB2dWVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgdnVlV3JhcHBlci5jbGFzc05hbWUgPSAndnVlLXdyYXBwZXInXHJcbiAgICAgIHZ1ZVdyYXBwZXIuc3R5bGUucGFkZGluZyA9ICc2cHggMTJweCdcclxuICAgICAgdnVlV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcclxuICAgICAgdnVlV3JhcHBlci5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcclxuICAgICAgdnVlV3JhcHBlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4J1xyXG4gICAgICB2dWVXcmFwcGVyLnN0eWxlLmZsZXggPSAnYXV0byAwIDEnXHJcbiAgICAgIHZ1ZVdyYXBwZXIuc3R5bGUuYm94U2hhZG93ID0gJzAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpJ1xyXG4gICAgICB2dWVXcmFwcGVyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xyXG5cclxuICAgICAgY29uc3QgdnVlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIHZ1ZUNvbnRlbnQuY2xhc3NOYW1lID0gJ3Z1ZS1jb250ZW50J1xyXG5cclxuICAgICAgdnVlV3JhcHBlci5hcHBlbmRDaGlsZCh2dWVDb250ZW50KVxyXG4gICAgICB2dWVEZXZ0b29sc1RvYXN0LmFwcGVuZENoaWxkKHZ1ZVdyYXBwZXIpXHJcbiAgICAgIHRvYXN0RWwuYXBwZW5kQ2hpbGQodnVlRGV2dG9vbHNUb2FzdClcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdEVsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9hc3RFbC5xdWVyeVNlbGVjdG9yKCcudnVlLXdyYXBwZXInKS5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JcclxuICAgIH1cclxuXHJcbiAgICB0b2FzdEVsLnF1ZXJ5U2VsZWN0b3IoJy52dWUtY29udGVudCcpLmlubmVyVGV4dCA9IG1lc3NhZ2VcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodG9hc3RUaW1lcilcclxuICAgIHRvYXN0VGltZXIgPSBzZXRUaW1lb3V0KHJlbW92ZVRvYXN0LCA1MDAwKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlVG9hc3QgKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRvYXN0VGltZXIpXHJcbiAgICBpZiAodG9hc3RFbCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvYXN0RWwpXHJcbiAgICAgIHRvYXN0RWwgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xyXG5leHBvcnQgY29uc3QgdGFyZ2V0ID0gaXNCcm93c2VyXHJcbiAgPyB3aW5kb3dcclxuICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXHJcbiAgICA/IGdsb2JhbFxyXG4gICAgOiB7fVxyXG5leHBvcnQgY29uc3QgaXNDaHJvbWUgPSB0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJyAmJiAhIWNocm9tZS5kZXZ0b29sc1xyXG5leHBvcnQgY29uc3QgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcclxuZXhwb3J0IGNvbnN0IGlzV2luZG93cyA9IGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPT09IDBcclxuZXhwb3J0IGNvbnN0IGlzTWFjID0gaXNCcm93c2VyICYmIG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJ1xyXG5leHBvcnQgY29uc3QgaXNMaW51eCA9IGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignTGludXgnKSA9PT0gMFxyXG5leHBvcnQgY29uc3Qga2V5cyA9IHtcclxuICBjdHJsOiBpc01hYyA/ICcmIzg5ODQ7JyA6ICdDdHJsJyxcclxuICBzaGlmdDogJ1NoaWZ0JyxcclxuICBhbHQ6IGlzTWFjID8gJyYjODk5NzsnIDogJ0FsdCcsXHJcbiAgZGVsOiAnRGVsJyxcclxuICBlbnRlcjogJ0VudGVyJyxcclxuICBlc2M6ICdFc2MnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RW52IChWdWUpIHtcclxuICBpZiAoVnVlLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnJGlzQ2hyb21lJykpIHJldHVyblxyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhWdWUucHJvdG90eXBlLCB7XHJcbiAgICAnJGlzQ2hyb21lJzogeyBnZXQ6ICgpID0+IGlzQ2hyb21lIH0sXHJcbiAgICAnJGlzRmlyZWZveCc6IHsgZ2V0OiAoKSA9PiBpc0ZpcmVmb3ggfSxcclxuICAgICckaXNXaW5kb3dzJzogeyBnZXQ6ICgpID0+IGlzV2luZG93cyB9LFxyXG4gICAgJyRpc01hYyc6IHsgZ2V0OiAoKSA9PiBpc01hYyB9LFxyXG4gICAgJyRpc0xpbnV4JzogeyBnZXQ6ICgpID0+IGlzTGludXggfSxcclxuICAgICcka2V5cyc6IHsgZ2V0OiAoKSA9PiBrZXlzIH1cclxuICB9KVxyXG5cclxuICBpZiAoaXNXaW5kb3dzKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3BsYXRmb3JtLXdpbmRvd3MnKVxyXG4gIGlmIChpc01hYykgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwbGF0Zm9ybS1tYWMnKVxyXG4gIGlmIChpc0xpbnV4KSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3BsYXRmb3JtLWxpbnV4JylcclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YWxsVG9hc3QgfSBmcm9tICdzcmMvYmFja2VuZC90b2FzdCdcclxuaW1wb3J0IHsgaXNGaXJlZm94IH0gZnJvbSAnc3JjL2RldnRvb2xzL2VudidcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZSA9PiB7XHJcbiAgaWYgKGUuc291cmNlID09PSB3aW5kb3cgJiYgZS5kYXRhLnZ1ZURldGVjdGVkKSB7XHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShlLmRhdGEpXHJcbiAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0ICh3aW4pIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vIE1ldGhvZCAxOiBDaGVjayBOdXh0LmpzXHJcbiAgICBjb25zdCBudXh0RGV0ZWN0ZWQgPSBCb29sZWFuKHdpbmRvdy5fX05VWFRfXyB8fCB3aW5kb3cuJG51eHQpXHJcblxyXG4gICAgaWYgKG51eHREZXRlY3RlZCkge1xyXG4gICAgICBsZXQgVnVlXHJcblxyXG4gICAgICBpZiAod2luZG93LiRudXh0KSB7XHJcbiAgICAgICAgVnVlID0gd2luZG93LiRudXh0LiRyb290LmNvbnN0cnVjdG9yXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgZGV2dG9vbHNFbmFibGVkOiBWdWUgJiYgVnVlLmNvbmZpZy5kZXZ0b29scyxcclxuICAgICAgICB2dWVEZXRlY3RlZDogdHJ1ZSxcclxuICAgICAgICBudXh0RGV0ZWN0ZWQ6IHRydWVcclxuICAgICAgfSwgJyonKVxyXG5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIDI6IFNjYW4gYWxsIGVsZW1lbnRzIGluc2lkZSBkb2N1bWVudFxyXG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpXHJcbiAgICBsZXQgZWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhbGxbaV0uX192dWVfXykge1xyXG4gICAgICAgIGVsID0gYWxsW2ldXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGxldCBWdWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZWwuX192dWVfXykuY29uc3RydWN0b3JcclxuICAgICAgd2hpbGUgKFZ1ZS5zdXBlcikge1xyXG4gICAgICAgIFZ1ZSA9IFZ1ZS5zdXBlclxyXG4gICAgICB9XHJcbiAgICAgIHdpbi5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgZGV2dG9vbHNFbmFibGVkOiBWdWUuY29uZmlnLmRldnRvb2xzLFxyXG4gICAgICAgIHZ1ZURldGVjdGVkOiB0cnVlXHJcbiAgICAgIH0sICcqJylcclxuICAgIH1cclxuICB9LCAxMDApXHJcbn1cclxuXHJcbi8vIGluamVjdCB0aGUgaG9va1xyXG5pZiAoZG9jdW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcclxuICBpbnN0YWxsU2NyaXB0KGRldGVjdClcclxuICBpbnN0YWxsU2NyaXB0KGluc3RhbGxUb2FzdClcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zdGFsbFNjcmlwdCAoZm4pIHtcclxuICBjb25zdCBzb3VyY2UgPSAnOygnICsgZm4udG9TdHJpbmcoKSArICcpKHdpbmRvdyknXHJcblxyXG4gIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXHJcbiAgICB3aW5kb3cuZXZhbChzb3VyY2UpIC8vIGluIEZpcmVmb3gsIHRoaXMgZXZhbHVhdGVzIG9uIHRoZSBjb250ZW50IHdpbmRvd1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxyXG4gICAgc2NyaXB0LnRleHRDb250ZW50ID0gc291cmNlXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG4gICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9