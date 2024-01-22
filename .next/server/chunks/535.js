exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 3929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/hooks/use-app-nav.tsx + 5 modules
var use_app_nav = __webpack_require__(1032);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/OffCanvasOverlay/index.tsx
var OffCanvasOverlay = __webpack_require__(3600);
// EXTERNAL MODULE: ./src/hooks/use-check-mobile-screen.tsx
var use_check_mobile_screen = __webpack_require__(9488);
;// CONCATENATED MODULE: ./src/components/ui/Icons/keyboard-backspace-icon.tsx


function KeyboardBackspaceIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M365 848 92 576l273-272 88 88-121 121h536v126H332l121 121-88 88Z"
        })
    });
}
/* harmony default export */ const keyboard_backspace_icon = (KeyboardBackspaceIcon);

;// CONCATENATED MODULE: ./src/components/ui/Icons/menu-icon.tsx


function MenuIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M97 854V728h766v126H97Zm0-215V513h766v126H97Zm0-215V298h766v126H97Z"
        })
    });
}
/* harmony default export */ const menu_icon = (MenuIcon);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ui/Icons/keyboard-arrow-down-icon.tsx


function KeyboardArrowDownIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M480 718q-12 0-23.5-4.5T436 700L252 516q-18-18-18-44t18-44q18-18 44-18t44 18l140 140 140-140q18-18 44-18t44 18q18 18 18 44t-18 44L524 700q-9 9-20.5 13.5T480 718Z"
        })
    });
}
/* harmony default export */ const keyboard_arrow_down_icon = (KeyboardArrowDownIcon);

;// CONCATENATED MODULE: ./src/components/ui/Icons/keyboard-arrow-up-icon.tsx


function KeyboardArrowUpIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M252 700q-18-18-18-44t18-44l184-184q10-10 21-14t23-4q12 0 23.5 4.5T524 428l184 184q18 18 18 44t-18 44q-18 18-44 18t-44-18L480 560 340 700q-18 18-44 18t-44-18Z"
        })
    });
}
/* harmony default export */ const keyboard_arrow_up_icon = (KeyboardArrowUpIcon);

;// CONCATENATED MODULE: ./src/components/layout/navigation/nav-button.tsx






function NavButton(props) {
    const { name, icon, child = [], className, onClick = ()=>{} } = props;
    const { parentPath } = (0,use_app_nav/* default */.Z)();
    const childPath = child.find((el)=>el.path === parentPath);
    const isParentActive = props.isActive || Boolean(childPath);
    const renderDropdown = child.length > 0;
    const HtmlTag = renderDropdown || name === "Logout" ? "button" : "div";
    const [toggleDropdown, setToggleDropdown] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-4 text-sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(HtmlTag, {
                className: `${renderDropdown && "mb-4"} flex h-12 w-full flex-row items-center rounded-md ${isParentActive ? "bg-ui-blue/20 text-ui-blue/80" : "text-ui-gray-blue-80"} px-4 transition duration-200 hover:text-ui-blue/80 ${className}`,
                onClick: ()=>{
                    if (renderDropdown) setToggleDropdown(!toggleDropdown);
                    if (name === "Logout") onClick;
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-grow items-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: /*#__PURE__*/ external_react_default().cloneElement(icon, {
                                    size: 5
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: name
                            })
                        ]
                    }),
                    renderDropdown && /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: toggleDropdown ? /*#__PURE__*/ jsx_runtime.jsx(keyboard_arrow_up_icon, {
                            size: 5
                        }) : /*#__PURE__*/ jsx_runtime.jsx(keyboard_arrow_down_icon, {
                            size: 5
                        })
                    })
                ]
            }),
            renderDropdown && toggleDropdown && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "flex w-full flex-col pl-8 pr-4 font-bold text-ui-gray-blue-70",
                children: child.map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: `${child.length !== i + 1 && "mb-4"} flex h-12 items-center ${childPath?.path === el.path && "text-ui-blue/70"}  transition duration-200 hover:text-ui-blue/70`,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: el.path,
                            onClick: props.onClick,
                            children: el.name
                        })
                    }, i))
            })
        ]
    });
}
/* harmony default export */ const nav_button = (NavButton);

;// CONCATENATED MODULE: ./src/components/ui/Icons/logout-red.tsx


