import React from 'react';
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddMoviePage from './pages/AddMoviePage';
import MainLayout from './layouts/MainLayout';
import Movies from './pages/Movies';
import Movie from './pages/Movie';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
