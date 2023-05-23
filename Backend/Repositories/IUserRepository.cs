using Backend.Database.Models.User;

namespace Backend.Repositories
{
    public interface IUserRepository
    {
        public Task<List<User>> GetAll();
        public Task<User> Create(User user);
        public Task<User?> Find(int id);
        public Task<User?> FindByEmail(string email);
        public Task<bool> IsUnique(string email);
        public Task<bool> Delete(User user);
        public Task<bool> Update(User user);
    }
}
