using System.ComponentModel.DataAnnotations;

namespace CarOwnershipAPI.DTOs;

public class LoginRequestDto
{
    [EmailAddress]
    public required string Email { get; set; }
    public required string Password { get; set; }
}