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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_pages_admin_main_services_add_edit_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pages/admin/main-services/add-edit-content */ \"./src/components/pages/admin/main-services/add-edit-content.tsx\");\n/* harmony import */ var _components_pages_admin_main_services_all_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pages/admin/main-services/all-services */ \"./src/components/pages/admin/main-services/all-services.tsx\");\n/* harmony import */ var _components_pages_admin_main_services_add_edit_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/pages/admin/main-services/add-edit-services */ \"./src/components/pages/admin/main-services/add-edit-services.tsx\");\n/* harmony import */ var _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/use-app-nav */ \"./src/hooks/use-app-nav.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import { getServerSession } from \"next-auth/next\";\n// import { authOptions } from \"@/pages/api/auth/[...nextauth]\";\n\n\n\n\n\n// import type { GetServerSideProps } from \"next\";\nfunction AddEditMainServicesProtectedPage() {\n    var _query_addEdit, _query, _query1, _session;\n    _s();\n    const { NextRouter } = (0,_hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const type = (_query = query) === null || _query === void 0 ? void 0 : (_query_addEdit = _query.addEdit) === null || _query_addEdit === void 0 ? void 0 : _query_addEdit[0];\n    const slug = ((_query1 = query) === null || _query1 === void 0 ? void 0 : _query1.addEdit) || [];\n    if (status === \"loading\") return null;\n    if (status === \"unauthenticated\") {\n        NextRouter.replace(\"/login\");\n        return null;\n    }\n    if (status === \"authenticated\" && ((_session = session) === null || _session === void 0 ? void 0 : _session.user.role) !== \"admin\") {\n        NextRouter.replace(\"/karyawan\");\n        return null;\n    }\n    const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        console.log(\"cek here type\", type);\n        if (type === \"add\" || type === \"edit\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_add_edit_content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 39,\n                columnNumber: 14\n            }, this);\n        } else if (type === \"service-add\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_all_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 41,\n                columnNumber: 14\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_admin_main_services_add_edit_services__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 43,\n                columnNumber: 14\n            }, this);\n        }\n    }, [\n        type\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Has Law | Main Services\"\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Has Law | Main Services\"\n                    }, void 0, false, {\n                        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            renderContent\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/binar-listra/Documents/CHICODE/has-law-dashboard/src/pages/admin/main-services/[...addEdit].tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(AddEditMainServicesProtectedPage, \"iL7Qb4YTr0lDxMkDMZCfkmAaIaQ=\", false, function() {\n    return [\n        _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = AddEditMainServicesProtectedPage;\n// export const getServerSideProps: GetServerSideProps = async (ctx) => {\n//   ctx.res.setHeader(\n//     \"Cache-Control\",\n//     \"public, s-maxage=1800, stale-while-revalidate=86400\"\n//   );\n//   const session = await getServerSession(ctx.req, ctx.res, authOptions);\n//   if (!session) {\n//     return {\n//       redirect: {\n//         destination: \"/login\",\n//         permanent: false,\n//       },\n//     };\n//   }\n//   if (session.user.role !== \"admin\") {\n//     return {\n//       redirect: {\n//         destination: \"/karyawan/list-pengajuan\",\n//         permanent: false,\n//       },\n//     };\n//   }\n//   return {\n//     props: {},\n//   };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddEditMainServicesProtectedPage);\nvar _c;\n$RefreshReg$(_c, \"AddEditMainServicesProtectedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRtaW4vbWFpbi1zZXJ2aWNlcy9bLi4uYWRkRWRpdF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDZ0I7QUFDN0MscURBQXFEO0FBQ3JELGdFQUFnRTtBQUUwQjtBQUNaO0FBQ1M7QUFFM0M7QUFDSjtBQUV4QyxrREFBa0Q7QUFFbEQsU0FBU1M7UUFLTUMsZ0JBQUFBLFFBQ0FBLFNBU3FCQzs7SUFkbEMsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0wsOERBQVNBO0lBQ2hDLE1BQU0sRUFBRU0sTUFBTUYsT0FBTyxFQUFFRyxNQUFNLEVBQUUsR0FBR1gsMkRBQVVBO0lBQzVDLE1BQU0sRUFBRU8sS0FBSyxFQUFFLEdBQUdGLHNEQUFTQTtJQUUzQixNQUFNTyxRQUFPTCxTQUFBQSxtQkFBQUEsOEJBQUFBLGlCQUFBQSxPQUFPTSxPQUFPLGNBQWROLHFDQUFBQSxjQUFnQixDQUFDLEVBQUU7SUFDaEMsTUFBTU8sT0FBT1AsRUFBQUEsVUFBQUEsbUJBQUFBLDhCQUFBQSxRQUFPTSxPQUFPLEtBQUksRUFBRTtJQUVqQyxJQUFJRixXQUFXLFdBQVcsT0FBTztJQUVqQyxJQUFJQSxXQUFXLG1CQUFtQjtRQUNoQ0YsV0FBV00sT0FBTyxDQUFDO1FBQ25CLE9BQU87SUFDVDtJQUVBLElBQUlKLFdBQVcsbUJBQW1CSCxFQUFBQSxXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNRLElBQUksQ0FBQ0MsSUFBSSxNQUFLLFNBQVM7UUFDaEVSLFdBQVdNLE9BQU8sQ0FBQztRQUNuQixPQUFPO0lBQ1Q7SUFFQSxNQUFNRyxnQkFBZ0JwQiw4Q0FBT0EsQ0FBQztRQUM1QnFCLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJSO1FBQzdCLElBQUlBLFNBQVMsU0FBU0EsU0FBUyxRQUFRO1lBQ3JDLHFCQUFPLDhEQUFDWCw4RkFBbUJBOzs7OztRQUM3QixPQUFPLElBQUlXLFNBQVMsZUFBZTtZQUNqQyxxQkFBTyw4REFBQ1YsMEZBQVdBOzs7OztRQUNyQixPQUFPO1lBQ0wscUJBQU8sOERBQUNDLCtGQUFlQTs7Ozs7UUFDekI7SUFDRixHQUFHO1FBQUNTO0tBQUs7SUFFVCxxQkFDRSw4REFBQ2YsdURBQWM7OzBCQUNiLDhEQUFDRSxrREFBSUE7O2tDQUNILDhEQUFDdUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OztZQUdsQ1A7Ozs7Ozs7QUFHUDtHQXpDU1o7O1FBQ2dCRiwwREFBU0E7UUFDRUosdURBQVVBO1FBQzFCSyxrREFBU0E7OztLQUhwQkM7QUEyQ1QseUVBQXlFO0FBQ3pFLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsNERBQTREO0FBQzVELE9BQU87QUFFUCwyRUFBMkU7QUFFM0Usb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixXQUFXO0FBQ1gsU0FBUztBQUNULE1BQU07QUFFTix5Q0FBeUM7QUFDekMsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixtREFBbUQ7QUFDbkQsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsTUFBTTtBQUVOLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsT0FBTztBQUNQLEtBQUs7QUFFTCwrREFBZUEsZ0NBQWdDQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZG1pbi9tYWluLXNlcnZpY2VzL1suLi5hZGRFZGl0XS50c3g/MWIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbi8vIGltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbi8vIGltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xuXG5pbXBvcnQgQWRkRWRpdE1haW5TZXJ2aWNlcyBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL2FkbWluL21haW4tc2VydmljZXMvYWRkLWVkaXQtY29udGVudFwiO1xuaW1wb3J0IEFsbFNlcnZpY2VzIGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vbWFpbi1zZXJ2aWNlcy9hbGwtc2VydmljZXNcIjtcbmltcG9ydCBBZGRFZGl0U2VydmljZXMgZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi9tYWluLXNlcnZpY2VzL2FkZC1lZGl0LXNlcnZpY2VzXCI7XG5cbmltcG9ydCB1c2VBcHBOYXYgZnJvbSBcIkAvaG9va3MvdXNlLWFwcC1uYXZcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBpbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmZ1bmN0aW9uIEFkZEVkaXRNYWluU2VydmljZXNQcm90ZWN0ZWRQYWdlKCkge1xuICBjb25zdCB7IE5leHRSb3V0ZXIgfSA9IHVzZUFwcE5hdigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB0eXBlID0gcXVlcnk/LmFkZEVkaXQ/LlswXTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5Py5hZGRFZGl0IHx8IFtdO1xuXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSByZXR1cm4gbnVsbDtcblxuICBpZiAoc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gICAgTmV4dFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIgJiYgc2Vzc2lvbj8udXNlci5yb2xlICE9PSBcImFkbWluXCIpIHtcbiAgICBOZXh0Um91dGVyLnJlcGxhY2UoXCIva2FyeWF3YW5cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjZWsgaGVyZSB0eXBlXCIsIHR5cGUpO1xuICAgIGlmICh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICByZXR1cm4gPEFkZEVkaXRNYWluU2VydmljZXMgLz47XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNlcnZpY2UtYWRkXCIpIHtcbiAgICAgIHJldHVybiA8QWxsU2VydmljZXMgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8QWRkRWRpdFNlcnZpY2VzIC8+O1xuICAgIH1cbiAgfSwgW3R5cGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFzIExhdyB8IE1haW4gU2VydmljZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGFzIExhdyB8IE1haW4gU2VydmljZXNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7cmVuZGVyQ29udGVudH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4vLyAgIGN0eC5yZXMuc2V0SGVhZGVyKFxuLy8gICAgIFwiQ2FjaGUtQ29udHJvbFwiLFxuLy8gICAgIFwicHVibGljLCBzLW1heGFnZT0xODAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTg2NDAwXCJcbi8vICAgKTtcblxuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihjdHgucmVxLCBjdHgucmVzLCBhdXRoT3B0aW9ucyk7XG5cbi8vICAgaWYgKCFzZXNzaW9uKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHJlZGlyZWN0OiB7XG4vLyAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuLy8gICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgaWYgKHNlc3Npb24udXNlci5yb2xlICE9PSBcImFkbWluXCIpIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcmVkaXJlY3Q6IHtcbi8vICAgICAgICAgZGVzdGluYXRpb246IFwiL2thcnlhd2FuL2xpc3QtcGVuZ2FqdWFuXCIsXG4vLyAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7fSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEVkaXRNYWluU2VydmljZXNQcm90ZWN0ZWRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsIkhlYWQiLCJ1c2VTZXNzaW9uIiwiQWRkRWRpdE1haW5TZXJ2aWNlcyIsIkFsbFNlcnZpY2VzIiwiQWRkRWRpdFNlcnZpY2VzIiwidXNlQXBwTmF2IiwidXNlUm91dGVyIiwiQWRkRWRpdE1haW5TZXJ2aWNlc1Byb3RlY3RlZFBhZ2UiLCJxdWVyeSIsInNlc3Npb24iLCJOZXh0Um91dGVyIiwiZGF0YSIsInN0YXR1cyIsInR5cGUiLCJhZGRFZGl0Iiwic2x1ZyIsInJlcGxhY2UiLCJ1c2VyIiwicm9sZSIsInJlbmRlckNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiRnJhZ21lbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/admin/main-services/[...addEdit].tsx\n"));

/***/ })

});