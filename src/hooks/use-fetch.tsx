import ApiFetch from "@/libs/api-fetch";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { AxiosError } from "axios";
import type { ResponseType } from "@/libs/api-fetch";

/* TYPE DEFINITION - ADMIN */
import type {
  PartnerGetAllCategoriesResponse,
  PartnerGetAllResponse,
  PartnerGetOneResponse,
  PartnerPostResponse,
} from "@/types/admin/partner";
import {
  PublicationGetAllResponse,
  PublicationGetOneResponse,
  PublicationPostResponse,
} from "@/types/admin/publication";
import {
  MainServicesGetAllResponse,
  MainServicesGetOneResponse,
  MainServicesPostResponse,
} from "@/types/admin/main-services";
import {
  ServicesGetAllResponse,
  ServicesGetOneResponse,
  ServicesPostResponse,
} from "@/types/admin/services";

interface Props<T> {
  enabled?: boolean;
  retry?: number;
  keepPreviousData?: boolean;
  refetchOnWindowFocus?: boolean;
  onSuccess?: (res: T) => any;
  onError?: (err: AxiosError<ResponseType>) => any;
}

/* FETCH API - ADMIN */
// Partner //
// [GET] All Partner
export const ApiGetAllPartnerCategories = ({
  params,
  onSuccess,
  onError,
}: Props<PartnerGetAllCategoriesResponse> & {
  params: Object | null;
}) => {
  return useQuery({
    queryKey: ["ApiGetAllPartnerCategories", params],
    queryFn: async () => {
      const { data } = await ApiFetch.get<PartnerGetAllCategoriesResponse>(
        `/v1/partner_categories/getall`,
        { params }
      );

      return data;
    },
    keepPreviousData: true,
    retry: 3,
    onSuccess,
    onError,
  });
};
// [GET] All Partner
export const ApiGetAllPartner = ({
  params,
  onSuccess,
  onError,
}: Props<PartnerGetAllResponse> & {
  params: Object | null;
}) => {
  return useQuery({
    queryKey: ["ApiGetAllPartner", params],
    queryFn: async () => {
      const { data } = await ApiFetch.get<PartnerGetAllResponse>(
        `/v1/partner/getall`,
        { params }
      );

      return data;
    },
    keepPreviousData: true,
    retry: 3,
    onSuccess,
    onError,
  });
};

// [GET] One Partner
export const ApiGetOnePartner = ({
  id,
  onSuccess,
  onError,
}: Props<PartnerGetOneResponse> & {
  id: number | string;
}) => {
  return useQuery({
    queryKey: ["ApiGetOnePartner", id],
    queryFn: async () => {
      const { data } = await ApiFetch.get<PartnerGetOneResponse>(
        `/v1/partner/getdetail/${id}`
      );

      return data;
    },
    enabled: false,
    onSuccess,
    onError,
  });
};

