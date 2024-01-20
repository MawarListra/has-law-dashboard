import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import useAppNav from "@/hooks/use-app-nav";

import { redirectTo } from "@/libs/check-role";
// import type { GetServerSideProps } from "next"

function IndexPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
  }

  if (status === "authenticated") {
    NextRouter.replace(redirectTo("admin"));
  }

  return (
    <React.Fragment>
      <Head>
        <title>Has Law</title>
        <meta name="description" content="Has Law" />
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

//   return {
//     redirect: {
//       destination: redirectTo(session.user.role),
//       permanent: false,
//     },
//   };
// };

export default IndexPage;
