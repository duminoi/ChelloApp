import { createSelector } from "reselect";
export const selectApi = createSelector(
  [(state) => state.chello],
  ({ apiKey }) => {
    return apiKey;
  }
);
