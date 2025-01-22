import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { baseApi } from "./services/base-query";
import { counterSlice, navSlice } from "./slices";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [navSlice.name]: navSlice.reducer,
    [counterSlice.name]: counterSlice.reducer,
  },
  middleware: [thunk, baseApi.middleware],
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;

export type TRootState = ReturnType<typeof store.getState>;
