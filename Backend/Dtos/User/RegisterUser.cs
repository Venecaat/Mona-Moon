﻿using System.ComponentModel.DataAnnotations;

namespace Backend.Dtos.User
{
    public class RegisterUser : BaseUser
    {
        [Required]
        [RegularExpression("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")]
        public required string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string LastName { get; set; }
    }
}
