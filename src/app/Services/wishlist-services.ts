import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
// import { ProductInterface } from '../interfaces/product-interface';
import { WishlistInterface } from '../interfaces/wishlist-interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistServices {
  wishListProducts: WishlistInterface[] = [];
  
  constructor(private http: HttpClient) {
  }
  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      token: token || '',
    });
  }
  
  init(){
    this.getWishList().subscribe(result=>{
      this.wishListProducts = result
      // console.log(this.wishListProducts);
      return this.wishListProducts
    })
  }
  
  getWishList() {
    return this.http.get<WishlistInterface[]>(`${environment.api_base_url}/wishlist`, {
      headers: this.getHeaders(),
    });
  }
  
  addWishList(productId: string) {
    return this.http.post<WishlistInterface>(
      `${environment.api_base_url}/wishlist`,
      { productId },
      { headers: this.getHeaders() }
    );
  }
  
  removeWishList(id: string) {
    return this.http.delete<WishlistInterface[]>(`${environment.api_base_url}/wishlist/${id}`, {
      headers: this.getHeaders(),
    });
  }
  
  // isInWishList(id: string): boolean {
  // }
}
