import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private api:HttpClient) {}

  getnews(){
    return this.api.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a18c61b93da040ff9db808d2bf2f777c")
  }

  getsports(){
    return this.api.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a18c61b93da040ff9db808d2bf2f777c")
  }

  getbusiness(){
    return this.api.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a18c61b93da040ff9db808d2bf2f777c")
  }


}