// [POST] Partner
export const ApiPostPartner = ({
  onSuccess,
  onError,
}: Props<PartnerPostResponse>) => {
  return useMutation({
    mutationFn: async (payload: Object) => {
      const { data } = await ApiFetch.post<PartnerPostResponse>(
        "/v1/partner/create",
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [PUT] Partner
export const ApiPutPartner = ({ onSuccess, onError }: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: number | string;
      payload: Object;
    }) => {
      const { data } = await ApiFetch.put<ResponseType>(
        `/v1/partner/update/${id}`,
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [DELETE] Partner
export const ApiDeletePartner = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async (id: number | string) => {
      const { data } = await ApiFetch.delete<ResponseType>(
        `/v1/partner/delete/${id}`
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// Publication //
// [GET] All Publication
export const ApiGetAllPublication = ({
  params,
  onSuccess,
  onError,
}: Props<PublicationGetAllResponse> & {
  params: Object | null;
}) => {
  return useQuery({
    queryKey: ["ApiGetAllPublication", params],
    queryFn: async () => {
      const { data } = await ApiFetch.get<PublicationGetAllResponse>(
        `/v1/publications/getall`,
        { params }
      );

      return data;
    },
    keepPreviousData: true,
    retry: 3,
    onSuccess,
    onError,
  });
};

// [GET] One Publication
export const ApiGetOnePublication = ({
  id,
  onSuccess,
  onError,
}: Props<PublicationGetOneResponse> & {
  id: number | string;
}) => {
  return useQuery({
    queryKey: ["ApiGetOnePublication", id],
    queryFn: async () => {
      const { data } = await ApiFetch.get<PublicationGetOneResponse>(
        `/v1/publications/getdetail/${id}`
      );

      return data;
    },
    enabled: false,
    onSuccess,
    onError,
  });
};

// [POST] Publication
export const ApiPostPublication = ({
  onSuccess,
  onError,
}: Props<PublicationPostResponse>) => {
  return useMutation({
    mutationFn: async (payload: Object) => {
      const { data } = await ApiFetch.post<PublicationPostResponse>(
        "/v1/publications/create",
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [PUT] Publication
export const ApiPutPublication = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: number | string;
      payload: Object;
    }) => {
      const { data } = await ApiFetch.put<ResponseType>(
        `/v1/publications/update/${id}`,
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [DELETE] Publication
export const ApiDeletePublication = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async (id: number | string) => {
      const { data } = await ApiFetch.delete<ResponseType>(
        `/v1/publications/delete/${id}`
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// MainServices //
// [GET] All MainServices
export const ApiGetAllMainServices = ({
  params,
  onSuccess,
  onError,
}: Props<MainServicesGetAllResponse> & {
  params: Object | null;
}) => {
  return useQuery({
    queryKey: ["ApiGetAllMainServices", params],
    queryFn: async () => {
      const { data } = await ApiFetch.get<MainServicesGetAllResponse>(
        `/v1/main_services/getall`,
        { params }
      );

      return data;
    },
    keepPreviousData: true,
    retry: 3,
    onSuccess,
    onError,
  });
};

// [GET] One MainServices
export const ApiGetOneMainServices = ({
  id,
  onSuccess,
  onError,
}: Props<MainServicesGetOneResponse> & {
  id: number | string;
}) => {
  return useQuery({
    queryKey: ["ApiGetOneMainServices", id],
    queryFn: async () => {
      const { data } = await ApiFetch.get<MainServicesGetOneResponse>(
        `/v1/main_services/getdetail/${id}`
      );

      return data;
    },
    enabled: false,
    onSuccess,
    onError,
  });
};

// [POST] MainServices
export const ApiPostMainServices = ({
  onSuccess,
  onError,
}: Props<MainServicesPostResponse>) => {
  return useMutation({
    mutationFn: async (payload: Object) => {
      const { data } = await ApiFetch.post<MainServicesPostResponse>(
        "/v1/main_services/create",
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [PUT] MainServices
export const ApiPutMainServices = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: number | string;
      payload: Object;
    }) => {
      const { data } = await ApiFetch.put<ResponseType>(
        `/v1/main_services/update/${id}`,
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [DELETE] MainServices
export const ApiDeleteMainServices = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async (id: number | string) => {
      const { data } = await ApiFetch.delete<ResponseType>(
        `/v1/main_services/delete/${id}`
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// Services //
// [GET] All Services
export const ApiGetAllServices = ({
  id,
  params,
  onSuccess,
  onError,
}: Props<ServicesGetAllResponse> & {
  id: number | string;
  params: Object | null;
}) => {
  return useQuery({
    queryKey: ["ApiGetAllServices", params],
    queryFn: async () => {
      const { data } = await ApiFetch.get<ServicesGetAllResponse>(
        `/v1/services/getall/${id}`,
        { params }
      );

      return data;
    },
    keepPreviousData: true,
    retry: 3,
    onSuccess,
    onError,
  });
};

// [GET] One Services
export const ApiGetOneServices = ({
  id,
  onSuccess,
  onError,
}: Props<ServicesGetOneResponse> & {
  id: number | string;
}) => {
  return useQuery({
    queryKey: ["ApiGetOneServices", id],
    queryFn: async () => {
      const { data } = await ApiFetch.get<ServicesGetOneResponse>(
        `/v1/services/getdetail/${id}`
      );

      return data;
    },
    enabled: false,
    onSuccess,
    onError,
  });
};

// [POST] Services
export const ApiPostServices = ({
  onSuccess,
  onError,
}: Props<ServicesPostResponse>) => {
  return useMutation({
    mutationFn: async (payload: Object) => {
      const { data } = await ApiFetch.post<ServicesPostResponse>(
        "/v1/services/create",
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [PUT] Services
export const ApiPutServices = ({ onSuccess, onError }: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: number | string;
      payload: Object;
    }) => {
      const { data } = await ApiFetch.put<ResponseType>(
        `/v1/services/update/${id}`,
        payload
      );

      return data;
    },
    onSuccess,
    onError,
  });
};

// [DELETE] Services
export const ApiDeleteServices = ({
  onSuccess,
  onError,
}: Props<ResponseType>) => {
  return useMutation({
    mutationFn: async (id: number | string) => {
      const { data } = await ApiFetch.delete<ResponseType>(
        `/v1/services/delete/${id}`
      );

      return data;
    },
    onSuccess,
    onError,
  });
};
