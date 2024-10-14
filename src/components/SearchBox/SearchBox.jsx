import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearch, selectSearchStr } from "../../redux/filtersSlice";

const SearchBox = () => {
	const search = useSelector(selectSearchStr);

	const dispatch = useDispatch();
	return (
		<label className={s.label}>
			<span className={s.text}>Find contacts by name</span>
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => dispatch(changeSearch(e.target.value))}
			/>
		</label>
	);
};

export default SearchBox;