function LogoutIcon() {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M24 6H6C4.9 6 4 6.9 4 8V10.99C4 11.54 4.45 11.99 5 11.99C5.55 11.99 6 11.54 6 10.99V8.98C6 8.43 6.45 7.98 7 7.98H23C23.55 7.98 24 8.43 24 8.98V21.01C24 21.56 23.55 22.01 23 22.01H7C6.45 22.01 6 21.56 6 21.01V18.99C6 18.44 5.55 17.99 5 17.99C4.45 17.99 4 18.44 4 18.99V22C4 23.09 4.89 23.98 5.98 23.98H24C25.1 23.98 26 23.08 26 21.98V8C26 6.9 25.1 6 24 6ZM14.85 18.14L17.64 15.35C17.84 15.15 17.84 14.84 17.64 14.64L14.85 11.85C14.54 11.53 14 11.75 14 12.2V13.99H5C4.45 13.99 4 14.44 4 14.99C4 15.54 4.45 15.99 5 15.99H14V17.78C14 18.23 14.54 18.45 14.85 18.14Z",
            fill: "#E62E2E"
        })
    });
}
/* harmony default export */ const logout_red = (LogoutIcon);

;// CONCATENATED MODULE: ./src/components/layout/navigation/navigation.tsx







function Navigation({ onMobileNav }) {
    const { navLinks, parentPath } = (0,use_app_nav/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "mx-2",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            children: [
                navLinks.map((el, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: el.child.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: el.path,
                            onClick: onMobileNav,
                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_button, {
                                name: el.name,
                                icon: el.icon,
                                isActive: parentPath === el.path
                            })
                        }) : /*#__PURE__*/ jsx_runtime.jsx(nav_button, {
                            className: "cursor-pointer",
                            name: el.name,
                            icon: el.icon,
                            child: el.child,
                            onClick: onMobileNav
                        })
                    }, i)),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: "flex h-12 w-full flex-row items-center rounded-md px-4 text-ui-gray-blue-80 transition duration-200 hover:text-ui-blue/80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "flex flex-grow items-center gap-3",
                        onClick: ()=>(0,react_.signOut)({
                                callbackUrl: "/login"
                            }),
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(logout_red, {}),
                            "Logout"
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: ./src/components/layout/navigation/content-with-nav.tsx










