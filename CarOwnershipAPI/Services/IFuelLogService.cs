using CarOwnershipAPI.DTOs.FuelLog;

namespace CarOwnershipAPI.Services;

public interface IFuelLogService
{
    Task<List<FuelLogResponseDto>> GetFuelLogs(Guid vehicleId);
    Task<FuelLogResponseDto> AddFuelLog(FuelLogRequestDto log, Guid vehicleId);
}