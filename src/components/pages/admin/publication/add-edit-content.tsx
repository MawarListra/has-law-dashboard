/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  ApiGetOnePublication,
  ApiPostPublication,
  ApiPutPublication,
} from "@/hooks/use-fetch";

import type { Publication } from "@/types/admin/publication";

import { InputSelect } from "@/components/ui";
import InputUpload from "@/components/ui/Form/Input/InputUpload";

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

function AddEditPublication() {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  // const secretKey = "supersecretkey";
  // const CryptoJS = require("crypto-js");

  const type = slug[0];
  const id = slug[1];

  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formikPublication = useFormik<Publication>({
    initialValues: {
      title: "",
      photo: "",
      description: "",
      image: "",
      createdAt: "",
      updatedAt: "",
    },
    onSubmit: async (values) => {
      if (/\d/.test(values.name)) {
        alert("Nama Publication Hanya boleh huruf");
        return;
      }

      await addEditPublication(values);
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
    formikPublication.setFieldValue(name, tempValue);
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

  // [GET] One Publication
  const getOnePublication = ApiGetOnePublication({
    id,
    onSuccess(res) {
      const { data } = res;
      formikPublication.setValues({
        ...formikPublication.values,
        title: data.title,
        photo: data?.image,
        image: data?.image,
        description: data?.description,
        createdAt: data?.createdAt,
        updatedAt: data?.updatedAt,
      });

      const editor = document.getElementById("editor") as HTMLDivElement;

      // Load text from formikPublication.values.description
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
    if (type === "edit") getOnePublication.refetch();
  }, [id, type]);

  // [POST] Publication
  const createPublication = ApiPostPublication({
    onSuccess() {
      alert("Berhasil menambah Data");
      NextRouter.replace("/admin/publication");
      formikPublication.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikPublication.setSubmitting(false);
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

  // [PUT] Publication
  const updatePublication = ApiPutPublication({
    onSuccess() {
      alert("Berhasil mengubah Data Publikasi");
      NextRouter.replace("/admin/publication");
      formikPublication.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikPublication.setSubmitting(false);
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
  const addEditPublication = async (payload: Publication) => {
    formikPublication.setSubmitting(true);
    setIsSubmitting(true);
    const datas = new FormData();
    Object.keys(payload).map((el) => {
      if (payload?.[el] != null) {
        if (
          el !== "categories_id" &&
          el != "image" &&
          el !== "updatedAt" &&
          el !== "createdAt"
        ) {
          datas.set(el, payload?.[el]);
        }
      }
    });

    // for (const pair of datas.entries()) {
    //   console.log("cek datas", pair[0] + ": " + pair[1]);
    // }
    if (type === "add") {
      createPublication.mutate(datas);
    } else {
      updatePublication.mutate({ id, payload: datas });
    }
  };

  React.useLayoutEffect(() => {
    const editor = document.getElementById("editor") as HTMLDivElement;

    // Save text to formikPublication.values.description on input
    editor.addEventListener("input", () => {
      const text = editor.innerHTML;
      formikPublication?.setFieldValue("description", text);
    });
  }, []);

  useEffect(() => {
    console.log("cek formikPublication", formikPublication?.values);
  }, [formikPublication]);

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        <Breadcrumb
          item={[
            {
              title: "Kelola Kategori Publication",
              linkTo: "/admin/publication",
            },
            {
              title: type === "add" ? "Tambah Kategori" : "Edit Kategori",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>

      <div className="md:mx-4 md:w-3/4">
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={formikPublication.handleSubmit}
        >
          <div>
            <Label htmlFor="nama">
              Judul Publikasi&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputField
              type="text"
              name="title"
              placeholder="Judul Publikasi"
              onChange={formikPublication.handleChange}
              value={formikPublication.values.title}
              requiredMessages="Judul Publikasi tidak boleh kosong!"
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
              value={formikPublication.values.photo}
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
                minHeight: 500,
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

export default AddEditPublication;
