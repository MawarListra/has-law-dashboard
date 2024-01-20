import type { ResponseType } from "@/libs/api-fetch";

import type { PaginationMetaType } from "@/components/ui/Pagination/types";

interface ListProject {
  nama_project: string;
  total_expanses: number | null;
  jumlah_expanses: number | null;
  hpp: number | null;
  nilai_kontrak: number | null;
  grossprofit: number | null;
  total_profit: number | null;
  margin_profit: number | null;
  tanggal_terakhir: string;
  status: "AMAN" | "TIDAK AMAN" | "BELUM ADA";
}

export interface ListProjectType extends ListProject {
  id: number;
}

export interface ListProjectDetailType extends ListProject {
  code: string;
}

export interface ListProjectDetailExpenses {
  nopp: string;
  expanses_name: string;
  jenis: "kredit" | "debit" | string | null;
  nominal: number | null;
  input_date: string;
  status: "AMAN" | "TIDAK AMAN" | "BELUM ADA";
  limit_nominal: number | null;
}

/* RESPONSES TYPE */
export interface ListProjectGetAllResponse extends ResponseType {
  data: ListProjectType[];
  meta: PaginationMetaType;
}

export interface ListProjectGetDetailResponse extends ResponseType {
  data: ListProjectDetailType[];
}

export interface ListProjectGetDetailExpensesResponse extends ResponseType {
  data: ListProjectDetailExpenses[];
  meta: PaginationMetaType;
}
