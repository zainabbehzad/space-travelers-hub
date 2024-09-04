import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';

const RocketsItem = ({
  id, name, image, description, reserved,
}) => {
  const dispatch = useDispatch();
  const reserveRockets = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <li className="flex bg-white shadow-md rounded-lg p-4">
      <img
        className="w-64 h-auto rounded-lg mr-4"
        alt="rocket"
        src={image}
      />
      <div className="flex-1">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-gray-700">
          {reserved && <span className="text-green-500 font-semibold">Reserved</span>}
          {description}
        </p>
        <button
          onClick={() => reserveRockets(id)}
          className={`mt-2 px-4 py-2 rounded-lg text-white ${reserved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          type="button"
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;