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
import {
  ApiGetAllManageMenu,
  ApiGetDetailTransaction,
  ApiPostTransaction,
  ApiPutPrinted,
} from "@/hooks/use-fetch";
import { formatToCurrency } from "@/libs/format-to-currency";
import {
  InvoiceDatas,
  PointOfSales,
  PointOfSalesDatas,
} from "@/types/admin/point-of-sales";
import { ManageMenuType } from "@/types/admin/manage-menu";
import { InputField, Label } from "@/components/ui";
import { useFormik } from "formik";
import axios from "axios";
import MoneyIcon from "@/components/ui/Icons/money-icon";
import { color } from "html2canvas/dist/types/css/types/color";
import { useSession } from "next-auth/react";
import usePDFGenerator from "@/components/utils/pdfGenerator";
import InvoiceDoc from "./print-invoice";
import useAppNav from "@/hooks/use-app-nav";
import ModalConfirmPrint from "@/components/ui/Modal/ConfirmPrint";

type TDataState = TAppState<PointOfSales>;
type TDataTable = TTableType<TDataState>;

function MainContentPointOfSales() {
  const isMobile = useResponsive();

  /* REACT STATE */
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });
  const [confirmPopup, setConfirmPopup] = React.useState<{
    open: boolean;
    selectedId: null | number;
  }>({
    open: false,
    selectedId: null,
  });

  interface OrderItem {
    menu_id: any;
    quantity: number;
    price: any;
    total: number;
    foto: string | File;
    name: string;
  }
  const { data: session, status } = useSession();
  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });
  const [listMenu, setListMenu] = React.useState<ManageMenuType[]>([]);
  const [listOrder, setListOrder] = React.useState<OrderItem[]>([]);
  const [totalItems, setTotalItems] = React.useState(0);
  const [activeBtn, setActiveBtn] = React.useState(1);
  const [trxId, setTrxId] = useState(-1);
  const [dataInvoice, setDataInvoice] = React.useState({} as InvoiceDatas);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const listButton = [
    { id: 1, label: "Makanan" },
    { id: 2, label: "Minuman" },
  ];
  const listPaymentMethod = [
    {
      payment_method_id: 1,
      icon: <MoneyIcon />,
      label: "Qris",
    },
    {
      payment_method_id: 2,
      icon: <MoneyIcon />,
      label: "Debit",
    },
    {
      payment_method_id: 3,
      icon: <MoneyIcon />,
      label: "Tunai",
    },
  ];

  const formikTransaction = useFormik<PointOfSalesDatas>({
    initialValues: {
      created_by: "",
      table_number: 0,
      sub_total: 0,
      total: 0,
      consumer_name: "",
      payment_date: "",
      description: "",
      nominal: 0,
      payment_method: -1,
      order: [],
    },
    onSubmit: async (values) => {
      // if (/\d/.test(values.name)) {
      //   alert("Nama Paket Hanya boleh huruf");
      //   return;
      // }
      await addEditTransaction(values);
    },
  });

  const renderedDoc = React.useMemo(() => {
    if (dataInvoice?.id >= 0) {
      return InvoiceDoc({
        invoiceData: dataInvoice,
      });
    }
  }, [dataInvoice]);

  const { PDFModal, handlePrint, instance, updateInstance, PDFViewer } =
    usePDFGenerator({
      PDFDocument: renderedDoc,
      onAfterPrint: () => {
        updateStatusPrint.mutate({ id: dataInvoice?.id });
      },
    });

  /* FETCH DATA */
  // [GET] All Paket   ===> command for a while
  const getAllMenu = ApiGetAllManageMenu({
    params: {
      search: searchData.current,
    },
    onSuccess(res) {
      setListMenu(res?.data);
    },
    onError(err) {
      console.error(err);
    },
  });

  const createTransaction = ApiPostTransaction({
    onSuccess(res) {
      setTrxId(res?.bank_type?.id);
      setIsSubmitting(false);
      setConfirmPopup({
        open: !confirmPopup.open,
        selectedId: dataInvoice?.id,
      });
    },
    onError(err) {
      formikTransaction.setSubmitting(false);
      setIsSubmitting(false);

      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat Menambah Data.");
        }
      }
      console.error(err);
    },
  });

  const updateStatusPrint = ApiPutPrinted({
    onSuccess() {
      setDataInvoice({
        id: -1,
        order_id: "",
        table_number: -1,
        sub_total: 0,
        tax: null,
        total: 0,
        consumer_name: "",
        payment_date: "",
        description: "",
        nominal: 0,
        rowstatus: false,
        created_by: null,
        payment_method: 0,
        is_printed: null,
        total_order: 0,
        createdAt: "",
        updatedAt: "",
        karyawan_name: "",
        detail_order: [
          {
            id: -1,
            menu_id: 0,
            quantity: 0,
            price: 0,
            total: 0,
            createdAt: "",
            updatedAt: "",
            transaction_id: 0,
            menu: {
              id: 0,
              category_id: 0,
              name: "",
              price: 0,
              foto: "",
              rowstatus: false,
              createdAt: "",
              updatedAt: "",
            },
          },
        ],
      });
      setListOrder([]);
      formikTransaction.setFieldValue("consumer_name", "");
      formikTransaction.setFieldValue("table_number", 0);
      formikTransaction.setFieldValue("payment_method", 0);
      setIsSubmitting(false);
      setConfirmPopup({ open: false, selectedId: null });
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

  const getDetailInvoice = ApiGetDetailTransaction({
    id: trxId,
    onSuccess(res) {
      const { data } = res;
      setDataInvoice(data);
    },
    onError(err) {
      console.error(err);
    },
  });

  const addEditTransaction = async (payload: PointOfSalesDatas) => {
    setIsSubmitting(true);

    let datas = {
      ...payload,
      created_by: session?.user?.id,
      payment_date: moment().toDate(),
      order: listOrder.map((e) => {
        return {
          menu_id: e?.menu_id,
          quantity: e?.quantity,
          price: e?.price,
          total: e?.total,
        };
      }),
    };
    createTransaction.mutate(datas);
  };

  const handleAddOrder = (data: {
    id: any;
    price: any;
    name: any;
    foto: any;
  }) => {
    let newVal: OrderItem = {
      menu_id: data?.id,
      quantity: 1,
      price: data?.price,
      total: 1 * data?.price,
      name: data?.name,
      foto: data?.foto,
    };
    let isExisting = listOrder.find((e) => e?.menu_id === data?.id);
    if (isExisting) {
      let tempOrder = JSON.parse(JSON.stringify(listOrder));
      let foundedIdx = tempOrder.findIndex((e: any) => e?.menu_id === data?.id);
      if (foundedIdx >= 0) {
        tempOrder[foundedIdx].quantity = tempOrder?.[foundedIdx]?.quantity + 1;

        tempOrder[foundedIdx].total =
          tempOrder?.[foundedIdx]?.quantity * tempOrder?.[foundedIdx]?.price;

        setListOrder([...tempOrder]);
      }
    } else {
      setListOrder((prev: OrderItem[]) => [...prev, newVal]);
    }
  };

  const handleCounterOrder = (type: string, idx: number, menu_id: number) => {
    let tempOrder = JSON.parse(JSON.stringify(listOrder));
    let foundedIdx = tempOrder.findIndex(
      (e: any, i: any) => i === idx && e?.menu_id === menu_id
    );
    if (foundedIdx >= 0) {
      if (type === "plus") {
        tempOrder[foundedIdx].quantity = tempOrder?.[foundedIdx]?.quantity + 1;
      } else {
        tempOrder[foundedIdx].quantity = tempOrder?.[foundedIdx]?.quantity - 1;
      }

      tempOrder[foundedIdx].total =
        tempOrder?.[foundedIdx]?.quantity * tempOrder?.[foundedIdx]?.price;
      if (tempOrder[foundedIdx].quantity === 0) {
        tempOrder.splice(foundedIdx, 1);
      }
      setListOrder([...tempOrder]);
    }
  };

  const countDetailOrder = () => {
    let totalItems = 0;
    let subtotal = 0;
    let total = 0;

    listOrder.map((e) => {
      totalItems += e?.quantity;
      subtotal += e?.total;
      total += e?.total;
    });

    setTotalItems(totalItems);

    formikTransaction.setValues((prevValues) => ({
      ...prevValues,
      sub_total: subtotal,
      total: total,
      nominal: total,
    }));
  };

  const searchDataDebounce = useDebounce(searchData.field, 100);

  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
  }, [searchDataDebounce]);

  useEffect(() => {
    if (trxId >= 0) {
      getDetailInvoice.refetch();
    }
  }, [trxId]);

  React.useEffect(() => {
    getAllMenu.refetch();
  }, []);

  React.useEffect(() => {
    countDetailOrder();
  }, [listOrder]);

  /* RENDER */
  return (
    <div className="flex flex-row ">
      <div
        className="flex h-screen flex-col gap-y-8 overflow-scroll"
        style={{
          width: "70%",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 32,
          backgroundColor: "#F7F8FA",
        }}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-col space-y-2">
            <strong>Welcome SuperAdmin</strong>
            <span>Pilih Menu dan lakukan pemesanan</span>
          </div>
          <div className="flex ">
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
        <div className="flex flex-row gap-4">
          {listButton.map((e) => {
            return (
              <button
                className={`flex items-center justify-center p-4`}
                style={
                  e?.id === activeBtn
                    ? {
                        borderRadius: 5,
                        width: 89,
                        height: 48,
                        backgroundColor: "#3361FF",
                      }
                    : { width: 89, height: 48, backgroundColor: "transparent" }
                }
                onClick={() => setActiveBtn(e?.id)}
              >
                <span
                  style={
                    e?.id === activeBtn
                      ? { color: "#fff", fontWeight: "bold" }
                      : { color: "#4D5E80" }
                  }
                >
                  {e?.label}
                </span>
              </button>
            );
          })}
        </div>
        <div className="grid gap-1">
          <div className="flex w-full flex-wrap gap-4 overflow-scroll">
            {/* for list menu */}
            {listMenu
              .filter((el) => el?.category_id === activeBtn)
              .map((e, i) => {
                return (
                  <div
                    className="flex cursor-pointer flex-col space-y-4 p-4"
                    style={{
                      background: "#FFF",
                      borderRadius: 5,
                      // width: "216px",
                      // height: "226px",
                      flexShrink: 0,
                    }}
                    onClick={() => handleAddOrder(e)}
                  >
                    <div
                      className="flex items-center justify-center p-4"
                      style={{ width: "184px", height: "125px" }}
                    >
                      <img
                        className="contain flex h-full w-full"
                        src={
                          e?.foto
                            ? `${process.env.NEXT_PUBLIC_API}/${e?.foto}`
                            : ""
                        }
                      />
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: "#4D5E80",
                        fontWeight: 700,
                        wordBreak: "break-word",
                      }}
                    >
                      {e?.name}
                    </span>
                    <span
                      style={{
                        color: "#3361FF",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      {formatToCurrency(e?.price ?? 0, true)}
                    </span>
                  </div>
                );
              })}
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
      </div>
      <div
        className="flex h-screen flex-col justify-between bg-white p-4"
        style={{
          width: "30%",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 32,
        }}
      >
        <div className="flex flex-col gap-y-2">
          <div className="mb-4">
            <strong className="text-lg text-black">Detail Order</strong>
          </div>
          <div className="flex flex-col gap-y-4">
            {listOrder.map((e, idx) => {
              return (
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-x-2">
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "104px", height: "70px" }}
                    >
                      <img
                        className="contain flex h-full w-full"
                        src={
                          e?.foto
                            ? `${process.env.NEXT_PUBLIC_API}/${e?.foto}`
                            : ""
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <span
                        className="text-sm"
                        style={{
                          color: "#4D5E80",
                          fontWeight: 700,
                          wordBreak: "break-word",
                        }}
                      >
                        {e?.name}
                      </span>
                      <span
                        style={{
                          color: "#3361FF",
                          fontSize: "14px",
                          fontWeight: 700,
                        }}
                      >
                        {formatToCurrency(e?.total ?? 0, true)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end justify-end ">
                    <div className="flex w-24 flex-row items-center justify-between border p-2">
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          handleCounterOrder("minus", idx, e?.menu_id)
                        }
                      >
                        -
                      </span>{" "}
                      <span>{e?.quantity}</span>{" "}
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          handleCounterOrder("plus", idx, e?.menu_id)
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-full flex-col ">
          <div
            className="flex flex-col p-4"
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <strong>Detail Pembayaran</strong>
            <div className="flex w-full flex-row items-center justify-between">
              <Label htmlFor="nama">
                Nomor Meja&nbsp;<sup className="font-black text-ui-red">*</sup>
              </Label>
              <div className="flex w-1/4">
                <InputField
                  type="number"
                  name="table_number"
                  placeholder="0"
                  onChange={formikTransaction.handleChange}
                  value={formikTransaction.values.table_number}
                  requiredMessages="Nama Paket tidak boleh kosong!"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <Label htmlFor="nama">
                Nama Customer&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <div>
                <InputField
                  type="text"
                  name="consumer_name"
                  placeholder="Nama Costumer"
                  onChange={formikTransaction.handleChange}
                  value={formikTransaction.values.consumer_name}
                  requiredMessages="Nama Customer tidak boleh kosong!"
                  required
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-y-4 border-b-2 border-t-2 border-dashed py-2">
              <div className="flex flex-row justify-between">
                {listPaymentMethod.map((e, i) => {
                  return (
                    <div
                      className="flex cursor-pointer flex-col items-center justify-center"
                      style={{
                        padding: 24,
                        backgroundColor:
                          formikTransaction?.values?.payment_method ===
                          e?.payment_method_id
                            ? "#3361FF"
                            : "#fff",
                        color:
                          formikTransaction?.values?.payment_method ===
                          e?.payment_method_id
                            ? "#fff"
                            : "#7D8FB3",
                        borderRadius: 5,
                      }}
                      onClick={() =>
                        formikTransaction.setFieldValue(
                          "payment_method",
                          e?.payment_method_id
                        )
                      }
                    >
                      {e?.icon}
                      <span>{e?.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full flex-row justify-between">
                <span>Total harga ({totalItems} Barang)</span>
                <span>
                  {formatToCurrency(
                    formikTransaction?.values?.sub_total ?? 0,
                    true
                  )}
                </span>
              </div>
            </div>
            <div className="mt-2 flex w-full flex-row justify-between">
              <strong>Total Pembayaran</strong>
              <span>
                {formatToCurrency(formikTransaction?.values?.total ?? 0, true)}
              </span>
            </div>
          </div>
          <div className="flex w-full py-2 md:flex">
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !formikTransaction?.values?.table_number ||
                !listOrder.length ||
                !formikTransaction.values.consumer_name ||
                formikTransaction?.values?.payment_method < 0
              }
              onClick={formikTransaction?.handleSubmit}
              // fit={!isMobile}
            >
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </div>
      </div>
      <ModalConfirmPrint
        open={confirmPopup.open}
        onOk={() => {
          setIsSubmitting(true);
          handlePrint();
        }}
        onCancel={() => {
          setDataInvoice({
            id: -1,
            order_id: "",
            table_number: -1,
            sub_total: 0,
            tax: null,
            total: 0,
            consumer_name: "",
            payment_date: "",
            description: "",
            nominal: 0,
            rowstatus: false,
            created_by: null,
            payment_method: 0,
            is_printed: null,
            total_order: 0,
            createdAt: "",
            updatedAt: "",
            karyawan_name: "",
            detail_order: [
              {
                id: -1,
                menu_id: 0,
                quantity: 0,
                price: 0,
                total: 0,
                createdAt: "",
                updatedAt: "",
                transaction_id: 0,
                menu: {
                  id: 0,
                  category_id: 0,
                  name: "",
                  price: 0,
                  foto: "",
                  rowstatus: false,
                  createdAt: "",
                  updatedAt: "",
                },
              },
            ],
          });
          setListOrder([]);
          formikTransaction.setFieldValue("consumer_name", "");
          formikTransaction.setFieldValue("table_number", 0);
          formikTransaction.setFieldValue("payment_method", 0);
          setIsSubmitting(false);
          setConfirmPopup({ open: false, selectedId: null });
        }}
        disable={isSubmitting}
      />
    </div>
  );
}

export default MainContentPointOfSales;
