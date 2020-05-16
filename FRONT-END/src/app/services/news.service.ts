import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient) { }

  urlApi = "https://localhost:44339/api/articles";
  JournalApi="https://localhost:44339/api/Journalist"
  

  getNew()
  {
    return this.http.get(this.urlApi);
  }

  find(id: number) {
    return this.http.get(`${this.urlApi}/${id}`);
  }

  
  updateArticle(id: number, value) {
    return this.http.put(`${this.urlApi}/${id}`, value);
  }

  PostArticle(data){
    return this.http.post(this.urlApi,data);
  }

  DeleteArticle(id: number){
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  getArticleByDate()
  {
    return this.http.get("https://localhost:44339/api/ArtcileByDate/GetArticleByDate")
    }

  getJournalArticles(id: number){

    return this.http.get(`${this.JournalApi}/${id}`);

  }

}