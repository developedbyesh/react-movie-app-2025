import React from 'react';
import MovieListing from './MovieListing';
import movies from '../movies.json';

const MovieListings = () => {
  const popularMovies = movies.slice(0, 3);
  return (
    <section className="bg-black px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Browse Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularMovies.map((movie) => (
            <MovieListing key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieListings;
