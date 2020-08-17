webpackHotUpdate("main",{

/***/ "./src/components/comps/Menu/index.js":
/*!********************************************!*\
  !*** ./src/components/comps/Menu/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar FullPageIntroWithFixedTransparentNavbar = /*#__PURE__*/function (_React$Component) {\n  _inherits(FullPageIntroWithFixedTransparentNavbar, _React$Component);\n\n  var _super = _createSuper(FullPageIntroWithFixedTransparentNavbar);\n\n  function FullPageIntroWithFixedTransparentNavbar(props) {\n    var _this;\n\n    _classCallCheck(this, FullPageIntroWithFixedTransparentNavbar);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      collapse: false,\n      isWideEnough: false\n    };\n    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(FullPageIntroWithFixedTransparentNavbar, [{\n    key: \"onClick\",\n    value: function onClick() {\n      this.setState({\n        collapse: !this.state.collapse\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbar\"], {\n        color: \"bg-primary\",\n        fixed: \"top\",\n        dark: true,\n        expand: \"md\",\n        scrolling: true,\n        transparent: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarBrand\"], {\n        href: \"/\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Navbar\")), !this.state.isWideEnough && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarToggler\"], {\n        onClick: this.onClick\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCollapse\"], {\n        isOpen: this.state.collapse,\n        navbar: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavbarNav\"], {\n        left: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], {\n        active: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n        to: \"#\"\n      }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n        to: \"#\"\n      }, \"Link\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBNavLink\"], {\n        to: \"#\"\n      }, \"Profile\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n        src: \"https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBMask\"], {\n        overlay: \"purple-light\",\n        className: \"flex-center flex-column text-white text-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This Navbar is fixed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"It will always stay visible on the top, even when you scroll down\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Navbar's background will switch from transparent to solid color while scrolling down\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Full page intro with background image will be always displayed in full screen mode, regardless of device \")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBContainer\"], {\n        className: \"text-center my-5\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        align: \"justify\"\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"))));\n    }\n  }]);\n\n  return FullPageIntroWithFixedTransparentNavbar;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullPageIntroWithFixedTransparentNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9NZW51L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcHMvTWVudS9pbmRleC5qcz9mZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1EQk5hdmJhciwgTURCTmF2YmFyQnJhbmQsIE1EQk5hdmJhck5hdiwgTURCTmF2YmFyVG9nZ2xlciwgTURCQ29sbGFwc2UsIE1EQk5hdkl0ZW0sIE1EQk5hdkxpbmssIE1EQkNvbnRhaW5lciwgTURCTWFzaywgTURCVmlldyB9IGZyb20gJ21kYnJlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNsYXNzIEZ1bGxQYWdlSW50cm9XaXRoRml4ZWRUcmFuc3BhcmVudE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbGxhcHNlOiBmYWxzZSxcclxuICAgICAgaXNXaWRlRW5vdWdoOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29sbGFwc2U6ICF0aGlzLnN0YXRlLmNvbGxhcHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8Um91dGVyPlxyXG4gICAgICAgICAgICA8TURCTmF2YmFyIGNvbG9yPVwiYmctcHJpbWFyeVwiIGZpeGVkPVwidG9wXCIgZGFyayBleHBhbmQ9XCJtZFwiIHNjcm9sbGluZyB0cmFuc3BhcmVudD5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TmF2YmFyPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9NREJOYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaXNXaWRlRW5vdWdoICYmIDxNREJOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RoaXMub25DbGlja30gLz59XHJcbiAgICAgICAgICAgICAgPE1EQkNvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0gbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhck5hdiBsZWZ0PlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2SXRlbSBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1EQk5hdkxpbmsgdG89XCIjXCI+SG9tZTwvTURCTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9NREJOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TURCTmF2TGluayB0bz1cIiNcIj5MaW5rPC9NREJOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L01EQk5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNREJOYXZMaW5rIHRvPVwiI1wiPlByb2ZpbGU8L01EQk5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTURCTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFyTmF2PlxyXG4gICAgICAgICAgICAgIDwvTURCQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvTURCTmF2YmFyPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcblxyXG4gICAgICAgICAgPE1EQlZpZXcgc3JjPVwiaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL1Bob3Rvcy9PdGhlcnMvaW1nJTIwKDQwKS5qcGdcIj5cclxuICAgICAgICAgICAgPE1EQk1hc2sgb3ZlcmxheT1cInB1cnBsZS1saWdodFwiIGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIGZsZXgtY29sdW1uIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+VGhpcyBOYXZiYXIgaXMgZml4ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxoNT5JdCB3aWxsIGFsd2F5cyBzdGF5IHZpc2libGUgb24gdGhlIHRvcCwgZXZlbiB3aGVuIHlvdSBzY3JvbGwgZG93bjwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+TmF2YmFyJ3MgYmFja2dyb3VuZCB3aWxsIHN3aXRjaCBmcm9tIHRyYW5zcGFyZW50IHRvIHNvbGlkIGNvbG9yIHdoaWxlIHNjcm9sbGluZyBkb3duPC9wPjxiciAvPlxyXG4gICAgICAgICAgICAgIDxwPkZ1bGwgcGFnZSBpbnRybyB3aXRoIGJhY2tncm91bmQgaW1hZ2Ugd2lsbCBiZSBhbHdheXMgZGlzcGxheWVkIGluIGZ1bGwgc2NyZWVuIG1vZGUsIHJlZ2FyZGxlc3Mgb2YgZGV2aWNlIDwvcD5cclxuICAgICAgICAgICAgPC9NREJNYXNrPlxyXG4gICAgICAgICAgPC9NREJWaWV3PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxNREJDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cImp1c3RpZnlcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L3A+XHJcbiAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxQYWdlSW50cm9XaXRoRml4ZWRUcmFuc3BhcmVudE5hdmJhcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUtBOzs7O0FBM0RBO0FBQ0E7QUE2REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Menu/index.js\n");

/***/ })

})