/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

/* UI - COMPONENTS */
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

import useAppNav from "@/hooks/use-app-nav";
import useResponsive from "@/hooks/use-check-mobile-screen";
import { ApiDeleteServices, ApiGetAllServices } from "@/hooks/use-fetch";

import type { MainServices } from "@/types/admin/main-services";
import InputUpload from "@/components/ui/Form/Input/InputUpload";
import Image from "next/image";
import DeleteIcon from "@/components/ui/Icons/delete-icon";
import { ButtonIcon, Confirm, InputSearch } from "@/components/ui";
import { Services, ServicesType } from "@/types/admin/services";
import useDebounce from "@/hooks/use-debounce";
import { PaginationType } from "@/components/ui/Pagination/types";
import { TAppState } from "@/types/global";
import { TTableType } from "@/components/ui/Table";
import getIndexTable from "@/libs/get-index-table";
import { ColumnDef } from "@tanstack/react-table";
import OpenInNewIcon from "@/components/ui/Icons/open-in-new-icon";
import Link from "next/link";
import EditIcon from "@/components/ui/Icons/edit-icon";
import AddCircleIcon from "@/components/ui/Icons/add-circle-icon";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import ModalImage from "@/components/ui/Modal/ModalImage";

type HandleChangeValueType = string | number | null | undefined | any;
type HandleChangeNameType = string;
type HandleChangeType = {
  value: HandleChangeValueType;
  name: HandleChangeNameType;
};

type TDataState = TAppState<ServicesType>;
type TDataTable = TTableType<TDataState>;

function AllServices({ main_services_id = "" }) {
  const { slug, NextRouter } = useAppNav();
  const isMobile = useResponsive();

  const type = slug[0];
  const id = slug[1];

  /* REACT STATE */
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });
  const [deletePopup, setDeletePopup] = React.useState<{
    open: boolean;
    selectedId: null | number;
  }>({
    open: false,
    selectedId: null,
  });
  const [imagePopup, setImagePopup] = React.useState<{
    open: boolean;
    image: string | File | any[];
  }>({
    open: false,
    image: "",
  });

  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  // [GET] All MainServices   ===> command for a while
  const getServicesByMainServices = ApiGetAllServices({
    id: main_services_id,
    params: {
      page: 1,
      pagesize: 100,
      search: searchData.current,
      categories: "All",
    },
    onSuccess(res) {
      const { data } = res;
      // const newMeta = {
      //   ...metaState,
      //   totalData: meta.totalData,
      //   totalPage: meta.totalPage,
      // };
      const newData = getIndexTable(data, metaState);

      setDataState(newData);
      // setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  // [DELETE] MainServices
  const deleteServices = ApiDeleteServices({
    onSuccess() {
      setDeletePopup({
        open: false,
        selectedId: null,
      });
      alert("Berhasil menghapus Data Services");
    },
    onError(err) {
      setDeletePopup({
        open: false,
        selectedId: null,
      });
      alert("Telah terjadi kesalahan saat Hapus Data.");
      console.error(err);
    },
  });

  /* COMPONENTS FUNCTION */
  const columns = React.useMemo<ColumnDef<TDataTable>[]>(
    () => [
      {
        header: "#",
        accessorKey: "id",
      },
      {
        header: "Nama",
        accessorKey: "name",
        cell: ({ row }) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 200,
              }}
            >
              {row?.original?.name}
            </div>
          );
        },
      },
      {
        header: "Photo",
        accessorKey: "image",
        cell: ({ row }) => {
          return (
            <div
              className="cursor-pointer"
              onClick={() => {
                setImagePopup({ open: true, image: row?.original?.image });
              }}
            >
              <OpenInNewIcon />
            </div>
          );
        },
      },
      {
        header: "Deskripsi",
        accessorKey: "description",
        cell: ({ row }) => {
          // Function to create a React component from the HTML string
          const createMarkup = (htmlString: any) => ({ __html: htmlString });

          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: 500,
                height: 200,
              }}
              dangerouslySetInnerHTML={createMarkup(row?.original?.description)}
            />
          );
        },
      },
      {
        header: "",
        accessorKey: "action",
        cell: ({ row }) => {
          const { id }: TDataTable = row.original;
          return (
            <div className="flex flex-row items-center space-x-4 text-right">
              <Link href={`/admin/main-services/services-edit/${id}`}>
                <ButtonIcon>
                  <EditIcon color="blue" />
                </ButtonIcon>
              </Link>
              <ButtonIcon
                onClick={() =>
                  setDeletePopup({
                    open: !deletePopup.open,
                    selectedId: id,
                  })
                }
              >
                <DeleteIcon color="red" />
              </ButtonIcon>
            </div>
          );
        },
      },
    ],
    [deletePopup]
  );

  React.useEffect(() => {
    if (id) getServicesByMainServices.refetch();
  }, [id, type]);

  const searchDataDebounce = useDebounce(searchData.field, 100);

  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
  }, [searchDataDebounce]);

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
              title: "Kelola Services",
              active: true,
            },
          ]}
          className="ml-4"
        />
      </div>
      <div className="flex h-full flex-col gap-y-8 md:ml-4 md:mr-0">
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
          <div className="flex justify-end">
            <Link href="/admin/main-services/services-add/">
              <Button
                type="button"
                iconLeft={<AddCircleIcon color="white" />}
                rounded
                fit
                // disabled={dataState?.length === 2}
              >
                Tambah Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full" style={{ overflow: "scroll" }}>
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

        <Confirm
          open={deletePopup.open}
          onOk={() => deleteServices.mutate(deletePopup.selectedId!)}
          onCancel={() => setDeletePopup({ open: false, selectedId: null })}
        />
        <ModalImage
          open={imagePopup?.open}
          onCancel={() => setImagePopup({ open: false, image: "" })}
          data={imagePopup?.image}
        />
      </div>
    </React.Fragment>
  );
}

export default AllServices;
