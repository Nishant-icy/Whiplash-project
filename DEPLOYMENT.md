# Whiplash Deployment

## Option 1: Full-stack Vercel deployment

This repository includes `vercel.json`, so Vercel can deploy the Vite frontend and Express API together.

Project settings:

- Root directory: repository root
- Framework preset: Other
- Build command: leave default

Environment variables:

- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: long random secret
- `CLIENT_URL`: deployed frontend URL, optional when frontend and backend share the same Vercel domain

## Option 2: Backend on Render

Create a new Render Blueprint or Web Service from this repository.

Settings:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm run start`
- Health check path: `/api/health`

Environment variables:

- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: long random secret
- `CLIENT_URL`: deployed frontend URL

## Frontend on Vercel

Create a Vercel project from this repository.

Settings:

- Root directory: `frontend`
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

Environment variables:

- `VITE_API_URL`: deployed Render backend URL
