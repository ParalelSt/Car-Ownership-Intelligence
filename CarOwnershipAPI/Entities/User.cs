using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.Entities;

public class User
{
    public Guid Id { get; set; }
    public required string Email { get; set; }
    public required string Username { get; set; }
    public required string PasswordHash { get; set; }
    public DateTime CreatedAt { get; set; }

    public ICollection<Vehicle> Vehicles { get; set; } = [];
    public Guid? CurrentVehicleId { get; set; }
    public Vehicle? CurrentVehicle { get; set; }
}