using CarOwnershipAPI.Data;
using CarOwnershipAPI.DTOs.FuelLog;
using CarOwnershipAPI.Entities;
using CarOwnershipAPI.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace CarOwnershipAPI.Services;

public class FuelLogService: IFuelLogService
{
    private readonly AppDbContext _db;

    public FuelLogService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<List<FuelLogResponseDto>> GetFuelLogs(Guid vehicleId)
    {
        var currentVehicle = await _db.Vehicles.FindAsync(vehicleId);

        if (currentVehicle == null)
            throw new NotFoundException("No current vehicle. Add a vehicle to proceed");

        return await _db.FuelLogs.Where(l => l.VehicleId == vehicleId).Select(l => new FuelLogResponseDto
        {
            Id = l.Id,
            KilometresDriven = l.KilometresDriven,
            Litres = l.Litres,
            PricePerLitre = l.PricePerLitre,
            TotalCost = l.TotalCost,
            Date = l.Date,
            CreatedAt = l.CreatedAt
        }).ToListAsync();
    }

    public async Task<FuelLogResponseDto> AddFuelLog(FuelLogRequestDto log, Guid vehicleId)
    {
        var currentVehicle = await _db.Vehicles.FindAsync(vehicleId);
        
        if (currentVehicle == null)
            throw new NotFoundException("No current vehicle. Add a vehicle to proceed");

        var fuelLog = new FuelLog
        {
            KilometresDriven = log.KilometresDriven,
            Litres = log.Litres,
            PricePerLitre = log.PricePerLitre,
            TotalCost = log.TotalCost,
            Date = log.Date,
            VehicleId = vehicleId
        };

        _db.Add(fuelLog);
        await _db.SaveChangesAsync();

        return new FuelLogResponseDto
        {
            Id = fuelLog.Id,
            KilometresDriven = fuelLog.KilometresDriven,
            Litres = fuelLog.Litres,
            PricePerLitre = fuelLog.PricePerLitre,
            TotalCost = fuelLog.TotalCost,
            Date = fuelLog.Date,
            CreatedAt = fuelLog.CreatedAt
        };
    }
}