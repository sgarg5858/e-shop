import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private readonly httpClient = inject(HttpClient);

  getCategories()
  {
    return this.httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
