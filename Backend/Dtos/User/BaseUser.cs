using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public abstract class BaseUser
    {
        [Required]
        [RegularExpression("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")]
        public required string Email { get; set; }
    }
}
