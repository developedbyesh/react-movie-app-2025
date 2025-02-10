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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/add-movie" element={<AddMoviePage />} />
      <Route path="/movies/:id" element={<Movie />} loader={movieLoader} />
    </Route>
  )
);

const App = () => {
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
