import { ApiExternesService } from './../../services/api-externes.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarOne;
  sidebarTwo;
  lastOne;
  constructor(private interNews:ApiExternesService) { }

  ngOnInit() {
    this.ongetApi();
    this.ongetApiTwo();
    this.ongetLastApi()
  }
  ongetApi()
  {
    this.interNews.getApiOne().subscribe(
      data=>{ 
        this.sidebarOne=(<any>data).articles; 
        console.log(data)
      }
    )
  } 

  ongetApiTwo()
  {
    this.interNews.getApiTwo().subscribe(
      data=>{ 
        this.sidebarTwo=(<any>data).articles; 
        console.log(data)
      }
    )
  } 


 ongetLastApi()
  {
    this.interNews. getLastApi().subscribe(
      data=>{ 
        this.lastOne=(<any>data).articles; 
        console.log(data)
      }
    )
  }




}
