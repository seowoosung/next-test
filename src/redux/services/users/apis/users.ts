import { baseApi } from "@/redux/services/base-query";
import {
  ILoginArgs,
  ISignupArgs,
  IUser
} from "../types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<IUser, void>({
      query: () => ({ url: "/users/me/" }),
      providesTags: ["Me"],
    }),
    currentMe: builder.query<IUser, void>({
      query: () => ({ url: "/users/me/" }),
      keepUnusedDataFor: 0,
    }),
    signup: builder.mutation<IUser, ISignupArgs>({
      query: (body) => ({
        url: "/users/signup/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Me"],
    }),
    login: builder.mutation<IUser, ILoginArgs>({
      query: (body) => ({
        url: "/users/login/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Me"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout/",
        method: "POST",
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useMeQuery,
  useCurrentMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
} = usersApi;
