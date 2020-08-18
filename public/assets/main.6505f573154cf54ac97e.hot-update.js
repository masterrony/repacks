webpackHotUpdate("main",{

/***/ "./src/components/comps/Utils/PopupNotify.js":
/*!***************************************************!*\
  !*** ./src/components/comps/Utils/PopupNotify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\n\n\nvar PopupNotify = function PopupNotify(_ref) {\n  var open = _ref.open,\n      handleClose = _ref.handleClose,\n      _ref$actionResult = _ref.actionResult,\n      success = _ref$actionResult.success,\n      message = _ref$actionResult.message;\n  var severity = 'error';\n  var content = 'Oops, something went wrong!';\n\n  if (!!success) {\n    severity = 'success';\n    content = message;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Snackbar\"], {\n    open: open,\n    autoHideDuration: 3000,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    elevation: 6,\n    variant: \"filled\",\n    onClose: handleClose,\n    severity: severity\n  }, content));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupNotify);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9VdGlscy9Qb3B1cE5vdGlmeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBzL1V0aWxzL1BvcHVwTm90aWZ5LmpzP2JiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCdcclxuXHJcblxyXG5cclxuY29uc3QgUG9wdXBOb3RpZnkgPSAoeyBvcGVuLCBoYW5kbGVDbG9zZSwgYWN0aW9uUmVzdWx0OiB7IHN1Y2Nlc3MsIG1lc3NhZ2UgfSB9KSA9PiB7XHJcbiAgbGV0IHNldmVyaXR5ID0gJ2Vycm9yJ1xyXG4gIGxldCBjb250ZW50ID0gJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nISdcclxuXHJcbiAgaWYoISFzdWNjZXNzKSB7XHJcbiAgICBzZXZlcml0eSA9ICdzdWNjZXNzJ1xyXG4gICAgY29udGVudCA9IG1lc3NhZ2VcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U25hY2tiYXJcclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9e3NldmVyaXR5fT5cclxuICAgICAgICB7Y29udGVudH1cclxuICAgICAgPC9BbGVydD5cclxuICAgIDwvU25hY2tiYXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cE5vdGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/comps/Utils/PopupNotify.js\n");

/***/ })

})