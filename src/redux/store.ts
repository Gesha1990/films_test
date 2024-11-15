import { configureStore } from '@reduxjs/toolkit';
import { filmsSlice } from './filmsSlice';

export const store = configureStore({
  reducer: { films: filmsSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
