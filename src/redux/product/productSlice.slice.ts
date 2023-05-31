import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, type ProductState } from "@/type/product/product.type.ts";

import type { AxiosResponse } from "axios";
import type { ResponseError } from "@/type/request/request.type.ts";

const initialState: ProductState = {
  isError: false,
  isLoading: false,
  products: [],
};

async function GET_PRODUCT(): Promise<AxiosResponse<Product[], ResponseError>> {
  return await request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });
}

const sliceName = "product";

const queryProduct = createAsyncThunk("product/query", async () => {
  return GET_PRODUCT().then((response) => response.data);
});

const productSliceSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    create: (state: ProductState, action) => {
      state.products.push(action.payload);
    },
    delete: (state: ProductState, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(queryProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      queryProduct.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload || [];
        state.isLoading = false;
        state.isError = false;
      }
    );
    builder.addCase(queryProduct.rejected, (state) => {
      state.products = [];
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// export default productSliceSlice;
export const productAction = productSliceSlice.actions;
export const productReducer = productSliceSlice.reducer;
export const productAsyncAction = {
  queryProduct,
};
