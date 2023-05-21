import { Immutable } from "immer";
export * from "./product-action.type.ts";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  isAvailable: boolean;
}

export type ProductStore = Immutable<{
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}>;

export enum ProductActionType {
  CreateProduct = "createProduct",
  ReadProduct = "getProduct",
  UpdateProduct = "updateProduct",
  DeleteProduct = "deleteProduct",
  QueryProduct = "queryProduct",
  QueryProductSuccess = "queryProductSuccess",
  QueryProductError = "queryProductError",
}

export enum ProductCategory {
  Book = "book",
  Clothing = "clothing",
  Collectible = "collectible",
  Figurine = "figurine",
  Sticker = "sticker",
}
