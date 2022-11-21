import { configureStore } from "@reduxjs/toolkit";
import errorFormReducer from "../feature/errorFormSlice";

export const store = configureStore({
  reducer: {
    errorForm: errorFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
