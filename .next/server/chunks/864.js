"use strict";
exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 1580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Input({ name, value, placeholder, requiredMessages, type = "text", size = "default", inputMode = "text", fit = false, rounded = false, required = false, disabled = false, readOnly = false, iconLeft, iconRight, onChange, onKeyDown, onClick, onClickLeft, onClickRight, className = "", props }) {
    const inputSize = size === "small" ? `${type !== "date" ? "p-2" : "p-[7px]"} text-xs md:text-sm` : size === "default" ? `${type !== "date" ? "p-2.5" : "p-[9px]"}` : `${type !== "date" ? "p-4" : "p-[15px]"} md:text-base`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative ${fit && "w-fit"} text-ui-gray-blue-50`,
        children: [
            iconLeft && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${onClickLeft && "cursor-pointer"} absolute inset-y-0 left-0 flex items-center pl-4 text-ui-gray-blue-80`,
                onClick: onClickLeft,
                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(iconLeft, {
                    size: 4
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                id: name,
                name: name,
                value: value ?? "",
                className: `w-full ${rounded ? "rounded-full" : "rounded-lg"} border-2 border-solid border-ui-gray-blue-97 bg-white ${inputSize} ${iconRight && `pr-10 md:pr-10`} ${iconLeft && "pl-10 md:pl-10"} font-bold shadow-md transition duration-100 placeholder:text-ui-gray-blue-70 focus:border-ui-blue/50 focus:outline-none focus:ring-1 focus:ring-ui-blue/50 disabled:border-ui-gray-blue-97/0 disabled:bg-ui-gray-blue-90 disabled:text-ui-gray-blue-40 ${className}`,
                onChange: onChange,
                onKeyDown: onKeyDown,
                onClick: onClick,
                onInvalid: (e)=>{
                    if (requiredMessages) {
                        e.target.setCustomValidity(requiredMessages);
                    }
                },
                onInput: (e)=>{
                    if (requiredMessages) {
                        e.target.setCustomValidity("");
                    }
                },
                placeholder: placeholder,
                inputMode: inputMode,
                required: required,
                disabled: disabled,
                readOnly: readOnly,
                ...props
            }),
            iconRight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${onClickRight && "cursor-pointer"} absolute inset-y-0 right-0 flex items-center pr-4 text-sm font-medium text-ui-gray-blue-80`,
                onClick: onClickRight,
                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(iconRight, {
                    size: 4
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Label({ htmlFor, children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: htmlFor,
        className: `mb-2 block text-sm font-bold text-ui-gray-blue-50 ${className}`,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ })

};
;