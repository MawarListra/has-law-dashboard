import React from "react";
import getConfig from "next/config";
import { useSession } from "next-auth/react";

import useAppNav from "@/hooks/use-app-nav";

import ContentWithNav from "./navigation/content-with-nav";

interface LayoutProps {
  children: React.ReactNode;
}

const { publicRuntimeConfig } = getConfig();
function Layout(props: LayoutProps) {
  const { children } = props;

  const { parentPath } = useAppNav();
  const { status } = useSession();

  if (status === "loading") return null;

  return (
    <React.Fragment>
      <div className="container mx-auto h-screen w-screen">
        {parentPath === "/login" ||
        // ||
        // parentPath === "/test" ||
        // parentPath === "/admin" ||
        // parentPath === "/karyawan" ||
        // parentPath === "/admin/" ||
        // parentPath === "/karyawan/"
        parentPath === "/" ? (
          <main>{children}</main>
        ) : (
          <ContentWithNav>{children}</ContentWithNav>
        )}

        <div className="fixed bottom-0 right-0 z-[1] text-right text-ui-gray-blue-60">
          <pre>v{publicRuntimeConfig?.version}</pre>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Layout;
