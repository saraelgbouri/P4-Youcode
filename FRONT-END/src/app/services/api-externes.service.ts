import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiExternesService {

  constructor(private http:HttpClient) { }
  getApiOne()
  {
    const API_KEY = "f2e84538b0bc429cb89634751fc88c63"
    return this.http.get("http://newsapi.org/v2/everything?q=apple&from=2020-05-01&to=2020-05-01&sortBy=popularity&apiKey="+API_KEY)
  }
  getApiTwo()
  {
    return this.http.get("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=f2e84538b0bc429cb89634751fc88c63")
  }
  getLastApi()
  {
    return this.http.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f2e84538b0bc429cb89634751fc88c63")
}
}
