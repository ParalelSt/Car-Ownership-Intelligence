namespace CarOwnershipAPI.DTOs.FuelLog;

public class FuelLogRequestDto
{
    public decimal KilometresDriven { get; set; }
    public decimal Litres { get; set; }
    public decimal PricePerLitre { get; set; }
    public decimal TotalCost { get; set; }
    public DateOnly Date { get; set; }
}