import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  constructor(private router: Router,private newsService:NewsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.DeleteArticle(params.id).subscribe(res => {
        // this.router.navigateByUrl("articles");

      })
    })
  }


}
