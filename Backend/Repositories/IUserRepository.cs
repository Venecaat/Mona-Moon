using Backend.Database.Models.User;

namespace Backend.Repositories
{
    public interface IUserRepository
    {
        public Task<List<User>> GetAll();
        public Task<User?> Find(int id);
        public Task<bool> IsUnique(string email);
    }
}
