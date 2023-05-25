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
                return user is null ? StatusCode(StatusCodes.Status404NotFound, $"There is no user with this Id: {id}")
                    : StatusCode(StatusCodes.Status200OK, user);
            }
            catch
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Oops, something went wrong!");
            }
        }

        [HttpPost]
        public async Task<ActionResult<PublicUser>> CreateUser(RegisterUser newUser)
        {
            throw new NotImplementedException();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PublicUser>> UpdateUser(UpdateUser updateUser)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            throw new NotImplementedException();
        }
    }
}
