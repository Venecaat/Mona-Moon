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

        public async Task<List<User>> GetAll() => await _context.Users.AsNoTracking().ToListAsync();

        public async Task<User> Create(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> Find(int id) => await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);

        public async Task<bool> IsUnique(string email) => await _context.Users.AllAsync(u => u.Email != email);

        public async Task<bool> Delete(User user)
        {
            _context.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Update(User user)
        {
            _context.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
