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
          <ul className="links flex space-x-4 list-none">
            <li>
              <NavLink to="/" className={({ isActive }) => `text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold' : ''}`}>
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" className={({ isActive }) => `text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold' : ''}`}>
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/myprofile" className={({ isActive }) => `text-gray-700 hover:text-blue-500 ${isActive ? 'font-semibold' : ''}`}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Navbar;
