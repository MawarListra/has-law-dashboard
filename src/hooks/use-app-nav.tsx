/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import routes from "@/routes";

import type { NextRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";

type AppNavState = {
  query: ParsedUrlQuery;
  slug: string | string[];
  navLinks: any[];
  parentPath: string;
  desktopHeaderName: string;
  mobileHeaderName: string;
  NextRouter: NextRouter;
  isParentPath: boolean;
};

const useAppNav = () => {
  const { admin, karyawan } = routes();

  const { data: session } = useSession();
  const router = useRouter();

  const [appNav, setAppNav] = React.useState<AppNavState>({
    query: router.query,
    slug: "",
    navLinks: [],
    parentPath: "",
    desktopHeaderName: "",
    mobileHeaderName: "",
    NextRouter: router,
    isParentPath: false,
  });

  const slug = router.query.addEdit ?? [];
  const navLinks = (role: "admin" | "karyawan") => {
    return role === "admin" ? admin : karyawan;
  };
  const getParentPath = (role?: "admin" | "karyawan") => {
    const getPath = (arrIndex: number) => {
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

  interface Child {
    path: string;
    name: string;
    // Add other properties if necessary
  }

  interface DataLinkItem {
    path: string;
    name: string;
    child: Child[];
    // Add other properties if necessary
  }

  const getHeaderName = (role: "admin" | "karyawan") => {
    const dataLink = navLinks(role);
    const parentPath = getParentPath(role);

    let desktop = "";
    let mobile = "";

    for (const i of dataLink) {
      if (i.child.length > 0) {
        for (const j of i.child) {
          if (j.path === parentPath) desktop = j.name;
        }
      } else {
        if (i.path === parentPath) desktop = i.name;
      }
    }

    if (slug.length > 0) {
      if (parentPath === "/admin/divisi") {
        if (router.pathname.includes("admin/divisi/sub")) {
          mobile =
            slug[1] === "add"
              ? `Tambah Subdivisi dan Item`
              : `Edit Sub Divisi dan Item`;
        } else {
          mobile =
            slug[0] === "add" ? `Tambah User Divisi` : `Edit User Divisi`;
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
      mobile,
    };
  };

  React.useEffect(() => {
    if (session) {
      setAppNav({
        slug,
        query: router.query,
        navLinks: navLinks(session.user.role),
        parentPath: getParentPath(session.user.role),
        desktopHeaderName: getHeaderName(session.user.role).desktop,
        mobileHeaderName: getHeaderName(session.user.role).mobile,
        NextRouter: router,
        isParentPath: getParentPath(session.user.role) === router.asPath,
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
        isParentPath: false,
      });
    }
  }, [session, router]);

  return appNav;
};

export default useAppNav;
