using CarOwnershipAPI.DTOs;

namespace CarOwnershipAPI.Services;

public interface IAuthService
{
    Task<AuthResponseDto> Register(RegisterRequestDto requestDto);
    Task<AuthResponseDto> Login(LoginRequestDto requestDto);
}