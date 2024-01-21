import type { ResponseType } from "@/libs/api-fetch";
import type { PaginationMetaType } from "@/components/ui/Pagination/types";

export interface MainServices {
  name: string;
  photo:
    | string[]
    | File[]
    | [
        {
          id: number;
          image: string | File;
          index: any;
          rowstatus: boolean;
          main_services_id: number;
          createdAt: string;
          updatedAt: string;
        }
      ];
  [key: string]: any;
  image: [
    {
      id: number;
      image: string | File;
      index: any;
      rowstatus: boolean;
      main_services_id: number;
      createdAt: string;
      updatedAt: string;
    }
  ];
  deleted: number[];
}

export interface MainServicesType extends MainServices {
  id: number;
}

/* RESPONSES TYPE */
export interface MainServicesGetAllResponse extends ResponseType {
  data: MainServicesType[];
  // meta: PaginationMetaType;
}

export interface MainServicesGetOneResponse extends ResponseType {
  data: MainServicesType;
}

export interface MainServicesPostResponse extends ResponseType {
  guest: MainServicesType;
}
