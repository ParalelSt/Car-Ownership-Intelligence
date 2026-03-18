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

    public async Task<AuthResponseDto> Register(RegisterRequest request)
    {
        var existingUser = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (existingUser != null)
        {
            throw new CustomInvalidOperationException("Email already in use");
        }

        if (request.Password != request.ConfirmPassword)
        {
            throw new CustomInvalidOperationException("Passwords do not match");
        }

        var user = new User
        {
            Email = request.Email,
            Username = request.Username,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password)
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

    public async Task<AuthResponseDto> Login(LoginRequest request)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (user == null)
            throw new UnauthorizedException("Invalid credentials");

        if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
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