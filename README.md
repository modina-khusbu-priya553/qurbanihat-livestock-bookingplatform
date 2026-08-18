# QurbaniHat – Livestock Booking Platform

## 🎯 Project Purpose

QurbaniHat is a modern livestock marketplace built for the Qurbani season, where users can explore, view details and book healthy animals for Qurbani. The platform focuses on a simple, trustworthy booking experience — users can browse available animals, check full details (breed, weight, age, location, price) and reserve their preferred animal online after signing in.

## 🔗 Live URL

[Live Site] https://qurbanihat-livestock-bookingplatfor.vercel.app/

## 🔗 GitHub Repository

[GitHub Repo] https://github.com/modina-khusbu-priya553/qurbanihat-livestock-bookingplatform.git

## ✨ Key Features

- **Responsive Design** — Fully responsive layout across mobile, tablet, and desktop devices.
- **Authentication System** — Email/password sign up & sign in, plus Google social login, powered by Better Auth.
- **Home Page** — Hero banner with a "Browse Animals" call to action, a Featured Animals section (4 items), Qurbani Tips section, and Top Breeds showcase.
- **All Animals Page** — Browse all listed animals with a **sort by price** option and quick access to full details.
- **Animal Details Page** — Full animal details view with an integrated **Booking Form** (name, email, phone, address). Booking requires login, resets on submit, and shows a success toast (no data persistence, as per requirement).
- **My Profile Page** — Displays the logged-in user's name, email and profile photo.
- **Update Information** — Users can update their name and profile photo directly from their profile page.
- **Toast Notifications** — Real-time feedback for actions like sign up, sign in, booking, and profile updates using React Toastify.
- **Loading States** — Route-level loading UI (via Next.js `loading.js`) shown while data is being fetched, along with a Lottie animation for a polished loading experience.
- **Custom 404 Page** — A branded "Not Found" page for undefined routes.
- **Protected Routes** — Profile and booking-related actions are restricted to authenticated users.
- **Environment Variables** — Sensitive configuration (database URI, auth secrets) secured via `.env.local`.
- **Unique Themed Design** — A cohesive visual identity built around a livestock/Qurbani theme with a custom color palette (`#4361EE`, `#4CC9F0`).

## 🛠️ Tech Stack & NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework (App Router) for routing, SSR, and static generation |
| `react` / `react-dom` | Core UI library |
| `better-auth` | Authentication (email/password + Google OAuth, session management) |
| `mongodb` | Database driver for storing user accounts |
| `react-hook-form` | Form handling and validation (sign up, sign in, booking form) |
| `react-icons` | Icon library used throughout the UI |
| `react-toastify` | Toast notifications for success/error feedback |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind CSS component library (buttons, cards, modals, navbar) |
| `next/image` | Optimized image handling |

## 📂 Project Structure Highlights

- `app/(auth)` — Sign In & Sign Up routes
- `app/(main)` — Home, All Animals, Animal Details, Booking, and Profile routes
- `components/Cards` — Animal cards, details card, booking form, profile update form
- `components/Shared` — Navbar, Footer, Banner, Featured section
- `components/Sections` — Qurbani Tips, Top Breeds
- `lib` — Auth configuration and animal data fetching utilities

