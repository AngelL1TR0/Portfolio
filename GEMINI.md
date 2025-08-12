# Gemini Project Context: Full-Stack Portfolio

## Project Overview

This is a full-stack web application designed as a personal portfolio. It now features a simplified .NET Web API backend that serves static project and user data, and an Angular single-page application (SPA) frontend that displays this information with a modern look using Angular Material.

-   **Backend:** .NET 9 Minimal API. It no longer uses a database; data is served directly from the application code.
-   **Frontend:** Angular 18. It features a clean, component-based structure with Angular Material for a modern UI/UX.

## Building and Running

The backend and frontend are separate projects and must be run concurrently.

### Backend (.NET API)

1.  **Navigate to the backend directory:**
    ```bash
    cd MyApp
    ```
2.  **Run the application:**
    ```bash
    dotnet run
    ```
    The API will be available at `http://localhost:5000` and `https://localhost:5001`.

### Frontend (Angular)

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies (first time only):**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    The frontend will be available at `http://localhost:4200`. It is configured to proxy API requests to the backend.

## Development Conventions

### Backend

-   **Architecture:** The backend follows the .NET Minimal API pattern, with endpoints and a static data service configured in `Program.cs`.
-   **Data:** Data is now hardcoded within the `Services/PortfolioDataService.cs` file. Models are located in the `Models/` directory.
-   **Configuration:** CORS is enabled in `Program.cs` to allow requests from the Angular frontend (`http://localhost:4200`).
-   **API Endpoints:**
    -   `GET /user`: Retrieves the single portfolio user.
    -   `GET /projects`: Retrieves a list of all portfolio projects.

### Frontend

-   **Structure:** Standard Angular CLI project structure. Reusable components and pages are located in `src/app/pages/`.
-   **Routing:** Client-side routes are defined in `src/app/app.routes.ts`.
-   **Services:** The `PortfolioService` (`src/app/portfolio.service.ts`) is responsible for all HTTP communication with the backend API.
-   **Styling:** Global styles are in `src/styles.scss`, with component-specific styles in their respective `.scss` files. Angular Material is used for UI components and theming.