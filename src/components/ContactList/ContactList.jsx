import s from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/tasksSlice";
import { selectSearchStr } from "../../redux/searchSlice";

const ContactList = () => {
	const contacts = useSelector(selectContacts);
	console.log(contacts);
	const filterName = useSelector(selectSearchStr);
	const filteredData = contacts.filter((contact) =>
		contact.name.toLowerCase().trim().includes(filterName.toLowerCase().trim())
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
