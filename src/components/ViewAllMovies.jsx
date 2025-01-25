import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllMovies = () => {
  return (
    <section className="bg-black py-4">
      <div className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/movies"
          className="block bg-amber-400 hover:bg-amber-300 text-white text-center py-4 px-6 rounded-xl"
        >
          View All Movies
        </Link>
      </div>
    </section>
  );
};

export default ViewAllMovies;
