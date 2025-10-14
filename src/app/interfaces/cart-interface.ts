import { ProductInterface } from './product-interface';

export interface CartInterface {
  product: ProductInterface;
  quantity: number;
}
