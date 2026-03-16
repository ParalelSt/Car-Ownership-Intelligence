using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.Entities;

public class User
{
    public Guid Id { get; set; }
    
    [Required]
    public string Email { get; set; }
    [Required]
    public string Username { get; set; }
    [Required]
    public string PasswordHash { get; set; }
    
    public DateTime CreatedAt { get; set; }

    public ICollection<Vehicle> Vehicles { get; set; } = [];
}