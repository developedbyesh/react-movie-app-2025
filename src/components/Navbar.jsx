import React from 'react';
import logo2 from '../assets/images/logo2.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-amber-400 hover:bg-amber-300 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-amber-300 hover:text-white rounded-md px-3 py-2';
  return (
    <>
      <nav className="bg-black border-b border-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-14 w-auto" src={logo2} alt="Movies" />
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/movies" className={linkClass}>
                    Movies
                  </NavLink>
                  <NavLink
                    to="/add-movie"
                    className="text-white hover:bg-amber-300 hover:text-white rounded-md px-3 py-2"
                  >
                    Add Movie
                  </NavLink>
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
