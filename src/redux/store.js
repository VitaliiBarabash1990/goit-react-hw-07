import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { searchFilterReducer } from "./filtersSlice";

export const store = configureStore({
	reducer: {
		contacts: contactsReduser,
		filters: searchFilterReducer,
	},
});
