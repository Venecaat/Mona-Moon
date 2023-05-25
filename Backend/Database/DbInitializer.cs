using Backend.Database.Models.User;

namespace Backend.Database
{
    public static class DbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using var serviceScope = applicationBuilder.ApplicationServices.CreateScope();
            var context = serviceScope.ServiceProvider.GetService<MonaMoonDbContext>();

            if (context is null) return;

            context.Database.EnsureCreated();

            if (context.Users.Any()) return;

            User user1 = new ()
            {
                Email = "asdasd@smtg.com",
                FirstName = "Baba",
                LastName = "Ali",
                Password = "asd",
                IsAdmin = false
            };

            User user2 = new()
            {
                Email = "holy@hell.com",
                FirstName = "Creator",
                LastName = "The",
                Password = "asdasd",
                IsAdmin = true
            };

            User user3 = new()
            {
                Email = "validemail@try.net",
                FirstName = "Johnson",
                LastName = "Long",
                Password = "asd",
                IsAdmin = false
            };

            context.Users.AddRange(user1, user2, user3);
            context.SaveChanges();
        }
    }
}
