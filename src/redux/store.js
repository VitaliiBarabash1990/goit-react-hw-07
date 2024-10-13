import { configureStore } from "@reduxjs/toolkit";
import { searchFilterReducer } from "./searchSlice";
import { contactsReduser } from "./contactsSlice";

export const store = configureStore({
	reducer: {
		contacts: contactsReduser,
		filters: searchFilterReducer,
	},
});
