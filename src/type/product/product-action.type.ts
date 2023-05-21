import { Product, ProductActionType } from "@/type/product/product.type.ts";

export type ProductAction =
  | ProductActionCreate
  | ProductActionDelete
  | ProductActionUpdate
  | ProductActionQuery
  | ProductActionQuerySuccess
  | ProductActionQueryError;
export interface ProductActionCreate {
  type: ProductActionType.CreateProduct;
  payload: Product;
}

export interface ProductActionDelete {
  type: ProductActionType.DeleteProduct;
  id: string;
}

export interface ProductActionUpdate {
  type: ProductActionType.UpdateProduct;
  id: string;
  payload: Product;
}

export interface ProductActionQuery {
  type: ProductActionType.QueryProduct;
}

export interface ProductActionQuerySuccess {
  type: ProductActionType.QueryProductSuccess;
  payload: Product[];
}

export interface ProductActionQueryError {
  type: ProductActionType.QueryProductError;
}
