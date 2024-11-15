import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/api';

interface CounterState {
  favoriteFilms: any[];
  pagesCount: number;
  loading: boolean;
  error: boolean | string;
}

const initialState: CounterState = {
  favoriteFilms: [],
  pagesCount: 0,
  loading: true,
  error: false
};
export const fetchFavoriteFilms = createAsyncThunk(
  'films',
  async (page: string) => {
    try {
      const response = await instance.get(
        `trending/movie/day?language=en-US&page=${page}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload.results;
      state.pagesCount = action.payload.total_pages;
      state.loading = false;
    });
    builder.addCase(fetchFavoriteFilms.rejected, (state) => {
      state.error = 'Something went wrong';
    });
  }
});
