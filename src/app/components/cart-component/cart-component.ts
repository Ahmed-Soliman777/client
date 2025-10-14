import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Services/cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-component',
  imports: [CurrencyPipe],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent implements OnInit {
  constructor(public cartService: Cart) {}
  ngOnInit(): void {
    this.cartService.init();
  }
  get cartItems() {
    return this.cartService.items;
  }
  removeCart(id:string){
    this.cartService.removeFromCart(id).subscribe(()=>{
          this.cartService.init();
    })
  }
  increaseQuantity(id:string, quantity:number){
    this.cartService.addToCart(id,quantity).subscribe(()=>{
      this.cartService.init();
    })
  }
  decreaseQuantity(id:string, quantity:number){
    this.cartService.addToCart(id,quantity).subscribe(()=>{
      this.cartService.init();
    })
  }
  get totalPrice(): number {
  return this.cartService.items.reduce(
    (sum, item) => sum + item.quantity * item.product.sellingPrice,
    0
  );
}

}
