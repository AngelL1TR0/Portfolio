using Microsoft.EntityFrameworkCore;
using MyApp.Models;

namespace MyApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Projects { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Configure User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Email).IsRequired().HasMaxLength(255);
                entity.Property(e => e.CreatedAt).HasDefaultValueSql("NOW()");
            });

            // Configure Project entity (Post)
            modelBuilder.Entity<Post>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Content).IsRequired();
                entity.Property(e => e.CreatedAt).HasDefaultValueSql("NOW()");
                entity.Property(e => e.IsPublished).HasDefaultValue(true);
                entity.Property(e => e.Url).HasMaxLength(255);
                // Relationship
                entity.HasOne(p => p.User)
                      .WithMany(u => u.Posts)
                      .HasForeignKey(p => p.UserId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // Seed initial data (simple portfolio)
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = "Ángel S.J.",
                    Email = "angel@portfolio.com",
                    CreatedAt = new DateTime(2024, 1, 1, 12, 0, 0, DateTimeKind.Utc),
                    IsActive = true
                }
            );

            modelBuilder.Entity<Post>().HasData(
                new Post
                {
                    Id = 1,
                    Title = "Portfolio Web Angular",
                    Content = "Aplicación web moderna para mostrar mis proyectos y contacto.",
                    UserId = 1,
                    CreatedAt = new DateTime(2024, 1, 2, 12, 0, 0, DateTimeKind.Utc),
                    IsPublished = true,
                    Url = "https://github.com/angelsj4/portfolio-angular"
                },
                new Post
                {
                    Id = 2,
                    Title = "API REST .NET",
                    Content = "Backend sencillo en .NET para gestionar datos del portfolio.",
                    UserId = 1,
                    CreatedAt = new DateTime(2024, 1, 3, 12, 0, 0, DateTimeKind.Utc),
                    IsPublished = true,
                    Url = "https://github.com/angelsj4/portfolio-dotnet"
                }
            );
        }
    }
}
