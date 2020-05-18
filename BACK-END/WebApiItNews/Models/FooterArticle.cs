using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiItNews.Models
{
    public class FooterArticle
    {
        public FooterArticleModel Today { get; set; }
        public FooterArticleModel Yesterday { get; set; }
        public FooterArticleModel TheDayBefore { get; set; }
    }
}