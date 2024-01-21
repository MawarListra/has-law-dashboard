import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

import AddEditMainServices from "@/components/pages/admin/main-services/add-edit-content";
import AllServices from "@/components/pages/admin/main-services/all-services";
import AddEditServices from "@/components/pages/admin/main-services/add-edit-services";

import useAppNav from "@/hooks/use-app-nav";
import { useRouter } from "next/router";

// import type { GetServerSideProps } from "next";

function AddEditMainServicesProtectedPage() {
  const { NextRouter } = useAppNav();
  const { data: session, status } = useSession();
  const { query } = useRouter();
  const [mainServicesId, setMainServicesId] = useState("");
  const [servicesId, setServicesId] = useState("");

  const type = query?.addEdit?.[0];
  const slug = query?.addEdit || [];

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    NextRouter.replace("/login");
    return null;
  }

  if (status === "authenticated" && session?.user.role !== "admin") {
    NextRouter.replace("/karyawan");
    return null;
  }

  useEffect(() => {
    if (type === "services-all") {
      setMainServicesId(slug[1]);
    }
    if (type === "services-add" || type === "services-edit") {
      setServicesId(slug[1]);
    }
  }, [type]);

  const renderContent = useMemo(() => {
    console.log("cek here type", type);
    if (type === "add" || type === "edit") {
      return <AddEditMainServices />;
    } else if (mainServicesId !== "" || servicesId !== "") {
      if (type === "services-all") {
        return <AllServices main_services_id={mainServicesId} />;
      } else if (type === "services-add" || type === "services-edit") {
        return (
          <AddEditServices
            main_services_id={mainServicesId}
            services_id={servicesId}
          />
        );
      }
    }
  }, [type, mainServicesId, servicesId]);

  return (
    <React.Fragment>
      <Head>
        <title>Has Law | Main Services</title>
        <meta name="description" content="Has Law | Main Services" />
      </Head>

      {renderContent}
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

export default AddEditMainServicesProtectedPage;
