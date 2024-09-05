// src/redux/missions/missionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch missions
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  return response.json();
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    join: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = true;
      }
    },
    leave: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload.map((mission) => ({ ...mission, reserved: false }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { join, leave } = missionSlice.actions;

// Export reducer
export default missionSlice.reducer;

