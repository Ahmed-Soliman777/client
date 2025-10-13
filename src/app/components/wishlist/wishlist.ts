import { Component, OnInit } from '@angular/core';
import { WishlistServices } from './../../Services/wishlist-services';
import { ProductCard } from "../product-card/product-card";
import { WishlistInterface } from '../../interfaces/wishlist-interface';

@Component({
  selector: 'app-wishlist',
  imports: [ProductCard],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist implements OnInit {
  wishlistProducts: WishlistInterface[] = []
  constructor(public WishlistServices: WishlistServices) {}
  ngOnInit(): void {
      this.WishlistServices.getWishList().subscribe(result=>{
        // console.log(result[3].productId);
        this.wishlistProducts = result
        
      })
  }
}
