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

/**
 * 🔵 To Add Support for typescript to jsx files
 * create type that infer from the store (getState, dispatch)
 * Then as a convention, we export the type and the store and create a custom hook to use them
 *
 * 📂 Check --> src\hooks\useRedux.ts
 *
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Use to as Provide to inject the store
 *
 * 📂 Check --> src\index.tsx
 */
export default store;
