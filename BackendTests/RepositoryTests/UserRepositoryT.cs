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
                    Email = "totally@valid.com",
                    FirstName = "Johnson",
                    LastName = "Long",
                    Password = "blackCat"
                },
                new ()
                {
                    Email = "something@right.bs",
                    FirstName = "Jelly",
                    LastName = "Fish",
                    Password = "artifacto"
                },
                new ()
                {
                    Email = "marker123@free.net",
                    FirstName = "Isaac",
                    LastName = "Clarke",
                    Password = "usgishimura"
                },
                new ()
                {
                    Email = "tryingFor@you.com",
                    FirstName = "Yuki",
                    LastName = "Onna",
                    Password = "snowbutterfly"
                },
                new ()
                {
                    Email = "lastsamurai325@liamg.com",
                    FirstName = "Oda",
                    LastName = "Nobunaga",
                    Password = "harakiri"
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
    }
}