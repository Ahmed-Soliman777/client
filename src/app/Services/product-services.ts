import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { ProductInterface } from './../interfaces/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductInterface[]>(`${environment.api_base_url}/products`);
  }
  getNewProducts() {
    return this.http.get<ProductInterface[]>(`${environment.api_base_url}/products/new-product`);
  }
  getFeaturedProducts() {
    return this.http.get<ProductInterface[]>(
      `${environment.api_base_url}/products/featured-product`
    );
  }
  getProductsById(id: string) {
    return this.http.get<ProductInterface>(`${environment.api_base_url}/product/${id}`);
  }
  addProduct(productData: ProductInterface) {
    return this.http.post<ProductInterface>(`${environment.api_base_url}/product/add`, productData);
  }
  updateProduct(id: string, productData: ProductInterface) {
    return this.http.put<ProductInterface>(
      `${environment.api_base_url}/product/update/${id}`,
      productData
    );
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.api_base_url}/products/delete/${id}`);
  }

  getProductList(
    searchTerm: string,
    categoryId: string,
    sortBy: string,
    sortOrder: number,
    brandId: string
  ) {
    return this.http.get<ProductInterface[]>(
      `${environment.api_base_url}/products/list?searchTerm=${searchTerm}&categoryId=${categoryId}&brandId=${brandId}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    );
  }
}
