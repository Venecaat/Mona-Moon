using AutoMapper;
using Backend.Database.Models.User;
using Backend.Dtos.User;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Utils;

namespace Backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly string? _jwtTokenKey;

        public AuthService(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
            _jwtTokenKey = EnvVarHelper.JwtTokenKey;
        }

        public virtual RegisterUser HashPw(RegisterUser user)
        {
            string pwHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = pwHash;
            return user;
        }

        public virtual async Task<PublicUser> Authenticate(LoginUser user)
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

        public virtual string GenerateJwt(PublicUser user)
        {
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtTokenKey));
            SigningCredentials credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            JwtHeader header = new JwtHeader(credentials);

            JwtPayload payload = new JwtPayload(
                user.Id.ToString(),
                null,
                new List<Claim>
                {
                    new (ClaimTypes.Email, user.Email),
                    new (ClaimTypes.Name, user.Id.ToString()),
                    new (ClaimTypes.Role, user.IsAdmin ? "Admin" : "User")
                },
                null,
                DateTime.UtcNow.AddHours(2));
            JwtSecurityToken securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
    }
}
