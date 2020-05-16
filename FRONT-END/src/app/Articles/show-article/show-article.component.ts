import { NewsService } from './../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  bodyart:any;
  Id;
  JournalistId;
  DeleteValue:boolean;

  constructor(private router: Router,private newsService:NewsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.find(params.id).subscribe(res => {
        this.bodyart = res;
        this.Id=params.id
        console.log(params.id)
        console.log(this.bodyart)
        this.JournalistId=this.bodyart["Journalistes"]["Id"]; 
      })
    })
  }

  delete(){
    this.DeleteValue=confirm("Do You Wanna Delete this Article ?");
    if(this.DeleteValue==true){
     this.router.navigateByUrl(`/delete/${this.Id}`)
      // this.router.navigateByUrl(`/articles/delete/${this.Id}`)
    }
  
  }



}
