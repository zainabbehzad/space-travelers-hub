import React from 'react';
import { useSelector } from 'react-redux';
import '../modules/Profile.css';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
      <div className="mission-card mx-4">
        <h2 className="text-xl font-bold mb-4">My Missions</h2>
        <ul className="profile-card border border-gray-300 rounded-lg p-0">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="ul-list-item border-b border-gray-300 w-full p-4">
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li className="p-4">No reserved missions</li>
          )}
        </ul>
      </div>
      <div className="rocket-card mx-4">
        <h2 className="text-xl font-bold mb-4">My Rockets</h2>
        <ul className="profile-card border border-gray-300 rounded-lg p-0">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="ul-list-item border-b border-gray-300 w-full p-4">
                {rocket.name}
              </li>
            ))
          ) : (
            <li className="p-4">No reserved rockets</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;