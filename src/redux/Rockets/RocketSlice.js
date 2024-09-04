import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromServer } from '../redux/Rocket/RocketSlice';
import Rockets from './Rockets'; // Assuming this is where the Rockets component is defined

const RocketsContainer = () => {
  const dispatch = useDispatch();
  const { rocketData, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">SpaceX Rockets</h1>
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rocketData.map((rocket) => (
          <div key={rocket.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={rocket.image} alt={rocket.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{rocket.name}</h2>
            <p className="text-gray-700 mb-2">{rocket.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Reserve Rocket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketsContainer;