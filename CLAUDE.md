# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Instagram-like clone from Rocketseat's OmniStack Week 7. Users can create posts with images (resized via Sharp), like them, and see real-time updates via Socket.io.

## Architecture

- **Backend:** Express.js + Mongoose + Socket.io (port 3333)
- **Frontend:** React 18 (Create React App) + React Router v6 + Axios (port 3000)
- **Database:** MongoDB (port 27017, database `semanaomnistack7`)
- **Real-time:** Socket.io — the `io` instance is attached to `req.io` via middleware in `backend/src/index.js`, then used in controllers to emit events (e.g., `post`, `like`)

Image uploads go through Multer -> Sharp (resized to 500px, converted to JPEG) -> served from `backend/uploads/resized/` at `/files/`.

## Development Commands

### With Docker (recommended)
```bash
docker-compose up        # Starts backend, frontend, and MongoDB
```

### Without Docker
```bash
# Backend (requires local MongoDB running)
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm start
```

### Frontend tests
```bash
cd frontend && npm test
```

## API Endpoints

- `GET /posts` — list all posts (newest first)
- `POST /posts` — create post (multipart form: `image` file + `author`, `place`, `description`, `hashtags`)
- `POST /posts/:id/like` — increment like count

## Key Files

- `backend/src/index.js` — server setup, MongoDB connection, Socket.io init
- `backend/src/models/Post.js` — Mongoose schema (author, place, description, hashtags, image, likes)
- `backend/src/controllers/PostController.js` — image processing with Sharp + post CRUD
- `backend/src/config/upload.js` — Multer configuration
- `frontend/src/services/api.js` — Axios instance (base URL from `REACT_APP_API_URL` env var)
- `frontend/src/pages/Feed.js` / `New.js` — main pages

## Environment Variables

- `MONGO_URL` — MongoDB connection string (default: `mongodb://localhost:27017/semanaomnistack7`)
- `REACT_APP_API_URL` — Backend URL for frontend (default: `http://localhost:3333`)
