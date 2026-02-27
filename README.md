# ❤️ BloodHub – Smart Blood Donation & Request Platform  

<p align="center">
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-Backend-green" />
  </a>
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-Frontend-blue" />
  </a>
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/Express-API-black" />
  </a>
  <a href="https://www.mongodb.com/" target="_blank">
    <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen" />
  </a>
  <a href="https://jwt.io/" target="_blank">
    <img src="https://img.shields.io/badge/JWT-Auth-orange" />
  </a>
</p>

---

## 🚀 Overview

**BloodHub** is a full-stack MERN application designed to connect blood donors with individuals in urgent need.  

It provides a secure, responsive, and scalable system for managing donors, handling requests, and improving emergency response time.

>  Built with real-world problem solving in mind.

---

# 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React |
| Backend | Node.js + Express.js|
| Database | MongoDB |
| Authentication | JWT |
| HTTP Client | Axios |
| Styling | Bootstrap |

---

# ⭐ Features

-  Secure User Authentication (JWT)
-  Donor Registration & Profile Management
-  Search Donors by Blood Group
-  Create & Manage Blood Requests
-  Protected Routes
-  Fully Responsive UI
-  RESTful API Architecture

---

# 🏗 System Architecture

```
Client (React)
      ↓
Axios API Calls
      ↓
Express Server (Node.js)
      ↓
MongoDB Database
```

### Architecture Highlights:
- Stateless Authentication using JWT
- REST-based API structure
- Modular folder structure
- Environment variable configuration
- Separation of concerns (Frontend / Backend)

---

# 📂 Project Structure

```
BloodHub/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── client/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
```

---

# 🧪 API Endpoints

### Auth Routes
```
POST   /api/auth/register
POST   /api/auth/login
```

### Donor Routes
```
GET    /api/donors
GET    /api/donors/:bloodGroup
POST   /api/donors
```

### Request Routes
```
POST   /api/requests
GET    /api/requests
```

---


# 🔄 Development Process

1. Requirement Analysis
2. Database Schema Design
3. Backend API Development
4. JWT Authentication Integration
5. Frontend UI Implementation
6. API Integration using Axios
7. Testing with Postman
8. UI Responsiveness Optimization

---


# ▶️ Running the Project Locally

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Azzam-Abdul-Khadar/BloodHub.git
cd BloodHub
```

## 2️⃣ Install Dependencies

```bash
npm install
```

If separated:

```bash
cd backend && npm install
cd ../client && npm install
```

## 3️⃣ Configure Environment Variables

Create `.env` in backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 4️⃣ Run Application

```bash
npm run dev
```

Visit:
```
http://localhost:3000
```

---

# 🖼 Screenshots

```
![Home Page](./screenshots/home.png)
![Donor List](./screenshots/donors.png)
![Request Page](./screenshots/request.png)
```
---

# 📘 What I Learned

- Designing scalable REST APIs
- Implementing secure authentication
- Managing state in React
- Error handling in full-stack apps
- Environment-based configuration
- Clean project structuring
  
---

# 📈 Overall Growth

This project improved my:

- Full-stack architecture thinking
- Debugging skills
- API security knowledge
- Deployment preparation workflow
- Real-world problem solving mindset

---

# 🚀 Future Improvements

- Real-time notifications
- Email/SMS integration
- Geolocation-based matching
- Deployment to cloud
- Docker support
- Unit & Integration Testing
- CI/CD pipeline

---

# 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

# 📄 License

MIT License

---

# 👨‍💻 Developer

**Azzam Abdul Khadar**  
MERN Full Stack Developer  

⭐ If you found this project useful, consider starring the repository!
