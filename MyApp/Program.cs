using MyApp.Models;
using MyApp.Services; // Import the new service

var builder = WebApplication.CreateBuilder(args);

// Enable CORS for local development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the new data service as a singleton
builder.Services.AddSingleton<PortfolioDataService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowFrontend");
}

app.UseHttpsRedirection();

// --- API Endpoints ---

app.MapGet("/", () => new { 
    Message = "Welcome to the simplified MyApp API!", 
    Version = "2.0.0"
})
.WithSummary("API Information");

// Portfolio endpoints using the new service
app.MapGet("/user", (PortfolioDataService service) => service.GetUser())
    .WithName("GetUser")
    .WithSummary("Get portfolio user")
    .Produces<User>();

app.MapGet("/projects", (PortfolioDataService service) => service.GetProjects())
    .WithName("GetProjects")
    .WithSummary("Get all projects")
    .Produces<List<Project>>();

app.Run();