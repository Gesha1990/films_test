import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/api';
import { FilmsResponse, FilmsState } from './interfaces';

const initialState: FilmsState = {
  favoriteFilms: [],
  pagesCount: 0,
  error: ''
};
export const fetchPopularFilms = createAsyncThunk(
  'films',
  async (page: string, thunkAPI) => {
    try {
      const response: FilmsResponse = await instance.get(
        `/movie/popular?page=${page}`
      );
      return response.data;
      /* eslint-disable */
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchSearchFilms = createAsyncThunk(
  'searchFilms',
  async (data: { name: string; pageNumber: string }, thunkAPI) => {
    try {
      const response: FilmsResponse = await instance.get(
        `search/movie?query=${data.name}&page=${data.pageNumber}`
      );
      return response.data;
      /* eslint-disable */
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
    builder.addCase(fetchPopularFilms.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(fetchPopularFilms.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload.results;
      state.pagesCount = action.payload.total_pages;
    });
    builder.addCase(fetchSearchFilms.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload.results;
      state.pagesCount = action.payload.total_pages;
    });
  }
});
