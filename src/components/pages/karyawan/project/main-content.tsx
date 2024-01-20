/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { InputSearch, Modal, Pagination, Table, Tag } from "@/components/ui";
import OpenInNewIcon from "@/components/ui/Icons/open-in-new-icon";

import useDebounce from "@/hooks/use-debounce";
import useResponsive from "@/hooks/use-check-mobile-screen";
import {
  ApiGetAllListProject,
  ApiGetDetailListExpensesProject,
  ApiGetDetailListProject,
} from "@/hooks/use-fetch";

import getIndexTable from "@/libs/get-index-table";
import { formatToCurrency } from "@/libs/format-to-currency";
import { convertDateToString } from "@/libs/date-conversion";

import type { ColumnDef } from "@tanstack/react-table";
import type { PaginationType } from "@/components/ui/Pagination/types";
import type { TAppState } from "@/types/global";
import type { TTableType } from "@/components/ui/Table";
import type {
  ListProjectDetailExpenses,
  ListProjectDetailType,
  ListProjectType,
} from "@/types/global/list-project";

type TDataState = TAppState<ListProjectType>;
type TDataTable = TTableType<TDataState>;
type TDataDetailState = TAppState<ListProjectDetailExpenses>;
type TDataDetailTable = TTableType<TDataDetailState>;
type ModalState = {
  title: string;
  open: boolean;
  selectedId: null | number;
};

