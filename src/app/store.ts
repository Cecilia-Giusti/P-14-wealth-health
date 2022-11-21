import { configureStore } from "@reduxjs/toolkit";
import errorFormReducer from "../feature/errorFormSlice";
import usersReducer from "../feature/usersSlice";

export const store = configureStore({
  reducer: {
    errorForm: errorFormReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
