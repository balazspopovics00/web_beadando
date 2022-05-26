import { configureStore } from '@reduxjs/toolkit';
import stationReducer from './stationReducer';

const stationStore = configureStore({
  reducer: {
    stationReducer: stationReducer
  }
});

export default stationStore;
export type RootState = ReturnType<typeof stationStore.getState>
export type AppDispatch = typeof stationStore.dispatch
