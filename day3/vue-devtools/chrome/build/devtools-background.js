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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/devtools-background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/devtools-background.js":
/*!************************************!*\
  !*** ./src/devtools-background.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This is the devtools script, which is called when the user opens the
// Chrome devtool on a page. We check to see if we global hook has detected
// Vue presence on the page. If yes, create the Vue panel; otherwise poll
// for 10 seconds.

var panelLoaded = false
var panelShown = false
var pendingAction
var created = false
var checkCount = 0

chrome.devtools.network.onNavigated.addListener(createPanelIfHasVue)
var checkVueInterval = setInterval(createPanelIfHasVue, 1000)
createPanelIfHasVue()

function createPanelIfHasVue () {
  if (created || checkCount++ > 10) {
    return
  }
  panelLoaded = false
  panelShown = false
  chrome.devtools.inspectedWindow.eval(
    '!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)',
    function (hasVue) {
      if (!hasVue || created) {
        return
      }
      clearInterval(checkVueInterval)
      created = true
      chrome.devtools.panels.create(
        'Vue', 'icons/128.png', 'devtools.html',
        panel => {
          // panel loaded
          panel.onShown.addListener(onPanelShown)
          panel.onHidden.addListener(onPanelHidden)
        }
      )
    }
  )
}

// Runtime messages

chrome.runtime.onMessage.addListener(request => {
  if (request === 'vue-panel-load') {
    onPanelLoad()
  } else if (request.vueToast) {
    toast(request.vueToast.message, request.vueToast.type)
  } else if (request.vueContextMenu) {
    onContextMenu(request.vueContextMenu)
  }
})

// Page context menu entry

function onContextMenu (ref) {
  var id = ref.id;

  if (id === 'vue-inspect-instance') {
    var src = `window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__`

    chrome.devtools.inspectedWindow.eval(src, function (res, err) {
      if (err) {
        console.log(err)
      }
      if (typeof res !== 'undefined' && res) {
        panelAction(() => {
          chrome.runtime.sendMessage('vue-get-context-menu-target')
        }, 'Open Vue devtools to see component details')
      } else {
        pendingAction = null
        toast('No Vue component was found', 'warn')
      }
    })
  }
}

// Action that may execute immediatly
// or later when the Vue panel is ready

function panelAction (cb, message = null) {
  if (created && panelLoaded && panelShown) {
    cb()
  } else {
    pendingAction = cb
    message && toast(message)
  }
}

function executePendingAction () {
  pendingAction && pendingAction()
  pendingAction = null
}

// Execute pending action when Vue panel is ready

function onPanelLoad () {
  executePendingAction()
  panelLoaded = true
}

// Manage panel visibility

function onPanelShown () {
  chrome.runtime.sendMessage('vue-panel-shown')
  panelShown = true
  panelLoaded && executePendingAction()
}

function onPanelHidden () {
  chrome.runtime.sendMessage('vue-panel-hidden')
  panelShown = false
}

// Toasts

function toast (message, type = 'normal') {
  var src = `(function() {
    __VUE_DEVTOOLS_TOAST__(\`${message}\`, '${type}');
  })()`

  chrome.devtools.inspectedWindow.eval(src, function (res, err) {
    if (err) {
      console.log(err)
    }
  })
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldnRvb2xzLWJhY2tncm91bmQuanMiXSwibmFtZXMiOlsibGV0IiwiY29uc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7QUFLQUEsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLO0FBQ3ZCQSxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUs7QUFDdEJBLEdBQUcsQ0FBQyxhQUFhO0FBQ2pCQSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUs7QUFDbkJBLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQzs7QUFFbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwRUMsR0FBSyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsRUFB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QUVELFNBQVMsYUFBYSxJQUFJO0VBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0VBQzlDLFVBQVUsR0FBRyxLQUFLO0NBQ25COzs7O0FBSUQsU0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksR0FBRyxRQUFRLEVBQUU7RUFDeENBLEdBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQzs2QkFDYyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO01BQzdDLENBQUM7O0VBRUwsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDNUQsSUFBSSxHQUFHLEVBQUU7TUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztLQUNqQjtHQUNGLENBQUM7Q0FDSCIsImZpbGUiOiJkZXZ0b29scy1iYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZGV2dG9vbHMtYmFja2dyb3VuZC5qc1wiKTtcbiIsIi8vIFRoaXMgaXMgdGhlIGRldnRvb2xzIHNjcmlwdCwgd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgb3BlbnMgdGhlXHJcbi8vIENocm9tZSBkZXZ0b29sIG9uIGEgcGFnZS4gV2UgY2hlY2sgdG8gc2VlIGlmIHdlIGdsb2JhbCBob29rIGhhcyBkZXRlY3RlZFxyXG4vLyBWdWUgcHJlc2VuY2Ugb24gdGhlIHBhZ2UuIElmIHllcywgY3JlYXRlIHRoZSBWdWUgcGFuZWw7IG90aGVyd2lzZSBwb2xsXHJcbi8vIGZvciAxMCBzZWNvbmRzLlxyXG5cclxubGV0IHBhbmVsTG9hZGVkID0gZmFsc2VcclxubGV0IHBhbmVsU2hvd24gPSBmYWxzZVxyXG5sZXQgcGVuZGluZ0FjdGlvblxyXG5sZXQgY3JlYXRlZCA9IGZhbHNlXHJcbmxldCBjaGVja0NvdW50ID0gMFxyXG5cclxuY2hyb21lLmRldnRvb2xzLm5ldHdvcmsub25OYXZpZ2F0ZWQuYWRkTGlzdGVuZXIoY3JlYXRlUGFuZWxJZkhhc1Z1ZSlcclxuY29uc3QgY2hlY2tWdWVJbnRlcnZhbCA9IHNldEludGVydmFsKGNyZWF0ZVBhbmVsSWZIYXNWdWUsIDEwMDApXHJcbmNyZWF0ZVBhbmVsSWZIYXNWdWUoKVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFuZWxJZkhhc1Z1ZSAoKSB7XHJcbiAgaWYgKGNyZWF0ZWQgfHwgY2hlY2tDb3VudCsrID4gMTApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBwYW5lbExvYWRlZCA9IGZhbHNlXHJcbiAgcGFuZWxTaG93biA9IGZhbHNlXHJcbiAgY2hyb21lLmRldnRvb2xzLmluc3BlY3RlZFdpbmRvdy5ldmFsKFxyXG4gICAgJyEhKHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLlZ1ZSknLFxyXG4gICAgZnVuY3Rpb24gKGhhc1Z1ZSkge1xyXG4gICAgICBpZiAoIWhhc1Z1ZSB8fCBjcmVhdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY2xlYXJJbnRlcnZhbChjaGVja1Z1ZUludGVydmFsKVxyXG4gICAgICBjcmVhdGVkID0gdHJ1ZVxyXG4gICAgICBjaHJvbWUuZGV2dG9vbHMucGFuZWxzLmNyZWF0ZShcclxuICAgICAgICAnVnVlJywgJ2ljb25zLzEyOC5wbmcnLCAnZGV2dG9vbHMuaHRtbCcsXHJcbiAgICAgICAgcGFuZWwgPT4ge1xyXG4gICAgICAgICAgLy8gcGFuZWwgbG9hZGVkXHJcbiAgICAgICAgICBwYW5lbC5vblNob3duLmFkZExpc3RlbmVyKG9uUGFuZWxTaG93bilcclxuICAgICAgICAgIHBhbmVsLm9uSGlkZGVuLmFkZExpc3RlbmVyKG9uUGFuZWxIaWRkZW4pXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgKVxyXG59XHJcblxyXG4vLyBSdW50aW1lIG1lc3NhZ2VzXHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIocmVxdWVzdCA9PiB7XHJcbiAgaWYgKHJlcXVlc3QgPT09ICd2dWUtcGFuZWwtbG9hZCcpIHtcclxuICAgIG9uUGFuZWxMb2FkKClcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QudnVlVG9hc3QpIHtcclxuICAgIHRvYXN0KHJlcXVlc3QudnVlVG9hc3QubWVzc2FnZSwgcmVxdWVzdC52dWVUb2FzdC50eXBlKVxyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC52dWVDb250ZXh0TWVudSkge1xyXG4gICAgb25Db250ZXh0TWVudShyZXF1ZXN0LnZ1ZUNvbnRleHRNZW51KVxyXG4gIH1cclxufSlcclxuXHJcbi8vIFBhZ2UgY29udGV4dCBtZW51IGVudHJ5XHJcblxyXG5mdW5jdGlvbiBvbkNvbnRleHRNZW51ICh7IGlkIH0pIHtcclxuICBpZiAoaWQgPT09ICd2dWUtaW5zcGVjdC1pbnN0YW5jZScpIHtcclxuICAgIGNvbnN0IHNyYyA9IGB3aW5kb3cuX19WVUVfREVWVE9PTFNfQ09OVEVYVF9NRU5VX0hBU19UQVJHRVRfX2BcclxuXHJcbiAgICBjaHJvbWUuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93LmV2YWwoc3JjLCBmdW5jdGlvbiAocmVzLCBlcnIpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHJlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzKSB7XHJcbiAgICAgICAgcGFuZWxBY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ3Z1ZS1nZXQtY29udGV4dC1tZW51LXRhcmdldCcpXHJcbiAgICAgICAgfSwgJ09wZW4gVnVlIGRldnRvb2xzIHRvIHNlZSBjb21wb25lbnQgZGV0YWlscycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGVuZGluZ0FjdGlvbiA9IG51bGxcclxuICAgICAgICB0b2FzdCgnTm8gVnVlIGNvbXBvbmVudCB3YXMgZm91bmQnLCAnd2FybicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBY3Rpb24gdGhhdCBtYXkgZXhlY3V0ZSBpbW1lZGlhdGx5XHJcbi8vIG9yIGxhdGVyIHdoZW4gdGhlIFZ1ZSBwYW5lbCBpcyByZWFkeVxyXG5cclxuZnVuY3Rpb24gcGFuZWxBY3Rpb24gKGNiLCBtZXNzYWdlID0gbnVsbCkge1xyXG4gIGlmIChjcmVhdGVkICYmIHBhbmVsTG9hZGVkICYmIHBhbmVsU2hvd24pIHtcclxuICAgIGNiKClcclxuICB9IGVsc2Uge1xyXG4gICAgcGVuZGluZ0FjdGlvbiA9IGNiXHJcbiAgICBtZXNzYWdlICYmIHRvYXN0KG1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjdXRlUGVuZGluZ0FjdGlvbiAoKSB7XHJcbiAgcGVuZGluZ0FjdGlvbiAmJiBwZW5kaW5nQWN0aW9uKClcclxuICBwZW5kaW5nQWN0aW9uID0gbnVsbFxyXG59XHJcblxyXG4vLyBFeGVjdXRlIHBlbmRpbmcgYWN0aW9uIHdoZW4gVnVlIHBhbmVsIGlzIHJlYWR5XHJcblxyXG5mdW5jdGlvbiBvblBhbmVsTG9hZCAoKSB7XHJcbiAgZXhlY3V0ZVBlbmRpbmdBY3Rpb24oKVxyXG4gIHBhbmVsTG9hZGVkID0gdHJ1ZVxyXG59XHJcblxyXG4vLyBNYW5hZ2UgcGFuZWwgdmlzaWJpbGl0eVxyXG5cclxuZnVuY3Rpb24gb25QYW5lbFNob3duICgpIHtcclxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSgndnVlLXBhbmVsLXNob3duJylcclxuICBwYW5lbFNob3duID0gdHJ1ZVxyXG4gIHBhbmVsTG9hZGVkICYmIGV4ZWN1dGVQZW5kaW5nQWN0aW9uKClcclxufVxyXG5cclxuZnVuY3Rpb24gb25QYW5lbEhpZGRlbiAoKSB7XHJcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoJ3Z1ZS1wYW5lbC1oaWRkZW4nKVxyXG4gIHBhbmVsU2hvd24gPSBmYWxzZVxyXG59XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbmZ1bmN0aW9uIHRvYXN0IChtZXNzYWdlLCB0eXBlID0gJ25vcm1hbCcpIHtcclxuICBjb25zdCBzcmMgPSBgKGZ1bmN0aW9uKCkge1xyXG4gICAgX19WVUVfREVWVE9PTFNfVE9BU1RfXyhcXGAke21lc3NhZ2V9XFxgLCAnJHt0eXBlfScpO1xyXG4gIH0pKClgXHJcblxyXG4gIGNocm9tZS5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cuZXZhbChzcmMsIGZ1bmN0aW9uIChyZXMsIGVycikge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9