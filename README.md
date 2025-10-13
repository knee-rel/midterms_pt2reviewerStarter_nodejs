# REST API Foundations — Starter (Node/Express, Clean Spec)

Boilerplate-only: structure + stubs **without solutions** for the revised spec
(no rate limiting, no extra security headers).

## Run
```bash
npm install
npm run dev   # or: npm start
```
API base: `http://localhost:5050/api/v1`

## Fill these routes
- GET `/api/v1/status`
- POST `/api/v1/echo`
- POST `/api/v1/quote` (v1/v2 logic)
- `/api/v1/products` (CRUD + pagination/sorting/filtering)
- GET `/api/v1/break` (throw to test centralized error handler)
