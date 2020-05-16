import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-footer-articles',
  templateUrl: './footer-articles.component.html',
  styleUrls: ['./footer-articles.component.css']
})
export class FooterArticlesComponent implements OnInit {

  TheDayBefore=[];
  Today=[];
  Yesterday=[];


  // @ViewChild("fouter", {static:false}) footer:ElementRef;

  constructor(private router:Router, private newsService:NewsService) { }

  ngOnInit() {
    this.getArticlesByDate()
    
  }

  getArticlesByDate(){
    this.newsService.getArticleByDate().subscribe((res:any)=>
    {
      this.TheDayBefore=res["TheDayBefore"]["listes"];
      this.Today=res["Today"]["listes"];
      this.Yesterday=res["Yesterday"]["listes"];
      console.log(this.Today);
    });
  }
 

}
