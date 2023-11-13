using AutoMapper;
using Backend.Services;
using Moq;
using Backend.AutoMapper;
using Backend.Dtos.User;
using Backend.Repositories;
using Backend.Database;
using Microsoft.EntityFrameworkCore;
using Backend.Database.Models.User;

namespace BackendTests.ServiceTests
{
    [TestFixture]
    public class AuthServiceT
    {
        private IMapper _mapper;
        private Mock<UserService> _userService;
        private AuthService _authService;

        [SetUp]
        public void Setup()
        {
            Environment.SetEnvironmentVariable("JWT_TOKEN_KEY", "this-is-a-test-key-for-unit-tests");

            MapperConfiguration mapperConfig = new MapperConfiguration(mc => mc.AddProfile(typeof(MapProfile)));
            _mapper = mapperConfig.CreateMapper();

            Mock<MonaMoonDbContext> mockContext = new(new DbContextOptions<MonaMoonDbContext>());
            Mock<UserRepository> mockRepository = new Mock<UserRepository>(mockContext.Object);

            _userService = new Mock<UserService>(mockRepository.Object, _mapper);

            _authService = new AuthService(_userService.Object, _mapper);
        }

        [Test]
        public void HashPw_HashesPw()
        {
            string pw = "#Test123";

            RegisterUser user = new RegisterUser()
            {
                Email = "test@email.com",
                FirstName = "Test",
                LastName = "User",
                Password = pw
            };

            user = _authService.HashPw(user);

            Assert.That(user.Password, !Is.EqualTo(pw));
        }

        [Test]
        public void HashPw_ReturnsUser()
        {
            string pw = "#Test123";

            RegisterUser expectedUser = new RegisterUser()
            {
                Email = "test@email.com",
                FirstName = "Test",
                LastName = "User",
                Password = pw
            };

            RegisterUser user = _authService.HashPw(expectedUser);

            Util.AreEqualByJson(expectedUser, user);
        }

        [Test]
        public async Task Authenticate_NotExistingUser_ReturnsNull()
        {
            LoginUser user = new LoginUser()
            {
                Email = "furina@fontain.com",
                Password = "#Hydroarchon1"
            };

            _userService.Setup(x => x.FindByEmail(user.Email)).Returns(Task.FromResult<User?>(null));

            PublicUser? resUser = await _authService.Authenticate(user);

            Assert.Null(resUser);
        }

        [Test]
        public async Task Authenticate_ExistingUserWithWrongPw_ReturnsNull()
        {
            string pw = "#Hydroarchon1";

            RegisterUser newUser = new RegisterUser()
            {
                Email = "furina@fontain.com",
                FirstName = "Test",
                LastName = "User",
                Password = pw
            };

            LoginUser user = new LoginUser()
            {
                Email = "furina@fontain.com",
                Password = "#WrongPw123"
            };

            _authService.HashPw(newUser);

            User existingUser = new User
            {
                Id = 1,
                Email = "furina@fontain.com",
                FirstName = "Furina",
                LastName = "Lady",
                Password = newUser.Password,
                IsAdmin = true
            };

            _userService.Setup(x => x.FindByEmail(user.Email)).Returns(Task.FromResult<User?>(existingUser));

            PublicUser? resUser = await _authService.Authenticate(user);

            Assert.Null(resUser);
        }

        [Test]
        public async Task Authenticate_ExistingUserWithCorrectPw_ReturnsUser()
        {
            string pw = "#Hydroarchon1";

            RegisterUser newUser = new RegisterUser()
            {
                Email = "furina@fontain.com",
                FirstName = "Furina",
                LastName = "Lady",
                Password = pw
            };

            LoginUser user = new LoginUser()
            {
                Email = "furina@fontain.com",
                Password = pw
            };

            _authService.HashPw(newUser);

            User existingUser = new User
            {
                Id = 325,
                Email = "furina@fontain.com",
                FirstName = "Furina",
                LastName = "Lady",
                Password = newUser.Password,
                IsAdmin = true
            };

            PublicUser expectedUser = new PublicUser
            {
                Id = 325,
                Email = "furina@fontain.com",
                FirstName = "Furina",
                LastName = "Lady",
                IsAdmin = true
            };

            _userService.Setup(x => x.FindByEmail(user.Email)).Returns(Task.FromResult<User?>(existingUser));

            PublicUser? resUser = await _authService.Authenticate(user);

            Util.AreEqualByJson(expectedUser, resUser);
        }
    }
}
