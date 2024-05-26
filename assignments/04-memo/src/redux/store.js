import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./reducers/memo.reducer";
import nowReducer from "./reducers/now.reducer";

const store = configureStore({
  reducer: {
    memo: memoReducer,
    now: nowReducer,
  },
});

export default store;
