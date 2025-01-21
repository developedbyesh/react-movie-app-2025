import React from 'react';
import dpw1 from '../assets/images/dpw1.jpeg';

const Hero = ({
  title = 'Find Your Next Movie',
  subtitle = 'Your guide to the best in cinema',
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${dpw1})`,
      }}
      className="bg-cover bg-no-repeat h-64 sm:h-96 md:h-screen bg-black py-20 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
          {title}
        </h1>
        <p className="my-4 text-xl text-white drop-shadow-md">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
