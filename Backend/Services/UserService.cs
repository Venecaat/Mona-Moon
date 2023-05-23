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

        public async Task<PublicUser?> Find(int id)
        {
            User? user = await _repository.Find(id);
            return user == null ? null : _mapper.Map<User, PublicUser>(user);
        }

        public async Task<PublicUser?> FindByEmail(string email)
        {
            User? user = await _repository.FindByEmail(email);
            return user == null ? null : _mapper.Map<User, PublicUser>(user);
        }
    }
}
