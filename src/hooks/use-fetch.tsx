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
