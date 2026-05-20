# TravelHub

TravelHub is a full-stack tour booking application where users can browse tours, view tour details, sign up, log in, manage account settings, write reviews, and complete bookings using Stripe checkout.

## Live Demo

https://travelhub-booking-app.vercel.app

## Demonstration

### Home Page



https://github.com/user-attachments/assets/28a87341-d3cb-49b9-b999-f7247bcd8dd9




### Tour Details & Booking Flow

https://github.com/user-attachments/assets/9fdbff07-e59f-4811-a8f5-e245bfa91419


> The booking demo shows the tour details page and Stripe checkout flow using test mode.

## Screenshots

### Login Page

![Login Page](./public/img/demo/Login.png)

### Sign Up Page

![Sign Up Page](./public/img/demo/signUp.png)

### Account Settings

![Account Settings](./public/img/demo/accountSettings.png)

## Features

- User signup, login, and logout
- JWT authentication with secure cookies
- Tour listing and tour details pages
- User account settings
- Password update
- Review system
- Stripe checkout integration
- MongoDB/Mongoose data models
- Server-side rendering with Pug templates
- Security middleware: rate limiting, sanitization, HPP, and Helmet
- Deployed on Vercel

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Pug
- Axios
- Stripe
- JWT
- Vercel

## Demo Login

You can test the app using this demo account:

```txt
Email: laura@example.com
Password: test1234
```
## Stripe Test Card

Use this card for test checkout:

```txt
Card number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
```

## Environment Variables

This project requires environment variables such as:

```env
NODE_ENV=production
DATABASE=your_mongodb_connection_string
DATABASE_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
```

## Roadmap

- Add user review dashboard
- Add billing history page
- Improve mobile responsiveness
- Add forgot/reset password UI
- Add admin dashboard pages
