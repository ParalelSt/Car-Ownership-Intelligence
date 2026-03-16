using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.Entities;

public class Vehicle
{
    public Guid Id { get; set; }
    
    public required string Make { get; set; }
    
    public required string Model { get; set; }
    
    public int Year { get; set; }
    
    public string? Color { get; set; }
    
    public string? LicensePlate { get; set; }
    
    public FuelType FuelType { get; set; }
    
    public int OdometerValue { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;
    public ICollection<FuelLog> FuelLogs { get; set; } = [];
}