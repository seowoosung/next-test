import { baseApi } from "@/redux/services/base-query";
import { IData, IUpdateArgs } from "../types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<IData, void>({
      query: () => ({ url: "/get-data/" }),
      providesTags: ["Info"],
    }),
    updateData: builder.mutation<IData, IUpdateArgs>({
      query: (body) => ({
        url: "/update-data/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Info"],
    }),
    updateFail: builder.mutation<IData, IUpdateArgs>({
      query: (body) => ({
        url: "/update-fail/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Info"],
    }),
    updateSlow: builder.mutation<IData, IUpdateArgs>({
      query: (body) => ({
        url: "/update-slow/",
        method: "POST",
        body,
      }),
      invalidatesTags: (result) => {
        return ["Info"];
      },
    }),
  }),
});

export const {
  useGetDataQuery,
  useUpdateDataMutation,
  useUpdateFailMutation,
  useUpdateSlowMutation,
} = usersApi;
