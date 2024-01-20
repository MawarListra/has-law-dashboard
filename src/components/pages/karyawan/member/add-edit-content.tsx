/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useId, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

/* UI - COMPONENTS */
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/Form/Input/InputField";
import Label from "@/components/ui/Form/Input/InputLabel";

/* UI - ICONS */
import VisibilityIcon from "@/components/ui/Icons/visibility-icon";
import VisibilityOffIcon from "@/components/ui/Icons/visibility-off-icon";

import useAppNav from "@/hooks/use-app-nav";
import useResponsive from "@/hooks/use-check-mobile-screen";
import {
  ApiGetAllPaketPackages,
  ApiGetAllPaymentTypeAdmin,
  ApiGetOneMember,
  ApiPostMember,
  ApiPutMember,
  ApiPostRenewMember,
  ApiGetDetailInvoice,
  ApiPutTransaction,
  ApiGetAllAdminFee,
  ApiGetOneAdminFee,
} from "@/hooks/use-fetch";

import type {
  Member,
  MemberRenew,
  MemberTransaction,
  MemberType,
} from "@/types/admin/member";
import MoneyIcon from "@/components/ui/Icons/money-icon";
import ExclamationCircleIcon from "@/components/ui/Icons/exclamation-circle-icon";
import InputUpload from "@/components/ui/Form/Input/InputUpload";
import { InputSelect } from "@/components/ui";
import RadioButton from "@/components/ui/Form/Radio";
import moment from "moment";
import { PaketPackages, PaketTypeAdmin } from "@/types/admin/paket";

import Link from "next/link";
import KeyboardArrowLeftIcon from "@/components/ui/Icons/keyboard-arrow-left-icon";
import { formatToCurrency } from "@/libs/format-to-currency";
import InvoiceDoc from "./print-invoice";
import usePDFGenerator from "@/components/utils/pdfGenerator";
import { apiBaseUrl } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

