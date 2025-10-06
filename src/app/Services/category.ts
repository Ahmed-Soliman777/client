import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CategoryInterface } from '../interfaces/category-interface';

@Injectable({
  providedIn: 'root',
})
export class Category {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<CategoryInterface[]>(`${environment.api_base_url}/category`);
  }
  getCategoryById(id: string) {
    return this.http.get<CategoryInterface>(`${environment.api_base_url}/category/${id}`);
  }
  addCategory(name: string) {
    return this.http.post(`${environment.api_base_url}/category`, {
      name: name,
    });
  }
  updateCategory(id: string, name: string) {
    return this.http.put(`${environment.api_base_url}/category/${id}`, {
      name: name,
    });
  }
  delteCategory(id:string){
    return this.http.delete(`${environment.api_base_url}/category/${id}`)
  }
}
