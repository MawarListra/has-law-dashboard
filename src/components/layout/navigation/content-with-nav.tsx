import React, { useState, useEffect } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import OffCanvasOverlay from "@/components/ui/OffCanvasOverlay";
import { useSession } from "next-auth/react";

import useAppNav from "@/hooks/use-app-nav";
import useResponsive from "@/hooks/use-check-mobile-screen";

import KeyboardBackspaceIcon from "@/components/ui/Icons/keyboard-backspace-icon";
import MenuIcon from "@/components/ui/Icons/menu-icon";

import Navigation from "./navigation";

import moment from "moment";
interface Props {
  children: React.ReactNode;
}

function ContentWithNav(props: Props) {
  const { children } = props;
  const { parentPath } = useAppNav();
  let path = parentPath.split("/");

  const { data: session } = useSession();
  const { isParentPath, desktopHeaderName, mobileHeaderName, NextRouter } =
    useAppNav();
  const isMobile = useResponsive();

  const [toogleSidebar, setToogleSidebar] = React.useState(false);
  return (
    <div className="relative flex h-screen gap-4">
      <div
        className={`relative w-72 translate-x-0 bg-white sidebar:absolute sidebar:inset-y-0 sidebar:left-0 sidebar:z-20 ${
          !toogleSidebar
            ? "sidebar:-translate-x-full"
            : "sidebar:shadow-[0_0_0_10000px_rgba(0,0,0,.50)]"
        } sidebar:transform sidebar:overflow-y-auto sidebar:bg-[#f7f8fa] sidebar:transition sidebar:duration-200 sidebar:ease-out`}
      >
        {/* SIDEBAR */}
        <div className="mb-8 flex h-20 flex-row items-center justify-center px-2">
          <Image
            src="/images/site/logo.png"
            alt="logo"
            width={100}
            height={100}
            // className="mx-auto"
            priority
          />
          {/* <span
            style={{
              color: "#6B7A99",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "20px",
            }}
          >
            HAS LAW
          </span> */}
        </div>

        <Navigation
          onMobileNav={() => {
            if (isMobile) {
              setTimeout(() => {
                setToogleSidebar(false);
              }, 250);
            }
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="h-screen min-w-0 flex-1 text-ui-gray-blue-60 md:pr-2">
        {!path.includes("point-of-sales") && (
          <header className="flex h-20 flex-row items-center gap-4 border-b-2 border-solid border-ui-gray-blue-90">
            <span className="ml-4 flex text-ui-gray-blue-80 md:hidden">
              {!isParentPath ? (
                <button type="button" onClick={() => NextRouter.back()}>
                  <KeyboardBackspaceIcon />
                  <span className="sr-only">Icon Button</span>
                </button>
              ) : (
                <button type="button" onClick={() => setToogleSidebar(true)}>
                  <MenuIcon />
                  <span className="sr-only">Icon Button</span>
                </button>
              )}
            </span>
            <div className="md:ml-4">
              <h1 className="text-lg">
                {isMobile ? mobileHeaderName : desktopHeaderName}
              </h1>
              {/* {isMobile && (
              <span className="text-xs text-ui-gray-blue-70">
                SUBTITLE TEST
              </span>
            )} */}
            </div>
            <div
              className={`mr-4 flex-grow items-center justify-end text-right`}
            >
              <h1>
                {session?.user?.role == "admin" ? "Super Admin" : "Karyawan"}
              </h1>
            </div>
          </header>
        )}
        <main className="mx-4 h-full pb-4 md:mx-0">{children}</main>
      </div>

      {/* OVERLAY SAAT SDEBAR TERBUKA (MOBILE ONLY) */}
      <OffCanvasOverlay
        disabledBackground
        active={toogleSidebar}
        onClick={() => setToogleSidebar(false)}
      />
    </div>
  );
}

export default ContentWithNav;
