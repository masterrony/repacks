webpackHotUpdate("main",{

/***/ "./src/components/comps/Products/Item.js":
/*!***********************************************!*\
  !*** ./src/components/comps/Products/Item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\nvar Item = function Item(_ref) {\n  var _id = _ref._id,\n      image = _ref.image,\n      title = _ref.title,\n      detail = _ref.detail,\n      file = _ref.file;\n  var imageUrl = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.app.imageUrl;\n  });\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"])();\n\n  var viewMore = function viewMore() {\n    return history.push(\"/repack/\".concat(_id));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCol\"], {\n    lg: \"4\",\n    md: \"12\",\n    className: \"mb-lg-0 mb-4 my-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBAnimation\"], {\n    type: \"pulse\",\n    reveal: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"/repack/\".concat(_id)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    className: \"overlay rounded z-depth-1 clickable\",\n    waves: true\n  }, !image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"ImageUrl\"]).concat(image),\n    alt: \"\",\n    className: \"img-fluid img-repack-card\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBMask\"], {\n    overlay: \"white-slight\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCardBody\"], {\n    className: \"pb-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"font-weight-bold my-3\"\n  }, title || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null)), !file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBBtn\"], {\n    color: \"secondary\",\n    rounded: true,\n    size: \"sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"DownloadUrl\"]).concat(file),\n    className: \"text-white text-decoration-none\"\n  }, \"Download\")), !_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBBtn\"], {\n    color: \"purple\",\n    size: \"sm\",\n    onClick: viewMore\n  }, \"View more\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9Qcm9kdWN0cy9JdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcHMvUHJvZHVjdHMvSXRlbS5qcz9hNTI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgTURCQ29sLFxyXG4gIE1EQk1hc2ssXHJcbiAgTURCQW5pbWF0aW9uLFxyXG4gIE1EQkJ0bixcclxuICBNREJWaWV3LFxyXG4gIE1EQkNhcmRCb2R5XHJcbn0gZnJvbSAnbWRicmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERvd25sb2FkVXJsLCBJbWFnZVVybCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBJdGVtID0gKHsgX2lkLCBpbWFnZSwgdGl0bGUsIGRldGFpbCwgZmlsZSB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hcHAuaW1hZ2VVcmwpXHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxyXG4gIFxyXG4gIGNvbnN0IHZpZXdNb3JlID0gKCkgPT4gaGlzdG9yeS5wdXNoKCBgL3JlcGFjay8ke19pZH1gKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1EQkNvbCBsZz1cIjRcIiBtZD1cIjEyXCIgY2xhc3NOYW1lPVwibWItbGctMCBtYi00IG15LTRcIj5cclxuICAgICAgPE1EQkFuaW1hdGlvbiB0eXBlPVwicHVsc2VcIiByZXZlYWw+XHJcbiAgICAgICAgPExpbmsgdG89e2AvcmVwYWNrLyR7X2lkfWB9PlxyXG4gICAgICAgICAgPE1EQlZpZXcgY2xhc3NOYW1lPVwib3ZlcmxheSByb3VuZGVkIHotZGVwdGgtMSBjbGlja2FibGVcIiB3YXZlcz4gICAgICBcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhaW1hZ2UgPyA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDogPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SW1hZ2VVcmx9JHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yZXBhY2stY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxNREJNYXNrIG92ZXJsYXk9XCJ3aGl0ZS1zbGlnaHRcIiAvPlxyXG4gICAgICAgICAgPC9NREJWaWV3PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TURCQ2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbXktM1wiPnt0aXRsZSB8fCA8U2tlbGV0b24vPn08L2g0PlxyXG4gICAgICAgICAgeyAhZmlsZSA/IDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA6IDxNREJCdG4gY29sb3I9J3NlY29uZGFyeScgcm91bmRlZCBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake0Rvd25sb2FkVXJsfSR7ZmlsZX1gfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+RG93bmxvYWQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NREJCdG4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7ICFfaWQgPyA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgICAgIDogPE1EQkJ0biBjb2xvcj1cInB1cnBsZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e3ZpZXdNb3JlfT5WaWV3IG1vcmU8L01EQkJ0bj59XHJcbiAgICAgICAgPC9NREJDYXJkQm9keT5cclxuICAgICAgPC9NREJBbmltYXRpb24+XHJcbiAgICA8L01EQkNvbD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW0iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/comps/Products/Item.js\n");

/***/ })

})