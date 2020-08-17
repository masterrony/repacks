webpackHotUpdate("main",{

/***/ "./src/components/comps/Menu/index.js":
/*!********************************************!*\
  !*** ./src/components/comps/Menu/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Menu = function Menu() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      collapse = _useState2[0],\n      setCollapse = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isWideEnough = _useState4[0],\n      setIsWideEnough = _useState4[1];\n\n  var onClick = function onClick() {\n    setCollapse(!collapse);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbar\"], {\n    color: \"bg-primary\",\n    fixed: \"top\",\n    dark: true,\n    expand: \"md\",\n    scrolling: true,\n    transparent: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarBrand\"], {\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Repacks\")), !_this.state.isWideEnough && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarToggler\"], {\n    onClick: onClick\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCollapse\"], {\n    isOpen: _this.state.collapse,\n    navbar: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarNav\"], {\n    left: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], {\n    active: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n    to: \"#\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n    to: \"#\"\n  }, \"Link\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n    to: \"#\"\n  }, \"Profile\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9NZW51L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcHMvTWVudS9pbmRleC5qcz9mZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTURCTmF2YmFyLCBNREJOYXZiYXJCcmFuZCwgTURCTmF2YmFyTmF2LCBNREJOYXZiYXJUb2dnbGVyLCBNREJDb2xsYXBzZSwgTURCTmF2SXRlbSwgTURCTmF2TGluaywgTURCQ29udGFpbmVyLCBNREJNYXNrLCBNREJWaWV3IH0gZnJvbSAnbWRicmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NvbGxhcHNlLCBzZXRDb2xsYXBzZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaXNXaWRlRW5vdWdoLCBzZXRJc1dpZGVFbm91Z2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDb2xsYXBzZSghY29sbGFwc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPE1EQk5hdmJhciBjb2xvcj1cImJnLXByaW1hcnlcIiBmaXhlZD1cInRvcFwiIGRhcmsgZXhwYW5kPVwibWRcIiBzY3JvbGxpbmcgdHJhbnNwYXJlbnQ+XHJcbiAgICAgICAgPE1EQk5hdmJhckJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8c3Ryb25nPlJlcGFja3M8L3N0cm9uZz5cclxuICAgICAgICA8L01EQk5hdmJhckJyYW5kPlxyXG4gICAgICAgIHshdGhpcy5zdGF0ZS5pc1dpZGVFbm91Z2ggJiYgPE1EQk5hdmJhclRvZ2dsZXIgb25DbGljaz17b25DbGlja30gLz59XHJcbiAgICAgICAgPE1EQkNvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0gbmF2YmFyPlxyXG4gICAgICAgICAgPE1EQk5hdmJhck5hdiBsZWZ0PlxyXG4gICAgICAgICAgICA8TURCTmF2SXRlbSBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgPE1EQk5hdkxpbmsgdG89XCIjXCI+SG9tZTwvTURCTmF2TGluaz5cclxuICAgICAgICAgICAgPC9NREJOYXZJdGVtPlxyXG4gICAgICAgICAgICA8TURCTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TURCTmF2TGluayB0bz1cIiNcIj5MaW5rPC9NREJOYXZMaW5rPlxyXG4gICAgICAgICAgICA8L01EQk5hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxNREJOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxNREJOYXZMaW5rIHRvPVwiI1wiPlByb2ZpbGU8L01EQk5hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTURCTmF2SXRlbT5cclxuICAgICAgICAgIDwvTURCTmF2YmFyTmF2PlxyXG4gICAgICAgIDwvTURCQ29sbGFwc2U+XHJcbiAgICAgIDwvTURCTmF2YmFyPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Menu/index.js\n");

/***/ })

})