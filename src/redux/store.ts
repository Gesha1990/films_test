import { configureStore } from '@reduxjs/toolkit';
import { filmsSlice } from './filmsSlice';
import { filmDetailsSlice } from './filmDetailsSlice';

export const store = configureStore({
  reducer: { films: filmsSlice.reducer, filmDetails: filmDetailsSlice.reducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
