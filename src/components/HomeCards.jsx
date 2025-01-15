import React from 'react';

const HomeCards = () => {
  return (
    <section className="bg-black py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Viewers</h2>
            <p className="mt-2 mb-4">Browse and discover movies you’ll love.</p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Movies
            </a>
          </div>
          <div className="bg-amber-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Creators</h2>
            <p className="mt-2 mb-4">
              Add and share your films with the world.
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Movie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
