import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newEmployeeInt } from "../types/models";

interface usersInt {
  users: Array<newEmployeeInt>;
  errorGetUser: boolean;
}

const initialState: usersInt = {
  users: [],
  errorGetUser: false,
};

/**
 * Create Slice for Redux - Users
 * @function
 */
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData: (state, action: PayloadAction<Array<newEmployeeInt>>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<newEmployeeInt>) => {
      if (state.users.length > 0) {
        state.users = [...state.users, action.payload];
      } else {
        state.users = [action.payload];
      }
    },
    setErrorGetUser: (state, action: PayloadAction<boolean>) => {
      state.errorGetUser = action.payload;
    },
  },
});

export const { setUsersData, addUser, setErrorGetUser } = usersSlice.actions;
export default usersSlice.reducer;
