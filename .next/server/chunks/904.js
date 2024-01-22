exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/pdf-icon.b1c4466b.jpeg","height":640,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAACAAUFAAAAAAAAAAAAAAAAEQECAxIxBBUhQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aol2v3tqeFC7CmUel4ly8AAD/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5542);
/* harmony import */ var _components_ui_Icons_upload_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3230);
/* harmony import */ var _components_ui_Icons_edit_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6527);
/* harmony import */ var _components_ui_Icons_delete_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var _components_assets_pdf_icon_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function InputUpload({ name, value, accept, placeholder, onChange }) {
    const props = {
        name,
        placeholder
    };
    const [pdfFile, setPdfFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const inputFileRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const changeFile = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        const files = event.target.files;
        if (!files || files?.length === 0) return;
        const file = files[0];
        if (!file.type.includes("image/") && !file.type.includes("application/pdf")) {
            if (inputFileRef.current) {
                inputFileRef.current.value = "";
            }
            return;
        }
        if (file?.type === "application/pdf") {
            setPdfFile(file);
        } else {
            setPdfFile(undefined);
        }
        onChange?.(file, {
            name,
            value
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            !value && !pdfFile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .InputField */ .UP, {
                className: "cursor-default",
                iconRight: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_upload_icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                onClick: ()=>inputFileRef.current?.click(),
                readOnly: true,
                ...props
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    pdfFile && pdfFile !== undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>{
                            // if (tempData?.identity.split(".").includes("PDF")) {
                            let el = document.createElement("a");
                            el.href = URL.createObjectURL(pdfFile || new Blob());
                            el.target = "_blank";
                            el.download = `${name}.pdf`;
                            el.click();
                        // }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "img-fluid flex ",
                            src: pdfFile ? _components_assets_pdf_icon_jpeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : "",
                            alt: "Test",
                            width: 200,
                            height: 150
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "img-fluid flex",
                        src: value instanceof Blob ? URL.createObjectURL(value) : `${"https://has.chicodeapi.xyz"}/${value}`,
                        alt: "Test",
                        width: 200,
                        height: 150
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute top-3 flex justify-between",
                        style: {
                            width: "200px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .ButtonIcon */ .Ei, {
                                className: "mr-2",
                                title: "Ubah Gambar",
                                onClick: ()=>inputFileRef.current?.click(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_edit_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    color: "blue",
                                    size: 4
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .ButtonIcon */ .Ei, {
                                title: "Hapus Gambar",
                                onClick: ()=>{
                                    onChange?.(null, {
                                        name: inputFileRef.current?.name,
                                        value: ""
                                    });
                                    setPdfFile(undefined);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_delete_icon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    color: "red",
                                    size: 4
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: name,
                ref: inputFileRef,
                type: "file",
                onChange: (e)=>{
                    changeFile(e);
                },
                hidden: true,
                // {...{ accept }}
                accept: accept,
                multiple: true
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputUpload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5312:
/***/ (() => {



/***/ })

};
;