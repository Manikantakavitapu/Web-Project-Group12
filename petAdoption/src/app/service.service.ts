import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  subscribe() {
    throw new Error('Method not implemented.');
  }
  private url="http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getpets() {
    return this.http.get(this.url);
  }

}
