﻿using Backend.Services;
using Moq;
using Backend.Controllers;
using AutoMapper;
using Backend.AutoMapper;
using Backend.Database;
using Backend.Repositories;
using Microsoft.EntityFrameworkCore;
using Backend.Dtos.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;

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

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
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

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void GetCurrentUser_ReturnsHttpStatusCode200()
        {
            PublicUser user = new PublicUser
            {
                Id = 325,
                Email = "test@email.com",
                FirstName = "Test",
                LastName = "User",
                IsAdmin = false
            };
            
            Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
            GenericIdentity mockIdentity = new GenericIdentity($"{user.Id}");
            GenericPrincipal mockPrincipal = new GenericPrincipal(mockIdentity, null);

            mockHttpContext.Setup(t => t.User).Returns(mockPrincipal);

            _controller.ControllerContext.HttpContext = mockHttpContext.Object;

            _userService.Setup(x => x.Find(user.Id)).Returns(Task.FromResult<PublicUser?>(user));

            var result = _controller.GetCurrentUser();
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 200;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void GetCurrentUser_ReturnsUser()
        {
            PublicUser expectedUser = new PublicUser
            {
                Id = 325,
                Email = "test@email.com",
                FirstName = "Test",
                LastName = "User",
                IsAdmin = false
            };

            Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
            GenericIdentity mockIdentity = new GenericIdentity($"{expectedUser.Id}");
            GenericPrincipal mockPrincipal = new GenericPrincipal(mockIdentity, null);

            mockHttpContext.Setup(t => t.User).Returns(mockPrincipal);

            _controller.ControllerContext.HttpContext = mockHttpContext.Object;

            _userService.Setup(x => x.Find(expectedUser.Id)).Returns(Task.FromResult<PublicUser?>(expectedUser));

            var result = _controller.GetCurrentUser();
            var resultUser = (result.Result.Result as ObjectResult)?.Value;
            
            Util.AreEqualByJson(expectedUser, resultUser);
        }

        [Test]
        public void GetCurrentUser_ReturnsHttpStatusCode400()
        {
            int id = 325;

            Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
            GenericIdentity mockIdentity = new GenericIdentity($"{id}");
            GenericPrincipal mockPrincipal = new GenericPrincipal(mockIdentity, null);

            mockHttpContext.Setup(t => t.User).Returns(mockPrincipal);

            _controller.ControllerContext.HttpContext = mockHttpContext.Object;

            _userService.Setup(x => x.Find(id)).Throws(new ArgumentNullException());

            var result = _controller.GetCurrentUser();
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 400;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void GetCurrentUser_ReturnsHttpStatusCode401()
        {
            int id = 325;

            Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();

            mockHttpContext.Setup(t => t.User.Identity.Name).Returns<string?>(null);

            _controller.ControllerContext.HttpContext = mockHttpContext.Object;
            
            var result = _controller.GetCurrentUser();
            var statusCode = (result.Result.Result as StatusCodeResult)?.StatusCode;

            int expectedStatusCode = 401;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void GetCurrentUser_ReturnsHttpStatusCode404()
        {
            int id = 325;

            Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
            GenericIdentity mockIdentity = new GenericIdentity($"{id}");
            GenericPrincipal mockPrincipal = new GenericPrincipal(mockIdentity, null);

            mockHttpContext.Setup(t => t.User).Returns(mockPrincipal);

            _controller.ControllerContext.HttpContext = mockHttpContext.Object;

            _userService.Setup(x => x.Find(id)).Returns(Task.FromResult<PublicUser?>(null));

            var result = _controller.GetCurrentUser();
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 404;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void DeleteUser_ReturnsHttpStatusCode200()
        {
            int id = 325;

            _userService.Setup(x => x.Delete(id)).Returns(Task.FromResult(true));

            var result = _controller.DeleteUser(id);
            var statusCode = (result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 200;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void DeleteUser_ReturnsHttpStatusCode400()
        {
            int id = 325;

            _userService.Setup(x => x.Delete(id)).Throws(new DbUpdateException());

            var result = _controller.DeleteUser(id);
            var statusCode = (result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 400;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void DeleteUser_ReturnsHttpStatusCode404()
        {
            int id = 325;

            _userService.Setup(x => x.Delete(id)).Returns(Task.FromResult(false));

            var result = _controller.DeleteUser(id);
            var statusCode = (result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 404;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void Register_ReturnsHttpStatusCode201()
        {
            RegisterUser newUser = new RegisterUser
            {
                Email = "something1@nothing.com",
                FirstName = "Spongebob",
                LastName = "Squarepants",
                Password = "fireunderwater"
            };

            PublicUser existingUser = new PublicUser
            {
                Id = 325,
                Email = "something1@nothing.com",
                FirstName = "Spongebob",
                LastName = "Squarepants",
                IsAdmin = false,
            };

            _authService.Setup(a => a.HashPw(newUser)).Returns(newUser);
            _userService.Setup(x => x.Create(newUser)).Returns(Task.FromResult(existingUser));

            var result = _controller.Register(newUser);
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 201;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void Register_ReturnsHttpStatusCode400()
        {
            RegisterUser newUser = new RegisterUser
            {
                Email = "something1@nothing.com",
                FirstName = "Spongebob",
                LastName = "Squarepants",
                Password = "fireunderwater"
            };

            _authService.Setup(a => a.HashPw(newUser)).Returns(newUser);
            _userService.Setup(x => x.Create(newUser)).Throws(new DbUpdateException());

            var result = _controller.Register(newUser);
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 400;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }

        [Test]
        public void Register_ReturnsHttpStatusCode409()
        {
            RegisterUser newUser = new RegisterUser
            {
                Email = "something1@nothing.com",
                FirstName = "Spongebob",
                LastName = "Squarepants",
                Password = "fireunderwater"
            };

            PublicUser existingUser = new PublicUser
            {
                Id = 325,
                Email = "something1@nothing.com",
                FirstName = "Spongebob",
                LastName = "Squarepants",
                IsAdmin = false,
            };

            _userService.Setup(x => x.FindByEmailDto(newUser.Email)).Returns(Task.FromResult<PublicUser?>(existingUser));

            var result = _controller.Register(newUser);
            var statusCode = (result.Result.Result as ObjectResult)?.StatusCode;

            int expectedStatusCode = 409;

            Assert.That(statusCode, Is.EqualTo(expectedStatusCode));
        }
    }
}
