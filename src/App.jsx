import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddMoviePage from './pages/AddMoviePage';
import MainLayout from './layouts/MainLayout';
import Movies from './pages/Movies';
import Movie, { movieLoader } from './pages/Movie';

const App = () => {
  // Add new Movie
  const addMovie = async (newMovie) => {
    const res = await fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    return;
  };

  // Delete Movie
  const deleteMovie = async (id) => {
    console.log('delete', id);
    const res = await fetch(`/api/movies/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/add-movie"
          element={<AddMoviePage addMovieSubmit={addMovie} />}
        />
        <Route
          path="/movies/:id"
          element={<Movie deleteMovie={deleteMovie} />}
          loader={movieLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route element={<MainLayout />}>
  //           <Route path="/" element={<Homepage />} />
  //           <Route path="/movies" element={<Movies />} />
  //           <Route
  //             path="/movies/:id"
  //             element={<Movie />}
  //             loader={movieLoader}
  //           />
  //         </Route>
  //       </Routes>
  //     </Router>
  //   </>
  // );
};

export default App;
