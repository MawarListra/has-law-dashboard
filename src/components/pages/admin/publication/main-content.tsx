/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Link from "next/link";

/* UI - COMPONENTS */
import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/Button/ButtonIcon";
import Confirm from "@/components/ui/Modal/Confirm";
import InputSearch from "@/components/ui/Form/Input/InputField/Search";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";

/* UI - ICONS */
import AddCircleIcon from "@/components/ui/Icons/add-circle-icon";
import EditIcon from "@/components/ui/Icons/edit-icon";
import DeleteIcon from "@/components/ui/Icons/delete-icon";

import useResponsive from "@/hooks/use-check-mobile-screen";
import useDebounce from "@/hooks/use-debounce";
import { ApiGetAllPublication, ApiDeletePublication } from "@/hooks/use-fetch";

import getIndexTable from "@/libs/get-index-table";

import type { ColumnDef } from "@tanstack/react-table";
import type { TTableType } from "@/components/ui/Table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import type { PublicationType } from "@/types/admin/publication";
import moment from "moment";
import OpenInNewIcon from "@/components/ui/Icons/open-in-new-icon";
import ModalImage from "@/components/ui/Modal/ModalImage";

type TDataState = TAppState<PublicationType>;
type TDataTable = TTableType<TDataState>;

function MainContentPublication() {
  const isMobile = useResponsive();

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
    image: string | File;
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
  // [GET] All Publication   ===> command for a while
  ApiGetAllPublication({
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

  // [DELETE] Publication
  const deletePublication = ApiDeletePublication({
    onSuccess() {
      setDeletePopup({
        open: false,
        selectedId: null,
      });
      alert("Berhasil menghapus Data Publication");
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
        header: "Judul",
        accessorKey: "title",
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
              {row?.original?.title}
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
        header: "Tanggal Publikasi",
        accessorKey: "createdAt",
        cell: ({ row }) => {
          return moment(row?.original?.createdAt).format("DD MMMM YYYY");
        },
      },
      {
        header: "Deskripsi",
        accessorKey: "description",
        cell: ({ row }) => {
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
              <Link href={`/admin/publication/edit/${id}`}>
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
        <div className="flex justify-end">
          <Link href="/admin/publication/add">
            <Button
              type="button"
              iconLeft={<AddCircleIcon color="white" />}
              rounded
              fit
            >
              Tambah Publikasi
            </Button>
          </Link>
        </div>
      </div>

      <div>
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
        onOk={() => deletePublication.mutate(deletePopup.selectedId!)}
        onCancel={() => setDeletePopup({ open: false, selectedId: null })}
      />
      <ModalImage
        open={imagePopup?.open}
        onCancel={() => setImagePopup({ open: false, image: "" })}
        data={imagePopup?.image}
      />
    </div>
  );
}

export default MainContentPublication;
