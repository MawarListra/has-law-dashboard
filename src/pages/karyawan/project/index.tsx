import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import MainContentProjectKaryawan from "@/components/pages/karyawan/project/main-content";

import useAppNav from "@/hooks/use-app-nav";

// import type { GetServerSideProps } from "next";

function ListProjectKaryawanProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
    return null;
  }

  if (status === "authenticated" && session.user.role !== "karyawan") {
    NextRouter.replace("/admin");
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Has Law | List Project</title>
        <meta name="description" content="PT. PPMB - Karyawan | List Project" />
      </Head>

      <MainContentProjectKaryawan />
    </React.Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerSession(ctx.req, ctx.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   if (session.user.role !== "karyawan") {
//     return {
//       redirect: {
//         destination: "/admin/karyawan",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default ListProjectKaryawanProtectedPage;
