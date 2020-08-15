webpackHotUpdate("main",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/redux/actions/types.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\n\n\nvar axIns = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"ServerUrl\"], \"/api/repack\"),\n  timeout: 10000\n});\n\nvar getRepacks = function getRepacks(dispatch) {\n  axIns.get('/').then(function (res) {\n    console.log(res);\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACKS,\n      payload: res.repacks\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar getRepack = function getRepack(id) {\n  axIns.get(\"/\".concat(id)).then(function (res) {\n    console.log(res);\n    return function (dispatch) {\n      return dispatch({\n        type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACK,\n        payload: res.repack\n      });\n    };\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getRepack: getRepack,\n  getRepacks: getRepacks\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LmpzP2E2NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBTZXJ2ZXJVcmwgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcblxyXG5jb25zdCBheElucyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7U2VydmVyVXJsfS9hcGkvcmVwYWNrYCxcclxuICB0aW1lb3V0OiAxMDAwMFxyXG59KVxyXG5cclxubGV0IGdldFJlcGFja3MgPSBkaXNwYXRjaCA9PiB7XHJcbiAgYXhJbnMuZ2V0KCcvJylcclxuICAudGhlbihyZXMgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogdHlwZS5TRVRfUkVQQUNLUywgcGF5bG9hZDogcmVzLnJlcGFja3MgfSlcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxubGV0IGdldFJlcGFjayA9IGlkID0+IHtcclxuICBheElucy5nZXQoYC8ke2lkfWApXHJcbiAgLnRoZW4ocmVzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiBkaXNwYXRjaCh7IHR5cGU6IHR5cGUuU0VUX1JFUEFDSywgcGF5bG9hZDogcmVzLnJlcGFjayB9KVxyXG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0UmVwYWNrLCBnZXRSZXBhY2tzXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/index.js\n");

/***/ })

})