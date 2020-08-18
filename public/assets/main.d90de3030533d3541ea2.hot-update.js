webpackHotUpdate("main",{

/***/ "./src/components/comps/Products/Item.js":
/*!***********************************************!*\
  !*** ./src/components/comps/Products/Item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\nvar Item = function Item(_ref) {\n  var _id = _ref._id,\n      image = _ref.image,\n      title = _ref.title,\n      detail = _ref.detail,\n      file = _ref.file;\n  var imageUrl = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.app.imageUrl;\n  });\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"])();\n\n  var viewMore = function viewMore() {\n    return history.push(\"/repack/\".concat(_id));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCol\"], {\n    lg: \"4\",\n    md: \"12\",\n    className: \"mb-lg-0 mb-4 my-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBAnimation\"], {\n    type: \"pulse\",\n    reveal: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    to: \"/repack/\".concat(_id)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBView\"], {\n    className: \"overlay rounded z-depth-1 clickable\",\n    waves: true\n  }, !image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"ImageUrl\"]).concat(image),\n    alt: \"\",\n    className: \"img-fluid img-repack-card\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBMask\"], {\n    overlay: \"white-slight\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBCardBody\"], {\n    className: \"pb-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"font-weight-bold my-3\"\n  }, title || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null)), !file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBBtn\"], {\n    color: \"secondary\",\n    rounded: true,\n    size: \"sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__[\"DownloadUrl\"]).concat(file),\n    className: \"text-white text-decoration-none\"\n  }, \"Download\")), !_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__[\"MDBBtn\"], {\n    color: \"purple\",\n    size: \"sm\",\n    onClick: viewMore\n  }, \"View more\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9Qcm9kdWN0cy9JdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcHMvUHJvZHVjdHMvSXRlbS5qcz9hNTI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgTURCQ29sLFxyXG4gIE1EQk1hc2ssXHJcbiAgTURCQW5pbWF0aW9uLFxyXG4gIE1EQkJ0bixcclxuICBNREJWaWV3LFxyXG4gIE1EQkNhcmRCb2R5XHJcbn0gZnJvbSAnbWRicmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IERvd25sb2FkVXJsLCBJbWFnZVVybCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEl0ZW0gPSAoeyBfaWQsIGltYWdlLCB0aXRsZSwgZGV0YWlsLCBmaWxlIH0pID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwcC5pbWFnZVVybClcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcbiAgXHJcbiAgY29uc3Qgdmlld01vcmUgPSAoKSA9PiBoaXN0b3J5LnB1c2goIGAvcmVwYWNrLyR7X2lkfWApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TURCQ29sIGxnPVwiNFwiIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJtYi1sZy0wIG1iLTQgbXktNFwiPlxyXG4gICAgICA8TURCQW5pbWF0aW9uIHR5cGU9XCJwdWxzZVwiIHJldmVhbD5cclxuICAgICAgICA8TGluayB0bz17YC9yZXBhY2svJHtfaWR9YH0+XHJcbiAgICAgICAgICA8TURCVmlldyBjbGFzc05hbWU9XCJvdmVybGF5IHJvdW5kZWQgei1kZXB0aC0xIGNsaWNrYWJsZVwiIHdhdmVzPiAgICAgIFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFpbWFnZSA/IDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJbWFnZVVybH0ke2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJlcGFjay1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPE1EQk1hc2sgb3ZlcmxheT1cIndoaXRlLXNsaWdodFwiIC8+XHJcbiAgICAgICAgICA8L01EQlZpZXc+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxNREJDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBteS0zXCI+e3RpdGxlIHx8IDxTa2VsZXRvbi8+fTwvaDQ+XHJcbiAgICAgICAgICB7ICFmaWxlID8gPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDogPE1EQkJ0biBjb2xvcj0nc2Vjb25kYXJ5JyByb3VuZGVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7RG93bmxvYWRVcmx9JHtmaWxlfWB9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5Eb3dubG9hZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsgIV9pZCA/IDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgOiA8TURCQnRuIGNvbG9yPVwicHVycGxlXCIgc2l6ZT1cInNtXCIgb25DbGljaz17dmlld01vcmV9PlZpZXcgbW9yZTwvTURCQnRuPn1cclxuICAgICAgICA8L01EQkNhcmRCb2R5PlxyXG4gICAgICA8L01EQkFuaW1hdGlvbj5cclxuICAgIDwvTURCQ29sPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/comps/Products/Item.js\n");

/***/ })

})