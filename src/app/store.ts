import { configureStore } from "@reduxjs/toolkit";
import errorFormReducer from "../feature/errorFormSlice";
import usersReducer from "../feature/usersSlice";
import reponsiveReducer from "../feature/responsiveSlice";

export const store = configureStore({
  reducer: {
    errorForm: errorFormReducer,
    users: usersReducer,
    reponsive: reponsiveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
