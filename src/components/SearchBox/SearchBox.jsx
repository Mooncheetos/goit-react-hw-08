import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const searchFilter = (e) => {
        dispatch(changeFilter(e.target.value));
     };
    return (
        <div className={css.searchWrap}>
            <p className={css.searchTitle}>Find contacts name or number</p>
            <input className={css.searchInput}
                type="text"
                value={filter}
                onChange={searchFilter}
                    />
        </div>
    );
}

export default SearchBox;