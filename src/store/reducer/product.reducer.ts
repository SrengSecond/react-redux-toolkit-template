import {
  type ProductAction,
  ProductActionType,
  type ProductStore,
} from "@/type/product/product.type.ts";

import { produce } from "immer";

const initialState: ProductStore = {
  products: [],
  isError: false,
  isLoading: false,
};

const ProductReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ProductActionType.CreateProduct: {
      return produce(state, (draft) => {
        draft.products.push(action.payload);
      });
    }
    case ProductActionType.DeleteProduct: {
      return produce(state, (draft) => {
        draft.products = draft.products.filter(
          (product) => product.id !== action.id
        );
      });
    }
    case ProductActionType.UpdateProduct: {
      return produce(state, (draft) => {
        const foundIndex = draft.products.findIndex(
          (product) => product.id === action.id
        );
        if (foundIndex > -1) {
          draft.products[foundIndex] = action.payload;
        }
      });
    }
    case ProductActionType.QueryProduct: {
      return {
        products: [],
        isLoading: true,
        isError: false,
      };
    }
    case ProductActionType.QueryProductSuccess: {
      return {
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case ProductActionType.QueryProductError: {
      return {
        products: [],
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default ProductReducer;
