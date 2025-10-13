import { ProductInterface } from './product-interface';

export interface WishlistInterface {
  _id: string;
  userId: string; 
  productId: ProductInterface; 
  createdAt?: string;
  updatedAt?: string;
}
