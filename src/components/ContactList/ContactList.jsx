import s from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectTasks } from "../../redux/tasksSlice";
import { selectSearchStr } from "../../redux/searchSlice";

const ContactList = () => {
	const contacts = useSelector(selectTasks);
	console.log(contacts);
	const searchStr = useSelector(selectSearchStr);
	const filteredData = contacts.filter((task) =>
		task.name.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
	);

	return (
		<>
			<ul className={s.contain}>
				{filteredData.map((contact) => (
					<Contact key={contact.id} {...contact} />
				))}
			</ul>
		</>
	);
};

export default ContactList;
