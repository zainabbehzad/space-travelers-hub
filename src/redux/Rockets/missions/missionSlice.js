import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, join, leave } from '../redux/missions/missionSlice';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto p-4">
      {status === 'loading' && <div className="text-center">Loading...</div>}
      {status === 'failed' && <div className="text-red-500 text-center">{error}</div>}
      {status === 'succeeded' && (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Mission</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{mission.mission_name}</td>
                <td className="border px-4 py-2">{mission.description}</td>
                <td className="border px-4 py-2">
                  {mission.reserved ? (
                    <button
                      onClick={() => dispatch(leave(mission.mission_id))}
                      className="bg-red-500 text-white rounded px-4 py-2"
                    >
                      Leave
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(join(mission.mission_id))}
                      className="bg-green-500 text-white rounded px-4 py-2"
                    >
                      Join
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MissionList;