webpackHotUpdate("main",{

/***/ "./src/components/comps/Dashboard/Repacks.js":
/*!***************************************************!*\
  !*** ./src/components/comps/Dashboard/Repacks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ \"./node_modules/@material-ui/icons/ArrowDownward.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"./node_modules/@material-ui/icons/Delete.js\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n/* harmony import */ var _TableSubHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableSubHeader */ \"./src/components/comps/Dashboard/TableSubHeader.js\");\n/* harmony import */ var _GameFormDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GameFormDialog */ \"./src/components/comps/Dashboard/GameFormDialog.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar columns = [{\n  name: \"No\",\n  cell: function cell(row, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, index + 1);\n  },\n  width: \"5px\"\n}, {\n  name: \"Image\",\n  selector: \"iamge\",\n  sortable: true,\n  cell: function cell(row) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_10__[\"ImageUrl\"], \"/\").concat(row.image)\n    }));\n  },\n  grow: 2,\n  hide: 'sm'\n}, {\n  name: \"Title\",\n  selector: \"title\",\n  sortable: true\n}, {\n  name: \"Detail\",\n  selector: \"detail\",\n  sortable: true\n}, {\n  name: \"Tags\",\n  selector: \"tags\",\n  sortable: true\n}, {\n  name: \"Companies\",\n  selector: \"companies\",\n  sortable: true\n}, {\n  name: \"Languages\",\n  selector: \"languages\",\n  sortable: true\n}, {\n  name: \"Original Size\",\n  selector: \"original_size\",\n  sortable: true\n}, {\n  name: \"Repacked Size\",\n  selector: \"repacked_size\",\n  sortable: true\n}, {\n  name: \"Created\",\n  selector: \"date\",\n  sortable: true\n}, {\n  name: \"Action\",\n  cell: function cell(row) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      color: \"primary\",\n      \"aria-label\": \"edit\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      color: \"secondary\",\n      \"aria-label\": \"remove\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null)));\n  }\n}];\n\nvar isIndeterminate = function isIndeterminate(indeterminate) {\n  return indeterminate;\n};\n\nvar selectableRowsComponentProps = {\n  indeterminate: isIndeterminate\n};\n\nvar Repacks = function Repacks() {\n  var repacks = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"])(function (state) {\n    return state.app.repacks;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      openForm = _useState2[0],\n      setOpenForm = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _redux_actions__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getRepacks(dispatch);\n  }, []);\n\n  var openGameFormDialog = function openGameFormDialog() {\n    return setOpenForm(true);\n  };\n\n  var closeGameFormDialog = function closeGameFormDialog() {\n    return setOpenForm(false);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    title: \"Games\",\n    columns: columns,\n    data: repacks,\n    keyField: \"_id\",\n    highlightOnHover: true,\n    responsive: true,\n    defaultSortField: \"title\",\n    sortIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, null),\n    pagination: true,\n    selectableRowsComponent: _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    selectableRowsComponentProps: selectableRowsComponentProps,\n    subHeader: true,\n    subHeaderComponent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableSubHeader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      onAddBtnClick: openGameFormDialog\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameFormDialog__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    open: openForm,\n    onClose: closeGameFormDialog\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repacks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9EYXNoYm9hcmQvUmVwYWNrcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBzL0Rhc2hib2FyZC9SZXBhY2tzLmpzPzNjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgU29ydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEltYWdlVXJsIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgVGFibGVTdWJIZWFkZXIgZnJvbSAnLi9UYWJsZVN1YkhlYWRlcidcclxuaW1wb3J0IEdhbWVGb3JtRGlhbG9nIGZyb20gJy4vR2FtZUZvcm1EaWFsb2cnXHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiTm9cIixcclxuICAgIGNlbGw6IChyb3csIGluZGV4KSA9PiA8ZGl2PntpbmRleCsxfTwvZGl2PixcclxuICAgIHdpZHRoOiBcIjVweFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkltYWdlXCIsXHJcbiAgICBzZWxlY3RvcjogXCJpYW1nZVwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgICBjZWxsOiByb3cgPT4gPGRpdj48aW1nIHNyYz17YCR7SW1hZ2VVcmx9LyR7cm93LmltYWdlfWB9IC8+PC9kaXY+LFxyXG4gICAgZ3JvdzogMixcclxuICAgIGhpZGU6ICdzbSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGl0bGVcIixcclxuICAgIHNlbGVjdG9yOiBcInRpdGxlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXRhaWxcIixcclxuICAgIHNlbGVjdG9yOiBcImRldGFpbFwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIHNlbGVjdG9yOiBcInRhZ3NcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb21wYW5pZXNcIixcclxuICAgIHNlbGVjdG9yOiBcImNvbXBhbmllc1wiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhbmd1YWdlc1wiLFxyXG4gICAgc2VsZWN0b3I6IFwibGFuZ3VhZ2VzXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiT3JpZ2luYWwgU2l6ZVwiLFxyXG4gICAgc2VsZWN0b3I6IFwib3JpZ2luYWxfc2l6ZVwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlcGFja2VkIFNpemVcIixcclxuICAgIHNlbGVjdG9yOiBcInJlcGFja2VkX3NpemVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDcmVhdGVkXCIsXHJcbiAgICBzZWxlY3RvcjogXCJkYXRlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBY3Rpb25cIixcclxuICAgIGNlbGw6IHJvdyA9PiA8PlxyXG4gICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiZWRpdFwiPjxFZGl0SWNvbiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgPEljb25CdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsPVwicmVtb3ZlXCI+PERlbGV0ZUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBpc0luZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlID0+IGluZGV0ZXJtaW5hdGU7XHJcbmNvbnN0IHNlbGVjdGFibGVSb3dzQ29tcG9uZW50UHJvcHMgPSB7IGluZGV0ZXJtaW5hdGU6IGlzSW5kZXRlcm1pbmF0ZSB9O1xyXG5cclxuY29uc3QgUmVwYWNrcyA9ICgpID0+IHtcclxuICBjb25zdCByZXBhY2tzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXBwLnJlcGFja3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW29wZW5Gb3JtLCBzZXRPcGVuRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnMuZ2V0UmVwYWNrcyhkaXNwYXRjaClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgb3BlbkdhbWVGb3JtRGlhbG9nID0gKCkgPT4gc2V0T3BlbkZvcm0odHJ1ZSlcclxuXHJcbiAgY29uc3QgY2xvc2VHYW1lRm9ybURpYWxvZyA9ICgpID0+IHNldE9wZW5Gb3JtKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgdGl0bGU9XCJHYW1lc1wiXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17cmVwYWNrc31cclxuICAgICAgICAgIGtleUZpZWxkPVwiX2lkXCJcclxuICAgICAgICAgIGhpZ2hsaWdodE9uSG92ZXJcclxuICAgICAgICAgIHJlc3BvbnNpdmVcclxuICAgICAgICAgIGRlZmF1bHRTb3J0RmllbGQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBzb3J0SWNvbj17PFNvcnRJY29uIC8+fVxyXG4gICAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgICAgc2VsZWN0YWJsZVJvd3NDb21wb25lbnQ9e0NoZWNrYm94fVxyXG4gICAgICAgICAgc2VsZWN0YWJsZVJvd3NDb21wb25lbnRQcm9wcz17c2VsZWN0YWJsZVJvd3NDb21wb25lbnRQcm9wc31cclxuICAgICAgICAgIHN1YkhlYWRlclxyXG4gICAgICAgICAgc3ViSGVhZGVyQ29tcG9uZW50PXs8VGFibGVTdWJIZWFkZXIgb25BZGRCdG5DbGljaz17b3BlbkdhbWVGb3JtRGlhbG9nfSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxHYW1lRm9ybURpYWxvZyBvcGVuPXtvcGVuRm9ybX0gb25DbG9zZT17Y2xvc2VHYW1lRm9ybURpYWxvZ30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGFja3NcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/comps/Dashboard/Repacks.js\n");

/***/ })

})