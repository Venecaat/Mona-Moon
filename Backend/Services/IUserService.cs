using Backend.Dtos.User;

namespace Backend.Services
{
    public interface IUserService
    {
        public Task<List<PublicUser>> GetAll();
        public Task<PublicUser> Create(RegisterUser newUser);
        public Task<PublicUser?> Find(int id);
        public Task<PublicUser?> FindByEmail(string email);
        public Task<bool> IsUnique(string email);
        public Task<bool> Delete(int id);
        public Task<PublicUser> Update(UpdateUser user);
    }
}
