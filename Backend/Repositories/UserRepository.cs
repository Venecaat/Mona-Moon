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

        public virtual async Task<List<User>> GetAll() => await _context.Users.AsNoTracking().ToListAsync();

        public virtual async Task<User> Create(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public virtual async Task<User?> Find(int id) => await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);

        public virtual async Task<User?> FindByEmail(string email) => await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Email == email);

        public virtual async Task<bool> IsUnique(string email) => await _context.Users.AllAsync(u => u.Email != email);

        public virtual async Task<bool> Delete(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public virtual async Task<bool> Update(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
