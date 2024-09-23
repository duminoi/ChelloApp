import { configureStore } from "@reduxjs/toolkit";
import chelloReducer from "./chelloReducer";
import taskReducer from "./taskReducer";
export const store = configureStore({
  reducer: {
    chello: chelloReducer,
    tasks: taskReducer,
  },
});
