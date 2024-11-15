import React from 'react';
import Rater from 'react-rater';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from './constats';
import './style.css';
import 'react-tooltip/dist/react-tooltip.css';

const FilmCard = ({ film }: any) => {
  const isToolTip = film.original_title.length > 20;
  console.log(film, 222);
  return (
    <div className="filmBlock">
      <Link to={`${film}`}>
        <div data-tooltip-id={film.original_title} className="film_title">
          {film.original_title}
        </div>
        {isToolTip && (
          <ReactTooltip
            id={film.original_title}
            content={film.original_title}
          />
        )}

        <img src={`${BASE_IMAGE_URL}/${film.poster_path}`} />
        <Rater
          total={10}
          rating={Math.round(film.vote_average)}
          interactive={false}
          data-tooltip-id={`${film.vote_average}`}
        />
        <ReactTooltip id={`${film.vote_average}`} content={film.vote_average} />
      </Link>
    </div>
  );
};

export default React.memo(FilmCard);
