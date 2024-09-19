import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import css from "./PaginationMobile.module.css";

const PaginationMobile = () => {
  return (
    <div className={css.pagination}>
      <button type="button" className={css.pagination_btn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <p className={css.pagination_text}>
        <span className={css.pagination_bold}>Page 1</span> out of 22
      </p>
      <button type="button" className={css.pagination_btn}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default PaginationMobile;
