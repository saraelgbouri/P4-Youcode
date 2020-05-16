import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {

  
  categoryForm = new FormGroup({
    Titre: new FormControl('', Validators.required),
  })

  constructor(private router: Router,private categoriesService:CategoriesService,private newsService:NewsService) { }
  cats:any;
  saveCat:any
  findCat;
  deleteID;

  ngOnInit() {
    this.categories();
  }

  categories(){
    this.categoriesService.getCats().subscribe((res)=>{
     this.cats=res;
      console.log("hado cats",this.cats)
    })
  }

  saveCategory(){
    this.categoriesService.post(this.categoryForm.value)
    .subscribe(data=>{
      this.router.navigateByUrl('articles');
    });
  }

  findCategory(id){
    this.categoriesService.find(id)
    .subscribe((res=>{
      this.findCat=res;
      console.log("objet dyal find",this.findCat);
    }))
    }

    pushdId(id){
      this.deleteID=id;
      console.log("hada id",this.deleteID);
    }

  deleteCategory(){
    console.log(this.deleteID);
    this.categoriesService.delete(this.deleteID)
    .subscribe(data=>{
      this.ngOnInit();
    });
  }

}
