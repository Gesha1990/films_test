import { dispatch, store } from 'src/redux/store';
import { fetchFilmDetails } from '../filmDetailsSlice';
import { fetchPopularFilms } from '../filmsSlice';
import instance from 'src/api/api';

const filmMock = {
  adult: true,
  backdrop_path: '',
  genre_ids: [11],
  id: 123,
  media_type: 'some',
  original_language: 'en',
  original_title: 'Some title',
  overview: 'overviw',
  popularity: 123,
  poster_path: 'path',
  release_date: '12.11.2024',
  title: 'title',
  video: true,
  vote_average: 123,
  vote_count: 111
};
jest.mock('axios', () => {
  return {
    create: jest.fn
  };
});
jest.mock('../../api/api.ts', () => {
  return {
    get: () => {
      return {
        data: {
          results: [filmMock]
        }
      };
    }
  };
});
describe('Check all thunks and reducers working', () => {
  it('Check thunk fetchPopularFilms and reducer films working', async function () {
    await dispatch(fetchPopularFilms('12'));
    expect(store.getState().films.favoriteFilms[0].title).toBe('title');
    expect(store.getState().films.error).toBe('');
  });
  it('Check thunk fetchPopularFilms calling get request', async function () {
    const spy = jest.spyOn(instance, 'get');
    await dispatch(fetchFilmDetails('12'));
    expect(spy).toHaveBeenCalled();
  });
});
