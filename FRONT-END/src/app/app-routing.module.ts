import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ArticleJouranlistComponent } from './Articles/article-jouranlist/article-jouranlist.component';
import { DeleteArticleComponent } from './Articles/delete-article/delete-article.component';
import { UpdateArticlesComponent } from './Articles/update-articles/update-articles.component';
import { ShowCategorieArticlesComponent } from './Categories/show-categorie-articles/show-categorie-articles.component';
import { ShowArticleComponent } from './Articles/show-article/show-article.component';
import { PostArticlesComponent } from './Articles/post-articles/post-articles.component';
import { ListArticlesComponent } from './Articles/list-articles/list-articles.component';
import { ArticlesHomeComponent } from './Articles/articles-home/articles-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { PostCategoryComponent } from './Categories/post-category/post-category.component';

const routes: Routes = [

  { path: "", redirectTo: '/articles', pathMatch: 'full' },
  { path: "articles", component: ArticlesHomeComponent, children: [
    { path: "", component: ListArticlesComponent },
    { path: ":id", component: ShowArticleComponent},

    { path: "categories/:id", component: ShowCategorieArticlesComponent},
    // { path: "update/:id", component: UpdateArticlesComponent },
    { path: "Journalist/:id", component: ArticleJouranlistComponent},
    // { path: "delete/:id", component: DeleteArticleComponent },
    // { path: "create", component: PostArticlesComponent },
    // { path: ":id", component: ShowArticleComponent},

  ]},
  
  { path: "update/:id", component: UpdateArticlesComponent },
  { path: "delete/:id", component: DeleteArticleComponent },
  { path: "create-article", component: PostArticlesComponent },
  { path: "add-category", component: PostCategoryComponent },


  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},


  // { path: "categories/:id", component: ShowCategorieArticlesComponent},
  {path:"contact", component: ContactComponent},
  { path:"**",component: PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
