Sweet Shop Management System

Description : 
-A full-stack Sweet Shop Management System built with modern best practices, focusing on clean architecture, maintainable code, role-based access control, and a great user experience
- Followed Test Driven Development.
- implemented test cases first, then, after successful test cases passed, refactored business logic for production readiness.
- Written a reusable function and used descriptive naming conventions for functions, variables, etc.

Git & GitHub Best Practices (flow of working) -
i. Take a pull of the development branch & create a new branch from the development branch.
ii. Then do functionality, test on the developer side with edge cases.
iii. Then git add, commit.
iv. Take pull of base branch (development).
v. push code on the current branch and create a pull request to the base branch, i.e., development branch (review and merge to development).

Local Setup & Installation Guide -
(This project consists of two separate applications)
- Backend → Node.js + Express + Prisma + PostgreSQL
- Frontend → React + TypeScript + Tailwind CSS

Steps to run locally -

- Clone the project.
- run - 'npm install' to install dependencies for frontend and backend.

1. Prerequisites -
- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- PostgreSQL (v13+)
- Git

2. Environment Variables -
- DATABASE_URL="postgresql://<username>:<password>@localhost:5432/sweet_shop"
- JWT_SECRET="your_jwt_secret"
- PORT=3000

3. Database creation - 
- Login to plsql - psql -U postgres.
- Create database - (cmd) = CREATE DATABASE sweet_shop;
- Run Prisma Migrations - (cmd) = npx prisma migrate dev

4. Start Backend Server - npm run dev
5. Start Frontend - npm run dev

6. cd backend > npm test

Features - 
1. Authentication & Authorization
 - User Registration & Login
 - JWT-based authentication
 - Role-based access (USER, ADMIN)
 - Protected & Public routes
 - Secure password hashing

2. User Functionality
- View all available sweets
- Search sweets by name
- Filter sweets by category
- Purchase sweets (quantity-safe)
- Purchase button disabled when stock is 0

3. Admin Functionality
- Add new sweets
- Edit existing sweets
- Delete sweets
- Admin-only UI controls
- Modal-based Add/Edit forms
- Real-time UI updates after actions

4. UI / UX
- Responsive design (mobile & desktop)
- Clean and consistent styling with Tailwind CSS
- Toast notifications for user feedback
- Reusable components & modal forms

Tech Stack -
1. Frontend
- React + TypeScript
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

2. Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt

Testing -
- Jest
- Supertest

Architecture (MVC-based architecture) -
- Controller → Handles HTTP requests & responses
- Service → Business logic
- Repository → Database access (Prisma)
- Middleware → Auth, role checks, error handling

My AI Usage -
1. Architecture & Planning
- To validate backend architecture decisions such as MVC layering, service–repository separation, and role-based access control.
- To reason the concurrency handling during the purchase flow.

2. Backend Development
- To clarify Prisma usage patterns (filters, schema design).
- To improve error handling, validation, and maintainable service logic.
- To implement Test Driven Development (TDD).

3. Frontend Development
- To refine React component structure for better readability and reuse.
- To generate boilerplate code for components.
- To implement features like role-based UI rendering and protected/public routes.
- Occasionally, to improve UX decisions (disabled buttons, validation messages, loaders, and conditional rendering).

4. Testing & Debugging
- To understand failing test cases and improve test isolation.
- To debug issues by reasoning through logs and execution flow rather than guessing.

5. Code Quality & Maintainability
- To refactor code into cleaner, more readable, and reusable patterns.
- To ensure naming conventions, separation of concerns, and consistency across the project.

 Screenshorts - 

 Login page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20002754.png)

 Signup page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20002810.png)

 User page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014131.png)

 Admin page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014212.png)

 Sweet add page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014232.png)

 Sweet add page - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014247.png)
 
 Admin page with disabled purchase button - 
 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014327.png)

 Mobile View of pages - 

 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014431.png)

 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014441.png)

 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014354.png)

 ![image alt](https://github.com/ShashikantShirsath/sweet-shop-management-system/blob/main/Screenshot%202025-12-15%20014412.png)




