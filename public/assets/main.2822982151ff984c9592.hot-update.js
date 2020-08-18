webpackHotUpdate("main",{

/***/ "./src/components/comps/Utils/RowDetail.js":
/*!*************************************************!*\
  !*** ./src/components/comps/Utils/RowDetail.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: theme.spacing(4)\n    },\n    bold: {\n      fontWeight: 'bold'\n    },\n    leftPadding: {\n      paddingLeft: theme.spacing(1)\n    }\n  };\n});\n\nvar RowDetail = function RowDetail(_ref) {\n  var _ref$data = _ref.data,\n      tags = _ref$data.tags,\n      companies = _ref$data.companies,\n      languages = _ref$data.languages,\n      detail = _ref$data.detail;\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"subtitle2\",\n    gutterBottom: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.bold\n  }, \"Detail:\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    className: classes.leftPadding,\n    gutterBottom: true\n  }, detail), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    gutterBottom: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.bold\n  }, \"Tags: \"), tags, \",\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.bold\n  }, \" Companies: \"), companies, \",\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.bold\n  }, \" Languages: \"), languages, \",\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RowDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9VdGlscy9Sb3dEZXRhaWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21wcy9VdGlscy9Sb3dEZXRhaWwuanM/NzAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIENvbnRhaW5lciwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNClcclxuICB9LFxyXG4gIGJvbGQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gIH0sXHJcbiAgbGVmdFBhZGRpbmc6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgfVxyXG59KSlcclxuXHJcblxyXG5cclxuY29uc3QgUm93RGV0YWlsID0gKHsgZGF0YTogeyB0YWdzLCBjb21wYW5pZXMsIGxhbmd1YWdlcywgZGV0YWlsIH0gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIFxyXG4gIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkfT5EZXRhaWw6PC9zcGFuPlxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRQYWRkaW5nfSBndXR0ZXJCb3R0b20+XHJcbiAgICAgIHtkZXRhaWx9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkfT5UYWdzOiA8L3NwYW4+e3RhZ3N9LCBcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGR9PiBDb21wYW5pZXM6IDwvc3Bhbj57Y29tcGFuaWVzfSxcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGR9PiBMYW5ndWFnZXM6IDwvc3Bhbj57bGFuZ3VhZ2VzfSxcclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICA8L0NvbnRhaW5lcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93RGV0YWlsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBUEE7QUFBQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Utils/RowDetail.js\n");

/***/ })

})