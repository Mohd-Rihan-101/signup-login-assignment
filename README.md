# React Login & Signup App

This project is created as part of an assignment. It is a simple **Login and Signup application** built with **React.js**, demonstrating routing, form validation, and responsive design.

---

## Features
- Login and Signup forms
- Client-side validation for all fields:
  - Name: Only alphabets allowed
  - Username: Alphanumeric + special characters
  - Email: Must be a valid Gmail format
  - Phone: Must include country code and number
  - Password: Must not match username, confirm password must match
- Error messages shown under each invalid field
- Responsive UI (works on desktop and mobile)
- Routing between Login and Signup pages
- Reusable components (InputField, PasswordField, FormCard)

---

## 🛠️ Technologies Used
- React.js (Create React App)
- React Router
- CSS (custom styling, responsive)

---

## 📂 Project Structure
src/
components/
FormCard.js
InputField.js
PasswordField.js
pages/
Login.js
Signup.js
utils/
validation.js
App.js
index.js
App.css


---

## ▶️ Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/login-signup-assignment.git

cd login-signup-assignment

npm install

npm start
