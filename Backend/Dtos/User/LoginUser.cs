using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public class LoginUser : BaseUser
    {
        [Required]
        public required string Email { get; set; }
    }
}
