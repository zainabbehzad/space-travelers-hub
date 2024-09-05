import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} className="h-10 w-10" alt="Space Travelers Hub logo" />
        <h1 className="text-xl font-bold ml-2">Space Travelers Hub</h1>
      </div>
      <nav>
        <ul className="flex space-x-6 list-none">
          {['/', '/missions', '/myprofile', '/dragons'].map((path) => (
            <li key={path} className="relative flex items-center group">
              <NavLink
                to={path}
                className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}
              >
                {path === '/' ? 'Rockets' : path.charAt(1).toUpperCase() + path.slice(2)}
              </NavLink>
              {/* Vertical Line */}
              <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-blue-600" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
