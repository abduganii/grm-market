import { createSlice } from "@reduxjs/toolkit";


const getInitialToken = () => {
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : null;
  }
  return null;
};
const initialState = {
  token: getInitialToken(),
};

const Tokenlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    changeToken: (state, action) => {
      state.token = action.payload || null;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
  },
});

export const { changeToken } = Tokenlice.actions;
export default Tokenlice.reducer;
