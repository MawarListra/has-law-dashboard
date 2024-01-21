import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import MainContentMainServices from "@/components/pages/admin/main-services/main-content";

import useAppNav from "@/hooks/use-app-nav";

// import type { GetServerSideProps } from "next";

function MainServicesProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
    return null;
  }

  if (status === "authenticated" && session?.user.role !== "admin") {
    NextRouter.replace("/karyawan");
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Has Law | Main Services</title>
        <meta name="description" content="Has Law | Main Services" />
      </Head>

      <MainContentMainServices />
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
//     props: {},
//   };
// };

export default MainServicesProtectedPage;
