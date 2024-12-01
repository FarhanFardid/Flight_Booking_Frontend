# ✈️ Quick Fly - Online Flight Booking System

### Welcome to Quick Fly, an online platform designed to simplify flight bookings for users and streamline flight management for administrators. This document outlines the project's features, usage instructions, and technology stack.

### Live Project URL - https://quickfly-ticket-booking.netlify.app/

### Live Server URL - https://flight-booking-backend-red.vercel.app/api/flights

### Frontend Repository - https://github.com/FarhanFardid/Flight_Booking_Frontend

### Backend Repository - https://github.com/FarhanFardid/Flight_Booking_Backend

# 📌 Project Overview

Quick Fly allows users to browse flights without authentication, register or log in to book flights, and manage their profiles. Admins can manage flights and user bookings through an interactive dashboard.

![home](https://github.com/user-attachments/assets/8677a4cc-a051-4da0-8a7a-e0457b4d8ff7)
![h2](https://github.com/user-attachments/assets/b76c0863-dd48-4124-b7ab-22adc8d6ff1f)
![AvailableFlight](https://github.com/user-attachments/assets/9e1d377e-b46c-47e8-82b5-66fa1a7124db)
![flight1](https://github.com/user-attachments/assets/1622dc22-e7db-4e76-aac4-0656003a719c)
![login](https://github.com/user-attachments/assets/750627eb-f818-4258-921c-43204763b658)
![flightBooking](https://github.com/user-attachments/assets/e60a929f-4114-4a4f-bf57-a848f8c88403)
![UserDashbaord](https://github.com/user-attachments/assets/50dc9618-6781-440a-a648-a07fa9e427a2)
![userDash2](https://github.com/user-attachments/assets/928bae75-275e-48b3-b66a-51b9b6d51195)
![UserDash3](https://github.com/user-attachments/assets/ecbe5cde-ab0a-45c5-9ca2-2f4cb6b92bd9)
![adminDash1](https://github.com/user-attachments/assets/1932be7c-41c3-44f0-83af-fbf985ef3104)
![adminDash2](https://github.com/user-attachments/assets/f5540d15-6665-4e85-96bd-6c9ee80062a3)
![adminDash3](https://github.com/user-attachments/assets/6adf8a83-ce94-43e0-aa79-bef34dc0e8c7)
![adminDash4](https://github.com/user-attachments/assets/2e0449a4-aff6-41e7-a5c3-1ceb636bf6e1)

## 🚀 Features

### 🔍 User Features:

#### Browse Flights:

- View all available flights with detailed information.
- No authentication required to view flight details.

#### User Registration & Authentication:

- Secure registration using email, username, and password.
- Strong password hashing with bcrypt.
- Login with registered credentials.

#### Flight Booking:

- Book flights by specifying the number of seats.
- Automatic fill up of user information upon booking.

#### User Dashboard:

1.  Profile Management:

- View and update username and email (password update under development).

2. Booking History:

- View all past bookings.
- Check booking status (Pending, Confirmed, or Cancelled).

#### 🛠️ Admin Features:

1. Flight Management:

- Add new flights with detailed information.
- Update or delete existing flights.
- Booking Management:

2. View all user bookings.

- Change booking status (Confirm or Cancel).
- Delete booking records.

## 🧭 How to Access and Use the Application

### 🔗 Accessing the Application:

1. Browse Flights:

- Visit the homepage to view available flights in Available Flights & Booking Link.

2.  Register/Login:

- Click on the Login/Register button.
- New users can register; existing users can log in.

3. Booking a Flight:

- Navigate to the flight details page.
- Enter the required number of seats and confirm the booking.

4. User Dashboard:

- Access your dashboard to view profile information and booking history.
- Update your username and email as needed.

5. Admin Dashboard:

- Log in as an admin.
- Access flight management to add, update, or delete flights.
- Manage user bookings and update booking status.

## 💻 Technology Stack

### 🌐 Frontend:

- React with Vite for fast development.
- Tailwind CSS for styling.
- Material UI and Flowbite for UI components.
- React Hook Form for form handling.
- Axios for API calls.
- React Router for navigation.
- React Icons for icons.
- React-Toastify for notifications.

## 🛠️ Backend:

- Node.js with Express.js for server development.
- Mongoose for MongoDB interaction.
- Bcrypt for password hashing.
- JWT (JSON Web Token) for secure authentication.
- CORS to handle cross-origin requests.
- Dotenv for environment variables.

## 🔐 Security:

- Passwords are hashed securely using bcrypt.
- JWT authentication ensures that API routes are protected.
- Proper input validation and error handling throughout the application.

## 📈 Future Enhancements:

Implement pagination for flight listings.
Develop an advanced search engine for filtering flights.
Complete password update functionality.

## 🛠️ How to Run Locally:

1. Clone the Repository:

- git clone <repository-link> both frontend and backend separately
- cd Flight_Booking_Frontend

2. Install Dependencies:

- Flight_Booking_Frontend
- npm install

- cd Flight_Booking_Backend
- npm install

3. Set Up Environment Variables:

- Create a .env file in the backend directory with your MongoDB URI and JWT secret

4. Run the Application: (Open Command Line)

- Backend:
- cd Flight_Booking_Backend
- nodemon index.js

- Frontend:
- cd Flight_Booking_Frontend
- npm run dev

### 🌟 Enjoy Your Flight Booking Experience with Quick Fly! 🌟

This README file provides users and developers with an overview of the application, guiding them on how to access features and highlighting the technologies used.
