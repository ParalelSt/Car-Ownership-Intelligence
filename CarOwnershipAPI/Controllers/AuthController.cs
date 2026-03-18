using CarOwnershipAPI.DTOs;
using CarOwnershipAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarOwnershipAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthResponseDto>> Register(RegisterRequest user)
        => await _authService.Register(user);

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponseDto>> Login(LoginRequest user)
        => await _authService.Login(user);
}