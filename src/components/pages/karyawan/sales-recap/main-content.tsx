/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
/* UI - COMPONENTS */
import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/Button/ButtonIcon";
import Confirm from "@/components/ui/Modal/Confirm";
import InputSearch from "@/components/ui/Form/Input/InputField/Search";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";

/* UI - ICONS */
import useResponsive from "@/hooks/use-check-mobile-screen";
import useDebounce from "@/hooks/use-debounce";

import getIndexTable from "@/libs/get-index-table";

import type { ColumnDef } from "@tanstack/react-table";
import type { TTableType } from "@/components/ui/Table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import moment from "moment";
import { ApiGetSalesRecap } from "@/hooks/use-fetch";
import { formatToCurrency } from "@/libs/format-to-currency";
import { SalesRecapTable } from "@/types/admin/sales-recap";

type TDataState = TAppState<SalesRecapTable>;
type TDataTable = TTableType<TDataState>;

function MainContentSalesRecap() {
  const isMobile = useResponsive();

  /* REACT STATE */
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });

  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });
  const [dataCardSummary, setDataCardSummary] = React.useState({
    total_transaksi_tunai: 0,
    total_transaksi_qris: 0,
  });

  const [dateRange, setDateRange] = useState<{
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
  }>({
    startDate: moment(new Date()),
    endDate: moment(new Date()),
  });

  /* FETCH DATA */
  // [GET] All Paket   ===> command for a while
  const getAllData = ApiGetSalesRecap({
    params: {
      // page: metaState.page,
      // pagesize: metaState.size,
      search: searchData.current,
      start_date: moment(dateRange?.startDate || new Date()).format(
        "yyyy-MM-DD"
      ),
      end_date: moment(dateRange?.endDate || new Date()).format("yyyy-MM-DD"),
    },
    onSuccess(res) {
      // const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: res?.meta?.totalData,
        totalPage: res?.meta?.totalPage,
      };
      const newData = getIndexTable(res?.data, newMeta);
      setDataState(newData);
      setMetaState(newMeta);

      let total_tunai = 0;
      let total_qris = 0;
      res?.data?.filter((e) => {
        if (e?.payment_method === "Tunai") {
          total_tunai += parseInt(e?.total_transaksi);
        } else {
          total_qris += parseInt(e?.total_transaksi);
        }
      });

      setDataCardSummary({
        ...dataCardSummary,
        total_transaksi_tunai: total_tunai,
        total_transaksi_qris: total_qris,
      });
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
        header: "No. Nota",
        accessorKey: "nota",
      },
      {
        header: "Tanggal & Jam",
        accessorKey: "tanggal",
        cell: ({ row }) => {
          return moment(row?.original?.tanggal).format("DD MMMM YYYY HH:mm");
        },
      },
      {
        header: "Nama Transaksi",
        accessorKey: "name",
      },
      {
        header: "Metode Transaksi",
        accessorKey: "payment_method",
      },
      {
        header: "Total",
        accessorKey: "debit",
        cell: ({ row }) => {
          return formatToCurrency(
            parseInt(row?.original?.total_transaksi) ?? 0,
            true
          );
        },
      },
    ],
    []
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
    if (dateRange?.startDate && dateRange?.endDate) {
      getAllData.refetch();
    }
  }, [dateRange?.startDate, dateRange?.endDate]);

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
        <div className="mb-4 flex flex-row items-center space-x-4">
          <div
            className="flex flex-col space-y-4 p-8"
            style={{
              background: "#FFF",
              boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
              width: "374px",
              height: "142px",
              flexShrink: 0,
            }}
          >
            <span className="text-base" style={{ color: "#7D8FB3" }}>
              Total Transaksi Tunai
            </span>
            <span
              style={{ color: "#3361FF", fontSize: "32px", fontWeight: 500 }}
            >
              {formatToCurrency(
                dataCardSummary?.total_transaksi_tunai ?? 0,
                true
              )}
            </span>
          </div>
          <div
            className="flex flex-col space-y-4 p-8"
            style={{
              background: "#FFF",
              boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
              width: "374px",
              height: "142px",
              flexShrink: 0,
            }}
          >
            <span className="text-base" style={{ color: "#7D8FB3" }}>
              Total Transaksi QRIS
            </span>
            <span
              style={{ color: "#3361FF", fontSize: "32px", fontWeight: 500 }}
            >
              {formatToCurrency(
                dataCardSummary?.total_transaksi_qris ?? 0,
                true
              )}
            </span>
          </div>
        </div>

        <div className="flex max-h-screen w-full overflow-scroll">
          <Table columns={columns} data={dataState} />
        </div>
      </div>
      {/* <div className="flex flex-col self-center">
        <Pagination
          page={metaState.page}
          totalPage={metaState.totalPage}
          onPageChange={(page) =>
            setMetaState((prevState) => {
              return { ...prevState, page };
            })
          }
        />
      </div> */}
    </div>
  );
}

export default MainContentSalesRecap;
