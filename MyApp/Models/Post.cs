using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
{
    public class Post
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Content { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
    public DateTime? UpdatedAt { get; set; }
    public bool IsPublished { get; set; } = false;
    public string? Url { get; set; } // Enlace al proyecto (opcional)
    // Foreign key
    public int UserId { get; set; }
    // Navigation property
    public virtual User User { get; set; } = null!;
    }
}
