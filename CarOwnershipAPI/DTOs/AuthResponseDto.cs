namespace CarOwnershipAPI.DTOs;

public class AuthResponseDto
{
    public required string Token { get; set; }
    public required string Email { get; set; }
    public required string Username { get; set; }
}