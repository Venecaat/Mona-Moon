using Backend.Database.Models.User;
using Backend.Dtos.User;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<PublicUser>>> GetAllUser()
        {
            try
            {
                List<PublicUser> users = await _service.GetAll();
                return StatusCode(StatusCodes.Status200OK, users);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PublicUser>> GetUserById(int id)
        {
            try
            {
                PublicUser? user = await _service.Find(id);
                return user is null ? StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {id}!")
                    : StatusCode(StatusCodes.Status200OK, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<ActionResult<PublicUser>> CreateUser(RegisterUser newUser)
        {
            PublicUser? existingUser = await _service.FindByEmail(newUser.Email);

            if (existingUser is not null) return StatusCode(StatusCodes.Status409Conflict, $"This Email address is already taken: {newUser.Email}!");

            try
            {
                PublicUser user = await _service.Create(newUser);
                return StatusCode(StatusCodes.Status201Created, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<ActionResult<PublicUser>> UpdateUser(UpdateUser updateUser)
        {
            PublicUser? existingUser = await _service.FindByEmail(updateUser.Email);

            if (existingUser is not null) return StatusCode(StatusCodes.Status409Conflict, $"This Email address is already taken: {updateUser.Email}!");

            existingUser = await _service.Find(updateUser.Id);

            if (existingUser is null) return StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {updateUser.Id}!");

            try
            {
                PublicUser user = await _service.Update(updateUser);
                return StatusCode(StatusCodes.Status200OK, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteUser(int id)
        {
            try
            {
                return await _service.Delete(id) ? StatusCode(StatusCodes.Status200OK, $"The user with this id: {id} has been successfully deleted!")
                    : StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {id}!");
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }
    }
}
