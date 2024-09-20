import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import css from "./SortMenuInput.module.css";

const SortMenuInput = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className={css.input_wrapper}>
      <FontAwesomeIcon icon={faArrowDownWideShort} className={css.arrow} />
      <label htmlFor="sort">Сортувати за:</label>
      <select id="sort" onChange={handleSortChange} className={css.input}>
        <option value="Найновіші" className={css.option}>
          Найновіші
        </option>
        <option value="Найстаріші">Найстаріші</option>
        <option value="Найпопулярніші">Найпопулярніші</option>
        <option value="Найкращі">Найкращі</option>
      </select>
    </div>
  );
};

export default SortMenuInput;
