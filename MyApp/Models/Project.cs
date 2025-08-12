using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
{
    // Renamed from Post to Project for clarity
    public class Project
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Content { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public bool IsPublished { get; set; } = false;
        
        public string? Url { get; set; } 

        // Foreign key
        public int UserId { get; set; }

        // Navigation property
        public virtual User User { get; set; } = null!;
    }
}