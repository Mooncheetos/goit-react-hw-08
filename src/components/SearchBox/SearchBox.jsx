import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const searchFilter = (e) => {
        dispatch(changeFilter(e.target.value));
     };
    return (
        <div className={css.searchWrap}>
            <p className={css.searchTitle}>Find contacts name</p>
            <input className={css.searchInput}
                type="text"
                value={filter}
                onChange={searchFilter}
                    />
        </div>
    );
}

export default SearchBox;