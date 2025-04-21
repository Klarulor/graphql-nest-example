# Graphql landmarks example

## Installation
1. [NodeJS](https://nodejs.org/en)
2. Execute command in path `npm install`

## Run
```
npm run start
```

# Application Features

## 1. **User Authentication and Registration**
- **User Registration**:
    - Users can create a new account by providing a **username**, **email**, and **password**.
    - The password is securely hashed using **argon2** for storage.

- **Authentication (Login)**:
    - Users can log in by providing their **username** and **password**.
    - Upon successful login, a **JWT** token is generated and returned, which is used for authorizing subsequent requests.

- **Protected Endpoints**:
    - All protected endpoints require the submission of a **JWT token** to access them. This ensures data security and prevents unauthorized access.

- **Implementation via GraphQL**:
    - The `login` and `register` operations are implemented as **GraphQL mutations**. The response contains the access token (`access_token`), which is used for further requests.

## 2. **User Management**
- **View All Users**:
    - An administrator or authenticated user can query a list of all users in the system.

- **Create a New User**:
    - Through a GraphQL mutation, an authorized user can create a new user by providing necessary details (e.g., username, email, password).

- **Update User Information**:
    - Authorized users can update their own information or admin users can modify user data.

- **Delete a User**:
    - Users can be deleted via a GraphQL mutation, with access control to ensure only admins can delete other users.

## 3. **Landmark Management**
- **Get All Landmarks**:
    - Users can query a list of landmarks, including their name, description, and associated country.

- **Create a New Landmark**:
    - Authorized users (such as admins) can create new landmarks by providing details like name, description, geographical location, and country.

- **Update Landmark**:
    - Admins or authorized users can update the details of existing landmarks.

- **Delete Landmark**:
    - Landmarks can be deleted by authorized users (admins).

- **Filtered Queries**:
    - The application allows filtering landmarks based on different criteria, such as geographical coordinates or country.
    - Users can filter landmarks by a specific country, or based on a range of values (e.g., price, area).

## 4. **GraphQL API for Efficient Data Access**
- The application utilizes **GraphQL** for flexible and efficient data querying.
    - **Queries**:
        - Users can query for data like users, landmarks, and other resources in a structured format.
    - **Mutations**:
        - Operations like creating, updating, and deleting entities are handled through GraphQL mutations.

- **Security**:
    - The API uses **JWT** for authentication and authorization. Only authenticated users can access certain protected operations.

## 5. **File Handling (Photos)**
- **Add Photos to Landmarks**:
    - Users can upload and associate photos with landmarks.

- **View Landmark Photos**:
    - Each landmark can have multiple associated photos that can be queried through GraphQL.

## 6. **API Documentation**
- The application is equipped with **Swagger** for API documentation, which allows users to interactively explore and test the GraphQL endpoints.

## 7. **Environment Configuration**
- **Environment Variables**:
    - Sensitive information like the **JWT secret**, **database connection details**, and other environment-specific variables are stored in **`.env`** files and accessed via the `@nestjs/config` module.

## 8. **Database Integration**
- The application uses **TypeORM** with **MySQL** for database integration.
    - Entities like `User`, `Landmark`, and `Photo` are defined and managed using TypeORM.
    - **Seeding** and **migrations** are handled to manage database schema changes.

## 9. **Error Handling and Validation**
- The application leverages **class-validator** for input validation and provides structured error messages in case of invalid input.
- Errors are handled gracefully, and the user is notified of any issues with clear error messages.

---

## Key Technologies Used:
- **NestJS**: The main framework used for building the backend.
- **GraphQL**: For flexible and efficient querying and mutation of data.
- **JWT Authentication**: For secure user authentication and authorization.
- **TypeORM**: For database interaction and entity management.
- **Swagger**: For auto-generating API documentation.
- **MySQL**: For storing user and landmark data.
- **TypeScript**: The language used for building the backend application.
- **argon2**: For password hashing and security.
- **class-validator** and **class-transformer**: For data validation and transformation.
