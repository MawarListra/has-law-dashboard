"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/main-services/[...addEdit]",{

/***/ "./src/pages/admin/main-services/[...addEdit].tsx":
/*!********************************************************!*\
  !*** ./src/pages/admin/main-services/[...addEdit].tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_admin_main_services_add_edit_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pages/admin/main-services/add-edit-content */ \"./src/components/pages/admin/main-services/add-edit-content.tsx\");\n/* harmony import */ var _components_pages_admin_main_services_all_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pages/admin/main-services/all-services */ \"./src/components/pages/admin/main-services/all-services.tsx\");\n/* harmony import */ var _components_pages_admin_main_services_add_edit_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/pages/admin/main-services/add-edit-services */ \"./src/components/pages/admin/main-services/add-edit-services.tsx\");\n/* harmony import */ var _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/use-app-nav */ \"./src/hooks/use-app-nav.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import { getServerSession } from \"next-auth/next\";\n// import { authOptions } from \"@/pages/api/auth/[...nextauth]\";\n\n\n\n\n\n// import type { GetServerSideProps } from \"next\";\nfunction AddEditMainServicesProtectedPage() {\n    var _query_addEdit, _query, _query1, _session;\n    _s();\n    const { NextRouter } = (0,_hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const [mainServicesId, setMainServicesId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [servicesId, setServicesId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const type = (_query = query) === null || _query === void 0 ? void 0 : (_query_addEdit = _query.addEdit) === null || _query_addEdit === void 0 ? void 0 : _query_addEdit[0];\n    const slug = ((_query1 = query) === null || _query1 === void 0 ? void 0 : _query1.addEdit) || [];\n    if (status === \"loading\") return null;\n    if (status === \"unauthenticated\") {\n        NextRouter.replace(\"/login\");\n        return null;\n    }\n    if (status === \"authenticated\" && ((_session = session) === null || _session === void 0 ? void 0 : _session.user.role) !== \"admin\") {\n        NextRouter.replace(\"/karyawan\");\n        return null;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (type === \"services-all\") {\n            setMainServicesId(slug[1]);\n        }\n        if (type === \"services-add\" || type === \"services-edit\") {\n            setServicesId(slug[1]);\n        }\n    }, [\n        type\n    ]);\n    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        console.log(\"cek here type\", type);\n        if (type === \"add\" || type === \"edit\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_add_edit_content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 50,\n                columnNumber: 14\n            }, this);\n        } else if (type === \"services-all\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_all_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                main_services_id: mainServicesId\n            }, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 52,\n                columnNumber: 14\n            }, this);\n        } else if (type === \"services-add\" || type === \"services-edit\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_add_edit_services__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                main_services_id: mainServicesId,\n                services_id: servicesId\n            }, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this);\n        }\n    }, [\n        type,\n        mainServicesId,\n        servicesId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Has Law | Main Services\"\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Has Law | Main Services\"\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            renderContent\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(AddEditMainServicesProtectedPage, \"e+x8ZkUL7IqdwBU5vweg+OdHd+c=\", false, function() {\n    return [\n        _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = AddEditMainServicesProtectedPage;\n// export const getServerSideProps: GetServerSideProps = async (ctx) => {\n//   ctx.res.setHeader(\n//     \"Cache-Control\",\n//     \"public, s-maxage=1800, stale-while-revalidate=86400\"\n//   );\n//   const session = await getServerSession(ctx.req, ctx.res, authOptions);\n//   if (!session) {\n//     return {\n//       redirect: {\n//         destination: \"/login\",\n//         permanent: false,\n//       },\n//     };\n//   }\n//   if (session.user.role !== \"admin\") {\n//     return {\n//       redirect: {\n//         destination: \"/karyawan/list-pengajuan\",\n//         permanent: false,\n//       },\n//     };\n//   }\n//   return {\n//     props: {},\n//   };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddEditMainServicesProtectedPage);\nvar _c;\n$RefreshReg$(_c, \"AddEditMainServicesProtectedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRtaW4vbWFpbi1zZXJ2aWNlcy9bLi4uYWRkRWRpdF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQy9CO0FBQ2dCO0FBQzdDLHFEQUFxRDtBQUNyRCxnRUFBZ0U7QUFFMEI7QUFDWjtBQUNTO0FBRTNDO0FBQ0o7QUFFeEMsa0RBQWtEO0FBRWxELFNBQVNXO1FBT01DLGdCQUFBQSxRQUNBQSxTQVNxQkM7O0lBaEJsQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCw4REFBU0E7SUFDaEMsTUFBTSxFQUFFTSxNQUFNRixPQUFPLEVBQUVHLE1BQU0sRUFBRSxHQUFHWCwyREFBVUE7SUFDNUMsTUFBTSxFQUFFTyxLQUFLLEVBQUUsR0FBR0Ysc0RBQVNBO0lBQzNCLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDZ0IsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTWtCLFFBQU9ULFNBQUFBLG1CQUFBQSw4QkFBQUEsaUJBQUFBLE9BQU9VLE9BQU8sY0FBZFYscUNBQUFBLGNBQWdCLENBQUMsRUFBRTtJQUNoQyxNQUFNVyxPQUFPWCxFQUFBQSxVQUFBQSxtQkFBQUEsOEJBQUFBLFFBQU9VLE9BQU8sS0FBSSxFQUFFO0lBRWpDLElBQUlOLFdBQVcsV0FBVyxPQUFPO0lBRWpDLElBQUlBLFdBQVcsbUJBQW1CO1FBQ2hDRixXQUFXVSxPQUFPLENBQUM7UUFDbkIsT0FBTztJQUNUO0lBRUEsSUFBSVIsV0FBVyxtQkFBbUJILEVBQUFBLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU1ksSUFBSSxDQUFDQyxJQUFJLE1BQUssU0FBUztRQUNoRVosV0FBV1UsT0FBTyxDQUFDO1FBQ25CLE9BQU87SUFDVDtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDUixJQUFJb0IsU0FBUyxnQkFBZ0I7WUFDM0JILGtCQUFrQkssSUFBSSxDQUFDLEVBQUU7UUFDM0I7UUFDQSxJQUFJRixTQUFTLGtCQUFrQkEsU0FBUyxpQkFBaUI7WUFDdkRELGNBQWNHLElBQUksQ0FBQyxFQUFFO1FBQ3ZCO0lBQ0YsR0FBRztRQUFDRjtLQUFLO0lBRVQsTUFBTU0sZ0JBQWdCekIsOENBQU9BLENBQUM7UUFDNUIwQixRQUFRQyxHQUFHLENBQUMsaUJBQWlCUjtRQUM3QixJQUFJQSxTQUFTLFNBQVNBLFNBQVMsUUFBUTtZQUNyQyxxQkFBTyw4REFBQ2YsOEZBQW1CQTs7Ozs7UUFDN0IsT0FBTyxJQUFJZSxTQUFTLGdCQUFnQjtZQUNsQyxxQkFBTyw4REFBQ2QsMEZBQVdBO2dCQUFDdUIsa0JBQWtCYjs7Ozs7O1FBQ3hDLE9BQU8sSUFBSUksU0FBUyxrQkFBa0JBLFNBQVMsaUJBQWlCO1lBQzlELHFCQUNFLDhEQUFDYiwrRkFBZUE7Z0JBQ2RzQixrQkFBa0JiO2dCQUNsQmMsYUFBYVo7Ozs7OztRQUduQjtJQUNGLEdBQUc7UUFBQ0U7UUFBTUo7UUFBZ0JFO0tBQVc7SUFFckMscUJBQ0UsOERBQUNuQix1REFBYzs7MEJBQ2IsOERBQUNJLGtEQUFJQTs7a0NBQ0gsOERBQUM2QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7O1lBR2xDVDs7Ozs7OztBQUdQO0dBekRTaEI7O1FBQ2dCRiwwREFBU0E7UUFDRUosdURBQVVBO1FBQzFCSyxrREFBU0E7OztLQUhwQkM7QUEyRFQseUVBQXlFO0FBQ3pFLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsNERBQTREO0FBQzVELE9BQU87QUFFUCwyRUFBMkU7QUFFM0Usb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixXQUFXO0FBQ1gsU0FBUztBQUNULE1BQU07QUFFTix5Q0FBeUM7QUFDekMsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixtREFBbUQ7QUFDbkQsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsTUFBTTtBQUVOLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsZ0NBQWdDQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZG1pbi9tYWluLXNlcnZpY2VzL1suLi5hZGRFZGl0XS50c3g/MWIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbi8vIGltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbi8vIGltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5pbXBvcnQgQWRkRWRpdE1haW5TZXJ2aWNlcyBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL2FkbWluL21haW4tc2VydmljZXMvYWRkLWVkaXQtY29udGVudFwiO1xuaW1wb3J0IEFsbFNlcnZpY2VzIGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vbWFpbi1zZXJ2aWNlcy9hbGwtc2VydmljZXNcIjtcbmltcG9ydCBBZGRFZGl0U2VydmljZXMgZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi9tYWluLXNlcnZpY2VzL2FkZC1lZGl0LXNlcnZpY2VzXCI7XG5cbmltcG9ydCB1c2VBcHBOYXYgZnJvbSBcIkAvaG9va3MvdXNlLWFwcC1uYXZcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBpbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmZ1bmN0aW9uIEFkZEVkaXRNYWluU2VydmljZXNQcm90ZWN0ZWRQYWdlKCkge1xuICBjb25zdCB7IE5leHRSb3V0ZXIgfSA9IHVzZUFwcE5hdigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21haW5TZXJ2aWNlc0lkLCBzZXRNYWluU2VydmljZXNJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlcnZpY2VzSWQsIHNldFNlcnZpY2VzSWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgdHlwZSA9IHF1ZXJ5Py5hZGRFZGl0Py5bMF07XG4gIGNvbnN0IHNsdWcgPSBxdWVyeT8uYWRkRWRpdCB8fCBbXTtcblxuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgIE5leHRSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiICYmIHNlc3Npb24/LnVzZXIucm9sZSAhPT0gXCJhZG1pblwiKSB7XG4gICAgTmV4dFJvdXRlci5yZXBsYWNlKFwiL2thcnlhd2FuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gXCJzZXJ2aWNlcy1hbGxcIikge1xuICAgICAgc2V0TWFpblNlcnZpY2VzSWQoc2x1Z1sxXSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInNlcnZpY2VzLWFkZFwiIHx8IHR5cGUgPT09IFwic2VydmljZXMtZWRpdFwiKSB7XG4gICAgICBzZXRTZXJ2aWNlc0lkKHNsdWdbMV0pO1xuICAgIH1cbiAgfSwgW3R5cGVdKTtcblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjZWsgaGVyZSB0eXBlXCIsIHR5cGUpO1xuICAgIGlmICh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICByZXR1cm4gPEFkZEVkaXRNYWluU2VydmljZXMgLz47XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNlcnZpY2VzLWFsbFwiKSB7XG4gICAgICByZXR1cm4gPEFsbFNlcnZpY2VzIG1haW5fc2VydmljZXNfaWQ9e21haW5TZXJ2aWNlc0lkfSAvPjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2VydmljZXMtYWRkXCIgfHwgdHlwZSA9PT0gXCJzZXJ2aWNlcy1lZGl0XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBZGRFZGl0U2VydmljZXNcbiAgICAgICAgICBtYWluX3NlcnZpY2VzX2lkPXttYWluU2VydmljZXNJZH1cbiAgICAgICAgICBzZXJ2aWNlc19pZD17c2VydmljZXNJZH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9LCBbdHlwZSwgbWFpblNlcnZpY2VzSWQsIHNlcnZpY2VzSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFzIExhdyB8IE1haW4gU2VydmljZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGFzIExhdyB8IE1haW4gU2VydmljZXNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7cmVuZGVyQ29udGVudH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4vLyAgIGN0eC5yZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQ2FjaGUtQ29udHJvbFwiLFxuLy8gICAgIFwicHVibGljLCBzLW1heGFnZT0xODAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTg2NDAwXCJcbi8vICAgKTtcblxuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihjdHgucmVxLCBjdHgucmVzLCBhdXRoT3B0aW9ucyk7XG5cbi8vICAgaWYgKCFzZXNzaW9uKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHJlZGlyZWN0OiB7XG4vLyAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuLy8gICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgaWYgKHNlc3Npb24udXNlci5yb2xlICE9PSBcImFkbWluXCIpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcmVkaXJlY3Q6IHtcbi8vICAgICAgICAgZGVzdGluYXRpb246IFwiL2thcnlhd2FuL2xpc3QtcGVuZ2FqdWFuXCIsXG4vLyAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7fSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEVkaXRNYWluU2VydmljZXNQcm90ZWN0ZWRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiSGVhZCIsInVzZVNlc3Npb24iLCJBZGRFZGl0TWFpblNlcnZpY2VzIiwiQWxsU2VydmljZXMiLCJBZGRFZGl0U2VydmljZXMiLCJ1c2VBcHBOYXYiLCJ1c2VSb3V0ZXIiLCJBZGRFZGl0TWFpblNlcnZpY2VzUHJvdGVjdGVkUGFnZSIsInF1ZXJ5Iiwic2Vzc2lvbiIsIk5leHRSb3V0ZXIiLCJkYXRhIiwic3RhdHVzIiwibWFpblNlcnZpY2VzSWQiLCJzZXRNYWluU2VydmljZXNJZCIsInNlcnZpY2VzSWQiLCJzZXRTZXJ2aWNlc0lkIiwidHlwZSIsImFkZEVkaXQiLCJzbHVnIiwicmVwbGFjZSIsInVzZXIiLCJyb2xlIiwicmVuZGVyQ29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJtYWluX3NlcnZpY2VzX2lkIiwic2VydmljZXNfaWQiLCJGcmFnbWVudCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/admin/main-services/[...addEdit].tsx\n"));

/***/ })

});