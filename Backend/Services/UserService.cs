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

    }
}
