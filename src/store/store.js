import { configureStore } from "@reduxjs/toolkit";
import chelloReducer from "./chelloReducer";
export const store = configureStore({
  reducer: {
    chello: chelloReducer,
  },
});
