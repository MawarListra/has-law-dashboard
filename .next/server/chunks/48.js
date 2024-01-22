"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button({ type = "button", color = "blue", size = "default", className = "", fit = false, rounded = false, outlined = false, disabled = false, iconLeft, iconRight, onClick, children }) {
    const btnSize = size === "small" ? "px-3 py-2 text-xs md:px-3 md:py-2 md:text-sm" : size === "default" ? "px-3 py-2 md:px-5 md:py-2.5" : "px-5 py-2.5 md:px-5 md:py-3 md:text-base";
    const btnColor = color === "blue" ? `border-ui-blue focus:ring-ui-blue/30 ${outlined ? "disabled:border-ui-blue/70" : "disabled:border-ui-blue/0"}` : color === "red" ? `border-ui-red focus:ring-ui-red/30 ${outlined ? "disabled:border-ui-red/70" : "disabled:border-ui-red/0"}` : `border-white shadow-md focus:ring-ui-gray-blue-60/30 ${outlined ? "border-ui-gray-blue-60 disabled:border-ui-gray-blue-60/50" : "disabled:border-white/0"}`;
    // prettier-ignore
    const btnOutlined = outlined ? color === "blue" ? "text-ui-blue disabled:text-ui-blue/70" : color === "red" ? "text-ui-red disabled:text-ui-red/70" : "text-ui-gray-blue-60 disabled:text-ui-gray-blue-60/50" : color === "blue" ? "bg-ui-blue disabled:bg-ui-blue/70" : color === "red" ? "bg-ui-red disabled:bg-ui-red/70" : "bg-white disabled:bg-ui-gray-blue-60/30";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `flex ${fit ? "w-fit" : "w-full"} ${color === "light" ? "text-ui-gray-blue-60" : "text-white"}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: type,
                className: `flex w-full flex-row items-center justify-center gap-2 text-center ${rounded ? "rounded-full" : "rounded-lg"} border-2 border-solid ${btnColor} ${btnOutlined} ${btnSize} text-center focus:outline-none focus:ring-4 disabled:cursor-not-allowed ${className}`,
                onClick: onClick,
                disabled: disabled,
                children: [
                    iconLeft && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `flex items-center`,
                        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(iconLeft, {
                            size: 4
                        })
                    }),
                    children,
                    iconRight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `absolute inset-y-0 right-0 flex items-center`,
                        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(iconRight, {
                            size: 4
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;