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
    setUsersData: (state, action: PayloadAction<Array<newEmployeeInt>>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<newEmployeeInt>) => {
      state.users = [...state.users, action.payload];
    },

    reset: () => initialState,
  },
});

export const { setUsersData, addUser, reset } = usersSlice.actions;
export default usersSlice.reducer;
