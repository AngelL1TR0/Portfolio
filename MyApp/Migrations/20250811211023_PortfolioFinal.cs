using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyApp.Migrations
{
    /// <inheritdoc />
    public partial class PortfolioFinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Users_UserId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Users_Email",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Posts",
                table: "Posts");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.RenameTable(
                name: "Posts",
                newName: "Projects");

            migrationBuilder.RenameIndex(
                name: "IX_Posts_UserId",
                table: "Projects",
                newName: "IX_Projects_UserId");

            migrationBuilder.AlterColumn<bool>(
                name: "IsPublished",
                table: "Projects",
                type: "boolean",
                nullable: false,
                defaultValue: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "Projects",
                type: "character varying(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Projects",
                table: "Projects",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "CreatedAt", "Title", "Url" },
                values: new object[] { "Aplicación web moderna para mostrar mis proyectos y contacto.", new DateTime(2024, 1, 2, 12, 0, 0, 0, DateTimeKind.Utc), "Portfolio Web Angular", "https://github.com/angelsj4/portfolio-angular" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Content", "CreatedAt", "Title", "Url" },
                values: new object[] { "Backend sencillo en .NET para gestionar datos del portfolio.", new DateTime(2024, 1, 3, 12, 0, 0, 0, DateTimeKind.Utc), "API REST .NET", "https://github.com/angelsj4/portfolio-dotnet" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "Email", "Name" },
                values: new object[] { new DateTime(2024, 1, 1, 12, 0, 0, 0, DateTimeKind.Utc), "angel@portfolio.com", "Ángel S.J." });

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Users_UserId",
                table: "Projects",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Users_UserId",
                table: "Projects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Projects",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "Projects");

            migrationBuilder.RenameTable(
                name: "Projects",
                newName: "Posts");

            migrationBuilder.RenameIndex(
                name: "IX_Projects_UserId",
                table: "Posts",
                newName: "IX_Posts_UserId");

            migrationBuilder.AlterColumn<bool>(
                name: "IsPublished",
                table: "Posts",
                type: "boolean",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldDefaultValue: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Posts",
                table: "Posts",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "CreatedAt", "Title" },
                values: new object[] { "This is the first post in our application. Welcome aboard!", new DateTime(2025, 8, 11, 20, 34, 26, 763, DateTimeKind.Utc).AddTicks(2707), "Welcome to MyApp!" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Content", "CreatedAt", "Title" },
                values: new object[] { "Here are some tips to get started with the application...", new DateTime(2025, 8, 11, 20, 34, 26, 763, DateTimeKind.Utc).AddTicks(4336), "Getting Started" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "Email", "Name" },
                values: new object[] { new DateTime(2025, 8, 11, 20, 34, 26, 760, DateTimeKind.Utc).AddTicks(9907), "admin@myapp.com", "Admin User" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "IsActive", "Name" },
                values: new object[] { 2, new DateTime(2025, 8, 11, 20, 34, 26, 761, DateTimeKind.Utc).AddTicks(1396), "test@myapp.com", true, "Test User" });

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Users_UserId",
                table: "Posts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
