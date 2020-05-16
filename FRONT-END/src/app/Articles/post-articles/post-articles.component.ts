import { NewsService } from './../../services/news.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.css']
})
export class PostArticlesComponent implements OnInit {


  articleForm = new FormGroup({
    Titre: new FormControl('', Validators.required),
    Body: new FormControl('', Validators.required),
    Img: new FormControl('', Validators.required),
    video: new FormControl(),
    CategorieID: new FormControl('', Validators.required),
    JournalistesID: new FormControl(1),
    Status: new FormControl("posted"),
  })


  constructor(private router: Router,private categoriesService:CategoriesService,private newsService:NewsService) { }
  articles:any= {
    _4articles: [], 
    _8articles: [], 
     
  };
  slider=[];
  bodyArticle=[];
  cats:any;
  Indx=false;
  indxMsg="Show"
  IndxId:number;
  FindArticle;
  ngOnInit() {
    this.categories();
    this.getAllArticles();
  }

  categories(){
    this.categoriesService.getCats().subscribe((res)=>{
     this.cats=res;
      console.log(this.cats)
    })
  }

  saveArticle(){
    this.newsService.PostArticle(this.articleForm.value)
    .subscribe(data=>{
      this.ngOnInit();
    });

  }

  getAllArticles(){
    this.newsService.getNew().subscribe((res:any)=>
    {
      let articles = res;
      this.slider = articles._4articles; 
      this.bodyArticle = articles._8articles; 
      console.log("hada res",res)
    });
    
  }


  PushID(id){
    this.IndxId=id;
    console.log(this.IndxId)

  }

  findArticle(){
    this.newsService.find(this.IndxId)
    .subscribe((res=>{
      this.FindArticle=res;
      console.log("objet dyal find",this.FindArticle);
    }))
  }

  deleteArticle(){
    this.newsService.DeleteArticle(this.IndxId)
    .subscribe(data=>{
      this.ngOnInit();
    });
  }



  // Table(){

  //   console.log("hada index",this.Indx);

  //   if(this.Indx==false){
  //     this.Indx=true;
  //   }
  //   else{
  //     this.Indx=false;
  //   }
   
  //   if (this.indxMsg=="Show"){
  //     this.indxMsg="Hide";
  //   }
  //   else{
  //     this.indxMsg="Show";
  //   }
  // }


}