function MainContentProjectKaryawan() {
  const isMobile = useResponsive();

  /* REACT STATE */
  const [searchData, setSearchData] = React.useState<{
    field: string | null;
    current: string | null;
  }>({
    field: "",
    current: "",
  });
  const [modalItem, setModalItem] = React.useState<ModalState>({
    open: false,
    title: "",
    selectedId: null,
  });

  const [dataState, setDataState] = React.useState<TDataState[]>([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 7,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  // [GET] All List Project
  ApiGetAllListProject({
    params: {
      page: metaState.page,
      pagesize: metaState.size,
      searchkey: "name",
      search: searchData.current,
    },
    onSuccess(res) {
      const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: meta.totalData,
        totalPage: meta.totalPage,
      };
      const newData = getIndexTable(data, newMeta);

      setDataState(newData);
      setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  /* COMPONENT FUNCTION */
  const columns = React.useMemo<ColumnDef<TDataTable>[]>(
    () => [
      {
        header: "#",
        accessorKey: "index",
      },
      {
        header: "Nama Project",
        accessorKey: "nama_project",
        cell: ({ row }) => {
          const { id, nama_project }: TDataTable = row.original;

          return (
            <div className="flex items-center">
              <span className="flex-grow">{nama_project}</span>
              <span
                className="cursor-pointer"
                onClick={() =>
                  setModalItem({
                    open: !modalItem.open,
                    selectedId: id,
                    title: nama_project,
                  })
                }
              >
                <OpenInNewIcon color="text-ui-gray-blue-80" />
              </span>
            </div>
          );
        },
      },
      {
        header: "Total Expenses",
        accessorKey: "total_expanses",
        cell: ({ row }) => {
          const { total_expanses }: TDataTable = row.original;
          const render = formatToCurrency(total_expanses ?? 0, true);

          return <span>{render}</span>;
        },
      },
      {
        header: "Jumlah Expenses",
        accessorKey: "jumlah_expanses",
      },
      {
        header: "Tanggal Terakhir",
        accessorKey: "tanggal_terakhir",
        cell: ({ row }) => {
          const { tanggal_terakhir }: TDataTable = row.original;

          return <span>{convertDateToString(tanggal_terakhir) ?? "-"}</span>;
        },
      },
      {
        header: "",
        accessorKey: "status",
        meta: {
          bodyClassName: "px-4",
        },
        cell: ({ row }) => {
          const { status }: TDataTable = row.original;

          const statusColor =
            status === "AMAN"
              ? "blue"
              : status === "TIDAK AMAN"
              ? "red"
              : "light";

          return (
            <Tag color={statusColor} fill>
              {status}
            </Tag>
          );
        },
      },
    ],
    [modalItem.open]
  );

  const searchDataDebounce = useDebounce(searchData.field, 1000);
  React.useEffect(() => {
    setSearchData({ ...searchData, current: searchDataDebounce });
    setMetaState({
      ...metaState,
      page: 1,
    });
  }, [searchDataDebounce]);

  return (
    <div className="flex flex-col gap-y-8 md:ml-4 md:mr-0">
      <InputSearch
        name="search"
        value={searchData.field}
        onChange={(e) =>
          setSearchData({ ...searchData, field: e.target.value })
        }
        fit={!isMobile}
        rounded
      />

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

      {/* MODAL: LIST PROJECT */}
      <ModalDetailProject
        modalState={modalItem}
        onClose={() =>
          setModalItem({ open: false, selectedId: null, title: "" })
        }
      />
    </div>
  );
}

const ModalDetailProject = ({
  modalState,
  onClose,
}: {
  modalState: ModalState;
  onClose: () => any;
}) => {
  /* REACT STATE */
  const [detailState, setDetailState] =
    React.useState<ListProjectDetailType | null>(null);
  const [dataDetailState, setDataDetailState] = React.useState<
    TDataDetailState[]
  >([]);
  const [metaState, setMetaState] = React.useState<PaginationType>({
    page: 1,
    size: 5,
    totalData: 0,
    totalPage: 0,
  });

  /* FETCH DATA */
  ApiGetDetailListProject({
    id: modalState.selectedId!,
    onSuccess(res) {
      const { data } = res;

      setDetailState(data[0]);
    },
    onError(err) {
      console.error(err);
    },
  });

  ApiGetDetailListExpensesProject({
    id: modalState.selectedId!,
    params: {
      page: metaState.page,
      pagesize: metaState.size,
    },
    onSuccess(res) {
      const { data, meta } = res;
      const newMeta = {
        ...metaState,
        totalData: meta.totalData,
        totalPage: meta.totalPage,
      };
      const newData = getIndexTable(data, newMeta);

      setDataDetailState(newData);
      setMetaState(newMeta);
    },
    onError(err) {
      console.error(err);
    },
  });

  /* COMPONENT FUNCTION */
  const columns = React.useMemo<ColumnDef<TDataDetailTable>[]>(
    () => [
      {
        header: "#",
        accessorKey: "index",
      },
      {
        header: "NO PP",
        accessorKey: "nopp",
      },
      {
        header: "NAMA",
        accessorKey: "expanses_name",
      },
      {
        header: "HARGA",
        accessorKey: "nominal",
        cell: ({ row }) => {
          const { nominal }: TDataDetailTable = row.original;
          const render = formatToCurrency(nominal ?? 0, true);

          return <span>{render}</span>;
        },
      },
      {
        header: "TANGGAL",
        accessorKey: "input_date",
        cell: ({ row }) => {
          const { input_date }: TDataDetailTable = row.original;

          return <span>{convertDateToString(input_date) ?? "-"}</span>;
        },
      },
      {
        header: "",
        accessorKey: "status",
        meta: {
          bodyClassName: "px-4",
        },
        cell: ({ row }) => {
          const { status }: TDataDetailTable = row.original;

          const statusColor =
            status === "AMAN"
              ? "blue"
              : status === "TIDAK AMAN"
              ? "red"
              : "light";

          return (
            <Tag color={statusColor} fill>
              {status}
            </Tag>
          );
        },
      },
    ],
    []
  );

  /* RENDER */
  const Detail = ({
    title,
    data,
    border = true,
  }: {
    title: string;
    data: string;
    border?: boolean;
  }) => (
    <div className={`h-14 ${border && "border-r-4"}  border-ui-gray-blue-95`}>
      <div className="mx-5 flex flex-col gap-4">
        <span className="text-ui-gray-blue-70">{title}</span>
        <span className="text-ui-gray-blue-50">{data}</span>
      </div>
    </div>
  );

  return (
    <Modal
      Header={
        <React.Fragment>
          <h3 className="text-2xl text-[#292D32]">{modalState.title}</h3>
          <span className="ml-3 flex text-base font-normal">
            Total {metaState.totalData}{" "}
            {metaState.totalData > 1 ? "Expenses" : "Expense"}
          </span>
        </React.Fragment>
      }
      open={modalState.open}
      onClose={() => {
        setDetailState(null);
        onClose();
      }}
      maskClosable
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex w-full flex-row overflow-x-auto whitespace-nowrap pb-1">
          <Detail title="KODE" data={detailState?.code ?? ""} />
          <Detail
            title="TOTAL EXPENSES"
            data={formatToCurrency(detailState?.total_expanses ?? 0, true)}
          />
        </div>

        <div>
          <Table columns={columns} data={dataDetailState} />
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
    </Modal>
  );
};

export default MainContentProjectKaryawan;
