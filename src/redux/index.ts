import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    product: productReducer,
    bundle: bundleReducer,
  },
  // By Default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
