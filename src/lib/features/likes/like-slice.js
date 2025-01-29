import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};

const LikeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    changeLike: (state, action) => {
      state.likes = action.payload || [];
    },
  },
});

export const { changeLike } = LikeSlice.actions;
export default LikeSlice.reducer;
