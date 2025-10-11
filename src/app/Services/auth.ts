import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}
  register(username: string, email: string, password: string) {
    return this.http.post(`${environment.api_base_url}/register`, {
      username,
      email,
      password,
    });
  }
  login(email: string, password: string) {
    return this.http.post(`${environment.api_base_url}/login`, {
      email,
      password,
    });
  }
}
