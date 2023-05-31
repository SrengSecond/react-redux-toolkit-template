import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

const store = configureStore({
  reducer: {
    product: productReducer,
    bundle: bundleReducer,
  },
  // By Default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
