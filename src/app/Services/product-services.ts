import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { ProductInterface } from './../interfaces/product-interface';


@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductInterface[]>(`${environment.api_base_url}/products`);
  }
  getProductsById(id: string) {
    return this.http.get<ProductInterface>(`${environment.api_base_url}/product/${id}`);
  }
  addProduct(name: string) {
    return this.http.post(`${environment.api_base_url}/product`, {
      name: name,
    });
  }
  updateProduct(id: string, name: string) {
    return this.http.put(`${environment.api_base_url}/product/update/${id}`, {
      name: name,
    });
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.api_base_url}/products/delete/${id}`);
  }
}

