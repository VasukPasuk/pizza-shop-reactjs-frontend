import './style.scss';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";

interface PaginationProps {
  total: number;
  currentPage: number;
  setCurrentPage: Function;
}

interface PageButtonProps {
  key: any
  setPage: Function;
  index: number
  currentPage: number
}

function PageButton({key, index, setPage, currentPage}: PageButtonProps) {
  return (
    <li key={key} data-active={index === currentPage} onClick={() => setPage(() => index)}>
      {index}
    </li>
  )
}

function Pagination({currentPage, setCurrentPage, total}: PaginationProps) {
  const itemsLength = Array.from({length: Math.ceil(total / 8)});

  return (
    <div className="pagination">
      <div className="showing-results">
        {`Showing ${1 + 8 * (currentPage - 1)} - ${8 * currentPage} of ${total} results`}
      </div>
      <div className="pagination-control">
        <button className="move-page-button">
          <FaArrowLeft/>
          <span>Previous</span>
        </button>
        <ul className="pagination-list">
          {itemsLength.map((_, idx) => (
            <PageButton key={idx} currentPage={currentPage} index={++idx} setPage={setCurrentPage}/>
          ))}
        </ul>
        <button className="move-page-button">
          <span>Next</span>
          <FaArrowRight/>
        </button>
      </div>
      {/*<div/>*/}
    </div>
  );
}

export default Pagination;
