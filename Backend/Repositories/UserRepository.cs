using Backend.Database;
using Backend.Database.Models.User;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MonaMoonDbContext _context;
        public UserRepository(MonaMoonDbContext context)
        {
            _context = context;
        }

        
    }
}
