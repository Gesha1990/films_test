import React, { useEffect } from 'react';
import BackArrow from 'src/assets/arrowLeft.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BASE_IMAGE_URL } from 'src/constants/constants';
import { fetchFilmDetails } from 'src/redux/filmDetailsSlice';
import { AppDispatch, RootState } from 'src/redux/store';
import './style.css';
import { Genre } from 'src/redux/interfaces';
import { ErrorBoundary, Rates } from 'src/components';

const FilmDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { filmDetails, error } = useSelector(
    (state: RootState) => state.filmDetails
  );
  useEffect(() => {
    dispatch(fetchFilmDetails(id as string));
  }, [id]);
  return (
    <ErrorBoundary error={error}>
      <div className="filmDetailsWrapper">
        <Link to={`/?page=1`}>
          <img src={BackArrow} className="backArrow" />
        </Link>
        <h2 className="title">{filmDetails.title}</h2>
        <img
          className="poster"
          src={`${BASE_IMAGE_URL}${filmDetails.poster_path}`}
        />
        <div className="rateWrapper">
          <Rates vote_average={filmDetails.vote_average} place="filmDetails" />
        </div>
        <div>
          {filmDetails.overview}
          <hr />
          Release: &nbsp;{filmDetails.release_date}
          <hr />
          Genres: &nbsp;
          {filmDetails.genres?.map((genre: Genre, key: string) => (
            <span key={key}>&nbsp;{genre.name};</span>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default React.memo(FilmDetails);
