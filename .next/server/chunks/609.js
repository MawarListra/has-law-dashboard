"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 6609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $U: () => (/* binding */ ApiPostPartner),
/* harmony export */   FU: () => (/* binding */ ApiDeletePartner),
/* harmony export */   IL: () => (/* binding */ ApiGetOnePublication),
/* harmony export */   K6: () => (/* binding */ ApiPostPublication),
/* harmony export */   Lt: () => (/* binding */ ApiGetOneServices),
/* harmony export */   Nm: () => (/* binding */ ApiPostServices),
/* harmony export */   P$: () => (/* binding */ ApiDeletePublication),
/* harmony export */   Qy: () => (/* binding */ ApiGetAllServices),
/* harmony export */   UJ: () => (/* binding */ ApiPutPublication),
/* harmony export */   _r: () => (/* binding */ ApiGetAllPartner),
/* harmony export */   a6: () => (/* binding */ ApiPutPartner),
/* harmony export */   bn: () => (/* binding */ ApiGetAllPartnerCategories),
/* harmony export */   ef: () => (/* binding */ ApiGetOnePartner),
/* harmony export */   gy: () => (/* binding */ ApiPutServices),
/* harmony export */   hl: () => (/* binding */ ApiPutMainServices),
/* harmony export */   i4: () => (/* binding */ ApiGetAllMainServices),
/* harmony export */   lM: () => (/* binding */ ApiGetAllPublication),
/* harmony export */   mG: () => (/* binding */ ApiDeleteServices),
/* harmony export */   rP: () => (/* binding */ ApiPostMainServices),
/* harmony export */   rr: () => (/* binding */ ApiGetOneMainServices),
/* harmony export */   vt: () => (/* binding */ ApiDeleteMainServices)
/* harmony export */ });
/* harmony import */ var _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7290);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* FETCH API - ADMIN */ // Partner //
// [GET] All Partner
const ApiGetAllPartnerCategories = ({ params, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetAllPartnerCategories",
            params
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/partner_categories/getall`, {
                params
            });
            return data;
        },
        keepPreviousData: true,
        retry: 3,
        onSuccess,
        onError
    });
};
// [GET] All Partner
const ApiGetAllPartner = ({ params, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetAllPartner",
            params
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/partner/getall`, {
                params
            });
            return data;
        },
        keepPreviousData: true,
        retry: 3,
        onSuccess,
        onError
    });
};
// [GET] One Partner
const ApiGetOnePartner = ({ id, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetOnePartner",
            id
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/partner/getdetail/${id}`);
            return data;
        },
        enabled: false,
        onSuccess,
        onError
    });
};
// [POST] Partner
const ApiPostPartner = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (payload)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/v1/partner/create", payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [PUT] Partner
const ApiPutPartner = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async ({ id, payload })=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/v1/partner/update/${id}`, payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [DELETE] Partner
const ApiDeletePartner = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (id)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/v1/partner/delete/${id}`);
            return data;
        },
        onSuccess,
        onError
    });
};
// Publication //
// [GET] All Publication
const ApiGetAllPublication = ({ params, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetAllPublication",
            params
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/publications/getall`, {
                params
            });
            return data;
        },
        keepPreviousData: true,
        retry: 3,
        onSuccess,
        onError
    });
};
// [GET] One Publication
const ApiGetOnePublication = ({ id, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetOnePublication",
            id
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/publications/getdetail/${id}`);
            return data;
        },
        enabled: false,
        onSuccess,
        onError
    });
};
// [POST] Publication
const ApiPostPublication = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (payload)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/v1/publications/create", payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [PUT] Publication
const ApiPutPublication = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async ({ id, payload })=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/v1/publications/update/${id}`, payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [DELETE] Publication
const ApiDeletePublication = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (id)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/v1/publications/delete/${id}`);
            return data;
        },
        onSuccess,
        onError
    });
};
// MainServices //
// [GET] All MainServices
const ApiGetAllMainServices = ({ params, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetAllMainServices",
            params
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/main_services/getall`, {
                params
            });
            return data;
        },
        keepPreviousData: true,
        retry: 3,
        onSuccess,
        onError
    });
};
// [GET] One MainServices
const ApiGetOneMainServices = ({ id, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetOneMainServices",
            id
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/main_services/getdetail/${id}`);
            return data;
        },
        enabled: false,
        onSuccess,
        onError
    });
};
// [POST] MainServices
const ApiPostMainServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (payload)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/v1/main_services/create", payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [PUT] MainServices
const ApiPutMainServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async ({ id, payload })=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/v1/main_services/update/${id}`, payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [DELETE] MainServices
const ApiDeleteMainServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (id)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/v1/main_services/delete/${id}`);
            return data;
        },
        onSuccess,
        onError
    });
};
// Services //
// [GET] All Services
const ApiGetAllServices = ({ id, params, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetAllServices",
            params
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/services/getall/${id}`, {
                params
            });
            return data;
        },
        keepPreviousData: true,
        retry: 3,
        onSuccess,
        onError
    });
};
// [GET] One Services
const ApiGetOneServices = ({ id, onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "ApiGetOneServices",
            id
        ],
        queryFn: async ()=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/v1/services/getdetail/${id}`);
            return data;
        },
        enabled: false,
        onSuccess,
        onError
    });
};
// [POST] Services
const ApiPostServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (payload)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/v1/services/create", payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [PUT] Services
const ApiPutServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async ({ id, payload })=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/v1/services/update/${id}`, payload);
            return data;
        },
        onSuccess,
        onError
    });
};
// [DELETE] Services
const ApiDeleteServices = ({ onSuccess, onError })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: async (id)=>{
            const { data } = await _libs_api_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/v1/services/delete/${id}`);
            return data;
        },
        onSuccess,
        onError
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const apiUrl = "https://has.chicodeapi.xyz";
const ApiFetch = ()=>{
    const defaultOptions = {
        baseURL: apiUrl
    };
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create(defaultOptions);
    instance.interceptors.request.use(async (req)=>{
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
        if (session) {
            const token = session.user.apiToken;
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    });
    instance.interceptors.response.use((res)=>{
        return res;
    }, (err)=>{
        if (axios__WEBPACK_IMPORTED_MODULE_0__["default"].isAxiosError(err)) {
            const status = err.response?.status;
            if (status === 401 || status === 403) {
            //redirect logic here
            }
        }
        throw err;
    });
    return instance;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiFetch());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;