using Backend.AutoMapper;
using Backend.Database;
using Backend.Repositories;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

var mySpecificOrigins = "mySpecificOrigins";
string? frontendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL");

if (frontendUrl is null) throw new ArgumentNullException(null, "Missing FRONTEND_URL environment variable!");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: mySpecificOrigins,
        policy =>
        {
            policy.WithOrigins(frontendUrl)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        });
});

// Add services to the container.

builder.Services.AddControllers();

// Add dependencies
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

// Add AutoMapper
builder.Services.AddAutoMapper(typeof(MapProfile));

// Add DB Context
builder.Services.AddDbContext<MonaMoonDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MonaMoon")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(mySpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// For testing - Seed DB
DbInitializer.Seed(app);

app.Run();
