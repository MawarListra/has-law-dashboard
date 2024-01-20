import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";

export interface MemberCheckIn {
  name: string;
  phone: string;
  email: string;
  sex: string;
  born_date: any;
  package_id: string | number;
  paymentMethod: string;
  identity: string | File;
  identity_number: string;
  approval_image: string | File;
  payment_type_admin: number;
  role: string;
  identity_image: string;
  [key: string]: any;
  transactiondata?: {
    id: string | number;
  };
  member_until: "";
}

export interface MemberCheckInType extends MemberCheckIn {
  id: number;
}

export interface MemberCheckInGetAllResponse extends ResponseType {
  data: MemberCheckInType[];
  meta: PaginationMetaType;
}

export interface MemberCheckInGetOneResponse extends ResponseType {
  data: MemberCheckInType;
}
export interface MemberCheckInPostResponse extends ResponseType {
  data: MemberCheckInType;
}
