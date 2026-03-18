using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.DTOs;

public class RegisterRequest
{
    [EmailAddress]
    public required string Email { get; set; }
    public required string Username { get; set; }
    public required string Password { get; set; }
    public required string ConfirmPassword { get; set; }
}