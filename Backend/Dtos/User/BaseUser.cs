using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public abstract class BaseUser
    {
        [Required]
        [RegularExpression("/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/")]
        public required string Email { get; set; }
    }
}
