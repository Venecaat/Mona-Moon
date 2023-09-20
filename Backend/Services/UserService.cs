using AutoMapper;
using Backend.Database.Models.User;
using Backend.Dtos.User;
using Backend.Repositories;

namespace Backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        public UserService(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<PublicUser>> GetAll() => _mapper.Map<List<User>, List<PublicUser>>(await _repository.GetAll());

        public async Task<PublicUser> Create(RegisterUser newUser)
        {
            User user = _mapper.Map<RegisterUser, User>(newUser);
             await _repository.Create(user);
            return _mapper.Map<User, PublicUser>(user);
        }

        public async Task<PublicUser?> Find(int id)
        {
            User? user = await _repository.Find(id);
            return user == null ? null : _mapper.Map<User, PublicUser>(user);
        }

        public async Task<PublicUser?> FindByEmailDto(string email)
        {
            User? user = await _repository.FindByEmail(email);
            return user == null ? null : _mapper.Map<User, PublicUser>(user);
        }

        public async Task<User?> FindByEmail(string email) => await _repository.FindByEmail(email);

        public async Task<bool> IsUnique(string email) => await _repository.IsUnique(email);

        public async Task<bool> Delete(int id)
        {
            User? user = await _repository.Find(id);

            if (user == null) return false;

            await _repository.Delete(user);
            return true;
        }

        public async Task<PublicUser> Update(UpdateUser updateUser)
        {
            User user = _mapper.Map<UpdateUser, User>(updateUser);
            await _repository.Update(user);

            return _mapper.Map<User, PublicUser>(user);
        }
    }
}
