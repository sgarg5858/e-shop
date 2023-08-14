import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './store/product';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts()
  {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  getProductsForCategory(category:string)
  {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
  }
}
