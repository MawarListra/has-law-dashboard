/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Link from "next/link";

/* UI - COMPONENTS */
import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/Button/ButtonIcon";
import Confirm from "@/components/ui/Modal/Confirm";
import InputSearch from "@/components/ui/Form/Input/InputField/Search";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";

/* UI - ICONS */
import AddCircleIcon from "@/components/ui/Icons/add-circle-icon";
import EditIcon from "@/components/ui/Icons/edit-icon";
import DeleteIcon from "@/components/ui/Icons/delete-icon";

import useResponsive from "@/hooks/use-check-mobile-screen";
import useDebounce from "@/hooks/use-debounce";
// import { ApiGetAllPaket, ApiDeletePaket } from "@/hooks/use-fetch";

import getIndexTable from "@/libs/get-index-table";

import type { ColumnDef } from "@tanstack/react-table";
import type { TTableType } from "@/components/ui/Table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import type { PaketType } from "@/types/admin/paket";
import moment from "moment";
import {
  ApiDeletePaket,
  ApiGetAllCheckIn,
  ApiGetAllPaketPackages,
  ApiGetOneMemberCheckIn,
} from "@/hooks/use-fetch";
import { formatToCurrency } from "@/libs/format-to-currency";
import ReloadDataIcon from "@/components/ui/Icons/reload-data-icon";
import { MemberCheckInType } from "@/types/admin/check-in";
import ModalCheckIn from "@/components/ui/Modal/ModalCheckIn";

type TDataState = TAppState<MemberCheckInType>;
type TDataTable = TTableType<TDataState>;

function MainContentCheckIn() {
  const isMobile = useResponsive();

  /* REACT STATE */
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });

  const [modalOpen, setModalOpen] = React.useState(false);
  const [detailCheckIn, setDetailCheckIn] = React.useState({});
  const [checkInId, setCheckInId] = React.useState(-1);
  const [checkCount, setCheckCount] = React.useState(0);

  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  // [GET] All Paket   ===> command for a while
  const getAllData = ApiGetAllCheckIn({
    params: {
      page: metaState.page,
      pagesize: metaState.size,
      search: searchData.current,
    },
    onSuccess(res) {
      const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: meta?.totalData,
        totalPage: meta?.totalPage,
      };
      const newData = getIndexTable(data, newMeta);
      setCheckCount(res?.checkincount);
      setDataState(newData);
      setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  const getDetailCheckIn = ApiGetOneMemberCheckIn({
    id: checkInId,
    onSuccess(res) {
      const { data } = res;
      setDetailCheckIn({ ...data });
      setModalOpen(true);
    },
    onError(err) {
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
        accessorKey: "member.name",
      },
      {
        header: "Tanggal & Jam",
        accessorKey: "checkin_date",
        cell: ({ row }) => {
          return moment(row?.original?.checkin_date).format(
            "DD MMMM YYYY HH:mm"
          );
        },
      },
      {
        header: "",
        accessorKey: "action",
        cell: ({ row }) => {
          const { id }: TDataTable = row.original;

          return (
            <div className="space-x-4 text-right">
              <Button
                outlined
                rounded
                onClick={() => {
                  setCheckInId(id);
                }}
              >
                Lihat Informasi
              </Button>
            </div>
          );
        },
      },
    ],
    [modalOpen]
  );

  const searchDataDebounce = useDebounce(searchData.field, 100);

  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
  }, [searchDataDebounce]);

  React.useEffect(() => {
    getAllData.refetch();
  }, []);

  React.useEffect(() => {
    if (checkInId >= 0) {
      getDetailCheckIn.refetch();
    }
  }, [checkInId]);

  /* RENDER */
  return (
    <div className="flex flex-col gap-y-8 pt-4 md:ml-4 md:mr-0">
      <div className="grid gap-4 md:flex">
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
      </div>
      <div className="grid gap-1">
        <div className="flex flex-row items-center space-x-2">
          <span>{checkCount} Member Check-In hari ini </span>
          <div className="cursor-pointer" onClick={() => getAllData.refetch()}>
            <ReloadDataIcon />
          </div>
        </div>
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

      {modalOpen && (
        <ModalCheckIn
          open={modalOpen}
          onOk={() => {
            setModalOpen(false);
          }}
          onCancel={() => setModalOpen(false)}
          data={detailCheckIn}
        />
      )}
    </div>
  );
}

export default MainContentCheckIn;
