# Whiplash Deployment

## Backend on Render

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
