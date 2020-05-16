import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  articles:any= {
    _4articles: [], 
    _8articles: [], 
     
  };
  slider=[];
  bodyArticle=[];

  ngOnInit() {
    this.getAllArticles();

  }


  getAllArticles(){
    this.newsService.getNew().subscribe((res:any)=>
    {
      let articles = res;
      this.slider = articles._4articles; 
      this.bodyArticle = articles._8articles; 
      console.log(res)
    });
    
  }
  
}

