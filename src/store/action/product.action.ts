import {
  type Product,
  ProductAction,
  ProductActionType,
} from "@/type/product/product.type.ts";
import Request from "@/request";

export function AddProduct(product: Product): ProductAction {
  return {
    type: ProductActionType.CreateProduct,
    payload: product,
  };
}

export function DeleteProduct(id: string): ProductAction {
  return {
    type: ProductActionType.DeleteProduct,
    id,
  };
}

export function UpdateProduct(id: string, product: Product): ProductAction {
  return {
    type: ProductActionType.UpdateProduct,
    id,
    payload: product,
  };
}

function QueryProduct(): ProductAction {
  return {
    type: ProductActionType.QueryProduct,
  };
}

function QueryProductSuccess(products: Product[]): ProductAction {
  return {
    type: ProductActionType.QueryProductSuccess,
    payload: products,
  };
}

function QueryProductError(): ProductAction {
  return {
    type: ProductActionType.QueryProductError,
  };
}

export function QueryProductRequest() {
  return async (dispatch) => {
    dispatch(QueryProduct());
    try {
      const response = await Request({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
      });
      console.log(response);
      dispatch(QueryProductSuccess(response.data));
    } catch (error) {
      dispatch(QueryProductError());
      console.log(error);
    }
  };
}
