import { createSlice } from "@reduxjs/toolkit";
import { BundleState } from "@/type/bundle/bundle.type.ts";
import { productAction } from "@/redux/product/productSlice.slice.ts";

const initialState: BundleState = {
  bundles: [],
};

const sliceName = "bundle";

const bundleSliceSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    create: (state, action) => {
      state.bundles.push(action.payload);
    },
    delete: (state, action) => {
      state.bundles = state.bundles.filter((bundle) => bundle.id !== action.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productAction.create, (state, action) => {
      state.bundles.push(action.payload);
    });
  },
});
export const bundleAction = bundleSliceSlice.actions;
export const bundleReducer = bundleSliceSlice.reducer;
