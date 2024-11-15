import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import {
  CustomPagination,
  ErrorBoundary,
  FilmCard,
  Loading,
  SearchPanel
} from 'src/components';
import { AppDispatch, RootState } from 'src/redux/store';
import { fetchFavoriteFilms } from 'src/redux/filmsSlice';
import './style.css';

export const FilmsPage = () => {
  const { favoriteFilms, pagesCount, loading } = useSelector(
    (state: RootState) => state.films
  );
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1';

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFavoriteFilms(pageNumber));
  }, [pageNumber]);

  const renderedFilms = useMemo((): React.ReactElement[] => {
    return favoriteFilms.map((film: any, key) => {
      return <FilmCard film={film} key={key} />;
    });
  }, [pageNumber, favoriteFilms]);
  return (
    <>
      <ErrorBoundary>
        <Loading loading={loading} />
        <SearchPanel />
        <div className="filmsWrapper">{renderedFilms}</div>
        <CustomPagination page={pageNumber} pagesCount={pagesCount} />
      </ErrorBoundary>
    </>
  );
};
