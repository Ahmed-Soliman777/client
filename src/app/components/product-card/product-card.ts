import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WishlistServices } from './../../Services/wishlist-services';
import { Cart } from '../../Services/cart';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() item!: ProductInterface;

  constructor(private wishlistService: WishlistServices, private cartServices: Cart) {}

  get discountPrice() {
    return this.item.sellingPrice - (this.item.sellingPrice * this.item.discount) / 100;
  }

  addToWishList(product: ProductInterface) {
    // console.log(product);
    if (this.isInWishList(product)) {
      this.wishlistService.removeWishList(product._id).subscribe((result) => {
        this.wishlistService.init();
      });
    } else {
      this.wishlistService.addWishList(product._id).subscribe((result) => {
        this.wishlistService.init();
      });
    }
  }

  isInWishList(product: ProductInterface) {
    let isExist = this.wishlistService.wishListProducts.find((x) => x._id === product._id);

    if (isExist) {
      return true;
    } else {
      return false;
    }
  }

  addToCard(item: ProductInterface) {
    console.log(item);
    if (!this.isProductInCart(item._id)) {
      this.cartServices.addToCart(item._id, 1).subscribe(() => {
        this.cartServices.init();
      });
    } else {
      this.cartServices.removeFromCart(item._id).subscribe(() => {
        this.cartServices.init();
      });
    }
  }
  isProductInCart(productId: string) {
    if (this.cartServices.items.find((x) => x.product._id == productId)) {
      return true;
    } else {
      return false;
    }
  }
}
