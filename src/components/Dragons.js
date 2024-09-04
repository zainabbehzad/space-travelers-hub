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
    <div>
      <h2>Dragons</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <h3>{dragon.name}</h3>
            <p>Type: {dragon.type}</p>
            <img src={dragon.flickr_images[0]} alt={dragon.name} width="200" />
            {dragon.reserved ? (
              <button onClick={() => handleCancel(dragon.id)}>Cancel Reservation</button>
            ) : (
              <button onClick={() => handleReserve(dragon.id)}>Reserve Dragon</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragons;
