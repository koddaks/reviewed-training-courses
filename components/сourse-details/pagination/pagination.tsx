import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const itemsPerPage = 10;
const totalItems = 100;
const items = [...Array(totalItems).keys()];

function App() {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={css.app}>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>Item #{item + 1}</li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={css.pagination}
        previousLinkClassName={css.pagination__link}
        nextLinkClassName={css.pagination__link}
        disabledClassName={css.pagination__link_disabled}
        activeClassName={css.pagination__link_active}
        breakLabel={"..."}
        breakClassName={css.pagination__break}
        pageClassName={css.pagination__page}
      />
    </div>
  );
}

export default App;
