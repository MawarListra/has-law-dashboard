import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";
import { isInteger } from "formik";

export interface Member {
  name: string;
  phone: string;
  email: string;
  sex: string;
  born_date: any;
  package_id: string | number;
  // paymentMethod: string;
  identity: string | File;
  identity_number: string;
  approval_photo: string | File;
  payment_type_admin: number;
  role: string;
  identity_image: string;
  [key: string]: any;
  transactiondata?: {
    id: string | number;
  };
  member_until: "";
}

export interface MemberRenew {
  user_id: number;
  package_id: number;
  approval_photo: string | File;
  payment_type_admin: number;
  [key: string]: any;
  transactiondata?: {
    id: string | number;
  };
}

export interface MemberTransaction {
  id: number;
  member: {
    name: string;
    phone: string;
    email: string;
  };
  package: {
    id: number;
    name: string;
    price: number;
    category_id: number;
  };
  admin_fee: number;
  approval_photo: string | any;
  member_until: any;
  createdAt: any;
  payment_type_admin: number;
}

export interface MemberType extends Member {
  id: number;
}

/* RESPONSES TYPE */
export interface MemberGetAllResponse extends ResponseType {
  data: MemberType[];
  meta: PaginationMetaType;
}

export interface MemberGetOneResponse extends ResponseType {
  data: MemberType;
}

export interface GetDetailInvoiceResponse extends ResponseType {
  data: MemberTransaction;
}

export interface MemberPostResponse extends ResponseType {
  guest: MemberType;
}
export interface MemberRenewResponse extends ResponseType {
  guest: MemberRenew;
}
