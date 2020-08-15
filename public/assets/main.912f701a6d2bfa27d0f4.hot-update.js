webpackHotUpdate("main",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/redux/actions/types.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\n\n\n\nvar axInsRepack = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"ApiUrl\"], \"repack\"),\n  timeout: 10000\n});\nvar axInsAuth = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"ApiUrl\"], \"auth\"),\n  timeout: 10000\n});\n\nvar getRepacks = function getRepacks(dispatch) {\n  axInsRepack.get('/').then(function (_ref) {\n    var repacks = _ref.data.repacks;\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACKS,\n      payload: repacks\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar getRepack = function getRepack(id, dispatch) {\n  axInsRepack.get(\"/\".concat(id)).then(function (_ref2) {\n    var repack = _ref2.data.repack;\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACK,\n      payload: repack\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar submitRepackData = function submitRepackData(data, dispatch) {\n  console.log(data);\n  axInsRepack.post(\"/\", data).then(function (res) {\n    console.log(res);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar deleteRepack = function deleteRepack(target, dispatch) {\n  axInsRepack.delete('/', {\n    target: target\n  }).then(function (res) {\n    console.log(res);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar signIn = function signIn(password, dispatch, cb) {\n  axInsAuth({\n    url: '/signin',\n    method: 'post',\n    data: {\n      password: password\n    }\n  }).then(function (_ref3) {\n    var result = _ref3.data.result;\n    if (!!result) dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AUTH_USER\n    });\n    return cb(result);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getRepack: getRepack,\n  getRepacks: getRepacks,\n  signIn: signIn,\n  submitRepackData: submitRepackData,\n  deleteRepack: deleteRepack\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LmpzP2E2NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBBcGlVcmwgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5cclxuY29uc3QgYXhJbnNSZXBhY2sgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke0FwaVVybH1yZXBhY2tgLFxyXG4gIHRpbWVvdXQ6IDEwMDAwXHJcbn0pXHJcblxyXG5jb25zdCBheEluc0F1dGggPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke0FwaVVybH1hdXRoYCxcclxuICB0aW1lb3V0OiAxMDAwMFxyXG59KVxyXG5cclxuY29uc3QgZ2V0UmVwYWNrcyA9IGRpc3BhdGNoID0+IHtcclxuICBheEluc1JlcGFjay5nZXQoJy8nKVxyXG4gIC50aGVuKCAoe2RhdGE6IHsgcmVwYWNrcyB9fSkgPT4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlLlNFVF9SRVBBQ0tTLCBwYXlsb2FkOiByZXBhY2tzIH0pKVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuY29uc3QgZ2V0UmVwYWNrID0gKGlkLCBkaXNwYXRjaCkgPT4ge1xyXG4gIGF4SW5zUmVwYWNrLmdldChgLyR7aWR9YClcclxuICAudGhlbiggKHtkYXRhOiB7IHJlcGFjayB9fSkgPT4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlLlNFVF9SRVBBQ0ssIHBheWxvYWQ6IHJlcGFjayB9KSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdFJlcGFja0RhdGEgPSAoZGF0YSwgZGlzcGF0Y2gpID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIGF4SW5zUmVwYWNrLnBvc3QoYC9gLCBkYXRhKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVJlcGFjayA9ICh0YXJnZXQsIGRpc3BhdGNoKSA9PiB7XHJcbiAgYXhJbnNSZXBhY2suZGVsZXRlKCcvJywgeyB0YXJnZXQgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCBzaWduSW4gPSAocGFzc3dvcmQsIGRpc3BhdGNoLCBjYikgPT4ge1xyXG4gIGF4SW5zQXV0aCh7XHJcbiAgICB1cmw6ICcvc2lnbmluJyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgZGF0YTogeyBwYXNzd29yZCB9XHJcbiAgfSkudGhlbiggKHsgZGF0YTogeyByZXN1bHQgfSB9KSA9PiB7XHJcbiAgICBpZighIXJlc3VsdClcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BVVRIX1VTRVIgfSlcclxuICAgIHJldHVybiBjYihyZXN1bHQpXHJcbiAgfSlcclxuICAuY2F0Y2goIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0UmVwYWNrLCBnZXRSZXBhY2tzLCBzaWduSW4sIHN1Ym1pdFJlcGFja0RhdGEsIGRlbGV0ZVJlcGFja1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/index.js\n");

/***/ })

})