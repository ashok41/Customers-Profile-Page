/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./assets/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./assets/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./assets/style.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./assets/style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tfont-family: sans-serif;\\r\\n}\\r\\n\\r\\nh6 {\\r\\n    font-size: 18px;\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 2.1px;\\r\\n    font-weight: normal;\\r\\n    color: #222222;\\r\\n    margin: 10px 0;\\r\\n}\\r\\n\\r\\nh5 {\\r\\n    font-size: 16px;\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 2.1px;\\r\\n    font-weight: normal;\\r\\n    color: #222222;\\r\\n    margin: 10px 0;\\r\\n}\\r\\n\\r\\n#root {\\r\\n\\tfont-size: 12px;\\r\\n\\tmargin: 20px auto;\\r\\n\\twidth: 95%;\\r\\n}\\r\\n\\r\\n.profile-info {\\r\\n\\tdisplay: flex;\\r\\n\\tborder: 1px solid #ddd;\\r\\n    padding: 10px;\\r\\n    border-radius: 2px;\\r\\n    box-shadow: 2px 10px 6px -6px rgb(0,0,0,0.2);\\r\\n}\\r\\n\\r\\n.orders {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tborder: 1px solid #ddd;\\r\\n\\tmargin-top: 15px;\\r\\n    border-radius: 2px;\\r\\n    box-shadow: 2px 10px 6px -6px rgb(0,0,0,0.2);\\r\\n}\\r\\n\\r\\n.orders-list {\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n.title {\\r\\n\\tmargin: 20px 0px 10px 0px;\\r\\n    font-size: 16px;\\r\\n    color: #222;\\r\\n    font-weight: 600;\\r\\n}\\r\\n.table-row {\\r\\n  display: flex;          \\r\\n  flex-direction: row;    \\r\\n  flex-grow: 0;            \\r\\n  flex-wrap: wrap;         \\r\\n  padding-left: 15px;\\r\\n  padding-right: 15px;\\r\\n  border-bottom: 2px solid #e0e0e0;\\r\\n  border-collapse: collapse;\\r\\n  padding-top: 5px;\\r\\n}\\r\\n\\r\\n.table-row.header {\\r\\n  background-color: #FFEEDB;\\r\\n  font-weight: bold;\\r\\n  padding-top: 8px;\\r\\n  padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.table-row.row {\\r\\n  padding-top: 8px;\\r\\n  padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  width: 1%;\\r\\n  flex-grow: 1;           \\r\\n  overflow: hidden;\\r\\n  white-space: nowrap;\\r\\n  text-overflow: ellipsis;\\r\\n  padding-right: 20px;\\r\\n}\\r\\n\\r\\n.text a {\\r\\n\\tcolor: #7070ec;\\r\\n\\ttext-decoration:none;\\r\\n}\\r\\n\\r\\n\\r\\n.about {\\r\\n\\tcolor: #6e6b6b;\\r\\n\\tpadding-bottom: 15px;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n\\tlist-style: none;\\r\\n\\tpadding: 0px;\\r\\n\\tmargin: 0px;\\r\\n}\\r\\n.contact-info li {\\r\\n\\tpadding: 3px 0px;\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n.contact-info li div:first-child {\\r\\n\\tflex: 0 1 70px;\\r\\n\\tfont-weight: 600;\\r\\n}\\r\\n.contact-info li div:last-child {\\r\\n\\tcolor: #6e6b6b;\\r\\n\\tflex: 1;\\r\\n\\tword-break: break-word;\\r\\n}\\r\\n.profile-img {\\r\\n\\tpadding: 10px;\\r\\n}\\r\\n\\r\\n.product-info {\\r\\n\\tdisplay: flex;\\r\\n\\tborder: 1px solid #ddd;\\r\\n    padding: 10px;\\r\\n    border-radius: 2px;\\r\\n    box-shadow: 2px 10px 6px -6px rgb(0,0,0,0.2);\\r\\n}\\r\\n\\r\\n.product-date {\\r\\n\\tfont-style: italic;\\r\\n    color: #aca9a9;\\r\\n    padding: 7px 0px;\\r\\n\\r\\n}\\r\\n\\r\\n.product-status {\\r\\n\\tfont-weight: 600;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/LoadingComponent.js":
/*!*********************************!*\
  !*** ./src/LoadingComponent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst LoadingComponent = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n  'div',\n  null,\n  '...'\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingComponent);\n\n//# sourceURL=webpack:///./src/LoadingComponent.js?");

/***/ }),

/***/ "./src/asyncComponent.js":
/*!*******************************!*\
  !*** ./src/asyncComponent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return asyncComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncComponent(importComponent, LoadingComponent) {\n  class AsyncComponent extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n      super(props);\n\n      this.state = {\n        component: null\n      };\n    }\n\n    async componentDidMount() {\n      const { default: component } = await importComponent();\n\n      this.setState({\n        component: component\n      });\n    }\n\n    render() {\n      const C = this.state.component;\n\n      return C ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, this.props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingComponent, null);\n    }\n  }\n\n  return AsyncComponent;\n}\n\n//# sourceURL=webpack:///./src/asyncComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _asyncComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncComponent */ \"./src/asyncComponent.js\");\n/* harmony import */ var _LoadingComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingComponent */ \"./src/LoadingComponent.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/style.css */ \"./assets/style.css\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n// router\n\n// redux\n\n\n/* Import Components */\nconst AsyncProfile = Object(_asyncComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./components/Profile */ \"./src/components/Profile.js\")), _LoadingComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst AsyncProduct = Object(_asyncComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./components/Product */ \"./src/components/Product.js\")), _LoadingComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n\nconst App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n  react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"],\n  null,\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Switch\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], { exact: true, path: '/', component: AsyncProfile }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], { path: '/product/:id', component: AsyncProduct })\n    )\n  )\n);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });