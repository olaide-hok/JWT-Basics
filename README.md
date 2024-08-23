# JWT Basic

## Overview

This project demonstrates a simple implementation of JWT (JSON Web Token) for authentication in a Node.js application. The application has two primary routes:

1. **Dashboard Route**: A protected `GET` endpoint that can only be accessed when a user is logged in. When accessed with a valid JWT, secret information is provided, granting access to the dashboard page.

2. **Login/Register Route**: A `POST` endpoint where users log in by providing their username and password. If the credentials are valid, a JWT is generated and stored in the local storage by the frontend app. If the credentials are missing or invalid, a `400 Bad Request` error is returned.

## Features

-   **JWT Authentication**: Ensures that only authenticated users can access certain routes.
-   **Error Handling**: Returns appropriate error messages for invalid requests.
-   **User-specific Data**: Users can only access information that belongs to them.

## Packages Used

-   **dotenv**: Loads environment variables from a `.env` file into `process.env`.
-   **express**: A minimal and flexible Node.js web application framework.
-   **express-async-errors**: Simplifies error handling in asynchronous Express routes.
-   **http-status-codes**: Provides standard HTTP status codes and messages.
-   **jsonwebtoken**: Implements JWT authentication for securing routes.
-   **mongoose**: Provides a schema-based solution to model application data in MongoDB.

## Routes

### 1. `/api/v1/dashboard` (GET)

-   **Description**: Protected route that provides secret information if accessed with a valid JWT.
-   **Authentication**: Requires a valid JWT token.
-   **Response**: Secret info is provided if the user is authenticated.

### 2. `api/v1/login/register` (POST)

-   **Description**: Endpoint for user login and registration.
-   **Request**: Requires `username` and `password` in the request body.
-   **Response**:
    -   Returns a JWT token on successful authentication.
    -   Stores the token in local storage via the frontend.
    -   Returns a `400 Bad Request` error if credentials are missing or invalid.

## How It Works

1. **User Registration/Login**:

    - Users provide a `username` and `password`.
    - If valid, a JWT token is generated and returned to the user.
    - The frontend stores this token in local storage for subsequent requests.

2. **Accessing Protected Routes**:
    - Users must include the JWT token in the request header when accessing the `/dashboard` route.
    - If the token is valid, the user is granted access; otherwise, access is denied.

## Getting Started

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/olaide-hok/JWT-Basics.git
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Setup Environment Variables**:

-   Create a `.env` file in the root directory of your project.
-   Add the required environment variable `JWT_SECRET`

4. **Run Application**:

    ```bash
    npm start
    ```

5. **Access the API**

-   Use a tool like Postman or cURL to interact with the `/api/v1/login/register` and `/api/v1/dashboard` routes.

## Conclusion

This project is a basic demonstration of using JWT for securing routes in a Node.js application. It provides a simple but effective way to manage user authentication and protect sensitive routes.
