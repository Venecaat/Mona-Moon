using System.Text;
using Backend.AutoMapper;
using Backend.Database;
using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

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
builder.Services.AddScoped<IAuthService, AuthService>();

// Add AutoMapper
builder.Services.AddAutoMapper(typeof(MapProfile));

// Add DB Context
builder.Services.AddDbContext<MonaMoonDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MonaMoon")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Authentication scheme
string? jwtTokenKey = Environment.GetEnvironmentVariable("JWT_TOKEN_KEY");

if (jwtTokenKey is null) throw new ArgumentNullException(null, "Missing JWT_TOKEN_KEY environment variable!");

var jwtKey = Encoding.UTF8.GetBytes(jwtTokenKey);
builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt =>
{
    opt.RequireHttpsMetadata = false;
    opt.SaveToken = true;
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(jwtKey),
        ValidateIssuer = false,
        ValidateAudience = false
    };
    opt.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            context.Token = context.Request.Cookies["jwt"];
            return Task.CompletedTask;
        }
    };
});

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
