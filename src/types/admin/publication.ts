import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";

export interface Publication {
  title: string;
  photo: string | File;
  description: string;
  [key: string]: any;
  image: string | File;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface PublicationType extends Publication {
  id: number;
}

/* RESPONSES TYPE */
export interface PublicationGetAllResponse extends ResponseType {
  data: PublicationType[];
  // meta: PaginationMetaType;
}

export interface PublicationGetOneResponse extends ResponseType {
  data: PublicationType;
}

export interface PublicationPostResponse extends ResponseType {
  guest: PublicationType;
}
