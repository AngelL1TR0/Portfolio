# MyApp - .NET Web API with PostgreSQL

A modern ASP.NET Core Web API application with PostgreSQL database integration, built using .NET 9.0 and minimal APIs.

## 🚀 Features

- **ASP.NET Core 9.0** with minimal APIs
- **PostgreSQL** database with Entity Framework Core
- **Swagger/OpenAPI** documentation
- **Database migrations** with Entity Framework
- **Seeded data** for development
- **CRUD operations** for Users and Posts
- **Relationship modeling** (Users → Posts)

## 📁 Project Structure

```
MyApp/
├── Controllers/          # (Empty - using minimal APIs)
├── Data/
│   └── AppDbContext.cs   # Entity Framework DbContext
├── Migrations/           # EF Core migrations
├── Models/
│   ├── User.cs          # User entity model
│   └── Post.cs          # Post entity model
├── Services/            # (Empty - ready for business logic)
├── Program.cs           # Application entry point & API configuration
├── appsettings.json     # Configuration settings
├── MyApp.http          # HTTP test requests
├── setup-database.md   # Database setup instructions
└── README.md           # This file
```

## 🛠️ Technologies Used

- **.NET 9.0**
- **ASP.NET Core Web API**
- **Entity Framework Core 9.0**
- **Npgsql** (PostgreSQL provider for EF Core)
- **Swashbuckle** (Swagger/OpenAPI)
- **PostgreSQL**

## 📊 Database Schema

### Users Table
- `Id` (Primary Key)
- `Name` (Required, 100 chars max)
- `Email` (Required, Unique, 255 chars max)
- `CreatedAt` (Timestamp)
- `IsActive` (Boolean)

### Posts Table
- `Id` (Primary Key)
- `Title` (Required, 200 chars max)
- `Content` (Required, Text)
- `CreatedAt` (Timestamp)
- `UpdatedAt` (Nullable Timestamp)
- `IsPublished` (Boolean)
- `UserId` (Foreign Key to Users)

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/swagger` | Swagger UI documentation |
| GET | `/users` | Get all users with their posts |
| GET | `/users/{id}` | Get specific user with posts |
| POST | `/users` | Create new user |
| GET | `/posts` | Get all posts with authors |
| GET | `/posts/{id}` | Get specific post with author |
| POST | `/posts` | Create new post |
| GET | `/weatherforecast` | Sample weather data |

## 🚦 Getting Started

### Prerequisites
- .NET 9.0 SDK
- PostgreSQL server

### 1. Set up PostgreSQL
Follow the instructions in `setup-database.md` to:
- Install PostgreSQL
- Create database and user
- Update connection string

### 2. Run Database Migrations
```bash
# Apply migrations to create database schema
dotnet ef database update
```

### 3. Start the Application
```bash
# Run the API
dotnet run

# Or run with hot reload during development
dotnet watch run
```

### 4. Test the API

The application will be available at:
- **API**: http://localhost:5290/
- **Swagger UI**: http://localhost:5290/swagger
- **OpenAPI spec**: http://localhost:5290/openapi/v1.json

Use the `MyApp.http` file to test API endpoints directly in VS Code.

## 🔧 NSwag Integration

Generate API clients using NSwag:

```bash
# Generate C# client
nswag openapi2csclient /input:http://localhost:5290/openapi/v1.json /output:ApiClient.cs

# Generate TypeScript client
nswag openapi2tsclient /input:http://localhost:5290/openapi/v1.json /output:api-client.ts
```

## 📝 Sample Data

The database is automatically seeded with:
- 2 sample users (Admin User, Test User)
- 2 sample posts

## 🛠️ Development Tools Installed

Global tools available:
- `nswag` - API client generation
- `dotnet-ef` - Entity Framework CLI
- `dotnet-aspnet-codegenerator` - Scaffolding tool

## 🔜 Next Steps

Consider adding:
- **Authentication & Authorization** (JWT, Identity)
- **Validation** (FluentValidation)
- **Logging** (Serilog)
- **Caching** (Redis, Memory Cache)
- **Unit Tests** (xUnit, Moq)
- **API Versioning**
- **Rate Limiting**
- **Health Checks**
- **Docker containerization**

## 📚 Learn More

- [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core/)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- [NSwag Documentation](https://github.com/RicoSuter/NSwag)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
