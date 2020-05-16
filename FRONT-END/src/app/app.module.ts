import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterArticlesComponent } from './Articles/footer-articles/footer-articles.component';
import { AdsComponent } from './layout/ads/ads.component';
import { ContactComponent } from './layout/contact/contact.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ArticlesHomeComponent } from './Articles/articles-home/articles-home.component';
import { ListArticlesComponent } from './Articles/list-articles/list-articles.component';
import { PostArticlesComponent } from './Articles/post-articles/post-articles.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';
import { ShowCategorieArticlesComponent } from './Categories/show-categorie-articles/show-categorie-articles.component';
import { UpdateArticlesComponent } from './Articles/update-articles/update-articles.component';
import { DeleteArticleComponent } from './Articles/delete-article/delete-article.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ArticleJouranlistComponent } from './Articles/article-jouranlist/article-jouranlist.component';
import { LoginComponent } from './Auth/login/login.component';
import { PostCategoryComponent } from './Categories/post-category/post-category.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FooterArticlesComponent,
    AdsComponent,
    ContactComponent,
    PageNotFoundComponent,
    ArticlesHomeComponent,
    ListArticlesComponent,
    PostArticlesComponent,
    ShowArticleComponent,
    ShowCategorieArticlesComponent,
    UpdateArticlesComponent,
    DeleteArticleComponent,
    RegisterComponent,
    ArticleJouranlistComponent,
    LoginComponent,
    PostCategoryComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
