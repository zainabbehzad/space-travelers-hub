const initialState = {
    missions: [],
  };

  const missionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MISSIONS':
        return {
          ...state,
          missions: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default missionReducer;
