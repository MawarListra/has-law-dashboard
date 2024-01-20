/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from "react";
import Link from "next/link";

/* UI - COMPONENTS */
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
  ApiGetAllKaryawan,
  ApiDeleteKaryawan,
  ApiGetAllMember,
  ApiActiveDeactiveMember,
} from "@/hooks/use-fetch";

import getIndexTable from "@/libs/get-index-table";
import type { TItemTabs } from "@/components/ui/Tabs";
import type { ColumnDef } from "@tanstack/react-table";
import type { TTableType } from "@/components/ui/Table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import type { MemberType } from "@/types/admin/member";
import moment from "moment";

type TDataState = TAppState<MemberType>;
type TDataTable = TTableType<TDataState>;

function MainContentMember() {
  const isMobile = useResponsive();

  /* REACT STATE */
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
  const [tabsData, setTabsData] = React.useState<{
    activeKey: number | string;
    data: TItemTabs[];
  }>({
    activeKey: 0,
    data: [
      {
        key: 0,
        label: "Aktif",
      },
      {
        key: 1,
        label: "Tidak Aktif",
      },
    ],
  });
  const [activeTab, setActiveTab] = React.useState("aktif");

  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  // [GET] All Karyawan   ===> command for a while
  const loadData = ApiGetAllMember({
    params: {
      page: metaState.page,
      pagesize: metaState.size,
      search: searchData.current,
      status: activeTab,
    },
    onSuccess(res) {
      const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: meta?.totalData,
        totalPage: meta?.totalPage,
        // page: meta.page,
      };
      const newData = getIndexTable(data, newMeta);

      setDataState(newData);
      setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  // [DELETE] Member
  const activeDeactiveMember = ApiActiveDeactiveMember({
    onSuccess() {
      alert("Berhasil mengubah status Member");
      setDeletePopup({
        open: false,
        selectedId: null,
      });
    },
    onError(err) {
      alert("Telah terjadi kesalahan saat ubah status Member.");
      console.error(err);
    },
  });

  /* COMPONENTS FUNCTION */
  const columns = React.useMemo<ColumnDef<TDataTable>[]>(
    () => [
      {
        header: "#",
        accessorKey: "index",
      },
      {
        header: "Nama",
        accessorKey: "name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Nomor Handphone",
        accessorKey: "phone",
      },
      {
        header: "Jenis Member",
        accessorKey: "jenis_member",
      },
      {
        header: "Durasi Member",
        accessorKey: "jenis_subs",
      },
      {
        header: "",
        accessorKey: "action",
        cell: ({ row }) => {
          const { id }: TDataTable = row.original;
          return (
            <div className="flex flex-row  items-center space-x-4 text-right">
              {activeTab === "aktif" ? (
                <>
                  <Link href={`/karyawan/member/renew/${id}`}>
                    <Button outlined rounded>
                      Perpanjang
                    </Button>
                  </Link>
                  <Link href={`/karyawan/member/edit/${id}`}>
                    <ButtonIcon>
                      <EditIcon color="blue" />
                    </ButtonIcon>
                  </Link>
                  {/* <ButtonIcon
                    onClick={() =>
                      setDeletePopup({
                        open: !deletePopup.open,
                        selectedId: id,
                      })
                    }
                  >
                    <DeleteIcon color="red" size={24} />
                  </ButtonIcon> */}
                </>
              ) : (
                <>
                  <Link href={`/karyawan/member/renew/${id}`}>
                    <Button outlined rounded>
                      Perpanjang
                    </Button>
                  </Link>
                </>
              )}
            </div>
          );
        },
      },
    ],
    [deletePopup, activeTab]
  );

  const searchDataDebounce = useDebounce(searchData.field, 100);

  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
    loadData.refetch();
  }, [searchDataDebounce]);

  React.useEffect(() => {
    loadData.refetch();
  }, [activeTab]);

  /* RENDER */
  return (
    <div className="flex flex-col gap-y-8 pt-4 md:ml-4 md:mr-0">
      <div className="flex flex-col gap-8 md:gap-4">
        <div className="col-span-full flex items-center md:col-auto">
          <div className="md:flex-grow">
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
          <div className="flex justify-end">
            <Link href="/karyawan/member/add">
              <Button type="button" iconLeft={<AddCircleIcon />} rounded fit>
                Tambah Member
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-full flex items-center md:col-auto">
          <Tabs
            activeKey={tabsData.activeKey}
            items={tabsData.data}
            onChange={(active) => {
              setTabsData({ ...tabsData, activeKey: active });
              setMetaState({ ...metaState, page: 1 });
              setActiveTab(active === 0 ? "aktif" : "nonaktif");
            }}
          />
        </div>
      </div>

      <div style={{ overflow: "scroll" }}>
        <Table columns={columns} data={dataState} />
      </div>

      <div className="flex flex-col self-center">
        <Pagination
          page={metaState?.page}
          totalPage={metaState?.totalPage}
          onPageChange={(page) =>
            setMetaState((prevState) => {
              return { ...prevState, page };
            })
          }
        />
      </div>

      <Confirm
        open={deletePopup.open}
        onOk={() => activeDeactiveMember.mutate(deletePopup.selectedId!)}
        onCancel={() => setDeletePopup({ open: false, selectedId: null })}
      />
    </div>
  );
}

export default MainContentMember;
