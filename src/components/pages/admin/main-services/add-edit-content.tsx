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
  ApiGetOneMainServices,
  ApiPostMainServices,
  ApiPutMainServices,
} from "@/hooks/use-fetch";

import type { MainServices } from "@/types/admin/main-services";
import InputUpload from "@/components/ui/Form/Input/InputUpload";
import Image from "next/image";
import DeleteIcon from "@/components/ui/Icons/delete-icon";
import { ButtonIcon } from "@/components/ui";

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

function AddEditMainServices() {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  // const secretKey = "supersecretkey";
  // const CryptoJS = require("crypto-js");

  const type = slug[0];
  const id = slug[1];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const formikMainServices = useFormik<MainServices>({
    initialValues: {
      name: "",
      photo: [],
      image: [
        {
          id: 0,
          image: "",
          index: null,
          rowstatus: false,
          main_services_id: 0,
          createdAt: "",
          updatedAt: "",
        },
      ],
      deleted: [],
    },
    onSubmit: async (values) => {
      if (/\d/.test(values.name)) {
        alert("Nama MainServices Hanya boleh huruf");
        return;
      }

      await addEditMainServices(values);
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
    formikMainServices.setFieldValue(name, tempValue);
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
    let arr = formikMainServices.values.photo;
    arr.push(file);
    console.log("cek arr", arr);
    handleChange(arr, "photo");
  };

  /* FETCH DATA */

  // [GET] One MainServices
  const getOneMainServices = ApiGetOneMainServices({
    id,
    onSuccess(res) {
      const { data } = res;
      formikMainServices.setValues({
        ...formikMainServices.values,
        name: data.name,
        photo: data?.image,
        image: data?.image,
      });

      const editor = document.getElementById("editor") as HTMLDivElement;

      // Load text from formikMainServices.values.description
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
    if (type === "edit") getOneMainServices.refetch();
  }, [id, type]);

  // [POST] MainServices
  const createMainServices = ApiPostMainServices({
    onSuccess() {
      alert("Berhasil menambah Data");
      NextRouter.replace("/admin/main-services");
      formikMainServices.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikMainServices.setSubmitting(false);
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

  // [PUT] MainServices
  const updateMainServices = ApiPutMainServices({
    onSuccess() {
      alert("Berhasil mengubah Data Publikasi");
      NextRouter.replace("/admin/main-services");
      formikMainServices.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikMainServices.setSubmitting(false);
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
  const addEditMainServices = async (payload: MainServices) => {
    formikMainServices.setSubmitting(true);
    setIsSubmitting(true);
    const datas = new FormData();
    formikMainServices.values.photo.forEach((v: any, i: number) => {
      datas.append(`photo`, v, `image${i + 1}.png`);
    });
    Object.entries(payload).forEach(([el, value]) => {
      if (value != null) {
        if (type === "add") {
          if (el !== "image" && el !== "deleted" && el !== "photo") {
            datas.set(el, value);
          }
        }
        if (type === "edit") {
          if (el !== "image" && el !== "photo") {
            datas.set(el, value);
          }
        }
      }
    });

    // for (const pair of datas.entries()) {
    //   console.log("cek datas", pair[0] + ": " + pair[1]);
    // }

    if (type === "add") {
      createMainServices.mutate(datas);
    } else if (type === "edit") {
      updateMainServices.mutate({ id, payload: datas });
    }
  };

  useEffect(() => {
    console.log("cek formikMainServices", formikMainServices?.values);
  }, [formikMainServices]);

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        <Breadcrumb
          item={[
            {
              title: "Kelola Kategori Main Services",
              linkTo: "/admin/main-services",
            },
            {
              title:
                type === "add" ? "Tambah Main Services" : "Edit Main Services",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>

      <div className="w-full md:mx-4" style={{ overflow: "scroll" }}>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={formikMainServices.handleSubmit}
        >
          <div>
            <Label htmlFor="nama">
              Judul Publikasi&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputField
              type="text"
              name="name"
              placeholder="Nama Main Services"
              onChange={formikMainServices.handleChange}
              value={formikMainServices.values.name}
              requiredMessages="Nama Main Services tidak boleh kosong!"
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
              value={tempImg}
              accept="image/*"
              onChange={(e) => handleChangeImage(e)}
              required
            />
            {formikMainServices?.values?.photo?.length > 0 &&
              formikMainServices?.values?.photo.map((el, i) => {
                console.log(
                  "cek validate",
                  typeof el === "object" && "image" in el
                );
                return (
                  <div className="my-2 flex flex-row gap-4">
                    <Image
                      className="img-fluid flex"
                      src={
                        typeof el === "object" && "image" in el
                          ? `${process.env.NEXT_PUBLIC_API}/${el?.image}`
                          : el instanceof Blob
                          ? URL.createObjectURL(el)
                          : `${process.env.NEXT_PUBLIC_API}/${el}`
                      }
                      alt="Test"
                      width={200}
                      height={150}
                    />
                    <ButtonIcon
                      onClick={() => {
                        let temp: any[] = [];
                        formikMainServices.values.photo.forEach(
                          (v: any, idx: number) => {
                            if (idx !== i) {
                              temp.push(v);
                            }
                          }
                        );
                        console.log("cek temp", temp);
                        formikMainServices.setFieldValue("photo", temp);
                        if (typeof el === "object" && "id" in el) {
                          formikMainServices.values.deleted.push(el?.id);
                        }
                      }}
                    >
                      <DeleteIcon color="red" />
                    </ButtonIcon>
                  </div>
                );
              })}
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

export default AddEditMainServices;
