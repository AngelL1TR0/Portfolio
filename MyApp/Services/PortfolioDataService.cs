
using MyApp.Models;

namespace MyApp.Services
{
    // This service provides hardcoded portfolio data, removing the need for a database.
    public class PortfolioDataService
    {
        private readonly User _user;
        private readonly List<Project> _projects;

        public PortfolioDataService()
        {
            _user = new User
            {
                Id = 1,
                Name = "Ángel S.J.",
                Email = "angel@portfolio.com",
                CreatedAt = new DateTime(2024, 1, 1, 12, 0, 0, DateTimeKind.Utc),
                IsActive = true
            };

            _projects = new List<Project>
            {
                new Project
                {
                    Id = 1,
                    Title = "Portfolio Web Angular",
                    Content = "Aplicación web moderna para mostrar mis proyectos y contacto.",
                    UserId = 1,
                    CreatedAt = new DateTime(2024, 1, 2, 12, 0, 0, DateTimeKind.Utc),
                    IsPublished = true,
                    Url = "https://github.com/angelsj4/portfolio-angular"
                },
                new Project
                {
                    Id = 2,
                    Title = "API REST .NET",
                    Content = "Backend sencillo en .NET para gestionar datos del portfolio.",
                    UserId = 1,
                    CreatedAt = new DateTime(2024, 1, 3, 12, 0, 0, DateTimeKind.Utc),
                    IsPublished = true,
                    Url = "https://github.com/angelsj4/portfolio-dotnet"
                }
            };
        }

        public User GetUser() => _user;

        public List<Project> GetProjects() => _projects;
    }
}
