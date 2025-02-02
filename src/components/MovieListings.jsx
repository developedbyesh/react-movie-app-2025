import React, { useState, useEffect } from 'react';
import MovieListing from './MovieListing';
// import movies from '../movies.json';

const MovieListings = ({ isHome = false }) => {
  // const popularMovies = isHome ? movies.slice(0, 3) : movies;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/movies');
        const data = await res.json();
        console.log('movies api', data);
        setMovies(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <section className="bg-black px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Browse Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieListing key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieListings;
