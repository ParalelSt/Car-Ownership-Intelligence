using CarOwnershipAPI.Data;
using CarOwnershipAPI.DTOs;
using CarOwnershipAPI.Entities;
using CarOwnershipAPI.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace CarOwnershipAPI.Services;

public class AuthService: IAuthService
{
    private readonly AppDbContext _db;
    private readonly ITokenService _tokenService;

    public AuthService(AppDbContext db, ITokenService tokenService)
    {
        _db = db;
        _tokenService = tokenService;
    }

    public async Task<AuthResponseDto> Register(RegisterRequestDto requestDto)
    {
        var existingUser = await _db.Users.FirstOrDefaultAsync(u => u.Email == requestDto.Email);

        if (existingUser != null)
        {
            throw new CustomInvalidOperationException("Email already in use");
        }

        if (requestDto.Password != requestDto.ConfirmPassword)
        {
            throw new CustomInvalidOperationException("Passwords do not match");
        }

        var user = new User
        {
            Email = requestDto.Email,
            Username = requestDto.Username,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(requestDto.Password)
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        var token = _tokenService.GenerateAccessToken(user);

        return new AuthResponseDto
        {
            Token = token,
            Email = user.Email,
            Username = user.Username
        };
    }

    public async Task<AuthResponseDto> Login(LoginRequestDto requestDto)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == requestDto.Email);

        if (user == null)
            throw new UnauthorizedException("Invalid credentials");

        if (!BCrypt.Net.BCrypt.Verify(requestDto.Password, user.PasswordHash))
            throw new UnauthorizedException("Invalid credentials");

        var token = _tokenService.GenerateAccessToken(user);

        return new AuthResponseDto
        {
            Token = token,
            Email = user.Email,
            Username = user.Username
        };
    }
}