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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar chat = document.querySelector('.chat');\nvar storage = 'chatMessages';\nvar sender = \"Вы\";\nfunction loadMessages() {\n  var saved = localStorage.getItem(storage);\n  return saved ? JSON.parse(saved) : [];\n}\nfunction saveMessages(messages) {\n  localStorage.setItem(storage, JSON.stringify(messages));\n}\nfunction renderMessages(messages) {\n  chat.innerHTML = '';\n  if (messages.length === 0) {\n    var emptyEl = document.createElement('div');\n    emptyEl.className = 'chat-empty';\n    emptyEl.textContent = 'Начните общение!';\n    chat.appendChild(emptyEl);\n    return;\n  }\n  messages.forEach(function (msg) {\n    var el = document.createElement('div');\n    el.className = \"message \".concat(msg.sender === \"Вы\" ? 'message--own' : 'message--other');\n    var textEl = document.createElement('div');\n    textEl.className = 'message-text';\n    textEl.textContent = msg.text;\n    var metaEl = document.createElement('div');\n    metaEl.className = 'message-meta';\n    var date = new Date(msg.timestamp);\n    var timeStr = date.toLocaleTimeString([], {\n      hour: '2-digit',\n      minute: '2-digit'\n    });\n    var dateStr = date.toLocaleDateString('ru-RU', {\n      day: 'numeric',\n      month: 'short',\n      year: 'numeric'\n    });\n    metaEl.textContent = \"\".concat(msg.sender, \" \\u2022 \").concat(dateStr, \", \").concat(timeStr);\n    el.appendChild(textEl);\n    el.appendChild(metaEl);\n    chat.appendChild(el);\n  });\n  chat.scrollTop = chat.scrollHeight;\n}\nvar messages = loadMessages();\nrenderMessages(messages);\nform.addEventListener('submit', handleSubmit);\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var text = input.value.trim();\n  if (text === '') {\n    return;\n  }\n  messages.push({\n    text: text,\n    sender: sender,\n    timestamp: Date.now()\n  });\n  saveMessages(messages);\n  renderMessages(messages);\n  input.value = '';\n}\ndocument.getElementById('switch-person').addEventListener('click', function () {\n  if (sender === \"Вы\") {\n    sender = \"Дмитрий\";\n    return;\n  }\n  sender = \"Вы\";\n});\ndocument.getElementById('clear-chat').addEventListener('click', function () {\n  localStorage.removeItem('chatMessages');\n  messages = [];\n  renderMessages(messages);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });