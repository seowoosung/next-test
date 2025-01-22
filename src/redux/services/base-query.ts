import {
  FetchArgs,
  FetchBaseQueryArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "lodash";

const CSRF_HEADER_NAME = "X-CSRFTOKEN";
const CSRF_COOKIE_NAME = "csrftoken";

const getCookie = (name: string): string | undefined =>
  document.cookie
    .split(";")
    .map((row) => row.trimStart())
    .find((row) => row.startsWith(name))
    ?.split("=")[1]
    .trim();

export const baseQuery = (
  queryArgs: Omit<FetchBaseQueryArgs, "prepareHeaders" | "credentials">,
): BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, unknown>,
  FetchBaseQueryMeta
> => {
  return fetchBaseQuery({
    ...queryArgs,
    prepareHeaders: (headers, { type }) => {
      if (type === "mutation") {
        const csrftoken = getCookie(CSRF_COOKIE_NAME);
        csrftoken && headers.set(CSRF_HEADER_NAME, csrftoken);
      }
      return headers;
    },
    credentials: "include",
  });
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: [
    "Me",
  ],
  baseQuery: baseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_HOST}` }),
  endpoints: () => ({}),
});

type IRequestFormData =
  | {
      error: any;
      data?: undefined;
    }
  | {
      data: any;
      error?: undefined;
    };
export const requestFormData = async (
  path: string,
  fields: any,
  method = "POST",
): Promise<IRequestFormData> => {
  const formData = new FormData();
  for (const name in fields) {
    if (get(fields, name) === undefined) continue;

    formData.append(name, get(fields, name));
  }

  const headers = new Headers();
  const csrftoken = getCookie(CSRF_COOKIE_NAME);
  csrftoken && headers.set(CSRF_HEADER_NAME, csrftoken);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${path}`, {
    method: method,
    body: formData,
    headers: headers,
    credentials: "include",
  });
  if (!response.ok) {
    return { error: response.json() as unknown };
  }

  return {
    data: await response.json(),
  };
};
