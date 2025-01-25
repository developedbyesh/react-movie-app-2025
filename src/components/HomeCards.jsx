import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="bg-black py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Viewers</h2>
            <p className="mt-2 mb-4">Browse and discover movies you’ll love.</p>
            <Link
              to="/movies"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Movies
            </Link>
          </Card>
          <Card bg="bg-amber-100">
            <h2 className="text-2xl font-bold">For Creators</h2>
            <p className="mt-2 mb-4">
              Add and share your films with the world.
            </p>
            <Link
              to="/add-movie"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-white rounded-lg px-4 py-2"
            >
              Add Movie
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
