import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css'; // Keep your custom styles if needed

const Navbar = () => (
  <header className="bg-white shadow">
    <div className="header-container container mx-auto px-4">
      <div className="header-left flex items-center">
        <div className="logo-container flex items-center">
          <img src={logo} className="logo h-10 w-10" alt="header logo" />
          <h1 className="header-title text-xl font-bold ml-2">Space Travelers Hub</h1>
        </div>
        <nav>
          <ul className="links flex space-x-6 list-none">
            <li className="relative">
              <NavLink 
                to="/" 
                className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}>
                Rockets
              </NavLink>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 hover:scale-x-100" />
            </li>
            <li className="relative">
              <NavLink 
                to="/missions" 
                className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}>
                Missions
              </NavLink>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 hover:scale-x-100" />
            </li>
            <li className="relative">
              <NavLink 
                to="/myprofile" 
                className={({ isActive }) => `inline-block ${isActive ? 'font-semibold' : ''} text-blue-600 hover:text-blue-800 hover:underline`}>
                My Profile
              </NavLink>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-black scale-x-0 transition-transform duration-300 hover:scale-x-100" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);


export default Navbar;
