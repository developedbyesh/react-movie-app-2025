import React from 'react';
import logo2 from '../assets/images/logo2.png';

const Navbar = () => {
  return (
    <>
      <nav className="bg-black border-b border-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
                <img className="h-14 w-auto" src={logo2} alt="React Jobs" />
                {/* <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span> */}
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/index.html"
                    className="text-white bg-amber-400 hover:bg-amber-300 hover:text-white rounded-md px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="/jobs.html"
                    className="text-white hover:bg-amber-300 hover:text-white rounded-md px-3 py-2"
                  >
                    Movies
                  </a>
                  <a
                    href="/add-job.html"
                    className="text-white hover:bg-amber-300 hover:text-white rounded-md px-3 py-2"
                  >
                    Add Movie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
