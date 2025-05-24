import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    inctementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, inctementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
