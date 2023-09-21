using Backend.Dtos.User;

namespace Backend.Services
{
    public interface IAuthService
    {
        RegisterUser HashPw(RegisterUser user);
        Task<PublicUser> Authenticate(LoginUser user);
        string GenerateJwt(PublicUser user);
    }
}
