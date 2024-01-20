import AttachMoneyIcon from "@/components/ui/Icons/attach-money-icon";
import ChangeHistoryIcon from "@/components/ui/Icons/change-history-icon";
import CodeIcon from "@/components/ui/Icons/code-icon";
import FolderIcon from "@/components/ui/Icons/folder-icon";
import GroupIcon from "@/components/ui/Icons/group-icon";
import ListAltIcon from "@/components/ui/Icons/list-alt.icon";
import MoneyIcon from "@/components/ui/Icons/money-icon";
import LogoutIcon from "@/components/ui/Icons/logout-red";
import TriangleIcon from "@/components/ui/Icons/triangle-icon";
import { signOut } from "next-auth/react";
import OpenInNewIcon from "@/components/ui/Icons/open-in-new-icon";
import MenuIcon from "@/components/ui/Icons/menu-icon";

interface Child {
  path: string;
  name: string;
  // Add other properties if necessary
}

interface DataLinkItem {
  path: string;
  name: string;
  icon: any;
  child: Child[];
  // Add other properties if necessary
}

function routes() {
  /* HALAMAN ADMIN */
  const navLinksAdmin: DataLinkItem[] = [
    {
      name: "Kelola Partner",
      path: "/admin/partner",
      icon: <GroupIcon />,
      child: [],
    },
  ];

  /* HALAMAN KARYAWAM */
  const navLinksKaryawam = [
    {
      name: "Kelola Member",
      path: "/karyawan/member",
      icon: <TriangleIcon />,
      child: [],
    },
    {
      name: "Kelola Pembayaran",
      path: "/karyawan/pembayaran",
      icon: <GroupIcon />,
      child: [],
    },
    {
      name: "Check-In History",
      path: "/karyawan/check-in",
      icon: <ListAltIcon />,
      child: [],
    },
    {
      name: "Point of Sales",
      path: "/karyawan/point-of-sales",
      icon: <ListAltIcon />,
      child: [],
    },
    {
      name: "Rekapan Penjualan Gym",
      path: "/karyawan/sales-recap",
      icon: <MoneyIcon />,
      child: [],
    },
    {
      name: "Rekapan Penjualan Cafe",
      path: "/karyawan/sales-recap-cafe",
      icon: <MoneyIcon />,
      child: [],
    },
  ];

  return {
    admin: navLinksAdmin,
    karyawan: navLinksKaryawam,
  };
}

export default routes;
