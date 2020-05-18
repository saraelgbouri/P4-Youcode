using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiItNews.Models
{
    public class JournalisteInfo
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Image{ get; set; }
    }
}