// Initial state for the reducer
const initialState = {
    missions: [], // Initialize missions as an empty array
  };
  
  // Mission reducer function
  const missionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MISSIONS':
        return {
          ...state,
          missions: action.payload, // Ensure payload is an array of missions
        };
      // Include additional cases here if needed...
      default:
        return state;
    }
  };
  
  export default missionReducer;
  