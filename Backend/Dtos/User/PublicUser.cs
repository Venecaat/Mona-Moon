using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public class PublicUser : BaseUser
    {
        public required int Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string LastName { get; set; }

        [Required]
        public bool IsAdmin { get; set; }
    }
}
