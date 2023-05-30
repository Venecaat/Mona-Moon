using Backend.Database.Models.User;
using Microsoft.EntityFrameworkCore;

namespace Backend.Database
{
    public class MonaMoonDbContext : DbContext
    {
        public MonaMoonDbContext(DbContextOptions<MonaMoonDbContext> options) : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
    }
}
