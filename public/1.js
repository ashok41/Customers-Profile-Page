(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/config */ \"./src/components/utils/config.js\");\n\n\n\n\nclass Product extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = { profile: null };\n\t}\n\n\tcomponentDidMount() {\n\t\treturn axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_utils_config__WEBPACK_IMPORTED_MODULE_2__[\"config\"].baseUrl + 'api/profile').then(res => {\n\t\t\tif (res.status === 200) {\n\t\t\t\tthis.setState({ profile: res.data.orders[this.props.match.params.id] });\n\t\t\t}\n\t\t});\n\t}\n\n\trender() {\n\t\tif (this.state.profile) {\n\t\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'order-details-info' },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'h6',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Order ID:#',\n\t\t\t\t\t\t\tthis.state.profile.id\n\t\t\t\t\t\t),\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'about' },\n\t\t\t\t\t\t\tthis.state.profile.price\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'product-info' },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'profile-img' },\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.state.profile.product.picture })\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tthis.state.profile.product.name\n\t\t\t\t\t\t),\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tthis.state.profile.product.description\n\t\t\t\t\t\t),\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'product-date' },\n\t\t\t\t\t\t\tthis.state.profile.product.orderDate\n\t\t\t\t\t\t),\n\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'product-status' },\n\t\t\t\t\t\t\t\t'Order Status:'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\tthis.state.profile.product.orderStatus\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t} else {\n\t\t\treturn null;\n\t\t}\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\n//# sourceURL=webpack:///./src/components/Product.js?");

/***/ }),

/***/ "./src/components/utils/config.js":
/*!****************************************!*\
  !*** ./src/components/utils/config.js ***!
  \****************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nconst config = {\n\tbaseUrl: 'http://localhost:3000/'\n};\n\n//# sourceURL=webpack:///./src/components/utils/config.js?");

/***/ })

}]);