using System.Security.Claims;
using CarOwnershipAPI.DTOs;
using CarOwnershipAPI.Exceptions;
using CarOwnershipAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarOwnershipAPI.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class VehicleController : ControllerBase
{
    private readonly IVehicleService _vehicleService;
    
    public VehicleController(IVehicleService vehicleService)
    {
        _vehicleService = vehicleService;
    }

    private Guid GetUserId()
    {
        var claim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (claim == null)
            throw new UnauthorizedException("Invalid token");
        
        return Guid.Parse(claim);
    }

    [HttpGet("all-vehicles")]
    public async Task<ActionResult<List<VehicleResponseDto>>> GetVehicles()
    {
        var userId = GetUserId();
        var vehicles = await _vehicleService.GetVehicles(userId);
        return Ok(vehicles);
    }
    
    [HttpGet("current-vehicle")]
    public async Task<ActionResult<VehicleResponseDto>> GetCurrentVehicle()
    { 
        var userId = GetUserId();
        var vehicles = await _vehicleService.GetCurrentVehicle(userId);
        return Ok(vehicles);
    }

    [HttpPost("add-vehicle")]
    public async Task<ActionResult<VehicleResponseDto>> AddVehicle(AddVehicleRequestDto addVehicle)
    { 
        var userId = GetUserId();
        var vehicles = await _vehicleService.AddVehicle(addVehicle, userId);
        return Ok(vehicles);
    }

    [HttpPatch("set-current-vehicle/{vehicleId}")]
    public async Task<ActionResult<VehicleResponseDto>> SetCurrentVehicle(Guid vehicleId)
    { 
        var userId = GetUserId();
        var vehicles = await _vehicleService.SetCurrentVehicle(vehicleId, userId);
        return Ok(vehicles);
    }

    [HttpDelete("delete-vehicle/{vehicleId}")]
    public async Task<ActionResult<List<VehicleResponseDto>>> DeleteVehicle(Guid vehicleId)
    { 
        var userId = GetUserId();
        var vehicles = await _vehicleService.DeleteVehicle(vehicleId, userId);
        return Ok(vehicles);
    }
}
