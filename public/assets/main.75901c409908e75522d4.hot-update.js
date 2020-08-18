webpackHotUpdate("main",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/redux/actions/types.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\n\n\n\nvar axInsRepack = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"ApiUrl\"], \"repack\")\n});\nvar axInsAuth = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"ApiUrl\"], \"auth\")\n});\n\nvar getRepacks = function getRepacks(dispatch) {\n  var keyWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACKS,\n    payload: undefined\n  });\n  axInsRepack.get(\"/\", {\n    params: {\n      keyWord: keyWord\n    }\n  }).then(function (_ref) {\n    var repacks = _ref.data.repacks;\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACKS,\n      payload: repacks\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar getRepack = function getRepack(id, dispatch) {\n  axInsRepack.get(\"/\".concat(id)).then(function (_ref2) {\n    var repack = _ref2.data.repack;\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_REPACK,\n      payload: repack\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar submitRepackData = function submitRepackData(data, dispatch) {\n  axInsRepack.post(\"/\", data, {\n    headers: {\n      'Content-Type': 'multipart/form-data'\n    }\n  }).then(function (res) {\n    if (!res.data.result) return setActionResult(dispatch, {\n      statis: 'error',\n      message: 'Oops, Something went wrong!'\n    });\n    setActionResult(dispatch, {\n      statis: 'success',\n      message: !data.get('id') ? 'Game added successfully!' : 'Change saved successfully!'\n    });\n    return getRepacks(dispatch);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar deleteRepack = function deleteRepack(target, dispatch) {\n  axInsRepack[\"delete\"]('/', {\n    data: {\n      target: target\n    }\n  }).then(function (_ref3) {\n    var result = _ref3.data.result;\n    if (!result) return setActionResult(dispatch, {\n      status: 'error',\n      message: 'Oops, Something went wrong!'\n    });\n    setActionResult(dispatch, {\n      status: 'success',\n      message: 'Deleted successfully!'\n    });\n    return getRepacks(dispatch);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar signIn = function signIn(password, dispatch, cb) {\n  axInsAuth({\n    url: '/signin',\n    method: 'post',\n    data: {\n      password: password\n    }\n  }).then(function (_ref4) {\n    var result = _ref4.data.result;\n    if (!!result) dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].AUTH_USER\n    });\n    return cb(result);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\n\nvar setSearchMode = function setSearchMode(dispatch) {\n  return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_SEARCH_MODE\n  });\n};\n\nvar setActionResult = function setActionResult(dispatch, actionResult) {\n  return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_ACTION_RESULT,\n    payload: actionResult\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getRepack: getRepack,\n  getRepacks: getRepacks,\n  signIn: signIn,\n  submitRepackData: submitRepackData,\n  deleteRepack: deleteRepack,\n  setSearchMode: setSearchMode,\n  setActionResult: setActionResult\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LmpzP2E2NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBBcGlVcmwgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5cclxuY29uc3QgYXhJbnNSZXBhY2sgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke0FwaVVybH1yZXBhY2tgXHJcbn0pXHJcblxyXG5jb25zdCBheEluc0F1dGggPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke0FwaVVybH1hdXRoYFxyXG59KVxyXG5cclxuY29uc3QgZ2V0UmVwYWNrcyA9IChkaXNwYXRjaCwga2V5V29yZCA9IG51bGwpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlNFVF9SRVBBQ0tTLCBwYXlsb2FkOiB1bmRlZmluZWQgfSlcclxuICBheEluc1JlcGFjay5nZXQoYC9gLCB7XHJcbiAgICBwYXJhbXM6IHsga2V5V29yZCB9XHJcbiAgfSlcclxuICAudGhlbiggKHtkYXRhOiB7IHJlcGFja3MgfX0pID0+IGRpc3BhdGNoKHsgdHlwZTogdHlwZS5TRVRfUkVQQUNLUywgcGF5bG9hZDogcmVwYWNrcyB9KSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcbmNvbnN0IGdldFJlcGFjayA9IChpZCwgZGlzcGF0Y2gpID0+IHtcclxuICBheEluc1JlcGFjay5nZXQoYC8ke2lkfWApXHJcbiAgLnRoZW4oICh7ZGF0YTogeyByZXBhY2sgfX0pID0+IGRpc3BhdGNoKHsgdHlwZTogdHlwZS5TRVRfUkVQQUNLLCBwYXlsb2FkOiByZXBhY2sgfSkpXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXRSZXBhY2tEYXRhID0gKGRhdGEsIGRpc3BhdGNoKSA9PiB7XHJcbiAgYXhJbnNSZXBhY2sucG9zdChgL2AsIGRhdGEsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJlcyA9PiB7XHJcbiAgICBpZighcmVzLmRhdGEucmVzdWx0KVxyXG4gICAgICByZXR1cm4gc2V0QWN0aW9uUmVzdWx0KGRpc3BhdGNoLCB7XHJcbiAgICAgICAgc3RhdGlzOiAnZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdPb3BzLCBTb21ldGhpbmcgd2VudCB3cm9uZyEnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgc2V0QWN0aW9uUmVzdWx0KGRpc3BhdGNoLCB7XHJcbiAgICAgIHN0YXRpczogJ3N1Y2Nlc3MnLFxyXG4gICAgICBtZXNzYWdlOiAhZGF0YS5nZXQoJ2lkJykgPyAnR2FtZSBhZGRlZCBzdWNjZXNzZnVsbHkhJyA6ICdDaGFuZ2Ugc2F2ZWQgc3VjY2Vzc2Z1bGx5ISdcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZ2V0UmVwYWNrcyhkaXNwYXRjaClcclxuICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlUmVwYWNrID0gKHRhcmdldCwgZGlzcGF0Y2gpID0+IHtcclxuICBheEluc1JlcGFjay5kZWxldGUoJy8nLCB7IFxyXG4gICAgZGF0YTogeyB0YXJnZXQgfVxyXG4gIH0pXHJcbiAgLnRoZW4oKHsgZGF0YTogeyByZXN1bHQgfSB9KSA9PiB7XHJcbiAgICBpZighcmVzdWx0KVxyXG4gICAgICByZXR1cm4gc2V0QWN0aW9uUmVzdWx0KGRpc3BhdGNoLCB7XHJcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdPb3BzLCBTb21ldGhpbmcgd2VudCB3cm9uZyEnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgc2V0QWN0aW9uUmVzdWx0KGRpc3BhdGNoLCB7XHJcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICBtZXNzYWdlOiAnRGVsZXRlZCBzdWNjZXNzZnVsbHkhJ1xyXG4gICAgfSlcclxuICAgIHJldHVybiBnZXRSZXBhY2tzKGRpc3BhdGNoKVxyXG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCBzaWduSW4gPSAocGFzc3dvcmQsIGRpc3BhdGNoLCBjYikgPT4ge1xyXG4gIGF4SW5zQXV0aCh7XHJcbiAgICB1cmw6ICcvc2lnbmluJyxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgZGF0YTogeyBwYXNzd29yZCB9XHJcbiAgfSkudGhlbiggKHsgZGF0YTogeyByZXN1bHQgfSB9KSA9PiB7XHJcbiAgICBpZighIXJlc3VsdClcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5BVVRIX1VTRVIgfSlcclxuICAgIHJldHVybiBjYihyZXN1bHQpXHJcbiAgfSlcclxuICAuY2F0Y2goIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCBzZXRTZWFyY2hNb2RlID0gZGlzcGF0Y2ggPT4gZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5TRVRfU0VBUkNIX01PREUgfSlcclxuXHJcbmNvbnN0IHNldEFjdGlvblJlc3VsdCA9IChkaXNwYXRjaCwgYWN0aW9uUmVzdWx0KSA9PiBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlNFVF9BQ1RJT05fUkVTVUxULCBwYXlsb2FkOiBhY3Rpb25SZXN1bHQgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRSZXBhY2ssIFxyXG4gIGdldFJlcGFja3MsIFxyXG4gIHNpZ25JbiwgXHJcbiAgc3VibWl0UmVwYWNrRGF0YSwgXHJcbiAgZGVsZXRlUmVwYWNrLCBcclxuICBzZXRTZWFyY2hNb2RlLFxyXG4gIHNldEFjdGlvblJlc3VsdFxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/index.js\n");

/***/ })

})