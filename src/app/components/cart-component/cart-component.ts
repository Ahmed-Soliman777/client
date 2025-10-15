import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Services/cart';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { OrderServices } from '../../Services/order-services';
import { OrderInterface } from '../../interfaces/order-interface';

@Component({
  selector: 'app-cart-component',
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent implements OnInit {
  addressForm!: FormGroup;
  paymentType = 'cash';
  constructor(
    public cartService: Cart,
    private formBuilder: FormBuilder,
    private orderService: OrderServices
  ) {}
  ngOnInit(): void {
    this.cartService.init();
    this.addressForm = this.formBuilder.group({
      address1: [''],
      address2: [''],
      city: [''],
      pincode: [''],
    });
  }
  get cartItems() {
    return this.cartService.items;
  }
  removeCart(id: string) {
    this.cartService.removeFromCart(id).subscribe(() => {
      this.cartService.init();
    });
  }
  increaseQuantity(id: string, quantity: number) {
    this.cartService.addToCart(id, quantity).subscribe(() => {
      this.cartService.init();
    });
  }
  decreaseQuantity(id: string, quantity: number) {
    this.cartService.addToCart(id, quantity).subscribe(() => {
      this.cartService.init();
    });
  }
  get totalPrice(): number {
    return this.cartService.items.reduce(
      (sum, item) => sum + item.quantity * item.product.sellingPrice,
      0
    );
  }
  orderStep: number = 0;
  checkout() {
    this.orderStep = 1;
  }
  addAddress() {
    this.orderStep = 2;
  }
  completeOrder() {
    let order: OrderInterface = {
      items: this.cartItems,
      paymentType: this.paymentType,
      address: this.addressForm.value,
      data: new Date(),
      totalAmount: this.totalPrice,
    };
    this.orderService.addOrder(order).subscribe(() => {
      alert('Your order is completed');
      this.cartService.init()
      this.orderStep = 0
    });
    // console.log(order);
  }
}
