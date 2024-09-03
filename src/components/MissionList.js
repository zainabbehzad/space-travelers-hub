// components/MissionList.js (update)
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { fetchMissions } from '../actions/missionActions';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="mission-list">
      {missions.map((mission) => (
        <MissionItem key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;