function ContentWithNav(props) {
    const { children } = props;
    const { parentPath } = (0,use_app_nav/* default */.Z)();
    let path = parentPath.split("/");
    const { data: session } = (0,react_.useSession)();
    const { isParentPath, desktopHeaderName, mobileHeaderName, NextRouter } = (0,use_app_nav/* default */.Z)();
    const isMobile = (0,use_check_mobile_screen/* default */.Z)();
    const [toogleSidebar, setToogleSidebar] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex h-screen gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `relative w-72 translate-x-0 bg-white sidebar:absolute sidebar:inset-y-0 sidebar:left-0 sidebar:z-20 ${!toogleSidebar ? "sidebar:-translate-x-full" : "sidebar:shadow-[0_0_0_10000px_rgba(0,0,0,.50)]"} sidebar:transform sidebar:overflow-y-auto sidebar:bg-[#f7f8fa] sidebar:transition sidebar:duration-200 sidebar:ease-out`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mb-8 flex h-20 flex-row items-center justify-center px-2",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/images/site/logo.png",
                            alt: "logo",
                            width: 100,
                            height: 100,
                            // className="mx-auto"
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(navigation, {
                        onMobileNav: ()=>{
                            if (isMobile) {
                                setTimeout(()=>{
                                    setToogleSidebar(false);
                                }, 250);
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "h-screen min-w-0 flex-1 text-ui-gray-blue-60 md:pr-2",
                children: [
                    !path.includes("point-of-sales") && /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                        className: "flex h-20 flex-row items-center gap-4 border-b-2 border-solid border-ui-gray-blue-90",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "ml-4 flex text-ui-gray-blue-80 md:hidden",
                                children: !isParentPath ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>NextRouter.back(),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(keyboard_backspace_icon, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "Icon Button"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>setToogleSidebar(true),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(menu_icon, {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sr-only",
                                            children: "Icon Button"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "md:ml-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: "text-lg",
                                    children: isMobile ? mobileHeaderName : desktopHeaderName
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `mr-4 flex-grow items-center justify-end text-right`,
                                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: session?.user?.role == "admin" ? "Super Admin" : "Karyawan"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "mx-4 h-full pb-4 md:mx-0",
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(OffCanvasOverlay/* default */.Z, {
                disabledBackground: true,
                active: toogleSidebar,
                onClick: ()=>setToogleSidebar(false)
            })
        ]
    });
}
/* harmony default export */ const content_with_nav = (ContentWithNav);

;// CONCATENATED MODULE: ./src/components/layout/layout.tsx






const { publicRuntimeConfig } = config_default()();
function Layout(props) {
    const { children } = props;
    const { parentPath } = (0,use_app_nav/* default */.Z)();
    const { status } = (0,react_.useSession)();
    if (status === "loading") return null;
    return /*#__PURE__*/ jsx_runtime.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto h-screen w-screen",
            children: [
                parentPath === "/login" || // ||
                // parentPath === "/test" ||
                // parentPath === "/admin" ||
                // parentPath === "/karyawan" ||
                // parentPath === "/admin/" ||
                // parentPath === "/karyawan/"
                parentPath === "/" ? /*#__PURE__*/ jsx_runtime.jsx("main", {
                    children: children
                }) : /*#__PURE__*/ jsx_runtime.jsx(content_with_nav, {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed bottom-0 right-0 z-[1] text-right text-ui-gray-blue-60",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("pre", {
                        children: [
                            "v",
                            publicRuntimeConfig?.version
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 3600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function OffCanvasOverlay({ active, disabledBackground, onClick }) {
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (active) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [
        active
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: onClick,
            className: `fixed inset-0 z-10 h-full w-full ${!disabledBackground && "bg-black/25"}`
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffCanvasOverlay);


/***/ }),

/***/ 1032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ use_app_nav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/ui/Icons/group-icon.tsx


function GroupIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        width: "24",
        viewBox: "0 96 960 960",
        "aria-hidden": "true",
        shapeRendering: "optimizeSpeed",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M72 947q-26 0-44.5-18.5T9 884v-85q0-43 22.5-79.5T92 664q65-32 133-48.5T363 599q72 0 140 16t131 48q38 19 60.5 55t22.5 81v85q0 26-18.5 44.5T654 947H72Zm710 0q13-11 21.5-27.5T812 883v-89q0-48-23.5-93.5T717 611q40 8 77 21t72 31q40 20 62.5 56t22.5 78v87q0 26-18.5 44.5T888 947H782ZM363 559q-74 0-125.5-51.5T186 382q0-74 51.5-125.5T363 205q74 0 125.5 51.5T540 382q0 74-51.5 125.5T363 559Zm449-177q0 73-52 125t-125 52q-12 0-28-3t-31-8q29-34 44-77t15-89q0-46-15-89t-44-77q15-6 29-8.5t30-2.5q73 0 125 52t52 125Z"
        })
    });
}
/* harmony default export */ const group_icon = (GroupIcon);

;// CONCATENATED MODULE: ./src/components/ui/Icons/list-alt.icon.tsx


function ListAltIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        shapeRendering: "optimizeSpeed",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M212 970q-53 0-89.5-36.5T86 844V308q0-53 36.5-89.5T212 182h536q53 0 89.5 36.5T874 308v536q0 53-36.5 89.5T748 970H212Zm0-126h536V308H212v536Zm108-74q17 0 28.5-11.5T360 730q0-17-11.5-28.5T320 690q-17 0-28.5 11.5T280 730q0 17 11.5 28.5T320 770Zm0-154q17 0 28.5-11.5T360 576q0-17-11.5-28.5T320 536q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616Zm0-154q17 0 28.5-11.5T360 422q0-17-11.5-28.5T320 382q-17 0-28.5 11.5T280 422q0 17 11.5 28.5T320 462Zm160 308h160q17 0 28.5-11.5T680 730q0-17-11.5-28.5T640 690H480q-17 0-28.5 11.5T440 730q0 17 11.5 28.5T480 770Zm0-154h160q17 0 28.5-11.5T680 576q0-17-11.5-28.5T640 536H480q-17 0-28.5 11.5T440 576q0 17 11.5 28.5T480 616Zm0-154h160q17 0 28.5-11.5T680 422q0-17-11.5-28.5T640 382H480q-17 0-28.5 11.5T440 422q0 17 11.5 28.5T480 462ZM212 844V308v536Z"
        })
    });
}
/* harmony default export */ const list_alt_icon = (ListAltIcon);

