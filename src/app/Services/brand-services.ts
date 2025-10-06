import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { BrandInterface } from './../interfaces/brand-interface';

@Injectable({
  providedIn: 'root',
})
export class BrandServices {
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get<BrandInterface[]>(`${environment.api_base_url}/brands`);
  }
  getBrandsById(id: string) {
    return this.http.get<BrandInterface>(`${environment.api_base_url}/brands/${id}`);
  }
  addBrand(name: string) {
    return this.http.post(`${environment.api_base_url}/brand`, {
      name: name,
    });
  }
  updateBrand(id: string, name: string) {
    return this.http.put(`${environment.api_base_url}/brand/update/${id}`, {
      name: name,
    });
  }
  deleteBrand(id: string) {
    return this.http.delete(`${environment.api_base_url}/brand/delete/${id}`);
  }
}
