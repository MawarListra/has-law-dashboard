import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";
import type { MemberType } from "./member";
import { PaketType } from "../admin/paket";

export interface Pembayaran {
  is_accepted: boolean;
  reason: string;
  member?: MemberType;
  identity: string;
  approval_photo: any;
  identity_number: any;
  payment_method: any;
  package?: PaketType;
}

export interface PembayaranType extends Pembayaran {
  id: number;
}

/* RESPONSES TYPE */
export interface PembayaranGetAllResponse extends ResponseType {
  data: PembayaranType[];
  meta: PaginationMetaType;
}

export interface PembayaranGetOneResponse extends ResponseType {
  data: PembayaranType;
}

export interface PembayaranPostResponse extends ResponseType {
  guest: PembayaranType;
}
