import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  CustomPagination,
  ErrorBoundary,
  FilmCard,
  SearchPanel
} from 'src/components';
import { Film } from 'src/redux/interfaces';
import { dispatch, RootState } from 'src/redux/store';
import { fetchPopularFilms, fetchSearchFilms } from 'src/redux/filmsSlice';
import './style.css';

const FilmsPage = () => {
  const { favoriteFilms, pagesCount, error } = useSelector(
    (state: RootState) => state.films
  );
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1';
  const name = searchParams.get('name') || '';
  useEffect(() => {
    if (!name) {
      dispatch(fetchPopularFilms(pageNumber));
    }
  }, [pageNumber, name]);

  useEffect(() => {
    if (name) {
      dispatch(fetchSearchFilms({ name, pageNumber }));
    }
  }, [name, pageNumber]);

  const renderedFilms = useMemo((): React.ReactElement[] => {
    return favoriteFilms.map((film: Film, key) => {
      return <FilmCard film={film} key={key} />;
    });
  }, [pageNumber, favoriteFilms]);
  const isFilms = renderedFilms.length > 0;
  return (
    <ErrorBoundary error={error}>
      <div>
        <SearchPanel />
        <div className="filmsWrapper">
          {isFilms ? (
            renderedFilms
          ) : (
            <div className="emptyResult">No results</div>
          )}
        </div>
        {isFilms && (
          <CustomPagination page={pageNumber} pagesCount={pagesCount} />
        )}
      </div>
    </ErrorBoundary>
  );
};
export default FilmsPage;
