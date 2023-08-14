import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './store/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProductsForCategory(category:string)
  {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }
}
