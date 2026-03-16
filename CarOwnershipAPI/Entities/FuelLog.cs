namespace CarOwnershipAPI.Entities;

public class FuelLog
{
    public Guid Id { get; set; }
    public decimal KilometresDriven { get; set; }
    public decimal Litres { get; set; }
    public decimal PricePerLitre { get; set; }
    public decimal TotalCost { get; set; }
    public DateOnly Date { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public Guid VehicleId { get; set; }
    public Vehicle Vehicle { get; set; } = null!;
}