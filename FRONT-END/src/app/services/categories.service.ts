import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  index:number;

  constructor(private http:HttpClient) { }

  urlCat = "https://localhost:44339/api/Categories";

  getCats()
  {
    return this.http.get(this.urlCat) 
  }
  post(data){
    return this.http.post(this.urlCat,data);
  }
  find(id: number)
  {
      return this.http.get(`${this.urlCat}/${id}`);
  }
  delete(id:number)
  {
    return this.http.delete(`${this.urlCat}/${id}`);
  }


}

