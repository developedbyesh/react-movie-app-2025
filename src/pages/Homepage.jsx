import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import MovieListings from '../components/MovieListings';
import ViewAllMovies from '../components/ViewAllMovies';

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <MovieListings isHome={true} />
      <ViewAllMovies />
    </>
  );
};

export default Homepage;
