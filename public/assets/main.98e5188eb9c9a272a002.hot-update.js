webpackHotUpdate("main",{

/***/ "./src/components/comps/Products/index.js":
/*!************************************************!*\
  !*** ./src/components/comps/Products/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ \"./src/components/comps/Products/Item.js\");\n/* harmony import */ var _Utils_Notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/Notify */ \"./src/components/comps/Utils/Notify.js\");\n/* harmony import */ var _Utils_Notify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Utils_Notify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nvar Products = function Products() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var repacks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.app.repacks;\n  });\n  var searchMode = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.app.searchMode;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getRepacks(dispatch);\n  }, []);\n\n  var renderRepacks = function renderRepacks() {\n    if (!repacks) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    if (repacks.length < 1) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils_Notify__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"info\",\n      message: \"No games to display\"\n    });\n    return repacks.map(function (repack) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n        key: repack._id\n      }, repack));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"text-center my-5 \".concat(!!searchMode && 'py-3')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"h1-responsive font-weight-bold my-5\"\n  }, \"Explore all repacked games\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"grey-text w-responsive mx-auto mb-5\"\n  }, \"here we have lots of repacked games. please download anything you like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBRow\"], null, renderRepacks())));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9Qcm9kdWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBzL1Byb2R1Y3RzL2luZGV4LmpzPzUyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIE1EQkNvbnRhaW5lcixcclxuICBNREJSb3dcclxufSBmcm9tICdtZGJyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcclxuaW1wb3J0IE5vdGlmeSBmcm9tIFwiLi4vVXRpbHMvTm90aWZ5XCI7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCByZXBhY2tzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXBwLnJlcGFja3MpXHJcbiAgY29uc3Qgc2VhcmNoTW9kZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwcC5zZWFyY2hNb2RlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9ucy5nZXRSZXBhY2tzKGRpc3BhdGNoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCByZW5kZXJSZXBhY2tzID0gKCkgPT4ge1xyXG4gICAgaWYoIXJlcGFja3MpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SXRlbSAvPlxyXG4gICAgICAgIDxJdGVtIC8+XHJcbiAgICAgICAgPEl0ZW0gLz5cclxuICAgICAgICA8SXRlbSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcblxyXG4gICAgaWYocmVwYWNrcy5sZW5ndGggPCAxKVxyXG4gICAgICByZXR1cm4gPE5vdGlmeSBcclxuICAgICAgICB0eXBlPSdpbmZvJ1xyXG4gICAgICAgIG1lc3NhZ2U9J05vIGdhbWVzIHRvIGRpc3BsYXknXHJcbiAgICAgIC8+XHJcbiAgICBcclxuICAgIHJldHVybiByZXBhY2tzLm1hcChyZXBhY2sgPT4gPEl0ZW0ga2V5PXtyZXBhY2suX2lkfSB7Li4ucmVwYWNrfS8+KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNREJDb250YWluZXI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIG15LTUgJHshIXNlYXJjaE1vZGUgJiYgJ3B5LTMnfWB9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2gxLXJlc3BvbnNpdmUgZm9udC13ZWlnaHQtYm9sZCBteS01Jz5FeHBsb3JlIGFsbCByZXBhY2tlZCBnYW1lczwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdncmV5LXRleHQgdy1yZXNwb25zaXZlIG14LWF1dG8gbWItNSc+XHJcbiAgICAgICAgICBoZXJlIHdlIGhhdmUgbG90cyBvZiByZXBhY2tlZCBnYW1lcy4gcGxlYXNlIGRvd25sb2FkIGFueXRoaW5nIHlvdSBsaWtlXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxNREJSb3c+XHJcbiAgICAgICAgICB7cmVuZGVyUmVwYWNrcygpfSAgICAgICAgICBcclxuICAgICAgICA8L01EQlJvdz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9NREJDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Products/index.js\n");

/***/ }),

/***/ "./src/components/comps/Utils/Notify.js":
/*!**********************************************!*\
  !*** ./src/components/comps/Utils/Notify.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9VdGlscy9Ob3RpZnkuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Utils/Notify.js\n");

/***/ })

})