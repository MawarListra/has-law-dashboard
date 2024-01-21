import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import useAppNav from "@/hooks/use-app-nav";

// import type { GetServerSideProps } from "next";

function AdminRootProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
  }

  if (status === "authenticated") {
    if (session?.user.role !== "admin") {
      NextRouter.replace("/karyawan");
    } else {
      NextRouter.replace("/admin/karyawan");
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Flex Gym</title>
        <meta name="description" content="Flex Gym" />
      </Head>
    </React.Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   ctx.res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=1800, stale-while-revalidate=86400"
//   );

//   const session = await getServerSession(ctx.req, ctx.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   if (session.user.role !== "admin") {
//     return {
//       redirect: {
//         destination: "/karyawan/list-pengajuan",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     redirect: {
//       destination: "/admin/karyawan",
//       permanent: false,
//     },
//   };
// };

export default AdminRootProtectedPage;
