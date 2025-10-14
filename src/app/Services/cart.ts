import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  items: { product: ProductInterface; quantity: number }[] = [];
  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      token: token || '',
    });
  }
  init() {
    this.getCartItems().subscribe((result) => {});
  }
  getCartItems() {
    return this.http.get<{ product: ProductInterface; quantity: number }[]>(
      `${environment.api_base_url}/cart`,
      { headers: this.getHeaders() }
    );
  }
  addToCart(productId: string, quantity: number) {
    return this.http.post(
      `${environment.api_base_url}/cart/${productId}`,
      {
        quantity: quantity,
      },
      { headers: this.getHeaders() }
    );
  }
  removeFromCart(productId: string) {
    return this.http.delete(`${environment.api_base_url}/cart/${productId}`, {
      headers: this.getHeaders(),
    });
  }
}
