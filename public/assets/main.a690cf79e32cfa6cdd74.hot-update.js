webpackHotUpdate("main",{

/***/ "./src/components/comps/Utils/ProtectedRoute.js":
/*!******************************************************!*\
  !*** ./src/components/comps/Utils/ProtectedRoute.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar ProtectedRoute = function ProtectedRoute(_ref) {\n  var path = _ref.path,\n      component = _ref.component;\n  var authenticated = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.app.authenticated;\n  });\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"])();\n  if (!authenticated) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n    path: \"/signin\"\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9VdGlscy9Qcm90ZWN0ZWRSb3V0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBzL1V0aWxzL1Byb3RlY3RlZFJvdXRlLmpzPzdiMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcblxyXG5cclxuY29uc3QgUHJvdGVjdGVkUm91dGUgPSAoeyBwYXRoLCBjb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hcHAuYXV0aGVudGljYXRlZClcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcblxyXG4gIGlmKCFhdXRoZW50aWNhdGVkKVxyXG4gICAgcmV0dXJuIDxSZWRpcmVjdCBwYXRoPScvc2lnbmluJyAvPlxyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/comps/Utils/ProtectedRoute.js\n");

/***/ })

})