using CarOwnershipAPI.Entities;

namespace CarOwnershipAPI.Services;

public interface ITokenService
{
    string GenerateAccessToken(User user);
}