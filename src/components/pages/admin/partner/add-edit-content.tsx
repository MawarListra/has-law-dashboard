/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  ApiGetAllPartnerCategories,
  ApiGetOnePartner,
  ApiPostPartner,
  ApiPutPartner,
} from "@/hooks/use-fetch";

import type {
  Partner,
  PartnerCategories,
  PartnerCategoriesType,
} from "@/types/admin/partner";
import { InputSelect } from "@/components/ui";
import InputUpload from "@/components/ui/Form/Input/InputUpload";

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

function AddEditPartner() {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  // const secretKey = "supersecretkey";
  // const CryptoJS = require("crypto-js");

  const type = slug[0];
  const id = slug[1];

  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categoriesOption, setCategoriesOption] = useState([
    {
      value: 0,
      label: "",
    },
  ]);

  const formikPartner = useFormik<Partner>({
    initialValues: {
      name: "",
      photo: "",
      categories: "",
      description: "",
      image: "",
      categories_id: 0,
    },
    onSubmit: async (values) => {
      if (/\d/.test(values.name)) {
        alert("Nama Partner Hanya boleh huruf");
        return;
      }

      await addEditPartner(values);
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

    //validate number only
    // if (["phone", "identity_number"].includes(name)) {
    //   tempValue = tempValue.replace(/\D/g, "");
    // }
    formikPartner.setFieldValue(name, tempValue);
  };

  const handleChangeImage = (e: any) => {
    let file = e;
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!file) {
      handleChange("", "photo");
      return;
    }
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Please select a valid image file.");
      return;
    }
    handleChange(file, "photo");
  };

  /* FETCH DATA */
  // [GET] Data Kategori Partner
  ApiGetAllPartnerCategories({
    params: {
      page: 1,
    },
    onSuccess(res) {
      const { data } = res;
      let temps: {
        value: number;
        label: string;
      }[] = [];

      data.map((e: PartnerCategoriesType) => {
        temps.push({
          value: e?.id,
          label: e?.name,
        });
      });
      setCategoriesOption(temps);
    },
    onError(err) {
      console.error(err);
    },
  });

  // [GET] One Partner
  const getOnePartner = ApiGetOnePartner({
    id,
    onSuccess(res) {
      const { data } = res;
      formikPartner.setValues({
        ...formikPartner.values,
        name: data.name,
        photo: data?.image,
        image: data?.image,
        description: data?.description,
        categories: data?.categories,
        categories_id: data?.categories_id,
      });

      const editor = document.getElementById("editor") as HTMLDivElement;

      // Load text from formikPartner.values.description
      const savedText = data?.description;

      if (savedText) {
        editor.innerHTML = savedText;
      }
    },
    onError(err) {
      console.error(err);
    },
  });

  React.useEffect(() => {
    if (type === "edit") getOnePartner.refetch();
  }, [id, type]);

  // [POST] Partner
  const createPartner = ApiPostPartner({
    onSuccess() {
      alert("Berhasil menambah Data");
      NextRouter.replace("/admin/partner");
      formikPartner.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikPartner.setSubmitting(false);
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

  // [PUT] Partner
  const updatePartner = ApiPutPartner({
    onSuccess() {
      alert("Berhasil mengubah Data Partner");
      NextRouter.replace("/admin/partner");
      formikPartner.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikPartner.setSubmitting(false);
      setIsSubmitting(false);

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
  const addEditPartner = async (payload: Partner) => {
    formikPartner.setSubmitting(true);
    setIsSubmitting(true);
    const datas = new FormData();
    Object.keys(payload).map((el) => {
      if (payload?.[el] != null) {
        if (el !== "categories_id" && el != "image") {
          datas.set(el, payload?.[el]);
        }
      }
    });

    // for (const pair of datas.entries()) {
    //   console.log("cek datas", pair[0] + ": " + pair[1]);
    // }
    if (type === "add") {
      createPartner.mutate(datas);
    } else {
      updatePartner.mutate({ id, payload: datas });
    }
  };

  React.useLayoutEffect(() => {
    const editor = document.getElementById("editor") as HTMLDivElement;

    // Save text to formikPartner.values.description on input
    editor.addEventListener("input", () => {
      const text = editor.innerHTML;
      formikPartner?.setFieldValue("description", text);
    });
  }, []);

  useEffect(() => {
    console.log("cek formikPartner", formikPartner?.values);
  }, [formikPartner]);

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        <Breadcrumb
          item={[
            {
              title: "Kelola Kategori Partner",
              linkTo: "/admin/partner",
            },
            {
              title: type === "add" ? "Tambah Kategori" : "Edit Kategori",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>

      <div className="h-full w-full md:mx-4" style={{ overflow: "scroll" }}>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={formikPartner.handleSubmit}
        >
          <div className="w-6/12">
            <Label htmlFor="noTelp">
              Pilih Kategori&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputSelect
              name="package_id"
              placeholder="Pilih Paket"
              value={formikPartner.values.categories_id}
              option={categoriesOption}
              onChange={(e) => {
                formikPartner.setFieldValue("categories_id", e?.value);
                formikPartner.setFieldValue("categories", e?.label);
              }}
              required
            />
          </div>
          <div className="w-6/12">
            <Label htmlFor="nama">
              Nama&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputField
              type="text"
              name="name"
              placeholder="Nama"
              onChange={formikPartner.handleChange}
              value={formikPartner.values.name}
              requiredMessages="Nama tidak boleh kosong!"
              required
            />
          </div>
          <div className="w-6/12">
            <Label htmlFor="noTelp">
              Upload Foto&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputUpload
              name="photo"
              placeholder="Upload"
              value={formikPartner.values.photo}
              accept="image/*"
              onChange={(e) => handleChangeImage(e)}
              required
            />
          </div>
          <div>
            <Label htmlFor="noTelp">
              Deskripsi&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>

            <div
              id="editor"
              contentEditable={true}
              style={{
                width: "100%",
                minHeight: 300,
                border: "1px solid #ccc",
                padding: 4,
                boxSizing: "border-box",
                backgroundColor: "white",
              }}
            ></div>
          </div>

          <div className="flex w-full md:flex">
            <Button
              type="submit"
              disabled={isSubmitting}
              // fit={!isMobile}
            >
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddEditPartner;
