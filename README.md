# TechnoMart Web & Mobile

**TechnoMart** is a full-stack, cross-platform Canteen Management System developed for the **CTU-MC Multipurpose Cooperative**, designed to digitize and optimize food ordering, inventory tracking, payment handling, and analytics through a **web-based dashboard** and **mobile app**.

## 🧠 Project Motivation

The existing manual system causes long queues, inventory mismanagement, and poor forecasting. TechnoMart addresses these pain points by offering a digital-first solution that optimizes operations for customers, staff, managers, and admins.

> 🏫 Developed as a Capstone Project by BSIS students at Cebu Technological University – Main Campus.

---

## 🛠️ Features

### 👨‍🍳 Mobile App (Expo - React Native)

- Browse and customize food orders
- Pre-order meals with preferred pickup time
- Face scan login for secure access
- Catering request for events
- Payment via cash or online
- Track order status and view order history

### 🖥️ Web Dashboard (React + Django)

- POS system for order processing
- Inventory management with restock alerts
- Staff scheduling and activity logs
- Analytics: sales, inventory trends, purchase behavior
- Admin panel for user/account management
- Notification and feedback management

---

## 🚀 Technology Stack

| Layer        | Tools                       |
| ------------ | --------------------------- |
| Frontend Web | React.js, Tailwind CSS      |
| Mobile App   | React Native, Expo          |
| Backend      | Django REST Framework (DRF) |
| Database     | MySQL                       |
| Infra        | Docker, GitHub CI/CD        |

---

## 🧪 How to Run Locally (Dev Mode)

### 1. Clone the repository

```bash
git clone https://github.com/jsephandrade/technomart-web-mobile.git
cd technomart-web-mobile
```

### 2. Start services with Docker

```bash
docker-compose up --build
```

### 3. Access Applications

- Web Dashboard: `http://localhost:3000`
- API Server: `http://localhost:8000/api/`
- Mobile App: Run with `npx expo start` inside `mobile-app/`

---

## 🧠 Project Team

| Name             | Role         | Nickname |
| ---------------- | ------------ | -------- |
| Joseph Andrade   | Project Lead | Hustler  |
| Helen Sabay      | Developer    | Hacker   |
| Divine Quijano   | Frontend     | Hipster  |
| Rhea Mae Navares | Backend      | Hipster  |

---

## 📚 Academic Context

This project fulfills the capstone requirement for the **BS Information Systems** degree at **Cebu Technological University – Main Campus**. Supervised by:

- **Mr. Angelbert P. Maghanoy** – Adviser
- **Mr. Jonathan A. Miraballes** – Client
- **Mr. Jose Maria S. Garcia II** – Instructor

---

## 📄 License

This project is strictly for academic and demonstration purposes. Commercial or institutional use requires permission from the project team and CTU-MC.

---

## 📬 Contact

For collaboration or inquiries:

- 📧 joseph.andrade@ctu.edu.ph
- 🔗 [GitHub](https://github.com/jsephandrade)

---

> “Digitizing food service for efficiency, transparency, and better campus experience.” – Team TechnoMart
