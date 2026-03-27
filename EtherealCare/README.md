# Ethereal Care - Medication Adherence Tracker
An AI-powered, accessible medication tracking system built for the hackathon.

## Features
- **Mobile App (React Native Expo):** Highly accessible UI with high contrast, large buttons, single-tap actions. Includes AI streak monitoring, emergency SOS alerts, and medication detail flow.
- **Web Dashboard (React+Vite):** Caregiver portal to monitor patient adherence and receive alerts.
- **Backend (Node.js+Express+MongoDB):** RESTful APIs for handling users, medications, adherence logs, streak calculation, and AI heuristic optimizations for reminder times.

## Setup Instructions

### 1. Backend
```bash
cd backend
npm install
npm run dev
```
Starts the server on `http://localhost:5000`. Set `MONGO_URI` in `.env`.

### 2. Mobile App
```bash
cd mobile
npm install
npx expo start
```
Use Expo Go on your mobile device to scan the QR code. The app uses the new Expo Router (`app` directory) for bottom tab navigation.

### 3. Web Dashboard
```bash
cd web
npm install
npm run dev
```
Starts the Vite server on `http://localhost:5173`. Open in your browser.

## Built With
- MongoDB, Express.js, React, Node.js, React Native, Expo, Tailwind CSS.
