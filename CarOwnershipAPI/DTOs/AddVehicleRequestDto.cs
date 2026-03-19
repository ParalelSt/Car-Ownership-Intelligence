using CarOwnershipAPI.Entities;

namespace CarOwnershipAPI.DTOs;

public class AddVehicleRequestDto
{
    public required string Make { get; set; }
    public required string Model { get; set; }
    public required int Year { get; set; }
    public string? Color { get; set; }
    public string? LicensePlate { get; set; }
    public required FuelType FuelType { get; set; }
    public int OdometerValue { get; set; }
}