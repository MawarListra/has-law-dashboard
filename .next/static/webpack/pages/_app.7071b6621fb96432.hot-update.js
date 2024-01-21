"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/navigation/content-with-nav.tsx":
/*!***************************************************************!*\
  !*** ./src/components/layout/navigation/content-with-nav.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_OffCanvasOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/OffCanvasOverlay */ \"./src/components/ui/OffCanvasOverlay/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-app-nav */ \"./src/hooks/use-app-nav.tsx\");\n/* harmony import */ var _hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/use-check-mobile-screen */ \"./src/hooks/use-check-mobile-screen.tsx\");\n/* harmony import */ var _components_ui_Icons_keyboard_backspace_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/Icons/keyboard-backspace-icon */ \"./src/components/ui/Icons/keyboard-backspace-icon.tsx\");\n/* harmony import */ var _components_ui_Icons_menu_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/Icons/menu-icon */ \"./src/components/ui/Icons/menu-icon.tsx\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation */ \"./src/components/layout/navigation/navigation.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ContentWithNav(props) {\n    var _session_user, _session;\n    _s();\n    const { children } = props;\n    const { parentPath } = (0,_hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    let path = parentPath.split(\"/\");\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const { isParentPath, desktopHeaderName, mobileHeaderName, NextRouter } = (0,_hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const isMobile = (0,_hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [toogleSidebar, setToogleSidebar] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex h-screen gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-72 translate-x-0 bg-white sidebar:absolute sidebar:inset-y-0 sidebar:left-0 sidebar:z-20 \".concat(!toogleSidebar ? \"sidebar:-translate-x-full\" : \"sidebar:shadow-[0_0_0_10000px_rgba(0,0,0,.50)]\", \" sidebar:transform sidebar:overflow-y-auto sidebar:bg-[#f7f8fa] sidebar:transition sidebar:duration-200 sidebar:ease-out\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8 flex h-20 flex-row items-center justify-center px-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/site/logo.png\",\n                            alt: \"logo\",\n                            width: 100,\n                            height: 100,\n                            // className=\"mx-auto\"\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        onMobileNav: ()=>{\n                            if (isMobile) {\n                                setTimeout(()=>{\n                                    setToogleSidebar(false);\n                                }, 250);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen min-w-0 flex-1 text-ui-gray-blue-60 md:pr-2\",\n                children: [\n                    !path.includes(\"point-of-sales\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"flex h-20 flex-row items-center gap-4 border-b-2 border-solid border-ui-gray-blue-90\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-4 flex text-ui-gray-blue-80 md:hidden\",\n                                children: !isParentPath ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>NextRouter.back(),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Icons_keyboard_backspace_icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Icon Button\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>setToogleSidebar(true),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Icons_menu_icon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Icon Button\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:ml-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-lg\",\n                                    children: isMobile ? mobileHeaderName : desktopHeaderName\n                                }, void 0, false, {\n                                    fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-4 flex-grow items-center justify-end text-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: ((_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.role) == \"admin\" ? \"Super Admin\" : \"Karyawan\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"mx-4 h-full pb-4 md:mx-0\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_OffCanvasOverlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                disabledBackground: true,\n                active: toogleSidebar,\n                onClick: ()=>setToogleSidebar(false)\n            }, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/components/layout/navigation/content-with-nav.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ContentWithNav, \"uaP7tkgfNrjE7JbWrBFXjWJ85ps=\", false, function() {\n    return [\n        _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = ContentWithNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentWithNav);\nvar _c;\n$RefreshReg$(_c, \"ContentWithNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbmF2aWdhdGlvbi9jb250ZW50LXdpdGgtbmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUVpQztBQUNuQjtBQUVEO0FBQ2dCO0FBRXNCO0FBQzNCO0FBRWpCO0FBT3RDLFNBQVNTLGVBQWVDLEtBQVk7UUFzRm5CQyxlQUFBQTs7SUFyRmYsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Y7SUFDckIsTUFBTSxFQUFFRyxVQUFVLEVBQUUsR0FBR1QsOERBQVNBO0lBQ2hDLElBQUlVLE9BQU9ELFdBQVdFLEtBQUssQ0FBQztJQUU1QixNQUFNLEVBQUVDLE1BQU1MLE9BQU8sRUFBRSxHQUFHUiwyREFBVUE7SUFDcEMsTUFBTSxFQUFFYyxZQUFZLEVBQUVDLGlCQUFpQixFQUFFQyxnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFLEdBQ3JFaEIsOERBQVNBO0lBQ1gsTUFBTWlCLFdBQVdoQiwwRUFBYUE7SUFFOUIsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUd2QixxREFBYyxDQUFDO0lBQ3pELHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNDQyxXQUFXLHVHQUlWLE9BSEMsQ0FBQ0osZ0JBQ0csOEJBQ0Esa0RBQ0w7O2tDQUdELDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3pCLG1EQUFLQTs0QkFDSjBCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1Isc0JBQXNCOzRCQUN0QkMsUUFBUTs7Ozs7Ozs7Ozs7a0NBZ0JaLDhEQUFDdkIsbURBQVVBO3dCQUNUd0IsYUFBYTs0QkFDWCxJQUFJWCxVQUFVO2dDQUNaWSxXQUFXO29DQUNUVixpQkFBaUI7Z0NBQ25CLEdBQUc7NEJBQ0w7d0JBQ0Y7Ozs7Ozs7Ozs7OzswQkFLSiw4REFBQ0U7Z0JBQUlDLFdBQVU7O29CQUNaLENBQUNaLEtBQUtvQixRQUFRLENBQUMsbUNBQ2QsOERBQUNDO3dCQUFPVCxXQUFVOzswQ0FDaEIsOERBQUNVO2dDQUFLVixXQUFVOzBDQUNiLENBQUNULDZCQUNBLDhEQUFDb0I7b0NBQU9DLE1BQUs7b0NBQVNDLFNBQVMsSUFBTW5CLFdBQVdvQixJQUFJOztzREFDbEQsOERBQUNsQyxvRkFBcUJBOzs7OztzREFDdEIsOERBQUM4Qjs0Q0FBS1YsV0FBVTtzREFBVTs7Ozs7Ozs7Ozs7eURBRzVCLDhEQUFDVztvQ0FBT0MsTUFBSztvQ0FBU0MsU0FBUyxJQUFNaEIsaUJBQWlCOztzREFDcEQsOERBQUNoQixzRUFBUUE7Ozs7O3NEQUNULDhEQUFDNkI7NENBQUtWLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUloQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNlO29DQUFHZixXQUFVOzhDQUNYTCxXQUFXRixtQkFBbUJEOzs7Ozs7Ozs7OzswQ0FRbkMsOERBQUNPO2dDQUNDQyxXQUFZOzBDQUVaLDRFQUFDZTs4Q0FDRTlCLEVBQUFBLFdBQUFBLHFCQUFBQSxnQ0FBQUEsZ0JBQUFBLFNBQVMrQixJQUFJLGNBQWIvQixvQ0FBQUEsY0FBZWdDLElBQUksS0FBSSxVQUFVLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzFELDhEQUFDQzt3QkFBS2xCLFdBQVU7a0NBQTRCZDs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ1YsdUVBQWdCQTtnQkFDZjJDLGtCQUFrQjtnQkFDbEJDLFFBQVF4QjtnQkFDUmlCLFNBQVMsSUFBTWhCLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FBSXhDO0dBdEdTZDs7UUFFZ0JMLDBEQUFTQTtRQUdORCx1REFBVUE7UUFFbENDLDBEQUFTQTtRQUNNQyxzRUFBYUE7OztLQVJ2Qkk7QUF3R1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L25hdmlnYXRpb24vY29udGVudC13aXRoLW5hdi50c3g/OTFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IE9mZkNhbnZhc092ZXJsYXkgZnJvbSBcIkAvY29tcG9uZW50cy91aS9PZmZDYW52YXNPdmVybGF5XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5pbXBvcnQgdXNlQXBwTmF2IGZyb20gXCJAL2hvb2tzL3VzZS1hcHAtbmF2XCI7XG5pbXBvcnQgdXNlUmVzcG9uc2l2ZSBmcm9tIFwiQC9ob29rcy91c2UtY2hlY2stbW9iaWxlLXNjcmVlblwiO1xuXG5pbXBvcnQgS2V5Ym9hcmRCYWNrc3BhY2VJY29uIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvSWNvbnMva2V5Ym9hcmQtYmFja3NwYWNlLWljb25cIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQC9jb21wb25lbnRzL3VpL0ljb25zL21lbnUtaWNvblwiO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gQ29udGVudFdpdGhOYXYocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCB7IHBhcmVudFBhdGggfSA9IHVzZUFwcE5hdigpO1xuICBsZXQgcGF0aCA9IHBhcmVudFBhdGguc3BsaXQoXCIvXCIpO1xuXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IGlzUGFyZW50UGF0aCwgZGVza3RvcEhlYWRlck5hbWUsIG1vYmlsZUhlYWRlck5hbWUsIE5leHRSb3V0ZXIgfSA9XG4gICAgdXNlQXBwTmF2KCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlUmVzcG9uc2l2ZSgpO1xuXG4gIGNvbnN0IFt0b29nbGVTaWRlYmFyLCBzZXRUb29nbGVTaWRlYmFyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1zY3JlZW4gZ2FwLTRcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy03MiB0cmFuc2xhdGUteC0wIGJnLXdoaXRlIHNpZGViYXI6YWJzb2x1dGUgc2lkZWJhcjppbnNldC15LTAgc2lkZWJhcjpsZWZ0LTAgc2lkZWJhcjp6LTIwICR7XG4gICAgICAgICAgIXRvb2dsZVNpZGViYXJcbiAgICAgICAgICAgID8gXCJzaWRlYmFyOi10cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgICAgIDogXCJzaWRlYmFyOnNoYWRvdy1bMF8wXzBfMTAwMDBweF9yZ2JhKDAsMCwwLC41MCldXCJcbiAgICAgICAgfSBzaWRlYmFyOnRyYW5zZm9ybSBzaWRlYmFyOm92ZXJmbG93LXktYXV0byBzaWRlYmFyOmJnLVsjZjdmOGZhXSBzaWRlYmFyOnRyYW5zaXRpb24gc2lkZWJhcjpkdXJhdGlvbi0yMDAgc2lkZWJhcjplYXNlLW91dGB9XG4gICAgICA+XG4gICAgICAgIHsvKiBTSURFQkFSICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggZmxleCBoLTIwIGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NpdGUvbG9nby5wbmdcIlxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJteC1hdXRvXCJcbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiM2QjdBOTlcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhBUyBMQVdcbiAgICAgICAgICA8L3NwYW4+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgIG9uTW9iaWxlTmF2PXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VG9vZ2xlU2lkZWJhcihmYWxzZSk7XG4gICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTUFJTiBDT05URU5UICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBtaW4tdy0wIGZsZXgtMSB0ZXh0LXVpLWdyYXktYmx1ZS02MCBtZDpwci0yXCI+XG4gICAgICAgIHshcGF0aC5pbmNsdWRlcyhcInBvaW50LW9mLXNhbGVzXCIpICYmIChcbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaC0yMCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyLWItMiBib3JkZXItc29saWQgYm9yZGVyLXVpLWdyYXktYmx1ZS05MFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCBmbGV4IHRleHQtdWktZ3JheS1ibHVlLTgwIG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICB7IWlzUGFyZW50UGF0aCA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBOZXh0Um91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRCYWNrc3BhY2VJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+SWNvbiBCdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0VG9vZ2xlU2lkZWJhcih0cnVlKX0+XG4gICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5JY29uIEJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWwtNFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IG1vYmlsZUhlYWRlck5hbWUgOiBkZXNrdG9wSGVhZGVyTmFtZX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgey8qIHtpc01vYmlsZSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC11aS1ncmF5LWJsdWUtNzBcIj5cbiAgICAgICAgICAgICAgICBTVUJUSVRMRSBURVNUXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTQgZmxleC1ncm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LXJpZ2h0YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIHtzZXNzaW9uPy51c2VyPy5yb2xlID09IFwiYWRtaW5cIiA/IFwiU3VwZXIgQWRtaW5cIiA6IFwiS2FyeWF3YW5cIn1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJteC00IGgtZnVsbCBwYi00IG1kOm14LTBcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBPVkVSTEFZIFNBQVQgU0RFQkFSIFRFUkJVS0EgKE1PQklMRSBPTkxZKSAqL31cbiAgICAgIDxPZmZDYW52YXNPdmVybGF5XG4gICAgICAgIGRpc2FibGVkQmFja2dyb3VuZFxuICAgICAgICBhY3RpdmU9e3Rvb2dsZVNpZGViYXJ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvb2dsZVNpZGViYXIoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFdpdGhOYXY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIk9mZkNhbnZhc092ZXJsYXkiLCJ1c2VTZXNzaW9uIiwidXNlQXBwTmF2IiwidXNlUmVzcG9uc2l2ZSIsIktleWJvYXJkQmFja3NwYWNlSWNvbiIsIk1lbnVJY29uIiwiTmF2aWdhdGlvbiIsIkNvbnRlbnRXaXRoTmF2IiwicHJvcHMiLCJzZXNzaW9uIiwiY2hpbGRyZW4iLCJwYXJlbnRQYXRoIiwicGF0aCIsInNwbGl0IiwiZGF0YSIsImlzUGFyZW50UGF0aCIsImRlc2t0b3BIZWFkZXJOYW1lIiwibW9iaWxlSGVhZGVyTmFtZSIsIk5leHRSb3V0ZXIiLCJpc01vYmlsZSIsInRvb2dsZVNpZGViYXIiLCJzZXRUb29nbGVTaWRlYmFyIiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5Iiwib25Nb2JpbGVOYXYiLCJzZXRUaW1lb3V0IiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJzcGFuIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJiYWNrIiwiaDEiLCJ1c2VyIiwicm9sZSIsIm1haW4iLCJkaXNhYmxlZEJhY2tncm91bmQiLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/navigation/content-with-nav.tsx\n"));

/***/ })

});