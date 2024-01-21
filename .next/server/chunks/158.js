"use strict";
exports.id = 158;
exports.ids = [158];
exports.modules = {

/***/ 3158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2783);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _components_ui_Form_Input_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1580);
/* harmony import */ var _components_ui_Form_Input_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4398);
/* harmony import */ var _hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1032);
/* harmony import */ var _hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9488);
/* harmony import */ var _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6609);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5542);
/* harmony import */ var _components_ui_Form_Input_InputUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9963);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__, _components_ui__WEBPACK_IMPORTED_MODULE_11__, _components_ui_Form_Input_InputUpload__WEBPACK_IMPORTED_MODULE_12__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__, _components_ui__WEBPACK_IMPORTED_MODULE_11__, _components_ui_Form_Input_InputUpload__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 



/* UI - COMPONENTS */ 








function AddEditPartner() {
    const { slug, NextRouter } = (0,_hooks_use_app_nav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const isMobile = (0,_hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    // const secretKey = "supersecretkey";
    // const CryptoJS = require("crypto-js");
    const type = slug[0];
    const id = slug[1];
    const [showPassword, setShowPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [categoriesOption, setCategoriesOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            value: 0,
            label: ""
        }
    ]);
    const formikPartner = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {
            name: "",
            photo: "",
            categories: "",
            description: "",
            image: "",
            categories_id: 0
        },
        onSubmit: async (values)=>{
            if (/\d/.test(values.name)) {
                alert("Nama Partner Hanya boleh huruf");
                return;
            }
            await addEditPartner(values);
        }
    });
    const handleChange = (value, name)=>{
        let tempValue = value;
        if (typeof value === null || typeof value === undefined) {
            if (name === "price") {
                tempValue = 0;
            } else {
                tempValue = "";
            }
        }
        //validate number only
        // if (["phone", "identity_number"].includes(name)) {
        //   tempValue = tempValue.replace(/\D/g, "");
        // }
        formikPartner.setFieldValue(name, tempValue);
    };
    const handleChangeImage = (e)=>{
        let file = e;
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf"
        ];
        if (!file) {
            handleChange("", "photo");
            return;
        }
        if (!allowedTypes.includes(file.type)) {
            console.error("Invalid file type. Please select a valid image file.");
            return;
        }
        handleChange(file, "photo");
    };
    /* FETCH DATA */ // [GET] Data Kategori Partner
    (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__/* .ApiGetAllPartnerCategories */ .bn)({
        params: {
            page: 1
        },
        onSuccess (res) {
            const { data } = res;
            let temps = [];
            data.map((e)=>{
                temps.push({
                    value: e?.id,
                    label: e?.name
                });
            });
            setCategoriesOption(temps);
        },
        onError (err) {
            console.error(err);
        }
    });
    // [GET] One Partner
    const getOnePartner = (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__/* .ApiGetOnePartner */ .ef)({
        id,
        onSuccess (res) {
            const { data } = res;
            formikPartner.setValues({
                ...formikPartner.values,
                name: data.name,
                photo: data?.image,
                image: data?.image,
                description: data?.description,
                categories: data?.categories,
                categories_id: data?.categories_id
            });
            const editor = document.getElementById("editor");
            // Load text from formikPartner.values.description
            const savedText = data?.description;
            if (savedText) {
                editor.innerHTML = savedText;
            }
        },
        onError (err) {
            console.error(err);
        }
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (type === "edit") getOnePartner.refetch();
    }, [
        id,
        type
    ]);
    // [POST] Partner
    const createPartner = (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__/* .ApiPostPartner */ .$U)({
        onSuccess () {
            alert("Berhasil menambah Data");
            NextRouter.replace("/admin/partner");
            formikPartner.setSubmitting(false);
            setIsSubmitting(false);
        },
        onError (err) {
            formikPartner.setSubmitting(false);
            setIsSubmitting(false);
            if (axios__WEBPACK_IMPORTED_MODULE_2__["default"].isAxiosError(err)) {
                const errCode = err.response?.status;
                switch(errCode){
                    case 422:
                        alert(err.response?.data.message);
                        break;
                    default:
                        alert("Telah terjadi kesalahan saat Menambah Data.");
                }
            }
            console.error(err);
        }
    });
    // [PUT] Partner
    const updatePartner = (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_10__/* .ApiPutPartner */ .a6)({
        onSuccess () {
            alert("Berhasil mengubah Data Partner");
            NextRouter.replace("/admin/partner");
            formikPartner.setSubmitting(false);
            setIsSubmitting(false);
        },
        onError (err) {
            formikPartner.setSubmitting(false);
            setIsSubmitting(false);
            if (axios__WEBPACK_IMPORTED_MODULE_2__["default"].isAxiosError(err)) {
                const errCode = err.response?.status;
                switch(errCode){
                    case 422:
                        alert(err.response?.data.message);
                        break;
                    default:
                        alert("Telah terjadi kesalahan saat Mengubah Data.");
                }
            }
            console.error(err);
        }
    });
    /* COMPONENT FUNCTION */ const addEditPartner = async (payload)=>{
        formikPartner.setSubmitting(true);
        setIsSubmitting(true);
        const datas = new FormData();
        Object.keys(payload).map((el)=>{
            if (payload?.[el] != null) {
                if (el !== "categories_id" && el != "image") {
                    datas.set(el, payload?.[el]);
                }
            }
        });
        // for (const pair of datas.entries()) {
        //   console.log("cek datas", pair[0] + ": " + pair[1]);
        // }
        if (type === "add") {
            createPartner.mutate(datas);
        } else {
            updatePartner.mutate({
                id,
                payload: datas
            });
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(()=>{
        const editor = document.getElementById("editor");
        // Save text to formikPartner.values.description on input
        editor.addEventListener("input", ()=>{
            const text = editor.innerHTML;
            formikPartner?.setFieldValue("description", text);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("cek formikPartner", formikPartner?.values);
    }, [
        formikPartner
    ]);
    /* RENDER */ return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    item: [
                        {
                            title: "Kelola Kategori Partner",
                            linkTo: "/admin/partner"
                        },
                        {
                            title: type === "add" ? "Tambah Kategori" : "Edit Kategori",
                            active: true
                        }
                    ],
                    className: "ml-4"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:mx-4 md:w-3/4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "flex w-full flex-col gap-4",
                    onSubmit: formikPartner.handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-6/12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Form_Input_InputLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    htmlFor: "noTelp",
                                    children: [
                                        "Pilih Kategori\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                            className: "font-black text-ui-red",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* .InputSelect */ .JD, {
                                    name: "package_id",
                                    placeholder: "Pilih Paket",
                                    value: formikPartner.values.categories_id,
                                    option: categoriesOption,
                                    onChange: (e)=>{
                                        formikPartner.setFieldValue("categories_id", e?.value);
                                        formikPartner.setFieldValue("categories", e?.label);
                                    },
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-6/12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Form_Input_InputLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    htmlFor: "nama",
                                    children: [
                                        "Nama\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                            className: "font-black text-ui-red",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Form_Input_InputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Nama",
                                    onChange: formikPartner.handleChange,
                                    value: formikPartner.values.name,
                                    requiredMessages: "Nama tidak boleh kosong!",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-6/12",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Form_Input_InputLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    htmlFor: "noTelp",
                                    children: [
                                        "Upload Foto\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                            className: "font-black text-ui-red",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Form_Input_InputUpload__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    name: "photo",
                                    placeholder: "Upload",
                                    value: formikPartner.values.photo,
                                    accept: "image/*",
                                    onChange: (e)=>handleChangeImage(e),
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Form_Input_InputLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    htmlFor: "noTelp",
                                    children: [
                                        "Deskripsi\xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                            className: "font-black text-ui-red",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "editor",
                                    contentEditable: true,
                                    style: {
                                        width: "100%",
                                        minHeight: 500,
                                        border: "1px solid #ccc",
                                        padding: 4,
                                        boxSizing: "border-box",
                                        backgroundColor: "white"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full md:flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                type: "submit",
                                disabled: isSubmitting,
                                children: isSubmitting ? "Menyimpan..." : "Simpan"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddEditPartner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;