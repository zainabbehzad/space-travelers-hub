import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
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
    </div>
  );
};

export default MyProfile;
