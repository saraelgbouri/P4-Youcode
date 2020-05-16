import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Article } from '../../Models/article.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cats;
  articles : Article[] =[];
  constructor(private catSerice:CategoriesService) { }

  ngOnInit() {
    this.catSerice.getCats().subscribe((data:any[])=>{
      this.cats=data;
      console.log(this.cats);
      console.log("salut les gars")
    })
  }
  
  getAllCats(){

  }
}
