# Erin's Restaurant Reservation & Admin System (`erin-s`) — Engineering Roadmap (25+ Hours Planned Work)

This document outlines the planned engineering backlog and upcoming feature development for **Erin's Restaurant** (`erin-s`).

## 1. Frontend Booking Flow & Interactive Table Availability (~8 hours)
- [ ] Build multi-step customer reservation booking wizard in `frontend/src/` using Material UI and Redux Toolkit.
- [ ] Implement real-time time-slot availability check against backend capacity limits per date/timeSlot.
- [ ] Render interactive QR Code confirmation pass with downloadable calendar invite (`.ics`).

## 2. Admin Dashboard & QR Check-In Scanner (~6 hours)
- [ ] Implement protected Admin Portal (`/admin/dashboard`) for confirmed administrators (`isConfirmedAdmin`).
- [ ] Add reservation calendar view, guest party filtering, and status transitions (`confirmed`, `seated`, `cancelled`, `no-show`).
- [ ] Build QR code verification endpoint and admin check-in view.

## 3. Backend Validation, Rate Limiting & Security Hardening (~5 hours)
- [ ] Add request payload schema validation (Zod / Joi) for `/reservation` and `/admin` endpoints.
- [ ] Implement rate limiting on reservation creation and authentication routes.
- [ ] Prevent double-booking and enforce per-slot guest capacity limits atomically in MongoDB.

## 4. Automated Test Suite & CI Pipeline (~6 hours)
- [ ] Expand unit and integration tests for controllers, middlewares (`authentication`, `findSearchSortPage`), and Mongoose models.
- [ ] Add frontend component tests with React Testing Library.
- [ ] Configure GitHub Actions CI workflow for automated linting and test execution.
