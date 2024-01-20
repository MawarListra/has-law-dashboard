/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { ApiGetSalesRecapCafe, ApiPutPrinted } from "@/hooks/use-fetch";
import { formatToCurrency } from "@/libs/format-to-currency";
import { SalesRecapCafeTable } from "@/types/admin/sales-recap-cafe";
import OpenInNewIcon from "@/components/ui/Icons/open-in-new-icon";
import ModalDetail from "@/components/ui/Modal/ModalDetail";
import usePDFGenerator from "@/components/utils/pdfGenerator";
import InvoiceDoc from "../point-of-sales/print-invoice";
import axios from "axios";
import { Document, Page } from "@react-pdf/renderer";
import { InvoiceDatas } from "@/types/admin/point-of-sales";

type TDataState = TAppState<SalesRecapCafeTable>;
type TDataTable = TTableType<TDataState>;

function MainContentSalesRecapCafe() {
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
  const [detailPopup, setDetailPopup] = React.useState<{
    open: boolean;
    datas: null | object;
  }>({
    open: false,
    datas: {},
  });
  const [document, setDocument] = useState<React.ReactElement | undefined>(
    undefined
  );
  const [isGenerated, setIsGenerated] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);
  const [trxId, setTrxId] = useState(-1);
  const [dataInvoice, setDataInvoice] = React.useState(
    {} as SalesRecapCafeTable
  );

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
  }) => {
    setDateRange({ startDate, endDate });
  };

  const renderedDoc = React.useMemo(() => {
    if (dataInvoice?.id >= 0) {
      setIsGenerated(true); // Document has been rendered
      return InvoiceDoc({
        invoiceData: dataInvoice,
      });
    }
    setIsGenerated(false); // No document to render
  }, [dataInvoice]);

  const { PDFModal, handlePrint, instance, updateInstance, PDFViewer } =
    usePDFGenerator({
      PDFDocument: renderedDoc,
      onAfterPrint: () => {
        if (isPrinted && !dataInvoice?.is_printed) {
          updateStatusPrint.mutate({ id: trxId });
          setIsPrinted(false);
        }
      },
    });

  /* FETCH DATA */
  // [GET] All Paket   ===> command for a while
  const getAllData = ApiGetSalesRecapCafe({
    params: {
      page: metaState.page,
      pagesize: metaState.size,
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

      setDataCardSummary({
        ...dataCardSummary,
        total_transaksi_tunai: res?.counter?.[0]?.tunai,
        total_transaksi_qris: res?.counter?.[0]?.qris,
      });
    },
    onError(err) {
      console.error(err);
    },
  });

  const updateStatusPrint = ApiPutPrinted({
    onSuccess() {
      alert("Berhasil Cetak Nota");
    },
    onError(err) {
      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat Update Status Cetak Nota.");
        }
      }
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
        accessorKey: "order_id",
      },
      {
        header: "Tanggal & Jam",
        accessorKey: "payment_date",
        cell: ({ row }) => {
          return moment(row?.original?.payment_date).format(
            "DD MMMM YYYY, HH:mm"
          );
        },
      },
      {
        header: "Nomor Meja",
        accessorKey: "table_number",
      },
      {
        header: "Jumlah Pesanan",
        accessorKey: "total_order",
        cell: ({ row }) => {
          return (
            <span
              className="flex cursor-pointer flex-row gap-2"
              onClick={() =>
                setDetailPopup({
                  open: !detailPopup.open,
                  datas: row?.original?.detail_order,
                })
              }
            >
              {row?.original?.total_order} <OpenInNewIcon />
            </span>
          );
        },
      },
      {
        header: "Total",
        accessorKey: "total",
        cell: ({ row }) => {
          return formatToCurrency(row?.original?.total ?? 0, true);
        },
      },
      {
        header: "Metode Transaksi",
        accessorKey: "payment_method",
        cell: ({ row }) => {
          return row?.original?.payment_method === 3 ? "Tunai" : "QRIS";
        },
      },
      {
        header: "Status",
        accessorKey: "is_printed",
        cell: ({ row }) => {
          return (
            <div className="flex flex-row  items-center space-x-4 text-right">
              <button
                className={`w-auto rounded-full px-4 py-2 ${
                  row?.original?.is_printed
                    ? "bg-[#3361FF] text-white"
                    : "text-[#3361FF] outline"
                }`}
                color={row?.original?.is_printed ? "blue" : "light"}
                onClick={() => {
                  setTrxId(row?.original?.id);
                  setDataInvoice(row?.original);
                }}
              >
                {row?.original?.is_printed ? "Sudah dicetak" : "Belum dicetak"}
              </button>
            </div>
          );
        },
      },
    ],
    [detailPopup]
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

  useEffect(() => {
    if (isGenerated && trxId >= 0) {
      const printTimeout = setTimeout(() => {
        setIsPrinted(true);
        handlePrint();
      }, 500); // Adjust the timeout as needed

      return () => clearTimeout(printTimeout);
    }
  }, [trxId, isGenerated]);

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

      <ModalDetail
        open={detailPopup.open}
        onOk={() => {}}
        onCancel={() => setDetailPopup({ open: false, datas: null })}
        data={detailPopup?.datas}
      />
    </div>
  );
}

export default MainContentSalesRecapCafe;
