/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

/* UI - COMPONENTS */
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/Form/Input/InputField";
import Label from "@/components/ui/Form/Input/InputLabel";

import useAppNav from "@/hooks/use-app-nav";
import useResponsive from "@/hooks/use-check-mobile-screen";
import {
  ApiEditPembayaran,
  ApiGetDetailInvoice,
  ApiGetOnePembayaran,
} from "@/hooks/use-fetch";
import Reject from "@/components/ui/Modal/Reject";
import { Pembayaran } from "@/types/admin/pembayaran";
import moment from "moment";
import { formatToCurrency } from "@/libs/format-to-currency";
import pdfIc from "@/components/assets/pdf-icon.jpeg";
import Image from "next/image";
import usePDFGenerator from "@/components/utils/pdfGenerator";
import InvoiceDoc from "@/components/pages/admin/member/print-invoice";
import { useSession } from "next-auth/react";

function addEditPembayaran() {
  const { slug, query, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  const { data: session, status } = useSession();

  const type = slug[0];
  const id = slug[1];
  const [isPrintPage, setIsPrintPage] = React.useState(false);
  const [action, setAction] = React.useState("terima");

  const [rejectPopup, setRejectPopup] = React.useState<{
    open: boolean;
    selectedId: null | number | string;
  }>({
    open: false,
    selectedId: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [notes, setNotes] = React.useState("");
  const [tempData, setTempData] = React.useState({
    admin_fee: 0,
    name: "",
    phone: "",
    email: "",
    identity: "",
    sex: "",
    born_date: "",
    approval_photo: "",
    identity_number: "",
    payment_method: {
      id: -1,
      bank_account_name: "",
      bank_name: "",
      ewallet: "",
      phone: "",
      bank_number: "",
      payment_type_id: -1,
    },
    package: {
      name: "",
      price: 0,
      package_type: {
        name: "",
      },
    },
    paid_with: "",
    payment_type_admin: -1,
  });

  const [transactionData, setTransactionData] = React.useState({
    id: 0,
    member: {
      name: "",
      phone: "",
      email: "",
    },
    package: {
      id: 0,
      name: "",
      price: 0,
      category_id: 0,
    },
    admin_fee: 0,
    approval_photo: "",
    member_until: "",
    createdAt: "",
    payment_type_admin: 0,
    notanumber: {
      code: "",
      amount: -1,
    },
  });

  // const handleClickPrint = () => {
  //   handlePrint();
  // };

  const formikPayment = useFormik<Pembayaran>({
    initialValues: {
      is_accepted: false,
      reason: "",
      identity: "",
      approval_photo: "",
      identity_number: "",
      payment_method: "",
      paid_with: "",
      admin_fee: 0,
      payment_type_admin: -1,
    },
    onSubmit: () => {
      let newPayload = {
        is_accepted: true,
        reason: "",
      };
      addEditPayment(newPayload);
    },
  });

  const renderedDoc = React.useMemo(() => {
    return InvoiceDoc({ invoiceData: transactionData });
  }, [transactionData]);

  const { PDFModal, handlePrint, instance, updateInstance, PDFViewer } =
    usePDFGenerator({
      onAfterPrint: () => {
        NextRouter.replace("/admin/pembayaran");
      },
      PDFDocument: renderedDoc,
    });

  const handleClickPrint = () => {
    handlePrint();
  };
  /* FETCH DATA */
  // [GET] One Pembayaran
  const getOnePembayaran = ApiGetOnePembayaran({
    id,
    onSuccess(res) {
      const { data } = res;
      setTempData({
        ...tempData,
        admin_fee: data?.admin_fee ?? 0,
        name: data?.member?.name ?? "",
        phone: data?.member?.phone ?? "",
        email: data?.member?.email ?? "",
        identity: data.identity,
        sex: data?.member?.sex ?? "",
        born_date: moment(data?.member?.born_date).format("yyyy-MM-DD"),
        approval_photo: data.approval_photo,
        identity_number: data?.identity_number,
        payment_method: data?.payment_method ?? {
          id: -1,
          bank_account_name: "",
          bank_name: "",
          ewallet: "",
          phone: "",
          bank_number: "",
          payment_type_id: -1,
        },
        package: data?.package ?? {
          name: "",
          price: 0,
          package_type: {
            name: "",
          },
        },
        paid_with: data?.paid_with,
        payment_type_admin: data?.payment_type_admin,
      });
    },
    onError(err) {
      console.error(err);
    },
  });

  const getDetailInvoice = ApiGetDetailInvoice({
    id: id,
    onSuccess(res) {
      const { data } = res;
      setTransactionData({
        ...transactionData,
        id: data?.id,
        member: {
          name: data?.member?.name,
          phone: data?.member?.phone,
          email: data?.member?.email,
        },
        package: {
          id: data?.package?.id,
          name: data?.package?.name,
          price: data?.package?.price,
          category_id: data?.package?.category_id,
        },
        admin_fee: data?.admin_fee,
        approval_photo:
          data?.payment_type_admin === 3
            ? ""
            : `${process.env.NEXT_PUBLIC_API}/${data?.approval_photo}`,
        member_until: data?.member_until,
        createdAt: data?.createdAt,
        payment_type_admin: data?.payment_type_admin,
        notanumber: {
          code: data?.notanumber?.code,
          amount: data?.notanumber?.amount,
        },
      });
      setIsPrintPage(true);
    },
    onError(err) {
      console.error(err);
    },
  });

  React.useEffect(() => {
    if (type === "edit") getOnePembayaran.refetch();
  }, [id, type]);

  // [PUT] Pembayaran
  const updatePayment = ApiEditPembayaran({
    onSuccess() {
      alert("Berhasil mengubah status Pembayaran");
      if (action === "tolak") {
        NextRouter.replace("/karyawan/pembayaran");
      } else {
        getDetailInvoice.refetch();
      }
      formikPayment.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikPayment.setSubmitting(false);
      setIsSubmitting(false);

      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat Menambah Data");
        }
      }

      console.error(err);
    },
  });

  /* COMPONENT FUNCTION */
  const addEditPayment = (payload: any) => {
    formikPayment.setSubmitting(true);
    setIsSubmitting(true);
    let userId = session?.user?.id || "0";

    let datas = {
      ...payload,
      created_by: userId.toString(),
    };
    updatePayment.mutate({ id, payload: datas });
  };

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        <Breadcrumb
          item={[
            { title: "Kelola Pembayaran", linkTo: "/karyawan/pembayaran" },
            {
              title: "Lihat Detail Pembayaran",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>

      <div className="md:mx-4 md:w-3/4">
        {isPrintPage ? (
          <div className="space-y-4">
            <div className="flex w-96 flex-col border-b-2 border-solid border-ui-gray-blue-90 py-4">
              <div className="flex flex-row justify-between">
                <span>Jenis Pembayaran</span>
                <span style={{ color: "#3361FF" }}>
                  {transactionData.payment_type_admin === 3
                    ? "Tunai"
                    : "Non Tunai"}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tanggal Pembelian</span>
                <span>{moment().format("DD MMMM YYYY")}</span>
              </div>
            </div>
            <div>
              <div className="flex w-96 flex-col rounded-md bg-white px-2 py-3">
                <Label htmlFor="email">Detail Member</Label>
                <span>{transactionData?.member?.name}</span>
                <small className="text-xs font-normal text-[#999]">
                  {transactionData?.member?.phone}
                </small>
                <small className="text-xs font-normal text-[#999]">
                  {transactionData?.member?.email}
                </small>
              </div>
            </div>
            <div>
              <div className="flex w-96 flex-col rounded-md bg-white px-2 py-3">
                <Label htmlFor="email">Detail Pembayaran</Label>
                <div className="flex flex-row justify-between">
                  <span>Jenis Paket</span>
                  <span style={{ color: "#3361FF" }}>
                    {tempData?.package?.name +
                      " - " +
                      tempData?.package?.package_type?.name +
                      " - " +
                      formatToCurrency(tempData?.package?.price ?? 0, true)}
                  </span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Biaya Admin</span>
                  <span>
                    {formatToCurrency(transactionData?.admin_fee ?? 0, true)}
                  </span>
                </div>
                <div className="flex flex-row justify-between">
                  <span>Total</span>
                  <span>
                    {formatToCurrency(
                      transactionData?.admin_fee +
                        transactionData?.package?.price ?? 0,
                      true
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex w-full md:flex">
                <Button
                  className="flex items-center justify-center"
                  outlined
                  // fit={!isMobile}
                  onClick={() => handleClickPrint()}
                >
                  Cetak Nota
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form
            className="flex w-full flex-col gap-y-4"
            onSubmit={formikPayment.handleSubmit}
          >
            <div>
              <Label htmlFor="user_name">
                Email&nbsp;<sup className="font-black text-ui-red">*</sup>
              </Label>
              <InputField
                type="text"
                name="email"
                placeholder="User"
                onChange={formikPayment.handleChange}
                value={tempData?.email}
                requiredMessages="User tidak boleh kosong!"
                required
                disabled
              />
            </div>

            <div>
              <Label htmlFor="division">
                Nama Panjang&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <InputField
                type="text"
                name="name"
                placeholder="User"
                onChange={formikPayment.handleChange}
                value={tempData?.name}
                requiredMessages="Divisi tidak boleh kosong!"
                required
                disabled
              />
            </div>
            <div>
              <Label htmlFor="division">
                Nomor Kartu Identitas&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <InputField
                type="text"
                name="identity"
                placeholder="User"
                onChange={formikPayment.handleChange}
                value={tempData?.identity_number}
                requiredMessages="Divisi tidak boleh kosong!"
                required
                disabled
              />
            </div>
            <div>
              <Label htmlFor="division">
                Upload Foto Identitas&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <div
                className="flex h-auto w-auto"
                onClick={() => {
                  if (
                    tempData?.identity.split(".").includes("PDF") ||
                    tempData?.identity.split(".").includes("pdf")
                  ) {
                    let el = document.createElement("a");
                    el.href = `${process.env.NEXT_PUBLIC_API}/${tempData?.identity}`;
                    el.target = "_blank";
                    el.download = "identitas.pdf";
                    el.click();
                  }
                }}
              >
                <Image
                  className="img-fluid flex "
                  alt="image"
                  height={150}
                  width={200}
                  src={
                    tempData?.identity.split(".").includes("PDF") ||
                    tempData?.identity.split(".").includes("pdf")
                      ? pdfIc
                      : `${process.env.NEXT_PUBLIC_API}/${tempData?.identity}`
                  }
                />
              </div>
            </div>
            <div>
              <Label htmlFor="division">
                Nomor Handphone&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <InputField
                type="tel"
                name="phone"
                placeholder="Nomor Handphone"
                onChange={formikPayment.handleChange}
                value={tempData?.phone || "-"}
                requiredMessages="Divisi tidak boleh kosong!"
                required
                disabled
              />
            </div>
            <div className="flex flex-row space-x-4">
              <div>
                <Label htmlFor="division">
                  Jenis Kelamin&nbsp;
                  <sup className="font-black text-ui-red">*</sup>
                </Label>
                <InputField
                  type="text"
                  name="sex"
                  placeholder="Jenis Kelamin"
                  onChange={formikPayment.handleChange}
                  value={tempData?.sex}
                  requiredMessages="Divisi tidak boleh kosong!"
                  required
                  disabled
                />
              </div>

              <div>
                <Label htmlFor="division">
                  Tanggal Lahir&nbsp;
                  <sup className="font-black text-ui-red">*</sup>
                </Label>
                <InputField
                  type="text"
                  name="born_date"
                  placeholder="Tanggal Lahir"
                  onChange={formikPayment.handleChange}
                  value={tempData?.born_date}
                  requiredMessages="Divisi tidak boleh kosong!"
                  required
                  disabled
                />
              </div>
            </div>
            <div>
              <Label htmlFor="division">
                Pilih Paket&nbsp;
                <sup className="font-black text-ui-red">*</sup>
              </Label>
              <InputField
                type="text"
                name="package"
                placeholder="Pilih Paket"
                onChange={formikPayment.handleChange}
                value={
                  tempData?.package?.name +
                  " - " +
                  tempData?.package?.package_type?.name +
                  " - " +
                  formatToCurrency(tempData?.package?.price ?? 0, true)
                }
                requiredMessages="Divisi tidak boleh kosong!"
                required
                disabled
              />
            </div>
            <div className=" mt-4 flex flex-col space-y-4 border-t-2 pt-4">
              <span className="text-base font-bold leading-5	">
                Detail data pembayaran
              </span>
              <div>
                <Label htmlFor="division">
                  Jenis Pembayaran&nbsp;
                  <sup className="font-black text-ui-red">*</sup>
                </Label>

                <span>
                  {tempData?.payment_type_admin === 3 ? "Tunai" : "Non Tunai"}
                </span>
              </div>
              {tempData?.payment_type_admin !== 3 &&
              tempData.payment_method?.payment_type_id === 1 ? (
                <div className="flex flex-col space-y-4">
                  <div>
                    <Label htmlFor="division">
                      Nama Bank&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      type="text"
                      name="bank_name"
                      placeholder="Pilih Paket"
                      onChange={formikPayment.handleChange}
                      value={tempData?.paid_with}
                      requiredMessages="Divisi tidak boleh kosong!"
                      required
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="division">
                      Nama Rekening&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      type="text"
                      name="bank_account_name"
                      placeholder="Nama Rekening"
                      onChange={formikPayment.handleChange}
                      value={tempData?.payment_method?.bank_account_name}
                      requiredMessages="Divisi tidak boleh kosong!"
                      required
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="division">
                      Nomor Rekening&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      type="text"
                      name="bank_number"
                      placeholder="Nomor Rekening"
                      onChange={formikPayment.handleChange}
                      value={tempData?.payment_method?.bank_number}
                      requiredMessages="Divisi tidak boleh kosong!"
                      required
                      disabled
                    />
                  </div>
                </div>
              ) : tempData?.payment_type_admin !== 3 &&
                tempData.payment_method?.payment_type_id !== 1 ? (
                <div className="flex flex-col space-y-4">
                  <div>
                    <Label htmlFor="division">
                      Nama E-wallet&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      type="text"
                      name="bank_name"
                      placeholder="Nama E-wallet"
                      onChange={formikPayment.handleChange}
                      value={tempData?.paid_with}
                      requiredMessages="Divisi tidak boleh kosong!"
                      required
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="division">
                      Nomor Telepon&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      type="text"
                      name="bank_number"
                      placeholder="Nomor Telepon"
                      onChange={formikPayment.handleChange}
                      value={tempData?.payment_method?.phone}
                      requiredMessages="Divisi tidak boleh kosong!"
                      required
                      disabled
                    />
                  </div>
                </div>
              ) : null}
              <div>
                <Label htmlFor="division">
                  Upload Bukti Pembayaran&nbsp;
                  <sup className="font-black text-ui-red">*</sup>
                </Label>
                <div
                  className="flex h-auto w-auto"
                  onClick={() => {
                    if (
                      tempData?.approval_photo.split(".").includes("PDF") ||
                      tempData?.approval_photo.split(".").includes("pdf")
                    ) {
                      let el = document.createElement("a");
                      el.href = `${process.env.NEXT_PUBLIC_API}/${tempData?.approval_photo}`;
                      el.target = "_blank";
                      el.download = "bukti_transfer.pdf";
                      el.click();
                    }
                  }}
                >
                  <Image
                    className="img-fluid flex "
                    alt="image"
                    height={150}
                    width={200}
                    src={
                      tempData?.approval_photo.split(".").includes("PDF") ||
                      tempData?.approval_photo.split(".").includes("pdf")
                        ? pdfIc
                        : `${process.env.NEXT_PUBLIC_API}/${tempData?.approval_photo}`
                    }
                  />
                </div>
              </div>

              <div>
                <div className="flex w-96 flex-col rounded-md bg-white px-2 py-3">
                  <Label htmlFor="email">Detail Pembayaran</Label>
                  <div className="mb-2 flex flex-row justify-between">
                    <span style={{ color: "#7D8FB3" }}>Jenis Paket</span>
                    <span style={{ color: "#4D5E80" }}>
                      {tempData?.package?.name +
                        " - " +
                        tempData?.package?.package_type?.name +
                        " - " +
                        formatToCurrency(tempData?.package?.price ?? 0, true)}
                    </span>
                  </div>
                  <div className="mb-2 flex flex-row justify-between">
                    <span style={{ color: "#7D8FB3" }}>Biaya Admin</span>
                    <span style={{ color: "#4D5E80" }}>
                      {formatToCurrency(tempData?.admin_fee ?? 0, true)}
                    </span>
                  </div>
                  <div className="flex flex-row justify-between border-t-2 border-dashed pt-2">
                    <span>Total</span>
                    <span style={{ color: "#4D5E80" }}>
                      {formatToCurrency(
                        tempData?.admin_fee + tempData?.package?.price ?? 0,
                        true
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 gap-4 md:flex">
              <Button
                className="w-40"
                disabled={formikPayment.isSubmitting}
                fit={!isMobile}
                outlined
                color="red"
                onClick={() => {
                  setAction("tolak");
                  setRejectPopup({ open: !rejectPopup.open, selectedId: id });
                }}
              >
                Tolak Member
              </Button>
              <Button
                className="w-72"
                type="submit"
                disabled={isSubmitting}
                fit={!isMobile}
              >
                {isSubmitting ? "Menyimpan..." : "Terima Member"}
              </Button>
            </div>
          </form>
        )}
        <Reject
          open={rejectPopup.open}
          onOk={() => {
            let newPayload = {
              is_accepted: false,
              reason: notes,
            };
            addEditPayment(newPayload);
            setRejectPopup({ open: false, selectedId: null });
          }}
          onCancel={() => setRejectPopup({ open: false, selectedId: null })}
          notes={notes}
          setNotes={setNotes}
          labelReject="Tolak Member"
          maskClosable={true}
          onClose={() => setRejectPopup({ open: false, selectedId: null })}
        />
      </div>
    </React.Fragment>
  );
}

export default addEditPembayaran;
