import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import useAppNav from "@/hooks/use-app-nav";

// import type { GetServerSideProps } from "next";

function KaryawanRootProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
  }

  if (status === "authenticated") {
    if (session?.user?.role !== "karyawan") {
      NextRouter.replace("/admin");
    } else {
      NextRouter.replace("/karyawan/member");
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>PT. PPMB</title>
        <meta name="description" content="PT. PPMB" />
      </Head>
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
//     redirect: {
//       destination: "/karyawan/list-pengajuan",
//       permanent: false,
//     },
//   };
// };

export default KaryawanRootProtectedPage;
