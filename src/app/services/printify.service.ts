import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PrintifyService {
  apiKey = 'tu_clave_de_api';
  headers = new HttpHeaders().set('Authorization', `${environment.apiToken}`);
  constructor(private http: HttpClient) {}

  getProductos() {
    return this.http.get<any>(`${environment.apiEndPoint}shops.json`, {
      headers: this.headers,
    });
  }
}
