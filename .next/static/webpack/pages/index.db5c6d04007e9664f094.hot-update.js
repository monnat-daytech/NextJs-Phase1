/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cards_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards/counter */ \"./components/Cards/counter.js\");\n/* harmony import */ var _Cards_justSay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards/justSay */ \"./components/Cards/justSay.js\");\n/* harmony import */ var _Cards_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards/timer */ \"./components/Cards/timer.js\");\n/* harmony import */ var _WidgetCards_widgetCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WidgetCards/widgetCounter */ \"./components/WidgetCards/widgetCounter.js\");\n/* harmony import */ var _WidgetCards_widgetJustSay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WidgetCards/widgetJustSay */ \"./components/WidgetCards/widgetJustSay.js\");\n/* harmony import */ var _WidgetCards_widgetTimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WidgetCards/widgetTimer */ \"./components/WidgetCards/widgetTimer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal */ \"./components/modal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/app.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    ShowCard: true,\n    JustSayCard: false,\n    CounterCard: false,\n    TimerCard: false\n  }),\n      widgetShowCards = _useState2[0],\n      setWidgetShowCards = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    JustSay: false,\n    Counter: false\n  }),\n      validate = _useState3[0],\n      setValidate = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    JustSayCode: false,\n    CounterCode: false\n  }),\n      modalCode = _useState4[0],\n      setModalCode = _useState4[1];\n\n  var onClickWidgetCounter = function onClickWidgetCounter() {\n    setModalCode({\n      CounterCode: true\n    });\n    setShowModal(false);\n  };\n\n  var onClickWidgetJustSay = function onClickWidgetJustSay() {\n    setModalCode({\n      JustSayCode: true\n    });\n    setShowModal(false);\n  };\n\n  var onClickAddWidget = function onClickAddWidget() {\n    setShowModal(true);\n  };\n\n  var onClickIconCancle = function onClickIconCancle() {\n    setShowModal(false);\n    setModalCode(false);\n  };\n\n  var onClickBtnAddJustSay = function onClickBtnAddJustSay(input) {\n    if (input.length > 3) {\n      setShowModal(false);\n      setModalCode(false);\n    } else {\n      setValidate({\n        JustSay: true\n      });\n    }\n  };\n\n  var onClickBtnAddCounter = function onClickBtnAddCounter(input) {\n    if (input > 0) {\n      setShowModal(false);\n      setModalCode(false);\n    } else if (input < 0) {\n      setValidate({\n        Counter: 1\n      });\n    } else if (input == 0) {\n      setValidate({\n        Counter: 2\n      });\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    \"class\": \"pt-3\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"mb-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal__WEBPACK_IMPORTED_MODULE_8__.default, {\n        showModal: showModal,\n        onClickIconCancle: onClickIconCancle,\n        modalCode: modalCode,\n        onClickBtnAddJustSay: onClickBtnAddJustSay,\n        onClickBtnAddCounter: onClickBtnAddCounter,\n        validate: validate,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            \"class\": \"text-xl undefined\",\n            children: \" Add widget\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            \"class\": \"flex flex-wrap text-center mt-1.5 -ml-1.5\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              onClick: onClickWidgetJustSay,\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WidgetCards_widgetJustSay__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              onClick: onClickWidgetCounter,\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WidgetCards_widgetCounter__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WidgetCards_widgetTimer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: \"a\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: \"b\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              \"class\": \"w-1/3 pt-1.5 pl-1.5\",\n              children: \"c\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClickAddWidget,\n        \"class\": \"text-white focus:outline-none mr-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n          stroke: \"currentColor\",\n          fill: \"currentColor\",\n          \"stroke-width\": \"0\",\n          viewBox: \"0 0 24 24\",\n          \"class\": \"inline-block text-xl relative -top-0.5\",\n          height: \"1em\",\n          width: \"1em\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              fill: \"none\",\n              d: \"M0 0h24v24H0z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), \"Add Widget\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"class\": \"text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n          stroke: \"currentColor\",\n          fill: \"currentColor\",\n          \"stroke-width\": \"0\",\n          viewBox: \"0 0 24 24\",\n          \"class\": \"inline-block text-xl relative -top-0.5\",\n          height: \"1em\",\n          width: \"1em\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              fill: \"none\",\n              d: \"M0 0h24v24H0z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n              d: \"M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this), \"Setting\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"md:flex md:flex-wrap md:-mr-4 \",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"class\": \"md:inner md:w-1/2 pb-4 md:pr-4\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          \"class\": \"p-5 border-1 bg-white rounded-2xl relative undefined\",\n          children: [widgetShowCards.ShowCard ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n              \"class\": \"text-lg font-bold text-gray-400 mb-1.5\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              \"class\": \"text-center text-gray-400 my-8 font-light\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                \"class\": \"text-4xl mb-2\",\n                children: \"No widgets at all\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 142,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\"Click\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  \"class\": \"font-normal text-blue-400 focus:outline-none\",\n                  children: \"HERE\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 145,\n                  columnNumber: 21\n                }, _this), \"to add a new one\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 143,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true) : null, widgetShowCards.TimerCard ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_justSay__WEBPACK_IMPORTED_MODULE_2__.default, {\n              input: input\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(App, \"YhqYPQ8S+Nc7fvipNWIGfJZxFQ4=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAuanM/YmEwNiJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlNob3dDYXJkIiwiSnVzdFNheUNhcmQiLCJDb3VudGVyQ2FyZCIsIlRpbWVyQ2FyZCIsIndpZGdldFNob3dDYXJkcyIsInNldFdpZGdldFNob3dDYXJkcyIsIkp1c3RTYXkiLCJDb3VudGVyIiwidmFsaWRhdGUiLCJzZXRWYWxpZGF0ZSIsIkp1c3RTYXlDb2RlIiwiQ291bnRlckNvZGUiLCJtb2RhbENvZGUiLCJzZXRNb2RhbENvZGUiLCJvbkNsaWNrV2lkZ2V0Q291bnRlciIsIm9uQ2xpY2tXaWRnZXRKdXN0U2F5Iiwib25DbGlja0FkZFdpZGdldCIsIm9uQ2xpY2tJY29uQ2FuY2xlIiwib25DbGlja0J0bkFkZEp1c3RTYXkiLCJpbnB1dCIsImxlbmd0aCIsIm9uQ2xpY2tCdG5BZGRDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsK0NBQVEsQ0FBQyxLQUFELENBRDFCO0FBQUEsTUFDVEMsU0FEUztBQUFBLE1BQ0VDLFlBREY7O0FBQUEsbUJBRThCRiwrQ0FBUSxDQUFDO0FBQ3JERyxZQUFRLEVBQUUsSUFEMkM7QUFFckRDLGVBQVcsRUFBRSxLQUZ3QztBQUdyREMsZUFBVyxFQUFFLEtBSHdDO0FBSXJEQyxhQUFTLEVBQUU7QUFKMEMsR0FBRCxDQUZ0QztBQUFBLE1BRVRDLGVBRlM7QUFBQSxNQUVRQyxrQkFGUjs7QUFBQSxtQkFRZ0JSLCtDQUFRLENBQUM7QUFDdkNTLFdBQU8sRUFBRSxLQUQ4QjtBQUV2Q0MsV0FBTyxFQUFFO0FBRjhCLEdBQUQsQ0FSeEI7QUFBQSxNQVFUQyxRQVJT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QTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUdELENBMUpEOztHQUFNdkIsRzs7S0FBQUEsRztBQTRKTiwrREFBZUEsR0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4vQ2FyZHMvY291bnRlclwiO1xuaW1wb3J0IEp1c3RTYXkgZnJvbSBcIi4vQ2FyZHMvanVzdFNheVwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL0NhcmRzL3RpbWVyXCI7XG5pbXBvcnQgV2lkZ2V0Q291bnRlciBmcm9tIFwiLi9XaWRnZXRDYXJkcy93aWRnZXRDb3VudGVyXCI7XG5pbXBvcnQgV2lkZ2V0SnVzdFNheSBmcm9tIFwiLi9XaWRnZXRDYXJkcy93aWRnZXRKdXN0U2F5XCI7XG5pbXBvcnQgV2lkZ2V0VGltZXIgZnJvbSBcIi4vV2lkZ2V0Q2FyZHMvd2lkZ2V0VGltZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kYWxcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2lkZ2V0U2hvd0NhcmRzLCBzZXRXaWRnZXRTaG93Q2FyZHNdID0gdXNlU3RhdGUoe1xuICAgIFNob3dDYXJkOiB0cnVlLFxuICAgIEp1c3RTYXlDYXJkOiBmYWxzZSxcbiAgICBDb3VudGVyQ2FyZDogZmFsc2UsXG4gICAgVGltZXJDYXJkOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IFt2YWxpZGF0ZSwgc2V0VmFsaWRhdGVdID0gdXNlU3RhdGUoe1xuICAgIEp1c3RTYXk6IGZhbHNlLFxuICAgIENvdW50ZXI6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgW21vZGFsQ29kZSwgc2V0TW9kYWxDb2RlXSA9IHVzZVN0YXRlKHtcbiAgICBKdXN0U2F5Q29kZTogZmFsc2UsXG4gICAgQ291bnRlckNvZGU6IGZhbHNlLFxuICB9KTtcbiAgY29uc3Qgb25DbGlja1dpZGdldENvdW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxDb2RlKHsgQ291bnRlckNvZGU6IHRydWUgfSk7XG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrV2lkZ2V0SnVzdFNheSA9ICgpID0+IHtcbiAgICBzZXRNb2RhbENvZGUoeyBKdXN0U2F5Q29kZTogdHJ1ZSB9KTtcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tBZGRXaWRnZXQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tJY29uQ2FuY2xlID0gKCkgPT4ge1xuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgc2V0TW9kYWxDb2RlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQnRuQWRkSnVzdFNheSA9IChpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dC5sZW5ndGggPiAzKSB7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgc2V0TW9kYWxDb2RlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsaWRhdGUoeyBKdXN0U2F5OiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQnRuQWRkQ291bnRlciA9IChpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dCA+IDApIHtcbiAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICBzZXRNb2RhbENvZGUoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQgPCAwKSB7XG4gICAgICBzZXRWYWxpZGF0ZSh7IENvdW50ZXI6IDEgfSk7XG4gICAgfSBlbHNlIGlmIChpbnB1dCA9PSAwKSB7XG4gICAgICBzZXRWYWxpZGF0ZSh7IENvdW50ZXI6IDIgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInB0LTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgIG9uQ2xpY2tJY29uQ2FuY2xlPXtvbkNsaWNrSWNvbkNhbmNsZX1cbiAgICAgICAgICBtb2RhbENvZGU9e21vZGFsQ29kZX1cbiAgICAgICAgICBvbkNsaWNrQnRuQWRkSnVzdFNheT17b25DbGlja0J0bkFkZEp1c3RTYXl9XG4gICAgICAgICAgb25DbGlja0J0bkFkZENvdW50ZXI9e29uQ2xpY2tCdG5BZGRDb3VudGVyfVxuICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsIHVuZGVmaW5lZFwiPiBBZGQgd2lkZ2V0PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCB0ZXh0LWNlbnRlciBtdC0xLjUgLW1sLTEuNVwiPlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tXaWRnZXRKdXN0U2F5fSBjbGFzcz1cInctMS8zIHB0LTEuNSBwbC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8V2lkZ2V0SnVzdFNheSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrV2lkZ2V0Q291bnRlcn0gY2xhc3M9XCJ3LTEvMyBwdC0xLjUgcGwtMS41XCI+XG4gICAgICAgICAgICAgICAgPFdpZGdldENvdW50ZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMyBwdC0xLjUgcGwtMS41XCI+XG4gICAgICAgICAgICAgICAgPFdpZGdldFRpbWVyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzMgcHQtMS41IHBsLTEuNVwiPmE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8zIHB0LTEuNSBwbC0xLjVcIj5iPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMyBwdC0xLjUgcGwtMS41XCI+YzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQWRkV2lkZ2V0fVxuICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBweC00IHB5LTEgcm91bmRlZC1tZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgdGV4dC14bCByZWxhdGl2ZSAtdG9wLTAuNVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEgMTFWN2gydjRoNHYyaC00djRoLTJ2LTRIN3YtMmg0em0xIDExQzYuNDc3IDIyIDIgMTcuNTIzIDIgMTJTNi40NzcgMiAxMiAyczEwIDQuNDc3IDEwIDEwLTQuNDc3IDEwLTEwIDEwem0wLTJhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIEFkZCBXaWRnZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBweC00IHB5LTEgcm91bmRlZC1tZCBiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayB0ZXh0LXhsIHJlbGF0aXZlIC10b3AtMC41XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjM0IDE3YTEwLjAxOCAxMC4wMTggMCAwIDEtLjk3OC0yLjMyNiAzIDMgMCAwIDAgLjAwMi01LjM0N0E5Ljk5IDkuOTkgMCAwIDEgNC44NjUgNC45OWEzIDMgMCAwIDAgNC42MzEtMi42NzQgOS45OSA5Ljk5IDAgMCAxIDUuMDA3LjAwMiAzIDMgMCAwIDAgNC42MzIgMi42NzJjLjU3OS41OSAxLjA5MyAxLjI2MSAxLjUyNSAyLjAxLjQzMy43NDkuNzU3IDEuNTMuOTc4IDIuMzI2YTMgMyAwIDAgMC0uMDAyIDUuMzQ3IDkuOTkgOS45OSAwIDAgMS0yLjUwMSA0LjMzNyAzIDMgMCAwIDAtNC42MzEgMi42NzQgOS45OSA5Ljk5IDAgMCAxLTUuMDA3LS4wMDIgMyAzIDAgMCAwLTQuNjMyLTIuNjcyQTEwLjAxOCAxMC4wMTggMCAwIDEgMy4zNCAxN3ptNS42Ni4xOTZhNC45OTMgNC45OTMgMCAwIDEgMi4yNSAyLjc3Yy40OTkuMDQ3IDEgLjA0OCAxLjQ5OS4wMDFBNC45OTMgNC45OTMgMCAwIDEgMTUgMTcuMTk3YTQuOTkzIDQuOTkzIDAgMCAxIDMuNTI1LS41NjVjLjI5LS40MDguNTQtLjg0My43NDgtMS4yOThBNC45OTMgNC45OTMgMCAwIDEgMTggMTJjMC0xLjI2LjQ3LTIuNDM3IDEuMjczLTMuMzM0YTguMTI2IDguMTI2IDAgMCAwLS43NS0xLjI5OEE0Ljk5MyA0Ljk5MyAwIDAgMSAxNSA2LjgwNGE0Ljk5MyA0Ljk5MyAwIDAgMS0yLjI1LTIuNzdjLS40OTktLjA0Ny0xLS4wNDgtMS40OTktLjAwMUE0Ljk5MyA0Ljk5MyAwIDAgMSA5IDYuODAzYTQuOTkzIDQuOTkzIDAgMCAxLTMuNTI1LjU2NSA3Ljk5IDcuOTkgMCAwIDAtLjc0OCAxLjI5OEE0Ljk5MyA0Ljk5MyAwIDAgMSA2IDEyYzAgMS4yNi0uNDcgMi40MzctMS4yNzMgMy4zMzRhOC4xMjYgOC4xMjYgMCAwIDAgLjc1IDEuMjk4QTQuOTkzIDQuOTkzIDAgMCAxIDkgMTcuMTk2ek0xMiAxNWEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6bTAtMmExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIFNldHRpbmdcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IG1kOmZsZXgtd3JhcCBtZDotbXItNCBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOmlubmVyIG1kOnctMS8yIHBiLTQgbWQ6cHItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTUgYm9yZGVyLTEgYmctd2hpdGUgcm91bmRlZC0yeGwgcmVsYXRpdmUgdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICB7d2lkZ2V0U2hvd0NhcmRzLlNob3dDYXJkID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIG1iLTEuNVwiPjwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZ3JheS00MDAgbXktOCBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtNHhsIG1iLTJcIj5ObyB3aWRnZXRzIGF0IGFsbDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7XCJDbGlja1wifVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZm9udC1ub3JtYWwgdGV4dC1ibHVlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBIRVJFXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB0byBhZGQgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHt3aWRnZXRTaG93Q2FyZHMuVGltZXJDYXJkID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxKdXN0U2F5IGlucHV0PXtpbnB1dH0vPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/app.js\n");

/***/ })

});