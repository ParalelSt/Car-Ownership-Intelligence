using CarOwnershipAPI.DTOs;

namespace CarOwnershipAPI.Services;

public interface IAuthService
{
    Task<AuthResponseDto> Register(RegisterRequest request);
    Task<AuthResponseDto> Login(LoginRequest request);
}