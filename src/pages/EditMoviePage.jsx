import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditMoviePage = ({ updateMovieSubmit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = useLoaderData();

  const [title, setTitle] = useState(movie.title);
  const [genre, setGenre] = useState(movie.genre);
  const [description, setDescription] = useState(movie.description);
  const [director, setDirector] = useState(movie.director);
  const [rating, setRating] = useState(movie.rating);
  const [writer, setWriter] = useState(movie.crew.writer);
  const [cast, setCast] = useState(movie.crew.cast);
  const [producer, setProducer] = useState(movie.crew.producer);
  const [music, setMusic] = useState(movie.crew.music);

  const submitForm = (e) => {
    e.preventDefault();

    const updatedMovie = {
      id,
      title,
      genre,
      description,
      director,
      rating,
      crew: {
        writer,
        cast,
        producer,
        music,
      },
    };

    updateMovieSubmit(updatedMovie);
    toast.success('Movie updated successfully!');

    return navigate(`/movies/${id}`);
  };
  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Update Movie
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="genre"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Crime">Crime</option>
                  <option value="Action">Action</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Movie Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter movie title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Enter movie description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="10">10</option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Director
                </label>
                <input
                  type="text"
                  id="director"
                  name="director"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Director's Name"
                  required
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-5">Movie Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="writer"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Writer
                </label>
                <input
                  type="text"
                  id="writer"
                  name="writer"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter Writer's Name"
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="cast"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Cast
                </label>
                <textarea
                  id="cast"
                  name="cast"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Enter main cast details"
                  value={cast}
                  onChange={(e) => setCast(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="producer"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Producer
                </label>
                <input
                  type="text"
                  id="producer"
                  name="producer"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter producer's name"
                  required
                  value={producer}
                  onChange={(e) => setProducer(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="music"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Music
                </label>
                <input
                  type="text"
                  id="music"
                  name="music"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter Musician's name"
                  value={music}
                  onChange={(e) => setMusic(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditMoviePage;
