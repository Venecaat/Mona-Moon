using Backend.Dtos.User;

namespace Backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;

        public AuthService(IUserService userService)
        {
            _userService = userService;
        }

        public RegisterUser HashPw(RegisterUser user)
        {
            string pwHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = pwHash;
            return user;
        }
    }
}
