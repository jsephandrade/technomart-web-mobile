# Technomart Web & Mobile

This repository contains a demo full-stack application composed of a Django REST API, a React web client and an Expo mobile application. The services can be run together using **docker-compose** or individually for development.

## Repository structure

- **backend** – Django project exposing REST endpoints
- **frontend-web** – React + Vite SPA
- **mobile-app** – Expo React Native project
- **docker-compose.yml** – brings up MySQL, the backend and the frontend

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- Node.js 18+ (for frontend/mobile development)
- Python 3.10 (if running the backend without Docker)

## Quick start with Docker

```bash
# Build and start all services
docker-compose up --build
```

Once running:

- Backend API: <http://localhost:8000/>
- React web app: <http://localhost:3000/>
- MySQL: port `3307` on localhost

## Developing each project individually

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Web frontend

```bash
cd frontend-web
npm install
npm run dev
```

### Mobile app

```bash
cd mobile-app
npm install
npx expo start
```

## Notes

This project is meant as a starting point and contains minimal boilerplate for each component. Feel free to modify or extend the applications to suit your needs.
