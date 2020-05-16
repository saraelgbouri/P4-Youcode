using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Threading.Tasks;
using WebApiItNews.Models;

namespace WebApiItNews.Controllers
{
    public class ApplicationUserManager
    {
        internal Task<IdentityUser> FindByIdAsync(string v)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> ChangePasswordAsync(string v, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> AddPasswordAsync(string v, string newPassword)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> AddLoginAsync(string v, UserLoginInfo userLoginInfo)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> RemoveLoginAsync(string v, UserLoginInfo userLoginInfo)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> RemovePasswordAsync(string v)
        {
            throw new NotImplementedException();
        }

        internal static ApplicationUserManager Create()
        {
            throw new NotImplementedException();
        }

        internal Task<ApplicationUser> FindAsync(UserLoginInfo userLoginInfo)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> CreateAsync(ApplicationUser user, string password)
        {
            throw new NotImplementedException();
        }

        internal object FindByName(string userName)
        {
            throw new NotImplementedException();
        }

        internal void AddToRole(object id, string role)
        {
            throw new NotImplementedException();
        }

        internal Task<IdentityResult> CreateAsync(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        internal void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}