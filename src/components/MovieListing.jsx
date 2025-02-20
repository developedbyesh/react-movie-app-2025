import React from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MovieListing = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{movie.genre}</div>
          <h3 className="text-xl font-bold">{movie.title}</h3>
        </div>

        <div className="mb-5">
          {isExpanded
            ? movie.description
            : `${movie.description.slice(0, 150)}...`}
        </div>
        <button onClick={toggleDescription} className="text-blue-500 underline">
          {isExpanded ? 'Less' : 'More'}
        </button>

        <h3 className="text-indigo-500 mb-2"></h3>

        <div className="border border-gray-100 mb-5">{movie.director}</div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex flex-row items-center">
            <FaStar className="text-amber-400" />
            <div className="text-orange-700 ml-2">{movie.rating}</div>
          </div>
          <Link
            to={`/movies/${movie.id}`}
            className="h-[36px] bg-amber-400 hover:bg-amber-300 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
