import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";

let mockMessage = "Initial Data";

const mockBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, unknown>,
  FetchBaseQueryMeta
> = async (args) => {
  if (typeof args === "string") return {};

  if (args.url === "/update-fail/") {
    mockMessage = "Updated Fail Data";
    return { error: { status: 400, data: "Fail" } };
  }
  if (args.url === "/get-data/") {
    return { data: { message: mockMessage } };
  }
  if (args.url === "/update-data/") {
    mockMessage = "Updated Data";
    return { data: { id: 1 } };
  }
  if (args.url === "/update-slow/") {
    mockMessage = "Updated Slow V1";
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 지연
    mockMessage = "Updated Slow V2";
    return { data: { id: 2 } };
  }

  return { error: { status: 404, data: "Not Found" } };
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Info"],
  baseQuery: mockBaseQuery, // Using mockBaseQuery
  endpoints: () => ({}),
});
