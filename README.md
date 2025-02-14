# React Movie App 2025

A **React.js** application that allows users to browse and manage a list of movies. The app uses **React Router** for navigation and **JSON Server** as a mock backend for CRUD operations.

## Features

✅ Browse a list of movies  
✅ View movie details  
✅ Add new movies  
✅ Edit existing movies  
✅ Delete movies  
✅ Navigate using **React Router** with `NavLink`  
✅ Fetch data using `useEffect` and `useState`  
✅ Display a **loading spinner** while fetching data  
✅ Use `useLoaderData` for fetching single movie data  
✅ Styled with Tailwind CSS

---

## Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/developedbyesh/react-movie-app-2025.git
cd react-movie-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start JSON Server

Make sure you have a `movies.json` file with movie data.

```bash
npm run server
```

This will run the JSON Server at `http://localhost:5000`.

### 4️⃣ Start the React App

```bash
npm run dev
```

The app should now be running at `http://localhost:4000`.

---

## API Routes

The app interacts with the following **JSON Server API** endpoints:

- **GET /movies** - Fetch all movies
- **GET /movies/:id** - Fetch a single movie
- **POST /movies** - Add a new movie
- **PUT /movies/:id** - Update an existing movie
- **DELETE /movies/:id** - Remove a movie

---

## Technologies Used

- React.js
- Vite
- React Router
- JSON Server
- Fetch API (`useEffect` + `useState`)
- `useLoaderData`
- React Spinner (`ClipLoader` from `react-spinners`)
- CSS / Tailwind

---
