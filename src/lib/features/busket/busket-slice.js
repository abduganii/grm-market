import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buskets: [],
};

const Busketslice = createSlice({
  name: "buskets",
  initialState,
  reducers: {
    changeBuskets: (state, action) => {
      state.buskets = action.payload || [];
    },
  },
});

export const { changeBuskets } = Busketslice.actions;
export default Busketslice.reducer;
