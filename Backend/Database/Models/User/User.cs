﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Database.Models.User
{
    [Index(nameof(Email), IsUnique = true)]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [RegularExpression("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")]
        public required string Email { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 2)]
        public required string LastName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public required string Password { get; set; }

        [Required]
        public bool IsAdmin { get; set; }
    }
}
