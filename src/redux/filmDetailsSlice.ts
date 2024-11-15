import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/api';
import { FilmDetails, FilmDetailsState } from './interfaces';

const initialState: FilmDetailsState = {
  filmDetails: {},
  error: ''
};
export const fetchFilmDetails = createAsyncThunk(
  'filmDetails',
  async (filmId: string, thunkAPI) => {
    try {
      const response: { data: FilmDetails } = await instance.get(
        `/movie/${filmId}`
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filmDetailsSlice = createSlice({
  name: 'filmDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmDetails.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(fetchFilmDetails.fulfilled, (state, action) => {
      state.filmDetails = action.payload;
    });
  }
});
