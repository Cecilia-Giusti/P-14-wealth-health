import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataErrorInt } from "../types/models";

interface errorFormInt {
  errorForm: boolean;
  dataNoError: dataErrorInt;
  errorMessage: boolean;
}

const initialState: errorFormInt = {
  errorForm: false,
  dataNoError: {
    firstName: false,
    lastName: false,
    birthday: false,
    startDay: false,
    department: false,
    street: false,
    city: false,
    state: false,
    zipCode: false,
  },
  errorMessage: false,
};

/**
 * Create Slice for Redux - error Form
 * @function
 */
export const errorFormSlice = createSlice({
  name: "errorForm",
  initialState,
  reducers: {
    setErrorForm: (state, action: PayloadAction<boolean>) => {
      state.errorForm = action.payload;
    },
    updateDataNoError: (state, action: PayloadAction<dataErrorInt>) => {
      state.dataNoError = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<boolean>) => {
      state.errorMessage = action.payload;
    },

    reset: () => initialState,
  },
});

export const { setErrorForm, updateDataNoError, setErrorMessage, reset } =
  errorFormSlice.actions;
export default errorFormSlice.reducer;
