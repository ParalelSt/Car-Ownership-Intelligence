using CarOwnershipAPI.DTOs;

namespace CarOwnershipAPI.Services;

public interface IVehicleService
{
    Task<List<VehicleResponseDto>> GetVehicles(Guid userId);
    Task<VehicleResponseDto> GetCurrentVehicle(Guid userId);
    Task<VehicleResponseDto> AddVehicle(AddVehicleRequestDto addVehicle, Guid userId);
    Task<VehicleResponseDto> SetCurrentVehicle(Guid vehicleId, Guid userId);
    Task<List<VehicleResponseDto>> DeleteVehicle(Guid vehicleId, Guid userId);
}