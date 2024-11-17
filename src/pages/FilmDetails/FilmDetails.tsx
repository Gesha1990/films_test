import React, { useEffect } from 'react';
import BackArrow from 'src/assets/arrowLeft.svg';
import { useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { BASE_IMAGE_URL } from 'src/constants/constants';
import { fetchFilmDetails } from 'src/redux/filmDetailsSlice';
import { dispatch, RootState } from 'src/redux/store';
import './style.css';
import { Genre } from 'src/redux/interfaces';
import { ErrorBoundary, Rates } from 'src/components';

const FilmDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { filmDetails, error } = useSelector(
    (state: RootState) => state.filmDetails
  );
  const name = searchParams.get('name') || '';
  const { title, poster_path, vote_average, release_date, genres } =
    filmDetails;
  useEffect(() => {
    dispatch(fetchFilmDetails(id as string));
  }, [id]);
  return (
    <ErrorBoundary error={error}>
      <div className="filmDetailsWrapper">
        <Link to={`/?page=1${name ? `&name=${name}` : ''}`}>
          <img src={BackArrow} className="backArrow" />
        </Link>
        <h2 className="title">{title}</h2>
        <img className="poster" src={`${BASE_IMAGE_URL}${poster_path}`} />
        <div className="rateWrapper">
          <Rates vote_average={vote_average} />
        </div>
        <div>
          {filmDetails.overview}
          <hr />
          <span>Release: &nbsp;{release_date}</span>
          <hr />
          <span> Genres: &nbsp;</span>
          {genres?.map((genre: Genre, key: string) => (
            <span key={key}>&nbsp;{genre.name};</span>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default React.memo(FilmDetails);
