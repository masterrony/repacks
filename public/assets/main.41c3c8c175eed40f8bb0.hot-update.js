webpackHotUpdate("main",{

/***/ "./src/components/comps/Dashboard/GameForm.js":
/*!****************************************************!*\
  !*** ./src/components/comps/Dashboard/GameForm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_icons_GamesOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GamesOutlined */ \"./node_modules/@material-ui/icons/GamesOutlined.js\");\n/* harmony import */ var _material_ui_icons_GamesOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GamesOutlined__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(function (theme) {\n  return {\n    paper: {\n      marginTop: theme.spacing(2),\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    avatar: {\n      margin: theme.spacing(1),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: '100%',\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(3)\n    },\n    submit: {\n      margin: theme.spacing(3, 0, 2)\n    },\n    input: {\n      display: 'none'\n    },\n    label: {\n      width: '100%'\n    }\n  };\n});\nfunction GameForm(_ref) {\n  var target = _ref.target;\n  var classes = useStyles();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"useDispatch\"])();\n\n  if (!target) {\n    target = {\n      _id: null,\n      title: '',\n      tags: '',\n      companies: '',\n      languages: '',\n      detail: '',\n      original_size: ''\n    };\n  }\n\n  var onFormSubmit = function onFormSubmit(data) {\n    var formData = new FormData();\n    formData.append('title', data.title);\n    formData.append('tags', data.tags);\n    formData.append('companies', data.companies);\n    formData.append('languages', data.languages);\n    formData.append('original_size', data.original_size);\n    formData.append('detail', data.detail);\n    formData.append('image', data.image[0]);\n    formData.append('file', data.file[0]);\n    return _redux_actions__WEBPACK_IMPORTED_MODULE_12__[\"default\"].submitRepackData(formData, dispatch);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.paper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.avatar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GamesOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Please specify data\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: classes.form,\n    noValidate: true,\n    onSubmit: handleSubmit(onFormSubmit)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    id: \"id\",\n    autoComplete: \"id\",\n    defaultValue: target._id,\n    ref: register\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    container: true,\n    spacing: 2\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    autoComplete: \"title\",\n    name: \"title\",\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"title\",\n    label: \"Title\",\n    autoFocus: true,\n    defaultValue: target.title,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"tags\",\n    label: \"Tags\",\n    name: \"tags\",\n    autoComplete: \"tags\",\n    defaultValue: target.tags,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    id: \"companies\",\n    label: \"Companies\",\n    name: \"companies\",\n    autoComplete: \"companies\",\n    defaultValue: target.companies,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    name: \"languages\",\n    label: \"Languages\",\n    id: \"languages\",\n    autoComplete: \"languages\",\n    defaultValue: target.languages,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    name: \"original_size\",\n    label: \"Original Size\",\n    id: \"original_size\",\n    autoComplete: \"original_size\",\n    defaultValue: target.original_size,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"outlined\",\n    required: true,\n    fullWidth: true,\n    multiline: true,\n    name: \"detail\",\n    id: \"detail\",\n    label: \"Detail\",\n    defaultValue: target.detail,\n    inputRef: register({\n      required: true\n    })\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    accept: \"image/*\",\n    className: classes.input,\n    id: \"image\",\n    type: \"file\",\n    name: \"image\",\n    defaultValue: target.tags,\n    ref: register({\n      required: !target._id\n    })\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"image\",\n    className: classes.label\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    component: \"span\",\n    fullWidth: true\n  }, \"Select Image\")), errors.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"body2\",\n    color: \"secondary\",\n    className: classes.label\n  }, \"You must upload a screenshot image\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    accept: \"\",\n    className: classes.input,\n    id: \"file\",\n    type: \"file\",\n    name: \"file\",\n    ref: register({\n      required: !target._id\n    })\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"file\",\n    className: classes.label\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    component: \"span\",\n    fullWidth: true\n  }, \"Select File\")), errors.file && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"body2\",\n    color: \"secondary\",\n    className: classes.label\n  }, \"You must upload the repacked game\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"secondary\",\n    className: classes.submit\n  }, \"Confirm\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wcy9EYXNoYm9hcmQvR2FtZUZvcm0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21wcy9EYXNoYm9hcmQvR2FtZUZvcm0uanM/N2JjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcidcclxuaW1wb3J0IEdhbWVPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dhbWVzT3V0bGluZWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMnXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gIH0sXHJcbiAgbGFiZWw6IHtcclxuICAgIHdpZHRoOiAnMTAwJSdcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVGb3JtKHsgdGFyZ2V0IH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICBpZighdGFyZ2V0KSB7XHJcbiAgICB0YXJnZXQgPSB7XHJcbiAgICAgIF9pZDogbnVsbCxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICB0YWdzOiAnJyxcclxuICAgICAgY29tcGFuaWVzOiAnJyxcclxuICAgICAgbGFuZ3VhZ2VzOiAnJyxcclxuICAgICAgZGV0YWlsOiAnJyxcclxuICAgICAgb3JpZ2luYWxfc2l6ZTogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IGRhdGEgPT4ge1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCBkYXRhLnRpdGxlKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCd0YWdzJywgZGF0YS50YWdzKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb21wYW5pZXMnLCBkYXRhLmNvbXBhbmllcylcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbGFuZ3VhZ2VzJywgZGF0YS5sYW5ndWFnZXMpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ29yaWdpbmFsX3NpemUnLCBkYXRhLm9yaWdpbmFsX3NpemUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2RldGFpbCcsIGRhdGEuZGV0YWlsKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGRhdGEuaW1hZ2VbMF0pXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkYXRhLmZpbGVbMF0pXHJcbiAgICBcclxuICAgIHJldHVybiBhY3Rpb25zLnN1Ym1pdFJlcGFja0RhdGEoZm9ybURhdGEsIGRpc3BhdGNoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgPEdhbWVPdXRsaW5lZEljb24gLz5cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgUGxlYXNlIHNwZWNpZnkgZGF0YVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uRm9ybVN1Ym1pdCl9PlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCIgXHJcbiAgICAgICAgICAgIG5hbWU9XCJpZFwiIFxyXG4gICAgICAgICAgICBpZD1cImlkXCIgXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImlkXCIgXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFyZ2V0Ll9pZH0gXHJcbiAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhcmdldC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIHsgZXJyb3JzLnRpdGxlICYmIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+VGl0bGUgaXMgcmVxdWlyZWQgZGF0YTwvVHlwb2dyYXBoeT4gfSAqL31cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlkPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhcmdldC50YWdzfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogeyBlcnJvcnMudGFncyAmJiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInNlY29uZGFyeVwiPlRhZ3MgaXMgcmVxdWlyZWQgZGF0YTwvVHlwb2dyYXBoeT4gfSAqL31cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlkPVwiY29tcGFuaWVzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcGFuaWVzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW5pZXNcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY29tcGFuaWVzXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFyZ2V0LmNvbXBhbmllc31cclxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIHsgZXJyb3JzLmNvbXBhbmllcyAmJiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInNlY29uZGFyeVwiPkNvbXBhbmllcyBpcyByZXF1aXJlZCBkYXRhPC9UeXBvZ3JhcGh5PiB9ICovfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxhbmd1YWdlc1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImxhbmd1YWdlc1wiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJsYW5ndWFnZXNcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YXJnZXQubGFuZ3VhZ2VzfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogeyBlcnJvcnMubGFuZ3VhZ2VzICYmIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+TGFuZ3VhZ2VzIGlzIHJlcXVpcmVkIGRhdGE8L1R5cG9ncmFwaHk+IH0gKi99XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JpZ2luYWxfc2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIFNpemVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvcmlnaW5hbF9zaXplXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9yaWdpbmFsX3NpemVcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0YXJnZXQub3JpZ2luYWxfc2l6ZX1cclxuICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIHsgZXJyb3JzLm9yaWdpbmFsX3NpemUgJiYgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5PcmlnbmFsIFNpemUgaXMgcmVxdWlyZWQgZGF0YTwvVHlwb2dyYXBoeT4gfSAqL31cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRldGFpbFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhcmdldC5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiB7IGVycm9ycy5kZXRhaWwgJiYgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5EZXRhaWwgaXMgcmVxdWlyZWQgZGF0YTwvVHlwb2dyYXBoeT4gfSAqL31cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhcmdldC50YWdzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiAhdGFyZ2V0Ll9pZCB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTZWxlY3QgSW1hZ2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBlcnJvcnMuaW1hZ2UgJiYgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PllvdSBtdXN0IHVwbG9hZCBhIHNjcmVlbnNob3QgaW1hZ2U8L1R5cG9ncmFwaHk+IH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6ICF0YXJnZXQuX2lkIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2VsZWN0IEZpbGVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgeyBlcnJvcnMuZmlsZSAmJiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+WW91IG11c3QgdXBsb2FkIHRoZSByZXBhY2tlZCBnYW1lPC9UeXBvZ3JhcGh5PiB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFyQkE7QUFBQTtBQTBCQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVZBO0FBY0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/comps/Dashboard/GameForm.js\n");

/***/ })

})