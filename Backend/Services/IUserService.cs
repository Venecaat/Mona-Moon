using Backend.Database.Models.User;
using Backend.Dtos.User;

namespace Backend.Services
{
    public interface IUserService
    {
        public Task<List<PublicUser>> GetAll();
        public Task<PublicUser?> Find(int id);
        public Task<PublicUser?> FindByEmail(string email);
    }
}
