# Database Setup Instructions

## PostgreSQL Setup

### 1. Install PostgreSQL (if not already installed)
```bash
# On CachyOS/Arch Linux
sudo pacman -S postgresql

# Start and enable PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Initialize PostgreSQL (first time only)
```bash
# Switch to postgres user and initialize database
sudo su - postgres
initdb -D /var/lib/postgres/data
exit
```

### 3. Create Database and User
```bash
# Connect to PostgreSQL as postgres user
sudo su - postgres
psql

# In PostgreSQL shell, create database and user:
CREATE DATABASE myappdb_dev;
CREATE USER myapp_user WITH PASSWORD 'secure_password_123';
GRANT ALL PRIVILEGES ON DATABASE myappdb_dev TO myapp_user;
\q
exit
```

### 4. Update Connection String
Update the connection string in `appsettings.Development.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=myappdb_dev;Username=myapp_user;Password=secure_password_123"
  }
}
```

### 5. Run Database Migration
```bash
# Apply the migration to create tables
dotnet ef database update

# Start the application
dotnet run
```

## Quick Setup Commands

If you want to use the default postgres user (easier for development):

```bash
# Set password for postgres user
sudo su - postgres
psql
\password postgres
# Enter your password (e.g., "postgres")
\q
exit

# Then update appsettings.Development.json:
# "DefaultConnection": "Host=localhost;Database=myappdb_dev;Username=postgres;Password=postgres"
```

## Test the Setup

Once the database is set up and the app is running, you can test:

1. **API Root**: http://localhost:5290/
2. **Swagger UI**: http://localhost:5290/swagger
3. **Users API**: http://localhost:5290/users
4. **Posts API**: http://localhost:5290/posts

The database will be seeded with initial data automatically!
