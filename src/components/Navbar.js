import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const Navbar = () => (
  <header>
    <div className="header-container">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} className="logo" alt="header logo" />
          <h1 className="header-title">Space Travelars Hub</h1>
        </div>
        <nav>
          <ul className="links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Rockets</NavLink>
            </li>
            <li>
              <NavLink to="missions" className={({ isActive }) => (isActive ? 'active-link' : '')}>Missions</NavLink>
            </li>
            <span className="nav-span" />
            <li>
              <NavLink to="myprofile" className={({ isActive }) => (isActive ? 'active-link' : '')}>My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Navbar;
