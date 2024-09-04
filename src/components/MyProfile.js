import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);

  return (
    <div className="profile">
      <div className="mission-card">
        <h2 className="title-p">My Missions</h2>
        <ul className="profile-card">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="ul-list-item">{mission.mission_name}</li>
            ))
          ) : (
            <li>No reserved missions</li>
          )}
        </ul>
      </div>
      <div className="rocket-card">
        <h2 className="title-p">My Rockets</h2>
        <ul className="profile-card">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="ul-list-item">{rocket.name}</li>
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