;// CONCATENATED MODULE: ./src/components/ui/Icons/money-icon.tsx


function MoneyIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `h-${size} w-${size} ${color === "default" && "text-inherit"} ${color === "red" && "text-ui-red"} ${color === "blue" && "text-ui-blue"}`,
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 96 960 960",
        width: "24",
        "aria-hidden": "true",
        shapeRendering: "optimizeSpeed",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M600 736h120q17 0 28.5-11.5T760 696V456q0-17-11.5-28.5T720 416H600q-17 0-28.5 11.5T560 456v240q0 17 11.5 28.5T600 736Zm40-80V496h40v160h-40Zm-280 80h120q17 0 28.5-11.5T520 696V456q0-17-11.5-28.5T480 416H360q-17 0-28.5 11.5T320 456v240q0 17 11.5 28.5T360 736Zm40-80V496h40v160h-40Zm-160 80q17 0 28.5-11.5T280 696V456q0-17-11.5-28.5T240 416q-17 0-28.5 11.5T200 456v240q0 17 11.5 28.5T240 736Zm-80 206q-51.975 0-88.987-37.013Q34 867.975 34 816V336q0-51.975 37.013-88.987Q108.025 210 160 210h640q51.975 0 88.987 37.013Q926 284.025 926 336v480q0 51.975-37.013 88.987Q851.975 942 800 942H160Zm0-126h640V336H160v480Zm0 0V336v480Z"
        })
    });
}
/* harmony default export */ const money_icon = (MoneyIcon);

;// CONCATENATED MODULE: ./src/components/ui/Icons/triangle-icon.tsx


function TriangleIcon({ color = "default", size = 4 }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.1998 9.8825L21.5898 20.1125H8.80985L15.1998 9.8825ZM14.3498 7.4725L6.14985 20.5825C5.73985 21.2525 6.21985 22.1125 6.99985 22.1125H23.3998C24.1898 22.1125 24.6598 21.2525 24.2498 20.5825L16.0498 7.4725C15.6598 6.8425 14.7398 6.8425 14.3498 7.4725Z",
            fill: "#ADB8CC"
        })
    });
}
/* harmony default export */ const triangle_icon = (TriangleIcon);

;// CONCATENATED MODULE: ./src/routes/index.tsx





function routes() {
    /* HALAMAN ADMIN */ const navLinksAdmin = [
        {
            name: "Kelola Partner",
            path: "/admin/partner",
            icon: /*#__PURE__*/ jsx_runtime.jsx(group_icon, {}),
            child: []
        },
        {
            name: "Kelola Publikasi",
            path: "/admin/publication",
            icon: /*#__PURE__*/ jsx_runtime.jsx(list_alt_icon, {}),
            child: []
        },
        {
            name: "Kelola Main Services",
            path: "/admin/main-services",
            icon: /*#__PURE__*/ jsx_runtime.jsx(group_icon, {}),
            child: []
        }
    ];
    /* HALAMAN KARYAWAM */ const navLinksKaryawam = [
        {
            name: "Kelola Member",
            path: "/karyawan/member",
            icon: /*#__PURE__*/ jsx_runtime.jsx(triangle_icon, {}),
            child: []
        },
        {
            name: "Kelola Pembayaran",
            path: "/karyawan/pembayaran",
            icon: /*#__PURE__*/ jsx_runtime.jsx(group_icon, {}),
            child: []
        },
        {
            name: "Check-In History",
            path: "/karyawan/check-in",
            icon: /*#__PURE__*/ jsx_runtime.jsx(list_alt_icon, {}),
            child: []
        },
        {
            name: "Point of Sales",
            path: "/karyawan/point-of-sales",
            icon: /*#__PURE__*/ jsx_runtime.jsx(list_alt_icon, {}),
            child: []
        },
        {
            name: "Rekapan Penjualan Gym",
            path: "/karyawan/sales-recap",
            icon: /*#__PURE__*/ jsx_runtime.jsx(money_icon, {}),
            child: []
        },
        {
            name: "Rekapan Penjualan Cafe",
            path: "/karyawan/sales-recap-cafe",
            icon: /*#__PURE__*/ jsx_runtime.jsx(money_icon, {}),
            child: []
        }
    ];
    return {
        admin: navLinksAdmin,
        karyawan: navLinksKaryawam
    };
}
/* harmony default export */ const src_routes = (routes);

