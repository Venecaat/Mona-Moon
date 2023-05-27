using Backend.Database;
using Microsoft.EntityFrameworkCore;
using Moq;
using Moq.EntityFrameworkCore;
using Backend.Database.Models.User;
using Backend.Repositories;

namespace BackendTests.RepositoryTests
{
    [TestFixture]
    public class UserRepositoryT
    {
        private Mock<MonaMoonDbContext> mockContext;
        private List<User> users;
        private UserRepository repository;

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

            mockContext = new(new DbContextOptions<MonaMoonDbContext>());
            mockContext.Setup(x => x.Users).ReturnsDbSet(users);

            repository = new UserRepository(mockContext.Object);
        }

        [Test]
        public async Task GetAll_WhenCalled_ReturnsUsersList()
        {
            Util.AreEqualByJson(users, await repository.GetAll());
        }

        [Test]
        public async Task Create_ReturnsNewUser()
        {
            User expectedUser = new ()
            {
                Id = 0,
                Email = "pinpon@yeah.com",
                FirstName = "Jenny",
                LastName = "Walsh",
                Password = "Gotcha1337",
                IsAdmin = false
            };

            User newUser = await repository.Create(expectedUser);

            Util.AreEqualByJson(expectedUser, newUser);
        }

        [Test]
        public async Task Create_AddsNewUserToDb()
        {
            User newUser = new()
            {
                Id = 0,
                Email = "electro@tenshukaku.ina",
                FirstName = "Raiden",
                LastName = "Shogun",
                Password = "eternity",
                IsAdmin = false
            };

            mockContext.Setup(x => x.Users.AddAsync(It.IsAny<User>(), default))
                .Callback<User, CancellationToken>((u, _) => { users.Add(u); });

            await repository.Create(newUser);

            Assert.That(users.Count, Is.EqualTo(6));
        }

        [Test]
        public async Task Create_AddAsyncAndSaveChangesAsyncMethodsCalledOnDb()
        {
            User newUser = new()
            {
                Id = 0,
                Email = "electro@tenshukaku.ina",
                FirstName = "Raiden",
                LastName = "Shogun",
                Password = "eternity",
                IsAdmin = false
            };

            await repository.Create(newUser);

            mockContext.Verify(x => x.Users.AddAsync(It.IsAny<User>(), It.IsAny<CancellationToken>()));
            mockContext.Verify(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()));
        }

        [Test]
        public async Task Find_ExistingId_ReturnsUser()
        {
            User expectedUser = new()
            {
                Id = 1,
                Email = "totally@valid.com",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "blackCat",
                IsAdmin = false,
            };

            Util.AreEqualByJson(expectedUser, await repository.Find(1));
        }

        [Test]
        public async Task Find_NotExistingId_ReturnsNull()
        {
            Assert.Null(await repository.Find(325));
        }

        [Test]
        public async Task FindByEmail_ExistingEmail_ReturnsUser()
        {
            User expectedUser = new()
            {
                Id = 5,
                Email = "lastsamurai325@liamg.com",
                FirstName = "Oda",
                LastName = "Nobunaga",
                Password = "harakiri",
                IsAdmin = false
            };

            Util.AreEqualByJson(expectedUser, await repository.FindByEmail("lastsamurai325@liamg.com"));
        }

        [Test]
        public async Task FindByEmail_NotExistingEmail_ReturnsNull()
        {
            Assert.Null(await repository.FindByEmail("notexisting@email.com"));
        }

        [Test]
        public async Task IsUnique_ExistingEmail_ReturnsFalse()
        {
            Assert.False(await repository.IsUnique("something@right.bs"));
        }

        [Test]
        public async Task IsUnique_NotExistingEmail_ReturnsTrue()
        {
            Assert.True(await repository.IsUnique("SomethinG@right.bs"));
        }

        [Test]
        public async Task Delete_RemovesUserFromDb()
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

            mockContext.Setup(x => x.Users.Remove(It.IsAny<User>()))
                .Callback<User>(_ => users.Remove(users.First(u => u.Id == user.Id)));

            await repository.Delete(user);

            Assert.That(users.Count, Is.EqualTo(4));
        }

        [Test]
        public async Task Delete_ReturnsTrue()
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

            Assert.True(await repository.Delete(user));
        }

        [Test]
        public async Task Delete_RemoveAndSaveChangesAsyncMethodsCalledOnDb()
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
            
            await repository.Delete(user);

            mockContext.Verify(x => x.Users.Remove(It.IsAny<User>()));
            mockContext.Verify(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()));
        }
    }
}