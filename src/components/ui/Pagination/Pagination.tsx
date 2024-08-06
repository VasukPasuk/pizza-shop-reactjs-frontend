import './style.scss';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import React from "react";

interface PaginationProps {
  total: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PageButtonProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  index: number
  currentPage: number
}

function PageButton({index, setPage, currentPage}: PageButtonProps) {
  return (
    <li data-active={index === currentPage} onClick={() => setPage(() => index)}>
      {index}
    </li>
  )
}

function Pagination({currentPage, setCurrentPage, total}: PaginationProps) {
  const pagesArray = Array.from({length: Math.ceil(total / 8)});
  const MAX_PAGES = pagesArray.length

  const prevButtonHandler = () => {
    setCurrentPage(prev => prev === 1 ? 1 : prev - 1);
  }
  const nextButtonHandler = () => {
    setCurrentPage(prev => MAX_PAGES === prev ? MAX_PAGES : prev + 1);
  }

  const currentResults = `${(currentPage - 1) * 8 + 1} - ${currentPage !== MAX_PAGES ? currentPage * 8 : total}`

  return (
    <div className="pagination">
      <div className="showing-results">
        {`Showing ${currentResults} of ${total} results`}
      </div>
      <div className="pagination-control">
        <button
          className="move-page-button"
          onClick={prevButtonHandler}
        >
          <FaArrowLeft/>
          <span>Previous</span>
        </button>
        <ul className="pagination-list">
          {pagesArray.map((_, idx) => (
            <PageButton key={idx} currentPage={currentPage} index={++idx} setPage={setCurrentPage}/>
          ))}
        </ul>
        <button
          className="move-page-button"
          onClick={nextButtonHandler}
        >
          <span>Next</span>
          <FaArrowRight/>
        </button>
      </div>
      {/*<div/>*/}
    </div>
  );
}

export default Pagination;
