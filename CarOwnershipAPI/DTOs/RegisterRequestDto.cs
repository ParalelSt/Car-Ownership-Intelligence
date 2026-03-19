using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.DTOs;

public class RegisterRequestDto
{
    [EmailAddress]
    public required string Email { get; set; }
    public required string Username { get; set; }
    public required string Password { get; set; }
    public required string ConfirmPassword { get; set; }
}