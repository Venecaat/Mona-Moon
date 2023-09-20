using AutoMapper;
using Backend.Database.Models.User;
using Backend.Dtos.User;

namespace Backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public AuthService(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public RegisterUser HashPw(RegisterUser user)
        {
            string pwHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = pwHash;
            return user;
        }

        public async Task<PublicUser> Authenticate(LoginUser user)
        {
            User? resUser = await _userService.FindByEmail(user.Email);
            bool verified = false;

            if (resUser != null)
            {
                verified = BCrypt.Net.BCrypt.Verify(user.Password, resUser.Password);
            }

            if (resUser == null || !verified) return null;
            return _mapper.Map<User, PublicUser>(resUser);
        }
    }
}
