import { configureStore } from "@reduxjs/toolkit";
import { BusketReducer, LikeReducer, TokenReducer } from "./features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      likes: LikeReducer,
      buskets: BusketReducer,
      token: TokenReducer,
    },
  });
};
