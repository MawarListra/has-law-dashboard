/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Link from "next/link";

/* UI- COMPONENTS */
import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/Button/ButtonIcon";
import Confirm from "@/components/ui/Modal/Confirm";
import InputSearch from "@/components/ui/Form/Input/InputField/Search";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import Tabs from "@/components/ui/Tabs";

/* UI - ICONS */
import AddCircleIcon from "@/components/ui/Icons/add-circle-icon";
import EditIcon from "@/components/ui/Icons/edit-icon";
import DeleteIcon from "@/components/ui/Icons/delete-icon";

import useResponsive from "@/hooks/use-check-mobile-screen";
import useDebounce from "@/hooks/use-debounce";
import {
  ApiDeleteDivisi,
  ApiGetAllDivisi,
  ApiGetAllKategoriProject,
  ApiGetAllPembayaran,
} from "@/hooks/use-fetch";

import getIndexTable from "@/libs/get-index-table";

import type { TItemTabs } from "@/components/ui/Tabs";
import type { ColumnDef } from "@tanstack/react-table";
import type { TTableType } from "@/components/ui/Table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import type { PembayaranType } from "@/types/admin/pembayaran";

type TDataState = TAppState<PembayaranType>;
type TDataTable = TTableType<TDataState>;

function MainContentPembayaran() {
  const isMobile = useResponsive();

  /* REACT STATE */
  const [tabsData, setTabsData] = React.useState<{
    activeKey: number | string;
    data: TItemTabs[];
  }>({
    activeKey: 0,
    data: [],
  });
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });
  const [deletePopup, setDeletePopup] = React.useState<{
    open: boolean;
    selectedId: null | number;
  }>({
    open: false,
    selectedId: null,
  });
  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  // Divisi //
  // [GET] All Pembayaran
  const getAllPembayaran = ApiGetAllPembayaran({
    params: {
      page: metaState.page,
      pagesize: metaState.size,
      search: searchData.current,
    },
    onSuccess(res) {
      const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: data?.length,
        totalPage: 1,
      };
      const newData = getIndexTable(data, newMeta);

      setDataState(newData);
      setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  // [DELETE] Divisi
  // const deleteDivisi = ApiDeleteDivisi({
  //   onSuccess() {
  //     alert("Berhasil menghapus Data Divisi");
  //     setDeletePopup({
  //       open: false,
  //       selectedId: null,
  //     });

  //     getAllPembayaran.refetch();
  //   },
  //   onError(err) {
  //     alert("Telah terjadi kesalahan saat Hapus Data.");
  //     console.error(err);
  //   },
  // });

  // Kategori Project //
  // [GET] All Kategori Project
  // const getAllKategoriProject = ApiGetAllKategoriProject({
  //   params: null,
  //   refetchOnWindowFocus: false,
  //   onSuccess(res) {
  //     const { data } = res;
  //     let tabsTemp = [];

  //     for (const key in data) {
  //       tabsTemp.push({
  //         key: data[key].id,
  //         label: data[key].project_name,
  //       });
  //     }

  //     if (!tabsData.activeKey) {
  //       setTabsData({
  //         activeKey: tabsTemp[0]?.key ?? 0,
  //         data: tabsTemp,
  //       });
  //     } else {
  //       setTabsData({
  //         ...tabsData,
  //         data: tabsTemp,
  //       });
  //     }
  //   },
  //   onError(err) {
  //     console.error(err);
  //   },
  // });
  React.useEffect(() => {
    getAllPembayaran.refetch();
  }, []);

  const columns = React.useMemo<ColumnDef<TDataTable>[]>(
    () => [
      {
        header: "#",
        accessorKey: "index",
      },
      {
        header: "Nama",
        accessorKey: "member.name",
      },
      {
        header: "Nomor Handphone",
        accessorKey: "member.phone",
      },
      {
        header: "Jenis Member",
        accessorKey: "member.jenis_member",
      },
      {
        header: "Durasi Member",
        accessorKey: "member.jenis_subs",
      },
      {
        header: "",
        accessorKey: "action",
        cell: ({ row }) => {
          const { id }: TDataTable = row.original;

          return (
            <div className="flex flex-row  items-center space-x-4 text-right">
              <Link href={`/karyawan/pembayaran/edit/${id}`}>
                <Button outlined rounded>
                  Lihat Detail
                </Button>
              </Link>
            </div>
          );
        },
      },
    ],
    [deletePopup]
  );

  const searchDataDebounce = useDebounce(searchData.field, 100);
  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
    getAllPembayaran.refetch();
  }, [searchDataDebounce]);

  /* RENDER */

  return (
    <div className="flex flex-col gap-y-8 pt-4 md:ml-4 md:mr-0">
      <div className="grid grid-cols-2 gap-8 md:gap-4">
        <div className="col-span-full md:col-auto">
          <div className="grid items-center gap-4">
            <InputSearch
              name="search"
              value={searchData.field}
              onChange={(e) =>
                setSearchData({ ...searchData, field: e.target.value })
              }
              fit={!isMobile}
              rounded
            />
          </div>
        </div>
      </div>

      <div>
        <Table columns={columns} data={dataState} />
      </div>

      <div className="flex flex-col self-center">
        <Pagination
          page={metaState.page}
          totalPage={metaState.totalPage}
          onPageChange={(page) =>
            setMetaState((prevState) => {
              return { ...prevState, page };
            })
          }
        />
      </div>

      <Confirm
        open={deletePopup.open}
        // onOk={() => deleteDivisi.mutate(deletePopup.selectedId!)}
        onCancel={() => setDeletePopup({ open: false, selectedId: null })}
      />
    </div>
  );
}

export default MainContentPembayaran;
