using CarOwnershipAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarOwnershipAPI.Data;

public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options):
        base(options) { }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Vehicle> Vehicles { get; set; }
    public DbSet<FuelLog> FuelLogs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Vehicle>().Property(v => v.FuelType).HasConversion<string>();
        modelBuilder.Entity<User>().HasOne(u => u.CurrentVehicle).WithMany().HasForeignKey(u => u.CurrentVehicleId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}