using AutoMapper;
using Backend.AutoMapper;
using Backend.Database;
using Backend.Database.Models.User;
using Backend.Dtos.User;
using Backend.Repositories;
using Backend.Services;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace BackendTests.ServiceTests
{
    [TestFixture]
    public class UserServiceT
    {
        private IMapper mapper;
        private Mock<UserRepository> mockRepository;
        private UserService service;
        private List<User> users;

        [SetUp]
        public void Setup()
        {
            users = new()
            {
                new ()
                {
                    Id = 1,
                    Email = "totally@valid.com",
                    FirstName = "Johnson",
                    LastName = "Long",
                    Password = "blackCat",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 2,
                    Email = "something@right.bs",
                    FirstName = "Jelly",
                    LastName = "Fish",
                    Password = "artifacto",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 3,
                    Email = "marker123@free.net",
                    FirstName = "Isaac",
                    LastName = "Clarke",
                    Password = "usgishimura",
                    IsAdmin = true
                },
                new ()
                {
                    Id = 4,
                    Email = "tryingFor@you.com",
                    FirstName = "Yuki",
                    LastName = "Onna",
                    Password = "snowbutterfly",
                    IsAdmin = false
                },
                new ()
                {
                    Id = 5,
                    Email = "lastsamurai325@liamg.com",
                    FirstName = "Oda",
                    LastName = "Nobunaga",
                    Password = "harakiri",
                    IsAdmin = false
                }
            };

            Mock<MonaMoonDbContext> mockContext = new(new DbContextOptions<MonaMoonDbContext>());
            mockRepository = new Mock<UserRepository>(mockContext.Object);

            MapperConfiguration mapperConfig = new MapperConfiguration(mc => mc.AddProfile(typeof(MapProfile)));
            mapper = mapperConfig.CreateMapper();

            service = new UserService(mockRepository.Object, mapper);
        }

        [Test]
        public async Task GetAll_WhenCalled_ReturnsUsersList()
        {
            List<PublicUser> usersPublic = new()
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

            mockRepository.Setup(x => x.GetAll()).Returns(Task.FromResult(users));

            Util.AreEqualByJson(usersPublic, await service.GetAll());
        }

        [Test]
        public async Task Create_WhenCalled_ReturnsNewUser()
        {
            RegisterUser newUser = new ()
            {
                Email = "flashboi@addr.es",
                FirstName = "Flash",
                LastName = "Dones",
                Password = "hurryUp"
            };

            PublicUser expectedUser = new()
            {
                Id = 0,
                Email = "flashboi@addr.es",
                FirstName = "Flash",
                LastName = "Dones",
                IsAdmin = false
            };
            
            Util.AreEqualByJson(expectedUser, await service.Create(newUser));
        }

        [Test]
        public async Task Find_ExistingId_ReturnsUser()
        {
            User user = new()
            {
                Id = 4,
                Email = "tryingFor@you.com",
                FirstName = "Yuki",
                LastName = "Onna",
                Password = "snowbutterfly",
                IsAdmin = false
            };

            PublicUser expectedUser = new()
            {
                Id = 4,
                Email = "tryingFor@you.com",
                FirstName = "Yuki",
                LastName = "Onna",
                IsAdmin = false
            };

            mockRepository.Setup(x => x.Find(It.IsAny<int>())).Returns(Task.FromResult<User?>(user));

            Util.AreEqualByJson(expectedUser, await service.Find(4));
        }

        [Test]
        public async Task Find_NotExistingId_ReturnsNull()
        {
            User? user = null;

            mockRepository.Setup(x => x.Find(It.IsAny<int>())).Returns(Task.FromResult(user));

            Assert.Null(await service.Find(325));
        }

        [Test]
        public async Task FindByEmailDto_ExistingEmail_ReturnsUser()
        {
            User user = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "blackCat",
                IsAdmin = false
            };

            PublicUser expectedUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                IsAdmin = false
            };

            mockRepository.Setup(x => x.FindByEmail(It.IsAny<string>())).Returns(Task.FromResult<User?>(user));

            Util.AreEqualByJson(expectedUser, await service.FindByEmailDto("totally@valid.com"));
        }

        [Test]
        public async Task FindByEmailDto_NotExistingEmail_ReturnsUser()
        {
            User? user = null;

            mockRepository.Setup(x => x.FindByEmail(It.IsAny<string>())).Returns(Task.FromResult(user));

            Assert.Null(await service.FindByEmailDto("notexisting@eeemail.com"));
        }

        [Test]
        public async Task FindByEmail_ExistingEmail_ReturnsUser()
        {
            User expectedUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "blackCat",
                IsAdmin = false
            };

            mockRepository.Setup(x => x.FindByEmail(It.IsAny<string>())).Returns(Task.FromResult<User?>(expectedUser));

            Util.AreEqualByJson(expectedUser, await service.FindByEmail("totally@valid.com"));
        }

        [Test]
        public async Task FindByEmail_NotExistingEmail_ReturnsUser()
        {
            User? user = null;

            mockRepository.Setup(x => x.FindByEmail(It.IsAny<string>())).Returns(Task.FromResult(user));

            Assert.Null(await service.FindByEmail("notexisting@eeemail.com"));
        }

        [Test]
        public async Task IsUnique_ExistingEmail_ReturnsFalse()
        {
            mockRepository.Setup(x => x.IsUnique(It.IsAny<string>())).Returns(Task.FromResult(false));

            Assert.False(await service.IsUnique("lastsamurai325@liamg.com"));
        }

        [Test]
        public async Task IsUnique_NotExistingEmail_ReturnsTrue()
        {
            mockRepository.Setup(x => x.IsUnique(It.IsAny<string>())).Returns(Task.FromResult(true));

            Assert.True(await service.IsUnique("pongopongo@island.bt"));
        }

        [Test]
        public async Task Delete_ExistingId_RemovesUserFromDb()
        {
            User user = new()
            {
                Id = 3,
                Email = "marker123@free.net",
                FirstName = "Isaac",
                LastName = "Clarke",
                Password = "usgishimura",
                IsAdmin = true
            };

            mockRepository.Setup(x => x.Find(It.IsAny<int>())).Returns(Task.FromResult<User?>(user));
            mockRepository.Setup(x => x.Delete(It.IsAny<User>()))
                .Callback<User>(_ => users.Remove(users.First(u => u.Id == user.Id)));

            await service.Delete(3);

            Assert.That(users.Count, Is.EqualTo(4));
        }

        [Test]
        public async Task Delete_ExistingId_ReturnsTrue()
        {
            User user = new()
            {
                Id = 3,
                Email = "marker123@free.net",
                FirstName = "Isaac",
                LastName = "Clarke",
                Password = "usgishimura",
                IsAdmin = true
            };
            
            mockRepository.Setup(x => x.Find(It.IsAny<int>())).Returns(Task.FromResult<User?>(user));

            Assert.True(await service.Delete(3));
        }

        [Test]
        public async Task Delete_NotExistingId_ReturnsFalse()
        {
            User? user = null;

            mockRepository.Setup(x => x.Find(It.IsAny<int>())).Returns(Task.FromResult(user));

            Assert.False(await service.Delete(325));
        }

        [Test]
        public async Task Update_UpdatesUserInDb()
        {
            UpdateUser updateUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "veryBIGblackcat"
            };

            User expectedUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "veryBIGblackcat",
                IsAdmin = false
            };

            mockRepository.Setup(x => x.Update(It.IsAny<User>()))
                .Callback<User>(u =>
                {
                    users.Remove(users.First(ur => ur.Id == expectedUser.Id));
                    users.Add(u);
                });

            await service.Update(updateUser);

            Util.AreEqualByJson(expectedUser, users.First(u => u.Id == expectedUser.Id));
        }
        
        [Test]
        public async Task Update_ReturnsUser()
        {
            UpdateUser updateUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "veryBIGblackcat"
            };

            PublicUser expectedUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                IsAdmin = false
            };

            Util.AreEqualByJson(expectedUser, await service.Update(updateUser));
        }
    }
}