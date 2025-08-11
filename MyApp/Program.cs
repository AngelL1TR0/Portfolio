using Microsoft.EntityFrameworkCore;
using MyApp.Data;
using MyApp.Models;


var builder = WebApplication.CreateBuilder(args);

// Enable CORS for local development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add PostgreSQL database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowFrontend");
}


app.UseHttpsRedirection();

// Add a root endpoint
app.MapGet("/", () => new { 
    Message = "Welcome to MyApp API!", 
    Version = "1.0.0",
    Endpoints = new[] {
        "/users - Get all users",
        "/users/{id} - Get user by ID",
        "/posts - Get all posts",
        "/posts/{id} - Get post by ID",
        "/weatherforecast - Get weather forecast",
        "/swagger - API documentation",
        "/openapi/v1.json - OpenAPI specification"
    }
})
.WithName("GetRoot")
.WithSummary("API Information")
.WithDescription("Get basic information about the API and available endpoints")
.ExcludeFromDescription();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithSummary("Get weather forecast")
.WithDescription("Retrieves a 5-day weather forecast with random data")
.Produces<WeatherForecast[]>(StatusCodes.Status200OK);

// Users API endpoints

// Portfolio endpoints
app.MapGet("/user", async (AppDbContext db) =>
    await db.Users.FirstOrDefaultAsync())
.WithName("GetUser")
.WithSummary("Get portfolio user")
.WithDescription("Retrieves the portfolio owner user")
.Produces<User>(StatusCodes.Status200OK);

app.MapGet("/projects", async (AppDbContext db) =>
    await db.Projects.Include(p => p.User).ToListAsync())
.WithName("GetProjects")
.WithSummary("Get all projects")
.WithDescription("Retrieves all portfolio projects")
.Produces<List<Post>>(StatusCodes.Status200OK);

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
