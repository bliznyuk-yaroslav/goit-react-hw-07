import css from "../SearchBox/SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterContacts,
  selectVisibleContacts,
} from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterVal = useSelector(selectVisibleContacts);

  const handleFilter = (e) => dispatch(filterContacts(e.target.value));

  return (
    <div className={css.cont}>
      <label className={css.text}> Find contact by name:</label>
      <input
        type="text"
        className={css.input}
        name="filter"
        placeholder="Enter name to filter"
        value={filterVal}
        onChange={handleFilter}
      />
    </div>
  );
}
