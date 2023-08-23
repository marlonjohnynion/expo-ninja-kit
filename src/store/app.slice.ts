import { createAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

const APP_SLICE_NAME = "app";

export type AppSlice = {
  version: string;
};

const initialState: AppSlice = {
  version: "1.0.0",
};

export const appSlice = createSlice({
  name: APP_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state) => {
      state = initialState;
      return state;
    });
  },
});

export const logoutAction = createAction(appSlice.name + "/logout");
export const selectAppVersion = (state: RootState) => state.app.version;
