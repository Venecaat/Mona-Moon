using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public class LoginUser : BaseUser
    {
        [Required]
        [DataType(DataType.Password)]
        public required string Password { get; set; }
    }
}
