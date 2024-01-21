"use strict";
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 4211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _components_ui_Button_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _components_ui_Modal_Confirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9227);
/* harmony import */ var _components_ui_Form_Input_InputField_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7175);
/* harmony import */ var _components_ui_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6696);
/* harmony import */ var _components_ui_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5285);
/* harmony import */ var _components_ui_Icons_add_circle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3322);
/* harmony import */ var _components_ui_Icons_edit_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6527);
/* harmony import */ var _components_ui_Icons_delete_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9003);
/* harmony import */ var _hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9488);
/* harmony import */ var _hooks_use_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2291);
/* harmony import */ var _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6609);
/* harmony import */ var _libs_get_index_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2637);
/* harmony import */ var _components_ui_Icons_open_in_new_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2633);
/* harmony import */ var _components_ui_Modal_ModalImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_Form_Input_InputField_Search__WEBPACK_IMPORTED_MODULE_6__, _components_ui_Table__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_14__]);
([_components_ui_Form_Input_InputField_Search__WEBPACK_IMPORTED_MODULE_6__, _components_ui_Table__WEBPACK_IMPORTED_MODULE_8__, _hooks_use_fetch__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 


/* UI - COMPONENTS */ 





/* UI - ICONS */ 








function MainContentPartner() {
    const isMobile = (0,_hooks_use_check_mobile_screen__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    /* REACT STATE */ const [searchData, setSearchData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        field: "",
        current: ""
    });
    const [deletePopup, setDeletePopup] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        open: false,
        selectedId: null
    });
    const [imagePopup, setImagePopup] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        open: false,
        image: ""
    });
    const [dataState, setDataState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [metaState, setMetaState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        page: 1,
        size: 7,
        totalData: 0,
        totalPage: 0
    });
    /* FETCH DATA */ // [GET] All Partner   ===> command for a while
    (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_14__/* .ApiGetAllPartner */ ._r)({
        params: {
            page: 1,
            pagesize: 100,
            search: searchData.current,
            categories: "All"
        },
        onSuccess (res) {
            const { data } = res;
            // const newMeta = {
            //   ...metaState,
            //   totalData: meta.totalData,
            //   totalPage: meta.totalPage,
            // };
            const newData = (0,_libs_get_index_table__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(data, metaState);
            setDataState(newData);
        // setMetaState(newMeta);
        },
        onError (err) {
            console.error(err);
        }
    });
    // [DELETE] Partner
    const deletePartner = (0,_hooks_use_fetch__WEBPACK_IMPORTED_MODULE_14__/* .ApiDeletePartner */ .FU)({
        onSuccess () {
            setDeletePopup({
                open: false,
                selectedId: null
            });
            alert("Berhasil menghapus Data Partner");
        },
        onError (err) {
            setDeletePopup({
                open: false,
                selectedId: null
            });
            alert("Telah terjadi kesalahan saat Hapus Data.");
            console.error(err);
        }
    });
    /* COMPONENTS FUNCTION */ const columns = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>[
            {
                header: "#",
                accessorKey: "id"
            },
            {
                header: "Nama",
                accessorKey: "name"
            },
            {
                header: "Kategori",
                accessorKey: "categories"
            },
            {
                header: "Photo",
                accessorKey: "image",
                cell: ({ row })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor-pointer",
                        onClick: ()=>{
                            setImagePopup({
                                open: true,
                                image: row?.original?.image
                            });
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_open_in_new_icon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                    });
                }
            },
            {
                header: "Deskripsi",
                accessorKey: "description",
                cell: ({ row })=>{
                    const data = "Lorem ipsum bsayb habsdu mnbasdgu nabsd<div><br></div><div><br></div><div>habshdgi bsadunn a</div><div>nasbdhj</div><div><br></div><div>nvsahbdak</div>";
                    // Function to create a React component from the HTML string
                    const createMarkup = (htmlString)=>({
                            __html: htmlString
                        });
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            whiteSpace: "wrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: 500,
                            height: 200
                        },
                        dangerouslySetInnerHTML: createMarkup(row?.original?.description)
                    });
                }
            },
            {
                header: "",
                accessorKey: "action",
                cell: ({ row })=>{
                    const { id } = row.original;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center space-x-4 text-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/admin/partner/edit/${id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_edit_icon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        color: "blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button_ButtonIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: ()=>setDeletePopup({
                                        open: !deletePopup.open,
                                        selectedId: id
                                    }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_delete_icon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    color: "red"
                                })
                            })
                        ]
                    });
                }
            }
        ], [
        deletePopup
    ]);
    const searchDataDebounce = (0,_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(searchData.field, 100);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setSearchData({
            ...searchData,
            current: searchDataDebounce
        });
        setMetaState({
            ...metaState,
            page: 1
        });
    }, [
        searchDataDebounce
    ]);
    /* RENDER */ return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-y-8 pt-4 md:ml-4 md:mr-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-4 md:flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:flex-grow",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Form_Input_InputField_Search__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            name: "search",
                            value: searchData.field,
                            onChange: (e)=>setSearchData({
                                    ...searchData,
                                    field: e.target.value
                                }),
                            fit: !isMobile,
                            rounded: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/admin/partner/add",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                type: "button",
                                iconLeft: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icons_add_circle_icon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    color: "white"
                                }),
                                rounded: true,
                                fit: true,
                                children: "Tambah Kategori"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Table__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    columns: columns,
                    data: dataState
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col self-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Pagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    page: metaState.page,
                    totalPage: metaState.totalPage,
                    onPageChange: (page)=>setMetaState((prevState)=>{
                            return {
                                ...prevState,
                                page
                            };
                        })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Modal_Confirm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                open: deletePopup.open,
                onOk: ()=>deletePartner.mutate(deletePopup.selectedId),
                onCancel: ()=>setDeletePopup({
                        open: false,
                        selectedId: null
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Modal_ModalImage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                open: imagePopup?.open,
                onCancel: ()=>setImagePopup({
                        open: false,
                        image: ""
                    }),
                data: imagePopup?.image
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContentPartner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;