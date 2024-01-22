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
  ApiGetOneServices,
  ApiPostServices,
  ApiPutServices,
} from "@/hooks/use-fetch";

import InputUpload from "@/components/ui/Form/Input/InputUpload";
import { Services, ServicesType } from "@/types/admin/services";
import useDebounce from "@/hooks/use-debounce";
import { PaginationType } from "@/components/ui/Pagination/types";
import { TAppState } from "@/types/global";
import { TTableType } from "@/components/ui/Table";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  ContentBlock,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";
const dynamicImportEditor = () => import("react-draft-wysiwyg");

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

type TDataState = TAppState<ServicesType>;
type TDataTable = TTableType<TDataState>;

function AddEditServices({ services_id = "", main_services_id = "" }) {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();
  // const secretKey = "supersecretkey";
  // const CryptoJS = require("crypto-js");

  const type = slug[0];
  const id = slug[1];

  const [Editor, setEditor] = useState<any>(null);

  useEffect(() => {
    dynamicImportEditor().then((module) => setEditor(module.Editor));
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tempImg, setTempImg] = useState("");
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

  const formikServices = useFormik<Services>({
    initialValues: {
      name: "",
      photo: "",
      image: "",
      description: "",
      main_services_id: main_services_id,
    },
    onSubmit: async (values) => {
      if (/\d/.test(values.name)) {
        alert("Nama Services Hanya boleh huruf");
        return;
      }

      await addEditServices(values);
    },
  });

  const [editorState, setEditorState] = useState(() => {
    const htmlContent = formikServices?.values?.description || "";

    const contentBlocksArray: ContentBlock[] =
      convertFromHTML(htmlContent).contentBlocks;
    const contentState = ContentState.createFromBlockArray(contentBlocksArray);

    return EditorState.createWithContent(contentState);
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
    formikServices.setFieldValue(name, tempValue);
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

  // [GET] One Services
  const getOneServices = ApiGetOneServices({
    id: services_id,
    onSuccess(res) {
      const { data } = res;
      formikServices.setValues({
        ...formikServices.values,
        name: data.name,
        photo: data?.image,
        image: data?.image,
        description: data?.description,
        main_services_id: data?.main_services_id,
      });

      const htmlContent = data?.description || "";

      const contentBlocksArray: ContentBlock[] =
        convertFromHTML(htmlContent).contentBlocks;
      const contentState =
        ContentState.createFromBlockArray(contentBlocksArray);
      setEditorState(EditorState.createWithContent(contentState));
    },
    onError(err) {
      console.error(err);
    },
  });

  React.useEffect(() => {
    if (type === "services-edit") getOneServices.refetch();
  }, [id, type]);

  const searchDataDebounce = useDebounce(searchData.field, 100);

  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
  }, [searchDataDebounce]);

  // [POST] Services
  const createServices = ApiPostServices({
    onSuccess() {
      alert("Berhasil menambah Data");
      NextRouter.replace(
        `/admin/main-services/services-all/${main_services_id}`
      );
      formikServices.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikServices.setSubmitting(false);
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

  // [PUT] Services
  const updateServices = ApiPutServices({
    onSuccess() {
      alert("Berhasil mengubah Data Services");
      NextRouter.replace(
        `/admin/main-services/services-all/${main_services_id}`
      );
      formikServices.setSubmitting(false);
      setIsSubmitting(false);
    },
    onError(err) {
      formikServices.setSubmitting(false);
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
  const addEditServices = async (payload: Services) => {
    formikServices.setSubmitting(true);
    setIsSubmitting(true);
    const datas = new FormData();
    Object.entries(payload).forEach(([el, value]) => {
      if (value != null) {
        if (el !== "image") {
          datas.set(el, value);
        }
      }
    });

    // for (const pair of datas.entries()) {
    //   console.log("cek datas", pair[0] + ": " + pair[1]);
    // }

    if (type === "services-add") {
      createServices.mutate(datas);
    } else if (type === "services-edit") {
      updateServices.mutate({ id, payload: datas });
    }
  };

  useEffect(() => {
    console.log("cek formikServices", formikServices?.values);
  }, [formikServices]);

  /* RENDER */
  return (
    <React.Fragment>
      <div className="mx-0 mb-8 hidden h-12 w-full items-center border-b-2 border-solid border-ui-gray-blue-90 md:flex">
        <Breadcrumb
          item={[
            {
              title: "Kelola Main Services",
              linkTo: "/admin/main-services",
            },
            {
              title: "Kelola Services",
              linkTo: `/admin/main-services/services-all/${main_services_id}`,
            },
            {
              title:
                type === "services-add" ? "Tambah Services" : "Edit Services",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>

      <div className="md:mx-4 md:w-3/4">
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={formikServices.handleSubmit}
        >
          <div>
            <Label htmlFor="nama">
              Judul&nbsp;
              <sup className="font-black text-ui-red">*</sup>
            </Label>
            <InputField
              type="text"
              name="name"
              placeholder="Nama Services"
              onChange={formikServices.handleChange}
              value={formikServices.values.name}
              requiredMessages="Nama Services tidak boleh kosong!"
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
              value={formikServices?.values?.photo}
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

            {Editor && (
              <Editor
                editorState={editorState}
                onEditorStateChange={(newState: any) => {
                  setEditorState(newState);
                  console.log("cek newState", newState);

                  // Convert EditorState content to HTML
                  const contentState = newState.getCurrentContent();
                  const htmlContent = stateToHTML(contentState);

                  // Set the HTML content to formikPartner
                  formikServices.setFieldValue("description", htmlContent);
                }}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "history",
                  ],
                  inline: {
                    options: ["bold", "italic", "underline", "strikethrough"],
                  },
                  blockType: {
                    options: [
                      "Normal",
                      "H1",
                      "H2",
                      "H3",
                      "H4",
                      "H5",
                      "H6",
                      "Blockquote",
                    ],
                  },
                  list: {
                    options: ["unordered", "ordered"],
                  },
                }}
                wrapperStyle={{
                  backgroundColor: "white",
                  maxHeight: 300,
                  overflow: "scroll",
                }}
              />
            )}
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

export default AddEditServices;
