import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);
  const dragonData = useSelector((state) => state.dragons.dragons); // Access dragons from state
  const filterDragons = dragonData.filter((dragon) => dragon.reserved); // Filter reserved dragons

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[100px]"> {/* Updated to 3 columns */}
      <div className="mission-card">
        <h2 className="text-xl font-bold mb-4">My Missions</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="border-b border-gray-600 py-2">{mission.mission_name}</li>
            ))
          ) : (
            <li>No reserved missions</li>
          )}
        </ul>
      </div>
      <div className="rocket-card">
        <h2 className="text-xl font-bold mb-4">My Rockets</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="border-b border-gray-600 py-2">{rocket.name}</li>
            ))
          ) : (
            <li>No reserved rockets</li>
          )}
        </ul>
      </div>
      <div className="dragon-card">
        <h2 className="text-xl font-bold mb-4">My Dragons</h2>
        <ul className="profile-card border border-gray-800 rounded-lg p-4">
          {filterDragons.length > 0 ? (
            filterDragons.map((dragon) => (
              <li key={dragon.id} className="border-b border-gray-600 py-2">{dragon.name}</li>
            ))
          ) : (
            <li>No reserved dragons</li>
          )}
        </ul>
      </div>

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
              <span className="ml-2 h-6 border-l-2 border-transparent transition-all duration-300 group-hover:border-blue-600" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
