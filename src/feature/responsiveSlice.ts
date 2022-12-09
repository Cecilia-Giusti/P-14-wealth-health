import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface responsiveInt {
  openHeader: boolean;
}

const initialState: responsiveInt = {
  openHeader: false,
};

export const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    setOpenHeader: (state, action: PayloadAction<boolean>) => {
      state.openHeader = action.payload;
    },
  },
});

export const { setOpenHeader } = responsiveSlice.actions;
export default responsiveSlice.reducer;
