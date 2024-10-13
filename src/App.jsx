import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/tasksOps";
import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);
	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
};
export default App;
