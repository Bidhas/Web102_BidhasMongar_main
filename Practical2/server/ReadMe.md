# TikTok Clone REST API

## 1. User Documentation

### Overview
A RESTful API backend for a TikTok-like application that allows users to manage videos, 
comments, and social interactions such as following users and liking content.

### Key Features
- **Videos**: Upload, view, update, and delete short videos. Users can like and unlike videos.
- **Users**: Create and manage user profiles, follow/unfollow other users, and view followers.
- **Comments**: Post, edit, and delete comments on videos. Users can like and unlike comments.

---

## 2. Technical Documentation

### Technologies Used
- **Frontend**: N/A (API only — designed to connect to a Next.js frontend)
- **Backend**: Node.js, Express.js, Morgan, CORS, Body-Parser, Dotenv, Nodemon
- **Database**: In-memory data store (JavaScript objects — resets on server restart)

### API Endpoints

| Endpoint | Method | Purpose | Auth Required |
|---|---|---|---|
| /api/videos | GET | Get all videos | No |
| /api/videos | POST | Create a new video | No |
| /api/videos/:id | GET | Get video by ID | No |
| /api/videos/:id | PUT | Update a video | No |
| /api/videos/:id | DELETE | Delete a video | No |
| /api/videos/:id/comments | GET | Get comments for a video | No |
| /api/videos/:id/likes | GET | Get likes for a video | No |
| /api/videos/:id/likes | POST | Like a video | No |
| /api/videos/:id/likes | DELETE | Unlike a video | No |
| /api/users | GET | Get all users | No |
| /api/users | POST | Create a new user | No |
| /api/users/:id | GET | Get user by ID | No |
| /api/users/:id | PUT | Update a user | No |
| /api/users/:id | DELETE | Delete a user | No |
| /api/users/:id/videos | GET | Get videos by a user | No |
| /api/users/:id/followers | GET | Get followers of a user | No |
| /api/users/:id/followers | POST | Follow a user | No |
| /api/users/:id/followers | DELETE | Unfollow a user | No |
| /api/comments | GET | Get all comments | No |
| /api/comments | POST | Create a new comment | No |
| /api/comments/:id | GET | Get comment by ID | No |
| /api/comments/:id | PUT | Update a comment | No |
| /api/comments/:id | DELETE | Delete a comment | No |
| /api/comments/:id/likes | GET | Get likes for a comment | No |
| /api/comments/:id/likes | POST | Like a comment | No |
| /api/comments/:id/likes | DELETE | Unlike a comment | No |

### Code Structure
```
server/
 ├── src/
 │    ├── controllers/
 │    │    ├── videoController.js   # Handles video CRUD and likes logic
 │    │    ├── userController.js    # Handles user CRUD and follow logic
 │    │    └── commentController.js # Handles comment CRUD and likes logic
 │    ├── routes/
 │    │    ├── videos.js            # Video route definitions
 │    │    ├── users.js             # User route definitions
 │    │    └── comments.js          # Comment route definitions
 │    ├── models/
 │    │    └── index.js             # In-memory data store with sample data
 │    ├── middleware/               # Custom middleware (reserved for future use)
 │    ├── utils/                    # Utility functions (reserved for future use)
 │    ├── app.js                    # Express app setup and middleware config
 │    └── index.js                  # Server entry point
 ├── .env                           # Environment variables
 ├── package.json
 └── package-lock.json
```

---

## 3. Deployment Guide

### Deployment Steps

1. Clone the repository and navigate to the server folder:
```bash
   cd Practical2/server
```

2. Install all dependencies:
```bash
   npm install
```

3. Create a `.env` file in the root of the server folder:
```
   PORT=3000
   NODE_ENV=development
```

4. Start the development server:
```bash
   npm run dev
```

5. The API will be available at `http://localhost:3000`

### Environment Variables

| Variable | Purpose | Example |
|---|---|---|
| PORT | Port the server runs on | 3000 |
| NODE_ENV | Sets the environment mode | development |