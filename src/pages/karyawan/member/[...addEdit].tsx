import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import AddEditMember from "@/components/pages/karyawan/member/add-edit-content";

import useAppNav from "@/hooks/use-app-nav";

// import type { GetServerSideProps } from "next";

function AddEditMemberProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
    return null;
  }

  if (status === "authenticated" && session?.user.role !== "karyawan") {
    NextRouter.replace("/admin");
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Has Law | Member</title>
        <meta name="description" content="Has Law | Member" />
      </Head>

      <AddEditMember />
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

export default AddEditMemberProtectedPage;
