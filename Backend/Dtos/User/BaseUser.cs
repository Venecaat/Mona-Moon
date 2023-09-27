using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public abstract class BaseUser
    {
        [Required]
        [DataType(DataType.Password)]
        public required string Password { get; set; }
    }
}
