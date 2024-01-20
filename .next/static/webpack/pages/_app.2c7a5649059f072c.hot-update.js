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

/***/ "./src/hooks/use-fetch.tsx":
/*!*********************************!*\
  !*** ./src/hooks/use-fetch.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiDeletePartner: function() { return /* binding */ ApiDeletePartner; },\n/* harmony export */   ApiGetAllPartner: function() { return /* binding */ ApiGetAllPartner; },\n/* harmony export */   ApiGetAllPartnerCategories: function() { return /* binding */ ApiGetAllPartnerCategories; },\n/* harmony export */   ApiGetOnePartner: function() { return /* binding */ ApiGetOnePartner; },\n/* harmony export */   ApiPostPartner: function() { return /* binding */ ApiPostPartner; },\n/* harmony export */   ApiPutPartner: function() { return /* binding */ ApiPutPartner; }\n/* harmony export */ });\n/* harmony import */ var _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/api-fetch */ \"./src/libs/api-fetch.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();\n\n\n/* FETCH API - ADMIN */ // Partner //\n// [GET] All Partner\nconst ApiGetAllPartnerCategories = (param)=>{\n    let { params, onSuccess, onError } = param;\n    _s();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"ApiGetAllPartnerCategories\",\n            params\n        ],\n        queryFn: async ()=>{\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/v1/partner_categories/getall\", {\n                params\n            });\n            return data;\n        },\n        keepPreviousData: true,\n        retry: 3,\n        onSuccess,\n        onError\n    });\n};\n_s(ApiGetAllPartnerCategories, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = ApiGetAllPartnerCategories;\n// [GET] All Partner\nconst ApiGetAllPartner = (param)=>{\n    let { params, onSuccess, onError } = param;\n    _s1();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"ApiGetAllPartner\",\n            params\n        ],\n        queryFn: async ()=>{\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/v1/partner/getall\", {\n                params\n            });\n            return data;\n        },\n        keepPreviousData: true,\n        retry: 3,\n        onSuccess,\n        onError\n    });\n};\n_s1(ApiGetAllPartner, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c1 = ApiGetAllPartner;\n// [GET] One Partner\nconst ApiGetOnePartner = (param)=>{\n    let { id, onSuccess, onError } = param;\n    _s2();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"ApiGetOnePartner\",\n            id\n        ],\n        queryFn: async ()=>{\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/v1/partner/getdetail/\".concat(id));\n            return data;\n        },\n        enabled: false,\n        onSuccess,\n        onError\n    });\n};\n_s2(ApiGetOnePartner, \"4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c2 = ApiGetOnePartner;\n// [POST] Partner\nconst ApiPostPartner = (param)=>{\n    let { onSuccess, onError } = param;\n    _s3();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({\n        mutationFn: async (payload)=>{\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/v1/partner/create\", payload);\n            return data;\n        },\n        onSuccess,\n        onError\n    });\n};\n_s3(ApiPostPartner, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c3 = ApiPostPartner;\n// [PUT] Partner\nconst ApiPutPartner = (param)=>{\n    let { onSuccess, onError } = param;\n    _s4();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({\n        mutationFn: async (param)=>{\n            let { id, payload } = param;\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/v1/partner/update/\".concat(id), payload);\n            return data;\n        },\n        onSuccess,\n        onError\n    });\n};\n_s4(ApiPutPartner, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c4 = ApiPutPartner;\n// [DELETE] Partner\nconst ApiDeletePartner = (param)=>{\n    let { onSuccess, onError } = param;\n    _s5();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({\n        mutationFn: async (id)=>{\n            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"/v1/partner/delete/\".concat(id));\n            return data;\n        },\n        onSuccess,\n        onError\n    });\n};\n_s5(ApiDeletePartner, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c5 = ApiDeletePartner;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ApiGetAllPartnerCategories\");\n$RefreshReg$(_c1, \"ApiGetAllPartner\");\n$RefreshReg$(_c2, \"ApiGetOnePartner\");\n$RefreshReg$(_c3, \"ApiPostPartner\");\n$RefreshReg$(_c4, \"ApiPutPartner\");\n$RefreshReg$(_c5, \"ApiDeletePartner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2hvb2tzL3VzZS1mZXRjaC50c3g/OWJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBpRmV0Y2ggZnJvbSBcIkAvbGlicy9hcGktZmV0Y2hcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IHR5cGUgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdHlwZSB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCJAL2xpYnMvYXBpLWZldGNoXCI7XG5cbi8qIFRZUEUgREVGSU5JVElPTiAtIEFETUlOICovXG5pbXBvcnQgdHlwZSB7XG4gIFBhcnRuZXJHZXRBbGxDYXRlZ29yaWVzUmVzcG9uc2UsXG4gIFBhcnRuZXJHZXRBbGxSZXNwb25zZSxcbiAgUGFydG5lckdldE9uZVJlc3BvbnNlLFxuICBQYXJ0bmVyUG9zdFJlc3BvbnNlLFxufSBmcm9tIFwiQC90eXBlcy9hZG1pbi9wYXJ0bmVyXCI7XG5cbmludGVyZmFjZSBQcm9wczxUPiB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICByZXRyeT86IG51bWJlcjtcbiAga2VlcFByZXZpb3VzRGF0YT86IGJvb2xlYW47XG4gIHJlZmV0Y2hPbldpbmRvd0ZvY3VzPzogYm9vbGVhbjtcbiAgb25TdWNjZXNzPzogKHJlczogVCkgPT4gYW55O1xuICBvbkVycm9yPzogKGVycjogQXhpb3NFcnJvcjxSZXNwb25zZVR5cGU+KSA9PiBhbnk7XG59XG5cbi8qIEZFVENIIEFQSSAtIEFETUlOICovXG4vLyBQYXJ0bmVyIC8vXG4vLyBbR0VUXSBBbGwgUGFydG5lclxuZXhwb3J0IGNvbnN0IEFwaUdldEFsbFBhcnRuZXJDYXRlZ29yaWVzID0gKHtcbiAgcGFyYW1zLFxuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG59OiBQcm9wczxQYXJ0bmVyR2V0QWxsQ2F0ZWdvcmllc1Jlc3BvbnNlPiAmIHtcbiAgcGFyYW1zOiBPYmplY3QgfCBudWxsO1xufSkgPT4ge1xuICByZXR1cm4gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJBcGlHZXRBbGxQYXJ0bmVyQ2F0ZWdvcmllc1wiLCBwYXJhbXNdLFxuICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgQXBpRmV0Y2guZ2V0PFBhcnRuZXJHZXRBbGxDYXRlZ29yaWVzUmVzcG9uc2U+KFxuICAgICAgICBgL3YxL3BhcnRuZXJfY2F0ZWdvcmllcy9nZXRhbGxgLFxuICAgICAgICB7IHBhcmFtcyB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsXG4gICAgcmV0cnk6IDMsXG4gICAgb25TdWNjZXNzLFxuICAgIG9uRXJyb3IsXG4gIH0pO1xufTtcbi8vIFtHRVRdIEFsbCBQYXJ0bmVyXG5leHBvcnQgY29uc3QgQXBpR2V0QWxsUGFydG5lciA9ICh7XG4gIHBhcmFtcyxcbiAgb25TdWNjZXNzLFxuICBvbkVycm9yLFxufTogUHJvcHM8UGFydG5lckdldEFsbFJlc3BvbnNlPiAmIHtcbiAgcGFyYW1zOiBPYmplY3QgfCBudWxsO1xufSkgPT4ge1xuICByZXR1cm4gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJBcGlHZXRBbGxQYXJ0bmVyXCIsIHBhcmFtc10sXG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBcGlGZXRjaC5nZXQ8UGFydG5lckdldEFsbFJlc3BvbnNlPihcbiAgICAgICAgYC92MS9wYXJ0bmVyL2dldGFsbGAsXG4gICAgICAgIHsgcGFyYW1zIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAga2VlcFByZXZpb3VzRGF0YTogdHJ1ZSxcbiAgICByZXRyeTogMyxcbiAgICBvblN1Y2Nlc3MsXG4gICAgb25FcnJvcixcbiAgfSk7XG59O1xuXG4vLyBbR0VUXSBPbmUgUGFydG5lclxuZXhwb3J0IGNvbnN0IEFwaUdldE9uZVBhcnRuZXIgPSAoe1xuICBpZCxcbiAgb25TdWNjZXNzLFxuICBvbkVycm9yLFxufTogUHJvcHM8UGFydG5lckdldE9uZVJlc3BvbnNlPiAmIHtcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcbn0pID0+IHtcbiAgcmV0dXJuIHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wiQXBpR2V0T25lUGFydG5lclwiLCBpZF0sXG4gICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBcGlGZXRjaC5nZXQ8UGFydG5lckdldE9uZVJlc3BvbnNlPihcbiAgICAgICAgYC92MS9wYXJ0bmVyL2dldGRldGFpbC8ke2lkfWBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgb25TdWNjZXNzLFxuICAgIG9uRXJyb3IsXG4gIH0pO1xufTtcblxuLy8gW1BPU1RdIFBhcnRuZXJcbmV4cG9ydCBjb25zdCBBcGlQb3N0UGFydG5lciA9ICh7XG4gIG9uU3VjY2VzcyxcbiAgb25FcnJvcixcbn06IFByb3BzPFBhcnRuZXJQb3N0UmVzcG9uc2U+KSA9PiB7XG4gIHJldHVybiB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25GbjogYXN5bmMgKHBheWxvYWQ6IE9iamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBcGlGZXRjaC5wb3N0PFBhcnRuZXJQb3N0UmVzcG9uc2U+KFxuICAgICAgICBcIi92MS9wYXJ0bmVyL2NyZWF0ZVwiLFxuICAgICAgICBwYXlsb2FkXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIG9uU3VjY2VzcyxcbiAgICBvbkVycm9yLFxuICB9KTtcbn07XG5cbi8vIFtQVVRdIFBhcnRuZXJcbmV4cG9ydCBjb25zdCBBcGlQdXRQYXJ0bmVyID0gKHsgb25TdWNjZXNzLCBvbkVycm9yIH06IFByb3BzPFJlc3BvbnNlVHlwZT4pID0+IHtcbiAgcmV0dXJuIHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAoe1xuICAgICAgaWQsXG4gICAgICBwYXlsb2FkLFxuICAgIH06IHtcbiAgICAgIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgICBwYXlsb2FkOiBPYmplY3Q7XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBcGlGZXRjaC5wdXQ8UmVzcG9uc2VUeXBlPihcbiAgICAgICAgYC92MS9wYXJ0bmVyL3VwZGF0ZS8ke2lkfWAsXG4gICAgICAgIHBheWxvYWRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgb25TdWNjZXNzLFxuICAgIG9uRXJyb3IsXG4gIH0pO1xufTtcblxuLy8gW0RFTEVURV0gUGFydG5lclxuZXhwb3J0IGNvbnN0IEFwaURlbGV0ZVBhcnRuZXIgPSAoe1xuICBvblN1Y2Nlc3MsXG4gIG9uRXJyb3IsXG59OiBQcm9wczxSZXNwb25zZVR5cGU+KSA9PiB7XG4gIHJldHVybiB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25GbjogYXN5bmMgKGlkOiBudW1iZXIgfCBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgQXBpRmV0Y2guZGVsZXRlPFJlc3BvbnNlVHlwZT4oXG4gICAgICAgIGAvdjEvcGFydG5lci9kZWxldGUvJHtpZH1gXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIG9uU3VjY2VzcyxcbiAgICBvbkVycm9yLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiQXBpRmV0Y2giLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiQXBpR2V0QWxsUGFydG5lckNhdGVnb3JpZXMiLCJwYXJhbXMiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZGF0YSIsImdldCIsImtlZXBQcmV2aW91c0RhdGEiLCJyZXRyeSIsIkFwaUdldEFsbFBhcnRuZXIiLCJBcGlHZXRPbmVQYXJ0bmVyIiwiaWQiLCJlbmFibGVkIiwiQXBpUG9zdFBhcnRuZXIiLCJtdXRhdGlvbkZuIiwicGF5bG9hZCIsInBvc3QiLCJBcGlQdXRQYXJ0bmVyIiwicHV0IiwiQXBpRGVsZXRlUGFydG5lciIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/use-fetch.tsx\n"));

/***/ })

});