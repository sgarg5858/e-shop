import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(username:string,password:string)
  {
    return this.httpClient.post<{token:string}>('https://fakestoreapi.com/auth/login',{
      username,password
    })
  }
}
