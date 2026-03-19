using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarOwnershipAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddCurrentVehicleToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CurrentVehicleId",
                table: "Users",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_CurrentVehicleId",
                table: "Users",
                column: "CurrentVehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Vehicles_CurrentVehicleId",
                table: "Users",
                column: "CurrentVehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Vehicles_CurrentVehicleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_CurrentVehicleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CurrentVehicleId",
                table: "Users");
        }
    }
}
