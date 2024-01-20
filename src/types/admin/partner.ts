import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";

export interface Partner {
  name: string;
  photo: string | File;
  categories: string;
  description: string;
  image: string | File;
  categories_id: number;
  [key: string]: any;
}

export interface PartnerCategories {
  name: string;
}

export interface PartnerType extends Partner {
  id: number;
}
export interface PartnerCategoriesType extends PartnerCategories {
  id: number;
}

/* RESPONSES TYPE */
export interface PartnerGetAllResponse extends ResponseType {
  data: PartnerType[];
  // meta: PaginationMetaType;
}

export interface PartnerGetAllCategoriesResponse extends ResponseType {
  data: PartnerCategoriesType[];
  // meta: PaginationMetaType;
}

export interface PartnerGetOneResponse extends ResponseType {
  data: PartnerType;
}

export interface PartnerPostResponse extends ResponseType {
  guest: PartnerType;
}
