import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleSearch = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        className={css.searchLine}
        id="searchBox"
        type="text"
        value={filterValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
