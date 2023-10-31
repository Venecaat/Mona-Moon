using Backend.Services;
using Moq;
using Backend.Controllers;
using AutoMapper;
using Backend.AutoMapper;
using Backend.Database;
using Backend.Repositories;
using Microsoft.EntityFrameworkCore;

namespace BackendTests.ControllerTests
{
    internal class UserControllerT
    {
        private Mock<UserService> _userService;
        private Mock<AuthService> _authService;
        private UserController _controller;

        [SetUp]
        public void Setup()
        {
            Environment.SetEnvironmentVariable("JWT_TOKEN_KEY", "this-is-a-test-key-for-unit-tests");

            MapperConfiguration mapperConfig = new MapperConfiguration(mc => mc.AddProfile(typeof(MapProfile)));
            IMapper mapper = mapperConfig.CreateMapper();

            Mock<MonaMoonDbContext> mockContext = new(new DbContextOptions<MonaMoonDbContext>());
            Mock<UserRepository> mockRepository = new Mock<UserRepository>(mockContext.Object);
            _userService = new Mock<UserService>(mockRepository.Object, mapper);
            _authService = new Mock<AuthService>(_userService.Object, mapper);

            _controller = new UserController(_userService.Object, _authService.Object);
        }
    }
}
