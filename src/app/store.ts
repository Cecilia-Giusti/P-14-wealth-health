import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import errorFormReducer from "../feature/errorFormSlice";
import usersReducer from "../feature/usersSlice";
import reponsiveReducer from "../feature/responsiveSlice";

const rootReducer = combineReducers({
  errorForm: errorFormReducer,
  users: usersReducer,
  reponsive: reponsiveReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: false,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
