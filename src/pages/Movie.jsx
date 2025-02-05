import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/movies/${id}`);
        const data = await res.json();
        console.log('single movie data', data);
        setMovie(data);
        // console.log('movie data', movie);
      } catch (error) {
        console.log('single movie fetch error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/movies"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{movie.genre}</div>
                <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaStar className="text-amber-400" />
                  <p className="text-orange-700 ml-2">{movie.rating}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Movie Description
                </h3>

                <p className="mb-4">{movie.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Director
                </h3>

                <p className="mb-4">{movie.director}</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Movie Info</h3>

                <hr className="my-4" />

                <h3 className="text-xl">Main Cast:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {movie.crew.cast}
                </p>

                <h3 className="text-xl">Producer:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {movie.crew.producer}
                </p>

                <h3 className="text-xl">Writer:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {movie.crew.writer}
                </p>
                <h3 className="text-xl">Music:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {movie.crew.music}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Movie</h3>
                <a
                  href="/add-job.html"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Movie
                </a>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Movie
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
