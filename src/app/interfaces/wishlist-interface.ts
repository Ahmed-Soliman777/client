import { ProductInterface } from './product-interface';

export interface WishlistInterface {
  _id: string;
  userId: string; 
  productId: string | ProductInterface; 
  createdAt?: string;
  updatedAt?: string;
}
