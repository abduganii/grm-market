import { configureStore } from "@reduxjs/toolkit";
import { BusketReducer, LikeReducer } from "./features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      likes: LikeReducer,
      buskets: BusketReducer,
    },
  });
};
