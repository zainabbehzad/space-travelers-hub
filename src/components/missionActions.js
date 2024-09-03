// actions/missionActions.js (update)
import axios from 'axios';

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    dispatch({
      type: 'SET_MISSIONS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Failed to fetch missions:', error);
  }
};