function AddEditMember() {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  const { data: session, status } = useSession();

  const type = slug[0];
  const id = slug[1];

  const fileUpdate = new FormData();
  fileUpdate.append("approval_photo", "");

  const [transactionId, setTransactionId] = React.useState(-1);
  const [isChecked, setIsChecked] = React.useState(-1);
  const [isPrintPage, setIsPrintPage] = React.useState(false);
  const [adminFee, setAdminFee] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFetchUpdateApproval, setIsFetchUpdateApproval] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  let genderOption = [
    {
      value: "Laki-Laki",
      label: "Laki-Laki",
    },
    {
      value: "Perempuan",
      label: "Perempuan",
    },
  ];
  const [paketOption, setPaketOption] = React.useState([
    {
      value: 0,
      label: "",
      price: 0,
      category_id: 0,
    },
  ]);

  const [paymentTypeOption, setPaymentTypeOption] = React.useState([
    {
      value: 0,
      label: "",
    },
  ]);

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
  const [sum, setSum] = useState(0);

  const formikMember = useFormik<Member>({
    initialValues: {
      email: "",
      name: "",
      identity_number: "",
      phone: "",
      sex: "",
      born_date: null,
      package_id: "",
      // paymentMethod: "",
      identity: "",
      approval_photo: "",
      payment_type_admin: 0,
      role: "admin",
      identity_image: "",
      transactiondata: { id: -1 },
      member_until: "",
      package: {
        name: "",
        price: 0,
      },
      admin_fee: 0,
      password: "",
    },
    onSubmit: async (values) => {
      values.identity_number = values.identity_number.toString();

      if (/\d/.test(values.name)) {
        alert("Nama Member Hanya boleh huruf");
        return;
      }

      await addEditMember(values);
    },
  });

  const formikMemberRenew = useFormik<MemberRenew>({
    initialValues: {
      user_id: 0,
      package_id: 0,
      approval_photo: "",
      payment_type_admin: 0,
      transactiondata: { id: -1 },
      admin_fee: 0,
    },
    onSubmit: async (val) => {
      await handleRenewMember(val);
    },
  });

  const handleChange = (
    value: HandleChangeValueType,
    name: HandleChangeNameType
  ) => {
    let tempValue = value;
    if (typeof value === null || typeof value === undefined) {
      if (name === "price") {
        tempValue = 0;
      } else {
        tempValue = "";
      }
    }

    if (name === "package_id") {
      let found = paketOption.find((e) => e?.value === tempValue);
      if (found) {
        formikMember.setFieldValue("package.name", found?.label);
        formikMember.setFieldValue("package.price", found?.price);
        formikMember.setFieldValue("category_id", found?.category_id);
        if (type === "add") {
          if (found?.category_id === 2) {
            formikMember.setFieldValue("admin_fee", 0);
          } else {
            formikMember.setFieldValue("admin_fee", adminFee);
          }
        } else {
          if (found?.category_id === 2) {
            formikMemberRenew.setFieldValue("admin_fee", 0);
          } else {
            formikMemberRenew.setFieldValue("admin_fee", adminFee);
          }
        }
      }
    }

    //validate number only
    if (["phone", "identity_number"].includes(name)) {
      tempValue = tempValue.replace(/\D/g, "");
    }
    if (type === "renew") {
      formikMemberRenew.setFieldValue(name, tempValue);
    } else {
      formikMember.setFieldValue(name, tempValue);
    }
  };

  const handleChangeImage = (e: any, kind: any) => {
    let file = e;
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!file) {
      if (kind === "ktp") {
        handleChange("", "identity");
      } else {
        if (isPrintPage) {
          setTransactionData({
            ...transactionData,
            approval_photo: "",
          });
        } else {
          handleChange("", "approval_photo");
        }
      }
      return;
    }
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Please select a valid image file.");
      return;
    }
    if (kind === "ktp") {
      handleChange(file, "identity");
    } else {
      if (isPrintPage) {
        setTransactionData({
          ...transactionData,
          approval_photo: file,
        });
      } else {
        handleChange(file, "approval_photo");
      }
    }
  };

  const renderedDoc = React.useMemo(() => {
    return InvoiceDoc({ invoiceData: transactionData });
  }, [transactionData]);

  const { PDFModal, handlePrint, instance, updateInstance, PDFViewer } =
    usePDFGenerator({
      onAfterPrint: () => {
        if (transactionData?.payment_type_admin !== 3) {
          NextRouter.replace("/karyawan/member");
        }
      },
      PDFDocument: renderedDoc,
    });

  /* FETCH DATA */
  // [GET] One Member
  const getOneMember = ApiGetOneMember({
    id,
    onSuccess(res) {
      const { data } = res;
      if (type === "renew") {
        formikMemberRenew.setValues({
          ...formikMemberRenew.values,
          user_id: parseInt(id),
          package_id: 0,
          approval_photo: "",
          payment_type_admin: 0,
          admin_fee: data?.category_id === 2 ? 0 : data?.admin_fee,
        });
      }
      formikMember.setValues({
        ...formikMember.values,
        name: data.name,
        email: data.email,
        phone: data.phone,
        identity_number: data.identity_number,
        identity: data?.identity_image,
        sex: data.sex,
        born_date: moment(data.born_date).format("yyyy-MM-DD"),
        package_id: data.package_id,
        payment_type_admin: data.payment_type_admin,
        role: "admin",
        identity_image: `${process.env.NEXT_PUBLIC_API}/${data?.identity_image}`,
        member_until: data?.member_until,
      });
    },
    onError(err) {
      console.error(err);
    },
  });

  const getAdminFee =
    type === "add"
      ? ApiGetAllAdminFee({
          onSuccess(res) {
            const { data, meta } = res;
            // formikMember.setFieldValue("admin_fee", data?.[0]?.value);
            setAdminFee(data?.[0]?.value);
          },
          onError(err) {
            console.error(err);
          },
        })
      : ApiGetOneAdminFee({
          id,
          onSuccess(res) {
            const { data } = res;
            // formikMember.setFieldValue("admin_fee", data?.[0]?.value);
            setAdminFee(data?.admin_fee);
          },
          onError(err) {
            console.error(err);
          },
        });

  const getAdminFeeCreateMember = ApiGetAllAdminFee({
    onSuccess(res) {
      const { data, meta } = res;
      // formikMember.setFieldValue("admin_fee", data?.[0]?.value);
      setAdminFee(data?.[0]?.value);
    },
    onError(err) {
      console.error(err);
    },
  });

  const getAdminFeeRenewMember = ApiGetOneAdminFee({
    id,
    onSuccess(res) {
      const { data } = res;
      // formikMember.setFieldValue("admin_fee", data?.[0]?.value);
      setAdminFee(data?.admin_fee);
    },
    onError(err) {
      console.error(err);
    },
  });

  // React.useEffect(() => {
  //   if (type === "add" && !id) {
  //     /// GET biaya admin
  //     getAdminFeeCreateMember.refetch();
  //   } else if (type === "renew" && id) {
  //     /// GET biaya admin
  //     getAdminFeeRenewMember.refetch();
  //   }
  // }, [type, id]);

  useEffect(() => {
    getAdminFee.refetch();
  }, [type]);

  // [GET] Detail Invoice
  const getDetailInvoice = ApiGetDetailInvoice({
    id: transactionId,
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
    },
    onError(err) {
      console.error(err);
    },
  });

  // [GET] Data Paket
  ApiGetAllPaketPackages({
    params: {
      page: 1,
    },
    onSuccess(res) {
      const { data } = res;
      let temps: {
        value: number;
        label: string;
        price: number;
        category_id: number;
      }[] = [];

      data.map((e: PaketPackages) => {
        temps.push({
          value: e?.id,
          label:
            e?.name +
            " - " +
            e?.package_type?.name +
            " - " +
            formatToCurrency(e?.price ?? 0, true),
          price: e?.price,
          category_id: e?.category_id,
        });
      });
      setPaketOption(temps);
    },
    onError(err) {
      console.error(err);
    },
  });

  ApiGetAllPaymentTypeAdmin({
    onSuccess(res) {
      const { data } = res;
      let temp: { value: number; label: string }[] = [];

      data.map((e: PaketTypeAdmin) => {
        temp.push({
          value: e?.id,
          label: e?.name,
        });
      });
      setPaymentTypeOption(temp);
    },
    onError(err) {
      console.error(err);
    },
  });

  React.useEffect(() => {
    if (["edit", "renew"].includes(type)) getOneMember.refetch();
  }, [id]);

  // [POST] Member
  const createMember = ApiPostMember({
    onSuccess(res) {
      setTransactionId(res?.transactiondata?.id);
      alert("Berhasil menambah Data Member");
      setIsPrintPage(true);
      formikMember.setSubmitting(false);
      setIsSubmitting(false);

      // NextRouter.replace("/admin/member");
    },
    onError(err) {
      formikMember.setSubmitting(false);
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

  // [POST] Renew Member
  const renewMember = ApiPostRenewMember({
    onSuccess(res) {
      setTransactionId(res?.transactiondata?.id);
      alert("Berhasil perpanjang Membership");
      setIsPrintPage(true);
      if (formikMemberRenew.values?.payment_type_admin === 3) {
        setTransactionData({
          ...transactionData,
          approval_photo: "",
        });
      }
      formikMemberRenew.setSubmitting(false);
      setIsSubmitting(false);

      // NextRouter.replace("/admin/member/print");
    },
    onError(err) {
      formikMemberRenew.setSubmitting(false);
      setIsSubmitting(false);

      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat perpanjang Membership.");
        }
      }

      console.error(err);
    },
  });

  // [PUT] Member
  const updateMember = ApiPutMember({
    onSuccess() {
      alert("Berhasil mengubah Data Member");
      NextRouter.replace("/karyawan/member");
      formikMember.setSubmitting(false);
    },
    onError(err) {
      formikMember.setSubmitting(false);

      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat Mengubah Data.");
        }
      }

      console.error(err);
    },
  });

  // [PUT] Transaction
  const updateApproval = ApiPutTransaction({
    onSuccess() {
      alert("Berhasil mengubah bukti transaksi");
      NextRouter.replace("/admin/member");
      setIsFetchUpdateApproval(false);
    },
    onError(err) {
      setIsFetchUpdateApproval(false);
      if (axios.isAxiosError(err)) {
        const errCode = err.response?.status;

        switch (errCode) {
          case 422:
            alert(err.response?.data.message);
            break;

          default:
            alert("Telah terjadi kesalahan saat Mengubah Data.");
        }
      }

      console.error(err);
    },
  });

  /* COMPONENT FUNCTION */
  const addEditMember = async (payload: Member) => {
    formikMember.setSubmitting(true);
    setIsSubmitting(true);
    let userId = session?.user?.id || "0";
    const datas = new FormData();
    Object.keys(payload).map((el) => {
      if (payload?.[el] != null) {
        if (
          type === "add" &&
          el !== "identity_image" &&
          el != "transactiondata" &&
          el != "member_until" &&
          el !== "package"
        ) {
          datas.set(
            el,
            el === "born_date"
              ? moment(payload[el]).format("yyyy-MM-DD HH:mm:ss")
              : payload?.[el]
          );
          datas.set("created_by", userId.toString());
        }
        // if (type != "add" && el !== "package" && el != "identity_image") {
        if (
          type === "edit" &&
          el !== "transactiondata" &&
          el !== "member_until" &&
          el !== "identity_image" &&
          el !== "approval_photo" &&
          el !== "admin_fee" &&
          el !== "package"
        ) {
          if (el === "password" && payload?.[el]) {
            datas.set("password", payload?.[el]);
          }
          if (el !== "password") {
            datas.set(
              el,
              el === "born_date"
                ? moment(payload[el]).format("yyyy-MM-DD HH:mm:ss")
                : payload?.[el]
            );
          }
        }
        // }
        if (el === "admin_fee" && payload["category_id"] === 2) {
          datas.set("admin_fee", "0");
        }
      }
    });
    // for (const pair of datas.entries()) {
    //   console.log("cek datas", pair[0] + ": " + pair[1]);
    // }
    if (type === "add") {
      createMember.mutate(datas);
    } else {
      updateMember.mutate({ id, payload: datas });
    }
  };

  const updateApprovalFile = async (payload: any) => {
    setIsFetchUpdateApproval(true);
    fileUpdate.append("approval_photo", payload?.approval_photo);
    updateApproval.mutate({ id: transactionData?.id, payload: fileUpdate });
  };

  const handleRenewMember = async (payload: MemberRenew) => {
    formikMemberRenew.setSubmitting(true);
    setIsSubmitting(true);
    let userId = session?.user?.id || "0";
    const datas = new FormData();
    Object.keys(payload).map((el) => {
      if (payload?.[el] != null) {
        datas.set(el, payload?.[el]);
      }
    });
    datas.set("created_by", userId.toString());
    renewMember.mutate(datas);
  };

  const handleClickPrint = () => {
    handlePrint();
  };

  const calcTotal = useCallback(() => {
    let val = 0;
    if (isPrintPage) {
      val = transactionData?.admin_fee + transactionData?.package?.price;
    } else {
      val =
        formikMember?.values?.admin_fee + formikMember?.values?.package?.price;
    }

    setSum(val);
  }, [formikMember, formikMemberRenew, isPrintPage]);

  React.useEffect(() => {
    if (transactionId !== -1) {
      getDetailInvoice.refetch();
    }
  }, [transactionId]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        {!isPrintPage ? (
          <Breadcrumb
            item={[
              { title: "Kelola Member", linkTo: "/karyawan/member" },
              {
                title:
                  type === "add"
                    ? "Tambah Member"
                    : type === "edit"
                    ? "Edit Member"
                    : "Perpanjang Member",
                active: true,
              },
            ]}
            className="ml-4"
          />
        ) : (
          <Link href={"/karyawan/member"}>
            <div className="flex flex-row items-center space-x-4">
              <KeyboardArrowLeftIcon />
              Kembali
            </div>
          </Link>
        )}
      </div>

      <div className="md:mx-4 md:w-3/4">
        {!isPrintPage ? (
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={
              type === "renew"
                ? formikMemberRenew.handleSubmit
                : formikMember.handleSubmit
            }
          >
            {type === "renew" ? (
              <>
                <div
                  className="flex flex-row items-center  p-2"
                  style={{ borderRadius: 5, background: "#FEE" }}
                >
                  <ExclamationCircleIcon />
                  <span
                    style={{
                      color: "#3361FF",
                      fontFamily: "Roboto",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "16px",
                    }}
                  >
                    {moment(formikMember.values?.member_until).diff(
                      moment(),
                      "days"
                    ) <= 0
                      ? "Membership member sudah habis"
                      : `Member ini masih memiliki durasi hingga 
                    ${moment(formikMember.values?.member_until).format(
                      "DD MMMM YYYY"
                    )}`}
                    .
                  </span>
                </div>
                <div>
                  <Label htmlFor="email">Detail Member</Label>
                  <div className="flex w-96 flex-col rounded-md bg-white px-2 py-3">
                    <span>{formikMember.values.name}</span>
                    <small className="text-xs font-normal text-[#999]">
                      {formikMember.values.phone}
                    </small>
                    <small className="text-xs font-normal text-[#999]">
                      {formikMember.values.email}
                    </small>
                  </div>
                </div>
                <div className="w-6/12">
                  <Label htmlFor="noTelp">
                    Pilih Paket&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputSelect
                    name="package_id"
                    placeholder="Pilih Paket"
                    value={formikMemberRenew.values.package_id}
                    option={paketOption}
                    onChange={(e) => {
                      handleChange(e?.value, "package_id");
                    }}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    Jenis Pembayaran&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <div className="flex flex-row space-x-4">
                    {paymentTypeOption.map((el) => {
                      return (
                        <RadioButton
                          name="radio1"
                          checked={isChecked === el?.value}
                          disabled={false}
                          className=""
                          value="tunai"
                          onChange={() => {
                            setIsChecked(el?.value);
                            handleChange(el?.value, "payment_type_admin");
                            if (el?.value === 3) {
                              handleChange("", "approval_photo");
                            }
                          }}
                          props={{}}
                          text={el?.label}
                        />
                      );
                    })}
                  </div>
                </div>
                {formikMemberRenew.values.payment_type_admin !== 3 && (
                  <div>
                    <Label htmlFor="noTelp">
                      Upload Bukti Pembayaran&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputUpload
                      name="approval_photo"
                      placeholder="Upload"
                      value={formikMemberRenew.values.approval_photo}
                      accept="image/*"
                      onChange={(e) => handleChangeImage(e, "approval")}
                      required={
                        formikMemberRenew?.values?.payment_type_admin !== 3
                      }
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="email">
                    Email&nbsp;<sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formikMember.handleChange}
                    value={formikMember.values.email}
                    requiredMessages="Email tidak boleh kosong!"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nama">
                    Nama Panjang&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Nama"
                    onChange={formikMember.handleChange}
                    value={formikMember.values.name}
                    requiredMessages="Nama Member tidak boleh kosong!"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nama">
                    Nomor Kartu Identitas&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputField
                    type="text"
                    name="identity_number"
                    placeholder="Nomor Kartu Identitas"
                    onChange={(e) => {
                      handleChange(e.target.value, "identity_number");
                    }}
                    value={formikMember.values.identity_number}
                    requiredMessages="Nama Member tidak boleh kosong!"
                    required
                  />
                </div>
                {/* upload ktp */}
                <div>
                  <Label htmlFor="noTelp">
                    Upload Identitas&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputUpload
                    name="ktp"
                    placeholder="Upload"
                    value={formikMember.values.identity}
                    accept="image/*,application/pdf"
                    onChange={(e) => handleChangeImage(e, "ktp")}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="noTelp">
                    Nomor Handphone&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputField
                    type="tel"
                    name="phone"
                    placeholder="Nomor Handphone"
                    onChange={(e) => {
                      handleChange(e.target.value, "phone");
                    }}
                    value={formikMember.values.phone}
                    requiredMessages="Nomor Handphone tidak boleh kosong!"
                    required
                  />
                </div>
                {type === "edit" && (
                  <div>
                    <Label htmlFor="noTelp">Password</Label>
                    <InputField
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        handleChange(e.target.value, "password");
                      }}
                      iconRight={
                        showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )
                      }
                      onClickRight={() => setShowPassword(!showPassword)}
                      value={formikMember.values.password}
                      // requiredMessages="Nomor Handphone tidak boleh kosong!"
                      // required
                    />
                  </div>
                )}
                <div className="flex w-full flex-row space-x-4">
                  <div>
                    <Label htmlFor="noTelp">
                      Jenis Kelamin&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputSelect
                      name="sex"
                      placeholder="Jenis Kelamin"
                      value={formikMember.values.sex}
                      option={genderOption}
                      onChange={(e) => {
                        handleChange(e?.value, "sex");
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="noTelp">
                      Tanggal Lahir&nbsp;
                      <sup className="font-black text-ui-red">*</sup>
                    </Label>
                    <InputField
                      name="born_date"
                      placeholder="Tanggal Lahir"
                      value={formikMember.values.born_date}
                      type="date"
                      onChange={
                        type === "renew"
                          ? formikMemberRenew.handleChange
                          : formikMember.handleChange
                      }
                      required
                    />
                  </div>
                </div>
                {type === "add" && (
                  <>
                    <div className="w-6/12">
                      <Label htmlFor="noTelp">
                        Pilih Paket&nbsp;
                        <sup className="font-black text-ui-red">*</sup>
                      </Label>
                      <InputSelect
                        name="package_id"
                        placeholder="Pilih Paket"
                        value={formikMember.values.package_id}
                        option={paketOption}
                        onChange={(e) => {
                          handleChange(e?.value, "package_id");
                        }}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        Jenis Pembayaran&nbsp;
                        <sup className="font-black text-ui-red">*</sup>
                      </Label>
                      <div className="flex flex-row items-center space-x-4 ">
                        <div className="flex flex-row space-x-4">
                          {paymentTypeOption.map((e) => {
                            return (
                              <RadioButton
                                name="radio1"
                                checked={isChecked === e?.value}
                                disabled={false}
                                className=""
                                value={formikMember.values.payment_type_admin}
                                onChange={() => {
                                  setIsChecked(e?.value);
                                  handleChange(e?.value, "payment_type_admin");
                                  if (e?.value === 3) {
                                    handleChange("", "approval_photo");
                                  }
                                }}
                                props={{}}
                                text={e?.label}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {formikMember?.values?.payment_type_admin !== 3 && (
                      <div>
                        <Label htmlFor="noTelp">
                          Upload Bukti Pembayaran&nbsp;
                          {formikMember?.values.payment_type_admin === 3 && (
                            <sup className="font-black text-ui-red">*</sup>
                          )}
                        </Label>
                        <InputUpload
                          name="approval_photo"
                          placeholder="Upload"
                          value={formikMember.values.approval_photo}
                          accept="image/*"
                          onChange={(e) => handleChangeImage(e, "approval")}
                          required={
                            formikMember?.values.payment_type_admin !== 3
                          }
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {type !== "edit" && (
              <div style={{ marginTop: 40 }}>
                <div className="flex w-96 flex-col rounded-md bg-white px-2 py-3">
                  <Label htmlFor="email">Detail Pembayaran</Label>
                  <div className="mb-2 flex flex-row justify-between">
                    <span style={{ color: "#7D8FB3" }}>Jenis Paket</span>
                    <span style={{ color: "#4D5E80" }}>
                      {formikMember?.values?.package?.name}
                    </span>
                  </div>
                  <div className="mb-2 flex flex-row justify-between">
                    <span style={{ color: "#7D8FB3" }}>Biaya Admin</span>
                    <span style={{ color: "#4D5E80" }}>
                      {formatToCurrency(
                        type === "add"
                          ? formikMember?.values?.admin_fee
                          : formikMemberRenew?.values?.admin_fee ?? 0,
                        true
                      )}
                    </span>
                  </div>
                  <div className="flex flex-row justify-between border-t-2 border-dashed pt-2">
                    <span>Total</span>
                    <span style={{ color: "#4D5E80" }}>
                      {formatToCurrency(sum ?? 0, true)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex w-full md:flex">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center"
                // fit={!isMobile}
              >
                {isSubmitting ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex w-96 flex-col border-b-2 border-solid border-ui-gray-blue-90 py-4">
              <div className="flex flex-row justify-between">
                <span>Jenis Pembayaran</span>
                <span style={{ color: "#3361FF" }}>
                  {
                    paymentTypeOption?.find(
                      (e) => e?.value === transactionData?.payment_type_admin
                    )?.label
                  }
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
                    {
                      paketOption?.find(
                        (e) => e?.value === transactionData?.package?.id
                      )?.label
                    }
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
                  <span>{formatToCurrency(sum ?? 0, true)}</span>
                </div>
              </div>
            </div>

            {transactionData.payment_type_admin === 3 ? (
              <div className="flex flex-col justify-between space-y-4">
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

                <div style={{ height: 250 }}>
                  <Label htmlFor="noTelp">
                    Upload Bukti Pembayaran&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <InputUpload
                    name="approval_photo"
                    placeholder="Upload"
                    value={transactionData?.approval_photo}
                    accept="image/*"
                    onChange={(e) => handleChangeImage(e, "approval")}
                  />
                </div>
                <div className="flex w-full md:flex">
                  <Button
                    className="flex items-center justify-center"
                    // fit={!isMobile}
                    disabled={isFetchUpdateApproval}
                    onClick={() =>
                      updateApprovalFile({
                        id: transactionData?.id,
                        payload: transactionData,
                      })
                    }
                  >
                    {isFetchUpdateApproval ? "Menyimpan ..." : "Simpan"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between space-y-4">
                <div style={{ height: 250 }}>
                  <Label htmlFor="noTelp">
                    Upload Bukti Pembayaran&nbsp;
                    <sup className="font-black text-ui-red">*</sup>
                  </Label>
                  <div style={{ width: "200px", height: "150px" }}>
                    <img
                      src={transactionData?.approval_photo}
                      className="flex h-full w-full object-contain"
                    />
                  </div>
                </div>
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
            )}
          </div>
        )}
      </div>
      {/* <PDFViewer /> */}
    </React.Fragment>
  );
}

export default AddEditMember;
