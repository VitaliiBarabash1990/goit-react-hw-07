import { configureStore } from "@reduxjs/toolkit";
import { searchFilterReducer } from "./searchSlice";
import { tasksReduser } from "./tasksSlice";

export const store = configureStore({
	reducer: {
		tasks: tasksReduser,
		searchFilter: searchFilterReducer,
	},
});
