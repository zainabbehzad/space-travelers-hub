import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logo} className="h-10 w-10" alt="Space Travelers Hub logo" />
          <h1 className="text-xl font-bold ml-2">Space Travelers Hub</h1>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="sm:hidden flex items-center text-blue-600 focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`absolute sm:static left-0 w-full sm:w-auto bg-white shadow sm:bg-transparent transition-all duration-300 ${isOpen ? 'top-16' : 'top-[-100%]'}`}>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 list-none p-4 sm:p-0">
            {['/', '/missions', '/dragons', '/myprofile'].map((path) => (
              <li key={path} className="relative flex items-center group">
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}
                >
                  {path === '/' ? 'Rockets' : path.charAt(1).toUpperCase() + path.slice(2)}
                </NavLink>
                <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-blue-600" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
