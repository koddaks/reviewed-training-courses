import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import css from "./Rating.module.css";
import clsx from "clsx";

const Rating = ({ rating, maxRating = 5 }) => {
  return (
    <div className={css.rating}>
      <div className={css.stars}>
        {Array.from({ length: maxRating }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={clsx({
              [css.filled]: index < rating,
              [css.empty]: index >= rating,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
