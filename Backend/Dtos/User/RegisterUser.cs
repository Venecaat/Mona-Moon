using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public class RegisterUser : LoginUser
    {
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string LastName { get; set; }
    }
}
