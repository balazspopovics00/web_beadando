import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { station } from '../types/Station';

const emptyStations:station[] = [];

export const stationReducer = createSlice({
  name: 'stations',
  initialState: {
    stations: emptyStations
  },
  reducers: {
    fetchAll: (state, action: PayloadAction<station[]>) => {
      state.stations = [...action.payload];
    }
  }
});

export const { fetchAll } = stationReducer.actions;

export default stationReducer.reducer;
