using GithubSearch.Entities.Auth;
using GithubSearch.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GithubSearch.Controllers
{
    [ApiController]
    [Route("api/auth")]
    [AllowAnonymous]

    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IConfiguration config, IAuthService authService )
        {
            _authService = authService;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]UserModel login)
        {
            string token = _authService.AuthenticateUser(login);
            if(token != null)
            {
                return Ok(new { token = token });
            }

            return Unauthorized();
        }
    }
}
