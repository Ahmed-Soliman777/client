import { CartInterface } from './cart-interface';

export interface OrderInterface {
  items: CartInterface[];
  _id?: string;
  userId?: string;
  paymentType: string;
  address: any;
  data: Date;
  totalAmount: number;
  status?: string;
}
