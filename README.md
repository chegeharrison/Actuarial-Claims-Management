# 🛡️ Claim Risk Analyzer

A full-stack **MERN** application that allows users to submit, manage, and analyze insurance claims. This project demonstrates how to build a modern CRUD application using MongoDB, Express.js, React, and Node.js, with clean component structure, modular routing, and persistent database integration.

---

## 🧰 Tech Stack

### 🔹 Frontend (React + Vite + Tailwind CSS)
- **React (with TypeScript):** Component-based UI.
- **Vite:** Lightweight and fast development server.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Router DOM:** For client-side navigation.

### 🔹 Backend (Node.js + Express + MongoDB)
- **Node.js:** JavaScript runtime for server-side logic.
- **Express.js:** Lightweight backend web framework.
- **MongoDB + Mongoose:** NoSQL database and ODM.
- **dotenv:** Manages environment variables.
- **CORS:** Middleware for handling cross-origin requests.
- **Nodemon:** Automatically restarts server during development.

---

## 🏗️ Project Structure

```
claim-risk-analyzer/
├── backend/
│   ├── models/
│   │   └── Claim.js            # MongoDB schema using Mongoose
│   ├── routes/
│   │   └── claims.routes.js    # API routes for CRUD operations
│   ├── index.js                # Main entry point for Express server
│   ├── .env                    # Environment config (e.g., DB URI, port)
│   └── package.json            # Backend dependencies and scripts
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Top navigation bar
│   │   │   └── ClaimCard.tsx   # Card component to display individual claims
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Landing page
│   │   │   ├── Claims.tsx      # Page to view all claims
│   │   │   ├── AddClaim.tsx    # Form page to submit a new claim
│   │   │   └── Users.tsx       # Placeholder for user list (future use)
│   │   ├── App.tsx             # Main React component that defines routes
│   │   └── main.tsx            # Entry point that renders <App /> to the DOM
│   ├── index.html              # HTML template for the React app
│   └── package.json            # Frontend dependencies and scripts
```

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB installed locally or access to MongoDB Atlas

---

### 🔹 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

### Install dependencies:
```bash
npm install
PORT=5000
MONGO_URI=mongodb://localhost:27017/claim-risk-analyzer
npm run dev
```

### 🔹 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### Features
✅ Submit new insurance claims

📄 View a list of all submitted claims

✏️ Edit claim details

❌ Delete a claim

⚛️ Interactive, responsive UI with Tailwind CSS

🧩 Real-time persistence with MongoDB

🧠 Built with scalability and modularity in mind


 ### Possible Enhancements
🔐 Add user authentication (JWT, OAuth)

🤖 Integrate AI/ML risk scoring algorithms

📎 Support file upload for claim evidence

🔍 Add filtering, pagination, and search

🧑‍💼 Admin dashboard with approval workflow

📩 Email/SMS notifications for updates

🐳 Deploy with Docker or on cloud platforms

### 🧪 Testing Tips
To test backend APIs, use:

Postman

Thunder Client (VS Code Extension)

curl via command line

Example Test with curl:
```bash 
curl -X POST http://localhost:5000/api/claims \
  -H "Content-Type: application/json" \
  -d '{"policyHolder":"Test User", "amount":5000, "description":"Accident", "status":"Pending"}'
```

### 📦 Tech Stack
Frontend: React + TypeScript + Tailwind CSS + Vite

Backend: Express.js + Node.js + MongoDB + Mongoose

Tooling: Nodemon, dotenv, Postman, Thunder Client

Developed by Harrison Chege
Feel free to fork, enhance, and share 🌍