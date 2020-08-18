webpackHotUpdate("main",{

/***/ "./src/redux/reducers/appReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/appReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/redux/actions/types.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar initialState = {\n  repacks: [],\n  repack: {},\n  authenticated: 0,\n  serverUrl: _config__WEBPACK_IMPORTED_MODULE_1__[\"ServerUrl\"],\n  imageUrl: _config__WEBPACK_IMPORTED_MODULE_1__[\"ImageUrl\"],\n  downloadUrl: _config__WEBPACK_IMPORTED_MODULE_1__[\"DownloadUrl\"],\n  searchMode: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_REPACKS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        repacks: action.payload\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_REPACK:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        repack: action.payload\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AUTH_USER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        authenticated: 1\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_SEARCH_MODE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        searchMode: 1\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBwUmVkdWNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzPzQ2ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnXHJcbmltcG9ydCB7IFNlcnZlclVybCwgSW1hZ2VVcmwsIERvd25sb2FkVXJsIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHJlcGFja3MgOiBbXSxcclxuICByZXBhY2s6IHt9LFxyXG4gIGF1dGhlbnRpY2F0ZWQ6IDAsXHJcbiAgc2VydmVyVXJsOiBTZXJ2ZXJVcmwsXHJcbiAgaW1hZ2VVcmw6IEltYWdlVXJsLFxyXG4gIGRvd25sb2FkVXJsOiBEb3dubG9hZFVybCxcclxuICBzZWFyY2hNb2RlOiAwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSAsIGFjdGlvbj17fSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuU0VUX1JFUEFDS1M6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlcGFja3M6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIGNhc2UgdHlwZXMuU0VUX1JFUEFDSzpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVwYWNrOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBjYXNlIHR5cGVzLkFVVEhfVVNFUjpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aGVudGljYXRlZDogMSB9XHJcbiAgICBjYXNlIHR5cGVzLlNFVF9TRUFSQ0hfTU9ERTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoTW9kZTogMSB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers/appReducer.js\n");

/***/ })

})