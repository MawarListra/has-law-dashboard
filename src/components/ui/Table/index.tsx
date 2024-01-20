/**
 * Tutorial by "Fernando González Tostado"
 * https://dev.to/esponges/create-a-reusable-react-table-component-with-typescript-56d4
 */

import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import SortIcon from "../Icons/sort-icon";
import ArrowDropUpIcon from "../Icons/arrow-drop-up-icon";
import ArrowDropDownIcon from "../Icons/arrow-drop-down-icon";

import type { ColumnDef } from "@tanstack/react-table";

export type TTableType<T> = T & {
  action?: any;
};
export type TSortType = {
  sortKey: string | null;
  sortType: "asc" | "desc" | null;
};

interface TableProps<T extends object> {
  columns: ColumnDef<T>[];
  data: T[];
  sortState?: TSortType;
  onSort?: (key: string, type: "asc" | "desc") => any;
}

const Table = <T extends object>({
  columns,
  data,
  sortState,
  onSort,
}: TableProps<T>) => {
  const [prevSortKey, setPrevSortKey] = React.useState("");

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  const tableHeader = tableInstance.getHeaderGroups();
  const tableBody = tableInstance.getRowModel().rows;

  return (
    <div
      className="whitespace-nowrap rounded-2xl border-2 border-solid border-[#EDEFF2] text-left text-ui-gray-blue-80"
      style={{ display: "flex", width: "max-content" }}
    >
      <table className="min-w-full table-auto">
        <thead className="border-b-2 text-ui-gray-blue-70">
          {tableHeader.map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnId = header.column.id;
                  const sortable = header.column.columnDef.meta?.sorting;

                  const sortKey = sortState?.sortKey;
                  const sortType = sortState?.sortType;

                  return (
                    <th key={header.id} scope="col" className="p-4">
                      <div className="flex items-center">
                        <span className="flex-grow">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </span>
                        {sortable && (
                          <span
                            title="Sorting"
                            className="cursor-pointer"
                            onClick={() => {
                              if (
                                sortType === null ||
                                prevSortKey !== columnId
                              ) {
                                onSort?.(columnId, "asc");
                                setPrevSortKey(columnId);
                              } else {
                                if (sortType === "asc") {
                                  onSort?.(columnId, "desc");
                                } else if (sortType === "desc") {
                                  onSort?.(columnId, "asc");
                                }
                              }
                            }}
                          >
                            {sortKey === columnId ? (
                              sortType === "asc" ? (
                                <ArrowDropUpIcon />
                              ) : (
                                <ArrowDropDownIcon />
                              )
                            ) : (
                              <SortIcon />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="text-ui-gray-blue-60">
          {tableBody.length > 0 ? (
            tableBody.map((row) => {
              return (
                <tr key={row.id} className="border-b-2">
                  {row.getVisibleCells().map((cell) => {
                    const className = cell.column.columnDef.meta?.bodyClassName;

                    return (
                      <td key={cell.id} className={`${className ?? "p-4"}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr className="border-b-2 text-center">
              <td colSpan={columns.length} className="p-4">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
