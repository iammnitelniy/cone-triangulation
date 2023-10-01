import { configureStore } from "@reduxjs/toolkit";
import {coneParamsSlice} from "../features/Cone/model/coneParams.slice";


export const store = configureStore({
  reducer: {
    coneParams: coneParamsSlice,

  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
