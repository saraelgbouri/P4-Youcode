import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-jouranlist',
  templateUrl: './article-jouranlist.component.html',
  styleUrls: ['./article-jouranlist.component.css']
})
export class ArticleJouranlistComponent implements OnInit {

  constructor(private newsService:NewsService,private route: ActivatedRoute) { }
  Articles:any;
  Author;
  Picture;
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.newsService.getJournalArticles(params.id).subscribe(res => {
       this.Articles=res["articles"];
       this.Author=res;
       this.Picture=this.Author["Image"];
       console.log(this.Author);
       
      })
    })    
  }

}
