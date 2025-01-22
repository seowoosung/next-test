import { IMenu } from "@/components/layout/nav/menu-items";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rootMenu: undefined,
} as ISecondMenu;
interface ISecondMenu {
  rootMenu: IMenu | undefined;
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openSecondMenu(state, action: PayloadAction<ISecondMenu>) {
      state.rootMenu = action.payload.rootMenu;
    },
    clearSecondMenu(state) {
      state.rootMenu = undefined;
    },
  },
});

export const { openSecondMenu, clearSecondMenu } = navSlice.actions;
