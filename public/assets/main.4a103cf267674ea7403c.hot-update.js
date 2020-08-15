webpackHotUpdate("main",{

/***/ "./src/components/comps/Dashboard/Repacks.js":
/*!***************************************************!*\
  !*** ./src/components/comps/Dashboard/Repacks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ \"./node_modules/@material-ui/icons/ArrowDownward.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"./node_modules/@material-ui/icons/Delete.js\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n/* harmony import */ var _TableSubHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TableSubHeader */ \"./src/components/comps/Dashboard/TableSubHeader.js\");\n/* harmony import */ var _GameFormDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GameFormDialog */ \"./src/components/comps/Dashboard/GameFormDialog.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar isIndeterminate = function isIndeterminate(indeterminate) {\n  return indeterminate;\n};\n\nvar selectableRowsComponentProps = {\n  indeterminate: isIndeterminate\n};\n\nvar Repacks = function Repacks() {\n  var repacks = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"])(function (state) {\n    return state.app.repacks;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      openForm = _useState2[0],\n      setOpenForm = _useState2[1];\n\n  var columns = [{\n    name: \"No\",\n    cell: function cell(row, index) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, index + 1);\n    },\n    width: \"5px\"\n  }, {\n    name: \"Image\",\n    selector: \"image\",\n    cell: function cell(row) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_10__[\"ImageUrl\"], \"/\").concat(row.image)\n      }));\n    },\n    grow: 2,\n    hide: 'sm'\n  }, {\n    name: \"Title\",\n    selector: \"title\",\n    sortable: true\n  }, {\n    name: \"Detail\",\n    selector: \"detail\",\n    sortable: true\n  }, {\n    name: \"Tags\",\n    selector: \"tags\",\n    sortable: true\n  }, {\n    name: \"Companies\",\n    selector: \"companies\",\n    sortable: true\n  }, {\n    name: \"Languages\",\n    selector: \"languages\",\n    sortable: true\n  }, {\n    name: \"Original Size\",\n    selector: \"original_size\",\n    sortable: true\n  }, {\n    name: \"Repacked Size\",\n    selector: \"repacked_size\",\n    sortable: true\n  }, {\n    name: \"Created\",\n    selector: \"date\",\n    sortable: true\n  }, {\n    name: \"Action\",\n    cell: function cell(row) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        color: \"primary\",\n        \"aria-label\": \"edit\",\n        onClick: openGameFormDialog(row)\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        color: \"secondary\",\n        \"aria-label\": \"remove\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null)));\n    }\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _redux_actions__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getRepacks(dispatch);\n  }, []);\n\n  var openGameFormDialog = function openGameFormDialog() {\n    return setOpenForm(true);\n  };\n\n  var closeGameFormDialog = function closeGameFormDialog() {\n    return setOpenForm(false);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    title: \"Games\",\n    columns: columns,\n    data: repacks,\n    keyField: \"_id\",\n    highlightOnHover: true,\n    responsive: true,\n    defaultSortField: \"title\",\n    sortIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, null),\n    pagination: true,\n    subHeader: true,\n    subHeaderComponent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableSubHeader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      onAddBtnClick: openGameFormDialog\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameFormDialog__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    open: openForm,\n    handleClose: closeGameFormDialog\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repacks);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9EYXNoYm9hcmQvUmVwYWNrcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBzL0Rhc2hib2FyZC9SZXBhY2tzLmpzPzNjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgU29ydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEltYWdlVXJsIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgVGFibGVTdWJIZWFkZXIgZnJvbSAnLi9UYWJsZVN1YkhlYWRlcidcclxuaW1wb3J0IEdhbWVGb3JtRGlhbG9nIGZyb20gJy4vR2FtZUZvcm1EaWFsb2cnXHJcblxyXG5cclxuY29uc3QgaXNJbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZSA9PiBpbmRldGVybWluYXRlO1xyXG5jb25zdCBzZWxlY3RhYmxlUm93c0NvbXBvbmVudFByb3BzID0geyBpbmRldGVybWluYXRlOiBpc0luZGV0ZXJtaW5hdGUgfTtcclxuXHJcbmNvbnN0IFJlcGFja3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVwYWNrcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwcC5yZXBhY2tzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFtvcGVuRm9ybSwgc2V0T3BlbkZvcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTm9cIixcclxuICAgICAgY2VsbDogKHJvdywgaW5kZXgpID0+IDxkaXY+e2luZGV4KzF9PC9kaXY+LFxyXG4gICAgICB3aWR0aDogXCI1cHhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJJbWFnZVwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJpbWFnZVwiLFxyXG4gICAgICBjZWxsOiByb3cgPT4gPGRpdj48aW1nIHNyYz17YCR7SW1hZ2VVcmx9LyR7cm93LmltYWdlfWB9IC8+PC9kaXY+LFxyXG4gICAgICBncm93OiAyLFxyXG4gICAgICBoaWRlOiAnc20nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRpdGxlXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcInRpdGxlXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRldGFpbFwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJkZXRhaWxcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgICAgc2VsZWN0b3I6IFwidGFnc1wiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ29tcGFuaWVzXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImNvbXBhbmllc1wiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGFuZ3VhZ2VzXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcImxhbmd1YWdlc1wiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3JpZ2luYWwgU2l6ZVwiLFxyXG4gICAgICBzZWxlY3RvcjogXCJvcmlnaW5hbF9zaXplXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBhY2tlZCBTaXplXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcInJlcGFja2VkX3NpemVcIixcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNyZWF0ZWRcIixcclxuICAgICAgc2VsZWN0b3I6IFwiZGF0ZVwiLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBY3Rpb25cIixcclxuICAgICAgY2VsbDogcm93ID0+IDw+XHJcbiAgICAgICAgPEljb25CdXR0b24gXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJlZGl0XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5HYW1lRm9ybURpYWxvZyhyb3cpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCIgXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwicmVtb3ZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC8+XHJcbiAgICB9XHJcbiAgXTsgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9ucy5nZXRSZXBhY2tzKGRpc3BhdGNoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBvcGVuR2FtZUZvcm1EaWFsb2cgPSAoKSA9PiBzZXRPcGVuRm9ybSh0cnVlKVxyXG5cclxuICBjb25zdCBjbG9zZUdhbWVGb3JtRGlhbG9nID0gKCkgPT4gc2V0T3BlbkZvcm0oZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICB0aXRsZT1cIkdhbWVzXCJcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBkYXRhPXtyZXBhY2tzfVxyXG4gICAgICAgICAga2V5RmllbGQ9XCJfaWRcIlxyXG4gICAgICAgICAgaGlnaGxpZ2h0T25Ib3ZlclxyXG4gICAgICAgICAgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgZGVmYXVsdFNvcnRGaWVsZD1cInRpdGxlXCJcclxuICAgICAgICAgIHNvcnRJY29uPXs8U29ydEljb24gLz59XHJcbiAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICBzdWJIZWFkZXJcclxuICAgICAgICAgIHN1YkhlYWRlckNvbXBvbmVudD17PFRhYmxlU3ViSGVhZGVyIG9uQWRkQnRuQ2xpY2s9e29wZW5HYW1lRm9ybURpYWxvZ30gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8R2FtZUZvcm1EaWFsb2cgb3Blbj17b3BlbkZvcm19IGhhbmRsZUNsb3NlPXtjbG9zZUdhbWVGb3JtRGlhbG9nfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwYWNrc1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBRkE7QUFSQTtBQUZBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBWEE7QUFjQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Dashboard/Repacks.js\n");

/***/ })

})