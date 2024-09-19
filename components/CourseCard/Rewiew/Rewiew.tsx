import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import css from "../Rewiew/Rewiew.module.css";

const Rewiew = ({ rating }) => {
  return (
    <section id="reviews" className={css.rewiew}>
      <div className={css.info_rewiew}>
        <p className={css.info_total}>Загальна кількість</p>
        <p className={css.info_total_n}>255</p>
        <p className={css.info_summary}>Середній рейтинг</p>
        <p className={css.info_summary_n}>{rating}</p>
        <div className={css.info_summary_stars}>
          <Rating rating={rating} />
        </div>

        <button type="button" className={css.btn_detail}>
          Подивитись детальніше
        </button>
      </div>
      <div className={css.starsRaiting}>
        <div className={css.star_wrapper}>
          <FontAwesomeIcon icon={faStar} />
          <p className={css.star_number}>5</p>
          <div className={css.bar} id="progress_bar"></div>
          <p className={css.star_summ}>30</p>
        </div>
        <div className={css.star_wrapper}>
          <FontAwesomeIcon icon={faStar} />
          <p className={css.star_number}>4</p>
          <div className={css.bar} id="progress_bar"></div>
          <p className={css.star_summ}>30</p>
        </div>
        <div className={css.star_wrapper}>
          <FontAwesomeIcon icon={faStar} />
          <p className={css.star_number}>3</p>
          <div className={css.bar} id="progress_bar"></div>
          <p className={css.star_summ}>30</p>
        </div>
        <div className={css.star_wrapper}>
          <FontAwesomeIcon icon={faStar} />
          <p className={css.star_number}>2</p>
          <div className={css.bar} id="progress_bar"></div>
          <p className={css.star_summ}>30</p>
        </div>
        <div className={css.star_wrapper}>
          <FontAwesomeIcon icon={faStar} />
          <p className={css.star_number}>1</p>
          <div className={css.bar} id="progress_bar"></div>
          <p className={css.star_summ}>30</p>
        </div>
      </div>
    </section>
  );
};

export default Rewiew;
