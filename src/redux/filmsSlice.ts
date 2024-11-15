import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/api';
import { FilmsResponse, FilmsState } from './interfaces';

const initialState: FilmsState = {
  favoriteFilms: [],
  pagesCount: 0,
  error: ''
};
export const fetchFavoriteFilms = createAsyncThunk(
  'films',
  async (page: string, thunkAPI) => {
    try {
      const response: FilmsResponse = await instance.get(
        `trending/movie/day?language=en-US&page=${page}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteFilms.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload.results;
      state.pagesCount = action.payload.total_pages;
    });
  }
});
