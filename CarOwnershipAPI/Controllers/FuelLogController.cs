using CarOwnershipAPI.DTOs.FuelLog;
using CarOwnershipAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarOwnershipAPI.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class FuelLogController : ControllerBase
{
    private readonly IFuelLogService _fuelLogService;
    
    public FuelLogController(IFuelLogService fuelLogService)
    {
        _fuelLogService = fuelLogService;
    }

    [HttpGet("all-fuel-logs")]
    public async Task<ActionResult<List<FuelLogResponseDto>>> GetAllFuelLogs(Guid vehicleId)
        => await _fuelLogService.GetFuelLogs(vehicleId);

    [HttpPost("add-fuel-log")]
    public async Task<ActionResult<FuelLogResponseDto>> AddFuelLog(FuelLogRequestDto request, Guid vehicleId)
        => await _fuelLogService.AddFuelLog(request, vehicleId);
}