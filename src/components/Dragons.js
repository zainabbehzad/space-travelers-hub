import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserveDragon, cancelReservation } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Dragons</h2>
      {status === 'loading' && <p className="text-center">Loading...</p>}
      {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dragons.map((dragon) => (
          <li key={dragon.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">{dragon.name}</h3>
            <p className="text-gray-700 mb-4">Type: {dragon.type}</p>
            <img 
              src={dragon.flickr_images[0]} 
              alt={dragon.name} 
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            {dragon.reserved ? (
              <button 
                onClick={() => handleCancel(dragon.id)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Cancel Reservation
              </button>
            ) : (
              <button 
                onClick={() => handleReserve(dragon.id)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Reserve Dragon
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragons;
