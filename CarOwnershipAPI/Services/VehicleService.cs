using CarOwnershipAPI.Data;
using CarOwnershipAPI.DTOs;
using CarOwnershipAPI.Entities;
using CarOwnershipAPI.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace CarOwnershipAPI.Services;

public class VehicleService: IVehicleService
{
    private readonly AppDbContext _db;
    
    public VehicleService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<List<VehicleResponseDto>> GetVehicles(Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);

        if (user == null)
            throw new NotFoundException("User not found");

        return await _db.Vehicles
            .Where(v => v.UserId == userId)
            .Select(v => new VehicleResponseDto
        {
            Id = v.Id,
            Make = v.Make,
            Model = v.Model,
            Year = v.Year,
            Color = v.Color,
            LicensePlate = v.LicensePlate,
            FuelType = v.FuelType,
            OdometerValue = v.OdometerValue,
            IsCurrentVehicle = v.Id == user.CurrentVehicleId
        }).ToListAsync();
    }

    public async Task<VehicleResponseDto> GetCurrentVehicle(Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);
        
        if (user == null)
            throw new NotFoundException("User not found");

        if (user.CurrentVehicleId == null)
            throw new NotFoundException("No current vehicle found");

        var vehicle = await _db.Vehicles.FindAsync(user.CurrentVehicleId);
        if (vehicle == null)
            throw new NotFoundException("No current vehicle found");

        return new VehicleResponseDto
        {
            Id = vehicle.Id,
            Make = vehicle.Make,
            Model = vehicle.Model,
            Year = vehicle.Year,
            Color = vehicle.Color,
            LicensePlate = vehicle.LicensePlate,
            FuelType = vehicle.FuelType,
            OdometerValue = vehicle.OdometerValue,
            IsCurrentVehicle = true
        };
    }

    public async Task<VehicleResponseDto> AddVehicle(AddVehicleRequestDto addVehicle, Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);
        if (user == null)
            throw new NotFoundException("User not found");
        
        var vehicle = new Vehicle
        {
            Make = addVehicle.Make,
            Model = addVehicle.Model,
            Year = addVehicle.Year,
            Color = addVehicle.Color,
            LicensePlate = addVehicle.LicensePlate,
            FuelType = addVehicle.FuelType,
            OdometerValue = addVehicle.OdometerValue,
            UserId = userId
        };

        _db.Vehicles.Add(vehicle);

        user.CurrentVehicleId ??= vehicle.Id;

        await _db.SaveChangesAsync();

        return new VehicleResponseDto
        {
            Id = vehicle.Id,
            Make = vehicle.Make,
            Model = vehicle.Model,
            Year = vehicle.Year,
            Color = vehicle.Color,
            LicensePlate = vehicle.LicensePlate,
            FuelType = vehicle.FuelType,
            OdometerValue = vehicle.OdometerValue,
            IsCurrentVehicle = vehicle.Id == user.CurrentVehicleId
        };
    }

    public async Task<VehicleResponseDto> SetCurrentVehicle(Guid vehicleId, Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);

        if (user == null)
            throw new NotFoundException("User not found");
        
        var vehicle = await _db.Vehicles.FirstOrDefaultAsync(v => v.Id == vehicleId && v.UserId == userId);
        
        if (vehicle == null)
            throw new NotFoundException("Vehicle not found");

        user.CurrentVehicleId = vehicleId;

        await _db.SaveChangesAsync();

        return new VehicleResponseDto
        {
            Id = vehicle.Id,
            Make = vehicle.Make,
            Model = vehicle.Model,
            Year = vehicle.Year,
            Color = vehicle.Color,
            LicensePlate = vehicle.LicensePlate,
            FuelType = vehicle.FuelType,
            OdometerValue = vehicle.OdometerValue,
            IsCurrentVehicle = true
        };
    }

    public async Task<List<VehicleResponseDto>> DeleteVehicle(Guid vehicleId, Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);

        if (user == null)
            throw new NotFoundException("User not found");

        var vehicle = await _db.Vehicles.FirstOrDefaultAsync(v => v.Id == vehicleId && v.UserId == userId);

        if (vehicle == null)
            throw new NotFoundException("Vehicle not found");

        _db.Remove(vehicle);
        await _db.SaveChangesAsync();
        
        return await _db.Vehicles
            .Where(v => v.UserId == userId)
            .Select(v => new VehicleResponseDto
            {
                Id = v.Id,
                Make = v.Make,
                Model = v.Model,
                Year = v.Year,
                Color = v.Color,
                LicensePlate = v.LicensePlate,
                FuelType = v.FuelType,
                OdometerValue = v.OdometerValue,
                IsCurrentVehicle = v.Id == user.CurrentVehicleId
            }).ToListAsync();
    }
}