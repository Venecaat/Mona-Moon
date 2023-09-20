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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            _ = modelBuilder.Entity<User>().Property(u => u.Email).UseCollation("SQL_Latin1_General_CP1_CS_AS"); // make field case-sensitive
        }
    }
}
