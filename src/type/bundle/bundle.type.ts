import { Product } from "@/type/product/product.type.ts";

export interface Bundle {
  products: Product[];
  price: number;
  title: string;
  description: string;
  id: string;
}
export interface BundleState {
  bundles: Bundle[];
}
