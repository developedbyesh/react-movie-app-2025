import React from 'react';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import MovieListings from './components/MovieListings';
import ViewAllMovies from './components/ViewAllMovies';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <MovieListings />
      <ViewAllMovies />
    </>
  );
};

export default App;
