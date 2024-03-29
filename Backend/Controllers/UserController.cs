﻿using Backend.Dtos.User;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public UserController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<PublicUser>>> GetAllUser()
        {
            try
            {
                List<PublicUser> users = await _userService.GetAll();
                return StatusCode(StatusCodes.Status200OK, users);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [Authorize]
        [HttpGet]
        [Route("CurrentUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PublicUser>> GetCurrentUser()
        {
            string? currentUser = HttpContext.User.Identity?.Name;

            if (currentUser is null) return StatusCode(StatusCodes.Status401Unauthorized);
            int id = int.Parse(currentUser);

            try
            {
                PublicUser? user = await _userService.Find(id);
                return user is null ? StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {id}!")
                    : StatusCode(StatusCodes.Status200OK, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [Authorize]
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<ActionResult<PublicUser>> UpdateUser(UpdateUser updateUser)
        {
            PublicUser? existingUser = await _userService.FindByEmailDto(updateUser.Email);

            if (existingUser is not null) return StatusCode(StatusCodes.Status409Conflict, $"This Email address is already taken: {updateUser.Email}!");

            existingUser = await _userService.Find(updateUser.Id);

            if (existingUser is null) return StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {updateUser.Id}!");

            try
            {
                PublicUser user = await _userService.Update(updateUser);
                return StatusCode(StatusCodes.Status200OK, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [Authorize]
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteUser(int id)
        {
            try
            {
                return await _userService.Delete(id) ? StatusCode(StatusCodes.Status200OK, $"The user with this id: {id} has been successfully deleted!")
                    : StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {id}!");
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<ActionResult<PublicUser>> Register(RegisterUser newUser)
        {
            PublicUser? existingUser = await _userService.FindByEmailDto(newUser.Email);

            if (existingUser is not null)
                return StatusCode(StatusCodes.Status409Conflict, $"This Email address is already taken: {newUser.Email}!");

            try
            {
                newUser = _authService.HashPw(newUser);
                PublicUser user = await _userService.Create(newUser);
                return StatusCode(StatusCodes.Status201Created, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult<PublicUser>> Login(LoginUser loginUser)
        {
            PublicUser? resUser;
            try
            {
                resUser = await _authService.Authenticate(loginUser);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
            
            if (resUser is null) return StatusCode(StatusCodes.Status401Unauthorized, "Invalid credentials!");

            string jwt = _authService.GenerateJwt(resUser);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None
            });

            return StatusCode(StatusCodes.Status200OK, resUser);
        }

        [Authorize]
        [HttpGet]
        [Route("Logout")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt", new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None
            });

            return StatusCode(StatusCodes.Status200OK, "You successfully logged out!");
        }
    }
}
