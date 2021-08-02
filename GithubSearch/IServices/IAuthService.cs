using GithubSearch.Entities.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GithubSearch.IServices
{
    public interface IAuthService
    {
        string AuthenticateUser(UserModel user);
    }
}
