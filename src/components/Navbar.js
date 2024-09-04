import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../path/to/logo.png';

const Navbar = () => {
  return (
    <header className="bg-white py-5 px-16 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="header-left flex items-center">
          <div className="logo-container flex">
            <img src={logo} alt="Logo" className="w-15 h-15" />
            <h1 className="header-title font-montserrat text-2xl font-bold ml-2">Your Title</h1>
          </div>
        </div>
        <nav>
          <ul className="flex list-none">
            <li className="ml-5">
              <NavLink to="/" className="text-blue-600 font-montserrat hover:underline" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink to="/missions" className="text-blue-600 font-montserrat hover:underline" activeClassName="active-link">
                Missions
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink to="/rockets" className="text-blue-600 font-montserrat hover:underline" activeClassName="active-link">
                Rockets
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink to="/myprofile" className="text-blue-600 font-montserrat hover:underline" activeClassName="active-link">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
