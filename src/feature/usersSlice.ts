import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newEmployeeInt } from "../types/models";

interface usersInt {
  users: Array<newEmployeeInt>;
}

const initialState: usersInt = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<newEmployeeInt>) => {
      state.users = [...state.users, action.payload];
    },

    reset: () => initialState,
  },
});

export const { addUser, reset } = usersSlice.actions;
export default usersSlice.reducer;
