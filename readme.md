# Online Bookstore API

A RESTful backend API for managing an online bookstore system.

## Tech Stack

- **Framework**: Express.js
- **Language**: JavaScript
- **Package Manager**: NPM v10.9.2
- **Node Version**: 20.10.1 LTS
- **Architecture**: RESTful API
- **Design Pattern**: Layered Architecture
- **Database**: PostgreSQL
- **ORM**: Prisma Client

## Production URL [Takedown 31/05/2025]

- [https://online-bookstore.zainal-saputra.click](https://online-bookstore.zainal-saputra.click)

## Tools & Dependencies

- Prisma ORM
- AWS (EC2, Route53)
- jsonwebtoken (JWT)
- bcryptjs
- joi (schema validation)
- dotenv
- Nodemon (development)
- ESLint (code linting)
- PM2 (process management)
- Nginx (reverse proxy)
- Certbot (SSL/TLS)
- Crontab (auto SSL renewal)

## Deployment Infrastructure

- **Compute**: AWS EC2
- **DNS**: AWS Route53
- **SSL**: Certbot (HTTPS via Let's Encrypt)
- **Process Manager**: PM2
- **Database**: Neon Tech (PostgreSQL)

## Authentication & Authorization

- **POST /auth/register**  
  Register a new user with validation and hashed password. Returns JWT token.

- **POST /auth/login**  
  Log in with valid credentials. Returns JWT token.

- **Refresh Token**  
  Secure token renewal mechanism.

- **JWT Middleware**  
  Protects private routes from unauthorized access.

- **Security Enhancements**  
  Secured using Helmet and rate limiting to mitigate attacks.

## Book Management

- **GET /books**  
  Retrieve all books along with their authors.

- **GET /books/:id**  
  Retrieve detailed book information, including available product formats, stock, and warehouse data.

## Cart Management

- **GET /cart**  
  Retrieve the current user's shopping cart.

- **POST /cart/items**  
  Add items to the cart using `books_product_id`.

## Checkout & Invoicing

- **POST /checkout**  
  Process the checkout and generate an invoice from the cart.

- **GET /invoices**  
  Retrieve all invoices for the authenticated user.

## Database Management & Migrations

- Prisma Client (code-based schema and migrations)
- ERD generated with DBeaver 25.0.0:

![ERD](https://res.cloudinary.com/dlfpviz7i/image/upload/v1748710932/markdown/bookstore.png)

## Installation Guide

### Prerequisites

- Node.js v20.x.x
- PostgreSQL (local or Neon cloud)
- NPM

### Steps to Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/online-bookstore-api.git
cd online-bookstore-api

# 2. Install all dependencies
npm install

# 3. Create and configure the environment variables
cp .env.example .env
# → Edit .env file to match your database and JWT configurations

# 4. Generate the Prisma client
npx prisma generate

# 5. Run the database migrations
npx prisma migrate dev --name init

# 6. (Optional) Seed the database
npx prisma db seed

# 7. Start the development server
npm run start