;// CONCATENATED MODULE: ./src/hooks/use-app-nav.tsx
/* eslint-disable react-hooks/exhaustive-deps */ 



const useAppNav = ()=>{
    const { admin, karyawan } = src_routes();
    const { data: session } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    const [appNav, setAppNav] = external_react_default().useState({
        query: router.query,
        slug: "",
        navLinks: [],
        parentPath: "",
        desktopHeaderName: "",
        mobileHeaderName: "",
        NextRouter: router,
        isParentPath: false
    });
    const slug = router.query.addEdit ?? [];
    const navLinks = (role)=>{
        return role === "admin" ? admin : karyawan;
    };
    const getParentPath = (role)=>{
        const getPath = (arrIndex)=>{
            return router.asPath.split("/")[arrIndex] ?? "";
        };
        if (getPath(1) === "test") {
            return "/test";
        }
        if (role === "admin") {
            return "/admin/" + getPath(2).replace("#", "");
        } else if (role === "karyawan") {
            return "/karyawan/" + getPath(2).replace("#", "");
        } else {
            return "/" + getPath(1).replace("#", "");
        }
    };
    const getHeaderName = (role)=>{
        const dataLink = navLinks(role);
        const parentPath = getParentPath(role);
        let desktop = "";
        let mobile = "";
        for (const i of dataLink){
            if (i.child.length > 0) {
                for (const j of i.child){
                    if (j.path === parentPath) desktop = j.name;
                }
            } else {
                if (i.path === parentPath) desktop = i.name;
            }
        }
        if (slug.length > 0) {
            if (parentPath === "/admin/divisi") {
                if (router.pathname.includes("admin/divisi/sub")) {
                    mobile = slug[1] === "add" ? `Tambah Subdivisi dan Item` : `Edit Sub Divisi dan Item`;
                } else {
                    mobile = slug[0] === "add" ? `Tambah User Divisi` : `Edit User Divisi`;
                }
            } else {
                mobile = slug[0] === "add" ? `Tambah ${desktop}` : `Edit ${desktop}`;
            }
        } else {
            if (router.pathname.includes("admin/divisi/sub")) {
                mobile = "Sub Divisi";
            } else {
                mobile = desktop;
            }
        }
        return {
            desktop,
            mobile
        };
    };
    external_react_default().useEffect(()=>{
        if (session) {
            setAppNav({
                slug,
                query: router.query,
                navLinks: navLinks(session.user.role),
                parentPath: getParentPath(session.user.role),
                desktopHeaderName: getHeaderName(session.user.role).desktop,
                mobileHeaderName: getHeaderName(session.user.role).mobile,
                NextRouter: router,
                isParentPath: getParentPath(session.user.role) === router.asPath
            });
        } else {
            setAppNav({
                slug,
                query: router.query,
                navLinks: [],
                parentPath: getParentPath(),
                desktopHeaderName: "",
                mobileHeaderName: "",
                NextRouter: router,
                isParentPath: false
            });
        }
    }, [
        session,
        router
    ]);
    return appNav;
};
/* harmony default export */ const use_app_nav = (useAppNav);


/***/ }),

/***/ 9488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useResponsive = ()=>{
    const [initialRender, setInitialRender] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
    const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        window.addEventListener("resize", handleWindowSizeChange);
        return ()=>{
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{
        if (initialRender) {
            setInitialRender(false);
            handleWindowSizeChange();
        }
    }, [
        initialRender
    ]);
    return width <= 767;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResponsive);


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9063);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3929);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function App(props) {
    const { Component, pageProps } = props;
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        session: pageProps.session,
        refetchInterval: 5 * 60,
        refetchOnWindowFocus: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {
                    initialIsOpen: false
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "box-border bg-[#f7f8fa] text-sm font-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;