import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";

export interface Services {
  name: string;
  photo: string | File;
  description: string;
  image: string | File;
  main_services_id: number | string;
  [key: string]: any;
}

export interface ServicesCategories {
  name: string;
}

export interface ServicesType extends Services {
  id: number;
}
export interface ServicesCategoriesType extends ServicesCategories {
  id: number;
}

/* RESPONSES TYPE */
export interface ServicesGetAllResponse extends ResponseType {
  data: ServicesType[];
  // meta: PaginationMetaType;
}

export interface ServicesGetAllCategoriesResponse extends ResponseType {
  data: ServicesCategoriesType[];
  // meta: PaginationMetaType;
}

export interface ServicesGetOneResponse extends ResponseType {
  data: ServicesType;
}

export interface ServicesPostResponse extends ResponseType {
  guest: ServicesType;
}
