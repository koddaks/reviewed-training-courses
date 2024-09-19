import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBuildingColumns,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import css from "./CourseCard.module.css";
import Rating from "./Rating/Rating";
import Submenu from "./Submenu/Submenu";
import Rewiew from "./Rewiew/Rewiew";
import Feedback from "./Feedback/Feedback";
import SortMenuInput from "./SortMenuInput/SortMenuInput";
import { useState } from "react";

const CourseCard = () => {
  const rating = 3.1;

  const [sortOption, setSortOption] = useState("Найновіші");

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.title_wrapper}>
        <div className={css.logo}></div>
        <div className={css.name_rating_w}>
          <div className={css.name_wrapper}>
            <p className={css.name}>QA тестування. Тестувальник ПЗ</p>
          </div>
          <div className={css.rating}>
            <Rating rating={rating} />
            <p>&nbsp;({rating})</p>
          </div>
        </div>
      </div>

      <Submenu />

      <section id="course" className={css.section_course}>
        <h3 className={css.title_course}>Про курс</h3>

        <p className={css.price}>
          <span className={css.price_span}>Ціна за навчання:</span> 2 000 грн
          (місяць)
        </p>

        <p className={css.about_course}>
          Курс "QA тестування. Тестувальник ПЗ" допоможе вам освоїти основи
          тестування програмного забезпечення та стати професіоналом у сфері
          контролю якості. Ви навчитеся працювати з різними інструментами
          тестування, створювати тест-кейси, знаходити та документувати
          помилки,а також зрозумієте роль тестувальника у розробці продукту.
          Курс також охоплює основи автоматизованого тестування, що дозволить
          вам ефективніше контролювати якість програмного забезпечення та
          підвищити свою конкурентоспроможність на ринку праці.
        </p>

        <div>
          <p className={css.title_skill}>Навички які ви отримаєте:</p>
          <ul className={css.list_skill}>
            <li className={css.item_skill}>Основи тестування ПЗ</li>
            <li className={css.item_skill}>Розробка і виконання тест-кейсів</li>
            <li className={css.item_skill}>
              Інструменти тестування (Selenium, JIRA тощо)
            </li>
            <li className={css.item_skill}>Робота з документацією</li>
            <li className={css.item_skill}>Основи SQL</li>
            <li className={css.item_skill}>
              Автоматизація тестування (мови програмування)
            </li>
            <li className={css.item_skill}>Командна робота</li>
            <li className={css.item_skill}>Основи Agile і Scrum</li>
            <li className={css.item_skill}>Аналіз і планування тестів</li>
          </ul>
        </div>

        <p className={css.title_category}>Категорії курса</p>

        <p className={css.name_category}>Інформаційні технології, IT</p>
        <ul className={css.list_category}>
          <li className={css.item_category}>
            <a href="#">Програмування, розробка</a>
          </li>
        </ul>
      </section>

      <section className={css.company} id="company">
        <h2 className={css.title_company}>Про компанію</h2>

        <ul className={css.company_list}>
          <li className={css.company_item}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p className={css.company_text}>Online</p>
          </li>
          <li className={css.company_item}>
            <FontAwesomeIcon icon={faBuildingColumns} />
            <p className={css.company_text}>Lemon IT School</p>
          </li>
          <li className={css.company_item}>
            <FontAwesomeIcon icon={faGlobe} />
            <p className={css.company_text}>lemon.school</p>
          </li>
        </ul>

        <ul className={css.btn_list}>
          <li className={css.btn_item}>
            <button type="button" className={css.contact_btn}>
              Зв’язатися з компанією
            </button>
          </li>
          <li className={css.btn_item}>
            <button type="button" className={css.show_btn}>
              Показати контакти
            </button>
          </li>
        </ul>
      </section>
      <h2 className={css.title_rewiew}>Відгуки</h2>
      <Rewiew rating={rating} />
      <button type="button" className={css.btn_feedback}>
        Написати відгук
      </button>
      <SortMenuInput onSortChange={handleSortChange} />
      <Feedback rating={rating} />
      <div className={css.noFeedback}>
        <img
          src="../../../shared/images/CourseCard/icons/vector.svg"
          alt="vector"
          className={css.noFeedback_vector}
        />
        <p className={css.noFeedback_title}>Тут ще ніхто не залишив відгук</p>
        <p className={css.noFeedback_text}>
          Станьте першим,
          <br className={css.mobileOnly} /> хто поділиться враженням!
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
