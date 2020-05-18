using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiItNews.Data;
using WebApiItNews.Models;

namespace WebApiItNews.Controllers
{
    [Authorize(Roles = "Gestionner")]
    public class ArticlesController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        [AllowAnonymous]
        // GET: api/Articles
        public IHttpActionResult GetArticle()
        {
            var articles = new List<ViewArticleJournalist>();

            //ViewModelJournalist jr = new ViewModelJournalist();

            using (var context = new NewsEntities())
            {
                //var article = context.Article.ToList();
                var status = "posted";
                var article = context.Article.Where(f => f.Status == status).ToList().OrderByDescending(a => a.Date).Take(12);
                if (article == null)
                {
                    return NotFound();
                }

                foreach (var n in article)
                {
                    ViewArticleJournalist vm = new ViewArticleJournalist();
                    vm.ID = n.ID;
                    vm.img = n.Img;
                    vm.Titre = n.Titre;
                    vm.body = n.Body;
                    vm.Date = n.Date;

                    vm.Journalistes = new JournalisteInfo();
                    vm.Journalistes.Nom = n.Journalistes.Nom;
                    vm.Journalistes.Id = n.Journalistes.ID;
                    vm.Journalistes.Prenom = n.Journalistes.Prenom;
                    vm.Journalistes.Image = n.Journalistes.Image;

                    articles.Add(vm);
                    vm.Categorie = (int)n.CategorieID;
                }
            }
            HomeArticles ha = new HomeArticles();
            ha._4articles = articles.GetRange(0, 4);
            ha._8articles = articles.GetRange(4, 8);

            return Ok(ha);
            //return db.Article;
        }
        [AllowAnonymous]

        [Route("Api/Articles/Category/{id}")]
        public IHttpActionResult GetCatArticle(int id)
        {
            var articles = new List<ViewArticleJournalist>();

            //ViewModelJournalist jr = new ViewModelJournalist();

            using (var context = new NewsEntities())
            {
                //var article = context.Article.ToList();
                var status = "posted";
                var article = context.Article.Where(f => f.CategorieID == id).ToList();
                if (article == null)
                {
                    return NotFound();
                }

                foreach (var n in article)
                {
                    ViewArticleJournalist vm = new ViewArticleJournalist();
                    vm.ID = n.ID;
                    vm.img = n.Img;
                    vm.Titre = n.Titre;
                    vm.body = n.Body;
                    vm.Date = n.Date; 
                    vm.Journalistes = new JournalisteInfo();
                    vm.Journalistes.Nom = n.Journalistes.Nom;
                    vm.Journalistes.Id = n.Journalistes.ID;
                    vm.Journalistes.Prenom = n.Journalistes.Prenom;
                    vm.Journalistes.Image = n.Journalistes.Image;
                    articles.Add(vm);
                    vm.Categorie = (int)n.CategorieID;
                }
            }
            return Ok(articles);
            //return db.Article;
        }
        [AllowAnonymous]
        // GET: api/Articles/5
        [ResponseType(typeof(Article))]
        public IHttpActionResult GetArticle(int id)
        {
            Article article = db.Article.Find(id);
            if (article == null)
            {
                return NotFound();
            }

            ViewArticleJournalist vm = new ViewArticleJournalist();
            vm.ID = article.ID;
            vm.img = article.Img;
            vm.Titre = article.Titre;
            vm.body = article.Body;
            vm.Date = article.Date; 
            vm.Journalistes = new JournalisteInfo();
            vm.Journalistes.Nom = article.Journalistes.Nom;
            vm.Journalistes.Id = article.Journalistes.ID;
            vm.Journalistes.Prenom = article.Journalistes.Prenom;
            vm.Journalistes.Image = article.Journalistes.Image;
         
            vm.Categorie = (int)article.CategorieID;

            return Ok(vm);
        }
        [AllowAnonymous]
        // PUT: api/Articles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutArticle(int id, Article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != article.ID)
            {
                return BadRequest();
            }

            db.Entry(article).State = EntityState.Modified;

            ViewArticleJournalist vm = new ViewArticleJournalist();
            try
            {
                db.SaveChanges();

               
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            Article a = db.Article.Find(id);
            vm.ID = a.ID;
            vm.img = a.Img;
            vm.Titre = a.Titre;
            vm.body = a.Body;
            vm.Date = a.Date;
            //vm.Journalistes = new JournalisteInfo();
            //vm.Journalistes.Nom = a.Journalistes.Nom;
            //vm.Journalistes.Id = a.Journalistes.ID;
            //vm.Journalistes.Prenom = a.Journalistes.Prenom;
            //vm.Journalistes.Image = a.Journalistes.Image;
            vm.Categorie = (int)a.CategorieID;

            return Ok(vm);
        }

        [AllowAnonymous]
        // POST: api/Articles
        [ResponseType(typeof(Article))]
        public IHttpActionResult PostArticle(Article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            article.Date = DateTime.Now;
            db.Article.Add(article);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = article.ID }, article);
        }
        [AllowAnonymous]
        // DELETE: api/Articles/5
        [ResponseType(typeof(Article))]
        public IHttpActionResult DeleteArticle(int id)
        {
            Article article = db.Article.Find(id);
            if (article == null)
            {
                return NotFound();
            }

            db.Article.Remove(article);
            db.SaveChanges();

            return Ok(article);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ArticleExists(int id)
        {
            return db.Article.Count(e => e.ID == id) > 0;
        }
    }
}