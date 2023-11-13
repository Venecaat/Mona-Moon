using AutoMapper;
using Backend.Services;
using Moq;
using Backend.AutoMapper;
using Backend.Dtos.User;
using Backend.Repositories;
using Backend.Database;
using Microsoft.EntityFrameworkCore;

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
    }
}
