import { configureStore } from "@reduxjs/toolkit";
import { BusketReducer, LikeReducer, TokenReducer, UserMeReducer } from "./features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      likes: LikeReducer,
      buskets: BusketReducer,
      token: TokenReducer,
      userMe: UserMeReducer,
    },
  });
};
