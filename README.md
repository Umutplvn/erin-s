# Erin's Restaurant — Full-Stack Reservation & Administration Platform (`erin-s`)

A full-stack restaurant table reservation and administration web application built with **Node.js, Express, MongoDB (Mongoose), and React (Redux Toolkit + Material UI)**. It supports online table bookings with party-size validation, automated QR code pass generation, email confirmations via Nodemailer, scheduled cleanup of past reservations via `node-cron`, and role-based administrator management.

## Who It's For
- Independent restaurants and hospitality venues seeking a self-hosted table reservation system with QR-code booking confirmations and an administrative back-office API.

## Tech Stack
### Backend (`backend/`)
- **Runtime & Framework:** Node.js, Express (`^4.21.2`), `express-async-errors`
- **Database & ODM:** MongoDB, Mongoose (`^8.9.5`)
- **Authentication & Security:** Token & JWT authentication (`jsonwebtoken`), PBKDF2-SHA512 password hashing (`node:crypto`), `cors`
- **Notifications & Scheduling:** `nodemailer` (HTML confirmation emails with embedded QR codes), `node-cron` (daily cleanup of expired reservations)
- **API Documentation:** Swagger / OpenAPI (`backend/src/configs/swagger.json`)

### Frontend (`frontend/`)
- **Framework:** React 18 (`react`, `react-dom`, `react-router-dom` v6)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **UI Library:** Material UI (`@mui/material`, `@emotion/react`, `@emotion/styled`), `react-toastify`
- **HTTP Client:** Axios (`axios`)

## Project Structure
```text
erin-s/
├── backend/
│   ├── src/
│   │   ├── configs/        # MongoDB connection & Swagger specification
│   │   ├── controllers/    # Auth, Admin, Token, and Reservation controllers
│   │   ├── cron/           # Scheduled cron jobs (deletePastReservations)
│   │   ├── helpers/        # PBKDF2 password encryption & Nodemailer HTML email helper
│   │   ├── middlewares/    # Authentication & search/sort/pagination middleware
│   │   ├── models/         # Mongoose schemas (Admin, Reservation, Token)
│   │   ├── roots/          # Express route definitions (/admin, /token, /reservation)
│   │   └── errorHandler.js # Centralized Express error handler
│   ├── test/               # Automated unit tests (Node.js test runner)
│   ├── .env.example        # Backend environment variable template
│   ├── index.js            # Express application entry point
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/            # Redux store configuration
│   │   ├── helper/         # Toast notification helpers
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example        # Frontend environment variable template
│   └── package.json
├── LICENSE                 # MIT License
└── ROADMAP.md              # Planned 25+ hour development roadmap
```

## Getting Started

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- MongoDB instance (local or MongoDB Atlas)

### 1. Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and SMTP credentials
npm install
node index.js
```

### 2. Frontend Setup
```bash
cd frontend
cp .env.example .env
npm install
npm start
```

### Running Tests
```bash
cd backend
npm test
```

## Planned Work & Roadmap
See [ROADMAP.md](./ROADMAP.md) for the full 25+ hour development roadmap, including:
- Customer reservation wizard & real-time slot capacity checking in React/MUI
- Admin reservation management portal & QR code check-in scanner
- Request validation, rate limiting, and atomic capacity enforcement
- Expanded unit/integration test coverage and CI workflow

## License
Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.
