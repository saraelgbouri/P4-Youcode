import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-categorie-articles',
  templateUrl: './show-categorie-articles.component.html',
  styleUrls: ['./show-categorie-articles.component.css']
})
export class ShowCategorieArticlesComponent implements OnInit {
  catArticles:any;
  ArticlesTable=[];
  cats:any;
  CatName;
  constructor(private categoriesService:CategoriesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoriesService.find(params.id).subscribe(res => {
        this.catArticles = res;
        console.log(params.id)
        console.log(this.catArticles["Article"])
        this.ArticlesTable=this.catArticles['Article'];
        this.CatName=this.catArticles['Titre']
      })
    });

    // this.nameCategories();
  }

    // nameCategories(){
    //   this.categoriesService.getCats().subscribe((res)=>{
    //    this.cats=res;
    //   })
    // }




  
}
