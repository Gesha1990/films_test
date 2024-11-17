import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link, useSearchParams } from 'react-router-dom';
import { Film } from 'src/redux/interfaces';
import { BASE_IMAGE_URL } from 'src/constants/constants';
import Rates from '../Rates/Rates';
import './style.css';

const FilmCard = ({ film }: { film: Film }) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const pageNumber = searchParams.get('page') || '1';
  const { original_title, id, vote_average, poster_path } = film;
  const isToolTip = original_title.length > 20;
  const nameString = name ? `&name=${name}` : '';
  const pageString = pageNumber ? `?page=${pageNumber}` : `?page=1`;
  return (
    <Link to={`filmDetails/${id}${pageString}${nameString}`}>
      <div className="filmBlock">
        <div data-tooltip-id={original_title} className="film_title">
          {original_title}
        </div>
        {isToolTip && (
          <ReactTooltip id={original_title} content={original_title} />
        )}
        <img src={`${BASE_IMAGE_URL}/${poster_path}`} />
        <Rates vote_average={vote_average} />
      </div>
    </Link>
  );
};

export default React.memo(FilmCard);
