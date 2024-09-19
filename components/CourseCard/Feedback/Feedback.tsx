import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faShield,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import css from "./Feedback.module.css";
import Rating from "../Rating/Rating";
import PaginationMobile from "../PaginationMobile/PaginationMobile";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Feedback = ({ rating, maxLength = 150 }) => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam adipisci laudantium impedit nobis eos neque quod consectetur dignissimos cum, corporis beatae ullam expedita, omnis vero obcaecati libero! Debitis, sint?
  Labore at ipsum necessitatibus debitis quidem esse nulla eum perspiciatis! Accusamus repellendus repudiandae, ratione eaque ea quae error animi quos non deleniti, corrupti reprehenderit odit aut nesciunt saepe necessitatibus illum.
  Quidem numquam delectus eos quam beatae itaque, culpa ab nulla commodi quae nesciunt suscipit cupiditate odit eveniet illum voluptatem sit deserunt. Ab quae dolorum natus, ullam similique iste tenetur possimus!
  Porro nisi aut, nesciunt facilis laboriosam recusandae culpa doloribus iure consectetur hic nemo magnam, quae minus voluptatem tempora eos excepturi praesentium! Ipsam doloremque modi unde illo enim facere natus animi!`;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <div className={css.user_img}></div>
        <div className={css.user_info}>
          <div className={css.user_container}>
            <div className={css.user_verification}>
              <p className={css.user_name}>Name</p>
              <FontAwesomeIcon icon={faShield} className={css.icon} />
              <p className={css.user_verification_text}>
                Verified Via LinkedIn
              </p>
            </div>
            <div>
              <p className={css.user_status}>Student</p>
            </div>
          </div>
          <div>
            <p className={css.user_data}>Data</p>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className={css.review}>
        <p className={css.review_text}>
          {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        </p>
        <button onClick={toggleText} className={css.review_btn}>
          {isExpanded ? "Згорнути" : "Показати повністю"}
        </button>
      </div>
      <div className={css.action}>
        <ul className={css.action_list}>
          <li className={css.action_report}>
            <FontAwesomeIcon icon={faFontAwesome} />
            <p className={css.action_text}>Report</p>
          </li>
          <li className={css.action_social}>
            <div className={css.action_group}>
              <FontAwesomeIcon icon={faShareNodes} />
              <p className={css.action_text}>Share</p>
            </div>
            <div className={css.action_group}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <p className={css.action_text}>21</p>
            </div>
          </li>
        </ul>
      </div>
      <PaginationMobile />
      <Pagination />
    </div>
  );
};

export default Feedback;
