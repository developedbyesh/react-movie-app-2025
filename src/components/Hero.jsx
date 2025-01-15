import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find Your Next Movie
          </h1>
          <p className="my-4 text-xl text-white">
            Your guide to the best in cinema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
