import { CategoriesService } from './../../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})
export class UpdateArticlesComponent implements OnInit {

  constructor(private categoriesService:CategoriesService,private newsService:NewsService,private route: ActivatedRoute) { }

  bodyart:any;
  cats:any;
  Id;

  articleForm = new FormGroup({
    Titre: new FormControl('', Validators.required),
    Body: new FormControl('', Validators.required),
    Img: new FormControl('', Validators.required),
    video: new FormControl(),
    CategorieID: new FormControl('', Validators.required),
    JournalistesID: new FormControl(1),
    Status: new FormControl("posted"),
  })


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.find(params.id).subscribe(res => {
        this.bodyart = res;
        this.Id=params.id
        console.log(params.id)
        console.log(this.bodyart)

      })
    

    })
    this.categories();

  }
  categories(){
    this.categoriesService.getCats().subscribe((res)=>{
     this.cats=res;
      console.log(this.cats)
    })
  }

  updateArticle(){
    this.newsService.updateArticle(this.Id,this.articleForm.value).subscribe(ser=>{
      console.log(this.articleForm.value);
      console.log(this.Id)
    })
  }



}
