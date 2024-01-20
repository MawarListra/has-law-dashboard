import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import LoginFormComponent from "@/components/pages/login/login-form";

import useAppNav from "@/hooks/use-app-nav";

import { redirectTo } from "@/libs/check-role";

// import type { GetServerSideProps } from "next";

function LoginPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    NextRouter.replace(redirectTo(session?.user?.role || "admin"));
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Has Law | Login</title>
        <meta name="description" content="Has Law | Login" />
      </Head>

      <LoginFormComponent />
    </React.Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerSession(ctx.req, ctx.res, authOptions);

//   if (session) {
//     return {
//       redirect: {
//         destination: redirectTo(session.user.role),
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default LoginPage;
