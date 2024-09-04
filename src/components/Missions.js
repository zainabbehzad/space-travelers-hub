import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchMissions } from '../redux/missions/missionSlice';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  } 

  if (status === 'succeeded') {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left">Mission</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={nanoid()}
                id={mission.mission_id}
                mission={mission.mission_name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  } 

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error loading missions.</div>;
  }

  return null;
}

export default Missions;