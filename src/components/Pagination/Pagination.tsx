import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';
import { IProps } from './interfaces';
import './style.css';

const CustomPagination = ({ page, pagesCount }: IProps) => {
  const navigate = useNavigate();

  const handlePageClick = (event: { selected: number }): void => {
    navigate(`/?page=${event.selected + 1}`);
  };
  const currentPage = Number(page) < 0 ? 0 : Number(page) - 1;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pagesCount}
      previousLabel="< previous"
      className="pagination"
      forcePage={currentPage}
    />
  );
};
export default React.memo(CustomPagination);
