Sweet Shop Management System

Description : A full-stack Sweet Shop Management System built with modern best practices, focusing on clean architecture, maintainable code, role-based access control, and a great user experience.

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
 
