import axios from "axios";
import { getSession } from "next-auth/react";

import type { CreateAxiosDefaults } from "axios";

export interface ResponseType {
  status: string;
  message: string;
  transactiondata?: {
    id: string | any;
    // other properties of transactiondata
  };
}

const apiUrl = process.env.NEXT_PUBLIC_API;
const ApiFetch = () => {
  const defaultOptions: CreateAxiosDefaults = {
    baseURL: apiUrl,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (req) => {
    const session = await getSession();

    if (session) {
      const token = session.user.apiToken;
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  });

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;

        if (status === 401 || status === 403) {
          //redirect logic here
        }
      }

      throw err;
    }
  );

  return instance;
};

export default ApiFetch();
