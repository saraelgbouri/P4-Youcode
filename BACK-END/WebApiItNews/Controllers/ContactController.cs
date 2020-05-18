using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiItNews.Data;

namespace WebApiItNews.Controllers
{
    public class ContactController : ApiController
    {
        [ResponseType(typeof(Contact))]
        public IHttpActionResult PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            using (var context = new NewsEntities())
            {
                context.Contact.Add(contact);
                context.SaveChanges();

            }



            return CreatedAtRoute("DefaultApi", new { id = contact.Id }, contact);
        }
    }
}
