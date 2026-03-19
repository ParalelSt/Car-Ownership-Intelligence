using CarOwnershipAPI.Entities;

namespace CarOwnershipAPI.DTOs;

public class VehicleResponseDto
{
    public Guid Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string? Color { get; set; }
    public string? LicensePlate { get; set; }
    public FuelType FuelType { get; set; }
    public int OdometerValue { get; set; }
    public bool IsCurrentVehicle { get; set; }
}