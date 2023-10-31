using Backend.Services;
using Moq;
using Backend.Controllers;
using AutoMapper;
using Backend.AutoMapper;
using Backend.Database;
using Backend.Repositories;
using Microsoft.EntityFrameworkCore;
using Backend.Database.Models.User;
using Backend.Dtos.User;
using Microsoft.AspNetCore.Mvc;

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
            Mock<UserRepository>  mockRepository = new Mock<UserRepository>(mockContext.Object);
            _userService = new Mock<UserService>(mockRepository.Object, mapper);
            _authService = new Mock<AuthService>(_userService.Object, mapper);

            _controller = new UserController(_userService.Object, _authService.Object);
        }

        [Test]
        public void GetAllUser_ReturnsHttpStatusCode200()
        {
            var result = _controller.GetAllUser();
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 200;

            Assert.That(expectedStatusCode, Is.EqualTo(statusCode));
        }

        [Test]
        public void GetAllUser_ReturnsUsersList()
        {
            List<PublicUser> expectedUsers = new()
            {
                new ()
                {
                    Id = 1,
                    Email = "totally@valid.com",
                    FirstName = "Johnson",
                    LastName = "Long",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 2,
                    Email = "something@right.bs",
                    FirstName = "Jelly",
                    LastName = "Fish",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 3,
                    Email = "marker123@free.net",
                    FirstName = "Isaac",
                    LastName = "Clarke",
                    IsAdmin = true
                },
                new ()
                {
                    Id = 4,
                    Email = "tryingFor@you.com",
                    FirstName = "Yuki",
                    LastName = "Onna",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 5,
                    Email = "lastsamurai325@liamg.com",
                    FirstName = "Oda",
                    LastName = "Nobunaga",
                    IsAdmin = false
                }
            };

            _userService.Setup(x => x.GetAll()).Returns(Task.FromResult(expectedUsers));

            var result = _controller.GetAllUser();
            var resultUsers = (result.Result.Result as ObjectResult)?.Value;

            Util.AreEqualByJson(expectedUsers, resultUsers);
        }

        [Test]
        public void GetAllUser_ReturnsHttpStatusCode400()
        {
            _userService.Setup(x => x.GetAll()).Throws(new ArgumentNullException());

            var result = _controller.GetAllUser();
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 400;

            Assert.That(expectedStatusCode, Is.EqualTo(statusCode));
        }
    }
}
